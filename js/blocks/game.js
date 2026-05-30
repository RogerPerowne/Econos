/* js/blocks/game.js
   ───────────────────────────────────────────────────────────────────────────
   payoffMatrix block — 2×2 (or N×M) strategic-form game matrix.

   Schema:
     {
       type:      'payoffMatrix',
       rowPlayer: string,               // row player label  (e.g. 'Firm A')
       colPlayer: string,               // col player label  (e.g. 'Firm B')
       colLabels: string[],             // column strategy names
       rows: [
         {
           label: string,               // row strategy name
           cells: [
             {
               a: number|string,        // row-player payoff
               b: number|string,        // col-player payoff
               nash?: boolean           // true → highlight as Nash equilibrium
             }
           ]
         }
       ]
     }

   Loads via <script defer> AFTER render-blocks.js in every shell.
   ─────────────────────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  var U = window.ECONOS_BLOCK_UTILS;
  var B = window.ECONOS_BLOCKS;

  if (!U || !B) {
    if (window.console) console.warn('[game.js] ECONOS_BLOCK_UTILS / ECONOS_BLOCKS not found');
    return;
  }

  /* ── payoffMatrix ──────────────────────────────────────────────────────── */
  B.payoffMatrix = function payoffMatrix(block) {
    var rowPlayer = U.escapeHtml(block.rowPlayer || 'Row player');
    var colPlayer = U.escapeHtml(block.colPlayer || 'Column player');
    var colLabels = Array.isArray(block.colLabels) ? block.colLabels : [];
    var rows      = Array.isArray(block.rows) ? block.rows : [];

    if (rows.length === 0) {
      return '<div class="payoff-matrix payoff-matrix--empty">No rows defined.</div>';
    }

    /* ── Column headers ────────────────────────────────────────────────── */
    var colHeadCells = colLabels.map(function (lbl) {
      return (
        '<th class="pm-col-label" scope="col">' +
          U.escapeHtml(String(lbl)) +
        '</th>'
      );
    }).join('');

    var colPlayerHeader =
      '<tr class="pm-col-player-row">' +
        '<td class="pm-corner"></td>' +
        '<th class="pm-col-player-label" colspan="' + (colLabels.length || 1) + '" scope="colgroup">' +
          colPlayer +
        '</th>' +
      '</tr>' +
      '<tr class="pm-col-labels-row">' +
        '<td class="pm-row-player-label" rowspan="' + (rows.length + 1) + '">' +
          '<span class="pm-row-player-text">' + rowPlayer + '</span>' +
        '</td>' +
        colHeadCells +
      '</tr>';

    /* ── Data rows ─────────────────────────────────────────────────────── */
    var rowsHtml = rows.map(function (row) {
      var label = U.escapeHtml(row.label || '');
      var cells = Array.isArray(row.cells) ? row.cells : [];

      var cellsHtml = cells.map(function (cell, idx) {
        if (!cell) return '<td class="pm-cell"></td>';

        var payoffA = U.escapeHtml(String(cell.a != null ? cell.a : ''));
        var payoffB = U.escapeHtml(String(cell.b != null ? cell.b : ''));
        var isNash  = !!cell.nash;

        /* Pad missing column labels */
        if (idx >= colLabels.length) colLabels.push('');

        return (
          '<td class="pm-cell' + (isNash ? ' pm-cell--nash' : '') + '"' +
            (isNash ? ' title="Nash equilibrium"' : '') +
          '>' +
            '<span class="pm-payoff pm-payoff--a">' + payoffA + '</span>' +
            '<span class="pm-payoff-sep">,</span>' +
            '<span class="pm-payoff pm-payoff--b">' + payoffB + '</span>' +
            (isNash ? '<span class="pm-nash-badge" aria-label="Nash equilibrium">NE</span>' : '') +
          '</td>'
        );
      }).join('');

      return (
        '<tr class="pm-row">' +
          '<th class="pm-row-label" scope="row">' + label + '</th>' +
          cellsHtml +
        '</tr>'
      );
    }).join('');

    /* ── Full table ────────────────────────────────────────────────────── */
    return (
      '<div class="payoff-matrix">' +
        '<table class="pm-table" role="table" aria-label="' + rowPlayer + ' vs ' + colPlayer + ' payoff matrix">' +
          '<thead>' +
            colPlayerHeader +
          '</thead>' +
          '<tbody>' +
            rowsHtml +
          '</tbody>' +
        '</table>' +
      '</div>'
    );
  };

}());
