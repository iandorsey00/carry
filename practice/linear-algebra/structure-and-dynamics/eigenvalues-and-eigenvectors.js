// Carry practice lesson data. Answers request an ordered or normalized form so each step is checkable.
(function registerGuidedEigenvectors() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  const section = window.CarryPractice.sections["linear-algebra"] = window.CarryPractice.sections["linear-algebra"] || {};

  function slot(answer, math, hint, label, answers = []) {
    return { answer, answers: [...new Set([answer, ...answers])], math, hint, label };
  }

  function problem(config) {
    return {
      id: config.id,
      prompt: `${config.prompt} Give eigenvalues in increasing order. Normalize each eigenvector so its first nonzero component is 1.`,
      capabilities: ["linear-algebra.eigenpairs"],
      rows: [
        { id: "matrix", label: "matrix", left: "A", relation: "=", right: config.matrixMath },
        { id: "characteristic", label: "characteristic", left: "\\operatorname{det}(A-\\lambda I)", relation: "=", right: slot(config.polynomial, config.polynomialMath, "Compute the determinant of A minus lambda times the identity.", "Find the characteristic polynomial", config.polynomialAnswers) },
        { id: "eigenvalues", label: "roots", left: "(\\lambda_1,\\lambda_2)", relation: "=", right: slot(config.values, config.valuesMath, "Set the characteristic polynomial equal to zero and solve for lambda.", "Find the ordered eigenvalues", config.valueAnswers) },
        { id: "first-vector", label: "first direction", left: "\\mathbf{v}_1", relation: "=", right: slot(config.vector1, config.vector1Math, "Solve (A minus lambda 1 I)v = 0, then use the requested normalization.", "Find an eigenvector for lambda 1", config.vector1Answers) },
        { id: "second-vector", label: "second direction", left: "\\mathbf{v}_2", relation: "=", right: slot(config.vector2, config.vector2Math, "Solve (A minus lambda 2 I)v = 0, then use the requested normalization.", "Find an eigenvector for lambda 2", config.vector2Answers) },
        { id: "system", label: "system modes", left: "\\mathbf{x}(t)", relation: "=", right: slot(config.solution, config.solutionMath, "Each eigenpair contributes c times e to the lambda t times its eigenvector.", "Build the general solution of x prime equals A x", config.solutionAnswers) }
      ]
    };
  }

  section["linear-algebra.eigenvectors-guided"] = {
    id: "linear-algebra.eigenvectors-guided",
    topic: "Linear Algebra",
    title: "Eigenvalues and eigenvectors",
    type: "guided-derivation",
    figure: "linear-eigenvectors-guided",
    intro: [
      "An eigenvector keeps its direction under a linear transformation; its eigenvalue gives the scale along that direction.",
      "Find eigenvalues from <math>\\operatorname{det}(A-\\lambda I)=0</math>, then find each eigenvector from <math>(A-\\lambda I)\\mathbf{v}=0</math>.",
      "For x′ = Ax, every eigenpair produces a solution mode e^(λt)v."
    ],
    overview: {
      workedRows: [
        { math: "A=[[2,1],[0,3]]", note: "Start with the system matrix." },
        { math: "\\operatorname{det}(A-\\lambda I)=(2-\\lambda)(3-\\lambda)", note: "The roots are the eigenvalues 2 and 3." },
        { math: "\\mathbf{v}_1=(1,0),\\quad\\mathbf{v}_2=(1,1)", note: "Solve one null-space equation for each eigenvalue." },
        { math: "\\mathbf{x}(t)=c_1e^{2t}(1,0)+c_2e^{3t}(1,1)", note: "These eigendirections become the system's independent modes." }
      ],
      studio: ["Complete one invariant at a time: polynomial, roots, then directions.", "Use the final row to connect linear algebra directly to differential equations."],
      applications: ["Coupled differential equations", "Stability and phase portraits", "Repeated transformations and long-term behavior"]
    },
    problems: [
      problem({ id: "eigen-upper-23", prompt: "Analyze <math>A=[[2,1],[0,3]]</math>.", matrixMath: "[[2,1],[0,3]]", polynomial: "(2-lambda)(3-lambda)", polynomialMath: "(2-\\lambda)(3-\\lambda)", polynomialAnswers: ["lambda^2-5lambda+6", "(lambda-2)(lambda-3)"], values: "2,3", valuesMath: "(2,3)", valueAnswers: ["(2,3)", "2 and 3"], vector1: "(1,0)", vector1Math: "(1,0)", vector1Answers: ["[1,0]"], vector2: "(1,1)", vector2Math: "(1,1)", vector2Answers: ["[1,1]"], solution: "c1e^(2t)(1,0)+c2e^(3t)(1,1)", solutionMath: "c_1e^{2t}(1,0)+c_2e^{3t}(1,1)", solutionAnswers: ["c1 e^(2t)(1,0)+c2 e^(3t)(1,1)"] }),
      problem({ id: "eigen-diagonal-minus12", prompt: "Analyze <math>A=[[-1,0],[0,2]]</math>.", matrixMath: "[[-1,0],[0,2]]", polynomial: "(-1-lambda)(2-lambda)", polynomialMath: "(-1-\\lambda)(2-\\lambda)", polynomialAnswers: ["lambda^2-lambda-2", "(lambda+1)(lambda-2)"], values: "-1,2", valuesMath: "(-1,2)", valueAnswers: ["(-1,2)", "-1 and 2"], vector1: "(1,0)", vector1Math: "(1,0)", vector1Answers: ["[1,0]"], vector2: "(0,1)", vector2Math: "(0,1)", vector2Answers: ["[0,1]"], solution: "c1e^(-t)(1,0)+c2e^(2t)(0,1)", solutionMath: "c_1e^{-t}(1,0)+c_2e^{2t}(0,1)", solutionAnswers: ["c1 e^(-t)(1,0)+c2 e^(2t)(0,1)"] }),
      problem({ id: "eigen-symmetric-13", prompt: "Analyze <math>A=[[2,1],[1,2]]</math>.", matrixMath: "[[2,1],[1,2]]", polynomial: "lambda^2-4lambda+3", polynomialMath: "\\lambda^2-4\\lambda+3", polynomialAnswers: ["(lambda-1)(lambda-3)"], values: "1,3", valuesMath: "(1,3)", valueAnswers: ["(1,3)", "1 and 3"], vector1: "(1,-1)", vector1Math: "(1,-1)", vector1Answers: ["[1,-1]"], vector2: "(1,1)", vector2Math: "(1,1)", vector2Answers: ["[1,1]"], solution: "c1e^t(1,-1)+c2e^(3t)(1,1)", solutionMath: "c_1e^t(1,-1)+c_2e^{3t}(1,1)", solutionAnswers: ["c1 e^t(1,-1)+c2 e^(3t)(1,1)"] }),
      problem({ id: "eigen-lower-14", prompt: "Analyze <math>A=[[1,0],[2,4]]</math>.", matrixMath: "[[1,0],[2,4]]", polynomial: "(1-lambda)(4-lambda)", polynomialMath: "(1-\\lambda)(4-\\lambda)", polynomialAnswers: ["lambda^2-5lambda+4", "(lambda-1)(lambda-4)"], values: "1,4", valuesMath: "(1,4)", valueAnswers: ["(1,4)", "1 and 4"], vector1: "(1,-2/3)", vector1Math: "(1,-\\frac{2}{3})", vector1Answers: ["[1,-2/3]", "(1,-.6666667)"], vector2: "(0,1)", vector2Math: "(0,1)", vector2Answers: ["[0,1]"], solution: "c1e^t(1,-2/3)+c2e^(4t)(0,1)", solutionMath: "c_1e^t(1,-\\frac{2}{3})+c_2e^{4t}(0,1)", solutionAnswers: ["c1 e^t(1,-2/3)+c2 e^(4t)(0,1)"] }),
      problem({ id: "eigen-diagonal-minus32", prompt: "Analyze <math>A=[[-3,0],[0,-2]]</math>.", matrixMath: "[[-3,0],[0,-2]]", polynomial: "(-3-lambda)(-2-lambda)", polynomialMath: "(-3-\\lambda)(-2-\\lambda)", polynomialAnswers: ["lambda^2+5lambda+6", "(lambda+3)(lambda+2)"], values: "-3,-2", valuesMath: "(-3,-2)", valueAnswers: ["(-3,-2)", "-3 and -2"], vector1: "(1,0)", vector1Math: "(1,0)", vector1Answers: ["[1,0]"], vector2: "(0,1)", vector2Math: "(0,1)", vector2Answers: ["[0,1]"], solution: "c1e^(-3t)(1,0)+c2e^(-2t)(0,1)", solutionMath: "c_1e^{-3t}(1,0)+c_2e^{-2t}(0,1)", solutionAnswers: ["c1 e^(-3t)(1,0)+c2 e^(-2t)(0,1)"] }),
      problem({ id: "eigen-upper-minus21", prompt: "Analyze <math>A=[[-2,3],[0,1]]</math>.", matrixMath: "[[-2,3],[0,1]]", polynomial: "(-2-lambda)(1-lambda)", polynomialMath: "(-2-\\lambda)(1-\\lambda)", polynomialAnswers: ["lambda^2+lambda-2", "(lambda+2)(lambda-1)"], values: "-2,1", valuesMath: "(-2,1)", valueAnswers: ["(-2,1)", "-2 and 1"], vector1: "(1,0)", vector1Math: "(1,0)", vector1Answers: ["[1,0]"], vector2: "(1,1)", vector2Math: "(1,1)", vector2Answers: ["[1,1]"], solution: "c1e^(-2t)(1,0)+c2e^t(1,1)", solutionMath: "c_1e^{-2t}(1,0)+c_2e^t(1,1)", solutionAnswers: ["c1 e^(-2t)(1,0)+c2 e^t(1,1)"] }),
      problem({ id: "eigen-symmetric-24", prompt: "Analyze <math>A=[[3,1],[1,3]]</math>.", matrixMath: "[[3,1],[1,3]]", polynomial: "lambda^2-6lambda+8", polynomialMath: "\\lambda^2-6\\lambda+8", polynomialAnswers: ["(lambda-2)(lambda-4)"], values: "2,4", valuesMath: "(2,4)", valueAnswers: ["(2,4)", "2 and 4"], vector1: "(1,-1)", vector1Math: "(1,-1)", vector1Answers: ["[1,-1]"], vector2: "(1,1)", vector2Math: "(1,1)", vector2Answers: ["[1,1]"], solution: "c1e^(2t)(1,-1)+c2e^(4t)(1,1)", solutionMath: "c_1e^{2t}(1,-1)+c_2e^{4t}(1,1)", solutionAnswers: ["c1 e^(2t)(1,-1)+c2 e^(4t)(1,1)"] }),
      problem({ id: "eigen-diagonal-05", prompt: "Analyze <math>A=[[0,0],[0,5]]</math>.", matrixMath: "[[0,0],[0,5]]", polynomial: "(-lambda)(5-lambda)", polynomialMath: "(-\\lambda)(5-\\lambda)", polynomialAnswers: ["lambda^2-5lambda", "lambda(lambda-5)"], values: "0,5", valuesMath: "(0,5)", valueAnswers: ["(0,5)", "0 and 5"], vector1: "(1,0)", vector1Math: "(1,0)", vector1Answers: ["[1,0]"], vector2: "(0,1)", vector2Math: "(0,1)", vector2Answers: ["[0,1]"], solution: "c1(1,0)+c2e^(5t)(0,1)", solutionMath: "c_1(1,0)+c_2e^{5t}(0,1)", solutionAnswers: ["c1e^(0t)(1,0)+c2e^(5t)(0,1)"] })
    ]
  };
})();
