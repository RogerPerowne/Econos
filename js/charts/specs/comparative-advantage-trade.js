/* ============================================================
   Comparative Advantage & Gains from Trade – engine spec for
   gainsFromTradePPF. Specialisation & Trade 4.1.1 card 4.

   A linear (constant opportunity cost) PPF for Wine (y) against
   Cloth (x). The full story of trade, told in four stepped layers:
     idl-1  the country's own PPF + the no-trade point A
            (without trade you produce AND consume on the frontier)
     idl-2  specialise — production moves to P, the cloth-axis
            intercept (full specialisation in the comparative-
            advantage good)
     idl-3  the trade line — swap cloth for wine at world terms of
            trade, a line that lies beyond the PPF
     idl-4  consumption point C on the trade line, outside the PPF —
            more of BOTH goods than the no-trade point A: the gain.

   Geometry (0..1 chart units):
     PPF:  x + y = 0.7      → 'M 0,0.7 L 0.7,0'   (opp. cost 1:1)
     A on PPF at x=0.22     → (0.22, 0.48)
     P (full specialisation)→ (0.7, 0)            axis intercept
     Trade line slope -1.6  → 'M 0.7,0 L 0.3,0.64' (better world price)
     C on trade line x=0.36 → (0.36, 0.544)       C dominates A
   ============================================================ */
(function () {
  'use strict';

  window.ECONOS_CA_TRADE_SPEC = {
    width: 470,
    height: 360,
    chartArea: { x: 70, y: 40, width: 330, height: 268 },
    className: 'ca-trade-svg',
    background: '#FFFFFF',
    layers: ['idl-1', 'idl-2', 'idl-3', 'idl-4'],
    axes: { x: { label: 'Cloth' }, y: { label: 'Wine' } },
    curves: [
      { d: 'M 0,0.7 L 0.7,0', id: 'ppf', tone: 'slate', strokeWidth: 2.8, layer: 'idl-1' },
      { d: 'M 0.7,0 L 0.3,0.64', id: 'tline', tone: 'blue', strokeWidth: 2.4, dashed: '7 5', layer: 'idl-3' }
    ],
    points: [
      { x: 0.22, on: 'ppf', tone: 'amber', radius: 5, layer: 'idl-1' },
      { x: 0.7, y: 0, tone: 'green', radius: 5.5, layer: 'idl-2' },
      { x: 0.36, on: 'tline', tone: 'blue', radius: 6, layer: 'idl-4' }
    ],
    texts: [
      { x: 0.12, y: 0.64, text: 'PPF', tone: 'slate', bold: true, fontSize: 13, anchor: 'start', layer: 'idl-1' },
      { x: 0.18, y: 0.55, text: 'A', tone: 'amber', bold: true, fontSize: 14, anchor: 'end', layer: 'idl-1' },
      { x: 0.155, y: 0.49, text: 'without trade', tone: 'slate', fontSize: 9.5, anchor: 'end', layer: 'idl-1' },
      { x: 0.72, y: 0.07, text: 'P', tone: 'green', bold: true, fontSize: 14, anchor: 'start', layer: 'idl-2' },
      { x: 0.53, y: 0.46, text: 'Trade line', tone: 'blue', bold: true, fontSize: 12, anchor: 'middle', layer: 'idl-3' },
      { x: 0.335, y: 0.61, text: 'C', tone: 'blue', bold: true, fontSize: 15, anchor: 'end', layer: 'idl-4' },
      { x: 0.36, y: 0.685, text: 'beyond the PPF', tone: 'blue', fontSize: 9.5, anchor: 'middle', layer: 'idl-4' }
    ]
  };
})();
