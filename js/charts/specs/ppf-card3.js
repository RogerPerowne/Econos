/* ============================================================
   PPF card 3 — declarative spec for ppfMovesInteractive.
   "Four Types of PPF Movement" — teaches the distinction between
   movement ALONG the PPF (reallocation), recovery from INSIDE
   the PPF (idle resources reactivated), and SHIFTS of the PPF
   itself (capacity change, outward = growth, inward = supply shock).

   Each of the four views maps to a CSS .show-X class:
     - along    → .show-along    (purple, D→E along PPF₁)
     - recovery → .show-recovery (amber, X inside PPF moves out)
     - outward  → .show-outward  (green, PPF₁ → PPF₂)
     - inward   → .show-inward   (rose,  PPF₁ → PPF₃)

   The shift arrows in views 3/4 are NOT eyeballed lines — they
   use the engine's perpendicular ray-cast: anchor on PPF₁,
   normal direction, find intersection with the target curve.
   ============================================================ */
(function () {
  'use strict';

  window.ECONOS_PPF_CARD3_SPEC = {
    // Side-legend → HTML-below: see ppf-card1.js for the rationale.
    legendPosition: 'bottom',
    height: 440,
    chartArea: { x: 60, y: 50, width: 500, height: 350 },
    className: 'ppf-moves-svg',
    axes: {
      x: { label: 'Capital Goods' },
      y: { label: 'Consumer Goods' }
    },
    defs:
      '<marker id="ppfmv-along-end" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#7C3AED"/></marker>' +
      '<marker id="ppfmv-rec-end" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#D97706"/></marker>' +
      '<marker id="ppfmv-out-end" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#059669"/></marker>' +
      '<marker id="ppfmv-out-start" markerWidth="8" markerHeight="8" refX="2" refY="3" orient="auto"><path d="M8,0 L8,6 L0,3 z" fill="#059669"/></marker>' +
      '<marker id="ppfmv-in-end" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#DC2626"/></marker>' +
      '<marker id="ppfmv-in-start" markerWidth="8" markerHeight="8" refX="2" refY="3" orient="auto"><path d="M8,0 L8,6 L0,3 z" fill="#DC2626"/></marker>',

    // Always-visible PPF₁ + the two shifted curves (each in its own layer
    // so .show-outward and .show-inward can fade them independently).
    curves: [
      { id: 'ppf1', d: 'M 0,0.643 C 0.36,0.643 0.65,0.229 0.65,0.014',
        tone: 'blue', label: 'PPF₁', layer: 'layer-ppf1' },
      { id: 'ppf2', d: 'M 0,0.814 C 0.44,0.814 0.8,0.257 0.8,0.014',
        tone: 'green', label: 'PPF₂', layer: 'layer-ppf2' },
      { id: 'ppf3', d: 'M 0,0.457 C 0.23,0.457 0.48,0.143 0.48,0.014',
        tone: 'rose', label: 'PPF₃', layer: 'layer-ppf3' }
    ],

    views: [
      /* -------------------- VIEW 1: along -------------------- */
      {
        key: 'along',
        contentLayer: 'layer-along',
        legendLayer: 'layer-legend-along',
        points: [
          { x: 0.30,  y: 0.549, tone: 'purple', label: 'D', gridlines: true, ticks: { x: 'K₁', y: 'C₁' } },
          { x: 0.578, y: 0.246, tone: 'purple', label: 'E', gridlines: true, ticks: { x: 'K₂', y: 'C₂' } }
        ],
        // Movement-along arrow: quadratic bow slightly above PPF₁ from D to E
        arrows: [
          { d: 'M 0.30,0.549 Q 0.45,0.55 0.578,0.246', tone: 'purple', strokeWidth: 2, dashed: '6 3', markerEnd: 'ppfmv-along-end' }
        ],
        texts: [
          { x: -0.03, y: 0.398, text: '−ΔC', tone: 'purple', bold: true },
          { x: 0.439, y: -0.05, text: '+ΔK', tone: 'purple', bold: true }
        ],
        legend: {
          x: 600,
          title: { tone: 'purple', text: 'Moving along the PPF: reallocation' },
          sections: [
            {
              header: { text: 'WHAT HAPPENS', tone: 'purple' },
              body: [
                'D → E: produce more',
                { text: '+ capital goods (K)', tone: 'green', bold: true },
                { text: '− consumer goods (C)', tone: 'rose', bold: true }
              ]
            },
            {
              header: { text: 'KEY POINT', tone: 'purple' },
              body: [
                'The frontier does NOT move.',
                'Existing resources are just',
                'reallocated between uses.'
              ]
            },
            {
              header: { text: 'OPPORTUNITY COST', tone: 'purple' },
              body: [
                'Every step along the curve',
                'has an opportunity cost –',
                'the slope of the PPF at that point.'
              ]
            }
          ]
        }
      },

      /* -------------------- VIEW 2: recovery -------------------- */
      {
        key: 'recovery',
        contentLayer: 'layer-recovery',
        legendLayer: 'layer-legend-recovery',
        points: [
          { x: 0.26, y: 0.234, tone: 'amber', label: 'X', desc: '– Underemployment' }
        ],
        // Recovery arrow: from X inside the PPF moving toward PPF₁
        arrows: [
          { x1: 0.29, y1: 0.257, x2: 0.436, y2: 0.394, tone: 'amber', strokeWidth: 2.5, dashed: '7 4', markerEnd: 'ppfmv-rec-end' }
        ],
        zones: [
          { x: 0.12, y: 0.08, text: 'Inefficient zone', tone: 'amber' }
        ],
        legend: {
          x: 600,
          title: { tone: 'amber', text: 'Short-run recovery: X moves to PPF₁' },
          sections: [
            {
              header: { text: 'WHAT X REPRESENTS', tone: 'amber' },
              body: [
                'Inside the frontier:',
                'unemployment, idle capacity,',
                'resources not fully used.'
              ]
            },
            {
              header: { text: 'THE RECOVERY', tone: 'amber' },
              body: [
                'Demand rises → firms rehire,',
                'spare capacity reactivated.',
                { text: 'X moves onto PPF₁.', tone: 'green', bold: true }
              ]
            },
            {
              header: { text: 'KEY POINT', tone: 'amber' },
              body: [
                'PPF₁ itself does NOT shift.',
                'This is demand-side / SR growth.',
                'The capacity ceiling is unchanged.'
              ]
            }
          ]
        }
      },

      /* -------------------- VIEW 3: outward shift -------------------- */
      {
        key: 'outward',
        contentLayer: 'layer-outward',
        legendLayer: 'layer-legend-outward',
        arrows: [
          // True perpendicular: anchor PPF₁ at t=0.5, ray to PPF₂
          { perpendicular: { from: 'ppf1', t: 0.5, to: 'ppf2' },
            tone: 'green', strokeWidth: 3, lineCap: 'round',
            markerStart: 'ppfmv-out-start', markerEnd: 'ppfmv-out-end' }
        ],
        legend: {
          x: 600,
          title: { tone: 'green', text: 'Outward shift: long-run growth' },
          sections: [
            {
              header: { text: 'CAUSES OF OUTWARD SHIFT', tone: 'green' },
              body: [
                '⊕  Better technology',
                '⊕  More capital investment',
                '⊕  Population / labour growth',
                '⊕  Education and training',
                '⊕  Improved infrastructure'
              ]
            },
            {
              header: { text: 'KEY POINT', tone: 'green' },
              body: [
                'This is supply-side growth.',
                'Productive capacity permanently',
                { text: 'increases.', tone: 'green', bold: true }
              ]
            },
            {
              header: { text: 'RESULT', tone: 'green' },
              body: [
                { text: 'Previously unattainable combinations', italic: true, fontSize: 12 },
                { text: 'become achievable on PPF₂.', italic: true, fontSize: 12 }
              ]
            }
          ]
        }
      },

      /* -------------------- VIEW 4: inward shift -------------------- */
      {
        key: 'inward',
        contentLayer: 'layer-inward',
        legendLayer: 'layer-legend-inward',
        arrows: [
          // True perpendicular: anchor PPF₁ at t=0.42, ray inward to PPF₃
          { perpendicular: { from: 'ppf1', t: 0.42, to: 'ppf3' },
            tone: 'rose', strokeWidth: 3, lineCap: 'round',
            markerStart: 'ppfmv-in-start', markerEnd: 'ppfmv-in-end' }
        ],
        legend: {
          x: 600,
          title: { tone: 'rose', text: 'Inward shift: supply shock' },
          sections: [
            {
              header: { text: 'CAUSES OF INWARD SHIFT', tone: 'rose' },
              body: [
                '⊖  War / conflict (destroys capital)',
                '⊖  Natural disasters',
                '⊖  "Brain drain" emigration',
                '⊖  Capital depreciation',
                '⊖  Disease / population decline'
              ]
            },
            {
              header: { text: 'KEY POINT', tone: 'rose' },
              body: [
                'Productive capacity falls.',
                'Previously attainable combinations',
                { text: 'become unachievable.', tone: 'rose', bold: true }
              ]
            },
            {
              header: { text: 'WHERE IT BITES', tone: 'rose' },
              body: [
                { text: 'Most acute after sudden shocks:', italic: true, fontSize: 12 },
                { text: 'war, pandemic, major disaster.', italic: true, fontSize: 12 }
              ]
            }
          ]
        }
      }
    ]
  };
})();
