// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["calculus"] = window.CarryPractice.sections["calculus"] || {};
  window.CarryPractice.sections["calculus"]["calculus.applications"] = {
  "id": "calculus.applications",
  "topic": "Calculus",
  "title": "Applications",
  "type": "concept",
  "figure": "calc-applications",
  "intro": [
    "Calculus connects formulas to motion, growth, area, and optimization.",
    "Derivatives turn position into velocity and reveal local change.",
    "Integrals turn rates into accumulated totals."
  ],
  "problems": [
    {
      "prompt": "If s(t) = t^2, what is the velocity at t = 3?",
      "answer": "6",
      "hint": "Velocity is the derivative. The derivative of t^2 is 2t.",
      "label": "velocity from position"
    },
    {
      "prompt": "A rate is 5 units per second for 4 seconds. What total accumulates?",
      "answer": "20",
      "hint": "Constant rate times time gives total accumulation.",
      "label": "accumulated total",
      "choices": [
        {
          "value": "20",
          "label": "20"
        },
        {
          "value": "force",
          "label": "force"
        },
        {
          "value": "energy",
          "label": "energy"
        },
        {
          "value": "momentum",
          "label": "momentum"
        }
      ]
    },
    {
      "prompt": "If a derivative changes from positive to negative, the function has a local what?",
      "answer": "maximum",
      "answers": [
        "maximum",
        "max"
      ],
      "hint": "Increasing then decreasing creates a peak.",
      "label": "local maximum",
      "choices": [
        {
          "value": "maximum",
          "label": "maximum"
        },
        {
          "value": "positive",
          "label": "positive"
        },
        {
          "value": "negative",
          "label": "negative"
        },
        {
          "value": "zero",
          "label": "zero"
        }
      ]
    }
  ]
};
})();
