/* ============================================================
   ECONOS — Link It · Chain station data
   PES: demand surge → price spike via low supply elasticity
   ============================================================ */

window.ECONOS_LINK_CHAIN = {
  topic:   'Price Elasticity of Supply',
  backUrl: TopicLoader.buildUrl('link_intro.html'),
  nextUrl: TopicLoader.buildUrl('link_diagram.html'),

  stations: [
    { id: 'context', label: 'Use the context',    href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain',   label: 'Build the chain',    href: TopicLoader.buildUrl('link_chain.html')   },
    { id: 'calc',    label: 'Calculate It',       href: TopicLoader.buildUrl('link_calc.html')    },
    { id: 'diagram', label: 'Diagram connector',  href: TopicLoader.buildUrl('link_diagram.html') },
    { id: 'depends', label: 'It depends on',      href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge',   label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html')   }
  ],
  currentStationIdx: 1,

  eyebrow:     'Build the Chain',
  instruction: 'Tap tiles in the correct order to complete the chain. Each step should lead clearly and mechanically to the next.',

  chains: [
    {
      id: 'pes-housing-mechanism',
      scenario: {
        icon:  '🏠',
        label: 'Scenario',
        text:  'Record net migration (745,000) and post-COVID urban return increase demand for rental housing sharply, but supply is constrained by long construction lead times (PES ≈ 0.2 in SR).'
      },
      anchor: 'Record net migration (745,000) and post-COVID urban return increase demand for rental housing sharply, but supply is constrained by long construction lead times (PES ≈ 0.2 in SR).',
      tiles: [
        {
          id:   'step-demand',
          icon: '📈',
          text: 'Demand surge: demand for rental housing shifts right → at existing rents, quantity demanded exceeds quantity supplied → excess demand emerges',
          pos:  0
        },
        {
          id:   'step-signal',
          icon: '💸',
          text: 'Price signal: rents rise sharply, signalling developers and landlords to increase supply → but the supply response is slow (PES ≈ 0.2) because new builds take 24–36 months to complete',
          pos:  1
        },
        {
          id:   'step-welfare',
          icon: '⚖️',
          text: 'Welfare effect: rents stay elevated for years — consumer surplus for tenants falls substantially; developers and existing landlords capture higher producer surplus',
          pos:  2
        },
        {
          id:   'dist-1',
          icon: '🏛️',
          text: 'The government introduces rent controls, suppressing price signals',
          pos:  null
        },
        {
          id:   'dist-2',
          icon: '🏡',
          text: 'Demand for owner-occupied housing falls as mortgage rates rise',
          pos:  null
        },
        {
          id:   'dist-3',
          icon: '📋',
          text: 'Planning regulations are relaxed, immediately increasing supply',
          pos:  null
        }
      ],
      explain: [
        {
          pos:  0,
          text: 'Net migration and urban return are non-price demand factors — they shift the entire demand curve for rental housing to the right. At the existing rent level, the quantity of rental properties demanded now exceeds the quantity available, creating excess demand (a shortage). Landlords face queues of prospective tenants and begin raising rents.'
        },
        {
          pos:  1,
          text: 'The rent rise sends a price signal: higher rents make new development profitable, encouraging developers to build more. But this signal cannot unlock supply quickly because new housing takes 24–36 months from planning permission to first occupation. PES ≈ 0.2 means a 10% rent rise generates only a 2% rise in quantity supplied — most of the demand shock is absorbed by higher rents, not more housing.'
        },
        {
          pos:  2,
          text: 'Because supply cannot respond in the short run, rents remain elevated. Existing tenants pay significantly more for the same housing — their consumer surplus falls. Landlords and developers benefit from higher rental income and development values — their producer surplus rises. The welfare distribution shifts sharply toward suppliers, and the efficiency cost is visible in the housing shortage that persists until the long-run supply response eventually catches up.'
        }
      ],
      examBridge: '"Record net migration shifted the demand curve for rental housing sharply to the right. Because supply elasticity is very low (PES ≈ 0.2 in the short run), the market adjusted almost entirely through price: rents rose 9.4% while the quantity of rental properties barely increased. The low PES reflects long construction lead times, planning constraints, and landlord exit from the market — all of which prevent supply from responding to the price signal within the policy-relevant time frame."',

      prompts: [
        'Why does the demand surge create excess demand rather than immediately attracting more supply?',
        'Why does the price signal (higher rents) fail to increase supply quickly?',
        'What are the welfare consequences of sustained elevated rents?'
      ],
      modelAnswers: [
        'The demand surge shifts the demand curve right immediately — but supply cannot respond on the same timescale. New housing takes 24–36 months from planning to completion, so quantity supplied remains essentially fixed in the short run. At existing rents, demand now exceeds supply: a housing shortage emerges.',
        'Higher rents signal profitability to developers, but the production period for housing is 24–36 months. Planning constraints add further delays. PES ≈ 0.2 means supply is near-inelastic: a large rent rise produces only a small quantity response. The price mechanism works in direction but not in speed or magnitude.',
        'Tenants face higher rents for essentially the same housing — consumer surplus falls substantially. Existing landlords and developers capture the higher rents as producer surplus. The market does not self-correct quickly: the rent spike persists until the long-run supply response (new construction) eventually closes the gap.'
      ],
      vocab: ['price elasticity of supply', 'PES', 'supply response', 'price signal', 'time period', 'planning permission', 'consumer surplus', 'producer surplus', 'excess demand']
    }
  ]
};
