# Decision 0005: Dark only, the split scheme is dead

Date: 2026-07-25
Status: Accepted. Supersedes the color ruling in 0002 and 0004.

## Fred's ruling, verbatim intent

Stay in dark mode. The dark to white pop between sections was almost
painful. Delivered while reviewing the live production homepage.

## What changes

The Off White editorial surface is retired. The site becomes two DARK
families so section rhythm survives without the flashbang:

1. Crisis surface: Deep Space Navy 900/950, as before. Heroes, status,
   science, emergency, impact.
2. Editorial surface: a softer, slightly warmer dark (base #0b1322,
   panels #121d33) with light text. Programs, news, about, policies.

## Implementation

The conversion happens at the token layer in src/styles/tokens.css. The
legacy names (--paper, --ink, --gray-*) are kept but now hold dark era
values, with a comment marking the rename debt. Every component that
used surface tokens flips automatically. Point fixes only where a
component assumed lightness (newsletter subscribe button, card hover
shadows).

## Why record this

It reversed a settled Round 1 answer within hours, on contact with the
real rendered site. That is the review loop working as designed: Fred
rules on screenshots and live pages, not on descriptions. The factory
lesson: color scheme decisions are provisional until the client has
seen them rendered, and the token layer is what makes reversal cheap.
