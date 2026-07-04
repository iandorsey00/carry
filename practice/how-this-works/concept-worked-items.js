// Carry How This Works content. Loaded before app.js by index.html.
// Keep authored lesson overview copy here so app.js can focus on rendering and interaction.
(function registerCarryHowThisWorksConceptWorkedExampleItems() {
  window.CarryHowThisWorks = window.CarryHowThisWorks || {};
  const api = window.CarryHowThisWorks;

  function conceptWorkedExampleItems(workspace) {
      const examples = {
        "arithmetic.place-value": [
          "Example: in 358, the 3 is in the hundreds place.",
          "Think: hundreds are groups of 100.",
          "So the 3 contributes 300."
        ],
        "arithmetic.number-sense": [
          "Example: to compare 572 and 527, compare from left to right.",
          "The hundreds match, but 7 tens is greater than 2 tens.",
          "So 572 is larger."
        ],
        "arithmetic.estimation": [
          "Example: 296 + 401 is about 300 + 400.",
          "Use the rounded numbers to check the size of the result.",
          "The estimate is about 700."
        ],
        "arithmetic.integers": [
          "Example: -4 + 9 means start at -4 and move 9 steps right.",
          "Moving right passes zero and lands at 5.",
          "So the result is positive."
        ],
        "arithmetic.fractions": [
          "Example: simplify 8/12 by dividing top and bottom by 4.",
          "The numerator becomes 2 and the denominator becomes 3.",
          "So the simplified fraction is 2/3."
        ],
        "arithmetic.decimals": [
          "Example: compare 0.6 and 0.54 by writing 0.6 as 0.60.",
          "Now compare hundredths: 60 hundredths is greater than 54 hundredths.",
          "So 0.6 is greater."
        ],
        "arithmetic.percents": [
          "Example: 25% of 40 is one quarter of 40.",
          "One quarter means divide by 4.",
          "So 25% of 40 is 10."
        ],
        "arithmetic.ratios": [
          "Example: simplify 10:15 by dividing both parts by 5.",
          "The first part becomes 2 and the second becomes 3.",
          "So the equivalent ratio is 2:3."
        ],
        "arithmetic.factors-multiples-primes": [
          "Example: 18 has factor pairs 1×18, 2×9, and 3×6.",
          "Because it has factor pairs besides 1 and itself, it is composite.",
          "A prime number would have exactly two positive factors."
        ],
        "arithmetic.order-of-operations": [
          "Example: in 5 + 2 × 6, multiply before adding.",
          "Compute 2 × 6 first to get 12.",
          "Then add 5."
        ],
        "arithmetic.word-problems": [
          "Example: 4 bags with 6 marbles each describes equal groups.",
          "Equal groups suggest multiplication.",
          "Compute bags times marbles per bag."
        ],
        "arithmetic.mixed-review": [
          "Example: before calculating 98 + 203, estimate 100 + 200.",
          "Then do the exact operation.",
          "Use the estimate to catch an unreasonable result."
        ],
        "prealgebra.integers": [
          "Example: -3 × -5 has two negative factors.",
          "Same signs make a positive product.",
          "Then multiply the sizes: 3 × 5."
        ],
        "prealgebra.expressions": [
          "Example: 4n + 2n + 7 has two like variable terms.",
          "Combine 4n and 2n to make 6n.",
          "Keep the constant term separate."
        ],
        "prealgebra.exponents": [
          "Example: 3^4 means four factors of 3.",
          "That is 3 × 3 × 3 × 3.",
          "The exponent counts factors, not how much to add."
        ],
        "prealgebra.coordinate-plane": [
          "Example: the point (2, -5) moves 2 right and 5 down from the origin.",
          "The first coordinate is horizontal.",
          "The second coordinate is vertical."
        ],
        "algebra.polynomials": [
          "Example: 2x^2 + 5x^2 - x has like squared terms.",
          "Combine only the x^2 terms.",
          "The x term stays separate."
        ],
        "algebra.rational-expressions": [
          "Example: simplify 12x/18 by dividing top and bottom by 6.",
          "The numerical fraction becomes 2/3.",
          "The x remains in the numerator."
        ],
        "geometry.angles": [
          "Example: two angles on a straight line add to 180 degrees.",
          "If one angle is 70 degrees, subtract 70 from 180.",
          "The missing angle is the amount needed to complete the straight line."
        ],
        "geometry.triangles": [
          "Example: triangle angles always add to 180 degrees.",
          "If two angles are 45 degrees and 80 degrees, add them first.",
          "Subtract that total from 180 for the third angle."
        ],
        "geometry.circles": [
          "Example: a radius of 5 gives a diameter of 10.",
          "The diameter is twice the radius.",
          "For exact circumference, keep π in the answer unless a decimal is requested."
        ],
        "geometry.area-volume": [
          "Example: a rectangle with sides 6 and 4 has area 6 × 4.",
          "Area counts square units.",
          "Volume would require a third dimension."
        ],
        "geometry.coordinate": [
          "Example: the horizontal distance from (2, 3) to (7, 3) uses x-values only.",
          "The y-values match, so subtract 2 from 7.",
          "That gives the horizontal length."
        ],
        "geometry.proof-basics": [
          "Example: if two quantities are both equal to 10, they are equal to each other.",
          "Name the reason, not just the result.",
          "A proof step should connect a fact to a valid rule."
        ],
        "trigonometry.unit-circle": [
          "Example: at angle 0, the unit-circle point is (1, 0).",
          "Cosine is the x-coordinate and sine is the y-coordinate.",
          "So read trig values from the point."
        ],
        "trigonometry.right-triangles": [
          "Example: if opposite is 6 and hypotenuse is 10, sine is 6/10.",
          "Simplify the ratio when possible.",
          "Choose the side names relative to the marked angle."
        ],
        "trigonometry.graphs": [
          "Example: <math>y = 2 \\sin x</math> has amplitude 2.",
          "Amplitude is the distance from the midline to a peak.",
          "Basic sine repeats after 2π."
        ],
        "trigonometry.identities": [
          "Example: if sin^2 x = 1/4, then cos^2 x is the rest of 1.",
          "Use sin^2 x + cos^2 x = 1.",
          "Subtract the known squared value from 1."
        ],
        "trigonometry.inverse": [
          "Example: arcsin asks which angle has a given sine value.",
          "Since sin 0 = 0, arcsin 0 returns 0 in the principal range.",
          "Always check which inverse trig function is being used."
        ],
        "precalculus.functions": [
          "Example: if g(x) = 3x - 2, then g(4) uses 4 wherever x appears.",
          "Compute 3 × 4 first.",
          "Then subtract 2."
        ],
        "precalculus.transformations": [
          "Example: y = (x - 4)^2 + 1 has vertex (4, 1).",
          "The number inside gives the horizontal shift.",
          "The number outside gives the vertical shift."
        ],
        "precalculus.polynomial-rational": [
          "Example: p(x) = 2x^5 + x has degree 5.",
          "The degree is the largest exponent with a nonzero coefficient.",
          "Lower powers do not change the degree."
        ],
        "precalculus.exponential-log": [
          "Example: log base 10 of 1000 asks what power of 10 gives 1000.",
          "10^3 = 1000.",
          "So the logarithm is the exponent."
        ],
        "precalculus.sequences": [
          "Example: 6, 10, 14, 18 has common difference 4.",
          "Subtract neighboring terms.",
          "Use the same difference to continue an arithmetic sequence."
        ],
        "precalculus.complex-numbers": [
          "Example: (2 + 3i) + (5 - i) combines real and imaginary parts separately.",
          "Real parts add with real parts.",
          "Imaginary parts add with imaginary parts."
        ],
        "calculus.limits": [
          "Example: as x approaches 4, x + 6 approaches 10.",
          "For simple continuous expressions, substitute the approached value.",
          "Limits describe nearby behavior."
        ],
        "calculus.derivatives": [
          "Example: the derivative of x^4 is 4x^3.",
          "Bring down the exponent as a coefficient.",
          "Reduce the exponent by 1."
        ],
        "calculus.integrals": [
          "Example: an antiderivative of 5 is 5x + C.",
          "Differentiate 5x + C to check.",
          "The constant C disappears under differentiation."
        ],
        "calculus.applications": [
          "Example: a constant rate of 3 units per second for 8 seconds accumulates 24 units.",
          "Rate times time gives total when the rate is constant.",
          "Derivatives describe rates; integrals accumulate rates."
        ],
        "calculus.series": [
          "Example: add the sequence 1, 1/3, 1/9, ... term by term.",
          "The partial sums run 1, then 4/3, then 13/9 — climbing but slowing.",
          "With ratio 1/3, the infinite sum settles at exactly 3/2."
        ],
        "linear-algebra.vectors": [
          "Example: (1, 4) + (6, -2) is found component by component.",
          "Add the first components together.",
          "Then add the second components together."
        ],
        "linear-algebra.matrices": [
          "Example: a matrix with 3 rows and 2 columns has size 3×2.",
          "Rows are counted first.",
          "Columns are counted second."
        ],
        "linear-algebra.transformations": [
          "Example: T(x, y) = (x, -y) reflects across the x-axis.",
          "The x-coordinate stays the same.",
          "The y-coordinate changes sign."
        ],
        "linear-algebra.determinants": [
          "Example: for [[3, 0], [0, 4]], the determinant is 3 × 4.",
          "Diagonal scaling multiplies area by the product of the scale factors.",
          "A zero scale factor would flatten area to zero."
        ],
        "linear-algebra.eigenvalues": [
          "Example: if Av = 5v, the vector keeps its direction and scales by 5.",
          "The scale factor is the eigenvalue.",
          "The direction v is the eigenvector direction."
        ],
        "linear-algebra.vector-spaces": [
          "Example: (1, 0) and (0, 1) can build any vector (a, b).",
          "Use a copies of the first and b copies of the second.",
          "That is why they span the plane."
        ],
        "proofs.logic": [
          "Example: in if R then S, R is the hypothesis and S is the conclusion.",
          "If R is true, the implication lets you conclude S.",
          "Do not reverse the direction unless another rule allows it."
        ],
        "proofs.quantifiers": [
          "Example: to disprove all birds can fly, one flightless bird would be enough.",
          "A universal statement fails when one case fails.",
          "An existence statement needs one successful case."
        ],
        "proofs.induction": [
          "Example: induction first proves the starting case.",
          "Then it proves that one case forces the next.",
          "Together those steps create a chain."
        ],
        "proofs.contradiction": [
          "Example: to prove a claim by contradiction, temporarily assume the claim is false.",
          "Then reason until that assumption creates an impossibility.",
          "The failed assumption supports the original claim."
        ],
        "proofs.construction": [
          "Example: to prove an even number greater than 20 exists, you can build one.",
          "After naming it, verify it is even and greater than 20.",
          "Construction proves existence by giving an object."
        ],
        "proofs.counterexamples": [
          "Example: the claim all odd numbers are prime fails at 9.",
          "9 is odd, but it is not prime.",
          "One specific failing case disproves a universal claim."
        ],
        "set-theory.sets-notation": [
          "Example: if B = {4, 5}, then 4 is an element of B.",
          "Membership asks whether the object appears in the set.",
          "Use braces to read the listed elements."
        ],
        "set-theory.subsets": [
          "Example: {2, 4} is a subset of {2, 3, 4}.",
          "Every element of the smaller set appears in the larger set.",
          "That is the subset test."
        ],
        "set-theory.operations": [
          "Example: {1, 3} ∩ {3, 5} keeps only the shared element.",
          "Intersection means in both sets.",
          "Union would keep everything from either set."
        ],
        "set-theory.cartesian-relations": [
          "Example: {1, 2} × {a, b} has four ordered pairs.",
          "Each element of the first set pairs with each element of the second.",
          "Order matters in ordered pairs."
        ],
        "set-theory.functions": [
          "Example: a map that sends 1 to 5 and 1 to 6 is not a function.",
          "One input cannot have two different outputs.",
          "The domain names the allowed inputs."
        ],
        "set-theory.countability": [
          "Example: {red, blue, green} is finite with three elements.",
          "A countable infinite set can be arranged in a list.",
          "Countability asks whether listing is possible."
        ],
        "number-theory.divisibility": [
          "Example: 5 divides 35 because 35 = 5 × 7.",
          "There is no remainder.",
          "Divisibility is exact division."
        ],
        "number-theory.primes": [
          "Example: 15 is composite because 15 = 3 × 5.",
          "Prime numbers have exactly two positive factors.",
          "Composite numbers have more."
        ],
        "number-theory.gcd-lcm": [
          "Example: gcd(8, 12) is 4.",
          "List shared factors and choose the largest.",
          "LCM instead asks for the first shared multiple."
        ],
        "number-theory.euclidean-algorithm": [
          "Example: 20 = 12 × 1 + 8 starts a GCD calculation.",
          "The next pair is the old divisor and the remainder.",
          "Continue until the remainder is zero."
        ],
        "number-theory.modular-arithmetic": [
          "Example: 16 mod 7 is 2 because 16 = 7 × 2 + 2.",
          "Modular arithmetic tracks remainders.",
          "Clock arithmetic is a familiar model."
        ],
        "number-theory.congruences": [
          "Example: 14 is congruent to 2 mod 6 because their difference is 12.",
          "12 is divisible by 6.",
          "Congruent numbers have the same remainder."
        ],
        "real-analysis.sets": [
          "Example: [1, 4) includes 1 but not 4.",
          "A square bracket includes the endpoint.",
          "A parenthesis excludes the endpoint."
        ],
        "real-analysis.sequences": [
          "Example: 3/n approaches 0 as n grows.",
          "The numerator stays fixed while the denominator grows.",
          "The terms get closer and closer to 0."
        ],
        "real-analysis.limits": [
          "Example: a function can approach 8 near a point even if the point itself is missing.",
          "Limits care about nearby behavior.",
          "The value at the point is a separate question."
        ],
        "real-analysis.continuity": [
          "Example: a continuous function at a has its nearby limit equal to f(a).",
          "The graph has no break at that point.",
          "A jump or hole breaks continuity."
        ],
        "real-analysis.differentiation": [
          "Example: |x| has a corner at 0.",
          "The left and right slopes disagree there.",
          "So differentiability can fail even when continuity holds."
        ],
        "real-analysis.integration": [
          "Example: a partition splits [0, 1] into smaller intervals.",
          "A Riemann sum uses pieces to approximate area.",
          "Finer partitions improve the approximation."
        ],
        "abstract-algebra.groups": [
          "Example: check the integers under addition against all four group rules.",
          "Closed: 3 + 5 = 8 stays an integer. Identity: adding 0 changes nothing. Inverse: 5 undoes to -5. Associativity holds for addition.",
          "All four rules pass, so the integers under addition form a group."
        ],
        "abstract-algebra.rings": [
          "Example: check the integers with both operations at once.",
          "Addition behaves like a group, and 3 × (4 + 5) = 3 × 4 + 3 × 5 shows multiplication distributing over addition.",
          "The two operations cooperate, so the integers form a ring."
        ],
        "abstract-algebra.fields": [
          "Example: rational numbers form a field under usual operations.",
          "Every nonzero rational number has a reciprocal.",
          "Integers fail this division requirement."
        ],
        "abstract-algebra.homomorphisms": [
          "Example: test <math>f(x) = 2x</math> from the integers to the integers.",
          "Combine first: f(3 + 4) = f(7) = 14. Map first: f(3) + f(4) = 6 + 8 = 14. They agree.",
          "The operation survives the trip through f, so f is a homomorphism."
        ],
        "abstract-algebra.examples-counterexamples": [
          "Example: positive integers under addition fail to be a group.",
          "The additive inverse of 3 is -3, which is not positive.",
          "The counterexample identifies the failed rule."
        ],
        "graph-theory.vertices-edges": [
          "Example: draw a triangle as a graph: vertices A, B, C and edges AB, BC, CA.",
          "Count the objects and the connections separately: 3 vertices, 3 edges.",
          "A graph is exactly that pair — a set of dots and a set of links."
        ],
        "graph-theory.degree": [
          "Example: a star has center C joined to A, B, and D.",
          "Three edges touch C, so deg(C) = 3.",
          "Each outer vertex touches one edge, so its degree is 1."
        ],
        "graph-theory.paths-cycles": [
          "Example: walk A to B to C along edges AB and BC.",
          "The walk uses 2 edges, so the path has length 2.",
          "Add edge CA and return to the start — that closed route is a cycle."
        ],
        "graph-theory.trees": [
          "Example: the path A - B - C - D is connected and has no cycle, so it is a tree.",
          "Add edge DA and a loop appears: no longer a tree.",
          "Remove edge BC instead and it splits in two: also no longer a tree."
        ],
        "graph-theory.connectedness": [
          "Example: vertices A, B, C with edges AB and BC form one piece.",
          "A reaches C through B, so all three share one component.",
          "Add an isolated vertex D and the graph now has 2 components."
        ],
        "physics.scalars-vectors": [
          "Example: a car's speed is 60 km/h; its velocity is 60 km/h north.",
          "Speed answers only how fast, so it is a scalar.",
          "Velocity adds a direction, so it is a vector."
        ],
        "physics.graphs": [
          "Example: a position-time graph climbs steadily from 0 m to 20 m over 4 s.",
          "Slope is rise over run: 20 ÷ 4 = 5, so the velocity is 5 m/s.",
          "A flat stretch would mean zero slope: the object is parked."
        ],
        "physics.energy": [
          "Example: lift a book onto a shelf — work stores gravitational potential energy.",
          "Knock it off, and the stored energy becomes kinetic energy as it falls.",
          "Nothing is lost along the way; energy only changes form."
        ],
        "physics.oscillations": [
          "Example: a swing completes one full back-and-forth in 2 seconds.",
          "That time is the period: T = 2 s.",
          "Frequency counts cycles per second: f = 1/T = 0.5 Hz."
        ],
        "physics.sound": [
          "Example: a speaker cone vibrates 440 times each second.",
          "The air is pushed back and forth at 440 Hz — heard as the note A.",
          "Double the frequency to 880 Hz and the pitch rises one octave."
        ],
        "physics.temperature-heat": [
          "Example: drop a hot spoon into cool water.",
          "Heat flows from spoon to water until their temperatures meet.",
          "Temperature described each object; heat was the energy moving between them."
        ],
        "physics.charge-fields": [
          "Example: bring two negative charges together and each feels a push.",
          "Like signs repel; a positive and a negative would attract instead.",
          "The field at any spot is the force a small positive test charge would feel there."
        ],
        "physics.magnetism": [
          "Example: point two north poles at each other and they push apart.",
          "Flip one magnet and the opposite poles pull together.",
          "A current in a wire adds its own magnetic field: moving charge is the source."
        ],
        "physics.quantum": [
          "Example: an electron in an atom can sit at energy level 1 or level 2, but nowhere between.",
          "To jump levels it absorbs or emits one photon carrying exactly the difference.",
          "Discrete steps replace the smooth ramp classical physics expected."
        ]
      };
    
      return examples[workspace.id] || [
        "Example: name the objects in the definition first.",
        "Check the condition the lesson is about.",
        "Decide whether the example satisfies that condition."
      ];
    }

  api.conceptWorkedExampleItems = conceptWorkedExampleItems;
})();
