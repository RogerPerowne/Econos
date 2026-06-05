/* ============================================================
   Price Ceiling Diagram Interactive – engine spec for
   priceCeilingDiagramInteractive. Govt intervention topic.

   Maximum price set BELOW Pₑ. At Pmax: quantity supplied (Qs) falls
   short of quantity demanded (Qd) → shortage.

   3 progressive-reveal views:
     V0 Free market    – base D + S + E only
     V1 Ceiling Pmax   → idl-1 (Pmax line + Qs/Qd ticks + shortage bracket)
     V2 Reduced CS+PS  → idl-1 + idl-2 (CS quad above Pmax, PS triangle)
     V3 DWL            → idl-1 + idl-2 + idl-3 (DWL triangle)

   Chart geometry standardised on the 1.1.1 modelsSupplyDemand
   recipe (440×360, chartArea 330×264).
   ============================================================ */
(function () {
  'use strict';

  var E    = { x: 0.489, y: 0.500 };
  var Pmax = 0.385;
  var Qs   = 0.368;
  var Qd   = 0.609;

  window.ECONOS_PRICE_CEILING_SPEC = {
    width: 440,
    height: 360,
    chartArea: { x: 58, y: 46, width: 330, height: 264 },
    className: 'price-ceiling-svg',
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
      /* ─── idl-1: ceiling imposed ─── */
      {
        key: 'ceiling',
        contentLayer: 'idl-1',
        arrows: [
          { x1: 0, y1: Pmax, x2: 0.609, y2: Pmax, tone: 'purple', strokeWidth: 2.4, dashed: '6 4', buffer: 0 },
          { x1: Qs, y1: Pmax, x2: Qs, y2: 0, tone: 'slate', strokeWidth: 1.4, dashed: '5 3', buffer: 0 },
          { x1: Qd, y1: Pmax, x2: Qd, y2: 0, tone: 'slate', strokeWidth: 1.4, dashed: '5 3', buffer: 0 },
          { x1: Qs, y1: 0.140, x2: Qd, y2: 0.140, tone: 'red', strokeWidth: 1.8, buffer: 0 }
        ],
        points: [
          { x: Qs, y: Pmax, tone: 'slate', radius: 4 },
          { x: Qd, y: Pmax, tone: 'slate', radius: 4 }
        ],
        texts: [
          { x: 0.305, y: Pmax + 0.030, text: 'Price ceiling', tone: 'purple', bold: true, fontSize: 12, anchor: 'middle' },
          { x: -0.020, y: Pmax, text: 'Pₘₐₓ', tone: 'slate', bold: true, italic: true, fontSize: 13, anchor: 'end' },
          { x: Qs, y: -0.055, text: 'Qs', tone: 'slate', bold: true, italic: true, fontSize: 12, anchor: 'middle' },
          { x: Qd, y: -0.055, text: 'Qd', tone: 'slate', bold: true, italic: true, fontSize: 12, anchor: 'middle' },
          { x: (Qs + Qd) / 2, y: 0.180, text: 'Shortage', tone: 'red', bold: true, fontSize: 12, anchor: 'middle' }
        ]
      },

      /* ─── idl-2: reduced surplus regions ─── */
      {
        key: 'surplus-regions',
        contentLayer: 'idl-2',
        polygons: [
          { points: [[0, 0.960], [Qs, 0.615], [Qs, Pmax], [0, Pmax]], fill: '#DBEAFE', opacity: 0.85 },
          { points: [[0, Pmax], [Qs, Pmax], [0, 0.040]], fill: '#FEF3C7', opacity: 0.85 }
        ],
        texts: [
          { x: 0.140, y: 0.715, text: 'Consumer surplus', tone: 'blue',  bold: true, fontSize: 12, anchor: 'middle' },
          { x: 0.115, y: 0.200, text: 'Producer surplus',  tone: 'amber', bold: true, fontSize: 12, anchor: 'middle' }
        ]
      },

      /* ─── idl-3: DWL ─── */
      {
        key: 'dwl',
        contentLayer: 'idl-3',
        polygons: [
          { points: [[Qs, 0.615], [Qs, Pmax], [E.x, E.y]], fill: '#FECACA', opacity: 0.9 }
        ],
        arrows: [
          { x1: E.x, y1: E.y, x2: E.x + 0.110, y2: E.y, tone: 'red', strokeWidth: 1.4, buffer: 0 }
        ],
        texts: [
          { x: E.x + 0.125, y: E.y, text: 'Deadweight loss', tone: 'red', bold: true, anchor: 'start' }
        ]
      }
    ]
  };
})();
