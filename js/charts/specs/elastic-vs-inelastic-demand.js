/* ============================================================
   Elastic vs Inelastic Demand – engine spec for elasticVsInelasticDiagram.
   Side-by-side comparison used by the Price Elasticity of Demand topic.
   First migration to use the engine's new `panels: [...]` multi-chart
   support (PR adds this engine field – one SVG, two independent
   coordinate systems).

   Left panel  shallow D curve → "elastic" – same ΔP gives a LARGE ΔQ
   Right panel steep   D curve → "inelastic" – same ΔP gives a SMALL ΔQ

   Both panels share matching ΔP arrow size so the eye can compare the
   resulting ΔQ arrows directly. The bottom caption nails the message:
   "Same price change – very different quantity responses."
   ============================================================ */
(function () {
  'use strict';

  // Shared chart-space P levels (same in both panels)
  var P1_y = 0.406;   // lower price line
  var P2_y = 0.682;   // upper price line

  // Elastic panel – Q values (chart-space within left panel)
  var Q2_el = 0.200, Q1_el = 0.706;

  // Inelastic panel – Q values
  var Q2_in = 0.272, Q1_in = 0.498;

  window.ECONOS_PED_ELASTIC_VS_INELASTIC_SPEC = {
    width: 660,
    height: 290,
    className: 'ped-compare-svg',
    background: '#FFFFFF',
    defs:
      // Standard right-pointing arrowhead. `orient="auto"` rotates the
      // marker to the line's tangent direction, so this works on the
      // vertical ΔP arrows too. The previous design pointed UP in local
      // coords and rendered HORIZONTAL after auto-rotation on a
      // vertical line – same family of bug as dq-up/dq-down.
      '<marker id="ped-red-end-up" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><polygon points="0,0 0,8 8,4" fill="#DC2626"/></marker>' +
      '<marker id="ped-blue-start" markerWidth="8" markerHeight="8" refX="2" refY="4" orient="auto"><polygon points="8,0 8,8 0,4" fill="#2563EB"/></marker>' +
      '<marker id="ped-blue-end" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><polygon points="0,0 0,8 8,4" fill="#2563EB"/></marker>' +
      '<marker id="ped-amber-start" markerWidth="8" markerHeight="8" refX="2" refY="4" orient="auto"><polygon points="8,0 8,8 0,4" fill="#D97706"/></marker>' +
      '<marker id="ped-amber-end" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><polygon points="0,0 0,8 8,4" fill="#D97706"/></marker>',
    divider: { x: 330, y1: 22, y2: 275 },

    panels: [
      /* ─── LEFT panel: ELASTIC (shallow demand curve) ─── */
      {
        chartArea: { x: 45, y: 28, width: 265, height: 217 },
        title: 'Elastic demand',
        titleTone: 'blue',
        axes: { x: { label: 'Q' }, y: { label: 'P' } },
        curves: [
          { d: 'M 0.057,0.760 L 0.943,0.276',
            tone: 'blue', label: 'D', strokeWidth: 2.5, labelDx: 6, labelDy: 4 }
        ],
        arrows: [
          // Dashed P-gridlines from y-axis to demand line
          { x1: 0, y1: P2_y, x2: Q2_el, y2: P2_y, tone: 'slate', strokeWidth: 1, dashed: '4 3', buffer: 0 },
          { x1: 0, y1: P1_y, x2: Q1_el, y2: P1_y, tone: 'slate', strokeWidth: 1, dashed: '4 3', buffer: 0 },
          // Dashed Q-droplines
          { x1: Q2_el, y1: P2_y, x2: Q2_el, y2: 0, tone: 'slate', strokeWidth: 1, dashed: '4 3', buffer: 0 },
          { x1: Q1_el, y1: P1_y, x2: Q1_el, y2: 0, tone: 'slate', strokeWidth: 1, dashed: '4 3', buffer: 0 },
          // Red ΔP arrow OUTSIDE chart on left (vertical, points up)
          { x1: -0.049, y1: P1_y, x2: -0.049, y2: P2_y,
            tone: 'red', strokeWidth: 2, markerEnd: 'ped-red-end-up', buffer: 0 },
          // Blue ΔQD arrow at bottom (double-headed, large span)
          { x1: Q2_el, y1: 0.055, x2: Q1_el, y2: 0.055,
            tone: 'blue', strokeWidth: 2.5,
            markerStart: 'ped-blue-start', markerEnd: 'ped-blue-end', buffer: 0 }
        ],
        texts: [
          { x: -0.071, y: P2_y,  text: 'P₂', tone: 'slate', bold: true,  anchor: 'end' },
          { x: -0.071, y: P1_y,  text: 'P₁', tone: 'slate', bold: true,  anchor: 'end' },
          { x: Q2_el,  y: -0.065, text: 'Q₂', tone: 'slate', bold: true,  anchor: 'middle' },
          { x: Q1_el,  y: -0.065, text: 'Q₁', tone: 'slate', bold: true,  anchor: 'middle' },
          // ΔP / ΔQD labels
          { x: -0.080, y: (P1_y + P2_y) / 2, text: 'ΔP', tone: 'red', bold: true, anchor: 'end' },
          { x: (Q2_el + Q1_el) / 2, y: 0.110, text: 'Large ΔQD', tone: 'blue', bold: true, anchor: 'middle' }
        ]
      },

      /* ─── RIGHT panel: INELASTIC (steep demand curve) ─── */
      {
        chartArea: { x: 375, y: 28, width: 265, height: 217 },
        title: 'Inelastic demand',
        titleTone: 'amber',
        axes: { x: { label: 'Q' }, y: { label: 'P' } },
        curves: [
          { d: 'M 0.075,0.922 L 0.755,0.092',
            tone: 'amber', label: 'D', strokeWidth: 2.5, labelDx: 6, labelDy: 4 }
        ],
        arrows: [
          { x1: 0, y1: P2_y, x2: Q2_in, y2: P2_y, tone: 'slate', strokeWidth: 1, dashed: '4 3', buffer: 0 },
          { x1: 0, y1: P1_y, x2: Q1_in, y2: P1_y, tone: 'slate', strokeWidth: 1, dashed: '4 3', buffer: 0 },
          { x1: Q2_in, y1: P2_y, x2: Q2_in, y2: 0, tone: 'slate', strokeWidth: 1, dashed: '4 3', buffer: 0 },
          { x1: Q1_in, y1: P1_y, x2: Q1_in, y2: 0, tone: 'slate', strokeWidth: 1, dashed: '4 3', buffer: 0 },
          // SAME size ΔP arrow as the elastic panel (visual comparison)
          { x1: -0.049, y1: P1_y, x2: -0.049, y2: P2_y,
            tone: 'red', strokeWidth: 2, markerEnd: 'ped-red-end-up', buffer: 0 },
          // Amber ΔQD arrow at bottom (double-headed, SMALL span)
          { x1: Q2_in, y1: 0.055, x2: Q1_in, y2: 0.055,
            tone: 'amber', strokeWidth: 2.5,
            markerStart: 'ped-amber-start', markerEnd: 'ped-amber-end', buffer: 0 }
        ],
        texts: [
          { x: -0.071, y: P2_y,  text: 'P₂', tone: 'slate', bold: true,  anchor: 'end' },
          { x: -0.071, y: P1_y,  text: 'P₁', tone: 'slate', bold: true,  anchor: 'end' },
          { x: Q2_in,  y: -0.065, text: 'Q₂', tone: 'slate', bold: true,  anchor: 'middle' },
          { x: Q1_in,  y: -0.065, text: 'Q₁', tone: 'slate', bold: true,  anchor: 'middle' },
          { x: -0.080, y: (P1_y + P2_y) / 2, text: 'ΔP', tone: 'red', bold: true, anchor: 'end' },
          { x: (Q2_in + Q1_in) / 2, y: 0.110, text: 'Small ΔQD', tone: 'amber', bold: true, anchor: 'middle' }
        ]
      },

      /* ─── Bottom caption panel (no axes) ─── */
      {
        chartArea: { x: 0, y: 268, width: 660, height: 16 },
        axes: false,
        texts: [
          { x: 0.5, y: 0.5,
            text: 'Same price change – very different quantity responses',
            tone: 'gray', italic: true, anchor: 'middle' }
        ]
      }
    ]
  };
})();
