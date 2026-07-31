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

const SITE_URL = 'https://yourusername.github.io';
const BASE = '';

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
