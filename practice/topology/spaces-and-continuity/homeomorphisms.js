// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["topology"] = window.CarryPractice.sections["topology"] || {};
  window.CarryPractice.sections["topology"]["topology.homeomorphisms"] = {
    id: "topology.homeomorphisms",
    topic: "Topology",
    title: "Homeomorphisms",
    type: "concept",
    figure: "topology-homeomorphisms",
    intro: [
      "A homeomorphism is a continuous bijection with a continuous inverse.",
      "Homeomorphic spaces are the same from a topological point of view.",
      "Stretching and bending are allowed; tearing or gluing is not."
    ],
    problems: [
      {
        prompt: "A homeomorphism must be continuous and have what kind of inverse?",
        answer: "continuous",
        answers: ["continuous", "continuous inverse"],
        hint: "Both directions must preserve open-set structure.",
        label: "continuous inverse",
        choices: [
          { value: "continuous", label: "continuous" },
          { value: "constant", label: "constant" },
          { value: "undefined", label: "undefined" },
          { value: "finite", label: "finite" }
        ]
      },
      {
        prompt: "Can a homeomorphism tear a connected space apart?",
        answer: "no",
        answers: ["no", "false"],
        hint: "Homeomorphisms preserve topological structure such as connectedness.",
        label: "no tearing",
        choices: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" }
        ]
      },
      {
        prompt: "A homeomorphism is a bijection.",
        answer: "true",
        answers: ["true", "yes"],
        hint: "It pairs points one-to-one and onto.",
        label: "bijection",
        choices: [
          { value: "true", label: "True" },
          { value: "false", label: "False" }
        ]
      },
      {
        prompt: "Which property is preserved by homeomorphisms?",
        answer: "connectedness",
        answers: ["connectedness", "connected"],
        hint: "A homeomorphism cannot split one piece into two separated pieces.",
        label: "preserved property",
        choices: [
          { value: "connectedness", label: "connectedness" },
          { value: "exact length", label: "exact length" },
          { value: "exact angle", label: "exact angle" },
          { value: "decimal expansion", label: "decimal expansion" }
        ]
      }
    ]
  };
})();
