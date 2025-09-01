# Bajaj Finserv Header Implementation

This project implements a responsive header component based on the Figma design for Bajaj Finserv, following Next.js App Router best practices and the project's architectural guidelines.

## Features

### Header Component
- **Top Navigation Bar**: Logo, search functionality, and user actions
- **Bottom Menu Bar**: Main navigation with dropdown indicators
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive Elements**: Cart counter, notifications, user profile
- **Cross-sell Actions**: Quick access buttons for key actions

### Architecture
- **Server Components First**: Optimized for performance
- **Component Composition**: Clean, reusable UI components
- **Type Safety**: Full TypeScript implementation
- **Design System**: Consistent styling with Tailwind CSS

## Project Structure

```
src/
├── app/                      # Next.js App Router
│   ├── page.tsx             # Home page
│   ├── layout.tsx           # Root layout
│   └── globals.css          # Global styles
├── components/
│   ├── ui/                  # Reusable UI components
│   │   ├── Button.tsx       # Button variants
│   │   ├── SearchBar.tsx    # Search input
│   │   ├── IconButton.tsx   # Icon buttons with labels
│   │   ├── MenuItem.tsx     # Navigation menu items
│   │   ├── Icons.tsx        # SVG icon components
│   │   └── index.ts         # Barrel exports
│   └── compositions/        # Layout-level components
│       ├── Header.tsx       # Main header component
│       └── index.ts         # Barrel exports
├── data/                    # Providers and contexts
│   └── index.tsx           # AllProviders component
└── [lib, hooks, types, utils]/  # Supporting directories
```

## Components

### Header
The main header component (`src/components/compositions/Header.tsx`) includes:
- **Logo Section**: Bajaj Finserv branding
- **Search Bar**: Prominent search functionality
- **User Actions**: Sign in, EMI card, notifications, cart, partners
- **Navigation Menu**: Main site navigation with dropdowns
- **Cross-sell Section**: Do not call, feedback, and app download

### UI Components
- **Button**: Multiple variants (primary, secondary, nav)
- **SearchBar**: Search input with submit button
- **IconButton**: Icon with label and optional count/dropdown
- **MenuItem**: Navigation items with dropdown indicators
- **Icons**: SVG icon components for consistent styling

## Usage

```tsx
import { Header } from "compositions";
import { AllProviders } from "data";

export default function Page() {
  return (
    <AllProviders>
      <Header cartCount={2} />
      {/* Page content */}
    </AllProviders>
  );
}
```

## Design System

### Colors
- **Navy**: Primary brand color (`#002953`)
- **Navy Light**: Text and borders (`#D3DAE1`)
- **Navy Dark**: Menu background (`#0d2640`)
- **Tangerine**: Accent color (`#FF6700`)
- **Tangerine Light**: Button backgrounds (`#FFF2EA`)

### Typography
- **Font**: Rubik (Google Fonts)
- **Sizes**: 12px, 14px body text with proper line heights
- **Weights**: Regular (400), Medium (500)

### Responsive Breakpoints
- Mobile-first approach
- Tailwind CSS responsive prefixes (sm:, md:, lg:)

## Development

### Scripts
```bash
npm run dev        # Start development server
npm run build      # Production build
npm run lint       # ESLint checking
npm run lint:fix   # Auto-fix ESLint issues
npm run format     # Format with Prettier
```

### Best Practices
- Server Components by default
- Client Components only for interactivity
- TypeScript strict mode enabled
- Consistent import patterns using barrel exports
- Mobile-first responsive design

## Figma Integration

This implementation closely follows the provided Figma design with:
- Accurate spacing and typography
- Proper color scheme implementation
- Interactive state considerations
- Component structure matching design system

The header is designed to be pixel-perfect while maintaining flexibility for different screen sizes and future enhancements.