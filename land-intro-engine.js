/* ============================================================
   ECONOS — Land It intro page renderer
   Configurator: student picks sections A / B / C to build their session.
   Uses partial re-render on pill click (no full page re-render).
   ============================================================ */

(function () {
  'use strict';

  window.bootLandIntro = function () {
    var I = window.ECONOS_ICONS;
    var T = window.ECONOS_LAND_INTRO;

    var state = {
      sectionA: null,   /* null | 1..5 | 'skip' */
      sectionB: [],     /* array of option ids; may contain 'none' for explicit skip */
      sectionC: null    /* null | 'include' | 'skip' */
    };

    /* ── helpers ──────────────────────────────────────────── */

    function hasSectionB() {
      for (var i = 0; i < state.sectionB.length; i++) {
        if (state.sectionB[i] !== 'none') { return true; }
      }
      return false;
    }
    function buildHref() {
      if (typeof state.sectionA === 'number' && state.sectionA > 0) {
        return 'land_inflation_section_a.html';
      }
      if (hasSectionB()) {
        return 'land_inflation_section_b.html';
      }
      if (state.sectionC === 'include') {
        return 'land_inflation_section_c.html';
      }
      return '#';
    }

    function sectionAMarks() {
      return (typeof state.sectionA === 'number') ? state.sectionA * 5 : 0;
    }

    function sectionBMarks() {
      var b = 0;
      for (var i = 0; i < state.sectionB.length; i++) {
        var id = state.sectionB[i];
        if (id === 'none') { continue; }
        for (var j = 0; j < T.sectionB.options.length; j++) {
          if (T.sectionB.options[j].id === id) {
            b += T.sectionB.options[j].marks;
            break;
          }
        }
      }
      return b;
    }

    function totalMarks() {
      var c = state.sectionC === 'include' ? 25 : 0;
      return sectionAMarks() + sectionBMarks() + c;
    }

    function estTime(marks) {
      if (marks === 0) { return '—'; }
      var mins = Math.round((marks * 1.2) / 10) * 10;
      if (mins < 60) { return mins + ' min'; }
      var h = Math.floor(mins / 60);
      var m = mins % 60;
      return h + 'h' + (m > 0 ? ' ' + m + 'm' : '');
    }

    /* ── sidebar / topbar ────────────────────────────────── */

    function renderSidebar() {
      var nav = [
        { name: 'Home',          icon: I.home,     href: 'index.html', active: false },
        { name: 'My topics',     icon: I.topics,   href: '#',          active: true  },
        { name: 'Progress',      icon: I.progress, href: '#',          active: false },
        { name: 'Exam practice', icon: I.practice, href: '#',          active: false },
        { name: 'Study planner', icon: I.planner,  href: '#',          active: false },
        { name: 'Messages',      icon: I.messages, href: '#',          active: false },
        { name: 'Settings',      icon: I.settings, href: '#',          active: false }
      ];
      return '<aside class="sidebar">'
        + '<div class="sidebar__brand">'
        +   '<a href="index.html" class="sidebar__logo-link"><img src="assets/econos-logo-full.png" alt="econos" class="sidebar__logo-full"></a>'
        + '</div>'
        + '<nav class="sidebar__nav">'
        +   nav.map(function (n) {
              return '<a href="' + n.href + '" class="' + (n.active ? 'is-active' : '') + '">' + n.icon + '<span>' + n.name + '</span></a>';
            }).join('')
        + '</nav>'
        + '<div class="sidebar__streak">'
        +   '<div class="sidebar__streak-row"><span class="sidebar__streak-flame">🔥</span><span class="sidebar__streak-num">1</span></div>'
        +   '<div class="sidebar__streak-label">Day streak</div>'
        +   '<div class="sidebar__streak-sub">Keep it going!</div>'
        + '</div>'
        + '<div class="sidebar__user">'
        +   '<div class="sidebar__user-avatar">AB</div>'
        +   '<div class="sidebar__user-info">'
        +     '<div class="sidebar__user-name">Alex Brown</div>'
        +     '<div class="sidebar__user-role">A-Level Economics</div>'
        +   '</div>'
        +   '<div class="sidebar__user-chev">' + I.chevDown + '</div>'
        + '</div>'
        + '</aside>';
    }

    function renderTopbar() {
      return '<header class="topbar">'
        + '<a href="topic_inflation.html" class="topbar__back">' + I.arrowLeft + '</a>'
        + '<div class="topbar__crumbs">'
        +   '<div class="topbar__session-label">' + T.sessionLabel + '</div>'
        +   '<div class="topbar__topic-title">' + T.topic + '</div>'
        + '</div>'
        + '<div class="topbar__right">'
        +   '<div class="topbar__streak"><span class="topbar__streak-icon">🔥</span><span>1 day streak</span></div>'
        +   '<div class="topbar__avatar"><div class="topbar__avatar-circle">AB</div><span class="topbar__avatar-chev">' + I.chevDown + '</span></div>'
        + '</div>'
        + '</header>';
    }

    /* ── right-rail stages ───────────────────────────────── */

    function renderStages() {
      return T.stages.map(function (s) {
        var cls = 'stage'
          + (s.state === 'current'   ? ' is-current'   : '')
          + (s.state === 'available' ? ' is-available' : '')
          + (s.state === 'done'      ? ' is-done'      : '')
          + (s.state === 'locked'    ? ' is-locked'    : '');
        var num = s.state === 'locked' ? I.lock : (s.state === 'done' ? I.check : s.num);
        var inner = '<div class="stage__num">' + num + '</div>'
          + '<div class="stage__body">'
          +   '<div class="stage__name">' + s.name + '</div>'
          +   '<div class="stage__sub">'  + s.sub  + '</div>'
          +   (s.state === 'current'   ? '<span class="stage__chip">Current</span>' : '')
          +   (s.state === 'available' ? '<span class="stage__chip stage__chip--available">Open →</span>' : '')
          +   (s.state === 'done'      ? '<span class="stage__chip stage__chip--done">Done</span>' : '')
          + '</div>';
        return s.href && s.state !== 'locked' && s.state !== 'current'
          ? '<a href="' + s.href + '" class="' + cls + '">' + inner + '</a>'
          : '<div class="' + cls + '">'    + inner + '</div>';
      }).join('');
    }

    /* ── rail summary (partial re-render target) ─────────── */

    function renderRailSummary() {
      var marks = totalMarks();
      var items = '';

      if (typeof state.sectionA === 'number' && state.sectionA > 0) {
        var aQ = state.sectionA;
        items += '<div class="land-rs__item">'
          + '<span class="land-rs__dot land-rs__dot--a"></span>'
          + '<span>Section A &mdash; ' + aQ + ' question' + (aQ > 1 ? 's' : '') + ' (' + (aQ * 5) + ' marks)</span>'
          + '</div>';
      }

      for (var bi = 0; bi < state.sectionB.length; bi++) {
        var bid = state.sectionB[bi];
        if (bid === 'none') { continue; }
        var bLabel = '';
        for (var bj = 0; bj < T.sectionB.options.length; bj++) {
          if (T.sectionB.options[bj].id === bid) {
            bLabel = T.sectionB.options[bj].label;
            break;
          }
        }
        items += '<div class="land-rs__item">'
          + '<span class="land-rs__dot land-rs__dot--b"></span>'
          + '<span>Section B &mdash; ' + bLabel + ' question</span>'
          + '</div>';
      }

      if (state.sectionC === 'include') {
        items += '<div class="land-rs__item">'
          + '<span class="land-rs__dot land-rs__dot--c"></span>'
          + '<span>Section C &mdash; Essay (25 marks)</span>'
          + '</div>';
      }

      var body = marks === 0
        ? '<div class="land-rs__empty">Select sections above to build your session.</div>'
        : '<div class="land-rs__list">' + items + '</div>';

      return '<div class="land-rs__marks-row">'
        +   '<span class="land-rs__marks-num">' + marks + '</span>'
        +   '<span class="land-rs__marks-label">marks</span>'
        + '</div>'
        + '<div class="land-rs__time">Approx. ' + estTime(marks) + '</div>'
        + body;
    }

    /* ── section configurators ───────────────────────────── */

    function renderSectionA() {
      var pills = '';
      for (var n = 1; n <= 5; n++) {
        var cls = 'land-pill' + (state.sectionA === n ? ' is-selected' : '');
        pills += '<button class="' + cls + '" data-section="a" data-value="' + n + '">' + n + '</button>';
      }
      var skipCls = 'land-pill land-pill--skip' + (state.sectionA === 'skip' ? ' is-selected' : '');
      pills += '<button class="' + skipCls + '" data-section="a" data-value="skip">Skip</button>';
      return '<div class="land-section">'
        + '<div class="land-section__head">'
        +   '<div class="land-section__label-row">'
        +     '<span class="land-section__tag land-section__tag--a">A</span>'
        +     '<div>'
        +       '<div class="land-section__name">Section A</div>'
        +       '<div class="land-section__sub">Short questions &middot; 5 marks each</div>'
        +     '</div>'
        +   '</div>'
        + '</div>'
        + '<p class="land-section__desc">' + T.sectionA.description + '</p>'
        + '<div class="land-pills">' + pills + '</div>'
        + '</div>';
    }

    function renderSectionB() {
      var pills = T.sectionB.options.map(function (opt) {
        var sel  = state.sectionB.indexOf(opt.id) !== -1;
        var cls  = 'land-pill'
          + (sel ? ' is-selected' : '')
          + (opt.id === 'none' ? ' land-pill--skip' : '');
        return '<button class="' + cls + '" data-section="b" data-value="' + opt.id + '">'
          + opt.label
          + '</button>';
      }).join('');

      return '<div class="land-section">'
        + '<div class="land-section__head">'
        +   '<div class="land-section__label-row">'
        +     '<span class="land-section__tag land-section__tag--b">B</span>'
        +     '<div>'
        +       '<div class="land-section__name">Section B</div>'
        +       '<div class="land-section__sub">Extended response &middot; select one or more</div>'
        +     '</div>'
        +   '</div>'
        + '</div>'
        + '<p class="land-section__desc">' + T.sectionB.description + '</p>'
        + '<div class="land-pills">' + pills + '</div>'
        + '</div>';
    }

    function renderSectionC() {
      var incCls  = 'land-pill land-pill--lg' + (state.sectionC === 'include'  ? ' is-selected' : '');
      var skipCls = 'land-pill land-pill--lg land-pill--skip' + (state.sectionC === 'skip' ? ' is-selected' : '');

      return '<div class="land-section">'
        + '<div class="land-section__head">'
        +   '<div class="land-section__label-row">'
        +     '<span class="land-section__tag land-section__tag--c">C</span>'
        +     '<div>'
        +       '<div class="land-section__name">Section C</div>'
        +       '<div class="land-section__sub">Essay question &middot; 25 marks</div>'
        +     '</div>'
        +   '</div>'
        + '</div>'
        + '<p class="land-section__desc">' + T.sectionC.description + '</p>'
        + '<div class="land-pills">'
        +   '<button class="' + incCls  + '" data-section="c" data-value="include">Include (25 marks)</button>'
        +   '<button class="' + skipCls + '" data-section="c" data-value="skip">Skip</button>'
        + '</div>'
        + '</div>';
    }

    /* ── session meta bar (partial re-render target) ─────── */

    function renderSessionMeta() {
      var marks  = totalMarks();
      var hasAny = marks > 0;
      var disabledCls = hasAny ? '' : ' is-disabled';

      return '<div class="land-session-meta">'
        + '<div class="land-session-meta__item">'
        +   '<div class="land-session-meta__icon">' + I.target + '</div>'
        +   '<div>'
        +     '<div class="land-session-meta__label">Total marks</div>'
        +     '<div class="land-session-meta__val">' + (hasAny ? marks + ' marks' : 'None selected') + '</div>'
        +   '</div>'
        + '</div>'
        + '<div class="land-session-meta__item">'
        +   '<div class="land-session-meta__icon">' + I.clock + '</div>'
        +   '<div>'
        +     '<div class="land-session-meta__label">Estimated time</div>'
        +     '<div class="land-session-meta__val">' + estTime(marks) + '</div>'
        +   '</div>'
        + '</div>'
        + '<div class="land-session-meta__cta">'
        +   '<a href="' + buildHref() + '" class="btn btn--primary btn--lg' + disabledCls + '">Build my session ' + I.arrowRight + '</a>'
        + '</div>'
        + '</div>';
    }

    /* ── full page render (called once on boot) ──────────── */

    function renderPage() {
      var hero = (I.heroBars || '');

      return '<div class="page">'
        + '<div>'

        + '<div class="card intro-card">'
        +   '<div class="row row--top">'
        +     '<div class="intro-card__text">'
        +       '<div class="card__step-label">' + T.sessionLabel + '</div>'
        +       '<h1 class="card__title card__title--lg">' + T.topic + '</h1>'
        +       '<p class="card__lede">You\'ve learned the content and trained the skills. Now tackle real exam questions and apply everything under time pressure.</p>'
        +     '</div>'
        +     '<div class="illust-bars">' + hero + '</div>'
        +   '</div>'
        + '</div>'

        + '<div class="card land-config-card">'
        +   '<div class="land-config-card__head">'
        +     '<div class="land-config-card__title">Build your Land It session</div>'
        +     '<div class="land-config-card__sub">Select which sections to practise. You can always adjust and rebuild.</div>'
        +   '</div>'
        +   '<div class="land-sections" id="land-sections">'
        +     renderSectionA()
        +     renderSectionB()
        +     renderSectionC()
        +   '</div>'
        + '</div>'

        + '<div class="card do-box">'
        +   '<div class="do-box__icon">' + I.target + '</div>'
        +   '<div>'
        +     '<div class="do-box__title">What this session trains</div>'
        +     '<div class="do-box__sub">Exam-grade writing skills under realistic conditions.</div>'
        +   '</div>'
        +   '<div class="do-box__checks">'
        +     T.trains.map(function (t) {
                return '<div class="do-box__check"><span class="check-icon">' + I.check + '</span><span>' + t + '</span></div>';
              }).join('')
        +   '</div>'
        + '</div>'

        + '<div class="callout callout--info">'
        +   '<div class="callout__icon">' + I.info + '</div>'
        +   '<div class="callout__body">'
        +     '<div class="callout__title">Tip</div>'
        +     '<div class="callout__text">' + T.tip + '</div>'
        +   '</div>'
        + '</div>'

        + '<div id="land-session-meta">' + renderSessionMeta() + '</div>'

        + '</div>'

        + '<aside class="right-rail">'
        +   '<div class="stages">' + renderStages() + '</div>'
        +   '<div class="rail-card" id="land-summary-rail">'
        +     '<div class="rail-card__title">This session</div>'
        +     renderRailSummary()
        +   '</div>'
        + '</aside>'

        + '</div>';
    }

    /* ── partial updates on pill click ──────────────────── */

    function updateSummaryPanels() {
      var railEl = document.getElementById('land-summary-rail');
      var metaEl = document.getElementById('land-session-meta');
      if (railEl) {
        railEl.innerHTML = '<div class="rail-card__title">This session</div>'
          + renderRailSummary();
      }
      if (metaEl) {
        metaEl.innerHTML = renderSessionMeta();
      }
    }

    function rerenderSections() {
      var el = document.getElementById('land-sections');
      if (el) {
        el.innerHTML = renderSectionA() + renderSectionB() + renderSectionC();
        attachHandlers();
      }
    }

    /* ── event handlers ──────────────────────────────────── */

    function attachHandlers() {
      var root  = document.getElementById('app-root');
      var pills = root.querySelectorAll('[data-section]');
      for (var i = 0; i < pills.length; i++) {
        (function (btn) {
          btn.addEventListener('click', function () {
            var section = btn.getAttribute('data-section');
            var value   = btn.getAttribute('data-value');
            if (section === 'a') {
              state.sectionA = (value === 'skip') ? 'skip' : parseInt(value, 10);
            } else if (section === 'b') {
              if (value === 'none') {
                state.sectionB = ['none'];
              } else {
                var noneIdx = state.sectionB.indexOf('none');
                if (noneIdx !== -1) { state.sectionB.splice(noneIdx, 1); }
                var idx = state.sectionB.indexOf(value);
                if (idx === -1) {
                  state.sectionB.push(value);
                } else {
                  state.sectionB.splice(idx, 1);
                }
              }
            } else if (section === 'c') {
              state.sectionC = value;
            }
            rerenderSections();
            updateSummaryPanels();
          });
        })(pills[i]);
      }
    }

    /* ── boot ────────────────────────────────────────────── */

    document.getElementById('app-root').innerHTML = '<div class="app theme--land">'
      + renderSidebar()
      + '<div class="main">'
      +   renderTopbar()
      +   renderPage()
      + '</div>'
      + '</div>';

    attachHandlers();
  };

})();
