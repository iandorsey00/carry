# Carry

Carry is a local-first math learning studio designed to run fully in the browser.

Carry opens directly into a focused learning workspace. It currently includes implemented Arithmetic, Pre-Algebra, Algebra, Geometry, Trigonometry, Precalculus, Calculus, Linear Algebra, Proofs, Set Theory, Number Theory, Real Analysis, and Abstract Algebra lessons, including guided long addition, subtraction, multiplication, division, division with remainders, equation transformations, inequality transformations, systems, factoring, quadratics, angles, triangles, circles, area and volume, coordinate geometry, proof basics, unit circle values, right-triangle ratios, trig graphs, identities, inverse trig, functions, transformations, polynomial and rational functions, exponential and log functions, sequences, complex numbers, limits, derivatives, integrals, calculus applications, series, vectors, matrices, linear transformations, determinants, eigenvalues, vector spaces, logic, quantifiers, induction, contradiction, construction, counterexamples, set notation, subsets, set operations, relations, functions as maps, countability, divisibility, primes, GCD and LCM, the Euclidean algorithm, modular arithmetic, congruences, real sequences, epsilon-delta limits, continuity, differentiability, Riemann integration, groups, rings, fields, homomorphisms, and abstract examples. Progress is stored privately in the browser with `localStorage`, with JSON export and import controls for backup or transfer.

## Run

Open `index.html` in a browser, or serve the directory with any static file server.

## Architecture

- `index.html` provides the static app shell.
- `styles.css` defines the shared interface system, light and dark themes, grid layout, focus states, and responsive behavior.
- `app.js` contains the client-side workspace registry, progress persistence, lesson renderers, validation, hints, problem guardrails, and import/export flow.
- `assets/carry-icon.png` provides the app icon and favicon.

## Current Guardrails

- Progress stays local to the current browser unless exported as JSON.
- No login, accounts, email, passwords, or server-side learner profiles are used.
- Long subtraction defaults to non-negative answers.
- Exact long division accepts three-digit dividends and one- or two-digit divisors with no final remainder.
- Long division with remainders is a separate lesson. If a learner enters a valid remainder problem in exact long division, Carry moves it to the remainders lesson automatically.
- Algebra, Geometry, Trigonometry, Precalculus, Calculus, Linear Algebra, Proofs, Set Theory, Number Theory, Real Analysis, and Abstract Algebra helpers focus on simple transformations, systems, factoring, introductory quadratics, shape facts, measurement, coordinate reasoning, proof basics, exact trig relationships, function behavior, graph transformations, early advanced algebra, limits, rates of change, accumulation, series, vectors, matrices, determinants, eigenvectors, core proof patterns, set language, relations, countability, divisibility, congruence, real-number rigor, convergence, continuity, differentiability, integration, groups, rings, fields, homomorphisms, and algebraic examples before broader advanced features are added.

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
