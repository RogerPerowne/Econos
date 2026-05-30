/**
 * PPF / PPC diagram generators — Econos
 * ======================================
 * Registers ECONOS_DIAGRAMS.ppfDiagram(cfg) on window.
 *
 * Requires window.EconSvg (js/diagrams/econ-svg.js) to be loaded first.
 *
 * ── USAGE ────────────────────────────────────────────────────────────
 *   ECONOS_DIAGRAMS.ppfDiagram({ mode: 'basic' })
 *   ECONOS_DIAGRAMS.ppfDiagram({ mode: 'opportunity-cost', pointA: [0.3, 0.82], pointB: [0.65, 0.55] })
 *
 * ── MODES ────────────────────────────────────────────────────────────
 *   basic              – canonical bowed-out PPF with two goods on axes.
 *   opportunity-cost   – two points A→B on the curve with movement arrows
 *                        and a marginal opportunity-cost callout.
 *   consumer-vs-capital– two sectors shaded on the curve (consumer goods
 *                        vs capital goods) with tone-coded regions.
 *   trade              – PPF plus a trading possibility frontier (TPF) that
 *                        lies beyond the PPF, showing gains from trade.
 *   efficiency-gap     – a point inside the frontier illustrating
 *                        productive inefficiency.
 *   growth-shift       – original PPF (dashed) plus outward-shifted PPF
 *                        (solid) showing economic growth.
 *
 * ── CONFIG OPTIONS (all optional) ───────────────────────────────────
 *   mode          string  'basic' (default)
 *   goodX         string  label for horizontal axis     default 'Good X'
 *   goodY         string  label for vertical axis       default 'Good Y'
 *   curveLabel    string  label at end of PPF curve     default 'PPF'
 *   viewBoxW      number  viewBox width                 default 640
 *   viewBoxH      number  viewBox height                default 380
 *   pointA        [nx,ny] normalised coords for point A (0..1 each)
 *   pointB        [nx,ny] normalised coords for point B (0..1 each)
 *   pointC        [nx,ny] normalised coords for point C (trade/gap point)
 *   labelA        string  label for point A             default 'A'
 *   labelB        string  label for point B             default 'B'
 *   labelC        string  label for point C             default 'C'
 *   calloutText   string  override opportunity-cost callout body
 *   showArrow     bool    show A→B movement arrow       default true
 *   tone          string  curve tone key                default 'blue'
 *   growthTone    string  shifted curve tone (growth)   default 'green'
 *   tradeTone     string  TPF curve tone                default 'green'
 *   gapTone       string  efficiency-gap point tone     default 'rose'
 * ─────────────────────────────────────────────────────────────────────
 */

(function (global) {
  'use strict';

  // ── CONSTANTS ────────────────────────────────────────────────────────
  const AXIS_COLOUR   = '#334155';
  const GUIDE_COLOUR  = '#94A3B8';
  const FONT_FAMILY   = "Inter, system-ui, sans-serif";

  // Six canonical tone palette (mirrors EconSvg.TONES)
  const TONES = {
    green:  { fill: '#ECFDF5', stroke: '#6EE7B7', title: '#065F46', sub: '#059669', curve: '#059669' },
    amber:  { fill: '#FFFBEB', stroke: '#FCD34D', title: '#92400E', sub: '#B45309', curve: '#D97706' },
    blue:   { fill: '#EFF6FF', stroke: '#93C5FD', title: '#1E3A8A', sub: '#2563EB', curve: '#2563EB' },
    purple: { fill: '#F5F3FF', stroke: '#C4B5FD', title: '#5B21B6', sub: '#7C3AED', curve: '#7C3AED' },
    rose:   { fill: '#FFF1F2', stroke: '#FDA4AF', title: '#9F1239', sub: '#BE123C', curve: '#BE123C' },
    slate:  { fill: '#F1F5F9', stroke: '#CBD5E1', title: '#334155', sub: '#475569', curve: '#475569' },
  };

  // Default safe-padding margins matching EconSvg defaults
  const PAD = { left: 48, top: 36, right: 56, bottom: 44 };

  // ── HELPERS ──────────────────────────────────────────────────────────

  /** Escape XML/HTML special chars */
  function esc(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  /** Resolve tone key → tone object (falls back to blue for PPF) */
  function tone(key) {
    return TONES[key] || TONES.blue;
  }

  /** Format a number to at most 2 decimal places, stripping trailing zeros */
  function f(n) {
    return +n.toFixed(2);
  }

  /**
   * Generate points for a bowed-out (concave to origin) PPF curve.
   * Parameterised as a quarter-ellipse arc: x = a·sin(t), y = b·cos(t)
   * for t in [0, π/2], sampled at N steps.
   * Returns pixel coords in plot-area space [[px, py], ...].
   * @param {number} pw    plot-area width in pixels
   * @param {number} ph    plot-area height in pixels
   * @param {number} a     x-axis reach as fraction of pw (default 0.88)
   * @param {number} b     y-axis reach as fraction of ph (default 0.88)
   * @param {number} N     number of sample points (default 40)
   */
  function ppfPoints(pw, ph, a, b, N) {
    a = (a !== undefined) ? a : 0.88;
    b = (b !== undefined) ? b : 0.88;
    N = N || 40;
    var pts = [];
    for (var i = 0; i <= N; i++) {
      var t = (i / N) * (Math.PI / 2);
      var nx = a * Math.sin(t);        // 0 → a
      var ny = 1 - b * Math.cos(t);    // 1-b → 1
      // In SVG plot area: x increases right, y increases downward
      // Frontier goes from top-left (x≈0, y≈small) to bottom-right (x≈large, y≈ph)
      pts.push([nx * pw, ny * ph]);
    }
    return pts;
  }

  /**
   * Given a normalised x coordinate (0..1), find the on-curve normalised y
   * for the standard PPF ellipse (a=0.88, b=0.88).
   * Solves: nx = a·sin(t) → t = asin(nx/a) → ny = 1 - b·cos(t)
   */
  function ppfYatX(nx, a, b) {
    a = (a !== undefined) ? a : 0.88;
    b = (b !== undefined) ? b : 0.88;
    // Clamp nx to [0, a] to avoid asin domain error
    var clamped = Math.min(Math.max(nx, 0), a);
    var t = Math.asin(clamped / a);
    return 1 - b * Math.cos(t);
  }

  /**
   * Convert a normalised [0..1] coord pair to pixel plot coords.
   * In the plot area SVG Y-axis goes DOWN, so ny=0 → top (py=0),
   * ny=1 → bottom (py=ph).
   */
  function normToPx(nx, ny, pw, ph) {
    return [nx * pw, ny * ph];
  }

  /**
   * Render a filled dot equilibrium marker (matches EconSvg.equilibrium style).
   */
  function dot(px, py, dotColour, r) {
    r = r || 5;
    return '<circle cx="' + f(px) + '" cy="' + f(py) + '" r="' + r + '" ' +
           'fill="' + esc(dotColour) + '" stroke="white" stroke-width="1.5"/>';
  }

  /**
   * Render dashed guide lines from point to both axes (matches EconSvg.equilibrium).
   */
  function guides(px, py, pw, ph) {
    return (
      '<line x1="' + f(px) + '" y1="' + f(py) + '" x2="' + f(px) + '" y2="' + f(ph) + '" ' +
        'stroke="' + GUIDE_COLOUR + '" stroke-width="1" stroke-dasharray="3 3"/>\n' +
      '<line x1="0" y1="' + f(py) + '" x2="' + f(px) + '" y2="' + f(py) + '" ' +
        'stroke="' + GUIDE_COLOUR + '" stroke-width="1" stroke-dasharray="3 3"/>'
    );
  }

  /**
   * Render a small label with white pill background.
   */
  function pillLabel(px, py, text, fillColour, anchor, fontSize) {
    anchor = anchor || 'start';
    fontSize = fontSize || 12;
    var charW = fontSize * 0.58;
    var txtW = String(text).length * charW + 10;
    var pillH = fontSize + 6;
    var rx = px;
    if (anchor === 'middle') { rx = px - txtW / 2; }
    if (anchor === 'end')    { rx = px - txtW; }
    return (
      '<rect x="' + f(rx) + '" y="' + f(py - pillH / 2 - 1) + '" ' +
        'width="' + f(txtW) + '" height="' + f(pillH) + '" ' +
        'rx="4" fill="white" fill-opacity="0.88"/>\n' +
      '<text x="' + f(px + (anchor === 'start' ? 5 : 0)) + '" y="' + f(py + fontSize / 2 - 1) + '" ' +
        'font-size="' + fontSize + '" font-weight="700" fill="' + esc(fillColour) + '" ' +
        'text-anchor="' + anchor + '" dominant-baseline="auto">' + esc(text) + '</text>'
    );
  }

  /**
   * Render a bold point label (A, B, C) with pill, offset above/left of a dot.
   */
  function pointLabel(px, py, text, colour) {
    return pillLabel(px + 7, py - 10, text, colour, 'start', 12);
  }

  /**
   * Render an arrowhead polygon pointing from (x1,y1) toward (x2,y2).
   */
  function arrowHead(x1, y1, x2, y2, size, colour) {
    var angle = Math.atan2(y2 - y1, x2 - x1);
    var s = size || 7;
    var pts = [
      [x2, y2],
      [x2 - s * Math.cos(angle - 0.4), y2 - s * Math.sin(angle - 0.4)],
      [x2 - s * Math.cos(angle + 0.4), y2 - s * Math.sin(angle + 0.4)],
    ].map(function (p) { return f(p[0]) + ',' + f(p[1]); }).join(' ');
    return '<polygon points="' + pts + '" fill="' + esc(colour || AXIS_COLOUR) + '"/>';
  }

  /**
   * Render a simple curved arrow (polyline approximation) from point A to point B.
   * Bows outward slightly to visually clear any dots.
   */
  function movementArrow(ax, ay, bx, by, colour) {
    // Midpoint bowed slightly outward from the PPF centre
    var mx = (ax + bx) / 2 + (by - ay) * 0.12;
    var my = (ay + by) / 2 + (ax - bx) * 0.12;
    var d = 'M' + f(ax) + ',' + f(ay) +
            ' Q' + f(mx) + ',' + f(my) +
            ' ' + f(bx) + ',' + f(by);
    // Arrowhead direction: approximate tangent at end of quadratic
    var tx = bx - mx;
    var ty = by - my;
    return (
      '<path d="' + d + '" fill="none" stroke="' + esc(colour) + '" ' +
        'stroke-width="1.8" stroke-linecap="round"/>\n' +
      arrowHead(mx, my, bx, by, 6, colour)
    );
  }

  /**
   * Build a <path d="…"> polyline from [[x,y],...] points.
   */
  function pointsToD(pts) {
    return pts.map(function (p, i) {
      return (i === 0 ? 'M' : 'L') + f(p[0]) + ',' + f(p[1]);
    }).join(' ');
  }

  /**
   * Render the axes fragment (matches EconSvg.axes output style).
   */
  function renderAxes(pw, ph, goodX, goodY) {
    var arrowSz = 7;
    return (
      // Y-axis
      '<line x1="0" y1="' + f(ph) + '" x2="0" y2="0" stroke="' + AXIS_COLOUR + '" stroke-width="1.8"/>\n' +
      arrowHead(0, ph * 0.2, 0, 0, arrowSz, AXIS_COLOUR) + '\n' +
      // X-axis
      '<line x1="0" y1="' + f(ph) + '" x2="' + f(pw) + '" y2="' + f(ph) + '" stroke="' + AXIS_COLOUR + '" stroke-width="1.8"/>\n' +
      arrowHead(pw * 0.8, ph, pw, ph, arrowSz, AXIS_COLOUR) + '\n' +
      // Y-axis label (rotated)
      '<text x="' + f(-ph / 2) + '" y="-32" transform="rotate(-90)" ' +
        'text-anchor="middle" font-size="12" font-weight="600" ' +
        'fill="' + AXIS_COLOUR + '" letter-spacing="0.3">' + esc(goodY) + '</text>\n' +
      // X-axis label
      '<text x="' + f(pw / 2) + '" y="' + f(ph + 36) + '" ' +
        'text-anchor="middle" font-size="12" font-weight="600" ' +
        'fill="' + AXIS_COLOUR + '" letter-spacing="0.3">' + esc(goodX) + '</text>'
    );
  }

  /**
   * Render the bowed-out PPF curve path.
   * Returns an SVG <path> element string.
   */
  function renderPPFCurve(pts, stroke, dashed, opacity, sw) {
    sw = sw || 2.2;
    opacity = (opacity !== undefined) ? opacity : 1;
    var dashAttr = dashed ? 'stroke-dasharray="4 3"' : '';
    var opAttr   = opacity !== 1 ? 'opacity="' + opacity + '"' : '';
    return (
      '<path d="' + pointsToD(pts) + '" fill="none" ' +
        'stroke="' + esc(stroke) + '" stroke-width="' + sw + '" ' +
        'stroke-linecap="round" stroke-linejoin="round" ' +
        dashAttr + ' ' + opAttr + '/>'
    );
  }

  /**
   * Render a callout box (matches EconSvg.callout style).
   * anchor: 'left' | 'right'
   */
  function renderCallout(x, y, title, body, toneKey, anchor) {
    var t = tone(toneKey || 'slate');
    var boxW = 148;
    var lineH = 15;
    var bodyLines = String(body).length > 24
      ? [String(body).slice(0, 24), String(body).slice(24)]
      : [String(body)];
    var boxH = 16 + lineH + lineH * bodyLines.length + 8;
    var side = anchor || 'left';
    var bx = side === 'right' ? x - boxW - 8 : x + 8;
    var by = y - boxH / 2;
    var out = '<rect x="' + f(bx) + '" y="' + f(by) + '" width="' + boxW + '" height="' + f(boxH) + '" ' +
              'rx="6" fill="' + esc(t.fill) + '" stroke="' + esc(t.stroke) + '" stroke-width="1"/>\n' +
              '<text x="' + f(bx + 10) + '" y="' + f(by + 16) + '" ' +
                'font-size="12" font-weight="700" fill="' + esc(t.title) + '">' + esc(title) + '</text>\n';
    bodyLines.forEach(function (ln, i) {
      out += '<text x="' + f(bx + 10) + '" y="' + f(by + 16 + lineH * (i + 1)) + '" ' +
             'font-size="11" fill="' + esc(t.sub) + '">' + esc(ln) + '</text>\n';
    });
    return out;
  }

  /**
   * Wrap plot-area fragments in a full <svg> shell with padding.
   */
  function wrapSvg(vbW, vbH, inner) {
    var pw = vbW - PAD.left - PAD.right;
    var ph = vbH - PAD.top  - PAD.bottom;
    // Suppress unused pw/ph warning — they're only used by callers for geometry
    void pw; void ph;
    return (
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + vbW + ' ' + vbH + '" ' +
        'width="' + vbW + '" height="' + vbH + '" ' +
        'style="font-family:' + FONT_FAMILY + ';overflow:visible;">\n' +
      '  <g transform="translate(' + PAD.left + ',' + PAD.top + ')">\n' +
      inner + '\n' +
      '  </g>\n' +
      '</svg>'
    );
  }

  // ── MODE RENDERERS ───────────────────────────────────────────────────

  /**
   * basic — canonical bowed-out PPF with labelled axes.
   */
  function renderBasic(cfg, pw, ph) {
    var t = tone(cfg.tone || 'blue');
    var pts = ppfPoints(pw, ph);
    var lastPt = pts[pts.length - 1];
    var parts = [];

    parts.push(renderAxes(pw, ph, cfg.goodX, cfg.goodY));
    parts.push(renderPPFCurve(pts, t.curve, false, 1, 2.2));

    // Curve label near the end, with pill
    var lx = lastPt[0] + 6;
    var ly = lastPt[1] - 10;
    parts.push(pillLabel(lx, ly, cfg.curveLabel, t.curve, 'start', 12));

    return parts.join('\n');
  }

  /**
   * opportunity-cost — two points A and B on the curve with a movement
   * arrow and a callout showing the marginal opportunity cost.
   *
   * Default A = (0.28, ppfY(0.28)) — relatively more Good Y
   *         B = (0.65, ppfY(0.65)) — more Good X, less Good Y
   */
  function renderOpportunityCost(cfg, pw, ph) {
    var t = tone(cfg.tone || 'blue');
    var pts = ppfPoints(pw, ph);
    var lastPt = pts[pts.length - 1];
    var parts = [];

    // Default points
    var nAx = (cfg.pointA && cfg.pointA[0] !== undefined) ? cfg.pointA[0] : 0.28;
    var nAy = (cfg.pointA && cfg.pointA[1] !== undefined) ? cfg.pointA[1] : ppfYatX(nAx);
    var nBx = (cfg.pointB && cfg.pointB[0] !== undefined) ? cfg.pointB[0] : 0.65;
    var nBy = (cfg.pointB && cfg.pointB[1] !== undefined) ? cfg.pointB[1] : ppfYatX(nBx);

    var pA = normToPx(nAx, nAy, pw, ph);
    var pB = normToPx(nBx, nBy, pw, ph);

    parts.push(renderAxes(pw, ph, cfg.goodX, cfg.goodY));
    parts.push(renderPPFCurve(pts, t.curve, false, 1, 2.2));

    // Curve label
    parts.push(pillLabel(lastPt[0] + 6, lastPt[1] - 10, cfg.curveLabel, t.curve, 'start', 12));

    // Dashed guide lines for both points
    parts.push(guides(pA[0], pA[1], pw, ph));
    parts.push(guides(pB[0], pB[1], pw, ph));

    // Movement arrow A → B
    if (cfg.showArrow !== false) {
      parts.push(movementArrow(pA[0], pA[1], pB[0], pB[1], t.curve));
    }

    // Dots
    parts.push(dot(pA[0], pA[1], t.curve));
    parts.push(dot(pB[0], pB[1], t.curve));

    // Point labels
    var labelA = cfg.labelA || 'A';
    var labelB = cfg.labelB || 'B';
    parts.push(pointLabel(pA[0], pA[1], labelA, t.curve));
    parts.push(pointLabel(pB[0], pB[1], labelB, t.curve));

    // Opportunity-cost callout
    var callBody = cfg.calloutText ||
      ('More Good X = less Good Y');
    var callX = (pA[0] + pB[0]) / 2;
    var callY = Math.min(pA[1], pB[1]) - 30;
    var callAnchor = callX > pw * 0.55 ? 'right' : 'left';
    parts.push(renderCallout(callX, callY, 'Opportunity cost', callBody, 'amber', callAnchor));

    return parts.join('\n');
  }

  /**
   * consumer-vs-capital — shaded regions on either side of a split point
   * on the PPF: amber for consumer goods side, green for capital goods side.
   * A point is marked on the PPF showing the current allocation.
   */
  function renderConsumerVsCapital(cfg, pw, ph) {
    var tBlue   = tone('blue');
    var tAmber  = tone('amber');
    var tGreen  = tone('green');
    var pts     = ppfPoints(pw, ph);
    var lastPt  = pts[pts.length - 1];
    var parts   = [];

    // Split point at nx=0.50 on the curve
    var splitNx = (cfg.pointA && cfg.pointA[0] !== undefined) ? cfg.pointA[0] : 0.50;
    var splitNy = ppfYatX(splitNx);
    var splitPx = normToPx(splitNx, splitNy, pw, ph);

    // Build shaded area paths
    // Consumer goods (Good Y, right side of split → more Good X allocation)
    // Capital goods  (Good Y, left side of split  → more Good Y allocation)

    // Left shading region: from x=0, y=0 along PPF to split, then down/left back to origin
    var leftPts = [];
    for (var i = 0; i < pts.length; i++) {
      if (pts[i][0] > splitPx[0] + 1) { break; }
      leftPts.push(pts[i]);
    }
    // close: go down to x-axis, then back to origin
    leftPts.push([splitPx[0], ph]);
    leftPts.push([0, ph]);
    var leftD = pointsToD(leftPts) + ' Z';

    // Right shading region: from split along PPF to end, then back along x-axis
    var rightPts = [];
    for (var j = 0; j < pts.length; j++) {
      if (pts[j][0] >= splitPx[0] - 1) {
        rightPts.push(pts[j]);
      }
    }
    rightPts.push([pts[pts.length - 1][0], ph]);
    rightPts.push([splitPx[0], ph]);
    var rightD = pointsToD(rightPts) + ' Z';

    parts.push(renderAxes(pw, ph, cfg.goodX || 'Capital Goods', cfg.goodY || 'Consumer Goods'));

    // Shaded areas
    parts.push('<path d="' + leftD  + '" fill="' + esc(tGreen.fill) + '" fill-opacity="0.55"/>');
    parts.push('<path d="' + rightD + '" fill="' + esc(tAmber.fill) + '" fill-opacity="0.55"/>');

    parts.push(renderPPFCurve(pts, tBlue.curve, false, 1, 2.2));
    parts.push(pillLabel(lastPt[0] + 6, lastPt[1] - 10, cfg.curveLabel, tBlue.curve, 'start', 12));

    // Region labels
    var capLabelX = splitPx[0] * 0.4;
    var capLabelY = ph * 0.42;
    parts.push(
      '<text x="' + f(capLabelX) + '" y="' + f(capLabelY) + '" ' +
        'font-size="11" font-weight="700" fill="' + esc(tGreen.title) + '" ' +
        'text-anchor="middle">Capital</text>\n' +
      '<text x="' + f(capLabelX) + '" y="' + f(capLabelY + 16) + '" ' +
        'font-size="11" font-weight="700" fill="' + esc(tGreen.title) + '" ' +
        'text-anchor="middle">Goods</text>'
    );

    var conLabelX = splitPx[0] + (pw - splitPx[0]) * 0.5;
    var conLabelY = ph * 0.62;
    parts.push(
      '<text x="' + f(conLabelX) + '" y="' + f(conLabelY) + '" ' +
        'font-size="11" font-weight="700" fill="' + esc(tAmber.title) + '" ' +
        'text-anchor="middle">Consumer</text>\n' +
      '<text x="' + f(conLabelX) + '" y="' + f(conLabelY + 16) + '" ' +
        'font-size="11" font-weight="700" fill="' + esc(tAmber.title) + '" ' +
        'text-anchor="middle">Goods</text>'
    );

    // Split point marker
    parts.push(guides(splitPx[0], splitPx[1], pw, ph));
    parts.push(dot(splitPx[0], splitPx[1], tBlue.curve));
    parts.push(pointLabel(splitPx[0], splitPx[1], cfg.labelA || 'A', tBlue.curve));

    return parts.join('\n');
  }

  /**
   * trade — PPF (solid blue) plus a Trading Possibility Frontier (solid green)
   * that lies beyond the PPF at one end, showing gains from trade.
   * The TPF is a straight line from a point on the PPF's y-intercept
   * outward past the PPF's x-intercept.
   */
  function renderTrade(cfg, pw, ph) {
    var tBlue  = tone(cfg.tone      || 'blue');
    var tGreen = tone(cfg.tradeTone || 'green');
    var pts    = ppfPoints(pw, ph);
    var parts  = [];

    // PPF y-intercept (top of curve, at t=0): approx (0, ph*(1-0.88)) = (0, 0.12*ph)
    var ppfTopY = (1 - 0.88) * ph;  // where the PPF meets the y-axis
    // PPF x-intercept (bottom of curve, at t=π/2): approx (0.88*pw, ph)
    var ppfBotX = 0.88 * pw;

    // TPF: straight line from just above PPF y-intercept to beyond PPF x-intercept
    // Represents the improved trade-off available via specialisation + trade
    var tpfStartX = 0;
    var tpfStartY = ppfTopY * 0.55;       // above PPF y-intercept → more of Good Y via trade
    var tpfEndX   = pw * 0.96;            // beyond PPF x-intercept → more of Good X via trade
    var tpfEndY   = ph;

    parts.push(renderAxes(pw, ph, cfg.goodX, cfg.goodY));
    parts.push(renderPPFCurve(pts, tBlue.curve, false, 1, 2.2));

    // TPF line
    parts.push(
      '<line x1="' + f(tpfStartX) + '" y1="' + f(tpfStartY) + '" ' +
        'x2="' + f(tpfEndX) + '" y2="' + f(tpfEndY) + '" ' +
        'stroke="' + esc(tGreen.curve) + '" stroke-width="2.2" ' +
        'stroke-linecap="round"/>'
    );

    // Curve labels
    var lastPt = pts[pts.length - 1];
    parts.push(pillLabel(lastPt[0] + 6, lastPt[1] - 10, cfg.curveLabel, tBlue.curve, 'start', 12));
    parts.push(pillLabel(tpfEndX - 4, tpfEndY - 18, 'TPF', tGreen.curve, 'end', 12));

    // Shaded gains from trade region (area between TPF and PPF)
    // Approximate by building a region from tpfStart → along TPF → ppfBot corner → along PPF back → tpfStart
    var gainsPts = [
      [tpfStartX, tpfStartY],
      [tpfEndX, tpfEndY],
      [ppfBotX, ph],
    ].concat(pts.slice().reverse());
    gainsPts.push([0, ppfTopY]);
    var gainsD = pointsToD(gainsPts) + ' Z';
    parts.push(
      '<path d="' + gainsD + '" fill="' + esc(tGreen.fill) + '" fill-opacity="0.35" stroke="none"/>'
    );

    // Gains callout
    var callX = pw * 0.72;
    var callY = ph * 0.20;
    parts.push(renderCallout(callX, callY, 'Gains from trade', 'Points beyond the PPF', 'green', 'right'));

    // Optional trade point C (e.g. chosen trade point beyond PPF)
    if (cfg.pointC) {
      var nCx = cfg.pointC[0];
      var nCy = cfg.pointC[1];
      var pC  = normToPx(nCx, nCy, pw, ph);
      var tRose = tone('rose');
      parts.push(dot(pC[0], pC[1], tRose.curve));
      parts.push(pointLabel(pC[0], pC[1], cfg.labelC || 'C', tRose.curve));
    }

    return parts.join('\n');
  }

  /**
   * efficiency-gap — a point inside the frontier showing productive inefficiency,
   * with a guide to the nearest point on the PPF showing attainable output.
   */
  function renderEfficiencyGap(cfg, pw, ph) {
    var tBlue = tone(cfg.tone    || 'blue');
    var tRose = tone(cfg.gapTone || 'rose');
    var pts   = ppfPoints(pw, ph);
    var parts = [];

    // Default inefficiency point: significantly inside the frontier
    var nCx = (cfg.pointC && cfg.pointC[0] !== undefined) ? cfg.pointC[0] : 0.42;
    var nCy = (cfg.pointC && cfg.pointC[1] !== undefined) ? cfg.pointC[1] : 0.72;
    var pC  = normToPx(nCx, nCy, pw, ph);

    // Find the on-curve point at the same nx (directly outward on x axis)
    var onCurveNy = ppfYatX(nCx);
    var pOnCurve  = normToPx(nCx, onCurveNy, pw, ph);

    parts.push(renderAxes(pw, ph, cfg.goodX, cfg.goodY));
    parts.push(renderPPFCurve(pts, tBlue.curve, false, 1, 2.2));

    var lastPt = pts[pts.length - 1];
    parts.push(pillLabel(lastPt[0] + 6, lastPt[1] - 10, cfg.curveLabel, tBlue.curve, 'start', 12));

    // Dashed arrow from C to the PPF (efficiency gap indicator)
    var gapD = 'M' + f(pC[0]) + ',' + f(pC[1]) + ' L' + f(pOnCurve[0]) + ',' + f(pOnCurve[1]);
    parts.push(
      '<path d="' + gapD + '" fill="none" stroke="' + esc(tRose.curve) + '" ' +
        'stroke-width="1.8" stroke-dasharray="4 3" stroke-linecap="round"/>'
    );
    parts.push(arrowHead(pC[0], pC[1], pOnCurve[0], pOnCurve[1], 6, tRose.curve));

    // Shaded "wasted resources" zone between C and the PPF
    parts.push(
      '<circle cx="' + f((pC[0] + pOnCurve[0]) / 2) + '" cy="' + f((pC[1] + pOnCurve[1]) / 2) + '" ' +
        'r="' + f(Math.abs(pOnCurve[1] - pC[1]) * 0.4) + '" ' +
        'fill="' + esc(tRose.fill) + '" fill-opacity="0.45" stroke="none"/>'
    );

    // Guide lines from inefficiency point
    parts.push(guides(pC[0], pC[1], pw, ph));

    // Dots
    parts.push(dot(pC[0], pC[1], tRose.curve));
    parts.push(dot(pOnCurve[0], pOnCurve[1], tBlue.curve));

    // Labels
    parts.push(pointLabel(pC[0], pC[1], cfg.labelC || 'C', tRose.curve));
    var labelB = cfg.labelB || 'B';
    parts.push(pointLabel(pOnCurve[0], pOnCurve[1], labelB, tBlue.curve));

    // Callout
    var callX = pC[0];
    var callY = pC[1] + 28;
    var callAnchor = callX > pw * 0.55 ? 'right' : 'left';
    parts.push(renderCallout(
      callX, callY,
      'Productive inefficiency',
      cfg.calloutText || 'Resources wasted or idle',
      'rose', callAnchor
    ));

    return parts.join('\n');
  }

  /**
   * growth-shift — original PPF dashed at 55% opacity, new PPF solid and
   * outward-shifted (larger a/b parameters), showing economic growth.
   */
  function renderGrowthShift(cfg, pw, ph) {
    var tBlue  = tone(cfg.tone       || 'blue');
    var tGreen = tone(cfg.growthTone || 'green');
    var parts  = [];

    // Original PPF: standard size
    var ptsOld = ppfPoints(pw, ph, 0.82, 0.82);
    // New PPF: outward shifted
    var ptsNew = ppfPoints(pw, ph, 0.93, 0.93);

    var lastOld = ptsOld[ptsOld.length - 1];
    var lastNew = ptsNew[ptsNew.length - 1];

    parts.push(renderAxes(pw, ph, cfg.goodX, cfg.goodY));

    // Old PPF dashed
    parts.push(renderPPFCurve(ptsOld, tBlue.curve, true, 0.55, 2));
    parts.push(pillLabel(lastOld[0] + 6, lastOld[1] - 10,
      (cfg.curveLabel || 'PPF') + '₁', tBlue.curve, 'start', 11));

    // New PPF solid green
    parts.push(renderPPFCurve(ptsNew, tGreen.curve, false, 1, 2.2));
    parts.push(pillLabel(lastNew[0] + 6, lastNew[1] - 10,
      (cfg.curveLabel || 'PPF') + '₂', tGreen.curve, 'start', 12));

    // Shift arrows: draw a few spaced arrows pointing outward from old to new PPF
    var arrowTone = tGreen.curve;
    var arrowNxs = [0.18, 0.45, 0.72];
    arrowNxs.forEach(function (nx) {
      var nyOld = ppfYatX(nx, 0.82, 0.82);
      var nyNew = ppfYatX(nx, 0.93, 0.93);
      // Use midpoint angle for outward direction
      var pOld = normToPx(nx, nyOld, pw, ph);
      var pNew = normToPx(nx, nyNew, pw, ph);
      // Only show if the shift is visually significant
      var dist = Math.sqrt(Math.pow(pNew[0] - pOld[0], 2) + Math.pow(pNew[1] - pOld[1], 2));
      if (dist > 8) {
        var midX = (pOld[0] + pNew[0]) / 2;
        var midY = (pOld[1] + pNew[1]) / 2;
        parts.push(
          '<line x1="' + f(pOld[0]) + '" y1="' + f(pOld[1]) + '" ' +
            'x2="' + f(pNew[0]) + '" y2="' + f(pNew[1]) + '" ' +
            'stroke="' + esc(arrowTone) + '" stroke-width="1.4" ' +
            'stroke-dasharray="2 2" opacity="0.7"/>'
        );
        parts.push(arrowHead(midX, midY, pNew[0], pNew[1], 6, arrowTone));
      }
    });

    // Callout
    var callX = pw * 0.18;
    var callY = ph * 0.22;
    parts.push(renderCallout(callX, callY,
      'Economic growth',
      cfg.calloutText || 'Outward shift of PPF',
      'green', 'left'));

    return parts.join('\n');
  }

  // ── MAIN GENERATOR ───────────────────────────────────────────────────

  /**
   * ECONOS_DIAGRAMS.ppfDiagram(cfg)
   * Returns a complete <svg> string for a PPF / PPC diagram.
   *
   * @param {Object} cfg - Configuration object (all fields optional)
   * @param {string} [cfg.mode='basic']            Diagram mode
   * @param {string} [cfg.goodX='Good X']          Horizontal axis label
   * @param {string} [cfg.goodY='Good Y']          Vertical axis label
   * @param {string} [cfg.curveLabel='PPF']        Curve end label
   * @param {number} [cfg.viewBoxW=640]            viewBox width
   * @param {number} [cfg.viewBoxH=380]            viewBox height
   * @param {number[]} [cfg.pointA]                Normalised [x,y] for point A
   * @param {number[]} [cfg.pointB]                Normalised [x,y] for point B
   * @param {number[]} [cfg.pointC]                Normalised [x,y] for point C
   * @param {string} [cfg.labelA='A']              Label for point A
   * @param {string} [cfg.labelB='B']              Label for point B
   * @param {string} [cfg.labelC='C']              Label for point C
   * @param {string} [cfg.calloutText]             Override callout body text
   * @param {boolean} [cfg.showArrow=true]         Show movement arrow
   * @param {string} [cfg.tone='blue']             Main curve tone key
   * @param {string} [cfg.growthTone='green']      Shifted curve tone (growth mode)
   * @param {string} [cfg.tradeTone='green']       TPF curve tone (trade mode)
   * @param {string} [cfg.gapTone='rose']          Inefficiency point tone (efficiency-gap)
   * @returns {string} Complete SVG markup string
   */
  function ppfDiagram(cfg) {
    cfg = cfg || {};

    var mode    = cfg.mode || 'basic';
    var vbW     = cfg.viewBoxW || 640;
    var vbH     = cfg.viewBoxH || 380;
    var pw      = vbW - PAD.left - PAD.right;
    var ph      = vbH - PAD.top  - PAD.bottom;

    // Apply config defaults
    cfg.goodX     = cfg.goodX     || 'Good X';
    cfg.goodY     = cfg.goodY     || 'Good Y';
    cfg.curveLabel = cfg.curveLabel || 'PPF';

    var inner;
    switch (mode) {
      case 'opportunity-cost':
        inner = renderOpportunityCost(cfg, pw, ph);
        break;
      case 'consumer-vs-capital':
        inner = renderConsumerVsCapital(cfg, pw, ph);
        break;
      case 'trade':
        inner = renderTrade(cfg, pw, ph);
        break;
      case 'efficiency-gap':
        inner = renderEfficiencyGap(cfg, pw, ph);
        break;
      case 'growth-shift':
        inner = renderGrowthShift(cfg, pw, ph);
        break;
      case 'basic':
      default:
        inner = renderBasic(cfg, pw, ph);
        break;
    }

    return wrapSvg(vbW, vbH, inner);
  }

  // ── REGISTRATION ─────────────────────────────────────────────────────

  global.ECONOS_DIAGRAMS = global.ECONOS_DIAGRAMS || {};
  global.ECONOS_DIAGRAMS.ppfDiagram = ppfDiagram;

}(typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : this));
