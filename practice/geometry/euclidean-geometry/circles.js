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
    "A circle is perfect fairness: every point on it keeps exactly the same distance — the radius — from the center.",
    "That one distance controls everything else: the diameter is twice it, and the circumference is π times the diameter.",
    "Formally, <math>C = πd</math> and <math>A = πr^2</math> — the same π in both, for every circle ever drawn."
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
    },
    {
      "prompt": "Using A = πr², what is the area of a circle with radius 3?",
      "answer": "9π",
      "answers": [
        "9π",
        "9pi",
        "9 pi"
      ],
      "hint": "Square the radius first.",
      "label": "circle area",
      "choices": [
        {
          "value": "9π",
          "label": "9π"
        },
        {
          "value": "6π",
          "label": "6π"
        },
        {
          "value": "3π",
          "label": "3π"
        },
        {
          "value": "12π",
          "label": "12π"
        }
      ]
    },
    {
      "prompt": "If a circle's radius doubles, its area multiplies by what?",
      "answer": "4",
      "answers": [
        "4",
        "four"
      ],
      "hint": "Area grows with the square of the radius.",
      "label": "area scaling",
      "choices": [
        {
          "value": "4",
          "label": "4"
        },
        {
          "value": "2",
          "label": "2"
        },
        {
          "value": "8",
          "label": "8"
        },
        {
          "value": "π",
          "label": "π"
        }
      ]
    }

  ]
};
})();
