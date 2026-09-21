# Completed lesson 0008: Home page + mock data

Tim worked through Lesson 0008 (owning page loading with `useEffect` + local state, widgets as prop-receivers, the mock-data contract) and scored **2/3** on the retrieval quiz via the copy-results widget:

- Correct: who loads the data a page needs → the page itself
- Correct: how widgets get the data they render → as props
- **Wrong: when to bring in the real backend → picked "branch new app", correct answer was "swap the import"**

## Evidence
Quiz results block pasted: 2/3, Q1 C and Q2 A correct, Q3 B wrong.

## Analysis
First score below 3/3 across all eight lessons. The miss is on the mock-data *pay-off* (the golden rule's punchline: because the mock returns the real API shape, swapping it for the real backend is a one-line import change — the component never knows the difference). Q1 and Q2 on the mechanism (page owns loading, widgets receive props) are both correct, so this looks like a **retrieval miss on a specific punchline**, not a conceptual gap — but it's exactly the storage-strength signal the quizzes exist to surface. The "branch new app" pick suggests the *why-it-matters* framing of the mock contract didn't fully stick.

## Implications
- Brief spaced-retrieval recheck on the mock-data contract before moving on: one targeted question on the swap-the-import payoff, ideally folded into lesson 0009's opening retrieval or recap.
- Lesson 0009 (page state & loading: loading/empty/error/retry) builds directly on this — Tim owns the loading pattern now; next lesson should reinforce the "data source is swappable" principle while adding the error/retry dimensions.

## Status
Lesson 0008 delivered, quiz 2/3, one punchline to reinforce via spacing. Proceed to Lesson 0009 with a targeted retrieval recheck.