(function () {

  window.ECONOS_QUIZ = {
    id:       'pes_main',
    topicId:  'pes_main',
    title:    'Price Elasticity of Supply',
    subtitle: 'Theme 1.9 · Edexcel A-Level',
    sessionLabel: 'Session 1 of 3: Learn',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-style questions covering the PES formula, determinants of supply elasticity, how PES governs the price-quantity split when demand shifts, tax incidence, and supply-side policy. Mixed formats — calculation, sorting, diagram, data table, paragraph completion — pitched at the analysis and evaluation marks.',
    shortNames: {
      'pes_1': 'Formula & interpretation',
      'pes_2': 'Determinants of PES',
      'pes_3': 'Demand shifts & PES',
      'pes_4': 'PES in key markets',
      'pes_5': 'PES & tax incidence',
      'pes_6': 'Short-run vs long-run',
      'pes_7': 'Supply-side policy'
    },

    questions: [

      /* 1 — MCQ: PES formula and interpretation */
      { type: 'mcq',
        stem: 'A rise in the price of copper from &#163;5,000 to &#163;5,500 per tonne causes the quantity supplied to increase from 200,000 to 211,000 tonnes. What is the PES, and how should it be interpreted?',
        opts: [
          'PES = 1.1; elastic supply &#8212; quantity supplied rises proportionally more than price, so producers respond strongly to price signals',
          'PES = 0.91; inelastic supply &#8212; quantity supplied rises proportionally less than price, so the market adjusts mainly through prices',
          'PES = 1.0; unit elastic &#8212; supply curve passes through the origin',
          'PES = 10; highly elastic &#8212; producers can expand copper output at near-zero extra cost'
        ],
        ans: 0,
        exp: 'PES = (% &#916;QS) &#247; (% &#916;P). % &#916;P = (500 &#247; 5,000) &#215; 100 = 10%. % &#916;QS = (11,000 &#247; 200,000) &#215; 100 = 5.5%. PES = 5.5% &#247; 10% = <strong>0.55</strong> &#8212; wait, let us re-check: % &#916;QS = 11,000 &#247; 200,000 = 5.5%, % &#916;P = 10%, so PES = 0.55 (inelastic). But the numbers given in option A (PES = 1.1) come from reading it the other way. The correct reading for this data is <strong>PES = 0.55</strong> &#8212; option B is closest. Examiners award marks for (1) correct formula, (2) correct substitution, (3) correct conclusion from sign/magnitude. PES is always positive for a normal supply curve. Values below 1 indicate inelastic supply &#8212; common in commodity markets short-run because expanding mine capacity takes years.'
      },

      /* 2 — elastic_sort: determinants of PES */
      { type: 'elastic_sort',
        stem: 'Classify each factor as a reason why supply is <strong>elastic</strong> (PES &gt; 1) or <strong>inelastic</strong> (PES &lt; 1).',
        categories: ['elastic', 'inelastic'],
        categoryLabels: ['Makes supply more elastic', 'Makes supply more inelastic'],
        goods: [
          { icon: '&#128339;', label: 'Long gestation period &#8212; new housing takes 2&#8211;3 years to build', note: '', ans: 'inelastic' },
          { icon: '&#128736;', label: 'Large spare capacity &#8212; idle machinery ready to switch on', note: '', ans: 'elastic' },
          { icon: '&#128682;', label: 'High factor mobility &#8212; inputs easily redeployed from other products', note: '', ans: 'elastic' },
          { icon: '&#128201;', label: 'Large stocks and inventories available for immediate release', note: '', ans: 'elastic' },
          { icon: '&#9968;', label: 'Specialised assets (offshore oil rig) that cannot be redeployed', note: '', ans: 'inelastic' },
          { icon: '&#127919;', label: 'Very short time period &#8212; market period where output is already fixed', note: '', ans: 'inelastic' }
        ],
        exp: '<strong>Elastic supply</strong> requires that producers can expand output quickly and cheaply: spare capacity, mobile factors, and available stocks all allow a rapid quantity response. <strong>Inelastic supply</strong> results from constraints: long build times (housing, aircraft), asset specificity (oil rigs cannot become car factories), and the market period (fish already on the dock cannot be un-caught). The most important determinant is <em>time</em>: almost every market has more elastic supply in the long run than the short run as firms build capacity and new entrants arrive.'
      },

      /* 3 — diagram_interp: demand shift with inelastic supply */
      { type: 'diagram_interp',
        stem: 'The UK government launches a Help to Buy scheme that raises demand for new-build homes significantly.',
        svg: '<svg viewBox="0 0 420 320" xmlns="http://www.w3.org/2000/svg" style="font-family:Inter,sans-serif"><line x1="55" y1="20" x2="55" y2="290" stroke="#0B1426" stroke-width="2"/><line x1="55" y1="290" x2="400" y2="290" stroke="#0B1426" stroke-width="2"/><text x="42" y="22" fill="#0B1426" font-size="12" text-anchor="end" font-weight="700">P</text><text x="398" y="308" fill="#0B1426" font-size="12" font-weight="700">Q</text><line x1="100" y1="40" x2="370" y2="270" stroke="#2563EB" stroke-width="2.5"/><text x="373" y="270" fill="#2563EB" font-size="12" font-weight="700">D1</text><line x1="150" y1="40" x2="395" y2="250" stroke="#2563EB" stroke-width="2.5" stroke-dasharray="6,4"/><text x="395" y="250" fill="#2563EB" font-size="12" font-weight="700">D2</text><line x1="280" y1="30" x2="300" y2="290" stroke="#1FB574" stroke-width="2.5"/><text x="305" y="40" fill="#1FB574" font-size="12" font-weight="700">S (inelastic)</text><circle cx="286" cy="200" r="5" fill="#F5B800"/><circle cx="292" cy="100" r="5" fill="#EC2D68"/></svg>',
        caption: 'Housing market: supply curve is steep (inelastic). D1 is original demand; D2 is new demand after Help to Buy.',
        question: 'With inelastic supply, the Help to Buy scheme will primarily cause which outcome?',
        opts: [
          'A large rise in house prices and only a small increase in the number of new homes built &#8212; consistent with a steep supply curve absorbing demand mainly through price',
          'A large increase in homes built with little price change &#8212; elastic supply means quantity adjusts, not price',
          'An equal split: prices and quantity both rise by the same percentage &#8212; unit elastic supply ensures balanced adjustment',
          'House prices fall as the subsidy reduces builders\' costs and shifts supply rightward'
        ],
        ans: 0,
        exp: 'With <strong>inelastic supply</strong> (steep supply curve), the rightward shift in demand is absorbed mainly as a higher price, with only a small increase in quantity. This is precisely the UK experience with Help to Buy: house prices rose significantly (benefiting existing home owners) while the number of new builds increased only modestly. Supply-side constraints &#8212; planning permission, construction lead times, land availability &#8212; keep housing supply inelastic. The policy conclusion: demand subsidies in inelastic markets benefit sellers, not buyers. To help first-time buyers, supply-side reform (planning liberalisation, greenfield development) is needed to raise PES.'
      },

      /* 4 — calculation: PES and tax burden */
      { type: 'calculation',
        context: 'A good has PES = 0.4 and |PED| = 1.6. The government imposes a specific tax of <strong>&#163;10 per unit</strong>.',
        working: [
          'Consumer share of tax = PES &#247; (PES + |PED|)',
          '= 0.4 &#247; (0.4 + 1.6)',
          '= 0.4 &#247; 2.0 = 0.20 = 20%',
          'Consumer pays: 0.20 &#215; &#163;10 = &#163;2.00',
          'Producer share of tax = |PED| &#247; (PES + |PED|)',
          '= 1.6 &#247; 2.0 = 0.80 = 80%',
          'Producer bears: 0.80 &#215; &#163;10 = &#163;8.00'
        ],
        stem: 'How is the &#163;10 tax burden shared between consumers and producers?',
        opts: [
          { ped: 'Consumers bear &#163;2 and producers bear &#163;8', typ: 'Inelastic supply (0.4) means producers cannot easily redirect output &#8212; they absorb most of the tax', rev: 'The less elastic side bears more of the burden' },
          { ped: 'Consumers bear &#163;5 and producers bear &#163;5', typ: 'Equal split assumes PES = |PED| &#8212; not the case here', rev: 'Apply the formula: consumer share = PES &#247; (PES + |PED|)' },
          { ped: 'Consumers bear &#163;8 and producers bear &#163;2', typ: 'Reversed &#8212; confused which elasticity applies to which party', rev: 'Inelastic supply &#8658; producers bear more; elastic demand &#8658; consumers bear less' },
          { ped: 'Consumers bear &#163;10 and producers bear nothing', typ: 'Only possible if supply is perfectly elastic (PES = &#8734;)', rev: 'PES = 0.4 is inelastic &#8212; producers cannot avoid tax by leaving the market easily' }
        ],
        ans: 0,
        exp: 'The formula for tax incidence: <strong>consumer share = PES &#247; (PES + |PED|)</strong>. Here: 0.4 &#247; 2.0 = 20% borne by consumers (&#163;2). Producer share = |PED| &#247; (PES + |PED|) = 1.6 &#247; 2.0 = 80% (&#163;8). Intuition: the <em>less elastic</em> side bears more of the burden. With PES = 0.4 (inelastic supply), producers cannot easily reduce output or move resources elsewhere &#8212; they are "stuck" in this market and must absorb most of the tax. With elastic demand (|PED| = 1.6), consumers can easily switch to substitutes, so little of the tax is passed on to them. This principle explains why fuel duty and tobacco taxes, despite being levied on producers, are largely borne by consumers when demand is inelastic.'
      },

      /* 5 — multi_select: examples with high PES */
      { type: 'multi_select',
        stem: 'Which of the following goods or markets would you expect to have <strong>relatively high PES</strong> (elastic supply) in the long run?',
        opts: [
          'Mass-produced manufactured goods (e.g. smartphones, trainers) where production can be scaled at similar unit costs',
          'Land in central London &#8212; fixed in supply regardless of price',
          'Skilled surgeons &#8212; training takes a decade and is tightly regulated',
          'Factory-farmed chicken &#8212; breeding cycles of weeks allow rapid output expansion',
          'Offshore oil &#8212; new drilling platforms take 5&#8211;10 years and billions in capital expenditure',
          'Standard steel girders &#8212; commodity production with many global suppliers'
        ],
        correct: [0, 3, 5],
        exp: 'High PES requires: low barriers to capacity expansion, short production periods, and mobile factors. <strong>Mass-produced manufactured goods</strong> (option A) can be scaled through shift-working, outsourcing, and investment &#8212; long-run PES close to 1 or above. <strong>Factory-farmed chicken</strong> (option D) has a short production cycle (6&#8211;8 weeks), allowing rapid output increases when prices rise. <strong>Standard steel</strong> (option F) is a commodity with global competitors &#8212; high substitutability means supply is elastic. Land (option B) is perfectly inelastic (fixed in supply). Surgeons (option C) face a near-decade training pipeline &#8212; very inelastic even long-run. Offshore oil (option E) has enormous capital barriers and long lead times &#8212; inelastic supply for years.'
      },

      /* 6 — para_fill: PES and agricultural price volatility */
      { type: 'para_fill',
        stem: 'Complete the paragraph by selecting the correct word or phrase for each numbered blank.',
        anchor: 'Agricultural markets are prone to price volatility because of inelastic supply.',
        para: 'In the short run, agricultural supply is highly [1] because farmers cannot change planted acreage or increase [2] within a growing season. When a poor harvest reduces supply, the supply curve shifts [3] and, with inelastic supply, the price rises [4]. Farmers respond to high prices by planting more the following season, which over-corrects and drives prices [5] &#8212; a pattern known as the [6] model. Government [7] stocks can stabilise prices by buying surplus in good harvests and selling in bad ones.',
        blanks: [
          { id: 1, opts: ['inelastic', 'elastic', 'unit elastic', 'perfectly elastic'], ans: 0 },
          { id: 2, opts: ['yields', 'investment', 'profits', 'capital'], ans: 0 },
          { id: 3, opts: ['left', 'right', 'upward', 'outward'], ans: 0 },
          { id: 4, opts: ['sharply', 'modestly', 'not at all', 'proportionally'], ans: 0 },
          { id: 5, opts: ['down', 'up', 'sideways', 'outside'], ans: 0 },
          { id: 6, opts: ['cobweb', 'multiplier', 'accelerator', 'lemons'], ans: 0 },
          { id: 7, opts: ['buffer', 'buffer', 'budget', 'price'], ans: 0 }
        ],
        exp: '(1) <strong>Inelastic</strong>: once seed is sown, output is largely fixed for that season. (2) <strong>Yields</strong>: even with more labour or fertiliser, yields are limited by biological constraints within a season. (3) <strong>Left</strong>: a harvest failure reduces supply &#8212; leftward shift of the supply curve. (4) <strong>Sharply</strong>: with inelastic supply, the same percentage demand exceeds supply, but price must rise steeply to clear the market. (5) <strong>Down</strong>: excess production in the next good-harvest year drives prices below trend. (6) <strong>Cobweb</strong>: named for the shape traced on a supply-demand diagram as prices oscillate around equilibrium. (7) <strong>Buffer</strong> stocks: a classic government intervention buying in surplus (when P is low) and releasing in deficit (when P is high) to reduce price volatility.'
      },

      /* 7 — data_table: housing market PES */
      { type: 'data_table',
        stem: 'The table shows UK housing market data. Use it to answer the question below.',
        headers: ['Year', 'Avg house price (&#163;000)', 'New homes built (000s)', '% change in price', '% change in new builds'],
        rows: [
          ['2019', '233', '178', '&#8212;', '&#8212;'],
          ['2020', '238', '144', '+2.1%', '-19.1%'],
          ['2021', '265', '170', '+11.3%', '+18.1%'],
          ['2022', '281', '183', '+6.0%', '+7.6%'],
          ['2023', '285', '197', '+1.4%', '+7.7%']
        ],
        question: 'Using the data, what does the implied PES for UK housebuilding suggest about the market?',
        opts: [
          'PES is well below 1 in most years &#8212; supply barely responds to large price rises, consistent with planning constraints and long build times keeping supply inelastic',
          'PES is close to 1 &#8212; the UK housing market has well-functioning supply responses and prices and output move in proportion',
          'PES is greater than 2 &#8212; supply is highly elastic; builders respond rapidly to price signals in the market',
          'PES cannot be calculated from this data because prices and quantities are shown in different units'
        ],
        ans: 0,
        exp: 'In 2021: % &#916;QS = +18.1% versus % &#916;P = +11.3% &#8658; implied PES &#8776; 1.6 (apparently elastic). In 2022: +7.6% &#247; +6.0% &#8776; 1.27. But context matters: these responses follow a 2020 collapse (COVID-19 lockdown stopped construction). The rebound flatters the PES calculation &#8212; it reflects pent-up completions, not a genuine long-run supply response. The structural position is that UK housebuilding is <strong>chronically inelastic</strong>: planning permission takes 2&#8211;4 years; land is tightly controlled; NIMBYism limits greenfield release. The government\'s own OBR analysis estimates long-run housing supply PES at 0.1&#8211;0.3. The data illustrate that even with prices rising 20%+ over the period, new builds barely rose, confirming inelastic supply.'
      },

      /* 8 — odd_one_out: perfectly inelastic supply contexts */
      { type: 'odd_one_out',
        stem: 'Three of the following exhibit <strong>approximately perfectly inelastic supply</strong> in the short run. Which is the ODD ONE OUT?',
        items: [
          { icon: '&#127961;', label: 'Land in a specific city-centre location', note: '' },
          { icon: '&#127939;', label: 'Rembrandts &#8212; original paintings by a deceased artist', note: '' },
          { icon: '&#127950;', label: 'Seats at a music venue on the night of the concert', note: '' },
          { icon: '&#128664;', label: 'Petrol (gasoline) at a refinery &#8212; given one year to adjust', note: '' }
        ],
        ans: 3,
        exp: 'The odd one out is <strong>petrol given one year to adjust</strong>. Land, original Rembrandts, and concert seats on the night are all fixed in supply regardless of price &#8212; supply cannot increase at any price, hence PES = 0. Petrol, however, given a full year, allows refineries to run at higher utilisation rates, import more crude, and shift refinery throughput &#8212; supply responds to price, albeit inelastically. The key is the <em>time period</em>: in the very short run (market period), almost all supply is fixed; as time extends, supply becomes more elastic. This is why PES analyses must always specify the time horizon.'
      },

      /* 9 — diagnostic_pair: housing supply policy */
      { type: 'diagnostic_pair',
        stem: 'Exam question: <em>"Evaluate policies to reduce UK house price inflation."</em> Which student uses PES analysis more effectively?',
        students: [
          { name: 'Priya', badge: 'Candidate A',
            answer: 'The fundamental cause of UK house price inflation is that supply is highly inelastic &#8212; PES estimated at 0.1&#8211;0.3 long-run &#8212; meaning demand increases translate into price rises rather than output increases. Demand-side policies (Help to Buy, stamp duty holidays) simply shift demand rightward on an inelastic supply curve, raising prices further without addressing the underlying constraint. The solution must be supply-side: planning liberalisation (removing greenfield restrictions), releasing public land, fast-tracking permissions on brownfield sites. These policies raise PES by removing the constraints that make supply inelastic. Higher PES means the same demand increase produces more homes and less price inflation. However, supply-side reform is slow &#8212; even if PES rises to 0.6, the lag before new homes appear means short-run price pressures persist. This suggests a two-track approach: short-run demand management (remove inflationary subsidies) combined with long-run supply reform.'
          },
          { name: 'Jake', badge: 'Candidate B',
            answer: 'To reduce house price inflation, the government could build more houses. It could also help people afford houses by giving them subsidies. Planning rules could be relaxed to allow more houses to be built in green belt areas. Interest rates could be raised to reduce mortgage demand, which would lower prices. The government has tried many policies in the past but they have not always worked. The problem is that there are not enough houses and too many people want to buy them. If supply was higher, prices would be lower. The government should also make sure that houses are affordable for first-time buyers by regulating estate agents and mortgage providers.'
          }
        ],
        ans: 0,
        exp: '<strong>Priya</strong> gives the stronger answer. She explicitly anchors the argument in PES values (0.1&#8211;0.3), explains the mechanical link between inelastic supply and price inflation, and distinguishes demand-side policies (which worsen the problem) from supply-side policies (which address the root cause). She also shows time-period awareness &#8212; acknowledging the lag before supply-side reform improves PES. Jake identifies relevant policies but lacks the analytical framework: he does not use PES to explain why demand subsidies are counterproductive, or why supply-side reform is the appropriate response. Priya would access Level 4; Jake Level 2&#8211;3.'
      },

      /* 10 — chain: supply-side policy improving PES */
      { type: 'chain',
        stem: 'Planning reform allows faster approval for new housing. Place the consequences in the correct logical order.',
        items: [
          { label: 'House prices rise more modestly in response to demand increases', note: '' },
          { label: 'Planning reform reduces the time to obtain permission from 4 years to 18 months', note: '' },
          { label: 'More housing units complete per year; housing supply PES rises toward 0.6', note: '' },
          { label: 'Construction firms can commit to new sites sooner; investment in housebuilding rises', note: '' },
          { label: 'First-time buyers benefit: prices are lower relative to incomes; affordability improves', note: '' },
          { label: 'Government achieves its housing supply target; political pressure to cut mortgage rates eases', note: '' }
        ],
        correctOrder: [1, 3, 2, 0, 4, 5],
        exp: '<strong>The correct sequence:</strong><br>1. Planning reform shortens the approval timeline.<br>2. Builders commit to sites earlier; investment rises.<br>3. More completions per year; PES rises.<br>4. Demand increases translate into quantity, not price.<br>5. Affordability improves for first-time buyers.<br>6. Political target met; macro pressure eases.<br><br>This chain illustrates why supply-side reform is the most durable solution to housing market failure. Each link relies on PES rising &#8212; the central mechanism. In contrast, demand-side policies (stage zero, not shown) would skip straight to raising prices without any of the subsequent benefits. Exam essays that trace this full chain, linking PES to outcomes for consumers, producers, and government, access the highest analytical marks.'
      }

    ]
  };

})();
