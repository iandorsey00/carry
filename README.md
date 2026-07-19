# Carry

Version: `0.1.0-beta.49`

Carry is a local-first math, physics, scratchpad, and puzzle learning studio designed to run fully in the browser. Short-form subjects live in a browsable Topic library; deeper, sequenced study lives under Courses.

Differential Equations is Carry's first university-level course. Its thirteen-lesson sequence covers foundations, first-order equations, numerical methods, second-order equations, systems, Laplace transforms, and series solutions. Course labs include a draggable initial condition on a slope field, a step-size-controlled Euler approximation, and an autonomous phase line. Separable Equations, Linear First-Order Equations, Homogeneous Linear Equations, and Forcing, Damping, and Resonance use staged solving workspaces with guided focus, authored equivalent forms, contextual hints, canonical MathML results, initial-value problems, resonance-aware trial selection, and less constrained Practice modes. Difficult authored steps can offer an optional **Break this step down** path: the learner completes smaller expressions, such as a u-substitution, before Carry returns the result to the main derivation. These contextual training wheels can be ignored when the learner is ready to work independently.

Carry opens directly into a focused learning workspace. It currently includes implemented Arithmetic, Pre-Algebra, Algebra, Geometry, Trigonometry, Precalculus, Calculus, Differential Equations, Linear Algebra, Complex Analysis, Proofs, Set Theory, Number Theory, Graph Theory, Probability, Statistics, Real Analysis, Topology, Abstract Algebra, and Physics lessons. Math coverage includes guided long addition, subtraction, multiplication, division, division with remainders, equation transformations, inequality transformations, systems, factoring, quadratics, angles, triangles, circles, area and volume, coordinate geometry, proof basics, unit circle values, right-triangle ratios, trig graphs, identities, inverse trig, functions, transformations, polynomial and rational functions, exponential and log functions, sequences, complex numbers, limits, derivatives, integrals, calculus applications, series, slope fields, separable equations, first-order and second-order differential equation models, vectors, matrices, guided matrix addition, subtraction, and multiplication, linear transformations, determinants, guided eigenvalue and eigenvector derivations, vector spaces, complex functions, analytic functions, contour integrals, power series, residues, logic, quantifiers, induction, contradiction, construction, counterexamples, set notation, subsets, set operations, relations, functions as maps, countability, divisibility, primes, GCD and LCM, the Euclidean algorithm, modular arithmetic, congruences, graph vertices, edges, paths, cycles, degree, trees, connectedness, sample spaces, basic probability, counting, conditional probability, random variables, data summaries, center and spread, data displays, variance, standard deviation, normal distributions, binomial distributions, correlation, regression, confidence intervals, sampling and inference, real sequences, epsilon-delta limits, continuity, differentiability, Riemann integration, open and closed sets, metric spaces, bases, compactness, topological connectedness, homeomorphisms, groups, rings, fields, homomorphisms, and abstract examples. Lesson overviews use adaptive sections, meaningful figures, worked examples, studio moves, workspace notes, and concise “Where it shows up” context from modular Learning / Overview content files. More than fifty overview figures are interactive: draggable points and sliders with keyboard support drive live readouts for ideas such as tangent slopes, Riemann rectangles, slope fields, the unit circle, modular clocks, epsilon bands, subgroup cycles, induction dominoes, and the normal curve. Graph Theory lessons include SVG figures for vertices, edges, paths, cycles, degree, trees, and connected components. Physics coverage includes units, vectors, graphs, kinematics, forces, energy, momentum, oscillations, waves, sound, electric charge and fields, circuits, magnetism, thermodynamics, ideal gases, quantum ideas, and relativity. Carry also includes a local-first Scratchpad for typing plain math or LaTeX-ish notation in one top-aligned editing surface, previewing readable notation, aligning equations and inequalities, copying clean plain text, LaTeX-ish notation, or Markdown, importing/exporting LaTeX, and exporting or sharing the rendered preview as an SVG image. Scratchpad edits support Undo/Redo; `Command/Control + Enter` duplicates the current line below and adding Shift duplicates it at the end. Tools include random values, normal-simulation, exact unit-circle and complex-coordinate helpers, draggable exact-angle unit circle input, 2D graphing with pan and zoom, draggable 3D graphing, and a local Lesson Studio that packages the AI authoring handoff, validates and compiles CLS JSON, and runs custom lessons in an immersive temporary workspace outside the curriculum. Practice runs in two modes. Concept lessons use a single tap-to-answer Guided flow (no mode switch to distract). Procedural workspaces such as long addition, factoring, equations, inequalities, and matrix operations offer Guided (one step at a time) and Practice (fill every box freely, then check when ready). In Guided mode, Return checks the active box; Tab commits and advances a correct filled box, while Shift+Tab keeps its standard backward-navigation behavior. Completed problem sets now offer two clear next steps: practice the set again or return to its Learning / Overview page. The Games section currently includes generated Sudoku with adjustable board size, difficulty, keyboard input, and local browser persistence, plus Mod Clock, Prime Factors, GCD, Divisibility, and Residues games for visual number-theory practice, an interactive Graph Paths puzzle where you tap nodes to trace the shortest route between two points, and a Graph Color puzzle where you color nodes so that no edge joins two of the same color. The Explorations section publishes dated puzzle articles with a think-first prompt, an optional figure, and a hidden response that can include an interactive follow-up. Progress, scratchpads, games, tools, lesson drafts, and compilation history are stored privately in the browser with `localStorage`. Custom lesson sessions remain in memory outside the curriculum, do not change learner progress, and return to the saved Lesson Studio draft on reload. Export produces one JSON backup covering the persistent local stores, and import restores it (legacy progress-only files still work).

Lessons and tools use readable paths such as `/math/arithmetic/long-addition`, `/math/differential-equations/separable-equations`, `/math/probability/basic-probability`, `/physics/thermodynamics/ideal-gas-law`, `/tools/lesson-builder`, `/games/sudoku`, `/games/mod-clock`, `/games/residue-match`, and `/explorations/2026-06-21-signal-boxes`. Static hosts should rewrite unknown app paths to `index.html`.

## Run

Open `index.html` in a browser, or serve the directory with any static file server.

For development and browser QA, install the local test dependency once:

```sh
npm install
npx playwright install chromium
```

Then run the complete automated gate with `npm run check`, fast module tests with `npm run test:unit`, or only the browser suite with `npm run test:e2e`. Playwright starts its own local static server and covers direct links, typed and multiple-choice answers, procedural focus movement, local persistence, Scratchpad rendering, and keyboard game input.

## Architecture

- `docs/roadmap.md` defines Carry's product direction, learning model, delivery phases, and non-negotiable low-friction and Scratchpad boundaries.
- `docs/codex-handoff.md` is the project-specific implementation handoff layered on top of the shared guidance in `../guidelines`.
- `index.html` provides the static app shell.
- `styles.css` defines the shared interface system, light and dark themes, grid layout, focus states, and responsive behavior.
- `app.js` currently coordinates UI state, persistence, lesson rendering, validation, hints, problem guardrails, and import/export. It is being reduced incrementally behind tested module boundaries.
- `core/router.js` owns pure route parsing and URL generation.
- `core/workspace-registry.js` discovers practice modules and builds the runtime workspace index without topic-specific wiring.
- `core/learning-record.js` owns the versioned local capability and attempt evidence model without producing an opaque mastery score.
- `core/lesson-spec.js` validates and compiles the data-only Carry Lesson Specification into existing workspace contracts.
- `authoring/` contains the CLS schema, engine and figure catalog, AI authoring handoff, in-browser Lesson Studio module, examples, and production lesson sources. `npm run lessons:compile` writes deterministic static output to `practice/generated/carry-lessons.js`.
- `practice/` documents the recommended modular home for reusable question data and special practice engines as they migrate out of `app.js`.
- `courses/` holds deeper sequenced curricula. Each course owns its catalog, lesson modules, authored overviews, and course-specific interactive figures.
- `courses/differential-equations/workspaces/guided-derivation.js` provides the reusable staged-equation engine; method-specific workspace files supply equations, accepted forms, hints, and optional smaller-step scaffolds.
- `practice/linear-algebra/matrix-operations/matrix-engine.js` provides the guided entry-by-entry matrix engine; operation modules supply authored matrices, calculations, accepted values, and hints.
- `explorations/` holds the exploration registry and one dated entry file per exploration article.
- `assets/carry-icon.png`, `assets/carry-icon-256.png`, and `favicon.ico` provide the app icon and browser favicons.

## Versioning

Carry uses pre-1.0 semantic versions while the curriculum and interaction model are still settling. Bump the app version when releasing user-visible curriculum, validation, persistence, import/export, navigation, or interface behavior changes. Do not bump it for private notes, comments, or purely local development experiments that are not deployed.

Run `npm run lessons:compile` after changing a `.carry.json` source. `npm run lessons:check` validates CLS sources and confirms that generated output is current; `node scripts/lesson-qa.js` validates all compiled and legacy lesson data. Use `sh scripts/release.sh --check` to run CLS validation, lesson QA, unit tests, the Chromium regression suite, and release metadata checks without changing files. Use `sh scripts/release.sh <new-version>` to pass the complete gate and bump every version string (`APP_VERSION`, package metadata, the footer, this README, and all `?v=` cache-busting parameters) in one verified step.

## Current Guardrails

- Progress stays local to the current browser unless exported as JSON.
- Scratchpads and games stay local to the current browser.
- No login, accounts, email, passwords, or server-side learner profiles are used.
- Lesson Studio parses data only: pasted lesson sources cannot execute JavaScript or inject authored HTML, SVG, or MathML.
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

Confirm that both the app shell and a direct lesson route are healthy:

```sh
curl -fsS https://carry.iandorsey.com/ >/dev/null
curl -fsS https://carry.iandorsey.com/math/differential-equations/separable-equations >/dev/null
```

Then open the site, confirm the expected version in the footer, and complete one practice check. Because Carry is a static, local-first app, deployment does not migrate or modify learner data stored in existing browsers.

To roll back, select a known-good commit without rewriting `main`, then reload Caddy:

```sh
cd /var/www/carry
git log --oneline -5
KNOWN_GOOD=replace-with-commit-sha
git switch --detach "$KNOWN_GOOD"
sudo caddy reload --config /etc/caddy/Caddyfile
```

Return the server to the current release line with `git switch main` followed by `git pull --ff-only`.
