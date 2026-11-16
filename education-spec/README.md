# Carry Education Specification

[简体中文规范](spec.zh-CN.md)

This is an experimental, separately versioned project in the Carry repository. It describes portable, local-first courses with readable source files, reusable questions, and optional guided activities. [Architecture assessment](../docs/education-spec-assessment.md)

The [0.1 profile](spec.md) and [JSON Schema](schema/profile-0.1.schema.json) describe the package. The Node toolkit runs independently of Carry. It validates local course directories and exports a reference reader as offline HTML. Carry's Lesson Studio can run the guided math example's CLS payload.

## Try the examples

```sh
npm --prefix education-spec ci
npm --prefix education-spec test
node education-spec/toolkit/validate.mjs education-spec/examples/recall
node education-spec/toolkit/validate.mjs education-spec/examples/astronomy
node education-spec/toolkit/validate.mjs education-spec/examples/guided-math
```

Once the dependencies are installed, validation runs offline. Pass the directory containing `course.json`. Exit status `0` means valid, `1` means validation failed, and `2` means incorrect command usage.

## Open a course in the reader

From the Carry repository root, run:

```sh
npm --prefix education-spec run read -- examples/astronomy /tmp/carry-astronomy.html
```

Open the resulting HTML file directly in a browser. The same command accepts `examples/recall`, `examples/guided-math`, or an absolute path to another course directory. Choose a new destination for each export. The command leaves existing output files intact.

The reader provides card navigation, media and transcripts, hints, and immediate feedback on choice and exact-text answers. Its first widget supports guided column addition with operands up to four digits. Other activities open their written fallback. Responses stay in the current page session. The self-checking HTML contains answer keys, so share it as practice material.

Each export embeds local media up to a total of 32 MiB. Supported Markdown links can lead to another included reading or a local media download. External images appear as their alternative text. Explicit HTTP and HTTPS links remain available for the learner to open.

| Example | What it tests |
| --- | --- |
| [Recall](examples/recall/clues.md) | Two cues adapted from the memtrain example CSV. The YAML bank preserves original per-item IDs. |
| [Astronomy](examples/astronomy/viewpoint.md) | Explanatory prose, bundled synthesized narration, transcript, and a JSON knowledge check. |
| [Guided math](examples/guided-math/addition.md) | A portable worked example and a real CLS digit-grid activity. |

## Author a course

1. Start with the nearest example. Give the course, its lessons and cards stable IDs.
2. Put explanations in Markdown. Add local media and a transcript or captions where required.
3. Put practice in a separate JSON or YAML bank. Reference questions by ID from each card that uses them.
4. For a specialized activity, reference a versioned JSON payload and a readable fallback.
5. Run the validator, then review the material for correctness, accessibility, and useful feedback.

The reference reader covers the baseline course profile and the three pilots. QTI interchange and a complete memtrain CSV conversion are future milestones. See the assessment for the criteria for a separate repository.
