// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["arithmetic"] = window.CarryPractice.sections["arithmetic"] || {};
  window.CarryPractice.sections["arithmetic"]["arithmetic.number-sense"] = {
  "id": "arithmetic.number-sense",
  "topic": "Arithmetic",
  "title": "Number sense",
  "type": "concept",
  "figure": "number-line",
  "intro": [
    "Use position, size, and nearby friendly numbers to reason before calculating.",
    "Compare numbers by the largest place where they differ.",
    "Round only when an estimate is enough."
  ],
  "problems": [
    {
      "prompt": "Which is larger: 409 or 490?",
      "answer": "490",
      "hint": "Compare the tens digits after the hundreds match.",
      "label": "larger number"
    },
    {
      "prompt": "What is 398 closest to: 300, 400, or 500?",
      "answer": "400",
      "hint": "398 is only 2 away from 400.",
      "label": "closest hundred"
    },
    {
      "prompt": "Fill the missing number: 125, 150, 175, __.",
      "answer": "200",
      "hint": "Each step adds 25.",
      "label": "next number"
    }
  ]
};
})();
