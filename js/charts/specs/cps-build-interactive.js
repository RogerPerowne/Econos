/* ============================================================
   CPS Build Interactive — engine spec for cpsBuildInteractive.
   Consumer & Producer Surplus topic card 2 ("Building the Surplus
   Diagram"). Uses the legacy interactiveDiagram cumulative-reveal
   pattern (idl-1, idl-2, idl-3) so each "Build it in this order"
   step reveals one more element of the static cpsDiagram:

     V0  Plot D and S       — base: D + S only
     V1  Find equilibrium E → idl-1 (E dot + label)
     V2  Mark Pₑ and Qₑ    → idl-1 + idl-2 (gridlines + tick labels)
     V3  Shade CS and PS    → idl-1 + idl-2 + idl-3 (triangles + labels)

   Geometry is identical to the static cpsDiagram so the two cards
   feel consistent — only the reveal sequence differs.
   ============================================================ */
(function () {
  'use strict';

  var E = { x: 0.457, y: 0.500 };

  window.ECONOS_CPS_BUILD_SPEC = {
    width: 600,
    height: 320,
    chartArea: { x: 70, y: 30, width: 440, height: 240 },
    className: 'cps-build-svg',
    axes: {
      x: { label: 'Quantity' },
      y: { label: 'Price' }
    },

    /* Always-visible base: D and S curves */
    curves: [
      { d: 'M 0,0.960 L 0.914,0.040',
        tone: 'blue', label: 'D', strokeWidth: 2.8, labelDx: 8, labelDy: 4 },
      { d: 'M 0,0.040 L 0.914,0.960',
        tone: 'amber', label: 'S', strokeWidth: 2.8, labelDx: 8, labelDy: -4 }
    ],

    viewDefaultsHidden: true,
    views: [
      /* ─── idl-1: equilibrium point E ─── */
      {
        key: 'find-equilibrium',
        contentLayer: 'idl-1',
        points: [
          { x: E.x, y: E.y, tone: 'slate', radius: 6, label: 'E',
            labelDx: 12, labelDy: -8, anchor: 'start' }
        ]
      },

      /* ─── idl-2: Pₑ + Qₑ dashed gridlines and tick labels ─── */
      {
        key: 'mark-prices',
        contentLayer: 'idl-2',
        arrows: [
          { x1: 0, y1: E.y, x2: E.x, y2: E.y,
            tone: 'slate', strokeWidth: 1.5, dashed: '5 3', buffer: 0 },
          { x1: E.x, y1: E.y, x2: E.x, y2: 0,
            tone: 'slate', strokeWidth: 1.5, dashed: '5 3', buffer: 0 }
        ],
        texts: [
          { x: -0.020, y: E.y,    text: 'Pₑ', tone: 'slate', bold: true, italic: true, fontSize: 13, anchor: 'end' },
          { x: E.x,    y: -0.055, text: 'Qₑ', tone: 'slate', bold: true, italic: true, fontSize: 13, anchor: 'middle' }
        ]
      },

      /* ─── idl-3: CS + PS triangle fills + region labels ─── */
      {
        key: 'shade-surpluses',
        contentLayer: 'idl-3',
        polygons: [
          // CS triangle (blue) — above Pₑ, below D
          { points: [[0, 0.960], [0, E.y], [E.x, E.y]],
            fill: '#DBEAFE', opacity: 0.85 },
          // PS triangle (amber) — below Pₑ, above S
          { points: [[0, E.y], [0, 0.040], [E.x, E.y]],
            fill: '#FEF3C7', opacity: 0.85 }
        ],
        texts: [
          { x: 0.13, y: 0.745, text: 'Consumer surplus',
            tone: 'blue', bold: true, fontSize: 13, anchor: 'middle' },
          { x: 0.13, y: 0.260, text: 'Producer surplus',
            tone: 'amber', bold: true, fontSize: 13, anchor: 'middle' }
        ]
      }
    ]
  };
})();
