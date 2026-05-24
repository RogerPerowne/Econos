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
    available: { learn: true, link: true, land: false }
  },
  {
    id: 'ppf',
    name: 'Production Possibility Frontiers',
    sub: 'Trade-offs, opportunity cost and economic growth',
    color: '#ef4444',
    available: { learn: true, link: true, land: false }
  },
  {
    id: 'specialisation_money',
    name: 'Specialisation & Money',
    sub: 'Division of labour, functions of money, barter',
    color: '#f59e0b',
    available: { learn: true, link: true, land: false }
  },
  {
    id: 'economic_systems',
    name: 'Economic Systems',
    sub: 'Free market, command, mixed economies',
    color: '#84cc16',
    available: { learn: true, link: true, land: false }
  },

  /* ---- Theme 1, Section 2: How Markets Work (2.1–2.10) ---- */
  {
    id: 'demand',
    name: 'Demand',
    sub: 'Law of demand, shifts, consumer surplus',
    color: '#10b981',
    available: { learn: true, link: true, land: false }
  },
  {
    id: 'ped',
    name: 'Price Elasticity of Demand',
    sub: 'PED formula, determinants, revenue implications',
    color: '#8b5cf6',
    available: { learn: true, link: true, land: false }
  },
  {
    id: 'yed_xed',
    name: 'Income & Cross-Price Elasticity',
    sub: 'Income and cross-price elasticity, normal vs inferior',
    color: '#ec4899',
    available: { learn: true, link: true, land: false }
  },
  {
    id: 'supply',
    name: 'Supply',
    sub: 'Law of supply, shifts, producer surplus',
    color: '#06b6d4',
    available: { learn: true, link: true, land: false }
  },
  {
    id: 'pes',
    name: 'Price Elasticity of Supply',
    sub: 'PES formula, determinants, time and stocks',
    color: '#a855f7',
    available: { learn: true, link: true, land: false }
  },
  {
    id: 'market_equilibrium',
    name: 'Price Determination',
    sub: 'Equilibrium, excess demand/supply, market clearing',
    color: '#0ea5e9',
    available: { learn: true, link: true, land: false }
  },
  {
    id: 'price_functions',
    name: 'The Price Mechanism',
    sub: 'Rationing, signalling, incentives and resource allocation',
    color: '#14b8a6',
    available: { learn: true, link: true, land: false }
  },
  {
    id: 'consumer_producer_surplus',
    name: 'Consumer & Producer Surplus',
    sub: 'Welfare triangles, efficiency and the gains from trade',
    color: '#f59e0b',
    available: { learn: true, link: true, land: false }
  },
  {
    id: 'indirect_taxes_subsidies',
    name: 'Indirect Taxes & Subsidies',
    sub: 'Tax and subsidy diagrams, incidence, welfare effects and evaluation',
    color: '#b45309',
    available: { learn: true, link: true, land: false }
  },
  {
    id: 'behavioural_econ',
    name: 'Behavioural Economics',
    sub: 'Nudge theory, heuristics, biases and bounded rationality',
    color: '#1d4ed8',
    available: { learn: true, link: true, land: false }
  },

  /* ---- Theme 1, Section 3: Market Failure (3.1–3.4) ---- */
  {
    id: 'market_failure',
    name: 'Market Failure',
    sub: 'Types of market failure and why markets fail to achieve allocative efficiency',
    color: '#b91c1c',
    available: { learn: true, link: true, land: false }
  },
  {
    id: 'neg_externalities',
    name: 'Negative Externalities',
    sub: 'Social vs private costs, market failure, pollution',
    color: '#dc2626',
    available: { learn: true, link: true, land: false }
  },
  {
    id: 'pos_externalities',
    name: 'Positive Externalities',
    sub: 'Social vs private benefits, under-provision, education',
    color: '#16a34a',
    available: { learn: true, link: true, land: false }
  },
  {
    id: 'public_goods',
    name: 'Public Goods',
    sub: 'Non-rival, non-excludable, free rider problem',
    color: '#2563eb',
    available: { learn: true, link: true, land: false }
  },
  {
    id: 'info_gaps',
    name: 'Information Gaps',
    sub: 'Asymmetric information, moral hazard, adverse selection',
    color: '#7c3aed',
    available: { learn: true, link: true, land: false }
  },

  /* ---- Theme 1, Section 4: Government Intervention (4.1–4.2) ---- */
  {
    id: 'taxes_subsidies_policy',
    name: 'Taxes & Subsidies as Policy Tools',
    sub: 'When taxes and subsidies are justified, UK case studies and evaluation framework',
    color: '#0f766e',
    available: { learn: true, link: true, land: false }
  },
  {
    id: 'govt_failure',
    name: 'Government Failure',
    sub: 'Unintended consequences, information failures, regulatory capture',
    color: '#9f1239',
    available: { learn: true, link: true, land: false }
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
    name: 'Government Intervention in Markets',
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
  /* Section 1: Measures of Economic Performance */
  {
    id: 'inflation_meas',
    name: 'Inflation: Measurement & Costs',
    sub: 'CPI, RPI, CPIH and the costs of inflation',
    color: '#f97316',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'inflation',
    name: 'Causes of Inflation & Deflation',
    sub: 'Demand-pull, cost-push and monetary',
    color: '#ec2d68',
    available: { learn: true, link: true, land: true }
  },
  {
    id: 'unemployment',
    name: 'Employment & Unemployment',
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
  /* Section 2: Aggregate Demand */
  {
    id: 'ad',
    name: 'Aggregate Demand',
    sub: 'Components, slope and shifts',
    color: '#f59e0b',
    available: { learn: true, link: false, land: false }
  },
  /* Section 3: Aggregate Supply */
  {
    id: 'agg_supply',
    name: 'Aggregate Supply',
    sub: 'SRAS, LRAS and the Classical vs Keynesian debate',
    color: '#06b6d4',
    available: { learn: true, link: false, land: false }
  },
  /* Section 4: National Income */
  {
    id: 'national_income',
    name: 'National Income',
    sub: 'Circular flow, equilibrium income and national income caveats',
    color: '#84cc16',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'multiplier',
    name: 'National Income & The Multiplier',
    sub: 'Multiplier formula, worked examples, accelerator and fiscal policy',
    color: '#16a34a',
    available: { learn: true, link: false, land: false }
  },
  /* Section 5: Economic Growth */
  {
    id: 'growth_measure',
    name: 'Economic Growth & National Income',
    sub: 'GDP, GNI, PPP, causes of growth and long-run trends',
    color: '#0ea5e9',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'output_gaps',
    name: 'Output Gaps',
    sub: 'Actual vs potential GDP, negative and positive gaps, policy implications',
    color: '#0284c7',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'growth_cycle',
    name: 'Trade Cycle, Shocks & Economic Growth',
    sub: 'Booms, recessions, shocks and the trade cycle',
    color: '#eab308',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'growth_impact',
    name: 'The Impact of Economic Growth',
    sub: 'Benefits, costs, inequality, environment and sustainability',
    color: '#15803d',
    available: { learn: true, link: false, land: false }
  },
  /* Section 6: Macroeconomic Objectives & Policies */
  {
    id: 'macro_objectives',
    name: 'Macroeconomic Objectives & Trade-offs',
    sub: 'The five objectives, conflicts and UK macro data',
    color: '#ef4444',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'fiscal_policy',
    name: 'Demand-side Policies: Fiscal',
    sub: 'Tax, spending, deficits, crowding out and fiscal multipliers',
    color: '#3b82f6',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'monetary',
    name: 'Demand-side Policies: Monetary',
    sub: 'Interest rates, Bank of England, QE and transmission mechanisms',
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
  {
    id: 'macro_conflicts',
    name: 'Macro Conflicts & Trade-offs',
    sub: 'Phillips curve, NAIRU, stagflation and resolving trade-offs',
    color: '#dc2626',
    available: { learn: true, link: false, land: false }
  },

  /* ---- Parked — to be assigned to later themes ---- */
  {
    id: 'sol_wellbeing',
    name: 'Standard of Living & Wellbeing',
    sub: 'HDI, wellbeing, and beyond GDP',
    color: '#8b5cf6',
    available: { learn: true, link: false, land: false }
  },

  /* ---- Theme 3: Business Behaviour and the Labour Market ---- */
  {
    id: 'business_growth',
    name: 'Business Growth',
    sub: 'Internal vs external growth, mergers, integration types',
    color: '#ef4444',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'business_objectives',
    name: 'Business Objectives',
    sub: 'Profit, revenue, growth, satisficing and divorce of ownership',
    color: '#f97316',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'revenue',
    name: 'Revenue',
    sub: 'TR, AR, MR — price-taker vs price-maker, revenue maximisation',
    color: '#f59e0b',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'short_run_costs',
    name: 'Costs',
    sub: 'Fixed, variable, total, average and marginal costs',
    color: '#84cc16',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'long_run_costs',
    name: 'Economies & Diseconomies of Scale',
    sub: 'LRAC, MES, economies and diseconomies of scale',
    color: '#10b981',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'profits_shutdown',
    name: 'Profits & Losses',
    sub: 'Normal/supernormal profit, shutdown rule, cost and demand changes',
    color: '#06b6d4',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'efficiency',
    name: 'Types of Efficiency',
    sub: 'Productive, allocative, dynamic and X-efficiency',
    color: '#0ea5e9',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'perfect_competition',
    name: 'Perfect Competition',
    sub: 'Assumptions, SR/LR equilibrium, efficiency',
    color: '#0284c7',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'monopolistic_competition',
    name: 'Monopolistic Competition',
    sub: 'SR/LR equilibrium, differentiation, excess capacity',
    color: '#7c3aed',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'oligopoly',
    name: 'Oligopoly',
    sub: 'Interdependence, kinked demand, price rigidity',
    color: '#8b5cf6',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'collusion_cartels',
    name: 'Collusion and Cartels',
    sub: 'Tacit vs explicit collusion, OPEC, instability',
    color: '#a855f7',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'game_theory',
    name: 'Game Theory',
    sub: "Prisoner's dilemma, Nash equilibrium, dominant strategies",
    color: '#ec4899',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'monopoly',
    name: 'Monopoly',
    sub: 'Sources of power, profit maximisation, barriers, price discrimination',
    color: '#dc2626',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'monopsony',
    name: 'Monopsony',
    sub: 'Single buyer of labour, MCL > W, wage gap, minimum wage',
    color: '#b91c1c',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'contestability',
    name: 'Contestable Markets',
    sub: 'Sunk costs, hit-and-run entry, contestable markets, competition policy',
    color: '#b45309',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'labour_markets',
    name: 'Demand for Labour',
    sub: 'Derived demand, MRP theory, labour demand curve',
    color: '#0f766e',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'labour_supply_nmw',
    name: 'Supply of Labour',
    sub: 'Work-leisure choice, backward-bending curve, trade unions, NMW',
    color: '#15803d',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'wage_determination',
    name: 'Wage Determination',
    sub: 'Labour market equilibrium, wage differentials, monopsony',
    color: '#16a34a',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'govt_intervention_t3',
    name: 'Government Intervention',
    sub: 'Competition policy, regulation, nationalisation vs privatisation',
    color: '#14b8a6',
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
    name: 'Specialisation & Trade',
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
    name: 'Restrictions on Free Trade',
    sub: 'Tariffs, quotas and arguments for and against',
    color: '#dc2626',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'balance_of_payments',
    name: 'Balance of Payments',
    sub: 'Current account, deficits, expenditure-switching vs reducing',
    color: '#ef4444',
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
    name: 'Absolute & Relative Poverty',
    sub: 'Absolute vs relative poverty and anti-poverty policies',
    color: '#9333ea',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'income_inequality',
    name: 'Inequality',
    sub: 'Gini coefficient, Lorenz curve and redistribution policies',
    color: '#be185d',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'measures_of_development',
    name: 'Measures of Development',
    sub: 'GDP per capita, HDI, MPI and other indicators',
    color: '#16a34a',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'factors_growth_development',
    name: 'Factors Influencing Growth & Development',
    sub: 'Economic, institutional and external drivers',
    color: '#15803d',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'strategies_growth_development',
    name: 'Strategies Influencing Growth & Development',
    sub: 'Market-based, interventionist, aid, debt relief',
    color: '#84cc16',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'financial_markets',
    name: 'Role of Financial Markets',
    sub: 'Functions: savings, investment, payments, risk management',
    color: '#f59e0b',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'financial_market_failure',
    name: 'Market Failure in the Financial Sector',
    sub: 'Asymmetric information, moral hazard, externalities, speculation',
    color: '#d97706',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'central_banks',
    name: 'Role of Central Banks',
    sub: 'Monetary policy, lender of last resort, financial stability',
    color: '#b45309',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'public_expenditure',
    name: 'Public Expenditure',
    sub: 'Capital vs current, transfer vs real, composition and trends',
    color: '#0ea5e9',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'taxation',
    name: 'Taxation',
    sub: 'Direct vs indirect, progressivity, Laffer curve',
    color: '#0284c7',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'public_finances',
    name: 'Public Sector Finances',
    sub: 'Deficits, debt sustainability, fiscal rules',
    color: '#0369a1',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'macro_policies_global',
    name: 'Macroeconomic Policies in a Global Context',
    sub: 'Mundell-Fleming trilemma, spillovers, international coordination',
    color: '#1d4ed8',
    available: { learn: true, link: false, land: false }
  }
];
