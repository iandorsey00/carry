// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["calculus"] = window.CarryPractice.sections["calculus"] || {};
  window.CarryPractice.sections["calculus"]["calculus.applications"] = {
  "id": "calculus.applications",
  "topic": "Calculus",
  "title": "Applications",
  "type": "concept",
  "figure": "calc-applications",
  "intro": [
    "Calculus earns its keep by answering two everyday questions: how fast is this changing, and how much has piled up?",
    "Derivatives turn position into velocity and find the peaks and valleys where the best answers live.",
    "Integrals run the other way, turning rates into totals — and the two operations undo each other."
],
  "problems": [
    {
      "prompt": "If s(t) = t^2, what is the velocity at t = 3?",
      "answer": "6",
      "hint": "Velocity is the derivative. The derivative of t^2 is 2t.",
      "label": "velocity from position"
    },
    {
      "prompt": "A rate is 5 units per second for 4 seconds. What total accumulates?",
      "answer": "20",
      "hint": "Constant rate times time gives total accumulation.",
      "label": "accumulated total",
      "choices": [
        {
          "value": "20",
          "label": "20"
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
      "prompt": "If a derivative changes from positive to negative, the function has a local what?",
      "answer": "maximum",
      "answers": [
        "maximum",
        "max"
      ],
      "hint": "Increasing then decreasing creates a peak.",
      "label": "local maximum",
      "choices": [
        {
          "value": "maximum",
          "label": "maximum"
        },
        {
          "value": "positive",
          "label": "positive"
        },
        {
          "value": "negative",
          "label": "negative"
        },
        {
          "value": "zero",
          "label": "zero"
        }
      ]
    },
    {
      "prompt": "If s(t) = t^2 gives position, what is the acceleration?",
      "answer": "2",
      "answers": [
        "2",
        "two"
      ],
      "hint": "Differentiate twice: 2t, then 2.",
      "label": "second derivative",
      "choices": [
        {
          "value": "2",
          "label": "2"
        },
        {
          "value": "2t",
          "label": "2t"
        },
        {
          "value": "t^2",
          "label": "t²"
        },
        {
          "value": "0",
          "label": "0"
        }
      ]
    },
    {
      "prompt": "A population grows steadily at 50 per year for 3 years. What is the total growth?",
      "answer": "150",
      "answers": [
        "150"
      ],
      "hint": "A constant rate accumulates as rate times time.",
      "label": "accumulate growth",
      "choices": [
        {
          "value": "150",
          "label": "150"
        },
        {
          "value": "50",
          "label": "50"
        },
        {
          "value": "53",
          "label": "53"
        },
        {
          "value": "450",
          "label": "450"
        }
      ]
    },
    {
      "prompt": "Where f'(x) = 0 and f''(x) > 0, the function has a local what?",
      "answer": "minimum",
      "answers": [
        "minimum",
        "min"
      ],
      "hint": "Flat ground curving upward is the bottom of a valley.",
      "label": "second derivative test",
      "choices": [
        {
          "value": "minimum",
          "label": "minimum"
        },
        {
          "value": "maximum",
          "label": "maximum"
        },
        {
          "value": "asymptote",
          "label": "asymptote"
        }
      ]
    },
    {
      "prompt": "If velocity is negative, the object is moving in which direction?",
      "answer": "backward",
      "answers": [
        "backward",
        "backwards",
        "negative direction"
      ],
      "hint": "The sign of velocity is its direction.",
      "label": "negative velocity",
      "choices": [
        {
          "value": "backward",
          "label": "backward"
        },
        {
          "value": "forward",
          "label": "forward"
        }
      ]
    },
    {
      "prompt": "Marginal cost is which derivative of the cost function?",
      "answer": "the first",
      "answers": [
        "the first",
        "first"
      ],
      "hint": "It asks how cost responds to one more unit — a rate.",
      "label": "marginal cost",
      "choices": [
        {
          "value": "the first",
          "label": "the first"
        },
        {
          "value": "the second",
          "label": "the second"
        }
      ]
    }

  ]
};
})();
