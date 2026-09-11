# LearnReact — Real-World React by Porting a Production Vue2 App

I'm a 15+ year .NET backend developer with a solid Vue2 + Vuex frontend who wants to become fluent in **real-world React** (hello-world tutorials won't do). React is the dominant frontend framework in the Australian job market, and I want to pass React interviews and write credible React on the job.

So instead of following a generic course, this repo teaches React the direct way: **porting slices of my own large production Vue2 SPA into idiomatic React**, using mock data and the modern **Vite + TypeScript** toolchain.

## What's in here

| Directory | Purpose |
|---|---|
| `lessons/` | Self-contained HTML lessons — one tightly-scoped skill each, grounded in a real SourceApp Vue file translated into React. Each ends with a retrieval-practice quiz and a "do it in the real workspace" exercise. |
| `reference/` | One-page cheat sheets compressing each lesson (Vue → React term maps, mental models, gotchas) for quick lookup. |
| `learning-records/` | Notes capturing what's been learned and the current skill level (zone of proximal development) to drive what to teach next. |
| `assets/` | Reusable teaching components: shared stylesheet (`lesson.css`) and the quiz widget (`quiz.js`). |
| `demo-react-app/` | A Vite + React app where the port actually lives as it's built. |
| `MISSION.md` | Why I'm learning React and what success looks like. |
| `NOTES.md` | Teaching notes and how each lesson is grounded. |
| `RESOURCES.md` | Curated high-trust sources (official docs, Vue→React guides, communities). |

## How the teaching works

- **Every lesson is grounded in a real file** from the SourceApp Vue2 codebase (`src/views/Home.vue`, `src/components/myTraining/pagination.vue`, `src/components/form/inputText.vue`, ...) and translates it into the idiomatic React equivalent. No toy examples.
- **The port is real, the data is mocked** — no dependency on the SourceApp backend, so progress is never blocked by auth or API availability.
- **Retrieval practice over re-reading** — each lesson ends with a quiz; answers are session-tracked and can be copied back to the teacher agent for your learning records.

## Progress

Lessons completed so far map a Vue2 developer's known world onto React:

1. **The component model** — Vue SFC → React function component (`data()` → `useState`, `v-if` → `&&`, `@click` → `onClick`).
2. **State & effects** — `created()`/`mounted()`/`watch`/`beforeDestroy()` → `useEffect` with a dependency array and a returned cleanup function.
3. **Props flow & lifting state** — `$emit` → callback props; shared state lives in the closest common parent.
4. **Controlled inputs** — `v-model` → `value` + `onChange` (and immutable state updates).

The `demo-react-app` already contains a working app shell (`AppShell`, `ShellHeader`, `ShellFooter`) with translated views/components (`Home`, `MyTraining`, `Pagination`, `MembersAddUser`, `TeamGreeting`).

## Running the demo app

```bash
cd demo-react-app
npm install
npm run dev
```

## Thanks

The lessons are authored and adapted with the assistance of an AI teaching agent that reads the SourceApp source directly and grounds every lesson in its real code.

License: MIT (see `LICENSE`).