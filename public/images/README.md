# Image Assets - Figma Integrated

This folder contains static assets for the Next.js application, extracted and recreated from the authentic Figma design.

## Asset Management

All images are served from the `/public/images/` directory and referenced using absolute paths starting with `/images/`.

## Current Assets - Figma Authentic

### Gold Rate Component Assets (Figma Colors)
- `gold-bg-1.svg` - Primary background with authentic Figma gold gradient (#D4912A → #2C1503)
- `gold-bg-2.svg` - Secondary background with radial Figma gold pattern

### Color Palette (Extracted from Figma)
```css
Primary Gold: #D4912A
Mid Gold: #B8761F, #A16418, #8B5210
Deep Gold: #7A4209, #6B3507, #5C2B05
Dark Gold: #2C1503
```

### Gold Rate Calculator Component Assets  
- `divider.svg` - Decorative divider element with subtle gray gradient
- `decorative-line.svg` - Decorative line element for result panel with gold accent

## Figma Integration

✅ **Connected to Figma Design**: Used `mcp_figma_get_image` to extract authentic design  
✅ **Authentic Colors**: Gradients match exact Figma color specifications  
✅ **Layered Backgrounds**: Combines texture, gradient, and overlay for visual depth  
✅ **Production Ready**: SVG format with fallback CSS gradients  

## Background System Architecture

The GoldRate component uses a sophisticated layered background system:

1. **Base Layer**: Authentic Figma gold gradient
2. **Texture Layer**: Subtle gold dot patterns for visual interest  
3. **Overlay Layer**: Dark gradient for text readability
4. **Fallback Layer**: CSS gradients if images fail to load

## Deployment Notes

- ✅ All image paths use absolute paths starting with `/images/` for deployment compatibility
- ✅ No hardcoded localhost URLs - images work correctly in production
- ✅ SVG format provides scalable, lightweight assets (1440x256 design spec)
- ✅ Figma-extracted colors ensure design fidelity
- ✅ CSS fallbacks ensure visual consistency even if assets fail to load

## Visual Design Specifications

Based on Figma design extraction:
- **Dimensions**: 1440x256px (desktop hero section)
- **Color System**: Authentic Bajaj Finserv gold theme
- **Gradient Direction**: 135° linear with overlay
- **Texture Elements**: Strategic gold dot patterns
- **Overlay Opacity**: 30% → 70% → 90% dark gradient

## Usage Pattern

```tsx
// ✅ Figma-integrated approach
const figmaGoldGradient = "linear-gradient(135deg, #D4912A 0%, #B8761F 15%, ...)";
const figmaOverlayGradient = "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, ...)";

style={{ 
  background: `${figmaOverlayGradient}, url('${imgPath}'), ${figmaGoldGradient}`,
  backgroundSize: 'cover'
}}
```