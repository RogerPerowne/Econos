/* ============================================================
   ECONOS — Link It intro page renderer
   Mirrors the Learn It intro shell but lists stations + skills.
   ============================================================ */

(function () {
  'use strict';

  window.bootLinkIntro = function () {
    var I = window.ECONOS_ICONS;
    var T = window.ECONOS_LINK_INTRO;

    function renderSidebar() {
      var nav = [
        { name: 'Home',         icon: I.home,     href: 'index.html', active: false },
        { name: 'My topics',    icon: I.topics,   href: '#',          active: true  },
        { name: 'Progress',     icon: I.progress, href: '#',          active: false },
        { name: 'Exam practice',icon: I.practice, href: '#',          active: false },
        { name: 'Study planner',icon: I.planner,  href: '#',          active: false },
        { name: 'Messages',     icon: I.messages, href: '#',          active: false },
        { name: 'Settings',     icon: I.settings, href: '#',          active: false }
      ];
      return ''
        + '<aside class="sidebar">'
        +   '<div class="sidebar__brand">'
        +     '<div class="sidebar__logo"><img src="assets/econos-icon.png" alt="econos"></div>'
        +     '<div class="sidebar__wordmark">econos</div>'
        +     '<div class="sidebar__tagline">'
        +       'Learn it<span class="ec-stop-green">.</span> Link it<span class="ec-stop-yellow">.</span> Land it<span class="ec-stop-pink">.</span>'
        +     '</div>'
        +   '</div>'
        +   '<nav class="sidebar__nav">'
        +     nav.map(function (n) {
                return '<a href="' + n.href + '" class="' + (n.active ? 'is-active' : '') + '">' + n.icon + '<span>' + n.name + '</span></a>';
              }).join('')
        +   '</nav>'
        +   '<div class="sidebar__streak">'
        +     '<div class="sidebar__streak-row"><span class="sidebar__streak-flame">🔥</span><span class="sidebar__streak-num">1</span></div>'
        +     '<div class="sidebar__streak-label">Day streak</div>'
        +     '<div class="sidebar__streak-sub">Keep it going!</div>'
        +   '</div>'
        +   '<div class="sidebar__user">'
        +     '<div class="sidebar__user-avatar">AB</div>'
        +     '<div class="sidebar__user-info">'
        +       '<div class="sidebar__user-name">Alex Brown</div>'
        +       '<div class="sidebar__user-role">A-Level Economics</div>'
        +     '</div>'
        +     '<div class="sidebar__user-chev">' + I.chevDown + '</div>'
        +   '</div>'
        + '</aside>';
    }

    function renderTopbar() {
      return ''
        + '<header class="topbar">'
        +   '<a href="topic_inflation.html" class="topbar__back">' + I.arrowLeft + '</a>'
        +   '<div class="topbar__crumbs">'
        +     '<div class="topbar__session-label">' + T.sessionLabel + '</div>'
        +     '<div class="topbar__topic-title">' + T.topic + '</div>'
        +   '</div>'
        +   '<div class="topbar__right">'
        +     '<div class="topbar__streak"><span class="topbar__streak-icon">🔥</span><span>1 day streak</span></div>'
        +     '<div class="topbar__avatar"><div class="topbar__avatar-circle">AB</div><span class="topbar__avatar-chev">' + I.chevDown + '</span></div>'
        +   '</div>'
        + '</header>';
    }

    function renderStations() {
      return T.intro.stations.map(function (s) {
        var locked = s.state === 'locked';
        var cls    = 'link-intro-station' + (locked ? ' is-locked' : '');
        var num    = locked ? I.lock : s.num;
        var inner  = ''
          + '<div class="link-intro-station__num">' + num + '</div>'
          + '<div class="link-intro-station__body">'
          +   '<div class="link-intro-station__head">'
          +     '<span class="link-intro-station__name">' + s.name + '</span>'
          +     '<span class="link-intro-station__skill link-intro-station__skill--' + s.skill.toLowerCase() + '">' + s.skill + '</span>'
          +   '</div>'
          +   '<div class="link-intro-station__sub">' + s.sub + '</div>'
          + '</div>'
          + (locked ? '' : '<div class="link-intro-station__arrow">' + I.arrowRight + '</div>');
        return locked
          ? '<div class="' + cls + '">' + inner + '</div>'
          : '<a href="' + s.href + '" class="' + cls + '">' + inner + '</a>';
      }).join('');
    }

    function renderStages() {
      return T.intro.stages.map(function (s) {
        var cls = 'stage'
                + (s.state === 'current'   ? ' is-current'   : '')
                + (s.state === 'available' ? ' is-available' : '')
                + (s.state === 'done'      ? ' is-done'      : '')
                + (s.state === 'locked'    ? ' is-locked'    : '');
        var num = s.state === 'locked' ? I.lock : (s.state === 'done' ? I.check : s.num);
        var inner = ''
          + '<div class="stage__num">' + num + '</div>'
          + '<div class="stage__body">'
          +   '<div class="stage__name">' + s.name + '</div>'
          +   '<div class="stage__sub">' + s.sub + '</div>'
          +   (s.state === 'current'   ? '<span class="stage__chip">Current</span>' : '')
          +   (s.state === 'available' ? '<span class="stage__chip stage__chip--available">Open →</span>' : '')
          +   (s.state === 'done'      ? '<span class="stage__chip stage__chip--done">Done</span>' : '')
          + '</div>';
        return s.href && s.state !== 'locked' && s.state !== 'current'
          ? '<a href="' + s.href + '" class="' + cls + '">' + inner + '</a>'
          : '<div class="' + cls + '">' + inner + '</div>';
      }).join('');
    }

    function renderPage() {
      var hero = T.intro.heroKey && I[T.intro.heroKey] ? I[T.intro.heroKey] : I.heroBars;

      return ''
        + '<div class="page">'
        +   '<div>'
        +     '<div class="card intro-card">'
        +       '<div class="row row--top">'
        +         '<div class="intro-card__text">'
        +           '<div class="card__step-label">' + T.sessionLabel + '</div>'
        +           '<h1 class="card__title card__title--lg">' + T.topic + '</h1>'
        +           '<p class="card__lede">' + T.intro.summary + '</p>'
        +         '</div>'
        +         '<div class="illust-bars">' + hero + '</div>'
        +       '</div>'

        +       '<div class="do-box">'
        +         '<div class="do-box__icon">' + I.target + '</div>'
        +         '<div>'
        +           '<div class="do-box__title">What you\'ll do in this session</div>'
        +           '<div class="do-box__sub">' + T.intro.doInThis + '</div>'
        +         '</div>'
        +         '<div class="do-box__checks">'
        +           T.intro.outcomes.map(function (o) {
                      return '<div class="do-box__check"><span class="check-icon">' + I.check + '</span><span>' + o + '</span></div>';
                    }).join('')
        +         '</div>'
        +       '</div>'

        +       '<div class="link-intro-stations__head">The four stations</div>'
        +       '<div class="link-intro-stations">' + renderStations() + '</div>'

        +       '<div class="callout callout--info">'
        +         '<div class="callout__icon">' + I.info + '</div>'
        +         '<div class="callout__body">'
        +           '<div class="callout__title">Tip</div>'
        +           '<div class="callout__text">' + T.intro.tip + '</div>'
        +         '</div>'
        +       '</div>'
        +     '</div>'

        +     '<div class="session-meta">'
        +       '<div class="session-meta__item">'
        +         '<div class="session-meta__icon">' + I.clock + '</div>'
        +         '<div>'
        +           '<div class="session-meta__label">Estimated time</div>'
        +           '<div class="session-meta__val">' + T.estTime + '</div>'
        +         '</div>'
        +       '</div>'
        +       '<div class="session-meta__item">'
        +         '<div class="session-meta__icon">' + I.target + '</div>'
        +         '<div>'
        +           '<div class="session-meta__label">Your goal</div>'
        +           '<div class="session-meta__val">' + T.goal + '</div>'
        +         '</div>'
        +       '</div>'
        +       '<div class="session-meta__cta">'
        +         '<a href="' + T.intro.startUrl + '" class="btn btn--primary btn--lg">'
        +           T.intro.startLabel + ' ' + I.arrowRight
        +         '</a>'
        +       '</div>'
        +     '</div>'
        +   '</div>'

        +   '<aside class="right-rail">'
        +     '<div class="stages">' + renderStages() + '</div>'
        +   '</aside>'
        + '</div>';
    }

    document.getElementById('app-root').innerHTML = ''
      + '<div class="app theme--link">'
      +   renderSidebar()
      +   '<div class="main">'
      +     renderTopbar()
      +     renderPage()
      +   '</div>'
      + '</div>';
  };
})();
