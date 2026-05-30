/**
 * AD/AS Diagram Generator — Econos
 * =================================
 * Exposes window.ECONOS_DIAGRAMS.adasDiagram(cfg) which returns a complete
 * <svg> string for any mode in the AD/AS family.
 *
 * Depends on window.EconSvg (econ-svg.js) being loaded first.
 *
 * ── MODES ────────────────────────────────────────────────────────────────
 *   demand-pull        AD shifts right  → higher P, higher Y
 *   cost-push          SRAS shifts left → higher P, lower Y
 *   monetary           AD shifts right (monetary expansion, same shape as demand-pull)
 *   recession          AD shifts left   → lower P, lower Y
 *   ad-shift-left      Generic AD left shift
 *   ad-shift-right     Generic AD right shift (= demand-pull)
 *   sras-shift-left    SRAS left  (= cost-push)
 *   sras-shift-right   SRAS right → lower P, higher Y
 *   lras-shift-right   LRAS shifts right (long-run growth)
 *   recessionary-gap   Y < Y_fe, gap annotation below x-axis
 *   inflationary-gap   Y > Y_fe, gap annotation below x-axis
 *
 * ── CFG OPTIONS ──────────────────────────────────────────────────────────
 *   mode           {string}   one of the modes above (default: 'demand-pull')
 *   showLras       {boolean}  draw LRAS vertical line (default: true)
 *   showSras       {boolean}  draw SRAS curve (default: true)
 *   showOldCurve   {boolean}  draw old/dashed curve (default: true for shift modes)
 *   showGuides     {boolean}  dashed guide lines from equilibria to axes (default: true)
 *   showEquilibria {boolean}  filled equilibrium dots (default: true)
 *   annotations    {Array}    extra [{x,y,text,anchor?,tone?,bold?}] labels
 *   title          {string}   optional chart title (omitted by default)
 *   idPrefix       {string}   SVG id namespace (default: 'ad')
 *   viewBoxWidth   {number}   default 640
 *   viewBoxHeight  {number}   default 360
 */

(function (global) {
  'use strict';

  // ── COLOUR CONSTANTS (house rules) ──────────────────────────────────────
  var C_AD   = '#2563EB';   // blue  — AD curve
  var C_SRAS = '#92400E';   // amber/dark — SRAS curve (uses amber title tone)
  var C_LRAS = '#059669';   // green — LRAS vertical line
  var C_GUIDE = '#94A3B8';  // slate — dashed guide lines
  var C_AXIS  = '#334155';  // dark slate — axis colour
  var C_EQ_BLUE  = '#2563EB'; // equilibrium dot colour (AD-blue per house rules)

  // ── VIEWBOX / PADDING ───────────────────────────────────────────────────
  var DEFAULT_VBW = 640;
  var DEFAULT_VBH = 360;
  var PAD = { left: 54, top: 44, right: 64, bottom: 52 };

  // ── HELPER: escape XML text ─────────────────────────────────────────────
  function esc(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // ── HELPER: points-to-path d string ────────────────────────────────────
  function ptd(pts) {
    return pts.map(function (p, i) {
      return (i === 0 ? 'M' : 'L') + p[0].toFixed(2) + ',' + p[1].toFixed(2);
    }).join(' ');
  }

  // ── HELPER: arrowhead polygon ───────────────────────────────────────────
  function arrowPoly(x1, y1, x2, y2, size, colour) {
    var angle = Math.atan2(y2 - y1, x2 - x1);
    var s = size || 7;
    var pts = [
      [x2, y2],
      [x2 - s * Math.cos(angle - 0.4), y2 - s * Math.sin(angle - 0.4)],
      [x2 - s * Math.cos(angle + 0.4), y2 - s * Math.sin(angle + 0.4)],
    ].map(function (p) { return p[0].toFixed(2) + ',' + p[1].toFixed(2); }).join(' ');
    return '<polygon points="' + pts + '" fill="' + esc(colour) + '"/>';
  }

  // ── HELPER: white pill behind a label ──────────────────────────────────
  function pill(x, y, text, fontSize) {
    var fs = fontSize || 12;
    var charW = fs * 0.6;
    var w = text.length * charW + 10;
    var h = fs + 7;
    return '<rect x="' + (x - 2).toFixed(1) + '" y="' + (y - h + 2).toFixed(1) +
           '" width="' + w.toFixed(1) + '" height="' + h.toFixed(1) +
           '" rx="3" fill="white" fill-opacity="0.88"/>';
  }

  // ── HELPER: pill-backed text label ─────────────────────────────────────
  function labelPill(x, y, text, colour, fontSize, bold, anchor) {
    var fs = fontSize || 12;
    var fw = bold ? '700' : '600';
    var ta = anchor || 'start';
    var lx = x;
    if (ta === 'middle') { lx = x; }
    if (ta === 'end')    { lx = x; }
    // pill rect (positioned for start anchor; shift for others)
    var charW = fs * 0.6;
    var w = text.length * charW + 10;
    var h = fs + 7;
    var rx = (ta === 'end') ? x - w - 2 : (ta === 'middle') ? x - w / 2 : x - 2;
    return '<rect x="' + rx.toFixed(1) + '" y="' + (y - h + 2).toFixed(1) +
           '" width="' + w.toFixed(1) + '" height="' + h.toFixed(1) +
           '" rx="3" fill="white" fill-opacity="0.88"/>' +
           '<text x="' + lx.toFixed(1) + '" y="' + y.toFixed(1) +
           '" font-size="' + fs + '" font-weight="' + fw + '" fill="' + esc(colour) +
           '" text-anchor="' + ta + '">' + esc(text) + '</text>';
  }

  // ── HELPER: curve path element ──────────────────────────────────────────
  function curvePath(pts, colour, dashed, opacity, sw) {
    var da = dashed ? ' stroke-dasharray="4 3"' : '';
    var op = (opacity != null && opacity !== 1) ? ' opacity="' + opacity + '"' : '';
    return '<path d="' + ptd(pts) + '" fill="none" stroke="' + esc(colour) +
           '" stroke-width="' + (sw || 2) + '" stroke-linecap="round"' +
           ' stroke-linejoin="round"' + da + op + '/>';
  }

  // ── HELPER: vertical line (LRAS) ────────────────────────────────────────
  function vertLine(x, y1, y2, colour, dashed, opacity, sw) {
    var da = dashed ? ' stroke-dasharray="4 3"' : '';
    var op = (opacity != null && opacity !== 1) ? ' opacity="' + opacity + '"' : '';
    return '<line x1="' + x.toFixed(2) + '" y1="' + y1.toFixed(2) +
           '" x2="' + x.toFixed(2) + '" y2="' + y2.toFixed(2) +
           '" stroke="' + esc(colour) + '" stroke-width="' + (sw || 2.2) + '"' +
           da + op + ' stroke-linecap="round"/>';
  }

  // ── HELPER: dashed guide line ───────────────────────────────────────────
  function guide(x1, y1, x2, y2) {
    return '<line x1="' + x1.toFixed(2) + '" y1="' + y1.toFixed(2) +
           '" x2="' + x2.toFixed(2) + '" y2="' + y2.toFixed(2) +
           '" stroke="' + C_GUIDE + '" stroke-width="1" stroke-dasharray="3 3"/>';
  }

  // ── HELPER: equilibrium dot ─────────────────────────────────────────────
  function eqDot(x, y, colour) {
    return '<circle cx="' + x.toFixed(2) + '" cy="' + y.toFixed(2) +
           '" r="5" fill="' + esc(colour) + '" stroke="white" stroke-width="1.5"/>';
  }

  // ── HELPER: gap bracket (double-headed arrow below x-axis) ─────────────
  function gapBracket(x1, x2, yBase, labelText, colour) {
    var yArrow = yBase + 16;
    var parts = [];
    // line
    parts.push('<line x1="' + x1.toFixed(2) + '" y1="' + yArrow.toFixed(2) +
               '" x2="' + x2.toFixed(2) + '" y2="' + yArrow.toFixed(2) +
               '" stroke="' + esc(colour) + '" stroke-width="1.8"/>');
    // arrowheads (both ends)
    parts.push(arrowPoly(x2, yArrow, x1, yArrow, 6, colour));
    parts.push(arrowPoly(x1, yArrow, x2, yArrow, 6, colour));
    // label centred above the bracket line
    var mx = (x1 + x2) / 2;
    parts.push('<text x="' + mx.toFixed(1) + '" y="' + (yArrow - 5).toFixed(1) +
               '" text-anchor="middle" font-size="11" font-weight="700" fill="' +
               esc(colour) + '">' + esc(labelText) + '</text>');
    return parts.join('\n');
  }

  // ── NORMALISED CURVE DEFINITIONS ────────────────────────────────────────
  // All coords in 0..1 space, scaled to (pw, ph) at render time.
  // AD curves: downward sloping.  SRAS: upward sloping.

  // Canonical AD points (centre position)
  var AD_MID = [[0.05, 0.14], [0.22, 0.32], [0.48, 0.54], [0.74, 0.71], [0.92, 0.84]];
  // AD shifted right (+0.18 in x, −0.08 in y for same price level)
  var AD_RIGHT = [[0.22, 0.10], [0.38, 0.26], [0.63, 0.47], [0.86, 0.65], [0.97, 0.76]];
  // AD shifted left (−0.15 in x, +0.08 in y)
  var AD_LEFT  = [[0.04, 0.22], [0.10, 0.38], [0.32, 0.58], [0.58, 0.76], [0.76, 0.88]];

  // Canonical SRAS points
  var SRAS_MID = [[0.10, 0.88], [0.28, 0.68], [0.52, 0.46], [0.74, 0.28], [0.92, 0.12]];
  // SRAS shifted left (supply shock — up-left: same quantity, higher price → shift curve left)
  var SRAS_LEFT  = [[0.04, 0.72], [0.16, 0.54], [0.36, 0.33], [0.58, 0.16], [0.74, 0.06]];
  // SRAS shifted right (lower price for same quantity)
  var SRAS_RIGHT = [[0.20, 0.96], [0.38, 0.78], [0.62, 0.56], [0.82, 0.38], [0.96, 0.22]];

  // LRAS normalised x positions
  var LRAS_X_MID   = 0.60;
  var LRAS_X_RIGHT = 0.78;

  // ── SCALE HELPER ────────────────────────────────────────────────────────
  function scalePoints(pts, pw, ph) {
    return pts.map(function (p) { return [p[0] * pw, p[1] * ph]; });
  }

  function scaleX(nx, pw) { return nx * pw; }
  function scaleY(ny, ph) { return ny * ph; }

  // ── INTERPOLATE y at given normalised x on a polyline ──────────────────
  function interpY(normPts, nx) {
    for (var i = 0; i < normPts.length - 1; i++) {
      var x0 = normPts[i][0], x1 = normPts[i + 1][0];
      if (nx >= x0 && nx <= x1) {
        var t = (nx - x0) / (x1 - x0);
        return normPts[i][1] + t * (normPts[i + 1][1] - normPts[i][1]);
      }
    }
    // fallback: clamp
    if (nx <= normPts[0][0]) return normPts[0][1];
    return normPts[normPts.length - 1][1];
  }

  // ── FIND INTERSECTION of two normalised polylines ──────────────────────
  // Walks x from 0..1 in small steps and finds where the signed difference changes.
  function intersect(ptsA, ptsB) {
    var steps = 400;
    var xMin = Math.max(ptsA[0][0], ptsB[0][0]);
    var xMax = Math.min(ptsA[ptsA.length - 1][0], ptsB[ptsB.length - 1][0]);
    if (xMin >= xMax) return null;
    var prevDiff = null;
    var prevX = xMin;
    for (var i = 0; i <= steps; i++) {
      var nx = xMin + (i / steps) * (xMax - xMin);
      var ya = interpY(ptsA, nx);
      var yb = interpY(ptsB, nx);
      var diff = ya - yb;
      if (prevDiff !== null && prevDiff * diff < 0) {
        // linear interpolation of crossing
        var frac = Math.abs(prevDiff) / (Math.abs(prevDiff) + Math.abs(diff));
        var cx = prevX + frac * (nx - prevX);
        var cy = (interpY(ptsA, cx) + interpY(ptsB, cx)) / 2;
        return [cx, cy];
      }
      prevDiff = diff;
      prevX = nx;
    }
    return null;
  }

  // ── AXES ────────────────────────────────────────────────────────────────
  function buildAxes(pw, ph) {
    var arrowSz = 7;
    var parts = [];
    // Y-axis
    parts.push('<line x1="0" y1="' + ph.toFixed(1) + '" x2="0" y2="0" stroke="' +
               C_AXIS + '" stroke-width="1.8"/>');
    parts.push(arrowPoly(0, ph * 0.25, 0, 0, arrowSz, C_AXIS));
    // X-axis
    parts.push('<line x1="0" y1="' + ph.toFixed(1) + '" x2="' + pw.toFixed(1) + '" y2="' +
               ph.toFixed(1) + '" stroke="' + C_AXIS + '" stroke-width="1.8"/>');
    parts.push(arrowPoly(pw * 0.8, ph, pw, ph, arrowSz, C_AXIS));
    // Y-axis label: "Price level"
    parts.push('<text x="' + (-ph / 2).toFixed(1) + '" y="-36" transform="rotate(-90)"' +
               ' text-anchor="middle" font-size="12" font-weight="600" fill="' + C_AXIS +
               '" letter-spacing="0.3">Price level</text>');
    // X-axis label: "Real output (GDP)"
    parts.push('<text x="' + (pw / 2).toFixed(1) + '" y="' + (ph + 40).toFixed(1) +
               '" text-anchor="middle" font-size="12" font-weight="600" fill="' + C_AXIS +
               '" letter-spacing="0.3">Real output (GDP)</text>');
    return parts.join('\n');
  }

  // ── MAIN GENERATOR ──────────────────────────────────────────────────────

  /**
   * adasDiagram(cfg) → SVG string
   *
   * @param {object} cfg
   * @param {string}  cfg.mode           Diagram mode (default: 'demand-pull')
   * @param {boolean} cfg.showLras       Show LRAS (default: true)
   * @param {boolean} cfg.showSras       Show SRAS (default: true)
   * @param {boolean} cfg.showOldCurve   Show old/dashed curve in shift modes (default: true)
   * @param {boolean} cfg.showGuides     Show dashed guide lines (default: true)
   * @param {boolean} cfg.showEquilibria Show equilibrium dots (default: true)
   * @param {Array}   cfg.annotations    Extra [{x,y,text,anchor?,tone?,bold?}] labels
   * @param {string}  cfg.title          Optional chart title
   * @param {string}  cfg.idPrefix       SVG id namespace (default: 'ad')
   * @param {number}  cfg.viewBoxWidth   ViewBox width (default: 640)
   * @param {number}  cfg.viewBoxHeight  ViewBox height (default: 360)
   * @returns {string} Complete <svg> string
   */
  function adasDiagram(cfg) {
    cfg = cfg || {};
    var mode      = cfg.mode || 'demand-pull';
    var showLras  = cfg.showLras  !== false;
    var showSras  = cfg.showSras  !== false;
    var showOld   = cfg.showOldCurve !== false;
    var showGuide = cfg.showGuides  !== false;
    var showEq    = cfg.showEquilibria !== false;
    var annots    = cfg.annotations || [];
    var title     = cfg.title || '';
    var pfx       = cfg.idPrefix || 'ad';
    var vbW = cfg.viewBoxWidth  || DEFAULT_VBW;
    var vbH = cfg.viewBoxHeight || DEFAULT_VBH;

    var pw = vbW - PAD.left - PAD.right;
    var ph = vbH - PAD.top  - PAD.bottom;

    // ── Decide which curves to draw based on mode ──────────────────────
    // Each mode declares: adNorm, srasNorm, adOldNorm, srasOldNorm, lrasX, lrasOldX
    // Plus: gapType ('recessionary'|'inflationary'|null), showGap
    var adNorm, srasNorm, adOldNorm, srasOldNorm;
    var lrasX = LRAS_X_MID;
    var lrasOldX = null;
    var gapType = null;

    switch (mode) {
      case 'demand-pull':
      case 'ad-shift-right':
      case 'monetary':
        adNorm    = AD_RIGHT;
        adOldNorm = AD_MID;
        srasNorm  = SRAS_MID;
        break;

      case 'recession':
      case 'ad-shift-left':
        adNorm    = AD_LEFT;
        adOldNorm = AD_MID;
        srasNorm  = SRAS_MID;
        break;

      case 'cost-push':
      case 'sras-shift-left':
        adNorm    = AD_MID;
        srasNorm  = SRAS_LEFT;
        srasOldNorm = SRAS_MID;
        break;

      case 'sras-shift-right':
        adNorm    = AD_MID;
        srasNorm  = SRAS_RIGHT;
        srasOldNorm = SRAS_MID;
        break;

      case 'lras-shift-right':
        adNorm    = AD_MID;
        srasNorm  = SRAS_MID;
        lrasX     = LRAS_X_RIGHT;
        lrasOldX  = LRAS_X_MID;
        break;

      case 'recessionary-gap':
        adNorm    = AD_LEFT;
        adOldNorm = null; // no old curve — just show where we are
        srasNorm  = SRAS_MID;
        gapType   = 'recessionary';
        break;

      case 'inflationary-gap':
        adNorm    = AD_RIGHT;
        adOldNorm = null;
        srasNorm  = SRAS_MID;
        gapType   = 'inflationary';
        break;

      default:
        // Unknown mode: canonical AD/AS with no shift
        adNorm   = AD_MID;
        srasNorm = SRAS_MID;
        break;
    }

    // ── Convert to pixel coords ────────────────────────────────────────
    var adPx    = adNorm    ? scalePoints(adNorm,    pw, ph) : null;
    var adOldPx = (showOld && adOldNorm) ? scalePoints(adOldNorm, pw, ph) : null;
    var srasPx  = (showSras && srasNorm)  ? scalePoints(srasNorm,  pw, ph) : null;
    var srasOldPx = (showSras && showOld && srasOldNorm) ? scalePoints(srasOldNorm, pw, ph) : null;

    var lrasPxX    = showLras ? scaleX(lrasX, pw) : null;
    var lrasOldPxX = (showLras && showOld && lrasOldX) ? scaleX(lrasOldX, pw) : null;

    // ── Compute equilibria ─────────────────────────────────────────────
    // NEW equilibrium: intersection of new AD and new SRAS (or LRAS for lras-shift-right)
    // OLD equilibrium: intersection of old AD/old SRAS
    var eq1 = null, eq2 = null;

    if (mode === 'lras-shift-right') {
      // LRAS shift: eq is where AD crosses SRAS; old eq = AD × old LRAS (same y, different x)
      if (adNorm && srasNorm) {
        var crossNew = intersect(adNorm, srasNorm);
        if (crossNew) { eq2 = crossNew; } // new eq (right of LRAS)
      }
      // Old eq: AD × old LRAS (vertical line at lrasOldX)
      if (adNorm && lrasOldX != null) {
        var yAtOldLras = interpY(adNorm, lrasOldX);
        eq1 = [lrasOldX, yAtOldLras];
      }
    } else if (mode === 'recessionary-gap' || mode === 'inflationary-gap') {
      // Only one equilibrium (current position)
      if (adNorm && srasNorm) {
        var crossCurrent = intersect(adNorm, srasNorm);
        if (crossCurrent) { eq2 = crossCurrent; }
      }
    } else {
      // Standard: old eq (AD_old × SRAS_old-or-current), new eq (AD × SRAS)
      var oldAd   = (showOld && adOldNorm)   ? adOldNorm   : adNorm;
      var oldSras = (showSras && showOld && srasOldNorm) ? srasOldNorm : srasNorm;

      if (showOld && (adOldNorm || srasOldNorm)) {
        var crossOld = intersect(oldAd, oldSras);
        if (crossOld) { eq1 = crossOld; }
      }
      if (adNorm && srasNorm) {
        var crossNew2 = intersect(adNorm, srasNorm);
        if (crossNew2) { eq2 = crossNew2; }
      }
    }

    // For gap modes: determine Y_fe (full employment output = LRAS position)
    var yfePx = lrasPxX; // LRAS pixel x = full-employment output

    // ── Assemble SVG fragments ─────────────────────────────────────────
    var parts = [];

    // 1) defs block (shadow + no external deps)
    parts.push('<defs>');
    parts.push('  <filter id="' + pfx + '-shadow" x="-20%" y="-20%" width="140%" height="140%">');
    parts.push('    <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>');
    parts.push('    <feOffset dx="0" dy="2" result="off"/>');
    parts.push('    <feComponentTransfer><feFuncA type="linear" slope="0.18"/></feComponentTransfer>');
    parts.push('    <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>');
    parts.push('  </filter>');
    parts.push('</defs>');

    // 2) Axes
    parts.push(buildAxes(pw, ph));

    // 3) Optional title
    if (title) {
      parts.push(labelPill(pw / 2, -18, title, C_AXIS, 13, true, 'middle'));
    }

    // 4) Old LRAS (dashed green, if LRAS shift mode)
    if (showLras && lrasOldPxX != null) {
      parts.push(vertLine(lrasOldPxX, 0, ph, C_LRAS, true, 0.55, 2));
      parts.push(labelPill(lrasOldPxX + 3, 10, 'LRAS₁', C_LRAS, 11, true, 'start'));
    }

    // 5) New LRAS (solid green)
    if (showLras && lrasPxX != null) {
      parts.push(vertLine(lrasPxX, 0, ph, C_LRAS, false, 1, 2.2));
      // Label above the line
      var lrasLabelX = lrasPxX + 3;
      var lrasLabelText = (lrasOldPxX != null) ? 'LRAS₂' : 'LRAS';
      parts.push(labelPill(lrasLabelX, 10, lrasLabelText, C_LRAS, 11, true, 'start'));
    }

    // 6) Old SRAS (dashed amber)
    if (srasOldPx) {
      parts.push(curvePath(srasOldPx, C_SRAS, true, 0.55, 2));
      var srasOldLast = srasOldPx[srasOldPx.length - 1];
      parts.push(labelPill(srasOldLast[0] + 3, srasOldLast[1] + 6, 'SRAS₁', C_SRAS, 11, true, 'start'));
    }

    // 7) New SRAS (solid amber)
    if (srasPx) {
      parts.push(curvePath(srasPx, C_SRAS, false, 1, 2.2));
      var srasLast = srasPx[srasPx.length - 1];
      var srasLabel = srasOldPx ? 'SRAS₂' : 'SRAS';
      parts.push(labelPill(srasLast[0] + 3, srasLast[1] + 6, srasLabel, C_SRAS, 11, true, 'start'));
    }

    // 8) Old AD (dashed blue)
    if (adOldPx) {
      parts.push(curvePath(adOldPx, C_AD, true, 0.55, 2));
      var adOldLast = adOldPx[adOldPx.length - 1];
      parts.push(labelPill(adOldLast[0] + 3, adOldLast[1] - 2, 'AD₁', C_AD, 11, true, 'start'));
    }

    // 9) New AD (solid blue)
    if (adPx) {
      parts.push(curvePath(adPx, C_AD, false, 1, 2.2));
      var adLast = adPx[adPx.length - 1];
      var adLabel = adOldPx ? 'AD₂' : 'AD';
      // Shift label slightly above the endpoint
      parts.push(labelPill(adLast[0] + 3, adLast[1] - 2, adLabel, C_AD, 11, true, 'start'));
    }

    // 10) Equilibrium guides + dots
    if (showGuide && eq1) {
      var eq1px = [scaleX(eq1[0], pw), scaleY(eq1[1], ph)];
      parts.push(guide(eq1px[0], eq1px[1], eq1px[0], ph));
      parts.push(guide(0, eq1px[1], eq1px[0], eq1px[1]));
    }
    if (showGuide && eq2) {
      var eq2px = [scaleX(eq2[0], pw), scaleY(eq2[1], ph)];
      parts.push(guide(eq2px[0], eq2px[1], eq2px[0], ph));
      parts.push(guide(0, eq2px[1], eq2px[0], eq2px[1]));
    }

    if (showEq && eq1) {
      var eq1pxDot = [scaleX(eq1[0], pw), scaleY(eq1[1], ph)];
      parts.push(eqDot(eq1pxDot[0], eq1pxDot[1], C_EQ_BLUE));
      parts.push('<text x="' + (eq1pxDot[0] + 8).toFixed(1) + '" y="' +
                 (eq1pxDot[1] - 6).toFixed(1) + '" font-size="11" font-weight="700" fill="' +
                 C_EQ_BLUE + '">E₁</text>');
    }
    if (showEq && eq2) {
      var eq2pxDot = [scaleX(eq2[0], pw), scaleY(eq2[1], ph)];
      parts.push(eqDot(eq2pxDot[0], eq2pxDot[1], C_EQ_BLUE));
      var eq2Label = (eq1 && showEq) ? 'E₂' : 'E';
      parts.push('<text x="' + (eq2pxDot[0] + 8).toFixed(1) + '" y="' +
                 (eq2pxDot[1] - 6).toFixed(1) + '" font-size="11" font-weight="700" fill="' +
                 C_EQ_BLUE + '">' + esc(eq2Label) + '</text>');
    }

    // 11) Gap bracket (recessionary / inflationary)
    if (gapType && eq2 && yfePx != null) {
      var eqGapPx = scaleX(eq2[0], pw);
      var gapColour = (gapType === 'recessionary') ? '#059669' : '#D97706';
      var gapLabel  = (gapType === 'recessionary') ? 'Recessionary gap' : 'Inflationary gap';
      // For recessionary: current Y < Y_fe; bracket from eqGapPx to yfePx
      var x1g = Math.min(eqGapPx, yfePx);
      var x2g = Math.max(eqGapPx, yfePx);
      if (x2g - x1g > 6) {
        parts.push(gapBracket(x1g, x2g, ph, gapLabel, gapColour));
      }
      // Y_fe tick label on x-axis
      parts.push('<text x="' + yfePx.toFixed(1) + '" y="' + (ph + 16).toFixed(1) +
                 '" text-anchor="middle" font-size="10" font-weight="600" fill="' + C_AXIS +
                 '">Yₚₑ</text>');
    }

    // 12) Shift-direction arrow (small annotation arrow on the AD/SRAS shift)
    // Only shown for shift modes; simple inline arrow between old and new curve midpoints
    var shiftArrow = '';
    if (adOldPx && adPx) {
      // AD shift arrow near the top-centre of the chart
      var arrowY = ph * 0.2;
      // Old curve x at arrowY (find normalised y = 0.2 on AD, then x from curve)
      var midAd1 = adOldPx[1]; // second point: rough midpoint area
      var midAd2 = adPx[1];
      var ax1 = midAd1[0] + 14;
      var ax2 = midAd2[0] - 6;
      var ay  = midAd1[1] - 10;
      if (Math.abs(ax2 - ax1) > 12) {
        var isRight = ax2 > ax1;
        shiftArrow = '<line x1="' + ax1.toFixed(1) + '" y1="' + ay.toFixed(1) +
                     '" x2="' + ax2.toFixed(1) + '" y2="' + ay.toFixed(1) +
                     '" stroke="' + C_AD + '" stroke-width="1.5" stroke-dasharray="3 2"/>' +
                     arrowPoly(ax1, ay, (isRight ? ax2 + 2 : ax2 - 2), ay, 6, C_AD);
      }
    } else if (srasOldPx && srasPx) {
      // SRAS shift arrow near the middle
      var midS1 = srasOldPx[2];
      var midS2 = srasPx[2];
      if (midS1 && midS2) {
        var sx1 = midS1[0] + 10;
        var sx2 = midS2[0] - 6;
        var sy  = (midS1[1] + midS2[1]) / 2;
        if (Math.abs(sx2 - sx1) > 12) {
          var isRight2 = sx2 > sx1;
          shiftArrow = '<line x1="' + sx1.toFixed(1) + '" y1="' + sy.toFixed(1) +
                       '" x2="' + sx2.toFixed(1) + '" y2="' + sy.toFixed(1) +
                       '" stroke="' + C_SRAS + '" stroke-width="1.5" stroke-dasharray="3 2"/>' +
                       arrowPoly(sx1, sy, (isRight2 ? sx2 + 2 : sx2 - 2), sy, 6, C_SRAS);
        }
      }
    }
    if (shiftArrow) { parts.push(shiftArrow); }

    // 13) User-supplied annotations
    annots.forEach(function (a) {
      if (!a || !a.text) { return; }
      var colour = a.tone ? ('#334155') : C_AXIS; // default slate title
      // Resolve tone
      var toneMap = { green:'#065F46', amber:'#92400E', blue:'#1E3A8A',
                      purple:'#5B21B6', rose:'#9F1239', slate:'#334155' };
      if (a.tone && toneMap[a.tone]) { colour = toneMap[a.tone]; }
      var ax = a.x != null ? a.x : 0;
      var ay = a.y != null ? a.y : 0;
      var ta = a.anchor || 'start';
      var fs = a.fontSize || 11;
      var fw = a.bold ? '700' : '400';
      parts.push('<text x="' + ax.toFixed(1) + '" y="' + ay.toFixed(1) +
                 '" font-size="' + fs + '" font-weight="' + fw + '" fill="' + esc(colour) +
                 '" text-anchor="' + esc(ta) + '">' + esc(a.text) + '</text>');
    });

    // ── Assemble SVG shell ─────────────────────────────────────────────
    var inner = parts.join('\n');
    return '<svg xmlns="http://www.w3.org/2000/svg"' +
           ' viewBox="0 0 ' + vbW + ' ' + vbH + '"' +
           ' width="' + vbW + '" height="' + vbH + '"' +
           ' style="font-family:Inter,system-ui,sans-serif;overflow:visible;">' +
           '\n  <g transform="translate(' + PAD.left + ',' + PAD.top + ')">\n' +
           inner +
           '\n  </g>\n</svg>';
  }

  // ── REGISTER ────────────────────────────────────────────────────────────
  global.ECONOS_DIAGRAMS = global.ECONOS_DIAGRAMS || {};
  global.ECONOS_DIAGRAMS.adasDiagram = adasDiagram;

}(typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : this));
