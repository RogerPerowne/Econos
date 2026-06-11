/* ============================================================
   SRAS Shift LEFT – Classical vs Keynesian – engine spec for
   srasShiftLeftClassicalKeynesian.

   The SAME cost shock seen through two AS models. Same demand
   curve, same capacity Yf=0.66, opposite verdict on what happens
   next:

     perspective = 'classical'  → sloping SRAS₁ + vertical LRAS at
       Yf. Cost shock shifts SRAS LEFT (up-left in parallel) so the
       new SR equilibrium sits BELOW Yf at HIGHER P, LOWER Y –
       short-run stagflation. The Classical long-run punchline is
       in the analysis copy: wages then fall, SRAS slides back
       toward SRAS₁, and the economy returns to Yf at P₁.

     perspective = 'keynesian'  → reverse-L AS₁. Cost shock raises
       the PRICE FLOOR (the horizontal range moves UP – costs at
       every output level have risen). Capacity Yf unchanged. With
       AD unchanged, the new equilibrium sits at a higher floor –
       higher P, lower Y. Keynesian punchline: with sticky wages,
       there's no self-correction; the stagflation persists until
       policy acts.

   Every equilibrium is engine-solved via point.intersection.
   ============================================================ */
(function () {
  'use strict';

  var YF = 0.66;
  var P1 = 0.45;

  window.ECONOS_SRAS_SHIFT_LEFT_CLASSICAL_KEYNESIAN_SPEC = {
    width: 440,
    height: 305,
    chartArea: { x: 55, y: 18, width: 360, height: 254 },
    className: 'sras-left-ck-svg',
    layers: ['c-sras1-dash', 'c-sras2', 'c-e2', 'c-cost-arrow', 'k-as1-dash', 'k-as2', 'k-e2', 'k-cost-arrow'],
    inverseLayers: ['c-sras1-solid', 'k-as1-solid'],
    perspectives: ['classical', 'keynesian'],
    defs:
      '<marker id="srasL-arr-rose" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#DC2626"/></marker>',
    axes: {
      x: { label: 'Real output (Y)' },
      y: { label: 'Price level (P)' }
    },

    curves: [
      /* ── Shared AD (no perspective tag – visible in both views) ── */
      { id: 'AD', d: 'M 0.100,0.798 L 0.950,0.118',
        tone: 'blue', label: 'AD', strokeWidth: 2,
        labelDx: -6, labelDy: -10, anchor: 'end' },

      /* ══════════════ CLASSICAL ══════════════ */
      /* LRAS – vertical at Yf, always solid (its shift isn't part of
         this card; it's a fixed capacity reference). */
      { id: 'lras', d: 'M ' + YF + ',0.020 L ' + YF + ',0.880',
        tone: 'purple', label: 'LRAS', strokeWidth: 2.5,
        labelDx: 6, labelDy: -2, anchor: 'start', perspective: 'classical' },
      /* SRAS₁ solid (V1) – slope 0.75, through E₁=(Yf, P₁). */
      { id: 'sras1', d: 'M 0.200,0.105 L 0.900,0.630',
        tone: 'slate', label: 'SRAS₁', strokeWidth: 2,
        labelDx: -6, labelDy: -10, anchor: 'end',
        layer: 'c-sras1-solid', perspective: 'classical' },
      /* SRAS₁ dashed (V2+) – same path, dashed. */
      { d: 'M 0.200,0.105 L 0.900,0.630',
        tone: 'slate', label: 'SRAS₁', strokeWidth: 1.6, dashed: '6 4',
        labelDx: -6, labelDy: -10, anchor: 'end',
        layer: 'c-sras1-dash', perspective: 'classical' },
      /* SRAS₂ solid (V2+) – parallel-left shift: same slope 0.75,
         displaced +0.15 in y (= 0.20 leftward). */
      { id: 'sras2', d: 'M 0.100,0.180 L 0.800,0.705',
        tone: 'slate', label: 'SRAS₂', strokeWidth: 2.2,
        labelDx: -6, labelDy: -10, anchor: 'end',
        layer: 'c-sras2', perspective: 'classical' },

      /* ══════════════ KEYNESIAN ══════════════ */
      /* AS₁ reverse-L (floor 0.30, capacity Yf) – V1 only. */
      { id: 'as1_k',
        shape: { type: 'keynesianAS', flatY: 0.30, kneeX: 0.34, capacityX: YF, top: 0.95, startX: 0.05 },
        tone: 'amber', label: 'AS₁', strokeWidth: 2.5,
        labelDx: 8, labelDy: -8, anchor: 'start',
        layer: 'k-as1-solid', perspective: 'keynesian' },
      /* AS₁ dashed (V2+). */
      { shape: { type: 'keynesianAS', flatY: 0.30, kneeX: 0.34, capacityX: YF, top: 0.95, startX: 0.05 },
        tone: 'amber', label: 'AS₁', strokeWidth: 1.6, dashed: '6 4',
        labelDx: 8, labelDy: -8, anchor: 'start',
        layer: 'k-as1-dash', perspective: 'keynesian' },
      /* AS₂ reverse-L – price FLOOR rises (0.30 → 0.42), capacity
         unchanged. The "cost shock" reading of Keynesian AS. */
      { id: 'as2_k',
        shape: { type: 'keynesianAS', flatY: 0.50, kneeX: 0.34, capacityX: YF, top: 0.95, startX: 0.05 },
        tone: 'amber', label: 'AS₂', strokeWidth: 2.5,
        labelDx: -6, labelDy: -8, anchor: 'end',
        layer: 'k-as2', perspective: 'keynesian' }
    ],

    points: [
      /* ── CLASSICAL ── */
      /* E₁ at AD ∩ LRAS – output at potential Yf, price P₁. */
      { intersection: { curves: ['AD', 'lras'], near: [YF, P1] },
        tone: 'slate', radius: 5.5, hollow: true,
        gridlines: 'slate', ticks: { x: 'Yf', y: 'P₁' },
        label: 'E₁', labelDx: 14, labelDy: -2, anchor: 'start', perspective: 'classical' },
      /* E₂ at AD ∩ SRAS₂ – short-run stagflation: lower Y, higher P. */
      { intersection: { curves: ['AD', 'sras2'], near: [0.56, 0.55] },
        tone: 'rose', radius: 5.5, hollow: true,
        gridlines: 'rose', ticks: { x: 'Y₂', y: 'P₂' },
        label: 'E₂', labelDx: 14, labelDy: -2, anchor: 'start',
        layer: 'c-e2', perspective: 'classical' },

      /* ── KEYNESIAN ── */
      /* E₁ at AD ∩ AS₁ – near capacity on the steep range. */
      { intersection: { curves: ['AD', 'as1_k'], near: [0.62, 0.48] },
        tone: 'slate', radius: 5.5, hollow: true,
        gridlines: 'slate', ticks: { x: 'Y₁', y: 'P₁' },
        label: 'E₁', labelDx: 14, labelDy: -2, anchor: 'start', perspective: 'keynesian' },
      /* E₂ at AD ∩ AS₂ – higher floor pushes equilibrium up-left. */
      { intersection: { curves: ['AD', 'as2_k'], near: [0.45, 0.64] },
        tone: 'rose', radius: 5.5, hollow: true,
        gridlines: 'rose', ticks: { x: 'Y₂', y: 'P₂' },
        label: 'E₂', labelDx: 14, labelDy: -2, anchor: 'start',
        layer: 'k-e2', perspective: 'keynesian' }
    ],

    arrows: [
      /* Classical cost arrow (V2) – perpendicular to the parallel SRAS
         curves, pointing UP-LEFT (the direction of the shift). Centred
         in the open strip between SRAS₁ and SRAS₂, well clear of E₁/E₂. */
      { x1: 0.435, y1: 0.281, x2: 0.363, y2: 0.377,
        tone: 'slate', strokeWidth: 1.8, markerEnd: 'econos-arrow-slate',
        buffer: 4, layer: 'c-cost-arrow', perspective: 'classical' },
      /* Keynesian cost arrow (V2) – price floor rises, a short UPWARD
         arrow in the floor region. */
      { x1: 0.175, y1: 0.295, x2: 0.175, y2: 0.405,
        tone: 'amber', strokeWidth: 1.8, markerEnd: 'econos-arrow-amber',
        buffer: 0, layer: 'k-cost-arrow', perspective: 'keynesian' }
    ],

    texts: [
      /* Keynesian floor-rise caption (V2). */
      { x: 0.175, y: 0.455, text: 'costs ↑', tone: 'rose', bold: true,
        fontSize: 10, anchor: 'middle', layer: 'k-cost-arrow', perspective: 'keynesian' }
    ]
  };
})();
