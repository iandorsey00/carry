// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["physics"] = window.CarryPractice.sections["physics"] || {};
  window.CarryPractice.sections["physics"]["physics.oscillations"] = {
  "id": "physics.oscillations",
  "topic": "Waves",
  "title": "Oscillations",
  "type": "concept",
  "figure": "physics-oscillations",
  "intro": [
    "An oscillation repeats around an equilibrium position.",
    "Period is the time for one cycle.",
    "Frequency is cycles per second."
  ],
  "problems": [
    {
      "prompt": "Time for one full cycle is period or frequency?",
      "answer": "period",
      "hint": "Period is measured in seconds per cycle.",
      "label": "cycle time"
    },
    {
      "prompt": "Cycles per second is called what?",
      "answer": "frequency",
      "hint": "Frequency counts cycles each second.",
      "label": "cycles per second"
    },
    {
      "prompt": "If period doubles, frequency increases or decreases?",
      "answer": "decreases",
      "answers": [
        "decrease",
        "goes down"
      ],
      "hint": "Frequency is inverse to period.",
      "label": "period frequency relation"
    }
  ]
};
})();
