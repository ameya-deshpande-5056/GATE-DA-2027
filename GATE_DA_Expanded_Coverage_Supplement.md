# GATE DA Expanded Coverage Supplement

This supplement expands the compressed parts of the main guide. Use it after the first reading of [GATE_DA_Complete_Study_Material.md](GATE_DA_Complete_Study_Material.md). It is deliberately limited to the supplied syllabus and high-value foundations that make those syllabus items easier to solve.

---

# 1. General Aptitude: deeper problem patterns

## Verbal accuracy

When choosing between similar sentences, check in this order:

1. subject–verb agreement;
2. tense and time marker;
3. article and countability;
4. preposition;
5. parallel structure;
6. meaning and tone.

Parallel structure means equivalent items should have the same grammatical form:

- Correct: “The model is fast, accurate, and reliable.”
- Incorrect: “The model is fast, accurate, and has reliability.”

For a reading-comprehension question, separate:

- **fact:** directly stated;
- **inference:** necessarily supported;
- **opinion:** evaluation or recommendation;
- **purpose:** why the author wrote the passage.

An answer that is merely possible is not enough for an inference question; it must be the best-supported conclusion.

## Quantitative patterns

### Percentage points versus percentage change

If an accuracy goes from 60% to 70%, it rises by 10 percentage points but by

\[
\frac{70-60}{60}\times100\%=16.67\%.
\]

Never confuse the two.

### Ratios after addition

If \(a:b=2:3\), adding the same number to both does not preserve the ratio. Write \(a=2k,b=3k\) first, apply the condition, then solve for \(k\).

### Counting with restrictions

For “at least one,” use the complement:

\[
\#(\text{at least one})=
\#(\text{all})-\#(\text{none}).
\]

For arrangements where two objects must stay together, treat the pair as one block, then multiply by the internal arrangements.

### Elementary probability pattern

If a fair die is rolled twice, the ordered sample space has \(36\) outcomes. The event “sum is 7” has six outcomes, so

\[
P(\text{sum }7)=\frac6{36}=\frac16.
\]

The phrase “rolled twice” does not mean the possible sums are equally likely; sums have different numbers of combinations.

### Spatial reasoning

For a 3D object, preserve a marked face and record its neighboring faces before rotating. A mirror changes handedness; a rotation does not. For paper folding, reverse the last fold first and reflect every cut across each fold line in reverse order.

---

# 2. Probability and statistics: worked foundations

## Counting model selection

Use this decision tree:

~~~mermaid
flowchart TD
    A[Count outcomes] --> B{Are choices separate stages?}
    B -->|Yes| C[Multiply]
    B -->|No, alternatives| D[Add if disjoint]
    C --> E{Does order matter?}
    E -->|Yes| F[Permutation]
    E -->|No| G[Combination]
    F --> H{Repeated objects?}
    G --> H
    H -->|Yes| I[Divide by repetition factorials]
    H -->|No| J[Finish]
~~~

A common mistake is using a combination where a sequence is being formed. Ask whether exchanging two selected objects creates a different outcome.

## Conditional probability table example

Suppose a joint distribution is

| \(X\backslash Y\) | 0 | 1 | Marginal \(X\) |
|---|---:|---:|---:|
| 0 | 0.2 | 0.3 | 0.5 |
| 1 | 0.1 | 0.4 | 0.5 |
| Marginal \(Y\) | 0.3 | 0.7 | 1 |

Then

\[
P(X=1\mid Y=1)=\frac{0.4}{0.7}.
\]

The marginal of \(X=1\) is \(0.1+0.4=0.5\). The table represents independent variables only if every cell equals the product of its row and column marginals. Here \(0.4\ne0.5(0.7)\), so they are not independent.

## Conditional density

For continuous variables,

\[
f_{X\mid Y}(x\mid y)=
\frac{f_{X,Y}(x,y)}{f_Y(y)}.
\]

To find a conditional probability, integrate the conditional density:

\[
P(a\le X\le b\mid Y=y)
=\int_a^b f_{X\mid Y}(x\mid y)\,dx.
\]

The density itself is not a probability and can exceed 1; the area over an interval is the probability.

## Distribution recognition and approximations

### Binomial

Use binomial when there are:

1. a fixed number \(n\) of trials;
2. two outcomes per trial;
3. constant success probability \(p\);
4. independent trials.

\[
P(X=k)={n\choose k}p^k(1-p)^{n-k}.
\]

For large \(n\) and small \(p\), with \(\lambda=np\), binomial may be approximated by Poisson.

### Poisson

Poisson counts events in a fixed interval when events occur independently at a roughly constant rate \(\lambda\):

\[
P(X=k)=e^{-\lambda}\frac{\lambda^k}{k!}.
\]

For disjoint intervals, independent Poisson counts add:

\[
X\sim\operatorname{Poisson}(\lambda_1),\quad
Y\sim\operatorname{Poisson}(\lambda_2)
\Rightarrow
X+Y\sim\operatorname{Poisson}(\lambda_1+\lambda_2).
\]

### Normal

The empirical rule is approximately:

- 68% within \(\mu\pm\sigma\);
- 95% within \(\mu\pm2\sigma\);
- 99.7% within \(\mu\pm3\sigma\).

For a normal variable, standardize before using a standard-normal table.

### Exponential

The exponential is a waiting-time model. Its rate is \(\lambda\), while its mean waiting time is \(1/\lambda\). Do not confuse rate and mean.

## Covariance and correlation

Covariance changes units:

\[
\operatorname{Cov}(aX,bY)=ab\operatorname{Cov}(X,Y).
\]

Correlation removes scale:

\[
\rho_{aX+b,cY+d}
=\operatorname{sign}(ac)\rho_{X,Y}
\]

for nonzero \(a,c\). Adding constants does not change correlation; multiplying by a negative number reverses its sign.

## Choosing a statistical test

| Question | Typical tool |
|---|---|
| Mean, known population standard deviation | z-test |
| Mean, unknown standard deviation | t-test |
| Counted categories versus expected counts | chi-squared goodness-of-fit |
| Association between two categorical variables | chi-squared independence |
| Estimate a mean | confidence interval |
| Distribution of sample mean for large \(n\) | CLT |

The test statistic measures distance from the null in standard-error units. A two-sided test puts evidence in both tails; a one-sided test puts it in one direction chosen before seeing the data.

Type I error means rejecting a true null. Type II error means failing to reject a false null. Increasing sample size generally increases power, all else equal.

---

# 3. Linear algebra: properties that repeatedly appear

## Matrix property table

| Property | Definition | Immediate consequence |
|---|---|---|
| Symmetric | \(A^T=A\) | real eigenvalues; orthogonal eigenvectors for distinct eigenvalues |
| Orthogonal | \(Q^TQ=I\) | \(Q^{-1}=Q^T\), preserves norm |
| Idempotent | \(P^2=P\) | eigenvalues are only 0 or 1 |
| Projection | \(P^2=P\), often \(P^T=P\) for an orthogonal projection | \(Px\) lies in target subspace |
| Nilpotent | \(A^k=0\) for some \(k\) | all eigenvalues are 0 |
| Diagonal | off-diagonal entries are 0 | multiplication is component-wise |

For an orthogonal projection, the residual is perpendicular to the projected subspace:

\[
x-Px\perp\operatorname{Col}(A).
\]

The normal equations for least squares are

\[
A^T(A\hat x-b)=0.
\]

## Partitioned matrices

If

\[
M=
\begin{bmatrix}
A&B\\
C&D
\end{bmatrix},
\]

then block multiplication follows the same row-by-column rule:

\[
MN=
\begin{bmatrix}
AE+BG&AF+BH\\
CE+DG&CF+DH
\end{bmatrix}.
\]

Blocks must have compatible inner dimensions. Partitioning is useful for block Gaussian elimination, covariance matrices, and database-like structured data.

## Rank and solution geometry

For \(A x=b\):

- no solution if \(b\notin\operatorname{Col}(A)\);
- one solution if the null space contains only zero;
- infinitely many solutions if a solution exists and the null space has a nonzero vector.

For a homogeneous system \(Ax=0\), there is always at least the zero solution. Nonzero solutions exist exactly when \(\operatorname{nullity}(A)>0\).

## SVD facts

If

\[
A=U\Sigma V^T,
\]

then:

- columns of \(V\) are right singular vectors;
- columns of \(U\) are left singular vectors;
- diagonal entries of \(\Sigma\) are singular values;
- \(A^TA=V\Sigma^T\Sigma V^T\);
- \(AA^T=U\Sigma\Sigma^TU^T\);
- the spectral norm is the largest singular value;
- the rank is the number of nonzero singular values.

The best rank-\(r\) approximation keeps the largest \(r\) singular values. This is why SVD is useful for compression and noise reduction.

---

# 4. Calculus and optimization: extra exam patterns

## Limit patterns

For rational functions, compare the highest powers for \(x\to\infty\). For \(x\to a\), factor and cancel only factors that are nonzero in the surrounding punctured neighborhood.

Important limits:

\[
\lim_{x\to0}\frac{\sin x}{x}=1,
\qquad
\lim_{x\to0}\frac{e^x-1}{x}=1,
\qquad
\lim_{x\to0}\frac{\ln(1+x)}x=1.
\]

L'Hopital's rule may be used for \(0/0\) or \(\infty/\infty\) forms when its conditions hold:

\[
\lim\frac{f(x)}{g(x)}
=\lim\frac{f'(x)}{g'(x)}.
\]

Do not apply it automatically to every fraction.

## Global versus local extrema

A local maximum beats nearby values. A global maximum beats every value in the domain. On a closed bounded interval, a continuous function attains global maximum and minimum values. Always compare all critical points and endpoints.

## Taylor error intuition

If the first omitted term has magnitude approximately \(0.002\), the approximation error is often of that order near the expansion point, but a rigorous bound requires a remainder estimate. The farther \(x\) moves from the expansion point, the more terms may be needed.

---

# 5. Programming and algorithms: deeper coverage

## Linked-list operations

For a singly linked list:

- access by position: \(O(n)\);
- insert at head: \(O(1)\);
- delete at head: \(O(1)\);
- insert after a known node: \(O(1)\);
- search by value: \(O(n)\).

A doubly linked list stores both next and previous references, making deletion easier when a node is known but using more memory.

## Tree traversals

For a binary tree:

- preorder: root, left, right;
- inorder: left, root, right;
- postorder: left, right, root;
- level order: breadth-first.

Inorder traversal sorts keys only for a valid binary search tree. A general binary tree has no such guarantee.

## Recurrences

For a recurrence, expand a few levels before guessing:

\[
T(n)=T(n-1)+O(1)\Rightarrow O(n),
\]

\[
T(n)=2T(n/2)+O(n)\Rightarrow O(n\log n),
\]

\[
T(n)=T(n/2)+O(1)\Rightarrow O(\log n).
\]

Nested loops are not automatically \(O(n^2)\); inspect how the inner variable changes. A loop that doubles a variable each time is logarithmic.

## Graph edge cases

- A self-loop contributes to cycle questions and may affect degree conventions.
- A disconnected graph requires BFS or DFS from every unvisited vertex to visit all components.
- In an undirected graph, each edge appears twice in adjacency lists.
- Dijkstra fails with negative edge weights because a previously finalized distance may later improve.
- In an unweighted graph, BFS gives shortest edge count, not necessarily lowest weighted cost.

---

# 6. Databases: worked design patterns

## Relational algebra and SQL correspondence

| Relational algebra | Meaning | SQL idea |
|---|---|---|
| \(\sigma\) | filter rows | WHERE |
| \(\pi\) | choose columns | SELECT |
| \(\times\) | all row pairs | CROSS JOIN |
| \(\bowtie\) | combine related rows | JOIN |
| \(\cup\) | combine compatible results | UNION |
| \(-\) | difference | EXCEPT or NOT EXISTS |
| \(\rho\) | rename | AS |

Relational algebra removes duplicate tuples under the classical set model; SQL often preserves duplicates unless DISTINCT is requested.

## Tuple relational calculus

Tuple calculus states a condition on a tuple:

\[
\{t\mid Student(t)\land t.department='DA'\}.
\]

It can express existence:

\[
\{s\mid Student(s)\land
\exists e(Enrollment(e)\land e.student\_id=s.student\_id)\}.
\]

The important distinction is declarative versus procedural description. Safety means the result is finite and tied to the database domain.

## Normalization worked example

Suppose

\[
Enrollment(student\_id, course\_id, student\_name, course\_name, instructor)
\]

has composite key \((student\_id,course\_id)\), with

\[
student\_id\to student\_name
\]

and

\[
course\_id\to course\_name,instructor.
\]

The non-key attributes depend on only part of the composite key, so the relation violates 2NF. Decompose into:

\[
Student(student\_id,student\_name),
\]

\[
Course(course\_id,course\_name,instructor),
\]

\[
Enrollment(student\_id,course\_id).
\]

This removes repeated student and course information and prevents inconsistent updates.

## Index selection

- equality lookup by a stable key: hash index can be excellent;
- range query such as age between 20 and 30: B+ tree is suitable;
- prefix search and ordered retrieval: tree index is usually useful;
- very small table: a full scan may be cheaper than using an index.

An index is not automatically beneficial. Consider selectivity, update frequency, storage, and whether the query can use the indexed column.

## Warehouse grain

Before designing a fact table, state its grain: one row per what? Examples:

- one row per product per store per day;
- one row per order line;
- one row per student per course per term.

If the grain is unclear, measures may be double-counted. A fact table should keep a consistent grain.

---

# 7. Machine learning: evaluation and failure modes

## Confusion matrix

For binary classification:

| | Actual positive | Actual negative |
|---|---:|---:|
| Predicted positive | TP | FP |
| Predicted negative | FN | TN |

\[
Accuracy=\frac{TP+TN}{TP+TN+FP+FN},
\]

\[
Precision=\frac{TP}{TP+FP},
\qquad
Recall=\frac{TP}{TP+FN},
\]

\[
Specificity=\frac{TN}{TN+FP},
\qquad
F1=\frac{2\,Precision\,Recall}{Precision+Recall}.
\]

Accuracy can be misleading with class imbalance. Precision matters when false positives are costly; recall matters when false negatives are costly.

## Regression evaluation

\[
MSE=\frac1n\sum_i(y_i-\hat y_i)^2,
\]

\[
RMSE=\sqrt{MSE},
\qquad
MAE=\frac1n\sum_i|y_i-\hat y_i|.
\]

MSE penalizes large errors more strongly than MAE. \(R^2\) measures improvement over predicting the training mean, but it is not a universal measure of usefulness.

## Regularization comparison

- \(L_2\) penalty: shrinks coefficients smoothly; ridge.
- \(L_1\) penalty: can set coefficients exactly to zero; useful for sparse selection, though not explicitly listed in the supplied syllabus.
- Larger penalty: simpler model, usually more bias and less variance.
- Penalty must be selected using validation data, not the final test set.

## Model recognition table

| Model | Main assumption or behavior | Main weakness |
|---|---|---|
| Linear regression | linear conditional mean | nonlinear patterns and outliers |
| Ridge | linear model with coefficient shrinkage | does not usually create exact zeros |
| Logistic regression | linear log-odds | linear decision boundary |
| kNN | nearby points have similar labels | scaling and high-dimensional distance |
| Naive Bayes | conditional feature independence | dependence can distort probabilities |
| LDA | Gaussian classes, shared covariance | poor fit when class shapes differ |
| SVM | margin-based boundary | tuning and scaling matter |
| Decision tree | recursive threshold rules | overfitting and instability |
| MLP | layered nonlinear function | optimization, data, and tuning demands |
| k-means | compact mean-centered clusters | non-spherical clusters and outliers |
| Hierarchical | linkage-defined nested clusters | linkage sensitivity and cost |
| PCA | high-variance orthogonal directions | variance need not equal predictive value |

## Cross-validation leakage example

Incorrect:

1. standardize the entire dataset;
2. perform k-fold cross-validation.

Correct:

1. split into folds;
2. fit the mean and standard deviation on each training fold;
3. transform that fold’s training and validation data using training-fold values;
4. fit and evaluate;
5. average scores.

The same rule applies to imputation, feature selection, PCA, and discretization.

## PCA geometry

For centered observations \(x_i\), the projection onto unit direction \(w\) is \(x_i^Tw\). PCA chooses \(w\) to maximize

\[
\sum_i(x_i^Tw)^2
\]

subject to \(w^Tw=1\). The constraint prevents an unlimited answer by scaling \(w\).

---

# 8. AI: search, logic, and inference worked patterns

## Search comparison

| Method | Frontier choice | Complete? | Optimal under standard condition |
|---|---|---|---|
| BFS | shallowest depth | yes, finite branching | yes for equal step cost |
| DFS | deepest | not always | no |
| Uniform-cost | smallest \(g(n)\) | yes under positive costs | yes |
| Greedy best-first | smallest \(h(n)\) | not generally | no |
| A* | smallest \(g(n)+h(n)\) | yes under standard conditions | yes with admissible/consistent heuristic |

A heuristic with \(h(n)=0\) makes A* behave like uniform-cost search. A heuristic that overestimates can cause A* to return a non-optimal path.

## Logic equivalences

Useful identities:

\[
P\to Q\equiv\neg P\lor Q,
\]

\[
\neg(P\land Q)\equiv\neg P\lor\neg Q,
\]

\[
\neg(P\lor Q)\equiv\neg P\land\neg Q.
\]

Contradiction is a statement that is always false; tautology is always true. To test an argument, look for an assignment where all premises are true and the conclusion is false. Such an assignment disproves validity.

## Variable elimination mini-example

Suppose

\[
P(A,B,C)=P(A)P(B\mid A)P(C\mid B)
\]

and we want \(P(C)\). Eliminate \(A\):

\[
g(B)=\sum_A P(A)P(B\mid A).
\]

Then eliminate \(B\):

\[
P(C)=\sum_B g(B)P(C\mid B).
\]

The order of eliminating hidden variables affects computation cost but not the exact result.

## Sampling error

For an event with true probability \(p\), the Monte Carlo estimate from \(N\) independent samples has approximate standard error

\[
\sqrt{\frac{p(1-p)}{N}}.
\]

Rare events can be poorly estimated by naive sampling because most samples miss them. Importance sampling or another focused method can help.

---

# 9. Final high-coverage checklist

Before declaring the syllabus complete, be able to do all of the following without notes:

## GA

- correct subject–verb agreement and tense;
- interpret a table, bar graph, pie chart, map, and 2D/3D plot;
- solve percentage, ratio, logarithm, counting, series, geometry, and elementary probability questions;
- distinguish deduction from induction;
- mentally rotate, mirror, fold, unfold, and group shapes.

## Probability and statistics

- move between joint, marginal, conditional, PMF, PDF, and CDF;
- apply Bayes theorem with a base rate;
- compute expectation, variance, covariance, and correlation;
- identify Bernoulli, binomial, Poisson, uniform, exponential, normal, t, and chi-squared models;
- choose and interpret a confidence interval, z-test, t-test, or chi-squared test.

## Linear algebra and calculus

- classify matrices and use their properties;
- solve systems and state rank, nullity, and solution type;
- compute projections, eigenvalues, determinants, LU, and interpret SVD;
- test continuity and differentiability;
- use Taylor approximation and find global extrema on a closed interval.

## Programming, algorithms, and databases

- trace Python and identify complexity;
- implement and compare stacks, queues, lists, trees, and hashes;
- choose linear search, binary search, sorting method, BFS, DFS, or Dijkstra from conditions;
- translate between ER diagrams, algebra, tuple calculus, and SQL;
- identify keys, constraints, normal forms, indexes, warehouse grain, hierarchies, and measures.

## ML and AI

- derive or recognize OLS, ridge, logistic, naive Bayes, LDA, SVM, and tree decisions;
- explain bias, variance, overfitting, cross-validation, and leakage;
- compute classification and regression metrics;
- run k-means, hierarchical clustering, and PCA on a small example;
- compare BFS, DFS, uniform-cost, greedy, A*, minimax, and alpha-beta;
- manipulate propositional and predicate logic;
- perform variable elimination and understand sampling error.

This checklist is the boundary between “I have read the chapter” and “I can use the chapter in an exam.”

