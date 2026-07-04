// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["set-theory"] = window.CarryPractice.sections["set-theory"] || {};
  window.CarryPractice.sections["set-theory"]["set-theory.functions"] = {
  "id": "set-theory.functions",
  "topic": "Set Theory",
  "title": "Functions as maps",
  "type": "concept",
  "figure": "set-functions",
  "intro": [
    "Among relations, functions are the disciplined ones: each input is paired with exactly one output.",
    "The domain says which inputs are allowed; the codomain says where outputs are permitted to land.",
    "That one-output discipline is why functions can be composed, inverted, and computed with confidence."
],
  "problems": [
    {
      "prompt": "Can one input of a function have two different outputs?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "A function gives each input exactly one output.",
      "label": "function rule",
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
      "prompt": "What is the set of allowed inputs called?",
      "answer": "domain",
      "hint": "The domain is where inputs come from.",
      "label": "domain",
      "choices": [
        {
          "value": "domain",
          "label": "domain"
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
      "prompt": "If <math>f(2) = 7</math>, what is the output for input <math>2</math>?",
      "answer": "7",
      "hint": "The value after the equals sign is the output.",
      "label": "function output"
    }
  ]
};
})();
