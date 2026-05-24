/* ============================================================
   ECONOS — Link It · Chain station data
   The Economic Problem: build the scarcity → economic questions → opportunity cost chain
   ============================================================ */

window.ECONOS_LINK_CHAIN = {
  topic:   'The Economic Problem',
  backUrl: TopicLoader.buildUrl('link_intro.html'),
  nextUrl: TopicLoader.buildUrl('link_depends.html'),

  stations: [
    { id: 'context', label: 'Use the context',    href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain',   label: 'Build the chain',    href: TopicLoader.buildUrl('link_chain.html')   },
    { id: 'depends', label: 'It depends on',      href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge',   label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html')   }
  ],
  currentStationIdx: 1,

  eyebrow:     'Build the Chain',
  instruction: 'Tap tiles in the correct order to complete the chain. Each step should lead clearly and mechanically to the next.',

  chains: [
    {
      id: 'econ-problem-mechanism',
      scenario: {
        icon:  '⚕️',
        label: 'Scenario',
        text:  'NHS England has a budget of £167bn in 2023–24. Demand for healthcare — driven by an ageing population, new medical technologies, and 7.7 million patients already waiting — is effectively unlimited. There is no government policy that can make all health needs simultaneously affordable.'
      },
      anchor: 'NHS budget of £167bn is finite; demand for healthcare treatments is effectively unlimited — scarcity forces allocation choices.',
      tiles: [
        {
          id:  'step-questions',
          icon: '❓',
          text: 'Scarcity forces prioritisation: unlimited health needs cannot all be met with a £167bn budget → NHS must decide WHAT to produce (which treatments), HOW (surgery vs medication vs prevention), and FOR WHOM (triage, waiting lists, QALY thresholds)',
          pos:  0
        },
        {
          id:  'step-opp-cost',
          icon: '💷',
          text: 'Every choice has an opportunity cost: approving a cancer drug at £30,000/QALY means the same £50m cannot fund mental health services → the forgone benefit is the real cost of the decision, even if no price is paid',
          pos:  1
        },
        {
          id:  'step-universal',
          icon: '🌍',
          text: 'The economic problem is universal: even with a larger NHS budget, new medical technologies (gene therapy, robotics) would create fresh demand — scarcity is a permanent feature of economic life, not a temporary funding shortfall',
          pos:  2
        },
        {
          id:  'dist-1',
          icon: '🏛️',
          text: 'The NHS is inefficient — better management could eliminate scarcity without more funding',
          pos:  null
        },
        {
          id:  'dist-2',
          icon: '💊',
          text: 'Private healthcare eliminates the economic problem by letting price allocate resources',
          pos:  null
        },
        {
          id:  'dist-3',
          icon: '🖨️',
          text: 'If the government printed more money, NHS scarcity could be fully resolved',
          pos:  null
        }
      ],
      explain: [
        {
          pos:  0,
          text: 'Scarcity makes choice inevitable. The NHS cannot treat 7.7 million waiting patients simultaneously with a £167bn budget — it must prioritise. That prioritisation answers the three fundamental economic questions: what treatments to provide (cancer vs mental health vs prevention), how to provide them (surgery, medication, community care), and for whom (triage systems, QALY thresholds, waiting-list management). The economic problem does not require poverty or mismanagement — it follows directly from unlimited wants meeting finite resources.'
        },
        {
          pos:  1,
          text: 'When NICE approves a £50m cancer drug meeting the £30,000/QALY threshold, the opportunity cost is whatever else could have been done with £50m: additional mental health therapists, preventive screening programmes, or primary care appointments. The QALY threshold makes opportunity cost explicit — every approval forecloses alternatives. This is the economic problem made operational: not a failure of the system, but the system responding to unavoidable scarcity.'
        },
        {
          pos:  2,
          text: 'Each new treatment — CAR-T cell therapy at £300,000 per patient, weight-loss drugs at £9,000 per year — creates fresh demand that absorbs new funding. A larger NHS budget would shift the frontier but would not eliminate it: new technologies and an ageing population continuously expand wants faster than any realistic funding increase. The economic problem is a permanent feature of economic life, not a temporary shortfall to be solved by any single budget settlement.'
        }
      ],
      examBridge: '"The NHS illustrates the universal economic problem: a £167bn budget cannot meet 7.7 million waiting list patients simultaneously. NICE\'s QALY threshold makes opportunity cost explicit — every drug approved means alternatives foregone. The economic problem persists regardless of funding level because new medical technologies continuously expand demand. In a mixed economy like the UK, the question is not whether to make trade-offs but how — through market prices, QALY thresholds, or political negotiation."',

      prompts: [
        'What makes NHS needs \'unlimited\' while resources are finite?',
        'What is the opportunity cost of the NICE drug approval decision?',
        'Why does a larger NHS budget not eliminate the economic problem?'
      ],
      modelAnswers: [
        'Human health needs are effectively unlimited: ageing population, new diseases, new technologies constantly expand demand. But doctors, nurses, hospital beds, drugs, and funding are all finite. The gap between unlimited wants and limited means is the economic problem — no amount of funding can permanently close it because new treatments and needs arise.',
        'When NICE approves a £50m cancer drug meeting the £30,000/QALY threshold, the opportunity cost is whatever else could have been done with £50m: additional mental health therapists, preventive screening programmes, or primary care appointments. The QALY threshold makes opportunity cost explicit — every approval forecloses alternatives.',
        'Each new treatment (CAR-T cell therapy at £300,000/patient, weight-loss drugs at £9,000/year) creates fresh demand that absorbs new funding. The economic problem is not a funding shortfall to be solved — it is a permanent feature of scarcity in a world of advancing technology and changing needs.'
      ],
      vocab: ['scarcity', 'opportunity cost', 'economic problem', 'QALY', 'trade-off', 'what to produce', 'how to produce', 'for whom to produce', 'finite resources', 'unlimited wants', 'mixed economy', 'factor of production']
    }
  ]
};
