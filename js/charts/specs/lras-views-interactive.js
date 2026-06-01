/* ============================================================
   LRAS Views Interactive — engine spec for lrasViewsInteractive.
   Aggregate-supply card 3 "The LRAS curve".

   Classical vs Keynesian as a PERSPECTIVE TOGGLE (not a stepped
   view sequence). Default Classical; the pill above the chart
   flips to Keynesian. The two AS shapes cross-fade via the
   engine's opacity-based perspective CSS — same chart frame,
   two interpretations.

     perspective='classical' → vertical LRAS at Yf + equilibrium
                               point at (Yf, P₀)
     perspective='keynesian' → textbook reverse-L:
                               • PERFECTLY horizontal flat range
                                 (zero slope — common student error)
                               • smooth bottleneck curve
                               • vertical at Yf — capacity ceiling
                               + three region labels

   References for the Keynesian shape: tutor2u 2.3.3 LRAS,
   TutorChase Edexcel notes, IBonomics Keynesian AD–LRAS diagram —
   all describe the same three-zone "bendy L".

   No layerAliases — articles don't yet embed this chart, and the
   perspective system has no equivalent alias mechanism. Add one
   if/when an article needs it.
   ============================================================ */
(function () {
  'use strict';

  var YF = 0.528;
  var P0 = 0.480;

  window.ECONOS_LRAS_VIEWS_INTERACTIVE_SPEC = {
    width: 440,
    height: 300,
    chartArea: { x: 55, y: 18, width: 360, height: 254 },
    className: 'lras-views-interactive-svg',
    perspectives: ['classical', 'keynesian'],
    axes: {
      x: { label: 'Real output (Y)' },
      y: { label: 'Price level (P)' }
    },

    curves: [
      /* ── Classical: straight vertical LRAS at Yf ── */
      { d: 'M ' + YF + ',0 L ' + YF + ',0.992',
        tone: 'blue', label: 'LRAS', strokeWidth: 2.5,
        labelDx: 8, labelDy: -2, anchor: 'start',
        perspective: 'classical' },

      /* ── Keynesian: textbook reverse-L shape ──
         M  : start at low-Y, low-P (just past the y-axis)
         L  : PERFECTLY horizontal flat range (no slope)
         C  : smooth bottleneck transition (cubic Bezier)
              — first control point keeps the tangent flat
                so the join with the horizontal is smooth
              — second control point sits on the Yf vertical
                so the join with the capacity ceiling is smooth
         L  : vertical at Yf to the top of the chart            */
      { d: 'M 0.042,0.224 L 0.300,0.224 C 0.450,0.224 ' + YF + ',0.450 ' + YF + ',0.850 L ' + YF + ',0.992',
        tone: 'amber', label: 'LRAS', strokeWidth: 2.5,
        labelDx: 0, labelDy: -10, anchor: 'middle',
        perspective: 'keynesian' },

      /* ── Keynesian: dashed Yf reference so the vertical zone
            reads as a hard ceiling, not just a curve tail ── */
      { d: 'M ' + YF + ',0.040 L ' + YF + ',0.992',
        tone: 'slate', strokeWidth: 1, dashed: '4 3',
        perspective: 'keynesian' }
    ],

    points: [
      /* Classical equilibrium dot at (Yf, P₀) with gridlines + ticks */
      { x: YF, y: P0, tone: 'blue', radius: 5.5, hollow: true,
        gridlines: 'slate', ticks: { y: 'P₀' },
        perspective: 'classical' }
    ],

    texts: [
      /* Classical: Yf tick + sub-caption */
      { x: YF, y: -0.063, text: 'Yf', tone: 'slate', bold: true,
        fontSize: 12, anchor: 'middle', perspective: 'classical' },

      /* Keynesian: three region labels */
      { x: 0.165, y: 0.157, text: 'Flat range',
        tone: 'green', bold: true, anchor: 'middle', perspective: 'keynesian' },
      { x: 0.420, y: 0.370, text: 'Rising range',
        tone: 'amber', bold: true, anchor: 'middle', perspective: 'keynesian' },
      { x: 0.625, y: 0.835, text: 'Capacity limit',
        tone: 'rose', bold: true, anchor: 'start', perspective: 'keynesian' },
      /* Keynesian: Yf tick */
      { x: YF, y: -0.051, text: 'Yf', tone: 'slate', bold: true,
        fontSize: 12, anchor: 'middle', perspective: 'keynesian' }
    ]
  };
})();
