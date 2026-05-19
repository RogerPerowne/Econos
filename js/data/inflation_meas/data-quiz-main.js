/* ============================================================
   ECONOS — Quiz content for: Inflation: Measurement & Costs
   10 questions covering CPI construction, RPI/CPIH differences,
   index limitations, winners/losers, and the 2% target.
   ============================================================ */

(function () {

  window.ECONOS_QUIZ = {
    id:       'inflation_meas_main',
    topicId:  'inflation_meas_main',
    title:    'Inflation: Measurement &amp; Costs',
    subtitle: 'Theme 2.2.1 &#183; Edexcel A-Level',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-style questions covering the definition of inflation, CPI construction, RPI versus CPIH, the limitations of price indices, the costs of inflation, the deflationary spiral, and the rationale for the 2% target. Mixed question formats target the analytical reasoning that distinguishes A* from B grade answers.',
    shortNames: {
      'inflation-framing':  'What is inflation?',
      'cpi':                'How CPI is built',
      'rpi-cpi-cpih':       'RPI vs CPI vs CPIH',
      'price-index-limits': 'Index limitations',
      'inflation-costs':    'Costs of inflation',
      'deflation-costs':    'The deflationary spiral',
      'inflation-target':   'Why 2%?'
    },

    questions: [

      /* 1 &#8212; MCQ: disinflation vs deflation */
      { type: 'mcq',
        stem: 'The UK CPI inflation rate falls from 6.0% to 3.5% over six months. Which of the following correctly describes this situation?',
        opts: [
          'Disinflation: the rate of inflation has fallen, but prices are still rising &#8212; just more slowly',
          'Deflation: prices across the economy are now falling at a rate of 3.5%',
          'Deflation: because inflation has fallen, the price level must be declining',
          'Disinflation is only possible if the Bank of England raised interest rates during this period'
        ],
        ans: 0,
        exp: '<strong>Disinflation</strong> is a fall in the <em>rate</em> of inflation &#8212; prices are still rising, just at a slower pace. Deflation requires the inflation rate to turn negative (below zero). If CPI is 3.5%, prices are still 3.5% higher than a year ago &#8212; they are not falling. Confusing disinflation and deflation is one of the most-penalised errors in inflation questions. Option D is incorrect: disinflation can result from many factors, including falling commodity prices or improved supply, without any change in monetary policy.'
      },

      /* 2 &#8212; Elastic sort: CPI basket categories */
      { type: 'elastic_sort',
        stem: 'Classify each item by whether it <strong>is included</strong> or <strong>is excluded</strong> from the UK CPI basket.',
        categories: ['in', 'out'],
        categoryLabels: ['Included in CPI', 'Excluded from CPI'],
        goods: [
          { icon: '&#127968;', label: 'Private rental costs paid by tenants', note: '', ans: 'in' },
          { icon: '&#127968;', label: 'Mortgage interest payments by homeowners', note: '', ans: 'out' },
          { icon: '&#127829;', label: 'Supermarket food and drink prices', note: '', ans: 'in' },
          { icon: '&#127868;', label: 'Council tax payments', note: '', ans: 'out' },
          { icon: '&#128664;', label: 'Petrol and diesel at the pump', note: '', ans: 'in' },
          { icon: '&#127968;', label: 'Owner-occupier housing costs (OOH) based on rental equivalence', note: '', ans: 'out' }
        ],
        exp: '<strong>CPI includes</strong>: private rents, food, petrol, clothing, entertainment, and most consumer goods. <strong>CPI excludes</strong>: mortgage interest payments, council tax, and owner-occupier housing costs (OOH). CPIH is the ONS preferred measure precisely because it adds OOH using rental equivalence and council tax. This is why CPI understated the cost-of-living squeeze for homeowners in 2022-23 when mortgage rates surged. The A* point: citing which groups are most disadvantaged by CPI\'s exclusions (mortgage holders) is a mark-scoring analytical move.'
      },

      /* 3 &#8212; Multi-select: RPI vs CPI */
      { type: 'multi_select',
        stem: 'Which of the following statements about <strong>RPI compared to CPI</strong> are correct?',
        opts: [
          'RPI includes mortgage interest payments; CPI does not',
          'RPI uses an arithmetic mean for price averaging; CPI uses a geometric mean, which tends to give a lower result',
          'The Bank of England targets RPI at 2%, not CPI',
          'RPI is typically higher than CPI by approximately 1 percentage point',
          'Rail fares in the UK are traditionally uprated using the RPI formula',
          'RPI is the ONS\'s preferred headline measure since 2017'
        ],
        correct: [0, 1, 3, 4],
        exp: 'Correct statements: (A) RPI includes mortgage interest payments &#8212; a key structural difference. (B) The formula effect: CPI\'s geometric mean within categories produces systematically lower results than RPI\'s arithmetic mean. (D) RPI runs ~1pp above CPI on average due to these structural differences. (E) Rail fares use RPI+X &#8212; governments prefer CPI for benefits uprating (lower) and operators prefer RPI for fares (higher). Incorrect: (C) The BoE targets <em>CPI</em> at 2%. (F) CPIH is the ONS preferred measure since 2017, not RPI.'
      },

      /* 4 &#8212; Diagnostic pair: inflation winners and losers */
      { type: 'diagnostic_pair',
        stem: 'Exam question: <em>"Using examples, analyse who wins and who loses from a sustained period of high inflation."</em> Which student gives the stronger answer?',
        students: [
          { name: 'Sofia', badge: 'Candidate A',
            answer: 'High inflation creates clear redistributional effects. <strong>Borrowers gain</strong> because the real value of their debt erodes: a &#163;200,000 mortgage fixed in nominal terms falls in real value as inflation rises, reducing the real burden of repayment &#8212; provided nominal wages keep pace. The government also gains as inflation reduces the real value of public debt (currently ~&#163;2.7trn). <strong>Savers lose</strong> if nominal interest rates are below inflation &#8212; real returns turn negative, as occurred with Bank Rate at 0.1% and CPI at 11.1% in late 2022, when real returns on cash savings were approximately &#8722;11%. <strong>Workers on fixed wages and pensioners</strong> on fixed nominal incomes also lose as their real purchasing power falls. The worst-off households are disproportionately hurt because they spend a higher share of income on food and energy &#8212; the items whose prices rose most in 2022-23. ONS data showed the poorest decile faced ~15% inflation while the richest faced ~8%.'
          },
          { name: 'Callum', badge: 'Candidate B',
            answer: 'Inflation creates winners and losers. Winners include borrowers because the money they owe is worth less in real terms when inflation is high. Also governments gain because the national debt is worth less. Losers include savers because their money loses value over time. Workers on fixed wages also lose out because prices rise but their pay does not. Poor people are hit harder by inflation because they spend more of their money on things like food which went up a lot in 2022. In general, inflation hurts people who have fixed incomes more than those whose incomes can rise with inflation.'
          }
        ],
        ans: 0,
        exp: '<strong>Sofia</strong> gives the stronger answer. She quantifies the examples (&#163;200,000 mortgage, &#163;2.7trn debt, 0.1% Bank Rate vs 11.1% CPI giving -11% real return, 15% vs 8% inflation by decile). She explains the <em>mechanism</em> for each group, not just the conclusion. The ONS distributional data point is A*-level evidence. Callum reaches the same conclusions but with no quantification, no institutional references, and no mechanism beyond \'money loses value\'. Sofia\'s answer would access Level 4; Callum\'s Level 2-3.'
      },

      /* 5 &#8212; MCQ: substitution bias */
      { type: 'mcq',
        stem: 'In 2020, UK CPI fell to very low levels despite many households feeling financially squeezed. This was partly because holiday and clothing prices fell (sectors consumers could not use during lockdown). Which <strong>price index limitation</strong> does this best illustrate?',
        opts: [
          'The basket weights became unrepresentative of actual spending patterns during lockdown, so CPI gave a misleading picture of the inflation actually experienced',
          'CPI always falls during recessions because firms reduce prices to stimulate demand when household incomes fall',
          'Substitution bias: because consumers substituted holidays for food, the index correctly reflected their choices',
          'The quality adjustment problem: lower-quality goods were purchased during lockdown, reducing the price index mechanically'
        ],
        ans: 0,
        exp: 'The 2020 CPI anomaly illustrates the <strong>basket composition problem</strong>. CPI weights each category by its share of normal household spending. In lockdown, consumers could not buy holidays or eat out &#8212; but these categories still carried large weights in the basket. Their falling prices pulled CPI down, even as food and energy (what locked-down households <em>actually</em> spent on) rose sharply. The basket weights lagged the radical shift in spending patterns. Option C is a definition error &#8212; substitution bias is about consumers switching to cheaper alternatives within a category, not the basket weight problem described here.'
      },

      /* 6 &#8212; Para fill: deflationary spiral */
      { type: 'para_fill',
        stem: 'Complete the paragraph explaining the deflationary spiral by selecting the correct word or phrase for each blank.',
        anchor: 'Deflation is feared by central banks because it can create a self-reinforcing trap.',
        para: 'If prices are [1] , rational consumers may delay purchases because goods will be [2] tomorrow than today. This causes [3] to fall, reducing firms\' revenues. Firms respond by cutting output and employment, causing [4] to fall further. Meanwhile, the real value of [5] rises because nominal debts are fixed while prices fall &#8212; the Fisher debt-deflation spiral. Monetary policy is limited because the central bank cannot push [6] rates below zero. The historical precedent is [7] , where prices fell ~25% and recovery required massive fiscal intervention.'
        ,
        blanks: [
          { id: 1, opts: ['falling', 'rising', 'stable', 'volatile'], ans: 0 },
          { id: 2, opts: ['cheaper', 'more expensive', 'unavailable', 'better quality'], ans: 0 },
          { id: 3, opts: ['consumption', 'investment', 'exports', 'savings'], ans: 0 },
          { id: 4, opts: ['incomes', 'prices', 'interest rates', 'taxes'], ans: 0 },
          { id: 5, opts: ['debt', 'assets', 'income', 'savings'], ans: 0 },
          { id: 6, opts: ['nominal interest', 'real interest', 'inflation', 'exchange'], ans: 0 },
          { id: 7, opts: ['the Great Depression (1930-33)', 'the 2008 financial crisis', 'the 1970s oil shock', 'Japanese deflation 2010-15'], ans: 0 }
        ],
        exp: '(1) <strong>Falling</strong>: deflation means prices are going down. (2) <strong>Cheaper</strong>: delay purchases because tomorrow the same item costs less. (3) <strong>Consumption</strong>: delayed spending reduces aggregate demand. (4) <strong>Incomes</strong>: lower firm revenues mean lower wages and employment &#8212; incomes fall further. (5) <strong>Debt</strong>: the Fisher debt-deflation mechanism &#8212; real debt rises as prices fall. (6) <strong>Nominal interest</strong>: the zero lower bound means nominal rates cannot go negative (though some central banks briefly tried mildly negative rates). (7) <strong>The Great Depression</strong>: the textbook deflationary episode &#8212; US prices fell ~25%, recovery required WWII fiscal stimulus.'
      },

      /* 7 &#8212; Calculation: real interest rate */
      { type: 'calculation',
        context: 'A UK saver holds &#163;10,000 in a savings account paying a <strong>nominal interest rate of 3%</strong>. The current CPI inflation rate is <strong>6%</strong>.',
        working: [
          'Real interest rate = nominal rate &#8722; inflation rate',
          'Real rate = 3% &#8722; 6% = &#8722;3%',
          'Real return in &#163;: &#163;10,000 &#215; (&#8722;3%) = &#8722;&#163;300 per year',
          'Nominal balance after 1 year = &#163;10,300',
          'But: purchasing power = &#163;10,300 &#247; 1.06 &#8776; &#163;9,717 in today\'s terms',
          'Real loss = &#163;283 in purchasing power'
        ],
        stem: 'What is the <strong>real interest rate</strong> earned by the saver, and what does this mean for their purchasing power?',
        opts: [
          { ped: 'Real rate = &#8722;3%: purchasing power falls by roughly &#163;283 despite nominally earning &#163;300', typ: 'Applies Fisher equation: real = nominal &#8722; inflation = 3% &#8722; 6% = &#8722;3%', rev: 'Inflation exceeds the nominal rate, eroding the real value of savings' },
          { ped: 'Real rate = +9%: purchasing power rises because savings plus interest exceeds inflation', typ: 'Added nominal rate and inflation instead of subtracting', rev: 'Real rate = nominal rate MINUS inflation, not plus' },
          { ped: 'Real rate = 3%: the saver earns &#163;300 so purchasing power rises by &#163;300', typ: 'Ignored inflation entirely &#8212; confused nominal and real returns', rev: 'Nominal return of 3% is eroded by 6% inflation &#8212; real return is negative' },
          { ped: 'Real rate = 0%: because nominal interest exactly compensates for half the inflation', typ: 'Incorrect arithmetic &#8212; 3 is not half of 6 in the right direction', rev: 'Subtract: 3% &#8722; 6% = &#8722;3%, not 0%' }
        ],
        ans: 0,
        exp: 'Real interest rate = nominal rate &#8722; inflation = 3% &#8722; 6% = <strong>&#8722;3%</strong>. Despite nominally receiving &#163;300 in interest, the saver\'s &#163;10,300 balance after one year buys only &#163;10,300 &#247; 1.06 &#8776; &#163;9,717 in today\'s prices &#8212; a real loss of ~&#163;283. This is the mechanism by which high inflation transfers wealth from savers to borrowers. The 2022-23 UK episode (Bank Rate 0.5-4%, CPI 6-11%) left real interest rates deeply negative for much of the period, imposing significant losses on cautious savers.'
      },

      /* 8 &#8212; Odd one out */
      { type: 'odd_one_out',
        stem: 'Three of these are <strong>costs of high inflation</strong>. Which is the ODD ONE OUT?',
        items: [
          { icon: '&#128176;', label: 'Shoe-leather costs: households make more frequent bank visits to minimise cash holdings', note: '' },
          { icon: '&#127968;', label: 'Debtors gain: the real value of fixed nominal debts falls as inflation rises', note: '' },
          { icon: '&#128200;', label: 'Menu costs: firms must frequently update price lists, menus, and catalogues', note: '' },
          { icon: '&#127758;', label: 'Fiscal drag: inflation pushes nominal incomes into higher tax brackets without real income gains', note: '' }
        ],
        ans: 1,
        exp: 'The odd one out is option B: <strong>debtors gaining is a redistribution effect</strong> of inflation, not a cost. It represents a transfer of purchasing power from creditors (who lose) to debtors (who gain as the real burden of their debt falls) &#8212; a welfare redistribution, not a net economic cost. The other three (shoe-leather costs, menu costs, and fiscal drag) all represent genuine resource costs &#8212; time, administrative burden, and increased real tax burden. A* answers distinguish between redistribution effects of inflation (winners and losers) and genuine efficiency costs.'
      },

      /* 9 &#8212; Diagram interp: why not 0% target */
      { type: 'mcq',
        stem: 'The Bank of England targets <strong>CPI inflation at 2%</strong> rather than 0%. Which of the following gives the <em>strongest</em> economic justification for this positive target?',
        opts: [
          'A 2% buffer reduces the risk of deflation; some positive inflation allows real wage adjustments without nominal wage cuts; and measurement bias means 2% may be closer to true price stability than it appears',
          'A 2% target is less ambitious than 0% and therefore easier for the Bank of England to achieve, reducing the political cost of missing the target',
          'Higher inflation always raises real economic growth; targeting 2% therefore guarantees faster expansion of GDP than a zero target',
          '2% was chosen arbitrarily by the UK Treasury in 1992 and has no strong theoretical justification beyond international convention'
        ],
        ans: 0,
        exp: 'Three complementary arguments justify a positive inflation target. (1) <strong>Deflation buffer</strong>: maintaining 2% provides insurance against negative shocks that could push inflation below zero &#8212; deflationary spirals are much harder to escape than inflation. (2) <strong>Wage flexibility</strong>: with 2% inflation, firms can cut <em>real</em> wages by freezing nominal wages &#8212; easing labour market adjustment without the resistance provoked by nominal wage cuts. (3) <strong>Measurement bias</strong>: CPI likely overstates true inflation by 0.5-1pp due to substitution bias and quality adjustment, so 2% may effectively be ~1% true inflation. (4) <strong>Monetary policy headroom</strong>: positive inflation keeps nominal rates positive, giving the BoE room to cut in recessions.'
      },

      /* 10 &#8212; Chain: CPI construction */
      { type: 'chain',
        stem: 'Place the steps in the correct order to describe how the <strong>ONS constructs the monthly CPI figure</strong>.',
        items: [
          { label: 'The resulting CPI figure is published; a change from the previous month\'s index gives the inflation rate', note: '' },
          { label: 'Prices are collected at ~140 locations and online, yielding ~180,000 individual price quotes per month', note: '' },
          { label: 'A representative basket of ~700 goods and services categories is selected based on household spending patterns', note: '' },
          { label: 'Price changes in each category are weighted by that category\'s share of total household expenditure', note: '' },
          { label: 'The basket is updated annually to reflect changing spending patterns, and a base year is set at 100', note: '' },
          { label: 'The weighted price changes are aggregated to produce the overall CPI index number', note: '' }
        ],
        correctOrder: [2, 4, 1, 3, 5, 0],
        exp: '<strong>CPI construction sequence:</strong><br>1. Select the basket (~700 categories).<br>2. Update and weight the basket annually.<br>3. Collect prices (~180,000 quotes monthly).<br>4. Apply weights to price changes in each category.<br>5. Aggregate to produce the index number.<br>6. Compare to last month to calculate the inflation rate.<br><br>Understanding this process exposes the key limitations: basket weights become outdated (step 2), prices can be hard to collect consistently (step 3), and weighting choices embed value judgments (step 4). A* answers cite these process limitations to explain why different households experience different effective inflation rates.'
      }

    ]
  };

})();
