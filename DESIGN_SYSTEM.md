# Digital University Kerala (DUK) Design System

This document outlines the official design system for the DUK ERP application, based on the official brand guidelines. The application implements this system using Tailwind CSS.

## 1. Brand Colors

The entire ERP must follow the official Digital University Kerala visual identity, built around four core brand colors.

*   **Primary:** `#0366B0` - The dominant brand color used for primary buttons, active navigation, links, key actions, selected states, charts, and highlights.
*   **Secondary:** `#00B394` - Used for secondary actions, success states, informational elements, dashboard widgets, progress indicators, and supporting UI elements.
*   **Tertiary:** `#A8CF45` - Used sparingly as an accent for notifications, status badges, highlights, achievement indicators, visual emphasis, illustrations, and decorative elements.
*   **Primary Text / Neutral:** `#606062` - Used for primary text, secondary text, icons, borders, dividers, and neutral interface elements.

## 2. Tailwind Color Palette

The `tailwind.config.js` and `src/index.css` are configured with a complete color scale (50-900) for each brand color.

### Primary Scale (#0366B0)
*   `primary-50` to `primary-900`
*   `primary-500` is the base brand color `#0366B0`.

### Secondary Scale (#00B394)
*   `secondary-50` to `secondary-900`
*   `secondary-500` is the base brand color `#00B394`.

### Tertiary Scale (#A8CF45)
*   `tertiary-50` to `tertiary-900`
*   `tertiary-500` is the base brand color `#A8CF45`.

### Neutral Scale (#606062)
*   `neutral-50` to `neutral-900`
*   `neutral-500` is the base brand color `#606062`.

## 3. Semantic Color Tokens

We use semantic tokens to ensure consistency across light and dark modes. Use these tokens for structural elements rather than hardcoding color scales.

*   **Background:** `bg-background` (Page background)
*   **Surface/Card:** `bg-surface`, `bg-card` (Containers, panels)
*   **Border:** `border-border` (Subtle structural borders)
*   **Divider:** `border-divider`, `bg-divider` (Separators between list items)
*   **Muted:** `text-muted`, `bg-muted` (Less important text or disabled-looking elements)
*   **Hover:** `hover:bg-hover` (Interactive state backgrounds)
*   **Active:** `active:bg-active` (Pressed state backgrounds)
*   **Focus:** `focus:ring-focus` (Focus rings for accessibility)
*   **Disabled:** `bg-disabled` (Non-interactive state)
*   **Status:** `text-success`, `text-warning`, `text-error`, `text-information` (For alerts and badges)

## 4. The 8-Pixel Grid Rule

All spacing, padding, margins, sizing, and typography line heights must adhere strictly to an **8-pixel base grid**. This ensures absolute consistency and a professional, rhythmic layout.

When using Tailwind spacing utilities, remember that `1` unit = `0.25rem` = `4px`.
Therefore, **always use even numbers** for spacing utilities to align to the 8px grid.

*   **8px:** `p-2`, `m-2`, `gap-2`
*   **16px:** `p-4`, `m-4`, `gap-4`
*   **24px:** `p-6`, `m-6`, `gap-6`
*   **32px:** `p-8`, `m-8`, `gap-8`
*   **40px:** `p-10`, `m-10`, `gap-10`
*   **48px:** `p-12`, `m-12`, `gap-12`

*Avoid* using odd numbers like `p-3` (12px), `p-5` (20px), unless absolutely necessary for micro-adjustments within complex components (like a badge or a very tight icon grouping), but the outer container must still snap to the 8px grid.

## 5. Visual Theme & Personality

The overall UI should communicate:
*   Modern University
*   Digital Transformation
*   Innovation
*   Trust
*   Professionalism
*   Simplicity
*   Accessibility
*   Premium Enterprise Software

The aesthetic is similar to modern enterprise platforms (Microsoft, Atlassian, Notion) but distinctly recognizable as DUK.

## 6. Typography

*   **Font Family:** Inter (Sans-serif)
*   **Hierarchy:** Maintain clear distinct headings and body text. Use standard Tailwind text sizing (`text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`), ensuring line heights also roughly align with the 8px grid (Tailwind handles this well by default with classes like `leading-loose`, `leading-8`, etc).
