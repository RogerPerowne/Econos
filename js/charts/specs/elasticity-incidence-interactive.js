/* ============================================================
   Elasticity Incidence Interactive — engine spec for
   elasticityIncidenceInteractive.
   Indirect-taxes-and-subsidies topic + government-intervention.

   Two-panel side-by-side demonstration that the SAME tax on the
   SAME supply curve produces VERY different incidence depending
   on demand elasticity:
     LEFT panel  — INELASTIC demand (steep D). Consumers absorb
                   most of the wedge (~87% of the tax).
     RIGHT panel — ELASTIC demand (shallow D). Producers absorb
                   most (~64%) because they can't push prices on
                   buyers who can substitute.

   Cumulative reveal (3 views):
     view 1  → just S and S+T in both panels (the same tax)
     view 2  → adds D curves (steep | shallow) and E₀ in both
     view 3  → adds E_t, dashed Pc/Pp/Qt gridlines, and the
                burden highlight rectangles (consumer burden
                in blue, producer burden in red). Bottom summary
                label nails the % incidence per side.

   Uses the engine's `panels: [...]` API so each panel has its
   own coordinate system; layer reveals apply across both panels.
   ============================================================ */
(function () {
  'use strict';

  /* ── Shared rules — same supply and same tax in both panels ── */

  function basePanel(chartArea, title, titleTone, demandCurve, eqPoints, burdenRects, eqArrows, summaryText, summaryTone) {
    return {
      chartArea: chartArea,
      title: title,
      titleTone: titleTone,
      axes: { x: { label: 'Q' }, y: { label: 'P' } },
      curves: [
        /* Base S (always visible) */
        { d: 'M 0.083,0.096 L 0.972,0.835',
          tone: 'green', label: 'S', strokeWidth: 2,
          labelDx: 6, labelDy: -4, anchor: 'start' },
        /* Base S+T (always visible — same tax in both panels) */
        { d: 'M 0.083,0.291 L 0.972,1.030',
          tone: 'blue', label: 'S+T', strokeWidth: 1.8, dashed: '7 4',
          labelDx: -10, labelDy: -6, anchor: 'end' },
        /* View 2: D curve (steep or shallow depending on panel) */
        demandCurve
      ],
      points: eqPoints,
      arrows: eqArrows,
      boxedLabels: burdenRects.concat(summaryText ? [{
        x: 0.090, y: -0.080, w: 0.820, h: 0.080,
        tone: summaryTone, lines: [summaryText]
      }] : [])
    };
  }

  window.ECONOS_ELASTICITY_INCIDENCE_SPEC = {
    width: 440,
    height: 300,
    className: 'elasticity-incidence-svg',
    background: '#FFFFFF',
    layers: ['idl-1', 'idl-2'],
    divider: { x: 220, y1: 22, y2: 270 },

    panels: [
      /* ─── LEFT panel: INELASTIC demand ─── */
      basePanel(
        { x: 30, y: 20, width: 180, height: 230 },
        'Inelastic demand',
        'rose',
        /* Steep D curve (small ΔQ for big ΔP) */
        { d: 'M 0.278,0.965 L 0.500,0.009',
          tone: 'blue', label: 'D', strokeWidth: 2,
          labelDx: 6, labelDy: 4, anchor: 'start',
          layer: 'idl-1' },
        [
          /* Inelastic case: Q drops only slightly so Q₀ and Qt overlap
             on the x-axis. Drop the Qt/Pc tick labels and let the
             burden rectangles communicate the post-tax position. */
          { x: 0.417, y: 0.365, tone: 'slate', radius: 4,
            gridlines: 'slate', ticks: { x: 'Q₀', y: 'P₀' },
            layer: 'idl-1' },
          { x: 0.378, y: 0.535, tone: 'blue', radius: 4,
            gridlines: 'blue',
            layer: 'idl-2' }
        ],
        [
          { x: 0, y: 0.535, w: 0.378, h: 0.170,
            tone: 'blue', lines: ['Consumer burden'],
            layer: 'idl-2' },
          { x: 0, y: 0.365, w: 0.378, h: 0.026,
            tone: 'red', lines: [],
            layer: 'idl-2' }
        ],
        [
          /* Layer 2: Pp horizontal reference */
          { x1: 0, y1: 0.339, x2: 0.378, y2: 0.339,
            tone: 'red', strokeWidth: 1, dashed: '4 3',
            buffer: 0, layer: 'idl-2' }
        ],
        'Consumer bears most (~87%)',
        'blue'
      ),

      /* ─── RIGHT panel: ELASTIC demand ─── */
      basePanel(
        { x: 245, y: 20, width: 180, height: 230 },
        'Elastic demand',
        'green',
        /* Shallow D curve (big ΔQ for small ΔP) */
        { d: 'M 0.000,0.804 L 1.000,0.283',
          tone: 'blue', label: 'D', strokeWidth: 2,
          labelDx: 6, labelDy: 4, anchor: 'start',
          layer: 'idl-1' },
        [
          { x: 0.578, y: 0.509, tone: 'slate', radius: 4,
            gridlines: 'slate', ticks: { x: 'Q₀', y: 'P₀' },
            layer: 'idl-1' },
          { x: 0.428, y: 0.578, tone: 'blue', radius: 4,
            gridlines: 'blue', ticks: { x: 'Qt', y: 'Pc' },
            layer: 'idl-2' }
        ],
        [
          { x: 0, y: 0.578, w: 0.428, h: 0.069,
            tone: 'blue', lines: [],
            layer: 'idl-2' },
          { x: 0, y: 0.509, w: 0.428, h: 0.126,
            tone: 'red', lines: ['Producer burden'],
            layer: 'idl-2' }
        ],
        [
          { x1: 0, y1: 0.383, x2: 0.428, y2: 0.383,
            tone: 'red', strokeWidth: 1, dashed: '4 3',
            buffer: 0, layer: 'idl-2' }
        ],
        'Producer bears most (~64%)',
        'red'
      )
    ]
  };
})();
