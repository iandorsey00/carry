// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["probability"] = window.CarryPractice.sections["probability"] || {};
  window.CarryPractice.sections["probability"]["probability.sample-spaces"] = {
  "id": "probability.sample-spaces",
  "topic": "Probability",
  "title": "Sample spaces",
  "type": "concept",
  "figure": "probability-sample-space",
  "intro": [
    "A sample space lists every possible outcome.",
    "An event is a subset of the sample space.",
    "Probability starts by naming what can happen."
  ],
  "problems": [
    {
      "prompt": "When flipping one coin, how many outcomes are in the sample space?",
      "answer": "2",
      "hint": "Heads and tails.",
      "label": "coin sample space size"
    },
    {
      "prompt": "For one die, is rolling an even number an outcome or an event?",
      "answer": "event",
      "hint": "It contains several outcomes: 2, 4, and 6.",
      "label": "event meaning"
    },
    {
      "prompt": "For one die, how many outcomes are possible?",
      "answer": "6",
      "hint": "A standard die has faces 1 through 6.",
      "label": "die outcomes"
    }
  ]
};
})();
