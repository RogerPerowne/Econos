/* ============================================================
   ECONOS – Link It · Make the Judgement station data
   Inflation: synthesise evidence into an exam-quality judgement
   ============================================================ */

window.ECONOS_LINK_JUDGE = {
  topic:        'Causes of Inflation & Deflation',
  backUrl:      TopicLoader.buildUrl('link_intro.html'),
  eyebrow:      'Make the Judgement',
  instruction:  'Use the evidence you have built so far to complete the final judgement. Choose the strongest phrase for each blank.',
  nextUrl:      TopicLoader.buildUrl('link_complete.html'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.buildUrl('link_chain.html') },
    { id: 'diagram', label: 'Diagram connector', href: TopicLoader.buildUrl('link_diagram.html') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html') }
  ],
  currentStationIdx: 4,

  wgll: [
    { icon: '🎯', text: 'Take a clear position'    },
    { icon: '🔗', text: 'Use the mechanism'         },
    { icon: '➕', text: 'Add a condition'           },
    { icon: '💬', text: 'Explain the limitation'    }
  ],

  scenarios: [
    /* ── 1. Interest rates & inflation ── */
    {
      id: 'interest-rates-inflation',
      claim: {
        icon:   '🏦',
        prompt: 'Policy claim',
        text:   'Higher interest rates are the best way to reduce inflation.'
      },
      evidenceCards: [
        { id: 'context', tone: 'green',  icon: '🔍', title: 'Context',       text: 'Energy prices +18%: cost-push inflation, real wages falling.' },
        { id: 'chain',   tone: 'amber',  icon: '🔗', title: 'Chain',         text: 'Energy costs ↑ → SRAS shifts left → price level ↑, output ↓.' },
        { id: 'diagram', tone: 'purple', icon: '📈', title: 'Diagram',       text: 'SRAS shifts left – stagflation: higher P, lower Y simultaneously.' },
        { id: 'depends', tone: 'blue',   icon: '⚖️', title: 'It depends on', text: 'Effectiveness depends on cause, credibility and transmission.' }
      ],
      cloze: 'Overall, higher interest rates are [1] when inflation is mainly [2], because higher borrowing costs reduce [3] and shift [4] left. However, their effectiveness is weaker when inflation is driven by [5], since interest rates do not directly reduce firms\' [6]. Therefore, the strongest judgement is that higher interest rates are [7], but only if the transmission mechanism is strong and the fall in [8] is not excessive.',
      blanks: [
        { id: 1, options: [
            { id: 'b1-most-effective',   text: 'most effective',       correct: true  },
            { id: 'b1-irrelevant',       text: 'irrelevant',             correct: false },
            { id: 'b1-harmful',          text: 'harmful in all cases',   correct: false },
            { id: 'b1-automatic',        text: 'automatic',              correct: false }
          ] },
        { id: 2, options: [
            { id: 'b2-demand-pull',      text: 'demand-pull inflation', correct: true  },
            { id: 'b2-cost-push',        text: 'cost-push inflation',    correct: false },
            { id: 'b2-structural',       text: 'structural unemployment',correct: false },
            { id: 'b2-trade',            text: 'trade liberalisation',   correct: false }
          ] },
        { id: 3, options: [
            { id: 'b3-consumption',      text: 'consumption and investment', correct: true  },
            { id: 'b3-government',       text: 'government spending',          correct: false },
            { id: 'b3-labour',           text: 'labour mobility',              correct: false },
            { id: 'b3-exports',          text: 'exports only',                 correct: false }
          ] },
        { id: 4, options: [
            { id: 'b4-ad',               text: 'AD',   correct: true  },
            { id: 'b4-sras',             text: 'SRAS', correct: false },
            { id: 'b4-lras',             text: 'LRAS', correct: false },
            { id: 'b4-mpc',              text: 'MPC',  correct: false }
          ] },
        { id: 5, options: [
            { id: 'b5-supply-shocks',    text: 'global supply shocks',   correct: true  },
            { id: 'b5-confidence',       text: 'rising confidence',       correct: false },
            { id: 'b5-lower-rates',      text: 'lower interest rates',    correct: false },
            { id: 'b5-competition',      text: 'stronger competition',    correct: false }
          ] },
        { id: 6, options: [
            { id: 'b6-costs',            text: 'production costs',    correct: true  },
            { id: 'b6-tax',              text: 'tax revenue',         correct: false },
            { id: 'b6-surplus',          text: 'consumer surplus',     correct: false },
            { id: 'b6-exchange',         text: 'exchange rates',       correct: false }
          ] },
        { id: 7, options: [
            { id: 'b7-useful-limited',   text: 'useful but limited',         correct: true  },
            { id: 'b7-best-policy',      text: 'always the best policy',     correct: false },
            { id: 'b7-ineffective',      text: 'completely ineffective',     correct: false },
            { id: 'b7-monopoly',         text: 'only suitable in monopoly markets', correct: false }
          ] },
        { id: 8, options: [
            { id: 'b8-output',           text: 'output and employment', correct: true  },
            { id: 'b8-imports',          text: 'imports and tariffs',    correct: false },
            { id: 'b8-pensions',         text: 'pensions only',          correct: false },
            { id: 'b8-tax',              text: 'tax receipts only',      correct: false }
          ] }
      ],
      overallPosition: {
        prompt: 'Overall position',
        options: [
          { id: 'op-always',     text: 'Higher rates are always best',                    correct: false },
          { id: 'op-useful',     text: 'Higher rates are useful but conditional',          correct: true  },
          { id: 'op-not-used',   text: 'Higher rates should not be used',                  correct: false },
          { id: 'op-supply',     text: 'Inflation can only be solved with supply-side policy', correct: false }
        ]
      },
      examBridge: '"Higher interest rates are useful but conditional: most effective against demand-pull inflation through their effect on consumption and investment, but limited against cost-push pressures from global supply shocks. The strongest judgement is that they should be used when the transmission mechanism is strong and the output cost is acceptable."'
    }
  ]
};
