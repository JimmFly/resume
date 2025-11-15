# Repository Guidelines

## Project Structure & Module Organization
This Vite + React + TypeScript site keeps runtime code inside `src/`: `components/sections` render the resume, `components/ChatBot` hosts the assistant, and shared logic sits in `hooks/`, `constants/`, `types/`, and `utils/`. `src/index.css` and `tailwind.config.js` define global styling. Static assets belong in `public/`; localized resume text, cover letters, and exported PDFs live in `docs/`. PDF automation sits in `scripts/export-*.js`, while repo-root config files (ESLint, tsconfig, PostCSS) are reused by CI.

## Build, Test, and Development Commands
- `yarn dev`: Start the hot-reloading Vite server.
- `yarn build`: Run `tsc -b` then emit the production bundle to `dist/`.
- `yarn preview`: Serve the built assets to verify GitHub Pages routing.
- `yarn lint`, `yarn lint:fix`, `yarn oxlint`: ESLint, auto-fixes, and fast AST linting.
- `yarn type-check`: Strict TS validation; required before merging.
- `yarn resume:pdf` / `yarn resume2:pdf`: Generate the one- and two-page PDFs in `docs/`.
- `yarn security-audit`: Execute `audit-ci` to catch vulnerable deps.

## Coding Style & Naming Conventions
Favor functional components, 2-space indentation, and strict TypeScript types. Component, section, and hook files use `PascalCase.tsx` (`ExperienceSection`, `useParallax`), while utilities stay `camelCase.ts`. Prefer Tailwind utility classes over ad-hoc CSS; global tokens live in `tailwind.config.js`. Prettier, ESLint, and Oxlint run via Husky/`lint-staged`, so allow the tools to format files automatically.

## Testing Guidelines
There is no Jest suite yet; regressions are caught through linting, strict typing, and manual review across every locale and PDF. Before opening a PR, run `yarn dev` (exercise `/` and `/table`), `yarn build`, inspect the chatbot console for missing env vars, and regenerate PDFs whenever resume copy changes. Future automated tests should use `*.test.tsx` names colocated with the code they cover.

## Commit & Pull Request Guidelines
History follows a Conventional Commit flavor (`feat:`, `style:`, `fix:`) with optional issue references like `(#11)`. Keep subjects under 72 characters and squash noisy WIP commits locally. PRs must summarize scope, list verification commands, attach screenshots/GIFs for UI tweaks, and note which docs or locale files were updated. When strings change, update all README locales and the matching content in `docs/`.

## Security & Configuration Tips
Never commit `.env` files. Keep `VITE_OPENAI_API_KEY` local and read it via `import.meta.env`. Run `yarn security-check` (audit + lint) whenever dependencies shift, ensure new fetches stay on HTTPS, and document additional env vars in `README.en.md` and `docs/CHATBOT.md`. Remove secrets from logs or screenshots before sharing.
