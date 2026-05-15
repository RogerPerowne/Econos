(function () {

  window.ECONOS_QUIZ = {
    id:       'unstable_markets_main',
    topicId:  'unstable_markets_main',
    title:    'Unstable Commodity Markets',
    subtitle: 'Theme 1.22 \xb7 Edexcel A-Level',
    sessionLabel: 'Session 1 of 3: Learn',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-style questions covering why commodity markets are volatile, the cobweb model, buffer stock mechanisms and failures (International Tin Agreement), OPEC, futures markets, and evaluation of price stabilisation schemes. Mixed formats test calculation, diagram analysis, and evaluative depth.',
    shortNames: {
      'unstable_markets_1': 'Why volatile',
      'unstable_markets_2': 'Cobweb model',
      'unstable_markets_3': 'Consequences',
      'unstable_markets_4': 'Buffer stocks',
      'unstable_markets_5': 'Buffer stock failures',
      'unstable_markets_6': 'Alternatives',
      'unstable_markets_7': 'Global commodity markets'
    },

    questions: [

      /* 1 — mcq: why commodities are volatile */
      { type: 'mcq',
        stem: 'A sudden drought reduces UK wheat supply by 15%. Given that the price elasticity of demand for wheat is &minus;0.2 and the short-run price elasticity of supply is 0.3, which calculation most accurately estimates the resulting price rise?',
        opts: [
          'Approximately 30%: using the formula % price change &#8776; % supply change &#247; (|PED| + PES) = 15 &#247; 0.5 = 30%',
          'Approximately 15%: price rises by the same percentage as the supply fall',
          'Approximately 3%: price rises only slightly because consumers switch to other goods',
          'Approximately 75%: price rises far exceed the supply fall because demand is zero'
        ],
        ans: 0,
        exp: 'The formula for commodity price volatility: <strong>% price change &#8776; % supply change &#247; (|PED| + PES)</strong>. Here: 15 &#247; (0.2 + 0.3) = 15 &#247; 0.5 = <strong>30%</strong>. The small sum of elasticities (0.5) means any supply shock produces a price change approximately twice as large. This is why commodity prices are so volatile: inelastic demand (necessities that consumers cannot easily substitute away from) combined with inelastic supply (seasonal production, fixed capacity) means tiny quantity changes translate into large price swings. This formula is a high-value exam tool for analysing commodity instability.'
      },

      /* 2 — diagram_interp: cobweb */
      { type: 'diagram_interp',
        stem: 'In a wheat market, farmers base next season\'s planting decisions on this season\'s price. Last season was a good harvest: price fell to P1 (low). Farmers respond by planting less this season.',
        svg: '<svg viewBox="0 0 420 340" xmlns="http://www.w3.org/2000/svg" style="font-family:Inter,sans-serif"><line x1="55" y1="20" x2="55" y2="300" stroke="#0B1426" stroke-width="2"/><line x1="55" y1="300" x2="400" y2="300" stroke="#0B1426" stroke-width="2"/><text x="42" y="22" fill="#0B1426" font-size="12" text-anchor="end" font-weight="700">P</text><text x="398" y="318" fill="#0B1426" font-size="12" font-weight="700">Q</text><line x1="80" y1="260" x2="370" y2="80" stroke="#2563EB" stroke-width="2.5"/><text x="373" y="82" fill="#2563EB" font-size="12" font-weight="700">D</text><line x1="80" y1="80" x2="370" y2="260" stroke="#1FB574" stroke-width="2.5"/><text x="373" y="260" fill="#1FB574" font-size="12" font-weight="700">S</text><circle cx="225" cy="170" r="5" fill="#0B1426"/><text x="228" y="168" fill="#0B1426" font-size="10" font-weight="700">E*</text><line x1="55" y1="240" x2="140" y2="240" stroke="#F5B800" stroke-width="2"/><line x1="140" y1="240" x2="140" y2="122" stroke="#F5B800" stroke-width="2"/><line x1="140" y1="122" x2="302" y2="122" stroke="#F5B800" stroke-width="2"/><line x1="302" y1="122" x2="302" y2="218" stroke="#F5B800" stroke-width="2"/><text x="38" y="244" fill="#F5B800" font-size="10" text-anchor="end" font-weight="700">P1</text><text x="38" y="126" fill="#F5B800" font-size="10" text-anchor="end" font-weight="700">P2</text></svg>',
        caption: 'E* = long-run equilibrium. P1 = low price in period 1 (good harvest). P2 = high price in period 2 (farmers reduced planting in response to P1).',
        question: 'Which description of the cobweb mechanism is correct?',
        opts: [
          'Low price P1 causes farmers to plant less; next season supply falls; with inelastic demand, price rises sharply to P2; high P2 causes farmers to plant more; oscillations continue &mdash; converging if supply is more elastic than demand',
          'Low price P1 increases consumer demand because goods are cheaper; this pushes price back up to equilibrium E* immediately; no cobweb occurs',
          'The cobweb is always divergent in agricultural markets; prices never converge to equilibrium because supply is always more inelastic than demand',
          'The cobweb only occurs when the government intervenes in agricultural markets; free markets always converge instantly to equilibrium'
        ],
        ans: 0,
        exp: 'The cobweb arises from the <strong>production lag</strong>: farmers cannot instantly adjust output once planting decisions are made. Low P1 &rarr; farmers reduce next season\'s acreage &rarr; supply falls &rarr; with inelastic demand, price spikes to P2 &rarr; high P2 signals plant more &rarr; supply surplus &rarr; price falls below equilibrium. <strong>Convergent cobweb</strong>: if the supply curve is more elastic than demand (flatter supply), oscillations shrink toward E*. <strong>Divergent cobweb</strong>: if supply is steeper (less elastic), oscillations grow. In practice, most agricultural cobwebs are convergent or bounded by other factors (storage, imports).'
      },

      /* 3 — elastic_sort: classify consequences */
      { type: 'elastic_sort',
        stem: 'Classify each consequence of commodity price volatility as affecting primarily <strong>consumers</strong> or primarily <strong>producers</strong>.',
        categories: ['consumers', 'producers'],
        categoryLabels: ['Primarily harms consumers', 'Primarily harms producers'],
        goods: [
          { icon: '🍞', label: 'Food price spikes reduce real incomes for low-income households in developing countries', note: '', ans: 'consumers' },
          { icon: '📉', label: 'Commodity price crashes mean farmers receive less revenue despite high output in bumper years', note: '', ans: 'producers' },
          { icon: '🏗️', label: 'Volatile input costs make business planning impossible for food processors and manufacturers', note: '', ans: 'consumers' },
          { icon: '🌾', label: 'Uncertain future prices deter farmers from investing in irrigation and machinery improvements', note: '', ans: 'producers' },
          { icon: '🛒', label: 'Sudden price spikes require low-income families to cut spending on other essentials', note: '', ans: 'consumers' },
          { icon: '🌍', label: 'Commodity export-dependent countries face boom-bust fiscal cycles when prices collapse', note: '', ans: 'producers' }
        ],
        exp: '<strong>Consumer harms</strong>: food price spikes directly raise the cost of necessities (inelastic goods consume a high share of low-income budgets); volatile input costs are eventually passed on to final consumers; spending squeeze on other essentials. <strong>Producer harms</strong>: revenue volatility despite volume changes (Cobweb: in bumper years, the revenue = P &times; Q may actually fall if PED &lt; 1); investment disincentive from uncertain returns; macro instability for commodity export economies (Nigeria, Zambia, Brazil). Both groups are harmed, but by different channels and at different times in the commodity price cycle.'
      },

      /* 4 — multi_select: buffer stock mechanism */
      { type: 'multi_select',
        stem: 'Which statements about how a buffer stock scheme works are <strong>correct</strong>?',
        opts: [
          'In a year of abundant supply (price falls below the floor), the authority buys excess supply to prevent price falling below the floor',
          'In a year of scarce supply (price rises above the ceiling), the authority sells from reserves to prevent price rising above the ceiling',
          'The scheme requires no financial capital because sales in high-price years fund purchases in low-price years',
          'The price target band (floor to ceiling) must be set around the long-run equilibrium price for the scheme to be self-financing',
          'The authority can guarantee exactly the target price in all years because it can always buy or sell whatever is needed',
          'Storage costs are a significant ongoing cost of running a physical commodity buffer stock'
        ],
        correct: [0, 1, 3, 5],
        exp: 'Options A, B, D, and F are correct. <strong>A and B</strong> describe the core buying/selling mechanism. <strong>D</strong>: if the floor is set above the long-run equilibrium, the authority will chronically buy more than it sells (building unsustainable stockpiles). If the ceiling is below equilibrium, it will chronically sell more than it buys (depleting reserves). The scheme is only self-financing if the target range straddles the long-run equilibrium. <strong>F</strong>: storage of physical commodities (grain, butter, metals) involves significant warehousing, preservation, and spoilage costs. Option C is wrong: the scheme requires initial capital; imperfect timing can cause prolonged periods of buying without selling. Option E is wrong: financial capacity and physical storage are finite &mdash; the International Tin Agreement collapsed precisely because the authority ran out of funds.'
      },

      /* 5 — calculation: buffer stock cost */
      { type: 'calculation',
        context: 'A buffer stock authority holds a reserve of <strong>500,000 tonnes of grain</strong>. Storage costs are <strong>&#163;80 per tonne per year</strong>. In the current year, the authority must purchase an additional <strong>200,000 tonnes</strong> at a floor price of <strong>&#163;180 per tonne</strong> to prevent price falling below the floor. The reserve will be stored for an estimated <strong>2 years</strong> before sale.',
        working: [
          'Step 1: cost of purchasing additional grain',
          '200,000 \xd7 &#163;180 = &#163;36,000,000',
          'Step 2: total grain in storage after purchase',
          '500,000 + 200,000 = 700,000 tonnes',
          'Step 3: annual storage cost',
          '700,000 \xd7 &#163;80 = &#163;56,000,000 per year',
          'Step 4: total storage cost over 2 years',
          '&#163;56,000,000 \xd7 2 = &#163;112,000,000',
          'Step 5: total cost (purchase + storage)',
          '&#163;36m + &#163;112m = &#163;148,000,000'
        ],
        stem: 'What is the total cost to the buffer stock authority of purchasing and storing the grain over 2 years?',
        opts: [
          { ped: '&#163;148 million', typ: 'Purchase cost &#163;36m + Storage &#163;56m/yr \xd7 2 years &#163;112m = &#163;148m total.', rev: 'Sum purchase cost and total storage cost over the holding period' },
          { ped: '&#163;36 million', typ: 'Only counted the purchase cost; ignored storage costs', rev: 'Add storage cost: 700,000 tonnes \xd7 &#163;80/yr \xd7 2 years = &#163;112m' },
          { ped: '&#163;52 million', typ: 'Calculated storage only on the new 200,000 tonnes purchased, not total reserve', rev: 'Storage costs apply to the entire reserve (700,000 tonnes), not just new purchases' },
          { ped: '&#163;92 million', typ: 'Calculated correctly for 1 year only (&#163;36m + &#163;56m = &#163;92m)', rev: 'Storage continues for the full 2-year holding period: &#163;56m \xd7 2 = &#163;112m' }
        ],
        ans: 0,
        exp: 'Purchase cost: 200,000 &times; &#163;180 = <strong>&#163;36 million</strong>. Total storage after purchase: 700,000 tonnes. Annual storage: 700,000 &times; &#163;80 = &#163;56m. Over 2 years: &#163;56m &times; 2 = <strong>&#163;112 million</strong>. Total: <strong>&#163;148 million</strong>. This illustrates why storage costs are a major practical limitation of buffer stock schemes &mdash; especially for perishable commodities. The EU\'s infamous "butter mountains" and "grain mountains" under CAP price supports created exactly this problem: enormous stocks requiring expensive refrigeration and eventual disposal at below-market prices, representing a pure welfare loss.'
      },

      /* 6 — para_fill: International Tin Agreement */
      { type: 'para_fill',
        stem: 'Complete the analytical paragraph about the collapse of the International Tin Agreement.',
        anchor: 'The 1985 International Tin Agreement collapse is the defining case study of buffer stock failure.',
        para: 'The International Tin Council set a [1] price for tin and committed to buying tin whenever the market price fell below this level. The problem was that the floor was set [2] the long-run equilibrium price, meaning the authority was chronically buying more than it sold. Eventually, the authority ran out of [3] to fund further purchases and could no longer support the floor. When the floor [4], the tin price fell by approximately [5]% almost instantly &mdash; a dramatic overcorrection. This failure illustrates two key limitations of buffer stocks: first, the difficulty of correctly identifying the [6] equilibrium price; and second, that the financial [7] of any scheme is finite.',
        blanks: [
          { id: 1, opts: ['floor', 'ceiling', 'equilibrium', 'market'], ans: 0 },
          { id: 2, opts: ['above', 'below', 'at', 'near'], ans: 0 },
          { id: 3, opts: ['funds', 'storage', 'personnel', 'authority'], ans: 0 },
          { id: 4, opts: ['collapsed', 'rose', 'stabilised', 'doubled'], ans: 0 },
          { id: 5, opts: ['50', '10', '80', '25'], ans: 0 },
          { id: 6, opts: ['long-run', 'short-run', 'maximum', 'minimum'], ans: 0 },
          { id: 7, opts: ['capacity', 'justification', 'mandate', 'staffing'], ans: 0 }
        ],
        exp: '(1) <strong>Floor</strong>: minimum guaranteed price. (2) <strong>Above</strong>: the floor was set above the long-run equilibrium &mdash; chronic over-buying. (3) <strong>Funds</strong>: the authority ran out of money. (4) <strong>Collapsed</strong>: the floor was abandoned when funds were exhausted. (5) <strong>50%</strong>: tin prices fell approximately 50% when the floor collapsed. (6) <strong>Long-run</strong>: correctly identifying the long-run equilibrium is the central information challenge for buffer stock design. (7) <strong>Capacity</strong>: any buffer stock fund has finite capacity; sustained pressure in one direction exhausts either financial resources or physical reserves.'
      },

      /* 7 — odd_one_out */
      { type: 'odd_one_out',
        stem: 'Three of these are limitations of buffer stock schemes as price stabilisation mechanisms. Which is the ODD ONE OUT?',
        items: [
          { icon: '💸', label: 'High storage costs for physical commodities reduce the net benefit to producers and consumers', note: '' },
          { icon: '📊', label: 'Provides certainty over the price band within which commodity prices will remain, benefiting producers and consumers alike', note: '' },
          { icon: '🎯', label: 'Difficulty setting the floor and ceiling around the correct long-run equilibrium price creates chronic surplus or deficit', note: '' },
          { icon: '💰', label: 'Financial capacity is finite: sustained low prices can exhaust the authority\'s purchase funds, causing floor collapse', note: '' }
        ],
        ans: 1,
        exp: 'The odd one out is option B &mdash; price certainty is an <strong>advantage</strong> of buffer stock schemes, not a limitation. Stabilising prices within a band protects producers from ruinously low prices and consumers from unaffordable spikes &mdash; this is the entire justification for the scheme. Options A (storage costs), C (incorrect price target setting), and D (financial sustainability) are all genuine limitations that have caused real buffer stock schemes to fail. The International Tin Agreement exemplifies C and D; EU CAP grain mountains exemplify A. The value of option B as an advantage must be weighed against these limitations in any evaluation essay.'
      },

      /* 8 — diagnostic_pair */
      { type: 'diagnostic_pair',
        stem: 'Exam question: <em>"Evaluate buffer stock schemes as a method of stabilising agricultural commodity prices."</em> Which student gives the stronger answer?',
        students: [
          { name: 'Priya', badge: 'Candidate A',
            answer: 'Buffer stocks stabilise prices by buying in surplus years (preventing price falling below the floor) and selling in deficit years (preventing price rising above the ceiling). The economic case: price stability reduces income uncertainty for farmers (enabling long-run investment decisions) and protects low-income consumers from food price spikes. However, effectiveness depends critically on: (1) <strong>Correct target price</strong>: if the floor is above the long-run equilibrium, chronic buying accumulates unsustainable surpluses (EU CAP "butter mountains"). (2) <strong>Financial sustainability</strong>: the scheme requires sufficient capital for purchasing; the International Tin Agreement (1985) collapsed when the authority ran out of funds &mdash; causing a 50% price crash, worse than no scheme. (3) <strong>Storage costs</strong>: physical commodities are expensive to store; the net welfare gain may be small. Alternatives &mdash; commodity futures markets (private-sector hedging) or income stabilisation funds (Norway oil, Chile copper) &mdash; may be more sustainable. Overall: buffer stocks are theoretically sound but practically fragile; the poor historical track record (most international commodity agreements have failed) suggests the information and financial requirements are routinely underestimated.'
          },
          { name: 'Leon', badge: 'Candidate B',
            answer: 'Buffer stock schemes can help stabilise prices by buying surplus commodities when prices are low and selling them when prices are high. This helps both farmers who get a more stable income and consumers who get more stable food prices. The main problems are that storing commodities costs money and the scheme might run out of money if prices stay low for a long time. The EU had this problem with the Common Agricultural Policy where too much food was stored. In 1985, the International Tin Council went bankrupt when it could not keep buying tin at the floor price and prices crashed. So while buffer stocks are a good idea in theory they often fail in practice. Other approaches like futures markets let farmers sell at a fixed price in advance so they know what they will receive, but this takes away any upside if prices rise.'
          }
        ],
        ans: 0,
        exp: '<strong>Priya</strong> gives the stronger answer. She provides a clear analytical mechanism, identifies three specific conditions for effectiveness with labelled concepts (correct target price, financial sustainability, storage costs), uses two precise historical examples (CAP butter mountains, Tin Agreement 1985 with 50% price crash), introduces alternatives with specific real-world instances (Norway, Chile), and concludes with a conditional evaluation grounded in the historical record. Leon covers similar content narratively &mdash; his points are correct but lack the analytical framework and the evaluation is less structured. Priya accesses Level 4; Leon Level 3.'
      },

      /* 9 — data_table */
      { type: 'data_table',
        stem: 'The table shows global coffee prices and production data over four decades.',
        headers: ['Period', 'Average coffee price (US cents/lb)', 'Global production (million bags)', 'Key event'],
        rows: [
          ['1975&ndash;80', '150', '70', 'International Coffee Agreement active; price floors supported'],
          ['1985&ndash;90', '110', '80', 'ICA weakened; frost in Brazil causes price spike'],
          ['1995&ndash;2000', '70', '95', 'ICA collapsed 1989; Vietnamese production surge'],
          ['2005&ndash;10', '110', '125', 'Market recovery; rising Asian demand'],
          ['2018&ndash;22', '160', '175', 'Drought in Brazil; COVID supply disruptions']
        ],
        question: 'Which conclusion is best supported by the data?',
        opts: [
          'After the ICA collapsed in 1989, prices fell significantly (from 110 to 70 cents) despite rising production &mdash; consistent with the over-production predicted when price floor support was removed',
          'The International Coffee Agreement successfully eliminated all price volatility throughout the 1975&ndash;90 period',
          'Rising production from 1989 to 2022 proves that removing the ICA floor was correct because it incentivised more supply',
          'The 2018&ndash;22 price rise to 160 cents proves that buffer stock schemes are always necessary to prevent such price spikes'
        ],
        ans: 0,
        exp: 'Option A is best supported. The ICA collapsed in 1989; by the 1995&ndash;2000 period, prices fell from 110 to 70 cents per lb despite production growing from 80 to 95 million bags &mdash; consistent with the over-production theory: without a price floor, expansion into cheaper markets (especially Vietnam) drove prices below the sustainable level for many producers. Option B overstates: the ICA period still had volatility (Brazil frost). Option C confuses quantity growth with welfare &mdash; 70 cents/lb in 1995&ndash;2000 was widely considered below the cost of production for small-scale growers in Central America, causing widespread poverty. Option D over-generalises from one episode.'
      },

      /* 10 — chain: OPEC supply management */
      { type: 'chain',
        stem: 'OPEC manages oil production to stabilise (or raise) oil prices. Place the events in the correct logical order for an OPEC production cut cycle.',
        items: [
          { label: 'OPEC member states\' government revenues recover; fiscal positions improve', note: '' },
          { label: 'COVID-19 causes global oil demand to collapse; Brent crude falls below $20/barrel', note: '' },
          { label: 'Oil price rises as reduced supply meets recovering demand; market tightens', note: '' },
          { label: 'Some OPEC+ members face pressure to increase output as higher prices incentivise cheating on quotas', note: '' },
          { label: 'OPEC+ agrees production cuts of 9.7 million barrels/day &mdash; largest coordinated cut in history', note: '' },
          { label: 'Oil price collapse threatens fiscal stability of oil-dependent economies (Saudi Arabia, Nigeria, UAE)', note: '' }
        ],
        correctOrder: [1, 5, 4, 2, 0, 3],
        exp: '<strong>The correct sequence:</strong><br>1. COVID demand collapse &rarr; Brent falls below $20/barrel.<br>2. Fiscal threat to oil-dependent economies &mdash; the trigger for action.<br>3. OPEC+ agrees record 9.7mb/day cuts (April 2020).<br>4. Supply reduction meets recovering demand; price recovers.<br>5. Government revenues improve as price recovers.<br>6. Quota cheating incentives emerge at higher prices (cartel enforcement problem).<br><br>This sequence illustrates both OPEC\'s supply management mechanism and its structural weakness: when prices rise, individual members gain more by producing above quota. This free-rider problem within the cartel is why OPEC agreements are periodically difficult to sustain. It also illustrates the difference from buffer stocks: OPEC restricts new production rather than storing physical oil.'
      }

    ]
  };

})();
