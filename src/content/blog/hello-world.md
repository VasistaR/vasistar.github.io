---
title: 'How this blog works (and how to write a post)'
description: 'A one-file walkthrough of the markdown setup — copy this post, delete the words, keep the frontmatter.'
pubDate: 2026-07-12
tags: ['meta', 'writing']
---

Every post on this site is a single `.md` file in `src/content/blog/`. There is no database, no CMS, and no admin panel. To publish something you add a file, commit it, and push. GitHub Actions rebuilds the site within a minute.

## The frontmatter

The block at the very top of this file, fenced by `---`, is the frontmatter. It is the only part with rules:

| Field | Required | Notes |
| --- | --- | --- |
| `title` | yes | Shown as the page heading and the browser tab title |
| `description` | yes | One sentence; appears in the listing and in link previews |
| `pubDate` | yes | Write it as `YYYY-MM-DD` |
| `updatedDate` | no | Adds an "Updated ..." line under the title |
| `tags` | no | A list, like `['cfd', 'python']` |
| `draft` | no | Set `true` to hide it from the live site |

Those rules are enforced at build time. If you misspell `pubDate` or forget a description, the build fails with a message pointing at the file — which is much better than discovering a broken page after it ships.

## The filename becomes the URL

This file is `hello-world.md`, so it lives at `/blog/hello-world`. Pick filenames you would be happy to see in a link: lowercase, hyphens instead of spaces, no dates unless you want them in the URL forever.

## Everything markdown does, works

**Bold**, *italic*, [links](https://astro.build), and lists:

- Unordered lists
- Nested items work too
- So do numbered lists

> Blockquotes are styled with an accent rule down the left side. Useful for pulling out a result or a quote from a paper.

Code blocks are syntax-highlighted, and they follow the light/dark theme automatically:

```python
import numpy as np

def hohmann_dv(r1: float, r2: float, mu: float = 3.986e14) -> float:
    """Total delta-v for a Hohmann transfer between two circular orbits."""
    a_transfer = 0.5 * (r1 + r2)
    dv1 = np.sqrt(mu / r1) * (np.sqrt(2 * r2 / (r1 + r2)) - 1)
    dv2 = np.sqrt(mu / r2) * (1 - np.sqrt(2 * r1 / (r1 + r2)))
    return abs(dv1) + abs(dv2)
```

Inline code like `getCollection('blog')` gets a subtle background so it stands out from prose.

## Images

Put an image in `public/images/` and reference it with a root-relative path:

```markdown
![A caption describing the image](/images/your-image.png)
```

Always write real alt text. It is what screen readers announce, and it is what shows up if the image fails to load.

## Drafts

Set `draft: true` in the frontmatter and the post disappears from the live site, the RSS feed, and the home page — but stays visible when you run `npm run dev`, marked with a small "Draft" badge. That way you can keep half-finished posts in the repo without publishing them.

---

That is the whole system. Delete this post once you have written your own — or keep it around as a reference.
