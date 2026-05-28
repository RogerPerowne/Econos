/* ============================================================
   ECONOS — Topic loader & URL routes
   ─────────────────────────────────────────────────────────────
   Single source of truth for the site's URL contract. The
   public form is path-based and human-readable:

       /                          home (topic index)
       /learn/<topic>             Learn It
       /link/<topic>/<station>    Link It (intro|context|chain|
                                  chain-open|calc|data|extract|
                                  predict|diagram|depends|judge|
                                  complete)
       /land/<topic>/<section>    Land It (intro|a|b|c|complete)

   `<topic>` is the topic's slug — derived from its display title
   (e.g. "Negative Externalities" → `negative-externalities`). The
   slug IS the directory name under `/js/data/`, the registry `id`
   field in `js/topics.js`, and the URL segment. No conversion
   layer — the same string everywhere.

   Stations are short tokens, all lowercase, dashes for multi-word
   (only `chain-open` is multi-word today). Same identity rule.

   Path parsing happens once in `parsePath()` and is exposed via
   `getTopic`, `getStation`, `getShell`. URL building goes through
   `routes.<shell>(...)` — these are the canonical builders used
   by every engine, every shell, every data file.

   `go(url)` performs an in-place SPA navigation if the target is
   a station inside the currently-loaded Link or Land shell,
   otherwise a full page nav.
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

  /* parsePath canonical form (v0.7.0+):
       /<board>/<theme>/<topic>/learn-it
       /<board>/<theme>/<topic>/link-it/<station>
       /<board>/<theme>/<topic>/land-it/<section>

     Example:
       parsePath('/aqa/macro/causes-of-inflation-and-deflation/link-it/chain-open')
         → {
             board:   'aqa',
             theme:   'macro',
             topic:   'causes-of-inflation-and-deflation',
             shell:   'link-it',
             station: 'chain-open'
           }

     parsePath('/') → { shell: 'home' }
     Returns null for paths that don't fit the contract. */
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

  /* URL builders. Every internal href, every JS string used as a
     URL, every router pushState — they all flow through these.
     Canonical form is /<board>/<theme>/<topic>/<shell>(/<sub>):
       routes.learn('inflation')               → '/aqa/macro/inflation/learn'
       routes.link('chain', 'inflation')        → '/aqa/macro/inflation/link/chain'
       routes.land('a',    'inflation')         → '/aqa/macro/inflation/land/a'
     Board comes from getBoard(); theme comes from the registry
     via themeFor(topic, board). Topic defaults to the current
     topic from the URL so most callers don't need to pass it. */
  function urlBase(topic) {
    var t = topic || getTopic();
    var b = getBoard();
    return '/' + b + '/' + themeFor(t, b) + '/' + t;
  }
  var routes = {
    home:  function ()             { return '/'; },
    learn: function (topic)        { return urlBase(topic) + '/learn-it'; },
    link:  function (station, topic) {
      return urlBase(topic) + '/link-it/' + (station || 'intro');
    },
    land:  function (section, topic) {
      return urlBase(topic) + '/land-it/' + (section || 'intro');
    },
    /* Legacy compat shim — the /quiz/ standalone shell was retired in
       v0.4.0 but existing learn.js files still reference quizCta
       fields built with this expression. Returns '' so the data file
       parses; the app.js renderer no longer reads quizCta so the
       value is never surfaced. Remove this shim once every learn.js
       file is rewritten to drop quizCta. */
    quiz:  function ()             { return ''; }
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

     Falls back to the Edexcel A baseline path when the current
     board has no listed override for the requested file (see
     `window.ECONOS_BOARD_OVERRIDES` in `js/config/boards.js` for
     the per-file flags). Per-file granularity matters: a board
     can ship a custom learn.js while still inheriting the
     Edexcel A baseline for link.js / land.js on the same topic. */
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
      var ea = t.boards.edexcel_a && t.boards.edexcel_a.spec;
      if (!ea) return 'misc';
      var d = String(ea).charAt(0);
      if (d === '1' || d === '3') return 'micro';
      if (d === '2' || d === '4') return 'macro';
      return 'misc';
    }
    return 'misc';
  }

  function dataPath(topic, file) {
    var board = getBoard();
    if (board && board !== 'edexcel_a') {
      var overrides = window.ECONOS_BOARD_OVERRIDES || {};
      var topicOverrides = (overrides[board] || {})[topic];
      if (topicOverrides) {
        var stem = String(file).replace(/\.js$/, '');
        if (topicOverrides[stem]) {
          return '/js/data/' + board + '/' + themeFor(topic, board) + '/' + topic + '/' + file;
        }
      }
    }
    return '/js/data/edexcel_a/' + themeFor(topic, 'edexcel_a') + '/' + topic + '/' + file;
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
    getShell:            getShell,
    /* URL building — the canonical entry points */
    routes:              routes,
    /* Navigation */
    go:                  go,
    /* Exam-board selection */
    getBoard:            getBoard,
    setBoard:            setBoard,
    getBoardName:        getBoardName,
    /* Misc */
    sessionLabel:        sessionLabel,
    /* Data loading */
    loadData:            loadData,
    loadDataAndBoot:     loadDataAndBoot,
    loadDataThenScript:  loadDataThenScript
  };
})();
