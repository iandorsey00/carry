// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["calculus"] = window.CarryPractice.sections["calculus"] || {};
  window.CarryPractice.sections["calculus"]["calculus.limits"] = {
  "id": "calculus.limits",
  "topic": "Calculus",
  "title": "Limits",
  "type": "concept",
  "figure": "calc-limits",
  "intro": [
    "A limit describes what a value approaches.",
    "The input can get close to a number without being exactly there.",
    "Limits are the foundation for derivatives, integrals, and continuity."
  ],
  "problems": [
    {
      "prompt": "As x approaches 2, what does x + 3 approach?",
      "answer": "5",
      "hint": "Substitute the nearby value: 2 + 3.",
      "label": "basic limit"
    },
    {
      "prompt": "As x approaches 3, what does x^2 approach?",
      "answer": "9",
      "hint": "Square the value being approached.",
      "label": "square limit"
    },
    {
      "prompt": "If both one-sided limits approach 4, what is the two-sided limit?",
      "answer": "4",
      "hint": "When left and right agree, the limit is that shared value.",
      "label": "two-sided limit"
    },
    {
      "prompt": "As x approaches 5, what does x - 2 approach?",
      "answer": "3",
      "hint": "Substitute the nearby value: 5 - 2.",
      "label": "basic limit",
      "feedback": "For continuous simple expressions, direct substitution works."
    },
    {
      "prompt": "As x approaches -1, what does x^2 approach?",
      "answer": "1",
      "hint": "Square -1.",
      "label": "square limit",
      "feedback": "Use the value being approached."
    },
    {
      "prompt": "If the left-hand limit is 2 and the right-hand limit is 3, does the two-sided limit exist?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "The two sides must agree.",
      "label": "two-sided limit",
      "feedback": "Compare the two one-sided limits.",
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
