// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["algebra"] = window.CarryPractice.sections["algebra"] || {};
  window.CarryPractice.sections["algebra"]["algebra.polynomials"] = {
  "id": "algebra.polynomials",
  "topic": "Algebra",
  "title": "Polynomials",
  "type": "concept",
  "figure": "polynomial-terms",
  "intro": [
    "Polynomials are sums of terms with whole-number powers of a variable.",
    "Like terms have the same variable and exponent.",
    "The degree is the largest exponent after the polynomial is simplified."
  ],
  "problems": [
    {
      "prompt": "Combine like terms: 3x^2 + 2x + 5x^2.",
      "answer": "8x^2+2x",
      "answers": [
        "8x^2+2x",
        "2x+8x^2"
      ],
      "hint": "Combine the x^2 terms and keep the x term.",
      "label": "combined polynomial"
    },
    {
      "prompt": "What is the degree of 4x^3 - x + 7?",
      "answer": "3",
      "hint": "Look for the largest exponent.",
      "label": "polynomial degree"
    },
    {
      "prompt": "Evaluate x^2 + 2x when x = 3.",
      "answer": "15",
      "hint": "3^2 + 2(3) = 9 + 6.",
      "label": "polynomial value"
    },
    {
      "prompt": "Combine like terms: 6x^2 - 2x^2 + x.",
      "answer": "4x^2+x",
      "answers": [
        "4x^2+x",
        "x+4x^2"
      ],
      "hint": "Combine only the x^2 terms.",
      "label": "combined polynomial",
      "feedback": "Match both variable and exponent before combining."
    },
    {
      "prompt": "What is the degree of 7x^4 + 2x^2 - 1?",
      "answer": "4",
      "hint": "Find the largest exponent.",
      "label": "polynomial degree",
      "feedback": "Degree is about the highest power after simplifying."
    },
    {
      "prompt": "Evaluate x^2 - x when x = 5.",
      "answer": "20",
      "hint": "25 - 5 = 20.",
      "label": "polynomial value",
      "feedback": "Substitute the value for every x first."
    },
    {
      "prompt": "Combine like terms: 2x^3 + x^2 + 3x^3.",
      "answer": "5x^3+x^2",
      "answers": [
        "5x^3+x^2",
        "5x^3 + x^2"
      ],
      "hint": "Only the x^3 terms match; the x^2 term stays.",
      "label": "combine cubics",
      "choices": [
        {
          "value": "5x^3+x^2",
          "label": "5x³ + x²"
        },
        {
          "value": "6x^5",
          "label": "6x⁵"
        },
        {
          "value": "5x^3",
          "label": "5x³"
        },
        {
          "value": "6x^3",
          "label": "6x³"
        }
      ]
    },
    {
      "prompt": "What is the degree of the constant polynomial 9?",
      "answer": "0",
      "answers": [
        "0",
        "zero"
      ],
      "hint": "There is no x at all — the power of x is zero.",
      "label": "constant degree",
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
          "value": "9",
          "label": "9"
        }
      ]
    }

  ]
};
})();
