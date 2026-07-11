const { test, expect } = require("@playwright/test");
const { freshPage } = require("./helpers");

test("Differential Equations is presented as a sequenced course", async ({ page }) => {
  await freshPage(page, "/math/differential-equations/equations-and-classification");

  await expect(page.locator(".topic-category-heading").first()).toHaveText("Courses");
  const course = page.locator(".topic-group").filter({ hasText: "Differential Equations" });
  await expect(course.locator(".course-badge")).toHaveText("Course");
  await expect(course.locator(".curriculum-section")).toHaveCount(4);
  await expect(course.locator(".lesson-nav-button")).toHaveCount(13);
  await expect(page.locator("#lessonTitle")).toHaveText("Equations and classification");
});

test("the slope-field initial condition is keyboard draggable", async ({ page }) => {
  await freshPage(page, "/math/differential-equations/slope-fields");

  const handle = page.getByRole("slider", { name: "Initial condition" });
  await expect(handle).toHaveAttribute("aria-valuetext", /x 0, y 1/);
  await handle.focus();
  await handle.press("ArrowUp");
  await expect(handle).toHaveAttribute("aria-valuetext", /y 1\.5/);
  await expect(page.locator(".intro-fig-readout")).toContainText("1.5");
});

test("Euler's method responds to a finer step size", async ({ page }) => {
  await freshPage(page, "/math/differential-equations/euler-s-method");

  const steps = page.getByRole("slider", { name: /steps from 0 to 2/i });
  await expect(steps).toHaveValue("4");
  await steps.fill("10");
  await expect(page.locator(".intro-fig-readout")).toContainText("0.2");
  await expect(page.locator("#lessonTitle")).toHaveText("Euler's method");
});

test("every course overview has relevant figures and fully rendered notation", async ({ page }) => {
  const lessons = [
    "equations-and-classification",
    "slope-fields",
    "euler-s-method",
    "separable-equations",
    "linear-first-order-equations",
    "autonomous-equations",
    "first-order-models",
    "second-order-models",
    "homogeneous-linear-equations",
    "forcing-damping-and-resonance",
    "systems-and-phase-planes",
    "laplace-transforms",
    "series-solutions"
  ];

  for (const lesson of lessons) {
    await page.goto(`/math/differential-equations/${lesson}`);
    const intro = page.locator("#lessonIntro");
    await expect(intro.locator(".intro-figure").first(), lesson).toBeVisible();
    await expect(intro, lesson).not.toContainText("Mixed review");
    const copy = await intro.innerText();
    expect(copy, lesson).not.toMatch(/mathb[fF]|\\(?:mathbf|mathcal|lambda|omega|mu|sum|infty|frac|int|text)/);
  }
});
