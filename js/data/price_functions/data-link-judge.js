/* ============================================================
   ECONOS — Link It · Make the Judgement station data
   The Price Mechanism: synthesise into an exam-quality judgement
   ============================================================ */

window.ECONOS_LINK_JUDGE = {
  topic:       'The Price Mechanism',
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
      id: 'price-mechanism-judgement',
      claim: {
        icon:   '🌾',
        prompt: 'Policy claim',
        text:   'The price mechanism is the most efficient allocator of scarce food resources when supply is disrupted, because higher prices simultaneously ration existing supply and signal producers to expand output.'
      },
      evidenceCards: [
        { id: 'context', tone: 'green',  icon: '🔍', title: 'Context',       text: 'Food inflation 19.2%; farmland +14%; planting +3%; food bank use +37% (Trussell Trust 2023).' },
        { id: 'chain',   tone: 'amber',  icon: '🔗', title: 'Chain',         text: 'Supply shock → excess demand → P rises → ration (existing) → signal (farmers) → incentivise (investment).' },
        { id: 'diagram', tone: 'purple', icon: '📈', title: 'Diagram',       text: 'Supply shifts left S₁ to S₂ → P rises P₁ to P₂, Q falls Q₁ to Q₂ → price signal activated.' },
        { id: 'depends', tone: 'blue',   icon: '⚖️', title: 'It depends on', text: 'Effectiveness depends on price signal speed, agricultural PES, and distributional equity consequences.' }
      ],
      cloze: 'The price mechanism performs three functions when food supply is disrupted. First, higher prices [1] existing supply — directing it to those willing and able to pay P₂. Second, the price signal [2] producers: higher prices indicate that expanding output is [3]. Third, the profit incentive at P₂ > long-run average cost [4] investment in new capacity. However, price rationing is most effective when markets are [5]: if supermarkets have pricing power, the signal may not reach farmers in full. The equity cost of price rationing is that [6] households are excluded from access — requiring complementary welfare policy. The supply response depends on [7] — in agriculture, the growing season limits response to 6–24 months even when the signal is clear. The strongest judgement is that the price mechanism is informationally [8] but not always equitably efficient.',
      blanks: [
        { id: 1, options: [
            { id: 'b1-ration',    text: 'ration',      correct: true  },
            { id: 'b1-sub',       text: 'subsidise',   correct: false },
            { id: 'b1-elim',      text: 'eliminate',   correct: false },
            { id: 'b1-tax',       text: 'tax',         correct: false }
          ] },
        { id: 2, options: [
            { id: 'b2-signal',    text: 'signals',     correct: true  },
            { id: 'b2-tax',       text: 'taxes',       correct: false },
            { id: 'b2-ignore',    text: 'ignores',     correct: false },
            { id: 'b2-regulate',  text: 'regulates',   correct: false }
          ] },
        { id: 3, options: [
            { id: 'b3-profit',    text: 'profitable',          correct: true  },
            { id: 'b3-social',    text: 'socially optimal',    correct: false },
            { id: 'b3-regulated', text: 'regulated',           correct: false },
            { id: 'b3-political', text: 'politically feasible', correct: false }
          ] },
        { id: 4, options: [
            { id: 'b4-incentive', text: 'incentivises',   correct: true  },
            { id: 'b4-discour',   text: 'discourages',    correct: false },
            { id: 'b4-neutral',   text: 'neutralises',    correct: false },
            { id: 'b4-taxes',     text: 'taxes',          correct: false }
          ] },
        { id: 5, options: [
            { id: 'b5-comp',      text: 'competitive',   correct: true  },
            { id: 'b5-reg',       text: 'regulated',     correct: false },
            { id: 'b5-mono',      text: 'monopolistic',  correct: false },
            { id: 'b5-state',     text: 'state-owned',   correct: false }
          ] },
        { id: 6, options: [
            { id: 'b6-low',       text: 'low-income',    correct: true  },
            { id: 'b6-high',      text: 'high-income',   correct: false },
            { id: 'b6-mid',       text: 'middle-income', correct: false },
            { id: 'b6-overseas',  text: 'overseas',      correct: false }
          ] },
        { id: 7, options: [
            { id: 'b7-pes',       text: 'price elasticity of supply', correct: true  },
            { id: 'b7-ied',       text: 'income elasticity of demand', correct: false },
            { id: 'b7-gov',       text: 'government regulation',      correct: false },
            { id: 'b7-cb',        text: 'central bank policy',        correct: false }
          ] },
        { id: 8, options: [
            { id: 'b8-eff',       text: 'efficient',   correct: true  },
            { id: 'b8-eq',        text: 'equitable',   correct: false },
            { id: 'b8-suff',      text: 'sufficient',  correct: false },
            { id: 'b8-cost',      text: 'costless',    correct: false }
          ] }
      ],
      overallPosition: {
        prompt: 'Overall position',
        options: [
          { id: 'op-always',   text: 'The price mechanism is always the best allocator of all goods in all circumstances',         correct: false },
          { id: 'op-cond',     text: 'The price mechanism is informationally efficient but may fail on equity and speed of response', correct: true  },
          { id: 'op-never',    text: 'The price mechanism never works in agricultural markets due to PES constraints',              correct: false },
          { id: 'op-gov',      text: 'Government allocation is always more equitable and efficient than market prices',             correct: false }
        ]
      },
      examBridge: '"The Ukraine-driven supply shock demonstrates the price mechanism\'s strengths: UK food prices rose 19.2%, rationing existing supply and signalling farmers (+3% wheat planting) and investors (+14% farmland prices). But the short-run agricultural PES ≈ 0.2 meant the incentive function only translated into more supply over a 12–24 month lag. And price rationing excluded the lowest-income households — evidenced by 37% more food bank usage — requiring complementary targeted welfare support."'
    }
  ]
};
