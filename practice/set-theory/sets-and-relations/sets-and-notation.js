// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["set-theory"] = window.CarryPractice.sections["set-theory"] || {};
  window.CarryPractice.sections["set-theory"]["set-theory.sets-notation"] = {
  "id": "set-theory.sets-notation",
  "topic": "Set Theory",
  "title": "Sets and notation",
  "type": "concept",
  "figure": "set-notation",
  "intro": [
    "A set is mathematics' simplest container: it only remembers which objects are in and which are out.",
    "Braces list the members, as in <math>A = {1, 2, 3}</math> — no order, no repeats, no other information.",
    "The symbol <math>∈</math> claims membership and <math>∉</math> denies it: one question, two possible answers."
],
  "problems": [
    {
      "prompt": "If <math>A = {1, 2, 3}</math>, is <math>2</math> in <math>A</math>?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "<math>2</math> appears inside the braces.",
      "label": "membership check",
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
      "prompt": "If <math>B = {red, blue}</math>, is green in <math>B</math>?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "Only red and blue are listed.",
      "label": "nonmembership check",
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
      "prompt": "What symbol means is an element of?",
      "answer": "∈",
      "answers": [
        "∈",
        "∊",
        "e",
        "E",
        "in",
        "is in",
        "element",
        "elementof",
        "element of",
        "member",
        "member of",
        "belongs",
        "belongs to"
      ],
      "hint": "Read <math>x ∈ A</math> as <math>x</math> is an element of <math>A</math>.",
      "label": "membership symbol",
      "choices": [
        {
          "value": "∈",
          "label": "∈"
        },
        {
          "value": "∉",
          "label": "∉"
        },
        {
          "value": "⊂",
          "label": "⊂"
        },
        {
          "value": "⊆",
          "label": "⊆"
        }
      ]
    },
    {
      "prompt": "If <math>C = {4, 5, 6}</math>, is <math>7</math> in <math>C</math>?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "<math>7</math> is not listed inside the braces.",
      "label": "nonmembership check",
      "feedback": "Check the listed elements.",
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
      "prompt": "If <math>D = {a, b}</math>, is <math>a</math> in <math>D</math>?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "<math>a</math> is listed inside the braces.",
      "label": "membership check",
      "feedback": "Membership means appears as an element.",
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
      "prompt": "What symbol means is not an element of?",
      "answer": "∉",
      "answers": [
        "∉",
        "notin",
        "not in",
        "is not in"
      ],
      "hint": "It is the membership symbol with a slash.",
      "label": "nonmembership symbol",
      "feedback": "Use the slashed membership symbol.",
      "choices": [
        {
          "value": "∉",
          "label": "∉"
        },
        {
          "value": "∈",
          "label": "∈"
        },
        {
          "value": "⊂",
          "label": "⊂"
        },
        {
          "value": "⊆",
          "label": "⊆"
        }
      ]
    }
  ]
};
})();
