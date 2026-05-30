/* js/blocks/graphics/richTable.js
   ───────────────────────────────────────────────────────────────────────────
   richTable — rows × columns with rich cells (text + icon + tone).
   The responsive successor to decisionMatrix: desktop renders a real
   labelled grid; narrow reflows each row as a self-describing card where
   every cell becomes a "colHeader: value" line — NOT a horizontal scroll.

   Schema
   ------
     {
       colHeaders: [ string ],                          // required, ≥1
       rows: [
         {
           header?: string,                            // optional row label
           cells: [
             { body: string, tone?: string, icon?: string }
           ]
         }
       ]
     }

   Desktop: CSS grid — column headers across the top, optional row labels
   down the left side, cells filling the interior.

   @container gfx (max-width: 520px): each row becomes a card. The shared
   column-header strip is hidden; each cell is rendered as a labelled line
   showing the column header as a tag + cell content. Row header (when
   present) appears as the card title.

   decisionMatrix is expressible as a richTable with colHeaders +
   rows[].header + single-body cells — no adapter code needed.

   Delegates element markup to window.ECONOS_GFX. Registers B.richTable.
   ─────────────────────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  var U = window.ECONOS_BLOCK_UTILS;
  var G = window.ECONOS_GFX;
  var B = window.ECONOS_BLOCKS;
  if (!U || !G || !B) {
    if (window.console) console.warn('[richTable] deps not loaded');
    return;
  }

  B.richTable = function richTable(block) {
    var colHeaders = Array.isArray(block.colHeaders) ? block.colHeaders : [];
    var rows = Array.isArray(block.rows) ? block.rows : [];
    var nCols = colHeaders.length;

    /* Whether any row carries an explicit row header (decides if we render the
       leading row-header column on desktop). */
    var hasRowHeaders = rows.some(function (r) {
      return r && typeof r === 'object' && r.header != null && r.header !== '';
    });

    /* Column-header strip (desktop).
       When row headers are present the grid has a blank corner cell on the
       left; when absent the columns start at the first colHeader. */
    var headHtml = '';
    if (hasRowHeaders) {
      headHtml += '<div class="gfx-rt__corner" aria-hidden="true"></div>';
    }
    headHtml += colHeaders
      .map(function (h) {
        return '<div class="gfx-rt__colhead">' + G.escape(h || '') + '</div>';
      })
      .join('');

    /* Body rows. Each cell carries:
       - A narrow-only column label (.gfx-rt__cell-label) so the card view
         is self-describing without the desktop header strip.
       - The rich cell content: optional icon pill, body text — all using the
         engine's tone class for background/border/colour. */
    var rowsHtml = rows
      .map(function (row) {
        if (!row || typeof row !== 'object') return '';
        var cells = Array.isArray(row.cells) ? row.cells : [];

        /* Optional row header */
        var rowHeadHtml = hasRowHeaders
          ? '<div class="gfx-rt__rowhead">' + G.escape(row.header || '') + '</div>'
          : '';

        var cellsHtml = cells
          .map(function (cell, i) {
            if (!cell || typeof cell !== 'object') return '';

            /* Narrow-view column label (hidden on desktop) */
            var colLabel =
              i < nCols && colHeaders[i]
                ? '<span class="gfx-rt__cell-label">' + G.escape(colHeaders[i]) + '</span>'
                : '';

            /* Icon rendered via engine helper — sits inline before body text */
            var iconHtml = cell.icon
              ? '<span class="gfx-rt__cell-icon">' + U.renderIcon(cell.icon, 'disc') + '</span>'
              : '';

            var toneClass = G.toneClass(cell.tone, 'slate');

            return (
              '<div class="gfx-rt__cell ' + toneClass + '">' +
              colLabel +
              '<div class="gfx-rt__cell-inner">' +
              iconHtml +
              '<span class="gfx-rt__cell-body">' + G.escape(cell.body || '') + '</span>' +
              '</div>' +
              '</div>'
            );
          })
          .join('');

        return (
          '<div class="gfx-rt__row' + (hasRowHeaders ? ' gfx-rt__row--labelled' : '') + '">' +
          rowHeadHtml +
          cellsHtml +
          '</div>'
        );
      })
      .join('');

    /* Inline custom props drive the grid template without extra class variants.
       --gfx-rt-cols: number of data columns.
       --gfx-rt-has-rowhead: 1 when row headers exist (adds a leading column). */
    var style =
      '--gfx-rt-cols:' + nCols + ';' +
      '--gfx-rt-has-rowhead:' + (hasRowHeaders ? 1 : 0) + ';';

    return (
      '<div class="gfx-root gfx-rt" style="' + style + '" data-overflow-watch>' +
      '<div class="gfx-rt__head">' + headHtml + '</div>' +
      '<div class="gfx-rt__body">' + rowsHtml + '</div>' +
      '</div>'
    );
  };
})();
