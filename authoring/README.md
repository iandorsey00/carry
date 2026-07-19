# Carry Lesson Specification

Carry Lesson Specification (CLS) is the data-only authoring format for lessons that compile into Carry's existing learning workspaces. It is intended for both AI and human authors.

CLS is not JavaScript, HTML, SVG, MathML, or an answer-checking service. A lesson declares instructional content, an existing figure renderer, an interaction engine, response semantics, authored problems, hints, and accepted forms. Carry owns rendering, validation orchestration, local progress, accessibility, and responsive behavior.

## Authoring Contract

1. Read `schema/carry-lesson-v1.schema.json` and `catalogs/carry-v1.json` before writing a lesson.
2. Start from the nearest file in `examples/` or `lessons/`.
3. Use `paragraph` blocks for prose. Put each formula in an explicit `math` run.
4. Write formulas as Carry's supported TeX-like source. The compiler wraps them for the existing MathML renderer. Never write raw MathML.
5. Select a figure from the catalog. Never embed SVG, HTML, event handlers, or scripts in lesson data.
6. Select an engine and its matching response kind. The response describes what the learner enters, not how the controls are laid out.
7. Give every lesson and problem a stable lowercase id. Do not recycle deleted ids.
8. Give each response slot one expected value, any genuinely equivalent accepted forms, a contextual hint, and a concise label.
9. Include at least eight problems before moving a CLS lesson into production.
10. Run `npm run lessons:compile`, then `npm run check`.

## Mobile And Accessibility Rules

CLS lesson files must not contain widths, heights, columns, breakpoints, CSS classes, or styles. Carry's semantic renderers decide how a matrix, derivation, digit grid, or future science diagram adapts to the available viewport.

The renderer must provide:

- stable focus order and automatic focus on the active response
- at least 44 by 44 CSS-pixel pointer targets where controls are interactive
- no horizontal page overflow at a 390 CSS-pixel viewport
- labels that remain available to assistive technology
- a suitable mobile input mode or symbol control for each response kind
- no dependence on hover, color, dragging, or a physical keyboard alone

Authors should shorten prompts before trying to influence layout. If a structure cannot fit, improve its renderer rather than adding presentation instructions to the lesson.

## Source Shape

```json
{
  "$schema": "../../schema/carry-lesson-v1.schema.json",
  "spec": "carry.lesson/v1",
  "id": "linear-algebra.example",
  "subject": "math",
  "section": "linear-algebra",
  "topic": "Linear Algebra",
  "title": "Example lesson",
  "learn": {
    "figure": {
      "renderer": "carry",
      "id": "linear-matrix-multiplication",
      "caption": "Each result entry comes from one row-column dot product."
    },
    "core": [
      {
        "type": "paragraph",
        "runs": [
          { "text": "An " },
          { "math": "m\\times n" },
          { "text": " matrix has m rows and n columns." }
        ]
      }
    ]
  },
  "practice": {
    "engine": "matrix-operation",
    "response": {
      "kind": "matrix",
      "entry": "number",
      "traversal": "row-major"
    },
    "problems": []
  }
}
```

The build command validates every production `.carry.json` file, compiles it into the existing workspace contract, and writes one deterministic browser module to `practice/generated/carry-lessons.js`. The generated file is committed so Carry remains a build-free static deployment.

## Lesson Studio

Carry exposes this contract at `/tools/lesson-builder`. Its primary purpose is to create custom lessons for the moment: remedial refreshers, targeted practice, or a bridge between topics. The browser tool combines this guide, the current catalog, and the JSON Schema into one copyable AI handoff. It accepts CLS JSON, reports validation issues, shows the compiled workspace, runs a successful compile in an immersive lesson surface, and retains up to twelve successful compilations in local browser history.

**Run lesson** creates a temporary in-memory session, separate from the Math and Physics curriculum libraries. The session uses Carry's reviewed renderer and interaction engine; it does not evaluate authored JavaScript or inject authored markup. Session attempts and completions do not alter learner progress, and reloading returns to the saved Lesson Studio draft.

Custom lessons never need to be added to Carry. If a maintainer separately decides that a lesson belongs in the permanent curriculum, its reviewed source may be placed under `authoring/lessons/`, compiled with `npm run lessons:compile`, and committed with the deterministic generated output. Lesson Studio drafts and history are included in Carry's JSON backup and can be cleared from the tool.

## AI Handoff

When asking an AI to author a lesson, provide this file, the schema, the catalog, one nearby example, and the relevant curriculum goal. Ask it to output only the `.carry.json` lesson source and to report any required engine or figure that is missing from the catalog.

The AI must not invent renderer ids, execute code, create answer validators, or encode presentation dimensions. New capabilities belong in reviewed renderer or engine modules, then in the catalog, before lesson data may use them.
