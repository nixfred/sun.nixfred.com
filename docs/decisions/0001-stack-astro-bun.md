# Decision 0001: Astro with bun

Date: 2026-07-25
Status: Accepted

## Context

The build pack requires 60+ pages, seven content collections (programs, blog,
press, reports, leadership, partners, policies), shared layouts, mega
navigation, client side search, and interactive islands (donation simulator,
sunspot adoption, dashboards), all deployed static to Cloudflare Pages. The
charter says Astro with Bun is likely correct, inspect and confirm.

## Options considered

1. Plain static HTML. Rejected: 60+ pages with shared nav and layouts becomes
   unmaintainable duplication.
2. Astro with bun. Content collections map exactly to the pack's suggested
   content architecture. Zero JS by default, islands where needed. Already
   proven on calc.nixfred.com. Fred's standing stack preference.
3. Next.js or other React frameworks. Rejected: heavier runtime than the site
   needs, fights the static requirement.

## Decision

Astro, installed with bun. Static output. Client side interactivity as small
islands of vanilla TS or minimal framework components, decided per feature.

## Consequences

1. Content lives in src/content/ collections with schemas, so agents can
   produce content as structured markdown without touching layout code.
2. Build is `bun astro build`, deploy stays `./deploy.sh` pointing at dist/.
3. The factory inherits a proven stack default for future build packs.
