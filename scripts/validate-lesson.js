#!/usr/bin/env node
"use strict";

const fs = require("node:fs");
const path = require("node:path");
const { compileLesson, validateLesson } = require("../core/lesson-spec.js");

const root = path.resolve(__dirname, "..");
const catalog = JSON.parse(
  fs.readFileSync(path.join(root, "authoring", "catalogs", "carry-v1.json"), "utf8")
);

function fail(message) {
  console.error(message);
  process.exitCode = 1;
}

function main() {
  const input = process.argv[2];
  if (!input || process.argv.length > 3) {
    fail("Usage: npm run lesson:validate -- path/to/lesson.carry.json");
    return;
  }

  const file = path.resolve(process.cwd(), input);
  let lesson;
  try {
    lesson = JSON.parse(fs.readFileSync(file, "utf8"));
  } catch (error) {
    fail(`${input}: ${error.message}`);
    return;
  }

  const validation = validateLesson(lesson, { catalog });
  if (!validation.valid) {
    fail(`${input}:\n- ${validation.issues.join("\n- ")}`);
    return;
  }

  try {
    const compiled = compileLesson(lesson, { catalog, source: input });
    console.log(`Valid CLS lesson: ${compiled.workspace.title} (${compiled.workspace.authoring.engine})`);
  } catch (error) {
    fail(`${input}: ${error.message}`);
  }
}

main();
