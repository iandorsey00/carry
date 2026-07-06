"use strict";

const APP_VERSION = "0.1.0-beta.28";
const STORAGE_KEY = "carry.progress.v1";
const SCRATCHPAD_STORAGE_KEY = "carry.scratchpads.v1";
const GAMES_STORAGE_KEY = "carry.games.v1";
const TOOLS_STORAGE_KEY = "carry.tools.v1";
const GAME_IDS = ["sudoku", "mod-clock", "prime-factors", "gcd-race", "divisibility", "residue-match", "graph-paths"];
const TOOL_IDS = ["random-number", "normal-simulator", "unit-circle", "complex-plane", "graphing", "number-theory"];
const EXPLORATION_ENTRIES = Array.isArray(window.CarryExplorations?.entries) ? window.CarryExplorations.entries : [];
const EXPLORATION_DEFAULT_ID = EXPLORATION_ENTRIES[0]?.id || "";
const MAX_CONCEPT_CHOICES = 4;
const GRAPH_FUNCTION_NAMES = ["sin", "cos", "tan", "asin", "acos", "atan", "sqrt", "abs", "log", "ln", "exp", "min", "max"];
const GRAPH_FUNCTIONS = new Set(GRAPH_FUNCTION_NAMES);
const GRAPH_VARIABLES = new Set(["x", "y", "z"]);
const graphPointerState = { dragging: false, x: 0, y: 0, mode: "", saveTimer: 0 };
const unitCircleDragState = { dragging: false };

const mathTopicCategories = new Map([
  ["Arithmetic", "Foundations"],
  ["Pre-Algebra", "Foundations"],
  ["Algebra", "Core Math"],
  ["Geometry", "Core Math"],
  ["Trigonometry", "Core Math"],
  ["Precalculus", "Core Math"],
  ["Calculus", "Advanced Math"],
  ["Differential Equations", "Advanced Math"],
  ["Linear Algebra", "Advanced Math"],
  ["Complex Analysis", "Advanced Math"],
  ["Real Analysis", "Advanced Math"],
  ["Topology", "Advanced Math"],
  ["Proofs", "Discrete and Structures"],
  ["Set Theory", "Discrete and Structures"],
  ["Number Theory", "Discrete and Structures"],
  ["Graph Theory", "Discrete and Structures"],
  ["Probability", "Data and Chance"],
  ["Statistics", "Data and Chance"],
  ["Abstract Algebra", "Discrete and Structures"]
]);

const mathCategoryOrder = ["Foundations", "Core Math", "Advanced Math", "Discrete and Structures", "Data and Chance"];

const topicGroups = [
  {
    name: "Arithmetic",
    sections: [
      {
        title: "Whole Numbers",
        lessons: [
          { id: "arithmetic.place-value", title: "Place value" },
          { id: "arithmetic.number-sense", title: "Number sense" },
          { id: "arithmetic.long-addition.3x3", title: "Long addition" },
          { id: "arithmetic.long-subtraction.3x3", title: "Long subtraction" },
          { id: "arithmetic.long-multiplication.3x3", title: "Long multiplication" },
          { id: "arithmetic.long-division.3x1", title: "Long division" },
          { id: "arithmetic.long-division-remainders", title: "Long division with remainders" },
          { id: "arithmetic.estimation", title: "Estimation and checking" }
        ]
      },
      {
        title: "Number Systems",
        lessons: [
          { id: "arithmetic.integers", title: "Integers" },
          { id: "arithmetic.fractions", title: "Fractions" },
          { id: "arithmetic.decimals", title: "Decimals" },
          { id: "arithmetic.percents", title: "Percents" },
          { id: "arithmetic.ratios", title: "Ratios" },
          { id: "arithmetic.factors-multiples-primes", title: "Factors, multiples, primes" },
          { id: "arithmetic.order-of-operations", title: "Order of operations" },
          { id: "arithmetic.word-problems", title: "Word problems" },
          { id: "arithmetic.mixed-review", title: "Mixed review" }
        ]
      }
    ]
  },
  {
    name: "Pre-Algebra",
    sections: [
      {
        title: "Foundations",
        lessons: [
          { id: "prealgebra.integers", title: "Integers" },
          { id: "prealgebra.expressions", title: "Expressions" },
          { id: "prealgebra.equations", title: "Equations" },
          { id: "prealgebra.inequalities", title: "Inequalities" },
          { id: "prealgebra.exponents", title: "Exponents" },
          { id: "prealgebra.coordinate-plane", title: "Coordinate plane" }
        ]
      }
    ]
  },
  {
    name: "Algebra",
    sections: [
      {
        title: "Algebra I",
        lessons: [
          { id: "algebra.linear-equations", title: "Linear equations" },
          { id: "algebra.systems", title: "Systems" },
          { id: "algebra.polynomials", title: "Polynomials" },
          { id: "algebra.factoring", title: "Factoring" },
          { id: "algebra.rational-expressions", title: "Rational expressions" },
          { id: "algebra.quadratics", title: "Quadratics" }
        ]
      }
    ]
  },
  {
    name: "Geometry",
    sections: [
      {
        title: "Euclidean Geometry",
        lessons: [
          { id: "geometry.angles", title: "Angles" },
          { id: "geometry.triangles", title: "Triangles" },
          { id: "geometry.circles", title: "Circles" },
          { id: "geometry.area-volume", title: "Area and volume" },
          { id: "geometry.coordinate", title: "Coordinate geometry" },
          { id: "geometry.proof-basics", title: "Proof basics" }
        ]
      }
    ]
  },
  {
    name: "Trigonometry",
    sections: [
      {
        title: "Trigonometry",
        lessons: [
          { id: "trigonometry.unit-circle", title: "Unit circle" },
          { id: "trigonometry.right-triangles", title: "Right triangles" },
          { id: "trigonometry.graphs", title: "Graphs" },
          { id: "trigonometry.identities", title: "Identities" },
          { id: "trigonometry.inverse", title: "Inverse trig" }
        ]
      }
    ]
  },
  {
    name: "Precalculus",
    sections: [
      {
        title: "Functions and Models",
        lessons: [
          { id: "precalculus.functions", title: "Functions" },
          { id: "precalculus.transformations", title: "Transformations" },
          { id: "precalculus.polynomial-rational", title: "Polynomial and rational functions" },
          { id: "precalculus.exponential-log", title: "Exponential and log functions" },
          { id: "precalculus.sequences", title: "Sequences" },
          { id: "precalculus.complex-numbers", title: "Complex numbers" }
        ]
      }
    ]
  },
  {
    name: "Calculus",
    sections: [
      {
        title: "Calculus",
        lessons: [
          { id: "calculus.limits", title: "Limits" },
          { id: "calculus.derivatives", title: "Derivatives" },
          { id: "calculus.integrals", title: "Integrals" },
          { id: "calculus.applications", title: "Applications" },
          { id: "calculus.series", title: "Series" }
        ]
      }
    ]
  },
  {
    name: "Differential Equations",
    sections: [
      {
        title: "Change Over Time",
        lessons: [
          { id: "differential-equations.slope-fields", title: "Slope fields" },
          { id: "differential-equations.separable", title: "Separable equations" },
          { id: "differential-equations.first-order-models", title: "First-order models" },
          { id: "differential-equations.second-order-models", title: "Second-order models" }
        ]
      }
    ]
  },
  {
    name: "Linear Algebra",
    sections: [
      {
        title: "Linear Algebra",
        lessons: [
          { id: "linear-algebra.vectors", title: "Vectors" },
          { id: "linear-algebra.matrices", title: "Matrices" },
          { id: "linear-algebra.transformations", title: "Transformations" },
          { id: "linear-algebra.determinants", title: "Determinants" },
          { id: "linear-algebra.eigenvalues", title: "Eigenvalues" },
          { id: "linear-algebra.vector-spaces", title: "Vector spaces" }
        ]
      }
    ]
  },
  {
    name: "Complex Analysis",
    sections: [
      {
        title: "Functions of a Complex Variable",
        lessons: [
          { id: "complex-analysis.complex-functions", title: "Complex functions" },
          { id: "complex-analysis.analytic-functions", title: "Analytic functions" },
          { id: "complex-analysis.contour-integrals", title: "Contour integrals" },
          { id: "complex-analysis.power-series", title: "Power series" },
          { id: "complex-analysis.residues", title: "Residues" }
        ]
      }
    ]
  },
  {
    name: "Proofs",
    sections: [
      {
        title: "Proof Writing",
        lessons: [
          { id: "proofs.logic", title: "Logic" },
          { id: "proofs.quantifiers", title: "Quantifiers" },
          { id: "proofs.induction", title: "Induction" },
          { id: "proofs.contradiction", title: "Contradiction" },
          { id: "proofs.construction", title: "Construction" },
          { id: "proofs.counterexamples", title: "Counterexamples" }
        ]
      }
    ]
  },
  {
    name: "Set Theory",
    sections: [
      {
        title: "Sets and Relations",
        lessons: [
          { id: "set-theory.sets-notation", title: "Sets and notation" },
          { id: "set-theory.subsets", title: "Subsets and power sets" },
          { id: "set-theory.operations", title: "Union and intersection" },
          { id: "set-theory.cartesian-relations", title: "Products and relations" },
          { id: "set-theory.functions", title: "Functions as maps" },
          { id: "set-theory.countability", title: "Countability" }
        ]
      }
    ]
  },
  {
    name: "Number Theory",
    sections: [
      {
        title: "Divisibility and Congruence",
        lessons: [
          { id: "number-theory.divisibility", title: "Divisibility" },
          { id: "number-theory.primes", title: "Primes and factorization" },
          { id: "number-theory.gcd-lcm", title: "GCD and LCM" },
          { id: "number-theory.euclidean-algorithm", title: "Euclidean algorithm" },
          { id: "number-theory.modular-arithmetic", title: "Modular arithmetic" },
          { id: "number-theory.congruences", title: "Congruences" }
        ]
      }
    ]
  },
  {
    name: "Graph Theory",
    sections: [
      {
        title: "Graphs and Networks",
        lessons: [
          { id: "graph-theory.vertices-edges", title: "Vertices and edges" },
          { id: "graph-theory.paths-cycles", title: "Paths and cycles" },
          { id: "graph-theory.degree", title: "Degree" },
          { id: "graph-theory.trees", title: "Trees" },
          { id: "graph-theory.connectedness", title: "Connectedness" }
        ]
      }
    ]
  },
  {
    name: "Probability",
    sections: [
      {
        title: "Chance and Counting",
        lessons: [
          { id: "probability.sample-spaces", title: "Sample spaces" },
          { id: "probability.basic-probability", title: "Basic probability" },
          { id: "probability.counting", title: "Counting" },
          { id: "probability.conditional-probability", title: "Conditional probability" },
          { id: "probability.random-variables", title: "Random variables" }
        ]
      }
    ]
  },
  {
    name: "Statistics",
    sections: [
      {
        title: "Data and Inference",
        lessons: [
          { id: "statistics.data-summaries", title: "Data summaries" },
          { id: "statistics.center-spread", title: "Center and spread" },
          { id: "statistics.displays", title: "Data displays" },
          { id: "statistics.variance-standard-deviation", title: "Variance and standard deviation" },
          { id: "statistics.normal-distribution", title: "Normal distribution" },
          { id: "statistics.binomial-distribution", title: "Binomial distribution" },
          { id: "statistics.correlation-regression", title: "Correlation and regression" },
          { id: "statistics.confidence-intervals", title: "Confidence intervals" },
          { id: "statistics.sampling-inference", title: "Sampling and inference" }
        ]
      }
    ]
  },
  {
    name: "Real Analysis",
    sections: [
      {
        title: "Analysis",
        lessons: [
          { id: "real-analysis.sets", title: "Sets" },
          { id: "real-analysis.sequences", title: "Sequences" },
          { id: "real-analysis.limits", title: "Limits" },
          { id: "real-analysis.continuity", title: "Continuity" },
          { id: "real-analysis.differentiation", title: "Differentiation" },
          { id: "real-analysis.integration", title: "Integration" }
        ]
      }
    ]
  },
  {
    name: "Topology",
    sections: [
      {
        title: "Spaces and Continuity",
        lessons: [
          { id: "topology.open-sets", title: "Open sets" },
          { id: "topology.closed-sets", title: "Closed sets" },
          { id: "topology.metric-spaces", title: "Metric spaces" },
          { id: "topology.bases", title: "Bases" },
          { id: "topology.continuity", title: "Continuity" },
          { id: "topology.compactness", title: "Compactness" },
          { id: "topology.connectedness", title: "Connectedness" },
          { id: "topology.homeomorphisms", title: "Homeomorphisms" }
        ]
      }
    ]
  },
  {
    name: "Abstract Algebra",
    sections: [
      {
        title: "Algebraic Structures",
        lessons: [
          { id: "abstract-algebra.groups", title: "Groups" },
          { id: "abstract-algebra.rings", title: "Rings" },
          { id: "abstract-algebra.fields", title: "Fields" },
          { id: "abstract-algebra.homomorphisms", title: "Homomorphisms" },
          { id: "abstract-algebra.examples-counterexamples", title: "Examples and counterexamples" }
        ]
      }
    ]
  }
];

const PHYSICS_DEFAULT_TOPIC = "Physics Foundations";
const PHYSICS_DEFAULT_WORKSPACE = "physics.units";
const MATH_DEFAULT_TOPIC = "Arithmetic";
const MATH_DEFAULT_WORKSPACE = "arithmetic.long-addition.3x3";

const physicsTopicGroups = [
  {
    name: "Physics Foundations",
    sections: [
      {
        title: "Measurement and Models",
        lessons: [
          { id: "physics.units", title: "Units and dimensions" },
          { id: "physics.scalars-vectors", title: "Scalars and vectors" },
          { id: "physics.graphs", title: "Graphs and models" }
        ]
      }
    ]
  },
  {
    name: "Mechanics",
    sections: [
      {
        title: "Motion and Forces",
        lessons: [
          { id: "physics.kinematics", title: "Kinematics" },
          { id: "physics.forces", title: "Forces" },
          { id: "physics.energy", title: "Energy" },
          { id: "physics.momentum", title: "Momentum" }
        ]
      }
    ]
  },
  {
    name: "Waves",
    sections: [
      {
        title: "Oscillations and Waves",
        lessons: [
          { id: "physics.oscillations", title: "Oscillations" },
          { id: "physics.waves", title: "Wave properties" },
          { id: "physics.sound", title: "Sound" }
        ]
      }
    ]
  },
  {
    name: "Electricity and Magnetism",
    sections: [
      {
        title: "Charge and Circuits",
        lessons: [
          { id: "physics.charge-fields", title: "Charge and fields" },
          { id: "physics.circuits", title: "Circuits" },
          { id: "physics.magnetism", title: "Magnetism" }
        ]
      }
    ]
  },
  {
    name: "Thermodynamics",
    sections: [
      {
        title: "Heat and Matter",
        lessons: [
          { id: "physics.temperature-heat", title: "Temperature and heat" },
          { id: "physics.ideal-gas", title: "Ideal gas law" }
        ]
      }
    ]
  },
  {
    name: "Modern Physics",
    sections: [
      {
        title: "Modern Ideas",
        lessons: [
          { id: "physics.quantum", title: "Quantum basics" },
          { id: "physics.relativity", title: "Relativity basics" }
        ]
      }
    ]
  }
];

const subtractionWorkspace = window.CarryPractice?.modes?.longOperations?.subtractionWorkspace;

const additionWorkspace = window.CarryPractice?.modes?.longOperations?.additionWorkspace;

const multiplicationWorkspace = window.CarryPractice?.modes?.longOperations?.multiplicationWorkspace;

const divisionWorkspace = window.CarryPractice?.modes?.longOperations?.divisionWorkspace;

const divisionRemainderWorkspace = window.CarryPractice?.modes?.longOperations?.divisionRemainderWorkspace;

const arithmeticConceptWorkspaces = window.CarryPractice?.sections?.["arithmetic"] || {};

const preAlgebraConceptWorkspaces = window.CarryPractice?.sections?.["prealgebra"] || {};

const algebraConceptWorkspaces = window.CarryPractice?.sections?.["algebra"] || {};

const geometryConceptWorkspaces = window.CarryPractice?.sections?.["geometry"] || {};

const trigonometryConceptWorkspaces = window.CarryPractice?.sections?.["trigonometry"] || {};

const precalculusConceptWorkspaces = window.CarryPractice?.sections?.["precalculus"] || {};

const calculusConceptWorkspaces = window.CarryPractice?.sections?.["calculus"] || {};

const differentialEquationsConceptWorkspaces = window.CarryPractice?.sections?.["differential-equations"] || {};

const linearAlgebraConceptWorkspaces = window.CarryPractice?.sections?.["linear-algebra"] || {};

const proofsConceptWorkspaces = window.CarryPractice?.sections?.["proofs"] || {};

const setTheoryConceptWorkspaces = window.CarryPractice?.sections?.["set-theory"] || {};

const numberTheoryConceptWorkspaces = window.CarryPractice?.sections?.["number-theory"] || {};

const graphTheoryConceptWorkspaces = window.CarryPractice?.sections?.["graph-theory"] || {};

const probabilityConceptWorkspaces = window.CarryPractice?.sections?.["probability"] || {};

const statisticsConceptWorkspaces = window.CarryPractice?.sections?.["statistics"] || {};

const realAnalysisConceptWorkspaces = window.CarryPractice?.sections?.["real-analysis"] || {};

const complexAnalysisConceptWorkspaces = window.CarryPractice?.sections?.["complex-analysis"] || {};

const topologyConceptWorkspaces = window.CarryPractice?.sections?.["topology"] || {};

const abstractAlgebraConceptWorkspaces = window.CarryPractice?.sections?.["abstract-algebra"] || {};

const physicsConceptWorkspaces = window.CarryPractice?.sections?.["physics"] || {};

const conceptWorkspaces = {
  ...arithmeticConceptWorkspaces,
  ...preAlgebraConceptWorkspaces,
  ...algebraConceptWorkspaces,
  ...geometryConceptWorkspaces,
  ...trigonometryConceptWorkspaces,
  ...precalculusConceptWorkspaces,
  ...calculusConceptWorkspaces,
  ...differentialEquationsConceptWorkspaces,
  ...linearAlgebraConceptWorkspaces,
  ...proofsConceptWorkspaces,
  ...setTheoryConceptWorkspaces,
  ...numberTheoryConceptWorkspaces,
  ...graphTheoryConceptWorkspaces,
  ...probabilityConceptWorkspaces,
  ...statisticsConceptWorkspaces,
  ...realAnalysisConceptWorkspaces,
  ...complexAnalysisConceptWorkspaces,
  ...topologyConceptWorkspaces,
  ...abstractAlgebraConceptWorkspaces,
  ...physicsConceptWorkspaces
};

const workspaceRegistry = {
  "arithmetic.long-addition.3x3": additionWorkspace,
  "arithmetic.long-subtraction.3x3": subtractionWorkspace,
  "arithmetic.long-multiplication.3x3": multiplicationWorkspace,
  "arithmetic.long-division.3x1": divisionWorkspace,
  "arithmetic.long-division-remainders": divisionRemainderWorkspace,
  ...conceptWorkspaces,
  "Pre-Algebra": { id: "prealgebra.placeholders", title: "Number patterns", status: "planned" },
  "Algebra": { id: "algebra.placeholders", title: "Equation transformations", status: "planned" },
  "Geometry": { id: "geometry.placeholders", title: "Shape reasoning", status: "planned" },
  "Trigonometry": { id: "trigonometry.placeholders", title: "Identity studio", status: "planned" },
  "Calculus": { id: "calculus.placeholders", title: "Limits and derivatives", status: "planned" },
  "Differential Equations": { id: "differential-equations.placeholders", title: "Change over time", status: "planned" },
  "Linear Algebra": { id: "linear-algebra.placeholders", title: "Vector spaces", status: "planned" },
  "Set Theory": { id: "set-theory.placeholders", title: "Sets and relations", status: "planned" },
  "Number Theory": { id: "number-theory.placeholders", title: "Divisibility and congruence", status: "planned" },
  "Graph Theory": { id: "graph-theory.placeholders", title: "Graphs and networks", status: "planned" },
  "Probability": { id: "probability.placeholders", title: "Chance and counting", status: "planned" },
  "Statistics": { id: "statistics.placeholders", title: "Data and inference", status: "planned" },
  "Complex Analysis": { id: "complex-analysis.placeholders", title: "Complex functions", status: "planned" },
  "Real Analysis": { id: "real-analysis.placeholders", title: "Definitions and proofs", status: "planned" },
  "Topology": { id: "topology.placeholders", title: "Spaces and continuity", status: "planned" },
  "Abstract Algebra": { id: "abstract-algebra.placeholders", title: "Groups and examples", status: "planned" },
  "Proofs": { id: "proofs.placeholders", title: "Proof construction", status: "planned" }
};

const sudokuBoards = {
  4: {
    blockRows: 2,
    blockCols: 2,
    solution: "1234341221434321",
    clues: { easy: 10, medium: 8, hard: 6 }
  },
  6: {
    blockRows: 2,
    blockCols: 3,
    solution: "123456456123231564564231312645645312",
    clues: { easy: 22, medium: 16, hard: 12 }
  },
  9: {
    blockRows: 3,
    blockCols: 3,
    clues: { easy: 42, medium: 32, hard: 26 }
  }
};

const state = {
  progress: loadProgress(),
  scratchpads: loadScratchpads(),
  games: loadGames(),
  tools: loadTools(),
  activeSurface: "learn",
  activeExplorationId: EXPLORATION_DEFAULT_ID,
  mode: "guided",
  activeTopic: "Arithmetic",
  activeWorkspaceId: "arithmetic.long-addition.3x3",
  activeStep: 0,
  showIntro: true,
  selectedProblemIndex: 0,
  customProblems: {},
  currentModel: null,
  checkedCells: new Map(),
  autoAdvancedToStep: null
};

function operationProblemsFromWorkspace(workspace) {
  if (Array.isArray(workspace?.problems) && workspace.problems.length) return workspace.problems;
  return workspace?.problem ? [workspace.problem] : [];
}

const multiplicationProblemSet = operationProblemsFromWorkspace(multiplicationWorkspace);
const additionProblemSet = operationProblemsFromWorkspace(additionWorkspace);
const subtractionProblemSet = operationProblemsFromWorkspace(subtractionWorkspace);
const divisionProblemSet = operationProblemsFromWorkspace(divisionWorkspace);
const divisionRemainderProblemSet = operationProblemsFromWorkspace(divisionRemainderWorkspace);

function createLessonQaReport() {
  const weirdChoicePattern = /\b(cannot tell|cannot be determined|not enough information|decoration|only geometry|impossible data|exact proof|erase outliers|whole plane|angle only|no data|be negative|unknown always|no probability)\b/i;
  const genericWeakPattern = /^(proof|category|sample)$/i;
  const conceptReports = Object.values(conceptWorkspaces).map((workspace) => {
    const problems = workspace.problems || [];
    const usesTopLevelAnswers = workspace.type === "concept";
    const missingHint = usesTopLevelAnswers ? problems.filter((problem) => !problem.hint).length : 0;
    const missingFeedback = usesTopLevelAnswers ? problems.filter((problem) => !effectiveProblemFeedback(problem)).length : 0;
    const choiceReports = usesTopLevelAnswers ? problems.map((problem) => {
      const answers = acceptedProblemAnswers(problem);
      const explicitChoices = uniqueChoiceObjects(problem.choices || []);
      const refinedChoices = choicesForConceptProblem(problem, answers);
      const promptOptions = optionsFromPrompt(stripMathTags(problem.prompt || ""));
      const binaryPrompt = isBinaryChoicePrompt(problem, answers);
      const weirdChoices = refinedChoices
        .filter((choice) => weakChoiceMatches(choice, problem, weirdChoicePattern, genericWeakPattern))
        .map((choice) => String(choice.label || choice.value));
      const longChoiceLabels = refinedChoices
        .filter((choice) => String(choice.label || choice.value).length > 44)
        .map((choice) => String(choice.label || choice.value));
      const generatedChoiceNeeded = !explicitChoices.length && shouldUseGeneratedChoices(problem, answers);
      const missingAcceptedChoice = refinedChoices.length >= 2
        && !refinedChoices.some((choice) => isChoiceAccepted(choice.value, answers, problem));
      return {
        prompt: stripMathTags(problem.prompt || ""),
        rawCount: explicitChoices.length,
        refinedCount: refinedChoices.length,
        hasChoices: refinedChoices.length >= 2,
        choiceCountInvalid: refinedChoices.length > 0 && (refinedChoices.length < 2 || refinedChoices.length > MAX_CONCEPT_CHOICES),
        binaryTooMany: binaryPrompt && refinedChoices.length > 2,
        missingAcceptedChoice,
        promptOptions,
        generatedChoiceNeeded,
        longChoiceLabels,
        weirdChoices
      };
    }) : [];
    const explicitChoiceCount = usesTopLevelAnswers ? problems.filter((problem) => Array.isArray(problem.choices) && problem.choices.length >= 2).length : 0;
    const effectiveChoiceCount = choiceReports.filter((report) => report.hasChoices).length;
    const invalidChoiceCount = choiceReports.filter((report) => report.choiceCountInvalid).length;
    const binaryTooManyCount = choiceReports.filter((report) => report.binaryTooMany).length;
    const missingAcceptedChoiceCount = choiceReports.filter((report) => report.missingAcceptedChoice).length;
    const generatedChoiceNeededCount = choiceReports.filter((report) => report.generatedChoiceNeeded).length;
    const longChoiceLabelCount = choiceReports.filter((report) => report.longChoiceLabels.length).length;
    const weirdChoices = choiceReports
      .filter((report) => report.weirdChoices.length)
      .map((report) => ({ prompt: report.prompt, choices: report.weirdChoices }));
    const typedAnswerCount = problems.length - effectiveChoiceCount;
    const needsBetaPass = problems.length < 8
      || missingHint > 0
      || missingFeedback > 0
      || invalidChoiceCount > 0
      || binaryTooManyCount > 0
      || missingAcceptedChoiceCount > 0
      || generatedChoiceNeededCount > 0
      || longChoiceLabelCount > 0
      || weirdChoices.length > 0;
    return {
      id: workspace.id,
      title: workspace.title,
      topic: workspace.topic,
      type: workspace.type,
      problemCount: problems.length,
      structuredProblemCount: usesTopLevelAnswers ? 0 : problems.length,
      explicitChoiceCount,
      effectiveChoiceCount,
      typedAnswerCount,
      generatedChoiceCount: problems.length - explicitChoiceCount,
      missingHint,
      missingFeedback,
      invalidChoiceCount,
      binaryTooManyCount,
      missingAcceptedChoiceCount,
      generatedChoiceNeededCount,
      longChoiceLabelCount,
      weirdChoices,
      needsBetaPass
    };
  }).sort((left, right) => left.id.localeCompare(right.id));

  const lowPractice = conceptReports.filter((item) => item.problemCount < 8).map((item) => item.id);
  const missingFeedback = conceptReports.filter((item) => item.missingFeedback > 0).map((item) => `${item.id} (${item.missingFeedback})`);
  const missingHints = conceptReports.filter((item) => item.missingHint > 0).map((item) => `${item.id} (${item.missingHint})`);
  const invalidChoices = conceptReports.filter((item) => item.invalidChoiceCount > 0).map((item) => `${item.id} (${item.invalidChoiceCount})`);
  const binaryTooMany = conceptReports.filter((item) => item.binaryTooManyCount > 0).map((item) => `${item.id} (${item.binaryTooManyCount})`);
  const missingAcceptedChoices = conceptReports.filter((item) => item.missingAcceptedChoiceCount > 0).map((item) => `${item.id} (${item.missingAcceptedChoiceCount})`);
  const generatedChoicesNeeded = conceptReports.filter((item) => item.generatedChoiceNeededCount > 0).map((item) => `${item.id} (${item.generatedChoiceNeededCount})`);
  const longChoiceLabels = conceptReports.filter((item) => item.longChoiceLabelCount > 0).map((item) => `${item.id} (${item.longChoiceLabelCount})`);
  const weirdChoices = conceptReports.filter((item) => item.weirdChoices.length).map((item) => `${item.id} (${item.weirdChoices.length})`);
  const typedAnswerHeavy = conceptReports
    .filter((item) => item.typedAnswerCount > Math.max(4, item.problemCount / 2))
    .map((item) => `${item.id} (${item.typedAnswerCount})`);

  return {
    version: APP_VERSION,
    conceptLessonCount: conceptReports.length,
    longOperationProblemCounts: {
      addition: additionProblemSet.length,
      subtraction: subtractionProblemSet.length,
      multiplication: multiplicationProblemSet.length,
      division: divisionProblemSet.length,
      divisionRemainders: divisionRemainderProblemSet.length
    },
    betaTargets: {
      lowPractice,
      missingHints,
      missingFeedback,
      invalidChoices,
      binaryTooMany,
      missingAcceptedChoices,
      generatedChoicesNeeded,
      longChoiceLabels,
      weirdChoices,
      typedAnswerHeavy
    },
    betaBlockerCount: missingHints.length + invalidChoices.length + binaryTooMany.length + missingAcceptedChoices.length + generatedChoicesNeeded.length + weirdChoices.length,
    feedbackPolishTargetCount: missingFeedback.length,
    curriculumDepthTargetCount: lowPractice.length,
    betaIssueCount: lowPractice.length
      + missingHints.length
      + missingFeedback.length
      + invalidChoices.length
      + binaryTooMany.length
      + missingAcceptedChoices.length
      + generatedChoicesNeeded.length
      + longChoiceLabels.length
      + weirdChoices.length,
    lessons: conceptReports
  };
}

const els = {};

document.addEventListener("DOMContentLoaded", () => {
  cacheElements();
  window.carryLessonQA = createLessonQaReport;
  if (els.appVersion) els.appVersion.textContent = `v${APP_VERSION}`;
  const routeState = resolveRouteFromPath();
  state.activeSurface = routeState?.surface || state.scratchpads.activeSurface || "learn";
  if (routeState?.tool) state.tools.activeTool = routeState.tool;
  if (routeState?.game) state.games.activeGame = routeState.game;
  if (routeState?.exploration) state.activeExplorationId = routeState.exploration;
  state.activeTopic = routeState?.topic || state.progress.currentTopic || "Arithmetic";
  state.activeWorkspaceId = routeState?.workspaceId || state.progress.currentWorkspaceId || "arithmetic.long-addition.3x3";
  state.mode = state.progress.preferences.mode || "guided";
  ensureSurfaceWorkspace();
  renderSurface();
  renderTopics();
  renderWorkspace();
  renderScratchpad();
  renderTools();
  renderGames();
  renderExplorations();
  bindEvents();
  updateProgressPanel();
  updateUrlFromState({ replace: true });
});

function cacheElements() {
  els.workspaceLayout = document.querySelector(".workspace-layout");
  els.topicPanel = document.querySelector(".topic-panel");
  els.topicList = document.querySelector("#topicList");
  els.currentTopic = document.querySelector("#currentTopic");
  els.lessonTitle = document.querySelector("#lessonTitle");
  els.grid = document.querySelector("#multiplicationGrid");
  els.overlay = document.querySelector("#gridOverlay");
  els.status = document.querySelector("#activityStatus");
  els.stepText = document.querySelector("#stepText");
  els.progressTopic = document.querySelector("#progressTopic");
  els.progressCompleted = document.querySelector("#progressCompleted");
  els.progressRecent = document.querySelector("#progressRecent");
  els.progressSummary = document.querySelector("#progressSummary");
  els.betaQaStatus = document.querySelector("#betaQaStatus");
  els.savedWorkspaces = document.querySelector("#savedWorkspaces");
  els.autoAdvance = document.querySelector("#autoAdvance");
  els.exportProgress = document.querySelector("#exportProgress");
  els.importProgress = document.querySelector("#importProgress");
  els.checkStep = document.querySelector("#checkStep");
  els.hintStep = document.querySelector("#hintStep");
  els.newProblem = document.querySelector("#newProblem");
  els.lessonIntro = document.querySelector("#lessonIntro");
  els.introTitle = document.querySelector("#introTitle");
  els.introCopy = document.querySelector("#introCopy");
  els.startLesson = document.querySelector("#startLesson");
  els.setupPanel = document.querySelector(".lesson-setup");
  els.problemForm = document.querySelector("#problemForm");
  els.gridShell = document.querySelector(".activity-grid-shell");
  els.workspaceTools = document.querySelector(".workspace-tools");
  els.topNumberLabel = document.querySelector("#topNumberLabel");
  els.bottomNumberLabel = document.querySelector("#bottomNumberLabel");
  els.topNumber = document.querySelector("#topNumber");
  els.bottomNumber = document.querySelector("#bottomNumber");
  els.randomProblem = document.querySelector("#randomProblem");
  els.modeTabs = Array.from(document.querySelectorAll(".mode-tab"));
  els.appVersion = document.querySelector("#appVersion");
  els.learnSurface = document.querySelector("#learnSurface");
  els.physicsSurface = document.querySelector("#physicsSurface");
  els.toolsSurface = document.querySelector("#toolsSurface");
  els.gamesSurface = document.querySelector("#gamesSurface");
  els.explorationsSurface = document.querySelector("#explorationsSurface");
  els.scratchpadSurface = document.querySelector("#scratchpadSurface");
  els.lessonPanel = document.querySelector("#lessonPanel");
  els.scratchpadPanel = document.querySelector("#scratchpadPanel");
  els.toolsPanel = document.querySelector("#toolsPanel");
  els.explorationsPanel = document.querySelector("#explorationsPanel");
  els.explorationList = document.querySelector("#explorationList");
  els.explorationArticle = document.querySelector("#explorationArticle");
  els.toolTabs = Array.from(document.querySelectorAll(".tool-tab"));
  els.toolPanels = Array.from(document.querySelectorAll("[data-tool-panel]"));
  els.sudokuPanel = document.querySelector("#sudokuPanel");
  els.gameTabs = Array.from(document.querySelectorAll(".game-tab"));
  els.sudokuGame = document.querySelector("#sudokuGame");
  els.sudokuBoard = document.querySelector("#sudokuBoard");
  els.sudokuPad = document.querySelector("#sudokuPad");
  els.sudokuStatus = document.querySelector("#sudokuStatus");
  els.sudokuSize = document.querySelector("#sudokuSize");
  els.sudokuDifficulty = document.querySelector("#sudokuDifficulty");
  els.newSudoku = document.querySelector("#newSudoku");
  els.checkSudoku = document.querySelector("#checkSudoku");
  els.clearSudoku = document.querySelector("#clearSudoku");
  els.randomNumberMin = document.querySelector("#randomNumberMin");
  els.randomNumberMax = document.querySelector("#randomNumberMax");
  els.randomNumberDecimals = document.querySelector("#randomNumberDecimals");
  els.randomNumberPlaces = document.querySelector("#randomNumberPlaces");
  els.randomNumberAutoCopy = document.querySelector("#randomNumberAutoCopy");
  els.copyRandomNumber = document.querySelector("#copyRandomNumber");
  els.generateRandomNumber = document.querySelector("#generateRandomNumber");
  els.randomNumberOutput = document.querySelector("#randomNumberOutput");
  els.randomNumberStatus = document.querySelector("#randomNumberStatus");
  els.randomNumberHistory = document.querySelector("#randomNumberHistory");
  els.normalMin = document.querySelector("#normalMin");
  els.normalMax = document.querySelector("#normalMax");
  els.normalSampleSize = document.querySelector("#normalSampleSize");
  els.normalTrials = document.querySelector("#normalTrials");
  els.runNormalSimulation = document.querySelector("#runNormalSimulation");
  els.normalStatus = document.querySelector("#normalStatus");
  els.normalBars = document.querySelector("#normalBars");
  els.normalResults = document.querySelector("#normalResults");
  els.unitCircleAngle = document.querySelector("#unitCircleAngle");
  els.unitCircleFigure = document.querySelector("#unitCircleFigure");
  els.unitCircleResults = document.querySelector("#unitCircleResults");
  els.complexRadius = document.querySelector("#complexRadius");
  els.complexAngle = document.querySelector("#complexAngle");
  els.complexFigure = document.querySelector("#complexFigure");
  els.complexResults = document.querySelector("#complexResults");
  els.graphMode = document.querySelector("#graphMode");
  els.graphEquation2d = document.querySelector("#graphEquation2d");
  els.graphEquation3d = document.querySelector("#graphEquation3d");
  els.graphRange = document.querySelector("#graphRange");
  els.graphDraw = document.querySelector("#graphDraw");
  els.graphReset = document.querySelector("#graphReset");
  els.graphStatus = document.querySelector("#graphStatus");
  els.graphEquationPreview = document.querySelector("#graphEquationPreview");
  els.graph2dSvg = document.querySelector("#graph2dSvg");
  els.graph3dCanvas = document.querySelector("#graph3dCanvas");
  els.graphResults = document.querySelector("#graphResults");
  els.factorInput = document.querySelector("#factorInput");
  els.calculateFactors = document.querySelector("#calculateFactors");
  els.factorResults = document.querySelector("#factorResults");
  els.gcdLeft = document.querySelector("#gcdLeft");
  els.gcdRight = document.querySelector("#gcdRight");
  els.calculateGcd = document.querySelector("#calculateGcd");
  els.gcdResults = document.querySelector("#gcdResults");
  els.modClockGame = document.querySelector("#modClockGame");
  els.modClockDial = document.querySelector("#modClockDial");
  els.modClockPrompt = document.querySelector("#modClockPrompt");
  els.modClockStatus = document.querySelector("#modClockStatus");
  els.modClockDifficulty = document.querySelector("#modClockDifficulty");
  els.newModClock = document.querySelector("#newModClock");
  els.checkModClock = document.querySelector("#checkModClock");
  els.numberGamePanels = Array.from(document.querySelectorAll("[data-number-game]"));
  els.numberGamePrompts = Object.fromEntries(Array.from(document.querySelectorAll("[data-number-prompt]")).map((item) => [item.dataset.numberPrompt, item]));
  els.numberGameStatuses = Object.fromEntries(Array.from(document.querySelectorAll("[data-number-status]")).map((item) => [item.dataset.numberStatus, item]));
  els.numberGameChoices = Object.fromEntries(Array.from(document.querySelectorAll("[data-number-choices]")).map((item) => [item.dataset.numberChoices, item]));
  els.numberGameVisuals = Object.fromEntries(Array.from(document.querySelectorAll("[data-number-visual]")).map((item) => [item.dataset.numberVisual, item]));
  els.numberGameDifficulties = Object.fromEntries(Array.from(document.querySelectorAll("[data-number-difficulty]")).map((item) => [item.dataset.numberDifficulty, item]));
  els.graphPathsFigure = document.querySelector("#graphPathsFigure");
  els.scratchpadInput = document.querySelector("#scratchpadInput");
  els.duplicateScratchLine = document.querySelector("#duplicateScratchLine");
  els.duplicateScratchLineHeader = document.querySelector("#duplicateScratchLineHeader");
  els.duplicateScratchHint = document.querySelector("#duplicateScratchHint");
  els.scratchpadPreview = document.querySelector("#scratchpadPreview");
  els.scratchpadList = document.querySelector("#scratchpadList");
  els.scratchpadStatus = document.querySelector("#scratchpadStatus");
  els.scratchpadLayout = document.querySelector(".scratchpad-layout");
  els.scratchpadPlainView = document.querySelector("#scratchpadPlainView");
  els.scratchpadRenderedView = document.querySelector("#scratchpadRenderedView");
  els.scratchpadLineNumbers = document.querySelector("#scratchpadLineNumbers");
  els.newScratchpad = document.querySelector("#newScratchpad");
  els.renameScratchpad = document.querySelector("#renameScratchpad");
  els.copyScratchPlain = document.querySelector("#copyScratchPlain");
  els.copyScratchLatex = document.querySelector("#copyScratchLatex");
  els.copyScratchMarkdown = document.querySelector("#copyScratchMarkdown");
  els.exportScratchImage = document.querySelector("#exportScratchImage");
  els.exportScratchPng = document.querySelector("#exportScratchPng");
  els.shareScratchImage = document.querySelector("#shareScratchImage");
  els.exportScratchLatex = document.querySelector("#exportScratchLatex");
  els.importScratchLatex = document.querySelector("#importScratchLatex");
  els.scratchpadToolbar = document.querySelector(".scratchpad-toolbar");
}

function loadProgress() {
  const fallback = {
    version: 1,
    completedLessons: [],
    currentTopic: "Arithmetic",
    currentWorkspaceId: "arithmetic.long-addition.3x3",
    savedWorkspaces: ["Long addition", "Long subtraction", "Long multiplication", "Long division"],
    preferences: { mode: "guided", autoAdvance: true },
    recentActivity: []
  };

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return fallback;
    const parsed = JSON.parse(stored);
    return {
      ...fallback,
      ...parsed,
      savedWorkspaces: uniqueList([...(fallback.savedWorkspaces || []), ...(parsed.savedWorkspaces || [])]),
      preferences: { ...fallback.preferences, ...parsed.preferences }
    };
  } catch {
    return fallback;
  }
}

function loadScratchpads() {
  const fallbackPad = {
    id: createId("scratchpad"),
    title: "Differential equation work",
    text: [
      "dy/dt = 8ty",
      "(1/y)dy = 8t dt",
      "int (1/y)dy = int 8t dt",
      "ln|y| = 4t^2 + C",
      "y = Ce^(4t^2)"
    ].join("\n"),
    updatedAt: new Date().toISOString()
  };
  const fallback = {
    version: 1,
    activeSurface: "learn",
    activeScratchpadId: fallbackPad.id,
    showLineNumbers: false,
    scratchpads: [fallbackPad]
  };

  try {
    const stored = localStorage.getItem(SCRATCHPAD_STORAGE_KEY);
    if (!stored) return fallback;
    const parsed = JSON.parse(stored);
    const scratchpads = Array.isArray(parsed.scratchpads) && parsed.scratchpads.length
      ? parsed.scratchpads.map((pad) => ({
        id: pad.id || createId("scratchpad"),
        title: pad.title || "Untitled scratchpad",
        text: String(pad.text || ""),
        updatedAt: pad.updatedAt || new Date().toISOString()
      }))
      : fallback.scratchpads;
    return {
      ...fallback,
      ...parsed,
      scratchpads,
      activeScratchpadId: scratchpads.some((pad) => pad.id === parsed.activeScratchpadId)
        ? parsed.activeScratchpadId
        : scratchpads[0].id
    };
  } catch {
    return fallback;
  }
}

function loadGames() {
  const fallback = {
    version: 1,
    activeGame: "sudoku",
    sudoku: {
      size: 9,
      difficulty: "easy",
      seed: 0,
      selected: null,
      entries: {},
      puzzle: "",
      solution: "",
      signature: ""
    },
    modClock: {
      difficulty: "easy",
      seed: 0,
      selected: null,
      checked: false
    },
    primeFactors: {
      difficulty: "easy",
      seed: 0,
      selected: [],
      checked: false
    },
    gcdRace: {
      difficulty: "easy",
      seed: 0,
      selected: null,
      checked: false
    },
    divisibility: {
      difficulty: "easy",
      seed: 0,
      selected: null,
      checked: false
    },
    residueMatch: {
      difficulty: "easy",
      seed: 0,
      selected: [],
      checked: false
    },
    graphPaths: {
      difficulty: "easy",
      seed: 0,
      selected: null,
      checked: false
    }
  };

  try {
    const stored = localStorage.getItem(GAMES_STORAGE_KEY);
    if (!stored) return fallback;
    const parsed = JSON.parse(stored);
    return {
      ...fallback,
      ...parsed,
      activeGame: GAME_IDS.includes(parsed.activeGame) ? parsed.activeGame : fallback.activeGame,
      sudoku: {
        ...fallback.sudoku,
        ...(parsed.sudoku || {}),
        entries: parsed.sudoku?.entries || {}
      },
      modClock: {
        ...fallback.modClock,
        ...(parsed.modClock || {})
      },
      primeFactors: {
        ...fallback.primeFactors,
        ...(parsed.primeFactors || {})
      },
      gcdRace: {
        ...fallback.gcdRace,
        ...(parsed.gcdRace || {})
      },
      divisibility: {
        ...fallback.divisibility,
        ...(parsed.divisibility || {})
      },
      residueMatch: {
        ...fallback.residueMatch,
        ...(parsed.residueMatch || {})
      },
      graphPaths: {
        ...fallback.graphPaths,
        ...(parsed.graphPaths || {})
      }
    };
  } catch {
    return fallback;
  }
}

function loadTools() {
  const fallback = {
    version: 1,
    activeTool: "random-number",
    randomNumber: {
      min: 0,
      max: 99,
      decimals: false,
      decimalPlaces: 2,
      autoCopy: false,
      value: null,
      history: []
    },
    normalSimulator: {
      min: 0,
      max: 99,
      sampleSize: 30,
      trials: 1000,
      result: null
    },
    unitCircle: {
      angle: "pi/4"
    },
    complexPlane: {
      radius: 1,
      angle: "pi/4"
    },
    graphing: {
      mode: "2d",
      equation2d: "y = sin(x)",
      equation3d: "z = sin(x) + cos(y)",
      range: 10,
      centerX: 0,
      centerY: 0,
      yaw: -0.65,
      pitch: 0.55
    },
    numberTheory: {
      factorInput: 84,
      gcdLeft: 84,
      gcdRight: 126
    }
  };

  try {
    const stored = localStorage.getItem(TOOLS_STORAGE_KEY);
    if (!stored) return fallback;
    const parsed = JSON.parse(stored);
    return {
      ...fallback,
      ...parsed,
      activeTool: TOOL_IDS.includes(parsed.activeTool) ? parsed.activeTool : fallback.activeTool,
      randomNumber: {
        ...fallback.randomNumber,
        ...(parsed.randomNumber || {}),
        history: Array.isArray(parsed.randomNumber?.history) ? parsed.randomNumber.history.slice(0, 8) : []
      },
      normalSimulator: {
        ...fallback.normalSimulator,
        ...(parsed.normalSimulator || {})
      },
      unitCircle: {
        ...fallback.unitCircle,
        ...(parsed.unitCircle || {})
      },
      complexPlane: {
        ...fallback.complexPlane,
        ...(parsed.complexPlane || {})
      },
      graphing: {
        ...fallback.graphing,
        ...(parsed.graphing || {})
      },
      numberTheory: {
        ...fallback.numberTheory,
        ...(parsed.numberTheory || {})
      }
    };
  } catch {
    return fallback;
  }
}

function saveGames(activity) {
  safeLocalStorageSet(GAMES_STORAGE_KEY, JSON.stringify(state.games, null, 2), "Game progress could not be saved in this browser.");
  if (activity) {
    state.progress.recentActivity = [
      { label: activity, at: new Date().toISOString() },
      ...state.progress.recentActivity.filter((item) => item.label !== activity)
    ].slice(0, 8);
    safeLocalStorageSet(STORAGE_KEY, JSON.stringify(state.progress, null, 2), "Recent activity could not be saved in this browser.");
    updateProgressPanel();
  }
}

function saveTools(activity) {
  safeLocalStorageSet(TOOLS_STORAGE_KEY, JSON.stringify(state.tools, null, 2), "Tool settings could not be saved in this browser.");
  if (activity) {
    state.progress.recentActivity = [
      { label: activity, at: new Date().toISOString() },
      ...state.progress.recentActivity.filter((item) => item.label !== activity)
    ].slice(0, 8);
    safeLocalStorageSet(STORAGE_KEY, JSON.stringify(state.progress, null, 2), "Recent activity could not be saved in this browser.");
    updateProgressPanel();
  }
}

function safeLocalStorageSet(key, value, message = "Progress could not be saved in this browser.") {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch {
    if (els.status && !state.showIntro) setStatus(message, "hint");
    if (els.scratchpadStatus && state.activeSurface === "scratchpad") setScratchpadStatus(message);
    return false;
  }
}

function createId(prefix) {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

function uniqueList(items) {
  return [...new Set(items.filter(Boolean))];
}

function isPhysicsWorkspaceId(id) {
  return String(id || "").startsWith("physics.");
}

function slugifyRoutePart(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function routeSurfaceForWorkspace(id) {
  return isPhysicsWorkspaceId(id) ? "physics" : "learn";
}

function routePrefixForSurface(surface) {
  if (surface === "physics") return "physics";
  if (surface === "tools") return "tools";
  if (surface === "games") return "games";
  if (surface === "explorations") return "explorations";
  if (surface === "scratchpad") return "scratchpad";
  return "math";
}

function findExploration(id) {
  return window.CarryExplorations?.find?.(id) || EXPLORATION_ENTRIES.find((entry) => entry.id === id) || EXPLORATION_ENTRIES[0] || null;
}

function routeGroupsForSurface(surface) {
  return surface === "physics" ? physicsTopicGroups : topicGroups;
}

function findRouteMatch(surface, topicSlug, lessonSlug) {
  for (const group of routeGroupsForSurface(surface)) {
    if (slugifyRoutePart(group.name) !== topicSlug) continue;
    const lesson = lessonsForGroup(group).find((item) => slugifyRoutePart(item.title) === lessonSlug);
    if (lesson) return { surface, topic: group.name, workspaceId: lesson.id };
  }
  return null;
}

function findRouteForWorkspace(workspaceId) {
  const surface = routeSurfaceForWorkspace(workspaceId);
  for (const group of routeGroupsForSurface(surface)) {
    const lesson = lessonsForGroup(group).find((item) => item.id === workspaceId);
    if (lesson) {
      return {
        surface,
        topic: group.name,
        path: `/${routePrefixForSurface(surface)}/${slugifyRoutePart(group.name)}/${slugifyRoutePart(lesson.title)}`
      };
    }
  }
  return null;
}

function resolveRouteFromPath() {
  const parts = window.location.pathname.split("/").filter(Boolean);
  if (parts.length === 0) return null;
  if (parts[0] === "scratchpad") return { surface: "scratchpad" };
  if (parts[0] === "tools") {
    const tool = TOOL_IDS.includes(parts[1]) ? parts[1] : "random-number";
    return {
      surface: "tools",
      tool
    };
  }
  if (parts[0] === "games") {
    const game = GAME_IDS.includes(parts[1]) ? parts[1] : "sudoku";
    return {
      surface: "games",
      game
    };
  }
  if (parts[0] === "explorations") {
    const exploration = findExploration(parts[1])?.id || EXPLORATION_DEFAULT_ID;
    return {
      surface: "explorations",
      exploration
    };
  }
  if (parts[0] !== "math" && parts[0] !== "physics") return null;
  if (parts.length < 3) return null;
  return findRouteMatch(parts[0] === "physics" ? "physics" : "learn", parts[1], parts[2]);
}

function updateUrlFromState(options = {}) {
  const route = state.activeSurface === "scratchpad"
    ? { path: "/scratchpad" }
    : state.activeSurface === "tools"
      ? { path: `/tools/${TOOL_IDS.includes(state.tools.activeTool) ? state.tools.activeTool : "random-number"}` }
    : state.activeSurface === "games"
      ? { path: `/games/${GAME_IDS.includes(state.games.activeGame) ? state.games.activeGame : "sudoku"}` }
    : state.activeSurface === "explorations"
      ? { path: `/explorations/${findExploration(state.activeExplorationId)?.id || EXPLORATION_DEFAULT_ID}` }
    : findRouteForWorkspace(state.activeWorkspaceId);
  if (!route) return;
  const nextUrl = `${route.path}${window.location.search}`;
  if (nextUrl === `${window.location.pathname}${window.location.search}`) return;
  const method = options.replace ? "replaceState" : "pushState";
  window.history[method]({}, "", nextUrl);
}

function applyRouteState(routeState) {
  if (!routeState) return;
  state.activeSurface = routeState.surface;
  if (routeState.game) state.games.activeGame = routeState.game;
  if (routeState.tool) state.tools.activeTool = routeState.tool;
  if (routeState.exploration) state.activeExplorationId = routeState.exploration;
  if (routeState.topic) state.activeTopic = routeState.topic;
  if (routeState.workspaceId) {
    state.activeWorkspaceId = routeState.workspaceId;
    state.showIntro = workspaceRegistry[state.activeWorkspaceId]?.status !== "planned";
  }
  ensureSurfaceWorkspace();
  renderSurface();
  renderTopics();
  if (state.activeSurface === "scratchpad") {
    renderScratchpad();
  } else if (state.activeSurface === "tools") {
    renderTools();
  } else if (state.activeSurface === "games") {
    renderGames();
  } else if (state.activeSurface === "explorations") {
    renderExplorations();
  } else {
    renderWorkspace();
  }
  saveProgress("Opened route");
}

function currentTopicGroups() {
  if (state.activeSurface === "physics") return physicsTopicGroups;
  return [...topicGroups].sort((a, b) => mathCategoryRank(a) - mathCategoryRank(b));
}

function mathCategoryRank(group) {
  const category = mathTopicCategories.get(group.name);
  const rank = mathCategoryOrder.indexOf(category);
  return rank === -1 ? mathCategoryOrder.length : rank;
}

function ensureSurfaceWorkspace() {
  if (state.activeSurface === "tools") return;
  if (state.activeSurface === "games") return;
  if (state.activeSurface === "explorations") return;

  if (state.activeSurface === "physics") {
    if (!isPhysicsWorkspaceId(state.activeWorkspaceId)) {
      state.activeTopic = PHYSICS_DEFAULT_TOPIC;
      state.activeWorkspaceId = PHYSICS_DEFAULT_WORKSPACE;
      state.showIntro = true;
    }
    return;
  }

  if (state.activeSurface !== "scratchpad" && isPhysicsWorkspaceId(state.activeWorkspaceId)) {
    state.activeTopic = MATH_DEFAULT_TOPIC;
    state.activeWorkspaceId = MATH_DEFAULT_WORKSPACE;
    state.showIntro = true;
  }
}

function saveProgress(activity) {
  state.progress.currentTopic = state.activeTopic;
  state.progress.currentWorkspaceId = state.activeWorkspaceId;
  state.progress.preferences.mode = state.mode;
  state.progress.preferences.autoAdvance = els.autoAdvance.checked;
  if (activity) {
    state.progress.recentActivity = [
      { label: activity, at: new Date().toISOString() },
      ...state.progress.recentActivity.filter((item) => item.label !== activity)
    ].slice(0, 8);
  }
  safeLocalStorageSet(STORAGE_KEY, JSON.stringify(state.progress, null, 2), "Progress could not be saved in this browser.");
  updateProgressPanel();
}

function renderTopics() {
  els.topicList.innerHTML = "";
  let currentCategory = "";
  for (const group of currentTopicGroups()) {
    const nextCategory = topicCategoryForGroup(group);
    if (nextCategory && nextCategory !== currentCategory) {
      const categoryHeading = document.createElement("p");
      categoryHeading.className = "topic-category-heading";
      categoryHeading.textContent = nextCategory;
      els.topicList.append(categoryHeading);
      currentCategory = nextCategory;
    }

    const details = document.createElement("details");
    details.className = "topic-group";
    details.open = group.name === state.activeTopic;

    const summary = document.createElement("summary");
    summary.className = "topic-summary";
    summary.textContent = group.name;
    summary.setAttribute("aria-current", group.name === state.activeTopic && lessonsForGroup(group).length === 0 ? "true" : "false");
    details.append(summary);

    if (group.sections?.length > 0) {
      const lessonList = document.createElement("div");
      lessonList.className = "lesson-list";
      for (const section of group.sections) {
        const sectionDetails = document.createElement("details");
        sectionDetails.className = "curriculum-section";
        sectionDetails.open = section.lessons.some((lesson) => lesson.id === state.activeWorkspaceId);

        const sectionSummary = document.createElement("summary");
        sectionSummary.className = "curriculum-section-summary";
        sectionSummary.textContent = section.title;
        sectionDetails.append(sectionSummary);

        const sectionLessons = document.createElement("div");
        sectionLessons.className = "curriculum-section-lessons";
        for (const lesson of section.lessons) {
          sectionLessons.append(createLessonButton(lesson, group.name));
        }
        sectionDetails.append(sectionLessons);
        lessonList.append(sectionDetails);
      }
      details.append(lessonList);
    } else {
      details.append(createLessonButton({ id: group.name, title: "Planned" }, group.name));
    }

    els.topicList.append(details);
  }
}

function topicCategoryForGroup(group) {
  if (state.activeSurface !== "learn") return "";
  return mathTopicCategories.get(group.name) || "";
}

function lessonsForGroup(group) {
  return group.sections?.flatMap((section) => section.lessons) || group.lessons || [];
}

function createLessonButton(lesson, topic) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `lesson-nav-button ${workspaceRegistry[lesson.id] ? "" : "planned"}`.trim();
  button.textContent = lesson.title;
  button.dataset.topic = topic;
  button.dataset.workspaceId = lesson.id;
  button.setAttribute("aria-current", lesson.id === state.activeWorkspaceId ? "true" : "false");
  return button;
}

function renderWorkspace() {
  const workspace = getActiveWorkspace();
  configureModeTabs(workspace);
  els.currentTopic.textContent = state.activeTopic;
  els.lessonTitle.textContent = workspace.title;
  els.grid.className = `math-grid ${workspace.type}-grid`;
  els.grid.innerHTML = "";
  state.checkedCells.clear();
  state.autoAdvancedToStep = null;

  if (workspace.status === "planned") {
    renderPlannedWorkspace(workspace);
    return;
  }

  if (state.showIntro) {
    renderIntroWorkspace(workspace);
    return;
  }

  setWorkspaceView("problem");
  updateProblemSetup(workspace);

  if (workspace.type === "concept") {
    state.currentModel = buildConceptModel(workspace);
    renderConceptGrid(state.currentModel);
  } else if (workspace.type === "equation") {
    state.currentModel = buildEquationModel(workspace.problem);
    renderEquationGrid(state.currentModel);
  } else if (workspace.type === "inequality") {
    state.currentModel = buildInequalityModel(workspace.problem);
    renderInequalityGrid(state.currentModel);
  } else if (workspace.type === "system") {
    state.currentModel = buildSystemModel(workspace.problem);
    renderSystemGrid(state.currentModel);
  } else if (workspace.type === "factoring") {
    state.currentModel = buildFactoringModel(workspace.problem);
    renderFactoringGrid(state.currentModel);
  } else if (workspace.type === "quadratic") {
    state.currentModel = buildQuadraticModel(workspace.problem);
    renderQuadraticGrid(state.currentModel);
  } else if (workspace.type === "addition") {
    state.currentModel = buildAdditionModel(workspace.problem.top, workspace.problem.bottom);
    renderAdditionGrid(state.currentModel);
  } else if (workspace.type === "subtraction") {
    state.currentModel = buildSubtractionModel(workspace.problem.top, workspace.problem.bottom);
    renderSubtractionGrid(state.currentModel);
  } else if (workspace.type === "division") {
    state.currentModel = buildDivisionModel(workspace.problem.top, workspace.problem.bottom);
    renderDivisionGrid(state.currentModel);
  } else {
    state.currentModel = buildMultiplicationModel(workspace.problem.top, workspace.problem.bottom);
    renderMultiplicationGrid(state.currentModel);
  }
  setStatus(workspaceStartStatus(workspace), "");
  setActiveStep();
  focusConceptBlank();
  updatePrimaryAction();
  drawOverlays();
  updateStepText();
}

function workspaceStartStatus(workspace) {
  if (workspace.type === "concept") {
    return state.currentModel?.cells?.[0]?.choices?.length
      ? "Choose an answer, then Check."
      : "Enter the answer, then Check.";
  }
  if (["equation", "inequality", "system", "factoring", "quadratic"].includes(workspace.type)) {
    return "Enter the active step, then check it.";
  }
  return "Place the first digit in the active box.";
}

function focusConceptBlank() {
  if (state.showIntro || state.currentModel?.cells?.[0]?.kind !== "conceptAnswer") return;
  const input = els.grid.querySelector(".concept-answer-input:not(.concept-answer-choice-control)");
  if (!input || input.disabled) return;
  window.setTimeout(() => {
    if (!document.body.contains(input) || input.disabled) return;
    input.focus({ preventScroll: true });
    input.select();
  }, 0);
}

function setWorkspaceView(view) {
  const isIntro = view === "intro";
  const isProblem = view === "problem";
  const workspace = getActiveWorkspace();
  els.lessonIntro.hidden = !isIntro;
  els.setupPanel.hidden = !isProblem;
  els.status.hidden = !isProblem;
  els.gridShell.hidden = !isProblem;
  els.workspaceTools.hidden = !isProblem || workspace.type === "concept";
}

function updatePrimaryAction() {
  if (!els.checkStep) return;
  const workspace = getActiveWorkspace();
  const isComplete = isCurrentProblemComplete();
  const actionMode = isComplete ? (isLastProblemInSet() ? "restart" : "next") : "check";
  const guidedChoice = workspace.type === "concept" && state.mode === "guided";
  if (guidedChoice && !isComplete) {
    els.checkStep.hidden = false;
    els.checkStep.disabled = true;
    els.checkStep.style.visibility = "hidden";
    setPrimaryActionButton("check");
    updateLocalConceptActions(isComplete);
    return;
  }
  els.checkStep.hidden = false;
  els.checkStep.disabled = false;
  els.checkStep.style.visibility = "";
  setPrimaryActionButton(actionMode);
  updateLocalConceptActions(isComplete);
}

function setPrimaryActionButton(mode) {
  if (els.checkStep.dataset.actionMode === mode) return;
  els.checkStep.dataset.actionMode = mode;
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("aria-hidden", "true");
  const paths = mode === "restart"
    ? ["M3 12a9 9 0 1 0 3-6.7", "M3 4v6h6"]
    : mode === "next"
      ? ["M5 12h14", "m13 5 6-5-6-5"]
      : ["m20 6-11 11-5-5"];
  paths.forEach((value) => {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", value);
    svg.append(path);
  });
  const label = mode === "restart" ? "Restart" : mode === "next" ? "Next" : "Check";
  els.checkStep.replaceChildren(svg, document.createTextNode(label));
}

function updateLocalConceptActions(isComplete) {
  els.grid?.querySelectorAll(".concept-check-button").forEach((button) => {
    button.textContent = isComplete ? (isLastProblemInSet() ? "⏎ Restart" : "⏎ Continue") : "⏎ Check";
    button.classList.toggle("primary-action", isComplete);
  });
}

function currentSudokuSettings() {
  const requestedSize = Number.parseInt(state.games.sudoku.size, 10);
  const size = sudokuBoards[requestedSize] ? requestedSize : 9;
  const difficulty = ["easy", "medium", "hard"].includes(state.games.sudoku.difficulty)
    ? state.games.sudoku.difficulty
    : "easy";
  const seed = Number.isFinite(Number(state.games.sudoku.seed)) ? Number(state.games.sudoku.seed) : 0;
  return { size, difficulty, seed, config: sudokuBoards[size] };
}

function seededRandom(seed) {
  let value = Math.abs(Math.trunc(seed)) % 2147483647;
  if (value === 0) value = 1;
  return () => {
    value = (value * 48271) % 2147483647;
    return value / 2147483647;
  };
}

function shuffleWithRandom(items, random) {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }
  return result;
}

function shuffledSudokuIndexes(size, difficulty, seed) {
  const difficultyOffset = { easy: 11, medium: 37, hard: 73 }[difficulty] || 11;
  const random = seededRandom((size * 1009) + (seed * 7919) + difficultyOffset);
  return shuffleWithRandom(Array.from({ length: size * size }, (_, index) => index), random);
}

function shuffledSudokuUnits(size, unitSize, random) {
  const unitCount = size / unitSize;
  return shuffleWithRandom(Array.from({ length: unitCount }, (_, unit) => unit), random)
    .flatMap((unit) => shuffleWithRandom(Array.from({ length: unitSize }, (_, offset) => unit * unitSize + offset), random));
}

function generateSudokuSolution(size, seed) {
  const config = sudokuBoards[size];
  const random = seededRandom((size * 1543) + (seed * 9973) + 19);
  const rows = shuffledSudokuUnits(size, config.blockRows, random);
  const cols = shuffledSudokuUnits(size, config.blockCols, random);
  const digits = shuffleWithRandom(Array.from({ length: size }, (_, index) => String(index + 1)), random);
  const baseValue = (row, col) => (row * config.blockCols + Math.floor(row / config.blockRows) + col) % size;
  return rows.flatMap((row) => cols.map((col) => digits[baseValue(row, col)])).join("");
}

function generateSudokuPuzzle(size, difficulty, seed) {
  const config = sudokuBoards[size];
  const solution = generateSudokuSolution(size, seed);
  const clueCount = config.clues[difficulty] || config.clues.easy;
  const clues = new Set(shuffledSudokuIndexes(size, difficulty, seed).slice(0, clueCount));
  const puzzle = Array.from(solution, (digit, index) => (clues.has(index) ? digit : "0")).join("");
  return { puzzle, solution };
}

function ensureSudokuPuzzle() {
  const { size, difficulty, seed } = currentSudokuSettings();
  const signature = `${size}:${difficulty}:${seed}`;
  if (state.games.sudoku.signature === signature && state.games.sudoku.puzzle && state.games.sudoku.solution) return;
  const generated = generateSudokuPuzzle(size, difficulty, seed);
  state.games.sudoku.puzzle = generated.puzzle;
  state.games.sudoku.solution = generated.solution;
  state.games.sudoku.signature = signature;
  state.games.sudoku.entries = {};
  state.games.sudoku.selected = null;
  state.games.sudoku.checked = false;
  saveGames();
}

function sudokuValues() {
  const { size, difficulty, seed, config } = currentSudokuSettings();
  ensureSudokuPuzzle();
  const puzzle = state.games.sudoku.puzzle || generateSudokuPuzzle(size, difficulty, seed).puzzle;
  const solution = state.games.sudoku.solution || generateSudokuSolution(size, seed);
  const entries = state.games.sudoku.entries || {};
  const values = Array.from({ length: size * size }, (_, index) => {
    if (puzzle[index] !== "0") return puzzle[index];
    return String(entries[index] || "");
  });
  return { size, difficulty, seed, config, puzzle, solution, values };
}

function sudokuConflictIndexes(values, size, config) {
  const conflicts = new Set();
  const markGroup = (indexes) => {
    const seen = new Map();
    indexes.forEach((index) => {
      const value = values[index];
      if (!value) return;
      if (!seen.has(value)) {
        seen.set(value, [index]);
      } else {
        seen.get(value).push(index);
      }
    });
    seen.forEach((group) => {
      if (group.length > 1) group.forEach((index) => conflicts.add(index));
    });
  };

  for (let row = 0; row < size; row += 1) {
    markGroup(Array.from({ length: size }, (_, col) => row * size + col));
  }
  for (let col = 0; col < size; col += 1) {
    markGroup(Array.from({ length: size }, (_, row) => row * size + col));
  }
  for (let blockRow = 0; blockRow < size; blockRow += config.blockRows) {
    for (let blockCol = 0; blockCol < size; blockCol += config.blockCols) {
      const indexes = [];
      for (let row = 0; row < config.blockRows; row += 1) {
        for (let col = 0; col < config.blockCols; col += 1) {
          indexes.push((blockRow + row) * size + blockCol + col);
        }
      }
      markGroup(indexes);
    }
  }
  return conflicts;
}

function renderSudoku() {
  if (!els.sudokuBoard || !els.sudokuPad) return;
  const { size, difficulty, config, puzzle, solution, values } = sudokuValues();
  const storedSelected = state.games.sudoku.selected;
  const selected = Number.isInteger(storedSelected) && storedSelected >= 0 && storedSelected < size * size
    ? storedSelected
    : null;
  const conflicts = sudokuConflictIndexes(values, size, config);
  const checked = Boolean(state.games.sudoku.checked);
  const selectedValue = selected !== null ? values[selected] : "";

  els.sudokuSize.value = String(size);
  els.sudokuDifficulty.value = difficulty;
  els.sudokuBoard.className = `sudoku-board sudoku-board-${size}`;
  els.sudokuBoard.style.setProperty("--sudoku-size", size);
  els.sudokuBoard.setAttribute("aria-label", `${size} by ${size} Sudoku board`);
  els.sudokuBoard.innerHTML = "";

  values.forEach((value, index) => {
    const row = Math.floor(index / size);
    const col = index % size;
    const isGiven = puzzle[index] !== "0";
    const button = document.createElement("button");
    button.type = "button";
    button.className = "sudoku-cell";
    button.dataset.index = String(index);
    button.textContent = value;
    button.setAttribute("aria-label", `Row ${row + 1}, column ${col + 1}${isGiven ? `, given ${value}` : value ? `, ${value}` : ", empty"}`);
    if (isGiven) button.classList.add("given");
    if (selected === index) button.classList.add("selected");
    if (selectedValue && value === selectedValue) button.classList.add("same-value");
    if (conflicts.has(index)) button.classList.add("conflict");
    if (checked && !isGiven && value && value !== solution[index]) button.classList.add("wrong");
    if ((col + 1) % config.blockCols === 0 && col < size - 1) button.classList.add("block-right");
    if ((row + 1) % config.blockRows === 0 && row < size - 1) button.classList.add("block-bottom");
    els.sudokuBoard.append(button);
  });

  els.sudokuPad.innerHTML = "";
  for (let value = 1; value <= size; value += 1) {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.sudokuValue = String(value);
    button.textContent = String(value);
    button.setAttribute("aria-label", `Enter ${value}`);
    if (String(value) === selectedValue) button.classList.add("active");
    els.sudokuPad.append(button);
  }
  const erase = document.createElement("button");
  erase.type = "button";
  erase.dataset.sudokuValue = "";
  erase.className = "sudoku-erase";
  erase.textContent = "Erase";
  els.sudokuPad.append(erase);

  els.sudokuStatus.textContent = sudokuStatusMessage({ values, solution, puzzle, conflicts, checked, selected, size });
}

function sudokuStatusMessage({ values, solution, puzzle, conflicts, checked, selected, size }) {
  const filled = values.filter(Boolean).length;
  const remaining = (size * size) - filled;
  const complete = remaining === 0;
  const wrongCount = values.reduce((count, value, index) => {
    if (puzzle[index] !== "0" || !value) return count;
    return value === solution[index] ? count : count + 1;
  }, 0);

  if (complete && wrongCount === 0 && conflicts.size === 0) return "Solved. Press Return or New for another board.";
  if (conflicts.size > 0) return "A row, column, or box has the same number twice.";
  if (checked && wrongCount > 0) return `${wrongCount} ${wrongCount === 1 ? "entry does" : "entries do"} not match the solution yet. Fix highlighted squares, then check again.`;
  if (checked && remaining > 0) return `No mistakes so far. ${remaining} ${remaining === 1 ? "square" : "squares"} left.`;
  if (selected !== null && puzzle[selected] !== "0") return "That square is given. Choose an open square.";
  if (selected !== null) return "Enter a number, or use Backspace to erase.";
  return "Choose a square, then enter a number.";
}

function renderGames() {
  const activeGame = GAME_IDS.includes(state.games.activeGame) ? state.games.activeGame : "sudoku";
  state.games.activeGame = activeGame;
  els.gameTabs.forEach((tab) => {
    tab.setAttribute("aria-selected", tab.dataset.game === activeGame ? "true" : "false");
  });
  els.sudokuGame.hidden = activeGame !== "sudoku";
  els.modClockGame.hidden = activeGame !== "mod-clock";
  els.numberGamePanels.forEach((panel) => {
    panel.hidden = panel.dataset.numberGame !== activeGame;
  });
  renderSudoku();
  renderModClock();
  renderNumberGames();
}

function setActiveGame(game) {
  state.games.activeGame = GAME_IDS.includes(game) ? game : "sudoku";
  saveGames(`Opened ${gameLabel(state.games.activeGame)}`);
  renderGames();
  updateUrlFromState();
}

function updateSudokuSettings(partial, activity) {
  state.games.sudoku = {
    ...state.games.sudoku,
    ...partial,
    entries: partial.entries || {},
    selected: partial.selected ?? null,
    checked: false
  };
  saveGames(activity);
  renderSudoku();
}

function selectSudokuCell(index) {
  const { size } = currentSudokuSettings();
  if (!Number.isInteger(index) || index < 0 || index >= size * size) return;
  state.games.sudoku.selected = index;
  saveGames();
  renderSudoku();
}

function setSudokuValue(value) {
  const { size, puzzle } = sudokuValues();
  const selected = Number.isInteger(state.games.sudoku.selected) ? state.games.sudoku.selected : null;
  if (selected === null || selected < 0 || selected >= size * size || puzzle[selected] !== "0") return;
  const entries = { ...(state.games.sudoku.entries || {}) };
  if (value) {
    entries[selected] = String(value);
  } else {
    delete entries[selected];
  }
  state.games.sudoku.entries = entries;
  state.games.sudoku.checked = false;
  saveGames("Updated Sudoku");
  renderSudoku();
}

function moveSudokuSelection(deltaRow, deltaCol) {
  const { size } = currentSudokuSettings();
  const current = Number.isInteger(state.games.sudoku.selected) ? state.games.sudoku.selected : 0;
  const row = Math.min(size - 1, Math.max(0, Math.floor(current / size) + deltaRow));
  const col = Math.min(size - 1, Math.max(0, (current % size) + deltaCol));
  selectSudokuCell(row * size + col);
}

function checkSudoku() {
  state.games.sudoku.checked = true;
  saveGames("Checked Sudoku");
  renderSudoku();
}

function isSudokuSolved() {
  const { values, solution, puzzle, size, config } = sudokuValues();
  if (values.filter(Boolean).length !== size * size) return false;
  if (sudokuConflictIndexes(values, size, config).size > 0) return false;
  return values.every((value, index) => puzzle[index] !== "0" || value === solution[index]);
}

function clearSudoku() {
  state.games.sudoku.entries = {};
  state.games.sudoku.checked = false;
  saveGames("Cleared Sudoku");
  renderSudoku();
}

function newSudoku() {
  updateSudokuSettings({
    seed: (Number(state.games.sudoku.seed) || 0) + 1,
    entries: {},
    selected: null
  }, "Started a new Sudoku");
}

function cryptoUint32() {
  if (window.crypto?.getRandomValues) {
    const values = new Uint32Array(1);
    window.crypto.getRandomValues(values);
    return values[0];
  }
  return Math.floor(Math.random() * 4294967296);
}

function cryptoUnit() {
  const high = cryptoUint32() >>> 5;
  const low = cryptoUint32() >>> 6;
  return ((high * 67108864) + low) / 9007199254740992;
}

function randomIntegerInclusive(min, max) {
  const low = Math.ceil(Math.min(min, max));
  const high = Math.floor(Math.max(min, max));
  const range = high - low + 1;
  if (!Number.isFinite(range) || range <= 1) return low;
  if (range > 4294967296) {
    return low + Math.floor(cryptoUnit() * range);
  }
  const limit = 4294967296 - (4294967296 % range);
  let value = cryptoUint32();
  while (value >= limit) value = cryptoUint32();
  return low + (value % range);
}

function clampRandomNumberSettings(settings) {
  const min = Number.isFinite(Number(settings.min)) ? Number(settings.min) : 0;
  const max = Number.isFinite(Number(settings.max)) ? Number(settings.max) : 99;
  const decimalPlaces = Math.min(6, Math.max(1, Math.trunc(Number(settings.decimalPlaces) || 2)));
  return {
    min,
    max,
    decimals: Boolean(settings.decimals),
    decimalPlaces,
    autoCopy: Boolean(settings.autoCopy)
  };
}

function currentRandomNumberSettings() {
  return clampRandomNumberSettings(state.tools.randomNumber || {});
}

function formatRandomNumber(value, decimals, decimalPlaces) {
  if (!decimals) return String(value);
  return Number(value).toFixed(decimalPlaces).replace(/\.?0+$/u, "");
}

function generateRandomNumberValue(settings) {
  const min = Math.min(settings.min, settings.max);
  const max = Math.max(settings.min, settings.max);
  if (!settings.decimals) return randomIntegerInclusive(min, max);
  const raw = min + (cryptoUnit() * (max - min));
  return Number(raw.toFixed(settings.decimalPlaces));
}

function updateRandomNumberSettings() {
  const next = clampRandomNumberSettings({
    min: els.randomNumberMin.value,
    max: els.randomNumberMax.value,
    decimals: els.randomNumberDecimals.checked,
    decimalPlaces: els.randomNumberPlaces.value,
    autoCopy: els.randomNumberAutoCopy.checked
  });
  state.tools.randomNumber = {
    ...state.tools.randomNumber,
    ...next
  };
  saveTools("Changed Random Number settings");
  renderRandomNumber();
}

function generateRandomNumber() {
  const settings = currentRandomNumberSettings();
  const value = generateRandomNumberValue(settings);
  const formatted = formatRandomNumber(value, settings.decimals, settings.decimalPlaces);
  state.tools.randomNumber = {
    ...state.tools.randomNumber,
    ...settings,
    value: formatted,
    history: [formatted, ...(state.tools.randomNumber.history || [])].slice(0, 8)
  };
  saveTools("Generated a random number");
  renderRandomNumber();
  if (settings.autoCopy || state.tools.randomNumber.autoCopy) copyText(formatted);
}

function renderRandomNumber() {
  if (!els.randomNumberOutput) return;
  const settings = currentRandomNumberSettings();
  const value = state.tools.randomNumber?.value;
  const history = Array.isArray(state.tools.randomNumber?.history) ? state.tools.randomNumber.history : [];
  els.randomNumberMin.value = String(settings.min);
  els.randomNumberMax.value = String(settings.max);
  els.randomNumberDecimals.checked = settings.decimals;
  els.randomNumberPlaces.value = String(settings.decimalPlaces);
  els.randomNumberAutoCopy.checked = Boolean(state.tools.randomNumber?.autoCopy);
  els.randomNumberPlaces.disabled = !settings.decimals;
  els.randomNumberOutput.textContent = value === null || value === undefined ? "—" : String(value);
  els.randomNumberStatus.textContent = settings.decimals
    ? `Range ${Math.min(settings.min, settings.max)} to ${Math.max(settings.min, settings.max)}, up to ${settings.decimalPlaces} decimal places.`
    : `Range ${Math.ceil(Math.min(settings.min, settings.max))} to ${Math.floor(Math.max(settings.min, settings.max))}, whole numbers only.`;
  els.randomNumberHistory.innerHTML = "";
  if (!history.length) {
    const empty = document.createElement("li");
    empty.textContent = "No numbers yet.";
    els.randomNumberHistory.append(empty);
    return;
  }
  history.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    els.randomNumberHistory.append(li);
  });
}

function setActiveTool(tool) {
  state.tools.activeTool = TOOL_IDS.includes(tool) ? tool : "random-number";
  saveTools(`Opened ${toolLabel(state.tools.activeTool)}`);
  renderTools();
  updateUrlFromState();
}

function toolLabel(tool) {
  return {
    "random-number": "Random Number",
    "normal-simulator": "Normal Simulator",
    "unit-circle": "Unit Circle",
    "complex-plane": "Complex Plane",
    graphing: "Graphing",
    "number-theory": "Number Theory"
  }[tool] || "Random Number";
}

function renderTools() {
  const activeTool = TOOL_IDS.includes(state.tools.activeTool) ? state.tools.activeTool : "random-number";
  state.tools.activeTool = activeTool;
  document.body.dataset.activeTool = activeTool;
  els.toolTabs.forEach((tab) => {
    tab.setAttribute("aria-selected", tab.dataset.tool === activeTool ? "true" : "false");
  });
  els.toolPanels.forEach((panel) => {
    panel.hidden = panel.dataset.toolPanel !== activeTool;
  });
  populateAngleSelects();
  renderRandomNumber();
  renderNormalSimulator();
  renderUnitCircle();
  renderComplexPlane();
  renderGraphingTool();
  renderNumberTheoryTools();
}

function renderExplorations() {
  if (!els.explorationsPanel || !els.explorationList || !els.explorationArticle) return;
  const entries = Array.isArray(window.CarryExplorations?.entries) ? window.CarryExplorations.entries : EXPLORATION_ENTRIES;
  els.explorationList.innerHTML = "";
  if (!entries.length) {
    els.explorationArticle.replaceChildren(createTextBlock("No explorations are available yet."));
    return;
  }

  const activeEntry = findExploration(state.activeExplorationId) || entries[0];
  state.activeExplorationId = activeEntry.id;
  entries.forEach((entry) => {
    const button = document.createElement("button");
    button.className = "exploration-list-button";
    button.type = "button";
    button.dataset.explorationId = entry.id;
    button.setAttribute("aria-current", entry.id === activeEntry.id ? "true" : "false");
    const date = document.createElement("span");
    date.textContent = formatExplorationDate(entry.date);
    const title = document.createElement("strong");
    title.textContent = entry.title;
    button.append(date, title);
    els.explorationList.append(button);
  });

  els.explorationArticle.replaceChildren(renderExplorationArticle(activeEntry));
}

function formatExplorationDate(date) {
  const parsed = new Date(`${date}T12:00:00`);
  if (Number.isNaN(parsed.getTime())) return String(date || "");
  return parsed.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
}

function createTextBlock(text) {
  const p = document.createElement("p");
  p.textContent = text;
  return p;
}

function renderExplorationArticle(entry) {
  const fragment = document.createDocumentFragment();
  const header = document.createElement("header");
  header.className = "exploration-entry-header";
  const date = document.createElement("p");
  date.className = "eyebrow";
  date.textContent = formatExplorationDate(entry.date);
  const title = document.createElement("h3");
  title.textContent = entry.title;
  const deck = document.createElement("p");
  deck.className = "exploration-deck";
  deck.textContent = entry.deck;
  header.append(date, title, deck);
  if (entry.tags?.length) {
    const tags = document.createElement("div");
    tags.className = "exploration-tags";
    entry.tags.forEach((tag) => {
      const item = document.createElement("span");
      item.textContent = tag;
      tags.append(item);
    });
    header.append(tags);
  }
  fragment.append(header);

  const figure = renderExplorationFigure(entry.figure);
  if (figure) fragment.append(figure);

  (entry.sections || []).forEach((section) => {
    const sectionEl = document.createElement("section");
    sectionEl.className = "exploration-section";
    if (section.heading) {
      const heading = document.createElement("h4");
      heading.textContent = section.heading;
      sectionEl.append(heading);
    }
    (section.body || []).forEach((text) => sectionEl.append(createTextBlock(text)));
    fragment.append(sectionEl);
  });

  const response = renderExplorationResponse(entry.hiddenResponse);
  if (response) fragment.append(response);
  return fragment;
}

function renderExplorationFigure(figure) {
  if (!figure) return null;
  const wrapper = document.createElement("figure");
  wrapper.className = "exploration-figure";
  if (figure.type === "binary-signature") {
    renderBinarySignature(wrapper, {
      signature: figure.signature,
      interactive: false
    });
  }
  if (figure.caption) {
    const caption = document.createElement("figcaption");
    caption.textContent = figure.caption;
    wrapper.append(caption);
  }
  return wrapper;
}

function renderExplorationResponse(response) {
  if (!response) return null;
  const details = document.createElement("details");
  details.className = "exploration-response";
  const summary = document.createElement("summary");
  summary.textContent = response.title || "Reveal hidden response";
  details.append(summary);

  const body = document.createElement("div");
  body.className = "exploration-response-body";
  if (response.answer) {
    const answer = document.createElement("p");
    answer.className = "exploration-answer";
    answer.textContent = response.answer;
    body.append(answer);
  }
  (response.body || []).forEach((text) => body.append(createTextBlock(text)));
  if (response.interactive?.type === "binary-signature") {
    const interactive = document.createElement("div");
    interactive.className = "exploration-interactive";
    renderBinarySignature(interactive, {
      signature: response.interactive.signature,
      interactive: true,
      note: response.interactive.note
    });
    body.append(interactive);
  }
  details.append(body);
  return details;
}

function renderBinarySignature(container, options) {
  const weights = [512, 256, 128, 64, 32, 16, 8, 4, 2, 1];
  const bits = String(options.signature || "").padStart(weights.length, "0").slice(-weights.length).split("").map((bit) => bit === "1");
  const shell = document.createElement("div");
  shell.className = "binary-signature";

  const row = document.createElement("div");
  row.className = "binary-signature-row";
  const output = document.createElement("output");
  output.className = "binary-signature-output";

  function update() {
    const value = bits.reduce((sum, isOn, index) => sum + (isOn ? weights[index] : 0), 0);
    const signatureText = bits.map((bit) => bit ? "1" : "0").join("");
    output.value = options.interactive ? String(value) : signatureText;
    output.textContent = options.interactive
      ? `Signature ${signatureText} names box ${value}`
      : `Signature ${signatureText}`;
    row.querySelectorAll("[data-bit-index]").forEach((button) => {
      const index = Number(button.dataset.bitIndex);
      button.dataset.bitState = bits[index] ? "1" : "0";
      button.setAttribute("aria-pressed", bits[index] ? "true" : "false");
      button.querySelector(".binary-bit-value").textContent = bits[index] ? "1" : "0";
    });
  }

  weights.forEach((weight, index) => {
    const bit = document.createElement(options.interactive ? "button" : "span");
    bit.className = "binary-bit";
    bit.dataset.bitIndex = String(index);
    bit.dataset.bitState = bits[index] ? "1" : "0";
    if (options.interactive) {
      bit.type = "button";
      bit.setAttribute("aria-pressed", bits[index] ? "true" : "false");
      bit.addEventListener("click", () => {
        bits[index] = !bits[index];
        update();
      });
    }
    const weightEl = document.createElement("span");
    weightEl.className = "binary-bit-weight";
    weightEl.textContent = String(weight);
    const valueEl = document.createElement("span");
    valueEl.className = "binary-bit-value";
    valueEl.textContent = bits[index] ? "1" : "0";
    bit.append(weightEl, valueEl);
    row.append(bit);
  });

  shell.append(row, output);
  if (options.note) {
    const note = document.createElement("p");
    note.className = "exploration-interactive-note";
    note.textContent = options.note;
    shell.append(note);
  }
  container.append(shell);
  update();
}

function copyText(text) {
  if (!text) return Promise.resolve(false);
  if (!navigator.clipboard?.writeText) return Promise.resolve(false);
  return navigator.clipboard.writeText(text).then(() => true).catch(() => false);
}

function copyRandomNumber() {
  const value = state.tools.randomNumber?.value;
  if (value === null || value === undefined) {
    els.randomNumberStatus.textContent = "Generate a number before copying.";
    return;
  }
  copyText(String(value)).then((copied) => {
    els.randomNumberStatus.textContent = copied ? "Copied." : "Copy was unavailable in this browser.";
  });
}

function clampNormalSettings(settings) {
  return {
    min: Number.isFinite(Number(settings.min)) ? Number(settings.min) : 0,
    max: Number.isFinite(Number(settings.max)) ? Number(settings.max) : 99,
    sampleSize: Math.min(1000, Math.max(1, Math.trunc(Number(settings.sampleSize) || 30))),
    trials: Math.min(5000, Math.max(10, Math.trunc(Number(settings.trials) || 1000)))
  };
}

function updateNormalSettings() {
  state.tools.normalSimulator = {
    ...state.tools.normalSimulator,
    ...clampNormalSettings({
      min: els.normalMin.value,
      max: els.normalMax.value,
      sampleSize: els.normalSampleSize.value,
      trials: els.normalTrials.value
    })
  };
  saveTools("Changed Normal Simulator settings");
  renderNormalSimulator();
}

function runNormalSimulation() {
  const settings = clampNormalSettings({
    min: els.normalMin.value,
    max: els.normalMax.value,
    sampleSize: els.normalSampleSize.value,
    trials: els.normalTrials.value
  });
  const min = Math.min(settings.min, settings.max);
  const max = Math.max(settings.min, settings.max);
  const averages = [];
  for (let trial = 0; trial < settings.trials; trial += 1) {
    let sum = 0;
    for (let draw = 0; draw < settings.sampleSize; draw += 1) {
      sum += min + (cryptoUnit() * (max - min));
    }
    averages.push(sum / settings.sampleSize);
  }
  const mean = averages.reduce((sum, value) => sum + value, 0) / averages.length;
  const variance = averages.reduce((sum, value) => sum + ((value - mean) ** 2), 0) / averages.length;
  const bins = Array.from({ length: 12 }, () => 0);
  averages.forEach((value) => {
    const ratio = max === min ? 0 : (value - min) / (max - min);
    const index = Math.min(bins.length - 1, Math.max(0, Math.floor(ratio * bins.length)));
    bins[index] += 1;
  });
  state.tools.normalSimulator = {
    ...state.tools.normalSimulator,
    ...settings,
    result: {
      mean,
      standardDeviation: Math.sqrt(variance),
      min: Math.min(...averages),
      max: Math.max(...averages),
      bins
    }
  };
  saveTools("Ran Normal Simulator");
  renderNormalSimulator();
}

function renderNormalSimulator() {
  if (!els.normalMin) return;
  const settings = clampNormalSettings(state.tools.normalSimulator || {});
  const result = state.tools.normalSimulator?.result;
  els.normalMin.value = String(settings.min);
  els.normalMax.value = String(settings.max);
  els.normalSampleSize.value = String(settings.sampleSize);
  els.normalTrials.value = String(settings.trials);
  els.normalStatus.textContent = `Average ${settings.sampleSize} random values from ${Math.min(settings.min, settings.max)} to ${Math.max(settings.min, settings.max)}, repeated ${settings.trials} times.`;
  els.normalBars.innerHTML = "";
  const bins = result?.bins || [];
  const peak = Math.max(1, ...bins);
  if (!bins.length) {
    const empty = document.createElement("div");
    empty.className = "distribution-empty";
    empty.textContent = "Run the simulator to see the averages cluster.";
    els.normalBars.append(empty);
  } else {
    bins.forEach((count) => {
      const bar = document.createElement("div");
      bar.className = "distribution-bar";
      bar.style.height = `${Math.max(4, (count / peak) * 100)}%`;
      bar.title = `${count} trials`;
      els.normalBars.append(bar);
    });
  }
  renderDefinitionList(els.normalResults, result ? [
    ["Mean of averages", formatNumber(result.mean, 3)],
    ["Standard deviation", formatNumber(result.standardDeviation, 3)],
    ["Smallest average", formatNumber(result.min, 3)],
    ["Largest average", formatNumber(result.max, 3)]
  ] : [["Result", "Run the simulator."]]);
}

const exactAngles = [
  { value: "0", label: "0", rad: 0, cos: "1", sin: "0" },
  { value: "pi/6", label: "π/6", rad: Math.PI / 6, cos: "√3/2", sin: "1/2" },
  { value: "pi/4", label: "π/4", rad: Math.PI / 4, cos: "√2/2", sin: "√2/2" },
  { value: "pi/3", label: "π/3", rad: Math.PI / 3, cos: "1/2", sin: "√3/2" },
  { value: "pi/2", label: "π/2", rad: Math.PI / 2, cos: "0", sin: "1" },
  { value: "2pi/3", label: "2π/3", rad: (2 * Math.PI) / 3, cos: "-1/2", sin: "√3/2" },
  { value: "3pi/4", label: "3π/4", rad: (3 * Math.PI) / 4, cos: "-√2/2", sin: "√2/2" },
  { value: "5pi/6", label: "5π/6", rad: (5 * Math.PI) / 6, cos: "-√3/2", sin: "1/2" },
  { value: "pi", label: "π", rad: Math.PI, cos: "-1", sin: "0" },
  { value: "7pi/6", label: "7π/6", rad: (7 * Math.PI) / 6, cos: "-√3/2", sin: "-1/2" },
  { value: "5pi/4", label: "5π/4", rad: (5 * Math.PI) / 4, cos: "-√2/2", sin: "-√2/2" },
  { value: "4pi/3", label: "4π/3", rad: (4 * Math.PI) / 3, cos: "-1/2", sin: "-√3/2" },
  { value: "3pi/2", label: "3π/2", rad: (3 * Math.PI) / 2, cos: "0", sin: "-1" },
  { value: "5pi/3", label: "5π/3", rad: (5 * Math.PI) / 3, cos: "1/2", sin: "-√3/2" },
  { value: "7pi/4", label: "7π/4", rad: (7 * Math.PI) / 4, cos: "√2/2", sin: "-√2/2" },
  { value: "11pi/6", label: "11π/6", rad: (11 * Math.PI) / 6, cos: "√3/2", sin: "-1/2" }
];

function populateAngleSelects() {
  [els.unitCircleAngle, els.complexAngle].forEach((select) => {
    if (!select || select.options.length) return;
    exactAngles.forEach((angle) => {
      const option = document.createElement("option");
      option.value = angle.value;
      option.textContent = angle.label;
      select.append(option);
    });
  });
}

function angleByValue(value) {
  return exactAngles.find((angle) => angle.value === value) || exactAngles[2];
}

function renderCircleFigure(svg, angle, radius = 1) {
  if (!svg) return;
  svg.innerHTML = "";
  const pointRadius = Math.min(95, Math.max(0, Number(radius) * 75));
  const x = Math.cos(angle.rad) * pointRadius;
  const y = -Math.sin(angle.rad) * pointRadius;
  svg.append(svgEl("circle", { cx: 0, cy: 0, r: 76, class: "circle-guide" }));
  svg.append(svgEl("line", { x1: -100, y1: 0, x2: 100, y2: 0, class: "circle-axis" }));
  svg.append(svgEl("line", { x1: 0, y1: 100, x2: 0, y2: -100, class: "circle-axis" }));
  svg.append(svgEl("line", { x1: 0, y1: 0, x2: x, y2: y, class: "circle-radius" }));
  svg.append(svgEl("circle", { cx: x, cy: y, r: 6, class: "circle-point" }));
}

function svgEl(name, attributes) {
  const element = document.createElementNS("http://www.w3.org/2000/svg", name);
  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
  return element;
}

function renderUnitCircle() {
  if (!els.unitCircleAngle) return;
  const angle = angleByValue(state.tools.unitCircle?.angle);
  els.unitCircleAngle.value = angle.value;
  renderCircleFigure(els.unitCircleFigure, angle, 1);
  renderDefinitionList(els.unitCircleResults, [
    ["Angle", angle.label],
    ["Coordinate", `(${angle.cos}, ${angle.sin})`],
    ["cos θ", angle.cos],
    ["sin θ", angle.sin]
  ]);
}

function startUnitCircleDrag(event) {
  if (state.tools.activeTool !== "unit-circle") return;
  unitCircleDragState.dragging = true;
  els.unitCircleFigure.setPointerCapture?.(event.pointerId);
  updateUnitCircleFromPointer(event, false);
}

function dragUnitCircle(event) {
  if (!unitCircleDragState.dragging) return;
  updateUnitCircleFromPointer(event, false);
}

function endUnitCircleDrag(event) {
  if (!unitCircleDragState.dragging) return;
  unitCircleDragState.dragging = false;
  updateUnitCircleFromPointer(event, true);
}

function updateUnitCircleFromPointer(event, shouldSave) {
  const angle = snappedUnitCircleAngle(event);
  if (!angle) return;
  state.tools.unitCircle.angle = angle.value;
  renderUnitCircle();
  if (shouldSave) saveTools(`Changed Unit Circle angle to ${angle.label}`);
}

function snappedUnitCircleAngle(event) {
  const rect = els.unitCircleFigure.getBoundingClientRect();
  const width = rect.width || 1;
  const height = rect.height || 1;
  const x = ((event.clientX - rect.left) / width) * 240 - 120;
  const y = ((event.clientY - rect.top) / height) * 240 - 120;
  if (!Number.isFinite(x) || !Number.isFinite(y) || (Math.abs(x) < 1e-6 && Math.abs(y) < 1e-6)) return null;
  const raw = Math.atan2(-y, x);
  const normalized = raw < 0 ? raw + Math.PI * 2 : raw;
  return exactAngles.reduce((best, candidate) => (
    angularDistance(candidate.rad, normalized) < angularDistance(best.rad, normalized) ? candidate : best
  ), exactAngles[0]);
}

function angularDistance(left, right) {
  const distance = Math.abs(left - right) % (Math.PI * 2);
  return Math.min(distance, (Math.PI * 2) - distance);
}

function scaleExact(value, radius) {
  const r = Number(radius);
  if (r === 1) return value;
  if (value === "0") return "0";
  if (value === "1") return String(r);
  if (value === "-1") return String(-r);
  return `${r}(${value})`;
}

function renderComplexPlane() {
  if (!els.complexAngle) return;
  const radius = Math.max(0, Number(state.tools.complexPlane?.radius) || 1);
  const angle = angleByValue(state.tools.complexPlane?.angle);
  els.complexRadius.value = String(radius);
  els.complexAngle.value = angle.value;
  renderCircleFigure(els.complexFigure, angle, radius);
  const real = scaleExact(angle.cos, radius);
  const imaginary = scaleExact(angle.sin, radius);
  renderDefinitionList(els.complexResults, [
    ["Polar form", `${radius} cis ${angle.label}`],
    ["Coordinate", `(${real}, ${imaginary})`],
    ["Complex form", formatComplexForm(real, imaginary)]
  ]);
}

function formatComplexForm(real, imaginary) {
  if (imaginary === "0") return real;
  if (real === "0") return `${imaginary}i`;
  if (imaginary.startsWith("-")) return `${real} − ${imaginary.slice(1)}i`;
  return `${real} + ${imaginary}i`;
}

function clampGraphingSettings(settings = {}) {
  return {
    mode: settings.mode === "3d" ? "3d" : "2d",
    equation2d: String(settings.equation2d || "y = sin(x)").slice(0, 180),
    equation3d: String(settings.equation3d || "z = sin(x) + cos(y)").slice(0, 180),
    range: Math.min(50, Math.max(0.5, Number(settings.range) || 10)),
    centerX: Math.min(1000, Math.max(-1000, Number.isFinite(Number(settings.centerX)) ? Number(settings.centerX) : 0)),
    centerY: Math.min(1000, Math.max(-1000, Number.isFinite(Number(settings.centerY)) ? Number(settings.centerY) : 0)),
    yaw: Number.isFinite(Number(settings.yaw)) ? Number(settings.yaw) : -0.65,
    pitch: Math.min(1.25, Math.max(-1.25, Number(settings.pitch) || 0.55))
  };
}

function updateGraphingSettings(activity = "Updated Graphing") {
  if (!els.graphMode) return;
  state.tools.graphing = {
    ...state.tools.graphing,
    ...clampGraphingSettings({
      mode: els.graphMode.value,
      equation2d: els.graphEquation2d.value,
      equation3d: els.graphEquation3d.value,
      range: els.graphRange.value,
      centerX: state.tools.graphing?.centerX,
      centerY: state.tools.graphing?.centerY,
      yaw: state.tools.graphing?.yaw,
      pitch: state.tools.graphing?.pitch
    })
  };
  saveTools(activity);
  renderGraphingTool();
}

function renderGraphingTool() {
  if (!els.graphMode) return;
  const settings = clampGraphingSettings(state.tools.graphing || {});
  const equation = settings.mode === "3d" ? settings.equation3d : settings.equation2d;
  state.tools.graphing = { ...state.tools.graphing, ...settings };
  els.graphMode.value = settings.mode;
  els.graphEquation2d.value = settings.equation2d;
  els.graphEquation3d.value = settings.equation3d;
  els.graphRange.value = String(settings.range);
  document.querySelectorAll("[data-graph-equation]").forEach((field) => {
    field.hidden = field.dataset.graphEquation !== settings.mode;
  });
  setGraphViewMode(settings.mode);
  els.graphEquationPreview.replaceChildren(createMathMlExpression(normalizePlainMathLine(equation)));

  try {
    const model = compileGraphEquation(equation, settings.mode);
    if (settings.mode === "2d") {
      const count = renderGraph2d(model, settings);
      els.graphStatus.textContent = count
        ? "Drag to pan. Use the mouse wheel or trackpad to zoom."
        : "Graph ready, but no visible curve crossed the current window.";
    } else {
      const count = renderGraph3d(model, settings);
      els.graphStatus.textContent = count
        ? "Drag the graph to rotate the 3D view."
        : "Graph ready, but no visible points landed in the current window.";
    }
    renderDefinitionList(els.graphResults, [
      ["Mode", settings.mode === "3d" ? "3D" : "2D"],
      ["Graph type", model.kind === "explicit" ? "explicit" : "implicit"],
      ["Window", graphWindowLabel(settings)],
      ["Syntax", "Use ^, sin, cos, sqrt, pi, and natural forms like 4x + 3."]
    ]);
  } catch (error) {
    clearGraphingView(settings.mode);
    els.graphStatus.textContent = error.message || "That equation could not be graphed.";
    renderDefinitionList(els.graphResults, [
      ["Status", "Check the equation syntax."],
      ["Example", settings.mode === "3d" ? "z = sin(x) + cos(y)" : "y = sin(x)"]
    ]);
  }
}

function setGraphViewMode(mode) {
  const is2d = mode === "2d";
  els.graph2dSvg.hidden = !is2d;
  els.graph3dCanvas.hidden = is2d;
  els.graph2dSvg.style.display = is2d ? "" : "none";
  els.graph3dCanvas.style.display = is2d ? "none" : "";
  els.graph2dSvg.setAttribute("aria-hidden", is2d ? "false" : "true");
  els.graph3dCanvas.setAttribute("aria-hidden", is2d ? "true" : "false");
  if (is2d) {
    const context = els.graph3dCanvas.getContext?.("2d");
    if (context) context.clearRect(0, 0, els.graph3dCanvas.width, els.graph3dCanvas.height);
  } else {
    els.graph2dSvg.innerHTML = "";
  }
}

function clearGraphingView(mode) {
  if (mode === "2d") {
    els.graph2dSvg.innerHTML = "";
    return;
  }
  const canvas = els.graph3dCanvas;
  const context = canvas?.getContext?.("2d");
  if (context) context.clearRect(0, 0, canvas.width, canvas.height);
}

function compileGraphEquation(equation, mode) {
  const raw = String(equation || "").trim();
  if (!raw) throw new Error("Enter an equation before graphing.");
  const parts = raw.split("=");
  const left = parts.length > 1 ? parts.shift().trim() : (mode === "3d" ? "z" : "y");
  const right = parts.length ? parts.join("=").trim() : raw;
  if (!left || !right) throw new Error("Use an equation such as y = sin(x).");
  if (mode === "2d") {
    if (/^y$/iu.test(left)) {
      return { mode, kind: "explicit", expression: right, fn: compileGraphExpression(right) };
    }
    if (/^y$/iu.test(right)) {
      return { mode, kind: "explicit", expression: left, fn: compileGraphExpression(left) };
    }
    const leftFn = compileGraphExpression(left);
    const rightFn = compileGraphExpression(right);
    return { mode, kind: "implicit", fn: (x, y, z = 0) => leftFn(x, y, z) - rightFn(x, y, z) };
  }
  if (/^z$/iu.test(left)) {
    return { mode, kind: "explicit", expression: right, fn: compileGraphExpression(right) };
  }
  if (/^z$/iu.test(right)) {
    return { mode, kind: "explicit", expression: left, fn: compileGraphExpression(left) };
  }
  const leftFn = compileGraphExpression(left);
  const rightFn = compileGraphExpression(right);
  return { mode, kind: "implicit", fn: (x, y, z = 0) => leftFn(x, y, z) - rightFn(x, y, z) };
}

function compileGraphExpression(expression) {
  const normalized = normalizeGraphExpression(expression);
  if (!normalized) throw new Error("Enter an expression to graph.");
  if (/[;{}\[\]"'`]|=>|(?:^|[^A-Za-z])(?:new|this|window|document|Function)(?:$|[^A-Za-z])/u.test(normalized)) {
    throw new Error("Use ordinary math notation only.");
  }
  const identifiers = normalized.match(/[A-Za-z_][A-Za-z0-9_]*/gu) || [];
  const allowed = new Set([...GRAPH_FUNCTIONS, ...GRAPH_VARIABLES, "pi", "e"]);
  const unknown = identifiers.find((name) => !allowed.has(name.toLowerCase()));
  if (unknown) throw new Error(`Unknown symbol: ${unknown}`);
  let jsExpression = normalized;
  GRAPH_FUNCTION_NAMES.filter((name) => name !== "ln").forEach((name) => {
    jsExpression = jsExpression.replace(new RegExp(`\\b${name}\\b`, "giu"), `Math.${name}`);
  });
  jsExpression = jsExpression
    .replace(/\bln\b/giu, "Math.log")
    .replace(/\bpi\b/giu, "Math.PI")
    .replace(/\be\b/gu, "Math.E");
  try {
    return Function("x", "y", "z", `"use strict"; return (${jsExpression});`);
  } catch {
    throw new Error("Use syntax like y = sin(x), y = x^2, or x^2 + y^2 = 9.");
  }
}

function normalizeGraphExpression(expression) {
  const functionNames = GRAPH_FUNCTION_NAMES.join("|");
  return String(expression || "")
    .trim()
    .toLowerCase()
    .replace(/[−–—]/gu, "-")
    .replace(/π/gu, "pi")
    .replace(/[×·]/gu, "*")
    .replace(/\bMath\./gu, "")
    .replace(/\^/gu, "**")
    .replace(new RegExp(`(\\d)(?=(?:x|y|z|pi|e|${functionNames})\\b|\\()`, "giu"), "$1*")
    .replace(new RegExp(`(\\d|\\)|\\b(?:x|y|z|pi|e)\\b)\\s*(?=(?:\\(|\\b(?:x|y|z|pi|e)\\b|\\b(?:${functionNames})\\b))`, "giu"), "$1*")
    .replace(new RegExp(`(\\d|\\)|\\b(?:x|y|z|pi|e)\\b)\\s+(?=(?:\\d|\\(|\\b(?:x|y|z|pi|e)\\b|\\b(?:${functionNames})\\b))`, "giu"), "$1*");
}

function graphWindowLabel(settings) {
  if (settings.mode === "3d") return `−${settings.range} to ${settings.range}`;
  const xMin = settings.centerX - settings.range;
  const xMax = settings.centerX + settings.range;
  const yMin = settings.centerY - settings.range;
  const yMax = settings.centerY + settings.range;
  return `x ${formatNumber(xMin, 2)} to ${formatNumber(xMax, 2)}, y ${formatNumber(yMin, 2)} to ${formatNumber(yMax, 2)}`;
}

function renderGraph2d(model, settings) {
  const svg = els.graph2dSvg;
  svg.innerHTML = "";
  const { range, centerX, centerY } = settings;
  const width = 640;
  const height = 420;
  const margin = 32;
  const plotWidth = width - (margin * 2);
  const plotHeight = height - (margin * 2);
  const xMin = centerX - range;
  const xMax = centerX + range;
  const yMin = centerY - range;
  const yMax = centerY + range;
  const xToScreen = (x) => margin + ((x - xMin) / (range * 2)) * plotWidth;
  const yToScreen = (y) => margin + ((yMax - y) / (range * 2)) * plotHeight;
  svg.append(svgEl("rect", { x: 0, y: 0, width, height, class: "graph-background" }));
  graphTicks(xMin, xMax).forEach((tick) => {
    const x = xToScreen(tick);
    svg.append(svgEl("line", { x1: x, y1: margin, x2: x, y2: height - margin, class: approximatelyZero(tick) ? "graph-axis" : "graph-grid-line" }));
  });
  graphTicks(yMin, yMax).forEach((tick) => {
    const y = yToScreen(tick);
    svg.append(svgEl("line", { x1: margin, y1: y, x2: width - margin, y2: y, class: approximatelyZero(tick) ? "graph-axis" : "graph-grid-line" }));
  });
  const tickLabel = (text, x, y, anchor) => {
    const node = svgEl("text", { x, y, class: "graph-tick-label", "text-anchor": anchor });
    node.textContent = text;
    return node;
  };
  graphTicks(xMin, xMax).forEach((tick) => {
    if (approximatelyZero(tick)) return;
    const x = xToScreen(tick);
    if (x < margin + 8 || x > width - margin - 8) return;
    svg.append(tickLabel(formatNumber(tick, 2), x, height - margin + 18, "middle"));
  });
  graphTicks(yMin, yMax).forEach((tick) => {
    if (approximatelyZero(tick)) return;
    const y = yToScreen(tick);
    if (y < margin + 10 || y > height - margin - 10) return;
    svg.append(tickLabel(formatNumber(tick, 2), margin - 6, y + 4, "end"));
  });
  if (xMin < 0 && xMax > 0 && yMin < 0 && yMax > 0) {
    svg.append(tickLabel("0", xToScreen(0) - 6, yToScreen(0) + 16, "end"));
  }
  if (model.kind === "explicit") {
    return renderExplicitGraph2d(svg, model, { range, xMin, xMax, yMin, yMax }, xToScreen, yToScreen);
  }
  return renderImplicitGraph2d(svg, model, { range, xMin, xMax, yMin, yMax }, xToScreen, yToScreen);
}

function renderExplicitGraph2d(svg, model, window, xToScreen, yToScreen) {
  const samples = 420;
  let path = "";
  let count = 0;
  let active = false;
  for (let index = 0; index <= samples; index += 1) {
    const x = window.xMin + (((window.xMax - window.xMin) * index) / samples);
    const y = model.fn(x, 0, 0);
    const visible = Number.isFinite(y) && y >= window.yMin - window.range * 2 && y <= window.yMax + window.range * 2;
    if (!visible) {
      active = false;
      continue;
    }
    const command = active ? "L" : "M";
    path += `${command}${formatNumber(xToScreen(x), 2)} ${formatNumber(yToScreen(y), 2)} `;
    active = true;
    count += 1;
  }
  if (path) svg.append(svgEl("path", { d: path.trim(), class: "graph-curve" }));
  return count;
}

function renderImplicitGraph2d(svg, model, window, xToScreen, yToScreen) {
  const cells = 88;
  const xStep = (window.xMax - window.xMin) / cells;
  const yStep = (window.yMax - window.yMin) / cells;
  let count = 0;
  for (let xIndex = 0; xIndex < cells; xIndex += 1) {
    for (let yIndex = 0; yIndex < cells; yIndex += 1) {
      const x0 = window.xMin + xIndex * xStep;
      const x1 = x0 + xStep;
      const y0 = window.yMin + yIndex * yStep;
      const y1 = y0 + yStep;
      const values = [
        model.fn(x0, y0, 0),
        model.fn(x1, y0, 0),
        model.fn(x1, y1, 0),
        model.fn(x0, y1, 0)
      ];
      if (values.some((value) => !Number.isFinite(value))) continue;
      const points = [];
      addMarchingPoint(points, values[0], values[1], [x0, y0], [x1, y0]);
      addMarchingPoint(points, values[1], values[2], [x1, y0], [x1, y1]);
      addMarchingPoint(points, values[2], values[3], [x1, y1], [x0, y1]);
      addMarchingPoint(points, values[3], values[0], [x0, y1], [x0, y0]);
      for (let pointIndex = 0; pointIndex + 1 < points.length; pointIndex += 2) {
        const start = points[pointIndex];
        const end = points[pointIndex + 1];
        svg.append(svgEl("line", {
          x1: xToScreen(start[0]),
          y1: yToScreen(start[1]),
          x2: xToScreen(end[0]),
          y2: yToScreen(end[1]),
          class: "graph-curve"
        }));
        count += 1;
      }
    }
  }
  return count;
}

function addMarchingPoint(points, leftValue, rightValue, leftPoint, rightPoint) {
  if (approximatelyZero(leftValue)) {
    points.push(leftPoint);
    return;
  }
  if (leftValue * rightValue > 0) return;
  const ratio = leftValue / (leftValue - rightValue);
  points.push([
    leftPoint[0] + (rightPoint[0] - leftPoint[0]) * ratio,
    leftPoint[1] + (rightPoint[1] - leftPoint[1]) * ratio
  ]);
}

function renderGraph3d(model, settings) {
  const canvas = els.graph3dCanvas;
  const context = canvas.getContext("2d");
  const rect = canvas.getBoundingClientRect();
  const cssWidth = Math.max(320, rect.width || 720);
  const cssHeight = Math.max(320, rect.height || 480);
  const ratio = window.devicePixelRatio || 1;
  if (canvas.width !== Math.round(cssWidth * ratio) || canvas.height !== Math.round(cssHeight * ratio)) {
    canvas.width = Math.round(cssWidth * ratio);
    canvas.height = Math.round(cssHeight * ratio);
  }
  context.setTransform(ratio, 0, 0, ratio, 0, 0);
  context.clearRect(0, 0, cssWidth, cssHeight);
  drawGraph3dAxes(context, settings, cssWidth, cssHeight);
  return model.kind === "explicit"
    ? drawExplicitGraph3d(context, model, settings, cssWidth, cssHeight)
    : drawImplicitGraph3d(context, model, settings, cssWidth, cssHeight);
}

function drawGraph3dAxes(context, settings, width, height) {
  const range = settings.range;
  const axes = [
    [[-range, 0, 0], [range, 0, 0], "x"],
    [[0, -range, 0], [0, range, 0], "y"],
    [[0, 0, -range], [0, 0, range], "z"]
  ];
  context.save();
  context.lineWidth = 1.5;
  context.strokeStyle = getCssColor("--graph-axis");
  context.fillStyle = getCssColor("--muted");
  context.font = "700 13px Inter, Helvetica, Arial, sans-serif";
  axes.forEach(([start, end, label]) => {
    const a = projectGraphPoint(start[0], start[1], start[2], settings, width, height);
    const b = projectGraphPoint(end[0], end[1], end[2], settings, width, height);
    context.beginPath();
    context.moveTo(a.x, a.y);
    context.lineTo(b.x, b.y);
    context.stroke();
    context.fillText(label, b.x + 5, b.y - 5);
  });
  context.restore();
}

function drawExplicitGraph3d(context, model, settings, width, height) {
  const range = settings.range;
  const samples = 32;
  const points = [];
  for (let row = 0; row <= samples; row += 1) {
    points[row] = [];
    const y = -range + ((range * 2 * row) / samples);
    for (let column = 0; column <= samples; column += 1) {
      const x = -range + ((range * 2 * column) / samples);
      const z = model.fn(x, y, 0);
      points[row][column] = Number.isFinite(z) && Math.abs(z) <= range * 4
        ? projectGraphPoint(x, y, z, settings, width, height)
        : null;
    }
  }
  context.save();
  context.lineWidth = 1.2;
  context.strokeStyle = getCssColor("--graph-surface");
  let count = 0;
  const drawLine = (a, b) => {
    if (!a || !b) return;
    context.beginPath();
    context.moveTo(a.x, a.y);
    context.lineTo(b.x, b.y);
    context.stroke();
    count += 1;
  };
  for (let row = 0; row <= samples; row += 1) {
    for (let column = 0; column < samples; column += 1) {
      drawLine(points[row][column], points[row][column + 1]);
    }
  }
  for (let column = 0; column <= samples; column += 1) {
    for (let row = 0; row < samples; row += 1) {
      drawLine(points[row][column], points[row + 1][column]);
    }
  }
  context.restore();
  return count;
}

function drawImplicitGraph3d(context, model, settings, width, height) {
  const range = settings.range;
  const samples = 30;
  const step = (range * 2) / samples;
  const threshold = Math.max(0.12, step * 2);
  const points = [];
  for (let xIndex = 0; xIndex <= samples; xIndex += 1) {
    const x = -range + xIndex * step;
    for (let yIndex = 0; yIndex <= samples; yIndex += 1) {
      const y = -range + yIndex * step;
      for (let zIndex = 0; zIndex <= samples; zIndex += 1) {
        const z = -range + zIndex * step;
        const value = model.fn(x, y, z);
        if (!Number.isFinite(value) || Math.abs(value) > threshold) continue;
        points.push(projectGraphPoint(x, y, z, settings, width, height));
      }
    }
  }
  points.sort((a, b) => a.depth - b.depth);
  context.save();
  context.fillStyle = getCssColor("--graph-surface");
  points.forEach((point) => {
    context.globalAlpha = Math.max(0.3, Math.min(0.95, 0.55 + point.depth * 0.02));
    context.beginPath();
    context.arc(point.x, point.y, 2.6, 0, Math.PI * 2);
    context.fill();
  });
  context.restore();
  return points.length;
}

function projectGraphPoint(x, y, z, settings, width, height) {
  const yaw = settings.yaw;
  const pitch = settings.pitch;
  const cosYaw = Math.cos(yaw);
  const sinYaw = Math.sin(yaw);
  const cosPitch = Math.cos(pitch);
  const sinPitch = Math.sin(pitch);
  const rotatedX = (cosYaw * x) - (sinYaw * y);
  const rotatedY = (sinYaw * x) + (cosYaw * y);
  const projectedY = (cosPitch * rotatedY) - (sinPitch * z);
  const depth = (sinPitch * rotatedY) + (cosPitch * z);
  const scale = Math.min(width, height) / (settings.range * 3);
  return {
    x: (width / 2) + rotatedX * scale,
    y: (height / 2) - projectedY * scale,
    depth
  };
}

function graphTicks(min, max) {
  const step = graphTickStep(Math.max(Math.abs(max - min) / 2, 1));
  const ticks = [];
  for (let value = Math.ceil(min / step) * step; value <= max + step * 0.5; value += step) {
    ticks.push(Number(value.toFixed(8)));
  }
  return ticks;
}

function graphTickStep(range) {
  const raw = range / 4;
  const magnitude = 10 ** Math.floor(Math.log10(raw));
  return [1, 2, 5, 10].map((factor) => factor * magnitude).find((candidate) => candidate >= raw) || magnitude;
}

function approximatelyZero(value) {
  return Math.abs(value) < 1e-9;
}

function getCssColor(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim() || "#1d4ed8";
}

function startGraphDrag(event) {
  if (state.tools.activeTool !== "graphing") return;
  const is2d = event.currentTarget === els.graph2dSvg && state.tools.graphing?.mode === "2d";
  const is3d = event.currentTarget === els.graph3dCanvas && state.tools.graphing?.mode === "3d";
  if (!is2d && !is3d) return;
  graphPointerState.dragging = true;
  graphPointerState.x = event.clientX;
  graphPointerState.y = event.clientY;
  graphPointerState.mode = is2d ? "2d" : "3d";
  event.currentTarget.setPointerCapture?.(event.pointerId);
}

function dragGraphView(event) {
  if (!graphPointerState.dragging) return;
  const dx = event.clientX - graphPointerState.x;
  const dy = event.clientY - graphPointerState.y;
  graphPointerState.x = event.clientX;
  graphPointerState.y = event.clientY;
  const settings = clampGraphingSettings(state.tools.graphing || {});
  if (graphPointerState.mode === "2d") {
    const rect = els.graph2dSvg.getBoundingClientRect();
    const plotWidth = Math.max(1, (rect.width || 640) - 64);
    const plotHeight = Math.max(1, (rect.height || 420) - 64);
    state.tools.graphing = {
      ...settings,
      centerX: settings.centerX - (dx / plotWidth) * settings.range * 2,
      centerY: settings.centerY + (dy / plotHeight) * settings.range * 2
    };
  } else {
    state.tools.graphing = {
      ...settings,
      yaw: settings.yaw + dx * 0.01,
      pitch: Math.min(1.25, Math.max(-1.25, settings.pitch + dy * 0.01))
    };
  }
  renderGraphingTool();
}

function endGraphDrag() {
  if (!graphPointerState.dragging) return;
  const mode = graphPointerState.mode;
  graphPointerState.dragging = false;
  graphPointerState.mode = "";
  saveTools(mode === "2d" ? "Panned Graphing view" : "Rotated Graphing view");
}

function zoomGraphView(event) {
  if (state.tools.activeTool !== "graphing") return;
  event.preventDefault();
  const settings = clampGraphingSettings(state.tools.graphing || {});
  const factor = event.deltaY > 0 ? 1.16 : 0.86;
  state.tools.graphing = {
    ...settings,
    range: Math.min(50, Math.max(0.5, settings.range * factor))
  };
  renderGraphingTool();
  window.clearTimeout(graphPointerState.saveTimer);
  graphPointerState.saveTimer = window.setTimeout(() => {
    saveTools("Zoomed Graphing view");
  }, 250);
}

function resetGraphView() {
  const settings = clampGraphingSettings(state.tools.graphing || {});
  state.tools.graphing = {
    ...settings,
    range: 10,
    centerX: 0,
    centerY: 0,
    yaw: -0.65,
    pitch: 0.55
  };
  saveTools("Reset Graphing view");
  renderGraphingTool();
}

function primeFactorsOf(value) {
  let n = Math.abs(Math.trunc(Number(value) || 0));
  if (n < 2) return [];
  const factors = [];
  let divisor = 2;
  while (divisor * divisor <= n) {
    while (n % divisor === 0) {
      factors.push(divisor);
      n /= divisor;
    }
    divisor += divisor === 2 ? 1 : 2;
  }
  if (n > 1) factors.push(n);
  return factors;
}

function renderNumberTheoryTools() {
  if (!els.factorInput) return;
  const settings = state.tools.numberTheory || {};
  els.factorInput.value = String(settings.factorInput ?? 84);
  els.gcdLeft.value = String(settings.gcdLeft ?? 84);
  els.gcdRight.value = String(settings.gcdRight ?? 126);
  const factors = primeFactorsOf(settings.factorInput);
  renderDefinitionList(els.factorResults, [
    ["Prime factors", factors.length ? factors.join(" × ") : "none"],
    ["Distinct primes", factors.length ? [...new Set(factors)].join(", ") : "none"]
  ]);
  const gcdValue = gcd(settings.gcdLeft, settings.gcdRight);
  renderDefinitionList(els.gcdResults, [
    ["GCD", String(gcdValue)],
    ["Check", `${gcdValue} divides both numbers`]
  ]);
}

function updateNumberTheoryTools(kind) {
  state.tools.numberTheory = {
    ...state.tools.numberTheory,
    factorInput: Math.abs(Math.trunc(Number(els.factorInput.value) || 0)),
    gcdLeft: Math.trunc(Number(els.gcdLeft.value) || 0),
    gcdRight: Math.trunc(Number(els.gcdRight.value) || 0)
  };
  saveTools(kind === "gcd" ? "Calculated GCD" : "Calculated prime factors");
  renderNumberTheoryTools();
}

function renderDefinitionList(target, rows) {
  if (!target) return;
  target.innerHTML = "";
  rows.forEach(([term, value]) => {
    const div = document.createElement("div");
    const dt = document.createElement("dt");
    const dd = document.createElement("dd");
    dt.textContent = term;
    dd.textContent = value;
    div.append(dt, dd);
    target.append(div);
  });
}

function formatNumber(value, places = 2) {
  return Number(value).toFixed(places).replace(/\.?0+$/u, "");
}

function currentModClockSettings() {
  const difficulty = ["easy", "medium", "hard"].includes(state.games.modClock.difficulty)
    ? state.games.modClock.difficulty
    : "easy";
  const seed = Number.isFinite(Number(state.games.modClock.seed)) ? Number(state.games.modClock.seed) : 0;
  return { difficulty, seed };
}

function modClockProblem() {
  const { difficulty, seed } = currentModClockSettings();
  const random = seededRandom(seed + { easy: 101, medium: 503, hard: 907 }[difficulty]);
  const options = {
    easy: { moduli: [5, 6, 8, 10], minMove: 2, maxMove: 13 },
    medium: { moduli: [9, 10, 12], minMove: 8, maxMove: 28 },
    hard: { moduli: [11, 13, 17], minMove: 14, maxMove: 48 }
  }[difficulty];
  const modulus = options.moduli[Math.floor(random() * options.moduli.length)];
  const start = Math.floor(random() * modulus);
  const move = options.minMove + Math.floor(random() * (options.maxMove - options.minMove + 1));
  const answer = (start + move) % modulus;
  return { difficulty, modulus, start, move, answer };
}

function renderModClock() {
  if (!els.modClockDial) return;
  const problem = modClockProblem();
  const selected = Number.isInteger(state.games.modClock.selected) ? state.games.modClock.selected : null;
  const checked = Boolean(state.games.modClock.checked);
  els.modClockDifficulty.value = problem.difficulty;
  els.modClockPrompt.textContent = `Start at ${problem.start}. Move forward ${problem.move}. Where do you land modulo ${problem.modulus}?`;
  els.modClockDial.innerHTML = "";
  els.modClockDial.style.setProperty("--modulus", problem.modulus);

  for (let value = 0; value < problem.modulus; value += 1) {
    const angle = ((value / problem.modulus) * Math.PI * 2) - (Math.PI / 2);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "mod-clock-node";
    button.dataset.modValue = String(value);
    button.textContent = String(value);
    button.style.left = `${50 + Math.cos(angle) * 39}%`;
    button.style.top = `${50 + Math.sin(angle) * 39}%`;
    button.setAttribute("aria-label", `Residue ${value}`);
    if (value === problem.start) button.classList.add("start");
    if (value === selected) button.classList.add("selected");
    if (checked && value === selected && value !== problem.answer) button.classList.add("wrong");
    if (checked && value === problem.answer) button.classList.add("correct");
    els.modClockDial.append(button);
  }

  const center = document.createElement("div");
  center.className = "mod-clock-center";
  center.textContent = `+${problem.move}`;
  els.modClockDial.append(center);

  if (checked && selected === problem.answer) {
    els.modClockStatus.textContent = `Correct. ${problem.start} + ${problem.move} leaves remainder ${problem.answer} modulo ${problem.modulus}. Press Return or New for another round.`;
  } else if (checked && selected !== null) {
    els.modClockStatus.textContent = `Not quite. Count ${problem.move} steps from ${problem.start}; the landing value is ${problem.answer} modulo ${problem.modulus}.`;
  } else if (selected !== null) {
    els.modClockStatus.textContent = "Press Check when ready.";
  } else {
    els.modClockStatus.textContent = "Choose where the move lands.";
  }
}

function selectModClockValue(value) {
  const problem = modClockProblem();
  if (!Number.isInteger(value) || value < 0 || value >= problem.modulus) return;
  state.games.modClock.selected = value;
  state.games.modClock.checked = false;
  saveGames("Updated Mod Clock");
  renderModClock();
}

function checkModClock() {
  state.games.modClock.checked = true;
  saveGames("Checked Mod Clock");
  renderModClock();
}

function isModClockCorrect() {
  return Boolean(state.games.modClock.checked) && state.games.modClock.selected === modClockProblem().answer;
}

function newModClock() {
  state.games.modClock.seed = (Number(state.games.modClock.seed) || 0) + 1;
  state.games.modClock.selected = null;
  state.games.modClock.checked = false;
  saveGames("Started a new Mod Clock");
  renderModClock();
}

function gameLabel(game) {
  return {
    sudoku: "Sudoku",
    "mod-clock": "Mod Clock",
    "prime-factors": "Prime Factors",
    "gcd-race": "GCD",
    divisibility: "Divisibility",
    "residue-match": "Residues",
    "graph-paths": "Graph Paths"
  }[game] || "Sudoku";
}

function gameStateKey(game) {
  return {
    "prime-factors": "primeFactors",
    "gcd-race": "gcdRace",
    divisibility: "divisibility",
    "residue-match": "residueMatch",
    "graph-paths": "graphPaths"
  }[game];
}

function gcd(a, b) {
  let left = Math.abs(a);
  let right = Math.abs(b);
  while (right) {
    [left, right] = [right, left % right];
  }
  return left;
}

function uniqueShuffledChoices(values, random, limit = values.length) {
  return shuffleWithRandom([...new Set(values.map(String))], random).slice(0, limit);
}

function currentNumberGameState(game) {
  const key = gameStateKey(game);
  const fallback = { difficulty: "easy", seed: 0, selected: [], checked: false };
  const stored = state.games[key] || fallback;
  return {
    ...fallback,
    ...stored,
    difficulty: ["easy", "medium", "hard"].includes(stored.difficulty) ? stored.difficulty : "easy",
    seed: Number.isFinite(Number(stored.seed)) ? Number(stored.seed) : 0
  };
}

function primeFactorProblem(settings) {
  const random = seededRandom(settings.seed * 1201 + { easy: 17, medium: 29, hard: 43 }[settings.difficulty]);
  const pools = {
    easy: [2, 3, 5, 7],
    medium: [2, 3, 5, 7, 11],
    hard: [2, 3, 5, 7, 11, 13]
  };
  const pool = pools[settings.difficulty];
  const factorCount = settings.difficulty === "easy" ? 2 : settings.difficulty === "medium" ? 3 : 4;
  const factors = shuffleWithRandom(pool, random).slice(0, factorCount);
  const number = factors.reduce((product, factor) => product * factor, 1);
  const choices = uniqueShuffledChoices([...factors, ...pool, 17, 19], random, 8);
  return {
    multi: true,
    number,
    factors: factors.map(String),
    prompt: `Select every prime factor of ${number}.`,
    choices: choices.map((value) => ({ value, label: value })),
    answers: factors.map(String),
    emptyStatus: "Choose every prime factor.",
    success: "Correct. Those are exactly the prime factors.",
    hint: "Prime factors are prime numbers that divide the number with no remainder."
  };
}

function gcdRaceProblem(settings) {
  const random = seededRandom(settings.seed * 1423 + { easy: 31, medium: 47, hard: 61 }[settings.difficulty]);
  const gcdOptions = {
    easy: [2, 3, 4, 5, 6],
    medium: [6, 8, 9, 10, 12],
    hard: [12, 15, 18, 21, 24]
  }[settings.difficulty];
  const common = gcdOptions[Math.floor(random() * gcdOptions.length)];
  let leftFactor = 2 + Math.floor(random() * (settings.difficulty === "hard" ? 14 : 8));
  let rightFactor = 2 + Math.floor(random() * (settings.difficulty === "hard" ? 14 : 8));
  while (gcd(leftFactor, rightFactor) !== 1) rightFactor += 1;
  const left = common * leftFactor;
  const right = common * rightFactor;
  const choices = uniqueShuffledChoices([common, leftFactor, rightFactor, common * 2, common + 1, Math.max(1, common - 1)], random, 6);
  return {
    multi: false,
    left,
    right,
    common,
    prompt: `Find gcd(${left}, ${right}).`,
    choices: choices.map((value) => ({ value, label: value })),
    answers: [String(common)],
    emptyStatus: "Choose the greatest common divisor.",
    success: "Correct. That is the greatest divisor shared by both numbers.",
    hint: "The gcd is the largest number that divides both values."
  };
}

function divisibilityProblem(settings) {
  const random = seededRandom(settings.seed * 1609 + { easy: 71, medium: 83, hard: 97 }[settings.difficulty]);
  const rules = [
    { divisor: 2, label: "The last digit is even.", make: () => 100 + 2 * Math.floor(random() * 400) },
    { divisor: 3, label: "The digit sum is divisible by 3.", make: () => 123 + 3 * Math.floor(random() * 250) },
    { divisor: 4, label: "The last two digits are divisible by 4.", make: () => 200 + 4 * Math.floor(random() * 220) },
    { divisor: 5, label: "The number ends in 0 or 5.", make: () => 105 + 5 * Math.floor(random() * 180) },
    { divisor: 6, label: "The number is divisible by 2 and 3.", make: () => 102 + 6 * Math.floor(random() * 160) },
    { divisor: 9, label: "The digit sum is divisible by 9.", make: () => 108 + 9 * Math.floor(random() * 110) },
    { divisor: 10, label: "The number ends in 0.", make: () => 120 + 10 * Math.floor(random() * 90) }
  ];
  const available = settings.difficulty === "easy" ? rules.slice(0, 4) : settings.difficulty === "medium" ? rules.slice(0, 6) : rules;
  const rule = available[Math.floor(random() * available.length)];
  const number = rule.make();
  const choices = shuffleWithRandom(rules.map((item) => item.label), random).slice(0, 5);
  if (!choices.includes(rule.label)) choices[0] = rule.label;
  return {
    multi: false,
    prompt: `${number} is divisible by ${rule.divisor}. Which rule explains why?`,
    choices: shuffleWithRandom(choices, random).map((label) => ({ value: label, label })),
    answers: [rule.label],
    emptyStatus: "Choose the matching divisibility rule.",
    success: "Correct. That rule proves the claim.",
    hint: "Use the rule that directly matches the divisor in the prompt."
  };
}

function residueMatchProblem(settings) {
  const random = seededRandom(settings.seed * 1777 + { easy: 109, medium: 127, hard: 149 }[settings.difficulty]);
  const modulusOptions = {
    easy: [3, 4, 5],
    medium: [5, 6, 7],
    hard: [7, 8, 9, 11]
  }[settings.difficulty];
  const modulus = modulusOptions[Math.floor(random() * modulusOptions.length)];
  const residue = Math.floor(random() * modulus);
  const answers = [];
  let base = residue;
  while (answers.length < 4) {
    answers.push(base);
    base += modulus;
  }
  const distractors = [];
  while (distractors.length < 6) {
    const value = Math.floor(random() * (settings.difficulty === "hard" ? 90 : 50));
    if (value % modulus !== residue) distractors.push(value);
  }
  const choices = uniqueShuffledChoices([...answers, ...distractors], random, 9);
  const answerSet = choices.filter((value) => Number(value) % modulus === residue);
  return {
    multi: true,
    modulus,
    residue,
    prompt: `Select every number congruent to ${residue} modulo ${modulus}.`,
    choices: choices.map((value) => ({ value, label: value })),
    answers: answerSet,
    emptyStatus: "Choose every number with that remainder.",
    success: "Correct. Each selected number has the same remainder.",
    hint: `A number is congruent to ${residue} modulo ${modulus} when division by ${modulus} leaves remainder ${residue}.`
  };
}

const graphPathLayouts = {
  easy: {
    nodes: {
      A: [54, 120],
      B: [138, 70],
      C: [138, 170],
      D: [234, 70],
      E: [234, 170],
      F: [316, 120]
    },
    edges: [["A", "B"], ["A", "C"], ["B", "D"], ["C", "E"], ["D", "F"], ["E", "F"], ["B", "C"], ["D", "E"]],
    pairs: [["A", "F"], ["A", "E"], ["B", "F"]]
  },
  medium: {
    nodes: {
      A: [48, 122],
      B: [112, 54],
      C: [112, 188],
      D: [188, 54],
      E: [188, 188],
      F: [260, 76],
      G: [260, 166],
      H: [326, 122]
    },
    edges: [["A", "B"], ["A", "C"], ["B", "D"], ["C", "E"], ["D", "F"], ["E", "G"], ["F", "H"], ["G", "H"], ["B", "E"], ["C", "D"], ["D", "E"], ["F", "G"]],
    pairs: [["A", "H"], ["B", "G"], ["C", "F"]]
  },
  hard: {
    nodes: {
      A: [38, 124],
      B: [96, 52],
      C: [96, 190],
      D: [164, 72],
      E: [164, 170],
      F: [230, 52],
      G: [230, 190],
      H: [300, 82],
      I: [300, 162]
    },
    edges: [["A", "B"], ["A", "C"], ["B", "D"], ["C", "E"], ["D", "F"], ["E", "G"], ["F", "H"], ["G", "I"], ["H", "I"], ["D", "E"], ["B", "E"], ["C", "D"], ["F", "G"], ["E", "I"]],
    pairs: [["A", "I"], ["B", "I"], ["C", "H"]]
  }
};

function graphPathProblem(settings) {
  const graph = graphPathLayouts[settings.difficulty] || graphPathLayouts.easy;
  const random = seededRandom(settings.seed * 1999 + { easy: 163, medium: 181, hard: 197 }[settings.difficulty]);
  const pair = graph.pairs[Math.floor(random() * graph.pairs.length)];
  const answer = shortestPathLength(graph.edges, pair[0], pair[1]);
  const choices = uniqueShuffledChoices([answer, answer + 1, Math.max(1, answer - 1), answer + 2], random, 4);
  return {
    multi: false,
    graph,
    start: pair[0],
    end: pair[1],
    prompt: `What is the shortest path length from ${pair[0]} to ${pair[1]}?`,
    choices: choices.map((value) => ({ value, label: `${value} ${Number(value) === 1 ? "edge" : "edges"}` })),
    answers: [String(answer)],
    emptyStatus: "Choose the fewest number of edges.",
    success: "Correct. That is the shortest path length.",
    hint: "Count edges, not nodes. Try tracing the shortest route without revisiting nodes."
  };
}

function shortestPathLength(edges, start, end) {
  const neighbors = new Map();
  edges.forEach(([left, right]) => {
    if (!neighbors.has(left)) neighbors.set(left, []);
    if (!neighbors.has(right)) neighbors.set(right, []);
    neighbors.get(left).push(right);
    neighbors.get(right).push(left);
  });
  const queue = [[start, 0]];
  const seen = new Set([start]);
  while (queue.length) {
    const [node, distance] = queue.shift();
    if (node === end) return distance;
    (neighbors.get(node) || []).forEach((next) => {
      if (seen.has(next)) return;
      seen.add(next);
      queue.push([next, distance + 1]);
    });
  }
  return 0;
}

function numberGameProblem(game) {
  const settings = currentNumberGameState(game);
  if (game === "prime-factors") return primeFactorProblem(settings);
  if (game === "gcd-race") return gcdRaceProblem(settings);
  if (game === "divisibility") return divisibilityProblem(settings);
  if (game === "graph-paths") return graphPathProblem(settings);
  return residueMatchProblem(settings);
}

function selectedNumberGameValues(game) {
  const key = gameStateKey(game);
  const stored = state.games[key];
  if (!stored) return [];
  if (Array.isArray(stored.selected)) return stored.selected.map(String);
  return stored.selected === null || stored.selected === undefined ? [] : [String(stored.selected)];
}

function numberGameIsCorrect(game, problem) {
  const selected = selectedNumberGameValues(game).sort();
  const answers = problem.answers.map(String).sort();
  return selected.length === answers.length && selected.every((value, index) => value === answers[index]);
}

function renderNumberGames() {
  ["prime-factors", "gcd-race", "divisibility", "residue-match", "graph-paths"].forEach((game) => {
    const key = gameStateKey(game);
    const stored = state.games[key];
    const problem = numberGameProblem(game);
    const selected = new Set(selectedNumberGameValues(game));
    const checked = Boolean(stored?.checked);
    const choicesEl = els.numberGameChoices[game];
    const statusEl = els.numberGameStatuses[game];
    const promptEl = els.numberGamePrompts[game];
    const difficultyEl = els.numberGameDifficulties[game];
    if (!choicesEl || !statusEl || !promptEl || !difficultyEl) return;

    difficultyEl.value = currentNumberGameState(game).difficulty;
    promptEl.textContent = problem.prompt;
    if (game === "graph-paths") renderGraphPathsFigure(problem);
    renderNumberGameVisual(game, problem, selected, checked);
    choicesEl.innerHTML = "";
    problem.choices.forEach((choice, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.dataset.numberGame = game;
      button.dataset.numberValue = choice.value;
      button.textContent = choice.label;
      button.setAttribute("aria-label", `${index + 1}. ${choice.label}`);
      if (selected.has(String(choice.value))) button.classList.add("selected");
      if (checked && problem.answers.map(String).includes(String(choice.value))) button.classList.add("correct");
      if (checked && selected.has(String(choice.value)) && !problem.answers.map(String).includes(String(choice.value))) button.classList.add("wrong");
      choicesEl.append(button);
    });

    if (checked && numberGameIsCorrect(game, problem)) {
      statusEl.textContent = `${problem.success} Press Return or New for another round.`;
    } else if (checked) {
      statusEl.textContent = numberGameWrongStatus(game, problem);
    } else if (selected.size > 0) {
      statusEl.textContent = "Press Check when ready.";
    } else {
      statusEl.textContent = problem.emptyStatus;
    }
  });
}

function renderNumberGameVisual(game, problem, selected, checked) {
  const visual = els.numberGameVisuals?.[game];
  if (!visual) return;
  visual.replaceChildren();
  visual.className = `number-game-visual ${game}-visual`;

  if (game === "prime-factors") {
    renderPrimeFactorVisual(visual, problem, selected, checked);
  } else if (game === "gcd-race") {
    renderGcdVisual(visual, problem, selected, checked);
  } else if (game === "residue-match") {
    renderResidueVisual(visual, problem, selected, checked);
  }
}

function renderPrimeFactorVisual(visual, problem, selected, checked) {
  const selectedFactors = [...selected].map(Number).filter(Number.isFinite);
  const hasSelection = selectedFactors.length > 0;
  const product = selectedFactors.reduce((value, factor) => value * factor, 1);
  const wholeRemainder = hasSelection && product > 0 && problem.number % product === 0;
  const remaining = wholeRemainder ? problem.number / product : null;
  const target = numberVisualBlock("target", "target number", problem.number);
  const productState = checked
    ? product === problem.number ? "correct" : "wrong"
    : hasSelection ? "selected" : "empty";
  const remainingState = hasSelection && !wholeRemainder ? "wrong" : "";
  const selectedProduct = numberVisualBlock("product", "selected product", hasSelection ? product : "choose", productState);
  const remainingBlock = numberVisualBlock("remaining", "remaining factor", hasSelection ? remaining ?? "not whole" : problem.number, remainingState);
  const slots = document.createElement("div");
  slots.className = "number-visual-slots";

  if (hasSelection) {
    selectedFactors.forEach((factor, index) => {
      if (index) slots.append(numberVisualOperator("×"));
      const factorState = checked
        ? problem.answers.includes(String(factor)) ? "correct" : "wrong"
        : "";
      slots.append(numberVisualChip(factor, factorState));
    });
  } else {
    slots.append(numberVisualChip("choose primes", "empty"));
  }

  visual.append(
    numberVisualCaption("Build a product from prime choices"),
    numberVisualRow(target, numberVisualOperator("="), selectedProduct, numberVisualOperator("×"), remainingBlock),
    slots
  );
}

function renderGcdVisual(visual, problem, selected, checked) {
  const selectedValue = [...selected][0] || "?";
  const selectedNumber = Number(selectedValue);
  const hasSelection = selected.size > 0 && Number.isFinite(selectedNumber) && selectedNumber > 0;
  const dividesLeft = hasSelection && problem.left % selectedNumber === 0;
  const dividesRight = hasSelection && problem.right % selectedNumber === 0;
  const isCorrect = numberGameIsCorrect("gcd-race", problem);
  const centerValue = checked && !isCorrect
    ? `${selectedValue} → ${problem.common}`
    : selectedValue;
  const centerClass = checked
    ? isCorrect ? "correct" : "wrong"
    : selected.size ? "selected" : "empty";
  const venn = document.createElement("div");
  venn.className = "gcd-venn";
  venn.append(
    numberVisualVennCircle("left number", problem.left, "left"),
    numberVisualVennCircle("right number", problem.right, "right"),
    numberVisualBlock("overlap", "candidate", centerValue, centerClass)
  );

  const checks = document.createElement("div");
  checks.className = "number-visual-slots";
  if (hasSelection) {
    checks.append(
      numberVisualChip(`divides ${problem.left}: ${dividesLeft ? "yes" : "no"}`, dividesLeft ? "correct" : "wrong"),
      numberVisualChip(`divides ${problem.right}: ${dividesRight ? "yes" : "no"}`, dividesRight ? "correct" : "wrong")
    );
    if (checked && !isCorrect) checks.append(numberVisualChip(`greatest: ${problem.common}`, "correct"));
  } else {
    checks.append(numberVisualChip("choose a shared divisor", "empty"));
  }

  visual.append(
    numberVisualCaption("Find the largest shared divisor"),
    venn,
    checks
  );
}

function renderResidueVisual(visual, problem, selected, checked) {
  const residues = residueWheelSvg(problem, selected, checked);

  const selectedList = document.createElement("div");
  selectedList.className = "residue-selected-list";
  if (selected.size) {
    [...selected].sort((a, b) => Number(a) - Number(b)).forEach((value) => {
      const remainder = Number(value) % problem.modulus;
      const stateClass = checked
        ? remainder === problem.residue ? "correct" : "wrong"
        : remainder === problem.residue ? "selected" : "";
      selectedList.append(numberVisualChip(`${value} → ${remainder}`, stateClass));
    });
  } else {
    selectedList.append(numberVisualChip("selected values appear here", "empty"));
  }

  visual.append(
    numberVisualCaption(`Modulo ${problem.modulus}: target remainder ${problem.residue}`),
    residues,
    selectedList
  );
}

function residueWheelSvg(problem, selected, checked) {
  const svg = svgEl("svg", { class: "residue-wheel", viewBox: "0 0 220 220", "aria-hidden": "true" });
  const selectedRemainders = new Set([...selected].map((value) => String(Number(value) % problem.modulus)));
  svg.append(svgEl("circle", { class: "residue-wheel-ring", cx: 110, cy: 110, r: 78 }));

  for (let index = 0; index < problem.modulus; index += 1) {
    const angle = -Math.PI / 2 + (index / problem.modulus) * Math.PI * 2;
    const x = 110 + Math.cos(angle) * 78;
    const y = 110 + Math.sin(angle) * 78;
    const selectedHere = selectedRemainders.has(String(index));
    const stateClass = [
      index === problem.residue ? "target" : "",
      selectedHere ? "selected" : "",
      checked && selectedHere && index !== problem.residue ? "wrong" : ""
    ].filter(Boolean).join(" ");
    const group = svgEl("g", { class: `residue-wheel-node ${stateClass}`.trim() });
    group.append(svgEl("circle", { cx: x, cy: y, r: 18 }));
    const text = svgEl("text", { x, y: y + 5, "text-anchor": "middle" });
    text.textContent = index;
    group.append(text);
    svg.append(group);
  }

  return svg;
}

function numberVisualCaption(text) {
  const caption = document.createElement("div");
  caption.className = "number-visual-caption";
  caption.textContent = text;
  return caption;
}

function numberVisualRow(...items) {
  const row = document.createElement("div");
  row.className = "number-visual-row";
  row.append(...items);
  return row;
}

function numberVisualBlock(kind, label, value, stateClass = "") {
  const block = document.createElement("div");
  block.className = `number-visual-block ${kind} ${stateClass}`.trim();
  const labelEl = document.createElement("span");
  labelEl.className = "number-visual-label";
  labelEl.textContent = label;
  const valueEl = document.createElement("strong");
  valueEl.textContent = String(value);
  block.append(labelEl, valueEl);
  return block;
}

function numberVisualVennCircle(label, value, side) {
  const circle = document.createElement("div");
  circle.className = `gcd-venn-circle ${side}`;
  const labelEl = document.createElement("span");
  labelEl.textContent = label;
  const valueEl = document.createElement("strong");
  valueEl.textContent = String(value);
  circle.append(labelEl, valueEl);
  return circle;
}

function numberVisualChip(value, stateClass = "") {
  const chip = document.createElement("span");
  chip.className = `number-visual-chip ${stateClass}`.trim();
  chip.textContent = String(value);
  return chip;
}

function numberVisualOperator(value) {
  const operator = document.createElement("span");
  operator.className = "number-visual-operator";
  operator.textContent = value;
  return operator;
}

function numberVisualHint(text) {
  const hint = document.createElement("p");
  hint.className = "number-visual-hint";
  hint.textContent = text;
  return hint;
}

function numberGameWrongStatus(game, problem) {
  const selected = selectedNumberGameValues(game);
  const selectedText = selected.length ? selected.join(", ") : "nothing";
  const answerText = problem.answers.map(String).join(", ");
  return `Not quite. You chose ${selectedText}. Correct ${problem.multi ? "choices are" : "choice is"} ${answerText}. ${problem.hint}`;
}

function renderGraphPathsFigure(problem) {
  const svg = els.graphPathsFigure;
  if (!svg || !problem?.graph) return;
  svg.innerHTML = "";
  problem.graph.edges.forEach(([left, right]) => {
    const [x1, y1] = problem.graph.nodes[left];
    const [x2, y2] = problem.graph.nodes[right];
    svg.append(svgEl("line", { x1, y1, x2, y2, class: "graph-edge" }));
  });
  Object.entries(problem.graph.nodes).forEach(([node, [cx, cy]]) => {
    const group = svgEl("g", { class: `graph-node ${node === problem.start || node === problem.end ? "target" : ""}` });
    group.append(svgEl("circle", { cx, cy, r: 18 }));
    const label = svgEl("text", { x: cx, y: cy + 6, "text-anchor": "middle" });
    label.textContent = node;
    group.append(label);
    svg.append(group);
  });
}

function toggleNumberGameChoice(game, value) {
  const key = gameStateKey(game);
  const problem = numberGameProblem(game);
  const stored = state.games[key];
  if (!stored) return;
  if (problem.multi) {
    const selected = new Set(selectedNumberGameValues(game));
    if (selected.has(String(value))) {
      selected.delete(String(value));
    } else {
      selected.add(String(value));
    }
    stored.selected = [...selected];
  } else {
    stored.selected = String(value);
  }
  stored.checked = false;
  saveGames(`Updated ${gameLabel(game)}`);
  renderNumberGames();
}

function checkNumberGame(game) {
  const key = gameStateKey(game);
  if (!state.games[key]) return;
  state.games[key].checked = true;
  saveGames(`Checked ${gameLabel(game)}`);
  renderNumberGames();
}

function isNumberGameCorrect(game) {
  const key = gameStateKey(game);
  if (!state.games[key]?.checked) return false;
  return numberGameIsCorrect(game, numberGameProblem(game));
}

function newNumberGame(game) {
  const key = gameStateKey(game);
  if (!state.games[key]) return;
  state.games[key].seed = (Number(state.games[key].seed) || 0) + 1;
  state.games[key].selected = Array.isArray(state.games[key].selected) ? [] : null;
  state.games[key].checked = false;
  saveGames(`Started a new ${gameLabel(game)}`);
  renderNumberGames();
}

function setNumberGameDifficulty(game, difficulty) {
  const key = gameStateKey(game);
  if (!state.games[key]) return;
  state.games[key].difficulty = difficulty;
  state.games[key].seed = 0;
  state.games[key].selected = Array.isArray(state.games[key].selected) ? [] : null;
  state.games[key].checked = false;
  saveGames(`Changed ${gameLabel(game)} difficulty`);
  renderNumberGames();
}

function handleSudokuKeydown(event) {
  if (state.activeSurface !== "games" || event.defaultPrevented) return false;
  if (state.games.activeGame === "mod-clock") return handleModClockKeydown(event);
  if (gameStateKey(state.games.activeGame)) return handleNumberGameKeydown(event);
  if (isFormControl(event.target) && !event.target.classList?.contains("sudoku-cell")) return false;

  const { size } = currentSudokuSettings();
  if (/^\d$/.test(event.key) && Number(event.key) >= 1 && Number(event.key) <= size) {
    event.preventDefault();
    setSudokuValue(event.key);
    return true;
  }
  if (event.key === "Backspace" || event.key === "Delete" || event.key === "0") {
    event.preventDefault();
    setSudokuValue("");
    return true;
  }
  if (event.key === "Enter") {
    event.preventDefault();
    if (isSudokuSolved()) {
      newSudoku();
    } else {
      checkSudoku();
    }
    return true;
  }
  const moves = {
    ArrowUp: [-1, 0],
    ArrowDown: [1, 0],
    ArrowLeft: [0, -1],
    ArrowRight: [0, 1]
  };
  if (moves[event.key]) {
    event.preventDefault();
    moveSudokuSelection(...moves[event.key]);
    return true;
  }
  return false;
}

function handleNumberGameKeydown(event) {
  const game = state.games.activeGame;
  if (isFormControl(event.target) && !event.target.closest?.("[data-number-choices]")) return false;
  if (event.key === "Enter") {
    event.preventDefault();
    if (isNumberGameCorrect(game)) {
      newNumberGame(game);
    } else {
      checkNumberGame(game);
    }
    return true;
  }
  if (/^[1-9]$/.test(event.key)) {
    const problem = numberGameProblem(game);
    const choice = problem.choices[Number(event.key) - 1];
    if (!choice) return false;
    event.preventDefault();
    toggleNumberGameChoice(game, choice.value);
    return true;
  }
  return false;
}

function handleModClockKeydown(event) {
  if (isFormControl(event.target) && !event.target.classList?.contains("mod-clock-node")) return false;
  const problem = modClockProblem();
  if (/^\d$/.test(event.key)) {
    const nextText = `${state.games.modClock.pendingDigits || ""}${event.key}`.slice(-2);
    const value = Number.parseInt(nextText, 10);
    event.preventDefault();
    state.games.modClock.pendingDigits = value < problem.modulus ? nextText : event.key;
    selectModClockValue(Number.parseInt(state.games.modClock.pendingDigits, 10));
    return true;
  }
  if (event.key === "Backspace" || event.key === "Delete") {
    event.preventDefault();
    state.games.modClock.selected = null;
    state.games.modClock.pendingDigits = "";
    state.games.modClock.checked = false;
    saveGames();
    renderModClock();
    return true;
  }
  if (event.key === "ArrowLeft" || event.key === "ArrowDown" || event.key === "ArrowRight" || event.key === "ArrowUp") {
    event.preventDefault();
    const delta = event.key === "ArrowLeft" || event.key === "ArrowDown" ? -1 : 1;
    const current = Number.isInteger(state.games.modClock.selected) ? state.games.modClock.selected : problem.start;
    selectModClockValue((current + delta + problem.modulus) % problem.modulus);
    return true;
  }
  if (event.key === "Enter") {
    event.preventDefault();
    if (isModClockCorrect()) {
      newModClock();
    } else {
      checkModClock();
    }
    return true;
  }
  return false;
}

function renderSurface() {
  const isScratchpad = state.activeSurface === "scratchpad";
  const isPhysics = state.activeSurface === "physics";
  const isTools = state.activeSurface === "tools";
  const isGames = state.activeSurface === "games";
  const isExplorations = state.activeSurface === "explorations";
  document.body.dataset.surface = state.activeSurface;
  els.lessonPanel.hidden = isScratchpad || isTools || isGames || isExplorations;
  els.scratchpadPanel.hidden = !isScratchpad;
  els.toolsPanel.hidden = !isTools;
  els.sudokuPanel.hidden = !isGames;
  els.explorationsPanel.hidden = !isExplorations;
  els.topicPanel.hidden = isScratchpad || isTools || isGames || isExplorations;
  els.workspaceLayout.classList.toggle("single-column", isScratchpad || isTools || isGames || isExplorations);
  els.learnSurface.setAttribute("aria-pressed", !isScratchpad && !isPhysics && !isTools && !isGames && !isExplorations ? "true" : "false");
  els.physicsSurface.setAttribute("aria-pressed", isPhysics ? "true" : "false");
  els.toolsSurface.setAttribute("aria-pressed", isTools ? "true" : "false");
  els.gamesSurface.setAttribute("aria-pressed", isGames ? "true" : "false");
  els.explorationsSurface.setAttribute("aria-pressed", isExplorations ? "true" : "false");
  els.scratchpadSurface.setAttribute("aria-pressed", isScratchpad ? "true" : "false");
  if (isScratchpad) {
    els.scratchpadInput?.focus({ preventScroll: true });
  } else if (isTools) {
    renderTools();
  } else if (isGames) {
    renderGames();
  } else if (isExplorations) {
    renderExplorations();
  }
}

function setSurface(surface) {
  state.activeSurface = surface;
  ensureSurfaceWorkspace();
  state.scratchpads.activeSurface = surface;
  saveScratchpads();
  renderSurface();
  renderTopics();
  if (surface === "scratchpad") {
    renderScratchpad();
  } else if (surface === "tools") {
    renderTools();
  } else if (surface === "games") {
    renderGames();
  } else if (surface === "explorations") {
    renderExplorations();
  } else {
    renderWorkspace();
  }
  updateUrlFromState();
}

function renderIntroWorkspace(workspace) {
  setWorkspaceView("intro");
  els.overlay.innerHTML = "";
  state.currentModel = null;
  els.introTitle.textContent = "Overview";
  renderIntroCopy(workspace);
  els.stepText.textContent = `${lessonStudioMove(workspace)} Then start a problem.`;
}

function renderIntroCopy(workspace) {
  const items = workspace.intro || introCoreItems(workspace);
  const figures = createIntroFigures(workspace);
  const figureWrap = document.createElement("div");
  figureWrap.className = "intro-figures";
  figureWrap.append(...figures);
  const isProcedural = workspace.type !== "concept";
  const sections = document.createElement("div");
  sections.className = "intro-sections";
  sections.append(createIntroSection("Core idea", items, isProcedural), createWorkedExampleSection(workspace));

  const studioMove = lessonStudioItems(workspace);
  if (studioMove.length) sections.append(createIntroSection("Studio move", studioMove));

  const explanation = introExplanationSection(workspace);
  if (explanation?.items?.length) sections.append(createIntroSection(explanation.title, explanation.items));

  const applications = introApplicationItems(workspace);
  if (applications.length) sections.append(createIntroSection("Where it shows up", applications));

  const workspaceItems = introWorkspaceItems(workspace);
  if (workspaceItems.length) sections.append(createIntroSection("In the workspace", workspaceItems));

  els.introCopy.replaceChildren(...(figures.length ? [figureWrap] : []), sections);
}

function introCoreItems(workspace) {
  return window.CarryHowThisWorks?.introCoreItems?.(workspace) || ["This interactive workspace is planned."];
}

function createIntroFigures(workspace) {
  const custom = window.CarryIntroFigures?.create?.(workspace);
  if (custom?.length) return [...custom, ...supplementalIntroFigures(workspace)].filter(Boolean);
  const primary = createIntroFigure(workspace);
  const figures = [primary];
  if (primary && !primary.classList.contains("intro-math-figure")) {
    const rows = staticMathFigureRows(workspace);
    if (rows) figures.push(createIntroMathFigure(rows, "The same idea in symbols.", workspace.type));
  }
  figures.push(...supplementalIntroFigures(workspace));
  return figures.filter(Boolean);
}

function introExplanationSection(workspace) {
  if (workspace.type === "concept") {
    return { title: "What to notice", items: conceptNoticeItems(workspace) };
  }
  return { title: "Why it works", items: introWhyItems(workspace) };
}

function introWorkspaceItems(workspace) {
  return window.CarryHowThisWorks?.introWorkspaceItems?.(workspace) || [];
}

function introApplicationItems(workspace) {
  return window.CarryHowThisWorks?.introApplicationItems?.(workspace) || [];
}

function createIntroSection(title, items, ordered = false) {
  const section = document.createElement("section");
  section.className = "intro-section";

  const heading = document.createElement("h4");
  heading.textContent = title;

  const list = document.createElement(ordered ? "ol" : "ul");
  for (const item of items.filter(Boolean)) {
    const li = document.createElement("li");
    setMathText(li, item);
    list.append(li);
  }

  section.append(heading, list);
  return section;
}

function lessonStudioMove(workspace) {
  return window.CarryHowThisWorks?.lessonStudioMove?.(workspace) || `Review ${workspace.title.toLowerCase()}, then try the prompt.`;
}

function lessonStudioItems(workspace) {
  return window.CarryHowThisWorks?.lessonStudioItems?.(workspace) || [];
}

function createWorkedExampleSection(workspace) {
  const rows = introWorkedExampleRows(workspace);
  if (!rows) return createIntroSection("Worked example", introWorkedExampleItems(workspace), workspace.type !== "concept");

  const section = document.createElement("section");
  section.className = "intro-section";

  const heading = document.createElement("h4");
  heading.textContent = "Worked example";

  const work = document.createElement("div");
  work.className = "intro-worked-lines";
  if (rows.filter((row) => splitTopLevelEquals(normalizePlainMathLine(row.math))).length > 1) {
    work.classList.add("align-equals");
  }

  for (const row of rows) {
    const line = document.createElement("div");
    line.className = "intro-worked-line";

    const math = document.createElement("div");
    math.className = "intro-worked-math";
    appendAlignedMathLine(math, normalizePlainMathLine(row.math), "intro", work.classList.contains("align-equals"));

    const note = document.createElement("p");
    note.className = "intro-worked-note";
    setMathText(note, row.note);

    line.append(math, note);
    work.append(line);
  }

  section.append(heading, work);
  return section;
}

function appendAlignedMathLine(target, latex, prefix, align = true) {
  const split = splitTopLevelEquals(latex);
  if (!split || !align) {
    target.append(createMathMlExpression(latex));
    return;
  }

  target.classList.add(`${prefix}-line-math-aligned`);
  const left = document.createElement("span");
  left.className = `${prefix}-align-left`;
  const equals = document.createElement("span");
  equals.className = `${prefix}-align-equals`;
  const right = document.createElement("span");
  right.className = `${prefix}-align-right`;
  left.append(createMathMlExpression(split.left));
  equals.textContent = "=";
  right.append(createMathMlExpression(split.right));
  target.append(left, equals, right);
}

function introWorkedExampleRows(workspace) {
  return window.CarryHowThisWorks?.introWorkedExampleRows?.(workspace) || conceptWorkedExampleRows(workspace);
}

function introWorkedExampleItems(workspace) {
  if (workspace.type === "concept" && workspace.problems?.length) return conceptWorkedExampleItems(workspace);
  return window.CarryHowThisWorks?.introWorkedExampleItems?.(workspace) || [
    "Read the prompt, identify the current rule, and make one small move.",
    "Check that move before continuing."
  ];
}

function introWhyItems(workspace) {
  if (workspace.type === "concept") return conceptWhyItems(workspace);
  return window.CarryHowThisWorks?.introWhyItems?.(workspace) || [
    "The rule connects the notation to one small action.",
    "Checking a small action prevents a mistake from spreading.",
    "The same pattern can then be reused on new numbers."
  ];
}

function conceptWhyItems(workspace) {
  return window.CarryHowThisWorks?.conceptWhyItems?.(workspace) || [
    "Name the objects in the definition before choosing an answer.",
    "Check the condition stated in the lesson directly.",
    "Use the example as a model for the kind of test to apply."
  ];
}

function conceptNoticeItems(workspace) {
  return window.CarryHowThisWorks?.conceptNoticeItems?.(workspace) || conceptWhyItems(workspace);
}

function conceptWorkedExampleRows(workspace) {
  return window.CarryHowThisWorks?.conceptWorkedExampleRows?.(workspace) || null;
}

function conceptWorkedExampleItems(workspace) {
  return window.CarryHowThisWorks?.conceptWorkedExampleItems?.(workspace) || [
    "Example: name the objects in the definition first.",
    "Check the condition the lesson is about.",
    "Decide whether the example satisfies that condition."
  ];
}

function createIntroFigure(workspace) {
  if (!["addition", "subtraction", "multiplication", "division", "concept", "equation", "inequality", "quadratic", "system", "factoring"].includes(workspace.type)) return null;

  if (shouldUseDiagramIntroFigure(workspace.figure)) {
    const figure = document.createElement("figure");
    const caption = document.createElement("figcaption");
    caption.textContent = introFigureCaption(workspace);
    figure.className = `intro-figure ${workspace.type}-figure geometry-figure`;
    figure.append(createDiagramIntroSvg(workspace.figure), caption);
    return figure;
  }

  const staticMathFigure = createStaticMathIntroFigure(workspace);
  if (staticMathFigure) return staticMathFigure;

  const figure = document.createElement("figure");
  figure.className = `intro-figure ${workspace.type}-figure`;
  if (isDiagramFigure(workspace.figure)) {
    const caption = document.createElement("figcaption");
    caption.textContent = introFigureCaption(workspace);
    figure.classList.add("geometry-figure");
    figure.append(createDiagramIntroSvg(workspace.figure), caption);
    return figure;
  }

  const grid = document.createElement("div");
  grid.className = "intro-figure-grid";

  if (workspace.type === "concept" || workspace.type === "equation" || workspace.type === "inequality" || workspace.type === "quadratic") {
    addConceptIntroFigure(grid, workspace.figure);
  } else if (workspace.type === "addition") {
    addIntroCell(grid, "carry", 1, 1, "label");
    addIntroCell(grid, "1", 1, 3, "mark");
    addIntroCell(grid, "top", 2, 1, "label");
    addIntroCell(grid, "4", 2, 2);
    addIntroCell(grid, "8", 2, 3, "active-source");
    addIntroCell(grid, "6", 2, 4);
    addIntroCell(grid, "by", 3, 1, "label");
    addIntroCell(grid, "+", 3, 1, "operator");
    addIntroCell(grid, "2", 3, 2);
    addIntroCell(grid, "5", 3, 3, "active-source");
    addIntroCell(grid, "7", 3, 4);
    addIntroRule(grid, 4);
    addIntroCell(grid, "sum", 5, 1, "label");
    addIntroCell(grid, "3", 5, 4, "result");
    addIntroCell(grid, "4", 5, 3, "active-result");
    addIntroCell(grid, "", 5, 2, "empty");
  } else if (workspace.type === "subtraction") {
    addIntroCell(grid, "top", 1, 1, "label");
    addIntroCell(grid, "5", 1, 2, "borrow-lent-demo");
    addIntroCell(grid, "13", 1, 3, "mark wide-mark");
    addIntroCell(grid, "4", 1, 3, "borrow-lent-demo active-source");
    addIntroCell(grid, "5", 1, 4);
    addIntroCell(grid, "by", 2, 1, "label");
    addIntroCell(grid, "–", 2, 1, "operator");
    addIntroCell(grid, "2", 2, 2);
    addIntroCell(grid, "7", 2, 3, "active-source");
    addIntroCell(grid, "8", 2, 4);
    addIntroRule(grid, 3);
    addIntroCell(grid, "difference", 4, 1, "label");
    addIntroCell(grid, "7", 4, 4, "result");
    addIntroCell(grid, "6", 4, 3, "active-result");
  } else if (workspace.type === "multiplication") {
    addIntroCell(grid, "carry", 1, 1, "label");
    addIntroCell(grid, "2", 1, 3, "mark");
    addIntroCell(grid, "top", 2, 1, "label");
    addIntroCell(grid, "2", 2, 2);
    addIntroCell(grid, "4", 2, 3, "active-source");
    addIntroCell(grid, "7", 2, 4);
    addIntroCell(grid, "by", 3, 1, "label");
    addIntroCell(grid, "×", 3, 1, "operator");
    addIntroCell(grid, "3", 3, 2);
    addIntroCell(grid, "8", 3, 3);
    addIntroCell(grid, "6", 3, 4, "active-source");
    addIntroRule(grid, 4);
    addIntroCell(grid, "ones", 5, 1, "label");
    addIntroCell(grid, "2", 5, 4, "active-result");
    addIntroCell(grid, "8", 5, 3, "result");
  } else if (workspace.type === "division") {
    addIntroCell(grid, "quotient", 1, 1, "label");
    addIntroCell(grid, "2", 1, 2, "active-result");
    addIntroCell(grid, "1", 1, 3, "result");
    addIntroCell(grid, "6", 1, 4, "result");
    addIntroCell(grid, "4", 2, 1, "operator division-divisor-demo");
    addIntroCell(grid, "8", 2, 2, "division-digit-demo active-source");
    addIntroCell(grid, "6", 2, 3, "division-digit-demo");
    addIntroCell(grid, "4", 2, 4, "division-digit-demo");
    addIntroCell(grid, "partial", 3, 1, "label");
    addIntroCell(grid, "8", 3, 2, "active-source");
    addIntroCell(grid, "product", 4, 1, "label");
    addIntroCell(grid, "8", 4, 2, "result");
    addIntroCell(grid, "remain", 5, 1, "label");
    addIntroCell(grid, "0", 5, 2, "result");
  }

  const caption = document.createElement("figcaption");
  caption.textContent = introFigureCaption(workspace);
  figure.append(grid, caption);
  return figure;
}

const DRAWN_FIGURE_OVERRIDES = new Set([
  "fraction-bar",
  "mixed-review",
  "operation-order",
  "factor-pairs",
  "expression-terms",
  "polynomial-terms",
  "rational-cancel",
  "quadratic-roots",
  "geometry-circle",
  "geometry-area-volume",
  "trig-right-triangle",
  "trig-identities",
  "precalc-exponential-log",
  "calc-derivatives",
  "calc-integrals",
  "real-limits",
  "abstract-rings",
  "abstract-fields",
  "abstract-homomorphisms"
]);

function shouldUseDiagramIntroFigure(figure) {
  return isPhysicsDiagramFigure(figure) || DRAWN_FIGURE_OVERRIDES.has(figure) || (isDiagramFigure(figure) && !staticMathFigureRows({ figure }));
}

function createStaticMathIntroFigure(workspace) {
  const rows = staticMathFigureRows(workspace);
  if (!rows) return null;

  return createIntroMathFigure(rows, introFigureCaption(workspace), workspace.type);
}

function createIntroMathFigure(rows, captionText, type = "concept") {
  const figure = document.createElement("figure");
  figure.className = `intro-figure intro-math-figure ${type}-figure`;

  const stack = document.createElement("div");
  stack.className = "intro-math-stack";
  if (rows.filter((row) => splitTopLevelEquals(normalizePlainMathLine(row))).length > 1) {
    stack.classList.add("align-equals");
  }
  for (const row of rows) {
    const item = document.createElement("div");
    item.className = "intro-math-row";
    appendAlignedMathLine(item, normalizePlainMathLine(row), "intro", stack.classList.contains("align-equals"));
    stack.append(item);
  }

  const caption = document.createElement("figcaption");
  caption.textContent = captionText;
  figure.append(stack, caption);
  return figure;
}

function supplementalIntroFigures(workspace) {
  if (workspace.id === "arithmetic.place-value") {
    return [
      createIntroMathFigure(
        ["642 = 600 + 40 + 2", "642 = 6 × 100 + 4 × 10 + 2 × 1"],
        "Expanded form shows the value contributed by each digit.",
        workspace.type
      )
    ];
  }

  return [];
}

function staticMathFigureRows(workspace) {
  const byFigure = {
    "fraction-bar": ["\\frac{3}{4}", "\\frac{6}{8} = \\frac{3}{4}"],
    "mixed-review": ["38 + 47 = 85", "96 ÷ 8 = 12"],
    "operation-order": ["3 + 4 × 5 = 23"],
    "factor-pairs": ["6 × 7 = 42"],
    "expression-terms": ["2x + x = 3x"],
    "polynomial-terms": ["3x^2 + 5x^2 = 8x^2"],
    "factoring-pairs": ["x^2 + 5x + 6 = (x + 2)(x + 3)", "2 + 3 = 5", "2 × 3 = 6"],
    "rational-cancel": ["\\frac{(x - 3)(x + 3)}{x - 3} = x + 3"],
    "quadratic-roots": ["(x - 2)(x - 3) = 0", "x = 2 \\quad \\text{or} \\quad x = 3"],
    "geometry-circle": ["C = \\pi d", "A = \\pi r^2"],
    "geometry-area-volume": ["A = lw", "V = lwh"],
    "trig-right-triangle": ["\\sin\\,\\theta = \\frac{\\text{opposite}}{\\text{hypotenuse}}", "\\cos\\,\\theta = \\frac{\\text{adjacent}}{\\text{hypotenuse}}", "\\tan\\,\\theta = \\frac{\\text{opposite}}{\\text{adjacent}}"],
    "trig-identities": ["\\sin^2 \\theta + \\cos^2 \\theta = 1", "\\tan\\,x = \\frac{\\sin\\,x}{\\cos\\,x}"],
    "precalc-exponential-log": ["\\log_b(b^x) = x"],
    "calc-derivatives": ["\\frac{d}{dx} x^2 = 2x"],
    "calc-integrals": ["\\int_0^1 x^2\\,dx"],
    "diff-eq-slope-fields": ["\\frac{dy}{dx} = x", "x = 0 \\Rightarrow \\frac{dy}{dx} = 0"],
    "diff-eq-separable": ["\\frac{dy}{dx} = 3xy", "\\frac{1}{y}\\,dy = 3x\\,dx"],
    "diff-eq-first-order": ["\\frac{dP}{dt} = kP", "\\frac{dT}{dt} = -k(T - A)"],
    "diff-eq-second-order": ["x''(t) = a(t)", "m x'' + kx = 0"],
    "probability-sample-space": ["S = \\{H, T\\}", "A \\subseteq S"],
    "probability-basic": ["P(A) = \\frac{\\text{favorable}}{\\text{total}}", "P(3) = \\frac{1}{6}"],
    "probability-counting": ["3 \\times 2 = 6", "\\text{multiply choices}"],
    "probability-conditional": ["P(A | B)", "\\text{condition narrows the sample space}"],
    "probability-random-variable": ["X(H)=1", "X(T)=0", "E[X] = \\frac{1}{2}"],
    "real-limits": ["\\lim_{x \\to a} f(x) = L"],
    "complex-functions": ["z = x + iy", "f(z) = z^2"],
    "complex-analytic": ["f \\text{ analytic on } U", "U \\text{ open}"],
    "complex-contour": ["\\oint_C f(z)\\,dz", "C \\text{ closed}"],
    "complex-power-series": ["\\sum_{n=0}^{\\infty} a_n(z-a)^n", "|z-a| < R"],
    "complex-residues": ["f(z)=\\frac{1}{z-a}", "\\operatorname{Res}(f,a)=1"],
    "topology-open-sets": ["(0,1)\\,\\text{is open in}\\,\\mathbb{R}", "x \\in U \\Rightarrow \\text{small interval around }x"],
    "topology-closed-sets": ["F\\,\\text{closed} \\iff X \\setminus F\\,\\text{open}"],
    "topology-metric-spaces": ["d(x,y) \\ge 0", "d(x,z) \\le d(x,y) + d(y,z)"],
    "topology-bases": ["U = B_1 \\cup B_2", "B_i\\,\\text{basic open}"],
    "topology-continuity": ["U\\,\\text{open} \\Rightarrow f^{-1}(U)\\,\\text{open}"],
    "topology-compactness": ["\\text{open cover} \\Rightarrow \\text{finite subcover}"],
    "topology-connectedness": ["\\text{connected} \\Rightarrow \\text{one piece}"],
    "topology-homeomorphisms": ["f:X \\to Y", "f\\,\\text{and}\\,f^{-1}\\,\\text{continuous}"],
    "abstract-rings": ["a(b + c) = ab + ac"],
    "abstract-fields": ["a · a^{-1} = 1"],
    "abstract-homomorphisms": ["f(a + b) = f(a) + f(b)"],
    "physics-units": ["\\text{speed} = \\frac{\\text{distance}}{\\text{time}}", "\\frac{\\text{m}}{\\text{s}}"],
    "physics-vectors": ["v = \\text{magnitude} + \\text{direction}", "10\\,\\text{N} \\to"],
    "physics-graphs": ["\\text{slope} = \\frac{\\Delta x}{\\Delta t}", "\\text{area under }v(t) = \\Delta x"],
    "physics-kinematics": ["v = \\frac{\\Delta x}{\\Delta t}", "a = \\frac{\\Delta v}{\\Delta t}"],
    "physics-forces": ["F = ma", "2\\,\\text{kg} \\cdot 3\\,\\frac{\\text{m}}{\\text{s}^2} = 6\\,\\text{N}"],
    "physics-energy": ["K = \\frac{1}{2}mv^2", "U = mgh"],
    "physics-momentum": ["p = mv", "3\\,\\text{kg} \\cdot 4\\,\\frac{\\text{m}}{\\text{s}} = 12\\,\\text{kg}\\,\\frac{\\text{m}}{\\text{s}}"],
    "physics-oscillations": ["f = \\frac{1}{T}", "T = \\frac{1}{f}"],
    "physics-waves": ["v = f\\lambda", "2\\,\\text{Hz} \\cdot 3\\,\\text{m} = 6\\,\\frac{\\text{m}}{\\text{s}}"],
    "physics-sound": ["\\text{higher }f \\Rightarrow \\text{higher pitch}", "\\text{sound needs a medium}"],
    "physics-circuits": ["V = IR", "2\\,\\text{A} \\cdot 5\\,\\text{Ω} = 10\\,\\text{V}"],
    "physics-magnetism": ["\\text{moving charge} \\Rightarrow \\text{magnetic field}", "N\\;S \\Rightarrow \\text{attract}"],
    "physics-heat": ["Q: \\text{hot} \\to \\text{cold}", "\\Delta T \\Rightarrow \\text{heat transfer}"],
    "physics-ideal-gas": ["PV = nRT"],
    "physics-quantum": ["E = hf", "\\text{photon} = \\text{quantum of light}"],
    "physics-relativity": ["E = mc^2", "v \\approx c \\Rightarrow \\text{relativity matters}"]
  };

  if (workspace.type === "equation") return ["x + 7 = 12", "x = 5"];
  if (workspace.type === "inequality") return ["x > 5"];
  return byFigure[workspace.figure] || null;
}

function isDiagramFigure(figure) {
  if (!figure || staticMathFigureRows({ figure })) return false;
  const diagramPrefixes = ["geometry-", "trig-", "precalc-", "calc-", "linear-", "proof-", "set-", "number-", "graph-", "real-", "abstract-", "physics-"];
  const diagramFigures = new Set([
    "place-value",
    "number-line",
    "integer-line",
    "estimation",
    "fraction-bar",
    "decimal-grid",
    "percent-grid",
    "ratio-bars",
    "factor-pairs",
    "operation-order",
    "word-problem",
    "mixed-review",
    "expression-terms",
    "equation-balance",
    "inequality-line",
    "exponent-stack",
    "coordinate-plane",
    "system-intersection",
    "polynomial-terms",
    "factoring-pairs",
    "rational-cancel",
    "quadratic-roots"
  ]);
  return diagramPrefixes.some((prefix) => figure.startsWith(prefix)) || diagramFigures.has(figure);
}

function isPhysicsDiagramFigure(figure) {
  return new Set([
    "physics-vectors",
    "physics-graphs",
    "physics-sound",
    "physics-charge-fields",
    "physics-magnetism",
    "physics-heat",
    "physics-quantum",
    "physics-relativity"
  ]).has(figure);
}

function createDiagramIntroSvg(figure) {
  const svg = svgElement("svg", {
    class: "geometry-diagram",
    viewBox: "0 0 360 180",
    role: "img",
    "aria-label": conceptFigureCaption(figure)
  });

  svg.append(svgElement("rect", { class: "geometry-frame", x: 1, y: 1, width: 358, height: 178, rx: 8 }));

  if (figure === "number-line" || figure === "integer-line") {
    const ticks = figure === "integer-line"
      ? [
          { value: "-7", x: 76 },
          { value: "-3", x: 124, active: true },
          { value: "0", x: 160, result: true },
          { value: "5", x: 220, active: true },
          { value: "8", x: 256, result: true }
        ]
      : [
          { value: "300", x: 78 },
          { value: "400", x: 166, result: true },
          { value: "500", x: 254 }
        ];
    svg.append(
      svgElement("line", { class: "geometry-line", x1: 54, y1: 104, x2: 306, y2: 104 }),
      svgElement("path", { class: "geometry-line", d: "M 294 94 L 308 104 L 294 114" })
    );
    for (const tick of ticks) {
      svg.append(
        svgElement("line", { class: tick.active ? "geometry-line active" : "geometry-line", x1: tick.x, y1: 94, x2: tick.x, y2: 114 }),
        svgElement("circle", { class: tick.result ? "geometry-point result" : tick.active ? "geometry-point active" : "geometry-point", cx: tick.x, cy: 104, r: tick.result || tick.active ? 5 : 3 })
      );
      svgText(svg, tick.value, tick.x, 136, tick.result ? "geometry-label geometry-math result" : "geometry-label geometry-math", "middle");
    }
    if (figure === "integer-line") {
      svg.append(svgElement("path", { class: "geometry-line active", d: "M 124 78 C 154 44 220 44 256 78" }));
      svgText(svg, "move right to add", 132, 58, "geometry-note");
      svgText(svg, "right is greater", 200, 158, "geometry-note");
    } else {
      svg.append(svgElement("path", { class: "geometry-line active", d: "M 162 76 C 180 54 218 54 250 78" }));
      svgText(svg, "398 is near 400", 112, 62, "geometry-note");
      svgText(svg, "closer", 182, 92, "geometry-note");
    }
  } else if (figure === "place-value") {
    const columns = [
      { label: "hundreds", digit: "6", value: "600", x: 46 },
      { label: "tens", digit: "4", value: "40", x: 144 },
      { label: "ones", digit: "2", value: "2", x: 242 }
    ];
    svgText(svg, "number: 642", 180, 32, "geometry-label geometry-math", "middle");
    for (const column of columns) {
      svg.append(
        svgElement("rect", { class: "geometry-shape active", x: column.x, y: 50, width: 72, height: 48, rx: 6 }),
        svgElement("rect", { class: "geometry-shape result", x: column.x, y: 116, width: 72, height: 34, rx: 6 }),
        svgElement("path", { class: "geometry-line result", d: `M ${column.x + 36} 100 V 112` })
      );
      svgText(svg, column.label, column.x + 36, 46, "geometry-note", "middle");
      svgText(svg, column.digit, column.x + 36, 82, "geometry-label geometry-math active", "middle");
      svgText(svg, column.value, column.x + 36, 140, "geometry-label geometry-math result", "middle");
    }
  } else if (figure === "fraction-bar") {
    [0, 1, 2, 3].forEach((index) => {
      svg.append(svgElement("rect", { class: index < 3 ? "geometry-shape active" : "geometry-shape", x: 66 + index * 58, y: 70, width: 58, height: 42, rx: 0 }));
    });
    svgText(svg, "3 of 4 equal parts", 104, 142, "geometry-label geometry-math result");
    svgText(svg, "same whole", 124, 48, "geometry-note");
  } else if (figure === "decimal-grid" || figure === "percent-grid") {
    for (let row = 0; row < 10; row += 1) {
      for (let col = 0; col < 10; col += 1) {
        const index = row * 10 + col;
        svg.append(svgElement("rect", {
          class: index < 60 ? "geometry-shape active" : "geometry-shape",
          x: 70 + col * 18,
          y: 30 + row * 11,
          width: 14,
          height: 8,
          rx: 2
        }));
      }
    }
    svgText(svg, figure === "percent-grid" ? "60 of 100 = 60%" : "6 tenths = 0.6", 206, 154, "geometry-label geometry-math result", "middle");
  } else if (figure === "ratio-bars") {
    svg.append(
      svgElement("rect", { class: "geometry-shape active", x: 62, y: 54, width: 72, height: 28, rx: 4 }),
      svgElement("rect", { class: "geometry-shape result", x: 134, y: 54, width: 108, height: 28, rx: 4 }),
      svgElement("rect", { class: "geometry-shape active", x: 62, y: 104, width: 144, height: 28, rx: 4 }),
      svgElement("rect", { class: "geometry-shape result", x: 206, y: 104, width: 108, height: 28, rx: 4 })
    );
    svgText(svg, "2 : 3", 72, 44, "geometry-label geometry-math active");
    svgText(svg, "×2", 260, 82, "geometry-note");
    svgText(svg, "4 : 6", 72, 154, "geometry-label geometry-math result");
  } else if (figure === "equation-balance") {
    svg.append(
      svgElement("line", { class: "geometry-line", x1: 180, y1: 48, x2: 180, y2: 128 }),
      svgElement("line", { class: "geometry-line", x1: 78, y1: 94, x2: 282, y2: 94 }),
      svgElement("path", { class: "geometry-line active", d: "M 108 94 L 88 134 H 128 Z" }),
      svgElement("path", { class: "geometry-line result", d: "M 252 94 L 232 134 H 272 Z" })
    );
    svgText(svg, "x + 7", 84, 78, "geometry-label geometry-math active");
    svgText(svg, "12", 244, 78, "geometry-label geometry-math result");
    svgText(svg, "do the same thing to both sides", 92, 158, "geometry-note");
  } else if (figure === "inequality-line") {
    svg.append(
      svgElement("line", { class: "geometry-line", x1: 58, y1: 104, x2: 304, y2: 104 }),
      svgElement("path", { class: "geometry-line active", d: "M 182 104 H 298" }),
      svgElement("path", { class: "geometry-line active", d: "M 286 94 L 300 104 L 286 114" }),
      svgElement("circle", { class: "geometry-shape result", cx: 182, cy: 104, r: 8 })
    );
    svgText(svg, "5", 176, 136, "geometry-label geometry-math");
    svgText(svg, "x > 5", 150, 70, "geometry-label geometry-math result");
    svgText(svg, "open circle, shade right", 112, 158, "geometry-note");
  } else if (figure === "exponent-stack") {
    [72, 116, 160, 204, 248].forEach((x, index) => {
      svg.append(svgElement("circle", { class: "geometry-point active", cx: x, cy: 94, r: 12 }));
      svgText(svg, "2", x, 100, "geometry-label geometry-math active", "middle");
      if (index < 4) svgText(svg, "×", x + 24, 100, "geometry-label geometry-math");
    });
    svgText(svg, "2^5 means five factors of 2", 88, 142, "geometry-label geometry-math result");
  } else if (figure === "coordinate-plane") {
    drawMiniAxes(svg);
    svg.append(
      svgElement("path", { class: "geometry-line active", d: "M 154 102 H 238" }),
      svgElement("path", { class: "geometry-line result", d: "M 238 102 V 142" }),
      svgElement("circle", { class: "geometry-point result", cx: 238, cy: 142, r: 5 })
    );
    svgText(svg, "(3, -2)", 246, 145, "geometry-label geometry-math result");
    svgText(svg, "right, then down", 86, 54, "geometry-note");
  } else if (figure === "estimation") {
    svg.append(
      svgElement("line", { class: "geometry-line", x1: 58, y1: 108, x2: 304, y2: 108 }),
      svgElement("circle", { class: "geometry-point active", cx: 168, cy: 108, r: 5 }),
      svgElement("circle", { class: "geometry-point result", cx: 172, cy: 108, r: 8 })
    );
    svgText(svg, "398", 154, 82, "geometry-label geometry-math active");
    svgText(svg, "400", 158, 142, "geometry-label geometry-math result");
    svgText(svg, "round to a nearby friendly number", 82, 54, "geometry-note");
  } else if (figure === "factor-pairs") {
    svgText(svg, "6 × 7", 88, 84, "geometry-label geometry-math active");
    svgText(svg, "=", 166, 84, "geometry-label geometry-math");
    svgText(svg, "42", 202, 84, "geometry-label geometry-math result");
    svg.append(
      svgElement("path", { class: "geometry-line active", d: "M 110 98 C 122 128 188 128 216 98" }),
      svgElement("circle", { class: "geometry-point active", cx: 96, cy: 78, r: 5 }),
      svgElement("circle", { class: "geometry-point active", cx: 142, cy: 78, r: 5 })
    );
    svgText(svg, "a factor pair multiplies to the target", 74, 146, "geometry-note");
  } else if (figure === "operation-order") {
    svgText(svg, "3 + 4 × 5", 78, 68, "geometry-label geometry-math");
    svg.append(
      svgElement("rect", { class: "geometry-shape active", x: 142, y: 42, width: 80, height: 38, rx: 6 }),
      svgElement("path", { class: "geometry-line active", d: "M 182 84 V 112" })
    );
    svgText(svg, "multiply first", 136, 128, "geometry-note");
    svgText(svg, "23", 238, 128, "geometry-label geometry-math result");
  } else if (figure === "word-problem") {
    svg.append(
      svgElement("rect", { class: "geometry-shape active", x: 64, y: 54, width: 70, height: 46, rx: 6 }),
      svgElement("path", { class: "geometry-line active", d: "M 136 78 H 218" }),
      svgElement("path", { class: "geometry-line active", d: "M 206 68 L 220 78 L 206 88" }),
      svgElement("rect", { class: "geometry-shape result", x: 222, y: 54, width: 74, height: 46, rx: 6 })
    );
    svgText(svg, "story", 88, 83, "geometry-note");
    svgText(svg, "18 + 7", 232, 83, "geometry-label geometry-math result");
    svgText(svg, "choose the operation before calculating", 72, 138, "geometry-note");
  } else if (figure === "mixed-review") {
    ["+", "–", "×", "÷"].forEach((symbol, index) => {
      const x = 78 + index * 52;
      svg.append(svgElement("circle", { class: index === 2 ? "geometry-shape active" : "geometry-shape", cx: x, cy: 82, r: 22 }));
      svgText(svg, symbol, x, 90, "geometry-label geometry-math", "middle");
    });
    svgText(svg, "pick a method", 92, 132, "geometry-note");
    svgText(svg, "then check", 210, 132, "geometry-note");
  } else if (figure === "expression-terms" || figure === "polynomial-terms") {
    const left = figure === "polynomial-terms" ? "3x^2" : "2x";
    const right = figure === "polynomial-terms" ? "5x^2" : "x";
    const result = figure === "polynomial-terms" ? "8x^2" : "3x";
    svgText(svg, left, 72, 78, "geometry-label geometry-math active");
    svgText(svg, "+", 134, 78, "geometry-label geometry-math");
    svgText(svg, right, 166, 78, "geometry-label geometry-math active");
    svg.append(svgElement("path", { class: "geometry-line active", d: "M 78 94 C 112 126 176 126 202 94" }));
    svgText(svg, "same variable part", 104, 138, "geometry-note");
    svgText(svg, result, 250, 78, "geometry-label geometry-math result");
  } else if (figure === "system-intersection") {
    drawMiniAxes(svg);
    svg.append(
      svgElement("path", { class: "geometry-line active", d: "M 86 142 L 260 48" }),
      svgElement("path", { class: "geometry-line result", d: "M 90 56 L 260 140" }),
      svgElement("circle", { class: "geometry-point", cx: 176, cy: 94, r: 6 })
    );
    svgText(svg, "(2, 1)", 188, 86, "geometry-label geometry-math");
    svgText(svg, "both equations true here", 104, 158, "geometry-note");
  } else if (figure === "factoring-pairs") {
    svgText(svg, "x^2 + 5x + 6", 66, 54, "geometry-label geometry-math");
    svgText(svg, "2 + 3 = 5", 86, 100, "geometry-label geometry-math active");
    svgText(svg, "2 × 3 = 6", 86, 132, "geometry-label geometry-math result");
    svg.append(svgElement("path", { class: "geometry-line active", d: "M 238 92 L 282 92 L 282 122 L 238 122 Z" }));
    svgText(svg, "(x+2)(x+3)", 202, 158, "geometry-label geometry-math result");
  } else if (figure === "rational-cancel") {
    svgText(svg, "(x - 3)(x + 3)", 70, 64, "geometry-label geometry-math active");
    svg.append(svgElement("line", { class: "geometry-line", x1: 70, y1: 82, x2: 214, y2: 82 }));
    svgText(svg, "x - 3", 112, 112, "geometry-label geometry-math active");
    svg.append(
      svgElement("path", { class: "geometry-line result", d: "M 88 48 L 154 118" }),
      svgElement("path", { class: "geometry-line result", d: "M 240 82 H 282" })
    );
    svgText(svg, "x + 3", 290, 88, "geometry-label geometry-math result");
  } else if (figure === "quadratic-roots") {
    svg.append(
      svgElement("line", { class: "geometry-line", x1: 58, y1: 124, x2: 304, y2: 124 }),
      svgElement("path", { class: "geometry-line active", d: "M 92 132 Q 180 38 268 132" }),
      svgElement("circle", { class: "geometry-point result", cx: 132, cy: 124, r: 5 }),
      svgElement("circle", { class: "geometry-point result", cx: 228, cy: 124, r: 5 })
    );
    svgText(svg, "roots", 162, 58, "geometry-note");
    svgText(svg, "x = 2", 110, 154, "geometry-label geometry-math result");
    svgText(svg, "x = 3", 208, 154, "geometry-label geometry-math result");
  } else if (figure === "set-notation") {
    svg.append(
      svgElement("rect", { class: "geometry-shape active", x: 78, y: 52, width: 204, height: 72, rx: 10 }),
      svgElement("circle", { class: "geometry-point result", cx: 138, cy: 88, r: 6 }),
      svgElement("circle", { class: "geometry-point result", cx: 180, cy: 88, r: 6 }),
      svgElement("circle", { class: "geometry-point result", cx: 222, cy: 88, r: 6 })
    );
    svgText(svg, "A = {1, 2, 3}", 116, 40, "geometry-label geometry-math");
    svgText(svg, "2 ∈ A", 154, 150, "geometry-label geometry-math result");
  } else if (figure === "set-subsets") {
    svg.append(
      svgElement("circle", { class: "geometry-shape active", cx: 178, cy: 92, r: 64 }),
      svgElement("circle", { class: "geometry-shape result", cx: 158, cy: 92, r: 32 })
    );
    svgText(svg, "B", 226, 70, "geometry-label geometry-math active");
    svgText(svg, "A", 152, 98, "geometry-label geometry-math result");
    svgText(svg, "A ⊆ B", 142, 156, "geometry-label geometry-math");
  } else if (figure === "set-operations") {
    svg.append(
      svgElement("circle", { class: "geometry-shape active", cx: 142, cy: 90, r: 52 }),
      svgElement("circle", { class: "geometry-shape result", cx: 206, cy: 90, r: 52 })
    );
    svgText(svg, "A", 100, 54, "geometry-label geometry-math active");
    svgText(svg, "B", 240, 54, "geometry-label geometry-math result");
    svgText(svg, "A ∩ B", 154, 94, "geometry-label geometry-math");
    svgText(svg, "shared middle", 132, 150, "geometry-note");
  } else if (figure === "set-relations") {
    svg.append(
      svgElement("rect", { class: "geometry-shape active", x: 62, y: 42, width: 82, height: 104, rx: 8 }),
      svgElement("rect", { class: "geometry-shape result", x: 220, y: 42, width: 82, height: 104, rx: 8 })
    );
    [["1", 88, 72], ["2", 88, 118], ["x", 260, 72], ["y", 260, 118]].forEach(([text, x, y]) => svgText(svg, text, x, y, "geometry-label geometry-math", "middle"));
    svg.append(
      svgElement("path", { class: "geometry-line active", d: "M 104 68 H 244" }),
      svgElement("path", { class: "geometry-line result", d: "M 104 114 C 150 146 206 146 244 118" })
    );
    svgText(svg, "ordered pairs", 130, 164, "geometry-note");
  } else if (figure === "set-functions") {
    svg.append(
      svgElement("rect", { class: "geometry-shape active", x: 62, y: 42, width: 82, height: 104, rx: 8 }),
      svgElement("rect", { class: "geometry-shape result", x: 220, y: 42, width: 82, height: 104, rx: 8 })
    );
    [["input", 102, 32], ["output", 262, 32], ["1", 102, 74], ["2", 102, 116], ["a", 262, 74], ["b", 262, 116]].forEach(([text, x, y]) => svgText(svg, text, x, y, "geometry-note", "middle"));
    svg.append(
      svgElement("path", { class: "geometry-line active", d: "M 112 72 H 250" }),
      svgElement("path", { class: "geometry-line active", d: "M 238 62 L 252 72 L 238 82" }),
      svgElement("path", { class: "geometry-line result", d: "M 112 114 H 250" }),
      svgElement("path", { class: "geometry-line result", d: "M 238 104 L 252 114 L 238 124" })
    );
    svgText(svg, "one output per input", 112, 164, "geometry-note");
  } else if (figure === "set-countability") {
    [78, 118, 158, 198, 238, 278].forEach((x, index) => {
      svg.append(svgElement("circle", { class: index < 4 ? "geometry-point active" : "geometry-point result", cx: x, cy: 90, r: 6 }));
      svgText(svg, String(index + 1), x, 122, "geometry-label geometry-math", "middle");
    });
    svg.append(svgElement("path", { class: "geometry-line active", d: "M 72 90 H 286" }));
    svgText(svg, "listable: 1, 2, 3, ...", 104, 58, "geometry-note");
    svgText(svg, "countable", 142, 154, "geometry-label result");
  } else if (figure === "number-divisibility") {
    svgText(svg, "20 = 4 × 5", 92, 72, "geometry-label geometry-math active");
    svg.append(
      svgElement("rect", { class: "geometry-shape result", x: 82, y: 100, width: 44, height: 28, rx: 4 }),
      svgElement("rect", { class: "geometry-shape result", x: 132, y: 100, width: 44, height: 28, rx: 4 }),
      svgElement("rect", { class: "geometry-shape result", x: 182, y: 100, width: 44, height: 28, rx: 4 }),
      svgElement("rect", { class: "geometry-shape result", x: 232, y: 100, width: 44, height: 28, rx: 4 })
    );
    svgText(svg, "equal groups, no remainder", 104, 158, "geometry-note");
  } else if (figure === "number-primes") {
    svgText(svg, "12", 164, 42, "geometry-label geometry-math");
    svg.append(
      svgElement("path", { class: "geometry-line active", d: "M 174 50 L 122 88 M 174 50 L 224 88" }),
      svgElement("path", { class: "geometry-line result", d: "M 122 96 L 96 132 M 122 96 L 148 132" })
    );
    svgText(svg, "4", 116, 104, "geometry-label geometry-math active");
    svgText(svg, "3", 220, 104, "geometry-label geometry-math result");
    svgText(svg, "2", 90, 150, "geometry-label geometry-math result");
    svgText(svg, "2", 144, 150, "geometry-label geometry-math result");
    svgText(svg, "prime factors", 198, 150, "geometry-note");
  } else if (figure === "number-gcd-lcm") {
    svgText(svg, "12: 1,2,3,4,6,12", 62, 64, "geometry-label geometry-math active");
    svgText(svg, "18: 1,2,3,6,9,18", 62, 100, "geometry-label geometry-math result");
    svg.append(svgElement("rect", { class: "geometry-shape result", x: 152, y: 72, width: 34, height: 40, rx: 5 }));
    svgText(svg, "6", 164, 100, "geometry-label geometry-math");
    svgText(svg, "largest shared divisor", 100, 150, "geometry-note");
  } else if (figure === "number-euclidean") {
    svgText(svg, "18 = 12 × 1 + 6", 70, 62, "geometry-label geometry-math active");
    svgText(svg, "12 = 6 × 2 + 0", 70, 104, "geometry-label geometry-math result");
    svg.append(svgElement("path", { class: "geometry-line active", d: "M 220 66 C 250 78 250 100 220 108" }));
    svgText(svg, "last nonzero remainder is 6", 82, 150, "geometry-note");
  } else if (figure === "number-modular") {
    svg.append(svgElement("circle", { class: "geometry-shape", cx: 178, cy: 90, r: 58 }));
    for (let i = 0; i < 12; i += 1) {
      const angle = (-90 + i * 30) * Math.PI / 180;
      const x = 178 + Math.cos(angle) * 42;
      const y = 90 + Math.sin(angle) * 42;
      svgText(svg, String(i === 0 ? 12 : i), x, y + 5, "geometry-note", "middle");
    }
    svg.append(svgElement("path", { class: "geometry-line active", d: "M 178 90 L 178 48 M 178 90 L 220 90" }));
    svgText(svg, "wrap around", 128, 164, "geometry-note");
  } else if (figure === "number-congruences") {
    svg.append(
      svgElement("line", { class: "geometry-line", x1: 58, y1: 104, x2: 304, y2: 104 }),
      svgElement("circle", { class: "geometry-point active", cx: 112, cy: 104, r: 6 }),
      svgElement("circle", { class: "geometry-point result", cx: 232, cy: 104, r: 6 }),
      svgElement("path", { class: "geometry-line active", d: "M 112 78 C 146 42 198 42 232 78" })
    );
    svgText(svg, "2", 108, 134, "geometry-label geometry-math");
    svgText(svg, "17", 224, 134, "geometry-label geometry-math");
    svgText(svg, "same remainder mod 5", 106, 58, "geometry-note");
  } else if (figure === "graph-vertices-edges") {
    drawGraphIntro(svg, [
      { id: "A", x: 96, y: 72, className: "geometry-shape active" },
      { id: "B", x: 194, y: 58, className: "geometry-shape active" },
      { id: "C", x: 150, y: 124, className: "geometry-shape active" },
      { id: "D", x: 256, y: 118, className: "geometry-shape result" }
    ], [
      { from: "A", to: "B", className: "geometry-line active" },
      { from: "B", to: "C", className: "geometry-line active" },
      { from: "B", to: "D", className: "geometry-line result" }
    ]);
    svgText(svg, "vertices", 72, 40, "geometry-note");
    svgText(svg, "edges connect vertices", 160, 156, "geometry-note", "middle");
  } else if (figure === "graph-paths-cycles") {
    drawGraphIntro(svg, [
      { id: "A", x: 92, y: 60, className: "geometry-shape active" },
      { id: "B", x: 208, y: 60, className: "geometry-shape active" },
      { id: "C", x: 242, y: 126, className: "geometry-shape active" },
      { id: "D", x: 126, y: 126, className: "geometry-shape result" }
    ], [
      { from: "A", to: "B", className: "geometry-line active" },
      { from: "B", to: "C", className: "geometry-line active" },
      { from: "C", to: "D", className: "geometry-line result" },
      { from: "D", to: "A", className: "geometry-line result" },
      { from: "A", to: "C", className: "geometry-line" }
    ]);
    svgText(svg, "path A-B-C has length 2", 96, 38, "geometry-note");
    svgText(svg, "cycle returns to A", 136, 158, "geometry-note");
  } else if (figure === "graph-degree") {
    drawGraphIntro(svg, [
      { id: "A", x: 180, y: 92, className: "geometry-shape result", r: 17 },
      { id: "B", x: 104, y: 48, className: "geometry-shape active" },
      { id: "C", x: 96, y: 132, className: "geometry-shape active" },
      { id: "D", x: 258, y: 56, className: "geometry-shape active" },
      { id: "E", x: 266, y: 130, className: "geometry-shape" }
    ], [
      { from: "A", to: "B", className: "geometry-line active" },
      { from: "A", to: "C", className: "geometry-line active" },
      { from: "A", to: "D", className: "geometry-line active" },
      { from: "D", to: "E", className: "geometry-line" }
    ]);
    svgText(svg, "three edges touch A", 106, 34, "geometry-note");
    svgText(svg, "deg(A) = 3", 210, 102, "geometry-label geometry-math result");
  } else if (figure === "graph-trees") {
    drawGraphIntro(svg, [
      { id: "A", x: 178, y: 42, className: "geometry-shape result" },
      { id: "B", x: 116, y: 88, className: "geometry-shape active" },
      { id: "C", x: 240, y: 88, className: "geometry-shape active" },
      { id: "D", x: 84, y: 138, className: "geometry-shape" },
      { id: "E", x: 148, y: 138, className: "geometry-shape" },
      { id: "F", x: 240, y: 138, className: "geometry-shape" }
    ], [
      { from: "A", to: "B", className: "geometry-line result" },
      { from: "A", to: "C", className: "geometry-line result" },
      { from: "B", to: "D", className: "geometry-line active" },
      { from: "B", to: "E", className: "geometry-line active" },
      { from: "C", to: "F", className: "geometry-line active" }
    ]);
    svgText(svg, "connected", 56, 42, "geometry-note");
    svgText(svg, "no cycle", 250, 42, "geometry-note");
  } else if (figure === "graph-connectedness") {
    drawGraphIntro(svg, [
      { id: "A", x: 78, y: 72, className: "geometry-shape active" },
      { id: "B", x: 144, y: 54, className: "geometry-shape active" },
      { id: "C", x: 126, y: 126, className: "geometry-shape active" },
      { id: "D", x: 238, y: 70, className: "geometry-shape result" },
      { id: "E", x: 292, y: 126, className: "geometry-shape result" }
    ], [
      { from: "A", to: "B", className: "geometry-line active" },
      { from: "B", to: "C", className: "geometry-line active" },
      { from: "A", to: "C", className: "geometry-line active" },
      { from: "D", to: "E", className: "geometry-line result" }
    ]);
    svgText(svg, "component 1", 76, 156, "geometry-note");
    svgText(svg, "component 2", 228, 156, "geometry-note");
    svgText(svg, "no path across the gap", 150, 98, "geometry-note");
  } else if (figure === "geometry-angles") {
    svg.append(
      svgElement("line", { class: "geometry-line", x1: 62, y1: 124, x2: 298, y2: 124 }),
      svgElement("line", { class: "geometry-line active", x1: 142, y1: 124, x2: 86, y2: 48 }),
      svgElement("path", { class: "geometry-arc active", d: "M 112 124 A 30 30 0 0 1 124 100" }),
      svgElement("path", { class: "geometry-arc", d: "M 172 124 A 30 30 0 0 0 160 100" })
    );
    svgText(svg, "120°", 79, 84, "geometry-label geometry-math active");
    svgText(svg, "?", 189, 93, "geometry-label result");
    svgText(svg, "straight line = 180°", 108, 154, "geometry-note");
  } else if (figure === "geometry-triangle") {
    svg.append(
      svgElement("polygon", { class: "geometry-shape", points: "84,132 282,132 170,38" }),
      svgElement("path", { class: "geometry-arc active", d: "M 118 132 A 34 34 0 0 1 105 106" }),
      svgElement("path", { class: "geometry-arc active", d: "M 244 132 A 38 38 0 0 0 256 104" }),
      svgElement("path", { class: "geometry-arc result", d: "M 151 58 A 28 28 0 0 0 190 58" })
    );
    svgText(svg, "60°", 100, 109, "geometry-label geometry-math active");
    svgText(svg, "70°", 241, 108, "geometry-label geometry-math active");
    svgText(svg, "?", 168, 79, "geometry-label result");
    svgText(svg, "angles sum to 180°", 109, 158, "geometry-note");
  } else if (figure === "geometry-circle") {
    svg.append(
      svgElement("circle", { class: "geometry-shape", cx: 126, cy: 90, r: 56 }),
      svgElement("circle", { class: "geometry-point", cx: 126, cy: 90, r: 3 }),
      svgElement("line", { class: "geometry-line active", x1: 126, y1: 90, x2: 182, y2: 90 }),
      svgElement("line", { class: "geometry-line result", x1: 70, y1: 90, x2: 182, y2: 90 }),
      svgElement("path", { class: "geometry-arc", d: "M 208 50 A 68 68 0 0 1 208 130" })
    );
    svgText(svg, "r = 4", 142, 80, "geometry-label geometry-math active");
    svgText(svg, "d = 8", 104, 111, "geometry-label geometry-math result");
    svgText(svg, "C = πd", 226, 84, "geometry-label geometry-math");
    svgText(svg, "circumference", 216, 112, "geometry-note");
  } else if (figure === "geometry-area-volume") {
    svg.append(
      svgElement("rect", { class: "geometry-shape active", x: 54, y: 48, width: 112, height: 72, rx: 2 }),
      svgElement("polygon", { class: "geometry-shape", points: "218,61 287,42 315,83 247,103" }),
      svgElement("polygon", { class: "geometry-shape", points: "218,61 247,103 247,140 218,98" }),
      svgElement("polygon", { class: "geometry-shape result", points: "247,103 315,83 315,120 247,140" })
    );
    svgText(svg, "8", 100, 40, "geometry-label active");
    svgText(svg, "3", 34, 88, "geometry-label active");
    svgText(svg, "A = 24", 83, 148, "geometry-label geometry-math result");
    svgText(svg, "V = 2·3·5", 228, 154, "geometry-label geometry-math");
  } else if (figure === "geometry-coordinate") {
    for (let x = 52; x <= 292; x += 40) svg.append(svgElement("line", { class: "geometry-grid-line", x1: x, y1: 30, x2: x, y2: 150 }));
    for (let y = 30; y <= 150; y += 40) svg.append(svgElement("line", { class: "geometry-grid-line", x1: 52, y1: y, x2: 292, y2: y }));
    svg.append(
      svgElement("line", { class: "geometry-line", x1: 52, y1: 110, x2: 292, y2: 110 }),
      svgElement("line", { class: "geometry-line", x1: 92, y1: 30, x2: 92, y2: 150 }),
      svgElement("line", { class: "geometry-line active", x1: 92, y1: 70, x2: 252, y2: 70 }),
      svgElement("circle", { class: "geometry-point active", cx: 92, cy: 70, r: 4 }),
      svgElement("circle", { class: "geometry-point result", cx: 252, cy: 70, r: 4 })
    );
    svgText(svg, "(1, 2)", 64, 57, "geometry-label active");
    svgText(svg, "(5, 2)", 224, 57, "geometry-label result");
    svgText(svg, "horizontal distance = 4", 104, 96, "geometry-note");
  } else if (figure === "geometry-proof") {
    proofBox(svg, 36, 38, "Given", "right angles");
    proofBox(svg, 132, 38, "Reason", "all are 90°");
    proofBox(svg, 236, 38, "Claim", "equal");
    svg.append(
      svgElement("path", { class: "geometry-line", d: "M 116 75 H 132" }),
      svgElement("path", { class: "geometry-line", d: "M 212 75 H 236" })
    );
    svgText(svg, "A proof links each statement to a reason.", 62, 136, "geometry-note");
  } else if (figure === "trig-unit-circle") {
    svg.append(
      svgElement("circle", { class: "geometry-shape", cx: 132, cy: 90, r: 58 }),
      svgElement("line", { class: "geometry-line", x1: 54, y1: 90, x2: 210, y2: 90 }),
      svgElement("line", { class: "geometry-line", x1: 132, y1: 22, x2: 132, y2: 158 }),
      svgElement("line", { class: "geometry-line active", x1: 132, y1: 90, x2: 190, y2: 90 }),
      svgElement("circle", { class: "geometry-point result", cx: 190, cy: 90, r: 4 })
    );
    svgText(svg, "(cos θ, sin θ)", 222, 84, "geometry-label geometry-math");
    svgText(svg, "(1, 0)", 170, 112, "geometry-label geometry-math result");
  } else if (figure === "trig-right-triangle") {
    svg.append(
      svgElement("polygon", { class: "geometry-shape", points: "70,136 250,136 250,48" }),
      svgElement("path", { class: "geometry-arc active", d: "M 104 136 A 34 34 0 0 1 101 122" }),
      svgElement("polyline", { class: "geometry-line", points: "232,136 232,118 250,118" })
    );
    svgText(svg, "θ", 108, 126, "geometry-label geometry-math active");
    svgText(svg, "opposite", 260, 96, "geometry-note");
    svgText(svg, "adjacent", 132, 154, "geometry-note");
    svgText(svg, "hypotenuse", 128, 80, "geometry-note");
  } else if (figure === "trig-graphs") {
    svg.append(
      svgElement("line", { class: "geometry-line", x1: 52, y1: 90, x2: 316, y2: 90 }),
      svgElement("line", { class: "geometry-line", x1: 72, y1: 36, x2: 72, y2: 146 }),
      svgElement("path", { class: "geometry-line active", d: "M 72 90 C 110 36 148 36 186 90 S 262 144 300 90" }),
      svgElement("line", { class: "geometry-line result", x1: 130, y1: 90, x2: 130, y2: 48 }),
      svgElement("path", { class: "geometry-line", d: "M 72 148 V 140 M 72 144 H 300 M 300 148 V 140" })
    );
    svgText(svg, "amplitude", 146, 48, "geometry-note");
    svgText(svg, "0", 68, 112, "geometry-label geometry-math");
    svgText(svg, "2π", 292, 112, "geometry-label geometry-math");
    svgText(svg, "period", 170, 164, "geometry-note");
  } else if (figure === "trig-identities") {
    svgText(svg, "sin² x + cos² x = 1", 54, 76, "geometry-label geometry-math");
    svgText(svg, "tan x = sin x / cos x", 54, 118, "geometry-label geometry-math");
    svg.append(svgElement("path", { class: "geometry-line active", d: "M 52 88 H 286" }));
  } else if (figure === "trig-inverse") {
    svgText(svg, "ratio", 62, 78, "geometry-label");
    svgText(svg, "angle", 246, 78, "geometry-label");
    svg.append(
      svgElement("path", { class: "geometry-line active", d: "M 118 72 H 220" }),
      svgElement("path", { class: "geometry-line active", d: "M 208 62 L 222 72 L 208 82" })
    );
    svgText(svg, "arcsin", 148, 58, "geometry-label geometry-math");
    svgText(svg, "sin θ = 0", 82, 125, "geometry-label geometry-math");
    svgText(svg, "θ = 0", 226, 125, "geometry-label geometry-math result");
  } else if (figure === "precalc-functions") {
    svg.append(
      svgElement("line", { class: "geometry-line", x1: 58, y1: 132, x2: 304, y2: 132 }),
      svgElement("line", { class: "geometry-line", x1: 82, y1: 36, x2: 82, y2: 150 }),
      svgElement("path", { class: "geometry-line active", d: "M 82 122 C 132 104 160 72 206 62 S 270 78 304 48" }),
      svgElement("line", { class: "geometry-line result", x1: 186, y1: 132, x2: 186, y2: 68 }),
      svgElement("circle", { class: "geometry-point result", cx: 186, cy: 68, r: 4 })
    );
    svgText(svg, "input", 158, 154, "geometry-note");
    svgText(svg, "output", 28, 70, "geometry-note");
    svgText(svg, "f(2) = 3", 210, 74, "geometry-label geometry-math");
  } else if (figure === "precalc-transformations") {
    svg.append(
      svgElement("line", { class: "geometry-line", x1: 54, y1: 134, x2: 310, y2: 134 }),
      svgElement("line", { class: "geometry-line", x1: 90, y1: 42, x2: 90, y2: 148 }),
      svgElement("path", { class: "geometry-line", d: "M 76 128 Q 116 54 156 128" }),
      svgElement("path", { class: "geometry-line active", d: "M 150 98 Q 190 24 230 98" }),
      svgElement("path", { class: "geometry-line result", d: "M 146 92 L 164 74 M 146 92 L 166 94" })
    );
    svgText(svg, "y = x²", 78, 44, "geometry-label geometry-math");
    svgText(svg, "shift", 180, 124, "geometry-note");
    svgText(svg, "(h, k)", 226, 54, "geometry-label geometry-math result");
  } else if (figure === "precalc-polynomial-rational") {
    svg.append(
      svgElement("line", { class: "geometry-line", x1: 52, y1: 92, x2: 318, y2: 92 }),
      svgElement("line", { class: "geometry-line", x1: 112, y1: 32, x2: 112, y2: 150 }),
      svgElement("line", { class: "geometry-line result", x1: 216, y1: 34, x2: 216, y2: 148 }),
      svgElement("path", { class: "geometry-line active", d: "M 64 130 C 110 54 148 36 190 80" }),
      svgElement("path", { class: "geometry-line active", d: "M 238 134 C 258 94 282 70 310 52" })
    );
    svgText(svg, "zero", 138, 116, "geometry-note");
    svgText(svg, "not allowed", 228, 42, "geometry-note");
    svgText(svg, "x = 4", 222, 158, "geometry-label geometry-math");
  } else if (figure === "precalc-exponential-log") {
    svg.append(
      svgElement("line", { class: "geometry-line", x1: 54, y1: 136, x2: 314, y2: 136 }),
      svgElement("line", { class: "geometry-line", x1: 82, y1: 34, x2: 82, y2: 150 }),
      svgElement("line", { class: "geometry-line", x1: 72, y1: 140, x2: 302, y2: 40 }),
      svgElement("path", { class: "geometry-line active", d: "M 82 126 C 146 124 194 106 232 72 S 284 34 306 30" }),
      svgElement("path", { class: "geometry-line result", d: "M 82 130 C 126 110 172 86 222 78 S 282 72 308 58" })
    );
    svgText(svg, "2^x", 250, 44, "geometry-label geometry-math active");
    svgText(svg, "log x", 262, 86, "geometry-label geometry-math result");
  } else if (figure === "precalc-sequences") {
    [64, 114, 164, 214, 264].forEach((x, index) => {
      svg.append(svgElement("circle", { class: index < 4 ? "geometry-point active" : "geometry-point result", cx: x, cy: 126 - index * 18, r: 5 }));
      svgText(svg, String(index + 1), x - 4, 154, "geometry-note");
    });
    svg.append(svgElement("path", { class: "geometry-line", d: "M 64 126 L 114 108 L 164 90 L 214 72 L 264 54" }));
    svgText(svg, "add 3", 92, 72, "geometry-note");
    svgText(svg, "next", 250, 42, "geometry-note");
  } else if (figure === "precalc-complex") {
    svg.append(
      svgElement("line", { class: "geometry-line", x1: 52, y1: 100, x2: 310, y2: 100 }),
      svgElement("line", { class: "geometry-line", x1: 132, y1: 34, x2: 132, y2: 150 }),
      svgElement("line", { class: "geometry-line active", x1: 132, y1: 100, x2: 236, y2: 64 }),
      svgElement("line", { class: "geometry-line result", x1: 236, y1: 100, x2: 236, y2: 64 }),
      svgElement("circle", { class: "geometry-point result", cx: 236, cy: 64, r: 5 })
    );
    svgText(svg, "real", 278, 116, "geometry-note");
    svgText(svg, "imaginary", 144, 44, "geometry-note");
    svgText(svg, "3 + 2i", 246, 62, "geometry-label geometry-math result");
  } else if (figure === "calc-limits") {
    svg.append(
      svgElement("line", { class: "geometry-line", x1: 50, y1: 124, x2: 312, y2: 124 }),
      svgElement("line", { class: "geometry-line", x1: 82, y1: 38, x2: 82, y2: 146 }),
      svgElement("path", { class: "geometry-line active", d: "M 70 118 C 118 96 148 74 176 72 S 232 88 292 54" }),
      svgElement("circle", { class: "geometry-point result", cx: 176, cy: 72, r: 5 }),
      svgElement("path", { class: "geometry-line", d: "M 118 126 L 162 126 M 150 118 L 162 126 L 150 134" }),
      svgElement("path", { class: "geometry-line", d: "M 234 126 L 190 126 M 202 118 L 190 126 L 202 134" })
    );
    svgText(svg, "x → 2", 136, 152, "geometry-label geometry-math");
    svgText(svg, "limit = 5", 198, 66, "geometry-label geometry-math result");
  } else if (figure === "calc-derivatives") {
    svg.append(
      svgElement("line", { class: "geometry-line", x1: 52, y1: 132, x2: 314, y2: 132 }),
      svgElement("line", { class: "geometry-line", x1: 82, y1: 36, x2: 82, y2: 148 }),
      svgElement("path", { class: "geometry-line active", d: "M 76 124 Q 168 122 304 42" }),
      svgElement("line", { class: "geometry-line result", x1: 138, y1: 116, x2: 246, y2: 74 }),
      svgElement("circle", { class: "geometry-point result", cx: 192, cy: 95, r: 5 })
    );
    svgText(svg, "tangent slope", 230, 106, "geometry-note");
    svgText(svg, "dy/dx", 118, 70, "geometry-label geometry-math");
  } else if (figure === "calc-integrals") {
    svg.append(
      svgElement("line", { class: "geometry-line", x1: 52, y1: 136, x2: 314, y2: 136 }),
      svgElement("line", { class: "geometry-line", x1: 82, y1: 36, x2: 82, y2: 150 }),
      svgElement("path", { class: "geometry-line active", d: "M 82 126 C 128 76 174 64 220 82 S 282 118 306 62" }),
      svgElement("path", { class: "geometry-shape result", d: "M 118 136 L 118 98 C 152 74 184 72 220 82 L 220 136 Z" })
    );
    svgText(svg, "area", 156, 118, "geometry-note");
    svgText(svg, "∫ f(x) dx", 216, 58, "geometry-label geometry-math");
  } else if (figure === "calc-applications") {
    svg.append(
      svgElement("line", { class: "geometry-line", x1: 52, y1: 132, x2: 314, y2: 132 }),
      svgElement("line", { class: "geometry-line", x1: 82, y1: 36, x2: 82, y2: 150 }),
      svgElement("path", { class: "geometry-line active", d: "M 82 120 C 134 94 184 72 252 52" }),
      svgElement("rect", { class: "geometry-shape result", x: 100, y: 92, width: 132, height: 40, rx: 2 }),
      svgElement("path", { class: "geometry-line", d: "M 252 52 L 274 52 L 274 30" })
    );
    svgText(svg, "rate", 46, 70, "geometry-note");
    svgText(svg, "total", 144, 118, "geometry-note");
    svgText(svg, "optimum", 250, 28, "geometry-note");
  } else if (figure === "calc-series") {
    [76, 126, 176, 226, 276].forEach((x, index) => {
      const height = 74 / (index + 1);
      svg.append(svgElement("rect", { class: index < 4 ? "geometry-shape active" : "geometry-shape result", x: x - 12, y: 136 - height, width: 24, height, rx: 2 }));
    });
    svg.append(svgElement("line", { class: "geometry-line", x1: 52, y1: 136, x2: 314, y2: 136 }));
    svgText(svg, "partial sums", 124, 54, "geometry-note");
    svgText(svg, "approach 2", 206, 92, "geometry-label geometry-math result");
  } else if (figure === "linear-vectors") {
    svg.append(
      svgElement("line", { class: "geometry-line", x1: 48, y1: 132, x2: 312, y2: 132 }),
      svgElement("line", { class: "geometry-line", x1: 78, y1: 34, x2: 78, y2: 150 }),
      svgElement("path", { class: "geometry-line active", d: "M 78 132 L 170 72" }),
      svgElement("path", { class: "geometry-line active", d: "M 158 70 L 172 72 L 164 84" }),
      svgElement("path", { class: "geometry-line result", d: "M 78 132 L 242 54" }),
      svgElement("path", { class: "geometry-line result", d: "M 230 52 L 244 54 L 236 66" })
    );
    svgText(svg, "(2, 3)", 118, 84, "geometry-label geometry-math active");
    svgText(svg, "(6, 4)", 246, 58, "geometry-label geometry-math result");
  } else if (figure === "linear-matrices") {
    svgText(svg, "[ 1  0 ]", 62, 70, "geometry-label geometry-math");
    svgText(svg, "[ 0  1 ]", 62, 102, "geometry-label geometry-math");
    svgText(svg, "(5, 7)", 174, 86, "geometry-label geometry-math active");
    svg.append(
      svgElement("path", { class: "geometry-line", d: "M 142 83 H 166" }),
      svgElement("path", { class: "geometry-line", d: "M 238 83 H 266" }),
      svgElement("path", { class: "geometry-line", d: "M 254 73 L 268 83 L 254 93" })
    );
    svgText(svg, "(5, 7)", 276, 86, "geometry-label geometry-math result");
  } else if (figure === "linear-transformations") {
    svg.append(
      svgElement("line", { class: "geometry-line", x1: 52, y1: 132, x2: 314, y2: 132 }),
      svgElement("line", { class: "geometry-line", x1: 120, y1: 36, x2: 120, y2: 150 }),
      svgElement("polygon", { class: "geometry-shape active", points: "124,122 174,116 164,74 114,80" }),
      svgElement("polygon", { class: "geometry-shape result", points: "212,122 294,110 274,52 192,64" }),
      svgElement("path", { class: "geometry-line", d: "M 164 92 H 198 M 186 82 L 200 92 L 186 102" })
    );
    svgText(svg, "input", 112, 64, "geometry-note");
    svgText(svg, "T(v)", 244, 50, "geometry-label geometry-math result");
  } else if (figure === "linear-determinants") {
    svg.append(
      svgElement("polygon", { class: "geometry-shape active", points: "72,126 144,126 144,58 72,58" }),
      svgElement("polygon", { class: "geometry-shape result", points: "206,126 302,126 274,50 178,50" }),
      svgElement("path", { class: "geometry-line", d: "M 154 88 H 176 M 164 78 L 178 88 L 164 98" })
    );
    svgText(svg, "area 1", 86, 150, "geometry-note");
    svgText(svg, "area scales", 204, 150, "geometry-note");
    svgText(svg, "det A", 218, 88, "geometry-label geometry-math result");
  } else if (figure === "linear-eigenvalues") {
    svg.append(
      svgElement("line", { class: "geometry-line", x1: 50, y1: 132, x2: 314, y2: 132 }),
      svgElement("line", { class: "geometry-line", x1: 86, y1: 38, x2: 86, y2: 150 }),
      svgElement("path", { class: "geometry-line active", d: "M 86 132 L 168 78" }),
      svgElement("path", { class: "geometry-line result", d: "M 86 132 L 258 42" }),
      svgElement("path", { class: "geometry-line result", d: "M 244 42 L 260 42 L 252 56" })
    );
    svgText(svg, "v", 150, 74, "geometry-label geometry-math active");
    svgText(svg, "Av = 3v", 232, 62, "geometry-label geometry-math result");
  } else if (figure === "linear-vector-spaces") {
    svg.append(
      svgElement("line", { class: "geometry-line", x1: 48, y1: 132, x2: 312, y2: 132 }),
      svgElement("line", { class: "geometry-line", x1: 92, y1: 34, x2: 92, y2: 150 }),
      svgElement("path", { class: "geometry-line active", d: "M 92 132 L 286 44" }),
      svgElement("path", { class: "geometry-line active", d: "M 92 132 L 230 132" }),
      svgElement("path", { class: "geometry-line result", d: "M 92 132 L 92 48" })
    );
    svgText(svg, "span", 210, 74, "geometry-note");
    svgText(svg, "basis", 108, 48, "geometry-note");
    svgText(svg, "R²", 278, 126, "geometry-label geometry-math result");
  } else if (figure === "proof-logic") {
    proofBox(svg, 46, 52, "If P", "hypothesis");
    proofBox(svg, 234, 52, "Then Q", "conclusion");
    svg.append(
      svgElement("path", { class: "geometry-line active", d: "M 126 88 H 232" }),
      svgElement("path", { class: "geometry-line active", d: "M 220 78 L 234 88 L 220 98" })
    );
    svgText(svg, "implication", 142, 72, "geometry-note");
  } else if (figure === "proof-quantifiers") {
    svg.append(
      svgElement("circle", { class: "geometry-shape", cx: 126, cy: 92, r: 54 }),
      svgElement("circle", { class: "geometry-point active", cx: 96, cy: 84, r: 5 }),
      svgElement("circle", { class: "geometry-point active", cx: 128, cy: 64, r: 5 }),
      svgElement("circle", { class: "geometry-point active", cx: 156, cy: 104, r: 5 }),
      svgElement("circle", { class: "geometry-point result", cx: 252, cy: 92, r: 8 })
    );
    svgText(svg, "for all", 92, 156, "geometry-note");
    svgText(svg, "exists", 230, 126, "geometry-note");
    svgText(svg, "∀", 112, 98, "geometry-label geometry-math active");
    svgText(svg, "∃", 272, 98, "geometry-label geometry-math result");
  } else if (figure === "proof-induction") {
    [64, 116, 168, 220, 272].forEach((x, index) => {
      svg.append(svgElement("rect", { class: index === 0 ? "geometry-shape result" : "geometry-shape active", x: x - 18, y: 106 - index * 8, width: 36, height: 28, rx: 3 }));
      svgText(svg, String(index + 1), x - 5, 126 - index * 8, "geometry-note");
      if (index < 4) {
        svg.append(svgElement("path", { class: "geometry-line", d: `M ${x + 20} ${118 - index * 8} H ${x + 44}` }));
      }
    });
    svgText(svg, "base", 46, 82, "geometry-note");
    svgText(svg, "k → k + 1", 164, 68, "geometry-label geometry-math");
  } else if (figure === "proof-contradiction") {
    svgText(svg, "assume not P", 56, 62, "geometry-label geometry-math active");
    svg.append(
      svgElement("path", { class: "geometry-line active", d: "M 104 76 C 132 106 178 112 220 96" }),
      svgElement("path", { class: "geometry-line result", d: "M 214 84 L 242 112 M 242 84 L 214 112" })
    );
    svgText(svg, "impossible", 202, 136, "geometry-note");
    svgText(svg, "therefore P", 56, 144, "geometry-label geometry-math result");
  } else if (figure === "proof-construction") {
    proofBox(svg, 42, 48, "Build", "example");
    proofBox(svg, 236, 48, "Verify", "works");
    svg.append(
      svgElement("path", { class: "geometry-line active", d: "M 122 84 H 234" }),
      svgElement("path", { class: "geometry-line active", d: "M 222 74 L 236 84 L 222 94" })
    );
    svgText(svg, "12 is even", 128, 130, "geometry-label geometry-math result");
  } else if (figure === "proof-counterexamples") {
    svgText(svg, "all cases", 72, 54, "geometry-note");
    svg.append(
      svgElement("line", { class: "geometry-line active", x1: 64, y1: 92, x2: 286, y2: 92 }),
      svgElement("circle", { class: "geometry-point active", cx: 102, cy: 92, r: 5 }),
      svgElement("circle", { class: "geometry-point active", cx: 156, cy: 92, r: 5 }),
      svgElement("circle", { class: "geometry-point active", cx: 210, cy: 92, r: 5 }),
      svgElement("circle", { class: "geometry-point result", cx: 264, cy: 92, r: 7 }),
      svgElement("path", { class: "geometry-line result", d: "M 250 78 L 278 106 M 278 78 L 250 106" })
    );
    svgText(svg, "one failure breaks the claim", 82, 138, "geometry-note");
  } else if (figure === "real-sets") {
    svg.append(
      svgElement("line", { class: "geometry-line", x1: 54, y1: 104, x2: 306, y2: 104 }),
      svgElement("line", { class: "geometry-line active", x1: 118, y1: 104, x2: 242, y2: 104 }),
      svgElement("circle", { class: "geometry-point result", cx: 118, cy: 104, r: 6 }),
      svgElement("circle", { class: "geometry-point result", cx: 242, cy: 104, r: 6 })
    );
    svgText(svg, "2", 112, 132, "geometry-label geometry-math");
    svgText(svg, "5", 236, 132, "geometry-label geometry-math");
    svgText(svg, "[2, 5]", 148, 68, "geometry-label geometry-math result");
  } else if (figure === "real-sequences") {
    [72, 112, 152, 192, 232, 272].forEach((x, index) => {
      const y = 52 + index * 13;
      svg.append(svgElement("circle", { class: index < 4 ? "geometry-point active" : "geometry-point result", cx: x, cy: y, r: 5 }));
    });
    svg.append(
      svgElement("line", { class: "geometry-line result", x1: 54, y1: 130, x2: 310, y2: 130 }),
      svgElement("path", { class: "geometry-line", d: "M 252 116 L 284 128 M 270 116 L 284 128 L 270 140" })
    );
    svgText(svg, "terms", 82, 42, "geometry-note");
    svgText(svg, "limit 0", 226, 154, "geometry-label geometry-math result");
  } else if (figure === "real-limits") {
    svg.append(
      svgElement("line", { class: "geometry-line", x1: 50, y1: 126, x2: 314, y2: 126 }),
      svgElement("line", { class: "geometry-line", x1: 82, y1: 36, x2: 82, y2: 148 }),
      svgElement("path", { class: "geometry-line active", d: "M 72 124 C 120 96 158 74 202 70 S 270 74 306 48" }),
      svgElement("rect", { class: "geometry-shape result", x: 160, y: 56, width: 86, height: 28, rx: 2 }),
      svgElement("circle", { class: "geometry-point result", cx: 202, cy: 70, r: 5 })
    );
    svgText(svg, "epsilon band", 176, 50, "geometry-note");
    svgText(svg, "x → a", 146, 152, "geometry-label geometry-math");
  } else if (figure === "real-continuity") {
    svg.append(
      svgElement("line", { class: "geometry-line", x1: 50, y1: 126, x2: 314, y2: 126 }),
      svgElement("line", { class: "geometry-line", x1: 82, y1: 36, x2: 82, y2: 148 }),
      svgElement("path", { class: "geometry-line active", d: "M 72 118 C 126 94 168 72 218 78 S 276 98 306 58" }),
      svgElement("circle", { class: "geometry-point result", cx: 218, cy: 78, r: 5 })
    );
    svgText(svg, "lim f(x) = f(a)", 166, 54, "geometry-label geometry-math result");
    svgText(svg, "no jump", 218, 116, "geometry-note");
  } else if (figure === "real-differentiation") {
    svg.append(
      svgElement("line", { class: "geometry-line", x1: 50, y1: 128, x2: 314, y2: 128 }),
      svgElement("line", { class: "geometry-line", x1: 82, y1: 36, x2: 82, y2: 148 }),
      svgElement("path", { class: "geometry-line active", d: "M 72 118 C 132 106 186 74 306 50" }),
      svgElement("line", { class: "geometry-line result", x1: 142, y1: 96, x2: 250, y2: 68 }),
      svgElement("circle", { class: "geometry-point result", cx: 196, cy: 82, r: 5 })
    );
    svgText(svg, "difference quotient", 124, 54, "geometry-note");
    svgText(svg, "slope limit", 210, 108, "geometry-note");
  } else if (figure === "real-integration") {
    svg.append(
      svgElement("line", { class: "geometry-line", x1: 50, y1: 136, x2: 314, y2: 136 }),
      svgElement("line", { class: "geometry-line", x1: 82, y1: 36, x2: 82, y2: 150 }),
      svgElement("path", { class: "geometry-line active", d: "M 82 118 C 130 74 186 80 232 66 S 280 80 306 48" })
    );
    [104, 132, 160, 188, 216, 244].forEach((x, index) => {
      const heights = [42, 54, 58, 60, 66, 72];
      svg.append(svgElement("rect", { class: "geometry-shape result", x, y: 136 - heights[index], width: 24, height: heights[index], rx: 1 }));
    });
    svgText(svg, "partition", 126, 154, "geometry-note");
    svgText(svg, "Riemann sum", 214, 54, "geometry-note");
  } else if (figure === "abstract-groups") {
    svg.append(
      svgElement("circle", { class: "geometry-shape", cx: 178, cy: 92, r: 58 }),
      svgElement("path", { class: "geometry-line active", d: "M 142 70 A 44 44 0 0 1 214 70" }),
      svgElement("path", { class: "geometry-line active", d: "M 210 58 L 224 70 L 208 80" }),
      svgElement("path", { class: "geometry-line result", d: "M 142 114 A 44 44 0 0 0 214 114" }),
      svgElement("path", { class: "geometry-line result", d: "M 146 126 L 132 114 L 148 104" })
    );
    svgText(svg, "identity", 144, 96, "geometry-note");
    svgText(svg, "inverse", 146, 154, "geometry-note");
    svgText(svg, "a*b", 166, 44, "geometry-label geometry-math active");
  } else if (figure === "abstract-rings") {
    proofBox(svg, 46, 48, "Add", "abelian");
    proofBox(svg, 234, 48, "Multiply", "distribute");
    svg.append(
      svgElement("path", { class: "geometry-line active", d: "M 126 84 H 232" }),
      svgElement("path", { class: "geometry-line active", d: "M 220 74 L 234 84 L 220 94" })
    );
    svgText(svg, "a(b+c)=ab+ac", 118, 146, "geometry-label geometry-math result");
  } else if (figure === "abstract-fields") {
    svg.append(
      svgElement("circle", { class: "geometry-shape active", cx: 124, cy: 90, r: 42 }),
      svgElement("circle", { class: "geometry-shape result", cx: 236, cy: 90, r: 42 }),
      svgElement("path", { class: "geometry-line", d: "M 166 90 H 194 M 182 80 L 196 90 L 182 100" })
    );
    svgText(svg, "a", 116, 96, "geometry-label geometry-math active");
    svgText(svg, "a⁻¹", 224, 96, "geometry-label geometry-math result");
    svgText(svg, "a · a⁻¹ = 1", 126, 150, "geometry-label geometry-math");
  } else if (figure === "abstract-homomorphisms") {
    svg.append(
      svgElement("circle", { class: "geometry-shape", cx: 98, cy: 90, r: 46 }),
      svgElement("circle", { class: "geometry-shape", cx: 260, cy: 90, r: 46 }),
      svgElement("path", { class: "geometry-line active", d: "M 142 78 H 216" }),
      svgElement("path", { class: "geometry-line active", d: "M 204 68 L 218 78 L 204 88" }),
      svgElement("path", { class: "geometry-line result", d: "M 142 110 H 216" }),
      svgElement("path", { class: "geometry-line result", d: "M 204 100 L 218 110 L 204 120" })
    );
    svgText(svg, "a+b", 76, 96, "geometry-label geometry-math active");
    svgText(svg, "f(a)+f(b)", 226, 96, "geometry-label geometry-math result");
    svgText(svg, "preserve operation", 126, 154, "geometry-note");
  } else if (figure === "abstract-examples") {
    proofBox(svg, 46, 48, "Example", "satisfies");
    proofBox(svg, 234, 48, "Counter", "breaks");
    svg.append(
      svgElement("path", { class: "geometry-line active", d: "M 80 134 L 100 154 L 132 116" }),
      svgElement("path", { class: "geometry-line result", d: "M 232 124 L 268 154 M 268 124 L 232 154" })
    );
    svgText(svg, "check the operation", 116, 146, "geometry-note");
  } else if (figure === "physics-vectors") {
    svg.append(
      svgElement("line", { class: "geometry-grid-line", x1: 54, y1: 132, x2: 306, y2: 132 }),
      svgElement("line", { class: "geometry-grid-line", x1: 86, y1: 36, x2: 86, y2: 150 }),
      svgElement("path", { class: "geometry-line active", d: "M 86 132 L 244 54" }),
      svgElement("path", { class: "geometry-line active", d: "M 230 52 L 246 53 L 238 67" }),
      svgElement("path", { class: "geometry-line result", d: "M 86 132 H 244 V 54" })
    );
    svgText(svg, "magnitude", 144, 82, "geometry-note");
    svgText(svg, "direction", 210, 42, "geometry-note");
    svgText(svg, "vector", 102, 158, "geometry-label geometry-math active");
  } else if (figure === "physics-graphs") {
    svg.append(
      svgElement("line", { class: "geometry-line", x1: 56, y1: 132, x2: 312, y2: 132 }),
      svgElement("line", { class: "geometry-line", x1: 82, y1: 36, x2: 82, y2: 150 }),
      svgElement("path", { class: "geometry-line active", d: "M 92 122 L 278 58" }),
      svgElement("path", { class: "geometry-shape result", d: "M 154 132 L 154 100 L 238 72 L 238 132 Z" }),
      svgElement("path", { class: "geometry-line", d: "M 120 112 H 188 V 88" })
    );
    svgText(svg, "slope", 156, 94, "geometry-note");
    svgText(svg, "area", 176, 124, "geometry-note");
    svgText(svg, "time", 262, 154, "geometry-note");
  } else if (figure === "physics-sound") {
    svg.append(
      svgElement("path", { class: "geometry-line active", d: "M 48 70 C 70 38 92 102 114 70 S 158 38 180 70 S 224 102 246 70 S 290 38 312 70" }),
      svgElement("path", { class: "geometry-line result", d: "M 52 122 C 64 98 76 146 88 122 S 112 98 124 122 S 148 146 160 122 S 184 98 196 122 S 220 146 232 122 S 256 98 268 122 S 292 146 304 122" })
    );
    svgText(svg, "lower pitch", 74, 42, "geometry-note");
    svgText(svg, "higher pitch", 214, 154, "geometry-note");
    svgText(svg, "frequency controls pitch", 108, 94, "geometry-note");
  } else if (figure === "physics-magnetism") {
    svg.append(
      svgElement("rect", { class: "geometry-shape active", x: 90, y: 72, width: 76, height: 42, rx: 5 }),
      svgElement("rect", { class: "geometry-shape result", x: 166, y: 72, width: 76, height: 42, rx: 5 }),
      svgElement("path", { class: "geometry-line active", d: "M 104 68 C 122 32 210 32 230 68" }),
      svgElement("path", { class: "geometry-line result", d: "M 104 118 C 122 154 210 154 230 118" }),
      svgElement("path", { class: "geometry-line active", d: "M 218 58 L 232 68 L 216 76" })
    );
    svgText(svg, "N", 126, 100, "geometry-label geometry-math active", "middle");
    svgText(svg, "S", 204, 100, "geometry-label geometry-math result", "middle");
    svgText(svg, "field loops", 138, 42, "geometry-note");
    svgText(svg, "opposite poles attract", 108, 154, "geometry-note");
  } else if (figure === "physics-heat") {
    svg.append(
      svgElement("circle", { class: "geometry-shape active", cx: 104, cy: 90, r: 38 }),
      svgElement("circle", { class: "geometry-shape result", cx: 256, cy: 90, r: 38 }),
      svgElement("path", { class: "geometry-line active", d: "M 146 90 H 214" }),
      svgElement("path", { class: "geometry-line active", d: "M 202 78 L 216 90 L 202 102" })
    );
    svgText(svg, "hot", 84, 96, "geometry-label active");
    svgText(svg, "cold", 232, 96, "geometry-label result");
    svgText(svg, "heat flows from higher temperature", 74, 150, "geometry-note");
  } else if (figure === "physics-quantum") {
    svg.append(
      svgElement("path", { class: "geometry-line active", d: "M 48 90 C 66 62 84 118 102 90 S 138 62 156 90 S 192 118 210 90" }),
      svgElement("path", { class: "geometry-line active", d: "M 218 90 H 254" }),
      svgElement("path", { class: "geometry-line active", d: "M 242 80 L 256 90 L 242 100" }),
      svgElement("rect", { class: "geometry-shape result", x: 266, y: 66, width: 44, height: 48, rx: 6 })
    );
    svgText(svg, "light wave", 70, 54, "geometry-note");
    svgText(svg, "photon", 266, 140, "geometry-note");
    svgText(svg, "E = hf", 258, 96, "geometry-label geometry-math result");
  } else if (figure === "physics-relativity") {
    svg.append(
      svgElement("circle", { class: "geometry-shape active", cx: 104, cy: 90, r: 34 }),
      svgElement("path", { class: "geometry-line active", d: "M 142 90 H 210" }),
      svgElement("path", { class: "geometry-line active", d: "M 198 78 L 212 90 L 198 102" }),
      svgElement("path", { class: "geometry-line result", d: "M 258 54 L 268 82 L 300 82 L 274 100 L 284 132 L 258 112 L 232 132 L 242 100 L 216 82 L 248 82 Z" })
    );
    svgText(svg, "mass", 84, 96, "geometry-note");
    svgText(svg, "energy", 232, 154, "geometry-note");
    svgText(svg, "E = mc^2", 146, 58, "geometry-label geometry-math result");
  } else if (figure === "physics-charge-fields") {
    svg.append(
      svgElement("line", { class: "geometry-grid-line", x1: 42, y1: 92, x2: 318, y2: 92 }),
      svgElement("circle", { class: "geometry-shape active", cx: 116, cy: 58, r: 20 }),
      svgElement("circle", { class: "geometry-shape active", cx: 244, cy: 58, r: 20 }),
      svgElement("circle", { class: "geometry-shape active", cx: 116, cy: 126, r: 20 }),
      svgElement("circle", { class: "geometry-shape result", cx: 244, cy: 126, r: 20 })
    );
    svgText(svg, "+", 116, 66, "geometry-label geometry-math active", "middle");
    svgText(svg, "+", 244, 66, "geometry-label geometry-math active", "middle");
    svgText(svg, "+", 116, 134, "geometry-label geometry-math active", "middle");
    svgText(svg, "−", 244, 134, "geometry-label geometry-math result", "middle");

    svg.append(
      svgElement("path", { class: "geometry-line active", d: "M 94 58 H 60" }),
      svgElement("path", { class: "geometry-line active", d: "M 70 48 L 58 58 L 70 68" }),
      svgElement("path", { class: "geometry-line active", d: "M 266 58 H 300" }),
      svgElement("path", { class: "geometry-line active", d: "M 290 48 L 302 58 L 290 68" }),
      svgElement("path", { class: "geometry-line result", d: "M 138 126 H 174" }),
      svgElement("path", { class: "geometry-line result", d: "M 164 116 L 176 126 L 164 136" }),
      svgElement("path", { class: "geometry-line result", d: "M 222 126 H 186" }),
      svgElement("path", { class: "geometry-line result", d: "M 196 116 L 184 126 L 196 136" })
    );
    svgText(svg, "same sign: repel", 180, 28, "geometry-note", "middle");
    svgText(svg, "opposite signs: attract", 180, 164, "geometry-note", "middle");
  }

  return svg;
}

function drawGraphIntro(svg, nodes, edges) {
  const nodeById = new Map(nodes.map((node) => [node.id, node]));
  for (const edge of edges) {
    const from = nodeById.get(edge.from);
    const to = nodeById.get(edge.to);
    if (!from || !to) continue;
    svg.append(svgElement("line", {
      class: edge.className || "geometry-line",
      x1: from.x,
      y1: from.y,
      x2: to.x,
      y2: to.y
    }));
  }

  for (const node of nodes) {
    svg.append(svgElement("circle", {
      class: node.className || "geometry-shape",
      cx: node.x,
      cy: node.y,
      r: node.r || 15
    }));
    svgText(svg, node.label || node.id, node.x, node.y + 6, "geometry-label geometry-math", "middle");
  }
}

function proofBox(svg, x, y, title, body) {
  svg.append(svgElement("rect", { class: "geometry-proof-box", x, y, width: 80, height: 74, rx: 8 }));
  svgText(svg, title, x + 40, y + 26, "geometry-label active", "middle");
  svgText(svg, body, x + 40, y + 52, "geometry-note", "middle");
}

function drawMiniAxes(svg) {
  for (let x = 74; x <= 274; x += 40) {
    svg.append(svgElement("line", { class: "geometry-grid-line", x1: x, y1: 42, x2: x, y2: 150 }));
  }
  for (let y = 42; y <= 150; y += 20) {
    svg.append(svgElement("line", { class: "geometry-grid-line", x1: 74, y1: y, x2: 274, y2: y }));
  }
  svg.append(
    svgElement("line", { class: "geometry-line", x1: 74, y1: 102, x2: 274, y2: 102 }),
    svgElement("line", { class: "geometry-line", x1: 154, y1: 42, x2: 154, y2: 150 })
  );
}

function svgElement(tag, attributes = {}) {
  const element = document.createElementNS("http://www.w3.org/2000/svg", tag);
  for (const [name, value] of Object.entries(attributes)) {
    element.setAttribute(name, String(value));
  }
  return element;
}

function svgText(svg, text, x, y, className, anchor = "start") {
  const element = svgElement("text", { class: className, x, y, "text-anchor": anchor });
  element.textContent = text;
  svg.append(element);
  return element;
}

function addIntroCell(grid, text, row, col, className = "") {
  const cell = document.createElement("div");
  cell.className = `intro-cell ${className}`.trim();
  cell.style.gridRow = String(row);
  cell.style.gridColumn = String(col);
  setMathText(cell, text);
  grid.append(cell);
}

function addIntroExponentCell(grid, baseText, exponentText, row, col) {
  const cell = document.createElement("div");
  cell.className = "intro-cell exponent-cell active-source";
  cell.style.gridRow = String(row);
  cell.style.gridColumn = String(col);

  const base = document.createElement("span");
  base.textContent = baseText;

  const exponent = document.createElement("sup");
  exponent.textContent = exponentText;

  cell.append(base, exponent);
  grid.append(cell);
}

function addIntroRule(grid, row) {
  const rule = document.createElement("div");
  rule.className = "intro-rule";
  rule.style.gridRow = String(row);
  rule.style.gridColumn = "2 / 5";
  grid.append(rule);
}

function introFigureCaption(workspace) {
  return window.CarryHowThisWorks?.introFigureCaption?.(workspace) || conceptFigureCaption(workspace.figure);
}

function updateProblemSetup(workspace) {
  const isOperation = ["addition", "subtraction", "multiplication", "division"].includes(workspace.type);
  els.setupPanel.hidden = !isOperation;
  if (!isOperation) {
    return;
  }

  const labels = workspace.type === "division"
    ? { top: "Dividend", bottom: "Divisor" }
    : { top: "Top", bottom: "Bottom" };
  els.topNumberLabel.textContent = labels.top;
  els.bottomNumberLabel.textContent = labels.bottom;
  els.bottomNumber.max = workspace.type === "division" ? "99" : "999";
  els.topNumber.value = String(workspace.problem.top);
  els.bottomNumber.value = String(workspace.problem.bottom);
}

function addConceptIntroFigure(grid, figure) {
  const add = (text, row, col, className = "") => addIntroCell(grid, text, row, col, className);
  if (figure === "place-value") {
    add("hundreds", 1, 2, "label top-label");
    add("tens", 1, 3, "label top-label");
    add("ones", 1, 4, "label top-label");
    add("6", 2, 2, "active-source");
    add("4", 2, 3);
    add("2", 2, 4);
    add("600", 3, 2, "result");
    add("40", 3, 3, "result");
    add("2", 3, 4, "result");
  } else if (figure === "number-line" || figure === "integer-line") {
    add("-5", 2, 1, "label");
    add("0", 2, 2, "result");
    add("5", 2, 3, "active-result");
    add("10", 2, 4, "result");
    add("number line", 3, 1, "label");
    add("right is greater", 3, 2, "wide-note");
  } else if (figure === "estimation") {
    add("398", 1, 2);
    add("→", 1, 3, "operator");
    add("400", 1, 4, "active-result");
    add("+", 2, 1, "operator");
    add("201", 2, 2);
    add("→", 2, 3, "operator");
    add("200", 2, 4, "active-result");
    addIntroRule(grid, 3);
    add("about", 4, 1, "label");
    add("600", 4, 4, "result");
  } else if (figure === "fraction-bar") {
    add("whole", 1, 1, "label");
    add("1", 1, 2, "fraction-piece active-result");
    add("1", 1, 3, "fraction-piece active-result");
    add("0", 1, 4, "fraction-piece");
    add("parts", 2, 1, "label");
    add("2 of 3", 2, 2, "wide-note");
  } else if (figure === "decimal-grid" || figure === "percent-grid") {
    add("0.60", 1, 2, "active-result");
    add("=", 1, 3, "operator");
    add("60%", 1, 4, "active-result");
    add("hundredths", 2, 1, "label");
    add("60 of 100", 2, 2, "wide-note");
  } else if (figure === "ratio-bars") {
    add("2", 1, 2, "active-result");
    add(":", 1, 3, "operator");
    add("3", 1, 4, "active-result");
    add("×4", 2, 1, "label");
    add("8", 2, 2, "result");
    add(":", 2, 3, "operator");
    add("12", 2, 4, "result");
  } else if (figure === "factor-pairs") {
    add("6", 1, 2, "result");
    add("×", 1, 3, "operator");
    add("7", 1, 4, "active-result");
    add("=", 2, 3, "operator");
    add("42", 2, 4, "result");
    add("factor pair", 3, 1, "label");
  } else if (figure === "operation-order") {
    add("3", 1, 1);
    add("+", 1, 2, "operator");
    add("4×5", 1, 3, "active-source wide-note");
    add("=", 1, 4, "operator");
    add("23", 2, 4, "result");
  } else if (figure === "expression-terms") {
    add("2x", 1, 1, "active-source");
    add("+", 1, 2, "operator");
    add("x", 1, 3, "active-source");
    add("=", 1, 4, "operator");
    add("3x", 2, 4, "result");
  } else if (figure === "equation-balance") {
    add("x+7", 1, 1, "active-source wide-note");
    add("=", 1, 3, "operator");
    add("12", 1, 4, "result");
    add("-7", 2, 1, "label");
    add("x", 2, 2, "active-result");
    add("=", 2, 3, "operator");
    add("5", 2, 4, "result");
  } else if (figure === "inequality-line") {
    add("x", 1, 1, "active-source");
    add(">", 1, 2, "operator");
    add("5", 1, 3, "result");
    add("number line", 2, 1, "label");
    add("open circle, shade right", 2, 2, "wide-note");
  } else if (figure === "exponent-stack") {
    addIntroExponentCell(grid, "2", "5", 1, 2);
    add("=", 1, 4, "operator");
    add("32", 2, 4, "result");
    add("five factors", 2, 1, "label");
  } else if (figure === "coordinate-plane") {
    add("x", 1, 1, "label");
    add("3", 1, 2, "active-result");
    add("right", 1, 3, "wide-note");
    add("y", 2, 1, "label");
    add("-2", 2, 2, "active-result");
    add("down", 2, 3, "wide-note");
  } else if (figure === "system-intersection") {
    add("line 1", 1, 1, "label");
    add("x+y=3", 1, 2, "wide-note active-source");
    add("line 2", 2, 1, "label");
    add("x-y=1", 2, 2, "wide-note active-source");
    add("meet", 3, 1, "label");
    add("(2,1)", 3, 2, "active-result");
  } else if (figure === "polynomial-terms") {
    add("3x^2", 1, 1, "active-source");
    add("+", 1, 2, "operator");
    add("5x^2", 1, 3, "active-source");
    add("=", 1, 4, "operator");
    add("8x^2", 2, 4, "result");
  } else if (figure === "factoring-pairs") {
    add("2", 1, 2, "active-result");
    add("+", 1, 3, "operator");
    add("3", 1, 4, "active-result");
    add("sum", 2, 1, "label");
    add("5", 2, 4, "result");
    add("product", 3, 1, "label");
    add("6", 3, 4, "result");
  } else if (figure === "rational-cancel") {
    add("(x-3)(x+3)", 1, 2, "wide-note active-source");
    add("/", 2, 3, "operator");
    add("x-3", 3, 2, "wide-note active-source");
    add("=", 3, 4, "operator");
    add("x+3", 4, 4, "result");
  } else if (figure === "quadratic-roots") {
    add("(x-2)", 1, 1, "active-source");
    add("(x-3)", 1, 3, "active-source");
    add("=0", 1, 4, "operator");
    add("roots", 2, 1, "label");
    add("2, 3", 2, 4, "result");
  } else if (figure === "geometry-angles") {
    add("120", 1, 2, "active-source");
    add("+", 1, 3, "operator");
    add("?", 1, 4, "active-result");
    add("straight", 2, 1, "label");
    add("180", 2, 4, "result");
  } else if (figure === "geometry-triangle") {
    add("60", 1, 1, "active-source");
    add("70", 1, 3, "active-source");
    add("?", 2, 2, "active-result");
    add("sum", 3, 1, "label");
    add("180", 3, 4, "result");
  } else if (figure === "geometry-circle") {
    add("r", 1, 1, "label");
    add("4", 1, 2, "active-source");
    add("d", 2, 1, "label");
    add("8", 2, 2, "active-result");
    add("C", 3, 1, "label");
    add("pi d", 3, 2, "wide-note");
  } else if (figure === "geometry-area-volume") {
    add("area", 1, 1, "label");
    add("8 x 3", 1, 2, "wide-note active-source");
    add("=", 1, 3, "operator");
    add("24", 1, 4, "result");
    add("volume", 3, 1, "label");
    add("2 x 3 x 5", 3, 2, "wide-note");
  } else if (figure === "geometry-coordinate") {
    add("(1,2)", 1, 1, "active-source");
    add("to", 1, 2, "operator");
    add("(5,2)", 1, 3, "active-source");
    add("dx", 2, 1, "label");
    add("4", 2, 4, "result");
  } else if (figure === "geometry-proof") {
    add("given", 1, 1, "label");
    add("right angles", 1, 2, "wide-note active-source");
    add("reason", 2, 1, "label");
    add("all are 90", 2, 2, "wide-note");
    add("therefore", 3, 1, "label");
    add("equal", 3, 4, "result");
  } else if (figure === "word-problem") {
    add("18", 1, 2, "active-source");
    add("+", 1, 3, "operator");
    add("7", 1, 4, "active-source");
    add("cards", 2, 1, "label");
    add("25", 2, 4, "result");
  } else {
    add("38", 1, 2, "active-source");
    add("+", 1, 3, "operator");
    add("47", 1, 4, "active-source");
    add("=", 2, 3, "operator");
    add("85", 2, 4, "result");
  }
}

function conceptFigureCaption(figure) {
  return window.CarryHowThisWorks?.conceptFigureCaption?.(figure) || "Mixed review asks you to choose a method, then check the result.";
}

function renderPlannedWorkspace(workspace) {
  setWorkspaceView("problem");
  els.setupPanel.hidden = true;
  els.grid.innerHTML = "";
  els.overlay.innerHTML = "";
  const message = document.createElement("div");
  message.className = "planned-message";
  message.textContent = `${workspace.title} is ready for a future interactive workspace.`;
  els.grid.append(message);
  setStatus("This lesson is planned for a future interactive workspace.", "");
  els.stepText.textContent = "Choose an available lesson or continue browsing the curriculum.";
}

function getActiveWorkspace() {
  if (state.activeWorkspaceId === additionWorkspace.id) {
    return { ...additionWorkspace, problem: currentProblem(additionWorkspace.id, additionProblemSet) };
  }
  if (state.activeWorkspaceId === subtractionWorkspace.id) {
    return { ...subtractionWorkspace, problem: currentProblem(subtractionWorkspace.id, subtractionProblemSet) };
  }
  if (state.activeWorkspaceId === multiplicationWorkspace.id) {
    const problem = currentProblem(multiplicationWorkspace.id, multiplicationProblemSet);
    return {
      ...multiplicationWorkspace,
      problem,
      rows: [
        { id: "p0", label: `x${ones(problem.bottom)}`, value: problem.top * ones(problem.bottom), shift: 0 },
        { id: "p1", label: `x${tens(problem.bottom) * 10}`, value: problem.top * tens(problem.bottom) * 10, shift: 1 },
        { id: "p2", label: `x${hundreds(problem.bottom) * 100}`, value: problem.top * hundreds(problem.bottom) * 100, shift: 2 },
        { id: "sum", label: "sum", value: problem.top * problem.bottom, shift: 0 }
      ]
    };
  }
  if (state.activeWorkspaceId === divisionWorkspace.id) {
    return { ...divisionWorkspace, problem: currentProblem(divisionWorkspace.id, divisionProblemSet) };
  }
  if (state.activeWorkspaceId === divisionRemainderWorkspace.id) {
    return { ...divisionRemainderWorkspace, problem: currentProblem(divisionRemainderWorkspace.id, divisionRemainderProblemSet) };
  }
  if (conceptWorkspaces[state.activeWorkspaceId]) {
    const workspace = conceptWorkspaces[state.activeWorkspaceId];
    return {
      ...workspace,
      problem: currentProblem(workspace.id, workspace.problems)
    };
  }
  const plannedLesson = findLesson(state.activeWorkspaceId);
  if (plannedLesson) {
    return {
      id: plannedLesson.id,
      title: plannedLesson.title,
      status: "planned"
    };
  }
  return workspaceRegistry[state.activeWorkspaceId] || workspaceRegistry[state.activeTopic] || {
    id: "planned",
    title: "Planned workspace",
    status: "planned"
  };
}

function buildConceptModel(workspace) {
  const answers = acceptedProblemAnswers(workspace.problem);
  const choices = choicesForConceptProblem(workspace.problem, answers);
  return {
    ...workspace.problem,
    sourceWorkspaceId: workspace.id,
    cells: [
      {
        id: `${workspace.id}-answer`,
        row: 3,
        col: 2,
        kind: "conceptAnswer",
        expected: workspace.problem.answer,
        answers,
        choices,
        correctChoices: correctChoiceValues(choices, answers, workspace.problem),
        sequence: 0,
        label: workspace.problem.label || "answer",
        hint: workspace.problem.hint,
        feedback: effectiveProblemFeedback(workspace.problem)
      }
    ]
  };
}

function acceptedProblemAnswers(problem) {
  return uniqueChoiceValues([problem?.answer, ...(problem?.answers || [])]);
}

function effectiveProblemFeedback(problem) {
  if (!problem) return "";
  if (problem.feedback) return String(problem.feedback);
  return generatedProblemFeedback(problem);
}

function generatedProblemFeedback(problem) {
  const hint = stripMathTags(problem.hint || "").trim();
  const prompt = stripMathTags(problem.prompt || "").trim();
  const label = answerValue(problem.label || "");
  const answer = stripMathTags(problem.answer || "").trim();
  if (!hint && !prompt) return "";

  if (label.includes("symbol")) {
    return hint || "Match the symbol to the relationship named in the prompt.";
  }
  if (label.includes("unit")) {
    return hint || "Track the physical quantity first, then choose the unit that measures it.";
  }
  if (label.includes("definition") || label.includes("property") || label.includes("rule")) {
    return hint || "Use the definition, not the visual appearance of the expression.";
  }
  if (label.includes("graph") || label.includes("display")) {
    return hint || "Match the graph feature to the quantity the question asks about.";
  }
  if (label.includes("probability") || label.includes("statistic") || label.includes("distribution")) {
    return hint || "Identify what is being counted or summarized before choosing.";
  }
  if (answer && /^(yes|no|true|false)$/i.test(answer)) {
    return hint || "Test the statement against the rule in the prompt.";
  }
  return hint ? `Use the lesson idea: ${hint}` : "Compare the choices with the rule named in the prompt.";
}

function renderConceptGrid(model) {
  const prompt = document.createElement("section");
  prompt.className = "concept-card";
  prompt.style.gridRow = "1";
  prompt.style.gridColumn = "1";

  const text = document.createElement("p");
  text.className = "concept-prompt";
  setMathText(text, model.prompt);

  const answerPanel = document.createElement("div");
  answerPanel.className = "concept-answer-panel";

  const answerTitle = document.createElement("div");
  answerTitle.className = "concept-answer-title";
  answerTitle.textContent = answerTitleForModel(model);

  const input = createConceptAnswerInput(model);

  answerPanel.append(answerTitle);
  if (model.cells[0].choices?.length) {
    const answerNote = document.createElement("p");
    answerNote.className = "concept-answer-note";
    answerNote.textContent = answerNoteForMode(model.cells[0].choices.length);
    answerPanel.append(answerNote);
  }
  if (model.cells[0].choices?.length) {
    const choiceGrid = document.createElement("div");
    choiceGrid.className = "concept-choice-grid";
    choiceGrid.setAttribute("role", "radiogroup");
    choiceGrid.setAttribute("aria-label", model.cells[0].label);
    model.cells[0].choices.forEach((choice, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "concept-choice-button";
      button.value = choice.value;
      button.dataset.choiceValue = choice.value;
      button.setAttribute("role", "radio");
      button.setAttribute("aria-checked", "false");
      button.setAttribute("aria-label", `${index + 1}. ${stripMathTags(choice.label)}`);
      button.setAttribute("aria-keyshortcuts", String(index + 1));
      const key = document.createElement("span");
      key.className = "concept-choice-key";
      key.setAttribute("aria-hidden", "true");
      key.textContent = String(index + 1);

      const label = document.createElement("span");
      label.className = "concept-choice-label";
      setChoiceText(label, choice.label, model);

      button.append(key, label);
      button.addEventListener("click", () => selectConceptChoice(input, choice.value));
      choiceGrid.append(button);
    });
    input.classList.add("concept-answer-choice-control", "sr-only");
    input.readOnly = true;
    input.tabIndex = -1;
    input.setAttribute("aria-hidden", "true");
    answerPanel.append(choiceGrid, input);
  } else {
    const answerLabel = document.createElement("label");
    answerLabel.className = "concept-answer-label";
    answerLabel.textContent = "Answer";
    answerLabel.append(input);
    answerPanel.append(answerLabel);
    answerPanel.addEventListener("click", (event) => {
      if (event.target.closest("button")) return;
      input.focus({ preventScroll: true });
    });
  }
  const inlineHint = document.createElement("p");
  inlineHint.className = "concept-inline-hint";
  inlineHint.hidden = true;
  answerPanel.append(inlineHint, createConceptLocalCheck());

  prompt.append(text, answerPanel);
  if (model.workspaceId) {
    const openWorkspace = document.createElement("button");
    openWorkspace.className = "tool-button compact concept-action";
    openWorkspace.type = "button";
    openWorkspace.textContent = "Open long division";
    openWorkspace.addEventListener("click", () => {
      openLinkedWorkspace(model);
    });
    prompt.append(openWorkspace);
  }
  els.grid.append(prompt);
}

function createConceptLocalCheck() {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "tool-button compact concept-check-button";
  button.textContent = "⏎ Check";
  button.addEventListener("click", requestStepCheck);
  return button;
}

function answerTitleForModel(model) {
  return model.cells[0].choices?.length ? "Choose one answer" : "Enter the answer";
}

function answerNoteForMode(choiceCount = MAX_CONCEPT_CHOICES) {
  const keyHint = choiceCount > 1 ? ` Keys 1-${choiceCount} work too.` : "";
  if (state.mode === "guided") return `Choose an answer, then Check.${keyHint}`;
  if (state.mode === "practice") return `Choose an answer, then Check.${keyHint}`;
  return `Try a choice freely. Check when ready.${keyHint}`;
}

function createConceptAnswerInput(model) {
  const input = document.createElement("input");
  input.className = "digit-input concept-answer-input";
  input.inputMode = numericConceptAnswers(model.cells[0].answers) ? "decimal" : "text";
  input.autocomplete = "off";
  input.autocapitalize = "off";
  input.spellcheck = false;
  input.maxLength = 48;
  input.placeholder = "Type answer";
  input.dataset.cellId = model.cells[0].id;
  input.dataset.expected = model.cells[0].expected;
  input.dataset.answers = JSON.stringify(model.cells[0].answers);
  input.dataset.hint = model.cells[0].hint;
  input.dataset.label = model.cells[0].label;
  input.dataset.feedback = model.cells[0].feedback || "";
  input.dataset.prompt = model.prompt;
  input.dataset.correctChoices = JSON.stringify(model.cells[0].correctChoices || []);
  input.dataset.sequence = "0";
  input.setAttribute("aria-label", model.cells[0].label);

  input.addEventListener("input", (event) => {
    event.target.value = normalizeAnswerInput(event.target.value);
    if (state.mode === "guided") setStatus("Enter the answer, then check it.", "");
    if (state.mode === "explore") markExploreInput(event.target);
  });
  input.setAttribute("oninput", "document.dispatchEvent(new CustomEvent('carry-concept-input-command', { detail: this }))");
  input.setAttribute("onkeydown", "window.carryInlineReturn?.(event)");
  input.addEventListener("focus", (event) => {
    event.target.select();
  });
  return input;
}

function numericConceptAnswers(answers = []) {
  return answers.length > 0 && answers.every((answer) => /^[-+]?(\d+(\.\d+)?|\.\d+)$/.test(String(answer).trim()));
}

function conceptChoicesForProblem(problem, answers) {
  const prompt = stripMathTags(problem.prompt || "");
  const answer = String(problem.answer || "");
  const normalizedAnswer = answerValue(answer);
  if (["yes", "true", "no", "false"].includes(normalizedAnswer)) {
    return [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" }
    ];
  }

  const explicitOptions = optionsFromPrompt(prompt);
  if (explicitOptions.length >= 2 && explicitOptions.length <= 5) {
    const prioritized = prioritizeAnswerChoice(explicitOptions, answers);
    if (prioritized.length) return prioritized.map((value) => ({ value, label: value }));
  }

  const label = answerValue(problem.label);
  if (label.includes("symbol")) {
    const symbols = symbolChoicesForAnswer(answer);
    if (symbols.length) return symbols.map((value) => ({ value, label: value }));
  }

  return generatedAnswerChoices(problem, answers);
}

function correctChoiceValues(choices, answers, problem) {
  const correct = choices
    .filter((choice) => isChoiceAccepted(choice.value, answers, problem))
    .map((choice) => String(choice.value));
  if (correct.length) return correct;
  return [String(problem.answer || answers?.[0] || "")];
}

function isChoiceAccepted(value, answers, problem) {
  const prompt = answerValue(problem.prompt);
  const label = answerValue(problem.label);
  const choiceValue = answerValue(value);
  return (answers || []).some((answer) => {
    const expected = answerValue(answer);
    if (choiceValue === expected) return true;
    if (answerVariants(answer).has(choiceValue)) return true;
    return semanticAnswerAliases(expected, label, prompt).some((alias) => answerValue(alias) === choiceValue);
  });
}

function generatedAnswerChoices(problem, answers) {
  const answer = String(problem.answer || answers?.[0] || "");
  const normalized = answerValue(answer);
  const prompt = answerValue(problem.prompt);
  const label = answerValue(problem.label);
  const choices = [answer];

  if (/^-?\d+$/.test(normalized)) {
    choices.push(...numericDistractors(Number(normalized), prompt, label));
  } else if (/^-?\d+(?:\.\d+)?$/.test(normalized)) {
    choices.push(...decimalDistractors(Number(normalized)));
  } else if (/^-?\d+\/-?\d+$/.test(normalized)) {
    choices.push(...fractionDistractors(normalized));
  } else if (/^-?\d+,?-?\d+$/.test(normalized) || /^\(-?\d+,-?\d+\)$/.test(normalized)) {
    choices.push(...coordinateDistractors(answer));
  } else if (isAlgebraicChoiceValue(answer, problem)) {
    choices.push(...algebraicDistractors(answer, problem));
  } else {
    choices.push(...textDistractors(answer, prompt, label));
  }

  return stableChoiceOrder(uniqueChoiceValues(choices).slice(0, MAX_CONCEPT_CHOICES), `${problem.prompt || ""}:${answer}`)
    .map((value) => ({ value: String(value), label: displayChoiceLabel(value) }));
}

function choicesForConceptProblem(problem, answers) {
  const explicitChoices = Array.isArray(problem.choices) && problem.choices.length ? problem.choices : [];
  if (explicitChoices.length) return refineConceptChoices(explicitChoices, answers, problem);
  if (!shouldUseGeneratedChoices(problem, answers)) return [];
  return refineConceptChoices(conceptChoicesForProblem(problem, answers), answers, problem);
}

function shouldUseGeneratedChoices(problem, answers) {
  const primaryAnswer = answerValue(problem.answer || answers?.[0] || "");
  if (["yes", "no", "true", "false"].includes(primaryAnswer)) return true;
  if (symbolChoicesForAnswer(problem.answer || answers?.[0] || "").length) return true;

  const promptOptions = prioritizeAnswerChoice(optionsFromPrompt(stripMathTags(problem.prompt || "")), answers);
  if (promptOptions.length >= 2 && promptOptions.length <= MAX_CONCEPT_CHOICES) return true;
  if (isExactConstructionProblem(problem, answers)) return false;

  const prompt = stripMathTags(problem.prompt || "").toLowerCase();
  const label = answerValue(problem.label || "");
  if (/\b(kind|type|rule|property|word|name|called|describes|identifies|represents|means|symbol|direction|units|display|association|variable|conclusion|hypothesis|counterexample|identity|inverse)\b/.test(prompt)) return true;
  if (/\b(logic|proof|set|subset|relation|function|graph|tree|physics|unit|statistic|parameter|distribution)\b/.test(label)) return true;
  return false;
}

function isExactConstructionProblem(problem, answers) {
  const promptText = stripMathTags(problem.prompt || "");
  const prompt = answerValue(promptText);
  const readablePrompt = promptText.toLowerCase();
  const answer = String(problem.answer || answers?.[0] || "");
  const normalizedAnswer = answerValue(answer);
  if (!normalizedAnswer || ["yes", "no", "true", "false"].includes(normalizedAnswer)) return false;
  if (prioritizeAnswerChoice(optionsFromPrompt(promptText), answers).length >= 2) return false;
  if (symbolChoicesForAnswer(answer).length) return false;

  const exactVerb = /^(simplify|compute|evaluate|find|write|complete|add|subtract|multiply|divide|solve|factor|expand|enter|give)/.test(prompt);
  if (exactVerb) return true;

  const conceptualPrompt = /\b(kind|type|rule|property|word|name|called|describes|identifies|represents|means|symbol|direction|closer|larger|greater|smaller|units|display|association|variable|conclusion|hypothesis|counterexample|identity|inverse)\b/.test(readablePrompt);
  if (conceptualPrompt) return false;

  return exactVerb || looksLikeExactAnswer(answer);
}

function looksLikeExactAnswer(answer) {
  const raw = String(answer || "").trim();
  const compact = answerValue(raw);
  if (/^-?\d+(?:\.\d+)?%?$/.test(compact)) return true;
  if (/^-?\d+\/-?\d+$/.test(compact)) return true;
  if (/^\(?-?\d+(?:\.\d+)?,?-?\d+(?:\.\d+)?\)?$/.test(compact)) return true;
  if (/[=+\-*/^()[\]{}]/.test(raw) && /[A-Za-z0-9πθ]/.test(raw)) return true;
  return /^-?\d*[A-Za-zπθ]\^?\d*$/.test(raw) && raw.length > 1;
}

function isBinaryChoicePrompt(problem, answers) {
  const answer = answerValue(problem.answer || answers?.[0] || "");
  if (["yes", "no", "true", "false"].includes(answer)) return true;
  return prioritizeAnswerChoice(optionsFromPrompt(stripMathTags(problem.prompt || "")), answers).length === 2;
}

function weakChoiceMatches(choice, problem, weirdChoicePattern, genericWeakPattern) {
  const label = String(choice.label || choice.value || "");
  const value = String(choice.value || "");
  const combined = `${value} ${label}`;
  if (weirdChoicePattern.test(combined)) return true;
  const prompt = answerValue(stripMathTags(problem.prompt || ""));
  const problemLabel = answerValue(problem.label || "");
  const compactChoice = answerValue(label);
  return genericWeakPattern.test(label.trim())
    && !prompt.includes(compactChoice)
    && !problemLabel.includes(compactChoice);
}

function refineConceptChoices(choices, answers, problem) {
  const normalized = uniqueChoiceObjects(choices);
  if (normalized.length <= 1) return normalized;
  if (normalized.length <= MAX_CONCEPT_CHOICES) return stableChoiceObjectOrder(normalized, `${problem.prompt || ""}:${problem.answer || answers?.[0] || ""}`);

  const correct = normalized.find((choice) => isChoiceAccepted(choice.value, answers, problem))
    || { value: String(problem.answer || answers?.[0] || ""), label: displayChoiceLabel(problem.answer || answers?.[0] || "") };
  const distractors = normalized
    .filter((choice) => !isChoiceAccepted(choice.value, answers, problem))
    .map((choice) => ({ choice, score: choiceQualityScore(choice, correct, problem) }))
    .sort((a, b) => b.score - a.score)
    .filter((item, index) => item.score > 0 || index === 0)
    .slice(0, MAX_CONCEPT_CHOICES - 1)
    .map((item) => item.choice);
  const refined = [correct, ...distractors];
  return stableChoiceObjectOrder(refined, `${problem.prompt || ""}:${problem.answer || answers?.[0] || ""}`);
}

function uniqueChoiceObjects(choices) {
  const result = [];
  (choices || []).forEach((choice) => {
    const value = typeof choice === "object" ? choice.value : choice;
    const label = typeof choice === "object" ? choice.label ?? choice.value : choice;
    if (value === null || value === undefined || !String(value).trim()) return;
    if (!result.some((item) => answerValue(item.value) === answerValue(value))) {
      result.push({ value: String(value), label: String(label ?? value) });
    }
  });
  return result;
}

function stableChoiceObjectOrder(choices, seedText) {
  return stableChoiceOrder(choices.map((_, index) => String(index)), seedText)
    .map((index) => choices[Number(index)])
    .filter(Boolean);
}

function choiceQualityScore(choice, correct, problem) {
  const value = answerValue(choice.value);
  const label = answerValue(choice.label);
  const correctValue = answerValue(correct.value);
  const prompt = answerValue(problem.prompt);
  const lessonLabel = answerValue(problem.label);
  let score = 0;

  if (prompt.includes(value) || prompt.includes(label)) score += 12;
  if (sameChoiceShape(value, correctValue)) score += 6;
  if (sameWordCount(choice.label, correct.label)) score += 2;
  if (sameAnswerFamily(value, correctValue, lessonLabel)) score += 3;
  if (isWeakDistractor(value, prompt, lessonLabel)) score -= 10;
  return score;
}

function sameChoiceShape(value, correctValue) {
  if (/^-?\d+(?:\.\d+)?%?$/.test(value) && /^-?\d+(?:\.\d+)?%?$/.test(correctValue)) return true;
  if (/^-?\d+\/-?\d+$/.test(value) && /^-?\d+\/-?\d+$/.test(correctValue)) return true;
  if (/^(yes|no|true|false)$/.test(value) && /^(yes|no|true|false)$/.test(correctValue)) return true;
  if (value.includes(",") && correctValue.includes(",")) return true;
  return /^[a-z]+$/.test(value) && /^[a-z]+$/.test(correctValue);
}

function sameWordCount(value, correctValue) {
  const count = (item) => String(item || "").trim().split(/\s+/).filter(Boolean).length;
  return count(value) === count(correctValue);
}

function sameAnswerFamily(value, correctValue, label) {
  const families = [
    ["mean", "median", "mode", "range"],
    ["wider", "narrower", "larger", "smaller", "same"],
    ["positive", "negative", "zero"],
    ["quantitative", "categorical"],
    ["statistic", "parameter"],
    ["vertex", "edge", "cycle", "path", "degree", "component"],
    ["subset", "element", "union", "intersection", "relation", "function"]
  ];
  return families.some((family) => family.includes(value) && family.includes(correctValue))
    || (label && value.includes(label) && correctValue.includes(label));
}

function isWeakDistractor(value, prompt, label) {
  if (prompt.includes(value) || label.includes(value)) return false;
  return [
    "decoration",
    "onlygeometry",
    "impossibledata",
    "exactproof",
    "eraseoutliers",
    "wholeplane",
    "angleonly",
    "numerator",
    "tangent",
    "nodata",
    "nounits",
    "unknownalways"
  ].some((weak) => value.includes(weak));
}

function stableChoiceOrder(values, seedText) {
  let seed = 0;
  String(seedText || "").split("").forEach((char) => {
    seed = ((seed * 31) + char.charCodeAt(0)) >>> 0;
  });
  return shuffleWithRandom(values, seededRandom(seed || 1));
}

function uniqueChoiceValues(values) {
  const result = [];
  values.filter((value) => value !== null && value !== undefined && String(value).trim()).forEach((value) => {
    if (!result.some((item) => answerValue(item) === answerValue(value))) result.push(String(value));
  });
  return result;
}

function numericDistractors(value, prompt, label) {
  if (label.includes("angle") || prompt.includes("degree")) return [value + 30, Math.max(0, value - 30), 180 - value];
  if (label.includes("percent")) return [value * 10, value / 10, value + 10];
  if (Math.abs(value) <= 10) return [value + 1, value - 1, -value || value + 2];
  return [value + 1, value - 1, value + 10, Math.max(0, value - 10)];
}

function decimalDistractors(value) {
  return [value + 0.1, value - 0.1, value * 10].map((item) => Number(item.toFixed(3)));
}

function fractionDistractors(value) {
  const [rawNumerator, rawDenominator] = value.split("/").map(Number);
  const denominator = rawDenominator || 1;
  return [
    `${rawNumerator + 1}/${denominator}`,
    `${rawNumerator}/${denominator + 1}`,
    `${denominator}/${rawNumerator || 1}`
  ];
}

function coordinateDistractors(value) {
  const compact = answerValue(value).replace(/[()]/g, "");
  const [x, y] = compact.split(",").map(Number);
  if (!Number.isFinite(x) || !Number.isFinite(y)) return ["(0,0)", "(1,0)", "(0,1)"];
  return [`(${y},${x})`, `(${-x},${y})`, `(${x},${-y})`];
}

function isAlgebraicChoiceValue(answer, problem) {
  const text = String(answer || "").trim();
  if (!/[A-Za-zθπ]/.test(text)) return false;
  if (/^(yes|no|true|false)$/i.test(text)) return false;
  const context = `${problem.prompt || ""} ${problem.label || ""}`;
  return /[+\-*/^=()]/.test(text) || /\b(expression|equation|polynomial|factor|quadratic|term|variable|function|slope|ratio)\b/i.test(context);
}

function algebraicDistractors(answer, problem) {
  const raw = String(answer || "").replace(/\s+/g, "");
  const candidates = [];
  addMonomialDistractors(candidates, raw);
  addExpressionDistractors(candidates, raw);
  addFactoredDistractors(candidates, raw);

  if (raw.includes("/")) {
    const [top, bottom] = raw.split("/");
    if (top && bottom) {
      candidates.push(top, bottom, `${bottom}/${top}`);
    }
  }

  if (raw.includes("^2")) {
    candidates.push(raw.replace(/\^2/g, ""), raw.replace(/\^2/g, "^3"));
  }

  const context = answerValue(`${problem.prompt || ""} ${problem.label || ""}`);
  if (context.includes("combine") || context.includes("like") || context.includes("polynomial")) {
    candidates.push(raw.replace(/([A-Za-z])\^2/g, "$1"), raw.replace(/\+2x\b/, "+2x^2"));
  }

  return candidates.filter((item) => answerValue(item) !== answerValue(answer));
}

function addMonomialDistractors(candidates, raw) {
  const match = raw.match(/^(-?\d*)([A-Za-zθπ])(\^\d+)?$/);
  if (!match) return;
  const sign = match[1] === "-" ? -1 : 1;
  const coefficient = match[1] === "" || match[1] === "-" ? sign : Number(match[1]);
  const variable = match[2];
  const exponent = match[3] || "";
  if (!Number.isFinite(coefficient)) return;
  candidates.push(
    formatMonomial(coefficient + 1, variable, exponent),
    formatMonomial(coefficient - 1 || coefficient + 2, variable, exponent),
    `${variable}${exponent}`,
    String(coefficient)
  );
}

function addExpressionDistractors(candidates, raw) {
  const binomial = raw.match(/^([A-Za-zθπ])([+-])(\d+)$/);
  if (binomial) {
    const variable = binomial[1];
    const sign = binomial[2];
    const constant = Number(binomial[3]);
    candidates.push(
      `${variable}${sign}${constant + 1}`,
      `${variable}${sign}${Math.max(0, constant - 1)}`,
      `${variable}${sign === "+" ? "-" : "+"}${constant}`
    );
  }

  const firstCoefficient = raw.match(/^(-?\d+)([A-Za-z])(\^\d+)?/);
  if (firstCoefficient) {
    const coefficient = Number(firstCoefficient[1]);
    const variable = firstCoefficient[2];
    const exponent = firstCoefficient[3] || "";
    candidates.push(raw.replace(firstCoefficient[0], formatMonomial(coefficient + 1, variable, exponent)));
    candidates.push(raw.replace(firstCoefficient[0], formatMonomial(coefficient - 1 || coefficient + 2, variable, exponent)));
  }

  if (/[+-]/.test(raw.slice(1))) {
    candidates.push(raw.replace(/[+-][^+-]+$/, ""));
    candidates.push(raw.replace(/\+/g, "-"));
  }
}

function addFactoredDistractors(candidates, raw) {
  if (!/\)\(/.test(raw)) return;
  candidates.push(raw.replace(/\+(\d+)\)/, "-$1)"));
  candidates.push(raw.replace(/-(\d+)\)/, "+$1)"));
  candidates.push(raw.replace(/\)\(([^)]+)\)/, "+$1"));
}

function formatMonomial(coefficient, variable, exponent = "") {
  if (coefficient === 1) return `${variable}${exponent}`;
  if (coefficient === -1) return `-${variable}${exponent}`;
  return `${coefficient}${variable}${exponent}`;
}

function textDistractors(answer, prompt, label) {
  const pools = [
    { test: "direction|shift", values: ["up", "down", "left", "right"] },
    { test: "angle", values: ["acute", "right", "obtuse", "straight"] },
    { test: "triangle", values: ["equilateral", "isosceles", "scalene", "right"] },
    { test: "quadrant", values: ["I", "II", "III", "IV"] },
    { test: "property|identity|inverse|closure|commutative|associative|distributive|transitive", values: ["closure", "identity", "inverse", "commutative", "associative", "distributive", "transitive"] },
    { test: "proof|logic|quantifier|contradiction|construction|counterexample|induction|hypothesis|conclusion", values: ["hypothesis", "conclusion", "contradiction", "counterexample", "base case", "inductive step", "exists", "for all"] },
    { test: "set|subset|member|function|relation", values: ["set", "subset", "element", "relation", "function", "union", "intersection"] },
    { test: "physics|unit|force|energy|momentum|charge|wave|light|heat", values: ["force", "energy", "momentum", "light", "heat", "charge", "mass", "time"] },
    { test: "number|prime|factor|multiple|divisor", values: ["prime", "composite", "factor", "multiple", "divisor", "remainder"] }
  ];
  const haystack = `${prompt} ${label} ${answerValue(answer)}`;
  const pool = pools.find((item) => new RegExp(item.test).test(haystack))?.values || ["definition", "example", "method"];
  return pool.filter((item) => answerValue(item) !== answerValue(answer));
}

function displayChoiceLabel(value) {
  return String(value)
    .replace(/\bforall\b/g, "for all")
    .replace(/\bthereexists\b/g, "there exists")
    .replace(/\batleastone\b/g, "at least one");
}

function setChoiceText(button, label, model) {
  const text = String(label ?? "");
  if (shouldRenderChoiceAsMath(text, model)) {
    setMathText(button, `<math>${text}</math>`);
    button.setAttribute("aria-label", stripMathTags(text));
    return;
  }
  setMathText(button, text);
  button.setAttribute("aria-label", stripMathTags(text));
}

function shouldRenderChoiceAsMath(label, model) {
  const text = String(label || "").trim();
  if (!text || /^(yes|no|true|false)$/i.test(text)) return false;
  if (hasMathSyntax(displayMathText(text))) return true;
  const promptHasMath = hasMathSyntax(displayMathText(stripMathTags(model.prompt || "")));
  return promptHasMath && /^-?(?:\d+(?:\.\d+)?|(?:\d*)[A-Za-zθπ])$/.test(text);
}

function optionsFromPrompt(prompt) {
  const text = String(prompt || "")
    .replace(/\?/g, "")
    .replace(/\.$/, "")
    .replace(/\s+/g, " ");
  const colonMatch = text.match(/\b(?:choose|select|answer|which|what symbol|which symbol|closer|larger|greater|smaller|closest)\b[^:]*:\s*([^?]+)$/i);
  const closerMatch = text.match(/\bcloser to\s+(.+)$/i);
  const chooseMatch = text.match(/\b(?:which|what)\s+(?:is|are)\s+[^:]*\b(?:larger|greater|smaller|closest)\b:?\s+(.+)$/i);
  const source = colonMatch ? colonMatch[1] : closerMatch ? closerMatch[1] : chooseMatch ? chooseMatch[1] : text;
  if (!colonMatch && !closerMatch && !chooseMatch && !/\bor\b/i.test(source)) return [];
  if (!/\bor\b/i.test(source) && !/,/.test(source)) return [];
  const pieces = source
    .replace(/\bwhich is (?:larger|greater|smaller)\b:?/i, "")
    .replace(/\bwhat is .* closest to\b:?/i, "")
    .split(/\s*,\s*|\s+or\s+/i)
    .map((item) => item.trim().replace(/^or\s+/i, "").replace(/^["'“”]+|["'“”]+$/g, ""))
    .filter(Boolean);
  return pieces
    .filter((item) => item.length <= 32)
    .filter((item) => !/^(what|which|is|are|does|do|answer)$/i.test(item));
}

function prioritizeAnswerChoice(options, answers) {
  const normalizedAnswers = new Set((answers || []).map((item) => answerValue(item)));
  const unique = [];
  options.forEach((option) => {
    if (!unique.some((item) => answerValue(item) === answerValue(option))) unique.push(option);
  });
  if (!unique.some((option) => normalizedAnswers.has(answerValue(option)))) return [];
  return unique;
}

function symbolChoicesForAnswer(answer) {
  const symbols = ["∈", "∉", "⊂", "⊆", "∪", "∩", "≡", "≤", "≥", "⊥"];
  if (!symbols.some((symbol) => answerValue(symbol) === answerValue(answer))) return [];
  return symbols.slice(0, 6).includes(answer) ? symbols.slice(0, 6) : [answer, ...symbols.filter((symbol) => symbol !== answer).slice(0, 5)];
}

function selectConceptChoice(input, value) {
  if (input.disabled) return;
  input.value = value;
  input.classList.remove("incorrect", "correct", "hint");
  setConceptInlineHint(input, "");
  syncConceptChoiceButtons(input);
  if (state.mode === "guided") setStatus("Choice selected. Press Check.", "");
  if (state.mode === "practice") setStatus("Choice selected. Press Check.", "");
  if (state.mode === "explore") markExploreInput(input);
}

function syncConceptChoiceButtons(input) {
  const card = input.closest(".concept-card");
  if (!card) return;
  const value = answerValue(input.value);
  card.querySelectorAll(".concept-choice-button").forEach((button) => {
    const selected = value && answerValue(button.dataset.choiceValue) === value;
    button.classList.toggle("selected", Boolean(selected));
    button.setAttribute("aria-checked", selected ? "true" : "false");
    button.classList.toggle("correct", input.classList.contains("correct") && selected);
    button.classList.toggle("incorrect", input.classList.contains("incorrect") && selected);
    button.disabled = input.disabled;
  });
}

function buildEquationModel(problem) {
  const { a, b, c } = problem;
  const afterSubtract = c - b;
  const solution = afterSubtract / a;
  const cells = [];
  let sequence = 0;

  if (b !== 0) {
    const inverse = signedTerm(-b);
    cells.push(equationStep({
      id: "eq-subtract-left",
      row: 3,
      col: 2,
      expected: inverse,
      sequence,
      label: `apply ${inverse} to the left side`,
      hint: `Undo ${signedTerm(b)} by using ${inverse}.`
    }));
    sequence += 1;
    cells.push(equationStep({
      id: "eq-subtract-right",
      row: 3,
      col: 4,
      expected: inverse,
      sequence,
      label: `apply ${inverse} to the right side`,
      hint: "Keep the equation balanced by doing the same thing to both sides."
    }));
    sequence += 1;
    cells.push(equationStep({
      id: "eq-simplified-left",
      row: 4,
      col: 2,
      expected: variableTerm(a),
      sequence,
      label: "simplified left side",
      hint: `${variableTerm(a)} remains after the constant is removed.`
    }));
    sequence += 1;
    cells.push(equationStep({
      id: "eq-simplified-right",
      row: 4,
      col: 4,
      expected: String(afterSubtract),
      sequence,
      label: "simplified right side",
      hint: `${c} ${inverse} = ${afterSubtract}.`
    }));
    sequence += 1;
  }

  if (a !== 1) {
    cells.push(equationStep({
      id: "eq-divide-left",
      row: 5,
      col: 2,
      expected: `/${a}`,
      answers: operationAnswersForCoefficient(a),
      sequence,
      label: `divide the left side by ${a}`,
      hint: `Undo multiplication by ${a} with division.`
    }));
    sequence += 1;
    cells.push(equationStep({
      id: "eq-divide-right",
      row: 5,
      col: 4,
      expected: `/${a}`,
      answers: operationAnswersForCoefficient(a),
      sequence,
      label: `divide the right side by ${a}`,
      hint: "Use the same operation on both sides."
    }));
    sequence += 1;
  }

  cells.push(equationStep({
    id: "eq-solution",
    row: 6,
    col: 4,
    expected: String(solution),
    sequence,
    label: `solution ${solution}`,
    hint: `The value that makes the original equation true is ${solution}.`
  }));

  return {
    ...problem,
    expression: equationExpression(a, b),
    afterSubtract,
    solution,
    cells
  };
}

function equationStep({ id, row, col, expected, answers, sequence, label, hint }) {
  return {
    id,
    row,
    col,
    kind: "equationStep",
    expected,
    answers: uniqueChoiceValues([expected, ...(answers || [])]),
    sequence,
    label,
    hint,
    inputMode: "text"
  };
}

function renderEquationGrid(model) {
  const staticCells = [
    { row: 1, col: 2, value: model.expression, className: "equation-expression active-source" },
    { row: 1, col: 3, value: "=", className: "operator" },
    { row: 1, col: 4, value: String(model.c), className: "equation-expression active-source" },
    { row: 4, col: 3, value: "=", className: "operator" },
    { row: 6, col: 2, value: "x", className: "equation-expression" },
    { row: 6, col: 3, value: "=", className: "operator" }
  ];

  for (let row = 1; row <= 6; row += 1) {
    addCell({ row, col: 1, value: equationLabelForRow(row), className: "row-label" });
  }

  for (let row = 1; row <= 6; row += 1) {
    for (let col = 2; col <= 4; col += 1) {
      const staticCell = staticCells.find((item) => item.row === row && item.col === col);
      const inputCell = model.cells.find((item) => item.row === row && item.col === col);
      if (staticCell) {
        addCell({ row, col, value: staticCell.value, className: staticCell.className });
      } else if (inputCell) {
        addInput(inputCell);
      } else {
        addCell({ row, col, value: "", className: "digit-static" });
      }
    }
  }
}

function buildInequalityModel(problem) {
  const { a, b, relation, c } = problem;
  const afterSubtract = c - b;
  const finalRelation = a < 0 ? reverseRelation(relation) : relation;
  const solution = afterSubtract / a;
  const cells = [];
  let sequence = 0;

  if (b !== 0) {
    const inverse = signedTerm(-b);
    cells.push(equationStep({
      id: "ineq-subtract-left",
      row: 3,
      col: 2,
      expected: inverse,
      sequence,
      label: `apply ${inverse} to the left side`,
      hint: `Undo ${signedTerm(b)} by using ${inverse}.`
    }));
    sequence += 1;
    cells.push(equationStep({
      id: "ineq-subtract-right",
      row: 3,
      col: 4,
      expected: inverse,
      sequence,
      label: `apply ${inverse} to the right side`,
      hint: "Keep the comparison balanced by doing the same thing to both sides."
    }));
    sequence += 1;
    cells.push(equationStep({
      id: "ineq-simplified-left",
      row: 4,
      col: 2,
      expected: variableTerm(a),
      sequence,
      label: "simplified left side",
      hint: `${variableTerm(a)} remains after the constant is removed.`
    }));
    sequence += 1;
    cells.push(equationStep({
      id: "ineq-simplified-right",
      row: 4,
      col: 4,
      expected: String(afterSubtract),
      sequence,
      label: "simplified right side",
      hint: `${c} ${inverse} = ${afterSubtract}.`
    }));
    sequence += 1;
  }

  if (a !== 1) {
    cells.push(equationStep({
      id: "ineq-divide-left",
      row: 5,
      col: 2,
      expected: `/${a}`,
      answers: operationAnswersForCoefficient(a),
      sequence,
      label: `apply ${a} to the left side`,
      hint: a === -1 ? "Multiplying or dividing by -1 changes the sign of the term." : `Undo multiplication by ${a} with division.`
    }));
    sequence += 1;
    cells.push(equationStep({
      id: "ineq-divide-right",
      row: 5,
      col: 4,
      expected: `/${a}`,
      answers: operationAnswersForCoefficient(a),
      sequence,
      label: `apply ${a} to the right side`,
      hint: a < 0 ? "Dividing by a negative means the inequality sign will reverse." : "Use the same operation on both sides."
    }));
    sequence += 1;

    if (a < 0) {
      cells.push(equationStep({
        id: "ineq-flip",
        row: 5,
        col: 3,
        expected: finalRelation,
        answers: relationAnswers(finalRelation),
        sequence,
        label: `reverse the sign to ${displayRelation(finalRelation)}`,
        hint: "When you divide by a negative, reverse the inequality sign."
      }));
      sequence += 1;
    }
  }

  cells.push(equationStep({
    id: "ineq-solution",
    row: 6,
    col: 4,
    expected: String(solution),
    sequence,
    label: `boundary value ${solution}`,
    hint: `The solution is x ${displayRelation(finalRelation)} ${solution}.`
  }));

  return {
    ...problem,
    expression: equationExpression(a, b),
    afterSubtract,
    finalRelation,
    solution,
    cells
  };
}

function renderInequalityGrid(model) {
  const simplifiedRelation = model.b === 0 ? model.relation : model.relation;
  const staticCells = [
    { row: 1, col: 2, value: model.expression, className: "equation-expression active-source" },
    { row: 1, col: 3, value: displayRelation(model.relation), className: "operator" },
    { row: 1, col: 4, value: String(model.c), className: "equation-expression active-source" },
    { row: 4, col: 3, value: displayRelation(simplifiedRelation), className: "operator" },
    { row: 6, col: 2, value: "x", className: "equation-expression" },
    { row: 6, col: 3, value: displayRelation(model.finalRelation), className: "operator" }
  ];

  for (let row = 1; row <= 6; row += 1) {
    addCell({ row, col: 1, value: equationLabelForRow(row), className: "row-label" });
  }

  for (let row = 1; row <= 6; row += 1) {
    for (let col = 2; col <= 4; col += 1) {
      const staticCell = staticCells.find((item) => item.row === row && item.col === col);
      const inputCell = model.cells.find((item) => item.row === row && item.col === col);
      if (inputCell) {
        addInput(inputCell);
      } else if (staticCell) {
        addCell({ row, col, value: staticCell.value, className: staticCell.className });
      } else {
        addCell({ row, col, value: "", className: "digit-static" });
      }
    }
  }
}

function buildSystemModel(problem) {
  const cells = [];
  let sequence = 0;

  problem.rows.forEach((row, rowIndex) => {
    const gridRow = rowIndex + 4;
    for (const side of ["left", "right"]) {
      const value = row[side];
      if (!isSystemInputCell(value)) continue;
      cells.push(equationStep({
        id: `system-${rowIndex}-${side}`,
        row: gridRow,
        col: side === "left" ? 2 : 4,
        expected: value.answer,
        answers: value.answers || [value.answer],
        sequence,
        label: `${row.label} ${side} side`,
        hint: value.hint
      }));
      sequence += 1;
    }
  });

  return {
    ...problem,
    cells
  };
}

function renderSystemGrid(model) {
  const maxRow = Math.max(8, model.rows.length + 3);

  addCell({ row: 1, col: 1, value: "given", className: "row-label" });
  addCell({ row: 1, col: 2, value: model.equations[0], className: "system-expression active-source" });
  addCell({ row: 2, col: 1, value: "", className: "row-label" });
  addCell({ row: 2, col: 2, value: model.equations[1], className: "system-expression active-source" });
  addCell({ row: 3, col: 1, value: model.method, className: "row-label" });
  addCell({ row: 3, col: 2, value: systemMethodText(model.method), className: "system-note" });

  for (let row = 4; row <= maxRow; row += 1) {
    const workRow = model.rows[row - 4];
    addCell({ row, col: 1, value: workRow?.label || "", className: "row-label" });
    for (let col = 2; col <= 4; col += 1) {
      if (!workRow) {
        addCell({ row, col, value: "", className: "digit-static" });
        continue;
      }
      if (col === 3) {
        addCell({ row, col, value: workRow.relation ?? "=", className: "operator" });
        continue;
      }
      const side = col === 2 ? "left" : "right";
      const value = workRow[side];
      const inputCell = model.cells.find((cell) => cell.row === row && cell.col === col);
      if (inputCell) {
        addInput(inputCell);
      } else {
        addCell({ row, col, value: systemCellText(value), className: "system-expression" });
      }
    }
  }
}

function buildFactoringModel(problem) {
  const cells = [];
  let sequence = 0;

  problem.rows.forEach((row, rowIndex) => {
    const gridRow = rowIndex + 3;
    for (const side of ["left", "right"]) {
      const value = row[side];
      if (!isSystemInputCell(value)) continue;
      cells.push(equationStep({
        id: `factor-${rowIndex}-${side}`,
        row: gridRow,
        col: side === "left" ? 2 : 4,
        expected: value.answer,
        answers: value.answers || [value.answer],
        sequence,
        label: `${row.label} ${side} side`,
        hint: value.hint
      }));
      sequence += 1;
    }
  });

  return {
    ...problem,
    cells
  };
}

function renderFactoringGrid(model) {
  const maxRow = Math.max(11, model.rows.length + 2);

  addCell({ row: 1, col: 1, value: "factor", className: "row-label" });
  addCell({ row: 1, col: 2, value: model.expression, className: "system-expression active-source" });
  addCell({ row: 2, col: 1, value: model.method, className: "row-label" });
  addCell({ row: 2, col: 2, value: factoringMethodText(model.method), className: "system-note" });

  for (let row = 3; row <= maxRow; row += 1) {
    const workRow = model.rows[row - 3];
    addCell({ row, col: 1, value: workRow?.label || "", className: "row-label" });
    for (let col = 2; col <= 4; col += 1) {
      if (!workRow) {
        addCell({ row, col, value: "", className: "digit-static" });
        continue;
      }
      if (col === 3) {
        addCell({ row, col, value: workRow.relation ?? "=", className: "operator" });
        continue;
      }
      const side = col === 2 ? "left" : "right";
      const value = workRow[side];
      const inputCell = model.cells.find((cell) => cell.row === row && cell.col === col);
      if (inputCell) {
        addInput(inputCell);
      } else {
        addCell({ row, col, value: systemCellText(value), className: "system-expression" });
      }
    }
  }
}

function factoringMethodText(method) {
  if (method === "pair") return "List pairs for the number term; match the x term.";
  if (method === "gcf") return "Pull out the greatest common factor first.";
  if (method === "difference of squares") return "Use square roots with opposite signs.";
  return "Show the structure before the final factors.";
}

function buildQuadraticModel(problem) {
  return buildFactoringModel(problem);
}

function renderQuadraticGrid(model) {
  const maxRow = Math.max(12, model.rows.length + 2);

  addCell({ row: 1, col: 1, value: "quadratic", className: "row-label" });
  addCell({ row: 1, col: 2, value: model.expression, className: "system-expression active-source" });
  addCell({ row: 2, col: 1, value: model.method, className: "row-label" });
  addCell({ row: 2, col: 2, value: quadraticMethodText(model.method), className: "system-note" });

  for (let row = 3; row <= maxRow; row += 1) {
    const workRow = model.rows[row - 3];
    addCell({ row, col: 1, value: workRow?.label || "", className: "row-label" });
    for (let col = 2; col <= 4; col += 1) {
      if (!workRow) {
        addCell({ row, col, value: "", className: "digit-static" });
        continue;
      }
      if (col === 3) {
        addCell({ row, col, value: workRow.relation ?? "=", className: "operator" });
        continue;
      }
      const side = col === 2 ? "left" : "right";
      const value = workRow[side];
      const inputCell = model.cells.find((cell) => cell.row === row && cell.col === col);
      if (inputCell) {
        addInput(inputCell);
      } else {
        addCell({ row, col, value: systemCellText(value), className: "system-expression" });
      }
    }
  }
}

function quadraticMethodText(method) {
  if (method === "roots by factoring") return "List pairs, match the x term, then set factors to zero.";
  if (method === "vertex") return "Use the opposite of the x term number divided by double the x^2 number.";
  if (method === "evaluate") return "Substitute the given x-value, then simplify.";
  return "Choose the structure that matches the question.";
}

function isSystemInputCell(value) {
  return value && typeof value === "object" && "answer" in value;
}

function systemCellText(value) {
  if (value === undefined || value === null) return "";
  return typeof value === "object" ? value.answer || "" : String(value);
}

function systemMethodText(method) {
  if (method === "elimination") return "Combine equations to remove one variable.";
  if (method === "substitution") return "Replace a variable using the other equation.";
  return "Show each algebra step.";
}

function equationLabelForRow(row) {
  const labels = {
    1: "start",
    3: "do both sides",
    4: "simplify",
    5: "do both sides",
    6: "solution"
  };
  return labels[row] || "";
}

function displayRelation(relation) {
  if (relation === "<=") return "≤";
  if (relation === ">=") return "≥";
  return relation;
}

function reverseRelation(relation) {
  const reversed = {
    "<": ">",
    ">": "<",
    "<=": ">=",
    ">=": "<="
  };
  return reversed[relation] || relation;
}

function relationAnswers(relation) {
  const displayed = displayRelation(relation);
  if (relation === "<=") return ["<=", "≤"];
  if (relation === ">=") return [">=", "≥"];
  return [relation, displayed];
}

function operationAnswersForCoefficient(coefficient) {
  const answers = [`/${coefficient}`, `÷${coefficient}`];
  if (coefficient === -1) {
    answers.push("*-1", "×-1", "x-1");
  }
  return answers;
}

function equationExpression(a, b) {
  if (a === 1 && b === 0) return "x";
  const variable = variableTerm(a);
  if (b === 0) return variable;
  return `${variable} ${b > 0 ? "+" : "-"} ${Math.abs(b)}`;
}

function variableTerm(coefficient) {
  if (coefficient === 1) return "x";
  if (coefficient === -1) return "-x";
  return `${coefficient}x`;
}

function signedTerm(value) {
  return value > 0 ? `+${value}` : String(value);
}

function openLinkedWorkspace(model) {
  if (!model.workspaceId || !workspaceRegistry[model.workspaceId]) return;
  state.activeWorkspaceId = model.workspaceId;
  state.activeTopic = "Arithmetic";
  state.customProblems[model.workspaceId] = { top: model.top, bottom: model.bottom };
  state.activeStep = 0;
  state.showIntro = false;
  renderTopics();
  renderWorkspace();
  updateUrlFromState();
  saveProgress(`Opened ${workspaceRegistry[model.workspaceId].title.toLowerCase()}`);
}

function findLesson(id) {
  for (const group of [...topicGroups, ...physicsTopicGroups]) {
    const lesson = lessonsForGroup(group).find((item) => item.id === id);
    if (lesson) return lesson;
  }
  return null;
}

function currentProblem(workspaceId, problemSet) {
  return state.customProblems[workspaceId] || problemSet[state.selectedProblemIndex % problemSet.length];
}

function buildAdditionModel(top, bottom) {
  const width = operationDigitWidth(top, bottom);
  const topDigits = digits(top, width);
  const bottomDigits = digits(bottom, width);
  const firstSumIndex = Math.max(0, width - String(top + bottom).length);
  const total = top + bottom;
  const sumDigits = String(total).padStart(width + 1, "0").split("");
  const cells = [];
  let sequence = 0;
  let carry = 0;

  for (let index = width - 1; index >= 0; index -= 1) {
    const col = digitColumn(index, width);
    const columnTotal = topDigits[index] + bottomDigits[index] + carry;
    const digit = columnTotal % 10;
    const nextCarry = Math.floor(columnTotal / 10);
    const incomingAddCarryId = carry > 0 ? `add-carry-${col}` : null;

    if (index >= firstSumIndex) {
      cells.push({
        id: `add-sum-${index}`,
        row: 5,
        col,
        kind: "sum",
        expected: String(digit),
        sequence,
        topCol: col,
        bottomCol: col,
        incomingAddCarryId,
        label: `sum digit ${digit}`,
        hint: `Add this column and write the ones digit here.`
      });
      sequence += 1;
    }

    if (nextCarry > 0) {
      cells.push({
        id: `add-carry-${col - 1}`,
        row: 1,
        col: col - 1,
        kind: "addCarry",
        expected: String(nextCarry),
        sequence,
        label: `carry ${nextCarry}`,
        hint: `Carry ${nextCarry} into the next column.`
      });
      sequence += 1;
    }
    carry = nextCarry;
  }

  if (sumDigits[0] !== "0") {
    cells.push({
      id: "add-sum-lead",
      row: 5,
      col: digitColumn(0, width) - 1,
      kind: "sum",
      expected: sumDigits[0],
      sequence,
      incomingAddCarryId: `add-carry-${digitColumn(0, width) - 1}`,
      label: `leading sum digit ${sumDigits[0]}`,
      hint: "Bring down the final carry."
    });
  }

  return { top, bottom, topDigits, bottomDigits, width, final: total, cells };
}

function renderAdditionGrid(model) {
  const staticCells = [
    ...digitDisplayCells(model.top, model.width, 2),
    ...digitDisplayCells(model.bottom, model.width, 3),
    { row: 3, col: digitColumn(0, model.width) - 1, value: "+", operator: true }
  ];

  for (let row = 1; row <= 5; row += 1) {
    addCell({ row, col: 1, value: additionLabelForRow(row), className: "row-label" });
  }

  for (let row = 1; row <= 5; row += 1) {
    for (let col = 2; col <= 7; col += 1) {
      const staticCell = staticCells.find((item) => item.row === row && item.col === col);
      const inputCell = model.cells.find((item) => item.kind !== "addCarry" && item.row === row && item.col === col);
      if (row === 4 && col > 2) continue;

      if (row === 1) {
        addCarrySlot({ row, col, slotKind: "add" });
      } else if (row === 4) {
        addLineCell({ row });
      } else if (staticCell) {
        addCell({
          row,
          col,
          value: staticCell.value,
          className: staticCell.operator ? "operator" : "digit-static"
        });
      } else if (inputCell) {
        addInput(inputCell);
      } else {
        addCell({ row, col, value: "", className: "digit-static" });
      }
    }
  }
}

function additionLabelForRow(row) {
  const labels = {
    1: "carry",
    2: "top",
    3: "by",
    5: "sum"
  };
  return labels[row] || "";
}

function buildDivisionModel(dividend, divisor) {
  const dividendDigits = numberDigits(dividend);
  const cells = [];
  let sequence = 0;
  let remainder = 0;
  let divisionStarted = false;
  let stepIndex = 0;

  dividendDigits.forEach((digit, index) => {
    const col = digitColumn(index, dividendDigits.length);
    const partial = remainder * 10 + digit;
    if (!divisionStarted && partial < divisor && index < dividendDigits.length - 1) {
      remainder = partial;
      return;
    }
    divisionStarted = true;
    const quotientDigit = Math.floor(partial / divisor);
    const product = quotientDigit * divisor;
    remainder = partial - product;
    const row = 3 + stepIndex * 3;

    cells.push({
      id: `div-partial-${index}`,
      row,
      col,
      kind: "divisionPartial",
      expected: String(partial),
      sequence,
      sourceCol: col,
      label: `partial dividend ${partial}`,
      hint: "Use the current digit with any previous remainder."
    });
    sequence += 1;

    cells.push({
      id: `div-quotient-${index}`,
      row: 1,
      col,
      kind: "divisionQuotient",
      expected: String(quotientDigit),
      sequence,
      sourceCol: col,
      partialId: `div-partial-${index}`,
      label: `quotient digit ${quotientDigit}`,
      hint: `${divisor} goes into ${partial} ${quotientDigit} time${quotientDigit === 1 ? "" : "s"}.`
    });
    sequence += 1;

    cells.push({
      id: `div-product-${index}`,
      row: row + 1,
      col,
      kind: "divisionProduct",
      expected: String(product),
      sequence,
      sourceCol: col,
      quotientId: `div-quotient-${index}`,
      label: `product ${product}`,
      hint: `Multiply ${divisor} by the quotient digit.`
    });
    sequence += 1;

    cells.push({
      id: `div-remainder-${index}`,
      row: row + 2,
      col,
      kind: "divisionRemainder",
      expected: String(remainder),
      sequence,
      sourceCol: col,
      partialId: `div-partial-${index}`,
      productId: `div-product-${index}`,
      label: index === dividendDigits.length - 1 ? `final remainder ${remainder}` : `remainder ${remainder}`,
      hint: "Subtract the product from the partial dividend."
    });
    sequence += 1;
    stepIndex += 1;
  });

  return { top: dividend, bottom: divisor, dividendDigits, divisor, divisorDigits: String(divisor).split(""), cells };
}

function renderDivisionGrid(model) {
  const dividendStart = digitColumn(0, model.dividendDigits.length);
  for (let row = 1; row <= 11; row += 1) {
    addCell({ row, col: 1, value: divisionLabelForRow(row), className: "row-label" });
  }

  for (let row = 1; row <= 11; row += 1) {
    for (let col = 2; col <= 7; col += 1) {
      const inputCell = model.cells.find((item) => item.row === row && item.col === col);
      const dividendIndex = col - dividendStart;

      if (row === 1 && col >= 5) {
        if (inputCell) {
          addInput(inputCell);
        } else {
          addCell({ row, col, value: "", className: "digit-static" });
        }
      } else if (row === 2 && col >= 3 && col <= 4) {
        const divisorDigit = model.divisorDigits[col - (5 - model.divisorDigits.length)];
        addCell({ row, col, value: divisorDigit || "", className: "operator division-divisor" });
      } else if (row === 2 && dividendIndex >= 0 && dividendIndex < model.dividendDigits.length) {
        addCell({
          row,
          col,
          value: String(model.dividendDigits[dividendIndex]),
          className: `digit-static division-digit ${dividendIndex === 0 ? "division-first" : ""}`
        });
      } else if (inputCell) {
        addInput(inputCell);
      } else {
        addCell({ row, col, value: "", className: "digit-static" });
      }
    }
  }
}

function divisionLabelForRow(row) {
  const labels = {
    1: "quotient",
    3: "partial",
    4: "product",
    5: "remain",
    6: "partial",
    7: "product",
    8: "remain",
    9: "partial",
    10: "product",
    11: "remain"
  };
  return labels[row] || "";
}

function buildSubtractionModel(top, bottom) {
  const width = operationDigitWidth(top, bottom);
  const topDigits = digits(top, width);
  const bottomDigits = digits(bottom, width);
  const answer = top - bottom;
  const firstAnswerIndex = Math.max(0, width - String(Math.max(0, answer)).length);
  const answerDigits = String(answer).padStart(width, "0").split("");
  const workingTop = [...topDigits];
  const cells = [];
  let sequence = 0;

  for (let index = width - 1; index >= 0; index -= 1) {
    const current = workingTop[index];
    const needsBorrow = current < bottomDigits[index];
    if (needsBorrow) {
      const lenderIndex = findLenderIndex(workingTop, index);
      workingTop[index] = current + 10;
      cells.push({
        id: `sub-borrow-raise-${index}`,
        row: 2,
        col: digitColumn(index, width),
        kind: "borrow",
        borrowRole: "recipient",
        expected: "1",
        sequence,
        label: "borrow 1",
        hint: "Mark the borrowed ten for this column."
      });
      sequence += 1;

      if (lenderIndex >= 0) {
        workingTop[lenderIndex] -= 1;
        cells.push({
          id: `sub-borrow-lender-${lenderIndex}-${index}`,
          row: 2,
          col: digitColumn(lenderIndex, width),
          kind: "borrow",
          borrowRole: "lender",
          expected: String(workingTop[lenderIndex]),
          sequence,
          label: `reduced lender digit ${workingTop[lenderIndex]}`,
          hint: "Show the digit that lent one ten."
        });
        sequence += 1;

        for (let passIndex = lenderIndex + 1; passIndex < index; passIndex += 1) {
          workingTop[passIndex] = 9;
          cells.push({
            id: `sub-borrow-pass-${passIndex}-${index}`,
            row: 2,
            col: digitColumn(passIndex, width),
            kind: "borrow",
            borrowRole: "lender",
            expected: "9",
            sequence,
            label: "passed borrow digit 9",
            hint: "This zero received a ten and lent one on, so it becomes 9."
          });
          sequence += 1;
        }
      }
    }

    const col = digitColumn(index, width);
    const borrowCell = [...cells].reverse().find((cell) => cell.kind === "borrow" && cell.col === col);
    if (index >= firstAnswerIndex) {
      cells.push({
        id: `sub-diff-${index}`,
        row: 5,
        col,
        kind: "difference",
        expected: answerDigits[index],
        sequence,
        topCol: col,
        bottomCol: col,
        borrowId: borrowCell?.id || null,
        label: `difference digit ${answerDigits[index]}`,
        hint: `Subtract the lower digit from the adjusted top digit.`
      });
      sequence += 1;
    }
  }

  return { top, bottom, topDigits, bottomDigits, width, final: top - bottom, cells };
}

function findLenderIndex(workingTop, targetIndex) {
  for (let index = targetIndex - 1; index >= 0; index -= 1) {
    if (workingTop[index] > 0) return index;
  }
  return -1;
}

function renderSubtractionGrid(model) {
  const staticCells = [
    ...digitDisplayCells(model.top, model.width, 2),
    ...digitDisplayCells(model.bottom, model.width, 3),
    { row: 3, col: digitColumn(0, model.width) - 1, value: "–", operator: true }
  ];

  for (let row = 2; row <= 5; row += 1) {
    addCell({ row, col: 1, value: subtractionLabelForRow(row), className: "row-label" });
  }

  for (let row = 2; row <= 5; row += 1) {
    for (let col = 2; col <= 7; col += 1) {
      const staticCell = staticCells.find((item) => item.row === row && item.col === col);
      const inputCell = model.cells.find((item) => item.kind !== "borrow" && item.row === row && item.col === col);
      if (row === 4 && col > 2) continue;
      if (row === 4) {
        addLineCell({ row });
      } else if (staticCell) {
        addCell({
          row,
          col,
          value: staticCell.value,
          className: staticCell.operator ? "operator" : "digit-static",
          borrowSlot: !staticCell.operator && row === 2
        });
      } else if (inputCell) {
        addInput(inputCell);
      } else {
        addCell({ row, col, value: "", className: "digit-static" });
      }
    }
  }
}

function subtractionLabelForRow(row) {
  const labels = {
    2: "top",
    3: "by",
    5: "difference"
  };
  return labels[row] || "";
}

function buildMultiplicationModel(top, bottom) {
  const topDigits = numberDigits(top);
  const bottomDigits = numberDigits(bottom);
  const bottomFromRight = [...bottomDigits].reverse();
  const partials = bottomFromRight.map((digit, index) => top * digit * 10 ** index);
  const final = top * bottom;
  const cells = [];
  let sequence = 0;

  bottomFromRight.forEach((multiplierDigit, rowIndex) => {
    const topFromRight = [...topDigits].reverse();
    let carry = 0;
    for (let zeroIndex = 0; zeroIndex < rowIndex; zeroIndex += 1) {
      cells.push({
        id: `r${rowIndex}-zero-${zeroIndex}`,
        row: partialRow(rowIndex),
        col: 7 - zeroIndex,
        kind: "partial",
        expected: "0",
        sequence: sequence,
        partialIndex: rowIndex,
        label: "place value zero",
        hint: "This row is shifted left, so this place gets a zero."
      });
      sequence += 1;
    }
    topFromRight.forEach((topDigit, digitIndex) => {
      const total = topDigit * multiplierDigit + carry;
      const value = total % 10;
      const nextCarry = Math.floor(total / 10);
      const col = 7 - rowIndex - digitIndex;
      const topCol = 7 - digitIndex;
      const multiplierCol = 7 - rowIndex;
      cells.push({
        id: `r${rowIndex}-d${digitIndex}`,
        row: partialRow(rowIndex),
        col,
        kind: "partial",
        expected: String(value),
        sequence: sequence,
        partialIndex: rowIndex,
        topCol,
        multiplierCol,
        incomingCarryId: carry > 0 ? `c${rowIndex}-d${digitIndex - 1}` : null,
        label: `${topDigit} times ${multiplierDigit}`,
        hint: `${topDigit} x ${multiplierDigit} plus carried ${carry} gives a ones digit of ${value}.`
      });
      sequence += 1;
      if (nextCarry > 0 && digitIndex < topFromRight.length - 1) {
        cells.push({
          id: `c${rowIndex}-d${digitIndex}`,
          row: carryRow(rowIndex),
          col: topCol - 1,
          kind: "carry",
          expected: String(nextCarry),
          sequence: sequence,
          partialIndex: rowIndex,
          label: `carry ${nextCarry}`,
          hint: `Carry ${nextCarry} into the next column for this partial row.`
        });
        sequence += 1;
      }
      if (nextCarry > 0 && digitIndex === topFromRight.length - 1) {
        cells.push({
          id: `r${rowIndex}-lead`,
          row: partialRow(rowIndex),
          col: col - 1,
          kind: "partial",
          expected: String(nextCarry),
          sequence: sequence,
          partialIndex: rowIndex,
          label: `leading carry ${nextCarry}`,
          hint: `Place the remaining carry ${nextCarry} at the left of this partial row.`
        });
        sequence += 1;
      }
      carry = nextCarry;
    });
  });

  const finalDigits = String(final).split("");
  const finalLeftCol = 8 - finalDigits.length;
  let additionCarry = 0;
  for (let col = 7; col >= finalLeftCol; col -= 1) {
    const digitIndex = col - finalLeftCol;
    const addendCellIds = cells
      .filter((cell) => cell.kind === "partial" && cell.col === col)
      .map((cell) => cell.id);
    const columnTotal = addendCellIds.reduce((total, id) => {
      const cell = cells.find((item) => item.id === id);
      return total + Number(cell?.expected || 0);
    }, additionCarry);
    const nextAdditionCarry = Math.floor(columnTotal / 10);

    cells.push({
      id: `sum-${digitIndex}`,
      row: 10,
      col,
      kind: "sum",
      expected: finalDigits[digitIndex],
      sequence: sequence,
      partialIndex: null,
      addendCellIds,
      incomingAddCarryId: additionCarry > 0 ? `add-carry-${col}` : null,
      label: `final digit ${finalDigits[digitIndex]}`,
      hint: `Add the partial rows in this column. The digit here is ${finalDigits[digitIndex]}.`
    });
    sequence += 1;

    if (nextAdditionCarry > 0 && col > finalLeftCol) {
      cells.push({
        id: `add-carry-${col - 1}`,
        row: 5,
        col: col - 1,
        kind: "addCarry",
        expected: String(nextAdditionCarry),
        sequence: sequence,
        partialIndex: null,
        label: `addition carry ${nextAdditionCarry}`,
        hint: `Carry ${nextAdditionCarry} into the next addition column.`
      });
      sequence += 1;
    }
    additionCarry = nextAdditionCarry;
  }

  return { top, bottom, topDigits, bottomDigits, partialRows: bottomDigits.length, partials, final, cells };
}

function renderMultiplicationGrid(model) {
  const staticCells = [
    ...digitDisplayCells(model.top, Math.max(1, model.topDigits.length), 2),
    ...digitDisplayCells(model.bottom, Math.max(1, model.bottomDigits.length), 3),
    { row: 3, col: digitColumn(0, Math.max(1, model.bottomDigits.length)) - 1, value: "x", operator: true }
  ];

  for (let row = 1; row <= 10; row += 1) {
    addCell({ row, col: 1, value: labelForRow(row), className: "row-label" });
  }

  for (let row = 1; row <= 10; row += 1) {
    for (let col = 2; col <= 7; col += 1) {
      const staticCell = staticCells.find((item) => item.row === row && item.col === col);
      const inputCell = model.cells.find((item) => item.kind !== "carry" && item.kind !== "addCarry" && item.row === row && item.col === col);
      if ((row === 4 || row === 9) && col > 2) {
        continue;
      }

      if (row === 1) {
        addCarrySlot({ row, col, slotKind: "multiply" });
      } else if (row === 5) {
        addCarrySlot({ row, col, slotKind: "add" });
      } else if (row === 4 || row === 9) {
        addLineCell({ row });
      } else if (staticCell) {
        addCell({
          row,
          col,
          value: staticCell.value,
          className: staticCell.operator ? "operator" : "digit-static"
        });
      } else if (inputCell) {
        addInput(inputCell);
      } else {
        addCell({ row, col, value: "", className: "digit-static" });
      }
    }
  }
}

function labelForRow(row) {
  const labels = {
    1: "carry",
    2: "top",
    3: "by",
    5: "add carry",
    6: "ones",
    7: "tens",
    8: "hundreds",
    10: "sum"
  };
  if (row === 8 && state.currentModel?.partialRows < 3) return "";
  return labels[row] || "";
}

function addCell({ row, col, value, className, borrowSlot = false }) {
  const cell = document.createElement("div");
  cell.className = `grid-cell ${className || ""}`;
  cell.style.gridRow = String(row);
  cell.style.gridColumn = String(col);
  cell.dataset.row = String(row);
  if (row === 5 && className === "row-label" && els.grid.classList.contains("multiplication-grid")) {
    cell.dataset.rowLabel = "add-carry";
  }
  cell.dataset.col = String(col);
  if (borrowSlot) {
    cell.append(createBorrowSlot("recipient"));
    cell.append(createBorrowSlot("lender"));

    const digit = document.createElement("span");
    digit.textContent = value;
    cell.append(digit);
  } else {
    setMathText(cell, value);
  }
  els.grid.append(cell);
}

function setMathText(element, value) {
  const text = String(value ?? "");
  element.replaceChildren();
  element.removeAttribute("aria-label");
  element.classList.remove("has-math");

  if (text.includes("<math>")) {
    element.setAttribute("aria-label", stripMathTags(displayMathText(text)));
    element.classList.add("has-math");
    appendExplicitMathText(element, text);
    return;
  }

  appendAutoMathText(element, displayMathText(text));
}

function appendAutoMathText(element, text) {
  if (!hasMathSyntax(text)) {
    element.textContent = text;
    return;
  }

  element.setAttribute("aria-label", text);
  element.classList.add("has-math");
  appendMathSegment(element, text);
}

function appendExplicitMathText(element, text) {
  const pattern = /<math>(.*?)<\/math>/g;
  let cursor = 0;
  let match = pattern.exec(text);
  while (match) {
    if (match.index > cursor) {
      appendAutoMathFragment(element, displayMathText(text.slice(cursor, match.index)));
    }
    appendRun(element, displayMathText(match[1]), "math-run");
    cursor = pattern.lastIndex;
    match = pattern.exec(text);
  }
  if (cursor < text.length) {
    appendAutoMathFragment(element, displayMathText(text.slice(cursor)));
  }
}

function appendAutoMathFragment(element, text) {
  if (!text) return;
  if (!hasMathSyntax(text)) {
    appendTextRun(element, text);
    return;
  }

  appendMathSegment(element, text);
}

function stripMathTags(text) {
  return String(text || "").replace(/<\/?math>/g, "");
}

function appendSegmentBeforeExponent(element, text) {
  const baseMatch = text.match(/(.*?)(sin|cos|tan|sec|csc|cot|log|ln|lim|[A-Za-z0-9πθ])$/i);
  if (!baseMatch) {
    appendMathSegment(element, text);
    return;
  }

  appendMathSegment(element, baseMatch[1]);
  appendRun(element, baseMatch[2], "math-run");
}

function displayMathText(value) {
  return String(value || "").replace(/\bpi\b/g, "π");
}

function hasMathSyntax(text) {
  const value = String(text || "");
  const operand = String.raw`(?:\d+(?:\.\d+)?[A-Za-zπθ]?|[A-Za-zπθ]|ℕ|ℤ|ℚ|ℝ|ℂ|\([^)]+\)|\{[^}]+\})`;
  const expression = new RegExp(String.raw`(?<![A-Za-z])${operand}\s*(?:[+\-*/×·]|\\bmod\\b)\s*${operand}(?![A-Za-z])`, "i");
  const relation = new RegExp(String.raw`(?<![A-Za-z])${operand}\s*(?:=|≤|≥|≠|≈|≡|<|>|∈|∉|⊂|⊆)\s*${operand}(?![A-Za-z])`, "i");
  return /[\^πθ∫≤≥≠≈≡∈∉⊂⊆∪∩∀∃∴∵⊕⊢⊨⊥⊤ℕℤℚℝℂ×·]|[A-Za-z]\d|\d[A-Za-z]|\([^)]+,[^)]+\)|\{[^}]+\}|\b[A-Za-z]\([A-Za-z0-9]+\)|\b(?:sin|cos|tan|sec|csc|cot|arcsin|arccos|arctan|log|ln|lim)\b/i.test(value) || expression.test(value) || relation.test(value);
}

function appendMathSegment(element, text) {
  if (!text) return;
  const operand = String.raw`(?:\d+(?:\.\d+)?[A-Za-zπθ](?:\^\{?[-A-Za-z0-9πθ]+\}?)?|[A-Za-zπθ](?:\^\{?[-A-Za-z0-9πθ]+\}?)?|\d+(?:\.\d+)?)`;
  const expression = String.raw`(?<![A-Za-z])${operand}(?:\s*[+\-*/×·]\s*${operand})+(?![A-Za-z])`;
  const parenthesizedExpression = String.raw`\(\s*${expression}\s*\)`;
  const relation = String.raw`(?<![A-Za-z])(?:[A-Za-z]\([A-Za-z0-9]+\)|[A-Za-zπθℕℤℚℝℂ])\s*(?:=|≤|≥|≠|≈|≡|<|>|∈|∉|⊂|⊆)\s*(?:\{[^}]+\}|[^,.;?]+)`;
  const functionCall = String.raw`\b(?:sin|cos|tan|sec|csc|cot|arcsin|arccos|arctan|log|ln|lim)\s*[A-Za-zθπ]?\b`;
  const tokenPattern = new RegExp(
    [
      relation,
      String.raw`${parenthesizedExpression}\s*\/\s*${parenthesizedExpression}`,
      parenthesizedExpression,
      expression,
      String.raw`\b[A-Za-z]\([A-Za-z0-9]+\)`,
      functionCall,
      String.raw`\b(?:\d+(?:\.\d+)?|[A-Za-zθπ])\s*\/\s*(?:\d+(?:\.\d+)?|[A-Za-zθπ])\b`,
      String.raw`\b(?:\d+(?:\.\d+)?|[A-Za-zθπ])(?:\^\{?[-A-Za-z0-9πθ]+\}?)\b`,
      String.raw`\b\d+[A-Za-zπθ](?:\^\{?[-A-Za-z0-9πθ]+\}?)?\b`,
      String.raw`\b[A-Za-z]\d+\b`,
      String.raw`\([^)]+,[^)]+\)`,
      String.raw`\{[^}]+\}`,
      String.raw`[πθ∫∈∉⊂⊆∪∩∀∃∴∵⊕⊢⊨⊥⊤≡≈≤≥≠ℕℤℚℝℂ]`
    ].join("|"),
    "gi"
  );
  let cursor = 0;
  let match = tokenPattern.exec(text);
  if (match) {
    while (match) {
      if (match.index > cursor) {
        appendTextRun(element, text.slice(cursor, match.index));
      }
      appendRun(element, match[0], "math-run");
      cursor = tokenPattern.lastIndex;
      match = tokenPattern.exec(text);
    }
    if (cursor < text.length) {
      appendTextRun(element, text.slice(cursor));
    }
    return;
  }

  appendRun(element, text, shouldUseStandaloneMathFont(text) ? "math-run" : "text-run");
}

function appendTextRun(element, text) {
  appendRun(element, text, "text-run");
}

function appendRun(element, text, className) {
  if (!text) return;
  const segment = document.createElement("span");
  segment.className = className;
  if (className === "math-run") {
    segment.append(createInlineMathMlExpression(text));
  } else {
    segment.textContent = text;
  }
  element.append(segment);
}

function createInlineMathMlExpression(text) {
  const math = createMathMlExpression(normalizeInlineMathRun(text));
  math.classList.add("inline-mathml-run");
  return math;
}

function normalizeInlineMathRun(text) {
  return normalizePlainMathLine(String(text || "").trim()) || String(text || "").trim();
}

function appendMathRunContent(element, text) {
  const identifierPattern = /([A-Za-z]+|π|θ)/g;
  let cursor = 0;
  let match = identifierPattern.exec(text);
  while (match) {
    if (match.index > cursor) {
      element.append(document.createTextNode(text.slice(cursor, match.index)));
    }
    const token = match[0];
    const span = document.createElement("span");
    span.className = mathTokenClass(token);
    span.textContent = token;
    element.append(span);
    cursor = identifierPattern.lastIndex;
    match = identifierPattern.exec(text);
  }
  if (cursor < text.length) {
    element.append(document.createTextNode(text.slice(cursor)));
  }
}

function mathTokenClass(token) {
  const uprightTokens = new Set(["sin", "cos", "tan", "sec", "csc", "cot", "arcsin", "arccos", "arctan", "log", "ln", "lim", "π"]);
  if (uprightTokens.has(token.toLowerCase())) return "math-upright";
  return token.length === 1 ? "math-var" : "math-upright";
}

function shouldUseStandaloneMathFont(text) {
  const trimmed = text.trim();
  if (!shouldUseMathFont(trimmed)) return false;
  const withoutUprightNames = trimmed.replace(/\b(?:sin|cos|tan|sec|csc|cot|arcsin|arccos|arctan|log|ln)\b/gi, "");
  return !/[A-Za-z]{2,}/.test(withoutUprightNames);
}

function shouldUseMathFont(text) {
  const trimmed = text.trim();
  if (!trimmed) return false;
  if (/[π∫≤≥=+\-*/×·/]/.test(trimmed)) return true;
  if (/\d[A-Za-z]|[A-Za-z]\d/.test(trimmed)) return true;
  if (/^\([^)]+,[^)]+\)$/.test(trimmed)) return true;
  if (/^[A-Za-z]$/.test(trimmed)) return true;
  return false;
}

function createBorrowSlot(role) {
  const slot = document.createElement("label");
  slot.className = `borrow-superscript-slot borrow-${role}-slot`;
  const input = createScratchInput("borrow", role);
  slot.append(input);
  return slot;
}

function addLineCell({ row }) {
  const cell = document.createElement("div");
  cell.className = "grid-cell grid-line";
  cell.style.gridRow = String(row);
  cell.style.gridColumn = "2 / 8";
  cell.dataset.row = String(row);
  cell.textContent = "";
  els.grid.append(cell);
}

function addInput(cell) {
  const label = document.createElement("label");
  label.className = "grid-cell";
  label.style.gridRow = String(cell.row);
  label.style.gridColumn = String(cell.col);
  label.dataset.row = String(cell.row);
  label.dataset.col = String(cell.col);

  const input = document.createElement("input");
  input.className = `digit-input ${cell.kind === "carry" ? "carry-input" : ""} ${cell.kind === "equationStep" ? "equation-input" : ""}`.trim();
  input.inputMode = cell.inputMode || "numeric";
  if (input.inputMode === "numeric") {
    input.pattern = "[0-9]";
  }
  input.maxLength = cell.inputMode === "text"
    ? Math.max(16, cell.expected.length, ...(cell.answers || []).map((answer) => String(answer).length)) + 8
    : Math.max(1, cell.expected.length);
  input.autocomplete = "off";
  input.dataset.cellId = cell.id;
  input.dataset.expected = cell.expected;
  if (cell.answers) {
    input.dataset.answers = JSON.stringify(cell.answers);
  }
  input.dataset.hint = cell.hint;
  input.dataset.label = cell.label;
  input.dataset.feedback = cell.feedback || "";
  input.dataset.sequence = String(cell.sequence);
  input.setAttribute("aria-label", cell.label);

  input.addEventListener("input", (event) => {
    event.target.value = event.target.inputMode === "numeric" ? normalizeDigitInput(event.target) : normalizeAnswerInput(event.target.value);
    if (event.target.value.trim()) state.autoAdvancedToStep = null;
    if (shouldAutoAdvance(event.target)) autoAdvanceCurrentStep();
    if (state.mode === "practice") validateInput(event.target, false);
    if (state.mode === "explore") markExploreInput(event.target);
  });

  if (input.inputMode === "numeric") {
    input.addEventListener("beforeinput", handleDigitBeforeInput);
  }

  input.addEventListener("keydown", handleDigitKeydown);

  input.addEventListener("focus", (event) => {
    event.target.select();
  });

  label.append(input);
  els.grid.append(label);
}

function addCarrySlot({ row, col, slotKind }) {
  const label = document.createElement("label");
  label.className = "grid-cell carry-slot-cell";
  label.style.gridRow = String(row);
  label.style.gridColumn = String(col);
  label.dataset.row = String(row);
  label.dataset.col = String(col);
  label.dataset.slotKind = slotKind;

  const input = createScratchInput("carry");

  label.append(input);
  els.grid.append(label);
}

function createScratchInput(type, role) {
  const input = document.createElement("input");
  const roleClass = role ? ` borrow-${role}-input` : "";
  input.className = `digit-input carry-input carry-slot ${type === "borrow" ? `borrow-superscript-input${roleClass}` : ""}`;
  input.inputMode = "numeric";
  input.pattern = "[0-9]";
  input.maxLength = 1;
  input.autocomplete = "off";
  input.disabled = true;
  input.hidden = true;
  input.setAttribute("aria-label", type);

  input.addEventListener("input", (event) => {
    event.target.value = event.target.value.replace(/\D/g, "").slice(0, 1);
    if (event.target.value.trim()) state.autoAdvancedToStep = null;
    if (shouldAutoAdvance(event.target)) autoAdvanceCurrentStep();
    if (state.mode === "practice") validateInput(event.target, false);
    if (state.mode === "explore") markExploreInput(event.target);
  });

  input.addEventListener("beforeinput", handleDigitBeforeInput);

  input.addEventListener("keydown", handleDigitKeydown);

  input.addEventListener("focus", (event) => {
    event.target.select();
  });

  return input;
}

function setActiveStep() {
  const steps = orderedSteps();
  const activeStep = steps[state.activeStep];
  const isAdditionPhase = activeStep?.kind === "sum" || activeStep?.kind === "addCarry";
  els.grid.querySelectorAll(".active-column").forEach((cell) => cell.classList.remove("active-column"));
  els.grid.querySelector('[data-row-label="add-carry"]')?.classList.toggle("is-visible", isAdditionPhase);
  configureBorrowSlots(activeStep);
  configureCarrySlots(activeStep);
  configureAdditionCarrySlots(activeStep);

  steps.forEach((step, index) => {
    if (step.kind === "borrow" && step.sequence > state.activeStep) return;
    if (step.kind === "carry" && (step.partialIndex !== activeStep?.partialIndex || step.sequence > state.activeStep)) return;
    if (step.kind === "addCarry" && ((activeStep?.kind !== "sum" && activeStep?.kind !== "addCarry") || step.sequence > state.activeStep)) return;
    const input = inputForStep(step);
    if (!input) return;
    input.classList.toggle("active", state.mode === "guided" && index === state.activeStep);
    input.disabled = state.mode === "guided" && index > state.activeStep;
    syncConceptChoiceButtons(input);
  });

  const activeInput = activeStep ? inputForStep(activeStep) : null;
  if (state.mode === "guided" && activeInput) {
    highlightActiveContext(activeStep, activeInput);
    activeInput.focus({ preventScroll: true });
  }
}

function highlightActiveContext(step, input) {
  const activeCell = input.closest(".grid-cell");
  activeCell?.classList.add("active-column");

  if (step.kind === "conceptAnswer") {
    input.closest(".concept-card")?.classList.add("active-column");
    return;
  }

  if (step.kind === "equationStep") {
    if (els.grid.classList.contains("system-grid") || els.grid.classList.contains("factoring-grid") || els.grid.classList.contains("quadratic-grid")) {
      els.grid.querySelector(`[data-row="${step.row}"][data-col="2"]`)?.classList.add("active-column");
      els.grid.querySelector(`[data-row="${step.row}"][data-col="3"]`)?.classList.add("active-column");
      els.grid.querySelector(`[data-row="${step.row}"][data-col="4"]`)?.classList.add("active-column");
      return;
    }
    els.grid.querySelector(`[data-row="${step.row}"][data-col="2"]`)?.classList.add("active-column");
    els.grid.querySelector(`[data-row="${step.row}"][data-col="3"]`)?.classList.add("active-column");
    els.grid.querySelector(`[data-row="${step.row}"][data-col="4"]`)?.classList.add("active-column");
    return;
  }

  if (step.kind === "carry" || step.label === "place value zero" || step.kind === "sum" || step.id.includes("-lead")) {
    if (step.kind === "sum") {
      if (step.topCol) {
        els.grid.querySelector(`[data-row="2"][data-col="${step.topCol}"]`)?.classList.add("active-column");
      }
      if (step.bottomCol) {
        els.grid.querySelector(`[data-row="3"][data-col="${step.bottomCol}"]`)?.classList.add("active-column");
      }
      for (const id of step.addendCellIds || []) {
        const addend = els.grid.querySelector(`.digit-input[data-cell-id="${id}"]`);
        addend?.closest(".grid-cell")?.classList.add("active-column");
      }
      if (step.incomingAddCarryId) {
        const carryStep = orderedSteps().find((item) => item.id === step.incomingAddCarryId);
        const carryInput = carryStep ? inputForStep(carryStep) : null;
        carryInput?.closest(".grid-cell")?.classList.add("active-column");
      }
    }
    return;
  }

  if (step.kind === "partial" && step.topCol && step.multiplierCol) {
    els.grid.querySelector(`[data-row="2"][data-col="${step.topCol}"]`)?.classList.add("active-column");
    els.grid.querySelector(`[data-row="3"][data-col="${step.multiplierCol}"]`)?.classList.add("active-column");
    if (step.incomingCarryId) {
      const carryStep = orderedSteps().find((item) => item.id === step.incomingCarryId);
      const carryInput = carryStep ? inputForStep(carryStep) : null;
      carryInput?.closest(".grid-cell")?.classList.add("active-column");
    }
    return;
  }

  if (step.kind === "difference") {
    els.grid.querySelector(`[data-row="2"][data-col="${step.topCol}"]`)?.classList.add("active-column");
    els.grid.querySelector(`[data-row="3"][data-col="${step.bottomCol}"]`)?.classList.add("active-column");
    if (step.borrowId) {
      const borrowStep = orderedSteps().find((item) => item.id === step.borrowId);
      const borrowInput = borrowStep ? inputForStep(borrowStep) : null;
      borrowInput?.closest(".grid-cell")?.classList.add("active-column");
    }
    return;
  }

  if (step.kind?.startsWith("division")) {
    els.grid.querySelector('[data-row="2"][data-col="4"]')?.classList.add("active-column");
    if (step.sourceCol) {
      els.grid.querySelector(`[data-row="2"][data-col="${step.sourceCol}"]`)?.classList.add("active-column");
    }
    for (const id of [step.partialId, step.quotientId, step.productId]) {
      const relatedInput = id ? els.grid.querySelector(`.digit-input[data-cell-id="${id}"]`) : null;
      relatedInput?.closest(".grid-cell")?.classList.add("active-column");
    }
  }
}

function orderedSteps() {
  return [...(state.currentModel?.cells || [])].sort((a, b) => a.sequence - b.sequence);
}

function inputForStep(step) {
  if (step.kind === "carry") {
    return els.grid.querySelector(`.carry-slot-cell[data-slot-kind="multiply"][data-col="${step.col}"] .carry-slot`);
  }
  if (step.kind === "borrow") {
    return els.grid.querySelector(`.grid-cell[data-row="2"][data-col="${step.col}"] .borrow-${step.borrowRole}-input`);
  }
  if (step.kind === "addCarry") {
    return els.grid.querySelector(`.carry-slot-cell[data-slot-kind="add"][data-col="${step.col}"] .carry-slot`);
  }
  return els.grid.querySelector(`.digit-input[data-cell-id="${step.id}"]`);
}

function configureBorrowSlots(activeStep) {
  els.grid.querySelectorAll(".borrow-lent").forEach((cell) => cell.classList.remove("borrow-lent"));
  els.grid.querySelectorAll(".borrow-superscript-input").forEach((input) => {
    input.hidden = true;
    input.disabled = true;
    input.value = "";
    input.maxLength = 1;
    input.classList.remove("active", "correct", "incorrect", "hint");
  });

  if (activeStep?.kind !== "borrow" && activeStep?.kind !== "difference") return;

  const visibleBorrowSteps = [];
  for (const step of orderedSteps()) {
    if (step.kind !== "borrow" || step.sequence > state.activeStep) continue;
    visibleBorrowSteps.push(step);
  }

  for (const step of visibleBorrowSteps) {
    const input = inputForStep(step);
    if (!input) continue;
    input.hidden = false;
    input.disabled = false;
    input.maxLength = Math.max(1, step.expected.length);
    input.dataset.cellId = step.id;
    input.dataset.expected = step.expected;
    input.dataset.hint = step.hint;
    input.dataset.label = step.label;
    input.dataset.sequence = String(step.sequence);
    input.value = state.checkedCells.get(step.id) || "";
    input.classList.toggle("correct", state.checkedCells.has(step.id));
    input.setAttribute("aria-label", step.label);
  }

  const lenderColumns = new Set(
    visibleBorrowSteps
      .filter((step) => step.borrowRole === "lender")
      .map((step) => step.col)
  );
  for (const col of lenderColumns) {
    els.grid.querySelector(`.grid-cell[data-row="2"][data-col="${col}"]`)?.classList.add("borrow-lent");
  }
}

function configureCarrySlots(activeStep) {
  const activePartialIndex = activeStep?.partialIndex;
  els.grid.querySelectorAll('.carry-slot-cell[data-slot-kind="multiply"] .carry-slot').forEach((input) => {
    input.hidden = true;
    input.disabled = true;
    input.value = "";
    input.classList.remove("active", "correct", "incorrect", "hint");
  });

  if (activePartialIndex === null || activePartialIndex === undefined) return;

  for (const step of orderedSteps()) {
    if (step.kind !== "carry" || step.partialIndex !== activePartialIndex || step.sequence > state.activeStep) continue;
    const input = inputForStep(step);
    if (!input) continue;
    input.hidden = false;
    input.disabled = false;
    input.dataset.cellId = step.id;
    input.dataset.expected = step.expected;
    input.dataset.hint = step.hint;
    input.dataset.label = step.label;
    input.dataset.sequence = String(step.sequence);
    input.value = state.checkedCells.get(step.id) || "";
    input.classList.toggle("correct", state.checkedCells.has(step.id));
    input.setAttribute("aria-label", step.label);
  }
}

function configureAdditionCarrySlots(activeStep) {
  els.grid.querySelectorAll('.carry-slot-cell[data-slot-kind="add"] .carry-slot').forEach((input) => {
    input.hidden = true;
    input.disabled = true;
    input.value = "";
    input.classList.remove("active", "correct", "incorrect", "hint");
  });

  if (activeStep?.kind !== "sum" && activeStep?.kind !== "addCarry") return;

  for (const step of orderedSteps()) {
    if (step.kind !== "addCarry" || step.sequence > state.activeStep) continue;
    const input = inputForStep(step);
    if (!input) continue;
    input.hidden = false;
    input.disabled = false;
    input.dataset.cellId = step.id;
    input.dataset.expected = step.expected;
    input.dataset.hint = step.hint;
    input.dataset.label = step.label;
    input.dataset.sequence = String(step.sequence);
    input.value = state.checkedCells.get(step.id) || "";
    input.classList.toggle("correct", state.checkedCells.has(step.id));
    input.setAttribute("aria-label", step.label);
  }
}

function checkCurrentStep() {
  const steps = orderedSteps();
  if (state.mode === "explore") {
    const allCorrect = visibleInputs().every((input) => validateInput(input, true));
    setStatus(allCorrect ? "All visible entries are correct." : "Some entries need another look.", allCorrect ? "correct" : "incorrect");
    return;
  }

  if (isCurrentProblemComplete()) {
    startNextProblem();
    return;
  }

  const activeStep = steps[state.activeStep];
  const focusedInput = document.activeElement?.classList?.contains("digit-input") ? document.activeElement : null;
  const activeInput = visibleInputs().find((item) => item.classList.contains("active"));
  const stepInput = state.mode === "guided" && activeStep ? inputForStep(activeStep) : null;
  const input = focusedInput || activeInput || stepInput || visibleInputs().find((item) => !item.classList.contains("correct"));
  if (!input) {
    setStatus("No active answer is available yet.", "incorrect");
    return;
  }

  if (!input.value.trim()) {
    if (state.autoAdvancedToStep === state.activeStep) {
      input.classList.remove("incorrect");
      if (!input.classList.contains("concept-answer-choice-control")) input.focus({ preventScroll: true });
      setStatus(`Correct. Continue with ${activeStep?.label || input.dataset.label || "the next box"}.`, "correct");
      return;
    }
    setStatus(input.classList.contains("concept-answer-choice-control") ? "Choose an answer." : input.inputMode === "numeric" ? "Try another digit." : "Try another entry.", "incorrect");
    input.classList.add("incorrect");
    if (!input.classList.contains("concept-answer-choice-control")) input.focus({ preventScroll: true });
    return;
  }

  const correct = validateInput(input, true);
  if (correct && input.classList.contains("concept-answer-input")) {
    completeConceptAnswer(input);
    return;
  }
  if (correct && state.mode === "guided") {
    state.activeStep += 1;
    if (state.activeStep >= steps.length) {
      completeLesson();
    } else {
      setActiveStep();
      updateStepText();
    }
  }
}

let lastPointerCheckAt = 0;

function requestStepCheck(event) {
  event?.preventDefault?.();
  event?.stopPropagation?.();
  event?.stopImmediatePropagation?.();
  if (event && event.type !== "keydown") {
    const now = window.performance?.now?.() || Date.now();
    if (now - lastPointerCheckAt < 180) return;
    lastPointerCheckAt = now;
  }
  if (state.showIntro) {
    startCurrentLesson();
    return;
  }
  checkCurrentStep();
}

function handleCommandEvent(event) {
  const checkButton = event.target?.closest?.("#checkStep");
  const conceptAction = event.target?.closest?.(".concept-check-button, .concept-choice-button");
  if (["click", "pointerdown", "mousedown", "mouseup", "touchstart"].includes(event.type) && checkButton) {
    requestStepCheck(event);
    return;
  }
  if (event.type !== "keydown" && event.type !== "keyup") return;
  if ((event.key === "Enter" || event.key === " ") && checkButton) {
    requestStepCheck(event);
    return;
  }
  if (event.key === "Enter" && conceptAction) {
    requestStepCheck(event);
    return;
  }
  if (event.key !== "Enter" || !event.target?.classList?.contains("digit-input")) return;
  event.preventDefault();
  event.stopPropagation();
  event.stopImmediatePropagation();
  requestStepCheck(event);
}

function handleAnswerKeydown(event) {
  if (event.key !== "Enter") return;
  event.preventDefault();
  event.stopPropagation();
  event.stopImmediatePropagation();
  requestStepCheck(event);
}

document.addEventListener("carry-check-command", () => requestStepCheck());
document.addEventListener("carry-answer-return-command", runReturnCommand);
document.addEventListener("carry-concept-input-command", (event) => {
  const input = event.detail;
  if (!input?.classList?.contains("digit-input")) return;
  input.value = normalizeAnswerInput(input.value);
  if (state.mode === "guided") setStatus("Enter the answer, then check it.", "");
  if (state.mode === "explore") markExploreInput(input);
});

function runReturnCommand() {
  requestStepCheck();
}

function shouldAutoAdvance(input) {
  return state.mode === "guided" && els.autoAdvance.checked && input.classList.contains("active") && input.value.length >= Number(input.maxLength || 1);
}

function autoAdvanceCurrentStep() {
  const previousStep = state.activeStep;
  checkCurrentStep();
  state.autoAdvancedToStep = state.activeStep > previousStep && !isCurrentProblemComplete() ? state.activeStep : null;
}

function handleDigitBeforeInput(event) {
  if (event.inputType !== "insertText" || !/^\d$/.test(event.data || "")) return;
  event.preventDefault();
  insertDigit(event.target, event.data);
}

function handleDigitKeydown(event) {
  if (/^\d$/.test(event.key)) {
    event.preventDefault();
    insertDigit(event.target, event.key);
    return;
  }
  if (event.key === "Enter") {
    event.preventDefault();
    event.stopPropagation();
    requestStepCheck(event);
  }
}

function insertDigit(input, digit) {
  const maxLength = Number(input.maxLength || 1);
  const selected = input.selectionStart !== input.selectionEnd;
  if (maxLength > 1 && !selected && input.value.length < maxLength) {
    input.value += digit;
  } else {
    input.value = digit;
  }
  input.setSelectionRange(input.value.length, input.value.length);
  input.dispatchEvent(new Event("input", { bubbles: true }));
}

function normalizeDigitInput(input) {
  return input.value.replace(/\D/g, "").slice(0, Number(input.maxLength || 1));
}

function validateInput(input, announce) {
  const correct = isCorrectAnswer(input);
  input.classList.toggle("correct", correct);
  input.classList.toggle("incorrect", input.value.length > 0 && !correct);
  syncConceptChoiceButtons(input);
  if (input.classList.contains("concept-answer-input")) {
    setConceptInlineHint(input, correct || !input.value.trim() ? "" : feedbackForInput(input));
  }
  if (correct) {
    state.checkedCells.set(input.dataset.cellId, input.value);
  } else {
    state.checkedCells.delete(input.dataset.cellId);
  }
  if (announce) {
    setStatus(correct ? successForInput(input) : feedbackForInput(input), correct ? "correct" : "incorrect");
  }
  updatePrimaryAction();
  return correct;
}

const ANSWER_NORMALIZE_LIMIT = 160;
const ANSWER_CACHE_LIMIT = 1200;
const answerValueCache = new Map();
const answerVariantCache = new Map();

function validateGuidedConceptInput(input) {
  if (!input.value.trim()) {
    input.classList.remove("correct", "incorrect", "hint");
    setConceptInlineHint(input, "");
    syncConceptChoiceButtons(input);
    setStatus(input.classList.contains("concept-answer-choice-control") ? "Choose an answer, then check it." : "Enter the answer, then check it.", "");
    return;
  }

  const correct = validateInput(input, false);
  if (!correct) {
    const feedback = feedbackForInput(input);
    setConceptInlineHint(input, feedback);
    setStatus(feedback, "incorrect");
    updatePrimaryAction();
    return;
  }

  completeConceptAnswer(input);
}

function completeConceptAnswer(input) {
  state.activeStep = orderedSteps().length;
  completeLesson();
  input.disabled = true;
  setConceptInlineHint(input, "");
  syncConceptChoiceButtons(input);
  setStatus(`${successForInput(input)} Continue to the next problem.`, "complete");
  updatePrimaryAction();
}

function setConceptInlineHint(input, text) {
  const hint = input.closest(".concept-card")?.querySelector(".concept-inline-hint");
  if (!hint) return;
  const cleanText = String(text || "").trim();
  hint.hidden = !cleanText;
  if (cleanText) {
    setMathText(hint, cleanText);
  } else {
    hint.textContent = "";
  }
}

function feedbackForInput(input) {
  if (input.classList.contains("concept-answer-choice-control")) {
    const selected = selectedChoiceLabel(input);
    const feedback = input.dataset.feedback
      ? stripMathTags(input.dataset.feedback)
      : input.dataset.hint
        ? stripMathTags(input.dataset.hint)
        : "Use the main idea from the lesson, then compare the choices again.";
    return selected ? `Not quite. You chose ${selected}. ${feedback}` : feedback;
  }
  if (input.dataset.feedback) return input.dataset.feedback;
  const label = answerValue(input.dataset.label);
  const hint = input.dataset.hint;

  if (label.includes("fraction")) return "Check whether the fraction should be simplified or whether the numerator and denominator were changed by the same factor.";
  if (label.includes("decimal")) return "Check decimal place value and line up the decimal points.";
  if (label.includes("percent")) return "Convert the percent to a fraction or decimal first.";
  if (label.includes("ratio")) return "Scale both parts of the ratio by the same factor.";
  if (label.includes("integer") || label.includes("sign")) return "Check the sign first, then check the arithmetic.";
  if (label.includes("coordinate") || label.includes("quadrant")) return "Check x first, then y. Right is positive x; up is positive y.";
  if (label.includes("equation") || label.includes("solution")) return "Check that the same operation was applied to both sides.";
  if (label.includes("inequality")) return "Check the comparison sign, especially if a negative multiplier or divisor was used.";
  if (label.includes("factor")) return "Multiply your factors back out to check the original expression.";
  if (label.includes("degree") || label.includes("polynomial")) return "Match variable powers carefully before combining or naming the degree.";
  if (hint) return `Not yet. ${stripMathTags(hint)}`;
  return input.inputMode === "numeric" ? "Try another digit." : "Try another entry.";
}

function successForInput(input) {
  if (!input.classList.contains("concept-answer-choice-control")) return "Correct. Continue to the next box.";
  if (input.dataset.feedback) return `Correct. ${stripMathTags(input.dataset.feedback)}`;
  if (input.dataset.hint) return `Correct. ${stripMathTags(input.dataset.hint)}`;
  const selected = selectedChoiceLabel(input);
  return selected ? `Correct. ${selected} is the matching choice.` : "Correct. That choice matches the idea.";
}

function selectedChoiceLabel(input) {
  const card = input.closest(".concept-card");
  const value = answerValue(input.value);
  const selected = Array.from(card?.querySelectorAll(".concept-choice-button") || [])
    .find((button) => answerValue(button.dataset.choiceValue) === value);
  return selected?.querySelector(".concept-choice-label")?.textContent?.trim() || selected?.textContent?.trim() || input.value;
}

function isCorrectAnswer(input) {
  if (input.classList.contains("concept-answer-choice-control")) {
    let correctChoices = [];
    try {
      correctChoices = JSON.parse(input.dataset.correctChoices || "[]");
    } catch {
      correctChoices = [];
    }
    return correctChoices.map(String).includes(String(input.value));
  }
  const answers = acceptedAnswersForInput(input);
  const userValue = answerValue(input.value);
  if (answers.some((answer) => answerValue(answer) === userValue)) return true;
  const userValues = answerVariants(input.value);
  return answers.some((answer) => {
    const acceptedValues = answerVariants(answer);
    return acceptedValues.some((accepted) => userValues.has(accepted));
  });
}

function answerValue(value) {
  const key = String(value || "").slice(0, ANSWER_NORMALIZE_LIMIT);
  if (answerValueCache.has(key)) return answerValueCache.get(key);
  const normalized = key
    .replace(/<\/?math>/g, "")
    .trim()
    .toLowerCase()
    .replace(/[−–—]/g, "-")
    .replace(/π/g, "pi")
    .replace(/θ/g, "theta")
    .replace(/²/g, "^2")
    .replace(/³/g, "^3")
    .replace(/×/g, "*")
    .replace(/·/g, "*")
    .replace(/\bdegrees?\b|\bdeg\b|°/g, "")
    .replace(/\s+/g, "");
  if (answerValueCache.size > ANSWER_CACHE_LIMIT) answerValueCache.clear();
  answerValueCache.set(key, normalized);
  return normalized;
}

function acceptedAnswersForInput(input) {
  const cacheKey = [
    input.dataset.answers || "",
    input.dataset.expected || "",
    input.dataset.label || "",
    input.dataset.prompt || ""
  ].join("\n");
  if (input.__carryAcceptedAnswersKey === cacheKey && input.__carryAcceptedAnswers) {
    return input.__carryAcceptedAnswers;
  }

  let explicit = [input.dataset.expected];
  if (input.dataset.answers) {
    try {
      explicit = JSON.parse(input.dataset.answers);
    } catch {
      explicit = [input.dataset.expected];
    }
  }
  const answers = new Set(explicit.map(String));
  const expected = answerValue(input.dataset.expected);
  const label = answerValue(input.dataset.label);
  const prompt = answerValue(input.dataset.prompt);

  for (const alias of semanticAnswerAliases(expected, label, prompt)) {
    answers.add(alias);
  }

  const accepted = [...answers].slice(0, 40).map((answer) => String(answer).slice(0, ANSWER_NORMALIZE_LIMIT));
  input.__carryAcceptedAnswersKey = cacheKey;
  input.__carryAcceptedAnswers = accepted;
  return accepted;
}

function semanticAnswerAliases(expected, label, prompt) {
  const aliases = [];

  if (expected === "0") aliases.push("zero");
  if (expected === "1") aliases.push("one");
  if (expected === "2") aliases.push("two");
  if (expected === "3") aliases.push("three");
  if (expected === "4") aliases.push("four");
  if (expected === "5") aliases.push("five");
  if (expected === "6") aliases.push("six");
  if (expected === "7") aliases.push("seven");
  if (expected === "8") aliases.push("eight");
  if (expected === "9") aliases.push("nine");

  if (["yes", "true"].includes(expected)) aliases.push("y", "true", "yes");
  if (["no", "false"].includes(expected)) aliases.push("n", "false", "no");

  if (expected === "0" && label.includes("identity")) aliases.push("identity", "additive identity", "zero element");
  if (expected === "1" && label.includes("identity")) aliases.push("identity", "multiplicative identity", "one element");
  if (expected === "-5" && label.includes("inverse")) aliases.push("negative 5", "opposite of 5", "additive inverse");
  if (expected === "closure") aliases.push("closed", "closure property");
  if (expected === "associative") aliases.push("associativity", "associative property");
  if (expected === "commutative") aliases.push("commutativity", "commutative property");
  if (expected === "distributive" || expected === "distributivity") aliases.push("distributes", "distributive property", "distributivity");
  if (expected === "counterexample") aliases.push("counter example", "counter-example");
  if (expected === "forall") aliases.push("for every", "universal", "universal quantifier");
  if (expected === "exists") aliases.push("existential", "existential quantifier", "at least one");
  if (expected === "p" && prompt.includes("notp")) aliases.push("p is true", "p true", "the claim");

  return aliases;
}

function answerVariants(value) {
  const compact = answerValue(value);
  if (answerVariantCache.has(compact)) return new Set(answerVariantCache.get(compact));
  const loose = compact
    .replace(/\btimes\b/g, "*")
    .replace(/\bplus\b/g, "+")
    .replace(/\bminus\b/g, "-")
    .replace(/\bby\b/g, "x")
    .replace(/[()[\]{}.,:_\s]/g, "")
    .replace(/\*/g, "")
    .replace(/\+/g, "plus")
    .replace(/\//g, "over")
    .replace(/\^/g, "")
    .replace(/\bthe\b|\ba\b|\ban\b/g, "")
    .replace(/property/g, "");

  const variants = new Set([compact, loose]);
  if (compact.startsWith("+")) variants.add(compact.slice(1));
  if (/^\((-?\d+),(-?\d+)\)$/.test(compact)) variants.add(compact.slice(1, -1));
  if (/^-?\d+\/-?\d+$/.test(compact)) {
    const [numerator, denominator] = compact.split("/").map(Number);
    if (denominator !== 0) variants.add(String(numerator / denominator));
  }
  if (answerVariantCache.size > ANSWER_CACHE_LIMIT) answerVariantCache.clear();
  answerVariantCache.set(compact, [...variants]);
  return variants;
}

function normalizeAnswerInput(value) {
  return String(value || "").replace(/\s+/g, " ").slice(0, 48);
}

function markExploreInput(input) {
  input.classList.remove("correct", "incorrect", "hint");
  syncConceptChoiceButtons(input);
}

function showHint() {
  const steps = orderedSteps();
  const target = state.mode === "guided"
    ? inputForStep(steps[state.activeStep])
    : document.activeElement?.classList?.contains("digit-input")
      ? document.activeElement
      : visibleInputs().find((input) => !input.classList.contains("correct"));

  if (!target) return;
  target.classList.add("hint");
  setStatus(target.dataset.hint, "hint");
  saveProgress("Used a hint");
}

function completeLesson() {
  const id = getActiveWorkspace().id;
  if (!state.progress.completedLessons.includes(id)) {
    state.progress.completedLessons.push(id);
  }
  visibleInputs().forEach((input) => {
    input.classList.remove("active");
    input.disabled = false;
    syncConceptChoiceButtons(input);
  });
  els.grid.querySelectorAll(".carry-slot").forEach((input) => {
    input.classList.remove("active");
    input.disabled = false;
  });
  els.grid.querySelectorAll(".active-column").forEach((cell) => cell.classList.remove("active-column"));
  setStatus(
    isLastProblemInSet()
      ? "All questions in this lesson are complete. Restart from the first question when ready."
      : "Lesson complete. Continue to the next problem.",
    "complete"
  );
  saveProgress(`Completed ${getActiveWorkspace().title.toLowerCase()}`);
  updatePrimaryAction();
  updateStepText();
}

function updateStepText() {
  const steps = orderedSteps();
  const target = steps[state.activeStep];
  if (!target) {
    els.stepText.textContent = isLastProblemInSet()
      ? "All questions in this lesson are complete."
      : "The lesson is complete.";
    return;
  }
  if (state.mode === "guided") {
    els.stepText.textContent = target.label;
  } else if (state.mode === "practice") {
    els.stepText.textContent = "Fill the boxes. Feedback appears as you work.";
  } else {
    els.stepText.textContent = "Use the workspace freely, then check all entries.";
  }
}

function setStatus(text, variant) {
  setMathText(els.status, text);
  els.status.className = `activity-status ${variant || ""}`.trim();
}

function drawOverlays() {
  const shell = document.querySelector(".activity-grid-shell");
  const rect = shell.getBoundingClientRect();
  els.overlay.setAttribute("viewBox", `0 0 ${Math.max(rect.width, 420)} ${Math.max(rect.height, 1)}`);
  els.overlay.innerHTML = "";
}

function bindEvents() {
  refreshCheckButton();

  els.topicList.addEventListener("click", (event) => {
    const button = event.target.closest(".lesson-nav-button");
    if (!button) return;
    state.activeTopic = button.dataset.topic;
    state.activeWorkspaceId = button.dataset.workspaceId;
    state.activeStep = 0;
    state.showIntro = workspaceRegistry[state.activeWorkspaceId]?.status !== "planned";
    state.selectedProblemIndex = 0;
    renderTopics();
    renderWorkspace();
    updateUrlFromState();
    saveProgress(`Opened ${button.textContent}`);
  });

  els.learnSurface.addEventListener("click", () => setSurface("learn"));
  els.physicsSurface.addEventListener("click", () => setSurface("physics"));
  els.toolsSurface.addEventListener("click", () => setSurface("tools"));
  els.gamesSurface.addEventListener("click", () => setSurface("games"));
  els.explorationsSurface.addEventListener("click", () => setSurface("explorations"));
  els.scratchpadSurface.addEventListener("click", () => setSurface("scratchpad"));
  els.explorationList?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-exploration-id]");
    if (!button) return;
    state.activeExplorationId = button.dataset.explorationId;
    renderExplorations();
    updateUrlFromState();
  });
  document.querySelectorAll("[data-scratchpad-surface]").forEach((button) => {
    button.addEventListener("click", () => {
      button.closest(".scratchpad-drawer")?.removeAttribute("open");
      setSurface(button.dataset.scratchpadSurface);
    });
  });
  els.toolTabs.forEach((tab) => {
    tab.addEventListener("click", () => setActiveTool(tab.dataset.tool));
  });
  els.gameTabs.forEach((tab) => {
    tab.addEventListener("click", () => setActiveGame(tab.dataset.game));
  });

  els.modeTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      if (tab.hidden) return;
      state.mode = tab.dataset.mode;
      state.activeStep = 0;
      els.modeTabs.forEach((item) => {
        item.setAttribute("aria-selected", item === tab ? "true" : "false");
      });
      renderWorkspace();
      saveProgress(`Switched to ${tab.textContent} mode`);
      setStatus(modeStatus(state.mode), "");
    });
  });

  document.addEventListener("click", handleCommandEvent, true);
  document.addEventListener("pointerdown", handleCommandEvent, true);
  document.addEventListener("mousedown", handleCommandEvent, true);
  document.addEventListener("mouseup", handleCommandEvent, true);
  document.addEventListener("touchstart", handleCommandEvent, true);
  document.addEventListener("keydown", handleCommandEvent, true);
  document.addEventListener("keydown", handleScratchpadShortcut, true);
  els.checkStep.addEventListener("pointerdown", requestStepCheck);
  els.checkStep.addEventListener("mousedown", requestStepCheck);
  els.checkStep.addEventListener("mouseup", requestStepCheck);
  els.checkStep.addEventListener("touchstart", requestStepCheck);
  els.checkStep.addEventListener("click", requestStepCheck);
  els.checkStep.onpointerdown = requestStepCheck;
  els.checkStep.onmousedown = requestStepCheck;
  els.checkStep.onmouseup = requestStepCheck;
  els.checkStep.onclick = requestStepCheck;
  els.checkStep.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      requestStepCheck(event);
    }
  });
  els.hintStep.addEventListener("click", showHint);
  els.startLesson.addEventListener("click", startCurrentLesson);
  els.autoAdvance.addEventListener("change", () => {
    saveProgress("Changed status settings");
    setStatus(els.autoAdvance.checked ? "Auto-advance is on." : "Auto-advance is off.", "");
  });
  els.newProblem.addEventListener("click", () => {
    startNextProblem();
  });
  els.problemForm.addEventListener("submit", (event) => {
    event.preventDefault();
    applyCustomProblem();
  });
  els.randomProblem.addEventListener("click", () => {
    state.customProblems[state.activeWorkspaceId] = randomProblemForWorkspace(state.activeWorkspaceId);
    state.activeStep = 0;
    state.showIntro = false;
    renderWorkspace();
    saveProgress("Started a random problem");
  });
  els.exportProgress.addEventListener("click", exportProgress);
  els.importProgress.addEventListener("change", importProgress);
  els.scratchpadInput.addEventListener("input", handleScratchpadInput);
  els.scratchpadInput.addEventListener("keydown", handleScratchpadKeydown);
  els.duplicateScratchLine?.addEventListener("click", duplicateScratchpadLine);
  els.duplicateScratchLineHeader?.addEventListener("click", duplicateScratchpadLine);
  if (els.duplicateScratchHint) {
    const isApplePlatform = /Mac|iPhone|iPad|iPod/.test(navigator.platform || navigator.userAgent);
    els.duplicateScratchHint.textContent = isApplePlatform ? "⌘⏎" : "Ctrl+⏎";
  }
  els.scratchpadPlainView.addEventListener("click", () => setScratchpadView("plain"));
  els.scratchpadRenderedView.addEventListener("click", () => setScratchpadView("rendered"));
  els.scratchpadLineNumbers.addEventListener("change", () => setScratchpadLineNumbers(els.scratchpadLineNumbers.checked));
  els.newScratchpad.addEventListener("click", createScratchpad);
  els.renameScratchpad.addEventListener("click", renameScratchpad);
  els.copyScratchPlain.addEventListener("click", () => copyScratchpad("plain"));
  els.copyScratchLatex.addEventListener("click", () => copyScratchpad("latex"));
  els.copyScratchMarkdown.addEventListener("click", () => copyScratchpad("markdown"));
  els.exportScratchImage.addEventListener("click", exportScratchpadImage);
  els.exportScratchPng?.addEventListener("click", exportScratchpadPng);
  els.shareScratchImage.addEventListener("click", shareScratchpadImage);
  document.querySelectorAll("[data-grapher-tool]").forEach((button) => {
    button.addEventListener("click", () => {
      button.closest(".scratchpad-drawer")?.removeAttribute("open");
      setActiveTool(button.dataset.grapherTool);
    });
  });
  els.exportScratchLatex.addEventListener("click", exportScratchpadLatex);
  els.importScratchLatex.addEventListener("change", importScratchpadLatex);
  els.sudokuBoard.addEventListener("click", (event) => {
    const cell = event.target.closest(".sudoku-cell");
    if (!cell) return;
    selectSudokuCell(Number.parseInt(cell.dataset.index, 10));
  });
  els.sudokuPad.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-sudoku-value]");
    if (!button) return;
    setSudokuValue(button.dataset.sudokuValue);
  });
  els.sudokuSize.addEventListener("change", () => {
    updateSudokuSettings({
      size: Number.parseInt(els.sudokuSize.value, 10),
      difficulty: state.games.sudoku.difficulty,
      seed: 0,
      entries: {},
      selected: null
    }, "Changed Sudoku size");
  });
  els.sudokuDifficulty.addEventListener("change", () => {
    updateSudokuSettings({
      size: state.games.sudoku.size,
      difficulty: els.sudokuDifficulty.value,
      seed: 0,
      entries: {},
      selected: null
    }, "Changed Sudoku difficulty");
  });
  els.newSudoku.addEventListener("click", newSudoku);
  els.checkSudoku.addEventListener("click", checkSudoku);
  els.clearSudoku.addEventListener("click", clearSudoku);
  els.generateRandomNumber.addEventListener("click", generateRandomNumber);
  els.randomNumberMin.addEventListener("change", updateRandomNumberSettings);
  els.randomNumberMax.addEventListener("change", updateRandomNumberSettings);
  els.randomNumberDecimals.addEventListener("change", updateRandomNumberSettings);
  els.randomNumberPlaces.addEventListener("change", updateRandomNumberSettings);
  els.randomNumberAutoCopy.addEventListener("change", updateRandomNumberSettings);
  els.copyRandomNumber.addEventListener("click", copyRandomNumber);
  els.normalMin.addEventListener("change", updateNormalSettings);
  els.normalMax.addEventListener("change", updateNormalSettings);
  els.normalSampleSize.addEventListener("change", updateNormalSettings);
  els.normalTrials.addEventListener("change", updateNormalSettings);
  els.runNormalSimulation.addEventListener("click", runNormalSimulation);
  els.unitCircleAngle.addEventListener("change", () => {
    state.tools.unitCircle.angle = els.unitCircleAngle.value;
    saveTools("Changed Unit Circle angle");
    renderUnitCircle();
  });
  els.unitCircleFigure.addEventListener("pointerdown", startUnitCircleDrag);
  els.unitCircleFigure.addEventListener("pointermove", dragUnitCircle);
  els.unitCircleFigure.addEventListener("pointerup", endUnitCircleDrag);
  els.unitCircleFigure.addEventListener("pointercancel", endUnitCircleDrag);
  els.unitCircleFigure.addEventListener("lostpointercapture", () => {
    unitCircleDragState.dragging = false;
  });
  els.complexRadius.addEventListener("change", () => {
    state.tools.complexPlane.radius = Math.max(0, Number(els.complexRadius.value) || 1);
    saveTools("Changed Complex Plane radius");
    renderComplexPlane();
  });
  els.complexAngle.addEventListener("change", () => {
    state.tools.complexPlane.angle = els.complexAngle.value;
    saveTools("Changed Complex Plane angle");
    renderComplexPlane();
  });
  els.graphMode.addEventListener("change", () => updateGraphingSettings("Changed Graphing mode"));
  els.graphEquation2d.addEventListener("change", () => updateGraphingSettings("Changed 2D graph"));
  els.graphEquation3d.addEventListener("change", () => updateGraphingSettings("Changed 3D graph"));
  els.graphRange.addEventListener("change", () => updateGraphingSettings("Changed Graphing window"));
  els.graphDraw.addEventListener("click", () => updateGraphingSettings("Graphed equation"));
  els.graphReset.addEventListener("click", resetGraphView);
  els.graph2dSvg.addEventListener("pointerdown", startGraphDrag);
  els.graph2dSvg.addEventListener("pointermove", dragGraphView);
  els.graph2dSvg.addEventListener("pointerup", endGraphDrag);
  els.graph2dSvg.addEventListener("pointercancel", endGraphDrag);
  els.graph2dSvg.addEventListener("lostpointercapture", endGraphDrag);
  els.graph2dSvg.addEventListener("wheel", zoomGraphView, { passive: false });
  els.graph2dSvg.addEventListener("dblclick", resetGraphView);
  els.graph3dCanvas.addEventListener("pointerdown", startGraphDrag);
  els.graph3dCanvas.addEventListener("pointermove", dragGraphView);
  els.graph3dCanvas.addEventListener("pointerup", endGraphDrag);
  els.graph3dCanvas.addEventListener("pointercancel", endGraphDrag);
  els.graph3dCanvas.addEventListener("lostpointercapture", endGraphDrag);
  els.graph3dCanvas.addEventListener("wheel", zoomGraphView, { passive: false });
  els.graph3dCanvas.addEventListener("dblclick", resetGraphView);
  els.calculateFactors.addEventListener("click", () => updateNumberTheoryTools("factors"));
  els.calculateGcd.addEventListener("click", () => updateNumberTheoryTools("gcd"));
  els.modClockDial.addEventListener("click", (event) => {
    const button = event.target.closest(".mod-clock-node");
    if (!button) return;
    selectModClockValue(Number.parseInt(button.dataset.modValue, 10));
  });
  els.modClockDifficulty.addEventListener("change", () => {
    state.games.modClock.difficulty = els.modClockDifficulty.value;
    state.games.modClock.seed = 0;
    state.games.modClock.selected = null;
    state.games.modClock.checked = false;
    state.games.modClock.pendingDigits = "";
    saveGames("Changed Mod Clock difficulty");
    renderModClock();
  });
  els.newModClock.addEventListener("click", newModClock);
  els.checkModClock.addEventListener("click", checkModClock);
  els.numberGamePanels.forEach((panel) => {
    panel.addEventListener("click", (event) => {
      const choice = event.target.closest("button[data-number-value]");
      if (choice) {
        toggleNumberGameChoice(choice.dataset.numberGame, choice.dataset.numberValue);
        return;
      }
      const check = event.target.closest("button[data-number-check]");
      if (check) {
        checkNumberGame(check.dataset.numberCheck);
        return;
      }
      const next = event.target.closest("button[data-number-new]");
      if (next) {
        newNumberGame(next.dataset.numberNew);
      }
    });
  });
  Object.entries(els.numberGameDifficulties).forEach(([game, select]) => {
    select.addEventListener("change", () => setNumberGameDifficulty(game, select.value));
  });
  els.scratchpadToolbar.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-insert]");
    if (!button) return;
    insertScratchpadText(button.dataset.insert);
  });
  els.scratchpadList.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-scratchpad-id]");
    if (!button) return;
    switchScratchpad(button.dataset.scratchpadId);
  });
  window.addEventListener("resize", drawOverlays);
  document.addEventListener("keydown", handlePageKeydown);
  window.addEventListener("popstate", () => applyRouteState(resolveRouteFromPath()));
}

function refreshCheckButton() {
  const replacement = els.checkStep.cloneNode(true);
  els.checkStep.replaceWith(replacement);
  els.checkStep = replacement;
}

function configureModeTabs(workspace) {
  const availableModes = modesForWorkspace(workspace);
  if (!availableModes.includes(state.mode)) {
    state.mode = availableModes[0];
  }

  els.modeTabs.forEach((tab) => {
    const available = availableModes.includes(tab.dataset.mode);
    tab.hidden = !available;
    tab.setAttribute("aria-selected", tab.dataset.mode === state.mode ? "true" : "false");
  });
}

function modesForWorkspace(workspace) {
  if (workspace.status === "planned") return ["guided"];
  if (workspace.type === "concept") return ["guided", "practice"];
  return ["guided", "practice", "explore"];
}

function startCurrentLesson() {
  if (!state.showIntro) return;
  state.showIntro = false;
  state.activeStep = 0;
  renderWorkspace();
  saveProgress(`Started ${getActiveWorkspace().title.toLowerCase()}`);
}

function handlePageKeydown(event) {
  if (event.defaultPrevented) return;
  if (handleToolsKeydown(event)) return;
  if (handleSudokuKeydown(event)) return;
  if (handleConceptChoiceKeydown(event)) return;
  if (event.key === "Enter") {
    if (isFormControl(event.target) && !event.target.classList?.contains("digit-input")) return;
    event.preventDefault();
    requestStepCheck(event);
    return;
  }
  if (isFormControl(event.target) || !/^\d$/.test(event.key)) return;
  const activeInput = els.grid.querySelector(".digit-input.active");
  if (!activeInput) return;
  event.preventDefault();
  activeInput.focus();
  insertDigit(activeInput, event.key);
}

function handleConceptChoiceKeydown(event) {
  if (state.showIntro || !/^[1-9]$/.test(event.key)) return false;
  const card = els.grid.querySelector(".concept-card");
  if (!card) return false;
  if (
    isFormControl(event.target)
    && !event.target.closest?.(".concept-choice-grid")
    && !event.target.classList?.contains("concept-answer-choice-control")
  ) {
    return false;
  }

  const input = card.querySelector(".concept-answer-choice-control");
  if (!input || input.disabled) return false;

  const choices = Array.from(card.querySelectorAll(".concept-choice-button"));
  const choice = choices[Number(event.key) - 1];
  if (!choice) return false;

  event.preventDefault();
  selectConceptChoice(input, choice.dataset.choiceValue);
  choice.focus();
  return true;
}

function handleToolsKeydown(event) {
  if (state.activeSurface !== "tools" || event.key !== "Enter") return false;
  event.preventDefault();
  if (state.tools.activeTool === "random-number") {
    if (isFormControl(event.target)) updateRandomNumberSettings();
    generateRandomNumber();
    return true;
  }
  if (state.tools.activeTool === "normal-simulator") {
    runNormalSimulation();
    return true;
  }
  if (state.tools.activeTool === "graphing") {
    updateGraphingSettings("Graphed equation");
    return true;
  }
  if (state.tools.activeTool === "number-theory") {
    updateNumberTheoryTools(event.target === els.gcdLeft || event.target === els.gcdRight ? "gcd" : "factors");
    return true;
  }
  return false;
}

function isFormControl(target) {
  return target.closest?.("input, button, label, textarea, select, [role='button'], [role='tab']");
}

function applyCustomProblem() {
  const workspace = getActiveWorkspace();
  const top = Number.parseInt(els.topNumber.value, 10);
  const bottom = Number.parseInt(els.bottomNumber.value, 10);
  if (!isValidProblemNumber(top) || !isValidProblemNumber(bottom)) {
    setStatus("Use whole numbers from 0 to 999.", "incorrect");
    return;
  }
  if (workspace.type === "subtraction" && top < bottom) {
    setStatus("Use a top number at least as large as the bottom number. Signed subtraction can come later.", "incorrect");
    return;
  }
  if (workspace.id === divisionWorkspace.id && isDivisionRemainderRedirect(top, bottom)) {
    state.activeWorkspaceId = divisionRemainderWorkspace.id;
    state.customProblems[divisionRemainderWorkspace.id] = { top, bottom };
    state.activeStep = 0;
    state.showIntro = false;
    renderTopics();
    renderWorkspace();
    updateUrlFromState();
    saveProgress("Moved to long division with remainders");
    return;
  }
  if (workspace.type === "division" && !isValidDivisionProblem(top, bottom, workspace.allowsRemainder)) {
    setStatus(divisionGuardrailMessage(workspace), "incorrect");
    return;
  }

  state.customProblems[state.activeWorkspaceId] = { top, bottom };
  state.activeStep = 0;
  state.showIntro = false;
  renderWorkspace();
  saveProgress("Started a custom problem");
}

function isValidProblemNumber(value) {
  return Number.isInteger(value) && value >= 0 && value <= 999;
}

function problemSetForWorkspace(workspaceId) {
  if (workspaceId === additionWorkspace.id) return additionProblemSet;
  if (workspaceId === subtractionWorkspace.id) return subtractionProblemSet;
  if (workspaceId === multiplicationWorkspace.id) return multiplicationProblemSet;
  if (workspaceId === divisionWorkspace.id) return divisionProblemSet;
  if (workspaceId === divisionRemainderWorkspace.id) return divisionRemainderProblemSet;
  if (conceptWorkspaces[workspaceId]) return conceptWorkspaces[workspaceId].problems;
  return additionProblemSet;
}

function randomProblemForWorkspace(workspaceId) {
  if (workspaceId === divisionWorkspace.id) return randomDivisionProblem(false);
  if (workspaceId === divisionRemainderWorkspace.id) return randomDivisionProblem(true);
  if (conceptWorkspaces[workspaceId]) {
    const set = conceptWorkspaces[workspaceId].problems;
    return set[Math.floor(Math.random() * set.length)];
  }
  const top = randomThreeDigit();
  const bottom = randomThreeDigit();
  if (workspaceId === subtractionWorkspace.id) {
    return {
      top: Math.max(top, bottom),
      bottom: Math.min(top, bottom)
    };
  }
  return { top, bottom };
}

function startNextProblem() {
  const setLength = problemSetForWorkspace(state.activeWorkspaceId).length;
  const restarting = isLastProblemInSet();
  state.selectedProblemIndex = (state.selectedProblemIndex + 1) % setLength;
  delete state.customProblems[state.activeWorkspaceId];
  state.activeTopic = getActiveWorkspace().topic || state.activeTopic;
  state.activeStep = 0;
  state.showIntro = false;
  renderTopics();
  renderWorkspace();
  saveProgress(restarting ? "Restarted lesson questions" : "Started a new problem");
}

function isCurrentProblemComplete() {
  const steps = orderedSteps();
  return steps.length > 0 && state.activeStep >= steps.length;
}

function isLastProblemInSet() {
  if (state.customProblems[state.activeWorkspaceId]) return false;
  const setLength = problemSetForWorkspace(state.activeWorkspaceId).length;
  if (!setLength) return false;
  return state.selectedProblemIndex % setLength === setLength - 1;
}

function randomThreeDigit() {
  return Math.floor(Math.random() * 900) + 100;
}

function isValidDivisionProblem(dividend, divisor, allowsRemainder) {
  const quotient = Math.floor(dividend / divisor);
  const remainder = dividend % divisor;
  return isValidDivisionShape(dividend, divisor)
    && quotient >= 10
    && (allowsRemainder ? remainder > 0 : remainder === 0);
}

function isValidDivisionShape(dividend, divisor) {
  return Number.isInteger(dividend)
    && Number.isInteger(divisor)
    && dividend >= 10
    && dividend <= 999
    && divisor >= 2
    && divisor <= 99;
}

function isDivisionRemainderRedirect(dividend, divisor) {
  return isValidDivisionShape(dividend, divisor)
    && Math.floor(dividend / divisor) >= 10
    && dividend % divisor > 0;
}

function randomDivisionProblem(allowsRemainder) {
  const divisor = Math.floor(Math.random() * 23) + 2;
  const maxQuotient = Math.floor(999 / divisor);
  const minQuotient = Math.ceil(100 / divisor);
  const quotientFloor = Math.max(10, minQuotient);
  const quotient = Math.floor(Math.random() * (maxQuotient - quotientFloor + 1)) + quotientFloor;
  const remainder = allowsRemainder ? Math.floor(Math.random() * (divisor - 1)) + 1 : 0;
  return { top: divisor * quotient + remainder, bottom: divisor };
}

function divisionGuardrailMessage(workspace) {
  return workspace.allowsRemainder
    ? "Use a 2- or 3-digit dividend and a 1- or 2-digit divisor from 2 to 99 with a nonzero remainder."
    : "Use a 2- or 3-digit dividend and a 1- or 2-digit divisor from 2 to 99 with no remainder.";
}

function modeStatus(mode) {
  if (mode === "guided") return "Guided mode shows one next action.";
  if (mode === "practice") return "Practice mode checks entries as you work.";
  return "Explore mode lets you try freely before checking.";
}

function exportProgress() {
  saveProgress("Exported progress");
  const payload = createBackupPayload();
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "carry-backup.json";
  anchor.click();
  URL.revokeObjectURL(url);
  setStatus("Backup exported: progress, scratchpads, games, and tools.", "correct");
}

function createBackupPayload() {
  return {
    format: "carry-backup",
    version: 1,
    appVersion: APP_VERSION,
    exportedAt: new Date().toISOString(),
    progress: state.progress,
    scratchpads: state.scratchpads,
    games: state.games,
    tools: state.tools
  };
}

function applyImportedData(imported) {
  const isBackup = imported?.format === "carry-backup";
  const progressData = isBackup ? imported.progress : imported;
  if (!progressData || progressData.version !== 1) throw new Error("Unsupported progress file.");

  if (isBackup) {
    if (imported.scratchpads?.scratchpads?.length) {
      state.scratchpads = { ...imported.scratchpads, activeSurface: state.scratchpads.activeSurface };
      saveScratchpads();
    }
    if (imported.games) {
      state.games = { ...state.games, ...imported.games };
      saveGames();
    }
    if (imported.tools) {
      state.tools = { ...state.tools, ...imported.tools };
      saveTools();
    }
  }

  state.progress = {
    ...state.progress,
    ...progressData,
    preferences: { ...state.progress.preferences, ...progressData.preferences }
  };
  return isBackup;
}

function importProgress(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      const imported = JSON.parse(String(reader.result));
      const isBackup = applyImportedData(imported);
      state.activeTopic = state.progress.currentTopic || "Arithmetic";
      state.activeWorkspaceId = state.progress.currentWorkspaceId || "arithmetic.long-addition.3x3";
      state.mode = state.progress.preferences.mode || "guided";
      els.autoAdvance.checked = state.progress.preferences.autoAdvance !== false;
      safeLocalStorageSet(STORAGE_KEY, JSON.stringify(state.progress, null, 2), "Imported progress could not be saved in this browser.");
      els.modeTabs.forEach((item) => {
        item.setAttribute("aria-selected", item.dataset.mode === state.mode ? "true" : "false");
      });
      ensureSurfaceWorkspace();
      renderTopics();
      renderWorkspace();
      if (isBackup) {
        renderScratchpad();
        renderTools();
        renderGames();
      }
      updateUrlFromState({ replace: true });
      saveProgress("Imported progress");
      setStatus(isBackup ? "Backup imported: progress, scratchpads, games, and tools." : "Progress imported.", "correct");
    } catch {
      setStatus("Choose a valid Carry backup or progress JSON file.", "incorrect");
    } finally {
      event.target.value = "";
    }
  });
  reader.readAsText(file);
}

function activeScratchpad() {
  let pad = state.scratchpads.scratchpads.find((item) => item.id === state.scratchpads.activeScratchpadId);
  if (!pad) {
    pad = state.scratchpads.scratchpads[0];
    state.scratchpads.activeScratchpadId = pad?.id;
  }
  return pad;
}

function saveScratchpads() {
  safeLocalStorageSet(SCRATCHPAD_STORAGE_KEY, JSON.stringify(state.scratchpads, null, 2), "Scratchpads could not be saved in this browser.");
}

function renderScratchpad() {
  const pad = activeScratchpad();
  if (!pad) return;
  if (els.scratchpadTitle) els.scratchpadTitle.textContent = "Carry Scratchpad";
  if (els.scratchpadInput && els.scratchpadInput.value !== pad.text) {
    els.scratchpadInput.value = pad.text;
  }
  renderScratchpadPreview();
  renderScratchpadList();
  setScratchpadView(els.scratchpadLayout?.dataset.scratchpadView || "plain");
  updateScratchpadLineNumbers();
}

function setScratchpadView(view) {
  const nextView = view === "rendered" ? "rendered" : "plain";
  if (els.scratchpadLayout) els.scratchpadLayout.dataset.scratchpadView = nextView;
  if (els.scratchpadPanel) els.scratchpadPanel.dataset.scratchpadView = nextView;
  els.scratchpadPlainView?.setAttribute("aria-pressed", nextView === "plain" ? "true" : "false");
  els.scratchpadRenderedView?.setAttribute("aria-pressed", nextView === "rendered" ? "true" : "false");
  if (nextView === "plain") {
    els.scratchpadInput?.focus({ preventScroll: true });
  }
}

function updateScratchpadLineNumbers() {
  const showLineNumbers = Boolean(state.scratchpads.showLineNumbers);
  if (els.scratchpadLayout) els.scratchpadLayout.dataset.lineNumbers = showLineNumbers ? "true" : "false";
  if (els.scratchpadLineNumbers) els.scratchpadLineNumbers.checked = showLineNumbers;
}

function setScratchpadLineNumbers(enabled) {
  state.scratchpads.showLineNumbers = Boolean(enabled);
  saveScratchpads();
  updateScratchpadLineNumbers();
  setScratchpadStatus(state.scratchpads.showLineNumbers ? "Line numbers shown." : "Line numbers hidden.");
}

function renderScratchpadList() {
  els.scratchpadList.replaceChildren();
  const pads = [...state.scratchpads.scratchpads].sort((a, b) => String(b.updatedAt).localeCompare(String(a.updatedAt)));
  for (const pad of pads.slice(0, 12)) {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = pad.title;
    button.dataset.scratchpadId = pad.id;
    button.setAttribute("aria-current", pad.id === state.scratchpads.activeScratchpadId ? "true" : "false");
    els.scratchpadList.append(button);
  }
}

function handleScratchpadInput() {
  const pad = activeScratchpad();
  if (!pad) return;
  pad.text = els.scratchpadInput.value;
  pad.updatedAt = new Date().toISOString();
  saveScratchpads();
  renderScratchpadPreview();
  renderScratchpadList();
  setScratchpadStatus("Scratchpad saved in this browser.");
}

function renderScratchpadPreview() {
  const pad = activeScratchpad();
  els.scratchpadPreview.replaceChildren();
  const lines = String(pad?.text || "").split("\n");
  const normalizedLines = lines.map((line) => normalizePlainMathLine(line));
  const alignRelations = normalizedLines.filter(Boolean).length > 1
    && normalizedLines.filter((line) => splitTopLevelRelation(line)).length > 1;

  lines.forEach((line, index) => {
    const row = document.createElement("div");
    row.className = `scratch-line ${line.trim() ? "" : "scratch-line-empty"}`.trim();
    if (alignRelations) row.classList.add("scratch-line-aligned");

    const number = document.createElement("span");
    number.className = "scratch-line-number";
    number.textContent = String(index + 1);

    const math = document.createElement("div");
    math.className = "scratch-line-math";
    renderScratchpadLineMath(math, normalizedLines[index], alignRelations);

    row.append(number, math);
    els.scratchpadPreview.append(row);
  });
}

function renderScratchpadLineMath(target, latex, alignRelations) {
  target.replaceChildren();
  if (!latex) return;

  const split = alignRelations ? splitTopLevelRelation(latex) : null;
  if (!split) {
    target.append(createMathMlExpression(latex));
    return;
  }

  target.classList.add("scratch-line-math-aligned");
  const left = document.createElement("span");
  left.className = "scratch-align-left";
  const equals = document.createElement("span");
  equals.className = "scratch-align-equals";
  const right = document.createElement("span");
  right.className = "scratch-align-right";
  left.append(createMathMlExpression(split.left));
  equals.append(createMathMlExpression(split.operator));
  right.append(createMathMlExpression(split.right));
  target.append(left, equals, right);
}

function splitTopLevelEquals(text) {
  return splitTopLevelRelation(text, ["="]);
}

function splitTopLevelRelation(text, allowedOperators) {
  const operators = allowedOperators || ["\\Rightarrow", "\\iff", "\\equiv", "\\approx", "\\le", "\\ge", "\\ne", "\\to", "=", "<", ">", "≤", "≥", "≠", "≡", "≈"];
  let depth = 0;
  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    if (char === "{") depth += 1;
    if (char === "}") depth = Math.max(0, depth - 1);
    if (depth !== 0) continue;
    const operator = operators.find((item) => text.startsWith(item, index));
    if (operator) {
      return {
        left: text.slice(0, index).trimEnd(),
        operator,
        right: text.slice(index + operator.length).trimStart()
      };
    }
  }
  return null;
}

function normalizePlainMathLine(line) {
  let text = String(line || "").trim();
  if (!text) return "";
  const protectedText = [];
  text = protectTextCommands(text, protectedText);
  text = text
    .replace(/[≤]/g, "<=")
    .replace(/[≥]/g, ">=")
    .replace(/[≠]/g, "!=")
    .replace(/[≡]/g, "\\equiv")
    .replace(/[⊥]/g, "\\bot")
    .replace(/[⊤]/g, "\\top")
    .replace(/[⌊]/g, "\\lfloor ")
    .replace(/[⌋]/g, " \\rfloor")
    .replace(/[⌈]/g, "\\lceil ")
    .replace(/[⌉]/g, " \\rceil")
    .replace(/[→]/g, "->")
    .replace(/[⇒]/g, "=>")
    .replace(/[↔]/g, "\\leftrightarrow")
    .replace(/⇔/g, "\\iff")
    .replace(/∞/g, "\\infty")
    .replace(/[↑]/g, "\\uparrow")
    .replace(/[↓]/g, "\\downarrow")
    .replace(/[∖]/g, "\\setminus")
    .replace(/[∼~]/g, "\\sim")
    .replace(/∧/g, "\\land")
    .replace(/∨/g, "\\lor")
    .replace(/¬\s*/g, "\\neg ")
    .replace(/∀/g, "\\forall")
    .replace(/∃/g, "\\exists")
    .replace(/∴/g, "\\therefore")
    .replace(/∵/g, "\\because")
    .replace(/⊕/g, "\\oplus")
    .replace(/⊢/g, "\\vdash")
    .replace(/⊨/g, "\\models")
    .replace(/∉/g, "\\notin")
    .replace(/∈/g, "\\in")
    .replace(/⊆/g, "\\subseteq")
    .replace(/⊂/g, "\\subset")
    .replace(/∪/g, "\\cup")
    .replace(/∩/g, "\\cap")
    .replace(/∅/g, "\\emptyset")
    .replace(/ℕ/g, "\\mathbb{N}")
    .replace(/ℤ/g, "\\mathbb{Z}")
    .replace(/ℚ/g, "\\mathbb{Q}")
    .replace(/ℝ/g, "\\mathbb{R}")
    .replace(/ℂ/g, "\\mathbb{C}")
    .replace(/\+\/-/g, "\\pm")
    .replace(/(?<!\\)\btheta\b/gi, "\\theta")
    .replace(/(?<!\\)\bpi\b/gi, "\\pi")
    .replace(/(?<!\\)\bmod\s*\{([^{}]+)\}/gi, "\\pmod{$1}")
    .replace(/(?<!\\)\bmod\s+([A-Za-z0-9]+)\b/gi, "\\pmod{$1}")
    .replace(/(?<!\\)\bmod\b/gi, "\\bmod")
    .replace(/(?<!\\)\b(sin|cos|tan|sec|csc|cot|arcsin|arccos|arctan|ln|log)\b/gi, "\\$1")
    .replace(/sqrt\(([^()]*)\)/gi, (_, body) => `\\sqrt{${normalizePlainPowers(body)}}`)
    .replace(/\be\^\(([^()]*)\)/gi, (_, body) => `e^{${normalizePlainPowers(body)}}`)
    .replace(/(?<!\\)\bint\[([^,\]]+),([^\]]+)\]\s+([^=\n]+?)\s*d([A-Za-z])\b/gi, "\\int_{$1}^{$2} $3\\,d$4")
    .replace(/(?<!\\)\bint_([^\s^]+)\^([^\s]+)\s+([^=\n]+?)\s*d([A-Za-z])\b/gi, "\\int_{$1}^{$2} $3\\,d$4")
    .replace(/(?<!\\)\bint\s+([^=\n]+?)\s*d([A-Za-z])\b/gi, "\\int $1\\,d$2")
    .replace(/(?<!\\)\bint\b/gi, "\\int")
    .replace(/\b(d[A-Za-z])\/(d[A-Za-z])\b/g, "\\dfrac{$1}{$2}")
    .replace(/\\?\b(sin|cos|tan|sec|csc|cot|ln|log)\s+([A-Za-zθπ])\s*\/\s*\\?\b(sin|cos|tan|sec|csc|cot|ln|log)\s+([A-Za-zθπ])\b/gi, "\\frac{\\$1 $2}{\\$3 $4}")
    .replace(/\(([^()]+)\)\s*\/\s*\(([^()]+)\)/g, "\\frac{$1}{$2}")
    .replace(/(?<![\\\w])([A-Za-z0-9]+)\/([A-Za-z0-9]+)(?![\w])/g, "\\frac{$1}{$2}")
    .replace(/(?<![\\\w])([A-Za-z0-9]+)\s+\/\s+([A-Za-z0-9]+)(?![\w])/g, "\\frac{$1}{$2}")
    .replace(/<=>/g, "\\iff")
    .replace(/=>/g, "\\Rightarrow")
    .replace(/->/g, "\\to")
    .replace(/&&/g, "\\land")
    .replace(/(^|\s)\|\|(?=\s|$)/g, "$1\\lor")
    .replace(/<=/g, "\\le")
    .replace(/>=/g, "\\ge")
    .replace(/!=/g, "\\ne");
  text = restoreTextCommands(text, protectedText);
  text = text.replace(/\^(\(([^()]*)\)|([A-Za-z0-9]+))/g, (_, _raw, grouped, simple) => `^{${grouped || simple}}`);
  text = text.replace(/\^\{([^{}^]*\^[^{}]*)\}/g, (_, body) => `^{${normalizePlainPowers(body)}}`);
  return text;
}

function protectTextCommands(text, protectedText) {
  return String(text || "").replace(/\\text\{([^{}]*)\}/g, (match) => {
    const key = `@@CARRYTEXT${protectedText.length}@@`;
    protectedText.push(match);
    return key;
  });
}

function restoreTextCommands(text, protectedText) {
  return String(text || "").replace(/@@CARRYTEXT(\d+)@@/g, (_, index) => protectedText[Number(index)] || "");
}

function normalizePlainPowers(text) {
  return String(text || "").replace(/\^(\(([^()]*)\)|([A-Za-z0-9]+))/g, (_, _raw, grouped, simple) => `^{${grouped || simple}}`);
}

function renderLatexishMath(target, latex) {
  target.replaceChildren();
  if (!latex) return;
  appendLatexishSegment(target, latex);
}

function appendLatexishSegment(target, text) {
  let cursor = 0;
  while (cursor < text.length) {
    const next = findNextLatexCommand(text, cursor);
    if (!next) {
      appendScratchText(target, text.slice(cursor));
      return;
    }
    if (next.index > cursor) appendScratchText(target, text.slice(cursor, next.index));
    cursor = appendScratchCommand(target, text, next.index);
  }
}

function findNextLatexCommand(text, from) {
  const commands = ["\\dfrac", "\\frac", "\\sqrt", "\\int", "\\lfloor", "\\rfloor", "\\lceil", "\\rceil", "\\pmod", "\\bmod", "\\ln", "\\log", "\\sin", "\\cos", "\\tan", "\\sec", "\\csc", "\\cot", "\\arcsin", "\\arccos", "\\arctan", "\\pi", "\\theta", "\\equiv", "\\le", "\\ge", "\\ne", "\\bot", "\\top", "\\pm", "\\to", "\\Rightarrow", "\\,"];
  let found = null;
  for (const command of commands) {
    const index = text.indexOf(command, from);
    if (index !== -1 && (!found || index < found.index)) found = { command, index };
  }
  return found;
}

function appendScratchCommand(target, text, index) {
  if (text.startsWith("\\dfrac", index)) {
    const first = readBraceGroup(text, index + 6);
    const second = first ? readBraceGroup(text, first.end) : null;
    if (first && second) {
      appendScratchFraction(target, first.value, second.value, true);
      return second.end;
    }
  }

  if (text.startsWith("\\frac", index)) {
    const first = readBraceGroup(text, index + 5);
    const second = first ? readBraceGroup(text, first.end) : null;
    if (first && second) {
      appendScratchFraction(target, first.value, second.value, false);
      return second.end;
    }
  }

  if (text.startsWith("\\sqrt", index)) {
    const group = readBraceGroup(text, index + 5);
    if (group) {
      target.append(createMathMlSqrt(group.value));
      return group.end;
    }
  }

  if (text.startsWith("\\int", index)) {
    const integral = document.createElement("span");
    integral.className = "scratch-integral";
    const symbol = document.createElement("span");
    symbol.className = "scratch-integral-symbol";
    symbol.textContent = "∫";
    integral.append(symbol);

    let cursor = index + 4;
    const lower = readScriptGroup(text, cursor, "_");
    if (lower) {
      cursor = lower.end;
      const upper = readScriptGroup(text, cursor, "^");
      if (upper) {
        cursor = upper.end;
        const scripts = document.createElement("span");
        scripts.className = "scratch-integral-scripts";
        const top = document.createElement("span");
        top.className = "scratch-integral-upper";
        const bottom = document.createElement("span");
        bottom.className = "scratch-integral-lower";
        appendLatexishSegment(top, upper.value);
        appendLatexishSegment(bottom, lower.value);
        scripts.append(top, bottom);
        integral.append(scripts);
      } else {
        const bottom = document.createElement("sub");
        bottom.className = "scratch-integral-lower-inline";
        appendLatexishSegment(bottom, lower.value);
        integral.append(bottom);
      }
    } else {
      const upper = readScriptGroup(text, cursor, "^");
      if (upper) {
        cursor = upper.end;
        const top = document.createElement("sup");
        top.className = "scratch-integral-upper-inline";
        appendLatexishSegment(top, upper.value);
        integral.append(top);
      }
    }

    target.append(integral);
    return cursor;
  }

  if (text.startsWith("\\pmod", index)) {
    const group = readBraceGroup(text, index + 5);
    if (group) {
      appendScratchText(target, " (mod ");
      appendLatexishSegment(target, group.value);
      appendScratchText(target, ")");
      return group.end;
    }
  }

  const commandMap = {
    "\\ln": "ln",
    "\\log": "log",
    "\\sin": "sin",
    "\\cos": "cos",
    "\\tan": "tan",
    "\\sec": "sec",
    "\\csc": "csc",
    "\\cot": "cot",
    "\\arcsin": "arcsin",
    "\\arccos": "arccos",
    "\\arctan": "arctan",
    "\\pi": "π",
    "\\theta": "θ",
    "\\mu": "μ",
    "\\sigma": "σ",
    "\\rho": "ρ",
    "\\chi": "χ",
    "\\lfloor": "⌊",
    "\\rfloor": "⌋",
    "\\lceil": "⌈",
    "\\rceil": "⌉",
    "\\le": "≤",
    "\\ge": "≥",
    "\\ne": "≠",
    "\\equiv": "≡",
    "\\bot": "⊥",
    "\\top": "⊤",
    "\\bmod": " mod ",
    "\\pm": "±",
    "\\to": "→",
    "\\Rightarrow": "⇒",
    "\\,": " "
  };
  const command = Object.keys(commandMap)
    .sort((a, b) => b.length - a.length)
    .find((item) => text.startsWith(item, index));
  if (!command) {
    appendScratchText(target, text[index]);
    return index + 1;
  }
  const span = document.createElement("span");
  span.className = uprightScratchCommand(command) ? "scratch-upright" : "scratch-var";
  span.textContent = commandMap[command];
  target.append(span);
  return index + command.length;
}

function uprightScratchCommand(command) {
  return !["\\theta"].includes(command);
}

function appendScratchFraction(target, numerator, denominator, displayStyle) {
  const frac = document.createElement("span");
  frac.className = displayStyle ? "scratch-frac scratch-frac-display" : "scratch-frac scratch-frac-inline";
  const top = document.createElement("span");
  top.className = "scratch-frac-top";
  const bottom = document.createElement("span");
  bottom.className = "scratch-frac-bottom";
  appendLatexishSegment(top, numerator);
  appendLatexishSegment(bottom, denominator);
  frac.append(top, bottom);
  target.append(frac);
}

function createMathMlSqrt(value) {
  return createMathMlExpression(`\\sqrt{${value}}`);
}

function createMathMlExpression(value) {
  const math = createMathMlElement("math");
  math.classList.add("scratch-mathml-line");
  math.setAttribute("display", "inline");
  const row = createMathMlElement("mrow");
  appendMathMlContent(row, String(value || ""));
  math.append(row);
  return math;
}

function appendMathMlContent(target, value) {
  const text = String(value || "");
  let cursor = 0;
  while (cursor < text.length) {
    if (/\s/.test(text[cursor])) {
      cursor += 1;
      continue;
    }

    if ((text[cursor] === "_" || text[cursor] === "^") && target.lastChild) {
      const scriptedCursor = appendMathMlScript(target, text, cursor);
      if (scriptedCursor !== cursor) {
        cursor = scriptedCursor;
        continue;
      }
    }

    const matrix = readMatrixLiteral(text, cursor);
    if (matrix) {
      target.append(createMathMlMatrix(matrix.rows));
      cursor = matrix.end;
      continue;
    }

    const parenthesized = readParenthesizedGroup(text, cursor);
    if (parenthesized) {
      target.append(createMathMlFencedGroup("(", parenthesized.value, ")"));
      cursor = parenthesized.end;
      continue;
    }

    if (text.startsWith("\\dfrac", cursor) || text.startsWith("\\frac", cursor)) {
      const commandLength = text.startsWith("\\dfrac", cursor) ? 6 : 5;
      const numerator = readBraceGroup(text, cursor + commandLength);
      const denominator = numerator ? readBraceGroup(text, numerator.end) : null;
      if (numerator && denominator) {
        const frac = createMathMlElement("mfrac");
        const top = createMathMlElement("mrow");
        const bottom = createMathMlElement("mrow");
        appendMathMlContent(top, numerator.value);
        appendMathMlContent(bottom, denominator.value);
        frac.append(top, bottom);
        target.append(frac);
        cursor = denominator.end;
        continue;
      }
    }

    if (text.startsWith("\\sqrt", cursor)) {
      const group = readBraceGroup(text, cursor + 5);
      if (group) {
        const sqrt = createMathMlElement("msqrt");
        const row = createMathMlElement("mrow");
        appendMathMlContent(row, group.value);
        sqrt.append(row);
        target.append(sqrt);
        cursor = group.end;
        continue;
      }
    }

    if (text.startsWith("\\overline", cursor) || text.startsWith("\\bar", cursor)) {
      const commandLength = text.startsWith("\\overline", cursor) ? 9 : 4;
      const group = readBraceGroup(text, cursor + commandLength);
      if (group) {
        target.append(createMathMlOver(group.value));
        cursor = group.end;
        continue;
      }
    }

    if (text.startsWith("\\int", cursor)) {
      cursor = appendMathMlIntegral(target, text, cursor);
      continue;
    }

    if (text.startsWith("\\text", cursor)) {
      const group = readBraceGroup(text, cursor + 5);
      if (group) {
        target.append(createMathMlToken("mtext", group.value));
        cursor = group.end;
        continue;
      }
    }

    if (text.startsWith("\\pmod", cursor)) {
      const group = readBraceGroup(text, cursor + 5);
      if (group) {
        target.append(createMathMlToken("mo", "("));
        target.append(createMathMlToken("mtext", "mod"));
        const row = createMathMlElement("mrow");
        appendMathMlContent(row, group.value);
        target.append(row);
        target.append(createMathMlToken("mo", ")"));
        cursor = group.end;
        continue;
      }
    }

    if (text.startsWith("\\mathbb", cursor)) {
      const group = readBraceGroup(text, cursor + 7);
      if (group) {
        target.append(createMathMlToken("mi", doubleStruckSymbol(group.value), { mathvariant: "normal" }));
        cursor = group.end;
        continue;
      }
    }

    if (text.startsWith("\\operatorname", cursor)) {
      const group = readBraceGroup(text, cursor + 13);
      if (group) {
        target.append(createMathMlToken("mi", group.value, { mathvariant: "normal" }));
        cursor = group.end;
        continue;
      }
    }

    const command = mathMlCommandAt(text, cursor);
    if (command) {
      appendMathMlCommand(target, command);
      cursor += command.length;
      continue;
    }

    const number = text.slice(cursor).match(/^\d+(?:\.\d+)?/);
    if (number) {
      target.append(createMathMlToken("mn", number[0]));
      cursor += number[0].length;
      continue;
    }

    const letter = text.slice(cursor).match(/^[A-Za-zπθℕℤℚℝℂ]/);
    if (letter) {
      const token = letter[0];
      target.append(createMathMlIdentifier(token));
      cursor += token.length;
      continue;
    }

    target.append(createMathMlToken(mathMlOperatorTag(text[cursor]), displayMathMlOperator(text[cursor])));
    cursor += 1;
  }
}

function readParenthesizedGroup(text, start) {
  if (text[start] !== "(") return null;
  let cursor = start + 1;
  let depth = 1;
  let braceDepth = 0;

  while (cursor < text.length) {
    const char = text[cursor];
    if (char === "{") braceDepth += 1;
    else if (char === "}") braceDepth = Math.max(0, braceDepth - 1);
    else if (braceDepth === 0 && char === "(") depth += 1;
    else if (braceDepth === 0 && char === ")") {
      depth -= 1;
      if (depth === 0) {
        return {
          value: text.slice(start + 1, cursor),
          end: cursor + 1
        };
      }
    }
    cursor += 1;
  }

  return null;
}

function createMathMlFencedGroup(open, value, close) {
  const wrapper = createMathMlElement("mrow");
  wrapper.append(
    createMathMlToken("mo", open, { stretchy: "true", fence: "true" }),
    createMathMlRow(value),
    createMathMlToken("mo", close, { stretchy: "true", fence: "true" })
  );
  return wrapper;
}

function readMatrixLiteral(text, start) {
  if (!text.startsWith("[[", start)) return null;
  let cursor = start + 1;
  const rows = [];

  while (cursor < text.length) {
    cursor = skipMathWhitespace(text, cursor);
    if (text[cursor] !== "[") return null;
    cursor += 1;

    const row = [];
    let cellStart = cursor;
    let braceDepth = 0;
    let parenDepth = 0;
    let closedRow = false;

    while (cursor < text.length) {
      const char = text[cursor];
      if (char === "{") braceDepth += 1;
      if (char === "}") braceDepth = Math.max(0, braceDepth - 1);
      if (char === "(") parenDepth += 1;
      if (char === ")") parenDepth = Math.max(0, parenDepth - 1);

      if (braceDepth === 0 && parenDepth === 0 && char === ",") {
        row.push(text.slice(cellStart, cursor).trim());
        cursor += 1;
        cellStart = cursor;
        continue;
      }

      if (braceDepth === 0 && parenDepth === 0 && char === "]") {
        row.push(text.slice(cellStart, cursor).trim());
        cursor += 1;
        closedRow = true;
        break;
      }

      cursor += 1;
    }

    if (!closedRow || !row.length) return null;
    rows.push(row);
    cursor = skipMathWhitespace(text, cursor);
    if (text[cursor] === ",") {
      cursor += 1;
      continue;
    }
    if (text[cursor] === "]") {
      cursor += 1;
      const columnCount = rows[0].length;
      return rows.every((item) => item.length === columnCount)
        ? { rows, end: cursor }
        : null;
    }
    return null;
  }

  return null;
}

function skipMathWhitespace(text, cursor) {
  let index = cursor;
  while (/\s/.test(text[index])) index += 1;
  return index;
}

function createMathMlMatrix(rows) {
  const wrapper = createMathMlElement("mrow");
  const table = createMathMlElement("mtable");
  table.setAttribute("rowspacing", "0.18em");
  table.setAttribute("columnspacing", "0.8em");
  for (const row of rows) {
    const tableRow = createMathMlElement("mtr");
    for (const cell of row) {
      const tableCell = createMathMlElement("mtd");
      tableCell.append(createMathMlRow(cell));
      tableRow.append(tableCell);
    }
    table.append(tableRow);
  }
  wrapper.append(
    createMathMlToken("mo", "[", { stretchy: "true" }),
    table,
    createMathMlToken("mo", "]", { stretchy: "true" })
  );
  return wrapper;
}

function appendMathMlScript(target, text, cursor) {
  const firstMarker = text[cursor];
  const first = readScriptGroup(text, cursor, firstMarker);
  if (!first) return cursor;

  let nextCursor = first.end;
  const secondMarker = firstMarker === "_" ? "^" : "_";
  const second = readScriptGroup(text, nextCursor, secondMarker);
  if (second) nextCursor = second.end;

  const base = target.lastChild;
  base.remove();
  const baseNode = unwrapScriptBase(base);
  const lower = firstMarker === "_" ? first : second;
  const upper = firstMarker === "^" ? first : second;
  const node = lower && upper
    ? createMathMlElement("msubsup")
    : lower
      ? createMathMlElement("msub")
      : createMathMlElement("msup");

  if (lower && upper) {
    node.append(baseNode, createMathMlRow(lower.value), createMathMlRow(upper.value));
  } else if (lower) {
    node.append(baseNode, createMathMlRow(lower.value));
  } else {
    node.append(baseNode, createMathMlRow(upper.value));
  }

  target.append(node);
  return nextCursor;
}

function unwrapScriptBase(node) {
  if (!["msub", "msup"].includes(node.localName)) return node;
  return node.firstChild || node;
}

function createMathMlRow(value) {
  const row = createMathMlElement("mrow");
  appendMathMlContent(row, value);
  return row;
}

function createMathMlOver(value) {
  const node = createMathMlElement("mover");
  node.setAttribute("accent", "true");
  node.append(createMathMlRow(value), createMathMlToken("mo", "¯"));
  return node;
}

function appendMathMlIntegral(target, text, index) {
  const integral = createMathMlToken("mo", "∫");
  let cursor = index + 4;
  const lower = readScriptGroup(text, cursor, "_");
  if (lower) {
    cursor = lower.end;
    const upper = readScriptGroup(text, cursor, "^");
    if (upper) {
      cursor = upper.end;
      const node = createMathMlElement("msubsup");
      const lowerRow = createMathMlElement("mrow");
      const upperRow = createMathMlElement("mrow");
      appendMathMlContent(lowerRow, lower.value);
      appendMathMlContent(upperRow, upper.value);
      node.append(integral, lowerRow, upperRow);
      target.append(node);
      return cursor;
    }
    const node = createMathMlElement("msub");
    const lowerRow = createMathMlElement("mrow");
    appendMathMlContent(lowerRow, lower.value);
    node.append(integral, lowerRow);
    target.append(node);
    return cursor;
  }
  const upper = readScriptGroup(text, cursor, "^");
  if (upper) {
    cursor = upper.end;
    const node = createMathMlElement("msup");
    const upperRow = createMathMlElement("mrow");
    appendMathMlContent(upperRow, upper.value);
    node.append(integral, upperRow);
    target.append(node);
    return cursor;
  }
  target.append(integral);
  return cursor;
}

function mathMlCommandAt(text, index) {
  const commands = ["\\Leftrightarrow", "\\leftrightarrow", "\\Rightarrow", "\\rightarrow", "\\operatorname", "\\therefore", "\\setminus", "\\subseteq", "\\emptyset", "\\downarrow", "\\because", "\\epsilon", "\\uparrow", "\\arcsin", "\\arccos", "\\arctan", "\\lfloor", "\\rfloor", "\\lceil", "\\rceil", "\\forall", "\\exists", "\\lambda", "\\approx", "\\equiv", "\\models", "\\infty", "\\bmod", "\\Delta", "\\Omega", "\\sigma", "\\notin", "\\subset", "\\theta", "\\vdash", "\\times", "\\quad", "\\land", "\\oplus", "\\cdot", "\\oint", "\\rho", "\\chi", "\\sum", "\\bot", "\\top", "\\div", "\\lim", "\\lor", "\\neg", "\\iff", "\\sim", "\\sin", "\\cos", "\\tan", "\\sec", "\\csc", "\\cot", "\\log", "\\cup", "\\cap", "\\mu", "\\ln", "\\pi", "\\le", "\\ge", "\\ne", "\\pm", "\\to", "\\in", "\\;", "\\,"];
  return commands.find((command) => text.startsWith(command, index));
}

function appendMathMlCommand(target, command) {
  const functionNames = new Set(["\\sin", "\\cos", "\\tan", "\\sec", "\\csc", "\\cot", "\\arcsin", "\\arccos", "\\arctan", "\\log", "\\ln", "\\lim"]);
  if (functionNames.has(command)) {
    target.append(createMathMlToken("mi", command.slice(1), { mathvariant: "normal" }));
    return;
  }
  const commandMap = {
    "\\theta": ["mi", "θ"],
    "\\pi": ["mi", "π", "normal"],
    "\\mu": ["mi", "μ"],
    "\\sigma": ["mi", "σ"],
    "\\rho": ["mi", "ρ"],
    "\\chi": ["mi", "χ"],
    "\\epsilon": ["mi", "ε"],
    "\\sum": ["mo", "∑"],
    "\\oint": ["mo", "∮"],
    "\\le": ["mo", "≤"],
    "\\ge": ["mo", "≥"],
    "\\ne": ["mo", "≠"],
    "\\equiv": ["mo", "≡"],
    "\\sim": ["mo", "∼"],
    "\\approx": ["mo", "≈"],
    "\\lfloor": ["mo", "⌊"],
    "\\rfloor": ["mo", "⌋"],
    "\\lceil": ["mo", "⌈"],
    "\\rceil": ["mo", "⌉"],
    "\\pm": ["mo", "±"],
    "\\to": ["mo", "→"],
    "\\leftrightarrow": ["mo", "↔"],
    "\\rightarrow": ["mo", "→"],
    "\\Rightarrow": ["mo", "⇒"],
    "\\Leftrightarrow": ["mo", "⇔"],
    "\\iff": ["mo", "⇔"],
    "\\uparrow": ["mo", "↑"],
    "\\downarrow": ["mo", "↓"],
    "\\land": ["mo", "∧"],
    "\\lor": ["mo", "∨"],
    "\\neg": ["mo", "¬"],
    "\\forall": ["mo", "∀"],
    "\\exists": ["mo", "∃"],
    "\\therefore": ["mo", "∴"],
    "\\because": ["mo", "∵"],
    "\\bot": ["mo", "⊥"],
    "\\top": ["mo", "⊤"],
    "\\oplus": ["mo", "⊕"],
    "\\lambda": ["mi", "λ"],
    "\\Delta": ["mi", "Δ", "normal"],
    "\\Omega": ["mi", "Ω", "normal"],
    "\\infty": ["mo", "∞"],
    "\\times": ["mo", "×"],
    "\\cdot": ["mo", "·"],
    "\\div": ["mo", "÷"],
    "\\vdash": ["mo", "⊢"],
    "\\models": ["mo", "⊨"],
    "\\bmod": ["mtext", "mod"],
    "\\in": ["mo", "∈"],
    "\\notin": ["mo", "∉"],
    "\\subset": ["mo", "⊂"],
    "\\subseteq": ["mo", "⊆"],
    "\\setminus": ["mo", "∖"],
    "\\cup": ["mo", "∪"],
    "\\cap": ["mo", "∩"],
    "\\emptyset": ["mi", "∅", "normal"],
    "\\,": ["mspace", "", "0.22em"],
    "\\;": ["mspace", "", "0.36em"],
    "\\quad": ["mspace", "", "1em"]
  };
  const [tag, value, variant] = commandMap[command] || ["mtext", command];
  const token = createMathMlToken(tag, value);
  if (tag === "mspace") token.setAttribute("width", variant || "0.22em");
  else if (variant) token.setAttribute("mathvariant", variant);
  target.append(token);
}

function createMathMlIdentifier(token) {
  if (token === "π") return createMathMlToken("mi", "π", { mathvariant: "normal" });
  if (/^[ℕℤℚℝℂ]$/.test(token)) return createMathMlToken("mi", token, { mathvariant: "normal" });
  return createMathMlToken("mi", token);
}

function doubleStruckSymbol(value) {
  const symbols = {
    N: "ℕ",
    Z: "ℤ",
    Q: "ℚ",
    R: "ℝ",
    C: "ℂ"
  };
  return symbols[String(value || "").trim()] || String(value || "");
}

function mathMlOperatorTag(token) {
  return /[+\-*/=<>()[\]{}|,×÷·∈∉⊂⊆∪∩∖∧∨¬∀∃∴∵⊕⊢⊨⊥⊤⇔↔≡∼≈≤≥≠∞↑↓⌊⌋⌈⌉]/.test(token) ? "mo" : "mtext";
}

function displayMathMlOperator(token) {
  if (token === "*") return "·";
  if (token === "-") return "−";
  return token;
}

function createMathMlElement(tag) {
  return document.createElementNS("http://www.w3.org/1998/Math/MathML", tag);
}

function createMathMlToken(tag, value, attributes = {}) {
  const token = createMathMlElement(tag);
  token.textContent = value;
  Object.entries(attributes).forEach(([key, attributeValue]) => {
    token.setAttribute(key, attributeValue);
  });
  return token;
}

function appendScratchText(target, text) {
  let cursor = 0;
  while (cursor < text.length) {
    const powerIndex = findPowerStart(text, cursor);
    if (powerIndex === -1) {
      appendScratchRuns(target, text.slice(cursor));
      return;
    }
    if (powerIndex > cursor) appendScratchRuns(target, text.slice(cursor, powerIndex));
    const group = readBraceGroup(text, powerIndex + 1);
    if (!group) {
      appendScratchRuns(target, text.slice(powerIndex, powerIndex + 2));
      cursor = powerIndex + 2;
      continue;
    }
    const sup = document.createElement("sup");
    sup.className = "scratch-sup";
    appendLatexishSegment(sup, group.value);
    target.append(sup);
    cursor = group.end;
  }
}

function appendScratchRuns(target, text) {
  const tokenPattern = /([A-Za-z]+|[πθ]|\([^)]+\)|\{[^}]+\})\/([A-Za-z]+|[πθ]|\([^)]+\)|\{[^}]+\})/g;
  let cursor = 0;
  let match = tokenPattern.exec(text);
  while (match) {
    if (match.index > cursor) target.append(document.createTextNode(displayScratchOperators(text.slice(cursor, match.index))));
    appendScratchRunToken(target, match[0]);
    cursor = tokenPattern.lastIndex;
    match = tokenPattern.exec(text);
  }
  if (cursor < text.length) target.append(document.createTextNode(displayScratchOperators(text.slice(cursor))));
}

function appendScratchRunToken(target, text) {
  const fraction = text.match(/^(.+)\/(.+)$/);
  if (fraction) {
    appendScratchFraction(target, stripWrappingGroup(fraction[1]), stripWrappingGroup(fraction[2]), false);
    return;
  }

  const identifierPattern = /([A-Za-z]+|[πθ])/g;
  let cursor = 0;
  let match = identifierPattern.exec(text);
  while (match) {
    if (match.index > cursor) target.append(document.createTextNode(displayScratchOperators(text.slice(cursor, match.index))));
    const token = match[0];
    const span = document.createElement("span");
    span.className = scratchTokenClass(token);
    span.textContent = displayScratchOperators(token);
    target.append(span);
    cursor = identifierPattern.lastIndex;
    match = identifierPattern.exec(text);
  }
  if (cursor < text.length) target.append(document.createTextNode(displayScratchOperators(text.slice(cursor))));
}

function stripWrappingGroup(value) {
  const text = String(value || "");
  if ((text.startsWith("(") && text.endsWith(")")) || (text.startsWith("{") && text.endsWith("}"))) {
    return text.slice(1, -1);
  }
  return text;
}

function findPowerStart(text, from) {
  let index = text.indexOf("^{", from);
  while (index !== -1) {
    const previous = text[index - 1] || "";
    if (/[A-Za-z0-9πθ})]/.test(previous)) return index;
    index = text.indexOf("^{", index + 2);
  }
  return -1;
}

function scratchTokenClass(token) {
  const upright = new Set(["sin", "cos", "tan", "sec", "csc", "cot", "arcsin", "arccos", "arctan", "ln", "log", "d"]);
  if (upright.has(token.toLowerCase()) || token === "π") return "scratch-upright";
  return token.length === 1 ? "scratch-var" : "scratch-upright";
}

function displayScratchOperators(text) {
  return String(text)
    .replace(/\*/g, "·")
    .replace(/\+-/g, "−")
    .replace(/-/g, "−");
}

function readBraceGroup(text, start) {
  if (text[start] !== "{") return null;
  let depth = 0;
  for (let index = start; index < text.length; index += 1) {
    if (text[index] === "{") depth += 1;
    if (text[index] === "}") depth -= 1;
    if (depth === 0) {
      return {
        value: text.slice(start + 1, index),
        end: index + 1
      };
    }
  }
  return null;
}

function readScriptGroup(text, start, marker) {
  if (text[start] !== marker) return null;
  if (text[start + 1] === "{") {
    return readBraceGroup(text, start + 1);
  }
  const match = text.slice(start + 1).match(/^[-+]?[A-Za-z0-9πθ]+/);
  if (!match) return null;
  return {
    value: match[0],
    end: start + 1 + match[0].length
  };
}

function createScratchpad() {
  const title = `Scratchpad ${state.scratchpads.scratchpads.length + 1}`;
  const pad = {
    id: createId("scratchpad"),
    title,
    text: "",
    updatedAt: new Date().toISOString()
  };
  state.scratchpads.scratchpads.unshift(pad);
  state.scratchpads.activeScratchpadId = pad.id;
  saveScratchpads();
  renderScratchpad();
  setScratchpadStatus("New scratchpad created.");
}

function renameScratchpad() {
  const pad = activeScratchpad();
  if (!pad) return;
  const title = window.prompt("Scratchpad name", pad.title);
  if (!title || !title.trim()) return;
  pad.title = title.trim().slice(0, 80);
  pad.updatedAt = new Date().toISOString();
  saveScratchpads();
  renderScratchpad();
  setScratchpadStatus("Scratchpad renamed.");
}

function switchScratchpad(id) {
  if (!state.scratchpads.scratchpads.some((pad) => pad.id === id)) return;
  state.scratchpads.activeScratchpadId = id;
  saveScratchpads();
  renderScratchpad();
}

function insertScratchpadText(value) {
  const input = els.scratchpadInput;
  const start = input.selectionStart ?? input.value.length;
  const end = input.selectionEnd ?? input.value.length;
  input.value = `${input.value.slice(0, start)}${value}${input.value.slice(end)}`;
  const caret = start + value.length;
  input.focus();
  input.setSelectionRange(caret, caret);
  handleScratchpadInput();
}

function handleScratchpadKeydown(event) {
  if (event.key !== "Enter" || (!event.metaKey && !event.ctrlKey) || event.shiftKey || event.altKey) return;
  event.preventDefault();
  duplicateScratchpadLine();
}

function handleScratchpadShortcut(event) {
  if (state.activeSurface !== "scratchpad") return;
  if (event.key.toLowerCase() !== "m" || (!event.metaKey && !event.ctrlKey) || !event.shiftKey || event.altKey) return;
  event.preventDefault();
  const currentView = els.scratchpadLayout?.dataset.scratchpadView || "plain";
  setScratchpadView(currentView === "plain" ? "rendered" : "plain");
}

function duplicateScratchpadLine() {
  const input = els.scratchpadInput;
  const cursor = input.selectionStart ?? input.value.length;
  const value = input.value;
  const lineStart = value.lastIndexOf("\n", Math.max(0, cursor - 1)) + 1;
  const lineEndIndex = value.indexOf("\n", cursor);
  const lineEnd = lineEndIndex === -1 ? value.length : lineEndIndex;
  const line = value.slice(lineStart, lineEnd);
  const insertAt = lineEnd;
  const insertion = `\n${line}`;
  input.value = `${value.slice(0, insertAt)}${insertion}${value.slice(insertAt)}`;
  const caret = insertAt + insertion.length;
  input.focus();
  input.setSelectionRange(caret, caret);
  handleScratchpadInput();
  setScratchpadStatus("Line duplicated.");
}

function scratchpadLatexText() {
  return String(activeScratchpad()?.text || "")
    .split("\n")
    .map((line) => normalizePlainMathLine(line))
    .join("\n");
}

function scratchpadMarkdownText() {
  return scratchpadLatexText()
    .split("\n")
    .map((line) => (line.trim() ? `$$${line}$$` : ""))
    .join("\n");
}

function scratchpadPlainText() {
  return String(activeScratchpad()?.text || "");
}

function exportScratchpadLatex() {
  const pad = activeScratchpad();
  const title = safeFilename(pad?.title || "carry-scratchpad");
  const blob = new Blob([scratchpadLatexText()], { type: "application/x-tex" });
  downloadBlob(blob, `${title}.tex`);
  setScratchpadStatus("LaTeX exported.");
}

async function exportScratchpadImage() {
  const snapshot = await scratchpadPreviewSnapshot();
  if (!snapshot) {
    setScratchpadStatus("Nothing to export yet.");
    return;
  }

  downloadBlob(snapshot.svgBlob, snapshot.svgName);
  setScratchpadStatus("Rendered preview exported as SVG.");
}

async function exportScratchpadPng() {
  const pad = activeScratchpad();
  const lines = scratchpadPlainText().split("\n");
  if (!lines.join("").trim()) {
    setScratchpadStatus("Nothing to export yet.");
    return;
  }

  const scale = 2;
  const fontSize = 28;
  const lineHeight = fontSize * 1.65;
  const padding = 56;
  const fontStack = `${fontSize * scale}px ui-monospace, "SFMono-Regular", Consolas, "Liberation Mono", monospace`;
  const measure = document.createElement("canvas").getContext("2d");
  measure.font = fontStack;
  const textWidth = Math.max(...lines.map((line) => measure.measureText(line).width), 0) / scale;
  const width = Math.max(Math.ceil(textWidth) + padding * 2, 360);
  const height = Math.ceil(lines.length * lineHeight) + padding * 2;

  const canvas = document.createElement("canvas");
  canvas.width = width * scale;
  canvas.height = height * scale;
  const context = canvas.getContext("2d");
  const bodyStyle = getComputedStyle(document.body);
  context.fillStyle = bodyStyle.backgroundColor || "#ffffff";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = bodyStyle.color || "#111111";
  context.font = fontStack;
  context.textAlign = "center";
  context.textBaseline = "middle";
  lines.forEach((line, index) => {
    context.fillText(line, canvas.width / 2, (padding + (index + 0.5) * lineHeight) * scale);
  });

  const pngBlob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
  if (!pngBlob) {
    setScratchpadStatus("PNG export is not available in this browser. Try SVG instead.");
    return;
  }
  downloadBlob(pngBlob, `${safeFilename(pad?.title || "carry-scratchpad")}.png`);
  setScratchpadStatus("Plain notation exported as PNG.");
}

async function shareScratchpadImage() {
  const snapshot = await scratchpadPreviewSnapshot();
  if (!snapshot) {
    setScratchpadStatus("Nothing to share yet.");
    return;
  }

  try {
    const file = new File([snapshot.svgBlob], snapshot.svgName, { type: "image/svg+xml" });
    if (navigator.share && (!navigator.canShare || navigator.canShare({ files: [file] }))) {
      await navigator.share({
        files: [file],
        title: activeScratchpad()?.title || "Carry scratchpad"
      });
      setScratchpadStatus("Rendered preview shared.");
      return;
    }

    if (navigator.clipboard?.write && window.ClipboardItem) {
      await navigator.clipboard.write([new window.ClipboardItem({ "image/svg+xml": snapshot.svgBlob })]);
      setScratchpadStatus("Rendered preview copied as an SVG image.");
      return;
    }

    downloadBlob(snapshot.svgBlob, snapshot.svgName);
    setScratchpadStatus("Sharing is not available here; SVG image downloaded instead.");
  } catch (error) {
    if (error?.name === "AbortError") {
      setScratchpadStatus("Share cancelled.");
      return;
    }
    console.error(error);
    downloadBlob(snapshot.svgBlob, snapshot.svgName);
    setScratchpadStatus("Image sharing failed; SVG image downloaded instead.");
  }
}

async function scratchpadPreviewSnapshot() {
  const pad = activeScratchpad();
  const preview = els.scratchpadPreview;
  if (!preview || !preview.textContent.trim()) return null;
  if (document.fonts?.ready) await document.fonts.ready;
  const title = safeFilename(pad?.title || "carry-scratchpad");
  const width = Math.ceil(Math.max(preview.scrollWidth, preview.clientWidth, 360));
  const height = Math.ceil(Math.max(preview.scrollHeight, preview.clientHeight, 120));
  return {
    width,
    height,
    svgName: `${title}.svg`,
    svgBlob: scratchpadPreviewSvgBlob(preview, width, height)
  };
}

function scratchpadPreviewSvgBlob(preview, width, height) {
  const clone = preview.cloneNode(true);
  clone.removeAttribute("id");
  clone.setAttribute("aria-live", "off");
  clone.style.width = `${width}px`;
  clone.style.minHeight = `${height}px`;
  clone.style.height = "auto";

  const wrapper = document.createElement("div");
  wrapper.setAttribute("xmlns", "http://www.w3.org/1999/xhtml");
  wrapper.className = "scratchpad-image-root";
  wrapper.style.width = `${width}px`;
  wrapper.style.minHeight = `${height}px`;

  const style = document.createElement("style");
  style.textContent = scratchpadImageCss();
  wrapper.append(style, clone);

  const content = new XMLSerializer().serializeToString(wrapper);
  const svg = [
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">`,
    `<foreignObject width="100%" height="100%">${content}</foreignObject>`,
    "</svg>"
  ].join("");
  return new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
}

function scratchpadImageCss() {
  const root = getComputedStyle(document.documentElement);
  const text = root.getPropertyValue("--text").trim() || "#171717";
  const muted = root.getPropertyValue("--muted").trim() || "#60616a";
  const surface = root.getPropertyValue("--surface").trim() || "#ffffff";
  const line = root.getPropertyValue("--line").trim() || "#d9d9de";
  const font = root.getPropertyValue("--font").trim() || '"Helvetica Neue", Helvetica, Arial, sans-serif';
  const mathFont = root.getPropertyValue("--math-font").trim() || "STIX Two Math, Cambria Math, Times New Roman, serif";

  return `
    * { box-sizing: border-box; }
    .scratchpad-image-root {
      width: 100%;
      min-height: 100%;
      background: ${surface};
      color: ${text};
      font-family: ${font};
    }
    .scratchpad-preview {
      width: 100%;
      min-height: 0;
      padding: 16px;
      border: 1px solid ${line};
      border-radius: 8px;
      background: ${surface};
      overflow: visible;
    }
    .scratch-line {
      display: grid;
      grid-template-columns: 32px minmax(0, 1fr);
      gap: 12px;
      min-height: 28px;
      align-items: baseline;
    }
    .scratch-line-number {
      color: ${muted};
      font-size: 12px;
      font-weight: 700;
      text-align: right;
      user-select: none;
    }
    .scratch-line-math {
      min-width: 0;
      font-family: ${mathFont};
      font-size: 20px;
      line-height: 1.45;
      overflow-wrap: anywhere;
    }
    .scratch-line-math-aligned {
      display: grid;
      grid-template-columns: minmax(4ch, 1fr) auto minmax(0, 1.4fr);
      gap: 0.28em;
      align-items: baseline;
    }
    .scratch-align-left { justify-self: end; min-width: 0; }
    .scratch-align-equals { justify-self: center; }
    .scratch-align-right { justify-self: start; min-width: 0; }
    .scratch-mathml-line {
      display: inline math;
      font-family: ${mathFont};
      font-size: 1em;
      math-style: normal;
      vertical-align: -0.08em;
    }
    math {
      font-family: ${mathFont};
      math-style: normal;
    }
  `;
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
}

function importScratchpadLatex(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const text = latexToPlainScratchpad(String(reader.result || ""));
    const pad = {
      id: createId("scratchpad"),
      title: file.name.replace(/\.[^.]+$/, "") || "Imported LaTeX",
      text,
      updatedAt: new Date().toISOString()
    };
    state.scratchpads.scratchpads.unshift(pad);
    state.scratchpads.activeScratchpadId = pad.id;
    saveScratchpads();
    renderScratchpad();
    setScratchpadStatus("LaTeX imported as a new scratchpad.");
    event.target.value = "";
  });
  reader.readAsText(file);
}

function latexToPlainScratchpad(latex) {
  return String(latex || "")
    .replace(/\$\$/g, "")
    .split("\n")
    .map((line) => line
      .replace(/\\int_\{([^}]*)\}\^\{([^}]*)\}/g, "int_$1^$2")
      .replace(/\\int/g, "int")
      .replace(/\\frac\{([^{}]*)\}\{([^{}]*)\}/g, "$1/$2")
      .replace(/\\sqrt\{([^{}]*)\}/g, "sqrt($1)")
      .replace(/\^\{([^{}]*)\}/g, "^($1)")
      .replace(/\\quad/g, " ")
      .replace(/\\;/g, " ")
      .replace(/\\,/g, " ")
      .replace(/\\pi/g, "pi")
      .replace(/\\theta/g, "theta")
      .replace(/\\le/g, "<=")
      .replace(/\\ge/g, ">=")
      .replace(/\\ne/g, "!=")
      .replace(/\\equiv/g, "≡")
      .replace(/\\approx/g, "≈")
      .replace(/\\bot/g, "⊥")
      .replace(/\\top/g, "⊤")
      .replace(/\\lfloor/g, "⌊")
      .replace(/\\rfloor/g, "⌋")
      .replace(/\\lceil/g, "⌈")
      .replace(/\\rceil/g, "⌉")
      .replace(/\\pmod\{([^{}]*)\}/g, "mod $1")
      .replace(/\\bmod/g, "mod")
      .replace(/\\pm/g, "+/-")
      .replace(/\\land/g, "∧")
      .replace(/\\lor/g, "∨")
      .replace(/\\neg/g, "¬")
      .replace(/\\forall/g, "∀")
      .replace(/\\exists/g, "∃")
      .replace(/\\therefore/g, "∴")
      .replace(/\\because/g, "∵")
      .replace(/\\oplus/g, "⊕")
      .replace(/\\vdash/g, "⊢")
      .replace(/\\models/g, "⊨")
      .replace(/\\iff/g, "⇔")
      .replace(/\\to/g, "->")
      .replace(/\\Rightarrow/g, "=>")
      .replace(/\\(sin|cos|tan|sec|csc|cot|arcsin|arccos|arctan|ln|log)\b/g, "$1")
      .trim())
    .join("\n")
    .trim();
}

function safeFilename(value) {
  return String(value || "carry-scratchpad")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80) || "carry-scratchpad";
}

async function copyScratchpad(kind) {
  const text = kind === "latex"
    ? scratchpadLatexText()
    : kind === "markdown"
      ? scratchpadMarkdownText()
      : scratchpadPlainText();
  await copyText(text);
  const label = kind === "latex" ? "LaTeX" : kind === "markdown" ? "Markdown" : "plain text";
  setScratchpadStatus(`Copied ${label}.`);
}

async function copyText(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }
  const area = document.createElement("textarea");
  area.value = text;
  area.style.position = "fixed";
  area.style.opacity = "0";
  document.body.append(area);
  area.select();
  document.execCommand("copy");
  area.remove();
}

function setScratchpadStatus(message) {
  els.scratchpadStatus.textContent = message;
}

function updateProgressPanel() {
  els.autoAdvance.checked = state.progress.preferences.autoAdvance !== false;
  els.progressTopic.textContent = state.progress.currentTopic || state.activeTopic;
  els.progressCompleted.textContent = `${state.progress.completedLessons.length} ${state.progress.completedLessons.length === 1 ? "lesson" : "lessons"}`;
  els.progressSummary.textContent = els.progressCompleted.textContent;
  els.progressRecent.textContent = state.progress.recentActivity[0]?.label || "Just started";
  if (els.betaQaStatus) {
    const qa = createLessonQaReport();
    els.betaQaStatus.textContent = betaQaStatusText(qa);
    els.betaQaStatus.title = betaQaStatusTitle(qa);
  }
  els.savedWorkspaces.textContent = state.progress.savedWorkspaces.join(", ");
}

function betaQaStatusText(qa) {
  if (qa.betaBlockerCount > 0) {
    return `${qa.betaBlockerCount} lesson QA ${qa.betaBlockerCount === 1 ? "blocker" : "blockers"}`;
  }
  if (qa.feedbackPolishTargetCount > 0) {
    return `Beta gate clear; ${qa.feedbackPolishTargetCount} feedback polish ${qa.feedbackPolishTargetCount === 1 ? "target" : "targets"}`;
  }
  if (qa.curriculumDepthTargetCount > 0) {
    return "Beta gate clear; depth backlog tracked";
  }
  return "Beta gate clear";
}

function betaQaStatusTitle(qa) {
  const targets = qa.betaTargets || {};
  const parts = [
    targets.missingHints?.length ? `${targets.missingHints.length} missing hints` : "",
    targets.invalidChoices?.length ? `${targets.invalidChoices.length} invalid choice counts` : "",
    targets.binaryTooMany?.length ? `${targets.binaryTooMany.length} binary prompts with too many choices` : "",
    targets.missingAcceptedChoices?.length ? `${targets.missingAcceptedChoices.length} choice sets without an accepted answer` : "",
    targets.generatedChoicesNeeded?.length ? `${targets.generatedChoicesNeeded.length} generated choice fallbacks` : "",
    targets.longChoiceLabels?.length ? `${targets.longChoiceLabels.length} lessons with long choice labels` : "",
    targets.weirdChoices?.length ? `${targets.weirdChoices.length} odd choice sets` : "",
    qa.feedbackPolishTargetCount ? `${qa.feedbackPolishTargetCount} lessons use generated feedback` : "",
    qa.curriculumDepthTargetCount ? `${qa.curriculumDepthTargetCount} lessons need deeper practice later` : ""
  ].filter(Boolean);
  return parts.length ? parts.join("; ") : "Automated lesson QA found no current choice or feedback blockers.";
}

function digits(number, length) {
  return String(number).padStart(length, "0").split("").map(Number);
}

function numberDigits(number) {
  return String(Math.abs(Number(number) || 0)).split("").map(Number);
}

function operationDigitWidth(...values) {
  return Math.min(3, Math.max(1, ...values.map((value) => numberDigits(value).length)));
}

function digitColumn(index, width) {
  return 8 - width + index;
}

function digitDisplayCells(number, width, row) {
  const source = numberDigits(number);
  const digitsToShow = source.slice(-width);
  const startIndex = width - digitsToShow.length;
  return digitsToShow.map((value, index) => ({
    row,
    col: digitColumn(startIndex + index, width),
    value
  }));
}

function numberToCells(number, columns) {
  return String(number).padStart(columns, " ").split("").map((value) => value.trim());
}

function carryRow(rowIndex) {
  return 1;
}

function partialRow(rowIndex) {
  return 6 + rowIndex;
}

function visibleInputs() {
  return Array.from(els.grid.querySelectorAll(".digit-input")).filter((input) => !input.hidden);
}

function ones(number) {
  return number % 10;
}

function tens(number) {
  return Math.floor(number / 10) % 10;
}

function hundreds(number) {
  return Math.floor(number / 100) % 10;
}
