/* ============================================================
   ECONOS — Link It intro/landing data for demand
   ============================================================ */

window.ECONOS_LINK_INTRO = {
  topic:   'Demand',
  estTime: '15–20 minutes',
  goal:    'Bridge your demand knowledge into exam-quality application, analysis and evaluation.',

  intro: {
    summary: "You've locked in the law of demand, curve shifts and consumer surplus. Now train the skills examiners reward — applying the framework to real context, building a watertight income → demand → equilibrium chain, and reaching a supported judgement on when income is the dominant shifter.",
    heroKey: 'heroDemand',

    doInThis: 'Five short steps train the application, analysis and evaluation skills A-level rewards.',
    outcomes: [
      'Identify demand shifters in a real post-COVID leisure context',
      'Build the causal chain from income and confidence to a new market equilibrium',
      'Read and label a demand-shift diagram correctly',
      'Evaluate when income is vs is not the dominant driver of demand'
    ],
    tip: "These steps are cognitive drills — same structure, topic-specific content. A strong Link It score means you're ready to write under exam conditions.",

    stations: [
      { num: 1, name: 'Use the context',    skill: 'Application', sub: 'Read an extract and classify which evidence supports, challenges or complicates the claim.',         href: TopicLoader.buildUrl('link_context.html'), state: 'available' },
      { num: 2, name: 'Build the chain',    skill: 'Analysis',    sub: 'Order the steps that explain how rising income and confidence shift demand and move the equilibrium.', href: TopicLoader.buildUrl('link_chain.html'),   state: 'available' },
      { num: 3, name: 'Diagram connector',  skill: 'Analysis',    sub: 'Pick, label and explain the demand-shift diagram for the UK leisure recovery.',                       href: TopicLoader.buildUrl('link_diagram.html'), state: 'available' },
      { num: 4, name: 'It depends on',      skill: 'Evaluation',  sub: 'Rank the factors that most change whether income is the primary driver of leisure demand.',           href: TopicLoader.buildUrl('link_depends.html'), state: 'available' },
      { num: 5, name: 'Make the judgement', skill: 'Evaluation',  sub: 'Synthesise context, chain, diagram and conditions into an exam-quality judgement.',                   href: TopicLoader.buildUrl('link_judge.html'),   state: 'available' }
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
