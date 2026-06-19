// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["physics"] = window.CarryPractice.sections["physics"] || {};
  window.CarryPractice.sections["physics"]["physics.scalars-vectors"] = {
  "id": "physics.scalars-vectors",
  "topic": "Physics Foundations",
  "title": "Scalars and vectors",
  "type": "concept",
  "figure": "physics-vectors",
  "intro": [
    "A scalar has magnitude only.",
    "A vector has magnitude and direction.",
    "Velocity, force, acceleration, and displacement are vectors."
  ],
  "problems": [
    {
      "prompt": "Is speed a scalar or vector?",
      "answer": "scalar",
      "hint": "Speed has size but no direction.",
      "label": "speed type",
      "answers": [
        "false"
      ],
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
      "prompt": "Is velocity a scalar or vector?",
      "answer": "vector",
      "hint": "Velocity includes direction.",
      "label": "velocity type",
      "answers": [
        "false"
      ],
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
      "prompt": "A 10 N force east is a scalar or vector?",
      "answer": "vector",
      "hint": "The direction east matters.",
      "label": "force type",
      "choices": [
        {
          "value": "scalar",
          "label": "scalar"
        },
        {
          "value": "vector",
          "label": "vector"
        }
      ]
    }
  ]
};
})();
