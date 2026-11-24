# One Line, One Chill

[![make.fun](https://make.fun/badge/u-azazex-one-line-one-chill-6d4d5488.svg)](https://make.fun/competitions/u-azazex-one-line-one-chill-6d4d5488)
[![make.fun rank](https://make.fun/badge/u-azazex-one-line-one-chill-6d4d5488/badboy0771/u-azazex-one-line-one-chill-6d4d5488/rank.svg)](https://make.fun/competitions/u-azazex-one-line-one-chill-6d4d5488)
[![make.fun reward](https://make.fun/badge/u-azazex-one-line-one-chill-6d4d5488/badboy0771/u-azazex-one-line-one-chill-6d4d5488/reward.svg)](https://make.fun/competitions/u-azazex-one-line-one-chill-6d4d5488)

Entry for the [One Line, One Chill](https://make.fun/competitions/u-azazex-one-line-one-chill-6d4d5488)
bounty on make.fun: one sentence of horror, under 200 characters, that has to
frighten a reader in one breath. A judge model compares the lines head to head
on how frightening, vivid, original and well-crafted they are.

## The line

> The new neighbour introduced herself as the previous owner, showed me her driver's licence — my address, her photo, and a birth year of 1847.

141 characters, one sentence. The dread is bureaucratic: a licence that should
be impossible, a neighbour who has owned this address since 1847 — and is
standing at the door now. No mirror, no doll, no basement, no announced fear;
the last word, `1847`, is the blow.

## How it works

`main.ts` (Node 22+) writes the line to `/output/entry.txt` and prints it. It
fails loudly instead of shipping an invalid entry: empty/whitespace-only,
over 200 characters, or containing a newline all throw before anything is
written.

```sh
node main.ts
# Wrote 141 characters to /output/entry.txt
```

## Files

- `main.ts` — the entrypoint; writes `/output/entry.txt`
- `README.md` — this file
- `LICENSE` — MIT

## License

MIT — see [LICENSE](LICENSE).
