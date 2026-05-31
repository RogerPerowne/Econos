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

   The shaded triangle is the welfare loss — surplus that
   could have been generated but is not, in either direction.
   ============================================================ */
(function () {
  'use strict';

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
        titleTone: 'rose',
        axes: { x: { label: 'Q' }, y: { label: 'P' } },
        curves: [
          { d: 'M 0.069,0.880 L 0.972,0.080',
            tone: 'blue', label: 'MPB = D', strokeWidth: 2.5,
            labelDx: -6, labelDy: 14, anchor: 'end' },
          { d: 'M 0.069,0.080 L 0.972,0.880',
            tone: 'amber', label: 'MPC', strokeWidth: 2.5,
            labelDx: -6, labelDy: -6, anchor: 'end' },
          { d: 'M 0.069,0.270 L 0.785,0.880',
            tone: 'red', label: 'MSC', strokeWidth: 2.2, dashed: '6 4',
            labelDx: 8, labelDy: -4, anchor: 'start' }
        ],
        points: [
          { x: 0.524, y: 0.482, tone: 'blue', radius: 5, hollow: true,
            gridlines: 'slate', ticks: { x: 'Q_m' },
            label: 'E_m', labelDx: 10, labelDy: -4, anchor: 'start' },
          { x: 0.380, y: 0.620, tone: 'red', radius: 6, hollow: true,
            gridlines: 'red', ticks: { x: 'Q*' },
            label: 'E*', labelDx: -10, labelDy: -4, anchor: 'end' }
        ],
        /* DWL triangle: vertices at E*, E_m, and the point on MSC
           above Q_m. Filled translucent red. */
        polygons: [
          { points: [[0.380, 0.620], [0.524, 0.482], [0.524, 0.336]],
            tone: 'red', opacity: 0.30 }
        ],
        texts: [
          { x: 0.475, y: 0.495, text: 'DWL',
            tone: 'red', bold: true, fontSize: 11, anchor: 'middle' }
        ]
      },

      /* ─── RIGHT panel: UNDER-production DWL ─── */
      {
        chartArea: { x: 410, y: 28, width: 280, height: 254 },
        title: 'Too little output (under-production)',
        titleTone: 'amber',
        axes: { x: { label: 'Q' }, y: { label: 'P' } },
        curves: [
          { d: 'M 0.069,0.880 L 0.972,0.080',
            tone: 'blue', label: 'MPB', strokeWidth: 2.5,
            labelDx: -6, labelDy: 14, anchor: 'end' },
          { d: 'M 0.069,0.080 L 0.972,0.880',
            tone: 'amber', label: 'MPC = S', strokeWidth: 2.5,
            labelDx: -6, labelDy: -6, anchor: 'end' },
          { d: 'M 0.215,0.880 L 1.000,0.230',
            tone: 'green', label: 'MSB', strokeWidth: 2.2, dashed: '6 4',
            labelDx: -6, labelDy: 14, anchor: 'end' }
        ],
        points: [
          { x: 0.524, y: 0.482, tone: 'blue', radius: 5, hollow: true,
            gridlines: 'slate', ticks: { x: 'Q_m' },
            label: 'E_m', labelDx: -10, labelDy: -4, anchor: 'end' },
          { x: 0.665, y: 0.620, tone: 'green', radius: 6, hollow: true,
            gridlines: 'green', ticks: { x: 'Q*' },
            label: 'E*', labelDx: 10, labelDy: -4, anchor: 'start' }
        ],
        polygons: [
          { points: [[0.524, 0.482], [0.665, 0.620], [0.524, 0.628]],
            tone: 'green', opacity: 0.30 }
        ],
        texts: [
          { x: 0.575, y: 0.560, text: 'DWL',
            tone: 'green', bold: true, fontSize: 11, anchor: 'middle' }
        ]
      }
    ]
  };
})();
