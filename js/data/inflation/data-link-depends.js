/* ============================================================
   ECONOS — Link It · It Depends On station data
   Inflation: evaluative judgement — pick & rank key factors
   ============================================================ */

window.ECONOS_LINK_DEPENDS = {
  topic:        'Causes of Inflation & Deflation',
  backUrl:      TopicLoader.buildUrl('link_intro.html'),
  eyebrow:      'It Depends On',
  instruction:  'Pick the three factors that most change the answer to this claim. Explain why each one matters, then check against the ideal evaluation.',
  nextUrl:      TopicLoader.buildUrl('link_judge.html'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.buildUrl('link_chain.html') },
    { id: 'diagram', label: 'Diagram connector', href: TopicLoader.buildUrl('link_diagram.html') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html') }
  ],
  currentStationIdx: 3,

  scenarios: [
    /* ── 1. Interest rates & inflation ── */
    {
      id: 'interest-rates-inflation',
      claim: {
        icon:   '🏦',
        prompt: 'Policy claim',
        text:   'Higher interest rates are the best way to reduce inflation.'
      },
      factors: [
        {
          id:    'cause-of-inflation',
          icon:  '🔍',
          label: 'Cause of inflation',
          why:   'Interest rate rises work by suppressing demand, so they are most effective against demand-pull inflation. If inflation is cost-push — driven by supply shocks — raising rates may deepen the recession without reducing the price level.'
        },
        {
          id:    'transmission-strength',
          icon:  '⚙️',
          label: 'Strength of the transmission mechanism',
          why:   'Higher rates only reduce inflation if households and firms actually cut spending in response. If borrowers are on fixed-rate mortgages or if corporate debt is long-term, the transmission from rate rises to lower AD is weak and slow.'
        },
        {
          id:    'household-debt',
          icon:  '💳',
          label: 'Household debt levels',
          why:   'Highly indebted households on variable-rate mortgages feel rate rises immediately in their disposable income, amplifying the demand effect. Low household debt reduces this channel, limiting the policy\'s bite.'
        },
        {
          id:    'inflation-expectations',
          icon:  '🔮',
          label: 'Inflation expectations',
          why:   'If expectations are de-anchored — workers and firms already pricing in persistent inflation — monetary policy must work much harder to restore credibility, often requiring deeper rate rises that risk a sharper recession.'
        },
        {
          id:    'time-lag',
          icon:  '⏱️',
          label: 'Time lag of monetary policy',
          why:   'The Bank of England estimates interest rate changes take 18–24 months to have their full effect on inflation. A temporary supply shock may have already reversed before the rate rise even takes effect, causing unnecessary economic damage.'
        },
        {
          id:    'global-supply-shocks',
          icon:  '🌍',
          label: 'Global supply shocks',
          why:   'Domestic monetary policy cannot address the root cause of globally driven cost-push inflation, such as energy price spikes or commodity shortages. Rate rises impose a domestic demand squeeze on a supply-side problem.'
        },
        {
          id:    'real-interest-rate',
          icon:  '📐',
          label: 'Real vs nominal interest rates',
          why:   'What matters for spending decisions is the real interest rate (nominal minus inflation). If inflation is very high, even large nominal rate rises may leave real rates low or negative, limiting their restraining effect on demand.'
        },
        {
          id:    'alternative-policies',
          icon:  '🔄',
          label: 'Availability of alternative policies',
          why:   'If fiscal policy or supply-side reforms could address inflation more directly — e.g. targeted energy subsidies for cost-push, or boosting productive capacity — then interest rates may not be the "best" tool regardless of their effectiveness.'
        }
      ],
      modelRanking: ['cause-of-inflation', 'transmission-strength', 'inflation-expectations'],
      judgement: '"Whether higher interest rates are the \'best\' tool depends primarily on the cause of inflation: if inflation is demand-pull and inflation expectations remain anchored, rate rises can reduce AD effectively — but where inflation is cost-push or supply-driven, monetary tightening imposes output costs without addressing the underlying pressure."'
    }
  ]
};
