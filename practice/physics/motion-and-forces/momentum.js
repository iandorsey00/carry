// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["physics"] = window.CarryPractice.sections["physics"] || {};
  window.CarryPractice.sections["physics"]["physics.momentum"] = {
  "id": "physics.momentum",
  "topic": "Mechanics",
  "title": "Momentum",
  "type": "concept",
  "figure": "physics-momentum",
  "intro": [
    "Momentum measures mass in motion.",
    "Momentum is p = mv.",
    "In an isolated system, total momentum is conserved."
  ],
  "problems": [
    {
      "prompt": "What is the momentum of a 3 kg object moving at 4 m/s?",
      "answer": "12",
      "hint": "Use p = mv: 3 times 4.",
      "label": "momentum"
    },
    {
      "prompt": "Momentum depends on mass and what?",
      "answer": "velocity",
      "hint": "p = mv.",
      "label": "momentum factor",
      "choices": [
        {
          "value": "velocity",
          "label": "velocity"
        },
        {
          "value": "prime",
          "label": "prime"
        },
        {
          "value": "composite",
          "label": "composite"
        },
        {
          "value": "factor",
          "label": "factor"
        }
      ]
    },
    {
      "prompt": "In an isolated collision, total momentum is conserved: yes or no?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "Momentum conservation is the key collision rule.",
      "label": "momentum conservation",
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
