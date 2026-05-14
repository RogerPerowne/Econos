/* ============================================================
   ECONOS — Topic registry
   Single source of truth for which topics exist and what
   content is available for each. Used by index.html to render
   the topic cards, and by future tooling to track progress
   across the curriculum.
   ============================================================ */

window.ECONOS_TOPICS = [

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
