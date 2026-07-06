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
    "Coordinate geometry gives every point a name — two numbers — so shapes can be measured by arithmetic.",
    "Horizontal questions read the x-values, vertical questions read the y-values, and distance combines both by Pythagoras.",
    "Once shapes are numbers, algebra and geometry become the same subject working two shifts."
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
    },
    {
      "prompt": "What is the vertical distance from (2, 1) to (2, 6)?",
      "answer": "5",
      "hint": "The x-values match, so compare y-values.",
      "label": "vertical distance",
      "feedback": "Subtract the smaller coordinate from the larger one."
    },
    {
      "prompt": "What is the midpoint of (2, 4) and (8, 4)?",
      "answer": "(5,4)",
      "answers": [
        "(5,4)",
        "5,4"
      ],
      "hint": "Average the x-values and average the y-values.",
      "label": "midpoint",
      "feedback": "Midpoint means average each coordinate."
    },
    {
      "prompt": "A rectangle has side lengths 5 and 2 on the coordinate grid. What is its area?",
      "answer": "10",
      "hint": "Area is length times width.",
      "label": "coordinate rectangle area",
      "feedback": "Use the side lengths after reading the grid."
    },
    {
      "prompt": "What is the distance from (0, 0) to (3, 4)?",
      "answer": "5",
      "answers": [
        "5",
        "five"
      ],
      "hint": "Pythagoras on the horizontal and vertical steps.",
      "label": "distance formula",
      "choices": [
        {
          "value": "5",
          "label": "5"
        },
        {
          "value": "7",
          "label": "7"
        },
        {
          "value": "12",
          "label": "12"
        },
        {
          "value": "3.5",
          "label": "3.5"
        }
      ]
    },
    {
      "prompt": "What is the midpoint of (2, 3) and (6, 7)?",
      "answer": "(4,5)",
      "answers": [
        "(4,5)",
        "(4, 5)"
      ],
      "hint": "Average the x-values and the y-values separately.",
      "label": "midpoint both axes",
      "choices": [
        {
          "value": "(4,5)",
          "label": "(4, 5)"
        },
        {
          "value": "(8,10)",
          "label": "(8, 10)"
        },
        {
          "value": "(4,4)",
          "label": "(4, 4)"
        },
        {
          "value": "(3,5)",
          "label": "(3, 5)"
        }
      ]
    }

  ]
};
})();
