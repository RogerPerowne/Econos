/* ============================================================
   ECONOS — Link It engine (Chain station)
   Tap-to-place causal chain builder. No drag dependency.
   ============================================================ */

(function () {
  'use strict';

  window.bootLinkChain = function () {
    if (Progress.getLinkUnlocked() < 0) { TopicLoader.go(TopicLoader.routes.link('context')); return; }

    var I    = window.ECONOS_ICONS;
    var DATA = window.ECONOS_LINK_CHAIN;

    /* Shuffle tile tray once at boot so the correct sequence isn't visible */
    function shuffle(arr) {
      for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
      }
    }
    DATA.chains.forEach(function (c) { shuffle(c.tiles); });

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
        +   Shell.renderSidebar({ activeNav: 'My topics' })
        +   '<div id="main-content" class="main" tabindex="-1" role="main">'
        +     Shell.renderTopbar({ backUrl: DATA.backUrl, backLabel: 'Back to dashboard', sessionLabel: DATA.sessionLabel || TopicLoader.sessionLabel('link'), topicTitle: DATA.topic })
        +     '<div class="page">'
        +       '<div class="link-station">' + renderStation() + '</div>'
        +       renderRail()
        +     '</div>'
        +   '</div>'
        + '</div>';
      attachHandlers();
    }

    function renderStation() {
      var C = currentChain();
      return ''
        + '<div class="link-card">'
        +   renderEyebrow()
        +   '<p class="link-card__lede">' + DATA.instruction + '</p>'
        +   renderScenario(C.scenario)
        +   '<div class="chain-layout' + (state.checked ? ' is-checked' : '') + '">'
        +     (state.checked ? '' : '<div class="chain-layout__tiles">' + renderAvailableTiles(C) + '</div>')
        +     '<div class="chain-layout__chain">' + renderChain(C) + '</div>'
        +   '</div>'
        +   renderFeedback(C)
        + '</div>'
        + renderFooter();
    }

    function renderEyebrow() {
      var pct = Math.round(state.placements.length / 3 * 100);
      var maxScore = DATA.chains.length * 3;
      return ''
        + '<div class="link-card__eyebrow">'
        +   '<span class="link-card__eyebrow-dot"></span>'
        +   '<span>' + DATA.eyebrow + '</span>'
        +   '<span class="chain-score-badge">SCORE ' + state.score + ' / ' + maxScore + '</span>'
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

          var slotHtml = '<div class="chain-slot chain-slot--filled' + statusCls + '">'
            + '<div class="chain-slot__num">' + slotNum + '</div>'
            + '<div class="chain-slot__icon">' + tile.icon + '</div>'
            + '<div class="chain-slot__text">' + tile.text + '</div>'
            + removeBtn
            + markHtml
            + '</div>';

          if (state.checked) {
            var explainEntry = C.explain.filter(function (e) { return e.pos === i; })[0];
            var explainText  = explainEntry ? explainEntry.text : '';
            var correctTile  = C.tiles.filter(function (t) { return t.pos === i; })[0];
            var idealLabel, idealBody;
            if (correct) {
              idealLabel = 'Ideal reasoning';
              idealBody  = explainText;
            } else {
              idealLabel = 'Not the strongest next link';
              idealBody  = (correctTile
                ? '<div class="chain-ideal__correction">→ ' + correctTile.icon + ' ' + correctTile.text + '</div>'
                : '')
                + explainText;
            }
            slotHtml += '<div class="chain-ideal chain-ideal--' + (correct ? 'correct' : 'wrong') + '">'
              + '<div class="chain-ideal__label">' + idealLabel + '</div>'
              + '<div class="chain-ideal__text">' + idealBody + '</div>'
              + '</div>';
          }

          slots.push(slotHtml);
        }
      }

      /* Interleave with arrows */
      var inner = '';
      for (var j = 0; j < slots.length; j++) {
        inner += slots[j];
        if (j < slots.length - 1) {
          inner += '<div class="chain-arrow"><span class="chain-arrow__label">leads to</span><span>↓</span></div>';
        }
      }

      return ''
        + '<div class="chain-available__label">Build your chain</div>'
        + '<div class="chain-slots">' + inner + '</div>';
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
        +   '<div class="chain-available__label">Available tiles</div>'
        +   '<div class="chain-tiles">' + tilesHtml + '</div>'
        + '</div>';
    }

    function renderFeedback(C) {
      if (!state.checked) return '';

      return ''
        + '<div class="chain-feedback">'
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
        primary = '<button type="button" class="link-btn link-btn--primary" id="next-station">Next: Diagram →</button>';
      }

      var chainCounter = 'Chain ' + (state.chainIdx + 1) + ' of ' + DATA.chains.length;

      return ''
        + '<div class="link-footer">'
        +   '<a href="' + DATA.backUrl + '" class="link-btn link-btn--ghost">← Back</a>'
        +   '<div class="link-footer__counter">Step ' + stationNum + ' of ' + stationTot + ' · ' + chainCounter + '</div>'
        +   primary
        + '</div>';
    }

    function renderRail() {
      var unlockedIdx = Progress.getLinkUnlocked();
      var stationsList = DATA.stations.map(function (st, i) {
        var isCurrent = i === DATA.currentStationIdx;
        var isDone    = i <= unlockedIdx && !isCurrent;
        var isLocked  = i > unlockedIdx && !isCurrent;
        var status    = isDone ? 'done' : (isCurrent ? 'current' : '');
        var tag       = isLocked ? 'div' : 'a';
        var attrs     = isLocked ? '' : ' href="' + st.href + '"';
        var lockChip  = isLocked ? '<span class="cards-list__chip cards-list__chip--locked">Locked</span>' : '';
        return ''
          + '<' + tag + ' class="cards-list__item' + (status ? ' is-' + status : '') + (!isLocked ? ' is-linked' : '') + '"' + attrs + '>'
          +   '<div class="cards-list__num">' + (isDone ? I.check : (i + 1)) + '</div>'
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
        + '<div class="right-rail">' + Shell.renderStages()
        +   '<div class="rail-card">'
        +     '<div class="rail-card__title">Topic progress</div>'
        +     '<div class="rail-card__sub">Step 2 of 3: Link</div>'
        +     sessionDots
        +   '</div>'
        +   '<div class="rail-card">'
        +     '<div class="rail-card__title" style="margin-bottom: var(--sp-3);">Steps</div>'
        +     '<div class="cards-list">' + stationsList + '</div>'
        +   '</div>'
        +   '<div class="rail-card">'
        +     '<div class="rail-card__title" style="margin-bottom: var(--sp-3);">What good looks like</div>'
        +     '<div class="link-rail__wgll">' + wgllHtml + '</div>'
        +   '</div>'
        + '</div>';
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
        try {
          var stored = JSON.parse(localStorage.getItem('econos_link_scores') || '{}');
          stored.chain = state.score;
          localStorage.setItem('econos_link_scores', JSON.stringify(stored));
          var u = Progress.getLinkUnlocked();
          Progress.setLinkUnlocked(Math.max(u, 1));
        } catch (e) {}
        TopicLoader.go(DATA.nextUrl || TopicLoader.routes.link('intro'));
      });
    }

    render();
  };
})();
