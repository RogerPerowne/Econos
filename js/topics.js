/* ============================================================
   ECONOS — Topic registry
   Single source of truth for which topics exist and what
   content is available for each. Used by index.html to render
   the topic cards, and by future tooling to track progress
   across the curriculum.
   ============================================================ */

window.ECONOS_TOPICS = [
  {
    id: 'inflation',
    name: 'Inflation',
    sub: 'Cost-push vs Demand-pull',
    color: '#ec2d68',
    available: { learn: true, link: true, land: true }
  },
  {
    id: 'ad',
    name: 'Aggregate Demand',
    sub: 'Components and shifts',
    color: '#f59e0b',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'monetary',
    name: 'Monetary policy',
    sub: 'Interest rates and the Bank of England',
    color: '#2563eb',
    available: { learn: true, link: false, land: false }
  },
  {
    id: 'unemployment',
    name: 'Unemployment',
    sub: 'Types, causes and policies',
    color: '#10b981',
    available: { learn: true, link: false, land: false }
  }
];
