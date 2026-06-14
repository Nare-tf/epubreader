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
      if (response) {
        return response;  // Return cached version if available
      }
      return fetch(event.request)
        .catch(() => {
          // Offline fallback: return cached index.html for document requests
          if (event.request.destination === 'document') {
            return caches.match('/epubreader/index.html');
          }
          // For other resources, return a generic offline response
          return new Response('Offline - Resource not available', {
            status: 503,
            statusText: 'Service Unavailable'
          });
        });
    })
  );
});
