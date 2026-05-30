/* js/blocks/data-charts/column.js
   ───────────────────────────────────────────────────────────────────────────
   The 'column' kind for the dataChart engine — HORIZONTAL bars: categories
   on the y-axis, value bars extending to the right. Registered onto
   window.ECONOS_DATACHART.

   Why horizontal bars are called "column" here
   --------------------------------------------
   The engine family uses the UI metaphor rather than the chart-library
   convention: a "column" chart puts each category in its own row (column
   of text) and the bar grows rightward. This is the format A-level econ
   uses constantly for cross-country or cross-sector comparisons where the
   labels are long and vertical bars would truncate them.

   Why HTML/CSS bars (not SVG)
   ---------------------------
   Each bar is a <div> whose WIDTH is a percentage of the scale max. The
   bars live in a flex column, so the layout is naturally vertical-friendly
   and reflows on its own container width — no viewBox maths. Tick marks are
   absolutely-positioned vertical lines along the top ruler.

   Features
   --------
   • Value labels sit at the right end of each bar (outside or inside on
     long bars via CSS overflow logic).
   • Auto x-scale via helpers.niceScale — nice round bounds + gridlines.
   • sort handled upstream by the engine (block.sort) before the model arrives.
   • @container dc (max-width: 520px) — already vertical-friendly so bars
     stay as rows; only the ruler tick density is reduced and fonts shrink.
     No dual-markup swap needed (unlike the bar kind).

   Schema additions for this kind (beyond the shared engine fields)
   ---------------------------------------------------------------
     rows:         [{ label, value, tone? }]   — required
     valueSuffix:  string                       — e.g. '%', '£bn'
     sort:         'asc' | 'desc' | false       — handled by engine

   Registers: ECONOS_DATACHART.register('column', fn).
   Loads via <script defer> AFTER data-chart.js.
   ─────────────────────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  var DC = window.ECONOS_DATACHART;
  if (!DC || !DC.register) {
    if (window.console) console.warn('[dataChart:column] engine not loaded before column kind');
    return;
  }

  DC.register('column', function column(model, H) {
    if (!model.rows.length) return '';
    return renderColumn(model, H);
  });

  /* ── Column (horizontal bar) chart ──────────────────────────────────────── */

  function renderColumn(model, H) {
    var rows = model.rows;
    var suffix = model.suffix;
    var escape = H.escape;

    // x-scale: zero-based so bar widths are honest.
    var scale = H.niceScale(Math.min(0, model.dataMin), model.dataMax, { maxTicks: 5 });
    var span = scale.max - scale.min || 1;

    function pct(value) {
      return ((value - scale.min) / span) * 100;
    }

    // Ruler tick marks along the top (like gridlines but vertical).
    var ticks = scale.ticks.map(function (t) {
      var left = round(pct(t));
      return (
        '<div class="dc-hgrid__line" style="left:' + left + '%">' +
        '<span class="dc-hgrid__tick">' + escape(H.fmt(t, suffix)) + '</span>' +
        '</div>'
      );
    }).join('');

    // One row per category.
    var barRows = rows.map(function (r, i) {
      var tone = H.toneClass(r.tone, H.toneFor(i));
      // Width: how far the bar extends from the zero line.
      var zeroLeft = round(pct(0));
      var w = round(clampPct(pct(r.value) - pct(0)));
      var barLeft = round(Math.min(pct(0), pct(r.value)));
      return (
        '<li class="dc-hrow ' + tone + '" role="listitem">' +
        '<div class="dc-hrow__label text-fit-3">' + escape(r.label) + '</div>' +
        '<div class="dc-hrow__track">' +
        // Zero-line reference element (invisible, just anchors the bar).
        '<div class="dc-hrow__bar" style="left:' + barLeft + '%;width:' + w + '%">' +
        '<span class="dc-hrow__value">' + escape(H.fmt(r.value, suffix)) + '</span>' +
        '</div>' +
        // Zero rule (visible only when min < 0).
        '<div class="dc-hrow__zero" style="left:' + zeroLeft + '%" aria-hidden="true"></div>' +
        '</div>' +
        '</li>'
      );
    }).join('');

    return (
      '<div class="dc-hbars">' +
      '<div class="dc-hgrid" aria-hidden="true">' + ticks + '</div>' +
      '<ul class="dc-hcols" role="list">' + barRows + '</ul>' +
      '</div>'
    );
  }

  /* ── small numeric guards ────────────────────────────────────────────────── */

  function clampPct(v) { return v < 0 ? 0 : v > 100 ? 100 : v; }
  function round(v) { return Math.round(v * 100) / 100; }
})();
