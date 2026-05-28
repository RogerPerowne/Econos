/* ============================================================
   ECONOS — single source of truth for shell stations & quiz sets
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
   ============================================================ */

(function () {
  'use strict';
  window.ECONOS_STATIONS = {
    /* Link It stations — order is the canonical funnel.
       `data` is loaded under /js/data/<topic>/<data>; `boot` is the
       global function the engine publishes; `engine` is the lazy-loaded
       script that defines it. */
    link: {
      intro:        { data: 'link-intro.js',    boot: 'bootLinkIntro',     engine: 'js/engines/link-intro.js',             title: 'Intro' },
      context:      { data: 'link-context.js',  boot: 'bootLinkContext',   engine: 'js/engines/link-engine.js',            title: 'Context' },
      chain:        { data: 'link-chain.js',    boot: 'bootLinkChain',     engine: 'js/engines/link-chain-engine.js',      title: 'Chain' },
      'chain-open': { data: 'link-chain.js',    boot: 'bootLinkChainOpen', engine: 'js/engines/link-chain-open-engine.js', title: 'Open chain' },
      calc:         { data: 'link-calc.js',     boot: 'bootLinkCalc',      engine: 'js/engines/link-calc-engine.js',       title: 'Calculate It' },
      data:         { data: 'link-data.js',     boot: 'bootLinkData',      engine: 'js/engines/link-data-engine.js',       title: 'Read the Data' },
      extract:      { data: 'link-extract.js',  boot: 'bootLinkExtract',   engine: 'js/engines/link-extract-engine.js',    title: 'Read the Extract' },
      predict:      { data: 'link-predict.js',  boot: 'bootLinkPredict',   engine: 'js/engines/link-predict-engine.js',    title: 'Predict Outcome' },
      diagram:      { data: 'link-diagram.js',  boot: 'bootLinkDiagram',   engine: 'js/engines/link-diagram-engine.js',    title: 'Diagram' },
      depends:      { data: 'link-depends.js',  boot: 'bootLinkDepends',   engine: 'js/engines/link-depends-engine.js',    title: 'It depends' },
      judge:        { data: 'link-judge.js',    boot: 'bootLinkJudge',     engine: 'js/engines/link-judge-engine.js',      title: 'Judge' },
      complete:     { data: 'link-complete.js', boot: 'bootLinkComplete',  engine: 'js/engines/link-complete-engine.js',   title: 'Complete' },
      /* Quiz station — lazy-loads quiz-engine + a link-quiz-<set>.js
         file. The set name is read from the URL at call time. */
      quiz:         { title: 'Quiz' }
    },

    /* Land It sections + complete + quiz. */
    land: {
      intro:    { data: 'land-intro.js',     boot: 'bootLandIntro',    engine: 'js/engines/land-intro-engine.js',     title: 'Intro' },
      a:        { data: 'land-section-a.js', boot: 'bootLandSectionA', engine: 'js/engines/land-section-a-engine.js', title: 'Section A' },
      b:        { data: 'land-section-b.js', boot: 'bootLandSectionB', engine: 'js/engines/land-section-b-engine.js', title: 'Section B' },
      c:        { data: 'land-section-c.js', boot: 'bootLandSectionC', engine: 'js/engines/land-section-c-engine.js', title: 'Section C' },
      complete: { data: 'land-complete.js',  boot: 'bootLandComplete', engine: 'js/engines/land-complete-engine.js',  title: 'Complete' },
      quiz:     { title: 'Quiz' }
    },

    /* Quiz sets — these become /quiz/<topic>/<set>. Only the per-build
       path generator and sitemap use this list; the quiz engine reads
       the set name straight from the URL. Add a new set here when a
       topic ships its first data-quiz-<set>.js file with that name. */
    quizSets: ['main', 'causes']
  };
})();
