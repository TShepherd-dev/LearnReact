# Completed lesson 0005: The Vite app shell

Tim worked through Lesson 0005 (translating `main.js` + `appMounter` + `frontend.vue` + `routers/core.js` into a Vite `main.jsx`, a `ShellLayout` with `<Outlet/>`, and an `App.jsx` route table) and scored **3/3** on the retrieval quiz from memory via the copy-results widget:

- Correct: `$mount("#app")` → `createRoot(el).render(<App/>)`
- Correct: `<router-view>` → an `<Outlet/>` element
- Correct: a page joins the header menu → add route meta data (the `meta.uiMenu` pattern driving both routes and nav)

## Evidence
Quiz results block pasted with 3/3 correct, same session as delivery.

## Implications
Tim has the shell mental model: no framework magic — the app is started by `createRoot().render()`, layout is a component wrapping `<Outlet/>`, and routing is data (a route table), not a constructor option. That "routing/layout are just components inside the tree" shift is the conceptual heart of lesson 0005 and he has it.

He should now do the real-workspace steps: `npm i react-router` in demo-react-app, add `ShellLayout.jsx` + route table in `App.jsx`, and the optional menuRoutes array (one table driving routes + nav). If he completes those, demo-react-app becomes the actual Vite-shell-wired port — the state-management lesson (0006) then plugs into that shell.

## Status
Lesson 0005 delivered, quiz complete 3/3, learning recorded. No remediation. (Lesson 0005 was reworked JS-first after the Vite+JS mission change — see learning record 0006-mission-change-vite-js-first.md.)