/**
 * Adds a `minutesRead` value to each markdown file's frontmatter, which blog
 * posts read via `remarkPluginFrontmatter`.
 *
 * Counts words in the raw source rather than the parsed tree — close enough for
 * a "5 min read" label, and it keeps the dependency list at zero.
 */
const WORDS_PER_MINUTE = 220;

export function remarkReadingTime() {
  return function (_tree, file) {
    const source = String(file.value ?? '')
      // Drop frontmatter, fenced code blocks and markdown punctuation so the
      // count reflects prose rather than syntax.
      .replace(/^---[\s\S]*?---/, '')
      .replace(/```[\s\S]*?```/g, '')
      .replace(/[#>*_`~\-\[\]()]/g, ' ');

    const words = source.split(/\s+/).filter(Boolean).length;
    const minutes = Math.max(1, Math.round(words / WORDS_PER_MINUTE));

    file.data.astro.frontmatter.minutesRead = `${minutes} min read`;
    file.data.astro.frontmatter.wordCount = words;
  };
}
