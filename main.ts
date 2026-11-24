import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Monday, Reviewed in One Line — the funniest one-line review of my Monday.
// Concrete details (9am standup, inbox count, coffee machine), deadpan
// review format, and the punch lands before the line runs out of steam.
const entry =
  "Monday: my 9am standup ran 40 minutes, my inbox hit 214 unread, and the coffee machine filed for divorce. 2/5 stars, would not Monday again.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR?.trim() || "/output";
try {
  mkdirSync(outDir, { recursive: true });
} catch {
  // Best effort: the directory may already exist or be read-only here.
}
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
