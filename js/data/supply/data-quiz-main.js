(function () {

  window.ECONOS_QUIZ = {
    id:       'supply_main',
    topicId:  'supply_main',
    title:    'Supply',
    subtitle: 'Theme 1 &middot; Topic 2.4 &middot; Edexcel A-Level',
    backUrl:  TopicLoader.buildUrl('learn.html', { topic: 'supply_main' }),
    backLabel: 'Back to Learn It',
    lede: '10 questions · ~8 minutes · covers the law of supply, shifts vs movements, non-price determinants, producer surplus, joint and competing supply',
    shortNames: [
      'Law of supply', 'Move vs shift sort', 'Joint supply', 'Producer surplus calc',
      'Leftward shifts', 'Competing supply fill', 'Cause & effect', 'Odd one out',
      'Energy data table', 'Supply chain'
    ],

    questions: [

      /* 1 — MCQ: law of supply */
      { type: 'mcq',
        id: 'q_supply_1',
        stem: 'The <strong>law of supply</strong> states that, ceteris paribus, as price rises quantity supplied rises. The primary reason for the upward slope of the supply curve in the short run is:',
        opts: [
          'As output expands, firms face rising marginal costs (law of diminishing returns) — so higher prices are needed to justify producing additional units',
          'As price rises, consumers demand more, which forces firms to produce additional output regardless of cost',
          'Government regulations require firms to maintain minimum output levels as prices rise',
          'All firms have constant marginal costs at every output level'
        ],
        ans: 0,
        exp: 'In the short run, as firms expand output they add more variable factors (e.g. labour) to a fixed capital stock. The <strong>law of diminishing returns</strong> sets in: each additional worker adds less to output, raising marginal cost per unit. Firms only produce more if price rises to cover this higher marginal cost. The supply curve is effectively the marginal cost curve — connecting supply theory to cost theory (Theme 3). Constant marginal costs would produce a horizontal supply curve, not an upward slope.'
      },

      /* 2 — Elastic sort: shift vs movement along supply */
      { type: 'elastic_sort',
        id: 'q_supply_2',
        stem: 'Classify each event as causing a <strong>movement along</strong> the supply curve or a <strong>shift</strong> of the supply curve.',
        categories: ['move', 'shift'],
        categoryLabels: ['Movement along the supply curve', 'Shift of the supply curve'],
        goods: [
          { icon: '🌾', label: 'The price of wheat rises from £150 to £200 per tonne', note: '', ans: 'move' },
          { icon: '⚡', label: 'A new generation of wind turbines doubles electricity output per turbine', note: '', ans: 'shift' },
          { icon: '🚗', label: 'A rise in steel prices reduces the quantity of cars supplied at every price', note: '', ans: 'shift' },
          { icon: '🍓', label: 'Unusually cold weather destroys 30% of the UK strawberry crop', note: '', ans: 'shift' },
          { icon: '📊', label: 'Higher profit margins in the coffee shop sector attract 500 new outlets', note: '', ans: 'shift' },
          { icon: '🐟', label: 'A fall in the price of fish reduces the quantity supplied by fishing boats', note: '', ans: 'move' }
        ],
        exp: '<strong>Movements along</strong> supply are caused only by a change in the good\'s own price (extension or contraction of quantity supplied). <strong>Shifts</strong> occur from non-price changes: technology improvement shifts right (more at every price); higher input costs (steel) shift left; natural disasters reduce harvest and shift left; new entrants shift right. Key test: did the good\'s own price change? Yes → movement. No → possible shift.'
      },

      /* 3 — MCQ: joint supply */
      { type: 'mcq',
        id: 'q_supply_3',
        stem: 'A drought significantly reduces global beef production. Considering <strong>joint supply</strong>, what would you expect to happen to the leather market?',
        opts: [
          'Leather supply falls (shifts left), causing leather prices to rise, because leather is a by-product of beef production',
          'Leather supply rises (shifts right), causing leather prices to fall, because resources move from beef to leather',
          'The leather market is unaffected because leather is made from synthetic materials',
          'Leather demand falls as consumers switch away from animal products'
        ],
        ans: 0,
        exp: '<strong>Joint supply</strong>: beef and leather are by-products — slaughtering cattle for beef also produces hides for leather. If beef production falls (fewer cattle slaughtered), fewer hides are produced → leather supply shifts <strong>left</strong> → leather price <strong>rises</strong>. This transmission from one market to another through the by-product link is a classic joint supply chain. Other examples: oil and natural gas; beef tallow and soap; wheat and straw.'
      },

      /* 4 — Numeric input: producer surplus */
      { type: 'numeric_input',
        id: 'q_supply_4',
        stem: 'Calculate the <strong>total producer surplus</strong> (£) in this market.',
        context: 'Three suppliers of handmade furniture: Supplier A minimum acceptable price £200; Supplier B minimum £300; Supplier C minimum £400. Market equilibrium price is <strong>£450</strong> per unit.',
        answer: 450,
        tolerance: 1,
        unit: '£',
        hint: 'Producer surplus = sum of (market price − minimum acceptable price) for each seller who trades.',
        workingSteps: [
          'All three sell at £450 (all minimum prices ≤ £450)',
          'Supplier A: £450 − £200 = £250',
          'Supplier B: £450 − £300 = £150',
          'Supplier C: £450 − £400 = £50',
          'Total = £250 + £150 + £50 = £450'
        ],
        exp: 'Producer surplus = sum of (market price − minimum acceptable price) for each unit sold. (450−200) + (450−300) + (450−400) = 250 + 150 + 50 = <strong>£450</strong>. If price falls to £350, Supplier C exits (minimum price £400 > £350) and total surplus collapses. This illustrates the profit-motive mechanism: entry and exit respond to changes in producer surplus, equating long-run surplus with normal profit.'
      },

      /* 5 — Multi-select: causes of leftward supply shift */
      { type: 'multi_select',
        id: 'q_supply_5',
        stem: 'Which of the following would cause the supply curve for <strong>new cars</strong> to shift <strong>leftward</strong> (decrease in supply)?',
        opts: [
          'A sharp rise in the price of steel (a key input to car manufacturing)',
          'A new regulation requiring all new cars to meet stricter emissions standards, raising production costs',
          'A technological improvement enabling robots to assemble cars more efficiently',
          'The price of new cars rises following increased consumer demand',
          'A global semiconductor shortage limits supply of components needed for car production',
          'Several major manufacturers close UK factories and relocate abroad'
        ],
        correct: [0, 1, 4, 5],
        exp: 'Options A, B, E, and F shift car supply <strong>leftward</strong>: higher steel prices raise input costs; stricter emissions regulations add compliance costs; semiconductor shortage limits production; factory closures reduce number of producers. Option C (technology improvement) shifts supply <strong>rightward</strong> — lower cost per unit. Option D (price of new cars rises) is a movement <strong>along</strong> the supply curve, not a shift — a price change causes an extension of quantity supplied, not a shift.'
      },

      /* 6 — Para fill: competing supply */
      { type: 'para_fill',
        id: 'q_supply_6',
        stem: 'Complete the paragraph about competing supply.',
        anchor: 'Competing supply arises when the same resources can produce either of two goods.',
        para: 'Competing supply occurs when a factor of production — typically [1] — can be used to produce either of two alternative goods. A rise in the price of [2] Good A increases its [3] and causes producers to switch [4] resources from Good B to Good A. This reduces the [5] of Good B, shifting its supply curve [6]. The price of Good B consequently [7] as supply falls while demand is unchanged.',
        blanks: [
          { id: 1, opts: ['land', 'money', 'technology', 'infrastructure'], ans: 0 },
          { id: 2, opts: ['substitute', 'complement', 'inferior', 'joint'], ans: 0 },
          { id: 3, opts: ['profitability', 'demand', 'cost', 'regulation'], ans: 0 },
          { id: 4, opts: ['productive', 'financial', 'human', 'fixed'], ans: 0 },
          { id: 5, opts: ['supply', 'demand', 'price', 'quantity demanded'], ans: 0 },
          { id: 6, opts: ['leftward', 'rightward', 'upward along', 'downward along'], ans: 0 },
          { id: 7, opts: ['rises', 'falls', 'stays constant', 'becomes indeterminate'], ans: 0 }
        ],
        exp: '(1) <strong>Land</strong> is the classic competing supply factor — a farmer can grow wheat OR oilseed rape, not both on the same field. (2) <strong>Substitute</strong>: the goods compete for the same resources. (3) Higher price increases <strong>profitability</strong>, drawing resources in. (4) <strong>Productive</strong> resources are switched. (5) Supply of Good B <strong>falls</strong>. (6) Supply curve shifts <strong>leftward</strong>. (7) With unchanged demand and lower supply, price of Good B <strong>rises</strong>. Example: if wheat prices rise, farmers switch land to wheat → rapeseed supply falls → rapeseed price rises.'
      },

      /* 7 — Cause & effect: supply determinants */
      { type: 'cause_effect',
        id: 'q_supply_7',
        stem: 'Match each cause to its correct effect on the supply curve.',
        pairs: [
          { cause: 'Fall in the cost of a key raw material input', effect: 'Supply curve shifts rightward' },
          { cause: 'Rise in the good\'s own market price', effect: 'Movement along — extension of quantity supplied' },
          { cause: 'Introduction of a production subsidy from government', effect: 'Supply curve shifts rightward' },
          { cause: 'New labour-saving technology adopted by all firms', effect: 'Supply curve shifts rightward' },
          { cause: 'A rise in the price of a jointly supplied by-product', effect: 'Supply of main good shifts rightward' },
          { cause: 'A major supply chain disruption (e.g. global semiconductor shortage)', effect: 'Supply curve shifts leftward' }
        ],
        exp: 'Non-price determinants shift the supply curve: lower input costs → rightward (more profitable at every price); subsidies → rightward (lower effective cost); technology → rightward; joint supply increase → more of both by-products supplied; supply chain disruption → leftward. The good\'s own price only causes a movement along the existing curve. A rightward shift means more is supplied at every price — not that price has fallen.'
      },

      /* 8 — Odd one out: rightward supply shift */
      { type: 'odd_one_out',
        id: 'q_supply_8',
        stem: 'Three of these cause the supply curve for a manufactured good to shift <strong>rightward</strong>. Which is the <strong>odd one out</strong>?',
        items: [
          { icon: '🤖', label: 'A new automated assembly technology cuts unit production costs by 30%', note: '' },
          { icon: '💰', label: 'The government introduces a production subsidy of £500 per unit', note: '' },
          { icon: '📈', label: 'A substantial increase in the market price of the good incentivises firms to produce more', note: '' },
          { icon: '🏭', label: 'Twenty new overseas firms enter the UK market, expanding total industry capacity', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is a <strong>rise in the market price</strong>. A price rise causes an extension of quantity supplied — a movement <em>up</em> the existing supply curve — not a rightward shift of the curve. The other three are non-price changes that shift the entire supply curve rightward: new technology lowers cost per unit; a production subsidy effectively reduces firms\' costs; new entrants expand total market supply.'
      },

      /* 9 — Data table: UK energy supply shock 2021-22 */
      { type: 'data_table',
        id: 'q_supply_9',
        stem: 'The table shows UK energy market data around the 2021–2022 energy crisis.',
        headers: ['Indicator', 'Q4 2020', 'Q4 2021', 'Q4 2022'],
        rows: [
          ['UK wholesale gas price (p/therm)', '50', '250', '400'],
          ['UK electricity generation from gas (%)', '38%', '36%', '32%'],
          ['UK household energy bill (avg, £/yr)', '1,100', '1,800', '2,500'],
          ['New renewable energy capacity added (GW)', '3.2', '3.8', '4.5'],
          ['UK gas production from North Sea (bcm)', '40', '38', '35']
        ],
        question: 'Which interpretation is <strong>most consistent with supply theory</strong>?',
        opts: [
          'Surging wholesale gas prices shifted the household energy supply curve leftward, raising equilibrium bills; declining North Sea production reduced domestic supply further — consistent with a negative supply shock',
          'Higher gas prices caused a leftward shift in gas demand, which is why household bills rose',
          'The rise in renewable capacity fully offset the gas supply shock, leaving bills unchanged',
          'North Sea gas production data is irrelevant to household bills because the UK imports most of its gas'
        ],
        ans: 0,
        exp: 'The data show a clear negative supply shock: wholesale gas prices surged 700% (50p to 400p/therm), representing a massive increase in the key input cost for energy suppliers — shifting the household energy supply curve leftward and raising equilibrium prices. Declining North Sea production (40→35 bcm) reduced domestic supply further. New renewables added capacity but too slowly to offset the shock (generation share fell). Option B incorrectly attributes the bill rise to demand. Option C is refuted by the bill data (£1,100 to £2,500).'
      },

      /* 10 — Chain: technology improvement to new equilibrium */
      { type: 'chain',
        id: 'q_supply_10',
        stem: 'A technological breakthrough significantly reduces the cost of producing electric vehicles. Place the following events in the correct order.',
        items: [
          { label: 'EV prices fall as firms compete on price to attract expanded demand', note: '' },
          { label: 'Production costs per EV fall substantially', note: '' },
          { label: 'New firms enter the EV market attracted by profit opportunities', note: '' },
          { label: 'The supply curve for EVs shifts rightward — more supplied at every price', note: '' },
          { label: 'EV market reaches a new equilibrium with lower price and higher output', note: '' },
          { label: 'Existing EV manufacturers earn higher profits as cost reductions widen margins', note: '' }
        ],
        correctOrder: [1, 3, 5, 2, 0, 4],
        exp: '<strong>Correct sequence:</strong> (1) Technology reduces production costs (the supply-side shock). (2) Supply curve shifts rightward. (3) Existing firms earn higher profits (wider margin at existing price). (4) New firms enter, attracted by profit opportunities — incentive function of the price mechanism. (5) Competition drives prices down as supply expands. (6) New equilibrium: lower price, higher quantity. In perfect competition, entry continues until profits are driven to normal. Intellectual property may sustain profits for the innovating firm for some time.'
      }

    ]
  };

})();
