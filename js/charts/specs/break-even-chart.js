/* ============================================================
   Break-even analysis — engine spec for breakEvenChart
   (Profits-and-losses). Migrated from a hand-rolled SVG.

   Straight-line TR and TC (TC starts at fixed cost £40k). Break-even
   where TR = TC (Q=40, £80k). Loss region left of it, profit region right.
   States (cumulative show: ['bec-*']):
     bec-1  total cost (and the fixed-cost intercept)
     bec-2  total revenue
     bec-3  break-even point + loss / profit regions
   ============================================================ */
(function () {
  'use strict';
  var BE = { x: 0.615, y: 0.615 };   // Q=40, £80k  (TR = TC)
  window.ECONOS_BREAK_EVEN_SPEC = {
    /* Compact canvas: chart-unit geometry is resolution-independent, so a
       smaller viewBox renders the fixed-px engine type ~20% larger at the
       same display width. */
    width: 620, height: 480,
    chartArea: { x: 64, y: 26, width: 510, height: 390 },
    className: 'break-even-svg', background: '#FFFFFF',
    layers: ['bec-1', 'bec-2', 'bec-3'],
    axes: { x: { label: 'Output (Q)' }, y: { label: 'Costs & revenue (£)' } },
    polygons: [
      { layer: 'bec-3', points: [[0, 0], [0, 0.308], [BE.x, BE.y]], tone: 'rose', opacity: 0.35 },
      { layer: 'bec-3', points: [[BE.x, BE.y], [0.923, 0.923], [0.923, 0.769]], tone: 'green', opacity: 0.5 }
    ],
    curves: [
      { id: 'TC', d: 'M 0,0.308 L 0.923,0.769', tone: 'rose', label: 'Total cost', strokeWidth: 2.6, labelDx: 6, labelDy: -2, anchor: 'start', layer: 'bec-1' },
      { id: 'TR', d: 'M 0,0 L 0.923,0.923', tone: 'green', label: 'Total revenue', strokeWidth: 2.6, labelDx: -4, labelDy: -10, anchor: 'end', layer: 'bec-2' }
    ],
    points: [
      { layer: 'bec-1', x: 0, y: 0.308, tone: 'slate', radius: 4 },
      { layer: 'bec-3', intersection: { curves: ['TR', 'TC'], near: [BE.x, BE.y] }, tone: 'rose', radius: 7, label: 'Break-even point', labelDx: 14, labelDy: 8, anchor: 'start' }
    ],
    arrows: [
      { layer: 'bec-3', x1: BE.x, y1: BE.y, x2: BE.x, y2: 0, tone: 'slate', strokeWidth: 1.3, dashed: '4 3', buffer: 0 },
      { layer: 'bec-3', x1: 0, y1: BE.y, x2: BE.x, y2: BE.y, tone: 'slate', strokeWidth: 1.3, dashed: '4 3', buffer: 0 }
    ],
    texts: [
      { layer: 'bec-1', x: 0.16, y: 0.26, text: 'Fixed cost (£40k)', tone: 'slate', bold: true, anchor: 'middle', fontSize: 12 },
      { layer: 'bec-3', x: 0.27, y: 0.20, text: 'Loss', tone: 'rose', bold: true, anchor: 'middle', fontSize: 13 },
      { layer: 'bec-3', x: 0.78, y: 0.80, text: 'Profit', tone: 'green', bold: true, anchor: 'middle', fontSize: 13 }
    ]
  };
})();
