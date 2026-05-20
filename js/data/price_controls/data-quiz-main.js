(function () {

  window.ECONOS_QUIZ = {
    id:       'price_controls_main',
    topicId:  'price_controls_main',
    title:    'Price Controls',
    subtitle: 'Theme 1.19 \xb7 Edexcel A-Level',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-style questions covering price ceilings, price floors, shortages and surpluses, unintended consequences (black markets, quality deterioration), real-world UK cases (energy price cap, minimum wage, rent controls), and evaluation against market-based alternatives.',
    shortNames: {
      'price_controls_1': 'The big picture',
      'price_controls_2': 'Price ceilings',
      'price_controls_3': 'Price floors',
      'price_controls_4': 'Real-world cases',
      'price_controls_5': 'Evaluation & alternatives'
    },

    questions: [

      /* 1 — mcq: ceiling vs floor */
      { type: 'mcq',
        stem: 'Which statement correctly distinguishes a <strong>price ceiling</strong> from a <strong>price floor</strong> and their market effects?',
        opts: [
          'A price ceiling set below equilibrium creates a shortage; a price floor set above equilibrium creates a surplus',
          'A price ceiling set above equilibrium creates a shortage; a price floor set below equilibrium creates a surplus',
          'A price ceiling creates a surplus because it prevents prices from rising; a price floor creates a shortage because it prevents prices from falling',
          'Both price ceilings and price floors increase the quantity traded in the market compared with the free-market equilibrium'
        ],
        ans: 0,
        exp: 'A <strong>price ceiling</strong> (maximum price) must be set <em>below</em> equilibrium to have any effect. At the ceiling price Pc &lt; P*, quantity demanded exceeds quantity supplied: <strong>shortage</strong>. A <strong>price floor</strong> (minimum price) must be set <em>above</em> equilibrium. At the floor price Pf &gt; P*, quantity supplied exceeds quantity demanded: <strong>surplus</strong>. Both controls reduce the quantity actually traded to the minimum of Qd and Qs at the controlled price &mdash; which is always less than the free-market equilibrium quantity. The mnemonic: Ceiling = maximum price = set LOW to bite; Floor = minimum price = set HIGH to bite.'
      },

      /* 2 — diagram_interp: price ceiling */
      { type: 'diagram_interp',
        stem: 'A government sets a rent ceiling at &#163;800/month on a rental market where equilibrium rent is &#163;1,100/month. At &#163;800: landlords supply 40,000 properties; tenants demand 65,000 properties.',
        svg: '<svg viewBox="0 0 420 320" xmlns="http://www.w3.org/2000/svg" style="font-family:Inter,sans-serif"><line x1="55" y1="20" x2="55" y2="280" stroke="#0B1426" stroke-width="2"/><line x1="55" y1="280" x2="400" y2="280" stroke="#0B1426" stroke-width="2"/><text x="42" y="22" fill="#0B1426" font-size="12" text-anchor="end" font-weight="700">Rent</text><text x="398" y="298" fill="#0B1426" font-size="12" font-weight="700">Q</text><line x1="80" y1="240" x2="360" y2="80" stroke="#2563EB" stroke-width="2.5"/><text x="363" y="82" fill="#2563EB" font-size="12" font-weight="700">D</text><line x1="80" y1="80" x2="370" y2="240" stroke="#1FB574" stroke-width="2.5"/><text x="373" y="240" fill="#1FB574" font-size="12" font-weight="700">S</text><line x1="55" y1="180" x2="400" y2="180" stroke="#EC2D68" stroke-width="2" stroke-dasharray="6,4"/><text x="35" y="183" fill="#EC2D68" font-size="10" text-anchor="end" font-weight="700">Pc=&#163;800</text><circle cx="217" cy="160" r="5" fill="#0B1426"/><text x="220" y="155" fill="#0B1426" font-size="10">P*=&#163;1100</text><line x1="155" y1="180" x2="155" y2="280" stroke="#1FB574" stroke-width="1" stroke-dasharray="3,3"/><line x1="290" y1="180" x2="290" y2="280" stroke="#2563EB" stroke-width="1" stroke-dasharray="3,3"/><text x="152" y="297" fill="#1FB574" font-size="10" text-anchor="middle">QS=40k</text><text x="290" y="297" fill="#2563EB" font-size="10" text-anchor="middle">QD=65k</text></svg>',
        caption: 'Rent ceiling Pc = &#163;800 set below equilibrium P* = &#163;1,100. QS = 40,000 at ceiling; QD = 65,000 at ceiling.',
        question: 'Which analysis of the rent ceiling is most accurate?',
        opts: [
          'The ceiling creates a shortage of 25,000 properties; the quantity of rentals falls to 40,000; existing tenants benefit from lower rents but 25,000 potential tenants cannot find accommodation',
          'The ceiling creates a surplus of 25,000 properties; landlords are forced to offer more units at the lower price; all tenants who want accommodation at &#163;800 find it',
          'The ceiling eliminates the deadweight welfare loss because tenants can now afford to rent; market efficiency is fully restored at Pc',
          'The shortage is 25,000 but this will be temporary because landlords will rapidly build new properties to meet excess demand'
        ],
        ans: 0,
        exp: 'The ceiling creates a <strong>shortage of 25,000 properties</strong> (QD &minus; QS = 65,000 &minus; 40,000). The quantity traded falls to 40,000 &mdash; the supply constraint is binding. Existing tenants who secure accommodation at &#163;800 gain (compared to paying &#163;1,100). But 25,000 potential tenants who would have rented at &#163;1,100 now cannot find accommodation. There is also a DWL triangle between QS and equilibrium quantity. Option B reverses the shortage/surplus logic. Option C is wrong: the DWL is created by the ceiling, not eliminated. Option D is wrong: the ceiling makes new investment less attractive (lower return), so construction falls rather than rises.'
      },

      /* 3 — elastic_sort: ceiling consequences */
      { type: 'elastic_sort',
        stem: 'Classify each outcome as an <strong>intended consequence</strong> or an <strong>unintended consequence</strong> of a rent ceiling.',
        categories: ['intended', 'unintended'],
        categoryLabels: ['Intended consequence', 'Unintended consequence'],
        goods: [
          { icon: '🏠', label: 'Existing tenants pay lower rents, improving housing affordability', note: '', ans: 'intended' },
          { icon: '🛠️', label: 'Landlords reduce maintenance spending as they cannot raise rents to cover costs', note: '', ans: 'unintended' },
          { icon: '🚪', label: 'Landlords convert rental properties to owner-occupation, reducing rental supply', note: '', ans: 'unintended' },
          { icon: '💷', label: 'Fewer people experience housing stress due to unaffordable market rents', note: '', ans: 'intended' },
          { icon: '🤝', label: 'Black market "key money" payments demanded by landlords for controlled properties', note: '', ans: 'unintended' },
          { icon: '❄️', label: 'Tenants remain in rent-controlled properties even when they need to move for work, reducing labour mobility', note: '', ans: 'unintended' }
        ],
        exp: '<strong>Intended</strong>: lower rents and reduced housing stress for sitting tenants are the explicit policy goals. <strong>Unintended</strong>: all the other effects are perverse outcomes arising from the incentive distortions created by the ceiling. Landlords respond to lower returns by reducing quality (maintenance) and supply (conversion to owner-occupation). Excess demand creates a black market ("key money"). Tenants who obtain controlled properties resist moving (occupancy lock-in), misallocating housing stock and reducing labour mobility. These unintended effects can make the policy harmful overall even when the stated goal is desirable.'
      },

      /* 4 — multi_select: price floor effects */
      { type: 'multi_select',
        stem: 'A minimum wage floor is set above the competitive equilibrium wage in a labour market. Which of the following outcomes are predicted by standard supply-and-demand analysis?',
        opts: [
          'Quantity of labour demanded by firms falls (some workers lose jobs or hours are cut)',
          'Quantity of labour supplied rises (more workers seek employment at the higher wage)',
          'A surplus of labour (unemployment) emerges: Qs &gt; Qd at the floor wage',
          'All workers benefit from higher wages with no adverse employment effects',
          'Workers who remain employed benefit from higher hourly wages',
          'If the labour market has monopsony characteristics, the minimum wage may increase employment'
        ],
        correct: [0, 1, 2, 4, 5],
        exp: 'Options A, B, C, E, and F are correct in the context of the question. <strong>A, B, C</strong>: basic supply-and-demand analysis of a binding price floor. The floor wage &gt; equilibrium wage means firms demand less labour and workers supply more &mdash; creating a labour surplus (unemployment). <strong>E</strong>: workers who keep their jobs are better off. <strong>F</strong>: this is the crucial Edexcel evaluation point &mdash; under monopsony, the equilibrium wage is already below the competitive level; a minimum wage can shift the equilibrium toward the competitive outcome, potentially <em>increasing</em> employment. Option D is wrong: standard analysis predicts some adverse employment effect unless the floor is very close to equilibrium or monopsony offsets the effect.'
      },

      /* 5 — odd_one_out */
      { type: 'odd_one_out',
        stem: 'Three of these are consequences of the <strong>UK energy price cap</strong> when wholesale energy costs exceed the cap level. Which is the ODD ONE OUT?',
        items: [
          { icon: '🏦', label: 'Energy suppliers sell below their cost price, threatening financial viability', note: '' },
          { icon: '💡', label: 'Consumers face lower bills than if prices were fully market-determined', note: '' },
          { icon: '🔌', label: 'Investment in new energy infrastructure increases rapidly due to the price signal', note: '' },
          { icon: '💸', label: 'The government may need to provide emergency support to prevent supplier collapse', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is option C. When the energy price cap is set below wholesale cost, suppliers\' revenue is suppressed &mdash; this <strong>reduces</strong> the incentive to invest in new infrastructure and capacity, it does not increase it. A high, market-determined price signals scarcity and encourages investment; a capped price reduces returns and can deter new entrants. Options A, B, and D are all real consequences of the 2021&ndash;22 UK energy price cap episode: suppliers sold below cost (25+ went bust), consumers paid less than market rates, and the government had to step in (Energy Price Guarantee transferring costs to taxpayers). This illustrates the key point: price caps redistribute costs but do not eliminate them.'
      },

      /* 6 — calculation: minimum wage surplus */
      { type: 'calculation',
        context: 'In a low-skilled labour market, the competitive equilibrium wage is <strong>&#163;9.00/hr</strong> at an employment level of <strong>200,000 workers</strong>. The National Living Wage is set at <strong>&#163;12.21/hr</strong>. At &#163;12.21/hr, firms demand <strong>175,000</strong> workers; workers supply <strong>230,000</strong> workers.',
        working: [
          'Step 1: is the minimum wage binding?',
          'NLW (&#163;12.21) > equilibrium (&#163;9.00) → YES, binding',
          'Step 2: surplus (unemployment) = Qs - Qd',
          '230,000 - 175,000 = 55,000 workers',
          'Step 3: employed workers\' wage gain per worker',
          '&#163;12.21 - &#163;9.00 = &#163;3.21/hr gain for those employed',
          'Step 4: number who lose employment',
          '200,000 (equilibrium) - 175,000 (now employed) = 25,000 fewer jobs',
          'Step 5: net distributional assessment',
          '175,000 workers gain; 25,000 workers lose; 55,000 frustrated job-seekers'
        ],
        stem: 'What is the size of the labour surplus created by the National Living Wage in this market, and how many workers lose jobs compared with the equilibrium?',
        opts: [
          { ped: 'Labour surplus = 55,000; jobs lost vs equilibrium = 25,000', typ: 'Surplus = 230,000 - 175,000 = 55,000. Jobs lost = 200,000 - 175,000 = 25,000.', rev: 'Distinguish surplus (Qs-Qd at floor) from employment loss (Q_eq - Q_new)' },
          { ped: 'Labour surplus = 55,000; jobs lost = 55,000', typ: 'Confused the surplus with the employment loss &mdash; both set equal to Qs - Qd', rev: 'Employment loss = equilibrium employment - new employment; surplus = Qs - Qd' },
          { ped: 'Labour surplus = 25,000; jobs lost = 25,000', typ: 'Calculated employment loss (200,000 - 175,000 = 25,000) but used that for both answers', rev: 'Surplus = Qs(230,000) - Qd(175,000) = 55,000; employment loss = 200,000 - 175,000 = 25,000' },
          { ped: 'Labour surplus = 30,000; jobs lost = 30,000', typ: 'Used Qs - Q_equilibrium = 230,000 - 200,000 = 30,000 for both', rev: 'Surplus is between Qs and Qd at the floor wage, not Qs and equilibrium Q' }
        ],
        ans: 0,
        exp: 'The labour <strong>surplus = 230,000 &minus; 175,000 = 55,000 workers</strong> &mdash; these workers want jobs at &#163;12.21 but cannot find them. The <strong>employment loss vs equilibrium = 200,000 &minus; 175,000 = 25,000 workers</strong> &mdash; these workers had jobs at &#163;9.00 but lose them when firms reduce demand at the higher wage. The two figures are different: the surplus includes workers newly attracted to the market by the higher wage plus the employment loss. The 175,000 who remain employed gain &#163;3.21/hr. The net welfare assessment depends on how you weigh gains to the employed against losses to those displaced. Monopsony caveat: if the employer has wage-setting power, the equilibrium wage before the floor is already below competitive &mdash; a minimum wage could increase employment.'
      },

      /* 7 — para_fill: black markets */
      { type: 'para_fill',
        stem: 'Complete the analytical paragraph about black markets arising from price ceilings.',
        anchor: 'A price ceiling can create a black market that leaves consumers worse off than without the control.',
        para: 'When a price ceiling creates excess [1], some buyers who cannot obtain the good at the official price are willing to pay more. Sellers who face [2] costs may sell illegally above the ceiling. The black market [3] can exceed the original equilibrium price because buyers now face additional [4] costs (queuing, searching, corruption) on top of the illegal price. This means the price ceiling, intended to [5] consumers, may leave many of them worse off. The severity of the black market depends on the [6] of the shortage and the effectiveness of [7] by authorities.',
        blanks: [
          { id: 1, opts: ['demand', 'supply', 'costs', 'prices'], ans: 0 },
          { id: 2, opts: ['opportunity', 'sunk', 'variable', 'average'], ans: 0 },
          { id: 3, opts: ['price', 'quantity', 'revenue', 'profit'], ans: 0 },
          { id: 4, opts: ['search', 'production', 'opportunity', 'marginal'], ans: 0 },
          { id: 5, opts: ['protect', 'harm', 'exclude', 'tax'], ans: 0 },
          { id: 6, opts: ['size', 'cause', 'duration', 'type'], ans: 0 },
          { id: 7, opts: ['enforcement', 'taxation', 'deregulation', 'subsidy'], ans: 0 }
        ],
        exp: '(1) <strong>Demand</strong>: excess demand = shortage. (2) <strong>Opportunity</strong>: suppliers forego legal sales; some take the risk of illegal ones. (3) <strong>Price</strong>: black market price can exceed the original equilibrium. (4) <strong>Search</strong>: consumers must incur search costs (time, uncertainty, risk) to find black market goods. (5) <strong>Protect</strong>: the stated intention is consumer protection. (6) <strong>Size</strong>: a larger shortage creates more incentive for black markets. (7) <strong>Enforcement</strong>: strict enforcement raises the cost of black market trading, reducing its prevalence but also raising risk premiums and prices.'
      },

      /* 8 — diagnostic_pair */
      { type: 'diagnostic_pair',
        stem: 'Exam question: <em>"Evaluate the UK energy price cap as a method of protecting consumers from rising energy costs."</em> Which student gives the stronger answer?',
        students: [
          { name: 'Layla', badge: 'Candidate A',
            answer: 'The energy price cap is effective in the short run: it provided immediate consumer relief when wholesale gas prices spiked in 2021&ndash;22, and prevented bills rising to potentially &#163;4,000+/year for the average household. However, it is fundamentally a redistribution mechanism, not a solution to the underlying cost problem. When wholesale prices exceed the cap, costs must be borne by someone: in 2021&ndash;22, 25+ suppliers went bust (bearing costs) and the government introduced the Energy Price Guarantee (taxpayers bearing costs estimated at &#163;25bn+). The cap does not address root cause (energy supply shortage); it does not incentivise energy conservation (subsidised price below market reduces conservation incentives); and it may deter long-run investment in energy supply and efficiency. An alternative evaluation: means-tested targeted income transfers to low-income households would be more efficient (no market distortion) but harder to administer. On balance, the cap is a second-best emergency tool &mdash; justified when price spikes are acute and temporary, but unsustainable when they reflect structural supply constraints.'
          },
          { name: 'Marcus', badge: 'Candidate B',
            answer: 'The energy price cap helped consumers by stopping bills from rising too much during the energy crisis. It was especially important for low-income households who spend a higher proportion of income on energy. Without the cap, many households would have faced fuel poverty. However, the cap caused problems for energy companies because they could not charge enough to cover costs, which is why many went bust. The government also had to spend a lot of money supporting the scheme. The cap also meant people had less incentive to use less energy since they weren\'t paying the full price. Alternatives like means-tested support payments might have been more targeted and less wasteful. Overall the cap was necessary in the short term but has long-term problems.'
          }
        ],
        ans: 0,
        exp: '<strong>Layla</strong> gives the stronger answer. She identifies the fundamental mechanism ("redistribution, not solution"), quantifies the policy (&#163;25bn government cost, &#163;4,000 bill scenario), analyses incentive effects (reduced conservation, deterred investment), and provides a specific alternative (means-tested transfers) with an explicit efficiency comparison. Her conclusion is conditional ("justified when... but unsustainable when...") &mdash; the hallmark of Level 4. Marcus makes similar points but without the analytical structure: he does not use the language of market failure, incentive effects, or efficiency; his alternative is mentioned but not evaluated. Marcus accesses Level 3; Layla Level 4.'
      },

      /* 9 — data_table */
      { type: 'data_table',
        stem: 'The table shows data on the National Living Wage and UK low-pay employment.',
        headers: ['Year', 'NLW rate (&#163;/hr)', 'Workers on minimum wage (millions)', 'Low-pay employment growth (%)'],
        rows: [
          ['2016', '&#163;7.20', '1.8', 'n/a'],
          ['2018', '&#163;7.83', '2.1', '+3%'],
          ['2020', '&#163;8.72', '2.3', '+4%'],
          ['2022', '&#163;9.50', '2.6', '+2%'],
          ['2024', '&#163;11.44', '3.0', '+1%']
        ],
        question: 'Which conclusion about the minimum wage is best supported by the data?',
        opts: [
          'Employment in low-pay sectors has continued to grow alongside rising minimum wages, suggesting limited disemployment effects &mdash; consistent with monopsony or inelastic demand for low-paid labour',
          'The rising minimum wage has clearly caused mass unemployment because employment growth has slowed from 4% to 1%',
          'The data proves that minimum wages have no economic costs whatsoever and should be set as high as possible',
          'Employment growth slowing from 4% (2020) to 1% (2024) confirms the standard model\'s prediction that higher wage floors destroy jobs in proportion to the wage rise'
        ],
        ans: 0,
        exp: 'The data support option A. Despite the NLW rising from &#163;7.20 (2016) to &#163;11.44 (2024) &mdash; a 59% increase &mdash; the number of workers on the minimum wage grew from 1.8m to 3.0m and employment in low-pay sectors continued to expand (though at slowing rates). This is inconsistent with the simple competitive model prediction of large employment losses. It is consistent with: monopsony power (employers had been suppressing wages below competitive levels); inelastic labour demand in sectors like hospitality and retail; and productivity gains from higher wages (efficiency wage effects). The slowdown in growth (from 4% to 1%) is suggestive of some constraint but not the dramatic collapse the textbook model predicts. Option B overstates the slowing. Option C overstates the positive evidence. Option D conflates correlation with the specific model prediction.'
      },

      /* 10 — chain */
      { type: 'chain',
        stem: 'A government introduces a price ceiling on rents below equilibrium. Place the following events in the correct logical order from the policy decision to the long-run outcome.',
        items: [
          { label: 'Some landlords exit the rental market; others convert properties to owner-occupation or holiday lets', note: '' },
          { label: 'Government sets rent ceiling at Pc below equilibrium P* to improve housing affordability', note: '' },
          { label: 'Shortage worsens over time; tenants in controlled properties resist moving; housing stock misallocated', note: '' },
          { label: 'At Pc: quantity demanded exceeds quantity supplied; shortage = QD &minus; QS', note: '' },
          { label: 'Black market develops; landlords charge "key money" above the legal ceiling; effective rent approaches or exceeds P*', note: '' },
          { label: 'Long-run: rental supply shrinks further; quality deteriorates; rent control fails to solve affordability', note: '' }
        ],
        correctOrder: [1, 3, 0, 4, 2, 5],
        exp: '<strong>The correct sequence:</strong><br>1. Government introduces rent ceiling below equilibrium.<br>2. Immediate shortage: QD &gt; QS at Pc.<br>3. Landlords respond by exiting the rental market or converting properties.<br>4. Black market emerges (key money, side payments).<br>5. Tenure lock-in: tenants stay in controlled properties; market misallocated.<br>6. Long-run outcome: smaller, lower-quality rental stock; affordability problem persists or worsens.<br><br>This sequence illustrates why rent controls, despite being well-intentioned, consistently fail in practice. The short-run benefit (sitting tenants pay less) is progressively undermined by supply reduction, quality deterioration, and black market activity. The housing affordability problem requires supply-side solutions (building more housing) rather than price controls.'
      }

    ]
  };

})();
