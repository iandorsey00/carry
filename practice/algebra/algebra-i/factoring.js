// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["algebra"] = window.CarryPractice.sections["algebra"] || {};
  window.CarryPractice.sections["algebra"]["algebra.factoring"] = {
  "id": "algebra.factoring",
  "topic": "Algebra",
  "title": "Factoring",
  "type": "factoring",
  "figure": "factoring-pairs",
  "intro": [
    "Factoring rewrites an expression as a product.",
    "Look for a greatest common factor before using a special pattern.",
    "For an expression shaped like x^2 + some x's + a number, list factor pairs of the number first, then find the pair whose sum makes the x term."
  ],
  "problems": [
    {
      "expression": "x^2 + 5x + 6",
      "method": "pair",
      "rows": [
        {
          "label": "shape",
          "left": "x^2 + ?x + ?",
          "relation": "->",
          "right": "two binomials"
        },
        {
          "label": "x term number",
          "left": "5x",
          "relation": "=",
          "right": {
            "answer": "5",
            "hint": "The number attached to x is 5."
          }
        },
        {
          "label": "number term",
          "left": "6",
          "relation": "=",
          "right": {
            "answer": "6",
            "hint": "The plain number at the end is 6."
          }
        },
        {
          "label": "factor pairs",
          "left": "make 6",
          "relation": ":",
          "right": "1,6 or 2,3"
        },
        {
          "label": "choose pair",
          "left": {
            "answer": "2,3",
            "answers": [
              "2,3",
              "3,2"
            ],
            "hint": "Start with pairs that multiply to 6: 1 and 6, or 2 and 3. Choose the one whose sum is 5."
          },
          "relation": "+",
          "right": {
            "answer": "5",
            "hint": "2 + 3 = 5. The pair 1 and 6 adds to 7, so it does not match."
          }
        },
        {
          "label": "check product",
          "left": "2,3",
          "relation": "x",
          "right": {
            "answer": "6",
            "hint": "2 x 3 = 6, so the same pair also matches the constant."
          }
        },
        {
          "label": "first factor",
          "left": "x +",
          "relation": "",
          "right": {
            "answer": "2",
            "hint": "Use one number from the working pair."
          }
        },
        {
          "label": "second factor",
          "left": "x +",
          "relation": "",
          "right": {
            "answer": "3",
            "hint": "Use the other number from the working pair."
          }
        },
        {
          "label": "factored form",
          "left": "result",
          "relation": "=",
          "right": {
            "answer": "(x+2)(x+3)",
            "answers": [
              "(x+2)(x+3)",
              "(x+3)(x+2)"
            ],
            "hint": "Write the two binomials as a product."
          }
        }
      ]
    },
    {
      "expression": "6x + 9",
      "method": "gcf",
      "rows": [
        {
          "label": "common factor",
          "left": "gcf",
          "relation": "=",
          "right": {
            "answer": "3",
            "hint": "3 is the greatest factor shared by 6 and 9."
          }
        },
        {
          "label": "first term",
          "left": "6x / 3",
          "relation": "=",
          "right": {
            "answer": "2x",
            "hint": "6x divided by 3 is 2x."
          }
        },
        {
          "label": "second term",
          "left": "9 / 3",
          "relation": "=",
          "right": {
            "answer": "3",
            "hint": "9 divided by 3 is 3."
          }
        },
        {
          "label": "inside",
          "left": "after divide",
          "relation": "=",
          "right": {
            "answer": "2x+3",
            "hint": "Put the divided terms inside the parentheses."
          }
        },
        {
          "label": "factors",
          "left": "result",
          "relation": "=",
          "right": {
            "answer": "3(2x+3)",
            "hint": "Put the GCF outside the parentheses."
          }
        }
      ]
    },
    {
      "expression": "x^2 - 9",
      "method": "difference of squares",
      "rows": [
        {
          "label": "pattern",
          "left": "a^2 - b^2",
          "relation": "=",
          "right": "(a-b)(a+b)"
        },
        {
          "label": "first root",
          "left": "x^2",
          "relation": "->",
          "right": {
            "answer": "x",
            "hint": "The square root of x^2 is x."
          }
        },
        {
          "label": "second root",
          "left": "9",
          "relation": "->",
          "right": {
            "answer": "3",
            "hint": "The square root of 9 is 3."
          }
        },
        {
          "label": "minus factor",
          "left": "x -",
          "relation": "",
          "right": {
            "answer": "3",
            "hint": "One factor uses subtraction."
          }
        },
        {
          "label": "plus factor",
          "left": "x +",
          "relation": "",
          "right": {
            "answer": "3",
            "hint": "The other factor uses addition."
          }
        },
        {
          "label": "factored form",
          "left": "result",
          "relation": "=",
          "right": {
            "answer": "(x-3)(x+3)",
            "answers": [
              "(x-3)(x+3)",
              "(x+3)(x-3)"
            ],
            "hint": "Use the square roots with opposite signs."
          }
        }
      ]
    }
  ]
};
})();
