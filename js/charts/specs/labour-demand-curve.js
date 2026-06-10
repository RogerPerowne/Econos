/* ============================================================
   Labour demand (D_L = MRP) — engine spec for labourDemandCurve
   (Demand-for-labour card 2). Migrated from a hand-rolled SVG so it
   fills the stage and the geometry is engine-resolved.

   Persistent: D_L = MRP (downward).
   States (cumulative show: ['ld-*']):
     []            → just the curve
     ld-1          → wage W₁ → employment L₁ (point on the curve)
     ld-1, ld-2    → the hiring rule (MRP = wage) annotation
   ============================================================ */
(function () {
  'use strict';
  var W1 = 0.511, L1 = 0.398;
  window.ECONOS_LABOUR_DEMAND_SPEC = {
    width: 740, height: 570,
    chartArea: { x: 66, y: 30, width: 628, height: 470 },
    className: 'labour-demand-svg',
    background: '#FFFFFF',
    layers: ['ld-1', 'ld-2'],
    axes: { x: { label: 'Labour employed (L)' }, y: { label: 'Wage, MRP' } },
    curves: [
      { id: 'D', d: 'M 0,0.84 L 0.93,0.07', tone: 'blue',
        label: 'Labour demand = MRP', strokeWidth: 3, labelDx: -6, labelDy: -12, anchor: 'end' }
    ],
    points: [
      { layer: 'ld-1', x: L1, on: 'D', tone: 'blue', radius: 6 }
    ],
    arrows: [
      { layer: 'ld-1', x1: 0, y1: W1, x2: L1, y2: W1, tone: 'slate', strokeWidth: 1.4, dashed: '4 3', buffer: 0 },
      { layer: 'ld-1', x1: L1, y1: W1, x2: L1, y2: 0, tone: 'slate', strokeWidth: 1.4, dashed: '4 3', buffer: 0 },
      { layer: 'ld-2', x1: 0.66, y1: 0.74, x2: L1 + 0.02, y2: W1 + 0.02, tone: 'blue', strokeWidth: 1.4, dashed: '3 3', markerEnd: 'econos-arrow-blue', buffer: 0 }
    ],
    texts: [
      { layer: 'ld-1', x: -0.02, y: W1, text: 'W₁', tone: 'slate', bold: true, anchor: 'end', fontSize: 13 },
      { layer: 'ld-1', x: L1, y: -0.06, text: 'L₁', tone: 'slate', bold: true, anchor: 'middle', fontSize: 13 },
      { layer: 'ld-2', x: 0.67, y: 0.80, text: 'Hire up to where MRP = wage', tone: 'blue', bold: true, anchor: 'start', fontSize: 12 }
    ]
  };
})();
