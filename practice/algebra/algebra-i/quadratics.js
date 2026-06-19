// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["algebra"] = window.CarryPractice.sections["algebra"] || {};
  window.CarryPractice.sections["algebra"]["algebra.quadratics"] = {
  "id": "algebra.quadratics",
  "topic": "Algebra",
  "title": "Quadratics",
  "type": "quadratic",
  "figure": "quadratic-roots",
  "intro": [
    "A quadratic has a squared variable as its highest power.",
    "Before solving, identify what the problem asks for: roots, a vertex, or a value.",
    "For beginner factoring problems shaped like x^2 plus an x term plus a number, roots come from finding two binomials whose product equals zero."
  ],
  "problems": [
    {
      "expression": "x^2 - 5x + 6 = 0",
      "method": "roots by factoring",
      "rows": [
        {
          "label": "shape",
          "left": "x^2 + ?x + ? = 0",
          "relation": "->",
          "right": "factor first"
        },
        {
          "label": "x term number",
          "left": "-5x",
          "relation": "=",
          "right": {
            "answer": "-5",
            "hint": "The number attached to x is -5."
          }
        },
        {
          "label": "number term",
          "left": "6",
          "relation": "=",
          "right": {
            "answer": "6",
            "hint": "The plain number is 6."
          }
        },
        {
          "label": "factor pairs",
          "left": "make 6",
          "relation": ":",
          "right": "1,6 or 2,3"
        },
        {
          "label": "signs",
          "left": "both signs",
          "relation": "=",
          "right": {
            "answer": "--",
            "answers": [
              "--",
              "bothnegative",
              "both negative",
              "negative",
              "both-",
              "both -"
            ],
            "hint": "To multiply to positive 6 and add to negative 5, both numbers need to be negative. Write -- for two negative signs."
          }
        },
        {
          "label": "choose pair",
          "left": {
            "answer": "-2,-3",
            "answers": [
              "-2,-3",
              "-3,-2"
            ],
            "hint": "Use the pair 2 and 3, then make both negative: -2 + -3 = -5."
          },
          "relation": "+",
          "right": {
            "answer": "-5",
            "hint": "-2 + -3 = -5."
          }
        },
        {
          "label": "check product",
          "left": "-2,-3",
          "relation": "x",
          "right": {
            "answer": "6",
            "hint": "-2 x -3 = 6."
          }
        },
        {
          "label": "factor",
          "left": "expression",
          "relation": "=",
          "right": {
            "answer": "(x-2)(x-3)",
            "answers": [
              "(x-2)(x-3)",
              "(x-3)(x-2)"
            ],
            "hint": "Use the pair as the constants in the binomials."
          }
        },
        {
          "label": "zero product",
          "left": "roots",
          "relation": "=",
          "right": {
            "answer": "2,3",
            "answers": [
              "2,3",
              "3,2",
              "x=2,x=3",
              "x=3,x=2"
            ],
            "hint": "Each factor can equal zero: x - 2 = 0 or x - 3 = 0."
          }
        }
      ]
    },
    {
      "expression": "y = x^2 - 4x + 1",
      "method": "vertex",
      "rows": [
        {
          "label": "x^2 number",
          "left": "x^2",
          "relation": "=",
          "right": {
            "answer": "1",
            "hint": "There is an invisible 1 in front of x^2."
          }
        },
        {
          "label": "x term number",
          "left": "-4x",
          "relation": "=",
          "right": {
            "answer": "-4",
            "hint": "The number attached to x is -4."
          }
        },
        {
          "label": "opposite",
          "left": "opposite of -4",
          "relation": "=",
          "right": {
            "answer": "4",
            "hint": "The opposite of -4 is 4."
          }
        },
        {
          "label": "double",
          "left": "2 times 1",
          "relation": "=",
          "right": {
            "answer": "2",
            "hint": "Double the x^2 number: 2 times 1 is 2."
          }
        },
        {
          "label": "vertex x",
          "left": "opposite / double",
          "relation": "=",
          "right": {
            "answer": "2",
            "hint": "4 divided by 2 is 2."
          }
        },
        {
          "label": "vertex y",
          "left": "2^2 - 4(2) + 1",
          "relation": "=",
          "right": {
            "answer": "-3",
            "hint": "4 - 8 + 1 = -3."
          }
        },
        {
          "label": "vertex",
          "left": "(x,y)",
          "relation": "=",
          "right": {
            "answer": "(2,-3)",
            "answers": [
              "(2,-3)",
              "2,-3"
            ],
            "hint": "Use the x-value and y-value together."
          }
        }
      ]
    },
    {
      "expression": "x^2 - 9 when x = 4",
      "method": "evaluate",
      "rows": [
        {
          "label": "substitute",
          "left": "x",
          "relation": "=",
          "right": {
            "answer": "4",
            "hint": "The problem gives x = 4."
          }
        },
        {
          "label": "rewrite",
          "left": "x^2 - 9",
          "relation": "=",
          "right": {
            "answer": "4^2-9",
            "answers": [
              "4^2-9",
              "4^2 - 9"
            ],
            "hint": "Replace x with 4."
          }
        },
        {
          "label": "square",
          "left": "4^2",
          "relation": "=",
          "right": {
            "answer": "16",
            "hint": "4 times 4 is 16."
          }
        },
        {
          "label": "subtract",
          "left": "16 - 9",
          "relation": "=",
          "right": {
            "answer": "7",
            "hint": "16 - 9 = 7."
          }
        },
        {
          "label": "value",
          "left": "result",
          "relation": "=",
          "right": {
            "answer": "7",
            "hint": "The expression equals 7 when x = 4."
          }
        }
      ]
    }
  ]
};
})();
