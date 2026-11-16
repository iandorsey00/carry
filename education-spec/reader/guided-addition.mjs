import { readFile } from "node:fs/promises";
import { packageFile } from "../toolkit/package.mjs";

const supportedOperand = value => Number.isInteger(value) && value >= 0 && value <= 9999;

export async function guidedAddition(root, block, id) {
  if (block.widget !== "carry.cls" || block.version !== 1) return "";

  const { file } = await packageFile(root, block.config);
  const lesson = JSON.parse(await readFile(file, "utf8"));
  const { practice } = lesson;
  if (lesson.spec !== "carry.lesson/v1" || practice?.engine !== "long-addition" ||
      practice.response?.kind !== "digit-grid" || practice.response?.entry !== "number" ||
      practice.response?.traversal !== "guided" || !Array.isArray(practice.problems) ||
      !practice.problems.length || !practice.problems.every(problem =>
        supportedOperand(problem?.givens?.top) && supportedOperand(problem?.givens?.bottom)
      )) return "";

  return practice.problems.map(({ givens: { top, bottom } }, index) => {
    const width = Math.max(String(top).length, String(bottom).length);
    const row = value => String(value).padStart(width + 1, " ").split("").map(digit =>
      `<td>${digit.trim()}</td>`
    ).join("");
    const slots = kind => Array.from({ length: width + 1 }, (_, column) =>
      `<td><input class="addition-digit" type="text" inputmode="numeric" maxlength="1"
      data-slot="${kind}-${column}" aria-label="${kind}, place ${width - column + 1} from the right" disabled hidden></td>`
    ).join("");

    return `<form class="addition" data-top="${top}" data-bottom="${bottom}" aria-labelledby="${id}-${index}" hidden>
  <h3 id="${id}-${index}">Add ${top} and ${bottom}</h3>
  <table aria-label="Column addition">
    <tbody>
      <tr><th scope="row">Carry</th>${slots("Carry")}</tr>
      <tr><th scope="row">First number</th>${row(top)}</tr>
      <tr><th scope="row">Second number <span aria-hidden="true">+</span></th>${row(bottom)}</tr>
      <tr class="addition-sum"><th scope="row">Sum</th>${slots("Sum")}</tr>
    </tbody>
  </table>
  <p class="addition-status" role="status">Start with the ones column.</p>
  <div class="question-actions">
    <button type="submit">Check</button>
    <button class="secondary" type="button" data-addition-hint>Hint</button>
    <button class="secondary" type="reset" hidden>Try again</button>
  </div>
</form>`;
  }).join("\n");
}
