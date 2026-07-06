// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["precalculus"] = window.CarryPractice.sections["precalculus"] || {};
  window.CarryPractice.sections["precalculus"]["precalculus.polynomial-rational"] = {
  "id": "precalculus.polynomial-rational",
  "topic": "Precalculus",
  "title": "Polynomial and rational functions",
  "type": "concept",
  "figure": "precalc-polynomial-rational",
  "intro": [
    "Polynomials are the smoothest functions arithmetic can build: powers of x, scaled and added.",
    "The degree — the highest power present — sets the personality: how many roots, turns, and end behaviors are possible.",
    "Divide two polynomials and you get a rational function, which stays smooth except where the denominator hits zero."
],
  "problems": [
    {
      "prompt": "What is the degree of p(x) = 4x^3 - x + 8?",
      "answer": "3",
      "hint": "Look for the highest exponent on x.",
      "label": "polynomial degree"
    },
    {
      "prompt": "What x-value makes x - 2 equal zero?",
      "answer": "2",
      "hint": "Solve x - 2 = 0.",
      "label": "linear factor zero"
    },
    {
      "prompt": "For r(x) = 1/(x - 4), what value is not allowed?",
      "answer": "4",
      "hint": "The denominator cannot equal zero.",
      "label": "rational restriction"
    },
    {
      "prompt": "What is the degree of (x²)(x³)?",
      "answer": "5",
      "answers": [
        "5",
        "five"
      ],
      "hint": "Multiplying powers adds the exponents.",
      "label": "add exponents",
      "choices": [
        {
          "value": "5",
          "label": "5"
        },
        {
          "value": "6",
          "label": "6"
        },
        {
          "value": "2",
          "label": "2"
        },
        {
          "value": "3",
          "label": "3"
        }
      ]
    },
    {
      "prompt": "At most how many roots can a degree-3 polynomial have?",
      "answer": "3",
      "answers": [
        "3",
        "three"
      ],
      "hint": "Degree caps the root count.",
      "label": "root count",
      "choices": [
        {
          "value": "3",
          "label": "3"
        },
        {
          "value": "1",
          "label": "1"
        },
        {
          "value": "2",
          "label": "2"
        },
        {
          "value": "6",
          "label": "6"
        }
      ]
    },
    {
      "prompt": "As x runs to both infinities, y = x² points which way?",
      "answer": "up on both sides",
      "answers": [
        "up on both sides",
        "up"
      ],
      "hint": "Squares of big numbers are big and positive.",
      "label": "end behavior",
      "choices": [
        {
          "value": "up on both sides",
          "label": "up on both sides"
        },
        {
          "value": "down on both sides",
          "label": "down on both sides"
        },
        {
          "value": "up then down",
          "label": "up on one side, down on the other"
        }
      ]
    },
    {
      "prompt": "For r(x) = (x + 1)/(x - 2), what is r(0)?",
      "answer": "-1/2",
      "answers": [
        "-1/2",
        "-0.5"
      ],
      "hint": "Substitute 0 into the top and the bottom.",
      "label": "evaluate rational",
      "choices": [
        {
          "value": "-1/2",
          "label": "-1/2"
        },
        {
          "value": "1/2",
          "label": "1/2"
        },
        {
          "value": "-1",
          "label": "-1"
        },
        {
          "value": "2",
          "label": "2"
        }
      ]
    },
    {
      "prompt": "A rational function's vertical asymptotes come from what?",
      "answer": "denominator zeros",
      "answers": [
        "denominator zeros",
        "zeros of the denominator"
      ],
      "hint": "Where the bottom vanishes, the graph blows up.",
      "label": "asymptote source",
      "choices": [
        {
          "value": "denominator zeros",
          "label": "zeros of the denominator"
        },
        {
          "value": "numerator zeros",
          "label": "zeros of the numerator"
        },
        {
          "value": "the degree",
          "label": "the degree"
        }
      ]
    }

  ]
};
})();
