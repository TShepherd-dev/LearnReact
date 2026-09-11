# Completed lesson 0002: Lifecycle → effects

Tim worked through Lesson 0002 (translating `MyTraining.vue`'s `created()`/`mounted()`/`watch`/`beforeDestroy()` into React `useEffect` + cleanup) and scored **3/3** on the retrieval quiz from memory via the copy-results widget:

- Correct: run-once code → `useEffect` with empty deps
- Correct: `beforeDestroy` timer teardown → returning a cleanup fn from the effect
- Correct: the dep array controls when an effect re-runs (deps value changes trigger re-run)

## Evidence
Quiz results block pasted with 3/3 correct across all four lifecycle-shaped hooks (created/mounted/watch/beforeDestroy → one run-once effect + returned cleanup + a separate `[searchParams]` effect for the route watch).

## Implications
Tim holds the hardest conceptual leap in React — that there is no lifecycle, only effects that sync against a dep array, and that setup/teardown live in one coupled block. The cleanup-function answer (Q2) is the single most important React interview answer and he has it cold.

Next lesson can move from "read a lifecycle into effects" to actually composing state between components: **Lesson 0003 — props flow and lifting state** (`$emit` → callback props, parent holds state and passes value + setter down), still against real SourceApp files. After that the Vite+TS app shell scaffold.

## Status
Lesson 0002 delivered, quiz complete 3/3, learning recorded. No remediation.