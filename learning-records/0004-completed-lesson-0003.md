# Completed lesson 0003: Props flow & lifting state

Tim worked through Lesson 0003 (translating the `pagination.vue` → `assignment.vue` parent/child handshake into React props + callbacks, and the concept of lifting shared state to the common parent) and scored **3/3** on the retrieval quiz from memory via the copy-results widget:

- Correct: child → parent communication → calling a prop callback
- Correct: two siblings sharing a value → value lives in their common parent
- Correct: `$emit('onPage', page)` → an `onPage` prop the child calls

## Evidence
Quiz results block pasted with 3/3 correct, immediately (no spacing gap this time — same session as delivery).

## Implications
The props-down / callbacks-up mental model has landed. Tim correctly articulated the two hardest parts of this lesson unprompted through the quiz: that events become props (Q1/Q3) and that React forces "who owns this value?" to be answered explicitly via lifting state (Q2).

Three lessons in, the component triad is in place: structure (Lesson 01), behavior/effects (Lesson 02), and communication/ownership (Lesson 03). The natural next step is the last piece of core component behavior — **Lesson 0004: controlled inputs**, what replaces `v-model` (`value` + `onChange`), still grounded in a real source form component (e.g. `inputText.vue` / `showCompleted.vue`, which emit `input-change`/`update`). After that: scaffold the Vite + TypeScript React app shell.

## Status
Lesson 0003 delivered, quiz complete 3/3, learning recorded. No remediation.