---
name: Axkan Gourmet Narrative
colors:
  surface: '#fbf9f4'
  surface-dim: '#dbdad5'
  surface-bright: '#fbf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ee'
  surface-container: '#f0eee9'
  surface-container-high: '#eae8e3'
  surface-container-highest: '#e4e2dd'
  on-surface: '#1b1c19'
  on-surface-variant: '#5c403b'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f1ec'
  outline: '#906f6a'
  outline-variant: '#e5beb7'
  surface-tint: '#bb190e'
  primary: '#9f0100'
  on-primary: '#ffffff'
  primary-container: '#c42114'
  on-primary-container: '#ffdad4'
  inverse-primary: '#ffb4a8'
  secondary: '#3b6934'
  on-secondary: '#ffffff'
  secondary-container: '#b9eeab'
  on-secondary-container: '#3f6d38'
  tertiary: '#6c4400'
  on-tertiary: '#ffffff'
  tertiary-container: '#8c5a00'
  on-tertiary-container: '#ffddb6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad4'
  primary-fixed-dim: '#ffb4a8'
  on-primary-fixed: '#410000'
  on-primary-fixed-variant: '#930100'
  secondary-fixed: '#bcf0ae'
  secondary-fixed-dim: '#a1d494'
  on-secondary-fixed: '#002201'
  on-secondary-fixed-variant: '#23501e'
  tertiary-fixed: '#ffddb5'
  tertiary-fixed-dim: '#ffb958'
  on-tertiary-fixed: '#2a1800'
  on-tertiary-fixed-variant: '#643f00'
  background: '#fbf9f4'
  on-background: '#1b1c19'
  surface-variant: '#e4e2dd'
typography:
  display-lg:
    fontFamily: Epilogue
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Epilogue
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 42px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Epilogue
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Epilogue
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  max-width: 1280px
---

## Brand & Style

The design system for Axkan Gourmet evokes the sensory richness of artisanal culinary craft. The brand personality is grounded, authentic, and vibrant, targeting a discerning audience that values organic quality and traditional roots. 

The aesthetic is **Minimalist-Tactile**, blending high-end editorial whitespace with watercolor-inspired organic textures. The UI should feel like a premium cookbook—spacious and clean, yet warm and inviting. Emotional responses should center on appetite, trust, and a sense of "farm-to-table" sophistication. Avoid synthetic or overly digital effects; instead, emphasize natural imperfection through subtle grain and soft edges.

## Colors

The palette is a celebration of harvest tones. The **Primary Gourmet Red** (#C42114) is a bold, appetizing deep tomato that serves as the main call-to-action and brand anchor, strictly avoiding any pink or coral undertones. This is complemented by a **Forest Green** (#2D5A27) for stability and a **Golden Saffron** (#F4A424) for accents and highlights.

The background is a soft **Bone White** (#F9F7F2), providing a more organic feel than pure white. Text should utilize a deep **Charcoal Bean** (#2A2420) for optimal legibility without the harshness of true black.

## Typography

This design system utilizes a trio of typefaces to balance character and utility. **Epilogue** is used for headlines to provide a geometric, editorial feel. **Be Vietnam Pro** handles body copy with a friendly and contemporary warmth. **Space Grotesk** is reserved for labels and technical metadata, adding a subtle "small-batch label" aesthetic.

Hierarchy is maintained through generous line heights and distinct weights. Large display text should employ tight letter spacing to feel impactful and grounded.

## Layout & Spacing

The layout follows a **Fluid Grid** model with high-margin breathing room. A 12-column system is used for desktop, collapsing to 4 columns for mobile. 

Spacing follows an 8px base unit. To maintain the "gourmet" feel, avoid packing elements tightly. Use vertical rhythm to separate sections, favoring white space over horizontal rules wherever possible. Content should reflow smoothly, with image-heavy sections (like recipe cards) utilizing a staggered masonry approach on larger screens to mimic a scrapbook layout.

## Elevation & Depth

In this design system, depth is achieved through **Tonal Layers** rather than heavy shadows. The Bone White background serves as the lowest tier. Surfaces such as cards or menus should use a slightly brighter white or a very subtle paper-texture overlay.

If shadows are necessary for functional clarity (e.g., floating buttons), use **Ambient Shadows** that are ultra-diffused with a low opacity (5-8%) and a slight tint of the primary red or forest green to maintain color harmony. High-elevation components may also feature a soft "watercolor bleed" edge rather than a sharp border.

## Shapes

The shape language is **Rounded**, reflecting the organic nature of food and ingredients. Standard UI elements like buttons and input fields use a 0.5rem (8px) radius. Larger containers, such as product cards or image wrappers, should use `rounded-xl` (1.5rem/24px) to create a soft, inviting frame. 

Buttons should never be perfectly sharp; they should always maintain a friendly, accessible curve that mimics the hand-carved feel of kitchen tools.

## Components

**Buttons:** Primary buttons use the Bold Gourmet Red with white text. Secondary buttons use a Forest Green outline. Hover states should involve a subtle shift in saturation rather than brightness.

**Cards:** Cards are essential for product displays. They should feature a very light 1px border in a pale tan or use tonal layering. Images within cards should have a slight "watercolor" mask or soft edges to blend into the layout.

**Chips:** Used for dietary labels (e.g., "Organic", "Vegan"). Use low-saturation versions of the brand colors (pale green, pale yellow) with dark text to remain legible but secondary to the main content.

**Input Fields:** Minimalist design with a bottom-border focus state in Gourmet Red. Labels use the Space Grotesk "label-caps" style for a technical, labeled-jar appearance.

**Lists:** Menu items should be separated by generous whitespace or very thin, low-contrast dashed lines, reminiscent of a premium bistro menu.