const { test, expect } = require("@playwright/test");
const { freshPage, startLesson } = require("./helpers");

test("a typed answer checks and Return advances", async ({ page }) => {
  await freshPage(page, "/math/arithmetic/decimals");
  await startLesson(page);

  const input = page.locator(".concept-answer-input:not(.concept-answer-choice-control)");
  await expect(input).toBeFocused();
  await input.fill("1.1");
  await input.press("Enter");
  await expect(page.locator(".concept-check-button")).toHaveText(/Continue/);

  const firstPrompt = await page.locator(".concept-prompt").textContent();
  await input.press("Enter");
  await expect(page.locator(".concept-prompt")).not.toHaveText(firstPrompt);
  await expect(page.locator(".concept-answer-input:not(.concept-answer-choice-control)")).toBeFocused();
});

test("multiple choice requires a choice, checks, and persists progress", async ({ page }) => {
  await freshPage(page, "/physics/electricity-and-magnetism/charge-and-fields");
  await startLesson(page);

  const check = page.locator(".concept-check-button");
  await check.click();
  await expect(page.locator("#activityStatus")).toContainText(/choose|select/i);

  await page.locator('.concept-choice-button[data-choice-value="repel"]').click();
  await check.click();
  await expect(check).toHaveText(/Continue/);
  await expect(page.locator(".concept-choice-button[aria-checked='true']")).toHaveAttribute("data-choice-value", "repel");

  const stored = await page.evaluate(() => Object.keys(localStorage).some((key) => key.includes("progress")));
  expect(stored).toBe(true);
});

test("guided long addition keeps keyboard focus on the active square", async ({ page }) => {
  await freshPage(page, "/math/arithmetic/long-addition");
  await startLesson(page);

  const active = page.locator("#multiplicationGrid .digit-input.active");
  await expect(active).toHaveCount(1);
  await expect(active).toBeFocused();
  const firstId = await active.getAttribute("data-cell-id");
  const expected = await active.getAttribute("data-expected");
  await active.fill(expected);
  await active.press("Enter");
  await expect(page.locator("#multiplicationGrid .digit-input.active")).not.toHaveAttribute("data-cell-id", firstId);
  await expect(page.locator("#multiplicationGrid .digit-input.active")).toBeFocused();
});

test("factoring accepts the first authored step and moves forward", async ({ page }) => {
  await freshPage(page, "/math/algebra/factoring");
  await startLesson(page);

  const active = page.locator("#multiplicationGrid .equation-input.active");
  await expect(active).toBeFocused();
  await expect(active).toHaveAttribute("data-expected", "5");
  await active.fill("5");
  await active.press("Enter");
  await expect(page.locator("#multiplicationGrid .equation-input.active")).toHaveAttribute("data-expected", "6");
});
