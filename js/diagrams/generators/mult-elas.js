/**
 * mult-elas.js — Multiplier & Elasticity diagram generators
 * ==========================================================
 * Registers two generator functions onto window.ECONOS_DIAGRAMS:
 *
 *   ECONOS_DIAGRAMS.multiplierDiagram(cfg)   → SVG string
 *   ECONOS_DIAGRAMS.elasticityDiagram(cfg)   → SVG string
 *
 * Requires window.EconSvg (js/diagrams/econ-svg.js) to be loaded first.
 * No external dependencies. IIFE — safe to concat/bundle.
 *
 * ── multiplierDiagram(cfg) ───────────────────────────────────────────────
 *  cfg.view          'rounds'|'ripple'|'adShift'   default 'rounds'
 *  cfg.multiplier    number (k)                    default 2
 *  cfg.injection     number (initial £)            default 100
 *  cfg.rounds        number of visible spending rounds  default 5
 *  cfg.showLeakage   bool — annotate leakage labels on rounds  default true
 *  cfg.mpc           marginal propensity to consume  default 0.5
 *  cfg.title         string override for header    default auto
 *  cfg.idPrefix      string — prefix SVG IDs       default 'me-mul'
 *
 * ── elasticityDiagram(cfg) ──────────────────────────────────────────────
 *  cfg.curve         'demand'|'supply'             default 'demand'
 *  cfg.elasticity    'elastic'|'inelastic'|'unit'|'perfectly-elastic'|'perfectly-inelastic'
 *                                                  default 'inelastic'
 *  cfg.showTax       bool — overlay a per-unit tax wedge   default false
 *  cfg.taxPerUnit    number (size of tax wedge in plot units)  default 30
 *  cfg.title         string override for header    default auto
 *  cfg.idPrefix      string — prefix SVG IDs       default 'me-ela'
 */

(function (global) {
  'use strict';

  // ── TONE CONSTANTS (house rules) ────────────────────────────────────────
  // AD = blue, demand = blue
  // Supply/LRAS = green
  // SRAS = amber
  // Equilibrium guides = slate #94A3B8, dash 3 3
  // Axis colour = #334155
  // Tax wedge = rose / purple

  var BLUE   = '#2563EB';
  var GREEN  = '#059669';
  var AMBER  = '#D97706';
  var ROSE   = '#BE123C';
  var PURPLE = '#7C3AED';
  var SLATE  = '#94A3B8';
  var AXIS   = '#334155';
  var WHITE  = '#ffffff';

  // ── HELPERS ────────────────────────────────────────────────────────────

  /** Escape XML/HTML special chars */
  function esc(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  /** Round to 2 dp for clean SVG output */
  function r2(n) { return +n.toFixed(2); }

  /**
   * Minimal self-contained <svg> wrapper when EconSvg.svg isn't the right
   * fit (e.g. we need full manual layout for bespoke diagrams).
   */
  function svgWrap(viewW, viewH, defs, body, idPrefix) {
    var font = 'Inter, system-ui, sans-serif';
    return (
      '<svg xmlns="http://www.w3.org/2000/svg"' +
      ' viewBox="0 0 ' + viewW + ' ' + viewH + '"' +
      ' width="' + viewW + '" height="' + viewH + '"' +
      ' style="font-family:' + font + ';overflow:visible;">' +
      (defs ? defs : '') +
      body +
      '</svg>'
    );
  }

  /** Arrowhead polygon pointing from (x1,y1) → (x2,y2) */
  function arrow(x1, y1, x2, y2, size, colour) {
    var s = size || 7;
    var ang = Math.atan2(y2 - y1, x2 - x1);
    var pts = [
      [x2, y2],
      [x2 - s * Math.cos(ang - 0.4), y2 - s * Math.sin(ang - 0.4)],
      [x2 - s * Math.cos(ang + 0.4), y2 - s * Math.sin(ang + 0.4)],
    ].map(function (p) { return r2(p[0]) + ',' + r2(p[1]); }).join(' ');
    return '<polygon points="' + pts + '" fill="' + esc(colour || AXIS) + '"/>';
  }

  /** White pill label (background rect + text) */
  function pillLabel(x, y, text, colour, fontSize, bold, anchor) {
    var fs = fontSize || 12;
    var fw = bold ? '700' : '400';
    var ta = anchor || 'start';
    var charW = fs * 0.58;
    var tw = text.length * charW + 10;
    var pillH = fs + 6;
    var rx = x;
    if (ta === 'middle') rx = x - tw / 2;
    if (ta === 'end') rx = x - tw;
    return (
      '<rect x="' + r2(rx) + '" y="' + r2(y - pillH + 1) + '"' +
      ' width="' + r2(tw) + '" height="' + r2(pillH) + '"' +
      ' rx="4" fill="' + WHITE + '" fill-opacity="0.92"/>' +
      '<text x="' + r2(x) + '" y="' + r2(y) + '"' +
      ' font-size="' + fs + '" font-weight="' + fw + '"' +
      ' fill="' + esc(colour || AXIS) + '" text-anchor="' + ta + '"' +
      ' dominant-baseline="auto">' + esc(text) + '</text>'
    );
  }

  /** Single dashed guide line */
  function guide(x1, y1, x2, y2) {
    return (
      '<line x1="' + r2(x1) + '" y1="' + r2(y1) + '"' +
      ' x2="' + r2(x2) + '" y2="' + r2(y2) + '"' +
      ' stroke="' + SLATE + '" stroke-width="1" stroke-dasharray="3 3"/>'
    );
  }

  /** Equilibrium dot */
  function eqDot(cx, cy, colour) {
    return (
      '<circle cx="' + r2(cx) + '" cy="' + r2(cy) + '" r="5"' +
      ' fill="' + esc(colour || BLUE) + '" stroke="' + WHITE + '" stroke-width="1.5"/>'
    );
  }

  // ── EconSvg ACCESSOR ───────────────────────────────────────────────────
  // Prefer the shared utility if available, fall back to local inline helpers.

  function getE() { return (global.EconSvg) || null; }

  // ═══════════════════════════════════════════════════════════════════════
  // MULTIPLIER DIAGRAM
  // ═══════════════════════════════════════════════════════════════════════

  /**
   * Three sub-views controlled by cfg.view:
   *
   *  'rounds'   — horizontal stacked-bar of spending rounds (default)
   *  'ripple'   — concentric ring / ripple visualisation
   *  'adShift'  — AD/AS diagram showing the multiplied shift of AD
   */
  function multiplierDiagram(cfg) {
    cfg = cfg || {};
    var view       = cfg.view        || 'rounds';
    var multiplier = cfg.multiplier  != null ? cfg.multiplier : 2;
    var injection  = cfg.injection   != null ? cfg.injection  : 100;
    var rounds     = cfg.rounds      != null ? cfg.rounds     : 5;
    var showLeak   = cfg.showLeakage != null ? cfg.showLeakage : true;
    var mpc        = cfg.mpc         != null ? cfg.mpc         : 0.5;
    var idPfx      = cfg.idPrefix    || 'me-mul';

    if (view === 'rounds')  return _multiplierRounds(cfg, multiplier, injection, rounds, showLeak, mpc, idPfx);
    if (view === 'ripple')  return _multiplierRipple(cfg, multiplier, injection, rounds, showLeak, mpc, idPfx);
    if (view === 'adShift') return _multiplierAdShift(cfg, multiplier, injection, idPfx);
    // Fallback
    return _multiplierRounds(cfg, multiplier, injection, rounds, showLeak, mpc, idPfx);
  }

  // ── view: 'rounds' ─────────────────────────────────────────────────────
  // Stacked decreasing-injection bars, one per spending round.
  // Round 0: injection; rounds 1-N: MPC^n * injection each.

  function _multiplierRounds(cfg, k, inj, nRounds, showLeak, mpc, idPfx) {
    var title = cfg.title || ('Multiplier Effect (k = ' + k + ')');

    // Layout
    var VW = 640, VH = 320;
    var padL = 52, padT = 52, padR = 24, padB = 48;
    var plotW = VW - padL - padR;
    var plotH = VH - padT - padB;

    // Compute round values: round 0 = inj, round i = inj * mpc^i
    var vals = [];
    var total = 0;
    for (var i = 0; i <= nRounds; i++) {
      var v = inj * Math.pow(mpc, i);
      vals.push(v);
      total += v;
    }

    // Bar geometry: equal widths, heights proportional to injection value
    var barW = plotW / (vals.length + 0.5);
    var gap   = barW * 0.18;
    var maxVal = inj; // Round 0 always tallest

    // Round colours — alternate blue/amber from round 0 (injection = blue)
    var colours = [BLUE, AMBER, GREEN, PURPLE, ROSE, SLATE, BLUE, AMBER, GREEN, PURPLE];

    var E = getE();
    var parts = [];

    // ── Defs ──
    parts.push(
      '<defs>' +
      '<marker id="' + idPfx + '-arr" viewBox="0 0 10 10" refX="9" refY="5"' +
      ' markerWidth="6" markerHeight="6" orient="auto">' +
      '<path d="M 0 0 L 10 5 L 0 10 z" fill="' + AXIS + '"/>' +
      '</marker>' +
      '</defs>'
    );

    // ── Title ──
    parts.push(
      '<text x="' + r2(padL + plotW / 2) + '" y="22"' +
      ' font-size="13" font-weight="700" fill="' + AXIS + '"' +
      ' text-anchor="middle" letter-spacing="0.3">' + esc(title) + '</text>'
    );

    // ── Y axis ──
    var axX = padL, axYtop = padT, axYbot = padT + plotH;
    parts.push(
      '<line x1="' + axX + '" y1="' + axYbot + '"' +
      ' x2="' + axX + '" y2="' + axYtop + '"' +
      ' stroke="' + AXIS + '" stroke-width="1.8"/>'
    );
    parts.push(arrow(axX, axYbot * 0.5, axX, axYtop, 7, AXIS));

    // Y axis label
    parts.push(
      '<text x="' + r2(-(axYtop + plotH / 2)) + '" y="14"' +
      ' transform="rotate(-90)"' +
      ' font-size="11" font-weight="600" fill="' + AXIS + '"' +
      ' text-anchor="middle">' + esc('Spending (£)') + '</text>'
    );

    // ── X axis ──
    var axXright = padL + plotW;
    parts.push(
      '<line x1="' + axX + '" y1="' + axYbot + '"' +
      ' x2="' + axXright + '" y2="' + axYbot + '"' +
      ' stroke="' + AXIS + '" stroke-width="1.8"/>'
    );
    parts.push(arrow(axX + plotW * 0.7, axYbot, axXright, axYbot, 7, AXIS));

    // X axis label
    parts.push(
      '<text x="' + r2(padL + plotW / 2) + '" y="' + r2(VH - 8) + '"' +
      ' font-size="11" font-weight="600" fill="' + AXIS + '"' +
      ' text-anchor="middle">' + esc('Spending Round') + '</text>'
    );

    // ── Bars ──
    vals.forEach(function (v, i) {
      var barH = (v / maxVal) * plotH * 0.88;
      var bx   = padL + i * barW + gap;
      var by   = axYbot - barH;
      var col  = colours[i % colours.length];

      // Bar fill with slight opacity gradient feel
      parts.push(
        '<rect x="' + r2(bx) + '" y="' + r2(by) + '"' +
        ' width="' + r2(barW - gap * 2) + '" height="' + r2(barH) + '"' +
        ' rx="3" fill="' + esc(col) + '" opacity="' + (i === 0 ? '1' : '0.75') + '"/>'
      );

      // Value label on top of bar
      var valLabel = '£' + r2(v);
      parts.push(
        pillLabel(
          bx + (barW - gap * 2) / 2,
          by - 4,
          valLabel,
          col,
          10,
          true,
          'middle'
        )
      );

      // Round label below x axis
      var roundLabel = i === 0 ? 'Injection' : 'Round ' + i;
      parts.push(
        '<text x="' + r2(bx + (barW - gap * 2) / 2) + '"' +
        ' y="' + r2(axYbot + 14) + '"' +
        ' font-size="9" fill="' + AXIS + '" text-anchor="middle">' +
        esc(roundLabel) + '</text>'
      );

      // Leakage label (withdrawn from each round)
      if (showLeak && i < vals.length - 1) {
        var leakage = v * (1 - mpc);
        var leakLabel = 'Leaks: £' + r2(leakage);
        var lx = bx + (barW - gap * 2) / 2;
        var ly = by + barH * 0.5 + 5;
        if (barH > 22) {
          parts.push(
            '<text x="' + r2(lx) + '" y="' + r2(ly) + '"' +
            ' font-size="9" fill="' + WHITE + '" text-anchor="middle"' +
            ' opacity="0.9">' + esc(leakLabel) + '</text>'
          );
        }
      }
    });

    // ── Total annotation ──
    var totalLabel = 'Total spending: £' + r2(total) + ' (k = ' + k + ')';
    parts.push(
      '<rect x="' + r2(padL) + '" y="' + r2(padT - 28) + '"' +
      ' width="' + r2(plotW) + '" height="18"' +
      ' rx="4" fill="#EFF6FF" stroke="#93C5FD" stroke-width="0.8"/>'
    );
    parts.push(
      '<text x="' + r2(padL + plotW / 2) + '" y="' + r2(padT - 14) + '"' +
      ' font-size="11" font-weight="600" fill="' + BLUE + '"' +
      ' text-anchor="middle">' + esc(totalLabel) + '</text>'
    );

    return svgWrap(VW, VH, null, parts.join('\n'), idPfx);
  }

  // ── view: 'ripple' ─────────────────────────────────────────────────────
  // Concentric rings — inner circle = initial injection; each outer ring
  // = the next round of induced spending.

  function _multiplierRipple(cfg, k, inj, nRounds, showLeak, mpc, idPfx) {
    var title = cfg.title || ('Multiplier Ripple Effect');

    var VW = 480, VH = 380;
    var cx = VW / 2;
    var cy = VH / 2 + 14;

    // Ring radii: inner = 40, each successive ring spaced by spending fraction
    var baseR = 40;
    var maxR  = 180;

    // Compute cumulative spending fractions
    var cumulative = [];
    var runSum = 0;
    for (var i = 0; i <= nRounds; i++) {
      runSum += Math.pow(mpc, i);
      cumulative.push(runSum);
    }
    var fullSum = cumulative[cumulative.length - 1];

    var rings = cumulative.map(function (c) {
      return baseR + (c / fullSum) * (maxR - baseR);
    });

    var ringColours = [BLUE, AMBER, GREEN, PURPLE, ROSE, SLATE, BLUE, AMBER, GREEN, PURPLE];

    var parts = [];

    // Title
    parts.push(
      '<text x="' + r2(VW / 2) + '" y="22"' +
      ' font-size="13" font-weight="700" fill="' + AXIS + '"' +
      ' text-anchor="middle" letter-spacing="0.3">' + esc(title) + '</text>'
    );

    // Draw rings from outside in so inner ones paint over outer
    for (var j = rings.length - 1; j >= 0; j--) {
      var col = ringColours[j % ringColours.length];
      var op  = j === 0 ? '1' : '0.18';
      parts.push(
        '<circle cx="' + r2(cx) + '" cy="' + r2(cy) + '" r="' + r2(rings[j]) + '"' +
        ' fill="' + esc(col) + '" fill-opacity="' + op + '"' +
        ' stroke="' + esc(col) + '" stroke-width="' + (j === 0 ? '2.5' : '1.5') + '"' +
        ' stroke-opacity="0.65"/>'
      );
    }

    // Inner circle solid fill
    parts.push(
      '<circle cx="' + r2(cx) + '" cy="' + r2(cy) + '" r="' + r2(baseR) + '"' +
      ' fill="' + BLUE + '" opacity="1"/>'
    );

    // Inner label: injection
    parts.push(
      '<text x="' + r2(cx) + '" y="' + r2(cy - 6) + '"' +
      ' font-size="11" font-weight="700" fill="' + WHITE + '"' +
      ' text-anchor="middle">' + esc('Injection') + '</text>'
    );
    parts.push(
      '<text x="' + r2(cx) + '" y="' + r2(cy + 8) + '"' +
      ' font-size="11" font-weight="700" fill="' + WHITE + '"' +
      ' text-anchor="middle">' + esc('£' + r2(inj)) + '</text>'
    );

    // Ring annotation labels at right edge of each ring
    for (var m = 1; m <= nRounds; m++) {
      var rv = inj * Math.pow(mpc, m);
      var rr = rings[m];
      var labelX = cx + rr + 8;
      var labelY = cy - rr * 0.25 + m * 10;

      // Keep labels inside viewBox
      if (labelX > VW - 8) { labelX = cx - rr - 8; }

      var rLabel = (m === 1 ? 'Round 1: ' : 'Round ' + m + ': ') + '£' + r2(rv);
      parts.push(
        pillLabel(labelX, labelY, rLabel, ringColours[m % ringColours.length], 10, false, 'start')
      );
    }

    // Leakage note at bottom
    if (showLeak) {
      var leakPct = r2((1 - mpc) * 100);
      var leakNote = 'Each round: ' + leakPct + '% leaks (saved/taxed/imported)';
      parts.push(
        '<rect x="40" y="' + r2(VH - 36) + '"' +
        ' width="' + r2(VW - 80) + '" height="18"' +
        ' rx="4" fill="#FFFBEB" stroke="#FCD34D" stroke-width="0.8"/>'
      );
      parts.push(
        '<text x="' + r2(VW / 2) + '" y="' + r2(VH - 22) + '"' +
        ' font-size="11" fill="' + AMBER + '" font-weight="600"' +
        ' text-anchor="middle">' + esc(leakNote) + '</text>'
      );
    }

    // Multiplier legend
    var mlegend = 'Multiplier k = 1÷(1−MPC) = 1÷' + r2(1 - mpc) + ' = ' + r2(k);
    parts.push(
      '<text x="' + r2(VW / 2) + '" y="' + r2(VH - 6) + '"' +
      ' font-size="10" fill="' + SLATE + '" text-anchor="middle">' +
      esc(mlegend) + '</text>'
    );

    return svgWrap(VW, VH, null, parts.join('\n'), idPfx);
  }

  // ── view: 'adShift' ─────────────────────────────────────────────────────
  // AD/AS diagram: initial AD, then AD shifted right by k * injection.
  // Shows original equilibrium + new equilibrium; SRAS and LRAS included.

  function _multiplierAdShift(cfg, k, inj, idPfx) {
    var title = cfg.title || ('Multiplier: AD Shifts by k × Injection');

    var VW = 640, VH = 360;
    var padL = 52, padT = 52, padR = 60, padB = 48;
    var W  = VW - padL - padR;   // plot width
    var H  = VH - padT - padB;   // plot height

    // Shift magnitude: clamp to 10-40% of plot width
    var rawShift = (inj * k) / (inj * (k + 1)) * W * 0.55;
    var shift    = Math.min(Math.max(rawShift, W * 0.12), W * 0.38);

    // AD curves: downward sloping (norm coords: top-left → bottom-right)
    // Original AD1: x from 0.05 to 0.82, y from 0.10 to 0.88
    var ad1 = [[0.05, 0.10], [0.28, 0.32], [0.52, 0.58], [0.72, 0.76], [0.82, 0.88]];
    // AD2 shifted right by shift/W
    var shiftFrac = shift / W;
    var ad2 = ad1.map(function (p) { return [Math.min(p[0] + shiftFrac, 0.97), p[1]]; });

    // SRAS: upward sloping
    var sras = [[0.10, 0.88], [0.32, 0.65], [0.58, 0.42], [0.78, 0.22], [0.90, 0.10]];

    // LRAS: vertical at x = 0.55 (potential output)
    var lrasX = 0.55 * W;

    // Intersect helpers: find approximate intersection of two polylines
    // We solve linearly segment-by-segment.
    function lerp(a, b, t) { return a + (b - a) * t; }
    function segIntersect(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
      var dax = ax2 - ax1, day = ay2 - ay1;
      var dbx = bx2 - bx1, dby = by2 - by1;
      var denom = dax * dby - day * dbx;
      if (Math.abs(denom) < 1e-9) return null;
      var t = ((bx1 - ax1) * dby - (by1 - ay1) * dbx) / denom;
      var u = ((bx1 - ax1) * day - (by1 - ay1) * dax) / denom;
      if (t < 0 || t > 1 || u < 0 || u > 1) return null;
      return [ax1 + t * dax, ay1 + t * day];
    }
    function polyIntersect(pA, pB) {
      for (var i = 0; i < pA.length - 1; i++) {
        for (var j = 0; j < pB.length - 1; j++) {
          var pt = segIntersect(
            pA[i][0], pA[i][1], pA[i+1][0], pA[i+1][1],
            pB[j][0], pB[j][1], pB[j+1][0], pB[j+1][1]
          );
          if (pt) return pt;
        }
      }
      return null;
    }

    // Scale norm → pixels in plot area
    function px(v) { return v * W; }
    function py(v) { return v * H; }
    function scalePoly(pts) { return pts.map(function (p) { return [px(p[0]), py(p[1])]; }); }

    var ad1px  = scalePoly(ad1);
    var ad2px  = scalePoly(ad2);
    var sraspx = scalePoly(sras);

    var eq1n = polyIntersect(ad1, sras);
    var eq2n = polyIntersect(ad2, sras);
    var eq1  = eq1n ? [px(eq1n[0]), py(eq1n[1])] : [px(0.43), py(0.57)];
    var eq2  = eq2n ? [px(eq2n[0]), py(eq2n[1])] : [px(0.43 + shiftFrac), py(0.57 - shiftFrac * 0.4)];

    // Build polyline d-string
    function polyD(pts) {
      return pts.map(function (p, i) {
        return (i === 0 ? 'M' : 'L') + r2(p[0]) + ',' + r2(p[1]);
      }).join(' ');
    }

    var E = getE();
    var parts = [];

    // Defs
    parts.push(
      '<defs>' +
      '<marker id="' + idPfx + '-arr" viewBox="0 0 10 10" refX="9" refY="5"' +
      ' markerWidth="6" markerHeight="6" orient="auto">' +
      '<path d="M 0 0 L 10 5 L 0 10 z" fill="' + AXIS + '"/>' +
      '</marker>' +
      '</defs>'
    );

    // Translate plot area
    parts.push('<g transform="translate(' + padL + ',' + padT + ')">');

    // Title (outside plot area, above)
    parts.push(
      '<text x="' + r2(W / 2) + '" y="-28"' +
      ' font-size="13" font-weight="700" fill="' + AXIS + '"' +
      ' text-anchor="middle" letter-spacing="0.3">' + esc(title) + '</text>'
    );

    // Y axis
    parts.push(
      '<line x1="0" y1="' + H + '" x2="0" y2="0"' +
      ' stroke="' + AXIS + '" stroke-width="1.8"/>'
    );
    parts.push(arrow(0, H * 0.4, 0, 0, 7, AXIS));
    parts.push(
      '<text x="' + r2(-H / 2) + '" y="-36"' +
      ' transform="rotate(-90)"' +
      ' font-size="12" font-weight="600" fill="' + AXIS + '"' +
      ' text-anchor="middle">' + esc('Price Level (P)') + '</text>'
    );

    // X axis
    parts.push(
      '<line x1="0" y1="' + H + '" x2="' + W + '" y2="' + H + '"' +
      ' stroke="' + AXIS + '" stroke-width="1.8"/>'
    );
    parts.push(arrow(W * 0.7, H, W, H, 7, AXIS));
    parts.push(
      '<text x="' + r2(W / 2) + '" y="' + r2(H + 36) + '"' +
      ' font-size="12" font-weight="600" fill="' + AXIS + '"' +
      ' text-anchor="middle">' + esc('Real Output (Y)') + '</text>'
    );

    // LRAS (vertical green)
    parts.push(
      '<line x1="' + r2(lrasX) + '" y1="' + r2(H * 0.05) + '"' +
      ' x2="' + r2(lrasX) + '" y2="' + r2(H * 0.95) + '"' +
      ' stroke="' + GREEN + '" stroke-width="2.2"/>'
    );
    parts.push(pillLabel(lrasX + 4, H * 0.08, 'LRAS', GREEN, 11, true, 'start'));

    // SRAS
    parts.push(
      '<path d="' + polyD(sraspx) + '"' +
      ' fill="none" stroke="' + AMBER + '" stroke-width="2.2"' +
      ' stroke-linecap="round" stroke-linejoin="round"/>'
    );
    var srasLast = sraspx[sraspx.length - 1];
    parts.push(pillLabel(srasLast[0] - 36, srasLast[1] - 14, 'SRAS', AMBER, 11, true, 'start'));

    // AD1 (dashed, original)
    parts.push(
      '<path d="' + polyD(ad1px) + '"' +
      ' fill="none" stroke="' + BLUE + '" stroke-width="2"' +
      ' stroke-dasharray="4 3" opacity="0.55"' +
      ' stroke-linecap="round" stroke-linejoin="round"/>'
    );
    var ad1Last = ad1px[ad1px.length - 1];
    parts.push(pillLabel(ad1Last[0] + 4, ad1Last[1] - 2, 'AD₁', BLUE, 11, true, 'start'));

    // AD2 (solid, shifted)
    parts.push(
      '<path d="' + polyD(ad2px) + '"' +
      ' fill="none" stroke="' + BLUE + '" stroke-width="2.5"' +
      ' stroke-linecap="round" stroke-linejoin="round"/>'
    );
    var ad2Last = ad2px[ad2px.length - 1];
    parts.push(pillLabel(ad2Last[0] + 4, ad2Last[1] - 2, 'AD₂', BLUE, 11, true, 'start'));

    // Shift arrow (along x-axis level)
    var arrowY = H * 0.88;
    parts.push(
      '<line x1="' + r2(eq1[0]) + '" y1="' + r2(arrowY) + '"' +
      ' x2="' + r2(eq2[0]) + '" y2="' + r2(arrowY) + '"' +
      ' stroke="' + BLUE + '" stroke-width="1.8" marker-end="url(#' + idPfx + '-arr)"/>'
    );
    var arrowMidX = (eq1[0] + eq2[0]) / 2;
    parts.push(pillLabel(arrowMidX, arrowY - 6, 'k × ΔInj', BLUE, 10, false, 'middle'));

    // Equilibrium 1: guides + dot
    parts.push(guide(eq1[0], eq1[1], eq1[0], H));
    parts.push(guide(0, eq1[1], eq1[0], eq1[1]));
    parts.push(eqDot(eq1[0], eq1[1], BLUE));
    parts.push(
      '<text x="' + r2(eq1[0] + 7) + '" y="' + r2(eq1[1] - 6) + '"' +
      ' font-size="11" font-weight="700" fill="' + BLUE + '">' + esc('E₁') + '</text>'
    );

    // Equilibrium 2: guides + dot
    parts.push(guide(eq2[0], eq2[1], eq2[0], H));
    parts.push(guide(0, eq2[1], eq2[0], eq2[1]));
    parts.push(eqDot(eq2[0], eq2[1], GREEN));
    parts.push(
      '<text x="' + r2(eq2[0] + 7) + '" y="' + r2(eq2[1] - 6) + '"' +
      ' font-size="11" font-weight="700" fill="' + GREEN + '">' + esc('E₂') + '</text>'
    );

    parts.push('</g>');

    return svgWrap(VW, VH, null, parts.join('\n'), idPfx);
  }

  // ═══════════════════════════════════════════════════════════════════════
  // ELASTICITY DIAGRAM
  // ═══════════════════════════════════════════════════════════════════════

  /**
   * Draws a price-quantity diagram with elasticity-appropriate slope.
   * Optionally overlays a per-unit tax wedge showing consumer/producer
   * incidence split according to relative elasticity.
   *
   * cfg.curve         'demand'|'supply'        default 'demand'
   * cfg.elasticity    'elastic'|'inelastic'|'unit'|'perfectly-elastic'|'perfectly-inelastic'
   * cfg.showTax       bool                     default false
   * cfg.taxPerUnit    number (plot units 0-100)default 30
   * cfg.title         string                   default auto
   * cfg.idPrefix      string                   default 'me-ela'
   */
  function elasticityDiagram(cfg) {
    cfg = cfg || {};
    var curveType  = cfg.curve       || 'demand';
    var elasticity = cfg.elasticity  || 'inelastic';
    var showTax    = cfg.showTax     != null ? cfg.showTax : false;
    var taxPerUnit = cfg.taxPerUnit  != null ? cfg.taxPerUnit : 30;
    var idPfx      = cfg.idPrefix    || 'me-ela';

    // Auto-title
    var elasticityLabel = {
      'elastic':             'Elastic',
      'inelastic':           'Inelastic',
      'unit':                'Unit Elastic',
      'perfectly-elastic':   'Perfectly Elastic',
      'perfectly-inelastic': 'Perfectly Inelastic',
    }[elasticity] || 'Inelastic';

    var title = cfg.title || (elasticityLabel + ' ' +
      (curveType === 'demand' ? 'Demand' : 'Supply'));

    var VW = 560, VH = 380;
    var padL = 56, padT = 60, padR = 60, padB = 52;
    var W = VW - padL - padR;
    var H = VH - padT - padB;

    // ── Curve point generation ──────────────────────────────────────────
    // Returns [[x0,y0],[x1,y1]] in pixel coords (plot-area origin = 0,0)
    // Demand: downward slope (high y → low x); Supply: upward slope.
    // Slope steepness encodes elasticity.

    // We place each curve so it passes through a central equilibrium
    // region. Equilibrium at approximately (0.5W, 0.5H).

    function buildCurvePoints(cType, elas) {
      var pts;
      var isD = (cType === 'demand');

      if (elas === 'perfectly-elastic') {
        // Horizontal line
        var hy = isD ? H * 0.35 : H * 0.65;
        pts = [[W * 0.05, hy], [W * 0.92, hy]];
      } else if (elas === 'perfectly-inelastic') {
        // Vertical line
        var vx = W * 0.5;
        pts = [[vx, H * 0.05], [vx, H * 0.92]];
      } else {
        // Slope factor: larger = steeper (more inelastic)
        var slopeMap = { elastic: 0.28, unit: 0.55, inelastic: 1.1 };
        var sf = slopeMap[elas] || 0.55;

        if (isD) {
          // Demand: top-left to bottom-right
          // Central point ~(0.5W, 0.45H)
          var mx = 0.5 * W, my = 0.45 * H;
          var dx = W * 0.42;
          var dy = dx * sf;
          pts = [
            [mx - dx, my - dy],
            [mx,      my     ],
            [mx + dx, my + dy],
          ];
        } else {
          // Supply: bottom-left to top-right
          var mx2 = 0.5 * W, my2 = 0.55 * H;
          var dx2 = W * 0.42;
          var dy2 = dx2 * sf;
          pts = [
            [mx2 - dx2, my2 + dy2],
            [mx2,       my2      ],
            [mx2 + dx2, my2 - dy2],
          ];
        }

        // Clamp to plot area
        pts = pts.map(function (p) {
          return [
            Math.min(Math.max(p[0], W * 0.03), W * 0.94),
            Math.min(Math.max(p[1], H * 0.03), H * 0.94),
          ];
        });
      }
      return pts;
    }

    var mainCurvePoints = buildCurvePoints(curveType, elasticity);
    var curveColour = curveType === 'demand' ? BLUE : GREEN;
    var curveLabel  = curveType === 'demand' ? 'D' : 'S';

    // We also draw the opposing curve so the equilibrium makes sense.
    // Opposing curve uses unit-elastic slope.
    var oppType = curveType === 'demand' ? 'supply' : 'demand';
    var oppColour = curveType === 'demand' ? GREEN : BLUE;
    var oppLabel  = curveType === 'demand' ? 'S' : 'D';
    var oppPoints = buildCurvePoints(oppType, 'unit');

    // Find equilibrium: intersection of main and opposing curves
    function segIntersect(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
      var dax = ax2 - ax1, day = ay2 - ay1;
      var dbx = bx2 - bx1, dby = by2 - by1;
      var denom = dax * dby - day * dbx;
      if (Math.abs(denom) < 1e-9) return null;
      var t = ((bx1 - ax1) * dby - (by1 - ay1) * dbx) / denom;
      var u = ((bx1 - ax1) * day - (by1 - ay1) * dax) / denom;
      if (t < 0 || t > 1 || u < 0 || u > 1) return null;
      return [ax1 + t * dax, ay1 + t * day];
    }
    function polyIntersect2(pA, pB) {
      for (var i = 0; i < pA.length - 1; i++) {
        for (var j = 0; j < pB.length - 1; j++) {
          var pt = segIntersect(
            pA[i][0], pA[i][1], pA[i+1][0], pA[i+1][1],
            pB[j][0], pB[j][1], pB[j+1][0], pB[j+1][1]
          );
          if (pt) return pt;
        }
      }
      return null;
    }

    var eqRaw = polyIntersect2(mainCurvePoints, oppPoints);
    var eqX = eqRaw ? eqRaw[0] : W * 0.5;
    var eqY = eqRaw ? eqRaw[1] : H * 0.5;

    // Polyline d-string helper
    function polyD2(pts) {
      return pts.map(function (p, i) {
        return (i === 0 ? 'M' : 'L') + r2(p[0]) + ',' + r2(p[1]);
      }).join(' ');
    }

    // ── Tax incidence overlay ───────────────────────────────────────────
    // Per-unit tax: shifts the supply curve up by taxPerUnit pixels.
    // Consumer burden = distance above original price on demand side.
    // Producer burden = distance below original price on supply side.
    // Split depends on elasticity of the MAIN curve when main=demand,
    // or of supply when main=supply.
    //
    // For simplicity and accuracy, we shift supply up by taxPixels,
    // find new eq, draw wedge.

    var taxPixels = (taxPerUnit / 100) * H * 0.55;
    taxPixels = Math.min(taxPixels, H * 0.28); // cap

    var taxParts = [];
    var newEqX = eqX, newEqY = eqY;

    if (showTax) {
      // Shift supply up (lower y in SVG = higher price)
      var supplyPoints = curveType === 'demand' ? oppPoints : mainCurvePoints;
      var shiftedSupply = supplyPoints.map(function (p) { return [p[0], p[1] - taxPixels]; });

      // New equilibrium with demand and shifted supply
      var demandPoints = curveType === 'demand' ? mainCurvePoints : oppPoints;
      var newEqRaw = polyIntersect2(demandPoints, shiftedSupply);
      newEqX = newEqRaw ? newEqRaw[0] : eqX - W * 0.05;
      newEqY = newEqRaw ? newEqRaw[1] : eqY - taxPixels * 0.4;

      // The new supply price received by producers (on original supply at newEqX):
      // Find y on original supply curve at x = newEqX
      function yOnPoly(pts, targetX) {
        for (var i = 0; i < pts.length - 1; i++) {
          var x0 = pts[i][0], y0 = pts[i][1];
          var x1 = pts[i+1][0], y1 = pts[i+1][1];
          if ((x0 <= targetX && targetX <= x1) || (x1 <= targetX && targetX <= x0)) {
            var t2 = (targetX - x0) / (x1 - x0);
            return y0 + t2 * (y1 - y0);
          }
        }
        return pts[pts.length - 1][1];
      }

      var prodPriceY = yOnPoly(supplyPoints, newEqX);
      var consPriceY = newEqY; // price consumers pay
      var prodPriceYclamp = Math.max(prodPriceY, consPriceY + taxPixels * 0.1);

      // Draw tax wedge (vertical bar between consumer price and producer price)
      // Consumer price = consPriceY (lower y = higher price)
      // Producer price = prodPriceYclamp (higher y = lower price)
      // Tax rect
      taxParts.push(
        '<rect x="' + r2(newEqX - 14) + '" y="' + r2(consPriceY) + '"' +
        ' width="28" height="' + r2(prodPriceYclamp - consPriceY) + '"' +
        ' fill="' + ROSE + '" opacity="0.18" rx="2"/>'
      );

      // Consumer burden bracket (top portion)
      taxParts.push(guide(0, consPriceY, newEqX, consPriceY));
      taxParts.push(guide(0, eqY, eqX, eqY));
      // Bracket arrow
      taxParts.push(
        '<line x1="' + r2(newEqX + 22) + '" y1="' + r2(consPriceY) + '"' +
        ' x2="' + r2(newEqX + 22) + '" y2="' + r2(eqY) + '"' +
        ' stroke="' + ROSE + '" stroke-width="1.5" stroke-dasharray="2 2"/>'
      );
      taxParts.push(
        pillLabel(newEqX + 26, (consPriceY + eqY) / 2 + 4, 'Consumer burden', ROSE, 9, false, 'start')
      );

      // Producer burden bracket
      taxParts.push(
        '<line x1="' + r2(newEqX + 22) + '" y1="' + r2(eqY) + '"' +
        ' x2="' + r2(newEqX + 22) + '" y2="' + r2(prodPriceYclamp) + '"' +
        ' stroke="' + PURPLE + '" stroke-width="1.5" stroke-dasharray="2 2"/>'
      );
      taxParts.push(
        pillLabel(newEqX + 26, (eqY + prodPriceYclamp) / 2 + 4, 'Producer burden', PURPLE, 9, false, 'start')
      );

      // Total tax label
      taxParts.push(
        pillLabel(newEqX - 16, consPriceY - 8, 'Tax = T', ROSE, 10, true, 'end')
      );

      // Shifted supply curve (dashed, same colour as supply)
      var ssColour = curveType === 'demand' ? GREEN : curveColour;
      taxParts.push(
        '<path d="' + polyD2(shiftedSupply) + '"' +
        ' fill="none" stroke="' + esc(ssColour) + '" stroke-width="2"' +
        ' stroke-dasharray="4 3" opacity="0.65"' +
        ' stroke-linecap="round" stroke-linejoin="round"/>'
      );
      var ssLast = shiftedSupply[shiftedSupply.length - 1];
      taxParts.push(pillLabel(ssLast[0] - 28, ssLast[1] - 10, 'S + Tax', ssColour, 10, true, 'start'));

      // New equilibrium
      taxParts.push(guide(newEqX, newEqY, newEqX, H));
      taxParts.push(eqDot(newEqX, newEqY, ROSE));
      taxParts.push(
        '<text x="' + r2(newEqX + 7) + '" y="' + r2(newEqY - 6) + '"' +
        ' font-size="10" font-weight="700" fill="' + ROSE + '">' + esc('E₂') + '</text>'
      );
    }

    // ── Elasticity label ────────────────────────────────────────────────
    // Compute PED/PES label string
    var pedLabel = '';
    if (elasticity === 'perfectly-elastic')    pedLabel = curveType === 'demand' ? 'PED = ∞' : 'PES = ∞';
    else if (elasticity === 'perfectly-inelastic') pedLabel = curveType === 'demand' ? 'PED = 0' : 'PES = 0';
    else if (elasticity === 'elastic')         pedLabel = curveType === 'demand' ? 'PED > 1' : 'PES > 1';
    else if (elasticity === 'unit')            pedLabel = curveType === 'demand' ? 'PED = 1' : 'PES = 1';
    else if (elasticity === 'inelastic')       pedLabel = curveType === 'demand' ? 'PED < 1' : 'PES < 1';

    // ── Assemble ────────────────────────────────────────────────────────
    var parts = [];

    // Defs (marker for axes)
    parts.push(
      '<defs>' +
      '<marker id="' + idPfx + '-arr" viewBox="0 0 10 10" refX="9" refY="5"' +
      ' markerWidth="6" markerHeight="6" orient="auto">' +
      '<path d="M 0 0 L 10 5 L 0 10 z" fill="' + AXIS + '"/>' +
      '</marker>' +
      '</defs>'
    );

    // Plot group
    parts.push('<g transform="translate(' + padL + ',' + padT + ')">');

    // Title
    parts.push(
      '<text x="' + r2(W / 2) + '" y="-30"' +
      ' font-size="13" font-weight="700" fill="' + AXIS + '"' +
      ' text-anchor="middle" letter-spacing="0.3">' + esc(title) + '</text>'
    );

    // PED/PES label badge
    if (pedLabel) {
      parts.push(
        '<rect x="' + r2(W - 74) + '" y="-26" width="72" height="20"' +
        ' rx="4" fill="' + (curveType === 'demand' ? '#EFF6FF' : '#ECFDF5') + '"' +
        ' stroke="' + (curveType === 'demand' ? '#93C5FD' : '#6EE7B7') + '"' +
        ' stroke-width="0.8"/>'
      );
      parts.push(
        '<text x="' + r2(W - 38) + '" y="-11"' +
        ' font-size="11" font-weight="700" fill="' + esc(curveColour) + '"' +
        ' text-anchor="middle">' + esc(pedLabel) + '</text>'
      );
    }

    // Y axis
    parts.push(
      '<line x1="0" y1="' + H + '" x2="0" y2="0"' +
      ' stroke="' + AXIS + '" stroke-width="1.8"/>'
    );
    parts.push(arrow(0, H * 0.4, 0, 0, 7, AXIS));
    parts.push(
      '<text x="' + r2(-H / 2) + '" y="-38"' +
      ' transform="rotate(-90)"' +
      ' font-size="12" font-weight="600" fill="' + AXIS + '"' +
      ' text-anchor="middle">' + esc('Price (P)') + '</text>'
    );

    // X axis
    parts.push(
      '<line x1="0" y1="' + H + '" x2="' + W + '" y2="' + H + '"' +
      ' stroke="' + AXIS + '" stroke-width="1.8"/>'
    );
    parts.push(arrow(W * 0.7, H, W, H, 7, AXIS));
    parts.push(
      '<text x="' + r2(W / 2) + '" y="' + r2(H + 36) + '"' +
      ' font-size="12" font-weight="600" fill="' + AXIS + '"' +
      ' text-anchor="middle">' + esc('Quantity (Q)') + '</text>'
    );

    // Opposing curve
    parts.push(
      '<path d="' + polyD2(oppPoints) + '"' +
      ' fill="none" stroke="' + esc(oppColour) + '" stroke-width="2.2"' +
      ' stroke-linecap="round" stroke-linejoin="round"/>'
    );
    var oppLast = oppPoints[oppPoints.length - 1];
    parts.push(pillLabel(oppLast[0] + 4, oppLast[1] - 2, oppLabel, oppColour, 12, true, 'start'));

    // Main curve
    parts.push(
      '<path d="' + polyD2(mainCurvePoints) + '"' +
      ' fill="none" stroke="' + esc(curveColour) + '" stroke-width="2.5"' +
      ' stroke-linecap="round" stroke-linejoin="round"/>'
    );
    var mainLast = mainCurvePoints[mainCurvePoints.length - 1];
    parts.push(pillLabel(mainLast[0] + 4, mainLast[1] - 2, curveLabel, curveColour, 12, true, 'start'));

    // Tax overlay
    if (showTax) {
      taxParts.forEach(function (t) { parts.push(t); });
    }

    // Original equilibrium
    parts.push(guide(eqX, eqY, eqX, H));
    parts.push(guide(0, eqY, eqX, eqY));
    parts.push(eqDot(eqX, eqY, BLUE));
    parts.push(
      '<text x="' + r2(eqX + 7) + '" y="' + r2(eqY - 6) + '"' +
      ' font-size="11" font-weight="700" fill="' + BLUE + '">' + esc('E₁') + '</text>'
    );

    parts.push('</g>');

    return svgWrap(VW, VH, null, parts.join('\n'), idPfx);
  }

  // ── REGISTER ──────────────────────────────────────────────────────────

  global.ECONOS_DIAGRAMS = global.ECONOS_DIAGRAMS || {};
  global.ECONOS_DIAGRAMS.multiplierDiagram = multiplierDiagram;
  global.ECONOS_DIAGRAMS.elasticityDiagram = elasticityDiagram;

}(typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : this));
