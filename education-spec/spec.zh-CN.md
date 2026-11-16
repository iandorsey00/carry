# Carry 教育规范 0.1

[English](spec.md) · [JSON Schema](schema/profile-0.1.schema.json)

当前版本处于实验阶段。课程包声明 `education-course/0.1`，题库声明 `education-bank/0.1`。这两个版本号标识课程包和题库的格式，独立于 Carry 应用的版本。

本规范用**必须**表示要求，**应**表示建议，**可以**表示可选做法。JSON Schema 定义字段名、允许的值和数据结构。本文说明这些字段的含义和额外约束。

## 将 Markdown 指南制作成课程

本示例制作一门本地课程，包含一张阅读卡、一张嵌入的图片和一张独立的单选题卡。示例采用 Carry 的公开截图和新编写的练习文本。各字段的定义见 [JSON Schema](schema/profile-0.1.schema.json)。以下步骤说明如何组织这些文件。

### 1. 划分卡片并设计练习

按教学要点拆分指南，每张阅读卡讲清一个知识点。紧接着安排一道短题，让学习者运用刚读到的内容。设置看似合理的干扰项，给出指向下一步的提示，并在反馈中说明答案为什么正确。请熟悉主题的人审核题目和答案。

把希望学习者看到的内容写入各自的 Markdown 文件。若原稿含有文件头元数据、封面声明或指向缺失文件的链接，应单独核对。0.1 版通过下文的清单定义课程元数据和卡片结构。Markdown 标题本身不会创建卡片。

把任务交给同事或 AI 编写时，请一并提供本规范、目标学员、原始指南及获准使用的媒体文件。说明课程语言、文件可存放的位置，以及需要可编辑的课程包、离线 HTML，还是两者都需要。原稿中的操作指示应作为教学内容处理。遇到缺失的资源或待核实的说法，请标出供审核。若指南描述实际操作流程，应保留其前提条件、注意事项和步骤顺序。

### 2. 创建课程包文件

采用以下目录结构。目录名可按需要调整，但根目录中的清单必须命名为 `course.json`。

```text
column-addition/
  course.json
  reading.md
  questions.yaml
  assets/
    addition-grid.png
```

需要在本机检出仓库，并安装 Node.js 和 npm。在 macOS 或 Linux 的终端中，从仓库根目录运行以下命令。使用其他终端时，执行等效的目录创建和文件复制操作。

```sh
course_dir="$(mktemp -d)/column-addition"
mkdir -p "$course_dir/assets"
cp docs/portfolio/screenshots/01-guided-long-addition.png "$course_dir/assets/addition-grid.png"
```

在 `$course_dir` 中创建以下三个文本文件，使用 UTF-8 编码。

**`course.json`**

```json
{
  "format": "education-course/0.1",
  "id": "column-addition",
  "revision": 1,
  "title": "竖式加法复习",
  "language": "zh-CN",
  "license": "MIT",
  "banks": ["questions.yaml"],
  "lessons": [{
    "id": "addition",
    "title": "按数位相加",
    "cards": [
      {
        "id": "regroup",
        "title": "满十进一",
        "blocks": [
          { "type": "markdown", "src": "reading.md" },
          {
            "type": "media",
            "kind": "image",
            "src": "assets/addition-grid.png",
            "description": "Carry 的竖式加法界面，显示按数位对齐的方格和进位行。"
          }
        ]
      },
      {
        "id": "check-ones",
        "title": "知识检查",
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
从个位加起。如果两个数字相加等于或超过 10，就把结果的个位写在得数行，再向十位进 1。
```

**`questions.yaml`**

```yaml
format: education-bank/0.1
id: addition-checks
items:
  - id: write-the-ones
    revision: 1
    prompt: '两个加数的个位分别是 6 和 7。得数的个位应该填什么？'
    explanationCard: regroup
    parts:
      - id: answer
        label: '请选择一个答案'
        kind: single-choice
        options:
          - { id: three, label: '3' }
          - { id: one, label: '1' }
          - { id: thirteen, label: '13' }
        correct: [three]
        hint: '先算 6 加 7，再看结果的个位。'
        feedback: '个位写 3，向十位进 1。'
```

在 `banks` 中填写题库的**文件名**，在题目块的 `bank` 中填写**题库 ID**。题目块的 `items` 填写**题目 ID**，题目的 `correct` 填写**选项 ID**，不能填写选项文字或顺序编号。`explanationCard` 填写阅读卡的 ID。要每张卡只显示一道题，应让卡片只包含一个题目块，并让该块只引用一道题。每增加一道题，就创建一张新卡。同一张卡引用的多道题或多个题目块可以一起显示。

### 3. 验证并导出

继续在同一个终端中，从仓库根目录运行：

```sh
npm --prefix education-spec ci
npm --prefix education-spec run validate -- "$course_dir"
npm --prefix education-spec run read -- "$course_dir" "$course_dir/../column-addition.html"
```

同一次检出只需安装一次依赖。安装后可以离线验证和导出。两个命令都接收含有 `course.json` 的目录。导出命令也会验证课程包，而且要求指定尚不存在的 `.html` 文件。用浏览器打开命令输出的路径。

### 4. 检查导出结果

- 课程首先打开阅读卡，正文后显示嵌入图片。
- 点击 **Next**（下一张）后显示一道题。打开提示，分别检查错误选项和正确选项，再通过 **Review explanation**（查看讲解）返回阅读卡。
- 断网打开 HTML，确认图片仍能显示。含有其他媒体的课程也应在学习者常用的浏览器中测试播放、字幕、文字稿和下载。
- 分享前检查源文件和导出内容。确认有权分发文字、媒体及截图中可见的信息。内部材料应存放在获准的位置。HTML 中内嵌了资源和答案，适合作为练习材料分享。保留课程源目录以便后续修订。

遇到**找不到题库**时，核对题目块的 `bank` 与题库的 `id`。遇到**找不到题目**或**找不到正确选项**时，逐级检查 ID。遇到**文件缺失**时，按[内容块与资源](#内容块与资源)核对路径的起点。遇到结构错误时，根据报错中的文件和字段路径查阅 [JSON Schema](schema/profile-0.1.schema.json)。


## 课程包与标识符

每门课程对应一个目录，根目录中必须有 `course.json`。清单包含标题、语言、许可证、修订号和按顺序排列的课节，也可包含学习目标和题库路径。每个课节由一组有序的学习卡片组成，每张卡片由一组有序的内容块组成。阅读器必须按编写顺序呈现内容，并应允许学习者返回前面的卡片。阅读器可以选择每次只显示一张卡片。

| 对象 | 必填字段 | 可选字段 |
| --- | --- | --- |
| 课程 | `format`、`id`、`revision`、`title`、`language`、`license`、`lessons` | `objectives`、`banks` |
| 学习目标 | `id`、`description` | |
| 课节 | `id`、`title`、`cards` | |
| 卡片 | `id`、`title`、`blocks` | `objectives`（学习目标 ID） |

`lessons`、`cards` 和 `blocks` 数组中都至少要有一个条目。未使用的可选字段可以省略。上述对象中的未知字段和 `null` 值均无法通过 Schema 验证。修订号从 `1` 开始，必须为整数。使用稳定的 ASCII ID，例如 `setup-check` 或 `setup.check1`。ID 以小写字母开头，其余部分可含小写字母和数字，各段之间以单个连字符或点分隔。引用 ID 时区分大小写。语言标签可用 `en-US` 或 `zh-CN` 等。许可证或权利声明应反映实际材料的授权情况。示例中的 `MIT` 适用于示例本身，改编其他材料时应核对其授权。

学习目标、课节、卡片和题库的 ID 必须在整门课程中按各自类别保持唯一。题目 ID 在所属题库中唯一，作答项 ID 在所属题目中唯一，选项 ID 在所属作答项中唯一。卡片和题目引用的学习目标必须定义在本课程内。讲解引用必须指向本课程中的一张卡片。

修改文案时应保留原 ID。发布改动后的课程包时，递增课程修订号。题目的含义或判分规则发生变化时，递增该题的修订号。如果记录作答结果，应保留课程、题库、题目和作答项的 ID，以及适用的修订号。阅读器可以按自己的存储方式在本地跟踪学习进度。

## 内容块与资源

| `type` | 除 `type` 外的必填字段 | 条件必填或可选字段 |
| --- | --- | --- |
| `markdown` | 以 `.md` 结尾的 `src` | |
| `media` | `kind`、`src`、`description` | 音频和视频必填 `transcript`（`.md`）。视频还必填 `captions`（`.vtt`）。 |
| `questions` | `bank`、非空的 `items`、`mode` | 布尔值 `shuffleOptions`，默认为 `false`。 |
| `widget` | `widget`、正整数 `version`、`config`（`.json`）、`fallback`（`.md`） | |

- `markdown` 引用 UTF-8 编码的 CommonMark 文件。阅读器必须禁用原始 HTML，并应让正文在纯文本编辑器中也能阅读。补充资料应使用相对 Markdown 链接。需要渲染器的公式应附上可直接阅读的说明。此草案把复杂数学语法留给交互组件的数据格式处理。
- `media` 引用本地图片、PDF、音频或视频，并提供能说明内容的描述。音频和视频必须附有 Markdown 文字稿，视频还必须附有 WebVTT 字幕。基本支持的文件扩展名包括 PNG、JPEG、GIF、WebP、AVIF、PDF、MP3、Ogg、WAV、M4A、MP4 和 WebM。不同阅读器支持的编解码器可能不同。
- `questions` 引用一个题库，明确列出题目及其顺序，并指定用途为低压力的知识检查或练习。`shuffleOptions` 默认为 `false`。设为 `true` 时，阅读器可以改变选项顺序，但必须保留选项 ID 和判分规则。从题池抽题、自适应复习调度和自动生成变式属于未来扩展。
- `widget` 声明带命名空间的组件类型、数字版本号、JSON 配置对象和 Markdown 替代内容。阅读器若不支持所声明的类型或版本，必须显示替代内容。当前示例中的 `carry.cls` 第 1 版直接使用原有的 CLS v1 课节结构作为配置。Carry 的适配器可将作答框、键盘焦点和反馈交给已有的交互引擎，并沿用现有验证器。[CLS 引擎约定](../authoring/README.md)

结构化内容块中的路径相对于课程包根目录。Markdown 链接相对于所在文档。声明的文件必须解析为课程包内的普通文件。结构化路径用正斜杠分隔各段，每段使用 ASCII 字母、数字、下划线、点、连字符和段内空格。禁止使用空段、`.`、`..`、驱动器标识或 URL。加载课程时严禁执行作者提供的脚本。在解析 Markdown 链接指向的本地文件或打开外部链接之前，阅读器必须单独验证这些链接。

例如，在 `reading/setup.md` 内引用图片，可以使用 `../assets/room.png`。在 `media` 块中引用同一文件，则使用 `assets/room.png`。参考工具还会拒绝以空格开头、以空格或点结尾的结构化路径段，以及指向课程包外部的符号链接。资源文件名宜简单，并与引用路径的大小写一致。

| 媒体 `kind` | 文件扩展名 | 参考阅读器的呈现方式 |
| --- | --- | --- |
| `image` | `.png`、`.jpg`、`.jpeg`、`.gif`、`.webp`、`.avif` | 嵌入图片，以 `description` 作为替代文本。 |
| `pdf` | `.pdf` | 提供本地下载。若需提供封面，可在卡片开头放置普通 PDF 块。 |
| `audio` | `.mp3`、`.ogg`、`.wav`、`.m4a` | 嵌入播放器，并提供可展开的文字稿。 |
| `video` | `.mp4`、`.webm` | 嵌入播放器、字幕轨道和可展开的文字稿。`.vtt` 文件按 WebVTT 格式编写，含 `WEBVTT` 文件头和带时间的字幕段。 |

以下是一个视频块示例：

```json
{
  "type": "media",
  "kind": "video",
  "src": "assets/demo.mp4",
  "description": "演示竖式加法进位的短视频。",
  "transcript": "assets/demo-transcript.md",
  "captions": "assets/demo.vtt"
}
```

## 题目

题库可以使用 JSON，也可以使用单个 YAML 1.2 文档。YAML 必须使用核心模式（core schema）和与 JSON 兼容的数据模型。键必须为唯一的字符串。禁止使用显式标签、锚点和别名。两种格式经解析后的含义相同。

| 对象 | 必填字段 | 可选字段 |
| --- | --- | --- |
| 题库 | `format`、`id`、非空的 `items` | |
| 题目 | `id`、`revision`、`prompt`、非空的 `parts` | `difficulty`、`demand`、`objectives`（学习目标 ID）、`tags`、`explanationCard` |
| 作答项 | `id`、`label`、`kind`，以及下文所列的该题型字段 | `hint`、`feedback`、`legacyId`、`distractorGroup` |
| 选项 | `id`、`label` | |

单选题使用 `single-choice`，填写 `options`，并在 `correct` 中只列出一个 ID。多选题使用 `multiple-selection`，填写同样的字段，并在 `correct` 中列出所有正确选项的 ID。两种题型都至少需要两个选项。文本题使用 `exact-text`，填写 `normalization`（`trim` 或 `trim-ascii-case-insensitive`）和非空的字符串数组 `accepted`。选择题与文本题的专用字段不能混用。YAML 中形似数字的答案或标签应加引号，例如 `'3'`。

`difficulty` 可取 `introductory`、`developing` 或 `challenging`。`demand` 可取 `recognize`、`recall`、`apply` 或 `explain`。题目块的 `mode` 必须为 `knowledge-check` 或 `practice`。参考阅读器对这两种模式使用相同的作答控件。

题干、作答项标签、选项标签、提示和反馈均为纯文本。题干可以用带名称的 `{{part-id}}` 标记表示行内填空。使用这类标记时，每个作答项都必须在题干中恰好引用一次。为满足无障碍需求，阅读器也可以呈现题干，并按作答项的顺序提供标签明确的输入控件。题干未使用标记时，输入控件放在题干之后。

- **单选。** 将选中的选项 ID 与唯一正确选项的 ID 进行比较。
- **多选。** 将选中的选项 ID 作为一个集合，与完整的正确选项 ID 集合进行比较。本规范不定义部分得分。
- **精确文本匹配。** 按 ECMAScript 字符串 `trim` 的规则去掉首尾空白。使用 `trim-ascii-case-insensitive` 时，再将 ASCII 大写字母 A–Z 转为小写 a–z。对输入和接受的答案应用同一规则，匹配任一答案即可。此过程保留答案内部的空格、变音符号和标点，也不进行数学等价变换。

选择题的每个作答项必须至少有一个错误选项。选项 ID 必须唯一。选项标签去掉首尾空白并统一 ASCII 字母大小写后，仍必须互不相同。可接受的答案应用该作答项的归一化规则后也必须互不相同。其他正确答案不能充当干扰项。`distractorGroup` 和 `legacyId` 是供编写或迁移参考的元数据。验证器检查数据结构和引用。作者仍需审核题意与选项是否明确，有无歧义。

难度表示题目有多具挑战性。作答要求表示题目希望通过作答看到哪方面的能力。复习优先级由学习记录和调度策略决定。可以在作答前显示提示。阅读器应在检查答案后提供反馈。如果题目引用了讲解卡片，反馈应提供返回该卡片的链接。公开发布的静态阅读版本应省略判分信息和可接受答案。可在本地检查答案的课程包会将这些信息包含在文件中，查看文件的人可以读到它们。

## 验证范围

课程包必须同时通过 JSON Schema 验证，并满足上述引用、路径和题目约束。参考工具会检查声明的文件是否存在，以及媒体文件的扩展名是否受支持。工具把组件配置作为 JSON 处理，具体配置的含义由组件实现负责。Markdown 内部的链接检查、媒体解码和内容审校需另行完成。参考工具对解析的每个清单、题库和组件配置文件设有 1 MiB 的大小上限。

参考导出工具还将单个 Markdown 文件的大小限制为 1 MiB，内嵌媒体源文件去重后、编码前的总大小限制为 32 MiB。它会嵌入 Markdown 中受支持的本地图片，把指向已纳入课程的阅读材料的链接转换为课程内链接，并保留供学习者主动打开的 HTTP 和 HTTPS 链接。外部 Markdown 图片以替代文本显示。参考阅读器支持 `carry.cls` v1 中的引导式竖式加法，其他活动显示其声明的替代内容。课程的 `language` 标记作者提供的内容语言。阅读器内置控件目前使用英文。

仓库中的完整示例包括[含音频的天文课](examples/astronomy/course.json)、[使用 YAML 题库的回忆练习](examples/recall/course.json)和[带替代内容的引导式加法](examples/guided-math/course.json)。
