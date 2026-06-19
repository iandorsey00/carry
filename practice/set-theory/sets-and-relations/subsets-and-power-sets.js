// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["set-theory"] = window.CarryPractice.sections["set-theory"] || {};
  window.CarryPractice.sections["set-theory"]["set-theory.subsets"] = {
  "id": "set-theory.subsets",
  "topic": "Set Theory",
  "title": "Subsets and power sets",
  "type": "concept",
  "figure": "set-subsets",
  "intro": [
    "A subset sits entirely inside another set.",
    "<math>A</math> is a subset of <math>B</math> if every element of <math>A</math> is also in <math>B</math>.",
    "The power set contains every subset of a set, including the empty set."
  ],
  "problems": [
    {
      "prompt": "Is <math>{1, 2}</math> a subset of <math>{1, 2, 3}</math>?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "Both <math>1</math> and <math>2</math> appear in the larger set.",
      "label": "subset check"
    },
    {
      "prompt": "How many subsets does a set with 3 elements have?",
      "answer": "8",
      "hint": "A set with n elements has 2^n subsets.",
      "label": "power set size"
    },
    {
      "prompt": "Is the empty set a subset of every set?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "There is no element in the empty set that can fail to belong.",
      "label": "empty subset"
    }
  ]
};
})();
