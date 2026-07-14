const { test, expect } = require("@playwright/test");
const { freshPage } = require("./helpers");

test("scratchpad autosaves, duplicates with undo, and renders math", async ({ page }) => {
  await freshPage(page, "/scratchpad");
  const input = page.locator("#scratchpadInput");

  await expect(page).toHaveTitle("Carry Scratchpad");

  await input.fill("x^2 + 1");
  await input.press("Control+Enter");
  await expect(input).toHaveValue("x^2 + 1\nx^2 + 1");
  await input.press("Control+z");
  await expect(input).toHaveValue("x^2 + 1");

  await input.fill("first\nsecond\nthird");
  await input.press("ArrowUp");
  await input.press("Control+Shift+Enter");
  await expect(input).toHaveValue("first\nsecond\nthird\nsecond");

  await input.press("Control+Shift+M");
  await expect(page.locator("#scratchpadPanel")).toHaveAttribute("data-scratchpad-view", "rendered");
  await expect(page.locator("#scratchpadPreview math")).toHaveCount(4);
  await expect(page.locator("#scratchpadPreview")).toContainText("second");

  await page.reload();
  await expect(page.locator("#scratchpadInput")).toHaveValue("first\nsecond\nthird\nsecond");
});

test("scratchpad remains a single, top-aligned pane on wide screens", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await freshPage(page, "/scratchpad");
  const input = page.locator("#scratchpadInput");
  const preview = page.locator("#scratchpadPreview");

  await input.fill(Array.from({ length: 50 }, (_, index) => `x_${index + 1} = ${index + 1}`).join("\n"));
  await expect(input).toBeVisible();
  await expect(preview).toBeHidden();

  await page.locator("#scratchpadRenderedView").click();
  await expect(input).toBeHidden();
  await expect(preview).toBeVisible();
  await expect(preview).toHaveCSS("align-content", "start");
  await expect.poll(async () => preview.evaluate((element) => element.scrollHeight > element.clientHeight)).toBe(true);
});
