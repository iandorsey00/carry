// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["calculus"] = window.CarryPractice.sections["calculus"] || {};
  window.CarryPractice.sections["calculus"]["calculus.series"] = {
  "id": "calculus.series",
  "topic": "Calculus",
  "title": "Series",
  "type": "concept",
  "figure": "calc-series",
  "intro": [
    "A series dares to add infinitely many numbers — and sometimes the total is an ordinary finite value.",
    "The trick is to watch partial sums: add the first few terms and see whether the running total settles or runs away.",
    "Geometric series settle exactly when the ratio stays strictly between -1 and 1; that single test powers many others."
],
  "problems": [
    {
      "prompt": "What is the next term in 1/2, 1/4, 1/8?",
      "answer": "1/16",
      "hint": "Each term is half the previous term.",
      "label": "geometric term"
    },
    {
      "prompt": "What is the infinite sum 1 + 1/2 + 1/4 + ...?",
      "answer": "2",
      "hint": "This geometric series has first term 1 and ratio 1/2.",
      "label": "geometric sum"
    },
    {
      "prompt": "A geometric series converges when the absolute value of r is less than what number?",
      "answer": "1",
      "hint": "The ratio must have size less than 1.",
      "label": "convergence condition"
    },
    {
      "prompt": "What is the sum 1/2 + 1/4 + 1/8 + ... ?",
      "answer": "1",
      "answers": [
        "1",
        "one"
      ],
      "hint": "Each step closes half the remaining gap to 1.",
      "label": "halves sum",
      "choices": [
        {
          "value": "1",
          "label": "1"
        },
        {
          "value": "2",
          "label": "2"
        },
        {
          "value": "1/2",
          "label": "1/2"
        },
        {
          "value": "infinity",
          "label": "infinity"
        }
      ]
    },
    {
      "prompt": "Does the harmonic series 1 + 1/2 + 1/3 + 1/4 + ... converge?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "Its terms shrink, but famously not fast enough.",
      "label": "harmonic diverges",
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
      "prompt": "A geometric series with ratio 2: does it converge or diverge?",
      "answer": "diverge",
      "answers": [
        "diverge",
        "diverges"
      ],
      "hint": "The terms grow instead of shrinking.",
      "label": "ratio two",
      "choices": [
        {
          "value": "diverge",
          "label": "diverge"
        },
        {
          "value": "converge",
          "label": "converge"
        }
      ]
    },
    {
      "prompt": "What is the partial sum of the first three terms of 1 + 2 + 3 + ... ?",
      "answer": "6",
      "answers": [
        "6",
        "six"
      ],
      "hint": "Add 1, 2, and 3.",
      "label": "partial sum",
      "choices": [
        {
          "value": "6",
          "label": "6"
        },
        {
          "value": "3",
          "label": "3"
        },
        {
          "value": "5",
          "label": "5"
        },
        {
          "value": "10",
          "label": "10"
        }
      ]
    },
    {
      "prompt": "If the terms of a series do not approach 0, the series does what?",
      "answer": "diverges",
      "answers": [
        "diverges",
        "diverge"
      ],
      "hint": "A sum cannot settle while its steps stay big.",
      "label": "divergence test",
      "choices": [
        {
          "value": "diverges",
          "label": "diverges"
        },
        {
          "value": "converges",
          "label": "converges"
        }
      ]
    }

  ]
};
})();
