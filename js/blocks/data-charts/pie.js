/* js/blocks/data-charts/pie.js
   ───────────────────────────────────────────────────────────────────────────
   The 'pie' kind for the dataChart engine — proportional pie / donut.
   Registered onto window.ECONOS_DATACHART.

   Schema additions
   ----------------
   In addition to the shared block fields (rows, caption, sort, valueSuffix):

     innerRadius?: number   0–1 fraction of outer radius for the donut hole.
                            0 (default) → solid pie. 0.55 is a typical donut.
                            Values outside [0, 1) are clamped to that range.
     showLegend?:  boolean  default true. Pass false to suppress the legend
                            (only sensible if the chart is very large and all
                            slices carry readable labels).

   Row percentages are computed from the row values: each slice is
   value / total * 100. This means the author can supply raw values (e.g.
   GDP shares 200, 400, 800) or already-normalised percentages — either
   way the chart shows proportions. The valueSuffix (if '%') is shown in
   labels; otherwise 'value (x%)' is shown.

   Slice labels
   ------------
   Labels are drawn inside (or just outside for small slices) the slice at
   the slice midpoint, showing the percentage. Slices < 5% get no label to
   avoid overlapping text. All text is escaped.

   Mobile (@container dc max-width:520px) — horizontal bar fallback
   -----------------------------------------------------------------
   SVG wedges become unreadable on a phone. BOTH markups are always emitted;
   CSS shows exactly one per container width:

     • ≥ 521px : the SVG pie / donut + legend
     • ≤ 520px : a horizontal stacked-percentage bar list — one row per
                 category showing: swatch · label · ██████░░ bar · pct%

   The horizontal bar approach mirrors the bar kind's mobile card-list
   pattern so styling is consistent across kinds.

   Registers: ECONOS_DATACHART.register('pie', fn).
   Loads via <script defer> AFTER data-chart.js.
   ─────────────────────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  var DC = window.ECONOS_DATACHART;
  if (!DC || !DC.register) {
    if (window.console) console.warn('[dataChart:pie] engine not loaded before pie kind');
    return;
  }

  /* ── Constants ──────────────────────────────────────────────────────────── */

  /* Viewbox geometry — the SVG coordinate space. */
  var VB_W = 320;
  var VB_H = 320;
  var CX = VB_W / 2;   /* 160 */
  var CY = VB_H / 2;   /* 160 */
  var R_OUTER = 140;   /* outer radius (leaves 20px margin each side in 320 vb) */

  /* Minimum slice angle (degrees) to draw an inline percentage label. */
  var MIN_LABEL_DEG = 18;

  /* ── Main renderer ──────────────────────────────────────────────────────── */

  DC.register('pie', function pie(model, H) {
    if (!model.rows.length) return '';

    /* Compute proportions ------------------------------------------------- */
    var total = model.rows.reduce(function (s, r) { return s + r.value; }, 0);
    if (!total) return '';

    /* slices: add pct + cumulative start angle ----------------------------- */
    var slices = [];
    var cumDeg = -90; /* start at 12 o'clock */
    model.rows.forEach(function (r, i) {
      var pct = (r.value / total) * 100;
      var deg = (pct / 100) * 360;
      slices.push({
        label:    r.label,
        value:    r.value,
        tone:     r.tone,
        pct:      pct,
        startDeg: cumDeg,
        endDeg:   cumDeg + deg,
        index:    i
      });
      cumDeg += deg;
    });

    /* innerRadius --------------------------------------------------------- */
    /* The engine passes model not block, so we stash innerRadius in
       model.innerRadius via the buildModel extension point — see below.
       We read it from model.innerRadius which we set in the wrapper shim. */
    var innerFrac = typeof model.innerRadius === 'number' ? model.innerRadius : 0;
    innerFrac = innerFrac < 0 ? 0 : innerFrac >= 1 ? 0.95 : innerFrac;
    var R_INNER = R_OUTER * innerFrac;

    var showLegend = model.showLegend !== false;

    /* Build SVG ----------------------------------------------------------- */
    var paths = slices.map(function (s) {
      return slicePath(s, R_OUTER, R_INNER, H);
    }).join('');

    var labels = slices.map(function (s) {
      return sliceLabel(s, R_OUTER, R_INNER, model.suffix, H);
    }).join('');

    /* Centre label for donut: total or a short label ---------------------- */
    var centreLabel = '';
    if (R_INNER > 40) {
      centreLabel = (
        '<text class="dc-pie__centre-pct" x="' + CX + '" y="' + (CY - 6) + '"' +
        ' text-anchor="middle" dominant-baseline="auto" aria-hidden="true">100%</text>' +
        '<text class="dc-pie__centre-sub" x="' + CX + '" y="' + (CY + 14) + '"' +
        ' text-anchor="middle" dominant-baseline="auto" aria-hidden="true">total</text>'
      );
    }

    var svgAriaLabel = buildAriaLabel(slices);

    var svgHtml = (
      '<svg class="dc-pie__svg"' +
      ' viewBox="0 0 ' + VB_W + ' ' + VB_H + '"' +
      ' role="img"' +
      ' aria-label="' + H.escape(svgAriaLabel) + '">' +
      '<title>' + H.escape(svgAriaLabel) + '</title>' +
      '<g class="dc-pie__slices">' + paths + '</g>' +
      '<g class="dc-pie__labels" aria-hidden="true">' + labels + '</g>' +
      centreLabel +
      '</svg>'
    );

    var legendHtml = showLegend ? buildLegend(slices, model.suffix, H) : '';

    /* Mobile horizontal-bar fallback ------------------------------------- */
    var mobileHtml = mobileBars(slices, model.suffix, H);

    return (
      '<div class="dc-pie">' +
      '<div class="dc-pie__chart-wrap">' +
      svgHtml +
      legendHtml +
      '</div>' +
      mobileHtml +
      '</div>'
    );
  });

  /* ── SVG path for one slice ─────────────────────────────────────────────── */

  function slicePath(s, rOuter, rInner, H) {
    var tone = H.toneClass(s.tone, H.toneFor(s.index));

    /* Full-circle edge-case: a full circle can't be drawn with a single arc
       (start == end). Nudge end by -0.001° so the arc renders. */
    var startDeg = s.startDeg;
    var endDeg   = s.endDeg;
    var span     = endDeg - startDeg;
    if (span >= 360) { endDeg = startDeg + 359.999; span = 359.999; }
    if (span <= 0)   { return ''; }

    var largeArc = span > 180 ? 1 : 0;
    var sx = CX + rOuter * cosDeg(startDeg);
    var sy = CY + rOuter * sinDeg(startDeg);
    var ex = CX + rOuter * cosDeg(endDeg);
    var ey = CY + rOuter * sinDeg(endDeg);

    var d;
    if (rInner > 0) {
      /* Donut: outer arc clockwise, inner arc counter-clockwise. */
      var ix_start = CX + rInner * cosDeg(endDeg);
      var iy_start = CY + rInner * sinDeg(endDeg);
      var ix_end   = CX + rInner * cosDeg(startDeg);
      var iy_end   = CY + rInner * sinDeg(startDeg);
      d = [
        'M', p(sx), p(sy),
        'A', p(rOuter), p(rOuter), '0', largeArc, '1', p(ex), p(ey),
        'L', p(ix_start), p(iy_start),
        'A', p(rInner), p(rInner), '0', largeArc, '0', p(ix_end), p(iy_end),
        'Z'
      ].join(' ');
    } else {
      /* Solid pie: move to centre, draw outer arc. */
      d = [
        'M', p(CX), p(CY),
        'L', p(sx), p(sy),
        'A', p(rOuter), p(rOuter), '0', largeArc, '1', p(ex), p(ey),
        'Z'
      ].join(' ');
    }

    return (
      '<path class="dc-pie__slice ' + tone + '"' +
      ' d="' + d + '"' +
      ' role="listitem">' +
      '<title>' + H.escape(s.label + ': ' + fmtPct(s.pct)) + '</title>' +
      '</path>'
    );
  }

  /* ── Percentage label for one slice ────────────────────────────────────── */

  function sliceLabel(s, rOuter, rInner, suffix, H) {
    var span = s.endDeg - s.startDeg;
    if (span < MIN_LABEL_DEG) return '';

    var mid = (s.startDeg + s.endDeg) / 2;
    /* Place label at 65% of (outer - inner) from centre for donuts, or at
       60% of outer for solid pie. */
    var rLabel;
    if (rInner > 0) {
      rLabel = rInner + (rOuter - rInner) * 0.5;
    } else {
      rLabel = rOuter * 0.65;
    }
    var lx = CX + rLabel * cosDeg(mid);
    var ly = CY + rLabel * sinDeg(mid);

    var pctText = fmtPct(s.pct);

    return (
      '<text class="dc-pie__label"' +
      ' x="' + p(lx) + '" y="' + p(ly) + '"' +
      ' text-anchor="middle" dominant-baseline="middle">' +
      H.escape(pctText) +
      '</text>'
    );
  }

  /* ── Legend (swatch + label + %) ───────────────────────────────────────── */

  function buildLegend(slices, suffix, H) {
    var items = slices.map(function (s) {
      var tone = H.toneClass(s.tone, H.toneFor(s.index));
      return (
        '<li class="dc-legend__item ' + tone + '">' +
        '<span class="dc-legend__swatch" aria-hidden="true"></span>' +
        '<span class="dc-legend__label">' +
        H.escape(s.label) +
        '<span class="dc-pie__legend-pct"> ' + fmtPct(s.pct) + '</span>' +
        '</span>' +
        '</li>'
      );
    }).join('');
    return '<ul class="dc-legend dc-pie__legend" role="list">' + items + '</ul>';
  }

  /* ── Mobile horizontal-bar fallback ────────────────────────────────────── */

  function mobileBars(slices, suffix, H) {
    var items = slices.map(function (s) {
      var tone = H.toneClass(s.tone, H.toneFor(s.index));
      var w = round(clampPct(s.pct));
      return (
        '<li class="dc-pie__mb-row ' + tone + '">' +
        '<span class="dc-pie__mb-label text-fit-3">' + H.escape(s.label) + '</span>' +
        '<span class="dc-pie__mb-bar">' +
        '<span class="dc-pie__mb-fill" style="width:' + w + '%"></span>' +
        '</span>' +
        '<span class="dc-pie__mb-pct">' + H.escape(fmtPct(s.pct)) + '</span>' +
        '</li>'
      );
    }).join('');
    return '<ul class="dc-pie__mobile" role="list">' + items + '</ul>';
  }

  /* ── Accessible aria-label for the whole chart ─────────────────────────── */

  function buildAriaLabel(slices) {
    var parts = slices.map(function (s) {
      return s.label + ' ' + fmtPct(s.pct);
    });
    return 'Pie chart: ' + parts.join(', ');
  }

  /* ── Geometry helpers ───────────────────────────────────────────────────── */

  var DEG_TO_RAD = Math.PI / 180;

  function cosDeg(deg) { return Math.cos(deg * DEG_TO_RAD); }
  function sinDeg(deg) { return Math.sin(deg * DEG_TO_RAD); }

  /* Round SVG coordinate to 3 decimal places — keeps path data compact. */
  function p(v) { return Math.round(v * 1000) / 1000; }
  function round(v) { return Math.round(v * 100) / 100; }
  function clampPct(v) { return v < 0 ? 0 : v > 100 ? 100 : v; }

  function fmtPct(pct) {
    /* Round to 1 dp, strip trailing .0. */
    var r = Math.round(pct * 10) / 10;
    return (r === Math.round(r) ? String(Math.round(r)) : String(r)) + '%';
  }

  /* ── Patch buildModel to forward innerRadius / showLegend ──────────────── */
  /* The engine's buildModel does not know about pie-specific fields. We wrap
     B.dataChart to inject them into the model before the renderer sees it.
     This is the approved extension pattern: kind files may post-process the
     model by decorating the block renderer, keeping the engine untouched.   */

  var _origDataChart = window.ECONOS_BLOCKS && window.ECONOS_BLOCKS.dataChart;
  if (typeof _origDataChart === 'function' && window.ECONOS_BLOCKS) {
    window.ECONOS_BLOCKS.dataChart = function dataChart(block) {
      if (block && block.kind === 'pie') {
        /* Temporarily attach kind fields so the renderer can read them off
           the model. We pass them via a side-channel on model by pre-building
           the model here and monkey-patching the DC.get renderer call.
           Simpler: stash on the block — the engine passes model to renderer,
           not block. We reach through via a closure-captured sentinel. */
        _pieBlockExtras = {
          innerRadius: typeof block.innerRadius === 'number' ? block.innerRadius : 0,
          showLegend:  block.showLegend !== false
        };
      } else {
        _pieBlockExtras = null;
      }
      var result = _origDataChart(block);
      _pieBlockExtras = null;
      return result;
    };
  }

  /* The currently-pending pie-specific block extras (set above, read by the
     renderer shim below). */
  var _pieBlockExtras = null;

  /* Wrap the registered pie renderer to inject the extras into model. */
  var _origPieRenderer = DC.get('pie');
  DC.register('pie', function pie(model, H) {
    if (_pieBlockExtras) {
      model.innerRadius = _pieBlockExtras.innerRadius;
      model.showLegend  = _pieBlockExtras.showLegend;
    }
    return _origPieRenderer(model, H);
  });
})();
