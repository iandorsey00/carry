// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["abstract-algebra"] = window.CarryPractice.sections["abstract-algebra"] || {};
  window.CarryPractice.sections["abstract-algebra"]["abstract-algebra.fields"] = {
  "id": "abstract-algebra.fields",
  "topic": "Abstract Algebra",
  "title": "Fields",
  "type": "concept",
  "figure": "abstract-fields",
  "intro": [
    "A field is a number system where addition, subtraction, multiplication, and division work well.",
    "Every nonzero element has a multiplicative inverse.",
    "The rational, real, and complex numbers are standard examples of fields."
  ],
  "problems": [
    {
      "prompt": "In a field, does every nonzero element have a multiplicative inverse?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "Division by nonzero elements is allowed in a field.",
      "label": "field inverse",
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
    },
    {
      "prompt": "Is 0 required to have a multiplicative inverse in a field?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "Division by zero is still not allowed.",
      "label": "zero inverse",
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
    },
    {
      "prompt": "Are the integers a field under usual operations?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "2 has no integer multiplicative inverse.",
      "label": "integers not field",
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
