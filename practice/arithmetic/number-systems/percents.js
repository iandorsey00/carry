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
    },
    {
      "prompt": "What is 50% of 90?",
      "answer": "45",
      "hint": "50% is half.",
      "label": "fifty percent",
      "feedback": "Translate the percent into a familiar fraction."
    },
    {
      "prompt": "What is 20% of 60?",
      "answer": "12",
      "hint": "10% is 6, so 20% is 12.",
      "label": "twenty percent",
      "feedback": "Find 10% first if that is easier."
    },
    {
      "prompt": "Write 0.35 as a percent.",
      "answer": "35%",
      "answers": [
        "35%",
        "35"
      ],
      "hint": "0.35 is 35 hundredths.",
      "label": "decimal to percent",
      "feedback": "Move from decimal hundredths to percent."
    },
    {
      "prompt": "Write 75% as a decimal.",
      "answer": "0.75",
      "answers": [
        "0.75",
        ".75"
      ],
      "hint": "75% means 75 out of 100.",
      "label": "percent to decimal",
      "feedback": "Percent means per hundred."
    }
  ]
};
})();
