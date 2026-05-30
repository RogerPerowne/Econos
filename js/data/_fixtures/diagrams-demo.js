/**
 * diagrams-demo.js — Fixture card for the Econos diagram system
 * ==============================================================
 * Exports window.ECONOS_DIAGRAMS_DEMO_CARD — a blocks card with one
 * { type:'diagram', spec:{...} } block per registered generator so
 * all diagrams can be screenshotted and verified visually.
 *
 * NOT registered as a topic; load in dev/test only.
 *
 * Generators covered:
 *   adasDiagram        (adas.js)
 *   ppfDiagram         (ppf.js)
 *   taxSubsidyDiagram  (tax-controls.js)
 *   priceControlDiagram(tax-controls.js)
 *   multiplierDiagram  (mult-elas.js)
 *   elasticityDiagram  (mult-elas.js)
 *   costCurvesDiagram  (firm-labour.js)
 *   marketStructureDiagram (firm-labour.js)
 *   labourMarketDiagram (firm-labour.js)
 *   phillipsCurve      (macro-misc.js)
 *   jCurveDiagram      (macro-misc.js)
 *   fortyFiveDiagram   (macro-misc.js)
 *   growthDiagram      (macro-misc.js)
 */

(function () {
  'use strict';

  window.ECONOS_DIAGRAMS_DEMO_CARD = {
    id: 'diagrams-demo',
    title: 'Diagram System — All Generators',
    lede: 'One block per generator for visual verification. Not a real topic.',
    blocks: [

      // ── AD/AS ────────────────────────────────────────────────────────
      { type: 'sectionHeader', icon: '1', label: 'AD/AS — demand-pull (default)' },
      {
        type: 'diagram',
        spec: { type: 'adasDiagram', mode: 'demand-pull' },
        caption: 'adasDiagram({ mode: "demand-pull" })',
      },

      { type: 'sectionHeader', icon: '2', label: 'AD/AS — cost-push' },
      {
        type: 'diagram',
        spec: { type: 'adasDiagram', mode: 'cost-push' },
        caption: 'adasDiagram({ mode: "cost-push" })',
      },

      { type: 'sectionHeader', icon: '3', label: 'AD/AS — recessionary gap' },
      {
        type: 'diagram',
        spec: { type: 'adasDiagram', mode: 'recessionary-gap' },
        caption: 'adasDiagram({ mode: "recessionary-gap" })',
      },

      // ── PPF ──────────────────────────────────────────────────────────
      { type: 'sectionHeader', icon: '4', label: 'PPF — basic (default)' },
      {
        type: 'diagram',
        spec: { type: 'ppfDiagram', mode: 'basic' },
        caption: 'ppfDiagram({ mode: "basic" })',
      },

      { type: 'sectionHeader', icon: '5', label: 'PPF — opportunity cost' },
      {
        type: 'diagram',
        spec: { type: 'ppfDiagram', mode: 'opportunity-cost' },
        caption: 'ppfDiagram({ mode: "opportunity-cost" })',
      },

      { type: 'sectionHeader', icon: '6', label: 'PPF — growth shift' },
      {
        type: 'diagram',
        spec: { type: 'ppfDiagram', mode: 'growth-shift' },
        caption: 'ppfDiagram({ mode: "growth-shift" })',
      },

      // ── Tax / Price Controls ─────────────────────────────────────────
      { type: 'sectionHeader', icon: '7', label: 'Tax/Subsidy — indirect tax (default)' },
      {
        type: 'diagram',
        spec: { type: 'taxSubsidyDiagram' },
        caption: 'taxSubsidyDiagram({})',
      },

      { type: 'sectionHeader', icon: '8', label: 'Price Control — price ceiling (default)' },
      {
        type: 'diagram',
        spec: { type: 'priceControlDiagram' },
        caption: 'priceControlDiagram({})',
      },

      // ── Multiplier & Elasticity ───────────────────────────────────────
      { type: 'sectionHeader', icon: '9', label: 'Multiplier — spending rounds (default)' },
      {
        type: 'diagram',
        spec: { type: 'multiplierDiagram' },
        caption: 'multiplierDiagram({})',
      },

      { type: 'sectionHeader', icon: '10', label: 'Elasticity — inelastic demand (default)' },
      {
        type: 'diagram',
        spec: { type: 'elasticityDiagram' },
        caption: 'elasticityDiagram({})',
      },

      // ── Firm & Labour ─────────────────────────────────────────────────
      { type: 'sectionHeader', icon: '11', label: 'Cost Curves — competitive firm (default)' },
      {
        type: 'diagram',
        spec: { type: 'costCurvesDiagram' },
        caption: 'costCurvesDiagram({})',
      },

      { type: 'sectionHeader', icon: '12', label: 'Market Structure — monopoly (default)' },
      {
        type: 'diagram',
        spec: { type: 'marketStructureDiagram' },
        caption: 'marketStructureDiagram({})',
      },

      { type: 'sectionHeader', icon: '13', label: 'Labour Market — competitive (default)' },
      {
        type: 'diagram',
        spec: { type: 'labourMarketDiagram' },
        caption: 'labourMarketDiagram({})',
      },

      // ── Macro Misc ───────────────────────────────────────────────────
      { type: 'sectionHeader', icon: '14', label: 'Phillips Curve — SRPC/NAIRU (default)' },
      {
        type: 'diagram',
        spec: { type: 'phillipsCurve' },
        caption: 'phillipsCurve({})',
      },

      { type: 'sectionHeader', icon: '15', label: 'J-Curve — depreciation (default)' },
      {
        type: 'diagram',
        spec: { type: 'jCurveDiagram' },
        caption: 'jCurveDiagram({})',
      },

      { type: 'sectionHeader', icon: '16', label: '45-Degree Diagram — national income (default)' },
      {
        type: 'diagram',
        spec: { type: 'fortyFiveDiagram' },
        caption: 'fortyFiveDiagram({})',
      },

      { type: 'sectionHeader', icon: '17', label: 'Growth Diagram — sources (default)' },
      {
        type: 'diagram',
        spec: { type: 'growthDiagram' },
        caption: 'growthDiagram({})',
      },

    ],
  };

})();
