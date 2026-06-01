/* ============================================================
   Subsidy Diagram Interactive — engine spec for
   subsidyDiagramInteractive. CPS topic card 4.

   4 progressive-reveal views via the legacy interactiveDiagram
   layer system (idl-1 / idl-2 / idl-3 stack cumulatively):
     V0 Free market         — base D + S + E only
     V1 Subsidy shifts S    → idl-1 (S–subsidy + Pb, Ps, Qs gridlines)
     V2 Surplus & gov cost  → idl-1 + idl-2 (CS / PS / Govt rect)
     V3 Deadweight loss     → idl-1 + idl-2 + idl-3 (DWL triangle)

   Chart geometry (viewBox 470×420):
     Chart area  x=100..448, y=26..374 → width 348, height 348
     D base      pixel (100, 40) → (440, 360)  → chart (0, 0.960) → (0.977, 0.040)
     S base      pixel (100, 360) → (440, 40)  → chart (0, 0.040) → (0.977, 0.960)
     E (Pe, Qe)  pixel (270, 200)              → chart (0.489, 0.500)

   Subsidy-state positions:
     S-subsidy   pixel (149, 374) → (440, 100) → chart (0.141, 0) → (0.977, 0.787)
     New eq      pixel (302, 230)              → chart (0.580, 0.414)
     Pb level    chart-y 0.414     (buyer price, below Pe)
     Ps level    chart-y 0.586     (seller price, above Pe)
     Qs level    chart-x 0.580     (new quantity)
   ============================================================ */
(function () {
  'use strict';

  var E  = { x: 0.489, y: 0.500 };
  var Eq = { x: 0.580, y: 0.414, ps: 0.586 };  // new equilibrium

  window.ECONOS_SUBSIDY_DIAGRAM_SPEC = {
    width: 470,
    height: 420,
    chartArea: { x: 100, y: 26, width: 348, height: 348 },
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
          // S - subsidy dashed line (shifted DOWN by subsidy amount)
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
          { x: -0.020, y: Eq.y,  text: 'Pᵦ', tone: 'slate', bold: true, italic: true, fontSize: 13, anchor: 'end' },
          { x: -0.020, y: Eq.ps, text: 'Pₛ', tone: 'slate', bold: true, italic: true, fontSize: 13, anchor: 'end' },
          { x: Eq.x,   y: -0.055, text: 'Qₛ', tone: 'slate', bold: true, italic: true, fontSize: 13, anchor: 'middle' },
        ]
      },

      /* ─── idl-2: CS + PS triangles + Govt spending rectangle ─── */
      {
        key: 'surplus-and-govt',
        contentLayer: 'idl-2',
        polygons: [
          // CS triangle (blue) — above Pᵦ, below D, vertex at new eq
          { points: [[0, 0.960], [0, Eq.y], [Eq.x, Eq.y]], fill: '#DBEAFE', opacity: 0.85 },
          // PS triangle (amber) — below Pₛ, above S, vertex at new eq
          { points: [[0, 0.040], [0, Eq.ps], [Eq.x, Eq.ps]], fill: '#FEF3C7', opacity: 0.85 },
          // Government spending rectangle between Pᵦ and Pₛ, from 0 to Qₛ
          { points: [[0, Eq.y], [0, Eq.ps], [Eq.x, Eq.ps], [Eq.x, Eq.y]], fill: '#D1FAE5', opacity: 0.9 }
        ],
        texts: [
          { x: 0.165, y: 0.690, text: 'Consumer', tone: 'blue', bold: true, fontSize: 12, anchor: 'middle' },
          { x: 0.165, y: 0.648, text: 'surplus',  tone: 'blue', bold: true, fontSize: 12, anchor: 'middle' },
          { x: 0.290, y: 0.515, text: 'Government', tone: 'green', bold: true, anchor: 'middle' },
          { x: 0.290, y: 0.475, text: 'spending',   tone: 'green', bold: true, anchor: 'middle' },
          { x: 0.165, y: 0.250, text: 'Producer', tone: 'amber', bold: true, fontSize: 12, anchor: 'middle' },
          { x: 0.165, y: 0.210, text: 'surplus',  tone: 'amber', bold: true, fontSize: 12, anchor: 'middle' }
        ]
      },

      /* ─── idl-3: deadweight loss triangle ─── */
      {
        key: 'deadweight-loss',
        contentLayer: 'idl-3',
        polygons: [
          // DWL triangle — vertices at E (free-mkt eq), upper-corner (Qs, Ps), lower-corner (Qs, Pb)
          { points: [[E.x, E.y], [Eq.x, Eq.ps], [Eq.x, Eq.y]], fill: '#FECACA', opacity: 0.9 }
        ],
        arrows: [
          // Callout line pointing right to the DWL label
          { x1: Eq.x, y1: E.y, x2: Eq.x + 0.110, y2: E.y, tone: 'red', strokeWidth: 1.4, buffer: 0 }
        ],
        texts: [
          { x: Eq.x + 0.130, y: E.y, text: 'Deadweight loss', tone: 'red', bold: true, anchor: 'start' }
        ]
      }
    ]
  };
})();
