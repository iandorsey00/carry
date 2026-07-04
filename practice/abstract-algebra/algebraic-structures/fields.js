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
    },
    {
      "prompt": "Which of these is a field: the rational numbers or the integers?",
      "answer": "rationals",
      "answers": [
        "rationals",
        "rational numbers",
        "the rational numbers"
      ],
      "hint": "Check which system lets you divide by any nonzero element.",
      "label": "field example",
      "choices": [
        {
          "value": "rationals",
          "label": "the rational numbers"
        },
        {
          "value": "integers",
          "label": "the integers"
        }
      ]
    },
    {
      "prompt": "In the field of rational numbers, what is the multiplicative inverse of 2/3?",
      "answer": "3/2",
      "answers": [
        "3/2",
        "1.5"
      ],
      "hint": "The inverse multiplies with 2/3 to give exactly 1.",
      "label": "rational inverse",
      "choices": [
        {
          "value": "3/2",
          "label": "3/2"
        },
        {
          "value": "-2/3",
          "label": "-2/3"
        },
        {
          "value": "2/3",
          "label": "2/3"
        },
        {
          "value": "-3/2",
          "label": "-3/2"
        }
      ]
    },
    {
      "prompt": "In any field, what is the product of 5 and its multiplicative inverse?",
      "answer": "1",
      "answers": [
        "1",
        "one"
      ],
      "hint": "An inverse undoes multiplication back to the identity.",
      "label": "inverse product",
      "choices": [
        {
          "value": "1",
          "label": "1"
        },
        {
          "value": "0",
          "label": "0"
        },
        {
          "value": "5",
          "label": "5"
        },
        {
          "value": "25",
          "label": "25"
        }
      ]
    },
    {
      "prompt": "Is every field also a ring?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "A field keeps all the ring rules and adds division by nonzero elements.",
      "label": "field is ring",
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
      "prompt": "Do the real numbers form a field?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "Every nonzero real number has a reciprocal.",
      "label": "reals field",
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
