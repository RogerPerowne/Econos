/* ============================================================
   ECONOS — Land It router (SPA shell for land.html)
   ─────────────────────────────────────────────────────────────
   land.html loads ALL Land engines + this router. Mirror of
   link-router.js — see that file's header for details.
   ============================================================ */

(function () {
  'use strict';

  var STATIONS = {
    intro:    { data: 'data-land-intro.js',     boot: 'bootLandIntro',    engine: 'js/engines/land-intro-engine.js' },
    a:        { data: 'data-land-section-a.js', boot: 'bootLandSectionA', engine: 'js/engines/land-section-a-engine.js' },
    b:        { data: 'data-land-section-b.js', boot: 'bootLandSectionB', engine: 'js/engines/land-section-b-engine.js' },
    c:        { data: 'data-land-section-c.js', boot: 'bootLandSectionC', engine: 'js/engines/land-section-c-engine.js' },
    complete: { data: 'data-land-complete.js',  boot: 'bootLandComplete', engine: 'js/engines/land-complete-engine.js' },
    /* Quiz station — see LinkRouter for the same pattern. Loads
       data-land-quiz-<set>.js (default 'main') + quiz-engine. */
    quiz:     {}
  };

  var dataLoaded = {};
  var scriptsLoaded = {};

  function loadScript(src, cb) {
    if (scriptsLoaded[src]) return cb();
    var s = document.createElement('script');
    s.src = src;
    s.onload = function () { scriptsLoaded[src] = true; cb(); };
    s.onerror = function () { cb(); };
    document.head.appendChild(s);
  }

  var prefetched = {};
  function prefetchStation(station) {
    if (!station || prefetched[station]) return;
    var cfg = STATIONS[station];
    if (!cfg) return;
    prefetched[station] = true;
    [cfg.engine, cfg.data && ('js/data/' + TopicLoader.getTopic() + '/' + cfg.data)]
      .filter(Boolean)
      .forEach(function (href) {
        var l = document.createElement('link');
        l.rel = 'prefetch';
        l.href = href;
        l.as = href.endsWith('.js') ? 'script' : 'fetch';
        document.head.appendChild(l);
      });
  }
  var NEXT_HINTS = {
    intro:    ['a', 'b', 'c'],
    a:        ['b', 'c', 'complete'],
    b:        ['c', 'complete'],
    c:        ['complete'],
    complete: []
  };
  function prefetchAdjacent(current) {
    var next = NEXT_HINTS[current] || [];
    var go = function () { next.forEach(prefetchStation); };
    if (window.requestIdleCallback) requestIdleCallback(go, { timeout: 2000 });
    else setTimeout(go, 800);
  }

  function urlToStation(url) {
    if (!url) return null;
    var qStart = String(url).indexOf('?');
    if (qStart < 0) return null;
    try {
      var params = new URLSearchParams(url.substring(qStart));
      var s = params.get('station');
      return s && STATIONS[s] ? s : null;
    } catch (e) { return null; }
  }

  function isLandUrl(url) {
    if (!url) return false;
    var path = String(url).split('?')[0].split('#')[0];
    var file = path.substring(path.lastIndexOf('/') + 1);
    return file === 'land.html' && !!urlToStation(url);
  }

  function loadStation(station) {
    var cfg = STATIONS[station];
    if (!cfg) {
      console.error('LandRouter: unknown station', station);
      return;
    }
    if (station === 'quiz') {
      var quizSet = new URLSearchParams(window.location.search).get('quiz') || 'main';
      var dataFile = 'data-land-quiz-' + quizSet + '.js';
      loadScript('js/engines/quiz-engine.js', function () {
        TopicLoader.loadData(dataFile, function () {
          if (typeof window.bootQuizStation === 'function') {
            window.bootQuizStation({ stage: 'land' });
            window.scrollTo(0, 0);
          }
        }, 'Land It quiz');
      });
      return;
    }
    var bootFn = function () {
      var fn = window[cfg.boot];
      if (typeof fn === 'function') {
        fn();
        window.scrollTo(0, 0);
      } else {
        console.error('LandRouter: boot function not defined', cfg.boot);
      }
    };
    var loadDataThenBoot = function () {
      if (dataLoaded[cfg.data]) {
        bootFn();
      } else {
        TopicLoader.loadData(cfg.data, function () {
          dataLoaded[cfg.data] = true;
          bootFn();
        }, 'Land It ' + station);
      }
    };
    if (cfg.engine) {
      loadScript(cfg.engine, loadDataThenBoot);
    } else {
      loadDataThenBoot();
    }
    prefetchAdjacent(station);
  }

  function navigate(url) {
    if (!url) return;
    if (!isLandUrl(url)) {
      window.location.href = url;
      return;
    }
    var station = urlToStation(url);
    history.pushState({ station: station }, '', url);
    loadStation(station);
  }

  function start(station) {
    if (!STATIONS[station]) {
      console.error('LandRouter.start: unknown station', station);
      return;
    }

    history.replaceState({ station: station }, '', window.location.href);

    document.addEventListener('click', function (e) {
      if (e.defaultPrevented) return;
      if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
      if (typeof e.button === 'number' && e.button !== 0) return;
      var a = e.target && e.target.closest ? e.target.closest('a') : null;
      if (!a) return;
      var href = a.getAttribute('href');
      if (!href || href.charAt(0) === '#') return;
      if (a.target && a.target !== '' && a.target !== '_self') return;
      if (!isLandUrl(href)) return;
      e.preventDefault();
      navigate(href);
    }, true);

    window.addEventListener('popstate', function (e) {
      var s = (e.state && e.state.station) || urlToStation(window.location.href);
      if (s && STATIONS[s]) loadStation(s);
    });

    loadStation(station);
  }

  window.LandRouter = {
    navigate: navigate,
    start:    start,
    stations: STATIONS
  };
})();
