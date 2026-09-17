# Completed lesson 0006: State management (what replaces Vuex)

Tim worked through Lesson 0006 (translating `src/store/shell.js` + the root `store/index.js` into a React `useReducer` + Context slice, and Home.vue's `mapState/mapGetters/mapActions/mapMutations` into `useShell()`/`useShellDispatch()` hooks) and scored **3/3** on the retrieval quiz from memory via the copy-results widget:

- Correct: a Vuex module translates to a "context slice pair" (context file with provider + hooks)
- Correct: `commit("x", p)` becomes `dispatch({ type })` on the useReducer dispatch
- Correct: API responses belong in a query cache (server state), not a client store

## Evidence
Quiz results block pasted with 3/3 correct, same session as delivery.

## Implications
Tim absorbed the deepest Vuex→React shift: there is no global store object; state lives inside the component tree and is shared by lifting + Context, and the reducer's `dispatch` replaces `commit`. He also held the crucial 2026 distinction unprompted (Q3) — API data is server state owned by TanStack Query, not a client store. This was the trickiest conceptual leap of the course so far (his prior is Vuex-as-global-magic), and 3/3 shows the "state lives in components" model has landed.

Next: the planned Lesson 0007 (TypeScript JSX→TSX migration, fluid timing) turning the refactored demo-react-app typed. Readiness trigger per NOTES.md: when the JS app makes Tim wish the editor caught typo'd prop names — with the store wiring now in place, the port has enough real prop shapes for that payoff.

## Status
Lesson 0006 delivered, quiz complete 3/3, learning recorded. No remediation. Six lessons, six perfect scores.