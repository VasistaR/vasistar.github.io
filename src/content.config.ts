import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { CATEGORY_IDS } from './data/categories';

/**
 * Blog collection.
 *
 * To publish a post: drop a `.md` file into src/content/blog/.
 * The filename becomes the URL (my-post.md -> /blog/my-post).
 * The schema below is validated at build time, so a typo in frontmatter
 * fails the build with a clear message instead of shipping broken HTML.
 */
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    /** Write as YYYY-MM-DD. */
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    /** Set true to keep a post out of the listing and the RSS feed. */
    draft: z.boolean().default(false),
  }),
});

/**
 * Projects collection.
 *
 * One `.md` file per project in src/content/projects/. The filename becomes the
 * URL (mesh-sweeper.md -> /projects/mesh-sweeper). Everything above the write-up
 * — links, images, skills — lives in frontmatter; the markdown body below it is
 * the write-up itself.
 */
const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    /** One sentence. Shown on the listing and under the title. */
    description: z.string(),
    /** Write as YYYY-MM-DD. Used for ordering; only the year is displayed. */
    date: z.coerce.date(),
    /**
     * Which filter groups this project belongs to. Ids come from
     * src/data/categories.ts and are validated against it at build time.
     * A project can be in more than one; it shows under each.
     */
    categories: z.array(z.enum(CATEGORY_IDS)).default([]),
    /** Short technology labels, shown as pills on the listing card. */
    tags: z.array(z.string()).default([]),
    /** Rendered as its own section on the project page. */
    skills: z.array(z.string()).default([]),
    /** GitHub, live demo, report PDF, anything. Order is preserved. */
    links: z
      .array(
        z.object({
          label: z.string(),
          href: z.string(),
        })
      )
      .default([]),
    /** Lead image, e.g. '/images/projects/rocket.jpg'. Optional. */
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    /** Extra images shown in a grid below the write-up. */
    gallery: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
          caption: z.string().optional(),
        })
      )
      .default([]),
    /** Optional headline number, e.g. { value: '200 Hz', label: 'control loop' }. */
    highlight: z
      .object({
        value: z.string(),
        label: z.string(),
      })
      .optional(),
    /** Surfaces the project on the home page. Keep this to 2–3 projects. */
    featured: z.boolean().default(false),
    /** Hides it from the live site; still visible in `npm run dev`. */
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, projects };
