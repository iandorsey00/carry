// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["real-analysis"] = window.CarryPractice.sections["real-analysis"] || {};
  window.CarryPractice.sections["real-analysis"]["real-analysis.differentiation"] = {
  "id": "real-analysis.differentiation",
  "topic": "Real Analysis",
  "title": "Differentiation",
  "type": "concept",
  "figure": "real-differentiation",
  "intro": [
    "Differentiability asks more of a function than continuity: not just an unbroken graph, but a well-defined slope at the point.",
    "The slope is a limit of difference quotients — average rates over shrinking intervals converging to one number.",
    "Every differentiable function is continuous, but corners like <math>|x|</math> at 0 prove the reverse is false."
],
  "problems": [
    {
      "prompt": "If a function is differentiable at a point, is it continuous there?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "Differentiability is stronger than continuity.",
      "label": "differentiability implies continuity",
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
      "prompt": "Does |x| have a derivative at x = 0?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "The left and right slopes at the corner disagree.",
      "label": "absolute value corner",
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
      "prompt": "What is the derivative of x^2?",
      "answer": "2x",
      "answers": [
        "2x",
        "2*x"
      ],
      "hint": "Use the power rule.",
      "label": "basic derivative"
    },
    {
      "prompt": "What is the derivative of 5x + 2?",
      "answer": "5",
      "answers": [
        "5",
        "five"
      ],
      "hint": "A line's derivative is its slope.",
      "label": "line derivative",
      "choices": [
        {
          "value": "5",
          "label": "5"
        },
        {
          "value": "2",
          "label": "2"
        },
        {
          "value": "5x",
          "label": "5x"
        },
        {
          "value": "7",
          "label": "7"
        }
      ]
    },
    {
      "prompt": "The difference quotient over an interval measures which kind of rate?",
      "answer": "average",
      "answers": [
        "average",
        "average rate"
      ],
      "hint": "The instantaneous rate only appears in the limit.",
      "label": "average rate",
      "choices": [
        {
          "value": "average",
          "label": "an average rate"
        },
        {
          "value": "instantaneous",
          "label": "an instantaneous rate"
        }
      ]
    },
    {
      "prompt": "The derivative is the limit of difference quotients as h approaches what?",
      "answer": "0",
      "answers": [
        "0",
        "zero"
      ],
      "hint": "The interval shrinks to nothing.",
      "label": "h to zero",
      "choices": [
        {
          "value": "0",
          "label": "0"
        },
        {
          "value": "1",
          "label": "1"
        },
        {
          "value": "infinity",
          "label": "infinity"
        },
        {
          "value": "a",
          "label": "a"
        }
      ]
    },
    {
      "prompt": "Is every continuous function differentiable?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "A corner is continuous but has no single slope.",
      "label": "corner counterexample",
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
      "prompt": "What is the derivative of a constant function?",
      "answer": "0",
      "answers": [
        "0",
        "zero"
      ],
      "hint": "A flat graph has slope zero everywhere.",
      "label": "constant derivative",
      "choices": [
        {
          "value": "0",
          "label": "0"
        },
        {
          "value": "1",
          "label": "1"
        },
        {
          "value": "the constant",
          "label": "the constant itself"
        }
      ]
    }

  ]
};
})();
