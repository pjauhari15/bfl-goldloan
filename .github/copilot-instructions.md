# Copilot Instructions for Next.js App Router

# Copilot Instructions for Next.js App Router

This document serves as a comprehensive guide for GitHub Copilot, outlining the project's architecture, best practices, and standards. The goal is to ensure consistency, high performance, and maintainability across the codebase.

This document serves as a comprehensive guide for GitHub Copilot, outlining the project's architecture, best practices, and standards. The goal is to ensure consistency, high performance, and maintainability across the codebase.

## 1. Project and Component Structure

## 1. Project and Component Structure

### File-System Conventions

*   **Root `src/` Directory**: All application code must reside within the `src/` directory.### File-System Conventions

*   **App Router**: Use the Next.js App Router exclusively. The `pages/` directory is not in use.*   **Root `src/` Directory**: All application code must reside within the `src/` directory.

*   **Route Colocation**: Organize files by route or feature within the `app/` directory. For example, `app/dashboard/_components/analytics-card.tsx`.*   **App Router**: Use the Next.js App Router exclusively. The `pages/` directory is not in use.

*   **Private Folders**: Prefix folders that are not part of the routing system with an underscore (`_`), for example, `app/dashboard/_components`.*   **Route Colocation**: Organize files by route or feature within the `app/` directory. For example, `app/dashboard/_components/analytics-card.tsx`.

*   **Shared Components**: Place globally reusable UI components (e.g., buttons, inputs, modals) in `src/components/ui/`.*   **Private Folders**: Prefix folders that are not part of the routing system with an underscore (`_`), for example, `app/dashboard/_components`.

*   **Client Components**: Place interactive components requiring client-side logic in `src/components/interactive/`.*   **Shared Components**: Place globally reusable UI components (e.g., buttons, inputs, modals) in `src/components/ui/`.

*   **Compositions**: Layout-level components (Header, Footer, Navigation) go in `src/components/compositions/`.*   **Client Components**: Place interactive components requiring client-side logic in `src/components/interactive/`.

*   **Sections**: Page-level sections (Hero, Pricing, FAQs, etc.) go in `src/components/sections/`.*   **Compositions**: Layout-level components (Header, Footer, Navigation) go in `src/components/compositions/`.

*   **Data Layer**: Centralized data providers and contexts go in `src/data/`.*   **Sections**: Page-level sections (Hero, Pricing, FAQs, etc.) go in `src/components/sections/`.

*   **Configuration Files**: Configuration files (e.g., `tailwind.config.ts`, `next.config.js`) should be in the project root.*   **Data Layer**: Centralized data providers and contexts go in `src/data/`.

*   **Configuration Files**: Configuration files (e.g., `tailwind.config.ts`, `next.config.js`) should be in the project root.

### Component Organization

*   **Barrel Exports**: Use index.ts files for clean imports from compositions and sections.### Component Organization

*   **Provider Pattern**: All providers should be consolidated into `AllProviders` component in `src/data/index.tsx`.*   **Barrel Exports**: Use index.ts files for clean imports from compositions and sections.

*   **Section Naming**: Page sections should be descriptive and reusable (e.g., `WelcomeHero`, `PricingGrid`, `FAQs`).*   **Provider Pattern**: All providers should be consolidated into `AllProviders` component in `src/data/index.tsx`.

*   **Section Naming**: Page sections should be descriptive and reusable (e.g., `WelcomeHero`, `PricingGrid`, `FAQs`).

### Import Patterns

*   **Compositions**: `import { Header, Footer } from "compositions"`### Import Patterns

*   **Sections**: `import { WelcomeHero, PricingGrid } from "sections"`*   **Compositions**: `import { Header, Footer } from "compositions"`

*   **Data/Providers**: `import { AllProviders } from "data"`*   **Sections**: `import { WelcomeHero, PricingGrid } from "sections"`

*   **UI Components**: `import { Button, Input } from "@/components/ui"`*   **Data/Providers**: `import { AllProviders } from "data"`

*   **UI Components**: `import { Button, Input } from "@/components/ui"`

### Page Structure

*   Pages should be composed of sections wrapped in providers using the composition pattern.### Page Structure

*   Keep page components clean and declarative - they should primarily orchestrate sections.*   Pages should be composed of sections wrapped in providers using the composition pattern.

*   Use the following pattern for pages:*   Keep page components clean and declarative - they should primarily orchestrate sections.

    ```tsx*   Use the following pattern for pages:

    import { Footer, Header } from "compositions";    ```tsx

    import { AllProviders } from "data";    import { Footer, Header } from "compositions";

    import { SectionA, SectionB } from "sections";    import { AllProviders } from "data";

    import { SectionA, SectionB } from "sections";

    function Page() {

      return (    function Page() {

        <AllProviders>      return (

          <Header />        <AllProviders>

          <SectionA />          <Header />

          <SectionB />          <SectionA />

          <Footer />          <SectionB />

        </AllProviders>          <Footer />

      );        </AllProviders>

    }      );

    ```    }

    ```

### Component Architecture

*   **Server Components First**: Prioritize React Server Components (RSC) by default. Use Client Components only when client-side interactivity is explicitly required (e.g., event handlers, hooks, browser APIs).### Component Architecture

*   **Component Naming**: Use PascalCase for component file names (e.g., `Button.tsx`).*   **Server Components First**: Prioritize React Server Components (RSC) by default. Use Client Components only when client-side interactivity is explicitly required (e.g., event handlers, hooks, browser APIs).

*   **Component Composition**: Keep components small, focused, and composable. Avoid large, monolithic components.*   **Component Naming**: Use PascalCase for component file names (e.g., `Button.tsx`).

*   **Client Boundaries**: Clearly mark Client Component boundaries with `'use client'` directive and minimize their scope.*   **Component Composition**: Keep components small, focused, and composable. Avoid large, monolithic components.

*   **Client Boundaries**: Clearly mark Client Component boundaries with `'use client'` directive and minimize their scope.

### Import/Export Guidelines

*   **Imports**: Always import components at the top of files.### Import/Export Guidelines

*   **Barrel Exports**: Use `index.ts` files for cleaner imports when beneficial.*   **Imports**: Always import components at the top of files.

*   **Named Exports**: Use named exports for utilities and hooks.*   **Barrel Exports**: Use `index.ts` files for cleaner imports when beneficial.

*   **Default Exports**: Use default exports for components and pages.*   **Named Exports**: Use named exports for utilities and hooks.

*   **Default Exports**: Use default exports for components and pages.

## 2. Styling

## 2. Styling

### Tailwind CSS

*   **Utility-First Approach**: Use Tailwind CSS for all component-level styling.### Tailwind CSS

*   **Theming**: Extend Tailwind's configuration (`tailwind.config.ts`) to define and enforce the design system's theme, including colors, typography, and spacing.*   **Utility-First Approach**: Use Tailwind CSS for all component-level styling.

*   **Mobile-First**: Always use a mobile-first approach for responsive design by default, leveraging Tailwind's responsive prefixes (e.g., `sm:`, `md:`, `lg:`).*   **Theming**: Extend Tailwind's configuration (`tailwind.config.ts`) to define and enforce the design system's theme, including colors, typography, and spacing.

*   **Mobile-First**: Always use a mobile-first approach for responsive design by default, leveraging Tailwind's responsive prefixes (e.g., `sm:`, `md:`, `lg:`).

### CSS Modules

*   **Strictly for Scoped Styling**: Use CSS Modules only for complex or unique components that require deeply-scoped, custom CSS. Avoid using them for general utility styling.### CSS Modules

*   **File Naming**: Use the format `[component-name].module.css`.*   **Strictly for Scoped Styling**: Use CSS Modules only for complex or unique components that require deeply-scoped, custom CSS. Avoid using them for general utility styling.

*   **File Naming**: Use the format `[component-name].module.css`.

### General Rules

*   **Avoid CSS-in-JS**: Do not use CSS-in-JS libraries (e.g., Emotion, Styled Components) to prevent performance penalties and server component issues.### General Rules

*   **Global Styles**: Restrict `globals.css` to only global-level styles like CSS resets or Tailwind's `@tailwind` directives.*   **Avoid CSS-in-JS**: Do not use CSS-in-JS libraries (e.g., Emotion, Styled Components) to prevent performance penalties and server component issues.

*   **Global Styles**: Restrict `globals.css` to only global-level styles like CSS resets or Tailwind's `@tailwind` directives.

## 3. Font and Design System

## 3. Font and Design System

### Font Optimization

*   **Use `next/font`**: Always use Next.js's built-in `next/font` for handling both Google and local fonts. This provides automatic self-hosting, size adjustments, and preloading to eliminate Cumulative Layout Shift (CLS).### Font Optimization

*   **Variable Fonts**: Favor variable font files when available, as they offer the most performant solution for multiple weights and styles.*   **Use `next/font`**: Always use Next.js's built-in `next/font` for handling both Google and local fonts. This provides automatic self-hosting, size adjustments, and preloading to eliminate Cumulative Layout Shift (CLS).

*   **CSS Variables**: Use `next/font` to define CSS variables in the root `layout.tsx`, and reference them in `tailwind.config.ts` for consistent typography.*   **Variable Fonts**: Favor variable font files when available, as they offer the most performant solution for multiple weights and styles.

*   **CSS Variables**: Use `next/font` to define CSS variables in the root `layout.tsx`, and reference them in `tailwind.config.ts` for consistent typography.

### Design System

*   **Component Library**: Use the pre-selected component library (e.g., Shadcn UI or Radix UI) for foundational UI elements. Adhere to its best practices for component usage and theming.### Design System

*   **Customization**: When customizing library components, follow the recommended patterns for extending their styles with Tailwind.*   **Component Library**: Use the pre-selected component library (e.g., Shadcn UI or Radix UI) for foundational UI elements. Adhere to its best practices for component usage and theming.

*   **Customization**: When customizing library components, follow the recommended patterns for extending their styles with Tailwind.

## 4. Data Fetching and Logic

## 4. Data Fetching and Logic

### Server-Side Data Fetching

*   **Isolate Logic**: Place server-side data fetching and business logic in a dedicated `src/lib/` directory. Use a service-oriented architecture to keep components clean.### Server-Side Data Fetching

*   **Caching and Revalidation**: Use Next.js's native `fetch` with caching options and revalidation strategies.*   **Isolate Logic**: Place server-side data fetching and business logic in a dedicated `src/lib/` directory. Use a service-oriented architecture to keep components clean.

*   **Caching and Revalidation**: Use Next.js's native `fetch` with caching options and revalidation strategies.

### Client-Side Logic

*   **Custom Hooks**: Encapsulate reusable client-side logic (state management, event handling) in custom hooks stored in `src/hooks/`.### Client-Side Logic

*   **State Management**: Use React hooks (`useState`, `useReducer`) for simple component state. For global UI state, use context providers in the AllProviders pattern.*   **Custom Hooks**: Encapsulate reusable client-side logic (state management, event handling) in custom hooks stored in `src/hooks/`.

*   **Context Pattern**: Create contexts for UI state (theme, sidebar, modals) and consolidate them in the AllProviders component.*   **State Management**: Use React hooks (`useState`, `useReducer`) for simple component state. For global UI state, use context providers in the AllProviders pattern.

*   **Context Pattern**: Create contexts for UI state (theme, sidebar, modals) and consolidate them in the AllProviders component.

### Ultra-Clean Page Pattern

*   **Pure Composition**: Pages should only contain component imports and JSX composition with minimal logic.### Ultra-Clean Page Pattern

*   **Server Component Pages**: Use Server Components for pages by default to leverage server-side rendering and data fetching.*   **Pure Composition**: Pages should only contain component imports and JSX composition with minimal logic.

*   **Provider Boundaries**: Wrap pages in AllProviders for consistent UI state management.*   **Server Component Pages**: Use Server Components for pages by default to leverage server-side rendering and data fetching.

*   **Simple Function Declarations**: Prefer `function PageName() {}` over arrow functions for better debugging and consistency.*   **Provider Boundaries**: Wrap pages in AllProviders for consistent UI state management.

*   **Simple Function Declarations**: Prefer `function PageName() {}` over arrow functions for better debugging and consistency.

### AllProviders Pattern

*   **Centralized Providers**: All context providers should be consolidated into a single `AllProviders` component in `src/data/index.tsx`.### AllProviders Pattern

*   **Client Boundaries**: AllProviders must be a Client Component but should wrap Server Component children.*   **Centralized Providers**: All context providers should be consolidated into a single `AllProviders` component in `src/data/index.tsx`.

*   **UI State Focus**: Use contexts for UI state (theme, sidebar, modal state) rather than data state.*   **Client Boundaries**: AllProviders must be a Client Component but should wrap Server Component children.

*   **Strategic Placement**: Place AllProviders at the page level for consistent state management.*   **UI State Focus**: Use contexts for UI state (theme, sidebar, modal state) rather than data state.

*   **Strategic Placement**: Place AllProviders at the page level for consistent state management.

## 5. Code Quality and Formatting

## 5. Code Quality and Formatting

### ESLint Configuration

*   **Next.js ESLint**: Use the recommended Next.js ESLint configuration as the foundation: `next/core-web-vitals`.### ESLint Configuration

*   **TypeScript Support**: Include `@typescript-eslint/parser` and `@typescript-eslint/eslint-plugin` for TypeScript-specific linting.*   **Next.js ESLint**: Use the recommended Next.js ESLint configuration as the foundation: `next/core-web-vitals`.

*   **Accessibility**: Add `eslint-plugin-jsx-a11y` to enforce accessibility best practices.*   **TypeScript Support**: Include `@typescript-eslint/parser` and `@typescript-eslint/eslint-plugin` for TypeScript-specific linting.

*   **Import Organization**: Use `eslint-plugin-import` to enforce consistent import ordering and prevent circular dependencies.*   **Accessibility**: Add `eslint-plugin-jsx-a11y` to enforce accessibility best practices.

*   **React Hooks**: Include `eslint-plugin-react-hooks` to enforce rules of hooks.*   **Import Organization**: Use `eslint-plugin-import` to enforce consistent import ordering and prevent circular dependencies.

*   **React Hooks**: Include `eslint-plugin-react-hooks` to enforce rules of hooks.

### Prettier Configuration

*   **Consistent Formatting**: Use Prettier for automatic code formatting to eliminate style debates and ensure consistency.### Prettier Configuration

*   **Integration**: Configure Prettier to work alongside ESLint using `eslint-config-prettier` to avoid conflicts.*   **Consistent Formatting**: Use Prettier for automatic code formatting to eliminate style debates and ensure consistency.

*   **Integration**: Configure Prettier to work alongside ESLint using `eslint-config-prettier` to avoid conflicts.

### Development Workflow

*   **IDE Integration**: Configure your IDE/editor to run ESLint and Prettier on save.### Development Workflow

*   **Pre-commit Hooks**: Use Husky and lint-staged to automatically format and lint staged files.*   **IDE Integration**: Configure your IDE/editor to run ESLint and Prettier on save.

*   **Pre-commit Hooks**: Use Husky and lint-staged to automatically format and lint staged files.

**Essential Commands:**

```bash**Essential Commands:**

npm run dev        # Start development server (localhost:3000)```bash

npm run lint:fix   # Auto-fix ESLint issues  npm run dev        # Start development server (localhost:3000)

npm run format     # Format code with Prettiernpm run lint:fix   # Auto-fix ESLint issues  

npm run build      # Production buildnpm run format     # Format code with Prettier

```npm run build      # Production build

```

## 6. Coding Practices

## 6. Coding Practices

### TypeScript

*   **Full Adoption**: Use TypeScript for all JavaScript files (`.tsx` and `.ts`).### TypeScript

*   **Strictness**: Ensure `strict: true` is enabled in `tsconfig.json`.*   **Full Adoption**: Use TypeScript for all JavaScript files (`.tsx` and `.ts`).

*   **Interfaces over Types**: Prefer `interface` over `type` for defining object shapes.*   **Strictness**: Ensure `strict: true` is enabled in `tsconfig.json`.

*   **Component Props**: Define prop interfaces for all components.*   **Interfaces over Types**: Prefer `interface` over `type` for defining object shapes.

*   **Naming**: Use consistent naming conventions (e.g., `ButtonProps`, `UserCardProps`).*   **Component Props**: Define prop interfaces for all components.

*   **Exports**: Export types when they need to be shared across files.*   **Naming**: Use consistent naming conventions (e.g., `ButtonProps`, `UserCardProps`).

*   **Strict Types**: Avoid using `any` type - always define proper types.*   **Exports**: Export types when they need to be shared across files.

*   **Strict Types**: Avoid using `any` type - always define proper types.

### Code Readability

*   **Comments**: Use JSDoc comments for complex functions and components.### Code Readability

*   **Modularity**: Write small, single-responsibility functions and components.*   **Comments**: Use JSDoc comments for complex functions and components.

*   **Modularity**: Write small, single-responsibility functions and components.

### Performance & Best Practices

*   **Dynamic Imports**: Use dynamic imports for code splitting when appropriate.### Performance & Best Practices

*   **Memoization**: Apply React.memo, useMemo, and useCallback where beneficial.*   **Dynamic Imports**: Use dynamic imports for code splitting when appropriate.

*   **Bundle Size**: Keep component files focused and avoid unnecessary dependencies.*   **Memoization**: Apply React.memo, useMemo, and useCallback where beneficial.

*   **Lazy Loading**: Implement lazy loading for heavy components.*   **Bundle Size**: Keep component files focused and avoid unnecessary dependencies.

*   **Lazy Loading**: Implement lazy loading for heavy components.

## 7. Directory Structure

## 7. Directory Structure

### Recommended Project Structure

```### Recommended Project Structure

src/```

  app/                          # Next.js App Routersrc/

    page.tsx                    # Ultra-clean Server Component page  app/                          # Next.js App Router

    layout.tsx                  # Server Component layout    page.tsx                    # Ultra-clean Server Component page

    loading.tsx                 # Loading UI    layout.tsx                  # Server Component layout

    globals.css                 # Global styles    loading.tsx                 # Loading UI

    dashboard/    globals.css                 # Global styles

      page.tsx                  # Route-specific page    dashboard/

      layout.tsx                # Route-specific layout      page.tsx                  # Route-specific page

      _components/              # Route-specific components      layout.tsx                # Route-specific layout

        DashboardStats.tsx            _components/              # Route-specific components

        DashboardCharts.tsx             DashboardStats.tsx      

  components/        DashboardCharts.tsx     

    ui/                         # Shared UI components (Server & Client)  components/

      Button.tsx    ui/                         # Shared UI components (Server & Client)

      Card.tsx      Button.tsx

      Modal.tsx      Card.tsx

      LoadingSpinner.tsx      Modal.tsx

    interactive/                # Client Components requiring interactivity      LoadingSpinner.tsx

      SearchInput.tsx    interactive/                # Client Components requiring interactivity

      ToggleButton.tsx      SearchInput.tsx

      FormComponents.tsx      ToggleButton.tsx

    compositions/               # Layout-level components      FormComponents.tsx

      Header.tsx    compositions/               # Layout-level components

      Footer.tsx      Header.tsx

      Navigation.tsx      Footer.tsx

      index.ts                  # Barrel exports      Navigation.tsx

    sections/                   # Page-level sections      index.ts                  # Barrel exports

      WelcomeHero.tsx    sections/                   # Page-level sections

      PricingGrid.tsx      WelcomeHero.tsx

      FAQs.tsx      PricingGrid.tsx

      ProductDetails.tsx      FAQs.tsx

      index.ts                  # Barrel exports      ProductDetails.tsx

  data/                         # Centralized providers and contexts      index.ts                  # Barrel exports

    index.tsx                   # AllProviders component  data/                         # Centralized providers and contexts

    contexts/                   # Context definitions    index.tsx                   # AllProviders component

      SidebarContext.tsx    contexts/                   # Context definitions

      ThemeContext.tsx      SidebarContext.tsx

      ModalContext.tsx      ThemeContext.tsx

  lib/                          # Server-side utilities      ModalContext.tsx

    api/  lib/                          # Server-side utilities

      dashboard.ts    api/

      users.ts      dashboard.ts

    database.ts      users.ts

    utils.ts    database.ts

  hooks/                        # Client-side custom hooks    utils.ts

    useLocalStorage.ts  hooks/                        # Client-side custom hooks

    useDebounce.ts    useLocalStorage.ts

    useApi.ts    useDebounce.ts

  types/                        # TypeScript definitions    useApi.ts

    index.ts  types/                        # TypeScript definitions

    api.ts    index.ts

    components.ts    api.ts

  utils/                        # Shared utilities    components.ts

    formatters.ts  utils/                        # Shared utilities

    validators.ts    formatters.ts

    constants.ts    validators.ts

```    constants.ts

```

### File Naming Conventions

*   **Components**: PascalCase (e.g., `UserProfile.tsx`, `DashboardStats.tsx`)### File Naming Conventions

*   **Pages**: lowercase (e.g., `page.tsx`, `layout.tsx`)*   **Components**: PascalCase (e.g., `UserProfile.tsx`, `DashboardStats.tsx`)

*   **Utilities**: camelCase (e.g., `apiHelpers.ts`, `formatUtils.ts`)*   **Pages**: lowercase (e.g., `page.tsx`, `layout.tsx`)

*   **Types**: PascalCase with descriptive names (e.g., `UserTypes.ts`, `ApiTypes.ts`)*   **Utilities**: camelCase (e.g., `apiHelpers.ts`, `formatUtils.ts`)

*   **Contexts**: PascalCase + "Context" suffix (e.g., `SidebarContext.tsx`)*   **Types**: PascalCase with descriptive names (e.g., `UserTypes.ts`, `ApiTypes.ts`)

*   **Contexts**: PascalCase + "Context" suffix (e.g., `SidebarContext.tsx`)

## 8. Implementation Examples

## 8. Implementation Examples

### AllProviders Pattern Example

```typescript### AllProviders Pattern Example

// src/data/index.tsx```typescript

'use client';// src/data/index.tsx

import React from 'react';'use client';

import { SidebarProvider } from './contexts/SidebarContext';import React from 'react';

import { ThemeProvider } from './contexts/ThemeProvider';import { SidebarProvider } from './contexts/SidebarContext';

import { ModalProvider } from './contexts/ModalContext';import { ThemeProvider } from './contexts/ThemeContext';

import { ModalProvider } from './contexts/ModalContext';

interface AllProvidersProps {

  children: React.ReactNode;interface AllProvidersProps {

}  children: React.ReactNode;

}

export function AllProviders({ children }: AllProvidersProps) {

  return (export function AllProviders({ children }: AllProvidersProps) {

    <ThemeProvider>  return (

      <SidebarProvider>    <ThemeProvider>

        <ModalProvider>      <SidebarProvider>

          {children}        <ModalProvider>

        </ModalProvider>          {children}

      </SidebarProvider>        </ModalProvider>

    </ThemeProvider>      </SidebarProvider>

  );    </ThemeProvider>

}  );

}

export default AllProviders;

```export default AllProviders;

```

### Context Example

```typescript### Context Example

// src/data/contexts/SidebarContext.tsx```typescript

'use client';// src/data/contexts/SidebarContext.tsx

import { createContext, useContext, useState, ReactNode } from 'react';'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface SidebarContextType {

  isOpen: boolean;interface SidebarContextType {

  toggle: () => void;  isOpen: boolean;

  close: () => void;  toggle: () => void;

  open: () => void;  close: () => void;

}  open: () => void;

}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function SidebarProvider({ children }: { children: ReactNode }) {

  const [isOpen, setIsOpen] = useState(false);export function SidebarProvider({ children }: { children: ReactNode }) {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(prev => !prev);

  const close = () => setIsOpen(false);  const toggle = () => setIsOpen(prev => !prev);

  const open = () => setIsOpen(true);  const close = () => setIsOpen(false);

  const open = () => setIsOpen(true);

  return (

    <SidebarContext.Provider value={{ isOpen, toggle, close, open }}>  return (

      {children}    <SidebarContext.Provider value={{ isOpen, toggle, close, open }}>

    </SidebarContext.Provider>      {children}

  );    </SidebarContext.Provider>

}  );

}

export const useSidebar = () => {

  const context = useContext(SidebarContext);export const useSidebar = () => {

  if (!context) {  const context = useContext(SidebarContext);

    throw new Error('useSidebar must be used within SidebarProvider');  if (!context) {

  }    throw new Error('useSidebar must be used within SidebarProvider');

  return context;  }

};  return context;

```};

```

### Barrel Exports Example

```typescript### Barrel Exports Example

// src/components/compositions/index.ts```typescript

export { default as Header } from './Header';// src/components/compositions/index.ts

export { default as Footer } from './Footer';export { default as Header } from './Header';

export { default as Navigation } from './Navigation';export { default as Footer } from './Footer';

export { default as Navigation } from './Navigation';

// src/components/sections/index.ts

export { default as WelcomeHero } from './WelcomeHero';// src/components/sections/index.ts

export { default as PricingGrid } from './PricingGrid';export { default as WelcomeHero } from './WelcomeHero';

export { default as FAQs } from './FAQs';export { default as PricingGrid } from './PricingGrid';

export { default as ProductDetails } from './ProductDetails';export { default as FAQs } from './FAQs';

```export { default as ProductDetails } from './ProductDetails';

```

### Ultra-Clean Page Example

```typescript### Ultra-Clean Page Example

// src/app/page.tsx (Server Component)```typescript

import { Footer, Header } from "compositions";// src/app/page.tsx (Server Component)

import { AllProviders } from "data";import { Footer, Header } from "compositions";

import { import { AllProviders } from "data";

  WelcomeHero, import { 

  PricingGrid,   WelcomeHero, 

  FAQs,   PricingGrid, 

  ProductDetails   FAQs, 

} from "sections";  ProductDetails 

} from "sections";

function HomePage() {

  return (function HomePage() {

    <AllProviders>  return (

      <Header />    <AllProviders>

      <WelcomeHero />      <Header />

      <PricingGrid />      <WelcomeHero />

      <FAQs />      <PricingGrid />

      <ProductDetails />      <FAQs />

      <Footer />      <ProductDetails />

    </AllProviders>      <Footer />

  );    </AllProviders>

}  );

}

export default HomePage;

```export default HomePage;

```

## Best Practices for Implementation

## Best Practices for Implementation

*   **Be Descriptive**: When prompting, provide clear and specific instructions, referencing existing file names or code patterns.

*   **Prioritize Best Practices**: Prioritize performance, accessibility, and the defined project conventions over the most direct implementation.*   **Be Descriptive**: When prompting, provide clear and specific instructions, referencing existing file names or code patterns.

*   **Follow the Pattern**: Always use the AllProviders pattern for state management and the compositions/sections pattern for component organization.*   **Prioritize Best Practices**: Prioritize performance, accessibility, and the defined project conventions over the most direct implementation.

*   **Maintain Clean Architecture**: Keep Server Components for data fetching and Client Components for interactivity, with clear boundaries between them.*   **Follow the Pattern**: Always use the AllProviders pattern for state management and the compositions/sections pattern for component organization.
*   **Maintain Clean Architecture**: Keep Server Components for data fetching and Client Components for interactivity, with clear boundaries between them.