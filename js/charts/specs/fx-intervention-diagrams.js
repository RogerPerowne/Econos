/* ============================================================
   FX Intervention Diagrams – engine spec for fxInterventionDiagrams.
   Exchange Rate Intervention 4.1.8 card 2. Two panels:
     LEFT  Support the currency – the central bank BUYS £, demand
           shifts right (D₁→D₂), the rate rises.
     RIGHT Weaken the currency – the central bank SELLS £, supply
           shifts right (S₁→S₂), the rate falls.
   Geometry computed from the line equations (shared with the
   floating-shift spec) so each equilibrium sits on its curves.
   ============================================================ */
(function () {
  'use strict';

  window.ECONOS_FX_INTERVENTION_SPEC = {
    width: 680,
    height: 300,
    className: 'fx-intervention-svg',
    background: '#FFFFFF',

    divider: { x: 340, y1: 20, y2: 250 },

    panels: [
      {
        chartArea: { x: 50, y: 26, width: 252, height: 210 },
        title: 'Support — central bank buys £',
        titleTone: 'green',
        axes: { x: { label: 'Quantity of £' }, y: { label: 'Rate' } },
        curves: [
          { d: 'M 0.06,0.10 L 0.92,0.92', tone: 'blue', label: 'S', strokeWidth: 2.5, labelDx: 6, labelDy: -4 },
          { d: 'M 0.04,0.74 L 0.66,0.06', tone: 'green', dashed: '6 4', opacity: 0.7, label: 'D₁', strokeWidth: 2.3, labelDx: -2, labelDy: -8 },
          { d: 'M 0.26,0.74 L 0.88,0.06', tone: 'green', strokeWidth: 2.6, label: 'D₂', labelDx: 8, labelDy: -6 }
        ],
        arrows: [
          { x1: 0, y1: 0.388, x2: 0.361, y2: 0.388, tone: 'slate', strokeWidth: 1, dashed: '4 3', buffer: 0 },
          { x1: 0, y1: 0.500, x2: 0.479, y2: 0.500, tone: 'slate', strokeWidth: 1, dashed: '4 3', buffer: 0 },
          { x1: 0.385, y1: 0.40, x2: 0.545, y2: 0.40, tone: 'green', strokeWidth: 2, markerEnd: 'econos-arrow-green', buffer: 3 }
        ],
        points: [
          { x: 0.361, y: 0.388, tone: 'slate', radius: 4.5 },
          { x: 0.479, y: 0.500, tone: 'green', radius: 4.5 }
        ],
        texts: [
          { x: -0.03, y: 0.388, text: 'E₁', tone: 'slate', bold: true, italic: true, fontSize: 12, anchor: 'end' },
          { x: -0.03, y: 0.500, text: 'E₂', tone: 'green', bold: true, italic: true, fontSize: 12, anchor: 'end' }
        ]
      },
      {
        chartArea: { x: 386, y: 26, width: 252, height: 210 },
        title: 'Weaken — central bank sells £',
        titleTone: 'amber',
        axes: { x: { label: 'Quantity of £' }, y: { label: 'Rate' } },
        curves: [
          { d: 'M 0.08,0.88 L 0.92,0.12', tone: 'blue', label: 'D', strokeWidth: 2.5, labelDx: 6, labelDy: 10 },
          { d: 'M 0.10,0.10 L 0.78,0.92', tone: 'amber', dashed: '6 4', opacity: 0.7, label: 'S₁', strokeWidth: 2.3, labelDx: -2, labelDy: -8 },
          { d: 'M 0.32,0.10 L 0.94,0.848', tone: 'amber', strokeWidth: 2.6, label: 'S₂', labelDx: -12, labelDy: 4 }
        ],
        arrows: [
          { x1: 0, y1: 0.535, x2: 0.461, y2: 0.535, tone: 'slate', strokeWidth: 1, dashed: '4 3', buffer: 0 },
          { x1: 0, y1: 0.422, x2: 0.587, y2: 0.422, tone: 'slate', strokeWidth: 1, dashed: '4 3', buffer: 0 },
          { x1: 0.30, y1: 0.30, x2: 0.46, y2: 0.30, tone: 'amber', strokeWidth: 2, markerEnd: 'econos-arrow-amber', buffer: 0 }
        ],
        points: [
          { x: 0.461, y: 0.535, tone: 'slate', radius: 4.5 },
          { x: 0.587, y: 0.422, tone: 'amber', radius: 4.5 }
        ],
        texts: [
          { x: -0.03, y: 0.535, text: 'E₁', tone: 'slate', bold: true, italic: true, fontSize: 12, anchor: 'end' },
          { x: -0.03, y: 0.422, text: 'E₂', tone: 'amber', bold: true, italic: true, fontSize: 12, anchor: 'end' }
        ]
      }
    ]
  };
})();
