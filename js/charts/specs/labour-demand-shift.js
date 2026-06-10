/* ============================================================
   Shifts in labour demand — engine spec for labourDemandShift
   (Demand-for-labour card 3). Migrated from a hand-rolled SVG.

   Persistent: fixed wage line W.
   States (cumulative show: ['lds-*']):
     lds-1  original D_L (employment L₁ at wage W)
     lds-2  demand rises → D_L shifts right (L₂)
     lds-3  demand falls → D_L shifts left (L₀)
   ============================================================ */
(function () {
  'use strict';
  var W = 0.474;
  window.ECONOS_LABOUR_DEMAND_SHIFT_SPEC = {
    width: 740, height: 570,
    chartArea: { x: 66, y: 30, width: 628, height: 470 },
    className: 'labour-demand-shift-svg',
    background: '#FFFFFF',
    layers: ['lds-1', 'lds-2', 'lds-3'],
    axes: { x: { label: 'Labour employed (L)' }, y: { label: 'Wage' } },
    curves: [
      { id: 'W', shape: { type: 'horizontal', y: W, from: 0, to: 0.9 }, tone: 'slate', strokeWidth: 1.3, dashed: '5 4' },
      { id: 'DL', d: 'M 0,0.803 L 0.828,0.073', tone: 'blue', label: 'D_L', strokeWidth: 2.6, labelDx: -4, labelDy: 12, anchor: 'end', layer: 'lds-1' },
      { id: 'DL1', d: 'M 0.172,0.803 L 0.931,0.135', tone: 'green', dashed: '7 4', label: 'D_L₁', strokeWidth: 2.4, labelDx: 6, labelDy: 0, anchor: 'start', layer: 'lds-2' },
      { id: 'DL2', d: 'M 0,0.650 L 0.655,0.073', tone: 'rose', dashed: '7 4', label: 'D_L₂', strokeWidth: 2.4, labelDx: 6, labelDy: 4, anchor: 'start', layer: 'lds-3' }
    ],
    points: [
      { layer: 'lds-1', x: 0.372, on: 'DL', tone: 'blue', radius: 5.5 },
      { layer: 'lds-2', x: 0.545, on: 'DL1', tone: 'green', radius: 5.5 },
      { layer: 'lds-3', x: 0.200, on: 'DL2', tone: 'rose', radius: 5.5 }
    ],
    arrows: [
      { layer: 'lds-1', x1: 0.372, y1: W, x2: 0.372, y2: 0, tone: 'slate', strokeWidth: 1.1, dashed: '3 3', buffer: 0 },
      { layer: 'lds-2', x1: 0.545, y1: W, x2: 0.545, y2: 0, tone: 'green', strokeWidth: 1.1, dashed: '3 3', buffer: 0 },
      { layer: 'lds-2', x1: 0.431, y1: 0.620, x2: 0.559, y2: 0.620, tone: 'green', strokeWidth: 2.2, markerEnd: 'econos-arrow-green', buffer: 0 },
      { layer: 'lds-3', x1: 0.200, y1: W, x2: 0.200, y2: 0, tone: 'rose', strokeWidth: 1.1, dashed: '3 3', buffer: 0 },
      { layer: 'lds-3', x1: 0.328, y1: 0.321, x2: 0.217, y2: 0.321, tone: 'rose', strokeWidth: 2.2, markerEnd: 'econos-arrow-rose', buffer: 0 }
    ],
    texts: [
      { x: -0.02, y: W, text: 'W', tone: 'slate', bold: true, anchor: 'end', fontSize: 12 },
      { layer: 'lds-1', x: 0.372, y: -0.06, text: 'L₁', tone: 'slate', bold: true, anchor: 'middle', fontSize: 12 },
      { layer: 'lds-2', x: 0.545, y: -0.06, text: 'L₂', tone: 'green', bold: true, anchor: 'middle', fontSize: 12 },
      { layer: 'lds-3', x: 0.200, y: -0.06, text: 'L₀', tone: 'rose', bold: true, anchor: 'middle', fontSize: 12 }
    ]
  };
})();
