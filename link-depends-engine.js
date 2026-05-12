/* ============================================================
   ECONOS — Link It engine (It Depends On station)
   Tap-to-rank evaluation factors. No drag dependency.
   ============================================================ */

(function () {
  'use strict';

  window.bootLinkDepends = function () {
    var I    = window.ECONOS_ICONS;
    var DATA = window.ECONOS_LINK_DEPENDS;

    var state = {
      scenarioIdx: 0,
      picks:       [],    // factor IDs in rank order, max 3
      revealed:    false
    };

    /* -------- helpers -------- */

    function currentScenario() {
      return DATA.scenarios[state.scenarioIdx];
    }

    function factorById(sc, id) {
      return sc.factors.filter(function (f) { return f.id === id; })[0] || null;
    }

    function isInModelTop3(sc, id) {
      return sc.modelRanking.indexOf(id) !== -1;
    }

    /* -------- render -------- */

    function render() {
      var root = document.getElementById('app-root');
      root.innerHTML = ''
        + '<div class="app theme--link">'
        +   renderSidebar()
        +   '<div class="main">'
        +     renderTopbar()
        +     '<div class="page">'
        +       '<div class="link-station">' + renderStation() + '</div>'
        +       renderRail()
        +     '</div>'
        +   '</div>'
        + '</div>';
      attachHandlers();
    }

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
      return ''
        + '<aside class="sidebar">'
        +   '<div class="sidebar__brand">'
        +     '<div class="sidebar__logo">' + I.brandGlyph + '</div>'
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
        +   '<a href="' + DATA.backUrl + '" class="topbar__back">' + I.arrowLeft + '<span>Back to dashboard</span></a>'
        +   '<div class="topbar__crumbs">'
        +     '<div class="topbar__session-label">' + DATA.sessionLabel + '</div>'
        +     '<div class="topbar__topic-title">' + DATA.topic + '</div>'
        +   '</div>'
        +   '<div class="topbar__right">'
        +     '<div class="topbar__streak"><span class="topbar__streak-icon">🔥</span><span>1 day streak</span></div>'
        +     '<div class="topbar__avatar"><div class="topbar__avatar-circle">AB</div><span class="topbar__avatar-chev">' + I.chevDown + '</span></div>'
        +   '</div>'
        + '</header>';
    }

    function renderStation() {
      var sc = currentScenario();
      return ''
        + '<div class="link-card">'
        +   '<div class="link-card__eyebrow"><span class="link-card__eyebrow-dot"></span>' + DATA.eyebrow + '</div>'
        +   '<p class="link-card__lede">' + DATA.instruction + '</p>'
        +   renderClaim(sc)
        +   (state.revealed ? renderReveal(sc) : renderBankAndRank(sc))
        + '</div>'
        + renderFooter();
    }

    function renderClaim(sc) {
      return ''
        + '<div class="depends-claim">'
        +   '<div class="depends-claim__icon">' + sc.icon + '</div>'
        +   '<div class="depends-claim__body">'
        +     '<div class="depends-claim__label">Policy claim</div>'
        +     '<div class="depends-claim__text">' + sc.claim + '</div>'
        +   '</div>'
        + '</div>';
    }

    function renderBankAndRank(sc) {
      return ''
        + '<div class="depends-layout">'
        +   '<div class="depends-bank">'
        +     '<div class="depends-bank__heading">Evaluation bank</div>'
        +     '<div class="depends-factor-grid">'
        +       renderFactorGrid(sc)
        +     '</div>'
        +   '</div>'
        +   '<div class="depends-rank">'
        +     renderRankSlots(sc)
        +   '</div>'
        + '</div>';
    }

    function renderFactorGrid(sc) {
      return sc.factors.map(function (f) {
        var placed = state.picks.indexOf(f.id) !== -1;
        return ''
          + '<button type="button"'
          +   ' class="depends-factor' + (placed ? ' is-placed' : '') + '"'
          +   (placed ? ' disabled aria-hidden="true"' : ' data-factor="' + f.id + '"')
          +   ' aria-label="' + f.label + '">'
          +   '<span class="depends-factor__icon">' + f.icon + '</span>'
          +   '<span class="depends-factor__label">' + f.label + '</span>'
          + '</button>';
      }).join('');
    }

    function renderRankSlots(sc) {
      var slots = '';
      for (var i = 0; i < 3; i++) {
        var factorId = state.picks[i] || null;
        var factor   = factorId ? factorById(sc, factorId) : null;
        if (factor) {
          slots += ''
            + '<div class="depends-slot depends-slot--filled">'
            +   '<div class="depends-slot__num">' + (i + 1) + '</div>'
            +   '<div class="depends-slot__icon">' + factor.icon + '</div>'
            +   '<div class="depends-slot__label">' + factor.label + '</div>'
            +   '<button type="button" class="depends-slot__remove" data-remove-pick="' + i + '" aria-label="Remove">&times;</button>'
            + '</div>';
        } else {
          slots += ''
            + '<div class="depends-slot depends-slot--empty">'
            +   '<div class="depends-slot__num">' + (i + 1) + '</div>'
            +   '<div class="depends-slot__placeholder">Tap a factor ←</div>'
            + '</div>';
        }
      }
      return slots;
    }

    function renderReveal(sc) {
      var slotsHtml = '';
      for (var i = 0; i < 3; i++) {
        var pickedId    = state.picks[i] || null;
        var pickedFact  = pickedId ? factorById(sc, pickedId) : null;
        var modelId     = sc.modelRanking[i];
        var modelFact   = factorById(sc, modelId);
        var match       = pickedId && isInModelTop3(sc, pickedId);

        var matchHtml = pickedId
          ? '<div class="depends-match' + (match ? ' depends-match--yes' : ' depends-match--no') + '">'
          +   (match ? (I.check || '✓') + ' In model top 3' : '✕ Not in model top 3')
          + '</div>'
          : '<div class="depends-match depends-match--miss">You did not rank this position</div>';

        slotsHtml += ''
          + '<div class="depends-slot depends-slot--filled depends-slot--revealed">'
          +   '<div class="depends-slot__num">' + (i + 1) + '</div>'
          +   '<div class="depends-slot__content">'
          +     '<div class="depends-slot__model-label">Model pick</div>'
          +     '<div class="depends-slot__model-row">'
          +       '<span class="depends-slot__icon">' + modelFact.icon + '</span>'
          +       '<span class="depends-slot__label">' + modelFact.label + '</span>'
          +     '</div>'
          +     '<div class="depends-slot__why">' + modelFact.why + '</div>'
          +     (pickedFact
              ? '<div class="depends-slot__your-pick">Your pick: <strong>' + pickedFact.label + '</strong></div>'
              : '')
          +     matchHtml
          +   '</div>'
          + '</div>';
      }

      return ''
        + '<div class="depends-layout depends-layout--reveal">'
        +   '<div class="depends-rank depends-rank--full">'
        +     slotsHtml
        +   '</div>'
        + '</div>'
        + '<div class="depends-judgement">'
        +   '<div class="depends-judgement__label">Ideal judgement statement</div>'
        +   '<div class="depends-judgement__text">' + sc.judgement + '</div>'
        + '</div>';
    }

    function renderRail() {
      var stationsList = DATA.stations.map(function (st, i) {
        var isCurrent = i === DATA.currentStationIdx;
        var tag       = st.href ? 'a' : 'div';
        var attrs     = st.href ? ' href="' + st.href + '"' : '';
        var lockChip  = (!st.href && !isCurrent) ? '<span class="cards-list__chip cards-list__chip--locked">Locked</span>' : '';
        return ''
          + '<' + tag
          +   ' class="cards-list__item' + (isCurrent ? ' is-current' : '') + (st.href ? ' is-linked' : '') + '"'
          +   attrs + '>'
          +   '<div class="cards-list__num">' + (i + 1) + '</div>'
          +   '<div class="cards-list__body">'
          +     '<div class="cards-list__name">' + st.label + '</div>'
          +     (isCurrent ? '<span class="cards-list__chip">Current</span>' : lockChip)
          +   '</div>'
          + '</' + tag + '>';
      }).join('');

      var wgllItems = DATA.wgll || [
        { icon: '⚖️', text: 'Rank by significance, not frequency' },
        { icon: '🎯', text: 'Justify each factor with context'    },
        { icon: '📝', text: 'Evaluation: "It depends on…" + reason' }
      ];
      var wgllHtml = wgllItems.map(function (p) {
        return ''
          + '<div class="link-rail__wgll-item">'
          +   '<span class="link-rail__wgll-icon">' + p.icon + '</span>'
          +   '<span>' + p.text + '</span>'
          + '</div>';
      }).join('');

      var sessionDots = ''
        + '<div class="session-dots">'
        +   '<div class="session-dot is-done">' + I.check + '</div>'
        +   '<div class="session-line is-done"></div>'
        +   '<div class="session-dot is-current">2</div>'
        +   '<div class="session-line"></div>'
        +   '<div class="session-dot">3</div>'
        + '</div>';

      return ''
        + '<aside class="right-rail">'
        +   '<div class="rail-card">'
        +     '<div class="rail-card__title">Topic progress</div>'
        +     '<div class="rail-card__sub">Step 2 of 3: Link</div>'
        +     sessionDots
        +   '</div>'
        +   '<div class="rail-card">'
        +     '<div class="rail-card__title" style="margin-bottom: var(--sp-3);">Stations</div>'
        +     '<div class="cards-list">' + stationsList + '</div>'
        +   '</div>'
        +   '<div class="rail-card">'
        +     '<div class="rail-card__title" style="margin-bottom: var(--sp-3);">What good looks like</div>'
        +     '<div class="link-rail__wgll">' + wgllHtml + '</div>'
        +   '</div>'
        + '</aside>';
    }

    function renderFooter() {
      var total       = DATA.scenarios.length;
      var scenarioNum = state.scenarioIdx + 1;
      var allPicked   = state.picks.length === 3;
      var isLast      = state.scenarioIdx === total - 1;

      var primary;
      if (!state.revealed) {
        primary = '<button type="button" class="link-btn link-btn--primary"'
                + (allPicked ? '' : ' disabled')
                + ' id="reveal-btn">See ideal evaluation →</button>';
      } else if (!isLast) {
        primary = '<button type="button" class="link-btn link-btn--primary" id="next-scenario">Next scenario →</button>';
      } else {
        primary = '<button type="button" class="link-btn link-btn--primary" id="finish-btn">Finish →</button>';
      }

      return ''
        + '<div class="link-footer">'
        +   '<a href="' + DATA.backUrl + '" class="link-btn link-btn--ghost">← Back</a>'
        +   '<div class="link-footer__counter">Scenario ' + scenarioNum + ' of ' + total + '</div>'
        +   primary
        + '</div>';
    }

    /* -------- handlers -------- */

    function attachHandlers() {
      /* Tap a factor card → add to picks */
      document.querySelectorAll('[data-factor]').forEach(function (el) {
        el.addEventListener('click', function (e) {
          e.stopPropagation();
          if (state.revealed) return;
          if (state.picks.length >= 3) return;
          var id = el.getAttribute('data-factor');
          if (state.picks.indexOf(id) !== -1) return;
          state.picks.push(id);
          render();
        });
      });

      /* Tap × on a ranked slot → remove from picks */
      document.querySelectorAll('[data-remove-pick]').forEach(function (el) {
        el.addEventListener('click', function (e) {
          e.stopPropagation();
          if (state.revealed) return;
          var idx = parseInt(el.getAttribute('data-remove-pick'), 10);
          state.picks.splice(idx, 1);
          render();
        });
      });

      /* Reveal button */
      var revealBtn = document.getElementById('reveal-btn');
      if (revealBtn) revealBtn.addEventListener('click', function () {
        state.revealed = true;
        render();
        var judgement = document.querySelector('.depends-judgement');
        if (judgement) judgement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });

      /* Next scenario */
      var nextBtn = document.getElementById('next-scenario');
      if (nextBtn) nextBtn.addEventListener('click', function () {
        if (state.scenarioIdx < DATA.scenarios.length - 1) {
          state.scenarioIdx++;
          state.picks    = [];
          state.revealed = false;
          render();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });

      /* Finish */
      var finishBtn = document.getElementById('finish-btn');
      if (finishBtn) finishBtn.addEventListener('click', function () {
        if (DATA.nextUrl) {
          window.location.href = DATA.nextUrl;
        }
      });
    }

    render();
  };
})();
