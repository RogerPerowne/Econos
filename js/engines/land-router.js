/* ============================================================
   ECONOS — Land It router (SPA shell for land.html)
   ─────────────────────────────────────────────────────────────
   land.html loads ALL Land engines + this router. Mirror of
   link-router.js — see that file's header for details.
   ============================================================ */

(function () {
  'use strict';

  var STATIONS = {
    intro:    { data: 'land-intro.js',     boot: 'bootLandIntro',    engine: 'js/engines/land-intro-engine.js',    title: 'Intro' },
    a:        { data: 'land-section-a.js', boot: 'bootLandSectionA', engine: 'js/engines/land-section-a-engine.js',title: 'Section A' },
    b:        { data: 'land-section-b.js', boot: 'bootLandSectionB', engine: 'js/engines/land-section-b-engine.js',title: 'Section B' },
    c:        { data: 'land-section-c.js', boot: 'bootLandSectionC', engine: 'js/engines/land-section-c-engine.js',title: 'Section C' },
    complete: { data: 'land-complete.js',  boot: 'bootLandComplete', engine: 'js/engines/land-complete-engine.js', title: 'Complete' },
    quiz:     { title: 'Quiz' }
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
    [cfg.engine, cfg.data && ('/js/data/' + TopicLoader.getTopic() + '/' + cfg.data)]
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
    var route = TopicLoader.parsePath(String(url || '').split('?')[0].split('#')[0]);
    if (!route || route.shell !== 'land') return null;
    return route.station && STATIONS[route.station] ? route.station : null;
  }
  function isLandUrl(url) {
    if (!url) return false;
    var route = TopicLoader.parsePath(String(url).split('?')[0].split('#')[0]);
    return !!(route && route.shell === 'land' && route.station && STATIONS[route.station]);
  }

  function setTitle(station) {
    var cfg = STATIONS[station];
    var label = (cfg && cfg.title) || station;
    document.title = 'Land it · ' + label + ' · econos';
  }

  function renderUnknownStation(station) {
    var root = document.getElementById('app-root');
    if (!root) return;
    root.innerHTML = ''
      + '<div style="padding:64px 24px;text-align:center;max-width:520px;margin:0 auto;">'
      +   '<h1 style="font-family:Fraunces,serif;font-size:28px;margin-bottom:12px;color:var(--econ-ink,#0B1426);">Station not found</h1>'
      +   '<p style="color:var(--econ-muted,#6B7280);margin-bottom:24px;">'
      +     'The Land It station <code>' + (station || '?') + '</code> doesn\'t exist for this topic.'
      +   '</p>'
      +   '<a href="' + TopicLoader.routes.land('intro') + '" style="display:inline-block;padding:10px 18px;background:var(--econ-ink,#0B1426);color:#fff;border-radius:8px;text-decoration:none;font-weight:600;">'
      +     '← Back to Land It intro'
      +   '</a>'
      + '</div>';
  }

  function cacheKey(file) { return TopicLoader.getTopic() + '/' + file; }

  function showLoadingSkeleton() {
    var root = document.getElementById('app-root');
    if (!root) return function () {};
    var timer = setTimeout(function () {
      root.innerHTML = ''
        + '<div class="app theme--land" aria-busy="true">'
        +   '<div class="skeleton skeleton--sidebar"></div>'
        +   '<div class="skeleton__main">'
        +     '<div class="skeleton skeleton--topbar"></div>'
        +     '<div class="skeleton__page">'
        +       '<div class="skeleton skeleton--card"></div>'
        +       '<div class="skeleton skeleton--card"></div>'
        +     '</div>'
        +   '</div>'
        + '</div>';
    }, 180);
    return function cancel() { clearTimeout(timer); };
  }

  function loadStation(station) {
    var cfg = STATIONS[station];
    if (!cfg) {
      renderUnknownStation(station);
      return;
    }
    setTitle(station);
    var cancelSkeleton = showLoadingSkeleton();
    if (station === 'quiz') {
      var quizSet = TopicLoader.getQuizSet() || 'main';
      var dataFile = 'land-quiz-' + quizSet + '.js';
      loadScript('/js/engines/quiz-engine.js', function () {
        TopicLoader.loadData(dataFile, function () {
          if (typeof window.bootQuizStation === 'function') {
            cancelSkeleton();
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
        cancelSkeleton();
        fn();
        window.scrollTo(0, 0);
      } else {
        cancelSkeleton();
        renderUnknownStation(station);
      }
    };
    var loadDataThenBoot = function () {
      var key = cacheKey(cfg.data);
      if (dataLoaded[key]) {
        bootFn();
      } else {
        TopicLoader.loadData(cfg.data, function () {
          dataLoaded[key] = true;
          bootFn();
        }, 'Land It ' + station);
      }
    };
    if (cfg.engine) {
      loadScript('/' + cfg.engine, loadDataThenBoot);
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

  function start() {
    var station = TopicLoader.getStation() || 'intro';
    if (!STATIONS[station]) {
      renderUnknownStation(station);
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
