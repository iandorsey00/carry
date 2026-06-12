# Carry

Version: `0.1.0-alpha.64`

Carry is a local-first math, physics, scratchpad, and puzzle learning studio designed to run fully in the browser.

Carry opens directly into a focused learning workspace. It currently includes implemented Arithmetic, Pre-Algebra, Algebra, Geometry, Trigonometry, Precalculus, Calculus, Differential Equations, Linear Algebra, Proofs, Set Theory, Number Theory, Probability, Real Analysis, Abstract Algebra, and Physics lessons. Math coverage includes guided long addition, subtraction, multiplication, division, division with remainders, equation transformations, inequality transformations, systems, factoring, quadratics, angles, triangles, circles, area and volume, coordinate geometry, proof basics, unit circle values, right-triangle ratios, trig graphs, identities, inverse trig, functions, transformations, polynomial and rational functions, exponential and log functions, sequences, complex numbers, limits, derivatives, integrals, calculus applications, series, slope fields, separable equations, first-order and second-order differential equation models, vectors, matrices, linear transformations, determinants, eigenvalues, vector spaces, logic, quantifiers, induction, contradiction, construction, counterexamples, set notation, subsets, set operations, relations, functions as maps, countability, divisibility, primes, GCD and LCM, the Euclidean algorithm, modular arithmetic, congruences, sample spaces, basic probability, counting, conditional probability, random variables, real sequences, epsilon-delta limits, continuity, differentiability, Riemann integration, groups, rings, fields, homomorphisms, and abstract examples. Physics coverage includes units, vectors, graphs, kinematics, forces, energy, momentum, oscillations, waves, sound, electric charge and fields, circuits, magnetism, thermodynamics, ideal gases, quantum ideas, and relativity. Carry also includes a local-first Scratchpad for typing plain math or LaTeX-ish notation, previewing readable notation, aligning equations and inequalities, and copying or importing/exporting clean plain text, LaTeX-ish notation, or Markdown. Concept lessons use typed answers or multiple choice depending on the question shape. The Games section currently includes generated Sudoku with adjustable board size, difficulty, keyboard input, and local browser persistence, plus Mod Clock, Prime Factors, GCD, Divisibility, and Residues games for visual number-theory practice. Progress, scratchpads, and games are stored privately in the browser with `localStorage`, with JSON export and import controls for learner progress backup or transfer.

Lessons use readable paths such as `/math/arithmetic/long-addition`, `/math/differential-equations/separable-equations`, `/math/probability/basic-probability`, `/physics/thermodynamics/ideal-gas-law`, `/games/sudoku`, `/games/mod-clock`, and `/games/residue-match`. Static hosts should rewrite unknown app paths to `index.html`.

## Run

Open `index.html` in a browser, or serve the directory with any static file server.

## Architecture

- `index.html` provides the static app shell.
- `styles.css` defines the shared interface system, light and dark themes, grid layout, focus states, and responsive behavior.
- `app.js` contains the client-side workspace registry, progress and game persistence, lesson renderers, validation, hints, problem guardrails, and import/export flow.
- `assets/carry-icon.png` provides the app icon and favicon.

## Versioning

Carry uses pre-1.0 semantic versions while the curriculum and interaction model are still settling. Bump the app version when releasing user-visible curriculum, validation, persistence, import/export, navigation, or interface behavior changes. Do not bump it for private notes, comments, or purely local development experiments that are not deployed.

## Current Guardrails

- Progress stays local to the current browser unless exported as JSON.
- Scratchpads and games stay local to the current browser.
- No login, accounts, email, passwords, or server-side learner profiles are used.
- Long subtraction defaults to non-negative answers.
- Exact long division accepts three-digit dividends and one- or two-digit divisors with no final remainder.
- Long division with remainders is a separate lesson. If a learner enters a valid remainder problem in exact long division, Carry moves it to the remainders lesson automatically.
- Algebra, Geometry, Trigonometry, Precalculus, Calculus, Differential Equations, Linear Algebra, Proofs, Set Theory, Number Theory, Probability, Real Analysis, and Abstract Algebra helpers focus on simple transformations, systems, factoring, introductory quadratics, shape facts, measurement, coordinate reasoning, proof basics, exact trig relationships, function behavior, graph transformations, early advanced algebra, limits, rates of change, accumulation, series, slope fields, separable equations, introductory differential-equation models, vectors, matrices, determinants, eigenvectors, core proof patterns, set language, relations, countability, divisibility, congruence, probability language, counting, conditional probability, random variables, real-number rigor, convergence, continuity, differentiability, integration, groups, rings, fields, homomorphisms, and algebraic examples before broader advanced features are added.

Future topics can register their own workspace, notation renderer, validation logic, hint system, and progress hooks without adding account infrastructure.

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
