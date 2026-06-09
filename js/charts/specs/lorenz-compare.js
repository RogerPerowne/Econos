/* ============================================================
   Lorenz Compare – engine spec for lorenzCompare.
   Inequality 4.2.2 card 4 "Reading the Lorenz curve".

   Two panels:
     LEFT  Country A vs Country B – two Lorenz curves on one diagram.
           A sits closer to the 45° line (more equal); B bows further
           away (more unequal).
     RIGHT Change over time – Year 1 bows further from the line; Year 2
           moves closer, so inequality has fallen.
   ============================================================ */
(function () {
  'use strict';

  var EQUALITY = { d: 'M 0,0 L 1,1', tone: 'slate', strokeWidth: 1.8, dashed: '5 4' };

  window.ECONOS_LORENZ_COMPARE_SPEC = {
    width: 720,
    height: 320,
    className: 'lorenz-compare-svg',
    divider: { x: 360, y1: 18, y2: 268 },

    panels: [
      /* ─── LEFT: Country A vs Country B ─── */
      {
        chartArea: { x: 56, y: 26, width: 248, height: 218 },
        title: 'Country A vs Country B',
        titleTone: 'slate',
        axes: { x: { label: 'Cumulative % population' }, y: { label: '% income' } },
        curves: [
          EQUALITY,
          { d: 'M 0,0 C 0.40,0.12 0.72,0.42 1,1', tone: 'green', strokeWidth: 2.8 },
          { d: 'M 0,0 C 0.56,0.03 0.86,0.16 1,1', tone: 'purple', strokeWidth: 2.8 }
        ],
        texts: [
          { x: 0.50, y: 0.66, text: 'Country A', tone: 'green', bold: true, fontSize: 11.5, anchor: 'middle' },
          { x: 0.74, y: 0.20, text: 'Country B', tone: 'purple', bold: true, fontSize: 11.5, anchor: 'middle' }
        ]
      },

      /* ─── RIGHT: Change over time ─── */
      {
        chartArea: { x: 416, y: 26, width: 248, height: 218 },
        title: 'Change over time',
        titleTone: 'blue',
        axes: { x: { label: 'Cumulative % population' }, y: { label: '% income' } },
        curves: [
          EQUALITY,
          { d: 'M 0,0 C 0.56,0.03 0.86,0.16 1,1', tone: 'rose', strokeWidth: 2.6, dashed: '6 4' },
          { d: 'M 0,0 C 0.42,0.13 0.74,0.44 1,1', tone: 'blue', strokeWidth: 2.8 }
        ],
        texts: [
          { x: 0.78, y: 0.16, text: 'Year 1', tone: 'rose', bold: true, fontSize: 11.5, anchor: 'middle' },
          { x: 0.46, y: 0.66, text: 'Year 2', tone: 'blue', bold: true, fontSize: 11.5, anchor: 'middle' }
        ]
      }
    ]
  };
})();
