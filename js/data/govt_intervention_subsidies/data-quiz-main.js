(function () {

  window.ECONOS_QUIZ = {
    id:       'govt_intervention_subsidies_main',
    topicId:  'govt_intervention_subsidies_main',
    title:    'Government Intervention: Subsidies',
    subtitle: 'Theme 1.18 \xb7 Edexcel A-Level',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-style questions covering how subsidies shift supply, the subsidy diagram, welfare effects, incidence, real-world UK examples (EVs, renewables, CAP), and evaluation of subsidies versus alternative policies. Formats test diagram analysis, calculation, and evaluative depth.',
    shortNames: {
      'govt_intervention_subsidies_1': 'How subsidies work',
      'govt_intervention_subsidies_2': 'Subsidy diagram',
      'govt_intervention_subsidies_3': 'Correcting externalities',
      'govt_intervention_subsidies_4': 'Real-world examples',
      'govt_intervention_subsidies_5': 'Evaluation',
      'govt_intervention_subsidies_6': 'Incidence',
      'govt_intervention_subsidies_7': 'Vs alternatives'
    },

    questions: [

      /* 1 — mcq: subsidy mechanism */
      { type: 'mcq',
        stem: 'A government introduces a <strong>producer subsidy</strong> of &#163;500 per electric vehicle sold. Which of the following correctly describes the immediate effect on the market?',
        opts: [
          'Supply increases (shifts right); equilibrium price falls; equilibrium quantity rises; consumer price falls but producer revenue per unit rises',
          'Demand increases (shifts right); equilibrium price rises; producers receive higher revenue but consumers pay more',
          'Supply decreases (shifts left); fewer EVs are produced at the original price; consumers face a shortage',
          'Both supply and demand shift rightward simultaneously; quantity rises but price is unchanged'
        ],
        ans: 0,
        exp: 'A <strong>producer subsidy</strong> reduces the effective cost of production by &#163;500 per unit. This shifts the supply curve <em>rightward</em> (increases supply). The new equilibrium is at a <strong>lower consumer price</strong> and a <strong>higher quantity</strong>. Producers receive the consumer price <em>plus</em> the subsidy, so their effective revenue per unit rises above what consumers pay. The subsidy is the mirror image of a tax: tax shifts supply left, raising price; subsidy shifts supply right, reducing price. The key insight is that the subsidy benefits are split between consumers (lower price) and producers (higher net revenue) according to relative price elasticities.'
      },

      /* 2 — diagram_interp: subsidy diagram */
      { type: 'diagram_interp',
        stem: 'The government subsidises solar panel installation. Before the subsidy: equilibrium at P1, Q1. After the subsidy (amount = s per unit): new equilibrium at P2, Q2. Consumers pay P2; installers receive P2 + s = P3.',
        svg: '<svg viewBox="0 0 420 320" xmlns="http://www.w3.org/2000/svg" style="font-family:Inter,sans-serif"><line x1="55" y1="20" x2="55" y2="280" stroke="#0B1426" stroke-width="2"/><line x1="55" y1="280" x2="400" y2="280" stroke="#0B1426" stroke-width="2"/><text x="42" y="22" fill="#0B1426" font-size="12" text-anchor="end" font-weight="700">P</text><text x="398" y="298" fill="#0B1426" font-size="12" font-weight="700">Q</text><line x1="80" y1="240" x2="360" y2="80" stroke="#2563EB" stroke-width="2.5"/><text x="363" y="80" fill="#2563EB" font-size="12" font-weight="700">D=MPB</text><line x1="80" y1="80" x2="370" y2="240" stroke="#1FB574" stroke-width="2.5"/><text x="373" y="240" fill="#1FB574" font-size="12" font-weight="700">S=MPC</text><line x1="80" y1="110" x2="370" y2="270" stroke="#EC2D68" stroke-width="2.5" stroke-dasharray="5,3"/><text x="373" y="270" fill="#EC2D68" font-size="12" font-weight="700">S-sub</text><circle cx="220" cy="160" r="5" fill="#0B1426"/><text x="225" y="158" fill="#0B1426" font-size="10">Q1,P1</text><circle cx="245" cy="148" r="5" fill="#F5B800"/><text x="248" y="146" fill="#F5B800" font-size="10">Q2,P2</text><line x1="55" y1="148" x2="245" y2="148" stroke="#0B1426" stroke-width="1" stroke-dasharray="3,3" opacity="0.5"/><line x1="55" y1="160" x2="220" y2="160" stroke="#0B1426" stroke-width="1" stroke-dasharray="3,3" opacity="0.5"/><line x1="55" y1="130" x2="245" y2="130" stroke="#EC2D68" stroke-width="1" stroke-dasharray="3,3" opacity="0.5"/><text x="38" y="132" fill="#EC2D68" font-size="10" text-anchor="end" font-weight="700">P3</text><text x="38" y="152" fill="#F5B800" font-size="10" text-anchor="end" font-weight="700">P2</text><text x="38" y="164" fill="#0B1426" font-size="10" text-anchor="end" font-weight="700">P1</text></svg>',
        caption: 'S = MPC (original supply). S-sub = subsidised supply curve. D = MPB. P3 = P2 + subsidy = price producers receive.',
        question: 'If solar panels generate a positive externality (MSB > MPB), which quantity most likely represents the <strong>socially optimal output</strong>?',
        opts: [
          'Q2 or beyond &mdash; the subsidy moves output toward Q* where MSB = MSC, correcting the under-production caused by the positive externality',
          'Q1 &mdash; the original equilibrium is the socially optimal output because it reflects the undistorted market price',
          'Zero &mdash; the market fails completely and only public provision can deliver the socially optimal amount',
          'Any quantity &mdash; positive externalities do not affect the socially optimal level of output'
        ],
        ans: 0,
        exp: 'A positive externality means MSB > MPB: the social benefit of each unit exceeds the private benefit. The free market equates MPB = MPC at Q1, but the social optimum is at Q* where MSB = MSC &mdash; which is <em>higher</em> than Q1. The subsidy shifts supply right, increasing quantity toward Q*. If the subsidy = MEB (marginal external benefit) at Q*, the market equilibrium coincides with the social optimum. Q2 (or some Q > Q1) represents the direction of the correction. The key insight: positive externalities cause under-production; subsidies correct by increasing output toward Q*.'
      },

      /* 3 — elastic_sort: classify subsidies */
      { type: 'elastic_sort',
        stem: 'Classify each UK policy as a <strong>producer subsidy</strong> (paid to the supplier) or a <strong>consumer subsidy</strong> (paid to or on behalf of the buyer).',
        categories: ['producer', 'consumer'],
        categoryLabels: ['Producer subsidy', 'Consumer subsidy'],
        goods: [
          { icon: '🌬️', label: 'Contracts for Difference: government guarantees a strike price to offshore wind farms', note: '', ans: 'producer' },
          { icon: '🚗', label: 'Plug-in Vehicle Grant: up to &#163;5,000 off the purchase price of a new EV for the buyer', note: '', ans: 'consumer' },
          { icon: '🌾', label: 'CAP area payments: direct payments per hectare to farmers regardless of output', note: '', ans: 'producer' },
          { icon: '🏫', label: 'Free school meals: government pays the school for meals given free to eligible pupils', note: '', ans: 'consumer' },
          { icon: '💊', label: 'R&D tax credits: pharmaceutical firms receive tax relief per &#163; spent on drug research', note: '', ans: 'producer' },
          { icon: '🏠', label: 'Help to Buy equity loan: government provides equity stake enabling buyer to purchase with smaller deposit', note: '', ans: 'consumer' }
        ],
        exp: '<strong>Producer subsidies</strong> reduce the cost of production or reward output directly: wind farm strike prices, CAP payments, R&D tax credits all go to the firm providing the good or service. <strong>Consumer subsidies</strong> reduce the cost to the buyer: the EV grant reduces the purchase price for the consumer; free school meals benefit the child and family; Help to Buy reduces the deposit burden on the buyer. The distinction matters: producer subsidies increase supply (shift S right); consumer subsidies increase effective demand (shift D right). Both raise equilibrium quantity but through different channels.'
      },

      /* 4 — calculation: government cost of subsidy */
      { type: 'calculation',
        context: 'Before a renewable energy subsidy, the equilibrium price of electricity from offshore wind is <strong>&#163;120/MWh</strong> and quantity is <strong>10,000 MWh per day</strong>. The government introduces a producer subsidy of <strong>&#163;30/MWh</strong>. After the subsidy, equilibrium consumer price falls to <strong>&#163;108/MWh</strong> and quantity rises to <strong>12,000 MWh per day</strong>.',
        working: [
          'Step 1: government cost per day',
          'Government cost = subsidy per unit \xd7 new quantity = &#163;30 \xd7 12,000 = &#163;360,000 per day',
          'Step 2: consumer benefit per unit = P1 - P2 = &#163;120 - &#163;108 = &#163;12 per MWh',
          'Step 3: producer benefit per unit = (P2 + subsidy) - P1 = &#163;108 + &#163;30 - &#163;120 = &#163;18 per MWh',
          'Step 4: check split',
          'Consumer share = &#163;12/&#163;30 = 40%; Producer share = &#163;18/&#163;30 = 60%',
          'Step 5: DWL (excess subsidy over positive externality benefit)',
          'If subsidised output Q2 > Q*, there is a DWL of over-production'
        ],
        stem: 'What is the daily government cost of the subsidy, and how is the benefit split between consumers and producers?',
        opts: [
          { ped: 'Government cost = &#163;360,000/day; consumers gain &#163;12/MWh (40%); producers gain &#163;18/MWh (60%)', typ: 'Govt cost = &#163;30 \xd7 12,000. Consumer gain per unit = &#163;120 - &#163;108 = &#163;12. Producer gain = &#163;30 - &#163;12 = &#163;18.', rev: 'Subsidy split depends on relative elasticities' },
          { ped: 'Government cost = &#163;300,000/day; consumers and producers each gain &#163;15/MWh equally', typ: 'Used original quantity 10,000 for cost calculation; assumed equal split without using price data', rev: 'Use the new quantity (12,000) for government cost; calculate actual price changes for incidence' },
          { ped: 'Government cost = &#163;360,000/day; consumers gain &#163;30/MWh (100%) and producers gain nothing', typ: 'Assumed all subsidy passed to consumers &mdash; ignores that price only fell by &#163;12, not &#163;30', rev: 'Price fell by &#163;12 (not the full &#163;30); producers kept &#163;18 of the subsidy as higher net price' },
          { ped: 'Government cost = &#163;120,000/day; consumers gain &#163;12/MWh and producers gain &#163;18/MWh', typ: 'Calculated cost using only the quantity increase (2,000 units) rather than total new quantity', rev: 'Govt pays the subsidy on ALL units sold at new quantity, not just the additional units' }
        ],
        ans: 0,
        exp: 'Government cost = &#163;30/MWh &times; 12,000 MWh = <strong>&#163;360,000 per day</strong>. Consumer benefit: price fell from &#163;120 to &#163;108 = &#163;12/MWh (40% of subsidy). Producer benefit: price received = &#163;108 + &#163;30 = &#163;138 vs original &#163;120 = &#163;18/MWh (60% of subsidy). The incidence split reflects relative elasticities: wind power supply is less elastic (it takes time to build new turbines), so producers capture more. The rule holds: the less elastic side receives a greater share of the subsidy benefit. Government pays &#163;360,000/day but the combined consumer and producer benefit is slightly less (government cost > combined benefit = DWL of any over-production).'
      },

      /* 5 — para_fill */
      { type: 'para_fill',
        stem: 'Complete the analytical paragraph about the infant industry argument for subsidies.',
        anchor: 'The infant industry argument is a classic justification for temporary subsidies in development economics.',
        para: 'An infant industry is one that is not yet [1] competitive but could become so once it achieves sufficient [2] of scale. Without a subsidy, foreign firms with lower costs would [3] domestic producers out of the market before they can mature. The government subsidises the infant industry to allow it to grow until its [4] costs fall to competitive levels. The key condition for success is that the subsidy must be [5] &mdash; otherwise it creates permanent [6] on government support. The risk of failure: the industry may never become [7] competitive, wasting public funds.',
        blanks: [
          { id: 1, opts: ['internationally', 'domestically', 'naturally', 'financially'], ans: 0 },
          { id: 2, opts: ['economies', 'levels', 'units', 'profits'], ans: 0 },
          { id: 3, opts: ['price', 'buy', 'push', 'tax'], ans: 0 },
          { id: 4, opts: ['average', 'marginal', 'fixed', 'variable'], ans: 0 },
          { id: 5, opts: ['temporary', 'large', 'permanent', 'universal'], ans: 0 },
          { id: 6, opts: ['dependence', 'surplus', 'competition', 'demand'], ans: 0 },
          { id: 7, opts: ['internationally', 'locally', 'nominally', 'technically'], ans: 0 }
        ],
        exp: '(1) <strong>Internationally</strong>: the industry cannot yet compete in global markets. (2) <strong>Economies</strong>: economies of scale reduce average cost as output grows. (3) <strong>Price</strong>: price out &mdash; low-cost foreign imports make domestic production unviable. (4) <strong>Average</strong>: average cost falls as output rises along the long-run average cost curve. (5) <strong>Temporary</strong>: a sunset clause ensures the subsidy ends when competitive advantage is achieved. (6) <strong>Dependence</strong>: permanent subsidies reduce incentive to improve efficiency. (7) <strong>Internationally</strong>: the goal is global competitiveness &mdash; the infant must eventually compete without subsidy.'
      },

      /* 6 — multi_select: limitations of agricultural subsidies */
      { type: 'multi_select',
        stem: 'The EU Common Agricultural Policy (CAP) provides direct payments to farmers. Which of the following are valid <strong>criticisms</strong> of this subsidy scheme?',
        opts: [
          'CAP payments are based on area farmed, so large landowners receive disproportionately more support',
          'By keeping EU food prices above world market levels, CAP harms developing-country agricultural exporters',
          'Agricultural subsidies encourage intensive farming practices that may damage biodiversity and the environment',
          'The subsidy reduces food prices for EU consumers, which is bad for European food security',
          'CAP increases the long-run competitiveness of EU agriculture by reducing dependence on government',
          'Buffer stock purchases under CAP created large surpluses (\'butter mountains\', \'wine lakes\') at significant storage cost'
        ],
        correct: [0, 1, 2, 5],
        exp: 'Options A, B, C, and F are valid criticisms. <strong>Regressive distribution</strong> (A): area-based payments favour large farms and wealthy landowners. <strong>Trade distortion</strong> (B): artificially high EU prices price out efficient developing-country exporters (e.g. African cotton, Brazilian sugar). <strong>Environmental damage</strong> (C): intensity subsidies encourage monocultures and overuse of fertilisers. <strong>Storage surpluses</strong> (F): the infamous butter mountains resulted from guaranteed purchase prices above market equilibrium. Option D is wrong: lower consumer prices are a <em>benefit</em> of subsidies, not a harm. Option E is wrong: subsidies reduce competitive pressure and create dependency &mdash; the opposite of increasing long-run competitiveness.'
      },

      /* 7 — odd_one_out */
      { type: 'odd_one_out',
        stem: 'Three of these represent potential <strong>market failures that subsidies can correct</strong>. Which is the ODD ONE OUT?',
        items: [
          { icon: '☀️', label: 'Underproduction of solar energy because private market ignores carbon reduction externalities', note: '' },
          { icon: '📚', label: 'Underinvestment in R&D because knowledge spillovers benefit rivals who did not bear the research cost', note: '' },
          { icon: '🏭', label: 'A dominant firm charging excessive prices due to monopoly power in the market', note: '' },
          { icon: '👶', label: 'Under-consumption of childcare because parents underestimate long-run productivity benefits for children', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is option C &mdash; a dominant firm with monopoly power. This is a market failure, but the appropriate policy response is <strong>competition policy or regulation</strong> (breaking up the monopoly, capping prices, or regulating conduct) &mdash; not a subsidy. Subsidising a monopolist would typically increase its profits without reducing the fundamental problem of market power. Options A, B, and D all describe positive externality or information failure problems where subsidies directly address the under-production or under-consumption by raising the effective benefit or reducing the private cost to the optimal level.'
      },

      /* 8 — multi_select: evaluation of subsidies */
      { type: 'multi_select',
        stem: 'A student is writing a 25-mark essay on <strong>the use of subsidies as a policy tool</strong>. Which of the following statements demonstrate <strong>evaluation</strong> — as opposed to description or one-sided analysis?',
        opts: [
          'UK offshore wind subsidies (Contracts for Difference) appear justified in hindsight: costs fell 74% from &#163;180/MWh (2010) to &#163;46/MWh (2022), consistent with the infant industry argument — but the key evaluative condition is whether the subsidy was temporary and self-liquidating, not whether costs fell per se.',
          'The EV Plug-in Vehicle Grant was regressive — higher-income households who could have purchased EVs without the subsidy captured much of the benefit — which reduces its welfare efficiency compared with a revenue-neutral carbon price that applies equally across income groups.',
          'Subsidies are good because they make goods cheaper for consumers and increase the quantity of goods produced in the economy.',
          'The infant industry argument justifies subsidies only if three conditions hold simultaneously: the industry has genuine learning-by-doing potential, the subsidy is time-limited with a credible exit, and domestic production generates positive spillovers that the market cannot capture — all three conditions should be assessed before concluding a subsidy is warranted.',
          'Subsidies always improve welfare because both consumer surplus and producer surplus rise when a subsidy is introduced.',
          'Agricultural subsidies under the EU CAP are beneficial because they support farmers\' incomes and ensure food security for the population.'
        ],
        correct: [0, 1, 3],
        exp: '<strong>Option A</strong> is strong evaluation: it accepts the empirical success of the wind subsidy but specifies the evaluative condition that matters — temporariness and self-liquidation — rather than treating cost reduction alone as proof of success. This is a "direction with a condition" evaluation move. <strong>Option B</strong> is strong evaluation: it identifies a specific distributional failure of the EV subsidy (regressivity), uses the concept of additionality to explain why welfare efficiency is reduced, and provides a comparative direction — a carbon price would be more efficient. This is exactly the kind of policy comparison that accesses Level 4. <strong>Option D</strong> is strong evaluation: it specifies three analytical conditions for the infant industry argument and directs the reader to apply all three — a genuine evaluative framework rather than a one-sided endorsement. <strong>Option C</strong> is pure description — it states what subsidies do without any weighing of costs, conditions, or counter-arguments. <strong>Option E</strong> is factually wrong and one-sided: total welfare falls under a subsidy (government cost exceeds CS + PS gain by the DWL of over-production) unless the subsidy corrects a positive externality. <strong>Option F</strong> is one-sided advocacy — it ignores the well-documented costs of CAP (trade distortion, regressive payments, surplus accumulation) and offers no weighing.'
      },

      /* 9 — data_table */
      { type: 'data_table',
        stem: 'The table shows UK offshore wind electricity generation and government subsidy costs.',
        headers: ['Year', 'Offshore wind generation (TWh)', 'Average cost (&#163;/MWh)', 'Government subsidy cost (&#163;bn)'],
        rows: [
          ['2010', '3', '&#163;180', '&#163;0.5'],
          ['2013', '18', '&#163;150', '&#163;1.2'],
          ['2016', '19', '&#163;120', '&#163;1.5'],
          ['2019', '38', '&#163;60', '&#163;1.8'],
          ['2022', '48', '&#163;46', '&#163;1.2']
        ],
        question: 'Which conclusion is best supported by the data?',
        opts: [
          'Subsidies have been effective: offshore wind costs have fallen 74% since 2010, generation has grown 16-fold, and subsidy costs have stabilised &mdash; consistent with the infant industry argument for temporary support',
          'Subsidies have failed because offshore wind still requires some government support in 2022 and has not yet become completely independent of the market',
          'The subsidy scheme has become increasingly expensive over time, suggesting diminishing returns to renewable energy investment',
          'Lower costs in 2022 are entirely due to technological improvement unrelated to the scale benefits from subsidies'
        ],
        ans: 0,
        exp: 'The data strongly support option A. Costs fell from &#163;180/MWh (2010) to &#163;46/MWh (2022) &mdash; a 74% reduction &mdash; while output grew 16-fold. Subsidy costs per TWh have fallen dramatically even though total support is similar to 2016 &mdash; the industry has matured and costs have approached market rates. This is the textbook infant industry outcome: initial subsidies catalyse scale and learning-by-doing that make the industry independently competitive. Option B sets an impossibly strict test. Option C is wrong: total subsidy cost fell from &#163;1.8bn (2019) to &#163;1.2bn (2022) even as output grew. Option D is incorrect &mdash; cost reduction required the scale-up that subsidies enabled.'
      },

      /* 10 — chain */
      { type: 'chain',
        stem: 'The government introduces a subsidy on childcare to correct under-provision due to a positive externality. Place the events in the correct logical order.',
        items: [
          { label: 'More parents (especially women) re-enter the workforce; labour supply increases', note: '' },
          { label: 'Childcare providers receive subsidy; MPC falls; supply shifts rightward', note: '' },
          { label: 'Government identifies positive externality: benefits of childcare access (workforce participation, child development) not fully captured in market price', note: '' },
          { label: 'Consumer price of childcare falls; quantity demanded and supplied rises toward socially optimal Q*', note: '' },
          { label: 'Over time, higher female labour force participation raises GDP and tax revenue; subsidy may become self-funding', note: '' },
          { label: 'Subsidy set equal to marginal external benefit of childcare; government pays per-place subsidy to providers', note: '' }
        ],
        correctOrder: [2, 5, 1, 3, 0, 4],
        exp: '<strong>The correct sequence:</strong><br>1. Government identifies positive externality &mdash; market under-provides childcare.<br>2. Subsidy set = MEB; government commits per-place payment to providers.<br>3. Supply shifts right as MPC falls by the subsidy amount.<br>4. Consumer price falls; quantity rises toward social optimum Q*.<br>5. Higher childcare uptake enables more parents to enter the workforce.<br>6. Long-run: higher GDP and tax revenue may offset the subsidy cost.<br><br>This sequence illustrates how childcare subsidies address both a market failure (positive externality) and a long-run fiscal argument: the dynamic returns through higher workforce participation can make the intervention self-financing. Essays that include the long-run dynamic earn Level 4 marks.'
      }

    ]
  };

})();
