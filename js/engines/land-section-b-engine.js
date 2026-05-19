/* ============================================================
   ECONOS — Land It · Section B renderer
   ============================================================ */

(function () {
  'use strict';

  window.bootLandSectionB = function () {
    var I = window.ECONOS_ICONS;
    var T = window.ECONOS_LAND_SECTION_B;

    /* Filter parts to only the mark values the user selected in the configurator. */
    try {
      var sess = JSON.parse(localStorage.getItem('econosLandSession') || '{}');
      if (sess.bMarks && sess.bMarks.length) {
        var allowed = {};
        for (var bi = 0; bi < sess.bMarks.length; bi++) { allowed[sess.bMarks[bi]] = true; }
        var filtered = [];
        for (var pi = 0; pi < T.question.parts.length; pi++) {
          if (allowed[T.question.parts[pi].marks]) { filtered.push(T.question.parts[pi]); }
        }
        if (filtered.length > 0) {
          T.question.parts = filtered;
          var newTotal = 0;
          for (var mi = 0; mi < filtered.length; mi++) { newTotal += filtered[mi].marks; }
          T.question.marks = newTotal;
        }
      }
    } catch (e) { /* ignore */ }

    var state = {
      text:     {},     /* partId → string                     */
      diagrams: {},     /* partId → data URL                   */
      revealed: false
    };

    /* ── sidebar ─────────────────────────────────────────── */

    /* ── topbar ──────────────────────────────────────────── */

    /* ── right rail ──────────────────────────────────────── */

    function renderRightRail() {
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

      return Shell.renderStages(['done', 'done', 'current'], 'Your Land It progress')
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
        + renderDiagramZone(part.id)
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
        'A': { label: 'Section A', href: TopicLoader.buildUrl('land_section_a.html') },
        'B': { label: 'Section B', href: TopicLoader.buildUrl('land_section_b.html') },
        'C': { label: 'Section C', href: TopicLoader.buildUrl('land_section_c.html') }
      };
      return map[next] || null;
    }

    function renderBottomBar(currentSection, revealLabelPre, revealLabelPost) {
      var next = getNextSection(currentSection);
      var revealBtnCls  = 'btn btn--ghost btn--lg' + (state.revealed ? ' is-disabled' : '');
      var revealLabel   = state.revealed ? revealLabelPost : revealLabelPre;
      var continueHref  = next ? next.href : TopicLoader.buildUrl('land_complete.html');
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
        +   Shell.renderSidebar({ activeNav: 'My topics' })
        +   '<div id="main-content" class="main" tabindex="-1" role="main">'
        +     Shell.renderTopbar({ backUrl: T.backUrl, sessionLabel: T.sessionLabel || TopicLoader.sessionLabel('land'), topicTitle: T.topic })
        +     '<div class="page">'
        +       renderMain()
        +       '<div class="right-rail">' + renderRightRail() + '</div>'
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

      /* continue / finish — save timing + attempted status */
      var continueBtn = document.getElementById('js-continue-btn');
      if (continueBtn) {
        continueBtn.addEventListener('click', function () {
          var tas = document.querySelectorAll('[data-ta]');
          var attempted = false;
          for (var i = 0; i < tas.length; i++) {
            if (tas[i].value && tas[i].value.replace(/\s+/g, '').length > 20) { attempted = true; break; }
          }
          saveSectionEnd('B', { attempted: attempted });
          TopicLoader.go(continueBtn.getAttribute('data-href'));
        });
      }

      /* diagram file inputs */
      var diagInputs = root.querySelectorAll('[data-diag-input]');
      for (var di = 0; di < diagInputs.length; di++) { attachDiagramInput(diagInputs[di]); }

      /* diagram remove buttons */
      var diagRemoves = root.querySelectorAll('[data-diag-remove]');
      for (var dr = 0; dr < diagRemoves.length; dr++) { attachDiagramRemove(diagRemoves[dr]); }

      window.addEventListener('scroll', updateNav, { passive: true });
    }

    saveSectionStart('B');
    render();
  };
})();
