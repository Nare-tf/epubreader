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
        'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match('/epubreader/index.html');
    })
  );
});
