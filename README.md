# Personal Portfolio

A fast, static portfolio site with a markdown blog — built with [Astro](https://astro.build), deployed free on GitHub Pages.

- **Pages** — Home, Experience, Projects (filterable, with per-project pages), Awards, Blog
- **Blog** — one `.md` file per post, no CMS
- **Theming** — follows your OS light/dark setting, with a manual override
- **Type** — Geomini (FontBob) via Google Fonts, variable weight 200–800
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

### 3. `src/content/projects/*.md` — projects

Each project is a markdown file with its own page (see **Adding a project** below). Mark two or three with `featured: true` and they'll also show on the home page.

### 3b. `src/data/awards.ts` — awards & honors

A plain array, same shape as the experience file. Powers the `/awards` page.

### 4. `astro.config.mjs` — your URL

See **Deploying** below — this is the one that decides whether your links work.

Then replace `public/favicon.svg`.

**Headshot** — drop a square photo in `public/` (e.g. `public/headshot.jpg`) and set `headshot: '/headshot.jpg'` in `src/consts.ts`. It's cropped to a circle at the centre of the home page orbit graphic. Until you set it, an initials monogram fills the space.

**Resume** — the "Resume" social link points at `/experience`, which is the page itself. If you also want a downloadable PDF, put it in `public/` and set `RESUME_PDF = '/resume.pdf'` in `src/consts.ts`; a download button then appears on the Experience page. Leave it empty and no button renders, so nothing ever links to a missing file.

---

## Adding a project

Create a file in `src/content/projects/`. The filename becomes the URL, so `mesh-sweeper.md` publishes at `/projects/mesh-sweeper`. Everything above the `---` is metadata; the markdown below it is the write-up.

```markdown
---
title: 'Project Name'
description: 'One sentence, shown on the listing card and under the title.'
date: 2026-03-14                    # ordering; only the year is displayed
categories: ['research', 'personal'] # filter groups — see below
featured: true                      # also show it on the home page
tags: ['Python', 'CFD']             # short pills on the listing card
skills:                             # shown directly under the title
  - 'Finite element analysis'
  - 'Test automation'
links:                              # first one becomes the primary button
  - label: 'GitHub'
    href: 'https://github.com/you/repo'
  - label: 'Report (PDF)'
    href: '/files/report.pdf'
highlight:                          # optional headline number
  value: '8×'
  label: 'faster studies'
cover: '/images/projects/hero.png'  # first slide of the carousel
coverAlt: 'Describe the image for screen readers'
gallery:                            # further carousel slides
  - src: '/images/projects/rig.jpg'
    alt: 'The test rig on the bench'
    caption: 'Optional caption shown under the image.'
---

Your write-up goes here — standard markdown.
```

Only `title`, `description` and `date` are required; everything else is optional and its section disappears when omitted.

**Images** go in `public/images/projects/` and are referenced from the site root. The `cover` plus every `gallery` entry become slides in one carousel — swipeable, with arrows, dots and a counter. Projects without any images simply have no carousel, and projects without a `cover` get a generated placeholder on the listing card, so nothing looks broken while you're still gathering screenshots.

**Links** can be external (GitHub, a live demo) or internal (`/blog/some-post`). External ones automatically open in a new tab.

### Project categories

Categories power the filter menu on `/projects`. They live in one file — **`src/data/categories.ts`**:

```ts
export const PROJECT_CATEGORIES: ProjectCategory[] = [
  { id: 'personal', label: 'Personal' },
  { id: 'research', label: 'Research' },
  { id: 'leadership', label: 'Leadership' },
];
```

- **To add one:** add an entry here, then list its `id` in any project's `categories`.
- **To remove one:** delete it here and remove that id from any project using it.
- **To rename what visitors see:** change `label` only. Leave `id` alone — that's what project files and filter links refer to.
- **Order** in this array is the order the filter buttons appear in.

A project can belong to several categories and shows under each. The ids are checked at build time, so a typo fails the build with a message listing the valid options rather than shipping a filter that silently matches nothing.

The menu defaults to **See all**, shows a count beside each category, hides categories that no project uses, and keeps your choice in the URL (`/projects?filter=research`) so a filtered view can be linked or bookmarked.

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

The site defaults to your operating system's light/dark preference and follows it live if you change it. The header button is a simple **Light ⇄ Dark** toggle; the first click stores an override in `localStorage`, which from then on wins over the OS setting.

To go back to following the OS, clear the stored value (`localStorage.removeItem('theme')` in the browser console, or just clear site data).

An inline script in `<head>` sets the theme before the first paint, so there's no flash of the wrong colors on load.

Colors are CSS custom properties at the top of `src/styles/global.css` — the light palette under `:root`, the dark one under `[data-theme='dark']`. Change them in those two blocks and the whole site follows.

---

## Project structure

```
src/
├── components/     Header, Footer, ThemeToggle, Carousel, SocialIcon, Arrow, ...
├── content/
│   ├── blog/       ← your posts live here
│   └── projects/   ← your project write-ups live here
├── data/           experience.ts, awards.ts, categories.ts
├── layouts/        BaseLayout.astro
├── pages/          index, experience, awards, projects/, blog/, 404, rss.xml
├── plugins/        reading-time estimator
├── styles/         global.css — design tokens + all shared styles
├── consts.ts       ← site-wide config
└── content.config.ts   blog frontmatter schema
public/             favicon, resume.pdf, images/
.github/workflows/  deploy.yml
```
