# Social Sandbox

A React and TypeScript tweet viewer built with Vite.

## What is in this project

- A Vite React app mounted from `src/main.tsx` into `index.html`.
- A root `App` component that renders five hard-coded sample tweets.
- A reusable `Tweet` component that displays author information, avatar, tweet text, and Reply, Retweet, and Like actions.
- Local state in `App` for toggling likes and retweets, including count changes and pressed states.
- TypeScript types for tweet data in `src/types/tweet.ts`.
- Twenty SVG avatar files in `public/avatars/`.
- Vitest tests using React Testing Library and jsdom.

## Project structure

```text
.
├── index.html
├── package.json
├── package-lock.json
├── public/
│   └── avatars/
├── src/
│   ├── App.tsx
│   ├── App.test.tsx
│   ├── components/
│   │   ├── Tweet.tsx
│   │   └── Tweet.test.tsx
│   ├── main.tsx
│   ├── test/
│   │   └── setup.ts
│   └── types/
│       └── tweet.ts
├── tsconfig.json
└── vite.config.ts
```

## Scripts

```bash
npm run dev
```

Starts the Vite development server.

```bash
npm run build
```

Runs TypeScript checking with `tsc`, then builds the app with Vite.

```bash
npm run test
```

Runs the Vitest test suite once.

```bash
npm run test:watch
```

Runs Vitest in watch mode.

```bash
npm run preview
```

Starts Vite's production preview server.

## Testing

The test setup is configured in `vite.config.ts` to use the `jsdom` environment and `src/test/setup.ts`. The setup file imports `@testing-library/jest-dom/vitest` and runs React Testing Library cleanup after each test.

Current tests cover:

- Rendering the tweet viewer and sample tweets.
- Like and retweet toggle behavior in `App`.
- Ensuring only the clicked tweet changes when liking.
- Rendering tweet content, avatar, and action counts in `Tweet`.
- Calling optional reply, retweet, and like handlers with the tweet id.
- Rendering active liked and retweeted states.
- Allowing action buttons to be clicked when handlers are not provided.

## Configuration

- TypeScript is configured with strict checking, React JSX, and `@/*` path aliases to `src/*`.
- Vite uses `@vitejs/plugin-react`.
- Vitest is configured through `vite.config.ts`.
