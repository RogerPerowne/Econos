(function () {

  window.ECONOS_QUIZ = {
    id:       'market_equilibrium_main',
    topicId:  'market_equilibrium_main',
    title:    'Market Equilibrium',
    subtitle: 'Theme 1 &middot; Topic 2.6 &middot; Edexcel A-Level',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-style questions covering market clearing, excess demand and supply, the price mechanism restoring equilibrium, simultaneous supply and demand shifts, allocative efficiency of equilibrium, price controls, and real-market applications. Mixed formats &#8212; sort, calculation, diagram interp, evaluation multi-select, data table &#8212; designed for the analysis marks Edexcel rewards.',
    shortNames: {
      'market_equilibrium_1': 'Market equilibrium',
      'market_equilibrium_2': 'Excess demand/supply',
      'market_equilibrium_3': 'Analysing a shift',
      'market_equilibrium_4': 'Simultaneous shifts',
      'market_equilibrium_5': 'Allocative efficiency',
      'market_equilibrium_6': 'Markets not clearing',
      'market_equilibrium_7': 'Different market contexts'
    },

    questions: [

      /* 1 &#8212; MCQ: excess demand */
      { type: 'mcq',
        stem: 'The market price for a rental flat is set <strong>below</strong> the equilibrium rent by a government rent control policy. What will happen in this market?',
        opts: [
          'Excess demand (shortage) will emerge &#8212; more tenants want flats at the controlled rent than landlords are willing to supply; the market cannot clear at that price',
          'Excess supply will emerge &#8212; the controlled rent is below equilibrium, so more landlords will offer flats than tenants will want',
          'The market will automatically adjust back to the equilibrium rent through the price mechanism, eliminating the shortage',
          'The quantity of flats supplied will increase to match demand, because landlords have a legal obligation to provide housing at controlled rents'
        ],
        ans: 0,
        exp: 'A price ceiling set <strong>below</strong> equilibrium creates a persistent <strong>excess demand (shortage)</strong>. At the controlled rent, quantity demanded exceeds quantity supplied. The price mechanism cannot restore equilibrium because the ceiling prevents the price from rising. Consequences include: housing shortages (long waiting lists), black markets, deteriorating housing quality (landlords reduce maintenance when margins are squeezed), and reduced new supply (investment in rental property becomes less attractive). This is why economists generally argue that rent controls solve affordability in the short run but worsen housing availability in the long run.'
      },

      /* 2 &#8212; Elastic sort: excess demand vs excess supply */
      { type: 'elastic_sort',
        stem: 'Classify each situation as creating <strong>excess demand</strong> or <strong>excess supply</strong> in the market.',
        categories: ['excess_d', 'excess_s'],
        categoryLabels: ['Excess demand (shortage)', 'Excess supply (surplus)'],
        goods: [
          { icon: '&#127968;', label: 'The government sets a maximum rent of &#163;800/month in a market where equilibrium is &#163;1,200/month', note: '', ans: 'excess_d' },
          { icon: '&#127807;', label: 'A bumper harvest doubles wheat output, but the government keeps the price at last year\'s level', note: '', ans: 'excess_s' },
          { icon: '&#128176;', label: 'The minimum wage is set at &#163;15/hour in a market where equilibrium wage is &#163;12/hour', note: '', ans: 'excess_s' },
          { icon: '&#9992;', label: 'Concert tickets are sold at face value (&#163;50) for a show whose secondary market price is &#163;300', note: '', ans: 'excess_d' },
          { icon: '&#128664;', label: 'A government subsidy to car manufacturers lowers production costs, increasing supply at the existing market price', note: '', ans: 'excess_s' },
          { icon: '&#127922;', label: 'A maximum ticket price for a football final is set below the level that would clear the market', note: '', ans: 'excess_d' }
        ],
        exp: '<strong>Excess demand</strong> (price below equilibrium): rent control (price ceiling → shortage), face-value concert tickets (black market emerges), football ticket cap. <strong>Excess supply</strong> (price above equilibrium): bumper harvest kept at old price (surplus), minimum wage above equilibrium (unemployment = excess supply of labour), government subsidy expanding supply at fixed price. The general rule: price ceiling below equilibrium → shortage; price floor above equilibrium → surplus.'
      },

      /* 3 &#8212; MCQ: simultaneous shifts */
      { type: 'mcq',
        stem: 'Consumer incomes rise simultaneously with a significant increase in production costs for firms. What happens to <strong>equilibrium price and quantity</strong>?',
        opts: [
          'Price definitely rises (both shifts raise price); quantity change is indeterminate &#8212; demand increase raises Q but supply decrease reduces Q; net effect on Q depends on relative shift magnitudes',
          'Both price and quantity definitely rise &#8212; the income rise and the supply shock both raise prices and quantities',
          'Price is indeterminate; quantity definitely rises because the demand increase outweighs the supply reduction',
          'Both price and quantity are indeterminate &#8212; we can say nothing about the outcome without more information'
        ],
        ans: 0,
        exp: 'When both supply and demand shift: (1) higher consumer incomes → demand shifts right (raises P and Q); (2) higher production costs → supply shifts left (raises P, reduces Q). For <strong>price</strong>: both shifts push price upward → price <strong>definitely rises</strong>. For <strong>quantity</strong>: demand increase pushes Q up; supply decrease pushes Q down → quantity is <strong>indeterminate</strong> without knowing relative magnitudes. This is the key rule for simultaneous shifts: if both shifts affect a variable in the <em>same</em> direction, that variable is determinate; if they affect it in <em>opposite</em> directions, it is ambiguous. State "indeterminate" and explain why &#8212; this earns more marks than guessing.'
      },

      /* 4 &#8212; Calculation: equilibrium */
      { type: 'calculation',
        context: 'A market has the following demand and supply schedules:<br><br>Price (&#163;): 10, 20, 30, 40, 50<br>Quantity demanded: 500, 400, 300, 200, 100<br>Quantity supplied: 100, 200, 300, 400, 500',
        working: [
          'Equilibrium where quantity demanded = quantity supplied.',
          'At &#163;10: QD = 500, QS = 100 → excess demand = 400',
          'At &#163;20: QD = 400, QS = 200 → excess demand = 200',
          'At &#163;30: QD = 300, QS = 300 → QD = QS → EQUILIBRIUM',
          'At &#163;40: QD = 200, QS = 400 → excess supply = 200',
          'Equilibrium price = &#163;30; equilibrium quantity = 300 units'
        ],
        stem: 'What is the <strong>equilibrium price</strong> and <strong>equilibrium quantity</strong> in this market?',
        opts: [
          { ped: '&#163;30 and 300 units', typ: 'At &#163;30: QD = 300 = QS = 300 &#8212; the market clears; there is neither shortage nor surplus', rev: 'Find the price where QD equals QS' },
          { ped: '&#163;20 and 400 units', typ: 'At &#163;20: QD = 400 but QS = 200 &#8212; excess demand of 200 means this is not equilibrium', rev: 'Equilibrium requires QD = QS, not just finding the middle price' },
          { ped: '&#163;40 and 200 units', typ: 'At &#163;40: QD = 200 but QS = 400 &#8212; excess supply of 200 means this is not equilibrium', rev: 'Check: at &#163;40 there is a surplus, so price would fall, not stay' },
          { ped: '&#163;30 and 600 units', typ: 'At &#163;30, both QD and QS = 300; total "units" of 600 adds both sides incorrectly', rev: 'Equilibrium quantity is the quantity traded = 300 (one side of the market, not both)' }
        ],
        ans: 0,
        exp: 'Equilibrium is where <strong>QD = QS = 300 units at &#163;30</strong>. At any price above &#163;30 (e.g. &#163;40), QS > QD &#8212; excess supply &#8212; forces the price down. At any price below &#163;30 (e.g. &#163;20), QD > QS &#8212; excess demand &#8212; forces the price up. The price mechanism automatically restores the &#163;30 equilibrium. The equilibrium quantity is 300 &#8212; the amount actually traded when the market clears. This is the stable, self-correcting property of competitive equilibrium.'
      },

      /* 5 &#8212; Multi-select: true about allocative efficiency */
      { type: 'multi_select',
        stem: 'Select ALL statements that are <strong>correct</strong> regarding the allocative efficiency of competitive market equilibrium.',
        opts: [
          'At equilibrium Q*, price equals marginal cost &#8212; the allocative efficiency condition P = MC is satisfied',
          'Total welfare (consumer surplus + producer surplus) is maximised at the competitive equilibrium',
          'Any output below Q* implies a deadweight loss &#8212; potential gains from further exchange are unrealised',
          'Any output above Q* is also allocatively efficient because more goods are always better for society',
          'Market failure occurs when externalities mean prices do not reflect the true social marginal cost',
          'A monopoly achieves allocative efficiency because it maximises producer surplus'
        ],
        correct: [0, 1, 2, 4],
        exp: 'Options A, B, C, and E are correct. Option D is <strong>incorrect</strong>: at Q > Q*, the cost of producing additional units exceeds the benefit to consumers &#8212; society wastes resources, reducing welfare. Option F is <strong>incorrect</strong>: monopoly produces where MR = MC but charges P > MC &#8212; this creates allocative inefficiency and deadweight loss. Competitive equilibrium uniquely achieves P = MC because firms are price-takers, making it the welfare-maximising outcome for society. Market failures (externalities, public goods, information failures) break this result because prices no longer capture all social costs and benefits.'
      },

      /* 6 &#8212; Para fill: the market clearing mechanism */
      { type: 'para_fill',
        stem: 'Complete the paragraph explaining how the price mechanism restores equilibrium after a positive demand shock.',
        anchor: 'Markets have a self-correcting mechanism that restores equilibrium after disturbances.',
        para: 'When consumer incomes rise, demand for a normal good shifts [1], creating [2] demand at the original price. Unsatisfied buyers [3] up the price. The rising price causes two simultaneous adjustments: quantity [4] falls (movement up the demand curve) and quantity [5] rises (movement up the supply curve). This process continues until a new [6] is reached at a [7] price and quantity than before.',
        blanks: [
          { id: 1, opts: ['rightward', 'leftward', 'upward along', 'downward along'], ans: 0 },
          { id: 2, opts: ['excess', 'insufficient', 'equal', 'stable'], ans: 0 },
          { id: 3, opts: ['bid', 'drive', 'push', 'hold'], ans: 0 },
          { id: 4, opts: ['demanded', 'supplied', 'produced', 'exported'], ans: 0 },
          { id: 5, opts: ['supplied', 'demanded', 'consumed', 'imported'], ans: 0 },
          { id: 6, opts: ['equilibrium', 'shortage', 'surplus', 'disequilibrium'], ans: 0 },
          { id: 7, opts: ['higher', 'lower', 'the same', 'indeterminate'], ans: 0 }
        ],
        exp: '(1) Demand shifts <strong>rightward</strong> &#8212; an increase in demand. (2) Creates <strong>excess</strong> demand &#8212; a shortage at the original price. (3) Unsatisfied buyers <strong>bid</strong> up the price &#8212; competing for scarce supply. (4) Quantity <strong>demanded</strong> falls (movement along demand curve as price rises). (5) Quantity <strong>supplied</strong> rises (extension of supply as price rises &#8212; movement along supply curve). (6) New <strong>equilibrium</strong> is reached &#8212; market clears again. (7) <strong>Higher</strong> price and quantity than the original equilibrium (standard result of a positive demand shock with upward-sloping supply).'
      },

      /* 7 &#8212; Odd one out: market clearing */
      { type: 'odd_one_out',
        stem: 'Three of these describe situations where the price mechanism <strong>successfully clears the market</strong>. Which is the <strong>odd one out</strong>?',
        items: [
          { icon: '&#128200;', label: 'Unsold concert tickets are discounted online the day before the show until sold', note: '' },
          { icon: '&#9992;', label: 'Airline ticket prices rise automatically as departure date approaches and seats fill up', note: '' },
          { icon: '&#127968;', label: 'A government rent freeze is introduced at current levels, preventing landlords from charging higher rents even as demand rises', note: '' },
          { icon: '&#128665;', label: 'The price of used cars fell significantly in 2023 as semiconductor supplies recovered and new car production normalised', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is the <strong>government rent freeze</strong>. This is an intervention that prevents the price mechanism from clearing the market &#8212; if demand rises but prices cannot adjust, excess demand (housing shortage) persists. The other three all describe price flexibility enabling market clearing: concert ticket discounts (price falls to clear excess supply); dynamic airline pricing (price rises to ration scarce seats); used car price fall in 2023 as supply normalised (price adjustment to new equilibrium). The rent freeze illustrates government failure: well-intentioned intervention creates persistent disequilibrium.'
      },

      /* 8 &#8212; multi_select: evaluation of price controls on domestic energy */
      { type: 'multi_select',
        stem: 'A student is writing a 25-mark essay on <strong>the case for introducing a maximum price (price ceiling) on domestic energy bills</strong>. Which of the following statements demonstrate <strong>evaluation</strong> &#8212; as opposed to description or one-sided analysis?',
        opts: [
          'A price ceiling protects consumers in the short run, but the strength of the equity argument depends on price elasticity of demand: energy is a necessity with inelastic demand, so a price spike imposes a proportionally larger real income burden on lower-income households &#8212; making the case for intervention stronger than for goods with elastic demand.',
          'A maximum price set below the equilibrium creates excess demand.',
          'Whether a price ceiling is justified depends critically on time horizon: a temporary ceiling during a supply shock (as in the UK\'s 2022 Energy Price Guarantee) can protect consumers without permanently deterring investment, whereas a structural, permanent cap risks chronically reducing energy supply by capping returns below the level needed to attract new capacity.',
          'Price ceilings always lead to shortages in the long run.',
          'The allocative efficiency cost of a price ceiling is real but must be weighed against the distributional gain: if energy is under-provided to low-income households without intervention (because markets respond to willingness-to-pay rather than need), a temporary ceiling may improve overall welfare even while introducing a short-run DWL.',
          'Energy companies make large profits.'
        ],
        correct: [0, 2, 4],
        exp: '<strong>Option A</strong> is genuine evaluation: it concedes the equity argument, but specifies the condition under which it is strongest (inelastic demand, necessity goods) and uses that to reach a direction &#8212; the case is stronger here than for luxury goods. <strong>Option C</strong> is evaluation: it introduces the time-horizon distinction as the key evaluative dimension, uses the 2022 UK example to show temporary ceilings can work, and reaches a qualified direction &#8212; context determines whether a ceiling is justified. <strong>Option E</strong> is evaluation: it weighs the allocative efficiency cost against the distributional gain using the concept of need vs. willingness-to-pay, reaching the direction that the welfare calculation may favour intervention even when efficiency is reduced. <strong>Option B</strong> is description &#8212; restating the standard model prediction without qualification, mechanism, or evidence. <strong>Option D</strong> overclaims &#8212; "always" ignores the time-horizon qualification and cases where demand or supply is relatively inelastic, making it a one-sided claim rather than evaluation. <strong>Option F</strong> is a vague observation with no analytical direction or evaluative content.'
      },

      /* 9 &#8212; Data table: labour market equilibrium */
      { type: 'data_table',
        stem: 'The table shows data for the UK labour market in a particular sector.',
        headers: ['Wage (&#163;/hr)', 'Workers willing to work (\'000s)', 'Jobs available (\'000s)'],
        rows: [
          ['8', '40', '100'],
          ['10', '60', '80'],
          ['12', '80', '60'],
          ['14', '100', '40'],
          ['16', '120', '20']
        ],
        question: 'What is the equilibrium wage, and what would happen if the minimum wage were set at <strong>&#163;14 per hour</strong>?',
        opts: [
          'Equilibrium wage is &#163;11 (interpolating: QD=QS at approximately 70k workers); a minimum wage of &#163;14 creates excess supply of labour (unemployment) of approximately 60,000 workers',
          'Equilibrium wage is &#163;12, where 80,000 workers want to work and 60,000 jobs are available &#8212; this shows excess supply at &#163;12',
          'A minimum wage of &#163;14 eliminates unemployment because higher wages attract more workers into the labour force',
          'The equilibrium wage is &#163;16 because at that point all workers who want to work are employed'
        ],
        ans: 0,
        exp: 'Equilibrium is where labour supply = labour demand. From the table: at &#163;12, supply = 80k > demand = 60k (excess supply). At &#163;10, supply = 60k < demand = 80k (excess demand). Equilibrium lies between &#163;10 and &#163;12 &#8212; approximately &#163;11 with ~70k workers. A minimum wage of <strong>&#163;14</strong> is <em>above</em> equilibrium: at &#163;14, 100k workers want to work but only 40k jobs are available &#8212; <strong>excess supply of 60,000</strong> (unemployment). This is the textbook price floor argument. However, if employers have monopsony power (hold wages below competitive equilibrium), a minimum wage may increase both wages AND employment &#8212; a qualification examiners reward.'
      },

      /* 10 &#8212; Chain: supply shock to new equilibrium */
      { type: 'chain',
        stem: 'Russia restricts gas exports to Europe. Place the following consequences for the European gas market in the correct order.',
        items: [
          { label: 'Gas prices rise sharply as the market adjusts toward the new higher equilibrium', note: '' },
          { label: 'Russian gas supply to Europe is sharply reduced', note: '' },
          { label: 'At the old price, excess demand emerges &#8212; buyers want more gas than is available', note: '' },
          { label: 'European gas supply curve shifts leftward &#8212; less available at every price', note: '' },
          { label: 'Buyers compete for scarce gas, bidding up the price; industrial users reduce consumption', note: '' },
          { label: 'New equilibrium reached at higher price and lower quantity; European countries seek alternative suppliers', note: '' }
        ],
        correctOrder: [1, 3, 2, 4, 0, 5],
        exp: '<strong>The correct sequence:</strong><br>1. Russia restricts gas supply (initial shock).<br>2. European supply curve shifts leftward.<br>3. Excess demand emerges at the old price.<br>4. Buyers compete and bid up the price &#8212; rationing function of the price mechanism.<br>5. Price rises to a new higher level.<br>6. New equilibrium at higher price, lower quantity; adjustment includes seeking alternative suppliers (Norway, LNG from US).<br><br>This is the 2022 European energy crisis in a supply-demand framework. The speed of adjustment depends on PES: gas supply is very inelastic in the short run (fixed pipeline infrastructure), so the price rise was dramatic. In the long run, new LNG terminals and renewables shift supply back rightward.'
      }

    ]
  };

})();
