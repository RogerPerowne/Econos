window.ECONOS_TOPIC = {
  id: 'absolute-and-relative-poverty',
  topicNum: '2.1',
  theme: 'Theme 4 \xb7 A Global Perspective',
  title: 'Absolute & Relative Poverty',
  estTime: '9-11 minutes',
  goal: 'Lock in the distinction between absolute and relative poverty, their causes, and the range of anti-poverty policies.',
  intro: {
    heroKey: 'heroInequality',
    summary: 'Poverty is both an absolute deprivation of basic needs and a relative exclusion from normal living standards. Understanding its causes – from low productivity to structural inequality – determines which policies are most effective.',
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
      lede: 'Poverty is more than low income. How we define it shapes which problem we fix – and which we miss.',
      branches: [
        { tone: 'green',  label: 'Absolute vs relative', sub: 'Absolute = below a basic-needs threshold ($2.15/day, World Bank). Relative = below 60% of median income. A country can cut one while the other rises.' },
        { tone: 'blue',   label: 'How we measure it', sub: 'Headcount, poverty gap, MPI. Income-based measures miss deprivation in health, education and housing – multi-dimensional indices fill the gap.' },
        { tone: 'amber',  label: 'Causes and traps', sub: 'Low wages, weak human capital, discrimination, and benefit withdrawal can lock households below the line. The poverty trap is structural, not lazy.' },
        { tone: 'purple', label: 'Policy responses', sub: 'Cash transfers, minimum wages, education, healthcare, progressive tax. Each tackles a different cause – none alone is enough.' }
      ],
      body: '<strong>Absolute poverty</strong> exists when income is insufficient to meet basic human needs: food, shelter, clean water, and sanitation. The World Bank defines it as living on under $2.15 per day (2022, PPP-adjusted). Globally, around 700 million people live in absolute poverty – primarily in Sub-Saharan Africa and South Asia.<br><br><strong>Relative poverty</strong> is defined in relation to the living standards of the society in question. In the UK, relative poverty is conventionally defined as household income below 60% of median household income after housing costs. Relative poverty can persist even as absolute poverty falls if inequality rises.<br><br>The distinction matters for policy: absolute poverty requires income transfers; relative poverty requires addressing distribution.',
      keyTerms: [
        { term: 'Absolute poverty', def: 'Income insufficient to meet basic survival needs; World Bank threshold: $2.15/day (PPP).' },
        { term: 'Relative poverty', def: 'Income below a proportion of median income (UK: 60%) – a socially defined threshold that changes with living standards.' },
        { term: 'Poverty line', def: 'The income threshold below which a household is classified as poor – can be absolute or relative.' }
      ],
      examEdge: 'A country can reduce absolute poverty while relative poverty rises – if growth benefits the rich disproportionately. China 1990-2020: hundreds of millions lifted from absolute poverty, but inequality (Gini coefficient) also rose sharply. This distinction is powerful evaluation material.'
    },
    {
      id: 'poverty_2',
      template: 'framing',
      title: 'Measuring Poverty',
      body: '<strong>Income-based measures:</strong> headcount ratio (% below poverty line); poverty gap (average distance below the line); squared poverty gap (weights the poorest most).<br><br><strong>Multi-dimensional poverty:</strong> UNDP Multi-dimensional Poverty Index (MPI) measures deprivation across 10 indicators in health, education, and living standards. Captures poverty beyond income – e.g. lack of clean cooking fuel is counted even if household income is above the line.<br><br><strong>UK measures:</strong> DWP publishes poverty rates before and after housing costs; persistent poverty (3+ years in poverty); severe poverty (below 50% of median). Child poverty is a key political focus.',
      keyTerms: [
        { term: 'Headcount ratio', def: 'Percentage of population with income below the poverty line – simple but ignores depth of poverty.' },
        { term: 'MPI', def: 'Multi-dimensional Poverty Index – UNDP measure covering health, education, and living standards beyond income.' },
        { term: 'Persistent poverty', def: 'Remaining below the poverty threshold for multiple consecutive years – more severe and harder to escape.' }
      ],
      examEdge: 'GDP per capita growth reduces absolute poverty on average, but doesn\'t guarantee it – the distribution matters. Countries with similar GDP per capita can have very different poverty rates (Brazil vs South Korea). Mentioning multi-dimensional measures shows analytical sophistication beyond income metrics.'
    },
    {
      id: 'poverty_3',
      template: 'cause',
      title: 'Causes of Poverty',
      causes: [
        { head: 'Low wages and unemployment', body: 'Workers in low-productivity sectors earn wages below the poverty threshold. Structural unemployment (from deindustrialisation, automation) removes income entirely.' },
        { head: 'Lack of human capital', body: 'Poor education and health outcomes reduce earning potential – intergenerational cycle as poor households cannot invest in children\'s development.' },
        { head: 'Discrimination', body: 'Labour market discrimination by race, gender, or disability reduces earnings and opportunities for affected groups, concentrating poverty.' },
        { head: 'Weak social safety net', body: 'Inadequate benefits, housing, or healthcare leave households without a floor. UK: benefit freezes, two-child limit, five-week Universal Credit wait all associated with poverty rises.' },
        { head: 'Structural factors in developing countries', body: 'Poor governance, corruption, lack of property rights, trade barriers, geography (landlocked, disease burden), and colonial legacy all perpetuate poverty traps.' }
      ],
      examEdge: 'The Sachs "poverty trap" argument: poor countries cannot generate the savings needed for investment because all income is consumed – external aid or investment needed to break the cycle. Collier counter-argument: institutions and governance matter more than aid levels.'
    },
    {
      id: 'poverty_4',
      template: 'mechanisms',
      title: 'The Poverty Trap',
      intro: 'The poverty trap describes how the benefit and tax system can make it financially irrational for low-income individuals to increase earnings – trapping people in poverty.',
      steps: [
        { label: 'Mechanism', text: 'As earned income rises, means-tested benefits withdraw simultaneously. If every extra \xa31 earned reduces benefits by \xa3 0.65 and tax+NI takes a further \xa3 0.30, the net gain is only \xa30.05 – an effective marginal tax rate of 95%.' },
        { label: 'Poverty trap in numbers', text: 'Universal Credit taper: 55p benefit withdrawn per \xa31 earned above work allowance. Combined with income tax (20%) and NI (10%), effective marginal rates for low earners can exceed 70-80%.' },
        { label: 'Behavioural consequence', text: 'Rational individuals may choose not to increase hours or seek promotion if net financial gain is negligible. Traps people in part-time, low-wage work.' },
        { label: 'Policy fix', text: 'Reduce taper rates (Universal Credit taper cut from 63p to 55p in 2021), raise the work allowance, or implement Universal Basic Income (UBI) which eliminates the taper problem.' }
      ],
      examEdge: 'The poverty trap illustrates a government failure – well-intentioned means-testing creates perverse incentives. This is a powerful evaluation point in welfare/redistribution essays: "Benefits intended to alleviate poverty may entrench it by destroying work incentives."'
    },
    {
      id: 'poverty_5',
      template: 'cause',
      title: 'Anti-Poverty Policies: Overview',
      causes: [
        { head: 'Direct transfers and benefits', body: 'Benefits, tax credits, Universal Credit – raise incomes of the poorest directly. Effective but costly; means-testing creates poverty traps; universal benefits avoid traps but are less targeted.' },
        { head: 'National Living Wage', body: 'Raises incomes of lowest-paid workers. Risk: may reduce hours or employment for low-productivity workers. Empirical evidence: limited disemployment effect in UK so far.' },
        { head: 'Education and skills investment', body: 'Long-run: reduces poverty by raising human capital and earning potential. E.g. free nursery/childcare, pupil premium, apprenticeships. Time lag: effects felt in 10-20 years.' },
        { head: 'International aid and development finance', body: 'Official Development Assistance (ODA) targets 0.7% of GNI (UK committed, then cut to 0.5%). Debate: does aid perpetuate dependency or catalyse development?' },
        { head: 'Microfinance', body: 'Small loans to entrepreneurs in developing countries (e.g. Grameen Bank model). Enables investment without collateral. Evidence mixed – some success, some debt cycles.' }
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
          'Immediate relief for absolute poverty – saves lives short-run',
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
      examEdge: 'The "aid vs trade" debate is a major exam theme. Strongest evaluation: "trade and investment generate sustainable development, but poor countries need ODA to build the governance and infrastructure to attract investment – they are complementary, not alternatives."'
    },
    {
      id: 'poverty_7',
      template: 'framing',
      title: 'UK Poverty: Key Facts & Evaluation',
      body: '<strong>UK poverty statistics (2023-24):</strong> 14.3 million people in relative poverty (22%). 4 million in severe poverty (below 50% of median). Child poverty: 29%. In-work poverty: 60% of those in poverty live in working households – wages alone insufficient.<br><br><strong>Key drivers of recent rises:</strong> benefit freeze in real terms (2015-2020), two-child benefit limit, energy price crisis (2022-23), housing costs. Cost-of-living crisis disproportionately affects lower deciles (higher food/energy share of spending).<br><br><strong>Government tools:</strong> Universal Credit, National Living Wage (currently \xa312.21/hr, rising), childcare expansion, free school meals. Tension between work incentives and adequacy of support.',
      keyTerms: [
        { term: 'In-work poverty', def: 'Being in paid employment but still below the poverty threshold – rising with housing costs and zero-hours contracts.' },
        { term: 'Two-child limit', def: 'UC/child tax credit only paid for first two children – linked to increased child poverty by IFS.' },
        { term: 'National Living Wage', def: 'Statutory minimum for over-21s – currently \xa312.21/hr (Apr 2024), rising towards 2/3 of median wage.' }
      ],
      examEdge: 'The existence of in-work poverty challenges the assumption that employment is sufficient to escape poverty. This undermines the "make work pay" policy rationale and suggests structural issues with wage levels and housing costs rather than simply work disincentives.',
      quizCta: { href: TopicLoader.routes.quiz('main'), label: 'Test yourself →' }
    }

  ]
};

/* ============================================================
   End-of-Learn-It quiz pool · folded in at v0.4.0
   These questions used to live at /quiz/<topic>/<set> as a
   standalone shell. They now ride along with the Learn It data
   under the same window.ECONOS_QUIZ global. The /quiz/ URL
   contract is gone; the quiz is the natural finisher to the
   Learn It journey, so the data lives next to learn cards.
   ============================================================ */
/* ---- quiz-main.js (quiz pool, preserved from former /quiz/ shell) ---- */
(function () {

  window.ECONOS_QUIZ = {
    title:    'Poverty',
    subtitle: 'Labour Markets & Distribution',
    backUrl:  TopicLoader.routes.learn('absolute-and-relative-poverty'),
    backLabel:'Back to Learn It',
    lede:     '10 questions · ~8 minutes · covers absolute vs relative poverty, measurement, causes, and anti-poverty policies',
    shortNames: [
      'Absolute poverty','Relative poverty','Poverty trap','Causes','Policies',
      'Categorise','Cause-effect','Odd one out','Data table','Match pairs'
    ],
    questions: [
      {
        type: 'mcq',
        q:    'Absolute poverty is defined as:',
        opts: [
          'Earning less than 60% of median income',
          'Lacking the basic necessities for human survival',
          'Having less wealth than the average citizen',
          'Being unable to afford luxury goods'
        ],
        ans:  1,
        exp:  'Absolute poverty means lacking the minimum resources necessary for basic survival – food, clean water, shelter. It is measured against a fixed standard (e.g., the World Bank\'s $2.15/day line).'
      },
      {
        type: 'mcq',
        q:    'Relative poverty in the UK is most commonly defined as:',
        opts: [
          'Earning below the minimum wage',
          'Household income below 60% of the median after housing costs',
          'Being unable to afford a car or holiday',
          'Living below the UN absolute poverty line'
        ],
        ans:  1,
        exp:  'Relative poverty is a social concept: it measures deprivation relative to prevailing living standards. The UK defines it as household income below 60% of median income – it moves as average incomes change.'
      },
      {
        type: 'mcq',
        q:    'The poverty trap occurs when:',
        opts: [
          'Wages fall because there are too many workers',
          'Taking paid work leaves someone little better off due to loss of benefits and taxes',
          'The minimum wage is set too low',
          'The government reduces benefits for all workers'
        ],
        ans:  1,
        exp:  'The poverty trap arises when moving into work results in loss of means-tested benefits and/or increased tax, leaving little net gain in disposable income. It reduces the financial incentive to seek employment.'
      },
      {
        type: 'mcq',
        q:    'Which of the following is a supply-side policy to reduce poverty?',
        opts: [
          'Raising income tax on high earners',
          'Increasing means-tested benefits',
          'Investing in education and vocational training',
          'Expanding the welfare state'
        ],
        ans:  2,
        exp:  'Supply-side policies to reduce poverty address structural causes by improving workers\' employability. Education and training increase human capital, raising earning potential and reducing long-term poverty.'
      },
      {
        type: 'numeric_input',
        q:    'The median household income is £36,000 per year. What is the relative poverty threshold at 60% of median income?',
        answer: 21600,
        tolerance: 0,
        unit: '£',
        hint: 'Threshold = 60% × median income.',
        workingSteps: ['Threshold = 0.60 × £36,000 = £21,600']
      },
      {
        type: 'categorise',
        q:    'Categorise each cause of poverty as structural or cyclical.',
        categories: ['Structural poverty','Cyclical poverty'],
        items: [
          { item: 'Lack of skills or education',                 category: 'Structural poverty' },
          { item: 'Recession causing job losses',                category: 'Cyclical poverty' },
          { item: 'Discrimination in the labour market',         category: 'Structural poverty' },
          { item: 'Rise in unemployment during economic crisis', category: 'Cyclical poverty' },
          { item: 'Geographical isolation from labour markets',  category: 'Structural poverty' },
          { item: 'Firms cutting hours in downturn',             category: 'Cyclical poverty' }
        ]
      },
      {
        type: 'cause_effect',
        q:    'Match each cause to its effect in the context of poverty.',
        pairs: [
          { cause: 'Worker enters low-paid employment',      effect: 'Means-tested benefits withdrawn; poverty trap activates' },
          { cause: 'National Minimum Wage increased',        effect: 'Some in-work poverty reduced for lowest earners' },
          { cause: 'Investment in early years education',    effect: 'Long-run reduction in intergenerational poverty' },
          { cause: 'Recession deepens',                      effect: 'Cyclical unemployment rises; relative poverty increases' },
          { cause: 'Universal Credit replaces legacy benefits',effect: 'Intended to make work pay more consistently' },
          { cause: 'High housing costs in urban areas',      effect: 'Disposable income after housing costs falls below threshold' }
        ]
      },
      {
        type: 'odd_one_out',
        q:    'Which is the odd one out?',
        opts: ['Absolute poverty','Relative poverty','Poverty trap','Gini coefficient'],
        ans:  3,
        exp:  'Absolute poverty, relative poverty, and the poverty trap are all directly related to the concept of poverty. The Gini coefficient is a measure of income inequality – a related but distinct concept.'
      },
      {
        type: 'data_table',
        q:    'Use the table to identify which household is living in relative poverty (threshold = £21,000).',
        tableHeaders: ['Household','Annual income (£)','Housing costs (£)','Income after housing (£)'],
        tableData: [
          ['A','28,000','6,000','22,000'],
          ['B','24,000','5,000','19,000'],
          ['C','30,000','8,000','22,000'],
          ['D','26,000','4,000','22,000']
        ],
        opts: ['Household A','Household B','Household C','Household D'],
        ans:  1,
        exp:  'Household B has income after housing costs of £19,000, which is below the relative poverty threshold of £21,000. All other households are above the threshold after housing costs.'
      },
      {
        type: 'match_pairs',
        q:    'Match each anti-poverty policy to how it works.',
        pairs: [
          { a: 'Universal Credit',          b: 'Single benefit that tapers smoothly as earnings rise' },
          { a: 'National Living Wage',      b: 'Mandatory wage floor to reduce in-work poverty' },
          { a: 'Free school meals',         b: 'In-kind benefit targeting food poverty in children' },
          { a: 'Early years education',     b: 'Supply-side investment in human capital to break intergenerational poverty' },
          { a: 'Housing benefit',           b: 'Income transfer to reduce poverty caused by high rents' },
          { a: 'Negative income tax',       b: 'System where low earners receive payments rather than pay tax' }
        ]
      }
    ]
  };

})();

