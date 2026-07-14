const test = require("node:test");
const assert = require("node:assert/strict");
const learning = require("../../core/learning-record.js");

test("records independent and hinted capability evidence without a mastery score", () => {
  let record = learning.empty();
  record = learning.recordAttempt(record, {
    workspaceId: "differential-equations.separable",
    problemId: "sep-3xy",
    stepId: "separate-left",
    capabilityIds: ["differential-equations.separable.separate-variables"],
    correct: false,
    usedHint: false,
    at: "2026-07-12T10:00:00.000Z"
  });
  record = learning.recordAttempt(record, {
    workspaceId: "differential-equations.separable",
    problemId: "sep-3xy",
    stepId: "separate-left",
    capabilityIds: ["differential-equations.separable.separate-variables"],
    correct: true,
    usedHint: true,
    at: "2026-07-12T10:01:00.000Z"
  });

  const evidence = record.capabilities["differential-equations.separable.separate-variables"];
  assert.equal(evidence.attempts, 2);
  assert.equal(evidence.correct, 1);
  assert.equal(evidence.incorrect, 1);
  assert.equal(evidence.independentCorrect, 0);
  assert.equal(evidence.hintedCorrect, 1);
  assert.deepEqual(learning.summarize(record), { attempts: 2, practiced: 1, independent: 0, hinted: 1 });
  assert.equal("mastery" in evidence, false);
});
test("normalizes imported learning records and caps retained attempts", () => {
  const imported = {
    version: 99,
    attempts: Array.from({ length: 520 }, (_, index) => ({
      workspaceId: "arithmetic.long-division.3x1",
      capabilityIds: ["arithmetic.long-division.divide"],
      correct: index % 2 === 0
    })),
    capabilities: {
      "arithmetic.long-division.divide": { attempts: 4.9, correct: -2, independentCorrect: 2 }
    }
  };

  const record = learning.normalize(imported);
  assert.equal(record.version, 1);
  assert.equal(record.attempts.length, 500);
  assert.equal(record.capabilities["arithmetic.long-division.divide"].attempts, 4);
  assert.equal(record.capabilities["arithmetic.long-division.divide"].correct, 0);
});
