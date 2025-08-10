# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

This is an Astro-based blog and personal website project with the following structure:

- Root directory contains the main Astro project
- `/src/` - Source code including components, pages, and content
- `/public/` - Static assets
- `/scripts/` - Utility scripts for content management

## Common Commands

### Development

```bash
# Run the website in development mode
npm run dev
# or
npm start

# Serves the website at http://localhost:4321
```

### Building

```bash
# Build the website for production
npm run build
# Outputs to /dist directory (configured in astro.config.mjs)
# DO NOT BUILD to test features. Use 'npm run dev' for development testing
```

### Content Management

```bash
# Create new blog posts interactively
npm run add-page
# or
pnpm add-page
```

This CLI tool prompts for title and categories, then creates a markdown file in `/src/content/blog/` with the correct frontmatter structure.

### Linting

```bash
# Currently no linting setup - can be added if needed
```

## Architecture

### Main Project (Astro)

- **Framework**: Astro 5.x with TypeScript
- **Styling**: TailwindCSS with typography plugin
- **Content**: File-based blog posts in `/src/content/blog/`
- **Content Schema**: Defined in `/src/content/config.ts` using Zod
- **Components**: Astro components in `/src/components/`
- **Layouts**: Base layouts in `/src/layouts/`
- **Configuration**: Categories defined in `/src/configs/categories.js`
- **Markdown Processing**: GitHub-style alerts supported via `remark-github-blockquote-alert`

### Content Structure

Blog posts follow this frontmatter schema:

```yaml
---
id: "unique-nanoid-16-chars"
title: "Post Title"
description: "Short description"
date: 2023-09-18
category: ["Dev", "Note"]
cover:
  img: "./cover.jpg" # Required for build
  credit: "optional"
  url: "optional"
---
```

Available categories are defined in `/src/configs/categories.js`.

### Deployment

- **Platform**: Vercel
- **Build Output**: `/dist` directory
- **Redirects**: Configured in `/vercel.json` for URL shortening

## Content Guidelines

When creating new blog posts:

1. Use the `npm run add-page` CLI tool for consistent structure
2. Always add a `cover.jpg` file - it's required for the build
3. Use the predefined categories from the categories config
4. IDs are auto-generated 16-character nanoids for GitHub discussions integration

## Key Files to Understand

- `/src/content/config.ts` - Content collection schema
- `/src/configs/categories.js` - Available blog categories  
- `/scripts/add-page.js` - Blog post creation CLI
- `/astro.config.mjs` - Astro configuration
- `/vercel.json` - Deployment and redirect configuration
