# sun.nixfred.com

Home of the **Solar Save Foundation**, a fictional nonprofit that treats the
eventual death of the Sun as an urgent present day fundraising crisis. Satire,
played completely straight. Live at [sun.nixfred.com](https://sun.nixfred.com).

It is a static site. It cannot accept money, it processes no payments, and it
transmits no data anywhere.

Status: scaffold. Infrastructure is provisioned and serving a placeholder. The
full specification is in `save-the-sun-foundation-build-pack/`, thirteen
documents plus a manifest. The build has not started.

## Stack

1. Static, no server side code, no database, no CDN dependencies.
2. Hosting: Cloudflare Pages project `sun-nixfred-com`.
3. Custom domain `sun.nixfred.com` on the nixfred.com zone, automatic TLS.

The placeholder is plain HTML. A site the size of the build pack will need a
generator, most likely Astro installed with bun, matching calc.nixfred.com.
That call has not been made yet.

## Deploy

```bash
./deploy.sh
```

That runs a Direct Upload to production. The env `CLOUDFLARE_API_TOKEN` is zone
scoped and fails the Pages API, so the script unsets it and lets wrangler use
its OAuth login. Pushing to `main` does not deploy on its own. Run the script.

## Layout

```
site/                                  everything that gets published
  index.html                           the site
  _headers                             Cloudflare Pages response headers
save-the-sun-foundation-build-pack/    the specification, 13 documents
deploy.sh                              production deploy
CLAUDE.md                              design law, read it before changing anything
```

## Repo

Public. Every commit gets a privacy scan before it goes up. Local planning
material lives in `Plans/` or `_spec/`, both gitignored.

Built by Fred Nix.
