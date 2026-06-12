/* ============================================================
   Macro Phillips curve – engine spec for macroPhillipsInteractive.
   Macroeconomic Objectives & Trade-offs topic – Card 4 "the
   prototypical trade-off". THEORY ONLY (no 1970s stagflation view –
   that lives in the Macro-conflicts topic via stagflationPhillips).

   A four-view cumulative STORY, stepped by buttons in the
   interactiveDiagram block (description right, analysis below):

     view 1 (idl-1)  The short-run trade-off: SRPC₁ + point A at the
                     NAIRU (U_N). Lower U ↔ higher π is the menu.
     view 2 (idl-2)  Stimulus A→B: demand boost pushes U below U_N to
                     U₁; the economy slides DOWN SRPC₁ – lower U, but
                     higher π. (movement along)
     view 3 (idl-3)  Expectations adjust: workers build in the higher
                     inflation, shifting the short-run curve UP from
                     SRPC₁ to SRPC₂; the LRPC is vertical at U_N. The
                     economy drifts B→C. (a shift, not a movement)
     view 4 (idl-4)  No long-run trade-off: U ends back at U_N but π is
                     PERMANENTLY higher (A→C is purely vertical). The
                     LRPC is vertical – the trade-off vanished.

   Mutually exclusive (`layerMode: 'exclusive'`) – each view is a
   self-contained snapshot of the story, driven by the view `show`
   arrays in the data file.

   Geometry (all on-stage, points sit exactly on their lines):
     SRPC₁ : M 0.06,0.80 L 0.90,0.20   (slope −0.7143)
     SRPC₂ : M 0.06,0.98 L 0.90,0.38   (SRPC₁ shifted up +0.18)
     U_N=0.46  U₁=0.28
     A (U_N on SRPC₁) = 0.46,0.51429
     B (U₁  on SRPC₁) = 0.28,0.64286
     C (U_N on SRPC₂) = 0.46,0.69429
   ============================================================ */
(function () {
  'use strict';

  var UN = 0.46, U1 = 0.28;
  var A = { x: UN, y: 0.51429 };
  var B = { x: U1, y: 0.64286 };
  var C = { x: UN, y: 0.69429 };

  var SRPC1 = 'M 0.06,0.80 L 0.90,0.20';
  var SRPC2 = 'M 0.06,0.98 L 0.90,0.38';
  var LRPCd = 'M 0.46,0.05 L 0.46,1';

  window.ECONOS_MACRO_PHILLIPS_SPEC = {
    width: 640,
    height: 470,
    chartArea: { x: 60, y: 24, width: 540, height: 390 },
    className: 'macro-phillips-svg',
    layers: ['idl-1', 'idl-2', 'idl-3', 'idl-4'],
    layerMode: 'exclusive',
    axes: {
      x: { label: 'Unemployment (U %)' },
      y: { label: 'Inflation (π %)' }
    },

    curves: [
      /* ── View 1: the short-run trade-off ─────────────────── */
      { id: 'SRPC1a', d: SRPC1, tone: 'blue', label: 'SRPC₁', strokeWidth: 2.6,
        labelDx: -8, labelDy: 16, anchor: 'end', layer: 'idl-1' },

      /* ── View 2: stimulus A→B (along SRPC₁) ──────────────── */
      { id: 'SRPC1b', d: SRPC1, tone: 'blue', label: 'SRPC₁', strokeWidth: 2.6,
        labelDx: -8, labelDy: 16, anchor: 'end', layer: 'idl-2' },

      /* ── View 3: expectations shift SRPC up ──────────────── */
      // SRPC₁ now faded + dashed (the curve we are leaving)
      { id: 'SRPC1c', d: SRPC1, tone: 'slate', label: 'SRPC₁', strokeWidth: 2,
        dashed: '5 4', opacity: 0.6, labelDx: -8, labelDy: 16, anchor: 'end',
        layer: 'idl-3' },
      // LRPC vertical at the NAIRU
      { id: 'LRPCc', d: LRPCd, tone: 'purple', strokeWidth: 2.4, dashed: '6 4',
        layer: 'idl-3' },
      // SRPC₂ shifted up
      { id: 'SRPC2c', d: SRPC2, tone: 'blue', label: 'SRPC₂', strokeWidth: 2.6,
        labelDx: -8, labelDy: -8, anchor: 'end', layer: 'idl-3' },

      /* ── View 4: no long-run trade-off ───────────────────── */
      { id: 'LRPCd', d: LRPCd, tone: 'purple', strokeWidth: 2.4, dashed: '6 4',
        layer: 'idl-4' },
      { id: 'SRPC2d', d: SRPC2, tone: 'blue', label: 'SRPC₂', strokeWidth: 2.6,
        labelDx: -8, labelDy: -8, anchor: 'end', layer: 'idl-4' }
    ],

    texts: [
      // LRPC label – placed inside, clear of the vertical line's top
      { x: 0.50, y: 0.93, text: 'LRPC', tone: 'purple', bold: true, anchor: 'start', layer: 'idl-3' },
      { x: 0.50, y: 0.93, text: 'LRPC', tone: 'purple', bold: true, anchor: 'start', layer: 'idl-4' }
    ],

    points: [
      /* View 1: A on SRPC₁ at U_N */
      { x: A.x, y: A.y, tone: 'slate', radius: 6, hollow: true,
        gridlines: 'slate', ticks: { x: 'U_N', y: 'π₁' },
        label: 'A', labelDx: 12, labelDy: -6, anchor: 'start', layer: 'idl-1' },

      /* View 2: A faded, B on SRPC₁ at U₁ */
      { x: A.x, y: A.y, tone: 'slate', radius: 5, hollow: true, opacity: 0.5,
        label: 'A', labelDx: 12, labelDy: -6, anchor: 'start', layer: 'idl-2' },
      { x: B.x, y: B.y, tone: 'amber', radius: 6, hollow: true,
        gridlines: 'amber', ticks: { x: 'U₁' },
        label: 'B', labelDx: -12, labelDy: -6, anchor: 'end', layer: 'idl-2' },

      /* View 3: B faded, C on SRPC₂ at U_N */
      { x: B.x, y: B.y, tone: 'amber', radius: 5, hollow: true, opacity: 0.5,
        label: 'B', labelDx: -12, labelDy: -6, anchor: 'end', layer: 'idl-3' },
      { x: C.x, y: C.y, tone: 'purple', radius: 6, hollow: true,
        gridlines: 'purple', ticks: { y: 'π₂' },
        label: 'C', labelDx: 12, labelDy: -6, anchor: 'start', layer: 'idl-3' },

      /* View 4: A faded (reference), C highlighted at U_N */
      { x: A.x, y: A.y, tone: 'slate', radius: 5, hollow: true, opacity: 0.5,
        gridlines: 'slate', ticks: { y: 'π₁' },
        label: 'A', labelDx: 12, labelDy: -6, anchor: 'start', layer: 'idl-4' },
      { x: C.x, y: C.y, tone: 'rose', radius: 7, hollow: true,
        gridlines: 'rose', ticks: { x: 'U_N', y: 'π₂' },
        label: 'C', labelDx: 12, labelDy: -6, anchor: 'start', layer: 'idl-4' }
    ],

    arrows: [
      /* View 2: A→B down the SRPC₁ */
      { x1: 0.44, y1: 0.5286, x2: 0.30, y2: 0.6286,
        tone: 'amber', strokeWidth: 1.8, markerEnd: 'econos-arrow-amber',
        buffer: 0, layer: 'idl-2' },

      /* View 3: B→C up onto the shifted SRPC₂ */
      { x1: 0.30, y1: 0.648, x2: 0.44, y2: 0.690,
        tone: 'purple', strokeWidth: 1.8, markerEnd: 'econos-arrow-purple',
        buffer: 0, layer: 'idl-3' },

      /* View 4: A→C purely vertical at U_N – permanently higher π */
      { x1: 0.46, y1: 0.527, x2: 0.46, y2: 0.681,
        tone: 'rose', strokeWidth: 2, markerEnd: 'econos-arrow-rose',
        buffer: 0, layer: 'idl-4' }
    ]
  };
})();
