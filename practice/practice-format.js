/**
 * Carry practice module handoff
 *
 * Purpose:
 * - Give AI and human editors one predictable place to add or revise practice.
 * - Separate authored learning content from the app shell.
 * - Keep special interactive practice modes modular instead of burying their
 *   state machines in the main app file forever.
 *
 * Current state:
 * - Lesson question data lives in curriculum-shaped files such as
 *   practice/arithmetic/whole-numbers/place-value.js.
 * - Long-operation workspace definitions live beside their arithmetic lessons.
 * - Equation helpers, graph games, and other rich interactions still keep some
 *   renderer and validator code inline in ../app.js while they are migrated.
 *
 * Recommended migration target:
 * - Use practice/{topic}/{section}/{lesson}.js for reusable question/answer data.
 * - Keep curriculum-specific special mode definitions beside their lesson file.
 * - Move shared validators/renderers into shared engine modules only when more
 *   than one lesson needs them.
 * - Keep app-wide routing, localStorage, import/export, and page layout outside
 *   practice modules.
 *
 * Why commented JavaScript modules instead of Markdown, XML, or plain JSON:
 * - Comments are allowed, so authoring guidance can live beside the data.
 * - Trailing commas and multiline strings are easy for humans and AI agents.
 * - Static hosts can serve modules directly later without a backend database.
 * - Plain JSON remains best for learner progress export, not authored curriculum.
 *
 * Question authoring rules:
 * - Give every question a stable id. Do not reuse ids after deleting questions.
 * - Keep prompts short and concrete.
 * - Use <math>...</math> only around math expressions that should render as math.
 * - Provide 2-4 choices when the question is multiple-choice.
 * - Use two choices for yes/no, true/false, and X-or-Y prompts.
 * - Use three choices only when the prompt itself names three alternatives.
 * - Use four choices only when every distractor is plausible and from the same family.
 * - Use two choices when four plausible distractors would become silly or misleading.
 * - Use typed answers only when there is one clear answer or a small accepted set.
 * - Put the learning nudge in hint, not in the wrong answer choices.
 * - feedback should explain the rule after the learner answers correctly.
 *
 * Engine authoring rules:
 * - Export a small engine object with problem generation, validation, hint, and
 *   rendering hooks.
 * - Keep engine state serializable when practical, so local-first progress can
 *   save and restore work.
 * - Keep DOM-specific rendering thin; prefer returning structured cells, marks,
 *   overlays, and validation states for the app shell to render.
 */

export const practiceQuestionExample = {
  id: "math.statistics.center-and-spread.mean-location.001",
  subject: "math",
  section: "statistics",
  lesson: "center-and-spread",
  mode: "multiple-choice",
  prompt: "In a balanced data set, where is <math>\\bar{x}</math>?",
  hint: "The mean is the balance point of the values.",
  feedback: "<math>\\bar{x}</math> names the mean, the balance point of the data.",
  choices: [
    {
      value: "center",
      label: "near the center",
      correct: true,
    },
    {
      value: "edge",
      label: "at an edge",
      correct: false,
    },
  ],
};

export const typedQuestionExample = {
  id: "math.algebra.linear-equations.solve-one-step.001",
  subject: "math",
  section: "algebra",
  lesson: "linear-equations",
  mode: "typed",
  prompt: "Solve <math>x + 4 = 9</math>.",
  hint: "Undo adding 4 by subtracting 4 from both sides.",
  feedback: "Subtracting 4 from both sides leaves <math>x = 5</math>.",
  answers: ["5", "x=5", "x = 5"],
};

export const specialPracticeEngineExample = {
  id: "math.arithmetic.long-multiplication.engine",
  subject: "math",
  section: "arithmetic",
  lesson: "long-multiplication",
  kind: "engine",
  generateProblem({ random } = {}) {
    const next = typeof random === "function" ? random : Math.random;
    return {
      top: 100 + Math.floor(next() * 900),
      bottom: 100 + Math.floor(next() * 900),
    };
  },
  createInitialState(problem) {
    return {
      problem,
      activeStep: 0,
      checkedCells: {},
    };
  },
  validateStep({ state, value }) {
    return {
      correct: false,
      nextState: state,
      feedback: `Replace this example with ${state.problem.top} × ${state.problem.bottom} validation.`,
      value,
    };
  },
  hint({ state }) {
    return `Use the active column for ${state.problem.top} × ${state.problem.bottom}.`;
  },
};
