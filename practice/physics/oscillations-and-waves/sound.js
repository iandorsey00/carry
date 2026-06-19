// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["physics"] = window.CarryPractice.sections["physics"] || {};
  window.CarryPractice.sections["physics"]["physics.sound"] = {
  "id": "physics.sound",
  "topic": "Waves",
  "title": "Sound",
  "type": "concept",
  "figure": "physics-sound",
  "intro": [
    "Sound is a mechanical wave.",
    "Sound needs a medium such as air, water, or a solid.",
    "Pitch is related to frequency."
  ],
  "problems": [
    {
      "prompt": "Does sound need a medium?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "Sound cannot travel through empty space.",
      "label": "sound medium",
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
      "prompt": "Higher frequency means higher or lower pitch?",
      "answer": "higher",
      "hint": "Pitch rises as frequency rises.",
      "label": "pitch frequency",
      "choices": [
        {
          "value": "higher",
          "label": "higher"
        },
        {
          "value": "lower pitch",
          "label": "lower pitch"
        }
      ]
    },
    {
      "prompt": "Sound in air is longitudinal or transverse?",
      "answer": "longitudinal",
      "hint": "Air compressions move along the direction of travel.",
      "label": "sound wave type",
      "choices": [
        {
          "value": "longitudinal",
          "label": "longitudinal"
        },
        {
          "value": "transverse",
          "label": "transverse"
        }
      ]
    }
  ]
};
})();
