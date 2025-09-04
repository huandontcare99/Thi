/* ======================== service-worker.js ======================== */
const CACHE = 'quizpro-v1';
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './parser.js',
  './store.js',
  './app.js',
  './data.js',
  './manifest.json'
];
self.addEventListener('install', (e)=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));
});
self.addEventListener('activate', (e)=>{
  e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));
});
self.addEventListener('fetch', (e)=>{
  const url = new URL(e.request.url);
  if(e.request.method!=='GET') return;
  e.respondWith(
    caches.match(e.request).then(res=> res || fetch(e.request).then(r=>{
      if(url.origin===location.origin){ const clone = r.clone(); caches.open(CACHE).then(c=>c.put(e.request, clone)); }
      return r;
    }).catch(()=> caches.match('./index.html')))
  );
});
