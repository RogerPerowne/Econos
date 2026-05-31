/* js/blocks/econ-diagram.js
   ───────────────────────────────────────────────────────────────────────────
   Declarative interactive economic-diagram ENGINE.

   The hand-rolled SVG charts in js/diagrams/generators/*.js compute line
   intercepts and equilibrium intersections by hand for every shift. That makes
   them error-prone and inaccessible to anyone who can't do the algebra.

   This block flips it: authors describe WHAT the chart shows — semantic curves
   and shifts — and the engine computes every coordinate. A chart "family"
   (adas, phillips, …) registers a baseline of curves + named points; each view
   declares shifts/points/arrows/areas/brackets and the engine renders it.

   ── ARCHITECTURE ──────────────────────────────────────────────────────────
   This file is the engine CORE only. It exposes a registration API:

     window.ECONOS_ECON_DIAGRAM.register(name, def)

   Chart families live in their own files (js/blocks/charts/*.js) and call
   register() — they load via <script defer> AFTER this file. The 'adas' family
   that used to live here now lives in js/blocks/charts/adas.js and renders
   byte-for-byte identically to before (see tests/unit/econ-diagram.test.js).

   The block API is unchanged:

     { type: 'econDiagram', chart: '<family>', views: [ { … } ] }

   The CSS-radio view-stepping + tabs + analysis panels are unchanged.
   ─────────────────────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  var U = window.ECONOS_BLOCK_UTILS;
  var B = window.ECONOS_BLOCKS;

  /* ── Chart-family registry ───────────────────────────────────────────────
     Populated by register(). Each entry declares the geometry of a family in
     semantic units; the engine renders any view by combining a family's
     baseline curves with the shifts/annotations authored on each view. */
  var CHARTS = {};

  /* ── Tone palette for equilibrium markers per view index ────────────────
     View 0 (baseline) tone, then subsequent equilibria cycle so the eye can
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

  /* ── Named curve-shape functions ─────────────────────────────────────────
     Authors use these for kind:'fn' curves. Each takes (x, params) and returns
     a y in the SAME UNIT SPACE as the plot (i.e. the value the engine will pass
     to a curve's f). They're written as f(x) over a domain; the family supplies
     the domain. Coordinates are economics-space (y grows UP), the engine flips
     to screen space at render time via lineEndpoints-style y handling — see
     plotPoint(). All return finite numbers across their stated domain. */
  function clampUnit(t) { return t < 0 ? 0 : (t > 1 ? 1 : t); }

  var SHAPES = {
    /* Inverted-U Laffer: revenue peaks at the optimal rate. params:{a,peakX,x0,x1} */
    laffer: function (x, p) {
      p = p || {};
      var x0 = p.x0 != null ? p.x0 : 0;
      var x1 = p.x1 != null ? p.x1 : 1;
      var a = p.a != null ? p.a : 1;
      var t = (x - x0) / (x1 - x0);
      return a * 4 * t * (1 - t); // parabola peaking at t=0.5
    },
    /* Kuznets inverted-U — alias of laffer shape (inequality vs development). */
    kuznets: function (x, p) { return SHAPES.laffer(x, p); },
    /* Gaussian bell. params:{a,mu,sigma} */
    gaussian: function (x, p) {
      p = p || {};
      var a = p.a != null ? p.a : 1;
      var mu = p.mu != null ? p.mu : 0;
      var sigma = p.sigma != null ? p.sigma : 1;
      var z = (x - mu) / sigma;
      return a * Math.exp(-0.5 * z * z);
    },
    /* Logistic / sigmoid S-curve. params:{a,k,x0} */
    logistic: function (x, p) {
      p = p || {};
      var a = p.a != null ? p.a : 1;
      var k = p.k != null ? p.k : 1;
      var x0 = p.x0 != null ? p.x0 : 0;
      return a / (1 + Math.exp(-k * (x - x0)));
    },
    sigmoid: function (x, p) { return SHAPES.logistic(x, p); },
    /* Exponential. params:{a,k,c} → c + a*e^{k x} */
    exponential: function (x, p) {
      p = p || {};
      var a = p.a != null ? p.a : 1;
      var k = p.k != null ? p.k : 1;
      var c = p.c != null ? p.c : 0;
      return c + a * Math.exp(k * x);
    },
    /* J-curve: dips below baseline then recovers above it (trade balance after
       a depreciation). A smooth cubic with EXACTLY ONE inflection point — no
       kinks, no spurious wiggles. params:{base,depth,rise,x0,x1,trough}.
         y(t) = base + a*(t-trough)^3 + b*(t-trough)
       with a>0, b<0 → one local min near `trough`, one inflection at t=trough. */
    jcurve: function (x, p) {
      p = p || {};
      var x0 = p.x0 != null ? p.x0 : 0;
      var x1 = p.x1 != null ? p.x1 : 1;
      var base = p.base != null ? p.base : 0;
      var depth = p.depth != null ? p.depth : 1;     // controls min dip
      var rise = p.rise != null ? p.rise : 1.5;       // controls recovery height
      var trough = p.trough != null ? p.trough : 0.30; // inflection fraction
      var t = clampUnit((x - x0) / (x1 - x0));
      var u = t - trough;
      // Cubic with a single inflection at u=0. Coefficients chosen so the curve
      // dips by ~depth before the inflection and rises by ~rise after.
      var a = (rise + depth) * 3.2;
      var b = -depth * 3.2;
      return base + a * u * u * u + b * u;
    },
    /* Lorenz curve: convex, below the 45° line, from (0,0) to (1,1).
       params:{gini-like exponent g≥1}; y = x^g in unit space scaled. */
    lorenz: function (x, p) {
      p = p || {};
      var x0 = p.x0 != null ? p.x0 : 0;
      var x1 = p.x1 != null ? p.x1 : 1;
      var y0 = p.y0 != null ? p.y0 : 0;
      var y1 = p.y1 != null ? p.y1 : 1;
      var g = p.g != null ? p.g : 2.2;
      var t = clampUnit((x - x0) / (x1 - x0));
      return y0 + (y1 - y0) * Math.pow(t, g);
    },
    /* Convex (concave-to-origin) PPF frontier — quarter-ellipse bulging out.
       params:{cx,cy,rx,ry} centre + radii (econ space). */
    convexPPF: function (x, p) {
      p = p || {};
      var cx = p.cx != null ? p.cx : 0;
      var cy = p.cy != null ? p.cy : 0;
      var rx = p.rx != null ? p.rx : 1;
      var ry = p.ry != null ? p.ry : 1;
      var dx = (x - cx) / rx;
      var inside = 1 - dx * dx;
      return cy + ry * Math.sqrt(inside < 0 ? 0 : inside);
    },
    /* U-shaped cost curve (ATC/AVC/MC). params:{min,minX,a} → a parabola. */
    uShape: function (x, p) {
      p = p || {};
      var minY = p.min != null ? p.min : 0;
      var minX = p.minX != null ? p.minX : 0;
      var a = p.a != null ? p.a : 1;
      return minY + a * (x - minX) * (x - minX);
    }
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

  // Apply a horizontal shift Δ to a LINEAR curve: y = m*(x-Δ) + c = m*x + (c - m*Δ).
  function shiftedC(baseline, delta) {
    return baseline.c - baseline.slope * (delta || 0);
  }

  /* Normalise a shift value (number or {dx,dy}) into {dx,dy}. */
  function normShift(s) {
    if (s == null) return { dx: 0, dy: 0 };
    if (typeof s === 'number') return { dx: s, dy: 0 };
    return { dx: s.dx || 0, dy: s.dy || 0 };
  }

  /* ── Curve evaluation: y = f(x) in ECON space, after applying a shift ─────
     Every curve kind reduces to "evaluate y at a given x" plus an x-domain.
     Shifts translate the curve: x→x-dx, y→y+dy. Returns null when x is out of
     the curve's (shifted) domain or the kind has no y at that x (verticals). */
  function curveDomain(curve, plot) {
    if (curve.kind === 'fn' && curve.domain) return [curve.domain[0], curve.domain[1]];
    if (curve.kind === 'curve' && curve.points && curve.points.length) {
      var xs = curve.points.map(function (pt) { return pt.x; });
      return [Math.min.apply(null, xs), Math.max.apply(null, xs)];
    }
    return [plot.xMin, plot.xMax];
  }

  // Catmull-Rom → evaluate y at x for a monotone-in-x point set (sorted by x).
  function catmullRomY(points, x) {
    var pts = points;
    if (x <= pts[0].x) return pts[0].y;
    if (x >= pts[pts.length - 1].x) return pts[pts.length - 1].y;
    var i = 0;
    for (; i < pts.length - 1; i++) {
      if (x >= pts[i].x && x <= pts[i + 1].x) break;
    }
    var p0 = pts[i - 1] || pts[i];
    var p1 = pts[i];
    var p2 = pts[i + 1];
    var p3 = pts[i + 2] || pts[i + 1];
    var span = (p2.x - p1.x) || 1e-9;
    var t = (x - p1.x) / span;
    var t2 = t * t, t3 = t2 * t;
    // Catmull-Rom basis on y, parameterised by t in [0,1] across [p1,p2].
    return 0.5 * (
      (2 * p1.y) +
      (-p0.y + p2.y) * t +
      (2 * p0.y - 5 * p1.y + 4 * p2.y - p3.y) * t2 +
      (-p0.y + 3 * p1.y - 3 * p2.y + p3.y) * t3
    );
  }

  // Evaluate a curve's econ-space y at econ-space x, with shift applied.
  function evalCurve(curve, x, shift) {
    var s = normShift(shift);
    var xx = x - s.dx; // pre-image
    var y;
    switch (curve.kind) {
      case 'vertical':
        return null; // no single y; handled specially by intersection
      case 'horizontal':
        return curve.y + s.dy;
      case 'linear':
        y = curve.slope * xx + curve.c;
        return y + s.dy;
      case 'fn':
        if (curve.domain && (xx < curve.domain[0] || xx > curve.domain[1])) return null;
        y = curve.f(xx);
        return y + s.dy;
      case 'curve':
        if (!curve.points || !curve.points.length) return null;
        y = catmullRomY(curve.points, xx);
        return y + s.dy;
      default:
        return null;
    }
  }

  // The shifted x of a vertical curve.
  function verticalX(curve, shift) {
    var s = normShift(shift);
    return curve.x + s.dx;
  }

  /* ── GENERIC numerical intersection ──────────────────────────────────────
     intersectCurves(curveA, curveB, domain, shiftA, shiftB) → {x,y} | null.
     Samples (yA - yB) across the shared x-domain, finds a sign change, bisects
     to ~0.01 in x. Handles line∩curve, curve∩curve, and vertical/horizontal. */
  function intersectCurves(curveA, curveB, domain, shiftA, shiftB) {
    // Vertical curve cases: x is fixed, evaluate the other curve there.
    if (curveA.kind === 'vertical' || curveB.kind === 'vertical') {
      var vert = curveA.kind === 'vertical' ? curveA : curveB;
      var vShift = curveA.kind === 'vertical' ? shiftA : shiftB;
      var other = curveA.kind === 'vertical' ? curveB : curveA;
      var oShift = curveA.kind === 'vertical' ? shiftB : shiftA;
      var vx = verticalX(vert, vShift);
      if (other.kind === 'vertical') return null; // parallel verticals
      var vy = evalCurve(other, vx, oShift);
      if (vy == null) return null;
      return { x: vx, y: vy };
    }
    var lo = domain[0];
    var hi = domain[1];
    var N = 240;
    var diff = function (x) {
      var ya = evalCurve(curveA, x, shiftA);
      var yb = evalCurve(curveB, x, shiftB);
      if (ya == null || yb == null) return null;
      return ya - yb;
    };
    var prevX = lo;
    var prevD = diff(lo);
    for (var i = 1; i <= N; i++) {
      var x = lo + (hi - lo) * (i / N);
      var d = diff(x);
      if (prevD != null && d != null && (prevD === 0 || prevD * d < 0)) {
        // Bisect between prevX and x to ~0.01.
        var a = prevX, b = x, da = prevD;
        for (var k = 0; k < 60 && (b - a) > 0.01; k++) {
          var m = (a + b) / 2;
          var dm = diff(m);
          if (dm == null) break;
          if (da === 0) { a = m; b = m; break; }
          if (da * dm <= 0) { b = m; } else { a = m; da = dm; }
        }
        var xi = (a + b) / 2;
        var yi = evalCurve(curveA, xi, shiftA);
        return { x: xi, y: yi };
      }
      prevX = x;
      prevD = d;
    }
    return null;
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

  function svgPolyline(pointsArr, attrs) {
    var d = pointsArr.map(function (pt, i) {
      return (i === 0 ? 'M' : 'L') + pt.x.toFixed(2) + ',' + pt.y.toFixed(2);
    }).join(' ');
    return '<path d="' + d + '" ' + attrs + '/>';
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
      } else if (a.kind === 'horizontal') {
        bits.push(svgLine(p.xMin, a.y, p.xMax, a.y,
          'stroke="#94A3B8" stroke-width="1.4" stroke-dasharray="5 5" opacity="0.55"'));
        bits.push(svgText(p.xMax - 4, a.y - 6, a.label,
          'font-size="11" font-weight="700" fill="#94A3B8" text-anchor="end"'));
      }
    });
    return bits.join('');
  }

  /* ── A single LINEAR curve, possibly faded (legacy adas path) ──────────── */
  function renderLinearCurve(curve, c, opts) {
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

  /* ── A non-linear / generic curve sampled into a polyline ───────────────
     Used for kind in {vertical, horizontal, fn, curve}. Samples ~every 12 plot
     px with stroke-linejoin=round so there are NO KINKS at turning points. */
  function renderGenericCurve(curve, shift, opts) {
    var p = opts.plot;
    var hex = CURVE_HEX[curve.tone] || '#0B1426';
    var faded = opts.faded;
    var stroke = faded ? '#94A3B8' : hex;
    var width = faded ? 1.6 : 3;
    var opacity = faded ? 0.5 : 1;
    var dash = faded ? ' stroke-dasharray="6 5"' : '';

    if (curve.kind === 'vertical') {
      var vx = verticalX(curve, shift);
      var line = svgLine(vx, p.yMin, vx, p.yMax,
        'stroke="' + stroke + '" stroke-width="' + width + '" stroke-linecap="round" opacity="' +
        opacity + '"' + dash);
      var vLabel = '';
      if (opts.label && !opts.hideLabel) {
        vLabel = svgText(vx + 8, p.yMin + 14, opts.label,
          'font-size="' + (faded ? 12 : 14) + '" font-weight="' + (faded ? 700 : 800) +
          '" fill="' + (faded ? '#94A3B8' : hex) + '"');
      }
      return line + vLabel;
    }

    var dom = curveDomain(curve, p);
    var s = normShift(shift);
    var x0 = dom[0] + s.dx;
    var x1 = dom[1] + s.dx;
    // Sample roughly every 12 plot px (econ x-units map 1:1 to plot px here).
    var stepPx = 12;
    var n = Math.max(2, Math.ceil((x1 - x0) / stepPx));
    var samples = [];
    var last = null;
    for (var i = 0; i <= n; i++) {
      var xe = x0 + (x1 - x0) * (i / n);
      var ye = evalCurve(curve, xe, shift);
      if (ye == null) continue;
      var pt = plotPoint(xe, ye, p);
      if (pt) { samples.push(pt); last = { x: xe, y: ye }; }
    }
    if (samples.length < 2) return '';
    var poly = svgPolyline(samples,
      'fill="none" stroke="' + stroke + '" stroke-width="' + width +
      '" stroke-linecap="round" stroke-linejoin="round" opacity="' + opacity + '"' + dash);
    var labelBits = '';
    if (opts.label && !opts.hideLabel && last) {
      var lp = plotPoint(last.x, last.y, p);
      labelBits = svgText(lp.x + 8, lp.y + 4, opts.label,
        'font-size="' + (faded ? 12 : 14) + '" font-weight="' + (faded ? 700 : 800) +
        '" fill="' + (faded ? '#94A3B8' : hex) + '"');
    }
    return poly + labelBits;
  }

  /* Convert an econ-space (x,y) into a plot/screen point, clipped to the box.
     Econ-space y already equals screen y in these families (no inversion) —
     the families place curves in screen coordinates directly, matching the
     legacy adas baseline. We clamp to the plot box. */
  function plotPoint(xe, ye, plot) {
    var x = xe, y = ye;
    if (x < plot.xMin) x = plot.xMin;
    if (x > plot.xMax) x = plot.xMax;
    if (y < plot.yMin) y = plot.yMin;
    if (y > plot.yMax) y = plot.yMax;
    return { x: x, y: y };
  }

  /* ── Dispatch: render any curve kind (faded or solid) ──────────────────── */
  function renderCurveAny(curve, shift, opts) {
    if (curve.kind === 'linear' || curve.kind == null) {
      // Legacy path — identical output to the original engine.
      var c = shiftedC(curve, normShift(shift).dx);
      var dy = normShift(shift).dy;
      var eff = dy ? { slope: curve.slope, c: c + dy, tone: curve.tone, display: curve.display } : curve;
      return renderLinearCurve(eff, dy ? c + dy : c, opts);
    }
    return renderGenericCurve(curve, shift, opts);
  }

  /* ── An equilibrium / named point: dot + dashed leaders + label ABOVE ──── */
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

  /* ── Shift-direction arrow ───────────────────────────────────────────────
     Given a curve's before/after shift, pick a y in the gap and draw a small
     arrow showing the direction of the shift. */
  function renderShiftArrow(curve, beforeShift, afterShift, opts) {
    var p = opts.plot;
    var hex = CURVE_HEX[curve.tone] || '#0B1426';
    if (curve.kind === 'vertical') {
      var x0 = verticalX(curve, beforeShift);
      var x1 = verticalX(curve, afterShift);
      if (Math.abs(x1 - x0) < 6) return '';
      var y = (p.yMin + p.yMax) / 2;
      var dir = x1 > x0 ? 1 : -1;
      var ax0 = x0 + dir * 6, ax1 = x1 - dir * 6;
      return svgLine(ax0, y, ax1, y, 'stroke="' + hex + '" stroke-width="1.6" opacity="0.85"') +
        arrowHead(ax1, y, dir, 0, hex);
    }
    // Sample a midpoint x of the active domain; compare before/after y there.
    var dom = curveDomain(curve, p);
    var bs = normShift(beforeShift), as = normShift(afterShift);
    var midX = (dom[0] + dom[1]) / 2 + as.dx;
    var yBefore = evalCurve(curve, midX, beforeShift);
    var yAfter = evalCurve(curve, midX, afterShift);
    if (yBefore == null) {
      // Before-curve may not cover this x; nudge to the after-domain centre.
      midX = (dom[0] + dom[1]) / 2 + bs.dx;
      yBefore = evalCurve(curve, midX, beforeShift);
      yAfter = evalCurve(curve, midX, afterShift);
    }
    if (yBefore == null || yAfter == null || Math.abs(yAfter - yBefore) < 6) return '';
    var b = plotPoint(midX, yBefore, p);
    var a = plotPoint(midX, yAfter, p);
    var vdir = a.y > b.y ? 1 : -1;
    return svgLine(b.x, b.y + vdir * 4, a.x, a.y - vdir * 4,
      'stroke="' + hex + '" stroke-width="1.6" opacity="0.85"') +
      arrowHead(a.x, a.y - vdir * 4, 0, vdir, hex);
  }

  function arrowHead(x, y, dirX, dirY, hex) {
    // Small triangle pointing in (dirX, dirY).
    var s = 6;
    var ang = Math.atan2(dirY, dirX);
    var p1x = x, p1y = y;
    var p2x = x - s * Math.cos(ang - 0.5), p2y = y - s * Math.sin(ang - 0.5);
    var p3x = x - s * Math.cos(ang + 0.5), p3y = y - s * Math.sin(ang + 0.5);
    return '<polygon points="' + p1x.toFixed(2) + ',' + p1y.toFixed(2) + ' ' +
      p2x.toFixed(2) + ',' + p2y.toFixed(2) + ' ' + p3x.toFixed(2) + ',' + p3y.toFixed(2) +
      '" fill="' + hex + '"/>';
  }

  /* ── Movement arrow between two named points A→B (endpoints on dot edges) ─
     Drawn as a gentle perpendicular arc so it sits clearly OFF the curve it
     traces (a straight chord hugs the curve — especially a bowed PPF). The arc
     bows to the left of travel by `bow` px; authors can tune or disable it via
     arrows:[['A','B',{ bow: <px> }]] (bow:0 → a straight line). */
  function renderMovementArrow(a, b, opts) {
    var r = 9; // dot radius
    var hex = (EQ_HEX[opts.tone] || EQ_HEX.slate).stroke;
    var dx = b.x - a.x, dy = b.y - a.y;
    var len = Math.sqrt(dx * dx + dy * dy);
    if (len < 1) return '';
    var ux = dx / len, uy = dy / len;
    var sx = a.x + ux * r, sy = a.y + uy * r;       // start on A's edge
    var ex = b.x - ux * r, ey = b.y - uy * r;       // end on B's edge
    var bow = (opts.bow != null) ? opts.bow : Math.min(len * 0.16, 18);
    if (!bow) {
      return svgLine(sx, sy, ex, ey, 'stroke="' + hex + '" stroke-width="2" opacity="0.9"') +
        arrowHead(ex, ey, ux, uy, hex);
    }
    var nx = -uy, ny = ux;                            // left-of-travel normal
    var cx = (sx + ex) / 2 + nx * bow, cy = (sy + ey) / 2 + ny * bow; // control point
    var tx = ex - cx, ty = ey - cy;                  // end tangent → arrowhead orientation
    var tl = Math.sqrt(tx * tx + ty * ty) || 1;
    var d = 'M' + sx.toFixed(2) + ',' + sy.toFixed(2) +
            ' Q' + cx.toFixed(2) + ',' + cy.toFixed(2) + ' ' + ex.toFixed(2) + ',' + ey.toFixed(2);
    return '<path d="' + d + '" fill="none" stroke="' + hex + '" stroke-width="2" opacity="0.9"/>' +
      arrowHead(ex, ey, tx / tl, ty / tl, hex);
  }

  /* ── Area fill between two curves over an x-range ───────────────────────── */
  var HATCH_DEFINED = {};
  function renderArea(topCurve, topShift, botCurve, botShift, x0, x1, tone, hatch, plot, uid, label) {
    var hex = CURVE_HEX[tone] || '#2563EB';
    var stepPx = 12;
    var n = Math.max(2, Math.ceil((x1 - x0) / stepPx));
    var topPts = [], botPts = [];
    for (var i = 0; i <= n; i++) {
      var x = x0 + (x1 - x0) * (i / n);
      var yt = curveYAt(topCurve, x, topShift);
      var yb = curveYAt(botCurve, x, botShift);
      if (yt == null || yb == null) continue;
      topPts.push(plotPoint(x, yt, plot));
      botPts.push(plotPoint(x, yb, plot));
    }
    if (topPts.length < 2) return '';
    var d = topPts.map(function (pt, i2) {
      return (i2 === 0 ? 'M' : 'L') + pt.x.toFixed(2) + ',' + pt.y.toFixed(2);
    }).join(' ');
    for (var j = botPts.length - 1; j >= 0; j--) {
      d += ' L' + botPts[j].x.toFixed(2) + ',' + botPts[j].y.toFixed(2);
    }
    d += ' Z';
    var defs = '';
    var fill;
    if (hatch) {
      var pid = uid + '-hatch-' + tone;
      if (!HATCH_DEFINED[pid]) {
        defs = '<defs><pattern id="' + pid + '" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">' +
          '<line x1="0" y1="0" x2="0" y2="6" stroke="' + hex + '" stroke-width="1.2"/></pattern></defs>';
        HATCH_DEFINED[pid] = true;
      }
      fill = 'url(#' + pid + ')" fill-opacity="0.85';
    } else {
      fill = hex + '" fill-opacity="0.16';
    }
    var labelSvg = '';
    if (label) {
      /* Anchor at the polygon's vertex-average — always inside these convex
         fills (CS/PS/DWL triangles, externality wedges). Bold tone-hex text on
         the translucent fill reads cleanly without a backing rect. */
      var sx = 0, sy = 0, k = 0;
      for (var a = 0; a < topPts.length; a++) { sx += topPts[a].x; sy += topPts[a].y; k++; }
      for (var b = 0; b < botPts.length; b++) { sx += botPts[b].x; sy += botPts[b].y; k++; }
      labelSvg = svgText(sx / k, sy / k + 4, label,
        'font-size="13" font-weight="800" fill="' + hex + '" text-anchor="middle"');
    }
    return defs + '<path d="' + d + '" fill="' + fill + '" stroke="none"/>' + labelSvg;
  }

  /* Get a curve's y at x including verticals (returns null for verticals). */
  function curveYAt(curve, x, shift) {
    if (curve.kind === 'vertical') return null;
    return evalCurve(curve, x, shift);
  }

  /* ── Gap bracket: double-headed bracket between two x's at a given y ─────── */
  function renderBracket(x0, x1, y, label, tone) {
    var hex = CURVE_HEX[tone] || '#0B1426';
    var bits = [];
    bits.push(svgLine(x0, y, x1, y, 'stroke="' + hex + '" stroke-width="1.6"'));
    var dir0 = x1 > x0 ? -1 : 1;
    bits.push(arrowHead(x0, y, dir0, 0, hex));
    bits.push(arrowHead(x1, y, -dir0, 0, hex));
    if (label) {
      bits.push(svgText((x0 + x1) / 2, y - 6, label,
        'font-size="12" font-weight="700" fill="' + hex + '" text-anchor="middle"'));
    }
    return bits.join('');
  }

  /* ── Label-clash avoidance ───────────────────────────────────────────────
     A per-render registry of occupied rects. placeLabel returns the first
     non-overlapping position from a preferred order; draws a thin leader if it
     had to move far. In dev mode, an unresolved clash draws a red rect. */
  function makeLabelPlacer(devMode) {
    var occupied = [];
    function overlaps(r) {
      for (var i = 0; i < occupied.length; i++) {
        var o = occupied[i];
        if (r.x < o.x + o.w && r.x + r.w > o.x && r.y < o.y + o.h && r.y + r.h > o.y) return true;
      }
      return false;
    }
    return {
      occupied: occupied,
      reserve: function (r) { occupied.push(r); },
      place: function (anchor, text, order) {
        order = order || ['above', 'right', 'below', 'left'];
        var w = String(text).length * 7 + 6;
        var h = 16;
        var cands = {
          above: { x: anchor.x - w / 2, y: anchor.y - h - 6, anchor: 'middle', tx: anchor.x, ty: anchor.y - 10 },
          right: { x: anchor.x + 8, y: anchor.y - h / 2, anchor: 'start', tx: anchor.x + 8, ty: anchor.y + 4 },
          below: { x: anchor.x - w / 2, y: anchor.y + 6, anchor: 'middle', tx: anchor.x, ty: anchor.y + 16 },
          left: { x: anchor.x - 8 - w, y: anchor.y - h / 2, anchor: 'end', tx: anchor.x - 8, ty: anchor.y + 4 }
        };
        for (var i = 0; i < order.length; i++) {
          var c = cands[order[i]];
          var rect = { x: c.x, y: c.y, w: w, h: h };
          if (!overlaps(rect)) {
            occupied.push(rect);
            return { tx: c.tx, ty: c.ty, anchor: c.anchor, moved: i > 0, rect: rect };
          }
        }
        // Could not resolve.
        var fallback = cands[order[0]];
        var frect = { x: fallback.x, y: fallback.y, w: w, h: h };
        occupied.push(frect);
        return { tx: fallback.tx, ty: fallback.ty, anchor: fallback.anchor, moved: true, unresolved: true, rect: frect, dev: devMode };
      }
    };
  }

  /* ── Resolve a named point for a family + view shifts ─────────────────────
     A point spec is one of:
       { on: ['CurveA','CurveB'] }  → their intersection (recomputed w/ shifts)
       { onCurve: 'X', x: <val> }   → point on a curve at x
       { at: [x, y] }               → explicit
     Returns {x,y} in plot space or null. */
  function resolvePoint(chart, spec, shifts) {
    if (!spec) return null;
    if (spec.at) return { x: spec.at[0], y: spec.at[1] };
    if (spec.onCurve) {
      var cu = chart.baseline[spec.onCurve];
      if (!cu) return null;
      var y = evalCurve(cu, spec.x, shifts[spec.onCurve]);
      if (y == null) return null;
      return { x: spec.x, y: y };
    }
    if (spec.on && spec.on.length === 2) {
      var a = chart.baseline[spec.on[0]];
      var b = chart.baseline[spec.on[1]];
      if (!a || !b) return null;
      if ((a.kind === 'linear' || a.kind == null) && (b.kind === 'linear' || b.kind == null)) {
        // Exact line∩line (keeps legacy adas byte-identical).
        return intersect(a.slope, shiftedC(a, normShift(shifts[spec.on[0]]).dx),
                         b.slope, shiftedC(b, normShift(shifts[spec.on[1]]).dx));
      }
      var dom = [
        Math.max(curveDomain(a, chart.plot)[0], curveDomain(b, chart.plot)[0]),
        Math.min(curveDomain(a, chart.plot)[1], curveDomain(b, chart.plot)[1])
      ];
      return intersectCurves(a, b, dom, shifts[spec.on[0]], shifts[spec.on[1]]);
    }
    return null;
  }

  /* ── Legacy equilibrium (keeps adas working when a view omits points) ───── */
  function computeEquilibrium(chart, shifts) {
    var eqDef = chart.equilibrium;
    if (!eqDef || !Array.isArray(eqDef.from) || eqDef.from.length !== 2) return null;
    var a = chart.baseline[eqDef.from[0]];
    var b = chart.baseline[eqDef.from[1]];
    if (!a || !b) return null;
    return intersect(a.slope, shiftedC(a, normShift(shifts[eqDef.from[0]]).dx),
                     b.slope, shiftedC(b, normShift(shifts[eqDef.from[1]]).dx));
  }

  /* ── Per-view curve visibility ───────────────────────────────────────────
     A view MAY declare:
       show: [curveIds]  → render ONLY those baseline curves (plus any the
                           view's points/areas/brackets reference, which must
                           stay visible so their geometry reads correctly).
       hide: [curveIds]  → render every baseline curve EXCEPT these.
     Default (neither given) → render ALL baseline curves. This keeps every
     existing family (adas, phillips, …) byte-identical, since they declare
     neither key.

     Returns a predicate isVisible(id). Curves referenced by the view's
     points/areas/brackets are force-included even under `show`, so a view that
     shows only D+S but marks a point on PriceLine still draws PriceLine. */
  function curvesReferencedByView(chart, view) {
    var refs = {};
    function mark(id) { if (id != null) refs[id] = true; }
    (view.points || []).forEach(function (pname) {
      var spec = chart.points && chart.points[pname];
      if (!spec) return;
      if (spec.onCurve) mark(spec.onCurve);
      if (spec.on && spec.on.length === 2) { mark(spec.on[0]); mark(spec.on[1]); }
    });
    (view.areas || []).forEach(function (area) {
      if (area.between) { mark(area.between[0]); mark(area.between[1]); }
    });
    (view.brackets || []).forEach(function (br) {
      if (br.between) { mark(br.between[0]); mark(br.between[1]); }
    });
    return refs;
  }

  function makeVisibility(chart, view) {
    var refs = curvesReferencedByView(chart, view);
    if (Array.isArray(view.show)) {
      var shown = {};
      view.show.forEach(function (id) { shown[id] = true; });
      return function (id) { return !!shown[id] || !!refs[id]; };
    }
    if (Array.isArray(view.hide)) {
      var hidden = {};
      view.hide.forEach(function (id) { hidden[id] = true; });
      // A reference always wins over an explicit hide so dependent geometry
      // stays valid.
      return function (id) { return !hidden[id] || !!refs[id]; };
    }
    // No explicit show/hide: render every baseline curve EXCEPT those flagged
    // `optional: true` (those only appear when a view opts them in via `show`
    // or references them in points/areas/brackets). Keeps families like
    // supplyDemand clean by default while still carrying opt-in price lines.
    return function (id) {
      var cv = chart.baseline[id];
      return !(cv && cv.optional) || !!refs[id];
    };
  }

  /* ── Build one view's SVG content ─────────────────────────────────────── */
  function renderView(chart, views, viewIdx, uid) {
    var p = chart.plot;
    var curveIds = Object.keys(chart.baseline);
    var thisView = views[viewIdx];
    var thisShifts = thisView.shifts || {};
    var isVisible = makeVisibility(chart, thisView);

    var bits = [];

    // 1. Faded prior-state curves: for each curve, show every distinct earlier
    //    state (so AD₀ stays visible faded once AD₁ appears). Hidden curves are
    //    skipped here too — faded priors respect this view's visibility.
    curveIds.forEach(function (id) {
      if (!isVisible(id)) return;
      var baseline = chart.baseline[id];
      var thisShift = normShift(thisShifts[id]);
      var thisKey = stateKey(baseline, thisShift);
      var fadedStates = {};
      for (var v = 0; v < viewIdx; v++) {
        var earlierShift = normShift((views[v].shifts || {})[id]);
        var key = stateKey(baseline, earlierShift);
        if (key !== thisKey) fadedStates[key] = earlierShift;
      }
      Object.keys(fadedStates).forEach(function (k) {
        bits.push(renderCurveAny(baseline, fadedStates[k], { plot: p, faded: true, hideLabel: true }));
      });
    });

    // 2. Active curves for this view (solid, full opacity, labelled).
    curveIds.forEach(function (id) {
      if (!isVisible(id)) return;
      var baseline = chart.baseline[id];
      var thisShift = normShift(thisShifts[id]);
      var thisKey = stateKey(baseline, thisShift);
      // Subscript = number of distinct earlier states on THIS curve.
      var seen = {};
      for (var v = 0; v < viewIdx; v++) {
        seen[stateKey(baseline, normShift((views[v].shifts || {})[id]))] = true;
      }
      var subNum = Object.keys(seen).filter(function (k) { return k !== thisKey; }).length;
      // An explicitly-empty display ('') suppresses the curve label entirely —
      // for quiet reference lines (e.g. tax/subsidy price levels) that are
      // labelled by a named point instead. Omitting display falls back to id.
      var raw = baseline.display === '' ? null : (baseline.display || id);
      var label = raw ? raw.replace(/[₀-₉]/, SUBS[subNum] || '₀') : null;
      bits.push(renderCurveAny(baseline, thisShift, { plot: p, faded: false, label: label }));
    });

    // 2b. Shift-direction arrows (only for curves that moved vs the prior view).
    if (viewIdx > 0 && thisView.shiftArrows !== false) {
      var prevShifts = views[viewIdx - 1].shifts || {};
      curveIds.forEach(function (id) {
        if (!isVisible(id)) return;
        var before = normShift(prevShifts[id]);
        var after = normShift(thisShifts[id]);
        if (stateKey(chart.baseline[id], before) !== stateKey(chart.baseline[id], after)) {
          if (thisView.points || thisView.arrows || thisView.areas || thisView.brackets) {
            bits.push(renderShiftArrow(chart.baseline[id], before, after, { plot: p }));
          }
        }
      });
    }

    // 3 & 4. Points. If the view declares `points`, render those (named-point
    //    mode). Otherwise fall back to the legacy equilibrium so adas keeps
    //    rendering byte-for-byte.
    var resolvedPoints = {};
    if (thisView.points && thisView.points.length) {
      // Faded prior equilibria first (small grey dots) — preserve adas grammar
      // only when the family also defines a legacy equilibrium AND no explicit
      // points; here points are explicit so we skip faded priors.
      thisView.points.forEach(function (entry, i) {
        // An entry is EITHER a family point name (string) OR an inline point
        // spec object { label, tone, at|onCurve+x|on, pLabel?, yLabel? }. Inline
        // points let a view place its own markers (e.g. A and B for a
        // movement-along-a-curve story) without the family pre-defining them.
        var spec, key;
        if (typeof entry === 'string') {
          spec = (chart.points && chart.points[entry]) || null;
          key = entry;
        } else if (entry && typeof entry === 'object') {
          spec = entry;
          key = entry.label || ('p' + i);
        }
        var pt = resolvePoint(chart, spec, thisShifts);
        if (!pt) return;
        resolvedPoints[key] = pt;
        var tone = (spec && spec.tone) || EQ_TONES[i % EQ_TONES.length];
        bits.push(renderEquilibrium(pt, {
          plot: p,
          tone: tone,
          label: (spec && spec.label) || key,
          pLabel: spec && spec.pLabel,
          yLabel: spec && spec.yLabel
        }));
      });
    } else {
      // Legacy: faded prior equilibria + this view's equilibrium.
      for (var v = 0; v < viewIdx; v++) {
        var earlierEq = computeEquilibrium(chart, views[v].shifts || {});
        if (earlierEq) bits.push(renderEquilibrium(earlierEq, { plot: p, faded: true }));
      }
      var eq = computeEquilibrium(chart, thisShifts);
      if (eq) {
        var tone = EQ_TONES[viewIdx] || 'slate';
        bits.push(renderEquilibrium(eq, {
          plot: p,
          tone: tone,
          label: sub('E', viewIdx),
          pLabel: sub('P', viewIdx),
          yLabel: sub('Y', viewIdx)
        }));
      }
    }

    // 5. Areas (between two named curves over an x-range).
    (thisView.areas || []).forEach(function (area) {
      var top = chart.baseline[area.between[0]];
      var bot = chart.baseline[area.between[1]];
      if (!top || !bot) return;
      bits.unshift(renderArea(top, thisShifts[area.between[0]], bot, thisShifts[area.between[1]],
        area.x[0], area.x[1], area.tone || 'blue', area.hatch, p, uid, area.label));
    });

    // 6. Movement arrows between named points.
    (thisView.arrows || []).forEach(function (arr) {
      var a = resolvedPoints[arr[0]] || resolvePoint(chart, chart.points && chart.points[arr[0]], thisShifts);
      var b = resolvedPoints[arr[1]] || resolvePoint(chart, chart.points && chart.points[arr[1]], thisShifts);
      var o = arr[2] || {};
      if (a && b) bits.push(renderMovementArrow(a, b, { tone: o.tone || 'slate' }));
    });

    // 7. Brackets (gap brackets between two x's or two curves).
    (thisView.brackets || []).forEach(function (br) {
      var x0, x1;
      if (br.x) { x0 = br.x[0]; x1 = br.x[1]; }
      else if (br.between) {
        var ca = chart.baseline[br.between[0]];
        var cb = chart.baseline[br.between[1]];
        if (!ca || !cb) return;
        x0 = ca.kind === 'vertical' ? verticalX(ca, thisShifts[br.between[0]]) : br.atX0;
        x1 = cb.kind === 'vertical' ? verticalX(cb, thisShifts[br.between[1]]) : br.atX1;
      }
      if (x0 == null || x1 == null) return;
      bits.push(renderBracket(x0, x1, br.y, br.label, br.tone || 'slate'));
    });

    return bits.join('');
  }

  /* A stable string key for a curve's shifted state (replaces float-c keying). */
  function stateKey(curve, shift) {
    var s = normShift(shift);
    if (curve.kind === 'vertical') return 'v' + (curve.x + s.dx).toFixed(3);
    if (curve.kind === 'linear' || curve.kind == null) {
      return 'l' + shiftedC(curve, s.dx).toFixed(3) + ':' + s.dy.toFixed(3);
    }
    return 'g' + s.dx.toFixed(3) + ':' + s.dy.toFixed(3);
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
      return '<g class="ed-view ed-view-' + i + '">' + renderView(chart, views, i, uid) + '</g>';
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

    // A panel may carry a bold `head`, a `body` sentence, and an `analysis`
    // paragraph — the three-part shape inherited from the legacy interactive
    // panel. Any subset is fine; all are plain text (escaped). A view with none
    // renders an empty (hidden) panel to keep the radio indices aligned.
    function hasPanelText(v) { return v.head || v.body || v.analysis; }
    var hasAnalysis = views.some(hasPanelText);
    var panels = hasAnalysis ? views.map(function (v, i) {
      if (!hasPanelText(v)) return '<div class="ed-panel ed-panel-' + i + '" hidden></div>';
      var inner = '<div class="ed-panel__label">Analysis</div>';
      if (v.head) inner += '<div class="ed-panel__head">' + U.escapeHtml(v.head) + '</div>';
      if (v.body) inner += '<div class="ed-panel__lead">' + U.escapeHtml(v.body) + '</div>';
      if (v.analysis) inner += '<div class="ed-panel__body">' + U.escapeHtml(v.analysis) + '</div>';
      return '<div class="ed-panel ed-panel-' + i + '">' + inner + '</div>';
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

  /* ── Public API ──────────────────────────────────────────────────────────
     register(name, def) — register a chart family. def has the same shape the
     'adas' family used inline before the refactor: { viewBox, plot, axes,
     anchors?, baseline:{ id:curve }, equilibrium?, points? }. */
  function register(name, def) {
    CHARTS[name] = def;
    return def;
  }

  window.ECONOS_ECON_DIAGRAM = window.ECONOS_ECON_DIAGRAM || {};
  var API = window.ECONOS_ECON_DIAGRAM;
  API.register = register;
  API.charts = CHARTS;
  API.shapes = SHAPES;
  // Geometry — exposed for tests + the future form editor.
  API.intersect = intersect;
  API.intersectCurves = intersectCurves;
  API.shiftedC = shiftedC;
  API.normShift = normShift;
  API.evalCurve = evalCurve;
  API.curveDomain = curveDomain;
  API.computeEquilibrium = computeEquilibrium;
  API.resolvePoint = resolvePoint;
  API.lineEndpoints = lineEndpoints;
  API.makeLabelPlacer = makeLabelPlacer;

})();
