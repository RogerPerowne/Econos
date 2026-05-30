/* js/blocks/graphics/matrix.js
   ───────────────────────────────────────────────────────────────────────────
   matrix — M×N grid with row + column headers (the generic "table-as-graphic"
   layout: comparison tables, decision grids, etc.).

   Schema
   ------
     {
       colHeaders: [ string ],
       rows: [ { header, cells: [ { body, tone?, icon? } ] } ]
     }

   Desktop: a CSS grid — top-left corner is blank, column headers across the
   top, each row labelled down the side.
   @container narrow (≤ --econ-gfx-bp): each ROW becomes a labelled card with
   its cells stacked under their column-header captions — NOT a horizontal
   scroll. The column header for each cell is emitted as a per-cell caption so
   the narrow view stays self-describing.

   Delegates cell markup to window.ECONOS_GFX.node. Registers B.matrix.
   ─────────────────────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  var U = window.ECONOS_BLOCK_UTILS;
  var G = window.ECONOS_GFX;
  var B = window.ECONOS_BLOCKS;
  if (!U || !G || !B) {
    if (window.console) console.warn('[matrix] deps not loaded');
    return;
  }

  B.matrix = function matrix(block) {
    var colHeaders = Array.isArray(block.colHeaders) ? block.colHeaders : [];
    var rows = Array.isArray(block.rows) ? block.rows : [];
    var nCols = colHeaders.length;

    /* Column-header strip (desktop). The leading corner cell is blank. */
    var headHtml =
      '<div class="gfx-matrix__corner" aria-hidden="true"></div>' +
      colHeaders
        .map(function (h) {
          return '<div class="gfx-matrix__colhead">' + G.escape(h || '') + '</div>';
        })
        .join('');

    /* Body rows. Each cell also carries its column-header text as a caption
       (.gfx-matrix__cell-cap) that is hidden on desktop and revealed when the
       row reflows to a stacked card. */
    var rowsHtml = rows
      .map(function (row) {
        if (!row || typeof row !== 'object') return '';
        var cells = Array.isArray(row.cells) ? row.cells : [];
        var headCell =
          '<div class="gfx-matrix__rowhead">' + G.escape(row.header || '') + '</div>';
        var cellsHtml = cells
          .map(function (cell, i) {
            if (!cell || typeof cell !== 'object') return '';
            var cap =
              i < nCols && colHeaders[i]
                ? '<span class="gfx-matrix__cell-cap">' + G.escape(colHeaders[i]) + '</span>'
                : '';
            return (
              '<div class="gfx-matrix__cell">' +
              cap +
              G.node({
                body: cell.body || '',
                tone: cell.tone,
                icon: cell.icon
              }) +
              '</div>'
            );
          })
          .join('');
        return (
          '<div class="gfx-matrix__row">' + headCell + cellsHtml + '</div>'
        );
      })
      .join('');

    return (
      '<div class="gfx-root gfx-matrix" style="--gfx-matrix-cols:' + nCols + '" data-overflow-watch>' +
      '<div class="gfx-matrix__head">' + headHtml + '</div>' +
      '<div class="gfx-matrix__body">' + rowsHtml + '</div>' +
      '</div>'
    );
  };
})();
