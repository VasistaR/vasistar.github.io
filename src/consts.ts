/* ---------------------------------------------------------------------------
 * SITE CONFIG — this is the only file you need to edit to make the site yours.
 * Everything below flows into the pages, <head> metadata, RSS feed and footer.
 * ------------------------------------------------------------------------- */

export const SITE = {
  /** Your name, shown in the header and used in page titles. */
  name: 'Vasista Ramachandruni',
  /** Short role line under your name on the home page. */
  role: 'Aerospace Engineering + Computer Science',
  /** Where you study. */
  school: 'University of Colorado Boulder',
  /** Used for <meta description> and social previews. */
  description:
    'Junior studying Aerospace Engineering and Computer Science. I build flight software, simulation tools, and things that leave the ground.',
  /** Used by the "Get in touch" button on the home page. */
  email: 'vara9696@colorado.edu',
  /**
   * HEADSHOT — drop your photo in `public/` and put its path here,
   * e.g. '/headshot.jpg'. It sits at the centre of the orbit graphic on the
   * home page. A square image works best (it's cropped to a circle).
   * While this is empty, an initials monogram is shown in its place.
   */
  headshot: '/headshot.jpg',
} as const;

/* ---------------------------------------------------------------------------
 * SOCIAL LINKS — delete any you don't want; the footer/home page adapt.
 * `icon` picks the glyph: github | linkedin | email | resume | link
 * ------------------------------------------------------------------------- */
export const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/VasistaR', icon: 'github' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/vasistar', icon: 'linkedin' },
  { label: 'Email', href: 'mailto:vara9696@colorado.edu', icon: 'email' },
  { label: 'Resume', href: '/experience', icon: 'resume' },
] as const;

/**
 * Optional downloadable resume PDF. Put the file in `public/` and set the path
 * (e.g. '/resume.pdf') to show a download button on the Experience page.
 * Leave empty and no button is rendered — nothing links to a missing file.
 */
export const RESUME_PDF = '';

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
  { label: 'Awards', href: '/awards' },
  { label: 'Blog', href: '/blog' },
] as const;
