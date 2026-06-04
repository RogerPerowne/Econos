/* ============================================================
   LRAS Shift RIGHT — Classical vs Keynesian — engine spec for
   lrasShiftRightClassicalKeynesian.

   Pure capacity expansion (productivity gains, capital deepening,
   labour-force growth, education / skills, R&D, infrastructure)
   shown as a rightward shift in LONG-RUN aggregate supply with
   the Classical/Keynesian toggle.

   The two schools agree on the direction (Y up, P down) but
   disagree on what "actual output" does:

     perspective = 'classical'  → vertical LRAS at Yf. The economy
       ALWAYS sits on LRAS in the long run, so a rightward shift
       lands actual output exactly at the new Yf₂ with a lower
       price level — clean, sustainable growth.

     perspective = 'keynesian'  → reverse-L AS. The capacity wall
       slides parallel right (floor unchanged), but with AD
       unchanged actual output only rises along the AS rising
       range — it does NOT automatically reach the new potential
       Yf₂. An output gap opens between Y₂ and Yf₂; closing it
       needs demand to catch up.

   No SRAS in the Classical view here — the lesson is purely
   long-run. The short-run cost story belongs on the cost-cut /
   supply-side-policy diagrams, not on the generic LRAS card.

   3 views: start → LRAS / AS shifts right → new equilibrium.
   ============================================================ */
(function () {
  'use strict';

  var YF1 = 0.46;
  var YF2 = 0.66;

  window.ECONOS_LRAS_SHIFT_RIGHT_CLASSICAL_KEYNESIAN_SPEC = {
    width: 440,
    height: 305,
    chartArea: { x: 55, y: 18, width: 360, height: 254 },
    className: 'lras-right-ck-svg',
    layers: [
      'c-lras1-dash', 'c-lras2', 'c-lr-arrow', 'c-e2',
      'k-as1-dash', 'k-as2', 'k-lr-arrow', 'k-e2', 'k-yf2', 'k-gap'
    ],
    inverseLayers: ['c-lras1-solid', 'k-as1-solid'],
    perspectives: ['classical', 'keynesian'],
    defs:
      '<marker id="lrsr-arr-green" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#059669"/></marker>' +
      '<marker id="lrsr-arr-rose" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#E11D48"/></marker>',
    axes: {
      x: { label: 'Real output (Y)' },
      y: { label: 'Price level (P)' }
    },

    curves: [
      /* ── Shared AD (no perspective tag — visible in both views) ── */
      { id: 'AD', d: 'M 0.10,0.798 L 0.95,0.118',
        tone: 'blue', label: 'AD', strokeWidth: 2,
        labelDx: -6, labelDy: -10, anchor: 'end' },

      /* ══════════════ CLASSICAL ══════════════ */
      /* LRAS₁ solid (V1) — vertical at Yf₁. */
      { id: 'lras1', d: 'M ' + YF1 + ',0.020 L ' + YF1 + ',0.880',
        tone: 'purple', label: 'LRAS₁', strokeWidth: 2.5,
        labelDx: 6, labelDy: -2, anchor: 'start',
        layer: 'c-lras1-solid', perspective: 'classical' },
      /* LRAS₁ dashed (V2+). */
      { d: 'M ' + YF1 + ',0.020 L ' + YF1 + ',0.880',
        tone: 'purple', label: 'LRAS₁', strokeWidth: 1.6, dashed: '6 4',
        labelDx: 6, labelDy: -2, anchor: 'start',
        layer: 'c-lras1-dash', perspective: 'classical' },
      /* LRAS₂ solid (V2+) — vertical at Yf₂. */
      { id: 'lras2', d: 'M ' + YF2 + ',0.020 L ' + YF2 + ',0.880',
        tone: 'green', label: 'LRAS₂', strokeWidth: 2.5,
        labelDx: 6, labelDy: -2, anchor: 'start',
        layer: 'c-lras2', perspective: 'classical' },

      /* ══════════════ KEYNESIAN ══════════════ */
      /* AS₁ reverse-L (capacity Yf₁) — V1 only. */
      { id: 'as1_k',
        shape: { type: 'keynesianAS', flatY: 0.30, kneeX: 0.30, capacityX: YF1, top: 0.88, startX: 0.05 },
        tone: 'amber', label: 'AS₁', strokeWidth: 2.5,
        labelDx: 8, labelDy: -8, anchor: 'start',
        layer: 'k-as1-solid', perspective: 'keynesian' },
      /* AS₁ dashed (V2+). */
      { shape: { type: 'keynesianAS', flatY: 0.30, kneeX: 0.30, capacityX: YF1, top: 0.88, startX: 0.05 },
        tone: 'amber', label: 'AS₁', strokeWidth: 1.6, dashed: '6 4',
        labelDx: 8, labelDy: -8, anchor: 'start',
        layer: 'k-as1-dash', perspective: 'keynesian' },
      /* AS₂ reverse-L — PARALLEL right shift (capacity wall slides,
         floor unchanged). V2+. */
      { id: 'as2_k',
        shape: { type: 'keynesianAS', flatY: 0.30, kneeX: 0.50, capacityX: YF2, top: 0.88, startX: 0.05 },
        tone: 'green', label: 'AS₂', strokeWidth: 2.5,
        labelDx: 8, labelDy: -8, anchor: 'start',
        layer: 'k-as2', perspective: 'keynesian' },
      /* Yf₂ marker line (V3) — dashed vertical at new potential. */
      { d: 'M ' + YF2 + ',0.020 L ' + YF2 + ',0.620',
        tone: 'purple', label: 'Yf₂', strokeWidth: 1.6, dashed: '4 4',
        labelDx: 4, labelDy: -2, anchor: 'start',
        layer: 'k-yf2', perspective: 'keynesian' }
    ],

    points: [
      /* ── CLASSICAL ── */
      { intersection: { curves: ['AD', 'lras1'], near: [YF1, 0.55] },
        tone: 'slate', radius: 5.5, hollow: true,
        gridlines: 'slate', ticks: { x: 'Yf₁', y: 'P₁' },
        label: 'E₁', labelDx: 14, labelDy: -2, anchor: 'start', perspective: 'classical' },
      { intersection: { curves: ['AD', 'lras2'], near: [YF2, 0.40] },
        tone: 'green', radius: 5.5, hollow: true,
        gridlines: 'green', ticks: { x: 'Yf₂', y: 'P₂' },
        label: 'E₂', labelDx: 14, labelDy: -2, anchor: 'start',
        layer: 'c-e2', perspective: 'classical' },

      /* ── KEYNESIAN ── */
      { intersection: { curves: ['AD', 'as1_k'], near: [0.38, 0.50] },
        tone: 'slate', radius: 5.5, hollow: true,
        gridlines: 'slate', ticks: { x: 'Y₁', y: 'P₁' },
        label: 'E₁', labelDx: 14, labelDy: -2, anchor: 'start', perspective: 'keynesian' },
      { intersection: { curves: ['AD', 'as2_k'], near: [0.55, 0.36] },
        tone: 'green', radius: 5.5, hollow: true,
        gridlines: 'green', ticks: { x: 'Y₂', y: 'P₂' },
        label: 'E₂', labelDx: 14, labelDy: -2, anchor: 'start',
        layer: 'k-e2', perspective: 'keynesian' }
    ],

    arrows: [
      /* Classical LR shift (V2) — LRAS₁ → LRAS₂, rightward near top. */
      { x1: YF1 + 0.01, y1: 0.78, x2: YF2 - 0.01, y2: 0.78,
        tone: 'green', strokeWidth: 1.8, markerEnd: 'lrsr-arr-green',
        buffer: 0, layer: 'c-lr-arrow', perspective: 'classical' },

      /* Keynesian LR shift (V2) — capacity slides parallel right. */
      { x1: 0.34, y1: 0.255, x2: 0.52, y2: 0.255,
        tone: 'green', strokeWidth: 1.8, markerEnd: 'lrsr-arr-green',
        buffer: 0, layer: 'k-lr-arrow', perspective: 'keynesian' },
      /* Keynesian output-gap arrow (V3) — actual Y₂ to potential Yf₂,
         placed LOW near the x-axis so it reads as a clean gap. */
      { x1: 0.575, y1: 0.090, x2: YF2 - 0.005, y2: 0.090,
        tone: 'rose', strokeWidth: 1.8, markerEnd: 'lrsr-arr-rose',
        buffer: 0, layer: 'k-gap', perspective: 'keynesian' }
    ],

    texts: [
      /* Keynesian output-gap caption (V3). */
      { x: 0.617, y: 0.165, text: 'output gap', tone: 'rose', bold: true,
        fontSize: 10.5, anchor: 'middle', layer: 'k-gap', perspective: 'keynesian' }
    ]
  };
})();
