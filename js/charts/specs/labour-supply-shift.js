/* ============================================================
   Shifts in labour supply — engine spec for labourSupplyShift
   (Supply-of-labour card 3). Migrated from a hand-rolled SVG.

   States (cumulative show: ['lss-*']):
     lss-1  original S
     lss-2  supply increases → S shifts right (S₁)
     lss-3  supply decreases → S shifts left (S₂)
   ============================================================ */
(function () {
  'use strict';
  window.ECONOS_LABOUR_SUPPLY_SHIFT_SPEC = {
    width: 740, height: 570,
    chartArea: { x: 66, y: 30, width: 628, height: 470 },
    className: 'labour-supply-shift-svg',
    background: '#FFFFFF',
    layers: ['lss-1', 'lss-2', 'lss-3'],
    axes: { x: { label: 'Quantity of labour (L)' }, y: { label: 'Wage' } },
    curves: [
      { id: 'S', d: 'M 0.069,0.073 L 0.897,0.839', tone: 'blue', label: 'S', strokeWidth: 2.6, labelDx: 6, labelDy: 4, anchor: 'start', layer: 'lss-1' },
      { id: 'S1', d: 'M 0.241,0.073 L 0.966,0.745', tone: 'green', dashed: '7 4', label: 'S₁', strokeWidth: 2.4, labelDx: 6, labelDy: 4, anchor: 'start', layer: 'lss-2' },
      { id: 'S2', d: 'M 0,0.197 L 0.724,0.839', tone: 'rose', dashed: '7 4', label: 'S₂', strokeWidth: 2.4, labelDx: 6, labelDy: -4, anchor: 'start', layer: 'lss-3' }
    ],
    arrows: [
      { x1: 0.450, y1: 0.425, x2: 0.531, y2: 0.337, tone: 'green', strokeWidth: 2.2, markerEnd: 'econos-arrow-green', buffer: 4, layer: 'lss-2' },
      { x1: 0.400, y1: 0.379, x2: 0.319, y2: 0.467, tone: 'rose', strokeWidth: 2.2, markerEnd: 'econos-arrow-rose', buffer: 4, layer: 'lss-3' }
    ],
    texts: [
      { layer: 'lss-2', x: 0.447, y: 0.575, text: 'increase', tone: 'green', bold: true, anchor: 'middle', fontSize: 11 },
      { layer: 'lss-3', x: 0.312, y: 0.245, text: 'decrease', tone: 'rose', bold: true, anchor: 'middle', fontSize: 11 }
    ]
  };
})();
