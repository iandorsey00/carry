# Carry Codex Handoff

## Start Here

1. Read the shared standards handoff at `../guidelines/docs/codex-handoff.md` from the Carry repository root.
2. Read [`docs/roadmap.md`](roadmap.md) before making product, curriculum, learner-model, or major interaction decisions.
3. Use [`practice/practice-format.js`](../practice/practice-format.js) when changing authored practice data or special practice engines.
4. Use [`README.md`](../README.md) for current architecture, release, test, and deployment details.

This file is Carry's project-specific overlay. Shared standards remain in `../guidelines`; Carry-specific exceptions and product direction belong here.

## Product Purpose

Carry helps people return to mathematics where they actually left off, including forgotten foundations, and continue toward advanced university mathematics without accounts, shame, clutter, or unnecessary friction.

The product should feel like a serious, friendly, immersive thinking tool: calm, precise, tactile, beautiful, and immediately usable.

## Non-Negotiable Product Boundaries

- Keep a low-friction learning path available. Productive struggle is optional and progressively disclosed; hints remain available without penalty.
- Carry Scratchpad may evolve into a richer paradigm, but it must retain a first-class mode for plain-text or LaTeX-ish input rendered as readable mathematics.
- Keep progress, capability evidence, attempts, scratchpads, games, and tools local-first and exportable.
- Do not add authentication or server-side learner profiles.
- Do not introduce time pressure, streak pressure, or opaque mastery scores.
- Do not silently solve work entered in Scratchpad.

## Current Product Direction

Carry is evolving from a broad lesson library into a local-first cognitive apprenticeship. Prefer work that improves recognition, method choice, misconception recovery, explanation, transfer, and later retrieval over merely adding more lessons.

Implementation should proceed through small pilots. Differential Equations is the first serious-course pilot; arithmetic recovery remains a core use case and should continue receiving first-class interaction design.

## Interaction Defaults

- Open directly into useful work.
- Show one clear next action in Guided mode.
- Keep Practice available for freer work.
- Let guidance fade only with a clear way back.
- Use contextual hints that reveal the smallest useful next idea.
- Preserve keyboard flow and visible focus.
- Render mathematics with MathML where appropriate and custom semantic layouts where manipulation matters.
- Prefer linked equations, diagrams, graphs, and physical interpretations over decorative figures.

## Learning Data Defaults

- Use stable capability, misconception, problem, and step identifiers.
- Record evidence, not a false-precision grade.
- Distinguish independent success from success after a hint.
- Do not use response speed as a mastery signal.
- Keep learner-facing recommendations explainable.
- Include new local learning data in export and import.

## Release Vocabulary

- `RC`: proportional release cycle
- `FRC`: full release cycle
- `CP`: commit and push
- `RRC`: assess, choose RC or FRC, explain briefly, and perform it
- `DSR`: legacy alias for RRC
