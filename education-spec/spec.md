# Education course profile 0.1

Status: experimental. A package declares `education-course/0.1`. Banks declare `education-bank/0.1`. These versions identify the content contract independently of Carry's release.

In this profile, **must** is a requirement, **should** is a recommendation, and **may** indicates an option. The schema defines field names, allowed values and shape. This document defines their meaning and additional constraints.

## Package and identity

A course is a directory with `course.json` at its root. The manifest contains title, language, license, revision, optional objectives and bank paths, and an ordered list of lessons. Each lesson contains an ordered list of cards. Each card contains an ordered list of blocks. Readers must expose content in authored order and should allow learners to revisit earlier cards. One-card-at-a-time presentation is a reader choice.

Objective, lesson, card, and bank IDs must be unique in their respective course-wide scopes. Item IDs are unique within a bank. Part IDs are unique per item, and option IDs are unique per part. Card and item objective references resolve within the course. An explanation reference resolves to a course card.

Keep IDs stable through editorial corrections. Increment the course revision when publishing a changed package. Increment an item revision when its meaning or evaluation changes. If attempt evidence is recorded, retain the course, bank, item and part IDs and the applicable revisions. A reader may track local progress under its own storage model.

## Blocks and assets

- `markdown` references a UTF-8 CommonMark file. Readers must disable raw HTML and should keep prose usable in a plain text editor. Authors should use relative Markdown links for supplementary resources and provide a readable description for any formula that requires a renderer. This draft leaves rich math syntax to widget payloads.
- `media` references a local image, PDF, audio, or video and includes a meaningful description. Audio and video must include a Markdown transcript. Video must also include WebVTT captions. Baseline file extensions are PNG, JPEG, GIF, WebP, AVIF, PDF, MP3, Ogg, WAV, M4A, MP4 and WebM. Reader support for individual codecs may vary.
- `questions` references a bank and explicitly orders items. It declares either a low-stakes knowledge check or practice. `shuffleOptions` defaults to false. When true, readers may vary option order and must preserve option IDs and scoring. Selection from pools, adaptive scheduling and generated variants are future extensions.
- `widget` identifies a namespaced type and numeric version, a JSON configuration object, and a Markdown fallback. A reader that lacks the declared type or version must show the fallback. In the current example, `carry.cls` version 1 uses an unmodified CLS v1 lesson shape for configuration. A Carry adapter would delegate response slots, focus and feedback to the existing engine and use the same legacy validators. [CLS engine contract](../authoring/README.md)

Paths in structured blocks are relative to the package root. Markdown links are relative to the containing document. Declared files must resolve to regular files within the package. Structured paths use ASCII letters, digits, underscores, periods, hyphens and internal spaces in segments separated by forward slashes. Empty, dot, dot-dot and drive or URL segments are disallowed. Course loading must never execute authored scripts. Readers must validate Markdown links separately before resolving local files or opening external links.

## Questions

Banks may be JSON or a single YAML 1.2 document using the core schema and a JSON-compatible data model. YAML keys must be unique strings. Explicit tags, anchors and aliases are disallowed. After parsing, both encodings have the same meaning.

Prompts, part labels, option labels, hints and feedback are plain text. A prompt may insert named `{{part-id}}` markers for inline blanks. A prompt that uses markers must reference each part exactly once. Readers may also show the prompt with distinctly labeled fields in part order for accessibility. Without markers the fields follow the prompt.

- **Single choice.** Compare the selected option ID with the sole correct ID.
- **Multiple selection.** Compare selected IDs as a set with the complete set of correct IDs. Partial credit is outside the profile.
- **Exact text.** Trim leading and trailing whitespace using ECMAScript String trim semantics. In `trim-ascii-case-insensitive` mode, additionally map ASCII A-Z to a-z. Match against any accepted value after applying the same policy. Spaces inside the answer, accents, punctuation and mathematical equivalence are preserved.

Choice parts require at least one incorrect option. Options must have unique IDs and distinct labels after trimming and ASCII case folding. Accepted answers must be distinct under the part's normalization. Keep alternate valid answers out of the distractors. `distractorGroup` and `legacyId` are advisory authoring or migration metadata. The validator checks structure and references. Authors still review the educational meaning and ambiguity of each question.

Difficulty describes the challenge of the item. Demand describes the evidence it asks for. Review priority belongs to learner records and scheduling policy. Hints may be revealed before an attempt. Feedback should follow a checked response and link back to the explanation when one is referenced. Public static reading exports should omit scoring and accepted-answer data. Local self-checking packages expose that data to users who inspect their files.

## Validation boundary

A package is valid when both its schema and the cross-reference, path, and question invariants above hold. The reference toolkit checks declared file existence and media filename extensions. It treats widget config as JSON and leaves its semantics to the widget implementation. Link checking inside Markdown, media decoding, and editorial QA are separate checks. The reference toolkit applies a 1 MiB limit to parsed manifests, banks and widget configs.
