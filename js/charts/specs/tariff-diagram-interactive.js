/* ============================================================
   Tariff Diagram Interactive – engine spec for tariffDiagramInteractive.
   Restrictions on Free Trade 4.1.6 card 3 (Tariffs).

   Standard small-open-economy tariff welfare diagram. Domestic D and S;
   a horizontal world price Pw (below the no-trade equilibrium) and a
   higher tariff price Pt = Pw + tariff. Geometry is computed from the
   straight-line equations so every dot sits exactly on its curve:
     D: y = 0.96 - 0.94176 x      S: y = 0.04 + 0.94176 x
     x_S(y) = (y-0.04)/0.94176    x_D(y) = (0.96-y)/0.94176
     Pw = 0.30 → Q1 = 0.2761 (S), Q4 = 0.7008 (D)
     Pt = 0.46 → Q2 = 0.4460 (S), Q3 = 0.5310 (D)

   4 progressive-reveal views:
     V0 Free trade        – base D + S + Pw + free-trade output/demand
     V1 Impose the tariff → idl-1 (Pt + Q2/Q3, imports shrink)
     V2 Tariff revenue    → idl-1 + idl-2 (green revenue rectangle)
     V3 Welfare loss      → idl-1 + idl-2 + idl-3 (two red DWL triangles)

   Chart geometry standardised on the modelsSupplyDemand recipe
   (440×360, chartArea 330×264).
   ============================================================ */
(function () {
  'use strict';

  var Pw = 0.30, Pt = 0.46;
  var Q1 = 0.2761, Q4 = 0.7008;   // free-trade domestic output / demand
  var Q2 = 0.4460, Q3 = 0.5310;   // tariff domestic output / demand

  window.ECONOS_TARIFF_DIAGRAM_SPEC = {
    width: 440,
    height: 360,
    chartArea: { x: 58, y: 46, width: 330, height: 264 },
    className: 'tariff-diagram-svg',
    background: '#FFFFFF',
    axes: { x: { label: 'Quantity' }, y: { label: 'Price' } },

    /* Always-visible base: D, S, the world price line and free-trade points */
    curves: [
      { d: 'M 0,0.960 L 0.977,0.040', tone: 'blue',  label: 'D', strokeWidth: 2.8, labelDx: 8, labelDy: 6 },
      { d: 'M 0,0.040 L 0.977,0.960', tone: 'purple', label: 'S', strokeWidth: 2.8, labelDx: 8, labelDy: -4 },
      { d: 'M 0,' + Pw + ' L 0.760,' + Pw, tone: 'slate', strokeWidth: 2, dashed: '6 4' }
    ],
    arrows: [
      { x1: Q1, y1: Pw, x2: Q1, y2: 0, tone: 'slate', strokeWidth: 1.2, dashed: '4 3', buffer: 0 },
      { x1: Q4, y1: Pw, x2: Q4, y2: 0, tone: 'slate', strokeWidth: 1.2, dashed: '4 3', buffer: 0 }
    ],
    points: [
      { x: Q1, y: Pw, tone: 'purple', radius: 5 },
      { x: Q4, y: Pw, tone: 'blue', radius: 5 }
    ],
    texts: [
      { x: -0.02, y: Pw, text: 'Pw', tone: 'slate', bold: true, italic: true, fontSize: 13, anchor: 'end' },
      { x: Q1, y: -0.055, text: 'Q₁', tone: 'purple', bold: true, italic: true, fontSize: 12, anchor: 'middle' },
      { x: Q4, y: -0.055, text: 'Q₄', tone: 'blue', bold: true, italic: true, fontSize: 12, anchor: 'middle' }
    ],

    viewDefaultsHidden: true,
    views: [
      /* ─── idl-1: add the tariff ─── */
      {
        key: 'tariff',
        contentLayer: 'idl-1',
        curves: [
          { d: 'M 0,' + Pt + ' L 0.600,' + Pt, tone: 'rose', strokeWidth: 2, dashed: '6 4' }
        ],
        arrows: [
          { x1: Q2, y1: Pt, x2: Q2, y2: 0, tone: 'slate', strokeWidth: 1.2, dashed: '4 3', buffer: 0 },
          { x1: Q3, y1: Pt, x2: Q3, y2: 0, tone: 'slate', strokeWidth: 1.2, dashed: '4 3', buffer: 0 }
        ],
        points: [
          { x: Q2, y: Pt, tone: 'purple', radius: 5 },
          { x: Q3, y: Pt, tone: 'blue', radius: 5 }
        ],
        texts: [
          { x: -0.02, y: Pt, text: 'Pt', tone: 'rose', bold: true, italic: true, fontSize: 13, anchor: 'end' },
          { x: Q2, y: -0.115, text: 'Q₂', tone: 'purple', bold: true, italic: true, fontSize: 12, anchor: 'middle' },
          { x: Q3, y: -0.115, text: 'Q₃', tone: 'blue', bold: true, italic: true, fontSize: 12, anchor: 'middle' }
        ]
      },

      /* ─── idl-2: tariff revenue rectangle ─── */
      {
        key: 'revenue',
        contentLayer: 'idl-2',
        polygons: [
          { points: [[Q2, Pw], [Q2, Pt], [Q3, Pt], [Q3, Pw]], fill: '#D1FAE5', opacity: 0.92 }
        ],
        texts: [
          { x: (Q2 + Q3) / 2, y: (Pw + Pt) / 2, text: 'Tariff revenue', tone: 'green', bold: true, fontSize: 10.5, anchor: 'middle' }
        ]
      },

      /* ─── idl-3: deadweight welfare-loss triangles ─── */
      {
        key: 'welfare-loss',
        contentLayer: 'idl-3',
        polygons: [
          { points: [[Q1, Pw], [Q2, Pw], [Q2, Pt]], fill: '#FECACA', opacity: 0.9 },
          { points: [[Q3, Pt], [Q3, Pw], [Q4, Pw]], fill: '#FECACA', opacity: 0.9 }
        ],
        texts: [
          { x: Q4 + 0.02, y: Pt + 0.07, text: 'Welfare loss', tone: 'red', bold: true, fontSize: 11, anchor: 'start' }
        ]
      }
    ]
  };
})();
