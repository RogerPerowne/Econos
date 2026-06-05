/* ============================================================
   LRAS Vertical Interactive – engine spec for lrasVerticalInteractive.
   Long-run-aggregate-supply card 2 "Why LRAS is vertical".

   The lesson: in the LONG RUN a rise in AD raises only the PRICE
   LEVEL, not real output – the economy is pinned at Yf. The
   Classical/Keynesian toggle is the whole point:

     perspective = 'classical' → LRAS vertical at Yf. AD₁ → AD₂
       shifts UP; both equilibria sit at the SAME Yf, so the only
       result is P₁ → P₂. Output is fixed by capacity, full stop.

     perspective = 'keynesian' → reverse-L AS. AD₁ meets the rising
       range BELOW capacity, so the AD₂ shift raises BOTH Y and P;
       the vertical "only P" result holds only once AD reaches the
       capacity ceiling. "LRAS is vertical, but only AT capacity."

   2 views:
     V1 – AD₁ SOLID / E₁ only (the starting equilibrium).
     V2 – AD₁ redrawn DASHED (it is now the "old" curve) + AD₂ solid
          / E₂ + the perpendicular AD-shift arrow drawn in the gap
          between the two AD lines.

   `inverseLayers` swap the SOLID AD₁ for a DASHED AD₁ the moment
   the shift view becomes active – the house rule that a shifted-from
   curve always goes dashed.
   ============================================================ */
(function () {
  'use strict';

  var YF = 0.55;
  var AD1 = 'M 0.10,0.700 L 0.92,0.110';   // starting demand
  var AD2 = 'M 0.22,0.860 L 1.00,0.300';   // shifted up/right (parallel)

  window.ECONOS_LRAS_VERTICAL_INTERACTIVE_SPEC = {
    width: 440,
    height: 305,
    chartArea: { x: 55, y: 18, width: 360, height: 254 },
    className: 'lras-vertical-interactive-svg',
    layers: ['v2'],
    inverseLayers: ['ad1c-solid', 'ad1k-solid'],
    perspectives: ['classical', 'keynesian'],
    axes: {
      x: { label: 'Real output (Y)' },
      y: { label: 'Price level (P)' }
    },

    curves: [
      /* ══════════════ CLASSICAL ══════════════ */
      /* LRAS – vertical at Yf (always visible). */
      { id: 'lras_c', d: 'M ' + YF + ',0.020 L ' + YF + ',0.940',
        tone: 'purple', label: 'LRAS', strokeWidth: 2.5,
        labelDx: 6, labelDy: -2, anchor: 'start', perspective: 'classical' },
      /* AD₁ SOLID – starting demand (V1; swapped out in V2). */
      { id: 'ad1_c', d: AD1,
        tone: 'blue', label: 'AD₁', strokeWidth: 2,
        labelDx: -4, labelDy: 12, anchor: 'end',
        layer: 'ad1c-solid', perspective: 'classical' },
      /* AD₁ DASHED – the "old" curve once the shift happens (V2). */
      { d: AD1,
        tone: 'blue', label: 'AD₁', strokeWidth: 1.6, dashed: '6 4',
        labelDx: -4, labelDy: 12, anchor: 'end',
        layer: 'v2', perspective: 'classical' },
      /* AD₂ SOLID – shifted up/right (V2). */
      { id: 'ad2_c', d: AD2,
        tone: 'green', label: 'AD₂', strokeWidth: 2,
        labelDx: -4, labelDy: 12, anchor: 'end',
        layer: 'v2', perspective: 'classical' },

      /* ══════════════ KEYNESIAN ══════════════ */
      /* Reverse-L AS – always visible. */
      { id: 'as_k',
        shape: { type: 'keynesianAS', flatY: 0.28, kneeX: 0.32, capacityX: YF, top: 0.92, startX: 0.05 },
        tone: 'amber', label: 'AS', strokeWidth: 2.5,
        labelDx: 8, labelDy: -8, anchor: 'start', perspective: 'keynesian' },
      /* Dashed Yf reference so the ceiling reads as a hard wall. */
      { d: 'M ' + YF + ',0.040 L ' + YF + ',0.940',
        tone: 'slate', strokeWidth: 1, dashed: '4 3', perspective: 'keynesian' },
      /* AD₁ SOLID – starting demand (V1; swapped out in V2). */
      { id: 'ad1_k', d: AD1,
        tone: 'blue', label: 'AD₁', strokeWidth: 2,
        labelDx: -4, labelDy: 12, anchor: 'end',
        layer: 'ad1k-solid', perspective: 'keynesian' },
      /* AD₁ DASHED – the "old" curve once the shift happens (V2). */
      { d: AD1,
        tone: 'blue', label: 'AD₁', strokeWidth: 1.6, dashed: '6 4',
        labelDx: -4, labelDy: 12, anchor: 'end',
        layer: 'v2', perspective: 'keynesian' },
      /* AD₂ SOLID – shifted up/right (V2). */
      { id: 'ad2_k', d: AD2,
        tone: 'green', label: 'AD₂', strokeWidth: 2,
        labelDx: -4, labelDy: 12, anchor: 'end',
        layer: 'v2', perspective: 'keynesian' }
    ],

    points: [
      /* ── CLASSICAL ── output pinned at Yf; only P moves ── */
      { intersection: { curves: ['ad1_c', 'lras_c'], near: [YF, 0.38] },
        tone: 'slate', radius: 5.5, hollow: true,
        gridlines: 'slate', ticks: { x: 'Yf', y: 'P₁' },
        label: 'E₁', labelDx: -12, labelDy: -4, anchor: 'end', perspective: 'classical' },
      { intersection: { curves: ['ad2_c', 'lras_c'], near: [YF, 0.60] },
        tone: 'green', radius: 5.5, hollow: true,
        gridlines: 'green', ticks: { y: 'P₂' },
        label: 'E₂', labelDx: 12, labelDy: -4, anchor: 'start',
        layer: 'v2', perspective: 'classical' },

      /* ── KEYNESIAN ── below capacity AD raises Y AND P ── */
      { intersection: { curves: ['ad1_k', 'as_k'], near: [0.40, 0.40] },
        tone: 'slate', radius: 5.5, hollow: true,
        gridlines: 'slate', ticks: { x: 'Y₁', y: 'P₁' },
        label: 'E₁', labelDx: -12, labelDy: -4, anchor: 'end', perspective: 'keynesian' },
      { intersection: { curves: ['ad2_k', 'as_k'], near: [0.52, 0.60] },
        tone: 'green', radius: 5.5, hollow: true,
        gridlines: 'green', ticks: { x: 'Y₂', y: 'P₂' },
        label: 'E₂', labelDx: 12, labelDy: -4, anchor: 'start',
        layer: 'v2', perspective: 'keynesian' }
    ],

    arrows: [
      /* AD shift arrow (V2) – PERPENDICULAR to the AD lines, drawn in
         the gap BETWEEN AD₁ and AD₂, low-left of the equilibria so it
         never clashes with the E / LRAS labels. */
      { x1: 0.380, y1: 0.470, x2: 0.500, y2: 0.620,
        tone: 'blue', strokeWidth: 1.8, markerEnd: 'econos-arrow-blue',
        buffer: 0, layer: 'v2' }
    ]
  };
})();
