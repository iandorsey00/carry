// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["abstract-algebra"] = window.CarryPractice.sections["abstract-algebra"] || {};
  window.CarryPractice.sections["abstract-algebra"]["abstract-algebra.rings"] = {
  "id": "abstract-algebra.rings",
  "topic": "Abstract Algebra",
  "title": "Rings",
  "type": "concept",
  "figure": "abstract-rings",
  "intro": [
    "A ring has two operations, usually called addition and multiplication.",
    "Addition behaves like an abelian group.",
    "Multiplication distributes over addition."
  ],
  "problems": [
    {
      "prompt": "How many operations does a ring have?",
      "answer": "2",
      "hint": "A ring has addition and multiplication.",
      "label": "ring operations"
    },
    {
      "prompt": "In a ring, multiplication distributes over which operation?",
      "answer": "addition",
      "hint": "Think a(b + c) = ab + ac.",
      "label": "distributive operation"
    },
    {
      "prompt": "Are the integers a ring under usual addition and multiplication?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "Integers support both operations and satisfy the ring rules.",
      "label": "integer ring"
    }
  ]
};
})();
