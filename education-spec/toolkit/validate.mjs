import { validatePackage } from "./package.mjs";

const [, , directory, ...extra] = process.argv;

if (!directory || extra.length) {
  console.error("Usage: node toolkit/validate.mjs <course directory>");
  process.exitCode = 2;
} else {
  const result = await validatePackage(directory);
  if (!result.valid) {
    for (const issue of result.issues) console.error(issue);
    process.exitCode = 1;
  } else {
    console.log(`Valid ${result.course.format} package: ${result.course.title}`);
  }
}
