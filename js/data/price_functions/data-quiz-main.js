(function () {

  window.ECONOS_QUIZ = {
    id:       'price_functions_main',
    topicId:  'price_functions_main',
    title:    'Functions of the Price Mechanism',
    subtitle: 'Theme 1 &middot; Topic 2.7 &middot; Edexcel A-Level',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-style questions covering the signalling, incentive, and rationing functions of prices, Hayek\'s dispersed knowledge argument, the entrepreneur\'s role, transmission of price signals through supply chains, and how market failures break down each price function. Mixed formats targeted at analysis and evaluation marks.',
    shortNames: {
      'price_functions_1': 'Prices as signals',
      'price_functions_2': 'Prices as incentives',
      'price_functions_3': 'Prices as rationing',
      'price_functions_4': 'Signal transmission',
      'price_functions_5': 'Entrepreneurship',
      'price_functions_6': 'When prices fail',
      'price_functions_7': 'Price vs government'
    },

    questions: [

      /* 1 — MCQ: Hayek and dispersed knowledge */
      { type: 'mcq',
        stem: 'Friedrich Hayek argued that the price system is superior to central planning primarily because:',
        opts: [
          'Prices aggregate dispersed knowledge held by millions of individuals &#8212; knowledge that no central planner could collect or process efficiently',
          'Prices are always set at the socially optimal level, ensuring allocative efficiency is achieved automatically in all markets',
          'Central planners deliberately suppress prices to benefit powerful interest groups, making markets politically superior',
          'Price signals respond only to short-run changes in supply and demand, whereas planners can take a long-run view'
        ],
        ans: 0,
        exp: 'Hayek\'s central insight is <strong>epistemological</strong>: relevant economic knowledge is dispersed across millions of people &#8212; local conditions, personal preferences, firm-specific costs, upcoming harvests. No central authority can access or process this information as efficiently as the price system, which aggregates it into a single number. When a commodity becomes scarce anywhere in the world, its price rises globally, signalling scarcity to all producers and consumers simultaneously &#8212; without any of them needing to understand why. This is Hayek\'s <em>knowledge problem</em>. It explains why Soviet-style central planning produced chronic shortages: planners lacked the dispersed information that prices automatically aggregate.'
      },

      /* 2 — elastic_sort: which function of price? */
      { type: 'elastic_sort',
        stem: 'Classify each example according to which <strong>function of the price mechanism</strong> it primarily illustrates.',
        categories: ['signal', 'incentive', 'rationing'],
        categoryLabels: ['Signalling function', 'Incentive function', 'Rationing function'],
        goods: [
          { icon: '&#128185;', label: 'A sharp rise in house prices communicates that housing is increasingly scarce relative to demand', note: '', ans: 'signal' },
          { icon: '&#127973;', label: 'New property developers enter the market attracted by high profit margins', note: '', ans: 'incentive' },
          { icon: '&#127968;', label: 'Only households who can afford the market price are able to purchase a home', note: '', ans: 'rationing' },
          { icon: '&#128201;', label: 'A rise in oil prices prompts investment in alternative energy R&amp;D', note: '', ans: 'incentive' },
          { icon: '&#127807;', label: 'After a drought, wheat becomes scarce &#8212; the price rise tells farmers and buyers that supply has tightened', note: '', ans: 'signal' },
          { icon: '&#128652;', label: 'Limited concert tickets go to those willing to pay the highest price', note: '', ans: 'rationing' }
        ],
        exp: '<strong>Signalling:</strong> price changes communicate information about relative scarcity &#8212; price rises signal scarcer resources; price falls signal oversupply. <strong>Incentive:</strong> price changes motivate responses &#8212; high profits attract new entrants; high oil prices incentivise clean energy investment. <strong>Rationing:</strong> prices allocate scarce goods among competing buyers &#8212; only those willing and able to pay access the good. All three functions must work simultaneously for efficient resource allocation. When one fails (e.g. externalities distort signalling; monopoly distorts incentives), the market produces an inefficient outcome.'
      },

      /* 3 — diagram_interp: price signal transmission */
      { type: 'diagram_interp',
        stem: 'A drought in Argentina severely reduces the global wheat harvest.',
        svg: '<svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg" style="font-family:Inter,sans-serif"><line x1="55" y1="20" x2="55" y2="280" stroke="#0B1426" stroke-width="2"/><line x1="55" y1="280" x2="400" y2="280" stroke="#0B1426" stroke-width="2"/><text x="42" y="22" fill="#0B1426" font-size="12" text-anchor="end" font-weight="700">P</text><text x="398" y="295" fill="#0B1426" font-size="12" font-weight="700">Q</text><line x1="350" y1="40" x2="100" y2="270" stroke="#1FB574" stroke-width="2.5"/><text x="355" y="40" fill="#1FB574" font-size="12" font-weight="700">S1</text><line x1="280" y1="40" x2="55" y2="255" stroke="#1FB574" stroke-width="2.5" stroke-dasharray="6,4"/><text x="285" y="40" fill="#1FB574" font-size="12" font-weight="700">S2</text><line x1="80" y1="50" x2="390" y2="265" stroke="#2563EB" stroke-width="2.5"/><text x="393" y="265" fill="#2563EB" font-size="12" font-weight="700">D</text><circle cx="215" cy="165" r="5" fill="#F5B800"/><circle cx="168" cy="130" r="5" fill="#EC2D68"/><text x="220" y="160" fill="#F5B800" font-size="11" font-weight="700">E1</text><text x="173" y="125" fill="#EC2D68" font-size="11" font-weight="700">E2</text></svg>',
        caption: 'Wheat market: S1 is original supply; S2 is supply after the drought. E1 is original equilibrium; E2 is new equilibrium.',
        question: 'In a well-functioning price mechanism, what sequence of responses does the price rise at E2 set in motion?',
        opts: [
          'The price rise signals scarcity, incentivises farmers in other regions to expand planting, and rations existing wheat among the highest-value uses &#8212; all three price functions operating simultaneously',
          'The price rise leads the government to immediately impose a price ceiling to prevent consumer hardship, replacing the price mechanism with administrative rationing',
          'The price rise has no effect because consumers of wheat have perfectly inelastic demand and cannot reduce consumption or switch to substitutes',
          'The price rise only rations existing supply &#8212; it cannot signal or incentivise anything because producers already know there is a shortage'
        ],
        ans: 0,
        exp: 'The price rise at E2 activates all three price functions simultaneously. <strong>Signal</strong>: higher wheat price communicates scarcity to all market participants worldwide &#8212; bakers, food manufacturers, competing grain markets, all respond. <strong>Incentive</strong>: higher price raises profit for wheat farmers globally &#8212; farmers in the US, Australia, and EU switch more land to wheat next season. Long-run: supply shifts back right as more is planted. <strong>Rationing</strong>: the higher price excludes lower-value uses of wheat, directing scarce supply to highest-value applications. Each function is essential &#8212; remove one (e.g. a price ceiling prevents rationing) and the system jams. Option B describes government intervention &#8212; but at the cost of suppressing the signal and incentive functions, leading to persistent shortage.'
      },

      /* 4 — multi_select: when price mechanism fails */
      { type: 'multi_select',
        stem: 'Which of the following represent situations where the <strong>price mechanism fails</strong> to allocate resources efficiently, and why?',
        opts: [
          'Carbon emissions: the private cost of burning fossil fuels excludes the external cost to third parties (climate), so price signals understate true social cost',
          'National defence: non-excludability means no private firm can charge consumers, so no profit signal exists and market supply is zero',
          'Competitive supermarkets selling branded breakfast cereals: prices rise and fall freely, allocating goods efficiently',
          'Used car sales where sellers know the quality of their car but buyers do not: information asymmetry causes market prices to fail to reflect true quality',
          'A monopoly supplier of water setting price above marginal cost: market power distorts the price signal, reducing consumption below the efficient level',
          'A government-run railway charging below-cost fares: this is market failure because prices are not covering the full social cost of rail provision'
        ],
        correct: [0, 1, 3, 4],
        exp: 'Market failure occurs when prices fail to signal, incentivise, or ration correctly. (A) <strong>Externality</strong>: price excludes social cost &#8212; the signalling function is distorted. (B) <strong>Public good</strong>: non-excludability destroys the profit signal &#8212; the incentive function cannot operate. (D) <strong>Information asymmetry</strong>: prices cannot distinguish quality &#8212; Akerlof\'s lemons problem. (E) <strong>Monopoly power</strong>: P &gt; MC distorts the price signal &#8212; price overstates scarcity; consumers buy less than optimal. Option C describes a <em>functioning</em> market (competitive, private good, no externalities). Option F describes a <em>government policy choice</em> (subsidised public transport), not market failure per se &#8212; the government has chosen to underprice for social reasons.'
      },

      /* 5 — para_fill: entrepreneurship and price mechanism */
      { type: 'para_fill',
        stem: 'Complete the paragraph about entrepreneurship and the price mechanism.',
        anchor: 'The price mechanism requires entrepreneurs to convert price signals into real output.',
        para: 'When demand rises and prices increase, the resulting [1] profit acts as a signal attracting [2] into the market. The entrepreneur [3] risk by combining factors of production to supply new output. Schumpeter described this as [4] destruction &#8212; the process by which entrepreneurs create new products while displacing existing ones. Without the entrepreneur, price signals remain unacted upon &#8212; the [5] function of the price mechanism fails. This is why countries with high [6] to entry (corruption, excessive regulation, poor property rights) fail to respond efficiently to price signals, even when those signals are correct.',
        blanks: [
          { id: 1, opts: ['abnormal', 'normal', 'subnormal', 'consumer'], ans: 0 },
          { id: 2, opts: ['new entrants', 'governments', 'regulators', 'workers'], ans: 0 },
          { id: 3, opts: ['bears', 'avoids', 'transfers', 'reduces'], ans: 0 },
          { id: 4, opts: ['creative', 'financial', 'industrial', 'price'], ans: 0 },
          { id: 5, opts: ['incentive', 'signalling', 'rationing', 'rationing'], ans: 0 },
          { id: 6, opts: ['barriers', 'subsidies', 'incentives', 'signals'], ans: 0 }
        ],
        exp: '(1) <strong>Abnormal</strong> profit: profit above the normal return &#8212; the specific signal that alerts entrepreneurs to under-supplied markets. (2) <strong>New entrants</strong>: the incentive function relies on entry to expand supply toward the equilibrium. (3) <strong>Bears</strong>: risk-bearing is the defining characteristic of the entrepreneur &#8212; they commit resources before knowing the outcome. (4) <strong>Creative</strong> destruction (Schumpeter): new products and firms destroy old ones &#8212; the dynamic efficiency driver of market economies. (5) <strong>Incentive</strong> function: without entrepreneurs acting on profit signals, the incentive to expand supply cannot materialise. (6) <strong>Barriers</strong> to entry: regulatory barriers, corruption, and poor property rights prevent entrepreneurs from responding to price signals &#8212; explaining why some economies fail to grow despite price signals being present.'
      },

      /* 6 — odd_one_out: rationing vs other functions */
      { type: 'odd_one_out',
        stem: 'Three of these examples illustrate the <strong>rationing function</strong> of the price mechanism. Which is the ODD ONE OUT?',
        items: [
          { icon: '&#127968;', label: 'Scarce London flats allocated to the highest bidder at auction', note: '' },
          { icon: '&#127944;', label: 'Oversubscribed concert tickets sold at face value with a queue that forms overnight', note: '' },
          { icon: '&#128137;', label: 'Organ transplants allocated by medical urgency score, not price', note: '' },
          { icon: '&#127813;', label: 'Restaurant tables allocated to those paying the most for prime Saturday night slots', note: '' }
        ],
        ans: 1,
        exp: 'The odd one out is the <strong>overnight queue for concert tickets</strong>. When tickets are sold at face value below the market-clearing price, the price mechanism is NOT rationing &#8212; instead, time (queuing) rations the good. This is precisely what happens when a price ceiling is set below equilibrium: excess demand results in queuing rather than price rationing. The flat auction, restaurant pricing, and organ donation (by urgency, not price) all illustrate <em>alternative</em> rationing mechanisms. Note: organ donation illustrates the equity argument <em>against</em> price rationing &#8212; healthcare and life-saving goods are commonly rationed by need rather than willingness to pay. Concert ticket queuing is a common real-world example of non-price rationing.'
      },

      /* 7 — mcq: price ceiling consequences */
      { type: 'mcq',
        stem: 'A government imposes a <strong>price ceiling</strong> on rented accommodation below the market-clearing price. Which consequence is the direct result of disrupting the price mechanism\'s rationing function?',
        opts: [
          'Excess demand for rental properties &#8212; more households want to rent than there are properties available at the controlled price, leading to waiting lists and non-price rationing',
          'The supply of rental accommodation increases rapidly as landlords compete to attract tenants at the lower controlled price',
          'House prices for owner-occupied properties fall proportionally, as the markets are substitutes',
          'The signal function is enhanced &#8212; more accurate information about housing scarcity is transmitted to potential landlords and developers'
        ],
        ans: 0,
        exp: 'A price ceiling below equilibrium prevents the price from rising to clear the market. The <strong>rationing function fails</strong>: price can no longer exclude excess demand. The result is persistent <em>excess demand</em> (shortage) &#8212; more households want to rent at the controlled price than there are properties available. Non-price rationing replaces price rationing: queuing, waiting lists, landlord preferences, and black markets emerge. The signalling and incentive functions are also damaged: the suppressed price signals that housing is <em>less</em> scarce than it truly is (wrong signal), and removes the profit incentive for developers to build or landlords to maintain properties (weakened incentive). This is why economists are generally sceptical of rent controls as a long-run housing affordability policy.'
      },

      /* 8 — data_table: market self-correction */
      { type: 'data_table',
        stem: 'The table shows data for the UK lithium market as demand for EV batteries surged.',
        headers: ['Year', 'Lithium price (&#163;/tonne)', 'Global production (000 tonnes)', 'New mine projects approved'],
        rows: [
          ['2019', '9,000', '77', '3'],
          ['2020', '6,000', '82', '1'],
          ['2021', '17,000', '100', '8'],
          ['2022', '65,000', '130', '24'],
          ['2023', '28,000', '180', '18']
        ],
        question: 'Which interpretation of the data best illustrates how the price mechanism functions?',
        opts: [
          'The 2021&#8211;22 price spike signalled severe scarcity; this activated the incentive function, attracting new mine investment; rising supply then caused prices to fall back &#8212; a textbook price mechanism at work',
          'The data show that lithium prices are entirely driven by speculation and bear no relationship to underlying supply and demand fundamentals',
          'Government intervention was responsible for the price rises &#8212; without regulation, prices would have remained stable',
          'The price fall in 2023 indicates market failure &#8212; prices should not fall once they have risen because this discourages investment'
        ],
        ans: 0,
        exp: 'The data illustrate the price mechanism functioning across all three roles. <strong>Signal</strong>: the 7-fold price rise (&#163;9,000 to &#163;65,000) communicated extreme scarcity driven by EV demand. <strong>Incentive</strong>: mine project approvals surged from 3 to 24 &#8212; entrepreneurs responded to the profit signal by committing capital. <strong>Rationing</strong>: the high price rationed limited lithium supply to highest-value uses (EV manufacturers who could absorb the cost). <strong>Self-correction</strong>: rising supply (77 → 180 thousand tonnes) caused prices to fall back to &#163;28,000 by 2023 &#8212; not a failure, but the incentive function working: as supply expanded, abnormal profit fell, reducing the price. This is exactly how Adam Smith\'s \'invisible hand\' operates over time.'
      },

      /* 9 — multi_select: evaluation of the price mechanism */
      { type: 'multi_select',
        stem: 'A student is writing a 25-mark essay assessing whether the price mechanism is the most efficient way to allocate resources. Which of the following statements demonstrate <strong>evaluation</strong> &#8212; as opposed to description or one-sided analysis?',
        opts: [
          'The price mechanism uses the signalling, incentive, and rationing functions to allocate resources efficiently through supply and demand.',
          'The price mechanism is the most efficient allocator for private goods with no externalities &#8212; where prices fully reflect social costs and benefits &#8212; but this condition fails in a substantial proportion of a modern economy (carbon, healthcare, national defence), so the scope of its efficiency claim is narrower than free-market advocates often suggest.',
          'Hayek\'s dispersed knowledge argument strengthens the case for price allocation over central planning: the price system aggregates local information no planner could collect, but this advantage is eroded precisely when prices send systematically wrong signals &#8212; as with negative externalities &#8212; meaning the knowledge advantage and the signal-distortion problem must be weighed together rather than treated as a universal case for markets.',
          'The price mechanism fails in the case of public goods because non-excludability means no firm can charge consumers, so the market provides zero output.',
          'Price rationing allocates goods to those with the highest willingness to pay, which is efficient in the economic sense but does not maximise social welfare if willingness to pay is determined by income rather than genuine benefit &#8212; making the equity-efficiency trade-off a limitation that cannot be dismissed as irrelevant to the overall assessment.',
          'The price mechanism is always better than government intervention because governments make mistakes and have less information than markets.'
        ],
        correct: [1, 2, 4],
        exp: '<strong>Option A</strong> is description: it names the three functions and states the mechanism but makes no evaluative claim about when this holds, when it fails, or how to weigh competing considerations. <strong>Option B</strong> is strong evaluation: it begins with a conditional statement of efficiency (price mechanism is best when prices reflect social costs), then immediately qualifies the scope with evidence of how often that condition fails, reaching the conclusion that the efficiency claim is narrower than often claimed. This is a directional, qualified evaluation. <strong>Option C</strong> is evaluation: it takes Hayek\'s argument seriously (acknowledges the knowledge advantage), then identifies the condition under which it weakens (when prices are distorted by externalities), and derives the conclusion that both sides must be weighed simultaneously. This converts the Hayek argument from a one-sided case into a conditional one. <strong>Option D</strong> is description of a market failure mechanism &#8212; no evaluative move about when government provision is superior or inferior to alternative corrections. <strong>Option E</strong> is evaluation: it distinguishes economic efficiency from social welfare using the equity argument (willingness to pay &#x2260; benefit when income is unequal), and states explicitly that this limitation cannot be dismissed &#8212; a normative evaluative judgement about the completeness of the efficiency criterion. <strong>Option F</strong> is one-sided overclaiming: it asserts market superiority categorically while ignoring the well-documented cases of market failure. "Governments make mistakes" is true but symmetric &#8212; markets also fail &#8212; so this statement is unbalanced advocacy, not evaluation.'
      },

      /* 10 — chain: market self-correction sequence */
      { type: 'chain',
        stem: 'A new technology suddenly makes electric vehicle batteries much cheaper, dramatically increasing EV demand. Place the market responses in the correct logical order.',
        items: [
          { label: 'Car manufacturers expand EV production lines; new EV firms enter the market attracted by abnormal profits', note: '' },
          { label: 'Consumer demand for petrol-powered vehicles falls as EVs become relatively cheaper', note: '' },
          { label: 'EV prices fall back toward normal profit level as competition increases supply', note: '' },
          { label: 'Battery technology reduces EV costs sharply &#8212; EV prices fall; EV demand rises strongly', note: '' },
          { label: 'EV prices rise and abnormal profits emerge &#8212; signalling the under-supply of EVs', note: '' },
          { label: 'Petrol car manufacturers face losses; some exit or pivot to EV production &#8212; resources reallocated', note: '' }
        ],
        correctOrder: [3, 4, 0, 2, 1, 5],
        exp: '<strong>The correct sequence:</strong><br>1. Battery cost falls → EV prices fall → demand rises (initial shock).<br>2. Initial demand surge creates excess demand; EV prices rise → abnormal profit (signal function).<br>3. Abnormal profit attracts new entrants → production expands (incentive function).<br>4. Rising supply restores equilibrium; prices fall back (rationing function resolves).<br>5. EV penetration cuts petrol car demand (cross-market transmission).<br>6. Petrol firms face losses; capital and labour reallocated to EV sector (long-run adjustment).<br><br>This sequence illustrates all three price functions operating in cascade. The <em>signal</em> (price) motivates the <em>incentive</em> (entry), which restores the <em>rationing</em> balance, while cross-market signals reallocate capital from the declining petrol sector. This is the price mechanism functioning as Adam Smith described &#8212; decentralised, self-correcting, efficient.'
      }

    ]
  };

})();
