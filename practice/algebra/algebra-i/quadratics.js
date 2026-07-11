// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections.algebra = window.CarryPractice.sections.algebra || {};

  const entry = (answer, hint, answers = []) => ({
    answer: String(answer),
    ...(answers.length ? { answers: answers.map(String) } : {}),
    hint,
  });

  const signed = (value) => value >= 0 ? `+${value}` : String(value);
  const factor = (value) => `(x${signed(value)})`;
  const pairText = (pair) => pair.join(",");
  const reversedPairText = (pair) => [...pair].reverse().join(",");

  function factoringRootsProblem({ expression, coefficient, constant, pair, pairOptions, signPattern, roots }) {
    const factors = `${factor(pair[0])}${factor(pair[1])}`;
    const reversedFactors = `${factor(pair[1])}${factor(pair[0])}`;
    const rootText = roots.join(",");
    const reversedRoots = [...roots].reverse().join(",");
    return {
      expression,
      method: "roots by factoring",
      rows: [
        { label: "shape", left: "x^2 + bx + c = 0", relation: "→", right: "factor first" },
        { label: "x coefficient", left: "b", relation: "=", right: entry(coefficient, `The coefficient of x is ${coefficient}.`) },
        { label: "constant", left: "c", relation: "=", right: entry(constant, `The constant term is ${constant}.`) },
        { label: "candidate pairs", left: `product ${constant}`, relation: ":", right: pairOptions },
        { label: "sign pattern", left: "signs", relation: "=", right: entry(signPattern, `Choose signs that multiply to ${constant} and add to ${coefficient}.`) },
        {
          label: "working pair",
          left: entry(pairText(pair), `${pair[0]} + ${pair[1]} = ${coefficient}.`, pair[0] === pair[1] ? [pairText(pair)] : [pairText(pair), reversedPairText(pair)]),
          relation: "+",
          right: entry(coefficient, "The pair must add to the x coefficient."),
        },
        {
          label: "factor",
          left: "expression",
          relation: "=",
          right: entry(factors, "Put one number from the pair in each binomial.", factors === reversedFactors ? [factors] : [factors, reversedFactors]),
        },
        {
          label: "zero product",
          left: roots.length === 1 ? "repeated root" : "roots",
          relation: "=",
          right: entry(rootText, "Set each factor equal to zero. The root has the opposite sign of its factor constant.", roots.length === 1 ? [rootText, `x=${rootText}`] : [rootText, reversedRoots, `x=${rootText.replace(",", ",x=")}`, `x=${reversedRoots.replace(",", ",x=")}`]),
        },
      ],
    };
  }

  function vertexProblem({ expression, a, b, vertexX, substitution, vertexY }) {
    return {
      expression,
      method: "vertex",
      rows: [
        { label: "x^2 coefficient", left: "a", relation: "=", right: entry(a, `The coefficient of x^2 is ${a}.`) },
        { label: "x coefficient", left: "b", relation: "=", right: entry(b, `The coefficient of x is ${b}.`) },
        { label: "vertex x", left: "-b / (2a)", relation: "=", right: entry(vertexX, "Use the opposite of b divided by twice a.") },
        { label: "substitute", left: `f(${vertexX})`, relation: "=", right: entry(substitution, "Substitute the vertex x-coordinate into the original quadratic.") },
        { label: "vertex y", left: "simplify", relation: "=", right: entry(vertexY, "Simplify to find the y-coordinate.") },
        { label: "vertex", left: "(x,y)", relation: "=", right: entry(`(${vertexX},${vertexY})`, "Combine the x- and y-coordinates.", [`(${vertexX},${vertexY})`, `${vertexX},${vertexY}`]) },
      ],
    };
  }

  window.CarryPractice.sections.algebra["algebra.quadratics"] = {
    id: "algebra.quadratics",
    topic: "Algebra",
    title: "Quadratics",
    type: "quadratic",
    figure: "quadratic-roots",
    intro: [
      "A quadratic has a squared variable as its highest power.",
      "Before solving, identify whether the problem asks for roots, a vertex, or a value.",
      "Factoring is efficient when an integer pair is visible; the discriminant and quadratic formula work more generally.",
    ],
    problems: [
      factoringRootsProblem({
        expression: "x^2 - 5x + 6 = 0",
        coefficient: -5,
        constant: 6,
        pair: [-2, -3],
        pairOptions: "1,6; -1,-6; 2,3; -2,-3",
        signPattern: "both negative",
        roots: [2, 3],
      }),
      vertexProblem({ expression: "y = x^2 - 4x + 1", a: 1, b: -4, vertexX: 2, substitution: "2^2-4(2)+1", vertexY: -3 }),
      {
        expression: "x^2 - 9 when x = 4",
        method: "evaluate",
        rows: [
          { label: "substitute", left: "x", relation: "=", right: entry("4", "The problem gives x = 4.") },
          { label: "rewrite", left: "x^2 - 9", relation: "=", right: entry("4^2-9", "Replace every x with 4.", ["4^2-9", "4^2 - 9"]) },
          { label: "square", left: "4^2", relation: "=", right: entry("16", "Four squared is 16.") },
          { label: "value", left: "16 - 9", relation: "=", right: entry("7", "Subtract 9 from 16.") },
        ],
      },
      factoringRootsProblem({
        expression: "x^2 - x - 6 = 0",
        coefficient: -1,
        constant: -6,
        pair: [-3, 2],
        pairOptions: "-1,6; 1,-6; -2,3; -3,2",
        signPattern: "opposite signs",
        roots: [3, -2],
      }),
      factoringRootsProblem({
        expression: "x^2 - 6x + 9 = 0",
        coefficient: -6,
        constant: 9,
        pair: [-3, -3],
        pairOptions: "1,9; -1,-9; 3,3; -3,-3",
        signPattern: "both negative",
        roots: [3],
      }),
      {
        expression: "x^2 + 4x + 5 = 0",
        method: "discriminant",
        rows: [
          { label: "coefficients", left: "a,b,c", relation: "=", right: entry("1,4,5", "Read the coefficients from ax^2 + bx + c = 0.") },
          { label: "discriminant", left: "b^2 - 4ac", relation: "=", right: entry("4^2-4(1)(5)", "Substitute a = 1, b = 4, and c = 5.") },
          { label: "simplify", left: "16 - 20", relation: "=", right: entry("-4", "The discriminant is negative.") },
          { label: "real roots", left: "negative discriminant", relation: "→", right: entry("no real roots", "A negative number has no real square root.", ["no real roots", "none", "no real solutions"]) },
        ],
      },
      {
        expression: "x^2 - 2x - 1 = 0",
        method: "quadratic formula",
        rows: [
          { label: "coefficients", left: "a,b,c", relation: "=", right: entry("1,-2,-1", "Read a = 1, b = -2, and c = -1.") },
          { label: "discriminant", left: "b^2 - 4ac", relation: "=", right: entry("8", "(-2)^2 - 4(1)(-1) = 4 + 4.") },
          { label: "square root", left: "sqrt(8)", relation: "=", right: entry("2sqrt(2)", "Factor 8 as 4 × 2, then take the square root of 4.", ["2sqrt(2)", "2*sqrt(2)"]) },
          { label: "numerator", left: "-b +/- sqrt(D)", relation: "=", right: entry("2+/-2sqrt(2)", "The opposite of -2 is 2.", ["2+/-2sqrt(2)", "2±2sqrt(2)"]) },
          { label: "denominator", left: "2a", relation: "=", right: entry("2", "Twice a is 2.") },
          { label: "roots", left: "simplify", relation: "=", right: entry("1+/-sqrt(2)", "Divide both terms in the numerator by 2.", ["1+/-sqrt(2)", "1±sqrt(2)"]) },
        ],
      },
      vertexProblem({ expression: "y = -x^2 + 6x - 5", a: -1, b: 6, vertexX: 3, substitution: "-(3^2)+6(3)-5", vertexY: 4 }),
    ],
  };
})();
