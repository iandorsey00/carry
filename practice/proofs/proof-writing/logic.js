// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["proofs"] = window.CarryPractice.sections["proofs"] || {};
  window.CarryPractice.sections["proofs"]["proofs.logic"] = {
  "id": "proofs.logic",
  "topic": "Proofs",
  "title": "Logic",
  "type": "concept",
  "figure": "proof-logic",
  "intro": [
    "Logic is quality control for reasoning: it tracks exactly what follows from what, and refuses everything else.",
    "The workhorse is the implication if P then Q — a promise that whenever P holds, Q must follow.",
    "Chains of solid implications carry truth from known facts to new conclusions; that is all a proof is."
],
  "problems": [
    {
      "prompt": "In the statement if P then Q, which part is the hypothesis?",
      "answer": "p",
      "answers": [
        "p",
        "P"
      ],
      "hint": "The hypothesis is the condition after if.",
      "label": "identify hypothesis",
      "choices": [
        {
          "value": "p",
          "label": "p"
        },
        {
          "value": "hypothesis",
          "label": "hypothesis"
        },
        {
          "value": "conclusion",
          "label": "conclusion"
        },
        {
          "value": "contradiction",
          "label": "contradiction"
        }
      ]
    },
    {
      "prompt": "In the statement if P then Q, which part is the conclusion?",
      "answer": "q",
      "answers": [
        "q",
        "Q"
      ],
      "hint": "The conclusion is what follows then.",
      "label": "identify conclusion",
      "choices": [
        {
          "value": "q",
          "label": "q"
        },
        {
          "value": "hypothesis",
          "label": "hypothesis"
        },
        {
          "value": "conclusion",
          "label": "conclusion"
        },
        {
          "value": "contradiction",
          "label": "contradiction"
        }
      ]
    },
    {
      "prompt": "If P implies Q and P is true, what can you conclude?",
      "answer": "q",
      "answers": [
        "q",
        "Q"
      ],
      "hint": "This is direct reasoning: the implication fires when P is true.",
      "label": "direct implication"
    },
    {
      "prompt": "In the statement if A then B, which part is the conclusion?",
      "answer": "b",
      "answers": [
        "b",
        "B"
      ],
      "hint": "The conclusion follows then.",
      "label": "identify conclusion",
      "feedback": "Separate the if part from the then part.",
      "choices": [
        {
          "value": "b",
          "label": "b"
        },
        {
          "value": "hypothesis",
          "label": "hypothesis"
        },
        {
          "value": "conclusion",
          "label": "conclusion"
        },
        {
          "value": "contradiction",
          "label": "contradiction"
        }
      ]
    },
    {
      "prompt": "If A implies B and B is false, what can you conclude about A?",
      "answer": "a is false",
      "answers": [
        "false",
        "a is false",
        "not a",
        "¬a"
      ],
      "choices": [
        {
          "value": "a is false",
          "label": "A is false"
        },
        {
          "value": "b is true",
          "label": "B is true"
        },
        {
          "value": "a is true",
          "label": "A is true"
        },
        {
          "value": "positive",
          "label": "positive"
        }
      ],
      "hint": "If A were true, B would have to be true.",
      "label": "contrapositive reasoning",
      "feedback": "This is reasoning by contrapositive."
    },
    {
      "prompt": "What word joins two statements so both must be true?",
      "answer": "and",
      "answers": [
        "and",
        "conjunction"
      ],
      "hint": "A and B requires both pieces.",
      "label": "logical and",
      "feedback": "Conjunction means both.",
      "choices": [
        {
          "value": "and",
          "label": "and"
        },
        {
          "value": "hypothesis",
          "label": "hypothesis"
        },
        {
          "value": "conclusion",
          "label": "conclusion"
        },
        {
          "value": "contradiction",
          "label": "contradiction"
        }
      ]
    },
    {
      "prompt": "If P implies Q and Q is true, does P have to be true?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "Affirming the consequent is a classic fallacy — Q may have other causes.",
      "label": "converse fallacy",
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
      "prompt": "What is the negation of the statement P and Q?",
      "answer": "not P or not Q",
      "answers": [
        "not P or not Q",
        "not p or not q"
      ],
      "hint": "De Morgan: negation flips and into or.",
      "label": "de morgan",
      "choices": [
        {
          "value": "not P or not Q",
          "label": "not P or not Q"
        },
        {
          "value": "not P and not Q",
          "label": "not P and not Q"
        }
      ]
    }

  ]
};
})();
