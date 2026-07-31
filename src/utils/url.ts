/**
 * Prefixes a site-root path with the configured `base` from astro.config.mjs,
 * so links keep working whether the site is deployed at the domain root
 * (username.github.io) or in a subdirectory (username.github.io/portfolio).
 *
 * Always route internal links through this. `BASE_URL` is "/" when no base is
 * set but "/portfolio" — with no trailing slash — when one is, so naive
 * concatenation silently produces "/portfoliofavicon.svg".
 *
 * External links, mailto: and #anchors are passed through untouched.
 */
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export function withBase(path: string): string {
  if (/^([a-z]+:|\/\/|#)/i.test(path)) return path;
  return BASE + (path.startsWith('/') ? path : `/${path}`);
}

/** True for links that should open in a new tab with rel="noopener". */
export function isExternal(href: string): boolean {
  return /^(https?:)?\/\//i.test(href);
}
