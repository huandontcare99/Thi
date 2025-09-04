/* Quiz Master - app.js
 * Mobile-first, không phụ thuộc parser ngoài.
 * Chỉ cần data.js (window.quizData.getAll()).
 */
(() => {
  "use strict";

  // ====== Helpers ======
  const $ = (id) => document.getElementById(id);
  const escapeTxt = (s) => (s == null ? "" : String(s));
  const norm = (s) =>
    escapeTxt(s)
      .toLowerCase()
      .replace(/\s+/g, " ")
      .replace(/[.]+$/g, "")
      .trim();

  // Robust guard: chỉ lấy element khi đã có DOM
  document.addEventListener("DOMContentLoaded", init);

  const state = {
    bank: [], // [{subject, questions:[{q, opts:[{t,letter}], correct}]}]
    questions: [],
    order: [],
    pickCount: 0,
    current: 0,
    answers: {}, // idx -> optIndex
    marked: new Set(),
    started: false,
    mode: "practice",
    timerId: null,
    endAt: 0,
  };

  // ====== Parse raw text from data.js ======
  function parseSubject(rawText, subjectName) {
    const text = String(rawText || "");
    const blocks = [];
    const re = /Câu\s+\d+:[\s\S]*?(?=^\-+|\u2014{3,}|$)/gim; // tới dòng gạch ---------- hoặc hết
    let m;
    while ((m = re.exec(text)) !== null) blocks.push(m[0]);

    const questions = blocks.map((blk) => {
      // Question
      let qMatch = blk.match(/^Câu\s+\d+:\s*([\s\S]*?)\s*Đáp án đúng:/im);
      const q = qMatch ? qMatch[1].trim() : blk.trim();

      // Correct text (fallback)
      let aTxt = "";
      const ansLine = blk.match(/Đáp án đúng:\s*([\s\S]*?)(?:\n|$)/i);
      if (ansLine) aTxt = ansLine[1].trim();

      // Options
      const opts = [];
      let correct = -1;
      const optRe = /^\s*([ABCD])\.\s*(?:✓\s*)?(.+?)\s*$/gim;
      let mo;
      while ((mo = optRe.exec(blk)) !== null) {
        const letter = mo[1].toUpperCase();
        const text = mo[2].replace(/\s+/g, " ").trim();
        // Dòng thực sự đúng thường có ký hiệu ✓. Ta cũng đối chiếu với "Đáp án đúng:"
        const hadCheck = /([ABCD])\.\s*✓/i.test(mo[0]);
        opts.push({ t: text, letter });
        if (hadCheck) correct = opts.length - 1;
      }

      if (correct < 0 && aTxt && opts.length) {
        const needle = norm(aTxt);
        const idx = opts.findIndex((o) => norm(o.t) === needle);
        if (idx >= 0) correct = idx;
      }
      // Nếu vẫn chưa xác định được, mặc định 0 để không crash
      if (correct < 0) correct = 0;

      return { q, opts, correct };
    });

    return { subject: subjectName, questions };
  }

  // ====== UI Build ======
  function buildSubjectSelect() {
    const sel = $("subject");
    if (!sel) return;
    sel.innerHTML = "";
    state.bank.forEach((b, i) => {
      const opt = document.createElement("option");
      opt.value = String(i);
      opt.textContent = `${b.subject} (${b.questions.length} câu)`;
      sel.appendChild(opt);
    });
  }

  function buildNumberGrid() {
    const makeBtn = (idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className =
        "num w-10 h-10 rounded-xl border border-slate-800 bg-slate-900 text-sm";
      btn.textContent = String(idx + 1);
      btn.dataset.idx = String(idx);
      btn.onclick = () => goTo(idx);
      return btn;
    };

    const grids = [$("numberGrid"), $("numberGridMobile")].filter(Boolean);
    grids.forEach((root) => {
      root.innerHTML = "";
      for (let i = 0; i < state.pickCount; i++) root.appendChild(makeBtn(i));
    });
  }

  function paintNumberGrid() {
    const markAnswered = (btn, i) => {
      const answered = state.answers[i] != null;
      btn.classList.toggle("answered", answered);
      btn.classList.toggle("current", i === state.current);
      btn.classList.toggle("marked", state.marked.has(i));
    };
    document
      .querySelectorAll("#numberGrid .num, #numberGridMobile .num")
      .forEach((btn) => {
        const i = Number(btn.dataset.idx);
        markAnswered(btn, i);
      });
  }

  function renderQuestion() {
    const idx = state.current;
    const { q, opts } = state.questions[idx];

    $("qIndex").textContent = `Câu ${idx + 1}/${state.pickCount}`;
    $("question").textContent = q;

    const ul = $("answers");
    ul.innerHTML = "";
    opts.forEach((op, i) => {
      const li = document.createElement("li");
      li.className = "ans";
      const id = `q${idx}_opt${i}`;

      li.innerHTML = `
        <input id="${id}" type="radio" name="q${idx}" class="peer sr-only" />
        <label for="${id}" class="ans-label">
          <span class="letter">${op.letter}.</span>
          <span class="text"></span>
        </label>
      `;
      li.querySelector(".text").textContent = op.t;
      ul.appendChild(li);

      li.querySelector("input").addEventListener("change", () => {
        state.answers[idx] = i;
        updateProgress();
        paintNumberGrid();
        $("clear").disabled = false;
      });
    });

    // khôi phục lựa chọn nếu có
    const chosen = state.answers[idx];
    if (chosen != null) {
      const input = document.getElementById(`q${idx}_opt${chosen}`);
      if (input) input.checked = true;
      $("clear").disabled = false;
    } else {
      $("clear").disabled = true;
    }

    $("prev").disabled = idx === 0;
    $("next").disabled = idx >= state.pickCount - 1;
    $("mark").disabled = false;

    paintNumberGrid();
  }

  function updateBadges() {
    const sb = $("subjectBadge");
    const mb = $("modeBadge");
    sb.textContent = state.bank[$("subject").value]?.subject || "—";
    mb.textContent = $("mode").value === "exam" ? "Thi" : "Luyện tập";
  }

  function updateProgress() {
    const answered = Object.keys(state.answers).length;
    const total = state.pickCount;
    $("progressText").textContent = `${answered}/${total}`;
    const pct = total > 0 ? Math.round((answered / total) * 100) : 0;
    $("progressBar").style.width = pct + "%";

    $("submit").disabled = answered === 0;
  }

  function goTo(i) {
    if (i < 0 || i >= state.pickCount) return;
    state.current = i;
    renderQuestion();
  }

  function startTimer(minutes) {
    if (state.timerId) clearInterval(state.timerId);
    if (!minutes || minutes <= 0) {
      $("timer").textContent = "00:00";
      return;
    }
    const end = Date.now() + minutes * 60 * 1000;
    state.endAt = end;
    const tick = () => {
      const remain = Math.max(0, end - Date.now());
      const mm = String(Math.floor(remain / 60000)).padStart(2, "0");
      const ss = String(Math.floor((remain % 60000) / 1000)).padStart(2, "0");
      $("timer").textContent = `${mm}:${ss}`;
      if (remain <= 0) {
        clearInterval(state.timerId);
        finish();
      }
    };
    tick();
    state.timerId = setInterval(tick, 1000);
  }

  // ====== Actions ======
  function start() {
    // lấy bank theo subject
    const sbIdx = Number($("subject").value || 0);
    const bank = state.bank[sbIdx];
    if (!bank || !bank.questions.length) return;

    const count = Math.max(
      1,
      Math.min(Number($("count").value || bank.questions.length), bank.questions.length)
    );

    // clone & shuffle bank
    let qs = bank.questions.slice();
    if ($("shuffle").checked) qs = shuffle(qs.map((x) => cloneAndShuffleOpts(x)));

    state.questions = qs.slice(0, count);
    state.pickCount = state.questions.length;
    state.order = [...Array(state.pickCount).keys()];
    state.current = 0;
    state.answers = {};
    state.marked.clear();
    state.started = true;
    state.mode = $("mode").value;

    updateBadges();
    buildNumberGrid();
    updateProgress();
    renderQuestion();

    ["next", "prev", "clear", "mark", "submit"].forEach((id) => {
      $(id).disabled = false;
    });

    startTimer(Number($("duration").value || 0));
    $("result").hidden = true;
    $("retry").hidden = true;
    $("reviewWrong").hidden = true;
  }

  function clearChoice() {
    const idx = state.current;
    delete state.answers[idx];
    renderQuestion();
    updateProgress();
  }

  function toggleMark() {
    const i = state.current;
    if (state.marked.has(i)) state.marked.delete(i);
    else state.marked.add(i);
    paintNumberGrid();
  }

  function next() {
    if (state.current < state.pickCount - 1) goTo(state.current + 1);
  }
  function prev() {
    if (state.current > 0) goTo(state.current - 1);
  }

  function finish(showWrongOnly = false) {
    if (!state.started) return;
    if (state.timerId) clearInterval(state.timerId);

    // chấm điểm
    let correct = 0;
    const rows = [];
    state.questions.forEach((q, i) => {
      const chosen = state.answers[i];
      const ok = chosen === q.correct;
      if (ok) correct++;
      if (!showWrongOnly || !ok) {
        rows.push(
          `<div class="mb-3 rounded-xl border border-slate-800 bg-slate-900 p-3">
             <div class="mb-2 text-sm text-slate-400">Câu ${i + 1}</div>
             <div class="mb-2">${escapeTxt(q.q)}</div>
             <ul class="space-y-1 text-sm">
               ${q.opts
                 .map((op, idx) => {
                   const isC = idx === q.correct;
                   const isU = idx === chosen;
                   const cls = isC
                     ? "badge-correct"
                     : isU
                       ? "badge-wrong"
                       : "badge-ghost";
                   return `<li><span class="${cls}">${op.letter}</span> ${escapeTxt(
                     op.t
                   )}</li>`;
                 })
                 .join("")}
             </ul>
           </div>`
        );
      }
    });

    const score = Math.round((correct / state.pickCount) * 100);
    $("result").innerHTML = `
      <div class="mb-3 flex flex-wrap items-center gap-2">
        <div class="rounded-xl bg-gradient-to-b from-brand-500 to-brand-600 px-3 py-1.5 font-semibold text-slate-950 shadow-soft">
          Điểm: ${correct}/${state.pickCount} (${score}%)
        </div>
        <div class="rounded-xl border border-slate-800 bg-slate-900 px-3 py-1.5 text-slate-300">
          Chế độ: ${state.mode === "exam" ? "Thi" : "Luyện tập"}
        </div>
      </div>
      ${rows.join("")}
    `;
    $("result").hidden = false;
    $("retry").hidden = false;
    $("reviewWrong").hidden = false;

    // khóa điều khiển để không “tự load đề mới”
    ["next", "prev", "clear", "mark", "submit"].forEach((id) => {
      $(id).disabled = true;
    });
  }

  function retry() {
    $("result").hidden = true;
    start();
  }

  // ====== Utils ======
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = (Math.random() * (i + 1)) | 0;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  function cloneAndShuffleOpts(q) {
    const c = { q: q.q, opts: q.opts.map((o) => ({ ...o })), correct: q.correct };
    // ghi nhớ đáp án đúng theo hoán vị
    const order = [...Array(c.opts.length).keys()];
    shuffle(order);
    const newOpts = order.map((i) => c.opts[i]);
    const newCorrect = order.indexOf(c.correct);
    c.opts = newOpts;
    c.correct = newCorrect;
    return c;
  }

  // ====== Init ======
  function init() {
    // Lấy data từ data.js
    const all = (window.quizData && window.quizData.getAll && window.quizData.getAll()) || [];
    state.bank = all.map((it) => parseSubject(it.text, it.subject));

    // Build subject select
    buildSubjectSelect();
    // Prefill
    $("subject").value = "0";
    $("count").value = String(state.bank[0]?.questions.length || 50);
    updateBadges();

    // Bind events
    $("subject").addEventListener("change", () => {
      $("count").value = String(
        state.bank[$("subject").value]?.questions.length || 1
      );
      updateBadges();
    });
    $("mode").addEventListener("change", updateBadges);
    $("start").addEventListener("click", start);
    $("next").addEventListener("click", next);
    $("prev").addEventListener("click", prev);
    $("clear").addEventListener("click", clearChoice);
    $("mark").addEventListener("click", toggleMark);
    $("submit").addEventListener("click", () => finish(false));
    $("retry").addEventListener("click", retry);
    $("reviewWrong").addEventListener("click", () => finish(true));
  }
})();
