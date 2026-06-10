/* ============================================================
   Labour supply (S) — engine spec for labourSupplyCurve
   (Supply-of-labour card 2). Migrated from a hand-rolled SVG so it
   fills the stage and the geometry is engine-resolved.

   Persistent: S = labour supply (upward).
   States (cumulative show: ['ls-*']):
     []            → just the curve
     ls-1          → wage W₁ → quantity L₁ (point A)
     ls-1, ls-2    → higher wage W₂ → more supplied (point B, movement along)
   ============================================================ */
(function () {
  'use strict';
  var A = { x: 0.266, y: 0.292 }, B = { x: 0.666, y: 0.620 };
  window.ECONOS_LABOUR_SUPPLY_SPEC = {
    width: 740, height: 570,
    chartArea: { x: 66, y: 30, width: 628, height: 470 },
    className: 'labour-supply-svg',
    background: '#FFFFFF',
    layers: ['ls-1', 'ls-2'],
    axes: { x: { label: 'Quantity of labour (L)' }, y: { label: 'Wage' } },
    curves: [
      { id: 'S', d: 'M 0,0.07 L 0.93,0.84', tone: 'green',
        label: 'S = labour supply', strokeWidth: 3, labelDx: -6, labelDy: 12, anchor: 'end' }
    ],
    points: [
      { layer: 'ls-1', x: A.x, on: 'S', tone: 'green', radius: 6, label: 'A', labelDx: -10, labelDy: -8, anchor: 'end' },
      { layer: 'ls-2', x: B.x, on: 'S', tone: 'green', radius: 6, label: 'B', labelDx: 10, labelDy: -8, anchor: 'start' }
    ],
    arrows: [
      { layer: 'ls-1', x1: 0, y1: A.y, x2: A.x, y2: A.y, tone: 'slate', strokeWidth: 1.4, dashed: '4 3', buffer: 0 },
      { layer: 'ls-1', x1: A.x, y1: A.y, x2: A.x, y2: 0, tone: 'slate', strokeWidth: 1.4, dashed: '4 3', buffer: 0 },
      { layer: 'ls-2', x1: 0, y1: B.y, x2: B.x, y2: B.y, tone: 'green', strokeWidth: 1.4, dashed: '4 3', buffer: 0 },
      { layer: 'ls-2', x1: B.x, y1: B.y, x2: B.x, y2: 0, tone: 'green', strokeWidth: 1.4, dashed: '4 3', buffer: 0 },
      { layer: 'ls-2', x1: A.x + 0.02, y1: A.y + 0.03, x2: B.x - 0.02, y2: B.y - 0.03, tone: 'green', strokeWidth: 1.6, markerEnd: 'econos-arrow-green', buffer: 0 }
    ],
    texts: [
      { layer: 'ls-1', x: -0.02, y: A.y, text: 'W₁', tone: 'slate', bold: true, anchor: 'end', fontSize: 13 },
      { layer: 'ls-1', x: A.x, y: -0.06, text: 'L₁', tone: 'slate', bold: true, anchor: 'middle', fontSize: 13 },
      { layer: 'ls-2', x: -0.02, y: B.y, text: 'W₂', tone: 'green', bold: true, anchor: 'end', fontSize: 13 },
      { layer: 'ls-2', x: B.x, y: -0.06, text: 'L₂', tone: 'green', bold: true, anchor: 'middle', fontSize: 13 },
      { layer: 'ls-2', x: 0.40, y: 0.62, text: 'higher wage → more supplied', tone: 'green', bold: true, anchor: 'middle', fontSize: 11 }
    ]
  };
})();
