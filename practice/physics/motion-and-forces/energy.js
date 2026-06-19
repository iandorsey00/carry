// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["physics"] = window.CarryPractice.sections["physics"] || {};
  window.CarryPractice.sections["physics"]["physics.energy"] = {
  "id": "physics.energy",
  "topic": "Mechanics",
  "title": "Energy",
  "type": "concept",
  "figure": "physics-energy",
  "intro": [
    "Energy is the capacity to do work or cause change.",
    "Kinetic energy is energy of motion.",
    "Gravitational potential energy depends on height."
  ],
  "problems": [
    {
      "prompt": "Kinetic energy belongs to motion or height?",
      "answer": "motion",
      "hint": "Kinetic means moving.",
      "label": "kinetic energy meaning",
      "choices": [
        {
          "value": "motion",
          "label": "motion"
        },
        {
          "value": "height",
          "label": "height"
        }
      ]
    },
    {
      "prompt": "What happens to gravitational potential energy when height increases?",
      "answer": "increases",
      "answers": [
        "increase",
        "goes up"
      ],
      "hint": "Greater height means greater mgh.",
      "label": "height energy",
      "choices": [
        {
          "value": "increases",
          "label": "increases"
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
      "prompt": "Work transfers what quantity: energy or charge?",
      "answer": "energy",
      "hint": "Work is a way of transferring energy.",
      "label": "work transfer",
      "choices": [
        {
          "value": "energy",
          "label": "energy"
        },
        {
          "value": "charge",
          "label": "charge"
        }
      ]
    }
  ]
};
})();
