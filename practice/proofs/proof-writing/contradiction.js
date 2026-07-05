// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["proofs"] = window.CarryPractice.sections["proofs"] || {};
  window.CarryPractice.sections["proofs"]["proofs.contradiction"] = {
  "id": "proofs.contradiction",
  "topic": "Proofs",
  "title": "Contradiction",
  "type": "concept",
  "figure": "proof-contradiction",
  "intro": [
    "Proof by contradiction wins by generosity: assume the opposite of your claim, then follow the consequences honestly.",
    "If that assumption leads to something impossible, the assumption itself was the lie.",
    "So the original claim stands — proved not by building it up, but by demolishing its opposite."
],
  "problems": [
    {
      "prompt": "In a contradiction proof, do you first assume the claim or its opposite?",
      "answer": "opposite",
      "answers": [
        "opposite",
        "negation",
        "not the claim"
      ],
      "hint": "You temporarily suppose the claim is false.",
      "label": "contradiction assumption",
      "choices": [
        {
          "value": "claim",
          "label": "claim"
        },
        {
          "value": "opposite",
          "label": "its opposite"
        }
      ]
    },
    {
      "prompt": "What kind of result finishes a contradiction proof?",
      "answer": "contradiction",
      "answers": [
        "contradiction",
        "impossible",
        "false"
      ],
      "hint": "You show the assumption led to something impossible.",
      "label": "contradiction finish",
      "choices": [
        {
          "value": "contradiction",
          "label": "contradiction"
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
          "value": "counterexample",
          "label": "counterexample"
        }
      ]
    },
    {
      "prompt": "If assuming not P leads to a contradiction, what can you conclude?",
      "answer": "p",
      "answers": [
        "p",
        "P",
        "p is true",
        "true"
      ],
      "hint": "The negation failed, so P remains.",
      "label": "contradiction conclusion",
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
      "prompt": "To prove the square root of 2 is irrational by contradiction, what do you assume first?",
      "answer": "it is rational",
      "answers": [
        "it is rational",
        "rational"
      ],
      "hint": "Assume the opposite of what you want.",
      "label": "sqrt2 setup",
      "choices": [
        {
          "value": "it is rational",
          "label": "that it is rational"
        },
        {
          "value": "it is irrational",
          "label": "that it is irrational"
        }
      ]
    },
    {
      "prompt": "A contradiction proof succeeds by deriving what?",
      "answer": "a statement and its negation",
      "answers": [
        "a statement and its negation",
        "a contradiction"
      ],
      "hint": "Something impossible: both P and not P.",
      "label": "what to derive",
      "choices": [
        {
          "value": "a statement and its negation",
          "label": "a statement and its negation"
        },
        {
          "value": "a second example",
          "label": "a second example"
        },
        {
          "value": "a definition",
          "label": "a definition"
        }
      ]
    },
    {
      "prompt": "To prove there is no largest integer, assume one exists — then what?",
      "answer": "add 1",
      "answers": [
        "add 1",
        "add one"
      ],
      "hint": "The new number defeats the assumed champion.",
      "label": "largest integer",
      "choices": [
        {
          "value": "add 1",
          "label": "add 1 to it"
        },
        {
          "value": "divide it",
          "label": "divide it by 2"
        },
        {
          "value": "list integers",
          "label": "list all integers"
        }
      ]
    },
    {
      "prompt": "At the end of a contradiction proof, the assumed opposite turns out to be what?",
      "answer": "false",
      "answers": [
        "false"
      ],
      "hint": "Its collapse is the whole point.",
      "label": "assumption fate",
      "choices": [
        {
          "value": "false",
          "label": "false"
        },
        {
          "value": "true",
          "label": "true"
        }
      ]
    },
    {
      "prompt": "Is deriving a contradiction from not-P enough to conclude P?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "If the opposite is impossible, the claim stands.",
      "label": "conclude p",
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
