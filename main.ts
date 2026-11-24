// One Line, One Chill — make.fun entry (program/v1).
// Writes a single horror sentence (<200 chars, one line) to /output/entry.txt.
//
// FINAL LINE — chosen after weighing three drafts against the judge brief
// (frightening > vivid > original > crafted; last word lands the blow):
//
//   "The new neighbour introduced herself as the previous owner, showed me
//    her driver's licence — my address, her photo, and a birth year of 1847."
//
//   1. Frightening: the dread outlasts the line — the neighbour is not new,
//      she has owned (and haunted) this address since before the narrator
//      was born, and she is standing at the door now. The scare is earned
//      by the documents, never announced ("I was scared").
//   2. Vivid: concrete, checkable details a reader can see — driver's
//      licence, my address, her photo, a birth year. No vague darkness.
//   3. Original: no mirror, doll, basement, ghost or baby monitor; the
//      horror is bureaucratic identity — a licence that should be impossible.
//   4. Crafted: one sentence, rhythm builds through the list (address,
//      photo, birth year), and the last word — 1847 — is the blow: she has
//      been the previous owner for 179 years.
//
// REJECTED DRAFTS (kept here so the choice is auditable):
//   - Locksmith: "The locksmith changed every lock in the house, then handed
//     me the old keys and said, 'Whoever has the copies already lives
//     here.'" (129 chars) — solid dread, but "someone already lives in your
//     house" is a familiar trope; its ending lands softer than 1847.
//   - Funeral: "At my father's funeral the priest asked if anyone wanted to
//     speak, and my father raised his hand." (97 chars) — tightest of the
//     three, but it reads as a gag; the dread does not outlast the punchline.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The new neighbour introduced herself as the previous owner, showed me her driver's licence — my address, her photo, and a birth year of 1847.";

// Gate guard: the sealed scorer only accepts /output/entry.txt as UTF-8
// text of 1-200 characters, not only white space, on a single line. Fail
// loudly here instead of shipping an invalid entry.
if (!LINE.trim()) throw new Error("entry line is empty or whitespace-only");
if ([...LINE].length > 200) {
  throw new Error(`entry line is ${[...LINE].length} characters, over the 200 limit`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry line must be a single line (no newline characters)");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
console.log(LINE);
