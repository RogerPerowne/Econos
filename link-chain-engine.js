/* ============================================================
   ECONOS — Link It engine (Chain station)
   Tap-to-place causal chain builder. No drag dependency.
   ============================================================ */

(function () {
  'use strict';

  window.bootLinkChain = function () {
    var I    = window.ECONOS_ICONS;
    var DATA = window.ECONOS_LINK_CHAIN;

    var state = {
      chainIdx:   0,
      placements: [],   // array of tile IDs placed in slots (length 0–3)
      checked:    false,
      score:      0     // total correct placements accumulated across all chains
    };

    /* -------- helpers -------- */

    function currentChain() {
      return DATA.chains[state.chainIdx];
    }

    function tileById(C, id) {
      return C.tiles.filter(function (t) { return t.id === id; })[0] || null;
    }

    function isCorrect(C, slotIdx) {
      var id = state.placements[slotIdx];
      if (!id) return false;
      var tile = tileById(C, id);
      return tile && tile.pos === slotIdx;
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
      var C = currentChain();
      return ''
        + '<div class="link-card">'
        +   renderEyebrow()
        +   '<p class="link-card__lede">' + DATA.instruction + '</p>'
        +   renderScenario(C.scenario)
        +   renderChain(C)
        +   renderAvailableTiles(C)
        +   renderFeedback(C)
        + '</div>'
        + renderFooter();
    }

    function renderEyebrow() {
      var pct = Math.round(state.placements.length / 3 * 100);
      return ''
        + '<div class="link-card__eyebrow">'
        +   '<span class="link-card__eyebrow-dot"></span>'
        +   '<span>' + DATA.eyebrow + '</span>'
        +   '<span class="chain-score-badge">SCORE ' + state.score + ' / 9</span>'
        + '</div>'
        + '<div class="chain-progress">'
        +   '<div class="chain-progress__fill" style="width:' + pct + '%"></div>'
        + '</div>';
    }

    function renderScenario(sc) {
      return ''
        + '<div class="chain-scenario">'
        +   '<div class="chain-scenario__icon">' + sc.icon + '</div>'
        +   '<div class="chain-scenario__body">'
        +     '<div class="chain-scenario__label">' + sc.label + '</div>'
        +     '<div class="chain-scenario__text">' + sc.text + '</div>'
        +   '</div>'
        + '</div>';
    }

    function renderChain(C) {
      var slots = [];

      /* Slot 1 — anchor (locked, always shown) */
      slots.push(
        '<div class="chain-slot chain-slot--anchor">'
        + '<div class="chain-slot__num">1</div>'
        + '<div class="chain-slot__text">' + C.anchor + '</div>'
        + '</div>'
      );

      /* Slots 2–4 (positions 0–2 in placements) */
      for (var i = 0; i < 3; i++) {
        var slotNum = i + 2;
        var placed  = state.placements[i];

        if (!placed) {
          slots.push(
            '<div class="chain-slot chain-slot--empty">'
            + '<div class="chain-slot__num">' + slotNum + '</div>'
            + '<div class="chain-slot__placeholder">Tap a tile below ↓</div>'
            + '</div>'
          );
        } else {
          var tile    = tileById(C, placed);
          var correct = isCorrect(C, i);
          var statusCls = state.checked
            ? (correct ? ' is-correct' : ' is-wrong')
            : '';
          var markHtml = state.checked
            ? '<span class="chain-slot__mark">' + (correct ? '✓' : '✕') + '</span>'
            : '';
          var removeBtn = !state.checked
            ? '<button class="chain-slot__remove" data-remove-slot="' + i + '" aria-label="Remove tile">×</button>'
            : '';

          slots.push(
            '<div class="chain-slot chain-slot--filled' + statusCls + '">'
            + '<div class="chain-slot__num">' + slotNum + '</div>'
            + '<div class="chain-slot__icon">' + tile.icon + '</div>'
            + '<div class="chain-slot__text">' + tile.text + '</div>'
            + removeBtn
            + markHtml
            + '</div>'
          );
        }
      }

      /* Interleave with arrows */
      var inner = '';
      for (var j = 0; j < slots.length; j++) {
        inner += slots[j];
        if (j < slots.length - 1) {
          inner += '<div class="chain-arrow">→</div>';
        }
      }

      return '<div class="chain-slots">' + inner + '</div>';
    }

    function renderAvailableTiles(C) {
      if (state.checked) return '';

      /* Build set of already-placed tile IDs */
      var placedSet = {};
      state.placements.forEach(function (id) { placedSet[id] = true; });

      var tilesHtml = C.tiles.map(function (t) {
        if (placedSet[t.id]) return '';
        return ''
          + '<button type="button" class="chain-tile" data-tile="' + t.id + '">'
          +   '<span class="chain-tile__icon">' + t.icon + '</span>'
          +   '<span class="chain-tile__text">' + t.text + '</span>'
          + '</button>';
      }).join('');

      return ''
        + '<div class="chain-available">'
        +   '<div class="chain-available__heading">Available tiles</div>'
        +   '<div class="chain-available__grid">' + tilesHtml + '</div>'
        + '</div>';
    }

    function renderFeedback(C) {
      if (!state.checked) return '';

      var rowsHtml = C.explain.map(function (ex) {
        var correct = isCorrect(C, ex.pos);
        var placed  = state.placements[ex.pos];
        var tile    = placed ? tileById(C, placed) : null;
        var correct_tile = C.tiles.filter(function (t) { return t.pos === ex.pos; })[0];

        var markCls  = correct ? 'chain-fb__mark--ok' : 'chain-fb__mark--no';
        var markGlyph = correct ? '✓' : '✕';
        var wrongNote = (!correct && tile && correct_tile)
          ? '<span class="chain-fb__correction">→ ' + correct_tile.icon + ' ' + correct_tile.text + '</span>'
          : '';

        return ''
          + '<div class="chain-fb__row">'
          +   '<div class="chain-fb__head">'
          +     '<span class="chain-fb__mark ' + markCls + '">' + markGlyph + '</span>'
          +     '<span class="chain-fb__step">Step ' + (ex.pos + 2) + '</span>'
          +     (tile ? '<span class="chain-fb__placed">' + tile.icon + ' ' + tile.text + '</span>' : '')
          +     wrongNote
          +   '</div>'
          +   '<div class="chain-fb__text">' + ex.text + '</div>'
          + '</div>';
      }).join('');

      return ''
        + '<div class="chain-feedback">'
        +   '<div class="chain-fb">' + rowsHtml + '</div>'
        +   '<div class="link-bridge">'
        +     '<div class="link-bridge__label">In an exam answer, this becomes…</div>'
        +     '<div class="link-bridge__text">' + C.examBridge + '</div>'
        +   '</div>'
        + '</div>';
    }

    function renderFooter() {
      var stationNum  = DATA.currentStationIdx + 1;
      var stationTot  = DATA.stations.length;
      var allFilled   = state.placements.length === 3;
      var isLastChain = state.chainIdx === DATA.chains.length - 1;

      var primary;
      if (!state.checked) {
        primary = '<button type="button" class="link-btn link-btn--primary"'
                + (allFilled ? '' : ' disabled')
                + ' id="check-btn">Check my chain →</button>';
      } else if (!isLastChain) {
        primary = '<button type="button" class="link-btn link-btn--primary" id="next-chain">Next scenario →</button>';
      } else {
        primary = '<button type="button" class="link-btn link-btn--primary" id="next-station">Try the challenge →</button>';
      }

      var chainCounter = 'Chain ' + (state.chainIdx + 1) + ' of ' + DATA.chains.length;

      return ''
        + '<div class="link-footer">'
        +   '<a href="' + DATA.backUrl + '" class="link-btn link-btn--ghost">← Back</a>'
        +   '<div class="link-footer__counter">Station ' + stationNum + ' of ' + stationTot + ' · ' + chainCounter + '</div>'
        +   primary
        + '</div>';
    }

    function renderRail() {
      var stationsList = DATA.stations.map(function (st, i) {
        var isCurrent = i === DATA.currentStationIdx;
        var done      = i < DATA.currentStationIdx;
        var status    = done ? 'done' : (isCurrent ? 'current' : '');
        var num       = done ? I.check : (i + 1);
        var tag       = st.href ? 'a' : 'div';
        var attrs     = st.href ? ' href="' + st.href + '"' : '';
        var lockChip  = (!st.href && !isCurrent) ? '<span class="cards-list__chip cards-list__chip--locked">Locked</span>' : '';
        return ''
          + '<' + tag + ' class="cards-list__item' + (status ? ' is-' + status : '') + (st.href ? ' is-linked' : '') + '"' + attrs + '>'
          +   '<div class="cards-list__num">' + num + '</div>'
          +   '<div class="cards-list__body">'
          +     '<div class="cards-list__name">' + st.label + '</div>'
          +     (isCurrent ? '<span class="cards-list__chip">Current</span>' : lockChip)
          +   '</div>'
          + '</' + tag + '>';
      }).join('');

      var wgllItems = [
        { icon: '🔗', text: 'Each step must cause the next'        },
        { icon: '📐', text: 'Use SRAS / AD diagram language'       },
        { icon: '🎯', text: 'Analysis: Build a clear chain of economic reasoning.' }
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

    /* -------- handlers -------- */

    function attachHandlers() {
      var C = currentChain();

      /* Tap an available tile → place in next empty slot */
      document.querySelectorAll('[data-tile]').forEach(function (el) {
        el.addEventListener('click', function (e) {
          e.stopPropagation();
          if (state.checked) return;
          if (state.placements.length >= 3) return;
          var id = el.getAttribute('data-tile');
          state.placements.push(id);
          render();
        });
      });

      /* Tap × on a filled slot → return tile to pool */
      document.querySelectorAll('[data-remove-slot]').forEach(function (el) {
        el.addEventListener('click', function (e) {
          e.stopPropagation();
          if (state.checked) return;
          var idx = parseInt(el.getAttribute('data-remove-slot'), 10);
          state.placements.splice(idx, 1);
          render();
        });
      });

      /* Check button */
      var checkBtn = document.getElementById('check-btn');
      if (checkBtn) checkBtn.addEventListener('click', function () {
        state.checked = true;
        /* Count correct placements and add to running score */
        var correct = 0;
        for (var i = 0; i < 3; i++) {
          if (isCorrect(C, i)) correct++;
        }
        state.score += correct;
        render();
        var bridge = document.querySelector('.link-bridge');
        if (bridge) bridge.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });

      /* Next scenario */
      var nextChainBtn = document.getElementById('next-chain');
      if (nextChainBtn) nextChainBtn.addEventListener('click', function () {
        if (state.chainIdx < DATA.chains.length - 1) {
          state.chainIdx++;
          state.placements = [];
          state.checked    = false;
          render();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });

      /* Next station → open response challenge */
      var nextStationBtn = document.getElementById('next-station');
      if (nextStationBtn) nextStationBtn.addEventListener('click', function () {
        window.location.href = 'link_inflation_chain_open.html';
      });
    }

    render();
  };
})();
