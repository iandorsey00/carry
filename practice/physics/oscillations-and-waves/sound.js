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
    },
    {
      "prompt": "Can sound travel through a vacuum?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "No medium, no wave.",
      "label": "vacuum",
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
      "prompt": "Loudness corresponds to which wave property?",
      "answer": "amplitude",
      "answers": [
        "amplitude"
      ],
      "hint": "Bigger swings push the air harder.",
      "label": "loudness",
      "choices": [
        {
          "value": "amplitude",
          "label": "amplitude"
        },
        {
          "value": "frequency",
          "label": "frequency"
        },
        {
          "value": "wavelength",
          "label": "wavelength"
        },
        {
          "value": "speed",
          "label": "speed"
        }
      ]
    },
    {
      "prompt": "Sound travels fastest through which state of matter?",
      "answer": "solids",
      "answers": [
        "solids",
        "a solid"
      ],
      "hint": "Tightly linked particles pass the push quickly.",
      "label": "fastest medium",
      "choices": [
        {
          "value": "solids",
          "label": "solids"
        },
        {
          "value": "gases",
          "label": "gases"
        },
        {
          "value": "liquids",
          "label": "liquids"
        },
        {
          "value": "vacuum",
          "label": "vacuum"
        }
      ]
    },
    {
      "prompt": "An echo is sound doing what?",
      "answer": "reflecting",
      "answers": [
        "reflecting",
        "reflection"
      ],
      "hint": "It bounces off a surface and returns.",
      "label": "echo",
      "choices": [
        {
          "value": "reflecting",
          "label": "reflecting"
        },
        {
          "value": "refracting",
          "label": "refracting"
        },
        {
          "value": "speeding up",
          "label": "speeding up"
        }
      ]
    },
    {
      "prompt": "The speed of sound in air is about how many meters per second?",
      "answer": "343",
      "answers": [
        "343"
      ],
      "hint": "Roughly a kilometer every three seconds.",
      "label": "sound speed",
      "choices": [
        {
          "value": "343",
          "label": "343"
        },
        {
          "value": "3",
          "label": "3"
        },
        {
          "value": "3000",
          "label": "3000"
        },
        {
          "value": "30000",
          "label": "30000"
        }
      ]
    }

  ]
};
})();
