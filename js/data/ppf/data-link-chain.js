/* ============================================================
   ECONOS — Link It · Chain station data
   PPF: build the investment → movement along PPF → long-run shift chain
   ============================================================ */

window.ECONOS_LINK_CHAIN = {
  topic:   'Production Possibility Frontiers',
  backUrl: TopicLoader.buildUrl('link_intro.html'),
  nextUrl: TopicLoader.buildUrl('link_calc.html'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.buildUrl('link_chain.html') },
    { id: 'calc', label: 'Calculate It', href: TopicLoader.buildUrl('link_calc.html') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html') }
  ],
  currentStationIdx: 1,

  eyebrow:     'Build the Chain',
  instruction: 'Tap tiles in the correct order to complete the chain. Each step should lead clearly and mechanically to the next.',

  chains: [
    {
      id: 'ppf-investment-mechanism',
      scenario: {
        icon:  '🌱',
        label: 'Scenario',
        text:  'The UK government allocates resources to green infrastructure — offshore wind farms, battery storage and solar — rather than current public services. Resources (engineers, capital, land) shift from consumption goods (NHS capacity, welfare services) to investment goods (clean energy infrastructure).'
      },
      anchor: 'Investment goods vs current consumption compete for finite resources.',
      tiles: [
        {
          id:  'step-movement',
          icon: '📍',
          text: 'Economy near PPF: more green investment → less for consumption (move along)',
          pos:  0
        },
        {
          id:  'step-opp-cost',
          icon: '💷',
          text: 'SR trade-off: wind investment → forgone NHS/welfare spend (along PPF)',
          pos:  1
        },
        {
          id:  'step-shift',
          icon: '📈',
          text: 'LR: green investment raises capacity → PPF shifts outward',
          pos:  2
        },
        {
          id:  'dist-1',
          icon: '🏭',
          text: 'Operating inside the PPF represents full employment of all resources',
          pos:  null
        },
        {
          id:  'dist-2',
          icon: '👥',
          text: 'A PPF can only shift outward through population growth, not investment',
          pos:  null
        },
        {
          id:  'dist-3',
          icon: '🏛️',
          text: 'Moving outside the PPF is possible if government raises taxation',
          pos:  null
        }
      ],
      explain: [
        {
          pos:  0,
          text: 'When the UK economy is operating at or near full capacity — with workers employed, capital in use, and land in productive activity — there is no free lunch. Choosing to build offshore wind farms requires engineers, steel, and land that would otherwise be available for NHS construction, school building, or other public services. The economy does not move outside the PPF; it moves along it. The trade-off is real and unavoidable as long as resources are fully employed.'
        },
        {
          pos:  1,
          text: 'The short-run opportunity cost is concrete: every £1 of public money directed to offshore wind infrastructure is £1 not spent on NHS waiting list reduction, mental health services, or social care. Engineers hired to build wind farms are not available to work on hospital construction. This is not a theoretical abstraction — it is the actual sacrifice of forgone public services. The movement is along the existing PPF, leaving the frontier itself unchanged in the short run.'
        },
        {
          pos:  2,
          text: 'The long-run case for green investment is that it shifts the PPF outward: cheaper, reliable clean energy reduces costs across all sectors of the economy, improving productive efficiency. Energy independence reduces import costs. New green industries (offshore wind manufacturing, battery storage) expand productive capacity. If these effects are large enough, the PPF shifts out sufficiently that both green investment and consumption goods can be produced in greater quantities in future — the short-run trade-off is retrospectively justified by the long-run capacity gain.'
        }
      ],
      examBridge: '"Green investment represents a movement along the UK PPF: resources shift from current consumption (NHS, welfare) toward investment goods (wind farms, battery storage). The short-run opportunity cost is forgone public services. The long-run justification is an outward PPF shift: cheaper, reliable clean energy raises productive capacity across all sectors. The 30% renewable share already achieved demonstrates that previous PPF trade-offs have delivered measurable capacity shifts."',

      prompts: [
        'Why does green investment involve a trade-off rather than a free lunch?',
        'What is the opportunity cost of allocating resources to offshore wind?',
        'Under what conditions does the short-run sacrifice become retrospectively justified?'
      ],
      modelAnswers: [
        'At or near full employment, resources are already in use. Engineers, capital, and land directed to wind farms are unavailable for NHS or education — the economy moves along its PPF, not outside it. There is no spare capacity to absorb the investment without cost.',
        'The opportunity cost is the forgone public services — NHS capacity, welfare spending, school building — that the same resources could have delivered. Every £1 of public green investment is £1 not available for alternative current consumption.',
        'The sacrifice is justified if the resulting long-run outward PPF shift is larger than the short-run opportunity cost: if cheap, reliable clean energy raises productivity across all sectors, future output of both investment and consumption goods can exceed what was possible before the investment — making both goods more plentiful in the long run.'
      ],
      vocab: ['PPF', 'production possibility frontier', 'trade-off', 'opportunity cost', 'investment goods', 'consumption goods', 'economic growth', 'productive capacity', 'outward shift', 'movement along the PPF', 'full employment', 'productive efficiency']
    }
  ]
};
