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
    "A linear transformation moves every point of the plane in one coordinated sweep: rotations, reflections, stretches, and shears.",
    "Linearity is a fairness rule: lines stay lines, the origin stays put, and scaling before or after the map gives the same result.",
    "Because of that rule, a matrix holding the images of the basis vectors captures the entire transformation."
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
