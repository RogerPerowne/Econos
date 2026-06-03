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
  // Curve id is panel-unique so the engine's curve registry (which merges
  // every panel's curves into one shared lookup) doesn't drop one.
  function todayChart(originX, originY, dotX, tone) {
    var ppfId = 'ppf-today-' + tone;
    return {
      chartArea: { x: originX + 38, y: originY + 22, width: 175, height: 138 },
      axes: { x: { label: 'Consumer goods' }, y: { label: 'Capital goods' } },
      curves: [
        { id: ppfId, d: PPF1, tone: tone, strokeWidth: 2.6 }
      ],
      points: [
        { x: dotX, on: ppfId, tone: tone, radius: 6 }
      ]
    };
  }

  // Bottom-row "future" chart: PPF₁ dashed + PPF₂ solid + perpendicular
  // shift arrow cast from PPF₁ to PPF₂ at the same t (≈ where today's
  // dot sat). Curve ids are panel-unique to avoid the same engine-wide
  // registry-collision that hit ppf-shifts-trio (PR #992); markers use
  // the engine's built-in tone-named markers since panel-level `defs`
  // are dropped by the engine (PR #993).
  function futureChart(originX, originY, ppf2D, tone, t) {
    var id1 = 'ppf1-future-' + tone, id2 = 'ppf2-future-' + tone;
    return {
      chartArea: { x: originX + 38, y: originY + 22, width: 175, height: 138 },
      axes: { x: { label: 'Consumer goods' }, y: { label: 'Capital goods' } },
      curves: [
        { id: id1, d: PPF1,  tone: tone, strokeWidth: 2,   dashed: '5 4', opacity: 0.55 },
        { id: id2, d: ppf2D, tone: tone, strokeWidth: 2.6 }
      ],
      arrows: [
        // buffer:2 — the perpendicular gap from PPF₁ to PPF₂ in these
        // small 175×138 panels is only ~22px, so the engine's default
        // 14px end-pull would shrink the visible arrow to nothing.
        { perpendicular: { from: id1, t: t, to: id2 },
          tone: tone, strokeWidth: 2, lineCap: 'round',
          markerEnd: 'econos-arrow-' + (tone === 'amber' ? 'amber' : 'blue'),
          buffer: 2 }
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
