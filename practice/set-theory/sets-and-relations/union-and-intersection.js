// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["set-theory"] = window.CarryPractice.sections["set-theory"] || {};
  window.CarryPractice.sections["set-theory"]["set-theory.operations"] = {
  "id": "set-theory.operations",
  "topic": "Set Theory",
  "title": "Union and intersection",
  "type": "concept",
  "figure": "set-operations",
  "intro": [
    "Union collects everything in either set.",
    "Intersection keeps only what the sets share.",
    "Complement means everything in the universe that is outside the set."
  ],
  "problems": [
    {
      "prompt": "If <math>A = {1, 2}</math> and <math>B = {2, 3}</math>, what is <math>A ∩ B</math>?",
      "answer": "{2}",
      "answers": [
        "{2}",
        "2"
      ],
      "hint": "Intersection keeps the shared element.",
      "label": "intersection"
    },
    {
      "prompt": "If <math>A = {1, 2}</math> and <math>B = {2, 3}</math>, what is <math>A ∪ B</math>?",
      "answer": "{1,2,3}",
      "answers": [
        "{1,2,3}",
        "1,2,3",
        "{1, 2, 3}"
      ],
      "hint": "Union keeps everything, without repeating <math>2</math>.",
      "label": "union"
    },
    {
      "prompt": "Which operation means in A or in B: union or intersection?",
      "answer": "union",
      "answers": [
        "union",
        "cup"
      ],
      "hint": "Union uses or.",
      "label": "union meaning",
      "choices": [
        {
          "value": "union",
          "label": "union"
        },
        {
          "value": "intersection",
          "label": "intersection"
        }
      ]
    }
  ]
};
})();
