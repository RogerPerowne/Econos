/* ============================================================
   Price cap on a monopoly — engine spec for priceCapMonopoly
   (Controlling market power). Migrated from a hand-rolled SVG.

   Persistent: MC (up), D = AR (down), MR (down, steeper).
   States (cumulative show: ['pcm-*']):
     pcm-1  unregulated monopoly: MR = MC → Q_m, price P_m read up to D
     pcm-2  a price cap P_c below P_m: the firm now produces where MC = P_c
            → lower price AND more output (Q_c)
   ============================================================ */
(function () {
  'use strict';
  window.ECONOS_PRICE_CAP_MONOPOLY_SPEC = {
    width: 740, height: 570,
    chartArea: { x: 66, y: 30, width: 628, height: 470 },
    className: 'price-cap-monopoly-svg', background: '#FFFFFF',
    layers: ['pcm-1', 'pcm-2'],
    axes: { x: { label: 'Quantity' }, y: { label: 'Price' } },
    curves: [
      { id: 'MC', d: 'M 0,0.201 L 0.931,0.734', tone: 'rose', label: 'MC', strokeWidth: 2.4, labelDx: 6, labelDy: -4, anchor: 'start' },
      { id: 'D', d: 'M 0,0.865 L 0.931,0.201', tone: 'green', label: 'D = AR', strokeWidth: 2.4, labelDx: 6, labelDy: 10, anchor: 'start' },
      { id: 'MR', d: 'M 0,0.865 L 0.605,0', tone: 'amber', label: 'MR', strokeWidth: 2.4, labelDx: 6, labelDy: 4, anchor: 'start' },
      { id: '_cap', shape: { type: 'horizontal', y: 0.467, from: 0, to: 0.5 }, tone: 'purple', strokeWidth: 2.6, layer: 'pcm-2' }
    ],
    points: [
      { layer: 'pcm-1', intersection: { curves: ['MR', 'MC'], near: [0.333, 0.391] }, tone: 'slate', radius: 6, hollow: true },
      { layer: 'pcm-1', x: 0.333, on: 'D', tone: 'green', radius: 6 },
      { layer: 'pcm-2', x: 0.466, on: 'MC', tone: 'purple', radius: 6 }
    ],
    arrows: [
      { layer: 'pcm-1', x1: 0.333, y1: 0.391, x2: 0.333, y2: 0, tone: 'slate', strokeWidth: 1.3, dashed: '3 3', buffer: 0 },
      { layer: 'pcm-1', x1: 0.333, y1: 0.391, x2: 0.333, y2: 0.628, tone: 'green', strokeWidth: 1.3, dashed: '4 3', buffer: 0 },
      { layer: 'pcm-1', x1: 0.333, y1: 0.628, x2: 0, y2: 0.628, tone: 'green', strokeWidth: 1.3, dashed: '4 3', buffer: 0 },
      { layer: 'pcm-2', x1: 0.466, y1: 0.467, x2: 0.466, y2: 0, tone: 'purple', strokeWidth: 1.3, dashed: '3 3', buffer: 0 },
      { layer: 'pcm-2', x1: 0.028, y1: 0.62, x2: 0.028, y2: 0.49, tone: 'purple', strokeWidth: 2.2, markerEnd: 'econos-arrow-purple', buffer: 0 },
      { layer: 'pcm-2', x1: 0.35, y1: 0.05, x2: 0.455, y2: 0.05, tone: 'green', strokeWidth: 2.2, markerEnd: 'econos-arrow-green', buffer: 0 }
    ],
    texts: [
      { layer: 'pcm-1', x: 0.355, y: 0.42, text: 'MR = MC', tone: 'slate', bold: true, anchor: 'start', fontSize: 9.5 },
      { layer: 'pcm-1', x: 0.333, y: -0.06, text: 'Q_m', tone: 'slate', bold: true, anchor: 'middle', fontSize: 12 },
      { layer: 'pcm-1', x: -0.02, y: 0.628, text: 'P_m', tone: 'green', bold: true, anchor: 'end', fontSize: 12 },
      { layer: 'pcm-2', x: -0.02, y: 0.467, text: 'P_c', tone: 'purple', bold: true, anchor: 'end', fontSize: 12 },
      { layer: 'pcm-2', x: 0.30, y: 0.51, text: 'price cap', tone: 'purple', bold: true, anchor: 'start', fontSize: 10 },
      { layer: 'pcm-2', x: 0.466, y: -0.06, text: 'Q_c', tone: 'purple', bold: true, anchor: 'middle', fontSize: 12 },
      { layer: 'pcm-2', x: 0.06, y: 0.55, text: 'lower price', tone: 'purple', bold: true, anchor: 'start', fontSize: 9.5 },
      { layer: 'pcm-2', x: 0.40, y: 0.10, text: 'more output', tone: 'green', bold: true, anchor: 'middle', fontSize: 9.5 }
    ]
  };
})();
