/* ============================================================
   PPF card 1 — declarative spec for ppfInteractive.

   Legend reworked (Jun 2026) to match the 1.1.1 chart treatment:
   `legendPosition: 'bottom'` renders each per-view description as a
   crisp HTML block that the `.econos-chart-wrap-below` grid lays out
   to the RIGHT of the chart on desktop and stacked beneath it on
   mobile. The content is deliberately slim — short plain lines, no
   colour-key dots, no bold headers — so it reads as a clean caption,
   not a busy legend. The on-chart point/zone/curve labels carry the
   colour coding; this text just explains.

   Coordinates are in chart space (0..1, y up).
   ============================================================ */
(function () {
  'use strict';

  window.ECONOS_PPF_CARD1_SPEC = {
    // Dimensions mirror the 1.1.1 supply-demand chart (≈440-wide viewBox)
    // so on-chart fonts render at the same on-screen size when the
    // legendPosition:'bottom' grid puts the chart in its desktop column.
    legendPosition: 'bottom',
    height: 360,
    chartArea: { x: 60, y: 44, width: 350, height: 276 },
    className: 'ppf-svg',
    axes: {
      x: { label: 'Capital Goods' },
      y: { label: 'Consumer Goods' }
    },
    defs:
      '<marker id="ppf-occ-end" viewBox="0 0 8 6" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#D97706"/></marker>' +
      '<marker id="ppf-shift-out-end" viewBox="0 0 8 6" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#059669"/></marker>' +
      '<marker id="ppf-shift-out-start" viewBox="0 0 8 6" markerWidth="6" markerHeight="6" refX="2" refY="3" orient="auto"><path d="M8,0 L8,6 L0,3 z" fill="#059669"/></marker>' +
      '<marker id="ppf-shift-in-end" viewBox="0 0 8 6" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#DC2626"/></marker>' +
      '<marker id="ppf-shift-in-start" viewBox="0 0 8 6" markerWidth="6" markerHeight="6" refX="2" refY="3" orient="auto"><path d="M8,0 L8,6 L0,3 z" fill="#DC2626"/></marker>',
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
          { x: 0.46, y: 0.409, tone: 'blue',  label: 'A', gridlines: 'gray' },
          { x: 0.24, y: 0.257, tone: 'amber', label: 'B' },
          { x: 0.67, y: 0.571, tone: 'rose',  label: 'C' }
        ],
        zones: [
          { x: 0.08, y: 0.086, text: 'Inefficient zone',  tone: 'amber' },
          { x: 0.74, y: 0.700, text: 'Unattainable zone', tone: 'rose' }
        ],
        legend: {
          sections: [{ body: [
            '<strong style="color:#2563EB;">A · on the curve</strong> — efficient, no waste.',
            '<strong style="color:#D97706;">B · inside</strong> — resources lie idle.',
            '<strong style="color:#DC2626;">C · outside</strong> — not possible with today’s resources.'
          ] }]
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
          { d: 'M 0.274,0.566 Q 0.5,0.66 0.584,0.211', tone: 'amber', strokeWidth: 1.6, dashed: '6 3', markerEnd: 'ppf-occ-end' }
        ],
        texts: [
          { x: -0.03, y: 0.389, text: '−ΔC', tone: 'amber', bold: true },
          { x: 0.427, y: -0.05, text: '+ΔK', tone: 'amber', bold: true }
        ],
        legend: {
          sections: [{ body: [
            '<strong style="color:#D97706;">Moving D → E:</strong> gain capital goods, lose consumer goods.',
            'That sacrifice is the <strong style="color:#D97706;">opportunity cost</strong>.',
            'The bowed curve means it rises as you specialise.'
          ] }]
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
          { perpendicular: { from: 'ppf1', t: 0.55, to: 'ppf2' },
            tone: 'green', strokeWidth: 1.8, lineCap: 'round',
            markerStart: 'ppf-shift-out-start', markerEnd: 'ppf-shift-out-end' },
          { perpendicular: { from: 'ppf1', t: 0.35, to: 'ppf3' },
            tone: 'rose', strokeWidth: 1.8, lineCap: 'round',
            markerStart: 'ppf-shift-in-start', markerEnd: 'ppf-shift-in-end' }
        ],
        texts: [
          { x: 0.62, y: 0.66, text: 'Outward', tone: 'green', bold: true },
          { x: 0.30, y: 0.10, text: 'Inward',  tone: 'rose',  bold: true }
        ],
        legend: {
          sections: [{ body: [
            '<strong style="color:#059669;">PPF₂ · outward</strong> — more capacity (better tech, more resources).',
            '<strong style="color:#DC2626;">PPF₃ · inward</strong> — lost capacity (war, disaster, depreciation).',
            'Moving along one curve is reallocation, not growth.'
          ] }]
        }
      },

      /* -------------------- EFFICIENCY (Types of efficiency) -------------------- */
      {
        key: 'efficiency',
        contentLayer: 'layer-efficiency',
        legendLayer: 'layer-legend-efficiency',
        points: [
          { x: 0.460, y: 0.408, tone: 'purple', label: 'F', gridlines: 'purple' },
          { x: 0.342, y: 0.517, tone: 'cyan',   label: 'G' },
          { x: 0.230, y: 0.263, tone: 'gray',   label: 'H' }
        ],
        legend: {
          sections: [{ body: [
            'Any point on the curve (like <strong style="color:#7C3AED;">F</strong>) is productively efficient.',
            'Only <strong style="color:#0891B2;">G</strong> is allocatively efficient — what society wants most.',
            '<strong style="color:#64748B;">H · inside</strong> the curve wastes resources.'
          ] }]
        }
      }
    ]
  };
})();
