(function () {
  window.CarryDifferentialEquations.register({
    id: "differential-equations.homogeneous-second-order",
    title: "Homogeneous linear equations",
    figure: "diff-eq-homogeneous-second-order",
    intro: ["For constant coefficients, try <math>y=e^{rx}</math>.", "Substitution produces a characteristic polynomial in r.", "Real, repeated, and complex roots produce different solution families."],
    overview: {
      workedRows: [
        { math: "y''-5y'+6y=0", note: "Replace derivatives of e to the rx by powers of r." },
        { math: "r^2-5r+6=0", note: "Solve the characteristic equation." },
        { math: "r=2,3", note: "Two real roots give two exponential solutions." },
        { math: "y=C_1e^{2x}+C_2e^{3x}", note: "Combine the independent solutions." }
      ],
      notice: ["The characteristic equation is algebraic.", "Two independent solutions are needed for second order.", "Complex roots produce sines and cosines."],
      applications: ["Mechanical vibration", "Circuit transients", "Linear stability"]
    },
    problems: [
      { prompt: "What characteristic equation belongs to <math>y''+4y=0</math>?", answer: "r^2+4=0", hint: "Replace y double prime by r squared and y by 1.", label: "characteristic equation", choices: [{ value: "r^2+4=0", label: "<math>r^2+4=0</math>" }, { value: "r+4=0", label: "<math>r+4=0</math>" }, { value: "r^2+4r=0", label: "<math>r^2+4r=0</math>" }, { value: "2r+4=0", label: "<math>2r+4=0</math>" }] },
      { prompt: "The roots of <math>r^2+4=0</math> are which pair?", answer: "+-2i", answers: ["+-2i", "±2i"], hint: "r squared equals negative 4.", label: "complex roots", choices: [{ value: "+-2", label: "<math>plus or minus 2</math>" }, { value: "+-2i", label: "<math>plus or minus 2i</math>" }, { value: "0 and 4", label: "0 and 4" }, { value: "-4", label: "-4 only" }] },
      { prompt: "Complex roots <math>alpha plus or minus beta i</math> introduce which functions?", answer: "sine and cosine", hint: "Euler's formula turns complex exponentials into oscillations.", label: "complex root solutions", choices: [{ value: "sine and cosine", label: "sine and cosine" }, { value: "logarithms", label: "logarithms" }] },
      { prompt: "A repeated root r produces <math>e^{rx}</math> and what second solution?", answer: "xe^(rx)", answers: ["xe^(rx)", "xe^{rx}"], hint: "Multiply the first solution by x.", label: "repeated root", choices: [{ value: "xe^(rx)", label: "<math>xe^{rx}</math>" }, { value: "e^(2rx)", label: "<math>e^{2rx}</math>" }] },
      { prompt: "How many arbitrary constants appear in the general solution of a second-order linear equation?", answer: "2", hint: "One for each independent solution.", label: "solution constants", choices: [{ value: "1", label: "one" }, { value: "2", label: "two" }, { value: "3", label: "three" }, { value: "4", label: "four" }] },
      { prompt: "What roots belong to <math>r^2-3r+2=0</math>?", answer: "1 and 2", hint: "Factor as (r minus 1)(r minus 2).", label: "characteristic roots", choices: [{ value: "1 and 2", label: "1 and 2" }, { value: "-1 and -2", label: "-1 and -2" }, { value: "0 and 3", label: "0 and 3" }, { value: "1 and 3", label: "1 and 3" }] },
      { prompt: "Do distinct characteristic roots normally give independent solutions?", answer: "yes", hint: "Their exponential rates differ.", label: "independence", choices: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }] },
      { prompt: "Initial values <math>y(0)</math> and <math>y'(0)</math> determine which quantities?", answer: "constants", hint: "Substitute them into the general solution and its derivative.", label: "initial conditions", choices: [{ value: "constants", label: "the arbitrary constants" }, { value: "order", label: "the equation's order" }] }
    ]
  });
})();
