/* ============================================================
   ECONOS — Land It · Section B renderer
   ============================================================ */

(function () {
  'use strict';

  window.bootLandSectionB = function () {
    var I = window.ECONOS_ICONS;
    var T = window.ECONOS_LAND_SECTION_B;

    var state = {
      text:     {},     /* partId → string                     */
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

      var totalMarks = T.question.marks;
      var totalParts = T.question.parts.length;
      var approxMins = Math.round((totalMarks * 1.2) / 10) * 10;
      var approxStr  = approxMins < 60
        ? approxMins + ' min'
        : Math.floor(approxMins / 60) + 'h' + (approxMins % 60 > 0 ? ' ' + (approxMins % 60) + 'm' : '');

      var thisSectionHtml = '<div class="land-this-section">'
        + '<div class="land-this-section__title">This section</div>'
        + '<div class="land-this-section__row">'
        +   '<span class="land-this-section__icon land-this-section__icon--b">B</span>'
        +   '<span class="land-this-section__label">Section B &mdash; Extended response</span>'
        + '</div>'
        + '<div class="land-this-section__meta">'
        +   '<div class="land-this-section__meta-item">' + I.topics + '<span>' + totalParts + ' parts</span></div>'
        +   '<div class="land-this-section__meta-item">' + I.target + '<span>' + totalMarks + ' marks</span></div>'
        +   '<div class="land-this-section__meta-item">' + I.clock  + '<span>Approx. ' + approxStr + '</span></div>'
        + '</div>'
        + '</div>';

      var navHtml = '<div class="land-q-nav">'
        + '<div class="land-q-nav__title">Part navigator</div>'
        + T.question.parts.map(function (p, idx) {
            var cls = 'land-q-nav__item' + (idx === 0 ? ' is-current' : '');
            var badge = idx === 0 ? 'Current' : 'Next';
            var badgeCls = 'land-q-nav__badge' + (idx === 0 ? '' : ' land-q-nav__badge--next');
            return '<a href="#' + p.id + '" class="' + cls + '">'
              + '<span class="land-q-nav__label">Part ' + p.letter + ' &middot; ' + p.marks + ' marks</span>'
              + '<span class="' + badgeCls + '">' + badge + '</span>'
              + '</a>';
          }).join('')
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
        + navHtml
        + strongHtml;
    }

    /* ── context pack (collapsible extracts) ─────────────── */

    function renderContextPack() {
      var pack = T.contextPack;

      var extractsHtml = pack.extracts.map(function (ex) {
        var tagsHtml = '';
        if (ex.tags && ex.tags.length) {
          tagsHtml = '<div class="land-extract-tags">'
            + ex.tags.map(function (t) {
                return '<span class="land-extract-tag">' + t + '</span>';
              }).join('')
            + '</div>';
        }
        var paraHtml = ex.paragraphs.map(function (p) {
          return '<p class="land-extract-acc__paragraph">' + p + '</p>';
        }).join('');
        var openAttr = ex.defaultOpen ? ' open' : '';
        return '<details class="land-extract-acc"' + openAttr + '>'
          + '<summary class="land-extract-acc__summary">'
          +   '<span class="land-extract-acc__title">'
          +     '<span class="land-extract-acc__label">' + ex.label + '</span>'
          +     '<span class="land-extract-acc__name"> &mdash; ' + ex.title + '</span>'
          +   '</span>'
          +   '<span class="land-extract-acc__chev">' + I.chevDown + '</span>'
          + '</summary>'
          + '<div class="land-extract-acc__body">'
          +   paraHtml
          +   tagsHtml
          + '</div>'
          + '</details>';
      }).join('');

      return '<div class="land-context-pack">'
        + '<div class="land-context-pack__head">'
        +   '<span class="land-context-pack__icon">' + I.bookmark + '</span>'
        +   '<span class="land-context-pack__title">' + pack.title + '</span>'
        + '</div>'
        + '<div class="land-context-pack__body">' + extractsHtml + '</div>'
        + '</div>';
    }

    /* ── question part (freetext only, with tips) ───────── */

    function renderPart(part) {
      var stored = state.text[part.id] || '';

      var tipsHtml = '';
      if (part.tips && part.tips.length) {
        var bullets = part.tips.map(function (t) {
          return '<li>' + t + '</li>';
        }).join('');
        tipsHtml = '<details class="land-tips-details">'
          + '<summary class="land-tips-summary">'
          +   '<span class="land-tips-summary__icon">' + I.bulb + '</span>'
          +   '<span class="land-tips-summary__label">Show tips for this part</span>'
          + '</summary>'
          + '<ul class="land-tips-list">' + bullets + '</ul>'
          + '</details>';
      }

      var modelHtml = '';
      if (state.revealed && part.modelAnswer) {
        modelHtml = '<div class="land-part-model">'
          + '<div class="land-part-model__label">Model answer</div>'
          + '<div class="land-part-model__text">' + part.modelAnswer + '</div>'
          + '</div>';
      }

      var letterHtml = part.letter ? '<span class="land-part__letter">(' + part.letter + ')</span>' : '';
      var marksTxt   = '(' + part.marks + ' mark' + (part.marks > 1 ? 's' : '') + ')';

      return '<div class="land-part" id="' + part.id + '">'
        + '<div class="land-part__stem">'
        +   letterHtml
        +   '<span class="land-part__stem-text">' + part.stem + '</span>'
        +   '<span class="land-part__marks">' + marksTxt + '</span>'
        + '</div>'
        + '<textarea class="land-freetext-ta land-freetext-ta--lg" data-ta="' + part.id + '" rows="8" placeholder="Write your answer here…">' + stored + '</textarea>'
        + tipsHtml
        + modelHtml
        + '</div>';
    }

    /* ── question card ──────────────────────────────────── */

    function renderQuestion() {
      var q = T.question;
      var partsHtml = q.parts.map(function (p) { return renderPart(p); }).join('');

      return '<div class="land-q-card" id="' + q.id + '">'
        + '<div class="land-q-card__head">'
        +   '<div>'
        +     '<div class="land-q-card__title">' + q.title + '</div>'
        +     '<div class="land-q-card__subtitle">' + q.subtitle + '</div>'
        +   '</div>'
        +   '<span class="land-q-marks">' + q.marks + ' marks</span>'
        + '</div>'
        + '<div class="land-q-card__body land-q-card__body--stack">'
        +   '<div class="land-q-parts">' + partsHtml + '</div>'
        + '</div>'
        + '</div>';
    }

    /* ── progress ───────────────────────────────────────── */

    function countAnswered() {
      var n = 0;
      for (var i = 0; i < T.question.parts.length; i++) {
        var p = T.question.parts[i];
        var v = state.text[p.id];
        if (v && v.replace(/\s+/g, '').length > 10) { n++; }
      }
      return n;
    }

    function renderProgress() {
      var total = T.question.parts.length;
      var done  = countAnswered();
      var pct   = total > 0 ? Math.round(done / total * 100) : 0;
      return '<div class="land-progress-card">'
        + '<div class="land-progress-card__row">'
        +   '<div class="land-progress-card__icon">' + I.target + '</div>'
        +   '<div class="land-progress-card__label">Section B of your Land It session</div>'
        +   '<div class="land-progress-card__count">' + done + ' of ' + total + ' parts</div>'
        + '</div>'
        + '<div class="land-progress-bar"><div class="land-progress-bar__fill" style="width:' + pct + '%"></div></div>'
        + '</div>';
    }

    /* ── page assembly ──────────────────────────────────── */

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
      var revealBtnCls = 'btn btn--ghost btn--lg' + (state.revealed ? ' is-disabled' : '');
      var revealLabel  = state.revealed ? revealLabelPost : revealLabelPre;
      var continueBtn  = next
        ? '<a href="' + next.href + '" class="btn btn--primary btn--lg">Continue to ' + next.label + ' ' + I.arrowRight + '</a>'
        : '<a href="' + T.backUrl + '" class="btn btn--primary btn--lg">Finish &amp; return to Land It ' + I.arrowRight + '</a>';
      return '<div class="land-bottom-bar">'
        +   '<a href="' + T.backUrl + '" class="btn btn--ghost">← Back to Land It</a>'
        +   '<button id="js-reveal-btn" class="' + revealBtnCls + '">' + revealLabel + '</button>'
        +   continueBtn
        + '</div>';
    }

    function renderMain() {
      return '<div class="land-main">'
        + '<div class="land-section-header">'
        +   '<span class="land-section-badge">Section B &mdash; Extended response</span>'
        +   '<h1 class="land-section-title">Use the context, then build the answer</h1>'
        +   '<p class="land-section-desc">' + T.contextPack.intro + '</p>'
        + '</div>'
        + renderProgress()
        + renderContextPack()
        + renderQuestion()
        + renderBottomBar('B', 'Reveal model answers', 'Model answers shown')
        + '</div>';
    }

    /* ── full render ────────────────────────────────────── */

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
      updateNav();
    }

    /* ── handlers ───────────────────────────────────────── */

    function captureTextValues() {
      var tas = document.querySelectorAll('[data-ta]');
      for (var i = 0; i < tas.length; i++) {
        state.text[tas[i].getAttribute('data-ta')] = tas[i].value;
      }
    }

    function updateProgressUi() {
      var root = document.getElementById('app-root');
      var total = T.question.parts.length;
      var done  = countAnswered();
      var prog  = root.querySelector('.land-progress-bar__fill');
      if (prog) { prog.style.width = (total > 0 ? Math.round(done / total * 100) : 0) + '%'; }
      var countEl = root.querySelector('.land-progress-card__count');
      if (countEl) { countEl.textContent = done + ' of ' + total + ' parts'; }
    }

    function updateNav() {
      var navItems = document.querySelectorAll('.land-q-nav__item');
      if (!navItems.length) { return; }
      for (var i = 0; i < navItems.length; i++) {
        navItems[i].classList.remove('is-current');
        var badge = navItems[i].querySelector('.land-q-nav__badge');
        if (badge) {
          badge.classList.add('land-q-nav__badge--next');
          badge.textContent = 'Next';
        }
      }
      var activeIdx = 0;
      for (var j = 0; j < T.question.parts.length; j++) {
        var el = document.getElementById(T.question.parts[j].id);
        if (el && el.getBoundingClientRect().top < 240) { activeIdx = j; }
      }
      var activeItem = navItems[activeIdx];
      if (activeItem) {
        activeItem.classList.add('is-current');
        var activeBadge = activeItem.querySelector('.land-q-nav__badge');
        if (activeBadge) {
          activeBadge.classList.remove('land-q-nav__badge--next');
          activeBadge.textContent = 'Current';
        }
      }
    }

    function attachHandlers() {
      var root = document.getElementById('app-root');

      /* live progress as the student writes */
      var tas = root.querySelectorAll('[data-ta]');
      for (var i = 0; i < tas.length; i++) {
        (function (ta) {
          ta.addEventListener('input', function () {
            state.text[ta.getAttribute('data-ta')] = ta.value;
            updateProgressUi();
          });
        })(tas[i]);
      }

      /* reveal model answers */
      var revealBtn = document.getElementById('js-reveal-btn');
      if (revealBtn) {
        revealBtn.addEventListener('click', function () {
          if (state.revealed) { return; }
          captureTextValues();
          state.revealed = true;
          render();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      }

      window.addEventListener('scroll', updateNav, { passive: true });
    }

    render();
  };
})();
