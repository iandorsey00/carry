const { test, expect } = require("@playwright/test");
const { freshPage } = require("./helpers");

function contrastRatio(foreground, background) {
  const luminance = (hex) => {
    const channels = hex.match(/[\da-f]{2}/gi).map((value) => Number.parseInt(value, 16) / 255);
    const linear = channels.map((value) => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4);
    return 0.2126 * linear[0] + 0.7152 * linear[1] + 0.0722 * linear[2];
  };
  const lighter = Math.max(luminance(foreground), luminance(background));
  const darker = Math.min(luminance(foreground), luminance(background));
  return (lighter + 0.05) / (darker + 0.05);
}

test("Differential Equations is presented as a sequenced course", async ({ page }) => {
  await freshPage(page, "/math/differential-equations/equations-and-classification");

  await expect(page.locator(".topic-category-heading").first()).toHaveText("Courses");
  const course = page.locator(".topic-group").filter({ hasText: "Differential Equations" });
  await expect(course.locator(".course-badge")).toHaveText("Course");
  await expect(course.locator(".curriculum-section")).toHaveCount(4);
  await expect(course.locator(".lesson-nav-button")).toHaveCount(13);
  await expect(page.locator("#lessonTitle")).toHaveText("Equations and classification");
});

test("the course keeps the active lesson reachable on a narrow screen", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await freshPage(page, "/math/differential-equations/separable-equations");

  const toggle = page.locator("#topicPanelToggle");
  await expect(toggle).toBeVisible();
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await expect(page.locator("#topicList")).toBeHidden();
  await expect(page.locator("#lessonPanel")).toBeInViewport();

  await toggle.click();
  await expect(toggle).toHaveAttribute("aria-expanded", "true");
  await expect(page.locator("#topicList")).toBeVisible();

  await page.getByRole("button", { name: "Separable equations", exact: true }).click();
  await expect(page.locator("#topicList")).toBeHidden();
  await page.locator("#startLesson").click();
  const pageWidth = await page.evaluate(() => ({
    viewport: document.documentElement.clientWidth,
    content: document.documentElement.scrollWidth
  }));
  expect(pageWidth.content).toBeLessThanOrEqual(pageWidth.viewport);
});

test("the course preserves readable semantic colors in dark mode", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "dark" });
  await freshPage(page, "/math/differential-equations/separable-equations");

  const colors = await page.evaluate(() => {
    const styles = getComputedStyle(document.documentElement);
    return Object.fromEntries(["surface", "text", "muted", "accent", "focus"].map((role) => [
      role,
      styles.getPropertyValue(`--${role}`).trim()
    ]));
  });

  expect(contrastRatio(colors.text, colors.surface)).toBeGreaterThanOrEqual(4.5);
  expect(contrastRatio(colors.muted, colors.surface)).toBeGreaterThanOrEqual(4.5);
  expect(contrastRatio(colors.accent, colors.surface)).toBeGreaterThanOrEqual(3);
  expect(contrastRatio(colors.focus, colors.surface)).toBeGreaterThanOrEqual(3);
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

test("separable equations use staged guided solving with keyboard advancement", async ({ page }) => {
  await freshPage(page, "/math/differential-equations/separable-equations");
  await page.locator("#startLesson").click();

  await expect(page.locator("#multiplicationGrid")).toHaveClass(/guided-derivation-grid/);
  await expect(page.locator("#multiplicationGrid")).not.toContainText("\\frac");
  await expect(page.locator(".derivation-label", { hasText: "separate" })).toBeVisible();
  await expect(page.locator(".derivation-label", { hasText: "set up integrals" })).toBeHidden();

  let active = page.locator(".guided-derivation-grid .digit-input.active");
  await expect(active).toBeFocused();
  await active.fill("dy/y");
  await active.press("Tab");
  await expect(page.locator(".derivation-answer-preview").first()).toBeVisible();
  await expect(page.locator(".derivation-answer-preview").first().locator("mfrac")).toHaveCount(1);
  await expect(page.locator("#activityStatus")).toContainText("Separate the x terms on the right");

  active = page.locator(".guided-derivation-grid .digit-input.active");
  await expect(active).toBeFocused();
  await active.fill("3x dx");
  await active.press("Enter");

  await expect(page.locator(".derivation-label", { hasText: "set up integrals" })).toBeVisible();
  active = page.locator(".guided-derivation-grid .digit-input.active");
  await expect(active).toBeFocused();
  await active.fill("ln|y|+C");
  await active.press("Tab");
  await expect(page.locator("#activityStatus")).toContainText("only sets up the integral");
  await expect(active).toHaveAttribute("placeholder", "Write integral");

  await active.fill("int dy/y");
  await active.press("Tab");
  await expect(page.locator(".guided-derivation-grid .digit-input.active")).toBeFocused();
  await expect(page.locator("#activityStatus")).toContainText("Set up the right integral");
});

test("separable setup accepts an equivalent one-over-y integral", async ({ page }) => {
  await freshPage(page, "/math/differential-equations/separable-equations");
  await page.locator("#startLesson").click();

  let active = page.locator(".guided-derivation-grid .digit-input.active");
  await active.fill("dy/y");
  await active.press("Enter");
  active = page.locator(".guided-derivation-grid .digit-input.active");
  await active.fill("3x dx");
  await active.press("Enter");

  active = page.locator(".guided-derivation-grid .digit-input.active");
  await expect(active).toHaveAttribute("placeholder", "Write integral");
  await active.fill("int 1/y dy");
  await active.press("Enter");
  await expect(page.locator("#activityStatus")).toContainText("Set up the right integral");
  active = page.locator(".guided-derivation-grid .digit-input.active");
  await expect(active).toBeFocused();
  await active.fill("int 3x dx");
  await active.press("Enter");
  active = page.locator(".guided-derivation-grid .digit-input.active");
  await active.fill("ln|y|");
  await active.press("Enter");
  active = page.locator(".guided-derivation-grid .digit-input.active");
  await active.fill("(3/2)x^2+C");
  await active.press("Enter");
  active = page.locator(".guided-derivation-grid .digit-input.active");
  await active.fill("e^((3/2)x^2+C)");
  await active.press("Enter");
  await expect(page.locator("#activityStatus")).toContainText("multiplicative constant");
  await expect(page.locator("#activityStatus")).toContainText("zero solution");
});

test("separable equations can expand a u-substitution into smaller steps", async ({ page }) => {
  await freshPage(page, "/math/differential-equations/separable-equations");
  await page.locator("#startLesson").click();
  await page.locator("#newProblem").click();
  await expect(page.locator(".derivation-problem")).toContainText("cos");

  const entries = [
    "dy/y",
    "2x cos(x^2) dx",
    "int dy/y",
    "int 2x cos(x^2) dx",
    "ln|y|"
  ];
  for (const value of entries) {
    const active = page.locator(".guided-derivation-grid .digit-input.active");
    await active.fill(value);
    await active.press("Enter");
  }

  const scaffoldTrigger = page.locator(".derivation-scaffold-trigger").first();
  await expect(scaffoldTrigger).toHaveText("Break this step down");
  await expect(scaffoldTrigger).toBeVisible();
  await scaffoldTrigger.click();
  const scaffold = page.locator(".derivation-helper");
  await expect(scaffold).toContainText("Use u-substitution");
  await expect(scaffold.getByRole("textbox", { name: "Choose the inner expression u." })).toBeFocused();

  for (const value of ["x^2", "2x dx", "int cos(u) du", "sin(u)+C", "sin(x^2)+C"]) {
    const active = scaffold.locator(".derivation-scaffold-input:not(:disabled)");
    await expect(active).toBeFocused();
    await active.fill(value);
    await active.press("Enter");
  }

  await expect(scaffold).toBeHidden();
  await expect(scaffoldTrigger).toHaveText("Smaller steps complete");
  await expect(page.locator("#activityStatus")).toContainText("Write the solution family");
  await expect(page.locator(".derivation-answer-preview math").last()).toContainText("sin");
});

test("linear first-order equations guide the integrating-factor method", async ({ page }) => {
  await freshPage(page, "/math/differential-equations/linear-first-order-equations");
  await page.locator("#startLesson").click();

  await expect(page.locator(".derivation-label", { hasText: "factor" })).toBeVisible();
  await expect(page.locator(".derivation-label", { hasText: "multiply" })).toBeHidden();

  const active = page.locator(".guided-derivation-grid .digit-input.active");
  await expect(active).toBeFocused();
  await active.fill("e^(2x)");
  await active.press("Enter");

  await expect(page.locator(".derivation-label", { hasText: "multiply" })).toBeVisible();
  await expect(page.locator(".derivation-answer-preview math")).toContainText("e2x");
  await expect(page.locator(".guided-derivation-grid .digit-input.active")).toBeFocused();
});

test("homogeneous equations guide characteristic roots and basis solutions", async ({ page }) => {
  await freshPage(page, "/math/differential-equations/homogeneous-linear-equations");
  await page.locator("#startLesson").click();

  let active = page.locator(".guided-derivation-grid .digit-input.active");
  await expect(active).toBeFocused();
  await active.fill("r^2-5r+6");
  await active.press("Enter");

  active = page.locator(".guided-derivation-grid .digit-input.active");
  await expect(active).toBeFocused();
  await active.fill("2,3");
  await active.press("Enter");

  await expect(page.locator(".derivation-label", { hasText: "basis" })).toBeVisible();
  await expect(page.locator(".guided-derivation-grid .digit-input.active")).toBeFocused();
});

test("forcing equations guide trial selection and coefficient matching", async ({ page }) => {
  await freshPage(page, "/math/differential-equations/forcing-damping-and-resonance");
  await page.locator("#startLesson").click();

  await expect(page.locator("#multiplicationGrid")).toHaveClass(/guided-derivation-grid/);
  await expect(page.locator(".derivation-label", { hasText: "complementary" })).toBeVisible();
  await expect(page.locator(".derivation-label", { hasText: "trial" })).toBeHidden();

  let active = page.locator(".guided-derivation-grid .digit-input.active");
  await active.fill("C1e^x+C2e^(2x)");
  await active.press("Enter");

  await expect(page.locator(".derivation-label", { hasText: "trial" })).toBeVisible();
  active = page.locator(".guided-derivation-grid .digit-input.active");
  await expect(active).toBeFocused();
  await active.fill("A");
  await active.press("Tab");

  await expect(page.locator(".derivation-label", { hasText: "substitute" })).toBeVisible();
  await expect(page.locator("#activityStatus")).toContainText("Substitute the trial and simplify");
});

test("separable practice records transparent hinted capability evidence locally", async ({ page }) => {
  await freshPage(page, "/math/differential-equations/separable-equations");
  await page.locator("#startLesson").click();

  const active = page.locator(".guided-derivation-grid .digit-input.active");
  await active.fill("x dy");
  await active.press("Enter");
  await page.locator("#hintStep").click();
  await active.fill("dy/y");
  await active.press("Enter");

  const evidence = await page.evaluate(() => {
    const progress = JSON.parse(localStorage.getItem("carry.progress.v1"));
    return progress.learning.capabilities["differential-equations.separable.separate-variables"];
  });
  expect(evidence).toMatchObject({
    attempts: 2,
    correct: 1,
    incorrect: 1,
    independentCorrect: 0,
    hintedCorrect: 1
  });
  await expect(page.locator("#progressSkills")).toHaveText("1 practiced · 0 without hints");
});
