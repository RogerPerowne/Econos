/* ============================================================
   ECONOS — Link It · Chain station data
   Information Gaps: build the hidden cost → overconsumption → disclosure chain
   ============================================================ */

window.ECONOS_LINK_CHAIN = {
  topic:   'Information Gaps',
  backUrl: TopicLoader.buildUrl('link_intro.html'),
  nextUrl: TopicLoader.buildUrl('link_extract.html'),

  stations: [
    { id: 'context', label: 'Use the context',    href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain',   label: 'Build the chain',    href: TopicLoader.buildUrl('link_chain.html')   },
    { id: 'extract', label: 'Read the extract',   href: TopicLoader.buildUrl('link_extract.html') },
    { id: 'diagram', label: 'Diagram connector',  href: TopicLoader.buildUrl('link_diagram.html') },
    { id: 'depends', label: 'It depends on',      href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge',   label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html')   }
  ],
  currentStationIdx: 1,

  eyebrow:     'Build the Chain',
  instruction: 'Tap tiles in the correct order to complete the chain. Each step should lead clearly and mechanically to the next.',

  chains: [
    {
      id: 'info-gap-mechanism',
      scenario: {
        icon:  '💳',
        label: 'Scenario',
        text:  'Klarna, Clearpay and Laybuy offer \'pay later\' options at checkout without displaying APR or total cost of credit. Consumers cannot see the true price of the credit at the point of purchase.'
      },
      anchor: "BNPL checkouts hide APR — true credit cost is invisible at purchase.",
      tiles: [
        {
          id:  'step-gap',
          icon: '❓',
          text: "Info gap: hidden APR → effective demand inflated above D_rational",
          pos:  0
        },
        {
          id:  'step-over',
          icon: '📊',
          text: "Overconsumption Q_biased > Q_rational → marginal harm > benefit",
          pos:  1
        },
        {
          id:  'step-correct',
          icon: '✅',
          text: "Mandatory APR (FCA 2024) → demand shifts back to D_rational → less harm",
          pos:  2
        },
        {
          id:  'dist-1',
          icon: '📈',
          text: 'Rising consumer confidence increases BNPL demand independently of info gaps',
          pos:  null
        },
        {
          id:  'dist-2',
          icon: '💰',
          text: 'BNPL providers increase credit limits, expanding effective supply of credit',
          pos:  null
        },
        {
          id:  'dist-3',
          icon: '🏦',
          text: 'Bank of England raises interest rates, reducing overall credit demand',
          pos:  null
        }
      ],
      explain: [
        {
          pos:  0,
          text: "BNPL providers display the monthly instalment (e.g. 'pay £21.67 today') but not the APR or total cost of credit. Consumers perceive the effective price of the credit as lower than it actually is — so their willingness to borrow exceeds the level that a fully informed consumer would accept. Effective demand is inflated above D_rational: the demand curve the market actually operates on, rather than the rational demand curve consumers would reveal with full information."
        },
        {
          pos:  1,
          text: "Because effective demand is inflated to D_biased, the market equilibrium settles at Q_biased — a quantity of BNPL credit greater than the rational level Q_rational. For the units between Q_rational and Q_biased, the marginal cost to the consumer (late fees, debt collection charges, credit score damage) exceeds the marginal benefit. The 25% missed repayment rate and 11% debt collection rate are direct evidence of this welfare loss — overconsumption driven by hidden costs."
        },
        {
          pos:  2,
          text: "FCA mandatory APR disclosure (from 2024) requires BNPL providers to display APR and total cost of credit at the checkout page, not just in terms and conditions. When consumers see the true cost, their perceived effective price rises to the actual level — effective demand shifts left from D_biased toward D_rational. Market equilibrium quantity falls, fewer BNPL transactions are completed at the margin, and the incidence of missed repayments and debt collection is reduced."
        }
      ],
      examBridge: '"Hidden BNPL costs inflated effective consumer demand from D_rational to D_biased — consumers perceived the product as cheaper than it was. Market equilibrium Q_biased exceeded the rational quantity: 25% of users missed repayments and 11% faced debt collection. FCA mandatory disclosure shifts demand left toward D_rational, reducing overconsumption — but only if APR is displayed prominently enough to influence decision-making at checkout."',

      prompts: [
        'Why does the absence of APR disclosure inflate consumer demand above D_rational?',
        'What happens at market equilibrium Q_biased that causes consumer welfare loss?',
        'How does FCA mandatory disclosure correct the information gap?'
      ],
      modelAnswers: [
        "Without APR disclosure, consumers perceive only the instalment payment — the visible price — not the true cost of credit including late fees and interest. The perceived effective price is lower than the true price, so consumers' willingness to borrow exceeds what they would accept if fully informed. Effective demand is D_biased, inflated above D_rational.",
        "At Q_biased, consumers are taking on more credit than they would if they had full information about the true cost. For each unit of BNPL credit between Q_rational and Q_biased, the marginal cost (late fees, debt collection, credit score harm) exceeds the marginal consumer benefit. This creates a welfare loss — consumers are systematically worse off from the overconsumption driven by the information gap.",
        "FCA mandatory APR disclosure requires providers to display APR and total cost prominently at checkout. When consumers see the true cost of credit, their perceived effective price rises to the actual level. This reduces their willingness to borrow at any given price — effective demand shifts left from D_biased toward D_rational, and market equilibrium quantity falls from Q_biased toward Q_rational."
      ],
      vocab: ['information gap', 'asymmetric information', 'overconsumption', 'rational demand', 'moral hazard', 'mandatory disclosure', 'FCA regulation', 'consumer surplus', 'debt harm', 'market failure']
    }
  ]
};
