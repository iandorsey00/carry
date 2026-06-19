// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["arithmetic"] = window.CarryPractice.sections["arithmetic"] || {};
  window.CarryPractice.sections["arithmetic"]["arithmetic.ratios"] = {
  "id": "arithmetic.ratios",
  "topic": "Arithmetic",
  "title": "Ratios",
  "type": "concept",
  "figure": "ratio-bars",
  "intro": [
    "A ratio compares two amounts.",
    "Equivalent ratios keep the same comparison while scaling both parts.",
    "Use multiplication or division on both parts to make an equivalent ratio."
  ],
  "problems": [
    {
      "prompt": "Simplify the ratio 6:9.",
      "answer": "2:3",
      "hint": "Divide both parts by 3.",
      "label": "simplified ratio"
    },
    {
      "prompt": "If 2:5 scales by 4, what is the new first number?",
      "answer": "8",
      "hint": "Multiply the first part by 4.",
      "label": "scaled ratio part"
    },
    {
      "prompt": "Complete the equivalent ratio: 3:4 = 12:__.",
      "answer": "16",
      "hint": "3 became 12 by multiplying by 4.",
      "label": "equivalent ratio"
    }
  ]
};
})();
