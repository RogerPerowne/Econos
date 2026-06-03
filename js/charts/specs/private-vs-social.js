/* ============================================================
   Private vs Social Diagram — engine spec for privateVsSocialDiagram.
   Market-failure topic — card 2 "Private vs social framework".

   Two-panel side-by-side comparison of the two market-failure
   archetypes:
     LEFT panel  — Negative externality (factory pollution)
                   MSC > MPC. Market produces Q_m where MPB = MPC.
                   Social optimum Q* < Q_m where MPB = MSC.
                   → over-production.
     RIGHT panel — Positive externality (vaccinations)
                   MSB > MPB. Market produces Q_m where MPB = MPC.
                   Social optimum Q* > Q_m where MPC = MSB.
                   → under-production.

   Geometry is SOLVED, not hand-set. Curves carry `id` strings and
   each equilibrium uses `intersection: { curves: [...] }` so the
   engine resolves the y-coord and warns on drift. No DWL shading
   here — that's card 4's job.
   ============================================================ */
(function () {
  'use strict';

  /* Equilibria solved from the shared MPB / MPC / MSC / MSB curves
     (see the calc note at the top of this file). */
  var EM      = { x: 0.520, y: 0.480 };  // MPB ∩ MPC (both panels)
  var ES_NEG  = { x: 0.420, y: 0.569 };  // MPB ∩ MSC (left panel)
  var ES_POS  = { x: 0.606, y: 0.556 };  // MPC ∩ MSB (right panel)

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
        titleColor: '#0F172A',  // black/bold so the title doesn't read as a curve label
        axes: { x: { label: 'Q' }, y: { label: 'P' } },
        curves: [
          /* MPB and MPC label positions UNSET — auto-placer evaluates
           * 5 candidates and picks the one with no curve clash, no
           * label clash, and a slot that doesn't drift off-stage. */
          { id: 'MPB', d: 'M 0.069,0.880 L 0.972,0.080',
            tone: 'blue', label: 'MPB', strokeWidth: 2.5 },
          { id: 'MPC', d: 'M 0.069,0.080 L 0.972,0.880',
            tone: 'amber', label: 'MPC', strokeWidth: 2.5 },
          /* MSC shifted UP from MPC — pollution adds external cost.
           * Label position deliberately UNSET — the engine's
           * auto-placer (chooseCurveLabelPosition, v0.41.15) evaluates
           * five candidate positions and picks the one that doesn't
           * overlap the curve or other labels. */
          { id: 'MSC', d: 'M 0.069,0.270 L 0.785,0.880',
            tone: 'red', label: 'MSC', strokeWidth: 2.2, dashed: '6 4' }
        ],
        points: [
          /* Market eq at MPB ∩ MPC */
          { x: EM.x, y: EM.y, intersection: { curves: ['MPB', 'MPC'] },
            tone: 'blue', radius: 5, hollow: true,
            gridlines: 'slate', ticks: { x: 'Q_m' },
            label: 'E_m', labelDx: 10, labelDy: -4, anchor: 'start' },
          /* Social optimum at MPB ∩ MSC — left of Q_m */
          { x: ES_NEG.x, y: ES_NEG.y, intersection: { curves: ['MPB', 'MSC'] },
            tone: 'red', radius: 6, hollow: true,
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
        titleColor: '#0F172A',  // black/bold — same rule as left panel
        axes: { x: { label: 'Q' }, y: { label: 'P' } },
        curves: [
          /* MPB and MPC label positions UNSET — auto-placer evaluates
           * 5 candidates and picks the one with no curve clash, no
           * label clash, and a slot that doesn't drift off-stage. */
          { id: 'MPB', d: 'M 0.069,0.880 L 0.972,0.080',
            tone: 'blue', label: 'MPB', strokeWidth: 2.5 },
          { id: 'MPC', d: 'M 0.069,0.080 L 0.972,0.880',
            tone: 'amber', label: 'MPC', strokeWidth: 2.5 },
          /* MSB shifted UP from MPB — vaccinations add herd-immunity
           * benefit. Label position UNSET — auto-placer handles it
           * (without this the manual placement clashed with the
           * auto-placed MPB above). */
          { id: 'MSB', d: 'M 0.215,0.880 L 1.000,0.230',
            tone: 'green', label: 'MSB', strokeWidth: 2.2, dashed: '6 4' }
        ],
        points: [
          /* Market eq at MPB ∩ MPC. In the POSITIVE-externality panel
           * E_m label goes to the LEFT of the dot — E* sits to the
           * right (Q* > Q_m for under-production) so a right-side E_m
           * label would crash into E*. User feedback this round:
           * "E_m label should be to the LEFT of the intersection
           * point" in the positive-externality panel. */
          { x: EM.x, y: EM.y, intersection: { curves: ['MPB', 'MPC'] },
            tone: 'blue', radius: 5, hollow: true,
            gridlines: 'slate', ticks: { x: 'Q_m' },
            label: 'E_m', labelDx: -10, labelDy: -4, anchor: 'end' },
          /* Social optimum at MPC ∩ MSB — right of Q_m */
          { x: ES_POS.x, y: ES_POS.y, intersection: { curves: ['MPC', 'MSB'] },
            tone: 'green', radius: 6, hollow: true,
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
