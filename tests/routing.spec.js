const { test, expect } = require("@playwright/test");
const { expectNoPageErrors, freshPage } = require("./helpers");

test("a lesson opens directly from its readable URL", async ({ page }) => {
  await expectNoPageErrors(page, async () => {
    await freshPage(page, "/math/arithmetic/decimals");
    await expect(page.locator("#lessonTitle")).toHaveText("Decimals");
    await expect(page.locator("#startLesson")).toBeVisible();
    await expect(page).toHaveURL(/\/math\/arithmetic\/decimals$/);
  });
});

test("the main surfaces open from direct links", async ({ page }) => {
  for (const [path, marker] of [
    ["/scratchpad", "#scratchpadInput"],
    ["/games/graph-color", "#graphColorFigure"],
    ["/tools/random-number", "#randomNumberTool"],
    ["/tools/lesson-builder", "#lessonBuilderTool"],
  ]) {
    await page.goto(path);
    await expect(page.locator(marker)).toBeVisible();
  }
});
