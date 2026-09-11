# Mission change: Vite + JavaScript first, TypeScript later

Tim decided to work through the course with **Vite + JavaScript** initially, rather than the earlier-agreed Vite + TypeScript. TypeScript will be introduced at an appropriate future lesson, once the core React patterns and the port itself are in a good place.

## Why
- Keeps the toolchain surface small while the React patterns (components, effects, props, shell, routing) are still being absorbed — fewer new concepts per lesson.
- The port's first slices (Home + shell, mock data) don't need type safety to be valuable, and the Vue2 codebase being ported is itself untyped.
- TypeScript later, on an already-working app, makes the payoff of types concrete (typing the route table, the store, the props) rather than abstract.

## What changed
- `MISSION.md`: constraint line now reads "Vite, initially with JavaScript only. TypeScript will be introduced at an appropriate future lesson, once the core React patterns and the port itself are in a good place — not up front." Success criterion updated to "working Vite React app" (dropped "+ TypeScript").
- Lesson 0005 reworked from "the Vite + TypeScript app shell (main.tsx)" to the Vite + JavaScript shell (main.jsx): mount, Outlet, route table, menu-from-route-meta. The TS conversion exercise removed; `main.tsx`/non-null-assertion refs replaced with `main.jsx`. File renamed `0005-vite-ts-app-shell.html` → `0005-vite-app-shell.html` and cross-links in lesson 0004 + reference 0005 updated.
- Reference 0005 updated to JS-first wording; version/toolchain notes now say TS is a later lesson.

## Implications
- `demo-react-app` stays JSX (it already is — no TypeScript in package.json). The lesson-5 exercise targets `src/main.jsx`, `App.jsx`, `ShellLayout.jsx` with `react-router`.
- When the TypeScript lesson lands (likely around state management, where shaping the store benefits most), it should include a guided JSX→TSX conversion of `demo-react-app`.