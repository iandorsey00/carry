(function () {
  window.CarryDifferentialEquations.register({
    id: "differential-equations.euler-method",
    title: "Euler's method",
    figure: "diff-eq-euler",
    intro: [
      "Euler's method approximates a solution by repeatedly following the current slope.",
      "From <math>(x_n,y_n)</math>, compute <math>y_{n+1}=y_n+h f(x_n,y_n)</math>.",
      "Smaller steps usually improve accuracy but require more computation."
    ],
    overview: {
      workedRows: [
        { math: "y' = x+y,\, (x_0,y_0)=(0,1),\, h=0.1", note: "Evaluate the slope at the current point." },
        { math: "f(0,1)=1", note: "The first slope is 1." },
        { math: "y_1=1+0.1(1)=1.1", note: "Move one horizontal step using that slope." }
      ],
      notice: ["Use the old point to compute each new point.", "The step size h controls the horizontal move.", "Euler values are approximations, not symbolic solutions."],
      applications: ["Computer simulation", "Models without elementary formulas", "Checking analytic solutions"]
    },
    problems: [
      { prompt: "For <math>y'=2y</math> at <math>y=3</math>, what slope does Euler's method use?", answer: "6", hint: "Evaluate 2y at y = 3.", label: "Euler slope", choices: [{ value: "2", label: "2" }, { value: "3", label: "3" }, { value: "5", label: "5" }, { value: "6", label: "6" }] },
      { prompt: "Starting at <math>y_0=3</math> with slope 6 and <math>h=0.1</math>, what is <math>y_1</math>?", answer: "3.6", hint: "Use y next = y current + h times slope.", label: "Euler step", choices: [{ value: "3.1", label: "3.1" }, { value: "3.6", label: "3.6" }, { value: "6.1", label: "6.1" }, { value: "9", label: "9" }] },
      { prompt: "Which change usually reduces Euler approximation error?", answer: "smaller h", hint: "Follow the changing slope more frequently.", label: "step size", choices: [{ value: "smaller h", label: "use a smaller step h" }, { value: "larger h", label: "use a larger step h" }] },
      { prompt: "Does Euler's method use the slope at the beginning or end of a basic step?", answer: "beginning", hint: "The next point is not known yet.", label: "Euler endpoint", choices: [{ value: "beginning", label: "beginning" }, { value: "end", label: "end" }] },
      { prompt: "If the current slope is zero, what vertical change does one Euler step make?", answer: "0", hint: "The change is h times the slope.", label: "Euler change", choices: [{ value: "0", label: "0" }, { value: "h", label: "h" }, { value: "1", label: "1" }, { value: "h^2", label: "<math>h^2</math>" }] },
      { prompt: "After one Euler step, how does the independent variable change?", answer: "x next = x + h", hint: "Each step moves horizontally by h.", label: "Euler x step", choices: [{ value: "x next = x + h", label: "<math>x_{n+1}=x_n+h</math>" }, { value: "x next = hx", label: "<math>x_{n+1}=hx_n</math>" }] },
      { prompt: "Is Euler's method exact for every differential equation?", answer: "no", hint: "It follows constant tangent segments while slopes may change.", label: "Euler accuracy", choices: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }] },
      { prompt: "What kind of error can build over many Euler steps?", answer: "accumulated", hint: "Each approximation becomes the starting point for the next.", label: "Euler error", choices: [{ value: "accumulated", label: "accumulated numerical error" }, { value: "no error", label: "no error" }] }
    ]
  });
})();
