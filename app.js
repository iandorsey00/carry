"use strict";

const STORAGE_KEY = "carry.progress.v1";

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

const conceptWorkspaces = {
  ...arithmeticConceptWorkspaces,
  ...preAlgebraConceptWorkspaces,
  ...algebraConceptWorkspaces
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
  "Real Analysis": { id: "real-analysis.placeholders", title: "Definitions and proofs", status: "planned" },
  "Abstract Algebra": { id: "abstract-algebra.placeholders", title: "Groups and examples", status: "planned" },
  "Proofs": { id: "proofs.placeholders", title: "Proof construction", status: "planned" }
};

const state = {
  progress: loadProgress(),
  mode: "guided",
  activeTopic: "Arithmetic",
  activeWorkspaceId: "arithmetic.long-addition.3x3",
  activeStep: 0,
  showIntro: true,
  selectedProblemIndex: 0,
  customProblems: {},
  currentModel: null,
  checkedCells: new Map()
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

const els = {};

document.addEventListener("DOMContentLoaded", () => {
  cacheElements();
  state.activeTopic = state.progress.currentTopic || "Arithmetic";
  state.activeWorkspaceId = state.progress.currentWorkspaceId || "arithmetic.long-addition.3x3";
  state.mode = state.progress.preferences.mode || "guided";
  renderTopics();
  renderWorkspace();
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
  els.currentTopic.textContent = state.activeTopic;
  els.lessonTitle.textContent = workspace.title;
  els.grid.className = `math-grid ${workspace.type}-grid`;
  els.grid.innerHTML = "";
  state.checkedCells.clear();

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
  setStatus(workspace.type === "concept" || workspace.type === "equation" || workspace.type === "inequality" || workspace.type === "system" || workspace.type === "factoring" || workspace.type === "quadratic" ? "Enter the active step, then check it." : "Place the first digit in the active box.", "");
  setActiveStep();
  drawOverlays();
  updateStepText();
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

function renderIntroWorkspace(workspace) {
  setWorkspaceView("intro");
  els.overlay.innerHTML = "";
  state.currentModel = null;
  els.introTitle.textContent = workspace.title;
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
  const list = document.createElement("ol");
  for (const item of items) {
    const li = document.createElement("li");
    setMathText(li, item);
    list.append(li);
  }
  const figure = createIntroFigure(workspace);
  els.introCopy.replaceChildren(...[figure, list].filter(Boolean));
}

function createIntroFigure(workspace) {
  if (!["addition", "subtraction", "multiplication", "division", "concept", "equation", "inequality", "quadratic"].includes(workspace.type)) return null;

  const figure = document.createElement("figure");
  figure.className = `intro-figure ${workspace.type}-figure`;
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
    "quadratic-roots": "Factored quadratics show where the expression equals zero."
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
        hint: workspace.problem.hint
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
  input.maxLength = 16;
  input.dataset.cellId = model.cells[0].id;
  input.dataset.expected = model.cells[0].expected;
  input.dataset.answers = JSON.stringify(model.cells[0].answers);
  input.dataset.hint = model.cells[0].hint;
  input.dataset.label = model.cells[0].label;
  input.dataset.sequence = "0";
  input.setAttribute("aria-label", model.cells[0].label);

  input.addEventListener("input", (event) => {
    event.target.value = normalizeAnswerInput(event.target.value);
    if (state.mode === "practice") validateInput(event.target, false);
    if (state.mode === "explore") markExploreInput(event.target);
  });
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      if (isCurrentProblemComplete()) {
        event.preventDefault();
        startNextProblem();
      } else {
        checkCurrentStep();
      }
    }
  });
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
  if (!text.includes("^")) {
    element.textContent = text;
    return;
  }

  element.setAttribute("aria-label", text);
  const powerPattern = /\^(\{[^}]+\}|-?[A-Za-z0-9]+)/g;
  let cursor = 0;
  let match = powerPattern.exec(text);
  while (match) {
    if (match.index > cursor) {
      element.append(document.createTextNode(text.slice(cursor, match.index)));
    }

    const exponentText = match[1].startsWith("{") ? match[1].slice(1, -1) : match[1];
    const exponent = document.createElement("sup");
    exponent.textContent = exponentText;
    element.append(exponent);
    cursor = powerPattern.lastIndex;
    match = powerPattern.exec(text);
  }

  if (cursor < text.length) {
    element.append(document.createTextNode(text.slice(cursor)));
  }
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
  input.maxLength = Math.max(1, cell.expected.length);
  input.autocomplete = "off";
  input.dataset.cellId = cell.id;
  input.dataset.expected = cell.expected;
  if (cell.answers) {
    input.dataset.answers = JSON.stringify(cell.answers);
  }
  input.dataset.hint = cell.hint;
  input.dataset.label = cell.label;
  input.dataset.sequence = String(cell.sequence);
  input.setAttribute("aria-label", cell.label);

  input.addEventListener("input", (event) => {
    event.target.value = event.target.inputMode === "numeric" ? normalizeDigitInput(event.target) : normalizeAnswerInput(event.target.value);
    if (shouldAutoAdvance(event.target)) checkCurrentStep();
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
    if (shouldAutoAdvance(event.target)) checkCurrentStep();
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

  const target = state.mode === "guided" ? inputForStep(steps[state.activeStep]) : document.activeElement;
  const input = target?.classList?.contains("digit-input") ? target : visibleInputs().find((item) => !item.classList.contains("correct"));
  if (!input) return;

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

function shouldAutoAdvance(input) {
  return state.mode === "guided" && els.autoAdvance.checked && input.classList.contains("active") && input.value.length >= Number(input.maxLength || 1);
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
    if (isCurrentProblemComplete()) {
      event.preventDefault();
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
    const retryText = input.inputMode === "numeric" ? "Try another digit." : "Try another entry.";
    setStatus(correct ? "Correct. Continue to the next box." : retryText, correct ? "correct" : "incorrect");
  }
  return correct;
}

function isCorrectAnswer(input) {
  const answers = input.dataset.answers ? JSON.parse(input.dataset.answers) : [input.dataset.expected];
  return answers.some((answer) => answerValue(input.value) === answerValue(answer));
}

function answerValue(value) {
  return String(value || "").trim().toLowerCase();
}

function normalizeAnswerInput(value) {
  return String(value || "").replace(/\s+/g, "").slice(0, 16);
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
  els.status.textContent = text;
  els.status.className = `activity-status ${variant || ""}`.trim();
}

function drawOverlays() {
  const shell = document.querySelector(".activity-grid-shell");
  const rect = shell.getBoundingClientRect();
  els.overlay.setAttribute("viewBox", `0 0 ${Math.max(rect.width, 420)} ${Math.max(rect.height, 1)}`);
  els.overlay.innerHTML = "";
}

function bindEvents() {
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
    saveProgress(`Opened ${button.textContent}`);
  });

  els.modeTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
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

  els.checkStep.addEventListener("click", checkCurrentStep);
  els.hintStep.addEventListener("click", showHint);
  els.startLesson.addEventListener("click", () => {
    state.showIntro = false;
    state.activeStep = 0;
    renderWorkspace();
    saveProgress(`Started ${getActiveWorkspace().title.toLowerCase()}`);
  });
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
  window.addEventListener("resize", drawOverlays);
  document.addEventListener("keydown", handlePageKeydown);
}

function handlePageKeydown(event) {
  if (event.key === "Enter" && isCurrentProblemComplete() && !isFormControl(event.target)) {
    event.preventDefault();
    startNextProblem();
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
