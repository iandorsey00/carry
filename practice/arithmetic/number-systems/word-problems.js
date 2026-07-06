// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["arithmetic"] = window.CarryPractice.sections["arithmetic"] || {};
  window.CarryPractice.sections["arithmetic"]["arithmetic.word-problems"] = {
  "id": "arithmetic.word-problems",
  "topic": "Arithmetic",
  "title": "Word problems",
  "type": "concept",
  "figure": "word-problem",
  "intro": [
    "Find what the question is asking for before calculating.",
    "Identify the quantities and the operation connecting them.",
    "Check that the answer uses the right unit."
  ],
  "problems": [
    {
      "prompt": "Mina has 18 cards and gets 7 more. How many cards does she have?",
      "answer": "25",
      "hint": "More cards means addition.",
      "label": "cards total"
    },
    {
      "prompt": "A box has 6 rows of 8 tiles. How many tiles are there?",
      "answer": "48",
      "hint": "Equal rows suggest multiplication.",
      "label": "array total"
    },
    {
      "prompt": "There are 45 apples in 5 equal bags. How many apples are in each bag?",
      "answer": "9",
      "hint": "Split 45 into 5 equal groups.",
      "label": "equal group size"
    },
    {
      "prompt": "24 cookies are shared equally among 4 friends. How many does each get?",
      "answer": "6",
      "answers": [
        "6"
      ],
      "hint": "Equal shares means division.",
      "label": "share cookies",
      "choices": [
        {
          "value": "6",
          "label": "6"
        },
        {
          "value": "4",
          "label": "4"
        },
        {
          "value": "8",
          "label": "8"
        },
        {
          "value": "20",
          "label": "20"
        }
      ]
    },
    {
      "prompt": "3 packs each hold 12 pencils. How many pencils in all?",
      "answer": "36",
      "answers": [
        "36"
      ],
      "hint": "Equal groups means multiplication.",
      "label": "pencil packs",
      "choices": [
        {
          "value": "36",
          "label": "36"
        },
        {
          "value": "15",
          "label": "15"
        },
        {
          "value": "24",
          "label": "24"
        },
        {
          "value": "48",
          "label": "48"
        }
      ]
    },
    {
      "prompt": "You have 50 dollars and spend 23. How much is left?",
      "answer": "27",
      "answers": [
        "27"
      ],
      "hint": "Spending means subtracting.",
      "label": "money left",
      "choices": [
        {
          "value": "27",
          "label": "27"
        },
        {
          "value": "33",
          "label": "33"
        },
        {
          "value": "23",
          "label": "23"
        },
        {
          "value": "73",
          "label": "73"
        }
      ]
    },
    {
      "prompt": "A bookcase has 8 shelves with 9 books on each. How many books?",
      "answer": "72",
      "answers": [
        "72"
      ],
      "hint": "Rows of equal groups multiply.",
      "label": "bookcase",
      "choices": [
        {
          "value": "72",
          "label": "72"
        },
        {
          "value": "17",
          "label": "17"
        },
        {
          "value": "81",
          "label": "81"
        },
        {
          "value": "63",
          "label": "63"
        }
      ]
    },
    {
      "prompt": "A test lasts 60 minutes and 35 have passed. How many remain?",
      "answer": "25",
      "answers": [
        "25"
      ],
      "hint": "Find the missing part of the hour.",
      "label": "time left",
      "choices": [
        {
          "value": "25",
          "label": "25"
        },
        {
          "value": "35",
          "label": "35"
        },
        {
          "value": "15",
          "label": "15"
        },
        {
          "value": "95",
          "label": "95"
        }
      ]
    }

  ]
};
})();
