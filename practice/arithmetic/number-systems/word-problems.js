// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["arithmetic"] = window.CarryPractice.sections["arithmetic"] || {};
  window.CarryPractice.sections["arithmetic"]["arithmetic.word-problems"] = {
  "id": "arithmetic.word-problems",
  "topic": "Arithmetic",
  "title": "Word problems",
  "type": "concept",
  "figure": "word-problem",
  "intro": [
    "Find what the question is asking for before calculating.",
    "Identify the quantities and the operation connecting them.",
    "Check that the answer uses the right unit."
  ],
  "problems": [
    {
      "prompt": "Mina has 18 cards and gets 7 more. How many cards does she have?",
      "answer": "25",
      "hint": "More cards means addition.",
      "label": "cards total"
    },
    {
      "prompt": "A box has 6 rows of 8 tiles. How many tiles are there?",
      "answer": "48",
      "hint": "Equal rows suggest multiplication.",
      "label": "array total"
    },
    {
      "prompt": "There are 45 apples in 5 equal bags. How many apples are in each bag?",
      "answer": "9",
      "hint": "Split 45 into 5 equal groups.",
      "label": "equal group size"
    }
  ]
};
})();
