// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["arithmetic"] = window.CarryPractice.sections["arithmetic"] || {};
  window.CarryPractice.sections["arithmetic"]["arithmetic.estimation"] = {
  "id": "arithmetic.estimation",
  "topic": "Arithmetic",
  "title": "Estimation and checking",
  "type": "concept",
  "figure": "estimation",
  "intro": [
    "Estimate before or after a calculation to catch unreasonable answers.",
    "Round to friendly numbers when exact precision is not needed.",
    "Use the estimate as a guardrail, not as the final answer."
  ],
  "problems": [
    {
      "prompt": "Estimate 398 + 201 by rounding to hundreds.",
      "answer": "600",
      "hint": "398 is about 400, and 201 is about 200.",
      "label": "rounded sum"
    },
    {
      "prompt": "Estimate 49 x 6 using 50 x 6.",
      "answer": "300",
      "hint": "50 x 6 is a close check.",
      "label": "estimated product"
    },
    {
      "prompt": "Is 812 - 398 closer to 400 or 600?",
      "answer": "400",
      "hint": "812 - 400 is about 412.",
      "label": "closer estimate"
    }
  ]
};
})();
