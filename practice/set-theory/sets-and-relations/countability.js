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
    }
  ]
};
})();
