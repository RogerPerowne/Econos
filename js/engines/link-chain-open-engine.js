/* ============================================================
   ECONOS — Link It engine (Chain station — Open Response)
   Student writes each step; model answers revealed for self-mark.
   ============================================================ */

(function () {
  'use strict';

  window.bootLinkChainOpen = function () {
    var I    = window.ECONOS_ICONS;
    var DATA = window.ECONOS_LINK_CHAIN;

    var state = {
      chainIdx:   0,
      inputs:     ['', '', ''],  // student text for slots 2-4
      checked:    false,
      selfMarks:  [null, null, null],  // true / false / null after reveal
      score:      0,    // self-marked correct steps accumulated
      lastFocused: -1   // slot index last focused (for vocab chip insert)
    };

    function currentChain() { return DATA.chains[state.chainIdx]; }

    /* -------- render -------- */

    function render() {
      var root = document.getElementById('app-root');
      root.innerHTML = ''
        + '<div class="app theme--link">'
        +   Shell.renderSidebar({ activeNav: 'My topics' })
        +   '<div id="main-content" class="main" tabindex="-1" role="main">'
        +     Shell.renderTopbar({ backUrl: DATA.backUrl, backLabel: 'Back to dashboard', sessionLabel: DATA.sessionLabel, topicTitle: DATA.topic })
        +     '<div class="page">'
        +       '<div class="link-station">' + renderStation() + '</div>'
        +       renderRail()
        +     '</div>'
        +   '</div>'
        + '</div>';
      restoreInputValues();
      attachHandlers();
    }

    function renderStation() {
      var C       = currentChain();
      var maxScore = DATA.chains.length * 3;
      var filled  = state.inputs.filter(function (v) { return v.trim().length > 0; }).length;
      var pct     = state.checked ? 100 : Math.round(filled / 3 * 100);

      return ''
        + '<div class="link-card">'
        +   '<div class="chain-eyebrow-row">'
        +     '<div class="link-card__eyebrow"><span class="link-card__eyebrow-dot"></span>Build the Chain — Open Response</div>'
        +     '<div class="chain-score">'
        +       '<div class="chain-score__label">SCORE</div>'
        +       '<div class="chain-score__val">' + state.score + ' / ' + maxScore + '</div>'
        +     '</div>'
        +   '</div>'
        +   '<div class="chain-progress-bar"><div class="chain-progress-bar__fill" style="width:' + pct + '%"></div></div>'
        +   '<h1 class="link-card__title">Build a full chain of reasoning using the context below.</h1>'
        +   '<p class="link-card__lede">Write one clear step in each box. Explain how the shock leads through the economy to affect inflation.</p>'
        +   renderScenario(C)
        +   '<div class="chain-station-label">Chain ' + (state.chainIdx + 1) + ' of ' + DATA.chains.length + '</div>'
        +   '<div class="chain-section-title">Your chain</div>'
        +   renderOpenChain(C)
        +   renderVocabRow(C)
        +   '<div class="link-info"><span class="link-info__icon">ⓘ</span><span>Aim for clear cause-and-effect links. Avoid jumping straight to the final outcome.</span></div>'
        + '</div>'
        + renderFooter();
    }

    function renderScenario(C) {
      var sc = C.scenario;
      return ''
        + '<div class="chain-scenario">'
        +   '<span class="chain-scenario__icon">' + sc.icon + '</span>'
        +   '<div>'
        +     '<div class="chain-scenario__label">' + sc.label + '</div>'
        +     '<div class="chain-scenario__text">' + sc.text + '</div>'
        +   '</div>'
        + '</div>';
    }

    function renderOpenChain(C) {
      var slots = [];

      /* Slot 1 — anchor (locked) */
      slots.push(
        '<div class="chain-slot chain-slot--anchor">'
        + '<div class="chain-slot__num">1</div>'
        + '<div class="chain-slot__text">' + C.anchor + '</div>'
        + '</div>'
      );

      /* Slots 2–4 — open text inputs */
      for (var i = 0; i < 3; i++) {
        var slotNum  = i + 2;
        var val      = state.inputs[i];
        var mark     = state.selfMarks[i];
        var prompt   = C.prompts[i];
        var model    = C.modelAnswers[i];

        var slotCls = 'chain-slot chain-open-slot'
          + (state.checked && mark === true  ? ' is-correct' : '')
          + (state.checked && mark === false ? ' is-wrong'   : '')
          + (state.checked && mark === null  ? ' is-pending' : '');

        var numCls = state.checked
          ? (mark === true ? ' is-correct' : mark === false ? ' is-wrong' : '')
          : '';

        var inputHtml = state.checked
          ? '<div class="chain-open-slot__answer">' + (val.trim() || '<em class="chain-open-slot__empty-note">No answer given</em>') + '</div>'
          : '<textarea class="chain-open-slot__textarea" data-slot-input="' + i + '" placeholder="' + prompt + '" rows="2"></textarea>';

        var modelHtml = state.checked
          ? ''
          + '<div class="chain-open-slot__model">'
          +   '<div class="chain-open-slot__model-label">Model answer</div>'
          +   '<div class="chain-open-slot__model-text">' + model + '</div>'
          + '</div>'
          : '';

        var selfMarkHtml = (state.checked && mark === null)
          ? ''
          + '<div class="chain-open-slot__selfmark">'
          +   '<span class="chain-open-slot__selfmark-label">How did you do?</span>'
          +   '<button type="button" class="chain-selfmark-btn chain-selfmark-btn--ok"  data-selfmark="' + i + '" data-val="ok">✓ Got it</button>'
          +   '<button type="button" class="chain-selfmark-btn chain-selfmark-btn--no"  data-selfmark="' + i + '" data-val="no">✕ Not quite</button>'
          + '</div>'
          : '';

        var markBadge = (state.checked && mark !== null)
          ? '<span class="chain-slot__mark">' + (mark ? '✓' : '✕') + '</span>'
          : '';

        slots.push(''
          + '<div class="' + slotCls + '">'
          +   '<div class="chain-slot__num' + numCls + '">' + slotNum + '</div>'
          +   '<div class="chain-open-slot__body">'
          +     inputHtml
          +     modelHtml
          +     selfMarkHtml
          +   '</div>'
          +   markBadge
          + '</div>'
        );
      }

      /* Interleave with arrows */
      var inner = '';
      for (var j = 0; j < slots.length; j++) {
        inner += slots[j];
        if (j < slots.length - 1) inner += '<div class="chain-arrow">→</div>';
      }

      /* Exam bridge — shown after all self-marks done */
      var allMarked  = state.selfMarks.every(function (m) { return m !== null; });
      var bridgeHtml = (state.checked && allMarked)
        ? '<div class="link-bridge" style="margin-top:var(--sp-5);">'
        +   '<div class="link-bridge__label">Exam-ready version</div>'
        +   '<div class="link-bridge__text">' + currentChain().examBridge + '</div>'
        + '</div>'
        : (state.checked
          ? '<div class="chain-open-slot__mark-prompt">Mark each step above to see the exam-ready answer ↑</div>'
          : '');

      return '<div class="chain-slots chain-slots--open">' + inner + '</div>' + bridgeHtml;
    }

    function renderVocabRow(C) {
      if (state.checked) return '';
      var chips = C.vocab.map(function (term) {
        return '<button type="button" class="chain-vocab-chip" data-vocab="' + term + '">' + term + '</button>';
      }).join('');
      return ''
        + '<div class="chain-vocab">'
        +   '<span class="chain-vocab__label">Useful terms</span>'
        +   '<div class="chain-vocab__chips">' + chips + '</div>'
        + '</div>';
    }

    function renderFooter() {
      var stationNum  = DATA.currentStationIdx + 1;
      var stationTot  = DATA.stations.length;
      var allFilled   = state.inputs.every(function (v) { return v.trim().length > 0; });
      var allMarked   = state.checked && state.selfMarks.every(function (m) { return m !== null; });
      var isLastChain = state.chainIdx === DATA.chains.length - 1;

      var primary;
      if (!state.checked) {
        primary = '<button type="button" class="link-btn link-btn--primary"'
                + (allFilled ? '' : ' disabled')
                + ' id="check-btn">Check my chain →</button>';
      } else if (!allMarked) {
        primary = '<button type="button" class="link-btn link-btn--primary" disabled>Mark each step to continue</button>';
      } else if (!isLastChain) {
        primary = '<button type="button" class="link-btn link-btn--primary" id="next-chain">Next scenario →</button>';
      } else {
        primary = '<button type="button" class="link-btn link-btn--primary" id="next-station">Next station →</button>';
      }

      return ''
        + '<div class="link-footer">'
        +   '<a href="' + TopicLoader.buildUrl('link_chain.html') + '" class="link-btn link-btn--ghost">← Easy mode</a>'
        +   '<div class="link-footer__counter">Step ' + stationNum + ' of ' + stationTot + ' · Chain ' + (state.chainIdx + 1) + ' of ' + DATA.chains.length + '</div>'
        +   primary
        + '</div>';
    }

    function renderRail() {
      var stationsList = DATA.stations.map(function (st, i) {
        var isCurrent = i === DATA.currentStationIdx;
        var status    = isCurrent ? 'current' : '';
        var num       = i + 1;
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
        +     '<div class="rail-card__title" style="margin-bottom:var(--sp-3);">Steps</div>'
        +     '<div class="cards-list">' + stationsList + '</div>'
        +   '</div>'
        +   '<div class="rail-card">'
        +     '<div class="rail-card__title" style="margin-bottom:var(--sp-3);">Skill focus</div>'
        +     '<div class="link-rail__wgll">'
        +       '<div class="link-rail__wgll-item"><span class="link-rail__wgll-icon">✏️</span><span>Write in full sentences</span></div>'
        +       '<div class="link-rail__wgll-item"><span class="link-rail__wgll-icon">🔗</span><span>Each step causes the next</span></div>'
        +       '<div class="link-rail__wgll-item"><span class="link-rail__wgll-icon">📐</span><span>Use diagram language (SRAS, AD)</span></div>'
        +     '</div>'
        +   '</div>'
        + '</div>';
    }

    /* -------- DOM helpers -------- */

    function restoreInputValues() {
      for (var i = 0; i < 3; i++) {
        var el = document.querySelector('[data-slot-input="' + i + '"]');
        if (el) el.value = state.inputs[i];
      }
    }

    /* -------- handlers -------- */

    function attachHandlers() {
      /* Live-save textarea content */
      document.querySelectorAll('[data-slot-input]').forEach(function (el) {
        el.addEventListener('input', function () {
          var idx = parseInt(el.getAttribute('data-slot-input'), 10);
          state.inputs[idx] = el.value;
          /* Update check button state without full re-render */
          var btn = document.getElementById('check-btn');
          if (btn) {
            var allFilled = state.inputs.every(function (v) { return v.trim().length > 0; });
            btn.disabled = !allFilled;
          }
        });
        el.addEventListener('focus', function () {
          state.lastFocused = parseInt(el.getAttribute('data-slot-input'), 10);
        });
      });

      /* Vocabulary chip → insert term into last focused textarea */
      document.querySelectorAll('[data-vocab]').forEach(function (el) {
        el.addEventListener('click', function (e) {
          e.preventDefault();
          var term   = el.getAttribute('data-vocab');
          var idx    = state.lastFocused >= 0 ? state.lastFocused : 0;
          var target = document.querySelector('[data-slot-input="' + idx + '"]');
          if (!target) return;
          var start = target.selectionStart;
          var end   = target.selectionEnd;
          var val   = target.value;
          var insert = (start > 0 && val[start - 1] !== ' ') ? ' ' + term : term;
          target.value = val.slice(0, start) + insert + val.slice(end);
          target.selectionStart = target.selectionEnd = start + insert.length;
          target.focus();
          state.inputs[idx] = target.value;
        });
      });

      /* Check */
      var checkBtn = document.getElementById('check-btn');
      if (checkBtn) checkBtn.addEventListener('click', function () {
        /* Snapshot current textarea values before re-render locks them */
        document.querySelectorAll('[data-slot-input]').forEach(function (el) {
          var idx = parseInt(el.getAttribute('data-slot-input'), 10);
          state.inputs[idx] = el.value;
        });
        state.checked = true;
        render();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });

      /* Self-mark buttons */
      document.querySelectorAll('[data-selfmark]').forEach(function (el) {
        el.addEventListener('click', function () {
          var idx = parseInt(el.getAttribute('data-selfmark'), 10);
          var val = el.getAttribute('data-val') === 'ok';
          if (val) state.score++;
          state.selfMarks[idx] = val;
          render();
          /* Scroll to bridge if all done */
          var allMarked = state.selfMarks.every(function (m) { return m !== null; });
          if (allMarked) {
            setTimeout(function () {
              var bridge = document.querySelector('.link-bridge');
              if (bridge) bridge.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 50);
          }
        });
      });

      /* Next scenario */
      var nextChain = document.getElementById('next-chain');
      if (nextChain) nextChain.addEventListener('click', function () {
        state.chainIdx++;
        state.inputs    = ['', '', ''];
        state.checked   = false;
        state.selfMarks = [null, null, null];
        state.lastFocused = -1;
        render();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });

      /* Next station */
      var nextStation = document.getElementById('next-station');
      if (nextStation) nextStation.addEventListener('click', function () {
        alert('Spot the Flaw station coming next!');
      });
    }

    render();
  };
})();
