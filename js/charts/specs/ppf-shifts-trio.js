/* ============================================================
   PPF – "three kinds of shift" (1.1.4 card 5).
   Three side-by-side mini PPFs (outward / inward / biased), each
   with a coloured curve pair and an arrow showing the direction
   of shift. The header band per panel + bottom label are baked
   into the card data (methodGrid above the chart), so each panel
   here is just the chart.
   ============================================================ */
(function () {
  'use strict';

  // Shared PPF₁ shape – kept compact so each PPF₂ has clear visual
  // room to shift inward/outward without crowding inside small panels.
  var PPF1 = 'M 0,0.62 C 0.32,0.62 0.62,0.32 0.62,0';

  // Outward PPF₂ – clearly bigger frontier
  var PPF2_OUT  = 'M 0,0.95 C 0.50,0.95 0.95,0.50 0.95,0';
  // Inward  PPF₂ – clearly smaller frontier
  var PPF2_IN   = 'M 0,0.36 C 0.18,0.36 0.36,0.18 0.36,0';
  // Biased  PPF₂ – productivity gain stretches the X axis more than Y
  var PPF2_BIAS = 'M 0,0.72 C 0.30,0.72 0.92,0.28 0.92,0';

  // Build a panel. The shift arrow is declared geometrically via the
  // engine's `perpendicular: { from, t, to }` solver – anchored at t
  // on PPF₁, cast perpendicular until it hits PPF₂. Guarantees the
  // arrow truly sits BETWEEN the two curves (no eyeballed coords).
  //
  // NOTE: curve ids must be unique ACROSS panels – the engine merges
  // every panel's curve registry into one shared lookup, so reusing
  // 'ppf1'/'ppf2' across panels meant the third panel's curves
  // overwrote the first two, and all three arrows resolved against the
  // BIASED PPF₂. The `tone` suffix keeps each panel's lookup distinct.
  // arrowT defaults to 0.5 (curve midpoint) – the symmetric outward/
  // inward panels read well from there. The biased panel uses 0.7 so
  // the arrow anchors further down-and-right on PPF₁, where the two
  // curves visibly diverge by ≈0.18 chart-units (vs ~0.11 at t=0.5
  // where the curves are still close to the top-left corner and the
  // arrowhead crowds the curve). Numerically verified via
  // ray-cubic intersection probe before shipping.
  function panel(originX, ppf2D, tone, title, arrowT) {
    var id1 = 'ppf1-' + tone, id2 = 'ppf2-' + tone;
    return {
      chartArea: { x: originX + 40, y: 44, width: 170, height: 161 },
      title: title,
      titleTone: tone,
      titleSize: 12,
      axes: { x: { label: 'Consumer' }, y: { label: 'Capital' } },
      curves: [
        // PPF₁ label lifted up off the x-axis so it doesn't collide with
        // PPF₂'s end label (the two curves' right-end x-positions are too
        // close together for the small 170px panels).
        { id: id1, d: PPF1,  tone: tone, strokeWidth: 2.4, dashed: '6 4', label: 'PPF₁', labelTone: tone, labelDx: 4, labelDy: -32 },
        // PPF₂ label pulled WELL left of the curve endpoint (labelDx: -34)
        // so it fits inside the panel even when PPF₂ ends near x=1. The
        // old offset (-4) overflowed the panel's right edge by ~17px in
        // the outward panel and ~12px in the biased panel – caught by
        // the engine's new per-panel off-stage check once curve labels
        // started being tracked in placedBoxes (v0.41.11).
        { id: id2, d: ppf2D, tone: tone, strokeWidth: 2.8,                label: 'PPF₂', labelTone: tone, labelDx: -34, labelDy: -10 }
      ],
      arrows: [
        // buffer:3 (not the default 14) – the perpendicular gap between
        // PPF₁ and PPF₂ in these compact 170×175 panels is only ~50px,
        // so the default end-pull would shrink the visible arrow to a
        // tiny tick. With buffer:3 the arrow clearly spans between the
        // two curves and the arrowhead direction is unambiguous.
        { perpendicular: { from: id1, t: (arrowT != null ? arrowT : 0.5), to: id2 },
          tone: tone, strokeWidth: 2.6, lineCap: 'round',
          markerEnd: 'econos-arrow-' + tone, buffer: 3 }
      ]
    };
  }

  window.ECONOS_PPF_SHIFTS_TRIO_SPEC = {
    width: 660,
    height: 244,
    divider: { x: 220, y1: 30, y2: 234, stroke: '#E2E8F0', dashed: '4 4' },
    panels: [
      panel(  0, PPF2_OUT,  'green',  'Outward shift'),
      panel(220, PPF2_IN,   'rose',   'Inward shift'),
      panel(440, PPF2_BIAS, 'purple', 'Biased shift', 0.7)
    ]
  };
})();
