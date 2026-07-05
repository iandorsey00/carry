// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["real-analysis"] = window.CarryPractice.sections["real-analysis"] || {};
  window.CarryPractice.sections["real-analysis"]["real-analysis.sets"] = {
  "id": "real-analysis.sets",
  "topic": "Real Analysis",
  "title": "Sets",
  "type": "concept",
  "figure": "real-sets",
  "intro": [
    "Analysis begins by saying exactly which numbers are on the table — and intervals are its favorite way of saying it.",
    "The brackets carry real information: [2, 5] owns its endpoints, while (2, 5) only approaches them.",
    "Bounds, suprema, and open versus closed all grow from this endpoint bookkeeping, and major theorems turn on it."
],
  "problems": [
    {
      "prompt": "Does the interval [2, 5] include 2?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "A square bracket means the endpoint is included.",
      "label": "closed endpoint",
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
      "prompt": "Does the interval (2, 5) include 2?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "A parenthesis means the endpoint is not included.",
      "label": "open endpoint",
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
      "prompt": "What is the smallest number in the set [2, 5]?",
      "answer": "2",
      "hint": "The left endpoint is included.",
      "label": "minimum of interval"
    },
    {
      "prompt": "Does the open interval (2, 5) have a smallest element?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "Whatever you pick, something smaller is still inside.",
      "label": "no minimum",
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
      "prompt": "What is the supremum of (0, 1)?",
      "answer": "1",
      "answers": [
        "1",
        "one"
      ],
      "hint": "The least upper bound does not have to live inside the set.",
      "label": "supremum",
      "choices": [
        {
          "value": "1",
          "label": "1"
        },
        {
          "value": "0",
          "label": "0"
        },
        {
          "value": "0.5",
          "label": "0.5"
        },
        {
          "value": "2",
          "label": "2"
        }
      ]
    },
    {
      "prompt": "Is 5 an upper bound of the interval [2, 5]?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "No member exceeds it.",
      "label": "upper bound",
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
      "prompt": "Is the interval [3, ∞) bounded above?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "It runs past every candidate ceiling.",
      "label": "unbounded above",
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
      "prompt": "Does every nonempty set of reals with an upper bound have a least upper bound?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "That is the completeness axiom of the real numbers.",
      "label": "completeness",
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
