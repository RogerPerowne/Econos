/* ============================================================
   ECONOS — Link It · Chain station data
   Specialisation & Money: build the division of labour → money chain
   ============================================================ */

window.ECONOS_LINK_CHAIN = {
  topic:   'Specialisation & Money',
  backUrl: TopicLoader.buildUrl('link_intro.html'),
  nextUrl: TopicLoader.buildUrl('link_predict.html'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.buildUrl('link_chain.html') },
    { id: 'predict', label: 'Predict outcome', href: TopicLoader.buildUrl('link_predict.html') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html') }
  ],
  currentStationIdx: 1,

  eyebrow:     'Build the Chain',
  instruction: 'Tap tiles in the correct order to complete the chain. Each step should lead clearly and mechanically to the next.',

  chains: [
    {
      id: 'specialisation-money-mechanism',
      scenario: {
        icon:  '🏭',
        label: 'Scenario',
        text:  'Adam Smith\'s workers divide pin production into 18 separate tasks. Each worker repeats one task all day. Consider what follows from this arrangement for productivity, output, exchange and the need for money.'
      },
      anchor: 'Specialisation raises labour productivity via practice and tools.',
      tiles: [
        {
          id:  'step-surplus',
          icon: '📦',
          text: 'Productivity gains create output surpluses beyond own consumption',
          pos:  0
        },
        {
          id:  'step-barter',
          icon: '🔄',
          text: 'Surplus must be exchanged — barter blocked by double coincidence',
          pos:  1
        },
        {
          id:  'step-money',
          icon: '💷',
          text: 'Money fixes this — medium of exchange, store of value, unit of account',
          pos:  2
        },
        {
          id:  'dist-1',
          icon: '🤝',
          text: 'Workers trade directly without any medium of exchange required',
          pos:  null
        },
        {
          id:  'dist-2',
          icon: '📉',
          text: 'Specialisation cuts output as workers lose general skills',
          pos:  null
        },
        {
          id:  'dist-3',
          icon: '🏛️',
          text: 'Government must organise distribution whenever specialisation occurs',
          pos:  null
        }
      ],
      explain: [
        {
          pos:  0,
          text: 'When each worker repeats a single task, productivity rises through learning-by-doing, specialised tools and no time lost switching between operations. Each worker can produce far more than they personally need — generating a surplus. It is this surplus that creates the need and the opportunity for exchange.'
        },
        {
          pos:  1,
          text: 'Surplus output is only valuable if it can be exchanged for the other goods the worker needs. Under barter, exchange requires a double coincidence of wants: the pin-maker must find someone who both has what the pin-maker wants and simultaneously wants pins. In a complex economy with thousands of specialised producers, this condition is almost never met — barter breaks down.'
        },
        {
          pos:  2,
          text: 'Money solves the double coincidence problem. As a medium of exchange, it allows the pin-maker to sell pins for money and use that money to buy bread, steel or housing from anyone. As a store of value, it allows the timing of sales and purchases to be separated. As a unit of account, it allows the relative value of thousands of goods to be compared. Without money, the gains from specialisation cannot be realised through exchange.'
        }
      ],
      examBridge: '"Specialisation raises labour productivity through practice and repetition, generating output surpluses beyond a worker\'s own needs. These surpluses must be exchanged, but barter is impractical in any complex economy because it requires a double coincidence of wants. Money solves this by serving as medium of exchange, store of value and unit of account — making the gains from specialisation realisable through large-scale exchange."',

      prompts: [
        'Why does specialisation lead to a surplus that needs to be exchanged?',
        'Why does barter fail to support a specialised economy?',
        'How does money solve the problem that barter cannot?'
      ],
      modelAnswers: [
        'When workers specialise in a single task, productivity rises far above subsistence — a pin-maker produces thousands of pins but needs only a handful. The surplus must be traded for other goods the worker does not produce. Specialisation creates the imperative for exchange.',
        'Barter requires both parties in any transaction to want exactly what the other offers at exactly the same time. In an economy with thousands of specialised producers, this double coincidence of wants almost never occurs. A pin-maker who wants bread must find a baker who wants pins — an increasingly unlikely match as the economy becomes more complex.',
        'Money separates the act of selling from the act of buying. The pin-maker sells pins for money, then spends that money on bread whenever convenient. Money also acts as a common unit of account, making it possible to price thousands of goods against one another and enabling the large-scale trade networks that support modern supply chains.'
      ],
      vocab: ['division of labour', 'specialisation', 'surplus', 'barter', 'double coincidence of wants', 'medium of exchange', 'store of value', 'unit of account', 'productivity', 'supply chain']
    }
  ]
};
