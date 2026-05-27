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
                                  complete|quiz)
       /land/<topic>/<section>    Land It (intro|a|b|c|complete|
                                  quiz)
       /quiz/<topic>/<set>        Standalone quiz

   <topic> in the URL is the topic ID with underscores replaced
   by hyphens (toSlug); the parser maps it back (fromSlug) when
   loading data files, which live at /js/data/<topic-id>/. Same
   rule for the only multi-word station, chain-open ↔ chain_open.

   Path parsing happens once in `parsePath()` and is exposed via
   `getTopic`, `getStation`, `getQuizSet`, `getShell`. URL building
   goes through `routes.<shell>(...)` — these are the canonical
   builders used by every engine, every shell, every data file.

   `go(url)` performs an in-place SPA navigation if the target is
   a station inside the currently-loaded Link or Land shell,
   otherwise a full page nav.
   ============================================================ */

(function () {
  'use strict';

  var DEFAULT_TOPIC = 'causes-of-inflation-and-deflation';

  /* Single mapping point between internal IDs (underscore) and
     URL slugs (hyphen). The mapping is bijective because no
     existing topic ID or station name contains a hyphen. */
  function toSlug(id)     { return String(id || '').replace(/_/g, '-'); }
  function fromSlug(slug) { return String(slug || '').replace(/-/g, '_'); }

  /* Recognised path segments. Used by the parser to distinguish
     a shell+topic+station path from random URLs that just happen
     to start with /link etc. */
  var SHELLS = { learn: true, link: true, land: true, quiz: true };

  /* parsePath('/link/causes-of-inflation-and-deflation/chain-open')
       → { shell: 'link', topic: 'causes-of-inflation-and-deflation', station: 'chain-open' }
     parsePath('/')              → { shell: 'home' }
     parsePath('/learn')         → { shell: 'learn', topic: null }
     parsePath('/quiz/X/main')   → { shell: 'quiz', topic: 'X', quizSet: 'main' }
     Returns null for paths the loader doesn't recognise. */
  function parsePath(pathname) {
    var p = String(pathname || window.location.pathname || '/');
    /* Strip trailing slash (except for the root). */
    if (p.length > 1 && p.charAt(p.length - 1) === '/') {
      p = p.substring(0, p.length - 1);
    }
    if (p === '' || p === '/') { return { shell: 'home' }; }
    var parts = p.split('/').filter(Boolean); // remove empty leading from "/"
    var shell = parts[0];
    if (!SHELLS[shell]) { return null; }
    var topic = parts[1] ? fromSlug(parts[1]) : null;
    var third = parts[2] ? fromSlug(parts[2]) : null;
    if (shell === 'quiz') { return { shell: shell, topic: topic, quizSet: third }; }
    return { shell: shell, topic: topic, station: third };
  }

  function getRoute() {
    return parsePath(window.location.pathname) || { shell: null };
  }

  function getTopic()    { return getRoute().topic    || DEFAULT_TOPIC; }
  function getStation()  { return getRoute().station  || null; }
  function getQuizSet()  { return getRoute().quizSet  || null; }
  function getShell()    { return getRoute().shell    || null; }

  /* Canonical session labels — single source of truth so data files
     don't all need to repeat 'Session N of 3: …'. Engines should pass
     `T.sessionLabel || TopicLoader.sessionLabel('link')` when rendering
     the topbar. Stage is one of 'learn' | 'link' | 'land' | 'quiz'. */
  var SESSION_LABELS = {
    learn: 'Session 1 of 3: Learn',
    link:  'Session 2 of 3: Link',
    land:  'Session 3 of 3: Land',
    quiz:  'Quiz'
  };
  function sessionLabel(stage) { return SESSION_LABELS[stage] || ''; }

  /* URL builders. Every internal href, every JS string used as a
     URL, every router pushState — they all flow through these.
     Topic defaults to the current topic from the URL so most
     callers don't need to pass it. */
  var routes = {
    home:  function ()             { return '/'; },
    learn: function (topic)        { return '/learn/' + toSlug(topic || getTopic()); },
    link:  function (station, topic) {
      return '/link/' + toSlug(topic || getTopic()) + '/' + toSlug(station || 'intro');
    },
    land:  function (section, topic) {
      return '/land/' + toSlug(topic || getTopic()) + '/' + toSlug(section || 'intro');
    },
    quiz:  function (set, topic) {
      return '/quiz/' + toSlug(topic || getTopic()) + '/' + toSlug(set || 'main');
    }
  };

  /* Programmatic navigation. If the URL is a station inside the
     currently-loaded SPA shell, hand off to that router for a
     pushState SPA transition. Otherwise do a real page nav. */
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

  function loadData(dataFiles, callback, sectionLabel) {
    var topic = getTopic();
    var files = (typeof dataFiles === 'string') ? [dataFiles] : dataFiles;
    var idx = 0;

    function next() {
      if (idx >= files.length) { callback(); return; }
      var script = document.createElement('script');
      script.src = '/js/data/' + topic + '/' + files[idx];
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

  /* One-shot redirect from the previous query-string URL form
     (`?topic=foo&station=bar`) to the canonical path form. Runs
     synchronously before any other script reads the URL, so the
     rest of the codebase only ever sees the canonical form. */
  (function redirectLegacyQueryUrls() {
    try {
      var search = window.location.search;
      if (!search || search.indexOf('topic=') < 0) { return; }
      var params = new URLSearchParams(search);
      var topic  = params.get('topic');
      if (!topic) { return; }
      var shell  = getShell();
      var target = null;
      if (shell === 'learn' || shell === null) {
        target = routes.learn(topic);
      } else if (shell === 'link') {
        target = routes.link(params.get('station') || 'intro', topic);
      } else if (shell === 'land') {
        target = routes.land(params.get('station') || 'intro', topic);
      } else if (shell === 'quiz') {
        target = routes.quiz(params.get('quiz') || 'main', topic);
      }
      if (target) { window.history.replaceState(null, '', target); }
    } catch (e) { /* don't block boot on a redirect failure */ }
  })();

  window.TopicLoader = {
    /* URL parsing */
    parsePath:           parsePath,
    getTopic:            getTopic,
    getStation:          getStation,
    getQuizSet:          getQuizSet,
    getShell:            getShell,
    /* Slug helpers */
    toSlug:              toSlug,
    fromSlug:            fromSlug,
    /* URL building — the canonical entry points */
    routes:              routes,
    /* Navigation */
    go:                  go,
    /* Misc */
    sessionLabel:        sessionLabel,
    /* Data loading */
    loadData:            loadData,
    loadDataAndBoot:     loadDataAndBoot,
    loadDataThenScript:  loadDataThenScript
  };
})();
