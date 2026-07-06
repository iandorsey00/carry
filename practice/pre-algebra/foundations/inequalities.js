// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["prealgebra"] = window.CarryPractice.sections["prealgebra"] || {};
  window.CarryPractice.sections["prealgebra"]["prealgebra.inequalities"] = {
  "id": "prealgebra.inequalities",
  "topic": "Pre-Algebra",
  "title": "Inequalities",
  "type": "inequality",
  "figure": "inequality-line",
  "intro": [
    "An inequality compares expressions that may not be equal.",
    "Use the same inverse operations as equations.",
    "When multiplying or dividing by a negative number, reverse the inequality sign."
  ],
  "problems": [
    {
      "a": 1,
      "b": 4,
      "relation": ">",
      "c": 9
    },
    {
      "a": 2,
      "b": 0,
      "relation": "<=",
      "c": 10
    },
    {
      "a": -1,
      "b": 0,
      "relation": "<",
      "c": 3
    },
    {
      "a": 1,
      "b": -3,
      "relation": ">=",
      "c": 4
    },
    {
      "a": 3,
      "b": 0,
      "relation": ">",
      "c": 12
    },
    {
      "a": -2,
      "b": 0,
      "relation": ">=",
      "c": 8
    },
    {
      "a": 2,
      "b": 5,
      "relation": "<",
      "c": 17
    },
    {
      "a": 1,
      "b": 5,
      "relation": "<",
      "c": 12
    }

  ]
};
})();
