// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["arithmetic"] = window.CarryPractice.sections["arithmetic"] || {};
  window.CarryPractice.sections["arithmetic"]["arithmetic.mixed-review"] = {
  "id": "arithmetic.mixed-review",
  "topic": "Arithmetic",
  "title": "Mixed review",
  "type": "concept",
  "figure": "mixed-review",
  "intro": [
    "Mixed review asks you to choose the operation and method.",
    "Estimate first when the numbers are large.",
    "Check whether the result is reasonable before moving on."
  ],
  "problems": [
    {
      "prompt": "What is 38 + 47?",
      "answer": "85",
      "hint": "Add ones, then tens.",
      "label": "mixed addition"
    },
    {
      "prompt": "What is 9 x 12?",
      "answer": "108",
      "hint": "9 x 10 plus 9 x 2.",
      "label": "mixed multiplication"
    },
    {
      "prompt": "Use long division for 144 / 12.",
      "answer": "12",
      "hint": "Open the long division workspace if you want the full written method.",
      "label": "mixed division",
      "workspaceId": "arithmetic.long-division.3x1",
      "top": 144,
      "bottom": 12
    }
  ]
};
})();
