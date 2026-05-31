/* ============================================================
   Tax & Subsidy Four-Panel Reference — engine spec for
   taxSubsidyFourPanels. Static comparison card in
   taxes-and-subsidies-as-policy-tools.

   2×2 macro grid of panels each in its own rounded white container:
     (a) Indirect tax — S shifts left/up
     (b) Tax incidence — burden by elasticity (TWO sub-charts:
         inelastic D → consumers bear more · elastic D → producers
         bear more, separated by an internal vertical divider)
     (c) Subsidy — S shifts right/down
     (d) Pigouvian correction — MPC to MSC

   Container layout (absolute SVG pixel coords):
     panel a   x= 6..291, y= 6..226
     panel b   x=299..584, y= 6..226   (internal divider at SVG x=447)
     panel c   x= 6..291, y=234..454
     panel d   x=299..584, y=234..454
   ============================================================ */
(function () {
  'use strict';

  window.ECONOS_TAX_SUBSIDY_FOUR_PANELS_SPEC = {
    width: 590,
    height: 460,
    className: 'tax-sub-four-svg',
    background: '#F8FAFC',

    /* Internal vertical divider INSIDE panel (b) — between the
       inelastic and elastic sub-charts. Absolute SVG coords. */
    dividers: [
      { x: 447, y1: 32, y2: 218, stroke: '#E2E8F0', strokeWidth: 1, dashed: false }
    ],

    panels: [
      /* ═══════════ PANEL (a): Indirect tax — S shifts left/up ═══════════ */
      {
        box: { x: 6, y: 6, width: 285, height: 220, fill: '#fff', stroke: '#E2E8F0', rx: 8 },
        title: '(a)  Indirect tax — S shifts left/up',
        titleY: 19,
        titleSize: 10,
        chartArea: { x: 50, y: 32, width: 231, height: 155 },
        axes: { x: { label: 'Q' }, y: { label: 'P' } },
        polygons: [
          // Government tax revenue rectangle (between Pp and Pc, from 0 to Qt)
          { points: [[0, 0.665], [0, 0.426], [0.358, 0.426], [0.358, 0.665]],
            fill: '#D1FAE5', opacity: 0.85 },
          // DWL triangle (between Qt and Qe)
          { points: [[0.358, 0.665], [0.470, 0.535], [0.358, 0.426]],
            fill: '#FECACA', opacity: 0.9 }
        ],
        curves: [
          { d: 'M 0,0.974 L 0.961,0.045', tone: 'green', label: 'S', strokeWidth: 2, labelDx: 6, labelDy: -4 },
          { d: 'M 0,0.039 L 0.961,0.961', tone: 'blue',  label: 'D', strokeWidth: 2, labelDx: 6, labelDy: 4 },
          { d: 'M 0,0.265 L 0.736,0.987', tone: 'red',   label: 'S+tax', strokeWidth: 1.8, dashed: '5 3', labelDx: 6, labelDy: -4 }
        ],
        arrows: [
          // Pc + Qt droplines
          { x1: 0, y1: 0.665, x2: 0.358, y2: 0.665, tone: 'slate', strokeWidth: 1, dashed: '3 2', buffer: 0 },
          { x1: 0, y1: 0.426, x2: 0.358, y2: 0.426, tone: 'slate', strokeWidth: 1, dashed: '3 2', buffer: 0 },
          { x1: 0, y1: 0.535, x2: 0.470, y2: 0.535, tone: 'gray',  strokeWidth: 0.8, dashed: '3 2', buffer: 0 },
          { x1: 0.358, y1: 0.665, x2: 0.358, y2: 0, tone: 'slate', strokeWidth: 1, dashed: '3 2', buffer: 0 },
          { x1: 0.470, y1: 0.535, x2: 0.470, y2: 0, tone: 'gray', strokeWidth: 0.8, dashed: '3 2', buffer: 0 }
        ],
        points: [
          { x: 0.470, y: 0.535, tone: 'slate', radius: 3 },
          { x: 0.358, y: 0.665, tone: 'red',   radius: 3 }
        ],
        texts: [
          { x: -0.030, y: 0.665, text: 'Pc', tone: 'blue',  bold: true, italic: true, fontSize: 9,  anchor: 'end' },
          { x: -0.030, y: 0.535, text: 'Pe', tone: 'slate', italic: true, fontSize: 9, anchor: 'end' },
          { x: -0.030, y: 0.426, text: 'Pp', tone: 'amber', bold: true, italic: true, fontSize: 9, anchor: 'end' },
          { x: 0.358,  y: -0.084, text: 'Qt', tone: 'slate', italic: true, fontSize: 9, anchor: 'middle' },
          { x: 0.470,  y: -0.084, text: 'Qe', tone: 'slate', italic: true, fontSize: 9, anchor: 'middle' },
          { x: 0.182,  y: 0.535, text: 'Revenue', tone: 'green', bold: true, fontSize: 8, anchor: 'middle' },
          { x: 0.450,  y: 0.555, text: 'DWL',     tone: 'red',   bold: true, fontSize: 8, anchor: 'start' }
        ]
      },

      /* ═══════════ PANEL (b) shell — container + title + (divider is top-level) ═══════════ */
      {
        box: { x: 299, y: 6, width: 285, height: 220, fill: '#fff', stroke: '#E2E8F0', rx: 8 },
        title: '(b)  Tax incidence — burden by elasticity',
        titleY: 19,
        titleSize: 10,
        titleX: 441
      },

      /* ─── (b)-left: Inelastic D → consumers bear more ─── */
      {
        chartArea: { x: 339, y: 58, width: 94, height: 149 },
        axes: { x: { label: 'Q' }, y: { label: 'P' } },
        title: 'Inelastic D — Consumers bear more',
        titleY: 38,
        titleSize: 8,
        titleTone: 'blue',
        titleX: 386,
        polygons: [
          // Consumer burden (above Pe, below Pc) — wider on top
          { points: [[0, 0.530], [0.245, 0.530], [0.245, 0.685], [0, 0.685]],
            fill: '#DBEAFE', opacity: 0.9 },
          // Producer burden (below Pe, above Pp) — narrower below
          { points: [[0, 0.376], [0.245, 0.376], [0.245, 0.530], [0, 0.530]],
            fill: '#FEE2E2', opacity: 0.9 }
        ],
        curves: [
          { d: 'M 0,0.027 L 0.915,0.987', tone: 'green', label: 'S', strokeWidth: 1.8, labelDx: 5, labelDy: -4 },
          { d: 'M 0,0.268 L 0.681,0.987', tone: 'red',   label: 'S+T', strokeWidth: 1.5, dashed: '4 3', labelDx: 5, labelDy: -4 },
          // D steep (inelastic)
          { d: 'M 0,0.960 L 0.553,0', tone: 'blue', label: 'D', strokeWidth: 1.8, labelDx: 5, labelDy: 4 }
        ],
        points: [
          { x: 0.340, y: 0.376, tone: 'slate', radius: 2.5 },
          { x: 0.245, y: 0.530, tone: 'red',   radius: 2.5 }
        ],
        texts: [
          { x: -0.054, y: 0.530, text: 'Pc', tone: 'blue',  bold: true, italic: true, fontSize: 8, anchor: 'end' },
          { x: -0.054, y: 0.376, text: 'Pe', tone: 'slate', italic: true, fontSize: 8, anchor: 'end' },
          { x: -0.054, y: 0.250, text: 'Pp', tone: 'amber', bold: true, italic: true, fontSize: 8, anchor: 'end' },
          { x: 0.460, y: 0.515, text: 'Large',     tone: 'blue', fontSize: 7, anchor: 'start' },
          { x: 0.460, y: 0.460, text: 'consumer',  tone: 'blue', fontSize: 7, anchor: 'start' },
          { x: 0.460, y: 0.385, text: 'Small',     tone: 'red',  fontSize: 7, anchor: 'start' },
          { x: 0.460, y: 0.330, text: 'producer',  tone: 'red',  fontSize: 7, anchor: 'start' }
        ]
      },

      /* ─── (b)-right: Elastic D → producers bear more ─── */
      {
        chartArea: { x: 487, y: 58, width: 94, height: 149 },
        axes: { x: { label: 'Q' }, y: { label: 'P' } },
        title: 'Elastic D — Producers bear more',
        titleY: 38,
        titleSize: 8,
        titleTone: 'red',
        titleX: 534,
        polygons: [
          // Consumer burden (small) above Pe
          { points: [[0, 0.522], [0.234, 0.522], [0.234, 0.617], [0, 0.617]],
            fill: '#DBEAFE', opacity: 0.9 },
          // Producer burden (large) below Pe
          { points: [[0, 0.376], [0.234, 0.376], [0.234, 0.522], [0, 0.522]],
            fill: '#FEE2E2', opacity: 0.9 }
        ],
        curves: [
          { d: 'M 0,0.027 L 0.915,0.987', tone: 'green', label: 'S', strokeWidth: 1.8, labelDx: 5, labelDy: -4 },
          { d: 'M 0,0.268 L 0.681,0.987', tone: 'red',   label: 'S+T', strokeWidth: 1.5, dashed: '4 3', labelDx: 5, labelDy: -4 },
          // D shallow (elastic)
          { d: 'M 0,0.690 L 0.915,0', tone: 'blue', label: 'D', strokeWidth: 1.8, labelDx: 5, labelDy: 4 }
        ],
        points: [
          { x: 0.372, y: 0.376, tone: 'slate', radius: 2.5 },
          { x: 0.234, y: 0.522, tone: 'red',   radius: 2.5 }
        ],
        texts: [
          { x: -0.054, y: 0.617, text: 'Pc', tone: 'blue',  bold: true, italic: true, fontSize: 8, anchor: 'end' },
          { x: -0.054, y: 0.522, text: 'Pe', tone: 'slate', italic: true, fontSize: 8, anchor: 'end' },
          { x: -0.054, y: 0.250, text: 'Pp', tone: 'amber', bold: true, italic: true, fontSize: 8, anchor: 'end' },
          { x: 0.450, y: 0.605, text: 'Small',     tone: 'blue', fontSize: 7, anchor: 'start' },
          { x: 0.450, y: 0.550, text: 'consumer',  tone: 'blue', fontSize: 7, anchor: 'start' },
          { x: 0.450, y: 0.475, text: 'Large',     tone: 'red',  fontSize: 7, anchor: 'start' },
          { x: 0.450, y: 0.420, text: 'producer',  tone: 'red',  fontSize: 7, anchor: 'start' }
        ]
      },

      /* ═══════════ PANEL (c): Subsidy — S shifts right/down ═══════════ */
      {
        box: { x: 6, y: 234, width: 285, height: 220, fill: '#fff', stroke: '#E2E8F0', rx: 8 },
        title: '(c)  Subsidy — S shifts right/down',
        titleY: 247,
        titleSize: 10,
        chartArea: { x: 50, y: 260, width: 231, height: 155 },
        axes: { x: { label: 'Q' }, y: { label: 'P' } },
        polygons: [
          // Government cost rectangle (between Pc and Ps, from 0 to Qs)
          { points: [[0, 0.665], [0, 0.426], [0.593, 0.426], [0.593, 0.665]],
            fill: '#D1FAE5', opacity: 0.85 },
          // DWL triangle (overproduction) — apex left at Qe, base on Qs vertical
          { points: [[0.470, 0.535], [0.593, 0.426], [0.593, 0.665]],
            fill: '#FECACA', opacity: 0.9 }
        ],
        curves: [
          { d: 'M 0,0.974 L 0.961,0.045', tone: 'green', label: 'S', strokeWidth: 2, labelDx: 6, labelDy: -4 },
          { d: 'M 0,0.039 L 0.961,0.961', tone: 'blue',  label: 'D', strokeWidth: 2, labelDx: 6, labelDy: 4 },
          { d: 'M 0.203,0.974 L 0.848,0.297', tone: 'amber', label: 'S−sub', strokeWidth: 1.8, dashed: '5 3', labelDx: 6, labelDy: -4 }
        ],
        arrows: [
          { x1: 0, y1: 0.665, x2: 0.593, y2: 0.665, tone: 'slate', strokeWidth: 1, dashed: '3 2', buffer: 0 },
          { x1: 0, y1: 0.426, x2: 0.593, y2: 0.426, tone: 'slate', strokeWidth: 1, dashed: '3 2', buffer: 0 },
          { x1: 0, y1: 0.535, x2: 0.470, y2: 0.535, tone: 'gray',  strokeWidth: 0.8, dashed: '3 2', buffer: 0 },
          { x1: 0.470, y1: 0.535, x2: 0.470, y2: 0, tone: 'gray', strokeWidth: 0.8, dashed: '3 2', buffer: 0 },
          { x1: 0.593, y1: 0.665, x2: 0.593, y2: 0, tone: 'slate', strokeWidth: 1, dashed: '3 2', buffer: 0 }
        ],
        points: [
          { x: 0.470, y: 0.535, tone: 'slate', radius: 3 },
          { x: 0.593, y: 0.426, tone: 'amber', radius: 3 }
        ],
        texts: [
          { x: -0.030, y: 0.665, text: 'Ps', tone: 'amber', bold: true, italic: true, fontSize: 9, anchor: 'end' },
          { x: -0.030, y: 0.535, text: 'Pe', tone: 'slate', italic: true, fontSize: 9, anchor: 'end' },
          { x: -0.030, y: 0.426, text: 'Pc', tone: 'blue',  bold: true, italic: true, fontSize: 9, anchor: 'end' },
          { x: 0.470,  y: -0.084, text: 'Qe', tone: 'slate', italic: true, fontSize: 9, anchor: 'middle' },
          { x: 0.593,  y: -0.084, text: 'Qs', tone: 'slate', italic: true, fontSize: 9, anchor: 'middle' },
          { x: 0.295,  y: 0.535, text: 'Gov. cost', tone: 'green', bold: true, fontSize: 8, anchor: 'middle' },
          { x: 0.560,  y: 0.555, text: 'DWL',       tone: 'red',   bold: true, fontSize: 8, anchor: 'start' }
        ]
      },

      /* ═══════════ PANEL (d): Pigouvian correction — MPC to MSC ═══════════ */
      {
        box: { x: 299, y: 234, width: 285, height: 220, fill: '#fff', stroke: '#E2E8F0', rx: 8 },
        title: '(d)  Pigouvian correction — MPC to MSC',
        titleY: 247,
        titleSize: 10,
        chartArea: { x: 343, y: 260, width: 231, height: 155 },
        axes: { x: { label: 'Q' }, y: { label: 'P' } },
        polygons: [
          // MEC wedge (purple, between MPC and MSC)
          { points: [[0, 0.265], [0, 0.039], [0.470, 0.535], [0.470, 0.761]],
            fill: '#EDE9FE', opacity: 0.8 },
          // DWL triangle (overproduction) — between Q* and Qm, bounded by MSC and MPC
          { points: [[0.358, 0.665], [0.470, 0.535], [0.470, 0.761]],
            fill: '#FECACA', opacity: 0.9 }
        ],
        curves: [
          { d: 'M 0,0.974 L 0.961,0.045', tone: 'green', label: 'MPC', strokeWidth: 2, labelDx: 6, labelDy: -4 },
          { d: 'M 0,0.039 L 0.961,0.961', tone: 'blue',  label: 'D = MPB', strokeWidth: 2, labelDx: -56, labelDy: 4 },
          { d: 'M 0,0.265 L 0.736,0.987', tone: 'purple', label: 'MSC', strokeWidth: 1.8, dashed: '5 3', labelDx: -28, labelDy: -10 }
        ],
        arrows: [
          { x1: 0, y1: 0.535, x2: 0.470, y2: 0.535, tone: 'gray',  strokeWidth: 0.8, dashed: '3 2', buffer: 0 },
          { x1: 0, y1: 0.665, x2: 0.358, y2: 0.665, tone: 'slate', strokeWidth: 1, dashed: '3 2', buffer: 0 },
          { x1: 0.358, y1: 0.665, x2: 0.358, y2: 0, tone: 'slate', strokeWidth: 1, dashed: '3 2', buffer: 0 },
          { x1: 0.470, y1: 0.761, x2: 0.470, y2: 0, tone: 'slate', strokeWidth: 1, dashed: '3 2', buffer: 0 }
        ],
        points: [
          { x: 0.470, y: 0.535, tone: 'slate', radius: 3 },
          { x: 0.358, y: 0.665, tone: 'purple', radius: 3 }
        ],
        texts: [
          { x: -0.030, y: 0.665, text: 'P*', tone: 'slate', italic: true, fontSize: 9, anchor: 'end' },
          { x: -0.030, y: 0.535, text: 'Pm', tone: 'slate', italic: true, fontSize: 9, anchor: 'end' },
          { x: 0.358,  y: -0.084, text: 'Q*', tone: 'purple', italic: true, fontSize: 9, anchor: 'middle' },
          { x: 0.470,  y: -0.084, text: 'Qm', tone: 'slate', italic: true, fontSize: 9, anchor: 'middle' },
          { x: 0.173,  y: 0.297, text: 'MEC', tone: 'purple', bold: true, fontSize: 8, anchor: 'middle' },
          { x: 0.470,  y: 0.700, text: 'DWL', tone: 'red',    bold: true, fontSize: 8, anchor: 'middle' }
        ]
      }
    ]
  };
})();
