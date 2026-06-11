/* ============================================================
   Monopsony labour market — engine spec for monopsonyLabourDiagram
   (used by Monopsony, Protecting suppliers/employees, Wage determination).
   Migrated from a hand-rolled SVG.

   Persistent: ACL = S (supply), MCL (marginal cost of labour, 2x the ACL
   slope), MRP (labour demand, downward).
   States (cumulative show: ['ms-*']):
     ms-1  monopsony employment L_m where MCL = MRP
     ms-2  monopsony wage W_m read DOWN to the supply curve (ACL)
     ms-3  competitive benchmark (MRP = ACL): higher wage W_c and L_c;
           the W_m..W_c gap is the wage the monopsonist suppresses
   ============================================================ */
(function () {
  'use strict';
  window.ECONOS_MONOPSONY_LABOUR_SPEC = {
    width: 740, height: 570,
    chartArea: { x: 66, y: 30, width: 628, height: 470 },
    className: 'monopsony-labour-svg', background: '#FFFFFF',
    layers: ['ms-1', 'ms-2', 'ms-3'],
    axes: { x: { label: 'Employment (L)' }, y: { label: 'Wage, cost' } },
    curves: [
      { id: 'ACL', d: 'M 0,0.135 L 0.931,0.734', tone: 'green', label: 'ACL = S', strokeWidth: 2.4, labelDx: 6, labelDy: -4, anchor: 'start' },
      { id: 'MCL', d: 'M 0,0.135 L 0.428,0.686', tone: 'rose', label: 'MCL', strokeWidth: 2.4, labelDx: 6, labelDy: -4, anchor: 'start' },
      { id: 'MRP', d: 'M 0,0.865 L 0.931,0.201', tone: 'blue', label: 'MRP', strokeWidth: 2.4, labelDx: 6, labelDy: 10, anchor: 'start' }
    ],
    polygons: [
      { layer: 'ms-3', points: [[0, 0.369], [0.014, 0.369], [0.014, 0.482], [0, 0.482]], tone: 'rose', opacity: 0.72 }
    ],
    points: [
      { layer: 'ms-1', intersection: { curves: ['MCL', 'MRP'], near: [0.366, 0.606] }, tone: 'slate', radius: 6.5, hollow: true },
      { layer: 'ms-2', x: 0.366, on: 'ACL', tone: 'rose', radius: 6 },
      { layer: 'ms-3', intersection: { curves: ['MRP', 'ACL'], near: [0.540, 0.482] }, tone: 'green', radius: 6 }
    ],
    arrows: [
      { layer: 'ms-1', x1: 0.366, y1: 0.606, x2: 0.366, y2: 0, tone: 'slate', strokeWidth: 1.3, dashed: '3 3', buffer: 0 },
      { layer: 'ms-2', x1: 0.366, y1: 0.606, x2: 0.366, y2: 0.369, tone: 'rose', strokeWidth: 1.4, dashed: '4 3', buffer: 0 },
      { layer: 'ms-2', x1: 0.366, y1: 0.369, x2: 0, y2: 0.369, tone: 'rose', strokeWidth: 1.4, dashed: '4 3', buffer: 0 },
      { layer: 'ms-3', x1: 0.540, y1: 0.482, x2: 0.540, y2: 0, tone: 'green', strokeWidth: 1.2, dashed: '3 3', buffer: 0 },
      { layer: 'ms-3', x1: 0.540, y1: 0.482, x2: 0, y2: 0.482, tone: 'green', strokeWidth: 1.2, dashed: '3 3', buffer: 0 }
    ],
    texts: [
      { layer: 'ms-1', x: 0.39, y: 0.63, text: 'MCL = MRP', tone: 'slate', bold: true, anchor: 'start', fontSize: 10 },
      { layer: 'ms-1', x: 0.366, y: -0.06, text: 'L_m', tone: 'slate', bold: true, anchor: 'middle', fontSize: 12 },
      { layer: 'ms-2', x: -0.02, y: 0.369, text: 'W_m', tone: 'rose', bold: true, anchor: 'end', fontSize: 12 },
      { layer: 'ms-3', x: 0.540, y: -0.06, text: 'L_c', tone: 'green', bold: true, anchor: 'middle', fontSize: 12 },
      { layer: 'ms-3', x: -0.02, y: 0.482, text: 'W_c', tone: 'green', bold: true, anchor: 'end', fontSize: 12 },
      { layer: 'ms-3', x: 0.56, y: 0.50, text: 'competitive', tone: 'green', bold: true, anchor: 'start', fontSize: 9.5 }
    ]
  };
})();
