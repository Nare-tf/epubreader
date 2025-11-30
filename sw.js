self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('epub-cache').then(cache => {
      return cache.addAll([
        '/epubreader/',
        '/epubreader/index.html',
        '/epubreader/imgs/favicon.png',
        '/epubreader/manifest.json',
        '/epubreader/style.css',
        '/epubreader/script.js',
        '/epubreader/lib/jszip.min.js'
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
