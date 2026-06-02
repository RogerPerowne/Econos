/* ============================================================
   PED along a linear demand curve — engine spec for pedLinearRegions
   (Price-elasticity-of-demand card 4). Layered spec for the
   `interactiveDiagram` block: PED changes as you move down a
   straight-line demand curve.

   One straight demand line (slope −1 in chart space). Step through
   three regions:
     layer-a → A upper third  · elastic    (|PED| > 1)
     layer-b → B midpoint     · unit elastic (|PED| = 1, TR max)
     layer-c → C lower third  · inelastic  (|PED| < 1)

   Points on the line P = 14 − (14/120)Q, mapped P/14 (y), Q/120 (x):
     A (£12, 17) → (0.143, 0.857)
     B (£7,  60) → (0.500, 0.500)
     C (£2, 103) → (0.857, 0.143)
   ============================================================ */
(function () {
  'use strict';

  var A = { x: 0.143, y: 0.857 };
  var B = { x: 0.500, y: 0.500 };
  var C = { x: 0.857, y: 0.143 };

  window.ECONOS_PED_LINEAR_REGIONS_SPEC = {
    width: 700,
    height: 480,
    chartArea: { x: 84, y: 40, width: 534, height: 372 },
    className: 'ped-lin-svg',
    layers: ['layer-a', 'layer-b', 'layer-c'],
    layerMode: 'exclusive',
    axes: {
      x: { label: 'Quantity demanded' },
      y: { label: 'Price (£)' }
    },

    curves: [
      { d: 'M 0.04,0.96 L 0.96,0.04', tone: 'blue', label: 'D', strokeWidth: 3, labelDx: 8, labelDy: 12 }
    ],

    points: [
      { layer: 'layer-a', x: A.x, y: A.y, tone: 'green',  radius: 6 },
      { layer: 'layer-b', x: B.x, y: B.y, tone: 'amber',  radius: 6 },
      { layer: 'layer-c', x: C.x, y: C.y, tone: 'purple', radius: 6 }
    ],

    arrows: [
      { layer: 'layer-a', x1: 0, y1: A.y, x2: A.x, y2: A.y, tone: 'slate', strokeWidth: 1, dashed: '4 3', buffer: 0 },
      { layer: 'layer-a', x1: A.x, y1: A.y, x2: A.x, y2: 0, tone: 'slate', strokeWidth: 1, dashed: '4 3', buffer: 0 },
      { layer: 'layer-b', x1: 0, y1: B.y, x2: B.x, y2: B.y, tone: 'slate', strokeWidth: 1, dashed: '4 3', buffer: 0 },
      { layer: 'layer-b', x1: B.x, y1: B.y, x2: B.x, y2: 0, tone: 'slate', strokeWidth: 1, dashed: '4 3', buffer: 0 },
      { layer: 'layer-c', x1: 0, y1: C.y, x2: C.x, y2: C.y, tone: 'slate', strokeWidth: 1, dashed: '4 3', buffer: 0 },
      { layer: 'layer-c', x1: C.x, y1: C.y, x2: C.x, y2: 0, tone: 'slate', strokeWidth: 1, dashed: '4 3', buffer: 0 }
    ],

    texts: [
      { layer: 'layer-a', x: A.x + 0.04, y: A.y + 0.02, text: 'A', tone: 'green', bold: true, fontSize: 15, anchor: 'start' },
      { layer: 'layer-a', x: 0.52, y: 0.80, text: 'Elastic (|PED| > 1)', tone: 'green', bold: true, fontSize: 13, anchor: 'start' },
      { layer: 'layer-a', x: 0.52, y: 0.745, text: 'upper part of the curve', tone: 'green', fontSize: 11.5, anchor: 'start' },

      { layer: 'layer-b', x: B.x + 0.04, y: B.y + 0.03, text: 'B', tone: 'amber', bold: true, fontSize: 15, anchor: 'start' },
      { layer: 'layer-b', x: 0.60, y: 0.55, text: 'Unit elastic (|PED| = 1)', tone: 'amber', bold: true, fontSize: 13, anchor: 'start' },
      { layer: 'layer-b', x: 0.60, y: 0.495, text: 'midpoint · TR is maximised', tone: 'amber', fontSize: 11.5, anchor: 'start' },

      { layer: 'layer-c', x: C.x - 0.04, y: C.y + 0.03, text: 'C', tone: 'purple', bold: true, fontSize: 15, anchor: 'end' },
      { layer: 'layer-c', x: 0.30, y: 0.26, text: 'Inelastic (|PED| < 1)', tone: 'purple', bold: true, fontSize: 13, anchor: 'start' },
      { layer: 'layer-c', x: 0.30, y: 0.205, text: 'lower part of the curve', tone: 'purple', fontSize: 11.5, anchor: 'start' }
    ]
  };
})();
