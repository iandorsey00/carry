(function () {
  window.CarryDifferentialEquations.register({
    id: "differential-equations.classification",
    title: "Equations and classification",
    figure: "diff-eq-classification",
    intro: [
      "A differential equation relates an unknown function to one or more derivatives.",
      "Order is the highest derivative present; linearity describes how the unknown function and its derivatives appear.",
      "An initial condition selects one solution from a family of solutions."
    ],
    overview: {
      workedRows: [
        { math: "y'' + 4y = 0", note: "The highest derivative is second order." },
        { math: "y'' + 4y = 0", note: "Every occurrence of y is linear." },
        { math: "y(0) = 2,\\, y'(0) = 0", note: "Two conditions select one second-order solution." }
      ],
      notice: [
        "Classify order before choosing a solution method.",
        "A term such as y squared or sin(y) makes an equation nonlinear.",
        "A second-order equation generally needs two independent conditions."
      ],
      applications: ["Population models", "Mechanical motion", "Electrical circuits"]
    },
    problems: [
      { prompt: "What is the order of <math>y''' + y' = x</math>?", answer: "3", hint: "Find the highest derivative.", label: "order", choices: [{ value: "1", label: "first" }, { value: "2", label: "second" }, { value: "3", label: "third" }, { value: "4", label: "fourth" }] },
      { prompt: "Is <math>y' + xy = 2</math> linear in <math>y</math>?", answer: "yes", hint: "The function and derivative appear only to the first power.", label: "linearity", choices: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }] },
      { prompt: "Is <math>y' = y^2</math> linear?", answer: "no", hint: "Look at the power on y.", label: "linearity", choices: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }] },
      { prompt: "How many initial conditions generally select one solution of a second-order equation?", answer: "2", hint: "Match the number of independent conditions to the order.", label: "initial conditions", choices: [{ value: "1", label: "one" }, { value: "2", label: "two" }, { value: "3", label: "three" }, { value: "4", label: "four" }] },
      { prompt: "In <math>y' = f(x,y)</math>, which symbol names the unknown function?", answer: "y", hint: "x is the independent variable.", label: "unknown function", choices: [{ value: "x", label: "x" }, { value: "y", label: "y" }] },
      { prompt: "Does <math>y'=x</math> contain partial derivatives?", answer: "no", hint: "Only one independent variable appears.", label: "ODE type", choices: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }] },
      { prompt: "What does an initial-value problem add to a differential equation?", answer: "conditions", hint: "The added information fixes values at a starting point.", label: "initial value problem", choices: [{ value: "conditions", label: "initial conditions" }, { value: "another derivative", label: "another derivative" }] },
      { prompt: "What is the order of <math>(y')^2+y=0</math>?", answer: "1", hint: "Order depends on the highest derivative, not its power.", label: "order", choices: [{ value: "1", label: "first" }, { value: "2", label: "second" }] }
    ]
  });
})();
