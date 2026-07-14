// Pure local-first learner evidence model. It records observable attempts without
// turning them into an opaque mastery score.
(function exposeLearningRecord(root, factory) {
  const api = factory();
  root.CarryLearningRecord = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(typeof window !== "undefined" ? window : globalThis, function createLearningRecord() {
  const MAX_ATTEMPTS = 500;

  function empty() {
    return { version: 1, attempts: [], capabilities: {} };
  }

  function capabilityIds(values) {
    return [...new Set((Array.isArray(values) ? values : []).map(String).map((value) => value.trim()).filter(Boolean))];
  }

  function normalizeCapability(value = {}) {
    return {
      attempts: nonnegative(value.attempts),
      correct: nonnegative(value.correct),
      incorrect: nonnegative(value.incorrect),
      independentCorrect: nonnegative(value.independentCorrect),
      hintedCorrect: nonnegative(value.hintedCorrect),
      hints: nonnegative(value.hints),
      lastPracticedAt: typeof value.lastPracticedAt === "string" ? value.lastPracticedAt : ""
    };
  }

  function normalize(value) {
    const source = value && typeof value === "object" ? value : empty();
    const capabilities = Object.fromEntries(Object.entries(source.capabilities || {}).map(([id, evidence]) => [
      id,
      normalizeCapability(evidence)
    ]));
    const attempts = (Array.isArray(source.attempts) ? source.attempts : [])
      .filter((attempt) => attempt && typeof attempt === "object")
      .slice(0, MAX_ATTEMPTS)
      .map((attempt) => ({
        workspaceId: String(attempt.workspaceId || ""),
        problemId: String(attempt.problemId || ""),
        stepId: String(attempt.stepId || ""),
        capabilityIds: capabilityIds(attempt.capabilityIds),
        correct: Boolean(attempt.correct),
        usedHint: Boolean(attempt.usedHint),
        mode: attempt.mode === "practice" ? "practice" : "guided",
        at: typeof attempt.at === "string" ? attempt.at : ""
      }));
    return { version: 1, attempts, capabilities };
  }

  function recordAttempt(record, attempt = {}) {
    const next = normalize(record);
    const ids = capabilityIds(attempt.capabilityIds);
    if (!ids.length) return next;

    const at = typeof attempt.at === "string" && attempt.at ? attempt.at : new Date().toISOString();
    const entry = {
      workspaceId: String(attempt.workspaceId || ""),
      problemId: String(attempt.problemId || ""),
      stepId: String(attempt.stepId || ""),
      capabilityIds: ids,
      correct: Boolean(attempt.correct),
      usedHint: Boolean(attempt.usedHint),
      mode: attempt.mode === "practice" ? "practice" : "guided",
      at
    };
    next.attempts = [entry, ...next.attempts].slice(0, MAX_ATTEMPTS);

    ids.forEach((id) => {
      const evidence = normalizeCapability(next.capabilities[id]);
      evidence.attempts += 1;
      evidence.correct += entry.correct ? 1 : 0;
      evidence.incorrect += entry.correct ? 0 : 1;
      evidence.independentCorrect += entry.correct && !entry.usedHint ? 1 : 0;
      evidence.hintedCorrect += entry.correct && entry.usedHint ? 1 : 0;
      evidence.hints += entry.usedHint ? 1 : 0;
      evidence.lastPracticedAt = at;
      next.capabilities[id] = evidence;
    });

    return next;
  }

  function summarize(record) {
    const normalized = normalize(record);
    const evidence = Object.values(normalized.capabilities);
    return {
      attempts: normalized.attempts.length,
      practiced: evidence.filter((item) => item.attempts > 0).length,
      independent: evidence.filter((item) => item.independentCorrect > 0).length,
      hinted: evidence.filter((item) => item.hintedCorrect > 0).length
    };
  }

  function nonnegative(value) {
    const number = Number(value);
    return Number.isFinite(number) && number > 0 ? Math.floor(number) : 0;
  }

  return { empty, normalize, recordAttempt, summarize };
});
