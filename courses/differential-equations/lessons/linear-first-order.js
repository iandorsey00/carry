(function () {
  window.CarryDifferentialEquations.register({
    id: "differential-equations.linear-first-order",
    title: "Linear first-order equations",
    figure: "diff-eq-linear-first-order",
    intro: ["Write a linear first-order equation as <math>y'+p(x)y=q(x)</math>.", "The integrating factor is <math>mu(x)=e^{int p(x)dx}</math>.", "Multiplication by the integrating factor turns the left side into a product derivative."],
    overview: {
      workedRows: [
        { math: "y' + 2y = 6", note: "The coefficient p(x) is 2." },
        { math: "\mu(x)=e^{\int 2dx}=e^{2x}", note: "Build the integrating factor." },
        { math: "(e^{2x}y)'=6e^{2x}", note: "Recognize the product derivative." }
      ],
      notice: ["Put the equation in standard form first.", "The integrating factor depends only on p(x).", "Integrate after the left side becomes one derivative."],
      applications: ["Mixing problems", "Heating and cooling", "Linear circuits"]
    },
    problems: [
      { prompt: "In <math>y'+3xy=5</math>, what is <math>p(x)</math>?", answer: "3x", hint: "Compare with y' + p(x)y = q(x).", label: "linear coefficient", choices: [{ value: "3", label: "3" }, { value: "3x", label: "3x" }, { value: "5", label: "5" }, { value: "5x", label: "5x" }] },
      { prompt: "What integrating factor corresponds to <math>p(x)=2</math>?", answer: "e^(2x)", answers: ["e^(2x)", "e^{2x}"], hint: "Integrate 2, then exponentiate.", label: "integrating factor", choices: [{ value: "e^x", label: "<math>e^x</math>" }, { value: "e^(2x)", label: "<math>e^{2x}</math>" }, { value: "2e^x", label: "<math>2e^x</math>" }, { value: "x^2", label: "<math>x^2</math>" }] },
      { prompt: "After multiplying by <math>mu</math>, what should the left side become?", answer: "product derivative", hint: "It is the derivative of mu times y.", label: "integrating factor result", choices: [{ value: "product derivative", label: "<math>(mu y)'</math>" }, { value: "zero", label: "0" }] },
      { prompt: "Is <math>y'+xy^2=1</math> linear in y?", answer: "no", hint: "The unknown function is squared.", label: "linearity", choices: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }] },
      { prompt: "Before finding an integrating factor, should the coefficient of <math>y'</math> be 1?", answer: "yes", hint: "Standard form begins with y'.", label: "standard form", choices: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }] },
      { prompt: "In <math>y'+p(x)y=q(x)</math>, which function appears on the right?", answer: "q(x)", hint: "Read the standard form directly.", label: "forcing function", choices: [{ value: "p(x)", label: "<math>p(x)</math>" }, { value: "q(x)", label: "<math>q(x)</math>" }] },
      { prompt: "Is an integrating factor <math>e^{int p(x)dx}</math> ever zero?", answer: "no", hint: "An exponential is positive for real inputs.", label: "integrating factor property", choices: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }] },
      { prompt: "What operation follows <math>(mu y)'=mu q</math>?", answer: "integrate", hint: "Undo the derivative on the left.", label: "linear next step", choices: [{ value: "integrate", label: "integrate both sides" }, { value: "differentiate", label: "differentiate both sides again" }] }
    ]
  });
})();
