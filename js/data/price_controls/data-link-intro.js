/* ============================================================
   ECONOS – Link It intro/landing data for price_controls
   Scenario: rent control (binding maximum price on housing)
   ============================================================ */

window.ECONOS_LINK_INTRO = {
  topic:   'Government Intervention in Markets',
  estTime: '15–20 minutes',
  goal:    'Apply the price ceiling framework to a binding rent control – show why a maximum price below equilibrium creates a shortage, redistributes surplus and risks destroying welfare.',

  intro: {
    summary: "You've mastered how maximum prices, minimum prices, taxes, subsidies, permits, state and information provision and regulation each address a particular market failure. Now train the skills examiners reward – applying the price ceiling framework to a rent control case, building the binding cap → shortage → non-price rationing chain, and reaching a supported judgement on whether rent controls protect tenants.",
    heroKey: 'heroIntervention',

    doInThis: 'Five short steps train the application, analysis and evaluation skills A-level rewards.',
    outcomes: [
      'Use real context to test whether a rent cap protects low-income tenants in a tight housing market',
      'Build a watertight binding ceiling → shortage → non-price rationing causal chain',
      'Pick, label and explain the supply and demand diagram for a binding maximum price',
      'Evaluate the key conditions that change whether rent controls raise or lower welfare'
    ],
    tip: "These steps are cognitive drills – same structure, topic-specific content. A strong Link It score means you're ready to write under exam conditions.",

    stations: [
      { num: 1, name: 'Use the context', skill: 'Application', sub: 'Read an extract and judge which evidence changes the answer.', href: TopicLoader.routes.link('context'), state: 'available' },
      { num: 2, name: 'Build the chain', skill: 'Analysis', sub: 'Order or fill the steps in a reasoning chain.', href: TopicLoader.routes.link('chain'), state: 'available' },
      { num: 3, name: 'Diagram connector', skill: 'Analysis', sub: 'Pick, label, interpret and explain the right diagram.', href: TopicLoader.routes.link('diagram'), state: 'available' },
      { num: 4, name: 'It depends on', skill: 'Evaluation', sub: 'Rank the factors that most change the answer.', href: TopicLoader.routes.link('depends'), state: 'available' },
      { num: 5, name: 'Make the judgement', skill: 'Evaluation', sub: 'Synthesise everything into an exam-quality judgement.', href: TopicLoader.routes.link('judge'), state: 'available' }
    ],

    stages: [
      { num: 1, name: 'Learn it', sub: 'Recap and lock in the gems',    state: 'done',    href: TopicLoader.routes.learn()      },
      { num: 2, name: 'Link it',  sub: 'Apply skills with the context', state: 'current'                                                },
      { num: 3, name: 'Land it',  sub: 'Tackle real exam questions',    state: 'locked'                                                 }
    ],

    startUrl:   TopicLoader.routes.link('context'),
    startLabel: 'Start Link it'
  }
};
