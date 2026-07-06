// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["algebra"] = window.CarryPractice.sections["algebra"] || {};
  window.CarryPractice.sections["algebra"]["algebra.systems"] = {
  "id": "algebra.systems",
  "topic": "Algebra",
  "title": "Systems",
  "type": "system",
  "figure": "system-intersection",
  "intro": [
    "A system asks for values that make more than one equation true.",
    "A solution to two linear equations is the point where the lines meet.",
    "Substitution and elimination are two common ways to find that point."
  ],
  "problems": [
    {
      "equations": [
        "x + y = 3",
        "x - y = 1"
      ],
      "method": "elimination",
      "rows": [
        {
          "label": "combine",
          "left": {
            "answer": "2x",
            "hint": "Add the left sides: x + x = 2x, and y + -y cancels."
          },
          "relation": "=",
          "right": {
            "answer": "4",
            "hint": "Add the right sides: 3 + 1 = 4."
          }
        },
        {
          "label": "solve x",
          "left": "x",
          "relation": "=",
          "right": {
            "answer": "2",
            "hint": "Divide both sides of 2x = 4 by 2."
          }
        },
        {
          "label": "substitute",
          "left": {
            "answer": "2+y",
            "answers": [
              "2+y",
              "y+2"
            ],
            "hint": "Put x = 2 into x + y = 3."
          },
          "relation": "=",
          "right": "3"
        },
        {
          "label": "solve y",
          "left": "y",
          "relation": "=",
          "right": {
            "answer": "1",
            "hint": "Subtract 2 from both sides."
          }
        },
        {
          "label": "solution",
          "left": "(x,y)",
          "relation": "=",
          "right": {
            "answer": "(2,1)",
            "answers": [
              "(2,1)",
              "2,1"
            ],
            "hint": "Use x first, then y."
          }
        }
      ]
    },
    {
      "equations": [
        "y = x + 2",
        "y = 6"
      ],
      "method": "substitution",
      "rows": [
        {
          "label": "substitute",
          "left": "6",
          "relation": "=",
          "right": {
            "answer": "x+2",
            "hint": "Replace y with 6 in y = x + 2."
          }
        },
        {
          "label": "solve x",
          "left": "x",
          "relation": "=",
          "right": {
            "answer": "4",
            "hint": "Subtract 2 from both sides."
          }
        },
        {
          "label": "solution",
          "left": "(x,y)",
          "relation": "=",
          "right": {
            "answer": "(4,6)",
            "answers": [
              "(4,6)",
              "4,6"
            ],
            "hint": "The system gives x = 4 and y = 6."
          }
        }
      ]
    },
    {
      "equations": [
        "2x + y = 7",
        "y = 3"
      ],
      "method": "substitution",
      "rows": [
        {
          "label": "substitute",
          "left": {
            "answer": "2x+3",
            "hint": "Replace y with 3 in 2x + y = 7."
          },
          "relation": "=",
          "right": "7"
        },
        {
          "label": "simplify",
          "left": "2x",
          "relation": "=",
          "right": {
            "answer": "4",
            "hint": "Subtract 3 from both sides."
          }
        },
        {
          "label": "solve x",
          "left": "x",
          "relation": "=",
          "right": {
            "answer": "2",
            "hint": "Divide both sides by 2."
          }
        },
        {
          "label": "solution",
          "left": "(x,y)",
          "relation": "=",
          "right": {
            "answer": "(2,3)",
            "answers": [
              "(2,3)",
              "2,3"
            ],
            "hint": "Use x = 2 and y = 3."
          }
        }
      ]
    },
    {
      "equations": [
        "x + y = 7",
        "x - y = 3"
      ],
      "method": "elimination",
      "rows": [
        {
          "label": "combine",
          "left": {
            "answer": "2x",
            "hint": "Add the left sides: x + x = 2x, and y + -y cancels."
          },
          "relation": "=",
          "right": {
            "answer": "10",
            "hint": "Add the right sides: 7 + 3 = 10."
          }
        },
        {
          "label": "solve x",
          "left": "x",
          "relation": "=",
          "right": {
            "answer": "5",
            "hint": "Divide both sides of 2x = 10 by 2."
          }
        },
        {
          "label": "substitute",
          "left": {
            "answer": "5+y",
            "answers": [
              "5+y",
              "y+5"
            ],
            "hint": "Put x = 5 into x + y = 7."
          },
          "relation": "=",
          "right": "7"
        },
        {
          "label": "solve y",
          "left": "y",
          "relation": "=",
          "right": {
            "answer": "2",
            "hint": "Subtract 5 from both sides."
          }
        },
        {
          "label": "solution",
          "left": "(x,y)",
          "relation": "=",
          "right": {
            "answer": "(5,2)",
            "answers": [
              "(5,2)",
              "5,2"
            ],
            "hint": "Use x first, then y."
          }
        }
      ]
    },
    {
      "equations": [
        "x + y = 10",
        "x - y = 4"
      ],
      "method": "elimination",
      "rows": [
        {
          "label": "combine",
          "left": {
            "answer": "2x",
            "hint": "Add the left sides: x + x = 2x, and y + -y cancels."
          },
          "relation": "=",
          "right": {
            "answer": "14",
            "hint": "Add the right sides: 10 + 4 = 14."
          }
        },
        {
          "label": "solve x",
          "left": "x",
          "relation": "=",
          "right": {
            "answer": "7",
            "hint": "Divide both sides of 2x = 14 by 2."
          }
        },
        {
          "label": "substitute",
          "left": {
            "answer": "7+y",
            "answers": [
              "7+y",
              "y+7"
            ],
            "hint": "Put x = 7 into x + y = 10."
          },
          "relation": "=",
          "right": "10"
        },
        {
          "label": "solve y",
          "left": "y",
          "relation": "=",
          "right": {
            "answer": "3",
            "hint": "Subtract 7 from both sides."
          }
        },
        {
          "label": "solution",
          "left": "(x,y)",
          "relation": "=",
          "right": {
            "answer": "(7,3)",
            "answers": [
              "(7,3)",
              "7,3"
            ],
            "hint": "Use x first, then y."
          }
        }
      ]
    },
    {
      "equations": [
        "x + y = 6",
        "x - y = 2"
      ],
      "method": "elimination",
      "rows": [
        {
          "label": "combine",
          "left": {
            "answer": "2x",
            "hint": "Add the left sides: x + x = 2x, and y + -y cancels."
          },
          "relation": "=",
          "right": {
            "answer": "8",
            "hint": "Add the right sides: 6 + 2 = 8."
          }
        },
        {
          "label": "solve x",
          "left": "x",
          "relation": "=",
          "right": {
            "answer": "4",
            "hint": "Divide both sides of 2x = 8 by 2."
          }
        },
        {
          "label": "substitute",
          "left": {
            "answer": "4+y",
            "answers": [
              "4+y",
              "y+4"
            ],
            "hint": "Put x = 4 into x + y = 6."
          },
          "relation": "=",
          "right": "6"
        },
        {
          "label": "solve y",
          "left": "y",
          "relation": "=",
          "right": {
            "answer": "2",
            "hint": "Subtract 4 from both sides."
          }
        },
        {
          "label": "solution",
          "left": "(x,y)",
          "relation": "=",
          "right": {
            "answer": "(4,2)",
            "answers": [
              "(4,2)",
              "4,2"
            ],
            "hint": "Use x first, then y."
          }
        }
      ]
    },
    {
      "equations": [
        "x + y = 9",
        "x - y = 1"
      ],
      "method": "elimination",
      "rows": [
        {
          "label": "combine",
          "left": {
            "answer": "2x",
            "hint": "Add the left sides: x + x = 2x, and y + -y cancels."
          },
          "relation": "=",
          "right": {
            "answer": "10",
            "hint": "Add the right sides: 9 + 1 = 10."
          }
        },
        {
          "label": "solve x",
          "left": "x",
          "relation": "=",
          "right": {
            "answer": "5",
            "hint": "Divide both sides of 2x = 10 by 2."
          }
        },
        {
          "label": "substitute",
          "left": {
            "answer": "5+y",
            "answers": [
              "5+y",
              "y+5"
            ],
            "hint": "Put x = 5 into x + y = 9."
          },
          "relation": "=",
          "right": "9"
        },
        {
          "label": "solve y",
          "left": "y",
          "relation": "=",
          "right": {
            "answer": "4",
            "hint": "Subtract 5 from both sides."
          }
        },
        {
          "label": "solution",
          "left": "(x,y)",
          "relation": "=",
          "right": {
            "answer": "(5,4)",
            "answers": [
              "(5,4)",
              "5,4"
            ],
            "hint": "Use x first, then y."
          }
        }
      ]
    },
    {
      "equations": [
        "x + y = 8",
        "x - y = 6"
      ],
      "method": "elimination",
      "rows": [
        {
          "label": "combine",
          "left": {
            "answer": "2x",
            "hint": "Add the left sides: x + x = 2x, and y + -y cancels."
          },
          "relation": "=",
          "right": {
            "answer": "14",
            "hint": "Add the right sides: 8 + 6 = 14."
          }
        },
        {
          "label": "solve x",
          "left": "x",
          "relation": "=",
          "right": {
            "answer": "7",
            "hint": "Divide both sides of 2x = 14 by 2."
          }
        },
        {
          "label": "substitute",
          "left": {
            "answer": "7+y",
            "answers": [
              "7+y",
              "y+7"
            ],
            "hint": "Put x = 7 into x + y = 8."
          },
          "relation": "=",
          "right": "8"
        },
        {
          "label": "solve y",
          "left": "y",
          "relation": "=",
          "right": {
            "answer": "1",
            "hint": "Subtract 7 from both sides."
          }
        },
        {
          "label": "solution",
          "left": "(x,y)",
          "relation": "=",
          "right": {
            "answer": "(7,1)",
            "answers": [
              "(7,1)",
              "7,1"
            ],
            "hint": "Use x first, then y."
          }
        }
      ]
    }

  ]
};
})();
