// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["trigonometry"] = window.CarryPractice.sections["trigonometry"] || {};
  window.CarryPractice.sections["trigonometry"]["trigonometry.unit-circle"] = {
  "id": "trigonometry.unit-circle",
  "topic": "Trigonometry",
  "title": "Unit circle",
  "type": "concept",
  "figure": "trig-unit-circle",
  "intro": [
    "The unit circle is trigonometry's master diagram: one circle of radius 1 that stores every sine and cosine at once.",
    "Walk an angle θ around from the positive x-axis and your landing point is exactly <math>(\\cos θ, \\sin θ)</math>.",
    "Special angles land on exact coordinates, which is where memorable values like 1/2 and <math>\\frac{\\sqrt{2}}{2}</math> come from."
],
  "problems": [
    {
      "prompt": "On the unit circle, what is cos 0?",
      "answer": "1",
      "hint": "At angle 0, the point is (1, 0).",
      "label": "cosine at zero",
      "choices": [
        {
          "value": "1",
          "label": "1"
        },
        {
          "value": "force",
          "label": "force"
        },
        {
          "value": "energy",
          "label": "energy"
        },
        {
          "value": "momentum",
          "label": "momentum"
        }
      ]
    },
    {
      "prompt": "On the unit circle, what is sin 0?",
      "answer": "0",
      "hint": "At angle 0, the y-coordinate is 0.",
      "label": "sine at zero",
      "choices": [
        {
          "value": "0",
          "label": "0"
        },
        {
          "value": "force",
          "label": "force"
        },
        {
          "value": "energy",
          "label": "energy"
        },
        {
          "value": "momentum",
          "label": "momentum"
        }
      ]
    },
    {
      "prompt": "At π/2, what is the point on the unit circle?",
      "answer": "(0,1)",
      "answers": [
        "(0,1)",
        "0,1"
      ],
      "hint": "π/2 is the top of the circle.",
      "label": "unit circle point",
      "choices": [
        {
          "value": "(0,1)",
          "label": "(0,1)"
        },
        {
          "value": "force",
          "label": "force"
        },
        {
          "value": "energy",
          "label": "energy"
        },
        {
          "value": "momentum",
          "label": "momentum"
        }
      ]
    },
    {
      "prompt": "On the unit circle, what is sin π/2?",
      "answer": "1",
      "hint": "At π/2, the point is at the top of the circle.",
      "label": "sine at pi over two",
      "feedback": "Sine is the y-coordinate on the unit circle.",
      "choices": [
        {
          "value": "1",
          "label": "1"
        },
        {
          "value": "force",
          "label": "force"
        },
        {
          "value": "energy",
          "label": "energy"
        },
        {
          "value": "momentum",
          "label": "momentum"
        }
      ]
    },
    {
      "prompt": "At π, what is the point on the unit circle?",
      "answer": "(-1,0)",
      "answers": [
        "(-1,0)",
        "-1,0"
      ],
      "hint": "π is the leftmost point on the unit circle.",
      "label": "unit circle point",
      "feedback": "Move halfway around the circle from (1, 0).",
      "choices": [
        {
          "value": "(-1,0)",
          "label": "(-1,0)"
        },
        {
          "value": "force",
          "label": "force"
        },
        {
          "value": "energy",
          "label": "energy"
        },
        {
          "value": "momentum",
          "label": "momentum"
        }
      ]
    },
    {
      "prompt": "On the unit circle, what is cos π?",
      "answer": "-1",
      "hint": "At π, the x-coordinate is -1.",
      "label": "cosine at pi",
      "feedback": "Cosine is the x-coordinate.",
      "choices": [
        {
          "value": "-1",
          "label": "-1"
        },
        {
          "value": "force",
          "label": "force"
        },
        {
          "value": "energy",
          "label": "energy"
        },
        {
          "value": "momentum",
          "label": "momentum"
        }
      ]
    }
  ]
};
})();
