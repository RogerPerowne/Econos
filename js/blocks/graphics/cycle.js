/* js/blocks/graphics/cycle.js
   ───────────────────────────────────────────────────────────────────────────
   cycle — circular ring of N nodes with directional arrows between them.
   Classic use-cases: the business cycle, circular flow of income.

   Schema
   ------
     {
       nodes:     [ { label, detail?, tone?, icon? } ],  // 2–8 items recommended
       direction: "cw" | "ccw"                           // default "cw"
     }

   Desktop: nodes displayed as a CSS ring (equal-width flex wrap in a circle
   pattern) with directional arrow chips between consecutive nodes. The CSS
   uses a named-counter pattern that places arrows via :nth-child.
   @container narrow (≤ 520px): vertical chain, each node full-width, arrow
   between them points down, and a loop-back arrow from the last node back to
   the first signals the circular nature.

   Delegates ALL element markup to window.ECONOS_GFX. Registers B.cycle.
   ─────────────────────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  var U = window.ECONOS_BLOCK_UTILS;
  var G = window.ECONOS_GFX;
  var B = window.ECONOS_BLOCKS;
  if (!U || !G || !B) {
    if (window.console) console.warn('[cycle] deps not loaded');
    return;
  }

  B.cycle = function cycle(block) {
    var nodes = Array.isArray(block.nodes) ? block.nodes : [];
    var dir = block.direction === 'ccw' ? 'ccw' : 'cw';
    var isCcw = dir === 'ccw';
    var n = nodes.length;

    if (n === 0) {
      return '<div class="gfx-root gfx-cycle"></div>';
    }

    /* Build the ring items: node + arrow after each (arrow points to next). */
    var arrowGlyph = isCcw ? '←' : '→';
    /* For the desktop ring the arrows sit between nodes in the flex layout.
       The cycle--cw / cycle--ccw modifier lets CSS rotate them to follow the
       ring direction. */
    var itemsHtml = nodes
      .map(function (nd, i) {
        if (!nd || typeof nd !== 'object') return '';
        var isLast = i === n - 1;
        var nodeHtml =
          '<div class="gfx-cycle__node">' +
          G.node({
            label: nd.label || '',
            body:  nd.detail || '',
            tone:  nd.tone,
            icon:  nd.icon
          }) +
          '</div>';

        /* Always emit an arrow after each node — the loop-back arrow (after the
           last node) is hidden on desktop via CSS and shown on mobile as the
           "loop back" indicator. */
        var arrowClass = isLast
          ? 'gfx-cycle__arrow gfx-cycle__arrow--loop'
          : 'gfx-cycle__arrow';
        var arrowHtml =
          '<span class="' + arrowClass + '" aria-hidden="true">' +
          arrowGlyph +
          '</span>';

        return nodeHtml + arrowHtml;
      })
      .join('');

    /* data-n lets CSS apply node sizing without a JS style injection. */
    return (
      '<div class="gfx-root gfx-cycle gfx-cycle--' + dir + '" data-n="' + n + '" data-overflow-watch>' +
      '<div class="gfx-cycle__ring">' +
      itemsHtml +
      '</div>' +
      '</div>'
    );
  };
})();
