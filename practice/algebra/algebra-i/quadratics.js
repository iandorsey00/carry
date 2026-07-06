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
    },
    {
      "expression": "x^2 - 7x + 10 = 0",
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
          "left": "-7x",
          "relation": "=",
          "right": {
            "answer": "-7",
            "hint": "The number attached to x is -7."
          }
        },
        {
          "label": "number term",
          "left": "10",
          "relation": "=",
          "right": {
            "answer": "10",
            "hint": "The plain number is 10."
          }
        },
        {
          "label": "factor pairs",
          "left": "make 10",
          "relation": ":",
          "right": "1,10 or 2,5"
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
            "hint": "To multiply to positive 10 and add to negative 7, both numbers must be negative. Write -- for two negative signs."
          }
        },
        {
          "label": "choose pair",
          "left": {
            "answer": "-2,-5",
            "answers": [
              "-2,-5",
              "-5,-2"
            ],
            "hint": "Use the pair 2 and 5, then make both negative: -2 + -5 = -7."
          },
          "relation": "+",
          "right": {
            "answer": "-7",
            "hint": "-2 + -5 = -7."
          }
        },
        {
          "label": "check product",
          "left": "-2,-5",
          "relation": "x",
          "right": {
            "answer": "10",
            "hint": "-2 x -5 = 10."
          }
        },
        {
          "label": "factor",
          "left": "expression",
          "relation": "=",
          "right": {
            "answer": "(x-2)(x-5)",
            "answers": [
              "(x-2)(x-5)",
              "(x-5)(x-2)"
            ],
            "hint": "Use the pair as the constants in the binomials."
          }
        },
        {
          "label": "zero product",
          "left": "roots",
          "relation": "=",
          "right": {
            "answer": "2,5",
            "answers": [
              "2,5",
              "5,2",
              "x=2,x=5",
              "x=5,x=2"
            ],
            "hint": "Each factor can equal zero: x - 2 = 0 or x - 5 = 0."
          }
        }
      ]
    },
    {
      "expression": "x^2 - 7x + 12 = 0",
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
          "left": "-7x",
          "relation": "=",
          "right": {
            "answer": "-7",
            "hint": "The number attached to x is -7."
          }
        },
        {
          "label": "number term",
          "left": "12",
          "relation": "=",
          "right": {
            "answer": "12",
            "hint": "The plain number is 12."
          }
        },
        {
          "label": "factor pairs",
          "left": "make 12",
          "relation": ":",
          "right": "1,12 or 3,4"
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
            "hint": "To multiply to positive 12 and add to negative 7, both numbers must be negative. Write -- for two negative signs."
          }
        },
        {
          "label": "choose pair",
          "left": {
            "answer": "-3,-4",
            "answers": [
              "-3,-4",
              "-4,-3"
            ],
            "hint": "Use the pair 3 and 4, then make both negative: -3 + -4 = -7."
          },
          "relation": "+",
          "right": {
            "answer": "-7",
            "hint": "-3 + -4 = -7."
          }
        },
        {
          "label": "check product",
          "left": "-3,-4",
          "relation": "x",
          "right": {
            "answer": "12",
            "hint": "-3 x -4 = 12."
          }
        },
        {
          "label": "factor",
          "left": "expression",
          "relation": "=",
          "right": {
            "answer": "(x-3)(x-4)",
            "answers": [
              "(x-3)(x-4)",
              "(x-4)(x-3)"
            ],
            "hint": "Use the pair as the constants in the binomials."
          }
        },
        {
          "label": "zero product",
          "left": "roots",
          "relation": "=",
          "right": {
            "answer": "3,4",
            "answers": [
              "3,4",
              "4,3",
              "x=3,x=4",
              "x=4,x=3"
            ],
            "hint": "Each factor can equal zero: x - 3 = 0 or x - 4 = 0."
          }
        }
      ]
    },
    {
      "expression": "x^2 - 6x + 8 = 0",
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
          "left": "-6x",
          "relation": "=",
          "right": {
            "answer": "-6",
            "hint": "The number attached to x is -6."
          }
        },
        {
          "label": "number term",
          "left": "8",
          "relation": "=",
          "right": {
            "answer": "8",
            "hint": "The plain number is 8."
          }
        },
        {
          "label": "factor pairs",
          "left": "make 8",
          "relation": ":",
          "right": "1,8 or 2,4"
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
            "hint": "To multiply to positive 8 and add to negative 6, both numbers must be negative. Write -- for two negative signs."
          }
        },
        {
          "label": "choose pair",
          "left": {
            "answer": "-2,-4",
            "answers": [
              "-2,-4",
              "-4,-2"
            ],
            "hint": "Use the pair 2 and 4, then make both negative: -2 + -4 = -6."
          },
          "relation": "+",
          "right": {
            "answer": "-6",
            "hint": "-2 + -4 = -6."
          }
        },
        {
          "label": "check product",
          "left": "-2,-4",
          "relation": "x",
          "right": {
            "answer": "8",
            "hint": "-2 x -4 = 8."
          }
        },
        {
          "label": "factor",
          "left": "expression",
          "relation": "=",
          "right": {
            "answer": "(x-2)(x-4)",
            "answers": [
              "(x-2)(x-4)",
              "(x-4)(x-2)"
            ],
            "hint": "Use the pair as the constants in the binomials."
          }
        },
        {
          "label": "zero product",
          "left": "roots",
          "relation": "=",
          "right": {
            "answer": "2,4",
            "answers": [
              "2,4",
              "4,2",
              "x=2,x=4",
              "x=4,x=2"
            ],
            "hint": "Each factor can equal zero: x - 2 = 0 or x - 4 = 0."
          }
        }
      ]
    },
    {
      "expression": "x^2 - 8x + 15 = 0",
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
          "left": "-8x",
          "relation": "=",
          "right": {
            "answer": "-8",
            "hint": "The number attached to x is -8."
          }
        },
        {
          "label": "number term",
          "left": "15",
          "relation": "=",
          "right": {
            "answer": "15",
            "hint": "The plain number is 15."
          }
        },
        {
          "label": "factor pairs",
          "left": "make 15",
          "relation": ":",
          "right": "1,15 or 3,5"
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
            "hint": "To multiply to positive 15 and add to negative 8, both numbers must be negative. Write -- for two negative signs."
          }
        },
        {
          "label": "choose pair",
          "left": {
            "answer": "-3,-5",
            "answers": [
              "-3,-5",
              "-5,-3"
            ],
            "hint": "Use the pair 3 and 5, then make both negative: -3 + -5 = -8."
          },
          "relation": "+",
          "right": {
            "answer": "-8",
            "hint": "-3 + -5 = -8."
          }
        },
        {
          "label": "check product",
          "left": "-3,-5",
          "relation": "x",
          "right": {
            "answer": "15",
            "hint": "-3 x -5 = 15."
          }
        },
        {
          "label": "factor",
          "left": "expression",
          "relation": "=",
          "right": {
            "answer": "(x-3)(x-5)",
            "answers": [
              "(x-3)(x-5)",
              "(x-5)(x-3)"
            ],
            "hint": "Use the pair as the constants in the binomials."
          }
        },
        {
          "label": "zero product",
          "left": "roots",
          "relation": "=",
          "right": {
            "answer": "3,5",
            "answers": [
              "3,5",
              "5,3",
              "x=3,x=5",
              "x=5,x=3"
            ],
            "hint": "Each factor can equal zero: x - 3 = 0 or x - 5 = 0."
          }
        }
      ]
    },
    {
      "expression": "x^2 - 9x + 20 = 0",
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
          "left": "-9x",
          "relation": "=",
          "right": {
            "answer": "-9",
            "hint": "The number attached to x is -9."
          }
        },
        {
          "label": "number term",
          "left": "20",
          "relation": "=",
          "right": {
            "answer": "20",
            "hint": "The plain number is 20."
          }
        },
        {
          "label": "factor pairs",
          "left": "make 20",
          "relation": ":",
          "right": "1,20 or 4,5"
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
            "hint": "To multiply to positive 20 and add to negative 9, both numbers must be negative. Write -- for two negative signs."
          }
        },
        {
          "label": "choose pair",
          "left": {
            "answer": "-4,-5",
            "answers": [
              "-4,-5",
              "-5,-4"
            ],
            "hint": "Use the pair 4 and 5, then make both negative: -4 + -5 = -9."
          },
          "relation": "+",
          "right": {
            "answer": "-9",
            "hint": "-4 + -5 = -9."
          }
        },
        {
          "label": "check product",
          "left": "-4,-5",
          "relation": "x",
          "right": {
            "answer": "20",
            "hint": "-4 x -5 = 20."
          }
        },
        {
          "label": "factor",
          "left": "expression",
          "relation": "=",
          "right": {
            "answer": "(x-4)(x-5)",
            "answers": [
              "(x-4)(x-5)",
              "(x-5)(x-4)"
            ],
            "hint": "Use the pair as the constants in the binomials."
          }
        },
        {
          "label": "zero product",
          "left": "roots",
          "relation": "=",
          "right": {
            "answer": "4,5",
            "answers": [
              "4,5",
              "5,4",
              "x=4,x=5",
              "x=5,x=4"
            ],
            "hint": "Each factor can equal zero: x - 4 = 0 or x - 5 = 0."
          }
        }
      ]
    }

  ]
};
})();
