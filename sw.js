const CACHE_NAME = 'gcm-agenda-v1';
const assets = [
  './',
  './index.html',
  // Adicione aqui seus arquivos CSS ou JS externos, se houver
];

// Instalação e Cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Estratégia: Tenta Rede, se falhar, vai no Cache
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});