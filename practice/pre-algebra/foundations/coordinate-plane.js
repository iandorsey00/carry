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
    },
    {
      "prompt": "Which quadrant contains (-3, -7)?",
      "answer": "III",
      "answers": [
        "III",
        "3",
        "iii"
      ],
      "hint": "Both coordinates negative means lower left.",
      "label": "quadrant three",
      "choices": [
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
        },
        {
          "value": "IV",
          "label": "IV"
        }
      ]
    },
    {
      "prompt": "What are the coordinates of the origin?",
      "answer": "(0,0)",
      "answers": [
        "(0,0)",
        "(0, 0)"
      ],
      "hint": "Where the two axes cross.",
      "label": "origin",
      "choices": [
        {
          "value": "(0,0)",
          "label": "(0, 0)"
        },
        {
          "value": "(1,1)",
          "label": "(1, 1)"
        },
        {
          "value": "(0,1)",
          "label": "(0, 1)"
        }
      ]
    },
    {
      "prompt": "Where does the point (0, 4) sit?",
      "answer": "on the y-axis",
      "answers": [
        "on the y-axis",
        "y-axis"
      ],
      "hint": "A zero x-coordinate means no horizontal step.",
      "label": "on axis",
      "choices": [
        {
          "value": "on the y-axis",
          "label": "on the y-axis"
        },
        {
          "value": "on the x-axis",
          "label": "on the x-axis"
        },
        {
          "value": "in quadrant I",
          "label": "in quadrant I"
        }
      ]
    },
    {
      "prompt": "Which quadrant contains (-2, 5)?",
      "answer": "II",
      "answers": [
        "II",
        "2",
        "ii"
      ],
      "hint": "Left of the y-axis, above the x-axis.",
      "label": "quadrant two",
      "choices": [
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
        },
        {
          "value": "IV",
          "label": "IV"
        }
      ]
    },
    {
      "prompt": "What point is 4 left and 1 up from the origin?",
      "answer": "(-4,1)",
      "answers": [
        "(-4,1)",
        "(-4, 1)"
      ],
      "hint": "Left is negative x; up is positive y.",
      "label": "walk the grid",
      "choices": [
        {
          "value": "(-4,1)",
          "label": "(-4, 1)"
        },
        {
          "value": "(4,-1)",
          "label": "(4, -1)"
        },
        {
          "value": "(1,-4)",
          "label": "(1, -4)"
        },
        {
          "value": "(-1,4)",
          "label": "(-1, 4)"
        }
      ]
    }

  ]
};
})();
