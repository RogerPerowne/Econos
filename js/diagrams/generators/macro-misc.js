/**
 * macro-misc.js — Econos diagram generators for the "macro-misc" family
 * ======================================================================
 * Registers four generators onto window.ECONOS_DIAGRAMS.
 * Depends on window.EconSvg (js/diagrams/econ-svg.js) loading first.
 *
 * Generators:
 *   ECONOS_DIAGRAMS.phillipsCurve(cfg)     — Phillips Curve (SRPC/LRPC/NAIRU)
 *   ECONOS_DIAGRAMS.jCurveDiagram(cfg)     — J-Curve (depreciation / trade balance)
 *   ECONOS_DIAGRAMS.fortyFiveDiagram(cfg)  — 45-degree national income diagram
 *   ECONOS_DIAGRAMS.growthDiagram(cfg)     — Economic growth: sources / sustainability / Kuznets
 */

(function (global) {
  'use strict';

  /* ── CONSTANTS ─────────────────────────────────────────────────────── */

  const FONT = 'Inter, system-ui, sans-serif';
  const AXIS_COL = '#334155';
  const GUIDE_COL = '#94A3B8';

  // House-rule curve colours
  const C_BLUE   = '#2563EB';   // AD, demand, SRPC, injections
  const C_AMBER  = '#D97706';   // SRAS, cost-push
  const C_GREEN  = '#059669';   // LRAS, LRPC, supply
  const C_PURPLE = '#7C3AED';   // expectations / Friedman
  const C_ROSE   = '#BE123C';   // J-curve bottom, Kuznets inequality
  const C_SLATE  = '#475569';   // 45-degree line, generic reference

  const DASH = '4 3';
  const GUIDE_DASH = '3 3';

  /* ── SVG HELPERS (standalone — does not call EconSvg so these generators
        also syntax-check cleanly even without EconSvg loaded) ────────── */

  /** Escape XML/HTML special characters */
  function esc(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  /** Arrowhead polygon pointing from (x1,y1) toward (x2,y2) */
  function arrow(x1, y1, x2, y2, col, sz) {
    const s = sz || 7;
    const a = Math.atan2(y2 - y1, x2 - x1);
    const pts = [
      [x2, y2],
      [x2 - s * Math.cos(a - 0.4), y2 - s * Math.sin(a - 0.4)],
      [x2 - s * Math.cos(a + 0.4), y2 - s * Math.sin(a + 0.4)],
    ].map(([px, py]) => px.toFixed(2) + ',' + py.toFixed(2)).join(' ');
    return '<polygon points="' + pts + '" fill="' + esc(col || AXIS_COL) + '"/>';
  }

  /** Dashed guide line from a point to an axis */
  function guide(x1, y1, x2, y2) {
    return '<line x1="' + x1.toFixed(2) + '" y1="' + y1.toFixed(2) +
           '" x2="' + x2.toFixed(2) + '" y2="' + y2.toFixed(2) +
           '" stroke="' + GUIDE_COL + '" stroke-width="1" stroke-dasharray="' + GUIDE_DASH + '"/>';
  }

  /** Equilibrium dot (filled) with guide lines */
  function dot(x, y, col, w, h, lbl, lblAnchor) {
    var parts = [];
    if (w !== undefined && h !== undefined) {
      parts.push(guide(x, y, x, h));   // vertical to x-axis
      parts.push(guide(0, y, x, y));   // horizontal to y-axis
    }
    parts.push('<circle cx="' + x.toFixed(2) + '" cy="' + y.toFixed(2) +
               '" r="5" fill="' + esc(col) + '" stroke="white" stroke-width="1.5"/>');
    if (lbl) {
      var anchor = lblAnchor || 'start';
      var lx = anchor === 'end' ? x - 8 : x + 8;
      parts.push(
        '<text x="' + lx.toFixed(1) + '" y="' + (y - 6).toFixed(1) + '" ' +
        'font-size="11" font-weight="700" fill="' + esc(col) + '" ' +
        'text-anchor="' + anchor + '">' + esc(lbl) + '</text>'
      );
    }
    return parts.join('\n');
  }

  /** Polyline from array of [x,y] in pixel coords */
  function polyline(pts, col, sw, dasharray, opacity) {
    var d = pts.map(function (p, i) {
      return (i === 0 ? 'M' : 'L') + p[0].toFixed(2) + ',' + p[1].toFixed(2);
    }).join(' ');
    var attrs = 'fill="none" stroke="' + esc(col) + '" stroke-width="' + (sw || 2) + '" ' +
                'stroke-linecap="round" stroke-linejoin="round"';
    if (dasharray) attrs += ' stroke-dasharray="' + dasharray + '"';
    if (opacity !== undefined && opacity !== 1) attrs += ' opacity="' + opacity + '"';
    return '<path d="' + d + '" ' + attrs + '/>';
  }

  /** Text label with optional white pill background */
  function lbl(x, y, text, col, opts) {
    var o = opts || {};
    var fs = o.small ? 11 : (o.fs || 12);
    var fw = o.bold !== false ? '700' : '400';
    var anchor = o.anchor || 'start';
    var parts = [];
    if (o.pill) {
      var cw = fs * 0.58;
      var tw = String(text).length * cw + 12;
      var ph = fs + 8;
      var rx = anchor === 'middle' ? x - tw / 2 : anchor === 'end' ? x - tw : x;
      parts.push(
        '<rect x="' + rx.toFixed(1) + '" y="' + (y - ph + 2).toFixed(1) + '" ' +
        'width="' + tw.toFixed(1) + '" height="' + ph.toFixed(1) + '" ' +
        'rx="4" fill="white" fill-opacity="0.9" stroke="#E2E8F0" stroke-width="0.5"/>'
      );
    }
    parts.push(
      '<text x="' + x.toFixed(1) + '" y="' + y.toFixed(1) + '" ' +
      'font-size="' + fs + '" font-weight="' + fw + '" fill="' + esc(col) + '" ' +
      'text-anchor="' + anchor + '">' + esc(text) + '</text>'
    );
    return parts.join('\n');
  }

  /** Standard axes (Y vertical, X horizontal) with arrowheads and labels */
  function axes(w, h, xLabel, yLabel) {
    var parts = [];
    // Y axis
    parts.push('<line x1="0" y1="' + h + '" x2="0" y2="0" stroke="' + AXIS_COL + '" stroke-width="1.8"/>');
    parts.push(arrow(0, h * 0.25, 0, 0, AXIS_COL));
    // X axis
    parts.push('<line x1="0" y1="' + h + '" x2="' + w + '" y2="' + h + '" stroke="' + AXIS_COL + '" stroke-width="1.8"/>');
    parts.push(arrow(w * 0.8, h, w, h, AXIS_COL));
    // Y label
    if (yLabel) {
      parts.push(
        '<text x="' + (-(h / 2)).toFixed(1) + '" y="-32" transform="rotate(-90)" ' +
        'text-anchor="middle" font-size="12" font-weight="600" fill="' + AXIS_COL + '" letter-spacing="0.3">' +
        esc(yLabel) + '</text>'
      );
    }
    // X label
    if (xLabel) {
      parts.push(
        '<text x="' + (w / 2).toFixed(1) + '" y="' + (h + 36) + '" ' +
        'text-anchor="middle" font-size="12" font-weight="600" fill="' + AXIS_COL + '" letter-spacing="0.3">' +
        esc(xLabel) + '</text>'
      );
    }
    return parts.join('\n');
  }

  /** Wrap children in a full <svg> with padding-translate */
  function svg(vbW, vbH, children, pad) {
    var p = pad || { left: 48, top: 36, right: 56, bottom: 44 };
    var inner = Array.isArray(children) ? children.join('\n') : children;
    return (
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + vbW + ' ' + vbH + '" ' +
      'width="' + vbW + '" height="' + vbH + '" style="font-family:' + FONT + ';overflow:visible;">\n' +
      '  <g transform="translate(' + p.left + ',' + p.top + ')">\n' +
      inner + '\n' +
      '  </g>\n' +
      '</svg>'
    );
  }

  /* ── BEZIER / CURVE UTILITIES ─────────────────────────────────────── */

  /**
   * Sample a cubic Bezier curve at N points, returning [[x,y],…].
   * Control points: [[x0,y0],[x1,y1],[x2,y2],[x3,y3]]
   */
  function sampleBezier(pts, n) {
    var out = [];
    for (var i = 0; i <= n; i++) {
      var t = i / n;
      var mt = 1 - t;
      var x = mt*mt*mt*pts[0][0] + 3*mt*mt*t*pts[1][0] + 3*mt*t*t*pts[2][0] + t*t*t*pts[3][0];
      var y = mt*mt*mt*pts[0][1] + 3*mt*mt*t*pts[1][1] + 3*mt*t*t*pts[2][1] + t*t*t*pts[3][1];
      out.push([x, y]);
    }
    return out;
  }

  /* ══════════════════════════════════════════════════════════════════════
     1. PHILLIPS CURVE
     ══════════════════════════════════════════════════════════════════════
     cfg.view        — 'original' | 'expectations-shift' | 'stagflation' | 'friedman-phelps'
     cfg.showLRPC    — boolean (default true for views that feature it)
     cfg.showNAIRU   — boolean (default true for views that feature it)
     cfg.showSRPC    — boolean (default true)
     cfg.showSRPC2   — show a second (shifted) SRPC (default: view-dependent)
     cfg.id          — SVG id prefix (default 'pc')
  ══════════════════════════════════════════════════════════════════════ */

  function phillipsCurve(cfg) {
    var c = cfg || {};
    var view = c.view || 'original';
    var id   = c.id   || 'pc';

    // Viewport & plot area
    var VW = 640, VH = 380;
    var pad = { left: 52, top: 36, right: 72, bottom: 48 };
    var W = VW - pad.left - pad.right;   // 516
    var H = VH - pad.top  - pad.bottom;  // 296

    // ── Curve geometry ──────────────────────────────────────────────
    // Normalised coords → pixel helpers
    var px = function (nx) { return nx * W; };
    var py = function (ny) { return ny * H; };

    // SRPC1: downward-sloping, inflation (y-axis) vs unemployment (x-axis)
    // High inflation @ low unemployment → low inflation @ high unemployment
    var srpc1Pts = sampleBezier([
      [px(0.05), py(0.08)],
      [px(0.15), py(0.35)],
      [px(0.55), py(0.72)],
      [px(0.92), py(0.92)],
    ], 40);

    // SRPC2 (shifted right/down — higher expected inflation)
    var srpc2Pts = sampleBezier([
      [px(0.18), py(0.08)],
      [px(0.30), py(0.30)],
      [px(0.68), py(0.65)],
      [px(0.92), py(0.82)],
    ], 40);

    // SRPC3 (Stagflation shift — further right/up)
    var srpc3Pts = sampleBezier([
      [px(0.32), py(0.06)],
      [px(0.46), py(0.25)],
      [px(0.76), py(0.58)],
      [px(0.92), py(0.75)],
    ], 40);

    // NAIRU x position (normalised 0.38)
    var nauX = px(0.38);

    // LRPC: vertical line at NAIRU
    var lrpcTop    = py(0.02);
    var lrpcBottom = py(0.95);

    // ── Defaults per view ───────────────────────────────────────────
    var showSRPC  = c.showSRPC  !== undefined ? c.showSRPC  : true;
    var showSRPC2 = c.showSRPC2 !== undefined ? c.showSRPC2 :
                    (view === 'expectations-shift' || view === 'friedman-phelps');
    var showSRPC3 = c.showSRPC3 !== undefined ? c.showSRPC3 :
                    (view === 'stagflation');
    var showLRPC  = c.showLRPC  !== undefined ? c.showLRPC  :
                    (view !== 'original');
    var showNAIRU = c.showNAIRU !== undefined ? c.showNAIRU :
                    (view !== 'original');

    var parts = [];

    // Axes
    parts.push(axes(W, H, 'Unemployment rate (%)', 'Inflation rate (%)'));

    // LRPC (vertical green)
    if (showLRPC) {
      parts.push(polyline([[nauX, lrpcTop],[nauX, lrpcBottom]], C_GREEN, 2.2));
      parts.push(lbl(nauX + 5, lrpcTop + 12, 'LRPC', C_GREEN, { pill: true }));
    }

    // NAIRU marker
    if (showNAIRU) {
      parts.push(
        '<line x1="' + nauX.toFixed(2) + '" y1="' + H + '" ' +
        'x2="' + nauX.toFixed(2) + '" y2="' + (H + 4) + '" ' +
        'stroke="' + AXIS_COL + '" stroke-width="1.5"/>'
      );
      parts.push(
        '<text x="' + nauX.toFixed(1) + '" y="' + (H + 18) + '" ' +
        'font-size="10" text-anchor="middle" fill="' + AXIS_COL + '">' +
        esc('NAIRU') + '</text>'
      );
    }

    // SRPC1
    if (showSRPC) {
      var srpc1Dashed = (view === 'expectations-shift' || view === 'stagflation' || view === 'friedman-phelps');
      parts.push(polyline(srpc1Pts, C_BLUE, 2, srpc1Dashed ? DASH : null, srpc1Dashed ? 0.55 : 1));
      var s1Last = srpc1Pts[srpc1Pts.length - 1];
      parts.push(lbl(s1Last[0] + 5, s1Last[1], srpc1Dashed ? 'SRPC₁' : 'SRPC', C_BLUE, { pill: true, small: true }));
    }

    // SRPC2 (shifted)
    if (showSRPC2) {
      parts.push(polyline(srpc2Pts, C_BLUE, 2.2));
      var s2Last = srpc2Pts[srpc2Pts.length - 1];
      parts.push(lbl(s2Last[0] + 5, s2Last[1], 'SRPC₂', C_BLUE, { pill: true, small: true }));

      // Shift arrow between curves (mid-point region)
      var midIdx = Math.floor(srpc1Pts.length / 2);
      var from   = srpc1Pts[midIdx];
      var to     = srpc2Pts[midIdx];
      parts.push(
        '<line x1="' + from[0].toFixed(2) + '" y1="' + from[1].toFixed(2) +
        '" x2="' + (to[0] - 6).toFixed(2) + '" y2="' + (to[1] - 6).toFixed(2) +
        '" stroke="' + C_PURPLE + '" stroke-width="1.4" stroke-dasharray="3 2" opacity="0.7"/>'
      );
      parts.push(arrow(from[0], from[1], to[0] - 4, to[1] - 4, C_PURPLE, 6));
    }

    // SRPC3 (stagflation)
    if (showSRPC3) {
      parts.push(polyline(srpc3Pts, C_AMBER, 2.2));
      var s3Last = srpc3Pts[srpc3Pts.length - 1];
      parts.push(lbl(s3Last[0] + 5, s3Last[1], 'SRPC₃', C_AMBER, { pill: true, small: true }));
    }

    // ── View-specific annotations ──────────────────────────────────
    if (view === 'original') {
      // Equilibrium A on SRPC1
      var eA = srpc1Pts[12];
      parts.push(dot(eA[0], eA[1], C_BLUE, W, H, 'A'));
      // Trade-off annotation
      parts.push(lbl(px(0.55), py(0.20), 'Short-run trade-off', C_SLATE,
                     { anchor: 'middle', bold: false, small: true, pill: true }));
    }

    if (view === 'expectations-shift') {
      // Points A (SRPC1) and B (SRPC2) at same unemployment rate
      var eA2 = srpc1Pts[10];
      var eB2 = srpc2Pts[10];
      parts.push(dot(eA2[0], eA2[1], C_BLUE, W, H, 'A'));
      parts.push(dot(eB2[0], eB2[1], C_BLUE, W, H, 'B'));
      // Label: rising expectations
      parts.push(lbl(px(0.60), py(0.12), 'Expectations rise → SRPC shifts up', C_PURPLE,
                     { anchor: 'middle', small: true, pill: true }));
    }

    if (view === 'stagflation') {
      var eS1 = srpc1Pts[8];
      var eS3 = srpc3Pts[4];
      parts.push(dot(eS1[0], eS1[1], C_BLUE, W, H, 'A'));
      parts.push(dot(eS3[0], eS3[1], C_AMBER, W, H, 'B'));
      parts.push(lbl(px(0.50), py(0.07), 'Supply shock → stagflation', C_AMBER,
                     { anchor: 'middle', small: true, pill: true }));
    }

    if (view === 'friedman-phelps') {
      // Long-run at NAIRU — expectations-augmented model
      // Show equilibrium on SRPC1 and SRPC2 both at NAIRU x
      var nauIdx1 = 0;
      var minDist1 = Infinity;
      srpc1Pts.forEach(function (p, i) {
        var d = Math.abs(p[0] - nauX);
        if (d < minDist1) { minDist1 = d; nauIdx1 = i; }
      });
      var nauIdx2 = 0;
      var minDist2 = Infinity;
      srpc2Pts.forEach(function (p, i) {
        var d = Math.abs(p[0] - nauX);
        if (d < minDist2) { minDist2 = d; nauIdx2 = i; }
      });
      var eF1 = srpc1Pts[nauIdx1];
      var eF2 = srpc2Pts[nauIdx2];
      parts.push(dot(eF1[0], eF1[1], C_BLUE, W, H, 'A'));
      parts.push(dot(eF2[0], eF2[1], C_PURPLE, W, H, 'B'));
      // Vertical arrow between the two equilibria on LRPC
      parts.push(
        '<line x1="' + (nauX - 18).toFixed(2) + '" y1="' + eF1[1].toFixed(2) +
        '" x2="' + (nauX - 18).toFixed(2) + '" y2="' + (eF2[1] + 6).toFixed(2) +
        '" stroke="' + C_PURPLE + '" stroke-width="1.4" stroke-dasharray="3 2" opacity="0.8"/>'
      );
      parts.push(arrow(nauX - 18, eF1[1], nauX - 18, eF2[1] + 4, C_PURPLE, 6));
      parts.push(lbl(px(0.56), py(0.10), 'No long-run trade-off', C_GREEN,
                     { anchor: 'middle', small: true, pill: true }));
    }

    return svg(VW, VH, parts, pad);
  }


  /* ══════════════════════════════════════════════════════════════════════
     2. J-CURVE DIAGRAM
     ══════════════════════════════════════════════════════════════════════
     cfg.showMarshallLerner — boolean (default true)
     cfg.showPhases         — boolean (default true, annotates the 3 phases)
     cfg.id                 — SVG id prefix (default 'jc')
  ══════════════════════════════════════════════════════════════════════ */

  function jCurveDiagram(cfg) {
    var c = cfg || {};
    var id = c.id || 'jc';
    var showML     = c.showMarshallLerner !== undefined ? c.showMarshallLerner : true;
    var showPhases = c.showPhases        !== undefined ? c.showPhases        : true;

    var VW = 640, VH = 360;
    var pad = { left: 52, top: 36, right: 72, bottom: 48 };
    var W = VW - pad.left - pad.right;  // 516
    var H = VH - pad.top  - pad.bottom; // 276

    var px = function (nx) { return nx * W; };
    var py = function (ny) { return ny * H; };

    // Zero line at y=50% of plot height
    var zeroY = py(0.50);

    // Depreciation event x
    var depX = px(0.15);

    // J-curve control points:
    // Starts at zero balance, dips below after depreciation, then recovers above
    var jCtrl = [
      [px(0.00), zeroY],          // start (pre-depreciation, zero surplus as baseline)
      [px(0.06), zeroY],          // flat run-up to depreciation
      [px(0.16), zeroY - 4],      // just before depreciation — slight up
      [px(0.22), zeroY + py(0.28)], // immediate worsening (J dip)
      [px(0.38), zeroY + py(0.30)], // trough — worst point
      [px(0.58), zeroY + py(0.08)], // recovery phase
      [px(0.80), zeroY - py(0.22)], // improvement above zero
      [px(0.95), zeroY - py(0.30)], // sustained improvement
    ];

    // Sample with 60 points for a smooth curve
    // We'll chain two bezier segments
    var seg1 = sampleBezier([jCtrl[0], jCtrl[1], jCtrl[2], jCtrl[3]], 20);
    var seg2 = sampleBezier([jCtrl[3], jCtrl[4], jCtrl[5], jCtrl[6]], 20);
    var seg3 = sampleBezier([jCtrl[6], jCtrl[7], jCtrl[7], jCtrl[7]], 10);
    var jPts = seg1.concat(seg2.slice(1)).concat(seg3.slice(1));

    // Trough point
    var troughIdx = 0;
    var maxY = -Infinity;
    jPts.forEach(function (p, i) { if (p[1] > maxY) { maxY = p[1]; troughIdx = i; } });
    var trough = jPts[troughIdx];

    // Recovery zero-crossing
    var crossIdx = 0;
    for (var i = troughIdx; i < jPts.length - 1; i++) {
      if (jPts[i][1] >= zeroY && jPts[i+1][1] <= zeroY) {
        crossIdx = i;
        break;
      }
    }
    // If not found (floating point), use a reasonable estimate
    if (crossIdx === 0) crossIdx = Math.floor(jPts.length * 0.62);

    var parts = [];

    // Zero balance reference line
    parts.push(
      '<line x1="0" y1="' + zeroY.toFixed(2) + '" x2="' + W + '" y2="' + zeroY.toFixed(2) + '" ' +
      'stroke="' + GUIDE_COL + '" stroke-width="1" stroke-dasharray="' + GUIDE_DASH + '" opacity="0.7"/>'
    );
    parts.push(lbl(W - 2, zeroY - 6, '0', C_SLATE, { anchor: 'end', bold: false, small: true }));

    // Depreciation event vertical
    parts.push(
      '<line x1="' + depX.toFixed(2) + '" y1="0" x2="' + depX.toFixed(2) + '" y2="' + H + '" ' +
      'stroke="' + C_AMBER + '" stroke-width="1.4" stroke-dasharray="4 3" opacity="0.7"/>'
    );
    parts.push(lbl(depX + 4, py(0.06), 'Depreciation', C_AMBER, { small: true, pill: true }));

    // J-Curve
    parts.push(polyline(jPts, C_BLUE, 2.5));
    // Curve label at end
    var jEnd = jPts[jPts.length - 1];
    parts.push(lbl(jEnd[0] + 5, jEnd[1] - 4, 'Trade balance', C_BLUE, { small: true, pill: true }));

    // Trough dot
    parts.push(dot(trough[0], trough[1], C_ROSE, W, H, 'Trough'));

    // Recovery crossing
    if (crossIdx > 0) {
      var crossPt = jPts[crossIdx];
      parts.push(dot(crossPt[0], crossPt[1], C_GREEN, undefined, undefined, 'Breaks even'));
    }

    // Phase annotations
    if (showPhases) {
      // Phase 1: Initial worsening
      parts.push(lbl(px(0.29), py(0.88),
        '1 Volume effect', C_ROSE, { anchor: 'middle', small: true, pill: true }));
      parts.push(lbl(px(0.29), py(0.96),
        '(prices adjust faster than quantities)', C_SLATE, { anchor: 'middle', small: true, bold: false }));

      // Phase 2: Recovery
      parts.push(lbl(px(0.60), py(0.74),
        '2 Substitution effect', C_BLUE, { anchor: 'middle', small: true, pill: true }));
      parts.push(lbl(px(0.60), py(0.82),
        'Exports rise, imports fall', C_SLATE, { anchor: 'middle', small: true, bold: false }));

      // Phase 3: Sustained improvement
      parts.push(lbl(px(0.85), py(0.22),
        '3 Improvement', C_GREEN, { anchor: 'middle', small: true, pill: true }));
    }

    // Marshall-Lerner callout
    if (showML) {
      var mlX = px(0.54);
      var mlY = py(0.14);
      var bw = 190, bh = 46;
      parts.push(
        '<rect x="' + mlX.toFixed(1) + '" y="' + mlY.toFixed(1) + '" ' +
        'width="' + bw + '" height="' + bh + '" rx="6" ' +
        'fill="#FFFBEB" stroke="#FCD34D" stroke-width="1"/>'
      );
      parts.push(
        '<text x="' + (mlX + 10).toFixed(1) + '" y="' + (mlY + 16).toFixed(1) + '" ' +
        'font-size="12" font-weight="700" fill="#92400E">' +
        esc('Marshall-Lerner Condition') + '</text>'
      );
      parts.push(
        '<text x="' + (mlX + 10).toFixed(1) + '" y="' + (mlY + 32).toFixed(1) + '" ' +
        'font-size="11" fill="#B45309">' +
        esc('PEDₓ + PEDₘ > 1 → depreciation improves balance') + '</text>'
      );
    }

    // Axes (Y = Trade Balance, X = Time)
    parts.push(axes(W, H, 'Time', 'Trade balance'));

    return svg(VW, VH, parts, pad);
  }


  /* ══════════════════════════════════════════════════════════════════════
     3. FORTY-FIVE DEGREE DIAGRAM  (Keynesian cross / J=W)
     ══════════════════════════════════════════════════════════════════════
     cfg.showEquilibrium   — boolean (default true)
     cfg.showInventory     — boolean (default false) — show inventory gap arrow
     cfg.showShift         — boolean (default false) — show AD/E shift
     cfg.id                — SVG id prefix (default 'fd')
  ══════════════════════════════════════════════════════════════════════ */

  function fortyFiveDiagram(cfg) {
    var c = cfg || {};
    var id = c.id || 'fd';
    var showEq  = c.showEquilibrium !== undefined ? c.showEquilibrium : true;
    var showInv = c.showInventory   !== undefined ? c.showInventory   : false;
    var showShift = c.showShift     !== undefined ? c.showShift       : false;

    var VW = 640, VH = 400;
    var pad = { left: 56, top: 36, right: 72, bottom: 52 };
    var W = VW - pad.left - pad.right;  // 512
    var H = VH - pad.top  - pad.bottom; // 312

    var px = function (nx) { return nx * W; };
    var py = function (ny) { return ny * H; };

    // ── 45-degree line ──────────────────────────────────────────────
    // Y = X (planned = actual), maps full plot
    var fortyFivePts = [[0, H], [H * 0.96, H - H * 0.96]];  // pixel slope 1 (since axes equal scale)
    // We want a true 45deg. Map so that x goes 0→W but the line has slope -1 in screen coords
    // (y decreases as x increases). We draw from origin to the min extent.
    var ext45 = Math.min(W, H) * 0.94;
    var pts45 = [[0, H], [ext45, H - ext45]];

    // ── Expenditure (E) line — upward sloping, less than 45deg ─────
    // E = C + I + G + NX (autonomous + MPC*Y)
    // Passes through equilibrium at Y*
    var mpc = 0.65;  // marginal propensity to consume
    var auto = py(0.22);  // autonomous expenditure (Y-intercept in pixel coords)
    // Y* where E line crosses 45deg: auto + mpc*Y* = H - Y* (in pixel, y=H-x)
    // In screen: E_y = H - auto - mpc*(W_x), 45_y = H - W_x
    // Equilibrium when: H - auto - mpc*Wx = H - Wx => Wx*(1 - mpc) = auto => Wx = auto/(1-mpc)
    var eqX = auto / (1 - mpc);   // x-pixel of equilibrium
    var eqY = H - eqX;            // y on 45-deg line

    var ePts = [
      [0, H - auto],          // y-intercept (x=0, E=autonomous expenditure)
      [W * 0.95, H - auto - mpc * W * 0.95]  // right end
    ];

    // Shifted E line (higher autonomous spending — e.g. fiscal stimulus)
    var auto2 = auto + py(0.12);
    var eqX2 = auto2 / (1 - mpc);
    var eqY2 = H - eqX2;
    var ePts2 = [
      [0, H - auto2],
      [W * 0.95, H - auto2 - mpc * W * 0.95]
    ];

    var parts = [];

    // 45-degree line (slate)
    parts.push(polyline(pts45, C_SLATE, 1.8, DASH, 0.45));
    parts.push(lbl(pts45[1][0] - 2, pts45[1][1] - 10, '45°', C_SLATE,
                   { small: true, bold: false, anchor: 'end', pill: true }));

    // E line (original)
    if (showShift) {
      parts.push(polyline(ePts, C_BLUE, 2, DASH, 0.55));
      parts.push(lbl(ePts[1][0] + 5, ePts[1][1], 'E₁', C_BLUE, { small: true, pill: true }));
    } else {
      parts.push(polyline(ePts, C_BLUE, 2.2));
      parts.push(lbl(ePts[1][0] + 5, ePts[1][1], 'E = C+I+G+NX', C_BLUE, { small: true, pill: true }));
    }

    // Shifted E line
    if (showShift) {
      parts.push(polyline(ePts2, C_BLUE, 2.2));
      parts.push(lbl(ePts2[1][0] + 5, ePts2[1][1], 'E₂', C_BLUE, { small: true, pill: true }));

      // Shift arrow
      var midX = W * 0.22;
      var e1midY = H - auto  - mpc * midX;
      var e2midY = H - auto2 - mpc * midX;
      parts.push(
        '<line x1="' + midX.toFixed(2) + '" y1="' + (e1midY - 3).toFixed(2) +
        '" x2="' + midX.toFixed(2) + '" y2="' + (e2midY + 3).toFixed(2) +
        '" stroke="' + C_PURPLE + '" stroke-width="1.4" stroke-dasharray="3 2" opacity="0.8"/>'
      );
      parts.push(arrow(midX, e1midY - 2, midX, e2midY + 2, C_PURPLE, 6));
      parts.push(lbl(midX + 6, (e1midY + e2midY) / 2, 'ΔG or ΔI', C_PURPLE,
                     { small: true, pill: true }));
    }

    // Equilibrium
    if (showEq) {
      parts.push(dot(eqX, eqY, C_BLUE, W, H, 'Y*'));
      // Y* label on x-axis
      parts.push(
        '<line x1="' + eqX.toFixed(2) + '" y1="' + H + '" ' +
        'x2="' + eqX.toFixed(2) + '" y2="' + (H + 4) + '" ' +
        'stroke="' + AXIS_COL + '" stroke-width="1.4"/>'
      );
      parts.push(
        '<text x="' + eqX.toFixed(1) + '" y="' + (H + 18) + '" ' +
        'font-size="11" text-anchor="middle" font-weight="700" fill="' + C_BLUE + '">Y*</text>'
      );

      if (showShift) {
        parts.push(dot(eqX2, eqY2, C_PURPLE, W, H));
        parts.push(
          '<line x1="' + eqX2.toFixed(2) + '" y1="' + H + '" ' +
          'x2="' + eqX2.toFixed(2) + '" y2="' + (H + 4) + '" ' +
          'stroke="' + AXIS_COL + '" stroke-width="1.4"/>'
        );
        parts.push(
          '<text x="' + eqX2.toFixed(1) + '" y="' + (H + 18) + '" ' +
          'font-size="11" text-anchor="middle" font-weight="700" fill="' + C_PURPLE + '">Y₂*</text>'
        );
        // Multiplier gap arrow
        parts.push(
          '<line x1="' + (eqX + 2).toFixed(2) + '" y1="' + (H + 30) + '" ' +
          'x2="' + (eqX2 - 2).toFixed(2) + '" y2="' + (H + 30) + '" ' +
          'stroke="' + C_GREEN + '" stroke-width="1.6"/>'
        );
        parts.push(arrow(eqX + 2, H + 30, eqX2 - 2, H + 30, C_GREEN, 6));
        parts.push(arrow(eqX2 - 2, H + 30, eqX + 2, H + 30, C_GREEN, 6));
        parts.push(lbl((eqX + eqX2) / 2, H + 44, 'Multiplier effect', C_GREEN,
                       { anchor: 'middle', small: true, pill: true }));
      }
    }

    // Inventory logic annotation
    if (showInv) {
      // Below equilibrium: actual Y < Y*, inventories fall → firms expand
      var belowX = eqX * 0.55;
      var belowE = H - auto - mpc * belowX;
      var belowActual = H - belowX;  // on 45-deg line
      // Arrow showing E > actual output
      parts.push(
        '<line x1="' + belowX.toFixed(2) + '" y1="' + belowActual.toFixed(2) +
        '" x2="' + belowX.toFixed(2) + '" y2="' + (belowE + 3).toFixed(2) +
        '" stroke="' + C_GREEN + '" stroke-width="1.8"/>'
      );
      parts.push(arrow(belowX, belowActual, belowX, belowE + 3, C_GREEN, 6));
      parts.push(lbl(belowX + 6, (belowActual + belowE) / 2, 'E > Y → expand', C_GREEN,
                     { small: true, pill: true }));

      // Above equilibrium: actual Y > Y*, inventories accumulate → firms contract
      var aboveX = eqX * 1.48;
      if (aboveX < W * 0.88) {
        var aboveE = H - auto - mpc * aboveX;
        var aboveActual = H - aboveX;
        parts.push(
          '<line x1="' + aboveX.toFixed(2) + '" y1="' + aboveE.toFixed(2) +
          '" x2="' + aboveX.toFixed(2) + '" y2="' + (aboveActual - 3).toFixed(2) +
          '" stroke="' + C_ROSE + '" stroke-width="1.8"/>'
        );
        parts.push(arrow(aboveX, aboveE, aboveX, aboveActual - 3, C_ROSE, 6));
        parts.push(lbl(aboveX + 6, (aboveE + aboveActual) / 2, 'Y > E → contract', C_ROSE,
                       { small: true, pill: true }));
      }
    }

    // J=W note (injections = withdrawals at equilibrium)
    parts.push(lbl(W - 4, py(0.06), 'Equilibrium: J = W', C_SLATE,
                   { anchor: 'end', small: true, bold: false, pill: true }));

    // Axes
    parts.push(axes(W, H, 'National Income (Y)', 'Planned Expenditure (E)'));

    return svg(VW, VH, parts, pad);
  }


  /* ══════════════════════════════════════════════════════════════════════
     4. GROWTH DIAGRAM
     ══════════════════════════════════════════════════════════════════════
     cfg.view   — 'sources-of-growth' | 'sustainability' | 'kuznets'
     cfg.id     — SVG id prefix (default 'gd')
  ══════════════════════════════════════════════════════════════════════ */

  function growthDiagram(cfg) {
    var c = cfg || {};
    var view = c.view || 'sources-of-growth';
    var id   = c.id   || 'gd';

    if (view === 'sources-of-growth') {
      return _growthSources(c, id);
    } else if (view === 'sustainability') {
      return _growthSustainability(c, id);
    } else if (view === 'kuznets') {
      return _growthKuznets(c, id);
    }
    return _growthSources(c, id);
  }

  /* ── 4a. Sources of growth — PPF outward shift ───────────────────── */
  function _growthSources(c, id) {
    var VW = 640, VH = 380;
    var pad = { left: 52, top: 36, right: 72, bottom: 48 };
    var W = VW - pad.left - pad.right;
    var H = VH - pad.top  - pad.bottom;

    var px = function (nx) { return nx * W; };
    var py = function (ny) { return ny * H; };

    // PPF1 (original) — convex outward: quarter-ellipse shape
    var ppf1 = sampleBezier([
      [px(0.00), py(0.10)],
      [px(0.10), py(0.20)],
      [px(0.62), py(0.82)],
      [px(0.88), py(0.95)],
    ], 40);

    // PPF2 (shifted outward)
    var ppf2 = sampleBezier([
      [px(0.00), py(0.00) + 2],
      [px(0.14), py(0.06)],
      [px(0.72), py(0.68)],
      [px(0.96), py(0.88)],
    ], 40);

    var parts = [];

    // PPF1 (dashed original)
    parts.push(polyline(ppf1, C_BLUE, 2, DASH, 0.55));
    var p1end = ppf1[ppf1.length - 1];
    parts.push(lbl(p1end[0] + 4, p1end[1], 'PPF₁', C_BLUE, { small: true, pill: true }));

    // PPF2 (solid new)
    parts.push(polyline(ppf2, C_GREEN, 2.2));
    var p2end = ppf2[ppf2.length - 1];
    parts.push(lbl(p2end[0] + 4, p2end[1], 'PPF₂', C_GREEN, { small: true, pill: true }));

    // Outward shift arrows (3 points along curves)
    [0.25, 0.50, 0.72].forEach(function (frac) {
      var idx1 = Math.floor(frac * (ppf1.length - 1));
      var idx2 = Math.floor(frac * (ppf2.length - 1));
      var from = ppf1[idx1];
      var to   = ppf2[idx2];
      var dx = to[0] - from[0];
      var dy = to[1] - from[1];
      var len = Math.sqrt(dx*dx + dy*dy);
      if (len > 4) {
        parts.push(
          '<line x1="' + from[0].toFixed(2) + '" y1="' + from[1].toFixed(2) +
          '" x2="' + (to[0] - dx/len*6).toFixed(2) + '" y2="' + (to[1] - dy/len*6).toFixed(2) +
          '" stroke="' + C_GREEN + '" stroke-width="1.4" opacity="0.6"/>'
        );
        parts.push(arrow(from[0], from[1], to[0] - dx/len*4, to[1] - dy/len*4, C_GREEN, 6));
      }
    });

    // Sources legend (right margin)
    var legX = W - 4;
    var legY = py(0.15);
    parts.push(lbl(legX, legY, 'Sources of growth:', C_SLATE,
                   { anchor: 'end', small: true, bold: true }));
    [
      { t: 'More capital (K)', col: C_BLUE },
      { t: 'More labour (L)',  col: C_BLUE },
      { t: 'Technology (A)',   col: C_GREEN },
      { t: 'Education / skills', col: C_GREEN },
    ].forEach(function (item, i) {
      parts.push(lbl(legX, legY + 18 + i * 16, item.t, item.col,
                     { anchor: 'end', small: true, bold: false }));
    });

    // Axes
    parts.push(axes(W, H, 'Capital goods', 'Consumer goods'));

    return svg(VW, VH, parts, pad);
  }

  /* ── 4b. Sustainability — environmental ceiling / social floor ───── */
  function _growthSustainability(c, id) {
    var VW = 640, VH = 380;
    var pad = { left: 52, top: 36, right: 72, bottom: 48 };
    var W = VW - pad.left - pad.right;
    var H = VH - pad.top  - pad.bottom;

    var px = function (nx) { return nx * W; };
    var py = function (ny) { return ny * H; };

    var parts = [];

    // GDP growth path (rising)
    var gdpPts = sampleBezier([
      [px(0.02), py(0.82)],
      [px(0.30), py(0.68)],
      [px(0.65), py(0.38)],
      [px(0.94), py(0.15)],
    ], 40);
    parts.push(polyline(gdpPts, C_BLUE, 2.2));
    var gEnd = gdpPts[gdpPts.length - 1];
    parts.push(lbl(gEnd[0] + 5, gEnd[1], 'GDP growth', C_BLUE, { small: true, pill: true }));

    // Environmental ceiling (horizontal dashed line, high up)
    var ceilY = py(0.20);
    parts.push(
      '<line x1="0" y1="' + ceilY.toFixed(2) + '" x2="' + W + '" y2="' + ceilY.toFixed(2) + '" ' +
      'stroke="' + C_ROSE + '" stroke-width="2" stroke-dasharray="' + DASH + '" opacity="0.8"/>'
    );
    parts.push(lbl(W - 4, ceilY - 6, 'Environmental ceiling', C_ROSE,
                   { anchor: 'end', small: true, pill: true }));

    // Social / ecological floor (horizontal dashed line, low down)
    var floorY = py(0.76);
    parts.push(
      '<line x1="0" y1="' + floorY.toFixed(2) + '" x2="' + W + '" y2="' + floorY.toFixed(2) + '" ' +
      'stroke="' + C_GREEN + '" stroke-width="2" stroke-dasharray="' + DASH + '" opacity="0.8"/>'
    );
    parts.push(lbl(W - 4, floorY + 14, 'Ecological / social floor', C_GREEN,
                   { anchor: 'end', small: true, pill: true }));

    // Shaded "safe zone" between floor and ceiling
    var safeTop  = ceilY;
    var safeBot  = floorY;
    var safeH    = safeBot - safeTop;
    parts.push(
      '<rect x="0" y="' + safeTop.toFixed(2) + '" width="' + W + '" height="' + safeH.toFixed(2) + '" ' +
      'fill="#ECFDF5" fill-opacity="0.35"/>'
    );
    parts.push(lbl(W / 2, (safeTop + safeBot) / 2 + 5, 'Sustainable zone', C_GREEN,
                   { anchor: 'middle', small: true, bold: false, pill: true }));

    // Breach point where GDP crosses ceiling
    var breachIdx = 0;
    for (var i = 0; i < gdpPts.length; i++) {
      if (gdpPts[i][1] <= ceilY) { breachIdx = i; break; }
    }
    if (breachIdx > 0) {
      var bp = gdpPts[breachIdx];
      parts.push(dot(bp[0], bp[1], C_ROSE, undefined, undefined, 'Breach'));
    }

    // Natural capital depletion gap (between GDP path and ceiling after breach)
    if (breachIdx > 0 && breachIdx < gdpPts.length - 1) {
      var bp2 = gdpPts[breachIdx];
      var gapPts = [
        [bp2[0], ceilY],
        [bp2[0], bp2[1]],
      ];
      parts.push(
        '<line x1="' + bp2[0].toFixed(2) + '" y1="' + ceilY.toFixed(2) +
        '" x2="' + bp2[0].toFixed(2) + '" y2="' + (bp2[1] + 4).toFixed(2) +
        '" stroke="' + C_ROSE + '" stroke-width="1.8"/>'
      );
      parts.push(arrow(bp2[0], ceilY, bp2[0], bp2[1] + 2, C_ROSE, 6));
      parts.push(arrow(bp2[0], bp2[1], bp2[0], ceilY + 2, C_ROSE, 6));
      parts.push(lbl(bp2[0] + 6, (ceilY + bp2[1]) / 2 + 4, 'Depletion', C_ROSE,
                     { small: true, pill: true }));
    }

    // Axes
    parts.push(axes(W, H, 'Time', 'Environmental / economic level'));

    return svg(VW, VH, parts, pad);
  }

  /* ── 4c. Kuznets curve — inequality vs development ──────────────── */
  function _growthKuznets(c, id) {
    var VW = 640, VH = 380;
    var pad = { left: 56, top: 36, right: 72, bottom: 48 };
    var W = VW - pad.left - pad.right;
    var H = VH - pad.top  - pad.bottom;

    var px = function (nx) { return nx * W; };
    var py = function (ny) { return ny * H; };

    var parts = [];

    // Kuznets curve: inverted U  (inequality rises then falls as GDP rises)
    var kzCtrl = [
      [px(0.02), py(0.82)],   // start: low income, low inequality
      [px(0.25), py(0.35)],   // rising inequality
      [px(0.50), py(0.06)],   // peak inequality (top of inverted-U)
      [px(0.75), py(0.35)],   // falling inequality
      [px(0.95), py(0.72)],   // high income, lower inequality
    ];

    // Sample as two bezier segments through the 5 control points
    var kzSeg1 = sampleBezier([kzCtrl[0], kzCtrl[1], kzCtrl[2], kzCtrl[2]], 25);
    var kzSeg2 = sampleBezier([kzCtrl[2], kzCtrl[3], kzCtrl[4], kzCtrl[4]], 25);
    var kzPts  = kzSeg1.concat(kzSeg2.slice(1));

    // Main Kuznets curve
    parts.push(polyline(kzPts, C_PURPLE, 2.5));

    // Peak dot
    var peakIdx = 0;
    var minY = Infinity;
    kzPts.forEach(function (p, i) {
      if (p[1] < minY) { minY = p[1]; peakIdx = i; }
    });
    var peak = kzPts[peakIdx];
    parts.push(dot(peak[0], peak[1], C_PURPLE, W, H, 'Peak inequality'));

    // Phase annotations
    parts.push(lbl(px(0.26), py(0.44),
      'Industrialisation', C_ROSE, { anchor: 'middle', small: true, bold: false, pill: true }));
    parts.push(lbl(px(0.26), py(0.52),
      '(inequality ↑)', C_ROSE, { anchor: 'middle', small: true, bold: false }));

    parts.push(lbl(px(0.74), py(0.44),
      'Post-industrial', C_GREEN, { anchor: 'middle', small: true, bold: false, pill: true }));
    parts.push(lbl(px(0.74), py(0.52),
      '(inequality ↓)', C_GREEN, { anchor: 'middle', small: true, bold: false }));

    // Country marker dots (illustrative)
    var markers = [
      { nx: 0.08, ny: 0.78, lbl: 'LICs',  col: C_ROSE   },
      { nx: 0.35, ny: 0.22, lbl: 'MICs',  col: C_AMBER  },
      { nx: 0.78, ny: 0.60, lbl: 'HICs',  col: C_GREEN  },
    ];
    markers.forEach(function (m) {
      // Find nearest point on the curve for y
      var mx = px(m.nx);
      var nearIdx = 0;
      var bestDist = Infinity;
      kzPts.forEach(function (p, i) {
        var d = Math.abs(p[0] - mx);
        if (d < bestDist) { bestDist = d; nearIdx = i; }
      });
      var onCurveY = kzPts[nearIdx][1];
      parts.push(dot(mx, onCurveY, m.col, undefined, undefined, m.lbl));
    });

    // Kuznets curve label
    parts.push(lbl(W / 2, py(0.96), 'Environmental Kuznets Curve (EKC)', C_PURPLE,
                   { anchor: 'middle', small: true, bold: true, pill: true }));

    // Axes
    parts.push(axes(W, H, 'GDP per capita', 'Inequality / pollution'));

    return svg(VW, VH, parts, pad);
  }

  /* ── REGISTER ────────────────────────────────────────────────────── */

  global.ECONOS_DIAGRAMS = global.ECONOS_DIAGRAMS || {};
  global.ECONOS_DIAGRAMS.phillipsCurve   = phillipsCurve;
  global.ECONOS_DIAGRAMS.jCurveDiagram   = jCurveDiagram;
  global.ECONOS_DIAGRAMS.fortyFiveDiagram = fortyFiveDiagram;
  global.ECONOS_DIAGRAMS.growthDiagram   = growthDiagram;

}(typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : this));
