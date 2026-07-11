// Carry route service. Pure URL decisions live here; app.js owns browser history and UI state.
(function exposeCarryRouter(root, factory) {
  const api = factory();
  root.CarryRouter = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(typeof window !== "undefined" ? window : globalThis, function createRouterModule() {
  function slugify(value) {
    return String(value || "")
      .toLowerCase()
      .replace(/&/g, " and ")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function prefixForSurface(surface) {
    if (["physics", "tools", "games", "explorations", "scratchpad"].includes(surface)) return surface;
    return "math";
  }

  function create(options) {
    const {
      mathGroups,
      physicsGroups,
      lessonsForGroup,
      toolIds,
      gameIds,
      findExploration,
      defaultExplorationId
    } = options;

    function groupsForSurface(surface) {
      return surface === "physics" ? physicsGroups : mathGroups;
    }

    function surfaceForWorkspace(workspaceId) {
      return String(workspaceId || "").startsWith("physics.") ? "physics" : "learn";
    }

    function findMatch(surface, topicSlug, lessonSlug) {
      for (const group of groupsForSurface(surface)) {
        if (slugify(group.name) !== topicSlug) continue;
        const lesson = lessonsForGroup(group).find((item) => slugify(item.title) === lessonSlug);
        if (lesson) return { surface, topic: group.name, workspaceId: lesson.id };
      }
      return null;
    }

    function findForWorkspace(workspaceId) {
      const surface = surfaceForWorkspace(workspaceId);
      for (const group of groupsForSurface(surface)) {
        const lesson = lessonsForGroup(group).find((item) => item.id === workspaceId);
        if (!lesson) continue;
        return {
          surface,
          topic: group.name,
          path: `/${prefixForSurface(surface)}/${slugify(group.name)}/${slugify(lesson.title)}`
        };
      }
      return null;
    }

    function resolvePath(pathname) {
      const parts = String(pathname || "/").split("/").filter(Boolean);
      if (!parts.length) return null;
      if (parts[0] === "scratchpad") return { surface: "scratchpad" };
      if (parts[0] === "tools") {
        return { surface: "tools", tool: toolIds.includes(parts[1]) ? parts[1] : "random-number" };
      }
      if (parts[0] === "games") {
        return { surface: "games", game: gameIds.includes(parts[1]) ? parts[1] : "sudoku" };
      }
      if (parts[0] === "explorations") {
        return { surface: "explorations", exploration: findExploration(parts[1])?.id || defaultExplorationId };
      }
      if (!['math', 'physics'].includes(parts[0]) || parts.length < 3) return null;
      return findMatch(parts[0] === "physics" ? "physics" : "learn", parts[1], parts[2]);
    }

    function pathForState(current) {
      if (current.activeSurface === "scratchpad") return "/scratchpad";
      if (current.activeSurface === "tools") {
        const tool = toolIds.includes(current.activeTool) ? current.activeTool : "random-number";
        return `/tools/${tool}`;
      }
      if (current.activeSurface === "games") {
        const game = gameIds.includes(current.activeGame) ? current.activeGame : "sudoku";
        return `/games/${game}`;
      }
      if (current.activeSurface === "explorations") {
        const exploration = findExploration(current.activeExplorationId)?.id || defaultExplorationId;
        return `/explorations/${exploration}`;
      }
      return findForWorkspace(current.activeWorkspaceId)?.path || null;
    }

    return { findForWorkspace, findMatch, pathForState, resolvePath, slugify, surfaceForWorkspace };
  }

  return { create, prefixForSurface, slugify };
});

