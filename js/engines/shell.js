/* ============================================================
   ECONOS — Shared app shell
   ─────────────────────────────────────────────────────────────
   Sidebar, topbar and full <div class="app"> wrapper as
   reusable HTML strings. Every engine (Learn It cards, Link It
   stations, Land It sections, Quiz station) renders the SAME
   chrome — so this file is the single source of truth for it.

   Before this existed, ~1100 lines of identical chrome HTML
   were duplicated across 14 engine files.

   Depends on:
     window.ECONOS_ICONS   — populated by js/icons.js
     window.TopicLoader    — for any topic-aware URLs (caller
                             supplies pre-built URLs)
   ============================================================ */

(function () {
  'use strict';

  var STREAK_DAYS    = 1;
  var USER_INITIALS  = 'AB';
  var USER_NAME      = 'Alex Brown';
  var USER_ROLE      = 'A-Level Economics';

  function getIcons() { return window.ECONOS_ICONS || {}; }

  /* ------------------------------------------------------------------
     Sidebar — identical chrome across every page.
     opts.activeNav  — which nav item is highlighted; default 'My topics'
     ------------------------------------------------------------------ */
  function renderSidebar(opts) {
    opts = opts || {};
    var active = opts.activeNav || 'My topics';
    var I = getIcons();
    var nav = [
      { name: 'Home',         icon: I.home,     href: 'index.html' },
      { name: 'My topics',    icon: I.topics,   href: '#' },
      { name: 'Progress',     icon: I.progress, href: '#' },
      { name: 'Exam practice',icon: I.practice, href: '#' },
      { name: 'Study planner',icon: I.planner,  href: '#' },
      { name: 'Messages',     icon: I.messages, href: '#' },
      { name: 'Settings',     icon: I.settings, href: '#' }
    ];
    return ''
      + '<aside class="sidebar">'
      +   '<div class="sidebar__brand">'
      +     '<a href="index.html" class="sidebar__logo-link">'
      +       '<img src="assets/econos-logo-full.png" alt="econos" class="sidebar__logo-full">'
      +     '</a>'
      +   '</div>'
      +   '<nav class="sidebar__nav">'
      +     nav.map(function (n) {
              var cls = n.name === active ? 'is-active' : '';
              return '<a href="' + n.href + '" class="' + cls + '">' + (n.icon || '') + '<span>' + n.name + '</span></a>';
            }).join('')
      +   '</nav>'
      +   '<div class="sidebar__streak">'
      +     '<div class="sidebar__streak-row">'
      +       '<span class="sidebar__streak-flame">🔥</span>'
      +       '<span class="sidebar__streak-num">' + STREAK_DAYS + '</span>'
      +     '</div>'
      +     '<div class="sidebar__streak-label">Day streak</div>'
      +     '<div class="sidebar__streak-sub">Keep it going!</div>'
      +   '</div>'
      +   '<div class="sidebar__user">'
      +     '<div class="sidebar__user-avatar">' + USER_INITIALS + '</div>'
      +     '<div class="sidebar__user-info">'
      +       '<div class="sidebar__user-name">' + USER_NAME + '</div>'
      +       '<div class="sidebar__user-role">' + USER_ROLE + '</div>'
      +     '</div>'
      +     '<div class="sidebar__user-chev">' + (I.chevDown || '') + '</div>'
      +   '</div>'
      + '</aside>';
  }

  /* ------------------------------------------------------------------
     Topbar — back link, session crumbs, streak + avatar.

     opts:
       backUrl       (required) — destination for the back arrow link
       backLabel     (optional) — text after the arrow; default empty
       sessionLabel  (optional) — eyebrow above topic title (e.g. "Session 1 of 3: Learn")
       topicTitle    (optional) — large title
     ------------------------------------------------------------------ */
  function renderTopbar(opts) {
    opts = opts || {};
    var I = getIcons();
    var backLabel = opts.backLabel ? '<span>' + opts.backLabel + '</span>' : '';
    return ''
      + '<header class="topbar">'
      +   '<a href="' + (opts.backUrl || 'index.html') + '" class="topbar__back">'
      +     (I.arrowLeft || '') + backLabel
      +   '</a>'
      +   '<div class="topbar__crumbs">'
      +     (opts.sessionLabel ? '<div class="topbar__session-label">' + opts.sessionLabel + '</div>' : '')
      +     (opts.topicTitle ? '<div class="topbar__topic-title">' + opts.topicTitle + '</div>' : '')
      +   '</div>'
      +   '<div class="topbar__right">'
      +     '<div class="topbar__streak">'
      +       '<span class="topbar__streak-icon">🔥</span>'
      +       '<span>' + STREAK_DAYS + ' day streak</span>'
      +     '</div>'
      +     '<div class="topbar__avatar">'
      +       '<div class="topbar__avatar-circle">' + USER_INITIALS + '</div>'
      +       '<span class="topbar__avatar-chev">' + (I.chevDown || '') + '</span>'
      +     '</div>'
      +   '</div>'
      + '</header>';
  }

  /* ------------------------------------------------------------------
     Full app wrapper — sidebar + .main containing topbar + body.

     opts:
       theme    — 'link' | 'land' (omit for Learn It / default green)
       topbar   — pre-rendered <header> string, or undefined to skip
       body     — pre-rendered page body string (e.g. '<div class="page">...</div>')
     ------------------------------------------------------------------ */
  function renderApp(opts) {
    opts = opts || {};
    var themeCls = opts.theme ? ' theme--' + opts.theme : '';
    return ''
      + '<div class="app' + themeCls + '">'
      +   renderSidebar(opts.sidebar || null)
      +   '<div class="main">'
      +     (opts.topbar || '')
      +     (opts.body || '')
      +   '</div>'
      + '</div>';
  }

  /* ──────────────────────────────────────────────────────────────
     Auto-inject the 3-stage progress widget
     ─────────────────────────────────────────────────────────────
     The .right-rail on station pages (Link context/chain/etc, Land
     section A/B/C, Quiz) renders a "Topic progress" + .session-dots
     horizontal strip — different chrome from the cover pages which
     show vertical Learn-it / Link-it / Land-it cards. The user wants
     the cards on every page so the navigation is consistent.

     Approach: if a .right-rail loses the .stages widget after a
     render, build one from the page's URL (learn/link/land/quiz)
     and prepend it. Re-runs whenever the engine mutates the rail.
     ────────────────────────────────────────────────────────────── */
  function deriveStageState() {
    var path = location.pathname.toLowerCase();
    var file = path.substring(path.lastIndexOf('/') + 1);
    // learn.html or topic.html → currently on Learn
    if (file === 'learn.html' || file === 'topic.html' || file === '' || file === 'index.html') {
      return ['current', 'open', 'open'];
    }
    if (file === 'link.html') return ['done', 'current', 'open'];
    if (file === 'land.html') return ['done', 'done', 'current'];
    // Quiz inherits the URL's `stage` param if present, else assumes
    // it sits at the end of the Learn loop (most common entry point).
    if (file === 'quiz.html') {
      try {
        var qs = new URLSearchParams(location.search);
        var stage = (qs.get('stage') || '').toLowerCase();
        if (stage === 'link') return ['done', 'current', 'open'];
        if (stage === 'land') return ['done', 'done', 'current'];
      } catch (e) {}
      return ['current', 'open', 'open'];
    }
    return ['open', 'open', 'open'];
  }
  function buildStagesWidget() {
    var topic = '';
    try {
      topic = new URLSearchParams(location.search).get('topic') || '';
    } catch (e) {}
    var topicQs = topic ? '?topic=' + encodeURIComponent(topic) : '';
    var states = deriveStageState();
    var I = getIcons();
    var stages = [
      { num: 1, name: 'Learn it', sub: 'Recap and lock in the content', href: 'learn.html' + topicQs },
      { num: 2, name: 'Link it',  sub: 'Apply skills with the context', href: 'link.html'  + topicQs },
      { num: 3, name: 'Land it',  sub: 'Tackle real exam questions',    href: 'land.html'  + topicQs }
    ];
    var html = '<aside class="stages" data-shell-injected="1">';
    for (var i = 0; i < stages.length; i++) {
      var s = stages[i];
      var state = states[i] || 'open';
      var cls = 'stage' + (state === 'done' ? ' is-done' : state === 'current' ? ' is-current' : '');
      // current stage = non-clickable (you're already there); others = links
      var isCurrent = state === 'current';
      var tag = isCurrent ? 'div' : 'a';
      var openTag = isCurrent ? '<div class="' + cls + '"' : '<a href="' + s.href + '" class="' + cls + '"';
      var numContent = state === 'done' ? (I.check || '✓') : String(s.num);
      var chipText = state === 'done' ? 'Done' : state === 'current' ? 'Current' : 'Open';
      html += openTag + ' data-stage-pos="' + (i + 1) + '">'
           +   '<div class="stage__num">' + numContent + '</div>'
           +   '<div class="stage__body">'
           +     '<div class="stage__name">' + s.name + '</div>'
           +     '<div class="stage__sub">' + s.sub + '</div>'
           +     '<span class="stage__chip">' + chipText + '</span>'
           +   '</div>'
           + (isCurrent ? '</div>' : '</a>');
    }
    html += '</aside>';
    return html;
  }
  function ensureStagesIn(rail) {
    if (!rail) return;
    if (rail.querySelector(':scope > .stages')) return;
    var widget = document.createElement('div');
    widget.innerHTML = buildStagesWidget();
    rail.insertBefore(widget.firstChild, rail.firstChild);
    // Tag positions (the MutationObserver further down handles fresh stages too)
    tagStages(rail);
  }
  function ensureStagesEverywhere(root) {
    var rails = root.querySelectorAll ? root.querySelectorAll('.right-rail') : [];
    rails.forEach(ensureStagesIn);
  }

  window.Shell = {
    renderSidebar: renderSidebar,
    renderTopbar:  renderTopbar,
    renderApp:     renderApp
  };

  /* ──────────────────────────────────────────────────────────────
     Stage position auto-tagger
     ─────────────────────────────────────────────────────────────
     Engine code renders <a class="stage"> elements directly into
     #app-root. Some engines wrap them after a <div class="stages__title">
     header, which makes :nth-child(N) selectors misalign.

     This MutationObserver scans every .stages container after a render
     and stamps each .stage child with data-stage-pos="1|2|3" so the
     polish-v3 CSS can target the LEARN / LINK / LAND stages by
     position-among-stages regardless of any sibling title nodes.
     ────────────────────────────────────────────────────────────── */
  function tagStages(scope) {
    var containers = scope.querySelectorAll
      ? scope.querySelectorAll('.stages')
      : [];
    containers.forEach(function (c) {
      var stages = c.querySelectorAll(':scope > .stage');
      stages.forEach(function (s, i) {
        s.setAttribute('data-stage-pos', String(i + 1));
      });
    });
  }
  function bootStageTagger() {
    var root = document.getElementById('app-root') || document.body;
    ensureStagesEverywhere(root);
    tagStages(root);
    if ('MutationObserver' in window) {
      var mo = new MutationObserver(function (mutations) {
        for (var i = 0; i < mutations.length; i++) {
          var m = mutations[i];
          for (var j = 0; j < m.addedNodes.length; j++) {
            var n = m.addedNodes[j];
            if (n.nodeType === 1) {
              ensureStagesEverywhere(n);
              tagStages(n);
            }
          }
        }
      });
      mo.observe(root, { childList: true, subtree: true });
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootStageTagger);
  } else {
    bootStageTagger();
  }
})();
