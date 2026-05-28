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
      { name: 'Home',         icon: I.home,     href: '/' },
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
      +     '<a href="/" class="sidebar__logo-link">'
      +       '<img src="/assets/logo-full.png" alt="econos — Learn it. Link it. Land it." class="sidebar__logo-full">'
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
      +   '<button type="button" class="sidebar__user" aria-label="Account menu" aria-haspopup="menu" aria-expanded="false" aria-controls="' + ACCOUNT_MENU_ID + '">'
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
      +   '<a href="' + (opts.backUrl || '/') + '" class="topbar__back" aria-label="Back to ' + (labelText || 'topics') + '">'
      +     (I.arrowLeft || '') + backLabel
      +   '</a>'
      +   '<div class="topbar__crumbs">'
      +     (opts.sessionLabel ? '<div class="topbar__session-label">' + opts.sessionLabel + '</div>' : '')
      +     (opts.topicTitle ? '<div class="topbar__topic-title">' + opts.topicTitle + '</div>' : '')
      +   '</div>'
      +   '<div class="topbar__right">'
      +     '<button type="button" class="topbar__avatar" aria-label="Account menu" aria-haspopup="menu" aria-expanded="false" aria-controls="' + ACCOUNT_MENU_ID + '">'
      +       '<span class="topbar__avatar-circle">' + U.initials + '</span>'
      +       '<span class="topbar__avatar-chev" aria-hidden="true">' + (I.chevDown || '') + '</span>'
      +     '</button>'
      +   '</div>'
      + '</div>'
      + renderMobileStages();
  }

  /* ------------------------------------------------------------------
     Mobile stage strip — three compact pills (Learn / Link / Land) shown
     directly below the topbar on viewports ≤880px, where the right-rail
     (and its desktop stages widget) is hidden. Engines don't call this
     directly — renderTopbar above always emits it; CSS hides it on
     desktop. State derivation is shared with renderStages.
     ------------------------------------------------------------------ */
  function renderMobileStages() {
    var topic = TopicLoader.getTopic();
    var I = getIcons();
    var auto = deriveStageState();
    var SHELLS = [
      { num: 1, name: 'Learn', href: TopicLoader.routes.learn(topic) },
      { num: 2, name: 'Link',  href: TopicLoader.routes.link('intro', topic) },
      { num: 3, name: 'Land',  href: TopicLoader.routes.land('intro', topic) }
    ];
    var html = '<nav class="mobile-stages" aria-label="Topic progress">';
    for (var i = 0; i < SHELLS.length; i++) {
      var s = SHELLS[i];
      var state = normaliseState(auto[i]);
      var cls = 'mobile-stages__item'
             + (state === 'done'      ? ' is-done'      : '')
             + (state === 'current'   ? ' is-current'   : '')
             + (state === 'available' ? ' is-available' : '')
             + (state === 'locked'    ? ' is-locked'    : '');
      var isCurrent = state === 'current';
      var isLocked  = state === 'locked';
      var clickable = !isCurrent && !isLocked;
      var ariaCurrent = isCurrent ? ' aria-current="step"' : '';
      var glyph = state === 'done'   ? (I.check || '✓')
                : state === 'locked' ? (I.lock  || '🔒')
                : String(s.num);
      var open = clickable
        ? '<a href="' + s.href + '" class="' + cls + '"'
        : '<div class="' + cls + '"' + ariaCurrent;
      html += open + ' data-stage-pos="' + (i + 1) + '">'
           +   '<span class="mobile-stages__num" aria-hidden="true">' + glyph + '</span>'
           +   '<span class="mobile-stages__name">' + s.name + '</span>'
           + (clickable ? '</a>' : '</div>');
    }
    html += '</nav>';
    return html;
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
    var shell = (window.TopicLoader && TopicLoader.getShell()) || 'home';
    if (shell === 'learn' || shell === 'home') return ['current', 'open', 'open'];
    if (shell === 'link') return ['done', 'current', 'open'];
    if (shell === 'land') return ['done', 'done', 'current'];
    if (shell === 'quiz') {
      // ?stage=link|land if a callsite needs to override; otherwise default to learn.
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
    var topic = TopicLoader.getTopic();
    var I = getIcons();
    var DEFAULTS = [
      { num: 1, name: 'Learn it', sub: 'Recap and lock in the content', href: TopicLoader.routes.learn(topic) },
      { num: 2, name: 'Link it',  sub: 'Apply skills with the context', href: TopicLoader.routes.link('intro', topic) },
      { num: 3, name: 'Land it',  sub: 'Tackle real exam questions',    href: TopicLoader.routes.land('intro', topic) }
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
     Account menu — the dropdown the sidebar user-card and the topbar
     avatar button both open. Until proper auth lands the only real
     action is "Log out" (clears the localStorage auth flag + bounces
     to /login). Anchored to whichever trigger opened it; closes on
     outside-click, Escape, or selecting an item.

     There was previously a chevron (⌄) on both triggers with no
     handler — looked interactive, did nothing. This wires the
     affordance to something real instead of removing it.
     ------------------------------------------------------------------ */
  var ACCOUNT_MENU_ID = 'econ-account-menu';

  function renderAccountMenu() {
    return ''
      + '<div id="' + ACCOUNT_MENU_ID + '" class="account-menu" role="menu" hidden>'
      +   '<button type="button" class="account-menu__item" data-action="logout" role="menuitem">Log out</button>'
      + '</div>';
  }

  function getAccountMenu() {
    var el = document.getElementById(ACCOUNT_MENU_ID);
    if (el) return el;
    var wrap = document.createElement('div');
    wrap.innerHTML = renderAccountMenu();
    document.body.appendChild(wrap.firstChild);
    return document.getElementById(ACCOUNT_MENU_ID);
  }

  function closeAccountMenu() {
    var menu = document.getElementById(ACCOUNT_MENU_ID);
    if (!menu || menu.hidden) return;
    menu.hidden = true;
    var trigger = menu.__trigger;
    if (trigger) {
      trigger.setAttribute('aria-expanded', 'false');
      menu.__trigger = null;
    }
  }

  function openAccountMenu(trigger) {
    var menu = getAccountMenu();
    var rect = trigger.getBoundingClientRect();
    menu.style.top  = (rect.bottom + window.scrollY + 6) + 'px';
    /* Right-align under the trigger; clamp so the menu never spills off-screen. */
    var menuWidth = 180;
    var left = Math.max(8, Math.min(rect.right - menuWidth, window.innerWidth - menuWidth - 8));
    menu.style.left = (left + window.scrollX) + 'px';
    menu.hidden = false;
    trigger.setAttribute('aria-expanded', 'true');
    menu.__trigger = trigger;
    var firstItem = menu.querySelector('.account-menu__item');
    if (firstItem) firstItem.focus();
  }

  function bindAccountMenu() {
    /* Capture-phase delegate: handles both the sidebar user-card and
       the topbar avatar (and any future trigger that adds the
       data-account-trigger attribute). Idempotent — we attach the
       global listeners exactly once. */
    if (document.documentElement.dataset.econAccountMenuBound === '1') return;
    document.documentElement.dataset.econAccountMenuBound = '1';

    function isTrigger(el) {
      if (!el || !el.closest) return null;
      return el.closest('.sidebar__user, .topbar__avatar, [data-account-trigger]');
    }

    document.addEventListener('click', function (e) {
      var menu = document.getElementById(ACCOUNT_MENU_ID);
      var trigger = isTrigger(e.target);
      if (trigger) {
        e.preventDefault();
        if (menu && !menu.hidden && menu.__trigger === trigger) {
          closeAccountMenu();
        } else {
          openAccountMenu(trigger);
        }
        return;
      }
      var itemBtn = e.target && e.target.closest && e.target.closest('.account-menu__item');
      if (itemBtn) {
        if (itemBtn.dataset.action === 'logout') {
          try { localStorage.removeItem('econosAuth'); } catch (err) { /* private mode */ }
          window.location.href = '/login';
        }
        closeAccountMenu();
        return;
      }
      /* Outside click closes the menu. */
      if (menu && !menu.hidden && !menu.contains(e.target)) {
        closeAccountMenu();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        var menu = document.getElementById(ACCOUNT_MENU_ID);
        if (menu && !menu.hidden) {
          var trigger = menu.__trigger;
          closeAccountMenu();
          if (trigger) trigger.focus();
        }
      }
    });
  }

  window.Shell = {
    renderSidebar:   renderSidebar,
    renderTopbar:    renderTopbar,
    renderApp:       renderApp,
    renderStages:    renderStages,
    renderMobileStages: renderMobileStages,
    renderSkipLink:  renderSkipLink,
    mountSkipLink:   mountSkipLink
  };

  /* shell.js auto-injects the skip-link + wires the account menu so
     each shell HTML body doesn't repeat that block. Idempotent. */
  function bootShell() {
    mountSkipLink();
    bindAccountMenu();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootShell);
  } else {
    bootShell();
  }
})();
