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

### Name font (Raceday)

Raceday isn't openly licensed, so it isn't bundled; the name falls back to Barlow Condensed.
To use it, add a licensed web font file at `public/fonts/Raceday-Regular.woff2` and uncomment the
`@font-face` block at the top of `src/styles/global.css`.

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

Any block with `class="reveal"` and `style="--i: n"` slides up on load, staggered 80ms per step.
For a section of many pages (e.g. `/writing/...`), use a folder: `src/pages/writing/index.astro`
plus `src/pages/writing/[slug].astro`, or an Astro content collection.

## Deploy

Import the GitHub repo in Vercel. It detects Astro automatically. No config needed.
