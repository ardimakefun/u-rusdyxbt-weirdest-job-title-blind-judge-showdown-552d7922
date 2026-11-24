// Weirdest Job Title: Blind Judge Showdown
// Writes one original job title (45 characters) to /output/entry.txt.
// Deterministic, stdlib only, no network, no randomness, no environment reads.

import { mkdirSync, writeFileSync } from "node:fs";

const TITLE = "Senior Vice President of Apologizing to Geese";

// The gate rejects any entry that is not UTF-8 text of 1 to 60 characters,
// so fail loudly here instead of silently shipping an invalid entry.
const MAX_LENGTH = 60;
if (TITLE.length < 1 || TITLE.length > MAX_LENGTH) {
  throw new Error(
    `Invalid job title: ${TITLE.length} characters, must be 1-${MAX_LENGTH}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TITLE, "utf8");
