// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["precalculus"] = window.CarryPractice.sections["precalculus"] || {};
  window.CarryPractice.sections["precalculus"]["precalculus.sequences"] = {
  "id": "precalculus.sequences",
  "topic": "Precalculus",
  "title": "Sequences",
  "type": "concept",
  "figure": "precalc-sequences",
  "intro": [
    "A sequence is a numbered list with a rule — and the rule, not the list, is the real object of study.",
    "Arithmetic sequences climb by a fixed difference; geometric sequences scale by a fixed ratio.",
    "That one distinction — add versus multiply — separates steady growth from explosive growth."
],
  "problems": [
    {
      "prompt": "What is the common difference in 4, 7, 10, 13?",
      "answer": "3",
      "hint": "Subtract neighboring terms.",
      "label": "common difference"
    },
    {
      "prompt": "What is the next term in 5, 10, 20, 40?",
      "answer": "80",
      "hint": "Each term is doubled.",
      "label": "geometric next term"
    },
    {
      "prompt": "In a geometric sequence 3, 12, 48, what is the common ratio?",
      "answer": "4",
      "hint": "Divide 12 by 3.",
      "label": "common ratio"
    },
    {
      "prompt": "What is the 5th term of the arithmetic sequence 2, 5, 8, ...?",
      "answer": "14",
      "answers": [
        "14",
        "fourteen"
      ],
      "hint": "Keep adding 3.",
      "label": "fifth term",
      "choices": [
        {
          "value": "14",
          "label": "14"
        },
        {
          "value": "11",
          "label": "11"
        },
        {
          "value": "17",
          "label": "17"
        },
        {
          "value": "13",
          "label": "13"
        }
      ]
    },
    {
      "prompt": "What is the next term of 81, 27, 9, ...?",
      "answer": "3",
      "answers": [
        "3",
        "three"
      ],
      "hint": "Each term is a third of the one before.",
      "label": "shrinking ratio",
      "choices": [
        {
          "value": "3",
          "label": "3"
        },
        {
          "value": "6",
          "label": "6"
        },
        {
          "value": "1",
          "label": "1"
        },
        {
          "value": "4.5",
          "label": "4.5"
        }
      ]
    },
    {
      "prompt": "Is 1, 4, 9, 16 arithmetic, geometric, or neither?",
      "answer": "neither",
      "answers": [
        "neither"
      ],
      "hint": "The gaps grow, but not by a constant ratio — they are squares.",
      "label": "squares sequence",
      "choices": [
        {
          "value": "neither",
          "label": "neither"
        },
        {
          "value": "arithmetic",
          "label": "arithmetic"
        },
        {
          "value": "geometric",
          "label": "geometric"
        }
      ]
    },
    {
      "prompt": "An arithmetic sequence starts at 10 with difference -2. What is the 4th term?",
      "answer": "4",
      "answers": [
        "4",
        "four"
      ],
      "hint": "10, 8, 6, then one more step.",
      "label": "descending arithmetic",
      "choices": [
        {
          "value": "4",
          "label": "4"
        },
        {
          "value": "6",
          "label": "6"
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
      "prompt": "In the sequence 5, 10, 20, what is the common ratio?",
      "answer": "2",
      "answers": [
        "2",
        "two"
      ],
      "hint": "Divide any term by the one before it.",
      "label": "find ratio",
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
          "value": "10",
          "label": "10"
        },
        {
          "value": "1/2",
          "label": "1/2"
        }
      ]
    }

  ]
};
})();
