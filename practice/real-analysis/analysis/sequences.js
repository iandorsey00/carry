// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["real-analysis"] = window.CarryPractice.sections["real-analysis"] || {};
  window.CarryPractice.sections["real-analysis"]["real-analysis.sequences"] = {
  "id": "real-analysis.sequences",
  "topic": "Real Analysis",
  "title": "Sequences",
  "type": "concept",
  "figure": "real-sequences",
  "intro": [
    "A sequence is a list of numbers indexed by positive integers.",
    "Convergence means the terms eventually stay close to one value.",
    "The tail of a sequence matters more than its first few terms."
  ],
  "problems": [
    {
      "prompt": "What number does the sequence 1/n approach?",
      "answer": "0",
      "hint": "As n gets large, 1 divided by n gets close to 0.",
      "label": "sequence limit"
    },
    {
      "prompt": "Does the sequence 1, -1, 1, -1 converge?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "It keeps jumping between two values.",
      "label": "nonconvergent sequence"
    },
    {
      "prompt": "If every term after some point stays within epsilon of L, what value is the sequence approaching?",
      "answer": "l",
      "answers": [
        "l",
        "L"
      ],
      "hint": "The value named in the closeness condition is the limit.",
      "label": "limit name"
    }
  ]
};
})();
