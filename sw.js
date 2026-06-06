/* eslint-env serviceworker */
(function () {
  'use strict';

  const CACHE_NAME = 'econos-v402';

  /* ────────────────────────────────────────────────────────────
     fetchFresh — a network fetch that bypasses the BROWSER'S OWN
     HTTP cache.

     A bare fetch() inside a service worker still consults the
     browser HTTP cache. GitHub Pages stamps `Cache-Control:
     max-age=600` on every asset (HTML, /js/**, .css — we can't
     change those headers), so for 10 minutes after a deploy a
     plain fetch() returns the stale-but-unexpired copy and our
     "network-first" strategy silently serves (and re-caches) old
     content. `cache: 'no-cache'` forces revalidation against the
     origin on every request — still cheap (ETag → 304 when the
     file is unchanged), but it can never hand back a stale body.
     The offline fallback (catch → caches.match) is unaffected.
     ──────────────────────────────────────────────────────────── */
  function fetchFresh(request) {
    return fetch(request, { cache: 'no-cache' });
  }

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
    '/js/charts/specs/ppf-big-picture.js',
    '/js/charts/specs/ppf-classify.js',
    '/js/charts/specs/ppf-opp-cost.js',
    '/js/charts/specs/ppf-shifts-trio.js',
    '/js/charts/specs/ppf-today-tomorrow.js',
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
    '/js/charts/specs/supply-card7.js',
    '/js/charts/specs/cps-diagram.js',
    '/js/charts/specs/cps-build-interactive.js',
    '/js/charts/specs/equilibrium-basic.js',
    '/js/charts/specs/models-supply-demand.js',
    '/js/charts/specs/ceteris-paribus-demand.js',
    '/js/charts/specs/welfare-surplus.js',
    '/js/charts/specs/disequilibrium-interactive.js',
    '/js/charts/specs/shifts-interactive.js',
    '/js/charts/specs/sim-shifts-interactive.js',
    '/js/charts/specs/allocative-efficiency.js',
    '/js/charts/specs/subsidy-diagram-interactive.js',
    '/js/charts/specs/tax-diagram-interactive.js',
    '/js/charts/specs/price-ceiling-diagram.js',
    '/js/charts/specs/price-floor-diagram.js',
    '/js/charts/specs/neg-externality-interactive.js',
    '/js/charts/specs/welfare-govt-failure-interactive.js',
    '/js/charts/specs/pos-externality-interactive.js',
    '/js/charts/specs/elastic-vs-inelastic-demand.js',
    '/js/charts/specs/ped-linear-regions.js',
    '/js/charts/specs/elastic-vs-inelastic-supply.js',
    '/js/charts/specs/ad-slope.js',
    '/js/charts/specs/ad-movement-shift.js',
    '/js/charts/specs/sras-curve-static.js',
    '/js/charts/specs/sras-big-picture.js',
    '/js/charts/specs/sras-zones.js',
    '/js/charts/specs/sras-shift-directions.js',
    '/js/charts/specs/sras-lras-intro.js',
    '/js/charts/specs/sras-shift-interactive.js',
    '/js/charts/specs/lras-views-interactive.js',
    '/js/charts/specs/lras-vertical-interactive.js',
    '/js/charts/specs/lras-demand-vs-capacity.js',
    '/js/charts/specs/lras-shift-diagram.js',
    '/js/charts/specs/ad-shift-interactive.js',
    '/js/charts/specs/ad-shift-classical-keynesian.js',
    '/js/charts/specs/ad-shift-left-classical-keynesian.js',
    '/js/charts/specs/supply-side-sr-lr.js',
    '/js/charts/specs/sras-shift-left-classical-keynesian.js',
    '/js/charts/specs/lras-shift-right-classical-keynesian.js',
    '/js/charts/specs/as-intro-classical-keynesian.js',
    '/js/charts/specs/as-sr-to-lr.js',
    '/js/charts/specs/ad-slope-interactive.js',
    '/js/charts/specs/ad-movement-shift-interactive.js',
    '/js/charts/specs/sras-right-shift-interactive.js',
    '/js/charts/specs/consumption-function.js',
    '/js/charts/specs/mec-diagram.js',
    '/js/charts/specs/crowding-out.js',
    '/js/charts/specs/ad-demand-pull-interactive.js',
    '/js/charts/specs/ad-cost-push-interactive.js',
    '/js/charts/specs/stagflation-phillips.js',
    '/js/charts/specs/inflation-2022-ad-as.js',
    '/js/charts/specs/actual-vs-potential-growth.js',
    '/js/charts/specs/uk-productivity-puzzle.js',
    '/js/charts/specs/j-curve-interactive.js',
    '/js/charts/specs/subsidy-interactive.js',
    '/js/charts/specs/tax-incidence-interactive.js',
    '/js/charts/specs/tax-types-interactive.js',
    '/js/charts/specs/market-failure-overview.js',
    '/js/charts/specs/private-vs-social.js',
    '/js/charts/specs/welfare-loss-diagram.js',
    '/js/charts/specs/price-rationing-scarcity.js',
    '/js/charts/specs/elasticity-incidence-interactive.js',
    '/js/icons/dial-engine.js',
    '/js/icons/material-symbols.js',
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
        fetchFresh(request)
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

    // All other requests: see strategy split below.
    //
    // NETWORK-FIRST for everything that is code or styling —
    // /js/** (app.js, icons.js, every chart spec + dial engine) and
    // any .css. These are the files we actively edit, and serving them
    // cache-first made staleness depend entirely on remembering to bump
    // CACHE_NAME on every deploy: miss one bump (or hit sw.js while it is
    // still HTTP-cached) and returning users are pinned to the old build
    // FOREVER — a hard refresh can't help because it doesn't bypass the
    // service worker. Network-first means an online user always gets the
    // current build; the browser's own HTTP cache + ETags keep unchanged
    // files cheap (304), and the cache is only a fallback for offline.
    // This is the same reasoning the topic data files already used.
    //
    // CACHE-FIRST stays only for genuinely static binaries (fonts,
    // images, logos, manifest, favicon) that change rarely and benefit
    // from instant serving.
    const url = new URL(request.url);
    const freshFirst = url.pathname.startsWith('/js/') || url.pathname.endsWith('.css');

    if (freshFirst) {
      event.respondWith(
        fetchFresh(request)
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
