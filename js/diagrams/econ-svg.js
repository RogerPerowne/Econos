/**
 * EconSvg — Econos SVG diagram builder utility
 * ==============================================
 * Composable helpers that return SVG-fragment strings plus a top-level
 * assembler.  All functions live on the global `window.EconSvg` object
 * (or `globalThis.EconSvg` in non-browser contexts).
 *
 * ── PLOT-AREA COORDINATE SYSTEM ──────────────────────────────────────
 * Callers may pass raw SVG pixel coords OR normalised 0..1 floats.
 * When ALL x/y values on a call are in [0,1] the helper auto-scales
 * them into the current plot area.  Pass `norm:false` to force pixel
 * mode even when values happen to be in that range.
 *
 * Default safe-padding margins (pixels inside the viewBox):
 *   left: 48   top: 36   right: 56   bottom: 44
 * The plot area is therefore:
 *   x: [48,  viewBoxWidth  - 56]
 *   y: [36,  viewBoxHeight - 44]
 *
 * ── API SURFACE ──────────────────────────────────────────────────────
 *
 * EconSvg.svg({ viewBox, width?, height?, children, pad? })
 *   → Full <svg>…</svg> string.
 *   viewBox  – "0 0 640 340" or [0,0,640,340].
 *   width    – rendered width attr (defaults to viewBox width).
 *   height   – rendered height attr (defaults to viewBox height).
 *   children – string | string[] of SVG fragment(s) to nest inside a
 *              <g> translated by the plot-area padding.
 *   pad      – override margins: { left, top, right, bottom }.
 *
 * EconSvg.axes({ xLabel, yLabel, xTicks?, yTicks?, w, h, tone? })
 *   → Axes fragment (two lines + arrowheads + labels).
 *   w, h     – plot-area dimensions in pixels.
 *   xLabel   – text on the horizontal axis.
 *   yLabel   – text on the vertical axis (rotated).
 *   xTicks   – optional string[] of tick labels (evenly spaced).
 *   yTicks   – optional string[] of tick labels (evenly spaced).
 *   tone     – axis colour key (default 'slate').
 *
 * EconSvg.curve({ type, points?, tone?, dashed?, opacity?,
 *                 label?, labelPos?, strokeWidth?, norm? })
 *   → Curve/polyline fragment with optional end label.
 *   type     – 'AD'|'SRAS'|'LRAS'|'demand'|'supply'|'custom'
 *              (sets default tone + orientation when points omitted).
 *   points   – [[x,y],…] pixel or 0..1 coords (required for 'custom').
 *   tone     – override tone key for the stroke colour.
 *   dashed   – true → stroke-dasharray="4 3"; default false.
 *   opacity  – stroke opacity; default 1 (dashed auto-sets 0.55).
 *   label    – text appended near the last point.
 *   labelPos – {x,y} override for label position (pixel coords in
 *              plot area); default = near last point.
 *   strokeWidth – default 2.
 *   norm     – false to disable auto-normalisation (see above).
 *
 * EconSvg.line({ x1,y1,x2,y2, tone?, dashed?, strokeWidth?, opacity? })
 *   → A single <line> element.
 *
 * EconSvg.label({ x, y, text, tone?, small?, muted?, pill?,
 *                 anchor?, bold? })
 *   → A <text> element (with optional white pill <rect> behind it).
 *   anchor – 'start'|'middle'|'end' (default 'start').
 *   pill   – true → renders a white rounded-rect behind the text.
 *   small  – true → font-size 11.
 *   muted  – true → reduced opacity.
 *   bold   – true → font-weight 700.
 *
 * EconSvg.callout({ x, y, title, body, tone?, anchor? })
 *   → Fixed-width (140px) tooltip-style box with title + body text.
 *   anchor – 'left'|'right' (default 'left').
 *   Automatically offsets so the box stays inside the plot area.
 *
 * EconSvg.equilibrium({ x, y, label?, tone?, w?, h? })
 *   → Filled dot + dashed guide lines to both axes.
 *   w, h – plot-area dimensions needed to draw leaders to the axes.
 *
 * EconSvg.defs(idPrefix?)
 *   → A <defs> block with standard arrowhead markers and tone
 *     gradients.  idPrefix (default 'ec') namespaces all IDs so
 *     multiple diagrams on the same page never collide.
 *
 * EconSvg.TONES
 *   → The six canonical tone objects (read-only).
 *
 * EconSvg._scale(plotW, plotH)
 *   → Returns {px, py} helpers that map 0..1 → pixel in plot area.
 * ─────────────────────────────────────────────────────────────────────
 */

(function (global) {
  'use strict';

  // ── TONE PALETTE ────────────────────────────────────────────────────
  /** @readonly */
  const TONES = {
    green:  { fill: '#ECFDF5', stroke: '#6EE7B7', title: '#065F46', sub: '#059669', curve: '#059669' },
    amber:  { fill: '#FFFBEB', stroke: '#FCD34D', title: '#92400E', sub: '#B45309', curve: '#D97706' },
    blue:   { fill: '#EFF6FF', stroke: '#93C5FD', title: '#1E3A8A', sub: '#2563EB', curve: '#2563EB' },
    purple: { fill: '#F5F3FF', stroke: '#C4B5FD', title: '#5B21B6', sub: '#7C3AED', curve: '#7C3AED' },
    rose:   { fill: '#FFF1F2', stroke: '#FDA4AF', title: '#9F1239', sub: '#BE123C', curve: '#BE123C' },
    slate:  { fill: '#F1F5F9', stroke: '#CBD5E1', title: '#334155', sub: '#475569', curve: '#475569' },
  };

  // Curve-type defaults
  const CURVE_DEFAULTS = {
    AD:     { tone: 'blue',  slope: 'down' },
    SRAS:   { tone: 'amber', slope: 'up'   },
    LRAS:   { tone: 'green', slope: 'vert' },
    demand: { tone: 'blue',  slope: 'down' },
    supply: { tone: 'green', slope: 'up'   },
    custom: { tone: 'slate', slope: 'up'   },
  };

  // ── DEFAULTS ────────────────────────────────────────────────────────
  const DEFAULT_PAD = { left: 48, top: 36, right: 56, bottom: 44 };
  const AXIS_COLOUR = '#334155';
  const GUIDE_COLOUR = '#94A3B8';
  const FONT_FAMILY = "Inter, system-ui, sans-serif";

  // ── HELPERS ─────────────────────────────────────────────────────────

  /** Escape XML/HTML special chars in text content */
  function esc(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  /** Resolve a tone key → tone object (falls back to slate) */
  function tone(key) {
    return TONES[key] || TONES.slate;
  }

  /** Parse "0 0 640 340" or [0,0,640,340] → {x,y,w,h} */
  function parseViewBox(vb) {
    if (Array.isArray(vb)) {
      return { x: vb[0], y: vb[1], w: vb[2], h: vb[3] };
    }
    const parts = String(vb).trim().split(/[\s,]+/).map(Number);
    return { x: parts[0] || 0, y: parts[1] || 0, w: parts[2] || 640, h: parts[3] || 340 };
  }

  /** Given plot-area w/h return scale helpers */
  function makeScale(plotW, plotH) {
    return {
      px: (v) => v * plotW,
      py: (v) => v * plotH,
    };
  }

  /**
   * If ALL coordinates look normalised (0..1) AND norm !== false,
   * map them into the pixel plot area.
   */
  function normalisePoints(points, plotW, plotH, norm) {
    if (norm === false) return points;
    const allNorm = points.every(([x, y]) => x >= 0 && x <= 1 && y >= 0 && y <= 1);
    if (!allNorm) return points;
    return points.map(([x, y]) => [x * plotW, y * plotH]);
  }

  /** Build a <path d="…"> polyline string from [[x,y],…] */
  function pointsToD(pts) {
    return pts.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${+x.toFixed(2)},${+y.toFixed(2)}`).join(' ');
  }

  /** Arrowhead polygon at the end of a vector pointing from (x1,y1)→(x2,y2) */
  function arrowHead(x1, y1, x2, y2, size, colour) {
    const angle = Math.atan2(y2 - y1, x2 - x1);
    const s = size || 7;
    const pts = [
      [x2, y2],
      [x2 - s * Math.cos(angle - 0.4), y2 - s * Math.sin(angle - 0.4)],
      [x2 - s * Math.cos(angle + 0.4), y2 - s * Math.sin(angle + 0.4)],
    ].map(([px, py]) => `${+px.toFixed(2)},${+py.toFixed(2)}`).join(' ');
    return `<polygon points="${pts}" fill="${esc(colour || AXIS_COLOUR)}"/>`;
  }

  // ── DEFAULT CURVE POINT GENERATORS ──────────────────────────────────
  // These produce default curves for the named types when no points are given.
  // Coordinates are in normalised 0..1 space (will be scaled by normalisePoints).

  const DEFAULT_CURVE_POINTS = {
    // AD: downward sloping left→right
    AD: [[0.05, 0.15], [0.25, 0.35], [0.50, 0.55], [0.75, 0.72], [0.90, 0.85]],
    // SRAS: upward sloping left→right
    SRAS: [[0.10, 0.85], [0.30, 0.65], [0.55, 0.45], [0.75, 0.28], [0.90, 0.15]],
    // demand: same shape as AD
    demand: [[0.05, 0.15], [0.25, 0.35], [0.50, 0.55], [0.75, 0.72], [0.90, 0.85]],
    // supply: same shape as SRAS
    supply: [[0.10, 0.85], [0.30, 0.65], [0.55, 0.45], [0.75, 0.28], [0.90, 0.15]],
  };

  // ── PUBLIC API ───────────────────────────────────────────────────────

  /**
   * EconSvg._scale(plotW, plotH)
   * Returns {px, py} helpers that map 0..1 → pixel coords.
   */
  function _scale(plotW, plotH) {
    return makeScale(plotW, plotH);
  }

  /**
   * EconSvg.defs(idPrefix?)
   * Returns a <defs> block with arrowhead markers and tone gradients.
   * idPrefix defaults to 'ec'.
   */
  function defs(idPrefix) {
    const p = idPrefix || 'ec';
    const gradients = Object.entries(TONES).map(([key, t]) => {
      // Slightly darker stop derived from fill
      return `<linearGradient id="${p}-grad-${key}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${t.fill}"/>
        <stop offset="100%" stop-color="${t.stroke}" stop-opacity="0.35"/>
      </linearGradient>`;
    }).join('\n    ');

    return `<defs>
    ${gradients}
    <filter id="${p}-shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
      <feOffset dx="0" dy="2" result="off"/>
      <feComponentTransfer><feFuncA type="linear" slope="0.18"/></feComponentTransfer>
      <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>`;
  }

  /**
   * EconSvg.svg({ viewBox, width?, height?, children, pad? })
   * Returns a full <svg>…</svg> string.
   */
  function svg({ viewBox, width, height, children, pad }) {
    const vb = parseViewBox(viewBox || '0 0 640 340');
    const vbStr = `${vb.x} ${vb.y} ${vb.w} ${vb.h}`;
    const W = width  != null ? width  : vb.w;
    const H = height != null ? height : vb.h;
    const m = Object.assign({}, DEFAULT_PAD, pad || {});
    const inner = Array.isArray(children) ? children.join('\n') : (children || '');
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vbStr}" width="${W}" height="${H}" style="font-family:${FONT_FAMILY};overflow:visible;">
  <g transform="translate(${m.left},${m.top})">
${inner}
  </g>
</svg>`;
  }

  /**
   * EconSvg.axes({ xLabel, yLabel, xTicks?, yTicks?, w, h, tone? })
   * Returns axes fragment. w/h are the plot-area pixel dimensions.
   */
  function axes({ xLabel, yLabel, xTicks, yTicks, w, h, tone: toneKey }) {
    const axColour = AXIS_COLOUR;
    const arrowSz = 7;
    const tickLen = 4;
    const parts = [];

    // Y-axis (vertical, from bottom to top)
    parts.push(`<line x1="0" y1="${h}" x2="0" y2="0" stroke="${axColour}" stroke-width="1.8"/>`);
    parts.push(arrowHead(0, h * 0.2, 0, 0, arrowSz, axColour));

    // X-axis (horizontal, from left to right)
    parts.push(`<line x1="0" y1="${h}" x2="${w}" y2="${h}" stroke="${axColour}" stroke-width="1.8"/>`);
    parts.push(arrowHead(w * 0.8, h, w, h, arrowSz, axColour));

    // Y-axis label (rotated, left of axis)
    if (yLabel) {
      parts.push(
        `<text x="${-h / 2}" y="-32" transform="rotate(-90)" ` +
        `text-anchor="middle" font-size="12" font-weight="600" ` +
        `fill="${axColour}" letter-spacing="0.3">${esc(yLabel)}</text>`
      );
    }

    // X-axis label (centred below axis)
    if (xLabel) {
      parts.push(
        `<text x="${w / 2}" y="${h + 36}" ` +
        `text-anchor="middle" font-size="12" font-weight="600" ` +
        `fill="${axColour}" letter-spacing="0.3">${esc(xLabel)}</text>`
      );
    }

    // Y-ticks (evenly spaced, from bottom)
    if (yTicks && yTicks.length) {
      const step = h / yTicks.length;
      yTicks.forEach((lbl, i) => {
        const cy = h - (i + 0.5) * step;
        parts.push(`<line x1="-${tickLen}" y1="${+cy.toFixed(1)}" x2="0" y2="${+cy.toFixed(1)}" stroke="${axColour}" stroke-width="1.2"/>`);
        parts.push(
          `<text x="-${tickLen + 4}" y="${+cy.toFixed(1)}" dy="0.35em" ` +
          `text-anchor="end" font-size="10" fill="${axColour}">${esc(lbl)}</text>`
        );
      });
    }

    // X-ticks (evenly spaced)
    if (xTicks && xTicks.length) {
      const step = w / xTicks.length;
      xTicks.forEach((lbl, i) => {
        const cx = (i + 0.5) * step;
        parts.push(`<line x1="${+cx.toFixed(1)}" y1="${h}" x2="${+cx.toFixed(1)}" y2="${h + tickLen}" stroke="${axColour}" stroke-width="1.2"/>`);
        parts.push(
          `<text x="${+cx.toFixed(1)}" y="${h + tickLen + 12}" ` +
          `text-anchor="middle" font-size="10" fill="${axColour}">${esc(lbl)}</text>`
        );
      });
    }

    return parts.join('\n');
  }

  /**
   * EconSvg.curve({ type, points?, tone?, dashed?, opacity?,
   *                 label?, labelPos?, strokeWidth?, norm? })
   * Returns a curve/polyline fragment with optional end label.
   */
  function curve({ type, points, tone: toneKey, dashed, opacity,
                   label, labelPos, strokeWidth, norm, w, h }) {
    const defaults = CURVE_DEFAULTS[type] || CURVE_DEFAULTS.custom;
    const resolvedTone = tone(toneKey || defaults.tone);
    const stroke = resolvedTone.curve;
    const sw = strokeWidth || 2;
    const isDashed = dashed === true;
    const op = opacity != null ? opacity : (isDashed ? 0.55 : 1);
    const dashAttr = isDashed ? 'stroke-dasharray="4 3"' : '';
    const opAttr = op !== 1 ? `opacity="${op}"` : '';

    // Resolve plot dimensions for LRAS vertical line
    const pw = w || 300;
    const ph = h || 240;

    let rawPoints = points;

    // LRAS: vertical line at x=0.6 (normalised) if no points given
    if (!rawPoints && type === 'LRAS') {
      rawPoints = [[0.6, 0.05], [0.6, 0.95]];
    } else if (!rawPoints) {
      rawPoints = DEFAULT_CURVE_POINTS[type] || DEFAULT_CURVE_POINTS.custom ||
                  [[0.1, 0.9], [0.9, 0.1]];
    }

    const pxPts = normalisePoints(rawPoints, pw, ph, norm);
    const d = pointsToD(pxPts);
    const parts = [];

    parts.push(
      `<path d="${d}" fill="none" stroke="${esc(stroke)}" stroke-width="${sw}" ` +
      `stroke-linecap="round" stroke-linejoin="round" ` +
      `${dashAttr} ${opAttr}/>`
    );

    // Optional end label
    if (label) {
      const lastPt = pxPts[pxPts.length - 1];
      const lx = labelPos ? labelPos.x : lastPt[0] + 4;
      const ly = labelPos ? labelPos.y : lastPt[1];
      // White pill background
      const fontSize = 12;
      const charW = fontSize * 0.58;
      const txtW = String(label).length * charW + 10;
      const pillH = fontSize + 6;
      parts.push(
        `<rect x="${+(lx).toFixed(1)}" y="${+(ly - pillH / 2 - 1).toFixed(1)}" ` +
        `width="${+txtW.toFixed(1)}" height="${+pillH.toFixed(1)}" ` +
        `rx="4" fill="white" fill-opacity="0.88"/>`
      );
      parts.push(
        `<text x="${+(lx + 5).toFixed(1)}" y="${+(ly + fontSize / 2 - 1).toFixed(1)}" ` +
        `font-size="${fontSize}" font-weight="700" fill="${esc(stroke)}" ` +
        `dominant-baseline="auto">${esc(label)}</text>`
      );
    }

    return parts.join('\n');
  }

  /**
   * EconSvg.line({ x1,y1,x2,y2, tone?, dashed?, strokeWidth?, opacity? })
   * Returns a single <line> element.
   */
  function line({ x1, y1, x2, y2, tone: toneKey, dashed, strokeWidth, opacity }) {
    const t = tone(toneKey || 'slate');
    const stroke = t.curve;
    const sw = strokeWidth || 1.5;
    const op = opacity != null ? opacity : 1;
    const dashAttr = dashed ? 'stroke-dasharray="4 3"' : '';
    const opAttr = op !== 1 ? `opacity="${op}"` : '';
    return `<line x1="${+x1.toFixed(2)}" y1="${+y1.toFixed(2)}" x2="${+x2.toFixed(2)}" y2="${+y2.toFixed(2)}" stroke="${esc(stroke)}" stroke-width="${sw}" ${dashAttr} ${opAttr} stroke-linecap="round"/>`;
  }

  /**
   * EconSvg.label({ x, y, text, tone?, small?, muted?, pill?,
   *                 anchor?, bold? })
   * Returns a <text> element with optional white pill background.
   */
  function label({ x, y, text, tone: toneKey, small, muted, pill, anchor, bold }) {
    const t = tone(toneKey || 'slate');
    const fill = t.title;
    const fontSize = small ? 11 : 13;
    const fw = bold ? '700' : '400';
    const op = muted ? 0.6 : 1;
    const ta = anchor || 'start';
    const opAttr = op !== 1 ? `opacity="${op}"` : '';

    const parts = [];
    if (pill) {
      const charW = fontSize * 0.58;
      const txtW = String(text).length * charW + 12;
      const pillH = fontSize + 8;
      let rx = x;
      if (ta === 'middle') rx = x - txtW / 2;
      if (ta === 'end') rx = x - txtW;
      parts.push(
        `<rect x="${+rx.toFixed(1)}" y="${+(y - pillH + 2).toFixed(1)}" ` +
        `width="${+txtW.toFixed(1)}" height="${+pillH.toFixed(1)}" ` +
        `rx="4" fill="white" fill-opacity="0.9" stroke="#E2E8F0" stroke-width="0.5"/>`
      );
    }
    parts.push(
      `<text x="${+x.toFixed(1)}" y="${+y.toFixed(1)}" ` +
      `font-size="${fontSize}" font-weight="${fw}" fill="${esc(fill)}" ` +
      `text-anchor="${ta}" ${opAttr}>${esc(text)}</text>`
    );
    return parts.join('\n');
  }

  /**
   * EconSvg.callout({ x, y, title, body, tone?, anchor? })
   * Returns a fixed-width (140px) callout box.
   * anchor: 'left' (box extends right) | 'right' (box extends left).
   */
  function callout({ x, y, title, body, tone: toneKey, anchor }) {
    const t = tone(toneKey || 'slate');
    const boxW = 140;
    const lineH = 15;
    const bodyLines = String(body).length > 22
      ? [String(body).slice(0, 22), String(body).slice(22)]
      : [body];
    const boxH = 16 + lineH + lineH * bodyLines.length + 8;

    const side = anchor || 'left';
    const bx = side === 'right' ? x - boxW - 8 : x + 8;
    const by = y - boxH / 2;

    const parts = [
      `<rect x="${+bx.toFixed(1)}" y="${+by.toFixed(1)}" width="${boxW}" height="${+boxH.toFixed(1)}" ` +
      `rx="6" fill="${t.fill}" stroke="${t.stroke}" stroke-width="1"/>`,

      `<text x="${+(bx + 10).toFixed(1)}" y="${+(by + 16).toFixed(1)}" ` +
      `font-size="12" font-weight="700" fill="${esc(t.title)}">${esc(title)}</text>`,
    ];

    bodyLines.forEach((ln, i) => {
      parts.push(
        `<text x="${+(bx + 10).toFixed(1)}" y="${+(by + 16 + lineH * (i + 1)).toFixed(1)}" ` +
        `font-size="11" fill="${esc(t.sub)}">${esc(ln)}</text>`
      );
    });

    return parts.join('\n');
  }

  /**
   * EconSvg.equilibrium({ x, y, label?, tone?, w?, h? })
   * Returns a filled dot + dashed guide lines to both axes.
   * w/h are the plot-area pixel dimensions (for drawing guide lines to edges).
   */
  function equilibrium({ x, y, label: lbl, tone: toneKey, w, h }) {
    const t = tone(toneKey || 'blue');
    const dotColour = t.curve;
    const guideColour = GUIDE_COLOUR;
    const pw = w || 300;
    const ph = h || 240;

    const parts = [
      // Vertical guide to x-axis
      `<line x1="${+x.toFixed(2)}" y1="${+y.toFixed(2)}" x2="${+x.toFixed(2)}" y2="${+ph.toFixed(2)}" ` +
      `stroke="${guideColour}" stroke-width="1" stroke-dasharray="3 3"/>`,
      // Horizontal guide to y-axis
      `<line x1="0" y1="${+y.toFixed(2)}" x2="${+x.toFixed(2)}" y2="${+y.toFixed(2)}" ` +
      `stroke="${guideColour}" stroke-width="1" stroke-dasharray="3 3"/>`,
      // Dot
      `<circle cx="${+x.toFixed(2)}" cy="${+y.toFixed(2)}" r="5" ` +
      `fill="${esc(dotColour)}" stroke="white" stroke-width="1.5"/>`,
    ];

    if (lbl) {
      parts.push(
        `<text x="${+(x + 8).toFixed(1)}" y="${+(y - 6).toFixed(1)}" ` +
        `font-size="11" font-weight="700" fill="${esc(dotColour)}" ` +
        `dominant-baseline="auto">${esc(lbl)}</text>`
      );
    }

    return parts.join('\n');
  }

  // ── EXPORT ───────────────────────────────────────────────────────────

  const EconSvg = {
    TONES: Object.freeze(TONES),
    _scale,
    defs,
    svg,
    axes,
    curve,
    line,
    label,
    callout,
    equilibrium,
    /** Convenience: escape XML text */
    esc,
  };

  // Export: always set on the global object so the browser picks it up as
  // window.EconSvg.  This package uses "type":"module" (ESM), so the CJS
  // module.exports pattern is intentionally omitted — Node consumers should
  // import via ESM.  The node --check task only validates syntax.
  global.EconSvg = EconSvg;

}(typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : this));
