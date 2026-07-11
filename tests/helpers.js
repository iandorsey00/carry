const { expect } = require("@playwright/test");

async function freshPage(page, path = "/") {
  await page.goto(path);
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  await expect(page.locator("#appVersion")).toHaveText(/0\.1\.0-(?:alpha|beta)\.\d+/);
}

async function startLesson(page) {
  const start = page.locator("#startLesson");
  if (await start.isVisible()) await start.click();
}

async function expectNoPageErrors(page, run) {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  await run();
  expect(errors).toEqual([]);
}

module.exports = { expectNoPageErrors, freshPage, startLesson };
