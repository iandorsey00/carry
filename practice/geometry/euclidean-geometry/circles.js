// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["geometry"] = window.CarryPractice.sections["geometry"] || {};
  window.CarryPractice.sections["geometry"]["geometry.circles"] = {
  "id": "geometry.circles",
  "topic": "Geometry",
  "title": "Circles",
  "type": "concept",
  "figure": "geometry-circle",
  "intro": [
    "The radius runs from the center of a circle to its edge.",
    "The diameter runs all the way across through the center.",
    "Circumference is the distance around the circle."
  ],
  "problems": [
    {
      "prompt": "A circle has radius 4. What is its diameter?",
      "answer": "8",
      "hint": "The diameter is twice the radius.",
      "label": "diameter"
    },
    {
      "prompt": "A circle has diameter 10. What is its radius?",
      "answer": "5",
      "hint": "The radius is half the diameter.",
      "label": "radius"
    },
    {
      "prompt": "Using C = πd, what is the circumference of a circle with diameter 6?",
      "answer": "6π",
      "answers": [
        "6π",
        "6pi",
        "6*pi",
        "6×π"
      ],
      "hint": "Leave the answer exact: π times the diameter is 6π.",
      "label": "circumference"
    },
    {
      "prompt": "A circle has radius 7. What is its diameter?",
      "answer": "14",
      "hint": "The diameter is twice the radius.",
      "label": "diameter",
      "feedback": "Double the radius."
    },
    {
      "prompt": "A circle has diameter 18. What is its radius?",
      "answer": "9",
      "hint": "The radius is half the diameter.",
      "label": "radius",
      "feedback": "Halve the diameter."
    },
    {
      "prompt": "Using C = πd, what is the circumference of a circle with diameter 8?",
      "answer": "8π",
      "answers": [
        "8π",
        "8pi",
        "8*pi",
        "8×π"
      ],
      "hint": "Leave the answer exact as 8π.",
      "label": "circumference",
      "feedback": "Multiply π by the diameter."
    }
  ]
};
})();
