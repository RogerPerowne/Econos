/* ============================================================
   ECONOS — Land It · Section A renderer
   ============================================================ */

(function () {
  'use strict';

  window.bootLandSectionA = function () {
    var I = window.ECONOS_ICONS;
    var T = window.ECONOS_LAND_SECTION_A;

    /* Limit to the number of questions the user selected in the configurator. */
    try {
      var sess = JSON.parse(localStorage.getItem('econosLandSession') || '{}');
      var aCount = (typeof sess.aCount === 'number' && sess.aCount > 0) ? sess.aCount : T.questions.length;
      if (aCount < T.questions.length) { T.questions = T.questions.slice(0, aCount); }
    } catch (e) { /* ignore */ }

    var state = {
      mcq:      {},    /* partId → selectedOptionId */
      text:     {},    /* inputId → string value    */
      diagrams: {},    /* partId → data URL         */
      revealed: false
    };

    /* ── inline inflation SVG chart ─────────────────────── */

    function buildInflationChart() {
      /* viewBox 0 0 410 230
         chart area x:[60,390], y:[20,175]
         0% = y155, 1% = 20px up → y = 155 - value*20
         40 months Sep 2011–Dec 2014, x step = 8.25px */
      var cpi  = '60,51 68,55 77,59 85,71 93,83 102,87 110,85 118,95 127,99 135,103 143,103 152,105 160,111 168,101 177,101 185,101 193,101 202,99 210,99 218,103 227,101 235,97 243,99 252,101 260,101 268,111 277,113 285,115 293,117 302,121 310,123 318,119 327,125 335,117 343,123 352,125 360,131 368,129 377,135 390,145';
      var food = '60,43 68,45 77,51 85,59 93,75 102,79 110,71 118,83 127,91 135,99 143,107 152,109 160,117 168,103 177,101 185,105 193,105 202,99 210,97 218,109 227,105 235,99 243,101 252,107 260,109 268,123 277,129 285,139 293,145 302,151 310,153 318,149 327,157 335,147 343,161 352,163 360,171 368,173 377,181 390,173';
      var othr = '60,99 68,99 77,101 85,103 93,105 102,107 110,109 118,107 127,105 135,109 143,109 152,111 160,111 168,109 177,109 185,109 193,109 202,111 210,111 218,109 227,109 235,107 243,109 252,111 260,111 268,117 277,119 285,123 293,121 302,125 310,127 318,123 327,127 335,123 343,125 352,127 360,129 368,129 377,135 390,137';

      return '<svg viewBox="0 0 410 228" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:Inter,sans-serif">'

        /* chart title */
        + '<text x="60" y="13" font-size="10" fill="#4B5563" font-weight="600">UK inflation (annual % change)</text>'

        /* horizontal grid lines & y labels */
        + '<line x1="60" y1="175" x2="390" y2="175" stroke="#E7E7EA" stroke-width="0.8"/>'
        + '<text x="54" y="178" font-size="9" fill="#9CA3AF" text-anchor="end">-1</text>'
        + '<line x1="60" y1="155" x2="390" y2="155" stroke="#6B7280" stroke-width="0.8"/>'
        + '<text x="54" y="158" font-size="9" fill="#374151" text-anchor="end">0</text>'
        + '<line x1="60" y1="135" x2="390" y2="135" stroke="#E7E7EA" stroke-width="0.8"/>'
        + '<text x="54" y="138" font-size="9" fill="#9CA3AF" text-anchor="end">1</text>'
        + '<line x1="60" y1="115" x2="390" y2="115" stroke="#E7E7EA" stroke-width="0.8"/>'
        + '<text x="54" y="118" font-size="9" fill="#9CA3AF" text-anchor="end">2</text>'
        + '<line x1="60" y1="95" x2="390" y2="95" stroke="#E7E7EA" stroke-width="0.8"/>'
        + '<text x="54" y="98" font-size="9" fill="#9CA3AF" text-anchor="end">3</text>'
        + '<line x1="60" y1="75" x2="390" y2="75" stroke="#E7E7EA" stroke-width="0.8"/>'
        + '<text x="54" y="78" font-size="9" fill="#9CA3AF" text-anchor="end">4</text>'
        + '<line x1="60" y1="55" x2="390" y2="55" stroke="#E7E7EA" stroke-width="0.8"/>'
        + '<text x="54" y="58" font-size="9" fill="#9CA3AF" text-anchor="end">5</text>'
        + '<line x1="60" y1="35" x2="390" y2="35" stroke="#E7E7EA" stroke-width="0.8"/>'
        + '<text x="54" y="38" font-size="9" fill="#9CA3AF" text-anchor="end">6</text>'

        /* y-axis spine */
        + '<line x1="60" y1="20" x2="60" y2="175" stroke="#D1D1D6" stroke-width="1"/>'

        /* x axis labels */
        + '<text x="60"  y="190" font-size="9" fill="#4B5563" text-anchor="middle">Sep 2011</text>'
        + '<text x="93"  y="190" font-size="9" fill="#9CA3AF" text-anchor="middle">Jan 2012</text>'
        + '<text x="192" y="190" font-size="9" fill="#9CA3AF" text-anchor="middle">Jan 2013</text>'
        + '<text x="291" y="190" font-size="9" fill="#9CA3AF" text-anchor="middle">Jan 2014</text>'
        + '<text x="390" y="190" font-size="9" fill="#9CA3AF" text-anchor="middle">Jan 2015</text>'

        /* x label */
        + '<text x="225" y="203" font-size="9" fill="#6B7280" text-anchor="middle">Year</text>'

        /* y label (rotated) */
        + '<text transform="rotate(-90)" x="-105" y="14" font-size="9" fill="#6B7280" text-anchor="middle">Annual %</text>'
        + '<text transform="rotate(-90)" x="-118" y="24" font-size="9" fill="#6B7280" text-anchor="middle">change</text>'

        /* data lines */
        + '<polyline points="' + cpi  + '" fill="none" stroke="#111827" stroke-width="2" stroke-linejoin="round"/>'
        + '<polyline points="' + food + '" fill="none" stroke="#6B7280" stroke-width="1.5" stroke-dasharray="2,2.5" stroke-linejoin="round"/>'
        + '<polyline points="' + othr + '" fill="none" stroke="#9CA3AF" stroke-width="1.5" stroke-dasharray="6,3" stroke-linejoin="round"/>'

        /* legend */
        + '<line x1="60"  y1="217" x2="78"  y2="217" stroke="#111827" stroke-width="2"/>'
        + '<text x="81"  y="221" font-size="9" fill="#374151">CPI</text>'
        + '<line x1="103" y1="217" x2="121" y2="217" stroke="#6B7280" stroke-width="1.5" stroke-dasharray="2,2.5"/>'
        + '<text x="124" y="221" font-size="9" fill="#374151">Food and fuel</text>'
        + '<line x1="192" y1="217" x2="210" y2="217" stroke="#9CA3AF" stroke-width="1.5" stroke-dasharray="6,3"/>'
        + '<text x="213" y="221" font-size="9" fill="#374151">Other goods and services</text>'

        + '</svg>';
    }

    /* ── sidebar ─────────────────────────────────────────── */

    /* ── topbar ──────────────────────────────────────────── */

    /* ── right rail ──────────────────────────────────────── */

    function renderRightRail() {
      var totalQuestions = T.questions.length;
      var totalMarks = 0;
      for (var i = 0; i < T.questions.length; i++) {
        totalMarks += T.questions[i].marks;
      }
      var approxMins = Math.round((totalMarks * 1.2) / 10) * 10;
      var approxStr = approxMins < 60 ? approxMins + ' min' : Math.floor(approxMins / 60) + 'h' + (approxMins % 60 > 0 ? ' ' + approxMins % 60 + 'm' : '');

      var thisSectionHtml = '<div class="land-this-section">'
        + '<div class="land-this-section__title">This section</div>'
        + '<div class="land-this-section__row">'
        +   '<span class="land-this-section__icon land-this-section__icon--a">A</span>'
        +   '<span class="land-this-section__label">Section A &mdash; Short questions</span>'
        + '</div>'
        + '<div class="land-this-section__meta">'
        +   '<div class="land-this-section__meta-item">' + I.topics + '<span>' + totalQuestions + ' questions</span></div>'
        +   '<div class="land-this-section__meta-item">' + I.target + '<span>' + totalMarks + ' marks</span></div>'
        +   '<div class="land-this-section__meta-item">' + I.clock  + '<span>Approx. ' + approxStr + '</span></div>'
        + '</div>'
        + '</div>';

      var navHtml = '<div class="land-q-nav">'
        + '<div class="land-q-nav__title">Question navigator</div>'
        + T.questions.map(function (q, idx) {
            var cls = 'land-q-nav__item' + (idx === 0 ? ' is-current' : '');
            var badge = idx === 0 ? 'Current' : 'Next';
            var badgeCls = 'land-q-nav__badge' + (idx === 0 ? '' : ' land-q-nav__badge--next');
            return '<a href="#' + q.id + '" class="' + cls + '">'
              + '<span class="land-q-nav__label">Q' + (idx + 1) + '</span>'
              + '<span class="' + badgeCls + '">' + badge + '</span>'
              + '</a>';
          }).join('')
        + '</div>';

      return Shell.renderStages(['done', 'done', 'current'], 'Your Land It progress')
        + thisSectionHtml
        + navHtml;
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

    /* ── question parts ──────────────────────────────────── */

    function renderMcq(part) {
      var optionsHtml = part.options.map(function (opt) {
        var sel = state.mcq[part.id] === opt.id;
        var extraCls = '';
        if (state.revealed) {
          if (opt.id === part.correct) {
            extraCls = ' is-correct';
          } else if (sel) {
            extraCls = ' is-wrong';
          }
        }
        var cls = 'land-mcq-option' + (sel ? ' is-selected' : '') + extraCls;
        return '<button class="' + cls + '" data-mcq="' + part.id + '" data-opt="' + opt.id + '">'
          + '<span class="land-mcq-radio"></span>'
          + '<span class="land-mcq-text">' + opt.text + '</span>'
          + '</button>';
      }).join('');

      var feedbackHtml = '';
      if (state.revealed) {
        var correct = state.mcq[part.id] === part.correct;
        var fbCls = correct ? 'land-part-feedback land-part-feedback--correct' : 'land-part-feedback land-part-feedback--wrong';
        var fbText = correct ? part.feedbackCorrect : part.feedbackWrong;
        feedbackHtml = '<div class="' + fbCls + '">' + fbText + '</div>';
      }

      var letterHtml = part.letter ? '<span class="land-part__letter">(' + part.letter + ')</span>' : '';
      var partMarksTxt = '(' + part.marks + ' mark' + (part.marks > 1 ? 's' : '') + ')';
      return '<div class="land-part">'
        + '<div class="land-part__stem">'
        +   letterHtml
        +   '<span class="land-part__stem-text">' + part.stem + '</span>'
        +   '<span class="land-part__marks">' + partMarksTxt + '</span>'
        + '</div>'
        + '<div class="land-mcq-options">' + optionsHtml + '</div>'
        + feedbackHtml
        + '</div>';
    }

    function renderFreetext(part) {
      var stored = state.text[part.id] || '';
      var modelHtml = '';
      if (state.revealed) {
        modelHtml = '<div class="land-part-model">'
          + '<div class="land-part-model__label">Model answer</div>'
          + '<div class="land-part-model__text">' + part.modelAnswer + '</div>'
          + '</div>';
      }
      var letterHtml = part.letter ? '<span class="land-part__letter">(' + part.letter + ')</span>' : '';
      var partMarksTxt = '(' + part.marks + ' mark' + (part.marks > 1 ? 's' : '') + ')';
      return '<div class="land-part">'
        + '<div class="land-part__stem">'
        +   letterHtml
        +   '<span class="land-part__stem-text">' + part.stem + '</span>'
        +   '<span class="land-part__marks">' + partMarksTxt + '</span>'
        + '</div>'
        + '<textarea class="land-freetext-ta" data-ta="' + part.id + '" rows="5" placeholder="Write your answer here…">' + stored + '</textarea>'
        + renderDiagramZone(part.id)
        + '<details class="land-hint-details"><summary class="land-hint-summary">' + I.info + '<span>Show hint</span></summary>'
        +   '<div class="land-hint">' + part.hint + '</div>'
        + '</details>'
        + modelHtml
        + '</div>';
    }

    function renderCalc(part) {
      var calcBadge = part.calculatorAllowed
        ? '<span class="land-calc-badge">' + I.cog + ' Calculator allowed</span>'
        : '';

      var stepsHtml = '';
      for (var i = 0; i < part.steps.length; i++) {
        var step = part.steps[i];
        var storedVal = state.text[step.id] || '';
        if (i > 0) {
          stepsHtml += '<div class="land-calc-arrow">' + I.arrowRight + '</div>';
        }
        var revealHtml = '';
        if (state.revealed) {
          revealHtml = '<div class="land-calc-step__reveal">Expected: <strong>' + step.correctValue + '%</strong></div>';
        }
        stepsHtml += '<div class="land-calc-step">'
          + '<div class="land-calc-step__label">' + step.label + '</div>'
          + '<div class="land-calc-step__input-wrap">'
          +   '<input class="land-calc-step__input" type="text" id="' + step.id + '" data-ta="' + step.id + '" value="' + storedVal + '" placeholder="Enter %">'
          +   '<span class="land-calc-step__unit">%</span>'
          + '</div>'
          + revealHtml
          + '</div>';
      }

      var storedInterp = state.text[part.interpretation.id] || '';
      var modelInterpHtml = '';
      if (state.revealed) {
        modelInterpHtml = '<div class="land-part-model">'
          + '<div class="land-part-model__label">Model interpretation</div>'
          + '<div class="land-part-model__text">' + part.interpretation.modelAnswer + '</div>'
          + '</div>';
      }

      var interpHtml = '<div class="land-calc-interp">'
        + '<div class="land-calc-step__label">' + part.interpretation.label + '</div>'
        + '<textarea class="land-freetext-ta land-freetext-ta--sm" data-ta="' + part.interpretation.id + '" rows="3" placeholder="' + part.interpretation.placeholder + '">' + storedInterp + '</textarea>'
        + modelInterpHtml
        + '</div>';

      var calcLetterHtml = part.letter ? '<span class="land-part__letter">(' + part.letter + ')</span>' : '';
      var partMarksTxt = '(' + part.marks + ' mark' + (part.marks > 1 ? 's' : '') + ')';
      return '<div class="land-part land-part--calc">'
        + '<div class="land-part__stem land-part__stem--row">'
        +   calcLetterHtml
        +   '<span class="land-part__stem-text">' + part.stem + '</span>'
        +   '<span class="land-part__marks">' + partMarksTxt + '</span>'
        + '</div>'
        + (calcBadge ? '<div class="land-calc-badge-wrap">' + calcBadge + '</div>' : '')
        + '<div class="land-calc-flow">' + stepsHtml + '</div>'
        + interpHtml
        + renderDiagramZone(part.id)
        + '</div>';
    }

    /* ── context blocks ──────────────────────────────────── */

    function renderContext(ctx) {
      if (ctx.type === 'svg-chart') {
        return '<div class="land-chart-wrap">' + buildInflationChart() + '</div>';
      }
      if (ctx.type === 'data-grid') {
        var itemsHtml = ctx.items.map(function (item) {
          var iconCls = 'land-data-item__icon land-data-item__icon--' + item.color;
          return '<div class="land-data-item">'
            + '<div class="' + iconCls + '">' + item.icon + '</div>'
            + '<div>'
            +   '<div class="land-data-item__label">' + item.label + '</div>'
            +   '<div class="land-data-item__value">' + item.value + '</div>'
            + '</div>'
            + '</div>';
        }).join('');
        return '<div class="land-data-grid">' + itemsHtml + '</div>';
      }
      if (ctx.type === 'data-table') {
        var titleHtml = ctx.tableTitle ? '<div class="land-table__title">' + ctx.tableTitle + '</div>' : '';
        var headCells = ctx.headers.map(function (h) {
          return '<th>' + h + '</th>';
        }).join('');
        var bodyRows = ctx.rows.map(function (row) {
          var cells = row.values.map(function (v) {
            return '<td>' + v + '</td>';
          }).join('');
          return '<tr><td class="land-table__label">' + row.label + '</td>' + cells + '</tr>';
        }).join('');
        return '<div class="land-table-wrap">'
          + titleHtml
          + '<table class="land-table"><thead><tr>' + headCells + '</tr></thead><tbody>' + bodyRows + '</tbody></table>'
          + '</div>';
      }
      if (ctx.type === 'text-extract') {
        var sourceHtml = ctx.source ? '<div class="land-extract__source">' + ctx.source + '</div>' : '';
        return '<div class="land-extract">'
          + '<div class="land-extract__text">' + ctx.text + '</div>'
          + sourceHtml
          + '</div>';
      }
      return '';
    }

    /* ── question card ───────────────────────────────────── */

    function renderQuestion(q) {
      var contextHtml = renderContext(q.context);
      var partsHtml = q.parts.map(function (p) {
        if (p.type === 'mcq')         { return renderMcq(p);      }
        if (p.type === 'freetext')    { return renderFreetext(p);  }
        if (p.type === 'calculation') { return renderCalc(p);      }
        return '';
      }).join('');

      return '<div class="land-q-card" id="' + q.id + '">'
        + '<div class="land-q-card__head">'
        +   '<div>'
        +     '<div class="land-q-card__title">' + q.title + '</div>'
        +     '<div class="land-q-card__subtitle">' + q.subtitle + '</div>'
        +   '</div>'
        +   '<span class="land-q-marks">' + q.marks + ' marks</span>'
        + '</div>'
        + '<div class="land-q-card__body">'
        +   '<div class="land-q-context">' + contextHtml + '</div>'
        +   '<div class="land-q-parts">' + partsHtml + '</div>'
        + '</div>'
        + '</div>';
    }

    /* ── progress bar ────────────────────────────────────── */

    function countAnswered() {
      var n = 0;
      for (var i = 0; i < T.questions.length; i++) {
        var q = T.questions[i];
        for (var j = 0; j < q.parts.length; j++) {
          var p = q.parts[j];
          if (p.type === 'mcq' && state.mcq[p.id]) { n++; break; }
        }
      }
      return n;
    }

    function renderProgress() {
      var total = T.questions.length;
      var done  = countAnswered();
      var pct   = total > 0 ? Math.round(done / total * 100) : 0;
      return '<div class="land-progress-card">'
        + '<div class="land-progress-card__row">'
        +   '<div class="land-progress-card__icon">' + I.target + '</div>'
        +   '<div class="land-progress-card__label">Section A of your Land It session</div>'
        +   '<div class="land-progress-card__count">' + done + ' of ' + total + ' questions</div>'
        + '</div>'
        + '<div class="land-progress-bar"><div class="land-progress-bar__fill" style="width:' + pct + '%"></div></div>'
        + '</div>';
    }

    /* ── page assembly ───────────────────────────────────── */

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
      var totalMarks = 0;
      for (var i = 0; i < T.questions.length; i++) { totalMarks += T.questions[i].marks; }

      var questionsHtml = T.questions.map(function (q) { return renderQuestion(q); }).join('');

      return '<div class="land-main">'
        + '<div class="land-section-header">'
        +   '<span class="land-section-badge">Section A &mdash; Short questions</span>'
        +   '<h1 class="land-section-title">Apply the topic under exam conditions</h1>'
        +   '<p class="land-section-desc">You are now answering short, exam-style questions on causes of inflation and deflation.</p>'
        + '</div>'
        + renderProgress()
        + questionsHtml
        + renderBottomBar('A', 'Reveal Section A answers', 'Answers shown')
        + '</div>';
    }

    /* ── full render ─────────────────────────────────────── */

    function render() {
      document.getElementById('app-root').innerHTML = ''
        + '<div class="app theme--land">'
        +   Shell.renderSidebar({ activeNav: 'My topics' })
        +   '<div id="main-content" class="main" tabindex="-1">'
        +     Shell.renderTopbar({ backUrl: T.backUrl, sessionLabel: T.sessionLabel, topicTitle: T.topic })
        +     '<div class="page">'
        +       renderMain()
        +       '<aside class="right-rail">' + renderRightRail() + '</aside>'
        +     '</div>'
        +   '</div>'
        + '</div>';
      attachHandlers();
      updateNav();
    }

    /* ── question navigator highlight on scroll ──────────── */

    function updateNav() {
      var navItems = document.querySelectorAll('.land-q-nav__item');
      if (!navItems.length) { return; }
      for (var i = 0; i < navItems.length; i++) {
        navItems[i].classList.remove('is-current');
        var badge = navItems[i].querySelector('.land-q-nav__badge');
        if (badge) {
          badge.classList.add('land-q-nav__badge--next');
          badge.classList.remove('land-q-nav__badge--current');
          badge.textContent = 'Q' + (i + 1);
        }
      }
      /* Simple approach: highlight Q1 by default, Q2 if scrolled past Q1 */
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      var activeIdx = 0;
      for (var j = 0; j < T.questions.length; j++) {
        var el = document.getElementById(T.questions[j].id);
        if (el && el.getBoundingClientRect().top < 200) { activeIdx = j; }
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

    /* ── event handlers ──────────────────────────────────── */

    function captureTextValues() {
      var textareas = document.querySelectorAll('[data-ta]');
      for (var i = 0; i < textareas.length; i++) {
        state.text[textareas[i].getAttribute('data-ta')] = textareas[i].value;
      }
    }

    function attachHandlers() {
      var root = document.getElementById('app-root');

      /* MCQ option clicks */
      var mcqBtns = root.querySelectorAll('[data-mcq]');
      for (var i = 0; i < mcqBtns.length; i++) {
        (function (btn) {
          btn.addEventListener('click', function () {
            if (state.revealed) { return; }
            var partId = btn.getAttribute('data-mcq');
            var optId  = btn.getAttribute('data-opt');
            state.mcq[partId] = optId;
            /* update pill visuals without full re-render */
            var siblings = root.querySelectorAll('[data-mcq="' + partId + '"]');
            for (var k = 0; k < siblings.length; k++) {
              siblings[k].classList.toggle('is-selected', siblings[k].getAttribute('data-opt') === optId);
            }
            /* update progress bar */
            var prog = root.querySelector('.land-progress-bar__fill');
            if (prog) {
              var total = T.questions.length;
              var done  = countAnswered();
              prog.style.width = (total > 0 ? Math.round(done / total * 100) : 0) + '%';
            }
            var countEl = root.querySelector('.land-progress-card__count');
            if (countEl) { countEl.textContent = countAnswered() + ' of ' + T.questions.length + ' questions'; }
          });
        })(mcqBtns[i]);
      }

      /* reveal answers */
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

      /* continue / finish — save timing + score */
      var continueBtn = document.getElementById('js-continue-btn');
      if (continueBtn) {
        continueBtn.addEventListener('click', function () {
          saveSectionEnd('A', { mcqScore: countAnswered(), mcqTotal: T.questions.length });
          TopicLoader.go(continueBtn.getAttribute('data-href'));
        });
      }

      /* diagram file inputs */
      var diagInputs = root.querySelectorAll('[data-diag-input]');
      for (var di = 0; di < diagInputs.length; di++) { attachDiagramInput(diagInputs[di]); }

      /* diagram remove buttons */
      var diagRemoves = root.querySelectorAll('[data-diag-remove]');
      for (var dr = 0; dr < diagRemoves.length; dr++) { attachDiagramRemove(diagRemoves[dr]); }

      /* scroll-spy for question navigator */
      window.addEventListener('scroll', updateNav, { passive: true });
    }

    saveSectionStart('A');
    render();
  };
})();
