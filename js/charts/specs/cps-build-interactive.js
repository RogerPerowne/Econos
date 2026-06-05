/* ============================================================
   CPS Build Interactive – engine spec for cpsBuildInteractive.
   Consumer & Producer Surplus topic card 2 ("Building the Surplus
   Diagram"). Uses the legacy interactiveDiagram cumulative-reveal
   pattern (idl-1, idl-2, idl-3) so each "Build it in this order"
   step reveals one more element of the static cpsDiagram:

     V0  Plot D and S       – base: D + S only
     V1  Find equilibrium E → idl-1 (E dot + label)
     V2  Mark Pₑ and Qₑ    → idl-1 + idl-2 (gridlines + tick labels)
     V3  Shade CS and PS    → idl-1 + idl-2 + idl-3 (triangles + labels)

   Geometry mirrors the static cpsDiagram exactly (taller 480×420
   aspect, thick curves, subtle shaded triangles, E + Pₑ/Qₑ ticks)
   so card 1 (static) and card 2 (built up) feel identical – only the
   reveal sequence differs.
   ============================================================ */
(function () {
  'use strict';

  var E = { x: 0.472, y: 0.500 };

  window.ECONOS_CPS_BUILD_SPEC = {
    width: 480,
    height: 420,
    chartArea: { x: 60, y: 50, width: 360, height: 320 },
    className: 'cps-build-svg',
    axes: {
      x: { label: 'Quantity' },
      y: { label: 'Price' }
    },

    /* Always-visible base: D and S curves */
    curves: [
      { id: 'D', d: 'M 0,0.938 L 0.944,0.063',
        tone: 'blue', label: 'D', strokeWidth: 3, labelDx: 8, labelDy: 4 },
      { id: 'S', d: 'M 0,0.063 L 0.944,0.938',
        tone: 'amber', label: 'S', strokeWidth: 3, labelDx: 8, labelDy: -4 }
    ],

    viewDefaultsHidden: true,
    views: [
      /* ─── idl-1: equilibrium point E ─── */
      {
        key: 'find-equilibrium',
        contentLayer: 'idl-1',
        points: [
          { x: E.x, y: E.y, tone: 'slate', radius: 6, label: 'E',
            labelDx: 12, labelDy: -10, anchor: 'start' }
        ]
      },

      /* ─── idl-2: Pₑ + Qₑ dashed gridlines and tick labels ─── */
      {
        key: 'mark-prices',
        contentLayer: 'idl-2',
        arrows: [
          { x1: 0, y1: E.y, x2: E.x, y2: E.y,
            tone: 'slate', strokeWidth: 1.4, dashed: '5 4', buffer: 0 },
          { x1: E.x, y1: E.y, x2: E.x, y2: 0,
            tone: 'slate', strokeWidth: 1.4, dashed: '5 4', buffer: 0 }
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
          // CS triangle (blue) – above Pₑ, below D
          { points: [[0, 0.938], [0, E.y], [E.x, E.y]],
            fill: '#3B82F6', opacity: 0.18 },
          // PS triangle (amber) – below Pₑ, above S
          { points: [[0, E.y], [0, 0.063], [E.x, E.y]],
            fill: '#F59E0B', opacity: 0.18 }
        ],
        texts: [
          { x: 0.150, y: 0.730, text: 'Consumer', tone: 'blue', bold: true, fontSize: 12, anchor: 'middle' },
          { x: 0.150, y: 0.685, text: 'surplus',  tone: 'blue', bold: true, fontSize: 12, anchor: 'middle' },
          { x: 0.150, y: 0.350, text: 'Producer', tone: 'amber', bold: true, fontSize: 12, anchor: 'middle' },
          { x: 0.150, y: 0.305, text: 'surplus',  tone: 'amber', bold: true, fontSize: 12, anchor: 'middle' }
        ]
      }
    ]
  };
})();
