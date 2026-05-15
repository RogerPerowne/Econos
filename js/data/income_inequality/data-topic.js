window.ECONOS_TOPIC = {
  id: 'income_inequality',
  topicNum: '4.8',
  theme: 'Theme 4 \xb7 A Global Perspective',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'Income & Wealth Inequality',
  estTime: '9-11 minutes',
  goal: 'Lock in Gini coefficient, Lorenz curve, causes and consequences of inequality, and the redistribution policy toolkit.',
  intro: {
    heroKey: 'heroInequality',
    summary: 'Inequality of income and wealth is both a measurement challenge and a policy debate. The Lorenz curve and Gini coefficient provide tools to quantify it; understanding causes identifies which policies can reduce it most effectively.',
    doInThis: 'Work through 8 cards covering Lorenz curve, Gini coefficient (with a worked calculation), income vs wealth inequality, causes of inequality, its consequences, redistribution tools, and the equity-efficiency trade-off.',
    outcomes: [
      'Construct and interpret a Lorenz curve and calculate/interpret the Gini coefficient',
      'Distinguish income inequality from wealth inequality — and explain why wealth is more unequal',
      'Identify the main causes of rising inequality in advanced economies',
      'Evaluate redistribution policies and the equity-efficiency trade-off'
    ],
    tip: 'Gini = 0 means perfect equality; Gini = 1 means one person has everything. The area between the Lorenz curve and the line of perfect equality, divided by total area below perfect equality, gives the Gini.',
    stages: [
      { num: 1, name: 'Learn it', sub: '8 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'income_inequality_1',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'Lorenz Curve & Gini Coefficient',
      lede: 'The Lorenz curve plots cumulative share of income against cumulative share of population — the further it bows below the 45° line of perfect equality, the greater the inequality. The Gini coefficient turns that bow into a single number.',
      diagramKey: 'lorenzInteractive',
      steps: [
        {
          key: 'base',
          label: 'Construction',
          text: 'The <strong>Lorenz curve</strong> ranks households from poorest to richest and plots <em>cumulative share of income</em> (y) against <em>cumulative share of population</em> (x). The 45° line shows perfect equality — every population share earns the same income share. The further the Lorenz curve bows below the 45° line, the more unequal the distribution. UK 2022: the bottom 20% earn ~7% of income; the top 20% earn ~42%.'
        },
        {
          key: 'extension',
          label: 'The Gini coefficient',
          text: 'The <strong>Gini coefficient</strong> = Area A ÷ (Area A + Area B). <strong>A</strong> is the area between the equality line and the Lorenz curve. <strong>B</strong> is the area under the Lorenz curve. Range: 0 (perfect equality) to 1 (one person earns everything). UK income Gini ≈ 0.35; UK wealth Gini ≈ 0.63 — <strong>wealth is always more unequally distributed than income</strong>.'
        },
        {
          key: 'shift',
          label: 'International comparison',
          text: 'Three economies, same axes: <strong>Sweden</strong> (Gini ≈ 0.27) hugs the 45° line — strong redistribution flattens the curve. <strong>UK</strong> (Gini ≈ 0.35, dashed) bows moderately. <strong>South Africa</strong> (Gini ≈ 0.63) bows far below — its bottom 20% earn only ~3% of income. Shifting toward the 45° line = falling inequality; shifting away = rising inequality.'
        }
      ],
      examEdge: 'Exam diagrams: draw the line of perfect equality first (45°), then the Lorenz curve bowing below it, label the areas A and B, and state Gini = A/(A+B). A shift of the Lorenz curve toward the equality line = falling inequality. Classic 4-mark diagram question.'
    },
    {
      id: 'income_inequality_worked',
      template: 'worked-example',
      stepLabel: 'Learn: Step 2 of 8',
      title: 'Worked Example: Calculating the Gini Coefficient',
      scenario: 'An economist is given the following income distribution for a country and asked to estimate the Gini coefficient.\n\n<strong>Income quintile shares:</strong> Bottom 20% → 5% of income · Q2 → 10% · Q3 → 15% · Q4 → 25% · Top 20% → 45%',
      steps: [
        {
          label: 'Step 1 — Build the cumulative income table',
          hint: 'The Lorenz curve plots cumulative population against cumulative income share. Build the cumulative column from the quintile data above.',
          answer: '<table style="width:100%;border-collapse:collapse;font-size:13px;margin-top:8px;"><thead><tr style="background:#0B1426;color:#fff;"><th style="padding:6px 10px;text-align:left;">Cumulative population</th><th style="padding:6px 10px;text-align:left;">Quintile income share</th><th style="padding:6px 10px;text-align:left;">Cumulative income share</th></tr></thead><tbody><tr style="background:#F8FAFC;"><td style="padding:6px 10px;border-bottom:1px solid #E2E8F0;">20%</td><td style="padding:6px 10px;border-bottom:1px solid #E2E8F0;">5%</td><td style="padding:6px 10px;border-bottom:1px solid #E2E8F0;"><strong>5%</strong></td></tr><tr><td style="padding:6px 10px;border-bottom:1px solid #E2E8F0;">40%</td><td style="padding:6px 10px;border-bottom:1px solid #E2E8F0;">10%</td><td style="padding:6px 10px;border-bottom:1px solid #E2E8F0;"><strong>15%</strong></td></tr><tr style="background:#F8FAFC;"><td style="padding:6px 10px;border-bottom:1px solid #E2E8F0;">60%</td><td style="padding:6px 10px;border-bottom:1px solid #E2E8F0;">15%</td><td style="padding:6px 10px;border-bottom:1px solid #E2E8F0;"><strong>30%</strong></td></tr><tr><td style="padding:6px 10px;border-bottom:1px solid #E2E8F0;">80%</td><td style="padding:6px 10px;border-bottom:1px solid #E2E8F0;">25%</td><td style="padding:6px 10px;border-bottom:1px solid #E2E8F0;"><strong>55%</strong></td></tr><tr style="background:#F8FAFC;"><td style="padding:6px 10px;">100%</td><td style="padding:6px 10px;">45%</td><td style="padding:6px 10px;"><strong>100%</strong></td></tr></tbody></table>\n\nLorenz curve points: (0,0) → (20,5) → (40,15) → (60,30) → (80,55) → (100,100)'
        },
        {
          label: 'Step 2 — Calculate area B (under the Lorenz curve)',
          hint: 'Use trapezoids between each pair of consecutive Lorenz curve points. Each trapezoid has width = 20 (one quintile = 20% of population). Area of each = ½ × (y₁ + y₂) × width.',
          answer: 'Trapezoid areas (width = 20 for each quintile segment):\n<br>• (0,0)→(20,5): ½ × (0+5) × 20 = <strong>50</strong>\n• (20,5)→(40,15): ½ × (5+15) × 20 = <strong>200</strong>\n• (40,15)→(60,30): ½ × (15+30) × 20 = <strong>450</strong>\n• (60,30)→(80,55): ½ × (30+55) × 20 = <strong>850</strong>\n• (80,55)→(100,100): ½ × (55+100) × 20 = <strong>1,550</strong>\n\n<strong>Area B = 50 + 200 + 450 + 850 + 1,550 = 3,100</strong> (in percentage² units)'
        },
        {
          label: 'Step 3 — Calculate the Gini coefficient',
          hint: 'The Gini = 1 − 2B/10,000 (the full 100×100 square = 10,000; the triangle of equality = 5,000; Gini = A/(A+B) = 1 − B/5,000). Apply the formula.',
          answer: 'Total square area = 100 × 100 = 10,000\nArea under line of perfect equality (triangle) = 10,000 ÷ 2 = 5,000\n\n<strong>Gini = 1 − 2 × Area B ÷ 10,000</strong>\n= 1 − (2 × 3,100) ÷ 10,000\n= 1 − 6,200 ÷ 10,000\n= 1 − 0.62\n= <strong>0.38</strong>'
        },
        {
          label: 'Step 4 — Interpret the Gini value in context',
          hint: 'What does Gini = 0.38 tell us about this economy? Where does it sit on the global spectrum?',
          answer: '<strong>Gini = 0.38</strong> indicates moderate-to-high income inequality.\n\n<strong>Context benchmarks:</strong>\n• Sweden (post-tax): Gini ≈ 0.27 — highly equal\n• UK (post-tax, disposable income): Gini ≈ 0.35 — moderately unequal\n• USA: Gini ≈ 0.41\n• South Africa: Gini ≈ 0.63 — very unequal\n\nThis economy\'s Gini of 0.38 is above the UK level — suggesting more inequality than post-redistribution UK. The bottom two quintiles (earning only 15% of income) are particularly disadvantaged: the top quintile earns 3× more than the bottom three combined.'
        },
        {
          label: 'Step 5 — Evaluate the Gini as a measure of inequality',
          hint: 'What are the limitations of the Gini coefficient? What does it miss?',
          answer: '<strong>Limitations of the Gini:</strong>\n\n• <em>Averages within quintiles:</em> the Gini uses quintile <em>averages</em> — extreme concentration within the top 1% is hidden. The richest 1% may have a far higher share than the quintile figure suggests.\n\n• <em>Income vs wealth:</em> the Gini measures income flows, not wealth stocks. Wealth inequality is typically far higher (UK wealth Gini ≈ 0.67 vs income Gini ≈ 0.35).\n\n• <em>Different distributions, same Gini:</em> two completely different distributions can produce the same Gini — it doesn\'t reveal <em>where</em> inequality is concentrated.\n\n• <em>No absolute poverty signal:</em> a country can have low Gini but very low incomes for all — the Gini measures relative, not absolute, poverty.\n\n<strong>Better alongside:</strong> Palma ratio (top 10% / bottom 40%), poverty headcount, median/mean income ratio.'
        }
      ],
      conclusion: {
        label: 'Key result',
        text: 'Gini = 0.38 — calculated from cumulative income shares using the trapezoid rule. Higher than post-redistribution UK (≈0.35). The Gini is the most widely cited inequality measure but misses within-quintile concentration, wealth inequality, and absolute poverty. Always pair it with supporting evidence.'
      }
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
