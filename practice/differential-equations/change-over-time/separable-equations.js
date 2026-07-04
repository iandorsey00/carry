// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["differential-equations"] = window.CarryPractice.sections["differential-equations"] || {};
  window.CarryPractice.sections["differential-equations"]["differential-equations.separable"] = {
  "id": "differential-equations.separable",
  "topic": "Differential Equations",
  "title": "Separable equations",
  "type": "concept",
  "figure": "diff-eq-separable",
  "intro": [
    "A separable differential equation can move all y terms to one side and all x terms to the other.",
    "After separating variables, integrate both sides.",
    "A constant of integration appears after integrating."
  ],
  "problems": [
    {
      "prompt": "In <math>dy/dx = 3x y</math>, which factor belongs with <math>dy</math> when separating: <math>1/y</math> or <math>3x</math>?",
      "answer": "1/y",
      "answers": [
        "1/y",
        "\\frac{1}{y}",
        "one over y"
      ],
      "hint": "Move y to the left so the y terms stay with dy.",
      "label": "separable y side",
      "choices": [
        {
          "value": "1/y",
          "label": "1/y"
        },
        {
          "value": "3x",
          "label": "3x"
        }
      ]
    },
    {
      "prompt": "After writing <math>(1/y)dy = 3x dx</math>, what operation comes next?",
      "answer": "integrate",
      "answers": [
        "integrate",
        "integration"
      ],
      "hint": "Separate first, then integrate both sides.",
      "label": "separable next move"
    },
    {
      "prompt": "What constant is usually added after indefinite integration?",
      "answer": "c",
      "answers": [
        "c",
        "+c",
        "C",
        "+C"
      ],
      "hint": "Use the constant of integration.",
      "label": "constant of integration"
    },
    {
      "prompt": "Is <math>dy/dx = x + y</math> separable?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "A sum of x and y cannot be split into an x-factor times a y-factor.",
      "label": "not separable",
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
      "prompt": "Is <math>dy/dx = x y</math> separable?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "The right side is already an x-factor times a y-factor.",
      "label": "product separable",
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
      "prompt": "After separating <math>dy/dx = y</math>, what is the integral of <math>1/y</math> with respect to y?",
      "answer": "ln|y|",
      "answers": [
        "ln|y|",
        "ln y",
        "ln(y)",
        "ln |y|"
      ],
      "hint": "Think of the derivative that produces 1/y.",
      "label": "log integral",
      "choices": [
        {
          "value": "ln|y|",
          "label": "ln |y| + C"
        },
        {
          "value": "1/y^2",
          "label": "1/y² + C"
        },
        {
          "value": "y^2/2",
          "label": "y²/2 + C"
        },
        {
          "value": "e^y",
          "label": "e^y + C"
        }
      ]
    },
    {
      "prompt": "When is the constant C pinned down to a single value?",
      "answer": "initial condition",
      "answers": [
        "initial condition",
        "with an initial condition",
        "an initial condition"
      ],
      "hint": "One known point on the curve selects one member of the family.",
      "label": "pinning c",
      "choices": [
        {
          "value": "initial condition",
          "label": "when an initial condition is given"
        },
        {
          "value": "never",
          "label": "never"
        },
        {
          "value": "always",
          "label": "it is always 0"
        }
      ]
    },
    {
      "prompt": "Separating variables turns one differential equation into how many integrals?",
      "answer": "2",
      "answers": [
        "2",
        "two"
      ],
      "hint": "One integral for each side of the equation.",
      "label": "two integrals",
      "choices": [
        {
          "value": "2",
          "label": "two"
        },
        {
          "value": "1",
          "label": "one"
        },
        {
          "value": "3",
          "label": "three"
        },
        {
          "value": "0",
          "label": "none"
        }
      ]
    }
  ]
};
})();
