/* ============================================================
   ECONOS — Link It intro/landing data for price_functions
   ============================================================ */

window.ECONOS_LINK_INTRO = {
  topic:   'The Price Mechanism',
  estTime: '15–20 minutes',
  goal:    'Bridge your price mechanism knowledge into exam-quality application, analysis and evaluation.',

  intro: {
    summary: "Use the 2021–23 UK food price surge to apply the three functions of the price mechanism — rationing, signalling and incentivising — and evaluate how well prices coordinate market adjustment when supply is disrupted.",
    heroKey: 'heroBars',

    doInThis: 'Five short steps train the application, analysis and evaluation skills A-level rewards.',
    outcomes: [
      'Explain and apply the three price mechanism functions in a real context',
      'Build the causal chain from supply disruption to market adjustment',
      'Predict market outcomes of price shocks including London housing and gas price surges',
      'Evaluate when the price mechanism succeeds and fails as a resource allocator'
    ],
    tip: "These steps are cognitive drills — same structure, topic-specific content. A strong Link It score means you're ready to write under exam conditions.",

    stations: [
      { num: 1, name: 'Use the context',    skill: 'Application', sub: 'Read an extract and classify which evidence changes the case for the price mechanism as a food allocator.',      href: TopicLoader.buildUrl('link_context.html'), state: 'available' },
      { num: 2, name: 'Build the chain',    skill: 'Analysis',    sub: 'Order the steps from the Ukraine war supply shock through rationing, signalling and incentivising.',             href: TopicLoader.buildUrl('link_chain.html'),   state: 'available' },
      { num: 3, name: 'Predict the Outcome', skill: 'Analysis',    sub: 'Apply rationing, signalling and incentivising to London house prices and the 2022 gas price surge.',          href: TopicLoader.buildUrl('link_predict.html'), state: 'available' },
      { num: 4, name: 'It depends on',       skill: 'Evaluation',  sub: 'Rank the factors that most change whether the price mechanism efficiently allocates food during disruption.',   href: TopicLoader.buildUrl('link_depends.html'), state: 'available' },
      { num: 5, name: 'Make the judgement',  skill: 'Evaluation',  sub: 'Synthesise context, chain, predict and conditions into an exam-quality judgement.',                             href: TopicLoader.buildUrl('link_judge.html'),   state: 'available' }
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
