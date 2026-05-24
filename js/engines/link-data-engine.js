/* ============================================================
   ECONOS — Link It engine (Read the Data station)
   Students interpret a quantitative data table, then answer
   3 MCQ questions with explanation feedback.
   ============================================================ */

(function () {
  'use strict';

  window.bootLinkData = function () {
    if (Progress.getLinkUnlocked() < 0) {
      TopicLoader.go(TopicLoader.buildUrl('link_context.html'));
      return;
    }

    var I    = window.ECONOS_ICONS;
    var DATA = window.ECONOS_LINK_DATA;

    /* Shuffle MCQ options at boot, preserving correct answer */
    DATA.dataset.questions.forEach(function (q) {
      var correctText = q.options[q.correct];
      var arr = q.options;
      for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
      }
      q.correct = q.options.indexOf(correctText);
    });

    var state = {
      answers:  {},  /* qid → option index */
      revealed: {},  /* qid → bool */
      score:    0
    };

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
      attachHandlers();
    }

    function renderStation() {
      var ds = DATA.dataset;
      return ''
        + '<div class="link-card">'
        +   renderEyebrow()
        +   '<p class="link-card__lede">' + DATA.instruction + '</p>'
        +   renderDataset(ds)
        +   renderQuestions(ds)
        + '</div>'
        + renderFooter();
    }

    function renderEyebrow() {
      var total = DATA.dataset.questions.length;
      return ''
        + '<div class="link-card__eyebrow">'
        +   '<span class="link-card__eyebrow-dot"></span>'
        +   '<span>' + DATA.eyebrow + '</span>'
        +   '<span class="chain-score-badge">SCORE ' + state.score + ' / ' + (total * 3) + '</span>'
        + '</div>';
    }

    function renderDataset(ds) {
      var thead = '<thead><tr>'
        + ds.table.headers.map(function (h) {
            return '<th style="background:var(--econ-ink,#0B1426);color:#fff;padding:8px 12px;'
                 + 'text-align:left;font-size:0.82rem;font-weight:600;white-space:nowrap;">' + h + '</th>';
          }).join('') + '</tr></thead>';
      var tbody = '<tbody>'
        + ds.table.rows.map(function (row, ri) {
            var bg = ri % 2 === 1 ? 'background:var(--econ-surface-2,#F8FAFC);' : '';
            return '<tr>' + row.map(function (cell) {
              return '<td style="padding:8px 12px;font-size:0.88rem;border-bottom:1px solid '
                   + 'var(--econ-gray-100,#F3F4F6);' + bg + '">' + cell + '</td>';
            }).join('') + '</tr>';
          }).join('') + '</tbody>';
      return ''
        + '<div style="margin-bottom:var(--sp-4);">'
        + '<div style="font-weight:700;font-size:1rem;color:var(--econ-ink);margin-bottom:var(--sp-1);">'
        + ds.title + '</div>'
        + (ds.source ? '<div style="font-size:0.78rem;color:var(--econ-muted,#6B7280);margin-bottom:var(--sp-1);">' + ds.source + '</div>' : '')
        + (ds.notes  ? '<div style="font-size:0.82rem;color:var(--econ-muted,#6B7280);margin-bottom:var(--sp-2);font-style:italic;">' + ds.notes + '</div>' : '')
        + '<div style="overflow-x:auto;"><table style="width:100%;border-collapse:collapse;">'
        + thead + tbody + '</table></div>'
        + '</div>';
    }

    function renderQuestions(ds) {
      return ds.questions.map(function (q, i) { return renderOneQ(q, i); }).join('');
    }

    function renderOneQ(q, idx) {
      var answered = state.answers[q.id] !== undefined;
      var revealed = state.revealed[q.id];
      var selected = state.answers[q.id];

      var optsHtml = q.options.map(function (opt, oi) {
        var isSel     = selected === oi;
        var isCorrect = oi === q.correct;
        var border, bg, prefix = '';
        if (revealed) {
          if (isCorrect)     { border = 'var(--econ-green,#10B981)'; bg = '#F0FDF4'; prefix = '✓ '; }
          else if (isSel)    { border = 'var(--econ-rose,#F43F5E)';  bg = '#FEF2F2'; prefix = '✕ '; }
          else               { border = 'var(--econ-gray-200,#E5E7EB)'; bg = '#fff'; }
        } else {
          border = isSel ? 'var(--econ-blue,#3B82F6)' : 'var(--econ-gray-200,#E5E7EB)';
          bg     = isSel ? 'var(--econ-blue-50,#EFF6FF)' : '#fff';
        }
        var disabled = revealed ? ' disabled' : '';
        return '<button type="button" class="data-option" data-qid="' + q.id + '" data-oi="' + oi + '"'
             + disabled + ' style="display:block;width:100%;text-align:left;padding:var(--sp-2) '
             + 'var(--sp-3);margin-bottom:var(--sp-1);border-radius:8px;border:1.5px solid ' + border
             + ';background:' + bg + ';cursor:pointer;font-size:0.88rem;color:var(--econ-ink);">'
             + prefix + opt + '</button>';
      }).join('');

      var explain = revealed
        ? '<div id="data-explain-' + q.id + '" style="background:var(--econ-gray-50,#F9FAFB);border-radius:6px;padding:'
          + 'var(--sp-2) var(--sp-3);margin-top:var(--sp-2);font-size:0.85rem;line-height:1.55;'
          + 'color:var(--econ-ink);">' + q.explanation + '</div>'
        : '';

      var checkBtn = (!revealed && answered)
        ? '<button type="button" class="link-btn link-btn--primary data-check" data-qid="' + q.id
          + '" style="margin-top:var(--sp-2);width:auto;">Check ✓</button>'
        : '';

      return ''
        + '<div style="margin-bottom:var(--sp-4);padding-bottom:var(--sp-4);border-bottom:1px '
        + 'solid var(--econ-gray-100,#F3F4F6);">'
        + '<div style="display:flex;gap:var(--sp-2);margin-bottom:var(--sp-2);">'
        + '<div style="width:24px;height:24px;border-radius:50%;background:var(--econ-blue,'
        + '#3B82F6);color:#fff;display:flex;align-items:center;justify-content:center;'
        + 'font-size:0.75rem;font-weight:700;flex-shrink:0;">' + (idx + 1) + '</div>'
        + '<div style="font-size:0.92rem;font-weight:600;color:var(--econ-ink);line-height:1.45;">'
        + q.question + '</div>'
        + '</div>'
        + optsHtml + checkBtn + explain
        + '</div>';
    }

    function renderFooter() {
      var qs         = DATA.dataset.questions;
      var allDone    = qs.every(function (q) { return state.revealed[q.id]; });
      var stationNum = DATA.currentStationIdx + 1;
      var stationTot = DATA.stations.length;
      var primary = allDone
        ? '<button type="button" class="link-btn link-btn--primary" id="next-station">Next station →</button>'
        : '<button type="button" class="link-btn link-btn--primary" disabled>Answer all questions</button>';
      return ''
        + '<div class="link-footer">'
        + '<a href="' + DATA.backUrl + '" class="link-btn link-btn--ghost">← Back</a>'
        + '<div class="link-footer__counter">Step ' + stationNum + ' of ' + stationTot + '</div>'
        + primary + '</div>';
    }

    /* ---- rail ---- */

    function renderRail() {
      var unlockedIdx  = Progress.getLinkUnlocked();
      var stationsList = DATA.stations.map(function (st, i) {
        var isCurrent = i === DATA.currentStationIdx;
        var isDone    = i <= unlockedIdx && !isCurrent;
        var isLocked  = i > unlockedIdx && !isCurrent;
        var cls = 'cards-list__item' + (isDone ? ' is-done' : isCurrent ? ' is-current' : '') + (!isLocked ? ' is-linked' : '');
        var tag = isLocked ? 'div' : 'a';
        var href = isLocked ? '' : ' href="' + st.href + '"';
        var chip = isLocked
          ? '<span class="cards-list__chip cards-list__chip--locked">Locked</span>'
          : (isCurrent ? '<span class="cards-list__chip">Current</span>' : '');
        return '<' + tag + ' class="' + cls + '"' + href + '>'
          + '<div class="cards-list__num">' + (isDone ? I.check : (i + 1)) + '</div>'
          + '<div class="cards-list__body"><div class="cards-list__name">' + st.label + '</div>' + chip + '</div>'
          + '</' + tag + '>';
      }).join('');

      var wgll = DATA.wgll || [
        { icon: '📊', text: 'Read column headings and units carefully' },
        { icon: '🔍', text: 'Identify trends and anomalies in the data' },
        { icon: '🎯', text: 'Application: Use data to support or qualify a theoretical claim.' }
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
        + '</div></div></div>';
    }

    /* -------- handlers -------- */

    function attachHandlers() {
      document.querySelectorAll('.data-option').forEach(function (el) {
        el.addEventListener('click', function () {
          var qid = el.getAttribute('data-qid');
          if (state.revealed[qid]) return;
          state.answers[qid] = parseInt(el.getAttribute('data-oi'), 10);
          render();
        });
      });

      document.querySelectorAll('.data-check').forEach(function (el) {
        el.addEventListener('click', function () {
          var qid = el.getAttribute('data-qid');
          var q   = DATA.dataset.questions.filter(function (qq) { return qq.id === qid; })[0];
          state.revealed[qid] = true;
          state.score += (state.answers[qid] === q.correct) ? 3 : 1;
          render();
          var explain = document.getElementById('data-explain-' + qid);
          if (explain) explain.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
      });

      var nextStBtn = document.getElementById('next-station');
      if (nextStBtn) nextStBtn.addEventListener('click', function () {
        try {
          var stored = JSON.parse(localStorage.getItem('econos_link_scores') || '{}');
          stored.data = state.score;
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
