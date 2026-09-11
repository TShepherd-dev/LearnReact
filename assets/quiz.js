/* Reusable retrieval-practice quiz widget for LearnReact lessons.
   Usage:
     <div class="quiz" data-quiz='[
       {"q":"Question text","o":["Option A","Option B","Option C"],"a":0,"why":"explanation shown on reveal"},
       ...
     ]'></div>
     <script src="../assets/quiz.js"></script>

   Features:
   - Immediate feedback per question (ok/bad classes + explanation).
   - Session tracking: answers are held in sessionStorage keyed by page, so
     revisiting a lesson within the same browser session restores your picks.
     Storage is guarded; if it fails the quiz still works.
   - Results never leave the browser automatically. When every question on the
     page is answered, a summary bar appears with a "Copy my results" button.
     The copied text is meant to be pasted back to the agent so answers can be
     recorded in the learning records.
   - Navigation reminder: clicking an internal lesson/reference link while a
     completed quiz has not yet been copied shows a small dialog offering to
     "copy and move on", "move on without saving", or stay.

   All options per question should be equal-length where possible (equal word
   count) to avoid hinting at the answer through formatting.
   (b1) ensured: (a) built from this file. */
(function () {
  "use strict";

  var DATA_KEY = "data-quiz";
  var STORE_PFX = "learnreact.quiz.";

  var quizHosts = []; // { host, data, saved:[{picked,correct}], done, summaryEl }
  var pageCopied = false;
  var stateKey = "";
  var dialogEl = null;

  function storeKey() {
    try { return STORE_PFX + window.location.pathname; }
    catch (e) { return STORE_PFX + "page"; }
  }

  function loadState() {
    try {
      var raw = sessionStorage.getItem(stateKey);
      return raw ? JSON.parse(raw) : null;
    } catch (e) { return null; }
  }

  function saveState() {
    try {
      var payload = { copied: pageCopied, quizzes: quizHosts.map(hostSavedState) };
      sessionStorage.setItem(stateKey, JSON.stringify(payload));
    } catch (e) { /* storage unavailable; answers keep working in-memory */ }
  }

  function hostSavedState(e) {
    return { saved: e.saved };
  }

  function letter(i) { return String.fromCharCode(65 + i); }

  function scoreFor(e) {
    var ok = 0, total = 0;
    e.saved.forEach(function (s) { if (s.picked !== null && s.picked !== undefined) { total++; if (s.correct) ok++; } });
    return { ok: ok, total: total };
  }

  function allAnswered(e) {
    return e.saved.every(function (s) { return s.picked !== null && s.picked !== undefined; });
  }

  /* ---- card building ---- */

  function buildEntry(host, data) {
    var e = {
      host: host,
      data: data,
      saved: data.map(function () { return { picked: null, correct: false }; }),
      btns: [],         // btns[qi] = array of option buttons for question qi
      done: false,
      summaryEl: null,
      scoreEl: null,
      copiedEl: null
    };
    quizHosts.push(e);
    return e;
  }

  function buildCards(e) {
    e.data.forEach(function (q, qi) { buildCard(e, q, qi); });
  }

  function buildCard(e, q, qi) {
    var host = e.host;
    var card = document.createElement("div");
    card.className = "quiz-card";
    var qh = document.createElement("p");
    qh.className = "quiz-q";
    qh.textContent = (qi + 1) + ". " + q.q;
    card.appendChild(qh);

    var opts = document.createElement("div");
    opts.className = "quiz-opts";
    var buttons = [];
    var answered = false;

    function select(oi, btn) {
      if (answered) return;
      answered = true;
      var correct = oi === q.a;
      e.saved[qi] = { picked: oi, correct: correct };
      btn.classList.add(correct ? "ok" : "bad");
      for (var i = 0; i < buttons.length; i++) buttons[i].disabled = true;
      var res = document.createElement("p");
      res.className = "quiz-result " + (correct ? "ok" : "bad");
      res.textContent = correct ? "Correct." : "Not quite.";
      card.appendChild(res);
      if (q.why) {
        var why = document.createElement("p");
        why.className = "quiz-why";
        why.textContent = q.why;
        card.appendChild(why);
      }
      onAnswered(e);
    }

    q.o.forEach(function (opt, oi) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "quiz-opt";
      btn.textContent = opt;
      btn.addEventListener("click", function () { select(oi, btn); });
      opts.appendChild(btn);
      buttons.push(btn);
    });
    e.btns[qi] = buttons;
    card.appendChild(opts);
    host.appendChild(card);
  }

  /* ---- summary + copy ---- */

  function onAnswered(e) {
    e.done = allAnswered(e);
    renderSummary(e);
    saveState();
  }

  function renderSummary(e) {
    if (!e.done) return;
    if (!e.summaryEl) {
      var el = document.createElement("div");
      el.className = "quiz-summary";
      var score = document.createElement("span");
      score.className = "quiz-score";
      var copyBtn = document.createElement("button");
      copyBtn.type = "button";
      copyBtn.className = "quiz-copy";
      copyBtn.addEventListener("click", doCopy);
      var copied = document.createElement("span");
      copied.className = "quiz-copied";
      el.appendChild(score);
      el.appendChild(copyBtn);
      el.appendChild(copied);
      e.host.appendChild(el);
      e.summaryEl = el;
      e.scoreEl = score;
      e.copiedEl = copied;
    }
    var s = scoreFor(e);
    e.scoreEl.textContent = s.ok + "/" + s.total + " correct";
    var btn = e.summaryEl.querySelector(".quiz-copy");
    if (pageCopied) {
      btn.disabled = true;
      btn.textContent = "Copied";
    } else {
      btn.disabled = false;
      btn.textContent = "Copy my results";
    }
    e.copiedEl.textContent = pageCopied ? "Copied — thanks! Go ahead." : "";
  }

  function buildCopyText() {
    var out = [];
    out.push("LearnReact quiz results — " + document.title);
    out.push("Source: " + window.location.pathname);
    quizHosts.forEach(function (e) {
      e.data.forEach(function (q, qi) {
        var s = e.saved[qi];
        if (s.picked === null || s.picked === undefined) return;
        var pickedTxt = q.o[s.picked];
        if (s.correct) {
          out.push("Q" + (qi + 1) + " — Correct: " + letter(s.picked) + " · \"" + pickedTxt + "\"");
        } else {
          out.push("Q" + (qi + 1) + " — Wrong: picked " + letter(s.picked) + " \"" + pickedTxt + "\" · correct: " + letter(q.a) + " \"" + q.o[q.a] + "\"");
        }
      });
    });
    return out.join("\n");
  }

  function markCopied() {
    pageCopied = true;
    quizHosts.forEach(renderSummary);
    saveState();
  }

  function doCopy() {
    return copyText(buildCopyText()).then(markCopied).catch(function () {
      // Even if the clipboard write failed, treat it as done so navigation is not blocked forever.
      markCopied();
    });
  }

  function copyText(text) {
    if (window.isSecureContext && navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text).catch(function () { return legacyCopy(text); });
    }
    return legacyCopy(text);
  }

  function legacyCopy(text) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.top = "-1000px";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    var ok = false;
    try { ok = document.execCommand("copy"); } catch (err) { ok = false; }
    document.body.removeChild(ta);
    return ok ? Promise.resolve() : Promise.reject(new Error("copy failed"));
  }

  /* ---- navigation reminder dialog ---- */

  function pendingUncopied() {
    if (pageCopied) return null;
    var total = { ok: 0, count: 0 };
    var anyDone = false;
    quizHosts.forEach(function (e) {
      if (e.done) {
        anyDone = true;
        var s = scoreFor(e);
        total.ok += s.ok;
        total.count += s.total;
      }
    });
    return anyDone ? total : null;
  }

  function internalLink(href) {
    return /\.html(?:#.*)?$/.test(href);
  }

  function ensureDialog() {
    if (dialogEl) return dialogEl;
    var bd = document.createElement("div");
    bd.className = "quiz-dialog-backdrop";
    bd.hidden = true;
    bd.innerHTML =
      '<div class="quiz-dialog" role="dialog" aria-modal="true" aria-labelledby="quiz-dialog-title">' +
      '<h3 id="quiz-dialog-title">Un-saved quiz results</h3>' +
      '<p class="quiz-dialog-note"></p>' +
      '<div class="quiz-dialog-actions">' +
      '<button type="button" data-nav="copy">Copy results &amp; move on</button>' +
      '<button type="button" data-nav="skip">Move on without saving</button>' +
      '<button type="button" data-nav="stay">Stay here</button>' +
      '</div></div>';
    bd.addEventListener("click", function (ev) {
      if (ev.target === bd) bd.hidden = true;
    });
    document.body.appendChild(bd);
    dialogEl = bd;
    return bd;
  }

  function showDialog(targetHref) {
    var bd = ensureDialog();
    var note = bd.querySelector(".quiz-dialog-note");
    var unc = pendingUncopied();
    note.textContent = unc
      ? ("You got " + unc.ok + "/" + unc.count + " correct on this lesson's quiz but haven't copied the results to your teacher yet.")
      : "You completed a quiz but haven't copied the results to your teacher yet.";
    bd.querySelector('[data-nav="copy"]').onclick = function () {
      doCopy().finally(function () { window.location.href = targetHref; });
    };
    bd.querySelector('[data-nav="skip"]').onclick = function () {
      window.location.href = targetHref;
    };
    bd.querySelector('[data-nav="stay"]').onclick = function () {
      bd.hidden = true;
    };
    bd.hidden = false;
  }

  /* ---- global ---- */

  document.addEventListener("click", function (ev) {
    var a = ev.target.closest ? ev.target.closest("a[href]") : null;
    if (!a) return;
    if (!internalLink(a.getAttribute("href") || "")) return;
    if (!pendingUncopied()) return;
    ev.preventDefault();
    showDialog(a.href);
  });

  function restoreAll() {
    var st = loadState();
    if (!st) return;
    pageCopied = !!st.copied;
    if (Array.isArray(st.quizzes)) {
      st.quizzes.forEach(function (qs, hi) {
        var e = quizHosts[hi];
        if (!e || !qs || !qs.saved) return;
        qs.saved.forEach(function (s, qi) {
          if (s && s.picked !== null && s.picked !== undefined && e.btns[qi] && e.btns[qi][s.picked]) {
            e.btns[qi][s.picked].click();
          }
        });
      });
    }
    quizHosts.forEach(renderSummary);
    saveState();
  }

  window.addEventListener("DOMContentLoaded", function () {
    stateKey = storeKey();
    var hosts = document.querySelectorAll(".quiz");
    hosts.forEach(function (host) {
      var data;
      try { data = JSON.parse(host.getAttribute(DATA_KEY)); }
      catch (err) { host.textContent = "Quiz data is malformed."; return; }
      var e = buildEntry(host, data);
      buildCards(e);
    });
    restoreAll();
  });
})();