/* ============================================================
   ECONOS — Quiz content for: Standard of Living & Wellbeing
   10 questions covering HDI, welfare measurement, Kuznets curve,
   composite vs single measures, and happiness economics.
   ============================================================ */

(function () {

  window.ECONOS_QUIZ = {
    id:       'sol_wellbeing_main',
    topicId:  'sol_wellbeing_main',
    title:    'Standard of Living &amp; Wellbeing',
    subtitle: 'Theme 2.1.2 &#183; Edexcel A-Level',
    sessionLabel: 'Session 1 of 3: Learn',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-style questions covering the three dimensions of welfare, HDI construction and interpretation, limitations of GDP as a welfare proxy, the Kuznets curve, composite vs single-dimension measures, and the Easterlin paradox. Designed to test the applied analytical reasoning examiners reward in welfare and development essays.',
    shortNames: {
      'welfare-framing':    'Three dimensions',
      'hdi':                'The HDI',
      'gdp-welfare-limits': 'GDP welfare limits',
      'kuznets':            'Kuznets curve',
      'composite-measures': 'Composite measures',
      'happiness':          'Happiness economics',
      'uk-wellbeing':       'UK wellbeing evidence'
    },

    questions: [

      /* 1 &#8212; MCQ: HDI dimensions */
      { type: 'mcq',
        stem: 'The <strong>Human Development Index (HDI)</strong> is composed of three equally-weighted dimensions. Which of the following correctly identifies all three?',
        opts: [
          'Life expectancy at birth; mean and expected years of schooling; GNI per capita (PPP, log scale)',
          'GDP per capita (PPP); literacy rate; infant mortality rate',
          'Life expectancy; income Gini coefficient; average years of schooling',
          'GNI per capita (market rates); life satisfaction scores; years of secondary education'
        ],
        ans: 0,
        exp: 'The HDI uses: (1) <strong>Health</strong> &#8212; life expectancy at birth; (2) <strong>Education</strong> &#8212; mean years of schooling for adults plus expected years for children; (3) <strong>Income</strong> &#8212; GNI per capita at PPP, converted to a log scale to reflect diminishing marginal utility. Using GNI (not GDP) corrects for income that leaves a country via profit repatriation. The log scale is an A* point &#8212; it reflects the insight that each extra dollar matters less as income rises. The composite is calculated as a <em>geometric mean</em> of the three sub-indices.'
      },

      /* 2 &#8212; Diagnostic pair: Kuznets curve */
      { type: 'diagnostic_pair',
        stem: 'Exam question: <em>"Evaluate the Kuznets curve as a description of the relationship between economic development and income inequality."</em> Which student gives the stronger answer?',
        students: [
          { name: 'Fatima', badge: 'Candidate A',
            answer: 'The Kuznets curve (1955) hypothesises an inverted-U relationship between per capita income and inequality: as countries industrialise, inequality first rises as workers move from low-wage agriculture to higher-wage manufacturing, then eventually falls as welfare states, education, and service-sector expansion share growth more widely. Supporting evidence: the UK and other early-industrialised nations broadly followed this pattern. However, significant counter-evidence challenges the universality of the curve. First, the East Asian \'tigers\' (South Korea, Taiwan) achieved rapid growth <em>with</em> declining inequality &#8212; contradicting the inevitable rise phase. Second, the US and UK saw <em>rising</em> inequality in the 1980s-2000s despite high income levels &#8212; a \'second hump\' the original curve cannot explain, attributable to skill-biased technological change and globalisation. Third, the curve is a statistical hypothesis, not a causal mechanism &#8212; the relationship is mediated by institutions and policy choices, not automatically determined by income level.'
          },
          { name: 'Ben', badge: 'Candidate B',
            answer: 'The Kuznets curve says that as countries get richer, inequality goes up and then comes down, making an upside-down U shape. This happens because at first only some workers get higher wages in the new industries, but later more people benefit. There is some evidence for this in countries like the UK where inequality did eventually fall after industrialisation. However, not all countries follow this pattern &#8212; some countries in East Asia managed to grow without much inequality. Also, in recent years rich countries like the USA have seen inequality rise again even though they are very wealthy, which the Kuznets curve doesn\'t explain. So the Kuznets curve is useful but not completely accurate.'
          }
        ],
        ans: 0,
        exp: '<strong>Fatima</strong> gives the stronger answer. She correctly attributes the hypothesis to Kuznets (1955) with a date &#8212; an immediate credibility signal. She explains the underlying mechanism (agricultural-industrial labour shift), provides specific counter-evidence (East Asian tigers, US/UK second hump), names the explanatory factor for the counter-evidence (skill-biased technological change), and crucially describes the Kuznets curve as a <em>hypothesis</em> mediated by institutions &#8212; not a law. Ben covers similar ground but without dates, economists\' names, named mechanisms, or the critical point about institutional mediation. Fatima\'s answer accesses Level 4; Ben\'s Level 2-3.'
      },

      /* 3 &#8212; Elastic sort: GDP limitation */
      { type: 'elastic_sort',
        stem: 'For each scenario, classify the relevant <strong>GDP welfare limitation</strong>.',
        categories: ['dist', 'env', 'inf', 'def'],
        categoryLabels: ['Distribution', 'Environmental cost', 'Informal economy', 'Defensive expenditure'],
        goods: [
          { icon: '&#9878;', label: 'GDP rises as households spend more on home security after a rise in crime rates', note: '', ans: 'def' },
          { icon: '&#127811;', label: 'Subsistence farming in rural Kenya adds real food output but is excluded from official GDP', note: '', ans: 'inf' },
          { icon: '&#9878;', label: 'UK GDP grows but median wages stagnate while top incomes surge &#8212; Gini worsens', note: '', ans: 'dist' },
          { icon: '&#127807;', label: 'Oil spill clean-up costs count as positive GDP despite causing environmental harm', note: '', ans: 'def' },
          { icon: '&#127811;', label: 'Carbon emissions from industrial growth damage long-run welfare but are not deducted from GDP', note: '', ans: 'env' },
          { icon: '&#9878;', label: 'Unpaid childcare by parents is not included in UK GDP, understating real household output', note: '', ans: 'inf' }
        ],
        exp: '<strong>Defensive expenditures</strong>: spending that fixes problems (crime security, oil clean-up) counts as positive GDP but does not improve welfare. <strong>Distribution</strong>: GDP averages hide inequality &#8212; rising GDP can coexist with stagnant median incomes. <strong>Environmental cost</strong>: pollution and carbon emissions reduce welfare without being subtracted from GDP. <strong>Informal economy</strong>: unpaid work and subsistence farming have real value omitted from official statistics. A* welfare essays match the correct limitation to the specific context rather than listing all limitations generically.'
      },

      /* 4 &#8212; MCQ: geometric mean */
      { type: 'mcq',
        stem: 'The HDI uses a <strong>geometric mean</strong> rather than an arithmetic mean to aggregate its three sub-indices. What is the key implication of this choice?',
        opts: [
          'Low performance in any one dimension significantly drags down the overall score &#8212; a country cannot compensate for poor health with high income',
          'The three dimensions are weighted proportionally to their importance, with income receiving the greatest weight because it drives the other two dimensions',
          'Countries with very different profiles can receive identical HDI scores, making it impossible to distinguish between them',
          'The geometric mean is simpler to calculate than an arithmetic mean, making the HDI more accessible to non-specialist users'
        ],
        ans: 0,
        exp: 'The <strong>geometric mean</strong> penalises imbalances between dimensions. If one sub-index is very low, the geometric mean will be much lower than an arithmetic average of the same numbers. This means a country with high income but very low health (e.g. a wealthy authoritarian state with poor public health) cannot hide its human development deficit behind high income. An A* answer states this explicitly: \'Unlike a simple average, the geometric mean ensures that poor health or poor education cannot be compensated by high income &#8212; reflecting the view that human development requires progress across all three dimensions simultaneously.\''
      },

      /* 5 &#8212; Multi-select: HDI limitations */
      { type: 'multi_select',
        stem: 'Which of the following are genuine <strong>limitations of the HDI</strong> as a measure of welfare?',
        opts: [
          'It does not capture income inequality within countries &#8212; two countries with identical GNI per capita but different Gini coefficients receive the same income sub-score',
          'It is published annually, making it impossible to track changes in welfare over time',
          'It omits political freedom, security, environmental quality, and social connection from its calculation',
          'It uses GNI per capita rather than GDP per capita, which critics argue is less internationally comparable',
          'The equal weighting of health, education, and income embeds a value judgment that may not reflect all societies\' priorities',
          'It is calculated by the United Nations, which introduces political bias into the methodology'
        ],
        correct: [0, 2, 4],
        exp: 'Options A, C, and E are genuine HDI limitations. (A) The Inequality-Adjusted HDI (IHDI) attempts to address within-country inequality &#8212; the gap between HDI and IHDI reveals how much development is lost to inequality. (C) The HDI covers only three dimensions; political freedom, environmental quality, and social connection are excluded &#8212; the OECD Better Life Index is broader. (E) Equal weighting is a value judgment &#8212; why not weight health more, or include sustainability? Option B is false (the HDI is published annually). Option D is incorrect (GNI is <em>more</em> appropriate than GDP for welfare). Option F is unfounded.'
      },

      /* 6 &#8212; Para fill: Easterlin paradox */
      { type: 'para_fill',
        stem: 'Complete the paragraph about the Easterlin paradox by selecting the correct word or phrase for each blank.',
        anchor: 'The Easterlin paradox challenges the assumption that rising incomes always raise welfare.',
        para: 'Easterlin (1974) found that within a country, [1] people report higher happiness. However, as countries become richer [2], average happiness does not consistently rise. This suggests that [3] income &#8212; how one\'s income compares to others &#8212; may matter more than [4] income for wellbeing. The concept of [5] adaptation suggests that people quickly adjust to higher income levels, returning to a [6] level of happiness. If correct, policies focused purely on [7] growth may fail to improve aggregate welfare.'
        ,
        blanks: [
          { id: 1, opts: ['richer', 'younger', 'healthier', 'more educated'], ans: 0 },
          { id: 2, opts: ['over time', 'quickly', 'unevenly', 'externally'], ans: 0 },
          { id: 3, opts: ['relative', 'nominal', 'absolute', 'marginal'], ans: 0 },
          { id: 4, opts: ['absolute', 'relative', 'real', 'potential'], ans: 0 },
          { id: 5, opts: ['hedonic', 'income', 'preference', 'welfare'], ans: 0 },
          { id: 6, opts: ['baseline', 'minimum', 'maximum', 'target'], ans: 0 },
          { id: 7, opts: ['GDP', 'income tax', 'export', 'population'], ans: 0 }
        ],
        exp: '(1) <strong>Richer</strong>: within a given country at a point in time, higher income correlates with higher reported happiness. (2) <strong>Over time</strong>: the paradox is about the time-series &#8212; as countries grow richer, happiness does not keep rising. (3) <strong>Relative</strong>: comparing yourself to peers may drive wellbeing more than absolute level. (4) <strong>Absolute</strong>: absolute income is the total level of income, not relative to others. (5) <strong>Hedonic</strong>: hedonic adaptation &#8212; the hedonic treadmill &#8212; means gains are temporary. (6) <strong>Baseline</strong>: people return to their baseline happiness level. (7) <strong>GDP</strong>: the policy implication is that GDP-centred growth strategies may not maximise welfare.'
      },

      /* 7 &#8212; Odd one out: welfare measures */
      { type: 'odd_one_out',
        stem: 'Three of these are <strong>composite welfare measures</strong> that go beyond single-dimension GDP. Which is the ODD ONE OUT?',
        items: [
          { icon: '&#128200;', label: 'Human Development Index (HDI) &#8212; health, education, and income combined', note: '' },
          { icon: '&#127758;', label: 'Happy Planet Index &#8212; wellbeing achieved per unit of environmental impact', note: '' },
          { icon: '&#128176;', label: 'Gini coefficient &#8212; measures the degree of income inequality within a country', note: '' },
          { icon: '&#127758;', label: 'Multidimensional Poverty Index (MPI) &#8212; deprivation across health, education, and living standards', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is the <strong>Gini coefficient</strong>. Unlike the HDI, Happy Planet Index, and MPI, the Gini coefficient is a <em>single-dimension</em> measure &#8212; it captures only income distribution, not multiple dimensions of welfare simultaneously. The other three are composite measures that deliberately combine multiple indicators to give a broader picture of human welfare. The Gini is an important supplementary measure for distribution but is not a composite welfare index.'
      },

      /* 8 &#8212; Data table: UK wellbeing evidence */
      { type: 'data_table',
        stem: 'The table shows selected UK welfare indicators over a decade.',
        headers: ['Indicator', '2010', '2015', '2019', '2023'],
        rows: [
          ['Real GDP per capita (&#163;, approx)', '26,100', '27,500', '28,800', '29,400'],
          ['ONS life satisfaction (0&#8211;10)', '7.4', '7.6', '7.7', '7.3'],
          ['Gini coefficient', '0.36', '0.36', '0.35', '0.37'],
          ['Mental health problems (% population)', '16%', '17%', '19%', '22%']
        ],
        question: 'Which interpretation of the data is most consistent with all four indicators?',
        opts: [
          'Real GDP per capita has grown, but this understates the full welfare picture: life satisfaction has fallen below its 2010 level by 2023, inequality has slightly worsened, and rising mental health problems suggest GDP growth is not translating into across-the-board welfare improvement',
          'All four indicators show consistent improvement from 2010 to 2023, confirming that rising GDP per capita generates broad-based welfare gains across material and non-material dimensions',
          'The fall in life satisfaction from 7.7 to 7.3 between 2019 and 2023 indicates that UK welfare has declined in absolute terms since 2019, making all previous GDP growth effectively irrelevant',
          'The rising Gini coefficient means inequality is the sole explanation for stagnant life satisfaction, suggesting redistribution is the only welfare policy needed'
        ],
        ans: 0,
        exp: 'The data tell a nuanced story. GDP per capita has grown steadily (+13% over the period) &#8212; a positive material story. But life satisfaction peaked at 7.7 in 2019 and fell back to 7.3 by 2023 (below 2010). The Gini is broadly flat, worsening slightly by 2023. Mental health problems have risen consistently. This divergence &#8212; rising GDP but stagnant or falling wellbeing indicators &#8212; is precisely the pattern that motivates composite welfare measures like the ONS Wellbeing Framework. Option B is too optimistic (not all indicators improved). Option C overstates the 2019-23 decline. Option D attributes the entire pattern to inequality, ignoring other factors including the 2022-23 cost-of-living crisis.'
      },

      /* 9 &#8212; Chain: HDI > GDP for welfare comparisons */
      { type: 'chain',
        stem: 'Place the steps in the correct order to explain why the HDI is <strong>preferable to GDP per capita</strong> for welfare comparisons between a high-income country and a middle-income developing country.',
        items: [
          { label: 'GDP per capita captures income but ignores health, education, and distribution &#8212; key dimensions of welfare', note: '' },
          { label: 'The HDI is therefore a superior welfare comparison tool for this cross-country question', note: '' },
          { label: 'The question requires comparing welfare across countries with different development profiles', note: '' },
          { label: 'A country may have high GDP per capita but low life expectancy or poor education &#8212; the HDI\'s geometric mean penalises this', note: '' },
          { label: 'HDI combines health (life expectancy), education (years of schooling), and income (GNI per capita at PPP)', note: '' },
          { label: 'GDP per capita alone cannot reveal whether income generates health or education improvements', note: '' }
        ],
        correctOrder: [2, 0, 5, 4, 3, 1],
        exp: '<strong>The logical chain:</strong><br>1. Establish the question requires cross-country welfare comparison.<br>2. Identify that GDP captures only income.<br>3. Note that income alone cannot reveal health or education outcomes.<br>4. Introduce the HDI as combining all three dimensions.<br>5. Apply the geometric mean point &#8212; imbalance is penalised.<br>6. Conclude HDI is preferable.<br><br>This chain is the model answer structure for \'Explain why the HDI is a better welfare measure than GDP per capita.\' A* answers follow exactly this logic &#8212; each step builds on the previous one with the A* gem at step 5 (geometric mean penalises imbalances).'
      },

      /* 10 &#8212; Calculation: HDI interpretation */
      { type: 'calculation',
        context: 'Country X has an HDI of <strong>0.92</strong> and a GNI per capita of <strong>&#163;38,000 (PPP)</strong>. Country Y has an HDI of <strong>0.79</strong> and a GNI per capita of <strong>&#163;32,000 (PPP)</strong>. The gap between each country\'s HDI and its Inequality-Adjusted HDI (IHDI) is: Country X &#8212; 0.04; Country Y &#8212; 0.12.',
        working: [
          'Country X IHDI = 0.92 - 0.04 = 0.88',
          'Country Y IHDI = 0.79 - 0.12 = 0.67',
          'IHDI gap as % of HDI: Country X = 4/0.92 = 4.3%; Country Y = 12/0.79 = 15.2%',
          'Country Y loses 15.2% of its HDI to inequality; Country X loses only 4.3%',
          'Despite Country Y having lower GDP, inequality is significantly more damaging to its welfare'
        ],
        stem: 'Which statement best interprets the HDI and IHDI data for Countries X and Y?',
        opts: [
          { ped: 'Country X is a better welfare performer than Country Y on all dimensions, but Country Y loses proportionally three times as much of its HDI to within-country inequality', typ: 'Correctly reads both HDI rankings and IHDI adjustments to identify the inequality penalty', rev: 'IHDI gap = amount of development lost to inequality; the larger the gap, the worse inequality is' },
          { ped: 'Country Y has a higher welfare outcome than Country X when inequality is accounted for, because its IHDI falls by less in absolute terms', typ: 'Confused absolute and proportional falls &#8212; 0.04 absolute fall is larger in proportional terms than it looks', rev: 'Compare the IHDI gap as a share of HDI, not just the absolute number' },
          { ped: 'The IHDI data shows that Country X has more income inequality than Country Y, because its IHDI is lower in absolute value', typ: 'Misread &#8212; Country X has IHDI 0.88, Country Y has IHDI 0.67; X is higher, not lower', rev: 'Higher IHDI means less is lost to inequality, not more' },
          { ped: 'GNI per capita is a better welfare measure than IHDI because it is simpler and more widely available', typ: 'Does not engage with the data provided and ignores the value of inequality adjustment', rev: 'The question asks for interpretation of the IHDI data specifically' }
        ],
        ans: 0,
        exp: 'Country X: IHDI = 0.88 (loses 4.3% of its HDI to inequality). Country Y: IHDI = 0.67 (loses 15.2% of its HDI to inequality). Despite Country Y being lower-income, its proportional inequality loss is <strong>three times</strong> that of Country X. This demonstrates the value of the IHDI: two countries can both look acceptable on raw HDI but the IHDI reveals that one has severe within-country inequality undermining that achievement. A* welfare answers use the IHDI gap explicitly when contrasting countries with similar HDI profiles but different distributional outcomes.'
      }

    ]
  };

})();
