/* ============================================================
   Output gaps — inflationary gap, Classical vs Keynesian
   (ogInflatCK). Fork of ad-shift-classical-keynesian built for the
   Output Gaps card: the CLASSICAL perspective carries the full SRAS
   mechanism, so the positive gap appears and then closes.

     classical:  AD₁∩LRAS = E₁ (with SRAS₁ through it).
       idl-1 → AD rises; SHORT-RUN equilibrium E₂ at AD₂∩SRAS₁ —
               output ABOVE Yf: the inflationary gap, visible even
               in the classical world.
       idl-2 → self-correction: tight labour markets bid wages UP,
               SRAS₁ → SRAS₂ (left/up), economy lands at E₃ on LRAS
               at a higher price level P₃.
     keynesian: unchanged from the parent spec.
   ============================================================ */
(function () {
  'use strict';

  var CAP = 0.66;   // full-capacity output Yf – shared by both schools

  window.ECONOS_OG_INFLAT_CK_SPEC = {
    width: 440,
    height: 305,
    chartArea: { x: 55, y: 18, width: 360, height: 254 },
    className: 'og-inflat-ck-svg',
    layers: ['idl-1', 'idl-2'],
    inverseLayers: ['idl-old-solid'],
    perspectives: ['classical', 'keynesian'],
    defs:
      '<marker id="ogick-arr-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#1D4ED8"/></marker>' +
      '<marker id="ogick-arr-amber" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#D97706"/></marker>',
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
        d: 'M 0.295,0.020 L 0.980,0.396',
        tone: 'amber', label: 'SRAS₁', strokeWidth: 2.2,
        labelDx: -2, labelDy: 14, anchor: 'end',
        perspective: 'classical' },

      /* ── Classical SRAS₂ — wages rise, SRAS shifts up/left (idl-2) ── */
      { id: 'sras2',
        d: 'M 0.100,0.132 L 0.980,0.616',
        tone: 'amber', label: 'SRAS₂', strokeWidth: 2.2,
        labelDx: -2, labelDy: -10, anchor: 'end',
        layer: 'idl-2', perspective: 'classical' },

      /* ── AD₁ solid (base, left) ── */
      { id: 'AD1',
        d: 'M 0.060,0.790 L 0.845,0.045',
        tone: 'blue', label: 'AD₁', strokeWidth: 2,
        labelDx: -14, labelDy: -22, anchor: 'start',
        layer: 'idl-old-solid' },
      /* ── AD₁ dashed (idl-1) ── */
      { d: 'M 0.060,0.790 L 0.845,0.045',
        tone: 'blue', label: 'AD₁', strokeWidth: 1.6,
        dashed: '6 4', labelDx: -14, labelDy: -22, anchor: 'start',
        layer: 'idl-1' },
      /* ── AD₂ solid, shifted RIGHT (idl-1) ── */
      { id: 'AD2',
        d: 'M 0.280,0.801 L 1.000,0.117',
        tone: 'blue', label: 'AD₂', strokeWidth: 2.2,
        labelDx: -10, labelDy: -38, anchor: 'end',
        layer: 'idl-1' }
    ],

    points: [
      /* ── Keynesian (unchanged from the parent spec) ── */
      { intersection: { curves: ['AD1', 'keynAS'], near: [0.55, 0.32] },
        tone: 'slate', radius: 5.5, hollow: true,
        gridlines: 'slate', ticks: { x: 'Y₁', y: 'P₁' },
        label: 'E₁', labelDx: 14, labelDy: -2, anchor: 'start',
        perspective: 'keynesian' },
      { intersection: { curves: ['AD2', 'keynAS'], near: [0.62, 0.47] },
        tone: 'green', radius: 5.5, hollow: true,
        gridlines: 'green', ticks: { x: 'Y₂', y: 'P₂' },
        label: 'E₂', labelDx: 14, labelDy: -2, anchor: 'start',
        layer: 'idl-2', perspective: 'keynesian' },

      /* ── Classical E₁ at Yf (on LRAS and SRAS₁) ── */
      { intersection: { curves: ['AD1', 'lras'], near: [CAP, 0.22] },
        tone: 'slate', radius: 5.5, hollow: true,
        gridlines: 'slate', ticks: { y: 'P₁' },
        label: 'E₁', labelDx: -14, labelDy: 12, anchor: 'end',
        perspective: 'classical' },
      /* ── Classical SHORT-RUN E₂ at AD₂∩SRAS₁ — gap ABOVE Yf (idl-1) ── */
      { intersection: { curves: ['AD2', 'sras1'], near: [0.79, 0.31] },
        tone: 'rose', radius: 5.5, hollow: true,
        gridlines: 'rose', ticks: { y: 'P₂' },
        label: 'E₂', labelDx: 14, labelDy: -2, anchor: 'start',
        layer: 'idl-1', perspective: 'classical' },
      /* ── Classical LONG-RUN E₃ back on LRAS at higher P₃ (idl-2) ── */
      { intersection: { curves: ['AD2', 'lras'], near: [CAP, 0.44] },
        tone: 'purple', radius: 5.5, hollow: true,
        gridlines: 'purple', ticks: { y: 'P₃' },
        label: 'E₃', labelDx: -14, labelDy: -8, anchor: 'end',
        layer: 'idl-2', perspective: 'classical' }
    ],

    texts: [
      { x: CAP, y: -0.063, text: 'Yf', tone: 'purple', bold: true,
        fontSize: 12, anchor: 'middle', perspective: 'classical' },
      /* Y₂ sits ABOVE the axis — the tick position below collides with
         the right-aligned "Real output (Y)" axis title at this x. */
      { x: 0.806, y: 0.038, text: 'Y₂', tone: 'rose', bold: true,
        fontSize: 12, anchor: 'start', layer: 'idl-1', perspective: 'classical' }
    ],

    arrows: [
      /* AD rightward shift arrow (idl-1) */
      { x1: 0.464, y1: 0.434, x2: 0.546, y2: 0.521,
        tone: 'blue', strokeWidth: 1.8,
        markerEnd: 'ogick-arr-blue', buffer: 0, layer: 'idl-1' },
      /* SRAS upward shift arrow (idl-2, classical) — wages rise */
      { x1: 0.880, y1: 0.395, x2: 0.880, y2: 0.545,
        tone: 'amber', strokeWidth: 1.8,
        markerEnd: 'ogick-arr-amber', buffer: 0,
        layer: 'idl-2', perspective: 'classical' }
    ]
  };
})();
