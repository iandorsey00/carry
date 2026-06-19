// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["prealgebra"] = window.CarryPractice.sections["prealgebra"] || {};
  window.CarryPractice.sections["prealgebra"]["prealgebra.coordinate-plane"] = {
  "id": "prealgebra.coordinate-plane",
  "topic": "Pre-Algebra",
  "title": "Coordinate plane",
  "type": "concept",
  "figure": "coordinate-plane",
  "intro": [
    "A coordinate pair is written as (x, y).",
    "The x-coordinate moves left or right from the origin.",
    "The y-coordinate moves up or down after the x movement."
  ],
  "problems": [
    {
      "prompt": "What point is 3 right and 2 down from the origin?",
      "answer": "(3,-2)",
      "answers": [
        "(3,-2)",
        "3,-2"
      ],
      "hint": "Right is positive x. Down is negative y.",
      "label": "coordinate pair"
    },
    {
      "prompt": "In the point (-4, 5), what is the x-coordinate?",
      "answer": "-4",
      "hint": "The x-coordinate is the first number.",
      "label": "x coordinate"
    },
    {
      "prompt": "Which quadrant contains (2, -6)?",
      "answer": "IV",
      "answers": [
        "iv",
        "4",
        "quadrantiv",
        "quadrant4"
      ],
      "hint": "Positive x and negative y is Quadrant IV.",
      "label": "quadrant",
      "choices": [
        {
          "value": "IV",
          "label": "IV"
        },
        {
          "value": "I",
          "label": "I"
        },
        {
          "value": "II",
          "label": "II"
        },
        {
          "value": "III",
          "label": "III"
        }
      ]
    }
  ]
};
})();
