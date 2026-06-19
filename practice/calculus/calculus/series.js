// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["calculus"] = window.CarryPractice.sections["calculus"] || {};
  window.CarryPractice.sections["calculus"]["calculus.series"] = {
  "id": "calculus.series",
  "topic": "Calculus",
  "title": "Series",
  "type": "concept",
  "figure": "calc-series",
  "intro": [
    "A sequence lists terms; a series adds them.",
    "Partial sums show how much has accumulated so far.",
    "Some infinite series settle toward a finite value."
  ],
  "problems": [
    {
      "prompt": "What is the next term in 1/2, 1/4, 1/8?",
      "answer": "1/16",
      "hint": "Each term is half the previous term.",
      "label": "geometric term"
    },
    {
      "prompt": "What is the infinite sum 1 + 1/2 + 1/4 + ...?",
      "answer": "2",
      "hint": "This geometric series has first term 1 and ratio 1/2.",
      "label": "geometric sum"
    },
    {
      "prompt": "A geometric series converges when the absolute value of r is less than what number?",
      "answer": "1",
      "hint": "The ratio must have size less than 1.",
      "label": "convergence condition"
    }
  ]
};
})();
