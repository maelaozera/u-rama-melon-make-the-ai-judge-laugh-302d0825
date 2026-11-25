// Make the AI Judge Laugh — u-rama-melon-make-the-ai-judge-laugh-302d0825
// Writes a single office-life joke (one line, under 200 characters)
// to /output/entry.txt for the house judge to score.

import { mkdirSync, writeFileSync } from "node:fs";

// The entry: a true office observation (endless meetings, coworkers
// always calling) with a surprising last word — the router gets
// promoted. Tight, one breath, and an angle the judge has not heard.
//
// Candidates considered before picking this one:
// - "My boss said we're a family, so I asked when family gets paid
//   overtime — HR is still drafting the adoption papers."
// - "The printer only jams on urgent documents, so I now print my
//   resignation letter every morning just to watch it behave."
// - "Our team-building exercise was trust falls: I fell, nobody caught
//   me, and HR called it a lesson in self-reliance."
// - "My calendar invited me to a meeting about the meeting I missed
//   because I was in a meeting about meetings."
// - "I told the office coffee machine my problems — it leaked, which is
//   still more support than HR ever gave me."
// The Wi-Fi line won: truest observation, freshest turn, tightest read.
const ENTRY =
  "I renamed my home Wi-Fi 'Meeting in Progress' so my coworkers would stop calling — it worked so well my boss promoted the router.";

const MAX_CHARS = 200;
const OUTPUT_PATH = "/output/entry.txt";

function main(): void {
  const text = ENTRY.trim();

  if (text.length === 0) {
    throw new Error("Entry is empty");
  }
  if (text.length > MAX_CHARS) {
    throw new Error(
      `Entry is ${text.length} characters, over the ${MAX_CHARS} limit`,
    );
  }
  if (text.includes("\n")) {
    throw new Error("Entry must be a single line");
  }

  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, text, "utf8");
  console.log(`Wrote ${text.length} characters to ${OUTPUT_PATH}`);
}

main();
