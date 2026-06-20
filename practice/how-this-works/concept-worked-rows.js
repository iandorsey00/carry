// Carry How This Works content. Loaded before app.js by index.html.
// Keep authored lesson overview copy here so app.js can focus on rendering and interaction.
(function registerCarryHowThisWorksConceptWorkedExampleRows() {
  window.CarryHowThisWorks = window.CarryHowThisWorks || {};
  const api = window.CarryHowThisWorks;

  function conceptWorkedExampleRows(workspace) {
      const examples = {
        "arithmetic.number-sense": [
          { math: "409 < 490", note: "Hundreds match, so compare tens." },
          { math: "9 > 0", note: "The tens digit decides the larger number." }
        ],
        "arithmetic.estimation": [
          { math: "296 + 401", note: "Round before calculating." },
          { math: "300 + 400 = 700", note: "Use a nearby estimate." }
        ],
        "arithmetic.integers": [
          { math: "-3 + 8", note: "Start at -3 and move right 8." },
          { math: "-3 + 8 = 5", note: "The landing point is the sum." }
        ],
        "arithmetic.fractions": [
          { math: "\\frac{8}{12} = \\frac{8 ÷ 4}{12 ÷ 4}", note: "Divide top and bottom by 4." },
          { math: "\\frac{8}{12} = \\frac{2}{3}", note: "Write the simplified fraction." }
        ],
        "arithmetic.decimals": [
          { math: "0.6 = 0.60", note: "Use the same number of decimal places." },
          { math: "0.60 > 0.54", note: "Compare hundredths." }
        ],
        "arithmetic.percents": [
          { math: "25% = \\frac{1}{4}", note: "Rewrite the percent." },
          { math: "\\frac{1}{4} × 40 = 10", note: "Find one quarter." }
        ],
        "arithmetic.ratios": [
          { math: "10:15 = 2:3", note: "Divide both parts by 5." }
        ],
        "arithmetic.order-of-operations": [
          { math: "5 + 2 × 6 = 5 + 12", note: "Multiply first." },
          { math: "5 + 12 = 17", note: "Then add." }
        ],
        "arithmetic.mixed-review": [
          { math: "98 + 203", note: "Estimate first." },
          { math: "100 + 200 = 300", note: "Check the size." },
          { math: "98 + 203 = 301", note: "Now calculate exactly." }
        ],
        "prealgebra.integers": [
          { math: "-3 × -5", note: "Start with the sign." },
          { math: "-3 × -5 = +(3 × 5)", note: "Same signs make a positive product." },
          { math: "+(3 × 5) = 15", note: "Multiply the sizes." }
        ],
        "prealgebra.expressions": [
          { math: "5a + 3 + 2a = 5a + 2a + 3", note: "Move like terms together." },
          { math: "5a + 2a + 3 = (5 + 2)a + 3", note: "Add coefficients of a." },
          { math: "(5 + 2)a + 3 = 7a + 3", note: "Keep the constant term." }
        ],
        "prealgebra.exponents": [
          { math: "2^5 = 2 × 2 × 2 × 2 × 2", note: "An exponent counts equal factors." },
          { math: "2^5 = 32", note: "Multiply the factors." }
        ],
        "prealgebra.coordinate-plane": [
          { math: "(3, -2)", note: "Move 3 right from the origin." },
          { math: "y = -2", note: "Then move 2 down." }
        ],
        "algebra.polynomials": [
          { math: "2x^2 + 5x^2 - x = (2 + 5)x^2 - x", note: "Group terms with the same variable and exponent." },
          { math: "(2 + 5)x^2 - x = 7x^2 - x", note: "Combine the squared terms." }
        ],
        "algebra.rational-expressions": [
          { math: "\\frac{12x}{18} = \\frac{12 ÷ 6}{18 ÷ 6}x", note: "Reduce the numerical factor." },
          { math: "\\frac{12x}{18} = \\frac{2x}{3}", note: "Keep the variable factor." }
        ],
        "geometry.coordinate": [
          { math: "(2, 3) \\to (7, 3)", note: "The y-values match, so the movement is horizontal." },
          { math: "7 - 2 = 5", note: "Subtract the x-values for horizontal distance." }
        ],
        "trigonometry.right-triangles": [
          { math: "\\sin\\,\\theta = \\frac{\\text{opposite}}{\\text{hypotenuse}}", note: "Choose the side across from the angle." },
          { math: "\\sin\\,\\theta = \\frac{6}{10}", note: "Substitute the side lengths." },
          { math: "\\frac{6}{10} = \\frac{3}{5}", note: "Simplify if needed." }
        ],
        "trigonometry.identities": [
          { math: "\\sin^2 x + \\cos^2 x = 1", note: "Start with the Pythagorean identity." },
          { math: "\\frac{1}{4} + \\cos^2 x = 1", note: "Substitute the known value." },
          { math: "\\cos^2 x = \\frac{3}{4}", note: "Subtract from 1." }
        ],
        "precalculus.sequences": [
          { math: "1, \\frac{1}{3}, \\frac{1}{9}", note: "Each term is multiplied by the same ratio." },
          { math: "\\frac{1}{9} × \\frac{1}{3} = \\frac{1}{27}", note: "Continue the pattern." }
        ],
        "calculus.limits": [
          { math: "x \\to 2", note: "Look near the input, not only at the point." },
          { math: "f(x) \\to 5", note: "The nearby outputs approach 5." }
        ],
        "differential-equations.slope-fields": [
          { math: "\\frac{dy}{dx} = x", note: "The slope depends on the x-position." },
          { math: "x = 2 \\Rightarrow \\frac{dy}{dx} = 2", note: "Each mark at x = 2 has slope 2." }
        ],
        "differential-equations.separable": [
          { math: "\\frac{dy}{dx} = 3xy", note: "Start with a separable equation." },
          { math: "\\frac{1}{y}\\,dy = 3x\\,dx", note: "Move y terms with dy and x terms with dx." },
          { math: "\\int \\frac{1}{y}\\,dy = \\int 3x\\,dx", note: "Integrate both sides." }
        ],
        "differential-equations.first-order-models": [
          { math: "\\frac{dP}{dt} = kP", note: "Growth rate is proportional to current amount." },
          { math: "\\frac{dP}{dt} = 0", note: "Zero derivative means equilibrium." }
        ],
        "differential-equations.second-order-models": [
          { math: "x'(t) = v(t)", note: "First derivative is velocity." },
          { math: "x''(t) = a(t)", note: "Second derivative is acceleration." },
          { math: "m x'' + kx = 0", note: "A basic spring model." }
        ],
        "probability.sample-spaces": [
          { math: "S = \\{H, T\\}", note: "List every possible coin-flip outcome." },
          { math: "A = \\{H\\}", note: "An event is a subset of the sample space." }
        ],
        "probability.basic-probability": [
          { math: "P(A) = \\frac{\\text{favorable}}{\\text{total}}", note: "Use equally likely outcomes." },
          { math: "P(3) = \\frac{1}{6}", note: "One die face out of six." }
        ],
        "probability.counting": [
          { math: "3 \\times 2 = 6", note: "Multiply choices made in sequence." },
          { math: "\\text{color} \\times \\text{size}", note: "Each color pairs with each size." }
        ],
        "probability.conditional-probability": [
          { math: "P(A | B)", note: "Read as probability of A given B." },
          { math: "\\{2,4,6\\}", note: "Given even, only three die outcomes remain." }
        ],
        "probability.random-variables": [
          { math: "X(H) = 1", note: "Assign a number to heads." },
          { math: "X(T) = 0", note: "Assign a number to tails." },
          { math: "E[X] = \\frac{1}{2}", note: "Average the equally likely values." }
        ],
        "statistics.data-summaries": [
          { math: "4, 7, 9", note: "Each value is one observation." },
          { math: "n = 3", note: "Count observations before summarizing." }
        ],
        "statistics.center-spread": [
          { math: "\\bar{x} = \\frac{2 + 4 + 6}{3}", note: "Mean is total divided by count." },
          { math: "\\bar{x} = 4", note: "This mean is the balance point." }
        ],
        "statistics.displays": [
          { math: "\\text{category} \\to \\text{bar chart}", note: "Use bars for categories." },
          { math: "\\text{quantity} \\to \\text{histogram}", note: "Use intervals for quantitative distributions." }
        ],
        "statistics.variance-standard-deviation": [
          { math: "x - \\bar{x}", note: "A deviation compares a value to the mean." },
          { math: "\\sigma = \\sqrt{\\text{variance}}", note: "Standard deviation returns spread to original units." }
        ],
        "statistics.normal-distribution": [
          { math: "z = \\frac{x - \\mu}{\\sigma}", note: "A z-score measures distance from the mean." },
          { math: "z = 1", note: "One standard deviation above the mean." }
        ],
        "statistics.binomial-distribution": [
          { math: "X \\sim \\text{Binomial}(n,p)", note: "X counts successes in n trials." },
          { math: "n = 5,\\, p = \\frac{1}{2}", note: "Five fair coin flips make a binomial model." }
        ],
        "statistics.correlation-regression": [
          { math: "r > 0", note: "Positive correlation means values tend to increase together." },
          { math: "\\hat{y} = mx + b", note: "A regression line predicts y from x." }
        ],
        "statistics.confidence-intervals": [
          { math: "\\text{estimate} \\pm \\text{margin}", note: "Intervals extend around an estimate." },
          { math: "50 \\pm 3 = [47, 53]", note: "Subtract and add the margin of error." }
        ],
        "statistics.sampling-inference": [
          { math: "\\text{sample statistic} \\to \\text{population parameter}", note: "Use a sample to estimate a population value." },
          { math: "n \\uparrow \\Rightarrow \\text{more stable estimates}", note: "Larger random samples usually vary less." }
        ],
        "complex-analysis.complex-functions": [
          { math: "z = 2 + i", note: "Treat z as one complex input." },
          { math: "f(z) = z^2", note: "Apply the rule to that input." },
          { math: "f(i) = i^2 = -1", note: "Use the defining property of i." }
        ],
        "complex-analysis.analytic-functions": [
          { math: "f\\,\\text{analytic on}\\,U", note: "The derivative exists throughout an open region." },
          { math: "U\\,\\text{open}", note: "One isolated differentiable point is not enough." }
        ],
        "complex-analysis.contour-integrals": [
          { math: "C:\\,\\text{closed path}", note: "The contour is the curve being followed." },
          { math: "\\oint_C f(z)\\,dz", note: "The small circle means the path closes up." }
        ],
        "complex-analysis.power-series": [
          { math: "\\sum_{n=0}^{\\infty} a_n(z-a)^n", note: "The powers are measured from the center a." },
          { math: "|z-a| < R", note: "The radius of convergence describes where the series works." }
        ],
        "complex-analysis.residues": [
          { math: "f(z)=\\frac{1}{z-a}", note: "This has a simple pole at a." },
          { math: "\\operatorname{Res}(f,a)=1", note: "The residue is the coefficient of 1/(z-a)." }
        ],
        "real-analysis.sequences": [
          { math: "\\frac{3}{n} \\to 0", note: "The denominator grows without bound." }
        ],
        "topology.open-sets": [
          { math: "(0,1)\\,\\text{open in}\\,\\mathbb{R}", note: "Each point has room on both sides." },
          { math: "x \\in U \\Rightarrow (x-\\epsilon,x+\\epsilon) \\subseteq U", note: "A small neighborhood stays inside U." }
        ],
        "topology.closed-sets": [
          { math: "F\\,\\text{closed} \\iff X \\setminus F\\,\\text{open}", note: "Closed is defined by the complement." },
          { math: "[0,1]\\,\\text{closed in}\\,\\mathbb{R}", note: "The outside of the interval is open." }
        ],
        "topology.metric-spaces": [
          { math: "d(x,y) \\ge 0", note: "Distances are never negative." },
          { math: "d(x,z) \\le d(x,y)+d(y,z)", note: "The triangle inequality controls detours." }
        ],
        "topology.bases": [
          { math: "U = B_1 \\cup B_2", note: "Open sets can be built from basis pieces." },
          { math: "B_i\\,\\text{basic open}", note: "Basis elements are local building blocks." }
        ],
        "topology.continuity": [
          { math: "U\\,\\text{open in}\\,Y", note: "Start with an open set in the output space." },
          { math: "f^{-1}(U)\\,\\text{open in}\\,X", note: "Continuity asks for an open preimage." }
        ],
        "topology.compactness": [
          { math: "\\text{open cover} \\Rightarrow \\text{finite subcover}", note: "Compactness lets finitely many open sets still cover the space." },
          { math: "[0,1]\\,\\text{compact in}\\,\\mathbb{R}", note: "In the real line, closed and bounded intervals are compact." }
        ],
        "topology.connectedness": [
          { math: "[0,1]\\,\\text{connected}", note: "An interval has no gap that splits it." },
          { math: "\\{0\\} \\cup \\{1\\}\\,\\text{not connected}", note: "Two separated points make two pieces." }
        ],
        "topology.homeomorphisms": [
          { math: "f:X \\to Y", note: "A homeomorphism pairs the spaces point by point." },
          { math: "f\\,\\text{and}\\,f^{-1}\\,\\text{continuous}", note: "Both directions preserve the topology." }
        ],
        "physics.units": [
          { math: "\\text{speed} = \\frac{20\\,\\text{m}}{4\\,\\text{s}}", note: "Divide distance by time." },
          { math: "\\text{speed} = 5\\,\\frac{\\text{m}}{\\text{s}}", note: "Keep the unit with the number." }
        ],
        "physics.kinematics": [
          { math: "v = \\frac{\\Delta x}{\\Delta t}", note: "Velocity compares position change to time." },
          { math: "v = \\frac{20\\,\\text{m}}{4\\,\\text{s}} = 5\\,\\frac{\\text{m}}{\\text{s}}", note: "Substitute the measured values." }
        ],
        "physics.forces": [
          { math: "F = ma", note: "Use Newton's second law." },
          { math: "F = 2\\,\\text{kg} \\cdot 3\\,\\frac{\\text{m}}{\\text{s}^2}", note: "Substitute mass and acceleration." },
          { math: "F = 6\\,\\text{N}", note: "Force is measured in newtons." }
        ],
        "physics.momentum": [
          { math: "p = mv", note: "Momentum combines mass and velocity." },
          { math: "p = 3\\,\\text{kg} \\cdot 4\\,\\frac{\\text{m}}{\\text{s}}", note: "Substitute the values." },
          { math: "p = 12\\,\\text{kg}\\,\\frac{\\text{m}}{\\text{s}}", note: "Keep direction if velocity has one." }
        ],
        "physics.waves": [
          { math: "v = f\\lambda", note: "Wave speed equals frequency times wavelength." },
          { math: "v = 2\\,\\text{Hz} \\cdot 3\\,\\text{m}", note: "Substitute the values." },
          { math: "v = 6\\,\\frac{\\text{m}}{\\text{s}}", note: "The wave moves six meters each second." }
        ],
        "physics.circuits": [
          { math: "V = IR", note: "Use Ohm's law." },
          { math: "V = 2\\,\\text{A} \\cdot 5\\,\\text{Ω}", note: "Substitute current and resistance." },
          { math: "V = 10\\,\\text{V}", note: "Voltage is measured in volts." }
        ],
        "physics.ideal-gas": [
          { math: "PV = nRT", note: "Pressure, volume, amount, and temperature move together." },
          { math: "T = \\text{kelvin}", note: "Use an absolute temperature scale." }
        ],
        "physics.relativity": [
          { math: "E = mc^2", note: "Mass and energy are connected." },
          { math: "c = \\text{speed of light}", note: "Relativity becomes important near this speed." }
        ]
      };
    
      return examples[workspace.id] || null;
    }

  api.conceptWorkedExampleRows = conceptWorkedExampleRows;
})();
