/* ============================================================
   PPF card 2 — declarative spec for ppfBowedOutInteractive.
   Teaches "increasing opportunity cost" via three opportunity-cost
   triangles at progressively further positions on a bowed-out PPF.

   The migration intentionally FIXES a pedagogical bug in the
   legacy SVG: the three triangles now share the SAME horizontal
   width (deltaX), so the visual story matches what the card text
   actually claims — "all three share similar widths, but the
   vertical sacrifices are progressively larger." Both corners of
   each triangle sit ON the PPF curve (engine inverts the curve
   numerically to find the right t for the end corner).

   Progressive reveal via the legacy interactiveDiagram layer system:
   the engine emits the three triangles inside <g class="idl-1">,
   <g class="idl-2">, <g class="idl-3"> with style="display:none";
   js/app.js then reveals layers 0..N-1 when view N is active.
   ============================================================ */
(function () {
  'use strict';

  // Equal horizontal width across all three triangles — the load-bearing
  // visual claim of this diagram. Heights are computed from the curve.
  var DELTA_X = 0.09;

  window.ECONOS_PPF_CARD2_SPEC = {
    width: 440,
    height: 300,
    // Chart area trimmed from the original (y:18→30 top margin for Y-label,
    // width:360→340 right margin for PPF curve label) so the engine's
    // axis-label and curve-label placements stay inside the viewport.
    chartArea: { x: 55, y: 30, width: 340, height: 238 },
    axes: {
      x: { label: 'Good B' },
      y: { label: 'Good A' }
    },
    defs:
      '<marker id="ppfboi-ax"  markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><polygon points="0 0,7 3.5,0 7" fill="#475569"/></marker>' +
      '<marker id="ppfboi-sac" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><polygon points="0 0,7 3.5,0 7" fill="#DC2626"/></marker>' +
      '<marker id="ppfboi-gn"  markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><polygon points="0 0,7 3.5,0 7" fill="#059669"/></marker>',
    curves: [
      // PPF extended to x=1.0 (was 0.917 in the legacy SVG) so the rightmost
      // triangle has room. Same bowed-out character, just runs to the X-axis.
      { id: 'ppf', d: 'M 0,0.772 C 0.55,0.772 1.0,0.05 1.0,0', tone: 'blue', label: 'PPF', strokeWidth: 2.5 }
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
          { curve: 'ppf', fromT: 0.20, deltaX: DELTA_X, label: 'Low OC',    tone: 'blue' }
        ]
      },
      {
        key: 'rising-oc',
        contentLayer: 'idl-2',
        ocTriangles: [
          { curve: 'ppf', fromT: 0.45, deltaX: DELTA_X, label: 'Rising OC', tone: 'amber' }
        ]
      },
      {
        key: 'high-oc',
        contentLayer: 'idl-3',
        ocTriangles: [
          { curve: 'ppf', fromT: 0.70, deltaX: DELTA_X, label: 'High OC',   tone: 'rose' }
        ]
      }
    ]
  };
})();
