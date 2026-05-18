# Carry

Carry is a local-first math learning studio designed to run fully in the browser.

Carry opens directly into a focused learning workspace. It currently includes implemented Arithmetic and Pre-Algebra lessons, including guided long addition, subtraction, multiplication, division, division with remainders, equation transformations, and inequality transformations. Progress is stored privately in the browser with `localStorage`, with JSON export and import controls for backup or transfer.

## Run

Open `index.html` in a browser, or serve the directory with any static file server.

## Architecture

- `index.html` provides the static app shell.
- `styles.css` defines the shared interface system, light and dark themes, grid layout, focus states, and responsive behavior.
- `app.js` contains the client-side workspace registry, progress persistence, lesson renderers, validation, hints, problem guardrails, and import/export flow.

## Current Guardrails

- Progress stays local to the current browser unless exported as JSON.
- No login, accounts, email, passwords, or server-side learner profiles are used.
- Long subtraction defaults to non-negative answers.
- Exact long division accepts three-digit dividends and one- or two-digit divisors with no final remainder.
- Long division with remainders is a separate lesson. If a learner enters a valid remainder problem in exact long division, Carry moves it to the remainders lesson automatically.
- Equation and inequality helpers focus on simple linear transformations before broader algebra features are added.

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
