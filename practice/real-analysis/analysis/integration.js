// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["real-analysis"] = window.CarryPractice.sections["real-analysis"] || {};
  window.CarryPractice.sections["real-analysis"]["real-analysis.integration"] = {
  "id": "real-analysis.integration",
  "topic": "Real Analysis",
  "title": "Integration",
  "type": "concept",
  "figure": "real-integration",
  "intro": [
    "Riemann integration answers 'how much area?' with a process honest enough to prove things about.",
    "Cut the interval, build rectangles, add them up — then refine the cuts and watch the totals converge.",
    "The integral is the number all sufficiently fine partitions agree on; when they cannot agree, the function is not integrable."
],
  "problems": [
    {
      "prompt": "A partition divides an interval into smaller what?",
      "answer": "pieces",
      "answers": [
        "pieces",
        "subintervals",
        "intervals"
      ],
      "hint": "A partition chops the interval into subintervals.",
      "label": "partition meaning",
      "choices": [
        {
          "value": "pieces",
          "label": "pieces"
        },
        {
          "value": "mean",
          "label": "mean"
        },
        {
          "value": "median",
          "label": "median"
        },
        {
          "value": "mode",
          "label": "mode"
        }
      ]
    },
    {
      "prompt": "For a constant function f(x) = 3 on [0, 2], what is the area under the graph?",
      "answer": "6",
      "hint": "The rectangle has height 3 and width 2.",
      "label": "constant integral"
    },
    {
      "prompt": "Do Riemann sums approximate area using rectangles?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "Each subinterval contributes a rectangle-like area.",
      "label": "riemann rectangles",
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
      "prompt": "What is the integral of f(x) = 2 over [0, 5]?",
      "answer": "10",
      "answers": [
        "10",
        "ten"
      ],
      "hint": "A 2-by-5 rectangle of area.",
      "label": "constant integral",
      "choices": [
        {
          "value": "10",
          "label": "10"
        },
        {
          "value": "7",
          "label": "7"
        },
        {
          "value": "2",
          "label": "2"
        },
        {
          "value": "25",
          "label": "25"
        }
      ]
    },
    {
      "prompt": "As partitions get finer, the Riemann sums of a continuous function do what?",
      "answer": "converge",
      "answers": [
        "converge"
      ],
      "hint": "They settle toward the true integral.",
      "label": "sums converge",
      "choices": [
        {
          "value": "converge",
          "label": "converge"
        },
        {
          "value": "diverge",
          "label": "diverge"
        },
        {
          "value": "oscillate forever",
          "label": "oscillate forever"
        }
      ]
    },
    {
      "prompt": "Is every continuous function on [a, b] Riemann integrable?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "Continuity on a closed interval is enough.",
      "label": "continuous integrable",
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
      "prompt": "The mesh of a partition measures what?",
      "answer": "the widest piece",
      "answers": [
        "the widest piece",
        "widest piece"
      ],
      "hint": "Fine partitions are judged by their worst gap.",
      "label": "mesh meaning",
      "choices": [
        {
          "value": "the widest piece",
          "label": "the widest piece"
        },
        {
          "value": "the number of pieces",
          "label": "the number of pieces"
        }
      ]
    },
    {
      "prompt": "Do upper and lower Riemann sums squeeze the true integral between them?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "Overestimates above, underestimates below.",
      "label": "squeeze",
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
