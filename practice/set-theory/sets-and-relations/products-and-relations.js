// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["set-theory"] = window.CarryPractice.sections["set-theory"] || {};
  window.CarryPractice.sections["set-theory"]["set-theory.cartesian-relations"] = {
  "id": "set-theory.cartesian-relations",
  "topic": "Set Theory",
  "title": "Products and relations",
  "type": "concept",
  "figure": "set-relations",
  "intro": [
    "Ordered pairs let sets describe relationships: (3, 5) pairs 3 with 5, in that order and no other.",
    "The Cartesian product <math>A × B</math> manufactures every possible pair, one member from each set.",
    "A relation is a curated selection of those pairs — the ones where some connection genuinely holds."
],
  "problems": [
    {
      "prompt": "If <math>A = {1, 2}</math> and <math>B = {x}</math>, how many ordered pairs are in <math>A × B</math>?",
      "answer": "2",
      "hint": "Each element of <math>A</math> pairs with <math>x</math>.",
      "label": "product size"
    },
    {
      "prompt": "In the ordered pair <math>(3, 5)</math>, what is the first coordinate?",
      "answer": "3",
      "hint": "The first coordinate is the left entry.",
      "label": "first coordinate"
    },
    {
      "prompt": "Is a relation a set of ordered pairs?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "A relation is usually represented by ordered pairs.",
      "label": "relation definition",
      "choices": [
        {
          "value": "yes",
          "label": "Yes"
        },
        {
          "value": "no",
          "label": "No"
        }
      ]
    }
  ]
};
})();
