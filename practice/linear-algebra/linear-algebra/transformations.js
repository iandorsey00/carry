// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["linear-algebra"] = window.CarryPractice.sections["linear-algebra"] || {};
  window.CarryPractice.sections["linear-algebra"]["linear-algebra.transformations"] = {
  "id": "linear-algebra.transformations",
  "topic": "Linear Algebra",
  "title": "Transformations",
  "type": "concept",
  "figure": "linear-transformations",
  "intro": [
    "A linear transformation sends vectors to vectors.",
    "Matrices can represent linear transformations.",
    "Scaling, rotation, reflection, and shear are common geometric examples."
  ],
  "problems": [
    {
      "prompt": "The transformation T(x, y) = (2x, 2y) does what to lengths?",
      "answer": "doubles",
      "answers": [
        "doubles",
        "double",
        "multipliesby2",
        "scalesby2"
      ],
      "hint": "Both coordinates are multiplied by 2.",
      "label": "scaling effect"
    },
    {
      "prompt": "What does T(x, y) = (-x, y) reflect across?",
      "answer": "yaxis",
      "answers": [
        "yaxis",
        "y-axis",
        "theyaxis"
      ],
      "hint": "Only the x-coordinate changes sign.",
      "label": "reflection axis"
    },
    {
      "prompt": "If T(1, 0) = (0, 1), where does the first basis vector land?",
      "answer": "(0,1)",
      "answers": [
        "(0,1)",
        "0,1"
      ],
      "hint": "The prompt gives the image of (1, 0) directly.",
      "label": "basis image"
    }
  ]
};
})();
