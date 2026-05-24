(function () {

  window.ECONOS_QUIZ = {
    id:       'market_equilibrium_main',
    topicId:  'market_equilibrium_main',
    title:    'Market Equilibrium',
    subtitle: 'Theme 1 &middot; Topic 2.6 &middot; Edexcel A-Level',
    backUrl:  TopicLoader.buildUrl('learn.html', { topic: 'market_equilibrium_main' }),
    backLabel: 'Back to Learn It',
    lede: '10 questions · ~8 minutes · covers market clearing, excess demand/supply, the price mechanism, simultaneous shifts, allocative efficiency, and price controls',
    shortNames: [
      'Rent control', 'Excess demand/supply', 'Price mechanism sequence',
      'Simultaneous shifts', 'Categorise goods', 'Match pairs', 'Cause & effect',
      'Odd one out', 'Data table', 'Para fill'
    ],

    questions: [

      /* 1 — MCQ: rent control and excess demand */
      { type: 'mcq',
        id: 'q_mkeq_1',
        stem: 'The market price for a rental flat is set <strong>below</strong> the equilibrium rent by a government rent control policy. What will happen in this market?',
        opts: [
          'Excess demand (shortage) will emerge — more tenants want flats at the controlled rent than landlords are willing to supply; the market cannot clear at that price',
          'Excess supply will emerge — the controlled rent is below equilibrium, so more landlords will offer flats than tenants will want',
          'The market will automatically adjust back to equilibrium through the price mechanism, eliminating the shortage',
          'The quantity of flats supplied will increase to match demand, because landlords have a legal obligation to provide housing at controlled rents'
        ],
        ans: 0,
        exp: 'Below-equilibrium price: at the controlled (lower) price, quantity demanded exceeds quantity supplied → <strong>excess demand (shortage)</strong>. The price mechanism is blocked from clearing the market, so the shortage persists. Landlords have no incentive to increase supply at the below-market rent; indeed, some may withdraw properties. This is the fundamental problem with price ceilings set below equilibrium — they create persistent shortages and non-price allocation methods (queues, connections, discrimination).'
      },

      /* 2 — Elastic sort: excess demand vs excess supply */
      { type: 'elastic_sort',
        id: 'q_mkeq_2',
        stem: 'Classify each scenario as producing <strong>excess demand</strong> or <strong>excess supply</strong> in the market.',
        categories: ['excess_demand', 'excess_supply'],
        categoryLabels: ['Excess demand (shortage)', 'Excess supply (surplus)'],
        goods: [
          { icon: '🏠', label: 'Government sets a rent ceiling below the equilibrium rent', note: '', ans: 'excess_demand' },
          { icon: '🌾', label: 'Government sets a price floor above the equilibrium price for wheat', note: '', ans: 'excess_supply' },
          { icon: '💊', label: 'A new drug becomes available at a price far below equilibrium willingness to pay', note: '', ans: 'excess_demand' },
          { icon: '🚗', label: 'Car manufacturers produce far more cars than consumers are willing to buy at the listed price', note: '', ans: 'excess_supply' },
          { icon: '🎫', label: 'Concert tickets priced below the market-clearing level — queues form at box offices', note: '', ans: 'excess_demand' },
          { icon: '🥛', label: 'EU milk quotas set supply above what the market will absorb at the guaranteed price', note: '', ans: 'excess_supply' }
        ],
        exp: '<strong>Excess demand (shortage)</strong>: price is set below equilibrium → QD > QS → queue/shortage. <strong>Excess supply (surplus)</strong>: price is set above equilibrium → QS > QD → unsold stock. The price mechanism resolves imbalances: shortage → upward price pressure → price rises until QD = QS; surplus → downward price pressure → price falls until QD = QS. Government intervention (price controls) prevents this adjustment.'
      },

      /* 3 — Sequence: price mechanism restoring equilibrium */
      { type: 'sequence',
        id: 'q_mkeq_3',
        stem: 'A harvest failure reduces wheat supply. Place the steps in the correct order showing how the <strong>price mechanism restores equilibrium</strong>.',
        instr: 'Tap the steps in the correct order, from first to last.',
        items: [
          { label: 'Wheat supply curve shifts leftward — less wheat available at every price', note: '' },
          { label: 'At the old equilibrium price, quantity demanded now exceeds quantity supplied', note: '' },
          { label: 'Wheat prices begin to rise — upward pressure from the excess demand', note: '' },
          { label: 'Rising prices signal scarcity to bakers and consumers; both reduce wheat demand', note: '' },
          { label: 'Higher prices also incentivise farmers to maximise remaining supply', note: '' },
          { label: 'A new, higher equilibrium price is reached where QD = QS at lower quantity', note: '' }
        ],
        correctOrder: [0, 1, 2, 3, 4, 5],
        exp: 'The price mechanism operates through <strong>signalling</strong> (price rise signals scarcity), <strong>incentives</strong> (rising prices incentivise producers to supply more and consumers to economise), and <strong>rationing</strong> (the higher price rations the scarce wheat to those willing and able to pay). The market self-corrects without central direction — this is Hayek\'s argument for market superiority over planning. The new equilibrium has a higher price and lower quantity than before the supply shock.'
      },

      /* 4 — MCQ: simultaneous shifts */
      { type: 'mcq',
        id: 'q_mkeq_4',
        stem: 'Both demand and supply for electric vehicles (EVs) increase simultaneously. What can we say with certainty about the new equilibrium?',
        opts: [
          'Equilibrium quantity will rise; equilibrium price is indeterminate (depends on relative magnitude of shifts)',
          'Both equilibrium price and quantity will definitely rise',
          'Equilibrium price will rise; equilibrium quantity is indeterminate',
          'Both equilibrium price and quantity are indeterminate'
        ],
        ans: 0,
        exp: 'When demand increases (rightward shift), both P and Q tend to rise. When supply increases (rightward shift), Q tends to rise but P tends to fall. With both shifts together: <strong>quantity definitely rises</strong> (both forces push Q up). But the price effects oppose each other: demand increase pushes P up; supply increase pushes P down. The net effect on price is <strong>indeterminate</strong> — it depends on which shift is larger. This is a common exam trap: candidates assume both shifts mean both P and Q rise.'
      },

      /* 5 — Categorise: types of equilibrium outcomes */
      { type: 'categorise',
        id: 'q_mkeq_5',
        stem: 'Sort each scenario into the correct market outcome category.',
        categories: ['Market clears', 'Excess demand', 'Excess supply'],
        items: [
          { text: 'Price is set at the equilibrium level; all buyers willing to pay that price find sellers', category: 'Market clears' },
          { text: 'A minimum wage is set above the equilibrium wage in a low-skill labour market', category: 'Excess supply' },
          { text: 'Ticket pricing for a major concert is set below what the market would bear', category: 'Excess demand' },
          { text: 'The EU sets a guaranteed price for butter above its equilibrium — butter mountains emerge', category: 'Excess supply' },
          { text: 'After a shock, the price mechanism adjusts until quantity demanded equals quantity supplied again', category: 'Market clears' },
          { text: 'A shortage of semiconductors means manufacturers cannot source enough chips at current prices', category: 'Excess demand' }
        ],
        exp: '<strong>Market clears</strong>: price adjusts until QD = QS — no persistent shortages or surpluses. <strong>Excess demand</strong>: price is below equilibrium (price ceiling, mispricing, unexpected demand surge) — QD > QS, shortage. <strong>Excess supply</strong>: price is above equilibrium (price floor, minimum wage, guaranteed prices) — QS > QD, surplus. Price controls that prevent market clearing always create one of the two disequilibria.'
      },

      /* 6 — Match pairs: equilibrium concepts */
      { type: 'match_pairs',
        id: 'q_mkeq_6',
        stem: 'Match each term to its correct definition or example.',
        pairs: [
          { a: 'Equilibrium price', b: 'Price at which quantity demanded equals quantity supplied' },
          { a: 'Excess demand', b: 'QD > QS — shortage; upward pressure on price' },
          { a: 'Excess supply', b: 'QS > QD — surplus; downward pressure on price' },
          { a: 'Price ceiling', b: 'Legal maximum price set below equilibrium, causing shortage' },
          { a: 'Price floor', b: 'Legal minimum price set above equilibrium, causing surplus' },
          { a: 'Market-clearing', b: 'No tendency for price to change; market is in balance' }
        ],
        exp: 'Core equilibrium vocabulary: equilibrium (QD = QS, no tendency to change); excess demand (shortage, upward price pressure); excess supply (surplus, downward pressure); price ceiling (max below equilibrium → shortage); price floor (min above equilibrium → surplus); market-clearing (equilibrium state). These six concepts form the analytical toolkit for any market analysis question.'
      },

      /* 7 — Cause & effect: supply and demand shocks */
      { type: 'cause_effect',
        id: 'q_mkeq_7',
        stem: 'Match each market shock to its effect on equilibrium price and quantity.',
        pairs: [
          { cause: 'Demand increases, supply unchanged', effect: 'Price rises, quantity rises' },
          { cause: 'Supply decreases, demand unchanged', effect: 'Price rises, quantity falls' },
          { cause: 'Both demand and supply increase equally', effect: 'Quantity rises, price unchanged' },
          { cause: 'Demand decreases, supply increases', effect: 'Price falls, quantity change indeterminate' },
          { cause: 'Supply increases, demand unchanged', effect: 'Price falls, quantity rises' },
          { cause: 'Both demand and supply decrease equally', effect: 'Quantity falls, price unchanged' }
        ],
        exp: 'Framework for analysing shifts: demand right → P↑ Q↑; demand left → P↓ Q↓; supply right → P↓ Q↑; supply left → P↑ Q↓. Simultaneous shifts: when both shift in same direction, Q change is certain but P is indeterminate (depends on relative magnitudes). When they shift in opposite directions, P change may be certain but Q is indeterminate. Always draw the diagram to check.'
      },

      /* 8 — Odd one out: allocative efficiency */
      { type: 'odd_one_out',
        id: 'q_mkeq_8',
        stem: 'Three of these are conditions or implications of <strong>allocative efficiency</strong> in a market. Which is the <strong>odd one out</strong>?',
        items: [
          { icon: '⚖️', label: 'Resources are allocated to their highest-valued use as judged by consumers\' willingness to pay', note: '' },
          { icon: '📊', label: 'The equilibrium price equals the marginal cost of production (P = MC)', note: '' },
          { icon: '🏭', label: 'Firms produce at the minimum point of their long-run average cost curve', note: '' },
          { icon: '🎯', label: 'There is no deadweight loss — all mutually beneficial trades take place', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is <strong>producing at minimum long-run average cost</strong> — this describes <strong>productive efficiency</strong>, not allocative efficiency. Allocative efficiency requires: resources allocated to highest-valued uses (WTP reflects social value); P = MC (price signals accurately reflect resource cost); no deadweight loss (all beneficial trades occur). Productive efficiency (minimum AC) and allocative efficiency (P = MC) are distinct concepts — a firm can be productively efficient but allocatively inefficient (e.g. a monopolist).'
      },

      /* 9 — Data table: UK housing market */
      { type: 'data_table',
        id: 'q_mkeq_9',
        stem: 'The table shows UK housing market data 2010–2022.',
        headers: ['Year', 'Avg house price (£000)', 'Mortgage rate (%)', 'New homes built (000/yr)', 'Population (m)'],
        rows: [
          ['2010', '167', '3.5', '103', '62.8'],
          ['2014', '189', '2.8', '118', '64.6'],
          ['2018', '228', '2.2', '165', '66.4'],
          ['2022', '292', '4.1', '178', '67.0']
        ],
        question: 'Which conclusion is <strong>best supported</strong> by the data?',
        opts: [
          'The sustained price rise reflects demand growing faster than supply — rising population, falling mortgage rates (to 2018), and supply that grew but failed to keep pace with demand',
          'Rising house prices are explained entirely by falling mortgage rates — the supply and population data are irrelevant',
          'Supply growth (103,000 to 178,000 new homes) has been sufficient to meet demand, so prices should have stabilised',
          'The data proves that rent controls would solve the housing affordability crisis'
        ],
        ans: 0,
        exp: 'The data support a demand-supply imbalance explanation: population rose by 4.2m (demand driver); mortgage rates fell from 3.5% to 2.2% by 2018 (demand driver — lower borrowing cost); new home building rose from 103,000 to 178,000 but with ~300,000 households formed annually (estimated), supply fell short of demand. The result: prices rose 75% over 12 years. Option B is too narrow. Option C ignores the population/demand side and the scale of need. Option D is a policy proposal not supported by the data presented.'
      },

      /* 10 — Para fill: market equilibrium */
      { type: 'para_fill',
        id: 'q_mkeq_10',
        stem: 'Complete the paragraph about how markets reach and maintain equilibrium.',
        anchor: 'The price mechanism is the process by which markets resolve imbalances between supply and demand.',
        para: 'At the equilibrium price, quantity [1] equals quantity [2] — the market clears with no unsatisfied buyers or sellers. If demand increases and supply is unchanged, there is initially [3] demand at the old price. This creates upward pressure on [4], which rises until the market [5] again. The price serves as a [6] to producers that resources should be reallocated toward this market, and as a [7] device, restricting consumption to those willing to pay.',
        blanks: [
          { id: 1, opts: ['demanded', 'supplied', 'produced', 'consumed'], ans: 0 },
          { id: 2, opts: ['supplied', 'demanded', 'produced', 'wanted'], ans: 0 },
          { id: 3, opts: ['excess', 'insufficient', 'perfect', 'falling'], ans: 0 },
          { id: 4, opts: ['price', 'quantity', 'supply', 'demand'], ans: 0 },
          { id: 5, opts: ['clears', 'fails', 'grows', 'contracts'], ans: 0 },
          { id: 6, opts: ['signal', 'barrier', 'cost', 'subsidy'], ans: 0 },
          { id: 7, opts: ['rationing', 'signalling', 'incentive', 'planning'], ans: 0 }
        ],
        exp: '(1)(2) At equilibrium, quantity <strong>demanded</strong> = quantity <strong>supplied</strong>. (3) A demand increase creates <strong>excess</strong> demand at the old price. (4) Upward pressure on <strong>price</strong>. (5) Price rises until the market <strong>clears</strong>. (6) Price acts as a <strong>signal</strong> — the profit opportunity tells producers where resources are needed. (7) Price as <strong>rationing</strong> device — only those willing to pay the higher price can access the good. These three functions (signal, incentive, rationing) are how the price mechanism allocates resources in a market economy.'
      }

    ]
  };

})();
