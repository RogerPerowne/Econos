/* ============================================================
   ECONOS — Link It intro/landing data for market_equilibrium
   ============================================================ */

window.ECONOS_LINK_INTRO = {
  topic:   'Market Equilibrium',
  estTime: '15–20 minutes',
  goal:    'Apply the equilibrium framework — how demand and supply shifts create new equilibria, and what limits or delays the market\'s adjustment.',

  intro: {
    summary: "You've mapped equilibrium, disequilibrium, simultaneous shifts and allocative efficiency. Now train the skills examiners reward — applying the framework to real housing-market context, building a watertight demand-shift → new equilibrium chain, and reaching a supported judgement on whether rent controls are an effective policy.",
    heroKey: 'heroSupplyDemand',

    doInThis: 'Five short steps train the application, analysis and evaluation skills A-level rewards.',
    outcomes: [
      'Use real context to test whether rent controls are an effective housing policy',
      'Build a watertight demand-shift → price-signal → new-equilibrium causal chain',
      'Pick, label and explain the supply and demand diagram for a demand-driven market shift.',
      'Evaluate the key conditions that change the policy verdict on rent controls'
    ],
    tip: "These steps are cognitive drills — same structure, topic-specific content. A strong Link It score means you're ready to write under exam conditions.",

    stations: [
      { num: 1, name: 'Use the context',     skill: 'Application', sub: 'Read an extract and classify which evidence changes the case for rent controls.',                                          href: TopicLoader.buildUrl('link_context.html'), state: 'available' },
      { num: 2, name: 'Build the chain',     skill: 'Analysis',    sub: 'Order the steps that explain how a demand shock creates a new, higher equilibrium rent.',                                  href: TopicLoader.buildUrl('link_chain.html'),   state: 'available' },
      { num: 3, name: 'Predict the Outcome', skill: 'Application', sub: 'Predict directional changes in price, quantity and related markets for drought and minimum-wage scenarios.',              href: TopicLoader.buildUrl('link_predict.html'), state: 'available' },
      { num: 4, name: 'Diagram connector',   skill: 'Analysis',    sub: 'Pick, label and explain the supply and demand diagram for a demand-driven market shift.',                                 href: TopicLoader.buildUrl('link_diagram.html'), state: 'available' },
      { num: 5, name: 'Make the judgement',  skill: 'Evaluation',  sub: 'Synthesise context, chain, predict and diagram into an exam-quality judgement on rent controls.',                         href: TopicLoader.buildUrl('link_judge.html'),   state: 'available' }
    ],

    stages: [
      { num: 1, name: 'Learn it', sub: 'Recap and lock in the gems',    state: 'done',    href: TopicLoader.buildUrl('topic.html')      },
      { num: 2, name: 'Link it',  sub: 'Apply skills with the context', state: 'current'                                                },
      { num: 3, name: 'Land it',  sub: 'Tackle real exam questions',    state: 'locked'                                                 }
    ],

    startUrl:   TopicLoader.buildUrl('link_context.html'),
    startLabel: 'Start Link it'
  }
};
