/* ============================================================
   ECONOS — Link It engine (Calculate It station)
   Step-by-step worked calculation with answer checking.
   Supports numeric input and MCQ question types.
   ============================================================ */

(function () {
  'use strict';

  window.bootLinkCalc = function () {
    if (Progress.getLinkUnlocked() < 0) {
      TopicLoader.go(TopicLoader.buildUrl('link_context.html'));
      return;
    }

    var I    = window.ECONOS_ICONS;
    var DATA = window.ECONOS_LINK_CALC;

    var state = {
      questionIdx: 0,
      methodOpen:  false,
      stepsShown:  0,
      answer:      '',
      submitted:   false,
      totalScore:  0
    };

    /* -------- helpers -------- */

    function currentQ() { return DATA.questions[state.questionIdx]; }
    function isLast()   { return state.questionIdx === DATA.questions.length - 1; }

    function isCorrect(q) {
      if (q.inputType === 'mcq') return state.answer === q.answer;
      var v = parseFloat(state.answer);
      return !isNaN(v) && Math.abs(v - q.answer) <= (q.tolerance || 0);
    }

    /* -------- render -------- */

    function render() {
      var root = document.getElementById('app-root');
      root.innerHTML = ''
        + '<div class="app theme--link">'
        +   Shell.renderSidebar({ activeNav: 'My topics' })
        +   '<div id="main-content" class="main" tabindex="-1" role="main">'
        +     Shell.renderTopbar({ backUrl: DATA.backUrl, backLabel: 'Back to dashboard',
                sessionLabel: DATA.sessionLabel || TopicLoader.sessionLabel('link'),
                topicTitle: DATA.topic })
        +     '<div class="page">'
        +       '<div class="link-station">' + renderStation() + '</div>'
        +       renderRail()
        +     '</div>'
        +   '</div>'
        + '</div>';
      restoreInput();
      attachHandlers();
    }

    function restoreInput() {
      var inp = document.getElementById('calc-input');
      if (inp) inp.value = state.answer;
    }

    function renderStation() {
      var q = currentQ();
      return ''
        + '<div class="link-card">'
        +   renderEyebrow()
        +   '<p class="link-card__lede">' + DATA.instruction + '</p>'
        +   renderQuestionCard(q)
        +   (state.submitted ? renderFeedback(q) : '')
        + '</div>'
        + renderFooter();
    }

    function renderEyebrow() {
      var max = DATA.questions.length * 3;
      return ''
        + '<div class="link-card__eyebrow">'
        +   '<span class="link-card__eyebrow-dot"></span>'
        +   '<span>' + DATA.eyebrow + '</span>'
        +   '<span class="chain-score-badge">SCORE ' + state.totalScore + ' / ' + max + '</span>'
        + '</div>';
    }

    function renderQuestionCard(q) {
      var html = '';

      /* title */
      html += '<div style="font-weight:700;font-size:1.05rem;margin-bottom:var(--sp-3);'
            + 'color:var(--econ-ink);">' + q.title + '</div>';

      /* scenario */
      html += '<div style="background:var(--econ-surface-2,#F8FAFC);border-radius:8px;'
            + 'padding:var(--sp-3) var(--sp-4);margin-bottom:var(--sp-3);font-size:0.925rem;'
            + 'line-height:1.55;color:var(--econ-ink);">' + q.scenario + '</div>';

      /* optional data table */
      if (q.table) html += renderTable(q.table);

      /* question block */
      html += '<div style="background:var(--econ-blue-50,#EFF6FF);border-left:3px solid '
            + 'var(--econ-blue,#3B82F6);border-radius:0 8px 8px 0;padding:var(--sp-3) '
            + 'var(--sp-4);margin-bottom:var(--sp-3);">'
            + '<div style="font-size:0.8rem;font-weight:700;text-transform:uppercase;'
            + 'letter-spacing:.06em;color:var(--econ-blue,#3B82F6);margin-bottom:var(--sp-2);">'
            + 'Question</div>'
            + '<div style="font-size:0.95rem;line-height:1.5;color:var(--econ-ink);">'
            + q.question + '</div>'
            + (q.hint
                ? '<div style="font-size:0.83rem;color:var(--econ-blue,#3B82F6);margin-top:'
                  + 'var(--sp-2);">💡 ' + q.hint + '</div>'
                : '')
            + '</div>';

      /* step-by-step method */
      html += renderMethod(q);

      /* answer input (hidden after submit) */
      if (!state.submitted) html += renderAnswerInput(q);

      return html;
    }

    function renderTable(tbl) {
      var thead = '<thead><tr>'
        + tbl.headers.map(function (h) {
            return '<th style="background:var(--econ-ink,#0B1426);color:#fff;padding:8px 12px;'
                 + 'text-align:left;font-size:0.85rem;font-weight:600;">' + h + '</th>';
          }).join('')
        + '</tr></thead>';
      var tbody = '<tbody>'
        + tbl.rows.map(function (row, ri) {
            var bg = ri % 2 === 1 ? 'background:var(--econ-surface-2,#F8FAFC);' : '';
            return '<tr>'
              + row.map(function (cell) {
                  return '<td style="padding:8px 12px;font-size:0.9rem;border-bottom:1px solid '
                       + 'var(--econ-gray-100,#F3F4F6);' + bg + '">' + cell + '</td>';
                }).join('')
              + '</tr>';
          }).join('')
        + '</tbody>';
      return ''
        + '<div style="overflow-x:auto;margin-bottom:var(--sp-3);">'
        + (tbl.caption
            ? '<div style="font-size:0.8rem;color:var(--econ-muted,#6B7280);margin-bottom:'
              + 'var(--sp-1);">' + tbl.caption + '</div>'
            : '')
        + '<table style="width:100%;border-collapse:collapse;border-radius:8px;overflow:hidden;">'
        + thead + tbody + '</table>'
        + '</div>';
    }

    function renderMethod(q) {
      if (!state.methodOpen) {
        return '<button type="button" id="toggle-method" style="display:flex;align-items:center;'
             + 'gap:6px;background:none;border:1px dashed var(--econ-gray-300,#D1D5DB);'
             + 'border-radius:8px;padding:var(--sp-2) var(--sp-3);cursor:pointer;'
             + 'color:var(--econ-muted,#6B7280);font-size:0.875rem;margin-bottom:var(--sp-3);">'
             + '🔢 Reveal step-by-step method'
             + '</button>';
      }

      var steps  = q.method;
      var shown  = Math.min(state.stepsShown, steps.length);
      var stepsHtml = '';
      for (var i = 0; i < shown; i++) {
        var s = steps[i];
        stepsHtml += ''
          + '<div style="display:flex;gap:var(--sp-3);padding:var(--sp-2) 0;border-bottom:1px '
          + 'solid var(--econ-gray-100,#F3F4F6);">'
          + '<div style="width:24px;height:24px;border-radius:50%;background:var(--econ-blue,'
          + '#3B82F6);color:#fff;display:flex;align-items:center;justify-content:center;'
          + 'font-size:0.75rem;font-weight:700;flex-shrink:0;">' + (i + 1) + '</div>'
          + '<div>'
          + '<div style="font-size:0.8rem;font-weight:600;color:var(--econ-muted,#6B7280);'
          + 'text-transform:uppercase;letter-spacing:.04em;margin-bottom:2px;">' + s.step + '</div>'
          + '<div style="font-size:0.9rem;color:var(--econ-ink);font-family:\'Courier New\','
          + 'monospace;">' + s.working + '</div>'
          + '</div>'
          + '</div>';
      }

      var moreBtn = shown < steps.length
        ? '<button type="button" id="reveal-step" style="margin-top:var(--sp-2);display:flex;'
          + 'align-items:center;gap:6px;background:var(--econ-blue-50,#EFF6FF);border:1px solid '
          + 'var(--econ-blue-100,#DBEAFE);border-radius:8px;padding:var(--sp-2) var(--sp-3);'
          + 'cursor:pointer;color:var(--econ-blue,#3B82F6);font-size:0.875rem;font-weight:600;">'
          + 'Reveal step ' + (shown + 1) + ' of ' + steps.length + ' ↓</button>'
        : '<div style="margin-top:var(--sp-2);font-size:0.82rem;color:var(--econ-green,#10B981);'
          + 'font-weight:600;">✓ Full method shown</div>';

      return ''
        + '<div style="background:var(--econ-gray-50,#F9FAFB);border:1px solid '
        + 'var(--econ-gray-100,#F3F4F6);border-radius:8px;padding:var(--sp-3) var(--sp-4);'
        + 'margin-bottom:var(--sp-3);">'
        + '<div style="font-size:0.8rem;font-weight:700;text-transform:uppercase;'
        + 'letter-spacing:.06em;color:var(--econ-muted,#6B7280);margin-bottom:var(--sp-2);">'
        + 'Step-by-step method</div>'
        + stepsHtml
        + moreBtn
        + '</div>';
    }

    function renderAnswerInput(q) {
      if (q.inputType === 'mcq') {
        var optsHtml = q.options.map(function (opt, idx) {
          var sel = state.answer === opt;
          return '<button type="button" class="calc-option" data-opt="' + idx + '" style="display:block;'
               + 'width:100%;text-align:left;padding:var(--sp-2) var(--sp-3);margin-bottom:var(--sp-1);'
               + 'border-radius:8px;border:1.5px solid ' + (sel ? 'var(--econ-blue,#3B82F6)' : 'var(--econ-gray-200,#E5E7EB)')
               + ';background:' + (sel ? 'var(--econ-blue-50,#EFF6FF)' : '#fff')
               + ';cursor:pointer;font-size:0.9rem;color:var(--econ-ink);">'
               + opt + '</button>';
        }).join('');
        return '<div style="margin-bottom:var(--sp-3);">'
          + '<div style="font-size:0.85rem;font-weight:600;color:var(--econ-ink);margin-bottom:var(--sp-2);">Select the correct answer:</div>'
          + optsHtml
          + '</div>';
      }
      return '<div style="margin-bottom:var(--sp-3);">'
        + '<label style="display:block;font-size:0.85rem;font-weight:600;color:var(--econ-ink);margin-bottom:var(--sp-2);">Your answer:</label>'
        + '<div style="display:flex;align-items:center;gap:var(--sp-2);">'
        + '<input type="number" id="calc-input" step="any" placeholder="0" style="width:130px;'
        + 'padding:var(--sp-2) var(--sp-3);border:1.5px solid var(--econ-gray-300,#D1D5DB);'
        + 'border-radius:8px;font-size:1rem;color:var(--econ-ink);" />'
        + '<span style="font-size:0.88rem;color:var(--econ-muted,#6B7280);">' + (q.unit || '') + '</span>'
        + '</div></div>';
    }

    function renderFeedback(q) {
      var ok   = isCorrect(q);
      var icon = ok ? '✅' : '⚠️';
      var pts  = ok ? '+3 points' : '+1 point for trying';
      var bg   = ok ? '#F0FDF4' : '#FFFBEB';
      var brd  = ok ? '#DCFCE7' : '#FEF3C7';
      var col  = ok ? 'var(--econ-green,#10B981)' : 'var(--econ-amber,#F59E0B)';
      var msg  = ok ? q.feedback.correct : q.feedback.wrong;
      return ''
        + '<div id="calc-feedback" style="background:' + bg + ';border:1px solid ' + brd + ';border-radius:10px;'
        + 'padding:var(--sp-3) var(--sp-4);margin-top:var(--sp-3);">'
        + '<div style="font-weight:700;font-size:0.95rem;color:' + col + ';margin-bottom:var(--sp-2);">'
        + icon + ' ' + pts + '</div>'
        + '<div style="font-size:0.9rem;line-height:1.5;color:var(--econ-ink);margin-bottom:var(--sp-2);">'
        + msg + '</div>'
        + '<div style="background:var(--econ-blue-50,#EFF6FF);border-radius:6px;padding:var(--sp-2) '
        + 'var(--sp-3);font-size:0.83rem;color:var(--econ-blue,#3B82F6);line-height:1.45;">'
        + '<strong>Exam tip:</strong> ' + q.examTip + '</div>'
        + '</div>';
    }

    function renderFooter() {
      var stationNum = DATA.currentStationIdx + 1;
      var stationTot = DATA.stations.length;
      var ready      = state.answer !== '';
      var primary;
      if (!state.submitted) {
        primary = '<button type="button" class="link-btn link-btn--primary" id="check-btn"'
                + (ready ? '' : ' disabled') + '>Check answer →</button>';
      } else if (!isLast()) {
        primary = '<button type="button" class="link-btn link-btn--primary" id="next-q">Next question →</button>';
      } else {
        primary = '<button type="button" class="link-btn link-btn--primary" id="next-station">Next station →</button>';
      }
      return ''
        + '<div class="link-footer">'
        + '<a href="' + DATA.backUrl + '" class="link-btn link-btn--ghost">← Back</a>'
        + '<div class="link-footer__counter">Step ' + stationNum + ' of ' + stationTot
        + ' · Q' + (state.questionIdx + 1) + ' of ' + DATA.questions.length + '</div>'
        + primary
        + '</div>';
    }

    /* ---- rail ---- */

    function renderRail() {
      var unlockedIdx  = Progress.getLinkUnlocked();
      var stationsList = DATA.stations.map(function (st, i) {
        var isCurrent = i === DATA.currentStationIdx;
        var isDone    = i <= unlockedIdx && !isCurrent;
        var isLocked  = i > unlockedIdx && !isCurrent;
        var cls       = 'cards-list__item' + (isDone ? ' is-done' : isCurrent ? ' is-current' : '') + (!isLocked ? ' is-linked' : '');
        var tag       = isLocked ? 'div' : 'a';
        var href      = isLocked ? '' : ' href="' + st.href + '"';
        var chip      = isLocked ? '<span class="cards-list__chip cards-list__chip--locked">Locked</span>'
                                 : (isCurrent ? '<span class="cards-list__chip">Current</span>' : '');
        return '<' + tag + ' class="' + cls + '"' + href + '>'
          + '<div class="cards-list__num">' + (isDone ? I.check : (i + 1)) + '</div>'
          + '<div class="cards-list__body"><div class="cards-list__name">' + st.label + '</div>' + chip + '</div>'
          + '</' + tag + '>';
      }).join('');

      var wgll = DATA.wgll || [
        { icon: '🔢', text: 'Show your working step by step'      },
        { icon: '🎯', text: 'Always state units in your answer'    },
        { icon: '📐', text: 'Analysis: Quantitative reasoning scores marks in data-response questions.' }
      ];

      return ''
        + '<div class="right-rail">' + Shell.renderStages()
        + '<div class="rail-card"><div class="rail-card__title">Topic progress</div>'
        + '<div class="rail-card__sub">Step 2 of 3: Link</div>'
        + '<div class="session-dots">'
        + '<div class="session-dot is-done">' + I.check + '</div>'
        + '<div class="session-line is-done"></div>'
        + '<div class="session-dot is-current">2</div>'
        + '<div class="session-line"></div>'
        + '<div class="session-dot">3</div>'
        + '</div></div>'
        + '<div class="rail-card"><div class="rail-card__title" style="margin-bottom:var(--sp-3);">Steps</div>'
        + '<div class="cards-list">' + stationsList + '</div></div>'
        + '<div class="rail-card"><div class="rail-card__title" style="margin-bottom:var(--sp-3);">What good looks like</div>'
        + '<div class="link-rail__wgll">'
        + wgll.map(function (p) {
            return '<div class="link-rail__wgll-item"><span class="link-rail__wgll-icon">'
                 + p.icon + '</span><span>' + p.text + '</span></div>';
          }).join('')
        + '</div></div>'
        + '</div>';
    }

    /* -------- handlers -------- */

    function attachHandlers() {
      var toggleBtn = document.getElementById('toggle-method');
      if (toggleBtn) toggleBtn.addEventListener('click', function () {
        state.methodOpen = true;
        state.stepsShown = 1;
        render();
      });

      var revealBtn = document.getElementById('reveal-step');
      if (revealBtn) revealBtn.addEventListener('click', function () {
        state.stepsShown++;
        render();
      });

      document.querySelectorAll('.calc-option').forEach(function (el) {
        el.addEventListener('click', function () {
          if (state.submitted) return;
          var q = currentQ();
          state.answer = q.options[parseInt(el.getAttribute('data-opt'), 10)];
          render();
        });
      });

      var inp = document.getElementById('calc-input');
      if (inp) inp.addEventListener('input', function () {
        state.answer = inp.value;
        var btn = document.getElementById('check-btn');
        if (btn) btn.disabled = (state.answer === '');
      });

      var checkBtn = document.getElementById('check-btn');
      if (checkBtn) checkBtn.addEventListener('click', function () {
        if (!state.answer) return;
        state.submitted = true;
        state.totalScore += isCorrect(currentQ()) ? 3 : 1;
        render();
        var fb = document.getElementById('calc-feedback');
        if (fb) fb.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });

      var nextQBtn = document.getElementById('next-q');
      if (nextQBtn) nextQBtn.addEventListener('click', function () {
        state.questionIdx++;
        state.methodOpen = false;
        state.stepsShown = 0;
        state.answer     = '';
        state.submitted  = false;
        render();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });

      var nextStBtn = document.getElementById('next-station');
      if (nextStBtn) nextStBtn.addEventListener('click', function () {
        try {
          var stored = JSON.parse(localStorage.getItem('econos_link_scores') || '{}');
          stored.calc = state.totalScore;
          localStorage.setItem('econos_link_scores', JSON.stringify(stored));
          var u = Progress.getLinkUnlocked();
          Progress.setLinkUnlocked(Math.max(u, DATA.currentStationIdx));
        } catch (e) {}
        TopicLoader.go(DATA.nextUrl || TopicLoader.buildUrl('link_intro.html'));
      });
    }

    render();
  };
})();
