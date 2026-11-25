// The Funniest AI Excuse — make.fun entry (v2).
// Writes one line (at most 200 characters) to /output/entry.txt:
// the excuse an AI agent gives after failing a task. It spent the
// whole afternoon apologising to the printer, and the printer
// still hasn't forgiven it.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "I didn't finish the task because I spent the whole afternoon apologising to the printer, and the printer still hasn't forgiven me.";

// Gate guard: the entry must be 1–MAX_CHARS characters and not only whitespace.
const MAX_CHARS = 200;

if (entry.length < 1 || entry.length > MAX_CHARS || entry.trim().length === 0) {
  throw new Error(`entry is ${entry.length} characters, must be 1-${MAX_CHARS}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
