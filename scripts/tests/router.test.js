const test = require("node:test");
const assert = require("node:assert/strict");
const { create, slugify } = require("../../core/router.js");

const groups = [
  { name: "Differential Equations", sections: [{ lessons: [{ id: "de.euler", title: "Euler's method" }] }] }
];
const physicsGroups = [
  { name: "Mechanics", sections: [{ lessons: [{ id: "physics.forces", title: "Forces" }] }] }
];
const router = create({
  mathGroups: groups,
  physicsGroups,
  lessonsForGroup: (group) => group.sections.flatMap((section) => section.lessons),
  toolIds: ["graphing", "lesson-builder"],
  gameIds: ["sudoku"],
  findExploration: (id) => id === "signal-boxes" ? { id } : null,
  defaultExplorationId: "signal-boxes"
});

test("slugifies readable curriculum names", () => {
  assert.equal(slugify("Euler's method"), "euler-s-method");
  assert.equal(slugify("GCD & LCM"), "gcd-and-lcm");
});

test("resolves math and physics lesson paths", () => {
  assert.deepEqual(router.resolvePath("/math/differential-equations/euler-s-method"), {
    surface: "learn",
    topic: "Differential Equations",
    workspaceId: "de.euler"
  });
  assert.equal(router.findForWorkspace("physics.forces").path, "/physics/mechanics/forces");
});

test("uses stable fallbacks for unknown tools and games", () => {
  assert.deepEqual(router.resolvePath("/tools/unknown"), { surface: "tools", tool: "random-number" });
  assert.deepEqual(router.resolvePath("/games/unknown"), { surface: "games", game: "sudoku" });
});

test("builds a path from application state", () => {
  assert.equal(router.pathForState({ activeSurface: "learn", activeWorkspaceId: "de.euler" }), "/math/differential-equations/euler-s-method");
  assert.equal(router.pathForState({ activeSurface: "tools", activeTool: "graphing" }), "/tools/graphing");
  assert.equal(router.resolvePath("/tools/lesson-builder").tool, "lesson-builder");
});
