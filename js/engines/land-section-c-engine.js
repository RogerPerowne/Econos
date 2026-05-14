/* ============================================================
   ECONOS — Land It · Section C renderer (single essay)
   ============================================================ */

(function () {
  'use strict';

  window.bootLandSectionC = function () {
    var I = window.ECONOS_ICONS;
    var T = window.ECONOS_LAND_SECTION_C;

    var state = {
      text:     '',
      diagrams: {},     /* 'essay' → data URL */
      revealed: false
    };

    /* ── sidebar ─────────────────────────────────────────── */

    function renderSidebar() {
      var nav = [
        { name: 'Home',          icon: I.home,     href: 'index.html', active: false },
        { name: 'My topics',     icon: I.topics,   href: '#',          active: true  },
        { name: 'Progress',      icon: I.progress, href: '#',          active: false },
        { name: 'Exam practice', icon: I.practice, href: '#',          active: false },
        { name: 'Settings',      icon: I.settings, href: '#',          active: false }
      ];
      return '<aside class="sidebar">'
        + '<div class="sidebar__brand">'
        +   '<a href="index.html" class="sidebar__logo-link"><img src="assets/econos-logo-full.png" alt="econos" class="sidebar__logo-full"></a>'
        + '</div>'
        + '<nav class="sidebar__nav">'
        +   nav.map(function (n) {
              return '<a href="' + n.href + '" class="' + (n.active ? 'is-active' : '') + '">' + n.icon + '<span>' + n.name + '</span></a>';
            }).join('')
        + '</nav>'
        + '<div class="sidebar__streak">'
        +   '<div class="sidebar__streak-row"><span class="sidebar__streak-flame">🔥</span><span class="sidebar__streak-num">1</span></div>'
        +   '<div class="sidebar__streak-label">Day streak</div>'
        +   '<div class="sidebar__streak-sub">Keep it going!</div>'
        + '</div>'
        + '<div class="sidebar__user">'
        +   '<div class="sidebar__user-avatar">AB</div>'
        +   '<div class="sidebar__user-info">'
        +     '<div class="sidebar__user-name">Alex Bennett</div>'
        +     '<div class="sidebar__user-role">A-Level Economics</div>'
        +   '</div>'
        +   '<div class="sidebar__user-chev">' + I.chevDown + '</div>'
        + '</div>'
        + '</aside>';
    }

    /* ── topbar ──────────────────────────────────────────── */

    function renderTopbar() {
      return '<header class="topbar">'
        +   '<a href="' + T.backUrl + '" class="topbar__back">' + I.arrowLeft + '</a>'
        +   '<div class="topbar__crumbs">'
        +     '<div class="topbar__session-label">' + T.sessionLabel + '</div>'
        +     '<div class="topbar__topic-title">' + T.topic + '</div>'
        +   '</div>'
        +   '<div class="topbar__right">'
        +     '<div class="topbar__streak"><span class="topbar__streak-icon">🔥</span><span>1 day streak</span></div>'
        +     '<div class="topbar__avatar"><div class="topbar__avatar-circle">AB</div><span class="topbar__avatar-chev">' + I.chevDown + '</span></div>'
        +   '</div>'
        + '</header>';
    }

    /* ── right rail ──────────────────────────────────────── */

    function renderRightRail() {
      var stages = [
        { num: 1, name: 'Learn it', sub: 'Recap and lock in the content', state: 'done',    href: 'topic_inflation.html'      },
        { num: 2, name: 'Link it',  sub: 'Apply skills with the context', state: 'done',    href: 'link_inflation_intro.html' },
        { num: 3, name: 'Land it',  sub: 'Tackle real exam questions',    state: 'current'                                    }
      ];

      var stagesHtml = stages.map(function (s) {
        var cls = 'stage'
          + (s.state === 'done'    ? ' is-done'    : '')
          + (s.state === 'current' ? ' is-current' : '');
        var numHtml = s.state === 'done' ? I.check : s.num;
        var chipHtml = s.state === 'done'
          ? '<span class="stage__chip stage__chip--done">Done</span>'
          : (s.state === 'current' ? '<span class="stage__chip">Current</span>' : '');
        var inner = '<div class="stage__num">' + numHtml + '</div>'
          + '<div class="stage__body">'
          +   '<div class="stage__name">' + s.name + '</div>'
          +   '<div class="stage__sub">' + s.sub + '</div>'
          +   chipHtml
          + '</div>';
        return s.href && s.state !== 'current'
          ? '<a href="' + s.href + '" class="' + cls + '">' + inner + '</a>'
          : '<div class="' + cls + '">' + inner + '</div>';
      }).join('');

      var mins = T.question.suggestedMinutes;
      var minsStr = mins < 60 ? mins + ' min' : Math.floor(mins / 60) + 'h' + (mins % 60 > 0 ? ' ' + (mins % 60) + 'm' : '');

      var thisSectionHtml = '<div class="land-this-section">'
        + '<div class="land-this-section__title">This section</div>'
        + '<div class="land-this-section__row">'
        +   '<span class="land-this-section__icon land-this-section__icon--c">C</span>'
        +   '<span class="land-this-section__label">Section C &mdash; Essay</span>'
        + '</div>'
        + '<div class="land-this-section__meta">'
        +   '<div class="land-this-section__meta-item">' + I.topics + '<span>1 essay</span></div>'
        +   '<div class="land-this-section__meta-item">' + I.target + '<span>' + T.question.marks + ' marks</span></div>'
        +   '<div class="land-this-section__meta-item">' + I.clock  + '<span>Approx. ' + minsStr + '</span></div>'
        + '</div>'
        + '</div>';

      var strongHtml = '';
      if (T.strongAnswers && T.strongAnswers.length) {
        strongHtml = '<div class="land-strong-answers">'
          + '<div class="land-strong-answers__title">What strong answers do</div>'
          + T.strongAnswers.map(function (s) {
              return '<div class="land-strong-answers__item">'
                + '<span class="land-strong-answers__tick">' + I.check + '</span>'
                + '<span>' + s + '</span>'
                + '</div>';
            }).join('')
          + '</div>';
      }

      return '<div class="stages">'
        +   '<div class="stages__title">Your Land It progress</div>'
        +   stagesHtml
        + '</div>'
        + thisSectionHtml
        + strongHtml;
    }

    /* ── diagram attachment ──────────────────────────────── */

    function renderDiagramZone(partId) {
      var dataUrl = state.diagrams[partId];
      var inner = '';
      if (dataUrl) {
        inner = '<div class="land-diagram-zone__preview-wrap">'
          + '<img src="' + dataUrl + '" class="land-diagram-zone__img" alt="Your diagram">'
          + '<button class="land-diagram-zone__remove" data-diag-remove="' + partId + '">× Remove diagram</button>'
          + '</div>';
      } else {
        inner = '<input type="file" accept="image/*" class="land-diagram-zone__input" id="diag-input-' + partId + '" data-diag-input="' + partId + '">'
          + '<label for="diag-input-' + partId + '" class="land-diagram-btn">'
          +   '<span class="land-diagram-btn__icon">&#x1F4CE;</span>'
          +   '<span>Add diagram</span>'
          + '</label>';
      }
      return '<div class="land-diagram-zone" id="diag-zone-' + partId + '">' + inner + '</div>';
    }

    function updateDiagramZoneContent(partId) {
      var zone = document.getElementById('diag-zone-' + partId);
      if (!zone) { return; }
      var dataUrl = state.diagrams[partId];
      if (dataUrl) {
        zone.innerHTML = '<div class="land-diagram-zone__preview-wrap">'
          + '<img src="' + dataUrl + '" class="land-diagram-zone__img" alt="Your diagram">'
          + '<button class="land-diagram-zone__remove" data-diag-remove="' + partId + '">× Remove diagram</button>'
          + '</div>';
      } else {
        zone.innerHTML = '<input type="file" accept="image/*" class="land-diagram-zone__input" id="diag-input-' + partId + '" data-diag-input="' + partId + '">'
          + '<label for="diag-input-' + partId + '" class="land-diagram-btn">'
          +   '<span class="land-diagram-btn__icon">&#x1F4CE;</span>'
          +   '<span>Add diagram</span>'
          + '</label>';
      }
      var newInput = zone.querySelector('[data-diag-input]');
      if (newInput) { attachDiagramInput(newInput); }
      var removeBtn = zone.querySelector('[data-diag-remove]');
      if (removeBtn) { attachDiagramRemove(removeBtn); }
    }

    function attachDiagramInput(inp) {
      inp.addEventListener('change', function () {
        var partId = inp.getAttribute('data-diag-input');
        var file = inp.files && inp.files[0];
        if (!file) { return; }
        var reader = new FileReader();
        reader.onload = function (e) {
          state.diagrams[partId] = e.target.result;
          updateDiagramZoneContent(partId);
        };
        reader.readAsDataURL(file);
      });
    }

    function attachDiagramRemove(btn) {
      btn.addEventListener('click', function () {
        var partId = btn.getAttribute('data-diag-remove');
        state.diagrams[partId] = null;
        updateDiagramZoneContent(partId);
      });
    }

    /* ── essay question ──────────────────────────────────── */

    function renderQuestion() {
      var q = T.question;

      var tipsHtml = '';
      if (q.structureTips && q.structureTips.length) {
        var bullets = q.structureTips.map(function (t) {
          return '<li>' + t + '</li>';
        }).join('');
        tipsHtml = '<details class="land-tips-details land-tips-details--essay">'
          + '<summary class="land-tips-summary">'
          +   '<span class="land-tips-summary__icon">' + I.bulb + '</span>'
          +   '<span class="land-tips-summary__label">Show essay structure tips</span>'
          + '</summary>'
          + '<ul class="land-tips-list">' + bullets + '</ul>'
          + '</details>';
      }

      var modelHtml = '';
      if (state.revealed && q.modelAnswer) {
        modelHtml = '<div class="land-part-model land-part-model--essay">'
          + '<div class="land-part-model__label">Model answer</div>'
          + '<div class="land-part-model__text">' + q.modelAnswer + '</div>'
          + '</div>';
      }

      return '<div class="land-essay-card" id="' + q.id + '">'
        + '<div class="land-essay-card__head">'
        +   '<span class="land-essay-card__command">' + q.commandWord + '</span>'
        +   '<span class="land-essay-card__marks">' + q.marks + ' marks &middot; ~' + q.suggestedMinutes + ' min</span>'
        + '</div>'
        + '<div class="land-essay-card__stem">' + q.stem + '</div>'
        + '<textarea class="land-freetext-ta land-freetext-ta--essay" data-ta="essay" rows="16" placeholder="Plan your structure, then write your essay here…">' + state.text + '</textarea>'
        + renderDiagramZone('essay')
        + tipsHtml
        + modelHtml
        + '</div>';
    }

    /* ── progress ───────────────────────────────────────── */

    function renderProgress() {
      var v = state.text;
      var done = (v && v.replace(/\s+/g, '').length > 50) ? 1 : 0;
      var pct = done * 100;
      return '<div class="land-progress-card">'
        + '<div class="land-progress-card__row">'
        +   '<div class="land-progress-card__icon">' + I.target + '</div>'
        +   '<div class="land-progress-card__label">Section C of your Land It session</div>'
        +   '<div class="land-progress-card__count">' + done + ' of 1 essay</div>'
        + '</div>'
        + '<div class="land-progress-bar"><div class="land-progress-bar__fill" style="width:' + pct + '%"></div></div>'
        + '</div>';
    }

    /* ── page assembly ──────────────────────────────────── */

    function saveSectionStart(letter) {
      var d = {};
      try { d = JSON.parse(localStorage.getItem('econosLandResults') || '{}'); } catch (e) {}
      if (!d[letter]) { d[letter] = {}; }
      d[letter].startMs = Date.now();
      try { localStorage.setItem('econosLandResults', JSON.stringify(d)); } catch (e) {}
    }
    function saveSectionEnd(letter, extra) {
      var d = {};
      try { d = JSON.parse(localStorage.getItem('econosLandResults') || '{}'); } catch (e) {}
      if (!d[letter]) { d[letter] = {}; }
      d[letter].endMs = Date.now();
      if (extra) { for (var k in extra) { if (extra.hasOwnProperty(k)) { d[letter][k] = extra[k]; } } }
      try { localStorage.setItem('econosLandResults', JSON.stringify(d)); } catch (e) {}
    }

    function getNextSection(current) {
      var session = null;
      try { session = JSON.parse(localStorage.getItem('econosLandSession') || 'null'); } catch (e) {}
      if (!session || !session.sections || !session.sections.length) { return null; }
      var idx = session.sections.indexOf(current);
      if (idx === -1 || idx === session.sections.length - 1) { return null; }
      var next = session.sections[idx + 1];
      var map = {
        'A': { label: 'Section A', href: 'land_inflation_section_a.html' },
        'B': { label: 'Section B', href: 'land_inflation_section_b.html' },
        'C': { label: 'Section C', href: 'land_inflation_section_c.html' }
      };
      return map[next] || null;
    }

    function renderBottomBar(currentSection, revealLabelPre, revealLabelPost) {
      var next = getNextSection(currentSection);
      var revealBtnCls  = 'btn btn--ghost btn--lg' + (state.revealed ? ' is-disabled' : '');
      var revealLabel   = state.revealed ? revealLabelPost : revealLabelPre;
      var continueHref  = next ? next.href : 'land_inflation_complete.html';
      var continueLabel = next ? ('Continue to ' + next.label) : 'Finish &amp; see results';
      var continueBtn   = '<button id="js-continue-btn" data-href="' + continueHref + '" class="btn btn--primary btn--lg">' + continueLabel + ' ' + I.arrowRight + '</button>';
      return '<div class="land-bottom-bar">'
        +   '<a href="' + T.backUrl + '" class="btn btn--ghost">← Back to Land It</a>'
        +   '<button id="js-reveal-btn" class="' + revealBtnCls + '">' + revealLabel + '</button>'
        +   continueBtn
        + '</div>';
    }

    function renderMain() {
      return '<div class="land-main">'
        + '<div class="land-section-header">'
        +   '<span class="land-section-badge">Section C &mdash; Essay</span>'
        +   '<h1 class="land-section-title">Build a structured, supported argument</h1>'
        +   '<p class="land-section-desc">A single 25-mark synoptic essay drawing on the whole topic. Plan your structure first &mdash; then write a balanced, well-evidenced argument that reaches a clear judgement.</p>'
        + '</div>'
        + renderProgress()
        + renderQuestion()
        + renderBottomBar('C', 'Reveal model answer', 'Model answer shown')
        + '</div>';
    }

    function render() {
      document.getElementById('app-root').innerHTML = ''
        + '<div class="app theme--land">'
        +   renderSidebar()
        +   '<div class="main">'
        +     renderTopbar()
        +     '<div class="page">'
        +       renderMain()
        +       '<aside class="right-rail">' + renderRightRail() + '</aside>'
        +     '</div>'
        +   '</div>'
        + '</div>';
      attachHandlers();
    }

    /* ── handlers ───────────────────────────────────────── */

    function updateProgressUi() {
      var root = document.getElementById('app-root');
      var v = state.text;
      var done = (v && v.replace(/\s+/g, '').length > 50) ? 1 : 0;
      var pct  = done * 100;
      var prog = root.querySelector('.land-progress-bar__fill');
      if (prog) { prog.style.width = pct + '%'; }
      var countEl = root.querySelector('.land-progress-card__count');
      if (countEl) { countEl.textContent = done + ' of 1 essay'; }
    }

    function attachHandlers() {
      var root = document.getElementById('app-root');

      var ta = root.querySelector('[data-ta="essay"]');
      if (ta) {
        ta.addEventListener('input', function () {
          state.text = ta.value;
          updateProgressUi();
        });
      }

      var revealBtn = document.getElementById('js-reveal-btn');
      if (revealBtn) {
        revealBtn.addEventListener('click', function () {
          if (state.revealed) { return; }
          if (ta) { state.text = ta.value; }
          state.revealed = true;
          render();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      }

      /* continue / finish — save timing + attempted status */
      var continueBtn = document.getElementById('js-continue-btn');
      if (continueBtn) {
        continueBtn.addEventListener('click', function () {
          var attempted = state.text && state.text.replace(/\s+/g, '').length > 20;
          saveSectionEnd('C', { attempted: attempted });
          window.location.href = continueBtn.getAttribute('data-href');
        });
      }

      /* diagram file inputs */
      var diagInputs = root.querySelectorAll('[data-diag-input]');
      for (var di = 0; di < diagInputs.length; di++) { attachDiagramInput(diagInputs[di]); }

      /* diagram remove buttons */
      var diagRemoves = root.querySelectorAll('[data-diag-remove]');
      for (var dr = 0; dr < diagRemoves.length; dr++) { attachDiagramRemove(diagRemoves[dr]); }
    }

    saveSectionStart('C');
    render();
  };
})();
