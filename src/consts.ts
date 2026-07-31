/* ---------------------------------------------------------------------------
 * SITE CONFIG — this is the only file you need to edit to make the site yours.
 * Everything below flows into the pages, <head> metadata, RSS feed and footer.
 * ------------------------------------------------------------------------- */

export const SITE = {
  /** Your name, shown in the header and used in page titles. */
  name: 'Your Name',
  /** Short role line under your name on the home page. */
  role: 'Aerospace Engineering + Computer Science',
  /** Where you study, and when you graduate. */
  school: 'Your University',
  gradYear: '2028',
  /** Used for <meta description> and social previews. */
  description:
    'Junior studying Aerospace Engineering and Computer Science. I build flight software, simulation tools, and things that leave the ground.',
  /** Shown on the home page as a short "what I care about" paragraph. */
  location: 'City, State',
  email: 'you@example.com',
} as const;

/* ---------------------------------------------------------------------------
 * SOCIAL LINKS — delete any you don't want; the footer/home page adapt.
 * ------------------------------------------------------------------------- */
export const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/yourusername' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yourusername' },
  { label: 'Email', href: 'mailto:you@example.com' },
  { label: 'Resume', href: '/resume.pdf' },
] as const;

/* ---------------------------------------------------------------------------
 * GOOGLE ANALYTICS
 * Paste your GA4 Measurement ID here (looks like "G-XXXXXXXXXX").
 * Leave it as an empty string to disable analytics entirely.
 * The script only loads on the production build — `npm run dev` never tracks.
 * ------------------------------------------------------------------------- */
export const GA_MEASUREMENT_ID = '';

/* ---------------------------------------------------------------------------
 * NAVIGATION
 * ------------------------------------------------------------------------- */
export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Experience', href: '/experience' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
] as const;
