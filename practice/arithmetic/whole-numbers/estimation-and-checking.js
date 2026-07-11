// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["arithmetic"] = window.CarryPractice.sections["arithmetic"] || {};
  window.CarryPractice.sections["arithmetic"]["arithmetic.estimation"] = {
  "id": "arithmetic.estimation",
  "topic": "Arithmetic",
  "title": "Estimation and checking",
  "type": "concept",
  "figure": "estimation",
  "intro": [
    "Estimate before or after a calculation to catch unreasonable answers.",
    "Round to friendly numbers when exact precision is not needed.",
    "Use the estimate as a guardrail, not as the final answer."
  ],
  "problems": [
    {
      "prompt": "Estimate 398 + 201 by rounding to hundreds.",
      "answer": "600",
      "hint": "398 is about 400, and 201 is about 200.",
      "label": "rounded sum"
    },
    {
      "prompt": "Estimate 49 x 6 using 50 x 6.",
      "answer": "300",
      "hint": "50 x 6 is a close check.",
      "label": "estimated product"
    },
    {
      "prompt": "Is 812 - 398 closer to 400 or 600?",
      "answer": "400",
      "hint": "812 - 400 is about 412.",
      "label": "closer estimate",
      "answers": [
        "400"
      ],
      "choices": [
        {
          "value": "400",
          "label": "400"
        },
        {
          "value": "600",
          "label": "600"
        }
      ]
    },
    {
      "prompt": "Estimate 604 + 197 by rounding to hundreds.",
      "answer": "800",
      "hint": "604 is about 600, and 197 is about 200.",
      "label": "rounded sum",
      "feedback": "Round to numbers that are easy to add."
    },
    {
      "prompt": "Estimate 52 x 7 using 50 x 7.",
      "answer": "350",
      "hint": "50 x 7 is a close check.",
      "label": "estimated product",
      "feedback": "Use a nearby friendly number."
    },
    {
      "prompt": "Is 919 - 102 closer to 800 or 900?",
      "answer": "800",
      "hint": "919 - 100 is about 819.",
      "label": "closer estimate",
      "feedback": "Estimate before doing exact subtraction.",
      "answers": [
        "800"
      ],
      "choices": [
        {
          "value": "800",
          "label": "800"
        },
        {
          "value": "900",
          "label": "900"
        }
      ]
    },
    {
      "prompt": "Estimate 31 x 19 using 30 x 20.",
      "answer": "600",
      "hint": "30 x 20 is a nearby easy product.",
      "label": "two-factor estimate",
      "feedback": "Round both factors when exact precision is not needed."
    },
    {
      "prompt": "Estimate 297 + 512 by rounding to hundreds.",
      "answer": "800",
      "answers": [
        "800"
      ],
      "hint": "300 plus 500.",
      "label": "round hundreds",
      "choices": [
        {
          "value": "800",
          "label": "800"
        },
        {
          "value": "700",
          "label": "700"
        },
        {
          "value": "900",
          "label": "900"
        },
        {
          "value": "810",
          "label": "810"
        }
      ]
    }

  ]
};
})();
