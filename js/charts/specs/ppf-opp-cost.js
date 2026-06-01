/* ============================================================
   PPF — "opportunity cost: moving along" (1.1.4 card 3).
   Three points A (20, 80), B (40, 65), C (65, 40) on the frontier.
   Two interactive views: A→B (modest sacrifice) and B→C (steeper).
   Each view reveals its own arrow + axis ticks so the worked-numbers
   panel beside the diagram reads off the same picture.

   Mockup axis convention: Capital ↑, Consumer →.
   ============================================================ */
(function () {
  'use strict';

  // Coordinates anchored to the mockup's tick values (Capital 0-50, Consumer 0-90)
  // mapped into 0..1 chart space. The curve passes through all three points.
  var A = { x: 80 / 90, y: 20 / 50 };  // 80 consumer, 20 capital
  var B = { x: 65 / 90, y: 30 / 50 };  // 65 consumer, 30 capital
  var C = { x: 40 / 90, y: 40 / 50 };  // 40 consumer, 40 capital

  window.ECONOS_PPF_OPPCOST_SPEC = {
    width: 440,
    height: 360,
    chartArea: { x: 58, y: 46, width: 330, height: 264 },
    className: 'ppf-svg',
    axes: {
      x: { label: 'Consumer goods' },
      y: { label: 'Capital goods' }
    },
    defs:
      '<marker id="ppf-oc-ab" viewBox="0 0 8 6" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#D97706"/></marker>' +
      '<marker id="ppf-oc-bc" viewBox="0 0 8 6" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#DC2626"/></marker>',
    curves: [
      { id: 'ppf1',
        d: 'M 0,1 C 0.4,1 0.95,0.45 0.95,0',
        tone: 'blue', strokeWidth: 3, layer: 'layer-ppf-base' }
    ],
    points: [
      { x: A.x, y: A.y, tone: 'blue',  label: 'A', anchor: 'start', labelDx: 10, labelDy: 4,  layer: 'layer-points' },
      { x: B.x, y: B.y, tone: 'amber', label: 'B', anchor: 'start', labelDx: 10, labelDy: -4, layer: 'layer-points' },
      { x: C.x, y: C.y, tone: 'rose',  label: 'C', anchor: 'start', labelDx: 10, labelDy: -4, layer: 'layer-points' }
    ],
    views: [
      {
        key: 'ab',
        contentLayer: 'layer-ab',
        arrows: [
          { x1: A.x, y1: A.y, x2: B.x, y2: B.y,
            tone: 'amber', strokeWidth: 1.8, lineCap: 'round',
            markerEnd: 'ppf-oc-ab', buffer: 0.025 }
        ]
      },
      {
        key: 'bc',
        contentLayer: 'layer-bc',
        arrows: [
          { x1: B.x, y1: B.y, x2: C.x, y2: C.y,
            tone: 'rose', strokeWidth: 1.8, lineCap: 'round',
            markerEnd: 'ppf-oc-bc', buffer: 0.025 }
        ]
      }
    ]
  };
})();
