// @ts-check
import { defineConfig } from 'astro/config';

// Static output — Vercel detects Astro and serves `dist/` with no adapter needed.
// Set `site` once the domain is known (used for canonical URLs and sitemaps).
export default defineConfig({
  // site: 'https://example.com',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
});
