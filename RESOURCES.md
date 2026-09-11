# ReactJS Resources

Curated, high-trust sources for learning real-world React by translating the SourceApp Vue2 app into a Vite + TypeScript React app. Grouped by Knowledge (what to learn) and Wisdom (who to learn with).

## Knowledge

- [Official React Docs (react.dev / Learn)](https://react.dev/learn)
  The authoritative primary source. "Components are JavaScript functions... Learning React is learning programming." Use for: the definitive explanation of any React concept — JSX, components, props, state, hooks, TypeScript, "Thinking in React". Primary reading for lessons.
  - [Thinking in React](https://react.dev/learn/thinking-in-react): the canonical mental model for where state should live and one-way data flow. Foundational for a Vue developer.
  - [Learn TypeScript](https://react.dev/learn/typescript): typing components, hooks, and common `@types/react` types. Use for: every TS lesson.
  - [Rules of React (components & hooks)](https://react.dev/reference/rules/react-calls-components-and-hooks): why React calls components and Hooks — the discipline that replaces Vue's magic. Use for: understanding render lifecycle and hook rules.
  - [Build a React app from scratch](https://react.dev/learn/build-a-react-app-from-scratch): Vite + React install and the SPA feature list (routing, data fetching, code splitting) the ecosystem must supply.

- [The React Bible: Crash Course for Vue 3 Developers](https://github.com/maxart/react-crash-course)
  A free web app explicitly mapping Vue concepts to React equivalents across 24 sections (mental model shift, JSX, props vs emit, state/hooks, effects vs lifecycle, routing, state management, TypeScript, Vue→React translation table). Use for: direct Vue→React translations and the glossary. Perfect fit for this mission's translation-heavy approach.

- [Vue for React Programmers (Cloud Contraptions, Eric Greene)](https://www.cloudcontraptions.com/courses/frameworks/vue/vue-for-react-programmers/)
  Formal course translating React↔Vue (JSX↔SFC templates, hooks↔Composition API, state management↔Pinia, routing). It's the reverse direction but an excellent side-by-side mapping reference. Use for: confirming idiomatic equivalents.

- [React Ecosystem (2026 state of the art) — Wecon "React in 2026" guide](https://wecon.dev/en/blog/articles/react-in-2026-the-complete-guide-hooks-server-components-concurrent-features-beyond-1)
  Current-state overview: React 19+, hooks reference, useReducer, TanStack Query for server state, Zustand/Redux for client state, feature-based folder structure, React Router. Use for: knowing which ecosystem libraries are load-bearing in 2026 and how Vue concepts (Vuex, axios) map (Zustand, TanStack Query).

- [Scrimba — Compare React courses (2026)](https://scrimba.com/articles/best-react-courses-and-tutorials-compared-2026/)
  Meta-review of where to go deeper paid/free (Epic React, Scrimba Advanced React, Full Stack Open). Use for: deciding on optional paid depth later, and confirming currency (React 19.2 is current stable as of 2026).

## Wisdom (Communities)

- [r/reactjs (Reddit)](https://www.reddit.com/r/reactjs/)
  Large, active, well-moderated React community. Use for: getting real-world feedback on architecture decisions, "is this idiomatic React?" sanity checks.
- [Reactiflux Discord](https://www.reactiflux.com/)
  The largest React developer chat community, with channels for React, hooks, state management, and career/jobs. Use for: live Q&A when stuck and for gauging what real React shops care about.
- [TypeScript Community Discord](https://discord.com/invite/typescript)
  Referenced by the React TypeScript docs. Use for: TS-specific questions in React.
- Local: the Australian .NET/developer meetup scene (e.g. Sydney/Melbourne tech meetups) — a good place to discuss Vue/React migration in person. _Note: only pursue if Tim wants in-person/community contact; check preference first._

## Gaps
- No single trusted, current (2026) primary source dedicated entirely to **migrating a Vue2+Vuex SPA to React** — the mapping tables available (react-crash-course, VuReact guide) are Vue3-focused and partial. This workspace's slice-by-slice port of SourceApp is filling that gap itself; lessons should record findings as learning records.
