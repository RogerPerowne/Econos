/* ============================================================
   PPF card 2 — declarative spec for ppfBowedOutInteractive.
   Teaches "increasing opportunity cost" via three opportunity-cost
   triangles at progressively further positions on a bowed-out PPF.

   The chart axes carry numeric tick labels so the OC story is read
   directly from the graph, not just from the analysis prose:

     fromT=0.124 → capital ≈ 2 → 3, consumer ≈ 9.6 → 9.1, OC ≈ 0.5
     fromT=0.331 → capital ≈ 5 → 6, consumer ≈ 7.6 → 6.5, OC ≈ 1.0
     fromT=0.593 → capital ≈ 8 → 9, consumer ≈ 3.8 → 2.2, OC ≈ 1.5

   Each triangle has deltaX = 0.1 chart-units = 1 capital good. Both
   axes are calibrated 0..1 chart = 0..10 units, so chart-slope equals
   real OC.

   Progressive reveal via the legacy interactiveDiagram layer system:
   the engine emits the three triangles inside <g class="idl-1">,
   <g class="idl-2">, <g class="idl-3"> with style="display:none";
   js/app.js then reveals layers 0..N-1 when view N is active.
   ============================================================ */
(function () {
  'use strict';

  // deltaX = 1 capital good (chart 0..1 = capital 0..10)
  var DELTA_X = 0.1;

  window.ECONOS_PPF_CARD2_SPEC = {
    width: 440,
    height: 300,
    chartArea: { x: 55, y: 30, width: 340, height: 238 },
    axes: {
      x: { label: 'Capital goods' },
      y: { label: 'Consumer goods' }
    },
    defs:
      '<marker id="ppfboi-ax"  markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><polygon points="0 0,7 3.5,0 7" fill="#475569"/></marker>' +
      '<marker id="ppfboi-sac" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><polygon points="0 0,7 3.5,0 7" fill="#DC2626"/></marker>' +
      '<marker id="ppfboi-gn"  markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><polygon points="0 0,7 3.5,0 7" fill="#059669"/></marker>',
    curves: [
      // PPF stretched so y spans the full 0..1 chart range — gives a
      // clean (0, 10) → (10, 0) shape with the numeric axis ticks below.
      { id: 'ppf', d: 'M 0,1 C 0.55,1 1.0,0.05 1.0,0', tone: 'blue', label: 'PPF', strokeWidth: 2.5 }
    ],

    // Numeric tick labels on both axes (chart 0..1 = 0..10 units). The
    // engine's renderAxes doesn't draw ticks itself, so we place the
    // numerals via the `texts` field — anchored just outside the chart
    // area on each side.
    texts: [
      // x-axis (Capital goods) ticks: 2, 4, 6, 8 — skip 0 (origin "O")
      // and 10 (overlaps the "Capital goods" right-end label).
      { x: 0.2, y: -0.04, text: '2',  tone: 'slate', fontSize: 11, anchor: 'middle' },
      { x: 0.4, y: -0.04, text: '4',  tone: 'slate', fontSize: 11, anchor: 'middle' },
      { x: 0.6, y: -0.04, text: '6',  tone: 'slate', fontSize: 11, anchor: 'middle' },
      { x: 0.8, y: -0.04, text: '8',  tone: 'slate', fontSize: 11, anchor: 'middle' },
      // y-axis (Consumer goods) ticks: 2, 4, 6, 8.
      { x: -0.025, y: 0.2, text: '2', tone: 'slate', fontSize: 11, anchor: 'end' },
      { x: -0.025, y: 0.4, text: '4', tone: 'slate', fontSize: 11, anchor: 'end' },
      { x: -0.025, y: 0.6, text: '6', tone: 'slate', fontSize: 11, anchor: 'end' },
      { x: -0.025, y: 0.8, text: '8', tone: 'slate', fontSize: 11, anchor: 'end' }
    ],

    // Each view emits a single content layer named idl-1/2/3.
    // The legacy app.js layer-reveal handler progressively shows
    // layers[0..N-1] when the user clicks view N (cumulative).
    viewDefaultsHidden: true,
    views: [
      {
        key: 'low-oc',
        contentLayer: 'idl-1',
        ocTriangles: [
          // fromT=0.124 → capital starts at 2. ΔY/ΔX ≈ 0.5 real OC.
          { curve: 'ppf', fromT: 0.124, deltaX: DELTA_X, label: 'OC ≈ 0.5', tone: 'blue' }
        ]
      },
      {
        key: 'rising-oc',
        contentLayer: 'idl-2',
        ocTriangles: [
          // fromT=0.331 → capital starts at 5. OC ≈ 1.0 (twice as much).
          { curve: 'ppf', fromT: 0.331, deltaX: DELTA_X, label: 'OC ≈ 1.0', tone: 'amber' }
        ]
      },
      {
        key: 'high-oc',
        contentLayer: 'idl-3',
        ocTriangles: [
          // fromT=0.593 → capital starts at 8. OC ≈ 1.5 (three times as
          // much as triangle 1).
          { curve: 'ppf', fromT: 0.593, deltaX: DELTA_X, label: 'OC ≈ 1.5', tone: 'rose' }
        ]
      }
    ]
  };
})();
