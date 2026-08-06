/* ---------------------------------------------------------------------------
 * PROJECT CATEGORIES — the single source of truth.
 *
 * To ADD a category: add an entry below, then add its `id` to the `categories`
 * list in any project's frontmatter.
 * To REMOVE one: delete the entry here and remove that id from any project that
 * used it.
 * To RENAME what visitors see: change `label` only — leave `id` alone, since
 * that's what the project files and filter links refer to.
 *
 * The ids here are validated at build time (see src/content.config.ts). If a
 * project lists a category that doesn't exist in this file, the build fails
 * with a message naming the valid options — you'll never ship a broken filter.
 *
 * Order matters: it's the order the filter buttons appear in.
 * ------------------------------------------------------------------------- */

export interface ProjectCategory {
  /** Used in frontmatter and URLs. Lowercase, no spaces. Don't change casually. */
  id: string;
  /** What visitors see on the filter buttons and project tiles. */
  label: string;
}

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  { id: 'personal', label: 'Personal' },
  { id: 'research', label: 'Research' },
  { id: 'leadership', label: 'Leadership' },
];

/** Label shown on the default "show everything" filter button. */
export const ALL_LABEL = 'See all';

/* --- Helpers used by the pages. You shouldn't need to touch these. --------- */

/** Valid ids as a tuple, for the Zod schema in content.config.ts. */
export const CATEGORY_IDS = PROJECT_CATEGORIES.map((c) => c.id) as [string, ...string[]];

/** Turns an id into its display label, falling back to the raw id. */
export function categoryLabel(id: string): string {
  return PROJECT_CATEGORIES.find((c) => c.id === id)?.label ?? id;
}
