/* ============================================================
   AD Shift: Classical vs Keynesian — engine spec for adShiftPerspectives.
   Aggregate-supply card 8 "AD shifts: Classical vs Keynesian outcomes".

   This is the prototype card for the Classical/Keynesian PERSPECTIVE
   toggle. Same chart, same AD₁ → AD₂ shift, but the AS curve and the
   resulting equilibrium move are drawn under EITHER school depending
   on the active toggle.

   Layout (chart-space):
     AD₁ slope -1 passing through (0.65, 0.25) — touches the Classical
         LRAS at low P and the Keynesian flat range at high-of-flat P.
     AD₂ shifted right by 0.12 (same slope) — same shift under both.

     Classical (vertical LRAS at Yf=0.65):
       E₁_C  = (0.65, 0.25)   on AD₁ ∩ LRAS, low P
       E₂_C  = (0.65, 0.37)   directly above E₁_C — only P rises
              vertical move: ΔP > 0, ΔY = 0  → demand-pull inflation

     Keynesian (reverse-L LRAS at same Yf, flat at y=0.50):
       E₁_K  = (0.40, 0.50)   on AD₁ ∩ flat range
       E₂_K  = (0.52, 0.50)   horizontally to the right — only Y rises
              horizontal move: ΔY > 0, ΔP = 0  → non-inflationary growth

   Narrative views (driven by `layer: 'idl-1'` and `layer: 'idl-2'`):
     base    → AD₁ + AS + E₁ + ticks
     view 1  → AD₁ dashed, AD₂ solid drawn, shift arrow
     view 2  → E₂ revealed + ΔP or ΔY dashed reference + label

   Perspective toggle (driven by `perspective: 'classical' | 'keynesian'`):
     `.chart-classical` parent class shows classical AS + E₁_C + E₂_C
     `.chart-keynesian` parent class shows Keynesian AS + E₁_K + E₂_K
   ============================================================ */
(function () {
  'use strict';

  var YF = 0.65;
  var P1_C = 0.25, P2_C = 0.37;
  var Y1_K = 0.40, Y2_K = 0.52, P_FLAT = 0.50;

  window.ECONOS_AD_SHIFT_PERSPECTIVES_SPEC = {
    width: 440,
    height: 305,
    chartArea: { x: 55, y: 18, width: 360, height: 254 },
    className: 'ad-shift-perspectives-svg',
    layers: ['idl-1', 'idl-2'],
    perspectives: ['classical', 'keynesian'],
    defs:
      '<marker id="asp-arr-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#3B82F6"/></marker>' +
      '<marker id="asp-arr-amber" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#D97706"/></marker>' +
      '<marker id="asp-arr-grey" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#94A3B8"/></marker>',
    axes: {
      x: { label: 'Real output (Y)' },
      y: { label: 'Price level (P)' }
    },

    curves: [
      /* ── Shared: AD₁ (always visible) ── */
      { d: 'M 0.050,0.850 L 0.850,0.050',
        tone: 'blue', label: 'AD₁', strokeWidth: 2,
        labelDx: -6, labelDy: 6, anchor: 'end' },

      /* ── Shared: AD₂ shifted right by 0.12 (layer 1) ── */
      { d: 'M 0.050,0.970 L 0.950,0.070',
        tone: 'blue', label: 'AD₂', strokeWidth: 2,
        labelDx: -6, labelDy: 6, anchor: 'end', layer: 'idl-1' },

      /* ── Classical perspective: vertical LRAS at Yf ── */
      { d: 'M ' + YF + ',0 L ' + YF + ',0.992',
        tone: 'blue', label: 'LRAS', strokeWidth: 2.5,
        labelDx: 0, labelDy: -10, anchor: 'middle',
        perspective: 'classical' },

      /* ── Keynesian perspective: reverse-L AS curve ── */
      { d: 'M 0.050,' + P_FLAT + ' L 0.550,' + P_FLAT +
            ' C 0.620,' + P_FLAT + ' ' + YF + ',0.700 ' + YF + ',0.950',
        tone: 'amber', label: 'AS', strokeWidth: 2.5,
        labelDx: 0, labelDy: -10, anchor: 'middle',
        perspective: 'keynesian' }
    ],

    points: [
      /* ── Classical: E₁ at (Yf, P₁_C) with gridlines + ticks ── */
      { x: YF, y: P1_C, tone: 'blue', radius: 5.5, hollow: true,
        gridlines: 'slate', ticks: { x: 'Yf', y: 'P₁' },
        label: 'E₁', labelDx: 10, labelDy: -4, anchor: 'start',
        perspective: 'classical' },

      /* ── Classical: E₂ at (Yf, P₂_C) — only P rose, layer 2 ── */
      { x: YF, y: P2_C, tone: 'blue', radius: 5.5, hollow: true,
        label: 'E₂', labelDx: 10, labelDy: -4, anchor: 'start',
        perspective: 'classical', layer: 'idl-2' },

      /* ── Keynesian: E₁ on the flat range with gridlines + ticks ── */
      { x: Y1_K, y: P_FLAT, tone: 'amber', radius: 5.5, hollow: true,
        gridlines: 'slate', ticks: { x: 'Y₁', y: 'P̄' },
        label: 'E₁', labelDx: -10, labelDy: -4, anchor: 'end',
        perspective: 'keynesian' },

      /* ── Keynesian: E₂ to the right on the flat — only Y rose, layer 2 ── */
      { x: Y2_K, y: P_FLAT, tone: 'amber', radius: 5.5, hollow: true,
        label: 'E₂', labelDx: 10, labelDy: -4, anchor: 'start',
        perspective: 'keynesian', layer: 'idl-2' }
    ],

    arrows: [
      /* ── Layer 1: rightward shift arrow connecting AD₁ → AD₂ ── */
      { x1: 0.420, y1: 0.480, x2: 0.560, y2: 0.460,
        tone: 'slate', strokeWidth: 1.8,
        markerEnd: 'asp-arr-grey', buffer: 0, layer: 'idl-1' },

      /* ── Classical layer 2: vertical "P rises" arrow E₁ → E₂ ── */
      { x1: YF, y1: P1_C + 0.04, x2: YF, y2: P2_C - 0.04,
        tone: 'blue', strokeWidth: 2,
        markerEnd: 'asp-arr-blue', buffer: 0,
        perspective: 'classical', layer: 'idl-2' },

      /* ── Keynesian layer 2: horizontal "Y rises" arrow E₁ → E₂ ── */
      { x1: Y1_K + 0.04, y1: P_FLAT, x2: Y2_K - 0.04, y2: P_FLAT,
        tone: 'amber', strokeWidth: 2,
        markerEnd: 'asp-arr-amber', buffer: 0,
        perspective: 'keynesian', layer: 'idl-2' },

      /* ── Classical layer 2: dashed P₂ gridline ── */
      { x1: 0, y1: P2_C, x2: YF, y2: P2_C,
        tone: 'blue', strokeWidth: 1, dashed: '4 3', buffer: 0,
        perspective: 'classical', layer: 'idl-2' },

      /* ── Keynesian layer 2: dashed Y₂ gridline ── */
      { x1: Y2_K, y1: 0, x2: Y2_K, y2: P_FLAT,
        tone: 'amber', strokeWidth: 1, dashed: '4 3', buffer: 0,
        perspective: 'keynesian', layer: 'idl-2' }
    ],

    texts: [
      /* ── Classical layer 2: P₂ tick ── */
      { x: -0.022, y: P2_C, text: 'P₂', tone: 'blue', bold: true,
        fontSize: 12, anchor: 'end',
        perspective: 'classical', layer: 'idl-2' },

      /* ── Keynesian layer 2: Y₂ tick ── */
      { x: Y2_K, y: -0.063, text: 'Y₂', tone: 'amber', bold: true,
        fontSize: 12, anchor: 'middle',
        perspective: 'keynesian', layer: 'idl-2' }
    ]
  };
})();
