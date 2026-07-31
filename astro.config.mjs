// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { remarkReadingTime } from './src/plugins/remark-reading-time.mjs';

/* ---------------------------------------------------------------------------
 * DEPLOY CONFIG — read this before your first deploy.
 *
 * There are two kinds of GitHub Pages sites, and they need different settings:
 *
 * 1. USER SITE  — repo is named exactly `yourusername.github.io`
 *      site: 'https://yourusername.github.io'
 *      base: '/'                              <-- leave BASE as '' below
 *
 * 2. PROJECT SITE — repo has any other name, e.g. `portfolio`
 *      site: 'https://yourusername.github.io'
 *      base: '/portfolio'                     <-- set BASE = '/portfolio'
 *
 * If you later point a custom domain at the site, set SITE to that domain
 * and put BASE back to ''.
 * ------------------------------------------------------------------------- */

// Repo is VasistaR/personalportfolio-mk3 — a *project* site, so it serves from
// a subdirectory and BASE must match the repo name. If you later rename the
// repo to `VasistaR.github.io`, set BASE back to ''.
// (GitHub lowercases the username in Pages URLs.)
const SITE_URL = 'https://vasistar.github.io';
const BASE = '/personalportfolio-mk3';

export default defineConfig({
  site: SITE_URL,
  base: BASE || undefined,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
    shikiConfig: {
      // Two themes so fenced code blocks follow the light/dark toggle.
      themes: { light: 'github-light', dark: 'github-dark-dimmed' },
      wrap: true,
    },
  },
});
