/* ============================================================
   ECONOS — Topic loader & URL builder
   ─────────────────────────────────────────────────────────────
   Reads ?topic=<id> from the URL, dynamically loads the right
   per-topic data file(s), and provides URL builders that bridge
   the old per-section page names (link_chain.html etc.) to the
   new consolidated SPA shells (learn.html / link.html / land.html).

   The page-map keeps engine code untouched: an engine asks for
   `TopicLoader.buildUrl('link_chain.html')` and gets back
   `link.html?topic=<id>&station=chain`. If the page IS one of the
   SPA shells AND the matching router is already loaded,
   `TopicLoader.go(url)` performs an in-place SPA navigation
   instead of a full reload.
   ============================================================ */

(function () {
  'use strict';

  var DEFAULT_TOPIC = 'inflation';

  /* Legacy per-section page → new shell + station mapping.
     Anything not listed here passes through buildUrl unchanged
     (index.html, login.html, quiz.html, learn.html itself, …). */
  var PAGE_MAP = {
    /* Learn It — collapsed to a single page */
    'topic.html':           { page: 'learn.html' },

    /* Link It stations */
    'link_intro.html':      { page: 'link.html', station: 'intro'      },
    'link_context.html':    { page: 'link.html', station: 'context'    },
    'link_chain.html':      { page: 'link.html', station: 'chain'      },
    'link_chain_open.html': { page: 'link.html', station: 'chain_open' },
    'link_diagram.html':    { page: 'link.html', station: 'diagram'    },
    'link_depends.html':    { page: 'link.html', station: 'depends'    },
    'link_judge.html':      { page: 'link.html', station: 'judge'      },
    'link_complete.html':   { page: 'link.html', station: 'complete'   },

    /* Land It sections */
    'land_intro.html':       { page: 'land.html', station: 'intro'    },
    'land_section_a.html':   { page: 'land.html', station: 'a'        },
    'land_section_b.html':   { page: 'land.html', station: 'b'        },
    'land_section_c.html':   { page: 'land.html', station: 'c'        },
    'land_complete.html':    { page: 'land.html', station: 'complete' }
  };

  function getTopic() {
    try {
      var params = new URLSearchParams(window.location.search);
      var t = params.get('topic');
      if (t) { return t; }
    } catch (e) { /* older browsers */ }
    return DEFAULT_TOPIC;
  }

  /* Build `page?topic=...&...extras`. If `page` is a legacy
     per-section file, transparently rewrite to the consolidated
     shell + ?station=... — caller code stays identical. */
  function buildUrl(page, extra) {
    var topic = getTopic();
    var target = page;
    var station = null;
    if (PAGE_MAP.hasOwnProperty(page)) {
      var mapped = PAGE_MAP[page];
      target = mapped.page;
      station = mapped.station || null;
    }
    var qs = '?topic=' + encodeURIComponent(topic);
    if (station) {
      qs += '&station=' + encodeURIComponent(station);
    }
    if (extra) {
      for (var k in extra) {
        if (extra.hasOwnProperty(k)) {
          qs += '&' + encodeURIComponent(k) + '=' + encodeURIComponent(extra[k]);
        }
      }
    }
    return target + qs;
  }

  /* Programmatic navigation. If the URL is a station inside the
     currently-loaded SPA shell, hand off to that router for a
     pushState SPA transition. Otherwise do a normal full nav so
     the right HTML shell takes over. */
  function go(url) {
    if (!url) { return; }
    try {
      if (window.LinkRouter && /(^|\/)link\.html(\?|$)/.test(url) &&
          /[?&]station=/.test(url)) {
        window.LinkRouter.navigate(url); return;
      }
      if (window.LandRouter && /(^|\/)land\.html(\?|$)/.test(url) &&
          /[?&]station=/.test(url)) {
        window.LandRouter.navigate(url); return;
      }
    } catch (e) { /* fall through to full nav */ }
    window.location.href = url;
  }

  function showMissingTopicMessage(topic, section) {
    document.body.innerHTML = ''
      + '<div style="padding:48px 24px;font-family:Inter,sans-serif;text-align:center;max-width:520px;margin:0 auto;">'
      +   '<h1 style="font-family:Fraunces,serif;font-size:28px;margin-bottom:12px;color:#0B1426;">Content not ready yet</h1>'
      +   '<p style="color:#6B7280;margin-bottom:24px;">The <strong>' + section + '</strong> content for <strong>' + topic + '</strong> hasn\'t been added yet. Check back soon.</p>'
      +   '<a href="index.html" style="display:inline-block;padding:10px 18px;background:#0B1426;color:#fff;border-radius:8px;text-decoration:none;font-weight:600;">← Back to topics</a>'
      + '</div>';
  }

  function loadData(dataFiles, callback, sectionLabel) {
    var topic = getTopic();
    var files = (typeof dataFiles === 'string') ? [dataFiles] : dataFiles;
    var idx = 0;

    function next() {
      if (idx >= files.length) { callback(); return; }
      var script = document.createElement('script');
      script.src = 'js/data/' + topic + '/' + files[idx];
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
    getTopic:            getTopic,
    buildUrl:            buildUrl,
    go:                  go,
    loadData:            loadData,
    loadDataAndBoot:     loadDataAndBoot,
    loadDataThenScript:  loadDataThenScript
  };
})();
