---
name: Axkan Gourmet
colors:
  surface: '#fff8f7'
  surface-dim: '#f1d3d6'
  surface-bright: '#fff8f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff0f1'
  surface-container: '#ffe9ea'
  surface-container-high: '#ffe1e4'
  surface-container-highest: '#fadbde'
  on-surface: '#28171a'
  on-surface-variant: '#5b3f43'
  inverse-surface: '#3e2b2e'
  inverse-on-surface: '#ffecee'
  outline: '#8f6f73'
  outline-variant: '#e4bdc2'
  surface-tint: '#bc004b'
  primary: '#b80049'
  on-primary: '#ffffff'
  primary-container: '#e2165f'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb2be'
  secondary: '#006e1c'
  on-secondary: '#ffffff'
  secondary-container: '#91f78e'
  on-secondary-container: '#00731e'
  tertiary: '#006a34'
  on-tertiary: '#ffffff'
  tertiary-container: '#008644'
  on-tertiary-container: '#f6fff3'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd9de'
  primary-fixed-dim: '#ffb2be'
  on-primary-fixed: '#400014'
  on-primary-fixed-variant: '#900038'
  secondary-fixed: '#94f990'
  secondary-fixed-dim: '#78dc77'
  on-secondary-fixed: '#002204'
  on-secondary-fixed-variant: '#005313'
  tertiary-fixed: '#89faa8'
  tertiary-fixed-dim: '#6ddd8e'
  on-tertiary-fixed: '#00210c'
  on-tertiary-fixed-variant: '#005227'
  background: '#fff8f7'
  on-background: '#28171a'
  surface-variant: '#fadbde'
typography:
  display-lg:
    fontFamily: Bebas Neue
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: 0.02em
  headline-md:
    fontFamily: Bebas Neue
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '500'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.1em
  accent-script:
    fontFamily: Bricolage Grotesque
    fontSize: 24px
    fontWeight: '400'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-margin: 1.5rem
  gutter: 1rem
  section-gap: 2.5rem
  card-padding: 1rem
  chip-gap: 0.75rem
---

## Brand & Style

This design system embodies the "Artisan Mexican" aesthetic: a fusion of contemporary gourmet precision and joyful, traditional energy. The personality is expressive and hospitable, targeting a modern audience that values authenticity and high-quality "fast-casual" experiences.

The visual style is **High-Contrast & Expressive**, utilizing clean, structured layouts to ground the vibrant energy of the color palette. Watercolor splashes and organic brushstrokes serve as essential brand identifiers, acting as textural dividers and decorative accents that evoke a "hand-crafted" feel. The overall response should be one of freshness, appetite-appeal, and cultural pride.

## Colors

The foundation of the palette is a warm **Ivory (#FCFBF7)** background, which provides a sophisticated, "paper-like" canvas that feels more premium than pure white. Deep **Black (#1A1A1A)** is reserved for primary typography to ensure maximum legibility and a gourmet editorial feel.

The accent palette is a "Dreamcatcher Spectrum," derived directly from the brand logo. These colors should be used purposefully to categorize menu sections:
- **Magenta/Coral:** Spicy or bold items (Burgers, Hot Dogs).
- **Fresh Green:** Fresh/Vegetarian options and "Ingredients" callouts.
- **Turquoise/Purple:** Beverages, Cocktails, and "Shots" sections.
- **Sun Yellow/Orange:** Sides, "Papas," and Snacks.

Each accent color should be paired with its corresponding watercolor texture to maintain visual consistency across the interface.

## Typography

The typography system uses a triple-font hierarchy to balance impact with readability:

1.  **Headlines (Bebas Neue):** A bold, condensed display font that carries the energetic "fast-food" spirit. Used for section headers and primary calls to action. It should always be uppercase.
2.  **Body (Plus Jakarta Sans):** A modern, geometric sans-serif that ensures high legibility on mobile devices. Its soft curves complement the vibrant branding while maintaining a clean, gourmet feel.
3.  **Accents (Bricolage Grotesque):** Used for playful, hand-drawn-style annotations and the "Fresco, rico y hecho para ti" brand promise. This adds the "artisan" touch to the digital experience.

For mobile-specific views, reduce `display-lg` to **36px** and ensure line heights are generous enough to prevent overlapping when using watercolor background elements.

## Layout & Spacing

This design system uses a **Fluid Grid** model with a "Safe Margin" approach to accommodate decorative watercolor elements that may bleed off the edges of the screen.

- **Mobile:** 4-column grid with 24px (1.5rem) side margins.
- **Desktop:** 12-column grid with a maximum content width of 1200px.
- **Rhythm:** An 8px base unit drives all spacing. Horizontal scrolling components (like Category Chips) should use a "negative margin bleed" to allow the first and last items to touch the screen edge while the content stays aligned to the grid.

Section transitions should be marked by horizontal watercolor brushstrokes rather than hard lines, creating a softer, more organic flow between different menu categories.

## Elevation & Depth

Hierarchy is achieved through **Tonal Layers** and **Shadowless Depth**. To maintain the clean, contemporary gourmet look, avoid heavy drop shadows.

- **Level 1 (Base):** Ivory background.
- **Level 2 (Cards/Chips):** White (#FFFFFF) surfaces with a very subtle, high-contrast outline (0.5px #1A1A1A at 10% opacity).
- **Level 3 (Price Tags/Action Items):** Solid blocks of accent colors. These "pop" from the page using high color contrast rather than physical depth.
- **Overlays:** The WhatsApp panel uses a backdrop blur (12px) to dim the background, focusing attention on the order flow while maintaining the "joyful" light environment.

## Shapes

The shape language is **Rounded**, reflecting the organic nature of food and the curves of the brand's dreamcatcher logo. 

- **Primary Radius:** 0.5rem (8px) for cards and input fields.
- **Large Radius:** 1rem (16px) for the bottom sheet "WhatsApp Panel."
- **Pill Shapes:** Reserved exclusively for category chips and price tags to make them feel "tactile" and easily tappable.
- **Organic Elements:** Watercolor masks should be applied to the corners of large imagery to prevent them from looking too clinical or sharp.

## Components

### Price Tags
High-contrast pill shapes. Use a deep black background with white text or a bright accent color (e.g., Sun Yellow) with black text. Use `Bebas Neue` for the currency value to make it impactful.

### Category Chips
Horizontal scrolling list. Each chip contains a custom line-art icon (e.g., a chili for "Sabores", a taco for "Antojitos"). Active state: The chip fills with the section's specific accent color.

### Food Cards
Large, high-resolution imagery is mandatory. The image should occupy the top 60% of the card. Use a subtle gradient overlay at the bottom of the image if text needs to be placed over it. The card footer contains the item name in `Bebas Neue` and a concise description in `Plus Jakarta Sans`.

### WhatsApp Order Panel
A slide-out panel (bottom-up for mobile, right-to-left for desktop). It features a prominent "Order Now" button in **WhatsApp Green (#25D366)** and uses a clean, list-based summary of the current selection.

### Watercolor Dividers
Subtle brushstroke PNGs used to separate major sections (e.g., Alitas vs. Drinks). These should be tinted to match the accent color of the section they precede.