/* js/blocks/data-chart.js
   ───────────────────────────────────────────────────────────────────────────
   dataChart ENGINE — window.ECONOS_DATACHART + the B.dataChart block type.

   A SEPARATE block from econDiagram. econDiagram is for *theoretical* curves
   (AD/AS, Phillips) where the engine computes intersections, shifts and
   equilibria. dataChart is for *empirical, data-driven* charts where THE CHART
   IS THE DATA — a list of rows, each a category + a value. No curves, no
   shifts, no intersections. Bar / column / line / pie all share this one block
   and dispatch to a "kind" renderer registered on the ECONOS_DATACHART registry
   (mirrors window.ECONOS_ECON_DIAGRAM.register for the chart families).

   Block API
   ---------
     {
       type: 'dataChart',
       kind: 'bar' | 'column' | 'line' | 'pie' | …,   // registered kind
       rows: [ { label, value, tone? }, … ],          // THE data
       xLabel?, yLabel?,                               // axis captions
       valueSuffix?: '%' | '£bn' | …,                  // appended to values
       brokenAxis?: { from, to },                      // axis break (outliers)
       caption?,                                       // figure caption
       sort?: 'asc' | 'desc' | false                   // reorder rows by value
     }

   The block normalises rows (coerce numbers, apply sort), then hands a single
   normalised model to the kind renderer. Kind renderers receive
   (model, helpers) and return an HTML string for the plot area; the block
   wraps it in the figure chrome (root container, title/caption).

   Registry + shared helpers (window.ECONOS_DATACHART)
   ---------------------------------------------------
     .register(kind, fn)                  register a kind renderer
     .get(kind)                           look up a renderer
     .niceScale(min, max, opts?)          → { min, max, ticks:[…], step }
     .valueAxis({ scale, suffix, … })     → SVG value-axis fragment
     .categoryAxis({ labels, … })         → SVG category-axis fragment
     .legend(rows)                        → HTML legend
     .toneFor(i)                          cycle the 6 tones by index
     .toneClass(tone, fallback)           → 'econ-tone--x'
     .escape(value)                       → escaped string
     .fmt(value, suffix)                  → formatted value label

   Kind agents (line/pie/column) build on these helpers so every dataChart kind
   shares one axis/scale/legend/tone vocabulary. Bar registers itself below
   (or via js/blocks/data-charts/bar.js if split out).

   Loads via <script defer> AFTER render-blocks.js, BEFORE the per-kind files.
   ─────────────────────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  var U = window.ECONOS_BLOCK_UTILS;
  var B = window.ECONOS_BLOCKS;
  if (!U || !B) {
    if (window.console) console.warn('[dataChart] ECONOS_BLOCK_UTILS / ECONOS_BLOCKS not loaded before data-chart');
    return;
  }

  var escape = U.escapeHtml;

  /* The six-tone rotation, matching GRID_TONE_CYCLE in render-blocks.js. */
  var TONE_CYCLE = ['green', 'amber', 'blue', 'purple', 'rose', 'slate'];

  /* ── Shared helpers ──────────────────────────────────────────────────────── */

  function toneFor(i) {
    var n = (i | 0) % TONE_CYCLE.length;
    if (n < 0) n += TONE_CYCLE.length;
    return TONE_CYCLE[n];
  }

  function toneClass(tone, fallback) {
    return U.toneClass(tone, fallback || 'slate');
  }

  /* fmt(value, suffix) — a human value label. Trims trailing .0, groups large
     integers with thin separators, appends the suffix verbatim ('%', '£bn'). */
  function fmt(value, suffix) {
    if (value == null || !isFinite(value)) return '';
    var v = Number(value);
    var s;
    if (Math.abs(v) >= 1000 && v === Math.round(v)) {
      // group thousands
      s = String(Math.round(v)).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    } else if (v === Math.round(v)) {
      s = String(v);
    } else {
      // up to 2 dp, strip trailing zeros
      s = String(Math.round(v * 100) / 100);
    }
    return s + (suffix ? escape(suffix) : '');
  }

  /* niceScale(min, max, opts?) — round axis bounds to "nice" numbers and emit
     evenly-spaced ticks. Returns { min, max, step, ticks:[…] }. Bars normally
     pass min=0; line/column may pass a real min for a zoomed band.
       opts.maxTicks  target tick count (default 5)
       opts.zeroBased force min down to 0 (default true)               */
  function niceScale(min, max, opts) {
    opts = opts || {};
    var maxTicks = opts.maxTicks > 0 ? opts.maxTicks : 5;
    var zeroBased = opts.zeroBased !== false;

    var lo = Number(min);
    var hi = Number(max);
    if (!isFinite(lo)) lo = 0;
    if (!isFinite(hi)) hi = 1;
    if (zeroBased && lo > 0) lo = 0;
    if (zeroBased && hi < 0) hi = 0;
    if (hi === lo) { hi = lo + 1; } // avoid zero range

    var range = niceNum(hi - lo, false);
    var step = niceNum(range / Math.max(1, maxTicks - 1), true);
    var niceMin = Math.floor(lo / step) * step;
    var niceMax = Math.ceil(hi / step) * step;

    var ticks = [];
    // guard against float drift producing an endless loop
    var guard = 0;
    for (var t = niceMin; t <= niceMax + step * 0.5 && guard < 1000; t += step, guard++) {
      // round to step precision to kill float noise (0.30000000004 → 0.3)
      ticks.push(roundTo(t, step));
    }
    return { min: niceMin, max: niceMax, step: step, ticks: ticks };
  }

  /* niceNum — the classic Heckbert "nice numbers for graph labels" routine. */
  function niceNum(range, round) {
    var exponent = Math.floor(Math.log(range) / Math.LN10);
    var fraction = range / Math.pow(10, exponent);
    var niceFraction;
    if (round) {
      if (fraction < 1.5) niceFraction = 1;
      else if (fraction < 3) niceFraction = 2;
      else if (fraction < 7) niceFraction = 5;
      else niceFraction = 10;
    } else {
      if (fraction <= 1) niceFraction = 1;
      else if (fraction <= 2) niceFraction = 2;
      else if (fraction <= 5) niceFraction = 5;
      else niceFraction = 10;
    }
    return niceFraction * Math.pow(10, exponent);
  }

  function roundTo(value, step) {
    var decimals = step < 1 ? Math.ceil(-Math.log(step) / Math.LN10) + 1 : 0;
    var f = Math.pow(10, decimals);
    return Math.round(value * f) / f;
  }

  /* valueAxis(opts) — an SVG fragment of horizontal gridlines + value tick
     labels for a vertical (bar/column) plot. PURE: returns an SVG string the
     kind renderer drops inside its own <svg>. Coordinates are in the kind's
     own viewBox; the kind passes the geometry in.
       opts.scale   { min, max, ticks } from niceScale
       opts.x0,x1   left/right pixel bounds of the plot
       opts.y0,y1   top/bottom pixel bounds (y0 = top, y1 = baseline)
       opts.suffix  value suffix for tick labels
       opts.toY     fn(value)->pixelY (kind owns the mapping)              */
  function valueAxis(opts) {
    opts = opts || {};
    var scale = opts.scale || { ticks: [] };
    var x0 = num(opts.x0, 0), x1 = num(opts.x1, 100);
    var suffix = opts.suffix || '';
    var toY = typeof opts.toY === 'function' ? opts.toY : function () { return 0; };
    var parts = [];
    (scale.ticks || []).forEach(function (t) {
      var y = toY(t);
      parts.push('<line class="dc-axis__gridline" x1="' + x0 + '" y1="' + y + '" x2="' + x1 + '" y2="' + y + '" />');
      parts.push(
        '<text class="dc-axis__tick" x="' + (x0 - 8) + '" y="' + (y + 4) + '" text-anchor="end">' +
        escape(fmt(t, suffix)) + '</text>'
      );
    });
    return '<g class="dc-axis dc-axis--value" aria-hidden="true">' + parts.join('') + '</g>';
  }

  /* categoryAxis(opts) — an SVG fragment of category tick labels along the
     baseline. opts.labels:[string], opts.centers:[pixelX], opts.y baseline. */
  function categoryAxis(opts) {
    opts = opts || {};
    var labels = Array.isArray(opts.labels) ? opts.labels : [];
    var centers = Array.isArray(opts.centers) ? opts.centers : [];
    var y = num(opts.y, 0);
    var parts = labels.map(function (label, i) {
      var x = num(centers[i], 0);
      return '<text class="dc-axis__cat" x="' + x + '" y="' + (y + 16) + '" text-anchor="middle">' +
        escape(label) + '</text>';
    });
    return '<g class="dc-axis dc-axis--cat" aria-hidden="true">' + parts.join('') + '</g>';
  }

  /* legend(rows) — a small swatch+label legend. Each row uses its own tone (or
     the cycled fallback). Used by pie / multi-series kinds; bar usually skips
     it because the category axis already labels each bar. */
  function legend(rows) {
    var items = Array.isArray(rows) ? rows : [];
    if (!items.length) return '';
    var body = items.map(function (r, i) {
      if (!r || typeof r !== 'object') return '';
      var tone = toneClass(r.tone, toneFor(i));
      return '<li class="dc-legend__item ' + tone + '">' +
        '<span class="dc-legend__swatch" aria-hidden="true"></span>' +
        '<span class="dc-legend__label">' + escape(r.label || '') + '</span>' +
        '</li>';
    }).join('');
    return '<ul class="dc-legend" role="list">' + body + '</ul>';
  }

  function num(value, fallback) {
    var n = Number(value);
    return isFinite(n) ? n : fallback;
  }

  /* ── Registry ────────────────────────────────────────────────────────────── */

  var KINDS = {};

  function register(kind, fn) {
    if (typeof kind !== 'string' || typeof fn !== 'function') return;
    KINDS[kind] = fn;
  }

  function get(kind) {
    return KINDS[kind] || null;
  }

  /* ── Row normalisation ───────────────────────────────────────────────────── */

  /* Coerce rows to { label, value:Number, tone }, drop invalid, apply sort.
     Sort is stable-ish: we tag the original index so equal values keep order. */
  function normaliseRows(rawRows, sort) {
    var rows = (Array.isArray(rawRows) ? rawRows : [])
      .map(function (r, i) {
        if (!r || typeof r !== 'object') return null;
        var value = Number(r.value);
        if (!isFinite(value)) return null;
        return { label: r.label == null ? '' : String(r.label), value: value, tone: r.tone, _i: i };
      })
      .filter(Boolean);

    if (sort === 'asc' || sort === 'desc') {
      rows.sort(function (a, b) {
        if (a.value === b.value) return a._i - b._i;
        return sort === 'asc' ? a.value - b.value : b.value - a.value;
      });
    }
    return rows;
  }

  /* ── Shared model: scale + bounds the kinds reuse ────────────────────────── */

  /* buildModel(block) — the normalised, kind-agnostic chart model. */
  function buildModel(block) {
    var rows = normaliseRows(block.rows, block.sort);
    var values = rows.map(function (r) { return r.value; });
    var dataMin = values.length ? Math.min.apply(null, values) : 0;
    var dataMax = values.length ? Math.max.apply(null, values) : 1;

    var broken = null;
    if (block.brokenAxis && typeof block.brokenAxis === 'object') {
      var from = Number(block.brokenAxis.from);
      var to = Number(block.brokenAxis.to);
      // Only honour a sane break: 0 < from < to <= dataMax.
      if (isFinite(from) && isFinite(to) && from > 0 && to > from && to <= dataMax) {
        broken = { from: from, to: to };
      }
    }

    return {
      rows: rows,
      values: values,
      dataMin: dataMin,
      dataMax: dataMax,
      broken: broken,
      suffix: typeof block.valueSuffix === 'string' ? block.valueSuffix : '',
      xLabel: block.xLabel == null ? '' : String(block.xLabel),
      yLabel: block.yLabel == null ? '' : String(block.yLabel)
    };
  }

  /* The helper bundle passed to every kind renderer. */
  var HELPERS = {
    niceScale: niceScale,
    valueAxis: valueAxis,
    categoryAxis: categoryAxis,
    legend: legend,
    toneFor: toneFor,
    toneClass: toneClass,
    escape: escape,
    fmt: fmt,
    TONE_CYCLE: TONE_CYCLE
  };

  /* ── The block type ──────────────────────────────────────────────────────── */

  B.dataChart = function dataChart(block) {
    var kind = typeof block.kind === 'string' ? block.kind : 'bar';
    var renderer = get(kind);
    if (!renderer) {
      if (U.isDevMode && U.isDevMode()) console.warn('[dataChart] unknown kind:', kind);
      return '';
    }

    var model = buildModel(block);
    var plot = renderer(model, HELPERS) || '';

    var axisLabels = '';
    if (model.yLabel) {
      axisLabels += '<div class="dc-axislabel dc-axislabel--y">' + escape(model.yLabel) + '</div>';
    }
    if (model.xLabel) {
      axisLabels += '<div class="dc-axislabel dc-axislabel--x">' + escape(model.xLabel) + '</div>';
    }

    var caption = block.caption
      ? '<figcaption class="dc-caption text-fit-1">' + escape(block.caption) + '</figcaption>'
      : '';

    return (
      '<figure class="dc-root dc-root--' + escape(kind) + '" data-overflow-watch>' +
      '<div class="dc-plotwrap">' +
      axisLabels +
      '<div class="dc-plot">' + plot + '</div>' +
      '</div>' +
      caption +
      '</figure>'
    );
  };

  /* ── Public registry + helper surface ────────────────────────────────────── */

  window.ECONOS_DATACHART = {
    register: register,
    get: get,
    niceScale: niceScale,
    valueAxis: valueAxis,
    categoryAxis: categoryAxis,
    legend: legend,
    toneFor: toneFor,
    toneClass: toneClass,
    escape: escape,
    fmt: fmt,
    TONE_CYCLE: TONE_CYCLE,
    /* exposed so kind files can reuse the normalised model if they bypass the
       block (e.g. in the Studio Library gallery). */
    buildModel: buildModel,
    normaliseRows: normaliseRows
  };
})();
