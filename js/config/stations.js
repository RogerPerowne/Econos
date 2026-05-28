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

   Quiz pools that used to live at /quiz/<topic>/<set> are now
   folded into land.js. The /quiz/ URL contract is gone.
   ============================================================ */

(function () {
  'use strict';
  window.ECONOS_STATIONS = {
    /* Link It stations — order is the canonical funnel. */
    link: {
      intro:        { data: 'link.js', boot: 'bootLinkIntro',     engine: 'js/engines/link-intro.js',             title: 'Intro' },
      context:      { data: 'link.js', boot: 'bootLinkContext',   engine: 'js/engines/link-engine.js',            title: 'Context' },
      chain:        { data: 'link.js', boot: 'bootLinkChain',     engine: 'js/engines/link-chain-engine.js',      title: 'Chain' },
      'chain-open': { data: 'link.js', boot: 'bootLinkChainOpen', engine: 'js/engines/link-chain-open-engine.js', title: 'Open chain' },
      calc:         { data: 'link.js', boot: 'bootLinkCalc',      engine: 'js/engines/link-calc-engine.js',       title: 'Calculate It' },
      data:         { data: 'link.js', boot: 'bootLinkData',      engine: 'js/engines/link-data-engine.js',       title: 'Read the Data' },
      extract:      { data: 'link.js', boot: 'bootLinkExtract',   engine: 'js/engines/link-extract-engine.js',    title: 'Read the Extract' },
      predict:      { data: 'link.js', boot: 'bootLinkPredict',   engine: 'js/engines/link-predict-engine.js',    title: 'Predict Outcome' },
      diagram:      { data: 'link.js', boot: 'bootLinkDiagram',   engine: 'js/engines/link-diagram-engine.js',    title: 'Diagram' },
      depends:      { data: 'link.js', boot: 'bootLinkDepends',   engine: 'js/engines/link-depends-engine.js',    title: 'It depends' },
      judge:        { data: 'link.js', boot: 'bootLinkJudge',     engine: 'js/engines/link-judge-engine.js',      title: 'Judge' },
      complete:     { data: 'link.js', boot: 'bootLinkComplete',  engine: 'js/engines/link-complete-engine.js',   title: 'Complete' }
    },

    /* Land It sections + complete. */
    land: {
      intro:    { data: 'land.js', boot: 'bootLandIntro',    engine: 'js/engines/land-intro-engine.js',     title: 'Intro' },
      a:        { data: 'land.js', boot: 'bootLandSectionA', engine: 'js/engines/land-section-a-engine.js', title: 'Section A' },
      b:        { data: 'land.js', boot: 'bootLandSectionB', engine: 'js/engines/land-section-b-engine.js', title: 'Section B' },
      c:        { data: 'land.js', boot: 'bootLandSectionC', engine: 'js/engines/land-section-c-engine.js', title: 'Section C' },
      complete: { data: 'land.js', boot: 'bootLandComplete', engine: 'js/engines/land-complete-engine.js',  title: 'Complete' }
    }
  };
})();
