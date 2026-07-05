// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["proofs"] = window.CarryPractice.sections["proofs"] || {};
  window.CarryPractice.sections["proofs"]["proofs.induction"] = {
  "id": "proofs.induction",
  "topic": "Proofs",
  "title": "Induction",
  "type": "concept",
  "figure": "proof-induction",
  "intro": [
    "Induction proves infinitely many statements with two finite moves.",
    "The base case starts the chain; the inductive step shows every true case forces the next one.",
    "Together they cover 1, then 2, then 3, and onward forever — a complete proof no checklist could finish."
],
  "problems": [
    {
      "prompt": "In induction, what is the first case called?",
      "answer": "base",
      "answers": [
        "base",
        "basecase",
        "base case"
      ],
      "hint": "It anchors the proof at the starting value.",
      "label": "base case",
      "choices": [
        {
          "value": "base",
          "label": "base"
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
      "prompt": "After the base case, which step proves that case k implies case k + 1?",
      "answer": "inductive",
      "answers": [
        "inductive",
        "inductivestep",
        "inductive step"
      ],
      "hint": "This is the step that moves the proof forward.",
      "label": "inductive step"
    },
    {
      "prompt": "If P(1) is true and P(k) implies P(k + 1), what can induction prove?",
      "answer": "all",
      "answers": [
        "all",
        "alln",
        "every n",
        "all positive integers"
      ],
      "hint": "The truth moves from 1 to 2 to 3 and so on.",
      "label": "induction conclusion",
      "choices": [
        {
          "value": "all",
          "label": "all"
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
      "prompt": "Induction over the positive integers usually starts at which case?",
      "answer": "n = 1",
      "answers": [
        "n = 1",
        "1",
        "n=1"
      ],
      "hint": "The first rung of the ladder.",
      "label": "starting case",
      "choices": [
        {
          "value": "n = 1",
          "label": "n = 1"
        },
        {
          "value": "n = 0",
          "label": "n = 100"
        },
        {
          "value": "n = k",
          "label": "n = k"
        }
      ]
    },
    {
      "prompt": "If the base case holds but the inductive step fails, is the proof complete?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "One standing domino knocks nothing over by itself.",
      "label": "step required",
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
      "prompt": "If P(k) implies P(k + 1) but no base case is proved, what has been proved?",
      "answer": "nothing yet",
      "answers": [
        "nothing yet",
        "nothing"
      ],
      "hint": "A chain with no first link lifts nothing.",
      "label": "base required",
      "choices": [
        {
          "value": "nothing yet",
          "label": "nothing yet"
        },
        {
          "value": "all cases",
          "label": "all cases"
        },
        {
          "value": "only P(1)",
          "label": "only P(1)"
        }
      ]
    },
    {
      "prompt": "The inductive step assumes P(k) is true. What is that assumption called?",
      "answer": "the inductive hypothesis",
      "answers": [
        "the inductive hypothesis",
        "inductive hypothesis"
      ],
      "hint": "It is a hypothesis made inside the step.",
      "label": "hypothesis name",
      "choices": [
        {
          "value": "the inductive hypothesis",
          "label": "the inductive hypothesis"
        },
        {
          "value": "the base case",
          "label": "the base case"
        },
        {
          "value": "the conclusion",
          "label": "the conclusion"
        }
      ]
    },
    {
      "prompt": "Standard induction proves statements over which set of numbers?",
      "answer": "the positive integers",
      "answers": [
        "the positive integers",
        "positive integers",
        "whole numbers"
      ],
      "hint": "The ladder needs discrete rungs.",
      "label": "induction domain",
      "choices": [
        {
          "value": "the positive integers",
          "label": "the positive integers"
        },
        {
          "value": "the real numbers",
          "label": "the real numbers"
        }
      ]
    }

  ]
};
})();
