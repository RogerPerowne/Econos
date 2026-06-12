/* ============================================================
   Progressive / proportional / regressive — engine spec for
   taxBurdenTypesInteractive (Taxation 4.5.2 Card 2).

   ONE chart frame, three exclusive views: average tax rate (y)
   against income (x). The slope of the line IS the definition:

     tbt-1  Progressive   — average rate RISES with income (green)
     tbt-2  Proportional  — average rate CONSTANT (blue)
     tbt-3  Regressive    — average rate FALLS with income (purple)

   These are three different tax regimes (not one line shifting),
   so each carries its own tone — matching the mockup's per-panel
   colours. Low/middle/high earner markers sit exactly on each
   line so the burden comparison reads at a glance.
   ============================================================ */
(function () {
  'use strict';

  var PROG = 'M 0.06,0.22 L 0.94,0.78';   // rising
  var PROP = 'M 0.06,0.50 L 0.94,0.50';   // flat
  var REGR = 'M 0.06,0.78 L 0.94,0.22';   // falling

  // Earner x-positions shared by all three views.
  var LO = 0.20, MI = 0.50, HI = 0.80;

  window.ECONOS_TAX_BURDEN_TYPES_SPEC = {
    width: 640,
    height: 330,
    chartArea: { x: 64, y: 26, width: 536, height: 244 },
    className: 'tax-burden-types-svg',
    background: '#FFFFFF',
    layers: ['tbt-1', 'tbt-2', 'tbt-3'],
    layerMode: 'exclusive',
    axes: {
      x: { label: 'Income' },
      y: { label: 'Average tax rate (%)' }
    },

    curves: [
      { id: 'PROG', d: PROG, tone: 'green', label: 'Progressive', strokeWidth: 2.8,
        labelDx: -6, labelDy: -10, anchor: 'end', layer: 'tbt-1' },
      { id: 'PROP', d: PROP, tone: 'blue', label: 'Proportional', strokeWidth: 2.8,
        labelDx: -6, labelDy: -10, anchor: 'end', layer: 'tbt-2' },
      { id: 'REGR', d: REGR, tone: 'purple', label: 'Regressive', strokeWidth: 2.8,
        labelDx: -6, labelDy: 16, anchor: 'end', layer: 'tbt-3' }
    ],

    points: [
      /* tbt-1 — burden rises with income */
      { x: LO, on: 'PROG', tone: 'green', radius: 5, layer: 'tbt-1' },
      { x: MI, on: 'PROG', tone: 'green', radius: 5, layer: 'tbt-1' },
      { x: HI, on: 'PROG', tone: 'green', radius: 5, gridlines: 'slate', layer: 'tbt-1' },

      /* tbt-2 — same average rate for everyone */
      { x: LO, on: 'PROP', tone: 'blue', radius: 5, layer: 'tbt-2' },
      { x: MI, on: 'PROP', tone: 'blue', radius: 5, layer: 'tbt-2' },
      { x: HI, on: 'PROP', tone: 'blue', radius: 5, layer: 'tbt-2' },

      /* tbt-3 — burden falls as income rises */
      { x: LO, on: 'REGR', tone: 'purple', radius: 5, gridlines: 'slate', layer: 'tbt-3' },
      { x: MI, on: 'REGR', tone: 'purple', radius: 5, layer: 'tbt-3' },
      { x: HI, on: 'REGR', tone: 'purple', radius: 5, layer: 'tbt-3' }
    ],

    texts: [
      // Earner labels along the x-axis — shared by every view.
      { x: LO, y: -0.085, text: 'Low earner', tone: 'slate', fontSize: 10.5, anchor: 'middle' },
      { x: MI, y: -0.085, text: 'Middle earner', tone: 'slate', fontSize: 10.5, anchor: 'middle' },
      { x: HI, y: -0.085, text: 'High earner', tone: 'slate', fontSize: 10.5, anchor: 'middle' },

      { x: 0.30, y: 0.62, text: 'average rate rises', tone: 'green', bold: true, fontSize: 11.5, anchor: 'middle', layer: 'tbt-1' },
      { x: 0.50, y: 0.62, text: 'average rate constant', tone: 'blue', bold: true, fontSize: 11.5, anchor: 'middle', layer: 'tbt-2' },
      { x: 0.68, y: 0.62, text: 'average rate falls', tone: 'purple', bold: true, fontSize: 11.5, anchor: 'middle', layer: 'tbt-3' }
    ]
  };
})();
