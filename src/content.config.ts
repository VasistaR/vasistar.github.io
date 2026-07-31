import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

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

export const collections = { blog };
