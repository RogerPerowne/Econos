/* ============================================================
   LRAS Demand vs Capacity – engine spec for lrasDemandVsCapacity.
   Long-run-aggregate-supply card 6 "Demand vs capacity".

   Two side-by-side AD/LRAS panels make the synthesis land at a
   glance – the same diagram answers two different questions:

     PANEL A · "Demand rises, capacity fixed"
       AD₁ → AD₂ shifts up against a FIXED vertical LRAS at Yf.
       Output is pinned: only the price level rises (P₁ → P₂).
       This is pure inflation – the demand-side dead end.

     PANEL B · "Capacity rises, demand fixed"
       LRAS₁ → LRAS₂ shifts right with AD HELD FIXED.
       Output rises (Y₁ → Y₂) and the price level FALLS (P₁ → P₂).
       This is real, non-inflationary growth – the supply-side prize.

   Both panels draw the Classical vertical LRAS: the contrast is
   sharpest when capacity is a hard wall. Equilibria are snapped
   onto the AD line with `on:` (point's y solved on the curve at
   the LRAS x) so no equilibrium coordinate is ever hand-typed.

   Panel curve ids are globally unique – the engine merges every
   panel's curves into one shared registry (see ppf-today-tomorrow).
   Arrows use the engine's built-in tone markers; panel-level defs
   are dropped by the engine.
   ============================================================ */
(function () {
  'use strict';

  /* Panel A – demand shift on a fixed vertical LRAS. */
  function demandPanel() {
    var YF = 0.52;
    return {
      chartArea: { x: 48, y: 42, width: 198, height: 194 },
      title: 'A · Demand rises, LRAS fixed', titleColor: '#047857', titleSize: 12,
      axes: { x: { label: 'Real output (Y)' }, y: { label: 'Price level (P)' } },
      curves: [
        { id: 'dvc-lras-a', d: 'M ' + YF + ',0.020 L ' + YF + ',0.960',
          tone: 'purple', label: 'LRAS', strokeWidth: 2.4,
          labelDx: 5, labelDy: -2, anchor: 'start' },
        /* AD₁ DASHED – the shifted-from curve goes dashed. */
        { id: 'dvc-ad-a1', d: 'M 0.06,0.660 L 0.94,0.130',
          tone: 'blue', label: 'AD₁', strokeWidth: 1.6, dashed: '6 4',
          labelDx: -3, labelDy: 12, anchor: 'end' },
        { id: 'dvc-ad-a2', d: 'M 0.18,0.880 L 1.02,0.330',
          tone: 'green', label: 'AD₂', strokeWidth: 2,
          labelDx: -3, labelDy: 12, anchor: 'end' }
      ],
      points: [
        { x: YF, on: 'dvc-ad-a1', tone: 'slate', radius: 5, hollow: true,
          gridlines: 'slate', ticks: { x: 'Yf', y: 'P₁' },
          label: 'E₁', labelDx: -10, labelDy: -4, anchor: 'end' },
        { x: YF, on: 'dvc-ad-a2', tone: 'green', radius: 5, hollow: true,
          gridlines: 'green', ticks: { y: 'P₂' },
          label: 'E₂', labelDx: 10, labelDy: -4, anchor: 'start' }
      ],
      arrows: [
        /* Perpendicular to AD, in the gap between AD₁ and AD₂, clear of the
           E₁/E₂ labels stacked on the Yf vertical. */
        { x1: 0.380, y1: 0.430, x2: 0.500, y2: 0.585,
          tone: 'blue', strokeWidth: 1.7, markerEnd: 'econos-arrow-blue', buffer: 0 }
      ]
    };
  }

  /* Panel B – capacity shift with AD held fixed. */
  function capacityPanel() {
    var YF1 = 0.42, YF2 = 0.66;
    return {
      chartArea: { x: 328, y: 42, width: 198, height: 194 },
      title: 'B · LRAS rises, demand fixed', titleColor: '#047857', titleSize: 12,
      axes: { x: { label: 'Real output (Y)' }, y: { label: 'Price level (P)' } },
      curves: [
        { id: 'dvc-ad-b', d: 'M 0.06,0.660 L 0.96,0.110',
          tone: 'blue', label: 'AD', strokeWidth: 2,
          labelDx: -3, labelDy: 12, anchor: 'end' },
        { id: 'dvc-lras-b1', d: 'M ' + YF1 + ',0.020 L ' + YF1 + ',0.960',
          tone: 'slate', label: 'LRAS₁', strokeWidth: 1.8, dashed: '6 4',
          labelDx: 0, labelDy: -10, anchor: 'middle' },
        { id: 'dvc-lras-b2', d: 'M ' + YF2 + ',0.020 L ' + YF2 + ',0.960',
          tone: 'green', label: 'LRAS₂', strokeWidth: 2.4,
          labelDx: 0, labelDy: -10, anchor: 'middle' }
      ],
      points: [
        { x: YF1, on: 'dvc-ad-b', tone: 'slate', radius: 5, hollow: true,
          gridlines: 'slate', ticks: { x: 'Y₁', y: 'P₁' },
          label: 'E₁', labelDx: 10, labelDy: -4, anchor: 'start' },
        { x: YF2, on: 'dvc-ad-b', tone: 'green', radius: 5, hollow: true,
          gridlines: 'green', ticks: { x: 'Y₂', y: 'P₂' },
          label: 'E₂', labelDx: 10, labelDy: -4, anchor: 'start' }
      ],
      arrows: [
        /* Perpendicular to the vertical LRAS lines (so horizontal), drawn in
           the gap between LRAS₁ and LRAS₂ at mid-height – above the E points,
           below the LRAS labels at the top. */
        { x1: YF1 + 0.03, y1: 0.620, x2: YF2 - 0.03, y2: 0.620,
          tone: 'green', strokeWidth: 1.7, markerEnd: 'econos-arrow-green', buffer: 0 }
      ]
    };
  }

  window.ECONOS_LRAS_DEMAND_VS_CAPACITY_SPEC = {
    width: 560,
    height: 268,
    className: 'lras-demand-vs-capacity-svg',
    divider: { x: 288, y1: 18, y2: 250, stroke: '#E2E8F0', dashed: '4 4' },
    panels: [demandPanel(), capacityPanel()]
  };
})();
