/* ============================================================
   Laffer curve — engine spec for lafferCurveInteractive
   (Taxation 4.5.2 Card 5). A 3-view stepped story:

     lcv-1  The rising side: at low rates, raising the rate raises
            revenue — the base barely shrinks.
     lcv-2  The peak: a revenue-maximising rate t* exists — but
            nobody knows where it is.
     lcv-3  The falling side: beyond t*, the base (work, investment,
            avoidance, relocation) shrinks faster than the rate
            rises, so revenue FALLS.

   Geometry: the curve is the exact parabola R = 4h·t(1−t) (h=0.82)
   expressed as a cubic (control points (1/3, 4h/3), (2/3, 4h/3) —
   a quadratic Bézier with apex control elevated to cubic form), so
   every annotated point sits exactly on the curve:
     (0.25, 0.615) · peak (0.50, 0.820) · (0.75, 0.615)
   Endpoints (0,0) and (1,0) anchor the two zero-revenue stories.
   Mutually exclusive views (`layerMode: 'exclusive'`).
   ============================================================ */
(function () {
  'use strict';

  var LAFFER = 'M 0,0 C 0.3333,1.0933 0.6667,1.0933 1,0';

  window.ECONOS_LAFFER_CURVE_SPEC = {
    width: 640,
    height: 460,
    chartArea: { x: 64, y: 24, width: 536, height: 376 },
    className: 'laffer-curve-svg',
    background: '#FFFFFF',
    layers: ['lcv-1', 'lcv-2', 'lcv-3'],
    layerMode: 'exclusive',
    axes: {
      x: { label: 'Tax rate (%)' },
      y: { label: 'Tax revenue (£)' }
    },

    curves: [
      // The Laffer curve itself — visible in every view.
      { id: 'LAF', d: LAFFER, tone: 'green', strokeWidth: 2.8 }
    ],

    points: [
      // Zero-revenue anchors, always visible.
      { x: 0, y: 0, tone: 'slate', radius: 4.5 },
      { x: 1, y: 0, tone: 'slate', radius: 4.5 },

      /* lcv-1: a point on the rising side */
      { x: 0.25, y: 0.615, tone: 'green', radius: 6, hollow: true,
        gridlines: 'slate', ticks: { x: 't₁', y: 'R₁' },
        layer: 'lcv-1' },

      /* lcv-2: the revenue-maximising peak */
      { x: 0.50, y: 0.820, tone: 'green', radius: 6.5, hollow: true,
        gridlines: 'green', ticks: { x: 't*', y: 'Max' },
        layer: 'lcv-2' },

      /* lcv-3: a point on the falling side — same revenue as t₁ */
      { x: 0.75, y: 0.615, tone: 'rose', radius: 6, hollow: true,
        gridlines: 'rose', ticks: { x: 't₂', y: 'R₁' },
        layer: 'lcv-3' }
    ],

    arrows: [
      /* lcv-1: revenue rising — upward arrow in the open space under
         the rising limb. */
      { x1: 0.18, y1: 0.18, x2: 0.18, y2: 0.46,
        tone: 'green', strokeWidth: 2, markerEnd: 'econos-arrow-green',
        buffer: 0, layer: 'lcv-1' },
      /* lcv-3: revenue falling — downward arrow under the falling limb. */
      { x1: 0.82, y1: 0.46, x2: 0.82, y2: 0.18,
        tone: 'rose', strokeWidth: 2, markerEnd: 'econos-arrow-rose',
        buffer: 0, layer: 'lcv-3' }
    ],

    texts: [
      // Endpoint stories — INSIDE the chart just above the x-axis, so they
      // can never collide with the axis caption or the per-view ticks below.
      { x: 0.03, y: 0.05, text: '0% → zero revenue', tone: 'slate', fontSize: 10.5, anchor: 'start' },
      { x: 0.97, y: 0.05, text: '100% → zero revenue', tone: 'slate', fontSize: 10.5, anchor: 'end' },

      { x: 0.26, y: 0.34, text: 'revenue ↑', tone: 'green', bold: true, fontSize: 11.5, anchor: 'start', layer: 'lcv-1' },
      { x: 0.50, y: 0.93, text: 'Maximum revenue', tone: 'green', bold: true, fontSize: 12, anchor: 'middle', layer: 'lcv-2' },
      { x: 0.74, y: 0.34, text: 'revenue ↓', tone: 'rose', bold: true, fontSize: 11.5, anchor: 'end', layer: 'lcv-3' }
    ]
  };
})();
