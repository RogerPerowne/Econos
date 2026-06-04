/* ============================================================
   AD Shift LEFT — Classical vs Keynesian — engine spec for
   adShiftLeftClassicalKeynesian.

   The MIRROR of ad-shift-classical-keynesian: the same Classical-vs-
   Keynesian perspective toggle, but now AD shifts LEFT (contractionary
   policy). Same AS curves shared by both schools, same CAP=0.66; what
   flips is the starting position (AD₁ is at the RIGHT, the high-demand
   state) and the direction of motion.

     perspective = 'keynesian'  → reverse-L AS. Economy starts on the
       steep range near capacity, so AD₁→AD₂ lowers BOTH output and
       the price level — but output loss is small at first, then grows
       as the economy drops down the bottleneck.
     perspective = 'classical'  → vertical LRAS at Yf. Economy always
       at capacity, so AD₁→AD₂ lowers ONLY the price level: pure
       disinflation, no output cost.

   Every dot is engine-solved via `point.intersection` (line ∩ Bezier
   for Keynesian; line ∩ line for Classical). `inverseLayers:
   ['idl-old-solid']` hides the AD₁ solid once a view activates.

   Stepped reveal (layers idl-1, idl-2):
     base  → AS (per perspective) + AD₁ solid (right) + E₁
     idl-1 → AD₁ dashed + AD₂ solid (left) + leftward shift arrow
     idl-2 → the perspective's E₂ (after contraction)
   ============================================================ */
(function () {
  'use strict';

  var CAP = 0.66;   // full-capacity output Yf — shared by both schools

  window.ECONOS_AD_SHIFT_LEFT_CLASSICAL_KEYNESIAN_SPEC = {
    width: 440,
    height: 305,
    chartArea: { x: 55, y: 18, width: 360, height: 254 },
    className: 'ad-shift-left-ck-svg',
    layers: ['idl-1', 'idl-2'],
    inverseLayers: ['idl-old-solid'],
    perspectives: ['classical', 'keynesian'],
    defs:
      '<marker id="adckL-arr-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#1D4ED8"/></marker>',
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

      /* ── AD₁ solid (base, RIGHT position — the overheated starting
            point). Hidden once a view activates; the dashed copy below
            takes over. AD₂ in the prior expansionary spec lives here. ── */
      { id: 'AD1',
        d: 'M 0.280,0.801 L 1.000,0.117',
        tone: 'blue', label: 'AD₁', strokeWidth: 2,
        labelDx: -10, labelDy: -38, anchor: 'end',
        layer: 'idl-old-solid' },
      /* ── AD₁ redrawn dashed (idl-1). Solver uses the base AD1 path. ── */
      { d: 'M 0.280,0.801 L 1.000,0.117',
        tone: 'blue', label: 'AD₁', strokeWidth: 1.6,
        dashed: '6 4', labelDx: -10, labelDy: -38, anchor: 'end',
        layer: 'idl-1' },
      /* ── AD₂ solid, shifted LEFT (idl-1) — the contracted demand
            position. Same coords as AD₁ in the expansionary mirror. ── */
      { id: 'AD2',
        d: 'M 0.060,0.790 L 0.845,0.045',
        tone: 'blue', label: 'AD₂', strokeWidth: 2.2,
        labelDx: -14, labelDy: -22, anchor: 'start',
        layer: 'idl-1' }
    ],

    points: [
      /* ── Keynesian E₁ — starting state, on the STEEP range near
            capacity (high P, near Yf). ── */
      { intersection: { curves: ['AD1', 'keynAS'], near: [0.62, 0.47] },
        tone: 'slate', radius: 5.5, hollow: true,
        gridlines: 'slate', ticks: { x: 'Y₁', y: 'P₁' },
        label: 'E₁', labelDx: 14, labelDy: -2, anchor: 'start',
        perspective: 'keynesian' },
      /* ── Keynesian E₂ — output AND prices fall (idl-2) ── */
      { intersection: { curves: ['AD2', 'keynAS'], near: [0.55, 0.32] },
        tone: 'blue', radius: 5.5, hollow: true,
        gridlines: 'blue', ticks: { x: 'Y₂', y: 'P₂' },
        label: 'E₂', labelDx: 14, labelDy: -2, anchor: 'start',
        layer: 'idl-2', perspective: 'keynesian' },

      /* ── Classical E₁ — at full capacity Yf, high P ── */
      { intersection: { curves: ['AD1', 'lras'], near: [CAP, 0.44] },
        tone: 'slate', radius: 5.5, hollow: true,
        gridlines: 'slate', ticks: { y: 'P₁' },
        label: 'E₁', labelDx: 14, labelDy: -2, anchor: 'start',
        perspective: 'classical' },
      /* ── Classical E₂ — only the price level falls (idl-2) ── */
      { intersection: { curves: ['AD2', 'lras'], near: [CAP, 0.22] },
        tone: 'purple', radius: 5.5, hollow: true,
        gridlines: 'purple', ticks: { y: 'P₂' },
        label: 'E₂', labelDx: 14, labelDy: -2, anchor: 'start',
        layer: 'idl-2', perspective: 'classical' }
    ],

    texts: [
      /* Classical Yf tick under the vertical LRAS */
      { x: CAP, y: -0.063, text: 'Yf', tone: 'purple', bold: true,
        fontSize: 12, anchor: 'middle', perspective: 'classical' }
    ],

    arrows: [
      /* Leftward perpendicular shift arrow (idl-1), centred in the gap
         between the two parallel AD lines. Mirror of the rightward arrow
         in the expansionary spec — same magnitude, opposite direction. */
      { x1: 0.546, y1: 0.521, x2: 0.464, y2: 0.434,
        tone: 'blue', strokeWidth: 1.8,
        markerEnd: 'adckL-arr-blue', buffer: 0, layer: 'idl-1' }
    ]
  };
})();
