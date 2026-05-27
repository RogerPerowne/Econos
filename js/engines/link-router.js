/* ============================================================
   ECONOS — Link It router (SPA shell for link.html)
   ─────────────────────────────────────────────────────────────
   link.html loads ALL Link engines + this router. The router
   intercepts in-stage navigation (clicks on <a href="/link?
   station=X"> + programmatic LinkRouter.navigate() calls),
   swaps the station in-place via history.pushState, and only
   does real page navigation for cross-stage URLs (/learn,
   /land, /, …).
   ============================================================ */

(function () {
  'use strict';

  /* station name → { data file, boot function, engine script, title } */
  var STATIONS = {
    intro:       { data: 'data-link-intro.js',    boot: 'bootLinkIntro',     engine: 'js/engines/link-intro.js',          title: 'Intro' },
    context:     { data: 'data-link-context.js',  boot: 'bootLinkContext',   engine: 'js/engines/link-engine.js',         title: 'Context' },
    chain:       { data: 'data-link-chain.js',    boot: 'bootLinkChain',     engine: 'js/engines/link-chain-engine.js',   title: 'Chain' },
    chain_open:  { data: 'data-link-chain.js',    boot: 'bootLinkChainOpen', engine: 'js/engines/link-chain-open-engine.js', title: 'Open chain' },
    calc:        { data: 'data-link-calc.js',     boot: 'bootLinkCalc',      engine: 'js/engines/link-calc-engine.js',        title: 'Calculate It'      },
    data:        { data: 'data-link-data.js',     boot: 'bootLinkData',      engine: 'js/engines/link-data-engine.js',        title: 'Read the Data'     },
    extract:     { data: 'data-link-extract.js',  boot: 'bootLinkExtract',   engine: 'js/engines/link-extract-engine.js',     title: 'Read the Extract'  },
    predict:     { data: 'data-link-predict.js',  boot: 'bootLinkPredict',   engine: 'js/engines/link-predict-engine.js',     title: 'Predict Outcome'   },
    diagram:     { data: 'data-link-diagram.js',  boot: 'bootLinkDiagram',   engine: 'js/engines/link-diagram-engine.js', title: 'Diagram' },
    depends:     { data: 'data-link-depends.js',  boot: 'bootLinkDepends',   engine: 'js/engines/link-depends-engine.js', title: 'It depends' },
    judge:       { data: 'data-link-judge.js',    boot: 'bootLinkJudge',     engine: 'js/engines/link-judge-engine.js',   title: 'Judge' },
    complete:    { data: 'data-link-complete.js', boot: 'bootLinkComplete',  engine: 'js/engines/link-complete-engine.js',title: 'Complete' },
    /* Quiz station — lazy-loads quiz-engine + a data-link-quiz-<set>.js
       file. The data file is resolved at call time. */
    quiz:        { title: 'Quiz' }
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

  /* Background prefetch of likely-next engines + data files. Uses
     <link rel="prefetch"> so the browser caches them at idle priority
     without blocking the current page. Each station gets prefetched
     once per session. */
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

  /* Heuristic: which stations are most likely to be visited next from
     the given current station? Tuned for the standard Link It funnel. */
  var NEXT_HINTS = {
    intro:      ['context', 'chain', 'diagram'],
    context:    ['chain'],
    chain:      ['calc', 'extract', 'predict', 'diagram'],
    chain_open: ['calc', 'extract', 'predict', 'diagram'],
    calc:       ['diagram', 'depends'],
    data:       ['depends', 'judge'],
    extract:    ['diagram', 'depends'],
    predict:    ['judge', 'depends'],
    diagram:    ['depends'],
    depends:    ['judge', 'predict'],
    judge:      ['complete'],
    complete:   []
  };
  function prefetchAdjacent(current) {
    var next = NEXT_HINTS[current] || [];
    /* Use requestIdleCallback if available so we never compete with
       the current station's render. */
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

  function isLinkUrl(url) {
    if (!url) return false;
    var path = String(url).split('?')[0].split('#')[0];
    var file = path.substring(path.lastIndexOf('/') + 1);
    return (file === 'link' || file === 'link.html') && !!urlToStation(url);
  }

  function setTitle(station) {
    var cfg = STATIONS[station];
    var label = (cfg && cfg.title) || station;
    document.title = 'Link it · ' + label + ' · econos';
  }

  function renderUnknownStation(station) {
    var topic = TopicLoader.getTopic();
    var qs = topic ? '?topic=' + encodeURIComponent(topic) : '';
    var root = document.getElementById('app-root');
    if (!root) return;
    root.innerHTML = ''
      + '<div style="padding:64px 24px;text-align:center;max-width:520px;margin:0 auto;">'
      +   '<h1 style="font-family:Fraunces,serif;font-size:28px;margin-bottom:12px;color:var(--econ-ink,#0B1426);">Station not found</h1>'
      +   '<p style="color:var(--econ-muted,#6B7280);margin-bottom:24px;">'
      +     'The Link It station <code>' + (station || '?') + '</code> doesn\'t exist for this topic.'
      +   '</p>'
      +   '<a href="/link' + qs + '&station=intro" style="display:inline-block;padding:10px 18px;background:var(--econ-ink,#0B1426);color:#fff;border-radius:8px;text-decoration:none;font-weight:600;">'
      +     '← Back to Link It intro'
      +   '</a>'
      + '</div>';
  }

  /* Key the data-loaded cache by topic+file so a topic switch
     doesn't reuse stale data. */
  function cacheKey(file) { return TopicLoader.getTopic() + '/' + file; }

  /* Renders a barebones skeleton into #app-root after a short delay
     (so cached/instant navigations never flash a loading state).
     Returns a cancel function for callers to invoke once the real
     engine has painted. */
  function showLoadingSkeleton() {
    var root = document.getElementById('app-root');
    if (!root) return function () {};
    var timer = setTimeout(function () {
      root.innerHTML = ''
        + '<div class="app theme--link" aria-busy="true">'
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
    /* Special: quiz station — lazy-load engine + chosen question set */
    if (station === 'quiz') {
      var quizSet = new URLSearchParams(window.location.search).get('quiz') || 'main';
      var dataFile = 'data-link-quiz-' + quizSet + '.js';
      loadScript('js/engines/quiz-engine.js', function () {
        TopicLoader.loadData(dataFile, function () {
          if (typeof window.bootQuizStation === 'function') {
            cancelSkeleton();
            window.bootQuizStation({ stage: 'link' });
            window.scrollTo(0, 0);
          }
        }, 'Link It quiz');
      });
      return;
    }
    /* Standard stations: lazy-load engine script then its data file. */
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
        }, 'Link It ' + station);
      }
    };
    if (cfg.engine) {
      loadScript(cfg.engine, loadDataThenBoot);
    } else {
      loadDataThenBoot();
    }
    /* Background-prefetch likely next stations after this one renders. */
    prefetchAdjacent(station);
  }

  /* In-app navigation if URL is a link_*.html page; else real nav. */
  function navigate(url) {
    if (!url) return;
    if (!isLinkUrl(url)) {
      window.location.href = url;
      return;
    }
    var station = urlToStation(url);
    history.pushState({ station: station }, '', url);
    loadStation(station);
  }

  /* Boot entry point: called once from each link_*.html. */
  function start(station) {
    if (!STATIONS[station]) {
      renderUnknownStation(station);
      return;
    }

    /* Anchor the current history entry to this station so popstate works. */
    history.replaceState({ station: station }, '', window.location.href);

    /* Delegate clicks on <a href="link_*.html"> into the SPA. Use capture so
       we run before any engine handlers attached during render(). */
    document.addEventListener('click', function (e) {
      if (e.defaultPrevented) return;
      if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
      if (typeof e.button === 'number' && e.button !== 0) return;
      var a = e.target && e.target.closest ? e.target.closest('a') : null;
      if (!a) return;
      var href = a.getAttribute('href');
      if (!href || href.charAt(0) === '#') return;
      if (a.target && a.target !== '' && a.target !== '_self') return;
      if (!isLinkUrl(href)) return;
      e.preventDefault();
      navigate(href);
    }, true);

    /* Browser back/forward */
    window.addEventListener('popstate', function (e) {
      var s = (e.state && e.state.station) || urlToStation(window.location.href);
      if (s && STATIONS[s]) loadStation(s);
    });

    /* Boot the initial station. */
    loadStation(station);
  }

  window.LinkRouter = {
    navigate: navigate,
    start:    start,
    stations: STATIONS
  };
})();
