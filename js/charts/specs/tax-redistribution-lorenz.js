/* ============================================================
   Tax redistribution on a Lorenz curve — engine spec for
   taxRedistributionLorenz (Taxation 4.5.2 Card 6).

   Two exclusive views on the standard Lorenz frame (line of
   equality dashed, cumulative population x vs cumulative income y):

     trl-1  BEFORE TAX — the market-income Lorenz curve, deeply
            bowed away from the 45° line (more unequal).
     trl-2  AFTER TAX & TRANSFERS — the same Lorenz curve pulled
            toward the line of equality. House shift styling: the
            original goes dashed (same purple — same line), the new
            curve is solid, the shift arrow sits between the two.

   Arrow seated from the solved curve positions at x≈0.55:
   before y≈0.191, after y≈0.350 (cubic-solved, not eyeballed).
   ============================================================ */
(function () {
  'use strict';

  var EQUALITY = 'M 0,0 L 1,1';
  var BEFORE   = 'M 0,0 C 0.45,0.05 0.80,0.22 1,1';
  var AFTER    = 'M 0,0 C 0.35,0.12 0.70,0.40 1,1';

  window.ECONOS_TAX_REDISTRIBUTION_LORENZ_SPEC = {
    width: 640,
    height: 470,
    chartArea: { x: 72, y: 26, width: 528, height: 390 },
    className: 'tax-redistribution-lorenz-svg',
    background: '#FFFFFF',
    layers: ['trl-1', 'trl-2'],
    layerMode: 'exclusive',
    axes: {
      x: { label: 'Cumulative % of population' },
      y: { label: 'Cumulative % of income' }
    },

    curves: [
      // 45° line of equality — every view.
      { id: 'EQ', d: EQUALITY, tone: 'slate', strokeWidth: 2, dashed: '5 4' },

      /* trl-1: before tax, solid. Curve labels live in texts[] — every
         curve converges at (1,1) so there is no clash-free corridor for
         end labels; mid-curve text placements are solved numerically. */
      { id: 'LZb', d: BEFORE, tone: 'purple', strokeWidth: 3, layer: 'trl-1' },

      /* trl-2: before dashed (shifted-from) + after solid (same line, same colour) */
      { id: 'LZb2', d: BEFORE, tone: 'purple', dashed: '7 4', opacity: 0.6,
        strokeWidth: 2.2, layer: 'trl-2' },
      { id: 'LZa', d: AFTER, tone: 'purple', strokeWidth: 3, layer: 'trl-2' }
    ],

    points: [
      { x: 0, y: 0, tone: 'slate', radius: 4 },
      { x: 1, y: 1, tone: 'slate', radius: 4 }
    ],

    arrows: [
      /* trl-2: the redistribution shift — between the curves at x≈0.55,
         pointing from the before curve (y≈0.191) toward the after curve
         (y≈0.350), seated ~0.03 inside each. */
      { x1: 0.55, y1: 0.221, x2: 0.55, y2: 0.320,
        tone: 'purple', strokeWidth: 2, markerEnd: 'econos-arrow-purple',
        buffer: 0, layer: 'trl-2' }
    ],

    texts: [
      { x: 0.28, y: 0.58, text: 'Line of equality (45°)', tone: 'slate', bold: true, fontSize: 11.5, anchor: 'middle' },
      /* Short textbook-style labels: every horizontal label in this fan
         of converging curves was checked numerically against the 45° line
         and both Lorenz cubics — long labels can't avoid a crossing, short
         ones can. The full name lives in the view copy. */
      { x: 0.42, y: 0.30, text: 'Before tax', tone: 'purple', bold: true, fontSize: 12, anchor: 'middle', layer: 'trl-1' },
      { x: 0.36, y: 0.27, text: 'After tax', tone: 'purple', bold: true, fontSize: 12, anchor: 'middle', layer: 'trl-2' },
      { x: 0.80, y: 0.30, text: 'Before tax', tone: 'purple', fontSize: 11, opacity: 0.7, anchor: 'middle', layer: 'trl-2' }
    ]
  };
})();
