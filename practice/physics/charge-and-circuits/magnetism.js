// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["physics"] = window.CarryPractice.sections["physics"] || {};
  window.CarryPractice.sections["physics"]["physics.magnetism"] = {
  "id": "physics.magnetism",
  "topic": "Electricity and Magnetism",
  "title": "Magnetism",
  "type": "concept",
  "figure": "physics-magnetism",
  "intro": [
    "Magnets have north and south poles.",
    "Moving charges can create magnetic fields.",
    "Magnetic forces depend on direction."
  ],
  "problems": [
    {
      "prompt": "A moving charge can create an electric field or magnetic field?",
      "answer": "magneticfield",
      "answers": [
        "magnetic field",
        "magnetic"
      ],
      "hint": "Moving charge is connected to magnetism.",
      "label": "moving charge field"
    },
    {
      "prompt": "Like magnetic poles attract or repel?",
      "answer": "repel",
      "answers": [
        "repel",
        "repels"
      ],
      "hint": "North-north or south-south push apart.",
      "label": "like poles"
    },
    {
      "prompt": "Opposite magnetic poles attract or repel?",
      "answer": "attract",
      "answers": [
        "attract",
        "attracts"
      ],
      "hint": "North and south pull together.",
      "label": "opposite poles"
    }
  ]
};
})();
