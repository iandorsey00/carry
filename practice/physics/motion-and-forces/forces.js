// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["physics"] = window.CarryPractice.sections["physics"] || {};
  window.CarryPractice.sections["physics"]["physics.forces"] = {
  "id": "physics.forces",
  "topic": "Mechanics",
  "title": "Forces",
  "type": "concept",
  "figure": "physics-forces",
  "intro": [
    "A force is a push or pull.",
    "Net force is the total force after combining directions.",
    "Newton's second law is F = ma."
  ],
  "problems": [
    {
      "prompt": "What is the net force on a 2 kg mass accelerating at 3 m/s^2?",
      "answer": "6",
      "hint": "Use F = ma: 2 times 3.",
      "label": "net force"
    },
    {
      "prompt": "Balanced forces give zero or nonzero net force?",
      "answer": "zero",
      "answers": [
        "zero",
        "0"
      ],
      "hint": "Balanced means they cancel.",
      "label": "balanced force",
      "choices": [
        {
          "value": "zero",
          "label": "zero"
        },
        {
          "value": "nonzero net force",
          "label": "nonzero net force"
        }
      ]
    },
    {
      "prompt": "Does friction usually oppose motion or cause no effect?",
      "answer": "oppose",
      "answers": [
        "opposes",
        "opposes motion",
        "oppose motion"
      ],
      "hint": "Friction acts against slipping or sliding.",
      "label": "friction direction",
      "choices": [
        {
          "value": "oppose",
          "label": "oppose motion"
        },
        {
          "value": "noeffect",
          "label": "cause no effect"
        }
      ]
    }
  ]
};
})();
