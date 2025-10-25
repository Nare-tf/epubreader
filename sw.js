self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('epub-cache').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/imgs/favicon.png',
        '/manifest.json',
        '/style.css',
        '/script.js'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
