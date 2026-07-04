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
      },
      {
        prompt: "What is the residue of 1/z at z = 0?",
        answer: "1",
        answers: ["1", "one"],
        hint: "1/z is already a Laurent series; read off the coefficient of 1/z.",
        label: "basic residue",
        choices: [
          { value: "1", label: "1" },
          { value: "0", label: "0" },
          { value: "2πi", label: "2πi" },
          { value: "-1", label: "-1" }
        ]
      },
      {
        prompt: "What is the residue of 3/(z - 5) at z = 5?",
        answer: "3",
        answers: ["3", "three"],
        hint: "For a simple pole a/(z - c), the residue is a.",
        label: "simple pole residue",
        choices: [
          { value: "3", label: "3" },
          { value: "5", label: "5" },
          { value: "0", label: "0" },
          { value: "1/3", label: "1/3" }
        ]
      },
      {
        prompt: "The residue theorem multiplies the sum of residues by what factor?",
        answer: "2πi",
        answers: ["2πi", "2 pi i", "2pii"],
        hint: "The same 2πi that comes from integrating 1/z around a circle.",
        label: "residue factor",
        choices: [
          { value: "2πi", label: "2πi" },
          { value: "π", label: "π" },
          { value: "i", label: "i" },
          { value: "2", label: "2" }
        ]
      },
      {
        prompt: "If a function has no singularities inside a closed contour, what does the residue theorem give?",
        answer: "0",
        answers: ["0", "zero"],
        hint: "No singularities inside means no residues to sum.",
        label: "empty residue sum",
        choices: [
          { value: "0", label: "0" },
          { value: "1", label: "1" },
          { value: "2πi", label: "2πi" },
          { value: "undefined", label: "undefined" }
        ]
      }
    ]
  };
})();
