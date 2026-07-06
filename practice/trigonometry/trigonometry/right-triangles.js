// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["trigonometry"] = window.CarryPractice.sections["trigonometry"] || {};
  window.CarryPractice.sections["trigonometry"]["trigonometry.right-triangles"] = {
  "id": "trigonometry.right-triangles",
  "topic": "Trigonometry",
  "title": "Right triangles",
  "type": "concept",
  "figure": "trig-right-triangle",
  "intro": [
    "Right-triangle trigonometry turns an angle into ratios of sides — and the ratios ignore the triangle's size completely.",
    "Fix an acute angle and the side labels follow from its point of view: opposite, adjacent, hypotenuse.",
    "Sine is opposite over hypotenuse, cosine is adjacent over hypotenuse, and tangent is opposite over adjacent."
],
  "problems": [
    {
      "prompt": "In a right triangle, opposite = 3 and hypotenuse = 5. What is sin θ?",
      "answer": "3/5",
      "hint": "Sine is opposite over hypotenuse.",
      "label": "sine ratio"
    },
    {
      "prompt": "In the same triangle, adjacent = 4 and hypotenuse = 5. What is cos θ?",
      "answer": "4/5",
      "hint": "Cosine is adjacent over hypotenuse.",
      "label": "cosine ratio"
    },
    {
      "prompt": "If opposite = 3 and adjacent = 4, what is tan θ?",
      "answer": "3/4",
      "hint": "Tangent is opposite over adjacent.",
      "label": "tangent ratio"
    },
    {
      "prompt": "In a right triangle, opposite = 5 and hypotenuse = 13. What is sin θ?",
      "answer": "5/13",
      "hint": "Sine is opposite over hypotenuse.",
      "label": "sine ratio",
      "feedback": "Use the side relative to the chosen angle."
    },
    {
      "prompt": "If adjacent = 12 and hypotenuse = 13, what is cos θ?",
      "answer": "12/13",
      "hint": "Cosine is adjacent over hypotenuse.",
      "label": "cosine ratio",
      "feedback": "Cosine uses the side next to the angle."
    },
    {
      "prompt": "If opposite = 5 and adjacent = 12, what is tan θ?",
      "answer": "5/12",
      "hint": "Tangent is opposite over adjacent.",
      "label": "tangent ratio",
      "feedback": "Tangent does not use the hypotenuse."
    },
    {
      "prompt": "If sin θ = 3/5 and the opposite side is 3, what is the hypotenuse?",
      "answer": "5",
      "answers": [
        "5",
        "five"
      ],
      "hint": "Sine is opposite over hypotenuse.",
      "label": "solve hypotenuse",
      "choices": [
        {
          "value": "5",
          "label": "5"
        },
        {
          "value": "3",
          "label": "3"
        },
        {
          "value": "4",
          "label": "4"
        },
        {
          "value": "15",
          "label": "15"
        }
      ]
    },
    {
      "prompt": "What is tan 45°?",
      "answer": "1",
      "answers": [
        "1",
        "one"
      ],
      "hint": "At 45 degrees, opposite and adjacent are equal.",
      "label": "tan forty five",
      "choices": [
        {
          "value": "1",
          "label": "1"
        },
        {
          "value": "0",
          "label": "0"
        },
        {
          "value": "1/2",
          "label": "1/2"
        },
        {
          "value": "√2",
          "label": "√2"
        }
      ]
    }

  ]
};
})();
