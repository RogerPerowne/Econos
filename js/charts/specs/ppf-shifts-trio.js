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

  // Shared PPF₁ shape (used in all three panels — dashed where the
  // shifted curve takes over as the new frontier).
  var PPF1 = 'M 0,0.78 C 0.40,0.78 0.78,0.40 0.78,0';

  // Outward PPF₂ — bigger frontier
  var PPF2_OUT = 'M 0,0.96 C 0.50,0.96 0.96,0.50 0.96,0';
  // Inward PPF₂ — smaller frontier
  var PPF2_IN  = 'M 0,0.56 C 0.28,0.56 0.56,0.28 0.56,0';
  // Biased PPF₂ — stretches more on the X axis than Y
  var PPF2_BIAS = 'M 0,0.84 C 0.36,0.84 0.95,0.30 0.95,0';

  function panel(originX, ppf2D, tone, arrow) {
    return {
      chartArea: { x: originX + 40, y: 30, width: 170, height: 175 },
      axes: { x: { label: 'Consumer goods' }, y: { label: 'Capital goods' } },
      defs:
        '<marker id="ppfs-' + tone + '" viewBox="0 0 8 6" markerWidth="5" markerHeight="5" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="' +
        (tone === 'green' ? '#059669' : tone === 'rose' ? '#DC2626' : '#7C3AED') + '"/></marker>',
      curves: [
        { id: 'ppf1', d: PPF1,    tone: tone, strokeWidth: 2.4, dashed: '6 4', label: 'PPF₁', labelTone: tone, labelDx: 4 },
        { id: 'ppf2', d: ppf2D,   tone: tone, strokeWidth: 2.8, label: 'PPF₂', labelTone: tone, labelDx: 4 }
      ],
      arrows: [arrow]
    };
  }

  window.ECONOS_PPF_SHIFTS_TRIO_SPEC = {
    width: 660,
    height: 230,
    divider: { x: 220, y1: 16, y2: 220, stroke: '#E2E8F0', dashed: '4 4' },
    panels: [
      panel(  0, PPF2_OUT, 'green', { x1: 0.42, y1: 0.36, x2: 0.62, y2: 0.56, tone: 'green',  strokeWidth: 1.8, lineCap: 'round', markerEnd: 'ppfs-green', buffer: 0 }),
      panel(220, PPF2_IN,  'rose',  { x1: 0.50, y1: 0.50, x2: 0.32, y2: 0.32, tone: 'rose',   strokeWidth: 1.8, lineCap: 'round', markerEnd: 'ppfs-rose',  buffer: 0 }),
      // Divider for the biased panel
      { box: { x: 440, y: 16, width: 0, height: 0 } },
      panel(440, PPF2_BIAS, 'purple', { x1: 0.50, y1: 0.45, x2: 0.72, y2: 0.40, tone: 'purple', strokeWidth: 1.8, lineCap: 'round', markerEnd: 'ppfs-purple', buffer: 0 })
    ]
  };
})();
