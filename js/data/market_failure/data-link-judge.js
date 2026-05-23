/* ============================================================
   ECONOS — Link It · Make the Judgement station data
   Market Failure: synthesise into an exam-quality judgement
   ============================================================ */

window.ECONOS_LINK_JUDGE = {
  topic:       'Market Failure',
  backUrl:     TopicLoader.buildUrl('link_intro.html'),
  eyebrow:     'Make the Judgement',
  instruction: 'Use the evidence you have built so far to complete the final judgement. Choose the strongest phrase for each blank.',
  nextUrl:     TopicLoader.buildUrl('link_complete.html'),

  stations: [
    { id: 'context', label: 'Use the context',    href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain',   label: 'Build the chain',    href: TopicLoader.buildUrl('link_chain.html')   },
    { id: 'diagram', label: 'Diagram connector',  href: TopicLoader.buildUrl('link_diagram.html') },
    { id: 'depends', label: 'It depends on',      href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge',   label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html')   }
  ],
  currentStationIdx: 4,

  wgll: [
    { icon: '🎯', text: 'Take a clear position'  },
    { icon: '🔗', text: 'Use the mechanism'       },
    { icon: '➕', text: 'Add a condition'         },
    { icon: '💬', text: 'Explain the limitation'  }
  ],

  scenarios: [
    {
      id: 'info-asymmetry-judgement',
      claim: {
        icon:   '🚗',
        prompt: 'Policy claim',
        text:   'Information asymmetry is the primary cause of market failure in the used car market.'
      },
      evidenceCards: [
        { id: 'context', tone: 'green',  icon: '🔍', title: 'Context',       text: '1 in 3 buyers experienced undisclosed defects; Consumer Rights Act 2015 mandates disclosure; fewer than 2% of disputes reach legal proceedings.' },
        { id: 'chain',   tone: 'amber',  icon: '🔗', title: 'Chain',         text: 'Buyers assume average quality → WTP depressed → adverse selection spiral → D shifts left from D₁ to D₂ → fewer quality cars than socially optimal.' },
        { id: 'diagram', tone: 'purple', icon: '📈', title: 'Diagram',       text: 'D shifts left from D₁ to D₂ → equilibrium moves from Q₁ to Q₂ at lower price → deadweight welfare loss from deals that never happen.' },
        { id: 'depends', tone: 'blue',   icon: '⚖️', title: 'It depends on', text: 'Effectiveness of disclosure depends on severity of asymmetry, enforcement quality, and availability of private information platforms (AutoTrader, HPI).' }
      ],
      cloze: 'Information asymmetry causes market failure when sellers know more about [1] than buyers can verify. In the used car market, buyers cannot distinguish high from low quality cars before purchase — so they base WTP on [2], depressing effective demand from D₁ to D₂. This [3] shift creates a deadweight welfare loss: gains from trade between quality sellers and buyers willing to pay for quality are never realised. The adverse selection spiral occurs because [4] cars exit the market when buyers will not pay above average-quality prices. Mandatory disclosure (Consumer Rights Act 2015) attempts to restore D toward D₁ by [5]. However, enforcement of disclosure is costly — and the policy works best when [6] of defects is reliably detected and sanctioned. Private information intermediaries (AutoTrader valuations) partially [7] the market failure without government mandate. Therefore, information asymmetry is most damaging in markets with [8] products where quality cannot be assessed before or during purchase.',
      blanks: [
        { id: 1, options: [
            { id: 'b1-quality',     text: 'product quality',           correct: true  },
            { id: 'b1-price',       text: 'price',                     correct: false },
            { id: 'b1-supply',      text: 'supply conditions',         correct: false },
            { id: 'b1-pref',        text: 'consumer preferences',      correct: false }
          ] },
        { id: 2, options: [
            { id: 'b2-avg',         text: 'average expected quality',          correct: true  },
            { id: 'b2-max',         text: 'the maximum possible quality',      correct: false },
            { id: 'b2-cert',        text: 'government-certified quality',      correct: false },
            { id: 'b2-cs',          text: 'consumer surplus',                  correct: false }
          ] },
        { id: 3, options: [
            { id: 'b3-left',        text: 'leftward demand',    correct: true  },
            { id: 'b3-rsup',        text: 'rightward supply',   correct: false },
            { id: 'b3-lsup',        text: 'leftward supply',    correct: false },
            { id: 'b3-rdem',        text: 'rightward demand',   correct: false }
          ] },
        { id: 4, options: [
            { id: 'b4-hq',          text: 'high-quality (lemon-free)', correct: true  },
            { id: 'b4-lq',          text: 'low-quality',               correct: false },
            { id: 'b4-imp',         text: 'imported',                  correct: false },
            { id: 'b4-sh',          text: 'second-hand',               correct: false }
          ] },
        { id: 5, options: [
            { id: 'b5-hist',        text: 'requiring sellers to reveal vehicle history and condition', correct: true  },
            { id: 'b5-cost',        text: 'subsidising consumer legal costs',                          correct: false },
            { id: 'b5-tax',         text: 'imposing quality taxes on dealers',                         correct: false },
            { id: 'b5-nat',         text: 'nationalising the used car market',                         correct: false }
          ] },
        { id: 6, options: [
            { id: 'b6-nondis',      text: 'non-disclosure',           correct: true  },
            { id: 'b6-pd',          text: 'price discrimination',     correct: false },
            { id: 'b6-oc',          text: 'consumer over-confidence', correct: false },
            { id: 'b6-sc',          text: 'supply contraction',       correct: false }
          ] },
        { id: 7, options: [
            { id: 'b7-correct',     text: 'correct',   correct: true  },
            { id: 'b7-amplify',     text: 'amplify',   correct: false },
            { id: 'b7-ignore',      text: 'ignore',    correct: false },
            { id: 'b7-replace',     text: 'replace',   correct: false }
          ] },
        { id: 8, options: [
            { id: 'b8-complex',     text: 'complex',      correct: true  },
            { id: 'b8-simple',      text: 'simple',       correct: false },
            { id: 'b8-regulated',   text: 'regulated',    correct: false },
            { id: 'b8-monopoly',    text: 'monopolistic', correct: false }
          ] }
      ],
      overallPosition: {
        prompt: 'Overall position',
        options: [
          { id: 'op-only',    text: 'Information asymmetry is the only cause of market failure — externalities and public goods are secondary',                                              correct: false },
          { id: 'op-sig',     text: 'Information asymmetry is a significant market failure, correctable by mandatory disclosure and private intermediaries, but enforcement quality determines effectiveness', correct: true  },
          { id: 'op-self',    text: 'Market failures from information gaps always resolve themselves through private sector signalling',                                                    correct: false },
          { id: 'op-ban',     text: 'Banning used car sales is the only way to eliminate the market failure',                                                                             correct: false }
        ]
      },
      examBridge: '"Information asymmetry in the used car market depresses buyer WTP from D₁ to D₂, producing an adverse selection spiral that leaves Q₂ < Q₁ and a deadweight welfare loss. The Consumer Rights Act 2015 addresses this through mandatory disclosure, moving D back toward D₁ — but effectiveness depends on enforcement. AutoTrader valuations and HPI checks are private-sector corrections that partially substitute for government mandate. The strongest evaluation recognises that enforcement quality and digital platform coverage jointly determine how close D₂ gets to D₁."'
    }
  ]
};
