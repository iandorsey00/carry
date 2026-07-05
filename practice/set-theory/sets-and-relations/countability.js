// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["set-theory"] = window.CarryPractice.sections["set-theory"] || {};
  window.CarryPractice.sections["set-theory"]["set-theory.countability"] = {
  "id": "set-theory.countability",
  "topic": "Set Theory",
  "title": "Countability",
  "type": "concept",
  "figure": "set-countability",
  "intro": [
    "Set theory's boldest discovery: infinities come in sizes, and some are genuinely bigger than others.",
    "An infinite set is countable if its members can be lined up in a list — first, second, third — without missing any.",
    "The integers and even the fractions can be listed; Cantor proved the real numbers cannot."
],
  "problems": [
    {
      "prompt": "How many elements are in {a, b, c}?",
      "answer": "3",
      "hint": "Count the listed elements.",
      "label": "finite size"
    },
    {
      "prompt": "Are the positive integers countable?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "They are already listed as 1, 2, 3, and so on.",
      "label": "integer countability",
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
      "prompt": "Are the real numbers countable?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "The real numbers cannot be fully listed in a sequence.",
      "label": "real countability",
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
      "prompt": "Are the even numbers countable?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "List them: 2, 4, 6, 8, and so on.",
      "label": "evens countable",
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
      "prompt": "Is every subset of a countable set countable?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "Strike the missing members out of the list and keep the order.",
      "label": "subset countable",
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
      "prompt": "Who proved that the real numbers are uncountable?",
      "answer": "Cantor",
      "answers": [
        "Cantor",
        "cantor"
      ],
      "hint": "The founder of set theory, in 1874.",
      "label": "cantor",
      "choices": [
        {
          "value": "Cantor",
          "label": "Cantor"
        },
        {
          "value": "Euclid",
          "label": "Euclid"
        },
        {
          "value": "Gauss",
          "label": "Gauss"
        },
        {
          "value": "Euler",
          "label": "Euler"
        }
      ]
    },
    {
      "prompt": "The argument that defeats any proposed list of all real numbers is called what?",
      "answer": "the diagonal argument",
      "answers": [
        "the diagonal argument",
        "diagonal argument",
        "diagonalization"
      ],
      "hint": "It changes the nth digit of the nth number on the list.",
      "label": "diagonal",
      "choices": [
        {
          "value": "the diagonal argument",
          "label": "the diagonal argument"
        },
        {
          "value": "the triangle argument",
          "label": "the triangle argument"
        },
        {
          "value": "induction",
          "label": "induction"
        }
      ]
    },
    {
      "prompt": "Can a countable set be infinite?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "Countable includes both finite sets and listable infinite ones.",
      "label": "countably infinite",
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
