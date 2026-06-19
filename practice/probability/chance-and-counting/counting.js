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
    }
  ]
};
})();
