// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["precalculus"] = window.CarryPractice.sections["precalculus"] || {};
  window.CarryPractice.sections["precalculus"]["precalculus.transformations"] = {
  "id": "precalculus.transformations",
  "topic": "Precalculus",
  "title": "Transformations",
  "type": "concept",
  "figure": "precalc-transformations",
  "intro": [
    "Transformations move or reshape a parent function.",
    "Adding outside the function moves the graph up or down.",
    "Changing the input inside the function moves the graph left or right."
  ],
  "problems": [
    {
      "prompt": "Compared with y = x^2, y = x^2 + 4 shifts which direction?",
      "answer": "up",
      "hint": "Adding 4 outside the square raises every output.",
      "label": "vertical shift"
    },
    {
      "prompt": "What is the vertex of y = (x - 2)^2 + 3?",
      "answer": "(2,3)",
      "answers": [
        "(2,3)",
        "2,3"
      ],
      "hint": "The form y = (x - h)^2 + k has vertex (h, k).",
      "label": "parabola vertex"
    },
    {
      "prompt": "Compared with y = x^2, y = (x - 5)^2 shifts right by how many units?",
      "answer": "5",
      "hint": "Inside subtraction shifts right.",
      "label": "horizontal shift"
    }
  ]
};
})();
