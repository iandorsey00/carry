"use strict";

const STORAGE_KEY = "carry.progress.v1";

const topicGroups = [
  {
    name: "Arithmetic",
    lessons: [
      { id: "arithmetic.long-addition.3x3", title: "Long addition" },
      { id: "arithmetic.long-subtraction.3x3", title: "Long subtraction" },
      { id: "arithmetic.long-multiplication.3x3", title: "Long multiplication" },
      { id: "arithmetic.long-division.3x1", title: "Long division" },
      { id: "arithmetic.long-division-remainders", title: "Long division with remainders" }
    ]
  },
  { name: "Pre-Algebra", lessons: [] },
  { name: "Algebra", lessons: [] },
  { name: "Geometry", lessons: [] },
  { name: "Trigonometry", lessons: [] },
  { name: "Calculus", lessons: [] },
  { name: "Linear Algebra", lessons: [] },
  { name: "Real Analysis", lessons: [] },
  { name: "Abstract Algebra", lessons: [] },
  { name: "Proofs", lessons: [] }
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

const workspaceRegistry = {
  "arithmetic.long-addition.3x3": additionWorkspace,
  "arithmetic.long-subtraction.3x3": subtractionWorkspace,
  "arithmetic.long-multiplication.3x3": multiplicationWorkspace,
  "arithmetic.long-division.3x1": divisionWorkspace,
  "arithmetic.long-division-remainders": divisionRemainderWorkspace,
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
  activeWorkspaceId: "arithmetic.long-subtraction.3x3",
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
  state.activeWorkspaceId = state.progress.currentWorkspaceId || "arithmetic.long-subtraction.3x3";
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
    currentWorkspaceId: "arithmetic.long-subtraction.3x3",
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
    summary.setAttribute("aria-current", group.name === state.activeTopic && group.lessons.length === 0 ? "true" : "false");
    details.append(summary);

    if (group.lessons.length > 0) {
      const lessonList = document.createElement("div");
      lessonList.className = "lesson-list";
      for (const lesson of group.lessons) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "lesson-nav-button";
        button.textContent = lesson.title;
        button.dataset.topic = group.name;
        button.dataset.workspaceId = lesson.id;
        button.setAttribute("aria-current", lesson.id === state.activeWorkspaceId ? "true" : "false");
        lessonList.append(button);
      }
      details.append(lessonList);
    } else {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "lesson-nav-button planned";
      button.textContent = "Planned";
      button.dataset.topic = group.name;
      button.dataset.workspaceId = group.name;
      details.append(button);
    }

    els.topicList.append(details);
  }
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

  if (workspace.type === "addition") {
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
  setStatus("Place the first digit in the active box.", "");
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
  const items = intros[workspace.type] || ["This interactive workspace is planned."];
  const list = document.createElement("ol");
  for (const item of items) {
    const li = document.createElement("li");
    li.textContent = item;
    list.append(li);
  }
  els.introCopy.replaceChildren(list);
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
  els.bottomNumber.max = workspace.type === "division" ? "9" : "999";
  els.topNumber.value = String(workspace.problem.top);
  els.bottomNumber.value = String(workspace.problem.bottom);
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
  setStatus("Choose an Arithmetic lesson for a working long-operation module.", "");
  els.stepText.textContent = "Arithmetic has active lessons in this build.";
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
  return workspaceRegistry[state.activeWorkspaceId] || workspaceRegistry[state.activeTopic];
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
  const quotientDigits = digits(Math.floor(dividend / divisor), 3);
  const cells = [];
  let sequence = 0;
  let remainder = 0;

  dividendDigits.forEach((digit, index) => {
    const col = index + 5;
    const partial = remainder * 10 + digit;
    const quotientDigit = Math.floor(partial / divisor);
    const product = quotientDigit * divisor;
    remainder = partial - product;

    cells.push({
      id: `div-partial-${index}`,
      row: 3 + index * 3,
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
      row: 4 + index * 3,
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
      row: 5 + index * 3,
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
  });

  return { top: dividend, bottom: divisor, dividendDigits, divisor, quotientDigits, cells };
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
        addInput(inputCell);
      } else if (row === 2 && col === 4) {
        addCell({ row, col, value: String(model.divisor), className: "operator division-divisor" });
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
  if (row === 5 && className === "row-label") {
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
    cell.textContent = value;
  }
  els.grid.append(cell);
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
  input.className = `digit-input ${cell.kind === "carry" ? "carry-input" : ""}`;
  input.inputMode = "numeric";
  input.pattern = "[0-9]";
  input.maxLength = Math.max(1, cell.expected.length);
  input.autocomplete = "off";
  input.dataset.cellId = cell.id;
  input.dataset.expected = cell.expected;
  input.dataset.hint = cell.hint;
  input.dataset.label = cell.label;
  input.dataset.sequence = String(cell.sequence);
  input.setAttribute("aria-label", cell.label);

  input.addEventListener("input", (event) => {
    event.target.value = normalizeDigitInput(event.target);
    if (shouldAutoAdvance(event.target)) checkCurrentStep();
    if (state.mode === "practice") validateInput(event.target, false);
    if (state.mode === "explore") markExploreInput(event.target);
  });

  input.addEventListener("beforeinput", handleDigitBeforeInput);

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
  activeCell.classList.add("active-column");

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
  if (event.key === "Enter") checkCurrentStep();
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
  const correct = input.value === input.dataset.expected;
  input.classList.toggle("correct", correct);
  input.classList.toggle("incorrect", input.value.length > 0 && !correct);
  if (correct) {
    state.checkedCells.set(input.dataset.cellId, input.value);
  } else {
    state.checkedCells.delete(input.dataset.cellId);
  }
  if (announce) {
    setStatus(correct ? "Correct. Continue to the next box." : "Try another digit.", correct ? "correct" : "incorrect");
  }
  return correct;
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
    const setLength = problemSetForWorkspace(state.activeWorkspaceId).length;
    state.selectedProblemIndex = (state.selectedProblemIndex + 1) % setLength;
    delete state.customProblems[state.activeWorkspaceId];
    state.activeTopic = "Arithmetic";
    state.activeStep = 0;
    state.showIntro = false;
    renderTopics();
    renderWorkspace();
    saveProgress("Started a new problem");
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
  return additionProblemSet;
}

function randomProblemForWorkspace(workspaceId) {
  if (workspaceId === divisionWorkspace.id) return randomDivisionProblem(false);
  if (workspaceId === divisionRemainderWorkspace.id) return randomDivisionProblem(true);
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

function randomThreeDigit() {
  return Math.floor(Math.random() * 900) + 100;
}

function isValidDivisionProblem(dividend, divisor, allowsRemainder) {
  const quotient = Math.floor(dividend / divisor);
  const remainder = dividend % divisor;
  return isValidDivisionShape(dividend, divisor)
    && quotient >= 100
    && (allowsRemainder ? remainder > 0 : remainder === 0);
}

function isValidDivisionShape(dividend, divisor) {
  return Number.isInteger(dividend)
    && Number.isInteger(divisor)
    && dividend >= 100
    && dividend <= 999
    && divisor >= 2
    && divisor <= 9;
}

function isDivisionRemainderRedirect(dividend, divisor) {
  return isValidDivisionShape(dividend, divisor)
    && Math.floor(dividend / divisor) >= 100
    && dividend % divisor > 0;
}

function randomDivisionProblem(allowsRemainder) {
  const divisor = Math.floor(Math.random() * 8) + 2;
  const maxQuotient = Math.floor(999 / divisor);
  const quotient = Math.floor(Math.random() * (maxQuotient - 100 + 1)) + 100;
  const remainder = allowsRemainder ? Math.floor(Math.random() * (divisor - 1)) + 1 : 0;
  return { top: divisor * quotient + remainder, bottom: divisor };
}

function divisionGuardrailMessage(workspace) {
  return workspace.allowsRemainder
    ? "Use a 3-digit dividend and a 1-digit divisor from 2 to 9 with a nonzero remainder."
    : "Use a 3-digit dividend and a 1-digit divisor from 2 to 9 with no remainder.";
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
      state.activeWorkspaceId = state.progress.currentWorkspaceId || "arithmetic.long-subtraction.3x3";
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
