import { createServer } from "node:http";
import { createReadStream } from "node:fs";
import { promises as fs } from "node:fs";
import { extname, join, relative, resolve, sep } from "node:path";
import { chromium } from "playwright";

const repositoryRoot = resolve(process.env.REPOSITORY_ROOT || process.cwd());
const converterRoot = resolve(process.env.CONVERTER_ROOT || join(repositoryRoot, "converter"));
const outputRoot = resolve(process.env.OUTPUT_ROOT || join(repositoryRoot, "dist", "pdfs"));
const port = Number(process.env.CONVERTER_PORT || 4173);

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".xml": "application/xml; charset=utf-8"
};

async function markdownFiles(root) {
  const entries = await fs.readdir(root, { withFileTypes: true });
  const result = [];
  for (const entry of entries) {
    if (entry.name === ".git" || entry.name === "converter" || entry.name === "dist" || entry.name === "node_modules") continue;
    const path = join(root, entry.name);
    if (entry.isDirectory()) {
      result.push(...await markdownFiles(path));
    } else if (entry.isFile() && /\.(md|markdown)$/i.test(entry.name)) {
      result.push(path);
    }
  }
  return result.sort();
}

function safeFilePath(requestPath) {
  const decoded = decodeURIComponent(requestPath.split("?")[0]);
  const candidate = resolve(converterRoot, "." + (decoded === "/" ? "/index.html" : decoded));
  const rootWithSeparator = converterRoot.endsWith(sep) ? converterRoot : converterRoot + sep;
  if (candidate !== converterRoot && !candidate.startsWith(rootWithSeparator)) return null;
  return candidate;
}

function startStaticServer() {
  const server = createServer((request, response) => {
    const filePath = safeFilePath(request.url || "/");
    if (!filePath) {
      response.writeHead(403);
      response.end("Forbidden");
      return;
    }
    createReadStream(filePath)
      .on("error", () => {
        response.writeHead(404);
        response.end("Not found");
      })
      .on("open", () => {
        response.writeHead(200, {
          "Content-Type": mimeTypes[extname(filePath).toLowerCase()] || "application/octet-stream",
          "Cache-Control": "no-store"
        });
      })
      .pipe(response);
  });
  return new Promise((resolveServer, reject) => {
    server.once("error", reject);
    server.listen(port, "127.0.0.1", () => resolveServer(server));
  });
}

function titleFrom(markdown, filePath) {
  const heading = markdown.match(/^#\s+(.+)$/m)?.[1]?.trim();
  return heading || filePath.replace(/\.(md|markdown)$/i, "");
}

function outputName(filePath, markdown) {
  const base = titleFrom(markdown, filePath)
    .replace(/[^\p{L}\p{N}._-]+/gu, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
  return (base || "document") + ".pdf";
}

async function renderDocument(page, filePath) {
  const markdown = await fs.readFile(filePath, "utf8");
  const title = titleFrom(markdown, filePath);
  const outputPath = join(outputRoot, outputName(filePath, markdown));

  await page.goto("http://127.0.0.1:" + port + "/index.html", { waitUntil: "networkidle" });
  await page.setViewportSize({ width: 1440, height: 1200 });
  await page.selectOption("#page-size", "a4");
  await page.selectOption("#page-margin", "16");
  await page.selectOption("#preview-theme", "paper");
  await page.locator("#code-wrap").setChecked(true);
  await page.locator("#dark-palette").setChecked(false);
  await page.locator("#doc-title").fill(title);
  await page.locator("#editor").fill(markdown);

  await page.evaluate(async () => {
    if (typeof window.render === "function") await window.render();
  });
  await page.waitForFunction(() => {
    const preview = document.querySelector("#preview");
    return preview && preview.textContent.trim().length > 20;
  });
  await page.waitForTimeout(1200);

  const renderingErrors = await page.locator("#preview .mermaid.error").count();
  if (renderingErrors > 0) {
    throw new Error(filePath + " contains " + renderingErrors + " Mermaid rendering error(s)");
  }

  await page.emulateMedia({ media: "print" });
  await page.pdf({
    path: outputPath,
    printBackground: true,
    preferCSSPageSize: true,
    displayHeaderFooter: false
  });

  const stat = await fs.stat(outputPath);
  if (stat.size < 1000) throw new Error("Generated PDF is unexpectedly small: " + outputPath);
  console.log("Rendered " + relative(repositoryRoot, filePath) + " -> " + relative(repositoryRoot, outputPath));
}

const server = await startStaticServer();
const browser = await chromium.launch({ headless: true });
try {
  await fs.rm(outputRoot, { recursive: true, force: true });
  await fs.mkdir(outputRoot, { recursive: true });
  const files = await markdownFiles(repositoryRoot);
  if (!files.length) throw new Error("No Markdown files were found");
  const page = await browser.newPage();
  for (const filePath of files) await renderDocument(page, filePath);
  await page.close();
} finally {
  await browser.close();
  await new Promise((resolveClose) => server.close(resolveClose));
}
