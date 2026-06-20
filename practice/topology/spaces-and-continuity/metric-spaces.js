// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["topology"] = window.CarryPractice.sections["topology"] || {};
  window.CarryPractice.sections["topology"]["topology.metric-spaces"] = {
    id: "topology.metric-spaces",
    topic: "Topology",
    title: "Metric spaces",
    type: "concept",
    figure: "topology-metric-spaces",
    intro: [
      "A metric space is a set with a distance rule.",
      "The distance between two points is nonnegative, symmetric, and obeys the triangle inequality.",
      "Every metric creates a topology by saying which balls count as basic open neighborhoods."
    ],
    problems: [
      {
        prompt: "A metric is a rule for measuring what between two points?",
        answer: "distance",
        answers: ["distance"],
        hint: "A metric is usually written d(x, y).",
        label: "metric meaning",
        choices: [
          { value: "distance", label: "distance" },
          { value: "angle", label: "angle" },
          { value: "area", label: "area" },
          { value: "probability", label: "probability" }
        ]
      },
      {
        prompt: "In any metric space, is d(x, y) always nonnegative?",
        answer: "yes",
        answers: ["yes", "true"],
        hint: "Distances cannot be negative.",
        label: "nonnegative distance",
        choices: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" }
        ]
      },
      {
        prompt: "Which rule says d(x, z) <= d(x, y) + d(y, z)?",
        answer: "triangle inequality",
        answers: ["triangle inequality"],
        hint: "Going through y should not be shorter than the direct distance.",
        label: "triangle inequality",
        choices: [
          { value: "triangle inequality", label: "triangle inequality" },
          { value: "symmetry", label: "symmetry" },
          { value: "identity", label: "identity of indiscernibles" },
          { value: "open cover", label: "open cover" }
        ]
      },
      {
        prompt: "A metric ball collects points within a chosen radius of a center.",
        answer: "true",
        answers: ["true", "yes"],
        hint: "Think of all points whose distance from the center is less than r.",
        label: "metric ball",
        choices: [
          { value: "true", label: "True" },
          { value: "false", label: "False" }
        ]
      }
    ]
  };
})();
