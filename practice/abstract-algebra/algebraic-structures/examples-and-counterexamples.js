// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["abstract-algebra"] = window.CarryPractice.sections["abstract-algebra"] || {};
  window.CarryPractice.sections["abstract-algebra"]["abstract-algebra.examples-counterexamples"] = {
  "id": "abstract-algebra.examples-counterexamples",
  "topic": "Abstract Algebra",
  "title": "Examples and counterexamples",
  "type": "concept",
  "figure": "abstract-examples",
  "intro": [
    "Examples show that a definition can be satisfied.",
    "Counterexamples show exactly where a proposed claim fails.",
    "In abstract algebra, checking the operation is just as important as checking the set."
  ],
  "problems": [
    {
      "prompt": "Under usual addition, give an example of an integer identity element.",
      "answer": "0",
      "hint": "Adding it leaves every integer unchanged.",
      "label": "identity example",
      "choices": [
        {
          "value": "0",
          "label": "0"
        },
        {
          "value": "set",
          "label": "set"
        },
        {
          "value": "subset",
          "label": "subset"
        },
        {
          "value": "element",
          "label": "element"
        }
      ]
    },
    {
      "prompt": "Why are positive integers not a group under addition: missing inverses or missing associativity?",
      "answer": "missinginverses",
      "answers": [
        "missinginverses",
        "missing inverses",
        "inverses"
      ],
      "hint": "The inverse of 3 under addition is -3, which is not positive.",
      "label": "positive integer counterexample",
      "choices": [
        {
          "value": "missinginverses",
          "label": "missing inverses"
        },
        {
          "value": "missing associativity",
          "label": "missing associativity"
        }
      ]
    },
    {
      "prompt": "To disprove that every ring is a field, should you give a ring that is not a field?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "One ring without field division is enough.",
      "label": "ring field counterexample",
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
