/* ============================================================
   PPF — "today vs tomorrow" (1.1.4 card 6).
   2×2 small-multiples: Economy A chooses MORE consumer / FEWER
   capital → modest outward shift. Economy B chooses MORE capital
   / FEWER consumer → larger outward shift.
   ============================================================ */
(function () {
  'use strict';

  var PPF1 = 'M 0,0.78 C 0.40,0.78 0.78,0.40 0.78,0';
  var PPF2_MODEST = 'M 0,0.88 C 0.46,0.88 0.88,0.46 0.88,0';
  var PPF2_LARGER = 'M 0,1.02 C 0.55,1.02 1.02,0.55 1.02,0';

  function chart(originX, originY, ppfD, dot, tone, dashed) {
    return {
      chartArea: { x: originX + 38, y: originY + 22, width: 175, height: 138 },
      axes: { x: { label: 'Consumer goods' }, y: { label: 'Capital goods' } },
      curves: [
        { id: 'ppf', d: ppfD, tone: tone, strokeWidth: 2.6, dashed: dashed }
      ],
      points: dot ? [ { x: dot.x, y: dot.y, tone: tone, radius: 6 } ] : []
    };
  }

  function arrowChart(originX, originY, ppf1D, ppf2D, tone) {
    return {
      chartArea: { x: originX + 38, y: originY + 22, width: 175, height: 138 },
      axes: { x: { label: 'Consumer goods' }, y: { label: 'Capital goods' } },
      defs:
        '<marker id="tt-' + tone + '" viewBox="0 0 8 6" markerWidth="5" markerHeight="5" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="' +
        (tone === 'blue' ? '#2563EB' : '#D97706') + '"/></marker>',
      curves: [
        { id: 'ppf1', d: ppf1D, tone: tone, strokeWidth: 2,   dashed: '5 4', opacity: 0.55 },
        { id: 'ppf2', d: ppf2D, tone: tone, strokeWidth: 2.6 }
      ],
      arrows: [
        { x1: 0.45, y1: 0.45, x2: 0.62, y2: 0.62, tone: tone, strokeWidth: 1.8, lineCap: 'round', markerEnd: 'tt-' + tone, buffer: 0 }
      ]
    };
  }

  window.ECONOS_PPF_TODAY_TOMORROW_SPEC = {
    width: 540,
    height: 360,
    divider: { x: 270, y1: 16, y2: 350, stroke: '#E2E8F0', dashed: '4 4' },
    panels: [
      // Top-left: Economy A today (more consumer goods)
      chart(  0,   0, PPF1, { x: 0.55, y: 0.40 }, 'blue'),
      // Top-right: Economy B today (more capital goods)
      chart(270,   0, PPF1, { x: 0.30, y: 0.66 }, 'amber'),
      // Bottom-left: Economy A future (modest shift)
      arrowChart(  0, 180, PPF1, PPF2_MODEST, 'blue'),
      // Bottom-right: Economy B future (larger shift)
      arrowChart(270, 180, PPF1, PPF2_LARGER, 'amber')
    ]
  };
})();
