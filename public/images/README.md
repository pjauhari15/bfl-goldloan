# Image Assets

This folder contains static assets for the Next.js application.

## Asset Management

All images are served from the `/public/images/` directory and referenced using absolute paths starting with `/images/`.

## Current Assets

### Gold Rate Component Assets
- `gold-bg-1.png` - Primary background image for gold rate display
- `gold-bg-2.png` - Secondary background image for gold rate display

### Gold Rate Calculator Component Assets  
- `divider.svg` - Decorative divider element
- `decorative-line.svg` - Decorative line element for result panel

## Deployment Notes

- All image paths use absolute paths starting with `/images/` for deployment compatibility
- No hardcoded localhost URLs - images will work correctly in production
- Replace placeholder files with actual assets when available
- Optimize images for web before deployment (consider WebP format for better performance)

## Usage Pattern

```tsx
// ✅ Correct - deployment-ready
const imagePath = "/images/asset-name.png";

// ❌ Incorrect - will break in production  
const imagePath = "http://localhost:3845/assets/asset-name.png";
```