(function () {
  'use strict';

  var U = window.ECONOS_BLOCK_UTILS;
  var B = window.ECONOS_BLOCKS;

  /* ------------------------------------------------------------------ */
  /* versusRows                                                           */
  /* {                                                                    */
  /*   left:  { label: string, tone: string },                           */
  /*   right: { label: string, tone: string },                           */
  /*   rows:  [{ criterion: string, left: string, right: string }]       */
  /* }                                                                    */
  /* ------------------------------------------------------------------ */
  B.versusRows = function versusRows(block) {
    var left  = block.left  || {};
    var right = block.right || {};
    var rows  = Array.isArray(block.rows) ? block.rows : [];

    var leftTone  = U.toneClass(left.tone,  'blue');
    var rightTone = U.toneClass(right.tone, 'rose');

    var leftLabel  = U.escapeHtml(left.label  || '');
    var rightLabel = U.escapeHtml(right.label || '');

    /* Column headers */
    var headerHtml =
      '<div class="versus-rows__header" role="row">' +
        '<div class="versus-rows__criterion-cell" role="columnheader"></div>' +
        '<div class="versus-rows__col-head ' + leftTone  + '" role="columnheader">' + leftLabel  + '</div>' +
        '<div class="versus-rows__col-head ' + rightTone + '" role="columnheader">' + rightLabel + '</div>' +
      '</div>';

    /* Data rows — skip any row missing all three fields */
    var rowsHtml = rows.map(function (row) {
      if (!row || (row.criterion == null && row.left == null && row.right == null)) {
        return '';
      }
      var criterion = U.escapeHtml(row.criterion || '');
      var leftCell  = U.escapeHtml(row.left  != null ? row.left  : '');
      var rightCell = U.escapeHtml(row.right != null ? row.right : '');
      return (
        '<div class="versus-rows__row" role="row">' +
          '<div class="versus-rows__criterion text-fit-2" role="rowheader">' + criterion + '</div>' +
          '<div class="versus-rows__cell ' + leftTone  + ' text-fit-2" role="cell">' + leftCell  + '</div>' +
          '<div class="versus-rows__cell ' + rightTone + ' text-fit-2" role="cell">' + rightCell + '</div>' +
        '</div>'
      );
    }).join('');

    return (
      '<div class="versus-rows" role="table" aria-label="' +
        U.escapeAttr(leftLabel + ' vs ' + rightLabel) +
      '" data-overflow-watch>' +
        headerHtml +
        rowsHtml +
      '</div>'
    );
  };

  /* ------------------------------------------------------------------ */
  /* decisionMatrix — DEPRECATED ALIAS of richTable.                      */
  /* {                                                                    */
  /*   columns: [string, ...],                                            */
  /*   rows:    [{ cells: [string, ...] }]                               */
  /* }                                                                    */
  /* Thin adapter: the legacy first column is the row-header column, the  */
  /* remaining columns are data columns. Maps onto richTable so shipped   */
  /* cards keep working and now reflow each row into a self-describing     */
  /* card on the block's own width — no horizontal scroll.                */
  /* Field map: columns[0] -> per-row header label; columns[1..] ->       */
  /*            colHeaders; each row's cells[0] -> row header,             */
  /*            cells[1..] -> richTable cells [{ body }].                  */
  /* ------------------------------------------------------------------ */
  B.decisionMatrix = function decisionMatrix(block) {
    if (typeof B.richTable !== 'function') return '';
    var columns = Array.isArray(block.columns) ? block.columns : [];
    var rows    = Array.isArray(block.rows)    ? block.rows    : [];

    if (columns.length === 0 && rows.length === 0) return '';

    var colHeaders = columns.slice(1);

    var mappedRows = rows
      .filter(function (row) {
        return Array.isArray(row && row.cells) && row.cells.length > 0;
      })
      .map(function (row) {
        var cells = row.cells;
        return {
          header: cells[0] != null ? String(cells[0]) : '',
          cells: cells.slice(1).map(function (cell) {
            return { body: cell != null ? String(cell) : '' };
          })
        };
      });

    return B.richTable({ colHeaders: colHeaders, rows: mappedRows });
  };

  /* ------------------------------------------------------------------ */
  /* trafficLight                                                         */
  /* { green: string, amber: string, red: string }                       */
  /* ------------------------------------------------------------------ */
  B.trafficLight = function trafficLight(block) {
    var bands = [
      { key: 'green', tone: 'green', label: 'Works',   iconChar: '&#10003;' },
      { key: 'amber', tone: 'amber', label: 'Depends',  iconChar: '&#x7e;'  },
      { key: 'red',   tone: 'rose',  label: 'Fails',    iconChar: '&#10007;' }
    ];

    var html = bands.map(function (band) {
      var text = block[band.key];
      /* Skip bands with no text rather than rendering empty */
      if (text == null || String(text).trim() === '') return '';
      var toneClass = U.toneClass(band.tone, 'slate');
      return (
        '<div class="traffic-light__band ' + toneClass + '">' +
          '<span class="traffic-light__icon" aria-hidden="true">' + band.iconChar + '</span>' +
          '<div class="traffic-light__body">' +
            '<span class="traffic-light__verdict">' + U.escapeHtml(band.label) + '</span>' +
            '<span class="traffic-light__text text-fit-2">' + U.escapeHtml(text) + '</span>' +
          '</div>' +
        '</div>'
      );
    }).join('');

    if (!html) return '';

    return '<div class="traffic-light" data-overflow-watch>' + html + '</div>';
  };

  /* ------------------------------------------------------------------ */
  /* glossaryRow                                                          */
  /* { terms: [{ term: string, definition: string }] }                   */
  /* ------------------------------------------------------------------ */
  B.glossaryRow = function glossaryRow(block) {
    var terms = Array.isArray(block.terms) ? block.terms : [];

    /* Skip entries with neither a term nor a definition */
    var validTerms = terms.filter(function (t) {
      return t && (t.term != null || t.definition != null);
    });

    if (validTerms.length === 0) return '';

    var itemsHtml = validTerms.map(function (t) {
      var term       = U.escapeHtml(t.term       != null ? t.term       : '');
      var definition = U.escapeHtml(t.definition != null ? t.definition : '');
      return (
        '<div class="glossary-row__item">' +
          '<dt class="glossary-row__term text-fit-3">' + term + '</dt>' +
          '<dd class="glossary-row__def text-fit-3">'  + definition + '</dd>' +
        '</div>'
      );
    }).join('');

    return (
      '<dl class="glossary-row" data-overflow-watch>' +
        itemsHtml +
      '</dl>'
    );
  };

  /* ------------------------------------------------------------------ */
  /* pair                                                                 */
  /* { vsLabel?: 'vs',                                                    */
  /*   left:  { tone, icon?, head, body },                               */
  /*   right: { tone, icon?, head, body } }                              */
  /* Two-column side-by-side comparison with an optional centre badge.   */
  /* Covers Pattern 2 (Side-by-side pair) from the design catalogue.     */
  /* Sister to versusRows (which is criteria × alternatives).            */
  /* ------------------------------------------------------------------ */
  B.pair = function pair(block) {
    function side(s, fallbackTone) {
      if (!s || typeof s !== 'object') return '';
      var toneCls = U.toneClass(s.tone, fallbackTone);
      var icon = s.icon ? U.renderIcon(s.icon, 'disc') : '';
      var head = s.head != null ? '<h3 class="pair__head">' + U.escapeHtml(s.head) + '</h3>' : '';
      // body unescaped — trusted dev-authored inline HTML (<strong>, <em>, <sub>).
      var body = s.body != null ? '<p class="pair__body text-fit-1">' + s.body + '</p>' : '';
      return (
        '<article class="pair__side ' + toneCls + '" data-overflow-watch>' +
          '<div class="pair__side-top">' + icon + head + '</div>' +
          body +
        '</article>'
      );
    }

    var leftHtml  = side(block.left,  'blue');
    var rightHtml = side(block.right, 'rose');
    if (!leftHtml && !rightHtml) return '';

    var vs = block.vsLabel
      ? '<span class="pair__vs" aria-hidden="true">' + U.escapeHtml(block.vsLabel) + '</span>'
      : '';

    return (
      '<div class="pair" data-overflow-watch>' +
        leftHtml + vs + rightHtml +
      '</div>'
    );
  };

})();
