/* ============================================================
   Market Equilibrium Basic diagram — engine spec for equilibriumBasic.
   Used by price-determination card 1 (Market equilibrium: the big
   picture). Static diagram: D + S + equilibrium E with Pₑ/Qₑ ticks.

   Chart-space positions:
     D line     (0.100, 0.886) → (0.943, 0.091)
     S line     (0.100, 0.091) → (0.943, 0.886)
     E          (0.520, 0.491)
   ============================================================ */
(function () {
  'use strict';

  var E = { x: 0.520, y: 0.491 };

  window.ECONOS_EQUILIBRIUM_BASIC_SPEC = {
    width: 460,
    height: 320,
    chartArea: { x: 60, y: 50, width: 350, height: 220 },
    className: 'equilibrium-basic-svg',
    axes: {
      x: { label: 'Quantity' },
      y: { label: 'Price' }
    },

    curves: [
      { d: 'M 0.100,0.886 L 0.943,0.091',
        tone: 'blue',  label: 'D', strokeWidth: 3, labelDx: 8, labelDy: 4 },
      { d: 'M 0.100,0.091 L 0.943,0.886',
        tone: 'amber', label: 'S', strokeWidth: 3, labelDx: 8, labelDy: -4 }
    ],

    arrows: [
      { x1: 0, y1: E.y, x2: E.x, y2: E.y,
        tone: 'slate', strokeWidth: 1.4, dashed: '5 4', buffer: 0 },
      { x1: E.x, y1: E.y, x2: E.x, y2: 0,
        tone: 'slate', strokeWidth: 1.4, dashed: '5 4', buffer: 0 }
    ],

    points: [
      { x: E.x, y: E.y, tone: 'slate', radius: 6.5, label: 'E',
        labelDx: 12, labelDy: -10, anchor: 'start' }
    ],

    texts: [
      { x: -0.020, y: E.y,    text: 'Pₑ', tone: 'slate', bold: true, italic: true, fontSize: 13, anchor: 'end' },
      { x: E.x,    y: -0.075, text: 'Qₑ', tone: 'slate', bold: true, italic: true, fontSize: 13, anchor: 'middle' }
    ]
  };
})();
