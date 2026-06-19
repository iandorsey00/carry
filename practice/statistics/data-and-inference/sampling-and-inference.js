// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["statistics"] = window.CarryPractice.sections["statistics"] || {};
  window.CarryPractice.sections["statistics"]["statistics.sampling-inference"] = {
  "id": "statistics.sampling-inference",
  "topic": "Statistics",
  "title": "Sampling and inference",
  "type": "concept",
  "figure": "statistics-sampling",
  "intro": [
    "Inference uses sample data to reason about a larger population.",
    "Random sampling helps reduce bias.",
    "A statistic describes a sample; a parameter describes a population."
  ],
  "problems": [
    {
      "prompt": "A number computed from a sample is called a statistic or a parameter?",
      "answer": "statistic",
      "choices": [
        {
          "value": "statistic",
          "label": "statistic"
        },
        {
          "value": "parameter",
          "label": "parameter"
        }
      ],
      "hint": "Statistics come from samples.",
      "label": "sample statistic",
      "feedback": "A statistic describes a sample."
    },
    {
      "prompt": "A number describing an entire population is called a statistic or a parameter?",
      "answer": "parameter",
      "choices": [
        {
          "value": "statistic",
          "label": "statistic"
        },
        {
          "value": "parameter",
          "label": "parameter"
        }
      ],
      "hint": "Parameters describe populations.",
      "label": "population parameter",
      "feedback": "A parameter describes the full population."
    },
    {
      "prompt": "Random sampling mainly helps reduce bias or remove all uncertainty?",
      "answer": "reduce bias",
      "choices": [
        {
          "value": "reduce bias",
          "label": "reduce bias"
        },
        {
          "value": "remove all uncertainty",
          "label": "remove all uncertainty"
        }
      ],
      "hint": "Random sampling makes selection less systematic, but it does not remove uncertainty.",
      "label": "random sampling purpose",
      "feedback": "Random sampling helps reduce bias."
    },
    {
      "prompt": "Does a larger random sample usually give a more stable estimate?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "choices": [
        {
          "value": "yes",
          "label": "Yes"
        },
        {
          "value": "no",
          "label": "No"
        }
      ],
      "hint": "Larger samples usually vary less from sample to sample.",
      "label": "sample size stability",
      "feedback": "Larger random samples usually give more stable estimates."
    }
  ]
};
})();
