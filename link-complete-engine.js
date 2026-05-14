/* ============================================================
   ECONOS — Link It Complete page engine
   Reads per-station scores from localStorage and renders the
   results summary card.
   ============================================================ */

(function () {
  'use strict';

  window.bootLinkComplete = function () {
    var I    = window.ECONOS_ICONS;
    var DATA = window.ECONOS_LINK_COMPLETE;

    /* ── Read stored results ── */
    var scores = {};
    try { scores = JSON.parse(localStorage.getItem('econos_link_scores') || '{}'); } catch (e) {}
    var startMs = parseInt(localStorage.getItem('econos_link_start') || '0', 10);
    var elapsedMs = startMs ? (Date.now() - startMs) : 0;

    /* ── Compute totals ── */
    var totalScore = 0;
    var totalMax   = 0;
    DATA.stations.forEach(function (st) {
      totalMax   += st.max;
      totalScore += (scores[st.id] != null ? scores[st.id] : 0);
    });
    var totalPct = totalMax > 0 ? Math.round(totalScore / totalMax * 100) : 0;

    /* ── Helpers ── */
    function pickTier(tiers, pct) {
      for (var i = 0; i < tiers.length; i++) {
        if (pct >= tiers[i].min) return tiers[i];
      }
      return tiers[tiers.length - 1];
    }

    function formatTime(ms) {
      if (!ms || ms <= 0) return null;
      var s = Math.floor(ms / 1000);
      var m = Math.floor(s / 60);
      var r = s % 60;
      return m + 'm ' + (r < 10 ? '0' : '') + r + 's';
    }

    /* ── Find weakest station ── */
    var weakestId  = null;
    var weakestPct = 101;
    DATA.stations.forEach(function (st) {
      var s   = scores[st.id] != null ? scores[st.id] : 0;
      var pct = Math.round(s / st.max * 100);
      if (pct < weakestPct) { weakestPct = pct; weakestId = st.id; }
    });
    var weakestStation = DATA.stations.filter(function (st) { return st.id === weakestId; })[0] || null;

    var overallMsg   = pickTier(DATA.overallMessages,  totalPct).text;
    var readinessLbl = pickTier(DATA.readinessLabels,  totalPct).text;
    var totalTime    = formatTime(elapsedMs);
    var avgTime      = totalTime ? formatTime(Math.floor(elapsedMs / DATA.stations.length)) : null;

    /* ── Gauge SVG ── */
    function renderGauge(pct) {
      var r   = 38;
      var circ = 2 * Math.PI * r;
      var offset = circ * (1 - pct / 100);
      var col = pct >= 70 ? '#059669' : pct >= 55 ? '#f59e0b' : '#ef4444';
      return ''
        + '<svg viewBox="0 0 100 100" class="lc-gauge" aria-label="' + pct + '% readiness">'
        +   '<circle cx="50" cy="50" r="' + r + '" fill="none" stroke="#e5e7eb" stroke-width="9"/>'
        +   '<circle cx="50" cy="50" r="' + r + '" fill="none" stroke="' + col + '" stroke-width="9"'
        +     ' stroke-dasharray="' + circ.toFixed(1) + '"'
        +     ' stroke-dashoffset="' + offset.toFixed(1) + '"'
        +     ' stroke-linecap="round"'
        +     ' transform="rotate(-90 50 50)"/>'
        +   '<text x="50" y="47" text-anchor="middle" dominant-baseline="middle"'
        +     ' font-size="19" font-weight="700" fill="#111827">' + pct + '%</text>'
        + '</svg>';
    }

    /* ── Render sections ── */

    function renderHero() {
      return ''
        + '<div class="lc-hero">'
        +   '<div class="lc-hero__icon">🔗</div>'
        +   '<div>'
        +     '<div class="lc-hero__title">Link it complete!</div>'
        +     '<div class="lc-hero__sub">You\'ve connected the context, chain, diagram and judgement. Now you\'re ready to turn it into an exam answer.</div>'
        +   '</div>'
        + '</div>';
    }

    function renderStats() {
      var timeBox;
      if (totalTime) {
        var avgHtml = avgTime ? '<div class="lc-stat-box__label" style="margin-top:var(--sp-3)">AVERAGE TIME PER STEP</div><div class="lc-stat-box__main"><span class="lc-stat-box__big">' + avgTime + '</span></div>' : '';
        timeBox = '<div class="lc-stat-box"><div class="lc-stat-box__label">TIME TAKEN</div><div class="lc-stat-box__main"><span class="lc-stat-box__big">' + totalTime + '</span></div>' + avgHtml + '</div>';
      } else {
        timeBox = '<div class="lc-stat-box lc-stat-box--empty"></div>';
      }
      return ''
        + '<div class="lc-stats">'
        +   '<div class="lc-stat-box">'
        +     '<div class="lc-stat-box__label">YOUR SCORE</div>'
        +     '<div class="lc-stat-box__main"><span class="lc-stat-box__big">' + totalScore + '</span><span class="lc-stat-box__denom">/' + totalMax + '</span></div>'
        +     '<div class="lc-stat-box__pct">' + totalPct + '%</div>'
        +     '<div class="lc-stat-box__msg">' + overallMsg + '</div>'
        +   '</div>'
        +   timeBox
        +   '<div class="lc-stat-box lc-stat-box--gauge">'
        +     '<div class="lc-stat-box__label">READINESS</div>'
        +     renderGauge(totalPct)
        +     '<div class="lc-gauge__label">' + readinessLbl + '</div>'
        +   '</div>'
        + '</div>';
    }

    function renderStationTable() {
      var rowsHtml = DATA.stations.map(function (st, i) {
        var stScore  = scores[st.id] != null ? scores[st.id] : null;
        var stPct    = stScore != null ? Math.round(stScore / st.max * 100) : 0;
        var fbTiers  = DATA.stationFeedback[st.id];
        var fbText   = pickTier(fbTiers, stPct).text;
        return ''
          + '<div class="lc-row">'
          +   '<div class="lc-row__badge" style="background:' + st.color + '">S' + (i + 1) + '</div>'
          +   '<div class="lc-row__name">' + st.label + '</div>'
          +   '<div class="lc-row__score">' + (stScore != null ? stScore + '/' + st.max : '—') + '</div>'
          +   '<div class="lc-row__fb">' + fbText + '</div>'
          + '</div>';
      }).join('');
      return ''
        + '<div class="lc-station-table">'
        +   '<div class="lc-station-table__head">Your Link It steps</div>'
        +   rowsHtml
        + '</div>';
    }

    function renderAdvice() {
      var focusText = weakestId ? DATA.focusInLandIt[weakestId] : '';
      var weakLabel = weakestStation ? weakestStation.label : '';
      var weakChip  = weakLabel
        ? '<div class="lc-weak-chip"><div class="lc-weak-chip__label">Weakest step</div><div class="lc-weak-chip__name">' + weakLabel + '</div></div>'
        : '';
      return ''
        + '<div class="lc-advice">'
        +   '<div class="lc-advice-box">'
        +     '<div class="lc-advice-box__head"><span>📝</span><span>Use this in Land It</span></div>'
        +     '<div class="lc-advice-box__text">' + DATA.useInLandIt + '</div>'
        +   '</div>'
        +   '<div class="lc-advice-box">'
        +     '<div class="lc-advice-box__head"><span>🎯</span><span>Focus in Land It</span></div>'
        +     '<div class="lc-advice-box__text">' + focusText + '</div>'
        +     weakChip
        +   '</div>'
        + '</div>';
    }

    function renderFooter() {
      var weakHref = weakestId
        ? ('link_inflation_' + weakestId + '.html')
        : '#';
      if (weakestId === 'context') weakHref = 'link_inflation_context.html';
      if (weakestId === 'judge')   weakHref = 'link_inflation_judge.html';

      return ''
        + '<div class="link-footer">'
        +   '<a href="' + weakHref + '" class="link-btn link-btn--ghost">Review weak step</a>'
        +   '<a href="' + DATA.nextUrl + '" class="link-btn link-btn--primary">On to Land It →</a>'
        + '</div>';
    }

    function renderRail() {
      var stationsList = DATA.stations.map(function (st, i) {
        return ''
          + '<div class="cards-list__item is-done">'
          +   '<div class="cards-list__num">' + I.check + '</div>'
          +   '<div class="cards-list__body">'
          +     '<div class="cards-list__name">' + st.label + '</div>'
          +   '</div>'
          + '</div>';
      }).join('');

      var completedRow = ''
        + '<div class="cards-list__item is-done">'
        +   '<div class="cards-list__num">' + I.check + '</div>'
        +   '<div class="cards-list__body">'
        +     '<div class="cards-list__name">Link It complete</div>'
        +   '</div>'
        + '</div>';

      var sessionDots = ''
        + '<div class="session-dots">'
        +   '<div class="session-dot is-done">' + I.check + '</div>'
        +   '<div class="session-line is-done"></div>'
        +   '<div class="session-dot is-done">' + I.check + '</div>'
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
        +     '<div class="rail-card__title" style="margin-bottom:var(--sp-3);">Steps</div>'
        +     '<div class="cards-list">' + stationsList + completedRow + '</div>'
        +   '</div>'
        +   '<div class="rail-card">'
        +     '<div class="rail-card__title" style="margin-bottom:var(--sp-2);">Next</div>'
        +     '<div class="lc-next">'
        +       '<div class="lc-next__icon">🎓</div>'
        +       '<div class="lc-next__text">You\'ll now answer a real exam-style question with instant AI feedback on analysis, application, evaluation and judgement.</div>'
        +     '</div>'
        +   '</div>'
        + '</aside>';
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
        +   '<a href="link_inflation_intro.html" class="topbar__back">' + I.arrowLeft + '<span>Back to dashboard</span></a>'
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

    /* ── Main render ── */
    function render() {
      document.getElementById('app-root').innerHTML = ''
        + '<div class="app theme--link">'
        +   renderSidebar()
        +   '<div class="main">'
        +     renderTopbar()
        +     '<div class="page">'
        +       '<div class="link-station">'
        +         '<div class="link-card">'
        +           renderHero()
        +           renderStats()
        +           renderStationTable()
        +           renderAdvice()
        +         '</div>'
        +         renderFooter()
        +       '</div>'
        +       renderRail()
        +     '</div>'
        +   '</div>'
        + '</div>';
    }

    render();
  };
})();
