// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["differential-equations"] = window.CarryPractice.sections["differential-equations"] || {};
  window.CarryPractice.sections["differential-equations"]["differential-equations.second-order-models"] = {
  "id": "differential-equations.second-order-models",
  "topic": "Differential Equations",
  "title": "Second-order models",
  "type": "concept",
  "figure": "diff-eq-second-order",
  "intro": [
    "Second-order equations involve a second derivative.",
    "In motion, the second derivative of position is acceleration.",
    "Springs and oscillators are common second-order models."
  ],
  "problems": [
    {
      "prompt": "If <math>x(t)</math> is position, what does <math>x''(t)</math> represent?",
      "answer": "acceleration",
      "hint": "The first derivative is velocity; the second is acceleration.",
      "label": "second derivative meaning",
      "choices": [
        {
          "value": "acceleration",
          "label": "acceleration"
        },
        {
          "value": "mean",
          "label": "mean"
        },
        {
          "value": "median",
          "label": "median"
        },
        {
          "value": "mode",
          "label": "mode"
        }
      ]
    },
    {
      "prompt": "A spring that repeats back and forth is called an oscillation or a limit?",
      "answer": "oscillation",
      "answers": [
        "oscillation",
        "oscillator"
      ],
      "hint": "Repeated back-and-forth motion is oscillation.",
      "label": "spring motion",
      "choices": [
        {
          "value": "oscillation",
          "label": "oscillation"
        },
        {
          "value": "limit",
          "label": "limit"
        }
      ]
    },
    {
      "prompt": "Which derivative appears in a second-order equation: first or second?",
      "answer": "second",
      "answers": [
        "second",
        "2nd"
      ],
      "hint": "Second-order means the highest derivative is second.",
      "label": "order meaning",
      "choices": [
        {
          "value": "first",
          "label": "first"
        },
        {
          "value": "second",
          "label": "second"
        }
      ]
    },
    {
      "prompt": "In the spring model <math>x'' = -k x</math>, the force pulls toward what position?",
      "answer": "equilibrium",
      "answers": [
        "equilibrium",
        "the equilibrium",
        "0",
        "zero"
      ],
      "hint": "The minus sign points the pull back toward x = 0.",
      "label": "restoring force",
      "choices": [
        {
          "value": "equilibrium",
          "label": "the equilibrium position"
        },
        {
          "value": "away",
          "label": "away from equilibrium"
        },
        {
          "value": "maximum",
          "label": "the maximum displacement"
        }
      ]
    },
    {
      "prompt": "Which functions solve <math>x'' = -x</math>?",
      "answer": "sine and cosine",
      "answers": [
        "sine and cosine",
        "sin and cos",
        "sine, cosine"
      ],
      "hint": "Differentiate sine twice and watch the sign flip.",
      "label": "oscillator solutions",
      "choices": [
        {
          "value": "sine and cosine",
          "label": "sine and cosine"
        },
        {
          "value": "exponentials only",
          "label": "growing exponentials only"
        },
        {
          "value": "straight lines",
          "label": "straight lines"
        },
        {
          "value": "parabolas",
          "label": "parabolas"
        }
      ]
    },
    {
      "prompt": "If <math>x''(t)</math> is acceleration, what is <math>x'(t)</math>?",
      "answer": "velocity",
      "answers": [
        "velocity",
        "speed"
      ],
      "hint": "One derivative of position gives the rate position changes.",
      "label": "first derivative meaning",
      "choices": [
        {
          "value": "velocity",
          "label": "velocity"
        },
        {
          "value": "position",
          "label": "position"
        },
        {
          "value": "acceleration",
          "label": "acceleration"
        },
        {
          "value": "force",
          "label": "force"
        }
      ]
    },
    {
      "prompt": "How many initial conditions does a second-order model usually need?",
      "answer": "2",
      "answers": [
        "2",
        "two"
      ],
      "hint": "A swing needs both a starting position and a starting push.",
      "label": "initial conditions",
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
          "value": "0",
          "label": "none"
        },
        {
          "value": "4",
          "label": "four"
        }
      ]
    },
    {
      "prompt": "Adding friction to a spring model makes the swings do what over time?",
      "answer": "shrink",
      "answers": [
        "shrink",
        "decay",
        "get smaller"
      ],
      "hint": "Damping drains energy from the motion.",
      "label": "damping effect",
      "choices": [
        {
          "value": "shrink",
          "label": "shrink"
        },
        {
          "value": "grow",
          "label": "grow"
        },
        {
          "value": "stay the same",
          "label": "stay the same"
        }
      ]
    }
  ]
};
})();
