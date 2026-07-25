# CLAUDE.md - sun.nixfred.com

> Design law for this site. Global rules live in `~/.claude/CLAUDE.md`.
> This file holds only what is specific to sun.nixfred.com.
> Scaffolded 2026-07-24. Build pack landed the same night.

## What this site is

The **Solar Save Foundation**: a large, polished, explorable static website
for a fictional nonprofit that treats the eventual death of the Sun as an
urgent present day fundraising crisis. Satire played dead straight. It must
read like a credible national nonprofit and never wink at the joke anywhere
except one small line at the very bottom of the global footer.

The full specification is the build pack in
`save-the-sun-foundation-build-pack/`, 13 documents plus a manifest. Read
`00_MASTER_BRIEF.md` first, then `11_CLAUDE_CODE_EXECUTION_PLAN.md`. The pack
is the contract. Do not improvise scope, tone, or palette against it.

## Hard safety rules (non-negotiable, from the brief)

1. Static only. No server side code, no database, no email delivery, no form
   submission to any third party.
2. No real payment processing. No Stripe, PayPal, or Square. No card number
   fields, no CVV fields, no bank information, no passwords, no donor accounts.
3. Every transaction or form interaction is simulated locally in the browser.
   The final commitment step reveals an in character status message instead of
   taking anything. No payment credentials are ever requested.
4. Local state only, sessionStorage or localStorage, for harmless fictional
   preferences such as donation tier or adopted sunspot.
5. One disclaimer, at the absolute bottom of the global footer, nowhere else:
   "This is a joke. This static site cannot accept money or process donations."
6. The Foundation is fictional. Do not attach real charities, real people, or
   real regulators to it.

## Settled

1. Public repo `github.com/nixfred/sun.nixfred.com`, remote over HTTPS.
2. Cloudflare Pages project `sun-nixfred-com`, custom domain sun.nixfred.com.
3. Deploy is `./deploy.sh` from this directory. Local wrangler, Direct Upload,
   production. Pushing main does not deploy by itself.
4. Only `site/` is published. Repo docs and the build pack stay out of the
   deployed site.
5. The current `site/index.html` is a scaffold placeholder, not the design. The
   real visual direction is Solar Gold and Deep Space Navy per
   `07_DESIGN_SYSTEM.md`, editorial serif headlines, neutral sans body.
6. Header links to nixfred.com and to the source repo. The Foundation site gets
   its own institutional navigation per the build pack; the nixfred links live
   in the footer once the real site lands so they never break character.
7. Version is visible in the footer on every page.

## Pending Fred

1. Stack ruling before Phase 1. Plain static does not carry a site this size.
   Recommendation: Astro installed with bun, matching calc.nixfred.com.
2. Whether this becomes a card on the nixfred.com homepage, which is served by
   the Pages project `nixfred-com-v5` behind the apex router.
3. Whether it gets an apex alias at nixfred.com/sun. `/sun` is free in
   `~/Projects/apex-router/table.json` as of 2026-07-24, no collision.

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
