# BAIFF Website Optimization TODO

This document outlines optimization opportunities and improvements for the BAIFF website, organized by priority and category.

## 🔥 HIGH PRIORITY

### CSS Organization & Structure

- [ ] **Implement CSS Custom Properties (Variables)**
  - Create root variable system for colors (`--color-primary`, `--color-bg`, `--color-text`)
  - Add font variables:
    - `--font-heading: 'Alte Haas Grotesk', sans-serif` (for headlines, section titles)
    - `--font-body: 'Branding Semilight', sans-serif` (for body text)
  - Define spacing scale variables (`--space-xs`, `--space-sm`, `--space-md`, etc.)
  - Create breakpoint variables (`--bp-mobile`, `--bp-tablet`, `--bp-desktop`)

- [ ] **Reorganize CSS File Structure**
  - Split `style.css` into logical sections with clear comments
  - Remove duplicate `.film-info-overlay` definitions (lines 620-661 vs 724-758)
  - Group related styles together instead of scattering them
  - Add section headers: Reset, Variables, Typography, Layout, Components, Utilities

- [ ] **Establish Consistent Naming Convention**
  - Standardize on BEM methodology for class names
  - ✅ COMPLETED: Standardized to BEM naming (`.section__title`, `.section__headline`, etc.)
  - Create reusable component classes (`.btn`, `.card`, `.overlay`)
  - Document naming conventions in comments

### Design Refinement

- [ ] **Font Size & Hierarchy Optimization**
  - Audit and standardize section title sizes (currently inconsistent)
  - Fix hero logo size for mobile responsiveness (6rem might be too large)
  - Standardize body text sizes (currently varies: 0.9rem, 1rem, 1.1rem)
  - Create consistent heading scale (h1-h6 equivalent classes)

- [ ] **Spacing & Layout Improvements**
  - Standardize container max-widths (currently: 700px, 800px, 900px, 1000px, 1200px)
  - Fix inconsistent section padding (varies: 60px, 40px, 30px)
  - Improve vertical rhythm between elements
  - Create consistent gap system for flex/grid layouts

- [ ] **Color System Enhancement**
  - Replace hardcoded colors with semantic color variables
  - Audit and improve contrast ratios for accessibility
  - Create consistent color palette for different UI states
  - Document color usage guidelines

### Responsive Design

- [ ] **Implement Mobile-First Approach**
  - Rewrite CSS with mobile-first methodology
  - Add comprehensive breakpoint system
  - Fix mobile typography scaling issues
  - Test and optimize for small screens

- [ ] **Enhanced Responsive Grid System**
  - Improve panel grid responsiveness (currently basic 2→4 columns)
  - Add responsive containers for different screen sizes
  - Fix horizontal scrolling issues on mobile devices
  - Optimize film card sizing across breakpoints

## 📋 MEDIUM PRIORITY

### CSS Architecture

- [x] **Create Typography Hierarchy System** ✅ COMPLETED
  - ✅ Define consistent heading classes (`.h1`, `.h2`, `.h3`, etc.)
  - ✅ Standardize body text classes (`.text-lg`, `.text-sm`, etc.)
  - ✅ Create text utility classes for common styling (color, alignment)
  - ✅ Maintain backward compatibility with existing section classes

- [x] **Implement Spacing System** ✅ COMPLETED
  - ✅ Create utility classes for margins/padding (`.mb-1`, `.p-4`, etc.)
  - ✅ Use mobile-optimized spacing scale with CSS variables
  - ✅ Add gap utilities for flexbox/grid layouts
  - ✅ Implement responsive spacing utilities using mobile-first approach

- [ ] **Component Standardization**
  - ✅ COMPLETED: Standardized to BEM button system (`.btn`, `.btn--primary`, `.btn__title`, etc.)
  - Standardize placeholder/card components across sections
  - Unify overlay patterns (film overlays, image overlays)
  - Create consistent form styling

### Performance & Technical

- [x] **CSS Performance Optimization** ✅ PARTIALLY COMPLETED
  - ✅ Consolidated duplicate selectors (film-info-overlay)
  - ✅ Optimized animation performance with transform/opacity
  - ✅ Reduced CSS specificity conflicts through BEM methodology
  - [ ] Add CSS minification for production (future deployment task)

- [x] **Animation Improvements** ✅ COMPLETED
  - ✅ Added CSS `will-change` property for better animation performance
  - ✅ Optimized keyframe animations for smoother playback
  - ✅ Added `prefers-reduced-motion` support for accessibility
  - ✅ All scroll animations use transform-only for better performance

### Touch & Mobile UX

- [ ] **Mobile Navigation Improvements**
  - Improve touch targets for mobile navigation (min 44px)
  - Add mobile-specific spacing adjustments
  - Optimize hamburger menu interaction
  - Test navigation on various mobile devices

- [ ] **Content Optimization for Mobile**
  - Optimize text readability on small screens
  - Improve mobile image/placeholder sizing
  - Add mobile-specific content layout adjustments
  - Test horizontal scrolling sections on mobile

## 📝 LOW PRIORITY

### Code Organization

- [ ] **CSS File Structure**
  - Split CSS into multiple files (base.css, components.css, utilities.css, responsive.css)
  - Implement CSS methodology documentation
  - Add comprehensive CSS comments and documentation
  - Create style guide documentation

### JavaScript Enhancements

- [ ] **Code Modularization**
  - Split `main.js` into smaller, focused modules
  - Create reusable functions for common operations
  - Implement better error handling and validation
  - Add configuration management system

- [ ] **Configuration Management**
  - Move hardcoded values to config object (countdown date, scroll intervals)
  - Make animations and timings configurable
  - Add responsive breakpoint management in JS
  - Create centralized settings system

### HTML & Accessibility

- [ ] **Semantic HTML Improvements**
  - Add proper heading hierarchy (h1→h2→h3 progression)
  - Improve landmark usage (main, aside, section elements)
  - Add skip navigation links for keyboard users
  - Review and improve HTML structure

- [ ] **Accessibility Enhancements**
  - Add proper ARIA labels and roles throughout
  - Improve keyboard navigation support
  - Add screen reader support for animations
  - Test with accessibility tools and screen readers

- [ ] **Content Structure**
  - Optimize image placeholder structure for better semantics
  - Add proper alt text system for images
  - Improve form accessibility and validation
  - Add focus management for interactive elements

## 🎯 IMPLEMENTATION STRATEGY

### Phase 1: Foundation (Week 1)
1. Implement CSS Custom Properties
2. Reorganize CSS file structure
3. Remove duplicate code

### Phase 2: Design System (Week 2)
1. Create typography hierarchy
2. Implement spacing system
3. Standardize color system

### Phase 3: Responsive Design (Week 3)
1. Implement mobile-first approach
2. Enhance responsive grid system
3. Mobile UX improvements

### Phase 4: Polish & Performance (Week 4)
1. Performance optimizations
2. Animation improvements
3. Accessibility enhancements

## 📊 SUCCESS METRICS

- [ ] CSS file size reduction by consolidating duplicate code
- [ ] Improved mobile performance scores
- [ ] Better accessibility audit scores
- [ ] Consistent design system implementation
- [ ] Reduced maintenance complexity

---

**Note**: This TODO list should be updated as tasks are completed and new optimization opportunities are discovered during implementation.