/* ============================================================
   AS Intro – Classical vs Keynesian – engine spec for
   asIntroClassicalKeynesian.

   The card that INTRODUCES aggregate supply. The toggle IS the
   lesson: the two schools disagree about the shape of AS itself.

     perspective = 'classical'  → SRAS (upward-sloping, short-run
       sticky costs) + LRAS (vertical at potential output Yf). Two
       distinct curves, two distinct time horizons.

     perspective = 'keynesian'  → reverse-L AS: flat at the price
       floor (massive spare capacity with stable unit costs), then
       a bottleneck Bezier transition, then vertical at Yf. ONE
       curve carrying both ranges.

   2 views:
     V1 – Just the AS curve(s). The lesson of "what does AS look
          like?" lands without any AD context.
     V2 – Add AD and the equilibrium point E₁. The two schools'
          equilibrium definitions emerge.
   ============================================================ */
(function () {
  'use strict';

  var YF = 0.66;

  window.ECONOS_AS_INTRO_CLASSICAL_KEYNESIAN_SPEC = {
    width: 440,
    height: 305,
    chartArea: { x: 55, y: 18, width: 360, height: 254 },
    className: 'as-intro-ck-svg',
    layers: ['ad', 'e1'],
    perspectives: ['classical', 'keynesian'],
    axes: {
      x: { label: 'Real output (Y)' },
      y: { label: 'Price level (P)' }
    },

    curves: [
      /* ══════════════ CLASSICAL ══════════════ */
      /* SRAS – upward-sloping (always visible in Classical view). */
      { id: 'sras', d: 'M 0.20,0.20 L 0.90,0.85',
        tone: 'slate', label: 'SRAS', strokeWidth: 2,
        labelDx: -6, labelDy: -10, anchor: 'end', perspective: 'classical' },
      /* LRAS – vertical at Yf (always visible in Classical view). */
      { id: 'lras', d: 'M ' + YF + ',0.020 L ' + YF + ',0.880',
        tone: 'purple', label: 'LRAS', strokeWidth: 2.5,
        labelDx: 6, labelDy: -2, anchor: 'start', perspective: 'classical' },
      /* AD – revealed in V2 only. */
      { id: 'AD_c', d: 'M 0.10,0.798 L 0.95,0.118',
        tone: 'blue', label: 'AD', strokeWidth: 2,
        labelDx: -6, labelDy: -10, anchor: 'end',
        layer: 'ad', perspective: 'classical' },

      /* ══════════════ KEYNESIAN ══════════════ */
      /* Reverse-L AS – always visible in Keynesian view. */
      { id: 'as_k',
        shape: { type: 'keynesianAS', flatY: 0.30, kneeX: 0.34, capacityX: YF, top: 0.92, startX: 0.05 },
        tone: 'amber', label: 'AS', strokeWidth: 2.5,
        labelDx: 8, labelDy: -8, anchor: 'start', perspective: 'keynesian' },
      /* AD – revealed in V2 only. */
      { id: 'AD_k', d: 'M 0.10,0.798 L 0.95,0.118',
        tone: 'blue', label: 'AD', strokeWidth: 2,
        labelDx: -6, labelDy: -10, anchor: 'end',
        layer: 'ad', perspective: 'keynesian' }
    ],

    points: [
      /* Classical E₁ at AD ∩ LRAS ∩ SRAS (the LR triple intersection). */
      { intersection: { curves: ['AD_c', 'lras'], near: [YF, 0.45] },
        tone: 'slate', radius: 5.5, hollow: true,
        gridlines: 'slate', ticks: { x: 'Yf', y: 'P₁' },
        label: 'E₁', labelDx: 14, labelDy: -2, anchor: 'start',
        layer: 'e1', perspective: 'classical' },

      /* Keynesian E₁ on the steep range below capacity. */
      { intersection: { curves: ['AD_k', 'as_k'], near: [0.60, 0.50] },
        tone: 'slate', radius: 5.5, hollow: true,
        gridlines: 'slate', ticks: { x: 'Y₁', y: 'P₁' },
        label: 'E₁', labelDx: 14, labelDy: -2, anchor: 'start',
        layer: 'e1', perspective: 'keynesian' }
    ]
  };
})();
