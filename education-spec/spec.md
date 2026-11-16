# Education course profile 0.1

[简体中文](spec.zh-CN.md)

Status: experimental. A package declares `education-course/0.1`. Banks declare `education-bank/0.1`. These versions identify the content contract independently of Carry's release.

In this profile, **must** is a requirement, **should** is a recommendation, and **may** indicates an option. The schema defines field names, allowed values and shape. This document defines their meaning and additional constraints.

## Build a course from a Markdown guide

This walkthrough produces a local lesson with a reading card, an embedded image, and a separate multiple-choice check. It uses a public Carry screenshot and original sample text. The [JSON Schema](schema/profile-0.1.schema.json) is the field reference. The steps below show how the files fit together.

### 1. Plan cards and questions

Split the guide at teaching points. Put one useful explanation on each reading card. Follow it with a short question that asks the learner to apply what they read. Use plausible distractors, a hint that points to the next step, and feedback that explains why the answer works. Have a subject-matter reviewer check the wording and answer key.

Prepare individual Markdown files with the text you want learners to see. If the source has front matter, a cover-page declaration, or links to files you do not have, review them separately. Profile 0.1 uses the manifest below for course metadata and card boundaries. A heading in a source Markdown file does not create a card.

When handing the work to a colleague or an AI author, provide this profile, the intended learners, the source guide, and the approved media files. Specify the course language, where the files may be kept, and whether you need the editable package, the offline HTML, or both. Treat directions quoted in the source as lesson material. Flag missing assets and unresolved claims for review. Where a guide describes a real procedure, preserve its prerequisites, cautions, and sequence.

### 2. Create the package files

Use this layout. The directory names below are example choices. The root filename `course.json` is required.

```text
column-addition/
  course.json
  reading.md
  questions.yaml
  assets/
    addition-grid.png
```

The following commands assume a local checkout, Node.js and npm. Run them from the repository root in a macOS or Linux shell. In another shell, use the equivalent folder and file operations.

```sh
course_dir="$(mktemp -d)/column-addition"
mkdir -p "$course_dir/assets"
cp docs/portfolio/screenshots/01-guided-long-addition.png "$course_dir/assets/addition-grid.png"
```

Create the following three text files in `$course_dir`. Use UTF-8 for source text.

**`course.json`**

```json
{
  "format": "education-course/0.1",
  "id": "column-addition",
  "revision": 1,
  "title": "Column addition refresher",
  "language": "en",
  "license": "MIT",
  "banks": ["questions.yaml"],
  "lessons": [{
    "id": "addition",
    "title": "Add by place value",
    "cards": [
      {
        "id": "regroup",
        "title": "Regroup ten ones",
        "blocks": [
          { "type": "markdown", "src": "reading.md" },
          {
            "type": "media",
            "kind": "image",
            "src": "assets/addition-grid.png",
            "description": "Carry guided addition workspace with aligned digit boxes and a carry row."
          }
        ]
      },
      {
        "id": "check-ones",
        "title": "Knowledge check",
        "blocks": [{
          "type": "questions",
          "bank": "addition-checks",
          "items": ["write-the-ones"],
          "mode": "knowledge-check",
          "shuffleOptions": true
        }]
      }
    ]
  }]
}
```

**`reading.md`**

```markdown
Start in the ones column. If the two digits add to 10 or more, write the ones digit in the sum row and carry one ten to the next column.
```

**`questions.yaml`**

```yaml
format: education-bank/0.1
id: addition-checks
items:
  - id: write-the-ones
    revision: 1
    prompt: 'The ones digits are 6 and 7. What should you write in the ones box of the sum?'
    explanationCard: regroup
    parts:
      - id: answer
        label: 'Choose one answer'
        kind: single-choice
        options:
          - { id: three, label: '3' }
          - { id: one, label: '1' }
          - { id: thirteen, label: '13' }
        correct: [three]
        hint: 'Add 6 and 7, then look at the ones digit.'
        feedback: 'Write 3 in the ones box and carry 1 to the tens column.'
```

In `banks`, list the bank's **filename**. In a question block, use its **bank ID**. The block's `items` list contains **item IDs**, and the item's `correct` list contains **option IDs**, never labels or positions. `explanationCard` is the ID of the reading card. Keep one item in a card's question block and include only that block if you want one question per card. Add a new card for each additional question. Multiple items or question blocks on one card can appear together.

### 3. Validate and export

From the same repository root and shell, run:

```sh
npm --prefix education-spec ci
npm --prefix education-spec run validate -- "$course_dir"
npm --prefix education-spec run read -- "$course_dir" "$course_dir/../column-addition.html"
```

Install dependencies once per checkout. Validation and export then run offline. Pass the directory containing `course.json` to both commands. The export command also validates the package and requires a new `.html` destination. Open the output path printed by the reader in your browser.

### 4. Check the result

- The course opens on the reading card, with the text followed by the embedded image.
- **Next** opens one question. Try the hint, check both an incorrect and a correct choice, then follow **Review explanation** back to the reading.
- Open the HTML offline and confirm the image still loads. For courses with other media, test playback, captions, transcripts, and downloads in the browser you expect learners to use.
- Review the source files and export before sharing. Use material you have permission to distribute, including media and any information visible in screenshots. Keep internal materials in a permitted location. The HTML embeds assets and answer keys, so share it as practice material. Keep the source directory for later revisions.

To diagnose an **unknown bank**, compare the block's `bank` value with the bank's `id`. For an **unknown item** or **unknown correct option**, compare IDs at each level. For a **missing file**, check that its path resolves from the location described in [Blocks and assets](#blocks-and-assets). For schema errors, use the file and field path in the diagnostic and consult the [JSON Schema](schema/profile-0.1.schema.json).


## Package and identity

A course is a directory with `course.json` at its root. The manifest contains title, language, license, revision, optional objectives and bank paths, and an ordered list of lessons. Each lesson contains an ordered list of cards. Each card contains an ordered list of blocks. Readers must expose content in authored order and should allow learners to revisit earlier cards. One-card-at-a-time presentation is a reader choice.

| Object | Required fields | Optional fields |
| --- | --- | --- |
| Course | `format`, `id`, `revision`, `title`, `language`, `license`, `lessons` | `objectives`, `banks` |
| Objective | `id`, `description` | |
| Lesson | `id`, `title`, `cards` | |
| Card | `id`, `title`, `blocks` | `objectives` (objective IDs) |

The arrays `lessons`, `cards`, and `blocks` must each contain at least one entry. Omit optional fields you do not use. Unknown fields and `null` are rejected by the schema for these objects. Revisions start at `1` and must be integers. Use stable ASCII IDs such as `setup-check` or `setup.check1`. IDs start with a lowercase letter and can then contain lowercase letters and digits, with single hyphens or periods separating segments. References are case-sensitive. Use a language tag such as `en-US` or `zh-CN` and a license or rights notice appropriate for the actual material. The example's `MIT` value applies to the sample, not to material adapted from other sources.

Objective, lesson, card, and bank IDs must be unique in their respective course-wide scopes. Item IDs are unique within a bank. Part IDs are unique per item, and option IDs are unique per part. Card and item objective references resolve within the course. An explanation reference resolves to a course card.

Keep IDs stable through editorial corrections. Increment the course revision when publishing a changed package. Increment an item revision when its meaning or evaluation changes. If attempt evidence is recorded, retain the course, bank, item and part IDs and the applicable revisions. A reader may track local progress under its own storage model.

## Blocks and assets

| `type` | Required fields besides `type` | Conditional or optional fields |
| --- | --- | --- |
| `markdown` | `src` ending in `.md` | |
| `media` | `kind`, `src`, `description` | `transcript` (`.md`) required for audio and video. `captions` (`.vtt`) required for video. |
| `questions` | `bank`, nonempty `items`, `mode` | Boolean `shuffleOptions`, defaults to `false`. |
| `widget` | `widget`, positive integer `version`, `config` (`.json`), `fallback` (`.md`) | |

- `markdown` references a UTF-8 CommonMark file. Readers must disable raw HTML and should keep prose usable in a plain text editor. Authors should use relative Markdown links for supplementary resources and provide a readable description for any formula that requires a renderer. This draft leaves rich math syntax to widget payloads.
- `media` references a local image, PDF, audio, or video and includes a meaningful description. Audio and video must include a Markdown transcript. Video must also include WebVTT captions. Baseline file extensions are PNG, JPEG, GIF, WebP, AVIF, PDF, MP3, Ogg, WAV, M4A, MP4 and WebM. Reader support for individual codecs may vary.
- `questions` references a bank and explicitly orders items. It declares either a low-stakes knowledge check or practice. `shuffleOptions` defaults to false. When true, readers may vary option order and must preserve option IDs and scoring. Selection from pools, adaptive scheduling and generated variants are future extensions.
- `widget` identifies a namespaced type and numeric version, a JSON configuration object, and a Markdown fallback. A reader that lacks the declared type or version must show the fallback. In the current example, `carry.cls` version 1 uses an unmodified CLS v1 lesson shape for configuration. A Carry adapter would delegate response slots, focus and feedback to the existing engine and use the same legacy validators. [CLS engine contract](../authoring/README.md)

Paths in structured blocks are relative to the package root. Markdown links are relative to the containing document. Declared files must resolve to regular files within the package. Structured paths use ASCII letters, digits, underscores, periods, hyphens and internal spaces in segments separated by forward slashes. Empty, dot, dot-dot and drive or URL segments are disallowed. Course loading must never execute authored scripts. Readers must validate Markdown links separately before resolving local files or opening external links.

For example, from `reading/setup.md` the Markdown image path could be `../assets/room.png`. In a `media` block for that same file, use `assets/room.png`. The reference toolkit also rejects structured path segments with leading spaces, trailing spaces or trailing periods, and rejects symlinks that resolve outside the package. Keep asset filenames simple and match their case exactly.

| Media `kind` | File extensions | Reference reader behavior |
| --- | --- | --- |
| `image` | `.png`, `.jpg`, `.jpeg`, `.gif`, `.webp`, `.avif` | Embeds the image and uses `description` as its alternative text. |
| `pdf` | `.pdf` | Offers a local download. A cover is a normal PDF block at the beginning of a card. |
| `audio` | `.mp3`, `.ogg`, `.wav`, `.m4a` | Embeds a player and a collapsible transcript. |
| `video` | `.mp4`, `.webm` | Embeds a player, a caption track, and a collapsible transcript. Write the `.vtt` file in WebVTT format with a `WEBVTT` header and timed cues. |

For example, a video block might be:

```json
{
  "type": "media",
  "kind": "video",
  "src": "assets/demo.mp4",
  "description": "A short demonstration of carrying in column addition.",
  "transcript": "assets/demo-transcript.md",
  "captions": "assets/demo.vtt"
}
```

## Questions

Banks may be JSON or a single YAML 1.2 document using the core schema and a JSON-compatible data model. YAML keys must be unique strings. Explicit tags, anchors and aliases are disallowed. After parsing, both encodings have the same meaning.

| Object | Required fields | Optional fields |
| --- | --- | --- |
| Bank | `format`, `id`, nonempty `items` | |
| Item | `id`, `revision`, `prompt`, nonempty `parts` | `difficulty`, `demand`, `objectives` (objective IDs), `tags`, `explanationCard` |
| Part | `id`, `label`, `kind`, and the fields for that kind below | `hint`, `feedback`, `legacyId`, `distractorGroup` |
| Option | `id`, `label` | |

Use `single-choice` with `options` and exactly one ID in `correct`. Use `multiple-selection` with the same fields and all correct option IDs. Both need at least two options. Use `exact-text` with `normalization` (`trim` or `trim-ascii-case-insensitive`) and a nonempty `accepted` array of strings. Do not mix the fields for choice and text parts. Quote numeric-looking answers and labels in YAML, such as `'3'`.

The allowed `difficulty` values are `introductory`, `developing`, and `challenging`. The allowed `demand` values are `recognize`, `recall`, `apply`, and `explain`. A question block's `mode` must be `knowledge-check` or `practice`. The reference reader uses the same answer controls for both.

Prompts, part labels, option labels, hints and feedback are plain text. A prompt may insert named `{{part-id}}` markers for inline blanks. A prompt that uses markers must reference each part exactly once. Readers may also show the prompt with distinctly labeled fields in part order for accessibility. Without markers the fields follow the prompt.

- **Single choice.** Compare the selected option ID with the sole correct ID.
- **Multiple selection.** Compare selected IDs as a set with the complete set of correct IDs. Partial credit is outside the profile.
- **Exact text.** Trim leading and trailing whitespace using ECMAScript String trim semantics. In `trim-ascii-case-insensitive` mode, additionally map ASCII A-Z to a-z. Match against any accepted value after applying the same policy. Spaces inside the answer, accents, punctuation and mathematical equivalence are preserved.

Choice parts require at least one incorrect option. Options must have unique IDs and distinct labels after trimming and ASCII case folding. Accepted answers must be distinct under the part's normalization. Keep alternate valid answers out of the distractors. `distractorGroup` and `legacyId` are advisory authoring or migration metadata. The validator checks structure and references. Authors still review the educational meaning and ambiguity of each question.

Difficulty describes the challenge of the item. Demand describes the evidence it asks for. Review priority belongs to learner records and scheduling policy. Hints may be revealed before an attempt. Feedback should follow a checked response and link back to the explanation when one is referenced. Public static reading exports should omit scoring and accepted-answer data. Local self-checking packages expose that data to users who inspect their files.

## Validation boundary

A package is valid when both its schema and the cross-reference, path, and question invariants above hold. The reference toolkit checks declared file existence and media filename extensions. It treats widget config as JSON and leaves its semantics to the widget implementation. Link checking inside Markdown, media decoding, and editorial QA are separate checks. The reference toolkit applies a 1 MiB limit to parsed manifests, banks and widget configs.

The reference exporter additionally limits each Markdown file to 1 MiB and the total size of distinct embedded media sources to 32 MiB before encoding. It embeds supported local Markdown images, turns links to included readings into in-course links, and leaves explicit HTTP and HTTPS links for learners to open. Remote Markdown images are shown as alternative text. The reference reader supports the guided column-addition subset of `carry.cls` v1 and uses the declared fallback for other activities. A course's `language` labels its authored content. Built-in reader controls currently appear in English.

For complete repository examples, see [astronomy with audio](examples/astronomy/course.json), [recall with a YAML bank](examples/recall/course.json), and [guided addition with a fallback](examples/guided-math/course.json).
