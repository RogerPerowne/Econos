/* ============================================================
   ECONOS — single source of truth for shell stations
   ─────────────────────────────────────────────────────────────
   Used by:
     • js/engines/link-router.js  — runtime station catalogue
     • js/engines/land-router.js  — runtime station catalogue
     • vite.config.js             — build-time per-topic shell
                                    generator + sitemap

   Drift between those three was the highest-risk silent-failure
   in the build pipeline (a station added in one place but not
   another would 404 directly OR fail to load via the router).
   Keeping it here means: one edit, one rebuild, one shipped
   route. Touch this file when you add or rename a station.

   Each station's `data` field is the SAME file for every station
   in the shell — the consolidated link.js or land.js per topic.
   The engine still reads the per-station global (e.g.
   window.ECONOS_LINK_INTRO) populated by the consolidated file's
   inner IIFEs, so the engines need no changes.

   ─────────────────────────────────────────────────────────────
   Sub-route shape
   ─────────────────────────────────────────────────────────────
   Each shell exposes a `generate(topic)` function so the route
   fan-out at build time and the URL builders at runtime read
   ONE source of truth for "which sub-routes does this shell
   carry for this topic?". Link and Land return their static
   station-key list; Learn reads the topic's cards array and
   returns ['intro', '<card-slug-1>', …].

   Quiz pools that used to live at /quiz/<topic>/<set> are now
   folded into land.js. The /quiz/ URL contract is gone.
   ============================================================ */

(function () {
  'use strict';

  /* Card-slug helper — derives a stable URL token from a Learn
     It card's title. Mirrored at build time in vite.config.js
     (same algorithm); the runtime + build-time copies must agree
     so links round-trip. */
  function cardSlug(card, index, claimed) {
    var raw = (card && (card.slug || card.title)) || '';
    var slug = String(raw)
      .toLowerCase()
      .replace(/[^\w\s-]/g, ' ')   // strip punctuation → space
      .replace(/[\s_]+/g, '-')     // collapse whitespace/underscore → hyphen
      .replace(/^-+|-+$/g, '')     // trim leading/trailing hyphens
      .replace(/-{2,}/g, '-')      // collapse repeated hyphens
      .slice(0, 50);               // hard cap so paths stay sane
    if (!slug) slug = 'card-' + (index + 1);
    if (claimed) {
      var base = slug;
      var n = 2;
      while (claimed[slug]) { slug = base + '-' + n; n++; }
      claimed[slug] = true;
    }
    return slug;
  }

  /* Static station maps for Link / Land. Land sections are
     labelled `section-a/b/c` in URLs so the path is
     self-describing; the engine `boot` + per-section globals
     keep their short form ('a' / 'b' / 'c') for backwards
     compatibility with existing data files. */
  var linkStations = {
    intro:        { data: 'link-it.js', boot: 'bootLinkIntro',     engine: 'js/engines/link-intro.js',             title: 'Intro' },
    context:      { data: 'link-it.js', boot: 'bootLinkContext',   engine: 'js/engines/link-engine.js',            title: 'Context' },
    chain:        { data: 'link-it.js', boot: 'bootLinkChain',     engine: 'js/engines/link-chain-engine.js',      title: 'Chain' },
    'chain-open': { data: 'link-it.js', boot: 'bootLinkChainOpen', engine: 'js/engines/link-chain-open-engine.js', title: 'Open chain' },
    calc:         { data: 'link-it.js', boot: 'bootLinkCalc',      engine: 'js/engines/link-calc-engine.js',       title: 'Calculate It' },
    data:         { data: 'link-it.js', boot: 'bootLinkData',      engine: 'js/engines/link-data-engine.js',       title: 'Read the Data' },
    extract:      { data: 'link-it.js', boot: 'bootLinkExtract',   engine: 'js/engines/link-extract-engine.js',    title: 'Read the Extract' },
    predict:      { data: 'link-it.js', boot: 'bootLinkPredict',   engine: 'js/engines/link-predict-engine.js',    title: 'Predict Outcome' },
    diagram:      { data: 'link-it.js', boot: 'bootLinkDiagram',   engine: 'js/engines/link-diagram-engine.js',    title: 'Diagram' },
    depends:      { data: 'link-it.js', boot: 'bootLinkDepends',   engine: 'js/engines/link-depends-engine.js',    title: 'It depends' },
    judge:        { data: 'link-it.js', boot: 'bootLinkJudge',     engine: 'js/engines/link-judge-engine.js',      title: 'Judge' },
    complete:     { data: 'link-it.js', boot: 'bootLinkComplete',  engine: 'js/engines/link-complete-engine.js',   title: 'Complete' }
  };

  var landStations = {
    'intro':     { data: 'land-it.js', boot: 'bootLandIntro',    engine: 'js/engines/land-intro-engine.js',     title: 'Intro' },
    'section-a': { data: 'land-it.js', boot: 'bootLandSectionA', engine: 'js/engines/land-section-a-engine.js', title: 'Section A' },
    'section-b': { data: 'land-it.js', boot: 'bootLandSectionB', engine: 'js/engines/land-section-b-engine.js', title: 'Section B' },
    'section-c': { data: 'land-it.js', boot: 'bootLandSectionC', engine: 'js/engines/land-section-c-engine.js', title: 'Section C' },
    'complete':  { data: 'land-it.js', boot: 'bootLandComplete', engine: 'js/engines/land-complete-engine.js',  title: 'Complete' }
  };

  window.ECONOS_STATIONS = {
    link: linkStations,
    land: landStations
  };

  /* Per-shell sub-route generator. Called by:
       - vite.config.js writeRoute loop at build time
       - TopicLoader.routes builders at runtime (indirectly, via
         the route factory)
     For `learn`, `topicCards` is the cards array off the topic's
     data file. Build-time has the cards in hand; runtime callers
     that don't have the data don't need to generate the list
     (they ask for a single card slug, not the set). */
  window.ECONOS_STATION_GENERATORS = {
    /* `intro` is the cover view, addressed by the BARE shell URL —
       not enumerated here. Build-time route generation + runtime
       URL building both treat the bare URL as the entry point. */
    learn: function (topicCards) {
      var out = [];
      var claimed = { intro: true };   // reserve so cardSlug never collides
      var cards = Array.isArray(topicCards) ? topicCards : [];
      for (var i = 0; i < cards.length; i++) {
        out.push(cardSlug(cards[i], i, claimed));
      }
      return out;
    },
    link: function () {
      return Object.keys(linkStations).filter(function (s) { return s !== 'intro'; });
    },
    land: function () {
      return Object.keys(landStations).filter(function (s) { return s !== 'intro'; });
    }
  };

  /* Export the slug helper itself so app.js + the URL builders
     can compute a single card's slug without re-implementing
     the algorithm. */
  window.ECONOS_CARD_SLUG = cardSlug;
})();
