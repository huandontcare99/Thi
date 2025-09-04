/* ======================== app.js ======================== */
(function(){
  // ====== Utils ======
  const $ = (sel, el=document) => el.querySelector(sel);
  const $$ = (sel, el=document) => Array.from(el.querySelectorAll(sel));
  const escapeHTML = (s)=> s.replace(/[&<>"']/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));

  // RNG có seed
  function mulberry32(a){ return function(){ let t = a += 0x6D2B79F5; t = Math.imul(t ^ t>>>15, t | 1); t ^= t + Math.imul(t ^ t>>>7, t | 61); return ((t ^ t>>>14) >>> 0) / 4294967296; } }
  function seedFrom(str){ let h=1779033703^str.length; for(let i=0;i<str.length;i++){ h = Math.imul(h ^ str.charCodeAt(i), 3432918353); h = (h<<13)|(h>>>19);} return h>>>0; }
  function shuffle(arr, rnd){ const a=arr.slice(); for(let i=a.length-1;i>0;i--){ const j=Math.floor(rnd()* (i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }

  // ====== State ======
  let BANK = [];// [{subject, items}]
  let QA = null;

  let attempt = null; // trạng thái đề hiện tại
  // attempt shape
  // { subject, mode, seed, idxs:[], questions:[], answers:[], startedAt, timerSec, timeUsedSec, done }

  // ====== Init ======
  window.addEventListener('DOMContentLoaded', () => {
    try{
      const parsed = window.quizParser.parseAll();
      BANK = parsed.data; QA = parsed.qa;
    }catch(e){
      alert('Lỗi parse data.js — vui lòng kiểm tra lại file.');
      console.error(e);
      return;
    }

    buildSubjectSelect();
    renderQASummary();
    hookTabs();
    hookSetup();
    hookExam();
    hookHistory();
    registerPWA();

    // đọc seed từ URL
    applyURLSeed();
  });

  // ====== Tabs ======
  function hookTabs(){
    const btnQuiz = $('#btnTabQuiz');
    const btnHistory = $('#btnTabHistory');
    const btnQA = $('#btnTabQA');

    btnQuiz.addEventListener('click',()=>setTab('quiz'));
    btnHistory.addEventListener('click',()=>{ setTab('history'); renderHistory(); });
    btnQA.addEventListener('click',()=>setTab('qa'));
  }
  function setTab(name){
    $$('.tab').forEach(x=>x.classList.remove('active'));
    $('#tab-'+name).classList.add('active');
    $$('.tab-btn').forEach(x=>x.classList.remove('active'));
    $('#btnTab'+name[0].toUpperCase()+name.slice(1)).classList.add('active');
  }

  // ====== Setup view ======
  function buildSubjectSelect(){
    const sel = $('#selSubject');
    sel.innerHTML = '';
    BANK.forEach((s, i)=>{
      const valid = s.items.length;
      const opt = document.createElement('option');
      opt.value = i;
      opt.textContent = `${s.subject} — ${valid} câu`;
      sel.appendChild(opt);
    });
    sel.addEventListener('change', ()=> updateSubjectInfo());
    updateSubjectInfo();
  }
  function updateSubjectInfo(){
    const s = BANK[$('#selSubject').value|0];
    const qa = QA.subjects.find(x=>x.subject===s.subject) || {totalBlocks:0,valid:0,invalid:0};
    $('#subjectInfo').textContent = `Đã parse: ${qa.valid}/${qa.totalBlocks} câu hợp lệ` + (qa.invalid?` — bỏ qua ${qa.invalid} câu lỗi`:'');
  }

  function hookSetup(){
    $('#chkTimer').addEventListener('change', (e)=>{
      $('#timerBox').classList.toggle('hidden', !e.target.checked);
    });

    $('#btnSeedLink').addEventListener('click', ()=>{
      if(!attempt){
        const subjectIx = $('#selSubject').value|0;
        const mode = $('#selMode').value;
        const n = ($('#numQuestions').value||'').trim();
        const seed = genSeed();
        const url = makeSeedURL({subjectIx, mode, n, seed});
        copyText(url);
        toastCopy();
      } else {
        const url = makeSeedURL({subjectIx: attempt.subjectIx, mode: attempt.mode, n: attempt.questions.length, seed: attempt.seed});
        copyText(url); toastCopy();
      }
    });

    $('#btnStart').addEventListener('click', startExamFromUI);
  }

  function makeSeedURL({subjectIx, mode, n, seed}){
    const url = new URL(location.href);
    url.searchParams.set('subject', subjectIx);
    url.searchParams.set('mode', mode);
    if(n) url.searchParams.set('n', n);
    url.searchParams.set('seed', seed);
    return url.toString();
  }

  function applyURLSeed(){
    const url = new URL(location.href);
    const subjectIx = url.searchParams.get('subject');
    const mode = url.searchParams.get('mode');
    const n = url.searchParams.get('n');
    const seed = url.searchParams.get('seed');
    if(subjectIx!==null && seed){
      $('#selSubject').value = subjectIx;
      if(mode) $('#selMode').value = mode;
      if(n) $('#numQuestions').value = n;
      startExam({ subjectIx: subjectIx|0, mode: $('#selMode').value, n: (n?parseInt(n,10):undefined), seed });
      setTab('quiz');
      $('#setup').scrollIntoView({behavior:'smooth'});
    }
  }

  function startExamFromUI(){
    const subjectIx = $('#selSubject').value|0;
    const mode = $('#selMode').value;
    const n = parseInt($('#numQuestions').value,10) || undefined;
    const seed = genSeed();
    startExam({subjectIx, mode, n, seed});
  }

  function genSeed(){ return (Date.now().toString(36)+Math.random().toString(36).slice(2,6)); }

  function startExam({subjectIx, mode, n, seed}){
    const subj = BANK[subjectIx];
    const total = subj.items.length;
    const count = Math.min(n||total, total);
    const rnd = mulberry32(seedFrom(seed+'|pick'));
    const idxs = shuffle([...Array(total).keys()], rnd).slice(0, count);

    const shuffleOpts = $('#chkShuffleOptions').checked;
    const items = idxs.map(i=>subj.items[i]).map(q=>{
      if(!shuffleOpts) return {...q};
      const rnd2 = mulberry32(seedFrom(seed+'|opt|'+q.q));
      const ord = shuffle(q.options.map((_,i)=>i), rnd2);
      const options = ord.map(i=>q.options[i]);
      const correctIndex = ord.indexOf(q.correctIndex);
      return { q: q.q, options, correctIndex };
    });

    const timerSec = $('#chkTimer').checked ? (parseInt($('#timerMinutes').value,10)||30)*60 : null;

    attempt = {
      subjectIx, subject: subj.subject, mode, seed,
      idxs, questions: items,
      answers: new Array(count).fill(null),
      cur: 0,
      startedAt: Date.now(),
      timerSec, timeUsedSec: 0, done:false,
    };

    // UI
    $('#setup').classList.add('hidden');
    $('#result').classList.add('hidden');
    $('#exam').classList.remove('hidden');

    $('#pillSubject').textContent = subj.subject;
    $('#pillMode').textContent = mode==='exam' ? 'Chế độ: Thi' : 'Chế độ: Luyện';
    $('#pillSeed').textContent = 'seed: '+seed;

    // Progress
    updateProgress();

    // Question nav
    buildQuestionNav();

    // render current
    renderQuestion();

    // Timer
    if(attempt.timerSec){ $('#timer').classList.remove('hidden'); startTimer(); }
    else $('#timer').classList.add('hidden');

    // keyboard
    bindHotkeys();
  }

  function buildQuestionNav(){
    const nav = $('#questionNav');
    nav.innerHTML = '';
    const tpl = $('#tplNavBtn');
    attempt.questions.forEach((_,i)=>{
      const btn = tpl.content.firstElementChild.cloneNode(true);
      btn.textContent = i+1;
      btn.addEventListener('click', ()=> goto(i));
      nav.appendChild(btn);
    });
    updateNavState();
  }

  function goto(i){ attempt.cur = i; renderQuestion(); }

  function updateNavState(){
    const nav = $('#questionNav');
    const btns = $$('.nav-btn', nav);
    btns.forEach((b,i)=>{
      b.classList.toggle('active', i===attempt.cur);
      b.classList.toggle('answered', attempt.answers[i]!==null);
    });
  }

  function updateProgress(){
    const total = attempt.questions.length;
    const answered = attempt.answers.filter(x=>x!==null).length;
    const pct = Math.round(answered*100/total);
    $('#progressBar').style.width = pct+'%';
    $('#progressText').textContent = `${answered}/${total}`;
  }

  function renderQuestion(){
    const i = attempt.cur;
    const q = attempt.questions[i];

    $('#qNumber').textContent = `Câu ${i+1}`;
    $('#qText').textContent = q.q; // textContent để tránh HTML injection

    const form = $('#options');
    form.innerHTML = '';
    const tpl = $('#tplOption');

    q.options.forEach((text,ix)=>{
      const row = tpl.content.firstElementChild.cloneNode(true);
      const input = $('input', row);
      const span = $('.opt-text', row);
      span.textContent = ['A. ','B. ','C. ','D. '][ix] + text;
      input.name = 'opt'; input.value = ix;
      input.checked = attempt.answers[i]===ix;
      input.addEventListener('change', ()=>{
        attempt.answers[i]=ix; updateNavState(); updateProgress();
        if(attempt.mode==='practice') showFeedback(ix===q.correctIndex);
        else $('#feedback').textContent = '';
      });
      if(attempt.done){
        if(ix===q.correctIndex) row.classList.add('correct');
        if(attempt.answers[i]===ix && ix!==q.correctIndex) row.classList.add('wrong');
      }
      form.appendChild(row);
    });

    // feedback (practice)
    if(attempt.mode==='practice' && attempt.answers[i]!==null){
      showFeedback(attempt.answers[i]===q.correctIndex);
    } else $('#feedback').textContent='';

    updateNavState();
  }

  function showFeedback(ok){
    $('#feedback').textContent = ok ? '✔ Chính xác!' : '✘ Chưa đúng — thử lại nhé!';
  }

  function hookExam(){
    $('#btnPrev').addEventListener('click', (e)=>{ e.preventDefault(); if(attempt.cur>0){attempt.cur--; renderQuestion();}});
    $('#btnNext').addEventListener('click', (e)=>{ e.preventDefault(); if(attempt.cur<attempt.questions.length-1){attempt.cur++; renderQuestion();}});
    $('#btnSubmit').addEventListener('click', (e)=>{ e.preventDefault(); submitExam(); });
  }

  function bindHotkeys(){
    window.onkeydown = (ev)=>{
      if(!attempt || $('#exam').classList.contains('hidden')) return;
      if(['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)) return;
      if(ev.key==='ArrowLeft'){ if(attempt.cur>0){attempt.cur--; renderQuestion();} }
      if(ev.key==='ArrowRight'){ if(attempt.cur<attempt.questions.length-1){attempt.cur++; renderQuestion();} }
      if(['1','2','3','4'].includes(ev.key)){
        const pick = parseInt(ev.key,10)-1;
        const input = $$('input[name="opt"]')[pick];
        if(input){ input.checked = true; input.dispatchEvent(new Event('change',{bubbles:true})); }
      }
      if(ev.key.toLowerCase()==='r' && attempt.done){ replaySameSeed(); }
      if(ev.key==='Enter' && !attempt.done){ submitExam(); }
    };
  }

  function submitExam(){
    if(!attempt) return;
    const total = attempt.questions.length;
    const answered = attempt.answers.filter(x=>x!==null).length;
    if(answered<total){
      if(!confirm(`Bạn mới trả lời ${answered}/${total} câu. Vẫn nộp bài?`)) return;
    }
    attempt.done = true;
    attempt.timeUsedSec = Math.floor((Date.now() - attempt.startedAt)/1000);

    // chấm điểm & lưu lịch sử
    const detail = attempt.questions.map((q,i)=>({
      q: q.q, options: q.options, correctIndex: q.correctIndex, picked: attempt.answers[i]
    }));
    const correct = detail.filter(d=>d.picked===d.correctIndex).length;
    const score = Math.round(correct*100/total);

    // lưu câu sai cho ôn tập
    detail.forEach(d=>{ if(d.picked!==d.correctIndex) quizStore.rememberWrong(attempt.subject, {q:d.q, options:d.options, correctIndex:d.correctIndex}); });

    quizStore.pushHistory({
      ts: Date.now(), subject: attempt.subject, subjectIx: attempt.subjectIx,
      mode: attempt.mode, seed: attempt.seed, n: total,
      correct, score, timeUsedSec: attempt.timeUsedSec
    });

    // hiện kết quả
    showResult({correct, score, total, detail});

    // khoá UI câu hỏi: hiển thị đúng/sai
    renderQuestion();
  }

  function showResult({correct, score, total, detail}){
    $('#exam').classList.add('hidden');
    const mins = Math.floor(attempt.timeUsedSec/60).toString().padStart(2,'0');
    const secs = (attempt.timeUsedSec%60).toString().padStart(2,'0');

    $('#resSubject').textContent = attempt.subject;
    $('#resMode').textContent = attempt.mode==='exam'?'Thi':'Luyện';
    $('#resSeed').textContent = attempt.seed;
    $('#resScore').textContent = `${correct}/${total} — ${score}%`;
    $('#resTime').textContent = `${mins}:${secs}`;

    $('#result').classList.remove('hidden');

    // actions
    $('#btnReplay').onclick = replaySameSeed;
    $('#btnNew').onclick = ()=>{ location.href = location.origin + location.pathname; };
    $('#btnReviewWrong').onclick = ()=> renderReview(detail, 'wrong');
    $('#btnExportCSV').onclick = ()=> exportCSV(detail);
  }

  function replaySameSeed(){
    if(!attempt) return;
    startExam({subjectIx: attempt.subjectIx, mode: attempt.mode, n: attempt.questions.length, seed: attempt.seed});
  }

  function renderReview(detail, filter){
    const box = $('#review');
    box.innerHTML='';
    const pool = filter==='wrong' ? detail.filter(d=>d.picked!==d.correctIndex) : detail;
    pool.forEach((d,i)=>{
      const div = document.createElement('div');
      div.className = 'rev-item';
      div.innerHTML = `
        <div class="rev-q"><b>Câu ${i+1}.</b> ${escapeHTML(d.q)}</div>
        <ol>
          ${d.options.map((o,ix)=>{
            const mark = ix===d.correctIndex? ' (đúng)' : (ix===d.picked?' (bạn chọn)':'');
            return `<li>${escapeHTML(o)}<span class="rev-meta">${mark}</span></li>`;
          }).join('')}
        </ol>
      `;
      box.appendChild(div);
    });
    box.classList.remove('hidden');
  }

  function exportCSV(detail){
    const rows = [ ['index','question','A','B','C','D','correctIndex','picked'] ];
    detail.forEach((d,i)=>{
      rows.push([i+1, d.q, d.options[0]||'', d.options[1]||'', d.options[2]||'', d.options[3]||'', d.correctIndex, d.picked]);
    });
    const csv = rows.map(r=>r.map(x=>`"${(x||'').toString().replace(/"/g,'""')}"`).join(',')).join('\n');
    const blob = new Blob([csv], {type:'text/csv;charset=utf-8;'});
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `quiz-result-${attempt.subjectIx}-${attempt.seed}.csv`;
    a.click();
  }

  // ====== Timer ======
  let timerHandle = null;
  function startTimer(){
    clearInterval(timerHandle);
    let remain = attempt.timerSec;
    const tick = ()=>{
      if(attempt.done){ clearInterval(timerHandle); return; }
      remain--; if(remain<0){ clearInterval(timerHandle); submitExam(); return; }
      const m = Math.floor(remain/60).toString().padStart(2,'0');
      const s = (remain%60).toString().padStart(2,'0');
      $('#timer').textContent = `${m}:${s}`;
    };
    // set ngay lập tức
    const m0 = Math.floor(remain/60).toString().padStart(2,'0');
    const s0 = (remain%60).toString().padStart(2,'0');
    $('#timer').textContent = `${m0}:${s0}`;
    timerHandle = setInterval(tick, 1000);
  }

  // ====== History ======
  function hookHistory(){
    $('#btnClearHistory').addEventListener('click',()=>{
      if(confirm('Xoá toàn bộ lịch sử?')){ quizStore.clearHistory(); renderHistory(); }
    });
  }

  function renderHistory(){
    const host = $('#historyList');
    const his = quizStore.getHistory();
    host.innerHTML = his.length? '' : '<div class="muted">Chưa có bản ghi.</div>';
    his.forEach((h,ix)=>{
      const dt = new Date(h.ts);
      const mins = Math.floor(h.timeUsedSec/60).toString().padStart(2,'0');
      const secs = (h.timeUsedSec%60).toString().padStart(2,'0');
      const div = document.createElement('div');
      div.className = 'hist';
      div.innerHTML = `
        <div>
          <b>${h.subject}</b> • ${h.mode==='exam'?'Thi':'Luyện'} • ${h.correct}/${h.n} (${h.score}%) • ${mins}:${secs}
          <div class="muted">${dt.toLocaleString()} • seed ${h.seed}</div>
        </div>
        <div class="actions">
          <button class="secondary" data-act="replay">Làm lại</button>
          <button class="ghost" data-act="share">Link đề</button>
        </div>
      `;
      $('.actions [data-act="replay"]', div).onclick = ()=>{
        startExam({subjectIx: h.subjectIx, mode: h.mode, n: h.n, seed: h.seed}); setTab('quiz');
      };
      $('.actions [data-act="share"]', div).onclick = ()=>{
        const url = makeSeedURL({subjectIx: h.subjectIx, mode: h.mode, n: h.n, seed: h.seed});
        copyText(url); toastCopy();
      };
      host.appendChild(div);
    });
  }

  // ====== QA ======
  function renderQASummary(){
    const host = $('#qaSummary');
    host.innerHTML='';
    QA.subjects.forEach(s=>{
      const card = document.createElement('div');
      card.className = 'qa-card';
      card.innerHTML = `<b>${s.subject}</b><br/>Tổng block: ${s.totalBlocks} • Hợp lệ: ${s.valid} • Bỏ qua: ${s.invalid}`;
      host.appendChild(card);
    });

    const det = $('#qaDetails');
    det.innerHTML = '';
    QA.subjects.forEach(s=>{
      if(!s.errors.length) return;
      const h3 = document.createElement('h3'); h3.textContent = s.subject; det.appendChild(h3);
      s.errors.forEach(e=>{
        const d = document.createElement('div'); d.className='err';
        d.textContent = `Câu #${e.i}: ${e.type} — ${e.msg}`;
        det.appendChild(d);
      });
    });
  }

  // ====== Helpers ======
  function copyText(t){ navigator.clipboard?.writeText(t).catch(()=>{}); }
  function toastCopy(){ const el = $('#copyToast'); el.classList.remove('hidden'); setTimeout(()=>el.classList.add('hidden'), 1100); }

  // ====== PWA ======
  function registerPWA(){
    if('serviceWorker' in navigator){
      navigator.serviceWorker.register('./service-worker.js').catch(()=>{});
    }
    let deferredPrompt=null; const btn = $('#btnInstall');
    window.addEventListener('beforeinstallprompt', (e)=>{ e.preventDefault(); deferredPrompt=e; btn.classList.remove('hidden'); });
    btn.addEventListener('click', async ()=>{ if(!deferredPrompt) return; deferredPrompt.prompt(); const {outcome}=await deferredPrompt.userChoice; if(outcome==='accepted'){ btn.textContent='Đã cài'; btn.disabled=true; } });
  }
})();
