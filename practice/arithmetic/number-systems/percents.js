// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["arithmetic"] = window.CarryPractice.sections["arithmetic"] || {};
  window.CarryPractice.sections["arithmetic"]["arithmetic.percents"] = {
  "id": "arithmetic.percents",
  "topic": "Arithmetic",
  "title": "Percents",
  "type": "concept",
  "figure": "percent-grid",
  "intro": [
    "Percent means per hundred.",
    "50% is half, 25% is a quarter, and 10% is one tenth.",
    "Convert percent questions into parts of 100 when possible."
  ],
  "problems": [
    {
      "prompt": "What is 25% of 80?",
      "answer": "20",
      "hint": "25% is one quarter.",
      "label": "percent of a number"
    },
    {
      "prompt": "Write 0.6 as a percent.",
      "answer": "60%",
      "hint": "0.6 is 60 hundredths.",
      "label": "decimal to percent"
    },
    {
      "prompt": "What is 10% of 350?",
      "answer": "35",
      "hint": "Move one place because 10% is one tenth.",
      "label": "ten percent"
    }
  ]
};
})();
