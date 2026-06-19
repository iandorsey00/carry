// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["probability"] = window.CarryPractice.sections["probability"] || {};
  window.CarryPractice.sections["probability"]["probability.random-variables"] = {
  "id": "probability.random-variables",
  "topic": "Probability",
  "title": "Random variables",
  "type": "concept",
  "figure": "probability-random-variable",
  "intro": [
    "A random variable assigns a number to each outcome.",
    "A distribution lists the possible values and their probabilities.",
    "Expected value is the long-run average value."
  ],
  "problems": [
    {
      "prompt": "A random variable turns outcomes into numbers or angles?",
      "answer": "numbers",
      "answers": [
        "number",
        "numbers"
      ],
      "hint": "It assigns numerical values to outcomes.",
      "label": "random variable meaning"
    },
    {
      "prompt": "For a fair coin where heads is 1 and tails is 0, what is the expected value?",
      "answer": "1/2",
      "answers": [
        "1/2",
        "0.5"
      ],
      "hint": "Average the two equally likely values 1 and 0.",
      "label": "coin expected value"
    },
    {
      "prompt": "A probability distribution lists values and what else?",
      "answer": "probabilities",
      "answers": [
        "probability",
        "probabilities"
      ],
      "hint": "Each value needs a chance attached to it.",
      "label": "distribution parts"
    }
  ]
};
})();
