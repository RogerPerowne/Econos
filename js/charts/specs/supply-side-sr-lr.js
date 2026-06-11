/* ============================================================
   Supply-side: Short run vs Long run – engine spec for
   supplySideSrLr.

   ONE merged 4-step diagram with a Classical ↔ Keynesian toggle,
   separating the TWO mechanisms of supply-side policy:

     View 1  Starting point
     View 2  SHORT RUN – lower unit costs (a cost effect)
     View 3  LONG RUN  – productive capacity rises (a capacity effect)
     View 4  The verdict

   Splitting cost (SR) from capacity (LR) keeps each move honest:
     • the COST cut is a DOWNWARD move (lower price floor / SRAS right);
     • the CAPACITY gain is a PARALLEL RIGHTWARD move (the vertical wall
       slides right, the floor stays put).

   CLASSICAL (perspective:'classical'):
     base   AD, LRAS₁ (vertical at Yf₁, stays solid), E₁ at potential
     V2     SRAS₁→dashed, SRAS₂ (right), E₂ above Yf₁ (temporary boost)
     V3     LRAS₂ (right, at Yf₂ through E₂) – capacity validates output
     V4     sustainable-growth bracket Yf₁→Yf₂
     Story: cost cuts lift output above potential temporarily; only a
     real capacity gain (LRAS right) makes the higher output sustainable.

   KEYNESIAN (perspective:'keynesian'):
     base   AD, AS₁ (reverse-L, floor 0.30, capacity Yf₁), E₁ (rising range)
     V2     AS₁→dashed, AS₂ (price FLOOR drops – cost cut), E₂ (modest gain)
     V3     AS₂→dashed, AS₃ (PARALLEL right – capacity Yf₂), E₃
     V4     Yf₂ potential line + output-gap arrow E₃→Yf₂
     Story: cheaper costs give a modest boost; capacity then rises – but
     with demand unchanged, actual output LAGS the new potential.

   Layering uses EXPLICIT per-view `show` arrays (custom layer names) so
   each curve can become dashed at exactly the right step. The two
   ORIGINAL curves (SRAS₁ / AS₁) use `inverseLayers` so they show on the
   base view and hide once stepping begins.
   ============================================================ */
(function () {
  'use strict';

  var YF1 = 0.46;   // potential output before reform
  var YF2 = 0.66;   // potential output after reform

  window.ECONOS_SUPPLY_SIDE_SR_LR_SPEC = {
    width: 460,
    height: 312,
    chartArea: { x: 55, y: 18, width: 380, height: 258 },
    className: 'supply-sr-lr-svg',
    layers: [
      'c-lras1-solid', 'c-lras1-dash',
      'c-sras1-dash', 'c-sras2', 'c-e2', 'c-sr-arrow', 'c-lras2', 'c-lr-arrow', 'c-growth',
      'k-as1-dash', 'k-as2', 'k-as2-dash', 'k-e2', 'k-sr-arrow',
      'k-as3', 'k-e3', 'k-lr-arrow', 'k-gap', 'k-yf2'
    ],
    inverseLayers: ['c-sras1-solid', 'k-as1-solid'],
    perspectives: ['classical', 'keynesian'],

    axes: {
      x: { label: 'Real output (Y)' },
      y: { label: 'Price level (P)' }
    },

    curves: [
      /* ══════════════ CLASSICAL ══════════════ */
      { id: 'AD_c', d: 'M 0.18,0.756 L 0.92,0.238',
        tone: 'blue', label: 'AD', strokeWidth: 2,
        labelDx: -6, labelDy: -10, anchor: 'end', perspective: 'classical' },
      // LRAS₁ solid – vertical at Yf₁. Shown V1 + V2 (capacity hasn't moved
      // yet); replaced by a dashed copy V3+ once LRAS₂ is revealed.
      { id: 'lras1', d: 'M ' + YF1 + ',0.020 L ' + YF1 + ',0.880',
        tone: 'purple', label: 'LRAS₁', strokeWidth: 2.5,
        labelDx: 6, labelDy: -2, anchor: 'start',
        layer: 'c-lras1-solid', perspective: 'classical' },
      // LRAS₁ dashed – shown V3 + V4 once the long-run shift has fired.
      { d: 'M ' + YF1 + ',0.020 L ' + YF1 + ',0.880',
        tone: 'purple', label: 'LRAS₁', strokeWidth: 1.6, dashed: '6 4',
        labelDx: 6, labelDy: -2, anchor: 'start',
        layer: 'c-lras1-dash', perspective: 'classical' },
      // LRAS₂ – vertical at Yf₂ (long-run capacity), revealed V3+.
      { id: 'lras2', d: 'M ' + YF2 + ',0.020 L ' + YF2 + ',0.880',
        tone: 'green', label: 'LRAS₂', strokeWidth: 2.5,
        labelDx: 6, labelDy: -2, anchor: 'start', layer: 'c-lras2', perspective: 'classical' },
      // SRAS₁ solid – base view only (inverseLayers).
      { id: 'sras1_c', d: 'M 0.26,0.41 L 0.70,0.74',
        tone: 'slate', label: 'SRAS₁', strokeWidth: 2,
        labelDx: 6, labelDy: -10, anchor: 'start', layer: 'c-sras1-solid', perspective: 'classical' },
      // SRAS₁ dashed – from V2 on.
      { d: 'M 0.26,0.41 L 0.70,0.74',
        tone: 'slate', label: 'SRAS₁', strokeWidth: 1.6, dashed: '6 4',
        labelDx: 6, labelDy: -10, anchor: 'start', layer: 'c-sras1-dash', perspective: 'classical' },
      // SRAS₂ – shifted right (V2+).
      { id: 'sras2_c', d: 'M 0.46,0.27 L 0.90,0.60',
        tone: 'green', label: 'SRAS₂', strokeWidth: 2.2,
        labelDx: 6, labelDy: -10, anchor: 'start', layer: 'c-sras2', perspective: 'classical' },

      /* ══════════════ KEYNESIAN ══════════════ */
      { id: 'AD_k', d: 'M 0.11,0.605 L 0.86,0.040',
        tone: 'blue', label: 'AD', strokeWidth: 2,
        labelDx: -6, labelDy: -10, anchor: 'end', perspective: 'keynesian' },
      // AS₁ reverse-L (floor 0.30, capacity Yf₁) – base view only.
      { id: 'as1_k',
        shape: { type: 'keynesianAS', flatY: 0.34, kneeX: 0.30, capacityX: YF1, top: 0.88, startX: 0.05 },
        tone: 'amber', label: 'AS₁', strokeWidth: 2.5,
        labelDx: 8, labelDy: -8, anchor: 'start', layer: 'k-as1-solid', perspective: 'keynesian' },
      // AS₁ dashed – from V2 on.
      { shape: { type: 'keynesianAS', flatY: 0.34, kneeX: 0.30, capacityX: YF1, top: 0.88, startX: 0.05 },
        tone: 'amber', label: 'AS₁', strokeWidth: 1.6, dashed: '6 4',
        labelDx: 8, labelDy: -8, anchor: 'start', layer: 'k-as1-dash', perspective: 'keynesian' },
      // AS₂ – SHORT RUN cost cut: price floor DROPS (0.30→0.22), capacity
      // unchanged (Yf₁). A downward move. Solid in V2 only, dashed in V3+.
      { id: 'as2_k',
        shape: { type: 'keynesianAS', flatY: 0.18, kneeX: 0.30, capacityX: YF1, top: 0.88, startX: 0.05 },
        tone: 'cyan', label: 'AS₂', strokeWidth: 2.2,
        labelDx: -6, labelDy: -8, anchor: 'end', layer: 'k-as2', perspective: 'keynesian' },
      { shape: { type: 'keynesianAS', flatY: 0.18, kneeX: 0.30, capacityX: YF1, top: 0.88, startX: 0.05 },
        tone: 'cyan', label: 'AS₂', strokeWidth: 1.5, dashed: '6 4',
        labelDx: -6, labelDy: -8, anchor: 'end', layer: 'k-as2-dash', perspective: 'keynesian' },
      // AS₃ – LONG RUN capacity gain: PARALLEL right of AS₂ (floor stays
      // 0.22, capacity Yf₁→Yf₂). Solid V3+.
      { id: 'as3_k',
        shape: { type: 'keynesianAS', flatY: 0.18, kneeX: 0.50, capacityX: YF2, top: 0.88, startX: 0.05 },
        tone: 'green', label: 'AS₃', strokeWidth: 2.5,
        labelDx: 8, labelDy: -8, anchor: 'start', layer: 'k-as3', perspective: 'keynesian' },
      // Yf₂ potential line (V4) – dashed vertical marking the new capacity.
      { d: 'M ' + YF2 + ',0.020 L ' + YF2 + ',0.620',
        tone: 'purple', label: 'Yf₂', strokeWidth: 1.6, dashed: '4 4',
        labelDx: 4, labelDy: -2, anchor: 'start', layer: 'k-yf2', perspective: 'keynesian' }
    ],

    points: [
      /* ── CLASSICAL ── */
      { intersection: { curves: ['AD_c', 'sras1_c'], near: [YF1, 0.56] },
        tone: 'slate', radius: 5.5, hollow: true,
        gridlines: 'slate', ticks: { x: 'Yf₁', y: 'P₁' },
        label: 'E₁', labelDx: 14, labelDy: -2, anchor: 'start', perspective: 'classical' },
      { intersection: { curves: ['AD_c', 'sras2_c'], near: [YF2, 0.42] },
        tone: 'green', radius: 5.5, hollow: true,
        gridlines: 'green', ticks: { x: 'Yf₂', y: 'P₂' },
        label: 'E₂', labelDx: 14, labelDy: -2, anchor: 'start', layer: 'c-e2', perspective: 'classical' },

      /* ── KEYNESIAN ── */
      { intersection: { curves: ['AD_k', 'as1_k'], near: [0.37, 0.43] },
        tone: 'slate', radius: 5.5, hollow: true,
        gridlines: 'slate', ticks: { x: 'Y₁', y: 'P₁' },
        label: 'E₁', labelDx: 13, labelDy: -8, anchor: 'start', perspective: 'keynesian' },
      // E₂ (intermediate SR point) – no gridline ticks: near capacity the
      // cost cut mainly drops the PRICE, so E₂ sits below E₁; its label is
      // offset down so the two don't overlap. E₁ and E₃ bracket the journey.
      { intersection: { curves: ['AD_k', 'as2_k'], near: [0.41, 0.33] },
        tone: 'cyan', radius: 5.5, hollow: true,
        label: 'E₂', labelDx: 13, labelDy: 10, anchor: 'start', layer: 'k-e2', perspective: 'keynesian' },
      { intersection: { curves: ['AD_k', 'as3_k'], near: [0.55, 0.26] },
        tone: 'green', radius: 5.5, hollow: true,
        gridlines: 'green', ticks: { x: 'Y₃', y: 'P₃' },
        label: 'E₃', labelDx: 14, labelDy: -2, anchor: 'start', layer: 'k-e3', perspective: 'keynesian' }
    ],

    arrows: [
      /* Classical SR – SRAS₁ → SRAS₂ (V2). PERPENDICULAR to the parallel
         SRAS curves (slope 0.75 → perpendicular direction (0.6,-0.8) in
         chart units). Centred on the midline between the two curves at
         x ≈ 0.65, so both ends sit in the OPEN STRIP between SRAS₁ and
         SRAS₂ – no contact with either curve, well clear of E₁ and E₂. */
      { x1: 0.49, y1: 0.583, x2: 0.629, y2: 0.397,
        tone: 'green', strokeWidth: 1.8, markerEnd: 'econos-arrow-green',
        buffer: 4, layer: 'c-sr-arrow', perspective: 'classical' },
      /* Classical LR – LRAS₁ → LRAS₂ (V3), rightward near top. */
      { x1: YF1 + 0.01, y1: 0.80, x2: YF2 - 0.01, y2: 0.80,
        tone: 'purple', strokeWidth: 1.8, markerEnd: 'econos-arrow-purple',
        buffer: 0, layer: 'c-lr-arrow', perspective: 'classical' },
      /* Classical verdict – sustainable-growth bracket Yf₁ → Yf₂ (V4). */
      { x1: YF1 + 0.005, y1: 0.075, x2: YF2 - 0.005, y2: 0.075,
        tone: 'green', strokeWidth: 1.8, markerEnd: 'econos-arrow-green',
        buffer: 0, layer: 'c-growth', perspective: 'classical' },

      /* Keynesian SR – price floor DROPS (V2), a DOWNWARD arrow (0.34→0.18). */
      { x1: 0.175, y1: 0.330, x2: 0.175, y2: 0.205,
        tone: 'green', strokeWidth: 1.8, markerEnd: 'econos-arrow-green',
        buffer: 0, layer: 'k-sr-arrow', perspective: 'keynesian' },
      /* Keynesian LR – capacity slides PARALLEL right (V3). */
      { x1: 0.34, y1: 0.255, x2: 0.52, y2: 0.255,
        tone: 'green', strokeWidth: 1.8, markerEnd: 'econos-arrow-green',
        buffer: 0, layer: 'k-lr-arrow', perspective: 'keynesian' },
      /* Keynesian verdict – output gap Y₃ → Yf₂ (V4), low near axis. */
      { x1: 0.575, y1: 0.090, x2: YF2 - 0.005, y2: 0.090,
        tone: 'rose', strokeWidth: 1.8, markerEnd: 'econos-arrow-rose',
        buffer: 0, layer: 'k-gap', perspective: 'keynesian' }
    ],

    texts: [
      /* Classical growth caption (V4). */
      { x: 0.56, y: 0.135, text: 'sustainable growth', tone: 'green', bold: true,
        fontSize: 10, anchor: 'middle', layer: 'c-growth', perspective: 'classical' },
      /* Keynesian floor-drop caption (V2). */
      { x: 0.175, y: 0.380, text: 'costs ↓', tone: 'green', bold: true,
        fontSize: 10, anchor: 'middle', layer: 'k-sr-arrow', perspective: 'keynesian' },
      /* Keynesian gap caption (V4). */
      { x: 0.617, y: 0.165, text: 'output gap', tone: 'rose', bold: true,
        fontSize: 10.5, anchor: 'middle', layer: 'k-gap', perspective: 'keynesian' }
    ]
  };
})();
