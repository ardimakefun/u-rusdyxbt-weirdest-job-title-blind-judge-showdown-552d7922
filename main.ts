// Weirdest Job Title: Blind Judge Showdown
// Writes one original job title (45 characters) to /output/entry.txt.
// Deterministic, stdlib only, no network, no randomness, no environment reads.

import { mkdirSync, writeFileSync } from "node:fs";

const TITLE = "Senior Vice President of Apologizing to Geese";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TITLE, "utf8");
