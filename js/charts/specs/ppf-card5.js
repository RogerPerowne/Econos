/* ============================================================
   PPF card 5 — declarative spec for ppfEfficiencyInteractive.
   Teaches the distinction between PRODUCTIVE efficiency (any
   point on the PPF) and ALLOCATIVE efficiency (the one point
   that matches consumer preferences, P=MC). Four progressive-
   reveal views, mirrored on the legacy idl-1/idl-2/idl-3 layer
   system the legacy interactiveDiagram JS in app.js toggles.

   View map:
     0 'Three zones'         — just base PPF + zone labels
     1 'Productive ineff.'   → reveals idl-1 (H inside the PPF)
     2 'Productive eff.'     → reveals idl-1 + idl-2 (3 points on curve)
     3 'Allocative eff.'     → reveals idl-1 + idl-2 + idl-3 (G★)

   ViewBox is 470×420 (smaller, taller than card 1's 900×440),
   no in-SVG legend — the head/body/analysis on the right is
   rendered by app.js from the data file's views[] field.
   ============================================================ */
(function () {
  'use strict';

  window.ECONOS_PPF_CARD5_SPEC = {
    width: 470,
    height: 420,
    chartArea: { x: 90, y: 25, width: 360, height: 365 },
    className: 'ppf-eff-svg',
    axes: {
      x: { label: 'Capital Goods' },
      y: { label: 'Consumer Goods' }
    },
    curves: [
      { id: 'ppf', d: 'M 0,0.773 C 0.458,0.773 0.917,0.173 0.917,0.013', tone: 'blue', label: 'PPF₁' }
    ],
    // Zone labels: keep one. "Inefficient zone" survives — it labels the
    // region below the PPF that view 2's H point lives in. The original
    // "Unattainable zone" label is dropped because it clashed with the
    // allocative-efficiency callout box in view 4 (it sat in the same
    // top-right region the callout needs).
    zones: [
      { x: 0.40, y: 0.06, text: 'Inefficient zone',  tone: 'rose' }
    ],
    viewDefaultsHidden: true,
    views: [
      /* -------------------- idl-1: H – productively INefficient -------------------- */
      {
        key: 'inefficient',
        contentLayer: 'idl-1',
        points: [
          { x: 0.181, y: 0.227, tone: 'rose', label: 'H', desc: '– inside PPF', radius: 8 }
        ]
        // "resources idle" italic text removed — it sat on top of the
        // always-visible "Inefficient zone" zone label. The "– inside PPF"
        // desc on the H point makes the point already.
      },

      /* -------------------- idl-2: any point ON the PPF (productive efficiency) -------------------- */
      {
        key: 'productive',
        contentLayer: 'idl-2',
        points: [
          { x: 0.272, y: 0.709, tone: 'green', radius: 7 },
          { x: 0.631, y: 0.453, tone: 'green', label: 'F', radius: 7 },
          { x: 0.806, y: 0.248, tone: 'green', radius: 7 }
        ],
        boxedLabels: [
          // Box positioned BELOW the PPF curve, outside the curve's path,
          // so the curve doesn't slice through it. Connector points to the
          // upper-left green dot to anchor the meaning.
          { x: 0.05, y: 0.4, w: 0.36, h: 0.06, lines: ['Any point ON PPF₁'], tone: 'green',
            connectorTo: { x: 0.272, y: 0.709 } }
        ]
      },

      /* -------------------- idl-3: G★ – the one allocatively efficient point -------------------- */
      {
        key: 'allocative',
        contentLayer: 'idl-3',
        points: [
          // G★ — slightly bigger, with a star symbol inside the dot
          { x: 0.4, y: 0.64, tone: 'amber', label: 'G★', radius: 9, symbol: '★' }
        ],
        boxedLabels: [
          // Allocative-efficiency callout. Now positioned in the upper-right
          // unattainable zone (previously occupied by the zone label, which
          // we removed). The dashed connector points down to G★.
          { x: 0.56, y: 0.92, w: 0.36, h: 0.085,
            lines: ['Allocatively', 'efficient: P = MC'],
            tone: 'amber',
            connectorTo: { x: 0.42, y: 0.67 } }
        ]
        // "F: productively efficient / but NOT allocatively efficient"
        // italic notes removed — they sat across the PPF curve. The
        // pedagogical point is already in the head/body/analysis text on
        // the right-hand panel; the diagram doesn't need to repeat it.
      }
    ]
  };
})();
