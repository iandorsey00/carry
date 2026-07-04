// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["real-analysis"] = window.CarryPractice.sections["real-analysis"] || {};
  window.CarryPractice.sections["real-analysis"]["real-analysis.differentiation"] = {
  "id": "real-analysis.differentiation",
  "topic": "Real Analysis",
  "title": "Differentiation",
  "type": "concept",
  "figure": "real-differentiation",
  "intro": [
    "Differentiability asks more of a function than continuity: not just an unbroken graph, but a well-defined slope at the point.",
    "The slope is a limit of difference quotients — average rates over shrinking intervals converging to one number.",
    "Every differentiable function is continuous, but corners like <math>|x|</math> at 0 prove the reverse is false."
],
  "problems": [
    {
      "prompt": "If a function is differentiable at a point, is it continuous there?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "Differentiability is stronger than continuity.",
      "label": "differentiability implies continuity",
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
      "prompt": "Does |x| have a derivative at x = 0?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "The left and right slopes at the corner disagree.",
      "label": "absolute value corner",
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
      "prompt": "What is the derivative of x^2?",
      "answer": "2x",
      "answers": [
        "2x",
        "2*x"
      ],
      "hint": "Use the power rule.",
      "label": "basic derivative"
    }
  ]
};
})();
