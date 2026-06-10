/* ============================================================
   Minimum wage in a monopsony — engine spec for monopsonyMinWage
   (Protecting suppliers/employees). Migrated from a hand-rolled SVG.

   Persistent: ACL = S, MCL (2x ACL slope), MRP (downward).
   States (cumulative show: ['mmw-*']):
     mmw-1  monopsony outcome (L_m where MCL = MRP, wage W_m on ACL)
     mmw-2  a minimum wage above W_m: it can raise BOTH the wage and
            employment (wage ↑ to W_min, jobs ↑ to L_min on the supply curve)
   ============================================================ */
(function () {
  'use strict';
  window.ECONOS_MONOPSONY_MIN_WAGE_SPEC = {
    width: 740, height: 570,
    chartArea: { x: 66, y: 30, width: 628, height: 470 },
    className: 'monopsony-min-wage-svg', background: '#FFFFFF',
    layers: ['mmw-1', 'mmw-2'],
    axes: { x: { label: 'Employment (L)' }, y: { label: 'Wage' } },
    curves: [
      { id: 'ACL', d: 'M 0,0.135 L 0.931,0.734', tone: 'green', label: 'ACL = S', strokeWidth: 2.4, labelDx: 6, labelDy: -4, anchor: 'start' },
      { id: 'MCL', d: 'M 0,0.135 L 0.428,0.686', tone: 'rose', label: 'MCL', strokeWidth: 2.4, labelDx: 6, labelDy: -4, anchor: 'start' },
      { id: 'MRP', d: 'M 0,0.865 L 0.931,0.201', tone: 'blue', label: 'MRP', strokeWidth: 2.4, labelDx: 6, labelDy: 10, anchor: 'start' },
      { id: '_wmin', shape: { type: 'horizontal', y: 0.453, from: 0, to: 0.55 }, tone: 'purple', strokeWidth: 2.6, layer: 'mmw-2' }
    ],
    points: [
      { layer: 'mmw-1', intersection: { curves: ['MCL', 'MRP'], near: [0.366, 0.606] }, tone: 'slate', radius: 6, hollow: true },
      { layer: 'mmw-1', x: 0.366, on: 'ACL', tone: 'rose', radius: 6 },
      { layer: 'mmw-2', x: 0.495, on: 'ACL', tone: 'purple', radius: 6 }
    ],
    arrows: [
      { layer: 'mmw-1', x1: 0.366, y1: 0.606, x2: 0.366, y2: 0, tone: 'slate', strokeWidth: 1.3, dashed: '3 3', buffer: 0 },
      { layer: 'mmw-1', x1: 0.366, y1: 0.606, x2: 0.366, y2: 0.369, tone: 'rose', strokeWidth: 1.3, dashed: '4 3', buffer: 0 },
      { layer: 'mmw-1', x1: 0.366, y1: 0.369, x2: 0, y2: 0.369, tone: 'rose', strokeWidth: 1.3, dashed: '4 3', buffer: 0 },
      { layer: 'mmw-2', x1: 0.495, y1: 0.453, x2: 0.495, y2: 0, tone: 'purple', strokeWidth: 1.3, dashed: '3 3', buffer: 0 },
      { layer: 'mmw-2', x1: 0.028, y1: 0.372, x2: 0.028, y2: 0.448, tone: 'green', strokeWidth: 2.2, markerEnd: 'econos-arrow-green', buffer: 0 },
      { layer: 'mmw-2', x1: 0.38, y1: 0.05, x2: 0.485, y2: 0.05, tone: 'green', strokeWidth: 2.2, markerEnd: 'econos-arrow-green', buffer: 0 }
    ],
    texts: [
      { layer: 'mmw-1', x: 0.366, y: -0.06, text: 'L_m', tone: 'slate', bold: true, anchor: 'middle', fontSize: 12 },
      { layer: 'mmw-1', x: -0.02, y: 0.369, text: 'W_m', tone: 'rose', bold: true, anchor: 'end', fontSize: 12 },
      { layer: 'mmw-2', x: -0.02, y: 0.453, text: 'W_min', tone: 'purple', bold: true, anchor: 'end', fontSize: 12 },
      { layer: 'mmw-2', x: 0.30, y: 0.50, text: 'minimum wage', tone: 'purple', bold: true, anchor: 'start', fontSize: 10 },
      { layer: 'mmw-2', x: 0.495, y: -0.06, text: 'L_min', tone: 'purple', bold: true, anchor: 'middle', fontSize: 12 },
      { layer: 'mmw-2', x: 0.06, y: 0.41, text: 'wage ↑', tone: 'green', bold: true, anchor: 'start', fontSize: 9.5 },
      { layer: 'mmw-2', x: 0.432, y: 0.10, text: 'jobs ↑', tone: 'green', bold: true, anchor: 'middle', fontSize: 9.5 }
    ]
  };
})();
