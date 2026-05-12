/* ============================================================
   ECONOS — Link It engine (Context station)
   Tap-to-select then tap-to-place. No drag dependency.
   ============================================================ */

(function () {
  'use strict';

  window.bootLinkContext = function () {
    var I    = window.ECONOS_ICONS;
    var DATA = window.ECONOS_LINK_STATION;
    var S    = DATA.station;

    var state = {
      placements: {},   // evidenceId -> bucketId
      selected:   null, // currently-selected evidenceId
      checked:    false
    };

    /* -------- render -------- */

    function render() {
      var root = document.getElementById('app-root');
      root.innerHTML = ''
        + '<div class="app">'
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
        +   '<a href="' + DATA.backUrl + '" class="topbar__back">' + I.arrowLeft + '</a>'
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
      return ''
        + '<div class="link-card">'
        +   '<div class="link-card__eyebrow"><span class="link-card__eyebrow-dot"></span>' + S.eyebrow + '</div>'
        +   '<h1 class="link-card__title">' + S.question + '</h1>'
        +   '<p class="link-card__lede">' + S.instruction + '</p>'
        +   renderExtract()
        +   (state.selected !== null && !state.checked ? renderSelectedBanner() : '')
        +   renderBuckets()
        +   renderExtras()
        +   (state.checked ? renderResult() : renderInfoBanner())
        + '</div>'
        + renderFooter();
    }

    function renderSelectedBanner() {
      var ev = S.evidence[state.selected];
      return ''
        + '<div class="link-selected">'
        +   '<span class="link-selected__label">Selected:</span>'
        +   '<span class="link-selected__chip">' + ev.text + '</span>'
        +   '<span class="link-selected__hint">Now tap a bucket below ↓</span>'
        +   '<button type="button" class="link-selected__cancel" id="cancel-selection">Cancel</button>'
        + '</div>';
    }

    function renderExtract() {
      var html = S.extract.map(function (para) {
        return '<p>' + para.replace(/\[\[([^\|]+)\|([^\]]+)\]\]/g, function (m, id, text) {
          var placed = state.placements[id] !== undefined;
          var sel    = state.selected === id;
          var cls    = 'mark-btn'
                     + (placed ? ' is-placed' : '')
                     + (sel    ? ' is-selected' : '');
          return '<button type="button" class="' + cls + '" data-evidence="' + id + '"' + (placed ? ' aria-pressed="true"' : '') + '>' + text + '</button>';
        }) + '</p>';
      }).join('');
      return '<div class="link-extract">' + html + '</div>';
    }

    function renderBuckets() {
      var hasSelection = state.selected !== null && !state.checked;
      var html = S.buckets.map(function (b) {
        var placedIds = Object.keys(state.placements).filter(function (eid) {
          return state.placements[eid] === b.id;
        });
        var chips = placedIds.map(function (eid) {
          var ev = S.evidence[eid];
          var statusCls = '';
          var marker    = '<span class="link-chip__x" aria-label="remove">×</span>';
          if (state.checked) {
            var ok    = S.correct[eid] === b.id;
            statusCls = ok ? ' is-correct' : ' is-wrong';
            marker    = '<span class="link-chip__icon">' + (ok ? '✓' : '✕') + '</span>';
          }
          return '<button type="button" class="link-chip' + statusCls + '" data-remove="' + eid + '">'
               +   '<span class="link-chip__text">' + ev.text + '</span>'
               +   marker
               + '</button>';
        }).join('');

        var emptyState = placedIds.length === 0
          ? '<div class="link-bucket__empty">' + (hasSelection ? 'Tap here to place' : 'No evidence yet') + '</div>'
          : '';

        return ''
          + '<button type="button" class="link-bucket link-bucket--' + b.tone + (hasSelection ? ' is-ready' : '') + '" data-bucket="' + b.id + '">'
          +   '<div class="link-bucket__head">'
          +     '<span class="link-bucket__icon">' + b.icon + '</span>'
          +     '<span class="link-bucket__label">' + b.label + '</span>'
          +     '<span class="link-bucket__count">' + placedIds.length + '</span>'
          +   '</div>'
          +   '<div class="link-bucket__chips">' + chips + '</div>'
          +   emptyState
          + '</button>';
      }).join('');
      return '<div class="link-buckets">' + html + '</div>';
    }

    function renderExtras() {
      var extras = Object.keys(S.evidence).filter(function (eid) { return S.evidence[eid].extra; });
      var chips  = extras.map(function (eid) {
        var ev     = S.evidence[eid];
        var placed = state.placements[eid] !== undefined;
        var sel    = state.selected === eid;
        var cls    = 'extra-chip'
                   + (placed ? ' is-placed' : '')
                   + (sel    ? ' is-selected' : '');
        return '<button type="button" class="' + cls + '" data-evidence="' + eid + '"' + (placed ? ' disabled' : '') + '>'
             +   '<span class="extra-chip__plus">+</span>'
             +   ev.text
             + '</button>';
      }).join('');
      return ''
        + '<div class="link-extras">'
        +   '<div class="link-extras__label">Extra evidence (not in the extract)</div>'
        +   '<div class="link-extras__chips">' + chips + '</div>'
        + '</div>';
    }

    function renderInfoBanner() {
      return ''
        + '<div class="link-info">'
        +   '<span class="link-info__icon">ⓘ</span>'
        +   '<span>' + S.bucketCue + '</span>'
        + '</div>';
    }

    function renderResult() {
      var nCorrect = 0;
      var nTotal   = Object.keys(state.placements).length;
      Object.keys(state.placements).forEach(function (eid) {
        if (S.correct[eid] === state.placements[eid]) nCorrect++;
      });

      var rowsHtml = Object.keys(S.evidence).map(function (eid) {
        var ev          = S.evidence[eid];
        var placedIn    = state.placements[eid];
        var rightBucket = S.buckets.filter(function (b) { return b.id === S.correct[eid]; })[0];
        var ok          = placedIn === S.correct[eid];

        var lead;
        if (placedIn === undefined) {
          lead = '<span class="link-fb__mark link-fb__mark--miss">!</span>';
        } else if (ok) {
          lead = '<span class="link-fb__mark link-fb__mark--ok">✓</span>';
        } else {
          lead = '<span class="link-fb__mark link-fb__mark--no">✕</span>';
        }

        var trail = '';
        if (placedIn === undefined) {
          trail = '<span class="link-fb__right">→ ' + rightBucket.label + '</span>';
        } else if (!ok) {
          trail = '<span class="link-fb__right">→ ' + rightBucket.label + '</span>';
        }

        return ''
          + '<div class="link-fb__row">'
          +   '<div class="link-fb__head">'
          +     lead
          +     '<span class="link-fb__evidence">' + ev.text + '</span>'
          +     trail
          +   '</div>'
          +   '<div class="link-fb__text">' + S.explain[eid] + '</div>'
          + '</div>';
      }).join('');

      var pct      = nTotal ? Math.round(nCorrect / Object.keys(S.evidence).length * 100) : 0;
      var verdict;
      if (pct >= 80)      verdict = 'Strong application — you let the context change the conclusion.';
      else if (pct >= 50) verdict = 'Some good reads — sharpen which details actually shift the judgement.';
      else                verdict = 'Re-read the extract: not every economic-sounding phrase changes the conclusion.';

      return ''
        + '<div class="link-result">'
        +   '<div class="link-result__head">'
        +     '<div class="link-result__score"><strong>' + nCorrect + '</strong> of ' + Object.keys(S.evidence).length + ' correctly placed</div>'
        +     '<div class="link-result__verdict">' + verdict + '</div>'
        +   '</div>'
        +   '<div class="link-fb">' + rowsHtml + '</div>'
        +   '<div class="link-bridge">'
        +     '<div class="link-bridge__label">In a 25-mark essay, this becomes…</div>'
        +     '<div class="link-bridge__text">' + S.examBridge + '</div>'
        +   '</div>'
        + '</div>';
    }

    function renderFooter() {
      var nPlaced     = Object.keys(state.placements).length;
      var nTotal      = Object.keys(S.evidence).length;
      var canCheck    = nPlaced === nTotal && !state.checked;
      var idx         = DATA.currentStationIdx + 1;
      var tot         = DATA.stations.length;
      var primary;
      if (state.checked) {
        primary = '<button type="button" class="link-btn link-btn--primary" id="next-station">Next station →</button>';
      } else {
        primary = '<button type="button" class="link-btn link-btn--primary"'
                + (canCheck ? '' : ' disabled')
                + ' id="check-btn">Check my analysis →</button>';
      }
      return ''
        + '<div class="link-footer">'
        +   '<a href="' + DATA.backUrl + '" class="link-btn link-btn--ghost">← Back</a>'
        +   '<div class="link-footer__counter">Station ' + idx + ' of ' + tot + ' · ' + nPlaced + '/' + nTotal + ' placed</div>'
        +   primary
        + '</div>';
    }

    function renderRail() {
      var stationsHtml = DATA.stations.map(function (st, i) {
        var isCurrent = i === DATA.currentStationIdx;
        var done      = i < DATA.currentStationIdx;
        var cls       = 'link-rail__station' + (isCurrent ? ' is-current' : '') + (done ? ' is-done' : '');
        var num       = done ? I.check : (i + 1);
        return ''
          + '<div class="' + cls + '">'
          +   '<div class="link-rail__num">' + num + '</div>'
          +   '<div class="link-rail__body">'
          +     '<div class="link-rail__name">' + st.label + '</div>'
          +     (isCurrent ? '<span class="link-rail__chip">Current</span>' : '')
          +   '</div>'
          + '</div>';
      }).join('');

      var wgllHtml = S.whatGoodLooksLike.map(function (p) {
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
        +     '<div class="rail-card__title" style="margin-bottom: var(--sp-3);">Link it stations</div>'
        +     '<div class="link-rail__stations">' + stationsHtml + '</div>'
        +   '</div>'
        +   '<div class="rail-card">'
        +     '<div class="rail-card__title" style="margin-bottom: var(--sp-3);">What good looks like</div>'
        +     '<div class="link-rail__wgll">' + wgllHtml + '</div>'
        +   '</div>'
        + '</aside>';
    }

    /* -------- handlers -------- */

    function attachHandlers() {
      // evidence (marks in extract OR extras row)
      document.querySelectorAll('[data-evidence]').forEach(function (el) {
        el.addEventListener('click', function (e) {
          e.stopPropagation();
          if (state.checked) return;
          var id = el.getAttribute('data-evidence');
          if (state.placements[id] !== undefined) return;
          state.selected = (state.selected === id) ? null : id;
          render();
        });
      });

      // buckets (whole bucket is the tap target)
      document.querySelectorAll('[data-bucket]').forEach(function (el) {
        el.addEventListener('click', function (e) {
          if (state.checked) return;
          if (state.selected === null) return;
          var bid = el.getAttribute('data-bucket');
          state.placements[state.selected] = bid;
          state.selected = null;
          render();
        });
      });

      // remove chip
      document.querySelectorAll('[data-remove]').forEach(function (el) {
        el.addEventListener('click', function (e) {
          e.stopPropagation();
          if (state.checked) return;
          var id = el.getAttribute('data-remove');
          delete state.placements[id];
          render();
        });
      });

      // cancel selection
      var cancel = document.getElementById('cancel-selection');
      if (cancel) cancel.addEventListener('click', function () {
        state.selected = null;
        render();
      });

      // check
      var checkBtn = document.getElementById('check-btn');
      if (checkBtn) checkBtn.addEventListener('click', function () {
        state.checked = true;
        render();
        var bridge = document.querySelector('.link-bridge');
        if (bridge) bridge.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });

      // next (stub)
      var nextBtn = document.getElementById('next-station');
      if (nextBtn) nextBtn.addEventListener('click', function () {
        alert('Build the Chain station coming next!');
      });
    }

    render();
  };
})();
