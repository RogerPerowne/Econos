/* ============================================================
   ECONOS — Link It engine (Predict the Outcome station)
   Students predict directional changes (↑ ↓ → ?) for a set
   of economic variables following a scenario shock.
   ============================================================ */

(function () {
  'use strict';

  window.bootLinkPredict = function () {
    if (Progress.getLinkUnlocked() < 0) {
      TopicLoader.go(TopicLoader.buildUrl('link_context.html'));
      return;
    }

    var I    = window.ECONOS_ICONS;
    var DATA = window.ECONOS_LINK_PREDICT;

    var DIRS = [
      { id: 'increase',  label: '↑ Increase',  col: 'var(--econ-green,#10B981)', bg: '#F0FDF4', brd: '#DCFCE7' },
      { id: 'decrease',  label: '↓ Decrease',  col: 'var(--econ-rose,#F43F5E)',  bg: '#FEF2F2', brd: '#FFE4E6' },
      { id: 'unchanged', label: '→ No change', col: 'var(--econ-muted,#6B7280)', bg: '#F9FAFB', brd: '#E5E7EB' },
      { id: 'ambiguous', label: '? Uncertain', col: 'var(--econ-amber,#F59E0B)', bg: '#FFFBEB', brd: '#FEF3C7' }
    ];

    var state = {
      scenarioIdx: 0,
      picks:       {},   /* variableId → directionId */
      revealed:    false,
      totalScore:  0
    };

    /* -------- helpers -------- */

    function currentSc()    { return DATA.scenarios[state.scenarioIdx]; }
    function isLastSc()     { return state.scenarioIdx === DATA.scenarios.length - 1; }
    function allPicked(sc)  { return sc.variables.every(function (v) { return state.picks[v.id]; }); }
    function dirById(id)    { return DIRS.filter(function (d) { return d.id === id; })[0] || DIRS[2]; }

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
      var sc = currentSc();
      return ''
        + '<div class="link-card">'
        +   renderEyebrow()
        +   '<p class="link-card__lede">' + DATA.instruction + '</p>'
        +   renderScenarioBox(sc)
        +   renderVariables(sc)
        +   (state.revealed ? renderReveal(sc) : '')
        + '</div>'
        + renderFooter(sc);
    }

    function renderEyebrow() {
      var maxScore = DATA.scenarios.reduce(function (sum, sc) {
        return sum + sc.variables.length * 3;
      }, 0);
      return ''
        + '<div class="link-card__eyebrow">'
        +   '<span class="link-card__eyebrow-dot"></span>'
        +   '<span>' + DATA.eyebrow + '</span>'
        +   '<span class="chain-score-badge">SCORE ' + state.totalScore + ' / ' + maxScore + '</span>'
        + '</div>';
    }

    function renderScenarioBox(sc) {
      return ''
        + '<div style="background:var(--econ-ink,#0B1426);color:#fff;border-radius:10px;'
        + 'padding:var(--sp-4);margin-bottom:var(--sp-4);">'
        + '<div style="display:flex;gap:var(--sp-3);align-items:flex-start;">'
        + '<span style="font-size:2rem;line-height:1;">' + sc.icon + '</span>'
        + '<div>'
        + '<div style="font-weight:700;font-size:1rem;margin-bottom:var(--sp-1);">' + sc.title + '</div>'
        + '<div style="font-size:0.88rem;line-height:1.55;opacity:0.85;">' + sc.setup + '</div>'
        + '</div></div>'
        + '</div>';
    }

    function renderVariables(sc) {
      var header = '<div style="font-weight:700;font-size:0.82rem;text-transform:uppercase;'
                 + 'letter-spacing:.06em;color:var(--econ-muted,#6B7280);margin-bottom:var(--sp-2);">'
                 + 'Predict what happens to each variable:</div>';
      return header + sc.variables.map(renderVarRow).join('');
    }

    function renderVarRow(v) {
      var picked    = state.picks[v.id];
      var isCorrect = picked && picked === v.correct;
      var isWrong   = picked && !isCorrect;

      var dirBtns = DIRS.map(function (d) {
        var isSel = picked === d.id;
        var border, bg;
        if (isSel && state.revealed) {
          border = isCorrect ? 'var(--econ-green,#10B981)' : 'var(--econ-rose,#F43F5E)';
          bg     = isCorrect ? '#F0FDF4' : '#FEF2F2';
        } else if (isSel) {
          border = d.brd;
          bg     = d.bg;
        } else {
          border = 'var(--econ-gray-200,#E5E7EB)';
          bg     = '#fff';
        }
        var disabled = state.revealed ? ' disabled' : '';
        return '<button type="button" class="predict-btn" data-vid="' + v.id + '" data-dir="' + d.id + '"'
             + disabled
             + ' style="padding:var(--sp-1) var(--sp-2);border-radius:8px;border:1.5px solid '
             + border + ';background:' + bg + ';cursor:pointer;font-size:0.82rem;font-weight:600;'
             + 'color:' + d.col + ';min-width:96px;">'
             + d.label + '</button>';
      }).join('');

      var indicator = '';
      if (state.revealed) {
        if (isCorrect) {
          indicator = '<span style="color:var(--econ-green,#10B981);font-weight:700;font-size:0.85rem;">✓</span>';
        } else if (isWrong) {
          var correct = dirById(v.correct);
          indicator = '<span style="color:var(--econ-rose,#F43F5E);font-weight:700;font-size:0.85rem;">'
                    + '✕ → ' + correct.label + '</span>';
        }
      }

      var reason = state.revealed
        ? '<div style="background:var(--econ-gray-50,#F9FAFB);border-radius:6px;padding:'
          + 'var(--sp-2) var(--sp-3);margin-top:var(--sp-1);font-size:0.83rem;line-height:1.5;'
          + 'color:var(--econ-ink);">' + v.reason + '</div>'
        : '';

      return ''
        + '<div style="background:#fff;border:1px solid var(--econ-gray-100,#F3F4F6);'
        + 'border-radius:10px;padding:var(--sp-3);margin-bottom:var(--sp-2);">'
        + '<div style="display:flex;align-items:center;justify-content:space-between;gap:var(--sp-2);'
        + 'flex-wrap:wrap;margin-bottom:var(--sp-2);">'
        + '<div style="font-weight:600;font-size:0.9rem;color:var(--econ-ink);">' + v.label + '</div>'
        + indicator
        + '</div>'
        + '<div style="display:flex;gap:var(--sp-1);flex-wrap:wrap;">' + dirBtns + '</div>'
        + reason
        + '</div>';
    }

    function renderReveal(sc) {
      var correct = sc.variables.filter(function (v) { return state.picks[v.id] === v.correct; }).length;
      var total   = sc.variables.length;
      var pct     = Math.round(correct / total * 100);
      var tone    = pct >= 80 ? 'green' : pct >= 50 ? 'amber' : 'rose';
      var bgMap   = { green: '#F0FDF4', amber: '#FFFBEB', rose: '#FEF2F2' };
      var brdMap  = { green: '#DCFCE7', amber: '#FEF3C7', rose: '#FFE4E6' };
      return ''
        + '<div style="background:' + bgMap[tone] + ';border:1px solid ' + brdMap[tone]
        + ';border-radius:10px;padding:var(--sp-3) var(--sp-4);margin-top:var(--sp-3);">'
        + '<div style="font-weight:700;font-size:1rem;color:var(--econ-ink);margin-bottom:var(--sp-1);">'
        + correct + ' / ' + total + ' correct</div>'
        + (sc.examBridge
            ? '<div class="link-bridge"><div class="link-bridge__label">In an exam answer…</div>'
              + '<div class="link-bridge__text">' + sc.examBridge + '</div></div>'
            : '')
        + '</div>';
    }

    function renderFooter(sc) {
      var ready      = allPicked(sc);
      var stationNum = DATA.currentStationIdx + 1;
      var stationTot = DATA.stations.length;
      var scStr      = DATA.scenarios.length > 1
                       ? ' · Scenario ' + (state.scenarioIdx + 1) + ' of ' + DATA.scenarios.length
                       : '';
      var primary;
      if (!state.revealed) {
        primary = '<button type="button" class="link-btn link-btn--primary" id="check-btn"'
                + (ready ? '' : ' disabled') + '>Check predictions →</button>';
      } else if (!isLastSc()) {
        primary = '<button type="button" class="link-btn link-btn--primary" id="next-sc">Next scenario →</button>';
      } else {
        primary = '<button type="button" class="link-btn link-btn--primary" id="next-station">Next station →</button>';
      }
      return ''
        + '<div class="link-footer">'
        + '<a href="' + DATA.backUrl + '" class="link-btn link-btn--ghost">← Back</a>'
        + '<div class="link-footer__counter">Step ' + stationNum + ' of ' + stationTot + scStr + '</div>'
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
        { icon: '🔮', text: 'Trace each shock step by step through the mechanism' },
        { icon: '🔗', text: 'Follow knock-on effects to related variables'         },
        { icon: '🎯', text: 'Analysis: State the mechanism, not just the direction.' }
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
      document.querySelectorAll('.predict-btn').forEach(function (el) {
        el.addEventListener('click', function () {
          if (state.revealed) return;
          state.picks[el.getAttribute('data-vid')] = el.getAttribute('data-dir');
          render();
        });
      });

      var checkBtn = document.getElementById('check-btn');
      if (checkBtn) checkBtn.addEventListener('click', function () {
        state.revealed = true;
        var sc      = currentSc();
        var correct = sc.variables.filter(function (v) { return state.picks[v.id] === v.correct; }).length;
        state.totalScore += correct * 3;
        render();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });

      var nextScBtn = document.getElementById('next-sc');
      if (nextScBtn) nextScBtn.addEventListener('click', function () {
        state.scenarioIdx++;
        state.picks    = {};
        state.revealed = false;
        render();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });

      var nextStBtn = document.getElementById('next-station');
      if (nextStBtn) nextStBtn.addEventListener('click', function () {
        try {
          var stored = JSON.parse(localStorage.getItem('econos_link_scores') || '{}');
          stored.predict = state.totalScore;
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
