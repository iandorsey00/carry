// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["real-analysis"] = window.CarryPractice.sections["real-analysis"] || {};
  window.CarryPractice.sections["real-analysis"]["real-analysis.limits"] = {
  "id": "real-analysis.limits",
  "topic": "Real Analysis",
  "title": "Limits",
  "type": "concept",
  "figure": "real-limits",
  "intro": [
    "Real analysis takes the limit idea calculus relies on and makes it airtight enough to survive any challenge.",
    "The value at the point is deliberately ignored: only nearby behavior counts, which is why a hole cannot break a limit.",
    "Epsilon-delta is tolerance language: for every output tolerance ε, some input tolerance δ must deliver it."
],
  "problems": [
    {
      "prompt": "As x approaches 3, what does 2x approach?",
      "answer": "6",
      "hint": "Use the nearby input value: 2 times 3.",
      "label": "function limit"
    },
    {
      "prompt": "Can a limit exist even if the function is undefined at that point?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "Limits depend on nearby values, not only the value at the point.",
      "label": "punctured limit",
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
      "prompt": "In epsilon-delta language, epsilon controls closeness of outputs or inputs?",
      "answer": "outputs",
      "answers": [
        "outputs",
        "output"
      ],
      "hint": "Epsilon measures vertical closeness to the limiting value.",
      "label": "epsilon role",
      "choices": [
        {
          "value": "outputs",
          "label": "outputs"
        },
        {
          "value": "inputs",
          "label": "inputs"
        }
      ]
    },
    {
      "prompt": "As x approaches 4, what does <math>x^2</math> approach?",
      "answer": "16",
      "answers": [
        "16",
        "sixteen"
      ],
      "hint": "Squaring is continuous, so substitute.",
      "label": "square limit",
      "choices": [
        {
          "value": "16",
          "label": "16"
        },
        {
          "value": "8",
          "label": "8"
        },
        {
          "value": "4",
          "label": "4"
        },
        {
          "value": "12",
          "label": "12"
        }
      ]
    },
    {
      "prompt": "In epsilon-delta language, delta controls closeness of what?",
      "answer": "inputs",
      "answers": [
        "inputs",
        "the inputs"
      ],
      "hint": "Epsilon guards outputs; delta answers with inputs.",
      "label": "delta inputs",
      "choices": [
        {
          "value": "inputs",
          "label": "inputs"
        },
        {
          "value": "outputs",
          "label": "outputs"
        }
      ]
    },
    {
      "prompt": "If the left and right limits differ at a point, does the two-sided limit exist?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "The outputs need one shared destination.",
      "label": "one sided disagree",
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
      "prompt": "Can a function equal its limit at the point itself?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "That match is exactly continuity — allowed, just not required.",
      "label": "match allowed",
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
      "prompt": "As x approaches 0, what does 5x approach?",
      "answer": "0",
      "answers": [
        "0",
        "zero"
      ],
      "hint": "Five times something tiny is still tiny.",
      "label": "scaled limit",
      "choices": [
        {
          "value": "0",
          "label": "0"
        },
        {
          "value": "5",
          "label": "5"
        },
        {
          "value": "1",
          "label": "1"
        },
        {
          "value": "infinity",
          "label": "infinity"
        }
      ]
    }

  ]
};
})();
