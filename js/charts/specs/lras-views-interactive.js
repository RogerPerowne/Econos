/* ============================================================
   LRAS Views Interactive — engine spec for lrasViewsInteractive.
   Aggregate-supply card 3 "Two views of long-run aggregate supply".

   Side-by-side comparison rendered as exclusive-layer views:
     view 1 → Classical LRAS (vertical line at Yf) + equilibrium
     view 2 → Keynesian LRAS (reverse-L / hockey-stick) with
              three labelled regions: flat → rising → vertical

   The Keynesian shape follows the textbook canonical form:
     • PERFECTLY horizontal at a low price level over the spare-
       capacity range (no sag, no slope — even tiny upward drift
       in the flat section is a common student error)
     • Smooth bottleneck curve as the economy approaches Yf
     • Vertical at Yf — capacity ceiling, AS perfectly inelastic
   References:
     tutor2u 2.3.3 LRAS, TutorChase Edexcel notes, IBonomics
     Keynesian AD–LRAS diagram. All three describe the same
     three-zone "bendy L" shape.

   The article-page bridge maps `.show-classical` → idl-1 and
   `.show-keynesian` → idl-2 so static articles can drive the
   same SVG via their wrapper-class state machine.
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
    layers: ['idl-1', 'idl-2'],
    layerMode: 'exclusive',
    layerAliases: {
      'idl-1': ['show-classical'],
      'idl-2': ['show-keynesian']
    },
    axes: {
      x: { label: 'Real output (Y)' },
      y: { label: 'Price level (P)' }
    },

    curves: [
      /* ── Classical (idl-1): straight vertical LRAS at Yf ── */
      { d: 'M ' + YF + ',0 L ' + YF + ',0.992',
        tone: 'blue', label: 'LRAS', strokeWidth: 2.5,
        labelDx: 8, labelDy: -2, anchor: 'start',
        layer: 'idl-1' },

      /* ── Keynesian (idl-2): textbook reverse-L shape ──
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
        layer: 'idl-2' },

      /* ── Keynesian: dashed Yf reference (so the vertical zone
            reads as a hard ceiling, not just a curve tail) ── */
      { d: 'M ' + YF + ',0.040 L ' + YF + ',0.992',
        tone: 'slate', strokeWidth: 1, dashed: '4 3',
        layer: 'idl-2' }
    ],

    points: [
      /* Classical equilibrium dot at (Yf, P₀) with gridlines + ticks */
      { x: YF, y: P0, tone: 'blue', radius: 5.5, hollow: true,
        gridlines: 'slate', ticks: { y: 'P₀' },
        layer: 'idl-1' }
    ],

    texts: [
      /* Classical: Yf tick + sub-caption */
      { x: YF, y: -0.063, text: 'Yf', tone: 'slate', bold: true,
        fontSize: 12, anchor: 'middle', layer: 'idl-1' },
      { x: YF, y: -0.118, text: '(full-capacity output)',
        tone: 'slate', fontSize: 9, anchor: 'middle', layer: 'idl-1' },

      /* Keynesian: three region labels */
      { x: 0.165, y: 0.157, text: 'Flat range',
        tone: 'green', bold: true, fontSize: 10, anchor: 'middle', layer: 'idl-2' },
      { x: 0.420, y: 0.370, text: 'Rising range',
        tone: 'amber', bold: true, fontSize: 10, anchor: 'middle', layer: 'idl-2' },
      { x: 0.625, y: 0.835, text: 'Capacity limit',
        tone: 'rose', bold: true, fontSize: 10, anchor: 'start', layer: 'idl-2' },
      /* Keynesian: Yf tick */
      { x: YF, y: -0.051, text: 'Yf', tone: 'slate', bold: true,
        fontSize: 12, anchor: 'middle', layer: 'idl-2' }
    ]
  };
})();
