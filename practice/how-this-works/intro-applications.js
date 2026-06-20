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
