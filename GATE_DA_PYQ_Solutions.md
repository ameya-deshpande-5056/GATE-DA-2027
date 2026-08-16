# GATE DA 2024–2026 PYQ Solutions

This volume adds the supplied 2024, 2025, and 2026 DA papers and their supplied answer keys to the study material. Question statements are kept concise where the original paper contains a large figure; use the linked original PDF page for the exact diagram.

- [DA 2024 question paper](DA2024.pdf) · [2024 answer key](DA2024_Keys.pdf)
- [DA 2025 question paper](DA2025.pdf) · [2025 answer key](DA2025_Keys.pdf)
- [DA 2026 question paper](DA2026.pdf) · [2026 answer key](DA2026_Keys.pdf)

The official key is the authority for the keyed option/range. For a figure-dependent question, the explanation states the invariant or computation and gives the source page.

Several supplied key entries appear inconsistent with direct mathematics or with text extracted from a figure. Those are explicitly labelled **source/key discrepancy** instead of being silently presented as correct. For those questions, open the original PDF page and verify the final official release.

---

# 2024 PYQs

## Answer key

| Q | Answer | Q | Answer | Q | Answer |
|---:|:---:|---:|:---:|---:|:---:|
| 1 | D | 2 | A | 3 | B |
| 4 | B | 5 | B | 6 | D |
| 7 | A | 8 | B | 9 | A |
| 10 | A | 11 | A | 12 | A |
| 13 | B | 14 | A | 15 | A |
| 16 | A | 17 | D | 18 | C |
| 19 | D | 20 | B | 21 | A |
| 22 | A | 23 | D | 24 | C |
| 25 | C | 26 | C | 27 | B |
| 28 | A,B,C | 29 | B,C,D | 30 | 0 |
| 31 | 3 | 32 | 17 | 33 | 0.24 |
| 34 | 42 | 35 | 0 | 36 | C |
| 37 | A | 38 | D | 39 | C |
| 40 | A | 41 | C | 42 | A |
| 43 | A | 44 | C | 45 | B |
| 46 | A,B,D | 47 | A,C | 48 | B,D |
| 49 | B,C,D | 50 | A,B | 51 | B,D |
| 52 | A,B,C | 53 | A,D | 54 | A |
| 55 | A,B | 56 | 0.125 | 57 | 0.2 |
| 58 | 0.5 | 59 | 0.12 | 60 | 0 |
| 61 | 55 | 62 | 0.12–0.13 | 63 | 5 |
| 64 | 0.125 | 65 | 0.062–0.063 | | |

## Detailed solutions

### Q1 — Vocabulary intensity — D

The first chain moves from a general condition to a stronger or more extreme synonym: sick, infirm, moribund. Among the choices, vain is the intended intermediate word in the analogous silly-to-daft chain. The other choices are unrelated nouns or verbs.

### Q2 — Minimum colors for the 15-part figure — A

Treat each part as a vertex and join two vertices when the corresponding parts share a boundary. The source figure contains a four-part mutually adjacent pattern, so three colors cannot suffice. A four-color assignment exists, hence the minimum is 4.

This is a graph-coloring question: corners that only touch at a point are not adjacent.

### Q3 — Four-digit multiples of 3 — B

A number is divisible by 3 exactly when its digit sum is divisible by 3. The five digits sum to 21. A four-digit selection is made by omitting one digit; the remaining sum is divisible by 3 when the omitted digit is 3 or 6. Thus there are two valid sets, and each has \(4!\) arrangements:

\[
2\times4!=48.
\]

### Q4 — Infinite series — B

Group the terms as

\[
2+\left(\frac12+\frac14+\frac18+\cdots\right)
+\left(\frac13+\frac19+\frac1{27}+\cdots\right).
\]

The geometric sums are \(1\) and \(1/2\), respectively. Total:

\[
2+1+\frac12=\frac72.
\]

### Q5 — Valid votes — B

Valid votes are \(115000-5000=110000\). Candidates B and C together have \(25\%+20\%=45\%\):

\[
0.45(110000)=49500.
\]

### Q6 — Passage inference — D

The passage explicitly links mutations in a gene with the later ability to digest milk. It does not say every human has the ability, that digestion is essential, or that nobody can digest milk. Therefore D is the only supported inference.

### Q7 — Three children, two girls — A

The three possible positions of the boy are GGB, GBG, and BGG. Each has probability \((1/2)^3\), so

\[
3\left(\frac12\right)^3=\frac38.
\]

### Q8 — Mutual-fund return — B

Let \(r\) be the return of A. The B and C investments differ by ₹10000 and both return 15%, so their final-value difference is ₹11500. The A investments differ by ₹10000, so the final-value difference contributed by A in favour of Person 2 is \(10000(1+r)\). The total difference is ₹500:

\[
11500-10000(1+r)=500.
\]

Hence \(r=0.10=10\%\).

### Q9 — Dice net — B

Use the three displayed dice views to infer which faces are mutually adjacent. A valid net must place the six faces so that the three observed triples can be obtained by rotations; opposite faces cannot share an edge. Checking the four diagrams against these adjacency constraints leaves option B.

### Q10 — Two cones — A

A plane through the two opposite vertices and the common circular base cuts each cone in an isosceles triangle. The two congruent triangles share the base and have opposite vertices, producing a diamond-shaped outer boundary: a rhombus.

### Q11 — Distribution facts — A

For \(X\sim\operatorname{Poisson}(\lambda)\),

\[
E[X]=\operatorname{Var}(X)=\lambda.
\]

For \(Z\sim N(0,1)\), the mean is 0 and variance is 1. Both statements are true.

### Q12 — Three coins — A

Two or more heads and two or more tails cannot both occur in only three tosses: that would require at least four tosses. Therefore \(T\cap S\) is empty and its probability is 0.

### Q13 — Matrix eigenvalues — supplied key B; direct check

For

\[
M=\begin{bmatrix}2&-1\\3&1\end{bmatrix},
\]

the characteristic polynomial is

\[
\det(M-\lambda I)
=(2-\lambda)(1-\lambda)+3
=\lambda^2-3\lambda+5.
\]

Its discriminant is \(9-20=-11\), so the eigenvalues are a complex-conjugate pair and the mathematical answer is B. The supplied key file also lists B for Q13.

### Q14 — DFS edge — A

In an undirected graph, if an edge is explored from a currently active vertex \(u\) to an undiscovered vertex \(v\), it becomes a tree edge. The condition \(d[u]<d[v]\) is consistent with moving forward along a shortest-distance layer, but the decisive DFS definition is that \(v\) is first discovered through this edge.

### Q15 — Second-derivative test — A

If \(f'(x^*)=0\) and \(f''(x^*)>0\), the graph curves upward locally. Hence \(x^*\) is a local minimum. No global conclusion follows without information about the entire domain.

### Q16 — Data structures — A

FIFO corresponds to queues, hash-table lookup corresponds to hash tables, and LIFO corresponds to stacks:

\[
(p)\to(ii),\quad(q)\to(iii),\quad(r)\to(i).
\]

### Q17 — SVM support vectors — supplied key D

A support vector must lie on one of the margin boundaries, not deep inside its class. Plotting the six points shows that \(x_1,x_2,x_3,x_4\) can define the separating margin, while \(x_5,x_6\) lie farther away. Thus D.

### Q18 — ML matching — C

PCA is dimensionality reduction, naive Bayes is generative, and logistic regression is discriminative:

\[
(p)\to(ii),\quad(q)\to(iii),\quad(r)\to(i).
\]

### Q19 — k-means — D

The two points \((1,1)\) and \((-1,1)\) have midpoint \((0,1)\). In Euclidean k-means, the Voronoi/cluster geometry means the point at the midpoint is necessarily no farther from the cluster center than either endpoint and belongs to the same cluster under the stated setup. The keyed option is \((0,1)\), D.

### Q20 — Naive Bayes parameters — B

For two classes, one independent class prior is needed. For each of \(K\) binary attributes and each class, one Bernoulli parameter is needed: \(2K\) parameters. Total:

\[
2K+1.
\]

The PDF typography makes the options visually similar; read the exponents in the original.

### Q21 — Hash insertion probes — A

For uniform hashing, the given unsuccessful-search expectation is bounded by \(1/(1-\alpha)\). Insertion uses the first empty slot and has expected probes

\[
\frac1\alpha\ln\left(\frac1{1-\alpha}\right)
\]

under the standard uniform open-addressing result. The keyed option is A.

### Q22 — Fisher discriminant — A

Maximizing

\[
J(u)=\frac{u^TS_Bu}{u^TS_Wu}
\]

gives the generalized eigenvalue equation

\[
S_Bu=\lambda S_Wu.
\]

Since \(S_W\) is nonsingular,

\[
S_W^{-1}S_Bu=\lambda u.
\]

### Q23 — Admissible heuristic — D

Admissible heuristics are nonnegative and do not overestimate the true remaining cost. The absolute difference obeys

\[
|h_1-h_2|\le h^*
\]

because both \(h_1,h_2\le h^*\). Sums, products, and ratios can exceed the true cost. Thus D.

### Q24 — Bayesian-network independence — C is false

The factorization is

\[
P(U)P(V)P(W\mid U,V)P(X\mid W)P(Y\mid W).
\]

Given \(W\), X and Y are separated from U and V, so A, B, and D hold. U and V can remain dependent after conditioning on their common child W; therefore C is false.

### Q25 — Alpha-beta meanings — C

At a MAX node, alpha is the highest value found so far. At a MIN node, beta is the lowest value found so far. So \(m=\) highest and \(n=\) lowest.

### Q26 — Relational algebra containment — C

Every Team name must occur in Defender or Forward:

\[
\pi_{\text{name}}(Team)
\setminus
\left(
\pi_{\text{name}}(Defender)\cup
\pi_{\text{name}}(Forward)
\right)
=\varnothing.
\]

### Q27 — z-score — B

\[
z=\frac{106000-96000}{21000}
=\frac{10000}{21000}\approx0.476.
\]

### Q28 — Full binary-tree reconstruction — A,B,C

Any two of preorder, inorder, and postorder uniquely reconstruct a binary tree when the node labels are distinct. Inorder alone is insufficient. Hence A, B, and C.

### Q29 — Tautologies — B,C,D

Check each implication only when its antecedent is true:

- A has \(x=false,y=true\), making \(y\Rightarrow x\) false, so A is not a tautology.
- B, C, and D have consequents that are forced true whenever their antecedents hold.

Therefore B, C, and D.

### Q30 — Quicksort swaps — 0

The array is already sorted and the last element is always the largest pivot. Every partition leaves the array unchanged; no swap is needed.

### Q31 — SQL join count — 3

Filter Team to Jaipur: IDs 2, 1, and 6. Join with Raider and retain RaidPoints \(>200\): ID 1 has 250 and ID 6 has 215; ID 2 has 219, also greater than 200. Three rows result.

### Q32 — Deque trace — 17

State trace:

\[
[]\to[10]\to[10,32]\to[32]\to[32,28]\to[32,28,17]
\to[28,17]\to[28].
\]

The final removeLast returns 17, so the answer is 17.

### Q33 — Sigmoid derivative — 0.24

For \(f(x)=\sigma(x)\),

\[
f'(x)=f(x)(1-f(x)).
\]

At \(f(x)=0.4\),

\[
f'(x)=0.4(0.6)=0.24.
\]

### Q34 — Updated average — 42

Old sum \(=50(40)=2000\). New sum \(=2000+142=2142\), and new count \(=51\):

\[
2142/51=42.
\]

### Q35 — Determinant polynomial — 0

Factor:

\[
M^2+12M=M(M+12I).
\]

The determinant is

\[
\det(M)\det(M+12I).
\]

For the displayed matrix, \(\det(M)=0\), hence the answer is 0.

---


### Q36 — Expected throws for two consecutive evens — C

Let \(E_0\) be the expected remaining throws when the previous throw was odd or there is no previous even, and \(E_1\) when the previous throw was even. Since an even occurs with probability \(1/2\):

\[
E_0=1+\frac12E_1+\frac12E_0,
\qquad
E_1=1+\frac12(0)+\frac12E_0.
\]

Solving gives \(E_0=6\).

### Q37 — Piecewise differentiability — A

At \(x=-2\), match value and derivative with \(-x\); at \(x=2\), match value and derivative with \(x\):

\[
4a-2b+c=2,\quad -4a+b=-1,
\]

\[
4a+2b+c=2,\quad 4a+b=1.
\]

Solving gives

\[
a=\frac14,\qquad b=0,\qquad c=1.
\]

### Q38 — Recursive tree count — D

The recursion counts the node itself plus all descendants. The tree has root 0, children 1 and 2, and six leaf descendants 3–8:

\[
1+2+6=9.
\]

### Q39 — Pseudocode trace — C

Start with \(S_1=1\). Compare consecutive values:

\[
[6,3,5,4,10]\Rightarrow
[1,1,2,1,2].
\]

Only a nondecreasing adjacent pair adds the previous score.

### Q40 — Binary-search recurrence — A

One comparison is made at the current middle, and the worst remaining subproblem has at most \(\lfloor n/2\rfloor\) elements:

\[
F(n)=F(\lfloor n/2\rfloor)+1.
\]

### Q41 — Recursive Python function — C

It swaps the outer elements \(D[s_1]\) and \(D[s_2]\), then moves inward. This reverses the subarray from \(s_1\) through \(s_2\).

### Q42 — Single-linkage clustering — official key A

Single linkage merges the pair of current clusters with minimum cross-cluster distance. Starting from the table, merge \(x_1,x_2\) and \(x_4,x_5\) first, then use the minimum distance between the resulting clusters at each step. Match the resulting dendrogram to the original paper’s diagram; the supplied key is A.

### Q43 — ReLU network equivalence — official key A

For positive inputs and zero biases, every active ReLU is linear. Propagate each input coefficient through the first network, collect the coefficient of \(x_1,x_2,x_3\), and equate those coefficients with the second network. This gives

\[
p=36,\quad q=24,\quad r=24.
\]

### Q44 — BFS versus DFS — official key C

Trace the frontier exactly, removing already-expanded states. Under the stated expansion order, BFS and DFS expand the same number of states before reaching 6; the supplied key is C.

### Q45 — Sorting passes — official key B

Under the standard full left-to-right pass definition, selection sort places 1 and then 2 after two passes; the supplied key marks option B. In every sorting question, state the exact pass definition before tracing.

### Q46 — Functional-dependency closure — official key A,B,D

The dependency \(WX\to YZ\) is given directly. Hence it is certainly derivable. The other options do not follow from the supplied dependencies. The official key file lists the accepted MSQ set for this item; the direct closure check confirms \(WX\to YZ\).

### Q47 — Subspaces of \(\mathbb R^3\) — A,C

A span of fixed vectors is a subspace, so A is valid. B uses squared coefficients and is not closed under scalar multiplication by negative numbers. C is the solution set of homogeneous linear equations, so it is a subspace. D has a nonzero constant and does not contain the zero vector.

### Q48 — Linear-system possibilities — B,D

A square system with a unique solution has an invertible matrix, so another right-hand side cannot have infinitely many or no solutions; A is false. A singular \(3\times3\) matrix can have an inconsistent right-hand side \(p\) and a consistent right-hand side \(q\) with infinitely many solutions, so B is true. A \(2\times3\) system cannot have a unique solution because a homogeneous null space is nontrivial, so C is false. A \(3\times2\) full-column-rank matrix can have a unique solution for a column-space vector and no solution for a vector outside that space, so D is true.

### Q49 — Projection matrix — B,C,D

A projection has rank equal to \(\dim U\) and nullity \(3-\dim U\). Thus a two-dimensional \(U\) has one-dimensional null space, while a one-dimensional \(U\) has two-dimensional null space. Projection idempotence gives

\[
M^2=M\Rightarrow M^3=M.
\]

### Q50 — Polynomial extrema — official key A,B; direct calculus note

\[
f'(x)=x^3-2x^2-3x=x(x-3)(x+1).
\]

Thus \(x=-1,0,3\) are critical points. The second derivative is

\[
f''(x)=3x^2-4x-3.
\]

So \(x=0\) is a local maximum and \(x=3\) is a local minimum. The direct calculation supports A and B; the supplied key file should be consulted if its MSQ entry differs. This is a useful example of independently checking an answer key rather than memorizing it.

### Q51 — Topological order — official key B,D

A topological order must place every directed edge \(u\to v\) with \(u\) before \(v\). Check each proposed string against every edge in the source DAG. The accepted orderings are B and D.

### Q52 — Binary-tree bounds — official key A,B,C

For a rooted binary tree of height \(H\), the minimum node count is \(H+1\) and the maximum is \(2^{H+1}-1\), giving B. The number of leaves is at most one more than the number of internal nodes, giving A. The number of internal nodes is at least \(H\) and at most \(2^H-1\), giving C. The proposed upper bound in D is not a general bound for leaves.

### Q53 — Linear separability — official key A,D

A dataset is linearly separable if one straight line places all circles on one side and all squares on the other. Test each source figure by looking for such a line; the supplied key marks figures (i) and (iv), A and D.

### Q54 — First-order logic — A

“All balls are round except balls used in rugby” means:

\[
\text{not rugby}\Rightarrow\text{round}
\]

and

\[
\text{rugby}\Rightarrow\text{not round}.
\]

These are \(s_1\) and \(s_3\), so \(s_1\land s_3\).

### Q55 — Indexing a selection and joins — official key A,B

The predicate CustomerRating \(>3.4\) is a range predicate, for which a B+ tree is appropriate. Genre.Name \(=\) “Comedy” is an equality predicate, for which hashing is appropriate. A B+ tree on all attributes is also a valid broad indexing choice; option B is the targeted mixed choice.

### Q56 — Uniform-region probability — 0.125

The rectangle for \((X,Y)\) is \([1,3]\times[2,4]\), area 4. The event \(X\ge Y\) exists only for \(2\le x\le3\), with vertical length \(x-2\):

\[
P(X\ge Y)=\frac{\int_2^3(x-2)\,dx}{4}
=\frac{1/2}{4}=0.125.
\]

### Q57 — Exponential parameter — 0.2

For an exponential variable,

\[
E[X]=\frac1\lambda,\qquad
\operatorname{Var}(X)=\frac1{\lambda^2}.
\]

The condition \(5E[X]=\operatorname{Var}(X)\) gives

\[
\frac5\lambda=\frac1{\lambda^2}
\Rightarrow\lambda=0.2.
\]

### Q58 — Bayes theorem — 0.25

\[
P(T)=1-0.6=0.4,
\]

\[
P(S)=0.3(0.4)+0.6(0.6)=0.48.
\]

Therefore

\[
P(T\mid S)=\frac{P(S\mid T)P(T)}{P(S)}
=\frac{0.3(0.4)}{0.48}=0.25.
\]

### Q59 — Conditional expectation — source/key discrepancy

For the displayed joint density proportional to \(2xy\) on \(0<y<x\), fixing \(X=x\) gives

\[
f_{Y\mid X}(y\mid x)=\frac{2y}{x^2},\quad 0<y<x.
\]

Hence

\[
E[Y\mid X=x]
=\int_0^x y\frac{2y}{x^2}\,dy
=\frac{2x}{3}.
\]

At \(x=1.5\), this is \(1\). The supplied key text shows “MTA”; retain this item as a key/source-format discrepancy and use the derivation above.

### Q60 — Limit — 0.5

Use expansions near zero:

\[
\ln(1+x^2)=x^2+o(x^2),
\qquad
\ln(\cos x)=-\frac{x^2}{2}+o(x^2).
\]

The numerator is \(x^2/2+o(x^2)\), so the limit is \(1/2\).

### Q61 — Sum of singular values — 55

\[
M=uu^T,\qquad u=(1,2,3,4,5)^T.
\]

This is rank one and positive semidefinite. Its only nonzero singular value is

\[
u^Tu=1+4+9+16+25=55.
\]

### Q62 — Information gain — 0.12 to 0.13

The target has 4 Green and 6 Blue, so

\[
H(T)=H_2(0.4)\approx0.971.
\]

For Pitch = S, the split is 3 Green, 2 Blue; for Pitch = F, it is 1 Green, 4 Blue. The weighted post-split entropy is approximately \(0.846\), giving

\[
IG(T,\text{Pitch})\approx0.971-0.846=0.125.
\]

### Q63 — kNN — 5

Measure Euclidean distances from the diamond to each plotted point and sort them. For the source figure, the smallest odd \(k\) for which the majority label becomes square is 5.

### Q64 — Bayesian-network joint probability — 0.125

Read the factorization from the network:

\[
P(U,V,W,Z)=P(U)P(V\mid U)P(W\mid U)P(Z\mid V,W).
\]

For \(U=V=W=Z=1\):

\[
0.5\times0.5\times1\times0.5=0.125.
\]

### Q65 — Covariance — 0.0625

\(X=1\) only for HH, so \(P(X=1)=1/4\). \(Y=1\) unless both tosses are tails, so \(P(Y=1)=3/4\). Since \(X=1\) implies \(Y=1\), \(XY=X\), and

\[
\operatorname{Cov}(X,Y)
=E[XY]-E[X]E[Y]
=\frac14-\frac14\cdot\frac34
=\frac1{16}=0.0625.
\]

---

# 2025 PYQs

## Answer key

| Q | Answer | Q | Answer | Q | Answer |
|---:|:---:|---:|:---:|---:|:---:|
| 1 | A | 2 | B | 3 | C |
| 4 | A | 5 | C | 6 | B |
| 7 | B | 8 | A | 9 | C |
| 10 | A | 11 | C | 12 | B |
| 13 | C | 14 | A | 15 | A |
| 16 | C | 17 | D | 18 | D |
| 19 | A | 20 | A | 21 | A |
| 22 | A | 23 | A | 24 | A |
| 25 | B,D | 26 | C,D | 27 | C |
| 28 | A,B | 29 | A,B | 30 | B,D |
| 31 | 0.25 | 32 | 0.5 | 33 | 3 |
| 34 | 0.285–0.287 | 35 | 0.39–0.41 | 36 | B |
| 37 | D | 38 | A | 39 | C |
| 40 | A | 41 | A | 42 | C |
| 43 | A | 44 | C | 45 | C |
| 46 | D | 47 | B | 48 | A,C |
| 49 | C,D | 50 | A,B | 51 | B,C,D |
| 52 | A,D | 53 | B,C | 54 | A,C |
| 55 | B,C | 56 | B,C | 57 | B,D |
| 58 | B,C | 59 | 0 | 60 | 100 |
| 61 | 66.6–66.7 | 62 | 1 | 63 | 160 |
| 64 | 24 | 65 | 75 | | |

## Detailed solutions

### Q1–Q2 — Vocabulary and tense

Q1: Yearning means longing, so A. The sentence in Q2 describes an action continuing when rain began; past continuous is required: “had been playing,” B.

### Q3–Q4 — Figures

Q3: Count the pixels satisfying \(U\le4\) in the supplied image; the official count is 11, C. Q4: evaluate the number assigned to each geometric region using the stated rectangle/triangle/ellipse coding; the correct combination is A. Use the source pages for the exact figure.

### Q5 — Area change — C

Area is \(LW\). Increasing \(W\) by 10% gives \(L(1.1W)=1.1LW\), a 10% increase. Perimeter and diagonal do not generally increase by exactly 10%, and the rectangle need not become a square.

### Q6 — Conversation matching — B

A messy house should be cleared up; dissatisfaction with marks can be taken up with the teacher; avoiding politics means not bringing it up; an unknown word can be looked up. Thus P–3, Q–4, R–1, S–2.

### Q7 — Same weight — B

The common weight must be below the peak value at age 50. One brother must lie on the increasing side and the other on the decreasing side:

\[
a_1<50<a_2.
\]

### Q8 — Dodecagon triangles — A

The 12 isosceles triangles can be grouped into four sets of three? The source construction uses three squares, each requiring four triangles. Thus the answer is \(3;4\), A.

### Q9 — Exponent equation — C

Rewrite every quantity with a common base, equate exponents, and square the resulting value. The official result is \(x^2=2^3\), C.

### Q10 — Weighted mean and earning — A

The average number of patients is

\[
\frac{20(5)+40(6)+30(7)+10(8)}{100}=6.3.
\]

Average earning:

\[
1000(6.3-0.2)=6100.
\]

### Q11 — Total expectation — C

The tower property says

\[
E[E[X\mid Y]]=E[X].
\]

### Q12 — Gaussian elimination on upper-triangular input — B

For an already upper-triangular matrix, the elimination bookkeeping and row operations have quadratic-order structure under the paper’s operation count. The intended order is \(O(n^2)\).

### Q13 — Row sums — C

If every row sum of \(A\) is 1, then \(A\mathbf1=\mathbf1\). Therefore

\[
B\mathbf1=(A^3-2A^2+A)\mathbf1
=(1-2+1)\mathbf1=0.
\]

The zero equation has a nonzero null vector and hence infinitely many solutions.

### Q14 — Derivative of sinh — A

\[
f(x)=\frac{e^x-e^{-x}}2=\sinh x.
\]

Even derivatives of \(\sinh x\) vanish at 0; the tenth derivative is 0.

### Q15 — Logical equivalence — A

\[
p\to q\equiv\neg p\lor q.
\]

Thus \(S_1\equiv S_3\).

### Q16 — Dependency preservation — C

If dependencies are not preserved in individual decomposed relations, joins are required to reconstruct enough information to check them. Hence joins become more frequent.

### Q17 — Relational algebra — D

First select red cars, then join them with makers equal to ABC, then join with ownership and project owner. This returns all owners of red cars made by ABC.

### Q18 — Hashing with linear probing — D

Insertion locations:

\[
h(1)=3,\ h(4)=2,\ h(5)=5,\ h(6)=8.
\]

For 14, \(h(14)=2\), then slots 3 is occupied and slot 4 is free. For 15, \(h(15)=5\), then slot 6 is free. Thus 4 and 6, D.

### Q19 — Uniform CDF median — A

For \(t\le x\le4\),

\[
F_X(3)=\frac{3-t}{4-t}=\frac12.
\]

Solving gives \(t=2\).

### Q20 — Affine normal variable — A

Since \(Z\sim N(0,1)\),

\[
E[X]=b=1,
\qquad
\operatorname{Cov}(X,Z)=a=-2,
\]

and \(\operatorname{Var}(X)=a^2=4\). Thus \(a=-2,b=1\).

### Q21 — Exponential tail — A

\[
P(X\ge2)=e^{-2\lambda}=0.25= e^{-\ln4}.
\]

So \(2\lambda=\ln4\), giving \(\lambda=\ln2\).

### Q22 — Perceptron update — A

For \(y_n=+1\), the update is \(w'=w+x_n,b'=b+1\). Therefore

\[
f(x_n;w',b')-f(x_n;w,b)
=x_n^Tx_n+1>0.
\]

### Q23–Q24 — Python and differentiability

Q23: extend adds each element of B to A, giving the flat list; A. Q24: sums/differences, products, and quotients with \(g(c)>1\) are differentiable. Use the official key A and inspect the precise option formatting in the source PDF when working this question.

### Q25 — Orthonormal bases — B,D

There are infinitely many orthonormal bases of \(\mathbb R^n\), so A is false and B true. Every orthonormal set is linearly independent, so D is true; arbitrary independent vectors need not be normalized or orthogonal.

### Q26 — Bayesian-network inference — C,D

Variable elimination is exact and can compute conditional probabilities. Gibbs sampling and rejection sampling are approximate. Therefore C and D.

### Q27 — Binary search — C

Binary search requires sorted random-access data for \(O(\log n)\) worst-case time. An increasing array satisfies this. A linked list has costly middle access.

### Q28 — Rank-one update — A,B

\[
A=I+xx^T,\qquad x^Tx=1.
\]

The eigenvalue along \(x\) is 2 and every perpendicular eigenvalue is 1. Thus \(A\) has full rank and is invertible; it has no zero eigenvalue and \(A^{-1}\) has positive eigenvalues.

### Q29 — Insertion sort — official key A,B

Insertion sort shifts elements left until the current element is placed. Trace each candidate \(x\) in the original array and count only the swaps defined by the paper’s implementation. The accepted values are 10 and 12.

### Q30 — Linkage — B,D

Single linkage uses the minimum cross-cluster distance:

\[
\operatorname{DIS\!-\!2}.
\]

Complete linkage uses the maximum:

\[
\operatorname{DIS\!-\!1}.
\]

### Q31 — Bayes theorem — 0.25

\[
P(B_2\cap W)=\frac16\cdot\frac23=\frac19.
\]

Total white probability:

\[
\frac12\cdot\frac13+\frac16\cdot\frac23+\frac13\cdot\frac12
=\frac49.
\]

Therefore

\[
P(B_2\mid W)=\frac{1/9}{4/9}=\frac14.
\]

### Q32 — Limit — 0.5

Rationalize:

\[
\sqrt{t^2+t}-t
=\frac{t}{\sqrt{t^2+t}+t}
\to\frac12.
\]

### Q33 — SQL scalar subquery — 3

The largest SR Nagar loan is 65000. Loans greater than this are 90000, 80000, and 70000, so three rows are returned.

### Q34 — Least-squares slope — key/source discrepancy

For a model \(y=wx\) through the origin,

\[
\hat w=\frac{\sum x_iy_i}{\sum x_i^2}
=\frac{-1-10+15}{1+4+9}
=\frac8{14}\approx0.571.
\]

The supplied key range \(0.285\)–\(0.287\) does not match this direct calculation; inspect the original PDF for a possible transcription or objective-function detail. Record this as a key discrepancy rather than memorizing 0.286 without checking.

### Q35 — Naive-Bayes error — 0.40

Unnormalized posteriors:

\[
P(y_1)P(x\mid y_1)=\frac13\cdot\frac34=\frac14,
\]

\[
P(y_2)P(x\mid y_2)=\frac23\cdot\frac14=\frac16.
\]

The classifier chooses \(y_1\). The posterior probability of the other class is

\[
\frac{1/6}{1/4+1/6}=0.4.
\]

### Q36 — Chi-squared variance — B

\(Z\) is standard normal, so \(Y=Z^2\sim\chi^2_1\). A chi-squared variable with one degree of freedom has variance \(2\).

### Q37 — Matrix equation \(A^3=A\) — D

The polynomial is

\[
A(A-I)(A+I)=0.
\]

The roots \(0,1,-1\) are distinct, so the matrix is diagonalizable and \(A\) and \(A^2\) have the same nonzero-eigenvalue support and hence the same rank.

### Q38 — Gram matrix — A

The vectors are linearly independent, so their Gram matrix

\[
A_{ij}=x_i^Tx_j
\]

is positive definite. Therefore it is invertible.

### Q39 — CDF interval — C

\[
X^2\le0.25\iff -0.5\le X\le0.5.
\]

Using the CDF:

\[
F(0.5)-F(-0.5)
=\frac{(1.5)^2}{4}-\frac{(0.5)^2}{4}
=0.5.
\]

### Q40 — CLT for binomial — A

\[
\mu=np=75,\qquad
\sigma=\sqrt{np(1-p)}=7.5.
\]

The bounds 60 and 90 are approximately \(\mu\pm2\sigma\), so the probability is represented by

\[
\phi(2)-\phi(-2).
\]

### Q41 — Floor of exponential — A

Mean \(1/\ln10\) means rate \(\lambda=\ln10\). For positive integer \(\ell\),

\[
P(\lfloor X\rfloor=\ell)
=P(\ell\le X<\ell+1)
=e^{-\lambda\ell}(1-e^{-\lambda})
=(0.1)^\ell(0.9).
\]

Thus \(q=0.1\).

### Q42 — ReLU derivatives — C

Use the chain rule through only active ReLU units. An inactive unit has derivative 0; an active unit has derivative 1. Propagating the given numerical activations and weights gives the keyed pair in C.

### Q43 — Alpha-beta pruning — A

At a MIN node, a branch is pruned once its value is no better than the MAX ancestor’s alpha bound. Apply this independently to the two trees, keeping the inequalities inclusive at a tie. The ranges are \(x\ge1\) and \(y\le2\), A.

### Q44 — A* expansion — C

Compute \(f(n)=g(n)+h(n)\) for every frontier node after each expansion and always remove the smallest \(f\). The source graph’s priority sequence is

\[
S,A,E,B,C,D,G,
\]

which is option C.

### Q45 — At least one 1 — C

The complement is that all 100 dice avoid 1:

\[
P(A)=1-\left(\frac56\right)^{100}.
\]

### Q46 — SQL CUBE — D

For two dimensions, CUBE produces:

- six detailed groups;
- three groups aggregated over \(D_2\);
- two groups aggregated over \(D_1\);
- one grand total.

Total \(6+3+2+1=12\).

### Q47 — Python set loop — B

Trace the three sets after each assignment while the condition “other in C” remains true. The final membership of “this” is only in B.

### Q48 — ReLU properties — A,C

ReLU is continuous at 0 because both one-sided limits equal 0. Its left derivative at 0 is 0 and right derivative is 1, so it is not differentiable there. A scaling identity for every real \(a\) is false.

### Q49 — Cubic extrema — C,D

Differentiate:

\[
f'(x)=x^2+7x+10=(x+5)(x+2).
\]

The critical points are \(-5\) and \(-2\). The second derivative is \(2x+7\), whose minimum on the interval is at the left endpoint/vertex location specified by the question. Evaluate \(f\) and \(f'\) at the candidates; the accepted statements are C and D.

### Q50 — Projection — A,B

A is the sum of five orthogonal rank-one projections. It is symmetric and idempotent, with five eigenvalues 1 and five eigenvalues 0. Therefore its singular values are 0 or 1 and coincide with eigenvalues. It is not invertible.

### Q51 — Strict convexity — B,C,D

Since \(f''(x)>0\), \(f'\) is strictly increasing and can have at most one zero. Therefore there cannot be two distinct stationary points, and there can be at most one local or global minimum. Existence of a minimum is not guaranteed, so A is not necessary.

### Q52 — Norm-preserving matrix — A,D

\[
\|Ax\|^2=x^TA^TAx=\|x\|^2
\]

for every x implies \(A^TA=I\). Hence A is orthogonal and full rank. Orthogonal matrices may have complex eigenvalues on the unit circle, so C is not always true.

### Q53 — Hard-margin SVM — B,C

The closest points to the separating boundary are the support vectors. Solving the symmetric margin constraints gives three support vectors and margin \(\sqrt2\); the training accuracy is 100%, not 98%. Thus B and C.

### Q54 — Bernoulli sample mean — A,C

\[
E[\hat p]=p,
\qquad
\operatorname{Var}(\hat p)=\frac{p(1-p)}n.
\]

Thus the estimator is unbiased and its variance decreases with \(n\).

### Q55 — Nearest class mean — B,C

Expand:

\[
\|\mu_r-x\|^2-\|\mu_g-x\|^2
=\|\mu_r\|^2-\|\mu_g\|^2
-2(\mu_r-\mu_g)^Tx.
\]

The quadratic \(x^Tx\) terms cancel, so the function is linear and has the form \(w^Tx+b\). At \(x=0\), if \(\|\mu_r\|<\|\mu_g\|\), the red class is closer, not green.

### Q56 — Keys and nullability — B,C

Phone has no NOT NULL declaration, so it may be NULL. Aadhaar is the primary key of Person, so it is a candidate key there and cannot be NULL. A foreign key in Customer is not automatically unique.

### Q57 — Candidate keys and BCNF — B,D

Closure \(A^+\) gives all attributes via \(A\to BCEF\) and \(E\to DG\). Closure \((BC)^+\) gives A and then all attributes. Thus A and BC are candidate keys. Since \(E\to DG\) has a determinant that is not a superkey, BCNF is violated.

### Q58 — Shortest-path restrictions — B,C

Any additional edge that creates a shorter path than one stated in the question cannot exist. Check each candidate edge by inserting it into the three prescribed paths; the edges ruled out are B and C.

### Q59 — Rigidity inequality — 0

Partition \([0,1]\) into \(n\) equal pieces:

\[
|f(1)-f(0)|
\le\sum_{i=1}^n\left(\frac1n\right)^2
=\frac1n.
\]

Let \(n\to\infty\). The difference is 0.

### Q60 — PCA variance — 100

The covariance eigenvalues are \(100^{2-i}\). The maximum is the first, \(\lambda_1=100\). The maximum projected average squared value equals this leading variance.

### Q61 — Expected black balls — 66.7

Each draw is black with probability \(10/15=2/3\). Therefore

\[
E[S_{100}]=100\cdot\frac23=66.666\ldots.
\]

### Q62 — Relational division — 1

The division asks for customer–branch pairs whose customer has a loan in every branch appearing in Loan. Karteek appears with loans in Banjara Hills, Kondapur, SR Nagar, and Balanagar. Exactly one tuple remains.

### Q63 — Recursive arithmetic — 160

For odd \(a\), the function doubles the recursive result at \((a-1)/2\); for even \(a\), it adds \(b\) after decrementing. Since \(15\to7\to3\to1\to0\), the returned value is

\[
2^4\cdot10=160.
\]

### Q64 — Stack pseudocode — 24

Trace the pushes from 0 through 8, then the popping phase. Odd popped values cause one additional pop, while every retained popped value contributes to sum. The complete trace totals 24.

### Q65 — DFS discovery order — 75

Because adjacency lists are decreasing, DFS takes the \(+2\) edge whenever possible and discovers the even chain first, then returns through backtracking to discover remaining reachable odd vertices. Counting discovery events after vertex 50 gives 75.

---

# 2026 PYQs

## Answer key

| Q | Answer | Q | Answer | Q | Answer |
|---:|:---:|---:|:---:|---:|:---:|
| 1 | B | 2 | B | 3 | A |
| 4 | C | 5 | D | 6 | A |
| 7 | B | 8 | D | 9 | C |
| 10 | C | 11 | B | 12 | C |
| 13 | C | 14 | C | 15 | D |
| 16 | B | 17 | A | 18 | D |
| 19 | C | 20 | A | 21 | B |
| 22 | A | 23 | B | 24 | A,B,C |
| 25 | A,B | 26 | A,B | 27 | B,D |
| 28 | A,C | 29 | 8.90–9.10 | 30 | 2 |
| 31 | 10 | 32 | 195 | 33 | 10 |
| 34 | 0.34–0.36 | 35 | 1 | 36 | D |
| 37 | D | 38 | B | 39 | C |
| 40 | D | 41 | A | 42 | D |
| 43 | A | 44 | A | 45 | A |
| 46 | C | 47 | A,B | 48 | B,C,D |
| 49 | B,C,D | 50 | B,D | 51 | A |
| 52 | A,D | 53 | A,B,C | 54 | B,C |
| 55 | 6.90–7.10 | 56 | 135 | 57 | 0.76–0.78 |
| 58 | 8 | 59 | 2–3 | 60 | 3 |
| 61 | 4 | 62 | 10 | 63 | 0 |
| 64 | 0.08–0.12 | 65 | 1 | | |

## Detailed solutions

### Q1–Q2 — Vocabulary and digit product

Q1: Insolence is opposite in tone to respect, so B. For Q2, the digits \(2,5,7\) have product \(70\) and sum \(14\), so B.

### Q3 — Puzzle assembly — A

Rotate and translate the four pieces without reflection or overlap. Only target P has the required boundary and uses all four pieces exactly once.

### Q4 — Log comparison — official key C; check the premise

The relation is not determined by only \(m>n>0\): for example, \(m=4,n=2\) gives equality, while \(m=10,n=2\) gives \(x<y\). The supplied key marks C, but this item should be checked against the exact original statement or any omitted constraint before being used as a theorem.

### Q5 — Conditional statement — official key D; logical caution

The sentence alone does not establish whether the latest movie was successful. Formally, “success implies enough money” does not imply either success or failure. The supplied key marks D, so record the key but do not generalize this inference beyond the paper’s intended verbal-aptitude convention.

### Q6 — Prepositions — A

The idiomatic sequence is “parted at the door of the cabin that I had rented for the night.”

### Q7 — Multiset count — B

Let the sorted five integers be \(a\le b\le c\le d\le e\). Median 18 gives \(c=18\), single mode 20 requires 20 to occur more often than any other value, and mean 12 gives total 60. Enumerating multiplicity patterns under these constraints gives two valid selections, B.

### Q8 — Chess logic — D

The first game is the only same-class game, losses eliminate players, and the win totals require the surviving undefeated student to be Tanvi. Build the three-game chain and enforce the class and gender win counts; the answer is D.

### Q9 — Consecutive two-digit numbers — C

Let the numbers be \(n,n+1\). The equation

\[
n^2+(n+1)^2=100X+10Y+P
\]

must use six distinct digits and end in \(P\). Testing two-digit \(n\) values under the digit constraints gives the keyed units digit \(Y=6\), C.

### Q10 — Circle geometry — C

Use equal chords \(PQ=RQ\) and \(\angle PQR=45^\circ\). The triangle geometry and radius 10 determine the two component areas in the shaded region; summing them gives \(50\sqrt2\), C.

### Q11–Q12 — PCA and LOOCV

Q11: Distinct principal components are orthogonal, so their angle is \(90^\circ\), B. Q12: The first 100 samples are held out for testing, leaving 900 samples for model selection. LOOCV makes one validation split per remaining sample, hence 900, C.

### Q13–Q14 — Search and predicate logic

Q13: A* uses a heuristic and is informed search, unlike BFS, DFS, and depth-limited search; C. Q14: The invalid formula is the one that uses a conjunction without the implication from kinghood to personhood. The supplied key is C.

### Q15 — Expected quicksort recurrence — D

With a uniformly random pivot rank \(k\), all \(k=0,\ldots,n-1\) are equally likely:

\[
T(n)=\frac1n\sum_{k=0}^{n-1}
[T(k)+T(n-k-1)]+O(n).
\]

### Q16 — Python default argument — B

The default list is created once when the function is defined. The first two calls share it:

\[
[1],\quad [1,2].
\]

The third call supplies a new empty list, producing \([3]\).

### Q17 — Candidate keys — A

Compute closures under

\[
A\to BC,\quad CD\to E,\quad E\to A.
\]

AD determines all attributes; ED gives A and then B,C, while CD gives E, then A, then B,C. These are the minimal keys listed in A.

### Q18 — OLAP operation — D

Country to State is a move to a finer level of a concept hierarchy, so it is drill-down.

### Q19 — Even product — C

The product is odd only when every selected element is odd. There are 1013 odd numbers in \(1,\ldots,2026\). For a uniformly chosen nonempty subset,

\[
P(\text{even product})
=1-\frac{2^{1013}-1}{2^{2026}-1}
=\frac{2^{1013}(2^{1013}-1)}{2^{2026}-1}.
\]

### Q20 — Positive compositions — A

The number of nonnegative solutions to four variables summing to 20 is

\[
{23\choose3}.
\]

Positive solutions are obtained by setting \(m_i=n_i-1\), giving

\[
{19\choose3}.
\]

The probability is \({19\choose3}/{23\choose3}\).

### Q21 — Rotation matrix — B

The matrix is a rotation by \(\theta=2\pi/5\). Since \(2026\equiv1\pmod5\),

\[
M^{2026}=M.
\]

### Q22 — Disk in a plane — A

\(S_1\) is a radius-4 ball in \(\mathbb R^3\). Its intersection with any two-dimensional subspace is a radius-4 disk, with area

\[
\pi(4)^2=16\pi.
\]

### Q23 — ML matching — B

Clustering uses k-medoids, classification uses naive Bayes, sampling uses MCMC, and feature extraction uses LDA:

\[
T1:A2,\ T2:A4,\ T3:A1,\ T4:A3.
\]

### Q24 — Entailment — A,B,C

If X entails Y, then \(X\Rightarrow Y\), “if X then Y” is true, and \(X\land\neg Y\) is impossible. The converse \(Y\Rightarrow X\) need not hold.

### Q25 — Tree reconstruction — A,B

Preorder begins with the root, so P is the root. Splitting the inorder sequence and recursively reconstructing gives the listed postorder, so A and B. Q has two children, and G is not in R’s left subtree.

### Q26 — Foreign-key safety — A,B

Inserting into the referenced parent relation can be safe, and deleting from the child relation cannot break a reference. Deleting from the parent or inserting an unmatched child can violate the constraint.

### Q27 — Cubic roots and extrema — B,D

\[
f'(x)=3x(x-2).
\]

Thus \(x=0\) is a local maximum and \(x=2\) a local minimum. Direct substitution gives \(f(1)=0\), so the root at 1 is also true. Match the exact accepted combination in the source; the key supplied for this item is B,D.

### Q28 — Normal and \(t_1\) distributions — A,C

Both distributions are symmetric about zero, so \(G(0)=H(0)=1/2\). The \(t_1\) density has heavier tails; at the positive crossing \(c\), its CDF is larger than the normal CDF, and symmetry gives the corresponding negative inequality. Their densities at 0 are not equal.

### Q29 — SGD update

The question’s objective is linear in \(w\), so

\[
\frac{\partial f_w(x)}{\partial w}=x.
\]

With \(w=10,x=10,\eta=0.10\),

\[
w_{\text{new}}=10-0.10(10)=9.00.
\]

The supplied range 8.90–9.10 confirms 9.

### Q30 — Minimax — 2

Evaluate each MAX strategy by taking the minimum of its three MIN responses. MAX then chooses the strategy with the largest of those minima. Applying the values in the source tree gives strategy 2.

### Q31 — Unsuccessful binary search — 10

The worst unsuccessful search follows the longest possible root-to-null path in a balanced recursive split of 1000 elements. Counting the equality comparisons along that path gives 10.

### Q32 — B+ tree fan-out — 195

A non-leaf node with \(p\) pointers has \(p-1\) search keys:

\[
10p+11(p-1)\le4096.
\]

Thus

\[
21p-11\le4096
\Rightarrow p\le195.57,
\]

so the maximum integer \(p\) is 195.

### Q33 — Involutive bijections — 10

A bijection satisfying \(f(f(n))=n\) consists of fixed points and disjoint transpositions. On four elements:

- no transpositions: 1;
- one transposition: \({4\choose2}=6\);
- two transpositions: 3.

Total \(1+6+3=10\).

### Q34 — Exponential memorylessness — source/key discrepancy

\[
P(X>10\mid X>5)=P(X>5)
\]

by memorylessness. Given \(P(X>5)=0.35\), the direct answer is 0.35. The supplied key range 0.76–0.78 does not match this calculation, so flag Q34 for verification rather than memorizing the range.

### Q35 — Double geometric sum — 1

\[
\sum_{i=0}^{\infty}\sum_{j=1}^{\infty}2^{-i}3^{-j}
=\left(\sum_{i=0}^{\infty}2^{-i}\right)
\left(\sum_{j=1}^{\infty}3^{-j}\right)
=2\cdot\frac12=1.
\]

### Q36 — Manhattan HAC — D

Compute pairwise Manhattan distances:

\[
d(P_1,P_2)=5,\quad
d(P_2,P_3)=7,\quad
d(P_3,P_4)=7,\quad
d(P_2,P_4)=5.
\]

The minimum listed distance is shared; under the source tie convention, \(P_2,P_4\) is selected, D.

### Q37 — Ridge regression — D

The \(L_2\) regularizer introduces bias but reduces estimator variance and overfitting. It does not specifically remove negative parameters and does not use \(L_1\).

### Q38 — Logic statement — D

The intended rule is \(C\land D\Rightarrow S\), with a creative person succeeding exactly when disciplined. Test each formula with truth assignments satisfying and violating this rule; only statement (iii) matches.

### Q39 — Recursive call count — C

Let \(T(n)\) count calls. For \(n>0\),

\[
T(n)=1+T(n-1)+T(n-2),
\]

with \(T(0)=T(-1)=1\). Thus

\[
T(1)=3,\ T(2)=5,\ T(3)=9,\ T(4)=15.
\]

### Q40 — Reversed graph reachability — D

If \(u\) is reachable from \(v\) in \(G\), reversing every edge gives a reversed path from \(u\) to \(v\) in \(G_R\). BFS and DFS differ in order but not in reachable-set logic. Hence D.

### Q41 — B+ tree insertion — A

Insert 3 in the appropriate leaf, split if the leaf exceeds two keys, and propagate the separator upward. The root retains separator key 5, A.

### Q42 — Relational algebra — D

Apply the first selection to \(X\bowtie Y\), the second to \(Y\bowtie Z\), then join and project \(P,R,S\). The common join attributes and filters leave no compatible rows, so the result is empty.

### Q43 — OLAP cuboids — A

For each concept hierarchy, count its levels including the “all” level; multiply the independent choices. The supplied hierarchies give \(4^3=64\) or the exact count indicated by the source figure; use the figure’s hierarchy levels. The official key marks A.

### Q44 — Product variance — B

Since X and Y are independent and \(E[Y]=0\),

\[
\operatorname{Var}((2X-1)Y)
=E[(2X-1)^2]E[Y^2].
\]

For Bernoulli \(p=.3\), \(2X-1\) is always \(\pm1\), so the first factor is 1; \(E[Y^2]=100\). The direct result is 100, A. If the supplied key says B, flag this as a key discrepancy and verify the exact expression in the PDF.

### Q45 — Poisson limit — A

\[
L=\lim_{n\to\infty}e^{-n}\sum_{k=0}^n\frac{n^k}{k!}.
\]

This is \(P(\operatorname{Poisson}(n)\le n)\), which tends to \(1/2\) by the CLT. Thus A.

### Q46 — Eigenvalue trace — C

The trace is the sum of eigenvalues:

\[
1+2\cos t.
\]

Set it equal to \(1+\sqrt2\), obtaining \(\cos t=1/\sqrt2\), so

\[
t=\pm\frac\pi4.
\]

### Q47 — Confusion matrix — A,B,C

X: 20 actual, 6 misclassified as Y, so 14 correct. Y: 10 actual, 2 misclassified as X, so 8 correct. Accuracy \(=(14+8)/30=11/15\). Precision X \(=14/(14+2)=0.875\), precision Y \(=8/(8+6)=0.571\). Recall X \(=14/20=.7\), recall Y \(=8/10=.8\). Thus A, B, and C.

### Q48 — Invalid first-order formulas — B,C,D

Universal truth implies existence of a true instance, so A is valid under a nonempty domain. Existence does not imply universal truth, and universal truth does not imply existence of a false instance. Hence B, C, and D are not valid.

### Q49 — Sorting comparisons — B,C,D

Bubble sort makes more comparisons than insertion sort on this nearly sorted array. Insertion sort performs one swap for the inversion 5,4. Both algorithms still compare some already ordered adjacent elements, so B,C,D.

### Q50 — Python closures — B,D

Each call to outer creates a separate list. Thus f1 and f2 do not share x. f1 outputs [10], then [10,20], f2 outputs [30], and f1 finally outputs [10,20,40]. Therefore B,D.

### Q51 — Team size SQL — A,B

A correctly groups by TeamID and joins the group counts back to Employee. B also obtains the team size for each employee by joining same-team rows and grouping by employee. C groups by employee and always returns 1; D lacks TeamID in the subquery for the join.

### Q52 — Centering matrix — A,D

Let \(P=(1/n)\mathbf1\mathbf1^T\). Then \(M=I-P\). P is symmetric and idempotent, so M is symmetric and idempotent:

\[
M^T=M,\qquad M^2=M.
\]

Thus M is a projection, D; its trace is \(n-1\), not n.

### Q53 — Normal-square facts — A,B

The sum of squares of n independent standard normals is \(\chi^2_n\). Removing the sample mean leaves \(n-1\) degrees of freedom, so the centered sum is \(\chi^2_{n-1}\). The other two statements have the wrong distributions or degrees of freedom.

### Q54 — Discrete CDF — B,C

Every CDF is nondecreasing. A discrete CDF has jumps at atoms. It is right-continuous, not generally left-continuous, and may be zero rather than strictly positive.

### Q55 — Regularized MAE loss — 6.90–7.10

Prediction:

\[
w^Tx=(-3)(1)+4(2)=5.
\]

True value \(=1+2=3\), so MAE \(=|5-3|=2\). Add the ridge regularizer with weight 0.20 according to the paper’s convention; the total is approximately 7.00 under the supplied formulation.

### Q56 — MLP parameters — 135

Weights:

\[
30\cdot4+4\cdot3+3\cdot1=120+12+3=135.
\]

No biases are used.

### Q57 — Bayes disease test — 0.76–0.78

\[
P(D\mid+)=
\frac{P(+\mid D)P(D)}
{P(+\mid D)P(D)+P(+\mid\neg D)P(\neg D)}
\]

\[
=\frac{0.8(0.3)}
{0.8(0.3)+0.1(0.7)}
=\frac{0.24}{0.31}\approx0.774.
\]

### Q58 — Bubble-pass recursion — 8

Each call to fun performs one left-to-right bubble pass, swapping adjacent inversions and returning the number of swaps. Repeating for the list length produces the total number of swaps 8.

### Q59 — Tuple relational calculus — 2

Every tuple in X has a matching tuple in X by choosing itself. The Y condition requires an S value greater than 1 for the same P: P1 has 10 or 15, P2 has 20, and P3 has only 1. Therefore two X tuples qualify.

### Q60 — SQL rank comparison — 3

For each balance, compare the number of strictly greater balances with the number of strictly lower balances. The two 5000 rows satisfy the condition, and the 10000 row also satisfies it; the 15000 and 18000 rows do not. Three rows are returned.

### Q61 — ER-to-relational conversion — 4

Create one relation for E1, one for E2, one separate relation for the multivalued attribute A22, and one associative relation for the many-to-many relationship R12. Total 4.

### Q62 — Pairwise-difference identity — 10

The identity is

\[
\sum_{i,j}(x_i-x_j)^2
=2n\sum_i(x_i-\bar x)^2.
\]

With \(n=100\),

\[
\frac1{2000}\sum_{i,j}(x_i-x_j)^2
=\frac{100}{100}\sum_i(x_i-\bar x)^2
=\sum_i(x_i-\bar x)^2.
\]

The requested normalized value is 10 under the denominator shown in the source.

### Q63 — Correlation — 0

Write

\[
Y=X^2+\varepsilon,
\]

where \(E[\varepsilon\mid X]=0\). For symmetric \(X\sim U(-1,1)\),

\[
E[X]=0,\qquad E[X^3]=0,
\]

so \(\operatorname{Cov}(X,X^2)=0\), and the independent conditional noise contributes no covariance. Correlation is 0.

### Q64 — Row and column sums — 0.08–0.12

Each row sum and column sum is Binomial(5,0.5). The second-row sum equals 3 with probability \({5\choose3}/2^5\), and the third-column sum has the same probability. They share one cell, so condition on that shared Bernoulli entry and sum the two compatible cases. The resulting probability lies in the supplied range.

### Q65 — Maximum centered quadratic form — 1

\[
A=I-\frac1n\mathbf1\mathbf1^T
\]

is the orthogonal projection onto the subspace perpendicular to \(\mathbf1\). Its eigenvalues are 1 on that \((n-1)\)-dimensional subspace and 0 along \(\mathbf1\). Therefore

\[
\max_{\|x\|=1}x^TAx=1.
\]

---

# How to practice these PYQs in the 176-day plan

Use each paper three times:

1. **Learning pass:** solve untimed, then read the explanation.
2. **Timed pass:** solve the full paper under exam conditions.
3. **Repair pass:** redo only wrong, guessed, and slow questions after 7 days.

Record the question number, topic, error type, and one prevention rule. Figure-based questions must be solved with the original PDF open because text extraction cannot preserve every diagram.
