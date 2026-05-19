/* ============================================================
   ECONOS — Link It engine (Make the Judgement station)
   ============================================================ */

(function () {
  'use strict';

  window.bootLinkJudge = function () {
    try { if (parseInt(localStorage.getItem('econos_link_unlocked') || '-1', 10) < 3) { TopicLoader.go(TopicLoader.buildUrl('link_context.html')); return; } } catch (e) {}

    var I    = window.ECONOS_ICONS;
    var DATA = window.ECONOS_LINK_JUDGE;

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

    function isOverallCorrect(sc) {
      var opts = sc.overallPosition.options;
      var sel  = state.overallAnswer;
      for (var i = 0; i < opts.length; i++) {
        if (opts[i].id === sel) return !!opts[i].correct;
      }
      return false;
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
      var unlockedIdx = (function () { try { return parseInt(localStorage.getItem('econos_link_unlocked') || '-1', 10); } catch (e) { return -1; } })();
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
        + '<aside class="right-rail">'
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
        + '</aside>';
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
          var u = parseInt(localStorage.getItem('econos_link_unlocked') || '-1', 10);
          localStorage.setItem('econos_link_unlocked', String(Math.max(u, 4)));
        } catch (e) {}
        TopicLoader.go(DATA.nextUrl || DATA.backUrl);
      });
    }

    function nextUnfilledBlank(currentId) {
      var sc = currentScenario();
      for (var i = 0; i < sc.blanks.length; i++) {
        var idx = (currentId + i) % sc.blanks.length;
        var b = sc.blanks[idx];
        if (b.id !== currentId && !state.blankAnswers[b.id]) return b.id;
      }
      return null;
    }

    render();
  };
})();
