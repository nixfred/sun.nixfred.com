# Fred's Site Factory Guide

> Living guide. Grows as the factory proves itself on the Sun site.
> Plain language. Updated at milestones, same rhythm as HISTORY.md.

## The model in one paragraph

You and ChatGPT invent a site and produce a build pack, a folder of markdown
specs. You drop the pack into a new project folder and tell Larry to go.
Larry reads the pack, stands up the repo and Cloudflare plumbing, splits the
work across specialist agents, reviews the rendered result in a real browser,
shows you a preview, and ships to $newsite.nixfred.com. Each run makes the
factory better because the process gets extracted from what actually worked.

## THE FACTORY IS EXTRACTED (2026-07-25)

It now lives at `~/.claude/skills/SiteFactory/`, available in every
Larry session, in any project directory:

1. `SKILL.md`: the orchestration runbook, 7 compressed stages carrying
   every lesson from this build (the token reversal, the hover intent
   fix, the BigInt countdown, the variant mining, the reviewer pattern).
2. `bootstrap.sh <slug> <domain>`: seeds a fresh project and stands up
   repo, Pages project, first deploy, domain, and DNS in one run.
3. `seed/`: a buildable Astro skeleton with the token design system
   pattern, both gates, deploy script, and the docs discipline
   (CLAUDE.md, HISTORY.md, PROJECT_STATUS.md, decisions/) pre-wired.
4. `agents/`: the content-producer and visual-reviewer templates,
   parameterized for any project.

Your workflow for site number two: make `~/Projects/<name>`, drop the
build pack in, tell Larry to run the site factory. Larry does intake,
runs bootstrap, and manufactures.

Smoke tested 2026-07-25: seed installs, builds, and passes both gates
in a scratch directory with zero placeholder residue. The full
end-to-end (bootstrap against real GitHub and Cloudflare) runs for the
first time on site number two; every command in it shipped sun twice.

## What exists so far

1. `factory.config.yaml`: one small file that names the project, domain,
   repo, Pages project, and stack. The factory reads this first.
2. The build pack contract: `save-the-sun-foundation-build-pack/` is read
   only input. Larry never edits it. Your specs stay yours.
3. Infrastructure recipe, proven twice now (scaffold night): gh repo create,
   wrangler pages project create, deploy, attach domain via Pages API, create
   proxied CNAME on the zone, verify in a real browser. Encoded in deploy.sh
   and the git history.
4. The chronicle: HISTORY.md tells the story of the build. The status file:
   docs/project/PROJECT_STATUS.md holds the current state. One of each,
   always.

## What you should look at right now

1. HISTORY.md, chapters 1 and 2.
2. The Round 1 questions Larry is asking you. Your answers become recorded
   decisions in docs/decisions/.

## Concepts, taught as they become real

### How a build pack becomes a website
The pack's information architecture lists every page. Pages that share a
shape (8 program pages, 12 blog posts) become a content collection: markdown
files with a schema, poured into one shared template. Pages that are unique
(homepage, impact dashboard) get their own template. That is the whole trick
of building 60 pages without writing 60 layouts.

More sections land here as the stages complete.
