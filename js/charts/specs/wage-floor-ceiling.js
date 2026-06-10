/* ============================================================
   Wage controls — engine spec for wageFloorCeiling
   (Wage-determination). Migrated from a hand-rolled SVG.

   Persistent: D_L (down), S_L (up).
   States (show: ['wf-*'] — min & max are mutually exclusive):
     wf-eq    free-market equilibrium wage W* and quantity Q*
     wf-min   minimum wage (floor) above W* → excess supply → unemployment
     wf-max   maximum wage (ceiling) below W* → excess demand → shortage
   ============================================================ */
(function () {
  'use strict';
  var E = { x: 0.466, y: 0.456 }, Whi = 0.657, Wlo = 0.255, Ql = 0.221, Qr = 0.709, mid = 0.465;
  window.ECONOS_WAGE_FLOOR_CEILING_SPEC = {
    width: 740, height: 570,
    chartArea: { x: 66, y: 30, width: 628, height: 470 },
    className: 'wage-floor-ceiling-svg', background: '#FFFFFF',
    layers: ['wf-eq', 'wf-min', 'wf-max'],
    axes: { x: { label: 'Quantity of labour (L)' }, y: { label: 'Wage' } },
    curves: [
      { id: 'D', d: 'M 0,0.839 L 0.931,0.073', tone: 'blue', label: 'D_L', strokeWidth: 2.6, labelDx: 6, labelDy: 6, anchor: 'start' },
      { id: 'S', d: 'M 0,0.073 L 0.931,0.839', tone: 'green', label: 'S_L', strokeWidth: 2.6, labelDx: 6, labelDy: -6, anchor: 'start' },
      { id: '_wmin', shape: { type: 'horizontal', y: Whi, from: 0, to: 0.93 }, tone: 'purple', strokeWidth: 2.4, layer: 'wf-min' },
      { id: '_wmax', shape: { type: 'horizontal', y: Wlo, from: 0, to: 0.93 }, tone: 'purple', strokeWidth: 2.4, layer: 'wf-max' }
    ],
    points: [
      { layer: 'wf-eq', intersection: { curves: ['D', 'S'], near: [E.x, E.y] }, tone: 'slate', radius: 6, hollow: true },
      { layer: 'wf-min', x: Ql, on: 'D', tone: 'blue', radius: 5 },
      { layer: 'wf-min', x: Qr, on: 'S', tone: 'green', radius: 5 },
      { layer: 'wf-max', x: Ql, on: 'S', tone: 'green', radius: 5 },
      { layer: 'wf-max', x: Qr, on: 'D', tone: 'blue', radius: 5 }
    ],
    arrows: [
      { layer: 'wf-eq', x1: 0, y1: E.y, x2: E.x, y2: E.y, tone: 'slate', strokeWidth: 1.2, dashed: '4 3', buffer: 0 },
      { layer: 'wf-eq', x1: E.x, y1: E.y, x2: E.x, y2: 0, tone: 'slate', strokeWidth: 1.2, dashed: '4 3', buffer: 0 },
      { layer: 'wf-min', x1: mid, y1: 0.71, x2: Ql, y2: 0.71, tone: 'rose', strokeWidth: 2, markerEnd: 'econos-arrow-rose', buffer: 0 },
      { layer: 'wf-min', x1: mid, y1: 0.71, x2: Qr, y2: 0.71, tone: 'rose', strokeWidth: 2, markerEnd: 'econos-arrow-rose', buffer: 0 },
      { layer: 'wf-max', x1: mid, y1: 0.205, x2: Ql, y2: 0.205, tone: 'rose', strokeWidth: 2, markerEnd: 'econos-arrow-rose', buffer: 0 },
      { layer: 'wf-max', x1: mid, y1: 0.205, x2: Qr, y2: 0.205, tone: 'rose', strokeWidth: 2, markerEnd: 'econos-arrow-rose', buffer: 0 }
    ],
    texts: [
      { layer: 'wf-eq', x: -0.02, y: E.y, text: 'W*', tone: 'slate', bold: true, anchor: 'end', fontSize: 12 },
      { layer: 'wf-eq', x: E.x, y: -0.06, text: 'Q*', tone: 'slate', bold: true, anchor: 'middle', fontSize: 12 },
      { layer: 'wf-min', x: -0.02, y: Whi, text: 'W_min', tone: 'purple', bold: true, anchor: 'end', fontSize: 11.5 },
      { layer: 'wf-min', x: mid, y: 0.78, text: 'excess supply → unemployment', tone: 'rose', bold: true, anchor: 'middle', fontSize: 11 },
      { layer: 'wf-min', x: Ql - 0.015, y: Whi - 0.05, text: 'Q_d', tone: 'blue', bold: true, anchor: 'end', fontSize: 10 },
      { layer: 'wf-min', x: Qr + 0.015, y: Whi - 0.05, text: 'Q_s', tone: 'green', bold: true, anchor: 'start', fontSize: 10 },
      { layer: 'wf-max', x: -0.02, y: Wlo, text: 'W_max', tone: 'purple', bold: true, anchor: 'end', fontSize: 11.5 },
      { layer: 'wf-max', x: mid, y: 0.12, text: 'excess demand → shortage', tone: 'rose', bold: true, anchor: 'middle', fontSize: 11 },
      { layer: 'wf-max', x: Ql - 0.015, y: Wlo + 0.05, text: 'Q_s', tone: 'green', bold: true, anchor: 'end', fontSize: 10 },
      { layer: 'wf-max', x: Qr + 0.015, y: Wlo + 0.05, text: 'Q_d', tone: 'blue', bold: true, anchor: 'start', fontSize: 10 }
    ]
  };
})();
