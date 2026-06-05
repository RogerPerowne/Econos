/* ============================================================
   ECONOS – Topic registry
   Single source of truth for which topics exist and what
   content is available for each. Used by index.html to render
   the topic cards, and by future tooling to track progress
   across the curriculum.

   Each topic carries a `boards` map declaring per-(topic, board)
   spec points and inclusion. The spec strings are bare numbers
   to match each board's own convention (e.g. Edexcel "2.2.2",
   AQA "3.2.3.3", OCR "2.4"); the board name supplies context
   wherever the chip is rendered. `included: false` hides the
   topic from that board's homepage grid (no topic does so yet,
   but the flag is in the schema for the day when boards diverge).
   `spec: null` means the topic isn't an explicit subsection of
   that spec (it might still be cited indirectly) – the chip
   simply omits the spec point for that board.
   ============================================================ */

window.ECONOS_TOPICS = [

  /* ---- Theme 1, Section 1: The Economic Problem (1.1–1.6) ---- */
  {
    id: 'introduction-to-economics',
    name: 'Economics as a Social Science',
    sub: 'Models and assumptions, ceteris paribus, the limits of economic experiments',
    color: '#f97316',
    available: { learn: true, link: true, land: false },
    boards: {
      edexcel_a: { spec: '1.1.1', included: true },
      edexcel_b: { spec: '1.1.1', included: true },
      aqa:       { spec: '3.1.1.1', included: true },
      ocr:       { spec: '1.1', included: true }
    }
  },
  {
    id: 'positive-and-normative-statements',
    name: 'Positive & Normative Statements',
    sub: 'Fact vs value judgement, and how values shape economic policy',
    color: '#fb923c',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '1.1.2', included: true },
      edexcel_b: { spec: null, included: false },
      aqa:       { spec: null, included: false },
      ocr:       { spec: null, included: false }
    }
  },
  {
    id: 'the-economic-problem',
    name: 'The Economic Problem',
    sub: 'Scarcity, opportunity cost, renewable vs non-renewable resources, the factors of production',
    color: '#ea580c',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '1.1.3', included: true },
      edexcel_b: { spec: null, included: false },
      aqa:       { spec: null, included: false },
      ocr:       { spec: null, included: false }
    }
  },
  {
    id: 'factors-of-production',
    name: 'Factors of Production',
    sub: 'Land, labour, capital, enterprise; factor rewards and factor mobility',
    color: '#fb923c',
    available: { learn: true, link: true, land: false },
    boards: {
      /* Edexcel A: factors of production isn't a standalone sub-section –
         its content now lives inside `the-economic-problem` (1.1.3), so
         this topic is hidden from the Edexcel A grid. Still shown for the
         boards where factors IS a named point. */
      edexcel_a: { spec: '1.1.3', included: false },
      edexcel_b: { spec: '1.2.3', included: true },
      aqa:       { spec: '3.1.1.3', included: true },
      ocr:       { spec: '1.1', included: true }
    }
  },
  {
    id: 'production-possibility-frontiers',
    name: 'Production Possibility Frontiers',
    sub: 'Trade-offs, opportunity cost and economic growth',
    color: '#ef4444',
    available: { learn: true, link: true, land: false },
    boards: {
      edexcel_a: { spec: '1.1.4', included: true },
      edexcel_b: { spec: null, included: true },
      aqa:       { spec: '3.1.1.5', included: true },
      ocr:       { spec: '1.3', included: true }
    }
  },
  {
    id: 'specialisation-and-money',
    name: 'Specialisation & Money',
    sub: 'Division of labour, functions of money, barter',
    color: '#f59e0b',
    available: { learn: true, link: true, land: false },
    boards: {
      edexcel_a: { spec: '1.1.5', included: true },
      edexcel_b: { spec: '1.2.4', included: true },
      aqa:       { spec: '3.1.3.2', included: true },
      ocr:       { spec: '2.1', included: true }
    }
  },
  {
    id: 'economic-systems',
    name: 'Economic Systems',
    sub: 'Free market, command, mixed economies',
    color: '#84cc16',
    available: { learn: true, link: true, land: false },
    boards: {
      edexcel_a: { spec: '1.1.6', included: true },
      edexcel_b: { spec: null, included: true },
      aqa:       { spec: null, included: true },
      ocr:       { spec: '1.2', included: true }
    }
  },

  /* ---- Theme 1, Section 2: How Markets Work (2.1–2.10) ---- */
  {
    id: 'rational-decision-making',
    name: 'Rational Decision Making',
    sub: 'The assumptions behind the models: consumers maximise utility, firms maximise profit',
    color: '#14b8a6',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '1.2.1', included: true },
      edexcel_b: { spec: null, included: false },
      aqa:       { spec: null, included: false },
      ocr:       { spec: null, included: false }
    }
  },
  {
    id: 'demand',
    name: 'Demand',
    sub: 'Law of demand, shifts, consumer surplus',
    color: '#10b981',
    available: { learn: true, link: true, land: false },
    boards: {
      edexcel_a: { spec: '1.2.2', included: true },
      edexcel_b: { spec: '1.3.1', included: true },
      aqa:       { spec: '3.1.2.1', included: true },
      ocr:       { spec: '2.2', included: true }
    }
  },
  {
    id: 'price-elasticity-of-demand',
    name: 'Price Elasticity of Demand',
    sub: 'PED formula, determinants, revenue implications',
    color: '#8b5cf6',
    available: { learn: true, link: true, land: false },
    boards: {
      edexcel_a: { spec: '1.2.3', included: true },
      edexcel_b: { spec: '2.2.1', included: true },
      aqa:       { spec: '3.1.2.2', included: true },
      ocr:       { spec: '2.6', included: true }
    }
  },
  {
    id: 'income-and-cross-price-elasticity',
    name: 'Income & Cross-Price Elasticity',
    sub: 'Income and cross-price elasticity, normal vs inferior',
    color: '#ec4899',
    available: { learn: true, link: true, land: false },
    boards: {
      edexcel_a: { spec: '1.2.3', included: true },
      edexcel_b: { spec: '2.2.4', included: true },
      aqa:       { spec: '3.1.2.2', included: true },
      ocr:       { spec: '2.6', included: true }
    }
  },
  {
    id: 'supply',
    name: 'Supply',
    sub: 'Law of supply, shifts, producer surplus',
    color: '#06b6d4',
    available: { learn: true, link: true, land: false },
    boards: {
      edexcel_a: { spec: '1.2.4', included: true },
      edexcel_b: { spec: '1.3.2', included: true },
      aqa:       { spec: '3.1.2.3', included: true },
      ocr:       { spec: '2.3', included: true }
    }
  },
  {
    id: 'price-elasticity-of-supply',
    name: 'Price Elasticity of Supply',
    sub: 'PES formula, determinants, time and stocks',
    color: '#a855f7',
    available: { learn: true, link: true, land: false },
    boards: {
      edexcel_a: { spec: '1.2.5', included: true },
      edexcel_b: { spec: null, included: true },
      aqa:       { spec: '3.1.2.4', included: true },
      ocr:       { spec: '2.6', included: true }
    }
  },
  {
    id: 'price-determination',
    name: 'Price Determination',
    sub: 'Equilibrium, excess demand/supply, market clearing',
    color: '#0ea5e9',
    available: { learn: true, link: true, land: false },
    boards: {
      edexcel_a: { spec: '1.2.6', included: true },
      edexcel_b: { spec: '1.3.3', included: true },
      aqa:       { spec: '3.1.2.5', included: true },
      ocr:       { spec: '2.5', included: true }
    }
  },
  {
    id: 'the-price-mechanism',
    name: 'The Price Mechanism',
    sub: 'Rationing, signalling, incentives and resource allocation',
    color: '#14b8a6',
    available: { learn: true, link: true, land: false },
    boards: {
      edexcel_a: { spec: '1.2.7', included: true },
      edexcel_b: { spec: '1.3.4', included: true },
      aqa:       { spec: '3.1.5.1', included: true },
      ocr:       { spec: '2.5', included: true }
    }
  },
  {
    id: 'consumer-and-producer-surplus',
    name: 'Consumer & Producer Surplus',
    sub: 'Welfare triangles, efficiency and the gains from trade',
    color: '#f59e0b',
    available: { learn: true, link: true, land: false },
    boards: {
      edexcel_a: { spec: '1.2.8', included: true },
      edexcel_b: { spec: null, included: true },
      aqa:       { spec: '4.1.5.11', included: true },
      ocr:       { spec: '2.4', included: true }
    }
  },
  {
    id: 'indirect-taxes-and-subsidies',
    name: 'Indirect Taxes & Subsidies',
    sub: 'Tax and subsidy diagrams, incidence, welfare effects and evaluation',
    color: '#b45309',
    available: { learn: true, link: true, land: false },
    boards: {
      edexcel_a: { spec: '1.2.9', included: true },
      edexcel_b: { spec: '1.5.2', included: true },
      aqa:       { spec: '3.1.5.8', included: true },
      ocr:       { spec: '2.11', included: true }
    }
  },
  {
    id: 'behavioural-economics',
    name: 'Behavioural Economics',
    sub: 'Nudge theory, heuristics, biases and bounded rationality',
    color: '#1d4ed8',
    available: { learn: true, link: true, land: false },
    boards: {
      edexcel_a: { spec: '1.2.10', included: true },
      edexcel_b: { spec: null, included: true },
      aqa:       { spec: '4.1.2.3', included: true },
      ocr:       { spec: null, included: true }
    }
  },

  /* ---- Theme 1, Section 3: Market Failure (3.1–3.4) ---- */
  {
    id: 'market-failure',
    name: 'Market Failure',
    sub: 'Types of market failure and why markets fail to achieve allocative efficiency',
    color: '#b91c1c',
    available: { learn: true, link: true, land: false },
    boards: {
      edexcel_a: { spec: '1.3.1', included: true },
      edexcel_b: { spec: '1.5.1', included: true },
      aqa:       { spec: '3.1.5.2', included: true },
      ocr:       { spec: '2.8', included: true }
    }
  },
  {
    id: 'negative-externalities',
    name: 'Negative Externalities',
    sub: 'Social vs private costs, market failure, pollution',
    color: '#dc2626',
    available: { learn: true, link: true, land: false },
    boards: {
      edexcel_a: { spec: '1.3.2', included: true },
      edexcel_b: { spec: '1.5.1', included: true },
      aqa:       { spec: '3.1.5.4', included: true },
      ocr:       { spec: '2.8', included: true }
    }
  },
  {
    id: 'positive-externalities',
    name: 'Positive Externalities',
    sub: 'Social vs private benefits, under-provision, education',
    color: '#16a34a',
    available: { learn: true, link: true, land: false },
    boards: {
      edexcel_a: { spec: '1.3.2', included: true },
      edexcel_b: { spec: '1.5.1', included: true },
      aqa:       { spec: '3.1.5.4', included: true },
      ocr:       { spec: '2.8', included: true }
    }
  },
  {
    id: 'public-goods',
    name: 'Public Goods',
    sub: 'Non-rival, non-excludable, free rider problem',
    color: '#2563eb',
    available: { learn: true, link: true, land: false },
    boards: {
      edexcel_a: { spec: '1.3.3', included: true },
      edexcel_b: { spec: null, included: true },
      aqa:       { spec: '3.1.5.3', included: true },
      ocr:       { spec: '2.10', included: true }
    }
  },
  {
    id: 'information-gaps',
    name: 'Information Gaps',
    sub: 'Asymmetric information, moral hazard, adverse selection',
    color: '#7c3aed',
    available: { learn: true, link: true, land: false },
    boards: {
      edexcel_a: { spec: '1.3.4', included: true },
      edexcel_b: { spec: null, included: true },
      aqa:       { spec: '3.1.5.6', included: true },
      ocr:       { spec: '2.9', included: true }
    }
  },

  /* ---- Theme 1, Section 4: Government Intervention (4.1–4.2) ---- */
  {
    id: 'taxes-and-subsidies-as-policy-tools',
    name: 'Taxes & Subsidies as Policy Tools',
    sub: 'When taxes and subsidies are justified, UK case studies and evaluation framework',
    color: '#0f766e',
    available: { learn: true, link: true, land: false },
    boards: {
      edexcel_a: { spec: '1.4.1', included: true },
      edexcel_b: { spec: '1.5.2', included: true },
      aqa:       { spec: '3.1.5.8', included: true },
      ocr:       { spec: '2.11', included: true }
    }
  },
  {
    id: 'government-failure',
    name: 'Government Failure',
    sub: 'Unintended consequences, information failures, regulatory capture',
    color: '#9f1239',
    available: { learn: true, link: true, land: false },
    boards: {
      edexcel_a: { spec: '1.4.2', included: true },
      edexcel_b: { spec: '1.5.2', included: true },
      aqa:       { spec: '3.1.5.9', included: true },
      ocr:       { spec: '2.11', included: true }
    }
  },

  {
    id: 'government-intervention-in-markets',
    name: 'Government Intervention in Markets',
    sub: 'Price ceilings, price floors, effects and evaluation',
    color: '#b91c1c',
    available: { learn: true, link: true, land: false },
    boards: {
      edexcel_a: { spec: '1.4.1', included: true },
      edexcel_b: { spec: '1.5.2', included: true },
      aqa:       { spec: '3.1.5.8', included: true },
      ocr:       { spec: '2.11', included: true }
    }
  },
  {
    id: 'unstable-commodity-markets',
    name: 'Unstable Commodity Markets',
    sub: 'Buffer stocks, price volatility and stabilisation schemes',
    color: '#92400e',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: null, included: true },
      edexcel_b: { spec: null, included: true },
      aqa:       { spec: null, included: true },
      ocr:       { spec: '2.11', included: true }
    }
  },

  /* ---- Theme 2: The National and Global Economy ---- */
  /* Section 1: Measures of Economic Performance */
  {
    id: 'inflation-measurement-and-costs',
    name: 'Inflation: Measurement & Costs',
    sub: 'CPI, RPI, CPIH and the costs of inflation',
    color: '#f97316',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '2.1.2', included: true },
      edexcel_b: { spec: '2.5.3', included: true },
      aqa:       { spec: '3.2.3.3', included: true },
      ocr:       { spec: '2.4', included: true }
    }
  },
  {
    id: 'causes-of-inflation-and-deflation',
    name: 'Causes of Inflation & Deflation',
    sub: 'Demand-pull, cost-push and monetary',
    color: '#ec2d68',
    available: { learn: true, link: true, land: true },
    boards: {
      edexcel_a: { spec: '2.1.2', included: true },
      edexcel_b: { spec: '2.5.3', included: true },
      aqa:       { spec: '3.2.3.3', included: true },
      ocr:       { spec: '2.4', included: true }
    }
  },
  {
    id: 'employment-and-unemployment',
    name: 'Employment & Unemployment',
    sub: 'Types, causes and policies',
    color: '#10b981',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '2.1.3', included: true },
      edexcel_b: { spec: '2.5.4', included: true },
      aqa:       { spec: '3.2.3.2', included: true },
      ocr:       { spec: '2.3', included: true }
    }
  },
  {
    id: 'introduction-to-balance-of-payments',
    name: 'Balance of Payments',
    sub: 'The three accounts, the current account, and why it must balance',
    color: '#0ea5e9',
    available: { learn: true, link: false, land: false },
    boards: {
      // Theme 2 INTRO to BoP (Edexcel A 2.1.4). The deeper Theme 4 build
      // (J-curve, Marshall-Lerner, exchange-rate adjustment) lives on the
      // separate `balance-of-payments` topic.
      edexcel_a: { spec: '2.1.4', included: true },
      edexcel_b: { spec: null, included: false },
      aqa:       { spec: '3.2.3.4', included: true },
      ocr:       { spec: '2.5', included: true }
    }
  },
  /* Section 2: Aggregate Demand */
  {
    id: 'aggregate-demand',
    name: 'Aggregate Demand',
    sub: 'AD as a system – formula, slope, shifts, multiplier',
    color: '#f59e0b',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '2.2.1', included: true },
      edexcel_b: { spec: '4.4.1', included: true },
      aqa:       { spec: '3.2.2.2', included: true },
      ocr:       { spec: '1.2', included: true }
    }
  },
  {
    id: 'consumption',
    name: 'Consumption',
    sub: 'Determinants, MPC, savings ratio – the biggest AD component (~60%)',
    color: '#22c55e',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '2.2.2', included: true },
      edexcel_b: { spec: '2.5.2', included: true },
      aqa:       { spec: '3.2.2.3', included: true },
      ocr:       { spec: '1.2', included: true }
    }
  },
  {
    id: 'investment',
    name: 'Investment',
    sub: 'Determinants, accelerator, animal spirits – the volatile engine (~17%)',
    color: '#f97316',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '2.2.3', included: true },
      edexcel_b: { spec: '2.5.2', included: true },
      aqa:       { spec: '3.2.2.3', included: true },
      ocr:       { spec: '1.2', included: true }
    }
  },
  {
    id: 'government-expenditure',
    name: 'Government Expenditure',
    sub: 'Composition, automatic stabilisers, fiscal rules – the only direct lever (~20%)',
    color: '#3b82f6',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '2.2.4', included: true },
      edexcel_b: { spec: '2.5.2', included: true },
      aqa:       { spec: '3.2.2.3', included: true },
      ocr:       { spec: '1.2', included: true }
    }
  },
  {
    id: 'net-trade',
    name: 'Net Trade (X − M)',
    sub: 'Exports, imports, Marshall-Lerner, J-curve – the open-economy link (~3%)',
    color: '#a855f7',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '2.2.5', included: true },
      edexcel_b: { spec: '2.5.2', included: true },
      aqa:       { spec: '3.2.2.3', included: true },
      ocr:       { spec: '1.2', included: true }
    }
  },
  /* Section 3: Aggregate Supply – split per Edexcel A 2.3.1 / 2.3.2 / 2.3.3 */
  {
    id: 'aggregate-supply',
    name: 'Characteristics of AS',
    sub: 'The AS curve, movement vs shift, SR vs LR overview',
    color: '#06b6d4',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '2.3.1', included: true },
      edexcel_b: { spec: '4.4.1', included: true },
      aqa:       { spec: '3.2.2.5', included: true },
      ocr:       { spec: '1.3', included: true }
    }
  },
  {
    id: 'short-run-aggregate-supply',
    name: 'Short-run AS',
    sub: 'SRAS curve, factors: raw material/energy costs, exchange rates, tax rates',
    color: '#0891b2',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '2.3.2', included: true },
      edexcel_b: { spec: null, included: true },
      aqa:       { spec: '3.2.2.5', included: true },
      ocr:       { spec: '1.3', included: true }
    }
  },
  {
    id: 'long-run-aggregate-supply',
    name: 'Long-run AS',
    sub: 'Keynesian vs Classical shapes; productivity, skills, regulation, demographics',
    color: '#0e7490',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '2.3.3', included: true },
      edexcel_b: { spec: null, included: true },
      aqa:       { spec: '3.2.2.5', included: true },
      ocr:       { spec: '1.3', included: true }
    }
  },
  /* Section 4: National Income */
  {
    id: 'national-income',
    name: 'National Income',
    sub: 'Circular flow of income, income vs wealth',
    color: '#84cc16',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '2.4.1', included: true },
      edexcel_b: { spec: '2.5.2', included: true },
      aqa:       { spec: '3.2.2.1', included: true },
      ocr:       { spec: '1.1', included: true }
    }
  },
  {
    id: 'injections-and-withdrawals',
    name: 'Injections & Withdrawals',
    sub: 'Money entering and leaving the circular flow',
    color: '#65a30d',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '2.4.2', included: true },
      edexcel_b: { spec: null, included: true },
      aqa:       { spec: null, included: true },
      ocr:       { spec: null, included: true }
    }
  },
  {
    id: 'national-income-and-the-multiplier',
    name: 'National Income & The Multiplier',
    sub: 'Multiplier formula, worked examples, accelerator and fiscal policy',
    color: '#16a34a',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '2.4.4', included: true },
      edexcel_b: { spec: '4.4.1', included: true },
      aqa:       { spec: '3.2.2.4', included: true },
      ocr:       { spec: '1.5', included: true }
    }
  },
  /* Section 5: Economic Growth */
  {
    id: 'measures-of-economic-performance',
    name: 'Measures of Economic Performance',
    sub: 'The macro dashboard, GDP, real vs nominal, GNI, PPP and the limits of GDP',
    color: '#0ea5e9',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '2.1.1', included: true },
      edexcel_b: { spec: '2.5', included: true },
      aqa:       { spec: '3.2.1.2', included: true },
      ocr:       { spec: '2.1', included: true }
    }
  },
  {
    id: 'equilibrium-national-income',
    name: 'Equilibrium National Income',
    sub: 'J = W, AD/AS equilibrium, reading GDP data',
    color: '#0284c7',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '2.4.3', included: true },
      edexcel_b: { spec: null, included: true },
      aqa:       { spec: '3.2.3.1', included: true },
      ocr:       { spec: '1.5', included: true }
    }
  },
  {
    id: 'causes-of-growth',
    name: 'Causes of Growth',
    sub: 'Factors driving growth, actual vs potential, export-led growth',
    color: '#facc15',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '2.5.1', included: true },
      edexcel_b: { spec: null, included: true },
      aqa:       { spec: '3.2.3.1', included: true },
      ocr:       { spec: '2.1', included: true }
    }
  },
  {
    id: 'output-gaps',
    name: 'Output Gaps',
    sub: 'Recessionary and inflationary gaps, actual vs trend output',
    color: '#fbbf24',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '2.5.2', included: true },
      edexcel_b: { spec: null, included: true },
      aqa:       { spec: '3.2.3.1', included: true },
      ocr:       { spec: '1.5', included: true }
    }
  },
  {
    id: 'trade-business-cycle',
    name: 'Trade (Business) Cycle',
    sub: 'Booms, recessions and the wave of the cycle',
    color: '#eab308',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '2.5.3', included: true },
      edexcel_b: { spec: '2.5.1', included: true },
      aqa:       { spec: '3.2.3.1', included: true },
      ocr:       { spec: '2.1', included: true }
    }
  },
  {
    id: 'the-impact-of-economic-growth',
    name: 'The Impact of Economic Growth',
    sub: 'Benefits, costs, inequality, environment and sustainability',
    color: '#15803d',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '2.5.4', included: true },
      edexcel_b: { spec: null, included: true },
      aqa:       { spec: '4.2.3.1', included: true },
      ocr:       { spec: '2.1', included: true }
    }
  },
  /* Section 6: Macroeconomic Objectives & Policies */
  {
    id: 'macroeconomic-objectives-and-trade-offs',
    name: 'Macroeconomic Objectives & Trade-offs',
    sub: 'The five objectives, conflicts and UK macro data',
    color: '#ef4444',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '2.6.1', included: true },
      edexcel_b: { spec: '2.6.1', included: true },
      aqa:       { spec: '3.2.1.1', included: true },
      ocr:       { spec: '3.4', included: true }
    }
  },
  {
    id: 'demand-side-policies-fiscal',
    name: 'Demand-side Policies: Fiscal',
    sub: 'Tax, spending, deficits, crowding out and fiscal multipliers',
    color: '#3b82f6',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '2.6.2', included: true },
      edexcel_b: { spec: '4.4.2', included: true },
      aqa:       { spec: '3.2.4.2', included: true },
      ocr:       { spec: '3.1', included: true }
    }
  },
  {
    id: 'demand-side-policies-monetary',
    name: 'Demand-side Policies: Monetary',
    sub: 'Interest rates, Bank of England, QE and transmission mechanisms',
    color: '#2563eb',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '2.6.2', included: true },
      edexcel_b: { spec: '4.4.2', included: true },
      aqa:       { spec: '3.2.4.1', included: true },
      ocr:       { spec: '3.2', included: true }
    }
  },
  {
    id: 'supply-side-policies',
    name: 'Supply-Side Policies',
    sub: 'Market-based vs interventionist approaches',
    color: '#22c55e',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '2.6.3', included: true },
      edexcel_b: { spec: '4.4.3', included: true },
      aqa:       { spec: '3.2.4.3', included: true },
      ocr:       { spec: '3.3', included: true }
    }
  },
  {
    id: 'macro-conflicts-and-trade-offs',
    name: 'Macro Conflicts & Trade-offs',
    sub: 'Phillips curve, NAIRU, stagflation and resolving trade-offs',
    color: '#dc2626',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '2.6.4', included: true },
      edexcel_b: { spec: '4.4.2', included: true },
      aqa:       { spec: '3.2.3.5', included: true },
      ocr:       { spec: '3.4', included: true }
    }
  },

  /* ---- Parked under Theme 4 (development & wellbeing) – content TBD ---- */
  {
    id: 'standard-of-living-and-wellbeing',
    name: 'Standard of Living & Wellbeing',
    sub: 'HDI, wellbeing, and beyond GDP',
    color: '#8b5cf6',
    available: { learn: true, link: false, land: false },
    // Parked under Theme 4 (Edexcel A 4.3.1 – measures of development):
    // moved out of Theme 2 because its core "beyond GDP" material is
    // already covered by `measures-of-economic-performance` Card 7.
    // Theme 4 is the natural home for HDI / Easterlin paradox /
    // ONS wellbeing dashboard / Kahneman experienced wellbeing –
    // those land alongside development indicators rather than
    // alongside GDP definitions.
    boards: {
      edexcel_a: { spec: '4.3.1', included: false },
      edexcel_b: { spec: null, included: false },
      aqa:       { spec: '4.1.2.7', included: false },
      ocr:       { spec: '4.1', included: false }
    }
  },

  /* ---- Theme 3: Business Behaviour and the Labour Market ---- */
  {
    id: 'sizes-and-types-of-firms',
    name: 'Sizes & Types of Firms',
    sub: 'Why firms stay small or grow, divorce of ownership and control, public vs private, profit vs not-for-profit',
    color: '#f43f5e',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '3.1.1', included: true },
      edexcel_b: { spec: null, included: true },
      aqa:       { spec: null, included: true },
      ocr:       { spec: null, included: true }
    }
  },
  {
    id: 'business-growth',
    name: 'Business Growth',
    sub: 'Organic vs external growth; vertical, horizontal and conglomerate integration; constraints',
    color: '#ef4444',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '3.1.2', included: true },
      edexcel_b: { spec: '2.1.1', included: true },
      aqa:       { spec: null, included: true },
      ocr:       { spec: null, included: true }
    }
  },
  {
    id: 'demergers',
    name: 'Demergers',
    sub: 'Reasons for demergers; impact on businesses, workers and consumers',
    color: '#fb7185',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '3.1.3', included: true },
      edexcel_b: { spec: null, included: true },
      aqa:       { spec: null, included: true },
      ocr:       { spec: null, included: true }
    }
  },
  {
    id: 'business-objectives',
    name: 'Business Objectives',
    sub: 'Profit, revenue, growth, satisficing and divorce of ownership',
    color: '#f97316',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '3.2.1', included: true },
      edexcel_b: { spec: '1.1.2', included: true },
      aqa:       { spec: '4.1.5.2', included: true },
      ocr:       { spec: '3.1', included: true }
    }
  },
  {
    id: 'revenue',
    name: 'Revenue',
    sub: 'TR, AR, MR – price-taker vs price-maker, revenue maximisation',
    color: '#f59e0b',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '3.3.1', included: true },
      edexcel_b: { spec: '1.6.1', included: true },
      aqa:       { spec: '4.1.4.6', included: true },
      ocr:       { spec: '3.3', included: true }
    }
  },
  {
    id: 'costs',
    name: 'Costs',
    sub: 'Fixed, variable, total, average and marginal costs',
    color: '#84cc16',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '3.3.2', included: true },
      edexcel_b: { spec: '1.6.1', included: true },
      aqa:       { spec: '4.1.4.4', included: true },
      ocr:       { spec: '3.2', included: true }
    }
  },
  {
    id: 'economies-and-diseconomies-of-scale',
    name: 'Economies & Diseconomies of Scale',
    sub: 'LRAC, MES, economies and diseconomies of scale',
    color: '#10b981',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '3.3.3', included: true },
      edexcel_b: { spec: '2.1.1', included: true },
      aqa:       { spec: '4.1.4.5', included: true },
      ocr:       { spec: '3.2', included: true }
    }
  },
  {
    id: 'profits-and-losses',
    name: 'Profits & Losses',
    sub: 'Normal/supernormal profit, shutdown rule, cost and demand changes',
    color: '#06b6d4',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '3.3.4', included: true },
      edexcel_b: { spec: '1.6.3', included: true },
      aqa:       { spec: '4.1.4.7', included: true },
      ocr:       { spec: '3.3', included: true }
    }
  },
  {
    id: 'types-of-efficiency',
    name: 'Types of Efficiency',
    sub: 'Productive, allocative, dynamic and X-efficiency',
    color: '#0ea5e9',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '3.4.1', included: true },
      edexcel_b: { spec: '4.1.5', included: true },
      aqa:       { spec: '4.1.5.10', included: true },
      ocr:       { spec: '1.2', included: true }
    }
  },
  {
    id: 'perfect-competition',
    name: 'Perfect Competition',
    sub: 'Assumptions, SR/LR equilibrium, efficiency',
    color: '#0284c7',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '3.4.2', included: true },
      edexcel_b: { spec: '4.1.1', included: true },
      aqa:       { spec: '4.1.5.3', included: true },
      ocr:       { spec: '4.1', included: true }
    }
  },
  {
    id: 'monopolistic-competition',
    name: 'Monopolistic Competition',
    sub: 'SR/LR equilibrium, differentiation, excess capacity',
    color: '#7c3aed',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '3.4.3', included: true },
      edexcel_b: { spec: '4.1.1', included: true },
      aqa:       { spec: '4.1.5.4', included: true },
      ocr:       { spec: '4.3', included: true }
    }
  },
  {
    id: 'oligopoly',
    name: 'Oligopoly',
    sub: 'Interdependence, kinked demand, price rigidity',
    color: '#8b5cf6',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '3.4.4', included: true },
      edexcel_b: { spec: '4.1.3', included: true },
      aqa:       { spec: '4.1.5.5', included: true },
      ocr:       { spec: '4.4', included: true }
    }
  },
  {
    id: 'collusion-and-cartels',
    name: 'Collusion and Cartels',
    sub: 'Tacit vs explicit collusion, OPEC, instability',
    color: '#a855f7',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '3.4.4', included: true },
      edexcel_b: { spec: '4.1.3', included: true },
      aqa:       { spec: '4.1.5.5', included: true },
      ocr:       { spec: '4.4', included: true }
    }
  },
  {
    id: 'game-theory',
    name: 'Game Theory',
    sub: "Prisoner's dilemma, Nash equilibrium, dominant strategies",
    color: '#ec4899',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '3.4.4', included: true },
      edexcel_b: { spec: null, included: true },
      aqa:       { spec: null, included: true },
      ocr:       { spec: null, included: true }
    }
  },
  {
    id: 'monopoly',
    name: 'Monopoly',
    sub: 'Sources of power, profit maximisation, barriers, price discrimination',
    color: '#dc2626',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '3.4.5', included: true },
      edexcel_b: { spec: '4.1.1', included: true },
      aqa:       { spec: '4.1.5.6', included: true },
      ocr:       { spec: '4.2', included: true }
    }
  },
  {
    id: 'price-discrimination',
    name: 'Price Discrimination',
    sub: 'Third-degree price discrimination: conditions, the diagram, and costs vs benefits',
    color: '#e11d48',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '3.4.5', included: true },
      edexcel_b: { spec: null, included: true },
      aqa:       { spec: null, included: true },
      ocr:       { spec: null, included: true }
    }
  },
  {
    id: 'monopsony',
    name: 'Monopsony',
    sub: 'Single buyer of labour, MCL > W, wage gap, minimum wage',
    color: '#b91c1c',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '3.4.6', included: true },
      edexcel_b: { spec: '4.2.1', included: true },
      aqa:       { spec: '4.1.6.4', included: true },
      ocr:       { spec: '5.3', included: true }
    }
  },
  {
    id: 'contestable-markets',
    name: 'Contestable Markets',
    sub: 'Sunk costs, hit-and-run entry, contestable markets, competition policy',
    color: '#b45309',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '3.4.7', included: true },
      edexcel_b: { spec: '4.1.2', included: true },
      aqa:       { spec: '4.1.5.9', included: true },
      ocr:       { spec: '4.5', included: true }
    }
  },
  {
    id: 'demand-for-labour',
    name: 'Demand for Labour',
    sub: 'Derived demand, MRP theory, labour demand curve',
    color: '#0f766e',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '3.5.1', included: true },
      edexcel_b: { spec: '3.5.2', included: true },
      aqa:       { spec: '4.1.6.1', included: true },
      ocr:       { spec: '5.1', included: true }
    }
  },
  {
    id: 'supply-of-labour',
    name: 'Supply of Labour',
    sub: 'Work-leisure choice, backward-bending curve, trade unions, NMW',
    color: '#15803d',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '3.5.2', included: true },
      edexcel_b: { spec: '3.5.2', included: true },
      aqa:       { spec: '4.1.6.2', included: true },
      ocr:       { spec: '5.2', included: true }
    }
  },
  {
    id: 'wage-determination',
    name: 'Wage Determination',
    sub: 'Labour market equilibrium, wage differentials, monopsony',
    color: '#16a34a',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '3.5.3', included: true },
      edexcel_b: { spec: '3.5.3', included: true },
      aqa:       { spec: '4.1.6.3', included: true },
      ocr:       { spec: '5.3', included: true }
    }
  },
  {
    id: 'government-intervention',
    name: 'Government Intervention',
    sub: 'Competition policy, regulation, nationalisation vs privatisation',
    color: '#14b8a6',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '3.6.1', included: true },
      edexcel_b: { spec: '4.2.2', included: true },
      aqa:       { spec: '4.1.8.7', included: true },
      ocr:       { spec: null, included: true }
    }
  },
  {
    id: 'impact-of-government-intervention',
    name: 'Impact of Government Intervention',
    sub: 'Impact on prices, profit, efficiency, quality and choice; limits — regulatory capture and asymmetric information',
    color: '#0d9488',
    available: { learn: false, link: false, land: false },
    boards: {
      edexcel_a: { spec: '3.6.2', included: true },
      edexcel_b: { spec: null, included: true },
      aqa:       { spec: null, included: true },
      ocr:       { spec: null, included: true }
    }
  },

  /* ---- Theme 4: A Global Perspective ---- */
  {
    id: 'globalisation',
    name: 'Globalisation',
    sub: 'Causes, benefits, costs and de-globalisation',
    color: '#0891b2',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '4.1.1', included: true },
      edexcel_b: { spec: '3.1.1', included: true },
      aqa:       { spec: '4.2.6.1', included: true },
      ocr:       { spec: '4.3', included: true }
    }
  },
  {
    id: 'specialisation-and-trade',
    name: 'Specialisation & Trade',
    sub: 'Comparative advantage, gains from trade',
    color: '#7c3aed',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '4.1.2', included: true },
      edexcel_b: { spec: '3.1.2', included: true },
      aqa:       { spec: '4.2.6.2', included: true },
      ocr:       { spec: '4.3', included: true }
    }
  },
  {
    id: 'trading-blocs-and-wto',
    name: 'Trading Blocs & WTO',
    sub: 'FTAs, customs unions, trade creation and diversion',
    color: '#0d9488',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '4.1.5', included: true },
      edexcel_b: { spec: '3.1.3', included: true },
      aqa:       { spec: '4.2.6.2', included: true },
      ocr:       { spec: '4.4', included: true }
    }
  },
  {
    id: 'restrictions-on-free-trade',
    name: 'Restrictions on Free Trade',
    sub: 'Tariffs, quotas and arguments for and against',
    color: '#dc2626',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '4.1.6', included: true },
      edexcel_b: { spec: '3.1.4', included: true },
      aqa:       { spec: '4.2.6.2', included: true },
      ocr:       { spec: '4.4', included: true }
    }
  },
  {
    id: 'balance-of-payments',
    name: 'Balance of Payments',
    sub: 'Current account, deficits, expenditure-switching vs reducing',
    color: '#ef4444',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '4.1.7', included: true },
      edexcel_b: { spec: '3.1.5', included: true },
      aqa:       { spec: '4.2.6.3', included: true },
      ocr:       { spec: '2.5', included: true }
    }
  },
  {
    id: 'exchange-rates',
    name: 'Exchange Rates',
    sub: 'FOREX, floating vs fixed, terms of trade',
    color: '#2563eb',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '4.1.8', included: true },
      edexcel_b: { spec: '3.1.5', included: true },
      aqa:       { spec: '4.2.6.4', included: true },
      ocr:       { spec: '4.2', included: true }
    }
  },
  {
    id: 'international-competitiveness',
    name: 'International Competitiveness',
    sub: 'Unit labour costs and strategies to improve',
    color: '#0f766e',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '4.1.9', included: true },
      edexcel_b: { spec: '3.5.3', included: true },
      aqa:       { spec: '4.2.6.4', included: true },
      ocr:       { spec: '4.3', included: true }
    }
  },
  {
    id: 'absolute-and-relative-poverty',
    name: 'Absolute & Relative Poverty',
    sub: 'Absolute vs relative poverty and anti-poverty policies',
    color: '#9333ea',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '4.2.1', included: true },
      edexcel_b: { spec: '3.6.1', included: true },
      aqa:       { spec: '4.1.7.2', included: true },
      ocr:       { spec: '2.7', included: true }
    }
  },
  {
    id: 'inequality',
    name: 'Inequality',
    sub: 'Gini coefficient, Lorenz curve and redistribution policies',
    color: '#be185d',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '4.2.2', included: true },
      edexcel_b: { spec: '3.6.1', included: true },
      aqa:       { spec: '4.1.7.1', included: true },
      ocr:       { spec: '2.7', included: true }
    }
  },
  {
    id: 'measures-of-development',
    name: 'Measures of Development',
    sub: 'GDP per capita, HDI, MPI and other indicators',
    color: '#16a34a',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '4.3.1', included: true },
      edexcel_b: { spec: '2.4.2', included: true },
      aqa:       { spec: '4.2.6.5', included: true },
      ocr:       { spec: '2.2', included: true }
    }
  },
  {
    id: 'factors-influencing-growth-and-development',
    name: 'Factors Influencing Growth & Development',
    sub: 'Economic, institutional and external drivers',
    color: '#15803d',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '4.3.2', included: true },
      edexcel_b: { spec: '3.4', included: true },
      aqa:       { spec: '4.2.6.5', included: true },
      ocr:       { spec: '2.2', included: true }
    }
  },
  {
    id: 'strategies-influencing-growth-and-development',
    name: 'Strategies Influencing Growth & Development',
    sub: 'Market-based, interventionist, aid, debt relief',
    color: '#84cc16',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '4.3.3', included: true },
      edexcel_b: { spec: '3.6.2', included: true },
      aqa:       { spec: '4.2.6.5', included: true },
      ocr:       { spec: '2.2', included: true }
    }
  },
  {
    id: 'role-of-financial-markets',
    name: 'Role of Financial Markets',
    sub: 'Functions: savings, investment, payments, risk management',
    color: '#f59e0b',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '4.4.1', included: true },
      edexcel_b: { spec: '4.5.2', included: true },
      aqa:       { spec: '4.2.4.1', included: true },
      ocr:       { spec: '5.2', included: true }
    }
  },
  {
    id: 'market-failure-in-the-financial-sector',
    name: 'Market Failure in the Financial Sector',
    sub: 'Asymmetric information, moral hazard, externalities, speculation',
    color: '#d97706',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '4.4.2', included: true },
      edexcel_b: { spec: '4.5.4', included: true },
      aqa:       { spec: '4.2.4.4', included: true },
      ocr:       { spec: '5.3', included: true }
    }
  },
  {
    id: 'role-of-central-banks',
    name: 'Role of Central Banks',
    sub: 'Monetary policy, lender of last resort, financial stability',
    color: '#b45309',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '4.4.3', included: true },
      edexcel_b: { spec: '4.5.3', included: true },
      aqa:       { spec: '4.2.4.3', included: true },
      ocr:       { spec: '5.3', included: true }
    }
  },
  {
    id: 'public-expenditure',
    name: 'Public Expenditure',
    sub: 'Capital vs current, transfer vs real, composition and trends',
    color: '#0ea5e9',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '4.5.1', included: true },
      edexcel_b: { spec: '4.4.2', included: true },
      aqa:       { spec: '4.2.5.1', included: true },
      ocr:       { spec: '3.1', included: true }
    }
  },
  {
    id: 'taxation',
    name: 'Taxation',
    sub: 'Direct vs indirect, progressivity, Laffer curve',
    color: '#0284c7',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '4.5.2', included: true },
      edexcel_b: { spec: '4.4.2', included: true },
      aqa:       { spec: '4.2.5.1', included: true },
      ocr:       { spec: '3.1', included: true }
    }
  },
  {
    id: 'public-sector-finances',
    name: 'Public Sector Finances',
    sub: 'Deficits, debt sustainability, fiscal rules',
    color: '#0369a1',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '4.5.3', included: true },
      edexcel_b: { spec: '4.4.2', included: true },
      aqa:       { spec: '4.2.5.1', included: true },
      ocr:       { spec: '3.1', included: true }
    }
  },
  {
    id: 'macroeconomic-policies-in-a-global-context',
    name: 'Macroeconomic Policies in a Global Context',
    sub: 'Mundell-Fleming trilemma, spillovers, international coordination',
    color: '#1d4ed8',
    available: { learn: true, link: false, land: false },
    boards: {
      edexcel_a: { spec: '4.5.4', included: true },
      edexcel_b: { spec: '4.4', included: true },
      aqa:       { spec: '4.2.6', included: true },
      ocr:       { spec: '3', included: true }
    }
  },

  /* ============================================================
     Edexcel B – business-first strand
     These sub-sections are unique to (or only examined as named
     topics by) the Edexcel B "Economics B" spec (9EB0). They have
     no equivalent named topic in Edexcel A / AQA / OCR (those
     boards fold the same ideas into broader tiles such as
     `globalisation` or `business-growth`), so the spec point is set
     only for `edexcel_b` and `null` elsewhere – `classifyTopic` in
     index.html then surfaces them solely on the Edexcel B grid.
     Cover-card stubs only: `available` is all-false, so the build
     generates no routes and the home grid shows them "coming soon"
     until Learn It content is authored. Spec points verified
     against docs/edexcel-b-spec.md (Pearson 9EB0).
     ============================================================ */
  {
    id: 'stakeholders-and-csr',
    name: 'Stakeholders & CSR',
    sub: 'Stakeholder objectives and conflicts; corporate social responsibility',
    color: '#f97316',
    available: { learn: false, link: false, land: false },
    boards: {
      edexcel_a: { spec: null, included: true },
      edexcel_b: { spec: '1.1.3', included: true },
      aqa:       { spec: null, included: true },
      ocr:       { spec: null, included: true }
    }
  },
  {
    id: 'the-entrepreneur',
    name: 'The Entrepreneur',
    sub: 'Creative destruction and adding value; profit and non-financial motives',
    color: '#fb923c',
    available: { learn: false, link: false, land: false },
    boards: {
      edexcel_a: { spec: null, included: true },
      edexcel_b: { spec: '1.2.1', included: true },
      aqa:       { spec: null, included: true },
      ocr:       { spec: null, included: true }
    }
  },
  {
    id: 'banks-and-credit',
    name: 'Banks & Credit in the Economy',
    sub: 'Role of banks, risk and liability, types and sources of credit',
    color: '#f59e0b',
    available: { learn: false, link: false, land: false },
    boards: {
      edexcel_a: { spec: null, included: true },
      edexcel_b: { spec: '1.4.1', included: true },
      aqa:       { spec: null, included: true },
      ocr:       { spec: null, included: true }
    }
  },
  {
    id: 'business-survival-and-cash-flow',
    name: 'Business Survival & Cash Flow',
    sub: 'Profit vs cash flow, forecasting, identifying credit requirements',
    color: '#eab308',
    available: { learn: false, link: false, land: false },
    boards: {
      edexcel_a: { spec: null, included: true },
      edexcel_b: { spec: '1.6.4', included: true },
      aqa:       { spec: null, included: true },
      ocr:       { spec: null, included: true }
    }
  },
  {
    id: 'research-development-and-innovation',
    name: 'R&D and Innovation',
    sub: 'Product vs process innovation, product life cycle, state funding',
    color: '#f97316',
    available: { learn: false, link: false, land: false },
    boards: {
      edexcel_a: { spec: null, included: true },
      edexcel_b: { spec: '2.1.3', included: true },
      aqa:       { spec: null, included: true },
      ocr:       { spec: null, included: true }
    }
  },
  {
    id: 'the-digital-economy',
    name: 'The Digital Economy',
    sub: 'Price comparison, micromarketing, the long tail, online retailing',
    color: '#fb923c',
    available: { learn: false, link: false, land: false },
    boards: {
      edexcel_a: { spec: null, included: true },
      edexcel_b: { spec: '2.1.4', included: true },
      aqa:       { spec: null, included: true },
      ocr:       { spec: null, included: true }
    }
  },
  {
    id: 'how-small-firms-compete',
    name: 'How Small Firms Compete',
    sub: 'USPs and differentiation, niche markets, flexibility, customer service',
    color: '#f59e0b',
    available: { learn: false, link: false, land: false },
    boards: {
      edexcel_a: { spec: null, included: true },
      edexcel_b: { spec: '2.1.5', included: true },
      aqa:       { spec: null, included: true },
      ocr:       { spec: null, included: true }
    }
  },
  {
    id: 'productivity-and-lean-production',
    name: 'Productivity & Lean Production',
    sub: 'Productivity, capacity utilisation, TQM, Kaizen and just-in-time',
    color: '#eab308',
    available: { learn: false, link: false, land: false },
    boards: {
      edexcel_a: { spec: null, included: true },
      edexcel_b: { spec: '2.3.1', included: true },
      aqa:       { spec: null, included: true },
      ocr:       { spec: null, included: true }
    }
  },
  {
    id: 'global-business-strategy',
    name: 'Global Business Strategy & Glocalisation',
    sub: 'Glocalisation, ethnocentric/geocentric approaches, branding, cultural factors',
    color: '#14b8a6',
    available: { learn: false, link: false, land: false },
    boards: {
      edexcel_a: { spec: null, included: true },
      edexcel_b: { spec: '3.3.1', included: true },
      aqa:       { spec: null, included: true },
      ocr:       { spec: null, included: true }
    }
  },
  {
    id: 'multinational-corporations',
    name: 'Multinational Corporations (MNCs)',
    sub: 'Impact on local and national economies, ethical issues, controlling MNCs',
    color: '#0ea5e9',
    available: { learn: false, link: false, land: false },
    boards: {
      edexcel_a: { spec: null, included: true },
      edexcel_b: { spec: '3.4.1', included: true },
      aqa:       { spec: null, included: true },
      ocr:       { spec: null, included: true }
    }
  }
];
