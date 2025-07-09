# Design System Documentation

This design system provides a consistent, maintainable approach to styling the cyanez.cl website with a brutalist aesthetic.

## Overview

The design system is built around CSS custom properties (CSS variables) and utility classes, making it easy to maintain consistency and modify themes across the entire application.

## Key Features

- **Brutalist Design**: Bold borders, sharp shadows, and high contrast
- **CSS Custom Properties**: Easy theming and customization
- **Utility Classes**: Consistent spacing, typography, and component styling
- **Responsive Design**: Mobile-first approach with breakpoints
- **Multiple Themes**: Support for different color schemes

## Core Principles

1. **Consistency**: All components share the same visual language
2. **Maintainability**: CSS custom properties make global changes easy
3. **Accessibility**: High contrast and clear typography
4. **Performance**: Minimal CSS with efficient selectors

## CSS Custom Properties

### Colors
```css
--color-primary: #000000;
--color-bg-main: #fffbeb;
--color-bg-card: #ffffff;
--color-bg-accent: #fef3c7;
--color-bg-hover: #fef3c7;
```

### Borders
```css
--border-width: 4px;
--border-width-thin: 2px;
--border-color: var(--color-primary);
```

### Shadows
```css
--shadow-brutalist: 8px 8px 0 0 rgba(0, 0, 0, 1);
--shadow-small: 4px 4px 0 0 rgba(0, 0, 0, 1);
```

### Spacing
```css
--space-xs: 0.5rem;
--space-sm: 1rem;
--space-md: 1.5rem;
--space-lg: 2rem;
--space-xl: 3rem;
```

## Utility Classes

### Layout
- `.page-container`: Main page wrapper with padding and font family
- `.content-wrapper`: Central content area with max-width and brutalist styling
- `.section`: Standard section spacing
- `.section-content`: Main content area padding

### Typography
- `.heading-primary`: Main page title (h1)
- `.heading-secondary`: Section headings (h2) with bottom border
- `.heading-tertiary`: Subsection headings (h3)
- `.text-large`: Large body text
- `.text-base`: Standard body text
- `.subtitle`: Subtitle text for headers

### Components
- `.card`: Content card with border and background
- `.card-grid`: Container for card layouts
- `.btn`: Button/link styling with hover effects
- `.btn-group`: Flexbox container for button groups
- `.site-header`: Header section with bottom border
- `.site-footer`: Footer section with top border

### Utilities
- `.border-thick`: Thick border (4px)
- `.border-thin`: Thin border (2px)
- `.shadow-brutalist`: Large brutalist shadow
- `.shadow-small`: Small shadow
- `.bg-main`: Main background color
- `.bg-card`: Card background color
- `.bg-accent`: Accent background color
- `.space-y-md`: Vertical spacing between children
- `.space-y-lg`: Large vertical spacing between children

## Usage Examples

### Basic Layout
```tsx
<div className="page-container">
  <div className="content-wrapper">
    <header className="site-header">
      <h1 className="heading-primary">Title</h1>
    </header>
    <main className="section-content">
      <section className="section">
        <h2 className="heading-secondary">Section Title</h2>
        <p className="text-large">Content here</p>
      </section>
    </main>
  </div>
</div>
```

### Cards
```tsx
<div className="card-grid">
  <div className="card">
    <h3 className="heading-tertiary">Card Title</h3>
    <p className="text-base">Card content</p>
  </div>
</div>
```

### Buttons
```tsx
<div className="btn-group">
  <a href="#" className="btn">Button 1</a>
  <a href="#" className="btn">Button 2</a>
</div>
```

## React Components

For a more component-based approach, use the components in `/src/components/ui.tsx`:

```tsx
import { PageContainer, ContentWrapper, Header, Section, Card, Button } from '@/components/ui';

export default function MyPage() {
  return (
    <PageContainer>
      <ContentWrapper>
        <Header title="My Title" subtitle="My Subtitle" />
        <Section title="My Section">
          <Card>
            <Text>Content here</Text>
          </Card>
        </Section>
      </ContentWrapper>
    </PageContainer>
  );
}
```

## Theming

### Available Themes
- `default`: Amber/black brutalist theme
- `dark`: Dark mode with white on black
- `blue`: Blue accent theme
- `green`: Green accent theme

### Applying Themes
```tsx
import { useTheme } from '@/contexts/ThemeContext';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';

// In a component
function MyComponent() {
  const { setTheme } = useTheme();
  
  return (
    <div>
      <button onClick={() => setTheme('dark')}>
        Switch to Dark Theme
      </button>
      {/* Or use the pre-built switcher */}
      <ThemeSwitcher />
    </div>
  );
}
```

### Creating Custom Themes
```tsx
import { Theme } from '@/styles/theme';
import { useTheme } from '@/contexts/ThemeContext';

const myTheme: Theme = {
  colors: {
    primary: '#ff0000',
    bgMain: '#fff0f0',
    bgCard: '#ffffff',
    bgAccent: '#ffe0e0',
    bgHover: '#ffd0d0',
  },
  // ... other properties (copy from defaultTheme)
};

function MyComponent() {
  const { applyTheme } = useTheme();
  
  return (
    <button onClick={() => applyTheme(myTheme)}>
      Apply Custom Theme
    </button>
  );
}
```

## Responsive Design

The design system includes responsive breakpoints:

- Mobile: `max-width: 768px`
  - Reduced padding
  - Thinner borders
  - Smaller font sizes
  - Stacked button layouts

## Theme System Usage

### Setup
The theme system is already configured in your app. Just wrap your app with the ThemeProvider in your layout:

```tsx
import { ThemeProvider } from '@/contexts/ThemeContext';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

### Using Theme Switchers
```tsx
import { ThemeSwitcher, ThemeToggleButton, ThemeButtons } from '@/components/ThemeSwitcher';

// Dropdown selector
<ThemeSwitcher />

// Toggle button that cycles through themes
<ThemeToggleButton />

// Individual theme buttons
<ThemeButtons />
```

### Accessing Theme Data
```tsx
import { useTheme } from '@/contexts/ThemeContext';

function MyComponent() {
  const { currentTheme, themeName, setTheme } = useTheme();
  
  return (
    <div style={{ color: currentTheme.colors.primary }}>
      Current theme: {themeName}
    </div>
  );
}
```

## Best Practices

1. **Use the Theme Context**: Access theme values through useTheme() rather than hardcoding
2. **Leverage Utility Classes**: Use existing classes before creating new ones
3. **Maintain Consistency**: Follow the established patterns for spacing and typography
4. **Test All Themes**: Ensure your components work with all available themes
5. **Persist User Preference**: The theme system automatically saves user preference to localStorage

## Customization

To modify the design system:

1. **Colors**: Update CSS custom properties in `globals.css`
2. **Spacing**: Modify spacing variables for consistent rhythm
3. **Typography**: Adjust font sizes and weights
4. **Components**: Extend existing utility classes or create new ones
5. **Themes**: Create new theme objects in `theme.ts`

## Migration Guide

If migrating from the old inline Tailwind approach:

1. Replace inline classes with utility classes
2. Use CSS custom properties for colors and spacing
3. Leverage the component library for common patterns
4. Test responsive behavior with the new breakpoints

This design system provides a solid foundation for maintaining consistent, accessible, and performant styling across the entire application.