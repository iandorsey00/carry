// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["real-analysis"] = window.CarryPractice.sections["real-analysis"] || {};
  window.CarryPractice.sections["real-analysis"]["real-analysis.continuity"] = {
  "id": "real-analysis.continuity",
  "topic": "Real Analysis",
  "title": "Continuity",
  "type": "concept",
  "figure": "real-continuity",
  "intro": [
    "Continuity means the function value matches the limiting value.",
    "A function can fail continuity through a hole, jump, or vertical blow-up.",
    "On intervals, continuity supports powerful existence theorems."
  ],
  "problems": [
    {
      "prompt": "If lim f(x) as x approaches a equals f(a), is f continuous at a?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "This is the definition of continuity at a point.",
      "label": "continuity definition"
    },
    {
      "prompt": "If a graph has a jump at x = 2, is it continuous there?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "A jump means the nearby values do not meet smoothly at one value.",
      "label": "jump discontinuity"
    },
    {
      "prompt": "For f(x) = x + 1, is f continuous at x = 0?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "Linear functions are continuous everywhere.",
      "label": "linear continuity"
    }
  ]
};
})();
