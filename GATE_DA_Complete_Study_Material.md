# GATE DA Complete Study Material

## Data Science and Artificial Intelligence + General Aptitude

This guide is written for a beginner who wants to build understanding from the ground up and then reach examination level. It follows the topics in the supplied DA_GATE2027_Syllabus.pdf and GA_GATE2027_Syllabus.pdf.

For deeper worked patterns, evaluation metrics, database design examples, and additional exam traps, use the companion [expanded coverage supplement](GATE_DA_Expanded_Coverage_Supplement.md).

The supplied 2024–2026 papers and answer keys are solved in the companion [PYQ solutions volume](GATE_DA_PYQ_Solutions.md).

The goal is not to memorize isolated tricks. The goal is to make every topic answer four questions:

1. What problem does this idea solve?
2. What is the simplest definition?
3. What formula or algorithm must I use?
4. How do I recognize it in an exam question?

> **Scope note:** the supplied PDFs define the topics, but they do not specify the final paper pattern, marks, cut-offs, or institute-wise admission rules. Check the official GATE information brochure for the relevant year before making admission decisions.

---

## How to use this book

Study each topic in three passes.

### Pass 1: Understand

Read the explanation, redraw the diagrams, and solve the worked example without looking at the answer.

### Pass 2: Retrieve

Close the book and write the definitions, formulas, edge cases, and algorithm steps from memory.

### Pass 3: Perform

Solve mixed questions under time pressure. Maintain an error log with four columns:

| Question | Mistake type | Correct idea | Prevention rule |
|---|---|---|---|
| Bayes example | Reversed a conditional | Use the full Bayes fraction | Write numerator and denominator first |

Use this mastery scale:

- **0 — unfamiliar:** cannot explain the terms.
- **1 — understood:** can explain, but cannot solve reliably.
- **2 — practiced:** solves standard questions.
- **3 — exam-ready:** solves mixed and tricky questions with a time limit.

Do not call a topic complete until it is at level 3.

---

<div class="page-break"></div>

# Part I — Master roadmap

## Recommended 24-week sequence

The order reduces dependency problems: probability supports statistics and ML; linear algebra supports regression, PCA, and neural networks; programming supports algorithms and practical data work.

~~~mermaid
flowchart LR
    A[Foundation: Python, algebra, basic probability] --> B[Statistics and linear algebra]
    B --> C[Calculus and optimization]
    B --> D[Data structures, algorithms, databases]
    C --> E[Machine learning]
    D --> E
    B --> F[AI: search, logic, uncertainty]
    E --> G[Mixed DA practice]
    A --> H[General Aptitude]
    H --> G
    G --> I[Full-length tests and error correction]
~~~

| Weeks | Main work | Output by the end |
|---|---|---|
| 1–2 | Python basics, arithmetic, algebra, GA grammar | Short programs; grammar notebook |
| 3–5 | Probability and descriptive statistics | Distribution/formula sheet; 150 problems |
| 6–8 | Linear algebra | Gaussian elimination, eigen, SVD practice |
| 9–10 | Calculus and optimization | Derivative, Taylor, and extrema practice |
| 11–13 | Data structures and algorithms | Complexity table; implementation practice |
| 14–16 | Databases and warehousing | SQL set; normalization and indexing drills |
| 17–20 | Supervised and unsupervised ML | Model comparison sheet; derivations |
| 21 | AI search, logic, uncertainty | Search traces and inference exercises |
| 22 | Complete GA revision | Timed GA sets |
| 23 | First complete revision and mixed tests | Three full tests; error classification |
| 24 | Final revision | Formula recall, weak-topic repair, sleep plan |

### Weekly rhythm

Use six study days and one recovery/review day:

- 60% concept learning and worked examples.
- 30% question solving.
- 10% error-log review.

Every study session should end with five minutes of closed-book recall. Every week should include one mixed set; topic-only practice can hide confusion.

## What “IITB and IITM ready” means

There is no honest shortcut or guaranteed score. A serious target standard is:

- every syllabus bullet can be explained in simple language;
- standard formulas are recalled without searching;
- algorithms are traced by hand and their time complexities are known;
- SQL and relational-algebra questions are solved without guessing;
- ML questions include assumptions, loss functions, and failure modes;
- at least three consecutive mixed tests show stable performance, not one lucky score;
- careless errors are tracked separately from knowledge gaps.

Your category, gender, or personal background does not change what must be learned. It may affect admission policy and cut-offs in a particular year, but preparation quality should be based on the most demanding target you want.

---

<div class="page-break"></div>

# Part II — General Aptitude (GA)

## GA Section 1: Verbal aptitude

### 1. Parts of speech

| Part | Job | Example |
|---|---|---|
| Noun | names a person, place, thing, or idea | model, student, accuracy |
| Pronoun | replaces a noun | he, it, they |
| Verb | action or state | calculate, is |
| Adjective | describes a noun | accurate model |
| Adverb | describes a verb, adjective, or adverb | solves quickly |
| Preposition | shows relation | in, on, between |
| Conjunction | joins words or clauses | and, but, although |
| Article | marks a noun as general or specific | a, an, the |

### 2. Tenses

The tense must agree with the time and the meaning.

| Tense | Structure | Example |
|---|---|---|
| Simple present | subject + base verb | She studies. |
| Present continuous | am/is/are + verb-ing | She is studying. |
| Present perfect | has/have + past participle | She has studied. |
| Simple past | past verb | She studied. |
| Past continuous | was/were + verb-ing | She was studying. |
| Past perfect | had + past participle | She had studied. |
| Simple future | will + base verb | She will study. |
| Future perfect | will have + past participle | She will have studied. |

Common traps:

- “Each of the answers **is** checked,” not *are checked*.
- “Neither the model nor the features **are** ready” when the nearer subject is plural.
- Use **did + base verb**: “Did he go?”, not “Did he went?”

### 3. Articles

- **a** before a consonant sound: a model, a university (the “yu” sound).
- **an** before a vowel sound: an algorithm, an hour (the “au” sound).
- **the** for a specific or already identified item: the result we discussed.
- No article for general plural or uncountable ideas: Models need data; information is useful.

### 4. Prepositions and conjunctions

Learn them in phrases, not as isolated translations: interested **in**, different **from**, depend **on**, capable **of**, similar **to**.

Coordinating conjunctions join equal units: **for, and, nor, but, or, yet, so**. Subordinating conjunctions show dependency: **because, although, if, while, unless**.

### 5. Vocabulary in context

Do not choose a synonym only because it looks familiar. Replace the word in the sentence and check:

1. grammatical fit;
2. positive or negative tone;
3. strength of meaning;
4. technical versus everyday sense.

For idioms, infer the meaning from the surrounding sentence first.

### 6. Reading comprehension

Use this four-step method:

1. Read the question before rereading the passage.
2. Mark the claim, evidence, contrast words, and conclusion.
3. Prefer answers supported by the passage, not outside knowledge.
4. Reject answers that are too broad, too absolute, or only partially true.

Narrative sequencing usually tests cause and time. Identify the first event, trigger, response, and consequence. Words such as **before, after, then, meanwhile, finally** are anchors.

## GA Section 2: Quantitative aptitude

### Ratios and percentages

If \(a:b=m:n\), then \(a=km\), \(b=kn\) for some common scale \(k\).

Percentage change:

\[
\text{percentage change}=
\frac{\text{new}-\text{old}}{\text{old}}\times100\%.
\]

Successive changes \(a\%\) and \(b\%\) have net change

\[
\left(1+\frac a{100}\right)
\left(1+\frac b{100}\right)-1.
\]

For a decrease, use a negative percentage. A 20% increase followed by a 20% decrease is not zero:

\[
1.2\times0.8=0.96,
\]

so the net change is \(-4\%\).

### Powers, exponents, and logarithms

\[
a^ma^n=a^{m+n},\qquad
\frac{a^m}{a^n}=a^{m-n},\qquad
(a^m)^n=a^{mn}.
\]

For \(a>0,a\ne1\):

\[
\log_a(xy)=\log_a x+\log_a y,
\]

\[
\log_a\frac{x}{y}=\log_a x-\log_a y,
\qquad
\log_a(x^r)=r\log_a x.
\]

Change of base:

\[
\log_a b=\frac{\log_c b}{\log_c a}.
\]

### Permutations, combinations, and series

\[
n!=n(n-1)\cdots1,
\qquad
{}^nP_r=\frac{n!}{(n-r)!},
\qquad
{}^nC_r=\frac{n!}{r!(n-r)!}.
\]

Use permutations when order matters; combinations when it does not.

Arithmetic progression:

\[
a_n=a+(n-1)d,
\qquad
S_n=\frac n2[2a+(n-1)d].
\]

Geometric progression:

\[
a_n=ar^{n-1},
\qquad
S_n=a\frac{r^n-1}{r-1}\quad(r\ne1).
\]

### Data interpretation

For any graph or table:

1. read units and scale;
2. identify what each axis or column means;
3. estimate the answer before calculating;
4. calculate only the quantities needed;
5. check whether the result lies in the graph’s range.

Useful averages:

\[
\bar x=\frac{\sum x_i}{n},
\qquad
\text{weighted mean}=\frac{\sum w_ix_i}{\sum w_i}.
\]

Pie-chart angle for a category of value \(v\) out of total \(T\):

\[
\theta=360^\circ\frac vT.
\]

For maps and 2D/3D plots, translate the scale into a ratio before comparing distance, area, or volume.

### Mensuration and geometry

\[
\begin{aligned}
&\text{rectangle area}=lb,\quad
\text{triangle area}=\frac12bh,\quad
\text{circle area}=\pi r^2,\\
&\text{circle circumference}=2\pi r,\quad
\text{cuboid volume}=lbh,\quad
\text{cylinder volume}=\pi r^2h,\\
&\text{sphere volume}=\frac43\pi r^3.
\end{aligned}
\]

Pythagoras for a right triangle:

\[
a^2+b^2=c^2.
\]

Similar figures preserve angles and scale all lengths by the same factor; areas scale by the square and volumes by the cube of that factor.

### Elementary statistics and probability

\[
\text{mean}=\frac{\sum x_i}{n},
\qquad
\text{range}=\max-\min,
\qquad
P(A^c)=1-P(A).
\]

If events are disjoint:

\[
P(A\cup B)=P(A)+P(B).
\]

If independent:

\[
P(A\cap B)=P(A)P(B).
\]

These are different conditions; disjoint non-zero-probability events are not independent.

## GA Section 3: Analytical aptitude

### Deduction and induction

- **Deduction:** general rule plus facts gives a necessarily true conclusion.
- **Induction:** repeated observations suggest a general rule, but the conclusion is not guaranteed.

For logic questions, write the premises as short statements and test whether the conclusion can be false while all premises remain true. If yes, the deduction is invalid.

### Analogy

Identify the relation, not merely a surface similarity. For \(A:B::C:?\), describe “A becomes B by ___” and apply the same transformation to C.

### Numerical relations and reasoning

Translate words into equations. Look for:

- constant differences or ratios;
- alternating patterns;
- squares, cubes, primes, or triangular numbers;
- position-based operations;
- constraints such as parity, divisibility, or bounds.

Do not force a complicated rule when a simple rule explains every term.

## GA Section 4: Spatial aptitude

Mentally track one distinguishing mark (an arrow, shaded face, or corner) through the operation.

| Transformation | What changes | What stays invariant |
|---|---|---|
| Translation | position | size, orientation |
| Rotation | orientation and position | size, shape |
| Scaling | size | shape, usually angles |
| Mirroring | handedness | size, distances |
| Assembly | separate parts become one | part geometry |
| Grouping | objects are classified by a rule | defining feature |

For paper folding/cutting, unfold in reverse order. A cut through \(k\) layers produces \(k\) corresponding holes unless the fold creates overlap or a boundary truncates them.

~~~mermaid
flowchart TD
    A[Original shape] --> B{Operation?}
    B -->|Translate| C[Move without turning]
    B -->|Rotate| D[Turn around a point]
    B -->|Mirror| E[Reverse left and right]
    B -->|Scale| F[Multiply all lengths]
    C --> G[Compare invariant marks]
    D --> G
    E --> G
    F --> G
~~~

---

<div class="page-break"></div>

# Part III — Probability and statistics

## 1. Counting and probability language

### Counting

The multiplication principle says that if a task has \(m\) choices followed by \(n\) choices, it has \(mn\) outcomes. The addition principle applies to disjoint alternatives: \(m+n\).

Permutations arrange objects; combinations select objects. With repeated objects, divide by factorials of repetition counts:

\[
\frac{n!}{n_1!n_2!\cdots n_k!}.
\]

### Probability axioms

For sample space \(S\) and event \(A\subseteq S\):

\[
P(A)\ge0,\qquad P(S)=1,
\]

and for pairwise disjoint \(A_i\),

\[
P\left(\bigcup_i A_i\right)=\sum_iP(A_i).
\]

Useful rules:

\[
P(A^c)=1-P(A),
\]

\[
P(A\cup B)=P(A)+P(B)-P(A\cap B),
\]

\[
P(A\mid B)=\frac{P(A\cap B)}{P(B)},\quad P(B)>0,
\]

\[
P(A\cap B)=P(A\mid B)P(B).
\]

### Independent and mutually exclusive events

Independent events satisfy

\[
P(A\cap B)=P(A)P(B).
\]

Mutually exclusive events satisfy

\[
A\cap B=\varnothing,
\]

so \(P(A\cap B)=0\). If both have positive probability, they cannot be both independent and mutually exclusive.

### Marginal, joint, and conditional probability

For a joint-probability table \(P(X=x,Y=y)\):

- joint: the cell probability \(P(X=x,Y=y)\);
- marginal: sum over the other variable, e.g. \(P(X=x)=\sum_yP(X=x,Y=y)\);
- conditional:
  \[
  P(X=x\mid Y=y)=\frac{P(X=x,Y=y)}{P(Y=y)}.
  \]

~~~mermaid
flowchart LR
    J[Joint distribution P(X,Y)] --> SX[Sum over Y]
    J --> SY[Sum over X]
    J --> C[Divide joint by marginal]
    SX --> MX[Marginal P(X)]
    SY --> MY[Marginal P(Y)]
    C --> CP[Conditional P(X|Y)]
~~~

### Bayes theorem

\[
P(A\mid B)=\frac{P(B\mid A)P(A)}{P(B)}.
\]

If \(A_1,\ldots,A_k\) partition the sample space:

\[
P(A_i\mid B)=
\frac{P(B\mid A_i)P(A_i)}
{\sum_jP(B\mid A_j)P(A_j)}.
\]

**Worked pattern:** disease prevalence \(=1\%\), sensitivity \(=95\%\), false-positive rate \(=5\%\). For a positive test,

\[
P(D\mid +)=
\frac{0.95(0.01)}
{0.95(0.01)+0.05(0.99)}
\approx0.161.
\]

The positive result does not mean a 95% chance of disease; it means about 16.1% here because the disease is rare.

## 2. Random variables and expectation

A random variable maps outcomes to numbers. A discrete random variable has a probability mass function (PMF) \(p_X(x)=P(X=x)\). A continuous variable is described by a probability density function (PDF) \(f_X(x)\), where probabilities are areas:

\[
P(a\le X\le b)=\int_a^b f_X(x)\,dx.
\]

For a continuous variable, \(P(X=x)=0\) for an individual point.

The cumulative distribution function (CDF) is

\[
F_X(x)=P(X\le x).
\]

Expectation and variance:

\[
E[X]=\sum_xxp_X(x)\quad\text{(discrete)},
\qquad
E[X]=\int xf_X(x)\,dx\quad\text{(continuous)},
\]

\[
\operatorname{Var}(X)=E[(X-E[X])^2]=E[X^2]-E[X]^2.
\]

For constants \(a,b\):

\[
E[aX+b]=aE[X]+b,
\qquad
\operatorname{Var}(aX+b)=a^2\operatorname{Var}(X).
\]

For random variables \(X,Y\):

\[
\operatorname{Cov}(X,Y)
=E[(X-E[X])(Y-E[Y])],
\]

\[
\rho_{XY}=
\frac{\operatorname{Cov}(X,Y)}{\sigma_X\sigma_Y}.
\]

Correlation lies in \([-1,1]\), is unit-free, and measures linear association. Zero correlation does not generally imply independence.

Conditional expectation:

\[
E[X\mid Y=y]=
\sum_xxP(X=x\mid Y=y)
\]

for discrete \(X\). The law of total expectation is

\[
E[X]=E[E[X\mid Y]].
\]

Conditional variance:

\[
\operatorname{Var}(X)
=E[\operatorname{Var}(X\mid Y)]
+\operatorname{Var}(E[X\mid Y]).
\]

## 3. Mean, median, mode, and standard deviation

- **Mean:** arithmetic center; sensitive to outliers.
- **Median:** middle after sorting; robust to outliers.
- **Mode:** most frequent value; can be non-unique.
- **Variance:** average squared distance from the mean.
- **Standard deviation:** \(\sigma=\sqrt{\operatorname{Var}(X)}\), in the same units as the data.

For sample data, distinguish the population formula

\[
\frac1n\sum(x_i-\bar x)^2
\]

from the unbiased sample variance

\[
\frac1{n-1}\sum(x_i-\bar x)^2.
\]

## 4. Important distributions

| Distribution | Type | PMF/PDF | Mean | Variance | Recognition |
|---|---|---|---:|---:|---|
| Bernoulli(\(p\)) | discrete | \(P(X=1)=p,\;P(X=0)=1-p\) | \(p\) | \(p(1-p)\) | one success/failure trial |
| Binomial(\(n,p\)) | discrete | \({n\choose k}p^k(1-p)^{n-k}\) | \(np\) | \(np(1-p)\) | fixed independent trials |
| Poisson(\(\lambda\)) | discrete | \(P(X=k)=e^{-\lambda}\lambda^k/k!\) | \(\lambda\) | \(\lambda\) | count in an interval |
| Uniform(\(a,b\)) | continuous | \(f(x)=1/(b-a)\) in interval | \((a+b)/2\) | \((b-a)^2/12\) | all values equally dense |
| Exponential(\(\lambda\)) | continuous | \(f(x)=\lambda e^{-\lambda x},x\ge0\) | \(1/\lambda\) | \(1/\lambda^2\) | waiting time; memoryless |
| Normal(\(\mu,\sigma^2\)) | continuous | bell-shaped density | \(\mu\) | \(\sigma^2\) | measurement/noise model |

The supplied syllabus lists Poisson near continuous distributions; mathematically Poisson is discrete.

Standardization of \(X\sim N(\mu,\sigma^2)\):

\[
Z=\frac{X-\mu}{\sigma}\sim N(0,1).
\]

The exponential distribution is memoryless:

\[
P(X>s+t\mid X>s)=P(X>t).
\]

The \(t\)-distribution is symmetric with heavier tails than the normal and is useful when estimating a mean with unknown population standard deviation, especially for small samples. As degrees of freedom grow, it approaches the normal distribution.

The chi-squared distribution is a sum of squares of independent standard normal variables. It is nonnegative and right-skewed; it appears in variance and independence tests.

## 5. Central limit theorem and confidence intervals

For independent observations with finite mean \(\mu\) and variance \(\sigma^2\), the sample mean approaches a normal distribution as sample size grows:

\[
\frac{\bar X-\mu}{\sigma/\sqrt n}
\Rightarrow N(0,1).
\]

This is why normal-based approximations work even when raw data are not normal, provided the assumptions and sample size are reasonable.

Confidence interval for a mean with known \(\sigma\):

\[
\bar x\pm z_{\alpha/2}\frac{\sigma}{\sqrt n}.
\]

With unknown \(\sigma\), use

\[
\bar x\pm t_{\alpha/2,n-1}\frac{s}{\sqrt n}.
\]

Interpretation: a 95% confidence procedure captures the true parameter in about 95% of repeated samples. It does not mean the fixed parameter has a 95% probability of being inside this already computed interval.

## 6. Hypothesis tests

Write the null and alternative before calculating:

\[
H_0:\text{baseline claim},
\qquad
H_1:\text{claim being tested}.
\]

Choose significance level \(\alpha\). Compute a test statistic, obtain a p-value or compare with a critical value, then reject \(H_0\) if the evidence is sufficiently inconsistent with it.

### z-test for a mean

When population \(\sigma\) is known or a justified large-sample approximation applies:

\[
z=\frac{\bar x-\mu_0}{\sigma/\sqrt n}.
\]

### t-test for a mean

When \(\sigma\) is unknown:

\[
t=\frac{\bar x-\mu_0}{s/\sqrt n},
\qquad df=n-1.
\]

### Chi-squared tests

For observed counts \(O_i\) and expected counts \(E_i\):

\[
\chi^2=\sum_i\frac{(O_i-E_i)^2}{E_i}.
\]

For an independence test in an \(r\times c\) table:

\[
E_{ij}=
\frac{(\text{row total}_i)(\text{column total}_j)}
{\text{grand total}},
\qquad
df=(r-1)(c-1).
\]

Common errors:

- p-value is not the probability that \(H_0\) is true;
- statistical significance is not practical importance;
- a non-rejection is not proof that \(H_0\) is true;
- test assumptions matter.

---


<div class="page-break"></div>

# Part IV — Linear algebra

## 1. Vectors, spaces, and subspaces

A vector space supports addition and scalar multiplication. A subspace is a subset that contains the zero vector and is closed under linear combinations.

The span of vectors \(v_1,\ldots,v_k\) is

\[
\operatorname{span}\{v_i\}=
\left\{\sum_i c_iv_i:c_i\in\mathbb R\right\}.
\]

Vectors are linearly independent if

\[
c_1v_1+\cdots+c_kv_k=0
\]

implies all \(c_i=0\). Otherwise they are dependent. A basis is an independent spanning set. Its size is the dimension.

## 2. Matrices and important classes

- **Identity:** \(I\mathbf x=\mathbf x\).
- **Symmetric:** \(A^T=A\).
- **Orthogonal:** \(Q^TQ=I\), so \(Q^{-1}=Q^T\); preserves lengths and angles.
- **Idempotent:** \(P^2=P\); applying it twice changes nothing.
- **Projection:** maps a vector onto a subspace.
- **Partition or block matrix:** divides a matrix into rectangular blocks.

Projection onto the column space of full-column-rank \(A\):

\[
P=A(A^TA)^{-1}A^T.
\]

For a single nonzero vector \(u\):

\[
\operatorname{proj}_u(x)=\frac{x^Tu}{u^Tu}u.
\]

## 3. Systems of linear equations

Write \(A\mathbf x=\mathbf b\). Gaussian elimination converts \([A\mid b]\) using:

1. swap two rows;
2. multiply a row by a nonzero scalar;
3. add a multiple of one row to another.

Interpret the result:

- a row \([0\;0\;\cdots\;0\mid c]\), \(c\ne0\): no solution;
- a pivot in every variable: unique solution;
- a free variable and no contradiction: infinitely many solutions.

Rank is the number of pivots. Nullity is the dimension of the null space:

\[
\operatorname{rank}(A)+\operatorname{nullity}(A)
=\text{number of columns of }A.
\]

## 4. Determinant and eigenvalues

For a \(2\times2\) matrix:

\[
\det\begin{bmatrix}a&b\\c&d\end{bmatrix}=ad-bc.
\]

For a square matrix, \(\det(A)=0\) iff it is singular, and \(A^{-1}\) exists iff \(\det(A)\ne0\). Also \(\det(AB)=\det(A)\det(B)\). Swapping rows changes the determinant sign; scaling one row by \(c\) scales the determinant by \(c\).

An eigenvector \(v\ne0\) satisfies

\[
Av=\lambda v.
\]

Find eigenvalues from

\[
\det(A-\lambda I)=0.
\]

For a triangular matrix, eigenvalues are its diagonal entries. Eigenvectors for \(\lambda\) solve \((A-\lambda I)v=0\). If there are enough independent eigenvectors,

\[
A=PDP^{-1}.
\]

## 5. Quadratic forms, LU, and SVD

A quadratic form is \(q(x)=x^TAx\). For symmetric \(A\), positive definiteness means \(x^TAx>0\) for every nonzero \(x\); positive semidefiniteness means \(x^TAx\ge0\).

LU decomposition:

\[
A=LU,
\]

where \(L\) is lower triangular and \(U\) is upper triangular. Solve \(Ax=b\) with forward substitution followed by back substitution.

SVD:

\[
A=U\Sigma V^T,
\]

where \(U,V\) are orthogonal and \(\Sigma\) contains nonnegative singular values. Read this as: change coordinates with \(V^T\), stretch or shrink with \(\Sigma\), then rotate with \(U\). The number of nonzero singular values is the rank.

~~~mermaid
flowchart LR
    x[Input x] --> VT[V transpose: coordinates]
    VT --> S[Sigma: stretch or shrink]
    S --> U[U: output rotation]
    U --> y[Ax]
~~~

## 6. Exam checklist

For a matrix question ask:

1. Is it square, symmetric, triangular, diagonal, or orthogonal?
2. What are its dimensions and rank?
3. Is a projection being applied?
4. Can determinant or eigenvalues be read from structure?
5. Is the question asking for a null space or least-squares projection?

---

<div class="page-break"></div>

# Part V — Calculus and optimization

## 1. Functions, limits, continuity, differentiability

A function assigns each allowed input exactly one output. A limit is the value approached as \(x\) approaches a point, whether or not the function is defined there.

Continuity at \(a\) requires

\[
f(a)\text{ exists},\quad
\lim_{x\to a}f(x)\text{ exists},\quad
\lim_{x\to a}f(x)=f(a).
\]

Differentiability at \(a\) means

\[
f'(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}h
\]

exists. Differentiability implies continuity, but continuity does not always imply differentiability; \(|x|\) is not differentiable at \(0\).

Core rules:

\[
\begin{aligned}
&(x^n)'=nx^{n-1},\quad (e^x)'=e^x,\quad (\ln x)'=1/x,\\
&(fg)'=f'g+fg',\quad
\left(\frac fg\right)'=\frac{f'g-fg'}{g^2},\\
&\frac{d}{dx}f(g(x))=f'(g(x))g'(x).
\end{aligned}
\]

## 2. Taylor series

Near \(a\),

\[
f(x)=f(a)+f'(a)(x-a)+
\frac{f''(a)}{2!}(x-a)^2+\cdots.
\]

Useful Maclaurin expansions:

\[
e^x=1+x+\frac{x^2}{2!}+\cdots,
\]

\[
\sin x=x-\frac{x^3}{3!}+\cdots,\qquad
\cos x=1-\frac{x^2}{2!}+\cdots,
\]

\[
\ln(1+x)=x-\frac{x^2}{2}+\frac{x^3}{3}-\cdots.
\]

Taylor approximation is most accurate near its expansion point.

## 3. Maxima, minima, and optimization

For an interior critical point, solve \(f'(x)=0\) or find where \(f'\) is undefined.

- First-derivative sign \(+\to-\): local maximum.
- First-derivative sign \(-\to+\): local minimum.
- \(f''(x_0)>0\): local minimum.
- \(f''(x_0)<0\): local maximum.
- On a closed interval, always check endpoints.

For a constrained problem, convert the constraint into one variable, state the domain, find critical points, compare with boundaries, and report units.

~~~mermaid
flowchart TD
    A[Define f and valid domain] --> B[Find f prime]
    B --> C[Critical points]
    C --> D[Check endpoints]
    D --> E[Use sign chart or second derivative]
    E --> F[Compare values]
~~~

---

<div class="page-break"></div>

# Part VI — Python, data structures, and algorithms

## 1. Python essentials

Python variables reference objects. Know mutable lists versus immutable tuples and strings.

~~~python
nums = [3, 1, 4]
nums.append(2)
nums.sort()
squares = [x * x for x in nums if x % 2 == 0]
total = sum(squares)
~~~

~~~python
for i, value in enumerate(nums):
    print(i, value)

counts = {}
for value in nums:
    counts[value] = counts.get(value, 0) + 1
~~~

Know conditionals, loops, functions, recursion, slicing, strings, lists, tuples, sets, dictionaries, exceptions, and input/output. Trace variable values line by line.

Common traps:

- Equality compares values; identity checks whether two references point to the same object.
- Assignment gives another reference; it does not always copy the object.
- List slicing creates a new list, but nested objects may still be shared.
- Floor division and true division are different.
- Recursion needs a base case and progress toward it.

## 2. Complexity

Big-\(O\) describes growth as input size \(n\) grows. Ignore constants and lower-order terms:

\[
3n^2+5n+2=O(n^2).
\]

Typical order:

\[
O(1)<O(\log n)<O(n)<O(n\log n)
<O(n^2)<O(2^n)<O(n!).
\]

## 3. Stacks, queues, linked lists, trees, hashes

| Structure | Rule | Main operations |
|---|---|---|
| Stack | LIFO | push, pop, peek |
| Queue | FIFO | enqueue, dequeue |
| Linked list | nodes connected by references | insert/delete after known node |
| Binary search tree | left < node < right | search, insert, traversal |
| Hash table | key mapped to slot | average \(O(1)\) lookup |

An array gives \(O(1)\) indexed access but middle insertion is \(O(n)\). A linked list gives \(O(1)\) insertion after a known node but \(O(n)\) indexed access. Hash collisions use chaining or open addressing; bad collisions can make lookup \(O(n)\).

## 4. Searching

Linear search checks one by one: \(O(n)\) worst case.

Binary search requires sorted data:

~~~python
def binary_search(a, target):
    lo, hi = 0, len(a) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if a[mid] == target:
            return mid
        if a[mid] < target:
            lo = mid + 1
        else:
            hi = mid - 1
    return -1
~~~

Time is \(O(\log n)\); iterative extra space is \(O(1)\).

## 5. Sorting

| Algorithm | Best | Average | Worst | Stable? | Main idea |
|---|---:|---:|---:|---|---|
| Selection sort | \(O(n^2)\) | \(O(n^2)\) | \(O(n^2)\) | usually no | select minimum |
| Bubble sort | \(O(n)\)* | \(O(n^2)\) | \(O(n^2)\) | yes | swap adjacent inversions |
| Insertion sort | \(O(n)\) | \(O(n^2)\) | \(O(n^2)\) | yes | insert into sorted prefix |
| Merge sort | \(O(n\log n)\) | \(O(n\log n)\) | \(O(n\log n)\) | yes | split and merge |
| Quicksort | \(O(n\log n)\) | \(O(n\log n)\) | \(O(n^2)\) | usually no | partition around pivot |

\(*\) with early termination if already sorted.

Merge sort has recurrence

\[
T(n)=2T(n/2)+O(n)=O(n\log n).
\]

Quicksort can become \(O(n^2)\) with consistently poor pivots.

## 6. Graph theory and traversals

A graph \(G=(V,E)\) has vertices and edges. It may be directed or undirected, weighted or unweighted. In a directed graph distinguish in-degree and out-degree.

An adjacency matrix uses \(O(|V|^2)\) space and gives \(O(1)\) edge lookup. Adjacency lists use \(O(|V|+|E|)\) space and suit sparse graphs.

BFS uses a queue and explores by distance layers. In an unweighted graph, BFS gives shortest number-of-edge distance. DFS uses recursion or a stack and explores deeply before backtracking.

~~~mermaid
graph TD
    A((A)) --- B((B))
    A --- C((C))
    B --- D((D))
    C --- E((E))
    D --- F((F))
~~~

Shortest-path recognition:

- unweighted graph: BFS;
- weighted graph with nonnegative edges: Dijkstra;
- negative edges: Dijkstra is unsafe.

Dijkstra relaxes an edge by

\[
d[v]\leftarrow\min(d[v],d[u]+w(u,v)).
\]

## 7. Algorithm checklist

Ask: what is the input size, what must be returned, is the data sorted, can a stack or queue help, can the problem be split, and what are worst-case time and space costs?

---

<div class="page-break"></div>

# Part VII — Databases and data warehousing

## 1. ER model

An entity is a distinguishable object; an attribute describes it; a relationship connects entities. Cardinality describes participation: one-to-one, one-to-many, or many-to-many.

~~~mermaid
erDiagram
    STUDENT ||--o{ ENROLLMENT : makes
    COURSE ||--o{ ENROLLMENT : contains
    STUDENT {
        int student_id PK
        string name
    }
    COURSE {
        int course_id PK
        string title
    }
    ENROLLMENT {
        int student_id FK
        int course_id FK
        string grade
    }
~~~

A many-to-many relationship becomes a bridge table with foreign keys to both entities.

## 2. Relational model and algebra

A relation is a table; a tuple is a row; an attribute is a column; a domain is the allowed set of values.

- selection \(\sigma_{condition}(R)\): choose rows;
- projection \(\pi_{columns}(R)\): choose columns;
- union \(R\cup S\): combine compatible rows;
- difference \(R-S\): rows in \(R\) but not \(S\);
- Cartesian product \(R\times S\): every pair;
- join: combine related rows;
- rename \(\rho\): rename a relation or attributes.

Selection behaves like SQL WHERE; projection behaves like SQL SELECT columns.

## 3. SQL

Logical processing is conceptually:

~~~text
FROM / JOIN -> WHERE -> GROUP BY -> HAVING -> SELECT -> DISTINCT -> ORDER BY -> LIMIT
~~~

Example:

~~~sql
SELECT c.title, COUNT(e.student_id) AS enrolments
FROM course AS c
JOIN enrollment AS e ON e.course_id = c.course_id
WHERE e.grade IS NOT NULL
GROUP BY c.course_id, c.title
HAVING COUNT(e.student_id) >= 10
ORDER BY enrolments DESC;
~~~

WHERE filters rows before grouping. HAVING filters groups after aggregation. NULL is not equal to anything, even another NULL; use IS NULL or IS NOT NULL.

Important aggregates: COUNT, SUM, AVG, MIN, MAX. COUNT(*) counts rows; COUNT(column) ignores nulls in that column.

## 4. Integrity constraints

- **Domain constraint:** values have valid type or range.
- **Key constraint:** candidate or primary keys identify rows.
- **Entity integrity:** primary key cannot be null.
- **Referential integrity:** foreign-key value must match a referenced key or be null if allowed.
- **CHECK, UNIQUE, NOT NULL:** additional rules.

## 5. Normal forms

Functional dependency \(X\to Y\) means equal \(X\) values require equal \(Y\) values.

- **1NF:** atomic values; no repeating groups.
- **2NF:** 1NF and no partial dependency of a non-key attribute on part of a composite key.
- **3NF:** 2NF and no transitive dependency of a non-key attribute on a key through another non-key attribute.
- **BCNF:** every determinant is a candidate key.

Normalization reduces update, insertion, and deletion anomalies. Decomposition should ideally be lossless and dependency-preserving.

## 6. File organization and indexing

File organization may be heap or unordered, sequential or sorted, or hashed.

An index maps search keys to records. A B-tree or B+ tree supports balanced search and range queries; hashing is excellent for equality lookup but poor for ordered ranges.

Indexes speed reads but consume storage and slow inserts or updates because they must be maintained.

## 7. Data types and transformation

Choose types that preserve meaning: integer, real, decimal, boolean, date/time, categorical, and text. Avoid storing numbers as text when arithmetic or ordering is required.

### Feature normalization

Do not confuse database normalization with feature normalization.

Min-max scaling:

\[
x'=\frac{x-x_{\min}}{x_{\max}-x_{\min}}.
\]

Standardization:

\[
z=\frac{x-\mu}{\sigma}.
\]

Fit transformation parameters on training data only; using test-set information during fitting causes leakage.

### Discretization, sampling, compression

Discretization converts continuous values into intervals. Equal-width bins use the same numerical width; equal-frequency bins aim for similar counts. Binning simplifies some models but loses detail.

Sampling methods include simple random, stratified, systematic, and cluster sampling. Sampling bias occurs when some population members are systematically underrepresented.

Lossless compression recovers the exact original, important for data values. Lossy compression removes information and must be used cautiously for analytical features.

## 8. Data warehouses

A warehouse stores integrated historical data for analysis. A fact table contains measurable events and foreign keys; dimension tables describe context.

- **Star schema:** one central fact table connected to denormalized dimensions.
- **Snowflake schema:** dimensions are further normalized.
- **Measure:** a numeric value analyzed by aggregation.
- **Dimension:** a perspective such as time, product, or region.

Additive measures can be summed across all dimensions; semi-additive measures across some dimensions; non-additive measures such as ratios should be recomputed from components.

Concept hierarchies enable roll-up and drill-down: day → month → quarter → year or city → state → country.

~~~mermaid
flowchart TD
    F[Fact: sales amount, quantity] --> T[Time dimension]
    F --> P[Product dimension]
    F --> R[Region dimension]
    T --> T2[Day -> Month -> Year]
    P --> P2[Item -> Category]
    R --> R2[City -> State -> Country]
~~~

---

<div class="page-break"></div>

# Part VIII — Machine learning

## 1. The common ML pipeline

~~~mermaid
flowchart LR
    D[Collect data] --> C[Clean and inspect]
    C --> S[Split train validation test]
    S --> F[Fit preprocessing on train only]
    F --> M[Train model]
    M --> V[Validate and tune]
    V --> E[Final test evaluation]
    E --> R[Report limitations]
~~~

The central danger is leakage: information from validation, test data, or the future enters training. A model can then appear accurate without generalizing.

## 2. Regression and classification

Regression predicts a numeric value. Classification predicts a class label. A feature is an input; a target or label is the desired output.

### Simple and multiple linear regression

Simple model:

\[
y=\beta_0+\beta_1x+\epsilon.
\]

Multiple model:

\[
y=X\beta+\epsilon.
\]

Ordinary least squares minimizes

\[
\operatorname{SSE}(\beta)=\|y-X\beta\|_2^2.
\]

If \(X^TX\) is invertible,

\[
\hat\beta=(X^TX)^{-1}X^Ty.
\]

The fitted vector \(\hat y=X\hat\beta\) is a projection of \(y\) onto the column space of \(X\).

Typical assumptions: linearity, independent errors, constant error variance, and, for exact small-sample inference, normally distributed errors. Correlated predictors cause multicollinearity, making coefficient estimates unstable.

### Ridge regression

\[
\hat\beta_{\text{ridge}}
=\arg\min_\beta
\left(\|y-X\beta\|_2^2+\lambda\|\beta\|_2^2\right).
\]

The closed form is

\[
\hat\beta=(X^TX+\lambda I)^{-1}X^Ty.
\]

Ridge shrinks coefficients, usually reducing variance at the cost of some bias. Standardize features before comparing penalty effects. Do not penalize the intercept in the usual setup.

### Logistic regression

For binary classification:

\[
p(y=1\mid x)=\sigma(z)=\frac1{1+e^{-z}},
\qquad
z=\beta_0+\beta^Tx.
\]

The log-odds are linear:

\[
\log\frac p{1-p}=\beta_0+\beta^Tx.
\]

Binary cross-entropy loss:

\[
L=-[y\log p+(1-y)\log(1-p)].
\]

Thresholding \(p\) creates a class decision; changing the threshold changes precision and recall.

### k-nearest neighbours

For a new point, find the \(k\) closest training points and vote for classification or average for regression. Small \(k\) has low bias and high variance; large \(k\) has higher bias and lower variance. Scale features because distance is unit-sensitive.

### Naive Bayes

Choose class \(c\) maximizing

\[
P(c\mid x)\propto P(c)\prod_jP(x_j\mid c),
\]

assuming features are conditionally independent given the class. Zero counts can be handled by smoothing.

### Linear discriminant analysis

LDA models each class with a Gaussian distribution sharing a common covariance matrix. The resulting discriminant is linear. It works best when this distributional assumption is reasonable.

### Support vector machine

For a separable classifier, maximize the margin. A soft-margin SVM solves

\[
\min_{w,b,\xi}
\frac12\|w\|^2+C\sum_i\xi_i
\]

subject to

\[
y_i(w^Tx_i+b)\ge1-\xi_i,\qquad \xi_i\ge0.
\]

Support vectors determine the boundary. Kernels represent nonlinear boundaries through inner products in an implicit feature space.

### Decision trees

At each node, choose a split that makes child nodes purer. Common impurity measures:

\[
Gini=1-\sum_kp_k^2,
\]

\[
Entropy=-\sum_kp_k\log_2p_k.
\]

Information gain is parent impurity minus weighted child impurity. Trees overfit unless depth, minimum leaf size, or pruning is controlled.

## 3. Bias–variance trade-off

Expected squared prediction error can be decomposed conceptually as

\[
\text{error}=\text{bias}^2+\text{variance}
+\text{irreducible noise}.
\]

High bias means underfitting; high variance means overfitting. More data usually helps variance. Regularization, simpler models, and pruning reduce variance. More expressive features can reduce bias but increase variance.

## 4. Cross-validation

In \(k\)-fold cross-validation, split training data into \(k\) folds; train on \(k-1\), validate on the remaining fold, and rotate. Average the validation scores.

LOO uses one validation point per split: \(k=n\). It uses data efficiently but can be expensive and have high score variability.

Never use the final test set repeatedly for model selection. If preprocessing or feature selection is performed, it must happen inside each training fold.

## 5. Multi-layer perceptron and feed-forward network

A neuron computes

\[
z=w^Tx+b,\qquad a=\phi(z).
\]

A feed-forward network applies layers in one direction:

\[
a^{(l)}=\phi\left(W^{(l)}a^{(l-1)}+b^{(l)}\right).
\]

Common activations are sigmoid, tanh, and ReLU \(\max(0,z)\). Training minimizes a loss using gradient descent. Backpropagation applies the chain rule.

For a parameter \(\theta\):

\[
\theta\leftarrow\theta-\eta\frac{\partial L}{\partial\theta}.
\]

A learning rate that is too high can diverge; one that is too low can be slow.

## 6. Unsupervised learning

### k-means

\[
\min_{C_1,\ldots,C_k}
\sum_{j=1}^k\sum_{x_i\in C_j}\|x_i-\mu_j\|^2.
\]

Algorithm: initialize centers, assign points to nearest center, recompute means, repeat until assignments or centers stabilize. It is sensitive to scale, initialization, outliers, and \(k\); it favors roughly spherical clusters.

### k-medoids

Like k-means, but each center is an actual data point. It can be more robust to outliers and arbitrary distance measures, but is usually more computationally expensive.

### Hierarchical clustering

- bottom-up or agglomerative: start with singletons and merge;
- top-down or divisive: start with one cluster and split.

The result is a dendrogram. Linkage defines distance between clusters:

- single linkage: minimum pair distance;
- complete linkage: maximum pair distance;
- average linkage: average pair distance.

Single linkage can produce chaining; complete linkage prefers compact clusters.

## 7. Dimensionality reduction and PCA

PCA finds orthogonal directions of maximum variance. Center data first; standardize when features have incomparable units.

For centered data matrix \(X\), covariance matrix:

\[
S=\frac1{n-1}X^TX.
\]

The first principal direction is the eigenvector of \(S\) with the largest eigenvalue. Project onto the first \(r\) directions to reduce dimension.

Explained variance ratio of component \(j\):

\[
\frac{\lambda_j}{\sum_i\lambda_i}.
\]

PCA is unsupervised: it maximizes variance, not class separation. A high-variance direction is not automatically the most predictive direction.

---

<div class="page-break"></div>

# Part IX — Artificial intelligence

## 1. Search

Represent a problem using states, actions, transition model, goal test, and path cost.

### Uninformed search

- **BFS:** queue; complete; optimal for equal step costs; memory-heavy.
- **DFS:** stack or recursion; low memory; not generally optimal.
- **Uniform-cost search:** expands lowest path cost; optimal with nonnegative costs.

### Informed search

A heuristic \(h(n)\) estimates remaining cost.

- Greedy best-first uses \(h(n)\), often fast but not guaranteed optimal.
- A* uses \(f(n)=g(n)+h(n)\), combining cost so far and estimated cost remaining.

A heuristic is admissible if it never overestimates the true remaining cost. Consistency additionally requires

\[
h(n)\le c(n,n')+h(n')
\]

for every edge. Under standard conditions, A* is optimal.

~~~mermaid
flowchart TD
    S[Start state] --> F[Frontier]
    F --> P[Choose next node by strategy]
    P --> G{Goal?}
    G -->|No| X[Expand and generate successors]
    X --> F
    G -->|Yes| R[Return path and cost]
~~~

### Adversarial search

In a two-player zero-sum game, minimax chooses the move maximizing the player's outcome assuming the opponent minimizes it. Alpha-beta pruning removes branches that cannot affect the final choice; it changes speed, not the answer.

## 2. Propositional and predicate logic

Propositional logic uses complete statements \(P,Q\) joined by

\[
\neg P,\quad P\land Q,\quad P\lor Q,\quad
P\to Q,\quad P\leftrightarrow Q.
\]

An implication \(P\to Q\) is false only when \(P\) is true and \(Q\) is false. Its contrapositive is equivalent:

\[
P\to Q\equiv\neg Q\to\neg P.
\]

The converse \(Q\to P\) is not generally equivalent.

Predicate logic adds variables, predicates, and quantifiers:

\[
\forall x\;P(x),\qquad \exists x\;P(x).
\]

Negation rules:

\[
\neg\forall xP(x)\equiv\exists x\neg P(x),
\qquad
\neg\exists xP(x)\equiv\forall x\neg P(x).
\]

## 3. Reasoning under uncertainty

### Conditional independence

X and Y are conditionally independent given Z if

\[
P(X,Y\mid Z)=P(X\mid Z)P(Y\mid Z).
\]

This reduces the number of probabilities needed in a Bayesian network. The graph encodes factorization; it does not mean all variables are unconditionally independent.

### Exact inference by variable elimination

To compute a marginal, multiply factors containing a variable and sum that variable out. Repeat until only query variables remain.

~~~text
Query: P(Q)
1. Write the joint distribution as factors.
2. Restrict evidence, if any.
3. Multiply factors containing hidden variable Z.
4. Sum over Z to eliminate it.
5. Repeat for other hidden variables.
6. Normalize if computing a conditional distribution.
~~~

### Approximate inference by sampling

Sampling estimates probabilities by repeated random draws. The basic Monte Carlo estimate is

\[
\widehat P(A)=\frac1N\sum_{i=1}^N
\mathbf 1\{sample_i\in A\}.
\]

As \(N\) grows, the estimate generally becomes more stable; sampling error decreases roughly as \(1/\sqrt N\). Rejection sampling discards samples inconsistent with evidence. Importance sampling weights samples to focus on relevant regions.

---

<div class="page-break"></div>

# Part X — High-yield comparisons

| Confusion | Correct distinction |
|---|---|
| Independent vs mutually exclusive | independent means product rule; mutually exclusive means empty intersection |
| PMF vs PDF | PMF gives point probabilities for discrete variables; PDF gives density and area for continuous variables |
| Variance vs standard deviation | variance is squared units; standard deviation is original units |
| Correlation vs causation | correlation measures association, not cause |
| Projection vs rotation | projection generally loses information; orthogonal rotation preserves lengths |
| Stack vs queue | LIFO versus FIFO |
| BFS vs DFS | layer-wise exploration versus depth-first exploration |
| WHERE vs HAVING | rows before grouping versus groups after aggregation |
| Database normalization vs feature scaling | schema design versus numeric transformation |
| Ridge vs logistic regression | ridge is regularized regression; logistic models class probability |
| k-means vs k-medoids | mean center may be synthetic versus actual data-point center |
| PCA vs feature selection | new orthogonal combinations versus retaining original features |
| Admissible vs consistent heuristic | never overestimates versus additionally obeys a triangle-like edge condition |
| Confidence interval vs parameter probability | repeated-procedure coverage, not a posterior probability by itself |

---

<div class="page-break"></div>

# Part XI — Revision and practice system

## Daily checklist

- 20 minutes formula and definition recall.
- 60–90 minutes one concept block.
- 30–60 minutes timed questions.
- 10 minutes error log.
- One sentence: “The key trigger for this topic is ___.”

## Topic completion checklist

For each syllabus bullet, confirm:

- I can define it in one sentence.
- I can write the central formula or algorithm.
- I can solve one direct problem.
- I can solve one mixed problem.
- I know one common trap.
- I can explain when the method should not be used.

## Mixed-test review

After every test, classify every missed question:

1. concept unknown;
2. formula forgotten;
3. computation error;
4. misread question;
5. time-management decision;
6. unjustified guess.

Repair the highest-frequency category first. Re-solve missed questions after 24 hours and again after one week without looking at the solution.

## Final seven-day revision

Do not start new large chapters. Review:

- probability rules, distributions, CLT, confidence intervals, tests;
- matrix properties, rank, eigenvalues, projection, SVD;
- derivative tests and Taylor series;
- complexity and graph algorithm conditions;
- SQL order, nulls, keys, normal forms, indexes;
- regression losses, classification assumptions, cross-validation leakage, PCA;
- search optimality, logic equivalences, conditional independence;
- GA formulae and the error log.

Sleep, food, and a calm reading pace are part of performance. A tired brain turns known material into avoidable mistakes.

---

<div class="page-break"></div>

# Appendix A — Compact formula sheet

## Probability and statistics

\[
P(A\cup B)=P(A)+P(B)-P(A\cap B)
\]

\[
P(A\mid B)=\frac{P(A\cap B)}{P(B)},
\qquad
P(A\cap B)=P(A\mid B)P(B)
\]

\[
P(A\mid B)=\frac{P(B\mid A)P(A)}{P(B)}
\]

\[
E[X]=\sum xp(x),\quad
\operatorname{Var}(X)=E[X^2]-E[X]^2,\quad
\rho=\frac{\operatorname{Cov}(X,Y)}{\sigma_X\sigma_Y}
\]

\[
Z=\frac{X-\mu}{\sigma},\quad
z=\frac{\bar x-\mu_0}{\sigma/\sqrt n},\quad
t=\frac{\bar x-\mu_0}{s/\sqrt n}
\]

\[
\chi^2=\sum\frac{(O-E)^2}{E}
\]

## Linear algebra and calculus

\[
P=A(A^TA)^{-1}A^T,\quad
A=LU,\quad
A=U\Sigma V^T
\]

\[
\operatorname{rank}(A)+\operatorname{nullity}(A)=n
\]

\[
f'(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}h
\]

\[
f(x)\approx f(a)+f'(a)(x-a)+\frac{f''(a)}2(x-a)^2
\]

## Machine learning and AI

\[
\hat\beta_{\text{OLS}}=(X^TX)^{-1}X^Ty
\]

\[
\hat\beta_{\text{ridge}}=(X^TX+\lambda I)^{-1}X^Ty
\]

\[
\sigma(z)=\frac1{1+e^{-z}},
\quad
Gini=1-\sum p_k^2,
\quad
Entropy=-\sum p_k\log_2p_k
\]

\[
\text{PCA explained ratio}
=\frac{\lambda_j}{\sum_i\lambda_i},
\quad
f_{A^*}(n)=g(n)+h(n)
\]

---

<div class="page-break"></div>

# Appendix B — Syllabus coverage map

| Supplied syllabus section | Covered in |
|---|---|
| GA verbal, quantitative, analytical, spatial aptitude | Part II |
| Probability, distributions, CLT, confidence intervals, tests | Part III |
| Vector spaces, matrices, systems, eigen, rank, projections, LU, SVD | Part IV |
| Functions, limits, continuity, differentiability, Taylor, extrema | Part V |
| Python, data structures, searches, sorts, graphs, shortest paths | Part VI |
| ER, relational algebra, SQL, constraints, normal forms, files, indexes | Part VII |
| Data types, normalization, discretization, sampling, compression | Part VII |
| Warehousing, multidimensional schemas, hierarchies, measures | Part VII |
| Regression, classification, regularization, kNN, NB, LDA, SVM, trees | Part VIII |
| Bias-variance, LOO and k-fold CV, MLP and feed-forward networks | Part VIII |
| Clustering, k-means, k-medoids, hierarchical linkage, PCA | Part VIII |
| AI search, logic, conditional independence, variable elimination, sampling | Part IX |

If a practice question requires a topic absent from this map, label it enrichment rather than allowing it to displace an unfinished syllabus topic.


---

<div class="page-break"></div>

# Appendix C — Small but important syllabus clarifications

## Conditional PDF

For continuous variables, the conditional density is

\[
f_{X\mid Y}(x\mid y)=
\frac{f_{X,Y}(x,y)}{f_Y(y)}
\]

where \(f_Y(y)>0\). It plays the same role for densities that conditional probability plays for discrete variables. It must be nonnegative and integrate to 1 over \(x\) for each fixed \(y\).

## Tuple calculus

Tuple relational calculus describes the rows wanted using logical predicates rather than a sequence of operations. A safe query has the form

\[
\{t\mid P(t)\},
\]

meaning “the set of tuples \(t\) for which predicate \(P(t)\) is true.” It is declarative: describe what is wanted, not how to obtain it. Relational algebra is operational in style: apply selection, projection, joins, and other operators.

## Principal component analysis wording

PCA means **principal component analysis**. The first principal component is the direction of maximum variance; later components are orthogonal to earlier ones and maximize the remaining variance.

## Linkage wording

Hierarchical clustering may use several linkage rules. Single linkage uses the nearest pair; complete linkage uses the farthest pair; average linkage uses the average pair distance. In a question, “multiple linkage” should be read as a family of multi-point cluster-distance rules and matched to the explicitly stated definition.
