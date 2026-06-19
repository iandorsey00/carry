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
    "A function is a relation with exactly one output for each allowed input.",
    "The domain is the set of inputs.",
    "The codomain is the set where outputs are allowed to land."
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
