// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["differential-equations"] = window.CarryPractice.sections["differential-equations"] || {};
  window.CarryPractice.sections["differential-equations"]["differential-equations.slope-fields"] = {
  "id": "differential-equations.slope-fields",
  "topic": "Differential Equations",
  "title": "Slope fields",
  "type": "concept",
  "figure": "diff-eq-slope-fields",
  "intro": [
    "A differential equation describes a relationship involving a function and its derivatives.",
    "A slope field draws the local slope at many points.",
    "A solution curve follows the small slope marks without crossing them sharply."
  ],
  "problems": [
    {
      "prompt": "For <math>dy/dx = x</math>, what slope appears when <math>x = 0</math>?",
      "answer": "0",
      "hint": "Substitute x = 0 into the right side.",
      "label": "slope field zero"
    },
    {
      "prompt": "For <math>dy/dx = y</math>, what slope appears when <math>y = 2</math>?",
      "answer": "2",
      "hint": "The slope equals the current y-value.",
      "label": "slope field y"
    },
    {
      "prompt": "A solution curve should follow the small slope marks or ignore them?",
      "answer": "follow",
      "answers": [
        "follow",
        "follows",
        "follow them"
      ],
      "hint": "The marks show the derivative at nearby points.",
      "label": "solution curve behavior",
      "choices": [
        {
          "value": "follow",
          "label": "follow the slope marks"
        },
        {
          "value": "ignore them",
          "label": "ignore them"
        }
      ]
    },
    {
      "prompt": "For <math>dy/dx = x</math>, do all points with the same x share the same slope mark?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "The rule only mentions x, so height does not matter.",
      "label": "columns of equal slope",
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
      "prompt": "For <math>dy/dx = y</math>, where are the slope marks flat?",
      "answer": "y = 0",
      "answers": [
        "y = 0",
        "y=0",
        "on the x-axis"
      ],
      "hint": "Flat means slope 0; set the right side to zero.",
      "label": "flat marks",
      "choices": [
        {
          "value": "y = 0",
          "label": "along y = 0"
        },
        {
          "value": "x = 0",
          "label": "along x = 0"
        },
        {
          "value": "y = 1",
          "label": "along y = 1"
        },
        {
          "value": "nowhere",
          "label": "nowhere"
        }
      ]
    },
    {
      "prompt": "For <math>dy/dx = x</math>, what slope appears when <math>x = -3</math>?",
      "answer": "-3",
      "answers": [
        "-3"
      ],
      "hint": "Substitute the x-value straight into the rule.",
      "label": "negative slope mark",
      "choices": [
        {
          "value": "-3",
          "label": "-3"
        },
        {
          "value": "3",
          "label": "3"
        },
        {
          "value": "0",
          "label": "0"
        },
        {
          "value": "9",
          "label": "9"
        }
      ]
    },
    {
      "prompt": "Can two different solution curves of one slope field ever cross each other?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "At a crossing point they would need two different slopes at once.",
      "label": "no crossings",
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
      "prompt": "A slope field shows the slopes of solutions or the solutions themselves?",
      "answer": "slopes",
      "answers": [
        "slopes",
        "the slopes"
      ],
      "hint": "The field is the instruction sheet; curves still have to be traced.",
      "label": "field meaning",
      "choices": [
        {
          "value": "slopes",
          "label": "the slopes of solutions"
        },
        {
          "value": "solutions",
          "label": "the solutions themselves"
        }
      ]
    }
  ]
};
})();
