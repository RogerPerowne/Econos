/* ============================================================
   ECONOS — Link It · Chain station data
   Positive Externalities: build the MPB → underproduction → DWL chain
   ============================================================ */

window.ECONOS_LINK_CHAIN = {
  topic:   'Positive Externalities',
  backUrl: TopicLoader.buildUrl('link_intro.html'),
  nextUrl: TopicLoader.buildUrl('link_extract.html'),

  stations: [
    { id: 'context', label: 'Use the context',    href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain',   label: 'Build the chain',    href: TopicLoader.buildUrl('link_chain.html')   },
    { id: 'extract', label: 'Read the Extract',   href: TopicLoader.buildUrl('link_extract.html') },
    { id: 'diagram', label: 'Diagram connector',  href: TopicLoader.buildUrl('link_diagram.html') },
    { id: 'judge',   label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html')   }
  ],
  currentStationIdx: 1,

  eyebrow:     'Build the Chain',
  instruction: 'Tap tiles in the correct order to complete the chain. Each step should lead clearly and mechanically to the next.',

  chains: [
    {
      id: 'pos-ext-mechanism',
      scenario: {
        icon:  '💉',
        label: 'Scenario',
        text:  'Individual MPB of vaccination = own protection from illness. MSB = MPB + MEB (herd immunity: protection conferred on unvaccinated/vulnerable third parties). Free market produces Q_market where S = MPB — systematically below Q* where S = MSB.'
      },
      anchor: 'Individual MPB of vaccination = own protection from illness. MSB = MPB + MEB (herd immunity: protection conferred on unvaccinated/vulnerable third parties). Free market produces Q_market where S = MPB — systematically below Q* where S = MSB.',
      tiles: [
        {
          id:  'step-market',
          icon: '👤',
          text: 'Market failure: without intervention, consumers equate MPB with price → only those whose personal benefit exceeds the market price vaccinate → Q_market < Q* — the social optimum is not reached',
          pos:  0
        },
        {
          id:  'step-provision',
          icon: '🏥',
          text: 'Government correction: NHS provides free vaccinations → effective cost to consumer = £0 (below MPC) → equivalent to subsidy shifting supply right from MPC to MPC − subsidy → quantity rises from Q_market toward Q*',
          pos:  1
        },
        {
          id:  'step-herd',
          icon: '🌐',
          text: 'Herd immunity: as vaccination coverage crosses the threshold (95% for measles), the MEB becomes non-rival and non-excludable — unvaccinated individuals benefit from reduced transmission even without being vaccinated, demonstrating the positive externality is fully internalised',
          pos:  2
        },
        {
          id:  'dist-1',
          icon: '💰',
          text: 'Government imposes a tax on unhealthy lifestyle choices to cross-subsidise vaccines',
          pos:  null
        },
        {
          id:  'dist-2',
          icon: '📈',
          text: 'Pharmaceutical companies increase vaccine prices to recover R&D costs',
          pos:  null
        },
        {
          id:  'dist-3',
          icon: '🛒',
          text: 'Consumers reveal preference for vaccination through private market demand',
          pos:  null
        }
      ],
      explain: [
        {
          pos:  0,
          text: 'Consumers only consider their MPB — own protection from illness. The MEB (herd immunity conferred on others) is a real benefit to society, but it does not enter the individual\'s decision. So the free market equilibrium falls at Q_market where MPB = MPC: below the social optimum Q* where MSB = MPC.'
        },
        {
          pos:  1,
          text: 'NHS free provision eliminates the price barrier: the effective cost to the consumer falls to zero (below MPC). This is economically equivalent to a subsidy that shifts the effective supply curve right from MPC to MPC − subsidy. More people vaccinate — including those who would have been deterred by the market price — raising coverage from Q_market toward Q*.'
        },
        {
          pos:  2,
          text: 'As vaccination coverage crosses the herd immunity threshold (95% for measles), transmission cannot be sustained in the population. The MEB — protection for unvaccinated and vulnerable individuals — is fully realised. It is non-rival (one person\'s immunity does not reduce others\' protection) and non-excludable (unvaccinated people cannot be prevented from benefiting). The positive externality has been fully internalised by the public provision policy.'
        }
      ],
      examBridge: '"In an unregulated market the vaccination rate settles at Q_market where MPB equals MPC, ignoring the MEB (herd immunity benefit) enjoyed by unvaccinated third parties. Because MSB > MPB throughout, the market underproduces relative to Q* — the social optimum where MSB = MPC. NHS free provision shifts effective supply right, raising coverage from Q_market to Q* (95.1% MMR), where the herd immunity threshold is met and the MEB is fully internalised."',

      prompts: [
        'Why does the free market produce below Q* for vaccinations?',
        'How does NHS free provision move the quantity from Q_market toward Q*?',
        'What happens when vaccination coverage crosses the herd immunity threshold?'
      ],
      modelAnswers: [
        'Consumers base vaccination decisions on MPB — their personal protection. The MEB (herd immunity for third parties) does not enter individual decision-making. So the market equilibrium is at Q_market where MPB = MPC — systematically below Q* where MSB (= MPB + MEB) = MPC. Underproduction is the result.',
        'NHS provision sets the consumer price to zero — below MPC. This is equivalent to a supply-side subsidy shifting the effective supply right from MPC to MPC − subsidy. At zero price, more individuals vaccinate: those who previously found the market price above their MPB now participate, raising coverage toward Q*.',
        'Above the 95% herd immunity threshold (for measles), transmission cannot be sustained. Unvaccinated individuals — including those who are medically unable to vaccinate — benefit from reduced infection risk without paying for vaccination. The MEB is non-excludable: the externality is fully internalised, and the social benefit of public provision is maximised.'
      ],
      vocab: ['MPB', 'MEB', 'MSB', 'MPC', 'Q*', 'Q_market', 'deadweight welfare loss', 'social optimum', 'underproduction', 'herd immunity', 'free rider', 'subsidy', 'direct provision', 'internalise']
    }
  ]
};
