# Carry Practice Modules

This directory is the migration home for Carry's learner-facing practice content.

Current production state:
- Most concept question data still lives inline in `../app.js`.
- Long-operation lessons and other highly interactive modes still keep their state machines in `../app.js`.

Recommended target:
- Keep practice content under `practice/`.
- Put reusable question and answer data in small subject/lesson modules.
- Put special practice engines, such as long addition, long multiplication, equation transforms, graph interactions, or future proof builders, under `practice/modes/`.
- Keep the app shell responsible for navigation, rendering containers, local persistence, import/export, and orchestration.

This is intentionally a modular directory, not one large data file. "One place" means one practice boundary with a predictable structure.

Suggested shape:

```text
practice/
  README.md
  practice-format.js
  math/
    arithmetic/
      long-addition.questions.js
      long-multiplication.engine.js
  physics/
    kinematics.questions.js
  modes/
    long-operation-engine.js
    equation-transform-engine.js
```

Migration rule:
Move content here one lesson or engine at a time, then wire `app.js` to import that module. Avoid large unreviewable moves that mix data migration with behavior changes.
