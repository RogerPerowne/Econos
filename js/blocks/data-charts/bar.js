/* js/blocks/data-charts/bar.js
   ───────────────────────────────────────────────────────────────────────────
   The 'bar' kind for the dataChart engine — VERTICAL bars: categories on the
   x-axis, values on the y-axis. Registered onto window.ECONOS_DATACHART.

   Why HTML/CSS bars (not SVG)
   ---------------------------
   Each bar is a <div> whose HEIGHT is a percentage of the plot. The bars live
   in a flex row, so when the container narrows the bars naturally get thinner
   and the row stays put — no SVG re-projection, no viewBox maths. The value
   axis (gridlines + tick labels) is the only SVG-ish part, and even that is
   pure CSS (absolutely-positioned tick rows). This keeps the bars crisp and
   lets CSS @container own every breakpoint.

   Features
   --------
   • value labels sit above each bar (or inside the bar on tall bars)
   • auto y-scale via helpers.niceScale — nice round bounds + gridlines
   • optional brokenAxis:{from,to} — a DUAL-SCALE axis for outlier data
     (e.g. an income spectrum where the top decile dwarfs the rest). The band
     [from,to] is collapsed to a thin zig-zag break; values below `from` use the
     lower scale, values above `to` use the (compressed) upper scale. The
     zig-zag decoration is drawn across the axis AND across any bar that crosses
     the break, so a reader sees the discontinuity on the bar itself.
   • sort handled upstream by the engine (block.sort) before the model arrives.

   Mobile (@container dc max-width:520px), owned by css/blocks/data-chart.css:
   when bars get too dense to read, the chart flips to a stack-as-card-list:
   one row per category with the label, the value, and a mini horizontal bar.
   BOTH markups are emitted; CSS shows exactly one per width. No overflow.

   Registers: ECONOS_DATACHART.register('bar', fn).
   Loads via <script defer> AFTER data-chart.js.
   ─────────────────────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  var DC = window.ECONOS_DATACHART;
  if (!DC || !DC.register) {
    if (window.console) console.warn('[dataChart:bar] engine not loaded before bar kind');
    return;
  }

  DC.register('bar', function bar(model, H) {
    if (!model.rows.length) return '';
    if (model.broken) return renderBroken(model, H);
    return renderPlain(model, H);
  });

  /* ── Plain (single-scale) bar chart ──────────────────────────────────────── */

  function renderPlain(model, H) {
    var rows = model.rows;
    var suffix = model.suffix;
    var escape = H.escape;

    // y-scale: zero-based so bar heights are honest.
    var scale = H.niceScale(Math.min(0, model.dataMin), model.dataMax, { maxTicks: 5 });
    var span = scale.max - scale.min || 1;

    function pct(value) {
      return ((value - scale.min) / span) * 100;
    }

    var gridlines = scale.ticks.map(function (t) {
      var bottom = pct(t);
      return '<div class="dc-grid__line" style="bottom:' + round(bottom) + '%">' +
        '<span class="dc-grid__tick">' + escape(H.fmt(t, suffix)) + '</span>' +
        '</div>';
    }).join('');

    var bars = rows.map(function (r, i) {
      var tone = H.toneClass(r.tone, H.toneFor(i));
      var h = clampPct(pct(r.value) - pct(0)); // bar height above the zero line
      return (
        '<div class="dc-col ' + tone + '" role="listitem">' +
        '<div class="dc-col__track">' +
        '<div class="dc-col__bar" style="height:' + round(h) + '%">' +
        '<span class="dc-col__value">' + escape(H.fmt(r.value, suffix)) + '</span>' +
        '</div>' +
        '</div>' +
        '<div class="dc-col__label text-fit-3">' + escape(r.label) + '</div>' +
        '</div>'
      );
    }).join('');

    return (
      '<div class="dc-bars" data-dc-broken="0">' +
      '<div class="dc-grid" aria-hidden="true">' + gridlines + '</div>' +
      '<div class="dc-cols" role="list">' + bars + '</div>' +
      '</div>' +
      cardList(model, H)
    );
  }

  /* ── Broken-axis (dual-scale) bar chart ──────────────────────────────────── */
  /* The axis is split into two stacked bands sharing the plot height:
       LOWER band  → values in [0, from]      (true, generous scale)
       UPPER band  → values in [to, dataMax]  (compressed scale for the outliers)
     The break [from,to] is a thin zig-zag strip between them. A bar's height is
     the sum of its lower-band portion + (if it crosses) its upper-band portion,
     with the zig-zag drawn where it crosses. */

  function renderBroken(model, H) {
    var rows = model.rows;
    var suffix = model.suffix;
    var escape = H.escape;
    var from = model.broken.from;
    var to = model.broken.to;

    // Layout: lower band gets the lion's share, upper band a compressed slice.
    var LOWER_FRAC = 62; // % of plot height for [0, from]
    var BREAK_FRAC = 6;  // % for the zig-zag strip
    var UPPER_FRAC = 100 - LOWER_FRAC - BREAK_FRAC; // remainder for [to, max]

    var lowerScale = H.niceScale(0, from, { maxTicks: 4 });
    var upperScale = H.niceScale(to, model.dataMax, { maxTicks: 3, zeroBased: false });
    var upperSpan = upperScale.max - upperScale.min || 1;

    // Map a value to a % height of the WHOLE plot under the dual scale.
    function heightPct(value) {
      if (value <= from) {
        return (value / lowerScale.max) * LOWER_FRAC;
      }
      // value is above the break: full lower band + break + upper portion
      var upperPortion = clamp01((value - upperScale.min) / upperSpan) * UPPER_FRAC;
      return LOWER_FRAC + BREAK_FRAC + upperPortion;
    }

    // Gridlines: lower-band ticks (≤ from) + upper-band ticks (≥ to).
    var lines = [];
    lowerScale.ticks.forEach(function (t) {
      if (t > from + 1e-9) return;
      lines.push(gridLine((t / lowerScale.max) * LOWER_FRAC, t, suffix, H));
    });
    upperScale.ticks.forEach(function (t) {
      if (t < to - 1e-9) return;
      var portion = clamp01((t - upperScale.min) / upperSpan) * UPPER_FRAC;
      lines.push(gridLine(LOWER_FRAC + BREAK_FRAC + portion, t, suffix, H));
    });

    var bars = rows.map(function (r, i) {
      var tone = H.toneClass(r.tone, H.toneFor(i));
      var h = clampPct(heightPct(r.value));
      var crosses = r.value > to;
      var breakDeco = crosses
        ? '<span class="dc-col__break" aria-hidden="true" style="bottom:' + round(LOWER_FRAC) + '%"></span>'
        : '';
      return (
        '<div class="dc-col ' + tone + '" role="listitem">' +
        '<div class="dc-col__track">' +
        '<div class="dc-col__bar" style="height:' + round(h) + '%">' +
        breakDeco +
        '<span class="dc-col__value">' + escape(H.fmt(r.value, suffix)) + '</span>' +
        '</div>' +
        '</div>' +
        '<div class="dc-col__label text-fit-3">' + escape(r.label) + '</div>' +
        '</div>'
      );
    }).join('');

    // The axis-wide zig-zag strip marking the discontinuity.
    var axisBreak =
      '<div class="dc-axisbreak" aria-hidden="true" style="bottom:' + round(LOWER_FRAC) +
      '%;height:' + round(BREAK_FRAC) + '%"></div>';

    return (
      '<div class="dc-bars dc-bars--broken" data-dc-broken="1">' +
      '<div class="dc-grid" aria-hidden="true">' + lines.join('') + axisBreak + '</div>' +
      '<div class="dc-cols" role="list">' + bars + '</div>' +
      '</div>' +
      cardList(model, H)
    );
  }

  function gridLine(bottomPct, value, suffix, H) {
    return '<div class="dc-grid__line" style="bottom:' + round(bottomPct) + '%">' +
      '<span class="dc-grid__tick">' + H.escape(H.fmt(value, suffix)) + '</span>' +
      '</div>';
  }

  /* ── Mobile card-list fallback (shown by CSS at narrow widths) ───────────── */
  /* Each category becomes a row: label · value · mini horizontal bar. The mini
     bar is scaled to the plain data max (or the break `to` so outliers don't
     flatten everything) so the relative sizes still read. */
  function cardList(model, H) {
    var escape = H.escape;
    var cap = model.broken ? model.broken.to : model.dataMax;
    var ref = cap > 0 ? cap : 1;

    var items = model.rows.map(function (r, i) {
      var tone = H.toneClass(r.tone, H.toneFor(i));
      var w = clampPct((r.value / ref) * 100);
      var over = r.value > ref ? ' dc-card__row--over' : '';
      return (
        '<li class="dc-card__row ' + tone + over + '">' +
        '<span class="dc-card__label text-fit-3">' + escape(r.label) + '</span>' +
        '<span class="dc-card__minibar"><span class="dc-card__minifill" style="width:' + round(w) + '%"></span></span>' +
        '<span class="dc-card__value">' + escape(H.fmt(r.value, model.suffix)) + '</span>' +
        '</li>'
      );
    }).join('');

    return '<ul class="dc-cardlist" role="list">' + items + '</ul>';
  }

  /* ── small numeric guards ────────────────────────────────────────────────── */

  function clamp01(v) { return v < 0 ? 0 : v > 1 ? 1 : v; }
  function clampPct(v) { return v < 0 ? 0 : v > 100 ? 100 : v; }
  function round(v) { return Math.round(v * 100) / 100; }
})();
