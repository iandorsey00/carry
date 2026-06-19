// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["geometry"] = window.CarryPractice.sections["geometry"] || {};
  window.CarryPractice.sections["geometry"]["geometry.triangles"] = {
  "id": "geometry.triangles",
  "topic": "Geometry",
  "title": "Triangles",
  "type": "concept",
  "figure": "geometry-triangle",
  "intro": [
    "Every triangle has three sides and three angles.",
    "The three interior angles of a triangle add to 180 degrees.",
    "Equal side lengths usually create equal angle relationships."
  ],
  "problems": [
    {
      "prompt": "A triangle has angles 60 degrees and 70 degrees. What is the third angle?",
      "answer": "50",
      "answers": [
        "50",
        "50degrees"
      ],
      "hint": "Subtract 60 and 70 from 180.",
      "label": "third angle"
    },
    {
      "prompt": "A triangle with three equal sides is called what?",
      "answer": "equilateral",
      "hint": "Equal sides means equilateral.",
      "label": "triangle type"
    },
    {
      "prompt": "A right triangle has one angle of 90 degrees and another of 35 degrees. What is the third angle?",
      "answer": "55",
      "answers": [
        "55",
        "55degrees"
      ],
      "hint": "180 - 90 - 35 = 55.",
      "label": "right triangle angle"
    }
  ]
};
})();
