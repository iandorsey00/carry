// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["precalculus"] = window.CarryPractice.sections["precalculus"] || {};
  window.CarryPractice.sections["precalculus"]["precalculus.sequences"] = {
  "id": "precalculus.sequences",
  "topic": "Precalculus",
  "title": "Sequences",
  "type": "concept",
  "figure": "precalc-sequences",
  "intro": [
    "A sequence is a numbered list with a rule — and the rule, not the list, is the real object of study.",
    "Arithmetic sequences climb by a fixed difference; geometric sequences scale by a fixed ratio.",
    "That one distinction — add versus multiply — separates steady growth from explosive growth."
],
  "problems": [
    {
      "prompt": "What is the common difference in 4, 7, 10, 13?",
      "answer": "3",
      "hint": "Subtract neighboring terms.",
      "label": "common difference"
    },
    {
      "prompt": "What is the next term in 5, 10, 20, 40?",
      "answer": "80",
      "hint": "Each term is doubled.",
      "label": "geometric next term"
    },
    {
      "prompt": "In a geometric sequence 3, 12, 48, what is the common ratio?",
      "answer": "4",
      "hint": "Divide 12 by 3.",
      "label": "common ratio"
    }
  ]
};
})();
