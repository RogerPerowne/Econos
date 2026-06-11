/* ============================================================
   Crowding Out – engine spec for crowdingOutInteractive.
   Government Spending topic – loanable funds market.

   Three-layer reveal of the crowding-out mechanism:
     base       → S, D₁, E₁ at (Q₁, R₁)
     view 1     → D₁ redrawn dashed + new D₂ to the right + rate
                  rises to R₂; E₂ at (Q₂, R₂)
     view 2     → Qₚ marker shows where private investment lands
                  on D₁ at the new R₂. Crowded-out shaded band
                  between Qₚ and Q₁ – the private investment
                  displaced by the government's borrowing.

   `inverseLayers: ['idl-old-solid']` swaps D₁ solid for dashed
   when any view becomes active.

   Pedagogical note: the SIZE of crowding-out is the Classical
   vs Keynesian fault line – Classical economists say it's
   strong (close to 100%), Keynesians say it's weak in recession
   (idle resources mean no upward pressure on r). The diagram
   shows the mechanism; the magnitude debate lives in the card text.
   ============================================================ */
(function () {
  'use strict';

  // Geometry matches the original hand-rolled chart so visual
  // continuity is preserved when the spec replaces the SVG string.
  var E1 = { x: 0.503, y: 0.476 };
  var E2 = { x: 0.573, y: 0.545 };
  var Qp = { x: 0.433, y: 0.545 };   // on D₁ at the new R₂

  window.ECONOS_CROWDING_OUT_SPEC = {
    width: 440,
    height: 300,
    chartArea: { x: 55, y: 26, width: 358, height: 246 },
    className: 'crowding-out-svg',
    layers: ['idl-1', 'idl-2'],
    inverseLayers: ['idl-old-solid'],
    axes: {
      x: { label: 'Loanable funds (Q)' },
      y: { label: 'Real interest rate (r)' }
    },

    curves: [
      // Supply of loanable funds – always visible
      { d: 'M 0.070,0.045 L 0.935,0.902',
        tone: 'blue', label: 'S', strokeWidth: 2.5,
        labelDx: 6, labelDy: 4, anchor: 'start' },
      // Base D₁ solid – hidden once any view becomes active
      { d: 'M 0.070,0.902 L 0.935,0.045',
        tone: 'green', label: 'D₁', strokeWidth: 2.5,
        labelDx: 6, labelDy: -4, anchor: 'start',
        layer: 'idl-old-solid' },
      // Layer 1: D₁ redrawn dashed
      { d: 'M 0.070,0.902 L 0.935,0.045',
        tone: 'green', label: 'D₁', strokeWidth: 1.6,
        dashed: '6 4', labelDx: 6, labelDy: -4, anchor: 'start',
        layer: 'idl-1' },
      // Layer 1: D₂ shifted right (government borrowing on top of private)
      // — same demand-for-funds line, same colour.
      { d: 'M 0.196,0.902 L 0.978,0.142',
        tone: 'green', label: 'D₂', strokeWidth: 2.5,
        labelDx: 6, labelDy: -4, anchor: 'start',
        layer: 'idl-1' }
    ],

    points: [
      // Base E₁
      { x: E1.x, y: E1.y, tone: 'green', radius: 5.5, hollow: true,
        gridlines: 'slate', ticks: { x: 'Q₁', y: 'R₁' },
        label: 'E₁', labelDx: -10, labelDy: -4, anchor: 'end' },
      // Layer 1: E₂
      { x: E2.x, y: E2.y, tone: 'amber', radius: 5.5, hollow: true,
        gridlines: 'amber', ticks: { x: 'Q₂', y: 'R₂' },
        label: 'E₂', labelDx: 10, labelDy: -4, anchor: 'start',
        layer: 'idl-1' },
      // Layer 2: Qₚ on D₁ at the new R₂
      { x: Qp.x, y: Qp.y, tone: 'purple', radius: 5.5, hollow: true,
        ticks: { x: 'Qₚ' },
        layer: 'idl-2' }
    ],

    arrows: [
      // Layer 1: rightward D-shift arrow (built-in marker)
      { x1: 0.434, y1: 0.293, x2: 0.560, y2: 0.293,
        tone: 'green', strokeWidth: 1.8,
        markerEnd: 'econos-arrow-green', buffer: 0, layer: 'idl-1' }
    ],

    // Layer 2: crowded-out band between Qₚ and Q₁ – visual cue that
    // private investment fell by Q₁ − Qₚ when r rose.
    boxedLabels: [
      { x: Qp.x, y: 0.030, w: E1.x - Qp.x, h: 0.040,
        tone: 'purple', lines: [],
        layer: 'idl-2' }
    ]
  };
})();
