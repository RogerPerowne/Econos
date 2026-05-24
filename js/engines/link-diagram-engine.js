/* ============================================================
   ECONOS — Link It engine (Diagram Connector)
   Three stages: Select → Label → Read & Write
   ============================================================ */

(function () {
  'use strict';

  window.bootLinkDiagram = function () {
    if (Progress.getLinkUnlocked() < 1) { TopicLoader.go(TopicLoader.buildUrl('link_context.html')); return; }

    var I    = window.ECONOS_ICONS;
    var DATA = window.ECONOS_LINK_DIAGRAM;

    /* Shuffle select options and label chips once at boot */
    function shuffle(arr) {
      for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
      }
    }
    if (DATA.select && DATA.select.options) shuffle(DATA.select.options);
    if (DATA.label  && DATA.label.chips)   shuffle(DATA.label.chips);

    var state = {
      stage:    0,          // 0=select, 1=label, 2=read-write

      /* Stage 0: select */
      selectedOption: null, // id of chosen diagram option
      selectChecked:  false,

      /* Stage 1: label */
      selected:   null,     // selected chip id
      placements: {},       // zoneId → chipId
      labelChecked: false,

      /* Stage 2: read & write */
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

    /* ── main render ── */

    function render() {
      var root = document.getElementById('app-root');
      root.innerHTML = ''
        + '<div class="app theme--link">'
        +   Shell.renderSidebar({ activeNav: 'My topics' })
        +   '<div id="main-content" class="main" tabindex="-1" role="main">'
        +     Shell.renderTopbar({ backUrl: DATA.backUrl, backLabel: 'Back to dashboard', sessionLabel: DATA.sessionLabel || TopicLoader.sessionLabel('link'), topicTitle: DATA.topic })
        +     '<div class="page">'
        +       '<div class="link-station">'
        +         (state.stage === 0 ? renderSelectStation()   :
                   state.stage === 1 ? renderLabelStation()    :
                                       renderExplainStation())
        +       '</div>'
        +       renderRail()
        +     '</div>'
        +   '</div>'
        + '</div>';
      restoreTextareas();
      attachHandlers();
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

    /* ── Diagram SVG — data-driven renderer ──
       DATA.diagram specifies:
         xLabel / yLabel   : axis titles
         lines[]           : { x1,y1,x2,y2, stroke, strokeWidth, label,labelX,labelY,labelFill }
         eqDots[]          : { cx,cy, fill, initLabel?,initLabelX?,initLabelY?,
                                           newLabel?, newLabelX?, newLabelY? }
         guides[]          : shown at stage 2; each { x1,y1,x2,y2,
                               tickLeft?,tickLeftY?,  tickBottom?,tickBottomX? }
         shiftArrow        : shown at stage 2; { x1,y1,x2,y2, stroke }
         ariaLabel         : SVG accessible label
    */

    function renderDiagramSVG(opts) {
      var showDashes  = opts && opts.showDashes;
      var showEqLbls  = opts && opts.showEqLbls;
      var D = DATA.diagram || {};

      var xLabel = D.xLabel || 'Real output';
      var yLabel = D.yLabel || 'Price level';

      /* Collect unique arrowhead colours needed */
      var arrowColours = {};
      if (showDashes && D.shiftArrow && D.shiftArrow.stroke) {
        arrowColours[D.shiftArrow.stroke] = true;
      }
      var markerDefs = Object.keys(arrowColours).map(function (col) {
        var id = 'arr-' + col.replace('#', '');
        return '<marker id="' + id + '" markerWidth="4" markerHeight="4" refX="2" refY="2" orient="auto">'
          + '<path d="M0,0 L4,2 L0,4 Z" fill="' + col + '"/>'
          + '</marker>';
      }).join('');

      /* Lines (curves) */
      var linesHtml = (D.lines || []).map(function (ln) {
        return '<line x1="' + ln.x1 + '" y1="' + ln.y1 + '" x2="' + ln.x2 + '" y2="' + ln.y2 + '"'
          + ' stroke="' + (ln.stroke || '#374151') + '" stroke-width="' + (ln.strokeWidth || 2) + '"/>';
      }).join('');

      /* Curve labels (outside clip group, positioned by data) */
      var lineLabels = (D.lines || []).filter(function (ln) { return ln.label; }).map(function (ln) {
        return '<text x="' + ln.labelX + '" y="' + ln.labelY + '" font-size="11"'
          + ' fill="' + (ln.labelFill || ln.stroke || '#374151') + '">' + ln.label + '</text>';
      }).join('');

      /* Guide lines + tick labels — shown at stage 2 */
      var guidesHtml = '';
      if (showDashes) {
        guidesHtml = (D.guides || []).map(function (g) {
          var s = '<line x1="' + g.x1 + '" y1="' + g.y1 + '" x2="' + g.x2 + '" y2="' + g.y2 + '"'
            + ' stroke="#9ca3af" stroke-width="1" stroke-dasharray="4,3"/>';
          if (g.tickLeft) {
            s += '<text x="96" y="' + g.tickLeftY + '" font-size="10" fill="#6b7280" text-anchor="end">' + g.tickLeft + '</text>';
          }
          if (g.tickBottom) {
            s += '<text x="' + g.tickBottomX + '" y="416" font-size="10" fill="#6b7280" text-anchor="middle">' + g.tickBottom + '</text>';
          }
          return s;
        }).join('');
      }

      /* Shift arrow — shown at stage 2 */
      var shiftArrow = '';
      if (showDashes && D.shiftArrow) {
        var sa = D.shiftArrow;
        var arrowId = 'arr-' + (sa.stroke || '#7c3aed').replace('#', '');
        shiftArrow = '<line x1="' + sa.x1 + '" y1="' + sa.y1 + '" x2="' + sa.x2 + '" y2="' + sa.y2 + '"'
          + ' stroke="' + (sa.stroke || '#7c3aed') + '" stroke-width="1.5" marker-end="url(#' + arrowId + ')"/>';
      }

      /* Equilibrium dots + labels */
      var eqHtml = (D.eqDots || []).map(function (eq) {
        var s = '<circle cx="' + eq.cx + '" cy="' + eq.cy + '" r="8" fill="white"/>'
              + '<circle cx="' + eq.cx + '" cy="' + eq.cy + '" r="5" fill="' + (eq.fill || '#2563eb') + '"/>';
        if (showEqLbls) {
          if (eq.initLabel) {
            s += '<text x="' + eq.initLabelX + '" y="' + eq.initLabelY + '" font-size="10" fill="' + (eq.fill || '#2563eb') + '">' + eq.initLabel + '</text>';
            if (eq.initLabel2) s += '<text x="' + eq.initLabelX + '" y="' + (eq.initLabelY + 12) + '" font-size="10" fill="' + (eq.fill || '#2563eb') + '">' + eq.initLabel2 + '</text>';
          }
          if (eq.newLabel) {
            s += '<text x="' + eq.newLabelX + '" y="' + eq.newLabelY + '" font-size="10" fill="' + (eq.fill || '#2563eb') + '">' + eq.newLabel + '</text>';
            if (eq.newLabel2) s += '<text x="' + eq.newLabelX + '" y="' + (eq.newLabelY + 12) + '" font-size="10" fill="' + (eq.fill || '#2563eb') + '">' + eq.newLabel2 + '</text>';
          }
        }
        return s;
      }).join('');

      return ''
        + '<svg viewBox="0 0 560 430" xmlns="http://www.w3.org/2000/svg" class="diag-svg" aria-label="' + (D.ariaLabel || 'Economic diagram') + '">'
        + '<defs>'
        +   '<clipPath id="chart-clip"><rect x="101" y="21" width="442" height="378"/></clipPath>'
        +   markerDefs
        + '</defs>'
        /* Y-axis */
        + '<line x1="100" y1="20" x2="100" y2="400" stroke="#1f2937" stroke-width="2"/>'
        + '<polygon points="100,13 95,26 105,26" fill="#1f2937"/>'
        + '<text x="28" y="215" font-size="12" fill="#6b7280" text-anchor="middle" transform="rotate(-90,28,215)">' + yLabel + '</text>'
        /* X-axis */
        + '<line x1="100" y1="400" x2="545" y2="400" stroke="#1f2937" stroke-width="2"/>'
        + '<polygon points="552,400 539,395 539,405" fill="#1f2937"/>'
        + '<text x="330" y="428" font-size="12" fill="#6b7280" text-anchor="middle">' + xLabel + '</text>'
        /* Clipped content: lines, guides, shift arrow */
        + '<g clip-path="url(#chart-clip)">'
        +   linesHtml
        +   guidesHtml
        +   shiftArrow
        + '</g>'
        /* Labels outside clip */
        + lineLabels
        /* Equilibrium dots and labels on top */
        + eqHtml
        + '</svg>';
    }

    /* HTML overlay drop zones — absolutely positioned over the SVG.
       Zone positions come from DATA.label.zones: { id, pctX, pctY, pctW }
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

    /* Build ZONES lookup from DATA.label.zones for O(1) access */
    var ZONES = (function () {
      var map = {};
      (DATA.label.zones || []).forEach(function (z) { map[z.id] = z; });
      return map;
    }());

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
      /* SRAS₁ (blue solid), SRAS₂ (blue dashed — same curve shifted left), AD (green), LRAS (grey) */
      /* SRAS₂ starts at x=8 — clips cleanly behind y-axis */
      /* E₁ = SRAS₁∩AD ≈ (62,39); E₂ = SRAS₂∩AD ≈ (49,29) — algebraically exact */
      return '<svg viewBox="0 0 120 90" class="diag-thumb" aria-hidden="true">'
        + thumbDefs('clip-ta', 'arr-ta', '#2563eb')
        + thumbAxes()
        + '<g clip-path="url(#clip-ta)">'
          + '<line x1="64" y1="6"  x2="64" y2="84" stroke="#6b7280" stroke-width="1" stroke-dasharray="3,2"/>'
          + '<line x1="25" y1="84" x2="90" y2="6"  stroke="#2563eb" stroke-width="2"/>'
          + '<line x1="8"  y1="80" x2="68" y2="6"  stroke="#2563eb" stroke-width="2" stroke-dasharray="4,2" opacity="0.6"/>'
          + '<line x1="22" y1="8"  x2="108" y2="75" stroke="#059669" stroke-width="2"/>'
        + '</g>'
        + '<circle cx="62" cy="39" r="5" fill="white"/>'
        + '<circle cx="62" cy="39" r="3" fill="#2563eb"/>'
        + '<circle cx="49" cy="29" r="5" fill="white"/>'
        + '<circle cx="49" cy="29" r="3" fill="#2563eb" opacity="0.6"/>'
        + '<text x="67" y="50" font-size="9" font-weight="600" fill="#2563eb">E₁</text>'
        + '<text x="36" y="26" font-size="9" font-weight="600" fill="#2563eb" opacity="0.8">E₂</text>'
        /* At y=18: SRAS₁ at x=80, SRAS₂ at x=58 — arrow from 76→62, 4px buffer each side */
        + '<line x1="76" y1="18" x2="62" y2="18" stroke="#2563eb" stroke-width="1.5" marker-end="url(#arr-ta)"/>'
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
        /* E₁ = SRAS∩AD₁ ≈ (63,44); E₂ = SRAS∩AD₂ ≈ (73,34) — algebraically exact */
        + '<circle cx="63" cy="44" r="5" fill="white"/>'
        + '<circle cx="63" cy="44" r="3" fill="#2563eb"/>'
        + '<circle cx="73" cy="34" r="5" fill="white"/>'
        + '<circle cx="73" cy="34" r="3" fill="#059669" opacity="0.7"/>'
        + '<text x="51" y="55" font-size="9" font-weight="600" fill="#2563eb">E₁</text>'
        + '<text x="78" y="30" font-size="9" font-weight="600" fill="#059669">E₂</text>'
        /* At y=60: AD₁ at x≈81, AD₂ at x≈100. Arrow from 85→96, 4px buffer, points right */
        + '<line x1="85" y1="60" x2="96" y2="60" stroke="#059669" stroke-width="1.5" marker-end="url(#arr-tb)"/>'
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
        /* E₁ = AD at old LRAS (x=55) ≈ (55,34); E₂ = AD at new LRAS (x=75) ≈ (75,50) */
        + '<circle cx="55" cy="34" r="5" fill="white"/>'
        + '<circle cx="55" cy="34" r="3" fill="#2563eb" opacity="0.6"/>'
        + '<circle cx="75" cy="50" r="5" fill="white"/>'
        + '<circle cx="75" cy="50" r="3" fill="#059669"/>'
        + '<text x="40" y="46" font-size="9" font-weight="600" fill="#2563eb" opacity="0.7">E₁</text>'
        + '<text x="80" y="62" font-size="9" font-weight="600" fill="#059669">E₂</text>'
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
        /* E₁ = SRAS∩AD₁ ≈ (63,44); E₂ = SRAS∩AD₂ ≈ (54,53) — algebraically exact */
        + '<circle cx="63" cy="44" r="5" fill="white"/>'
        + '<circle cx="63" cy="44" r="3" fill="#2563eb"/>'
        + '<circle cx="54" cy="53" r="5" fill="white"/>'
        + '<circle cx="54" cy="53" r="3" fill="#059669" opacity="0.7"/>'
        + '<text x="68" y="40" font-size="9" font-weight="600" fill="#2563eb">E₁</text>'
        + '<text x="41" y="64" font-size="9" font-weight="600" fill="#059669">E₂</text>'
        /* At y=60: AD₁ at x≈81, AD₂ at x≈62. Arrow from 77→66, 4px buffer, points left */
        + '<line x1="77" y1="60" x2="66" y2="60" stroke="#059669" stroke-width="1.5" marker-end="url(#arr-td)"/>'
        + '</svg>';
    }

    /* ── Micro (supply/demand) thumbnails ──
       Thumbnail chart area: x=[21,113], y=[6,84]. Axes at x=20 (vertical) / y=85 (horizontal).
       S (blue, upward slope): (35,84)→(100,10).  D (green, downward): (22,10)→(108,78).
       E₁ intersection ≈ (68,46).  Shifted curve is dashed at 0.6 opacity. */
    function thumbSRight() {
      /* Supply shifts right: P↓, Q↑ — E₂≈(80,56) */
      return '<svg viewBox="0 0 120 90" class="diag-thumb" aria-hidden="true">'
        + thumbDefs('clip-sr', 'arr-sr', '#2563eb')
        + thumbAxes()
        + '<g clip-path="url(#clip-sr)">'
          + '<line x1="35" y1="84" x2="100" y2="10" stroke="#2563eb" stroke-width="2"/>'
          + '<line x1="55" y1="84" x2="120" y2="10" stroke="#2563eb" stroke-width="2" stroke-dasharray="4,2" opacity="0.6"/>'
          + '<line x1="22" y1="10" x2="108" y2="78" stroke="#059669" stroke-width="2"/>'
        + '</g>'
        + '<circle cx="68" cy="46" r="5" fill="white"/>'
        + '<circle cx="68" cy="46" r="3" fill="#2563eb"/>'
        + '<circle cx="80" cy="56" r="5" fill="white"/>'
        + '<circle cx="80" cy="56" r="3" fill="#2563eb" opacity="0.6"/>'
        + '<text x="55" y="42" font-size="9" font-weight="600" fill="#2563eb">E₁</text>'
        + '<text x="83" y="65" font-size="9" font-weight="600" fill="#2563eb" opacity="0.8">E₂</text>'
        /* Arrow at y=30 from S₁ (x≈78) to S₂ (x≈98), 4px buffer */
        + '<line x1="82" y1="30" x2="93" y2="30" stroke="#2563eb" stroke-width="1.5" marker-end="url(#arr-sr)"/>'
        + '</svg>';
    }

    function thumbSLeft() {
      /* Supply shifts left: P↑, Q↓ — E₂≈(57,38) */
      return '<svg viewBox="0 0 120 90" class="diag-thumb" aria-hidden="true">'
        + thumbDefs('clip-sl', 'arr-sl', '#2563eb')
        + thumbAxes()
        + '<g clip-path="url(#clip-sl)">'
          + '<line x1="35" y1="84" x2="100" y2="10" stroke="#2563eb" stroke-width="2"/>'
          + '<line x1="17" y1="84" x2="82"  y2="10" stroke="#2563eb" stroke-width="2" stroke-dasharray="4,2" opacity="0.6"/>'
          + '<line x1="22" y1="10" x2="108" y2="78" stroke="#059669" stroke-width="2"/>'
        + '</g>'
        + '<circle cx="68" cy="46" r="5" fill="white"/>'
        + '<circle cx="68" cy="46" r="3" fill="#2563eb"/>'
        + '<circle cx="57" cy="38" r="5" fill="white"/>'
        + '<circle cx="57" cy="38" r="3" fill="#2563eb" opacity="0.6"/>'
        + '<text x="71" y="54" font-size="9" font-weight="600" fill="#2563eb">E₁</text>'
        + '<text x="44" y="35" font-size="9" font-weight="600" fill="#2563eb" opacity="0.8">E₂</text>'
        /* Arrow at y=30 from S₁ (x≈78) to S₂ (x≈60), 4px buffer, points left */
        + '<line x1="74" y1="30" x2="64" y2="30" stroke="#2563eb" stroke-width="1.5" marker-end="url(#arr-sl)"/>'
        + '</svg>';
    }

    function thumbDRight() {
      /* Demand shifts right: P↑, Q↑ — E₂≈(76,37) */
      return '<svg viewBox="0 0 120 90" class="diag-thumb" aria-hidden="true">'
        + thumbDefs('clip-dr', 'arr-dr', '#059669')
        + thumbAxes()
        + '<g clip-path="url(#clip-dr)">'
          + '<line x1="35"  y1="84" x2="100" y2="10" stroke="#2563eb" stroke-width="2"/>'
          + '<line x1="22"  y1="10" x2="108" y2="78" stroke="#059669" stroke-width="2"/>'
          + '<line x1="42"  y1="10" x2="128" y2="78" stroke="#059669" stroke-width="2" stroke-dasharray="4,2" opacity="0.6"/>'
        + '</g>'
        + '<circle cx="68" cy="46" r="5" fill="white"/>'
        + '<circle cx="68" cy="46" r="3" fill="#059669"/>'
        + '<circle cx="76" cy="37" r="5" fill="white"/>'
        + '<circle cx="76" cy="37" r="3" fill="#059669" opacity="0.6"/>'
        + '<text x="55" y="56" font-size="9" font-weight="600" fill="#059669">E₁</text>'
        + '<text x="79" y="34" font-size="9" font-weight="600" fill="#059669" opacity="0.8">E₂</text>'
        /* Arrow at y=26 from D₁ (x≈47) to D₂ (x≈67), 4px buffer, points right */
        + '<line x1="51" y1="26" x2="62" y2="26" stroke="#059669" stroke-width="1.5" marker-end="url(#arr-dr)"/>'
        + '</svg>';
    }

    function thumbDLeft() {
      /* Demand shifts left: P↓, Q↓ — E₂≈(61,55) */
      return '<svg viewBox="0 0 120 90" class="diag-thumb" aria-hidden="true">'
        + thumbDefs('clip-dl', 'arr-dl', '#059669')
        + thumbAxes()
        + '<g clip-path="url(#clip-dl)">'
          + '<line x1="35" y1="84" x2="100" y2="10" stroke="#2563eb" stroke-width="2"/>'
          + '<line x1="22" y1="10" x2="108" y2="78" stroke="#059669" stroke-width="2"/>'
          + '<line x1="4"  y1="10" x2="90"  y2="78" stroke="#059669" stroke-width="2" stroke-dasharray="4,2" opacity="0.6"/>'
        + '</g>'
        + '<circle cx="68" cy="46" r="5" fill="white"/>'
        + '<circle cx="68" cy="46" r="3" fill="#059669"/>'
        + '<circle cx="61" cy="55" r="5" fill="white"/>'
        + '<circle cx="61" cy="55" r="3" fill="#059669" opacity="0.6"/>'
        + '<text x="71" y="43" font-size="9" font-weight="600" fill="#059669">E₁</text>'
        + '<text x="46" y="68" font-size="9" font-weight="600" fill="#059669" opacity="0.8">E₂</text>'
        /* Arrow at y=26 from D₁ (x≈47) to D₂ (x≈29), 4px buffer, points left */
        + '<line x1="43" y1="26" x2="33" y2="26" stroke="#059669" stroke-width="1.5" marker-end="url(#arr-dl)"/>'
        + '</svg>';
    }

    var THUMBS = {
      'sras-left':  thumbSRASLeft,
      'ad-right':   thumbADRight,
      'lras-right': thumbLRASRight,
      'ad-left':    thumbADLeft,
      's-right':    thumbSRight,
      's-left':     thumbSLeft,
      'd-right':    thumbDRight,
      'd-left':     thumbDLeft
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
        +   '<div class="link-footer__counter">Step 1 of 3 · Select</div>'
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
        primary = '<button type="button" class="link-btn link-btn--primary" id="next-stage">Read &amp; write →</button>';
      }

      return ''
        + '<div class="link-card">'
        +   '<div class="link-card__eyebrow"><span class="link-card__eyebrow-dot"></span>' + S.eyebrow + '</div>'
        +   '<h1 class="link-card__title">' + S.title + '</h1>'
        +   (chipsHtml
              ? '<div class="diag-chip-panel">'
              +   '<div class="diag-chip-panel__instruction">👆 Click a label to select it, then click a dashed zone on the diagram to place it.</div>'
              +   '<div class="diag-chips__row">' + chipsHtml + '</div>'
              + '</div>'
              : '')
        +   '<div class="diag-wrap">'
        +     renderDiagramSVG({ showDashes: state.labelChecked, showEqLbls: false })
        +     zoneOverlays
        +   '</div>'
        +   renderDiagLegend()
        +   feedbackHtml
        +   '<div class="link-info"><span class="link-info__icon">💡</span><span>' + S.hint + '</span></div>'
        + '</div>'
        + '<div class="link-footer">'
        +   '<a href="' + DATA.backUrl + '" class="link-btn link-btn--ghost">← Back</a>'
        +   '<div class="link-footer__counter">Step 2 of 3 · Label</div>'
        +   primary
        + '</div>';
    }

    /* ── Stage 2: Read & Write the Diagram ── */

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
        primary = '<button type="button" class="link-btn link-btn--primary" id="finish-diag">Go to judgement →</button>';
      }

      return ''
        + '<div class="link-card">'
        +   '<div class="link-card__eyebrow"><span class="link-card__eyebrow-dot"></span>' + S.eyebrow + '</div>'
        +   '<h1 class="link-card__title">' + S.title + '</h1>'
        +   '<p class="link-card__lede">' + S.instruction + '</p>'
        +   renderScenario()
        /* Diagram above writing prompts */
        +   '<div class="diag-wrap">'
        +     renderDiagramSVG({ showDashes: true, showEqLbls: true })
        +   '</div>'
        +   renderDiagLegend()
        +   '<div class="diag-explain-keys">' + criteriaHtml + '</div>'
        +   partsHtml
        +   '<div class="diag-combined">'
        +     '<div class="diag-combined__label">Your linked explanation</div>'
        +     '<div class="diag-combined__sub">Combine your three parts into a 2–3 sentence explanation.</div>'
        +     combinedEl
        +   '</div>'
        +   '<div class="link-info"><span class="link-info__icon">💡</span><span>' + S.hint + '</span></div>'
        + '</div>'
        + '<div class="link-footer">'
        +   '<button type="button" class="link-btn link-btn--ghost" id="back-stage">← Label stage</button>'
        +   '<div class="link-footer__counter">Step 3 of 3 · Read &amp; write</div>'
        +   primary
        + '</div>';
    }

    function renderDiagLegend() {
      var D = DATA.diagram || {};
      var items;
      if (D.legend && D.legend.length) {
        items = D.legend.map(function (l) {
          return '<span class="diag-legend__item"><span class="diag-legend__line" style="background:' + l.color + '"></span>' + l.text + '</span>';
        }).join('');
      } else {
        /* Default: AD/AS macro legend (backwards-compatible) */
        items = '<span class="diag-legend__item"><span class="diag-legend__line" style="background:#2563eb"></span>SRAS = Short-run Aggregate Supply</span>'
              + '<span class="diag-legend__item"><span class="diag-legend__line" style="background:#374151"></span>LRAS = Long-run Aggregate Supply</span>'
              + '<span class="diag-legend__item"><span class="diag-legend__line" style="background:#059669"></span>AD = Aggregate Demand</span>';
      }
      return '<div class="diag-legend">' + items + '</div>';
    }

    /* ── Right rail ── */

    function renderRail() {
      var unlockedIdx = Progress.getLinkUnlocked();
      var stationsList = DATA.stations.map(function (st, i) {
        var isCurrent = i === DATA.currentStationIdx;
        var isDone    = i <= unlockedIdx && !isCurrent;
        var isLocked  = i > unlockedIdx && !isCurrent;
        var status    = isDone ? 'done' : (isCurrent ? 'current' : '');
        var tag       = isLocked ? 'div' : 'a';
        var attrs     = isLocked ? '' : ' href="' + st.href + '"';
        var lockChip  = isLocked ? '<span class="cards-list__chip cards-list__chip--locked">Locked</span>' : '';
        return ''
          + '<' + tag + ' class="cards-list__item' + (status ? ' is-' + status : '') + (!isLocked ? ' is-linked' : '') + '"' + attrs + '>'
          +   '<div class="cards-list__num">' + (isDone ? I.check : (i + 1)) + '</div>'
          +   '<div class="cards-list__body">'
          +     '<div class="cards-list__name">' + st.label + '</div>'
          +     (isCurrent ? '<span class="cards-list__chip">Current</span>' : lockChip)
          +   '</div>'
          + '</' + tag + '>';
      }).join('');

      var stageItems = [
        { label: 'Select the Diagram',  sub: state.stage > 0 ? 'Complete' : 'Current' },
        { label: 'Label the Diagram',   sub: state.stage > 1 ? 'Complete' : state.stage === 1 ? 'Current' : 'Next' },
        { label: 'Read & Write',        sub: state.stage === 2 ? 'Current' : 'Up next' }
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
        + '<div class="right-rail">' + Shell.renderStages()
        +   '<div class="rail-card">'
        +     '<div class="rail-card__title">Topic progress</div>'
        +     '<div class="rail-card__sub">Step 2 of 3: Link</div>'
        +     sessionDots
        +   '</div>'
        +   '<div class="rail-card">'
        +     '<div class="rail-card__title" style="margin-bottom:var(--sp-3);">Steps</div>'
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
        + '</div>';
    }

    /* ── DOM helpers ── */

    function restoreTextareas() {
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
        try {
          var stored = JSON.parse(localStorage.getItem('econos_link_scores') || '{}');
          stored.diagram = state.score;
          localStorage.setItem('econos_link_scores', JSON.stringify(stored));
          var u = Progress.getLinkUnlocked();
          Progress.setLinkUnlocked(Math.max(u, 2));
        } catch (e) {}
        TopicLoader.go(DATA.nextUrl || DATA.backUrl);
      });
    }

    render();
  };
})();
