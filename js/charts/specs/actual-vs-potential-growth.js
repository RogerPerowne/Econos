/* ============================================================
   Actual vs Potential Growth – engine spec for actualVsPotentialGrowth.
   Trade-cycle topic – illustrates the gap between realised GDP and
   the long-run potential trend.

   BASE (always visible)
     • Real GDP wave (actual GDP) over Time – cubic Bezier with two
       complete peak-trough cycles preserved from the original.

   LAYER 1 (trend) – Potential GDP straight line + boom/recession
     annotation points showing booms sit ABOVE trend, recessions BELOW.

   LAYER 2 (drivers) – 5 dots on the trend line labelled Labour /
     Capital / Productivity / Skills / Tech, illustrating what shifts
     the trend itself over the long run.

   LAYER 3 (hysteresis) – dashed curve bending down from the
     recession trough showing the trend can permanently shift down.

   Layers are cumulative; the card reveals them in sequence.
   ============================================================ */
(function () {
  'use strict';

  window.ECONOS_ACTUAL_VS_POTENTIAL_GROWTH_SPEC = {
    width: 720,
    height: 320,
    chartArea: { x: 60, y: 30, width: 630, height: 210 },
    className: 'actual-vs-potential-growth-svg',
    layers: ['idl-1', 'idl-2', 'idl-3'],
    axes: {
      x: { label: 'Time' },
      y: { label: 'Real GDP' }
    },

    curves: [
      // Base: Actual GDP wave with two peak-trough cycles.
      // Labels shortened from "Actual GDP" / "Potential GDP" to
      // "Actual" / "Potential" – y-axis label "Real GDP" already
      // tells the reader what's plotted. anchor='start' kept so the
      // labels live in the right margin (anchor='end' moved them left
      // INTO the Tech/Capital/etc. growth-driver labels and caused a
      // clash with "Tech" in idl-2).
      { d: 'M 0,0.214 C 0.063,0.310 0.143,0.619 0.254,0.667 C 0.349,0.705 0.413,0.214 0.508,0.214 C 0.587,0.214 0.635,0.667 0.746,0.762 C 0.794,0.800 0.817,0.762 0.825,0.738',
        tone: 'blue', label: 'Actual', strokeWidth: 2.6,
        labelDx: 8, labelDy: -8, anchor: 'start' },

      // Layer 1: Potential GDP trend (straight line)
      { d: 'M 0,0.190 L 0.825,0.714',
        tone: 'green', label: 'Potential', strokeWidth: 2.4,
        labelDx: 8, labelDy: 8, anchor: 'start',
        layer: 'idl-1' },

      // Layer 3: hysteresis curve bending down from the recession trough
      { d: 'M 0.508,0.214 C 0.540,0.167 0.571,0.119 0.603,0.086',
        tone: 'red', strokeWidth: 1.8, dashed: '4 3',
        layer: 'idl-3' }
    ],

    points: [
      // Layer 1: boom point ABOVE trend, recession point BELOW trend
      { x: 0.254, y: 0.667, tone: 'green', radius: 5,
        layer: 'idl-1' },
      { x: 0.508, y: 0.214, tone: 'red',   radius: 5,
        layer: 'idl-1' },

      // Layer 2: 5 driver dots on the trend, evenly spaced
      { x: 0.089, y: 0.247, tone: 'green', radius: 4, layer: 'idl-2' },
      { x: 0.263, y: 0.358, tone: 'green', radius: 4, layer: 'idl-2' },
      { x: 0.438, y: 0.468, tone: 'green', radius: 4, layer: 'idl-2' },
      { x: 0.613, y: 0.579, tone: 'green', radius: 4, layer: 'idl-2' },
      { x: 0.787, y: 0.680, tone: 'green', radius: 4, layer: 'idl-2' }
    ],

    texts: [
      // Layer 1: annotations next to the boom + recession points
      { x: 0.349, y: 0.762, text: 'Booms above trend',
        tone: 'green', bold: true, layer: 'idl-1' },
      { x: 0.619, y: 0.105, text: 'Recessions below trend',
        tone: 'red', bold: true, layer: 'idl-1' },

      // Layer 2: driver labels below each triangle
      { x: 0.089, y: 0.190, text: 'Labour',       tone: 'green', bold: true, anchor: 'middle', layer: 'idl-2' },
      { x: 0.263, y: 0.300, text: 'Capital',      tone: 'green', bold: true, anchor: 'middle', layer: 'idl-2' },
      { x: 0.438, y: 0.410, text: 'Productivity', tone: 'green', bold: true, anchor: 'middle', layer: 'idl-2' },
      { x: 0.613, y: 0.520, text: 'Skills',       tone: 'green', bold: true, anchor: 'middle', layer: 'idl-2' },
      { x: 0.787, y: 0.620, text: 'Tech',         tone: 'green', bold: true, anchor: 'middle', layer: 'idl-2' },

      // Layer 3: hysteresis caption
      { x: 0.530, y: 0.040, text: 'Hysteresis: trend can bend down',
        tone: 'red', bold: true, layer: 'idl-3' }
    ]
  };
})();
