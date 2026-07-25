// @ts-check
import { defineConfig } from 'astro/config';

// Save The Sun Foundation. Static output, Cloudflare Pages, no adapters.
export default defineConfig({
  site: 'https://sun.nixfred.com',
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
});
