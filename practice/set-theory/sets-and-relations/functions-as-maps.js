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
    },
    {
      "prompt": "If <math>f(x) = x + 3</math>, what is f(1)?",
      "answer": "4",
      "answers": [
        "4",
        "four"
      ],
      "hint": "Substitute 1 for x.",
      "label": "evaluate",
      "choices": [
        {
          "value": "4",
          "label": "4"
        },
        {
          "value": "3",
          "label": "3"
        },
        {
          "value": "1",
          "label": "1"
        },
        {
          "value": "5",
          "label": "5"
        }
      ]
    },
    {
      "prompt": "The set of outputs a function actually produces is called its what?",
      "answer": "range",
      "answers": [
        "range",
        "image"
      ],
      "hint": "It sits inside the codomain, sometimes smaller.",
      "label": "range name",
      "choices": [
        {
          "value": "range",
          "label": "range"
        },
        {
          "value": "domain",
          "label": "domain"
        },
        {
          "value": "codomain",
          "label": "codomain"
        },
        {
          "value": "basis",
          "label": "basis"
        }
      ]
    },
    {
      "prompt": "Is the relation pairing every person with their birth year a function?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "Each person has exactly one birth year.",
      "label": "birth year function",
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
      "prompt": "Is the relation pairing every year with each person born that year a function?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "One year pairs with many people — the one-output rule breaks.",
      "label": "year relation",
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
      "prompt": "Can two different inputs of a function share the same output?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "The rule bans two outputs per input, not two inputs per output.",
      "label": "shared output",
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
