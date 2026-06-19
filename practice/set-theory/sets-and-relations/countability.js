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
    "A finite set has a specific whole-number size.",
    "An infinite set is countable when its elements can be listed in a sequence.",
    "Some infinite sets, such as the real numbers, are uncountable."
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
    }
  ]
};
})();
