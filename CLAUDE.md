# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

This is a monorepo with 3 main workspaces:
- `website/` - Astro-based blog and personal website (main project)
- `cms/` - React/Vite content management interface  
- `server/` - Currently empty workspace for future backend

## Common Commands

### Development
```bash
# Run the main website in development mode
npm run website
# or
pnpm website

# Run the CMS interface
npm run cms

# Run specific workspace commands
npm run dev --workspace=website
npm run dev --workspace=cms
```

### Building
```bash
# Build the main website for production
npm run build
# Outputs to /dist directory (configured in astro.config.mjs)
```

### Content Management
```bash
# Create new blog posts interactively
npm run add-page
# or
pnpm add-page
```

This CLI tool prompts for title and categories, then creates a markdown file in `/website/src/content/blog/` with the correct frontmatter structure.

### Linting
```bash
# Lint CMS code
npm run lint --workspace=cms
```

## Architecture

### Website (Astro)
- **Framework**: Astro 5.x with TypeScript
- **Styling**: TailwindCSS with typography plugin
- **Content**: File-based blog posts in `/website/src/content/blog/`
- **Content Schema**: Defined in `/website/src/content/config.ts` using Zod
- **Components**: Astro components in `/website/src/components/`
- **Layouts**: Base layouts in `/website/src/layouts/`
- **Configuration**: Categories defined in `/website/src/configs/categories.js`
- **Markdown Processing**: GitHub-style alerts supported via `remark-github-blockquote-alert`

### CMS (React)
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **UI Library**: Radix UI components with TailwindCSS
- **Data Tables**: TanStack Table
- **Routing**: React Router DOM

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

Available categories are defined in `/website/src/configs/categories.js`.

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

- `/website/src/content/config.ts` - Content collection schema
- `/website/src/configs/categories.js` - Available blog categories  
- `/website/scripts/add-page.js` - Blog post creation CLI
- `/website/astro.config.mjs` - Astro configuration
- `/vercel.json` - Deployment and redirect configuration