/* ============================================================
   SRAS Curve Static — engine spec for srasCurveStatic.
   Aggregate-supply card 2 "The SRAS curve".

   Layered for the ad-interactive view-switcher:
     view 1  → Point A revealed
     view 2  → Point A + Point B + movement arrow

   Base layer: axes + SRAS line + axis labels.
   ============================================================ */
(function () {
  'use strict';

  var A = { x: 0.333, y: 0.339 };
  var B = { x: 0.653, y: 0.634 };

  window.ECONOS_SRAS_CURVE_STATIC_SPEC = {
    width: 440,
    height: 300,
    chartArea: { x: 55, y: 18, width: 360, height: 254 },
    className: 'sras-curve-static-svg',
    layers: ['idl-1', 'idl-2'],
    defs:
      '<marker id="srs-arr-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#3B82F6"/></marker>',
    axes: {
      x: { label: 'Real output (Y)' },
      y: { label: 'Price level (P)' }
    },

    curves: [
      { d: 'M 0.042,0.067 L 0.931,0.894',
        tone: 'blue', label: 'SRAS', strokeWidth: 2.5, labelDx: -6, labelDy: -6, anchor: 'end' }
    ],

    points: [
      // Layer 1: Point A — dashed gridlines, P₁/Y₁ ticks, label "A"
      { x: A.x, y: A.y, tone: 'blue', radius: 5.5, hollow: true,
        gridlines: 'slate', ticks: { x: 'Y₁', y: 'P₁' },
        label: 'A', labelDx: -12, labelDy: -2, anchor: 'end',
        layer: 'idl-1' },
      // Layer 2: Point B — same treatment, with movement context
      { x: B.x, y: B.y, tone: 'blue', radius: 5.5, hollow: true,
        gridlines: 'slate', ticks: { x: 'Y₂', y: 'P₂' },
        label: 'B', labelDx: 12, labelDy: -2, anchor: 'start',
        layer: 'idl-2' }
    ],

    arrows: [
      // Movement arrow from near A to near B, dashed blue, layer 2
      { x1: 0.394, y1: 0.394, x2: 0.600, y2: 0.583,
        tone: 'blue', strokeWidth: 1.5, dashed: '3 2',
        markerEnd: 'srs-arr-blue', buffer: 0, layer: 'idl-2' }
    ]
  };
})();
