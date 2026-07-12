#!/usr/bin/env node
"use strict";

// Release gate for authored practice data. Keep this DOM-free so it can run on
// the droplet, in CI, or locally without installing browser dependencies.

const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const practiceRoot = path.join(root, "practice");
const differentialEquationsCourseRoot = path.join(root, "courses", "differential-equations");
const ignoredDirectories = new Set(["how-this-works"]);
const ignoredFiles = new Set(["practice-format.js"]);

function practiceFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      return ignoredDirectories.has(entry.name) ? [] : practiceFiles(fullPath);
    }
    return entry.isFile() && entry.name.endsWith(".js") && !ignoredFiles.has(entry.name)
      ? [fullPath]
      : [];
  });
}

function normalize(value) {
  return String(value ?? "")
    .replace(/<\/?math>/g, "")
    .trim()
    .toLowerCase()
    .replace(/[−–—]/g, "-")
    .replace(/π/g, "pi")
    .replace(/θ/g, "theta")
    .replace(/²/g, "^2")
    .replace(/³/g, "^3")
    .replace(/×|·/g, "*")
    .replace(/\s+/g, "");
}

function choiceValue(choice) {
  return typeof choice === "object" && choice !== null ? choice.value : choice;
}

function loadWorkspaces() {
  const context = {
    window: {
      CarryPractice: { sections: {}, modes: {} },
    },
  };
  vm.createContext(context);
  vm.runInContext(fs.readFileSync(path.join(differentialEquationsCourseRoot, "course.js"), "utf8"), context, {
    filename: "courses/differential-equations/course.js",
  });
  practiceFiles(practiceRoot).sort().forEach((file) => {
    vm.runInContext(fs.readFileSync(file, "utf8"), context, {
      filename: path.relative(root, file),
    });
  });
  practiceFiles(path.join(differentialEquationsCourseRoot, "lessons")).sort().forEach((file) => {
    vm.runInContext(fs.readFileSync(file, "utf8"), context, {
      filename: path.relative(root, file),
    });
  });
  practiceFiles(path.join(differentialEquationsCourseRoot, "workspaces")).sort().forEach((file) => {
    vm.runInContext(fs.readFileSync(file, "utf8"), context, {
      filename: path.relative(root, file),
    });
  });
  return Object.values(context.window.CarryPractice.sections)
    .flatMap((section) => Object.values(section));
}

function inspectConceptProblem(workspace, problem, index, issues) {
  const location = `${workspace.id} problem ${index + 1}`;
  const answers = [problem.answer, ...(problem.answers || [])]
    .map(normalize)
    .filter(Boolean);
  const choices = Array.isArray(problem.choices) ? problem.choices : [];

  if (!String(problem.prompt || "").trim()) issues.push(`${location}: missing prompt`);
  if (!answers.length) issues.push(`${location}: missing accepted answer`);
  if (!String(problem.hint || "").trim()) issues.push(`${location}: missing hint`);
  if (!choices.length) return;
  if (choices.length < 2 || choices.length > 4) {
    issues.push(`${location}: expected 2-4 choices, found ${choices.length}`);
  }

  const values = choices.map(choiceValue).map(normalize).filter(Boolean);
  if (new Set(values).size !== values.length) issues.push(`${location}: duplicate choice values`);
  if (answers.length && !values.some((value) => answers.includes(value))) {
    issues.push(`${location}: choices do not include an accepted answer`);
  }
}

function inspectStructuredProblem(workspace, problem, problemIndex, issues) {
  const rows = Array.isArray(problem.rows) ? problem.rows : [];
  if (!rows.length) return;
  rows.forEach((row, rowIndex) => {
    ["left", "right"].forEach((side) => {
      const value = row?.[side];
      if (!value || typeof value !== "object" || !("answer" in value)) return;
      const location = `${workspace.id} problem ${problemIndex + 1}, row ${rowIndex + 1} ${side}`;
      const primary = normalize(value.answer);
      const accepted = Array.isArray(value.answers) ? value.answers.map(normalize).filter(Boolean) : [];
      if (!primary) issues.push(`${location}: missing answer`);
      if (!String(value.hint || "").trim()) issues.push(`${location}: missing hint`);
      if (accepted.length && !accepted.includes(primary)) {
        issues.push(`${location}: accepted answers omit the primary answer`);
      }
    });
  });
}

function main() {
  const workspaces = loadWorkspaces();
  const issues = [];
  let problemCount = 0;

  workspaces.forEach((workspace) => {
    const problems = Array.isArray(workspace.problems) ? workspace.problems : [];
    problemCount += problems.length;
    if (!workspace.id) issues.push("workspace without an id");
    if (!problems.length) issues.push(`${workspace.id || "unknown workspace"}: no problems`);
    if (problems.length > 0 && problems.length < 8) {
      issues.push(`${workspace.id || "unknown workspace"}: expected at least 8 problems, found ${problems.length}`);
    }
    if (workspace.type === "concept") {
      problems.forEach((problem, index) => inspectConceptProblem(workspace, problem, index, issues));
    }
    problems.forEach((problem, index) => inspectStructuredProblem(workspace, problem, index, issues));
  });

  if (issues.length) {
    console.error(`Lesson QA failed with ${issues.length} ${issues.length === 1 ? "issue" : "issues"}:`);
    issues.forEach((issue) => console.error(`- ${issue}`));
    process.exitCode = 1;
    return;
  }

  console.log(`Lesson QA passed: ${workspaces.length} workspaces, ${problemCount} problems.`);
}

main();
