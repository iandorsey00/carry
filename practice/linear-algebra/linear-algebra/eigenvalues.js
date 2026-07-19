// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["linear-algebra"] = window.CarryPractice.sections["linear-algebra"] || {};
  window.CarryPractice.sections["linear-algebra"]["linear-algebra.eigenvalues"] = {
  "id": "linear-algebra.eigenvalues",
  "topic": "Linear Algebra",
  "title": "Eigenvalue intuition",
  "type": "concept",
  "figure": "linear-eigenvalues",
  "intro": [
    "Most vectors get knocked off course by a transformation — eigenvectors are the stubborn ones that keep their direction.",
    "Each stubborn direction comes with a number, its eigenvalue: how much the transformation stretches or shrinks along it.",
    "In symbols, <math>Av = λv</math>: matrix times vector equals a plain number times the same vector."
],
  "problems": [
    {
      "prompt": "If A v = 3v, what is the eigenvalue?",
      "answer": "3",
      "hint": "The eigenvalue is the scale factor multiplying v.",
      "label": "eigenvalue scale"
    },
    {
      "prompt": "For [[2, 0], [0, 5]], what eigenvalue belongs to the x-axis direction?",
      "answer": "2",
      "hint": "The x-coordinate is scaled by 2.",
      "label": "x-axis eigenvalue",
      "choices": [
        {
          "value": "2",
          "label": "2"
        },
        {
          "value": "5",
          "label": "5"
        },
        {
          "value": "7",
          "label": "7"
        },
        {
          "value": "10",
          "label": "10"
        }
      ]
    },
    {
      "prompt": "If a vector changes direction after applying A, is it an eigenvector of A?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "Eigenvectors keep direction, though they may scale or reverse.",
      "label": "eigenvector definition",
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
      "prompt": "For the diagonal matrix [[3, 0], [0, 7]], what are the eigenvalues?",
      "answer": "3 and 7",
      "answers": [
        "3 and 7",
        "3, 7"
      ],
      "hint": "Each axis is stretched by its diagonal entry.",
      "label": "diagonal eigenvalues",
      "choices": [
        {
          "value": "3 and 7",
          "label": "3 and 7"
        },
        {
          "value": "0 and 0",
          "label": "0 and 0"
        },
        {
          "value": "21",
          "label": "21"
        },
        {
          "value": "10",
          "label": "10"
        }
      ]
    },
    {
      "prompt": "If Av = 0 for a nonzero vector v, what eigenvalue does v carry?",
      "answer": "0",
      "answers": [
        "0",
        "zero"
      ],
      "hint": "Av equals 0 times v.",
      "label": "zero eigenvalue",
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
          "value": "-1",
          "label": "-1"
        },
        {
          "value": "undefined",
          "label": "v"
        }
      ]
    },
    {
      "prompt": "An eigenvalue of 1 means the eigenvector is what under the transformation?",
      "answer": "unchanged",
      "answers": [
        "unchanged",
        "fixed"
      ],
      "hint": "Scaled by 1 is no change at all.",
      "label": "eigenvalue one",
      "choices": [
        {
          "value": "unchanged",
          "label": "unchanged"
        },
        {
          "value": "doubled",
          "label": "doubled"
        },
        {
          "value": "reversed",
          "label": "reversed"
        }
      ]
    },
    {
      "prompt": "Does a 90° rotation of the plane have any real eigenvectors?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "Every direction gets turned; none is preserved.",
      "label": "rotation eigenvectors",
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
      "prompt": "If v is an eigenvector of A, is 2v an eigenvector with the same eigenvalue?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "Scaling an eigenvector keeps its direction.",
      "label": "scaled eigenvector",
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
    }

  ]
};
})();
