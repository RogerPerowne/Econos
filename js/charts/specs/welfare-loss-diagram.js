/* ============================================================
   Welfare Loss Diagram — engine spec for welfareLossDiagram.
   Market-failure topic — card 4 "Welfare loss".

   The deadweight-loss triangle in TWO contexts:
     LEFT panel  — Over-production case (negative externality):
                   market produces Q_m > Q* because it ignores
                   MSC. DWL triangle to the RIGHT of Q*, bounded
                   above by MSC and below by MPB.
     RIGHT panel — Under-production case (positive externality):
                   market produces Q_m < Q* because it ignores
                   MSB. DWL triangle to the LEFT of Q*, bounded
                   above by MSB and below by MPC.

   Geometry is SOLVED via the engine's intersection solver (curve
   ids + point.intersection), and the DWL polygon vertices reuse
   the same constants so they always sit on the math.
   ============================================================ */
(function () {
  'use strict';

  /* Equilibria — solved from the shared MPB / MPC / MSC / MSB
     curves; identical to those used by privateVsSocialDiagram. */
  var EM      = { x: 0.520, y: 0.480 };  // MPB ∩ MPC (both panels)
  var ES_NEG  = { x: 0.420, y: 0.569 };  // MPB ∩ MSC (left panel)
  var ES_POS  = { x: 0.606, y: 0.556 };  // MPC ∩ MSB (right panel)

  /* DWL triangle apex points — derived from the same curve lines:
     left  : MSC sampled at Q_m  → (0.520, 0.655)
     right : MSB sampled at Q_m  → (0.520, 0.627) */
  var DWL_TOP_NEG = { x: EM.x, y: 0.655 };
  var DWL_TOP_POS = { x: EM.x, y: 0.627 };

  window.ECONOS_WELFARE_LOSS_DIAGRAM_SPEC = {
    width: 720,
    height: 320,
    className: 'welfare-loss-diagram-svg',
    background: '#FFFFFF',
    divider: { x: 360, y1: 22, y2: 290 },

    panels: [
      /* ─── LEFT panel: OVER-production DWL ─── */
      {
        chartArea: { x: 50, y: 28, width: 280, height: 254 },
        title: 'Too much output (over-production)',
        titleColor: '#0F172A',  // black/bold so the title doesn't read as a curve label
        axes: { x: { label: 'Q' }, y: { label: 'P' } },

        /* Shaded backgrounds FIRST so curves draw on top. */
        polygons: [
          { points: [[ES_NEG.x, ES_NEG.y], [EM.x, EM.y], [DWL_TOP_NEG.x, DWL_TOP_NEG.y]],
            fill: '#DC2626', opacity: 0.35 }
        ],

        curves: [
          /* All label positions UNSET — auto-placer (v0.41.18) handles
           * MPC = S BELOW, MSC ABOVE (opposite-side rule for the
           * parallel pair), MPB = D picks its own slot. */
          { id: 'MPB', d: 'M 0.069,0.880 L 0.972,0.080',
            tone: 'blue', label: 'MPB = D', strokeWidth: 2.5 },
          { id: 'MPC', d: 'M 0.069,0.080 L 0.972,0.880',
            tone: 'amber', label: 'MPC', strokeWidth: 2.5 },
          { id: 'MSC', d: 'M 0.069,0.270 L 0.785,0.880',
            tone: 'red', label: 'MSC', strokeWidth: 2.2, dashed: '6 4' }
        ],
        points: [
          { x: EM.x, y: EM.y, intersection: { curves: ['MPB', 'MPC'] },
            tone: 'blue', radius: 5, hollow: true,
            gridlines: 'slate', ticks: { x: 'Q_m' },
            label: 'E_m', labelDx: 10, labelDy: 0, anchor: 'start' },
          { x: ES_NEG.x, y: ES_NEG.y, intersection: { curves: ['MPB', 'MSC'] },
            tone: 'red', radius: 6, hollow: true,
            gridlines: 'red', ticks: { x: 'Q*' },
            label: 'E*', labelDx: -10, labelDy: 0, anchor: 'end' }
        ],
        texts: [
          /* DWL label at the triangle's CENTROID — vertically centred
           * in the shaded region as the user requested. Centroid of
           * [(0.420, 0.569), (0.520, 0.480), (0.520, 0.655)] is
           * (0.487, 0.568). */
          { x: 0.487, y: 0.568, text: 'DWL',
            tone: 'red', bold: true, fontSize: 12, anchor: 'middle' }
        ]
      },

      /* ─── RIGHT panel: UNDER-production DWL ─── */
      {
        chartArea: { x: 410, y: 28, width: 280, height: 254 },
        title: 'Too little output (under-production)',
        titleColor: '#0F172A',  // black/bold — same rule as left panel
        axes: { x: { label: 'Q' }, y: { label: 'P' } },

        polygons: [
          { points: [[EM.x, EM.y], [DWL_TOP_POS.x, DWL_TOP_POS.y], [ES_POS.x, ES_POS.y]],
            fill: '#059669', opacity: 0.35 }
        ],

        curves: [
          /* All label positions UNSET — auto-placer handles. */
          { id: 'MPB', d: 'M 0.069,0.880 L 0.972,0.080',
            tone: 'blue', label: 'MPB', strokeWidth: 2.5 },
          { id: 'MPC', d: 'M 0.069,0.080 L 0.972,0.880',
            tone: 'amber', label: 'MPC = S', strokeWidth: 2.5 },
          { id: 'MSB', d: 'M 0.215,0.880 L 1.000,0.230',
            tone: 'green', label: 'MSB', strokeWidth: 2.2, dashed: '6 4' }
        ],
        points: [
          /* E_m to the LEFT of the dot — E* sits to the right at higher
           * Q (Q* > Q_m for under-production), so a right-side E_m
           * would crash into E*. */
          { x: EM.x, y: EM.y, intersection: { curves: ['MPB', 'MPC'] },
            tone: 'blue', radius: 5, hollow: true,
            gridlines: 'slate', ticks: { x: 'Q_m' },
            label: 'E_m', labelDx: -10, labelDy: 0, anchor: 'end' },
          { x: ES_POS.x, y: ES_POS.y, intersection: { curves: ['MPC', 'MSB'] },
            tone: 'green', radius: 6, hollow: true,
            gridlines: 'green', ticks: { x: 'Q*' },
            label: 'E*', labelDx: 10, labelDy: 0, anchor: 'start' }
        ],
        texts: [
          /* DWL at the triangle's CENTROID. Centroid of
           * [(0.520, 0.480), (0.520, 0.627), (0.606, 0.556)] is
           * (0.549, 0.554). */
          { x: 0.549, y: 0.554, text: 'DWL',
            tone: 'green', bold: true, fontSize: 12, anchor: 'middle' }
        ]
      }
    ]
  };
})();
