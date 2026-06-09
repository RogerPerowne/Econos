/* ============================================================
   Quota Diagram Interactive – engine spec for quotaDiagramInteractive.
   Restrictions on Free Trade 4.1.6 card 4 (Quotas).

   Small-open-economy quota. At the world price Pw the country imports a
   large amount (gap between domestic supply and demand). A quota fixes
   imports at a smaller quantity, so the effective supply is domestic S
   shifted right by the quota; the price rises to Pq where (S + quota)
   meets D. Geometry from the straight lines:
     S: y = 0.04 + 0.94176 x   D: y = 0.96 - 0.94176 x
     Pw = 0.30 → S∩Pw = 0.2761,  D∩Pw = 0.7008  (free-trade imports 0.425)
     Pq = 0.44 → S∩Pq = 0.4248 (domestic output),
                 D∩Pq = 0.5522 (domestic demand),  quota = 0.1274
     S+quota: 'M 0.1274,0.040 L 0.977,0.840' (meets D exactly at Pq)

   3 progressive-reveal views:
     V0 Free trade     – base D + S + Pw + free-trade output/demand
     V1 Impose a quota → idl-1 (S+quota, Pq, imports fixed bracket)
     V2 Price & rents  → idl-1 + idl-2 (quota-rent rectangle)
   ============================================================ */
(function () {
  'use strict';

  var Pw = 0.30, Pq = 0.44;
  var Qs0 = 0.2761, Qd0 = 0.7008;   // free-trade domestic output / demand
  var Qs1 = 0.4248, Qd1 = 0.5522;   // with-quota domestic output / demand

  window.ECONOS_QUOTA_DIAGRAM_SPEC = {
    width: 440,
    height: 360,
    chartArea: { x: 58, y: 46, width: 330, height: 264 },
    className: 'quota-diagram-svg',
    background: '#FFFFFF',
    axes: { x: { label: 'Quantity' }, y: { label: 'Price' } },

    curves: [
      { d: 'M 0,0.960 L 0.977,0.040', tone: 'blue',  label: 'D', strokeWidth: 2.8, labelDx: 8, labelDy: 6 },
      { d: 'M 0,0.040 L 0.977,0.960', tone: 'purple', label: 'S', strokeWidth: 2.8, labelDx: 8, labelDy: -4 },
      { d: 'M 0,' + Pw + ' L 0.760,' + Pw, tone: 'slate', strokeWidth: 2, dashed: '6 4' }
    ],
    arrows: [
      { x1: Qs0, y1: Pw, x2: Qs0, y2: 0, tone: 'slate', strokeWidth: 1.2, dashed: '4 3', buffer: 0 },
      { x1: Qd0, y1: Pw, x2: Qd0, y2: 0, tone: 'slate', strokeWidth: 1.2, dashed: '4 3', buffer: 0 },
      { x1: Qs0, y1: Pw, x2: Qd0, y2: Pw, tone: 'blue', strokeWidth: 1.6, twoway: true, buffer: 0 }
    ],
    points: [
      { x: Qs0, y: Pw, tone: 'purple', radius: 5 },
      { x: Qd0, y: Pw, tone: 'blue', radius: 5 }
    ],
    texts: [
      { x: -0.02, y: Pw, text: 'Pw', tone: 'slate', bold: true, italic: true, fontSize: 13, anchor: 'end' },
      { x: (Qs0 + Qd0) / 2, y: Pw - 0.06, text: 'Imports (free trade)', tone: 'blue', bold: true, fontSize: 10, anchor: 'middle' }
    ],

    viewDefaultsHidden: true,
    views: [
      /* ─── idl-1: impose the quota ─── */
      {
        key: 'quota',
        contentLayer: 'idl-1',
        curves: [
          { d: 'M 0.1274,0.040 L 0.977,0.840', tone: 'amber', strokeWidth: 2.4, dashed: '6 4' },
          { d: 'M 0,' + Pq + ' L 0.620,' + Pq, tone: 'rose', strokeWidth: 2, dashed: '6 4' }
        ],
        arrows: [
          { x1: Qs1, y1: Pq, x2: Qs1, y2: 0, tone: 'slate', strokeWidth: 1.2, dashed: '4 3', buffer: 0 },
          { x1: Qd1, y1: Pq, x2: Qd1, y2: 0, tone: 'slate', strokeWidth: 1.2, dashed: '4 3', buffer: 0 },
          { x1: Qs1, y1: Pq, x2: Qd1, y2: Pq, tone: 'amber', strokeWidth: 1.6, twoway: true, buffer: 0 }
        ],
        points: [
          { x: Qs1, y: Pq, tone: 'purple', radius: 5 },
          { x: Qd1, y: Pq, tone: 'blue', radius: 5 }
        ],
        texts: [
          { x: 0.640, y: 0.690, text: 'S + quota', tone: 'amber', bold: true, fontSize: 11, anchor: 'start' },
          { x: -0.02, y: Pq, text: 'Pq', tone: 'rose', bold: true, italic: true, fontSize: 13, anchor: 'end' },
          { x: (Qs1 + Qd1) / 2, y: Pq + 0.055, text: 'Quota (fixed)', tone: 'amber', bold: true, fontSize: 10, anchor: 'middle' }
        ]
      },

      /* ─── idl-2: quota rents earned on the fixed imports ─── */
      {
        key: 'rents',
        contentLayer: 'idl-2',
        polygons: [
          { points: [[Qs1, Pw], [Qs1, Pq], [Qd1, Pq], [Qd1, Pw]], fill: '#FEF3C7', opacity: 0.92 }
        ],
        texts: [
          { x: (Qs1 + Qd1) / 2, y: (Pw + Pq) / 2, text: 'Quota rents', tone: 'amber', bold: true, fontSize: 10.5, anchor: 'middle' }
        ]
      }
    ]
  };
})();
