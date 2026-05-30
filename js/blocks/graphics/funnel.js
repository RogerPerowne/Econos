/* js/blocks/graphics/funnel.js
   ───────────────────────────────────────────────────────────────────────────
   funnel — top-wide to bottom-narrow flow (sales funnel / filtering).

   Schema
   ------
     {
       stages: [
         { label, body?, value?, tone? }   // first stage is widest
       ]
     }

   Desktop: each stage is rendered narrower than the one above it, producing
   the classic funnel silhouette. A down-arrow connector sits between each
   adjacent pair of stages.

   @container narrow (≤ --econ-gfx-bp): full-width stacked stages with a
   downward arrow between each — no width narrowing, readable card stack.

   Delegates ALL element markup to window.ECONOS_GFX. Registers B.funnel.
   ─────────────────────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  var U = window.ECONOS_BLOCK_UTILS;
  var G = window.ECONOS_GFX;
  var B = window.ECONOS_BLOCKS;
  if (!U || !G || !B) {
    if (window.console) console.warn('[funnel] deps not loaded');
    return;
  }

  /* Default tone rotation applied when a stage omits its own tone. */
  var FALLBACK_TONES = ['blue', 'green', 'amber', 'purple', 'rose', 'slate'];

  B.funnel = function funnel(block) {
    var stages = Array.isArray(block.stages) ? block.stages : [];
    var total = stages.length;

    var innerHtml = stages
      .map(function (stage, i) {
        if (!stage || typeof stage !== 'object') return '';

        var tone = stage.tone || FALLBACK_TONES[i % FALLBACK_TONES.length];

        /* value sits inside the node body above the label text when present. */
        var valueHtml = stage.value
          ? '<span class="gfx-funnel__value">' + G.escape(stage.value) + '</span>'
          : '';
        var bodyContent = valueHtml + (stage.body || '');

        /* Width percentage: first stage = 100 %, last = 40 %, interpolated.
           CSS reads the --gfx-funnel-w custom property to set max-width on
           the stage wrapper. */
        var pct = total > 1
          ? Math.round(100 - (60 * i / (total - 1)))
          : 100;

        var stageHtml =
          '<div class="gfx-funnel__stage" style="--gfx-funnel-w:' + pct + '%">' +
          G.node({
            label: stage.label || '',
            body: bodyContent || '',
            tone: tone
          }) +
          '</div>';

        /* Add a down-arrow connector between stages (not after the last). */
        var arrowHtml = i < total - 1
          ? '<div class="gfx-funnel__connector" aria-hidden="true">' + G.arrow('down') + '</div>'
          : '';

        return stageHtml + arrowHtml;
      })
      .join('');

    return (
      '<div class="gfx-root gfx-funnel" data-overflow-watch>' +
      innerHtml +
      '</div>'
    );
  };
})();
