# sun.nixfred.com

A nixfred.com property. Live at [sun.nixfred.com](https://sun.nixfred.com).

Status: scaffold. Infrastructure is provisioned and serving a placeholder.
Content is pending.

## Stack

1. Static HTML, no build step, no framework, no CDN dependencies.
2. Hosting: Cloudflare Pages project `sun-nixfred-com`.
3. Custom domain `sun.nixfred.com` on the nixfred.com zone, automatic TLS.

If the content turns out to need many pages, this escalates to Astro installed
with bun, matching calc.nixfred.com. That decision is not made yet.

## Deploy

```bash
./deploy.sh
```

That runs a Direct Upload to production. The env `CLOUDFLARE_API_TOKEN` is zone
scoped and fails the Pages API, so the script unsets it and lets wrangler use
its OAuth login. Pushing to `main` does not deploy on its own. Run the script.

## Layout

```
index.html    the site
_headers      Cloudflare Pages response headers
deploy.sh     production deploy
CLAUDE.md     design law for this repo, read it before changing anything
```

## Repo

Public. Every commit gets a privacy scan before it goes up. Local planning
material lives in `Plans/` or `_spec/`, both gitignored.

Built by Fred Nix.
