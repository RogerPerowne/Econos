/**
 * firm-labour.js — Data-driven diagram generators for the "firm-labour" family.
 * =============================================================================
 * Registers three generators onto window.ECONOS_DIAGRAMS:
 *
 *   ECONOS_DIAGRAMS.costCurvesDiagram(cfg)
 *   ECONOS_DIAGRAMS.marketStructureDiagram(cfg)
 *   ECONOS_DIAGRAMS.labourMarketDiagram(cfg)
 *
 * Assumes window.EconSvg is already loaded (econ-svg.js).
 * IIFE — no external dependencies.
 *
 * Config options documented inline above each generator function.
 */
(function (global) {
  'use strict';

  // ── TONE CONSTANTS ────────────────────────────────────────────────────
  // Only the six canonical Econos tones.
  var BLUE    = '#2563EB';   // demand / AR / MR (shifted/competitive)
  var BLUE_L  = '#93C5FD';   // light blue for fills
  var GREEN   = '#059669';   // supply / AC (competitive equilibrium)
  var GREEN_L = '#ECFDF5';   // light green fills
  var AMBER   = '#D97706';   // MC / SRAS
  var AMBER_L = '#FFFBEB';
  var PURPLE  = '#7C3AED';   // MR (monopoly specific) / profit shade
  var PURPLE_L= '#F5F3FF';
  var ROSE    = '#BE123C';   // loss / deadweight area
  var ROSE_L  = '#FFF1F2';
  var SLATE   = '#334155';   // axes, AVC, AFC labels
  var GUIDE   = '#94A3B8';   // dashed guide lines

  // ── UTILITY HELPERS ───────────────────────────────────────────────────

  /** Escape XML special chars */
  function esc(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  /** Format a number for SVG coords */
  function n(v) { return +v.toFixed(2); }

  /**
   * Dashed guide line from point to an axis (horizontal + vertical).
   * Returns two <line> elements pointing from (px, py) to each axis edge.
   * @param {number} px  - x coord in plot space
   * @param {number} py  - y coord in plot space
   * @param {number} ph  - plot height (y-axis bottom)
   * @returns {string}
   */
  function guideLines(px, py, ph) {
    var dash = 'stroke-dasharray="3 3"';
    return (
      '<line x1="' + n(px) + '" y1="' + n(py) + '" x2="' + n(px) + '" y2="' + n(ph) + '" stroke="' + GUIDE + '" stroke-width="1" ' + dash + '/>' +
      '<line x1="0" y1="' + n(py) + '" x2="' + n(px) + '" y2="' + n(py) + '" stroke="' + GUIDE + '" stroke-width="1" ' + dash + '/>'
    );
  }

  /**
   * Equilibrium dot with optional label.
   * @param {number} px
   * @param {number} py
   * @param {string} colour
   * @param {string} [lbl]
   * @param {string} [labelAnchor] - 'start'|'end' (default 'start')
   * @returns {string}
   */
  function eqDot(px, py, colour, lbl, labelAnchor) {
    var anchor = labelAnchor || 'start';
    var lx = anchor === 'end' ? n(px - 8) : n(px + 8);
    var out = '<circle cx="' + n(px) + '" cy="' + n(py) + '" r="5" fill="' + esc(colour) + '" stroke="white" stroke-width="1.5"/>';
    if (lbl) {
      out += '<text x="' + lx + '" y="' + n(py - 7) + '" font-size="11" font-weight="700" fill="' + esc(colour) + '" text-anchor="' + anchor + '">' + esc(lbl) + '</text>';
    }
    return out;
  }

  /**
   * Build a polyline <path> from an array of [x,y] pixel pairs.
   * @param {Array<[number,number]>} pts
   * @param {string} stroke
   * @param {number} sw
   * @param {boolean} [dashed]
   * @param {number} [opacity]
   * @returns {string}
   */
  function polyline(pts, stroke, sw, dashed, opacity) {
    var d = pts.map(function (p, i) {
      return (i === 0 ? 'M' : 'L') + n(p[0]) + ',' + n(p[1]);
    }).join(' ');
    var da = dashed ? ' stroke-dasharray="4 3"' : '';
    var op = (opacity != null && opacity !== 1) ? ' opacity="' + opacity + '"' : '';
    return '<path d="' + d + '" fill="none" stroke="' + esc(stroke) + '" stroke-width="' + sw + '" stroke-linecap="round" stroke-linejoin="round"' + da + op + '/>';
  }

  /**
   * Curve end-label with white pill background.
   * @param {number} lx
   * @param {number} ly
   * @param {string} lbl
   * @param {string} colour
   * @param {string} [anchor] - 'start'|'end'|'middle'
   * @returns {string}
   */
  function curveLabel(lx, ly, lbl, colour, anchor) {
    var ta = anchor || 'start';
    var fs = 12;
    var charW = fs * 0.58;
    var tw = String(lbl).length * charW + 10;
    var ph = fs + 6;
    var rx = ta === 'end' ? lx - tw : (ta === 'middle' ? lx - tw / 2 : lx);
    return (
      '<rect x="' + n(rx) + '" y="' + n(ly - ph / 2 - 1) + '" width="' + n(tw) + '" height="' + n(ph) + '" rx="4" fill="white" fill-opacity="0.88"/>' +
      '<text x="' + n(ta === 'end' ? lx - 5 : lx + 5) + '" y="' + n(ly + fs / 2 - 1) + '" font-size="' + fs + '" font-weight="700" fill="' + esc(colour) + '" text-anchor="' + ta + '">' + esc(lbl) + '</text>'
    );
  }

  /**
   * Draw standard axes (two lines + arrowheads + axis labels).
   * @param {number} pw  - plot width
   * @param {number} ph  - plot height
   * @param {string} xLabel
   * @param {string} yLabel
   * @returns {string}
   */
  function drawAxes(pw, ph, xLabel, yLabel) {
    var c = SLATE;
    var arr = 7;
    // arrowhead polygon helper (inline — don't depend on EconSvg internals)
    function arrowPoly(x1, y1, x2, y2) {
      var angle = Math.atan2(y2 - y1, x2 - x1);
      var s = arr;
      var pts = [
        [x2, y2],
        [x2 - s * Math.cos(angle - 0.4), y2 - s * Math.sin(angle - 0.4)],
        [x2 - s * Math.cos(angle + 0.4), y2 - s * Math.sin(angle + 0.4)],
      ].map(function (p) { return n(p[0]) + ',' + n(p[1]); }).join(' ');
      return '<polygon points="' + pts + '" fill="' + esc(c) + '"/>';
    }
    return (
      // Y axis
      '<line x1="0" y1="' + n(ph) + '" x2="0" y2="0" stroke="' + c + '" stroke-width="1.8"/>' +
      arrowPoly(0, ph * 0.2, 0, 0) +
      // X axis
      '<line x1="0" y1="' + n(ph) + '" x2="' + n(pw) + '" y2="' + n(ph) + '" stroke="' + c + '" stroke-width="1.8"/>' +
      arrowPoly(pw * 0.8, ph, pw, ph) +
      // Y label (rotated)
      '<text x="' + n(-ph / 2) + '" y="-34" transform="rotate(-90)" text-anchor="middle" font-size="12" font-weight="600" fill="' + c + '" letter-spacing="0.3">' + esc(yLabel) + '</text>' +
      // X label
      '<text x="' + n(pw / 2) + '" y="' + n(ph + 36) + '" text-anchor="middle" font-size="12" font-weight="600" fill="' + c + '" letter-spacing="0.3">' + esc(xLabel) + '</text>'
    );
  }

  /**
   * Wrap plot-area children in the full SVG shell.
   * Margins: left 52, top 36, right 60, bottom 44.
   * @param {number} vbW
   * @param {number} vbH
   * @param {string[]} parts
   * @returns {string}
   */
  function wrapSvg(vbW, vbH, parts) {
    var padL = 52, padT = 36, padR = 60, padB = 44;
    return (
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + vbW + ' ' + vbH + '" width="' + vbW + '" height="' + vbH + '" style="font-family:Inter,system-ui,sans-serif;overflow:visible;">' +
      '<g transform="translate(' + padL + ',' + padT + ')">' +
      parts.join('\n') +
      '</g>' +
      '</svg>'
    );
  }

  // ── SHARED CURVE MATH ─────────────────────────────────────────────────

  /**
   * Sample a U-shaped parabola at evenly spaced x positions.
   * y = a*(x - xMin)^2 + yMin  (all values in plot-pixel space)
   * @param {number} pw        - plot width (px)
   * @param {number} ph        - plot height (px)
   * @param {number} xMinNorm  - x position of the minimum (0..1)
   * @param {number} yMinNorm  - y value at minimum (0..1, 1=bottom)
   * @param {number} yLeftNorm - y value at x=0  (0..1, 1=bottom)
   * @param {number} steps
   * @returns {Array<[number,number]>}
   */
  function uCurve(pw, ph, xMinNorm, yMinNorm, yLeftNorm, steps) {
    var xMin = xMinNorm * pw;
    var yMin = (1 - yMinNorm) * ph;
    var yLeft = (1 - yLeftNorm) * ph;
    // solve a from left point: yLeft = a*(0 - xMin)^2 + yMin
    var a = (yLeft - yMin) / (xMin * xMin);
    var pts = [];
    for (var i = 0; i <= steps; i++) {
      var x = (i / steps) * pw;
      var y = a * Math.pow(x - xMin, 2) + yMin;
      pts.push([x, y]);
    }
    return pts;
  }

  /**
   * Sample a downward-sloping straight line between two normalised points.
   * @param {number} pw
   * @param {number} ph
   * @param {number} x0n
   * @param {number} y0n
   * @param {number} x1n
   * @param {number} y1n
   * @param {number} steps
   * @returns {Array<[number,number]>}
   */
  function straightLine(pw, ph, x0n, y0n, x1n, y1n, steps) {
    var pts = [];
    for (var i = 0; i <= steps; i++) {
      var t = i / steps;
      pts.push([
        (x0n + t * (x1n - x0n)) * pw,
        (1 - (y0n + t * (y1n - y0n))) * ph,
      ]);
    }
    return pts;
  }

  // ═════════════════════════════════════════════════════════════════════
  //  1. COST CURVES DIAGRAM
  // ═════════════════════════════════════════════════════════════════════

  /**
   * ECONOS_DIAGRAMS.costCurvesDiagram(cfg)
   *
   * Config options:
   *   variant  {string}  'short-run' | 'lrac' | 'mc-mr'  (default: 'short-run')
   *
   *   --- short-run specific ---
   *   showAC   {boolean}  show AC curve (default true)
   *   showAVC  {boolean}  show AVC curve (default true)
   *   showAFC  {boolean}  show AFC curve (default true)
   *   showMC   {boolean}  show MC curve (default true)
   *
   *   --- mc-mr specific ---
   *   price    {number}  normalised price level 0..1 where MR=AR line sits
   *                      (default 0.45)
   *
   *   --- lrac specific ---
   *   envelopeCount {number}  number of SRAC curves forming the envelope (3..7, default 5)
   *
   *   --- shared ---
   *   width    {number}  viewBox width (default 640)
   *   height   {number}  viewBox height (default 340)
   */
  function costCurvesDiagram(cfg) {
    cfg = cfg || {};
    var variant = cfg.variant || 'short-run';
    var vbW = cfg.width  || 640;
    var vbH = cfg.height || 340;
    var padL = 52, padT = 36, padR = 60, padB = 44;
    var pw = vbW - padL - padR;
    var ph = vbH - padT - padB;

    var parts = [];
    parts.push(drawAxes(pw, ph, 'Output (Q)', 'Costs / Revenue'));

    if (variant === 'lrac') {
      parts = parts.concat(_lracCurves(pw, ph, cfg));
    } else if (variant === 'mc-mr') {
      parts = parts.concat(_mcMrCurves(pw, ph, cfg));
    } else {
      parts = parts.concat(_shortRunCurves(pw, ph, cfg));
    }

    return wrapSvg(vbW, vbH, parts);
  }

  /** Short-run cost curves: AC, AVC, AFC, MC */
  function _shortRunCurves(pw, ph, cfg) {
    var showAC  = cfg.showAC  !== false;
    var showAVC = cfg.showAVC !== false;
    var showAFC = cfg.showAFC !== false;
    var showMC  = cfg.showMC  !== false;
    var parts = [];
    var steps = 60;

    // AFC: rectangular hyperbola — descends steeply then flattens
    // modelled as y = k/x shifted so it starts high and approaches a floor
    if (showAFC) {
      var afcPts = [];
      for (var i = 1; i <= steps; i++) {
        var t = i / steps;
        var x = t * pw;
        // k/x in normalised space, clamp at top
        var rawY = 0.18 / (t + 0.04);
        rawY = Math.min(rawY, 0.95);
        afcPts.push([x, (1 - rawY) * ph]);
      }
      parts.push(polyline(afcPts, SLATE, 1.8, false, 0.75));
      parts.push(curveLabel(afcPts[afcPts.length - 1][0] + 4, afcPts[afcPts.length - 1][1], 'AFC', SLATE, 'start'));
    }

    // AVC: U-shaped — minimum around x=0.5
    if (showAVC) {
      var avcPts = uCurve(pw, ph, 0.52, 0.28, 0.62, steps);
      parts.push(polyline(avcPts, AMBER, 2, false, 1));
      parts.push(curveLabel(avcPts[avcPts.length - 1][0] + 4, avcPts[avcPts.length - 1][1], 'AVC', AMBER, 'start'));
    }

    // AC: U-shaped above AVC (same shape, shifted up by AFC gap)
    if (showAC) {
      var acPts = uCurve(pw, ph, 0.55, 0.50, 0.82, steps);
      parts.push(polyline(acPts, GREEN, 2.2, false, 1));
      parts.push(curveLabel(acPts[acPts.length - 1][0] + 4, acPts[acPts.length - 1][1], 'AC', GREEN, 'start'));
    }

    // MC: U-shaped, steeper, passes through minima of AVC and AC
    if (showMC) {
      var mcPts = uCurve(pw, ph, 0.35, 0.18, 0.78, steps);
      parts.push(polyline(mcPts, AMBER, 2.2, false, 1));
      // MC label placed where it crosses AC (roughly mid-right)
      parts.push(curveLabel(n(pw * 0.58), n(ph * 0.35), 'MC', AMBER, 'start'));

      // Equilibrium dot where MC crosses AC minimum
      var mcAcX = pw * 0.55;
      var mcAcY = ph * 0.50;
      parts.push(guideLines(mcAcX, mcAcY, ph));
      parts.push(eqDot(mcAcX, mcAcY, GREEN, 'min AC'));
    }

    return parts;
  }

  /** LRAC envelope: several SRAC parabolas forming the long-run envelope */
  function _lracCurves(pw, ph, cfg) {
    var count = Math.max(3, Math.min(7, cfg.envelopeCount || 5));
    var parts = [];
    var steps = 60;

    // Each SRAC sits at a different scale, tangent to the LRAC
    // LRAC: broad U-shape centred at 0.55
    var lracPts = uCurve(pw, ph, 0.55, 0.38, 0.75, steps);

    // Draw each SRAC in dashed slate
    for (var k = 0; k < count; k++) {
      var t = (k + 0.5) / count;  // normalised x position for this SRAC minimum
      // The SRAC minimum lies on the LRAC
      var sracMinX = t;
      // LRAC y at this x
      var xPx = t * pw;
      var lracY = _evalUCurve(pw, ph, 0.55, 0.38, 0.75, xPx);
      var sracMinY = lracY / ph;  // in normalised y (0=top)
      // Draw narrower U-shaped SRAC around this point
      var sracPts = uCurve(pw, ph, sracMinX, 1 - sracMinY, 1 - sracMinY + 0.22, steps);
      parts.push(polyline(sracPts, AMBER, 1.5, true, 0.55));
      // Label first and last
      if (k === 0) {
        parts.push(curveLabel(sracPts[3][0], sracPts[3][1] - 4, 'SRAC', AMBER, 'start'));
      }
    }

    // LRAC envelope in green, solid
    parts.push(polyline(lracPts, GREEN, 2.5, false, 1));
    parts.push(curveLabel(lracPts[lracPts.length - 1][0] + 4, lracPts[lracPts.length - 1][1], 'LRAC', GREEN, 'start'));

    // Minimum LRAC point
    var minX = pw * 0.55;
    var minY = _evalUCurve(pw, ph, 0.55, 0.38, 0.75, minX);
    parts.push(guideLines(minX, minY, ph));
    parts.push(eqDot(minX, minY, GREEN, 'min LRAC'));

    return parts;
  }

  /** Evaluate the parabola used in uCurve at a specific pixel x */
  function _evalUCurve(pw, ph, xMinNorm, yMinNorm, yLeftNorm, xPx) {
    var xMin = xMinNorm * pw;
    var yMin = (1 - yMinNorm) * ph;
    var yLeft = (1 - yLeftNorm) * ph;
    var a = (yLeft - yMin) / (xMin * xMin);
    return a * Math.pow(xPx - xMin, 2) + yMin;
  }

  /** MC = MR profit maximisation diagram */
  function _mcMrCurves(pw, ph, cfg) {
    var priceNorm = cfg.price != null ? cfg.price : 0.45;
    var parts = [];
    var steps = 60;

    // MC: U-shaped curve
    var mcPts = uCurve(pw, ph, 0.35, 0.18, 0.78, steps);
    parts.push(polyline(mcPts, AMBER, 2.2));
    parts.push(curveLabel(mcPts[mcPts.length - 1][0] + 4, mcPts[mcPts.length - 1][1], 'MC', AMBER));

    // AC: wider U
    var acPts = uCurve(pw, ph, 0.55, 0.50, 0.82, steps);
    parts.push(polyline(acPts, GREEN, 2));
    parts.push(curveLabel(acPts[acPts.length - 1][0] + 4, acPts[acPts.length - 1][1], 'AC', GREEN));

    // MR = AR horizontal line (competitive firm: price = MR = AR)
    var mrY = (1 - priceNorm) * ph;
    var mrPts = [[0, mrY], [pw * 0.92, mrY]];
    parts.push(polyline(mrPts, BLUE, 2.2));
    parts.push(curveLabel(pw * 0.93, mrY, 'AR = MR = P', BLUE));

    // Find MC=MR intersection (x where MC curve y ≈ mrY)
    var mcMrX = _findXAtY(mcPts, mrY, pw * 0.3);  // search in right portion
    var mcMrY = mrY;

    // Find AC at that x to show profit area
    var acAtMcMr = _evalUCurve(pw, ph, 0.55, 0.50, 0.82, mcMrX);

    // Profit area (shaded rect between P and AC at profit-max Q)
    if (priceNorm > 0) {
      var profitH = Math.abs(mcMrY - acAtMcMr);
      var profitTop = Math.min(mcMrY, acAtMcMr);
      if (profitH > 2) {
        parts.push(
          '<rect x="0" y="' + n(profitTop) + '" width="' + n(mcMrX) + '" height="' + n(profitH) + '" fill="' + BLUE_L + '" fill-opacity="0.4" stroke="none"/>'
        );
        parts.push(
          '<text x="' + n(mcMrX / 2) + '" y="' + n(profitTop + profitH / 2 + 4) + '" font-size="11" font-weight="600" fill="' + BLUE + '" text-anchor="middle">Profit</text>'
        );
      }
    }

    // Guide lines to axes + equilibrium dot
    parts.push(guideLines(mcMrX, mcMrY, ph));
    parts.push(eqDot(mcMrX, mcMrY, BLUE, 'Q*'));

    // Label Q* on x-axis
    parts.push('<text x="' + n(mcMrX) + '" y="' + n(ph + 18) + '" font-size="11" fill="' + SLATE + '" text-anchor="middle">Q*</text>');

    return parts;
  }

  /** Binary-search the curve pts array to find x where y ≈ targetY.
   *  Searches only pts with x >= minX. */
  function _findXAtY(pts, targetY, minX) {
    var best = pts[pts.length - 1][0];
    var bestDist = Infinity;
    // find the right leg of the U (increasing y after minimum)
    var minIdx = 0;
    var minYSeen = pts[0][1];
    for (var i = 1; i < pts.length; i++) {
      if (pts[i][1] < minYSeen) { minYSeen = pts[i][1]; minIdx = i; }
    }
    for (var j = minIdx; j < pts.length; j++) {
      if (pts[j][0] < minX) continue;
      var d = Math.abs(pts[j][1] - targetY);
      if (d < bestDist) { bestDist = d; best = pts[j][0]; }
    }
    return best;
  }

  // ═════════════════════════════════════════════════════════════════════
  //  2. MARKET STRUCTURE DIAGRAM
  // ═════════════════════════════════════════════════════════════════════

  /**
   * ECONOS_DIAGRAMS.marketStructureDiagram(cfg)
   *
   * Config options:
   *   structure {string}
   *     'perfect-competition'  (default) — horizontal AR=MR=P, AC, MC
   *     'monopoly'             — downward AR, MR steeper, MC, profit area
   *     'monopolistic'         — like monopoly but with long-run normal profit
   *     'oligopoly'            — kinked demand curve (Sweezy model)
   *     'contestable'          — competitive outcome despite few firms
   *     'natural-monopoly'     — falling AC, MC below AC throughout
   *
   *   showProfit   {boolean}  shade profit/loss area (default true)
   *   showDeadweight {boolean} shade deadweight loss triangle (default false,
   *                            only used by monopoly/monopolistic)
   *   price        {number}  0..1 normalised price (monopoly AR intercept,
   *                          default 0.85)
   *   width        {number}  viewBox width (default 640)
   *   height       {number}  viewBox height (default 360)
   */
  function marketStructureDiagram(cfg) {
    cfg = cfg || {};
    var structure  = cfg.structure  || 'perfect-competition';
    var vbW = cfg.width  || 640;
    var vbH = cfg.height || 360;
    var padL = 52, padT = 36, padR = 60, padB = 44;
    var pw = vbW - padL - padR;
    var ph = vbH - padT - padB;
    var parts = [];

    parts.push(drawAxes(pw, ph, 'Quantity (Q)', 'Price / Cost'));

    switch (structure) {
      case 'monopoly':
        parts = parts.concat(_monopolyDiagram(pw, ph, cfg, false));
        break;
      case 'monopolistic':
        parts = parts.concat(_monopolisticDiagram(pw, ph, cfg));
        break;
      case 'oligopoly':
        parts = parts.concat(_oligopolyKinked(pw, ph, cfg));
        break;
      case 'contestable':
        parts = parts.concat(_contestableDiagram(pw, ph, cfg));
        break;
      case 'natural-monopoly':
        parts = parts.concat(_naturalMonopoly(pw, ph, cfg));
        break;
      default: // perfect-competition
        parts = parts.concat(_perfectCompetition(pw, ph, cfg));
        break;
    }

    // Structure label top-right
    var structureLabels = {
      'perfect-competition': 'Perfect Competition',
      'monopoly':            'Monopoly',
      'monopolistic':        'Monopolistic Competition',
      'oligopoly':           'Oligopoly (Kinked Demand)',
      'contestable':         'Contestable Market',
      'natural-monopoly':    'Natural Monopoly',
    };
    var lbl = structureLabels[structure] || structure;
    parts.push(
      '<rect x="' + n(pw - 170) + '" y="4" width="170" height="22" rx="5" fill="' + BLUE_L + '" fill-opacity="0.85" stroke="' + BLUE_L + '" stroke-width="0.5"/>' +
      '<text x="' + n(pw - 85) + '" y="19" font-size="11" font-weight="700" fill="' + BLUE + '" text-anchor="middle" letter-spacing="0.3">' + esc(lbl) + '</text>'
    );

    return wrapSvg(vbW, vbH, parts);
  }

  /** Perfect competition: horizontal P=MR=AR line, U-shaped AC, MC */
  function _perfectCompetition(pw, ph, cfg) {
    var parts = [];
    var steps = 60;
    var showProfit = cfg.showProfit !== false;

    // Horizontal AR = MR = P line at ~45% height
    var priceNorm = cfg.price != null ? cfg.price : 0.45;
    var mrY = (1 - priceNorm) * ph;
    parts.push(polyline([[0, mrY], [pw * 0.9, mrY]], BLUE, 2.2));
    parts.push(curveLabel(pw * 0.91, mrY, 'P = AR = MR', BLUE));

    // AC
    var acPts = uCurve(pw, ph, 0.55, 0.50, 0.82, steps);
    parts.push(polyline(acPts, GREEN, 2));
    parts.push(curveLabel(acPts[acPts.length - 1][0] + 4, acPts[acPts.length - 1][1], 'AC', GREEN));

    // MC
    var mcPts = uCurve(pw, ph, 0.35, 0.18, 0.78, steps);
    parts.push(polyline(mcPts, AMBER, 2.2));
    parts.push(curveLabel(n(pw * 0.6), n(ph * 0.32), 'MC', AMBER));

    // MC = MR intersection
    var profitQ = _findXAtY(mcPts, mrY, pw * 0.3);
    var acAtQ   = _evalUCurve(pw, ph, 0.55, 0.50, 0.82, profitQ);

    // Profit shading
    if (showProfit) {
      var profitTop = Math.min(mrY, acAtQ);
      var profitBot = Math.max(mrY, acAtQ);
      var profH = profitBot - profitTop;
      if (profH > 2) {
        var profColFill = mrY < acAtQ ? ROSE_L : BLUE_L;
        var profColText = mrY < acAtQ ? ROSE    : BLUE;
        var profLabel   = mrY < acAtQ ? 'Loss'  : 'Profit';
        parts.push('<rect x="0" y="' + n(profitTop) + '" width="' + n(profitQ) + '" height="' + n(profH) + '" fill="' + profColFill + '" fill-opacity="0.45" stroke="none"/>');
        parts.push('<text x="' + n(profitQ / 2) + '" y="' + n(profitTop + profH / 2 + 4) + '" font-size="11" font-weight="600" fill="' + profColText + '" text-anchor="middle">' + esc(profLabel) + '</text>');
      }
    }

    parts.push(guideLines(profitQ, mrY, ph));
    parts.push(eqDot(profitQ, mrY, BLUE, 'E'));

    return parts;
  }

  /** Monopoly: downward D/AR, steeper MR, U-shaped AC, MC, profit area */
  function _monopolyDiagram(pw, ph, cfg, longRunNormalProfit) {
    var parts = [];
    var steps = 60;
    var showProfit = cfg.showProfit !== false;
    var showDWL    = cfg.showDeadweight === true;

    // AR (demand): downward sloping
    var arPts = straightLine(pw, ph, 0.05, 0.92, 0.92, 0.08, steps);
    parts.push(polyline(arPts, BLUE, 2));
    parts.push(curveLabel(arPts[arPts.length - 1][0] - 4, arPts[arPts.length - 1][1] + 4, 'D (AR)', BLUE, 'end'));

    // MR: starts at same y-intercept, twice the slope
    var mrPts = straightLine(pw, ph, 0.05, 0.92, 0.485, 0.08, steps);
    parts.push(polyline(mrPts, PURPLE, 2));
    parts.push(curveLabel(mrPts[mrPts.length - 1][0] + 4, mrPts[mrPts.length - 1][1], 'MR', PURPLE));

    // AC
    var acPts;
    if (longRunNormalProfit) {
      // Shift AC up so it is tangent to AR at the profit-max Q
      acPts = uCurve(pw, ph, 0.42, 0.60, 0.88, steps);
    } else {
      acPts = uCurve(pw, ph, 0.55, 0.42, 0.82, steps);
    }
    parts.push(polyline(acPts, GREEN, 2));
    parts.push(curveLabel(acPts[acPts.length - 1][0] + 4, acPts[acPts.length - 1][1], 'AC', GREEN));

    // MC: U-shaped, intersects AC at its minimum
    var mcPts = uCurve(pw, ph, 0.35, 0.18, 0.78, steps);
    parts.push(polyline(mcPts, AMBER, 2.2));
    parts.push(curveLabel(n(pw * 0.55), n(ph * 0.25), 'MC', AMBER));

    // Find MC = MR intersection
    // We need MC y ≈ MR y at the same x
    // MR slope: from (0.05*pw, (1-0.92)*ph) to (0.485*pw, (1-0.08)*ph)
    var mrX0 = 0.05 * pw, mrY0 = (1 - 0.92) * ph;
    var mrX1 = 0.485 * pw, mrY1 = (1 - 0.08) * ph;
    var mrSlope = (mrY1 - mrY0) / (mrX1 - mrX0);

    // Find the x where MC curve y ≈ line y (iterate)
    var profQ = pw * 0.30;
    var best = Infinity;
    for (var i = 0; i < mcPts.length; i++) {
      var px = mcPts[i][0];
      var py = mcPts[i][1];
      var lineY = mrY0 + mrSlope * (px - mrX0);
      if (px < pw * 0.15) continue;  // left of MR x0
      var diff = Math.abs(py - lineY);
      if (diff < best) { best = diff; profQ = px; }
    }

    // MC=MR price (read off AR at that Q)
    var arSlope = ((1 - 0.08) * ph - (1 - 0.92) * ph) / ((0.92 - 0.05) * pw);
    var arY0 = (1 - 0.92) * ph;
    var arX0 = 0.05 * pw;
    var mcMrPriceY = arY0 + arSlope * (profQ - arX0);
    var mcMrCostY  = _evalUCurve(pw, ph, longRunNormalProfit ? 0.42 : 0.55,
                                           longRunNormalProfit ? 0.60 : 0.42,
                                           longRunNormalProfit ? 0.88 : 0.82,
                                           profQ);

    // Profit / normal profit shading
    if (showProfit && !longRunNormalProfit) {
      var profTop = Math.min(mcMrPriceY, mcMrCostY);
      var profBot = Math.max(mcMrPriceY, mcMrCostY);
      var profH = profBot - profTop;
      if (profH > 2) {
        parts.push('<rect x="0" y="' + n(profTop) + '" width="' + n(profQ) + '" height="' + n(profH) + '" fill="' + PURPLE_L + '" fill-opacity="0.5" stroke="none"/>');
        parts.push('<text x="' + n(profQ / 2) + '" y="' + n(profTop + profH / 2 + 4) + '" font-size="11" font-weight="600" fill="' + PURPLE + '" text-anchor="middle">Supernormal Profit</text>');
      }
    }

    // DWL triangle (between monopoly Q and competitive Q)
    if (showDWL) {
      // Competitive equilibrium: MC = AR
      var compQ = _findARMCIntersect(pw, ph, mcPts, arX0, arY0, arSlope);
      var compY = arY0 + arSlope * (compQ - arX0);
      // DWL triangle: vertices (profQ, mcMrPriceY), (compQ, compY), (profQ, compY)
      var tri = [
        [profQ, mcMrPriceY],
        [compQ, compY],
        [profQ, compY],
      ];
      var triD = tri.map(function (p, i) { return (i === 0 ? 'M' : 'L') + n(p[0]) + ',' + n(p[1]); }).join(' ') + 'Z';
      parts.push('<path d="' + triD + '" fill="' + ROSE_L + '" fill-opacity="0.5" stroke="' + ROSE + '" stroke-width="1"/>');
      parts.push('<text x="' + n((profQ + compQ) / 2) + '" y="' + n((mcMrPriceY + compY) / 2 + 4) + '" font-size="10" fill="' + ROSE + '" text-anchor="middle">DWL</text>');
    }

    // Guide lines and dot at profit-max point
    parts.push(guideLines(profQ, mcMrPriceY, ph));
    parts.push(eqDot(profQ, mcMrPriceY, PURPLE, 'Pm'));

    // Q label on x axis
    parts.push('<text x="' + n(profQ) + '" y="' + n(ph + 18) + '" font-size="11" fill="' + SLATE + '" text-anchor="middle">Qm</text>');

    return parts;
  }

  /** Find where MC intersects the AR line (approximate via pts scan) */
  function _findARMCIntersect(pw, ph, mcPts, arX0, arY0, arSlope) {
    var best = mcPts[mcPts.length - 1][0];
    var bestDiff = Infinity;
    for (var i = 0; i < mcPts.length; i++) {
      var px = mcPts[i][0];
      var py = mcPts[i][1];
      var lineY = arY0 + arSlope * (px - arX0);
      if (lineY < 0 || lineY > ph) continue;
      var diff = Math.abs(py - lineY);
      if (diff < bestDiff && px > pw * 0.4) { bestDiff = diff; best = px; }
    }
    return best;
  }

  /** Monopolistic competition: SR like monopoly, LR tangent (normal profit) */
  function _monopolisticDiagram(pw, ph, cfg) {
    // Use the long-run normal-profit variant of the monopoly diagram
    return _monopolyDiagram(pw, ph, cfg, true);
  }

  /** Oligopoly kinked demand model (Sweezy) */
  function _oligopolyKinked(pw, ph, cfg) {
    var parts = [];
    var steps = 40;

    // Kink point
    var kinkX = pw * 0.45;
    var kinkY = ph * 0.38;

    // Upper segment of D: relatively elastic (flatter), from top-left to kink
    var upperD = straightLine(pw, ph, 0.05, 0.85, 0.45, 0.62, steps);
    parts.push(polyline(upperD, BLUE, 2));

    // Lower segment of D: relatively inelastic (steeper), from kink to bottom-right
    var lowerD = straightLine(pw, ph, 0.45, 0.62, 0.88, 0.10, steps);
    parts.push(polyline(lowerD, BLUE, 2.5));

    // D label
    parts.push(curveLabel(lowerD[lowerD.length - 1][0] - 4, lowerD[lowerD.length - 1][1] + 2, 'D (AR)', BLUE, 'end'));

    // MR: gap at kink — upper MR segment
    var upperMR = straightLine(pw, ph, 0.05, 0.70, 0.45, 0.24, steps);
    parts.push(polyline(upperMR, PURPLE, 1.8));

    // MR: lower MR segment (more inelastic, resumes below gap)
    var lowerMR = straightLine(pw, ph, 0.45, 0.10, 0.88, -0.20, steps);
    // clip lowerMR to visible area
    var clippedLowerMR = lowerMR.filter(function (p) { return p[1] >= 0 && p[1] <= ph; });
    if (clippedLowerMR.length > 1) {
      parts.push(polyline(clippedLowerMR, PURPLE, 1.8));
    }
    parts.push(curveLabel(upperMR[3][0] + 4, upperMR[3][1] - 6, 'MR', PURPLE));

    // Dashed vertical line in the MR gap
    parts.push('<line x1="' + n(kinkX) + '" y1="' + n(kinkY * 0.55) + '" x2="' + n(kinkX) + '" y2="' + n(kinkY * 0.28 + ph * 0.20) + '" stroke="' + PURPLE + '" stroke-width="1.5" stroke-dasharray="3 3" opacity="0.7"/>');

    // AC
    var acPts = uCurve(pw, ph, 0.55, 0.50, 0.82, steps);
    parts.push(polyline(acPts, GREEN, 2));
    parts.push(curveLabel(acPts[acPts.length - 1][0] + 4, acPts[acPts.length - 1][1], 'AC', GREEN));

    // MC (vertical range passes through MR gap at kink Q)
    var mcPts = uCurve(pw, ph, 0.32, 0.15, 0.75, steps);
    parts.push(polyline(mcPts, AMBER, 2.2));
    parts.push(curveLabel(n(pw * 0.54), n(ph * 0.28), 'MC', AMBER));

    // Kink dot + horizontal price line
    parts.push('<line x1="0" y1="' + n(kinkY) + '" x2="' + n(kinkX) + '" y2="' + n(kinkY) + '" stroke="' + GUIDE + '" stroke-width="1" stroke-dasharray="3 3"/>');
    parts.push('<line x1="' + n(kinkX) + '" y1="' + n(kinkY) + '" x2="' + n(kinkX) + '" y2="' + n(ph) + '" stroke="' + GUIDE + '" stroke-width="1" stroke-dasharray="3 3"/>');
    parts.push(eqDot(kinkX, kinkY, BLUE, 'Pk'));
    parts.push('<text x="' + n(kinkX) + '" y="' + n(ph + 18) + '" font-size="11" fill="' + SLATE + '" text-anchor="middle">Qk</text>');
    parts.push('<text x="-4" y="' + n(kinkY + 4) + '" font-size="11" fill="' + SLATE + '" text-anchor="end">Pk</text>');

    return parts;
  }

  /** Contestable market: low barriers → competitive outcome */
  function _contestableDiagram(pw, ph, cfg) {
    var parts = [];
    var steps = 60;

    // D/AR downward sloping
    var arPts = straightLine(pw, ph, 0.05, 0.92, 0.92, 0.08, steps);
    parts.push(polyline(arPts, BLUE, 2));
    parts.push(curveLabel(arPts[arPts.length - 1][0] - 4, arPts[arPts.length - 1][1] + 4, 'D (AR)', BLUE, 'end'));

    // MR
    var mrPts = straightLine(pw, ph, 0.05, 0.92, 0.485, 0.08, steps);
    parts.push(polyline(mrPts, PURPLE, 1.5, false, 0.6));
    parts.push(curveLabel(mrPts[mrPts.length - 1][0] + 4, mrPts[mrPts.length - 1][1], 'MR', PURPLE));

    // AC
    var acPts = uCurve(pw, ph, 0.55, 0.42, 0.82, steps);
    parts.push(polyline(acPts, GREEN, 2));
    parts.push(curveLabel(acPts[acPts.length - 1][0] + 4, acPts[acPts.length - 1][1], 'AC', GREEN));

    // MC
    var mcPts = uCurve(pw, ph, 0.35, 0.18, 0.78, steps);
    parts.push(polyline(mcPts, AMBER, 2.2));
    parts.push(curveLabel(n(pw * 0.58), n(ph * 0.25), 'MC', AMBER));

    // Contestable equilibrium: P = AC (normal profit, not supernormal)
    // Find where AC intersects AR
    var arX0 = 0.05 * pw, arY0 = (1 - 0.92) * ph;
    var arX1 = 0.92 * pw, arY1 = (1 - 0.08) * ph;
    var arSlope = (arY1 - arY0) / (arX1 - arX0);
    var contQ = pw * 0.0;
    var bestDiff2 = Infinity;
    for (var i = 0; i < acPts.length; i++) {
      var px = acPts[i][0];
      var py = acPts[i][1];
      var lineY = arY0 + arSlope * (px - arX0);
      var diff2 = Math.abs(py - lineY);
      if (diff2 < bestDiff2 && px > pw * 0.4) { bestDiff2 = diff2; contQ = px; }
    }
    var contY = arY0 + arSlope * (contQ - arX0);

    parts.push(guideLines(contQ, contY, ph));
    parts.push(eqDot(contQ, contY, GREEN, 'Pc'));

    // Annotation: threat of entry keeps P = AC
    parts.push(
      '<rect x="' + n(pw * 0.02) + '" y="' + n(ph * 0.05) + '" width="160" height="36" rx="6" fill="' + GREEN_L + '" fill-opacity="0.9" stroke="' + GREEN + '" stroke-width="0.8"/>' +
      '<text x="' + n(pw * 0.02 + 8) + '" y="' + n(ph * 0.05 + 14) + '" font-size="11" font-weight="700" fill="' + GREEN + '">Contestable market:</text>' +
      '<text x="' + n(pw * 0.02 + 8) + '" y="' + n(ph * 0.05 + 28) + '" font-size="10" fill="' + GREEN + '">Threat of entry → P = AC</text>'
    );

    return parts;
  }

  /** Natural monopoly: constantly falling AC and MC throughout */
  function _naturalMonopoly(pw, ph, cfg) {
    var parts = [];
    var steps = 60;
    var showProfit = cfg.showProfit !== false;

    // AC: constantly falling — hyperbola shape
    var acPts = [];
    for (var i = 1; i <= steps; i++) {
      var t = i / steps;
      var rawY = 0.10 + 0.70 * Math.pow(1 - t, 0.6);  // declining convex
      acPts.push([t * pw, (1 - rawY) * ph]);
    }
    parts.push(polyline(acPts, GREEN, 2.2));
    parts.push(curveLabel(acPts[acPts.length - 1][0] + 4, acPts[acPts.length - 1][1] - 2, 'AC', GREEN));

    // MC: below AC, also falling (but less steep)
    var mcPts = [];
    for (var j = 1; j <= steps; j++) {
      var tj = j / steps;
      var mcY = 0.04 + 0.40 * Math.pow(1 - tj, 0.5);  // declining, below AC
      mcPts.push([tj * pw, (1 - mcY) * ph]);
    }
    parts.push(polyline(mcPts, AMBER, 2));
    parts.push(curveLabel(mcPts[mcPts.length - 1][0] + 4, mcPts[mcPts.length - 1][1] + 2, 'MC', AMBER));

    // D/AR downward sloping
    var arPts = straightLine(pw, ph, 0.05, 0.88, 0.90, 0.10, steps);
    parts.push(polyline(arPts, BLUE, 2));
    parts.push(curveLabel(arPts[arPts.length - 1][0] - 4, arPts[arPts.length - 1][1] + 4, 'D (AR)', BLUE, 'end'));

    // MR
    var mrPts = straightLine(pw, ph, 0.05, 0.88, 0.48, 0.10, steps);
    parts.push(polyline(mrPts, PURPLE, 1.8));
    parts.push(curveLabel(mrPts[mrPts.length - 1][0] + 4, mrPts[mrPts.length - 1][1], 'MR', PURPLE));

    // Unregulated profit-max: MC = MR
    var arX0 = 0.05 * pw, arY0 = (1 - 0.88) * ph;
    var arX1 = 0.90 * pw, arY1 = (1 - 0.10) * ph;
    var arSlope = (arY1 - arY0) / (arX1 - arX0);
    var mrX0 = 0.05 * pw, mrY0 = (1 - 0.88) * ph;
    var mrX1 = 0.48 * pw, mrY1 = (1 - 0.10) * ph;
    var mrSlope2 = (mrY1 - mrY0) / (mrX1 - mrX0);

    // MC=MR: find where MC pts y ≈ MR line y
    var nmQ = pw * 0.30;
    var best3 = Infinity;
    for (var k2 = 0; k2 < mcPts.length; k2++) {
      var mpx = mcPts[k2][0];
      var mpy = mcPts[k2][1];
      var mrLineY = mrY0 + mrSlope2 * (mpx - mrX0);
      if (mpx < pw * 0.1) continue;
      var d3 = Math.abs(mpy - mrLineY);
      if (d3 < best3) { best3 = d3; nmQ = mpx; }
    }
    var nmPriceY = arY0 + arSlope * (nmQ - arX0);
    var nmCostY  = acPts[Math.round((nmQ / pw) * steps - 1)] ? acPts[Math.round((nmQ / pw) * steps - 1)][1] : nmPriceY;

    // Regulate: P = AC (fairness) — where AC intersects AR
    var regQ = pw * 0.0;
    var best4 = Infinity;
    for (var m = 0; m < acPts.length; m++) {
      var apx = acPts[m][0];
      var apy = acPts[m][1];
      var arLineY = arY0 + arSlope * (apx - arX0);
      var d4 = Math.abs(apy - arLineY);
      if (d4 < best4 && apx > pw * 0.3) { best4 = d4; regQ = apx; }
    }
    var regY = arY0 + arSlope * (regQ - arX0);

    if (showProfit) {
      var profTop = Math.min(nmPriceY, nmCostY);
      var profBot = Math.max(nmPriceY, nmCostY);
      var profH = profBot - profTop;
      if (profH > 2) {
        parts.push('<rect x="0" y="' + n(profTop) + '" width="' + n(nmQ) + '" height="' + n(profH) + '" fill="' + PURPLE_L + '" fill-opacity="0.45" stroke="none"/>');
        parts.push('<text x="' + n(nmQ / 2) + '" y="' + n(profTop + profH / 2 + 4) + '" font-size="10" fill="' + PURPLE + '" text-anchor="middle">Supernormal Profit</text>');
      }
    }

    // Unregulated equilibrium
    parts.push(guideLines(nmQ, nmPriceY, ph));
    parts.push(eqDot(nmQ, nmPriceY, PURPLE, 'Pm'));
    parts.push('<text x="' + n(nmQ) + '" y="' + n(ph + 18) + '" font-size="10" fill="' + SLATE + '" text-anchor="middle">Qm</text>');

    // Regulated equilibrium (P=AC)
    parts.push(guideLines(regQ, regY, ph));
    parts.push(eqDot(regQ, regY, GREEN, 'Pr'));
    parts.push('<text x="' + n(regQ) + '" y="' + n(ph + 18) + '" font-size="10" fill="' + SLATE + '" text-anchor="middle">Qr</text>');

    // Annotation
    parts.push(
      '<rect x="' + n(pw * 0.02) + '" y="' + n(ph * 0.06) + '" width="150" height="36" rx="5" fill="' + PURPLE_L + '" fill-opacity="0.9" stroke="' + PURPLE_L + '" stroke-width="0.5"/>' +
      '<text x="' + n(pw * 0.02 + 8) + '" y="' + n(ph * 0.06 + 14) + '" font-size="10" font-weight="700" fill="' + PURPLE + '">Natural Monopoly:</text>' +
      '<text x="' + n(pw * 0.02 + 8) + '" y="' + n(ph * 0.06 + 28) + '" font-size="10" fill="' + PURPLE + '">AC falls across all output</text>'
    );

    return parts;
  }

  // ═════════════════════════════════════════════════════════════════════
  //  3. LABOUR MARKET DIAGRAM
  // ═════════════════════════════════════════════════════════════════════

  /**
   * ECONOS_DIAGRAMS.labourMarketDiagram(cfg)
   *
   * Config options:
   *   variant {string}
   *     'competitive'         (default) — simple DL/SL intersection
   *     'monopsony'           — upward-sloping SL, MCL above SL; monopsonist
   *                            hires where MCL=MRP, pays off SL
   *     'backward-bending-supply' — supply bends backward at high wages
   *     'trade-union'         — union sets wage floor above competitive
   *     'min-wage'            — government minimum wage above competitive
   *
   *   showMRP    {boolean}  show marginal revenue product of labour curve
   *                         (default true in monopsony, otherwise false)
   *   unionWage  {number}   0..1 normalised wage for trade-union/min-wage variant
   *                         (default 0.65)
   *   width      {number}   viewBox width (default 580)
   *   height     {number}   viewBox height (default 320)
   */
  function labourMarketDiagram(cfg) {
    cfg = cfg || {};
    var variant = cfg.variant || 'competitive';
    var vbW = cfg.width  || 580;
    var vbH = cfg.height || 320;
    var padL = 52, padT = 36, padR = 60, padB = 44;
    var pw = vbW - padL - padR;
    var ph = vbH - padT - padB;

    var parts = [];
    parts.push(drawAxes(pw, ph, 'Quantity of Labour (L)', 'Wage Rate (W)'));

    switch (variant) {
      case 'monopsony':
        parts = parts.concat(_monopsonyLabour(pw, ph, cfg));
        break;
      case 'backward-bending-supply':
        parts = parts.concat(_backwardBendingSupply(pw, ph, cfg));
        break;
      case 'trade-union':
        parts = parts.concat(_tradeUnionLabour(pw, ph, cfg, 'Trade Union'));
        break;
      case 'min-wage':
        parts = parts.concat(_tradeUnionLabour(pw, ph, cfg, 'Minimum Wage'));
        break;
      default: // competitive
        parts = parts.concat(_competitiveLabour(pw, ph, cfg));
        break;
    }

    // Variant label
    var variantLabels = {
      'competitive':            'Competitive Labour Market',
      'monopsony':              'Monopsony',
      'backward-bending-supply':'Backward-Bending Supply',
      'trade-union':            'Trade Union Wage Floor',
      'min-wage':               'National Minimum Wage',
    };
    var vlbl = variantLabels[variant] || variant;
    parts.push(
      '<rect x="' + n(pw - 168) + '" y="4" width="168" height="22" rx="5" fill="' + GREEN_L + '" fill-opacity="0.9" stroke="' + GREEN_L + '" stroke-width="0.5"/>' +
      '<text x="' + n(pw - 84) + '" y="19" font-size="11" font-weight="700" fill="' + GREEN + '" text-anchor="middle" letter-spacing="0.3">' + esc(vlbl) + '</text>'
    );

    return wrapSvg(vbW, vbH, parts);
  }

  /** Competitive labour market: DL downward, SL upward, intersection */
  function _competitiveLabour(pw, ph, cfg) {
    var parts = [];
    var steps = 40;

    // SL: upward sloping
    var slPts = straightLine(pw, ph, 0.05, 0.10, 0.92, 0.88, steps);
    parts.push(polyline(slPts, GREEN, 2.2));
    parts.push(curveLabel(slPts[slPts.length - 1][0] + 4, slPts[slPts.length - 1][1], 'SL', GREEN));

    // DL: downward sloping
    var dlPts = straightLine(pw, ph, 0.05, 0.88, 0.92, 0.10, steps);
    parts.push(polyline(dlPts, BLUE, 2.2));
    parts.push(curveLabel(dlPts[dlPts.length - 1][0] - 4, dlPts[dlPts.length - 1][1] + 4, 'DL (MRP)', BLUE, 'end'));

    // Intersection
    var eqX = pw * 0.485;
    var eqY = ph * 0.50;

    parts.push(guideLines(eqX, eqY, ph));
    parts.push(eqDot(eqX, eqY, BLUE, 'E'));
    parts.push('<text x="' + n(eqX) + '" y="' + n(ph + 18) + '" font-size="11" fill="' + SLATE + '" text-anchor="middle">L*</text>');
    parts.push('<text x="-4" y="' + n(eqY + 4) + '" font-size="11" fill="' + SLATE + '" text-anchor="end">W*</text>');

    return parts;
  }

  /** Monopsony: SL upward, MCL above SL (steeper), MRP=DL downward */
  function _monopsonyLabour(pw, ph, cfg) {
    var parts = [];
    var steps = 40;

    // SL: upward sloping (the AC of labour)
    var slPts = straightLine(pw, ph, 0.05, 0.08, 0.88, 0.80, steps);
    parts.push(polyline(slPts, GREEN, 2));
    parts.push(curveLabel(slPts[slPts.length - 1][0] + 4, slPts[slPts.length - 1][1], 'SL (ACL)', GREEN));

    // MCL: steeper than SL (starts same origin, rises faster)
    var mclPts = straightLine(pw, ph, 0.05, 0.08, 0.50, 0.88, steps);
    parts.push(polyline(mclPts, AMBER, 2.2));
    parts.push(curveLabel(mclPts[mclPts.length - 1][0] + 4, mclPts[mclPts.length - 1][1], 'MCL', AMBER));

    // MRP = DL: downward sloping demand for labour
    var mrpPts = straightLine(pw, ph, 0.08, 0.92, 0.90, 0.10, steps);
    parts.push(polyline(mrpPts, BLUE, 2));
    parts.push(curveLabel(mrpPts[mrpPts.length - 1][0] - 4, mrpPts[mrpPts.length - 1][1] + 4, 'MRP (DL)', BLUE, 'end'));

    // Monopsony equilibrium: MCL = MRP
    // MCL line: y0=(1-0.08)*ph, y1=(1-0.88)*ph over x0=0.05*pw to x1=0.50*pw
    var mclX0 = 0.05 * pw, mclY0 = (1 - 0.08) * ph;
    var mclX1 = 0.50 * pw, mclY1 = (1 - 0.88) * ph;
    var mclSlope = (mclY1 - mclY0) / (mclX1 - mclX0);

    var mrpX0 = 0.08 * pw, mrpY0 = (1 - 0.92) * ph;
    var mrpX1 = 0.90 * pw, mrpY1 = (1 - 0.10) * ph;
    var mrpSlope = (mrpY1 - mrpY0) / (mrpX1 - mrpX0);

    // Solve MCL = MRP: mclY0 + mclSlope*(x-mclX0) = mrpY0 + mrpSlope*(x-mrpX0)
    var monQ = (mrpY0 - mrpSlope * mrpX0 - (mclY0 - mclSlope * mclX0)) / (mclSlope - mrpSlope);
    var monMCLY = mclY0 + mclSlope * (monQ - mclX0);

    // Wage paid: read off SL at monQ (SL: from (0.05,0.92) to (0.88,0.20) in y-flipped)
    var slX0 = 0.05 * pw, slY0 = (1 - 0.08) * ph;
    var slX1 = 0.88 * pw, slY1 = (1 - 0.80) * ph;
    var slSlope = (slY1 - slY0) / (slX1 - slX0);
    var monWageY = slY0 + slSlope * (monQ - slX0);

    // Competitive reference: DL = SL
    var compQ = (mrpY0 - mrpSlope * mrpX0 - (slY0 - slSlope * slX0)) / (slSlope - mrpSlope);
    var compWageY = slY0 + slSlope * (compQ - slX0);

    // Monopsonistic exploitation shading
    parts.push('<rect x="0" y="' + n(monWageY) + '" width="' + n(monQ) + '" height="' + n(monMCLY - monWageY) + '" fill="' + ROSE_L + '" fill-opacity="0.45" stroke="none"/>');
    parts.push('<text x="' + n(monQ / 2) + '" y="' + n(monWageY + (monMCLY - monWageY) / 2 + 4) + '" font-size="10" fill="' + ROSE + '" text-anchor="middle">Exploitation</text>');

    // Competitive equilibrium (dashed)
    parts.push('<line x1="' + n(compQ) + '" y1="0" x2="' + n(compQ) + '" y2="' + n(ph) + '" stroke="' + GUIDE + '" stroke-width="1" stroke-dasharray="3 3" opacity="0.7"/>');
    parts.push(eqDot(compQ, compWageY, GREEN, 'Ec', 'start'));

    // Monopsony wage dot
    parts.push(guideLines(monQ, monWageY, ph));
    parts.push(eqDot(monQ, monWageY, ROSE, 'Wm'));
    parts.push('<text x="' + n(monQ) + '" y="' + n(ph + 18) + '" font-size="11" fill="' + SLATE + '" text-anchor="middle">Lm</text>');
    parts.push('<text x="-4" y="' + n(monWageY + 4) + '" font-size="11" fill="' + ROSE + '" text-anchor="end">Wm</text>');

    // Competitive wage label
    parts.push('<text x="-4" y="' + n(compWageY + 4) + '" font-size="11" fill="' + GREEN + '" text-anchor="end">Wc</text>');

    return parts;
  }

  /** Backward-bending supply of labour */
  function _backwardBendingSupply(pw, ph, cfg) {
    var parts = [];
    var steps = 80;

    // Forward portion: upward sloping from (0.05, 0.88) to bend point (0.55, 0.30)
    // Backward portion: bends back left as wage rises further
    var bendX = 0.55 * pw;
    var bendY = (1 - 0.30) * ph;

    var bbPts = [];
    for (var i = 0; i <= steps; i++) {
      var t = i / steps;
      var x, y;
      if (t <= 0.6) {
        // Forward rising portion
        var s = t / 0.6;
        x = (0.05 + s * (0.55 - 0.05)) * pw;
        y = (1 - (0.10 + s * (0.70 - 0.10))) * ph;
      } else {
        // Backward bending — x decreases as y rises
        var s2 = (t - 0.6) / 0.4;
        x = (0.55 - s2 * 0.25) * pw;
        y = (1 - (0.70 + s2 * 0.20)) * ph;
      }
      bbPts.push([x, y]);
    }
    parts.push(polyline(bbPts, GREEN, 2.5));

    // Label at top of backward section
    var topPt = bbPts[bbPts.length - 1];
    parts.push(curveLabel(topPt[0] + 6, topPt[1], 'SL', GREEN));

    // DL: downward sloping
    var dlPts = straightLine(pw, ph, 0.05, 0.85, 0.88, 0.12, steps);
    parts.push(polyline(dlPts, BLUE, 2.2));
    parts.push(curveLabel(dlPts[dlPts.length - 1][0] - 4, dlPts[dlPts.length - 1][1] + 4, 'DL', BLUE, 'end'));

    // Forward equilibrium (lower intersection)
    var eqX = pw * 0.38;
    var eqY = ph * 0.55;
    parts.push(guideLines(eqX, eqY, ph));
    parts.push(eqDot(eqX, eqY, BLUE, 'E₁'));
    parts.push('<text x="' + n(eqX) + '" y="' + n(ph + 18) + '" font-size="11" fill="' + SLATE + '" text-anchor="middle">L₁</text>');

    // Bend label
    parts.push(
      '<rect x="' + n(bendX + 8) + '" y="' + n(bendY - 16) + '" width="120" height="20" rx="4" fill="' + AMBER_L + '" fill-opacity="0.9"/>' +
      '<text x="' + n(bendX + 14) + '" y="' + n(bendY - 2) + '" font-size="10" font-weight="600" fill="' + AMBER + '">Backward-bending</text>'
    );
    parts.push('<line x1="' + n(bendX) + '" y1="' + n(bendY) + '" x2="' + n(bendX + 8) + '" y2="' + n(bendY - 6) + '" stroke="' + AMBER + '" stroke-width="1"/>');

    // Income effect > substitution effect annotation
    parts.push(
      '<text x="' + n(pw * 0.58) + '" y="' + n(ph * 0.15) + '" font-size="10" fill="' + AMBER + '" font-weight="600">Income effect</text>' +
      '<text x="' + n(pw * 0.58) + '" y="' + n(ph * 0.15 + 13) + '" font-size="10" fill="' + AMBER + '">&gt; Substitution effect</text>'
    );

    return parts;
  }

  /** Trade union / minimum wage floor diagram */
  function _tradeUnionLabour(pw, ph, cfg, labelText) {
    var parts = [];
    var steps = 40;
    var unionWageNorm = cfg.unionWage != null ? cfg.unionWage : 0.65;

    // SL: upward sloping
    var slPts = straightLine(pw, ph, 0.05, 0.10, 0.92, 0.88, steps);
    parts.push(polyline(slPts, GREEN, 2));
    parts.push(curveLabel(slPts[slPts.length - 1][0] + 4, slPts[slPts.length - 1][1], 'SL', GREEN));

    // DL: downward sloping
    var dlPts = straightLine(pw, ph, 0.05, 0.88, 0.92, 0.10, steps);
    parts.push(polyline(dlPts, BLUE, 2));
    parts.push(curveLabel(dlPts[dlPts.length - 1][0] - 4, dlPts[dlPts.length - 1][1] + 4, 'DL (MRP)', BLUE, 'end'));

    // Competitive equilibrium
    var compX = pw * 0.485;
    var compY = ph * 0.50;
    // (dashed, behind floor)
    parts.push(eqDot(compX, compY, SLATE, 'E*', 'start'));

    // Wage floor (union or min wage)
    var floorY = (1 - unionWageNorm) * ph;
    var isAboveComp = floorY < compY;

    if (isAboveComp) {
      // Horizontal wage floor line
      parts.push('<line x1="0" y1="' + n(floorY) + '" x2="' + n(pw * 0.90) + '" y2="' + n(floorY) + '" stroke="' + ROSE + '" stroke-width="2" stroke-dasharray="none"/>');
      parts.push(curveLabel(pw * 0.91, floorY, labelText, ROSE));

      // Employment at DL given this wage (where DL curve reaches floorY)
      var dlX0 = 0.05 * pw, dlY0 = (1 - 0.88) * ph;
      var dlX1 = 0.92 * pw, dlY1 = (1 - 0.10) * ph;
      var dlSlope = (dlY1 - dlY0) / (dlX1 - dlX0);
      var empQ = dlX0 + (floorY - dlY0) / dlSlope;

      // Supply at this wage (SL)
      var slX0 = 0.05 * pw, slY0 = (1 - 0.10) * ph;
      var slX1 = 0.92 * pw, slY1 = (1 - 0.88) * ph;
      var slSlope = (slY1 - slY0) / (slX1 - slX0);
      var supplyQ = slX0 + (floorY - slY0) / slSlope;

      // Unemployment shading (supply > demand at this wage)
      var unempW = supplyQ - empQ;
      if (unempW > 2) {
        parts.push('<rect x="' + n(empQ) + '" y="' + n(floorY - 8) + '" width="' + n(unempW) + '" height="16" rx="3" fill="' + ROSE_L + '" fill-opacity="0.7" stroke="none"/>');
        parts.push('<text x="' + n(empQ + unempW / 2) + '" y="' + n(floorY + 4) + '" font-size="10" fill="' + ROSE + '" text-anchor="middle">Unemployment</text>');
        // Employment dot
        parts.push(guideLines(empQ, floorY, ph));
        parts.push(eqDot(empQ, floorY, ROSE, 'Ld'));
        parts.push('<text x="' + n(empQ) + '" y="' + n(ph + 18) + '" font-size="11" fill="' + SLATE + '" text-anchor="middle">Ld</text>');
        // Supply dot
        parts.push(eqDot(supplyQ, floorY, AMBER, 'Ls'));
        parts.push('<text x="' + n(supplyQ) + '" y="' + n(ph + 18) + '" font-size="11" fill="' + SLATE + '" text-anchor="middle">Ls</text>');
      }

      // Wage label on Y axis
      parts.push('<text x="-4" y="' + n(floorY + 4) + '" font-size="11" fill="' + ROSE + '" font-weight="700" text-anchor="end">Wf</text>');
      parts.push('<text x="-4" y="' + n(compY + 4) + '" font-size="11" fill="' + SLATE + '" text-anchor="end">W*</text>');
    } else {
      // Floor below competitive wage — no effect annotation
      parts.push('<line x1="0" y1="' + n(floorY) + '" x2="' + n(pw * 0.90) + '" y2="' + n(floorY) + '" stroke="' + GUIDE + '" stroke-width="1.5" stroke-dasharray="4 3"/>');
      parts.push(curveLabel(pw * 0.91, floorY, labelText + ' (no effect)', SLATE));
    }

    return parts;
  }

  // ── REGISTRATION ──────────────────────────────────────────────────────

  var ECONOS_DIAGRAMS = global.ECONOS_DIAGRAMS || {};
  ECONOS_DIAGRAMS.costCurvesDiagram    = costCurvesDiagram;
  ECONOS_DIAGRAMS.marketStructureDiagram = marketStructureDiagram;
  ECONOS_DIAGRAMS.labourMarketDiagram  = labourMarketDiagram;
  global.ECONOS_DIAGRAMS = ECONOS_DIAGRAMS;

}(typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : this));
