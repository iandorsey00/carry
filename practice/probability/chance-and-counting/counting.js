// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["probability"] = window.CarryPractice.sections["probability"] || {};
  window.CarryPractice.sections["probability"]["probability.counting"] = {
  "id": "probability.counting",
  "topic": "Probability",
  "title": "Counting",
  "type": "concept",
  "figure": "probability-counting",
  "intro": [
    "Counting methods help find the size of a sample space.",
    "If choices happen in sequence, multiply the number of choices.",
    "Order matters for permutations and not for combinations."
  ],
  "problems": [
    {
      "prompt": "A shirt has 3 colors and 2 sizes. How many color-size choices are possible?",
      "answer": "6",
      "hint": "Multiply 3 choices by 2 choices.",
      "label": "product rule"
    },
    {
      "prompt": "If order matters, are you counting permutations or combinations?",
      "answer": "permutations",
      "answers": [
        "permutation",
        "permutations"
      ],
      "hint": "Permutations care about order.",
      "label": "order matters",
      "choices": [
        {
          "value": "permutations",
          "label": "permutations"
        },
        {
          "value": "combinations",
          "label": "combinations"
        }
      ]
    },
    {
      "prompt": "If order does not matter, are you counting permutations or combinations?",
      "answer": "combinations",
      "answers": [
        "combination",
        "combinations"
      ],
      "hint": "Combinations choose groups without order.",
      "label": "order not matter",
      "choices": [
        {
          "value": "permutations",
          "label": "permutations"
        },
        {
          "value": "combinations",
          "label": "combinations"
        }
      ]
    },
    {
      "prompt": "How many ways can 3 different books be arranged on a shelf?",
      "answer": "6",
      "answers": [
        "6",
        "six"
      ],
      "hint": "3 choices, then 2, then 1.",
      "label": "arrange books",
      "choices": [
        {
          "value": "6",
          "label": "6"
        },
        {
          "value": "3",
          "label": "3"
        },
        {
          "value": "9",
          "label": "9"
        },
        {
          "value": "12",
          "label": "12"
        }
      ]
    },
    {
      "prompt": "How many two-topping pizzas can be made from 4 toppings, order irrelevant?",
      "answer": "6",
      "answers": [
        "6",
        "six"
      ],
      "hint": "Choosing 2 of 4 when order does not matter.",
      "label": "choose toppings",
      "choices": [
        {
          "value": "6",
          "label": "6"
        },
        {
          "value": "8",
          "label": "8"
        },
        {
          "value": "12",
          "label": "12"
        },
        {
          "value": "4",
          "label": "4"
        }
      ]
    },
    {
      "prompt": "A code uses 2 letters then 1 digit. With 26 letters and 10 digits, how many codes?",
      "answer": "6760",
      "answers": [
        "6760"
      ],
      "hint": "Multiply the choices: 26 × 26 × 10.",
      "label": "code count",
      "choices": [
        {
          "value": "6760",
          "label": "6760"
        },
        {
          "value": "676",
          "label": "676"
        },
        {
          "value": "260",
          "label": "260"
        },
        {
          "value": "520",
          "label": "520"
        }
      ]
    },
    {
      "prompt": "Does 4! equal 24?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "4 × 3 × 2 × 1.",
      "label": "factorial",
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
      "prompt": "Arranging people in a line: permutations or combinations?",
      "answer": "permutations",
      "answers": [
        "permutations"
      ],
      "hint": "A line has an order.",
      "label": "line order",
      "choices": [
        {
          "value": "permutations",
          "label": "permutations"
        },
        {
          "value": "combinations",
          "label": "combinations"
        }
      ]
    }

  ]
};
})();
