/* eslint-env serviceworker */
(function () {
  'use strict';

  const CACHE_NAME = 'econos-v136';

  const PRECACHE_ASSETS = [
    '/',
    '/offline.html',
    '/fonts.css',
    '/styles.css',
    '/css/econ-tokens.css',
    '/css/econ-blocks.css',
    '/css/screenshot.css',
    '/js/app.js',
    '/js/render-validate.js',
    '/js/screenshot-mode.js',
    '/js/icons.js',
    '/js/blocks/_schema.js',
    '/js/render-blocks.js',
    '/js/blocks/compare.js',
    '/js/blocks/flow.js',
    '/js/blocks/structure.js',
    '/js/blocks/data.js',
    '/css/blocks/compare.css',
    '/css/blocks/flow.css',
    '/css/blocks/structure.css',
    '/css/blocks/data.css',
    '/css/blocks/econ-diagram.css',
    '/js/diagrams/econ-svg.js',
    '/js/diagrams/generators/adas.js',
    '/js/diagrams/generators/ppf.js',
    '/js/diagrams/generators/tax-controls.js',
    '/js/diagrams/generators/mult-elas.js',
    '/js/diagrams/generators/firm-labour.js',
    '/js/diagrams/generators/macro-misc.js',
    '/js/diagrams/index.js',
    '/js/diagrams/static/ad-as.js',
    '/js/diagrams/static/behavioural.js',
    '/js/diagrams/static/contestability.js',
    '/js/diagrams/static/costs-firm.js',
    '/js/diagrams/static/cs-ps.js',
    '/js/diagrams/static/demand-pull.js',
    '/js/diagrams/static/elasticity.js',
    '/js/diagrams/static/externalities.js',
    '/js/diagrams/static/inline-extracted.js',
    '/js/diagrams/static/labour.js',
    '/js/diagrams/static/macro-national.js',
    '/js/diagrams/static/market-failure.js',
    '/js/diagrams/static/monopoly.js',
    '/js/diagrams/static/multiplier.js',
    '/js/diagrams/static/phillips-lorenz.js',
    '/js/diagrams/static/ppf.js',
    '/js/diagrams/static/supply-demand.js',
    '/js/diagrams/static/trade-bop.js',
    '/js/diagrams/static/welfare-tax.js',
    '/js/blocks/diagram.js',
    '/js/blocks/econ-diagram.js',
    '/fonts/inter-variable.woff2',
    '/favicon.svg',
    '/assets/logo-full.png',
    '/assets/logo-wordmark-mark.png',
    '/site.webmanifest',
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
