/* ============================================================
   ECONOS — Link It · Chain station data
   Taxes & Subsidies as Policy: build the MPB → underproduction → DWL chain
   ============================================================ */

window.ECONOS_LINK_CHAIN = {
  topic:   'Taxes &amp; Subsidies as Policy',
  backUrl: TopicLoader.buildUrl('link_intro.html'),
  nextUrl: TopicLoader.buildUrl('link_diagram.html'),

  stations: [
    { id: 'context', label: 'Use the context',    href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain',   label: 'Build the chain',    href: TopicLoader.buildUrl('link_chain.html')   },
    { id: 'diagram', label: 'Diagram connector',  href: TopicLoader.buildUrl('link_diagram.html') },
    { id: 'depends', label: 'It depends on',      href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge',   label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html')   }
  ],
  currentStationIdx: 1,

  eyebrow:     'Build the Chain',
  instruction: 'Tap tiles in the correct order to complete the chain. Each step should lead clearly and mechanically to the next.',

  chains: [
    {
      id: 'pos-ext-mechanism',
      scenario: {
        icon:  '🌬️',
        label: 'Scenario',
        text:  'Offshore wind energy generates positive externalities: it reduces carbon emissions, lowers air pollution and improves energy security. Without intervention, the market underproduces relative to the socially optimal level.'
      },
      anchor: 'Wind producers earn only MPB — cannot capture the MEB they create.',
      tiles: [
        {
          id:  'step-supply',
          icon: '💡',
          text: 'Produce at Q_market where MPB = MPC — ignoring MEB',
          pos:  0
        },
        {
          id:  'step-under',
          icon: '📊',
          text: 'Q_market < Q* (where MSB = MPC) → market underproduces',
          pos:  1
        },
        {
          id:  'step-subsidy',
          icon: '💸',
          text: 'Subsidy = MEB → supply shifts right to Q* → DWL removed',
          pos:  2
        },
        {
          id:  'dist-1',
          icon: '🤝',
          text: 'Consumers pay more to cover the external benefit, fixing it automatically',
          pos:  null
        },
        {
          id:  'dist-2',
          icon: '📈',
          text: 'The market overproduces renewables because consumers value clean energy',
          pos:  null
        },
        {
          id:  'dist-3',
          icon: '🏛️',
          text: 'Regulation fixes it by setting a maximum fossil-fuel output level',
          pos:  null
        }
      ],
      explain: [
        {
          pos:  0,
          text: 'Offshore wind producers only receive the market price — reflecting consumers\' willingness to pay (MPB). The MEB they create — avoided carbon damage, cleaner air, energy security — is a real benefit to society, but no-one pays producers for it. So the firm supplies where MPB = MPC, as if external benefits do not exist.'
        },
        {
          pos:  1,
          text: 'Because MPB < MSB at every unit of output (MSB = MPB + MEB), the market equilibrium (Q_market) lies to the left of the social optimum (Q*). The firm has no incentive to expand to Q* — the full social benefit exceeds what they can charge — so the market underproduces relative to what society would choose if all benefits were included.'
        },
        {
          pos:  2,
          text: 'A production subsidy equal to the MEB reduces the effective cost of production by the externality amount per unit. This closes the gap between MPC and MSB — the supply curve shifts right until it intersects MSB at Q*. Output rises to the social optimum and the deadweight welfare loss from underproduction is eliminated.'
        }
      ],
      examBridge: '"In an unregulated market, offshore wind producers supply at Q_market where MPB = MPC, ignoring the MEB of clean energy they provide to society. Because MSB = MPB + MEB > MPB throughout, the market underproduces below Q*, creating a deadweight welfare loss. A production subsidy equal to the MEB shifts effective supply right to Q*, restoring the social optimum."',

      prompts: [
        'Why do offshore wind producers not account for the external benefits they generate?',
        'Where does the market equilibrium fall relative to the social optimum, and why?',
        'How does a production subsidy equal to the MEB correct the market failure?'
      ],
      modelAnswers: [
        'Producers only respond to the market price, which reflects MPB — private willingness to pay. The MEB (reduced carbon, cleaner air, energy security) benefits society as a whole but is not captured in the price signal. Producers therefore act as if external benefits are zero, supplying only where MPB = MPC.',
        'The market equilibrium is at Q_market, where MPB = MPC. But MSB = MPB + MEB > MPB, so MSB = MPC at a higher output level Q*. The market therefore underproduces — Q_market < Q* — because producers stop where the private benefit equals their cost, not where the social benefit does.',
        'The subsidy reduces the effective cost of production by exactly the MEB per unit. This shifts the effective supply curve right — producers now supply more at each price. The new equilibrium is at Q*, where the subsidised MPC equals MSB. The DWL triangle from underproduction — the area between MSB and MPC from Q_market to Q* — is eliminated.'
      ],
      vocab: ['MPB', 'MEB', 'MSB', 'MPC', 'Q*', 'Q_market', 'subsidy', 'social optimum', 'underproduction', 'deadweight welfare loss', 'positive externality']
    }
  ]
};
