# Neighborly Landing Page

Next.js 16 static marketing/landing page with React 19, TailwindCSS 4, and shadcn/ui.

## Cursor Cloud specific instructions

### Running

- `bun dev --port 3002` — starts dev server on port 3002. Requires bun (`~/.bun/bin/bun`).
- Fully standalone; no backend API dependency.

### Testing & Linting

- ESLint is listed in scripts but not installed as a dependency. `bun run lint` fails. This is a pre-existing issue.

### Gotchas

- Uses bun (has `bun.lock`). Do not use npm or pnpm.
- Bun must be in PATH: `export BUN_INSTALL="$HOME/.bun" && export PATH="$BUN_INSTALL/bin:$PATH"`.
