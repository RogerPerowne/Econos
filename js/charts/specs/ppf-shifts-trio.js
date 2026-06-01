/* ============================================================
   PPF — "three kinds of shift" (1.1.4 card 5).
   Three side-by-side mini PPFs (outward / inward / biased), each
   with a coloured curve pair and an arrow showing the direction
   of shift. The header band per panel + bottom label are baked
   into the card data (methodGrid above the chart), so each panel
   here is just the chart.
   ============================================================ */
(function () {
  'use strict';

  // Shared PPF₁ shape — kept compact so each PPF₂ has clear visual
  // room to shift inward/outward without crowding inside small panels.
  var PPF1 = 'M 0,0.62 C 0.32,0.62 0.62,0.32 0.62,0';

  // Outward PPF₂ — clearly bigger frontier
  var PPF2_OUT  = 'M 0,0.95 C 0.50,0.95 0.95,0.50 0.95,0';
  // Inward  PPF₂ — clearly smaller frontier
  var PPF2_IN   = 'M 0,0.36 C 0.18,0.36 0.36,0.18 0.36,0';
  // Biased  PPF₂ — productivity gain stretches the X axis more than Y
  var PPF2_BIAS = 'M 0,0.72 C 0.30,0.72 0.92,0.28 0.92,0';

  // Build a panel. The shift arrow is declared geometrically via the
  // engine's `perpendicular: { from, t, to }` solver — anchored at t
  // on PPF₁, cast perpendicular until it hits PPF₂. Guarantees the
  // arrow truly sits BETWEEN the two curves (no eyeballed coords).
  function panel(originX, ppf2D, tone) {
    return {
      chartArea: { x: originX + 40, y: 30, width: 170, height: 175 },
      axes: { x: { label: 'Consumer goods' }, y: { label: 'Capital goods' } },
      defs:
        '<marker id="ppfs-' + tone + '" viewBox="0 0 8 6" markerWidth="5" markerHeight="5" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="' +
        (tone === 'green' ? '#059669' : tone === 'rose' ? '#DC2626' : '#7C3AED') + '"/></marker>',
      curves: [
        // PPF₁ label lifted up off the x-axis so it doesn't collide with
        // PPF₂'s end label (the two curves' right-end x-positions are too
        // close together for the small 170px panels).
        { id: 'ppf1', d: PPF1,  tone: tone, strokeWidth: 2.4, dashed: '6 4', label: 'PPF₁', labelTone: tone, labelDx: 4, labelDy: -32 },
        // PPF₂ label nudged slightly up + left so it doesn't clip the
        // right edge of the small panel when PPF₂ extends close to x=1.
        { id: 'ppf2', d: ppf2D, tone: tone, strokeWidth: 2.8,                label: 'PPF₂', labelTone: tone, labelDx: -4, labelDy: -10 }
      ],
      arrows: [
        { perpendicular: { from: 'ppf1', t: 0.5, to: 'ppf2' },
          tone: tone, strokeWidth: 2.6, lineCap: 'round',
          markerEnd: 'ppfs-' + tone }
      ]
    };
  }

  window.ECONOS_PPF_SHIFTS_TRIO_SPEC = {
    width: 660,
    height: 230,
    divider: { x: 220, y1: 16, y2: 220, stroke: '#E2E8F0', dashed: '4 4' },
    panels: [
      panel(  0, PPF2_OUT,  'green'),
      panel(220, PPF2_IN,   'rose'),
      panel(440, PPF2_BIAS, 'purple')
    ]
  };
})();
