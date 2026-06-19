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
    },
    {
      "prompt": "Simplify the ratio 8:12.",
      "answer": "2:3",
      "hint": "Divide both parts by 4.",
      "label": "simplified ratio",
      "feedback": "Divide both sides of the ratio by the same number."
    },
    {
      "prompt": "Complete the equivalent ratio: 5:6 = 10:__.",
      "answer": "12",
      "hint": "5 became 10 by multiplying by 2.",
      "label": "equivalent ratio",
      "feedback": "Use the same scale factor on both parts."
    },
    {
      "prompt": "If 3:7 scales by 5, what is the new second number?",
      "answer": "35",
      "hint": "Multiply the second part by 5.",
      "label": "scaled ratio part",
      "feedback": "Scale both parts by the same factor."
    },
    {
      "prompt": "Simplify 15:25.",
      "answer": "3:5",
      "hint": "Divide both parts by 5.",
      "label": "simplified ratio",
      "feedback": "Look for the greatest common factor."
    }
  ]
};
})();
