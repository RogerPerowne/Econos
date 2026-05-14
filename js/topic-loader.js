/* ============================================================
   ECONOS — Topic loader & URL builder
   Reads ?topic=<id> from the URL, dynamically loads the right
   per-topic data file(s), and provides a single helper for
   engines and data files to build topic-aware navigation URLs.
   ============================================================ */

(function () {
  'use strict';

  var DEFAULT_TOPIC = 'inflation';

  function getTopic() {
    try {
      var params = new URLSearchParams(window.location.search);
      var t = params.get('topic');
      if (t) { return t; }
    } catch (e) { /* older browsers */ }
    return DEFAULT_TOPIC;
  }

  function buildUrl(page, extra) {
    var topic = getTopic();
    var qs = '?topic=' + encodeURIComponent(topic);
    if (extra) {
      for (var k in extra) {
        if (extra.hasOwnProperty(k)) {
          qs += '&' + encodeURIComponent(k) + '=' + encodeURIComponent(extra[k]);
        }
      }
    }
    return page + qs;
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
    getTopic: getTopic,
    buildUrl: buildUrl,
    loadData: loadData,
    loadDataAndBoot: loadDataAndBoot,
    loadDataThenScript: loadDataThenScript
  };
})();
