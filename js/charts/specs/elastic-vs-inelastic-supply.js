/* ============================================================
   Elastic vs Inelastic Supply – engine spec for
   elasticVsInelasticSupplyDiagram. Price-elasticity-of-supply topic.

   Same multi-panel pattern as the PED elastic-vs-inelastic diagram,
   but the pedagogy is mirrored: holding the demand shift constant,
   elastic supply produces a LARGE ΔQ and SMALL ΔP, while inelastic
   supply produces a SMALL ΔQ and LARGE ΔP.

   Each panel shows: a single S curve (shallow/elastic vs steep/
   inelastic), original D₁ (gray dashed), shifted D₂ (green), small
   green shift arrow, both E₁ and E₂ equilibrium dots, dashed
   gridlines and tick labels.
   ============================================================ */
(function () {
  'use strict';

  window.ECONOS_PES_ELASTIC_VS_INELASTIC_SPEC = {
    width: 660,
    height: 300,
    className: 'pes-compare-svg',
    background: '#FFFFFF',

    divider: { x: 330, y1: 22, y2: 268 },

    panels: [
      /* ─── LEFT panel: ELASTIC supply (PES > 1) ─── */
      {
        chartArea: { x: 45, y: 28, width: 265, height: 217 },
        title: 'Elastic Supply (PES > 1)',
        titleTone: 'blue',
        axes: { x: { label: 'Q' }, y: { label: 'P' } },
        curves: [
          // S – shallow (rises gently)
          { d: 'M 0,0.207 L 0.943,0.714',
            tone: 'slate', label: 'S', strokeWidth: 2.2, labelDx: 5, labelDy: 0 },
          // D₁ – gray dashed
          { d: 'M 0,0.852 L 0.525,0',
            tone: 'gray', label: 'D₁', strokeWidth: 1.8, dashed: '5 3', labelDx: 5, labelDy: 4 },
          // D₂ – green solid (shifted right)
          { d: 'M 0.226,0.852 L 0.751,0',
            tone: 'green', label: 'D₂', strokeWidth: 1.8, labelDx: 5, labelDy: 4 }
        ],
        arrows: [
          // E₁ gridlines
          { x1: 0, y1: 0.369, x2: 0.298, y2: 0.369, tone: 'slate', strokeWidth: 1, dashed: '4 3', buffer: 0 },
          { x1: 0.298, y1: 0.369, x2: 0.298, y2: 0, tone: 'slate', strokeWidth: 1, dashed: '4 3', buffer: 0 },
          // E₂ gridlines
          { x1: 0, y1: 0.461, x2: 0.468, y2: 0.461, tone: 'slate', strokeWidth: 1, dashed: '4 3', buffer: 0 },
          { x1: 0.468, y1: 0.461, x2: 0.468, y2: 0, tone: 'slate', strokeWidth: 1, dashed: '4 3', buffer: 0 },
          // Green D shift arrow (small horizontal at the height of E₁/E₂)
          { x1: 0.408, y1: 0.207, x2: 0.615, y2: 0.207,
            tone: 'green', strokeWidth: 1.5, markerEnd: 'econos-arrow-green', buffer: 0 },
          // Red ΔP arrow OUTSIDE chart on left (small for elastic)
          { x1: -0.045, y1: 0.369, x2: -0.045, y2: 0.461,
            tone: 'red', strokeWidth: 2, markerEnd: 'econos-arrow-red', buffer: 0 },
          // Blue ΔQ arrow at bottom (LARGE span for elastic)
          { x1: 0.298, y1: -0.124, x2: 0.468, y2: -0.124,
            tone: 'blue', strokeWidth: 2.2,
            markerStart: 'econos-arrow-blue-back', markerEnd: 'econos-arrow-blue', buffer: 0 }
        ],
        points: [
          { x: 0.298, y: 0.369, tone: 'slate', radius: 4 },
          { x: 0.468, y: 0.461, tone: 'green', radius: 4 }
        ],
        texts: [
          { x: -0.071, y: 0.369, text: 'P₁', tone: 'slate', bold: true, anchor: 'end' },
          { x: -0.071, y: 0.461, text: 'P₂', tone: 'slate', bold: true, anchor: 'end' },
          { x: 0.298, y: -0.065, text: 'Q₁', tone: 'slate', bold: true, anchor: 'middle' },
          { x: 0.468, y: -0.065, text: 'Q₂', tone: 'slate', bold: true, anchor: 'middle' },
          { x: (0.298 + 0.468) / 2, y: -0.180, text: 'Large ΔQ', tone: 'blue', bold: true, anchor: 'middle' }
        ]
      },

      /* ─── RIGHT panel: INELASTIC supply (PES < 1) ─── */
      {
        chartArea: { x: 375, y: 28, width: 265, height: 217 },
        title: 'Inelastic Supply (PES < 1)',
        titleTone: 'amber',
        axes: { x: { label: 'Q' }, y: { label: 'P' } },
        curves: [
          // S – steep (rises quickly)
          { d: 'M 0.170,0.069 L 0.396,0.797',
            tone: 'slate', label: 'S', strokeWidth: 2.2, labelDx: 5, labelDy: 0 },
          { d: 'M 0,0.852 L 0.525,0',
            tone: 'gray', label: 'D₁', strokeWidth: 1.8, dashed: '5 3', labelDx: 5, labelDy: 4 },
          { d: 'M 0.226,0.852 L 0.751,0',
            tone: 'green', label: 'D₂', strokeWidth: 1.8, labelDx: 5, labelDy: 4 }
        ],
        arrows: [
          { x1: 0, y1: 0.406, x2: 0.275, y2: 0.406, tone: 'slate', strokeWidth: 1, dashed: '4 3', buffer: 0 },
          { x1: 0.275, y1: 0.406, x2: 0.275, y2: 0, tone: 'slate', strokeWidth: 1, dashed: '4 3', buffer: 0 },
          { x1: 0, y1: 0.650, x2: 0.351, y2: 0.650, tone: 'slate', strokeWidth: 1, dashed: '4 3', buffer: 0 },
          { x1: 0.351, y1: 0.650, x2: 0.351, y2: 0, tone: 'slate', strokeWidth: 1, dashed: '4 3', buffer: 0 },
          { x1: 0.408, y1: 0.207, x2: 0.615, y2: 0.207,
            tone: 'green', strokeWidth: 1.5, markerEnd: 'econos-arrow-green', buffer: 0 },
          // SAME-position red ΔP arrow but LARGE span (mirrors elastic's small)
          { x1: -0.045, y1: 0.406, x2: -0.045, y2: 0.650,
            tone: 'red', strokeWidth: 2, markerEnd: 'econos-arrow-red', buffer: 0 },
          // SMALL ΔQ
          { x1: 0.275, y1: -0.124, x2: 0.351, y2: -0.124,
            tone: 'blue', strokeWidth: 2.2,
            markerStart: 'econos-arrow-blue-back', markerEnd: 'econos-arrow-blue', buffer: 0 }
        ],
        points: [
          { x: 0.275, y: 0.406, tone: 'slate', radius: 4 },
          { x: 0.351, y: 0.650, tone: 'green', radius: 4 }
        ],
        texts: [
          { x: -0.071, y: 0.406, text: 'P₁', tone: 'slate', bold: true, anchor: 'end' },
          { x: -0.071, y: 0.650, text: 'P₂', tone: 'slate', bold: true, anchor: 'end' },
          { x: 0.275, y: -0.065, text: 'Q₁', tone: 'slate', bold: true, anchor: 'middle' },
          { x: 0.351, y: -0.065, text: 'Q₂', tone: 'slate', bold: true, anchor: 'middle' },
          { x: (0.275 + 0.351) / 2, y: -0.180, text: 'Small ΔQ', tone: 'blue', bold: true, anchor: 'middle' }
        ]
      },

      /* ─── Bottom caption (kept clear of ΔQ labels which sit at ~y=284) ─── */
      {
        chartArea: { x: 0, y: 292, width: 660, height: 6 },
        axes: false,
        texts: [
          { x: 0.5, y: 0.5,
            text: 'Same shock – very different price and quantity responses',
            tone: 'gray', italic: true, anchor: 'middle' }
        ]
      }
    ]
  };
})();
