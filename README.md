# personal-site

Adi's personal website. Static [Astro](https://astro.build) site, deployed on Vercel.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview
```

Requires Node 22.12+.

## Editing

- **Site-wide values** (name, "Currently in", social links, Substack URLs): `src/site.config.ts`
- **Home page copy**: `src/pages/index.astro`
- **Colours, type, animation**: `src/styles/global.css`
- **Name font**: CM Geom by Cedric Müller (SIL OFL), self-hosted in `public/fonts/` with its licence
## Adding a page

Create `src/pages/<name>.astro` (e.g. `photos.astro` → `/photos`) and wrap it in the layout:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout title="Photos">
  <h1 class="reveal" style="--i: 0">Photos</h1>
  <p class="reveal" style="--i: 1">…</p>
</BaseLayout>
```

Any block with `class="reveal"` and `style="--i: n"` fades into view on load, one block after another in `--i` order (timings in `global.css`).
For a section of many pages (e.g. `/writing/...`), use a folder: `src/pages/writing/index.astro`
plus `src/pages/writing/[slug].astro`, or an Astro content collection.

## Deploy

Import the GitHub repo in Vercel. It detects Astro automatically. No config needed.
