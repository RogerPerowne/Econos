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
    layers: ['idl-1', 'idl-2', 'idl-3', 'idl-4', 'idl-5'],
    curves: [
      { id: 'bub', d: 'M 0.02,0.28 C 0.22,0.34 0.36,0.86 0.52,0.86 C 0.60,0.86 0.64,0.40 0.72,0.36 C 0.82,0.34 0.90,0.40 0.98,0.40', tone: 'purple', strokeWidth: 3 }
    ],
    points: [
      { x: 0.16, on: 'bub', tone: 'green', radius: 6, layer: 'idl-1' },
      { x: 0.38, on: 'bub', tone: 'blue',  radius: 6, layer: 'idl-2' },
      { x: 0.52, on: 'bub', tone: 'amber', radius: 6.5, layer: 'idl-3' },
      { x: 0.68, on: 'bub', tone: 'rose',  radius: 6, layer: 'idl-4' },
      { x: 0.90, on: 'bub', tone: 'slate', radius: 6, layer: 'idl-5' }
    ],
    texts: [
      { x: 0.14, y: 0.22, text: 'Early rise', tone: 'green', bold: true, fontSize: 10.5, anchor: 'middle', layer: 'idl-1' },
      { x: 0.37, y: 0.52, text: 'Boom', tone: 'blue', bold: true, fontSize: 10.5, anchor: 'middle', layer: 'idl-2' },
      { x: 0.52, y: 0.96, text: 'Euphoria', tone: 'amber', bold: true, fontSize: 11, anchor: 'middle', layer: 'idl-3' },
      { x: 0.76, y: 0.64, text: 'Crash', tone: 'rose', bold: true, fontSize: 11, anchor: 'middle', layer: 'idl-4' },
      { x: 0.91, y: 0.28, text: 'Aftermath', tone: 'slate', bold: true, fontSize: 10.5, anchor: 'middle', layer: 'idl-5' }
    ]
  };
})();
