/* ======================== store.js ======================== */
(function(){
  const KEY = 'quizpro.v1';

  function load(){
    try { return JSON.parse(localStorage.getItem(KEY)||'{}'); } catch { return {}; }
  }
  function save(obj){ localStorage.setItem(KEY, JSON.stringify(obj)); }

  function up(path, value){
    const s = load();
    const segs = path.split('.');
    let cur = s;
    for(let i=0;i<segs.length-1;i++){ cur = cur[segs[i]] = cur[segs[i]] || {}; }
    cur[segs[segs.length-1]] = value;
    save(s);
  }

  function pushHistory(item){
    const s = load();
    s.history = s.history || [];
    s.history.unshift(item);
    s.history = s.history.slice(0,200); // giữ 200 bản ghi gần nhất
    save(s);
  }

  function clearHistory(){
    const s = load();
    s.history = [];
    save(s);
  }

  function getHistory(){ return (load().history)||[]; }

  // lưu “câu sai” để ôn tập
  function rememberWrong(subject, question){
    const s = load();
    s.wrong = s.wrong || {};
    const arr = s.wrong[subject] = s.wrong[subject] || [];
    // tránh trùng nội dung quá dài -> hash đơn giản
    const id = hash(question.q + '|' + question.options.join('|'));
    if(!arr.find(x=>x.id===id)) arr.push({id, question});
    save(s);
  }
  function getWrong(subject){ return ((load().wrong||{})[subject])||[]; }

  // hash nhẹ
  function hash(str){
    let h = 2166136261>>>0;
    for(let i=0;i<str.length;i++){ h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
    return (h>>>0).toString(36);
  }

  window.quizStore = { load, up, pushHistory, clearHistory, getHistory, rememberWrong, getWrong };
})();
