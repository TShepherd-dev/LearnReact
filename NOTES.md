# NOTES

## Career/prior knowledge
- 15+ years .NET backend developer (real-world, strong).
- Frontend: Vue2 + Vuex + vue-router + vue-i18n on a large production SPA (SourceApp). Comfortable with SPA concepts, state management, routing, components, i18n.
- NOT experienced with React.

## Mission
- Goal: learn real-world ReactJS. Both (a) employability in the Australian market (interviews + credible on-job React) and (b) a genuine chance it ships internally.

## Teaching approach (agreed)
- **Real port, mock data**: actually build a React app reimplementing an SourceApp slice, using mock data rather than the live backend.
- **First slice**: Home page + app shell (menu, layout, store wiring).
- **Toolchain**: Vite + TypeScript.
- Port slice-by-slice from the Vue codebase; never "Hello World" tutorials.
- Teaching is grounded in translating real Vue2 files in the SourceApp repo into idiomatic React.

## Source Vue codebase
- Path: `C:\Work\<private>\SOURCE-UI`
- Entry: `src/main.js`, `src/appMounter.js`, `src/router.js` -> `src/routers/core.js`, `src/store/index.js` (39 Vuex modules), `src/views/*.vue`, `src/components/*`.
- Uses Vue 2.7, Vuex 3, vue-router 3, vue-i18n 8, axios, Vite. `$t()` for i18n, rich route `meta` (permissions, breadcrumbs, uiMenu, tkeys).

## To remember while teaching
- Tim is a senior engineer — assume deep SPA/state/routing knowledge; teach React's *differences* and idioms, not web fundamentals.
- **Visual polish matters to Tim** (raised after lesson 0001: "the visual style could use some work but the content is fine"). Content correctness is not enough — the lesson/reference documents should look genuinely good. Treat the shared stylesheet as a first-class deliverable.
- **Settled lesson style (approved "stay with that"):** modern web-font look — Inter (body/headings) + JetBrains Mono (code) + Lora (blockquotes) loaded from Google Fonts with system fallbacks; white content card on a soft gradient page background; React cyan (#0ea5c9) vs Vue green (#1f9d63) accents; dark code blocks; code wraps (white-space: pre-wrap) to avoid horizontal scrollbars; layout is fluid and grows with the browser window. All in `assets/lesson.css`. Use `.body` wrapper div in every lesson/reference.
- Keep lessons short, one tangible win each, grounded in a real SourceApp file.
- Lessons so far: 0001 = SFC → function component (Home.vue); 0002 = lifecycle → useEffect (MyTraining.vue, quiz 3/3); 0003 = props flow / lifting state (pagination.vue → assignment.vue, quiz 3/3). Planned sequence: 0004 = controlled inputs (v-model → value+onChange), then Vite+TS app shell scaffold.
- **Quiz results flow (implemented lesson 0002):** static file pages can't push data back to the agent, so `assets/quiz.js` (1) stores answers in `sessionStorage` per page so revisits within a session restore your picks, (2) shows a "Copy my results" summary bar when a page's quiz is fully answered, and (3) intercepts internal `.html` links with an uncopied-completed-quiz reminder dialog ("copy & move on" / "move on without saving" / "stay"). The pasted text is the format I record in learning records. Clipboard uses `navigator.clipboard` on secure contexts, `document.execCommand` fallback on `file://`.
- Every claim needs a citation back to a high-trust resource in RESOURCES.md.
- Build toward durable (storage-strength) learning: retrieval practice, desirable difficulty.
