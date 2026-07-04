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
    }
  ]
};
})();
