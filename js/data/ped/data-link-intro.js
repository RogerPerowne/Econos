/* ============================================================
   ECONOS — Link It intro/landing data for ped
   ============================================================ */

window.ECONOS_LINK_INTRO = {
  topic:   'Price Elasticity of Demand',
  estTime: '15–20 minutes',
  goal:    'Apply the PED framework — how elasticity shapes tax incidence, revenue effects and the effectiveness of policy.',

  intro: {
    summary: "You've locked in the PED formula, the elastic/inelastic distinction, the determinants and the revenue rules. Now train the skills examiners reward — applying the framework to real context, building a watertight tax → incidence causal chain, and reaching a supported judgement on whether fuel duty is an effective environmental policy.",
    heroKey: 'heroBars',

    doInThis: 'Five short steps train the application, analysis and evaluation skills A-level rewards.',
    outcomes: [
      'Use real context to test whether raising fuel duty is justified',
      'Build a watertight supply shift → tax incidence → revenue causal chain',
      'Pick, label and explain the supply and demand diagram showing a tax on an inelastic good.',
      'Evaluate the key conditions that change the policy verdict'
    ],
    tip: "These steps are cognitive drills — same structure, topic-specific content. A strong Link It score means you're ready to write under exam conditions.",

    stations: [
      { num: 1, name: 'Use the context',    skill: 'Application', sub: 'Read an extract and classify which evidence changes the case for raising fuel duty.',                          href: TopicLoader.buildUrl('link_context.html'), state: 'available' },
      { num: 2, name: 'Build the chain',    skill: 'Analysis',    sub: 'Order the steps that explain how a fuel duty increase affects price, quantity and tax incidence.',           href: TopicLoader.buildUrl('link_chain.html'),   state: 'available' },
      { num: 3, name: 'Diagram connector',  skill: 'Analysis',    sub: 'Pick, label and explain the supply and demand diagram showing a tax on an inelastic good.',                  href: TopicLoader.buildUrl('link_diagram.html'), state: 'available' },
      { num: 4, name: 'It depends on',      skill: 'Evaluation',  sub: 'Rank the factors that most change whether fuel duty effectively reduces carbon emissions.',                  href: TopicLoader.buildUrl('link_depends.html'), state: 'available' },
      { num: 5, name: 'Make the judgement', skill: 'Evaluation',  sub: 'Synthesise context, chain, diagram and conditions into an exam-quality judgement.',                         href: TopicLoader.buildUrl('link_judge.html'),   state: 'available' }
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
