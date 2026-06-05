/* ============================================================
   AD Slope Interactive – engine spec for adSlopeInteractive.

   The AD curve slopes downward – and we visually decompose WHY
   by walking through the three channels in turn:

     V1  AD curve + starting point A at (P₁, Y₁) – high price, low Y
     V2  Wealth effect (Pigou) – P falls, real money balances rise,
         consumption rises – show one channel arrow
     V3  Interest rate effect (Keynes) – P falls, money demand falls,
         interest rates fall, I and C rise – second channel arrow
     V4  International substitution – P falls, UK goods relatively
         cheaper, (X − M) rises – third channel arrow, ending at
         point B at (P₂, Y₂)

   No Classical/Keynesian toggle – both schools agree AD slopes down
   for these reasons; the storytelling lesson is the three channels.
   ============================================================ */
(function () {
  'use strict';

  window.ECONOS_AD_SLOPE_INTERACTIVE_SPEC = {
    width: 440,
    height: 305,
    chartArea: { x: 55, y: 18, width: 360, height: 254 },
    className: 'ad-slope-interactive-svg',
    layers: ['v-arrow', 'h-arrow', 'point-b', 'eff-wealth', 'eff-rate', 'eff-intl'],
    defs:
      '<marker id="ads-arr-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#1D4ED8"/></marker>' +
      '<marker id="ads-arr-green" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#059669"/></marker>' +
      '<marker id="ads-arr-amber" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#D97706"/></marker>',
    axes: {
      x: { label: 'Real output (Y)' },
      y: { label: 'Price level (P)' }
    },

    curves: [
      // AD – always visible, downward-sloping
      { id: 'AD', d: 'M 0.10,0.85 L 0.90,0.15',
        tone: 'blue', label: 'AD', strokeWidth: 2.5,
        labelDx: -6, labelDy: -10, anchor: 'end' }
    ],

    points: [
      // Point A – always visible, the starting (high-P, low-Y) state
      { x: 0.286, y: 0.65,
        tone: 'slate', radius: 5.5, hollow: true,
        gridlines: 'slate', ticks: { x: 'Y₁', y: 'P₁' },
        label: 'A', labelDx: -10, labelDy: -4, anchor: 'end' },
      // Point B (V4) – the lower-P, higher-Y endpoint
      { x: 0.714, y: 0.275,
        tone: 'green', radius: 5.5, hollow: true,
        gridlines: 'green', ticks: { x: 'Y₂', y: 'P₂' },
        label: 'B', labelDx: 10, labelDy: -4, anchor: 'start',
        layer: 'point-b' }
    ],

    arrows: [
      // Vertical arrow – P falls (V2+)
      { x1: 0.286, y1: 0.62, x2: 0.286, y2: 0.32,
        tone: 'blue', strokeWidth: 1.6, markerEnd: 'ads-arr-blue',
        buffer: 0, layer: 'v-arrow' },
      // Horizontal arrow – Y rises along AD (V4)
      { x1: 0.316, y1: 0.275, x2: 0.684, y2: 0.275,
        tone: 'green', strokeWidth: 1.6, markerEnd: 'ads-arr-green',
        buffer: 0, layer: 'h-arrow' }
    ],

    texts: [
      // Wealth-effect channel callout (V2)
      { x: 0.05, y: 0.50, text: '↑ wealth → C ↑', tone: 'green', bold: true,
        fontSize: 11, anchor: 'start', layer: 'eff-wealth' },
      // Interest-rate channel callout (V3)
      { x: 0.05, y: 0.42, text: '↓ rates → I, C ↑', tone: 'green', bold: true,
        fontSize: 11, anchor: 'start', layer: 'eff-rate' },
      // International-substitution channel callout (V4)
      { x: 0.05, y: 0.34, text: '↑ (X − M)', tone: 'green', bold: true,
        fontSize: 11, anchor: 'start', layer: 'eff-intl' }
    ]
  };
})();
