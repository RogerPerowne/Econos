/* ============================================================
   Subsidy Diagram Interactive — engine spec for
   subsidyDiagramInteractive. CPS topic card 4.

   4 progressive-reveal views via the legacy interactiveDiagram
   layer system (idl-1 / idl-2 / idl-3 stack cumulatively):
     V0 Free market         — base D + S + E only
     V1 Subsidy shifts S    → idl-1 (S–subsidy + Pb, Ps, Qs gridlines)
     V2 Surplus & gov cost  → idl-1 + idl-2 (CS / PS / Govt rect)
     V3 Deadweight loss     → idl-1 + idl-2 + idl-3 (DWL triangle)

   Chart geometry standardised on the 1.1.1 modelsSupplyDemand
   recipe (440×360, chartArea 330×264) so every interactive market
   diagram across the site shares one staging size.
   ============================================================ */
(function () {
  'use strict';

  var E  = { x: 0.489, y: 0.500 };
  var Eq = { x: 0.580, y: 0.414, ps: 0.586 };  // new equilibrium

  window.ECONOS_SUBSIDY_DIAGRAM_SPEC = {
    width: 440,
    height: 360,
    chartArea: { x: 58, y: 46, width: 330, height: 264 },
    className: 'subsidy-diagram-svg',
    background: '#FFFFFF',
    axes: {
      x: { label: 'Quantity' },
      y: { label: 'Price' }
    },

    /* Always-visible base layer: D, S, E */
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
      /* ─── idl-1: subsidy shifts S down → new equilibrium ─── */
      {
        key: 'subsidy-shift',
        contentLayer: 'idl-1',
        curves: [
          { d: 'M 0.141,0 L 0.977,0.787', tone: 'amber', strokeWidth: 2.4, dashed: '6 4' }
        ],
        arrows: [
          { x1: 0, y1: Eq.y, x2: Eq.x, y2: Eq.y, tone: 'slate', strokeWidth: 1.4, dashed: '5 3', buffer: 0 },
          { x1: 0, y1: Eq.ps, x2: Eq.x, y2: Eq.ps, tone: 'slate', strokeWidth: 1.4, dashed: '5 3', buffer: 0 },
          { x1: Eq.x, y1: Eq.ps, x2: Eq.x, y2: 0, tone: 'slate', strokeWidth: 1.4, dashed: '5 3', buffer: 0 }
        ],
        points: [
          { x: Eq.x, y: Eq.y, tone: 'slate', radius: 5.5 }
        ],
        texts: [
          { x: 0.690, y: 0.557, text: 'S – subsidy', tone: 'amber', bold: true, fontSize: 12, anchor: 'start' },
          { x: -0.020, y: Eq.y,  text: 'Pᶜ', tone: 'slate', bold: true, italic: true, fontSize: 13, anchor: 'end' },
          { x: -0.020, y: Eq.ps, text: 'Pₛ', tone: 'slate', bold: true, italic: true, fontSize: 13, anchor: 'end' },
          { x: Eq.x,   y: -0.055, text: 'Qₛ', tone: 'slate', bold: true, italic: true, fontSize: 13, anchor: 'middle' }
        ]
      },

      /* ─── idl-2: CS + PS triangles + Govt spending rectangle ─── */
      {
        key: 'surplus-and-govt',
        contentLayer: 'idl-2',
        polygons: [
          { points: [[0, 0.960], [0, Eq.y], [Eq.x, Eq.y]], fill: '#DBEAFE', opacity: 0.85 },
          { points: [[0, 0.040], [0, Eq.ps], [Eq.x, Eq.ps]], fill: '#FEF3C7', opacity: 0.85 },
          { points: [[0, Eq.y], [0, Eq.ps], [Eq.x, Eq.ps], [Eq.x, Eq.y]], fill: '#D1FAE5', opacity: 0.9 }
        ],
        texts: [
          { x: 0.165, y: 0.670, text: 'Consumer surplus', tone: 'blue',  bold: true, fontSize: 12, anchor: 'middle' },
          { x: 0.290, y: 0.500, text: 'Government spending', tone: 'green', bold: true, fontSize: 12, anchor: 'middle' },
          { x: 0.165, y: 0.230, text: 'Producer surplus', tone: 'amber', bold: true, fontSize: 12, anchor: 'middle' }
        ]
      },

      /* ─── idl-3: deadweight loss triangle ─── */
      {
        key: 'deadweight-loss',
        contentLayer: 'idl-3',
        polygons: [
          { points: [[E.x, E.y], [Eq.x, Eq.ps], [Eq.x, Eq.y]], fill: '#FECACA', opacity: 0.9 }
        ],
        arrows: [
          { x1: Eq.x, y1: E.y, x2: Eq.x + 0.110, y2: E.y, tone: 'red', strokeWidth: 1.4, buffer: 0 }
        ],
        texts: [
          { x: Eq.x + 0.130, y: E.y, text: 'Deadweight loss', tone: 'red', bold: true, anchor: 'start' }
        ]
      }
    ]
  };
})();
