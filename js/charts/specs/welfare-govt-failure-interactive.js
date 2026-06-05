/* ============================================================
   Welfare / Government-Failure Interactive – engine spec for
   welfareGovtFailureInteractive. "Choosing the right tool" card
   in Government Intervention in Markets (theme-1).

   4-stage cumulative explorer of how a Pigouvian-tax correction
   to a negative externality can itself fail:
     base    → free-market: MPC, MSB, E₁ at (Qm, Pm)
     idl-1   → market failure: + MSC, E* at (Q*, P*), MEC bar, DWL₁
     idl-2   → policy attempt: + "ideal tax = MEC" callout on the
               existing MEC bar
     idl-3   → govt failure: + over-taxed S curve, E'' at (Q'', P''),
               DWL₂ triangle

   Geometry mirrors neg-externality-interactive (same MPC, MSB,
   MSC paths) so the two cards read as siblings; adds an
   over-taxed-supply line ABOVE MSC.

   Chart-space points (y=0 bottom, y=1 top):
     MPC          (0.080, 0.084) → (0.860, 0.868)   green upward
     MSB          (0.080, 0.868) → (0.860, 0.084)   amber downward
     MSC          (0.080, 0.308) → (0.860, 1.092)   blue dashed, parallel above MPC by +0.224
     Over-taxed S (0.080, 0.375) → (0.860, 1.159)   purple dashed, parallel above MPC by +0.291
     E₁  = MPC ∩ MSB  = (0.470, 0.476)
     E*  = MSC ∩ MSB  = (0.358, 0.588)
     E'' = OverTaxS ∩ MSB = (0.325, 0.622)
     MEC bar at chart-x 0.680 between MPC (y=0.084 + 1.005·0.6) and MSC (same + 0.224)
   ============================================================ */
(function () {
  'use strict';

  var slope = 1.005; // shared MPC / MSC / Over-taxed S slope (chart-units per chart-unit)
  var E1   = { x: 0.470, y: 0.476 }; // free-market equilibrium
  var Eopt = { x: 0.358, y: 0.588 }; // social optimum
  var E2   = { x: 0.325, y: 0.622 }; // over-taxed (govt-failure) equilibrium

  // MSC at Q'' (top of DWL₂)
  var MscAtQ2 = { x: E2.x, y: 0.228 + slope * E2.x }; // 0.555

  // MEC bracket at chart-x 0.680 (vertical bar between MPC and MSC)
  var MecBracket = {
    x: 0.680,
    yMpc: 0.084 + slope * (0.680 - 0.080), // ≈ 0.687
    yMsc: 0.308 + slope * (0.680 - 0.080)  // ≈ 0.911
  };

  window.ECONOS_WELFARE_GOVT_FAILURE_SPEC = {
    width: 560,
    height: 360,
    chartArea: { x: 55, y: 30, width: 420, height: 290 },
    className: 'welfare-gf-svg',
    layers: ['idl-1', 'idl-2', 'idl-3'],
    axes: {
      x: { label: 'Q' },
      y: { label: 'P' }
    },

    curves: [
      // ── BASE: MPC + MSB ─────────────────────────────────────
      { d: 'M 0.080,0.084 L 0.860,0.868',
        tone: 'green', label: 'MPC', strokeWidth: 2.5,
        labelDx: 6, labelDy: -4, anchor: 'start' },
      { d: 'M 0.080,0.868 L 0.860,0.084',
        tone: 'amber', label: 'MSB', strokeWidth: 2.5,
        labelDx: 6, labelDy: -4, anchor: 'start' },

      // ── idl-1: MSC = MPC + MEC ─────────────────────────────
      // Shortened path: end at chart-y ≈ 0.95 (just inside the top
      // of the chart area) so the label sits inline at the right
      // endpoint, not off-stage. y = 0.228 + 1.005·x → x = 0.718 at y=0.95.
      { layer: 'idl-1',
        d: 'M 0.080,0.308 L 0.718,0.950',
        tone: 'blue', label: 'MSC', strokeWidth: 2.5, dashed: '7 4',
        labelDx: 6, labelDy: -4, anchor: 'start' },

      // ── idl-3: Over-taxed supply (Pigouvian tax > MEC) ─────
      // y = 0.295 + 1.005·x → x = 0.652 at y=0.95.
      // Label sits BELOW the line so it doesn't collide with MSC's label
      // at the same right-edge altitude.
      { layer: 'idl-3',
        d: 'M 0.080,0.375 L 0.652,0.950',
        tone: 'purple', label: 'S + tax', strokeWidth: 2.2, dashed: '5 3',
        labelDx: 6, labelDy: 14, anchor: 'start' }
    ],

    arrows: [
      // MEC bracket – thick vertical purple bar between MPC and MSC
      // (revealed in idl-1; the "ideal tax" callout in idl-2 points to it).
      { layer: 'idl-1',
        x1: MecBracket.x, y1: MecBracket.yMpc, x2: MecBracket.x, y2: MecBracket.yMsc,
        tone: 'purple', strokeWidth: 3, buffer: 0 }
    ],

    polygons: [
      // DWL₁ (market failure) – rose triangle between E*, MPC@Qm, E₁
      // MPC@Qm = (E1.x, 0.084 + slope·(E1.x − 0.080)) = (0.470, 0.476) = E1 itself,
      // but we need the third vertex on MSC at Q_m: MSC@Qm = (0.470, 0.700)
      { layer: 'idl-1',
        points: [[Eopt.x, Eopt.y], [E1.x, 0.228 + slope * E1.x], [E1.x, E1.y]],
        fill: '#FECACA', opacity: 0.7 },

      // DWL₂ (govt failure) – purple triangle E*, MSC@Q'', E''
      { layer: 'idl-3',
        points: [[Eopt.x, Eopt.y], [MscAtQ2.x, MscAtQ2.y], [E2.x, E2.y]],
        fill: '#DDD6FE', opacity: 0.85 }
    ],

    points: [
      // E₁ – free-market equilibrium (always visible)
      { x: E1.x, y: E1.y, tone: 'slate', radius: 5, hollow: true,
        gridlines: 'slate', ticks: { x: 'Qm', y: 'Pm' },
        label: 'E₁', labelDx: 10, labelDy: -2, anchor: 'start' },

      // E* – social optimum (idl-1)
      { layer: 'idl-1',
        x: Eopt.x, y: Eopt.y, tone: 'red', radius: 5, hollow: true,
        gridlines: 'red', ticks: { x: 'Q*', y: 'P*' },
        label: 'E*', labelDx: -8, labelDy: -6, anchor: 'end' },

      // E'' – over-corrected (idl-3). Gridlines but NO ticks: Q'' is within
      // 0.033 chart-units of Q* (and P'' within 0.034 of P*), so axis ticks
      // collide. The E'' dot label + nearby Q*/P* ticks already pin the
      // story – Q'' falls just inside Q*. Label sits ABOVE the dot, well
      // clear of DWL₂ which goes down-and-left of the triangle below.
      { layer: 'idl-3',
        x: E2.x, y: E2.y, tone: 'purple', radius: 5, hollow: true,
        gridlines: 'purple',
        label: "E''", labelDx: -2, labelDy: -10, anchor: 'end' }
    ],

    texts: [
      // MEC label next to the bracket (idl-1)
      { layer: 'idl-1', x: MecBracket.x + 0.024, y: (MecBracket.yMpc + MecBracket.yMsc) / 2,
        text: 'MEC', tone: 'purple', bold: true, fontSize: 13, anchor: 'start' },

      // "ideal tax" annotation (idl-2) – same vertical position as MEC label,
      // sits below in italics
      { layer: 'idl-2', x: MecBracket.x + 0.024, y: (MecBracket.yMpc + MecBracket.yMsc) / 2 - 0.060,
        text: '= ideal tax', tone: 'purple', italic: true, fontSize: 11, anchor: 'start' },

      // DWL₁ label (idl-1) – inside the rose triangle
      { layer: 'idl-1', x: (Eopt.x + E1.x + E1.x) / 3 + 0.020, y: (Eopt.y + (0.228 + slope * E1.x) + E1.y) / 3,
        text: 'DWL₁', tone: 'red', bold: true, fontSize: 12, anchor: 'middle' },

      // DWL₂ label (idl-3) – the triangle is too narrow to host the label
      // inside, so it sits to the LEFT at the triangle's mid-y, in a clear
      // gap between MSC and MSB. E'' label goes UP from the dot, this one
      // goes LEFT, so they never collide.
      { layer: 'idl-3', x: 0.230, y: 0.589,
        text: 'DWL₂', tone: 'purple', bold: true, fontSize: 12, anchor: 'start' }
    ]
  };
})();
