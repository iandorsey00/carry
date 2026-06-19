// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["physics"] = window.CarryPractice.sections["physics"] || {};
  window.CarryPractice.sections["physics"]["physics.circuits"] = {
  "id": "physics.circuits",
  "topic": "Electricity and Magnetism",
  "title": "Circuits",
  "type": "concept",
  "figure": "physics-circuits",
  "intro": [
    "Current is the flow of electric charge.",
    "Voltage is energy per unit charge.",
    "Ohm's law is V = IR."
  ],
  "problems": [
    {
      "prompt": "Using V = IR, what is V when I = 2 A and R = 5 ohms?",
      "answer": "10",
      "hint": "Multiply current by resistance.",
      "label": "ohms law voltage"
    },
    {
      "prompt": "Current measures flow of what?",
      "answer": "charge",
      "hint": "Electric current is moving charge.",
      "label": "current meaning"
    },
    {
      "prompt": "In a series circuit, current is the same through each component: yes or no?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "There is only one path in series.",
      "label": "series current"
    }
  ]
};
})();
