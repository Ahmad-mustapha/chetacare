# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Chetacare is a static marketing/content frontend for a chronic-disease preventive care service. There is no backend in this repo — content (blog posts, page copy) is defined statically in TypeScript. Tone/messaging centers on preventive care and trustworthiness; keep that in mind when editing copy.

## Commands

```bash
npm run dev       # start Vite dev server
npm run build     # tsc -b type-check, then vite build, then postbuild sitemap generation
npm run lint      # eslint .
npm run preview   # preview the production build
```

There is no test runner configured in this repo (no test script, no test files).

## Architecture

- **Routing**: `src/App.tsx` defines all routes with `react-router-dom`, nested under a single `Layout` route (`src/components/Layout.tsx`, providing `Navbar`/`Footer`). Adding a page means adding both a route in `App.tsx` and a component in `src/pages/`.
- **Page composition**: Each page in `src/pages/` is a thin composition of section components pulled from `src/components/<page-name>/` (e.g. `src/components/home/Hero.tsx`, `src/components/about/Mission.tsx`). When editing a page's content/layout, look in its matching `src/components/<page>/` subfolder rather than the page file itself.
- **Blog content**: All blog posts live as data in `src/data/blogData.ts` (`BlogPost[]`), each with a `fullContent: BlogPostContent[]` array of typed blocks (`paragraph`, `heading`, `list`, `quote`, `image`). `src/pages/Blog.tsx` lists posts (via `BlogGrid`/`BlogCard`/`BlogFilters`/`BlogPagination`), `src/pages/BlogPost.tsx` renders a single post by `id` route param.
  - **Sitemap sync**: `scripts/generate-sitemap.js` (run automatically via `postbuild`) hardcodes a `blogPostIds` array of blog post IDs — it does NOT read `blogData.ts` (JS script, TS data file). When adding/removing a blog post, update `blogPostIds` in this script manually or the sitemap will drift.
- **SEO**: `src/components/Seo.tsx` wraps `react-helmet-async` and is used per-page to set title/description/canonical/OG/Twitter/structured-data tags. Pass `structuredData` for schema.org JSON-LD where relevant (e.g. blog posts, articles).
- **Styling**: Tailwind CSS v4 via `@tailwindcss/vite` plugin (not the PostCSS plugin) — config in `tailwind.config.js` only extends the `desktop1440: '1440px'` breakpoint; most theme is Tailwind defaults plus utility classes in components. `src/App.css`/`src/index.css` hold any global/non-Tailwind CSS.
- **Deployment**: Deployed on Vercel; `vercel.json` rewrites all paths to `/index.html` for client-side routing (SPA fallback).
