/* ============================================================
   PPF — "today vs tomorrow" (1.1.4 card 6).
   2×2 small-multiples: Economy A chooses MORE consumer / FEWER
   capital → modest outward shift. Economy B chooses MORE capital
   / FEWER consumer → larger outward shift.

   Top-row dots are snapped onto PPF via `on:` so they always sit
   on the curve. Bottom-row growth arrows use the engine's
   `perpendicular:` solver so they truly cast from PPF₁ to PPF₂.
   ============================================================ */
(function () {
  'use strict';

  var PPF1        = 'M 0,0.78 C 0.40,0.78 0.78,0.40 0.78,0';
  var PPF2_MODEST = 'M 0,0.88 C 0.46,0.88 0.88,0.46 0.88,0';
  var PPF2_LARGER = 'M 0,1.02 C 0.55,1.02 1.02,0.55 1.02,0';

  // Top-row "today" chart: a single PPF₁ with one dot snapped onto it.
  function todayChart(originX, originY, dotX, tone) {
    return {
      chartArea: { x: originX + 38, y: originY + 22, width: 175, height: 138 },
      axes: { x: { label: 'Consumer goods' }, y: { label: 'Capital goods' } },
      curves: [
        { id: 'ppf', d: PPF1, tone: tone, strokeWidth: 2.6 }
      ],
      points: [
        { x: dotX, on: 'ppf', tone: tone, radius: 6 }
      ]
    };
  }

  // Bottom-row "future" chart: PPF₁ dashed + PPF₂ solid + perpendicular
  // shift arrow cast from PPF₁ to PPF₂ at the same t (≈ where today's
  // dot sat), so the visual mid-curve growth arrow is engine-guaranteed.
  function futureChart(originX, originY, ppf2D, tone, t) {
    return {
      chartArea: { x: originX + 38, y: originY + 22, width: 175, height: 138 },
      axes: { x: { label: 'Consumer goods' }, y: { label: 'Capital goods' } },
      defs:
        '<marker id="tt-' + tone + '" viewBox="0 0 8 6" markerWidth="5" markerHeight="5" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="' +
        (tone === 'blue' ? '#2563EB' : '#D97706') + '"/></marker>',
      curves: [
        { id: 'ppf1', d: PPF1,  tone: tone, strokeWidth: 2,   dashed: '5 4', opacity: 0.55 },
        { id: 'ppf2', d: ppf2D, tone: tone, strokeWidth: 2.6 }
      ],
      arrows: [
        { perpendicular: { from: 'ppf1', t: t, to: 'ppf2' },
          tone: tone, strokeWidth: 1.8, lineCap: 'round',
          markerEnd: 'tt-' + tone }
      ]
    };
  }

  window.ECONOS_PPF_TODAY_TOMORROW_SPEC = {
    width: 540,
    height: 360,
    divider: { x: 270, y1: 16, y2: 350, stroke: '#E2E8F0', dashed: '4 4' },
    panels: [
      // Top row — "today" choice: Economy A leans consumer, B leans capital.
      todayChart(  0,   0, 0.60, 'blue'),    // A high on x (consumer-heavy)
      todayChart(270,   0, 0.25, 'amber'),   // B low on x (capital-heavy)
      // Bottom row — "future": A modest outward shift, B larger shift.
      futureChart(  0, 180, PPF2_MODEST, 'blue',  0.55),
      futureChart(270, 180, PPF2_LARGER, 'amber', 0.55)
    ]
  };
})();
