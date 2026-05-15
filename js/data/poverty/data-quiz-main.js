/* ============================================================
   ECONOS — Quiz content for: Poverty
   10 questions covering absolute vs relative poverty,
   measurement, causes, poverty trap, and anti-poverty policies.
   ============================================================ */

(function () {

  window.ECONOS_QUIZ = {
    id:       'poverty_main',
    topicId:  'poverty_main',
    title:    'Poverty',
    subtitle: 'Theme 4.7 · Edexcel A-Level',
    sessionLabel: 'Session 1 of 3: Learn',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-style questions covering absolute and relative poverty definitions, multi-dimensional poverty measurement, the causes of poverty, the poverty trap mechanism, anti-poverty policies, and the aid versus trade debate. Includes calculation, para-fill, and diagnostic pair questions in Edexcel style.',
    shortNames: {
      'poverty_1': 'Absolute vs relative poverty',
      'poverty_2': 'Measuring poverty',
      'poverty_3': 'Causes of poverty',
      'poverty_4': 'The poverty trap',
      'poverty_5': 'Anti-poverty policies',
      'poverty_6': 'Aid vs trade vs investment',
      'poverty_7': 'UK poverty: key facts'
    },

    questions: [

      /* 1 — MCQ: absolute vs relative poverty */
      { type: 'mcq',
        stem: 'A country experiences rapid economic growth that raises average incomes by 40%. Meanwhile, the income of the poorest 10% rises by 15%. Which statement is correct?',
        opts: [
          'Absolute poverty may have fallen (more households above the basic needs threshold) but relative poverty has risen (the poorest have fallen further behind the median)',
          'Both absolute and relative poverty have fallen because all incomes have risen, including those of the poorest',
          'Absolute poverty has risen because the poorest households have lost income in real terms relative to the average',
          'Relative poverty is unchanged because all incomes rise during economic growth regardless of distribution'
        ],
        ans: 0,
        exp: '<strong>Absolute poverty</strong> is measured against a fixed threshold (e.g. World Bank $2.15/day or UK basic needs). If the poorest\'s income rises by 15%, many may cross the absolute poverty line &#8212; absolute poverty falls. <strong>Relative poverty</strong> is measured against the median (e.g. UK: 60% of median income). If the median rises by ~40% and the poorest rise by only 15%, the poorest are now further below the median in relative terms &#8212; relative poverty rises. This is exactly what happened in China 1990-2020: hundreds of millions escaped absolute poverty (the most dramatic reduction in history) while the Gini coefficient <em>rose</em>, indicating increasing relative poverty and inequality. This distinction is crucial for policy: the same growth episode can simultaneously reduce absolute poverty and increase relative poverty.'
      },

      /* 2 — Calculation: poverty trap */
      { type: 'calculation',
        context: 'A Universal Credit claimant earns &#163;800/month. The UC taper rate is 55% (55p benefits withdrawn per extra &#163;1 earned above the work allowance). Income tax rate: 20%. National Insurance rate: 12%. The claimant\'s work allowance has been exhausted.',
        working: [
          'For each extra £1 of gross earnings above the work allowance:',
          'UC withdrawn: 55p',
          'Income tax paid: 20p',
          'National Insurance paid: 12p',
          'Total deductions: 55p + 20p + 12p = 87p',
          'Net gain per extra £1 earned: £1.00 - £0.87 = £0.13',
          'Effective marginal tax rate (EMTR) = 87%'
        ],
        stem: 'What is the <strong>effective marginal tax rate (EMTR)</strong> facing this claimant, and what does this imply for work incentives?',
        opts: [
          { ped: 'EMTR = 87%: for every extra &#163;1 earned, 87p is lost in benefit withdrawal plus tax, leaving only 13p — severely undermining the incentive to increase hours or seek promotion', typ: 'UC taper (55p) + income tax (20p) + NI (12p) = 87p lost per £1 earned. Net gain = 13p.', rev: 'This is the poverty trap: rational individuals may not increase earnings if the financial gain is negligible' },
          { ped: 'EMTR = 32%: only income tax (20%) and NI (12%) apply, so 68p retained per &#163;1 earned', typ: 'Ignored the UC taper rate — the critical element creating the poverty trap', rev: 'The UC taper is the largest component: 55p withdrawn per extra £1 earned' },
          { ped: 'EMTR = 55%: only the UC taper matters since benefits replace income tax obligations', typ: 'Ignored income tax and NI — UC does not exempt claimants from tax and NI', rev: 'Three deductions apply simultaneously: taper + income tax + NI = 87%' },
          { ped: 'EMTR = 100%: the individual keeps nothing from extra earnings due to the taper', typ: 'The taper removes 55p per £1, not 100p — income tax and NI are separate', rev: 'Three deductions: 55% taper + 20% income tax + 12% NI = 87%, leaving 13p per extra £1' }
        ],
        ans: 0,
        exp: 'The <strong>poverty trap</strong> in numbers: the UC taper withdraws 55p per &#163;1 earned. On top of this, income tax takes 20p and National Insurance 12p &#8212; an effective marginal tax rate (EMTR) of <strong>87%</strong>. The claimant retains only 13p per extra pound earned. This represents a severe work disincentive: a rational individual faces little financial reward for increasing hours, seeking promotion, or accepting a higher-paying job. Note: the government cut the UC taper from 63p to 55p in October 2021 &#8212; still leaving an 87% EMTR in many cases. This illustrates the paradox of well-intentioned welfare provision: means-testing designed to target help at the poorest can create the very incentive barriers that trap people in low earnings.'
      },

      /* 3 — Elastic sort: causes of poverty */
      { type: 'elastic_sort',
        stem: 'Classify each factor as a cause of poverty primarily affecting <strong>developed countries</strong> or <strong>developing countries</strong>.',
        categories: ['dev', 'devg'],
        categoryLabels: ['Primarily developed countries', 'Primarily developing countries'],
        goods: [
          { icon: '🤖', label: 'Automation displacing routine workers in manufacturing and services', note: '', ans: 'dev' },
          { icon: '🏛️', label: 'Weak governance and corruption preventing investment and tax collection', note: '', ans: 'devg' },
          { icon: '🏚️', label: 'Rising housing costs making in-work poverty possible even for employed households', note: '', ans: 'dev' },
          { icon: '🌍', label: 'Colonial legacy and geographic disadvantage (landlocked, disease burden) constraining development', note: '', ans: 'devg' },
          { icon: '🎓', label: 'Intergenerational poverty trap: poor parents cannot invest in children\'s human capital', note: '', ans: 'dev' },
          { icon: '📉', label: 'Commodity price volatility causing boom-bust cycles for primary-export dependent economies', note: '', ans: 'devg' }
        ],
        exp: '<strong>Developed country poverty causes</strong>: automation-driven structural unemployment; in-work poverty from housing costs and zero-hours contracts; intergenerational human capital gaps (though this operates globally, it is particularly significant in developed countries\' policy context). <strong>Developing country causes</strong>: weak institutions and corruption reduce investment and public services; colonial legacy (land concentration, institutional weakness, trade terms) has lasting effects; geographic disadvantage (landlocked nations average 30% lower GDP per capita); commodity dependence creates vulnerability. Note that intergenerational poverty traps operate in both contexts but manifest differently &#8212; in developed countries, UK-style mechanisms (school quality, social capital); in developing countries, absolute lack of education infrastructure. Strong essays acknowledge context-specific causes.'
      },

      /* 4 — Multi-select: anti-poverty policies */
      { type: 'multi_select',
        stem: 'Which of the following anti-poverty policies are likely to have the <strong>most immediate</strong> impact on absolute poverty levels?',
        opts: [
          'Direct cash transfers and means-tested benefits raising incomes of the poorest immediately',
          'Investment in primary education to raise human capital of children from poor households',
          'Emergency food banks and nutrition programmes targeting households below the subsistence threshold',
          'Infrastructure investment to reduce logistics costs and enable access to markets in remote areas',
          'R&D tax credits for firms to invest in productivity-enhancing technology',
          'National Living Wage increases raising the income floor for low-paid workers'
        ],
        correct: [0, 2, 5],
        exp: 'Options A, C, and F have the most <em>immediate</em> impact on absolute poverty. <strong>Direct cash transfers</strong> (A) raise household incomes above the poverty line immediately &#8212; the most direct anti-poverty tool. <strong>Emergency food provision</strong> (C) addresses subsistence needs directly for those in deepest poverty. <strong>National Living Wage increases</strong> (F) raise the income of the lowest-paid workers from the next pay period. Options B and D are long-run investments with high eventual payoffs but time lags of years to decades before affecting poverty rates. Option E (R&D credits) has no direct poverty-reduction effect and works through productivity growth over the long run. The distinction between <em>immediate relief</em> and <em>long-run structural solutions</em> is important for essays: strong answers acknowledge both dimensions and the trade-offs.'
      },

      /* 5 — Diagnostic pair: aid vs trade */
      { type: 'diagnostic_pair',
        stem: 'Exam question: <em>"Evaluate whether international aid or trade liberalisation is more effective at reducing absolute poverty in developing countries."</em> Which student gives the stronger answer?',
        students: [
          { name: 'Amara', badge: 'Candidate A',
            answer: 'The "aid vs trade" debate requires a nuanced view: both have roles but operate differently. <strong>Aid</strong> &#8212; particularly budget support and emergency relief &#8212; provides immediate income transfer that can lift households above the absolute poverty line in the short run. The Sachs "poverty trap" argument is that the poorest countries cannot generate the savings needed to invest, so external transfers break the cycle. Evidence from conditional cash transfer programmes (Brazil\'s Bolsa Fam&#237;lia, Mexico\'s Oportunidades) shows measurable poverty reduction. However, Dambisa Moyo\'s critique is that systematic ODA can reduce incentives for African governments to develop domestic tax bases, create accountability, and attract private investment &#8212; a dependency concern. <strong>Trade liberalisation</strong> generates sustainable income through markets rather than transfers: evidence from East Asia (South Korea, Vietnam) shows export-led growth is the most powerful poverty-reduction mechanism historically. The Doha Development Round failure to cut rich-country agricultural subsidies arguably does more damage to developing country poverty than ODA provides. The synthesis is that trade and aid are <em>complementary</em>: ODA to build the institutions and infrastructure that make trade integration possible; then trade to generate sustainable development. The answer depends on the country\'s institutional capacity.'
          },
          { name: 'Leo', badge: 'Candidate B',
            answer: 'Aid and trade can both reduce poverty in developing countries. Aid is good because it gives money directly to poor countries that need it. However the problem with aid is that it does not always reach the poorest people because of corruption, and it might make countries dependent on aid rather than developing their own economies. Trade liberalisation is when countries reduce tariffs and trade more freely. This can help developing countries by giving them access to global markets to sell their goods. The downside is that developing countries might not be competitive enough to benefit from free trade right away. Overall I think both are needed and the best approach depends on the situation in each country.'
          }
        ],
        ans: 0,
        exp: '<strong>Amara</strong> gives the stronger answer. She provides the theoretical frameworks for both positions (Sachs poverty trap; Moyo dependency critique), cites specific evidence (Bolsa Fam&#237;lia, East Asian export-led growth, Doha Round failure), and synthesises the debate with a conditional conclusion: "ODA to build institutions; trade to generate sustainable development &#8212; complementary, not alternatives." Leo covers the same ground at descriptive level without frameworks, evidence, or a reasoned synthesis. Amara accesses Level 4; Leo Level 2. The Moyo reference is an A* differentiator &#8212; it shows awareness of the academic debate rather than simply reciting the case for aid. The Doha Round point is particularly strong: it connects trade policy in rich countries directly to developing-country poverty outcomes.'
      },

      /* 6 — Odd one out: relative poverty measures */
      { type: 'odd_one_out',
        stem: 'Three of these are measures of <strong>relative poverty</strong> or multi-dimensional deprivation. Which is the ODD ONE OUT?',
        items: [
          { icon: '📊', label: 'Headcount ratio: percentage of the population with income below 60% of median household income', note: '' },
          { icon: '🌍', label: 'UN Multi-dimensional Poverty Index (MPI): measuring deprivation in health, education, and living standards', note: '' },
          { icon: '💵', label: 'World Bank absolute poverty line: living on under $2.15 per person per day (2022 PPP)', note: '' },
          { icon: '📉', label: 'Persistent poverty: remaining below the poverty threshold for three or more consecutive years', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is the <strong>World Bank $2.15/day absolute poverty line</strong>. This is a measure of <em>absolute</em> poverty &#8212; a fixed threshold set at a level corresponding to basic survival needs, adjusted for purchasing power parity but not updated relative to rising median incomes in each country. The other three are measures of relative or multi-dimensional deprivation: the headcount ratio at 60% of median is a relative measure (the threshold rises as median income rises); the MPI captures non-income dimensions of deprivation regardless of a fixed income line; persistent poverty measures duration of deprivation rather than a single-year snapshot. The distinction matters for policy: absolute measures track whether basic needs are met; relative measures track social exclusion and the gap from mainstream living standards &#8212; a country can reduce absolute poverty while relative poverty rises.'
      },

      /* 7 — Para fill: UK poverty policy */
      { type: 'para_fill',
        stem: 'Complete the analytical paragraph about UK anti-poverty policy.',
        anchor: 'UK poverty policy faces a fundamental tension between work incentives and support adequacy.',
        para: 'Universal Credit was designed to simplify the benefits system and improve work [1] by replacing six legacy benefits with a single payment. However, the UC [2] rate of 55p per &#163;1 earned creates high effective marginal [3] rates for low earners, partially undermining this goal. The [4] poverty rate &#8212; where employed households remain below the poverty line &#8212; has risen to around 60% of all those in poverty, challenging the assumption that [5] alone provides escape from poverty. Child poverty affects approximately [6]% of UK children, and is disproportionately affected by the two-child [7], which the IFS links to increased child poverty.',
        blanks: [
          { id: 1, opts: ['incentives', 'barriers', 'standards', 'conditions'], ans: 0 },
          { id: 2, opts: ['taper', 'income', 'benefit', 'tax'], ans: 0 },
          { id: 3, opts: ['tax', 'benefit', 'income', 'wage'], ans: 0 },
          { id: 4, opts: ['in-work', 'child', 'pensioner', 'rural'], ans: 0 },
          { id: 5, opts: ['employment', 'benefits', 'education', 'housing'], ans: 0 },
          { id: 6, opts: ['29', '15', '42', '10'], ans: 0 },
          { id: 7, opts: ['limit', 'tax', 'benefit', 'credit'], ans: 0 }
        ],
        exp: '(1) <strong>Incentives</strong> &#8212; simplifying to Universal Credit was explicitly designed to "make work pay" by replacing overlapping means-tested benefits. (2) <strong>Taper</strong> &#8212; the UC taper rate determines how quickly benefits are withdrawn as earnings rise. (3) <strong>Tax</strong> &#8212; effective marginal tax rates facing low earners can exceed 70-87% when taper, income tax, and NI are combined. (4) <strong>In-work</strong> poverty &#8212; the UK has a persistent and growing in-work poverty problem: 60% of those in poverty live in working households. (5) <strong>Employment</strong> &#8212; the assumption that "work pays" is challenged by in-work poverty; wage levels, hours, and housing costs matter as much as employment status. (6) <strong>29%</strong> &#8212; approximately 29% of UK children are in relative poverty (2023). (7) <strong>Limit</strong> &#8212; the two-child limit restricts UC/child tax credit to the first two children; the IFS estimates this directly causes increased child poverty.'
      },

      /* 8 — Data table: poverty measurement */
      { type: 'data_table',
        stem: 'The table shows poverty data for three countries with similar GDP per capita (~$15,000 PPP).',
        headers: ['Country', 'GDP/capita ($PPP)', 'Absolute poverty rate', 'Relative poverty rate', 'Gini coefficient'],
        rows: [
          ['Country X', '15,200', '2%', '28%', '0.52'],
          ['Country Y', '14,800', '8%', '14%', '0.29'],
          ['Country Z', '15,400', '3%', '22%', '0.41']
        ],
        question: 'What does the data suggest about the relationship between income levels, inequality, and poverty?',
        opts: [
          'GDP per capita alone does not determine poverty rates — distribution matters: Country X has very high relative poverty and inequality despite similar income to Country Y, which has lower inequality and lower relative poverty',
          'Country X must be the most developed country because it has the lowest absolute poverty rate at 2%',
          'Higher GDP per capita always reduces both absolute and relative poverty proportionally',
          'Country Y\'s low Gini coefficient means it has no poverty problem at all'
        ],
        ans: 0,
        exp: 'The data powerfully illustrate that <strong>distribution, not just income level, determines poverty outcomes</strong>. Countries X, Y, and Z have almost identical GDP per capita (~$15,000), but very different poverty profiles. Country X (Gini 0.52 &#8212; high inequality) has the lowest absolute poverty (2%) but the highest relative poverty (28%) &#8212; its income is concentrated, lifting most above the basic needs threshold but leaving many far below the median. Country Y (Gini 0.29 &#8212; low inequality) has higher absolute poverty (8%) but much lower relative poverty (14%). This pattern is consistent with comparing Brazil (high growth, high inequality, persistently high relative poverty) with South Korea or Nordic countries. Option C is wrong &#8212; the data directly refute it. Option D overstates &#8212; Country Y still has 14% in relative poverty. The key examiner-rewarded insight is the absolute/relative distinction applied to data.'
      },

      /* 9 — Chain: poverty trap mechanism */
      { type: 'chain',
        stem: 'Arrange the following steps in the correct order showing how the <strong>poverty trap</strong> operates under the UK Universal Credit system.',
        items: [
          { label: 'The claimant calculates that the net financial gain from working more hours is very small', note: '' },
          { label: 'A UC claimant earns income above their work allowance', note: '' },
          { label: 'Work incentive is undermined: the claimant may rationally choose not to increase hours or accept promotion', note: '' },
          { label: 'Universal Credit benefit is withdrawn at 55p per extra &#163;1 earned (the taper rate)', note: '' },
          { label: 'Combined with income tax (20%) and NI (12%), the effective marginal rate reaches 70-87%', note: '' },
          { label: 'Benefit reform is needed to reduce the taper or raise the work allowance to restore incentives', note: '' }
        ],
        correctOrder: [1, 3, 4, 0, 2, 5],
        exp: '<strong>The correct sequence:</strong><br>1. Claimant earns income above their work allowance &#8212; taper starts.<br>2. UC benefit is withdrawn at 55p per extra &#163;1 earned.<br>3. Income tax (20p) and NI (12p) are added on top of the taper &#8212; total deductions 87p per &#163;1.<br>4. Net gain is only 13p per extra &#163;1 &#8212; nearly all earnings withdrawn.<br>5. Rational response: do not increase hours, avoid promotion, stay in low-hours work.<br>6. Policy reform needed &#8212; reduce taper rate or raise work allowance.<br><br>This illustrates the paradox of means-tested welfare: the targeting that makes it efficient at reaching the poorest also creates the strongest disincentives at the margin of eligibility. Universal Basic Income eliminates this by providing an unconditional payment with no taper &#8212; the trade-off is much higher fiscal cost.'
      },

      /* 10 — MCQ: microfinance evaluation */
      { type: 'mcq',
        stem: 'Which is the most accurate evaluation of <strong>microfinance</strong> (e.g. Grameen Bank model) as an anti-poverty tool?',
        opts: [
          'Mixed evidence: microfinance has enabled entrepreneurship and income growth for some recipients, particularly women in South Asia, but randomised controlled trials show modest average impacts and risks of debt cycles for the most vulnerable',
          'Microfinance has been universally proven to eliminate poverty in all countries where it has been tried, making it the definitive solution to developing country poverty',
          'Microfinance is harmful in all cases because small loans at market interest rates extract wealth from poor communities and make poverty worse',
          'Microfinance is irrelevant to poverty reduction because poor households cannot use credit productively without first having formal employment'
        ],
        ans: 0,
        exp: 'The evidence on microfinance is <strong>genuinely mixed</strong> &#8212; a key point for exam evaluation. The Grameen Bank model (Muhammad Yunus, Nobel Prize 2006) demonstrated that the poor are creditworthy and can use microloans productively, particularly female entrepreneurs in Bangladesh. Repayment rates are high and income effects for borrowers are positive. However, large-scale randomised controlled trials (Banerjee, Duflo &#8212; MIT Poverty Action Lab) find <em>modest average impacts on income</em> &#8212; not the transformative poverty elimination sometimes claimed. Risks include: debt cycles if borrowers take multiple loans; microfinance alone cannot address structural barriers (infrastructure, market access, education); some lenders charge very high interest rates. The best evaluation: microfinance is a <em>complement</em> to other anti-poverty tools, not a substitute. It enables productive activity where credit markets have failed but cannot replace investment in public goods. Option B overstates; Option C understates; Option D is empirically wrong.'
      }

    ]
  };

})();
