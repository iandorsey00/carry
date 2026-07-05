// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["prealgebra"] = window.CarryPractice.sections["prealgebra"] || {};
  window.CarryPractice.sections["prealgebra"]["prealgebra.integers"] = {
  "id": "prealgebra.integers",
  "topic": "Pre-Algebra",
  "title": "Integers",
  "type": "concept",
  "figure": "integer-line",
  "intro": [
    "Use integers to describe values above and below zero.",
    "Addition and subtraction can be tracked as movement on a number line.",
    "Multiplication and division use sign rules: same signs give positive, different signs give negative."
  ],
  "problems": [
    {
      "prompt": "What is -6 + 14?",
      "answer": "8",
      "hint": "Move 14 steps right from -6.",
      "label": "integer addition"
    },
    {
      "prompt": "What is -4 x 7?",
      "answer": "-28",
      "hint": "Different signs make a negative product.",
      "label": "integer product"
    },
    {
      "prompt": "What is -30 / -5?",
      "answer": "6",
      "hint": "Same signs make a positive quotient.",
      "label": "integer quotient"
    },
    {
      "prompt": "What is -8 + 3?",
      "answer": "-5",
      "hint": "Move 3 steps right from -8.",
      "label": "integer addition",
      "feedback": "Use the number line direction: adding moves right."
    },
    {
      "prompt": "What is -5 - 6?",
      "answer": "-11",
      "hint": "Move 6 steps left from -5.",
      "label": "integer subtraction",
      "feedback": "Subtracting a positive moves left."
    },
    {
      "prompt": "What is -6 x -4?",
      "answer": "24",
      "hint": "Same signs make a positive product.",
      "label": "integer product",
      "feedback": "Check the sign rule first, then multiply."
    },
    {
      "prompt": "What is 42 / -7?",
      "answer": "-6",
      "hint": "Different signs make a negative quotient.",
      "label": "integer quotient",
      "feedback": "Different signs give a negative result."
    },
    {
      "prompt": "What is -9 + 9?",
      "answer": "0",
      "answers": [
        "0",
        "zero"
      ],
      "hint": "Opposites cancel exactly.",
      "label": "opposites cancel",
      "choices": [
        {
          "value": "0",
          "label": "0"
        },
        {
          "value": "-18",
          "label": "-18"
        },
        {
          "value": "18",
          "label": "18"
        },
        {
          "value": "-1",
          "label": "-1"
        }
      ]
    }

  ]
};
})();
