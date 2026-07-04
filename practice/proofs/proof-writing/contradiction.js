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
    }
  ]
};
})();
