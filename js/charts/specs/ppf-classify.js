/* ============================================================
   PPF — "classify the point" (1.1.4 card 2).
   Same frontier as the big-picture chart, but each point carries
   a short on-chart verdict (✓ Efficient / Underused / Unattainable)
   so the chart reads as a classification at a glance. Rendered
   full-width above the region cards.
   ============================================================ */
(function () {
  'use strict';

  window.ECONOS_PPF_CLASSIFY_SPEC = {
    width: 440,
    height: 360,
    chartArea: { x: 58, y: 46, width: 330, height: 264 },
    className: 'ppf-svg',
    axes: {
      x: { label: 'Consumer goods' },
      y: { label: 'Capital goods' }
    },
    curves: [
      { id: 'ppf1', d: 'M 0,0.92 C 0.42,0.92 0.92,0.42 0.92,0.04', tone: 'blue', strokeWidth: 3 }
    ],
    points: [
      { x: 0.46, on: 'ppf1', tone: 'blue',  label: 'A', desc: '✓ Efficient',   anchor: 'start', labelDx: 11, labelDy: -4 },
      { x: 0.24, y: 0.28,    tone: 'amber', label: 'B', desc: 'Underused',     anchor: 'start', labelDx: 11, labelDy: -4 },
      { x: 0.76, y: 0.68,    tone: 'green', label: 'C', desc: 'Unattainable',  anchor: 'start', labelDx: 11, labelDy: -4 }
    ]
  };
})();
