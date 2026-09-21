# Completed lesson 0009: Page state & loading

Tim worked through Lesson 0009 (page-owned loading/empty/error/retry states via one shared `load()`; the mock must be able to fail) and scored **2/3** on the retrieval quiz via the copy-results widget:

- Correct: building the mock well makes going live later mostly a **one-line import swap** (the recheck Q)
- Correct: in React a failed load reaches the page as **a rejected promise** (no central interceptor)
- **Wrong: why the Retry button calls the same `load()` as the effect → picked "it resets all state", correct was "one fetch one place"**

## Evidence
Quiz results block pasted: 2/3, Q1 B and Q2 C correct, Q3 A wrong.

## Analysis
Two things matter here:

1. **The spaced recheck landed.** Q1 deliberately re-tested Lesson 0008's missed punchline (mock contract → import swap), and Tim answered correctly this time. That is storage-strength evidence the recall-first recheck works — the 0008 miss is now stored, not just fluent.

2. **Q3 is a different, smaller miss — and it's about the *why*, not the *how*.** The options set that question up with two plausible answers: the reset side-effect ("it resets all state", what Tim picked) and the single-source-of-truth reason ("one fetch one place", the correct emphasis). Tim clearly understands *what* `load()` does (he picked the reset behaviour); what didn't land as the *primary takeaway* is the DRY motive — "the fetch exists once, not twice — that's all retry is." His answer isn't wrong behaviourally; it misses the lesson's emphasis.

This is the second consecutive miss (0008 Q3, 0009 Q3) and both are a pattern: **the miss is on the payoff/emphasis of a design choice, not the mechanism.** 0008's was fully recovered by the recheck; 0009's Q3 is recurrable with a reworded question (whose two middle options weren't distinguishable enough) plus one line of reinforcement next lesson.

## Implications
- Next lesson should open with a recall-first recheck of the 0009 Q3 emphasis ("retry is just running the one fetch again").
- When authoring future quizzes, ensure the correct option and the best distractor are NOT both true-sounding — the mechanism and the motive should be distinguishable.
- The overall state-machine (loading/empty/error/retry, page owns failure) is understood; the mechanism questions were both correct.

## Status
Lesson 0009 delivered, quiz 2/3, one why-emphasis to reinforce via spacing in lesson 0010. The 0008-import-swap concept is confirmed recovered (spaced recheck passed).

## Workspace proof (exercise confirmed)
Tim independently built the real-workspace exercise in `demo-react-app`: caused the error state at runtime, clicked Retry, and recovered to the main screen ("causing the error, then the retry returns the main screen"). The four-state machine is demonstrated working end-to-end in actual code, not just on paper — the strongest evidence yet for the page-owns-its-failure model.