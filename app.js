/* Quiz Master - app.js (mobile-first, chắc chắn không null DOM) */
(() => {
  "use strict";
  const $ = (id) => document.getElementById(id);

  const state = {
    bank: [],          // [{subject, questions:[{q, opts:[{t,letter}], correct}]}]
    questions: [],
    pickCount: 0,
    current: 0,
    answers: {},       // idx -> optIndex
    marked: new Set(),
    mode: "practice",
    timerId: null,
    endAt: 0
  };

  document.addEventListener("DOMContentLoaded", init);

  // ---------- PARSER ----------
  function parseSubject(raw, subjectName) {
    const text = String(raw || "");
    const blocks = [];
    // Cắt từng "Câu ... ----" (dấu gạch dài trong file của bạn)
    const re = /(^|\n)Câu\s+\d+:[\s\S]*?(?=\n[-=]{6,}\s*\n|$)/gim;
    let m;
    while ((m = re.exec(text)) !== null) {
      blocks.push(m[0]);
    }

    const questions = blocks.map((blk) => {
      // Lấy câu hỏi
      const qm = blk.match(/^Câu\s+\d+:\s*([\s\S]*?)\s*Đáp án đúng:/im);
      const q = (qm ? qm[1] : blk).trim();

      // Lấy options A-D
      const opts = [];
      let correct = -1;
      const optRe = /^\s*([ABCD])\.\s*(.*)$/gim;
      let om;
      while ((om = optRe.exec(blk)) !== null) {
        let letter = om[1].toUpperCase();
        let textLine = om[2].trim();
        const hasTick = /✓/.test(textLine);
        textLine = textLine.replace(/^✓\s*/,"").replace(/\s*✓\s*$/,"").trim();
        opts.push({ t: textLine, letter });
        if (hasTick) correct = opts.length - 1;
      }

      // Nếu chưa thấy ✓, đối chiếu "Đáp án đúng:"
      if (correct < 0) {
        const line = blk.match(/Đáp án đúng:\s*([\s\S]*?)(?:\n|$)/i);
        if (line) {
          const needle = normalize(line[1]);
          const idx = opts.findIndex((o) => normalize(o.t) === needle);
          if (idx >= 0) correct = idx;
        }
      }
      if (correct < 0) correct = 0; // fallback an toàn

      return { q, opts, correct };
    });

    return { subject: subjectName, questions };
  }

  const normalize = (s) =>
    String(s || "")
      .toLowerCase()
      .replace(/\s+/g, " ")
      .replace(/[.]+$/g, "")
      .trim();

  // ---------- UI BUILD ----------
  function buildSubjectSelect() {
    const sel = $("subject");
    sel.innerHTML = "";
    state.bank.forEach((b, i) => {
      const opt = document.createElement("option");
      opt.value = i;
      opt.textContent = `${b.subject} (${b.questions.length} câu)`;
      sel.appendChild(opt);
    });
  }

  function buildNumberGrid() {
    const makeBtn = (i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className =
        "num w-10 h-10 rounded-xl border border-slate-800 bg-slate-900 text-sm";
      btn.textContent = i + 1;
      btn.dataset.idx = i;
      btn.addEventListener("click", () => goTo(i));
      return btn;
    };
    const areas = [$("numberGrid"), $("numberGridMobile")].filter(Boolean);
    areas.forEach((root) => {
      root.innerHTML = "";
      for (let i = 0; i < state.pickCount; i++) root.appendChild(makeBtn(i));
    });
  }

  function paintNumberGrid() {
    const buttons = document.querySelectorAll("#numberGrid .num, #numberGridMobile .num");
    buttons.forEach((btn) => {
      const i = Number(btn.dataset.idx);
      btn.classList.toggle("current", i === state.current);
      btn.classList.toggle("answered", state.answers[i] != null);
      btn.classList.toggle("marked", state.marked.has(i));
    });
  }

  function renderQuestion() {
    const idx = state.current;
    const q = state.questions[idx];
    if (!q) return;

    $("qIndex").textContent = `Câu ${idx + 1}/${state.pickCount}`;
    $("question").textContent = q.q;

    const ul = $("answers");
    ul.innerHTML = "";
    q.opts.forEach((op, i) => {
      const id = `q${idx}_opt${i}`;
      const li = document.createElement("li");
      li.className = "ans";

      // dùng input ẩn (nhưng vẫn focusable) + label clickable
      li.innerHTML = `
        <input id="${id}" type="radio" name="q${idx}" class="peer absolute opacity-0" />
        <label for="${id}" class="ans-label">
          <span class="letter">${op.letter}</span>
          <span class="text"></span>
        </label>`;
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
      const inp = document.getElementById(`q${idx}_opt${chosen}`);
      if (inp) inp.checked = true;
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
    const selIdx = Number($("subject").value || 0);
    $("subjectBadge").textContent = state.bank[selIdx]?.subject || "—";
    $("modeBadge").textContent = $("mode").value === "exam" ? "Thi" : "Luyện tập";
  }

  function updateProgress() {
    const answered = Object.keys(state.answers).length;
    const total = state.pickCount;
    $("progressText").textContent = `${answered}/${total}`;
    const pct = total ? Math.round((answered / total) * 100) : 0;
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

  // ---------- ACTIONS ----------
  function start() {
    const sbIdx = Number($("subject").value || 0);
    const bank = state.bank[sbIdx];
    if (!bank || !bank.questions.length) {
      $("question").textContent = "Không tìm thấy câu hỏi trong dữ liệu.";
      $("answers").innerHTML = "";
      return;
    }

    const reqCount = Number($("count").value || bank.questions.length);
    const count = Math.max(1, Math.min(reqCount, bank.questions.length));

    // Clone + trộn (nếu chọn)
    let qs = bank.questions.slice();
    if ($("shuffle").checked) qs = shuffle(qs.map(shuffleOptions));

    state.questions = qs.slice(0, count);
    state.pickCount = state.questions.length;
    state.current = 0;
    state.answers = {};
    state.marked.clear();
    state.mode = $("mode").value;

    updateBadges();
    buildNumberGrid();
    updateProgress();
    renderQuestion();

    ["next","prev","clear","mark","submit"].forEach(id => $(id).disabled = false);
    startTimer(Number($("duration").value || 0));
    $("result").hidden = true;
    $("retry").hidden = true;
    $("reviewWrong").hidden = true;
  }

  function clearChoice() {
    const i = state.current;
    delete state.answers[i];
    renderQuestion();
    updateProgress();
  }

  function toggleMark() {
    const i = state.current;
    if (state.marked.has(i)) state.marked.delete(i);
    else state.marked.add(i);
    paintNumberGrid();
  }

  function next() { if (state.current < state.pickCount - 1) goTo(state.current + 1); }
  function prev() { if (state.current > 0) goTo(state.current - 1); }

  function finish(showWrongOnly = false) {
    if (state.timerId) clearInterval(state.timerId);

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
            <div class="mb-2">${escapeHtml(q.q)}</div>
            <ul class="space-y-1 text-sm">
              ${q.opts.map((op, idx) => {
                const isC = idx === q.correct;
                const isU = idx === chosen;
                const cls = isC ? "badge-correct" : isU ? "badge-wrong" : "badge-ghost";
                return `<li><span class="${cls}">${op.letter}</span> ${escapeHtml(op.t)}</li>`;
              }).join("")}
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

    ["next","prev","clear","mark","submit"].forEach(id => $(id).disabled = true);
  }

  function retry() {
    $("result").hidden = true;
    start();
  }

  // ---------- UTILS ----------
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = (Math.random() * (i + 1)) | 0;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  function shuffleOptions(q) {
    const copy = { q: q.q, opts: q.opts.map(o => ({...o})), correct: q.correct };
    const order = [...Array(copy.opts.length).keys()];
    shuffle(order);
    const newOpts = order.map(i => copy.opts[i]);
    const newCorrect = order.indexOf(copy.correct);
    copy.opts = newOpts;
    copy.correct = newCorrect;
    return copy;
  }

  const escapeHtml = (s) => String(s || "")
      .replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");

  // ---------- INIT ----------
  function init() {
    const all = (window.quizData && window.quizData.getAll && window.quizData.getAll()) || [];
    state.bank = all.map((it) => parseSubject(it.text, it.subject));

    buildSubjectSelect();
    $("subject").value = "0";
    $("count").value = String(state.bank[0]?.questions.length || 1);
    updateBadges();

    $("subject").addEventListener("change", () => {
      const idx = Number($("subject").value || 0);
      $("count").value = String(state.bank[idx]?.questions.length || 1);
      updateBadges();
    });
    $("mode").addEventListener("change", updateBadges);

    $("start").addEventListener("click", start);
    $("next").addEventListener("click", () => next());
    $("prev").addEventListener("click", () => prev());
    $("clear").addEventListener("click", clearChoice);
    $("mark").addEventListener("click", toggleMark);
    $("submit").addEventListener("click", () => finish(false));
    $("retry").addEventListener("click", retry);
    $("reviewWrong").addEventListener("click", () => finish(true));
  }
})();
