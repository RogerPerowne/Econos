/* ============================================================
   PPF card 1 — declarative spec for ppfInteractive.
   Translated layer-for-layer from the original js/icons.js SVG
   so the rendered output is faithful to what users have today.

   Coordinates are in chart space (0..1, y up). The engine maps
   them to pixel space and applies the site-wide axis-label rule.

   Always-visible:
     - axes (engine renders)
     - dashed vertical divider at x=595
     - PPF₁ base curve (wrapped in layer-ppf-base so .show-shift
       can dim it via existing CSS)

   Per-view (each emits content + legend layers with the same
   class names the legacy CSS already targets):
     - base       → .layer-base-points  + .layer-legend-base
     - extension  → .layer-opp-cost     + .layer-legend-extension
     - shift      → .layer-shift-curves + .layer-legend-shift
     - efficiency → .layer-efficiency   + .layer-legend-efficiency
   ============================================================ */
(function () {
  'use strict';

  window.ECONOS_PPF_CARD1_SPEC = {
    width: 900,
    height: 440,
    chartArea: { x: 60, y: 50, width: 500, height: 350 },
    className: 'ppf-svg',
    divider: { x: 595, y1: 16, y2: 424 },
    axes: {
      x: { label: 'Capital Goods' },
      y: { label: 'Consumer Goods' }
    },
    defs:
      '<marker id="ppf-occ-end" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#D97706"/></marker>' +
      '<marker id="ppf-shift-out-end" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#059669"/></marker>' +
      '<marker id="ppf-shift-out-start" markerWidth="8" markerHeight="8" refX="2" refY="3" orient="auto"><path d="M8,0 L8,6 L0,3 z" fill="#059669"/></marker>' +
      '<marker id="ppf-shift-in-end" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#DC2626"/></marker>' +
      '<marker id="ppf-shift-in-start" markerWidth="8" markerHeight="8" refX="2" refY="3" orient="auto"><path d="M8,0 L8,6 L0,3 z" fill="#DC2626"/></marker>',
    curves: [
      { id: 'ppf1', d: 'M 0,0.643 C 0.36,0.643 0.65,0.229 0.65,0.014', tone: 'blue', label: 'PPF₁', layer: 'layer-ppf-base' }
    ],
    views: [
      /* -------------------- BASE (Construction) -------------------- */
      {
        key: 'base',
        contentLayer: 'layer-base-points',
        legendLayer: 'layer-legend-base',
        points: [
          { x: 0.46, y: 0.409, tone: 'blue',  label: 'A', desc: '– Efficient (on PPF)', gridlines: 'gray' },
          { x: 0.24, y: 0.257, tone: 'amber', label: 'B', desc: '– Inefficient (inside)' },
          { x: 0.67, y: 0.571, tone: 'rose',  label: 'C', desc: '– Unattainable' }
        ],
        zones: [
          { x: 0.08, y: 0.086, text: 'Inefficient zone',  tone: 'amber' },
          { x: 0.74, y: 0.700, text: 'Unattainable zone', tone: 'rose' }
        ],
        legend: {
          x: 600,
          title: { tone: 'blue', text: 'Frontier = maximum output · three zones' },
          sections: [
            {
              header: { text: 'THREE ZONES', tone: 'blue' },
              rows: [
                { tone: 'blue',  text: 'On the PPF · Productively efficient' },
                { tone: 'amber', text: 'Inside · Inefficient, wasted resources' },
                { tone: 'rose',  text: 'Outside · Unattainable now' }
              ]
            },
            {
              header: { text: 'WHY IT SLOPES DOWN', tone: 'blue' },
              body: [
                'More of one good always means',
                'less of the other – scarcity.'
              ]
            }
          ]
        }
      },

      /* -------------------- EXTENSION (Opportunity cost) -------------------- */
      {
        key: 'extension',
        contentLayer: 'layer-opp-cost',
        legendLayer: 'layer-legend-extension',
        points: [
          { x: 0.254, y: 0.574, tone: 'amber', label: 'D', gridlines: true, ticks: { x: 'K₁', y: 'C₁' } },
          { x: 0.600, y: 0.203, tone: 'amber', label: 'E', gridlines: true, ticks: { x: 'K₂', y: 'C₂' } }
        ],
        arrows: [
          { d: 'M 0.274,0.566 Q 0.5,0.66 0.584,0.211', tone: 'amber', strokeWidth: 2, dashed: '6 3', markerEnd: 'ppf-occ-end' }
        ],
        texts: [
          // −ΔC: outside Y-axis (x<0 → engine right-anchors automatically)
          { x: -0.03, y: 0.389, text: '−ΔC', tone: 'amber', bold: true },
          // +ΔK: below X-axis
          { x: 0.427, y: -0.05, text: '+ΔK', tone: 'amber', bold: true }
        ],
        legend: {
          x: 600,
          title: { tone: 'amber', text: 'Movement along PPF = opportunity cost' },
          sections: [
            {
              header: { text: 'OPPORTUNITY COST', tone: 'amber' },
              body: [
                'Moving D → E:',
                { text: '+ more capital goods',  tone: 'green', bold: true },
                { text: '− fewer consumer goods', tone: 'rose',  bold: true }
              ]
            },
            {
              header: { text: 'WHY BOWED OUT', tone: 'amber' },
              body: [
                'Resource adaptability falls as the',
                'economy specialises. To gain more',
                'capital goods, you must give up',
                'progressively more consumer goods.',
                { text: '= Increasing opportunity cost', tone: 'gray', italic: true, fontSize: 12 }
              ]
            }
          ]
        }
      },

      /* -------------------- SHIFT (Shifts) -------------------- */
      {
        key: 'shift',
        contentLayer: 'layer-shift-curves',
        legendLayer: 'layer-legend-shift',
        curves: [
          { id: 'ppf1-ghost', d: 'M 0,0.643 C 0.36,0.643 0.65,0.229 0.65,0.014', tone: 'blue', strokeWidth: 2, dashed: '9 5', opacity: 0.55 },
          { id: 'ppf2', d: 'M 0,0.814 C 0.44,0.814 0.8,0.257 0.8,0.014', tone: 'blue', label: 'PPF₂', strokeWidth: 3 },
          { id: 'ppf3', d: 'M 0,0.457 C 0.23,0.457 0.48,0.143 0.48,0.014', tone: 'blue', label: 'PPF₃', strokeWidth: 3 }
        ],
        arrows: [
          // Outward shift: ray cast perpendicular from PPF₁ at t=0.55, ends where it intersects PPF₂
          { perpendicular: { from: 'ppf1', t: 0.55, to: 'ppf2' },
            tone: 'green', strokeWidth: 3, lineCap: 'round',
            markerStart: 'ppf-shift-out-start', markerEnd: 'ppf-shift-out-end' },
          // Inward shift: ray cast perpendicular from PPF₁ at t=0.35, ends where it intersects PPF₃
          { perpendicular: { from: 'ppf1', t: 0.35, to: 'ppf3' },
            tone: 'rose', strokeWidth: 3, lineCap: 'round',
            markerStart: 'ppf-shift-in-start', markerEnd: 'ppf-shift-in-end' }
        ],
        legend: {
          x: 600,
          title: { tone: 'green', text: 'Shift of PPF = change in productive capacity' },
          sections: [
            {
              header: { text: 'PPF SHIFTS', tone: 'green' },
              rows: [
                { marker: 'line', tone: 'blue', label: 'PPF₂ – outward',
                  subLines: ['Better technology / More resources', '/ Higher productivity'] },
                { marker: 'line', tone: 'blue', label: 'PPF₃ – inward',
                  subLines: ['War / natural disaster', '/ Capital depreciation'] }
              ]
            },
            {
              header: { text: 'MOVEMENT ALONG PPF₁', tone: 'slate' },
              body: [
                'Just reallocation – no change',
                'in capacity.'
              ]
            }
          ]
        }
      },

      /* -------------------- EFFICIENCY (Types of efficiency) -------------------- */
      {
        key: 'efficiency',
        contentLayer: 'layer-efficiency',
        legendLayer: 'layer-legend-efficiency',
        points: [
          { x: 0.460, y: 0.408, tone: 'purple', label: 'F', desc: '– Productive efficiency',         gridlines: 'purple' },
          { x: 0.342, y: 0.517, tone: 'cyan',   label: 'G', desc: '– Allocative efficiency (P=MC)' },
          { x: 0.230, y: 0.263, tone: 'gray',   label: 'H', desc: '– Inefficient (inside PPF)' }
        ],
        legend: {
          x: 600,
          title: { tone: 'purple', text: 'Productive ≠ allocative efficiency' },
          sections: [
            {
              header: { text: 'EFFICIENCY', tone: 'purple' },
              rows: [
                { tone: 'purple', label: 'F – Productive efficiency',
                  subLines: ['ANY point on the PPF – no waste'] },
                { tone: 'cyan',   label: 'G – Allocative efficiency',
                  subLines: ['The ONE point society wants most', '(price = marginal cost)'] },
                { tone: 'gray',   label: 'H – Inefficient',
                  subLines: ['Inside PPF – resources idle'] }
              ]
            },
            {
              header: { text: 'KEY INSIGHT', tone: 'cyan' },
              body: [
                'Many points are productively',
                'efficient. Only ONE is also',
                { text: 'allocatively efficient – G.', tone: 'cyan', bold: true }
              ]
            }
          ]
        }
      }
    ]
  };
})();
