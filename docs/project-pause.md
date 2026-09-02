# Carry Project Pause

Carry is paused in a resumable state. The repository is the source of truth, production is a static deployment, and persistent learner data remains local to each browser.

## Before Retiring The Droplet

1. Open **Status & Data** in every browser profile whose Carry data matters.
2. Export a progress backup. The JSON file includes progress, capability evidence, Scratchpads, games, tools, Lesson Studio drafts, and compilation history.
3. Keep at least one copy outside the droplet. The server cannot recover browser-local data.
4. Capture or privately record the current DNS and Caddy configuration if the domain may return later.
5. Confirm the latest release commit exists on GitHub before destroying the server.

Carry is a rebuildable static app. Its code has an effective RPO of the latest pushed commit and can be restored in minutes to any static host. Browser-local learning data has no server-side recovery point; its RPO is the learner's latest exported JSON backup.

## Resume

```sh
git clone git@github.com:iandorsey00/carry.git
cd carry
npm install
npx playwright install chromium
npm run check
PORT=4173 node scripts/test-server.js
```

Open `http://127.0.0.1:4173/`. Import any saved progress JSON through **Status & Data**.

Read these files before product work:

- `docs/codex-handoff.md`
- `docs/roadmap.md`
- `authoring/README.md` for Carry Lesson Specification work
- `../guidelines/docs/codex-handoff.md` when the shared guidelines repo is present

## Stable At Pause

- Browser-local progress and backup/restore
- Broad Math and Physics lesson library
- Differential Equations course pilot with guided derivations
- Custom guided arithmetic and matrix workspaces
- Math Scratchpad with plain and rendered modes
- 2D and 3D graphing, number tools, games, and explorations
- CLS validation, deterministic compilation, temporary lesson execution, and local history

## Intentional Limits

- CLS is a constrained authoring format, not a general programming language.
- Custom lessons can use only cataloged interaction engines, figures, capabilities, and transformations.
- The reliable AI route is Lesson Studio's **Copy Codex task**, used with the Carry repository open. **Copy ChatGPT handoff** remains available for a chat without repository access, but complex lessons may need more repair.
- Unsupported lesson behavior should be added as a reviewed engine or renderer before lesson data refers to it.
- Carry has broad curriculum coverage, but not every lesson has the depth or interaction quality of long arithmetic and the Differential Equations pilot.

## First Work After Resume

1. Use real learning sessions to evaluate the Differential Equations and CLS pilots.
2. Add CLS engines only in response to a concrete lesson need.
3. Continue lesson QA around mathematical correctness, accepted equivalents, figures, and transfer practice.
4. Expand the local review model after the pilot demonstrates value.
5. Preserve the quiet, immersive interface and the direct plain-text Scratchpad path.
