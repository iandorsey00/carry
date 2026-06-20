// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["complex-analysis"] = window.CarryPractice.sections["complex-analysis"] || {};
  window.CarryPractice.sections["complex-analysis"]["complex-analysis.contour-integrals"] = {
    id: "complex-analysis.contour-integrals",
    topic: "Complex Analysis",
    title: "Contour integrals",
    type: "concept",
    figure: "complex-contour",
    intro: [
      "A contour integral adds values of a complex function along a path.",
      "The path matters when a function has singularities or is not analytic on the region.",
      "Closed contours are especially important because they can detect what happens inside the loop."
    ],
    problems: [
      {
        prompt: "A contour integral is taken along what?",
        answer: "path",
        answers: ["path", "curve", "contour"],
        hint: "The contour is the curve you travel along.",
        label: "contour meaning",
        choices: [
          { value: "path", label: "a path or curve" },
          { value: "single point", label: "one isolated point" },
          { value: "truth table", label: "a truth table" },
          { value: "matrix row", label: "a matrix row" }
        ]
      },
      {
        prompt: "A closed contour returns to its starting point.",
        answer: "true",
        answers: ["true", "yes"],
        hint: "Closed means the curve loops back to where it began.",
        label: "closed contour",
        choices: [
          { value: "true", label: "True" },
          { value: "false", label: "False" }
        ]
      },
      {
        prompt: "In complex analysis, singularities inside a closed contour can affect the integral.",
        answer: "true",
        answers: ["true", "yes"],
        hint: "Residue theory is built around this idea.",
        label: "inside contour",
        choices: [
          { value: "true", label: "True" },
          { value: "false", label: "False" }
        ]
      },
      {
        prompt: "Which notation usually describes a closed contour integral?",
        answer: "oint",
        answers: ["oint", "\\oint", "∮"],
        hint: "The integral sign has a small circle.",
        label: "closed integral notation",
        choices: [
          { value: "oint", label: "∮" },
          { value: "sum", label: "Σ" },
          { value: "partial", label: "∂" },
          { value: "forall", label: "∀" }
        ]
      }
    ]
  };
})();
