/* ============================================================
   Cartel joint-profit diagram — engine spec for cartelJointProfitInteractive
   (Collusion and cartels). Migrated from a hand-rolled SVG.

   The cartel behaves like a monopolist: it restricts output to where
   MR = MC (Q_c) and charges P_c off the market demand curve — above the
   competitive outcome (where MC = D). The MC curve is the cubic "tick"
   shape generated from a cost function (same engine model as the firm
   diagrams), so the geometry is guaranteed, not eyeballed.

   States (cumulative show: ['cjp-*']):
     cjp-1  market demand D and MR
     cjp-2  MC → the cartel restricts output to Q_c (MR = MC), price P_c
     cjp-3  competitive benchmark (MC = D) + the joint-profit area
   ============================================================ */
(function () {
  'use strict';
  var F = window.ECONOS_FIRM;
  var fc = 320, vc = [10, -0.15, 0.00125];      // cubic VC → tick-shaped MC
  var a = 22, b = 0.1;                            // demand P = a − bQ
  var qAxis = 110, yAxis = 24, qMin = 10, qSamp = 104;
  var M = F.makeModel(fc, vc);
  var ar = function (q) { return a - b * q; };
  var mr = function (q) { return a - 2 * b * q; };
  var nx = function (q) { return Math.round(q / qAxis * 1e4) / 1e4; };
  var ny = function (p) { return Math.round(p / yAxis * 1e4) / 1e4; };
  var qc = F.solveCross(M.mc, mr, qMin, qSamp);   // cartel output: MR = MC
  var qk = F.solveEq(M.mc, ar, qMin, qSamp);      // competitive: MC = D
  var arEnd = Math.min(qAxis * 0.93, a / b - 1), mrEnd = Math.min(qAxis * 0.93, a / (2 * b));
  var Pc = ar(qc), mcC = M.mc(qc), Pk = ar(qk);

  window.ECONOS_CARTEL_JOINT_PROFIT_SPEC = {
    width: 740, height: 570,
    chartArea: { x: 66, y: 30, width: 628, height: 470 },
    className: 'cartel-joint-profit-svg', background: '#FFFFFF',
    layers: ['cjp-1', 'cjp-2', 'cjp-3'],
    axes: { x: { label: 'Quantity' }, y: { label: 'Price' } },
    polygons: [
      { layer: 'cjp-3', points: [[0, 0], [nx(qc), 0], [nx(qc), ny(Pc)], [0, ny(Pc)]], tone: 'green', opacity: 0.6 }
    ],
    curves: [
      { id: 'D', d: F.samplePath(ar, qMin, arEnd, qAxis, yAxis, 2), tone: 'blue', label: 'D', strokeWidth: 2.6, labelDx: 6, labelDy: 8, anchor: 'start', layer: 'cjp-1' },
      { id: 'MR', d: F.samplePath(mr, qMin, mrEnd, qAxis, yAxis, 2), tone: 'purple', label: 'MR', strokeWidth: 2.2, labelDx: -4, labelDy: 12, anchor: 'end', layer: 'cjp-1' },
      { id: 'MC', d: F.samplePath(M.mc, qMin, qSamp, qAxis, yAxis, 60), tone: 'green', label: 'MC', strokeWidth: 2.6, labelDx: 6, labelDy: -4, anchor: 'start', layer: 'cjp-2' }
    ],
    points: [
      { layer: 'cjp-2', intersection: { curves: ['MR', 'MC'], near: [nx(qc), ny(mcC)] }, tone: 'slate', radius: 5.5 },
      { layer: 'cjp-2', x: nx(qc), on: 'D', tone: 'slate', radius: 5.5 },
      { layer: 'cjp-3', intersection: { curves: ['MC', 'D'], near: [nx(qk), ny(Pk)] }, tone: 'slate', radius: 4.5 }
    ],
    arrows: [
      { layer: 'cjp-2', x1: nx(qc), y1: ny(mcC), x2: nx(qc), y2: ny(Pc), tone: 'slate', strokeWidth: 1.1, dashed: '3 3', buffer: 0 },
      { layer: 'cjp-2', x1: nx(qc), y1: ny(Pc), x2: 0, y2: ny(Pc), tone: 'slate', strokeWidth: 1.1, dashed: '3 3', buffer: 0 },
      { layer: 'cjp-2', x1: nx(qc), y1: ny(Pc), x2: nx(qc), y2: 0, tone: 'slate', strokeWidth: 1.1, dashed: '3 3', buffer: 0 },
      { layer: 'cjp-3', x1: nx(qk), y1: ny(Pk), x2: 0, y2: ny(Pk), tone: 'slate', strokeWidth: 1, dashed: '3 3', buffer: 0 },
      { layer: 'cjp-3', x1: nx(qk), y1: ny(Pk), x2: nx(qk), y2: 0, tone: 'slate', strokeWidth: 1, dashed: '3 3', buffer: 0 }
    ],
    texts: [
      { layer: 'cjp-2', x: -0.02, y: ny(Pc), text: 'P_c', tone: 'slate', bold: true, anchor: 'end', fontSize: 12 },
      { layer: 'cjp-2', x: nx(qc), y: -0.06, text: 'Q_c', tone: 'slate', bold: true, anchor: 'middle', fontSize: 12 },
      { layer: 'cjp-3', x: -0.02, y: ny(Pk), text: 'P_comp', tone: 'slate', bold: true, anchor: 'end', fontSize: 10.5 },
      { layer: 'cjp-3', x: nx(qk), y: -0.06, text: 'Q_comp', tone: 'slate', bold: true, anchor: 'middle', fontSize: 10.5 },
      { layer: 'cjp-3', x: nx(qc) / 2, y: ny(Pc) / 2, text: 'Joint profit', tone: 'green', bold: true, anchor: 'middle', fontSize: 11 }
    ]
  };
})();
