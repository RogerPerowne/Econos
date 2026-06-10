/* ============================================================
   Labour-market equilibrium — engine spec for labourMarketEqDiagram
   (Wage-determination cards 1 & 2). Migrated from a hand-rolled SVG.

   Persistent: D_L (down), S_L (up).
   States (show: ['lme-*'] — surplus & shortage are mutually exclusive):
     lme-eq        equilibrium wage W* and quantity Q* (D_L = S_L)
     lme-surplus   wage above W* → Qs > Qd → surplus / unemployment
     lme-shortage  wage below W* → Qd > Qs → shortage of labour
   ============================================================ */
(function () {
  'use strict';
  var E = { x: 0.466, y: 0.456 }, Whi = 0.657, Wlo = 0.255, Ql = 0.221, Qr = 0.709, mid = 0.465;
  window.ECONOS_LABOUR_MARKET_EQ_SPEC = {
    width: 740, height: 570,
    chartArea: { x: 66, y: 30, width: 628, height: 470 },
    className: 'labour-market-eq-svg', background: '#FFFFFF',
    layers: ['lme-eq', 'lme-surplus', 'lme-shortage'],
    axes: { x: { label: 'Quantity of labour (L)' }, y: { label: 'Wage' } },
    curves: [
      { id: 'D', d: 'M 0,0.839 L 0.931,0.073', tone: 'blue', label: 'D_L', strokeWidth: 2.6, labelDx: 6, labelDy: 6, anchor: 'start' },
      { id: 'S', d: 'M 0,0.073 L 0.931,0.839', tone: 'green', label: 'S_L', strokeWidth: 2.6, labelDx: 6, labelDy: -6, anchor: 'start' },
      { id: '_whi', shape: { type: 'horizontal', y: Whi, from: 0, to: 0.74 }, tone: 'amber', strokeWidth: 1.6, dashed: '5 3', layer: 'lme-surplus' },
      { id: '_wlo', shape: { type: 'horizontal', y: Wlo, from: 0, to: 0.74 }, tone: 'amber', strokeWidth: 1.6, dashed: '5 3', layer: 'lme-shortage' }
    ],
    points: [
      { layer: 'lme-eq', intersection: { curves: ['D', 'S'], near: [E.x, E.y] }, tone: 'slate', radius: 6.5, hollow: true },
      { layer: 'lme-surplus', x: Ql, on: 'D', tone: 'blue', radius: 5 },
      { layer: 'lme-surplus', x: Qr, on: 'S', tone: 'green', radius: 5 },
      { layer: 'lme-shortage', x: Ql, on: 'S', tone: 'green', radius: 5 },
      { layer: 'lme-shortage', x: Qr, on: 'D', tone: 'blue', radius: 5 }
    ],
    arrows: [
      { layer: 'lme-eq', x1: 0, y1: E.y, x2: E.x, y2: E.y, tone: 'slate', strokeWidth: 1.3, dashed: '4 3', buffer: 0 },
      { layer: 'lme-eq', x1: E.x, y1: E.y, x2: E.x, y2: 0, tone: 'slate', strokeWidth: 1.3, dashed: '4 3', buffer: 0 },
      { layer: 'lme-surplus', x1: mid, y1: 0.71, x2: Ql, y2: 0.71, tone: 'rose', strokeWidth: 2, markerEnd: 'econos-arrow-rose', buffer: 0 },
      { layer: 'lme-surplus', x1: mid, y1: 0.71, x2: Qr, y2: 0.71, tone: 'rose', strokeWidth: 2, markerEnd: 'econos-arrow-rose', buffer: 0 },
      { layer: 'lme-shortage', x1: mid, y1: 0.205, x2: Ql, y2: 0.205, tone: 'rose', strokeWidth: 2, markerEnd: 'econos-arrow-rose', buffer: 0 },
      { layer: 'lme-shortage', x1: mid, y1: 0.205, x2: Qr, y2: 0.205, tone: 'rose', strokeWidth: 2, markerEnd: 'econos-arrow-rose', buffer: 0 }
    ],
    texts: [
      { layer: 'lme-eq', x: -0.02, y: E.y, text: 'W*', tone: 'slate', bold: true, anchor: 'end', fontSize: 12 },
      { layer: 'lme-eq', x: E.x, y: -0.06, text: 'Q*', tone: 'slate', bold: true, anchor: 'middle', fontSize: 12 },
      { layer: 'lme-surplus', x: -0.02, y: Whi, text: 'W↑', tone: 'amber', bold: true, anchor: 'end', fontSize: 11.5 },
      { layer: 'lme-surplus', x: mid, y: 0.78, text: 'surplus = unemployment', tone: 'rose', bold: true, anchor: 'middle', fontSize: 11 },
      { layer: 'lme-shortage', x: -0.02, y: Wlo, text: 'W↓', tone: 'amber', bold: true, anchor: 'end', fontSize: 11.5 },
      { layer: 'lme-shortage', x: mid, y: 0.12, text: 'shortage of labour', tone: 'rose', bold: true, anchor: 'middle', fontSize: 11 }
    ]
  };
})();
