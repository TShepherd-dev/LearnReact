# Mission: Real-World ReactJS

## Why
React is the dominant frontend framework in the Australian job market, and I want to be able to pass React interviews and write credible, real-world React on the job. I'm a 15+ year .NET backend developer with a solid Vue2 + Vuex frontend, so I'm not starting from scratch — I know how SPAs, state, routing and components work. The fastest, most durable route to real-world React skill is to actually build one: convert parts of my own large production Vue2 app (SourceApp) into React, rather than do toy "Hello World" tutorials.

## Success looks like
- I can read a real-world React codebase (components, hooks, state, router, data-fetching) and explain what each part does.
- I can translate a known Vue2 pattern (SFC, computed, watchers, Vuex, vue-router, i18n) into its idiomatic React equivalent without looking it up.
- I have a working Vite + TypeScript React app that reimplements the SourceApp Home page + app shell with mock data.
- I'm comfortable enough to discuss React architecture and tradeoffs in an Australian employer's interview.

## Constraints
- Learn by real coding on a real Vue codebase (SourceApp at `C:\Work\<private>\SOURCE-UI`), translated into React in this workspace.
- Initial build feeds on **mock data**, not the live SourceApp backend (so we're not blocked on backend availability/auth).
- Toolchain: **Vite + TypeScript**.
- Start with Home page + app shell as the first slice; expand from there.

## Out of scope
- Rewriting the entire SourceApp app in one go. We port it slice by slice (start: Home + shell).
- Learning to author the .NET/API backend — I already know that.
- Porting the admin/ content-builder side initially — that's a later exploration once core patterns are solid.
