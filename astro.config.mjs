// @ts-check
import { defineConfig } from 'astro/config';

// Solar Save Foundation. Static output, Cloudflare Pages, no adapters.
export default defineConfig({
  site: 'https://solarsave.org',
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
});
