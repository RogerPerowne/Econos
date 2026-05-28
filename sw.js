const CACHE_NAME = 'econos-v53';

const PRECACHE_ASSETS = [
  '/',
  '/offline.html',
  '/fonts.css',
  '/fonts/inter-variable.woff2',
  '/favicon.svg',
  '/assets/logo-full.png',
  '/assets/logo-wordmark-mark.png',
  '/site.webmanifest',
];

// Install: precache core assets
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_ASSETS))
  );
});

// Activate: remove old caches, claim clients, and if we just upgraded
// from an older cache, force a one-time reload of every open window so
// HTML, JS and CSS all come from the same build. Without this, a tab
// that loaded mid-deploy ends up running OLD JS against the NEW CSS
// (or vice-versa) — the classic SW mismatch that puts unstyled chrome
// at the top of the page until the user manually hard-refreshes.
self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    const hadOldCache = keys.some((k) => k !== CACHE_NAME);
    await Promise.all(
      keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
    );
    await self.clients.claim();
    if (hadOldCache) {
      const clients = await self.clients.matchAll({ type: 'window' });
      await Promise.all(clients.map((c) => c.navigate(c.url).catch(() => {})));
    }
  })());
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
