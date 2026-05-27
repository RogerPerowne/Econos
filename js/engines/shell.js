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

  /* User state lives on window.ECONOS_USER. Set it before shell.js loads
     (eg. from a server-rendered <script> or a fetch in auth-check.js) and
     the chrome picks it up automatically. Defaults below are placeholders
     used in dev when nothing has populated the global yet. */
  var USER_DEFAULTS = {
    initials: 'AB',
    name:     'Alex Brown',
    role:     'A-Level Economics',
    streak:   1
  };
  function getUser() {
    var u = window.ECONOS_USER || {};
    return {
      initials: u.initials || USER_DEFAULTS.initials,
      name:     u.name     || USER_DEFAULTS.name,
      role:     u.role     || USER_DEFAULTS.role,
      streak:   (typeof u.streak === 'number') ? u.streak : USER_DEFAULTS.streak
    };
  }

  function getIcons() { return window.ECONOS_ICONS || {}; }

  /* ------------------------------------------------------------------
     Sidebar — identical chrome across every page.
     opts.activeNav  — which nav item is highlighted; default 'My topics'
     ------------------------------------------------------------------ */
  function renderSidebar(opts) {
    opts = opts || {};
    var active = opts.activeNav || 'My topics';
    var I = getIcons();
    var U = getUser();
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
      + '<aside class="sidebar" aria-label="Account and global navigation">'
      +   '<div class="sidebar__brand">'
      +     '<a href="index.html" class="sidebar__logo-link">'
      +       '<img src="assets/logo-wordmark-tagline.png" alt="econos" class="sidebar__logo-full">'
      +     '</a>'
      +   '</div>'
      +   '<nav class="sidebar__nav" aria-label="Main">'
      +     nav.map(function (n) {
              var isActive = n.name === active;
              var cls = isActive ? 'is-active' : '';
              var ariaCurrent = isActive ? ' aria-current="page"' : '';
              return '<a href="' + n.href + '" class="' + cls + '"' + ariaCurrent + '>' + (n.icon || '') + '<span>' + n.name + '</span></a>';
            }).join('')
      +   '</nav>'
      +   '<div class="sidebar__streak" aria-label="' + U.streak + ' day streak. Keep it going!">'
      +     '<div class="sidebar__streak-row">'
      +       '<span class="sidebar__streak-flame" aria-hidden="true">🔥</span>'
      +       '<span class="sidebar__streak-num">' + U.streak + '</span>'
      +     '</div>'
      +     '<div class="sidebar__streak-label">Day streak</div>'
      +     '<div class="sidebar__streak-sub">Keep it going!</div>'
      +   '</div>'
      +   '<button type="button" class="sidebar__user" aria-label="Account menu">'
      +     '<span class="sidebar__user-avatar">' + U.initials + '</span>'
      +     '<span class="sidebar__user-info">'
      +       '<span class="sidebar__user-name">' + U.name + '</span>'
      +       '<span class="sidebar__user-role">' + U.role + '</span>'
      +     '</span>'
      +     '<span class="sidebar__user-chev" aria-hidden="true">' + (I.chevDown || '') + '</span>'
      +   '</button>'
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
    var U = getUser();
    /* Default back label: "Topics" — covers the common case of returning
       to the index from inside a topic. Engines that need different copy
       can pass opts.backLabel explicitly. */
    var labelText = (opts.backLabel === undefined) ? 'Topics' : opts.backLabel;
    var backLabel = labelText ? '<span>' + labelText + '</span>' : '';
    /* Duplicate streak chip removed (was previously rendered here AND in
       the sidebar). Sidebar wins — it's the prominent gamification card. */
    return ''
      + '<div class="topbar" role="region" aria-label="Session header">'
      +   '<a href="' + (opts.backUrl || 'index.html') + '" class="topbar__back" aria-label="Back to ' + (labelText || 'topics') + '">'
      +     (I.arrowLeft || '') + backLabel
      +   '</a>'
      +   '<div class="topbar__crumbs">'
      +     (opts.sessionLabel ? '<div class="topbar__session-label">' + opts.sessionLabel + '</div>' : '')
      +     (opts.topicTitle ? '<div class="topbar__topic-title">' + opts.topicTitle + '</div>' : '')
      +   '</div>'
      +   '<div class="topbar__right">'
      +     '<button type="button" class="topbar__avatar" aria-label="Account menu">'
      +       '<span class="topbar__avatar-circle">' + U.initials + '</span>'
      +       '<span class="topbar__avatar-chev" aria-hidden="true">' + (I.chevDown || '') + '</span>'
      +     '</button>'
      +   '</div>'
      + '</div>';
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
      +   '<main id="main-content" class="main" tabindex="-1" role="main">'
      +     (opts.topbar || '')
      +     (opts.body || '')
      +   '</main>'
      + '</div>';
  }

  /* ──────────────────────────────────────────────────────────────
     3-stage Learn/Link/Land progress widget
     ─────────────────────────────────────────────────────────────
     Public API:  Shell.renderStages([statesOverride])

     Each engine that owns a .right-rail calls Shell.renderStages()
     itself — single source of truth for the widget HTML, and no
     MutationObserver fallback in shell.js (used to inject after the
     engine rendered; now engines do it directly).

     statesOverride (optional) — explicit ['done'|'current'|'open', x3]
     to bypass the URL-derived defaults.
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
  /* Normalise state aliases. 'open' is the design-tool name; the
     stylesheet uses '.is-available'. Accept either, emit the latter. */
  function normaliseState(s) {
    if (s === 'open') return 'available';
    return s || 'available';
  }
  function chipFor(state) {
    if (state === 'done')      return { text: 'Done',   modifier: 'stage__chip--done' };
    if (state === 'current')   return { text: 'Current', modifier: '' };
    if (state === 'available') return { text: 'Open →', modifier: 'stage__chip--available' };
    if (state === 'locked')    return { text: 'Locked', modifier: 'stage__chip--locked' };
    return { text: state, modifier: '' };
  }

  /* Shell.renderStages([spec], [title])

     spec — one of:
       • omitted        → URL-derived states + canonical labels
       • [string,…]     → state strings (length 3, order Learn/Link/Land)
       • [object,…]     → full stage objects { state, num?, name?, sub?, href? };
                          missing fields fall back to canonical defaults.

     title — optional string rendered as <div class="stages__title">…</div>
             before the stages (matches the land-section-A/B/C chrome). */
  function renderStages(spec, title) {
    var topic = '';
    try {
      topic = new URLSearchParams(location.search).get('topic') || '';
    } catch (e) {}
    var topicQs = topic ? '?topic=' + encodeURIComponent(topic) : '';
    var I = getIcons();
    var DEFAULTS = [
      { num: 1, name: 'Learn it', sub: 'Recap and lock in the content', href: 'learn.html' + topicQs },
      { num: 2, name: 'Link it',  sub: 'Apply skills with the context', href: 'link.html'  + topicQs },
      { num: 3, name: 'Land it',  sub: 'Tackle real exam questions',    href: 'land.html'  + topicQs }
    ];

    /* Resolve spec → array of merged stage objects with state. */
    var stages;
    if (!spec) {
      var auto = deriveStageState();
      stages = DEFAULTS.map(function (d, i) {
        return Object.assign({}, d, { state: auto[i] });
      });
    } else if (typeof spec[0] === 'string') {
      stages = DEFAULTS.map(function (d, i) {
        return Object.assign({}, d, { state: spec[i] });
      });
    } else {
      stages = DEFAULTS.map(function (d, i) {
        return Object.assign({}, d, spec[i] || {});
      });
    }

    var html = '<nav class="stages" data-shell-injected="1" aria-label="Topic progress">';
    if (title) {
      html += '<div class="stages__title">' + title + '</div>';
    }
    for (var i = 0; i < stages.length; i++) {
      var s = stages[i];
      var state = normaliseState(s.state);
      var cls = 'stage'
             + (state === 'done'      ? ' is-done'      : '')
             + (state === 'current'   ? ' is-current'   : '')
             + (state === 'available' ? ' is-available' : '')
             + (state === 'locked'    ? ' is-locked'    : '');
      var isCurrent = state === 'current';
      var isLocked  = state === 'locked';
      var clickable = !isCurrent && !isLocked;
      var ariaCurrent = isCurrent ? ' aria-current="step"' : '';
      var openTag = clickable
        ? '<a href="' + s.href + '" class="' + cls + '"'
        : '<div class="' + cls + '"' + ariaCurrent;
      var numContent = state === 'done'
        ? (I.check || '✓')
        : (state === 'locked' ? (I.lock || '🔒') : String(s.num));
      var chip = chipFor(state);
      var chipCls = 'stage__chip' + (chip.modifier ? ' ' + chip.modifier : '');
      var ariaLabel = ' aria-label="' + s.name + ' — ' + chip.text + '"';
      html += openTag + ' data-stage-pos="' + (i + 1) + '"' + ariaLabel + '>'
           +   '<div class="stage__num" aria-hidden="true">' + numContent + '</div>'
           +   '<div class="stage__body">'
           +     '<div class="stage__name">' + s.name + '</div>'
           +     '<div class="stage__sub">' + s.sub + '</div>'
           +     '<span class="' + chipCls + '">' + chip.text + '</span>'
           +   '</div>'
           + (clickable ? '</a>' : '</div>');
    }
    html += '</nav>';
    return html;
  }

  /* ------------------------------------------------------------------
     Skip link — first focusable element on every page so keyboard
     users can jump past the sidebar nav to the main content.
     ------------------------------------------------------------------ */
  function renderSkipLink() {
    return '<a href="#main-content" class="skip-link">Skip to main content</a>';
  }
  function mountSkipLink() {
    if (document.querySelector('.skip-link')) return;
    var wrap = document.createElement('div');
    wrap.innerHTML = renderSkipLink();
    document.body.insertBefore(wrap.firstChild, document.body.firstChild);
  }

  /* ------------------------------------------------------------------
     Mobile nav — auto-injected at the top of <body> on every page so
     each shell HTML can stop hand-rolling the same 5-line block.
     ------------------------------------------------------------------ */
  function renderMobileNav() {
    var U = getUser();
    return ''
      + '<nav class="mobile-nav" aria-label="Mobile">'
      +   '<a href="/" class="mobile-nav__logo" aria-label="Home"><img src="assets/logo-mark.png" alt="econos"></a>'
      +   '<div class="mobile-nav__right">'
      +     '<span class="mobile-nav__streak" aria-label="' + U.streak + ' day streak">'
      +       '<span aria-hidden="true">🔥</span><span>' + U.streak + '</span>'
      +     '</span>'
      +     '<button type="button" class="mobile-nav__avatar" aria-label="Account menu">' + U.initials + '</button>'
      +   '</div>'
      + '</nav>';
  }
  function mountMobileNav() {
    if (document.querySelector('.mobile-nav')) return; // already in HTML; leave alone
    var wrap = document.createElement('div');
    wrap.innerHTML = renderMobileNav();
    document.body.insertBefore(wrap.firstChild, document.body.firstChild);
  }

  window.Shell = {
    renderSidebar:   renderSidebar,
    renderTopbar:    renderTopbar,
    renderApp:       renderApp,
    renderStages:    renderStages,
    renderSkipLink:  renderSkipLink,
    mountSkipLink:   mountSkipLink,
    renderMobileNav: renderMobileNav,
    mountMobileNav:  mountMobileNav
  };

  /* shell.js auto-injects skip-link + mobile-nav so each shell HTML
     body doesn't repeat those blocks. Both are idempotent. */
  function bootShell() {
    /* Order matters: each helper inserts at body.firstChild, so the
       LAST one called ends up at the very top. Skip-link must be the
       first focusable element on every page → mount it last. */
    mountMobileNav();
    mountSkipLink();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootShell);
  } else {
    bootShell();
  }
})();
