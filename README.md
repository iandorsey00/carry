# Carry

Carry is a local-first math learning studio designed to run fully in the browser.

This first build opens directly into a guided arithmetic workspace with long addition, long subtraction, long multiplication, exact long division, and long division with remainders. Progress is stored privately in the browser with `localStorage`, with JSON export and import controls for backup or transfer.

## Run

Open `index.html` in a browser, or serve the directory with any static file server.

## Architecture

- `index.html` provides the static app shell.
- `styles.css` defines the shared interface system, light and dark themes, grid layout, focus states, and responsive behavior.
- `app.js` contains the client-side workspace registry, progress persistence, arithmetic validation, hints, problem guardrails, and import/export flow.

## Current Guardrails

- Progress stays local to the current browser unless exported as JSON.
- No login, accounts, email, passwords, or server-side learner profiles are used.
- Long subtraction defaults to non-negative answers.
- Exact long division accepts three-digit dividends and one-digit divisors with no final remainder.
- Long division with remainders is a separate lesson. If a learner enters a valid remainder problem in exact long division, Carry moves it to the remainders lesson automatically.

Future topics can register their own workspace, notation renderer, validation logic, hint system, and progress hooks without adding account infrastructure.
