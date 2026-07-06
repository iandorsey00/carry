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
    },
    {
      "prompt": "T(x, y) = (y, x) swaps the coordinates. What line does it reflect across?",
      "answer": "y = x",
      "answers": [
        "y = x",
        "y=x",
        "the line y = x"
      ],
      "hint": "Points on that line are their own swaps.",
      "label": "swap reflection",
      "choices": [
        {
          "value": "y = x",
          "label": "the line y = x"
        },
        {
          "value": "the x-axis",
          "label": "the x-axis"
        },
        {
          "value": "the y-axis",
          "label": "the y-axis"
        }
      ]
    },
    {
      "prompt": "What does T(x, y) = (3x, 3y) do to areas?",
      "answer": "multiplies them by 9",
      "answers": [
        "multiplies them by 9",
        "9",
        "times 9"
      ],
      "hint": "Both directions stretch by 3, and 3 × 3 = 9.",
      "label": "area scaling",
      "choices": [
        {
          "value": "multiplies them by 9",
          "label": "multiplies them by 9"
        },
        {
          "value": "multiplies them by 3",
          "label": "multiplies them by 3"
        },
        {
          "value": "multiplies them by 6",
          "label": "multiplies them by 6"
        }
      ]
    },
    {
      "prompt": "Is a translation, which shifts every point over, a linear transformation?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "Linear maps must keep the origin fixed.",
      "label": "translation",
      "choices": [
        {
          "value": "yes",
          "label": "Yes"
        },
        {
          "value": "no",
          "label": "No"
        }
      ]
    },
    {
      "prompt": "If T(1, 0) = (2, 0) and T(0, 1) = (0, 2), what is T(1, 1)?",
      "answer": "(2,2)",
      "answers": [
        "(2,2)",
        "(2, 2)"
      ],
      "hint": "Linearity lets the basis answers add.",
      "label": "linearity adds",
      "choices": [
        {
          "value": "(2,2)",
          "label": "(2, 2)"
        },
        {
          "value": "(1,1)",
          "label": "(1, 1)"
        },
        {
          "value": "(4,4)",
          "label": "(4, 4)"
        },
        {
          "value": "(2,0)",
          "label": "(2, 0)"
        }
      ]
    },
    {
      "prompt": "A 90° counterclockwise rotation sends (1, 0) to what?",
      "answer": "(0,1)",
      "answers": [
        "(0,1)",
        "(0, 1)"
      ],
      "hint": "East turns to north.",
      "label": "rotate basis",
      "choices": [
        {
          "value": "(0,1)",
          "label": "(0, 1)"
        },
        {
          "value": "(0,-1)",
          "label": "(0, -1)"
        },
        {
          "value": "(-1,0)",
          "label": "(-1, 0)"
        },
        {
          "value": "(1,1)",
          "label": "(1, 1)"
        }
      ]
    }

  ]
};
})();
