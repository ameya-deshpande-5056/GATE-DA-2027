# GATE DA Exam-Weighted Preparation Strategy

This strategy uses the supplied 11-subject matrix as the planning baseline. The matrix is treated as an empirical preparation input, not as a replacement for the official syllabus or final-year paper pattern.

## 1. What the matrix says

The highest-return subjects are:

1. Probability and Statistics — 17.7 marks.
2. Data Structures and Algorithms — 15.3 marks.
3. Machine Learning — 13.7 marks.
4. Database Management — 12.7 marks.
5. Linear Algebra — 10.0 marks.
6. Artificial Intelligence — 8.0 marks.
7. Calculus — 7.7 marks.
8. Quantitative GA — 6.0 marks.
9. Verbal GA — 3.3 marks.
10. Spatial GA — 3.3 marks.
11. Analytical GA — 2.0 marks.

The first four subjects alone account for 59.4 marks. They deserve most of the problem-solving time, but the remaining subjects still matter because their questions are often controllable with focused preparation.

~~~mermaid
flowchart TD
    A[176-day preparation] --> B[Core scoring block: 59.4 marks]
    B --> B1[P&S 17.7]
    B --> B2[DSA 15.3]
    B --> B3[ML 13.7]
    B --> B4[DB 12.7]
    A --> C[Strong secondary block: 25.7 marks]
    C --> C1[LA 10.0]
    C --> C2[AI 8.0]
    C --> C3[Calculus 7.7]
    A --> D[GA block: 14.6 marks]
    D --> D1[Quant 6.0]
    D --> D2[Verbal 3.3]
    D --> D3[Spatial 3.3]
    D --> D4[Analytical 2.0]
~~~

## 2. Recommended study-time budget

For every 100 hours of serious study, use this baseline:

| Subject | Marks | Baseline hours | Practice character |
|---|---:|---:|---|
| P&S | 17.7 | 18 | derivations, distributions, inference, NATs |
| DSA | 15.3 | 15 | tracing, implementation, complexity, MSQs |
| ML | 13.7 | 14 | assumptions, formulas, model comparison, NATs |
| DB | 12.7 | 13 | SQL, algebra, normalization, indexing |
| LA | 10.0 | 10 | matrix calculation, properties, MSQs |
| AI | 8.0 | 8 | search traces, logic, inference |
| Calculus | 7.7 | 8 | derivatives, extrema, limits |
| Quant GA | 6.0 | 6 | timed arithmetic and data interpretation |
| Verbal GA | 3.3 | 3 | grammar, vocabulary, comprehension |
| Spatial GA | 3.3 | 3 | timed diagrams and invariants |
| Analytical GA | 2.0 | 2 | logic, analogy, numerical reasoning |

The remaining 0–2 hours per 100 belong to mixed tests, error-log review, and formula recall. This is a baseline, not a rigid rule: a weak subject receives extra repair time even if its average marks are lower.

### Why marks alone are not enough

ML and LA have a high moderate-question share. They need regular spaced practice because formulas are easy to forget. DB has many moderate questions and no hard questions in the matrix, so it is a high-confidence scoring opportunity. P&S and DSA have the largest marks and should be solved repeatedly under time pressure. GA is smaller but often has a strong return per hour.

## 3. Question-type strategy

### MCQ

Use elimination and reject options with wrong units, impossible signs, invalid assumptions, or incorrect boundary cases. Do not spend several minutes proving an answer when two options can be eliminated immediately.

### MSQ

Treat every option as a separate true/false statement. Never stop after finding one correct option. Test edge cases such as zero vectors, singular matrices, empty sets, duplicate values, and equality cases.

### NAT

Write the equation before using arithmetic. Keep exact fractions and radicals until the final step. Check the requested rounding and range. NAT-heavy subjects in the matrix are P&S, DB, and ML, so practise numeric derivations there.

## 4. Difficulty-aware preparation

| Subject group | Matrix signal | Preparation rule |
|---|---|---|
| P&S, DSA | high marks, mostly easy/moderate | master standard patterns first; then speed |
| ML | high marks, mostly moderate/hard | understand assumptions and failure modes; do not memorize model names alone |
| DB | high marks, easy/moderate | aim for near-perfect accuracy in SQL, algebra, keys, and normalization |
| LA | moderate-high marks, mostly moderate | do frequent short calculations and property checks |
| AI | moderate marks, mostly moderate | trace search and logic by hand; learn exact conditions |
| Calculus | moderate marks, easy/moderate | secure standard derivatives, limits, Taylor, and extrema |
| Quant GA | high GA share, no MSQ/NAT | build fast, low-error arithmetic |
| Verbal, Spatial, Analytical | lower marks | maintain weekly contact; avoid over-investing before core topics are stable |

## 5. Subject-level mastery gates

Do not move a subject to “revised” until it passes its gate.

### P&S

- identify every listed distribution from wording;
- compute conditional, marginal, joint, expectation, variance, covariance;
- select z, t, or chi-squared tests;
- solve at least 80 mixed questions with an error rate below 15%.

### DSA

- trace Python, recursion, sorting, searching, BFS, DFS, and Dijkstra;
- state worst-case complexity without guessing;
- solve at least 60 mixed questions and five handwritten algorithm traces.

### ML

- write the objective and assumption for every listed model;
- distinguish bias, variance, leakage, validation, and test evaluation;
- solve at least 60 mixed questions, including numerical regression, PCA, and probability questions.

### DB

- write joins, grouping, HAVING, NULL, subqueries, and relational algebra;
- compute closures, keys, normal forms, indexes, and relational division;
- solve at least 60 SQL/algebra/design questions.

### LA

- solve systems, rank/nullity, projections, eigenvalues, LU, and SVD;
- test matrix statements with counterexamples;
- solve at least 45 mixed questions.

### AI and Calculus

- complete 30 AI questions and 30 calculus questions;
- draw search frontiers and truth tables;
- solve limits and extrema without relying on a memorized answer pattern.

### GA

- complete two timed sets per week;
- maintain separate error lists for arithmetic, language, and spatial visualization;
- target speed and accuracy rather than advanced theory.

## 6. Priority-aware weekly allocation

During a normal week with 30 focused study hours:

- 5.5 h P&S;
- 4.5 h DSA;
- 4 h ML;
- 3.8 h DB;
- 3 h LA;
- 2.4 h AI;
- 2.3 h Calculus;
- 2.5 h Quant GA;
- 1.5 h Verbal GA;
- 1.5 h Spatial GA;
- 0.5 h Analytical GA;
- 0.5 h mixed error-log review.

During the final six weeks, replace first-pass learning with:

- 40% mixed papers and timed topic sets;
- 30% P&S/DSA/ML/DB repair;
- 15% LA/AI/Calculus repair;
- 10% GA;
- 5% formulas and error log.

## 7. Attempt-order principle for mocks

Use a three-pass method:

1. **Pass 1:** direct easy questions and familiar NATs.
2. **Pass 2:** moderate questions requiring a short derivation.
3. **Pass 3:** hard, uncertain, or lengthy questions.

The subject order should be tested personally, but a good default is:

\[
\text{GA}
\rightarrow
\text{P\&S}
\rightarrow
\text{DB/DSA}
\rightarrow
\text{ML/LA}
\rightarrow
\text{AI/Calculus}
\rightarrow
\text{review}.
\]

Do not use the average-mark table as a reason to attempt every question in a high-weight subject first. It is a time-allocation tool, not a compulsory order.

## 8. Weekly scorecard

Track these separately:

| Metric | Target |
|---|---|
| Concept accuracy | at least 90% on direct questions |
| Mixed-set accuracy | rising every two weeks |
| NAT calculation error | below 10% |
| MSQ over-selection | zero avoidable guesses |
| Average time per question | falling without accuracy loss |
| Repeated mistakes | none after the second repair |
| Mock analysis completion | within 24 hours |

A subject is improving only when its error rate falls in mixed questions, not merely when its chapter notes look complete.

