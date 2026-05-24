/* ============================================================
   ECONOS — Link It · Make the Judgement station data
   Specialisation & Money: synthesise into an exam-quality judgement
   ============================================================ */

window.ECONOS_LINK_JUDGE = {
  topic:       'Specialisation & Money',
  backUrl:     TopicLoader.buildUrl('link_intro.html'),
  eyebrow:     'Make the Judgement',
  instruction: 'Use the evidence you have built so far to complete the final judgement. Choose the strongest phrase for each blank.',
  nextUrl:     TopicLoader.buildUrl('link_complete.html'),

  stations: [
    { id: 'context', label: 'Use the context',    href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain',   label: 'Build the chain',    href: TopicLoader.buildUrl('link_chain.html')   },
    { id: 'depends', label: 'It depends on',      href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge',   label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html')   }
  ],
  currentStationIdx: 3,

  wgll: [
    { icon: '🎯', text: 'Take a clear position'  },
    { icon: '🔗', text: 'Use the mechanism'       },
    { icon: '➕', text: 'Add a condition'         },
    { icon: '💬', text: 'Explain the limitation'  }
  ],

  scenarios: [
    {
      id: 'specialisation-money-judgement',
      claim: {
        icon:   '⚙️',
        prompt: 'Overall claim',
        text:   'Specialisation and the use of money are the foundation of modern economic prosperity.'
      },
      evidenceCards: [
        { id: 'context', tone: 'green',  icon: '🔍', title: 'Context analysis',  text: 'You found that specialisation raises productivity and enables large-scale production, but also creates dependency on exchange systems and money.' },
        { id: 'chain',   tone: 'amber',  icon: '🔗', title: 'The causal chain',  text: 'Specialisation → surplus output → need for exchange → money as solution to double coincidence of wants → enables further specialisation.' },
        { id: 'depends', tone: 'blue',   icon: '⚖️', title: 'It depends on…',   text: 'Productivity gains depend on task divisibility, human capital quality, and the existence of functioning exchange infrastructure.' }
      ],
      cloze: 'Overall, specialisation and money are [1] of modern economic prosperity because the division of labour raises [2] dramatically — as Smith\'s pin factory demonstrated — generating [3] beyond individual consumption needs. Money resolves the [4] problem that would otherwise prevent this surplus from being exchanged, allowing complex [5] to form across national and global markets. However, the gains from specialisation depend critically on whether tasks are [6] and whether adequate [7] exists. Furthermore, deep specialisation creates systemic [8] — as Toyota\'s UK shutdown in 2021 showed — meaning prosperity built on specialisation is conditional on supply chains remaining intact.',
      blanks: [
        { id: 1, options: [
            { id: 'b1-foundation',  text: 'the foundation',          correct: true  },
            { id: 'b1-irrelevant',  text: 'largely irrelevant',       correct: false },
            { id: 'b1-obstacle',    text: 'an obstacle',              correct: false },
            { id: 'b1-automatic',   text: 'an automatic guarantee',   correct: false }
          ] },
        { id: 2, options: [
            { id: 'b2-labour-prod', text: 'labour productivity',      correct: true  },
            { id: 'b2-inflation',   text: 'the inflation rate',       correct: false },
            { id: 'b2-trade-def',   text: 'the trade deficit',        correct: false },
            { id: 'b2-taxation',    text: 'government tax revenue',   correct: false }
          ] },
        { id: 3, options: [
            { id: 'b3-surplus',     text: 'output surpluses',         correct: true  },
            { id: 'b3-debt',        text: 'national debt',            correct: false },
            { id: 'b3-shortages',   text: 'supply shortages',         correct: false },
            { id: 'b3-inflation',   text: 'inflationary pressure',    correct: false }
          ] },
        { id: 4, options: [
            { id: 'b4-double',      text: 'double coincidence of wants', correct: true  },
            { id: 'b4-moral',       text: 'moral hazard',               correct: false },
            { id: 'b4-adverse',     text: 'adverse selection',          correct: false },
            { id: 'b4-free-rider',  text: 'free-rider',                 correct: false }
          ] },
        { id: 5, options: [
            { id: 'b5-chains',      text: 'supply chains',             correct: true  },
            { id: 'b5-cartels',     text: 'producer cartels',          correct: false },
            { id: 'b5-monopolies',  text: 'natural monopolies',        correct: false },
            { id: 'b5-externality', text: 'negative externalities',    correct: false }
          ] },
        { id: 6, options: [
            { id: 'b6-divisible',   text: 'sufficiently divisible',   correct: true  },
            { id: 'b6-automated',   text: 'fully automated',          correct: false },
            { id: 'b6-exported',    text: 'exported overseas',        correct: false },
            { id: 'b6-subsidised',  text: 'government-subsidised',    correct: false }
          ] },
        { id: 7, options: [
            { id: 'b7-humancap',    text: 'human capital',             correct: true  },
            { id: 'b7-gdp',         text: 'GDP growth',                correct: false },
            { id: 'b7-taxation',    text: 'progressive taxation',      correct: false },
            { id: 'b7-regulation',  text: 'financial regulation',      correct: false }
          ] },
        { id: 8, options: [
            { id: 'b8-vulner',      text: 'vulnerability',             correct: true  },
            { id: 'b8-inflation',   text: 'inflationary pressure',     correct: false },
            { id: 'b8-efficiency',  text: 'productive efficiency',     correct: false },
            { id: 'b8-revenue',     text: 'tax revenue',               correct: false }
          ] }
      ],
      overallPosition: {
        prompt: 'Overall position',
        options: [
          { id: 'op-agree',    text: 'Largely agree — specialisation and money are mutually reinforcing and together explain the scale of modern production',                                           correct: true  },
          { id: 'op-partial',  text: 'Partially agree — specialisation raises productivity but money\'s role is overstated; trade credit and digital payment alternatives exist',                    correct: false },
          { id: 'op-disagree', text: 'Largely disagree — the claim ignores problems like structural unemployment from over-specialisation and vulnerability of global supply chains',                correct: false },
          { id: 'op-none',     text: 'Neither agree nor disagree — the evidence is too mixed to reach a clear verdict',                                                                              correct: false }
        ]
      },
      examBridge: '"Specialisation and money are mutually reinforcing foundations of modern prosperity: the division of labour raises labour productivity dramatically, generating surpluses that can only be realised through exchange — and money makes large-scale exchange possible by eliminating the double coincidence of wants. However, the gains are conditional on task divisibility, human capital quality, and functioning exchange infrastructure; and deep specialisation creates systemic vulnerability, as demonstrated by the Toyota shutdown during the 2021 semiconductor shortage."'
    }
  ]
};
