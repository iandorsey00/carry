// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["differential-equations"] = window.CarryPractice.sections["differential-equations"] || {};
  window.CarryPractice.sections["differential-equations"]["differential-equations.first-order-models"] = {
  "id": "differential-equations.first-order-models",
  "topic": "Differential Equations",
  "title": "First-order models",
  "type": "concept",
  "figure": "diff-eq-first-order",
  "intro": [
    "First-order models use a first derivative to describe change.",
    "Exponential growth has rate proportional to the current amount.",
    "Equilibrium occurs when the derivative is zero."
  ],
  "problems": [
    {
      "prompt": "In <math>dP/dt = kP</math>, the rate is proportional to what quantity?",
      "answer": "p",
      "answers": [
        "p",
        "P",
        "population",
        "the population"
      ],
      "hint": "The right side is k times P.",
      "label": "growth proportional amount"
    },
    {
      "prompt": "If <math>dP/dt = 0</math>, is P changing at that instant?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "A zero derivative means no instantaneous change.",
      "label": "equilibrium change",
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
      "prompt": "In <math>dT/dt = -k(T - A)</math>, what value is the surrounding temperature?",
      "answer": "a",
      "answers": [
        "a",
        "A"
      ],
      "hint": "A is the ambient or surrounding temperature.",
      "label": "newton cooling ambient"
    },
    {
      "prompt": "In <math>dP/dt = kP</math> with positive k, does P grow or decay?",
      "answer": "grow",
      "answers": [
        "grow",
        "grows",
        "growth"
      ],
      "hint": "A positive rate proportional to a positive amount keeps increasing it.",
      "label": "growth direction",
      "choices": [
        {
          "value": "grow",
          "label": "grow"
        },
        {
          "value": "decay",
          "label": "decay"
        }
      ]
    },
    {
      "prompt": "Which family solves <math>dP/dt = kP</math>?",
      "answer": "exponential",
      "answers": [
        "exponential",
        "exponentials",
        "exponential functions"
      ],
      "hint": "Only one family is its own derivative up to a constant factor.",
      "label": "exponential solution",
      "choices": [
        {
          "value": "exponential",
          "label": "exponential functions"
        },
        {
          "value": "linear",
          "label": "linear functions"
        },
        {
          "value": "quadratic",
          "label": "quadratic functions"
        },
        {
          "value": "periodic",
          "label": "periodic functions"
        }
      ]
    },
    {
      "prompt": "In Newton's cooling model, coffee at temperature <math>T = A</math> does what?",
      "answer": "stays the same",
      "answers": [
        "stays the same",
        "nothing",
        "stays"
      ],
      "hint": "Substitute T = A: the right side becomes zero.",
      "label": "cooling equilibrium",
      "choices": [
        {
          "value": "stays the same",
          "label": "stays the same"
        },
        {
          "value": "keeps cooling",
          "label": "keeps cooling"
        },
        {
          "value": "heats up",
          "label": "heats up"
        }
      ]
    },
    {
      "prompt": "In <math>dP/dt = kP</math>, if P doubles, what happens to the rate of change?",
      "answer": "doubles",
      "answers": [
        "doubles",
        "it doubles"
      ],
      "hint": "The rate is proportional to the amount.",
      "label": "proportional rate",
      "choices": [
        {
          "value": "doubles",
          "label": "it doubles"
        },
        {
          "value": "halves",
          "label": "it halves"
        },
        {
          "value": "unchanged",
          "label": "it stays the same"
        },
        {
          "value": "squares",
          "label": "it squares"
        }
      ]
    },
    {
      "prompt": "A first-order model may use which derivatives at most?",
      "answer": "first",
      "answers": [
        "first",
        "the first"
      ],
      "hint": "The order names the highest derivative allowed.",
      "label": "first order meaning",
      "choices": [
        {
          "value": "first",
          "label": "only the first derivative"
        },
        {
          "value": "second",
          "label": "up to the second derivative"
        }
      ]
    }
  ]
};
})();
