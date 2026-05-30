(function () {
  'use strict';

  /**
   * Phase 1 block-component fixture.
   *
   * Exercises every new block type added in the Phase 1 parallel build:
   *   Compare group : versusRows, decisionMatrix, trafficLight, glossaryRow
   *   Flow group    : mechanismChain, rippleCascade, opposingFlows, timeline
   *   Structure     : spectrum, caseStudies, satelliteDiagram, policyToolkit
   *   Data          : metricCard, targetGauge, equationHero, workedExampleStrip, factChip
   *
   * NOT registered as a real topic — exists for local renderer checks and
   * screenshot verification only.
   */
  window.ECONOS_BLOCKS_PHASE1_CARD = {
    id: 'blocks-phase1',
    title: 'Phase 1 block-component showcase',
    lede: 'One card exercising every Phase 1 block type.',
    blocks: [

      /* ── Compare group ─────────────────────────────────────────── */
      { type: 'sectionHeader', icon: '1', label: 'Compare group', rule: true },

      {
        type: 'versusRows',
        left:  { label: 'Expansionary fiscal', tone: 'blue' },
        right: { label: 'Contractionary fiscal', tone: 'rose' },
        rows: [
          { criterion: 'Effect on AD',     left: 'Increases',  right: 'Decreases'  },
          { criterion: 'Effect on deficit', left: 'Widens',    right: 'Narrows'    },
          { criterion: 'Suitable when',    left: 'Recession',  right: 'Overheating' },
        ],
      },

      {
        type: 'decisionMatrix',
        columns: ['Policy tool', 'Speed', 'Reversibility', 'Risk'],
        rows: [
          { cells: ['Interest rate cut', 'Fast',   'High',   'Asset bubbles'] },
          { cells: ['Fiscal stimulus',   'Slow',   'Medium', 'Debt burden']   },
          { cells: ['QE',                'Medium', 'Low',    'Inflation']      },
        ],
      },

      {
        type: 'trafficLight',
        green: 'Monetary policy works well when banks pass on rate cuts to borrowers.',
        amber: 'Effectiveness depends on whether firms have investment opportunities.',
        red:   'Fails during a liquidity trap — rates near zero leave no room to cut.',
      },

      {
        type: 'glossaryRow',
        terms: [
          { term: 'MPC',        definition: 'Marginal propensity to consume — the fraction of extra income spent.' },
          { term: 'Multiplier', definition: '1 / (1 − MPC); amplifies an initial injection into total ΔY.' },
          { term: 'Leakage',    definition: 'Saving, tax, and imports that withdraw spending from the circular flow.' },
        ],
      },

      /* ── Flow group ────────────────────────────────────────────── */
      { type: 'sectionHeader', icon: '2', label: 'Flow group', rule: true },

      {
        type: 'mechanismChain',
        steps: [
          { label: 'BoE cuts base rate', detail: 'Bank Rate ↓' },
          { label: 'Cheaper borrowing' },
          { label: 'Investment rises' },
          { label: 'AD shifts right' },
          { label: 'Real GDP rises' },
        ],
        breakpoints: [
          { label: 'Liquidity trap', tone: 'amber' },
          { label: 'Credit rationing', tone: 'rose' },
        ],
      },

      {
        type: 'rippleCascade',
        initial: '£1,000m',
        rounds: [
          { round: 'Round 1', amount: '£800m' },
          { round: 'Round 2', amount: '£640m' },
          { round: 'Round 3', amount: '£512m' },
          { round: 'Round 4', amount: '£410m' },
        ],
        leakageArrows: ['20% saved', '20% tax', '20% imports', '20% saved'],
      },

      {
        type: 'opposingFlows',
        positive: { label: 'Exports',  value: '£340bn', tone: 'green' },
        negative: { label: 'Imports',  value: '£420bn', tone: 'rose'  },
        result:   { label: 'Trade balance', value: '−£80bn' },
      },

      {
        type: 'timeline',
        events: [
          { year: '2007', title: 'Northern Rock run',   tone: 'rose',  body: 'First UK bank run in 150 years; nationalised 2008.' },
          { year: '2008', title: 'Global financial crisis', tone: 'rose', body: 'Lehman Brothers collapse triggers credit crunch.' },
          { year: '2009', title: 'QE launched',         tone: 'blue',  body: 'Bank of England buys £75bn of gilts.' },
          { year: '2013', title: 'Forward guidance',    tone: 'green', body: 'BoE links rates to unemployment threshold.' },
        ],
      },

      /* ── Structure group ────────────────────────────────────────── */
      { type: 'sectionHeader', icon: '3', label: 'Structure group', rule: true },

      {
        type: 'spectrum',
        axis: { left: 'Command economy', right: 'Free market', label: 'Economic systems' },
        bands: [
          { label: 'North Korea', tone: 'rose',   body: 'State owns all resources.' },
          { label: 'Cuba',        tone: 'amber',  body: 'Mixed but state-dominant.' },
          { label: 'France',      tone: 'slate',  body: 'Strong public sector.' },
          { label: 'UK',          tone: 'blue',   body: 'Mixed economy.' },
          { label: 'USA',         tone: 'green',  body: 'Market-dominant.' },
          { label: 'Hong Kong',   tone: 'green',  body: 'Very low intervention.' },
        ],
      },

      {
        type: 'caseStudies',
        cols: 2,
        cases: [
          {
            title: 'UK austerity 2010–15',
            cause: 'Large post-GFC deficit; coalition cuts spending.',
            outcome: 'Slow recovery; GDP below pre-crisis trend until 2014.',
            verdict: 'Growth sacrificed',
            tone: 'amber',
          },
          {
            title: 'US stimulus 2009',
            cause: 'Obama ARRA — $787bn fiscal package.',
            outcome: 'Recovery faster than EU but deficit widened.',
            verdict: 'Short-term boost',
            tone: 'green',
          },
          {
            title: 'Japan QE 2001–06',
            cause: 'Deflation; rates at zero floor.',
            outcome: 'Moderate reflation; structural stagnation persisted.',
            verdict: 'Limited impact',
            tone: 'rose',
          },
          {
            title: 'Eurozone LTRO 2011',
            cause: 'Bank funding freeze in sovereign debt crisis.',
            outcome: 'Immediate liquidity relief; underlying issues remained.',
            verdict: 'Bought time',
            tone: 'blue',
          },
        ],
      },

      {
        type: 'satelliteDiagram',
        centre: { label: 'UK GDP', value: '£2.2tn' },
        satellites: [
          { label: 'Consumption',    metric: '61%', tone: 'green'  },
          { label: 'Investment',     metric: '17%', tone: 'blue'   },
          { label: 'Government',     metric: '19%', tone: 'purple' },
          { label: 'Net exports',    metric: '−2%', tone: 'rose'   },
          { label: 'Inventories',    metric: '1%',  tone: 'slate'  },
        ],
      },

      {
        type: 'policyToolkit',
        tools: [
          { label: 'Interest rate cut',    bestFor: 'Demand stimulus',       risk: 'Asset price bubbles', tone: 'blue'   },
          { label: 'QE',                   bestFor: 'Liquidity crisis',      risk: 'Inflation overshoot', tone: 'amber'  },
          { label: 'Fiscal expansion',     bestFor: 'Deep recession',        risk: 'Crowding out',        tone: 'green'  },
          { label: 'Supply-side reform',   bestFor: 'Long-run potential GDP', risk: 'Short-run costs',    tone: 'purple' },
        ],
      },

      /* ── Data group ─────────────────────────────────────────────── */
      { type: 'sectionHeader', icon: '4', label: 'Data group', rule: true },

      {
        type: 'metricCard',
        label: 'UK CPI inflation',
        value: '3.2%',
        target: '2%',
        status: 'Above target',
        tone: 'amber',
        display: 'number',
      },

      {
        type: 'targetGauge',
        label: 'CPI inflation vs BoE target band',
        value: 3.2,
        targetRange: [1, 3],
        min: 0,
        max: 8,
        tone: 'amber',
      },

      {
        type: 'equationHero',
        equation: [
          { token: 'AD', tone: 'blue' },
          '=',
          { token: 'C', tone: 'green' },
          '+',
          { token: 'I', tone: 'blue' },
          '+',
          { token: 'G', tone: 'purple' },
          '+',
          { token: 'X − M', tone: 'amber' },
        ],
        caption: 'Aggregate Demand — the four components of total planned spending.',
      },

      {
        type: 'workedExampleStrip',
        scenario: 'MPC = 0.8; initial government injection = £500m',
        steps: [
          { label: 'Multiplier k', value: '1 ÷ (1 − 0.8) = 5' },
          { label: 'Total ΔY',     value: '5 × £500m' },
        ],
        result: '£2,500m',
      },

      {
        type: 'factChip',
        label: 'UK unemployment rate',
        value: '4.2%',
        date: 'Q4 2023',
        tone: 'slate',
      },

    ],
  };
})();
