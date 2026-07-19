# Carry Roadmap

## Purpose

Carry is a local-first learning studio for returning to mathematics, continuing into advanced mathematics, and connecting mathematical ideas to physics and other quantitative subjects.

Carry began with a personal need: return to math after roughly fifteen years, recover forgotten foundations such as long division without embarrassment or unnecessary friction, and keep going as far as curiosity permits. The product should meet a learner exactly where they are without making them create an account, expose personal data, find paper, or decode a dense textbook interface.

The long-term aim is not merely broad lesson coverage. Carry should become a quiet, immersive cognitive apprenticeship: a beautiful place to remember, practice, understand, and eventually transfer mathematical ideas.

## Product Commitments

### Low-friction learning remains available

Productive struggle must never become compulsory friction.

Carry should always provide a direct path for a learner who wants to:

- open a lesson immediately
- see one next action
- ask for a hint at any time
- recover a forgotten procedure without judgment
- skip optional explanation or reflection prompts
- use Guided mode until they choose to remove support
- work without timers, streak pressure, or artificial scarcity

Deeper learning patterns may be offered progressively. Carry should invite effort, not withhold help to manufacture it.

### Scratchpad preserves its original capability

Carry Scratchpad may evolve into a richer notebook, lesson workspace, or new mathematical interaction paradigm. It must continue to offer a mode that accepts plain-text or LaTeX-ish math and renders it as readable mathematical notation.

The learner must retain the ability to:

- type plain text quickly
- switch between plain and rendered views
- duplicate a line with the existing keyboard shortcut
- copy and export plain text, LaTeX, Markdown, and rendered work
- use Scratchpad independently of lessons, checking, or AI

Plain-text rendering should remain fast, direct, and independently useful. Scratchpad should not silently solve the learner's work.

### Local-first remains structural

- No login or account should be required.
- Learner records, capabilities, attempts, settings, and notebooks stay in the browser.
- Export and import must include new learning data as the model grows.
- Personalization should remain understandable and inspectable rather than opaque.

### Beauty and immersion are functional

Carry should feel calm, precise, tactile, and spacious. Mathematical notation, diagrams, linked representations, focus movement, and feedback should make the learner feel present inside the work.

Immersion does not mean decorative spectacle. It means that controls recede, notation is excellent, figures respond coherently, and the next meaningful action is obvious.

## Product Paradigm

Carry should evolve from a library of lessons with answer checkers into a local-first cognitive apprenticeship.

The central progress question becomes:

> Can the learner recognize, choose, explain, and transfer this idea with decreasing assistance?

Lesson completion remains useful, but it is not treated as mastery.

## The Carry Learning Loop

Lessons may draw from this loop without forcing every phase into every activity:

1. **Orient**: reconnect the idea to prior knowledge and show why it matters.
2. **Predict**: estimate a method, direction, shape, or result before calculating.
3. **Attempt**: let the learner make a meaningful move before receiving the answer.
4. **Support**: respond to the actual impasse with the smallest useful hint.
5. **Explain**: ask about a conceptual hinge only when explanation adds value.
6. **Compare**: contrast methods, representations, or a plausible incorrect solution.
7. **Transfer**: change the context or representation so the method is not announced in advance.
8. **Retrieve**: return to the capability later among other material.

The low-friction path can omit optional phases. The deeper path should introduce them through progressive disclosure rather than a wall of settings.

## Roadmap Workstreams

### 1. Capability and attempt model

Build a small, transparent learner record around capabilities rather than opaque mastery scores.

Examples:

- identify a separable equation
- separate variables correctly
- set up both integrals
- integrate `1/y`
- preserve one arbitrary constant
- choose a resonant trial solution
- perform long division with a remainder

Record locally:

- workspace, problem, and step identifiers
- capability identifiers
- correct and incorrect attempts
- whether a hint was used
- whether success was independent
- last-practiced time

Do not infer ability from speed. Carry has no time pressure, and response latency should not become a hidden grade.

### 2. Misconception-aware feedback

Make common errors first-class authored data.

Each important step may define:

- a misconception identifier
- recognizable response forms
- a short diagnosis
- one recovery hint
- an optional contrasting example

Examples include forgetting the chain rule, omitting an absolute value, using a trial already contained in the complementary solution, reversing an inequality incorrectly, or confusing a theorem with its converse.

Feedback should address the learner's apparent model. It should not merely repeat the prompt or reveal the entire solution.

### 3. Guidance that fades

Turn Guided and Practice into stages of support rather than permanently separate copies of a lesson.

A typical progression:

- complete worked example
- missing-step example
- lightly labeled solution
- independent solution
- method-selection problem
- later mixed retrieval

The learner may keep Guided support enabled. Carry should recommend less support based on evidence, never remove it without a clear way back.

### 4. Method selection and mixed practice

Add sessions that require choosing a method rather than repeating the method named by the page.

Examples:

- separable or linear first-order equation
- homogeneous or forced second-order equation
- substitution or integration by parts
- permutation or combination
- direct proof or contradiction

Mixed practice should be introduced after the learner has enough foundation to make the distinction meaningful.

### 5. Representation fluency

Connect symbolic, graphical, numerical, verbal, geometric, and physical representations.

Priority interactions:

- equation changes update a graph or slope field
- draggable points update coordinates and formulas
- numerical tables connect to exact forms
- physical parameters update both a model and its behavior
- proof statements connect hypotheses, diagrams, and conclusions

Tools should increasingly act as embedded mathematical instruments, while remaining available as independent tools.

### 6. Selective self-explanation and comparison

Ask for explanation at conceptual hinges, not after every answer.

Low-friction formats include:

- choose the reason a step is valid
- identify the first invalid line
- complete one short explanation
- compare two solution methods
- predict what changes when a parameter changes

Free text should be optional unless constructing an explanation is itself the learning objective.

### 7. Scratchpad as an optional learning notebook

Expand Scratchpad without removing its plain-text rendering mode.

Possible additions:

- attach a scratchpad to a lesson or problem
- preserve an attempt before viewing a worked solution
- compare two derivations
- mark an unresolved line
- reopen relevant work during retrieval
- export a learner-owned portfolio

The larger Scratchpad experience may become substantially more capable, but the learner must always be able to choose the direct plain-text-to-rendered-math workflow.

### 8. Retrieval and durable transfer

Create a local review queue from capability evidence.

Early scheduling can remain simple and explainable:

- revisit a newly successful capability later
- prioritize capabilities that required hints
- interleave easily confused methods
- include occasional prerequisite refreshers
- stop repeating a capability after several independent successes, while allowing manual review

Carry should show why an item was suggested, such as “You used a hint here last time” or “This supports the next lesson.”

### 9. Learner agency

Expand beyond answering prepared questions:

- construct an example satisfying a definition
- construct a counterexample
- choose between valid methods
- repair an incorrect derivation
- vary a parameter and describe the effect
- create a problem for later review

The goal is mathematical authorship, not only response selection.

### 10. Evidence and quality

Evaluate learning features by durable capability rather than engagement alone.

Useful questions:

- Can the learner solve a changed problem later without hints?
- Can the learner choose the method when the lesson title does not reveal it?
- Can the learner diagnose a plausible error?
- Can the learner move between representations?
- Can a returning learner recover a forgotten foundation without friction or shame?

Do not optimize for streaks, time spent, clicks, or deliberately addictive behavior.

## Delivery Phases

### Current implementation status

- [x] Add a versioned, local-first learner evidence module.
- [x] Distinguish correct, incorrect, hinted, and without-hint attempts.
- [x] Include learner evidence in the existing progress backup automatically.
- [x] Add stable capability tags to the Separable Equations pilot.
- [x] Show a compact, transparent Status & Data summary.
- [x] Add optional contextual smaller steps to guided derivations, beginning with u-substitution.
- [x] Establish Carry Lesson Specification v1 with schema validation, deterministic compilation, and a responsive matrix-operation pilot.
- [x] Add a local-first Lesson Studio with a self-contained AI handoff, validation, compilation output, an immersive temporary custom-lesson session, and clearable history.
- [ ] Expand CLS only through tested semantic engines, beginning with digit grids and guided derivations.
- [ ] Add authored misconception recognition and recovery.
- [ ] Add fading guidance, transfer problems, and mixed retrieval.
- [ ] Extend capability evidence beyond the pilot only after the interaction proves useful.

### Phase 1: Learning record foundation

- Add a versioned local capability and attempt model.
- Include it in existing progress export and import.
- Add stable capability identifiers to a small pilot lesson.
- Record correct, incorrect, hinted, and independent attempts.
- Show a quiet, transparent summary in Status & Data.
- Keep all existing lesson flows unchanged.

Pilot: Differential Equations, beginning with Separable Equations.

### Phase 2: Misconception pilot

- Author the first misconception maps for Separable Equations and long division.
- Add one-step recovery hints.
- Add “find the first incorrect step” activities.
- Verify that incorrect inputs never stall or crash the checker.

### Phase 3: Fading and transfer

- Add support levels to the guided derivation engine.
- Offer a method-selection set across first-order differential equations.
- Add one transfer problem per pilot capability.
- Keep full Guided support immediately available.

### Phase 4: Local review

- Build an explainable review queue.
- Add mixed retrieval to the start or end of a study session.
- Show capability evidence without presenting a false precision score.
- Support restart, defer, and manual review.

### Phase 5: Linked representations

- Embed slope fields, solution curves, and parameter controls into the course.
- Connect arithmetic manipulatives and diagrams to symbolic steps where useful.
- Establish reusable contracts between lessons and tools.

### Phase 6: Notebook integration

- Allow optional links between lessons and scratchpads.
- Preserve standalone plain-text rendering as an available first-class Scratchpad mode.
- Add learner-owned comparison and export workflows.

### Phase 7: Broader curriculum adoption

- Extend the model only after the pilot demonstrates clear value.
- Prioritize arithmetic recovery, algebra transformations, calculus, statistics, proofs, and physics modeling.
- Avoid shallow capability tagging across the whole curriculum before feedback and review behavior are proven.

## Data Shape Direction

Authored practice may gradually add:

```js
{
  id: "stable.problem.id",
  capabilities: ["differential-equations.separable.integrate-log"],
  prerequisites: ["calculus.integrals.log-rule"],
  misconceptions: [
    {
      id: "drops-absolute-value",
      responses: ["ln(y)"],
      feedback: "The antiderivative of 1/y is ln|y| on intervals where y is nonzero."
    }
  ],
  transfer: ["differential-equations.models.exponential-growth"]
}
```

The exact schema should remain implementation-neutral where practical. Stable identifiers and export compatibility matter more than early sophistication.

## Near-Term Definition of Success

Carry has crossed into the next product paradigm when:

- a returning learner can still open a lesson and receive immediate, gentle help
- Carry can distinguish independent success from success after a hint
- at least one lesson responds to specific misconceptions
- guidance fades without becoming inaccessible
- a mixed problem asks the learner to choose a method
- a later review checks retention
- Scratchpad still renders plain-text math exactly as a standalone tool
- the experience remains calm, beautiful, keyboard-accessible, and entirely local-first

## Research Anchors

The roadmap is informed by established learning-science findings rather than a requirement to reproduce any single instructional system:

- [VanLehn, *The Relative Effectiveness of Human Tutoring, Intelligent Tutoring Systems, and Other Tutoring Systems*](https://doi.org/10.1080/00461520.2011.611369) supports careful step-level tutoring and feedback.
- [VanLehn et al., *Why Do Only Some Events Cause Learning During Human Tutoring?*](https://doi.org/10.1207/S1532690XCI2103_01) motivates support that responds to a genuine learner impasse.
- [Chi et al., *Eliciting Self-Explanations Improves Understanding*](https://doi.org/10.1016/0364-0213(94)90016-7) informs selective self-explanation.
- [Kapur, *Productive Failure in Learning Math*](https://doi.org/10.1111/cogs.12107) informs problem-first opportunities followed by instruction.
- [Rohrer and Taylor, *The Shuffling of Mathematics Problems Improves Learning*](https://eric.ed.gov/?id=EJ786797) informs interleaved method-selection practice.
- [Karpicke and Blunt, *Retrieval Practice Produces More Learning than Elaborative Studying with Concept Mapping*](https://doi.org/10.1126/science.1199327) informs later retrieval and reconstruction.

## Explicit Non-Goals

- mandatory accounts or cloud learner profiles
- opaque AI-generated mastery scores
- compulsory struggle or delayed hints
- timers, streak pressure, or punitive failure states
- replacing authored mathematical validation with unrestricted AI judgment
- silently solving work entered in Scratchpad
- sacrificing notation quality or interface calm for feature density
