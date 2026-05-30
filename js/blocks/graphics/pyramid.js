/* js/blocks/graphics/pyramid.js
   ───────────────────────────────────────────────────────────────────────────
   pyramid — stacked tiers widening downward (Maslow / hierarchy of needs
   style). The top tier is the narrowest; the bottom tier spans the full
   width. Up to ~7 tiers work well; 3–5 is the sweet-spot.

   Schema
   ------
     {
       tiers: [ { label, body?, tone? } ]   // listed top → bottom
     }

   Desktop: each tier is a trapezoid band (CSS clip-path) that grows wider
   as the index increases, all horizontally centred. The clip makes the
   stepped-triangle silhouette while keeping full-width tappable hit areas.

   @container narrow (≤ --econ-gfx-bp): the clip-path is removed and each
   tier becomes a full-width readable card, stacked in the same top-to-bottom
   order.  No horizontal scrolling; no cramped clipping.

   Delegates element markup to window.ECONOS_GFX. Registers B.pyramid.
   ─────────────────────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  var U = window.ECONOS_BLOCK_UTILS;
  var G = window.ECONOS_GFX;
  var B = window.ECONOS_BLOCKS;
  if (!U || !G || !B) {
    if (window.console) console.warn('[pyramid] deps not loaded');
    return;
  }

  B.pyramid = function pyramid(block) {
    var tiers = Array.isArray(block.tiers) ? block.tiers : [];
    var n = tiers.length;

    var tiersHtml = tiers
      .map(function (tier, i) {
        if (!tier || typeof tier !== 'object') return '';

        /* Width step: top tier = 40%, bottom tier = 100%, linear interpolation.
           With a single tier it is just 100%. */
        var pct = n <= 1 ? 100 : Math.round(40 + ((100 - 40) / (n - 1)) * i);

        /* Clip-path polygon makes the trapezoid silhouette.
           The side taper from centre: each tier clips in by (100-pct)/2 percent
           on both sides. At 100 % (bottom tier) the clip is a rectangle.
           The clip-path is set as a custom property so the @container rule
           can override it to `none` without duplicating per-tier values. */
        var inset = (100 - pct) / 2;
        var clip =
          'polygon(' +
          inset + '% 0%,' +
          (100 - inset) + '% 0%,' +
          '100% 100%,' +
          '0% 100%)';

        /* aria-label gives AT users the tier position; the shape is decorative. */
        return (
          '<div class="gfx-pyramid__tier" data-tier-index="' + i + '"' +
          ' style="--pyr-pct:' + pct + ';--pyr-clip:' + clip + '">' +
          G.node({
            label: tier.label || '',
            body: tier.body || '',
            tone: tier.tone
          }) +
          '</div>'
        );
      })
      .join('');

    return (
      '<div class="gfx-root gfx-pyramid" data-overflow-watch>' +
      '<div class="gfx-pyramid__stack">' +
      tiersHtml +
      '</div>' +
      '</div>'
    );
  };
})();
