---
title: 'This Website'
description: 'A statically generated portfolio with a markdown blog and project write-ups, built with Astro.'
date: 2026-07-30
categories: ['personal']
tags: ['Astro', 'TypeScript', 'CSS']
skills:
  - 'Astro and static site generation'
  - 'Semantic HTML and accessibility'
  - 'Modern CSS (custom properties, grid, container-aware layout)'
  - 'CI/CD with GitHub Actions'
  - 'Web performance'
links:
  - label: 'GitHub'
    href: 'https://github.com/VasistaR/VasistaR.github.io'
---

The site you are reading. Built partly because I wanted one and partly because I wanted to know what a modern static site generator actually does.

## Decisions worth explaining

**No JavaScript framework.** Every page here is HTML and about eight kilobytes of CSS. The only scripts are a theme toggle and an animation guard. A portfolio is a document, and documents do not need a runtime.

**Content as markdown files.** Blog posts and project write-ups — including this one — are `.md` files in the repository. Frontmatter is validated against a schema at build time, so a mistyped field fails the build with a message instead of shipping a broken page.

**Theming that respects the reader.** The palette follows the operating system setting by default and remembers an explicit override. An inline script applies it before first paint, so there is no flash of the wrong colors.

**Deployment as a non-event.** Pushing to `main` triggers a GitHub Actions workflow that builds the site and publishes it. There is no manual step to forget.

## What I would do differently

I would set up the image pipeline earlier. Referencing files from `public/` is simple but skips Astro's image optimization, which is a trade I made for ease of editing and would revisit if the page weight grew.
