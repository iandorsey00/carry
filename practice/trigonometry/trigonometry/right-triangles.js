// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["trigonometry"] = window.CarryPractice.sections["trigonometry"] || {};
  window.CarryPractice.sections["trigonometry"]["trigonometry.right-triangles"] = {
  "id": "trigonometry.right-triangles",
  "topic": "Trigonometry",
  "title": "Right triangles",
  "type": "concept",
  "figure": "trig-right-triangle",
  "intro": [
    "Right-triangle trigonometry compares side lengths relative to an acute angle.",
    "Sine uses opposite over hypotenuse.",
    "Cosine uses adjacent over hypotenuse, and tangent uses opposite over adjacent."
  ],
  "problems": [
    {
      "prompt": "In a right triangle, opposite = 3 and hypotenuse = 5. What is sin θ?",
      "answer": "3/5",
      "hint": "Sine is opposite over hypotenuse.",
      "label": "sine ratio"
    },
    {
      "prompt": "In the same triangle, adjacent = 4 and hypotenuse = 5. What is cos θ?",
      "answer": "4/5",
      "hint": "Cosine is adjacent over hypotenuse.",
      "label": "cosine ratio"
    },
    {
      "prompt": "If opposite = 3 and adjacent = 4, what is tan θ?",
      "answer": "3/4",
      "hint": "Tangent is opposite over adjacent.",
      "label": "tangent ratio"
    }
  ]
};
})();
