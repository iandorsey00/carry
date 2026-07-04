// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["precalculus"] = window.CarryPractice.sections["precalculus"] || {};
  window.CarryPractice.sections["precalculus"]["precalculus.exponential-log"] = {
  "id": "precalculus.exponential-log",
  "topic": "Precalculus",
  "title": "Exponential and log functions",
  "type": "concept",
  "figure": "precalc-exponential-log",
  "intro": [
    "Exponential growth is multiplication on a schedule: each step multiplies again, which is why it starts slow and ends enormous.",
    "The logarithm is the same relationship read backwards: it recovers the exponent from the result.",
    "In symbols they undo each other: <math>2^x = 8</math> exactly when <math>\\log_2 8 = x</math>."
],
  "problems": [
    {
      "prompt": "What is 2^3?",
      "answer": "8",
      "hint": "2 times 2 times 2 is 8.",
      "label": "evaluate exponential"
    },
    {
      "prompt": "If 2^x = 8, what is x?",
      "answer": "3",
      "hint": "2 to the third power is 8.",
      "label": "solve exponential"
    },
    {
      "prompt": "What is log 100 using base 10?",
      "answer": "2",
      "hint": "10 squared is 100.",
      "label": "common logarithm"
    }
  ]
};
})();
