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
    }
  ]
};
})();
