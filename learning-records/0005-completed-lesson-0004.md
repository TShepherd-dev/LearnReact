# Completed lesson 0004: Controlled inputs

Tim worked through Lesson 0004 (translating `v-model` → React controlled inputs, grounded in `inputText.vue` → `membersAddUserModal.vue`) and scored **3/3** on the retrieval quiz from memory via the copy-results widget:

- Correct: `v-model` expands to `:value` + `@input`
- Correct: input text state lives in component state (`useState`), not the DOM
- Correct: the React spelling of the handshake is `value` + `onChange`

## Evidence
Quiz results block pasted with 3/3 correct, same session as delivery (fluency). One note: the lesson 0004 quiz originally had a malformed-quiz bug — an unescaped apostrophe in `input's` inside the single-quoted `data-quiz` attribute truncated the attribute in the browser; fixed by escaping as `input&#39;s`. Worth remembering when authoring future quizzes: **escape apostrophes in `data-quiz` JSON or the widget shows "Quiz data is malformed."**

## Implications
The component toolkit is complete: structure (01), behavior/effects (02), communication/ownership (03), and data entry (04). Tim has now seen the four most common Vue→React translations and nails all retrieval quizzes.

A significant milestone: the `demo-react-app/` now exists with a working Vite + React app shell (`AppShell.jsx`, `_shell/ShellHeader.jsx`, `_shell/ShellFooter.jsx`) and translated frontend views/components (`Home`, `MyTraining`, `Pagination`, `MembersAddUser`, `TeamGreeting`) matching the lessons. Note the current shell is **.jsx (plain JS)** — the agreed toolchain is Vite + **TypeScript**, so the natural next step is:
- **Lesson 0005: Vite + TypeScript app shell** — standing up the real project in TS, wiring the Home page + shell (menu, layout, store wiring) with mock data, matching MISSION.md's success criteria.

## Status
Lesson 0004 delivered, quiz complete 3/3, learning recorded. No remediation.