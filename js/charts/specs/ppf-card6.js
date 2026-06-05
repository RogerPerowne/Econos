/* ============================================================
   PPF card 6 – declarative spec for ppfTradeInteractive.
   Teaches gains from trade and comparative advantage. A country
   specialises in production at P (on its PPF), trades, and
   consumes at C – a combination that lies BEYOND the PPF and
   would be unattainable in autarky.

   Two progressive-reveal layers via the legacy interactiveDiagram
   layer system (cumulative reveal, no per-view `show:` arrays):
     View 1 'Production frontier'  – base only (PPF + zone label)
     View 2 'Specialise at P'      → reveals idl-1 (P on PPF)
     View 3 'Consume at C'         → reveals idl-1 + idl-2
                                     (P, arrow P→C, C beyond curve)

   Pedagogical contract:
   - P sits ON PPF₁ exactly (verified at t≈0.45)
   - C is positioned in the unattainable region (chart y > PPF y at
     C's x) so it's visibly OUTSIDE the curve – that's the whole
     point of the diagram
   - "production" and "consumption" labels are SHORT italics,
     centred below their dots (clean side, no clash with curve)
   ============================================================ */
(function () {
  'use strict';

  // Same bowed-out PPF shape as cards 2/4. Single curve here; the
  // chart fills the canvas because there's no second PPF to fit.
  var PPF_D = 'M 0,0.772 C 0.55,0.772 1.0,0.05 1.0,0';

  // P on PPF at t≈0.45 → (0.650, 0.460). On-curve, verified.
  // C in the unattainable zone – PPF at x=0.79 has y≈0.305;
  //   C at y=0.60 is ~0.30 chart-units clear of the curve.
  var P = { x: 0.650, y: 0.460 };
  var C = { x: 0.790, y: 0.600 };

  window.ECONOS_PPF_CARD6_SPEC = {
    width: 440,
    height: 300,
    chartArea: { x: 55, y: 30, width: 340, height: 238 },
    className: 'ppf-trade-svg',
    axes: {
      x: { label: 'Good B' },
      y: { label: 'Good A' }
    },
    defs:
      '<marker id="ppftr-gr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#059669"/></marker>',
    curves: [
      { id: 'ppf', d: PPF_D, tone: 'blue', label: 'PPF', strokeWidth: 2.5 }
    ],
    zones: [
      // Unattainable zone label pinned to the top-right corner. Engine
      // auto-anchors to 'end' when x > 0.7 so the text grows leftward
      // from the position and fits inside the SVG.
      { x: 0.98, y: 0.92, text: 'Unattainable zone', tone: 'rose' }
    ],
    viewDefaultsHidden: true,
    views: [
      /* -------------------- idl-1: production at P -------------------- */
      {
        key: 'production-at-p',
        contentLayer: 'idl-1',
        points: [
          { x: P.x, y: P.y, tone: 'blue', label: 'P', radius: 6 }
        ],
        texts: [
          // "production" small italic below P, centred. The attainable
          // region (under the PPF) is the clean side for this label.
          { x: P.x, y: P.y - 0.06, text: 'production', tone: 'slate', italic: true, fontSize: 12, anchor: 'middle' }
        ]
      },

      /* -------------------- idl-2: arrow P→C, C beyond the PPF -------------------- */
      {
        key: 'consume-at-c',
        contentLayer: 'idl-2',
        points: [
          { x: C.x, y: C.y, tone: 'green', label: 'C', radius: 6 }
        ],
        arrows: [
          // Green dashed arrow from P (on PPF) to C (beyond). Engine
          // default ARROW_BUFFER (14) keeps the arrowhead clear of
          // both dots without manual tuning.
          { x1: P.x, y1: P.y, x2: C.x, y2: C.y,
            tone: 'green', strokeWidth: 1.8, dashed: '5 3', markerEnd: 'ppftr-gr' }
        ],
        texts: [
          // "consumption" small italic RIGHT of C, with enough offset to
          // clear the "C" point-label. The P→C arrow approaches C from
          // below-left so ANY label directly below C lands on the arrow
          // path. Right of C is the only clean side.
          { x: 0.86, y: C.y, text: 'consumption', tone: 'slate', italic: true, fontSize: 12, anchor: 'start' }
        ]
      }
    ]
  };
})();
