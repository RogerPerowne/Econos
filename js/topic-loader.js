/* ============================================================
   ECONOS — Topic loader & URL routes
   ─────────────────────────────────────────────────────────────
   Single source of truth for the site's URL contract. The
   public form is path-based and human-readable:

       /                                                home (topic index)
       /<board>/<theme>/<topic>/learn-it                 Learn It cover
       /<board>/<theme>/<topic>/learn-it/<card>          Learn It card
       /<board>/<theme>/<topic>/link-it                  Link It intro
       /<board>/<theme>/<topic>/link-it/<station>        Link It station
       /<board>/<theme>/<topic>/land-it                  Land It intro
       /<board>/<theme>/<topic>/land-it/<section>        Land It section

   Sub-routes per shell:
     Learn  — title-derived card slug (e.g.
              'demand-pull-inflation'); fallback 'card-<n>'.
              The bare /learn-it URL renders the cover.
     Link   — context | chain | chain-open | calc | data | extract |
              predict | diagram | depends | judge | complete.
              The bare /link-it URL renders the intro.
     Land   — section-a | section-b | section-c | complete.
              The bare /land-it URL renders the intro.

   `<topic>` is the topic slug — derived from its display title
   (e.g. "Negative Externalities" → `negative-externalities`).
   The slug IS the directory name under `/js/data/<board>/<theme>/`,
   the registry `id` field in `js/topics.js`, and the URL segment.
   One string everywhere — no conversion layer.

   Path parsing happens once in `parsePath()` and is exposed via
   `getTopic`, `getStation`, `getCard`, `getShell`. URL building
   goes through `routes.<shell>(...)` — these are the canonical
   builders used by every engine, every shell, every data file.
   Builders share a `makeShellRoute(shellSegment)` factory so
   adding a fourth shell (e.g. `quiz-it`) is one line.

   `go(url)` performs an in-place SPA navigation if the target is
   a station inside the currently-loaded Link or Land shell,
   otherwise a full page nav.

   Data layer: each board reads ONLY its own files at
   /js/data/<board>/<theme>/<topic>/<file>. No cross-board
   fallback. Non-Edexcel-A topics ship a placeholder learn-it.js
   with an empty cards array (just the cover view).
   ============================================================ */

(function () {
  'use strict';

  var DEFAULT_TOPIC = 'causes-of-inflation-and-deflation';

  /* Recognised shell tokens. The URL uses the suffixed form
     (learn-it / link-it / land-it); existing engine code matches
     on the short form (learn / link / land). The parser maps URL
     → short and returns the short form so callers don't have to
     change. */
  var URL_TO_SHELL = { 'learn-it': 'learn', 'link-it': 'link', 'land-it': 'land' };

  function parsePath(pathname) {
    var p = String(pathname || window.location.pathname || '/');
    if (p.length > 1 && p.charAt(p.length - 1) === '/') {
      p = p.substring(0, p.length - 1);
    }
    if (p === '' || p === '/') { return { shell: 'home' }; }
    var parts = p.split('/').filter(Boolean);
    /* Need at least board / theme / topic / shell. */
    if (parts.length < 4) { return null; }
    var board = parts[0];
    var theme = parts[1];
    var topic = parts[2];
    var urlShell = parts[3];
    if (!URL_TO_SHELL.hasOwnProperty(urlShell)) { return null; }
    if (!window.ECONOS_BOARDS || !window.ECONOS_BOARDS[board]) { return null; }
    var shell = URL_TO_SHELL[urlShell];
    var sub = parts[4] || null;
    return {
      board:   board,
      theme:   theme,
      topic:   topic,
      shell:   shell,
      station: sub
    };
  }

  function getRoute() {
    return parsePath(window.location.pathname) || { shell: null };
  }

  function getTopic()    { return getRoute().topic    || DEFAULT_TOPIC; }
  function getStation()  { return getRoute().station  || null; }
  function getShell()    { return getRoute().shell    || null; }
  /* Friendly alias for Learn-It callers — the sub-route there
     is a card slug, not a station. parsePath returns it under
     `station` either way; getCard() reads more naturally on
     learn-it call sites. */
  function getCard()     { return getStation(); }

  /* Canonical session labels — single source of truth so data files
     don't all need to repeat 'Session N of 3: …'. Engines should pass
     `T.sessionLabel || TopicLoader.sessionLabel('link')` when rendering
     the topbar. Stage is the SHORT form 'learn' | 'link' | 'land' —
     the same that parsePath returns. Display labels carry the
     full "Learn it / Link it / Land it" branding. */
  var SESSION_LABELS = {
    learn: 'Session 1 of 3: Learn it',
    link:  'Session 2 of 3: Link it',
    land:  'Session 3 of 3: Land it'
  };
  function sessionLabel(stage) { return SESSION_LABELS[stage] || ''; }

  /* ──────────────────────────────────────────────────────────────
     Exam-board selection (localStorage-backed).
     ─────────────────────────────────────────────────────────────
     The user picks one of the boards in window.ECONOS_BOARDS via
     the account-menu picker. Selection persists in localStorage
     under `econos:board`. Every surface that displays a spec
     point or filters by inclusion reads this. Defaults to the
     board with isDefault:true in the registry (currently
     edexcel_a) when nothing is set or the value is invalid. */
  var BOARD_STORAGE_KEY = 'econos:board';
  function defaultBoard() {
    var boards = window.ECONOS_BOARDS || {};
    for (var k in boards) {
      if (boards.hasOwnProperty(k) && boards[k].isDefault) return k;
    }
    return 'edexcel_a';
  }
  function getBoard() {
    /* Prefer the board pinned in the URL when present — that's
       the source of truth for the current page. localStorage is
       only the user's default for navigation away from a URL
       that didn't pin one. */
    try {
      var route = parsePath(window.location.pathname);
      if (route && route.board && window.ECONOS_BOARDS && window.ECONOS_BOARDS[route.board]) {
        return route.board;
      }
    } catch (e) { /* fall through */ }
    var stored;
    try { stored = window.localStorage.getItem(BOARD_STORAGE_KEY); }
    catch (e) { stored = null; }
    if (stored && window.ECONOS_BOARDS && window.ECONOS_BOARDS[stored]) {
      return stored;
    }
    return defaultBoard();
  }
  function setBoard(id) {
    if (!window.ECONOS_BOARDS || !window.ECONOS_BOARDS[id]) return false;
    try { window.localStorage.setItem(BOARD_STORAGE_KEY, id); return true; }
    catch (e) { return false; }
  }
  function getBoardName() {
    var id = getBoard();
    var b = (window.ECONOS_BOARDS || {})[id];
    return (b && b.name) || id;
  }
  /* Per-board top-level division label for the active theme slug.
     Reads ECONOS_BOARD_DIVISIONS — falls back to the bare slug
     when no entry is registered. Used by the topbar chip and
     topic-grid section headers. */
  function divisionLabelFor(board, themeSlug) {
    var map = (window.ECONOS_BOARD_DIVISIONS || {})[board] || {};
    return map[themeSlug] || themeSlug;
  }

  /* URL builders. Every internal href, every JS string used as a
     URL, every router pushState — they all flow through these.
     Canonical form is /<board>/<theme>/<topic>/<shell>(/<sub>):
       routes.learn('inflation')               → '/aqa/macro/inflation/learn-it'
       routes.learn('demand-pull', 'inflation') → '/aqa/macro/inflation/learn-it/demand-pull'
       routes.link('chain', 'inflation')        → '/aqa/macro/inflation/link-it/chain'
       routes.land('section-a', 'inflation')    → '/aqa/macro/inflation/land-it/section-a'
     Board comes from getBoard(); theme comes from the registry
     via themeFor(topic, board). Topic defaults to the current
     topic from the URL so most callers don't need to pass it. */
  function urlBase(topic) {
    var t = topic || getTopic();
    var b = getBoard();
    return '/' + b + '/' + themeFor(t, b) + '/' + t;
  }

  /* Route builder factory. One source of truth so every shell
     emits URLs with the same shape. Adding a fourth shell
     (e.g. quiz-it) is now `routes.quiz = makeShellRoute('quiz-it')`
     and one line in vite.config.js's writeRoute loop. */
  function makeShellRoute(shellSegment) {
    return function (subOrTopic, topic) {
      /* allow (sub) or (sub, topic) or () or (topic) — second-arg
         is ALWAYS the topic. First arg is treated as a sub-route
         when it's a non-empty string AND it's not a known topic
         id. We accept either ordering so existing call sites
         that pass `routes.learn(topicId)` keep working. */
      var sub = null;
      var t = null;
      if (typeof subOrTopic === 'string') {
        if (topic !== undefined) {
          /* explicit (sub, topic) */
          sub = subOrTopic;
          t = topic;
        } else if (topicEntry(subOrTopic)) {
          /* one arg, looks like a topic id */
          t = subOrTopic;
        } else {
          /* one arg, not a known topic id — treat as sub */
          sub = subOrTopic;
        }
      } else if (topic !== undefined) {
        /* first arg omitted (null/undefined) but an explicit topic was
           passed — e.g. routes.learn(null, nextTopicId) from the Link It /
           Land It completion footers. Honour the topic and emit its bare
           cover. Previously this fell through with t=null, so urlBase()
           used the CURRENT topic from the URL — sending "Next topic" to
           the current topic's Learn It (and 404-ing when getTopic() didn't
           resolve on a completion screen). */
        t = topic;
      }
      /* 'intro' is the cover view — addressed by the BARE shell URL,
         not a distinct sub-route. Collapse the explicit form so
         every caller that passes 'intro' (engines, data files,
         UI links) ends up emitting the same canonical URL. */
      if (sub === 'intro') sub = null;
      return urlBase(t) + '/' + shellSegment + (sub ? '/' + sub : '');
    };
  }
  /* Find the next topic AFTER `fromId` that has Learn It available
     AND is INCLUDED on the current board. Walks the registry forward,
     skipping topics with `available.learn === false` OR with the
     current board's `boards[<board>].included === false`. That second
     check is essential: e.g. `factors-of-production` is hidden from
     Edexcel A (content folded into `the-economic-problem`), so its
     route files aren't emitted by the build — a "Next topic" button
     pointing at it would 404 for Edexcel A users. Returns null if
     `fromId` is the last reachable topic for this board. */
  function nextLearnableTopicAfter(fromId) {
    var arr = (typeof window !== 'undefined' && window.ECONOS_TOPICS) || [];
    var board = getBoard();
    var idx = -1;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] && arr[i].id === fromId) { idx = i; break; }
    }
    if (idx < 0) return null;
    for (var j = idx + 1; j < arr.length; j++) {
      var nt = arr[j];
      if (!nt || !nt.available || !nt.available.learn) continue;
      var be = nt.boards && nt.boards[board];
      if (be && be.included === false) continue;
      return nt;
    }
    return null;
  }

  var routes = {
    home:  function () { return '/'; },
    learn: makeShellRoute('learn-it'),
    link:  makeShellRoute('link-it'),
    land:  makeShellRoute('land-it'),
    /* Legacy compat shim — the /quiz/ standalone shell was retired in
       v0.4.0 but existing learn.js files still reference quizCta
       fields built with this expression. Returns '' so the data file
       parses; the app.js renderer no longer reads quizCta so the
       value is never surfaced. Remove this shim once every learn.js
       file is rewritten to drop quizCta. */
    quiz:  function () { return ''; }
  };

  /* Programmatic navigation. If the URL is a station inside the
     currently-loaded SPA shell, hand off to that router for a
     pushState SPA transition. Otherwise a real page nav. */
  function go(url) {
    if (!url) { return; }
    try {
      var route = parsePath(String(url).split('?')[0].split('#')[0]);
      if (route && route.shell === 'link' && route.station && window.LinkRouter) {
        window.LinkRouter.navigate(url); return;
      }
      if (route && route.shell === 'land' && route.station && window.LandRouter) {
        window.LandRouter.navigate(url); return;
      }
    } catch (e) { /* fall through to full nav */ }
    window.location.href = url;
  }

  function showMissingTopicMessage(topic, section) {
    /* Render into #app-root so sidebar/topbar chrome survives where present.
       Fall back to document.body only when the page has no app root. */
    var target = document.getElementById('app-root') || document.body;
    target.innerHTML = ''
      + '<div style="padding:48px 24px;font-family:Inter,sans-serif;text-align:center;max-width:520px;margin:0 auto;">'
      +   '<h1 style="font-family:Fraunces,serif;font-size:28px;margin-bottom:12px;color:#0B1426;">Content not ready yet</h1>'
      +   '<p style="color:#6B7280;margin-bottom:24px;">The <strong>' + section + '</strong> content for <strong>' + topic + '</strong> hasn\'t been added yet. Check back soon.</p>'
      +   '<a href="/" style="display:inline-block;padding:10px 18px;background:#0B1426;color:#fff;border-radius:8px;text-decoration:none;font-weight:600;">← Back to topics</a>'
      + '</div>';
  }

  /* Per-topic data loader.
     ─────────────────────────────────────────────────────────────
     Data lives under `/js/data/<board>/<theme>/<topic>/<file>`.
     `<theme>` is derived from each topic's `boards.<board>.spec`
     in the topic registry: Edexcel A / B use `theme-1..theme-4`;
     AQA / OCR use `micro` / `macro`. Topics with no registry
     entry land in `misc`.

     Each board reads ONLY its own files — no cross-board
     fallback. When a non-Edexcel-A board doesn't yet ship real
     content for a topic, a placeholder learn-it.js (just the
     cover view, empty cards array) is generated at build time
     by vite.config.js. */
  function topicEntry(topic) {
    var reg = window.ECONOS_TOPICS;
    if (!Array.isArray(reg)) return null;
    for (var i = 0; i < reg.length; i++) {
      if (reg[i] && reg[i].id === topic) return reg[i];
    }
    return null;
  }

  function themeFor(topic, board) {
    var t = topicEntry(topic);
    if (!t || !t.boards) return 'misc';
    var spec = t.boards[board] && t.boards[board].spec;
    if (board === 'edexcel_a' || board === 'edexcel_b') {
      return spec ? 'theme-' + String(spec).charAt(0) : 'misc';
    }
    if (board === 'aqa') {
      if (!spec) return 'misc';
      var parts = String(spec).split('.');
      return parts[1] === '1' ? 'micro' : 'macro';
    }
    if (board === 'ocr') {
      /* OCR's spec values in js/topics.js use a compact `X.Y` form
         that doesn't reliably encode the component (Component 1 =
         Microeconomics, Component 2 = Macroeconomics). Until the
         OCR specs are audited and rewritten in `<component>.X.Y`
         form (a separate content task), we classify by Edexcel A's
         theme as the structural source of truth: themes 1+3 → micro,
         themes 2+4 → macro. Data files are still board-isolated
         (no fallback); this only affects the theme SLUG in URLs. */
      var ea = t.boards.edexcel_a && t.boards.edexcel_a.spec;
      if (ea) {
        var d = String(ea).charAt(0);
        if (d === '1' || d === '3') return 'micro';
        if (d === '2' || d === '4') return 'macro';
      }
      if (spec) {
        var od = String(spec).charAt(0);
        if (od === '1') return 'micro';
        if (od === '2') return 'macro';
      }
      return 'misc';
    }
    return 'misc';
  }

  function dataPath(topic, file) {
    var board = getBoard();
    return '/js/data/' + board + '/' + themeFor(topic, board) + '/' + topic + '/' + file;
  }

  function loadData(dataFiles, callback, sectionLabel) {
    var topic = getTopic();
    var files = (typeof dataFiles === 'string') ? [dataFiles] : dataFiles;
    var idx = 0;

    function next() {
      if (idx >= files.length) { callback(); return; }
      var script = document.createElement('script');
      script.src = dataPath(topic, files[idx]);
      script.onload = function () { idx++; next(); };
      script.onerror = function () {
        showMissingTopicMessage(topic, sectionLabel || 'this section');
      };
      document.head.appendChild(script);
    }
    next();
  }

  function loadDataAndBoot(dataFiles, bootFn, sectionLabel) {
    loadData(dataFiles, function () {
      if (typeof window[bootFn] === 'function') {
        window[bootFn]();
      } else {
        showMissingTopicMessage(getTopic(), sectionLabel || 'this section');
      }
    }, sectionLabel);
  }

  function loadDataThenScript(dataFiles, scriptSrc, sectionLabel) {
    loadData(dataFiles, function () {
      var s = document.createElement('script');
      s.src = scriptSrc;
      document.head.appendChild(s);
    }, sectionLabel);
  }

  window.TopicLoader = {
    /* URL parsing */
    parsePath:           parsePath,
    getTopic:            getTopic,
    getStation:          getStation,
    getCard:             getCard,
    getShell:            getShell,
    /* URL building — the canonical entry points */
    routes:              routes,
    /* Navigation */
    go:                  go,
    /* Exam-board selection */
    getBoard:            getBoard,
    setBoard:            setBoard,
    getBoardName:        getBoardName,
    divisionLabelFor:    divisionLabelFor,
    /* Misc */
    sessionLabel:        sessionLabel,
    nextLearnableTopicAfter: nextLearnableTopicAfter,
    /* Data loading */
    loadData:            loadData,
    loadDataAndBoot:     loadDataAndBoot,
    loadDataThenScript:  loadDataThenScript
  };
})();
