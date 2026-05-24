/* ============================================================
   ECONOS — Link It engine (Make the Judgement station)
   ============================================================ */

(function () {
  'use strict';

  window.bootLinkJudge = function () {
    if (Progress.getLinkUnlocked() < 3) { TopicLoader.go(TopicLoader.buildUrl('link_context.html')); return; }

    var I    = window.ECONOS_ICONS;
    var DATA = window.ECONOS_LINK_JUDGE;

    /* Shuffle cloze options and overall-position options once at boot */
    function shuffle(arr) {
      for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
      }
    }
    DATA.scenarios.forEach(function (sc) {
      sc.blanks.forEach(function (b) { shuffle(b.options); });
      if (sc.overallPosition && sc.overallPosition.options) shuffle(sc.overallPosition.options);
    });

    var state = {
      scenarioIdx:    0,
      activeBlank:    1,       // currently focused blank id (1..8); starts on first blank
      blankAnswers:   {},      // blankId -> optionId
      overallAnswer:  null,    // optionId
      revealed:       false
    };

    /* -------- helpers -------- */

    function currentScenario() {
      return DATA.scenarios[state.scenarioIdx];
    }

    function blankById(sc, id) {
      return sc.blanks.filter(function (b) { return b.id === id; })[0] || null;
    }

    function optionById(blank, optId) {
      return blank.options.filter(function (o) { return o.id === optId; })[0] || null;
    }

    function isBlankCorrect(blank, optId) {
      var o = optionById(blank, optId);
      return !!(o && o.correct);
    }

    function allBlanksFilled(sc) {
      for (var i = 0; i < sc.blanks.length; i++) {
        if (!state.blankAnswers[sc.blanks[i].id]) return false;
      }
      return true;
    }

    function readyToCheck(sc) {
      return allBlanksFilled(sc);
    }

    function blankSummary(sc) {
      var total = sc.blanks.length;
      var correct = 0;
      for (var i = 0; i < total; i++) {
        var b = sc.blanks[i];
        if (isBlankCorrect(b, state.blankAnswers[b.id])) correct++;
      }
      return { correct: correct, total: total };
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
      var sc = currentScenario();
      return ''
        + '<div class="link-card">'
        +   '<div class="link-card__eyebrow"><span class="link-card__eyebrow-dot"></span>' + DATA.eyebrow + '</div>'
        +   '<p class="link-card__lede">' + DATA.instruction + '</p>'
        +   renderEvidenceCards(sc)
        +   renderClozeBox(sc)
        +   renderWorkspace(sc)
        +   (state.revealed ? renderReveal(sc) : '')
        + '</div>'
        + renderFooter(sc);
    }

    function renderEvidenceCards(sc) {
      var html = sc.evidenceCards.map(function (c) {
        return ''
          + '<div class="judge-card judge-card--' + c.tone + '">'
          +   '<div class="judge-card__icon">' + c.icon + '</div>'
          +   '<div class="judge-card__title">' + c.title + '</div>'
          +   '<div class="judge-card__text">' + c.text + '</div>'
          + '</div>';
      }).join('');
      return '<div class="judge-cards">' + html + '</div>';
    }

    function renderClozeBox(sc) {
      var text = sc.cloze;
      // Replace [n] tokens with chip buttons that show selected text + status
      text = text.replace(/\[(\d+)\]/g, function (m, n) {
        var bId   = parseInt(n, 10);
        var blank = blankById(sc, bId);
        var optId = state.blankAnswers[bId];
        var opt   = optId ? optionById(blank, optId) : null;
        var isActive = state.activeBlank === bId;
        var cls = 'judge-blank';
        if (opt)      cls += ' is-filled';
        if (isActive) cls += ' is-active';
        if (state.revealed && opt) {
          cls += opt.correct ? ' is-correct' : ' is-wrong';
        }
        var label = opt ? opt.text : ('[' + n + ']');
        return '<button type="button" class="' + cls + '" data-blank="' + bId + '">' + label + '</button>';
      });
      return '<div class="judge-cloze">' + text + '</div>';
    }

    function renderWorkspace(sc) {
      var rowsHtml = sc.blanks.map(function (b) {
        var optsHtml = b.options.map(function (o) {
          var selected = state.blankAnswers[b.id] === o.id;
          var cls = 'judge-option';
          if (selected) cls += ' is-selected';
          if (state.revealed && selected) {
            cls += o.correct ? ' is-correct' : ' is-wrong';
          }
          var disabled = state.revealed ? ' disabled' : '';
          return '<button type="button" class="' + cls + '" data-blank="' + b.id + '" data-option="' + o.id + '"' + disabled + '>' + o.text + '</button>';
        }).join('');

        var rowCls = 'judge-bank-row';
        if (state.activeBlank === b.id && !state.revealed) rowCls += ' is-active';

        return ''
          + '<div class="' + rowCls + '">'
          +   '<div class="judge-bank-row__num">[' + b.id + ']</div>'
          +   '<div class="judge-bank-row__opts">' + optsHtml + '</div>'
          + '</div>';
      }).join('');

      return ''
        + '<div class="judge-workspace">'
        +   '<div class="judge-bank">' + rowsHtml + '</div>'
        + '</div>';
    }

    function renderReveal(sc) {
      var s        = blankSummary(sc);
      var pct      = Math.round((s.correct / s.total) * 100);
      var scoreTone= pct >= 75 ? 'green' : pct >= 50 ? 'amber' : 'rose';

      return ''
        + '<div class="judge-reveal">'
        +   '<div class="judge-reveal__score judge-reveal__score--' + scoreTone + '">'
        +     '<div class="judge-reveal__score-num">' + s.correct + ' / ' + s.total + '</div>'
        +     '<div class="judge-reveal__score-label">Blanks correct</div>'
        +   '</div>'
        +   '<div class="judge-reveal__bridge">'
        +     '<div class="judge-reveal__bridge-label">Exam-quality model judgement</div>'
        +     '<div class="judge-reveal__bridge-text">' + sc.examBridge + '</div>'
        +   '</div>'
        + '</div>';
    }

    function renderFooter(sc) {
      var ready    = readyToCheck(sc);
      var isLast   = state.scenarioIdx === DATA.scenarios.length - 1;
      var primary;

      if (!state.revealed) {
        var btnCls = 'link-btn link-btn--primary';
        var btnDisabled = ready ? '' : ' disabled';
        var btnLabel = ready
          ? 'Check my judgement →'
          : 'Fill all blanks';
        primary = '<button type="button" class="' + btnCls + '" id="check-btn"' + btnDisabled + '>' + btnLabel + '</button>';
      } else if (!isLast) {
        primary = '<button type="button" class="link-btn link-btn--primary" id="next-scenario">Next scenario →</button>';
      } else {
        primary = '<button type="button" class="link-btn link-btn--primary" id="finish-btn">See my results →</button>';
      }

      return ''
        + '<div class="link-footer">'
        +   '<a href="' + DATA.backUrl + '" class="link-btn link-btn--ghost">← Back</a>'
        +   primary
        + '</div>';
    }

    /* ── Rail ── */
    function renderRail() {
      var unlockedIdx = Progress.getLinkUnlocked();
      var stationsList = DATA.stations.map(function (st, i) {
        var isCurrent = i === DATA.currentStationIdx;
        var isDone    = i <= unlockedIdx && !isCurrent;
        var isLocked  = i > unlockedIdx && !isCurrent;
        var statusCls = isDone ? ' is-done' : (isCurrent ? ' is-current' : '');
        var tag       = isLocked ? 'div' : 'a';
        var hrefAttr  = isLocked ? '' : ' href="' + st.href + '"';
        var lockChip  = isLocked ? '<span class="cards-list__chip cards-list__chip--locked">Locked</span>' : '';
        return ''
          + '<' + tag
          +   ' class="cards-list__item' + statusCls + (!isLocked ? ' is-linked' : '') + '"'
          +   hrefAttr + '>'
          +   '<div class="cards-list__num">' + (isDone ? I.check : (i + 1)) + '</div>'
          +   '<div class="cards-list__body">'
          +     '<div class="cards-list__name">' + st.label + '</div>'
          +     (isCurrent ? '<span class="cards-list__chip">Current</span>' : lockChip)
          +   '</div>'
          + '</' + tag + '>';
      }).join('');

      var wgllItems = DATA.wgll;

      var sessionDots = ''
        + '<div class="session-dots">'
        +   '<div class="session-dot is-done">' + I.check + '</div>'
        +   '<div class="session-line is-done"></div>'
        +   '<div class="session-dot is-current">2</div>'
        +   '<div class="session-line"></div>'
        +   '<div class="session-dot">3</div>'
        + '</div>';

      var readyLandIt = state.revealed && state.scenarioIdx === DATA.scenarios.length - 1
        ? '<div class="rail-card rail-card--ready">'
          + '<div class="rail-card__flag">🚩</div>'
          + '<div class="rail-card__title">Ready for Land it</div>'
          + '<div class="rail-card__sub">Strong judgements turn analysis into exam-ready evaluation.</div>'
          + '</div>'
        : '';

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
        +     '<div class="link-rail__wgll">'
        +       wgllItems.map(function (p) {
                  return '<div class="link-rail__wgll-item"><span class="link-rail__wgll-icon">' + p.icon + '</span><span>' + p.text + '</span></div>';
                }).join('')
        +     '</div>'
        +   '</div>'
        +   readyLandIt
        + '</div>';
    }

    /* -------- handlers -------- */

    function attachHandlers() {
      /* tap [n] cloze chip → activate that blank */
      document.querySelectorAll('.judge-blank').forEach(function (el) {
        el.addEventListener('click', function () {
          if (state.revealed) return;
          var id = parseInt(el.getAttribute('data-blank'), 10);
          state.activeBlank = (state.activeBlank === id) ? null : id;
          render();
        });
      });

      /* tap an option in a bank row → fill that blank */
      document.querySelectorAll('.judge-option').forEach(function (el) {
        el.addEventListener('click', function () {
          if (state.revealed) return;
          var bId   = parseInt(el.getAttribute('data-blank'), 10);
          var optId = el.getAttribute('data-option');
          // toggle off if already selected
          if (state.blankAnswers[bId] === optId) {
            delete state.blankAnswers[bId];
          } else {
            state.blankAnswers[bId] = optId;
            // advance focus to next unfilled blank if any
            state.activeBlank = nextUnfilledBlank(bId);
          }
          render();
        });
      });

      /* check */
      var checkBtn = document.getElementById('check-btn');
      if (checkBtn) checkBtn.addEventListener('click', function () {
        if (!readyToCheck(currentScenario())) return;
        state.revealed = true;
        state.activeBlank = null;
        render();
        var rev = document.querySelector('.judge-reveal');
        if (rev) rev.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });

      /* next scenario */
      var nextBtn = document.getElementById('next-scenario');
      if (nextBtn) nextBtn.addEventListener('click', function () {
        state.scenarioIdx++;
        state.blankAnswers  = {};
        state.overallAnswer = null;
        state.activeBlank   = 1;
        state.revealed      = false;
        render();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });

      /* finish */
      var finishBtn = document.getElementById('finish-btn');
      if (finishBtn) finishBtn.addEventListener('click', function () {
        var sc = currentScenario();
        var summary = blankSummary(sc);
        try {
          var stored = JSON.parse(localStorage.getItem('econos_link_scores') || '{}');
          stored.judge = summary.correct;
          localStorage.setItem('econos_link_scores', JSON.stringify(stored));
          var u = Progress.getLinkUnlocked();
          Progress.setLinkUnlocked(Math.max(u, 4));
        } catch (e) {}
        TopicLoader.go(DATA.nextUrl || DATA.backUrl);
      });
    }

    function nextUnfilledBlank(currentId) {
      var sc = currentScenario();
      var n  = sc.blanks.length;
      var curPos = 0;
      for (var k = 0; k < n; k++) { if (sc.blanks[k].id === currentId) { curPos = k; break; } }
      for (var i = 1; i <= n; i++) {
        var b = sc.blanks[(curPos + i) % n];
        if (!state.blankAnswers[b.id]) return b.id;
      }
      return null;
    }

    render();
  };
})();
