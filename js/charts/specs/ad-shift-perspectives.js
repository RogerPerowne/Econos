/* ============================================================
   AD Shift: Classical vs Keynesian — engine spec for adShiftPerspectives.
   Aggregate-supply card 8 "AD shifts: Classical vs Keynesian outcomes".

   This is the prototype card for the Classical/Keynesian PERSPECTIVE
   toggle. Same chart, same AD₁ → AD₂ shift, but the AS curve and the
   resulting equilibrium move are drawn under EITHER school depending
   on the active toggle.

   Layout (chart-space):
     AD₁ slope -1 passing through Classical (0.65, 0.25) and Keynesian
         (0.60, 0.30) — same AD curve, both interpretations.
     AD₂ shifted right by 0.12 (same slope) — same shock under both.

     Classical (vertical LRAS at Yf=0.65):
       E₁_C  = (0.65, 0.250)   on AD₁ ∩ LRAS, at full capacity
       E₂_C  = (0.65, 0.370)   directly above E₁_C — only P rises
              ΔP = +0.120, ΔY = 0   → pure demand-pull inflation

     Keynesian (reverse-L AS, flat range LOW at y=0.15):
       E₁_K  = (0.600, 0.300)  on the steep / near-vertical section
                               (textbook "near full capacity"
                                Keynesian equilibrium)
       E₂_K  = (0.621, 0.398)  small Y rise + substantial P rise —
                               on the rising section, demand is
                               mostly absorbed by inflation with
                               only a marginal output gain
              ΔP = +0.098, ΔY = +0.021

   Pedagogical contrast: NEAR capacity, both schools predict mostly
   inflation. Keynes admits some short-run Y gain because the curve
   isn't strictly vertical until Yf — but the "free lunch" only
   appears deep on the FLAT range (a separate scenario, not shown
   here). This is the realistic at-capacity comparison.
   ============================================================ */
(function () {
  'use strict';

  var YF = 0.65;
  var P_FLAT = 0.15;
  // Classical equilibria — pure vertical move at Yf
  var P1_C = 0.250, P2_C = 0.370;
  // Keynesian equilibria — diagonal move on the steep section
  var Y1_K = 0.600, P1_K = 0.300;
  var Y2_K = 0.621, P2_K = 0.398;

  window.ECONOS_AD_SHIFT_PERSPECTIVES_SPEC = {
    width: 440,
    height: 340,
    chartArea: { x: 55, y: 35, width: 360, height: 254 },
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
      /* ── Shared: AD₁ (always visible) — passes through BOTH
            Classical (0.65, 0.25) AND Keynesian (0.60, 0.30) ── */
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

      /* ── Keynesian perspective: reverse-L AS, low flat range,
            steep rising section, asymptotic vertical at Yf.
            Control points chosen so AD₁ ∩ curve = (0.600, 0.300)
            and AD₂ ∩ curve = (0.621, 0.398). ── */
      { d: 'M 0.050,' + P_FLAT + ' L 0.450,' + P_FLAT +
            ' C 0.557,' + P_FLAT + ' ' + YF + ',0.191 ' + YF + ',0.950',
        tone: 'amber', label: 'AS', strokeWidth: 2.5,
        labelDx: 0, labelDy: -10, anchor: 'middle',
        perspective: 'keynesian' }
    ],

    points: [
      /* ── Classical: E₁ at (Yf, P₁) — gridlines + ticks ── */
      { x: YF, y: P1_C, tone: 'blue', radius: 5.5, hollow: true,
        gridlines: 'slate', ticks: { x: 'Yf', y: 'P₁' },
        label: 'E₁', labelDx: 10, labelDy: -4, anchor: 'start',
        perspective: 'classical' },

      /* ── Classical: E₂ at (Yf, P₂) — only P rose, layer 2 ── */
      { x: YF, y: P2_C, tone: 'blue', radius: 5.5, hollow: true,
        label: 'E₂', labelDx: 10, labelDy: -4, anchor: 'start',
        perspective: 'classical', layer: 'idl-2' },

      /* ── Keynesian: E₁ on the steep section, near Yf — gridlines + ticks ── */
      { x: Y1_K, y: P1_K, tone: 'amber', radius: 5.5, hollow: true,
        gridlines: 'slate', ticks: { x: 'Y₁', y: 'P₁' },
        label: 'E₁', labelDx: -10, labelDy: -4, anchor: 'end',
        perspective: 'keynesian' },

      /* ── Keynesian: E₂ — small Y rise + substantial P rise, layer 2 ── */
      { x: Y2_K, y: P2_K, tone: 'amber', radius: 5.5, hollow: true,
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

      /* ── Keynesian layer 2: DIAGONAL arrow E₁ → E₂ — mostly
            up (P rising) with slight right-tilt (small Y rise) ── */
      { x1: Y1_K + 0.005, y1: P1_K + 0.03, x2: Y2_K - 0.005, y2: P2_K - 0.03,
        tone: 'amber', strokeWidth: 2,
        markerEnd: 'asp-arr-amber', buffer: 0,
        perspective: 'keynesian', layer: 'idl-2' },

      /* ── Classical layer 2: dashed P₂ gridline ── */
      { x1: 0, y1: P2_C, x2: YF, y2: P2_C,
        tone: 'blue', strokeWidth: 1, dashed: '4 3', buffer: 0,
        perspective: 'classical', layer: 'idl-2' },

      /* ── Keynesian layer 2: dashed P₂ horizontal gridline ── */
      { x1: 0, y1: P2_K, x2: Y2_K, y2: P2_K,
        tone: 'amber', strokeWidth: 1, dashed: '4 3', buffer: 0,
        perspective: 'keynesian', layer: 'idl-2' }
    ],

    texts: [
      /* ── Classical layer 2: P₂ tick ── */
      { x: -0.022, y: P2_C, text: 'P₂', tone: 'blue', bold: true,
        fontSize: 12, anchor: 'end',
        perspective: 'classical', layer: 'idl-2' },

      /* ── Keynesian layer 2: P₂ tick (Y₂ omitted — too close to Y₁
            to avoid label collision; small ΔY described in body text) ── */
      { x: -0.022, y: P2_K, text: 'P₂', tone: 'amber', bold: true,
        fontSize: 12, anchor: 'end',
        perspective: 'keynesian', layer: 'idl-2' }
    ]
  };
})();
