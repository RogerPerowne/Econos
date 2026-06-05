/* ============================================================
   SRAS Zones – engine spec for srasZones.
   Short-run-aggregate-supply card 3 "Spare capacity and bottlenecks".

   One SRAS curve drawn in two tones: a near-flat GREEN spare-capacity
   range on the left, steepening into an ORANGE bottleneck range on the
   right. The two segments share the knee point (0.540, 0.380) so the
   curve reads as one continuous line.

   Layered for the ad-interactive view-switcher (cumulative reveal):
     view 1 → spare-capacity zone + early point Y₁   (idl-1)
     view 2 → + bottleneck zone + later point Y₂      (idl-2)

   Points are declared `on: 'SRASg' / 'SRASo'` so the engine snaps each
   y onto the relevant segment – no hand-typed on-curve coordinates.
   ============================================================ */
(function () {
  'use strict';

  window.ECONOS_SRAS_ZONES_SPEC = {
    width: 460,
    height: 312,
    chartArea: { x: 56, y: 20, width: 374, height: 264 },
    className: 'sras-zones-svg',
    layers: ['idl-1', 'idl-2'],
    axes: {
      x: { label: 'Real output (Y)' },
      y: { label: 'Price level (P)' }
    },

    curves: [
      // GREEN spare-capacity range (gentle)
      { id: 'SRASg',
        d: 'M 0.060,0.170 C 0.230,0.215 0.400,0.275 0.540,0.380',
        tone: 'green', strokeWidth: 2.8 },
      // ORANGE bottleneck range (steep) – continues from the knee
      { id: 'SRASo',
        d: 'M 0.540,0.380 C 0.680,0.520 0.800,0.700 0.910,0.940',
        tone: 'amber', label: 'SRAS', strokeWidth: 2.8,
        labelDx: 8, labelDy: -2, anchor: 'start' }
    ],

    points: [
      // Early on the curve – on the flat green range
      { x: 0.320, on: 'SRASg', tone: 'green', radius: 5.5,
        gridlines: 'slate', ticks: { x: 'Y₁', y: 'P₁' },
        layer: 'idl-1' },
      // Later on the curve – on the steep orange range
      { x: 0.760, on: 'SRASo', tone: 'amber', radius: 5.5,
        gridlines: 'slate', ticks: { x: 'Y₂', y: 'P₂' },
        layer: 'idl-2' }
    ],

    boxedLabels: [
      { x: 0.040, y: 0.640, w: 0.300, h: 0.072,
        tone: 'green', lines: ['Spare capacity'], layer: 'idl-1' },
      { x: 0.640, y: 0.120, w: 0.300, h: 0.072,
        tone: 'amber', lines: ['Bottlenecks'], layer: 'idl-2' }
    ]
  };
})();
