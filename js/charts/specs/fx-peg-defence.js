/* ============================================================
   FX Peg Defence – engine spec for fxPegDefence.
   Exchange Rate Intervention 4.1.8 card 4. A peg held ABOVE the
   free-market equilibrium: at the target rate, supply of £ exceeds
   demand, so the central bank must buy £ (selling reserves) to
   absorb the excess and defend the peg.
     D: y = 0.95 - 0.9474x   S: y = x   E = (0.488,0.488)
     Peg = 0.66 → D∩peg = 0.306, S∩peg = 0.66 (excess supply 0.354)
   ============================================================ */
(function () {
  'use strict';
  var PEG = 0.66, Qd = 0.306, Qs = 0.66, E = 0.488;

  window.ECONOS_FX_PEG_DEFENCE_SPEC = {
    width: 470,
    height: 360,
    chartArea: { x: 72, y: 40, width: 326, height: 268 },
    className: 'fx-peg-svg',
    background: '#FFFFFF',
    layers: ['idl-1', 'idl-2', 'idl-3'],
    axes: { x: { label: 'Quantity of £' }, y: { label: 'Rate' } },
    curves: [
      { d: 'M 0,0.95 L 0.95,0.05', tone: 'blue',  label: 'D £', strokeWidth: 2.8, labelDx: 6, labelDy: 12, layer: 'idl-1' },
      { d: 'M 0.05,0.05 L 0.95,0.95', tone: 'green', label: 'S £', strokeWidth: 2.8, labelDx: 6, labelDy: -6, layer: 'idl-1' },
      { d: 'M 0,' + PEG + ' L 0.82,' + PEG, tone: 'purple', strokeWidth: 2.2, dashed: '7 4', layer: 'idl-2' }
    ],
    arrows: [
      { x1: Qd, y1: PEG, x2: Qd, y2: 0, tone: 'slate', strokeWidth: 1, dashed: '4 3', buffer: 0, layer: 'idl-3' },
      { x1: Qs, y1: PEG, x2: Qs, y2: 0, tone: 'slate', strokeWidth: 1, dashed: '4 3', buffer: 0, layer: 'idl-3' },
      { x1: Qd, y1: PEG + 0.04, x2: Qs, y2: PEG + 0.04, tone: 'rose', strokeWidth: 1.8, buffer: 0, layer: 'idl-3' }
    ],
    points: [
      { x: E, y: E, tone: 'slate', radius: 5, layer: 'idl-1' },
      { x: Qd, y: PEG, tone: 'blue', radius: 4.5, layer: 'idl-3' },
      { x: Qs, y: PEG, tone: 'green', radius: 4.5, layer: 'idl-3' }
    ],
    texts: [
      { x: -0.02, y: PEG, text: 'Target', tone: 'purple', bold: true, italic: true, fontSize: 12, anchor: 'end', layer: 'idl-2' },
      { x: -0.02, y: E, text: 'E*', tone: 'slate', bold: true, italic: true, fontSize: 12, anchor: 'end', layer: 'idl-1' },
      { x: (Qd + Qs) / 2, y: PEG + 0.10, text: 'Excess supply of £', tone: 'rose', bold: true, fontSize: 10.5, anchor: 'middle', layer: 'idl-3' },
      { x: (Qd + Qs) / 2, y: PEG + 0.20, text: '→ central bank buys £', tone: 'slate', fontSize: 9.5, anchor: 'middle', layer: 'idl-3' }
    ]
  };
})();
