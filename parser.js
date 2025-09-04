/* ======================== parser.js ======================== */
(function(){
  const QA = { subjects: [] }; // thu thập log QA

  const normalize = (s) => (s||"")
    .replace(/\u00A0/g,' ') // nbsp
    .replace(/[“”]/g,'"')
    .replace(/[‘’]/g,"'")
    .replace(/\s+/g,' ')
    .trim();

  const trimLines = (s) => (s||"")
    .split(/\r?\n/)
    .map(l => l.replace(/\s+$/,'').replace(/^\s+/,'')).join('\n');

  function splitBlocks(raw){
    // Tách theo "Câu n:" — giữ nội dung sau tiêu đề
    const idx = [];
    const re = /(\n|^)Câu\s+\d+\s*:/gmi;
    let m;
    while((m = re.exec(raw))) idx.push(m.index + m[0].length);
    const blocks = [];
    for(let i=0;i<idx.length;i++){
      const start = idx[i];
      const end = i+1<idx.length ? idx[i+1]-m?.[0]?.length || idx[i+1] : raw.length;
      blocks.push(raw.slice(start, end));
    }
    return blocks.map(b=>trimLines(b));
  }

  function parseBlock(block, ix, errors){
    // markers
    const daIdx = block.search(/\n?Đáp\s*án\s*đúng\s*:/i);
    const allIdx = block.search(/\n?Tất\s*cả\s*đáp\s*án\s*:/i);
    if(daIdx<0 || allIdx<0 || allIdx < daIdx){
      errors.push({i:ix, type:'marker', msg:'Thiếu "Đáp án đúng" hoặc "Tất cả đáp án"', raw:block.slice(0,160)+'...'});
      return null;
    }
    const qText = normalize(block.slice(0, daIdx));
    const correctText = normalize(block.slice(daIdx).replace(/^[^:]*:/,'').split(/\n/)[0]);
    const optsText = block.slice(allIdx).replace(/^[^:]*:/,'');

    // lấy các dòng A./B./C./D.
    const options = [];
    const lines = optsText.split(/\r?\n/);
    for(const line of lines){
      const m = line.match(/^\s*([A-D])\s*\.[\s\t]*(.*)$/i);
      if(m){
        let t = m[2].trim();
        let ticked = false;
        // đánh dấu tick ở đầu hoặc ngay sau chữ cái
        if(/^([✓✔])\s*/.test(t)) { ticked = true; t = t.replace(/^([✓✔])\s*/, ''); }
        // hoặc còn dấu tick đâu đó đầu dòng
        t = t.replace(/^[•\-]\s*/,'');
        options.push({text: normalize(t), ticked});
      }
    }

    if(options.length < 2){
      errors.push({i:ix, type:'options', msg:'Không tìm thấy đủ phương án', raw:block.slice(0,160)+'...'});
      return null;
    }

    // xác định đáp án đúng
    let correctIndex = -1;
    const normCorrect = normalize(correctText).toLowerCase();

    // 1) theo tick
    const tickIdx = options.findIndex(o=>o.ticked);
    if(tickIdx>=0) correctIndex = tickIdx;

    // 2) so khớp văn bản
    if(correctIndex<0 && normCorrect){
      correctIndex = options.findIndex(o=>normalize(o.text).toLowerCase() === normCorrect);
      if(correctIndex<0){
        correctIndex = options.findIndex(o=>{
          const a = normalize(o.text).toLowerCase();
          return a.includes(normCorrect) || normCorrect.includes(a);
        });
      }
    }

    if(correctIndex<0){
      // chấp nhận câu nhưng gắn cờ lỗi, bỏ qua trong đề thi
      errors.push({i:ix, type:'answer-map', msg:'Không map được đáp án đúng', q:qText, correct:correctText, options:options.map(o=>o.text)});
      return null;
    }

    return {
      q: qText,
      options: options.map(o=>o.text),
      correctIndex,
    };
  }

  function parseSubject(subject, raw){
    const errors = [];
    const blocks = splitBlocks(raw);
    const items = [];
    blocks.forEach((b, i)=>{
      const it = parseBlock(b, i+1, errors);
      if(it) items.push(it);
    });
    QA.subjects.push({subject, totalBlocks: blocks.length, valid: items.length, invalid: blocks.length - items.length, errors});
    return items;
  }

  function parseAll(){
    const rawSubjects = (window.quizData && window.quizData.getAll && window.quizData.getAll()) || [];
    const data = rawSubjects.map(s=>({ subject: s.subject, items: parseSubject(s.subject, s.text) }));
    return { data, qa: QA };
  }

  window.quizParser = { parseAll };
})();
