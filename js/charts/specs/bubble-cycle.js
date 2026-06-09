/* ============================================================
   Bubble Cycle – engine spec for bubbleCycle.
   Market Failure in the Financial Sector 4.4.2 card 5
   "Speculation and market bubbles".

   An asset price over time: an early rise that accelerates into a boom
   and euphoria, a crash as sentiment flips, and an aftermath where the
   price settles at a lower level.
   ============================================================ */
(function () {
  'use strict';

  window.ECONOS_BUBBLE_CYCLE_SPEC = {
    width: 600,
    height: 330,
    chartArea: { x: 58, y: 30, width: 500, height: 256 },
    className: 'bubble-cycle-svg',
    axes: {
      x: { label: 'Time' },
      y: { label: 'Asset price' }
    },
    curves: [
      { d: 'M 0.02,0.28 C 0.22,0.34 0.36,0.86 0.52,0.86 C 0.60,0.86 0.64,0.40 0.72,0.36 C 0.82,0.34 0.90,0.40 0.98,0.40', tone: 'purple', strokeWidth: 3 }
    ],
    points: [
      { x: 0.16, y: 0.34, tone: 'green', radius: 5 },
      { x: 0.38, y: 0.66, tone: 'blue',  radius: 5 },
      { x: 0.52, y: 0.86, tone: 'amber', radius: 5.5 },
      { x: 0.68, y: 0.48, tone: 'rose',  radius: 5 },
      { x: 0.90, y: 0.40, tone: 'slate', radius: 5 }
    ],
    texts: [
      { x: 0.14, y: 0.22, text: 'Early rise', tone: 'green', bold: true, fontSize: 10.5, anchor: 'middle' },
      { x: 0.37, y: 0.52, text: 'Boom', tone: 'blue', bold: true, fontSize: 10.5, anchor: 'middle' },
      { x: 0.52, y: 0.96, text: 'Euphoria', tone: 'amber', bold: true, fontSize: 11, anchor: 'middle' },
      { x: 0.76, y: 0.64, text: 'Crash', tone: 'rose', bold: true, fontSize: 11, anchor: 'middle' },
      { x: 0.91, y: 0.28, text: 'Aftermath', tone: 'slate', bold: true, fontSize: 10.5, anchor: 'middle' }
    ]
  };
})();
