// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["arithmetic"] = window.CarryPractice.sections["arithmetic"] || {};
  window.CarryPractice.sections["arithmetic"]["arithmetic.decimals"] = {
  "id": "arithmetic.decimals",
  "topic": "Arithmetic",
  "title": "Decimals",
  "type": "concept",
  "figure": "decimal-grid",
  "intro": [
    "Decimals extend place value to the right of the ones place.",
    "Tenths are one place after the decimal point.",
    "Hundredths are two places after the decimal point."
  ],
  "problems": [
    {
      "prompt": "What is 0.4 + 0.7?",
      "answer": "1.1",
      "hint": "Four tenths plus seven tenths is eleven tenths.",
      "label": "decimal sum"
    },
    {
      "prompt": "Write 3 tenths as a decimal.",
      "answer": "0.3",
      "hint": "Tenths use one digit after the decimal point.",
      "label": "tenths decimal"
    },
    {
      "prompt": "Which is larger: 0.8 or 0.75?",
      "answer": "0.8",
      "hint": "0.8 is the same as 0.80.",
      "label": "larger decimal"
    }
  ]
};
})();
