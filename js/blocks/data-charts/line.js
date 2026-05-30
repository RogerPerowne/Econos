/* js/blocks/data-charts/line.js
   ───────────────────────────────────────────────────────────────────────────
   The 'line' kind for the dataChart engine — time-series / categorical line
   chart. Registered onto window.ECONOS_DATACHART.

   Schema additions (on top of the common dataChart block fields)
   --------------------------------------------------------------
   Single-series (flat):
     rows: [ { label|x, value|y, tone? }, ... ]

   Multi-series:
     series: [
       { name: 'Series A', tone?: 'green', rows: [ { label, value }, ... ] },
       { name: 'Series B', rows: [ ... ] },
       ...
     ]
     (When `series` is present, top-level `rows` is ignored.)

   Kind-specific flags:
     smooth?: boolean   -- cardinal spline interpolation (default false = linear)
     markers?: boolean  -- show a dot on each data point (default true)

   Auto-scale
   ----------
   Y range is derived from all values across every series. niceScale is called
   with zeroBased: false so a range [94,102] does not get squashed to [0,102].

   Responsive via @container
   -------------------------
   SVG uses a fixed viewBox (600 x 300). Width:100%; height:auto lets it scale
   to any container width without overflow. At narrow widths (<= 520 px via
   @container dc) CSS hides the SVG and shows the mobile card-list fallback.
   At mid-range widths (320-480 px) CSS hides every other x-axis label to
   prevent collision without JS.

   Registers: ECONOS_DATACHART.register('line', fn).
   Loads via <script defer> AFTER data-chart.js.
   ─────────────────────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  var DC = window.ECONOS_DATACHART;
  if (!DC || !DC.register) {
    if (window.console) console.warn('[dataChart:line] engine not loaded before line kind');
    return;
  }

  /* ── geometry constants (viewBox units) ─────────────────────────────────── */
  var VB_W = 600;
  var VB_H = 300;
  var MARGIN_TOP    = 20;
  var MARGIN_RIGHT  = 16;
  var MARGIN_BOTTOM = 52;
  var MARGIN_LEFT   = 56;
  var PLOT_X0 = MARGIN_LEFT;
  var PLOT_X1 = VB_W - MARGIN_RIGHT;
  var PLOT_Y0 = MARGIN_TOP;
  var PLOT_Y1 = VB_H - MARGIN_BOTTOM;
  var PLOT_W  = PLOT_X1 - PLOT_X0;
  var PLOT_H  = PLOT_Y1 - PLOT_Y0;

  /* ── side-channel for multi-series + kind-specific flags ────────────────── */
  /*
   * The engine's kind renderer API is (model, helpers) -- the raw block is
   * not passed through. buildModel() only handles flat `rows`, so block.series
   * and the line-specific flags (smooth, markers) are invisible to the renderer.
   *
   * Solution (zero engine changes): wrap window.ECONOS_BLOCKS.dataChart with a
   * thin synchronous interceptor that reads the extra fields and stashes them in
   * module-level variables immediately before calling through to the original.
   * The renderer reads the stash. This is race-free because rendering is
   * synchronous; the stash is reset on every non-line call.
   */
  var _pendingSeries  = null;
  var _pendingSmooth  = false;
  var _pendingMarkers = true;

  (function patchBlockFn() {
    var B = window.ECONOS_BLOCKS;
    if (!B || typeof B.dataChart !== 'function') {
      if (typeof queueMicrotask === 'function') {
        queueMicrotask(patchBlockFn);
      } else {
        setTimeout(patchBlockFn, 0);
      }
      return;
    }
    var original = B.dataChart;
    B.dataChart = function dataChartLinePatched(block) {
      if (block && block.kind === 'line') {
        _pendingSeries  = Array.isArray(block.series) ? block.series : null;
        _pendingSmooth  = block.smooth  === true;
        _pendingMarkers = block.markers !== false; // default true
      } else {
        _pendingSeries  = null;
        _pendingSmooth  = false;
        _pendingMarkers = true;
      }
      return original.call(this, block);
    };
  }());

  /* ── main renderer ───────────────────────────────────────────────────────── */

  DC.register('line', function line(model, H) {
    var seriesList = normaliseSeries(model, H);
    if (!seriesList.length) return '';

    var smooth  = model._smooth  === true;
    var markers = model._markers !== false;

    /* Gather all values for a unified y-scale */
    var allValues = [];
    seriesList.forEach(function (s) {
      s.pts.forEach(function (p) { allValues.push(p.y); });
    });
    var dataMin = Math.min.apply(null, allValues);
    var dataMax = Math.max.apply(null, allValues);

    var scale     = H.niceScale(dataMin, dataMax, { maxTicks: 5, zeroBased: false });
    var scaleSpan = scale.max - scale.min || 1;

    /* Collect all x-labels (union, preserving first-appearance order) */
    var xLabels = [];
    var xIndex  = {};
    seriesList.forEach(function (s) {
      s.pts.forEach(function (p) {
        if (!Object.prototype.hasOwnProperty.call(xIndex, p.x)) {
          xIndex[p.x] = xLabels.length;
          xLabels.push(p.x);
        }
      });
    });
    var n = xLabels.length || 1;

    function toSvgX(xi) {
      return PLOT_X0 + (xi / (n - 1 || 1)) * PLOT_W;
    }
    function toSvgY(value) {
      return PLOT_Y1 - ((value - scale.min) / scaleSpan) * PLOT_H;
    }

    /* Value axis: horizontal gridlines + y-tick labels */
    var yAxisParts = scale.ticks.map(function (t) {
      var y = round(toSvgY(t));
      return (
        '<line class="dc-line__gridline" x1="' + PLOT_X0 + '" y1="' + y +
        '" x2="' + PLOT_X1 + '" y2="' + y + '" />' +
        '<text class="dc-line__ytick" x="' + (PLOT_X0 - 8) + '" y="' + y +
        '" text-anchor="end" dominant-baseline="middle">' +
        H.escape(H.fmt(t, model.suffix)) + '</text>'
      );
    }).join('');

    /* X-axis: category labels; data-xi used by CSS for label thinning */
    var xAxisParts = xLabels.map(function (lbl, xi) {
      var x = round(toSvgX(xi));
      return (
        '<text class="dc-line__xtick" x="' + x + '" y="' + (PLOT_Y1 + 10) +
        '" text-anchor="end" dominant-baseline="hanging" data-xi="' + xi + '">' +
        H.escape(lbl) + '</text>'
      );
    }).join('');

    /* One <path> + optional markers per series */
    var seriesParts = seriesList.map(function (s, si) {
      var pts = s.pts.map(function (p) {
        var xi = xIndex[p.x];
        return {
          svgX: round(toSvgX(xi)),
          svgY: round(toSvgY(p.y)),
          rawY: p.y,
          lbl:  p.x
        };
      });

      var pathD = smooth ? cardinalSpline(pts, 0.5) : linearPath(pts);
      var tone  = H.toneClass(s.tone, H.toneFor(si));

      var markerParts = '';
      if (markers) {
        markerParts = pts.map(function (pt) {
          return (
            '<circle class="dc-line__marker" cx="' + pt.svgX + '" cy="' + pt.svgY +
            '" r="4"><title>' +
            H.escape(pt.lbl) + ': ' + H.escape(H.fmt(pt.rawY, model.suffix)) +
            '</title></circle>'
          );
        }).join('');
      }

      return (
        '<g class="dc-line__series ' + tone + '" data-series="' + si + '">' +
        '<path class="dc-line__path" d="' + pathD + '" fill="none" />' +
        markerParts +
        '</g>'
      );
    }).join('');

    /* Axis lines (left y-axis + bottom x-axis) */
    var axisLines =
      '<line class="dc-line__axis" x1="' + PLOT_X0 + '" y1="' + PLOT_Y0 +
      '" x2="' + PLOT_X0 + '" y2="' + PLOT_Y1 + '" />' +
      '<line class="dc-line__axis" x1="' + PLOT_X0 + '" y1="' + PLOT_Y1 +
      '" x2="' + PLOT_X1 + '" y2="' + PLOT_Y1 + '" />';

    var svg = (
      '<svg class="dc-line__svg" viewBox="0 0 ' + VB_W + ' ' + VB_H + '" ' +
      'role="img" aria-label="' + H.escape(buildAriaLabel(seriesList, model)) + '" ' +
      'xmlns="http://www.w3.org/2000/svg">' +
      '<g class="dc-line__yaxis" aria-hidden="true">' + yAxisParts + '</g>' +
      '<g class="dc-line__xaxis" aria-hidden="true">' + xAxisParts + '</g>' +
      axisLines +
      seriesParts +
      '</svg>'
    );

    /* Legend (multi-series only) */
    var legendHtml = '';
    if (seriesList.length > 1) {
      legendHtml = H.legend(seriesList.map(function (s) {
        return { label: s.name, tone: s.tone };
      }));
    }

    /* Mobile card-list fallback (always emitted; CSS shows one or the other) */
    var cardHtml = mobileCardList(seriesList, xLabels, model, H);

    return (
      '<div class="dc-line" data-smooth="' + (smooth ? '1' : '0') +
      '" data-markers="' + (markers ? '1' : '0') + '">' +
      svg +
      legendHtml +
      '</div>' +
      cardHtml
    );
  });

  /* ── Series normalisation ────────────────────────────────────────────────── */

  function normaliseSeries(model, H) {
    /* Propagate side-channel values onto the model for the renderer to read */
    model._smooth  = _pendingSmooth;
    model._markers = _pendingMarkers;

    /* Multi-series path */
    if (_pendingSeries && _pendingSeries.length) {
      return _pendingSeries.map(function (s, si) {
        if (!s || typeof s !== 'object') return null;
        var rawRows = Array.isArray(s.rows) ? s.rows : [];
        var pts = rawRows.map(function (r) {
          if (!r || typeof r !== 'object') return null;
          var x = r.label != null ? String(r.label) : (r.x != null ? String(r.x) : '');
          var y = Number(r.value != null ? r.value : r.y);
          if (!isFinite(y)) return null;
          return { x: x, y: y };
        }).filter(Boolean);
        if (!pts.length) return null;
        var tone = typeof s.tone === 'string' ? s.tone : H.toneFor(si);
        return {
          name: s.name ? String(s.name) : ('Series ' + (si + 1)),
          tone: tone,
          pts:  pts
        };
      }).filter(Boolean);
    }

    /* Single flat-series path (from model.rows) */
    if (!model.rows || !model.rows.length) return [];
    var pts = model.rows.map(function (r) {
      return { x: String(r.label), y: r.value };
    });
    return [{ name: '', tone: H.toneFor(0), pts: pts }];
  }

  /* ── Path builders ──────────────────────────────────────────────────────── */

  function linearPath(pts) {
    if (!pts.length) return '';
    return pts.map(function (p, i) {
      return (i === 0 ? 'M' : 'L') + p.svgX + ' ' + p.svgY;
    }).join(' ');
  }

  /* Cardinal / Catmull-Rom spline approximated with SVG cubic beziers.
     tension=0.5 gives a relaxed curve without overshooting flat data. */
  function cardinalSpline(pts, tension) {
    if (pts.length < 3) return linearPath(pts);

    var t = 1 - (tension == null ? 0.5 : tension);
    var d = 'M' + pts[0].svgX + ' ' + pts[0].svgY;

    for (var i = 0; i < pts.length - 1; i++) {
      var p0 = pts[i > 0 ? i - 1 : i];
      var p1 = pts[i];
      var p2 = pts[i + 1];
      var p3 = pts[i + 2] || pts[i + 1];

      var cp1x = round(p1.svgX + (p2.svgX - p0.svgX) * t / 3);
      var cp1y = round(p1.svgY + (p2.svgY - p0.svgY) * t / 3);
      var cp2x = round(p2.svgX - (p3.svgX - p1.svgX) * t / 3);
      var cp2y = round(p2.svgY - (p3.svgY - p1.svgY) * t / 3);

      d += ' C' + cp1x + ' ' + cp1y + ' ' + cp2x + ' ' + cp2y +
           ' ' + p2.svgX + ' ' + p2.svgY;
    }
    return d;
  }

  /* ── Aria label helper ───────────────────────────────────────────────────── */

  function buildAriaLabel(seriesList, model) {
    var parts = [];
    if (model.yLabel) parts.push(model.yLabel);
    if (model.xLabel) parts.push(model.xLabel);
    seriesList.forEach(function (s) { if (s.name) parts.push(s.name); });
    return parts.join(', ') || 'Line chart';
  }

  /* ── Mobile card-list fallback ───────────────────────────────────────────── */
  /*
   * On narrow widths CSS hides the SVG and shows this compact two-column list.
   * Multi-series: one labelled section per series. Single-series: flat list.
   */
  function mobileCardList(seriesList, xLabels, model, H) {
    var escape = H.escape;
    var suffix = model.suffix;

    var sections = seriesList.map(function (s, si) {
      var heading = (seriesList.length > 1 && s.name)
        ? '<li class="dc-lcl__heading ' + H.toneClass(s.tone, H.toneFor(si)) + '">' +
          '<span class="dc-lcl__sname">' + escape(s.name) + '</span>' +
          '</li>'
        : '';

      var byX = {};
      s.pts.forEach(function (p) { byX[p.x] = p.y; });

      var rows = xLabels.map(function (lbl) {
        var y = byX[lbl];
        if (y == null) return '';
        return (
          '<li class="dc-lcl__row ' + H.toneClass(s.tone, H.toneFor(si)) + '">' +
          '<span class="dc-lcl__xlabel text-fit-3">' + escape(lbl) + '</span>' +
          '<span class="dc-lcl__yval">' + escape(H.fmt(y, suffix)) + '</span>' +
          '</li>'
        );
      }).join('');

      return heading + rows;
    }).join('');

    return '<ul class="dc-linecardlist" role="list">' + sections + '</ul>';
  }

  /* ── numeric helpers ─────────────────────────────────────────────────────── */

  function round(v) { return Math.round(v * 100) / 100; }
}());
