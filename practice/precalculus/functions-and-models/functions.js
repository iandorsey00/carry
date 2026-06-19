// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["precalculus"] = window.CarryPractice.sections["precalculus"] || {};
  window.CarryPractice.sections["precalculus"]["precalculus.functions"] = {
  "id": "precalculus.functions",
  "topic": "Precalculus",
  "title": "Functions",
  "type": "concept",
  "figure": "precalc-functions",
  "intro": [
    "A function assigns each input exactly one output.",
    "Function notation names the rule and the input, such as f(x).",
    "Graphs, tables, and formulas can describe the same function."
  ],
  "problems": [
    {
      "prompt": "If f(x) = 2x + 1, what is f(3)?",
      "answer": "7",
      "hint": "Replace x with 3: 2 times 3 plus 1.",
      "label": "evaluate a function"
    },
    {
      "prompt": "Does a function allow one input to have two outputs?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "Each input can have only one output.",
      "label": "function definition"
    },
    {
      "prompt": "For the point (4, 9), what is the output?",
      "answer": "9",
      "hint": "In an ordered pair, the output is the y-value.",
      "label": "function output"
    }
  ]
};
})();
