// Carry Lesson Specification compiler. This module is DOM-free so authored
// lessons can be checked in Node before their generated workspaces reach the app.
(function exposeCarryLessonSpec(root, factory) {
  const api = factory();
  root.CarryLessonSpec = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(typeof window !== "undefined" ? window : globalThis, function createCarryLessonSpec() {
  const SPEC_VERSION = "carry.lesson/v1";
  const ENGINE_TYPES = {
    "matrix-operation": { workspaceType: "matrix-operation", responseKinds: ["matrix"] },
    "long-addition": { workspaceType: "addition", responseKinds: ["digit-grid"] },
    "guided-derivation": { workspaceType: "guided-derivation", responseKinds: ["derivation"] },
    "equation-transform": { workspaceType: "guided-derivation", responseKinds: ["transformation"] }
  };
  const ENTRY_KINDS = new Set(["number", "expression"]);
  const TRAVERSALS = new Set(["row-major", "column-major", "guided"]);
  const DIFFICULTY_LABELS = new Set(["introductory", "developing", "challenging"]);

  function validateLesson(spec, options = {}) {
    const issues = [];
    const issue = (path, message) => issues.push(`${path}: ${message}`);

    if (!isObject(spec)) return { valid: false, issues: ["lesson: expected an object"] };
    rejectUnknown(spec, ["$schema", "spec", "id", "subject", "section", "topic", "title", "objectives", "requires", "teaches", "registration", "learn", "practice"], "lesson", issue);
    if (spec.spec !== SPEC_VERSION) issue("spec", `expected ${SPEC_VERSION}`);
    requireIdentifier(spec.id, "id", issue);
    requireIdentifier(spec.section, "section", issue);
    requireText(spec.subject, "subject", issue);
    requireText(spec.topic, "topic", issue);
    requireText(spec.title, "title", issue);
    validateTextList(spec.objectives, "objectives", issue, { plain: true });
    validateIdentifierList(spec.requires, "requires", issue);
    validateIdentifierList(spec.teaches, "teaches", issue);

    validateRegistration(spec.registration, issue);
    validateLearn(spec.learn, issue, options);
    validatePractice(spec.practice, issue, options);

    return { valid: issues.length === 0, issues };
  }

  function validateRegistration(registration, issue) {
    if (registration == null) return;
    if (!isObject(registration)) {
      issue("registration", "expected an object");
      return;
    }
    rejectUnknown(registration, registration.kind === "long-operation" ? ["kind", "key"] : ["kind"], "registration", issue);
    if (!new Set(["section", "long-operation"]).has(registration.kind)) {
      issue("registration.kind", "expected section or long-operation");
    }
    if (registration.kind === "long-operation" && !String(registration.key || "").trim()) {
      issue("registration.key", "is required for a long-operation registration");
    }
  }

  function validateLearn(learn, issue, options) {
    if (!isObject(learn)) {
      issue("learn", "expected an object");
      return;
    }
    rejectUnknown(learn, ["figure", "core", "workedExample", "studio", "applications", "notice", "workspace"], "learn", issue);
    if (!Array.isArray(learn.core) || learn.core.length === 0) {
      issue("learn.core", "expected at least one content block");
    } else {
      learn.core.forEach((block, index) => validateContentBlock(block, `learn.core[${index}]`, issue));
    }

    if (learn.figure != null) {
      if (!isObject(learn.figure)) {
        issue("learn.figure", "expected an object");
      } else {
        rejectUnknown(learn.figure, ["renderer", "id", "caption", "params"], "learn.figure", issue);
        if (learn.figure.renderer !== "carry") issue("learn.figure.renderer", "v1 supports the carry renderer");
        requireIdentifier(learn.figure.id, "learn.figure.id", issue);
        requirePlainText(learn.figure.caption, "learn.figure.caption", issue);
        const figureDefinition = catalogEntry(options.catalog?.figures, learn.figure.id);
        if (options.catalog?.figures && !figureDefinition) {
          issue("learn.figure.id", `unknown v1 figure ${learn.figure.id}`);
        } else if (learn.figure.params != null) {
          validateFigureParams(learn.figure.params, figureDefinition, "learn.figure.params", issue);
        }
      }
    }

    for (const key of ["studio", "applications", "notice", "workspace"]) {
      if (learn[key] == null) continue;
      if (!Array.isArray(learn[key])) {
        issue(`learn.${key}`, "expected an array");
        continue;
      }
      learn[key].forEach((block, index) => validateContentBlock(block, `learn.${key}[${index}]`, issue));
    }

    if (learn.workedExample != null) {
      if (!Array.isArray(learn.workedExample) || learn.workedExample.length === 0) {
        issue("learn.workedExample", "expected at least one worked row");
      } else {
        learn.workedExample.forEach((row, index) => {
          if (!isObject(row)) {
            issue(`learn.workedExample[${index}]`, "expected an object");
            return;
          }
          rejectUnknown(row, ["math", "note"], `learn.workedExample[${index}]`, issue);
          requireMath(row.math, `learn.workedExample[${index}].math`, issue);
          validateContentBlock(row.note, `learn.workedExample[${index}].note`, issue);
        });
      }
    }
  }

  function validateContentBlock(block, path, issue) {
    if (!isObject(block)) {
      issue(path, "expected a content block");
      return;
    }
    if (block.type === "math") {
      rejectUnknown(block, ["type", "tex"], path, issue);
      requireMath(block.tex, `${path}.tex`, issue);
      return;
    }
    if (block.type !== "paragraph") {
      issue(`${path}.type`, "expected paragraph or math");
      return;
    }
    rejectUnknown(block, ["type", "runs"], path, issue);
    if (!Array.isArray(block.runs) || block.runs.length === 0) {
      issue(`${path}.runs`, "expected at least one text or math run");
      return;
    }
    block.runs.forEach((run, index) => {
      const runPath = `${path}.runs[${index}]`;
      if (!isObject(run) || (Object.hasOwn(run, "text") === Object.hasOwn(run, "math"))) {
        issue(runPath, "expected exactly one text or math value");
        return;
      }
      rejectUnknown(run, Object.hasOwn(run, "text") ? ["text"] : ["math"], runPath, issue);
      if (Object.hasOwn(run, "text")) requirePlainText(run.text, `${runPath}.text`, issue);
      if (Object.hasOwn(run, "math")) requireMath(run.math, `${runPath}.math`, issue);
    });
  }

  function validatePractice(practice, issue, options) {
    if (!isObject(practice)) {
      issue("practice", "expected an object");
      return;
    }
    rejectUnknown(practice, ["engine", "response", "problems"], "practice", issue);
    const engine = ENGINE_TYPES[practice.engine];
    if (!engine) issue("practice.engine", `unknown v1 engine ${practice.engine || "(missing)"}`);
    validateResponse(practice.response, engine, issue);
    if (!Array.isArray(practice.problems) || practice.problems.length === 0) {
      issue("practice.problems", "expected at least one problem");
      return;
    }
    const ids = new Set();
    practice.problems.forEach((problem, index) => {
      const path = `practice.problems[${index}]`;
      if (!isObject(problem)) {
        issue(path, "expected an object");
        return;
      }
      rejectUnknown(problem, ["id", "prompt", "difficulty", "transformations", "givens"], path, issue);
      requireIdentifier(problem.id, `${path}.id`, issue);
      if (ids.has(problem.id)) issue(`${path}.id`, "must be unique within the lesson");
      ids.add(problem.id);
      validateContentBlock(problem.prompt, `${path}.prompt`, issue);
      validateDifficulty(problem.difficulty, `${path}.difficulty`, issue);
      validateProblemForEngine(problem, practice.engine, path, issue, options);
    });
  }

  function validateResponse(response, engine, issue) {
    if (!isObject(response)) {
      issue("practice.response", "expected an object");
      return;
    }
    rejectUnknown(response, ["kind", "entry", "traversal"], "practice.response", issue);
    if (engine && !engine.responseKinds.includes(response.kind)) {
      issue("practice.response.kind", `expected ${engine.responseKinds.join(" or ")} for this engine`);
    }
    if (response.entry != null && !ENTRY_KINDS.has(response.entry)) {
      issue("practice.response.entry", "expected number or expression");
    }
    if (response.traversal != null && !TRAVERSALS.has(response.traversal)) {
      issue("practice.response.traversal", "expected row-major, column-major, or guided");
    }
    for (const forbidden of ["width", "height", "columns", "breakpoint", "style", "className"]) {
      if (Object.hasOwn(response, forbidden)) {
        issue(`practice.response.${forbidden}`, "layout belongs to the responsive Carry renderer");
      }
    }
  }

  function validateProblemForEngine(problem, engine, path, issue, options) {
    const givens = problem.givens;
    if (!isObject(givens)) {
      issue(`${path}.givens`, "expected an object");
      return;
    }
    if (engine === "matrix-operation") {
      rejectUnknown(givens, ["operation", "left", "right"], `${path}.givens`, issue);
      if (!new Set(["add", "subtract", "multiply"]).has(givens.operation)) {
        issue(`${path}.givens.operation`, "expected add, subtract, or multiply");
      }
      validateMatrix(givens.left, `${path}.givens.left`, issue);
      validateMatrix(givens.right, `${path}.givens.right`, issue);
      validateMatrixCompatibility(givens, path, issue);
      return;
    }
    if (engine === "long-addition") {
      rejectUnknown(givens, ["top", "bottom"], `${path}.givens`, issue);
      for (const key of ["top", "bottom"]) {
        if (!Number.isInteger(givens[key]) || givens[key] < 0 || givens[key] > 999) {
          issue(`${path}.givens.${key}`, "expected an integer from 0 through 999");
        }
      }
      return;
    }
    if (engine === "guided-derivation" || engine === "equation-transform") {
      rejectUnknown(givens, ["rows"], `${path}.givens`, issue);
      validateDerivationRows(givens.rows, `${path}.givens.rows`, issue);
      validateTransformations(problem.transformations, givens.rows, engine, `${path}.transformations`, issue, options);
    }
  }

  function validateMatrix(matrix, path, issue) {
    if (!Array.isArray(matrix) || matrix.length === 0 || !Array.isArray(matrix[0]) || matrix[0].length === 0) {
      issue(path, "expected a nonempty matrix");
      return;
    }
    const columns = matrix[0].length;
    matrix.forEach((row, rowIndex) => {
      if (!Array.isArray(row) || row.length !== columns) {
        issue(`${path}[${rowIndex}]`, "matrix rows must have equal length");
      } else if (row.some((value) => typeof value !== "number" || !Number.isFinite(value))) {
        issue(`${path}[${rowIndex}]`, "matrix entries must be finite numbers");
      }
    });
  }

  function validateMatrixCompatibility(givens, path, issue) {
    if (!Array.isArray(givens.left?.[0]) || !Array.isArray(givens.right?.[0])) return;
    const leftRows = givens.left.length;
    const leftCols = givens.left[0].length;
    const rightRows = givens.right.length;
    const rightCols = givens.right[0].length;
    if (["add", "subtract"].includes(givens.operation) && (leftRows !== rightRows || leftCols !== rightCols)) {
      issue(`${path}.givens`, "entrywise operations require matrices with matching dimensions");
    }
    if (givens.operation === "multiply" && leftCols !== rightRows) {
      issue(`${path}.givens`, "matrix multiplication requires matching inner dimensions");
    }
  }

  function validateDerivationRows(rows, path, issue) {
    if (!Array.isArray(rows) || rows.length === 0) {
      issue(path, "expected at least one derivation row");
      return;
    }
    const ids = new Set();
    rows.forEach((row, index) => {
      const rowPath = `${path}[${index}]`;
      if (!isObject(row)) {
        issue(rowPath, "expected an object");
        return;
      }
      rejectUnknown(row, ["id", "label", "left", "relation", "right"], rowPath, issue);
      requireIdentifier(row.id, `${rowPath}.id`, issue);
      if (ids.has(row.id)) issue(`${rowPath}.id`, "must be unique within the derivation");
      ids.add(row.id);
      requireText(row.label, `${rowPath}.label`, issue);
      requireText(row.relation, `${rowPath}.relation`, issue);
      validateDerivationSide(row.left, `${rowPath}.left`, issue);
      validateDerivationSide(row.right, `${rowPath}.right`, issue);
    });
    if (!rows.some((row) => row?.left?.kind === "slot" || row?.right?.kind === "slot")) {
      issue(path, "expected at least one learner response slot");
    }
  }

  function validateDerivationSide(side, path, issue) {
    if (!isObject(side) || !new Set(["fixed", "slot"]).has(side.kind)) {
      issue(path, "expected a fixed or slot side");
      return;
    }
    if (side.kind === "fixed") {
      rejectUnknown(side, ["kind", "math"], path, issue);
      requireMath(side.math, `${path}.math`, issue);
      return;
    }
    rejectUnknown(side, ["kind", "response", "expected", "accepted", "display", "hint", "misconceptions", "label", "placeholder"], path, issue);
    if (side.response !== "expression") issue(`${path}.response`, "v1 derivation slots use expression responses");
    requireText(side.expected, `${path}.expected`, issue);
    requireMath(side.display || side.expected, `${path}.display`, issue);
    validateHint(side.hint, `${path}.hint`, issue);
    requireText(side.label, `${path}.label`, issue);
    if (side.accepted != null && (!Array.isArray(side.accepted) || side.accepted.some((value) => typeof value !== "string"))) {
      issue(`${path}.accepted`, "expected an array of strings");
    }
    validateMisconceptions(side.misconceptions, `${path}.misconceptions`, issue);
    const accepted = new Set([side.expected, ...(Array.isArray(side.accepted) ? side.accepted : [])]
      .map((value) => String(value || "").trim().toLowerCase()));
    (side.misconceptions || []).forEach((misconception, index) => {
      if (accepted.has(String(misconception?.matches || "").trim().toLowerCase())) {
        issue(`${path}.misconceptions[${index}].matches`, "must not duplicate an accepted answer");
      }
    });
  }

  function compileLesson(spec, options = {}) {
    const validation = validateLesson(spec, options);
    if (!validation.valid) throw new Error(`Invalid Carry lesson:\n- ${validation.issues.join("\n- ")}`);

    const engine = ENGINE_TYPES[spec.practice.engine];
    const figure = spec.learn.figure;
    const workspace = {
      id: spec.id,
      topic: spec.topic,
      title: spec.title,
      type: engine.workspaceType,
      ...(figure ? {
        figure: figure.id,
        figureCaption: figure.caption,
        ...(figure.params ? { figureParams: cloneData(figure.params) } : {})
      } : {}),
      ...(spec.objectives?.length ? { objectives: [...spec.objectives] } : {}),
      ...(spec.requires?.length ? { requires: [...spec.requires] } : {}),
      ...(spec.teaches?.length ? { teaches: [...spec.teaches] } : {}),
      intro: spec.learn.core.map(compileContentBlock),
      overview: compileOverview(spec.learn),
      problems: spec.practice.problems.map((problem) => compileProblem(problem, spec.practice.engine)),
      responseContract: { ...spec.practice.response },
      authoring: { spec: SPEC_VERSION, engine: spec.practice.engine, source: options.source || "" }
    };
    if (workspace.type === "addition") workspace.problem = workspace.problems[0];

    const registration = spec.registration || { kind: "section" };
    return {
      target: registration.kind === "long-operation"
        ? { kind: "long-operation", key: registration.key }
        : { kind: "section", section: spec.section },
      workspace
    };
  }

  function compileOverview(learn) {
    const overview = {};
    if (learn.workedExample?.length) {
      overview.workedRows = learn.workedExample.map((row) => ({
        math: row.math,
        note: compileContentBlock(row.note)
      }));
    }
    for (const key of ["studio", "applications", "notice", "workspace"]) {
      if (learn[key]?.length) overview[key] = learn[key].map(compileContentBlock);
    }
    return overview;
  }

  function compileContentBlock(block) {
    if (block.type === "math") return `<math>${block.tex}</math>`;
    return block.runs.map((run) => Object.hasOwn(run, "math") ? `<math>${run.math}</math>` : run.text).join("");
  }

  function compileProblem(problem, engine) {
    const prompt = compileContentBlock(problem.prompt);
    const metadata = problem.difficulty == null ? {} : { difficulty: problem.difficulty };
    if (engine === "matrix-operation") return { id: problem.id, prompt, ...metadata, ...problem.givens };
    if (engine === "long-addition") return { id: problem.id, prompt, ...metadata, ...problem.givens };
    if (engine === "guided-derivation" || engine === "equation-transform") {
      const transformations = (problem.transformations || []).map((transformation) => ({
        operation: transformation.operation || transformation.justification,
        from: transformation.from,
        to: transformation.to
      }));
      const byTarget = new Map(transformations.map((transformation) => [transformation.to, transformation]));
      return {
        id: problem.id,
        prompt,
        ...metadata,
        engine,
        ...(transformations.length ? { transformations } : {}),
        rows: problem.givens.rows.map((row) => ({
          id: row.id,
          label: row.label,
          left: compileDerivationSide(row.left),
          relation: row.relation,
          right: compileDerivationSide(row.right),
          ...(byTarget.has(row.id) ? { transformation: byTarget.get(row.id) } : {})
        }))
      };
    }
    throw new Error(`Unsupported Carry lesson engine: ${engine}`);
  }

  function compileDerivationSide(side) {
    if (side.kind === "fixed") return side.math;
    return {
      answer: side.expected,
      answers: [...new Set([side.expected, ...(side.accepted || [])])],
      math: side.display || side.expected,
      hint: hintLevels(side.hint)[0],
      hints: hintLevels(side.hint),
      ...(side.misconceptions?.length ? { misconceptions: cloneData(side.misconceptions) } : {}),
      label: side.label,
      placeholder: side.placeholder || "Enter expression",
      responseKind: side.response
    };
  }

  function validateTextList(value, path, issue, options = {}) {
    if (value == null) return;
    if (!Array.isArray(value) || value.length === 0) {
      issue(path, "expected a nonempty array");
      return;
    }
    const seen = new Set();
    value.forEach((entry, index) => {
      const entryPath = `${path}[${index}]`;
      if (options.plain) requirePlainText(entry, entryPath, issue);
      else requireText(entry, entryPath, issue);
      const normalized = String(entry || "").trim().toLowerCase();
      if (seen.has(normalized)) issue(entryPath, "must be unique");
      seen.add(normalized);
    });
  }

  function validateIdentifierList(value, path, issue) {
    if (value == null) return;
    if (!Array.isArray(value) || value.length === 0) {
      issue(path, "expected a nonempty array");
      return;
    }
    const seen = new Set();
    value.forEach((entry, index) => {
      requireIdentifier(entry, `${path}[${index}]`, issue);
      if (seen.has(entry)) issue(`${path}[${index}]`, "must be unique");
      seen.add(entry);
    });
  }

  function validateFigureParams(params, definition, path, issue) {
    if (!isObject(params)) {
      issue(path, "expected an object");
      return;
    }
    const definitions = isObject(definition?.params) ? definition.params : {};
    rejectUnknown(params, Object.keys(definitions), path, issue);
    Object.entries(params).forEach(([key, value]) => {
      const expected = definitions[key]?.type;
      const valuePath = `${path}.${key}`;
      if (!expected) return;
      if (expected === "number" && (typeof value !== "number" || !Number.isFinite(value))) {
        issue(valuePath, "expected a finite number");
      } else if (expected === "boolean" && typeof value !== "boolean") {
        issue(valuePath, "expected true or false");
      } else if (expected === "text") {
        requirePlainText(value, valuePath, issue);
      } else if (expected === "math") {
        requireMath(value, valuePath, issue);
      }
    });
  }

  function validateDifficulty(value, path, issue) {
    if (value == null) return;
    if (Number.isInteger(value) && value >= 1 && value <= 5) return;
    if (DIFFICULTY_LABELS.has(value)) return;
    issue(path, "expected an integer from 1 through 5 or introductory, developing, or challenging");
  }

  function validateHint(value, path, issue) {
    if (typeof value === "string") {
      requirePlainText(value, path, issue);
      return;
    }
    if (!isObject(value)) {
      issue(path, "expected text or progressive hint levels");
      return;
    }
    rejectUnknown(value, ["level1", "level2", "level3"], path, issue);
    requirePlainText(value.level1, `${path}.level1`, issue);
    if (value.level2 != null) requirePlainText(value.level2, `${path}.level2`, issue);
    if (value.level3 != null) {
      if (value.level2 == null) issue(`${path}.level2`, "is required before level3");
      requirePlainText(value.level3, `${path}.level3`, issue);
    }
  }

  function hintLevels(value) {
    if (typeof value === "string") return [value];
    return [value?.level1, value?.level2, value?.level3].filter(Boolean);
  }

  function validateMisconceptions(value, path, issue) {
    if (value == null) return;
    if (!Array.isArray(value) || value.length === 0) {
      issue(path, "expected a nonempty array");
      return;
    }
    const seen = new Set();
    value.forEach((entry, index) => {
      const entryPath = `${path}[${index}]`;
      if (!isObject(entry)) {
        issue(entryPath, "expected an object");
        return;
      }
      rejectUnknown(entry, ["matches", "feedback"], entryPath, issue);
      requireText(entry.matches, `${entryPath}.matches`, issue);
      requirePlainText(entry.feedback, `${entryPath}.feedback`, issue);
      const normalized = String(entry.matches || "").trim().toLowerCase();
      if (seen.has(normalized)) issue(`${entryPath}.matches`, "must be unique within the slot");
      seen.add(normalized);
    });
  }

  function validateTransformations(value, rows, engine, path, issue, options) {
    if (value == null) {
      if (engine === "equation-transform") issue(path, "is required for the equation-transform engine");
      return;
    }
    if (!Array.isArray(value) || value.length === 0) {
      issue(path, "expected a nonempty array");
      return;
    }
    const rowList = Array.isArray(rows) ? rows : [];
    const rowIds = new Set(rowList.map((row) => row?.id));
    const rowOrder = new Map(rowList.map((row, index) => [row?.id, index]));
    const targets = new Set();
    value.forEach((entry, index) => {
      const entryPath = `${path}[${index}]`;
      if (!isObject(entry)) {
        issue(entryPath, "expected an object");
        return;
      }
      rejectUnknown(entry, ["operation", "justification", "from", "to"], entryPath, issue);
      const operation = entry.operation || entry.justification;
      if (entry.operation && entry.justification) issue(entryPath, "use operation or justification, not both");
      requireIdentifier(operation, `${entryPath}.operation`, issue);
      requireIdentifier(entry.from, `${entryPath}.from`, issue);
      requireIdentifier(entry.to, `${entryPath}.to`, issue);
      if (entry.from && !rowIds.has(entry.from)) issue(`${entryPath}.from`, "must identify a derivation row");
      if (entry.to && !rowIds.has(entry.to)) issue(`${entryPath}.to`, "must identify a derivation row");
      if (rowOrder.has(entry.from) && rowOrder.has(entry.to) && rowOrder.get(entry.from) >= rowOrder.get(entry.to)) {
        issue(`${entryPath}.to`, "must identify a later row");
      }
      if (targets.has(entry.to)) issue(`${entryPath}.to`, "may have only one incoming transformation");
      targets.add(entry.to);
      const definition = catalogEntry(options.catalog?.transformations, operation);
      if (options.catalog?.transformations && !definition) issue(`${entryPath}.operation`, `unknown transformation ${operation}`);
    });
    if (engine === "equation-transform") {
      rowList.slice(1).forEach((row, index) => {
        if (!targets.has(row?.id)) issue(`${path}`, `missing a transformation to row ${row?.id || index + 2}`);
      });
    }
  }

  function catalogEntry(collection, id) {
    if (Array.isArray(collection)) return collection.includes(id) ? { id } : null;
    if (isObject(collection) && Object.hasOwn(collection, id)) return collection[id] || { id };
    return null;
  }

  function cloneData(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function requireIdentifier(value, path, issue) {
    if (!/^[a-z0-9]+(?:[.-][a-z0-9]+)*$/.test(String(value || ""))) {
      issue(path, "expected a stable lowercase identifier");
    }
  }

  function rejectUnknown(value, allowed, path, issue) {
    if (!isObject(value)) return;
    const allowedKeys = new Set(allowed);
    Object.keys(value).forEach((key) => {
      if (!allowedKeys.has(key)) issue(`${path}.${key}`, "is not part of Carry Lesson Specification v1");
    });
  }

  function requireText(value, path, issue) {
    if (!String(value || "").trim()) issue(path, "is required");
  }

  function requirePlainText(value, path, issue) {
    requireText(value, path, issue);
    if (/[<>]/.test(String(value || ""))) issue(path, "raw markup is not allowed; use a math run");
  }

  function requireMath(value, path, issue) {
    requireText(value, path, issue);
    if (/[<>]/.test(String(value || ""))) issue(path, "raw markup is not allowed in math source");
  }

  function isObject(value) {
    return Boolean(value && typeof value === "object" && !Array.isArray(value));
  }

  return { ENGINE_TYPES, SPEC_VERSION, compileContentBlock, compileLesson, validateLesson };
});
