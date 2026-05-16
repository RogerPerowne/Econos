/* ============================================================
   ECONOS — Topic registry
   Single source of truth for which topics exist and what
   content is available for each. Used by index.html to render
   the topic cards, and by future tooling to track progress
   across the curriculum.
   ============================================================ */

window.ECONOS_TOPICS = [

  /* ---- Theme 1, Section 1: The Economic Problem (1.1–1.6) ---- */
  {
    id: 'basic_econ_problem',
    name: 'Introduction to Economics',
    sub: 'Economics as a social science, positive/normative statements, scarcity, choice, opportunity cost',
    color: '#f97316',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'ppf',
    name: 'Production Possibility Frontiers',
    sub: 'Trade-offs, opportunity cost and economic growth',
    color: '#ef4444',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'specialisation_money',
    name: 'Specialisation & Division of Labour',
    sub: 'Division of labour, functions of money, barter',
    color: '#f59e0b',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'economic_systems',
    name: 'Economic Systems',
    sub: 'Free market, command, mixed economies',
    color: '#84cc16',
    available: { learn: true, link: false, land: false }
  },

  /* ---- Theme 1, Section 2: How Markets Work (2.1–2.10) ---- */
  {
    id: 'demand',
    name: 'Demand',
    sub: 'Law of demand, shifts, consumer surplus',
    color: '#10b981',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'ped',
    name: 'Price Elasticity of Demand',
    sub: 'PED formula, determinants, revenue implications',
    color: '#8b5cf6',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'yed_xed',
    name: 'YED & XED',
    sub: 'Income and cross-price elasticity, normal vs inferior',
    color: '#ec4899',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'supply',
    name: 'Supply',
    sub: 'Law of supply, shifts, producer surplus',
    color: '#06b6d4',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'pes',
    name: 'Price Elasticity of Supply',
    sub: 'PES formula, determinants, time and stocks',
    color: '#a855f7',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'market_equilibrium',
    name: 'Price Determination',
    sub: 'Equilibrium, excess demand/supply, market clearing',
    color: '#0ea5e9',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'price_functions',
    name: 'Price Mechanism',
    sub: 'Rationing, signalling, incentives and resource allocation',
    color: '#14b8a6',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'consumer_producer_surplus',
    name: 'Consumer & Producer Surplus',
    sub: 'Welfare triangles, efficiency and the gains from trade',
    color: '#f59e0b',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'indirect_taxes_subsidies',
    name: 'Indirect Taxes & Subsidies',
    sub: 'Tax and subsidy diagrams, incidence, welfare effects and evaluation',
    color: '#b45309',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'behavioural_econ',
    name: 'Behavioural Economics',
    sub: 'Nudge theory, heuristics, biases and bounded rationality',
    color: '#1d4ed8',
    available: { learn: true, link: false, land: false }
  },

  /* ---- Theme 1, Section 3: Market Failure (3.1–3.4) ---- */
  {
    id: 'market_failure',
    name: 'Market Failure',
    sub: 'Types of market failure and why markets fail to achieve allocative efficiency',
    color: '#b91c1c',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'neg_externalities',
    name: 'Negative Externalities',
    sub: 'Social vs private costs, market failure, pollution',
    color: '#dc2626',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'pos_externalities',
    name: 'Positive Externalities',
    sub: 'Social vs private benefits, under-provision, education',
    color: '#16a34a',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'public_goods',
    name: 'Public Goods',
    sub: 'Non-rival, non-excludable, free rider problem',
    color: '#2563eb',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'info_gaps',
    name: 'Information Gaps',
    sub: 'Asymmetric information, moral hazard, adverse selection',
    color: '#7c3aed',
    available: { learn: true, link: false, land: false }
  },

  /* ---- Theme 1, Section 4: Government Intervention (4.1–4.2) ---- */
  {
    id: 'govt_failure',
    name: 'Government Failure',
    sub: 'Unintended consequences, information failures, regulatory capture',
    color: '#9f1239',
    available: { learn: true, link: false, land: false }
  },

  /* ---- Parked — to be assigned to later themes ---- */
  {
    id: 'environmental_econ',
    name: 'Environmental Economics',
    sub: 'Carbon markets, Pigouvian taxes, sustainability',
    color: '#15803d',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'price_controls',
    name: 'Price Controls',
    sub: 'Price ceilings, price floors, effects and evaluation',
    color: '#b91c1c',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'unstable_markets',
    name: 'Unstable Commodity Markets',
    sub: 'Buffer stocks, price volatility and stabilisation schemes',
    color: '#92400e',
    available: { learn: true, link: false, land: false }
  },

  /* ---- Theme 2: The National and Global Economy ---- */
  {
    id: 'growth_measure',
    name: 'Economic Growth',
    sub: 'GDP, GNI, PPP and what growth really means',
    color: '#0ea5e9',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'sol_wellbeing',
    name: 'Standard of Living',
    sub: 'HDI, wellbeing, and beyond GDP',
    color: '#8b5cf6',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'inflation_meas',
    name: 'Inflation: Measurement',
    sub: 'CPI, RPI, CPIH and the costs of inflation',
    color: '#f97316',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'inflation',
    name: 'Inflation: Causes',
    sub: 'Demand-pull, cost-push and monetary',
    color: '#ec2d68',
    available: { learn: true, link: true, land: true }
  },
  {
    id: 'unemployment',
    name: 'Unemployment',
    sub: 'Types, causes and policies',
    color: '#10b981',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'bop_t2',
    name: 'Balance of Payments',
    sub: 'Current account, deficit causes and correction',
    color: '#6366f1',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'ad',
    name: 'Aggregate Demand',
    sub: 'Components, slope and shifts',
    color: '#f59e0b',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'agg_supply',
    name: 'Aggregate Supply',
    sub: 'SRAS, LRAS and the Classical vs Keynesian debate',
    color: '#06b6d4',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'multiplier',
    name: 'National Income & Multiplier',
    sub: 'Circular flow, equilibrium and the multiplier formula',
    color: '#84cc16',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'growth_cycle',
    name: 'Trade Cycle & Growth',
    sub: 'Booms, recessions, shocks and output gaps',
    color: '#eab308',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'macro_objectives',
    name: 'Macro Objectives',
    sub: 'Trade-offs, Phillips curve and NAIRU',
    color: '#ef4444',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'fiscal_policy',
    name: 'Fiscal Policy',
    sub: 'Tax, spending, deficits and crowding out',
    color: '#3b82f6',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'monetary',
    name: 'Monetary Policy',
    sub: 'Interest rates and the Bank of England',
    color: '#2563eb',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'supply_side',
    name: 'Supply-Side Policies',
    sub: 'Market-based vs interventionist approaches',
    color: '#22c55e',
    available: { learn: true, link: false, land: false }
  },

  /* ---- Theme 3: Business Behaviour and the Labour Market ---- */
  {
    id: 'business_objectives',
    name: 'Business Objectives',
    sub: 'Profit, revenue, growth, satisficing and divorce of ownership',
    color: '#f97316',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'business_growth',
    name: 'Business Growth',
    sub: 'Internal vs external growth, mergers, integration types',
    color: '#ef4444',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'short_run_costs',
    name: 'Short-Run Costs',
    sub: 'Fixed, variable, total, average and marginal costs',
    color: '#f59e0b',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'long_run_costs',
    name: 'Long-Run Costs & Economies of Scale',
    sub: 'LRAC, MES, economies and diseconomies of scale',
    color: '#84cc16',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'profits_shutdown',
    name: 'Revenue, Profit & Shutdown',
    sub: 'AR, MR, TR, normal profit, supernormal profit, shutdown rule',
    color: '#10b981',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'efficiency',
    name: 'Types of Efficiency',
    sub: 'Productive, allocative, dynamic and X-efficiency',
    color: '#06b6d4',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'perfect_competition',
    name: 'Perfect Competition',
    sub: 'Assumptions, SR/LR equilibrium, efficiency',
    color: '#0ea5e9',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'monopoly',
    name: 'Monopoly',
    sub: 'Sources of power, profit maximisation, welfare loss',
    color: '#8b5cf6',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'barriers_entry',
    name: 'Barriers to Entry',
    sub: 'Structural, strategic and legal barriers',
    color: '#a855f7',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'monopoly_vs_competition',
    name: 'Market Power & Contestability',
    sub: 'Contestability spectrum, firm-level limit cases, welfare, competition policy',
    color: '#ec4899',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'price_discrimination',
    name: 'Price Discrimination',
    sub: '1st, 2nd, 3rd degree: conditions, examples, welfare effects',
    color: '#14b8a6',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'monopolistic_competition',
    name: 'Monopolistic Competition',
    sub: 'SR/LR equilibrium, differentiation, excess capacity',
    color: '#dc2626',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'oligopoly',
    name: 'Oligopoly',
    sub: 'Interdependence, kinked demand, price rigidity',
    color: '#16a34a',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'collusion_cartels',
    name: 'Collusion & Cartels',
    sub: 'Tacit vs explicit collusion, OPEC, instability',
    color: '#2563eb',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'game_theory',
    name: 'Game Theory',
    sub: "Prisoner's dilemma, Nash equilibrium, dominant strategies",
    color: '#7c3aed',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'profit_cost_changes',
    name: 'Profit & Cost Changes',
    sub: 'Impact of cost/revenue shifts on profit-maximising output',
    color: '#15803d',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'contestability',
    name: 'Contestability',
    sub: 'Sunk costs, hit-and-run entry, contestable markets',
    color: '#b45309',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'labour_markets',
    name: 'Labour Markets',
    sub: 'Demand for labour, MRP theory, wage determination',
    color: '#0f766e',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'labour_supply_nmw',
    name: 'Labour Supply & Minimum Wage',
    sub: 'Individual/market labour supply, NMW effects, monopsony',
    color: '#b91c1c',
    available: { learn: true, link: false, land: false }
  },

  /* ---- Theme 4: A Global Perspective ---- */
  {
    id: 'globalisation',
    name: 'Globalisation',
    sub: 'Causes, benefits, costs and de-globalisation',
    color: '#0891b2',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'trade_spec',
    name: 'Trade & Specialisation',
    sub: 'Comparative advantage, gains from trade',
    color: '#7c3aed',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'trading_blocs',
    name: 'Trading Blocs & WTO',
    sub: 'FTAs, customs unions, trade creation and diversion',
    color: '#0d9488',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'protectionism',
    name: 'Protectionism',
    sub: 'Tariffs, quotas and arguments for and against',
    color: '#dc2626',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'exchange_rates',
    name: 'Exchange Rates',
    sub: 'FOREX, floating vs fixed, terms of trade',
    color: '#2563eb',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'intl_competitiveness',
    name: 'International Competitiveness',
    sub: 'Unit labour costs and strategies to improve',
    color: '#0f766e',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'poverty',
    name: 'Poverty',
    sub: 'Absolute vs relative poverty and anti-poverty policies',
    color: '#9333ea',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'income_inequality',
    name: 'Income & Wealth Inequality',
    sub: 'Gini coefficient, Lorenz curve and redistribution policies',
    color: '#be185d',
    available: { learn: true, link: false, land: false }
  }
];
