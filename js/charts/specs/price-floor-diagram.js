/* ============================================================
   Price Floor Diagram Interactive — engine spec for
   priceFloorDiagramInteractive. Govt intervention topic.

   Minimum price set ABOVE Pₑ. At Pmin: quantity supplied (Qs)
   exceeds quantity demanded (Qd) → excess supply / surplus.

   3 progressive-reveal views:
     V0 Free market    — base D + S + E only
     V1 Floor Pmin     → idl-1 (Pmin line + Qd/Qs ticks + excess supply bracket)
     V2 Surplus regions → idl-1 + idl-2 (CS smaller, PS quadrilateral)
     V3 DWL            → idl-1 + idl-2 + idl-3 (DWL triangle)

   Chart geometry:
     E (Pₑ, Qₑ)   chart (0.489, 0.500)
     Pmin level   chart-y 0.615  – above Pₑ
     Qd at Pmin   chart-x 0.368  – reduced demand
     Qs at Pmin   chart-x 0.609  – unsold supply
   ============================================================ */
(function () {
  'use strict';

  var E    = { x: 0.489, y: 0.500 };
  var Pmin = 0.615;
  var Qd   = 0.368;
  var Qs   = 0.609;

  window.ECONOS_PRICE_FLOOR_SPEC = {
    width: 470,
    height: 420,
    chartArea: { x: 100, y: 26, width: 348, height: 348 },
    className: 'price-floor-svg',
    background: '#FFFFFF',
    axes: {
      x: { label: 'Quantity' },
      y: { label: 'Price' }
    },

    curves: [
      { d: 'M 0,0.960 L 0.977,0.040', tone: 'blue',  label: 'D', strokeWidth: 2.8, labelDx: 8, labelDy: 4 },
      { d: 'M 0,0.040 L 0.977,0.960', tone: 'amber', label: 'S', strokeWidth: 2.8, labelDx: 8, labelDy: -4 }
    ],
    arrows: [
      { x1: 0, y1: E.y, x2: E.x, y2: E.y, tone: 'slate', strokeWidth: 1.4, dashed: '5 3', buffer: 0 },
      { x1: E.x, y1: E.y, x2: E.x, y2: 0, tone: 'slate', strokeWidth: 1.4, dashed: '5 3', buffer: 0 }
    ],
    points: [
      { x: E.x, y: E.y, tone: 'slate', radius: 5.5 }
    ],
    texts: [
      { x: -0.020, y: E.y,    text: 'Pₑ', tone: 'slate', bold: true, italic: true, fontSize: 13, anchor: 'end' },
      { x: E.x,    y: -0.055, text: 'Qₑ', tone: 'slate', bold: true, italic: true, fontSize: 13, anchor: 'middle' }
    ],

    viewDefaultsHidden: true,
    views: [
      /* ─── idl-1: floor imposed ─── */
      {
        key: 'floor',
        contentLayer: 'idl-1',
        arrows: [
          { x1: 0, y1: Pmin, x2: 0.609, y2: Pmin, tone: 'green', strokeWidth: 2.4, dashed: '6 4', buffer: 0 },
          { x1: Qd, y1: Pmin, x2: Qd, y2: 0, tone: 'slate', strokeWidth: 1.4, dashed: '5 3', buffer: 0 },
          { x1: Qs, y1: Pmin, x2: Qs, y2: 0, tone: 'slate', strokeWidth: 1.4, dashed: '5 3', buffer: 0 },
          // Excess supply bracket between Qd and Qs near top of chart
          { x1: Qd, y1: 0.880, x2: Qs, y2: 0.880, tone: 'green', strokeWidth: 1.8, buffer: 0 }
        ],
        points: [
          { x: Qd, y: Pmin, tone: 'slate', radius: 4 },
          { x: Qs, y: Pmin, tone: 'slate', radius: 4 }
        ],
        texts: [
          { x: 0.305, y: Pmin + 0.025, text: 'Price floor', tone: 'green', bold: true, fontSize: 12, anchor: 'middle' },
          { x: -0.020, y: Pmin, text: 'Pₘᵢₙ', tone: 'slate', bold: true, italic: true, fontSize: 13, anchor: 'end' },
          { x: Qd, y: -0.055, text: 'Qd', tone: 'slate', bold: true, italic: true, fontSize: 12, anchor: 'middle' },
          { x: Qs, y: -0.055, text: 'Qs', tone: 'slate', bold: true, italic: true, fontSize: 12, anchor: 'middle' },
          { x: (Qd + Qs) / 2, y: 0.905, text: 'Excess supply', tone: 'green', bold: true, anchor: 'middle' }
        ]
      },

      /* ─── idl-2: surplus regions ─── */
      {
        key: 'surplus-regions',
        contentLayer: 'idl-2',
        polygons: [
          // CS triangle (reduced): (0, 0.960), (0, Pmin), (Qd, Pmin)
          { points: [[0, 0.960], [0, Pmin], [Qd, Pmin]], fill: '#DBEAFE', opacity: 0.85 },
          // PS quadrilateral: (0, Pmin), (Qd, Pmin), (Qd, 0.385), (0, 0.040)
          // Approximation matching legacy: (100,160)(228,160)(228,240)(100,360)
          // → (0, Pmin), (Qd, Pmin), (Qd, 0.385), (0, 0.040)
          { points: [[0, Pmin], [Qd, Pmin], [Qd, 0.385], [0, 0.040]], fill: '#FEF3C7', opacity: 0.85 }
        ],
        texts: [
          { x: 0.140, y: 0.815, text: 'Consumer', tone: 'blue',  bold: true, fontSize: 12, anchor: 'middle' },
          { x: 0.140, y: 0.773, text: 'surplus',  tone: 'blue',  bold: true, fontSize: 12, anchor: 'middle' },
          { x: 0.140, y: 0.275, text: 'Producer', tone: 'amber', bold: true, fontSize: 12, anchor: 'middle' },
          { x: 0.140, y: 0.233, text: 'surplus',  tone: 'amber', bold: true, fontSize: 12, anchor: 'middle' }
        ]
      },

      /* ─── idl-3: DWL ─── */
      {
        key: 'dwl',
        contentLayer: 'idl-3',
        polygons: [
          // DWL triangle: (Qd, Pmin), (Qd, 0.385), (E.x, E.y)
          { points: [[Qd, Pmin], [Qd, 0.385], [E.x, E.y]], fill: '#FECACA', opacity: 0.9 }
        ],
        arrows: [
          { x1: E.x, y1: E.y, x2: E.x + 0.110, y2: E.y, tone: 'red', strokeWidth: 1.4, buffer: 0 }
        ],
        texts: [
          { x: E.x + 0.125, y: E.y + 0.022, text: 'Deadweight', tone: 'red', bold: true, anchor: 'start' },
          { x: E.x + 0.125, y: E.y - 0.022, text: 'loss',       tone: 'red', bold: true, anchor: 'start' }
        ]
      }
    ]
  };
})();
