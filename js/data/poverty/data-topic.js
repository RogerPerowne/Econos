window.ECONOS_TOPIC = {
  id: 'poverty',
  topicNum: '4.7',
  theme: 'Theme 4 \xb7 A Global Perspective',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'Poverty',
  estTime: '9-11 minutes',
  goal: 'Lock in the distinction between absolute and relative poverty, their causes, and the range of anti-poverty policies.',
  intro: {
    heroKey: 'heroInequality',
    summary: 'Poverty is both an absolute deprivation of basic needs and a relative exclusion from normal living standards. Understanding its causes — from low productivity to structural inequality — determines which policies are most effective.',
    doInThis: 'Work through 7 cards covering absolute vs relative poverty, measurement, causes in developing and developed countries, the poverty trap, international anti-poverty policies, and UK anti-poverty strategy.',
    outcomes: [
      'Define and distinguish absolute and relative poverty with examples',
      'Explain causes of poverty including low wages, unemployment, lack of human capital and discrimination',
      'Evaluate the poverty trap as a barrier to social mobility',
      'Assess a range of anti-poverty policies for effectiveness and trade-offs'
    ],
    tip: 'Absolute poverty = cannot meet basic survival needs (World Bank: under $2.15/day PPP). Relative poverty = income below a threshold relative to the median (UK: 60% of median income).',
    stages: [
      { num: 1, name: 'Learn it', sub: '8 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'poverty_1',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'Poverty: the big picture',
      lede: 'Poverty is more than low income. How we define it shapes which problem we fix — and which we miss.',
      branches: [
        { tone: 'green',  label: 'Absolute vs relative', sub: 'Absolute = below a basic-needs threshold ($2.15/day, World Bank). Relative = below 60% of median income. A country can cut one while the other rises.' },
        { tone: 'blue',   label: 'How we measure it', sub: 'Headcount, poverty gap, MPI. Income-based measures miss deprivation in health, education and housing — multi-dimensional indices fill the gap.' },
        { tone: 'amber',  label: 'Causes and traps', sub: 'Low wages, weak human capital, discrimination, and benefit withdrawal can lock households below the line. The poverty trap is structural, not lazy.' },
        { tone: 'purple', label: 'Policy responses', sub: 'Cash transfers, minimum wages, education, healthcare, progressive tax. Each tackles a different cause — none alone is enough.' }
      ],
      body: '<strong>Absolute poverty</strong> exists when income is insufficient to meet basic human needs: food, shelter, clean water, and sanitation. The World Bank defines it as living on under $2.15 per day (2022, PPP-adjusted). Globally, around 700 million people live in absolute poverty — primarily in Sub-Saharan Africa and South Asia.<br><br><strong>Relative poverty</strong> is defined in relation to the living standards of the society in question. In the UK, relative poverty is conventionally defined as household income below 60% of median household income after housing costs. Relative poverty can persist even as absolute poverty falls if inequality rises.<br><br>The distinction matters for policy: absolute poverty requires income transfers; relative poverty requires addressing distribution.',
      keyTerms: [
        { term: 'Absolute poverty', def: 'Income insufficient to meet basic survival needs; World Bank threshold: $2.15/day (PPP).' },
        { term: 'Relative poverty', def: 'Income below a proportion of median income (UK: 60%) — a socially defined threshold that changes with living standards.' },
        { term: 'Poverty line', def: 'The income threshold below which a household is classified as poor — can be absolute or relative.' }
      ],
      examEdge: 'A country can reduce absolute poverty while relative poverty rises — if growth benefits the rich disproportionately. China 1990-2020: hundreds of millions lifted from absolute poverty, but inequality (Gini coefficient) also rose sharply. This distinction is powerful evaluation material.'
    },
    {
      id: 'poverty_2',
      template: 'framing',
      title: 'Measuring Poverty',
      body: '<strong>Income-based measures:</strong> headcount ratio (% below poverty line); poverty gap (average distance below the line); squared poverty gap (weights the poorest most).<br><br><strong>Multi-dimensional poverty:</strong> UNDP Multi-dimensional Poverty Index (MPI) measures deprivation across 10 indicators in health, education, and living standards. Captures poverty beyond income — e.g. lack of clean cooking fuel is counted even if household income is above the line.<br><br><strong>UK measures:</strong> DWP publishes poverty rates before and after housing costs; persistent poverty (3+ years in poverty); severe poverty (below 50% of median). Child poverty is a key political focus.',
      keyTerms: [
        { term: 'Headcount ratio', def: 'Percentage of population with income below the poverty line — simple but ignores depth of poverty.' },
        { term: 'MPI', def: 'Multi-dimensional Poverty Index — UNDP measure covering health, education, and living standards beyond income.' },
        { term: 'Persistent poverty', def: 'Remaining below the poverty threshold for multiple consecutive years — more severe and harder to escape.' }
      ],
      examEdge: 'GDP per capita growth reduces absolute poverty on average, but doesn\'t guarantee it — the distribution matters. Countries with similar GDP per capita can have very different poverty rates (Brazil vs South Korea). Mentioning multi-dimensional measures shows analytical sophistication beyond income metrics.'
    },
    {
      id: 'poverty_3',
      template: 'cause',
      title: 'Causes of Poverty',
      causes: [
        { head: 'Low wages and unemployment', body: 'Workers in low-productivity sectors earn wages below the poverty threshold. Structural unemployment (from deindustrialisation, automation) removes income entirely.' },
        { head: 'Lack of human capital', body: 'Poor education and health outcomes reduce earning potential — intergenerational cycle as poor households cannot invest in children\'s development.' },
        { head: 'Discrimination', body: 'Labour market discrimination by race, gender, or disability reduces earnings and opportunities for affected groups, concentrating poverty.' },
        { head: 'Weak social safety net', body: 'Inadequate benefits, housing, or healthcare leave households without a floor. UK: benefit freezes, two-child limit, five-week Universal Credit wait all associated with poverty rises.' },
        { head: 'Structural factors in developing countries', body: 'Poor governance, corruption, lack of property rights, trade barriers, geography (landlocked, disease burden), and colonial legacy all perpetuate poverty traps.' }
      ],
      examEdge: 'The Sachs "poverty trap" argument: poor countries cannot generate the savings needed for investment because all income is consumed — external aid or investment needed to break the cycle. Collier counter-argument: institutions and governance matter more than aid levels.'
    },
    {
      id: 'poverty_4',
      template: 'mechanisms',
      title: 'The Poverty Trap',
      intro: 'The poverty trap describes how the benefit and tax system can make it financially irrational for low-income individuals to increase earnings — trapping people in poverty.',
      steps: [
        { label: 'Mechanism', text: 'As earned income rises, means-tested benefits withdraw simultaneously. If every extra \xa31 earned reduces benefits by \xa3 0.65 and tax+NI takes a further \xa3 0.30, the net gain is only \xa30.05 — an effective marginal tax rate of 95%.' },
        { label: 'Poverty trap in numbers', text: 'Universal Credit taper: 55p benefit withdrawn per \xa31 earned above work allowance. Combined with income tax (20%) and NI (10%), effective marginal rates for low earners can exceed 70-80%.' },
        { label: 'Behavioural consequence', text: 'Rational individuals may choose not to increase hours or seek promotion if net financial gain is negligible. Traps people in part-time, low-wage work.' },
        { label: 'Policy fix', text: 'Reduce taper rates (Universal Credit taper cut from 63p to 55p in 2021), raise the work allowance, or implement Universal Basic Income (UBI) which eliminates the taper problem.' }
      ],
      examEdge: 'The poverty trap illustrates a government failure — well-intentioned means-testing creates perverse incentives. This is a powerful evaluation point in welfare/redistribution essays: "Benefits intended to alleviate poverty may entrench it by destroying work incentives."'
    },
    {
      id: 'poverty_5',
      template: 'cause',
      title: 'Anti-Poverty Policies: Overview',
      causes: [
        { head: 'Direct transfers and benefits', body: 'Benefits, tax credits, Universal Credit — raise incomes of the poorest directly. Effective but costly; means-testing creates poverty traps; universal benefits avoid traps but are less targeted.' },
        { head: 'National Living Wage', body: 'Raises incomes of lowest-paid workers. Risk: may reduce hours or employment for low-productivity workers. Empirical evidence: limited disemployment effect in UK so far.' },
        { head: 'Education and skills investment', body: 'Long-run: reduces poverty by raising human capital and earning potential. E.g. free nursery/childcare, pupil premium, apprenticeships. Time lag: effects felt in 10-20 years.' },
        { head: 'International aid and development finance', body: 'Official Development Assistance (ODA) targets 0.7% of GNI (UK committed, then cut to 0.5%). Debate: does aid perpetuate dependency or catalyse development?' },
        { head: 'Microfinance', body: 'Small loans to entrepreneurs in developing countries (e.g. Grameen Bank model). Enables investment without collateral. Evidence mixed — some success, some debt cycles.' }
      ],
      examEdge: 'No single anti-poverty policy is universally effective. The optimal policy mix depends on the type of poverty (absolute vs relative), the institutional context, and whether causes are structural or cyclical. Essays should explicitly match policy to cause for top-band analysis.'
    },
    {
      id: 'poverty_6',
      template: 'paired',
      title: 'Aid vs Trade vs Investment for Development',
      left: {
        label: 'Aid and transfers',
        points: [
          'Immediate relief for absolute poverty — saves lives short-run',
          'Builds donor-country soft power and diplomatic influence',
          'Risk: dependency culture, corruption if governance is weak',
          'Dambisa Moyo: systematic aid reduces incentive for African governments to develop tax base and accountability'
        ]
      },
      right: {
        label: 'Trade and investment',
        points: [
          '"Aid for Trade" and infrastructure investment builds long-run capacity',
          'FDI brings capital, technology transfer, and jobs',
          'Risk: resource extraction by MNCs without transferring skills; race-to-bottom on labour/environmental standards',
          'Market access (reducing rich-country tariffs on developing-country exports) more valuable than many aid programmes'
        ]
      },
      examEdge: 'The "aid vs trade" debate is a major exam theme. Strongest evaluation: "trade and investment generate sustainable development, but poor countries need ODA to build the governance and infrastructure to attract investment — they are complementary, not alternatives."'
    },
    {
      id: 'poverty_7',
      template: 'framing',
      title: 'UK Poverty: Key Facts & Evaluation',
      body: '<strong>UK poverty statistics (2023-24):</strong> 14.3 million people in relative poverty (22%). 4 million in severe poverty (below 50% of median). Child poverty: 29%. In-work poverty: 60% of those in poverty live in working households — wages alone insufficient.<br><br><strong>Key drivers of recent rises:</strong> benefit freeze in real terms (2015-2020), two-child benefit limit, energy price crisis (2022-23), housing costs. Cost-of-living crisis disproportionately affects lower deciles (higher food/energy share of spending).<br><br><strong>Government tools:</strong> Universal Credit, National Living Wage (currently \xa312.21/hr, rising), childcare expansion, free school meals. Tension between work incentives and adequacy of support.',
      keyTerms: [
        { term: 'In-work poverty', def: 'Being in paid employment but still below the poverty threshold — rising with housing costs and zero-hours contracts.' },
        { term: 'Two-child limit', def: 'UC/child tax credit only paid for first two children — linked to increased child poverty by IFS.' },
        { term: 'National Living Wage', def: 'Statutory minimum for over-21s — currently \xa312.21/hr (Apr 2024), rising towards 2/3 of median wage.' }
      ],
      examEdge: 'The existence of in-work poverty challenges the assumption that employment is sufficient to escape poverty. This undermines the "make work pay" policy rationale and suggests structural issues with wage levels and housing costs rather than simply work disincentives.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself &#8594;' }
    },

    /* ----- CARD 8 — Essay scaffold ----- */
    {
      id: 'pov-essay',
      template: 'essay-scaffold',
      stepLabel: 'Learn: Step 8 of 8',
      title: 'Essay scaffold: poverty',
      question: 'Evaluate the effectiveness of government policies to reduce poverty. (25 marks)',
      marks: 25,
      timeGuide: '35 minutes',
      paragraphs: [
        {
          type: 'intro',
          label: 'Introduction',
          prompt: 'Define relative and absolute poverty. Introduce the main policy approaches and the key trade-offs.',
          hint: 'Absolute poverty: income insufficient for basic needs (food, shelter, clothing). Relative poverty: income below 60% of median — a social exclusion measure. Policy approaches: (1) cash transfers/welfare benefits, (2) minimum wage/in-work benefits, (3) education and skills investment (supply-side), (4) in-kind provision (NHS, social housing). Trade-off: short-run income support vs long-run capability building.',
          model: 'Poverty has two main dimensions in policy analysis: absolute poverty (insufficient income for basic subsistence needs) and relative poverty (typically defined as household income below 60% of the median, reflecting social exclusion in a wealthy society). The UK government addresses poverty through multiple instruments: direct cash transfers (Universal Credit), in-work benefit supplements (Working Tax Credit/UC work allowances), minimum wage legislation, education and skills investment, and in-kind provision (NHS, subsidised social housing). The appropriate policy mix depends on the type of poverty, its causes, and the relative priority placed on short-run income support versus long-run capability enhancement. This essay evaluates the effectiveness of these instruments.'
        },
        {
          type: 'analysis',
          label: 'Analysis 1 — Cash transfers and minimum wage: direct income support',
          prompt: 'Explain how Universal Credit and the National Living Wage address poverty directly.',
          hint: 'Universal Credit: consolidates six benefits into one payment, tapers as income rises (reduces poverty trap from 100% withdrawal rates of old system). NLW: £11.44/hr (2024), rising to £12.60 by 2025 → raises incomes of ~4m low-paid workers directly. Effectiveness evidence: Child Tax Credits (pre-2015) lifted ~500,000 children out of relative poverty. Limitation: UC taper rate still creates high effective marginal tax rates for low earners; benefit cap may trap families in poverty.',
          model: 'Direct income support through Universal Credit and the National Living Wage provides the most immediate route to poverty reduction. Universal Credit replaced a complex means-tested benefit system with a single payment that tapers as earned income rises — reducing (though not eliminating) the poverty trap where additional work was barely worth taking. The National Living Wage (£11.44/hour in 2024) raises the floor for approximately 4 million low-paid workers, directly increasing household incomes and reducing in-work poverty. Historical evidence supports effectiveness: Child Tax Credits before 2015 were estimated to have lifted over 500,000 children out of relative poverty by supplementing in-work incomes. However, limitations remain: the UC taper rate (55p withdrawal per £1 earned) combined with housing costs and Council Tax creates effective marginal tax rates of 70-80% for some low earners, substantially reducing the financial incentive to increase working hours.'
        },
        {
          type: 'analysis',
          label: 'Analysis 2 — Education and skills investment: the long-run capability approach',
          prompt: 'Explain how investing in human capital addresses the structural causes of poverty.',
          hint: 'Amartya Sen: capabilities approach — poverty is about lack of capabilities (education, health, participation) not just income. Education: long-run returns to schooling are high (each year of education raises wage by ~8-10% in developed countries). Early years intervention (Sure Start) has lasting positive effects on child development, school readiness, and later earnings. Skills training (apprenticeships, retraining): addresses structural unemployment and wage premium gap. Limitation: takes 10-20 years to show effects on poverty statistics.',
          model: 'The capability approach to poverty (Sen) argues that genuine poverty reduction requires developing people\'s abilities to function effectively — education, health, social participation — not just income transfers. Investment in human capital addresses the structural causes of poverty rather than its symptoms. Early years intervention has the highest return: the Sure Start programme provided childcare, parenting support, and health services for children under five in deprived areas. Evaluations found lasting positive effects on school readiness, cognitive development, and later life outcomes — consistent with James Heckman\'s research showing that £1 invested in early childhood yields £7-12 in long-run social returns. Education and skills investment raises the lifetime earnings capacity of individuals from deprived backgrounds, attacking poverty at its structural roots rather than providing income transfers that leave underlying causes unchanged.'
        },
        {
          type: 'counter',
          label: 'Counter — Limitations of benefit-based approaches: work disincentives and housing costs',
          prompt: 'Evaluate the unintended consequences of benefit-based poverty reduction — poverty trap, welfare dependency, and structural housing costs.',
          hint: 'Poverty trap: benefit withdrawal + tax = very high marginal effective tax rate for low earners. Example: earn £1 extra → lose 55p UC + 12% NI + 20% income tax = ~87p loss → taking extra work is irrational. Dependency culture: persistent reliance on transfers without skills development. Housing costs: relative poverty is strongly driven by housing costs, especially in London/South East — income transfers are insufficient if absorbed by rent increases. Benefit cap: limits UC to £23,000/year (London) — below the poverty line for families with children in high-rent areas.',
          model: 'Benefit-based approaches to poverty have structural limitations. The poverty trap — high effective marginal tax rates on low earners from simultaneous benefit withdrawal and taxation — remains a significant disincentive: some low-income workers gain less than 15p for every additional £1 earned, making increased work hours economically irrational. This undermines the incentive dimension of poverty reduction policy. A deeper structural problem is the housing cost crisis: relative poverty statistics are significantly affected by housing costs, and income transfers are partially absorbed by rent increases in high-demand areas. The benefit cap (£23,000/year for families in London) can leave multi-child families in high-rent areas in persistent poverty regardless of benefit levels. These structural housing market failures — insufficient supply of social and affordable housing — interact with income support to produce poverty that cash transfers cannot fully resolve without complementary housing policy.'
        },
        {
          type: 'evaluation',
          label: 'Evaluation — Short-run vs long-run; absolute vs relative poverty priorities',
          prompt: 'Weigh the different instruments against each other with reference to the type of poverty, time horizon, and trade-offs.',
          hint: 'Absolute poverty: cash transfers are most effective short-run (raise income above subsistence immediately). Relative poverty: harder to address because it moves with median income — even significant income transfers may not reduce relative poverty if median income is rising faster. Long-run: education and skills investment is the most durable route — reduces structural causes, raises earning potential, reduces welfare dependency. The most effective poverty reduction combines: minimum wage (floor), targeted transfers (immediate support), education and early years investment (long-run capability), and housing market reform (addresses structural cost driver).',
          model: 'The effectiveness of different poverty reduction tools depends on the type of poverty being targeted and the time horizon. For absolute poverty, direct income transfers (Universal Credit, NLW) are most effective in the short run — they raise incomes above the subsistence level immediately and the evidence base is strong. For relative poverty, effectiveness is more contested: since relative poverty is measured against the median, aggregate income growth can reduce relative poverty without any specific poverty intervention, while even substantial transfers may not close the gap if median incomes are rising rapidly. Long-run poverty reduction is most durably achieved through education and skills investment that raises earning capacity: countries with strong universal education, effective vocational training, and high-quality early years provision consistently achieve lower relative poverty rates than those relying primarily on income transfers. The UK\'s relatively high poverty rate by international standards reflects both structural housing cost issues and historical underinvestment in vocational skills — challenges that income transfers alone cannot resolve.'
        },
        {
          type: 'conclusion',
          label: 'Conclusion',
          prompt: 'Deliver a reasoned judgement: a combination of direct income support, minimum wage, education investment, and housing market reform is most effective — no single instrument is sufficient.',
          hint: 'Cash transfers: essential for short-run relief, but create poverty trap and cannot address structural causes alone. NLW: effective for working poor, but doesn\'t help those unable to work. Education investment: most durable long-run solution, but decades-long implementation lag. Housing reform: necessary complementary policy — income transfers absorbed by rent increases. Most effective combination addresses all dimensions simultaneously.',
          model: 'The most effective approach to poverty reduction combines direct income support (Universal Credit, National Living Wage) for immediate relief with human capital investment (early years, education, skills) for long-run capability development, and structural housing reform to address the cost driver that absorbs much of the income support provided. No single instrument is sufficient: cash transfers reduce absolute poverty immediately but cannot address relative poverty indefinitely if structural drivers — low skills, housing costs, regional inequality — remain unchanged; education investment has decades-long lags that make it insufficient for families in current poverty; the NLW raises floors for workers but leaves non-workers unaffected. The UK\'s persistent relative poverty rate — one of the higher rates among comparable developed economies — reflects the failure to combine these instruments effectively into a coherent anti-poverty strategy. The evidence from countries with lower poverty rates (Nordic countries, Germany) suggests that sustained investment in education, active labour market policy, universal childcare, and adequate social housing produces more durable poverty reduction than income transfers alone.'
        }
      ]
    }
  ]
};
