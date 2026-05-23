/* ============================================================
   ECONOS — Link It intro/landing data for yed_xed
   ============================================================ */

window.ECONOS_LINK_INTRO = {
  topic:   'Income & Cross-Price Elasticity',
  estTime: '15–20 minutes',
  goal:    'Bridge your YED and XED knowledge into exam-quality application, analysis and evaluation.',

  intro: {
    summary: "Use UK household spending data from the 2022–23 cost of living crisis to apply YED and XED — how falling real incomes reshaped demand across different goods, and how petrol prices triggered demand shifts in related markets.",
    heroKey: 'heroElasticity',

    doInThis: 'Five short steps train the application, analysis and evaluation skills A-level rewards.',
    outcomes: [
      'Classify goods using YED (normal, luxury, inferior, necessity)',
      'Build the causal chain from income fall to demand shift',
      'Read a demand-left diagram showing a luxury good market',
      'Evaluate which factors determine whether income changes drive demand significantly'
    ],
    tip: "These steps are cognitive drills — same structure, topic-specific content. A strong Link It score means you're ready to write under exam conditions.",

    stations: [
      { num: 1, name: 'Use the context',    skill: 'Application', sub: 'Read an extract and classify which evidence changes the case for YED explaining the demand fall.',    href: TopicLoader.buildUrl('link_context.html'), state: 'available' },
      { num: 2, name: 'Build the chain',    skill: 'Analysis',    sub: 'Order the steps that explain why falling real income reduced luxury demand more than necessities.', href: TopicLoader.buildUrl('link_chain.html'),   state: 'available' },
      { num: 3, name: 'Diagram connector',  skill: 'Analysis',    sub: 'Pick, label and explain the demand-left diagram for a luxury good after an income fall.',           href: TopicLoader.buildUrl('link_diagram.html'), state: 'available' },
      { num: 4, name: 'It depends on',      skill: 'Evaluation',  sub: 'Rank the factors that most change whether YED explains the luxury demand fall.',                    href: TopicLoader.buildUrl('link_depends.html'), state: 'available' },
      { num: 5, name: 'Make the judgement', skill: 'Evaluation',  sub: 'Synthesise context, chain, diagram and conditions into an exam-quality judgement.',                 href: TopicLoader.buildUrl('link_judge.html'),   state: 'available' }
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
