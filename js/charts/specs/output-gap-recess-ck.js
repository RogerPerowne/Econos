/* ============================================================
   Output gaps — recessionary gap, Classical vs Keynesian
   (ogRecessCK). Fork of ad-shift-left-classical-keynesian built for
   the Output Gaps card: the CLASSICAL perspective now carries the
   full SRAS mechanism, so the gap actually appears and then closes.

     classical:  AD₁∩LRAS = E₁ (with SRAS₁ through it).
       idl-1 → AD falls; SHORT-RUN equilibrium E₂ at AD₂∩SRAS₁ —
               output below Yf: the recessionary gap, visible even
               in the classical world.
       idl-2 → self-correction: wages fall, SRAS₁ → SRAS₂, economy
               lands at E₃ on LRAS at a lower price level P₃.
     keynesian: unchanged from the parent spec — sticky wages, the
               economy sits at E₂ below capacity and the gap persists.

   Shared by no other topic (the 7 other consumers of the parent spec
   keep its pure-LRAS classical story).
   ============================================================ */
(function () {
  'use strict';

  var CAP = 0.66;   // full-capacity output Yf – shared by both schools

  window.ECONOS_OG_RECESS_CK_SPEC = {
    width: 440,
    height: 305,
    chartArea: { x: 55, y: 18, width: 360, height: 254 },
    className: 'og-recess-ck-svg',
    layers: ['idl-1', 'idl-2'],
    inverseLayers: ['idl-old-solid'],
    perspectives: ['classical', 'keynesian'],

    axes: {
      x: { label: 'Real output (Y)' },
      y: { label: 'Price level (P)' }
    },

    curves: [
      /* ── Keynesian reverse-L AS ── */
      { id: 'keynAS',
        shape: { type: 'keynesianAS', flatY: 0.18, kneeX: 0.34, capacityX: CAP, top: 0.95, startX: 0.06 },
        tone: 'amber', label: 'AS', strokeWidth: 2.5,
        labelDx: 8, labelDy: -8, anchor: 'start',
        perspective: 'keynesian' },

      /* ── Classical vertical LRAS ── */
      { id: 'lras',
        d: 'M ' + CAP + ',0.000 L ' + CAP + ',0.970',
        tone: 'purple', label: 'LRAS', strokeWidth: 2.5,
        labelDx: 8, labelDy: -2, anchor: 'start',
        perspective: 'classical' },

      /* ── Classical SRAS₁ through E₁ (slope 0.55) ── */
      { id: 'sras1',
        d: 'M 0.100,0.132 L 0.980,0.616',
        tone: 'amber', label: 'SRAS₁', strokeWidth: 2.2,
        labelDx: -2, labelDy: -10, anchor: 'end',
        perspective: 'classical' },

      /* ── Classical SRAS₂ — wages fall, SRAS shifts down/right (idl-2) ── */
      { id: 'sras2',
        d: 'M 0.295,0.020 L 0.980,0.396',
        tone: 'amber', label: 'SRAS₂', strokeWidth: 2.2,
        labelDx: -2, labelDy: 14, anchor: 'end',
        layer: 'idl-2', perspective: 'classical' },

      /* ── AD₁ solid (base, right) ── */
      { id: 'AD1',
        d: 'M 0.280,0.801 L 1.000,0.117',
        tone: 'blue', label: 'AD₁', strokeWidth: 2,
        labelDx: -10, labelDy: -38, anchor: 'end',
        layer: 'idl-old-solid' },
      /* ── AD₁ dashed (idl-1) ── */
      { d: 'M 0.280,0.801 L 1.000,0.117',
        tone: 'blue', label: 'AD₁', strokeWidth: 1.6,
        dashed: '6 4', labelDx: -10, labelDy: -38, anchor: 'end',
        layer: 'idl-1' },
      /* ── AD₂ solid, shifted LEFT (idl-1) ── */
      { id: 'AD2',
        d: 'M 0.060,0.790 L 0.845,0.045',
        tone: 'blue', label: 'AD₂', strokeWidth: 2.2,
        labelDx: -14, labelDy: -22, anchor: 'start',
        layer: 'idl-1' }
    ],

    points: [
      /* ── Keynesian (unchanged from the parent spec) ── */
      { intersection: { curves: ['AD1', 'keynAS'], near: [0.62, 0.47] },
        tone: 'slate', radius: 5.5, hollow: true,
        gridlines: 'slate', ticks: { x: 'Y₁', y: 'P₁' },
        label: 'E₁', labelDx: 14, labelDy: -2, anchor: 'start',
        perspective: 'keynesian' },
      { intersection: { curves: ['AD2', 'keynAS'], near: [0.55, 0.32] },
        tone: 'blue', radius: 5.5, hollow: true,
        gridlines: 'blue', ticks: { x: 'Y₂', y: 'P₂' },
        label: 'E₂', labelDx: 14, labelDy: -2, anchor: 'start',
        layer: 'idl-2', perspective: 'keynesian' },

      /* ── Classical E₁ at Yf (on LRAS and SRAS₁) ── */
      { intersection: { curves: ['AD1', 'lras'], near: [CAP, 0.44] },
        tone: 'slate', radius: 5.5, hollow: true,
        gridlines: 'slate', ticks: { y: 'P₁' },
        label: 'E₁', labelDx: 14, labelDy: -2, anchor: 'start',
        perspective: 'classical' },
      /* ── Classical SHORT-RUN E₂ at AD₂∩SRAS₁ — the gap appears (idl-1) ── */
      { intersection: { curves: ['AD2', 'sras1'], near: [0.51, 0.36] },
        tone: 'rose', radius: 5.5, hollow: true,
        gridlines: 'rose', ticks: { x: 'Y₂', y: 'P₂' },
        label: 'E₂', labelDx: -14, labelDy: -8, anchor: 'end',
        layer: 'idl-1', perspective: 'classical' },
      /* ── Classical LONG-RUN E₃ back on LRAS at lower P₃ (idl-2) ── */
      { intersection: { curves: ['AD2', 'lras'], near: [CAP, 0.22] },
        tone: 'purple', radius: 5.5, hollow: true,
        gridlines: 'purple', ticks: { y: 'P₃' },
        label: 'E₃', labelDx: 14, labelDy: -2, anchor: 'start',
        layer: 'idl-2', perspective: 'classical' }
    ],

    texts: [
      { x: CAP, y: -0.063, text: 'Yf', tone: 'purple', bold: true,
        fontSize: 12, anchor: 'middle', perspective: 'classical' }
    ],

    arrows: [
      /* AD leftward shift arrow (idl-1) */
      { x1: 0.546, y1: 0.521, x2: 0.464, y2: 0.434,
        tone: 'blue', strokeWidth: 1.8,
        markerEnd: 'econos-arrow-blue', buffer: 0, layer: 'idl-1' },
      /* SRAS downward shift arrow (idl-2, classical) — wages fall */
      { x1: 0.880, y1: 0.545, x2: 0.880, y2: 0.395,
        tone: 'amber', strokeWidth: 1.8,
        markerEnd: 'econos-arrow-amber', buffer: 0,
        layer: 'idl-2', perspective: 'classical' }
    ]
  };
})();
