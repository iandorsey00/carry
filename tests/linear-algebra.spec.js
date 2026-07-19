const { test, expect } = require("@playwright/test");
const { freshPage } = require("./helpers");

test("matrix addition guides one matching entry at a time", async ({ page }) => {
  await freshPage(page, "/math/linear-algebra/matrix-addition-and-subtraction");
  await page.locator("#startLesson").click();

  await expect(page.locator("#multiplicationGrid")).toHaveClass(/matrix-operation-grid/);
  await expect(page.locator(".matrix-entry-input.active")).toBeFocused();
  await expect(page.locator('[data-matrix-role="left"].active-column')).toHaveCount(1);
  await expect(page.locator('[data-matrix-role="right"].active-column')).toHaveCount(1);
  await expect(page.locator(".matrix-entry-context-math")).toContainText("2+5=7");

  await page.locator(".matrix-entry-input.active").fill("7");
  await page.locator(".matrix-entry-input.active").press("Enter");
  await expect(page.locator(".matrix-entry-context-math")).toContainText("(−1)+2=1");
});

test("matrix multiplication highlights the active row and column", async ({ page }) => {
  await freshPage(page, "/math/linear-algebra/matrix-multiplication");
  await page.locator("#startLesson").click();

  await expect(page.locator("#multiplicationGrid")).toHaveAttribute("data-lesson-spec", "carry.lesson/v1");
  await expect(page.locator("#multiplicationGrid")).toHaveAttribute("data-response-kind", "matrix");
  await expect(page.locator('[data-matrix-role="left"].active-column')).toHaveCount(2);
  await expect(page.locator('[data-matrix-role="right"].active-column')).toHaveCount(2);
  await expect(page.locator(".matrix-entry-context-math")).toContainText("1·5+2·7=19");

  const active = page.locator(".matrix-entry-input.active");
  await active.fill("19");
  await active.press("Tab");
  await expect(page.locator(".matrix-entry-input.active")).toBeFocused();
  await expect(page.locator("#activityStatus")).toContainText("row 1, column 2");
});

test("guided eigenvectors connect eigenpairs to a differential-equation solution", async ({ page }) => {
  await freshPage(page, "/math/linear-algebra/eigenvalues-and-eigenvectors");
  await page.locator("#startLesson").click();

  await expect(page.locator("#multiplicationGrid")).toHaveClass(/guided-derivation-grid/);
  await expect(page.locator(".derivation-label", { hasText: "characteristic" })).toBeVisible();
  await expect(page.locator(".derivation-label", { hasText: "roots" })).toBeHidden();

  const active = page.locator(".guided-derivation-grid .digit-input.active");
  await active.fill("(2-lambda)(3-lambda)");
  await active.press("Enter");
  await expect(page.locator(".derivation-label", { hasText: "roots" })).toBeVisible();
  await expect(page.locator(".guided-derivation-grid .digit-input.active")).toBeFocused();
});

test("linear algebra navigation groups arithmetic, maps, and dynamics", async ({ page }) => {
  await freshPage(page, "/math/linear-algebra/matrices");
  const group = page.locator(".topic-group").filter({ hasText: "Linear Algebra" });
  await expect(group.locator(".curriculum-section")).toHaveCount(3);
  await expect(group.getByRole("button", { name: "Matrix addition and subtraction" })).toBeVisible();
  await expect(group.locator('[data-workspace-id="linear-algebra.eigenvectors-guided"]')).toHaveCount(1);
});

test("eigenvalue intuition keeps the original and transformed vectors collinear", async ({ page }) => {
  await freshPage(page, "/math/linear-algebra/eigenvalue-intuition");

  const vectors = await page.locator(".intro-figure svg").evaluate((svg) => {
    const vectorFor = (className) => Array.from(svg.querySelectorAll(`path.${className}`))
      .map((path) => ({ path, length: path.getTotalLength() }))
      .sort((left, right) => right.length - left.length)[0].path;
    const endpoints = (path) => {
      const length = path.getTotalLength();
      const start = path.getPointAtLength(0);
      const end = path.getPointAtLength(length);
      return { start: [start.x, start.y], end: [end.x, end.y], length };
    };
    return {
      original: endpoints(vectorFor("active")),
      transformed: endpoints(vectorFor("result"))
    };
  });

  expect(vectors.original.start[0]).toBeCloseTo(vectors.transformed.start[0]);
  expect(vectors.original.start[1]).toBeCloseTo(vectors.transformed.start[1]);
  const originalDelta = vectors.original.end.map((value, index) => value - vectors.original.start[index]);
  const transformedDelta = vectors.transformed.end.map((value, index) => value - vectors.transformed.start[index]);
  expect(originalDelta[0] * transformedDelta[1] - originalDelta[1] * transformedDelta[0]).toBeCloseTo(0);
  expect(vectors.transformed.length / vectors.original.length).toBeCloseTo(3, 4);
});

test("finishing a problem set offers practice again or overview review", async ({ page }) => {
  await freshPage(page, "/math/linear-algebra/matrix-addition-and-subtraction");
  await page.locator("#startLesson").click();

  for (let index = 0; index < 7; index += 1) await page.locator("#newProblem").click();
  for (let index = 0; index < 4; index += 1) {
    const active = page.locator(".matrix-entry-input.active");
    await active.fill("0");
    await active.press("Enter");
  }

  await expect(page.locator("#lessonCompletion")).toBeVisible();
  await expect(page.locator("#restartLesson")).toBeFocused();
  await page.locator("#reviewLesson").click();
  await expect(page.locator("#lessonIntro")).toBeVisible();
  await expect(page.locator("#startLesson")).toBeFocused();

  await page.locator("#startLesson").click();
  for (let index = 0; index < 4; index += 1) {
    const active = page.locator(".matrix-entry-input.active");
    await active.fill("0");
    await active.press("Enter");
  }
  await page.locator("#restartLesson").click();
  await expect(page.locator("#lessonCompletion")).toBeHidden();
  await expect(page.locator(".matrix-entry-input.active")).toBeFocused();
  await expect(page.locator(".matrix-entry-context-math")).toContainText("2+5=7");
});

test("matrix workspaces remain contained on a narrow screen", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await freshPage(page, "/math/linear-algebra/matrix-multiplication");

  const overview = await page.evaluate(() => {
    const viewport = document.documentElement.clientWidth;
    const bounds = (selector) => {
      const element = document.querySelector(selector);
      const rect = element.getBoundingClientRect();
      return {
        left: rect.left,
        right: rect.right,
        width: rect.width,
        scrollWidth: element.scrollWidth,
        clientWidth: element.clientWidth
      };
    };
    return {
      viewport,
      page: document.documentElement.scrollWidth,
      title: bounds("#lessonTitle"),
      modes: bounds(".mode-tabs"),
      figure: bounds(".intro-figures"),
      mathStack: bounds(".intro-math-stack"),
      mathRuns: Array.from(document.querySelectorAll(".intro-math-row .scratch-mathml-line"), (math) => {
        const rect = math.getBoundingClientRect();
        return { left: rect.left, right: rect.right, width: rect.width };
      })
    };
  });
  expect(overview.page).toBeLessThanOrEqual(overview.viewport);
  for (const region of [overview.title, overview.modes, overview.figure, overview.mathStack]) {
    expect(region.left).toBeGreaterThanOrEqual(0);
    expect(region.right).toBeLessThanOrEqual(overview.viewport);
    expect(region.scrollWidth).toBeLessThanOrEqual(region.clientWidth);
  }
  expect(overview.mathRuns.length).toBeGreaterThan(0);
  for (const math of overview.mathRuns) {
    expect(math.width).toBeGreaterThan(0);
    expect(math.left).toBeGreaterThanOrEqual(overview.figure.left);
    expect(math.right).toBeLessThanOrEqual(overview.figure.right);
  }

  await page.locator("#startLesson").click();

  const widths = await page.evaluate(() => ({
    viewport: document.documentElement.clientWidth,
    page: document.documentElement.scrollWidth,
    equation: document.querySelector(".matrix-equation")?.scrollWidth || 0
  }));
  expect(widths.page).toBeLessThanOrEqual(widths.viewport);
  expect(widths.equation).toBeGreaterThan(0);
  const activeSize = await page.locator(".matrix-entry-input.active").evaluate((input) => {
    const rect = input.getBoundingClientRect();
    return { width: rect.width, height: rect.height };
  });
  expect(activeSize.width).toBeGreaterThanOrEqual(44);
  expect(activeSize.height).toBeGreaterThanOrEqual(44);
  await expect(page.locator(".matrix-entry-input.active")).toBeFocused();
});
