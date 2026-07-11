const { test, expect } = require("@playwright/test");
const { freshPage } = require("./helpers");

test("scratchpad autosaves, duplicates a line, and renders math", async ({ page }) => {
  await freshPage(page, "/scratchpad");
  const input = page.locator("#scratchpadInput");

  await input.fill("x^2 + 1");
  await input.press("Control+Enter");
  await expect(input).toHaveValue("x^2 + 1\nx^2 + 1");

  await input.press("Control+Shift+M");
  await expect(page.locator("#scratchpadPanel")).toHaveAttribute("data-scratchpad-view", "rendered");
  await expect(page.locator("#scratchpadPreview math")).toHaveCount(2);
  await expect(page.locator("#scratchpadPreview")).toContainText("x");

  await page.reload();
  await expect(page.locator("#scratchpadInput")).toHaveValue("x^2 + 1\nx^2 + 1");
});
