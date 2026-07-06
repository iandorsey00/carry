# Carry

Version: `0.1.0-beta.29`

Carry is a local-first math, physics, scratchpad, and puzzle learning studio designed to run fully in the browser.

Carry opens directly into a focused learning workspace. It currently includes implemented Arithmetic, Pre-Algebra, Algebra, Geometry, Trigonometry, Precalculus, Calculus, Differential Equations, Linear Algebra, Complex Analysis, Proofs, Set Theory, Number Theory, Graph Theory, Probability, Statistics, Real Analysis, Topology, Abstract Algebra, and Physics lessons. Math coverage includes guided long addition, subtraction, multiplication, division, division with remainders, equation transformations, inequality transformations, systems, factoring, quadratics, angles, triangles, circles, area and volume, coordinate geometry, proof basics, unit circle values, right-triangle ratios, trig graphs, identities, inverse trig, functions, transformations, polynomial and rational functions, exponential and log functions, sequences, complex numbers, limits, derivatives, integrals, calculus applications, series, slope fields, separable equations, first-order and second-order differential equation models, vectors, matrices, linear transformations, determinants, eigenvalues, vector spaces, complex functions, analytic functions, contour integrals, power series, residues, logic, quantifiers, induction, contradiction, construction, counterexamples, set notation, subsets, set operations, relations, functions as maps, countability, divisibility, primes, GCD and LCM, the Euclidean algorithm, modular arithmetic, congruences, graph vertices, edges, paths, cycles, degree, trees, connectedness, sample spaces, basic probability, counting, conditional probability, random variables, data summaries, center and spread, data displays, variance, standard deviation, normal distributions, binomial distributions, correlation, regression, confidence intervals, sampling and inference, real sequences, epsilon-delta limits, continuity, differentiability, Riemann integration, open and closed sets, metric spaces, bases, compactness, topological connectedness, homeomorphisms, groups, rings, fields, homomorphisms, and abstract examples. Lesson overviews use adaptive sections, meaningful figures, worked examples, studio moves, workspace notes, and concise “Where it shows up” context from modular Learning / Overview content files. More than fifty overview figures are interactive: draggable points and sliders with keyboard support drive live readouts for ideas such as tangent slopes, Riemann rectangles, slope fields, the unit circle, modular clocks, epsilon bands, subgroup cycles, induction dominoes, and the normal curve. Graph Theory lessons include SVG figures for vertices, edges, paths, cycles, degree, trees, and connected components. Physics coverage includes units, vectors, graphs, kinematics, forces, energy, momentum, oscillations, waves, sound, electric charge and fields, circuits, magnetism, thermodynamics, ideal gases, quantum ideas, and relativity. Carry also includes a local-first Scratchpad for typing plain math or LaTeX-ish notation, previewing readable notation, aligning equations and inequalities, copying clean plain text, LaTeX-ish notation, or Markdown, importing/exporting LaTeX, and exporting or sharing the rendered preview as an SVG image. Tools include random values, normal-simulation, exact unit-circle and complex-coordinate helpers, draggable exact-angle unit circle input, 2D graphing with pan and zoom, and draggable 3D graphing. Concept lesson answer cards use focused two-choice prompts with pointer input and number-key selection; guided mode treats choice selection as confirmation, while practice mode keeps an explicit Check step. Completed problem sets now offer Restart after the final question. The Games section currently includes generated Sudoku with adjustable board size, difficulty, keyboard input, and local browser persistence, plus Mod Clock, Prime Factors, GCD, Divisibility, Residues, and Graph Paths games for visual number-theory and graph-theory practice. The Explorations section publishes dated puzzle articles with a think-first prompt, an optional figure, and a hidden response that can include an interactive follow-up. Progress, scratchpads, games, and tools are stored privately in the browser with `localStorage`. Export produces a single JSON backup covering all four stores, and import restores it (legacy progress-only files still work).

Lessons use readable paths such as `/math/arithmetic/long-addition`, `/math/differential-equations/separable-equations`, `/math/probability/basic-probability`, `/physics/thermodynamics/ideal-gas-law`, `/games/sudoku`, `/games/mod-clock`, `/games/residue-match`, and `/explorations/2026-06-21-signal-boxes`. Static hosts should rewrite unknown app paths to `index.html`.

## Run

Open `index.html` in a browser, or serve the directory with any static file server.

## Architecture

- `index.html` provides the static app shell.
- `styles.css` defines the shared interface system, light and dark themes, grid layout, focus states, and responsive behavior.
- `app.js` contains the client-side workspace registry, progress and game persistence, lesson renderers, validation, hints, problem guardrails, and import/export flow.
- `practice/` documents the recommended modular home for reusable question data and special practice engines as they migrate out of `app.js`.
- `explorations/` holds the exploration registry and one dated entry file per exploration article.
- `assets/carry-icon.png`, `assets/carry-icon-256.png`, and `favicon.ico` provide the app icon and browser favicons.

## Versioning

Carry uses pre-1.0 semantic versions while the curriculum and interaction model are still settling. Bump the app version when releasing user-visible curriculum, validation, persistence, import/export, navigation, or interface behavior changes. Do not bump it for private notes, comments, or purely local development experiments that are not deployed.

Use `sh scripts/release.sh <new-version>` to bump every version string (`APP_VERSION`, the footer, this README, and all `?v=` cache-busting parameters) in one verified step.

## Current Guardrails

- Progress stays local to the current browser unless exported as JSON.
- Scratchpads and games stay local to the current browser.
- No login, accounts, email, passwords, or server-side learner profiles are used.
- Long subtraction defaults to non-negative answers.
- Exact long division accepts three-digit dividends and one- or two-digit divisors with no final remainder.
- Long division with remainders is a separate lesson. If a learner enters a valid remainder problem in exact long division, Carry moves it to the remainders lesson automatically.
- Algebra, Geometry, Trigonometry, Precalculus, Calculus, Differential Equations, Linear Algebra, Complex Analysis, Proofs, Set Theory, Number Theory, Probability, Real Analysis, Topology, and Abstract Algebra helpers focus on simple transformations, systems, factoring, introductory quadratics, shape facts, measurement, coordinate reasoning, proof basics, exact trig relationships, function behavior, graph transformations, early advanced algebra, limits, rates of change, accumulation, series, slope fields, separable equations, introductory differential-equation models, vectors, matrices, determinants, eigenvectors, complex functions, analytic functions, contour integrals, residues, core proof patterns, set language, relations, countability, divisibility, congruence, probability language, counting, conditional probability, random variables, real-number rigor, convergence, continuity, differentiability, integration, topological open sets, metric spaces, bases, compactness, connectedness, homeomorphisms, groups, rings, fields, homomorphisms, and algebraic examples before broader advanced features are added.

Future topics can register their own workspace, notation renderer, validation logic, hint system, and progress hooks without adding account infrastructure.

## Beta QA

Carry is in beta: the automated lesson QA gate reports zero blockers for answer-choice quality, missing hints, and effective feedback coverage. The Status & Data panel shows a compact Beta QA row that guards against regressions in those areas, while keeping longer-term curriculum depth as a tooltip target. Run `carryLessonQA()` in the browser console to inspect concept lesson coverage, generated choice usage, effective feedback, curriculum-depth targets, and long-operation problem counts.

## Deploy

Carry is a static site. Any static host can serve the repository contents.

For a small Caddy-backed droplet:

1. Pull or copy the repository to the server, for example `/var/www/carry`.
2. Point the Caddy site root at that directory.
3. Reload Caddy.

Example Caddyfile:

```caddyfile
carry.iandorsey.com {
  root * /var/www/carry
  try_files {path} {path}/ /index.html
  file_server
  encode zstd gzip
}
```

After changing files:

```sh
cd /var/www/carry
git pull --ff-only
sudo caddy reload --config /etc/caddy/Caddyfile
```
