// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["probability"] = window.CarryPractice.sections["probability"] || {};
  window.CarryPractice.sections["probability"]["probability.basic-probability"] = {
  "id": "probability.basic-probability",
  "topic": "Probability",
  "title": "Basic probability",
  "type": "concept",
  "figure": "probability-basic",
  "intro": [
    "Probability compares favorable outcomes to all equally likely outcomes.",
    "A probability of 0 is impossible; a probability of 1 is certain.",
    "Probabilities can be written as fractions, decimals, or percents."
  ],
  "problems": [
    {
      "prompt": "A fair die has 6 outcomes. What is the probability of rolling a 3?",
      "answer": "1/6",
      "hint": "One favorable outcome out of six total outcomes.",
      "label": "single die probability"
    },
    {
      "prompt": "What is the probability of getting heads on a fair coin?",
      "answer": "1/2",
      "answers": [
        "1/2",
        "0.5",
        "50%"
      ],
      "hint": "One favorable outcome out of two.",
      "label": "coin probability"
    },
    {
      "prompt": "If an event is certain, what is its probability?",
      "answer": "1",
      "answers": [
        "1",
        "100%"
      ],
      "hint": "Certain means it always happens.",
      "label": "certain probability"
    }
  ]
};
})();
