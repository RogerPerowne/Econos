(function () {

  window.ECONOS_QUIZ = {
    id:       'supply_main',
    topicId:  'supply_main',
    title:    'Supply',
    subtitle: 'Theme 1.6 &#183; Edexcel A-Level',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-style questions covering the law of supply, movement along vs shift, non-price determinants, producer surplus, joint and competing supply, and the profit motive. Mixed formats &#8212; sort, calculation, paragraph completion, diagnostic pair, data table &#8212; designed for the analysis marks Edexcel rewards.',
    shortNames: {
      'supply_1': 'Law of supply',
      'supply_2': 'Movement vs shift',
      'supply_3': 'Non-price determinants',
      'supply_4': 'Producer surplus',
      'supply_5': 'Joint and competing supply',
      'supply_6': 'Supply in context',
      'supply_7': 'Profit motive'
    },

    questions: [

      /* 1 &#8212; MCQ: law of supply */
      { type: 'mcq',
        stem: 'The <strong>law of supply</strong> states, ceteris paribus, that as price rises, quantity supplied rises. The primary reason for the upward slope of the supply curve in the short run is:',
        opts: [
          'As output expands, firms face rising marginal costs (law of diminishing returns) &#8212; so higher prices are needed to justify producing additional units',
          'As price rises, consumers demand more, which forces firms to produce additional output regardless of cost',
          'Supply curves slope upward because of government regulations requiring firms to maintain minimum output levels as prices rise',
          'All firms have constant marginal costs regardless of output level, so they are willing to supply any quantity at a given price'
        ],
        ans: 0,
        exp: 'In the short run, as firms expand output they add more variable factors (e.g. labour) to a fixed stock of capital. Eventually, the <strong>law of diminishing returns</strong> sets in: each additional worker adds less to output, raising the marginal cost of each additional unit. Firms will only produce more if price rises to cover this higher marginal cost. The supply curve is effectively the marginal cost curve &#8212; this connects supply theory to cost theory (Theme 3). Constant marginal costs would produce a horizontal supply curve, not an upward slope.'
      },

      /* 2 &#8212; Elastic sort: shift vs movement along supply */
      { type: 'elastic_sort',
        stem: 'Classify each event as causing either a <strong>movement along</strong> the supply curve or a <strong>shift</strong> of the supply curve.',
        categories: ['move', 'shift'],
        categoryLabels: ['Movement along the supply curve', 'Shift of the supply curve'],
        goods: [
          { icon: '&#128176;', label: 'The price of wheat rises from &#163;150/tonne to &#163;200/tonne', note: '', ans: 'move' },
          { icon: '&#9981;', label: 'A new generation of wind turbines doubles electricity output per turbine', note: '', ans: 'shift' },
          { icon: '&#128664;', label: 'A rise in steel prices reduces the quantity of cars supplied to the market', note: '', ans: 'shift' },
          { icon: '&#127807;', label: 'Unusually cold weather destroys 30% of the UK strawberry crop', note: '', ans: 'shift' },
          { icon: '&#128202;', label: 'Higher profit margins in the coffee shop sector attract 500 new outlets to open', note: '', ans: 'shift' },
          { icon: '&#128738;', label: 'A fall in the price of fish reduces the quantity supplied by fishing boats', note: '', ans: 'move' }
        ],
        exp: '<strong>Movements along</strong> supply: caused only by a change in the good\'s own price. Extension (price up → QS up) or contraction (price down → QS down). <strong>Shifts</strong> of supply: any non-price change. Technology improvement shifts supply right (more at every price). Higher input costs (steel prices) shift supply left (less profitable at every price). Natural events (crop destruction) shift supply left. New entrants shift supply right. The key test: did the good\'s own price change? If yes → movement. If no → shift.'
      },

      /* 3 &#8212; MCQ: joint supply */
      { type: 'mcq',
        stem: 'A drought significantly reduces global beef production. Considering the concept of <strong>joint supply</strong>, what would you expect to happen to the leather market?',
        opts: [
          'Leather supply falls (shifts left), causing leather prices to rise, because leather is a by-product of beef production',
          'Leather supply rises (shifts right), causing leather prices to fall, because the drought frees up resources from beef to leather production',
          'The leather market is unaffected because leather is made from synthetic materials and is independent of beef production',
          'Leather demand falls as consumers switch away from animal products following the drought news'
        ],
        ans: 0,
        exp: '<strong>Joint supply</strong>: beef and leather are by-products &#8212; slaughtering cattle for beef also produces hides for leather. If beef production falls (drought → fewer cattle → beef supply shifts left), <em>fewer</em> hides are produced as a by-product → leather supply shifts <strong>left</strong> → leather price <strong>rises</strong>. This is a textbook joint supply chain: disruption to one market transmits through the by-product link to the other. Other joint supply examples: oil and natural gas; beef tallow and soap; wheat and straw. These frequently appear in data-response questions.'
      },

      /* 4 &#8212; Calculation: producer surplus */
      { type: 'calculation',
        context: 'A market for handmade furniture has the following supply schedule:<br><br>Supplier A: minimum acceptable price = &#163;200 per unit<br>Supplier B: minimum acceptable price = &#163;300 per unit<br>Supplier C: minimum acceptable price = &#163;400 per unit<br><br>The market equilibrium price is <strong>&#163;450</strong> per unit.',
        working: [
          'All three suppliers will sell at &#163;450 (all have minimum acceptable prices below &#163;450).',
          'Producer surplus per unit = market price &#8722; minimum acceptable price.',
          'Supplier A: &#163;450 &#8722; &#163;200 = &#163;250',
          'Supplier B: &#163;450 &#8722; &#163;300 = &#163;150',
          'Supplier C: &#163;450 &#8722; &#163;400 = &#163;50',
          'Total producer surplus = &#163;250 + &#163;150 + &#163;50 = &#163;450'
        ],
        stem: 'What is the <strong>total producer surplus</strong> earned in this market at a price of &#163;450?',
        opts: [
          { ped: '&#163;450', typ: '(450&#8722;200) + (450&#8722;300) + (450&#8722;400) = 250+150+50 = 450', rev: 'Sum producer surplus for each supplier separately' },
          { ped: '&#163;900', typ: 'This is the total revenue earned (&#163;450 &#215; 2 suppliers... incorrect calculation of revenue)', rev: 'Producer surplus is price MINUS minimum acceptable price, not total revenue' },
          { ped: '&#163;250', typ: 'This is only Supplier A\'s surplus &#8212; the other two suppliers also earn surplus', rev: 'Add up all three suppliers\' surplus' },
          { ped: '&#163;1,350', typ: 'This is total revenue (&#163;450 &#215; 3) &#8212; not producer surplus', rev: 'Producer surplus = price minus minimum acceptable price for each unit' }
        ],
        ans: 0,
        exp: 'Producer surplus = sum of (market price &#8722; minimum acceptable price) for all units sold. Supplier A: &#163;450&#8722;&#163;200 = <strong>&#163;250</strong>. Supplier B: &#163;450&#8722;&#163;300 = <strong>&#163;150</strong>. Supplier C: &#163;450&#8722;&#163;400 = <strong>&#163;50</strong>. Total = <strong>&#163;450</strong>. If the price rises to &#163;500, each supplier\'s surplus rises by &#163;50 (and potentially a new supplier with minimum acceptable price of &#163;460&#8211;&#163;500 might enter). If the price falls to &#163;350, Supplier C exits (minimum price &#163;400 > &#163;350) and total surplus falls. This illustrates the profit-motive mechanism: entry and exit respond to changes in producer surplus.'
      },

      /* 5 &#8212; Multi-select: causes of leftward supply shift */
      { type: 'multi_select',
        stem: 'Which of the following would cause the supply curve for <strong>new cars</strong> to shift <strong>leftward</strong> (decrease in supply)?',
        opts: [
          'A sharp rise in the price of steel (a key input to car manufacturing)',
          'A new government regulation requiring all new cars to meet stricter emissions standards, raising production costs',
          'A technological improvement enabling robots to assemble cars more efficiently',
          'The price of new cars rises following increased consumer demand',
          'A global semiconductor shortage limits the supply of components needed for car production',
          'Several major car manufacturers close UK factories and relocate abroad'
        ],
        correct: [0, 1, 4, 5],
        exp: 'Options A, B, D, and F shift car supply <strong>leftward</strong>: higher steel prices raise input costs; stricter emissions regulations add compliance costs; semiconductor shortage limits production; factory closures reduce the number of producers. Option C (technology improvement) shifts supply <strong>rightward</strong> &#8212; lower cost per unit at every output level. Option D (price of new cars rises) is a movement <strong>along</strong> the supply curve, not a shift &#8212; a price change causes an extension of quantity supplied, not a shift. This mirrors the demand side: always check whether it is a price change (movement along) or a non-price change (shift).'
      },

      /* 6 &#8212; Diagnostic pair: supply-side analysis */
      { type: 'diagnostic_pair',
        stem: 'Exam question: <em>"Analyse why UK housing supply has failed to keep pace with housing demand over the past 20 years."</em> Which student demonstrates stronger analysis?',
        students: [
          { name: 'Anna', badge: 'Candidate A',
            answer: 'UK housing supply is highly <strong>price inelastic</strong> (PES very low) due to structural constraints that prevent supply from responding adequately to rising prices. First, <strong>planning restrictions</strong>: the UK planning system requires local authority permission for new development; green belt protections and NIMBYism frequently delay or prevent new housing. Second, <strong>construction lead times</strong>: even with permission, building homes takes 2&#8211;4 years &#8212; so supply cannot respond quickly even if the price signal is strong. Third, <strong>land constraints</strong>: in high-demand areas (London, South East), suitable land is scarce and expensive; competition from commercial development limits residential supply. Fourth, <strong>speculative land banking</strong>: developers holding land without building reduces the supply response. The result: demand shifts from rising incomes, population growth, and low mortgage rates translate almost entirely into price rises rather than quantity increases &#8212; a classic consequence of very inelastic supply.'
          },
          { name: 'Dan', badge: 'Candidate B',
            answer: 'Housing supply has not kept up because it is very hard to build new houses in the UK. Planning permission is slow and sometimes refused. There are not enough construction workers. Land in cities is expensive. The government has tried to help but not enough houses are being built. As a result there are not enough houses for everyone and prices are high. If more houses were built then prices would come down. The main problem is the planning system which needs to be reformed.'
          }
        ],
        ans: 0,
        exp: '<strong>Anna</strong> gives the stronger answer. She introduces the economic concept of <strong>price elasticity of supply</strong> (PES) upfront, explaining what makes supply inelastic. She identifies four distinct, named supply constraints with precise detail (planning, lead times, land, land banking), and connects them back to the key analytical point: inelastic supply means demand shifts translate to price rather than quantity changes. Dan identifies the same practical issues but without the economic framework &#8212; no mention of PES, no mechanism connecting supply constraints to price outcomes. Anna accesses Level 4; Dan Level 2.'
      },

      /* 7 &#8212; Para fill: competing supply */
      { type: 'para_fill',
        stem: 'Complete the paragraph about competing supply.',
        anchor: 'Competing supply arises when the same resources can produce either of two goods.',
        para: 'Competing supply occurs when a factor of production &#8212; typically [1] &#8212; can be used to produce either of two alternative goods. A rise in the price of [2] Good A increases its [3] and causes producers to switch [4] resources from Good B to Good A. This reduces the [5] of Good B, shifting its supply curve [6]. The price of Good B consequently [7] as supply falls while demand is unchanged.',
        blanks: [
          { id: 1, opts: ['land', 'money', 'technology', 'infrastructure'], ans: 0 },
          { id: 2, opts: ['substitute', 'complement', 'inferior', 'joint'], ans: 0 },
          { id: 3, opts: ['profitability', 'demand', 'cost', 'regulation'], ans: 0 },
          { id: 4, opts: ['productive', 'financial', 'human', 'fixed'], ans: 0 },
          { id: 5, opts: ['supply', 'demand', 'price', 'quantity demanded'], ans: 0 },
          { id: 6, opts: ['leftward', 'rightward', 'upward along', 'downward along'], ans: 0 },
          { id: 7, opts: ['rises', 'falls', 'stays constant', 'becomes indeterminate'], ans: 0 }
        ],
        exp: '(1) <strong>Land</strong> is the classic competing supply factor &#8212; a farmer can grow wheat OR oilseed rape, not both on the same field. (2) <strong>Substitute</strong> is the key word for competing supply &#8212; the goods compete for the same resources. (3) Higher price increases <strong>profitability</strong>, drawing resources in. (4) <strong>Productive</strong> resources (land, labour, capital) are switched. (5) Supply of Good B <strong>falls</strong>. (6) Supply curve shifts <strong>leftward</strong> (decrease in supply). (7) With unchanged demand and lower supply, price of Good B <strong>rises</strong>. Example: if wheat prices rise, farmers switch land to wheat → rapeseed supply falls → rapeseed price rises.'
      },

      /* 8 &#8212; Odd one out: causes of rightward supply shift */
      { type: 'odd_one_out',
        stem: 'Three of these cause the supply curve for a manufactured good to shift <strong>rightward</strong>. Which is the <strong>odd one out</strong>?',
        items: [
          { icon: '&#128187;', label: 'A new automated assembly technology cuts unit production costs by 30%', note: '' },
          { icon: '&#128200;', label: 'The government introduces a production subsidy of &#163;500 per unit to support the industry', note: '' },
          { icon: '&#128665;', label: 'A substantial increase in the market price of the good incentivises firms to produce more', note: '' },
          { icon: '&#127970;', label: 'Twenty new overseas firms enter the UK market, expanding total industry capacity', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is a <strong>rise in the market price</strong>. A price rise causes an extension of quantity supplied &#8212; a movement <em>up</em> the existing supply curve &#8212; not a rightward shift of the curve. The other three are non-price changes that shift the entire supply curve rightward: new technology lowers cost per unit; a production subsidy effectively reduces firms\' costs; new entrants expand total market supply. When answering supply questions, always ask: "Did the good\'s own price change? Yes → movement along. No → possible shift."'
      },

      /* 9 &#8212; Data table: supply shocks */
      { type: 'data_table',
        stem: 'The table shows data on UK energy supply and prices around the 2021&#8211;2022 energy crisis.',
        headers: ['Indicator', 'Q4 2020', 'Q4 2021', 'Q4 2022'],
        rows: [
          ['UK wholesale gas price (p/therm)', '50', '250', '400'],
          ['UK electricity generation from gas (%)', '38%', '36%', '32%'],
          ['UK household energy bill (avg, &#163;/yr)', '1,100', '1,800', '2,500'],
          ['New renewable energy capacity added (GW)', '3.2', '3.8', '4.5'],
          ['UK gas production from North Sea (bcm)', '40', '38', '35']
        ],
        question: 'Which interpretation of the supply data is <strong>most consistent with economic theory</strong>?',
        opts: [
          'Surging wholesale gas prices (a rightward shift in the cost curve for energy suppliers) shifted the household energy supply curve leftward, raising equilibrium prices; simultaneously, declining North Sea production reduced supply further &#8212; consistent with a negative supply shock',
          'Higher gas prices caused a leftward shift in gas demand, which is why household bills rose &#8212; the supply side played no role',
          'The rise in renewable capacity fully offset the gas supply shock, leaving household energy prices unchanged in 2022',
          'North Sea gas production data is irrelevant to household energy bills because the UK imports most of its gas from overseas'
        ],
        ans: 0,
        exp: 'The data show a clear negative supply shock: wholesale gas prices surged 700% (50p to 400p/therm), representing a massive increase in the key input cost for energy suppliers &#8212; shifting the household energy supply curve leftward and raising equilibrium prices. Declining North Sea production (40→35 bcm) reduced domestic supply further. New renewables added capacity but too slowly to offset the gas shock (generation share actually fell). Option B incorrectly attributes the bill rise to demand &#8212; the shock was supply-side. Option C is refuted by the bill data (&#163;1,100 to &#163;2,500). Option D is too strong &#8212; North Sea production affects domestic supply and prices at the margin.'
      },

      /* 10 &#8212; Chain: supply-side improvement to new equilibrium */
      { type: 'chain',
        stem: 'A major technological breakthrough significantly reduces the cost of producing electric vehicles in the UK. Place the following events in the correct order.',
        items: [
          { label: 'EV prices fall as firms compete on price to attract the expanded demand', note: '' },
          { label: 'Production costs per EV fall substantially', note: '' },
          { label: 'New firms enter the EV market attracted by profit opportunities from higher output', note: '' },
          { label: 'The supply curve for EVs shifts rightward &#8212; more EVs supplied at every price level', note: '' },
          { label: 'EV market reaches a new equilibrium with lower price and higher output', note: '' },
          { label: 'Existing EV manufacturers earn higher profits as cost reductions widen margins', note: '' }
        ],
        correctOrder: [1, 3, 5, 2, 0, 4],
        exp: '<strong>The correct sequence:</strong><br>1. Technology reduces production costs (the supply-side shock).<br>2. Supply curve shifts rightward (more supplied at every price).<br>3. Existing firms earn higher profits (wider margin at existing price).<br>4. New firms enter, attracted by profit opportunities &#8212; incentive function of the price mechanism.<br>5. Competition drives prices down as supply expands.<br>6. New equilibrium: lower price, higher quantity.<br><br>This illustrates the profit motive and competitive entry working together. In perfect competition, entry continues until profits are driven to zero (long-run equilibrium). In practice, intellectual property protections may sustain profits for the innovating firm for some time.'
      }

    ]
  };

})();
