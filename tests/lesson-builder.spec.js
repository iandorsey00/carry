const { test, expect } = require("@playwright/test");
const fs = require("node:fs/promises");
const { expectNoPageErrors, freshPage } = require("./helpers");

test("Lesson Studio compiles CLS and preserves clearable local history", async ({ page }) => {
  await expectNoPageErrors(page, async () => {
    await freshPage(page, "/tools/lesson-builder");
    await expect(page).toHaveTitle("Carry Lesson Studio");
    await expect(page.locator("#lessonBuilderStatus")).toContainText("Ready");
    await expect(page.locator("#lessonBuilderSource")).toHaveValue(/"spec": "carry\.lesson\/v1"/);
    await expect(page.locator("#lessonBuilderHandoff")).toContainText("Carry Lesson Specification v1 schema");

    await page.locator("#lessonBuilderSource").press("Control+Enter");
    await expect(page.locator("#lessonBuilderStatus")).toContainText("Compiled Long addition example");
    await expect(page.locator("#lessonBuilderOutput")).toContainText('"type": "addition"');
    await expect(page.locator("#lessonBuilderHistory button")).toHaveCount(1);
    await expect(page.locator("#copyCompiledLesson")).toBeEnabled();

    await page.locator(".progress-summary").click();
    const downloadPromise = page.waitForEvent("download");
    await page.locator("#exportProgress").click();
    const download = await downloadPromise;
    const backup = JSON.parse(await fs.readFile(await download.path(), "utf8"));
    expect(backup.lessonBuilder.history).toHaveLength(1);

    await page.reload();
    await expect(page.locator("#lessonBuilderStatus")).toContainText("Ready");
    await expect(page.locator("#lessonBuilderHistory button")).toHaveCount(1);
    await page.locator("#clearLessonBuilderHistory").click();
    await expect(page.locator("#lessonBuilderHistory")).toContainText("No compiled lessons yet");
    await expect(page.locator("#clearLessonBuilderHistory")).toBeDisabled();
  });
});

test("Lesson Studio reports invalid source without losing the draft", async ({ page }) => {
  await freshPage(page, "/tools/lesson-builder");
  await expect(page.locator("#lessonBuilderStatus")).toContainText("Ready");
  await page.locator("#lessonBuilderSource").fill("{");
  await page.locator("#compileLessonSource").click();
  await expect(page.locator("#lessonBuilderStatus")).toContainText("Compilation failed");
  await expect(page.locator("#lessonBuilderDiagnostics")).toContainText("Invalid JSON");
  await page.reload();
  await expect(page.locator("#lessonBuilderSource")).toHaveValue("{");
});

test("Lesson Studio runs compiled CLS without persisting the custom session", async ({ page }) => {
  await expectNoPageErrors(page, async () => {
    await freshPage(page, "/tools/lesson-builder");
    await expect(page.locator("#lessonBuilderStatus")).toContainText("Ready");
    await expect(page.locator("#runCompiledLesson")).toBeDisabled();

    await page.locator("#compileLessonSource").click();
    await expect(page.locator("#runCompiledLesson")).toBeEnabled();
    await page.locator("#runCompiledLesson").click();

    await expect(page).toHaveURL(/\/tools\/lesson-builder\/run/);
    await expect(page).toHaveTitle("Carry Lesson Studio");
    await expect(page.locator("#lessonPreviewHeader")).toBeVisible();
    await expect(page.locator("#topicPanel")).toBeHidden();
    await expect(page.locator(".topbar")).toBeHidden();
    await expect(page.locator("#lessonTitle")).toHaveText("Long addition example preview");
    await expect(page.locator("#introCopy")).toContainText("Add one place-value column at a time");
    await page.locator("#startLesson").click();
    await expect(page.locator("#multiplicationGrid.addition-grid .digit-input:not([hidden])").first()).toBeVisible();

    await page.locator("#exitLessonPreview").click();
    await expect(page).toHaveURL(/\/tools\/lesson-builder(?:\?|$)/);
    await expect(page.locator("#lessonBuilderTool")).toBeVisible();
    await page.locator("#runCompiledLesson").click();

    await page.reload();
    await expect(page).toHaveTitle("Carry Lesson Studio");
    await expect(page.locator("#lessonBuilderTool")).toBeVisible();
    await expect(page.locator("#lessonPreviewHeader")).toBeHidden();
    const savedProgress = await page.evaluate(() => JSON.parse(localStorage.getItem("carry.progress.v1")) || {});
    expect(savedProgress.currentWorkspaceId).not.toBe("preview.arithmetic.long-addition.example");
    expect(savedProgress.completedLessons || []).not.toContain("preview.arithmetic.long-addition.example");
  });
});

test("Lesson Studio remains usable at a narrow mobile viewport", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await freshPage(page, "/tools/lesson-builder");
  await expect(page.locator("#lessonBuilderStatus")).toContainText("Ready");

  const layout = await page.evaluate(() => {
    const compile = document.querySelector("#compileLessonSource").getBoundingClientRect();
    const source = document.querySelector("#lessonBuilderSource").getBoundingClientRect();
    return {
      viewport: document.documentElement.clientWidth,
      page: document.documentElement.scrollWidth,
      compile: { width: compile.width, height: compile.height, left: compile.left, right: compile.right },
      source: { width: source.width, left: source.left, right: source.right }
    };
  });
  expect(layout.page).toBeLessThanOrEqual(layout.viewport);
  expect(layout.compile.height).toBeGreaterThanOrEqual(44);
  for (const region of [layout.compile, layout.source]) {
    expect(region.left).toBeGreaterThanOrEqual(0);
    expect(region.right).toBeLessThanOrEqual(layout.viewport);
  }

  await page.locator("#compileLessonSource").click();
  await page.locator("#runCompiledLesson").click();
  await expect(page.locator("#lessonPreviewHeader")).toBeVisible();
  const previewLayout = await page.evaluate(() => {
    const back = document.querySelector("#exitLessonPreview").getBoundingClientRect();
    const title = document.querySelector(".lesson-preview-lockup h1").getBoundingClientRect();
    return {
      viewport: document.documentElement.clientWidth,
      page: document.documentElement.scrollWidth,
      back: { left: back.left, right: back.right, height: back.height },
      title: { left: title.left, right: title.right }
    };
  });
  expect(previewLayout.page).toBeLessThanOrEqual(previewLayout.viewport);
  expect(previewLayout.back.height).toBeGreaterThanOrEqual(44);
  for (const region of [previewLayout.back, previewLayout.title]) {
    expect(region.left).toBeGreaterThanOrEqual(0);
    expect(region.right).toBeLessThanOrEqual(previewLayout.viewport);
  }
});
