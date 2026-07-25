# CLAUDE.md - sun.nixfred.com

> Design law for this site. Global rules live in `~/.claude/CLAUDE.md`.
> This file holds only what is specific to sun.nixfred.com.
> Scaffolded 2026-07-24. Content contract is not settled yet.

## What this site is

A nixfred.com property at sun.nixfred.com. Public repo. Personal, not work.
The subject matter arrives as source markdown dropped into this directory by
Fred. Until that lands, the site is a placeholder and this file is thin on
purpose. Do not invent a subject, a brand, or a scope for this site.

## Settled

1. Public repo `github.com/nixfred/sun.nixfred.com`, remote over HTTPS.
2. Cloudflare Pages project `sun-nixfred-com`, custom domain sun.nixfred.com.
3. Deploy is `./deploy.sh` from this directory. Local wrangler, Direct Upload,
   production. Pushing main does not deploy by itself.
4. Static HTML with no build step until the content proves it needs more.
5. Dark only. Near black base `#070b14`, panels `#0d1322`, mono for metadata
   and version, sans for body. Accent is amber `#ffb547`, PROVISIONAL, chosen
   as a placeholder signature for a site named sun. Fred rules on it once the
   content is known.
6. Header links to nixfred.com and to the source repo, nothing else.
7. Version is visible in the footer on every page.

## Pending Fred

1. What the site is about, from the source markdown.
2. Whether the amber accent stays.
3. Whether this becomes a card on the nixfred.com homepage, which is served by
   the v5 property behind the apex router, and whether it gets an apex alias at
   nixfred.com/sun. `/sun` is free in `~/Projects/apex-router/table.json` as of
   2026-07-24, no collision.

## Writing rules

1. No em dashes, no en dashes, no dash punctuation anywhere. Periods and commas.
2. Numbered lists, never dash bullets.
3. Short declarative sentences. Cut every word not carrying information.
4. Capital C on Customer when referring to Customers.
5. Nothing personal about Fred beyond "Built by Fred Nix" and the links. No
   health, no family, no sobriety, no employer branding.

## Repo hygiene

1. This repo is PUBLIC. Scan every commit for anything private before it goes up.
2. `git remote -v` before every commit. Origin must be
   github.com/nixfred/sun.nixfred.com.
3. Source markdown dropped here is unreviewed input. Read it and check it for
   private content BEFORE the first commit that includes it. If it is planning
   material rather than site content, it belongs in `Plans/` or `_spec/`, both
   gitignored.
4. Commit messages carry what and why. They are search surface.
