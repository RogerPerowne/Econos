/* ============================================================
   Kuznets Curve – engine spec for kuznetsCurve.
   Causes of Inequality 4.2.2 card 5 "Economic change and development".

   The inverted-U Kuznets hypothesis: as an economy develops (income per
   head rises, left→right), inequality first rises through early
   structural change and industrial take-off, then flattens or falls in a
   mature, redistributing economy. A useful model, not a law.
   ============================================================ */
(function () {
  'use strict';

  window.ECONOS_KUZNETS_CURVE_SPEC = {
    width: 560,
    height: 360,
    chartArea: { x: 70, y: 30, width: 430, height: 286 },
    className: 'kuznets-curve-svg',
    axes: {
      x: { label: 'Development / income per head' },
      y: { label: 'Inequality' }
    },
    curves: [
      { d: 'M 0.04,0.30 C 0.24,0.34 0.36,0.84 0.52,0.85 C 0.70,0.86 0.80,0.52 0.96,0.40', tone: 'purple', strokeWidth: 3 }
    ],
    points: [
      { x: 0.295, y: 0.586, tone: 'green', radius: 5 },
      { x: 0.52,  y: 0.85,  tone: 'rose',  radius: 5 },
      { x: 0.748, y: 0.674, tone: 'blue',  radius: 5 }
    ],
    texts: [
      { x: 0.235, y: 0.40, text: 'Inequality', tone: 'green', bold: true, fontSize: 11, anchor: 'middle' },
      { x: 0.235, y: 0.33, text: 'rises', tone: 'green', bold: true, fontSize: 11, anchor: 'middle' },
      { x: 0.52,  y: 0.97, text: 'Take-off peak', tone: 'rose', bold: true, fontSize: 11, anchor: 'middle' },
      { x: 0.80,  y: 0.52, text: 'May flatten', tone: 'blue', bold: true, fontSize: 11, anchor: 'middle' },
      { x: 0.80,  y: 0.45, text: 'or fall', tone: 'blue', bold: true, fontSize: 11, anchor: 'middle' },
      { x: 0.10,  y: 0.92, text: 'A model, not a law', tone: 'slate', italic: true, fontSize: 10.5, anchor: 'start' }
    ]
  };
})();
