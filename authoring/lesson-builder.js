// Browser-local authoring surface for Carry Lesson Specification sources.
(function exposeCarryLessonBuilder(root, factory) {
  const api = factory();
  root.CarryLessonBuilder = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(typeof window !== "undefined" ? window : globalThis, function createCarryLessonBuilderModule() {
  const STORAGE_KEY = "carry.lesson-builder.v1";
  const MAX_HISTORY = 12;
  const MAX_SOURCE_LENGTH = 100000;

  function normalizeState(value) {
    const state = value && typeof value === "object" ? value : {};
    return {
      version: 1,
      draft: typeof state.draft === "string" ? state.draft.slice(0, MAX_SOURCE_LENGTH) : "",
      history: Array.isArray(state.history)
        ? state.history.map(normalizeHistoryEntry).filter(Boolean).slice(0, MAX_HISTORY)
        : []
    };
  }

  function normalizeHistoryEntry(entry) {
    if (!entry || typeof entry !== "object" || typeof entry.source !== "string" || typeof entry.output !== "string") return null;
    return {
      id: String(entry.id || "").slice(0, 96),
      lessonId: String(entry.lessonId || "untitled").slice(0, 120),
      title: String(entry.title || "Untitled lesson").slice(0, 160),
      compiledAt: String(entry.compiledAt || ""),
      source: entry.source.slice(0, MAX_SOURCE_LENGTH),
      output: entry.output.slice(0, MAX_SOURCE_LENGTH)
    };
  }

  function compileSource(source, options = {}) {
    const text = String(source || "").trim();
    if (!text) return { ok: false, issues: ["Paste or write a CLS lesson first."] };
    if (text.length > MAX_SOURCE_LENGTH) {
      return { ok: false, issues: [`Lesson source exceeds the ${MAX_SOURCE_LENGTH.toLocaleString("en-US")}-character limit.`] };
    }
    if (!options.compiler?.validateLesson || !options.compiler?.compileLesson) {
      return { ok: false, issues: ["The CLS compiler is unavailable."] };
    }

    let spec;
    try {
      spec = JSON.parse(text);
    } catch (error) {
      return { ok: false, issues: [`Invalid JSON: ${error.message}`] };
    }

    const validation = options.compiler.validateLesson(spec, { catalog: options.catalog });
    if (!validation.valid) return { ok: false, issues: validation.issues };

    try {
      const compiled = options.compiler.compileLesson(spec, {
        catalog: options.catalog,
        source: "Carry Lesson Studio"
      });
      return { ok: true, spec, compiled, output: JSON.stringify(compiled, null, 2) };
    } catch (error) {
      return { ok: false, issues: [error.message] };
    }
  }

  function mount(options = {}) {
    const doc = options.document || (typeof document !== "undefined" ? document : null);
    const rootElement = doc?.querySelector("#lessonBuilderTool");
    if (!rootElement) return null;
    if (rootElement.dataset.mounted === "true") return rootElement.lessonBuilderController || null;

    const storage = options.storage || (typeof localStorage !== "undefined" ? localStorage : null);
    const fetcher = options.fetch || (typeof fetch !== "undefined" ? fetch.bind(globalThis) : null);
    const compiler = options.compiler || globalThis.CarryLessonSpec;
    const elements = {
      source: doc.querySelector("#lessonBuilderSource"),
      compile: doc.querySelector("#compileLessonSource"),
      status: doc.querySelector("#lessonBuilderStatus"),
      diagnostics: doc.querySelector("#lessonBuilderDiagnostics"),
      output: doc.querySelector("#lessonBuilderOutput"),
      run: doc.querySelector("#runCompiledLesson"),
      copyOutput: doc.querySelector("#copyCompiledLesson"),
      handoff: doc.querySelector("#lessonBuilderHandoff"),
      copyHandoff: doc.querySelector("#copyLessonHandoff"),
      history: doc.querySelector("#lessonBuilderHistory"),
      clearHistory: doc.querySelector("#clearLessonBuilderHistory")
    };

    let state = readState(storage);
    let catalog = null;
    let handoffText = "";
    let exampleSource = "";
    let currentOutput = "";
    let currentResult = null;

    function persist() {
      try {
        storage?.setItem(STORAGE_KEY, JSON.stringify(state));
        return true;
      } catch {
        setStatus("Carry could not save the Lesson Studio in this browser.", "error");
        return false;
      }
    }

    function setStatus(message, status = "ready") {
      elements.status.textContent = message;
      elements.status.dataset.state = status;
    }

    function renderDiagnostics(issues = []) {
      elements.diagnostics.replaceChildren();
      elements.diagnostics.hidden = issues.length === 0;
      for (const issue of issues) {
        const item = doc.createElement("li");
        item.textContent = issue;
        elements.diagnostics.append(item);
      }
    }

    function renderOutput(output = "", result = null) {
      currentOutput = output;
      currentResult = result;
      elements.output.textContent = output || "Compile a valid lesson to inspect its Carry workspace.";
      elements.output.dataset.empty = output ? "false" : "true";
      elements.copyOutput.disabled = !output;
      elements.run.disabled = !result;
    }

    function renderHistory() {
      elements.history.replaceChildren();
      elements.clearHistory.disabled = state.history.length === 0;
      if (!state.history.length) {
        const empty = doc.createElement("li");
        empty.className = "lesson-builder-history-empty";
        empty.textContent = "No compiled lessons yet.";
        elements.history.append(empty);
        return;
      }

      for (const entry of state.history) {
        const item = doc.createElement("li");
        const button = doc.createElement("button");
        const title = doc.createElement("strong");
        const details = doc.createElement("span");
        button.type = "button";
        button.dataset.lessonBuildId = entry.id;
        title.textContent = entry.title;
        details.textContent = `${entry.lessonId} - ${formatDate(entry.compiledAt)}`;
        button.append(title, details);
        item.append(button);
        elements.history.append(item);
      }
    }

    function compile() {
      if (!catalog) {
        setStatus("The CLS catalog is still loading. Try again in a moment.", "pending");
        return { ok: false, issues: ["The CLS catalog is unavailable."] };
      }
      state.draft = elements.source.value.slice(0, MAX_SOURCE_LENGTH);
      persist();
      const result = compileSource(state.draft, { compiler, catalog });
      if (!result.ok) {
        renderDiagnostics(result.issues);
        renderOutput();
        setStatus(`Compilation failed with ${result.issues.length} ${result.issues.length === 1 ? "issue" : "issues"}.`, "error");
        elements.diagnostics.focus({ preventScroll: true });
        return result;
      }

      const compiledAt = new Date().toISOString();
      const entry = normalizeHistoryEntry({
        id: `${compiledAt}-${result.spec.id}`,
        lessonId: result.spec.id,
        title: result.spec.title,
        compiledAt,
        source: state.draft,
        output: result.output
      });
      state.history = [entry, ...state.history].slice(0, MAX_HISTORY);
      persist();
      renderDiagnostics();
      renderOutput(result.output, result);
      renderHistory();
      setStatus(`Compiled ${result.spec.title}. Saved to this browser's history.`, "success");
      return result;
    }

    function restore(entryId) {
      const entry = state.history.find((item) => item.id === entryId);
      if (!entry) return;
      state.draft = entry.source;
      elements.source.value = entry.source;
      persist();
      renderDiagnostics();
      const result = compileSource(entry.source, { compiler, catalog });
      renderOutput(entry.output, result.ok ? result : null);
      setStatus(`Restored ${entry.title} from compilation history.`, "ready");
      elements.source.focus({ preventScroll: true });
    }

    function clearHistory() {
      state.history = [];
      persist();
      renderHistory();
      setStatus("Compilation history cleared. Your current draft remains available.", "ready");
    }

    function exportState() {
      state.draft = elements.source.value.slice(0, MAX_SOURCE_LENGTH);
      return normalizeState(state);
    }

    function importState(value) {
      state = normalizeState(value);
      elements.source.value = state.draft;
      renderDiagnostics();
      const result = state.history[0] && catalog
        ? compileSource(state.history[0].source, { compiler, catalog })
        : null;
      renderOutput(state.history[0]?.output || "", result?.ok ? result : null);
      renderHistory();
      persist();
    }

    async function loadResources() {
      if (!fetcher) {
        setStatus("The authoring handoff could not be loaded.", "error");
        return;
      }
      try {
        const [guideResponse, catalogResponse, schemaResponse, exampleResponse, reasoningExampleResponse] = await Promise.all([
          fetcher("/authoring/README.md"),
          fetcher("/authoring/catalogs/carry-v1.json"),
          fetcher("/authoring/schema/carry-lesson-v1.schema.json"),
          fetcher("/authoring/examples/arithmetic/long-addition.carry.json"),
          fetcher("/authoring/examples/differential-equations/separable-equation.carry.json")
        ]);
        for (const response of [guideResponse, catalogResponse, schemaResponse, exampleResponse, reasoningExampleResponse]) {
          if (!response.ok) throw new Error(`Request failed with ${response.status}`);
        }
        const [guide, loadedCatalog, schema, example, reasoningExample] = await Promise.all([
          guideResponse.text(),
          catalogResponse.json(),
          schemaResponse.json(),
          exampleResponse.text(),
          reasoningExampleResponse.text()
        ]);
        catalog = loadedCatalog;
        exampleSource = example.trim();
        handoffText = [
          guide.trim(),
          "## Carry Lesson Specification v1 catalog",
          "```json",
          JSON.stringify(loadedCatalog, null, 2),
          "```",
          "## Carry Lesson Specification v1 schema",
          "```json",
          JSON.stringify(schema, null, 2),
          "```",
          "## Equation transformation example",
          "```json",
          reasoningExample.trim(),
          "```"
        ].join("\n\n");
        elements.handoff.textContent = handoffText;
        elements.copyHandoff.disabled = false;
        elements.compile.disabled = false;
        if (!state.draft) {
          state.draft = exampleSource;
          elements.source.value = exampleSource;
          persist();
        }
        if (state.history[0]) {
          const restored = compileSource(state.history[0].source, { compiler, catalog });
          renderOutput(state.history[0].output, restored.ok ? restored : null);
        }
        setStatus("Ready. Paste a CLS lesson or edit the example, then compile.", "ready");
      } catch {
        setStatus("The CLS handoff or catalog could not be loaded. Reload Carry and try again.", "error");
      }
    }

    elements.source.value = state.draft;
    elements.source.addEventListener("input", () => {
      state.draft = elements.source.value.slice(0, MAX_SOURCE_LENGTH);
      currentResult = null;
      elements.run.disabled = true;
      setStatus("Draft changed. Compile it before running the lesson.", "ready");
      persist();
    });
    elements.source.addEventListener("keydown", (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
        event.preventDefault();
        compile();
      }
    });
    elements.compile.addEventListener("click", compile);
    elements.run.addEventListener("click", () => {
      if (!currentResult || typeof options.onRun !== "function") return;
      options.onRun(currentResult);
    });
    elements.copyOutput.addEventListener("click", async () => {
      if (!currentOutput) return;
      const copied = await copyText(currentOutput, doc);
      setStatus(copied ? "Compiled workspace copied." : "Carry could not copy the compiled workspace.", copied ? "success" : "error");
    });
    elements.copyHandoff.addEventListener("click", async () => {
      if (!handoffText) return;
      const copied = await copyText(handoffText, doc);
      setStatus(copied ? "AI authoring handoff copied." : "Carry could not copy the handoff.", copied ? "success" : "error");
    });
    elements.history.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-lesson-build-id]");
      if (button) restore(button.dataset.lessonBuildId);
    });
    elements.clearHistory.addEventListener("click", clearHistory);

    renderDiagnostics();
    renderOutput(state.history[0]?.output || "");
    renderHistory();
    elements.compile.disabled = true;
    elements.run.disabled = true;
    elements.copyHandoff.disabled = true;
    setStatus("Loading the CLS authoring handoff...", "pending");
    loadResources();

    const controller = { clearHistory, compile, exportState, importState, renderHistory };
    rootElement.dataset.mounted = "true";
    rootElement.lessonBuilderController = controller;
    return controller;
  }

  function readState(storage) {
    try {
      const stored = storage?.getItem(STORAGE_KEY);
      return normalizeState(stored ? JSON.parse(stored) : null);
    } catch {
      return normalizeState(null);
    }
  }

  function formatDate(value) {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "Unknown time";
    return new Intl.DateTimeFormat(undefined, { dateStyle: "medium", timeStyle: "short" }).format(date);
  }

  async function copyText(value, doc) {
    try {
      await globalThis.navigator?.clipboard?.writeText(value);
      if (globalThis.navigator?.clipboard) return true;
    } catch {
      // Fall through to the local selection-based copy path.
    }
    try {
      const field = doc.createElement("textarea");
      field.value = value;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.opacity = "0";
      doc.body.append(field);
      field.select();
      const copied = doc.execCommand("copy");
      field.remove();
      return copied;
    } catch {
      return false;
    }
  }

  return { MAX_HISTORY, MAX_SOURCE_LENGTH, STORAGE_KEY, compileSource, mount, normalizeState };
});
