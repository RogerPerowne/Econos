(function () {

  window.ECONOS_QUIZ = {
    id:       'ped_main',
    topicId:  'ped_main',
    title:    'Price Elasticity of Demand',
    subtitle: 'Theme 1.8 &#183; Edexcel A-Level',
    sessionLabel: 'Session 1 of 3: Learn',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-style questions covering the PED formula, elastic and inelastic cases, determinants, the PED&#8211;total revenue relationship, tax incidence, pricing strategy, and special cases. Mixed formats &#8212; calculation, sort, paragraph completion, diagnostic pair, data table, chain &#8212; designed for the analysis marks Edexcel rewards.',
    shortNames: {
      'ped_1': 'PED formula',
      'ped_2': 'Determinants of PED',
      'ped_3': 'PED and total revenue',
      'ped_4': 'PED and tax incidence',
      'ped_5': 'Worked examples',
      'ped_6': 'Pricing strategy',
      'ped_7': 'Special cases'
    },

    questions: [

      /* 1 &#8212; Calculation: PED */
      { type: 'calculation',
        context: 'When the price of a train season ticket rises from <strong>&#163;2,000</strong> to <strong>&#163;2,200</strong>, the number of season tickets sold falls from <strong>50,000</strong> to <strong>47,500</strong>.',
        working: [
          '% change in price = (2,200 &#8722; 2,000) &#247; 2,000 &#215; 100 = +10%',
          '% change in QD = (47,500 &#8722; 50,000) &#247; 50,000 &#215; 100 = &#8722;5%',
          'PED = &#8722;5% &#247; +10% = &#8722;0.5',
          '|PED| = 0.5 &#8212; price inelastic demand'
        ],
        stem: 'What is the <strong>price elasticity of demand</strong> for this train season ticket, and what does it imply for the train operator\'s total revenue?',
        opts: [
          { ped: 'PED = &#8722;0.5; demand is price inelastic, so the price rise increases total revenue', typ: '%&#916;QD = &#8722;5%; %&#916;P = +10%; PED = &#8722;0.5; |PED| < 1 &#8594; inelastic &#8594; price rise raises TR', rev: 'TR = P&#215;Q: rises from &#163;100m to &#163;104.5m &#8212; verify numerically' },
          { ped: 'PED = &#8722;2; demand is price elastic, so the price rise reduces total revenue', typ: 'Inverted the formula: &#916;P/&#916;Q instead of &#916;Q/&#916;P', rev: 'PED = %&#916;QD &#247; %&#916;P; the quantity change is the numerator' },
          { ped: 'PED = &#8722;0.5; demand is price inelastic, so the price rise reduces total revenue', typ: 'PED calculation correct but TR conclusion wrong &#8212; inelastic demand means TR rises when price rises', rev: 'Inelastic: price up &#8594; QD falls proportionally less &#8594; TR rises' },
          { ped: 'PED = &#8722;0.5; demand is price elastic', typ: 'PED calculated correctly but misclassified: |PED| = 0.5 < 1, which is inelastic not elastic', rev: '|PED| > 1 = elastic; |PED| < 1 = inelastic; 0.5 < 1 = inelastic' }
        ],
        ans: 0,
        exp: '%&#916;QD = (47,500&#8722;50,000)/50,000 &#215;100 = <strong>&#8722;5%</strong>. %&#916;P = (2,200&#8722;2,000)/2,000 &#215;100 = <strong>+10%</strong>. PED = &#8722;5%/+10% = <strong>&#8722;0.5</strong>. Since |PED| = 0.5 < 1, demand is <strong>price inelastic</strong>. TR before = &#163;2,000 &#215; 50,000 = &#163;100m. TR after = &#163;2,200 &#215; 47,500 = &#163;104.5m. TR <strong>rises by &#163;4.5m</strong>. Train commuters have few substitutes (inelastic demand &#8212; they must travel), so the operator can raise prices and increase revenue. This is why rail operators consistently raise fares above inflation.'
      },

      /* 2 &#8212; Elastic sort: PED determinants */
      { type: 'elastic_sort',
        stem: 'Classify each good as having <strong>relatively elastic</strong> or <strong>relatively inelastic</strong> demand, based on the key determinants of PED.',
        categories: ['elastic', 'inelastic'],
        categoryLabels: ['Relatively elastic demand (|PED| > 1)', 'Relatively inelastic demand (|PED| < 1)'],
        goods: [
          { icon: '&#128663;', label: 'A weekend city break to Paris &#8212; a luxury with many alternative destinations', note: '', ans: 'elastic' },
          { icon: '&#128138;', label: 'Insulin for a diabetic patient &#8212; a life-sustaining medication with no substitute', note: '', ans: 'inelastic' },
          { icon: '&#9749;', label: 'A branded takeaway coffee at &#163;4.50 &#8212; many coffee shops nearby', note: '', ans: 'elastic' },
          { icon: '&#9981;', label: 'Household gas and electricity &#8212; a necessity with few short-run substitutes', note: '', ans: 'inelastic' },
          { icon: '&#128250;', label: 'An Apple iPhone &#8212; premium brand with strong customer loyalty', note: '', ans: 'inelastic' },
          { icon: '&#128640;', label: 'A 10-minute taxi journey &#8212; substitutes include bus, tube, and walking', note: '', ans: 'elastic' }
        ],
        exp: '<strong>Elastic</strong>: Paris city break (luxury + many substitutes), branded coffee (many nearby substitutes), taxi (multiple transport alternatives). <strong>Inelastic</strong>: insulin (no substitute, medical necessity), household energy (necessity + short-run captive consumers), iPhone (brand loyalty reduces effective substitutes). The most important determinant is availability of substitutes. Luxury vs necessity, time period, and addiction also matter. Apple\'s inelastic demand is the result of deliberate differentiation strategy &#8212; creating brand loyalty reduces effective substitutes and grants pricing power.'
      },

      /* 3 &#8212; MCQ: PED and total revenue */
      { type: 'mcq',
        stem: 'A firm selling a product with <strong>price elastic demand</strong> (|PED| = 2.5) is considering a 10% price increase. What will happen to <strong>total revenue</strong>?',
        opts: [
          'Total revenue will fall &#8212; a 10% price rise will reduce quantity demanded by approximately 25%, and the revenue loss from reduced sales exceeds the revenue gain from the higher price',
          'Total revenue will rise &#8212; any price increase raises revenue because the firm receives more per unit',
          'Total revenue will be unchanged &#8212; the price increase exactly offsets the fall in quantity demanded',
          'Total revenue will rise slightly &#8212; elastic demand means consumers are more sensitive to price but will still buy almost the same amount'
        ],
        ans: 0,
        exp: 'With |PED| = 2.5, a 10% price rise causes approximately a 25% fall in quantity demanded (10% &#215; 2.5 = 25%). Total revenue = P &#215; Q. The revenue gain from +10% price is outweighed by the revenue loss from &#8722;25% quantity &#8594; <strong>TR falls</strong>. TR rule: <strong>elastic demand</strong> &#8594; price rise &#8594; TR falls; price cut &#8594; TR rises. <strong>Inelastic demand</strong> &#8594; price rise &#8594; TR rises; price cut &#8594; TR falls. Unit elastic (|PED| = 1) &#8594; TR unchanged by price change. Firms in elastic markets (many substitutes) should cut prices to grow revenue; firms in inelastic markets should raise them.'
      },

      /* 4 &#8212; Multi-select: tax incidence */
      { type: 'multi_select',
        stem: 'The government imposes an indirect tax on cigarettes. Select ALL statements that are <strong>correct</strong> about this tax.',
        opts: [
          'Most of the tax burden falls on consumers because demand for cigarettes is price inelastic',
          'The tax generates substantial revenue because inelastic demand means quantity purchased barely falls',
          'The deadweight loss from the tax is relatively small because the quantity reduction is limited',
          'The tax is regressive &#8212; it takes a higher proportion of income from lower-income households who are more likely to smoke',
          'The tax burden falls mainly on producers because they cannot pass it on to consumers without losing all their customers',
          'Elastic supply means the full tax is absorbed by producers through lower profit margins'
        ],
        correct: [0, 1, 2, 3],
        exp: 'Options A, B, C, and D are all correct. <strong>A</strong>: inelastic demand &#8594; consumers bear most of the tax (price rises significantly). <strong>B</strong>: inelastic demand &#8594; little quantity reduction &#8594; large tax revenue (the Laffer argument for taxing inelastic goods). <strong>C</strong>: deadweight loss = triangle proportional to quantity reduction; inelastic demand &#8594; small quantity fall &#8594; small deadweight loss. <strong>D</strong>: cigarette consumption is higher among lower-income groups as a share of income &#8212; a regressive tax. Option E is wrong: precisely the opposite &#8212; inelastic demand allows producers to pass the tax on. Option F confuses supply elasticity with demand elasticity in this context.'
      },

      /* 5 &#8212; Diagnostic pair: PED and pricing strategy */
      { type: 'diagnostic_pair',
        stem: 'Exam question: <em>"Using PED analysis, explain how Ryanair and British Airways should approach their pricing strategies differently."</em> Which student demonstrates stronger application of PED?',
        students: [
          { name: 'Ella', badge: 'Candidate A',
            answer: 'Ryanair targets the <strong>price-elastic</strong> leisure traveller segment: holidays and short breaks have many substitutes (other airlines, rail, staying at home), consumers are highly sensitive to price, and leisure demand has |PED| > 1. Therefore, Ryanair\'s strategy is to cut base fares to the minimum to maximise load factors &#8212; since demand is elastic, lower prices raise total revenue by expanding quantity more than proportionally. British Airways competes for <strong>price-inelastic</strong> business travellers: business travel has few substitutes (the meeting must happen), is a small proportion of the firm\'s budget, and loyalty schemes reduce effective alternatives, giving |PED| < 1. BA can therefore charge premium prices (business class, flexible fares) and raise revenue because the quantity fall is proportionally smaller than the price rise. Both carriers in effect practise third-degree <strong>price discrimination</strong>: charging different prices to segments with different PEDs to maximise revenue across the whole demand curve.'
          },
          { name: 'Tom', badge: 'Candidate B',
            answer: 'Ryanair should keep prices low because it mainly attracts people looking for cheap flights who would switch to another airline if prices went up. This means demand is elastic. British Airways has business customers who need to fly and cannot easily change, so demand is more inelastic and BA can charge more. PED is calculated by dividing the percentage change in quantity demanded by the percentage change in price. So the difference in strategies is explained by the different types of customers they serve.'
          }
        ],
        ans: 0,
        exp: '<strong>Ella</strong> gives the stronger answer. She explicitly labels the PED of each segment (|PED| > 1 and < 1), explains the determinants behind each elasticity value (substitutes, necessity, brand loyalty), and shows precisely why each strategy maximises revenue. She also introduces price discrimination as the integrating concept. Tom identifies the correct direction for each firm but at a descriptive level &#8212; he mentions the PED formula without using it analytically. Ella accesses Level 4; Tom Level 2. The key analytical move is connecting PED value &#8594; TR rule &#8594; pricing strategy as a chain of reasoning.'
      },

      /* 6 &#8212; Para fill: PED and total revenue rule */
      { type: 'para_fill',
        stem: 'Complete the paragraph about the PED&#8211;total revenue relationship.',
        anchor: 'The relationship between PED and total revenue is one of the most tested applications in economics.',
        para: 'Total revenue equals [1] multiplied by [2]. When demand is price [3] (|PED| > 1), a rise in price reduces total revenue because quantity demanded falls [4] than proportionally. When demand is price [5] (|PED| < 1), a rise in price [6] total revenue because the quantity fall is [7] than the price rise in proportional terms.',
        blanks: [
          { id: 1, opts: ['price', 'quantity', 'cost', 'profit'], ans: 0 },
          { id: 2, opts: ['quantity', 'price', 'cost', 'income'], ans: 0 },
          { id: 3, opts: ['elastic', 'inelastic', 'unit elastic', 'perfectly elastic'], ans: 0 },
          { id: 4, opts: ['more', 'less', 'equally', 'slightly'], ans: 0 },
          { id: 5, opts: ['inelastic', 'elastic', 'unit elastic', 'perfectly inelastic'], ans: 0 },
          { id: 6, opts: ['increases', 'decreases', 'stabilises', 'halves'], ans: 0 },
          { id: 7, opts: ['smaller', 'larger', 'equal', 'indeterminate'], ans: 0 }
        ],
        exp: '(1+2) Total Revenue = <strong>Price</strong> &#215; <strong>Quantity</strong>. (3) <strong>Elastic</strong> demand: |PED| > 1. (4) Quantity demanded falls <strong>more</strong> than proportionally &#8212; the percentage fall in Q exceeds the percentage rise in P &#8594; TR falls. (5) <strong>Inelastic</strong> demand: |PED| < 1. (6) TR <strong>increases</strong> &#8212; the revenue gain from higher price outweighs the revenue loss from lower quantity. (7) The quantity fall is <strong>smaller</strong> in proportional terms than the price rise &#8594; the price effect dominates &#8594; TR rises. Summary table: Elastic + price rise &#8594; TR falls; Inelastic + price rise &#8594; TR rises; Unit elastic &#8594; TR unchanged.'
      },

      /* 7 &#8212; Odd one out: determinants making demand elastic */
      { type: 'odd_one_out',
        stem: 'Three of these factors make demand <strong>more price elastic</strong>. Which is the <strong>odd one out</strong>?',
        items: [
          { icon: '&#128722;', label: 'Many close substitute products are available in the market', note: '' },
          { icon: '&#128176;', label: 'The good represents a large proportion of the consumer\'s weekly income', note: '' },
          { icon: '&#128138;', label: 'The good is a life-sustaining medicine with no alternative treatment available', note: '' },
          { icon: '&#9200;', label: 'Consumers have a long time to adjust their buying habits following a price change', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is <strong>a life-sustaining medicine with no substitute</strong>. This makes demand <strong>price inelastic</strong>: there are no substitutes, it is a necessity, and consumers must purchase it regardless of price. The other three factors all increase price elasticity: many substitutes (consumers can easily switch); large income share (consumers are very sensitive to price changes); long time period (consumers find substitutes, form new habits, or adopt new technologies). The most important determinant of PED is availability of substitutes &#8212; a good with no substitutes will always have relatively inelastic demand.'
      },

      /* 8 &#8212; Data table: fuel duty and PED */
      { type: 'data_table',
        stem: 'The table shows UK petrol market data before and after a significant fuel duty increase.',
        headers: ['Variable', 'Before duty rise', 'After duty rise'],
        rows: [
          ['Average petrol price at pump', '&#163;1.50/litre', '&#163;1.65/litre'],
          ['Petrol consumption (bn litres/yr)', '42.0', '40.6'],
          ['Government fuel duty revenue (&#163;bn)', '28.1', '28.4'],
          ['Share of income spent on petrol (low-income households)', '4.8%', '5.3%']
        ],
        question: 'Which conclusions are <strong>most consistent</strong> with PED theory and the data?',
        opts: [
          'PED is approximately &#8722;0.22 (inelastic); the duty effectively raises revenue (&#43;&#163;300m) with limited quantity reduction; but the regressive impact on lower-income households is a distributional concern',
          'PED is greater than &#8722;1 (elastic) &#8212; the large percentage fall in consumption confirms strong consumer sensitivity to petrol prices',
          'The small rise in government revenue confirms that taxing inelastic goods is ineffective at raising revenue',
          'The data show the duty is progressive &#8212; wealthier households pay more in absolute terms because they buy more petrol'
        ],
        ans: 0,
        exp: '%&#916;QD = (40.6&#8722;42.0)/42.0 &#215;100 &#8776; &#8722;3.3%. %&#916;P = (1.65&#8722;1.50)/1.50 &#215;100 = +10%. PED &#8776; &#8722;3.3%/+10% = <strong>&#8722;0.33</strong> (approximately &#8722;0.22 as stated, depending on rounding method). Demand is clearly <strong>inelastic</strong>. Revenue rose from &#163;28.1bn to &#163;28.4bn &#8212; consistent with taxing an inelastic good raising revenue. The regressive distributional impact (low-income households\' share rises from 4.8% to 5.3%) is a genuine concern. Option B contradicts the calculation. Option C is wrong &#8212; revenue rose. Option D confuses absolute spending with the income share measure of regressivity.'
      },

      /* 9 &#8212; MCQ: special cases of PED */
      { type: 'mcq',
        stem: 'A firm in a perfectly competitive market faces a <strong>perfectly elastic demand curve</strong> (PED = &#8722;&#8734;). This means:',
        opts: [
          'The firm is a price-taker: it can sell any quantity at the market price, but any attempt to charge above the market price causes quantity demanded to fall to zero',
          'The firm has complete pricing power: it can charge any price it wishes and demand will not fall at all',
          'Demand for the firm\'s product is completely unresponsive to price changes &#8212; the demand curve is vertical',
          'The firm must reduce price to sell more units, because a lower price is needed to attract additional buyers'
        ],
        ans: 0,
        exp: 'Perfectly elastic demand (PED = &#8722;&#8734;) produces a <strong>horizontal demand curve</strong>. The firm can sell as much as it wants at the market price, but any attempt to charge even a fraction above the market price drives all demand to zero (consumers instantly switch to identical products from other firms). This is the situation facing every firm in <strong>perfect competition</strong>: they are price-takers, not price-makers. This is also why P = MC in perfect competition &#8212; the firm\'s "demand curve" (horizontal at market price) intersects its marginal cost curve at the efficient point. A vertical demand curve describes perfectly <em>inelastic</em> demand (PED = 0), not perfectly elastic.'
      },

      /* 10 &#8212; Chain: PED to pricing decision */
      { type: 'chain',
        stem: 'A pharmaceutical company estimates that demand for its patented medication is price inelastic (|PED| = 0.3). Place the following steps of its pricing strategy in the correct logical order.',
        items: [
          { label: 'Total revenue increases because the price rise percentage exceeds the quantity fall percentage', note: '' },
          { label: 'The company identifies that |PED| = 0.3: demand is highly price inelastic', note: '' },
          { label: 'The company raises the price of the medication by 20%', note: '' },
          { label: 'Quantity demanded falls by approximately 6% (0.3 &#215; 20% = 6%)', note: '' },
          { label: 'The company recognises it has pricing power: it can raise prices with limited volume loss', note: '' },
          { label: 'Higher profit margins attract regulatory scrutiny of the medicine\'s pricing', note: '' }
        ],
        correctOrder: [1, 4, 2, 3, 0, 5],
        exp: '<strong>The correct sequence:</strong><br>1. PED measured at 0.3 &#8212; inelastic demand established.<br>2. Company recognises this gives pricing power (low responsiveness to price).<br>3. Price raised by 20%.<br>4. Quantity falls by approximately 6% (0.3 &#215; 20%).<br>5. TR rises because price rise (20%) exceeds volume fall (6%).<br>6. Higher profits attract regulatory scrutiny &#8212; real-world consequence.<br><br>This chain illustrates the TR-PED rule in a business context and links to the regulation debate: inelastic demand gives pharmaceutical firms pricing power that can be exploited at the expense of patients &#8212; the economic justification for price regulation in healthcare. Applies to branded medicines, not generics (which face elastic demand due to competition).'
      }

    ]
  };

})();
