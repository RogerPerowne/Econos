window.ECONOS_TOPIC = {
  id: 'income_inequality',
  topicNum: '4.8',
  theme: 'Theme 4 \xb7 A Global Perspective',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'Income & Wealth Inequality',
  estTime: '7-9 minutes',
  goal: 'Lock in Gini coefficient, Lorenz curve, causes and consequences of inequality, and the redistribution policy toolkit.',
  intro: {
    heroKey: 'heroInequality',
    summary: 'Inequality of income and wealth is both a measurement challenge and a policy debate. The Lorenz curve and Gini coefficient provide tools to quantify it; understanding causes identifies which policies can reduce it most effectively.',
    doInThis: 'Work through 7 cards covering Lorenz curve, Gini coefficient, income vs wealth inequality, causes of inequality, its consequences, redistribution tools, and the equity-efficiency trade-off.',
    outcomes: [
      'Construct and interpret a Lorenz curve and calculate/interpret the Gini coefficient',
      'Distinguish income inequality from wealth inequality — and explain why wealth is more unequal',
      'Identify the main causes of rising inequality in advanced economies',
      'Evaluate redistribution policies and the equity-efficiency trade-off'
    ],
    tip: 'Gini = 0 means perfect equality; Gini = 1 means one person has everything. The area between the Lorenz curve and the line of perfect equality, divided by total area below perfect equality, gives the Gini.',
    stages: [
      { num: 1, name: 'Learn it', sub: '7 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'income_inequality_1',
      template: 'framing',
      title: 'Lorenz Curve & Gini Coefficient',
      body: 'The <strong>Lorenz curve</strong> plots cumulative share of income against cumulative share of population, ranked from poorest to richest. Perfect equality is the 45\xb0 line ("line of equal distribution"). The further the Lorenz curve bows below this line, the greater the inequality.<br><br>The <strong>Gini coefficient</strong> = Area A \xf7 (Area A + Area B), where A is the area between the Lorenz curve and the line of equality, and B is the area below the Lorenz curve. Range: 0 (perfect equality) to 1 (perfect inequality). UK Gini for income ~0.35; for wealth ~0.63. Wealth is always more unequally distributed than income.',
      keyTerms: [
        { term: 'Lorenz curve', def: 'A graph of cumulative income share vs cumulative population share — further from the 45\xb0 line = more unequal.' },
        { term: 'Gini coefficient', def: 'Ratio of area between Lorenz curve and equality line to total area below equality line. 0 = equality; 1 = maximum inequality.' },
        { term: 'Quintile share ratio', def: 'Income of top 20% divided by income of bottom 20% — simpler alternative measure of inequality.' }
      ],
      examEdge: 'Exam diagrams: draw the line of perfect equality first (45\xb0), then the Lorenz curve bowing below it, label the areas A and B, and state Gini = A/(A+B). A shift of the Lorenz curve toward the equality line = falling inequality. This is a classic 4-mark diagram question.'
    },
    {
      id: 'income_inequality_2',
      template: 'paired',
      title: 'Income vs Wealth Inequality',
      left: {
        label: 'Income inequality',
        points: [
          'Income = flow of earnings from work, benefits, dividends, rent',
          'UK Gini ~0.35 (before tax ~0.52; taxes and benefits reduce it significantly)',
          'Top 1% receive ~8% of pre-tax income',
          'Can change relatively quickly with policy (tax, minimum wage, benefits)'
        ]
      },
      right: {
        label: 'Wealth inequality',
        points: [
          'Wealth = stock of assets: property, savings, pensions, financial assets',
          'UK Gini ~0.63 — far more unequal than income',
          'Top 10% own ~43% of total wealth; bottom 50% own ~9%',
          'Persistent: inherited wealth, compounding returns, housing appreciation benefit asset owners disproportionately'
        ]
      },
      examEdge: 'Wealth inequality is harder to reduce than income inequality. Income taxes can be progressive; wealth taxes face valuation difficulties, capital flight risk, and political resistance. This asymmetry means redistribution policy is more effective at compressing income than wealth differences.'
    },
    {
      id: 'income_inequality_3',
      template: 'cause',
      title: 'Causes of Rising Inequality',
      causes: [
        { head: 'Technological change', body: 'Automation substitutes for routine labour (middle-skill workers) while raising returns to high-skill workers — "hollowing out" the income distribution. Piketty: returns to capital have exceeded economic growth, widening wealth inequality.' },
        { head: 'Globalisation', body: 'Trade exposes low-skill workers in advanced economies to competition from EM workers, driving down wages in manufacturing. Simultaneously, high-skill workers in global firms gain from wider markets.' },
        { head: 'Rising CEO and executive pay', body: 'Top 1% income share has risen sharply since 1980. FTSE 100 CEO:median worker pay ratio ~110:1. Linked to deregulation, shareholder primacy, and weakened union bargaining power.' },
        { head: 'Decline of unions', body: 'Union membership in UK fell from ~55% (1979) to ~23% (2023). Reduced collective bargaining power has widened the wage dispersion between high-skill and low-skill workers.' },
        { head: 'Housing and asset prices', body: 'Rising house prices and financial asset values benefit existing owners (mostly older, wealthier households) and exclude renters and younger people from wealth accumulation — a growing source of intergenerational inequality.' }
      ],
      examEdge: 'Thomas Piketty\'s r > g argument: when the return on capital (r) exceeds economic growth (g), wealth inequality compounds over time. Challenged critics note that r varies over the cycle and that institutions (taxes, regulations) can offset the mechanical tendency.'
    },
    {
      id: 'income_inequality_4',
      template: 'cause',
      title: 'Consequences of Inequality',
      causes: [
        { head: 'Reduced social mobility', body: 'High inequality correlates with lower inter-generational mobility ("Great Gatsby curve" — Krueger). Rich parents can invest more in children\'s education, health, and networks, reinforcing advantage.' },
        { head: 'Macroeconomic instability', body: 'High inequality may suppress aggregate demand if lower earners (higher MPC) receive a smaller share of income — Keynesian concern. Also linked to excessive risk-taking and financial fragility (pre-2008).' },
        { head: 'Political polarisation', body: 'Evidence (OECD) links high inequality to populist voting, erosion of social trust, and political instability — threatening institutional quality and long-run growth.' },
        { head: 'Health and social outcomes', body: 'Wilkinson & Pickett (The Spirit Level): more equal societies have better health, lower crime, higher trust. Causal mechanism: relative deprivation causes stress; poorer access to healthcare compounds disadvantage.' },
        { head: 'Innovation and growth effects', body: 'Some inequality creates incentives for effort and risk-taking. But excessive inequality reduces equality of opportunity — fewer talented individuals from disadvantaged backgrounds reach their potential, reducing aggregate human capital.' }
      ],
      examEdge: 'Distinguish the level of inequality (which may or may not harm growth) from changes in inequality. Rapid rises in inequality, particularly when driven by rent-seeking rather than productive activity, are most damaging. "Inequality is not inherently harmful; the source matters" is a sophisticated evaluation line.'
    },
    {
      id: 'income_inequality_5',
      template: 'mechanisms',
      title: 'Redistribution Through Tax and Benefits',
      intro: 'The UK redistributes income primarily through a progressive tax system and means-tested transfers, significantly compressing the income distribution.',
      steps: [
        { label: 'Progressive income tax', text: 'Basic rate 20%, higher rate 40%, additional rate 45% above \xa3125,140. Also NI contributions. Pre-tax Gini ~0.52; post-tax income Gini ~0.35 — tax system removes ~0.17 Gini points.' },
        { label: 'Means-tested benefits', text: 'Universal Credit, housing benefit, child benefit, pension credit — targeted at lowest incomes. Reduces inequality but creates poverty trap (high effective marginal tax rates at taper).' },
        { label: 'Universal benefits', text: 'State pension, NHS, free education — available to all. Expensive but avoids means-test poverty traps. Significant equalising effect via in-kind transfers.' },
        { label: 'Wealth redistribution', text: 'Inheritance tax (40% above \xa3325k threshold — many exemptions reduce yield). Capital gains tax. Council tax — widely criticised as regressive (not proportional to property values). Wealth taxes remain politically contested.' }
      ],
      examEdge: 'The UK tax-benefit system reduces the Gini by about 0.17 points — one of the largest redistributive systems in the OECD. But note: the poorest fifth still pay 35% of income in indirect taxes (VAT, excise duties), partially offsetting progressive direct taxes.'
    },
    {
      id: 'income_inequality_6',
      template: 'framing',
      title: 'Other Redistribution Policies',
      body: '<strong>National Living Wage:</strong> raises income floor for lowest-paid workers; reduces wage inequality; risk of employment effect if wage above competitive equilibrium. IFS: modest employment cost; significant earnings gain for low-paid.<br><br><strong>Universal Basic Income (UBI):</strong> flat unconditional payment to all citizens — eliminates poverty trap, reduces stigma. Cost: ~\xa3300bn at \xa310k/year (all UK adults) — requires major tax reform. Pilot evidence: modest effects on employment, positive health outcomes.<br><br><strong>Education and opportunity:</strong> pupil premium, free childcare, university access programmes. Address inter-generational inequality by equalising human capital investment — slower but more durable than transfers.',
      keyTerms: [
        { term: 'Universal Basic Income', def: 'Unconditional cash payment to all citizens regardless of employment status — replaces or supplements existing benefits.' },
        { term: 'Pupil Premium', def: 'Additional school funding per pupil from disadvantaged backgrounds — targeted at educational attainment gap.' },
        { term: 'National Living Wage', def: 'Statutory minimum wage for over-21s — currently \xa312.21/hr, rising toward 2/3 of median by 2024.' }
      ],
      examEdge: 'UBI is the most evaluable redistribution proposal: eliminates poverty trap (strong point), but financing is a challenge and may reduce labour supply if set too high. Scott Santens (pro-UBI) vs critics who argue targeted support is more efficient per pound spent — both are valid.'
    },
    {
      id: 'income_inequality_7',
      template: 'paired',
      title: 'The Equity-Efficiency Trade-Off',
      left: {
        label: 'The case for redistribution',
        points: [
          'Diminishing marginal utility: transferring income from rich to poor raises total welfare',
          'High inequality reduces equality of opportunity — wastes human potential',
          'More equal societies have better social outcomes (Wilkinson & Pickett)',
          'Demand-side: more income to high-MPC poor boosts aggregate demand'
        ]
      },
      right: {
        label: 'The efficiency cost of redistribution',
        points: [
          'High marginal tax rates reduce incentive to work, save, invest, and take risks',
          'Benefits may reduce work incentives (poverty trap)',
          'Brain drain: high earners relocate to lower-tax jurisdictions',
          'Laffer curve: beyond a point, higher tax rates reduce total tax revenue'
        ]
      },
      examEdge: 'The optimal degree of redistribution is an empirical question, not a theoretical one. Diamond & Saez (2011) estimate optimal top marginal tax rate ~70% for revenue maximisation (above which incentive effects dominate). UK currently at 45% — room for debate. Use this framework to structure equity-efficiency essays.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself &#8594;' }
    }
  ]
};
