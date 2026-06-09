/* ============================================================
   Subsidy (open economy) Diagram – engine spec for
   subsidyTradeInteractive. Restrictions on Free Trade 4.1.6 card 5.

   A production subsidy lowers domestic producers' costs, shifting the
   domestic supply curve right (S₁ → S₂). Output rises and the price
   that clears the domestic market falls, displacing imports. Geometry
   reuses the verified shift from the CPS subsidy spec:
     S₁: y = 0.04 + 0.94176 x   D: y = 0.96 - 0.94176 x
     E₁ = (0.489, 0.500)
     S₂: 'M 0.141,0 L 0.977,0.787'   E₂ = (0.580, 0.414)

   3 progressive-reveal views:
     V0 Before the subsidy  – base D + S₁ + E₁
     V1 Supply shifts right → idl-1 (S₂ + new equilibrium)
     V2 Output up, price down→ idl-1 + idl-2 (change arrows + note)
   ============================================================ */
(function () {
  'use strict';

  var E1 = { x: 0.489, y: 0.500 };
  var E2 = { x: 0.580, y: 0.414 };

  window.ECONOS_SUBSIDY_TRADE_SPEC = {
    width: 440,
    height: 360,
    chartArea: { x: 58, y: 46, width: 330, height: 264 },
    className: 'subsidy-trade-svg',
    background: '#FFFFFF',
    axes: { x: { label: 'Quantity' }, y: { label: 'Price' } },

    curves: [
      { d: 'M 0,0.960 L 0.977,0.040', tone: 'blue',  label: 'D',  strokeWidth: 2.8, labelDx: 8, labelDy: 6 },
      { d: 'M 0,0.040 L 0.977,0.960', tone: 'purple', label: 'S₁', strokeWidth: 2.8, labelDx: 8, labelDy: -4 }
    ],
    arrows: [
      { x1: 0, y1: E1.y, x2: E1.x, y2: E1.y, tone: 'slate', strokeWidth: 1.2, dashed: '4 3', buffer: 0 },
      { x1: E1.x, y1: E1.y, x2: E1.x, y2: 0, tone: 'slate', strokeWidth: 1.2, dashed: '4 3', buffer: 0 }
    ],
    points: [
      { x: E1.x, y: E1.y, tone: 'slate', radius: 5.5 }
    ],
    texts: [
      { x: -0.02, y: E1.y, text: 'P₁', tone: 'slate', bold: true, italic: true, fontSize: 13, anchor: 'end' },
      { x: E1.x, y: -0.055, text: 'Q₁', tone: 'slate', bold: true, italic: true, fontSize: 12, anchor: 'middle' }
    ],

    viewDefaultsHidden: true,
    views: [
      /* ─── idl-1: subsidy shifts supply right ─── */
      {
        key: 'shift',
        contentLayer: 'idl-1',
        curves: [
          { d: 'M 0.141,0 L 0.977,0.787', tone: 'green', strokeWidth: 2.4, dashed: '6 4' }
        ],
        arrows: [
          { x1: 0, y1: E2.y, x2: E2.x, y2: E2.y, tone: 'slate', strokeWidth: 1.2, dashed: '4 3', buffer: 0 },
          { x1: E2.x, y1: E2.y, x2: E2.x, y2: 0, tone: 'slate', strokeWidth: 1.2, dashed: '4 3', buffer: 0 }
        ],
        points: [
          { x: E2.x, y: E2.y, tone: 'green', radius: 5.5 }
        ],
        texts: [
          { x: 0.760, y: 0.690, text: 'S₂', tone: 'green', bold: true, fontSize: 13, anchor: 'start' },
          { x: -0.02, y: E2.y, text: 'P₂', tone: 'green', bold: true, italic: true, fontSize: 13, anchor: 'end' },
          { x: E2.x, y: -0.055, text: 'Q₂', tone: 'green', bold: true, italic: true, fontSize: 12, anchor: 'middle' }
        ]
      },

      /* ─── idl-2: output up, price down, imports displaced ─── */
      {
        key: 'effects',
        contentLayer: 'idl-2',
        arrows: [
          { x1: E1.x, y1: -0.10, x2: E2.x, y2: -0.10, tone: 'green', strokeWidth: 1.6, buffer: 0 },
          { x1: -0.10, y1: E1.y, x2: -0.10, y2: E2.y, tone: 'rose', strokeWidth: 1.6, buffer: 0 }
        ],
        texts: [
          { x: (E1.x + E2.x) / 2, y: -0.155, text: 'Output rises', tone: 'green', bold: true, fontSize: 10.5, anchor: 'middle' },
          { x: 0.30, y: 0.86, text: 'Domestic output up → imports displaced', tone: 'slate', bold: true, fontSize: 10, anchor: 'middle' }
        ]
      }
    ]
  };
})();
