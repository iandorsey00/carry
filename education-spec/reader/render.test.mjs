import assert from "node:assert/strict";
import { cp, mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { test } from "node:test";
import { renderCourse } from "./render.mjs";

const example = name => new URL(`../examples/${name}/`, import.meta.url);

test("exports each pilot using its portable course data", async () => {
  const [astronomy, recall, guidedMath] = await Promise.all(
    ["astronomy", "recall", "guided-math"].map(render => renderCourse(example(render)))
  );
  assert.match(astronomy, /<audio src="data:audio\/mpeg;base64,/);
  assert.match(astronomy, /<summary>Transcript<\/summary>/);
  assert.match(astronomy, /href="#card-viewpoint">Review explanation/);
  assert.match(recall, /data-accepted="\[&quot;horse&quot;\]"/);
  assert.match(guidedMath, /href="#reading-0-1">Read the worked example/);
  assert.match(guidedMath, /<h3>Worked example<\/h3>/);
  assert.match(guidedMath, /class="addition" data-top="486" data-bottom="257"/);
});

test("renders untrusted Markdown as data and limits local asset references", async t => {
  const directory = await mkdtemp(path.join(tmpdir(), "education-reader-"));
  t.after(() => rm(directory, { recursive: true, force: true }));
  await cp(example("guided-math"), directory, { recursive: true });
  await writeFile(path.join(directory, "addition.md"), [
    '<script id="authored-script">throw Error()</script>',
    "",
    "![Remote picture](https://example.com/picture.png)",
    "",
    "[External page](https://example.com/)",
    "",
    "[Outside package](../../picture.png)"
  ].join("\n"));

  const page = await renderCourse(directory);
  assert.match(page, /&lt;script id=&quot;authored-script&quot;&gt;/);
  assert.match(page, /Content-Security-Policy.*script-src 'sha256-/);
  assert.match(page, /<span>Outside package<\/span>/);
  assert.match(page, /<a href="https:\/\/example\.com\/">External page<\/a>/);
  assert.match(page, /<p>Remote picture<\/p>/);
  assert.doesNotMatch(page, /<img[^>]*https:|<script id=/);
});
