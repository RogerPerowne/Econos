/* ============================================================
   Models worked example — supply & demand equilibrium.
   Used by topic 1.1.1 (Economics as a Social Science), card 1
   "Thinking like an economist": the canonical model an economist
   builds. Demand slopes down, supply slopes up, equilibrium at
   (Q*, P*) labelled "Equilibrium".
   ============================================================ */
(function () {
  'use strict';

  var E = { x: 0.500, y: 0.500 };

  window.ECONOS_MODELS_SD_SPEC = {
    width: 440,
    height: 320,
    chartArea: { x: 58, y: 46, width: 330, height: 220 },
    className: 'models-sd-svg',
    axes: {
      x: { label: 'Quantity' },
      y: { label: 'Price (£)' }
    },

    curves: [
      { d: 'M 0.080,0.900 L 0.920,0.110',
        tone: 'blue',  label: 'Demand', strokeWidth: 3, labelDx: 6, labelDy: 4 },
      { d: 'M 0.080,0.110 L 0.920,0.900',
        tone: 'amber', label: 'Supply', strokeWidth: 3, labelDx: 6, labelDy: -4 }
    ],

    arrows: [
      { x1: 0, y1: E.y, x2: E.x, y2: E.y, tone: 'slate', strokeWidth: 1.4, dashed: '5 4', buffer: 0 },
      { x1: E.x, y1: E.y, x2: E.x, y2: 0, tone: 'slate', strokeWidth: 1.4, dashed: '5 4', buffer: 0 }
    ],

    points: [
      { x: E.x, y: E.y, tone: 'slate', radius: 6.5, label: 'Equilibrium', labelDx: 14, labelDy: -8, anchor: 'start' }
    ],

    texts: [
      { x: -0.020, y: E.y,    text: 'P*', tone: 'slate', bold: true, fontSize: 13, anchor: 'end' },
      { x: E.x,    y: -0.075, text: 'Q*', tone: 'slate', bold: true, fontSize: 13, anchor: 'middle' }
    ]
  };
})();
