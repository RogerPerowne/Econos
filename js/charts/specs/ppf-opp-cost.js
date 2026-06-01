/* ============================================================
   PPF — "opportunity cost: moving along" (1.1.4 card 3).
   Three points A, B, C on the frontier; two interactive views
   reveal A→B and B→C arrows in turn.

   Points are declared with `on: 'ppf1'` so the engine snaps each
   y onto the cubic at the given x — no floating dots. Arrows
   reference the points by id (from/to), so they always connect
   the dots wherever the engine places them.

   Mockup axis convention: Capital ↑, Consumer →.
   ============================================================ */
(function () {
  'use strict';

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
    // Each point's y is snapped onto ppf1 at its x by the engine —
    // guarantees A/B/C sit ON the curve, no floating dots. The x
    // values are chosen to spread the three points evenly across
    // the frontier (high-consumer → high-capital corner).
    points: [
      { id: 'A', x: 0.88, on: 'ppf1', tone: 'blue',  label: 'A', anchor: 'start', labelDx: 10, labelDy: 4,  layer: 'layer-points' },
      { id: 'B', x: 0.72, on: 'ppf1', tone: 'amber', label: 'B', anchor: 'start', labelDx: 10, labelDy: -4, layer: 'layer-points' },
      { id: 'C', x: 0.44, on: 'ppf1', tone: 'rose',  label: 'C', anchor: 'start', labelDx: 10, labelDy: -4, layer: 'layer-points' }
    ],
    views: [
      {
        key: 'ab',
        contentLayer: 'layer-ab',
        arrows: [
          // Arrow references points by id so it always lands where the
          // engine actually placed A and B.
          { from: 'A', to: 'B',
            tone: 'amber', strokeWidth: 1.8, lineCap: 'round',
            markerEnd: 'ppf-oc-ab', buffer: 0.025 }
        ]
      },
      {
        key: 'bc',
        contentLayer: 'layer-bc',
        arrows: [
          { from: 'B', to: 'C',
            tone: 'rose', strokeWidth: 1.8, lineCap: 'round',
            markerEnd: 'ppf-oc-bc', buffer: 0.025 }
        ]
      }
    ]
  };
})();
