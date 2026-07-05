// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["algebra"] = window.CarryPractice.sections["algebra"] || {};
  window.CarryPractice.sections["algebra"]["algebra.rational-expressions"] = {
  "id": "algebra.rational-expressions",
  "topic": "Algebra",
  "title": "Rational expressions",
  "type": "concept",
  "figure": "rational-cancel",
  "intro": [
    "A rational expression is a fraction made from algebraic expressions.",
    "Factor first, then cancel common factors.",
    "Values that make the original denominator zero stay excluded."
  ],
  "problems": [
    {
      "prompt": "Simplify: (x^2 - 9) / (x - 3).",
      "answer": "x+3",
      "hint": "Factor the numerator as (x - 3)(x + 3).",
      "label": "simplified rational expression"
    },
    {
      "prompt": "For 1 / (x - 5), what value of x is not allowed?",
      "answer": "5",
      "hint": "The denominator cannot be zero.",
      "label": "excluded value"
    },
    {
      "prompt": "Simplify: 6x / 9.",
      "answer": "2x/3",
      "answers": [
        "2x/3",
        "(2x)/3"
      ],
      "hint": "Divide numerator and denominator by 3.",
      "label": "reduced rational expression"
    },
    {
      "prompt": "Simplify: 10x / 15.",
      "answer": "2x/3",
      "answers": [
        "2x/3",
        "(2x)/3"
      ],
      "hint": "Divide numerator and denominator by 5.",
      "label": "reduced rational expression",
      "feedback": "Reduce common numerical factors."
    },
    {
      "prompt": "For 1 / (x + 4), what value of x is not allowed?",
      "answer": "-4",
      "hint": "The denominator cannot equal zero.",
      "label": "excluded value",
      "feedback": "Set the denominator equal to zero to find the excluded value."
    },
    {
      "prompt": "Simplify: (x^2 - 4) / (x - 2).",
      "answer": "x+2",
      "hint": "Factor x^2 - 4 as (x - 2)(x + 2).",
      "label": "simplified rational expression",
      "feedback": "Factor first, then cancel common factors."
    },
    {
      "prompt": "Simplify: (x^2 - 1) / (x + 1).",
      "answer": "x-1",
      "answers": [
        "x-1",
        "x - 1"
      ],
      "hint": "Factor the top as (x - 1)(x + 1), then cancel.",
      "label": "difference of squares",
      "choices": [
        {
          "value": "x-1",
          "label": "x - 1"
        },
        {
          "value": "x+1",
          "label": "x + 1"
        },
        {
          "value": "x^2",
          "label": "x²"
        },
        {
          "value": "1",
          "label": "1"
        }
      ]
    },
    {
      "prompt": "For (x + 2) / (x^2 - 16), which x values are not allowed?",
      "answer": "4 and -4",
      "answers": [
        "4 and -4",
        "-4 and 4",
        "±4"
      ],
      "hint": "Factor the denominator into (x - 4)(x + 4).",
      "label": "two exclusions",
      "choices": [
        {
          "value": "4 and -4",
          "label": "4 and -4"
        },
        {
          "value": "-2",
          "label": "-2"
        },
        {
          "value": "16",
          "label": "16"
        },
        {
          "value": "only 4",
          "label": "only 4"
        }
      ]
    }

  ]
};
})();
