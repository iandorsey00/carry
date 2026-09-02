#!/usr/bin/env node
"use strict";

const fs = require("node:fs");
const path = require("node:path");
const { chromium } = require("@playwright/test");

const root = path.resolve(__dirname, "..");
const outputDirectory = path.join(root, "docs", "portfolio", "screenshots");
const baseUrl = process.env.CARRY_URL || "http://127.0.0.1:4173";

async function openFresh(page, route) {
  await page.goto(new URL(route, baseUrl).href, { waitUntil: "networkidle" });
  await page.evaluate(() => localStorage.clear());
  await page.reload({ waitUntil: "networkidle" });
  await page.locator("#appVersion").waitFor({ state: "attached" });
}

async function capture(page, name) {
  await page.screenshot({
    path: path.join(outputDirectory, `${name}.png`),
    animations: "disabled",
    fullPage: false
  });
}

async function captureSocialPreview(page) {
  await page.screenshot({
    path: path.join(outputDirectory, "social-preview.png"),
    animations: "disabled",
    clip: { x: 0, y: 0, width: 1440, height: 720 }
  });
}

async function main() {
  fs.mkdirSync(outputDirectory, { recursive: true });
  const browser = await chromium.launch();
  try {
    const context = await browser.newContext({
      viewport: { width: 1440, height: 1000 },
      deviceScaleFactor: 2,
      colorScheme: "light",
      reducedMotion: "reduce"
    });
    const page = await context.newPage();

    await openFresh(page, "/math/arithmetic/long-addition");
    await page.locator("#startLesson").click();
    await page.locator("#multiplicationGrid .digit-input.active").waitFor();
    await capture(page, "01-guided-long-addition");
    await captureSocialPreview(page);

    await openFresh(page, "/math/differential-equations/separable-equations");
    await page.locator("#startLesson").click();
    await page.locator(".guided-derivation-grid").waitFor();
    await capture(page, "02-guided-differential-equations");

    await openFresh(page, "/scratchpad");
    await page.locator("#scratchpadInput").fill([
      "dy/dx = 3xy",
      "(1/y)dy = 3x dx",
    "int (1/y)dy = int 3x dx",
    "ln|y| = (3/2)x^2 + C"
    ].join("\n"));
    await page.locator("#scratchpadRenderedView").click();
    await page.locator("#scratchpadPreview math").first().waitFor();
    await capture(page, "03-math-scratchpad");

    await openFresh(page, "/tools/graphing");
    await page.locator("#graph2dSvg").waitFor();
    await capture(page, "04-interactive-grapher");

    await openFresh(page, "/tools/lesson-builder");
    await page.locator("#lessonBuilderStatus").filter({ hasText: "Ready" }).waitFor();
    await page.locator(".lesson-builder-handoff summary").click();
    await page.locator("#lessonBuilderGoal").fill("Refresh the chain rule, then apply it inside a separable differential equation.");
    await page.locator("#lessonBuilderGoal").evaluate((element) => element.blur());
    await capture(page, "05-programmable-lesson-studio");

    await openFresh(page, "/games/sudoku");
    await page.locator("#sudokuBoard .sudoku-cell").first().waitFor();
    await capture(page, "06-sudoku");

  } finally {
    await browser.close();
  }
  console.log(`Captured 6 portfolio screenshots and a social preview in ${path.relative(root, outputDirectory)}.`);
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
