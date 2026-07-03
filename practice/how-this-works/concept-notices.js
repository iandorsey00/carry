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
        ],
        "number-theory.divisibility": [
          "Divides means fits evenly: 4 divides 20 because 20 is 4 × 5 with nothing left over.",
          "The vertical bar is shorthand: <math>3 | 18</math> reads as 3 divides 18.",
          "To test divisibility, do the division and check whether the remainder is 0."
        ],
        "number-theory.primes": [
          "Prime means exactly two positive factors: 1 and the number itself.",
          "21 is 3 × 7, so it is composite; 17 has no such split, so it is prime.",
          "A factor tree ends in primes: 12 breaks into 2 × 2 × 3."
        ],
        "number-theory.gcd-lcm": [
          "GCD looks down at shared factors; LCM looks up at shared multiples.",
          "gcd(12, 18) is 6, the largest number that divides both.",
          "lcm(4, 6) is 12, the first number that both counts reach."
        ],
        "number-theory.euclidean-algorithm": [
          "Each step divides and keeps the remainder: 18 = 12 × 1 + 6.",
          "Then the pair shrinks: (18, 12) becomes (12, 6).",
          "When the remainder reaches 0, the last nonzero remainder is the GCD."
        ],
        "number-theory.modular-arithmetic": [
          "mod n asks one question: what is left after dividing by n? So 14 mod 5 is 4.",
          "A clock runs mod 12: 10 + 5 lands on 3.",
          "Numbers that differ by a multiple of n count as the same, so 9 and 2 match mod 7."
        ],
        "number-theory.congruences": [
          "<math>a ≡ b mod n</math> says a and b leave the same remainder when divided by n.",
          "Same remainder is the practical test: 17 and 2 both leave 2 when divided by 5.",
          "Equivalently, n divides the difference: 5 divides 17 - 2."
        ],
        "proofs.logic": [
          "An implication has two parts: in if P then Q, P is the hypothesis and Q is the conclusion.",
          "Knowing if P then Q and knowing P is true lets you conclude Q.",
          "It also runs backwards: if the conclusion is false, the hypothesis must be false too."
        ],
        "proofs.quantifiers": [
          "For all claims cover every case; there exists claims need only one success.",
          "One counterexample sinks a for all claim.",
          "One working example proves a there exists claim."
        ],
        "proofs.counterexamples": [
          "A counterexample is one concrete case where the claim fails.",
          "Every prime is odd falls to a single number: 2 is prime and even.",
          "Make counterexamples specific and easy to check, like a 2-by-3 rectangle that is not a square."
        ],
        "proofs.contradiction": [
          "Start by assuming the opposite of what you want to prove.",
          "Push that assumption until it produces something impossible.",
          "The impossibility means the assumption was wrong, so the original claim is true."
        ],
        "proofs.induction": [
          "Induction is a ladder: the base case is the first rung.",
          "The inductive step shows each rung leads to the next: case k forces case k + 1.",
          "Base case plus inductive step together cover every case from the base onward."
        ],
        "proofs.construction": [
          "To prove something exists, build one concrete example.",
          "For an even number greater than 10, the number 12 settles it.",
          "Building is only half the job: check that the example meets every required condition."
        ],
        "real-analysis.limits": [
          "A limit describes where the outputs are heading, not what happens at the point itself.",
          "As x approaches 3, the outputs of 2x crowd toward 6.",
          "Epsilon sets a tolerance on outputs; delta answers with a tolerance on inputs."
        ],
        "real-analysis.sequences": [
          "Convergence is about the tail: where the terms eventually settle, not how they start.",
          "1/n converges to 0; the terms get as close to 0 as you like and stay there.",
          "1, -1, 1, -1 never settles, so it has no limit; a constant sequence converges immediately."
        ],
        "real-analysis.continuity": [
          "Continuity at a point is a match: the limit of the outputs equals the actual value f(a).",
          "A hole, a jump, or a vertical blow-up each break that match in a different way.",
          "Simple pieces like x + 1 are continuous everywhere, so checks focus on the risky points."
        ],
        "real-analysis.differentiation": [
          "Differentiable means the graph has one well-defined slope at that point.",
          "A corner defeats it: <math>|x|</math> is continuous at 0 but turns too sharply to have a slope there.",
          "Differentiability is the stronger property: it implies continuity, never the reverse."
        ],
        "real-analysis.integration": [
          "Riemann integration approximates area with rectangles built on a partition.",
          "Finer partitions give better approximations; the integral is the value they settle on.",
          "Sanity-check with simple shapes: a constant 3 over [0, 2] encloses area 6."
        ],
        "real-analysis.sets": [
          "Brackets report endpoints: [2, 5] includes 2, while (2, 5) does not.",
          "Square means reached, round means approached but never touched.",
          "A closed interval has a smallest member; an open interval has none at all."
        ],
        "set-theory.sets-notation": [
          "A set asks one question about an object: in or out?",
          "<math>∈</math> claims membership and <math>∉</math> denies it.",
          "Braces list the members: in <math>A = {1, 2, 3}</math>, the number 2 is in and 7 is out."
        ],
        "set-theory.subsets": [
          "Subset is an every-element claim: each member of A must also belong to B.",
          "The empty set is a subset of every set, because no element exists to fail the test.",
          "Subsets double with each new element: 3 elements give <math>2^3 = 8</math> subsets."
        ],
        "set-theory.operations": [
          "Union means or: <math>A ∪ B</math> collects members of either set.",
          "Intersection means and: <math>A ∩ B</math> keeps only the shared members.",
          "With <math>A = {1, 2}</math> and <math>B = {2, 3}</math>, the union is {1, 2, 3} and the intersection is {2}."
        ],
        "set-theory.cartesian-relations": [
          "Ordered pairs care about position: (3, 5) is not (5, 3).",
          "The product <math>A × B</math> pairs every element of A with every element of B, so sizes multiply.",
          "A relation is a chosen set of pairs: the ones where some connection holds."
        ],
        "set-theory.functions": [
          "A function is a relation with a one-output rule: each input gets exactly one output.",
          "The domain is where inputs come from; the codomain is where outputs are allowed to land.",
          "<math>f(2) = 7</math> reads: input 2, output 7."
        ],
        "set-theory.countability": [
          "Countable means listable: the elements can be lined up first, second, third, and so on.",
          "The positive integers are the model countable set; they already form a list.",
          "The real numbers cannot be listed; some infinite sets are genuinely bigger than others."
        ],
        "abstract-algebra.groups": [
          "Four rules make a group: closed, associative, an identity, and an inverse for every element.",
          "The identity leaves things alone: 0 for addition, 1 for multiplication.",
          "Closure asks whether combining two members can ever land outside the set."
        ],
        "abstract-algebra.rings": [
          "A ring runs two operations at once: addition and multiplication.",
          "Addition behaves like a group; multiplication is tied to it by distribution.",
          "The integers are the model ring: adding, subtracting, and multiplying all stay inside."
        ],
        "abstract-algebra.fields": [
          "A field is a ring where division works too, by everything except 0.",
          "Every nonzero element needs a multiplicative inverse; 0 is excused.",
          "The integers fail the test: no integer multiplies with 2 to give 1."
        ],
        "abstract-algebra.homomorphisms": [
          "A homomorphism respects the operation: combine first or map first, the result agrees.",
          "For addition that reads <math>f(a + b) = f(a) + f(b)</math>.",
          "It does not need to be one-to-one; it only needs to preserve structure."
        ],
        "abstract-algebra.examples-counterexamples": [
          "To show a definition can be met, exhibit an example; to defeat a claim, exhibit one failure.",
          "Name the set and the operation before judging: positive integers under addition fail only because inverses are missing.",
          "To disprove every ring is a field, produce one ring that is not a field, like the integers."
        ],
        "calculus.limits": [
          "A limit reports the destination: as x approaches 2, x + 3 approaches 5.",
          "The input never has to arrive; the outputs just need a clear target.",
          "The two-sided limit exists only when both one-sided limits agree."
        ],
        "calculus.derivatives": [
          "The derivative is the slope: for a line like <math>y = 3x + 2</math> it is simply 3.",
          "Power rule: bring the exponent down and lower it by one, so <math>x^2</math> becomes <math>2x</math>.",
          "Constants ride along: the derivative of 5x is 5."
        ],
        "calculus.integrals": [
          "An antiderivative reverses a derivative and always carries the constant C.",
          "For simple regions the integral is just area: <math>y = 2</math> from 0 to 3 encloses a 2-by-3 rectangle, area 6.",
          "To check an antiderivative, differentiate it and watch the original return."
        ],
        "calculus.applications": [
          "The derivative of position is velocity: <math>s(t) = t^2</math> gives velocity 2t, which is 6 at t = 3.",
          "A steady rate times its duration accumulates a total: 5 per second for 4 seconds is 20.",
          "Where the derivative flips from positive to negative, the function peaks: a local maximum."
        ],
        "calculus.series": [
          "A series is a sequence with plus signs: the terms are added instead of listed.",
          "Watch the partial sums: 1 + 1/2 + 1/4 + ... climbs toward 2 without ever passing it.",
          "A geometric series settles only when the ratio stays strictly between -1 and 1."
        ],
        "complex-analysis.complex-functions": [
          "A complex input <math>z = x + iy</math> carries two real numbers at once.",
          "Evaluate by substitution and use <math>i^2 = -1</math>: squaring i gives -1.",
          "Reading parts is positional: in 3 + 2i, the real part is 3 and the imaginary part is 2."
        ],
        "complex-analysis.analytic-functions": [
          "Analytic is a neighborhood property: complex differentiable throughout an open region, not just at one point.",
          "Entire means analytic everywhere; <math>e^z</math> is the standard example.",
          "Watch for trouble spots: <math>1/z</math> is fine everywhere except <math>z = 0</math>."
        ],
        "complex-analysis.contour-integrals": [
          "A contour integral accumulates a function's values along a chosen path.",
          "A closed contour loops back to its start; the <math>\\oint</math> sign announces one.",
          "What sits inside a closed loop matters: singularities inside can change the integral."
        ],
        "complex-analysis.power-series": [
          "A power series is an infinite polynomial in powers of <math>z - a</math>, centered at a.",
          "It converges on a disk; the radius of convergence says how far from the center it works.",
          "Inside that disk the series is the function: evaluate, differentiate, or integrate it freely."
        ],
        "complex-analysis.residues": [
          "The residue is one number attached to each isolated singularity.",
          "In the Laurent series, it is the coefficient of <math>1/(z - a)</math>.",
          "The residue theorem turns a closed contour integral into a sum of residues inside the loop."
        ],
        "graph-theory.vertices-edges": [
          "Vertices are the dots and edges are the connections; node is another word for vertex.",
          "Count them separately: 5 vertices and 4 edges answer different questions.",
          "An edge always joins two vertices; it is the connection, not an object of its own."
        ],
        "graph-theory.degree": [
          "Degree is a local count: how many edges touch this one vertex.",
          "Degree 1 means a single connection; in a tree, such a vertex is a leaf.",
          "Changing a faraway part of the graph never changes this vertex's degree."
        ],
        "graph-theory.paths-cycles": [
          "Path length counts edges, not vertices.",
          "A cycle is a path that returns to its starting vertex.",
          "For shortest-path questions, count the edges along each candidate route."
        ],
        "graph-theory.trees": [
          "A tree needs both halves: connected, and no cycles.",
          "No cycles means no closed loop anywhere, so there is exactly one route between any two vertices.",
          "Break either condition and it is not a tree: a loop or a separated piece disqualifies it."
        ],
        "graph-theory.connectedness": [
          "Connected asks only whether a path exists, not whether it is short.",
          "A component is one piece: two separated pieces means two components.",
          "If no path joins A and B, they live in different components."
        ],
        "probability.sample-spaces": [
          "The sample space is the complete list of what can happen: 2 outcomes for a coin, 6 for a die.",
          "An outcome is a single result; an event is a set of outcomes, like rolling an even number.",
          "Write the list before assigning any probabilities."
        ],
        "probability.basic-probability": [
          "With equally likely outcomes, probability is favorable over total: one face out of six is 1/6.",
          "The scale runs from 0, impossible, to 1, certain.",
          "Fractions, decimals, and percents are the same probability in different clothes."
        ],
        "probability.counting": [
          "Choices in sequence multiply: 3 colors times 2 sizes is 6 shirts.",
          "Permutations count arrangements where order matters; combinations ignore order.",
          "Ask about order first: the answer decides which method applies."
        ],
        "probability.conditional-probability": [
          "<math>P(A | B)</math> reads: the probability of A once B is known.",
          "The condition shrinks the world: a die known to be even has only 3 outcomes left.",
          "Recompute inside the smaller world: given even, rolling a 6 is 1 out of 3."
        ],
        "probability.random-variables": [
          "A random variable numbers the outcomes: heads becomes 1, tails becomes 0.",
          "The distribution pairs each value with its probability.",
          "Expected value is the long-run average: the coin above averages 1/2."
        ],
        "differential-equations.slope-fields": [
          "The equation assigns a slope to each point; the field draws a small mark there.",
          "Read marks by substitution: for <math>dy/dx = y</math>, the slope at height 2 is 2.",
          "A solution curve threads through the marks, following them smoothly."
        ],
        "differential-equations.separable": [
          "Separable means sortable: all y factors to one side, all x factors to the other.",
          "In <math>dy/dx = 3xy</math>, divide by y so that <math>1/y</math> pairs with dy.",
          "Then integrate both sides and remember the constant C."
        ],
        "differential-equations.first-order-models": [
          "First-order means the first derivative drives the story.",
          "In <math>dP/dt = kP</math>, growth is proportional to the current amount: the exponential signature.",
          "Equilibrium is where the derivative is 0, so nothing changes at that instant."
        ],
        "differential-equations.second-order-models": [
          "Second-order equations use the second derivative; for position, that is acceleration.",
          "Springs and pendulums repeat, which is why oscillations are the classic examples.",
          "Check the highest derivative that appears to classify an equation's order."
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
