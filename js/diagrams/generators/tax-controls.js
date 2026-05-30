/**
 * tax-controls.js — Econos diagram generators: Tax/Subsidy & Price Controls
 * =========================================================================
 * IIFE that registers two generators onto window.ECONOS_DIAGRAMS:
 *
 *   ECONOS_DIAGRAMS.taxSubsidyDiagram(cfg)   → <svg> string
 *   ECONOS_DIAGRAMS.priceControlDiagram(cfg) → <svg> string
 *
 * Depends on window.EconSvg (econ-svg.js must load first).
 * ADDITIVE — does not modify any other file.
 */

(function (global) {
  'use strict';

  // ── CONSTANTS ────────────────────────────────────────────────────────
  const VB_W = 640;
  const VB_H = 400;
  const PAD  = { left: 52, top: 40, right: 64, bottom: 48 };
  const PW   = VB_W - PAD.left - PAD.right;   // plot width  = 524
  const PH   = VB_H - PAD.top  - PAD.bottom;  // plot height = 312

  // House-rule colours
  const BLUE   = '#2563EB';
  const GREEN  = '#059669';
  const AMBER  = '#D97706';
  const ROSE   = '#BE123C';
  const SLATE  = '#475569';
  const GUIDE  = '#94A3B8';
  const AXIS   = '#334155';
  const WHITE  = '#ffffff';

  // Shared font
  const FONT = "Inter, system-ui, sans-serif";

  // ── LOW-LEVEL HELPERS (pure SVG strings, no EconSvg dependency) ─────

  /** Escape XML text */
  function esc(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  /** Map normalised [0,1] x → plot pixel x */
  function px(v) { return v * PW; }
  /** Map normalised [0,1] y → plot pixel y (0 = top, 1 = bottom) */
  function py(v) { return v * PH; }

  /**
   * Linear interpolation: find y on a line through (x0,y0)→(x1,y1) at x.
   * All coords in the same space (norm or pixel).
   */
  function lerp(x0, y0, x1, y1, x) {
    if (x1 === x0) return (y0 + y1) / 2;
    return y0 + (y1 - y0) * (x - x0) / (x1 - x0);
  }

  /** Straight <line> element (pixel coords inside plot area) */
  function svgLine(x1, y1, x2, y2, colour, sw, dash, op) {
    const dashAttr = dash ? 'stroke-dasharray="4 3"' : '';
    const opAttr   = (op != null && op !== 1) ? `opacity="${op}"` : '';
    return `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="${esc(colour)}" stroke-width="${sw || 1.5}" stroke-linecap="round" ${dashAttr} ${opAttr}/>`;
  }

  /** Guide line (dashed slate) to both axes from (x,y) in plot space */
  function guideLines(x, y) {
    return [
      svgLine(x, y, x, PH, GUIDE, 1, true),
      svgLine(0, y, x, y,  GUIDE, 1, true),
    ].join('\n');
  }

  /** Filled equilibrium dot */
  function dot(x, y, colour, label, labelRight) {
    const lx = labelRight ? x + 8 : x - 8;
    const anchor = labelRight ? 'start' : 'end';
    const lbl = label
      ? `<text x="${lx.toFixed(1)}" y="${(y - 7).toFixed(1)}" font-size="11" font-weight="700" fill="${esc(colour)}" text-anchor="${anchor}" font-family="${FONT}">${esc(label)}</text>`
      : '';
    return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="5" fill="${esc(colour)}" stroke="${WHITE}" stroke-width="1.5"/>
${lbl}`;
  }

  /**
   * Text label with white pill background.
   * anchor: 'start' | 'middle' | 'end'
   */
  function pillLabel(x, y, text, colour, anchor, fontSize, bold) {
    const fs   = fontSize || 12;
    const fw   = bold ? '700' : '400';
    const ta   = anchor || 'start';
    const charW = fs * 0.60;
    const tw   = String(text).length * charW + 10;
    const ph2  = fs + 6;
    let rx = x;
    if (ta === 'middle') rx = x - tw / 2;
    if (ta === 'end')    rx = x - tw;
    return `<rect x="${rx.toFixed(1)}" y="${(y - ph2 + 2).toFixed(1)}" width="${tw.toFixed(1)}" height="${ph2.toFixed(1)}" rx="4" fill="${WHITE}" fill-opacity="0.9" stroke="#E2E8F0" stroke-width="0.5"/>
<text x="${x.toFixed(1)}" y="${y.toFixed(1)}" font-size="${fs}" font-weight="${fw}" fill="${esc(colour)}" text-anchor="${ta}" font-family="${FONT}">${esc(text)}</text>`;
  }

  /**
   * Filled polygon (for welfare/DWL shading).
   * pts: [[x,y], ...] in plot pixels.
   */
  function polygon(pts, fill, opacity) {
    const d = pts.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
    return `<polygon points="${d}" fill="${esc(fill)}" opacity="${opacity || 0.22}" stroke="none"/>`;
  }

  /**
   * Horizontal bracket / brace annotation.
   * Draws a double-headed arrow on a horizontal span at a given y.
   */
  function hBracket(x1, x2, y, colour, labelText, labelY) {
    const arrowSize = 5;
    const mid = (x1 + x2) / 2;
    const lY  = labelY != null ? labelY : y - 8;
    // shaft
    const shaft = svgLine(x1 + arrowSize, y, x2 - arrowSize, y, colour, 1.2);
    // left arrowhead
    const leftArr  = `<polygon points="${(x1).toFixed(1)},${y.toFixed(1)} ${(x1 + arrowSize * 1.6).toFixed(1)},${(y - arrowSize * 0.55).toFixed(1)} ${(x1 + arrowSize * 1.6).toFixed(1)},${(y + arrowSize * 0.55).toFixed(1)}" fill="${esc(colour)}"/>`;
    const rightArr = `<polygon points="${(x2).toFixed(1)},${y.toFixed(1)} ${(x2 - arrowSize * 1.6).toFixed(1)},${(y - arrowSize * 0.55).toFixed(1)} ${(x2 - arrowSize * 1.6).toFixed(1)},${(y + arrowSize * 0.55).toFixed(1)}" fill="${esc(colour)}"/>`;
    const lbl = labelText ? pillLabel(mid, lY, labelText, colour, 'middle', 11, false) : '';
    return [shaft, leftArr, rightArr, lbl].join('\n');
  }

  /**
   * Vertical bracket.
   * Draws a double-headed arrow on a vertical span at a given x.
   */
  function vBracket(y1, y2, x, colour, labelText, labelX) {
    const arrowSize = 5;
    const mid = (y1 + y2) / 2;
    const lX  = labelX != null ? labelX : x + 8;
    const shaft = svgLine(x, y1 + arrowSize, x, y2 - arrowSize, colour, 1.2);
    const topArr    = `<polygon points="${x.toFixed(1)},${y1.toFixed(1)} ${(x - arrowSize * 0.55).toFixed(1)},${(y1 + arrowSize * 1.6).toFixed(1)} ${(x + arrowSize * 0.55).toFixed(1)},${(y1 + arrowSize * 1.6).toFixed(1)}" fill="${esc(colour)}"/>`;
    const bottomArr = `<polygon points="${x.toFixed(1)},${y2.toFixed(1)} ${(x - arrowSize * 0.55).toFixed(1)},${(y2 - arrowSize * 1.6).toFixed(1)} ${(x + arrowSize * 0.55).toFixed(1)},${(y2 - arrowSize * 1.6).toFixed(1)}" fill="${esc(colour)}"/>`;
    const lbl = labelText ? pillLabel(lX, mid, labelText, colour, 'start', 11, false) : '';
    return [shaft, topArr, bottomArr, lbl].join('\n');
  }

  /** Straight supply/demand line as <line> (pixel coords) */
  function curveLine(x1, y1, x2, y2, colour, dashed, opacity, sw) {
    return svgLine(x1, y1, x2, y2, colour, sw || 2, dashed, opacity);
  }

  /** Label at end of a curve with white pill */
  function curveLabel(x, y, text, colour) {
    return pillLabel(x + 4, y + 4, text, colour, 'start', 12, true);
  }

  /**
   * Axis pair with arrowheads and labels.
   * Returns SVG fragment string (already in plot-area space).
   */
  function axesFrag(xLabel, yLabel) {
    const arrowSz = 7;
    function arrowHead(x1, y1, x2, y2) {
      const angle = Math.atan2(y2 - y1, x2 - x1);
      const s = arrowSz;
      const pts = [
        [x2, y2],
        [x2 - s * Math.cos(angle - 0.4), y2 - s * Math.sin(angle - 0.4)],
        [x2 - s * Math.cos(angle + 0.4), y2 - s * Math.sin(angle + 0.4)],
      ].map(([a, b]) => `${a.toFixed(2)},${b.toFixed(2)}`).join(' ');
      return `<polygon points="${pts}" fill="${AXIS}"/>`;
    }
    return [
      // Y-axis
      `<line x1="0" y1="${PH}" x2="0" y2="0" stroke="${AXIS}" stroke-width="1.8"/>`,
      arrowHead(0, PH * 0.3, 0, 0),
      // X-axis
      `<line x1="0" y1="${PH}" x2="${PW}" y2="${PH}" stroke="${AXIS}" stroke-width="1.8"/>`,
      arrowHead(PW * 0.8, PH, PW, PH),
      // Y label
      yLabel ? `<text x="${-(PH / 2)}" y="-36" transform="rotate(-90)" text-anchor="middle" font-size="12" font-weight="600" fill="${AXIS}" letter-spacing="0.3" font-family="${FONT}">${esc(yLabel)}</text>` : '',
      // X label
      xLabel ? `<text x="${PW / 2}" y="${PH + 38}" text-anchor="middle" font-size="12" font-weight="600" fill="${AXIS}" letter-spacing="0.3" font-family="${FONT}">${esc(xLabel)}</text>` : '',
    ].join('\n');
  }

  /**
   * Wrap content in a full SVG with correct viewBox and plot-area translate.
   * Returns complete <svg>…</svg> string.
   */
  function wrapSvg(children, vbH) {
    const H = vbH || VB_H;
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${VB_W} ${H}" width="${VB_W}" height="${H}" style="font-family:${FONT};overflow:visible;">
  <g transform="translate(${PAD.left},${PAD.top})">
${children}
  </g>
</svg>`;
  }

  // ── ELASTICITY PRESETS ───────────────────────────────────────────────
  /**
   * Returns supply curve endpoints [norm x1,y1,x2,y2] adjusted for elasticity.
   * Demand curve is fixed; supply rotates around the original equilibrium.
   *
   * Elasticity affects the SLOPE of supply:
   *   elastic   → flatter supply  (more responsive)
   *   inelastic → steeper supply  (less responsive)
   *   unit      → standard 45°-ish slope
   *
   * Returns an object with:
   *   { dPts, sPts, eqX, eqY }   — all in norm [0,1]
   */
  function elasticityPreset(elasticity) {
    // Demand: always downward from (0.05, 0.15) to (0.95, 0.82)
    const dPts = { x1: 0.05, y1: 0.15, x2: 0.95, y2: 0.82 };

    // Supply slopes by elasticity (upward-sloping; norm y increases downward)
    // We use a shared equilibrium around (0.50, 0.48) for the baseline.
    // Supply: starts bottom-left, ends top-right.
    let sPts;
    if (elasticity === 'elastic') {
      // Flatter slope — big Q response to price change
      sPts = { x1: 0.05, y1: 0.62, x2: 0.95, y2: 0.34 };
    } else if (elasticity === 'inelastic') {
      // Steeper slope — small Q response
      sPts = { x1: 0.20, y1: 0.90, x2: 0.80, y2: 0.10 };
    } else {
      // unit
      sPts = { x1: 0.08, y1: 0.78, x2: 0.92, y2: 0.18 };
    }

    // Compute equilibrium: intersection of demand & supply lines
    // Both are straight lines; solve x,y in norm space.
    // Demand:  y = dPts.y1 + (dPts.y2-dPts.y1)/(dPts.x2-dPts.x1) * (x - dPts.x1)
    // Supply:  y = sPts.y1 + (sPts.y2-sPts.y1)/(sPts.x2-sPts.x1) * (x - sPts.x1)
    const dSlope = (dPts.y2 - dPts.y1) / (dPts.x2 - dPts.x1);
    const sSlope = (sPts.y2 - sPts.y1) / (sPts.x2 - sPts.x1);
    const dInt = dPts.y1 - dSlope * dPts.x1;
    const sInt = sPts.y1 - sSlope * sPts.x1;
    const eqX = (sInt - dInt) / (dSlope - sSlope);
    const eqY = dSlope * eqX + dInt;

    return { dPts, sPts, eqX, eqY, dSlope, sSlope, dInt, sInt };
  }

  // ── GENERATOR 1: taxSubsidyDiagram ──────────────────────────────────
  /**
   * Renders a supply-and-demand diagram showing the effect of a per-unit
   * tax or subsidy, with incidence split, government revenue/cost area,
   * and deadweight loss triangle.
   *
   * @param {Object} cfg
   * @param {'tax'|'subsidy'} [cfg.type='tax']
   *   Whether to draw a tax (shifts supply left/up) or subsidy (shifts right/down).
   * @param {'elastic'|'inelastic'|'unit'} [cfg.elasticity='unit']
   *   Supply elasticity, which governs how the incidence is split.
   * @param {number} [cfg.taxAmount=0.18]
   *   Size of the tax/subsidy as a fraction of the price axis (0..1 norm).
   * @param {string} [cfg.xLabel='Quantity']
   *   Horizontal axis label.
   * @param {string} [cfg.yLabel='Price']
   *   Vertical axis label.
   * @param {boolean} [cfg.showDWL=true]
   *   Whether to shade the deadweight loss triangle.
   * @param {boolean} [cfg.showIncidence=true]
   *   Whether to draw the consumer/producer incidence split callouts.
   * @param {boolean} [cfg.showRevenueCost=true]
   *   Whether to shade the government revenue (tax) or cost (subsidy) rectangle.
   * @returns {string} Complete <svg> element string.
   */
  function taxSubsidyDiagram(cfg) {
    cfg = cfg || {};
    const type        = cfg.type        || 'tax';
    const elasticity  = cfg.elasticity  || 'unit';
    const taxAmt      = cfg.taxAmount   != null ? cfg.taxAmount : 0.18;
    const xLabel      = cfg.xLabel      || 'Quantity';
    const yLabel      = cfg.yLabel      || 'Price';
    const showDWL     = cfg.showDWL     !== false;
    const showInc     = cfg.showIncidence   !== false;
    const showRev     = cfg.showRevenueCost !== false;

    const isSubsidy = type === 'subsidy';

    // ── Curve geometry (norm space) ──────────────────────────────────
    const preset = elasticityPreset(elasticity);
    const { dPts, sPts, eqX, eqY, dSlope, sSlope, dInt, sInt } = preset;

    // Shift supply: tax pushes supply UP (higher y in norm = lower price displayed
    // but remember norm y: 0=top=high price, 1=bottom=low price).
    // A tax shifts supply upward on diagram (leftward/upward), so norm y decreases.
    // A subsidy shifts supply downward (rightward/downward), so norm y increases.
    const shift = isSubsidy ? taxAmt : -taxAmt;
    const sShift = {
      x1: sPts.x1,
      y1: sPts.y1 + shift,
      x2: sPts.x2,
      y2: sPts.y2 + shift,
    };

    // New equilibrium after shift
    const sShiftInt = sShift.y1 - sSlope * sShift.x1;
    const eq2X = (sShiftInt - dInt) / (dSlope - sSlope);
    const eq2Y = dSlope * eq2X + dInt;

    // Price paid by consumers = eq2Y (on demand curve)
    // Price received by producers = price on OLD supply at eq2X
    const pProd = sSlope * eq2X + sInt;  // norm price received by producers

    // Convert all to pixel coords
    const [dx1, dy1, dx2, dy2] = [px(dPts.x1), py(dPts.y1), px(dPts.x2), py(dPts.y2)];
    const [sx1, sy1, sx2, sy2] = [px(sPts.x1), py(sPts.y1), px(sPts.x2), py(sPts.y2)];
    const [ssx1, ssy1, ssx2, ssy2] = [px(sShift.x1), py(sShift.y1), px(sShift.x2), py(sShift.y2)];

    const eqXpx  = px(eqX);
    const eqYpx  = py(eqY);
    const eq2Xpx = px(eq2X);
    const eq2Ypx = py(eq2Y);
    const pProdPx = py(pProd);

    // ── Build SVG layers ────────────────────────────────────────────
    const parts = [];

    // 1. Axes
    parts.push(axesFrag(xLabel, yLabel));

    // 2. Government revenue/cost rectangle
    // Rectangle spans from eq2X back to... original eq? No —
    // it spans the new quantity (eq2X) horizontally, price wedge vertically.
    // For tax:    rectangle is between pProdPx and eq2Ypx at x=0..eq2Xpx
    // For subsidy: same logic but subsidy widens quantity.
    if (showRev) {
      const rectColour = isSubsidy ? GREEN : AMBER;
      const top    = Math.min(eq2Ypx, pProdPx);
      const bottom = Math.max(eq2Ypx, pProdPx);
      const rectH  = bottom - top;
      parts.push(
        `<rect x="0" y="${top.toFixed(1)}" width="${eq2Xpx.toFixed(1)}" height="${rectH.toFixed(1)}" fill="${esc(rectColour)}" opacity="0.13" stroke="none"/>`
      );
      if (rectH > 18) {
        parts.push(pillLabel(
          eq2Xpx / 2,
          top + rectH / 2 + 5,
          isSubsidy ? 'Gov. Cost' : 'Gov. Revenue',
          rectColour,
          'middle', 11, true
        ));
      }
    }

    // 3. DWL triangle
    // Triangle vertices: old equilibrium (eqX, eqY), new eq (eq2X, eq2Y),
    // and the point on the original supply at eq2X which is pProd.
    // The DWL triangle sits between the two equilibria.
    if (showDWL) {
      const dwlColour = ROSE;
      const dwlPts = [
        [eqXpx,  eqYpx],
        [eq2Xpx, eq2Ypx],
        [eq2Xpx, pProdPx],
      ];
      parts.push(polygon(dwlPts, dwlColour, 0.30));
      // DWL label inside the triangle centroid
      const cx = (eqXpx + eq2Xpx + eq2Xpx) / 3;
      const cy = (eqYpx + eq2Ypx + pProdPx) / 3;
      if (Math.abs(eqXpx - eq2Xpx) > 16) {
        parts.push(pillLabel(cx, cy + 4, 'DWL', ROSE, 'middle', 11, true));
      }
    }

    // 4. Original supply curve (dashed)
    parts.push(curveLine(sx1, sy1, sx2, sy2, GREEN, true, 0.55, 2));
    parts.push(curveLabel(sx2, sy2, 'S', GREEN));

    // 5. Shifted supply curve (solid)
    const shiftLabel = isSubsidy ? 'S (subsidy)' : 'S + tax';
    parts.push(curveLine(ssx1, ssy1, ssx2, ssy2, GREEN, false, 1, 2.2));
    parts.push(curveLabel(ssx2, ssy2, shiftLabel, GREEN));

    // 6. Demand curve (solid, blue)
    parts.push(curveLine(dx1, dy1, dx2, dy2, BLUE, false, 1, 2));
    parts.push(curveLabel(dx2, dy2, 'D', BLUE));

    // 7. Original equilibrium
    parts.push(guideLines(eqXpx, eqYpx));
    parts.push(dot(eqXpx, eqYpx, SLATE, 'E₀', false));

    // 8. New equilibrium
    parts.push(guideLines(eq2Xpx, eq2Ypx));
    parts.push(dot(eq2Xpx, eq2Ypx, isSubsidy ? GREEN : AMBER, isSubsidy ? 'E₁ (sub)' : 'E₁ (tax)', false));

    // 9. Producer price point
    parts.push(
      svgLine(0, pProdPx, eq2Xpx, pProdPx, GUIDE, 1, true)
    );
    parts.push(dot(eq2Xpx, pProdPx, GREEN, '', false));

    // 10. Incidence annotations (vertical bracket on y-axis side)
    if (showInc && Math.abs(eq2Ypx - pProdPx) > 12) {
      const bx = -28; // left of axis in plot space
      // Consumer burden: from original equilibrium price to new consumer price
      const cTop    = Math.min(eqYpx, eq2Ypx);
      const cBottom = Math.max(eqYpx, eq2Ypx);
      if (cBottom - cTop > 10) {
        parts.push(vBracket(cTop, cBottom, bx, BLUE,
          isSubsidy ? 'Consumer\ngain' : 'Consumer\nburden', bx - 52));
      }
      // Producer burden: from producer price to original equilibrium price
      const pTop    = Math.min(pProdPx, eqYpx);
      const pBottom = Math.max(pProdPx, eqYpx);
      if (pBottom - pTop > 10) {
        parts.push(vBracket(pTop, pBottom, bx, GREEN,
          isSubsidy ? 'Producer\ngain' : 'Producer\nburden', bx - 52));
      }
    }

    // 11. Tax/subsidy wedge bracket (at new quantity line)
    if (Math.abs(eq2Ypx - pProdPx) > 14) {
      const wedgeLbl = isSubsidy ? 'Subsidy/unit' : 'Tax/unit';
      parts.push(vBracket(
        Math.min(eq2Ypx, pProdPx),
        Math.max(eq2Ypx, pProdPx),
        eq2Xpx + 18,
        SLATE,
        wedgeLbl,
        eq2Xpx + 22
      ));
    }

    // 12. Quantity change bracket (on x-axis)
    if (Math.abs(eq2Xpx - eqXpx) > 14) {
      const qLbl = isSubsidy ? 'ΔQ (rise)' : 'ΔQ (fall)';
      parts.push(hBracket(
        Math.min(eqXpx, eq2Xpx),
        Math.max(eqXpx, eq2Xpx),
        PH + 18,
        SLATE,
        qLbl,
        PH + 12
      ));
    }

    return wrapSvg(parts.join('\n'));
  }

  // ── GENERATOR 2: priceControlDiagram ────────────────────────────────
  /**
   * Renders a supply-and-demand diagram illustrating the effect of a
   * price ceiling or price floor, with the resulting shortage or surplus
   * annotated and welfare/DWL impact shown.
   *
   * @param {Object} cfg
   * @param {'ceiling'|'floor'} [cfg.type='ceiling']
   *   Ceiling = max price (below equilibrium → shortage).
   *   Floor   = min price (above equilibrium → surplus).
   * @param {number} [cfg.controlLevel=0.35]
   *   Controlled price as a fraction of the price axis (0=top/high, 1=bottom/low).
   *   Ceiling: must be < eqY (so it's below equilibrium price).
   *   Floor:   must be > eqY (so it's above equilibrium price).
   *   Default positions are chosen automatically if omitted (safe defaults).
   * @param {string} [cfg.xLabel='Quantity']
   *   Horizontal axis label.
   * @param {string} [cfg.yLabel='Price']
   *   Vertical axis label.
   * @param {boolean} [cfg.showDWL=true]
   *   Whether to shade the deadweight loss triangle.
   * @param {boolean} [cfg.showShortSurplus=true]
   *   Whether to annotate the shortage/surplus span on the x-axis.
   * @param {boolean} [cfg.showWelfare=true]
   *   Whether to shade consumer/producer surplus change areas.
   * @returns {string} Complete <svg> element string.
   */
  function priceControlDiagram(cfg) {
    cfg = cfg || {};
    const type           = cfg.type           || 'ceiling';
    const xLabel         = cfg.xLabel         || 'Quantity';
    const yLabel         = cfg.yLabel         || 'Price';
    const showDWL        = cfg.showDWL        !== false;
    const showShortSurp  = cfg.showShortSurplus !== false;
    const showWelfare    = cfg.showWelfare    !== false;

    const isCeiling = type === 'ceiling';

    // ── Fixed supply & demand (unit elasticity) ──────────────────────
    // Demand: downward  (0.05, 0.15) → (0.95, 0.82)
    // Supply: upward    (0.08, 0.78) → (0.92, 0.18)
    const dPts = { x1: 0.05, y1: 0.15, x2: 0.95, y2: 0.82 };
    const sPts = { x1: 0.08, y1: 0.78, x2: 0.92, y2: 0.18 };

    const dSlope = (dPts.y2 - dPts.y1) / (dPts.x2 - dPts.x1);
    const sSlope = (sPts.y2 - sPts.y1) / (sPts.x2 - sPts.x1);
    const dInt   = dPts.y1 - dSlope * dPts.x1;
    const sInt   = sPts.y1 - sSlope * sPts.x1;

    // Equilibrium
    const eqX = (sInt - dInt) / (dSlope - sSlope);
    const eqY = dSlope * eqX + dInt;  // ~0.48

    // Price control level (norm y: small = high price, large = low price)
    // Ceiling: below equilibrium price → controlled norm y is LARGER than eqY
    // Floor:   above equilibrium price → controlled norm y is SMALLER than eqY
    let ctrlY;
    if (cfg.controlLevel != null) {
      ctrlY = cfg.controlLevel;
    } else {
      ctrlY = isCeiling ? eqY + 0.16 : eqY - 0.16;
    }

    // Quantities at controlled price:
    // On demand: solve dSlope*x + dInt = ctrlY  → x = (ctrlY - dInt) / dSlope
    // On supply: solve sSlope*x + sInt = ctrlY  → x = (ctrlY - sInt) / sSlope
    const qDemand = (ctrlY - dInt) / dSlope;  // quantity demanded at ctrl price
    const qSupply = (ctrlY - sInt) / sSlope;  // quantity supplied at ctrl price

    // For ceiling: qDemand > qSupply (shortage = excess demand)
    // For floor:   qSupply > qDemand (surplus = excess supply)
    const qLow  = Math.min(qDemand, qSupply);
    const qHigh = Math.max(qDemand, qSupply);

    // ── Pixel conversions ─────────────────────────────────────────────
    const eqXpx   = px(eqX);
    const eqYpx   = py(eqY);
    const ctrlYpx = py(ctrlY);
    const qDemPx  = px(qDemand);
    const qSupPx  = px(qSupply);
    const qLowPx  = px(qLow);
    const qHighPx = px(qHigh);

    // Demand at qLow and qHigh (for DWL polygon)
    const dAtQLow  = py(dSlope * qLow  + dInt);
    const dAtQHigh = py(dSlope * qHigh + dInt);

    // ── Build SVG layers ─────────────────────────────────────────────
    const parts = [];

    // 1. Axes
    parts.push(axesFrag(xLabel, yLabel));

    // 2. Welfare shading (consumer/producer surplus changes)
    if (showWelfare) {
      if (isCeiling) {
        // Consumer surplus GAIN (transferred from producer):
        // Trapezoid between original eq price and ceiling price, 0..qSupply on demand
        const cGainPts = [
          [0, eqYpx],
          [qSupPx, eqYpx],
          [qSupPx, ctrlYpx],
          [0, ctrlYpx],
        ];
        parts.push(polygon(cGainPts, BLUE, 0.14));

        // Producer surplus LOSS (they now receive less):
        // Triangle below equilibrium supply side — from (0,eqY) down to supply curve at qLow
        const prodAtQLow = py(sSlope * qLow + sInt);
        const pLossPts = [
          [0, eqYpx],
          [qSupPx, eqYpx],
          [qSupPx, prodAtQLow],
          [0, py(sInt)],
        ];
        parts.push(polygon(pLossPts, GREEN, 0.12));
      } else {
        // Floor: producer surplus gain (rectangle above eq up to floor price, 0..qDemand)
        const pGainPts = [
          [0, ctrlYpx],
          [qDemPx, ctrlYpx],
          [qDemPx, eqYpx],
          [0, eqYpx],
        ];
        parts.push(polygon(pGainPts, GREEN, 0.14));

        // Consumer surplus loss
        const cLossPts = [
          [0, py(dInt)],
          [qDemPx, dAtQLow],
          [qDemPx, ctrlYpx],
          [0, ctrlYpx],
        ];
        parts.push(polygon(cLossPts, BLUE, 0.12));
      }
    }

    // 3. DWL triangle
    // The DWL is the triangle between the original equilibrium and the
    // new (restricted) quantity — bounded by the demand and supply curves.
    if (showDWL) {
      const sAtQLow = py(sSlope * qLow + sInt);
      const dwlPts = [
        [qLowPx, ctrlYpx],        // price control line at restricted qty
        [eqXpx,  eqYpx],          // original equilibrium
        [qLowPx, sAtQLow],        // supply curve at restricted qty
      ];
      parts.push(polygon(dwlPts, ROSE, 0.30));
      // DWL label at centroid
      const cx = (qLowPx + eqXpx + qLowPx) / 3;
      const cy = (ctrlYpx + eqYpx + sAtQLow) / 3;
      if (Math.abs(qLowPx - eqXpx) > 12) {
        parts.push(pillLabel(cx, cy + 4, 'DWL', ROSE, 'middle', 11, true));
      }
    }

    // 4. Supply curve
    parts.push(curveLine(px(sPts.x1), py(sPts.y1), px(sPts.x2), py(sPts.y2), GREEN, false, 1, 2));
    parts.push(curveLabel(px(sPts.x2), py(sPts.y2), 'S', GREEN));

    // 5. Demand curve
    parts.push(curveLine(px(dPts.x1), py(dPts.y1), px(dPts.x2), py(dPts.y2), BLUE, false, 1, 2));
    parts.push(curveLabel(px(dPts.x2), py(dPts.y2), 'D', BLUE));

    // 6. Price control horizontal line (dashed, full width)
    const ctrlColour = isCeiling ? ROSE : AMBER;
    parts.push(svgLine(0, ctrlYpx, PW * 0.92, ctrlYpx, ctrlColour, 2, true));

    // Control label with pill
    const ctrlLabelText = isCeiling ? 'Price Ceiling (Pᶜ)' : 'Price Floor (Pᶠ)';
    parts.push(pillLabel(PW * 0.92 + 2, ctrlYpx + 4, ctrlLabelText, ctrlColour, 'start', 11, true));

    // 7. Equilibrium point & guides
    parts.push(guideLines(eqXpx, eqYpx));
    parts.push(dot(eqXpx, eqYpx, SLATE, 'E₀', true));

    // 8. Quantity supplied and demanded at controlled price — vertical guides
    // Qty supplied (the binding constraint for ceiling; excess supply for floor)
    parts.push(svgLine(qSupPx, ctrlYpx, qSupPx, PH, GUIDE, 1, true));
    parts.push(dot(qSupPx, ctrlYpx, GREEN, '', false));
    parts.push(pillLabel(qSupPx, PH + 14, isCeiling ? 'Qₛ' : 'Qₛ', GREEN, 'middle', 10, false));

    // Qty demanded
    parts.push(svgLine(qDemPx, ctrlYpx, qDemPx, PH, GUIDE, 1, true));
    parts.push(dot(qDemPx, ctrlYpx, BLUE, '', false));
    parts.push(pillLabel(qDemPx, PH + 14, isCeiling ? 'Qᴰ' : 'Qᴰ', BLUE, 'middle', 10, false));

    // 9. Shortage / surplus bracket on x-axis
    if (showShortSurp && Math.abs(qHighPx - qLowPx) > 10) {
      const shortSurpLabel = isCeiling ? 'Shortage' : 'Surplus';
      parts.push(hBracket(qLowPx, qHighPx, PH + 28, ctrlColour, shortSurpLabel, PH + 22));
    }

    // 10. Price guide to y-axis
    parts.push(svgLine(0, ctrlYpx, qLowPx, ctrlYpx, GUIDE, 1, true));

    return wrapSvg(parts.join('\n'));
  }

  // ── REGISTER ─────────────────────────────────────────────────────────
  global.ECONOS_DIAGRAMS = global.ECONOS_DIAGRAMS || {};
  global.ECONOS_DIAGRAMS.taxSubsidyDiagram   = taxSubsidyDiagram;
  global.ECONOS_DIAGRAMS.priceControlDiagram = priceControlDiagram;

}(typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : this));
