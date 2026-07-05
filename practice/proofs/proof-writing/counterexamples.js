// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["proofs"] = window.CarryPractice.sections["proofs"] || {};
  window.CarryPractice.sections["proofs"]["proofs.counterexamples"] = {
  "id": "proofs.counterexamples",
  "topic": "Proofs",
  "title": "Counterexamples",
  "type": "concept",
  "figure": "proof-counterexamples",
  "intro": [
    "A counterexample is the shortest proof in mathematics: one concrete case, and a universal claim is finished.",
    "It must do both halves of the job: satisfy the claim's conditions and break its conclusion.",
    "The best ones are small and unarguable, like the number 2 defeating every prime is odd."
],
  "problems": [
    {
      "prompt": "Claim: every prime number is odd. Which number is a counterexample?",
      "answer": "2",
      "hint": "2 is prime, but it is even.",
      "label": "prime counterexample",
      "choices": [
        {
          "value": "2",
          "label": "2"
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
      "prompt": "Does one counterexample disprove a for all statement?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "Universal claims fail when even one case fails.",
      "label": "counterexample power",
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
      "prompt": "Claim: all rectangles are squares. Give side lengths for a rectangle that is not a square.",
      "answer": "2x3",
      "answers": [
        "2x3",
        "2×3",
        "2by3",
        "2 by 3",
        "3x2",
        "3×2",
        "3by2",
        "3 by 2"
      ],
      "hint": "Use unequal side lengths, such as 2 by 3.",
      "label": "rectangle counterexample",
      "choices": [
        {
          "value": "2x3",
          "label": "2x3"
        },
        {
          "value": "acute",
          "label": "acute"
        },
        {
          "value": "right",
          "label": "right"
        },
        {
          "value": "obtuse",
          "label": "obtuse"
        }
      ]
    },
    {
      "prompt": "Claim: every multiple of 5 ends in the digit 5. Which number disproves it?",
      "answer": "10",
      "answers": [
        "10",
        "20",
        "30"
      ],
      "hint": "Multiples of 5 can also end in 0.",
      "label": "multiple of five",
      "choices": [
        {
          "value": "10",
          "label": "10"
        },
        {
          "value": "15",
          "label": "15"
        },
        {
          "value": "25",
          "label": "25"
        },
        {
          "value": "55",
          "label": "55"
        }
      ]
    },
    {
      "prompt": "Claim: all birds can fly. What defeats it?",
      "answer": "one flightless bird",
      "answers": [
        "one flightless bird",
        "a penguin",
        "penguin"
      ],
      "hint": "A penguin is a bird that cannot fly.",
      "label": "flightless bird",
      "choices": [
        {
          "value": "one flightless bird",
          "label": "one flightless bird"
        },
        {
          "value": "many flying birds",
          "label": "many flying birds"
        }
      ]
    },
    {
      "prompt": "Must a counterexample satisfy the claim's conditions?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "It must be a genuine case that fails only the conclusion.",
      "label": "fits conditions",
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
      "prompt": "Can one counterexample disprove a there-exists statement?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "Existence claims fail only when every single case fails.",
      "label": "exists immune",
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
      "prompt": "Claim: n squared is greater than n for every positive whole number n. Which n breaks it?",
      "answer": "1",
      "answers": [
        "1",
        "one"
      ],
      "hint": "Square it: 1 × 1 is not greater than 1.",
      "label": "n squared claim",
      "choices": [
        {
          "value": "1",
          "label": "1"
        },
        {
          "value": "2",
          "label": "2"
        },
        {
          "value": "3",
          "label": "3"
        },
        {
          "value": "10",
          "label": "10"
        }
      ]
    }

  ]
};
})();
