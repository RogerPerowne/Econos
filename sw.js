/* eslint-env serviceworker */
(function () {
  'use strict';

  const CACHE_NAME = 'econos-v148';

  const PRECACHE_ASSETS = [
    '/',
    '/offline.html',
    '/fonts.css',
    '/fonts/inter-variable.woff2',
    '/favicon.svg',
    '/assets/logo-full.png',
    '/assets/logo-wordmark-mark.png',
    '/site.webmanifest',
    '/js/charts/ppf.js',
    '/js/charts/specs/ppf-card1.js',
    '/js/charts/specs/ppf-card2.js',
    '/js/charts/specs/ppf-card3.js',
    '/js/charts/specs/ppf-card4.js',
    '/js/charts/specs/ppf-card5.js',
    '/js/charts/specs/ppf-card6.js',
    '/js/charts/specs/demand-card1.js',
    '/js/charts/specs/demand-card2.js',
    '/js/charts/specs/demand-card4.js',
    '/js/charts/specs/demand-card7.js',
    '/js/charts/specs/supply-card1.js',
    '/js/charts/specs/supply-card2.js',
    '/js/charts/specs/supply-card4.js',
    '/js/charts/specs/cps-diagram.js',
    '/js/charts/specs/equilibrium-basic.js',
    '/js/charts/specs/welfare-surplus.js',
  ];

  /* ────────────────────────────────────────────────────────────
     Pure upgrade logic — testable in isolation.
     ────────────────────────────────────────────────────────────
     Activation does two things:
       1. Delete every cache whose name isn't the current one.
       2. If we just deleted one (i.e. this is an UPGRADE not a
          first install), force-navigate every open window so
          new HTML / JS / CSS all come from the same build. Without
          the force-reload a tab loaded mid-deploy ends up running
          old JS against new CSS — the classic SW mismatch.

     Pulled out as a plain function so the Vitest unit suite can
     mock caches + clients and verify the behaviour without
     booting a real service worker. The test reads this file as
     source text and eval's the function out — keep the
     `async function activateUpgrade` signature on one line so
     the regex match keeps working. */
  async function activateUpgrade(currentName, cachesApi, clientsApi) {
    const keys = await cachesApi.keys();
    const hadOldCache = keys.some((k) => k !== currentName);
    await Promise.all(
      keys.filter((k) => k !== currentName).map((k) => cachesApi.delete(k))
    );
    await clientsApi.claim();
    if (hadOldCache) {
      const wins = await clientsApi.matchAll({ type: 'window' });
      await Promise.all(wins.map((c) => c.navigate(c.url).catch(() => {})));
    }
  }

  /* ────────────────────────────────────────────────────────────
     Service-worker event handlers.
     Gated on `self` so requiring this file from Node (Vitest)
     doesn't try to call addEventListener on undefined.
     ──────────────────────────────────────────────────────────── */
  if (typeof self === 'undefined' || typeof self.addEventListener !== 'function') return;

  self.addEventListener('install', (event) => {
    self.skipWaiting();
    event.waitUntil(
      caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_ASSETS))
    );
  });

  self.addEventListener('activate', (event) => {
    event.waitUntil(activateUpgrade(CACHE_NAME, caches, self.clients));
  });

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
})();
