# Personal Portfolio

A fast, static portfolio site with a markdown blog — built with [Astro](https://astro.build), deployed free on GitHub Pages.

- **Pages** — Home, Experience, Projects, Blog
- **Blog** — one `.md` file per post, no CMS
- **Theming** — follows your OS light/dark setting, with a manual override
- **Type** — Space Grotesk + JetBrains Mono via Google Fonts
- **Analytics** — Google Analytics 4, production-only
- **Extras** — RSS feed, sitemap, 404 page, reading time, social previews

No JavaScript framework ships to the browser. The whole site is static HTML plus a few KB of CSS.

---

## Quick start

```bash
npm install
npm run dev          # http://localhost:4321
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Local dev server with hot reload |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the built site locally |

---

## Make it yours

Work through these four files, in order.

### 1. `src/consts.ts` — your details

Name, role, school, email, social links, and your Google Analytics ID. Everything else on the site reads from here.

### 2. `src/data/experience.ts` — jobs, skills, coursework

A plain array. Add or remove entries and the `/experience` page rebuilds itself. Newest first.

### 3. `src/data/projects.ts` — projects

Same idea. Mark two or three with `featured: true` and they'll also show on the home page.

### 4. `astro.config.mjs` — your URL

See **Deploying** below — this is the one that decides whether your links work.

Then replace `public/favicon.svg`, and drop your resume at `public/resume.pdf` so the header link resolves.

---

## Writing a blog post

Create a file in `src/content/blog/`. The filename becomes the URL, so `first-flight.md` publishes at `/blog/first-flight`.

```markdown
---
title: 'Your post title'
description: 'One sentence — shown in the listing and in link previews.'
pubDate: 2026-08-14
tags: ['aerospace', 'python']
---

Your content here. Standard markdown: **bold**, `code`, lists, tables,
images, and syntax-highlighted code fences.
```

| Field | Required | Notes |
| --- | --- | --- |
| `title` | yes | |
| `description` | yes | |
| `pubDate` | yes | `YYYY-MM-DD` |
| `updatedDate` | no | Adds an "Updated …" line |
| `tags` | no | Defaults to none |
| `draft` | no | `true` hides it from the live site |

Frontmatter is validated at build time, so a typo fails the build with a clear message instead of shipping a broken page.

**Drafts** stay visible in `npm run dev` (with a badge) and are excluded from the production build, the home page, and the RSS feed.

**Images** go in `public/images/` and are referenced as `![alt text](/images/name.png)`.

`src/content/blog/hello-world.md` documents all of this in post form — delete it once you've written your own.

---

## Deploying to GitHub Pages

### Step 1 — Pick your repo name

This decides one line of config, so get it right first.

**Option A — user site (recommended).** Name the repo exactly `yourusername.github.io`. Your site lives at `https://yourusername.github.io`.

In `astro.config.mjs`:

```js
const SITE_URL = 'https://yourusername.github.io';
const BASE = '';
```

**Option B — project site.** Any other repo name, e.g. `portfolio`. Your site lives at `https://yourusername.github.io/portfolio`.

```js
const SITE_URL = 'https://yourusername.github.io';
const BASE = '/portfolio';   // must match the repo name exactly
```

> Getting `BASE` wrong is the most common cause of a deployed site with broken CSS and dead links. If your repo is not named `username.github.io`, you need `BASE`.

### Step 2 — Push the code

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main
```

### Step 3 — Turn on Pages

In your repo on GitHub: **Settings → Pages → Build and deployment → Source → GitHub Actions**.

That's the whole setup. `.github/workflows/deploy.yml` handles the rest, and it's already in this repo.

### Step 4 — Watch it build

Open the **Actions** tab. The first run takes a minute or two; your site is live when it goes green. Every push to `main` redeploys automatically.

### Custom domain (optional)

1. Create `public/CNAME` containing just your domain, e.g. `yourname.com`
2. Point a `CNAME` DNS record at `yourusername.github.io`
3. Set `SITE_URL` to `https://yourname.com` and `BASE` back to `''`

---

## Google Analytics

1. Create a GA4 property at [analytics.google.com](https://analytics.google.com)
2. Copy the Measurement ID — it looks like `G-XXXXXXXXXX`
3. Paste it into `src/consts.ts`:

```ts
export const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';
```

The tag only loads in production builds, so local development never pollutes your data. Leave the string empty to disable analytics entirely — no script is emitted at all.

---

## How the theme works

The site defaults to your operating system's light/dark preference and follows it live if you change it. The header button cycles **System → Light → Dark**, storing an override in `localStorage`; picking System clears it.

An inline script in `<head>` sets the theme before the first paint, so there's no flash of the wrong colors on load.

Colors are CSS custom properties at the top of `src/styles/global.css` — the light palette under `:root`, the dark one under `[data-theme='dark']`. Change them in those two blocks and the whole site follows.

---

## Project structure

```
src/
├── components/     Header, Footer, ThemeToggle, Analytics, BaseHead
├── content/blog/   ← your posts live here
├── data/           experience.ts, projects.ts
├── layouts/        BaseLayout.astro
├── pages/          index, experience, projects, blog/, 404, rss.xml
├── plugins/        reading-time estimator
├── styles/         global.css — design tokens + all shared styles
├── consts.ts       ← site-wide config
└── content.config.ts   blog frontmatter schema
public/             favicon, resume.pdf, images/
.github/workflows/  deploy.yml
```
