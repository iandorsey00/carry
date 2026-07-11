(function () {
  window.CarryDifferentialEquations.register({
    id: "differential-equations.laplace-transforms",
    title: "Laplace transforms",
    figure: "diff-eq-laplace",
    intro: ["The Laplace transform converts differentiation in time into algebra in s.", "Initial conditions enter during the transform of derivatives.", "After solving for the transformed function, invert the transform to return to time."],
    overview: {
      workedRows: [
        { math: "\\mathcal{L}(y')=sY(s)-y(0)", note: "The initial value appears automatically." },
        { math: "sY(s)-y(0)+Y(s)=\\frac{1}{s}", note: "The differential equation becomes algebraic." },
        { math: "Y(s)=\\frac{s+1}{s(s+1)}", note: "Solve in the transform domain, then invert." }
      ],
      notice: ["Transform derivatives before solving for Y(s).", "Carry every initial condition into the algebra.", "Partial fractions often make inversion possible."],
      applications: ["Discontinuous forcing", "Impulse inputs", "Control systems"]
    },
    problems: [
      { prompt: "What is <math>L{y'}</math>?", answer: "sY-y(0)", answers: ["sY-y(0)", "sY(s)-y(0)"], hint: "The first derivative contributes one initial value.", label: "derivative transform", choices: [{ value: "sY-y(0)", label: "<math>sY(s)-y(0)</math>" }, { value: "sY", label: "<math>sY(s)</math>" }, { value: "Y/s", label: "<math>Y(s)/s</math>" }, { value: "Y+y(0)", label: "<math>Y(s)+y(0)</math>" }] },
      { prompt: "After transforming a linear initial-value problem, do you solve an algebraic or differential equation for <math>Y(s)</math>?", answer: "algebraic", hint: "Differentiation has become multiplication by s.", label: "transform domain", choices: [{ value: "algebraic", label: "algebraic" }, { value: "differential", label: "differential" }] },
      { prompt: "What operation returns <math>Y(s)</math> to <math>y(t)</math>?", answer: "inverse Laplace transform", hint: "Undo the original transform.", label: "inverse transform", choices: [{ value: "inverse Laplace transform", label: "inverse Laplace transform" }, { value: "differentiate in s", label: "differentiate in s" }] },
      { prompt: "Which algebra technique often helps invert a rational transform?", answer: "partial fractions", hint: "Break the rational function into table-friendly pieces.", label: "Laplace algebra", choices: [{ value: "partial fractions", label: "partial fractions" }, { value: "completing the square only", label: "completing the square only" }] },
      { prompt: "Why are Laplace transforms especially useful for step and impulse inputs?", answer: "discontinuities", hint: "The transform handles sudden changes cleanly.", label: "Laplace use", choices: [{ value: "discontinuities", label: "they handle discontinuities" }, { value: "no initial conditions", label: "they remove all initial conditions" }] },
      { prompt: "What is <math>L{1}</math>?", answer: "1/s", hint: "Integrate e to the negative st from zero to infinity.", label: "basic transform", choices: [{ value: "1/s", label: "<math>1/s</math>" }, { value: "s", label: "<math>s</math>" }, { value: "1", label: "1" }, { value: "e^s", label: "<math>e^s</math>" }] },
      { prompt: "How many initial values appear in <math>L{y''}</math>?", answer: "2", hint: "The formula includes y(0) and y prime at 0.", label: "second derivative transform", choices: [{ value: "1", label: "one" }, { value: "2", label: "two" }, { value: "3", label: "three" }, { value: "4", label: "four" }] },
      { prompt: "Does the Laplace variable s replace the time variable t in the transform domain?", answer: "yes", hint: "Y is written as a function of s.", label: "transform variable", choices: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }] }
    ]
  });
})();
