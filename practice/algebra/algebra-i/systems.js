// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections.algebra = window.CarryPractice.sections.algebra || {};

  const entry = (answer, hint, answers = []) => ({
    answer: String(answer),
    ...(answers.length ? { answers: answers.map(String) } : {}),
    hint,
  });

  function eliminationProblem({ equations, combinedLeft, combinedRight, x, substitution, substitutionRight, y }) {
    return {
      equations,
      method: "elimination",
      rows: [
        {
          label: "combine",
          left: entry(combinedLeft, "Combine corresponding terms. The y terms cancel."),
          relation: "=",
          right: entry(combinedRight, "Combine the right sides using the same operation."),
        },
        { label: "solve x", left: "x", relation: "=", right: entry(x, `Divide ${combinedRight} by the coefficient of x.`) },
        {
          label: "substitute",
          left: entry(substitution, "Put the x-value into one original equation."),
          relation: "=",
          right: substitutionRight,
        },
        { label: "solve y", left: "y", relation: "=", right: entry(y, "Isolate y in the substituted equation.") },
        { label: "solution", left: "(x,y)", relation: "=", right: entry(`(${x},${y})`, "Write x first and y second.", [`(${x},${y})`, `${x},${y}`]) },
      ],
    };
  }

  function substitutionProblem({ equations, replacement, equation, x, y }) {
    return {
      equations,
      method: "substitution",
      rows: [
        { label: "replacement", left: "known value", relation: "=", right: entry(replacement, "Use the equation that already isolates one variable.") },
        { label: "substitute", left: entry(equation, "Replace the isolated variable in the other equation."), relation: "=", right: "solve" },
        { label: "solve x", left: "x", relation: "=", right: entry(x, "Simplify and isolate x.") },
        { label: "solve y", left: "y", relation: "=", right: entry(y, "Use the isolated equation to find y.") },
        { label: "solution", left: "(x,y)", relation: "=", right: entry(`(${x},${y})`, "Check the pair in both original equations.", [`(${x},${y})`, `${x},${y}`]) },
      ],
    };
  }

  function classificationProblem({ equations, scaledEquation, comparison, conclusion, hint }) {
    return {
      equations,
      method: "compare equations",
      rows: [
        { label: "scale first", left: "2(first equation)", relation: "=", right: entry(scaledEquation, "Multiply every term and the right side by 2.") },
        { label: "compare", left: "scaled first", relation: "vs", right: entry(comparison, hint) },
        { label: "solution type", left: "system", relation: "→", right: entry(conclusion, hint) },
      ],
    };
  }

  window.CarryPractice.sections.algebra["algebra.systems"] = {
    id: "algebra.systems",
    topic: "Algebra",
    title: "Systems",
    type: "system",
    figure: "system-intersection",
    intro: [
      "A system asks for values that make every equation true at once.",
      "A unique solution is the point where two lines meet.",
      "Parallel lines have no solution; two forms of the same line have infinitely many solutions.",
    ],
    problems: [
      eliminationProblem({
        equations: ["x + y = 3", "x - y = 1"],
        combinedLeft: "2x", combinedRight: "4", x: "2",
        substitution: "2+y", substitutionRight: "3", y: "1",
      }),
      substitutionProblem({
        equations: ["y = x + 2", "y = 6"],
        replacement: "y=6", equation: "6=x+2", x: "4", y: "6",
      }),
      substitutionProblem({
        equations: ["2x + y = 7", "y = 3"],
        replacement: "y=3", equation: "2x+3=7", x: "2", y: "3",
      }),
      eliminationProblem({
        equations: ["2x + y = 7", "x - y = 2"],
        combinedLeft: "3x", combinedRight: "9", x: "3",
        substitution: "3-y", substitutionRight: "2", y: "1",
      }),
      eliminationProblem({
        equations: ["x + y = 5", "2x - y = 4"],
        combinedLeft: "3x", combinedRight: "9", x: "3",
        substitution: "3+y", substitutionRight: "5", y: "2",
      }),
      eliminationProblem({
        equations: ["2x + y = 8", "2x - y = 4"],
        combinedLeft: "4x", combinedRight: "12", x: "3",
        substitution: "6+y", substitutionRight: "8", y: "2",
      }),
      classificationProblem({
        equations: ["x + y = 4", "2x + 2y = 8"],
        scaledEquation: "2x+2y=8",
        comparison: "same equation",
        conclusion: "infinitely many solutions",
        hint: "The second equation is exactly twice the first, so both describe the same line.",
      }),
      classificationProblem({
        equations: ["x + y = 4", "2x + 2y = 10"],
        scaledEquation: "2x+2y=8",
        comparison: "same left, different right",
        conclusion: "no solution",
        hint: "The same expression cannot equal both 8 and 10, so the lines are parallel.",
      }),
    ],
  };
})();
