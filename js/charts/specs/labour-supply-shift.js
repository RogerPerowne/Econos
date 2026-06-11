/* ============================================================
   Shifts in labour supply — engine spec for labourSupplyShift
   (Supply-of-labour card 3).

   Shift-styling rules (sitewide convention, themes 1–2):
     • original curve goes solid → dashed once shifted away from; the
       new curve is drawn solid.
     • the curve keeps its identity colour — supply stays blue in every
       state (S, S₁, S₂ are all the same supply line).
     • the shift arrow sits BETWEEN the two curves, clear of labels.

   Exclusive views (each `show` lists ONE layer):
     lss-1  original supply S (solid)
     lss-2  supply increases: S dashed (from) + S₁ solid (to)
     lss-3  supply decreases: S dashed (from) + S₂ solid (to)
   ============================================================ */
(function () {
  'use strict';
  var S  = 'M 0.069,0.073 L 0.897,0.839';   // original
  var S1 = 'M 0.241,0.073 L 0.966,0.745';    // shifted right (increase)
  var S2 = 'M 0,0.197 L 0.724,0.839';        // shifted left (decrease)

  window.ECONOS_LABOUR_SUPPLY_SHIFT_SPEC = {
    width: 740, height: 570,
    chartArea: { x: 66, y: 30, width: 628, height: 470 },
    className: 'labour-supply-shift-svg',
    background: '#FFFFFF',
    layers: ['lss-1', 'lss-2', 'lss-3'],
    layerMode: 'exclusive',
    axes: { x: { label: 'Quantity of labour (L)' }, y: { label: 'Wage' } },
    curves: [
      // ── lss-1: original supply, solid ───────────────────────
      { id: 'Sa', d: S, tone: 'blue', label: 'S', strokeWidth: 2.6, labelDx: 6, labelDy: 4, anchor: 'start', layer: 'lss-1' },

      // ── lss-2: increase — original dashed (from) + new solid (to) ─
      { id: 'Sb', d: S, tone: 'blue', dashed: '7 4', opacity: 0.7, label: 'S', strokeWidth: 2.2, labelDx: 6, labelDy: 4, anchor: 'start', layer: 'lss-2' },
      { id: 'S1', d: S1, tone: 'blue', label: 'S₁', strokeWidth: 2.6, labelDx: 6, labelDy: 4, anchor: 'start', layer: 'lss-2' },

      // ── lss-3: decrease — original dashed (from) + new solid (to) ─
      { id: 'Sc', d: S, tone: 'blue', dashed: '7 4', opacity: 0.7, label: 'S', strokeWidth: 2.2, labelDx: 6, labelDy: 4, anchor: 'start', layer: 'lss-3' },
      { id: 'S2', d: S2, tone: 'blue', label: 'S₂', strokeWidth: 2.6, labelDx: 6, labelDy: -4, anchor: 'start', layer: 'lss-3' }
    ],
    arrows: [
      // Shift arrows sit perpendicular, between the curves, in the supply colour.
      { x1: 0.450, y1: 0.425, x2: 0.531, y2: 0.337, tone: 'blue', strokeWidth: 2.2, markerEnd: 'econos-arrow-blue', buffer: 4, layer: 'lss-2' },
      { x1: 0.400, y1: 0.379, x2: 0.319, y2: 0.467, tone: 'blue', strokeWidth: 2.2, markerEnd: 'econos-arrow-blue', buffer: 4, layer: 'lss-3' }
    ],
    texts: [
      { layer: 'lss-2', x: 0.447, y: 0.575, text: 'increase', tone: 'slate', bold: true, anchor: 'middle', fontSize: 11 },
      { layer: 'lss-3', x: 0.312, y: 0.245, text: 'decrease', tone: 'slate', bold: true, anchor: 'middle', fontSize: 11 }
    ]
  };
})();
