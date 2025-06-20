# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the official website for BAIFF (Bucharest AI Film Festival) - a single-page scrolling website showcasing Romania's first international AI film festival. The site is built with vanilla HTML5, CSS3, and JavaScript without any build tools or framework dependencies.

## Development Setup

Since this is a static website, simply open `index.html` in a web browser to view the site. No build process or package installation required.

## Architecture

### File Structure
- `index.html` - Single-page application with all sections
- `css/style.css` - Main stylesheet with custom fonts and animations  
- `css/responsive.css` - Desktop-first responsive styles (min-width: 992px)
- `js/main.js` - Interactive functionality and animations
- `assets/fonts/` - Custom web fonts (Alte Haas Grotesk, Branding Semilight)

### Key Features
- **Fullscreen Navigation**: Hamburger menu that opens an overlay navigation with section descriptions
- **Animated Section Titles**: Horizontal scrolling text effect using repeated text and CSS animations
- **Auto-scrolling Film Cards**: Screenings section with staggered automatic horizontal scrolling
- **Countdown Timer**: Competition submission deadline countdown (October 1, 2025)
- **Custom Typography**: Mix of Branding Semilight (body) and Alte Haas Grotesk (headings)

### CSS Architecture
- Desktop-first responsive design
- CSS custom properties for consistent theming
- Black background (#000000) with white text (#FFFFFF)
- Flexbox and Grid layouts
- Custom @font-face declarations with woff2 format

### JavaScript Functionality
- Scroll animations for section titles using text repetition and CSS transforms
- Multi-container auto-scroll with stagger delays for screening cards
- Navigation menu toggle with body class management
- Real-time countdown timer with date calculations
- Event listeners for user interactions (hover pause, menu clicks)

## Code Conventions

- Use semantic HTML5 elements
- BEM-like CSS class naming where applicable
- Vanilla JavaScript with modern ES6+ features
- Mobile-first media queries (though currently desktop-first)
- Non-breaking spaces (\u00A0) for text spacing in animations
- Console logging for debugging scroll functionality

## Section Structure

The site follows a standard single-page layout:
1. Hero - Logo and festival title
2. Mission - Festival description and goals  
3. Competition - Submission details with countdown
4. Sponsors - Partner organizations
5. Screenings - Film schedule with auto-scrolling cards
6. Interactive sections - Workshops, panels, experiences

When adding new sections, follow the existing pattern of section IDs matching navigation hrefs and include appropriate section titles for the scrolling animation system.