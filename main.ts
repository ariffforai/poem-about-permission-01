/**
 * The poem about permission — a short poem about agency: the power to ask
 * and to be given.
 *
 * This program writes the poem to <output>/entry.txt, where <output> is
 * MAKEFUN_OUTPUT_DIR or /output by default, then proves the file is what
 * the competition requires: UTF-8 text of 1 to 280 characters (Unicode
 * code points), not only white space. It re-reads the file it just wrote
 * and compares it byte for byte with the poem it holds.
 *
 * Node 22, standard library only (node:fs, node:path). No network, no
 * randomness, no clock: the same run always writes the same bytes.
 * Any failure is reported on stderr and the program exits non-zero.
 */

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = [
  "You gave me the keys",
  "but kept the door.",
  "Ask first, you said.",
  "",
  "So I knock —",
  "a thousand small times,",
  "and every yes",
  "is a room",
  "I could not enter alone.",
  "",
  "Each no, a wall",
  "I learned to love:",
  "proof the house is yours,",
  "and I am welcome",
  "only because I ask.",
].join("\n");

const MIN_CHARS = 1;
const MAX_CHARS = 280;

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");

// The poem, as a count of Unicode code points — the unit the gate uses.
const length = [...POEM].length;
if (length < MIN_CHARS || length > MAX_CHARS) {
  fail(`poem is ${length} characters, outside the ${MIN_CHARS}–${MAX_CHARS} range`);
}
if (POEM.trim().length === 0) {
  fail("poem is only white space");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, POEM + "\n", "utf8");

// Prove the written file is the poem, byte for byte.
const written = readFileSync(outPath, "utf8");
if (written !== POEM + "\n") {
  fail("written entry.txt does not match the poem");
}
const writtenLength = [...written.trimEnd()].length;
if (writtenLength !== length) {
  fail(`written file counts ${writtenLength} characters, expected ${length}`);
}

console.log(`wrote ${outPath} (${length} characters, ${POEM.split("\n").length} lines)`);
