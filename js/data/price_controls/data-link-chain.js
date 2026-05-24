/* ============================================================
   ECONOS — Link It · Chain station data
   Government Intervention in Markets: build the binding rent cap → shortage → non-price rationing chain
   ============================================================ */

window.ECONOS_LINK_CHAIN = {
  topic:   'Government Intervention in Markets',
  backUrl: TopicLoader.buildUrl('link_intro.html'),
  nextUrl: TopicLoader.buildUrl('link_diagram.html'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.buildUrl('link_chain.html') },
    { id: 'diagram', label: 'Diagram connector', href: TopicLoader.buildUrl('link_diagram.html') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html') }
  ],
  currentStationIdx: 1,

  eyebrow:     'Build the Chain',
  instruction: 'Tap tiles in the correct order to complete the chain. Each step should lead clearly and mechanically to the next.',

  chains: [
    {
      id: 'rent-ceiling-mechanism',
      scenario: {
        icon:  '🏠',
        label: 'Scenario',
        text:  'A city government imposes a legally binding rent cap at 2022 levels — roughly 20% below the current market-clearing rent — on all private rental flats.'
      },
      anchor: 'P_max is set below P_e — the ceiling binds.',
      tiles: [
        {
          id:   'step-shortage',
          icon: '📉',
          text: 'At P_max, Q_s < Q_d — the gap Q_d − Q_s is the shortage',
          pos:  0
        },
        {
          id:   'step-rationing',
          icon: '🎟️',
          text: 'Price cannot clear → non-price rationing: queues, networks, key-money',
          pos:  1
        },
        {
          id:   'step-welfare',
          icon: '⚖️',
          text: 'Sitting tenants gain; lost trades Q_s–Q_e → DWL; quality decline',
          pos:  2
        },
        {
          id:   'dist-1',
          icon: '📈',
          text: 'Landlords raise rents in response to the cap to recover lost revenue',
          pos:  null
        },
        {
          id:   'dist-2',
          icon: '🏗️',
          text: 'Rental supply expands immediately as developers respond to the cap',
          pos:  null
        },
        {
          id:   'dist-3',
          icon: '💰',
          text: 'A binding ceiling above the equilibrium price has no effect on the market',
          pos:  null
        }
      ],
      explain: [
        {
          pos:  0,
          text: 'A maximum price is only binding when it sits below the free-market equilibrium. At P_max < P_e, landlords are unwilling to supply as many flats as before (Q_s falls) because the legal rent no longer covers the marginal cost of providing each flat, while tenants demand more flats (Q_d rises) at the lower price. The horizontal gap between Q_d and Q_s at P_max is the shortage — the excess demand the price mechanism is no longer allowed to clear.'
        },
        {
          pos:  1,
          text: 'When price cannot ration the limited supply, something else must. In housing markets this typically takes the form of waiting lists, queues, allocation through personal or professional networks, "key-money" side payments, or outright black-market sub-letting above the cap. LSE evidence cited in the extract shows capped flats increasingly reach better-connected or higher-income tenants — so the policy does not reliably reach the lowest-income renters it is designed to protect.'
        },
        {
          pos:  2,
          text: 'Sitting tenants who hold a tenancy gain a transfer: they pay a lower contractual rent, so producer surplus shifts to consumer surplus on the Q_s units still traded. But the trades between Q_s and Q_e that would have happened at P_e no longer occur — that lost surplus is the deadweight welfare loss triangle. Landlords also restore margins by cutting non-essential maintenance (San Francisco evidence: −8% per flat), so the headline rent is lower but the real product is worse.'
        }
      ],
      examBridge: '"A binding rent cap (P_max < P_e) reduces quantity supplied to Q_s while raising quantity demanded to Q_d, opening up a shortage of Q_d − Q_s. Because the price mechanism can no longer clear the market, flats are rationed by queueing, networks and key money — often missing the lowest-income tenants. Sitting tenants gain a transfer from landlords, but trades between Q_s and Q_e are lost as deadweight welfare loss, and landlords restore margins by cutting maintenance and quality."',

      prompts: [
        'Why is a maximum price only effective when set below the equilibrium price?',
        'What is non-price rationing and why does it appear under a binding ceiling?',
        'Who gains and who loses from a binding rent cap, and where does the deadweight loss come from?'
      ],
      modelAnswers: [
        'A maximum price is a legal ceiling — landlords may charge no more than P_max. If P_max sits above the free-market P_e, the market would already clear at a price below the cap, so the cap never binds and has no effect. Only when P_max < P_e does it force the market away from equilibrium: at the lower legal price, landlords reduce the quantity supplied (Q_s) and tenants demand more flats (Q_d), creating the shortage.',
        'Non-price rationing is the allocation of a limited supply through mechanisms other than price — waiting lists, lotteries, queueing, personal connections, side payments or quality reduction. It appears under a binding ceiling because the price mechanism is suppressed: with Q_d > Q_s at P_max, some buyers must be turned away, and something other than the price must decide who gets the flats. The result is often inefficient (good flats reach well-connected rather than highest-need tenants) and erodes the welfare gain the cap was meant to deliver.',
        'Sitting tenants who already hold a tenancy gain — they pay a lower contractual rent than they otherwise would, transferring surplus from landlords to tenants on the Q_s units still traded. Landlords lose surplus and may exit the market (Berlin: −50% new listings within a year). The deadweight loss is the welfare from trades between Q_s and Q_e that would have occurred at P_e but are prevented by the cap — flats that would have been profitably let to tenants willing to pay more than the marginal cost are simply not let at all.'
      ],
      vocab: ['maximum price', 'price ceiling', 'binding', 'shortage', 'non-price rationing', 'key money', 'black market', 'deadweight loss', 'quality decline', 'PES']
    }
  ]
};
