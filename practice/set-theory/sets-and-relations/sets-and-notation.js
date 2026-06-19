// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["set-theory"] = window.CarryPractice.sections["set-theory"] || {};
  window.CarryPractice.sections["set-theory"]["set-theory.sets-notation"] = {
  "id": "set-theory.sets-notation",
  "topic": "Set Theory",
  "title": "Sets and notation",
  "type": "concept",
  "figure": "set-notation",
  "intro": [
    "A set is a collection of objects called elements.",
    "Set notation uses braces, such as <math>A = {1, 2, 3}</math>.",
    "The symbol <math>∈</math> means is an element of, and <math>∉</math> means is not an element of."
  ],
  "problems": [
    {
      "prompt": "If <math>A = {1, 2, 3}</math>, is <math>2</math> in <math>A</math>?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "<math>2</math> appears inside the braces.",
      "label": "membership check"
    },
    {
      "prompt": "If <math>B = {red, blue}</math>, is green in <math>B</math>?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "Only red and blue are listed.",
      "label": "nonmembership check"
    },
    {
      "prompt": "What symbol means is an element of?",
      "answer": "∈",
      "answers": [
        "∈",
        "∊",
        "e",
        "E",
        "in",
        "is in",
        "element",
        "elementof",
        "element of",
        "member",
        "member of",
        "belongs",
        "belongs to"
      ],
      "hint": "Read <math>x ∈ A</math> as <math>x</math> is an element of <math>A</math>.",
      "label": "membership symbol"
    }
  ]
};
})();
