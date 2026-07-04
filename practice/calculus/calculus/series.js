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
    "A series dares to add infinitely many numbers — and sometimes the total is an ordinary finite value.",
    "The trick is to watch partial sums: add the first few terms and see whether the running total settles or runs away.",
    "Geometric series settle exactly when the ratio stays strictly between -1 and 1; that single test powers many others."
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
