// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["prealgebra"] = window.CarryPractice.sections["prealgebra"] || {};
  window.CarryPractice.sections["prealgebra"]["prealgebra.equations"] = {
  "id": "prealgebra.equations",
  "topic": "Pre-Algebra",
  "title": "Equations",
  "type": "equation",
  "figure": "equation-balance",
  "intro": [
    "An equation says two expressions are equal.",
    "Solve by doing the same operation to both sides.",
    "Check by substituting the solution back into the original equation."
  ],
  "problems": [
    {
      "a": 1,
      "b": 7,
      "c": 12
    },
    {
      "a": 3,
      "b": 0,
      "c": 18
    },
    {
      "a": 2,
      "b": 5,
      "c": 17
    }
  ]
};
})();
