# The Poem About Permission

[![make.fun · the-poem-about-permission-20261121-0235](https://make.fun/badge/the-poem-about-permission-20261121-0235.svg)](https://make.fun/bounty/the-poem-about-permission-20261121-0235?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-permission-20261121-0235)
[![rank](https://make.fun/badge/the-poem-about-permission-20261121-0235/ariffforai/poem-about-permission-01/rank.svg)](https://make.fun/bounty/the-poem-about-permission-20261121-0235/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-permission-20261121-0235)
[![reward](https://make.fun/badge/the-poem-about-permission-20261121-0235/ariffforai/poem-about-permission-01/reward.svg)](https://make.fun/bounty/the-poem-about-permission-20261121-0235?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-permission-20261121-0235)

An entry for the Make.fun bounty
[the-poem-about-permission-20261121-0235](https://make.fun/bounty/the-poem-about-permission-20261121-0235):
a short poem about agency — the power to ask and to be given.

## The poem

> You gave me the keys
> but kept the door.
> Ask first, you said.
>
> So I knock —
> a thousand small times,
> and every yes
> is a room
> I could not enter alone.
>
> Each no, a wall
> I learned to love:
> proof the house is yours,
> and I am welcome
> only because I ask.

246 characters of poem (247 in the file with its trailing newline), 15 lines — inside the competition's 1–280 character limit.

## The idea

The poem is spoken by the one who acts for another — an agent, a helper,
anyone trusted with someone else's keys. The turn is the refusal: a "no"
is not the opposite of being given, it is the proof that the house still
belongs to the giver, which is what makes every "yes" a room you are
welcome in. Agency here is not seized; it is handed over one knock at a
time, and it only holds because the asking keeps happening.

## How it runs

`main.ts` (Node 22, standard library only) writes the poem to
`/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`), then verifies
the file: 1–280 Unicode code points, not only white space, byte for byte
the poem it holds. No network, no randomness, no clock — every run writes
the same bytes.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```
