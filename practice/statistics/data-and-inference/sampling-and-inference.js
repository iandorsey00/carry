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
    },
    {
      "prompt": "Polling only your friends about a citywide issue creates what problem?",
      "answer": "a biased sample",
      "answers": [
        "a biased sample",
        "bias"
      ],
      "hint": "Friends are not a random slice of the city.",
      "label": "friend poll",
      "choices": [
        {
          "value": "a biased sample",
          "label": "a biased sample"
        },
        {
          "value": "too much randomness",
          "label": "too much randomness"
        }
      ]
    },
    {
      "prompt": "The sample mean comes out to 72. Is that 72 a statistic or a parameter?",
      "answer": "statistic",
      "answers": [
        "statistic",
        "a statistic"
      ],
      "hint": "It was computed from a sample.",
      "label": "sample mean",
      "choices": [
        {
          "value": "statistic",
          "label": "a statistic"
        },
        {
          "value": "parameter",
          "label": "a parameter"
        }
      ]
    },
    {
      "prompt": "Does doubling the sample size fix a biased sampling method?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "More of a biased sample is still biased.",
      "label": "bias persists",
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
      "prompt": "A census measures a sample or the whole population?",
      "answer": "the whole population",
      "answers": [
        "the whole population",
        "population"
      ],
      "hint": "Census means everyone.",
      "label": "census",
      "choices": [
        {
          "value": "the whole population",
          "label": "the whole population"
        },
        {
          "value": "a sample",
          "label": "a sample"
        }
      ]
    }

  ]
};
})();
