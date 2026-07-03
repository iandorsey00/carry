(function setupCarryExplorations() {
  const existing = Array.isArray(window.CarryExplorations?.entries)
    ? window.CarryExplorations.entries
    : [];

  function normalizeEntry(entry) {
    return {
      id: String(entry.id || "").trim(),
      date: String(entry.date || "").trim(),
      title: String(entry.title || "Untitled exploration").trim(),
      deck: String(entry.deck || "").trim(),
      tags: Array.isArray(entry.tags) ? entry.tags.map(String) : [],
      figure: entry.figure || null,
      sections: Array.isArray(entry.sections) ? entry.sections : [],
      hiddenResponse: entry.hiddenResponse || null
    };
  }

  function sortEntries(entries) {
    return entries.sort((left, right) => {
      const dateOrder = String(right.date).localeCompare(String(left.date));
      return dateOrder || String(left.title).localeCompare(String(right.title));
    });
  }

  window.CarryExplorations = {
    entries: sortEntries(existing.map(normalizeEntry).filter((entry) => entry.id)),
    register(entry) {
      const normalized = normalizeEntry(entry);
      if (!normalized.id) return;
      this.entries = sortEntries([
        normalized,
        ...this.entries.filter((item) => item.id !== normalized.id)
      ]);
    },
    find(id) {
      return this.entries.find((entry) => entry.id === id) || this.entries[0] || null;
    }
  };
})();
