const CACHE_NAME = 'econos-v35';

const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/offline.html',
  '/fonts.css',
  '/fonts/inter-variable.woff2',
  '/favicon.svg',
  '/assets/econos-logo-full.png',
  '/site.webmanifest',
];

// Install: precache core assets
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_ASSETS))
  );
});

// Activate: remove old caches and claim clients
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// Fetch strategy
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Navigate requests: network-first, fallback to cache, fallback to offline.html
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          return response;
        })
        .catch(() =>
          caches.match(request).then(
            (cached) => cached || caches.match('/offline.html')
          )
        )
    );
    return;
  }

  // All other requests: cache-first, fallback to network
  // …EXCEPT topic data files (/js/data/...) which must be network-first
  // so that newly-deployed content (rebuilt quizzes, edited link data,
  // updated topic JSON) reaches users without waiting for the cache to
  // expire. Cache-first here meant a single stale data file could keep
  // serving forever across multiple hard refreshes.
  const url = new URL(request.url);
  const isData = url.pathname.includes('/js/data/');

  if (isData) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          return response;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  event.respondWith(
    caches.match(request).then(
      (cached) =>
        cached ||
        fetch(request).then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          return response;
        })
    )
  );
});
