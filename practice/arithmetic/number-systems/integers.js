// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["arithmetic"] = window.CarryPractice.sections["arithmetic"] || {};
  window.CarryPractice.sections["arithmetic"]["arithmetic.integers"] = {
  "id": "arithmetic.integers",
  "topic": "Arithmetic",
  "title": "Integers",
  "type": "concept",
  "figure": "integer-line",
  "intro": [
    "Integers include positive numbers, zero, and negative numbers.",
    "On a number line, moving right increases the value and moving left decreases it.",
    "Subtraction can be understood as distance and direction."
  ],
  "problems": [
    {
      "prompt": "What is -3 + 8?",
      "answer": "5",
      "hint": "Start at -3 and move 8 steps right.",
      "label": "integer sum"
    },
    {
      "prompt": "What is 4 - 9?",
      "answer": "-5",
      "hint": "You move 9 steps left from 4.",
      "label": "integer difference"
    },
    {
      "prompt": "Which is greater: -2 or -7?",
      "answer": "-2",
      "hint": "The greater number is farther right on the number line.",
      "label": "greater integer",
      "choices": [
        {
          "value": "-2",
          "label": "-2"
        },
        {
          "value": "-7",
          "label": "-7"
        }
      ]
    }
  ]
};
})();
