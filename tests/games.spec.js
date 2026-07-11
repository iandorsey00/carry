const { test, expect } = require("@playwright/test");
const { freshPage } = require("./helpers");

test("Graph Color supports keyboard play and preserves focus", async ({ page }) => {
  await freshPage(page, "/games/graph-color");
  const node = page.locator("[data-graph-color-node]").first();
  await node.focus();
  await node.press("Enter");

  await expect(node).toBeFocused();
  await expect(node).toHaveAttribute("aria-label", /blue/i);
  await expect(page.locator("#graphColorStatus")).toContainText(/Keep coloring|connected nodes/i);
});

