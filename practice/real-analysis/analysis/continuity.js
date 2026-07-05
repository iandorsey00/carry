// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["real-analysis"] = window.CarryPractice.sections["real-analysis"] || {};
  window.CarryPractice.sections["real-analysis"]["real-analysis.continuity"] = {
  "id": "real-analysis.continuity",
  "topic": "Real Analysis",
  "title": "Continuity",
  "type": "concept",
  "figure": "real-continuity",
  "intro": [
    "A continuous function keeps its promises locally: small changes in input can only cause small changes in output.",
    "The precise test is a match — the limit of the outputs equals the actual value <math>f(a)</math> — and holes, jumps, and blow-ups each break it differently.",
    "On a closed interval, continuity buys real theorems: in-between values must be hit, and a maximum must exist."
],
  "problems": [
    {
      "prompt": "If lim f(x) as x approaches a equals f(a), is f continuous at a?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "This is the definition of continuity at a point.",
      "label": "continuity definition",
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
      "prompt": "If a graph has a jump at x = 2, is it continuous there?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "A jump means the nearby values do not meet smoothly at one value.",
      "label": "jump discontinuity",
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
      "prompt": "For f(x) = x + 1, is f continuous at x = 0?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "Linear functions are continuous everywhere.",
      "label": "linear continuity",
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
      "prompt": "Is <math>f(x) = x^2</math> continuous everywhere?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "Polynomials never jump, tear, or blow up.",
      "label": "polynomial continuous",
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
      "prompt": "A graph has a hole at x = 1 but the limit exists there. Is it continuous at 1?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "With no value at the point, the match cannot happen.",
      "label": "hole breaks match",
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
      "prompt": "The intermediate value theorem requires the function to be what on the interval?",
      "answer": "continuous",
      "answers": [
        "continuous"
      ],
      "hint": "No jumps allowed, or values could be skipped.",
      "label": "ivt hypothesis",
      "choices": [
        {
          "value": "continuous",
          "label": "continuous"
        },
        {
          "value": "increasing",
          "label": "increasing"
        },
        {
          "value": "bounded",
          "label": "bounded"
        },
        {
          "value": "positive",
          "label": "positive"
        }
      ]
    },
    {
      "prompt": "If f and g are continuous at a point, is f + g continuous there?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "Limits of sums are sums of limits.",
      "label": "sum continuous",
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
      "prompt": "Is <math>1/x</math> continuous at x = 0?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "It is not even defined there.",
      "label": "blow up",
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
