/* js/blocks/graphics/hubSpoke.js
   ───────────────────────────────────────────────────────────────────────────
   hubSpoke — central node + N spokes radiating around it. Subsumes (and is
   richer than) the legacy satelliteDiagram: each spoke can carry detail body
   text, a tone and an icon, and optional connectors can be drawn from the
   centre to every spoke.

   Schema
   ------
     {
       centre:     { label, value?, tone? },
       spokes:     [ { label, detail?, tone?, icon? } ],   // up to ~8
       connectors: bool                                    // draw centre→spoke lines
     }

   Desktop: spokes flex around the centre on a radial board (CSS).
   @container narrow (≤ --econ-gfx-bp): vertical stack, centre on top.

   Delegates ALL element markup to window.ECONOS_GFX. Registers B.hubSpoke.
   ─────────────────────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  var U = window.ECONOS_BLOCK_UTILS;
  var G = window.ECONOS_GFX;
  var B = window.ECONOS_BLOCKS;
  if (!U || !G || !B) {
    if (window.console) console.warn('[hubSpoke] deps not loaded');
    return;
  }

  B.hubSpoke = function hubSpoke(block) {
    var centre = block.centre && typeof block.centre === 'object' ? block.centre : {};
    var spokes = Array.isArray(block.spokes) ? block.spokes : [];
    var connectors = block.connectors === true && spokes.length > 0;

    /* Centre node — navy hero. value sits above label when present. */
    var centreBody = centre.value
      ? '<span class="gfx-hub__centre-value">' + G.escape(centre.value) + '</span>'
      : '';
    var centreHtml =
      '<div class="gfx-hub__centre">' +
      G.node({
        label: centre.label || '',
        body: centreBody,
        tone: centre.tone,
        solid: true
      }) +
      '</div>';

    /* Spokes — each a toned node positioned by CSS flow around the centre. */
    var spokesHtml = spokes
      .map(function (sp) {
        if (!sp || typeof sp !== 'object') return '';
        return (
          '<div class="gfx-hub__spoke">' +
          G.node({
            label: sp.label || '',
            body: sp.detail || '',
            tone: sp.tone,
            icon: sp.icon
          }) +
          '</div>'
        );
      })
      .join('');

    /* Optional connector overlay: lines from the board centre (50,50) out to
       each spoke seat. Spoke seats use radialCoords on a unit-ish board so the
       SVG (preserveAspectRatio="none") stretches with the layout. Hidden by
       CSS at the narrow breakpoint where the layout becomes a vertical stack. */
    var connectorHtml = '';
    if (connectors) {
      var seats = G.radialCoords(spokes.length, 38, 50, 50);
      var lines = seats.map(function (p) {
        return { x1: 50, y1: 50, x2: p.x, y2: p.y };
      });
      connectorHtml = G.connectorSvg(lines, { w: 100, h: 100 });
    }

    return (
      '<div class="gfx-root gfx-hub' + (connectors ? ' gfx-hub--connected' : '') + '" data-overflow-watch>' +
      '<div class="gfx-hub__board">' +
      connectorHtml +
      '<div class="gfx-hub__spokes">' + spokesHtml + '</div>' +
      centreHtml +
      '</div>' +
      '</div>'
    );
  };
})();
