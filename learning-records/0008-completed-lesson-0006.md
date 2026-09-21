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

## Follow-up: reducer concept deepened (spaced retrieval, post-lesson)
Tim came back to the reducer idea after the lesson — asked what a "reducer type C# scenario" looks like in his own .NET codebase, then for a deeper reducer explanation (C# + JS), then a real-world "where would I use one" scenario. He verified it against his own code: searched `Core\6.X\DLLS\AP-CoreDlls-6.5.X` and confirmed **no reducer-style patterns exist there currently** (no `(state, action) => newState`, no Apply-aggregates, no state machines — only an unrelated Swagger `Apply`, a trivial Aggregate string-join, and mutable status enums written imperatively via repo/DAL).

To ground the concept in his real domain, Lesson 0006 was expanded with:
- A C# shopping-cart reducer (`CartState`/`CartAction`, `action switch`, immutable `with`) + the identical JS `cartReducer`/`useReducer`.
- A "Where would you actually reach for a reducer?" rule of thumb.
- A **worked example using his real challenge-status workflow** (`upcoming → live → ended`, driven by `ChallengesWorkflowJob`): current blunt SQL+repo-write vs a `ChallengeStatusTransitions.Apply(current, trigger)` reducer — with the honest note that his codebase genuinely doesn't *need* a reducer today (simple one-directional cron-driven status), matching pattern to problem.

His closing comprehension statement (verbatim): "I give it the current state and what is triggering the state to be changed, and the reducer function works out what the new state is to return." He confirmed the purity/side-effect split: reducer *determines*, other code persists (in C# the caller writes to repo; in React dispatch stores returned state → re-render). Strong storage-strength evidence the reducer mental-model has landed, not just fluency.