/* ============================================================
   SRAS Big Picture – engine spec for srasBigPicture.
   Short-run-aggregate-supply card 1 "SRAS – the big picture".

   Layered for the ad-interactive view-switcher (cumulative reveal):
     view 1 → Point A revealed            (idl-1)
     view 2 → + Point B                   (idl-2)
     view 3 → + Point C                   (idl-3)

   A single convex (steepening) SRAS curve with three points read up
   the curve. The three dots are declared `on: 'SRAS'` so the engine
   snaps each y onto the curve at its x – no hand-typed on-curve
   coordinates.
   ============================================================ */
(function () {
  'use strict';

  window.ECONOS_SRAS_BIG_PICTURE_SPEC = {
    width: 460,
    height: 312,
    chartArea: { x: 56, y: 20, width: 374, height: 264 },
    className: 'sras-big-picture-svg',
    layers: ['idl-1', 'idl-2', 'idl-3'],
    axes: {
      x: { label: 'Real output (Y)' },
      y: { label: 'Price level (P)' }
    },

    curves: [
      // Convex, steepening SRAS (gentle at low output, steep near capacity)
      { id: 'SRAS',
        d: 'M 0.060,0.150 C 0.420,0.250 0.680,0.420 0.900,0.940',
        tone: 'blue', label: 'SRAS', strokeWidth: 2.6,
        labelDx: 8, labelDy: -4, anchor: 'start' }
    ],

    points: [
      { x: 0.235, on: 'SRAS', tone: 'blue', radius: 5.5, hollow: true,
        gridlines: 'slate', ticks: { x: 'Y₁', y: 'P₁' },
        label: 'A', labelDx: -13, labelDy: 4, anchor: 'end', layer: 'idl-1' },
      { x: 0.520, on: 'SRAS', tone: 'blue', radius: 5.5, hollow: true,
        gridlines: 'slate', ticks: { x: 'Y₂', y: 'P₂' },
        label: 'B', labelDx: -13, labelDy: 2, anchor: 'end', layer: 'idl-2' },
      { x: 0.760, on: 'SRAS', tone: 'blue', radius: 5.5, hollow: true,
        gridlines: 'slate', ticks: { x: 'Y₃', y: 'P₃' },
        label: 'C', labelDx: -13, labelDy: 0, anchor: 'end', layer: 'idl-3' }
    ]
  };
})();
