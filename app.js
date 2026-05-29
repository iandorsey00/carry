"use strict";

const APP_VERSION = "0.1.0-alpha.40";
const STORAGE_KEY = "carry.progress.v1";
const SCRATCHPAD_STORAGE_KEY = "carry.scratchpads.v1";

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

const subtractionWorkspace = {
  id: "arithmetic.long-subtraction.3x3",
  topic: "Arithmetic",
  title: "Long subtraction",
  type: "subtraction",
  problem: { top: 645, bottom: 278 }
};

const additionWorkspace = {
  id: "arithmetic.long-addition.3x3",
  topic: "Arithmetic",
  title: "Long addition",
  type: "addition",
  problem: { top: 486, bottom: 257 }
};

const multiplicationWorkspace = {
  id: "arithmetic.long-multiplication.3x3",
  topic: "Arithmetic",
  title: "Long multiplication",
  type: "multiplication",
  problem: { top: 247, bottom: 386 },
  rows: [
    { id: "p0", label: "x6", value: 247 * 6, shift: 0 },
    { id: "p1", label: "x80", value: 247 * 8 * 10, shift: 1 },
    { id: "p2", label: "x300", value: 247 * 3 * 100, shift: 2 },
    { id: "sum", label: "sum", value: 247 * 386, shift: 0 }
  ]
};

const divisionWorkspace = {
  id: "arithmetic.long-division.3x1",
  topic: "Arithmetic",
  title: "Long division",
  type: "division",
  allowsRemainder: false,
  problem: { top: 864, bottom: 4 }
};

const divisionRemainderWorkspace = {
  id: "arithmetic.long-division-remainders",
  topic: "Arithmetic",
  title: "Long division with remainders",
  type: "division",
  allowsRemainder: true,
  problem: { top: 865, bottom: 4 }
};

const arithmeticConceptWorkspaces = {
  "arithmetic.place-value": {
    id: "arithmetic.place-value",
    topic: "Arithmetic",
    title: "Place value",
    type: "concept",
    figure: "place-value",
    intro: [
      "Read a number by its places: hundreds, tens, and ones.",
      "A digit changes value when it moves to a different place.",
      "Use expanded form to see what each digit contributes."
    ],
    problems: [
      { prompt: "In 642, what is the value of the 6?", answer: "600", hint: "The 6 is in the hundreds place.", label: "value of 6" },
      { prompt: "Complete: 507 = 500 + 0 + __.", answer: "7", answers: ["7", "500+0+7", "500+00+7", "500+7"], hint: "The ones digit is 7.", label: "expanded ones term" },
      { prompt: "In 381, what digit is in the tens place?", answer: "8", hint: "The tens place is the middle digit.", label: "tens digit" }
    ]
  },
  "arithmetic.number-sense": {
    id: "arithmetic.number-sense",
    topic: "Arithmetic",
    title: "Number sense",
    type: "concept",
    figure: "number-line",
    intro: [
      "Use position, size, and nearby friendly numbers to reason before calculating.",
      "Compare numbers by the largest place where they differ.",
      "Round only when an estimate is enough."
    ],
    problems: [
      { prompt: "Which is larger: 409 or 490?", answer: "490", hint: "Compare the tens digits after the hundreds match.", label: "larger number" },
      { prompt: "What is 398 closest to: 300, 400, or 500?", answer: "400", hint: "398 is only 2 away from 400.", label: "closest hundred" },
      { prompt: "Fill the missing number: 125, 150, 175, __.", answer: "200", hint: "Each step adds 25.", label: "next number" }
    ]
  },
  "arithmetic.estimation": {
    id: "arithmetic.estimation",
    topic: "Arithmetic",
    title: "Estimation and checking",
    type: "concept",
    figure: "estimation",
    intro: [
      "Estimate before or after a calculation to catch unreasonable answers.",
      "Round to friendly numbers when exact precision is not needed.",
      "Use the estimate as a guardrail, not as the final answer."
    ],
    problems: [
      { prompt: "Estimate 398 + 201 by rounding to hundreds.", answer: "600", hint: "398 is about 400, and 201 is about 200.", label: "rounded sum" },
      { prompt: "Estimate 49 x 6 using 50 x 6.", answer: "300", hint: "50 x 6 is a close check.", label: "estimated product" },
      { prompt: "Is 812 - 398 closer to 400 or 600?", answer: "400", hint: "812 - 400 is about 412.", label: "closer estimate" }
    ]
  },
  "arithmetic.integers": {
    id: "arithmetic.integers",
    topic: "Arithmetic",
    title: "Integers",
    type: "concept",
    figure: "integer-line",
    intro: [
      "Integers include positive numbers, zero, and negative numbers.",
      "On a number line, moving right increases the value and moving left decreases it.",
      "Subtraction can be understood as distance and direction."
    ],
    problems: [
      { prompt: "What is -3 + 8?", answer: "5", hint: "Start at -3 and move 8 steps right.", label: "integer sum" },
      { prompt: "What is 4 - 9?", answer: "-5", hint: "You move 9 steps left from 4.", label: "integer difference" },
      { prompt: "Which is greater: -2 or -7?", answer: "-2", hint: "The greater number is farther right on the number line.", label: "greater integer" }
    ]
  },
  "arithmetic.fractions": {
    id: "arithmetic.fractions",
    topic: "Arithmetic",
    title: "Fractions",
    type: "concept",
    figure: "fraction-bar",
    intro: [
      "A fraction names equal parts of a whole.",
      "The denominator tells how many equal parts make the whole.",
      "The numerator tells how many of those parts are being used."
    ],
    problems: [
      { prompt: "Simplify 6/8.", answer: "3/4", hint: "Divide the top and bottom by 2.", label: "simplified fraction" },
      { prompt: "What is 1/4 of 20?", answer: "5", hint: "Split 20 into 4 equal groups.", label: "fraction of a number" },
      { prompt: "Which is larger: 1/2 or 1/3?", answer: "1/2", hint: "With the same whole, thirds are smaller parts than halves.", label: "larger fraction" }
    ]
  },
  "arithmetic.decimals": {
    id: "arithmetic.decimals",
    topic: "Arithmetic",
    title: "Decimals",
    type: "concept",
    figure: "decimal-grid",
    intro: [
      "Decimals extend place value to the right of the ones place.",
      "Tenths are one place after the decimal point.",
      "Hundredths are two places after the decimal point."
    ],
    problems: [
      { prompt: "What is 0.4 + 0.7?", answer: "1.1", hint: "Four tenths plus seven tenths is eleven tenths.", label: "decimal sum" },
      { prompt: "Write 3 tenths as a decimal.", answer: "0.3", hint: "Tenths use one digit after the decimal point.", label: "tenths decimal" },
      { prompt: "Which is larger: 0.8 or 0.75?", answer: "0.8", hint: "0.8 is the same as 0.80.", label: "larger decimal" }
    ]
  },
  "arithmetic.percents": {
    id: "arithmetic.percents",
    topic: "Arithmetic",
    title: "Percents",
    type: "concept",
    figure: "percent-grid",
    intro: [
      "Percent means per hundred.",
      "50% is half, 25% is a quarter, and 10% is one tenth.",
      "Convert percent questions into parts of 100 when possible."
    ],
    problems: [
      { prompt: "What is 25% of 80?", answer: "20", hint: "25% is one quarter.", label: "percent of a number" },
      { prompt: "Write 0.6 as a percent.", answer: "60%", hint: "0.6 is 60 hundredths.", label: "decimal to percent" },
      { prompt: "What is 10% of 350?", answer: "35", hint: "Move one place because 10% is one tenth.", label: "ten percent" }
    ]
  },
  "arithmetic.ratios": {
    id: "arithmetic.ratios",
    topic: "Arithmetic",
    title: "Ratios",
    type: "concept",
    figure: "ratio-bars",
    intro: [
      "A ratio compares two amounts.",
      "Equivalent ratios keep the same comparison while scaling both parts.",
      "Use multiplication or division on both parts to make an equivalent ratio."
    ],
    problems: [
      { prompt: "Simplify the ratio 6:9.", answer: "2:3", hint: "Divide both parts by 3.", label: "simplified ratio" },
      { prompt: "If 2:5 scales by 4, what is the new first number?", answer: "8", hint: "Multiply the first part by 4.", label: "scaled ratio part" },
      { prompt: "Complete the equivalent ratio: 3:4 = 12:__.", answer: "16", hint: "3 became 12 by multiplying by 4.", label: "equivalent ratio" }
    ]
  },
  "arithmetic.factors-multiples-primes": {
    id: "arithmetic.factors-multiples-primes",
    topic: "Arithmetic",
    title: "Factors, multiples, primes",
    type: "concept",
    figure: "factor-pairs",
    intro: [
      "Factors divide a number evenly.",
      "Multiples are results of multiplying by whole numbers.",
      "A prime number has exactly two positive factors: 1 and itself."
    ],
    problems: [
      { prompt: "Is 29 prime? Answer yes or no.", answer: "yes", answers: ["yes", "y"], hint: "29 is not divisible by 2, 3, or 5.", label: "prime check" },
      { prompt: "Give the missing factor: 6 x __ = 42.", answer: "7", hint: "42 divided by 6 is 7.", label: "missing factor" },
      { prompt: "What is the least common multiple of 4 and 6?", answer: "12", hint: "List multiples until they match.", label: "least common multiple" }
    ]
  },
  "arithmetic.order-of-operations": {
    id: "arithmetic.order-of-operations",
    topic: "Arithmetic",
    title: "Order of operations",
    type: "concept",
    figure: "operation-order",
    intro: [
      "Parentheses come before multiplication, division, addition, and subtraction.",
      "Multiplication and division are handled from left to right.",
      "Addition and subtraction are handled from left to right after that."
    ],
    problems: [
      { prompt: "Evaluate 3 + 4 x 5.", answer: "23", hint: "Multiply before adding.", label: "expression value" },
      { prompt: "Evaluate (3 + 4) x 5.", answer: "35", hint: "Parentheses go first.", label: "parentheses value" },
      { prompt: "Evaluate 18 / 3 + 2.", answer: "8", hint: "Divide first, then add.", label: "division before addition" }
    ]
  },
  "arithmetic.word-problems": {
    id: "arithmetic.word-problems",
    topic: "Arithmetic",
    title: "Word problems",
    type: "concept",
    figure: "word-problem",
    intro: [
      "Find what the question is asking for before calculating.",
      "Identify the quantities and the operation connecting them.",
      "Check that the answer uses the right unit."
    ],
    problems: [
      { prompt: "Mina has 18 cards and gets 7 more. How many cards does she have?", answer: "25", hint: "More cards means addition.", label: "cards total" },
      { prompt: "A box has 6 rows of 8 tiles. How many tiles are there?", answer: "48", hint: "Equal rows suggest multiplication.", label: "array total" },
      { prompt: "There are 45 apples in 5 equal bags. How many apples are in each bag?", answer: "9", hint: "Split 45 into 5 equal groups.", label: "equal group size" }
    ]
  },
  "arithmetic.mixed-review": {
    id: "arithmetic.mixed-review",
    topic: "Arithmetic",
    title: "Mixed review",
    type: "concept",
    figure: "mixed-review",
    intro: [
      "Mixed review asks you to choose the operation and method.",
      "Estimate first when the numbers are large.",
      "Check whether the result is reasonable before moving on."
    ],
    problems: [
      { prompt: "What is 38 + 47?", answer: "85", hint: "Add ones, then tens.", label: "mixed addition" },
      { prompt: "What is 9 x 12?", answer: "108", hint: "9 x 10 plus 9 x 2.", label: "mixed multiplication" },
      {
        prompt: "Use long division for 144 / 12.",
        answer: "12",
        hint: "Open the long division workspace if you want the full written method.",
        label: "mixed division",
        workspaceId: "arithmetic.long-division.3x1",
        top: 144,
        bottom: 12
      }
    ]
  }
};

const preAlgebraConceptWorkspaces = {
  "prealgebra.integers": {
    id: "prealgebra.integers",
    topic: "Pre-Algebra",
    title: "Integers",
    type: "concept",
    figure: "integer-line",
    intro: [
      "Use integers to describe values above and below zero.",
      "Addition and subtraction can be tracked as movement on a number line.",
      "Multiplication and division use sign rules: same signs give positive, different signs give negative."
    ],
    problems: [
      { prompt: "What is -6 + 14?", answer: "8", hint: "Move 14 steps right from -6.", label: "integer addition" },
      { prompt: "What is -4 x 7?", answer: "-28", hint: "Different signs make a negative product.", label: "integer product" },
      { prompt: "What is -30 / -5?", answer: "6", hint: "Same signs make a positive quotient.", label: "integer quotient" }
    ]
  },
  "prealgebra.expressions": {
    id: "prealgebra.expressions",
    topic: "Pre-Algebra",
    title: "Expressions",
    type: "concept",
    figure: "expression-terms",
    intro: [
      "An expression can contain numbers, variables, and operations.",
      "Like terms have the same variable part.",
      "Simplifying keeps the value the same while making the expression easier to read."
    ],
    problems: [
      { prompt: "Simplify: 2x + x.", answer: "3x", hint: "Both terms are x terms.", label: "simplified expression" },
      { prompt: "Evaluate 3n + 2 when n = 4.", answer: "14", hint: "Replace n with 4, then multiply before adding.", label: "expression value" },
      { prompt: "Simplify: 5a + 3 + 2a.", answer: "7a+3", answers: ["7a+3", "3+7a"], hint: "Combine the a terms and keep the constant.", label: "combined expression" }
    ]
  },
  "prealgebra.equations": {
    id: "prealgebra.equations",
    topic: "Pre-Algebra",
    title: "Equations",
    type: "equation",
    figure: "equation-balance",
    intro: [
      "An equation says two expressions are equal.",
      "Solve by doing the same operation to both sides.",
      "Check by substituting the solution back into the original equation."
    ],
    problems: [
      { a: 1, b: 7, c: 12 },
      { a: 3, b: 0, c: 18 },
      { a: 2, b: 5, c: 17 }
    ]
  },
  "prealgebra.inequalities": {
    id: "prealgebra.inequalities",
    topic: "Pre-Algebra",
    title: "Inequalities",
    type: "inequality",
    figure: "inequality-line",
    intro: [
      "An inequality compares expressions that may not be equal.",
      "Use the same inverse operations as equations.",
      "When multiplying or dividing by a negative number, reverse the inequality sign."
    ],
    problems: [
      { a: 1, b: 4, relation: ">", c: 9 },
      { a: 2, b: 0, relation: "<=", c: 10 },
      { a: -1, b: 0, relation: "<", c: 3 }
    ]
  },
  "prealgebra.exponents": {
    id: "prealgebra.exponents",
    topic: "Pre-Algebra",
    title: "Exponents",
    type: "concept",
    figure: "exponent-stack",
    intro: [
      "An exponent tells how many times to use the base as a factor.",
      "Powers of 10 shift place value.",
      "Keep the base and exponent roles distinct."
    ],
    problems: [
      { prompt: "Evaluate 2^5.", answer: "32", hint: "2 x 2 x 2 x 2 x 2 = 32.", label: "power value" },
      { prompt: "Write 10 x 10 x 10 as a power.", answer: "10^3", answers: ["10^3", "10³"], hint: "There are three factors of 10.", label: "power notation" },
      { prompt: "Evaluate 3^2 + 4.", answer: "13", hint: "Square 3 first, then add 4.", label: "exponent expression value" }
    ]
  },
  "prealgebra.coordinate-plane": {
    id: "prealgebra.coordinate-plane",
    topic: "Pre-Algebra",
    title: "Coordinate plane",
    type: "concept",
    figure: "coordinate-plane",
    intro: [
      "A coordinate pair is written as (x, y).",
      "The x-coordinate moves left or right from the origin.",
      "The y-coordinate moves up or down after the x movement."
    ],
    problems: [
      { prompt: "What point is 3 right and 2 down from the origin?", answer: "(3,-2)", answers: ["(3,-2)", "3,-2"], hint: "Right is positive x. Down is negative y.", label: "coordinate pair" },
      { prompt: "In the point (-4, 5), what is the x-coordinate?", answer: "-4", hint: "The x-coordinate is the first number.", label: "x coordinate" },
      { prompt: "Which quadrant contains (2, -6)?", answer: "IV", answers: ["iv", "4", "quadrantiv", "quadrant4"], hint: "Positive x and negative y is Quadrant IV.", label: "quadrant" }
    ]
  }
};

const algebraConceptWorkspaces = {
  "algebra.linear-equations": {
    id: "algebra.linear-equations",
    topic: "Algebra",
    title: "Linear equations",
    type: "equation",
    figure: "equation-balance",
    intro: [
      "Linear equations can be solved by isolating the variable.",
      "Undo addition or subtraction before undoing multiplication or division.",
      "Each transformation must preserve equality."
    ],
    problems: [
      { a: 4, b: -3, c: 13 },
      { a: -2, b: 5, c: 17 },
      { a: 5, b: 10, c: -15 }
    ]
  },
  "algebra.systems": {
    id: "algebra.systems",
    topic: "Algebra",
    title: "Systems",
    type: "system",
    figure: "system-intersection",
    intro: [
      "A system asks for values that make more than one equation true.",
      "A solution to two linear equations is the point where the lines meet.",
      "Substitution and elimination are two common ways to find that point."
    ],
    problems: [
      {
        equations: ["x + y = 3", "x - y = 1"],
        method: "elimination",
        rows: [
          { label: "combine", left: { answer: "2x", hint: "Add the left sides: x + x = 2x, and y + -y cancels." }, relation: "=", right: { answer: "4", hint: "Add the right sides: 3 + 1 = 4." } },
          { label: "solve x", left: "x", relation: "=", right: { answer: "2", hint: "Divide both sides of 2x = 4 by 2." } },
          { label: "substitute", left: { answer: "2+y", answers: ["2+y", "y+2"], hint: "Put x = 2 into x + y = 3." }, relation: "=", right: "3" },
          { label: "solve y", left: "y", relation: "=", right: { answer: "1", hint: "Subtract 2 from both sides." } },
          { label: "solution", left: "(x,y)", relation: "=", right: { answer: "(2,1)", answers: ["(2,1)", "2,1"], hint: "Use x first, then y." } }
        ]
      },
      {
        equations: ["y = x + 2", "y = 6"],
        method: "substitution",
        rows: [
          { label: "substitute", left: "6", relation: "=", right: { answer: "x+2", hint: "Replace y with 6 in y = x + 2." } },
          { label: "solve x", left: "x", relation: "=", right: { answer: "4", hint: "Subtract 2 from both sides." } },
          { label: "solution", left: "(x,y)", relation: "=", right: { answer: "(4,6)", answers: ["(4,6)", "4,6"], hint: "The system gives x = 4 and y = 6." } }
        ]
      },
      {
        equations: ["2x + y = 7", "y = 3"],
        method: "substitution",
        rows: [
          { label: "substitute", left: { answer: "2x+3", hint: "Replace y with 3 in 2x + y = 7." }, relation: "=", right: "7" },
          { label: "simplify", left: "2x", relation: "=", right: { answer: "4", hint: "Subtract 3 from both sides." } },
          { label: "solve x", left: "x", relation: "=", right: { answer: "2", hint: "Divide both sides by 2." } },
          { label: "solution", left: "(x,y)", relation: "=", right: { answer: "(2,3)", answers: ["(2,3)", "2,3"], hint: "Use x = 2 and y = 3." } }
        ]
      }
    ]
  },
  "algebra.polynomials": {
    id: "algebra.polynomials",
    topic: "Algebra",
    title: "Polynomials",
    type: "concept",
    figure: "polynomial-terms",
    intro: [
      "Polynomials are sums of terms with whole-number powers of a variable.",
      "Like terms have the same variable and exponent.",
      "The degree is the largest exponent after the polynomial is simplified."
    ],
    problems: [
      { prompt: "Combine like terms: 3x^2 + 2x + 5x^2.", answer: "8x^2+2x", answers: ["8x^2+2x", "2x+8x^2"], hint: "Combine the x^2 terms and keep the x term.", label: "combined polynomial" },
      { prompt: "What is the degree of 4x^3 - x + 7?", answer: "3", hint: "Look for the largest exponent.", label: "polynomial degree" },
      { prompt: "Evaluate x^2 + 2x when x = 3.", answer: "15", hint: "3^2 + 2(3) = 9 + 6.", label: "polynomial value" }
    ]
  },
  "algebra.factoring": {
    id: "algebra.factoring",
    topic: "Algebra",
    title: "Factoring",
    type: "factoring",
    figure: "factoring-pairs",
    intro: [
      "Factoring rewrites an expression as a product.",
      "Look for a greatest common factor before using a special pattern.",
      "For an expression shaped like x^2 + some x's + a number, list factor pairs of the number first, then find the pair whose sum makes the x term."
    ],
    problems: [
      {
        expression: "x^2 + 5x + 6",
        method: "pair",
        rows: [
          { label: "shape", left: "x^2 + ?x + ?", relation: "->", right: "two binomials" },
          { label: "x term number", left: "5x", relation: "=", right: { answer: "5", hint: "The number attached to x is 5." } },
          { label: "number term", left: "6", relation: "=", right: { answer: "6", hint: "The plain number at the end is 6." } },
          { label: "factor pairs", left: "make 6", relation: ":", right: "1,6 or 2,3" },
          { label: "choose pair", left: { answer: "2,3", answers: ["2,3", "3,2"], hint: "Start with pairs that multiply to 6: 1 and 6, or 2 and 3. Choose the one whose sum is 5." }, relation: "+", right: { answer: "5", hint: "2 + 3 = 5. The pair 1 and 6 adds to 7, so it does not match." } },
          { label: "check product", left: "2,3", relation: "x", right: { answer: "6", hint: "2 x 3 = 6, so the same pair also matches the constant." } },
          { label: "first factor", left: "x +", relation: "", right: { answer: "2", hint: "Use one number from the working pair." } },
          { label: "second factor", left: "x +", relation: "", right: { answer: "3", hint: "Use the other number from the working pair." } },
          { label: "factored form", left: "result", relation: "=", right: { answer: "(x+2)(x+3)", answers: ["(x+2)(x+3)", "(x+3)(x+2)"], hint: "Write the two binomials as a product." } }
        ]
      },
      {
        expression: "6x + 9",
        method: "gcf",
        rows: [
          { label: "common factor", left: "gcf", relation: "=", right: { answer: "3", hint: "3 is the greatest factor shared by 6 and 9." } },
          { label: "first term", left: "6x / 3", relation: "=", right: { answer: "2x", hint: "6x divided by 3 is 2x." } },
          { label: "second term", left: "9 / 3", relation: "=", right: { answer: "3", hint: "9 divided by 3 is 3." } },
          { label: "inside", left: "after divide", relation: "=", right: { answer: "2x+3", hint: "Put the divided terms inside the parentheses." } },
          { label: "factors", left: "result", relation: "=", right: { answer: "3(2x+3)", hint: "Put the GCF outside the parentheses." } }
        ]
      },
      {
        expression: "x^2 - 9",
        method: "difference of squares",
        rows: [
          { label: "pattern", left: "a^2 - b^2", relation: "=", right: "(a-b)(a+b)" },
          { label: "first root", left: "x^2", relation: "->", right: { answer: "x", hint: "The square root of x^2 is x." } },
          { label: "second root", left: "9", relation: "->", right: { answer: "3", hint: "The square root of 9 is 3." } },
          { label: "minus factor", left: "x -", relation: "", right: { answer: "3", hint: "One factor uses subtraction." } },
          { label: "plus factor", left: "x +", relation: "", right: { answer: "3", hint: "The other factor uses addition." } },
          { label: "factored form", left: "result", relation: "=", right: { answer: "(x-3)(x+3)", answers: ["(x-3)(x+3)", "(x+3)(x-3)"], hint: "Use the square roots with opposite signs." } }
        ]
      }
    ]
  },
  "algebra.rational-expressions": {
    id: "algebra.rational-expressions",
    topic: "Algebra",
    title: "Rational expressions",
    type: "concept",
    figure: "rational-cancel",
    intro: [
      "A rational expression is a fraction made from algebraic expressions.",
      "Factor first, then cancel common factors.",
      "Values that make the original denominator zero stay excluded."
    ],
    problems: [
      { prompt: "Simplify: (x^2 - 9) / (x - 3).", answer: "x+3", hint: "Factor the numerator as (x - 3)(x + 3).", label: "simplified rational expression" },
      { prompt: "For 1 / (x - 5), what value of x is not allowed?", answer: "5", hint: "The denominator cannot be zero.", label: "excluded value" },
      { prompt: "Simplify: 6x / 9.", answer: "2x/3", answers: ["2x/3", "(2x)/3"], hint: "Divide numerator and denominator by 3.", label: "reduced rational expression" }
    ]
  },
  "algebra.quadratics": {
    id: "algebra.quadratics",
    topic: "Algebra",
    title: "Quadratics",
    type: "quadratic",
    figure: "quadratic-roots",
    intro: [
      "A quadratic has a squared variable as its highest power.",
      "Before solving, identify what the problem asks for: roots, a vertex, or a value.",
      "For beginner factoring problems shaped like x^2 plus an x term plus a number, roots come from finding two binomials whose product equals zero."
    ],
    problems: [
      {
        expression: "x^2 - 5x + 6 = 0",
        method: "roots by factoring",
        rows: [
          { label: "shape", left: "x^2 + ?x + ? = 0", relation: "->", right: "factor first" },
          { label: "x term number", left: "-5x", relation: "=", right: { answer: "-5", hint: "The number attached to x is -5." } },
          { label: "number term", left: "6", relation: "=", right: { answer: "6", hint: "The plain number is 6." } },
          { label: "factor pairs", left: "make 6", relation: ":", right: "1,6 or 2,3" },
          { label: "signs", left: "both signs", relation: "=", right: { answer: "--", answers: ["--", "bothnegative", "both negative", "negative", "both-", "both -"], hint: "To multiply to positive 6 and add to negative 5, both numbers need to be negative. Write -- for two negative signs." } },
          { label: "choose pair", left: { answer: "-2,-3", answers: ["-2,-3", "-3,-2"], hint: "Use the pair 2 and 3, then make both negative: -2 + -3 = -5." }, relation: "+", right: { answer: "-5", hint: "-2 + -3 = -5." } },
          { label: "check product", left: "-2,-3", relation: "x", right: { answer: "6", hint: "-2 x -3 = 6." } },
          { label: "factor", left: "expression", relation: "=", right: { answer: "(x-2)(x-3)", answers: ["(x-2)(x-3)", "(x-3)(x-2)"], hint: "Use the pair as the constants in the binomials." } },
          { label: "zero product", left: "roots", relation: "=", right: { answer: "2,3", answers: ["2,3", "3,2", "x=2,x=3", "x=3,x=2"], hint: "Each factor can equal zero: x - 2 = 0 or x - 3 = 0." } }
        ]
      },
      {
        expression: "y = x^2 - 4x + 1",
        method: "vertex",
        rows: [
          { label: "x^2 number", left: "x^2", relation: "=", right: { answer: "1", hint: "There is an invisible 1 in front of x^2." } },
          { label: "x term number", left: "-4x", relation: "=", right: { answer: "-4", hint: "The number attached to x is -4." } },
          { label: "opposite", left: "opposite of -4", relation: "=", right: { answer: "4", hint: "The opposite of -4 is 4." } },
          { label: "double", left: "2 times 1", relation: "=", right: { answer: "2", hint: "Double the x^2 number: 2 times 1 is 2." } },
          { label: "vertex x", left: "opposite / double", relation: "=", right: { answer: "2", hint: "4 divided by 2 is 2." } },
          { label: "vertex y", left: "2^2 - 4(2) + 1", relation: "=", right: { answer: "-3", hint: "4 - 8 + 1 = -3." } },
          { label: "vertex", left: "(x,y)", relation: "=", right: { answer: "(2,-3)", answers: ["(2,-3)", "2,-3"], hint: "Use the x-value and y-value together." } }
        ]
      },
      {
        expression: "x^2 - 9 when x = 4",
        method: "evaluate",
        rows: [
          { label: "substitute", left: "x", relation: "=", right: { answer: "4", hint: "The problem gives x = 4." } },
          { label: "rewrite", left: "x^2 - 9", relation: "=", right: { answer: "4^2-9", answers: ["4^2-9", "4^2 - 9"], hint: "Replace x with 4." } },
          { label: "square", left: "4^2", relation: "=", right: { answer: "16", hint: "4 times 4 is 16." } },
          { label: "subtract", left: "16 - 9", relation: "=", right: { answer: "7", hint: "16 - 9 = 7." } },
          { label: "value", left: "result", relation: "=", right: { answer: "7", hint: "The expression equals 7 when x = 4." } }
        ]
      }
    ]
  }
};

const geometryConceptWorkspaces = {
  "geometry.angles": {
    id: "geometry.angles",
    topic: "Geometry",
    title: "Angles",
    type: "concept",
    figure: "geometry-angles",
    intro: [
      "Angles measure turning.",
      "A straight angle measures 180 degrees.",
      "Adjacent angles share a side. If they form a straight line, their measures add to 180 degrees."
    ],
    problems: [
      { prompt: "Two adjacent angles make a straight line. One is 120 degrees. What is the other?", answer: "60", answers: ["60", "60degrees"], hint: "Straight line angles add to 180. Compute 180 - 120.", label: "missing angle" },
      { prompt: "What is the measure of a right angle?", answer: "90", answers: ["90", "90degrees"], hint: "A right angle is one quarter turn.", label: "right angle measure" },
      { prompt: "Angles of 35 degrees and 55 degrees add to what kind of angle?", answer: "right", answers: ["right", "rightangle", "90", "90degrees"], hint: "35 + 55 = 90.", label: "angle type" }
    ]
  },
  "geometry.triangles": {
    id: "geometry.triangles",
    topic: "Geometry",
    title: "Triangles",
    type: "concept",
    figure: "geometry-triangle",
    intro: [
      "Every triangle has three sides and three angles.",
      "The three interior angles of a triangle add to 180 degrees.",
      "Equal side lengths usually create equal angle relationships."
    ],
    problems: [
      { prompt: "A triangle has angles 60 degrees and 70 degrees. What is the third angle?", answer: "50", answers: ["50", "50degrees"], hint: "Subtract 60 and 70 from 180.", label: "third angle" },
      { prompt: "A triangle with three equal sides is called what?", answer: "equilateral", hint: "Equal sides means equilateral.", label: "triangle type" },
      { prompt: "A right triangle has one angle of 90 degrees and another of 35 degrees. What is the third angle?", answer: "55", answers: ["55", "55degrees"], hint: "180 - 90 - 35 = 55.", label: "right triangle angle" }
    ]
  },
  "geometry.circles": {
    id: "geometry.circles",
    topic: "Geometry",
    title: "Circles",
    type: "concept",
    figure: "geometry-circle",
    intro: [
      "The radius runs from the center of a circle to its edge.",
      "The diameter runs all the way across through the center.",
      "Circumference is the distance around the circle."
    ],
    problems: [
      { prompt: "A circle has radius 4. What is its diameter?", answer: "8", hint: "The diameter is twice the radius.", label: "diameter" },
      { prompt: "A circle has diameter 10. What is its radius?", answer: "5", hint: "The radius is half the diameter.", label: "radius" },
      { prompt: "Using C = πd, what is the circumference of a circle with diameter 6?", answer: "6π", answers: ["6π", "6pi", "6*pi", "6×π"], hint: "Leave the answer exact: π times the diameter is 6π.", label: "circumference" }
    ]
  },
  "geometry.area-volume": {
    id: "geometry.area-volume",
    topic: "Geometry",
    title: "Area and volume",
    type: "concept",
    figure: "geometry-area-volume",
    intro: [
      "Area measures how much flat space a shape covers.",
      "Volume measures how much space a solid holds.",
      "Track the unit: square units for area, cubic units for volume."
    ],
    problems: [
      { prompt: "What is the area of a rectangle with length 8 and width 3?", answer: "24", hint: "Rectangle area is length times width.", label: "rectangle area" },
      { prompt: "What is the volume of a rectangular prism with dimensions 2, 3, and 5?", answer: "30", hint: "Multiply all three dimensions.", label: "prism volume" },
      { prompt: "A triangle has base 10 and height 4. What is its area?", answer: "20", hint: "Triangle area is half of base times height.", label: "triangle area" }
    ]
  },
  "geometry.coordinate": {
    id: "geometry.coordinate",
    topic: "Geometry",
    title: "Coordinate geometry",
    type: "concept",
    figure: "geometry-coordinate",
    intro: [
      "Coordinate geometry studies shapes using points on a grid.",
      "Horizontal distance comes from the x-values.",
      "Vertical distance comes from the y-values."
    ],
    problems: [
      { prompt: "What is the horizontal distance from (1, 2) to (5, 2)?", answer: "4", hint: "The y-values match, so compare x-values: 5 - 1.", label: "horizontal distance" },
      { prompt: "What is the midpoint of (0, 0) and (6, 0)?", answer: "(3,0)", answers: ["(3,0)", "3,0"], hint: "Average the x-values and average the y-values.", label: "midpoint" },
      { prompt: "A rectangle has corners (0,0), (4,0), (4,3), and (0,3). What is its area?", answer: "12", hint: "The side lengths are 4 and 3.", label: "coordinate rectangle area" }
    ]
  },
  "geometry.proof-basics": {
    id: "geometry.proof-basics",
    topic: "Geometry",
    title: "Proof basics",
    type: "concept",
    figure: "geometry-proof",
    intro: [
      "A proof explains why a conclusion must be true.",
      "Each step should have a reason, such as a definition, a given fact, or a theorem.",
      "Good proof writing moves from known information toward the claim."
    ],
    problems: [
      { prompt: "If two angles are both right angles, what can you conclude about their measures?", answer: "equal", answers: ["equal", "congruent", "same"], hint: "All right angles measure 90 degrees.", label: "right angle conclusion" },
      { prompt: "In a proof, what word describes information stated at the start?", answer: "given", hint: "A proof often begins with given information.", label: "proof starting fact" },
      { prompt: "If AB = CD and CD = EF, which property lets you conclude AB = EF?", answer: "transitive", answers: ["transitive", "transitivity", "transitiveproperty"], hint: "Equality can pass through a shared equal quantity.", label: "equality reason" }
    ]
  }
};

const trigonometryConceptWorkspaces = {
  "trigonometry.unit-circle": {
    id: "trigonometry.unit-circle",
    topic: "Trigonometry",
    title: "Unit circle",
    type: "concept",
    figure: "trig-unit-circle",
    intro: [
      "The unit circle has radius 1 and center at the origin.",
      "A point on the unit circle has coordinates (cos θ, sin θ).",
      "Special angles give exact values that are used throughout trigonometry."
    ],
    problems: [
      { prompt: "On the unit circle, what is cos 0?", answer: "1", hint: "At angle 0, the point is (1, 0).", label: "cosine at zero" },
      { prompt: "On the unit circle, what is sin 0?", answer: "0", hint: "At angle 0, the y-coordinate is 0.", label: "sine at zero" },
      { prompt: "At π/2, what is the point on the unit circle?", answer: "(0,1)", answers: ["(0,1)", "0,1"], hint: "π/2 is the top of the circle.", label: "unit circle point" }
    ]
  },
  "trigonometry.right-triangles": {
    id: "trigonometry.right-triangles",
    topic: "Trigonometry",
    title: "Right triangles",
    type: "concept",
    figure: "trig-right-triangle",
    intro: [
      "Right-triangle trigonometry compares side lengths relative to an acute angle.",
      "Sine uses opposite over hypotenuse.",
      "Cosine uses adjacent over hypotenuse, and tangent uses opposite over adjacent."
    ],
    problems: [
      { prompt: "In a right triangle, opposite = 3 and hypotenuse = 5. What is sin θ?", answer: "3/5", hint: "Sine is opposite over hypotenuse.", label: "sine ratio" },
      { prompt: "In the same triangle, adjacent = 4 and hypotenuse = 5. What is cos θ?", answer: "4/5", hint: "Cosine is adjacent over hypotenuse.", label: "cosine ratio" },
      { prompt: "If opposite = 3 and adjacent = 4, what is tan θ?", answer: "3/4", hint: "Tangent is opposite over adjacent.", label: "tangent ratio" }
    ]
  },
  "trigonometry.graphs": {
    id: "trigonometry.graphs",
    topic: "Trigonometry",
    title: "Graphs",
    type: "concept",
    figure: "trig-graphs",
    intro: [
      "Sine and cosine repeat in waves.",
      "Amplitude is the distance from the midline to a peak.",
      "The basic sine and cosine period is 2π."
    ],
    problems: [
      { prompt: "What is the amplitude of y = 3 sin x?", answer: "3", hint: "Amplitude is the coefficient size in front of sin x.", label: "sine amplitude" },
      { prompt: "What is the period of y = sin x?", answer: "2π", answers: ["2π", "2pi", "2*pi"], hint: "Basic sine repeats every 2π.", label: "sine period" },
      { prompt: "What is cos 0?", answer: "1", hint: "The cosine graph starts at 1 when x = 0.", label: "cos graph value" }
    ]
  },
  "trigonometry.identities": {
    id: "trigonometry.identities",
    topic: "Trigonometry",
    title: "Identities",
    type: "concept",
    figure: "trig-identities",
    intro: [
      "An identity is an equation that is true for every allowed input.",
      "The Pythagorean identity connects sine and cosine.",
      "Identities let you rewrite expressions without changing their value."
    ],
    problems: [
      { prompt: "Complete the identity: sin^2 x + cos^2 x = __.", answer: "1", hint: "This is the main Pythagorean identity.", label: "pythagorean identity" },
      { prompt: "Rewrite tan x using sin x and cos x.", answer: "sinx/cosx", answers: ["sinx/cosx", "sin(x)/cos(x)", "sin x/cos x"], hint: "Tangent is sine divided by cosine.", label: "tangent identity" },
      { prompt: "If sin^2 x = 1/4, what is cos^2 x?", answer: "3/4", hint: "Use sin^2 x + cos^2 x = 1.", label: "cosine squared" }
    ]
  },
  "trigonometry.inverse": {
    id: "trigonometry.inverse",
    topic: "Trigonometry",
    title: "Inverse trig",
    type: "concept",
    figure: "trig-inverse",
    intro: [
      "Inverse trig functions recover an angle from a ratio.",
      "arcsin answers the question: what angle has this sine value?",
      "Principal values keep inverse trig functions single-valued."
    ],
    problems: [
      { prompt: "What is arcsin 0?", answer: "0", hint: "sin 0 = 0.", label: "arcsine zero" },
      { prompt: "What is arccos 1?", answer: "0", hint: "cos 0 = 1.", label: "arccosine one" },
      { prompt: "What is arctan 1 in degrees?", answer: "45", answers: ["45", "45degrees"], hint: "tan 45 degrees = 1.", label: "arctangent one" }
    ]
  }
};

const precalculusConceptWorkspaces = {
  "precalculus.functions": {
    id: "precalculus.functions",
    topic: "Precalculus",
    title: "Functions",
    type: "concept",
    figure: "precalc-functions",
    intro: [
      "A function assigns each input exactly one output.",
      "Function notation names the rule and the input, such as f(x).",
      "Graphs, tables, and formulas can describe the same function."
    ],
    problems: [
      { prompt: "If f(x) = 2x + 1, what is f(3)?", answer: "7", hint: "Replace x with 3: 2 times 3 plus 1.", label: "evaluate a function" },
      { prompt: "Does a function allow one input to have two outputs?", answer: "no", answers: ["no", "false"], hint: "Each input can have only one output.", label: "function definition" },
      { prompt: "For the point (4, 9), what is the output?", answer: "9", hint: "In an ordered pair, the output is the y-value.", label: "function output" }
    ]
  },
  "precalculus.transformations": {
    id: "precalculus.transformations",
    topic: "Precalculus",
    title: "Transformations",
    type: "concept",
    figure: "precalc-transformations",
    intro: [
      "Transformations move or reshape a parent function.",
      "Adding outside the function moves the graph up or down.",
      "Changing the input inside the function moves the graph left or right."
    ],
    problems: [
      { prompt: "Compared with y = x^2, y = x^2 + 4 shifts which direction?", answer: "up", hint: "Adding 4 outside the square raises every output.", label: "vertical shift" },
      { prompt: "What is the vertex of y = (x - 2)^2 + 3?", answer: "(2,3)", answers: ["(2,3)", "2,3"], hint: "The form y = (x - h)^2 + k has vertex (h, k).", label: "parabola vertex" },
      { prompt: "Compared with y = x^2, y = (x - 5)^2 shifts right by how many units?", answer: "5", hint: "Inside subtraction shifts right.", label: "horizontal shift" }
    ]
  },
  "precalculus.polynomial-rational": {
    id: "precalculus.polynomial-rational",
    topic: "Precalculus",
    title: "Polynomial and rational functions",
    type: "concept",
    figure: "precalc-polynomial-rational",
    intro: [
      "Polynomials are built from powers of x with number coefficients.",
      "The degree is the highest power with a nonzero coefficient.",
      "Rational functions are ratios of polynomials and may have restrictions."
    ],
    problems: [
      { prompt: "What is the degree of p(x) = 4x^3 - x + 8?", answer: "3", hint: "Look for the highest exponent on x.", label: "polynomial degree" },
      { prompt: "What x-value makes x - 2 equal zero?", answer: "2", hint: "Solve x - 2 = 0.", label: "linear factor zero" },
      { prompt: "For r(x) = 1/(x - 4), what value is not allowed?", answer: "4", hint: "The denominator cannot equal zero.", label: "rational restriction" }
    ]
  },
  "precalculus.exponential-log": {
    id: "precalculus.exponential-log",
    topic: "Precalculus",
    title: "Exponential and log functions",
    type: "concept",
    figure: "precalc-exponential-log",
    intro: [
      "Exponential functions use the input as an exponent.",
      "Logarithms undo exponentials.",
      "A logarithm asks which exponent creates a given value."
    ],
    problems: [
      { prompt: "What is 2^3?", answer: "8", hint: "2 times 2 times 2 is 8.", label: "evaluate exponential" },
      { prompt: "If 2^x = 8, what is x?", answer: "3", hint: "2 to the third power is 8.", label: "solve exponential" },
      { prompt: "What is log 100 using base 10?", answer: "2", hint: "10 squared is 100.", label: "common logarithm" }
    ]
  },
  "precalculus.sequences": {
    id: "precalculus.sequences",
    topic: "Precalculus",
    title: "Sequences",
    type: "concept",
    figure: "precalc-sequences",
    intro: [
      "A sequence is an ordered list of numbers.",
      "Arithmetic sequences add the same difference each time.",
      "Geometric sequences multiply by the same ratio each time."
    ],
    problems: [
      { prompt: "What is the common difference in 4, 7, 10, 13?", answer: "3", hint: "Subtract neighboring terms.", label: "common difference" },
      { prompt: "What is the next term in 5, 10, 20, 40?", answer: "80", hint: "Each term is doubled.", label: "geometric next term" },
      { prompt: "In a geometric sequence 3, 12, 48, what is the common ratio?", answer: "4", hint: "Divide 12 by 3.", label: "common ratio" }
    ]
  },
  "precalculus.complex-numbers": {
    id: "precalculus.complex-numbers",
    topic: "Precalculus",
    title: "Complex numbers",
    type: "concept",
    figure: "precalc-complex",
    intro: [
      "Complex numbers have a real part and an imaginary part.",
      "The imaginary unit satisfies i^2 = -1.",
      "A complex number a + bi can be plotted as the point (a, b)."
    ],
    problems: [
      { prompt: "What is i^2?", answer: "-1", hint: "This is the defining property of i.", label: "imaginary unit" },
      { prompt: "What is the real part of 3 + 4i?", answer: "3", hint: "The real part is the number without i.", label: "real part" },
      { prompt: "Compute (3 + 4i) + (1 - 2i).", answer: "4+2i", answers: ["4+2i", "4+2*i"], hint: "Add real parts and imaginary parts separately.", label: "complex addition" }
    ]
  }
};

const calculusConceptWorkspaces = {
  "calculus.limits": {
    id: "calculus.limits",
    topic: "Calculus",
    title: "Limits",
    type: "concept",
    figure: "calc-limits",
    intro: [
      "A limit describes what a value approaches.",
      "The input can get close to a number without being exactly there.",
      "Limits are the foundation for derivatives, integrals, and continuity."
    ],
    problems: [
      { prompt: "As x approaches 2, what does x + 3 approach?", answer: "5", hint: "Substitute the nearby value: 2 + 3.", label: "basic limit" },
      { prompt: "As x approaches 3, what does x^2 approach?", answer: "9", hint: "Square the value being approached.", label: "square limit" },
      { prompt: "If both one-sided limits approach 4, what is the two-sided limit?", answer: "4", hint: "When left and right agree, the limit is that shared value.", label: "two-sided limit" }
    ]
  },
  "calculus.derivatives": {
    id: "calculus.derivatives",
    topic: "Calculus",
    title: "Derivatives",
    type: "concept",
    figure: "calc-derivatives",
    intro: [
      "A derivative measures instantaneous rate of change.",
      "On a graph, the derivative is the slope of the tangent line.",
      "Power rules make many polynomial derivatives quick to compute."
    ],
    problems: [
      { prompt: "Find the derivative of x^2.", answer: "2x", answers: ["2x", "2*x"], hint: "Use the power rule: bring down 2 and reduce the exponent by 1.", label: "power rule" },
      { prompt: "What is the derivative of 5x?", answer: "5", hint: "The slope of a line y = 5x is 5.", label: "linear derivative" },
      { prompt: "For y = 3x + 2, what is the slope?", answer: "3", hint: "The coefficient of x is the slope.", label: "line slope" }
    ]
  },
  "calculus.integrals": {
    id: "calculus.integrals",
    topic: "Calculus",
    title: "Integrals",
    type: "concept",
    figure: "calc-integrals",
    intro: [
      "An integral accumulates change.",
      "Definite integrals can measure area under a curve.",
      "Antiderivatives reverse derivatives and include a constant."
    ],
    problems: [
      { prompt: "What is an antiderivative of 2x?", answer: "x^2+c", answers: ["x^2+c", "x^2+C", "x^2 + C"], hint: "Differentiate x^2 and you get 2x. Add C for the constant.", label: "basic antiderivative" },
      { prompt: "What is the area under y = 2 from x = 0 to x = 3?", answer: "6", hint: "This is a rectangle: height 2 and width 3.", label: "constant integral" },
      { prompt: "What is an antiderivative of 4?", answer: "4x+c", answers: ["4x+c", "4x+C", "4*x+c", "4*x+C"], hint: "A derivative of 4x is 4.", label: "constant antiderivative" }
    ]
  },
  "calculus.applications": {
    id: "calculus.applications",
    topic: "Calculus",
    title: "Applications",
    type: "concept",
    figure: "calc-applications",
    intro: [
      "Calculus connects formulas to motion, growth, area, and optimization.",
      "Derivatives turn position into velocity and reveal local change.",
      "Integrals turn rates into accumulated totals."
    ],
    problems: [
      { prompt: "If s(t) = t^2, what is the velocity at t = 3?", answer: "6", hint: "Velocity is the derivative. The derivative of t^2 is 2t.", label: "velocity from position" },
      { prompt: "A rate is 5 units per second for 4 seconds. What total accumulates?", answer: "20", hint: "Constant rate times time gives total accumulation.", label: "accumulated total" },
      { prompt: "If a derivative changes from positive to negative, the function has a local what?", answer: "maximum", answers: ["maximum", "max"], hint: "Increasing then decreasing creates a peak.", label: "local maximum" }
    ]
  },
  "calculus.series": {
    id: "calculus.series",
    topic: "Calculus",
    title: "Series",
    type: "concept",
    figure: "calc-series",
    intro: [
      "A sequence lists terms; a series adds them.",
      "Partial sums show how much has accumulated so far.",
      "Some infinite series settle toward a finite value."
    ],
    problems: [
      { prompt: "What is the next term in 1/2, 1/4, 1/8?", answer: "1/16", hint: "Each term is half the previous term.", label: "geometric term" },
      { prompt: "What is the infinite sum 1 + 1/2 + 1/4 + ...?", answer: "2", hint: "This geometric series has first term 1 and ratio 1/2.", label: "geometric sum" },
      { prompt: "A geometric series converges when the absolute value of r is less than what number?", answer: "1", hint: "The ratio must have size less than 1.", label: "convergence condition" }
    ]
  }
};

const linearAlgebraConceptWorkspaces = {
  "linear-algebra.vectors": {
    id: "linear-algebra.vectors",
    topic: "Linear Algebra",
    title: "Vectors",
    type: "concept",
    figure: "linear-vectors",
    intro: [
      "A vector has both size and direction.",
      "In coordinates, vectors add component by component.",
      "Scalar multiplication stretches, shrinks, or reverses a vector."
    ],
    problems: [
      { prompt: "Add the vectors (2, 3) + (4, 1).", answer: "(6,4)", answers: ["(6,4)", "6,4"], hint: "Add x-components and y-components separately.", label: "vector addition" },
      { prompt: "Compute 3(2, -1).", answer: "(6,-3)", answers: ["(6,-3)", "6,-3"], hint: "Multiply each component by 3.", label: "scalar multiplication" },
      { prompt: "What is the length of the vector (3, 4)?", answer: "5", hint: "Use the distance formula: square, add, then take the square root.", label: "vector length" }
    ]
  },
  "linear-algebra.matrices": {
    id: "linear-algebra.matrices",
    topic: "Linear Algebra",
    title: "Matrices",
    type: "concept",
    figure: "linear-matrices",
    intro: [
      "A matrix is a rectangular array of numbers.",
      "Rows run horizontally and columns run vertically.",
      "Matrix-vector multiplication combines columns according to the vector entries."
    ],
    problems: [
      { prompt: "A matrix with 2 rows and 3 columns has what size?", answer: "2x3", answers: ["2x3", "2×3", "2by3"], hint: "Write rows by columns.", label: "matrix size" },
      { prompt: "For the matrix [[1, 2], [3, 4]], what is the entry in row 2, column 1?", answer: "3", hint: "Row 2 is [3, 4]; column 1 is the first entry.", label: "matrix entry" },
      { prompt: "Compute [[1, 0], [0, 1]] times (5, 7).", answer: "(5,7)", answers: ["(5,7)", "5,7"], hint: "The identity matrix leaves the vector unchanged.", label: "identity matrix" }
    ]
  },
  "linear-algebra.transformations": {
    id: "linear-algebra.transformations",
    topic: "Linear Algebra",
    title: "Transformations",
    type: "concept",
    figure: "linear-transformations",
    intro: [
      "A linear transformation sends vectors to vectors.",
      "Matrices can represent linear transformations.",
      "Scaling, rotation, reflection, and shear are common geometric examples."
    ],
    problems: [
      { prompt: "The transformation T(x, y) = (2x, 2y) does what to lengths?", answer: "doubles", answers: ["doubles", "double", "multipliesby2", "scalesby2"], hint: "Both coordinates are multiplied by 2.", label: "scaling effect" },
      { prompt: "What does T(x, y) = (-x, y) reflect across?", answer: "yaxis", answers: ["yaxis", "y-axis", "theyaxis"], hint: "Only the x-coordinate changes sign.", label: "reflection axis" },
      { prompt: "If T(1, 0) = (0, 1), where does the first basis vector land?", answer: "(0,1)", answers: ["(0,1)", "0,1"], hint: "The prompt gives the image of (1, 0) directly.", label: "basis image" }
    ]
  },
  "linear-algebra.determinants": {
    id: "linear-algebra.determinants",
    topic: "Linear Algebra",
    title: "Determinants",
    type: "concept",
    figure: "linear-determinants",
    intro: [
      "A determinant describes how a matrix scales area or volume.",
      "A zero determinant means the transformation flattens space.",
      "For a 2 by 2 matrix, the determinant is ad - bc."
    ],
    problems: [
      { prompt: "For [[2, 0], [0, 3]], what is the determinant?", answer: "6", hint: "The scaling factors are 2 and 3, so area scales by 2 times 3.", label: "diagonal determinant" },
      { prompt: "For [[1, 2], [3, 4]], compute ad - bc.", answer: "-2", hint: "Compute 1 times 4 minus 2 times 3.", label: "two by two determinant" },
      { prompt: "If a determinant is 0, is the matrix invertible?", answer: "no", answers: ["no", "false"], hint: "Zero determinant means information is flattened.", label: "invertibility check" }
    ]
  },
  "linear-algebra.eigenvalues": {
    id: "linear-algebra.eigenvalues",
    topic: "Linear Algebra",
    title: "Eigenvalues",
    type: "concept",
    figure: "linear-eigenvalues",
    intro: [
      "An eigenvector keeps its direction under a transformation.",
      "The eigenvalue tells how much that eigenvector is scaled.",
      "Eigenvectors reveal stable directions inside a linear transformation."
    ],
    problems: [
      { prompt: "If A v = 3v, what is the eigenvalue?", answer: "3", hint: "The eigenvalue is the scale factor multiplying v.", label: "eigenvalue scale" },
      { prompt: "For [[2, 0], [0, 5]], what eigenvalue belongs to the x-axis direction?", answer: "2", hint: "The x-coordinate is scaled by 2.", label: "x-axis eigenvalue" },
      { prompt: "If a vector changes direction after applying A, is it an eigenvector of A?", answer: "no", answers: ["no", "false"], hint: "Eigenvectors keep direction, though they may scale or reverse.", label: "eigenvector definition" }
    ]
  },
  "linear-algebra.vector-spaces": {
    id: "linear-algebra.vector-spaces",
    topic: "Linear Algebra",
    title: "Vector spaces",
    type: "concept",
    figure: "linear-vector-spaces",
    intro: [
      "A vector space is a set where vectors can be added and scaled.",
      "A span contains every linear combination of chosen vectors.",
      "A basis spans the space without redundant vectors."
    ],
    problems: [
      { prompt: "Do the vectors (1, 0) and (0, 1) span the plane?", answer: "yes", answers: ["yes", "true"], hint: "Any point (a, b) can be made from a(1, 0) + b(0, 1).", label: "span plane" },
      { prompt: "How many vectors are in a standard basis for R^2?", answer: "2", hint: "The plane has two independent directions.", label: "basis size" },
      { prompt: "If one vector is a multiple of another, are they independent?", answer: "no", answers: ["no", "false"], hint: "One vector can be made from the other, so it is redundant.", label: "independence check" }
    ]
  }
};

const proofsConceptWorkspaces = {
  "proofs.logic": {
    id: "proofs.logic",
    topic: "Proofs",
    title: "Logic",
    type: "concept",
    figure: "proof-logic",
    intro: [
      "Logic tracks how statements imply other statements.",
      "An implication has a hypothesis and a conclusion.",
      "A proof can use known true statements to force a new statement to be true."
    ],
    problems: [
      { prompt: "In the statement if P then Q, which part is the hypothesis?", answer: "p", answers: ["p", "P"], hint: "The hypothesis is the condition after if.", label: "identify hypothesis" },
      { prompt: "In the statement if P then Q, which part is the conclusion?", answer: "q", answers: ["q", "Q"], hint: "The conclusion is what follows then.", label: "identify conclusion" },
      { prompt: "If P implies Q and P is true, what can you conclude?", answer: "q", answers: ["q", "Q"], hint: "This is direct reasoning: the implication fires when P is true.", label: "direct implication" }
    ]
  },
  "proofs.quantifiers": {
    id: "proofs.quantifiers",
    topic: "Proofs",
    title: "Quantifiers",
    type: "concept",
    figure: "proof-quantifiers",
    intro: [
      "Quantifiers say how many objects a statement covers.",
      "For all means every object in the chosen set.",
      "There exists means at least one object works."
    ],
    problems: [
      { prompt: "Which phrase means every object: for all or there exists?", answer: "forall", answers: ["forall", "for all", "every", "all"], hint: "For all makes a claim about every case.", label: "universal quantifier" },
      { prompt: "Which phrase means at least one object works?", answer: "exists", answers: ["exists", "thereexists", "there exists", "atleastone", "at least one"], hint: "There exists only needs one example.", label: "existential quantifier" },
      { prompt: "To disprove a for all statement, what should you find?", answer: "counterexample", answers: ["counterexample", "a counterexample"], hint: "One failing case is enough.", label: "disprove universal" }
    ]
  },
  "proofs.induction": {
    id: "proofs.induction",
    topic: "Proofs",
    title: "Induction",
    type: "concept",
    figure: "proof-induction",
    intro: [
      "Induction proves a statement for every integer in a sequence.",
      "First prove the base case.",
      "Then prove that one true case forces the next case."
    ],
    problems: [
      { prompt: "In induction, what is the first case called?", answer: "base", answers: ["base", "basecase", "base case"], hint: "It anchors the proof at the starting value.", label: "base case" },
      { prompt: "After the base case, which step proves that case k implies case k + 1?", answer: "inductive", answers: ["inductive", "inductivestep", "inductive step"], hint: "This is the step that moves the proof forward.", label: "inductive step" },
      { prompt: "If P(1) is true and P(k) implies P(k + 1), what can induction prove?", answer: "all", answers: ["all", "alln", "every n", "all positive integers"], hint: "The truth moves from 1 to 2 to 3 and so on.", label: "induction conclusion" }
    ]
  },
  "proofs.contradiction": {
    id: "proofs.contradiction",
    topic: "Proofs",
    title: "Contradiction",
    type: "concept",
    figure: "proof-contradiction",
    intro: [
      "Proof by contradiction starts by assuming the opposite of the claim.",
      "The goal is to derive something impossible.",
      "Once the opposite fails, the original claim must be true."
    ],
    problems: [
      { prompt: "In a contradiction proof, do you first assume the claim or its opposite?", answer: "opposite", answers: ["opposite", "negation", "not the claim"], hint: "You temporarily suppose the claim is false.", label: "contradiction assumption" },
      { prompt: "What kind of result finishes a contradiction proof?", answer: "contradiction", answers: ["contradiction", "impossible", "false"], hint: "You show the assumption led to something impossible.", label: "contradiction finish" },
      { prompt: "If assuming not P leads to a contradiction, what can you conclude?", answer: "p", answers: ["p", "P", "p is true", "true"], hint: "The negation failed, so P remains.", label: "contradiction conclusion" }
    ]
  },
  "proofs.construction": {
    id: "proofs.construction",
    topic: "Proofs",
    title: "Construction",
    type: "concept",
    figure: "proof-construction",
    intro: [
      "A construction proof shows an object exists by building it.",
      "The object must satisfy the required conditions.",
      "After building it, verify that it really works."
    ],
    problems: [
      { prompt: "To prove there exists an even number greater than 10, is 12 a valid example?", answer: "yes", answers: ["yes", "true"], hint: "12 is even and greater than 10.", label: "valid construction" },
      { prompt: "After constructing an example, what should you do next?", answer: "verify", answers: ["verify", "check", "prove it works"], hint: "Show that the constructed object has the required properties.", label: "verify construction" },
      { prompt: "A construction proof is mainly used for which quantifier: for all or exists?", answer: "exists", answers: ["exists", "thereexists", "there exists"], hint: "Building one object proves existence.", label: "construction quantifier" }
    ]
  },
  "proofs.counterexamples": {
    id: "proofs.counterexamples",
    topic: "Proofs",
    title: "Counterexamples",
    type: "concept",
    figure: "proof-counterexamples",
    intro: [
      "A counterexample is one case that breaks a claim.",
      "Counterexamples disprove universal statements.",
      "The best counterexamples are specific and easy to check."
    ],
    problems: [
      { prompt: "Claim: every prime number is odd. Which number is a counterexample?", answer: "2", hint: "2 is prime, but it is even.", label: "prime counterexample" },
      { prompt: "Does one counterexample disprove a for all statement?", answer: "yes", answers: ["yes", "true"], hint: "Universal claims fail when even one case fails.", label: "counterexample power" },
      { prompt: "Claim: all rectangles are squares. Give side lengths for a rectangle that is not a square.", answer: "2x3", answers: ["2x3", "2×3", "2by3", "2 by 3", "3x2", "3×2", "3by2", "3 by 2"], hint: "Use unequal side lengths, such as 2 by 3.", label: "rectangle counterexample" }
    ]
  }
};

const setTheoryConceptWorkspaces = {
  "set-theory.sets-notation": {
    id: "set-theory.sets-notation",
    topic: "Set Theory",
    title: "Sets and notation",
    type: "concept",
    figure: "set-notation",
    intro: [
      "A set is a collection of objects called elements.",
      "Set notation uses braces, such as <math>A = {1, 2, 3}</math>.",
      "The symbol <math>∈</math> means is an element of, and <math>∉</math> means is not an element of."
    ],
    problems: [
      { prompt: "If <math>A = {1, 2, 3}</math>, is <math>2</math> in <math>A</math>?", answer: "yes", answers: ["yes", "true"], hint: "<math>2</math> appears inside the braces.", label: "membership check" },
      { prompt: "If <math>B = {red, blue}</math>, is green in <math>B</math>?", answer: "no", answers: ["no", "false"], hint: "Only red and blue are listed.", label: "nonmembership check" },
      { prompt: "What symbol means is an element of?", answer: "∈", answers: ["∈", "∊", "e", "E", "in", "is in", "element", "elementof", "element of", "member", "member of", "belongs", "belongs to"], hint: "Read <math>x ∈ A</math> as <math>x</math> is an element of <math>A</math>.", label: "membership symbol" }
    ]
  },
  "set-theory.subsets": {
    id: "set-theory.subsets",
    topic: "Set Theory",
    title: "Subsets and power sets",
    type: "concept",
    figure: "set-subsets",
    intro: [
      "A subset sits entirely inside another set.",
      "<math>A</math> is a subset of <math>B</math> if every element of <math>A</math> is also in <math>B</math>.",
      "The power set contains every subset of a set, including the empty set."
    ],
    problems: [
      { prompt: "Is <math>{1, 2}</math> a subset of <math>{1, 2, 3}</math>?", answer: "yes", answers: ["yes", "true"], hint: "Both <math>1</math> and <math>2</math> appear in the larger set.", label: "subset check" },
      { prompt: "How many subsets does a set with 3 elements have?", answer: "8", hint: "A set with n elements has 2^n subsets.", label: "power set size" },
      { prompt: "Is the empty set a subset of every set?", answer: "yes", answers: ["yes", "true"], hint: "There is no element in the empty set that can fail to belong.", label: "empty subset" }
    ]
  },
  "set-theory.operations": {
    id: "set-theory.operations",
    topic: "Set Theory",
    title: "Union and intersection",
    type: "concept",
    figure: "set-operations",
    intro: [
      "Union collects everything in either set.",
      "Intersection keeps only what the sets share.",
      "Complement means everything in the universe that is outside the set."
    ],
    problems: [
      { prompt: "If <math>A = {1, 2}</math> and <math>B = {2, 3}</math>, what is <math>A ∩ B</math>?", answer: "{2}", answers: ["{2}", "2"], hint: "Intersection keeps the shared element.", label: "intersection" },
      { prompt: "If <math>A = {1, 2}</math> and <math>B = {2, 3}</math>, what is <math>A ∪ B</math>?", answer: "{1,2,3}", answers: ["{1,2,3}", "1,2,3", "{1, 2, 3}"], hint: "Union keeps everything, without repeating <math>2</math>.", label: "union" },
      { prompt: "Which operation means in A or in B: union or intersection?", answer: "union", answers: ["union", "cup"], hint: "Union uses or.", label: "union meaning" }
    ]
  },
  "set-theory.cartesian-relations": {
    id: "set-theory.cartesian-relations",
    topic: "Set Theory",
    title: "Products and relations",
    type: "concept",
    figure: "set-relations",
    intro: [
      "A Cartesian product forms ordered pairs.",
      "A relation is a selected set of ordered pairs.",
      "Relations can describe matching, ordering, equivalence, or many other connections."
    ],
    problems: [
      { prompt: "If <math>A = {1, 2}</math> and <math>B = {x}</math>, how many ordered pairs are in <math>A × B</math>?", answer: "2", hint: "Each element of <math>A</math> pairs with <math>x</math>.", label: "product size" },
      { prompt: "In the ordered pair <math>(3, 5)</math>, what is the first coordinate?", answer: "3", hint: "The first coordinate is the left entry.", label: "first coordinate" },
      { prompt: "Is a relation a set of ordered pairs?", answer: "yes", answers: ["yes", "true"], hint: "A relation is usually represented by ordered pairs.", label: "relation definition" }
    ]
  },
  "set-theory.functions": {
    id: "set-theory.functions",
    topic: "Set Theory",
    title: "Functions as maps",
    type: "concept",
    figure: "set-functions",
    intro: [
      "A function is a relation with exactly one output for each allowed input.",
      "The domain is the set of inputs.",
      "The codomain is the set where outputs are allowed to land."
    ],
    problems: [
      { prompt: "Can one input of a function have two different outputs?", answer: "no", answers: ["no", "false"], hint: "A function gives each input exactly one output.", label: "function rule" },
      { prompt: "What is the set of allowed inputs called?", answer: "domain", hint: "The domain is where inputs come from.", label: "domain" },
      { prompt: "If <math>f(2) = 7</math>, what is the output for input <math>2</math>?", answer: "7", hint: "The value after the equals sign is the output.", label: "function output" }
    ]
  },
  "set-theory.countability": {
    id: "set-theory.countability",
    topic: "Set Theory",
    title: "Countability",
    type: "concept",
    figure: "set-countability",
    intro: [
      "A finite set has a specific whole-number size.",
      "An infinite set is countable when its elements can be listed in a sequence.",
      "Some infinite sets, such as the real numbers, are uncountable."
    ],
    problems: [
      { prompt: "How many elements are in {a, b, c}?", answer: "3", hint: "Count the listed elements.", label: "finite size" },
      { prompt: "Are the positive integers countable?", answer: "yes", answers: ["yes", "true"], hint: "They are already listed as 1, 2, 3, and so on.", label: "integer countability" },
      { prompt: "Are the real numbers countable?", answer: "no", answers: ["no", "false"], hint: "The real numbers cannot be fully listed in a sequence.", label: "real countability" }
    ]
  }
};

const numberTheoryConceptWorkspaces = {
  "number-theory.divisibility": {
    id: "number-theory.divisibility",
    topic: "Number Theory",
    title: "Divisibility",
    type: "concept",
    figure: "number-divisibility",
    intro: [
      "A number divides another number when there is no remainder.",
      "Divisibility turns multiplication facts into structure.",
      "The notation a | b means a divides b."
    ],
    problems: [
      { prompt: "Does 4 divide 20?", answer: "yes", answers: ["yes", "true"], hint: "20 = 4 × 5.", label: "divides twenty" },
      { prompt: "Does 6 divide 20?", answer: "no", answers: ["no", "false"], hint: "20 divided by 6 leaves a remainder.", label: "does not divide twenty" },
      { prompt: "If 3 | 18, what does the vertical bar mean?", answer: "divides", answers: ["divides", "divides evenly"], hint: "Read 3 | 18 as 3 divides 18.", label: "divisibility symbol" }
    ]
  },
  "number-theory.primes": {
    id: "number-theory.primes",
    topic: "Number Theory",
    title: "Primes and factorization",
    type: "concept",
    figure: "number-primes",
    intro: [
      "A prime number has exactly two positive factors: 1 and itself.",
      "Composite numbers can be broken into prime factors.",
      "Prime factorization describes a number using prime building blocks."
    ],
    problems: [
      { prompt: "Is 17 prime?", answer: "yes", answers: ["yes", "true"], hint: "17 is not divisible by 2, 3, or 5.", label: "prime check" },
      { prompt: "Is 21 prime?", answer: "no", answers: ["no", "false"], hint: "21 = 3 × 7.", label: "composite check" },
      { prompt: "Write 12 as a product of primes.", answer: "2*2*3", answers: ["2*2*3", "2×2×3", "2^2*3", "2^2×3"], hint: "12 = 4 × 3, and 4 = 2 × 2.", label: "prime factorization" }
    ]
  },
  "number-theory.gcd-lcm": {
    id: "number-theory.gcd-lcm",
    topic: "Number Theory",
    title: "GCD and LCM",
    type: "concept",
    figure: "number-gcd-lcm",
    intro: [
      "The greatest common divisor is the largest number that divides both numbers.",
      "The least common multiple is the smallest positive number both numbers divide.",
      "GCD and LCM organize shared factors and shared multiples."
    ],
    problems: [
      { prompt: "What is gcd(12, 18)?", answer: "6", hint: "6 is the largest number that divides both 12 and 18.", label: "gcd" },
      { prompt: "What is lcm(4, 6)?", answer: "12", hint: "12 is the first positive multiple shared by 4 and 6.", label: "lcm" },
      { prompt: "Which is about shared factors: GCD or LCM?", answer: "gcd", answers: ["gcd", "greatest common divisor"], hint: "GCD looks downward at divisors.", label: "shared factors" }
    ]
  },
  "number-theory.euclidean-algorithm": {
    id: "number-theory.euclidean-algorithm",
    topic: "Number Theory",
    title: "Euclidean algorithm",
    type: "concept",
    figure: "number-euclidean",
    intro: [
      "The Euclidean algorithm finds a GCD by repeated division with remainder.",
      "Replace the larger number by the remainder and keep going.",
      "The last nonzero remainder is the GCD."
    ],
    problems: [
      { prompt: "In 18 = 12 × 1 + 6, what is the remainder?", answer: "6", hint: "The remainder is the leftover part after 12 × 1.", label: "euclidean remainder" },
      { prompt: "After 18 = 12 × 1 + 6, what pair comes next: (12, 6) or (18, 6)?", answer: "(12,6)", answers: ["(12,6)", "12,6"], hint: "Move to the old divisor and the remainder.", label: "next euclidean pair" },
      { prompt: "If the next remainder is 0, what was the GCD in this example?", answer: "6", hint: "The last nonzero remainder is 6.", label: "euclidean gcd" }
    ]
  },
  "number-theory.modular-arithmetic": {
    id: "number-theory.modular-arithmetic",
    topic: "Number Theory",
    title: "Modular arithmetic",
    type: "concept",
    figure: "number-modular",
    intro: [
      "Modular arithmetic tracks remainders after division.",
      "Working mod n means values that differ by n are treated as equivalent.",
      "Clock arithmetic is the everyday model for modular arithmetic."
    ],
    problems: [
      { prompt: "What is 14 mod 5?", answer: "4", hint: "14 = 5 × 2 + 4.", label: "mod remainder" },
      { prompt: "On a 12-hour clock, 10 + 5 lands on what hour?", answer: "3", hint: "15 wraps around to 3.", label: "clock arithmetic" },
      { prompt: "In mod 7 arithmetic, is 9 equivalent to 2?", answer: "yes", answers: ["yes", "true"], hint: "9 and 2 differ by 7.", label: "mod equivalence" }
    ]
  },
  "number-theory.congruences": {
    id: "number-theory.congruences",
    topic: "Number Theory",
    title: "Congruences",
    type: "concept",
    figure: "number-congruences",
    intro: [
      "A congruence says two numbers have the same remainder.",
      "The notation a ≡ b mod n means n divides a - b.",
      "Congruences let equations be solved in remainder systems."
    ],
    problems: [
      { prompt: "Is 17 ≡ 2 mod 5?", answer: "yes", answers: ["yes", "true"], hint: "17 and 2 differ by 15, which is divisible by 5.", label: "congruence check" },
      { prompt: "If a ≡ b mod n, what divides a - b?", answer: "n", answers: ["n", "the modulus", "modulus"], hint: "That is the definition of congruence mod n.", label: "congruence definition" },
      { prompt: "What is the smallest nonnegative number congruent to 23 mod 6?", answer: "5", hint: "23 = 6 × 3 + 5.", label: "least residue" }
    ]
  }
};

const realAnalysisConceptWorkspaces = {
  "real-analysis.sets": {
    id: "real-analysis.sets",
    topic: "Real Analysis",
    title: "Sets",
    type: "concept",
    figure: "real-sets",
    intro: [
      "Real analysis uses sets to say exactly which numbers are under discussion.",
      "An interval contains every real number between its endpoints.",
      "Bounds describe whether a set stays below, above, or inside a range."
    ],
    problems: [
      { prompt: "Does the interval [2, 5] include 2?", answer: "yes", answers: ["yes", "true"], hint: "A square bracket means the endpoint is included.", label: "closed endpoint" },
      { prompt: "Does the interval (2, 5) include 2?", answer: "no", answers: ["no", "false"], hint: "A parenthesis means the endpoint is not included.", label: "open endpoint" },
      { prompt: "What is the smallest number in the set [2, 5]?", answer: "2", hint: "The left endpoint is included.", label: "minimum of interval" }
    ]
  },
  "real-analysis.sequences": {
    id: "real-analysis.sequences",
    topic: "Real Analysis",
    title: "Sequences",
    type: "concept",
    figure: "real-sequences",
    intro: [
      "A sequence is a list of numbers indexed by positive integers.",
      "Convergence means the terms eventually stay close to one value.",
      "The tail of a sequence matters more than its first few terms."
    ],
    problems: [
      { prompt: "What number does the sequence 1/n approach?", answer: "0", hint: "As n gets large, 1 divided by n gets close to 0.", label: "sequence limit" },
      { prompt: "Does the sequence 1, -1, 1, -1 converge?", answer: "no", answers: ["no", "false"], hint: "It keeps jumping between two values.", label: "nonconvergent sequence" },
      { prompt: "If every term after some point stays within epsilon of L, what value is the sequence approaching?", answer: "l", answers: ["l", "L"], hint: "The value named in the closeness condition is the limit.", label: "limit name" }
    ]
  },
  "real-analysis.limits": {
    id: "real-analysis.limits",
    topic: "Real Analysis",
    title: "Limits",
    type: "concept",
    figure: "real-limits",
    intro: [
      "A function limit describes output behavior near an input.",
      "The function does not need to equal the limiting value at the point.",
      "Epsilon-delta language makes the idea of getting close precise."
    ],
    problems: [
      { prompt: "As x approaches 3, what does 2x approach?", answer: "6", hint: "Use the nearby input value: 2 times 3.", label: "function limit" },
      { prompt: "Can a limit exist even if the function is undefined at that point?", answer: "yes", answers: ["yes", "true"], hint: "Limits depend on nearby values, not only the value at the point.", label: "punctured limit" },
      { prompt: "In epsilon-delta language, epsilon controls closeness of outputs or inputs?", answer: "outputs", answers: ["outputs", "output"], hint: "Epsilon measures vertical closeness to the limiting value.", label: "epsilon role" }
    ]
  },
  "real-analysis.continuity": {
    id: "real-analysis.continuity",
    topic: "Real Analysis",
    title: "Continuity",
    type: "concept",
    figure: "real-continuity",
    intro: [
      "Continuity means the function value matches the limiting value.",
      "A function can fail continuity through a hole, jump, or vertical blow-up.",
      "On intervals, continuity supports powerful existence theorems."
    ],
    problems: [
      { prompt: "If lim f(x) as x approaches a equals f(a), is f continuous at a?", answer: "yes", answers: ["yes", "true"], hint: "This is the definition of continuity at a point.", label: "continuity definition" },
      { prompt: "If a graph has a jump at x = 2, is it continuous there?", answer: "no", answers: ["no", "false"], hint: "A jump means the nearby values do not meet smoothly at one value.", label: "jump discontinuity" },
      { prompt: "For f(x) = x + 1, is f continuous at x = 0?", answer: "yes", answers: ["yes", "true"], hint: "Linear functions are continuous everywhere.", label: "linear continuity" }
    ]
  },
  "real-analysis.differentiation": {
    id: "real-analysis.differentiation",
    topic: "Real Analysis",
    title: "Differentiation",
    type: "concept",
    figure: "real-differentiation",
    intro: [
      "Differentiability is a precise version of having a tangent slope.",
      "The derivative is defined by a limit of difference quotients.",
      "Differentiability implies continuity, but continuity alone is not enough."
    ],
    problems: [
      { prompt: "If a function is differentiable at a point, is it continuous there?", answer: "yes", answers: ["yes", "true"], hint: "Differentiability is stronger than continuity.", label: "differentiability implies continuity" },
      { prompt: "Does |x| have a derivative at x = 0?", answer: "no", answers: ["no", "false"], hint: "The left and right slopes at the corner disagree.", label: "absolute value corner" },
      { prompt: "What is the derivative of x^2?", answer: "2x", answers: ["2x", "2*x"], hint: "Use the power rule.", label: "basic derivative" }
    ]
  },
  "real-analysis.integration": {
    id: "real-analysis.integration",
    topic: "Real Analysis",
    title: "Integration",
    type: "concept",
    figure: "real-integration",
    intro: [
      "Integration can be defined through sums over partitions.",
      "A partition cuts an interval into smaller pieces.",
      "Riemann sums approximate area, and the integral is the limiting value when the mesh becomes fine."
    ],
    problems: [
      { prompt: "A partition divides an interval into smaller what?", answer: "pieces", answers: ["pieces", "subintervals", "intervals"], hint: "A partition chops the interval into subintervals.", label: "partition meaning" },
      { prompt: "For a constant function f(x) = 3 on [0, 2], what is the area under the graph?", answer: "6", hint: "The rectangle has height 3 and width 2.", label: "constant integral" },
      { prompt: "Do Riemann sums approximate area using rectangles?", answer: "yes", answers: ["yes", "true"], hint: "Each subinterval contributes a rectangle-like area.", label: "riemann rectangles" }
    ]
  }
};

const abstractAlgebraConceptWorkspaces = {
  "abstract-algebra.groups": {
    id: "abstract-algebra.groups",
    topic: "Abstract Algebra",
    title: "Groups",
    type: "concept",
    figure: "abstract-groups",
    intro: [
      "A group is a set with one operation that follows specific rules.",
      "The operation must be closed, associative, have an identity, and give every element an inverse.",
      "Groups abstract symmetry, addition, and modular arithmetic."
    ],
    problems: [
      { prompt: "Under addition, what is the identity element for integers?", answer: "0", hint: "Adding 0 changes nothing.", label: "additive identity" },
      { prompt: "Under addition, what is the inverse of 5?", answer: "-5", hint: "The inverse adds with 5 to make 0.", label: "additive inverse" },
      { prompt: "If a set with an operation contains a and b but not a*b, which group rule fails?", answer: "closure", hint: "Closure means combining elements stays inside the set.", label: "closure rule" }
    ]
  },
  "abstract-algebra.rings": {
    id: "abstract-algebra.rings",
    topic: "Abstract Algebra",
    title: "Rings",
    type: "concept",
    figure: "abstract-rings",
    intro: [
      "A ring has two operations, usually called addition and multiplication.",
      "Addition behaves like an abelian group.",
      "Multiplication distributes over addition."
    ],
    problems: [
      { prompt: "How many operations does a ring have?", answer: "2", hint: "A ring has addition and multiplication.", label: "ring operations" },
      { prompt: "In a ring, multiplication distributes over which operation?", answer: "addition", hint: "Think a(b + c) = ab + ac.", label: "distributive operation" },
      { prompt: "Are the integers a ring under usual addition and multiplication?", answer: "yes", answers: ["yes", "true"], hint: "Integers support both operations and satisfy the ring rules.", label: "integer ring" }
    ]
  },
  "abstract-algebra.fields": {
    id: "abstract-algebra.fields",
    topic: "Abstract Algebra",
    title: "Fields",
    type: "concept",
    figure: "abstract-fields",
    intro: [
      "A field is a number system where addition, subtraction, multiplication, and division work well.",
      "Every nonzero element has a multiplicative inverse.",
      "The rational, real, and complex numbers are standard examples of fields."
    ],
    problems: [
      { prompt: "In a field, does every nonzero element have a multiplicative inverse?", answer: "yes", answers: ["yes", "true"], hint: "Division by nonzero elements is allowed in a field.", label: "field inverse" },
      { prompt: "Is 0 required to have a multiplicative inverse in a field?", answer: "no", answers: ["no", "false"], hint: "Division by zero is still not allowed.", label: "zero inverse" },
      { prompt: "Are the integers a field under usual operations?", answer: "no", answers: ["no", "false"], hint: "2 has no integer multiplicative inverse.", label: "integers not field" }
    ]
  },
  "abstract-algebra.homomorphisms": {
    id: "abstract-algebra.homomorphisms",
    topic: "Abstract Algebra",
    title: "Homomorphisms",
    type: "concept",
    figure: "abstract-homomorphisms",
    intro: [
      "A homomorphism is a structure-preserving map.",
      "It sends a combined input to the corresponding combination of outputs.",
      "Homomorphisms let you compare algebraic systems without ignoring their operations."
    ],
    problems: [
      { prompt: "A homomorphism is a map that preserves what?", answer: "structure", answers: ["structure", "operation", "operations"], hint: "It respects the operation, so structure is preserved.", label: "homomorphism meaning" },
      { prompt: "For an additive homomorphism f, f(a + b) equals f(a) plus what?", answer: "f(b)", answers: ["f(b)", "fb"], hint: "Preserving addition means f(a + b) = f(a) + f(b).", label: "additive homomorphism" },
      { prompt: "Does a homomorphism have to be one-to-one?", answer: "no", answers: ["no", "false"], hint: "Some homomorphisms collapse different inputs together.", label: "homomorphism injective" }
    ]
  },
  "abstract-algebra.examples-counterexamples": {
    id: "abstract-algebra.examples-counterexamples",
    topic: "Abstract Algebra",
    title: "Examples and counterexamples",
    type: "concept",
    figure: "abstract-examples",
    intro: [
      "Examples show that a definition can be satisfied.",
      "Counterexamples show exactly where a proposed claim fails.",
      "In abstract algebra, checking the operation is just as important as checking the set."
    ],
    problems: [
      { prompt: "Under usual addition, give an example of an integer identity element.", answer: "0", hint: "Adding it leaves every integer unchanged.", label: "identity example" },
      { prompt: "Why are positive integers not a group under addition: missing inverses or missing associativity?", answer: "missinginverses", answers: ["missinginverses", "missing inverses", "inverses"], hint: "The inverse of 3 under addition is -3, which is not positive.", label: "positive integer counterexample" },
      { prompt: "To disprove that every ring is a field, should you give a ring that is not a field?", answer: "yes", answers: ["yes", "true"], hint: "One ring without field division is enough.", label: "ring field counterexample" }
    ]
  }
};

const conceptWorkspaces = {
  ...arithmeticConceptWorkspaces,
  ...preAlgebraConceptWorkspaces,
  ...algebraConceptWorkspaces,
  ...geometryConceptWorkspaces,
  ...trigonometryConceptWorkspaces,
  ...precalculusConceptWorkspaces,
  ...calculusConceptWorkspaces,
  ...linearAlgebraConceptWorkspaces,
  ...proofsConceptWorkspaces,
  ...setTheoryConceptWorkspaces,
  ...numberTheoryConceptWorkspaces,
  ...realAnalysisConceptWorkspaces,
  ...abstractAlgebraConceptWorkspaces
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
  "Linear Algebra": { id: "linear-algebra.placeholders", title: "Vector spaces", status: "planned" },
  "Set Theory": { id: "set-theory.placeholders", title: "Sets and relations", status: "planned" },
  "Number Theory": { id: "number-theory.placeholders", title: "Divisibility and congruence", status: "planned" },
  "Real Analysis": { id: "real-analysis.placeholders", title: "Definitions and proofs", status: "planned" },
  "Abstract Algebra": { id: "abstract-algebra.placeholders", title: "Groups and examples", status: "planned" },
  "Proofs": { id: "proofs.placeholders", title: "Proof construction", status: "planned" }
};

const state = {
  progress: loadProgress(),
  scratchpads: loadScratchpads(),
  activeSurface: "learn",
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

const multiplicationProblemSet = [
  { top: 247, bottom: 386 },
  { top: 318, bottom: 274 },
  { top: 529, bottom: 643 },
  { top: 764, bottom: 159 },
  { top: 406, bottom: 582 },
  { top: 913, bottom: 248 },
  { top: 670, bottom: 395 },
  { top: 125, bottom: 904 }
];

const additionProblemSet = [
  { top: 486, bottom: 257 },
  { top: 738, bottom: 164 },
  { top: 509, bottom: 286 },
  { top: 672, bottom: 459 },
  { top: 94, bottom: 728 },
  { top: 805, bottom: 96 },
  { top: 357, bottom: 648 },
  { top: 999, bottom: 1 }
];

const subtractionProblemSet = [
  { top: 645, bottom: 278 },
  { top: 732, bottom: 458 },
  { top: 804, bottom: 257 },
  { top: 900, bottom: 468 },
  { top: 701, bottom: 389 },
  { top: 610, bottom: 124 },
  { top: 530, bottom: 275 },
  { top: 986, bottom: 497 },
  { top: 100, bottom: 57 },
  { top: 405, bottom: 198 }
];

const divisionProblemSet = [
  { top: 864, bottom: 4 },
  { top: 144, bottom: 12 },
  { top: 168, bottom: 14 },
  { top: 276, bottom: 23 },
  { top: 693, bottom: 3 },
  { top: 848, bottom: 8 },
  { top: 735, bottom: 5 },
  { top: 954, bottom: 9 },
  { top: 672, bottom: 6 },
  { top: 707, bottom: 7 },
  { top: 816, bottom: 4 }
];

const divisionRemainderProblemSet = [
  { top: 865, bottom: 4 },
  { top: 145, bottom: 12 },
  { top: 170, bottom: 14 },
  { top: 278, bottom: 23 },
  { top: 694, bottom: 3 },
  { top: 850, bottom: 8 },
  { top: 737, bottom: 5 },
  { top: 958, bottom: 9 },
  { top: 674, bottom: 6 },
  { top: 710, bottom: 7 },
  { top: 819, bottom: 4 }
];

supplementFoundationalPractice();
supplementBroadPractice();

function supplementFoundationalPractice() {
  additionProblemSet.push(
    { top: 148, bottom: 236 },
    { top: 275, bottom: 319 },
    { top: 406, bottom: 357 },
    { top: 680, bottom: 145 },
    { top: 59, bottom: 864 },
    { top: 708, bottom: 292 },
    { top: 471, bottom: 528 },
    { top: 826, bottom: 75 }
  );

  subtractionProblemSet.push(
    { top: 842, bottom: 367 },
    { top: 756, bottom: 289 },
    { top: 603, bottom: 178 },
    { top: 950, bottom: 456 },
    { top: 520, bottom: 89 },
    { top: 904, bottom: 627 }
  );

  multiplicationProblemSet.push(
    { top: 142, bottom: 236 },
    { top: 305, bottom: 418 },
    { top: 760, bottom: 204 },
    { top: 629, bottom: 317 },
    { top: 480, bottom: 625 },
    { top: 831, bottom: 406 }
  );

  divisionProblemSet.push(
    { top: 936, bottom: 6 },
    { top: 816, bottom: 12 },
    { top: 988, bottom: 13 },
    { top: 672, bottom: 21 },
    { top: 792, bottom: 18 },
    { top: 945, bottom: 15 }
  );

  divisionRemainderProblemSet.push(
    { top: 937, bottom: 6 },
    { top: 817, bottom: 12 },
    { top: 989, bottom: 13 },
    { top: 673, bottom: 21 },
    { top: 793, bottom: 18 },
    { top: 946, bottom: 15 }
  );

  addPractice("arithmetic.fractions", [
    { prompt: "Simplify 9/12.", answer: "3/4", hint: "Divide the top and bottom by 3.", label: "simplified fraction", feedback: "Look for a common factor in the numerator and denominator." },
    { prompt: "What is 3/5 of 20?", answer: "12", hint: "One fifth of 20 is 4, so three fifths is 12.", label: "fraction of a number", feedback: "Find one equal part first, then multiply by the numerator." },
    { prompt: "Which is larger: 2/3 or 2/5?", answer: "2/3", hint: "With the same numerator, smaller parts make a smaller fraction.", label: "larger fraction", feedback: "Compare the size of each part when the numerators match." },
    { prompt: "Complete: 1/2 = __/8.", answer: "4", hint: "Multiply the denominator by 4, so multiply the numerator by 4.", label: "equivalent fraction", feedback: "Use the same scale factor on the top and bottom." },
    { prompt: "What is 1/3 + 1/3?", answer: "2/3", hint: "The denominators match, so add the numerators.", label: "like denominator sum", feedback: "When denominators match, keep the denominator and add the numerators." }
  ]);

  addPractice("arithmetic.decimals", [
    { prompt: "What is 0.25 + 0.50?", answer: "0.75", answers: ["0.75", ".75"], hint: "Add hundredths: 25 hundredths plus 50 hundredths.", label: "decimal sum", feedback: "Line up place values before adding." },
    { prompt: "Write 7 hundredths as a decimal.", answer: "0.07", answers: ["0.07", ".07"], hint: "Hundredths use two places after the decimal point.", label: "hundredths decimal", feedback: "Hundredths need two decimal places." },
    { prompt: "Which is larger: 0.62 or 0.7?", answer: "0.7", answers: ["0.7", "0.70"], hint: "0.7 is the same as 0.70.", label: "larger decimal", feedback: "Compare using the same number of decimal places." },
    { prompt: "What is 3.4 - 1.2?", answer: "2.2", hint: "Subtract tenths from tenths and ones from ones.", label: "decimal difference", feedback: "Line up the decimal points." }
  ]);

  addPractice("arithmetic.percents", [
    { prompt: "What is 50% of 90?", answer: "45", hint: "50% is half.", label: "fifty percent", feedback: "Translate the percent into a familiar fraction." },
    { prompt: "What is 20% of 60?", answer: "12", hint: "10% is 6, so 20% is 12.", label: "twenty percent", feedback: "Find 10% first if that is easier." },
    { prompt: "Write 0.35 as a percent.", answer: "35%", answers: ["35%", "35"], hint: "0.35 is 35 hundredths.", label: "decimal to percent", feedback: "Move from decimal hundredths to percent." },
    { prompt: "Write 75% as a decimal.", answer: "0.75", answers: ["0.75", ".75"], hint: "75% means 75 out of 100.", label: "percent to decimal", feedback: "Percent means per hundred." }
  ]);

  addPractice("arithmetic.ratios", [
    { prompt: "Simplify the ratio 8:12.", answer: "2:3", hint: "Divide both parts by 4.", label: "simplified ratio", feedback: "Divide both sides of the ratio by the same number." },
    { prompt: "Complete the equivalent ratio: 5:6 = 10:__.", answer: "12", hint: "5 became 10 by multiplying by 2.", label: "equivalent ratio", feedback: "Use the same scale factor on both parts." },
    { prompt: "If 3:7 scales by 5, what is the new second number?", answer: "35", hint: "Multiply the second part by 5.", label: "scaled ratio part", feedback: "Scale both parts by the same factor." },
    { prompt: "Simplify 15:25.", answer: "3:5", hint: "Divide both parts by 5.", label: "simplified ratio", feedback: "Look for the greatest common factor." }
  ]);

  addPractice("prealgebra.integers", [
    { prompt: "What is -8 + 3?", answer: "-5", hint: "Move 3 steps right from -8.", label: "integer addition", feedback: "Use the number line direction: adding moves right." },
    { prompt: "What is -5 - 6?", answer: "-11", hint: "Move 6 steps left from -5.", label: "integer subtraction", feedback: "Subtracting a positive moves left." },
    { prompt: "What is -6 x -4?", answer: "24", hint: "Same signs make a positive product.", label: "integer product", feedback: "Check the sign rule first, then multiply." },
    { prompt: "What is 42 / -7?", answer: "-6", hint: "Different signs make a negative quotient.", label: "integer quotient", feedback: "Different signs give a negative result." }
  ]);

  addPractice("prealgebra.expressions", [
    { prompt: "Simplify: 4y + 2y.", answer: "6y", hint: "Both terms are y terms.", label: "combined expression", feedback: "Only combine terms with the same variable part." },
    { prompt: "Simplify: 8m - 3m + 2.", answer: "5m+2", answers: ["5m+2", "2+5m"], hint: "Combine the m terms and keep the constant.", label: "combined expression", feedback: "Constants and variable terms are different kinds of terms." },
    { prompt: "Evaluate 2p + 5 when p = 6.", answer: "17", hint: "2 times 6 plus 5.", label: "expression value", feedback: "Substitute first, then follow order of operations." },
    { prompt: "Simplify: 3a + 4 + a + 6.", answer: "4a+10", answers: ["4a+10", "10+4a"], hint: "Combine a terms, then constants.", label: "combined expression", feedback: "Group like terms before adding." }
  ]);

  addPractice("prealgebra.exponents", [
    { prompt: "Evaluate 4^2.", answer: "16", hint: "4 squared means 4 x 4.", label: "power value", feedback: "The exponent counts repeated factors, not addition." },
    { prompt: "Evaluate 10^4.", answer: "10000", hint: "Use four factors of 10.", label: "power of ten", feedback: "A power of 10 has as many zeros as the exponent." },
    { prompt: "Write 5 x 5 x 5 as a power.", answer: "5^3", answers: ["5^3", "5³"], hint: "There are three factors of 5.", label: "power notation", feedback: "The repeated factor is the base; the count is the exponent." },
    { prompt: "Evaluate 2^3 + 1.", answer: "9", hint: "2^3 is 8, then add 1.", label: "exponent expression value", feedback: "Evaluate the exponent before adding." }
  ]);

  addPractice("algebra.polynomials", [
    { prompt: "Combine like terms: 6x^2 - 2x^2 + x.", answer: "4x^2+x", answers: ["4x^2+x", "x+4x^2"], hint: "Combine only the x^2 terms.", label: "combined polynomial", feedback: "Match both variable and exponent before combining." },
    { prompt: "What is the degree of 7x^4 + 2x^2 - 1?", answer: "4", hint: "Find the largest exponent.", label: "polynomial degree", feedback: "Degree is about the highest power after simplifying." },
    { prompt: "Evaluate x^2 - x when x = 5.", answer: "20", hint: "25 - 5 = 20.", label: "polynomial value", feedback: "Substitute the value for every x first." }
  ]);

  addPractice("algebra.rational-expressions", [
    { prompt: "Simplify: 10x / 15.", answer: "2x/3", answers: ["2x/3", "(2x)/3"], hint: "Divide numerator and denominator by 5.", label: "reduced rational expression", feedback: "Reduce common numerical factors." },
    { prompt: "For 1 / (x + 4), what value of x is not allowed?", answer: "-4", hint: "The denominator cannot equal zero.", label: "excluded value", feedback: "Set the denominator equal to zero to find the excluded value." },
    { prompt: "Simplify: (x^2 - 4) / (x - 2).", answer: "x+2", hint: "Factor x^2 - 4 as (x - 2)(x + 2).", label: "simplified rational expression", feedback: "Factor first, then cancel common factors." }
  ]);

  addEquationPractice("prealgebra.equations", [
    { a: 1, b: -4, c: 9 },
    { a: 4, b: 0, c: 28 },
    { a: 3, b: -6, c: 15 },
    { a: -2, b: 0, c: 18 }
  ]);

  addEquationPractice("prealgebra.inequalities", [
    { a: 1, b: -3, relation: ">=", c: 4 },
    { a: 3, b: 0, relation: ">", c: 12 },
    { a: -2, b: 0, relation: ">=", c: 8 },
    { a: 2, b: 5, relation: "<", c: 17 }
  ]);

  addEquationPractice("algebra.linear-equations", [
    { a: 3, b: 6, c: 21 },
    { a: -4, b: 8, c: -12 },
    { a: 7, b: -2, c: 26 },
    { a: 2, b: -9, c: 5 }
  ]);
}

function addPractice(workspaceId, problems) {
  conceptWorkspaces[workspaceId]?.problems.push(...problems);
}

function addEquationPractice(workspaceId, problems) {
  conceptWorkspaces[workspaceId]?.problems.push(...problems);
}

function supplementBroadPractice() {
  addPractice("arithmetic.place-value", [
    { prompt: "In 735, what is the value of the 7?", answer: "700", hint: "The 7 is in the hundreds place.", label: "value of 7", feedback: "Name the place first, then write the digit's value." },
    { prompt: "Complete: 864 = 800 + __ + 4.", answer: "60", hint: "The 6 is in the tens place.", label: "expanded tens term", feedback: "The tens digit contributes groups of ten." },
    { prompt: "In 902, what digit is in the ones place?", answer: "2", hint: "The ones place is the rightmost digit.", label: "ones digit", feedback: "Read the places from right to left: ones, tens, hundreds." },
    { prompt: "Write 300 + 40 + 9 as a number.", answer: "349", hint: "Put the hundreds, tens, and ones together.", label: "standard form", feedback: "Expanded form names each place value separately." }
  ]);

  addPractice("arithmetic.number-sense", [
    { prompt: "Which is larger: 681 or 618?", answer: "681", hint: "The hundreds match, so compare the tens digits.", label: "larger number", feedback: "Compare from left to right." },
    { prompt: "What is 241 closest to: 200, 300, or 400?", answer: "200", hint: "241 is 41 away from 200 and 59 away from 300.", label: "closest hundred", feedback: "Use distance from nearby friendly numbers." },
    { prompt: "Fill the missing number: 210, 220, 230, __.", answer: "240", hint: "Each step adds 10.", label: "next number", feedback: "Find the repeated change between terms." },
    { prompt: "Which number is between 500 and 600: 489, 531, or 604?", answer: "531", hint: "531 is greater than 500 and less than 600.", label: "number between", feedback: "Check both boundaries." }
  ]);

  addPractice("arithmetic.estimation", [
    { prompt: "Estimate 604 + 197 by rounding to hundreds.", answer: "800", hint: "604 is about 600, and 197 is about 200.", label: "rounded sum", feedback: "Round to numbers that are easy to add." },
    { prompt: "Estimate 52 x 7 using 50 x 7.", answer: "350", hint: "50 x 7 is a close check.", label: "estimated product", feedback: "Use a nearby friendly number." },
    { prompt: "Is 919 - 102 closer to 800 or 900?", answer: "800", hint: "919 - 100 is about 819.", label: "closer estimate", feedback: "Estimate before doing exact subtraction." },
    { prompt: "Estimate 31 x 19 using 30 x 20.", answer: "600", hint: "30 x 20 is a nearby easy product.", label: "two-factor estimate", feedback: "Round both factors when exact precision is not needed." }
  ]);

  addPractice("geometry.angles", [
    { prompt: "Two adjacent angles make a straight line. One is 45 degrees. What is the other?", answer: "135", answers: ["135", "135degrees"], hint: "Straight line angles add to 180.", label: "missing angle", feedback: "Subtract the known angle from 180." },
    { prompt: "What kind of angle is 30 degrees: acute, right, or obtuse?", answer: "acute", hint: "Acute angles are less than 90 degrees.", label: "angle type", feedback: "Compare the measure to 90 degrees." },
    { prompt: "What kind of angle is 140 degrees?", answer: "obtuse", hint: "Obtuse angles are greater than 90 and less than 180 degrees.", label: "angle type", feedback: "Classify by size." }
  ]);

  addPractice("geometry.triangles", [
    { prompt: "A triangle has angles 40 degrees and 65 degrees. What is the third angle?", answer: "75", answers: ["75", "75degrees"], hint: "Subtract 40 and 65 from 180.", label: "third angle", feedback: "Triangle angles always total 180 degrees." },
    { prompt: "A triangle with two equal sides is called what?", answer: "isosceles", hint: "Two equal sides means isosceles.", label: "triangle type", feedback: "Match the side pattern to the name." },
    { prompt: "Can a triangle have angles 90, 60, and 40 degrees?", answer: "no", answers: ["no", "false"], hint: "Those angles add to 190.", label: "triangle possibility", feedback: "Check whether the angles add to 180." }
  ]);

  addPractice("geometry.circles", [
    { prompt: "A circle has radius 7. What is its diameter?", answer: "14", hint: "The diameter is twice the radius.", label: "diameter", feedback: "Double the radius." },
    { prompt: "A circle has diameter 18. What is its radius?", answer: "9", hint: "The radius is half the diameter.", label: "radius", feedback: "Halve the diameter." },
    { prompt: "Using C = πd, what is the circumference of a circle with diameter 8?", answer: "8π", answers: ["8π", "8pi", "8*pi", "8×π"], hint: "Leave the answer exact as 8π.", label: "circumference", feedback: "Multiply π by the diameter." }
  ]);

  addPractice("geometry.area-volume", [
    { prompt: "What is the area of a rectangle with length 9 and width 4?", answer: "36", hint: "Rectangle area is length times width.", label: "rectangle area", feedback: "Multiply the two side lengths." },
    { prompt: "A triangle has base 12 and height 5. What is its area?", answer: "30", hint: "Use half of base times height.", label: "triangle area", feedback: "Take half after multiplying base and height." },
    { prompt: "What is the volume of a rectangular prism with dimensions 3, 4, and 6?", answer: "72", hint: "Multiply all three dimensions.", label: "prism volume", feedback: "Volume uses three dimensions." }
  ]);

  addPractice("geometry.coordinate", [
    { prompt: "What is the vertical distance from (2, 1) to (2, 6)?", answer: "5", hint: "The x-values match, so compare y-values.", label: "vertical distance", feedback: "Subtract the smaller coordinate from the larger one." },
    { prompt: "What is the midpoint of (2, 4) and (8, 4)?", answer: "(5,4)", answers: ["(5,4)", "5,4"], hint: "Average the x-values and average the y-values.", label: "midpoint", feedback: "Midpoint means average each coordinate." },
    { prompt: "A rectangle has side lengths 5 and 2 on the coordinate grid. What is its area?", answer: "10", hint: "Area is length times width.", label: "coordinate rectangle area", feedback: "Use the side lengths after reading the grid." }
  ]);

  addPractice("trigonometry.unit-circle", [
    { prompt: "On the unit circle, what is sin π/2?", answer: "1", hint: "At π/2, the point is at the top of the circle.", label: "sine at pi over two", feedback: "Sine is the y-coordinate on the unit circle." },
    { prompt: "At π, what is the point on the unit circle?", answer: "(-1,0)", answers: ["(-1,0)", "-1,0"], hint: "π is the leftmost point on the unit circle.", label: "unit circle point", feedback: "Move halfway around the circle from (1, 0)." },
    { prompt: "On the unit circle, what is cos π?", answer: "-1", hint: "At π, the x-coordinate is -1.", label: "cosine at pi", feedback: "Cosine is the x-coordinate." }
  ]);

  addPractice("trigonometry.right-triangles", [
    { prompt: "In a right triangle, opposite = 5 and hypotenuse = 13. What is sin θ?", answer: "5/13", hint: "Sine is opposite over hypotenuse.", label: "sine ratio", feedback: "Use the side relative to the chosen angle." },
    { prompt: "If adjacent = 12 and hypotenuse = 13, what is cos θ?", answer: "12/13", hint: "Cosine is adjacent over hypotenuse.", label: "cosine ratio", feedback: "Cosine uses the side next to the angle." },
    { prompt: "If opposite = 5 and adjacent = 12, what is tan θ?", answer: "5/12", hint: "Tangent is opposite over adjacent.", label: "tangent ratio", feedback: "Tangent does not use the hypotenuse." }
  ]);

  addPractice("trigonometry.graphs", [
    { prompt: "What is the amplitude of y = 4 cos x?", answer: "4", hint: "Amplitude is the coefficient size in front of cos x.", label: "cosine amplitude", feedback: "Use the absolute value of the multiplier." },
    { prompt: "What is the period of y = cos x?", answer: "2π", answers: ["2π", "2pi", "2*pi"], hint: "Basic cosine repeats every 2π.", label: "cosine period", feedback: "Basic sine and cosine share the same period." },
    { prompt: "What is sin 0?", answer: "0", hint: "The sine graph starts at 0.", label: "sine graph value", feedback: "Use the unit circle or the graph." }
  ]);

  addPractice("trigonometry.identities", [
    { prompt: "If cos^2 x = 1/9, what is sin^2 x?", answer: "8/9", hint: "Use sin^2 x + cos^2 x = 1.", label: "sine squared", feedback: "Subtract the known squared value from 1." },
    { prompt: "Complete: 1 + tan^2 x = __.", answer: "sec^2x", answers: ["sec^2x", "sec^2 x", "sec²x"], hint: "This is a Pythagorean identity.", label: "secant identity", feedback: "This identity pairs tangent with secant." },
    { prompt: "Rewrite cot x using cos x and sin x.", answer: "cosx/sinx", answers: ["cosx/sinx", "cos(x)/sin(x)", "cos x/sin x"], hint: "Cotangent is cosine divided by sine.", label: "cotangent identity", feedback: "Cotangent is the reciprocal of tangent." }
  ]);

  addPractice("precalculus.functions", [
    { prompt: "If f(x) = x^2 - 1, what is f(4)?", answer: "15", hint: "Replace x with 4.", label: "evaluate a function", feedback: "Substitute the input wherever x appears." },
    { prompt: "For the point (-2, 5), what is the input?", answer: "-2", hint: "The input is the x-value.", label: "function input", feedback: "Ordered pairs are written as input, output." },
    { prompt: "Can a vertical line hit the graph of a function twice?", answer: "no", answers: ["no", "false"], hint: "That would give one input two outputs.", label: "vertical line test", feedback: "Functions need one output per input." }
  ]);

  addPractice("precalculus.transformations", [
    { prompt: "Compared with y = x^2, y = x^2 - 6 shifts which direction?", answer: "down", hint: "Subtracting outside lowers every output.", label: "vertical shift", feedback: "Outside changes affect y-values." },
    { prompt: "What is the vertex of y = (x + 1)^2 - 4?", answer: "(-1,-4)", answers: ["(-1,-4)", "-1,-4"], hint: "Use y = (x - h)^2 + k.", label: "parabola vertex", feedback: "Inside plus means the h-value is negative." },
    { prompt: "Compared with y = x^2, y = (x + 3)^2 shifts left by how many units?", answer: "3", hint: "Inside addition shifts left.", label: "horizontal shift", feedback: "Horizontal shifts feel opposite inside parentheses." }
  ]);

  addPractice("calculus.limits", [
    { prompt: "As x approaches 5, what does x - 2 approach?", answer: "3", hint: "Substitute the nearby value: 5 - 2.", label: "basic limit", feedback: "For continuous simple expressions, direct substitution works." },
    { prompt: "As x approaches -1, what does x^2 approach?", answer: "1", hint: "Square -1.", label: "square limit", feedback: "Use the value being approached." },
    { prompt: "If the left-hand limit is 2 and the right-hand limit is 3, does the two-sided limit exist?", answer: "no", answers: ["no", "false"], hint: "The two sides must agree.", label: "two-sided limit", feedback: "Compare the two one-sided limits." }
  ]);

  addPractice("calculus.derivatives", [
    { prompt: "Find the derivative of x^3.", answer: "3x^2", answers: ["3x^2", "3*x^2"], hint: "Bring down 3 and reduce the exponent by 1.", label: "power rule", feedback: "Use the power rule." },
    { prompt: "What is the derivative of 7x?", answer: "7", hint: "The slope of y = 7x is 7.", label: "linear derivative", feedback: "The coefficient of x is the slope." },
    { prompt: "For y = -2x + 9, what is the slope?", answer: "-2", hint: "The coefficient of x is -2.", label: "line slope", feedback: "Read the coefficient of x." }
  ]);

  addPractice("calculus.integrals", [
    { prompt: "What is an antiderivative of 3x^2?", answer: "x^3+c", answers: ["x^3+c", "x^3+C", "x^3 + C"], hint: "Differentiate x^3 to get 3x^2.", label: "basic antiderivative", feedback: "Reverse the power rule." },
    { prompt: "What is the area under y = 4 from x = 0 to x = 5?", answer: "20", hint: "This is a rectangle: height 4 and width 5.", label: "constant integral", feedback: "For a constant function, multiply height by width." },
    { prompt: "What is an antiderivative of 9?", answer: "9x+c", answers: ["9x+c", "9x+C", "9*x+c", "9*x+C"], hint: "A derivative of 9x is 9.", label: "constant antiderivative", feedback: "Constants integrate to constant times x plus C." }
  ]);

  addPractice("linear-algebra.vectors", [
    { prompt: "Add the vectors (1, 5) + (3, -2).", answer: "(4,3)", answers: ["(4,3)", "4,3"], hint: "Add x-components and y-components separately.", label: "vector addition", feedback: "Vectors add component by component." },
    { prompt: "Compute -2(3, 4).", answer: "(-6,-8)", answers: ["(-6,-8)", "-6,-8"], hint: "Multiply each component by -2.", label: "scalar multiplication", feedback: "A negative scalar also reverses direction." },
    { prompt: "What is the length of the vector (5, 12)?", answer: "13", hint: "Use the 5-12-13 right triangle.", label: "vector length", feedback: "Square, add, then take the square root." }
  ]);

  addPractice("proofs.logic", [
    { prompt: "In the statement if A then B, which part is the conclusion?", answer: "b", answers: ["b", "B"], hint: "The conclusion follows then.", label: "identify conclusion", feedback: "Separate the if part from the then part." },
    { prompt: "If A implies B and B is false, what can you conclude about A?", answer: "false", answers: ["false", "a is false", "not a", "¬a"], hint: "If A were true, B would have to be true.", label: "contrapositive reasoning", feedback: "This is reasoning by contrapositive." },
    { prompt: "What word joins two statements so both must be true?", answer: "and", answers: ["and", "conjunction"], hint: "A and B requires both pieces.", label: "logical and", feedback: "Conjunction means both." }
  ]);

  addPractice("set-theory.sets-notation", [
    { prompt: "If <math>C = {4, 5, 6}</math>, is <math>7</math> in <math>C</math>?", answer: "no", answers: ["no", "false"], hint: "<math>7</math> is not listed inside the braces.", label: "nonmembership check", feedback: "Check the listed elements." },
    { prompt: "If <math>D = {a, b}</math>, is <math>a</math> in <math>D</math>?", answer: "yes", answers: ["yes", "true"], hint: "<math>a</math> is listed inside the braces.", label: "membership check", feedback: "Membership means appears as an element." },
    { prompt: "What symbol means is not an element of?", answer: "∉", answers: ["∉", "notin", "not in", "is not in"], hint: "It is the membership symbol with a slash.", label: "nonmembership symbol", feedback: "Use the slashed membership symbol." }
  ]);

  addPractice("number-theory.modular-arithmetic", [
    { prompt: "What is 17 mod 6?", answer: "5", hint: "17 = 6 × 2 + 5.", label: "mod remainder", feedback: "Find the remainder after division." },
    { prompt: "On a 12-hour clock, 8 + 7 lands on what hour?", answer: "3", hint: "15 wraps around to 3.", label: "clock arithmetic", feedback: "Subtract 12 after passing 12." },
    { prompt: "In mod 5 arithmetic, is 12 equivalent to 2?", answer: "yes", answers: ["yes", "true"], hint: "12 and 2 differ by 10.", label: "mod equivalence", feedback: "Numbers are equivalent mod n when their difference is divisible by n." }
  ]);

  addPractice("real-analysis.sequences", [
    { prompt: "What number does the sequence 2/n approach?", answer: "0", hint: "As n gets large, 2 divided by n gets close to 0.", label: "sequence limit", feedback: "A fixed numerator over growing n tends to 0." },
    { prompt: "Does the sequence 1, 1, 1, 1 converge?", answer: "yes", answers: ["yes", "true"], hint: "It stays at one value.", label: "constant sequence", feedback: "A constant sequence converges to that constant." },
    { prompt: "If a sequence approaches 7, what is its limit?", answer: "7", hint: "The limit is the value approached by the terms.", label: "limit value", feedback: "Name the destination value." }
  ]);

  addPractice("abstract-algebra.groups", [
    { prompt: "Under multiplication, what is the identity element for nonzero real numbers?", answer: "1", hint: "Multiplying by 1 changes nothing.", label: "multiplicative identity", feedback: "The identity leaves elements unchanged." },
    { prompt: "Under addition, what is the inverse of -8?", answer: "8", hint: "-8 plus 8 is 0.", label: "additive inverse", feedback: "Find the element that combines to make the identity." },
    { prompt: "If combining two elements always stays in the set, which rule is being checked?", answer: "closure", hint: "Closure keeps results inside the set.", label: "closure rule", feedback: "Closure is about staying inside." }
  ]);
}

const els = {};

document.addEventListener("DOMContentLoaded", () => {
  cacheElements();
  if (els.appVersion) els.appVersion.textContent = `v${APP_VERSION}`;
  state.activeSurface = state.scratchpads.activeSurface || "learn";
  state.activeTopic = state.progress.currentTopic || "Arithmetic";
  state.activeWorkspaceId = state.progress.currentWorkspaceId || "arithmetic.long-addition.3x3";
  state.mode = state.progress.preferences.mode || "guided";
  renderSurface();
  renderTopics();
  renderWorkspace();
  renderScratchpad();
  bindEvents();
  updateProgressPanel();
});

function cacheElements() {
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
  els.scratchpadSurface = document.querySelector("#scratchpadSurface");
  els.lessonPanel = document.querySelector("#lessonPanel");
  els.scratchpadPanel = document.querySelector("#scratchpadPanel");
  els.scratchpadInput = document.querySelector("#scratchpadInput");
  els.scratchpadPreview = document.querySelector("#scratchpadPreview");
  els.scratchpadList = document.querySelector("#scratchpadList");
  els.scratchpadStatus = document.querySelector("#scratchpadStatus");
  els.newScratchpad = document.querySelector("#newScratchpad");
  els.renameScratchpad = document.querySelector("#renameScratchpad");
  els.copyScratchPlain = document.querySelector("#copyScratchPlain");
  els.copyScratchLatex = document.querySelector("#copyScratchLatex");
  els.copyScratchMarkdown = document.querySelector("#copyScratchMarkdown");
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

function createId(prefix) {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

function uniqueList(items) {
  return [...new Set(items.filter(Boolean))];
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
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress, null, 2));
  updateProgressPanel();
}

function renderTopics() {
  els.topicList.innerHTML = "";
  for (const group of topicGroups) {
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
  drawOverlays();
  updateStepText();
}

function workspaceStartStatus(workspace) {
  if (workspace.type === "concept") return "Enter the answer, then check it.";
  if (["equation", "inequality", "system", "factoring", "quadratic"].includes(workspace.type)) {
    return "Enter the active step, then check it.";
  }
  return "Place the first digit in the active box.";
}

function setWorkspaceView(view) {
  const isIntro = view === "intro";
  const isProblem = view === "problem";
  els.lessonIntro.hidden = !isIntro;
  els.setupPanel.hidden = !isProblem;
  els.status.hidden = !isProblem;
  els.gridShell.hidden = !isProblem;
  els.workspaceTools.hidden = !isProblem;
}

function renderSurface() {
  const isScratchpad = state.activeSurface === "scratchpad";
  els.lessonPanel.hidden = isScratchpad;
  els.scratchpadPanel.hidden = !isScratchpad;
  els.learnSurface.setAttribute("aria-pressed", isScratchpad ? "false" : "true");
  els.scratchpadSurface.setAttribute("aria-pressed", isScratchpad ? "true" : "false");
  if (isScratchpad) {
    els.scratchpadInput?.focus({ preventScroll: true });
  }
}

function setSurface(surface) {
  state.activeSurface = surface;
  state.scratchpads.activeSurface = surface;
  saveScratchpads();
  renderSurface();
  if (surface === "scratchpad") renderScratchpad();
}

function renderIntroWorkspace(workspace) {
  setWorkspaceView("intro");
  els.overlay.innerHTML = "";
  state.currentModel = null;
  els.introTitle.textContent = "Overview";
  renderIntroCopy(workspace);
  els.stepText.textContent = `Read the ${workspace.title.toLowerCase()} overview, then start a problem.`;
}

function renderIntroCopy(workspace) {
  const intros = {
    addition: [
      "Start at the ones column and move left.",
      "Add the two digits in the active column, plus any carry already above that column.",
      "Write the ones digit in the sum row. If the column total is 10 or more, place the carry above the next column.",
      "At the last column, bring down any final carry."
    ],
    subtraction: [
      "Start at the ones column and move left.",
      "If the top digit is large enough, subtract the lower digit and write the difference.",
      "If the top digit is too small, borrow from the next available column on the left.",
      "A digit that lends is crossed out and replaced with its reduced value. A digit that receives ten gets a small 1 mark."
    ],
    multiplication: [
      "Multiply one bottom digit at a time, starting with the ones digit.",
      "Within each partial row, move from right to left and carry into the next column as needed.",
      "Use a zero when a partial row shifts left for tens or hundreds.",
      "After all partial rows are complete, add them from right to left."
    ],
    division: [
      "Move through the dividend from left to right.",
      "For each column, form the partial dividend, choose the quotient digit, multiply, then subtract.",
      "Carry each remainder into the next partial dividend.",
      workspace.allowsRemainder
        ? "At the end, write the final remainder instead of forcing another quotient digit."
        : "In this lesson, the final remainder is zero."
    ]
  };
  const items = workspace.intro || intros[workspace.type] || ["This interactive workspace is planned."];
  const figure = createIntroFigure(workspace);
  const sections = document.createElement("div");
  sections.className = "intro-sections";
  sections.append(
    createIntroSection("Core idea", items),
    createIntroSection("Worked example", introWorkedExampleItems(workspace)),
    createIntroSection("What you will practice", introPracticeItems(workspace)),
    createIntroSection("Answer format", introAnswerFormatItems(workspace))
  );
  els.introCopy.replaceChildren(...[figure, sections].filter(Boolean));
}

function createIntroSection(title, items) {
  const section = document.createElement("section");
  section.className = "intro-section";

  const heading = document.createElement("h4");
  heading.textContent = title;

  const list = document.createElement("ol");
  for (const item of items.filter(Boolean)) {
    const li = document.createElement("li");
    setMathText(li, item);
    list.append(li);
  }

  section.append(heading, list);
  return section;
}

function introWorkedExampleItems(workspace) {
  if (workspace.type === "concept" && workspace.problems?.length) {
    return conceptWorkedExampleItems(workspace);
  }

  if (workspace.type === "addition") {
    return [
      "For 486 + 257, start with ones: 6 + 7 = 13, so write 3 and carry 1.",
      "Then tens: 8 + 5 + 1 = 14, so write 4 and carry 1.",
      "Then hundreds: 4 + 2 + 1 = 7, so the sum is 743."
    ];
  }

  if (workspace.type === "subtraction") {
    return [
      "For 645 - 278, ones needs a borrow: 15 - 8 = 7.",
      "The tens column became 3, so borrow again: 13 - 7 = 6.",
      "The hundreds column became 5, so 5 - 2 = 3. The difference is 367."
    ];
  }

  if (workspace.type === "multiplication") {
    return [
      "For 247 × 386, multiply 247 by 6 first to make the ones partial row.",
      "Then multiply by 80 and 300, shifting those partial rows left.",
      "Add the partial rows to get the final product."
    ];
  }

  if (workspace.type === "division") {
    return [
      "For 864 ÷ 4, ask how many 4s fit into the current part of the dividend.",
      "8 ÷ 4 = 2, then 6 ÷ 4 = 1 remainder 2, then 24 ÷ 4 = 6.",
      "The quotient is 216, with no final remainder in the exact division lesson."
    ];
  }

  if (workspace.type === "equation") {
    return [
      "For x + 7 = 12, subtract 7 from both sides.",
      "The left side becomes x, and the right side becomes 5.",
      "So x = 5."
    ];
  }

  if (workspace.type === "inequality") {
    return [
      "For x + 4 > 9, subtract 4 from both sides.",
      "The comparison direction stays the same because you did not multiply or divide by a negative.",
      "So x > 5."
    ];
  }

  if (workspace.type === "factoring" || workspace.type === "quadratic") {
    return [
      "For x^2 + 5x + 6, find two numbers that multiply to 6 and add to 5.",
      "The pair 2 and 3 works.",
      "So x^2 + 5x + 6 = (x + 2)(x + 3)."
    ];
  }

  return [
    "Read the prompt, identify the current rule, and make one small move.",
    "Check that move before continuing."
  ];
}

function introPracticeItems(workspace) {
  if (workspace.type === "concept" && workspace.problems?.length) {
    return [
      "Read the question and identify the rule it is asking you to use.",
      "Work with the active numbers in the problem area; the overview examples use different numbers.",
      "After a miss, use the hint to choose the next attempt instead of guessing randomly."
    ];
  }

  if (workspace.type === "equation") {
    return [
      "Write the same operation on both sides before simplifying.",
      "Keep each row balanced: left side, relation, right side.",
      "The final line should name the variable value."
    ];
  }

  if (workspace.type === "inequality") {
    return [
      "Use inverse operations as you would for equations.",
      "When multiplying or dividing by a negative number, reverse the inequality sign.",
      "The final line should state the variable and the correct relation."
    ];
  }

  if (workspace.type === "system") {
    return [
      "Show the method first: substitution or elimination.",
      "Find one variable, substitute it back, then write the ordered pair.",
      "Check the pair in both original equations."
    ];
  }

  if (workspace.type === "factoring" || workspace.type === "quadratic") {
    return [
      "Identify the shape of the expression before choosing a method.",
      "Use factor pairs, a greatest common factor, or a special pattern.",
      "Check by multiplying the factors back out."
    ];
  }

  return [
    "Work in the highlighted place first.",
    "Use Check to validate the smallest current step.",
    "Use Hint when the next move is not clear."
  ];
}

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
      "Example: y = 2 sin x has amplitude 2.",
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
      "Example: the geometric sequence 1, 1/3, 1/9 keeps multiplying by 1/3.",
      "A series adds the terms of a sequence.",
      "A small ratio can make an infinite series settle."
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
      "Example: integers under addition have identity 0.",
      "Every integer has an additive inverse.",
      "Those are two of the group rules."
    ],
    "abstract-algebra.rings": [
      "Example: integers have addition and multiplication.",
      "Multiplication distributes over addition.",
      "That is part of why integers form a ring."
    ],
    "abstract-algebra.fields": [
      "Example: rational numbers form a field under usual operations.",
      "Every nonzero rational number has a reciprocal.",
      "Integers fail this division requirement."
    ],
    "abstract-algebra.homomorphisms": [
      "Example: an additive homomorphism satisfies f(a + b) = f(a) + f(b).",
      "It preserves the operation.",
      "That is what structure-preserving means."
    ],
    "abstract-algebra.examples-counterexamples": [
      "Example: positive integers under addition fail to be a group.",
      "The additive inverse of 3 is -3, which is not positive.",
      "The counterexample identifies the failed rule."
    ]
  };

  return examples[workspace.id] || [
    "Example: choose a similar problem with different numbers.",
    "Use the rule from the core idea on that example.",
    "Then apply the same method to the active question."
  ];
}

function introAnswerFormatItems(workspace) {
  if (workspace.type === "concept" && workspace.problems?.length) {
    return [
      "Equivalent typing is accepted when possible: spaces, capitalization, the pi symbol or typed p-i, ×/*, and degree symbols are normalized.",
      "Use compact math notation when the question asks for a formula, expression, coordinate, or set.",
      "For yes-or-no questions, type yes or no."
    ];
  }

  if (workspace.type === "division") {
    return workspace.allowsRemainder
      ? ["Use digits in the quotient boxes and write the final remainder when the workspace asks for it."]
      : ["Use digits in the quotient, product, and remainder boxes. This lesson uses problems with no final remainder."];
  }

  if (["addition", "subtraction", "multiplication"].includes(workspace.type)) {
    return ["Use one digit per square unless the active square is a carry or borrow mark that asks for a small value."];
  }

  return ["Use compact math notation. Spaces and capitalization are ignored for checking."];
}

function createIntroFigure(workspace) {
  if (!["addition", "subtraction", "multiplication", "division", "concept", "equation", "inequality", "quadratic"].includes(workspace.type)) return null;

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

function isDiagramFigure(figure) {
  if (!figure) return false;
  const diagramPrefixes = ["geometry-", "trig-", "precalc-", "calc-", "linear-", "proof-", "set-", "number-", "real-", "abstract-"];
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
      { label: "hundreds", digit: "6", value: "600", x: 66 },
      { label: "tens", digit: "4", value: "40", x: 154 },
      { label: "ones", digit: "2", value: "2", x: 242 }
    ];
    for (const column of columns) {
      svg.append(svgElement("rect", { class: "geometry-shape active", x: column.x, y: 48, width: 58, height: 48, rx: 6 }));
      svgText(svg, column.label, column.x + 29, 35, "geometry-note", "middle");
      svgText(svg, column.digit, column.x + 29, 80, "geometry-label geometry-math active", "middle");
      svgText(svg, column.value, column.x + 29, 132, "geometry-label geometry-math result", "middle");
      svg.append(svgElement("path", { class: "geometry-line result", d: `M ${column.x + 29} 100 V 112` }));
    }
  } else if (figure === "fraction-bar") {
    [0, 1, 2, 3].forEach((index) => {
      svg.append(svgElement("rect", { class: index < 3 ? "geometry-shape active" : "geometry-shape", x: 66 + index * 58, y: 70, width: 58, height: 42, rx: 0 }));
    });
    svgText(svg, "3 of 4 equal parts", 104, 142, "geometry-label geometry-math result");
    svgText(svg, "same whole", 124, 48, "geometry-note");
  } else if (figure === "decimal-grid" || figure === "percent-grid") {
    for (let row = 0; row < 5; row += 1) {
      for (let col = 0; col < 10; col += 1) {
        const index = row * 10 + col;
        svg.append(svgElement("rect", {
          class: index < 30 ? "geometry-shape active" : "geometry-shape",
          x: 58 + col * 20,
          y: 38 + row * 20,
          width: 18,
          height: 18,
          rx: 2
        }));
      }
    }
    svgText(svg, figure === "percent-grid" ? "30 of 100 = 30%" : "3 tenths = 0.3", 206, 154, "geometry-label geometry-math result", "middle");
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
  }

  return svg;
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
  if (workspace.type === "inequality") return conceptFigureCaption(workspace.figure);
  if (workspace.type === "equation") return conceptFigureCaption(workspace.figure);
  if (workspace.type === "concept") return conceptFigureCaption(workspace.figure);
  if (workspace.type === "quadratic") return conceptFigureCaption(workspace.figure);
  if (workspace.type === "addition") return "A carry mark sits above the next column; the active column is highlighted.";
  if (workspace.type === "subtraction") return "Borrow marks show what changed: lent digits are crossed out, received tens sit above the digit.";
  if (workspace.type === "multiplication") return "Each partial row is built from right to left, with carries above the top row.";
  return workspace.allowsRemainder
    ? "The final remainder is written at the end of the same divide, multiply, subtract cycle."
    : "Exact division ends with a final remainder of zero.";
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
  const captions = {
    "place-value": "The same digit has a different value depending on its column.",
    "number-line": "Position helps compare, round, and continue patterns.",
    "integer-line": "Negative and positive integers are ordered by position on the number line.",
    estimation: "Rounded numbers make a quick reasonableness check.",
    "fraction-bar": "Fractions count equal parts of the same whole.",
    "decimal-grid": "Decimals use the same place-value system to the right of the ones place.",
    "percent-grid": "Percents are hundredths in another notation.",
    "ratio-bars": "Equivalent ratios scale both parts by the same factor.",
    "factor-pairs": "Factor pairs multiply to make the target number.",
    "operation-order": "Order rules decide which operation happens first.",
    "word-problem": "Translate the situation into the operation before calculating.",
    "mixed-review": "Mixed review asks you to choose a method, then check the result.",
    "expression-terms": "Like terms can be combined without changing the expression's value.",
    "equation-balance": "Solving an equation keeps both sides balanced.",
    "inequality-line": "Inequality solutions often describe a whole region on a number line.",
    "exponent-stack": "The exponent tells how many repeated factors the base has.",
    "coordinate-plane": "Coordinates move horizontally first, then vertically.",
    "system-intersection": "A system solution makes both equations true at once.",
    "polynomial-terms": "Like polynomial terms combine by matching variable and exponent.",
    "factoring-pairs": "Factoring reverses expansion by finding useful products.",
    "rational-cancel": "Common factors can cancel after factoring.",
    "quadratic-roots": "Factored quadratics show where the expression equals zero.",
    "geometry-angles": "Angle facts often come from a shared total such as 90 or 180 degrees.",
    "geometry-triangle": "Triangle angle measures always add to 180 degrees.",
    "geometry-circle": "Radius, diameter, and circumference describe the same circle in different ways.",
    "geometry-area-volume": "Area counts flat space; volume counts three-dimensional space.",
    "geometry-coordinate": "Coordinates turn geometric distance into differences on a grid.",
    "geometry-proof": "Proofs connect each claim to a reason.",
    "trig-unit-circle": "The unit circle turns angles into coordinates.",
    "trig-right-triangle": "Right-triangle trigonometry compares sides relative to an angle.",
    "trig-graphs": "Trigonometric graphs repeat in predictable waves.",
    "trig-identities": "Identities let you rewrite trig expressions without changing their values.",
    "trig-inverse": "Inverse trig functions recover an angle from a ratio.",
    "precalc-functions": "Functions connect each input to one output.",
    "precalc-transformations": "Transformations move a parent graph without losing its structure.",
    "precalc-polynomial-rational": "Polynomial and rational functions reveal zeros, degrees, and restrictions.",
    "precalc-exponential-log": "Logarithms reverse exponential growth.",
    "precalc-sequences": "Sequences track ordered patterns term by term.",
    "precalc-complex": "Complex numbers extend the number line into a plane.",
    "calc-limits": "Limits describe the value a function approaches.",
    "calc-derivatives": "Derivatives measure tangent slope and instantaneous change.",
    "calc-integrals": "Integrals accumulate area or total change.",
    "calc-applications": "Calculus connects rates, totals, and optimization.",
    "calc-series": "Series add ordered terms and track partial sums.",
    "linear-vectors": "Vectors encode size and direction with coordinates.",
    "linear-matrices": "Matrices organize linear rules in rows and columns.",
    "linear-transformations": "Linear transformations move vectors while preserving linear structure.",
    "linear-determinants": "Determinants describe how a matrix scales area or volume.",
    "linear-eigenvalues": "Eigenvectors keep direction while eigenvalues give the scale.",
    "linear-vector-spaces": "Vector spaces collect all combinations allowed by addition and scaling.",
    "proof-logic": "Logic tracks how one statement forces another.",
    "proof-quantifiers": "Quantifiers control whether a claim covers all cases or at least one.",
    "proof-induction": "Induction proves infinitely many cases by linking each case to the next.",
    "proof-contradiction": "Contradiction proves a claim by showing its negation cannot work.",
    "proof-construction": "Construction proves existence by building and checking an example.",
    "proof-counterexamples": "Counterexamples disprove universal claims with one failing case.",
    "set-notation": "Set notation names collections and membership.",
    "set-subsets": "Subsets sit completely inside larger sets.",
    "set-operations": "Union and intersection compare what sets contain.",
    "set-relations": "Relations are sets of ordered pairs.",
    "set-functions": "Functions map each input to exactly one output.",
    "set-countability": "Countability asks whether elements can be listed.",
    "number-divisibility": "Divisibility means equal groups with no remainder.",
    "number-primes": "Prime factorization breaks numbers into prime building blocks.",
    "number-gcd-lcm": "GCD and LCM organize shared divisors and multiples.",
    "number-euclidean": "The Euclidean algorithm finds a GCD by remainders.",
    "number-modular": "Modular arithmetic tracks remainders after wrapping.",
    "number-congruences": "Congruences say two numbers share a remainder system.",
    "real-sets": "Intervals and bounds make sets of real numbers precise.",
    "real-sequences": "Sequences converge when their tails stay close to one value.",
    "real-limits": "Epsilon bands make approaching a limit precise.",
    "real-continuity": "Continuity means the limit and function value agree.",
    "real-differentiation": "Differentiability is a limit-based tangent slope.",
    "real-integration": "Integration can be built from increasingly fine sums.",
    "abstract-groups": "Groups package one operation with identity and inverses.",
    "abstract-rings": "Rings combine addition, multiplication, and distributivity.",
    "abstract-fields": "Fields make division by nonzero elements possible.",
    "abstract-homomorphisms": "Homomorphisms preserve algebraic structure across maps.",
    "abstract-examples": "Examples and counterexamples test definitions precisely."
  };
  return captions[figure] || captions["mixed-review"];
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
        answers: workspace.problem.answers || [workspace.problem.answer],
        sequence: 0,
        label: workspace.problem.label || "answer",
        hint: workspace.problem.hint,
        feedback: workspace.problem.feedback
      }
    ]
  };
}

function renderConceptGrid(model) {
  const prompt = document.createElement("section");
  prompt.className = "concept-card";
  prompt.style.gridRow = "1";
  prompt.style.gridColumn = "1 / 8";

  const text = document.createElement("p");
  text.className = "concept-prompt";
  setMathText(text, model.prompt);

  const answerLabel = document.createElement("label");
  answerLabel.className = "concept-answer-label";
  answerLabel.textContent = "Answer";

  const input = document.createElement("input");
  input.className = "digit-input concept-answer-input";
  input.inputMode = "text";
  input.autocomplete = "off";
  input.maxLength = 48;
  input.dataset.cellId = model.cells[0].id;
  input.dataset.expected = model.cells[0].expected;
  input.dataset.answers = JSON.stringify(model.cells[0].answers);
  input.dataset.hint = model.cells[0].hint;
  input.dataset.label = model.cells[0].label;
  input.dataset.feedback = model.cells[0].feedback || "";
  input.dataset.prompt = model.prompt;
  input.dataset.sequence = "0";
  input.setAttribute("aria-label", model.cells[0].label);

  input.addEventListener("input", (event) => {
    event.target.value = normalizeAnswerInput(event.target.value);
    if (state.mode === "guided") validateGuidedConceptInput(event.target);
    if (state.mode === "practice") validateInput(event.target, false);
    if (state.mode === "explore") markExploreInput(event.target);
  });
  input.setAttribute("oninput", "document.dispatchEvent(new CustomEvent('carry-concept-input-command', { detail: this }))");
  input.setAttribute("onkeydown", "window.carryInlineReturn?.(event)");
  input.addEventListener("focus", (event) => {
    event.target.select();
  });

  answerLabel.append(input);
  prompt.append(text, answerLabel);
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
    answers: answers || [expected],
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
  saveProgress(`Opened ${workspaceRegistry[model.workspaceId].title.toLowerCase()}`);
}

function findLesson(id) {
  for (const group of topicGroups) {
    const lesson = lessonsForGroup(group).find((item) => item.id === id);
    if (lesson) return lesson;
  }
  return null;
}

function currentProblem(workspaceId, problemSet) {
  return state.customProblems[workspaceId] || problemSet[state.selectedProblemIndex % problemSet.length];
}

function buildAdditionModel(top, bottom) {
  const topDigits = digits(top, 3);
  const bottomDigits = digits(bottom, 3);
  const total = top + bottom;
  const sumDigits = String(total).padStart(4, "0").split("");
  const cells = [];
  let sequence = 0;
  let carry = 0;

  for (let index = 2; index >= 0; index -= 1) {
    const col = index + 5;
    const columnTotal = topDigits[index] + bottomDigits[index] + carry;
    const digit = columnTotal % 10;
    const nextCarry = Math.floor(columnTotal / 10);
    const incomingAddCarryId = carry > 0 ? `add-carry-${col}` : null;

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
      col: 4,
      kind: "sum",
      expected: sumDigits[0],
      sequence,
      incomingAddCarryId: "add-carry-4",
      label: `leading sum digit ${sumDigits[0]}`,
      hint: "Bring down the final carry."
    });
  }

  return { top, bottom, topDigits, bottomDigits, final: total, cells };
}

function renderAdditionGrid(model) {
  const staticCells = [
    ...model.topDigits.map((value, index) => ({ row: 2, col: index + 5, value })),
    ...model.bottomDigits.map((value, index) => ({ row: 3, col: index + 5, value })),
    { row: 3, col: 4, value: "+", operator: true }
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
  const dividendDigits = digits(dividend, 3);
  const cells = [];
  let sequence = 0;
  let remainder = 0;
  let divisionStarted = false;
  let stepIndex = 0;

  dividendDigits.forEach((digit, index) => {
    const col = index + 5;
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
  for (let row = 1; row <= 11; row += 1) {
    addCell({ row, col: 1, value: divisionLabelForRow(row), className: "row-label" });
  }

  for (let row = 1; row <= 11; row += 1) {
    for (let col = 2; col <= 7; col += 1) {
      const inputCell = model.cells.find((item) => item.row === row && item.col === col);
      const dividendIndex = col - 5;

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
  const topDigits = digits(top, 3);
  const bottomDigits = digits(bottom, 3);
  const answerDigits = String(top - bottom).padStart(3, "0").split("");
  const workingTop = [...topDigits];
  const cells = [];
  let sequence = 0;

  for (let index = 2; index >= 0; index -= 1) {
    const current = workingTop[index];
    const needsBorrow = current < bottomDigits[index];
    if (needsBorrow) {
      const lenderIndex = findLenderIndex(workingTop, index);
      workingTop[index] = current + 10;
      cells.push({
        id: `sub-borrow-raise-${index}`,
        row: 2,
        col: index + 5,
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
          col: lenderIndex + 5,
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
            col: passIndex + 5,
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

    const col = index + 5;
    const borrowCell = [...cells].reverse().find((cell) => cell.kind === "borrow" && cell.col === col);
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

  return { top, bottom, topDigits, bottomDigits, final: top - bottom, cells };
}

function findLenderIndex(workingTop, targetIndex) {
  for (let index = targetIndex - 1; index >= 0; index -= 1) {
    if (workingTop[index] > 0) return index;
  }
  return -1;
}

function renderSubtractionGrid(model) {
  const staticCells = [
    ...model.topDigits.map((value, index) => ({ row: 2, col: index + 5, value })),
    ...model.bottomDigits.map((value, index) => ({ row: 3, col: index + 5, value })),
    { row: 3, col: 4, value: "–", operator: true }
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
  const topDigits = digits(top, 3);
  const bottomDigits = digits(bottom, 3);
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

  return { top, bottom, topDigits, bottomDigits, partials, final, cells };
}

function renderMultiplicationGrid(model) {
  const staticCells = [
    ...model.topDigits.map((value, index) => ({ row: 2, col: index + 5, value })),
    ...model.bottomDigits.map((value, index) => ({ row: 3, col: index + 5, value })),
    { row: 3, col: 4, value: "x", operator: true }
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
  const powerPattern = /\^(\{[^}]+\}|-?[A-Za-z0-9]+)/g;
  let cursor = 0;
  let match = powerPattern.exec(text);
  while (match) {
    if (match.index > cursor) {
      appendSegmentBeforeExponent(element, text.slice(cursor, match.index));
    }

    const exponentText = match[1].startsWith("{") ? match[1].slice(1, -1) : match[1];
    const exponent = document.createElement("sup");
    exponent.className = "math-sup";
    exponent.textContent = exponentText;
    element.append(exponent);
    cursor = powerPattern.lastIndex;
    match = powerPattern.exec(text);
  }

  if (cursor < text.length) {
    appendMathSegment(element, text.slice(cursor));
  }
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

  const powerPattern = /\^(\{[^}]+\}|-?[A-Za-z0-9]+)/g;
  let cursor = 0;
  let match = powerPattern.exec(text);
  while (match) {
    if (match.index > cursor) {
      appendSegmentBeforeExponent(element, text.slice(cursor, match.index));
    }

    const exponentText = match[1].startsWith("{") ? match[1].slice(1, -1) : match[1];
    const exponent = document.createElement("sup");
    exponent.className = "math-sup";
    exponent.textContent = exponentText;
    element.append(exponent);
    cursor = powerPattern.lastIndex;
    match = powerPattern.exec(text);
  }

  if (cursor < text.length) {
    appendMathSegment(element, text.slice(cursor));
  }
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
  return /[\^πθ∫≤≥≡∈∉⊆∪∩=+\-*/×·/]|[A-Za-z]\d|\d[A-Za-z]|\([^)]+,[^)]+\)|\b[A-Za-z]\([A-Za-z0-9]+\)|\b(?:sin|cos|tan|sec|csc|cot|arcsin|arccos|arctan|log|ln|lim)\b/i.test(text);
}

function appendMathSegment(element, text) {
  if (!text) return;
  const tokenPattern = /((?<![A-Za-z])(?:[A-Za-z]\([A-Za-z0-9]+\)|[A-Za-zπθ])\s*=\s*[^,.;?]+|\b[A-Za-z]\([A-Za-z0-9]+\)|\b(?:sin|cos|tan|sec|csc|cot|arcsin|arccos|arctan|log|ln|lim)\s*[A-Za-zθπ]?\b|\b(?:\d+|[A-Za-zθπ])\s*[+\-*/×·]\s*(?:\d+|[A-Za-zθπ])\b|\b\d+\s*[π]\b|\b\d+[A-Za-z]\b|\b[A-Za-z]\d+\b|\([^)]+,[^)]+\)|[πθ∫∈∉⊆∪∩≡])/gi;
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
    appendMathRunContent(segment, text);
  } else {
    segment.textContent = text;
  }
  element.append(segment);
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
    setStatus("Lesson complete. Press Return for the next problem, or choose New.", "complete");
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
      input.focus({ preventScroll: true });
      setStatus(`Correct. Continue with ${activeStep?.label || input.dataset.label || "the next box"}.`, "correct");
      return;
    }
    setStatus(input.inputMode === "numeric" ? "Try another digit." : "Try another entry.", "incorrect");
    input.classList.add("incorrect");
    input.focus({ preventScroll: true });
    return;
  }

  const correct = validateInput(input, true);
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

function requestStepCheck(event) {
  event?.preventDefault?.();
  event?.stopPropagation?.();
  event?.stopImmediatePropagation?.();
  if (state.showIntro) {
    startCurrentLesson();
    return;
  }
  checkCurrentStep();
}

function handleCommandEvent(event) {
  const checkButton = event.target?.closest?.("#checkStep");
  if (["click", "pointerdown", "mousedown", "mouseup", "touchstart"].includes(event.type) && checkButton) {
    requestStepCheck(event);
    return;
  }
  if (event.type !== "keydown" && event.type !== "keyup") return;
  if ((event.key === "Enter" || event.key === " ") && checkButton) {
    requestStepCheck(event);
    return;
  }
  if (event.key !== "Enter" || !event.target?.classList?.contains("digit-input")) return;
  event.preventDefault();
  event.stopPropagation();
  event.stopImmediatePropagation();
  if (isCurrentProblemComplete()) {
    startNextProblem();
  } else {
    checkCurrentStep();
  }
}

function handleAnswerKeydown(event) {
  if (event.key !== "Enter") return;
  event.preventDefault();
  event.stopPropagation();
  event.stopImmediatePropagation();
  if (isCurrentProblemComplete()) {
    startNextProblem();
  } else {
    checkCurrentStep();
  }
}

document.addEventListener("carry-check-command", () => requestStepCheck());
document.addEventListener("carry-answer-return-command", runReturnCommand);
document.addEventListener("carry-concept-input-command", (event) => {
  const input = event.detail;
  if (!input?.classList?.contains("digit-input")) return;
  input.value = normalizeAnswerInput(input.value);
  if (state.mode === "guided") validateGuidedConceptInput(input);
  if (state.mode === "practice") validateInput(input, false);
  if (state.mode === "explore") markExploreInput(input);
});

function runReturnCommand() {
  if (state.showIntro) {
    startCurrentLesson();
  } else if (isCurrentProblemComplete()) {
    startNextProblem();
  } else {
    checkCurrentStep();
  }
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
    if (isCurrentProblemComplete()) {
      startNextProblem();
    } else {
      checkCurrentStep();
    }
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
  if (correct) {
    state.checkedCells.set(input.dataset.cellId, input.value);
  } else {
    state.checkedCells.delete(input.dataset.cellId);
  }
  if (announce) {
    setStatus(correct ? "Correct. Continue to the next box." : feedbackForInput(input), correct ? "correct" : "incorrect");
  }
  return correct;
}

function validateGuidedConceptInput(input) {
  if (!input.value.trim()) {
    input.classList.remove("correct", "incorrect", "hint");
    setStatus("Enter the answer, then check it.", "");
    return;
  }

  const correct = validateInput(input, false);
  if (!correct) {
    setStatus(feedbackForInput(input), "incorrect");
    return;
  }

  if (state.activeStep < orderedSteps().length) {
    state.activeStep = orderedSteps().length;
    completeLesson();
  }
}

function feedbackForInput(input) {
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

function isCorrectAnswer(input) {
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
  return String(value || "")
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
}

function acceptedAnswersForInput(input) {
  const explicit = input.dataset.answers ? JSON.parse(input.dataset.answers) : [input.dataset.expected];
  const answers = new Set(explicit.map(String));
  const expected = answerValue(input.dataset.expected);
  const label = answerValue(input.dataset.label);
  const prompt = answerValue(input.dataset.prompt);

  for (const alias of semanticAnswerAliases(expected, label, prompt)) {
    answers.add(alias);
  }

  return [...answers];
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
  return variants;
}

function normalizeAnswerInput(value) {
  return String(value || "").replace(/\s+/g, " ").slice(0, 48);
}

function markExploreInput(input) {
  input.classList.remove("correct", "incorrect", "hint");
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
  });
  els.grid.querySelectorAll(".carry-slot").forEach((input) => {
    input.classList.remove("active");
    input.disabled = false;
  });
  els.grid.querySelectorAll(".active-column").forEach((cell) => cell.classList.remove("active-column"));
  setStatus("Lesson complete. Your progress is saved on this device.", "complete");
  saveProgress(`Completed ${getActiveWorkspace().title.toLowerCase()}`);
  updateStepText();
}

function updateStepText() {
  const steps = orderedSteps();
  const target = steps[state.activeStep];
  if (!target) {
    els.stepText.textContent = "The lesson is complete.";
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
    setSurface("learn");
    renderTopics();
    renderWorkspace();
    saveProgress(`Opened ${button.textContent}`);
  });

  els.learnSurface.addEventListener("click", () => setSurface("learn"));
  els.scratchpadSurface.addEventListener("click", () => setSurface("scratchpad"));

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
    saveProgress("Changed options");
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
  els.newScratchpad.addEventListener("click", createScratchpad);
  els.renameScratchpad.addEventListener("click", renameScratchpad);
  els.copyScratchPlain.addEventListener("click", () => copyScratchpad("plain"));
  els.copyScratchLatex.addEventListener("click", () => copyScratchpad("latex"));
  els.copyScratchMarkdown.addEventListener("click", () => copyScratchpad("markdown"));
  els.exportScratchLatex.addEventListener("click", exportScratchpadLatex);
  els.importScratchLatex.addEventListener("change", importScratchpadLatex);
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
  if (event.key === "Enter") {
    if (isFormControl(event.target) && !event.target.classList?.contains("digit-input")) return;
    event.preventDefault();
    if (state.showIntro) {
      startCurrentLesson();
    } else if (isCurrentProblemComplete()) {
      startNextProblem();
    } else if (!state.showIntro && orderedSteps().length > 0) {
      checkCurrentStep();
    }
    return;
  }
  if (isFormControl(event.target) || !/^\d$/.test(event.key)) return;
  const activeInput = els.grid.querySelector(".digit-input.active");
  if (!activeInput) return;
  event.preventDefault();
  activeInput.focus();
  insertDigit(activeInput, event.key);
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
  state.selectedProblemIndex = (state.selectedProblemIndex + 1) % setLength;
  delete state.customProblems[state.activeWorkspaceId];
  state.activeTopic = getActiveWorkspace().topic || state.activeTopic;
  state.activeStep = 0;
  state.showIntro = false;
  renderTopics();
  renderWorkspace();
  saveProgress("Started a new problem");
}

function isCurrentProblemComplete() {
  const steps = orderedSteps();
  return steps.length > 0 && state.activeStep >= steps.length;
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
    && dividend >= 100
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
    ? "Use a 3-digit dividend and a 1- or 2-digit divisor from 2 to 99 with a nonzero remainder."
    : "Use a 3-digit dividend and a 1- or 2-digit divisor from 2 to 99 with no remainder.";
}

function modeStatus(mode) {
  if (mode === "guided") return "Guided mode shows one next action.";
  if (mode === "practice") return "Practice mode checks entries as you work.";
  return "Explore mode lets you try freely before checking.";
}

function exportProgress() {
  saveProgress("Exported progress");
  const blob = new Blob([JSON.stringify(state.progress, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "carry-progress.json";
  anchor.click();
  URL.revokeObjectURL(url);
  setStatus("Progress exported as JSON.", "correct");
}

function importProgress(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      const imported = JSON.parse(String(reader.result));
      if (!imported || imported.version !== 1) throw new Error("Unsupported progress file.");
      state.progress = {
        ...state.progress,
        ...imported,
        preferences: { ...state.progress.preferences, ...imported.preferences }
      };
      state.activeTopic = state.progress.currentTopic || "Arithmetic";
      state.activeWorkspaceId = state.progress.currentWorkspaceId || "arithmetic.long-addition.3x3";
      state.mode = state.progress.preferences.mode || "guided";
      els.autoAdvance.checked = state.progress.preferences.autoAdvance !== false;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress, null, 2));
      els.modeTabs.forEach((item) => {
        item.setAttribute("aria-selected", item.dataset.mode === state.mode ? "true" : "false");
      });
      renderTopics();
      renderWorkspace();
      saveProgress("Imported progress");
      setStatus("Progress imported.", "correct");
    } catch {
      setStatus("Choose a valid Carry progress JSON file.", "incorrect");
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
  localStorage.setItem(SCRATCHPAD_STORAGE_KEY, JSON.stringify(state.scratchpads, null, 2));
}

function renderScratchpad() {
  const pad = activeScratchpad();
  if (!pad) return;
  if (els.scratchpadTitle) els.scratchpadTitle.textContent = pad.title;
  if (els.scratchpadInput && els.scratchpadInput.value !== pad.text) {
    els.scratchpadInput.value = pad.text;
  }
  renderScratchpadPreview();
  renderScratchpadList();
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
  const alignEquals = normalizedLines.filter(Boolean).length > 1
    && normalizedLines.filter((line) => splitTopLevelEquals(line)).length > 1;

  lines.forEach((line, index) => {
    const row = document.createElement("div");
    row.className = `scratch-line ${line.trim() ? "" : "scratch-line-empty"}`.trim();
    if (alignEquals) row.classList.add("scratch-line-aligned");

    const number = document.createElement("span");
    number.className = "scratch-line-number";
    number.textContent = String(index + 1);

    const math = document.createElement("div");
    math.className = "scratch-line-math";
    renderScratchpadLineMath(math, normalizedLines[index], alignEquals);

    row.append(number, math);
    els.scratchpadPreview.append(row);
  });
}

function renderScratchpadLineMath(target, latex, alignEquals) {
  target.replaceChildren();
  if (!latex) return;

  const split = alignEquals ? splitTopLevelEquals(latex) : null;
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
  equals.textContent = "=";
  right.append(createMathMlExpression(split.right));
  target.append(left, equals, right);
}

function splitTopLevelEquals(text) {
  let depth = 0;
  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    if (char === "{") depth += 1;
    if (char === "}") depth = Math.max(0, depth - 1);
    if (char === "=" && depth === 0) {
      return {
        left: text.slice(0, index).trimEnd(),
        right: text.slice(index + 1).trimStart()
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
    .replace(/[→]/g, "->")
    .replace(/[⇒]/g, "=>")
    .replace(/⇔/g, "\\iff")
    .replace(/∧/g, "\\land")
    .replace(/∨/g, "\\lor")
    .replace(/¬/g, "\\neg")
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
    .replace(/\btheta\b/gi, "\\theta")
    .replace(/\bpi\b/gi, "\\pi")
    .replace(/\b(sin|cos|tan|sec|csc|cot|arcsin|arccos|arctan|ln|log)\b/gi, "\\$1")
    .replace(/sqrt\(([^()]*)\)/gi, (_, body) => `\\sqrt{${normalizePlainPowers(body)}}`)
    .replace(/\be\^\(([^()]*)\)/gi, (_, body) => `e^{${normalizePlainPowers(body)}}`)
    .replace(/(?<!\\)\bint\[([^,\]]+),([^\]]+)\]\s+([^=\n]+?)\s*d([A-Za-z])\b/gi, "\\int_{$1}^{$2} $3\\,d$4")
    .replace(/(?<!\\)\bint_([^\s^]+)\^([^\s]+)\s+([^=\n]+?)\s*d([A-Za-z])\b/gi, "\\int_{$1}^{$2} $3\\,d$4")
    .replace(/(?<!\\)\bint\s+([^=\n]+?)\s*d([A-Za-z])\b/gi, "\\int $1\\,d$2")
    .replace(/(?<!\\)\bint\b/gi, "\\int")
    .replace(/\b(d[A-Za-z])\/(d[A-Za-z])\b/g, "\\dfrac{$1}{$2}")
    .replace(/(?<![\\\w])([A-Za-z0-9]+)\/([A-Za-z0-9]+)(?![\w])/g, "\\frac{$1}{$2}")
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
  const commands = ["\\dfrac", "\\frac", "\\sqrt", "\\int", "\\ln", "\\log", "\\sin", "\\cos", "\\tan", "\\sec", "\\csc", "\\cot", "\\arcsin", "\\arccos", "\\arctan", "\\pi", "\\theta", "\\le", "\\ge", "\\ne", "\\pm", "\\to", "\\Rightarrow", "\\,"];
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
    "\\le": "≤",
    "\\ge": "≥",
    "\\ne": "≠",
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

    if (text.startsWith("\\mathbb", cursor)) {
      const group = readBraceGroup(text, cursor + 7);
      if (group) {
        target.append(createMathMlToken("mi", doubleStruckSymbol(group.value), { mathvariant: "normal" }));
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
  const commands = ["\\Rightarrow", "\\therefore", "\\subseteq", "\\emptyset", "\\because", "\\arcsin", "\\arccos", "\\arctan", "\\forall", "\\exists", "\\models", "\\notin", "\\subset", "\\theta", "\\vdash", "\\quad", "\\land", "\\oplus", "\\lor", "\\neg", "\\iff", "\\sin", "\\cos", "\\tan", "\\sec", "\\csc", "\\cot", "\\log", "\\cup", "\\cap", "\\ln", "\\pi", "\\le", "\\ge", "\\ne", "\\pm", "\\to", "\\in", "\\;", "\\,"];
  return commands.find((command) => text.startsWith(command, index));
}

function appendMathMlCommand(target, command) {
  const functionNames = new Set(["\\sin", "\\cos", "\\tan", "\\sec", "\\csc", "\\cot", "\\arcsin", "\\arccos", "\\arctan", "\\log", "\\ln"]);
  if (functionNames.has(command)) {
    target.append(createMathMlToken("mi", command.slice(1), { mathvariant: "normal" }));
    return;
  }
  const commandMap = {
    "\\theta": ["mi", "θ"],
    "\\pi": ["mi", "π", "normal"],
    "\\le": ["mo", "≤"],
    "\\ge": ["mo", "≥"],
    "\\ne": ["mo", "≠"],
    "\\pm": ["mo", "±"],
    "\\to": ["mo", "→"],
    "\\Rightarrow": ["mo", "⇒"],
    "\\iff": ["mo", "⇔"],
    "\\land": ["mo", "∧"],
    "\\lor": ["mo", "∨"],
    "\\neg": ["mo", "¬"],
    "\\forall": ["mo", "∀"],
    "\\exists": ["mo", "∃"],
    "\\therefore": ["mo", "∴"],
    "\\because": ["mo", "∵"],
    "\\oplus": ["mo", "⊕"],
    "\\vdash": ["mo", "⊢"],
    "\\models": ["mo", "⊨"],
    "\\in": ["mo", "∈"],
    "\\notin": ["mo", "∉"],
    "\\subset": ["mo", "⊂"],
    "\\subseteq": ["mo", "⊆"],
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
  return /[+\-*/=()[\]{}|,∈∉⊂⊆∪∩∧∨¬∀∃∴∵⊕⊢⊨⇔]/.test(token) ? "mo" : "mtext";
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
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `${title}.tex`;
  anchor.click();
  URL.revokeObjectURL(url);
  setScratchpadStatus("LaTeX exported.");
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
  els.savedWorkspaces.textContent = state.progress.savedWorkspaces.join(", ");
}

function digits(number, length) {
  return String(number).padStart(length, "0").split("").map(Number);
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
