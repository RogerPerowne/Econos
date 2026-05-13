/* ============================================================
   ECONOS — Link It engine (Diagram Connector)
   Three stages: Label → Interpret → Explain
   ============================================================ */

(function () {
  'use strict';

  window.bootLinkDiagram = function () {
    var I    = window.ECONOS_ICONS;
    var DATA = window.ECONOS_LINK_DIAGRAM;

    var state = {
      stage:    0,          // 0=select, 1=label, 2=interpret, 3=explain

      /* Stage 0: select */
      selectedOption: null, // id of chosen diagram option
      selectChecked:  false,

      /* Stage 1: label */
      selected:   null,     // selected chip id
      placements: {},       // zoneId → chipId
      labelChecked: false,

      /* Stage 2: interpret */
      interpInputs: ['', '', '', ''],
      interpMarks:  [null, null, null, null],
      interpChecked: false,

      /* Stage 3: explain */
      explainInputs: ['', '', ''],
      combinedInput: '',
      explainMarks:  [null, null, null],
      explainChecked: false,
      lastFocused: -1,

      score: 0
    };

    /* ── helpers ── */

    function chipById(id) {
      return DATA.label.chips.filter(function (c) { return c.id === id; })[0] || null;
    }

    function zoneLabel(zoneId) {
      if (!state.placements[zoneId]) return null;
      var chip = chipById(state.placements[zoneId]);
      return chip ? chip.text : null;
    }

    /* ── main render ── */

    function render() {
      var root = document.getElementById('app-root');
      root.innerHTML = ''
        + '<div class="app theme--link">'
        +   renderSidebar()
        +   '<div class="main">'
        +     renderTopbar()
        +     '<div class="page">'
        +       '<div class="link-station">'
        +         (state.stage === 0 ? renderSelectStation()   :
                   state.stage === 1 ? renderLabelStation()    :
                   state.stage === 2 ? renderInterpStation()   :
                                       renderExplainStation())
        +       '</div>'
        +       renderRail()
        +     '</div>'
        +   '</div>'
        + '</div>';
      restoreTextareas();
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
        +     '<div class="sidebar__logo"><img src="assets/econos-icon.png" alt="econos"></div>'
        +     '<div class="sidebar__wordmark">econos</div>'
        +     '<div class="sidebar__tagline">'
        +       'Learn it<span class="ec-stop-green">.</span> Link it<span class="ec-stop-yellow">.</span> Land it<span class="ec-stop-pink">.</span>'
        +     '</div>'
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

    /* ── shared ── */

    function renderScenario() {
      var sc = DATA.scenario;
      var pts = sc.dataPoints.map(function (p) {
        return '<span class="diag-scenario__point"><span>' + p.icon + '</span><span>' + p.text + '</span></span>';
      }).join('');
      return ''
        + '<div class="diag-scenario">'
        +   '<span class="diag-scenario__icon">' + sc.icon + '</span>'
        +   '<div>'
        +     '<div class="diag-scenario__text">' + sc.text + '</div>'
        +     '<div class="diag-scenario__points">' + pts + '</div>'
        +   '</div>'
        + '</div>';
    }

    /* ── AD/AS Diagram SVG ── */
    /* Key coordinates (viewBox 0 0 560 440):
       E₁ = initial equilibrium (308, 198)
       E₂ = new equilibrium    (261, 161)
       LRAS at x=308
       SRAS₁: (130,400)→(460,25)
       SRAS₂: (50,400)→(380,25)  — shifted left
       AD₁:   (110,40)→(510,360) */

    function renderDiagramSVG(opts) {
      var showDashes = opts && opts.showDashes;  // stages 2+
      var showEqLbls = opts && opts.showEqLbls;  // stages 2+
      var hasReadyZone = opts && opts.hasReadyZone; // stage 1: make zones glow

      /* Dashed guide lines + axis tick labels */
      var guides = showDashes ? (''
        + '<line x1="100" y1="161" x2="261" y2="161" stroke="#9ca3af" stroke-width="1" stroke-dasharray="4,3"/>'
        + '<line x1="100" y1="198" x2="308" y2="198" stroke="#9ca3af" stroke-width="1" stroke-dasharray="4,3"/>'
        + '<line x1="261" y1="161" x2="261" y2="400" stroke="#9ca3af" stroke-width="1" stroke-dasharray="4,3"/>'
        + '<line x1="308" y1="198" x2="308" y2="400" stroke="#9ca3af" stroke-width="1" stroke-dasharray="4,3"/>'
        + '<text x="96"  y="164" font-size="10" fill="#6b7280" text-anchor="end">P₂</text>'
        + '<text x="96"  y="201" font-size="10" fill="#6b7280" text-anchor="end">P₁</text>'
        + '<text x="261" y="416" font-size="10" fill="#6b7280" text-anchor="middle">Y₂</text>'
        + '<text x="308" y="416" font-size="10" fill="#6b7280" text-anchor="middle">Y₁</text>'
      ) : '';

      /* Equilibrium labels — shown in stages 2+ */
      var eqLbls = showEqLbls ? (''
        + '<text x="268" y="156" font-size="10" fill="#7c3aed">New</text>'
        + '<text x="268" y="168" font-size="10" fill="#7c3aed">equilibrium</text>'
        + '<text x="314" y="193" font-size="10" fill="#2563eb">Initial</text>'
        + '<text x="314" y="205" font-size="10" fill="#2563eb">equilibrium</text>'
      ) : '';

      /* Shift arrow (shown in stage 1 after labels placed, and stages 2+) */
      var shiftArrow = showDashes ? (''
        + '<line x1="395" y1="95" x2="318" y2="95" stroke="#7c3aed" stroke-width="1.5" marker-end="url(#arr-purple)"/>'
      ) : '';

      return ''
        + '<svg viewBox="0 0 560 430" xmlns="http://www.w3.org/2000/svg" class="diag-svg" aria-label="AD/AS diagram">'
        + '<defs>'
        +   '<clipPath id="chart-clip">'
        +     '<rect x="101" y="21" width="442" height="378"/>'
        +   '</clipPath>'
        +   '<marker id="arr-purple" markerWidth="4" markerHeight="4" refX="2" refY="2" orient="auto">'
        +     '<path d="M0,0 L4,2 L0,4 Z" fill="#7c3aed"/>'
        +   '</marker>'
        + '</defs>'

        /* Y-axis */
        + '<line x1="100" y1="20" x2="100" y2="400" stroke="#1f2937" stroke-width="2"/>'
        + '<polygon points="100,13 95,26 105,26" fill="#1f2937"/>'
        + '<text x="28" y="215" font-size="12" fill="#6b7280" text-anchor="middle" transform="rotate(-90,28,215)">Price level</text>'

        /* X-axis */
        + '<line x1="100" y1="400" x2="545" y2="400" stroke="#1f2937" stroke-width="2"/>'
        + '<polygon points="552,400 539,395 539,405" fill="#1f2937"/>'
        + '<text x="330" y="428" font-size="12" fill="#6b7280" text-anchor="middle">Real output</text>'

        /* Data lines — clipped to chart area so nothing escapes the axes */
        + '<g clip-path="url(#chart-clip)">'
          /* LRAS */
          + '<line x1="308" y1="21" x2="308" y2="399" stroke="#374151" stroke-width="1.5"/>'
          /* AD₁ */
          + '<line x1="110" y1="40" x2="510" y2="360" stroke="#059669" stroke-width="2.5"/>'
          /* SRAS₁ */
          + '<line x1="130" y1="399" x2="460" y2="25" stroke="#2563eb" stroke-width="2.5"/>'
          /* SRAS₂ — starts at x=50 which is left of the y-axis; clipPath handles it */
          + '<line x1="50"  y1="399" x2="380" y2="25" stroke="#7c3aed" stroke-width="2.5"/>'
          + guides
          + shiftArrow
        + '</g>'

        /* Curve labels — outside clip so they sit cleanly beyond line ends */
        + '<text x="312" y="18"  font-size="11" fill="#374151">LRAS</text>'
        + '<text x="514" y="360" font-size="11" fill="#059669">AD₁</text>'
        + '<text x="463" y="23"  font-size="11" fill="#2563eb">SRAS₁</text>'
        + '<text x="383" y="23"  font-size="11" fill="#7c3aed">SRAS₂</text>'

        /* Equilibrium labels and dots on top of everything */
        + eqLbls
        + '<circle cx="308" cy="198" r="5" fill="#2563eb"/>'
        + '<circle cx="261" cy="161" r="5" fill="#7c3aed"/>'

        + '</svg>';
    }

    /* HTML overlay drop zones — absolutely positioned over the SVG.
       Percentages are relative to the SVG viewBox (560×430). */
    function renderZoneOverlay(zone, content, tone) {
      var cls = 'diag-zone'
        + (content       ? ' is-filled'  : '')
        + (tone === 'ok' ? ' is-correct' : '')
        + (tone === 'no' ? ' is-wrong'   : '')
        + (state.selected !== null && !content ? ' is-ready' : '');
      return '<div class="' + cls + '" data-zone="' + zone.id + '" style="'
        + 'left:'   + zone.pctX + '%;'
        + 'top:'    + zone.pctY + '%;'
        + 'width:'  + zone.pctW + '%;'
        + '">'
        + (content ? content : '<span class="diag-zone__empty">—</span>')
        + '</div>';
    }

    /* Zone layout — positions as % of 560×430 SVG */
    var ZONES = {
      'shift':    { id: 'shift',    pctX: 34,   pctY: 13.5, pctW: 19 },
      'new-eq':   { id: 'new-eq',   pctX: 48,   pctY: 33,   pctW: 21 },
      'init-eq':  { id: 'init-eq',  pctX: 57,   pctY: 41,   pctW: 22 },
      'hi-price': { id: 'hi-price', pctX: 0.5,  pctY: 33,   pctW: 17 },
      'lo-out':   { id: 'lo-out',   pctX: 39,   pctY: 93.5, pctW: 18 }
    };

    /* ── Thumbnail SVGs for diagram option cards ── */

    /* Shared thumbnail clip + marker defs — inlined per SVG with unique IDs */
    function thumbDefs(clipId, markId, markColour) {
      return '<defs>'
        + '<clipPath id="' + clipId + '"><rect x="21" y="6" width="93" height="78"/></clipPath>'
        + '<marker id="' + markId + '" markerWidth="4" markerHeight="4" refX="2" refY="2" orient="auto">'
        +   '<path d="M0,0 L4,2 L0,4 Z" fill="' + markColour + '"/>'
        + '</marker>'
        + '</defs>';
    }

    function thumbAxes() {
      return '<line x1="20" y1="85" x2="20" y2="5"  stroke="#d1d5db" stroke-width="1.5"/>'
           + '<line x1="20" y1="85" x2="115" y2="85" stroke="#d1d5db" stroke-width="1.5"/>';
    }

    function thumbSRASLeft() {
      /* SRAS₁ (blue, right), SRAS₂ (purple, left shifted), AD (green), LRAS (grey vertical) */
      /* SRAS₂ starts at x=8 — would cross y-axis; clipPath handles it */
      return '<svg viewBox="0 0 120 90" class="diag-thumb" aria-hidden="true">'
        + thumbDefs('clip-ta', 'arr-ta', '#7c3aed')
        + thumbAxes()
        + '<g clip-path="url(#clip-ta)">'
          + '<line x1="64" y1="6"  x2="64" y2="84" stroke="#6b7280" stroke-width="1" stroke-dasharray="3,2"/>'
          + '<line x1="25" y1="84" x2="90" y2="6"  stroke="#2563eb" stroke-width="2"/>'
          + '<line x1="8"  y1="80" x2="68" y2="6"  stroke="#7c3aed" stroke-width="2"/>'
          + '<line x1="22" y1="8"  x2="108" y2="75" stroke="#059669" stroke-width="2"/>'
        + '</g>'
        + '<circle cx="64" cy="41" r="3" fill="#2563eb"/>'
        + '<circle cx="49" cy="30" r="3" fill="#7c3aed"/>'
        + '<line x1="85" y1="20" x2="73" y2="20" stroke="#7c3aed" stroke-width="1.5" marker-end="url(#arr-ta)"/>'
        + '</svg>';
    }

    function thumbADRight() {
      return '<svg viewBox="0 0 120 90" class="diag-thumb" aria-hidden="true">'
        + thumbDefs('clip-tb', 'arr-tb', '#059669')
        + thumbAxes()
        + '<g clip-path="url(#clip-tb)">'
          + '<line x1="64" y1="6"  x2="64" y2="84" stroke="#6b7280" stroke-width="1" stroke-dasharray="3,2"/>'
          + '<line x1="25" y1="84" x2="95" y2="10" stroke="#2563eb" stroke-width="2"/>'
          + '<line x1="22" y1="8"  x2="95" y2="72" stroke="#059669" stroke-width="2"/>'
          + '<line x1="45" y1="8"  x2="113" y2="72" stroke="#059669" stroke-width="2" stroke-dasharray="4,2" opacity="0.6"/>'
        + '</g>'
        + '<circle cx="64" cy="41" r="3" fill="#2563eb"/>'
        + '<circle cx="79" cy="30" r="3" fill="#059669" opacity="0.7"/>'
        + '<line x1="56" y1="60" x2="72" y2="60" stroke="#059669" stroke-width="1.5" marker-end="url(#arr-tb)"/>'
        + '</svg>';
    }

    function thumbLRASRight() {
      return '<svg viewBox="0 0 120 90" class="diag-thumb" aria-hidden="true">'
        + thumbDefs('clip-tc', 'arr-tc', '#374151')
        + thumbAxes()
        + '<g clip-path="url(#clip-tc)">'
          + '<line x1="55" y1="6"  x2="55" y2="84" stroke="#6b7280" stroke-width="1" stroke-dasharray="3,2" opacity="0.6"/>'
          + '<line x1="75" y1="6"  x2="75" y2="84" stroke="#374151" stroke-width="1.5"/>'
          + '<line x1="25" y1="84" x2="95" y2="10" stroke="#2563eb" stroke-width="2"/>'
          + '<line x1="22" y1="8"  x2="100" y2="70" stroke="#059669" stroke-width="2"/>'
        + '</g>'
        + '<circle cx="55" cy="42" r="3" fill="#2563eb" opacity="0.6"/>'
        + '<circle cx="75" cy="36" r="3" fill="#059669"/>'
        + '<line x1="60" y1="20" x2="70" y2="20" stroke="#374151" stroke-width="1.5" marker-end="url(#arr-tc)"/>'
        + '</svg>';
    }

    function thumbADLeft() {
      /* AD₂ dashed starts at x=5 — would cross y-axis; clipPath handles it */
      return '<svg viewBox="0 0 120 90" class="diag-thumb" aria-hidden="true">'
        + thumbDefs('clip-td', 'arr-td', '#059669')
        + thumbAxes()
        + '<g clip-path="url(#clip-td)">'
          + '<line x1="64" y1="6"  x2="64" y2="84" stroke="#6b7280" stroke-width="1" stroke-dasharray="3,2"/>'
          + '<line x1="25" y1="84" x2="95" y2="10" stroke="#2563eb" stroke-width="2"/>'
          + '<line x1="22" y1="8"  x2="95" y2="72" stroke="#059669" stroke-width="2"/>'
          + '<line x1="5"  y1="8"  x2="75" y2="72" stroke="#059669" stroke-width="2" stroke-dasharray="4,2" opacity="0.6"/>'
        + '</g>'
        + '<circle cx="64" cy="41" r="3" fill="#2563eb"/>'
        + '<circle cx="49" cy="53" r="3" fill="#059669" opacity="0.7"/>'
        + '<line x1="69" y1="60" x2="55" y2="60" stroke="#059669" stroke-width="1.5" marker-end="url(#arr-td)"/>'
        + '</svg>';
    }

    var THUMBS = {
      'sras-left':  thumbSRASLeft,
      'ad-right':   thumbADRight,
      'lras-right': thumbLRASRight,
      'ad-left':    thumbADLeft
    };

    /* ── Stage 0: Select the Diagram ── */

    function renderSelectStation() {
      var S = DATA.select;

      var optionsHtml = S.options.map(function (opt) {
        var isSelected = state.selectedOption === opt.id;
        var showFeedback = state.selectChecked && isSelected;
        var isCorrect = opt.correct;

        var cls = 'diag-option'
          + (isSelected ? ' is-selected' : '')
          + (state.selectChecked && isSelected && isCorrect  ? ' is-correct' : '')
          + (state.selectChecked && isSelected && !isCorrect ? ' is-wrong'   : '');

        var thumbFn = THUMBS[opt.id];
        var thumbHtml = thumbFn ? thumbFn() : '';

        var feedbackHtml = showFeedback
          ? '<div class="diag-option__feedback">'
          +   '<span class="diag-option__feedback-icon">' + (isCorrect ? '✓' : '✕') + '</span>'
          +   '<span>' + opt.why + '</span>'
          + '</div>'
          : '';

        var correctBadge = (state.selectChecked && !isSelected && opt.correct)
          ? '<span class="diag-option__correct-badge">✓ Correct answer</span>'
          : '';

        return '<button type="button" class="' + cls + '" data-option="' + opt.id + '"'
             + (state.selectChecked ? ' disabled' : '') + '>'
             +   '<div class="diag-option__thumb">' + thumbHtml + '</div>'
             +   '<div class="diag-option__body">'
             +     '<div class="diag-option__title">' + opt.title + '</div>'
             +     '<div class="diag-option__sub">' + opt.sub + '</div>'
             +     correctBadge
             +     feedbackHtml
             +   '</div>'
             + '</button>';
      }).join('');

      var primary;
      if (!state.selectChecked) {
        primary = '<button type="button" class="link-btn link-btn--primary"'
                + (state.selectedOption !== null ? '' : ' disabled')
                + ' id="check-select">Check my choice →</button>';
      } else {
        primary = '<button type="button" class="link-btn link-btn--primary" id="next-stage">Label the diagram →</button>';
      }

      return ''
        + '<div class="link-card">'
        +   '<div class="link-card__eyebrow"><span class="link-card__eyebrow-dot"></span>' + S.eyebrow + '</div>'
        +   '<h1 class="link-card__title">' + S.title + '</h1>'
        +   '<p class="link-card__lede">' + S.instruction + '</p>'
        +   renderScenario()
        +   '<div class="diag-options">' + optionsHtml + '</div>'
        +   '<div class="link-info"><span class="link-info__icon">💡</span><span>' + S.hint + '</span></div>'
        + '</div>'
        + '<div class="link-footer">'
        +   '<a href="' + DATA.backUrl + '" class="link-btn link-btn--ghost">← Back</a>'
        +   '<div class="link-footer__counter">Step 1 of 4 · Select</div>'
        +   primary
        + '</div>';
    }

    /* ── Stage 1: Label the Diagram ── */

    function renderLabelStation() {
      var S = DATA.label;
      var nPlaced  = Object.keys(state.placements).length;
      var nZones   = S.zones.length;
      var canCheck = nPlaced === nZones && !state.labelChecked;

      var zoneOverlays = S.zones.map(function (z) {
        var chipId  = state.placements[z.id];
        var chip    = chipId ? chipById(chipId) : null;
        var content = chip ? ('<span class="diag-zone__icon">' + chip.icon + '</span><span>' + chip.text + '</span>') : null;
        var tone    = '';
        if (state.labelChecked && chip) {
          tone = chip.correct && chip.zone === z.id ? 'ok' : 'no';
        }
        return renderZoneOverlay(ZONES[z.id], content, tone);
      }).join('');

      var chipsHtml = S.chips.map(function (c) {
        var placed  = Object.values ? Object.values(state.placements).indexOf(c.id) >= 0
                      : (function () { var vals = []; for (var k in state.placements) vals.push(state.placements[k]); return vals.indexOf(c.id) >= 0; }());
        if (placed) return '';
        var sel = state.selected === c.id;
        var cls = 'diag-chip' + (sel ? ' is-selected' : '');
        return '<button type="button" class="' + cls + '" data-chip="' + c.id + '">'
             +   (c.icon ? '<span>' + c.icon + '</span>' : '')
             +   '<span>' + c.text + '</span>'
             + '</button>';
      }).join('');

      var feedbackHtml = '';
      if (state.labelChecked) {
        var nCorrect = S.chips.filter(function (c) {
          return c.correct && state.placements[c.zone] === c.id;
        }).length;
        feedbackHtml = ''
          + '<div class="diag-label-result">'
          +   '<span class="diag-label-result__score">' + nCorrect + ' of ' + nZones + ' correct</span>'
          +   (nCorrect === nZones
              ? '<span class="diag-label-result__msg diag-label-result__msg--ok">All labels placed correctly — great reading of the diagram.</span>'
              : '<span class="diag-label-result__msg">Check the highlighted zones — the correct label is shown in the answer key below.</span>')
          + '</div>';
      }

      var primary;
      if (!state.labelChecked) {
        primary = '<button type="button" class="link-btn link-btn--primary"' + (canCheck ? '' : ' disabled') + ' id="check-labels">Check labels →</button>';
      } else {
        primary = '<button type="button" class="link-btn link-btn--primary" id="next-stage">Interpret the diagram →</button>';
      }

      return ''
        + '<div class="link-card">'
        +   '<div class="link-card__eyebrow"><span class="link-card__eyebrow-dot"></span>' + S.eyebrow + '</div>'
        +   '<h1 class="link-card__title">' + S.title + '</h1>'
        +   '<p class="link-card__lede">' + S.instruction + '</p>'
        +   renderScenario()
        +   '<div class="diag-wrap">'
        +     renderDiagramSVG({ showDashes: state.labelChecked, showEqLbls: false })
        +     zoneOverlays
        +   '</div>'
        +   renderDiagLegend()
        +   (chipsHtml ? '<div class="diag-chips"><div class="diag-chips__label">Available labels</div><div class="diag-chips__row">' + chipsHtml + '</div></div>' : '')
        +   feedbackHtml
        +   '<div class="link-info"><span class="link-info__icon">💡</span><span>' + S.hint + '</span></div>'
        + '</div>'
        + '<div class="link-footer">'
        +   '<a href="' + DATA.backUrl + '" class="link-btn link-btn--ghost">← Back</a>'
        +   '<div class="link-footer__counter">Step 2 of 4 · Label</div>'
        +   primary
        + '</div>';
    }

    /* ── Stage 1: Interpret the Diagram ── */

    function renderInterpStation() {
      var S = DATA.interpret;
      var allMarked = state.interpMarks.every(function (m) { return m !== null; });

      var questionsHtml = S.questions.map(function (q, i) {
        var mark  = state.interpMarks[i];
        var input = state.interpInputs[i];
        var rowCls = 'diag-interp-row'
          + (state.interpInputs[i].trim() ? ' has-content' : '')
          + (mark === true  ? ' is-correct' : '')
          + (mark === false ? ' is-wrong'   : '');

        var answerArea;
        if (!state.interpChecked) {
          answerArea = ''
            + '<div class="diag-interp-input-wrap">'
            +   '<textarea class="diag-interp-input" data-interp="' + i + '" placeholder="Type your explanation…" rows="2"></textarea>'
            + '</div>';
        } else {
          answerArea = ''
            + '<div class="diag-interp-answer">' + (input.trim() || '<em>No answer given</em>') + '</div>'
            + '<div class="diag-interp-model">'
            +   '<span class="diag-interp-model__label">Model answer:</span>'
            +   '<span class="diag-interp-model__text">' + q.modelAnswer + '</span>'
            + '</div>'
            + (mark === null
              ? '<div class="diag-interp-selfmark">'
              +   '<span class="diag-interp-selfmark__label">How did you do?</span>'
              +   '<button type="button" class="chain-selfmark-btn chain-selfmark-btn--ok"  data-interp-mark="' + i + '" data-val="ok">✓ Got it</button>'
              +   '<button type="button" class="chain-selfmark-btn chain-selfmark-btn--no"  data-interp-mark="' + i + '" data-val="no">✕ Not quite</button>'
              + '</div>'
              : '');
        }

        return ''
          + '<div class="' + rowCls + '">'
          +   '<div class="diag-interp-row__head">'
          +     '<span class="diag-interp-row__num">' + q.num + '</span>'
          +     '<span class="diag-interp-row__q">' + q.question + '</span>'
          +     (mark !== null ? '<span class="diag-interp-row__mark ' + (mark ? 'is-ok' : 'is-no') + '">' + (mark ? '✓' : '✕') + '</span>' : '')
          +   '</div>'
          +   answerArea
          + '</div>';
      }).join('');

      var vocabChips = S.vocab.map(function (term) {
        return '<button type="button" class="chain-vocab-chip" data-vocab-interp="' + term + '">' + term + '</button>';
      }).join('');

      var primary;
      if (!state.interpChecked) {
        var anyFilled = state.interpInputs.some(function (v) { return v.trim().length > 0; });
        primary = '<button type="button" class="link-btn link-btn--primary"' + (anyFilled ? '' : ' disabled') + ' id="check-interp">Check answers →</button>';
      } else if (!allMarked) {
        primary = '<button type="button" class="link-btn link-btn--primary" disabled>Mark each answer to continue</button>';
      } else {
        primary = '<button type="button" class="link-btn link-btn--primary" id="next-stage">Explain the diagram →</button>';
      }

      return ''
        + '<div class="link-card">'
        +   '<div class="link-card__eyebrow"><span class="link-card__eyebrow-dot"></span>' + S.eyebrow + '</div>'
        +   '<h1 class="link-card__title">' + S.title + '</h1>'
        +   '<p class="link-card__lede">' + S.instruction + '</p>'
        +   renderScenario()
        +   '<div class="diag-wrap">'
        +     renderDiagramSVG({ showDashes: true, showEqLbls: true })
        +   '</div>'
        +   renderDiagLegend()
        +   '<div class="diag-interp-questions">' + questionsHtml + '</div>'
        +   '<div class="chain-vocab"><span class="chain-vocab__label">Useful terms</span><div class="chain-vocab__chips">' + vocabChips + '</div></div>'
        +   '<div class="link-info"><span class="link-info__icon">💡</span><span>' + S.hint + '</span></div>'
        + '</div>'
        + '<div class="link-footer">'
        +   '<button type="button" class="link-btn link-btn--ghost" id="back-stage">← Label stage</button>'
        +   '<div class="link-footer__counter">Step 3 of 4 · Interpret</div>'
        +   primary
        + '</div>';
    }

    /* ── Stage 2: Explain the Diagram ── */

    function renderExplainStation() {
      var S    = DATA.explain;
      var allMarked = state.explainMarks.every(function (m) { return m !== null; });

      var partsHtml = S.parts.map(function (p, i) {
        var mark  = state.explainMarks[i];
        var input = state.explainInputs[i];
        var len   = input.length;

        var inputEl;
        if (!state.explainChecked) {
          inputEl = ''
            + '<textarea class="diag-explain-input" data-explain="' + i + '" placeholder="' + p.prompt + '" rows="3" maxlength="' + p.maxChars + '"></textarea>'
            + '<div class="diag-explain-count" data-count="' + i + '">' + len + '/' + p.maxChars + '</div>';
        } else {
          inputEl = ''
            + '<div class="diag-explain-frozen">' + (input.trim() || '<em>No answer given</em>') + '</div>'
            + '<div class="diag-explain-model">'
            +   '<span class="diag-explain-model__label">Model answer</span>'
            +   '<span class="diag-explain-model__text">' + p.modelAnswer + '</span>'
            + '</div>'
            + (mark === null
              ? '<div class="diag-interp-selfmark" style="margin-top:var(--sp-2);">'
              +   '<span class="diag-interp-selfmark__label">How did you do?</span>'
              +   '<button type="button" class="chain-selfmark-btn chain-selfmark-btn--ok"  data-explain-mark="' + i + '" data-val="ok">✓ Got it</button>'
              +   '<button type="button" class="chain-selfmark-btn chain-selfmark-btn--no"  data-explain-mark="' + i + '" data-val="no">✕ Not quite</button>'
              + '</div>'
              : '');
        }

        var cls = 'diag-explain-part'
          + (mark === true  ? ' is-correct' : '')
          + (mark === false ? ' is-wrong'   : '');

        return ''
          + '<div class="' + cls + '">'
          +   '<div class="diag-explain-part__head">'
          +     '<span class="diag-explain-part__num">' + p.num + '</span>'
          +     '<div>'
          +       '<div class="diag-explain-part__title">' + p.title + '</div>'
          +       '<div class="diag-explain-part__prompt">' + p.prompt + '</div>'
          +     '</div>'
          +     (mark !== null ? '<span class="diag-interp-row__mark ' + (mark ? 'is-ok' : 'is-no') + '">' + (mark ? '✓' : '✕') + '</span>' : '')
          +   '</div>'
          +   inputEl
          + '</div>';
      }).join('');

      var combinedLen = state.combinedInput.length;
      var combinedEl = state.explainChecked
        ? ''
          + '<div class="diag-explain-frozen">' + (state.combinedInput.trim() || '<em>No combined explanation written</em>') + '</div>'
          + (allMarked
            ? '<div class="diag-explain-model" style="margin-top:var(--sp-3);">'
            +   '<span class="diag-explain-model__label">Exam-quality answer</span>'
            +   '<span class="diag-explain-model__text">' + S.examAnswer + '</span>'
            + '</div>'
            : '')
        : ''
          + '<textarea class="diag-explain-input diag-explain-input--combined" data-combined="1" placeholder="' + S.combined.prompt + '" rows="4" maxlength="' + S.combined.maxChars + '"></textarea>'
          + '<div class="diag-explain-count" data-count="combined">' + combinedLen + '/' + S.combined.maxChars + '</div>';

      var criteriaHtml = S.criteria.map(function (c) {
        return '<span class="diag-criteria-chip">' + c + '</span>';
      }).join('');

      var primary;
      if (!state.explainChecked) {
        var anyFilled = state.explainInputs.some(function (v) { return v.trim().length > 0; });
        primary = '<button type="button" class="link-btn link-btn--primary"' + (anyFilled ? '' : ' disabled') + ' id="check-explain">Check my explanation →</button>';
      } else if (!allMarked) {
        primary = '<button type="button" class="link-btn link-btn--primary" disabled>Mark each part to continue</button>';
      } else {
        primary = '<button type="button" class="link-btn link-btn--primary" id="finish-diag">Station complete ✓</button>';
      }

      return ''
        + '<div class="link-card diag-explain-card">'
        +   '<div class="link-card__eyebrow"><span class="link-card__eyebrow-dot"></span>' + S.eyebrow + '</div>'
        +   '<h1 class="link-card__title">' + S.title + '</h1>'
        +   '<p class="link-card__lede">' + S.instruction + '</p>'
        +   renderScenario()
        +   '<div class="diag-explain-layout">'
        /* Left: diagram + legend */
        +     '<div class="diag-explain-left">'
        +       '<div class="diag-explain-left__label">AD/AS diagram</div>'
        +       '<div class="diag-wrap diag-wrap--small">'
        +         renderDiagramSVG({ showDashes: true, showEqLbls: true })
        +       '</div>'
        +       renderDiagLegend()
        +       '<div class="diag-explain-keys">' + criteriaHtml + '</div>'
        +     '</div>'
        /* Right: writing prompts */
        +     '<div class="diag-explain-right">'
        +       partsHtml
        +       '<div class="diag-combined">'
        +         '<div class="diag-combined__label">Your linked explanation</div>'
        +         '<div class="diag-combined__sub">Combine your three parts into a 2–3 sentence explanation.</div>'
        +         combinedEl
        +       '</div>'
        +     '</div>'
        +   '</div>'
        +   '<div class="link-info"><span class="link-info__icon">💡</span><span>' + S.hint + '</span></div>'
        + '</div>'
        + '<div class="link-footer">'
        +   '<button type="button" class="link-btn link-btn--ghost" id="back-stage">← Interpret stage</button>'
        +   '<div class="link-footer__counter">Step 4 of 4 · Explain</div>'
        +   primary
        + '</div>';
    }

    function renderDiagLegend() {
      return ''
        + '<div class="diag-legend">'
        +   '<span class="diag-legend__item"><span class="diag-legend__line" style="background:#2563eb"></span>SRAS = Short-run Aggregate Supply</span>'
        +   '<span class="diag-legend__item"><span class="diag-legend__line" style="background:#374151"></span>LRAS = Long-run Aggregate Supply</span>'
        +   '<span class="diag-legend__item"><span class="diag-legend__line" style="background:#059669"></span>AD = Aggregate Demand</span>'
        + '</div>';
    }

    /* ── Right rail ── */

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

      var stageItems = [
        { label: 'Select the Diagram',    sub: state.stage > 0 ? 'Complete' : 'Current' },
        { label: 'Label the Diagram',     sub: state.stage > 1 ? 'Complete' : state.stage === 1 ? 'Current' : 'Next' },
        { label: 'Interpret the Diagram', sub: state.stage > 2 ? 'Complete' : state.stage === 2 ? 'Current' : 'Next' },
        { label: 'Explain the Diagram',   sub: state.stage === 3 ? 'Current' : 'Up next' }
      ];
      var stagesHtml = stageItems.map(function (s, i) {
        var isDone    = state.stage > i;
        var isCurrent = state.stage === i;
        var cls = 'cards-list__item' + (isDone ? ' is-done' : isCurrent ? ' is-current' : '');
        return ''
          + '<div class="' + cls + '">'
          +   '<div class="cards-list__num">' + (isDone ? I.check : (i + 1)) + '</div>'
          +   '<div class="cards-list__body">'
          +     '<div class="cards-list__name">' + s.label + '</div>'
          +     '<div class="cards-list__sub" style="font-size:11px;color:var(--econ-muted)">' + s.sub + '</div>'
          +   '</div>'
          + '</div>';
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
        + '<aside class="right-rail">'
        +   '<div class="rail-card">'
        +     '<div class="rail-card__title">Topic progress</div>'
        +     '<div class="rail-card__sub">Step 2 of 3: Link</div>'
        +     sessionDots
        +   '</div>'
        +   '<div class="rail-card">'
        +     '<div class="rail-card__title" style="margin-bottom:var(--sp-3);">Stations</div>'
        +     '<div class="cards-list">' + stationsList + '</div>'
        +   '</div>'
        +   '<div class="rail-card">'
        +     '<div class="rail-card__title" style="margin-bottom:var(--sp-3);">This station</div>'
        +     '<div class="cards-list">' + stagesHtml + '</div>'
        +   '</div>'
        +   '<div class="rail-card">'
        +     '<div class="rail-card__title" style="margin-bottom:var(--sp-2);">Skill focus</div>'
        +     '<div class="link-rail__wgll">'
        +       '<div class="link-rail__wgll-item"><span class="link-rail__wgll-icon">📐</span><span>Analysis — Read the shift, name the outcomes.</span></div>'
        +     '</div>'
        +   '</div>'
        + '</aside>';
    }

    /* ── DOM helpers ── */

    function restoreTextareas() {
      for (var i = 0; i < 4; i++) {
        var el = document.querySelector('[data-interp="' + i + '"]');
        if (el) el.value = state.interpInputs[i];
      }
      for (var j = 0; j < 3; j++) {
        var el2 = document.querySelector('[data-explain="' + j + '"]');
        if (el2) el2.value = state.explainInputs[j];
      }
      var cel = document.querySelector('[data-combined]');
      if (cel) cel.value = state.combinedInput;
    }

    /* ── handlers ── */

    function attachHandlers() {

      /* Stage 0: diagram option select */
      document.querySelectorAll('[data-option]').forEach(function (el) {
        el.addEventListener('click', function () {
          if (state.selectChecked) return;
          state.selectedOption = el.getAttribute('data-option');
          render();
        });
      });

      var checkSelect = document.getElementById('check-select');
      if (checkSelect) checkSelect.addEventListener('click', function () {
        state.selectChecked = true;
        var opt = DATA.select.options.filter(function (o) { return o.id === state.selectedOption; })[0];
        if (opt && opt.correct) state.score++;
        render();
      });

      /* Stage 1: chip select */
      document.querySelectorAll('[data-chip]').forEach(function (el) {
        el.addEventListener('click', function (e) {
          e.stopPropagation();
          if (state.labelChecked) return;
          var id = el.getAttribute('data-chip');
          state.selected = (state.selected === id) ? null : id;
          render();
        });
      });

      /* Stage 0: zone click */
      document.querySelectorAll('[data-zone]').forEach(function (el) {
        el.addEventListener('click', function (e) {
          e.stopPropagation();
          if (state.labelChecked) return;
          var zoneId = el.getAttribute('data-zone');
          if (state.selected !== null) {
            /* Place selected chip */
            /* Remove any existing placement of this chip from other zones */
            Object.keys(state.placements).forEach(function (z) {
              if (state.placements[z] === state.selected) delete state.placements[z];
            });
            state.placements[zoneId] = state.selected;
            state.selected = null;
            render();
          } else if (state.placements[zoneId]) {
            /* Tap filled zone to unplace */
            delete state.placements[zoneId];
            render();
          }
        });
      });

      /* Stage 0: check labels */
      var checkLabels = document.getElementById('check-labels');
      if (checkLabels) checkLabels.addEventListener('click', function () {
        state.labelChecked = true;
        var nCorrect = DATA.label.chips.filter(function (c) {
          return c.correct && state.placements[c.zone] === c.id;
        }).length;
        state.score += nCorrect;
        render();
      });

      /* Stage 1: interpret inputs */
      document.querySelectorAll('[data-interp]').forEach(function (el) {
        el.addEventListener('input', function () {
          var i = parseInt(el.getAttribute('data-interp'), 10);
          state.interpInputs[i] = el.value;
          var btn = document.getElementById('check-interp');
          if (btn) {
            btn.disabled = !state.interpInputs.some(function (v) { return v.trim().length > 0; });
          }
        });
        el.addEventListener('focus', function () { state.lastFocused = parseInt(el.getAttribute('data-interp'), 10); });
      });

      /* Stage 1: vocab chips */
      document.querySelectorAll('[data-vocab-interp]').forEach(function (el) {
        el.addEventListener('click', function (e) {
          e.preventDefault();
          var term = el.getAttribute('data-vocab-interp');
          var idx  = state.lastFocused >= 0 ? state.lastFocused : 0;
          var ta   = document.querySelector('[data-interp="' + idx + '"]');
          if (!ta) return;
          var s = ta.selectionStart, ev = ta.selectionEnd, v = ta.value;
          var ins = (s > 0 && v[s-1] !== ' ') ? ' ' + term : term;
          ta.value = v.slice(0, s) + ins + v.slice(ev);
          ta.selectionStart = ta.selectionEnd = s + ins.length;
          ta.focus();
          state.interpInputs[idx] = ta.value;
        });
      });

      /* Stage 1: check */
      var checkInterp = document.getElementById('check-interp');
      if (checkInterp) checkInterp.addEventListener('click', function () {
        document.querySelectorAll('[data-interp]').forEach(function (el) {
          state.interpInputs[parseInt(el.getAttribute('data-interp'), 10)] = el.value;
        });
        state.interpChecked = true;
        render();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });

      /* Stage 1: self-mark */
      document.querySelectorAll('[data-interp-mark]').forEach(function (el) {
        el.addEventListener('click', function () {
          var i = parseInt(el.getAttribute('data-interp-mark'), 10);
          var ok = el.getAttribute('data-val') === 'ok';
          if (ok) state.score++;
          state.interpMarks[i] = ok;
          render();
        });
      });

      /* Stage 2: explain inputs */
      document.querySelectorAll('[data-explain]').forEach(function (el) {
        el.addEventListener('input', function () {
          var i = parseInt(el.getAttribute('data-explain'), 10);
          state.explainInputs[i] = el.value;
          var cnt = document.querySelector('[data-count="' + i + '"]');
          if (cnt) cnt.textContent = el.value.length + '/' + DATA.explain.parts[i].maxChars;
          var btn = document.getElementById('check-explain');
          if (btn) btn.disabled = !state.explainInputs.some(function (v) { return v.trim().length > 0; });
        });
        el.addEventListener('focus', function () { state.lastFocused = parseInt(el.getAttribute('data-explain'), 10); });
      });

      /* Stage 2: combined input */
      var combEl = document.querySelector('[data-combined]');
      if (combEl) combEl.addEventListener('input', function () {
        state.combinedInput = combEl.value;
        var cnt = document.querySelector('[data-count="combined"]');
        if (cnt) cnt.textContent = combEl.value.length + '/' + DATA.explain.combined.maxChars;
      });

      /* Stage 2: check */
      var checkExplain = document.getElementById('check-explain');
      if (checkExplain) checkExplain.addEventListener('click', function () {
        document.querySelectorAll('[data-explain]').forEach(function (el) {
          state.explainInputs[parseInt(el.getAttribute('data-explain'), 10)] = el.value;
        });
        var ce = document.querySelector('[data-combined]');
        if (ce) state.combinedInput = ce.value;
        state.explainChecked = true;
        render();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });

      /* Stage 2: self-mark */
      document.querySelectorAll('[data-explain-mark]').forEach(function (el) {
        el.addEventListener('click', function () {
          var i = parseInt(el.getAttribute('data-explain-mark'), 10);
          var ok = el.getAttribute('data-val') === 'ok';
          if (ok) state.score++;
          state.explainMarks[i] = ok;
          render();
          var allDone = state.explainMarks.every(function (m) { return m !== null; });
          if (allDone) {
            setTimeout(function () {
              var el2 = document.querySelector('.diag-combined');
              if (el2) el2.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 100);
          }
        });
      });

      /* Shared: next stage */
      var nextStageBtn = document.getElementById('next-stage');
      if (nextStageBtn) nextStageBtn.addEventListener('click', function () {
        state.stage++;
        render();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });

      /* Shared: back stage */
      var backStageBtn = document.getElementById('back-stage');
      if (backStageBtn) backStageBtn.addEventListener('click', function () {
        state.stage = Math.max(0, state.stage - 1);
        render();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });

      /* Finish */
      var finishBtn = document.getElementById('finish-diag');
      if (finishBtn) finishBtn.addEventListener('click', function () {
        alert('Spot the Flaw station coming next!');
      });
    }

    render();
  };
})();
