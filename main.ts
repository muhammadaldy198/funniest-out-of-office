// The Funniest Out-of-Office — entry program.
// Writes one out-of-office auto-reply line to /output/entry.txt.
import { writeFileSync, readFileSync, chmodSync } from "node:fs";

const LINE =
  "I am out until Monday. My inbox has 3,412 unread emails and has started answering itself. It told your boss yes.";

// Gate guard (bounty: entry.txt UTF-8, 1-140 chars, not whitespace-only).
if (LINE.length < 1 || LINE.length > 140 || LINE.trim().length === 0) {
  throw new Error(`entry line fails gate: ${LINE.length} chars`);
}

const OUT = "/output/entry.txt";
writeFileSync(OUT, LINE, "utf8");
chmodSync(OUT, 0o644);
// revised: verify the written bytes match the line exactly.
if (readFileSync(OUT, "utf8") !== LINE) {
  throw new Error("verifyWritten: /output/entry.txt mismatch");
}
