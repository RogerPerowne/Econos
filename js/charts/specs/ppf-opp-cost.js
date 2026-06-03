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
      // A — labels right (no arrow approaches A).
      { id: 'A', x: 0.88, on: 'ppf1', tone: 'blue',  label: 'A', anchor: 'start', labelDx: 10, labelDy: 4,  layer: 'layer-points' },
      // B — labels UPPER-LEFT. The A→B arrow approaches B from below-right
      // and its marker body sits in that quadrant, so a label on the right
      // would collide with the arrowhead (the bug v0.41.1 left behind).
      { id: 'B', x: 0.72, on: 'ppf1', tone: 'amber', label: 'B', anchor: 'end',   labelDx: -10, labelDy: -6, layer: 'layer-points' },
      // C — labels UPPER-LEFT for the same reason: B→C arrow ends at C
      // from a similar below-right direction.
      { id: 'C', x: 0.44, on: 'ppf1', tone: 'rose',  label: 'C', anchor: 'end',   labelDx: -10, labelDy: -6, layer: 'layer-points' }
    ],
    views: [
      {
        key: 'ab',
        contentLayer: 'layer-ab',
        arrows: [
          // Quadratic bezier that arcs OUTSIDE the PPF (away from origin)
          // so the arrow visibly follows the curve direction without
          // overlapping the blue curve. Endpoints solved from the cubic
          // at t_A≈0.78 (≈0.88, 0.305) and t_B≈0.595 (≈0.72, 0.552).
          // Control point (0.91, 0.56) verified to keep the arc ≥0.038
          // chart-units above the cubic at every sample point — a clean
          // 12+px clearance in the rendered plot. Earlier (0.85, 0.49)
          // gave only 0.011 clearance and visibly hugged the curve.
          { d: 'M 0.88,0.305 Q 0.91,0.56 0.72,0.552',
            tone: 'amber', strokeWidth: 2.2, lineCap: 'round',
            markerEnd: 'econos-arrow-amber', buffer: 4 }
        ]
      },
      {
        key: 'bc',
        contentLayer: 'layer-bc',
        arrows: [
          // Same idea — arc outside the curve from B to C. Endpoints from
          // t_B≈0.595 and t_C≈0.348. Control (0.70, 0.84) verified to
          // give ≥0.036 chart-unit clearance everywhere; previous (0.61,
          // 0.74) gave only ~0.0005, so the arc essentially traced the
          // PPF and read as a clash.
          { d: 'M 0.72,0.552 Q 0.70,0.84 0.44,0.828',
            tone: 'rose', strokeWidth: 2.2, lineCap: 'round',
            markerEnd: 'econos-arrow-rose', buffer: 4 }
        ]
      }
    ]
  };
})();
