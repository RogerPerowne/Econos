/* ============================================================
   Private vs Social Diagram — engine spec for privateVsSocialDiagram.
   Market-failure topic — card 2 "Private vs social framework".

   Two-panel side-by-side comparison of the two market-failure
   archetypes:
     LEFT panel  — Negative externality (factory pollution)
                   MSC > MPC. Market produces Q_m where MPB = MPC.
                   Social optimum Q* < Q_m where MSB = MSC.
                   → over-production.
     RIGHT panel — Positive externality (vaccinations)
                   MSB > MPB. Market produces Q_m where MPB = MPC.
                   Social optimum Q* > Q_m where MSB = MSC.
                   → under-production.

   Each panel highlights the divergence (vertical gap MSC−MPC on
   the left, MSB−MPB on the right) and the resulting Q_m vs Q*
   wedge. Uses the engine's panels API.
   ============================================================ */
(function () {
  'use strict';

  window.ECONOS_PRIVATE_VS_SOCIAL_SPEC = {
    width: 720,
    height: 320,
    className: 'private-vs-social-svg',
    background: '#FFFFFF',
    divider: { x: 360, y1: 22, y2: 290 },

    panels: [
      /* ─── LEFT panel: NEGATIVE externality ─── */
      {
        chartArea: { x: 50, y: 28, width: 280, height: 254 },
        title: 'Negative externality',
        titleTone: 'rose',
        axes: { x: { label: 'Q' }, y: { label: 'P' } },
        curves: [
          { d: 'M 0.069,0.880 L 0.972,0.080',
            tone: 'blue', label: 'MPB', strokeWidth: 2.5,
            labelDx: -6, labelDy: 14, anchor: 'end' },
          { d: 'M 0.069,0.080 L 0.972,0.880',
            tone: 'amber', label: 'MPC', strokeWidth: 2.5,
            labelDx: -6, labelDy: -20, anchor: 'end' },
          /* MSC shifted UP from MPC — pollution adds external cost */
          { d: 'M 0.069,0.270 L 0.785,0.880',
            tone: 'red', label: 'MSC', strokeWidth: 2.2, dashed: '6 4',
            labelDx: 8, labelDy: -4, anchor: 'start' }
        ],
        points: [
          /* Market eq at MPC ∩ MPB */
          { x: 0.524, y: 0.482, tone: 'blue', radius: 5, hollow: true,
            gridlines: 'slate', ticks: { x: 'Q_m' },
            label: 'E_m', labelDx: 10, labelDy: -4, anchor: 'start' },
          /* Social optimum at MSC ∩ MPB — left of Q_m */
          { x: 0.380, y: 0.620, tone: 'red', radius: 6, hollow: true,
            gridlines: 'red', ticks: { x: 'Q*' },
            label: 'E*', labelDx: -10, labelDy: -4, anchor: 'end' }
        ],
        texts: [
          { x: 0.450, y: 0.190, text: 'Over-production',
            tone: 'red', bold: true, italic: true,
            anchor: 'middle' }
        ]
      },

      /* ─── RIGHT panel: POSITIVE externality ─── */
      {
        chartArea: { x: 410, y: 28, width: 280, height: 254 },
        title: 'Positive externality',
        titleTone: 'green',
        axes: { x: { label: 'Q' }, y: { label: 'P' } },
        curves: [
          { d: 'M 0.069,0.880 L 0.972,0.080',
            tone: 'blue', label: 'MPB', strokeWidth: 2.5,
            labelDx: -6, labelDy: 14, anchor: 'end' },
          { d: 'M 0.069,0.080 L 0.972,0.880',
            tone: 'amber', label: 'MPC', strokeWidth: 2.5,
            labelDx: -6, labelDy: -20, anchor: 'end' },
          /* MSB shifted UP from MPB — vaccinations add herd-immunity benefit */
          { d: 'M 0.215,0.880 L 1.000,0.230',
            tone: 'green', label: 'MSB', strokeWidth: 2.2, dashed: '6 4',
            labelDx: -6, labelDy: 14, anchor: 'end' }
        ],
        points: [
          /* Market eq at MPC ∩ MPB */
          { x: 0.524, y: 0.482, tone: 'blue', radius: 5, hollow: true,
            gridlines: 'slate', ticks: { x: 'Q_m' },
            label: 'E_m', labelDx: -10, labelDy: -4, anchor: 'end' },
          /* Social optimum at MSB ∩ MPC — right of Q_m */
          { x: 0.665, y: 0.620, tone: 'green', radius: 6, hollow: true,
            gridlines: 'green', ticks: { x: 'Q*' },
            label: 'E*', labelDx: 10, labelDy: -4, anchor: 'start' }
        ],
        texts: [
          { x: 0.590, y: 0.190, text: 'Under-production',
            tone: 'green', bold: true, italic: true,
            anchor: 'middle' }
        ]
      }
    ]
  };
})();
