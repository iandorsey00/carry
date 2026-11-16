import { writeFile } from "node:fs/promises";
import path from "node:path";
import { renderCourse } from "./render.mjs";

const [, , directory, destination, ...extra] = process.argv;

if (!directory || !destination || extra.length || path.extname(destination) !== ".html") {
  console.error("Usage: npm run read -- <course directory> <output.html>");
  process.exitCode = 2;
} else {
  try {
    const page = await renderCourse(directory);
    await writeFile(destination, page, { flag: "wx" });
    console.log(`Open this file in your browser: ${path.resolve(destination)}`);
  } catch (error) {
    console.error(error.code === "EEXIST" ? "Output already exists. Choose a new filename." : error.message);
    process.exitCode = 1;
  }
}
