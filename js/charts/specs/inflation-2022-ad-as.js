/* ============================================================
   Inflation 2022 AD-AS – engine spec for inflation2022AdAs.
   Macro-conflicts topic – card 4 "The 2021–23 inflation surge".

   4-view exclusive-layer AD-AS sequence telling the UK story ONE
   SHIFT AT A TIME (the old build crammed both 2021–22 shocks into a
   single view — four curves, two arrows, two equilibria at once):
     view 1 → Baseline E₀ on AD₀ ∩ SRAS₀ near LRAS (full capacity)
     view 2 → Demand rebound: AD₀ goes dashed, AD₁ solid (post-COVID
              rebound + stimulus). Economy moves to E′ — output up to
              capacity, prices rising. Demand-pull half of the story.
     view 3 → Energy shock: SRAS₀ goes dashed, SRAS₁ solid (energy /
              Ukraine). Equilibrium E₁ at LOWER Y, sharply higher P.
     view 4 → BoE response: AD₁ goes dashed, AD₂ solid (rate hikes).
              E₂ — lower P than E₁, but Y squeezed further.

   House shift styling throughout: the shifted-from curve goes dashed
   in ITS OWN colour, the new curve is solid, one shift arrow per view
   seated in the gap (positions solved from the line equations).
   Equilibria are engine-solved `intersection` points, never typed.
   Curve name labels live in texts[] at the UPPER ends — the old
   curve-end labels piled onto the x-axis caption at the bottom-right.
   ============================================================ */
(function () {
  'use strict';

  var YF = 0.481;                            // LRAS position
  var AD0   = 'M 0.056,0.808 L 0.833,0.000';
  var AD1   = 'M 0.130,0.827 L 0.889,0.038'; // AD₀ shifted right (+0.092)
  var AD2   = 'M 0.056,0.750 L 0.778,0.000'; // AD₁ pulled back left
  var SRAS0 = 'M 0.056,0.038 L 0.889,0.904';
  var SRAS1 = 'M 0.000,0.212 L 0.704,0.942'; // SRAS₀ shifted left

  window.ECONOS_INFLATION_2022_AD_AS_SPEC = {
    width: 640,
    height: 460,
    chartArea: { x: 60, y: 22, width: 540, height: 380 },
    className: 'inflation-2022-ad-as-svg',
    layers: ['idl-1', 'idl-2', 'idl-3', 'idl-4'],
    layerMode: 'exclusive',
    axes: {
      x: { label: 'Real output (Y)' },
      y: { label: 'Price level (P)' }
    },

    curves: [
      /* LRAS – always visible as the long-run anchor */
      { d: 'M ' + YF + ',0 L ' + YF + ',0.93',
        tone: 'slate', strokeWidth: 1.2, dashed: '5 5', opacity: 0.6 },

      /* ── View 1: pre-shock baseline ─────────────────────── */
      { id: 'ad0a', d: AD0, tone: 'blue', strokeWidth: 2.6, layer: 'idl-1' },
      { id: 'sras0a', d: SRAS0, tone: 'slate', strokeWidth: 2.6, layer: 'idl-1' },

      /* ── View 2: demand rebound (AD₀ → AD₁) ─────────────── */
      { id: 'ad0b', d: AD0, tone: 'blue', strokeWidth: 2, dashed: '5 4', opacity: 0.6, layer: 'idl-2' },
      { id: 'ad1b', d: AD1, tone: 'blue', strokeWidth: 2.6, layer: 'idl-2' },
      { id: 'sras0b', d: SRAS0, tone: 'slate', strokeWidth: 2.6, layer: 'idl-2' },

      /* ── View 3: energy shock (SRAS₀ → SRAS₁) ───────────── */
      { id: 'ad1c', d: AD1, tone: 'blue', strokeWidth: 2.6, layer: 'idl-3' },
      { id: 'sras0c', d: SRAS0, tone: 'slate', strokeWidth: 2, dashed: '5 4', opacity: 0.6, layer: 'idl-3' },
      { id: 'sras1c', d: SRAS1, tone: 'slate', strokeWidth: 2.6, layer: 'idl-3' },

      /* ── View 4: BoE response (AD₁ → AD₂) ───────────────── */
      { id: 'ad1d', d: AD1, tone: 'blue', strokeWidth: 2, dashed: '5 4', opacity: 0.6, layer: 'idl-4' },
      { id: 'ad2d', d: AD2, tone: 'blue', strokeWidth: 2.6, layer: 'idl-4' },
      { id: 'sras1d', d: SRAS1, tone: 'slate', strokeWidth: 2.6, layer: 'idl-4' }
    ],

    /* Curve names live at the UPPER ends, hand-placed clear of each
       other and of the axis captions. */
    texts: [
      { x: YF + 0.015, y: 0.955, text: 'LRAS', tone: 'slate', fontSize: 11.5, anchor: 'start' },

      /* AD names – top-left, by each curve's upper end */
      { x: 0.045, y: 0.855, text: 'AD₀', tone: 'blue', bold: true, fontSize: 12, anchor: 'start', layer: 'idl-1' },
      { x: 0.030, y: 0.855, text: 'AD₀', tone: 'blue', fontSize: 11, opacity: 0.6, anchor: 'start', layer: 'idl-2' },
      { x: 0.135, y: 0.885, text: 'AD₁', tone: 'blue', bold: true, fontSize: 12, anchor: 'start', layer: 'idl-2' },
      { x: 0.135, y: 0.885, text: 'AD₁', tone: 'blue', bold: true, fontSize: 12, anchor: 'start', layer: 'idl-3' },
      { x: 0.135, y: 0.885, text: 'AD₁', tone: 'blue', fontSize: 11, opacity: 0.6, anchor: 'start', layer: 'idl-4' },
      { x: 0.020, y: 0.795, text: 'AD₂', tone: 'blue', bold: true, fontSize: 12, anchor: 'start', layer: 'idl-4' },

      /* SRAS names – top-right, by each curve's upper end */
      { x: 0.880, y: 0.955, text: 'SRAS₀', tone: 'slate', bold: true, fontSize: 12, anchor: 'end', layer: 'idl-1' },
      { x: 0.880, y: 0.955, text: 'SRAS₀', tone: 'slate', bold: true, fontSize: 12, anchor: 'end', layer: 'idl-2' },
      { x: 0.900, y: 0.940, text: 'SRAS₀', tone: 'slate', fontSize: 11, opacity: 0.6, anchor: 'start', layer: 'idl-3' },
      { x: 0.690, y: 0.985, text: 'SRAS₁', tone: 'slate', bold: true, fontSize: 12, anchor: 'end', layer: 'idl-3' },
      { x: 0.690, y: 0.985, text: 'SRAS₁', tone: 'slate', bold: true, fontSize: 12, anchor: 'end', layer: 'idl-4' }
    ],

    points: [
      /* View 1: E₀ near full capacity — engine-solved crossing */
      { intersection: { curves: ['ad0a', 'sras0a'] },
        tone: 'slate', radius: 6, hollow: true,
        gridlines: 'slate', ticks: { x: 'Y₀', y: 'P₀' },
        label: 'E₀', labelDx: 12, labelDy: -4, anchor: 'start',
        layer: 'idl-1' },

      /* View 2: E₀ faded, E′ on AD₁ ∩ SRAS₀ — the boom point */
      { intersection: { curves: ['ad0b', 'sras0b'] },
        tone: 'slate', radius: 4.5, hollow: true, opacity: 0.5,
        label: 'E₀', labelDx: -12, labelDy: -4, anchor: 'end',
        layer: 'idl-2' },
      { intersection: { curves: ['ad1b', 'sras0b'] },
        tone: 'amber', radius: 6, hollow: true,
        gridlines: 'amber', ticks: { y: 'P′' },
        label: 'E′', labelDx: 12, labelDy: -4, anchor: 'start',
        layer: 'idl-2' },

      /* View 3: E′ faded, E₁ at the stagflation point */
      { intersection: { curves: ['ad1c', 'sras0c'] },
        tone: 'amber', radius: 4.5, hollow: true, opacity: 0.5,
        label: 'E′', labelDx: 12, labelDy: -4, anchor: 'start',
        layer: 'idl-3' },
      { intersection: { curves: ['ad1c', 'sras1c'] },
        tone: 'red', radius: 7, hollow: true,
        gridlines: 'red', ticks: { x: 'Y₁', y: 'P₁' },
        label: 'E₁', labelDx: -14, labelDy: -2, anchor: 'end',
        layer: 'idl-3' },

      /* View 4: E₁ faded, E₂ at the post-tightening point */
      { intersection: { curves: ['ad1d', 'sras1d'] },
        tone: 'slate', radius: 4.5, hollow: true, opacity: 0.5,
        label: 'E₁', labelDx: 12, labelDy: -4, anchor: 'start',
        layer: 'idl-4' },
      { intersection: { curves: ['ad2d', 'sras1d'] },
        tone: 'green', radius: 7, hollow: true,
        gridlines: 'green', ticks: { x: 'Y₂', y: 'P₂' },
        label: 'E₂', labelDx: -14, labelDy: -2, anchor: 'end',
        layer: 'idl-4' }
    ],

    arrows: [
      /* View 2: rightward AD shift — in the gap (AD₀ x=0.545,
         AD₁ x=0.637 at y=0.30; margins 0.018). */
      { x1: 0.563, y1: 0.30, x2: 0.619, y2: 0.30,
        tone: 'blue', strokeWidth: 2,
        markerEnd: 'econos-arrow-blue', buffer: 0, layer: 'idl-2' },

      /* View 3: leftward SRAS shift — in the gap high up, clear of
         AD₁ (SRAS₀ x=0.770, SRAS₁ x=0.548 at y=0.78; AD₁ x=0.175). */
      { x1: 0.745, y1: 0.78, x2: 0.575, y2: 0.78,
        tone: 'slate', strokeWidth: 2,
        markerEnd: 'econos-arrow-slate', buffer: 0, layer: 'idl-3' },

      /* View 4: leftward AD shift — in the gap (AD₂ x=0.489,
         AD₁ x=0.637 at y=0.30). */
      { x1: 0.619, y1: 0.30, x2: 0.507, y2: 0.30,
        tone: 'blue', strokeWidth: 2,
        markerEnd: 'econos-arrow-blue', buffer: 0, layer: 'idl-4' }
    ]
  };
})();
