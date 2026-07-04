// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["geometry"] = window.CarryPractice.sections["geometry"] || {};
  window.CarryPractice.sections["geometry"]["geometry.angles"] = {
  "id": "geometry.angles",
  "topic": "Geometry",
  "title": "Angles",
  "type": "concept",
  "figure": "geometry-angles",
  "intro": [
    "An angle records an amount of turn — how far one direction has swung away from another.",
    "The degree is just a unit for turn: 360 for a full spin, 180 for an about-face, 90 for a square corner.",
    "Angles that fit together share their totals, which is why a straight line splits into pieces summing to 180°."
],
  "problems": [
    {
      "prompt": "Two adjacent angles make a straight line. One is 120 degrees. What is the other?",
      "answer": "60",
      "answers": [
        "60",
        "60degrees"
      ],
      "hint": "Straight line angles add to 180. Compute 180 - 120.",
      "label": "missing angle"
    },
    {
      "prompt": "What is the measure of a right angle?",
      "answer": "90",
      "answers": [
        "90",
        "90degrees"
      ],
      "hint": "A right angle is one quarter turn.",
      "label": "right angle measure"
    },
    {
      "prompt": "Angles of 35 degrees and 55 degrees add to what kind of angle?",
      "answer": "right",
      "answers": [
        "right",
        "rightangle",
        "90",
        "90degrees"
      ],
      "hint": "35 + 55 = 90.",
      "label": "angle type",
      "choices": [
        {
          "value": "right",
          "label": "right"
        },
        {
          "value": "acute",
          "label": "acute"
        },
        {
          "value": "obtuse",
          "label": "obtuse"
        }
      ]
    },
    {
      "prompt": "Two adjacent angles make a straight line. One is 45 degrees. What is the other?",
      "answer": "135",
      "answers": [
        "135",
        "135degrees"
      ],
      "hint": "Straight line angles add to 180.",
      "label": "missing angle",
      "feedback": "Subtract the known angle from 180."
    },
    {
      "prompt": "What kind of angle is 30 degrees: acute, right, or obtuse?",
      "answer": "acute",
      "hint": "Acute angles are less than 90 degrees.",
      "label": "angle type",
      "feedback": "Compare the measure to 90 degrees.",
      "choices": [
        {
          "value": "acute",
          "label": "acute"
        },
        {
          "value": "right",
          "label": "right"
        },
        {
          "value": "obtuse",
          "label": "obtuse"
        }
      ]
    },
    {
      "prompt": "What kind of angle is 140 degrees?",
      "answer": "obtuse",
      "hint": "Obtuse angles are greater than 90 and less than 180 degrees.",
      "label": "angle type",
      "feedback": "Classify by size.",
      "choices": [
        {
          "value": "obtuse",
          "label": "obtuse"
        },
        {
          "value": "acute",
          "label": "acute"
        },
        {
          "value": "right",
          "label": "right"
        }
      ]
    }
  ]
};
})();
