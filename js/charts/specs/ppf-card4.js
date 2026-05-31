/* ============================================================
   PPF card 4 — declarative spec for ppfConsumerCapital.

   The "Jamland" story (UK substituted). One country's investment
   trajectory across 4 views.

   View 1 — Country context
     Three country dots on shared conceptual PPF₁: UK (~18% invest),
     Germany (~22%), China (~42%).

   View 2 — UK moves A → B along PPF₁
     UK only. A is its current position. Dashed arrow ABOVE PPF₁ and
     dashed projection gridlines from B to the axes show the potential
     move to B — more capital goods, fewer consumer goods.

   View 3 — PPF shifts outward; B → C straight up
     Years of investment at B has lifted productive capacity. PPF₁ is
     now DASHED, PPF₂ appears as the new SOLID outward frontier. A
     short vertical arrow from B up to C — same Capital Goods level,
     but C sits on PPF₂ so consumer goods are higher. The shift gives
     "more for nothing" at the same investment level.

   View 4 — C → D along PPF₂
     With the bigger frontier in hand, the country specialises back
     toward consumer-heavy mix. C → D moves leftward along PPF₂.
     The pedagogical pay-off: D has MORE consumer goods AND MORE
     capital goods than original A.

   Layer visibility is controlled by per-view `show: [...]` arrays in
   the data file. PPF₁ has two versions (solid + dashed) and shows
   the right one per view; A→B, B→C and C→D arrows are each in their
   own layer so they appear only in the view that introduces them.

   PPF₁ deliberately does NOT extend to the right edge of the chart —
   leaving clear room for PPF₂ to be visibly further outward.
   ============================================================ */
(function () {
  'use strict';

  // PPF₁ shrunk so PPF₂ can be visibly outward of it.
  //   PPF₁ ends at chart (0.75, 0); peaks at (0, 0.65).
  //   PPF₂ ends at chart (1.0,  0); peaks at (0, 0.85).
  var PPF1_D = 'M 0,0.65 C 0.4,0.65 0.75,0.05 0.75,0';
  var PPF2_D = 'M 0,0.85 C 0.55,0.85 1.0,0.05 1.0,0';

  // Key positions:
  //   A on PPF₁ at t≈0.15 → (0.175, 0.613)   UK current; high consumer, low capital
  //   B on PPF₁ at t≈0.60 → (0.601, 0.251)   UK after reallocating to capital
  //   C on PPF₂ directly above B → (0.601, 0.554)   same capital as B; more consumer
  //                                                  because PPF has shifted out
  //   D on PPF₂ at t≈0.20 → (0.315, 0.766)   consumer specialisation on PPF₂;
  //                                            MORE of both than A originally
  var A = { x: 0.175, y: 0.613 };
  var B = { x: 0.601, y: 0.251 };
  var C = { x: 0.601, y: 0.554 };
  var D = { x: 0.315, y: 0.766 };

  window.ECONOS_PPF_CARD4_SPEC = {
    width: 440,
    height: 300,
    chartArea: { x: 55, y: 30, width: 340, height: 238 },
    className: 'ppf-investment-svg',
    axes: {
      x: { label: 'Capital Goods' },
      y: { label: 'Consumer Goods' }
    },
    defs:
      '<marker id="ppfcc-pp" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><polygon points="0 0,7 3.5,0 7" fill="#7C3AED"/></marker>' +
      '<marker id="ppfcc-gr" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><polygon points="0 0,7 3.5,0 7" fill="#059669"/></marker>',

    // Always-visible: just the UK dot — no label. The "UK" text appears
    // only in view 1 (countries layer); the "A" text appears in views
    // 2-4 (a-lbl layer). Splitting the identity from the dot avoids
    // having both "UK" and "A" labels collide on the same position.
    points: [
      { x: A.x, y: A.y, tone: 'purple', radius: 6 }
    ],

    viewDefaultsHidden: true,
    views: [
      /* ---------- 'countries': UK label + Germany + China (view 1 only) ----------
         Country positions are sized to actually sit ON PPF₁:
           Germany at t≈0.49 → (0.52, 0.353)
           China   at t≈0.77 → (0.70, 0.108)
         The UK label is here (not on the top-level UK dot) so it disappears
         when the narrative shifts to A in views 2-4. */
      {
        key: 'countries',
        contentLayer: 'countries',
        points: [
          { x: 0.520, y: 0.353, tone: 'blue',  label: 'Germany', radius: 6 },
          { x: 0.700, y: 0.108, tone: 'amber', label: 'China',   radius: 6 }
        ],
        texts: [
          { x: A.x + 0.03, y: A.y, text: 'UK', tone: 'purple', bold: true, fontSize: 13, anchor: 'start' }
        ]
      },

      /* ---------- 'ppf1s': solid PPF₁ (views 1-2) ----------
         Curve label uses the engine default (above the endpoint) so it
         clears the "Capital Goods" X-axis label below. */
      {
        key: 'ppf1s',
        contentLayer: 'ppf1s',
        curves: [
          { id: 'ppf1', d: PPF1_D, tone: 'blue', label: 'PPF₁', strokeWidth: 2.5 }
        ]
      },

      /* ---------- 'ppf1d': dashed PPF₁ (views 3-4) ---------- */
      {
        key: 'ppf1d',
        contentLayer: 'ppf1d',
        curves: [
          { id: 'ppf1d', d: PPF1_D, tone: 'blue', strokeWidth: 2, dashed: '6 4', opacity: 0.55, label: 'PPF₁' }
        ]
      },

      /* ---------- 'a-lbl': "A" label on the UK dot (views 2-4) ---------- */
      {
        key: 'a-lbl',
        contentLayer: 'a-lbl',
        texts: [
          { x: A.x, y: A.y + 0.09, text: 'A', tone: 'purple', bold: true, fontSize: 18 }
        ]
      },

      /* ---------- 'b-pos': B dot only (views 2-4) ---------- */
      {
        key: 'b-pos',
        contentLayer: 'b-pos',
        points: [
          { x: B.x, y: B.y, tone: 'purple', label: 'B', radius: 6 }
        ]
      },

      /* ---------- 'a-b-arrow': dashed arrow A→B + projection lines (view 2 only) ---------- */
      {
        key: 'a-b-arrow',
        contentLayer: 'a-b-arrow',
        arrows: [
          // Dashed quadratic arrow A→B, bowing CLEARLY above PPF₁.
          // Uses engine default ARROW_BUFFER (14) so the arrowhead
          // clears both A and B dots.
          { d: 'M ' + A.x + ',' + A.y + ' Q 0.39,0.85 ' + B.x + ',' + B.y,
            tone: 'purple', strokeWidth: 2, dashed: '6 3', markerEnd: 'ppfcc-pp' },
          // Dashed projection gridlines from B to both axes (potential-position visual)
          { x1: 0, y1: B.y, x2: B.x, y2: B.y, tone: 'gray', strokeWidth: 1, dashed: '4 3', buffer: 0 },
          { x1: B.x, y1: 0, x2: B.x, y2: B.y, tone: 'gray', strokeWidth: 1, dashed: '4 3', buffer: 0 }
        ]
      },

      /* ---------- 'ppf2': solid PPF₂ outward (views 3-4) ---------- */
      {
        key: 'ppf2',
        contentLayer: 'ppf2',
        curves: [
          { id: 'ppf2', d: PPF2_D, tone: 'green', label: 'PPF₂', strokeWidth: 2.5, labelDy: -22 }
        ]
      },

      /* ---------- 'c-pos': C dot (views 3-4) ---------- */
      {
        key: 'c-pos',
        contentLayer: 'c-pos',
        points: [
          { x: C.x, y: C.y, tone: 'green', label: 'C', radius: 6 }
        ]
      },

      /* ---------- 'b-c-arrow': vertical arrow B→C (views 3-4) ---------- */
      {
        key: 'b-c-arrow',
        contentLayer: 'b-c-arrow',
        arrows: [
          // Straight vertical arrow from B (on dashed PPF₁) up to C (on PPF₂).
          // Same Capital Goods level — more Consumer Goods because the frontier
          // has expanded.
          { x1: B.x, y1: B.y, x2: C.x, y2: C.y,
            tone: 'green', strokeWidth: 2, dashed: '5 3', markerEnd: 'ppfcc-gr' }
        ]
      },

      /* ---------- 'd-arrow': D dot + arrow C→D along PPF₂ (view 4 only) ---------- */
      {
        key: 'd-arrow',
        contentLayer: 'd-arrow',
        points: [
          // D sits on PPF₂. The curve sweeps both above-right of D (toward
          // the Y-axis intercept) and right (toward the C area), so "left
          // of dot" puts the label IN the curve's path, and "right of dot"
          // collides with the C→D arrowhead. Clean spot is BELOW the dot
          // (in the attainable region under PPF₂). labelDy positive pushes
          // down; anchor='middle' centres the label horizontally on the dot.
          { x: D.x, y: D.y, tone: 'green', label: 'D', radius: 6, labelDx: 0, labelDy: 14, anchor: 'middle' }
        ],
        arrows: [
          // Movement-along-PPF₂ arrow from C to D. Bows slightly above PPF₂
          // (same convention as the A→B arrow on PPF₁ in view 2).
          { d: 'M ' + C.x + ',' + C.y + ' Q 0.43,0.85 ' + D.x + ',' + D.y,
            tone: 'green', strokeWidth: 2, dashed: '5 3', markerEnd: 'ppfcc-gr' }
        ]
      }
    ]
  };
})();
