// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["number-theory"] = window.CarryPractice.sections["number-theory"] || {};
  window.CarryPractice.sections["number-theory"]["number-theory.divisibility"] = {
  "id": "number-theory.divisibility",
  "topic": "Number Theory",
  "title": "Divisibility",
  "type": "concept",
  "figure": "number-divisibility",
  "intro": [
    "A number divides another number when there is no remainder.",
    "Divisibility turns multiplication facts into structure.",
    "The notation a | b means a divides b."
  ],
  "problems": [
    {
      "prompt": "Does 4 divide 20?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "20 = 4 × 5.",
      "label": "divides twenty"
    },
    {
      "prompt": "Does 6 divide 20?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "20 divided by 6 leaves a remainder.",
      "label": "does not divide twenty"
    },
    {
      "prompt": "If 3 | 18, what does the vertical bar mean?",
      "answer": "divides",
      "answers": [
        "divides",
        "divides evenly"
      ],
      "hint": "Read 3 | 18 as 3 divides 18.",
      "label": "divisibility symbol"
    }
  ]
};
})();
