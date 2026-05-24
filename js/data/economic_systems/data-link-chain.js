/* ============================================================
   ECONOS — Link It · Chain station data
   Economic Systems: build the price mechanism → efficiency chain
   ============================================================ */

window.ECONOS_LINK_CHAIN = {
  topic:   'Economic Systems',
  backUrl: TopicLoader.buildUrl('link_intro.html'),
  nextUrl: TopicLoader.buildUrl('link_extract.html'),

  stations: [
    { id: 'context', label: 'Use the context',    href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain',   label: 'Build the chain',    href: TopicLoader.buildUrl('link_chain.html')   },
    { id: 'extract', label: 'Read the extract',   href: TopicLoader.buildUrl('link_extract.html') },
    { id: 'depends', label: 'It depends on',      href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge',   label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html')   }
  ],
  currentStationIdx: 1,

  eyebrow:     'Build the Chain',
  instruction: 'Tap tiles in the correct order to complete the chain. Each step should lead clearly and mechanically to the next.',

  chains: [
    {
      id: 'free-market-efficiency',
      scenario: {
        icon:  '🏪',
        label: 'Scenario',
        text:  'A country transitions from a command economy (where the state sets prices and allocates goods) to a free market system. Consider what happens to information, incentives and resource allocation.'
      },
      anchor: 'The price mechanism transmits information about relative scarcity to millions of decision-makers simultaneously',
      tiles: [
        {
          id:  'step-profit',
          icon: '💰',
          text: 'Profit incentive drives firms to minimise costs and innovate, increasing productive efficiency',
          pos:  0
        },
        {
          id:  'step-sovereignty',
          icon: '🛒',
          text: 'Consumer sovereignty means resources flow to goods consumers actually value, improving allocative efficiency',
          pos:  1
        },
        {
          id:  'step-hayek',
          icon: '📚',
          text: 'Command economies require central planners to process vast information — Hayek\'s knowledge problem makes this impossible without price signals',
          pos:  2
        },
        {
          id:  'dist-1',
          icon: '🏛️',
          text: 'Central planners use queuing and rationing to achieve the same allocation as prices at lower cost',
          pos:  null
        },
        {
          id:  'dist-2',
          icon: '📉',
          text: 'Rising prices reduce consumer welfare, so markets allocate resources away from valued goods',
          pos:  null
        },
        {
          id:  'dist-3',
          icon: '🤝',
          text: 'Consumer sovereignty is undermined in free markets because firms can always create demand through advertising',
          pos:  null
        }
      ],
      explain: [
        {
          pos:  0,
          text: 'When prices reflect scarcity, firms that produce what consumers value at lower cost earn higher profits. This profit signal attracts resources into high-value activities and drives firms to cut costs and innovate — increasing productive efficiency. Command economies lack this mechanism: state-owned firms face no profit incentive and inefficiency goes unrewarded.'
        },
        {
          pos:  1,
          text: 'In a free market, consumer spending acts as a vote for resources. If consumers value smartphones more than typewriters, higher prices for smartphones attract resources into that sector. Allocative efficiency is achieved when production reflects consumer preferences — which the price mechanism delivers automatically through the signalling function of prices.'
        },
        {
          pos:  2,
          text: 'Hayek\'s knowledge problem is the fundamental case against central planning. The information needed to allocate resources efficiently — preferences, costs, local conditions — is dispersed across millions of individuals and changes constantly. No central planner can collect and process this information as effectively as the price mechanism, which aggregates it spontaneously. This is why command economies produce systematic shortages and surpluses.'
        }
      ],
      examBridge: '"In a free market, the price mechanism transmits scarcity information automatically, creating a profit incentive for productive efficiency and allowing consumer sovereignty to guide allocative decisions. Central planning fails because — as Hayek argued — the dispersed, constantly changing information needed for efficient allocation cannot be processed by any central authority: price signals perform this function without deliberate coordination."',

      prompts: [
        'How does the price mechanism transmit information that central planners cannot replicate?',
        'Why does the profit incentive lead to greater productive efficiency in free markets?',
        'What is Hayek\'s knowledge problem and why does it explain command economy failure?'
      ],
      modelAnswers: [
        'Prices aggregate information from millions of individual decisions about supply and demand. A rise in the price of a good signals that it is becoming scarcer — attracting producers and encouraging consumers to economise — without any central instruction. Central planners would need to collect, process and act on this information manually for every good and service, which is practically impossible.',
        'In a free market, firms that reduce costs or improve quality earn higher profits and attract investment. Firms that are inefficient face losses and exit the market. This competitive pressure continuously drives down costs and encourages innovation. State firms in command economies face no such incentive — losses are covered by the state and there is no reward for efficiency improvements.',
        'The knowledge problem is Hayek\'s observation that the information needed for efficient resource allocation is dispersed, tacit and constantly changing — it exists in the minds and actions of millions of individuals. No central planner can acquire, process or act on this information as efficiently as the price mechanism, which aggregates it through the uncoordinated decisions of buyers and sellers. Command economies therefore produce chronic misallocation, shortages and queues.'
      ],
      vocab: ['price mechanism', 'profit incentive', 'productive efficiency', 'allocative efficiency', 'consumer sovereignty', 'knowledge problem', 'central planning', 'signalling function', 'scarcity', 'market failure']
    }
  ]
};
