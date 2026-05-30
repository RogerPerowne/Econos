/* js/blocks/graphics/quadrant.js
   ───────────────────────────────────────────────────────────────────────────
   quadrant — a 2×2 grid with axis labels (SWOT, BCG matrix, etc.).

   Schema
   ------
     {
       xAxis: { left, right },          // horizontal axis ends
       yAxis: { top, bottom },          // vertical axis ends
       quadrants: [                     // exactly 4, order TL, TR, BL, BR
         { label, items: [string], tone }
       ]
     }

   Desktop: a 2×2 grid of toned panels with the axis labels centred on each
   edge.
   @container narrow (≤ --econ-gfx-bp): the four quadrants stack into a single
   column; the axis labels collapse to an inline "left ↔ right / top ↕ bottom"
   legend so the axes still read.

   Delegates nothing visual to ECONOS_GFX.node (quadrants are list panels, not
   single nodes) but uses ECONOS_GFX.toneClass + escape. Registers B.quadrant.
   ─────────────────────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  var U = window.ECONOS_BLOCK_UTILS;
  var G = window.ECONOS_GFX;
  var B = window.ECONOS_BLOCKS;
  if (!U || !G || !B) {
    if (window.console) console.warn('[quadrant] deps not loaded');
    return;
  }

  /* Default tone rotation if a quadrant omits its tone. */
  var FALLBACK_TONES = ['green', 'blue', 'amber', 'purple'];

  B.quadrant = function quadrant(block) {
    var xAxis = block.xAxis && typeof block.xAxis === 'object' ? block.xAxis : {};
    var yAxis = block.yAxis && typeof block.yAxis === 'object' ? block.yAxis : {};
    var quads = Array.isArray(block.quadrants) ? block.quadrants.slice(0, 4) : [];

    var quadHtml = quads
      .map(function (q, i) {
        if (!q || typeof q !== 'object') return '';
        var tone = G.toneClass(q.tone, FALLBACK_TONES[i % FALLBACK_TONES.length]);
        var items = Array.isArray(q.items) ? q.items : [];
        var labelHtml = q.label
          ? '<div class="gfx-quad__label">' + G.escape(q.label) + '</div>'
          : '';
        var itemsHtml = items.length
          ? '<ul class="gfx-quad__items" role="list">' +
            items
              .map(function (it) {
                /* item text trusted (may carry inline <strong> etc.). */
                return '<li class="gfx-quad__item text-fit-2">' + (it || '') + '</li>';
              })
              .join('') +
            '</ul>'
          : '';
        return (
          '<div class="gfx-quad__cell ' + tone + '" data-overflow-watch>' +
          labelHtml +
          itemsHtml +
          '</div>'
        );
      })
      .join('');

    function axisLabel(cls, text) {
      return text ? '<span class="' + cls + '">' + G.escape(text) + '</span>' : '';
    }

    /* Axis labels — positioned on the edges on desktop, collapse to an inline
       legend at the breakpoint (CSS handles the swap). */
    var axesHtml =
      '<div class="gfx-quad__axes" aria-hidden="true">' +
      axisLabel('gfx-quad__y-top', yAxis.top) +
      axisLabel('gfx-quad__y-bottom', yAxis.bottom) +
      axisLabel('gfx-quad__x-left', xAxis.left) +
      axisLabel('gfx-quad__x-right', xAxis.right) +
      '</div>';

    /* Accessible inline legend (also the visible legend at narrow widths). */
    var legendBits = [];
    if (xAxis.left || xAxis.right) {
      legendBits.push(
        '<span class="gfx-quad__legend-axis">' +
        G.escape(xAxis.left || '') + ' ↔ ' + G.escape(xAxis.right || '') +
        '</span>'
      );
    }
    if (yAxis.top || yAxis.bottom) {
      legendBits.push(
        '<span class="gfx-quad__legend-axis">' +
        G.escape(yAxis.top || '') + ' ↕ ' + G.escape(yAxis.bottom || '') +
        '</span>'
      );
    }
    var legendHtml = legendBits.length
      ? '<div class="gfx-quad__legend">' + legendBits.join('') + '</div>'
      : '';

    return (
      '<div class="gfx-root gfx-quad" data-overflow-watch>' +
      '<div class="gfx-quad__plot">' +
      axesHtml +
      '<div class="gfx-quad__grid">' + quadHtml + '</div>' +
      '</div>' +
      legendHtml +
      '</div>'
    );
  };
})();
