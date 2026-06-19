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
    "A counterexample is one case that breaks a claim.",
    "Counterexamples disprove universal statements.",
    "The best counterexamples are specific and easy to check."
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
    }
  ]
};
})();
