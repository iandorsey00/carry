// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["linear-algebra"] = window.CarryPractice.sections["linear-algebra"] || {};
  window.CarryPractice.sections["linear-algebra"]["linear-algebra.determinants"] = {
  "id": "linear-algebra.determinants",
  "topic": "Linear Algebra",
  "title": "Determinants",
  "type": "concept",
  "figure": "linear-determinants",
  "intro": [
    "The determinant compresses a whole transformation into one number: the factor by which it scales area or volume.",
    "A negative value means the transformation also flips orientation; zero means space was flattened and information was lost.",
    "For a 2 × 2 matrix the number is ad - bc, and the matrix is invertible exactly when it is not zero."
],
  "problems": [
    {
      "prompt": "For [[2, 0], [0, 3]], what is the determinant?",
      "answer": "6",
      "hint": "The scaling factors are 2 and 3, so area scales by 2 times 3.",
      "label": "diagonal determinant"
    },
    {
      "prompt": "For [[1, 2], [3, 4]], compute ad - bc.",
      "answer": "-2",
      "hint": "Compute 1 times 4 minus 2 times 3.",
      "label": "two by two determinant"
    },
    {
      "prompt": "If a determinant is 0, is the matrix invertible?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "Zero determinant means information is flattened.",
      "label": "invertibility check",
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
      "prompt": "What is the determinant of the 2×2 identity matrix?",
      "answer": "1",
      "answers": [
        "1",
        "one"
      ],
      "hint": "It scales area by exactly 1.",
      "label": "identity det",
      "choices": [
        {
          "value": "1",
          "label": "1"
        },
        {
          "value": "0",
          "label": "0"
        },
        {
          "value": "2",
          "label": "2"
        },
        {
          "value": "4",
          "label": "4"
        }
      ]
    },
    {
      "prompt": "For [[2, 1], [4, 2]], what is the determinant?",
      "answer": "0",
      "answers": [
        "0",
        "zero"
      ],
      "hint": "The second row is twice the first: 4 - 4.",
      "label": "proportional rows",
      "choices": [
        {
          "value": "0",
          "label": "0"
        },
        {
          "value": "8",
          "label": "8"
        },
        {
          "value": "4",
          "label": "4"
        },
        {
          "value": "-4",
          "label": "-4"
        }
      ]
    },
    {
      "prompt": "If det A = 3, is A invertible?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "Any nonzero determinant can be undone.",
      "label": "nonzero invertible",
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
      "prompt": "A negative determinant means the transformation does what to orientation?",
      "answer": "flips it",
      "answers": [
        "flips it",
        "reverses it"
      ],
      "hint": "The plane comes out mirror-imaged.",
      "label": "orientation flip",
      "choices": [
        {
          "value": "flips it",
          "label": "flips it"
        },
        {
          "value": "preserves it",
          "label": "preserves it"
        },
        {
          "value": "removes it",
          "label": "removes it"
        }
      ]
    },
    {
      "prompt": "The determinant of [[a, b], [c, d]] is which expression?",
      "answer": "ad - bc",
      "answers": [
        "ad - bc",
        "ad-bc"
      ],
      "hint": "Down-right product minus up-right product.",
      "label": "formula",
      "choices": [
        {
          "value": "ad - bc",
          "label": "ad - bc"
        },
        {
          "value": "ab - cd",
          "label": "ab - cd"
        },
        {
          "value": "ac - bd",
          "label": "ac - bd"
        },
        {
          "value": "ad + bc",
          "label": "ad + bc"
        }
      ]
    }

  ]
};
})();
