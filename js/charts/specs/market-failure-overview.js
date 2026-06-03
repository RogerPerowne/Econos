/* ============================================================
   Market Failure Overview — engine spec for marketFailureOverview.
   Market-failure topic — card 1 "Market failure".

   The visual anchor for the concept. A supply-demand chart with
   MPB (= D), MPC (= S) and dashed MSC (parallel-shift, simulating
   a constant per-unit external cost). Two equilibria:

     E_m  = MPB ∩ MPC  — the free-market equilibrium
     E*   = MPB ∩ MSC  — the socially optimal point

   Both points are SOLVED by the engine's intersection solver
   (curve ids 'MPB', 'MPC', 'MSC'), so they always sit exactly on
   the curves — no eyeball drift. The wedge between E_m and E* is
   the deadweight welfare-loss triangle.
   ============================================================ */
(function () {
  'use strict';

  /* Equilibria (verified by the engine — see point.intersection). */
  var EM = { x: 0.520, y: 0.480 };   // MPB ∩ MPC
  var ES = { x: 0.420, y: 0.569 };   // MPB ∩ MSC

  /* Top vertex of the DWL triangle: MSC sampled at Q_m. */
  var DWL_TOP = { x: 0.520, y: 0.655 };

  window.ECONOS_MARKET_FAILURE_OVERVIEW_SPEC = {
    width: 480,
    height: 320,
    chartArea: { x: 55, y: 28, width: 380, height: 254 },
    className: 'market-failure-overview-svg',
    axes: {
      x: { label: 'Quantity (Q)' },
      y: { label: 'Price (P)' }
    },

    /* DWL triangle — bounded by MSC (top), MPB (bottom-right) and the
       vertical at Q_m (right). Visible amber tint with high opacity so
       students can actually see it. */
    polygons: [
      { points: [[ES.x, ES.y], [EM.x, EM.y], [DWL_TOP.x, DWL_TOP.y]],
        fill: '#DC2626', opacity: 0.35 }
    ],

    curves: [
      /* MPB (private demand) — the market sees this. labelDx pulled
       * in (−32) so the wide "MPB = D" sits closer to the line at
       * chart-x≈0.86 instead of dangling ~35px off the endpoint. */
      { id: 'MPB', d: 'M 0.069,0.880 L 0.972,0.080',
        tone: 'blue', label: 'MPB = D', strokeWidth: 2.5,
        labelDx: -32, labelDy: -6, anchor: 'end' },
      /* MPC (private supply) — the market sees this. labelDy negative
       * (above the line at the endpoint) and labelDx small so the
       * label sits at the top-right of the supply curve, above the
       * MSC label which is mid-curve. labelDx=-32 with positive
       * labelDy was clashing with MSC. */
      { id: 'MPC', d: 'M 0.069,0.080 L 0.972,0.880',
        tone: 'amber', label: 'MPC = S', strokeWidth: 2.5,
        labelDx: -6, labelDy: -20, anchor: 'end' },
      /* MSC (social cost) — dashed, parallel-shifted up from MPC.
         Same slope as MPC (0.886 chart-y per chart-x) so the
         externality is constant per unit. */
      { id: 'MSC', d: 'M 0.069,0.270 L 0.785,0.880',
        tone: 'green', label: 'MSC', strokeWidth: 2.2, dashed: '6 4',
        labelDx: 8, labelDy: -4, anchor: 'start' }
    ],

    points: [
      /* Market equilibrium — solved by the engine at MPB ∩ MPC */
      { x: EM.x, y: EM.y, intersection: { curves: ['MPB', 'MPC'] },
        tone: 'blue', radius: 6, hollow: true,
        gridlines: 'slate', ticks: { x: 'Q_m' },
        label: 'E_m', labelDx: 10, labelDy: -4, anchor: 'start' },
      /* Social optimum — solved by the engine at MPB ∩ MSC */
      { x: ES.x, y: ES.y, intersection: { curves: ['MPB', 'MSC'] },
        tone: 'green', radius: 7, hollow: true,
        gridlines: 'green', ticks: { x: 'Q*' },
        label: 'E*', labelDx: -10, labelDy: -4, anchor: 'end' }
    ],

    texts: [
      /* DWL caption — sits inside the shaded triangle so it can't be
         mistaken for an axis annotation. */
      { x: 0.495, y: 0.595, text: 'DWL',
        tone: 'rose', bold: true, fontSize: 12,
        anchor: 'middle' }
    ]
  };
})();
