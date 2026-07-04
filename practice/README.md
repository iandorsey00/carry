# Carry Practice Modules

This directory is the migration home for Carry's learner-facing practice content.

Current production state:
- Reusable lesson question data lives in curriculum-shaped files under `practice/`.
- Long-operation workspace definitions live beside the arithmetic lesson files.
- Some special-mode rendering and validation engines still live in `../app.js` while they are migrated safely.

Recommended target:
- Keep practice content under `practice/`.
- Put reusable question and answer data in small lesson modules.
- Put special practice definitions beside the lesson they power when the lesson is curriculum-specific.
- Move shared special practice engines, such as equation transforms, graph interactions, or future proof builders, into shared engine modules once more than one lesson needs them.
- Keep the app shell responsible for navigation, rendering containers, local persistence, import/export, and orchestration.

This is intentionally a modular directory, not one large data file. "One place" means one practice boundary with a predictable structure.

Suggested shape:

```text
practice/
  README.md
  practice-format.js
  arithmetic/
    whole-numbers/
      place-value.js
      long-addition.js
      long-multiplication.js
    number-systems/
      fractions.js
      decimals.js
  physics/
    motion/
      kinematics.js
```

Migration rule:
Move behavior here one engine at a time. Data files can move freely, but renderer and validator migrations should stay small and testable.

Overview figures:
Lesson Overview figures live in `how-this-works/intro-figures.js` (engine: registry plus shared SVG, slider, and drag-point helpers) and four subject modules — `intro-figures-core.js` (arithmetic, pre-algebra, algebra), `intro-figures-advanced.js` (geometry through linear algebra), `intro-figures-structures.js` (sets, number theory, topology, analysis, abstract algebra, proofs), and `intro-figures-data.js` (probability, statistics, physics). Register a builder with `CarryIntroFigures.register(figureKey, (workspace, helpers) => figureOrArray)`; registered keys replace the default figure pipeline in `app.js`. Keep captions plain-voiced, wrap inline formulas in explicit `<math>` tags, and reuse the `geometry-*` SVG classes so light and dark mode both work.
