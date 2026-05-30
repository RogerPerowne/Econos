/* js/blocks/graphics/engine.js
   ───────────────────────────────────────────────────────────────────────────
   Structural-graphics SHARED ENGINE — window.ECONOS_GFX

   Every named layout file (hubSpoke, matrix, quadrant, …) delegates to these
   helpers so authors never hand-position elements: they pick a layout by name
   with a tight schema and the engine + CSS do the rest. All helpers are PURE
   functions returning HTML strings, and ALL author text is escaped via the
   shared ECONOS_BLOCK_UTILS.escapeHtml.

   Responsiveness is owned by css/blocks/graphics.css + the per-layout CSS via
   container queries (`@container gfx`), NOT by anything in this file — the JS
   only emits markup, never inline breakpoint logic.

   Public API
   ----------
     ECONOS_GFX.node({ label, body?, tone?, shape?, icon? })  -> node HTML
     ECONOS_GFX.badge({ n?, icon?, tone?, solid? })           -> badge HTML
     ECONOS_GFX.arrow(dir?)                                    -> CSS arrow HTML
     ECONOS_GFX.connectorSvg(lines, opts?)                    -> SVG overlay
     ECONOS_GFX.radialCoords(n, r, cx?, cy?)                  -> [{x,y,angle}]
     ECONOS_GFX.toneClass(tone, fallback?)                    -> 'econ-tone--x'
     ECONOS_GFX.escape(value)                                 -> escaped string

   Loads via <script defer> BEFORE the per-layout files in every shell.
   ─────────────────────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  var U = window.ECONOS_BLOCK_UTILS;
  if (!U) {
    if (window.console) console.warn('[ECONOS_GFX] ECONOS_BLOCK_UTILS not loaded before engine');
    return;
  }

  var escape = U.escapeHtml;

  /* Shape names accepted by node(); map 1:1 to .gfx-node--* CSS modifiers. */
  var SHAPES = { rect: 1, pill: 1, circle: 1, diamond: 1, hex: 1 };

  function toneClass(tone, fallback) {
    return U.toneClass(tone, fallback || 'slate');
  }

  /* node({label, body?, tone?, shape?, icon?, solid?}) — the universal element.
     `solid` paints the navy hero variant (used for hub centres). */
  function node(opts) {
    opts = opts || {};
    var shape = SHAPES[opts.shape] ? opts.shape : 'rect';
    var tone = toneClass(opts.tone, 'slate');
    var solid = opts.solid ? ' gfx-node--solid' : '';
    var iconHtml = opts.icon ? '<div class="gfx-node__icon">' + U.renderIcon(opts.icon, 'disc') + '</div>' : '';
    var labelHtml = opts.label
      ? '<div class="gfx-node__label">' + escape(opts.label) + '</div>'
      : '';
    /* body may carry trusted inline HTML from a data file (matches the
       convention used across the block renderers) — passed through verbatim. */
    var bodyHtml = opts.body
      ? '<div class="gfx-node__body text-fit-2">' + opts.body + '</div>'
      : '';
    return (
      '<div class="gfx-node gfx-node--' + shape + ' ' + tone + solid + '">' +
      iconHtml + labelHtml + bodyHtml +
      '</div>'
    );
  }

  /* badge({n?, icon?, tone?, solid?}) — a numbered or iconed disc. */
  function badge(opts) {
    opts = opts || {};
    var tone = toneClass(opts.tone, 'slate');
    var solid = opts.solid ? ' gfx-badge--solid' : '';
    var inner = opts.icon
      ? U.renderIcon(opts.icon, 'disc')
      : (opts.n != null ? escape(opts.n) : '');
    return '<span class="gfx-badge ' + tone + solid + '" aria-hidden="true">' + inner + '</span>';
  }

  /* arrow(dir?) — a CSS chevron used inside .gfx-flow-row. The glyph stays "→";
     the CSS rotates it 90° at the container breakpoint when the row stacks. */
  function arrow(dir) {
    var glyph = dir === 'down' ? '↓' : '→';
    return '<span class="gfx-arrow" aria-hidden="true">' + glyph + '</span>';
  }

  /* radialCoords(n, r, cx, cy) — evenly-spaced points on a circle of radius r
     around (cx, cy), starting at the top (12 o'clock) and going clockwise.
     Returns [{ x, y, angle }] with angle in degrees. Used by hub / cycle
     layouts to position spokes. Pure geometry — no DOM. */
  function radialCoords(n, r, cx, cy) {
    var count = Math.max(0, n | 0);
    var radius = Number.isFinite(r) ? r : 1;
    var ox = Number.isFinite(cx) ? cx : 0;
    var oy = Number.isFinite(cy) ? cy : 0;
    var out = [];
    for (var i = 0; i < count; i++) {
      var deg = (360 / count) * i - 90; // -90 → start at top
      var rad = (deg * Math.PI) / 180;
      out.push({
        x: ox + radius * Math.cos(rad),
        y: oy + radius * Math.sin(rad),
        angle: deg
      });
    }
    return out;
  }

  /* connectorSvg(lines, opts?) — an absolutely-positioned SVG overlay drawing
     straight connectors. `lines` is [{ x1, y1, x2, y2 }] in the given viewBox.
     opts: { w, h } viewBox dimensions (default 100×100, used with
     preserveAspectRatio="none" so it stretches to the layout box). */
  function connectorSvg(lines, opts) {
    opts = opts || {};
    var w = Number.isFinite(opts.w) ? opts.w : 100;
    var h = Number.isFinite(opts.h) ? opts.h : 100;
    var segs = Array.isArray(lines) ? lines : [];
    var body = segs
      .map(function (l) {
        if (!l) return '';
        return (
          '<line class="gfx-connector__line" x1="' + Number(l.x1 || 0) +
          '" y1="' + Number(l.y1 || 0) +
          '" x2="' + Number(l.x2 || 0) +
          '" y2="' + Number(l.y2 || 0) + '" />'
        );
      })
      .join('');
    return (
      '<svg class="gfx-connector" viewBox="0 0 ' + w + ' ' + h +
      '" preserveAspectRatio="none" aria-hidden="true" focusable="false">' +
      body +
      '</svg>'
    );
  }

  window.ECONOS_GFX = {
    node: node,
    badge: badge,
    arrow: arrow,
    connectorSvg: connectorSvg,
    radialCoords: radialCoords,
    toneClass: toneClass,
    escape: escape
  };
})();
