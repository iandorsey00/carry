// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["algebra"] = window.CarryPractice.sections["algebra"] || {};
  window.CarryPractice.sections["algebra"]["algebra.linear-equations"] = {
  "id": "algebra.linear-equations",
  "topic": "Algebra",
  "title": "Linear equations",
  "type": "equation",
  "figure": "equation-balance",
  "intro": [
    "Linear equations can be solved by isolating the variable.",
    "Undo addition or subtraction before undoing multiplication or division.",
    "Each transformation must preserve equality."
  ],
  "problems": [
    {
      "a": 4,
      "b": -3,
      "c": 13
    },
    {
      "a": -2,
      "b": 5,
      "c": 17
    },
    {
      "a": 5,
      "b": 10,
      "c": -15
    },
    {
      "a": 3,
      "b": 6,
      "c": 21
    },
    {
      "a": -4,
      "b": 8,
      "c": -12
    },
    {
      "a": 7,
      "b": -2,
      "c": 26
    },
    {
      "a": 2,
      "b": -9,
      "c": 5
    },
    {
      "a": 6,
      "b": 4,
      "c": 22
    }

  ]
};
})();
