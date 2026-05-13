/* ============================================================
   ECONOS — Link It engine (It Depends On station)
   ============================================================ */

(function () {
  'use strict';

  window.bootLinkDepends = function () {
    var I    = window.ECONOS_ICONS;
    var DATA = window.ECONOS_LINK_DEPENDS;

    var state = {
      scenarioIdx: 0,
      picks:       [],          // factor IDs in selection order, max 3
      whyTexts:    ['', '', ''], // one explanation per picked factor
      revealed:    false,
      lastFocused: -1
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

    function restoreTextareas() {
      for (var i = 0; i < 3; i++) {
        var el = document.querySelector('[data-why-idx="' + i + '"]');
        if (el) el.value = state.whyTexts[i];
      }
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
      restoreTextareas();
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
        +     '<a href="index.html" class="sidebar__logo-link"><img src="assets/econos-logo-full.png" alt="econos" class="sidebar__logo-full"></a>'
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
        +   '<div class="link-card__eyebrow-row">'
        +     '<div class="link-card__eyebrow"><span class="link-card__eyebrow-dot"></span>' + DATA.eyebrow + '</div>'
        +     '<span class="depends-scenario-badge">Scenario ' + (state.scenarioIdx + 1) + ' of ' + DATA.scenarios.length + '</span>'
        +   '</div>'
        +   '<p class="link-card__lede">' + DATA.instruction + '</p>'
        +   renderClaim(sc)
        +   renderWorkspace(sc)
        +   (state.revealed ? renderJudgement(sc) : '')
        + '</div>'
        + renderFooter();
    }

    function renderClaim(sc) {
      return ''
        + '<div class="depends-claim">'
        +   '<div class="depends-claim__icon">' + sc.claim.icon + '</div>'
        +   '<div class="depends-claim__body">'
        +     '<div class="depends-claim__prompt">' + sc.claim.prompt + '</div>'
        +     '<div class="depends-claim__text">' + sc.claim.text + '</div>'
        +   '</div>'
        + '</div>';
    }

    /* ── Unified workspace: bank (left) + slots with textareas (right) ── */
    function renderWorkspace(sc) {
      var placedSet = {};
      state.picks.forEach(function (id) { placedSet[id] = true; });

      var factorsHtml = sc.factors.map(function (f) {
        var placed    = !!placedSet[f.id];
        var missed    = state.revealed && isInModelTop3(sc, f.id) && !placed;
        var disabled  = state.revealed || (state.picks.length >= 3 && !placed);
        var cls       = 'depends-factor'
          + (placed ? ' is-placed' : '')
          + (missed  ? ' is-missed' : '');
        return ''
          + '<button type="button"'
          +   ' class="' + cls + '"'
          +   ' data-factor="' + f.id + '"'
          +   (disabled ? ' disabled' : '')
          + '>'
          +   '<span class="depends-factor__icon">' + f.icon + '</span>'
          +   '<span class="depends-factor__label">' + f.label + '</span>'
          +   (missed ? '<span class="depends-factor__missed">Should have picked</span>' : '')
          + '</button>';
      }).join('');

      var slotsHtml = '';
      for (var i = 0; i < 3; i++) {
        slotsHtml += renderSlot(sc, i);
      }

      return ''
        + '<div class="depends-layout">'
        +   '<div class="depends-bank">'
        +     '<div class="depends-bank__heading">Evaluation bank</div>'
        +     '<div class="depends-factor-grid">' + factorsHtml + '</div>'
        +   '</div>'
        +   '<div class="depends-rank">'
        +     '<div class="depends-rank__heading">Your factors &amp; reasons</div>'
        +     '<div class="depends-slots">' + slotsHtml + '</div>'
        +   '</div>'
        + '</div>';
    }

    function renderSlot(sc, i) {
      var id     = state.picks[i] || null;
      var factor = id ? factorById(sc, id) : null;

      if (!factor) {
        return ''
          + '<div class="depends-slot depends-slot--empty">'
          +   '<div class="depends-slot__num">' + (i + 1) + '</div>'
          +   '<span class="depends-slot__placeholder">Tap a factor on the left ←</span>'
          + '</div>';
      }

      var inModel    = isInModelTop3(sc, id);
      var markCls    = state.revealed ? (inModel ? ' is-correct' : ' is-wrong') : '';
      var markHtml   = state.revealed
        ? '<span class="depends-factor-mark">' + (inModel ? '✓' : '✕') + '</span>'
        : '';
      var removeHtml = state.revealed
        ? ''
        : '<button type="button" class="depends-slot__remove" data-remove-pick="' + i + '" aria-label="Remove">&times;</button>';
      var labelCls   = (state.revealed && !inModel) ? ' depends-slot__label--struck' : '';
      var revealHtml = '';
      if (state.revealed) {
        if (inModel) {
          revealHtml = '<div class="depends-ideal depends-ideal--correct">'
            + '<div class="depends-ideal__label">Ideal reason</div>'
            + '<div class="depends-ideal__text">' + factor.why + '</div>'
            + '</div>';
        } else {
          revealHtml = '<div class="depends-ideal depends-ideal--wrong">'
            + '<div class="depends-ideal__label">Not a key factor for this claim</div>'
            + '<div class="depends-ideal__text">This factor is less decisive here — see the ideal analysis below for the factors that change the conclusion most.</div>'
            + '</div>';
        }
      }

      return ''
        + '<div class="depends-slot depends-slot--filled' + markCls + '">'
        +   '<div class="depends-slot__head">'
        +     '<div class="depends-slot__num">' + (i + 1) + '</div>'
        +     '<span class="depends-slot__icon">' + factor.icon + '</span>'
        +     '<span class="depends-slot__label' + labelCls + '">' + factor.label + '</span>'
        +     markHtml
        +     removeHtml
        +   '</div>'
        +   '<textarea'
        +     ' class="depends-slot__textarea"'
        +     ' data-why-idx="' + i + '"'
        +     ' placeholder="Why does this factor matter for the claim?"'
        +     (state.revealed ? ' readonly' : '')
        +   '></textarea>'
        +   revealHtml
        + '</div>';
    }

    function renderJudgement(sc) {
      return ''
        + '<div class="depends-judgement">'
        +   '<div class="depends-judgement__label">Ideal evaluative analysis</div>'
        +   '<div class="depends-judgement__text">' + sc.judgement + '</div>'
        + '</div>';
    }

    /* ── Rail ── */
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
        { icon: '🎯', text: 'Link each factor back to the claim'  },
        { icon: '📝', text: 'Use "It depends on…" + reason'       }
      ];

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
        +     '<div class="link-rail__wgll">'
        +       wgllItems.map(function (p) {
                  return '<div class="link-rail__wgll-item"><span class="link-rail__wgll-icon">' + p.icon + '</span><span>' + p.text + '</span></div>';
                }).join('')
        +     '</div>'
        +   '</div>'
        + '</aside>';
    }

    /* ── Footer ── */
    function renderFooter() {
      var allPicked = state.picks.length === 3;
      var isLast    = state.scenarioIdx === DATA.scenarios.length - 1;
      var primary;

      if (!allPicked) {
        primary = '<button type="button" class="link-btn link-btn--primary" disabled>Choose 3 factors first</button>';
      } else if (!state.revealed) {
        primary = '<button type="button" class="link-btn link-btn--primary" id="check-btn">Check my evaluation →</button>';
      } else if (!isLast) {
        primary = '<button type="button" class="link-btn link-btn--primary" id="next-scenario">Next scenario →</button>';
      } else {
        primary = '<button type="button" class="link-btn link-btn--primary" id="finish-btn">Finish →</button>';
      }

      return ''
        + '<div class="link-footer">'
        +   '<a href="' + DATA.backUrl + '" class="link-btn link-btn--ghost">← Back</a>'
        +   primary
        + '</div>';
    }

    /* -------- handlers -------- */

    function attachHandlers() {
      /* tap factor → add to picks; tap a greyed (placed) factor → remove */
      document.querySelectorAll('[data-factor]').forEach(function (el) {
        el.addEventListener('click', function () {
          if (state.revealed) return;
          var id  = el.getAttribute('data-factor');
          var idx = state.picks.indexOf(id);
          if (idx !== -1) {
            state.picks.splice(idx, 1);
            state.whyTexts.splice(idx, 1);
            state.whyTexts.push('');
            render();
            return;
          }
          if (state.picks.length >= 3) return;
          state.picks.push(id);
          render();
        });
      });

      /* × on slot → remove */
      document.querySelectorAll('[data-remove-pick]').forEach(function (el) {
        el.addEventListener('click', function (ev) {
          ev.stopPropagation();
          if (state.revealed) return;
          var idx = parseInt(el.getAttribute('data-remove-pick'), 10);
          state.picks.splice(idx, 1);
          state.whyTexts.splice(idx, 1);
          state.whyTexts.push('');
          render();
        });
      });

      /* textarea input → save to state (no re-render) */
      document.querySelectorAll('[data-why-idx]').forEach(function (el) {
        var idx = parseInt(el.getAttribute('data-why-idx'), 10);
        el.addEventListener('focus', function () { state.lastFocused = idx; });
        el.addEventListener('input', function () { state.whyTexts[idx] = el.value; });
      });

      /* check button → reveal */
      var checkBtn = document.getElementById('check-btn');
      if (checkBtn) checkBtn.addEventListener('click', function () {
        state.revealed = true;
        render();
        var j = document.querySelector('.depends-judgement');
        if (j) j.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });

      /* next scenario */
      var nextBtn = document.getElementById('next-scenario');
      if (nextBtn) nextBtn.addEventListener('click', function () {
        state.scenarioIdx++;
        state.picks     = [];
        state.whyTexts  = ['', '', ''];
        state.revealed  = false;
        render();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });

      /* finish */
      var finishBtn = document.getElementById('finish-btn');
      if (finishBtn) finishBtn.addEventListener('click', function () {
        window.location.href = DATA.nextUrl || DATA.backUrl;
      });
    }

    render();
  };
})();
