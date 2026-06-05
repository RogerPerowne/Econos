/* ============================================================
   Tax Diagram Interactive – engine spec for taxDiagramInteractive.
   CPS topic card 3 (How Taxes Affect Surplus).

   Mirror of subsidy-diagram-interactive: S shifts UP by tax amount,
   buyers pay MORE (Pc above Pe), sellers receive LESS (Pp below Pe),
   output FALLS from Qe to Qt. DWL triangle sits in the gap between
   Qt and Qe.

   4 progressive-reveal views:
     V0 Free market         – base D + S + E only
     V1 Tax shifts S up     → idl-1 (S+tax + Pc, Pp, Qt gridlines)
     V2 Surplus & gov rev   → idl-1 + idl-2 (CS / PS / Govt rect)
     V3 Deadweight loss     → idl-1 + idl-2 + idl-3 (DWL triangle)

   Chart geometry standardised on the 1.1.1 modelsSupplyDemand
   recipe (440×360, chartArea 330×264).
   ============================================================ */
(function () {
  'use strict';

  var E  = { x: 0.489, y: 0.500 };
  var Tax = { x: 0.368, pc: 0.615, pp: 0.385 };

  window.ECONOS_TAX_DIAGRAM_SPEC = {
    width: 440,
    height: 360,
    chartArea: { x: 58, y: 46, width: 330, height: 264 },
    className: 'tax-diagram-svg',
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
      /* ─── idl-1: tax shifts S up → new equilibrium ─── */
      {
        key: 'tax-shift',
        contentLayer: 'idl-1',
        curves: [
          { d: 'M 0,0.270 L 0.793,1.017', tone: 'amber', strokeWidth: 2.4, dashed: '6 4' }
        ],
        arrows: [
          { x1: 0, y1: Tax.pc, x2: Tax.x, y2: Tax.pc, tone: 'slate', strokeWidth: 1.4, dashed: '5 3', buffer: 0 },
          { x1: 0, y1: Tax.pp, x2: Tax.x, y2: Tax.pp, tone: 'slate', strokeWidth: 1.4, dashed: '5 3', buffer: 0 },
          { x1: Tax.x, y1: Tax.pc, x2: Tax.x, y2: 0,  tone: 'slate', strokeWidth: 1.4, dashed: '5 3', buffer: 0 }
        ],
        points: [
          { x: Tax.x, y: Tax.pc, tone: 'slate', radius: 5.5 }
        ],
        texts: [
          { x: 0.730, y: 1.020, text: 'S + tax', tone: 'amber', bold: true, fontSize: 12, anchor: 'start' },
          { x: -0.020, y: Tax.pc, text: 'Pᶜ', tone: 'slate', bold: true, italic: true, fontSize: 13, anchor: 'end' },
          { x: -0.020, y: Tax.pp, text: 'Pᵖ', tone: 'slate', bold: true, italic: true, fontSize: 13, anchor: 'end' },
          { x: Tax.x,  y: -0.055, text: 'Qₜ', tone: 'slate', bold: true, italic: true, fontSize: 13, anchor: 'middle' }
        ]
      },

      /* ─── idl-2: CS + PS reduced + Govt tax revenue rectangle ─── */
      {
        key: 'surplus-and-govt',
        contentLayer: 'idl-2',
        polygons: [
          { points: [[0, 0.960], [0, Tax.pc], [Tax.x, Tax.pc]], fill: '#DBEAFE', opacity: 0.85 },
          { points: [[0, 0.040], [0, Tax.pp], [Tax.x, Tax.pp]], fill: '#FEF3C7', opacity: 0.85 },
          { points: [[0, Tax.pp], [0, Tax.pc], [Tax.x, Tax.pc], [Tax.x, Tax.pp]], fill: '#D1FAE5', opacity: 0.9 }
        ],
        texts: [
          { x: 0.165, y: 0.800, text: 'Consumer surplus', tone: 'blue', bold: true, fontSize: 12, anchor: 'middle' },
          { x: 0.180, y: 0.500, text: 'Tax revenue', tone: 'green', bold: true, fontSize: 12, anchor: 'middle' },
          { x: 0.165, y: 0.215, text: 'Producer surplus', tone: 'amber', bold: true, fontSize: 12, anchor: 'middle' }
        ]
      },

      /* ─── idl-3: deadweight loss triangle ─── */
      {
        key: 'deadweight-loss',
        contentLayer: 'idl-3',
        polygons: [
          { points: [[Tax.x, Tax.pc], [Tax.x, Tax.pp], [E.x, E.y]], fill: '#FECACA', opacity: 0.9 }
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
