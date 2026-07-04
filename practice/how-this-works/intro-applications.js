// Carry Learning / Overview content. Loaded before app.js by index.html.
// Keep authored overview copy here so app.js can focus on rendering and interaction.
(function registerCarryHowThisWorksIntroApplications() {
  window.CarryHowThisWorks = window.CarryHowThisWorks || {};
  const api = window.CarryHowThisWorks;

  function introApplicationItems(workspace) {
    const byId = {
      "arithmetic.place-value": [
        "Reading prices, scores, measurements, and large numbers quickly.",
        "Catching errors when a digit is in the wrong place."
      ],
      "arithmetic.number-sense": [
        "Estimating whether a result is reasonable before trusting a calculator.",
        "Comparing quantities in money, distance, time, and data."
      ],
      "arithmetic.fractions": [
        "Sharing, scaling recipes, interpreting ratios, and reading probability.",
        "Moving between exact values and decimal approximations."
      ],
      "algebra.linear-equations": [
        "Solving for an unknown cost, distance, rate, or missing measurement.",
        "Rearranging formulas in science and engineering."
      ],
      "algebra.systems": [
        "Finding where two constraints are true at the same time.",
        "Comparing plans, mixtures, break-even points, and intersections."
      ],
      "geometry.coordinate": [
        "Mapping, screen graphics, robotics, design grids, and analytic geometry.",
        "Turning shapes into numbers that can be measured."
      ],
      "trigonometry.unit-circle": [
        "Modeling rotation, waves, sound, light, and seasonal cycles.",
        "Connecting angles to coordinates."
      ],
      "calculus.derivatives": [
        "Measuring instantaneous speed, slope, sensitivity, and marginal change.",
        "Understanding how a changing system responds right now."
      ],
      "calculus.integrals": [
        "Accumulating distance, area, total change, mass, charge, and probability.",
        "Turning many tiny contributions into a whole."
      ],
      "statistics.normal-distribution": [
        "Modeling measurement error, natural variation, test scores, and averages.",
        "Judging whether an observation is ordinary or unusual."
      ],
      "statistics.correlation-regression": [
        "Finding relationships in real data while remembering that association is not proof of cause.",
        "Making simple predictions with uncertainty."
      ],
      "number-theory.modular-arithmetic": [
        "Clock arithmetic, calendars, cycles, checksums, music patterns, and cryptography.",
        "Reasoning with remainders instead of full numbers."
      ],
      "graph-theory.vertices-edges": [
        "Networks: friends, roads, websites, circuits, dependencies, and maps.",
        "Separating objects from the connections between them."
      ],
      "physics.kinematics": [
        "Motion in vehicles, sports, animation, experiments, and sensors.",
        "Connecting position, velocity, acceleration, and time."
      ],
      "arithmetic.integers": [
        "Temperatures below zero, elevations below sea level, debts, and score changes.",
        "Reading a negative sign as a direction, not just a warning."
      ],
      "arithmetic.decimals": [
        "Money, measurements, sports times, and sensor readings.",
        "Knowing when 0.5 and 0.50 are the same and when the precision matters."
      ],
      "arithmetic.percents": [
        "Discounts, tips, taxes, interest, battery levels, and statistics in the news.",
        "Comparing changes fairly when the starting amounts differ."
      ],
      "arithmetic.ratios": [
        "Recipes, map scales, screen resolutions, gear ratios, and unit prices.",
        "Scaling a plan up or down without changing its proportions."
      ],
      "arithmetic.factors-multiples-primes": [
        "Splitting things into equal groups, scheduling repeating events, and simplifying fractions.",
        "Primes also guard your passwords: modern encryption is built on them."
      ],
      "arithmetic.order-of-operations": [
        "Spreadsheets, calculators, and code follow these rules exactly.",
        "Writing expressions that another person — or a machine — cannot misread."
      ],
      "arithmetic.word-problems": [
        "Budgets, travel plans, comparisons, and any question that arrives in sentences.",
        "Translating a real situation into numbers before computing."
      ],
      "arithmetic.mixed-review": [
        "Everyday arithmetic rarely announces which operation it needs.",
        "Choosing the right tool is a separate skill from using it."
      ],
      "arithmetic.estimation": [
        "Checking a bill, a budget, or a calculator answer at a glance.",
        "Catching a wrong answer before it costs anything."
      ],
      "prealgebra.integers": [
        "Bank balances, temperature swings, golf scores, and elevation changes.",
        "Keeping signs straight when quantities move in both directions."
      ],
      "prealgebra.expressions": [
        "Writing one formula that works for any input: the cost of n tickets, the pay for h hours.",
        "Tidying a calculation before automating it."
      ],
      "prealgebra.equations": [
        "Finding the unknown: the price before tax, the missing measurement, the break-even point.",
        "Undoing operations step by step, in reverse order."
      ],
      "prealgebra.inequalities": [
        "Speed limits, budgets, minimum ages, safety margins — rules about ranges.",
        "Describing every acceptable answer at once instead of a single value."
      ],
      "prealgebra.exponents": [
        "Compound interest, population growth, file sizes, and viral spread.",
        "Recognizing when repeated multiplication will outrun any repeated addition."
      ],
      "prealgebra.coordinate-plane": [
        "Maps, game screens, spreadsheet charts, GPS, and image pixels.",
        "Giving every location a two-number name."
      ],
      "algebra.polynomials": [
        "Curves in design, projectile paths, revenue models, and computer graphics.",
        "Combining like terms keeps large expressions manageable."
      ],
      "algebra.factoring": [
        "Solving quadratics, simplifying formulas, and finding where models hit zero.",
        "Rewriting a hard product as easy pieces."
      ],
      "algebra.quadratics": [
        "Thrown balls, bridge arches, satellite dishes, and profit curves.",
        "Anything with one best point — a maximum or minimum — tends to look quadratic nearby."
      ],
      "algebra.rational-expressions": [
        "Rates that combine: shared work, lens formulas, parallel resistors, and average speeds.",
        "Tracking the values that make a formula break — division by zero hides in real models."
      ],
      "geometry.angles": [
        "Carpentry, navigation headings, camera fields of view, and robot joints.",
        "Splitting turns into measurable, checkable parts."
      ],
      "geometry.triangles": [
        "Roof trusses, bridges, and cell-tower triangulation — triangles hold their shape.",
        "Surveyors find distances they cannot walk by solving triangles."
      ],
      "geometry.circles": [
        "Wheels, gears, orbits, clock faces, pizza sizes, and radio ranges.",
        "One measurement — the radius — sizes the whole round object."
      ],
      "geometry.area-volume": [
        "Paint for a wall, soil for a garden bed, water in a tank, and shipping-box sizes.",
        "Choosing square units or cubic units before calculating anything."
      ],
      "geometry.proof-basics": [
        "Legal arguments, debugging, and safety cases all borrow proof's give-a-reason discipline.",
        "Learning why a fact is certain, not just that it is."
      ],
      "trigonometry.right-triangles": [
        "Ramp grades, ladder safety, flight paths, and the height of anything with a shadow.",
        "Measuring the inaccessible with an angle and one known side."
      ],
      "trigonometry.graphs": [
        "Sound waves, tides, heartbeats, daylight hours, and alternating current.",
        "Reading amplitude and period as loudness and pitch, height and rhythm."
      ],
      "trigonometry.identities": [
        "Simplifying signal formulas in audio, radio, and graphics engines.",
        "Swapping a hard expression for an equal, easier one."
      ],
      "trigonometry.inverse": [
        "Finding the angle from measurements: a slope's steepness, a robot arm's joint.",
        "GPS and game engines run arctangent constantly to recover directions."
      ],
      "precalculus.functions": [
        "Every app, spreadsheet cell, and physics formula is a function keeping its one-output promise.",
        "Naming a relationship so it can be graphed, tested, and reused."
      ],
      "precalculus.transformations": [
        "Shifting a season's daylight curve, retuning a note, or moving a graphic on screen.",
        "Editing a known graph instead of rebuilding it from scratch."
      ],
      "precalculus.polynomial-rational": [
        "Smooth curves in engineering and animation; rates and concentrations in science.",
        "Knowing where a model explodes — its excluded values — before trusting it."
      ],
      "precalculus.exponential-log": [
        "Compound interest, radioactive dating, pH, decibels, and earthquake scales.",
        "Logarithmic scales tame numbers that span many sizes."
      ],
      "precalculus.sequences": [
        "Loan payments, savings plans, seating rows, and anything that grows by a rule.",
        "Telling add-the-same growth from multiply-the-same growth changes every forecast."
      ],
      "precalculus.complex-numbers": [
        "Alternating current, signal processing, and quantum mechanics run on complex arithmetic.",
        "Two-dimensional numbers for two-dimensional problems, like rotation."
      ],
      "calculus.limits": [
        "Instantaneous speed, terminal velocity, and what a process settles toward.",
        "Making 'gets arbitrarily close' a usable, checkable idea."
      ],
      "calculus.applications": [
        "Optimizing cost, dose, speed, or shape; modeling growth and decay.",
        "Turning 'how fast' and 'how much total' questions into computations."
      ],
      "calculus.series": [
        "How calculators compute sine and e^x: enough terms of a series.",
        "Trading an impossible exact answer for an arbitrarily good finite one."
      ],
      "differential-equations.first-order-models": [
        "Cooling coffee, medicines wearing off, growing populations, and interest-bearing accounts.",
        "One rule about change predicts the entire future path."
      ],
      "differential-equations.second-order-models": [
        "Car suspensions, earthquake-resistant buildings, guitar strings, and playground swings.",
        "Acceleration-based rules capture systems that push back, overshoot, and oscillate."
      ],
      "differential-equations.separable": [
        "Population growth, cooling, mixing tanks, and radioactive decay all separate cleanly.",
        "Sorting the variables is often the difference between solvable and not."
      ],
      "differential-equations.slope-fields": [
        "Weather models and orbit predictions read direction fields when formulas get too hard.",
        "Seeing every possible future of a system in one picture."
      ],
      "linear-algebra.vectors": [
        "Wind corrections, forces in structures, and velocities in games and simulations.",
        "Any quantity with a direction — and, later, any list of numbers at all."
      ],
      "linear-algebra.matrices": [
        "Image filters, data tables, 3D graphics, and network maps.",
        "One grid of numbers can store, transform, or connect an entire system."
      ],
      "linear-algebra.transformations": [
        "Rotating game cameras, scaling images, and converting coordinate systems.",
        "Every pixel you have ever seen on screen moved through a linear transformation."
      ],
      "linear-algebra.determinants": [
        "Testing whether equations have a unique solution; measuring stretch in graphics and physics.",
        "One number that says whether a transformation can be undone."
      ],
      "linear-algebra.eigenvalues": [
        "Google's PageRank, vibration analysis, face recognition, and population dynamics.",
        "Finding the directions a system stretches without turning."
      ],
      "linear-algebra.vector-spaces": [
        "Audio signals, images, and datasets all live in vector spaces.",
        "Basis and dimension say how many numbers a description really needs."
      ],
      "set-theory.sets-notation": [
        "Database queries, search filters, and probability events are set descriptions.",
        "Saying exactly which objects a statement covers."
      ],
      "set-theory.subsets": [
        "Access permissions, feature combinations, and topping choices are subsets.",
        "Counting the possibilities before checking them one by one."
      ],
      "set-theory.operations": [
        "Search terms joined with AND and OR, overlapping categories, and survey cross-groups.",
        "Combining conditions without double-counting the overlap."
      ],
      "set-theory.cartesian-relations": [
        "Database tables, seating charts, and coordinate grids are sets of ordered pairs.",
        "Modeling any 'this goes with that' connection precisely."
      ],
      "set-theory.functions": [
        "Lookup tables, encodings, and assignments of people to seats.",
        "The one-output rule is what makes computation predictable."
      ],
      "set-theory.countability": [
        "Comparing infinities honestly: playlists versus points on a line.",
        "Why no list can hold every real number — the insight behind modern logic and computing."
      ],
      "number-theory.divisibility": [
        "Splitting bills evenly, packing boxes, laying tiles, and scheduling shifts.",
        "The quiet test underneath fractions, factoring, and remainders."
      ],
      "number-theory.primes": [
        "Online payments and private messages stay safe because factoring big numbers is hard.",
        "The atoms of arithmetic: every whole number is built from primes in exactly one way."
      ],
      "number-theory.gcd-lcm": [
        "Simplifying fractions, syncing repeating schedules, and cutting stock without waste.",
        "When will two cycles line up again? That is an LCM question."
      ],
      "number-theory.euclidean-algorithm": [
        "Running inside cryptographic key exchanges and computer algebra, billions of times a day.",
        "A 2,300-year-old algorithm that is still the fastest route to its answer."
      ],
      "number-theory.congruences": [
        "Check digits on credit cards and barcodes, hash tables, and calendar math.",
        "Two numbers that agree where it counts: in the remainder."
      ],
      "topology.open-sets": [
        "The vocabulary underneath limits, continuity, and convergence in analysis.",
        "Making 'nearby' precise without measuring any distance."
      ],
      "topology.closed-sets": [
        "Describing boundaries: feasible regions in optimization, stable sets in dynamics.",
        "Knowing whether a limit of good points must still be a good point."
      ],
      "topology.bases": [
        "How mathematicians build big topologies from small, manageable pieces.",
        "The same idea as pixels building images: simple blocks generating everything."
      ],
      "topology.metric-spaces": [
        "Edit distance in spell-checkers, similarity scores in machine learning, GPS distances.",
        "Any notion of 'how far apart' becomes geometry once it obeys the triangle inequality."
      ],
      "topology.continuity": [
        "Guaranteeing that small input changes cannot cause output jumps — vital in control systems.",
        "The preimage definition keeps working where formulas and distances fail."
      ],
      "topology.compactness": [
        "Guaranteeing that optimization problems actually have a best answer.",
        "Taming infinite covers with finite ones — analysis leans on this constantly."
      ],
      "topology.connectedness": [
        "Deciding whether a maze, a network, or a phase space is one piece.",
        "The reason a continuous path cannot skip values — the intermediate value theorem."
      ],
      "topology.homeomorphisms": [
        "The coffee-cup-equals-donut idea: classifying shapes by what bending cannot change.",
        "Data analysis now uses topological shape to find structure in point clouds."
      ],
      "real-analysis.sets": [
        "Intervals describe tolerances, error bars, and acceptable ranges everywhere.",
        "Whether the endpoints count can change an optimization answer."
      ],
      "real-analysis.sequences": [
        "Iterative algorithms, compound interest, and numerical methods are converging sequences.",
        "Proving an approximation process actually settles — not just hoping."
      ],
      "real-analysis.limits": [
        "The epsilon-delta contract is how calculus survives scrutiny.",
        "The same tolerance language engineers use for specifications."
      ],
      "real-analysis.continuity": [
        "Sensors, controls, and physical laws assume small causes make small effects.",
        "Existence theorems — a root must be crossed — come free with continuity."
      ],
      "real-analysis.differentiation": [
        "Optimization, sensitivity analysis, and physics all run on derivatives.",
        "Knowing when a derivative fails — corners, kinks — protects real models."
      ],
      "real-analysis.integration": [
        "Probabilities, energies, and totals are integrals; Riemann sums are how computers do them.",
        "Numerical integration in every simulation is exactly this rectangle game."
      ],
      "abstract-algebra.groups": [
        "Symmetries of molecules and crystals, Rubik's cube moves, and error-correcting codes.",
        "One theory covering every system where moves combine and can be undone."
      ],
      "abstract-algebra.rings": [
        "Polynomial arithmetic in computer algebra, and integers mod n in cryptography.",
        "Two linked operations, studied once, applied everywhere."
      ],
      "abstract-algebra.fields": [
        "The number systems where linear algebra and coding theory work.",
        "The error correction on QR codes and DVDs runs on finite fields."
      ],
      "abstract-algebra.homomorphisms": [
        "Logarithms turning multiplication into addition is a homomorphism you already use.",
        "Comparing two systems through a map that respects their operations."
      ],
      "abstract-algebra.examples-counterexamples": [
        "How mathematicians actually work: test the definition, hunt for the failure.",
        "One good counterexample can save months of trying to prove something false."
      ],
      "proofs.logic": [
        "Circuit design, database queries, legal reasoning, and every if-statement in code.",
        "Tracking exactly what follows from what."
      ],
      "proofs.quantifiers": [
        "Specifications live on 'for all' and 'there exists': all inputs validated, some route exists.",
        "Misreading a quantifier is a classic source of bugs and bad contracts."
      ],
      "proofs.counterexamples": [
        "Test cases that break code, and exceptions that break policies.",
        "The fastest honest way to kill a false claim."
      ],
      "proofs.contradiction": [
        "Sudoku eliminations, alibi reasoning, and impossibility results.",
        "Assume the opposite and watch it collapse."
      ],
      "proofs.induction": [
        "Proving algorithms correct for every input size and loops safe at every step.",
        "The standard tool for statements about all whole numbers at once."
      ],
      "proofs.construction": [
        "Existence by building: algorithms, schedules, and designs are constructive proofs.",
        "The most convincing evidence that something exists is the thing itself."
      ],
      "complex-analysis.complex-functions": [
        "Signal processing, fluid flow, and electrical engineering compute with complex functions.",
        "One complex rule steers two real dimensions at once."
      ],
      "complex-analysis.analytic-functions": [
        "The smoothness assumption behind aerodynamics and electrostatics models.",
        "Rigidity means local measurements determine global behavior."
      ],
      "complex-analysis.contour-integrals": [
        "Evaluating real integrals that physics needs but real-variable calculus cannot reach.",
        "The inverse transforms of engineering are contour integrals in disguise."
      ],
      "complex-analysis.power-series": [
        "How calculators and chips evaluate functions: enough terms of a series.",
        "Approximation with error bounds you can actually prove."
      ],
      "complex-analysis.residues": [
        "Shortcut machinery for integrals in quantum mechanics and signal analysis.",
        "A whole integral collapses to a few numbers at the trouble spots."
      ]
    };
    if (byId[workspace.id]) return byId[workspace.id];
  
    if (workspace.topic === "Statistics") {
      return [
        "Reading data claims in science, business, medicine, and public life.",
        "Separating signal, variation, uncertainty, and context."
      ];
    }
    if (workspace.topic === "Probability") {
      return [
        "Reasoning about risk, games, sampling, forecasts, and uncertainty.",
        "Making the possible outcomes explicit before judging likelihood."
      ];
    }
    if (workspace.topic === "Graph Theory") {
      return [
        "Networks, routes, dependencies, search, scheduling, and communication.",
        "Using simple diagrams to reveal structure."
      ];
    }
    if (workspace.topic === "Physics Foundations" || String(workspace.id || "").startsWith("physics.")) {
      return [
        "Connecting formulas to measurable quantities in the world.",
        "Using units and diagrams to keep calculations grounded."
      ];
    }
    if (workspace.topic === "Proofs" || workspace.topic === "Real Analysis" || workspace.topic === "Abstract Algebra") {
      return [
        "Building definitions carefully enough that examples and counterexamples become visible.",
        "Learning how mathematical certainty is assembled one reason at a time."
      ];
    }
    return [];
  }

  api.introApplicationItems = introApplicationItems;
})();
