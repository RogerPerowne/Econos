/* ============================================================
   ECONOS — Link It · Chain station data
   Negative Externalities: build the MPC → overproduction → DWL chain
   ============================================================ */

window.ECONOS_LINK_CHAIN = {
  topic:   'Negative Externalities',
  backUrl: TopicLoader.buildUrl('link_intro.html'),
  nextUrl: TopicLoader.buildUrl('link_extract.html'),

  stations: [
    { id: 'context', label: 'Use the context',    href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain',   label: 'Build the chain',    href: TopicLoader.buildUrl('link_chain.html')   },
    { id: 'extract', label: 'Read the Extract',   href: TopicLoader.buildUrl('link_extract.html') },
    { id: 'diagram', label: 'Diagram connector',  href: TopicLoader.buildUrl('link_diagram.html') },
    { id: 'depends', label: 'It depends on',      href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge',   label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html')   }
  ],
  currentStationIdx: 1,

  eyebrow:     'Build the Chain',
  instruction: 'Tap tiles in the correct order to complete the chain. Each step should lead clearly and mechanically to the next.',

  chains: [
    {
      id: 'neg-ext-mechanism',
      scenario: {
        icon:  '🏭',
        label: 'Scenario',
        text:  'A cement plant produces 1,000 tonnes of output per day, emitting particulate pollution that causes respiratory illness in nearby residents. There is no government intervention.'
      },
      anchor: 'The cement plant\'s MPC does not include the harm its pollution causes to third parties',
      tiles: [
        {
          id:  'step-mec',
          icon: '👥',
          text: 'The firm produces at Q_market where MPC = MSB — ignoring the MEC it imposes on others',
          pos:  0
        },
        {
          id:  'step-over',
          icon: '📊',
          text: 'Output exceeds Q*, the social optimum where MSC = MSB — the market overproduces',
          pos:  1
        },
        {
          id:  'step-dwl',
          icon: '📉',
          text: 'For each unit beyond Q*, MSC > MSB — a deadweight welfare loss accumulates',
          pos:  2
        },
        {
          id:  'dist-1',
          icon: '🤝',
          text: 'Third parties negotiate directly with the plant and the market clears automatically',
          pos:  null
        },
        {
          id:  'dist-2',
          icon: '📈',
          text: 'MSB shifts right as pollution increases consumer willingness to pay',
          pos:  null
        },
        {
          id:  'dist-3',
          icon: '🏛️',
          text: 'Government revenue rises automatically as the externality grows larger',
          pos:  null
        }
      ],
      explain: [
        {
          pos:  0,
          text: 'The firm only responds to its MPC — wages, energy, raw materials. The MEC (harm to residents from pollution) is a real cost to society, but it does not appear in the firm\'s cost calculation. So the firm produces where MPC = MSB, as if external costs do not exist.'
        },
        {
          pos:  1,
          text: 'Because MPC < MSC at every unit of output, the market equilibrium (Q_market) lies to the right of the social optimum (Q*). The firm has no incentive to stop at Q* — it keeps producing as long as MPC ≤ MSB, so it overproduces relative to what society would choose if all costs were included.'
        },
        {
          pos:  2,
          text: 'For every unit produced between Q* and Q_market, the marginal social cost (MSC) exceeds the marginal social benefit (MSB). Society is worse off for each of these units. The total welfare loss — the deadweight welfare loss — equals the area of the triangle between MSC, MSB, and the vertical at Q_market.'
        }
      ],
      examBridge: '"In an unregulated market the cement plant produces at Q_market where MPC = MSB, ignoring the MEC imposed on third parties. Because MSC > MPC throughout, the market overproduces beyond Q*, creating a deadweight welfare loss equal to the area between MSC and MSB from Q* to Q_market."',

      prompts: [
        'Why does the firm not account for the harm it causes to third parties?',
        'Where does the market equilibrium fall relative to the social optimum?',
        'What happens to social welfare for every unit produced beyond Q*?'
      ],
      modelAnswers: [
        'The firm only faces its MPC — private costs of inputs. The MEC (harm to residents) does not enter its cost function, so it acts as if external costs are zero. This is the core of market failure from negative externalities.',
        'The market equilibrium is at Q_market, where MPC = MSB. But MSC = MPC + MEC > MPC, so MSC = MSB at a lower output level Q*. The market therefore overproduces — Q_market > Q*.',
        'For each unit from Q* to Q_market, MSC > MSB — the true social cost exceeds the benefit. Society suffers a net welfare loss on each of these units, accumulating the deadweight welfare loss triangle on the diagram.'
      ],
      vocab: ['MPC', 'MEC', 'MSC', 'MSB', 'Q*', 'Q_market', 'deadweight welfare loss', 'social optimum', 'overproduction', 'internalise']
    }
  ]
};
