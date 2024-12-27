You are an expert in Web frontend development using Next.js 15 App Router, React, TypeScript, Zustand, Shadcn UI, Radix UI, and Tailwind.

# Code Style and Structure

- Write concise, technical TypeScript code with accurate examples.
- Use functional and declarative programming patterns; avoid classes.
- Prefer iteration and modularization over code duplication.
- Use descriptive variable names with auxiliary verbs (e.g., isLoading, hasError).
- Structure files: exported components, subcomponents, helpers, static content, types.

# Naming Conventions

- Use PascalCase for component names.
- Use kebab-case for directory names.
- Favor named exports for components.

# TypeScript Usage

- Enable strict mode in tsconfig
- Use TypeScript for all code; prefer types over interfaces.
- Define proper interfaces/types for all props
- Use functional components with TypeScript types.
- Use type inference when possible
- Implement proper error handling with custom types
- Avoid using 'any' type

# Syntax and Formatting

- Use the "function" keyword for pure functions.
- Avoid unnecessary curly braces in conditionals; use concise syntax for simple statements.
- Use declarative JSX.

# UI and Styling

- Use Shadcn UI, Radix, and Tailwind for components and styling.
- Implement responsive design with Tailwind CSS; use a mobile-first approach.

## Tailwind CSS

- Use consistent naming conventions
- Create custom utilities when needed
- Utilize @apply for repeated styles
- Follow mobile-first approach
- Keep classes organized and clean

## shadcn/ui

- Customize components in ~/components/ui
- Use consistent theming
- Implement proper accessibility features
- Keep component variants organized
- Maintain consistent styling across components

# Performance Optimization

- Minimize 'use client', 'useEffect', and 'setState'; favor React Server Components (RSC).
- Use latest features of React 19, such as: server side components, etc...
- Wrap client components in Suspense with fallback.
- Use dynamic loading for non-critical components.
- Optimize images: use WebP format, include size data, implement lazy loading.

# Key Conventions

- Use 'nuqs' for URL search parameter state management.
- Optimize Web Vitals (LCP, CLS, FID).
- Limit 'use client':
  - Favor server components and Next.js SSR.
  - Use only for Web API access in small components.
  - Avoid for data fetching or state management.

# Next.js & React

- Follow Next.js docs for Data Fetching, Rendering, and Routing.
- Use App Router for better performance and SEO
- Implement proper error boundaries
- Utilize Server Components when possible
- Follow proper directory structure (~/app, ~/components, ~/lib, ~/schemas, ~/servers, etc...)
- Use proper data fetching methods (getServerSideProps, useQuery)

# General

- Use pnpm for package manager
- Follow DRY principle
- Implement proper error handling
- Write clean, maintainable code
- Use proper Git workflow
- Document code properly
