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
      },
      {
        prompt: "If a function is analytic everywhere inside and on a closed contour, what is the contour integral?",
        answer: "0",
        answers: ["0", "zero"],
        hint: "That is Cauchy's integral theorem.",
        label: "cauchy theorem",
        choices: [
          { value: "0", label: "0" },
          { value: "1", label: "1" },
          { value: "2πi", label: "2πi" },
          { value: "undefined", label: "undefined" }
        ]
      },
      {
        prompt: "What is the integral of 1/z once counterclockwise around the unit circle?",
        answer: "2πi",
        answers: ["2πi", "2 pi i", "2pii", "2i pi"],
        hint: "The one value every complex analyst memorizes first.",
        label: "unit circle integral",
        choices: [
          { value: "2πi", label: "2πi" },
          { value: "0", label: "0" },
          { value: "1", label: "1" },
          { value: "πi", label: "πi" }
        ]
      },
      {
        prompt: "Does the direction of travel around a closed contour matter?",
        answer: "yes",
        answers: ["yes", "true"],
        hint: "Reversing the orientation flips the sign of the integral.",
        label: "orientation",
        choices: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" }
        ]
      },
      {
        prompt: "A path from 1 to i that stops there: is it a closed contour?",
        answer: "no",
        answers: ["no", "false"],
        hint: "Closed means the path ends exactly where it began.",
        label: "open path",
        choices: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" }
        ]
      }
    ]
  };
})();
