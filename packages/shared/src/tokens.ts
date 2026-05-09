/**
 * Design tokens shared across site (Astro) and app (SvelteKit).
 * HIG-inspired: clean white, generous whitespace, 8pt grid.
 */

export const colors = {
  bg: '#FFFFFF',
  bgSubtle: '#F9FAFB',
  textPrimary: '#111827',
  textSecondary: '#6B7280',
  border: '#E5E7EB',
  // Brand (TBD on final lock)
  brand: '#2563EB',
  accent: '#10B981',
} as const;

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
  '3xl': '64px',
  '4xl': '96px',
} as const;

export const typography = {
  fontFamily: {
    sans: 'Inter, system-ui, -apple-system, sans-serif',
    mono: 'JetBrains Mono, ui-monospace, monospace',
  },
  fontSize: {
    caption: '12px',
    body: '14px',
    bodyLg: '16px',
    h3: '20px',
    h2: '24px',
    h1: '32px',
  },
  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.6,
  },
} as const;

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
} as const;
