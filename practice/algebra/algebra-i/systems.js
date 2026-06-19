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
    }
  ]
};
})();
