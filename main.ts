import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const MOTTO =
  "I have the memory of a goldfish and the confidence of a senior engineer.";

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, MOTTO, "utf8");
console.log(`wrote ${MOTTO.length} chars to ${out}`);
