/* ============================================================
   Price Rationing under Scarcity — engine spec for priceRationingScarcity.
   The-price-mechanism topic — card on rationing.

   Standard supply-demand chart showing a shortage when price is
   held BELOW the equilibrium (the "tickets" scenario from the
   card). At the controlled price P_c:
     • quantity supplied Qs (on S)
     • quantity demanded Qd (on D) — much higher
     • shortage = Qd − Qs (horizontal gap)

   The card's lesson: when supply is fixed and demand exceeds it,
   rising prices ration the scarce stock to those willing/able to
   pay. The chart highlights the gap that must be cleared.
   ============================================================ */
(function () {
  'use strict';

  var Pe = 0.500;            // equilibrium price (where S = D)
  var Pc = 0.300;            // controlled / starting low price
  var Qs = 0.260;            // quantity supplied at Pc (on S)
  var Qd = 0.760;            // quantity demanded at Pc (on D)
  var Qe = 0.510;            // equilibrium quantity

  window.ECONOS_PRICE_RATIONING_SCARCITY_SPEC = {
    width: 480,
    height: 320,
    chartArea: { x: 55, y: 28, width: 380, height: 254 },
    className: 'price-rationing-scarcity-svg',
    axes: {
      x: { label: 'Quantity (Q)' },
      y: { label: 'Price (P)' }
    },

    curves: [
      /* D — downward sloping (high willingness to pay → low quantity) */
      { d: 'M 0.069,0.900 L 0.972,0.100',
        tone: 'blue', label: 'D', strokeWidth: 2.5,
        labelDx: -6, labelDy: 14, anchor: 'end' },
      /* S — upward sloping */
      { d: 'M 0.069,0.100 L 0.972,0.900',
        tone: 'amber', label: 'S', strokeWidth: 2.5,
        labelDx: -6, labelDy: -6, anchor: 'end' }
    ],

    points: [
      /* Equilibrium for reference */
      { x: Qe, y: Pe, tone: 'slate', radius: 5, hollow: true,
        gridlines: 'slate', ticks: { x: 'Q_e', y: 'P_e' },
        label: 'E', labelDx: 10, labelDy: -4, anchor: 'start' },
      /* Qs on supply at the controlled price */
      { x: Qs, y: Pc, tone: 'amber', radius: 5,
        ticks: { x: 'Q_s' } },
      /* Qd on demand at the controlled price */
      { x: Qd, y: Pc, tone: 'blue', radius: 5,
        ticks: { x: 'Q_d' } }
    ],

    arrows: [
      /* Horizontal "shortage" bracket between Qs and Qd at the controlled price */
      { x1: Qs, y1: Pc, x2: Qd, y2: Pc,
        tone: 'red', strokeWidth: 1.8,
        markerStart: 'econos-arrow-red',
        markerEnd: 'econos-arrow-red',
        buffer: 0 },
      /* Horizontal controlled-price line from y-axis to D */
      { x1: 0, y1: Pc, x2: Qd, y2: Pc,
        tone: 'slate', strokeWidth: 1, dashed: '4 3', buffer: 0 }
    ],

    texts: [
      /* P_c label on the y-axis */
      { x: -0.020, y: Pc, text: 'P_c', tone: 'slate', bold: true,
        anchor: 'end' },
      /* "Shortage" caption above the gap arrow */
      { x: (Qs + Qd) / 2, y: Pc + 0.055, text: 'Shortage',
        tone: 'red', bold: true, italic: true,
        anchor: 'middle' },
      /* Subtle hint that the price must RISE to clear it */
      { x: 0.040, y: 0.430, text: '⬆ price rises',
        tone: 'red', bold: true }
    ]
  };
})();
