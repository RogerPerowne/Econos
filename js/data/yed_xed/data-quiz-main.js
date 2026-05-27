(function () {

  window.ECONOS_QUIZ = {
    id:       'yed_xed_main',
    topicId:  'yed_xed_main',
    title:    'YED &amp; XED',
    subtitle: 'Theme 1 &middot; Topic 2.3 &middot; Edexcel A-Level',
    backUrl:  TopicLoader.buildUrl('learn.html', { topic: 'yed_xed_main' }),
    backLabel: 'Back to Learn It',
    lede: '10 questions · ~8 minutes · covers YED and XED formulas, normal/inferior/luxury classification, business strategy, and macro implications',
    shortNames: [
      'YED formula MCQ', 'YED numeric', 'Normal/inferior/luxury sort', 'XED formula MCQ',
      'XED numeric', 'Match pairs', 'Cause & effect', 'Para fill',
      'Data table', 'Evaluation multi-select'
    ],

    questions: [

      /* 1 – MCQ: YED interpretation */
      { type: 'mcq',
        id: 'q_yed_1',
        stem: 'Which combination of YED values correctly classifies the three types of good?',
        opts: [
          'Normal good: YED = +0.8; Luxury good: YED = +2.1; Inferior good: YED = −0.6',
          'Normal good: YED = −0.8; Luxury good: YED = +2.1; Inferior good: YED = +0.6',
          'Normal good: YED = +0.8; Luxury good: YED = −2.1; Inferior good: YED = −0.6',
          'Normal good: YED = 0; Luxury good: YED = +0.5; Inferior good: YED = −0.6'
        ],
        ans: 0,
        exp: 'YED = % change in quantity demanded ÷ % change in income. <strong>Normal good</strong>: YED > 0 (demand rises with income) but YED < 1 (less than proportionally). <strong>Luxury good</strong>: YED > 1 (demand rises more than proportionally with income – these goods take a larger share of income as incomes rise). <strong>Inferior good</strong>: YED < 0 (demand falls as income rises – consumers switch to superior alternatives). Examples: luxury cars (YED ≈ +2.5), own-brand food (YED ≈ −0.5), bus travel (YED ≈ −0.4), smartphones (YED ≈ +0.8).'
      },

      /* 2 – Numeric input: YED calculation */
      { type: 'numeric_input',
        id: 'q_yed_2',
        stem: 'Calculate the <strong>income elasticity of demand (YED)</strong>.',
        context: 'When average UK household income rises from <strong>£40,000 to £44,000 per year</strong>, annual demand for foreign holidays increases from <strong>20 million to 23 million</strong> trips.',
        answer: 1.5,
        tolerance: 0.05,
        unit: '',
        hint: 'YED = (% change in quantity demanded) ÷ (% change in income). Use original values as base.',
        workingSteps: [
          '% change in income = (44,000 − 40,000) ÷ 40,000 × 100 = +10%',
          '% change in QD = (23 − 20) ÷ 20 × 100 = +15%',
          'YED = +15% ÷ +10% = +1.5'
        ],
        exp: '% change in income = (44,000−40,000)/40,000 × 100 = <strong>+10%</strong>. % change in QD = (23−20)/20 × 100 = <strong>+15%</strong>. YED = 15%/10% = <strong>+1.5</strong>. Since YED > 1, foreign holidays are a <strong>luxury good</strong> – demand rises more than proportionally with income. This has important business implications: luxury goods businesses should expand in periods of strong income growth but face sharper demand falls in recessions. Airlines targeting leisure travellers face highly income-elastic demand – this explains why budget carriers cut capacity aggressively during the 2009 recession.'
      },

      /* 3 – Elastic sort: normal vs inferior vs luxury */
      { type: 'elastic_sort',
        id: 'q_yed_3',
        stem: 'UK household incomes rise 10%. Classify each good\'s expected demand response.',
        categories: ['rises_lots', 'rises_little', 'falls'],
        categoryLabels: ['Demand rises strongly (luxury, YED > 1)', 'Demand rises slightly (normal, 0 < YED < 1)', 'Demand falls (inferior, YED < 0)'],
        goods: [
          { icon: '✈️', label: 'International business class flights', note: '', ans: 'rises_lots' },
          { icon: '🚌', label: 'Local bus journeys', note: '', ans: 'falls' },
          { icon: '🍞', label: 'Sliced white bread', note: '', ans: 'rises_little' },
          { icon: '💎', label: 'Luxury watches costing over £5,000', note: '', ans: 'rises_lots' },
          { icon: '🥫', label: 'Supermarket own-brand tinned food', note: '', ans: 'falls' },
          { icon: '📱', label: 'Mid-range smartphones', note: '', ans: 'rises_little' }
        ],
        exp: '<strong>Luxury goods (YED > 1)</strong>: demand rises more than proportionally with income – business class travel, luxury watches, fine dining. <strong>Normal goods (0 < YED < 1)</strong>: demand rises but less than proportionally – staple foods, standard electronics. <strong>Inferior goods (YED < 0)</strong>: demand falls as income rises – own-brand basic foods, bus travel (replaced by cars), cheap fast fashion. Understanding income elasticity helps businesses forecast demand through economic cycles and position products for different income segments.'
      },

      /* 4 – MCQ: XED interpretation */
      { type: 'mcq',
        id: 'q_yed_4',
        stem: 'If the cross-price elasticity of demand (XED) between Good A and Good B is <strong>−1.8</strong>, this means:',
        opts: [
          'A and B are strong complements – a 10% rise in the price of B causes an 18% fall in demand for A',
          'A and B are strong substitutes – a 10% rise in the price of B causes an 18% rise in demand for A',
          'A and B are unrelated goods – the negative value shows no relationship between their markets',
          'A is an inferior good – its demand falls when B\'s price rises'
        ],
        ans: 0,
        exp: 'XED = % change in QD of Good A ÷ % change in price of Good B. <strong>Negative XED</strong> → goods are <strong>complements</strong>: when the price of B rises, consumers buy less B and therefore less A too (joint demand falls). The stronger the complementary relationship, the more negative the XED. <strong>Positive XED</strong> → substitutes: when B\'s price rises, consumers switch to A (demand for A rises). XED = 0 → unrelated goods. Examples: XED(petrol, cars) ≈ −0.6 (complements); XED(Pepsi, Coca-Cola) ≈ +0.8 (substitutes).'
      },

      /* 5 – Numeric input: XED calculation */
      { type: 'numeric_input',
        id: 'q_yed_5',
        stem: 'Calculate the <strong>cross-price elasticity of demand (XED)</strong> between coffee and tea.',
        context: 'When the price of coffee rises from <strong>£3.00 to £3.60 per cup</strong> (a 20% rise), daily demand for tea increases from <strong>5 million to 5.6 million cups</strong>.',
        answer: 0.6,
        tolerance: 0.03,
        unit: '',
        hint: 'XED = (% change in QD of tea) ÷ (% change in price of coffee)',
        workingSteps: [
          '% change in price of coffee = (3.60 − 3.00) ÷ 3.00 × 100 = +20%',
          '% change in QD of tea = (5.6 − 5.0) ÷ 5.0 × 100 = +12%',
          'XED = +12% ÷ +20% = +0.6'
        ],
        exp: '% change in price of coffee = +20%. % change in QD of tea = (5.6−5.0)/5.0 × 100 = +12%. XED = 12%/20% = <strong>+0.6</strong>. Positive XED confirms coffee and tea are <strong>substitutes</strong> – when coffee becomes more expensive, consumers partially switch to tea. XED = +0.6 suggests moderate substitutability (consumers don\'t switch completely – they have distinct preferences for each drink). For a cafe business, this means a competitor\'s price rise creates an opportunity – but the opportunity is limited because the products are imperfect substitutes.'
      },

      /* 6 – Match pairs: YED and XED applications */
      { type: 'match_pairs',
        id: 'q_yed_6',
        stem: 'Match each business or policy scenario to the elasticity concept it demonstrates.',
        pairs: [
          { a: 'A luxury car brand plans bigger production cuts in recession than a budget brand', b: 'Luxury goods have YED > 1; demand is more income-sensitive' },
          { a: 'A coffee chain raises prices – nearby tea shops see sales rise', b: 'Positive XED – coffee and tea are substitutes' },
          { a: 'A phone manufacturer bundles phones with cheap data plans', b: 'Negative XED – phones and data plans are complements; lowering plan price raises phone demand' },
          { a: 'Supermarkets stock more own-brand products during recessions', b: 'Inferior goods have negative YED – demand rises as income falls' },
          { a: 'Airlines expand capacity on routes to emerging economies as middle classes grow', b: 'Luxury good YED > 1 – as incomes rise, air travel demand grows disproportionately' },
          { a: 'A government cuts income tax – luxury retailers increase stock levels more than supermarkets', b: 'High YED for luxury goods means stronger demand response to income changes' }
        ],
        exp: 'YED and XED are practical tools for business and policy: <strong>YED > 1 (luxury)</strong> → amplified sensitivity to income cycles; <strong>YED < 0 (inferior)</strong> → counter-cyclical demand; <strong>XED > 0 (substitutes)</strong> → competitive spillovers between firms; <strong>XED < 0 (complements)</strong> → joint demand – pricing one product affects demand for the other. Firms use XED to understand competitive dynamics; policymakers use YED to forecast tax revenue impacts across the economic cycle.'
      },

      /* 7 – Cause & effect: income and cross-price effects */
      { type: 'cause_effect',
        id: 'q_yed_7',
        stem: 'Match each economic change to its expected demand effect.',
        pairs: [
          { cause: 'UK economy enters deep recession; incomes fall 5%', effect: 'Demand for luxury goods falls sharply; demand for own-brand food may rise' },
          { cause: 'Petrol prices double due to an OPEC supply cut', effect: 'Demand for electric vehicles rises (substitutes); demand for petrol car servicing falls (complements)' },
          { cause: 'Average UK income rises from £35,000 to £42,000 over 5 years', effect: 'Demand for foreign holidays and luxury cars grows faster than income' },
          { cause: 'Price of smartphones falls 30% due to competition', effect: 'Demand for phone cases and screen protectors rises (complements)' },
          { cause: 'Train fares rise 20% nationally', effect: 'Demand for domestic flights and car hire rises (substitutes)' },
          { cause: 'A country transitions from low to middle income', effect: 'Food share of spending falls; demand for services and manufactured goods rises (Engel\'s Law)' }
        ],
        exp: 'Elasticity in action: recession hits luxury goods (high YED) hardest – inferior goods may benefit. Petrol prices drive substitute and complement effects across transport markets. Income growth in emerging economies drives structural shifts in spending composition (Engel\'s Law: food share falls as income rises). Complement and substitute relationships mean price changes in one market ripple through related markets – a critical insight for both business strategy and competition policy.'
      },

      /* 8 – Para fill: Engel's Law and macro implications */
      { type: 'para_fill',
        id: 'q_yed_8',
        stem: 'Complete the paragraph about YED and structural economic change.',
        anchor: 'Engel\'s Law and income elasticity explain the structural transformation of developing economies.',
        para: 'As incomes rise in developing economies, the share of income spent on [1] falls as a proportion of total spending – this is [2]\'s Law. Resources shift toward goods and services with higher [3] elasticity of demand. Industries producing [4] goods (YED > 1) grow faster than the economy; industries producing [5] goods (YED < 0) decline. This helps explain why China\'s rapid income growth since 1990 has produced booming demand for [6] goods and a falling share of [7] in household spending.',
        blanks: [
          { id: 1, opts: ['food', 'housing', 'transport', 'energy'], ans: 0 },
          { id: 2, opts: ['Engel', 'Keynes', 'Hayek', 'Marx'], ans: 0 },
          { id: 3, opts: ['income', 'price', 'cross-price', 'supply'], ans: 0 },
          { id: 4, opts: ['luxury', 'inferior', 'normal', 'staple'], ans: 0 },
          { id: 5, opts: ['inferior', 'luxury', 'normal', 'superior'], ans: 0 },
          { id: 6, opts: ['luxury', 'inferior', 'basic', 'staple'], ans: 0 },
          { id: 7, opts: ['food', 'services', 'housing', 'transport'], ans: 0 }
        ],
        exp: '(1) <strong>Food</strong> – the classic Engel\'s Law pattern. (2) <strong>Engel</strong>\'s Law (19th-century German statistician). (3) <strong>Income</strong> elasticity – YED drives structural shifts. (4) <strong>Luxury</strong> goods industries grow faster (YED > 1). (5) <strong>Inferior</strong> goods industries shrink (YED < 0). (6) <strong>Luxury</strong> goods – cars, tourism, consumer electronics, branded fashion boomed in China. (7) <strong>Food</strong> – food\'s share of household spending has fallen dramatically in China as incomes rose, exactly as Engel\'s Law predicts.'
      },

      /* 9 – Data table: XED in transport markets */
      { type: 'data_table',
        id: 'q_yed_9',
        stem: 'The table shows transport market data following a 25% rise in national rail fares in Year 2.',
        headers: ['Indicator', 'Year 1 (before)', 'Year 2 (after)'],
        rows: [
          ['Rail journeys (millions/yr)', '1,740', '1,566'],
          ['Domestic flight passengers (millions/yr)', '42', '46'],
          ['Long-distance coach journeys (millions/yr)', '38', '44'],
          ['Car hire bookings (millions/yr)', '12', '13.2']
        ],
        question: 'Using the data, which transport modes show <strong>positive XED with rail</strong> (i.e. are substitutes for rail)?',
        opts: [
          'All three – domestic flights, coaches, and car hire all increased when rail fares rose, implying positive XED with rail in each case',
          'Only domestic flights – the other modes show no relationship to rail fares',
          'None – positive XED requires the goods to be in direct competition, which transport modes are not',
          'Only coaches – car hire and flights are too different from rail to be substitutes'
        ],
        ans: 0,
        exp: 'When rail fares rose 25%, all three alternative modes increased: domestic flights +9.5%, coaches +15.8%, car hire +10%. Each shows <strong>positive XED</strong> with rail – confirming they are substitutes. The coach market shows the strongest substitution effect (XED ≈ 0.63), suggesting coaches and trains compete closely on price for long-distance domestic travel. Domestic flights and car hire show moderate substitution. This data would be relevant to regulators setting permitted fare increases – demonstrating that rail travellers do have alternatives, which limits the monopolistic pricing power of rail operators.'
      },

      /* 10 – Multi-select: evaluation of YED in business strategy */
      { type: 'multi_select',
        id: 'q_yed_10',
        stem: 'Which statements demonstrate genuine <strong>evaluation</strong> of the role of YED in business planning?',
        opts: [
          'Income elasticity of demand measures the responsiveness of demand to a change in consumer income',
          'A firm selling luxury goods (YED = +2.5) faces amplified exposure to economic cycles – strong growth in booms but sharp revenue falls in recessions – suggesting a portfolio strategy mixing luxury and value lines could reduce earnings volatility, though this may dilute brand positioning',
          'YED > 1 means demand rises faster than income',
          'For emerging market investors, Engel\'s Law predicts that rising incomes will produce structural growth in luxury good sectors – but this assumes income gains are broadly distributed rather than concentrated at the top, which may not hold in high-inequality economies',
          'Inferior goods have negative YED',
          'Budget supermarkets may benefit in recessions due to the inferior good effect, but this advantage is self-limiting – as the economy recovers, consumers trade up, eroding the recession-era gains; durable competitive advantage requires quality improvement rather than reliance on inferior good status'
        ],
        correct: [1, 3, 5],
        exp: '<strong>Options B, D, and F are genuine evaluation.</strong> B: identifies the two-sided amplification of luxury good exposure (boom benefit, recession penalty) and reaches a qualified strategic conclusion (portfolio approach), then notes its limitation (brand dilution). D: qualifies the Engel\'s Law implication by introducing a distributional condition – the prediction assumes broad-based income growth, not true in high-inequality economies; this contextualises and limits the argument. F: identifies the self-limiting nature of the inferior good advantage (recovery erodes it) and directs a strategic conclusion (quality improvement needed for durable advantage). A, C, and E are descriptions/definitions with no evaluative move.'
      }

    ]
  };

})();
