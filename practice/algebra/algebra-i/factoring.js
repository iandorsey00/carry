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
  const binomial = (value, variable = "x") => `(${variable}${signed(value)})`;
  const pairText = (pair) => pair.join(",");
  const reversedPairText = (pair) => [...pair].reverse().join(",");

  function pairProblem({ expression, coefficient, constant, pair, pairOptions, signPattern }) {
    const factors = `${binomial(pair[0])}${binomial(pair[1])}`;
    const reversedFactors = `${binomial(pair[1])}${binomial(pair[0])}`;
    const pairAnswers = pair[0] === pair[1]
      ? [pairText(pair)]
      : [pairText(pair), reversedPairText(pair)];
    const factorAnswers = factors === reversedFactors ? [factors] : [factors, reversedFactors];

    return {
      expression,
      method: "pair",
      rows: [
        { label: "shape", left: "x^2 + bx + c", relation: "→", right: "two binomials" },
        { label: "x coefficient", left: "b", relation: "=", right: entry(coefficient, `The coefficient of x is ${coefficient}.`) },
        { label: "constant", left: "c", relation: "=", right: entry(constant, `The constant term is ${constant}.`) },
        { label: "candidate pairs", left: `product ${constant}`, relation: ":", right: pairOptions },
        {
          label: "sign pattern",
          left: "signs",
          relation: "=",
          right: entry(signPattern, `Choose signs that multiply to ${constant} and add to ${coefficient}.`),
        },
        {
          label: "working pair",
          left: entry(pairText(pair), `${pair[0]} + ${pair[1]} = ${coefficient}.`, pairAnswers),
          relation: "+",
          right: entry(coefficient, `The pair must add to the x coefficient, ${coefficient}.`),
        },
        {
          label: "product check",
          left: pairText(pair),
          relation: "×",
          right: entry(constant, `${pair[0]} × ${pair[1]} = ${constant}.`),
        },
        {
          label: "factored form",
          left: "result",
          relation: "=",
          right: entry(factors, "Use each number from the working pair in one binomial.", factorAnswers),
        },
      ],
    };
  }

  function gcfProblem({ expression, commonFactor, firstQuotient, secondQuotient, result }) {
    return {
      expression,
      method: "gcf",
      rows: [
        { label: "shared factor", left: "GCF", relation: "=", right: entry(commonFactor, "Find the greatest factor shared by every term, including any shared variable.") },
        { label: "first quotient", left: `first term ÷ ${commonFactor}`, relation: "=", right: entry(firstQuotient, "Divide the first term by the common factor.") },
        { label: "second quotient", left: `second term ÷ ${commonFactor}`, relation: "=", right: entry(secondQuotient, "Divide the second term by the same factor.") },
        { label: "inside", left: "quotients", relation: "=", right: entry(`${firstQuotient}+${secondQuotient}`, "Place the two quotients inside parentheses.") },
        { label: "factored form", left: "result", relation: "=", right: entry(result, "Place the GCF outside the parentheses.") },
      ],
    };
  }

  function differenceOfSquaresProblem({ expression, firstRoot, secondRoot, result, reverse }) {
    return {
      expression,
      method: "difference of squares",
      rows: [
        { label: "pattern", left: "a^2 - b^2", relation: "=", right: "(a-b)(a+b)" },
        { label: "first root", left: "first square", relation: "→", right: entry(firstRoot, "Take the square root of the first term.") },
        { label: "second root", left: "second square", relation: "→", right: entry(secondRoot, "Take the square root of the second term.") },
        { label: "signs", left: "factor signs", relation: "=", right: entry("opposite signs", "A difference of squares always uses one minus and one plus.") },
        { label: "factored form", left: "result", relation: "=", right: entry(result, "Use the two roots with opposite signs.", [result, reverse]) },
      ],
    };
  }

  window.CarryPractice.sections.algebra["algebra.factoring"] = {
    id: "algebra.factoring",
    topic: "Algebra",
    title: "Factoring",
    type: "factoring",
    figure: "factoring-pairs",
    intro: [
      "Factoring rewrites an expression as a product.",
      "Look for a greatest common factor before using another pattern.",
      "For x^2 + bx + c, find two numbers whose product is c and whose sum is b.",
    ],
    problems: [
      pairProblem({
        expression: "x^2 + 5x + 6",
        coefficient: 5,
        constant: 6,
        pair: [2, 3],
        pairOptions: "1,6 or 2,3",
        signPattern: "both positive",
      }),
      gcfProblem({ expression: "6x + 9", commonFactor: "3", firstQuotient: "2x", secondQuotient: "3", result: "3(2x+3)" }),
      differenceOfSquaresProblem({ expression: "x^2 - 9", firstRoot: "x", secondRoot: "3", result: "(x-3)(x+3)", reverse: "(x+3)(x-3)" }),
      pairProblem({
        expression: "x^2 - x - 12",
        coefficient: -1,
        constant: -12,
        pair: [-4, 3],
        pairOptions: "-1,12; 1,-12; -3,4; -4,3",
        signPattern: "opposite signs",
      }),
      pairProblem({
        expression: "x^2 + 10x + 25",
        coefficient: 10,
        constant: 25,
        pair: [5, 5],
        pairOptions: "1,25 or 5,5",
        signPattern: "both positive",
      }),
      gcfProblem({ expression: "8x^2 + 12x", commonFactor: "4x", firstQuotient: "2x", secondQuotient: "3", result: "4x(2x+3)" }),
      differenceOfSquaresProblem({ expression: "4x^2 - 25", firstRoot: "2x", secondRoot: "5", result: "(2x-5)(2x+5)", reverse: "(2x+5)(2x-5)" }),
      pairProblem({
        expression: "x^2 + x - 20",
        coefficient: 1,
        constant: -20,
        pair: [5, -4],
        pairOptions: "-1,20; 1,-20; -4,5; 4,-5",
        signPattern: "opposite signs",
      }),
    ],
  };
})();
