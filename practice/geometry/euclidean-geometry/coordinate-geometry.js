// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["geometry"] = window.CarryPractice.sections["geometry"] || {};
  window.CarryPractice.sections["geometry"]["geometry.coordinate"] = {
  "id": "geometry.coordinate",
  "topic": "Geometry",
  "title": "Coordinate geometry",
  "type": "concept",
  "figure": "geometry-coordinate",
  "intro": [
    "Coordinate geometry studies shapes using points on a grid.",
    "Horizontal distance comes from the x-values.",
    "Vertical distance comes from the y-values."
  ],
  "problems": [
    {
      "prompt": "What is the horizontal distance from (1, 2) to (5, 2)?",
      "answer": "4",
      "hint": "The y-values match, so compare x-values: 5 - 1.",
      "label": "horizontal distance"
    },
    {
      "prompt": "What is the midpoint of (0, 0) and (6, 0)?",
      "answer": "(3,0)",
      "answers": [
        "(3,0)",
        "3,0"
      ],
      "hint": "Average the x-values and average the y-values.",
      "label": "midpoint"
    },
    {
      "prompt": "A rectangle has corners (0,0), (4,0), (4,3), and (0,3). What is its area?",
      "answer": "12",
      "hint": "The side lengths are 4 and 3.",
      "label": "coordinate rectangle area"
    }
  ]
};
})();
