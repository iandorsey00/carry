// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["physics"] = window.CarryPractice.sections["physics"] || {};
  window.CarryPractice.sections["physics"]["physics.kinematics"] = {
  "id": "physics.kinematics",
  "topic": "Mechanics",
  "title": "Kinematics",
  "type": "concept",
  "figure": "physics-kinematics",
  "intro": [
    "Kinematics describes motion without asking what caused it.",
    "Velocity is change in position over time.",
    "Acceleration is change in velocity over time."
  ],
  "problems": [
    {
      "prompt": "If an object moves 20 m in 4 s, what is its average speed in m/s?",
      "answer": "5",
      "hint": "Divide distance by time: 20 / 4.",
      "label": "average speed"
    },
    {
      "prompt": "Acceleration is change in velocity over what?",
      "answer": "time",
      "hint": "Acceleration measures how quickly velocity changes.",
      "label": "acceleration denominator"
    },
    {
      "prompt": "If velocity is constant, acceleration is what number?",
      "answer": "0",
      "hint": "No change in velocity means zero acceleration.",
      "label": "constant velocity acceleration"
    }
  ]
};
})();
