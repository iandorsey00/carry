(function () {
  window.CarryDifferentialEquations.register({
    id: "differential-equations.series-solutions",
    title: "Series solutions",
    figure: "diff-eq-series-solutions",
    intro: ["When elementary formulas are unavailable, assume a power series for the solution.", "Differentiate the series term by term and substitute into the equation.", "Matching equal powers produces a recurrence for the coefficients."],
    overview: {
      workedRows: [
        { math: "y=\sum_{n=0}^{\infty}a_nx^n", note: "Assume a local power-series solution." },
        { math: "y'=\sum_{n=1}^{\infty}na_nx^{n-1}", note: "Differentiate term by term." },
        { math: "\text{match coefficients of }x^n", note: "Equal powers must have equal coefficients." }
      ],
      notice: ["Align powers before comparing coefficients.", "Initial conditions determine the first coefficients.", "The recurrence generates later coefficients."],
      applications: ["Airy and Bessel equations", "Approximations near ordinary points", "Special functions"]
    },
    problems: [
      { prompt: "In <math>y=sum a_n x^n</math>, what do the symbols <math>a_n</math> represent?", answer: "coefficients", hint: "They multiply each power of x.", label: "series coefficients", choices: [{ value: "coefficients", label: "coefficients" }, { value: "derivatives", label: "derivatives" }] },
      { prompt: "What is the derivative of <math>a_nx^n</math>?", answer: "n a_n x^(n-1)", answers: ["n a_n x^(n-1)", "na_nx^(n-1)"], hint: "Apply the power rule while treating a sub n as constant.", label: "series derivative", choices: [{ value: "n a_n x^(n-1)", label: "<math>na_nx^{n-1}</math>" }, { value: "a_n x^(n-1)", label: "<math>a_nx^{n-1}</math>" }, { value: "n a_n x^n", label: "<math>na_nx^n</math>" }, { value: "a_n n^x", label: "<math>a_nn^x</math>" }] },
      { prompt: "After substitution, what must be aligned before coefficients are compared?", answer: "powers of x", hint: "Every sum should use the same exponent.", label: "series alignment", choices: [{ value: "powers of x", label: "powers of x" }, { value: "values of y", label: "values of y" }] },
      { prompt: "What relation usually generates later coefficients from earlier ones?", answer: "recurrence", hint: "It is the same kind of rule used for sequences.", label: "coefficient rule", choices: [{ value: "recurrence", label: "a recurrence relation" }, { value: "inequality", label: "an inequality" }] },
      { prompt: "Do initial conditions help determine the first series coefficients?", answer: "yes", hint: "Evaluate the series and its derivatives at the initial point.", label: "series initial values", choices: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }] },
      { prompt: "At an expansion point x equals 0, what does <math>a_0</math> equal?", answer: "y(0)", hint: "All positive powers vanish at zero.", label: "constant coefficient", choices: [{ value: "y(0)", label: "<math>y(0)</math>" }, { value: "y'(0)", label: "<math>y'(0)</math>" }] },
      { prompt: "Is a power-series solution generally local to an interval of convergence?", answer: "yes", hint: "A series need not converge for every x.", label: "series convergence", choices: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }] },
      { prompt: "At an ordinary point, are the equation's normalized coefficients well behaved?", answer: "yes", hint: "Ordinary points exclude singular coefficient behavior.", label: "ordinary point", choices: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }] }
    ]
  });
})();
