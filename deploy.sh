#!/usr/bin/env bash
# Deploy sun.nixfred.com to Cloudflare Pages (Direct Upload, production).
#
# Auth: the env CLOUDFLARE_API_TOKEN from ~/.env.local works against the Pages
# API (verified 2026-07-25). Do NOT unset it in favor of wrangler's OAuth login,
# that OAuth token expired 2026-07-18 and wrangler cannot refresh it from a
# non-interactive shell. If this ever fails with auth error 10000, run
# `wrangler login` from a real terminal and try again.
#
# Deploys the Astro build output. Fred's order 2026-07-25: no more
# preview branch, production only. Run `bun astro build` first (or let
# this script do it).
set -euo pipefail

cd "$(dirname "$0")"

bun astro build

DIR="${1:-dist}"
PROJECT="sun-nixfred-com"
export CLOUDFLARE_ACCOUNT_ID="${CLOUDFLARE_ACCOUNT_ID:-b120e63874f8f8e9d75db4c1bf65a766}"

echo "Deploying $DIR to Pages project $PROJECT ..."
wrangler pages deploy "$DIR" \
  --project-name="$PROJECT" \
  --branch=main \
  --commit-dirty=true

echo
echo "Live: https://sun.nixfred.com"
