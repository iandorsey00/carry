// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["complex-analysis"] = window.CarryPractice.sections["complex-analysis"] || {};
  window.CarryPractice.sections["complex-analysis"]["complex-analysis.residues"] = {
    id: "complex-analysis.residues",
    topic: "Complex Analysis",
    title: "Residues",
    type: "concept",
    figure: "complex-residues",
    intro: [
      "A residue captures the key coefficient near an isolated singularity.",
      "Residues let closed contour integrals be computed from local information at singularities.",
      "The residue theorem is one of the main bridges between local algebra and global integration."
    ],
    problems: [
      {
        prompt: "Residues are associated with what kind of point?",
        answer: "singularity",
        answers: ["singularity", "singularities"],
        hint: "Look near where the function has a controlled problem.",
        label: "residue location",
        choices: [
          { value: "singularity", label: "a singularity" },
          { value: "ordinary zero", label: "an ordinary zero" },
          { value: "endpoint", label: "an endpoint only" },
          { value: "matrix entry", label: "a matrix entry" }
        ]
      },
      {
        prompt: "The residue theorem connects residues to which kind of integral?",
        answer: "closed contour integral",
        answers: ["closed contour integral", "contour integral", "closed integral"],
        hint: "Think of integrating around a loop.",
        label: "residue theorem",
        choices: [
          { value: "closed contour integral", label: "closed contour integrals" },
          { value: "dot product", label: "dot products" },
          { value: "truth table", label: "truth tables" },
          { value: "sample mean", label: "sample means" }
        ]
      },
      {
        prompt: "For a simple pole, the residue is local information near the pole.",
        answer: "true",
        answers: ["true", "yes"],
        hint: "Residues are read from local behavior near a singularity.",
        label: "local data",
        choices: [
          { value: "true", label: "True" },
          { value: "false", label: "False" }
        ]
      },
      {
        prompt: "Which coefficient is the residue in a Laurent series?",
        answer: "coefficient of 1/(z-a)",
        answers: ["coefficient of 1/(z-a)", "1/(z-a)", "coefficient of (z-a)^-1"],
        hint: "It is the coefficient of the first negative power.",
        label: "laurent coefficient",
        choices: [
          { value: "coefficient of 1/(z-a)", label: "coefficient of 1/(z - a)" },
          { value: "constant term", label: "constant term" },
          { value: "coefficient of z-a", label: "coefficient of z - a" },
          { value: "largest exponent", label: "largest exponent" }
        ]
      }
    ]
  };
})();
