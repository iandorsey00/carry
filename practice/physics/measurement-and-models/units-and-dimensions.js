// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["physics"] = window.CarryPractice.sections["physics"] || {};
  window.CarryPractice.sections["physics"]["physics.units"] = {
  "id": "physics.units",
  "topic": "Physics Foundations",
  "title": "Units and dimensions",
  "type": "concept",
  "figure": "physics-units",
  "intro": [
    "Physics quantities include a number and a unit.",
    "Units help check whether an equation can make sense.",
    "Dimensions describe the kind of quantity, such as length, time, mass, or force."
  ],
  "problems": [
    {
      "prompt": "Speed has units of distance divided by what?",
      "answer": "time",
      "hint": "Meters per second means meters divided by seconds.",
      "label": "speed unit denominator"
    },
    {
      "prompt": "Which is a unit of force: newton or joule?",
      "answer": "newton",
      "answers": [
        "newton",
        "n"
      ],
      "hint": "A joule is a unit of energy.",
      "label": "force unit"
    },
    {
      "prompt": "What does the unit m/s measure: speed or mass?",
      "answer": "speed",
      "hint": "Meters per second compares distance to time.",
      "label": "meters per second meaning"
    }
  ]
};
})();
