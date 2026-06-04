/* ============================================================
   AD Shift — Classical vs Keynesian — engine spec for
   adShiftClassicalKeynesian.

   The SAME rightward AD shift, seen through two AS models, via the
   engine's PERSPECTIVE TOGGLE (a subtle pill above the chart).
   Identical demand stimulus → opposite verdict.

     perspective = 'keynesian'  → the textbook reverse-L AS (flat
       spare-capacity range, rising bottleneck, vertical at Yf), built
       natively by the engine's `keynesianAS` shape. The economy starts
       on the RISING range, below capacity, so AD₁→AD₂ raises BOTH
       output and the price level — but output gains shrink as the
       economy approaches the capacity ceiling.
     perspective = 'classical'  → a vertical LRAS at Yf (the SAME
       capacity output where the Keynesian curve goes vertical — the
       two schools share the long-run ceiling). The economy is always
       at Yf, so AD₁→AD₂ raises ONLY the price level: pure inflation.

   ELEGANCE / ACCURACY: the Keynesian AS is the engine's C¹-continuous
   reverse-L (one recipe, smooth joins). Every equilibrium is solved by
   the engine via `point.intersection` (line ∩ cubic for the Keynesian
   curve, line ∩ line for the vertical LRAS) — no hand-typed coordinates,
   so the dots sit EXACTLY on the curves and the lint gate verifies it.

   Stepped reveal (layers idl-1, idl-2):
     base  → AS (per perspective) + AD₁ solid + E₁
     idl-1 → AD₁ dashed + AD₂ solid + right-shift arrow
     idl-2 → the perspective's E₂
   `inverseLayers: ['idl-old-solid']` hides the AD₁ solid once a view
   becomes active.
   ============================================================ */
(function () {
  'use strict';

  var CAP = 0.66;   // full-capacity output Yf — shared by both schools

  window.ECONOS_AD_SHIFT_CLASSICAL_KEYNESIAN_SPEC = {
    width: 440,
    height: 305,
    chartArea: { x: 55, y: 18, width: 360, height: 254 },
    className: 'ad-shift-ck-svg',
    layers: ['idl-1', 'idl-2'],
    inverseLayers: ['idl-old-solid'],
    perspectives: ['classical', 'keynesian'],
    defs:
      '<marker id="adck-arr-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#1D4ED8"/></marker>',
    axes: {
      x: { label: 'Real output (Y)' },
      y: { label: 'Price level (P)' }
    },

    curves: [
      /* ── Keynesian reverse-L AS (native shape) ── */
      { id: 'keynAS',
        shape: { type: 'keynesianAS', flatY: 0.18, kneeX: 0.34, capacityX: CAP, top: 0.95, startX: 0.06 },
        tone: 'amber', label: 'AS', strokeWidth: 2.5,
        labelDx: 8, labelDy: -8, anchor: 'start',
        perspective: 'keynesian' },

      /* ── Classical vertical LRAS at the same capacity output ── */
      { id: 'lras',
        d: 'M ' + CAP + ',0.000 L ' + CAP + ',0.970',
        tone: 'purple', label: 'LRAS', strokeWidth: 2.5,
        labelDx: 8, labelDy: -2, anchor: 'start',
        perspective: 'classical' },

      /* ── AD₁ solid (base) — hidden once a view activates. Drawn to end
            just above the x-axis so the AD₁ label clears the axis title. ── */
      { id: 'AD1',
        d: 'M 0.060,0.790 L 0.845,0.045',
        tone: 'blue', label: 'AD₁', strokeWidth: 2,
        labelDx: 8, labelDy: -4, anchor: 'start',
        layer: 'idl-old-solid' },
      /* ── AD₁ redrawn dashed (idl-1). Same id NOT reused — this is a
            visual duplicate; the solver uses the base AD1 path. ── */
      { d: 'M 0.060,0.790 L 0.845,0.045',
        tone: 'blue', label: 'AD₁', strokeWidth: 1.6,
        dashed: '6 4', labelDx: 8, labelDy: -4, anchor: 'start',
        layer: 'idl-1' },
      /* ── AD₂ solid, shifted right (idl-1). Label anchored at the
            right-hand end (anchor:'end' keeps it on-stage) and lifted
            clearly ABOVE the line. ── */
      { id: 'AD2',
        d: 'M 0.280,0.801 L 1.000,0.117',
        tone: 'blue', label: 'AD₂', strokeWidth: 2.2,
        labelDx: -4, labelDy: -13, anchor: 'end',
        layer: 'idl-1' }
    ],

    points: [
      /* ── Keynesian E₁ — on the rising range, below capacity ── */
      { intersection: { curves: ['AD1', 'keynAS'], near: [0.55, 0.32] },
        tone: 'slate', radius: 5.5, hollow: true,
        gridlines: 'slate', ticks: { x: 'Y₁', y: 'P₁' },
        label: 'E₁', labelDx: 10, labelDy: -4, anchor: 'start',
        perspective: 'keynesian' },
      /* ── Keynesian E₂ — output AND prices rise (idl-2) ── */
      { intersection: { curves: ['AD2', 'keynAS'], near: [0.62, 0.47] },
        tone: 'green', radius: 5.5, hollow: true,
        gridlines: 'green', ticks: { x: 'Y₂', y: 'P₂' },
        label: 'E₂', labelDx: 10, labelDy: -4, anchor: 'start',
        layer: 'idl-2', perspective: 'keynesian' },

      /* ── Classical E₁ — at full capacity Yf ── */
      { intersection: { curves: ['AD1', 'lras'], near: [CAP, 0.22] },
        tone: 'slate', radius: 5.5, hollow: true,
        gridlines: 'slate', ticks: { y: 'P₁' },
        label: 'E₁', labelDx: 10, labelDy: 12, anchor: 'start',
        perspective: 'classical' },
      /* ── Classical E₂ — only the price level rises (idl-2) ── */
      { intersection: { curves: ['AD2', 'lras'], near: [CAP, 0.44] },
        tone: 'purple', radius: 5.5, hollow: true,
        gridlines: 'purple', ticks: { y: 'P₂' },
        label: 'E₂', labelDx: 10, labelDy: -4, anchor: 'start',
        layer: 'idl-2', perspective: 'classical' }
    ],

    texts: [
      /* Classical Yf tick under the vertical LRAS */
      { x: CAP, y: -0.063, text: 'Yf', tone: 'purple', bold: true,
        fontSize: 12, anchor: 'middle', perspective: 'classical' }
    ],

    arrows: [
      /* Shift arrow (idl-1), shared by both perspectives. Drawn
         PERPENDICULAR to the two parallel AD lines (AD slope ≈ −0.95,
         so the perpendicular points up-and-right ≈ (0.69, 0.73)) and
         centred in the gap between them — the true displacement of a
         parallel rightward shift, not a generic horizontal arrow. */
      { x1: 0.464, y1: 0.434, x2: 0.546, y2: 0.521,
        tone: 'blue', strokeWidth: 1.8,
        markerEnd: 'adck-arr-blue', buffer: 0, layer: 'idl-1' }
    ]
  };
})();
