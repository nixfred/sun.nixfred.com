#!/usr/bin/env bash
# Deploy sun.nixfred.com to Cloudflare Pages (Direct Upload, production).
#
# The env CLOUDFLARE_API_TOKEN / CF_API_TOKEN in ~/.env.local are zone scoped.
# They work for DNS but FAIL the Pages API (auth error 10000) and they override
# wrangler's OAuth login. Unset them so wrangler uses OAuth.
set -euo pipefail

cd "$(dirname "$0")"

DIR="${1:-.}"
PROJECT="sun-nixfred-com"

echo "Deploying $DIR to Pages project $PROJECT ..."
env -u CLOUDFLARE_API_TOKEN -u CF_API_TOKEN \
  npx --yes wrangler@latest pages deploy "$DIR" \
    --project-name="$PROJECT" \
    --branch=main \
    --commit-dirty=true

echo
echo "Live: https://sun.nixfred.com"
