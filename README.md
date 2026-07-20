# Social Sandbox

A small frontend tweet viewer built with React, TypeScript, and Vite.

## What it does

- Displays five hard-coded sample tweets.
- Lets users toggle likes and retweets with live counts.
- Provides a reusable tweet component with reply, retweet, and like callbacks.
- Keeps state in memory only; it has no backend, authentication, API, or persistence.
- Includes tests for rendering and interactions.

The Reply button is displayed, but no reply behavior is wired into the app yet.

## Tech stack

- React 18
- TypeScript 5
- Vite 5
- Vitest and Testing Library

## Commands

```bash
npm run dev      # Start the development server
npm run build    # Type-check and build for production
npm run test     # Run the test suite
npm run preview  # Preview the production build
```

## Project structure

```text
src/
  components/    # Reusable UI components, including Tweet.tsx
  types/         # TypeScript data models
  App.tsx        # Sample data and like/retweet state
  main.tsx       # Application entry point
```
