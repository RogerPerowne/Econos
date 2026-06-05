/* ============================================================
   AS: Short run → Long run – engine spec for asSrToLr.
   Characteristics-of-AS card "From short run to long run" (2.3.1c:
   the relationship between SRAS and LRAS).

   The Classical self-correction story on ONE diagram – how SRAS and
   LRAS relate over time:

     V1  Long-run equilibrium – AD ∩ SRAS₁ sits on the vertical LRAS
         at potential output Yf (E₁).
     V2  Short run: a cost shock shifts SRAS₁ left to SRAS₂. Output
         falls below potential (E₂: Y₂ < Yf, P₂ > P₁) – a negative
         output gap opens. SRAS₁ is redrawn dashed (the "old" curve).
     V3  Long run: with output below capacity, spare resources push
         wages and costs back down, so SRAS shifts BACK right to its
         original position. The economy returns to E₁ on LRAS at Yf.

   Classical-only by design: the self-correction back to Yf IS the
   Classical claim. (Keynesians dispute the speed – noted in copy.)
   Dashed-from-curve + perpendicular shift arrows follow house rules.
   ============================================================ */
(function () {
  'use strict';

  var YF = 0.52;
  var AD     = 'M 0.10,0.780 L 0.92,0.140';
  var SRAS1  = 'M 0.18,0.146 L 0.86,0.758';   // through E₁ on LRAS∩AD
  var SRAS2  = 'M 0.00,0.146 L 0.68,0.758';   // parallel left (cost shock)

  window.ECONOS_AS_SR_TO_LR_SPEC = {
    width: 440,
    height: 305,
    chartArea: { x: 55, y: 18, width: 360, height: 254 },
    className: 'as-sr-to-lr-svg',
    // SRAS₁ solid is a normal layer (not inverse): it shows in V1 AND
    // returns in V3, which the per-view `show` arrays control. An inverse
    // layer would stay hidden for every vi≠0 and never come back.
    layers: ['sras1-solid', 'sras1-dash', 'shock', 'shock-dash', 'correct'],
    axes: {
      x: { label: 'Real output (Y)' },
      y: { label: 'Price level (P)' }
    },

    curves: [
      // AD – fixed throughout.
      { id: 'AD', d: AD, tone: 'blue', label: 'AD', strokeWidth: 2,
        labelDx: -6, labelDy: 8, anchor: 'end' },
      // LRAS – vertical at Yf, fixed throughout.
      { id: 'LRAS', d: 'M ' + YF + ',0.020 L ' + YF + ',0.940',
        tone: 'purple', label: 'LRAS', strokeWidth: 2.5,
        labelDx: 6, labelDy: -2, anchor: 'start' },
      // SRAS₁ SOLID – the reference (V1 + V3); hidden in the shock view.
      { id: 'SRAS1', d: SRAS1, tone: 'slate', label: 'SRAS₁', strokeWidth: 2.2,
        labelDx: 6, labelDy: -4, anchor: 'start', layer: 'sras1-solid' },
      // SRAS₁ DASHED – the shifted-from curve in the shock view (V2).
      { d: SRAS1, tone: 'slate', label: 'SRAS₁', strokeWidth: 1.6, dashed: '6 4',
        labelDx: 6, labelDy: -4, anchor: 'start', layer: 'sras1-dash' },
      // SRAS₂ SOLID – the cost-shock curve (V2).
      { id: 'SRAS2', d: SRAS2, tone: 'rose', label: 'SRAS₂', strokeWidth: 2.4,
        labelDx: -6, labelDy: -4, anchor: 'end', layer: 'shock' },
      // SRAS₂ DASHED – the shifted-from curve as it corrects back (V3).
      { d: SRAS2, tone: 'rose', label: 'SRAS₂', strokeWidth: 1.6, dashed: '6 4',
        labelDx: -6, labelDy: -4, anchor: 'end', layer: 'shock-dash' }
    ],

    points: [
      // E₁ – the long-run equilibrium on LRAS (always shown: the anchor).
      { intersection: { curves: ['AD', 'SRAS1'], near: [YF, 0.45] },
        tone: 'slate', radius: 5.5, hollow: true,
        gridlines: 'slate', ticks: { x: 'Yf', y: 'P₁' },
        label: 'E₁', labelDx: 12, labelDy: -4, anchor: 'start' },
      // E₂ – short-run equilibrium below potential (V2).
      { intersection: { curves: ['AD', 'SRAS2'], near: [0.42, 0.53] },
        tone: 'rose', radius: 5.5, hollow: true,
        gridlines: 'rose', ticks: { x: 'Y₂', y: 'P₂' },
        label: 'E₂', labelDx: -12, labelDy: -6, anchor: 'end', layer: 'shock' }
    ],

    arrows: [
      // V2 shock – perpendicular to SRAS, in the gap, pointing up-left to SRAS₂.
      { x1: 0.420, y1: 0.362, x2: 0.320, y2: 0.470,
        tone: 'rose', strokeWidth: 1.7, markerEnd: 'econos-arrow-rose',
        buffer: 0, layer: 'shock' },
      // V2 output gap – along the x-axis from Y₂ back to Yf.
      { x1: 0.430, y1: 0.055, x2: YF - 0.005, y2: 0.055,
        tone: 'slate', strokeWidth: 1.5, markerEnd: 'econos-arrow-slate',
        buffer: 0, layer: 'shock' },
      // V3 self-correction – perpendicular, pointing down-right back to SRAS₁.
      { x1: 0.320, y1: 0.470, x2: 0.420, y2: 0.362,
        tone: 'green', strokeWidth: 1.7, markerEnd: 'econos-arrow-green',
        buffer: 0, layer: 'correct' }
    ],

    texts: [
      // V2 output-gap caption.
      { x: 0.475, y: 0.120, text: 'output gap', tone: 'slate', bold: true,
        fontSize: 10.5, anchor: 'middle', layer: 'shock' },
      // V3 self-correction caption.
      { x: 0.250, y: 0.430, text: 'SRAS returns', tone: 'green', bold: true,
        fontSize: 10.5, anchor: 'middle', layer: 'correct' }
    ]
  };
})();
