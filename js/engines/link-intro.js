/* ============================================================
   ECONOS — Link It intro page renderer
   Mirrors the Learn It intro shell but lists stations + skills.
   ============================================================ */

(function () {
  'use strict';

  window.bootLinkIntro = function () {
    var I = window.ECONOS_ICONS;
    var T = window.ECONOS_LINK_INTRO;

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

    function renderPage() {
      var hero = T.intro.heroKey && I[T.intro.heroKey] ? I[T.intro.heroKey] : I.heroBars;

      return ''
        + '<div class="page">'
        +   '<div>'
        +     '<div class="card intro-card">'
        +       '<div class="row row--top">'
        +         '<div class="intro-card__text">'
        +           '<div class="card__step-label">' + (T.sessionLabel || TopicLoader.sessionLabel('link')) + '</div>'
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

        +       '<div class="link-intro-stations__head">The five steps</div>'
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

        +   '<div class="right-rail">'
        +     Shell.renderStages(T.intro.stages)
        +   '</div>'
        + '</div>';
    }

    document.getElementById('app-root').innerHTML = ''
      + '<div class="app theme--link">'
      +   Shell.renderSidebar({ activeNav: 'My topics' })
      +   '<div id="main-content" class="main" tabindex="-1" role="main">'
      +     Shell.renderTopbar({ backUrl: TopicLoader.buildUrl('topic.html'), sessionLabel: T.sessionLabel || TopicLoader.sessionLabel('link'), topicTitle: T.topic })
      +     renderPage()
      +   '</div>'
      + '</div>';
  };
})();
