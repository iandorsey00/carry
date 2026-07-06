// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["linear-algebra"] = window.CarryPractice.sections["linear-algebra"] || {};
  window.CarryPractice.sections["linear-algebra"]["linear-algebra.matrices"] = {
  "id": "linear-algebra.matrices",
  "topic": "Linear Algebra",
  "title": "Matrices",
  "type": "concept",
  "figure": "linear-matrices",
  "intro": [
    "A matrix is a machine for moving many numbers at once: one grid that acts on a whole vector in a single step.",
    "Its shape reads rows first — a 2 × 3 matrix has 2 rows and 3 columns — and entry positions work the same way.",
    "Multiplying a matrix by a vector mixes the matrix's columns, using the vector's entries as the recipe."
],
  "problems": [
    {
      "prompt": "A matrix with 2 rows and 3 columns has what size?",
      "answer": "2x3",
      "answers": [
        "2x3",
        "2×3",
        "2by3"
      ],
      "hint": "Write rows by columns.",
      "label": "matrix size"
    },
    {
      "prompt": "For the matrix [[1, 2], [3, 4]], what is the entry in row 2, column 1?",
      "answer": "3",
      "hint": "Row 2 is [3, 4]; column 1 is the first entry.",
      "label": "matrix entry"
    },
    {
      "prompt": "Compute [[1, 0], [0, 1]] times (5, 7).",
      "answer": "(5,7)",
      "answers": [
        "(5,7)",
        "5,7"
      ],
      "hint": "The identity matrix leaves the vector unchanged.",
      "label": "identity matrix"
    },
    {
      "prompt": "What size is the product of a 2×3 matrix and a 3×4 matrix?",
      "answer": "2×4",
      "answers": [
        "2×4",
        "2x4"
      ],
      "hint": "The inner 3s must match and then disappear.",
      "label": "product size",
      "choices": [
        {
          "value": "2×4",
          "label": "2 × 4"
        },
        {
          "value": "3×3",
          "label": "3 × 3"
        },
        {
          "value": "2×3",
          "label": "2 × 3"
        },
        {
          "value": "6×12",
          "label": "6 × 12"
        }
      ]
    },
    {
      "prompt": "Can you add a 2×2 matrix to a 3×3 matrix?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "Addition needs matching shapes, entry by entry.",
      "label": "shape mismatch",
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
      "prompt": "What does the 2×2 identity matrix do to any vector?",
      "answer": "leaves it unchanged",
      "answers": [
        "leaves it unchanged",
        "nothing"
      ],
      "hint": "It is the matrix version of multiplying by 1.",
      "label": "identity effect",
      "choices": [
        {
          "value": "leaves it unchanged",
          "label": "leaves it unchanged"
        },
        {
          "value": "doubles it",
          "label": "doubles it"
        },
        {
          "value": "reverses it",
          "label": "reverses it"
        }
      ]
    },
    {
      "prompt": "In [[5, 1], [2, 8]], what is the entry in row 1, column 2?",
      "answer": "1",
      "answers": [
        "1",
        "one"
      ],
      "hint": "First row, second position.",
      "label": "read entry",
      "choices": [
        {
          "value": "1",
          "label": "1"
        },
        {
          "value": "5",
          "label": "5"
        },
        {
          "value": "2",
          "label": "2"
        },
        {
          "value": "8",
          "label": "8"
        }
      ]
    },
    {
      "prompt": "Matrix addition combines two matrices how?",
      "answer": "entry by entry",
      "answers": [
        "entry by entry",
        "entrywise"
      ],
      "hint": "Each position adds independently.",
      "label": "entrywise",
      "choices": [
        {
          "value": "entry by entry",
          "label": "entry by entry"
        },
        {
          "value": "row times column",
          "label": "row times column"
        }
      ]
    }

  ]
};
})();
