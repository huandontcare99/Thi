/* Quiz Master - app.js (mobile-first, đảm bảo luôn hiện đáp án có radio) */
(() => {
  "use strict";
  const $ = (id) => document.getElementById(id);

  const state = {
    bank: [],              // [{subject, questions:[{q, opts:[{t,letter}], correct}]}]
    questions: [],
    count: 0,
    current: 0,
    chosen: {},            // idx -> optIndex
    marked: new Set(),
    mode: "practice",
    timerId: null,
    deadline: 0
  };

  document.addEventListener("DOMContentLoaded", init);

  // ========= PARSER VỮNG =========
  function parseBank(raw, subjectName) {
    const text = String(raw || "");
    const blocks = [];
    const re = /(^|\n)Câu\s+\d+:[\s\S]*?(?=\n[-=]{3,}\s*\n|$)/gim; // tới dòng gạch hoặc kết thúc
    let m;
    while ((m = re.exec(text)) !== null) blocks.push(m[0]);

    const questions = blocks.map((blk) => {
      // Lấy câu hỏi
      const qm = blk.match(/^Câu\s+\d+:\s*([\s\S]*?)\s*Đáp án đúng:/im);
      const q = (qm ? qm[1] : blk).trim();

      // Lấy phần "Tất cả đáp án:" (nếu có), nếu không cứ quét A/B/C/D
      let answerZone = blk;
      const zoneM = blk.match(/Tất cả đáp án:\s*([\s\S]*)$/i);
      if (zoneM) answerZone = zoneM[1];

      // Gom các đáp án A-D
      const opts = [];
      let correct = -1;
      const optRe = /^\s*([ABCD])\.\s*(.*)$/gim;
      let om;
      while ((om = optRe.exec(answerZone)) !== null) {
        let letter = om[1].toUpperCase();
        let line = om[2].trim();
        const hasTick = /✓/.test(line);
        line = line.replace(/✓/g, "").trim();
        opts.push({ t: line, letter });
        if (hasTick) correct = opts.length - 1;
      }

      // Nếu vẫn chưa xác định, khớp theo "Đáp án đúng:"
      if (correct < 0) {
        const ansM = blk.match(/Đáp án đúng:\s*([\s\S]*?)(?:\n|$)/i);
        if (ansM) {
          const needle = norm(ansM[1]);
          const idx = opts.findIndex((o) => norm(o.t) === needle);
          if (idx >= 0) correct = idx;
        }
      }

      // Nếu vì lý do nào đó chưa lấy được options -> tạo placeholder để không vỡ UI
      if (opts.length === 0) {
        ["A","B","C","D"].forEach((L,i) => opts.push({ t: "(Không trích xuất được đáp án)", letter: L }));
        correct = 0;
      }
      if (correct < 0) correct = 0;

      return { q, opts, correct };
    });

    return { subject: subjectName, questions };
  }

  // Chuẩn hóa: bỏ dấu, ký tự đặc biệt, xuống dòng, khoảng trắng thừa
  function norm(s) {
    return String(s || "")
      .normalize("NFD").replace(/[\u0300-\u036f]/g,"")
      .toLowerCase()
      .replace(/<[^>]+>/g,"")
      .replace(/[^a-z0-9\u00e0-\u1ef9\s]/gi," ")
      .replace(/\s+/g," ")
      .trim();
  }

  // ========= UI =========
  function buildSubjectSelect() {
    const sel = $("subject");
    sel.innerHTML = "";
    state.bank.forEach((b, i) => {
      const o = document.createElement("option");
      o.value = String(i);
      o.textContent = `${b.subject} (${b.questions.length} câu)`;
      sel.appendChild(o);
    });
  }

  function buildNumberPads() {
    const make = (i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "num w-10 h-10 rounded-xl border border-slate-800 bg-slate-900 text-sm";
      b.textContent = i + 1;
      b.dataset.idx = String(i);
      b.onclick = () => go(i);
      return b;
    };
    [$("numberGrid"), $("numberGridMobile")].forEach((el) => {
      if (!el) return;
      el.innerHTML = "";
      for (let i = 0; i < state.count; i++) el.appendChild(make(i));
    });
  }

  function paintPads() {
    document.querySelectorAll("#numberGrid .num, #numberGridMobile .num").forEach((btn) => {
      const i = +btn.dataset.idx;
      btn.classList.toggle("current", i === state.current);
      btn.classList.toggle("answered", state.chosen[i] != null);
      btn.classList.toggle("marked", state.marked.has(i));
    });
  }

  function renderQuestion() {
    const i = state.current;
    const q = state.questions[i];
    if (!q) return;

    $("qIndex").textContent = `Câu ${i + 1}/${state.count}`;
    $("question").textContent = q.q;

    const ul = $("answers");
    ul.innerHTML = "";
    q.opts.forEach((op, idx) => {
      const id = `q${i}_o${idx}`;
      const li = document.createElement("li");
      li.className = "rounded-xl border border-slate-800 bg-slate-900 p-3";

      // radio HIỆN RÕ RÀNG + label to, dễ bấm
      li.innerHTML = `
        <label class="flex items-start gap-3">
          <input type="radio" name="q${i}" id="${id}" class="mt-1.5 h-5 w-5 shrink-0 accent-sky-500" />
          <span class="flex min-w-0 items-start gap-2">
            <span class="inline-grid h-6 w-6 shrink-0 place-items-center rounded-lg border border-slate-700 bg-slate-800 font-bold">${op.letter}</span>
            <span class="text-sm leading-6 break-words" id="${id}_t"></span>
          </span>
        </label>
      `;
      li.querySelector(`#${id}_t`).textContent = op.t;
      ul.appendChild(li);

      li.querySelector("input").addEventListener("change", () => {
        state.chosen[i] = idx;
        updateProgress();
        paintPads();
        $("clear").disabled = false;
      });
    });

    // khôi phục lựa chọn nếu đã có
    const chosen = state.chosen[i];
    if (chosen != null) {
      const inp = document.getElementById(`q${i}_o${chosen}`);
      if (inp) inp.checked = true;
      $("clear").disabled = false;
    } else {
      $("clear").disabled = true;
    }

    $("prev").disabled = i === 0;
    $("next").disabled = i >= state.count - 1;
    $("mark").disabled = false;
    paintPads();
  }

  function updateBadges() {
    const idx = +$("subject").value || 0;
    $("subjectBadge").textContent = state.bank[idx]?.subject || "—";
    $("modeBadge").textContent = $("mode").value === "exam" ? "Thi" : "Luyện tập";
  }

  function updateProgress() {
    const answered = Object.keys(state.chosen).length;
    $("progressText").textContent = `${answered}/${state.count}`;
    const pct = state.count ? Math.round((answered / state.count) * 100) : 0;
    $("progressBar").style.width = pct + "%";
    $("submit").disabled = answered === 0;
  }

  function go(i){ if(i>=0 && i<state.count){ state.current=i; renderQuestion(); } }

  function startTimer(minutes){
    if(state.timerId) clearInterval(state.timerId);
    if(!minutes || minutes<=0){ $("timer").textContent="00:00"; return; }
    state.deadline = Date.now()+minutes*60*1000;
    const tick=()=>{
      const ms=Math.max(0, state.deadline-Date.now());
      const mm=String(Math.floor(ms/60000)).padStart(2,"0");
      const ss=String(Math.floor((ms%60000)/1000)).padStart(2,"0");
      $("timer").textContent=`${mm}:${ss}`;
      if(ms<=0){ clearInterval(state.timerId); submit(false); }
    };
    tick(); state.timerId=setInterval(tick,1000);
  }

  // ========= ACTIONS =========
  function start(){
    const sidx = +$("subject").value || 0;
    const bank = state.bank[sidx];
    if(!bank || !bank.questions.length){
      $("question").textContent = "Không tìm thấy câu hỏi trong dữ liệu.";
      $("answers").innerHTML = "";
      return;
    }
    const req = +($("count").value || bank.questions.length);
    const count = Math.max(1, Math.min(req, bank.questions.length));
    state.questions = bank.questions.slice();
    if ($("shuffle").checked) {
      state.questions = shuffle(state.questions).map(shuffleOptions);
    }
    state.questions = state.questions.slice(0, count);

    state.count = state.questions.length;
    state.current = 0;
    state.chosen = {};
    state.marked.clear();
    state.mode = $("mode").value;

    updateBadges();
    buildNumberPads();
    updateProgress();
    renderQuestion();
    ["next","prev","clear","mark","submit"].forEach(id => $(id).disabled=false);
    startTimer(+$("duration").value || 0);

    $("result").hidden = true;
    $("retry").hidden = true;
    $("reviewWrong").hidden = true;
  }

  function clearChoice(){ delete state.chosen[state.current]; renderQuestion(); updateProgress(); }
  function toggleMark(){ const i=state.current; state.marked.has(i)?state.marked.delete(i):state.marked.add(i); paintPads(); }
  function next(){ go(state.current+1); }
  function prev(){ go(state.current-1); }

  function submit(onlyWrong=false){
    if(state.timerId) clearInterval(state.timerId);

    let correct=0; const parts=[];
    state.questions.forEach((q,i)=>{
      const pick=state.chosen[i];
      const ok = (pick===q.correct);
      if(ok) correct++;
      if(!onlyWrong || !ok){
        parts.push(`
          <div class="mb-3 rounded-xl border border-slate-800 bg-slate-900 p-3">
            <div class="mb-2 text-sm text-slate-400">Câu ${i+1}</div>
            <div class="mb-2">${escapeHtml(q.q)}</div>
            <ul class="space-y-1 text-sm">
              ${q.opts.map((op,idx)=>{
                const isC = idx===q.correct;
                const isU = idx===pick;
                const cls = isC ? "badge-correct" : isU ? "badge-wrong" : "badge-ghost";
                return `<li><span class="${cls}">${op.letter}</span> ${escapeHtml(op.t)}</li>`;
              }).join("")}
            </ul>
          </div>`);
      }
    });

    const score = Math.round((correct/state.count)*100);
    $("result").innerHTML = `
      <div class="mb-3 flex flex-wrap items-center gap-2">
        <div class="rounded-xl bg-gradient-to-b from-brand-500 to-brand-600 px-3 py-1.5 font-semibold text-slate-950 shadow-soft">
          Điểm: ${correct}/${state.count} (${score}%)
        </div>
        <div class="rounded-xl border border-slate-800 bg-slate-900 px-3 py-1.5 text-slate-300">
          Chế độ: ${state.mode==="exam"?"Thi":"Luyện tập"}
        </div>
      </div>
      ${parts.join("")}`;
    $("result").hidden=false;
    $("retry").hidden=false;
    $("reviewWrong").hidden=false;
    ["next","prev","clear","mark","submit"].forEach(id => $(id).disabled=true);
  }

  function retry(){ $("result").hidden=true; start(); }

  // ========= Utils =========
  function shuffle(a){ for(let i=a.length-1;i>0;i--){ const j=(Math.random()*(i+1))|0; [a[i],a[j]]=[a[j],a[i]]; } return a; }
  function shuffleOptions(q){
    const order=[...q.opts.keys()]; shuffle(order);
    const opts = order.map(i => q.opts[i]);
    const correct = order.indexOf(q.correct);
    return { q: q.q, opts, correct };
  }
  const escapeHtml = (s)=>String(s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");

  // ========= INIT =========
  function init(){
    const all = (window.quizData && window.quizData.getAll && window.quizData.getAll()) || [];
    state.bank = all.map(it => parseBank(it.text, it.subject));

    buildSubjectSelect();
    $("subject").value = "0";
    $("count").value = String(state.bank[0]?.questions.length || 1);
    updateBadges();

    $("subject").addEventListener("change", ()=>{
      const idx=+$("subject").value || 0;
      $("count").value = String(state.bank[idx]?.questions.length || 1);
      updateBadges();
    });
    $("mode").addEventListener("change", updateBadges);

    $("start").addEventListener("click", start);
    $("next").addEventListener("click", next);
    $("prev").addEventListener("click", prev);
    $("clear").addEventListener("click", clearChoice);
    $("mark").addEventListener("click", toggleMark);
    $("submit").addEventListener("click", ()=>submit(false));
    $("retry").addEventListener("click", retry);
    $("reviewWrong").addEventListener("click", ()=>submit(true));
  }
})();
