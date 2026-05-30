/* js/blocks/econ-diagram.js
   ───────────────────────────────────────────────────────────────────────────
   Declarative interactive economic diagram block.

   The hand-rolled SVG charts in js/icons.js (inflation2022AdAs, etc.) compute
   line intercepts and equilibrium intersections by hand for every shift. That
   makes them error-prone (the C4 audit pass found three E-points sitting on
   one curve but off the other by 8–18 px) and inaccessible to anyone who
   can't do the algebra.

   This block flips it: authors describe WHAT the chart shows — semantic shifts
   on each curve — and the engine computes the geometry. E.g.

     { type: 'econDiagram', chart: 'adas',
       views: [
         { label: 'Baseline',    shifts: {} },
         { label: 'AD↑ rebound', shifts: { AD: 80 } },
         { label: 'SRAS↓ shock', shifts: { AD: 80, SRAS: -160 } },
         { label: 'BoE response',shifts: { AD: -20, SRAS: -160 },
           analysis: 'Monetary tightening drags AD back …' }
       ]
     }

   reproduces the Conflicts C4 four-step AD/AS chart from data alone. The
   engine handles: line equations from shifts, equilibrium intersections,
   label placement above the dot, dashed axis leaders, faded prior states,
   and CSS-only step-toggle UI (radio inputs + sibling selectors — CSP-safe).

   Chart families today: 'adas'. Phillips and PPF land next; the registry
   shape below makes adding one a ~30-line addition.
   ─────────────────────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  var U = window.ECONOS_BLOCK_UTILS;
  var B = window.ECONOS_BLOCKS;

  /* ── Chart-family registry ───────────────────────────────────────────────
     Each entry declares the geometry of a chart family in semantic units.
     The engine renders any view by combining a family's `baseline` curves
     with the shifts authored on each view. */
  var CHARTS = {
    adas: {
      viewBox: { w: 780, h: 580 },
      plot:    { xMin: 80, xMax: 680, yMin: 40, yMax: 520 },
      axes: {
        xLabel: 'Y', xSub: 'real output',
        yLabel: 'P', ySub: 'price level'
      },
      // Vertical reference at x=400 (LRAS / potential output).
      anchors: [{ kind: 'vertical', x: 400, label: 'LRAS', tone: 'slate' }],
      // Curves are defined by a slope + the c that puts the baseline
      // equilibrium at (400, 305). Engine derives endpoints from plot bounds.
      baseline: {
        AD:   { slope:  0.7, c: 25,  tone: 'blue',  display: 'AD₀'   },
        SRAS: { slope: -0.7, c: 585, tone: 'slate', display: 'SRAS₀' }
      },
      // Equilibrium computed from these two curves' intersection.
      equilibrium: { from: ['AD', 'SRAS'], baseLabel: 'E' }
    }
    // phillips: { ... }  ← landing next
    // ppf:      { ... }
  };

  /* ── Tone palette for equilibrium markers per view index ────────────────
     View 0 (baseline) = navy. Subsequent equilibria cycle so the eye can
     track "which dot is this view's". Matches Conflicts C4 colour grammar. */
  var EQ_TONES = ['slate', 'amber', 'rose', 'green', 'purple', 'blue'];

  var EQ_HEX = {
    slate:  { stroke: '#0B1426', label: '#0B1426' },
    amber:  { stroke: '#D97706', label: '#D97706' },
    rose:   { stroke: '#DC2626', label: '#DC2626' },
    green:  { stroke: '#16A34A', label: '#16A34A' },
    purple: { stroke: '#7E22CE', label: '#7E22CE' },
    blue:   { stroke: '#2563EB', label: '#2563EB' }
  };

  var CURVE_HEX = {
    blue:  '#2563EB',
    slate: '#0B1426',
    rose:  '#DC2626',
    green: '#16A34A',
    amber: '#D97706',
    purple: '#7E22CE'
  };

  /* ── Pure geometry helpers ─────────────────────────────────────────────── */

  // Given slope m and intercept c, compute line endpoints clipped to the plot box.
  function lineEndpoints(slope, c, plot) {
    // y = m*x + c; clip x to [xMin, xMax] then if y exceeds [yMin, yMax] clip back.
    var x0 = plot.xMin;
    var y0 = slope * x0 + c;
    var x1 = plot.xMax;
    var y1 = slope * x1 + c;
    // If y0 or y1 falls outside, clip on y first.
    if (y0 < plot.yMin) { y0 = plot.yMin; x0 = (y0 - c) / slope; }
    if (y0 > plot.yMax) { y0 = plot.yMax; x0 = (y0 - c) / slope; }
    if (y1 < plot.yMin) { y1 = plot.yMin; x1 = (y1 - c) / slope; }
    if (y1 > plot.yMax) { y1 = plot.yMax; x1 = (y1 - c) / slope; }
    return { x0: x0, y0: y0, x1: x1, y1: y1 };
  }

  // Intersection of two lines y = m1*x + c1 and y = m2*x + c2.
  function intersect(m1, c1, m2, c2) {
    if (Math.abs(m1 - m2) < 1e-9) return null;
    var x = (c2 - c1) / (m1 - m2);
    var y = m1 * x + c1;
    return { x: x, y: y };
  }

  // Apply a horizontal shift Δ to a curve: y = m*(x-Δ) + c = m*x + (c - m*Δ).
  function shiftedC(baseline, delta) {
    return baseline.c - baseline.slope * (delta || 0);
  }

  /* ── SVG fragment builders ─────────────────────────────────────────────── */

  function svgLine(x1, y1, x2, y2, attrs) {
    return '<line x1="' + x1.toFixed(2) + '" y1="' + y1.toFixed(2) +
      '" x2="' + x2.toFixed(2) + '" y2="' + y2.toFixed(2) + '" ' + attrs + '/>';
  }

  function svgText(x, y, text, attrs) {
    return '<text x="' + x.toFixed(2) + '" y="' + y.toFixed(2) + '" ' + attrs + '>' +
      U.escapeHtml(text) + '</text>';
  }

  function svgCircle(cx, cy, r, attrs) {
    return '<circle cx="' + cx.toFixed(2) + '" cy="' + cy.toFixed(2) +
      '" r="' + r + '" ' + attrs + '/>';
  }

  /* ── Axes and anchors (rendered once, always visible) ──────────────────── */
  function renderFrame(chart) {
    var p = chart.plot;
    var axes = chart.axes;
    var xAxisY = p.yMax;
    var yAxisX = p.xMin;
    // Axes extend slightly past plot.xMax so the arrow sits in the right
    // margin; viewBox.w is sized to leave ~90px of label slot beyond there.
    var xArrowAt = p.xMax + 10;
    var bits = [];
    // X axis
    bits.push(svgLine(yAxisX, xAxisY, xArrowAt, xAxisY,
      'stroke="#0B1426" stroke-width="1.8"'));
    bits.push('<polygon points="' + xArrowAt + ',' + xAxisY + ' ' +
      (xArrowAt - 10) + ',' + (xAxisY - 5) + ' ' + (xArrowAt - 10) + ',' + (xAxisY + 5) + '" fill="#0B1426"/>');
    // Y axis
    bits.push(svgLine(yAxisX, 30, yAxisX, xAxisY,
      'stroke="#0B1426" stroke-width="1.8"'));
    bits.push('<polygon points="' + yAxisX + ',30 ' +
      (yAxisX - 5) + ',40 ' + (yAxisX + 5) + ',40" fill="#0B1426"/>');
    // Labels
    bits.push(svgText(yAxisX - 8, 34, axes.yLabel,
      'font-size="14" font-weight="700" fill="#0B1426" text-anchor="end"'));
    bits.push(svgText(12, 52, axes.ySub,
      'font-size="11" fill="#64748B"'));
    bits.push(svgText(xArrowAt + 6, xAxisY + 5, axes.xLabel,
      'font-size="14" font-weight="700" fill="#0B1426"'));
    bits.push(svgText(xArrowAt - 50, xAxisY + 26, axes.xSub,
      'font-size="11" fill="#64748B"'));
    // Anchors (e.g. LRAS)
    (chart.anchors || []).forEach(function (a) {
      if (a.kind === 'vertical') {
        bits.push(svgLine(a.x, 40, a.x, xAxisY,
          'stroke="#94A3B8" stroke-width="1.4" stroke-dasharray="5 5" opacity="0.55"'));
        bits.push(svgText(a.x + 8, 54, a.label,
          'font-size="11" font-weight="700" fill="#94A3B8"'));
      }
    });
    return bits.join('');
  }

  /* ── A single curve, possibly faded ────────────────────────────────────── */
  function renderCurve(curve, c, opts) {
    var p = opts.plot;
    var ep = lineEndpoints(curve.slope, c, p);
    var hex = CURVE_HEX[curve.tone] || '#0B1426';
    var faded = opts.faded;
    var stroke = faded ? '#94A3B8' : hex;
    var width = faded ? 1.6 : 3;
    var opacity = faded ? 0.5 : 1;
    var dash = faded ? ' stroke-dasharray="6 5"' : '';
    var labelBits = '';
    if (opts.label && !opts.hideLabel) {
      var lhex = faded ? '#94A3B8' : hex;
      var fw = faded ? 700 : 800;
      var fs = faded ? 12 : 14;
      labelBits = svgText(ep.x1 + 8, ep.y1 + 4, opts.label,
        'font-size="' + fs + '" font-weight="' + fw + '" fill="' + lhex + '"');
    }
    return svgLine(ep.x0, ep.y0, ep.x1, ep.y1,
      'stroke="' + stroke + '" stroke-width="' + width + '" stroke-linecap="round" opacity="' +
      opacity + '"' + dash) + labelBits;
  }

  /* ── An equilibrium dot with dashed leaders and label ABOVE the dot ────── */
  function renderEquilibrium(eq, opts) {
    var p = opts.plot;
    var hex = EQ_HEX[opts.tone] || EQ_HEX.slate;
    var faded = opts.faded;
    if (faded) {
      return svgCircle(eq.x, eq.y, 4,
        'fill="#fff" stroke="#94A3B8" stroke-width="1.5"');
    }
    var r = 9;
    var bits = [];
    // Horizontal dashed leader to y-axis
    bits.push(svgLine(p.xMin, eq.y, eq.x, eq.y,
      'stroke="' + hex.stroke + '" stroke-width="1.2" stroke-dasharray="4 4"'));
    // Vertical dashed leader to x-axis
    bits.push(svgLine(eq.x, eq.y, eq.x, p.yMax,
      'stroke="' + hex.stroke + '" stroke-width="1.2" stroke-dasharray="4 4"'));
    // Dot
    bits.push(svgCircle(eq.x, eq.y, r,
      'fill="#fff" stroke="' + hex.stroke + '" stroke-width="3"'));
    // Label ABOVE the dot (skill convention)
    if (opts.label) {
      bits.push(svgText(eq.x, eq.y - r - 4, opts.label,
        'font-size="16" font-weight="800" fill="' + hex.label + '" text-anchor="middle"'));
    }
    // P-axis tick
    if (opts.pLabel) {
      bits.push(svgText(p.xMin - 12, eq.y + 5, opts.pLabel,
        'font-size="13" font-weight="700" fill="' + hex.label + '" text-anchor="end"'));
    }
    // Y-axis tick
    if (opts.yLabel) {
      bits.push(svgText(eq.x, p.yMax + 26, opts.yLabel,
        'font-size="13" font-weight="700" fill="' + hex.label + '" text-anchor="middle"'));
    }
    return bits.join('');
  }

  /* ── Subscript helper for "E₀" "E₁" … "P₀" "Y₂" labels ─────────────────── */
  var SUBS = ['₀', '₁', '₂', '₃', '₄', '₅', '₆', '₇', '₈', '₉'];
  function sub(letter, n) {
    return letter + SUBS[Math.min(n, SUBS.length - 1)];
  }

  /* ── Build one view's SVG content ─────────────────────────────────────── */
  function renderView(chart, views, viewIdx) {
    var p = chart.plot;
    var curveIds = Object.keys(chart.baseline);
    var thisView = views[viewIdx];
    var thisShifts = thisView.shifts || {};

    var bits = [];

    // 1. Faded prior-state curves: for each curve, show every distinct earlier
    //    intercept (so AD₀ stays visible faded once AD₁ appears).
    curveIds.forEach(function (id) {
      var baseline = chart.baseline[id];
      var thisShift = thisShifts[id] || 0;
      var thisC = shiftedC(baseline, thisShift);
      // Walk earlier views; for each unique c that isn't this view's c, draw faded.
      var fadedCs = {};
      for (var v = 0; v < viewIdx; v++) {
        var earlierShift = (views[v].shifts || {})[id] || 0;
        var earlierC = shiftedC(baseline, earlierShift);
        if (Math.abs(earlierC - thisC) > 1e-6) {
          fadedCs[earlierC.toFixed(3)] = earlierC;
        }
      }
      Object.keys(fadedCs).forEach(function (k) {
        bits.push(renderCurve(baseline, fadedCs[k], { plot: p, faded: true, hideLabel: true }));
      });
    });

    // 2. Active curves for this view (solid, full opacity, labelled).
    curveIds.forEach(function (id) {
      var baseline = chart.baseline[id];
      var thisShift = thisShifts[id] || 0;
      var thisC = shiftedC(baseline, thisShift);
      // Subscript = how many distinct earlier shifts there were on THIS curve
      // (counts unique earlier c values + 0 if shift==baseline matches no prior).
      var seenCs = {};
      for (var v = 0; v < viewIdx; v++) {
        var earlier = shiftedC(baseline, (views[v].shifts || {})[id] || 0);
        seenCs[earlier.toFixed(3)] = true;
      }
      var subNum = Object.keys(seenCs).filter(function (k) {
        return Math.abs(parseFloat(k) - thisC) > 1e-6;
      }).length;
      var label = baseline.display.replace(/[₀-₉]/, SUBS[subNum] || '₀');
      bits.push(renderCurve(baseline, thisC, { plot: p, faded: false, label: label }));
    });

    // 3. Faded prior equilibria (small grey dots, no labels).
    for (var v = 0; v < viewIdx; v++) {
      var earlierEq = computeEquilibrium(chart, views[v].shifts || {});
      if (earlierEq) {
        bits.push(renderEquilibrium(earlierEq, { plot: p, faded: true }));
      }
    }

    // 4. This view's equilibrium (solid, labelled, with dashed leaders).
    var eq = computeEquilibrium(chart, thisShifts);
    if (eq) {
      var tone = EQ_TONES[viewIdx] || 'slate';
      var subN = viewIdx;
      bits.push(renderEquilibrium(eq, {
        plot: p,
        tone: tone,
        label: sub('E', subN),
        pLabel: sub('P', subN),
        yLabel: sub('Y', subN)
      }));
    }

    // 5. Optional shift-direction arrow (skipped in v1 — adds noise; future work).

    return bits.join('');
  }

  function computeEquilibrium(chart, shifts) {
    var eqDef = chart.equilibrium;
    if (!eqDef || !Array.isArray(eqDef.from) || eqDef.from.length !== 2) return null;
    var a = chart.baseline[eqDef.from[0]];
    var b = chart.baseline[eqDef.from[1]];
    if (!a || !b) return null;
    return intersect(a.slope, shiftedC(a, shifts[eqDef.from[0]] || 0),
                     b.slope, shiftedC(b, shifts[eqDef.from[1]] || 0));
  }

  /* ── Main renderer ─────────────────────────────────────────────────────── */
  B.econDiagram = function econDiagram(block) {
    var chart = CHARTS[block.chart];
    if (!chart) {
      if (U.isDevMode()) console.warn('[econDiagram] unknown chart family:', block.chart);
      return '';
    }
    var views = Array.isArray(block.views) && block.views.length
      ? block.views
      : [{ label: 'View', shifts: {} }];

    var w = chart.viewBox.w;
    var uid = 'eid' + Math.random().toString(36).slice(2, 8);

    // Generate inline CSS for radio-toggle of view layers + tabs (CSP-safe;
    // no JS handler needed). Up to N views supported.
    var styleRules = views.map(function (_, i) {
      return (
        '#' + uid + '-r' + i + ':checked ~ .ed-frame .ed-view-' + i + ' { display: block; }' +
        '#' + uid + '-r' + i + ':checked ~ .ed-tabs .ed-tab-' + i + ' { background:#fff; border-color:#0B1426; color:#0B1426; box-shadow:0 2px 8px rgba(11,20,38,0.10); }' +
        '#' + uid + '-r' + i + ':checked ~ .ed-tabs .ed-tab-' + i + ' .ed-tab-num { background:#0B1426; color:#fff; }' +
        '#' + uid + '-r' + i + ':checked ~ .ed-analysis .ed-panel-' + i + ' { display: block; }'
      );
    }).join('\n');

    var radios = views.map(function (_, i) {
      return '<input type="radio" name="' + uid + '" id="' + uid + '-r' + i + '" class="ed-radio"' +
        (i === 0 ? ' checked' : '') + '>';
    }).join('');

    var viewLayers = views.map(function (_, i) {
      return '<g class="ed-view ed-view-' + i + '">' + renderView(chart, views, i) + '</g>';
    }).join('');

    var tabs = views.map(function (v, i) {
      var label = U.escapeHtml(v.label || ('View ' + (i + 1)));
      return (
        '<label class="ed-tab ed-tab-' + i + '" for="' + uid + '-r' + i + '">' +
          '<span class="ed-tab-num">' + (i + 1) + '</span>' +
          '<span class="ed-tab-label">' + label + '</span>' +
        '</label>'
      );
    }).join('');

    var hasAnalysis = views.some(function (v) { return v.analysis; });
    var panels = hasAnalysis ? views.map(function (v, i) {
      if (!v.analysis) return '<div class="ed-panel ed-panel-' + i + '" hidden></div>';
      return (
        '<div class="ed-panel ed-panel-' + i + '">' +
          '<div class="ed-panel__label">Analysis</div>' +
          '<div class="ed-panel__body">' + U.escapeHtml(v.analysis) + '</div>' +
        '</div>'
      );
    }).join('') : '';

    return (
      '<div class="econ-id-root" data-overflow-watch>' +
        '<style>' + styleRules + '</style>' +
        radios +
        '<div class="ed-frame">' +
          '<svg viewBox="0 0 ' + w + ' ' + chart.viewBox.h + '" xmlns="http://www.w3.org/2000/svg" class="ed-svg" font-family="Inter,sans-serif">' +
            renderFrame(chart) +
            viewLayers +
          '</svg>' +
        '</div>' +
        '<div class="ed-tabs" role="tablist">' + tabs + '</div>' +
        (hasAnalysis ? '<div class="ed-analysis">' + panels + '</div>' : '') +
      '</div>'
    );
  };

  /* Expose chart registry for the future form editor + tests. */
  window.ECONOS_ECON_DIAGRAM = window.ECONOS_ECON_DIAGRAM || {};
  window.ECONOS_ECON_DIAGRAM.charts = CHARTS;
  window.ECONOS_ECON_DIAGRAM.intersect = intersect;
  window.ECONOS_ECON_DIAGRAM.shiftedC = shiftedC;
  window.ECONOS_ECON_DIAGRAM.computeEquilibrium = computeEquilibrium;

})();
