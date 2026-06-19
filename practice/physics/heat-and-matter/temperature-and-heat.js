// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["physics"] = window.CarryPractice.sections["physics"] || {};
  window.CarryPractice.sections["physics"]["physics.temperature-heat"] = {
  "id": "physics.temperature-heat",
  "topic": "Thermodynamics",
  "title": "Temperature and heat",
  "type": "concept",
  "figure": "physics-heat",
  "intro": [
    "Temperature measures average microscopic kinetic energy.",
    "Heat is energy transferred because of temperature difference.",
    "Heat flows spontaneously from hotter to colder objects."
  ],
  "problems": [
    {
      "prompt": "Heat flows naturally from hot to cold or cold to hot?",
      "answer": "hottocold",
      "answers": [
        "hot to cold",
        "hotter to colder"
      ],
      "hint": "Thermal energy flows from higher temperature to lower temperature.",
      "label": "heat direction",
      "choices": [
        {
          "value": "hottocold",
          "label": "hot to cold"
        },
        {
          "value": "cold to hot",
          "label": "cold to hot"
        }
      ]
    },
    {
      "prompt": "Temperature is related to average kinetic energy: yes or no?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "Microscopic motion is tied to temperature.",
      "label": "temperature meaning",
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
      "prompt": "Heat is energy transfer caused by what difference?",
      "answer": "temperature",
      "hint": "A temperature difference drives heat transfer.",
      "label": "heat cause",
      "choices": [
        {
          "value": "temperature",
          "label": "temperature"
        },
        {
          "value": "pressure",
          "label": "pressure"
        },
        {
          "value": "volume",
          "label": "volume"
        },
        {
          "value": "mass",
          "label": "mass"
        }
      ]
    }
  ]
};
})();
