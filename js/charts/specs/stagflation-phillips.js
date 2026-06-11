/* ============================================================
   Stagflation Phillips – engine spec for stagflationPhillipsInteractive.
   Macro-conflicts topic – card 3 "1970s stagflation".

   3-view exclusive-layer Phillips story:
     view 1  → SRPC₁ + point A at U_N (original 1958 curve)
     view 2  → Friedman/Phelps long-run: LRPC vertical, SRPC₂ shifted
                up, points A→B→C arrow chain (A faded, B at U₁<U_N on
                SRPC₁, C back at U_N but on SRPC₂ – higher π).
     view 3  → 1970s stagflation: SRPC₃ shifted up by supply shock,
                point S at HIGHER U and HIGHER π – A faded.

   Mutually exclusive (`layerMode: 'exclusive'`) because each view
   tells a separate analytical story, not a cumulative build.
   ============================================================ */
(function () {
  'use strict';

  // Geometry preserved from the hand-rolled chart so the visual
  // doesn't shift. chartArea 540×260 inside a 640×340 viewBox.
  var U_N = 0.426;      // natural rate of unemployment
  var A   = { x: U_N,   y: 0.538 };
  var B   = { x: 0.241, y: 0.692 };
  var C   = { x: U_N,   y: 0.731 };
  var S   = { x: 0.630, y: 0.615 };

  window.ECONOS_STAGFLATION_PHILLIPS_SPEC = {
    width: 640,
    height: 340,
    chartArea: { x: 60, y: 20, width: 540, height: 260 },
    className: 'stagflation-phillips-svg',
    layers: ['idl-1', 'idl-2', 'idl-3'],
    layerMode: 'exclusive',
    axes: {
      x: { label: 'Unemployment (U %)' },
      y: { label: 'Inflation (π %)' }
    },

    curves: [
      /* ── View 1: original SRPC₁ ─────────────────────────── */
      { d: 'M 0.056,0.846 L 0.889,0.154',
        tone: 'blue', label: 'SRPC₁', strokeWidth: 2.6,
        labelDx: 6, labelDy: 4, anchor: 'start',
        layer: 'idl-1' },

      /* ── View 2: Friedman/Phelps long-run ──────────────── */
      // SRPC₁ faded
      { d: 'M 0.056,0.846 L 0.889,0.154',
        tone: 'slate', label: 'SRPC₁', strokeWidth: 2, dashed: '5 4',
        opacity: 0.6,
        labelDx: 6, labelDy: 4, anchor: 'start',
        layer: 'idl-2' },
      // LRPC vertical at U_N
      { d: 'M ' + U_N + ',0 L ' + U_N + ',1',
        tone: 'purple', label: 'LRPC', strokeWidth: 2.4, dashed: '6 4',
        labelDx: 8, labelDy: -2, anchor: 'start',
        layer: 'idl-2' },
      // SRPC₂ shifted UP by 0.192 (50 SVG px / 260 = 0.192)
      { d: 'M 0.056,1.038 L 0.889,0.346',
        tone: 'blue', label: 'SRPC₂', strokeWidth: 2.6,
        labelDx: 6, labelDy: 4, anchor: 'start',
        layer: 'idl-2' },

      /* ── View 3: 1970s stagflation ──────────────────────── */
      // SRPC₁ faded
      { d: 'M 0.056,0.846 L 0.889,0.154',
        tone: 'slate', label: 'SRPC₁', strokeWidth: 2, dashed: '5 4',
        opacity: 0.6,
        labelDx: 6, labelDy: 4, anchor: 'start',
        layer: 'idl-3' },
      // SRPC₃ shifted up by supply shock (64 SVG px / 260 = 0.246)
      { d: 'M 0.056,1.092 L 0.889,0.400',
        tone: 'blue', label: 'SRPC₃', strokeWidth: 2.6,
        labelDx: 6, labelDy: 4, anchor: 'start',
        layer: 'idl-3' }
    ],

    points: [
      /* View 1: point A on SRPC₁ at U_N */
      { x: A.x, y: A.y, tone: 'slate', radius: 6, hollow: true,
        gridlines: 'slate', ticks: { x: 'U_N', y: 'π₀' },
        label: 'A', labelDx: 12, labelDy: -4, anchor: 'start',
        layer: 'idl-1' },

      /* View 2: A faded, B on SRPC₁ at U₁, C on SRPC₂ at U_N */
      { x: A.x, y: A.y, tone: 'slate', radius: 5, hollow: true,
        opacity: 0.55,
        label: 'A', labelDx: 12, labelDy: -4, anchor: 'start',
        layer: 'idl-2' },
      { x: B.x, y: B.y, tone: 'amber', radius: 6, hollow: true,
        gridlines: 'amber', ticks: { x: 'U₁' },
        label: 'B', labelDx: -12, labelDy: -4, anchor: 'end',
        layer: 'idl-2' },
      { x: C.x, y: C.y, tone: 'green', radius: 6, hollow: true,
        gridlines: 'green', ticks: { y: 'π_C' },
        label: 'C', labelDx: 12, labelDy: -4, anchor: 'start',
        layer: 'idl-2' },

      /* View 3: A faded, S on SRPC₃ – higher U AND higher π */
      { x: A.x, y: A.y, tone: 'slate', radius: 5, hollow: true,
        opacity: 0.55,
        label: 'A', labelDx: 12, labelDy: -4, anchor: 'start',
        layer: 'idl-3' },
      { x: S.x, y: S.y, tone: 'red', radius: 7, hollow: true,
        gridlines: 'red', ticks: { x: 'U_S', y: 'π_S' },
        label: 'S', labelDx: 14, labelDy: -4, anchor: 'start',
        layer: 'idl-3' }
    ],

    arrows: [
      /* View 2: A→B (down the SRPC₁) then B→C (up onto SRPC₂) */
      { x1: A.x - 0.015, y1: A.y + 0.015, x2: B.x + 0.015, y2: B.y - 0.015,
        tone: 'amber', strokeWidth: 1.8,
        markerEnd: 'econos-arrow-amber', buffer: 0, layer: 'idl-2' },
      { x1: B.x + 0.015, y1: B.y, x2: C.x - 0.015, y2: C.y - 0.015,
        tone: 'green', strokeWidth: 1.8,
        markerEnd: 'econos-arrow-green', buffer: 0, layer: 'idl-2' },

      /* View 3: A→S diagonal – both axes worsen */
      { x1: A.x + 0.020, y1: A.y - 0.020, x2: S.x - 0.020, y2: S.y + 0.020,
        tone: 'red', strokeWidth: 2,
        markerEnd: 'econos-arrow-red', buffer: 0, layer: 'idl-3' }
    ]
  };
})();
