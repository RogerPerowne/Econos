/* ============================================================
   Shifts in labour demand — engine spec for labourDemandShift
   (Demand-for-labour card 3).

   Shift-styling rules (sitewide convention, themes 1–2):
     • the ORIGINAL curve goes solid → dashed once it has been shifted
       away from; the NEW curve is drawn solid.
     • the curve keeps its identity colour — demand stays blue in every
       state (D_L, D_L₁, D_L₂ are all the same demand line).
     • the shift arrow sits BETWEEN the two curves, clear of labels.

   Exclusive views (each `show` lists ONE layer):
     lds-1  original D_L solid, employment L₁ at wage W
     lds-2  demand rises: D_L dashed (from) + D_L₁ solid (to), arrow
            between the curves, employment L₁ → L₂
     lds-3  demand falls: D_L dashed (from) + D_L₂ solid (to), arrow
            between the curves, employment L₁ → L₀
   ============================================================ */
(function () {
  'use strict';
  var W = 0.474;
  // Demand lines (all the SAME demand curve → all blue).
  var DL  = 'M 0,0.803 L 0.828,0.073';   // original
  var DL1 = 'M 0.172,0.803 L 0.931,0.135'; // shifted right (rise)
  var DL2 = 'M 0,0.650 L 0.655,0.073';     // shifted left (fall)
  // Equilibria all sit on the fixed wage line W (same wage, new L).
  var L1 = 0.372, L2 = 0.545, L0 = 0.200;

  window.ECONOS_LABOUR_DEMAND_SHIFT_SPEC = {
    width: 740, height: 570,
    chartArea: { x: 66, y: 30, width: 628, height: 470 },
    className: 'labour-demand-shift-svg',
    background: '#FFFFFF',
    layers: ['lds-1', 'lds-2', 'lds-3'],
    layerMode: 'exclusive',
    axes: { x: { label: 'Labour employed (L)' }, y: { label: 'Wage' } },
    curves: [
      // Persistent fixed-wage line
      { id: 'W', shape: { type: 'horizontal', y: W, from: 0, to: 0.9 }, tone: 'slate', strokeWidth: 1.3, dashed: '5 4' },

      // ── lds-1: original demand, solid ───────────────────────
      { id: 'DLa', d: DL, tone: 'blue', label: 'D_L', strokeWidth: 2.6,
        labelDx: -4, labelDy: 12, anchor: 'end', layer: 'lds-1' },

      // ── lds-2: rise — original dashed (from) + new solid (to) ─
      { id: 'DLb', d: DL, tone: 'blue', dashed: '7 4', opacity: 0.7, label: 'D_L',
        strokeWidth: 2.2, labelDx: -4, labelDy: 12, anchor: 'end', layer: 'lds-2' },
      { id: 'DL1', d: DL1, tone: 'blue', label: 'D_L₁', strokeWidth: 2.6,
        labelDx: 6, labelDy: 0, anchor: 'start', layer: 'lds-2' },

      // ── lds-3: fall — original dashed (from) + new solid (to) ─
      { id: 'DLc', d: DL, tone: 'blue', dashed: '7 4', opacity: 0.7, label: 'D_L',
        strokeWidth: 2.2, labelDx: -4, labelDy: 12, anchor: 'end', layer: 'lds-3' },
      { id: 'DL2', d: DL2, tone: 'blue', label: 'D_L₂', strokeWidth: 2.6,
        labelDx: 6, labelDy: 4, anchor: 'start', layer: 'lds-3' }
    ],
    points: [
      // lds-1: L₁ on the original curve at wage W
      { layer: 'lds-1', x: L1, y: W, tone: 'blue', radius: 5.5 },
      // lds-2: L₁ (faded reference) → L₂ (new)
      { layer: 'lds-2', x: L1, y: W, tone: 'blue', radius: 5, hollow: true, opacity: 0.5 },
      { layer: 'lds-2', x: L2, y: W, tone: 'blue', radius: 5.5 },
      // lds-3: L₁ (faded reference) → L₀ (new)
      { layer: 'lds-3', x: L1, y: W, tone: 'blue', radius: 5, hollow: true, opacity: 0.5 },
      { layer: 'lds-3', x: L0, y: W, tone: 'blue', radius: 5.5 }
    ],
    arrows: [
      // Employment drop-lines (thin dashed, W → axis)
      { layer: 'lds-1', x1: L1, y1: W, x2: L1, y2: 0, tone: 'slate', strokeWidth: 1.1, dashed: '3 3', buffer: 0 },
      { layer: 'lds-2', x1: L1, y1: W, x2: L1, y2: 0, tone: 'slate', strokeWidth: 1, dashed: '3 3', opacity: 0.5, buffer: 0 },
      { layer: 'lds-2', x1: L2, y1: W, x2: L2, y2: 0, tone: 'slate', strokeWidth: 1.1, dashed: '3 3', buffer: 0 },
      { layer: 'lds-3', x1: L1, y1: W, x2: L1, y2: 0, tone: 'slate', strokeWidth: 1, dashed: '3 3', opacity: 0.5, buffer: 0 },
      { layer: 'lds-3', x1: L0, y1: W, x2: L0, y2: 0, tone: 'slate', strokeWidth: 1.1, dashed: '3 3', buffer: 0 },

      // Shift arrow — BETWEEN the two demand curves, in the demand colour.
      // Rise: horizontal, pointing right, seated in the gap at y≈0.58.
      { layer: 'lds-2', x1: 0.278, y1: 0.58, x2: 0.400, y2: 0.58, tone: 'blue', strokeWidth: 2.2, markerEnd: 'econos-arrow-blue', buffer: 0 },
      // Fall: horizontal, pointing left, seated in the gap at y≈0.58.
      { layer: 'lds-3', x1: 0.228, y1: 0.58, x2: 0.105, y2: 0.58, tone: 'blue', strokeWidth: 2.2, markerEnd: 'econos-arrow-blue', buffer: 0 }
    ],
    texts: [
      { x: -0.02, y: W, text: 'W', tone: 'slate', bold: true, anchor: 'end', fontSize: 12 },
      { layer: 'lds-1', x: L1, y: -0.06, text: 'L₁', tone: 'slate', bold: true, anchor: 'middle', fontSize: 12 },
      { layer: 'lds-2', x: L1, y: -0.06, text: 'L₁', tone: 'slate', anchor: 'middle', fontSize: 12, opacity: 0.5 },
      { layer: 'lds-2', x: L2, y: -0.06, text: 'L₂', tone: 'slate', bold: true, anchor: 'middle', fontSize: 12 },
      { layer: 'lds-3', x: L1, y: -0.06, text: 'L₁', tone: 'slate', anchor: 'middle', fontSize: 12, opacity: 0.5 },
      { layer: 'lds-3', x: L0, y: -0.06, text: 'L₀', tone: 'slate', bold: true, anchor: 'middle', fontSize: 12 }
    ]
  };
})();
