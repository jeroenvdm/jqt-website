# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Hugo static site for JQT Consultancy, a consultancy business focused on IT & Product services for renewable energy. The site uses the Aditu dark theme and is deployed via GitHub Pages with GitHub Actions.

## Build and Development Commands

### Local Development
```bash
# Start Hugo server with live reload
hugo server

# Start Hugo server without fast render (full rebuild on changes)
hugo server --disableFastRender
```

### Build for Production
```bash
# Build the site (outputs to ./public)
hugo

# Build with garbage collection and minification (production-ready)
hugo --gc --minify
```

### Testing Changes
- The Hugo server runs with live reload, so changes to content, layouts, or config are reflected immediately in the browser
- Content files are in `content/`, layouts in `layouts/`, and static assets in `static/`

## Architecture

### Hugo Version Requirements
- **Local/Netlify**: Hugo v0.82.0 (specified in netlify.toml)
- **GitHub Actions**: Hugo v0.122.0 extended (specified in .github/workflows/hugo.yml)
- Note the version discrepancy between deployment targets

### Theme Architecture
- **Primary Theme**: Aditu (dark theme located in `themes/aditu/`)
- **Theme Type**: Git submodule (though .gitmodules references unused ananke theme)
- **Theme Overrides**: Custom layouts and partials can be added to root `layouts/` directory to override theme defaults

### Content Structure
- `content/about.md` - About page with company/personal information
- `content/services.md` - Services offered
- `content/contact.md` - Contact information
- `content/posts/` - Blog posts (not actively used in current navigation)
- `content/styleguide.md` - Theme style guide (commented out in navigation)

### Configuration System
- **Main Config**: `config.toml` - Site-wide configuration including menu structure, parameters, social links
- **Menu Structure**: Defined in `[menu]` section of config.toml (Home, Services, About, Contact)
- **Hero Section**: Configured via `[params.hero]` in config.toml
- **Contact Form**: Uses Formspree service (email obfuscated as "f/xwpbkvoz")

### Layout Customization
- Root `layouts/` directory contains overrides for theme layouts
- `layouts/partials/` - Partial templates that override theme partials
- `layouts/shortcodes/` - Custom Hugo shortcodes for content
- `layouts/_default/index.json` - JSON output format configuration

### Deployment
- **Primary**: GitHub Actions workflow deploys to GitHub Pages on push to main branch
- **Secondary**: Netlify configuration exists (netlify.toml) but may not be actively used
- **Build Output**: `public/` directory (git-ignored, generated on build)

### Static Assets
- `static/images/` - Images referenced in content and config
- Hugo copies everything in `static/` to root of `public/` during build

## Important Notes

- The site uses markup.goldmark.renderer.unsafe = true to allow raw HTML in markdown
- Google Analytics is configured with ID "G-M88V762P7V"
- JSON output is enabled for search functionality
- Syntax highlighting is enabled with code fences
