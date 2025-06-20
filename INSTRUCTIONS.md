# BAIFF Development Instructions

This document provides comprehensive guidelines for developers and coding assistants working on the BAIFF (Bucharest AI Film Festival) website.

## Tech Stack

### Core Technologies
- **HTML5**: Semantic markup with modern web standards
- **CSS3**: Modern CSS with custom properties, flexbox, grid, and animations
- **Vanilla JavaScript (ES6+)**: No frameworks, pure JavaScript for interactions
- **Custom Fonts**: Alte Haas Grotesk (headings) and Branding Semilight (body text)

### Build Process
- **Static Website**: No build tools or compilation required
- **Development**: Open `index.html` directly in browser
- **Assets**: Fonts stored in `/assets/fonts/` directory

### Browser Support
- Modern browsers with CSS custom properties support
- ES6+ JavaScript features
- CSS Grid and Flexbox support

## Project Structure

```
/
├── index.html              # Single-page application
├── css/
│   ├── style.css          # Main stylesheet (organized with BEM)
│   └── responsive.css     # Responsive design overrides
├── js/
│   └── main.js           # All JavaScript functionality
├── assets/
│   └── fonts/            # Custom web fonts
├── CLAUDE.md             # Claude Code guidance (gitignored)
├── TODO.md              # Development tasks and optimizations
└── INSTRUCTIONS.md      # This file
```

## CSS Architecture & Naming Conventions

### BEM Methodology
**Strictly follow Block Element Modifier (BEM) naming convention:**

```css
/* Block (independent component) */
.block { }

/* Element (child of block) */
.block__element { }

/* Modifier (variant of block or element) */
.block--modifier { }
.block__element--modifier { }
```

### Naming Examples
```css
/* ✅ CORRECT */
.btn { }                    /* Base button block */
.btn__title { }             /* Button title element */
.btn__icon { }              /* Button icon element */
.btn--primary { }           /* Primary button modifier */
.btn--secondary { }         /* Secondary button modifier */

.card { }                   /* Base card block */
.card__header { }           /* Card header element */
.card__content { }          /* Card content element */
.card--film { }             /* Film card modifier */
.card--panel { }            /* Panel card modifier */

.section__title { }         /* Section title element */
.section__subtitle { }      /* Section subtitle element */
.section__headline { }      /* Section headline element */
.section__description { }   /* Section description element */

/* ❌ INCORRECT */
.sectionTitle { }           /* camelCase not allowed */
.section-title { }          /* Use BEM instead */
.interactHeadline { }       /* Component-specific, not reusable */
.big-red-button { }         /* Too specific, not modular */
```

### CSS Organization
The stylesheet is organized in the following order:

1. **Font Declarations** - `@font-face` rules
2. **CSS Custom Properties** - `:root` variables
3. **Reset & Base Styles** - Universal and body styles
4. **Layout Components** - `.container`, grids, etc.
5. **Typography** - Text-related classes
6. **Animations** - `@keyframes` and animation classes
7. **Navigation** - Menu and navigation components
8. **Reusable Components** - Buttons, cards, etc.
9. **Section Styles** - Page-specific sections
10. **Utility Classes** - Helper classes
11. **Responsive Design** - Media queries

### CSS Custom Properties (Variables)
**Always use CSS variables instead of hardcoded values:**

```css
/* ✅ CORRECT */
.btn {
    background-color: var(--color-primary);
    padding: var(--space-md);
    font-family: var(--font-heading);
    font-size: var(--font-size-body);
}

/* ❌ INCORRECT */
.btn {
    background-color: #FFD700;
    padding: 16px;
    font-family: 'Alte Haas Grotesk', sans-serif;
    font-size: 1rem;
}
```

### Available CSS Variables
```css
/* Colors */
--color-primary: #FFD700;        /* Gold accent */
--color-bg: #000000;             /* Black background */
--color-text: #FFFFFF;           /* White text */
--color-text-muted: #E0E0E0;     /* Muted text */
--color-text-dim: #A0A0A0;       /* Dim text */

/* Fonts */
--font-heading: 'Alte Haas Grotesk', sans-serif;
--font-body: 'Branding Semilight', sans-serif;

/* Font Sizes */
--font-size-hero: 6rem;
--font-size-h1: 2.8rem;
--font-size-h2: 2.2rem;
--font-size-h3: 1.8rem;
--font-size-h4: 1.4rem;
--font-size-body: 1rem;
--font-size-small: 0.9rem;
--font-size-tiny: 0.8rem;

/* Spacing Scale */
--space-xs: 0.25rem;   /* 4px */
--space-sm: 0.5rem;    /* 8px */
--space-md: 1rem;      /* 16px */
--space-lg: 1.5rem;    /* 24px */
--space-xl: 2rem;      /* 32px */
--space-2xl: 3rem;     /* 48px */
--space-3xl: 4rem;     /* 64px */

/* Container Sizes */
--container-xs: 400px;
--container-sm: 600px;
--container-md: 800px;
--container-lg: 1000px;
--container-xl: 1200px;

/* Transitions */
--transition-fast: 0.2s ease;
--transition-normal: 0.3s ease;
--transition-slow: 0.5s ease;
```

## HTML Guidelines

### Semantic Structure
```html
<!-- ✅ CORRECT -->
<section class="hero-section">
    <div class="container">
        <h1 class="hero__title">Title</h1>
        <p class="hero__description">Description</p>
        <a href="#" class="btn btn--primary">
            <span class="btn__title">Click me</span>
        </a>
    </div>
</section>

<!-- ❌ INCORRECT -->
<div class="hero">
    <div class="heroTitle">Title</div>
    <div class="heroText">Description</div>
    <div class="heroButton">Click me</div>
</div>
```

### Component Patterns
**Buttons:**
```html
<!-- Primary button -->
<a href="#" class="btn btn--primary">
    <span class="btn__title">Main Action</span>
</a>

<!-- Secondary button with subtitle -->
<a href="#" class="btn btn--secondary">
    <span class="btn__title">Secondary Action</span>
    <span class="btn__subtitle">Additional info</span>
</a>
```

**Cards:**
```html
<!-- Film card -->
<div class="card card--film color-bg-1">
    <div class="film-info-overlay">
        <h4 class="film-info-overlay__title">Film Title</h4>
        <p class="film-info-overlay__time">19:30</p>
        <p class="film-info-overlay__crew">Dir. Name | Prod. Name</p>
        <a href="#" class="film-info-overlay__more">MORE ></a>
    </div>
</div>

<!-- Panel card -->
<div class="card card--panel color-bg-2"></div>
```

**Sections:**
```html
<section class="section-name">
    <h2 class="section__title">Section Title</h2>
    <div class="container">
        <p class="section__description">Description text</p>
        <div class="section__items">
            <div class="section__item">
                <h4>Item Title</h4>
                <p>Item content</p>
            </div>
        </div>
    </div>
</section>
```

## JavaScript Guidelines

### Code Organization
- Use modern ES6+ features (const, let, arrow functions, destructuring)
- Group related functionality together
- Use meaningful variable and function names
- Add comments for complex logic

### Patterns
```javascript
// ✅ CORRECT
const initializeScrollAnimations = () => {
    const containers = document.querySelectorAll('.screenings-scroll-container');
    containers.forEach((container, index) => {
        setupAutoScroll(container, index);
    });
};

// ❌ INCORRECT
function init() {
    var c = document.querySelectorAll('.screenings-scroll-container');
    for (var i = 0; i < c.length; i++) {
        // Complex logic without comments
    }
}
```

### Event Handling
```javascript
// ✅ CORRECT
const handleNavigation = () => {
    const hamburger = document.querySelector('.hamburger-menu-button');
    const closeBtn = document.querySelector('.close-nav-button');
    
    hamburger?.addEventListener('click', openNavigation);
    closeBtn?.addEventListener('click', closeNavigation);
};

// ❌ INCORRECT
document.querySelector('.hamburger-menu-button').onclick = function() {
    // Direct event assignment
};
```

## Typography System

### Font Usage
- **Headlines/Titles**: Use `--font-heading` (Alte Haas Grotesk Bold)
- **Body Text**: Use `--font-body` (Branding Semilight)
- **Monospace**: Use `--font-mono` (Courier New) for code-like text

### Font Size Hierarchy
```css
.hero__title { font-size: var(--font-size-hero); }      /* 6rem */
.section__headline { font-size: var(--font-size-h1); }  /* 2.8rem */
.section__title { font-size: var(--font-size-h2); }     /* 2.2rem */
.section__subtitle { font-size: var(--font-size-h3); }  /* 1.8rem */
.section__item h4 { font-size: var(--font-size-h4); }   /* 1.4rem */
.section__description { font-size: var(--font-size-body); } /* 1rem */
```

## Color System

### Color Usage
- **Primary Color**: `var(--color-primary)` - Gold accent (#FFD700)
- **Background**: `var(--color-bg)` - Black (#000000)
- **Text Hierarchy**:
  - Primary: `var(--color-text)` - White (#FFFFFF)
  - Secondary: `var(--color-text-muted)` - Light gray (#E0E0E0)
  - Tertiary: `var(--color-text-dim)` - Dim gray (#A0A0A0)

### Background Variants
```css
.color-bg-1 { background-color: #333333; }  /* Dark gray 1 */
.color-bg-2 { background-color: #444444; }  /* Dark gray 2 */
.color-bg-3 { background-color: #555555; }  /* Dark gray 3 */
.color-bg-4 { background-color: var(--color-bg-card); } /* #222222 */
```

## Mobile-First Design Strategy

### Current Development Phase: Mobile-Only
**IMPORTANT**: We are currently designing exclusively for mobile devices. Desktop/widescreen optimization will come in a separate phase later.

### Target Devices & Screen Sizes
- **Primary targets**: iPhone and Android smartphones
- **Screen width range**: 360px - 414px (covers ~90% of mobile devices)
- **Key sizes**:
  - iPhone: 375px (standard), 390px (newer models), 414px (Plus)
  - Android: 360px, 375px, 393px, 412px (most common)

### Mobile Design Principles

#### 1. Maximize Screen Width Usage
Current issue: Too much horizontal space is wasted due to excessive margins and padding.

```css
/* ❌ CURRENT PROBLEM */
.container {
    width: 90%;          /* Only using 90% of precious mobile screen */
    padding: 20px;       /* Additional 40px lost to side padding */
}
.mission-section {
    padding: 60px 20px;  /* More lost width */
}
/* Result: ~70px+ of width lost on a 375px screen */

/* ✅ MOBILE-OPTIMIZED APPROACH */
.container {
    width: 95-100%;      /* Use nearly full width */
    padding: 12px;       /* Minimal side padding */
}
.mission-section {
    padding: 40px 8px;   /* Reduce horizontal padding significantly */
}
```

#### 2. Mobile-Specific Spacing Scale
```css
/* Mobile-optimized spacing */
--space-mobile-xs: 4px;    /* Tight spacing */
--space-mobile-sm: 8px;    /* Small gaps */
--space-mobile-md: 12px;   /* Medium spacing */
--space-mobile-lg: 16px;   /* Larger gaps */
--space-mobile-xl: 24px;   /* Section spacing */
```

#### 3. Touch-Friendly Interactions
- **Minimum touch target**: 44px × 44px (Apple/Google guidelines)
- **Button padding**: Generous internal padding for easy tapping
- **Spacing between tappable elements**: Minimum 8px gap

### Font Sizing for Mobile
Current font sizes appear appropriate or even small for mobile:
- Keep current sizes or consider slight increases for readability
- Hero logo at 6rem may be suitable for mobile impact
- Body text at 1rem (16px) is good for mobile readability

### Responsive Design (Future Phase)
```css
/* Current mobile-only base styles */
.section__items {
    display: flex;
    flex-direction: column;
    gap: var(--space-mobile-md);
}

/* Desktop phase (to be implemented later) */
@media (min-width: 992px) {
    .section__items {
        flex-direction: row;
        gap: var(--space-xl);
    }
}
```

### Mobile Layout Priorities
1. **Content width optimization** - Use 95-100% of screen width
2. **Vertical rhythm** - Efficient use of vertical space
3. **Touch accessibility** - All interactive elements easily tappable
4. **Performance** - Smooth animations on mobile devices

## Animation Guidelines

### Performance-First
- Use `transform` and `opacity` for animations
- Add `will-change` for complex animations
- Support `prefers-reduced-motion`

```css
/* ✅ CORRECT */
.scrolling-text-wrapper {
    animation: scroll-right-to-left 25s linear infinite;
    will-change: transform;
}

@keyframes scroll-right-to-left {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-50%); }
}

@media (prefers-reduced-motion: reduce) {
    .scrolling-text-wrapper {
        animation: none;
    }
}
```

## File Organization

### Adding New Components
1. Add HTML using BEM classes
2. Add CSS in appropriate section of `style.css`
3. Add JavaScript functionality to `main.js`
4. Test across different screen sizes
5. Update this documentation if needed

### Modifying Existing Components
1. Never change existing BEM class names without updating all references
2. Prefer adding new modifier classes over changing base styles
3. Use CSS variables for any new colors, sizes, or spacing
4. Test that changes don't break existing functionality

## Code Quality Standards

### CSS
- Use 4-space indentation
- One property per line
- Alphabetize properties within rules
- Use meaningful class names
- Group related selectors
- Add comments for complex styles

### JavaScript
- Use 4-space indentation
- Use `const` by default, `let` when reassignment needed
- Use meaningful variable names
- Add comments for business logic
- Handle edge cases (null checks, empty arrays)

### HTML
- Use semantic elements (`<section>`, `<article>`, `<nav>`, etc.)
- Include proper ARIA labels for accessibility
- Use meaningful alt text for images
- Maintain proper heading hierarchy (h1 → h2 → h3)

## Testing Checklist

Before committing changes:
- [ ] Website loads correctly in browser
- [ ] All animations work smoothly on mobile devices
- [ ] Navigation functions properly (especially touch interactions)
- [ ] **Mobile optimization**: Test on 360px, 375px, and 414px screen widths
- [ ] **Content width**: Verify efficient use of screen real estate
- [ ] **Touch targets**: All buttons/links are easily tappable (44px+ touch area)
- [ ] Custom fonts load correctly
- [ ] No console errors
- [ ] All interactive elements respond to touch input
- [ ] Accessibility features work (screen readers, high contrast)
- [ ] **Performance**: Smooth scrolling and animations on mobile hardware

## Common Pitfalls to Avoid

1. **Don't mix naming conventions** - Stick to BEM consistently
2. **Don't use hardcoded values** - Always use CSS variables
3. **Don't break existing animations** - Test scroll effects and timers
4. **Don't waste mobile screen width** - Minimize margins/padding, use 95-100% width
5. **Don't create tiny touch targets** - Minimum 44px × 44px for all interactive elements
6. **Don't optimize for desktop yet** - Focus exclusively on mobile 360-414px range
7. **Don't use inline styles** - Keep all styles in CSS files
8. **Don't modify `responsive.css`** - Add responsive rules to main stylesheet
9. **Don't add new dependencies** - Keep it vanilla HTML/CSS/JS

## Development Workflow

1. **Read TODO.md** for current priorities and tasks
2. **Follow BEM naming** for all new classes
3. **Use CSS variables** for all values
4. **Test thoroughly** across devices and browsers
5. **Update documentation** when adding new patterns
6. **Commit frequently** with descriptive messages

---

**Remember**: This is a design-focused website with custom animations and interactions. Prioritize visual consistency, smooth performance, and maintainable code structure over complex features.