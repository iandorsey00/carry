// Carry How This Works content. Loaded before app.js by index.html.
// Keep authored lesson overview copy here so app.js can focus on rendering and interaction.
(function registerCarryHowThisWorksConceptNoticeItems() {
  window.CarryHowThisWorks = window.CarryHowThisWorks || {};
  const api = window.CarryHowThisWorks;

  function conceptNoticeItems(workspace) {
      const specificNotices = {
        "arithmetic.number-sense": [
          "Compare numbers from left to right, starting with the largest place.",
          "Use distance from friendly numbers when a question asks for closest.",
          "A pattern question depends on the repeated change between terms."
        ],
        "arithmetic.integers": [
          "On the number line, greater means farther right.",
          "Adding a positive moves right; subtracting a positive moves left.",
          "For multiplication and division, decide the sign before doing the arithmetic."
        ],
        "arithmetic.fractions": [
          "The denominator names the size of the parts.",
          "Equivalent fractions multiply or divide top and bottom by the same value.",
          "When numerators match, the smaller denominator gives larger pieces."
        ],
        "arithmetic.decimals": [
          "Compare decimals by lining up place values.",
          "Adding a trailing zero can make comparison easier without changing the value.",
          "Tenths and hundredths are place-value names, not separate number systems."
        ],
        "arithmetic.percents": [
          "Percent means out of 100.",
          "Use familiar anchors: 50% is half, 25% is a quarter, 10% is one tenth.",
          "Move between percent, decimal, and fraction forms when one form is easier."
        ],
        "arithmetic.ratios": [
          "A ratio compares two quantities in order.",
          "Equivalent ratios scale both parts by the same factor.",
          "Simplifying a ratio is like simplifying a fraction with two named parts."
        ],
        "arithmetic.factors-multiples-primes": [
          "Factors divide evenly into a number.",
          "Multiples are numbers you land on by repeated multiplication.",
          "Prime means exactly two positive factors: 1 and itself."
        ],
        "arithmetic.order-of-operations": [
          "Parentheses are handled before the rest of the expression.",
          "Multiplication and division come before addition and subtraction.",
          "Operations with the same priority are handled from left to right."
        ],
        "arithmetic.word-problems": [
          "Name what the question asks for before calculating.",
          "Look for action words and structure: more, left, equal groups, each.",
          "Check that the final number has the right unit."
        ],
        "arithmetic.mixed-review": [
          "First decide which operation or method fits the question.",
          "Estimate before exact calculation when numbers are large.",
          "Use the estimate to reject answers that are far too small or too large."
        ],
        "prealgebra.integers": [
          "Separate sign from size: first decide positive or negative, then calculate.",
          "Same signs in multiplication or division give a positive result.",
          "Different signs in multiplication or division give a negative result."
        ],
        "prealgebra.exponents": [
          "The base is the repeated factor.",
          "The exponent counts how many factors there are.",
          "Evaluate powers before ordinary multiplication, addition, or subtraction."
        ],
        "prealgebra.coordinate-plane": [
          "Coordinates are written in x, y order.",
          "The x-coordinate moves horizontally before the y-coordinate moves vertically.",
          "Quadrants are determined by the signs of x and y."
        ],
        "algebra.rational-expressions": [
          "A rational expression is an algebraic fraction.",
          "Factor before canceling so you only cancel common factors.",
          "Excluded values come from the original denominator, even after simplifying."
        ],
        "geometry.coordinate": [
          "Horizontal distance compares x-values.",
          "Vertical distance compares y-values.",
          "Midpoints average the x-values and average the y-values separately."
        ],
        "arithmetic.estimation": [
          "Round each number to a friendly value before combining.",
          "An estimate stands in for the exact answer, so expect close, not equal.",
          "If rounding pushed both numbers up, the true answer sits below the estimate."
        ],
        "geometry.angles": [
          "Two adjacent angles on a straight line add to 180 degrees, so subtract the known angle from 180.",
          "A right angle is exactly 90 degrees; acute is less, obtuse is more.",
          "To classify an angle, compare it with 90 and 180 before naming it."
        ],
        "geometry.area-volume": [
          "Area multiplies two lengths; volume multiplies three.",
          "A triangle's area is half of base times height, so do not skip the half.",
          "If a volume answer only used two numbers, a dimension is missing."
        ],
        "geometry.circles": [
          "The diameter is twice the radius, so converting is doubling or halving.",
          "With C = πd, a diameter of 6 gives circumference 6π; keep the exact form unless asked for a decimal.",
          "Check whether the question gives the radius or the diameter before calculating."
        ],
        "geometry.proof-basics": [
          "Given facts are starting points and need no justification.",
          "Every other statement should name its reason: a definition, a given, or a theorem.",
          "The transitive property chains equalities: if AB = CD and CD = EF, then AB = EF."
        ],
        "geometry.triangles": [
          "The three interior angles add to 180 degrees, so two known angles determine the third.",
          "Triangle names describe sides: equilateral means three equal sides, isosceles means two.",
          "If proposed angles do not add to exactly 180, the triangle is impossible."
        ],
        "linear-algebra.vectors": [
          "Add vectors component by component: (2, 3) + (4, 1) = (6, 4).",
          "A scalar multiplies every component, and a negative scalar also reverses direction.",
          "Length uses the Pythagorean theorem, so (3, 4) has length 5."
        ],
        "linear-algebra.matrices": [
          "Size reads rows by columns, so 2 x 3 means 2 rows and 3 columns.",
          "Entry positions read row first: row 2, column 1 sits in the second row.",
          "The identity matrix leaves every vector unchanged."
        ],
        "linear-algebra.transformations": [
          "Read the rule coordinate by coordinate: (2x, 2y) doubles both, so lengths double.",
          "A sign flip on one coordinate is a reflection: (-x, y) reflects across the y-axis.",
          "Where (1, 0) and (0, 1) land determines the whole transformation."
        ],
        "linear-algebra.determinants": [
          "For [[a, b], [c, d]], the determinant is ad - bc; keep the order straight.",
          "For a diagonal matrix, the determinant is the product of the diagonal entries.",
          "Determinant zero means the matrix flattens space and has no inverse."
        ],
        "linear-algebra.eigenvalues": [
          "In A v = λ v, the eigenvalue λ is the scale factor on the eigenvector v.",
          "For a diagonal matrix, each axis direction is an eigenvector with the diagonal entry as its eigenvalue.",
          "If applying the matrix changes a vector's direction, that vector is not an eigenvector."
        ],
        "linear-algebra.vector-spaces": [
          "Span asks what is reachable using linear combinations of the given vectors.",
          "(1, 0) and (0, 1) span the plane, so a standard basis for R^2 has 2 vectors.",
          "If one vector is a multiple of another, the pair is dependent and adds no new direction."
        ],
        "precalculus.functions": [
          "Evaluate f(3) by replacing every x with 3, then simplifying.",
          "In a point (input, output), the input comes first: (4, 9) says the output at 4 is 9.",
          "Each input gets exactly one output; the vertical line test checks this on a graph."
        ],
        "precalculus.transformations": [
          "Adding outside the function moves the graph up or down: x^2 + 4 shifts up 4.",
          "Changes inside the input shift sideways and read backwards: (x - 5)^2 shifts right 5.",
          "Vertex form shows the result directly: <math>y = (x - 2)^2 + 3</math> has vertex (2, 3)."
        ],
        "precalculus.polynomial-rational": [
          "The degree is the highest power of x with a nonzero coefficient, wherever it appears.",
          "A factor like x - 2 equals zero when x = 2.",
          "Excluded values of a rational function come from making the denominator zero."
        ],
        "precalculus.exponential-log": [
          "An exponent counts factors: 2^3 means three factors of 2.",
          "A logarithm asks for the exponent: log base 2 of 8 is 3 because 2^3 = 8.",
          "To solve 2^x = 8, ask which exponent turns 2 into 8."
        ],
        "precalculus.sequences": [
          "Arithmetic sequences add the same difference; subtract neighboring terms to find it.",
          "Geometric sequences multiply by the same ratio; divide neighboring terms to find it.",
          "Before extending a sequence, decide whether neighbors differ by addition or multiplication."
        ],
        "precalculus.complex-numbers": [
          "In a + bi, a is the real part and b is the imaginary part.",
          "Everything follows from one rule: i^2 = -1.",
          "Add complex numbers by adding real parts and imaginary parts separately."
        ],
        "trigonometry.unit-circle": [
          "A unit-circle point is (cos θ, sin θ): x is cosine, y is sine.",
          "Walk the quarter turns: 0 is at (1, 0), π/2 at (0, 1), π at (-1, 0).",
          "Signs follow the quadrant, which is why cos π is negative."
        ],
        "trigonometry.right-triangles": [
          "Label the sides from the angle's point of view: opposite, adjacent, hypotenuse.",
          "Sine is opposite over hypotenuse, cosine is adjacent over hypotenuse, tangent is opposite over adjacent.",
          "The hypotenuse is the longest side, so sine and cosine never exceed 1."
        ],
        "trigonometry.graphs": [
          "Amplitude is the number in front: <math>y = 3 \\sin x</math> has amplitude 3.",
          "Plain <math>\\sin x</math> and <math>\\cos x</math> repeat every <math>2\\pi</math>.",
          "The waves start differently: <math>\\sin 0 = 0</math> while <math>\\cos 0 = 1</math>."
        ],
        "trigonometry.identities": [
          "<math>\\sin^2 x + \\cos^2 x = 1</math> lets you trade <math>\\sin^2 x</math> for <math>1 - \\cos^2 x</math> and back.",
          "<math>\\tan x</math> is <math>\\sin x</math> over <math>\\cos x</math>; <math>\\cot x</math> flips it to <math>\\cos x</math> over <math>\\sin x</math>.",
          "Dividing the Pythagorean identity by <math>\\cos^2 x</math> gives <math>1 + \\tan^2 x = \\sec^2 x</math>."
        ],
        "trigonometry.inverse": [
          "Inverse trig functions return an angle, not a ratio.",
          "Read arcsin 0 as a question: which angle has sine 0?",
          "Principal ranges keep the answer unique, so arctan 1 is 45 degrees."
        ],
        "topology.open-sets": [
          "Open is a chosen status: the topology is exactly the list of sets that count as open.",
          "In the usual real line, (0, 1) is open but [0, 1] is not, because the endpoints have no room to move.",
          "The empty set and the whole space are open in every topology."
        ],
        "topology.closed-sets": [
          "Closed is a statement about the complement: a set is closed when its outside is open.",
          "Closed is not the opposite of open; a set can be both at once, like the whole space.",
          "In the usual real line, [0, 1] is closed because everything outside it is open."
        ],
        "topology.bases": [
          "A basis is a stock of building-block open sets; every open set is a union of them.",
          "In the usual real line, the open intervals form the standard basis.",
          "To check openness with a basis, look for a basis element around each point of the set."
        ],
        "topology.metric-spaces": [
          "A metric must be nonnegative, symmetric, and obey the triangle inequality d(x, z) <= d(x, y) + d(y, z).",
          "Balls of points within a chosen radius become the basic open neighborhoods.",
          "The metric supplies distances; the topology it creates only remembers which sets are open."
        ],
        "topology.continuity": [
          "The topological test runs backwards: check preimages, not images.",
          "A function is continuous when the preimage of every open set is open.",
          "No formulas, slopes, or distances are needed, only the open-set structure."
        ],
        "topology.compactness": [
          "Compactness tests covers: every open cover must admit a finite subcover.",
          "In the real line, Heine-Borel makes the test concrete: compact means closed and bounded.",
          "(0, 1) is bounded but not closed, so it is not compact; [0, 1] is both, so it is."
        ],
        "topology.connectedness": [
          "Connected means the space cannot be split into two nonempty separated open pieces.",
          "Intervals are the model connected subsets of the real line.",
          "A set like {0} union {1} splits into separated pieces, so it is not connected."
        ],
        "topology.homeomorphisms": [
          "A homeomorphism needs three things: a bijection, continuity, and a continuous inverse.",
          "Homeomorphic spaces share every topological property, such as connectedness and compactness.",
          "Stretching and bending are allowed; tearing or gluing would break continuity somewhere."
        ],
        "physics.units": [
          "Every physics answer needs a number and a unit.",
          "Units mirror the formula: speed is distance over time, so its unit is m/s.",
          "Newtons measure force and joules measure energy; matching unit to quantity catches errors."
        ],
        "physics.scalars-vectors": [
          "Ask one question: does the quantity carry a direction?",
          "Speed is a scalar; velocity is speed plus a direction, so it is a vector.",
          "A value with a direction attached, like 10 N east, is a vector."
        ],
        "physics.graphs": [
          "Slope and area answer different questions: on a position-time graph, slope is velocity.",
          "On a velocity-time graph, the area under the curve is displacement.",
          "A horizontal position-time line means the position is not changing, so the object is at rest."
        ],
        "physics.kinematics": [
          "Average speed is distance divided by time: 20 m in 4 s gives 5 m/s.",
          "Acceleration is about changing velocity, not about moving fast.",
          "Constant velocity means zero acceleration."
        ],
        "physics.forces": [
          "F = ma links force, mass, and acceleration; report force in newtons.",
          "Balanced forces cancel to zero net force, so the motion does not change.",
          "Friction acts against the direction of motion."
        ],
        "physics.energy": [
          "Kinetic energy tracks motion; gravitational potential energy tracks height.",
          "Raising an object stores more potential energy.",
          "Work is a transfer of energy, not a separate substance."
        ],
        "physics.momentum": [
          "Momentum is p = mv, so 3 kg at 4 m/s carries 12 units of momentum.",
          "Mass and velocity matter equally: doubling either doubles momentum.",
          "In an isolated collision, total momentum before equals total momentum after."
        ],
        "physics.oscillations": [
          "Period is seconds per cycle; frequency is cycles per second.",
          "The two are reciprocals: T = 1/f.",
          "If the period doubles, the frequency halves."
        ],
        "physics.waves": [
          "Wave speed is <math>v = f \\lambda</math>: frequency times wavelength.",
          "Check the units: Hz times meters gives m/s.",
          "A wave carries energy forward while the medium mostly stays in place."
        ],
        "physics.sound": [
          "Sound is mechanical: it needs a medium and cannot cross a vacuum.",
          "Pitch follows frequency: higher frequency means higher pitch.",
          "In air, sound is longitudinal; the air moves back and forth along the travel direction."
        ],
        "physics.charge-fields": [
          "Like charges repel; opposite charges attract.",
          "Decide attract or repel from the signs before calculating anything.",
          "The electric field is force per unit charge, pointing the way a positive test charge would be pushed."
        ],
        "physics.circuits": [
          "Ohm's law is V = IR: 2 A through 5 ohms needs 10 V.",
          "Current is flowing charge; voltage is the energy carried per unit of that charge.",
          "In a series circuit, the same current passes through every component."
        ],
        "physics.magnetism": [
          "Magnetic poles pair up like charges: like poles repel, opposite poles attract.",
          "Moving charges create magnetic fields; stationary charges do not.",
          "Direction matters: magnetic forces depend on how the motion and the field line up."
        ],
        "physics.temperature-heat": [
          "Temperature describes a state; heat describes a transfer.",
          "Heat flows on its own from hotter to colder, never the reverse.",
          "Temperature tracks the average kinetic energy of the particles."
        ],
        "physics.ideal-gas": [
          "Read PV = nRT letter by letter: P pressure, V volume, n amount, T temperature.",
          "Gas-law temperatures must be absolute, so use kelvin, not celsius.",
          "R is the constant that makes the units agree."
        ],
        "physics.quantum": [
          "Quantum effects appear at small scales, where classical rules stop being enough.",
          "Energy comes in discrete packets, so some in-between values simply do not occur.",
          "A photon is one quantum of light."
        ],
        "physics.relativity": [
          "Relativity matters near light speed or in strong gravity, not in everyday motion.",
          "Every inertial observer measures the same vacuum light speed c.",
          "<math>E = mc^2</math> ties mass and energy together, with c the speed of light."
        ]
      };
      if (specificNotices[workspace.id]) return specificNotices[workspace.id];
    
      if (workspace.topic === "Arithmetic" && workspace.id === "arithmetic.place-value") {
        return [
          "Read the digit and its column together.",
          "A digit in the hundreds column counts hundreds, not ones.",
          "Expanded form is a quick way to check the value of each digit."
        ];
      }
    
      if (workspace.id === "prealgebra.expressions") {
        return [
          "Like terms have the same variable part.",
          "When you combine like terms, add the coefficients and keep the variable part.",
          "Constants do not combine with variable terms."
        ];
      }
    
      if (workspace.id === "algebra.polynomials") {
        return [
          "Polynomial terms are like terms only when the variable and exponent match.",
          "Combine coefficients, not exponents.",
          "A leftover unlike term stays in the expression."
        ];
      }
    
      if (workspace.topic === "Graph Theory") {
        return [
          "Count edges when a question asks for path length.",
          "Count edges touching one vertex when a question asks for degree.",
          "Connectedness asks whether a path exists, not whether the path is short."
        ];
      }
    
      if (workspace.topic === "Probability") {
        return [
          "Name the sample space before counting.",
          "The denominator should match the outcomes still possible.",
          "Conditional information can shrink the sample space."
        ];
      }
    
      if (workspace.topic === "Statistics") {
        const statisticsNotices = {
          "statistics.data-summaries": [
            "First identify the variable and whether it is categorical or quantitative.",
            "Count observations before computing summaries.",
            "Keep units and context with every data summary."
          ],
          "statistics.center-spread": [
            "Mean uses every value, so outliers can pull it.",
            "Median uses ordered position, so it is more resistant.",
            "Spread is separate from center; two data sets can have the same center and different spread."
          ],
          "statistics.displays": [
            "Bar charts compare categories.",
            "Histograms show the shape of quantitative data.",
            "Scatterplots show relationships between two quantitative variables."
          ],
          "statistics.variance-standard-deviation": [
            "Deviations compare each value to the mean.",
            "Variance averages squared deviations.",
            "Standard deviation is in the original units, so it is usually easier to explain."
          ],
          "statistics.normal-distribution": [
            "Normal curves are symmetric around the mean.",
            "Standard deviation controls how wide the curve is.",
            "z-scores measure distance from the mean in standard deviations."
          ],
          "statistics.binomial-distribution": [
            "A binomial model counts successes.",
            "The number of trials is fixed before observing the data.",
            "The success probability stays the same for each trial."
          ],
          "statistics.correlation-regression": [
            "Correlation describes linear direction and strength.",
            "Regression gives a line for summarizing or predicting.",
            "Association alone does not prove cause."
          ],
          "statistics.confidence-intervals": [
            "An interval has a lower endpoint and an upper endpoint.",
            "The margin of error extends both directions from the estimate.",
            "Higher confidence usually means a wider interval."
          ],
          "statistics.sampling-inference": [
            "Samples describe observed data; populations are what you want to learn about.",
            "Random sampling reduces selection bias.",
            "Larger random samples usually make estimates more stable, but uncertainty never disappears completely."
          ]
        };
        return statisticsNotices[workspace.id] || [
          "Identify the data, the summary, and the context.",
          "Choose a display or statistic that matches the question.",
          "Remember that sample results still carry uncertainty."
        ];
      }
    
      if (String(workspace.id || "").startsWith("physics.")) {
        return [
          "Keep units upright and attached to the quantity.",
          "Use the diagram to identify what the symbols mean before calculating.",
          "Direction matters for vectors, forces, momentum, and fields."
        ];
      }
    
      if (workspace.topic === "Proofs") {
        return [
          "Separate the claim from the reason.",
          "Universal claims need all cases; existence claims need one working case.",
          "A counterexample must satisfy the setup and break the conclusion."
        ];
      }
    
      if (workspace.topic === "Set Theory") {
        return [
          "Membership is about one object.",
          "Subset is about every element of one set being inside another set.",
          "Union means either set; intersection means both sets."
        ];
      }
    
      if (workspace.topic === "Number Theory") {
        return [
          "Divisibility means no remainder.",
          "Modular arithmetic keeps the remainder and ignores completed groups.",
          "Congruent numbers have the same remainder in the chosen modulus."
        ];
      }
    
      if (workspace.topic === "Real Analysis") {
        return [
          "Definitions are the main object of study.",
          "Look for what happens arbitrarily close to a value.",
          "Examples test a definition; counterexamples find its boundary."
        ];
      }
    
      if (workspace.topic === "Complex Analysis") {
        return [
          "Keep real-variable intuition nearby, but do not assume it transfers unchanged.",
          "Watch whether a claim is local near one point or global on a region.",
          "Singularities are not just errors; they often carry the main information."
        ];
      }
    
      if (workspace.topic === "Topology") {
        return [
          "First identify the space, then the sets being treated as open.",
          "A topological statement often depends on the surrounding space.",
          "For yes-or-no questions, test the definition instead of relying on a picture."
        ];
      }
    
      if (workspace.topic === "Abstract Algebra") {
        return [
          "Identify the set and operation before checking a structure.",
          "A definition usually has several required rules.",
          "One failed rule is enough to reject the structure."
        ];
      }
    
      return api.conceptWhyItems?.(workspace) || [];
    }

  api.conceptNoticeItems = conceptNoticeItems;
})();
