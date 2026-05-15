window.ECONOS_TOPIC = {
  id: 'labour_supply_nmw',
  topicNum: '3.19',
  theme: 'Theme 3 \xb7 Business Behaviour and the Labour Market',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'Labour Supply, Trade Unions, and the National Minimum Wage',
  estTime: '10-12 minutes',
  goal: 'Lock in the individual and market labour supply curve, the role of trade unions in wage bargaining, and the economics of the National Minimum Wage under competitive and monopsonistic conditions.',
  intro: {
    heroKey: 'heroLabour',
    summary: 'Labour supply theory explains individual work decisions through the substitution and income effects. Trade unions act as labour market monopolies, raising wages above equilibrium. The National Minimum Wage has surprisingly limited disemployment effects — explained by monopsony theory.',
    doInThis: 'Work through 8 cards covering individual labour supply, the backward-bending supply curve, market labour supply, trade union wage bargaining, union effects, NMW theory and evidence, evaluation, and a full 25-mark NMW essay scaffold.',
    outcomes: [
      'Explain the substitution and income effects on individual labour supply decisions',
      'Derive the backward-bending labour supply curve and explain when it applies',
      'Analyse trade union wage bargaining as a labour market monopoly',
      'Evaluate the effects of the National Minimum Wage on employment, wages, and poverty'
    ],
    tip: 'Individual labour supply: substitution effect (higher wage → leisure more expensive → work more) vs income effect (higher wage → real income higher → buy more leisure → work less). At low wages, substitution dominates. At high wages, income effect may dominate → backward-bending supply curve.',
    stages: [
      { num: 1, name: 'Learn it', sub: '8 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'labour_supply_nmw_1',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'Labour supply, unions, and the NMW: the big picture',
      lede: 'How many hours people work, what unions do to wages, and whether a minimum wage costs jobs — three battles fought on the same supply curve.',
      branches: [
        { tone: 'green',  label: 'Work-leisure choice',   sub: 'Every worker trades hours of leisure for wages. Substitution and income effects shape the individual supply curve.' },
        { tone: 'blue',   label: 'Backward-bending curve',sub: 'At high wages the income effect can dominate — workers buy more leisure as pay rises further. The classic supply twist.' },
        { tone: 'amber',  label: 'Trade unions',          sub: 'Acting as labour-market monopolies, unions raise wages — but risk reducing employment. The classic equity-efficiency trade-off.' },
        { tone: 'purple', label: 'National Minimum Wage', sub: 'Standard theory predicts job losses; monopsony theory predicts no losses or even more jobs. The evidence is genuinely mixed.' }
      ],
      body: 'Every worker faces a trade-off between work (paid) and leisure (unpaid but valued). The individual labour supply decision is about how many hours to work at each wage rate.<br><br><strong>Two effects of a wage increase:</strong><br>• <strong>Substitution effect:</strong> higher wage makes leisure more expensive (each hour of leisure costs more in forgone wages) → rational worker substitutes work for leisure → works MORE hours<br>• <strong>Income effect:</strong> higher wage increases real income → worker can afford more of everything, including leisure → works FEWER hours<br><br>At low wages: substitution effect typically dominates → supply curve slopes upward (more work at higher wages).<br>At high wages: income effect may dominate → supply curve bends backwards (fewer hours at even higher wages).',
      keyTerms: [
        { term: 'Substitution effect (labour)', def: 'Higher wages make leisure more costly in opportunity cost terms → worker substitutes work for leisure → more hours worked.' },
        { term: 'Income effect (labour)', def: 'Higher wages increase real income → worker demands more leisure → fewer hours worked.' },
        { term: 'Work-leisure trade-off', def: 'The individual\'s fundamental labour supply decision: how to allocate time between paid work and leisure given the wage rate.' }
      ],
      examEdge: 'The substitution and income effect analysis of labour supply is a direct parallel of the consumer theory substitution and income effects (Slutsky decomposition). A wage cut works symmetrically: income effect → worker now poorer → buys less leisure → works more. Substitution effect → work is cheaper (relative to leisure) → works less. For a wage cut, these effects partly offset each other — the net direction depends on magnitudes. This analysis is more nuanced than just "lower wage → fewer hours worked."'
    },
    {
      id: 'labour_supply_nmw_2',
      template: 'framing',
      diagramKey: 'backwardBendingLSC',
      title: 'The Backward-Bending Labour Supply Curve',
      body: 'Combining substitution and income effects generates the characteristic shape of the individual labour supply curve:<br><br>• At low wages: substitution effect > income effect → supply curve slopes upward (work more as wage rises)<br>• At higher wages: income effect may exceed substitution effect → supply curve bends backward (work fewer hours as wage rises further)<br>• The bend typically occurs at higher income levels — the curve starts bending for high earners first<br><br><strong>Aggregate (market) labour supply:</strong> the market supply curve is the horizontal sum of all individual supply curves. Because different workers bend at different wages, the aggregate curve typically slopes upward over the relevant range — even if individual curves bend backward, different workers reach the bend point at different wage levels, so the aggregate effect is still upward-sloping in practice.',
      keyTerms: [
        { term: 'Backward-bending supply', def: 'At sufficiently high wages, income effect > substitution effect → individual works fewer hours as wages rise further.' },
        { term: 'Aggregate vs individual supply', def: 'Even if individual supply curves bend backward, the aggregate supply curve may still slope upward due to participation rate effects.' },
        { term: 'Participation effect', def: 'As wages rise, more people are attracted into the labour force — this adds to supply, partially offsetting hours reduction of existing workers.' }
      ],
      examEdge: 'Empirical evidence for backward-bending supply: self-employed workers (flexible hours) show it most clearly — very high earners often reduce hours. Salaried workers are less able to vary hours — standard employment contracts limit the expression of backward-bending supply. The curve is theoretically compelling but practically limited for most workers who cannot freely adjust hours. Evidence for doctors: NHS pay rises in 2000s partly associated with reduced weekend and on-call work — income effect for high earners.'
    },
    {
      id: 'labour_supply_nmw_3',
      template: 'cause',
      title: 'Market Labour Supply: Key Influences',
      causes: [
        { head: 'Population size and demographics', body: 'Larger working-age population → more labour supply. Ageing UK population reduces the proportion in working age (16–64). Baby boom generation retiring 2010s–2030s creates structural decline in labour supply. State pension age rises aim to counteract this.' },
        { head: 'Immigration', body: 'Net migration increases market labour supply — especially in sectors with skills shortages (NHS, construction, hospitality). Brexit reduced EU freedom of movement → tighter labour supply → upward wage pressure in these sectors. 2022-23 labour shortages partly explained by reduced post-Brexit immigration.' },
        { head: 'Female participation rate', body: 'Long-run rise in female labour force participation (from ≈45% in 1970 to ≈72% in 2024) significantly increased market labour supply. Driven by: improved childcare, changing social norms, higher educational attainment, growth of service sector jobs.' },
        { head: 'Non-work income and welfare', body: 'Higher unemployment benefits raise the reservation wage — the minimum wage at which a worker is willing to work. This reduces labour supply at any given market wage. Universal Credit reforms aimed to reduce this effect by making work always pay more than benefits.' }
      ],
      examEdge: 'The reservation wage is a key microeconomic concept in labour supply. A worker will not accept any job paying less than their reservation wage (the wage that makes working just as attractive as not working). Reservation wage = opportunity cost of working = value of next best alternative (benefits + value of home production + leisure). NMW raises the reservation wage for low-wage workers — makes taking some low-paid jobs more attractive. Reducing benefits also affects reservation wage — the debate around benefit levels is partly a labour supply debate.'
    },
    {
      id: 'labour_supply_nmw_4',
      template: 'framing',
      title: 'Trade Unions as Labour Market Monopolies',
      body: 'A <strong>trade union</strong> acts as a monopoly seller of labour — it represents all workers and collectively bargains for wages above the competitive equilibrium.<br><br><strong>Union wage bargaining:</strong><br>• Without union: competitive equilibrium at W*, L*<br>• With union: wage target W<sub>u</sub> > W* set through collective bargaining<br>• At W<sub>u</sub>: employment falls to L<sub>u</sub> < L* (employers demand less labour at higher wage)<br>• Unemployment created: workers willing to work at W<sub>u</sub> exceeds L<sub>u</sub><br><br><strong>Union power depends on:</strong><br>• Membership density (% of workers in union)<br>• Strike credibility (workers\' ability and willingness to sustain strike action)<br>• Employer\'s ability to substitute (outsource, automate, hire non-union workers)<br>• Labour market conditions (high unemployment → weak bargaining position)',
      keyTerms: [
        { term: 'Trade union', def: 'A workers\' organisation that collectively bargains wages above the competitive equilibrium — acts as a monopoly seller of labour.' },
        { term: 'Collective bargaining', def: 'Negotiation between unions and employers over wages, hours, and conditions — on behalf of all covered workers.' },
        { term: 'Closed shop', def: 'Requirement that all workers in a firm be union members — now illegal in UK but increases union bargaining power where operating.' }
      ],
      examEdge: 'Union wage premium (the difference between union and non-union wages for comparable workers) is positive and significant in empirical studies: typically 10-20% higher wages in unionised sectors. UK union membership has fallen from 55% of workers in 1979 to ≈23% in 2024 — explaining part of the rise in wage inequality. Higher-income workers are now more unionised than lower-income ones (professional associations like BMA, law societies) — reversal of the traditional pattern.'
    },
    {
      id: 'labour_supply_nmw_5',
      template: 'diagnose',
      title: 'Trade Unions: Employment and Efficiency Effects',
      intro: 'Trade union wage bargaining has distinct effects on employment, efficiency, and wage distribution.',
      rows: [
        { label: 'Effect', colA: 'Competitive labour market', colB: 'Monopsony labour market' },
        { label: 'Union wage increase above W*', colA: 'Employment FALLS (L < L*). Employers demand less labour at higher wage. Unemployment created. Workers in employment gain (higher wages); unemployed workers lose. Classic trade-off: efficiency loss for distributional gain.', colB: 'Employment may RISE. If union sets W = competitive wage, employment increases from the monopsony level (below competitive) toward competitive equilibrium. Union corrects monopsony distortion. Both wages AND employment can rise — two goods for workers.' },
        { label: 'Policy verdict', colA: 'Union creates unemployment — monopoly in labour market similar to monopoly in product market. Efficiency case for restricting union power.', colB: 'Union restores competitive outcome — corrects monopsony failure. Efficiency case for union power as countervailing force against employer monopoly.' }
      ],
      footer: 'Real labour markets are complex mixtures. Some sectors have monopsonistic characteristics (NHS, care sector) where unions correct power imbalances. Others are competitive where unions simply raise wages at cost of employment. Context determines the welfare verdict.',
      examEdge: 'The bilateral monopoly case: monopsony employer faces a union (monopoly seller of labour). Both sides have market power. The outcome is indeterminate without knowing relative bargaining strength — somewhere between the monopsony wage (low, no union) and union wage (high, full union power). This range is where real-world collective bargaining occurs. The bilateral monopoly model explains why NHS pay negotiations are complex: NHS has monopsony power (single employer of NHS nurses nationally); unions have monopoly power (RCN represents most nurses). Outcome depends on political economy, not just market forces.'
    },
    {
      id: 'labour_supply_nmw_6',
      template: 'framing',
      diagramKey: 'nmwDiagram',
      title: 'The National Minimum Wage: Theory and Evidence',
      body: 'The <strong>National Minimum Wage (NMW)</strong> / <strong>National Living Wage (NLW)</strong> sets a legal floor on wages:<br><br><strong>Standard competitive model prediction:</strong> a wage floor above equilibrium → excess supply (unemployment). More workers want to work than employers want to hire at the higher wage.<br><br><strong>Evidence contradicts the simple model:</strong> Card and Krueger (1994) — US study comparing fast food employment across state minimum wage border — found minimum wage increases did NOT reduce employment. UK Low Pay Commission finds similarly small employment effects in UK NMW research.<br><br><strong>Monopsony explanation:</strong> many low-wage sectors have monopsonistic characteristics (few large employers of low-skill workers: Amazon warehouses, care sector, supermarkets). In monopsony, NMW up to the competitive wage level can increase both wages AND employment — correcting the monopsony distortion.<br><br><strong>2024 NLW:</strong> £11.44/hour for workers 21+. UK minimum wage now among highest in OECD relative to median wages.',
      keyTerms: [
        { term: 'National Minimum Wage (NMW)', def: 'Legal wage floor set by government — currently called National Living Wage for those 21+. Uprated annually by Low Pay Commission.' },
        { term: 'Low Pay Commission (LPC)', def: 'Independent body that reviews evidence and recommends minimum wage rates to government — balances worker poverty with employment effects.' },
        { term: 'Card-Krueger study', def: 'Landmark 1994 study finding no disemployment from US minimum wage increases — helped establish the monopsony explanation.' }
      ],
      examEdge: 'The NMW debate is one of the most empirically contested areas in economics. The theory (competitive model) predicts unemployment. The evidence largely doesn\'t find it. The resolution: (1) monopsony explains it in low-wage sectors; (2) the NMW hasn\'t been set high enough to reach the competitive equilibrium in most markets — still below the competitive wage; (3) firms adjust through non-wage margins (fewer hours, less non-wage compensation, higher productivity required). A 2024 A-level essay should engage with all three explanations, not just state the simple competitive model.'
    },
    {
      id: 'labour_supply_nmw_7',
      template: 'paired',
      title: 'Evaluation: National Minimum Wage',
      left: {
        label: 'Arguments for NMW',
        points: [
          'Raises wages of the lowest-paid — directly reduces in-work poverty',
          'Monopsony correction: in low-wage sectors, NMW may increase both wages AND employment',
          'Reduces income inequality (Gini coefficient) — compresses wage distribution at bottom',
          'Reduces government spending on in-work benefits (tax credits) as wages rise',
          'Evidence: UK employment continued to rise through NMW increases 1999–2024'
        ]
      },
      right: {
        label: 'Arguments against / concerns',
        points: [
          'Competitive model: wage above equilibrium → unemployment for some low-skilled workers',
          'Small business pressure: cannot afford higher wages → reduce hours, freeze hiring',
          'Regional variation: £11.44 is much closer to market wage in northern England than London — larger employment effect risk in low-wage regions',
          'May reduce non-wage benefits as firms cut back other compensation to offset cost',
          'Not targeted at household poverty — many minimum wage earners are second earners in non-poor households'
        ]
      },
      examEdge: 'Regional variation in the NMW\'s effect is a sophisticated evaluation point. In London, median wage is £19/hour — NMW of £11.44 is well below equilibrium, meaning employment effects are minimal. In low-wage regions of northern England, median wages in some sectors approach the NMW — the floor is binding, closer to or above the competitive equilibrium in those areas. A uniform national NMW is therefore more likely to cause employment effects in low-wage regions than high-wage ones. This is why some economists advocate regional minimum wages — though this creates its own complications.'
    },
    {
      id: 'labour_supply_nmw_essay',
      template: 'essay-scaffold',
      stepLabel: 'Learn: Step 8 of 8',
      title: 'Essay Scaffold: The Case for a National Minimum Wage',
      lede: 'Write your own version of each paragraph, then reveal the model to compare. Focus on the monopsony twist — it\'s what separates a good answer from a great one.',
      question: 'Evaluate the case for a National Minimum Wage. [25 marks]',
      marks: 25,
      timeGuide: '35–40 minutes',
      paragraphs: [
        {
          type: 'intro',
          label: '3–4 sentences',
          prompt: 'Define NMW. State what the standard competitive model predicts (unemployment). Signal that you will challenge this with the monopsony model and real-world evidence.',
          hint: 'The examiner is looking for: definition, the theoretical tension, and a signpost to your analytical approach.',
          model: 'The National Minimum Wage (NMW) — £11.44/hour for workers 21+ in 2024, branded the National Living Wage — sets a legal floor below which wages cannot fall. Standard competitive labour market theory predicts that a wage floor set above equilibrium will cause unemployment: firms demand less labour at the higher price, while more workers seek employment, creating a surplus. However, this prediction is contested: Card and Krueger\'s landmark 1994 study found no disemployment effects from US minimum wage increases, and the UK Low Pay Commission has found similar results. The monopsony model offers an explanation — in markets where employers have wage-setting power, a minimum wage can actually increase both wages and employment simultaneously.'
        },
        {
          type: 'analysis',
          label: 'Standard competitive model — the case against',
          prompt: 'Draw the competitive labour market diagram with an NMW floor above equilibrium. Identify Q_d (employment falls), Q_s (labour supply rises), and the unemployment gap Q_s − Q_d.',
          hint: 'Be precise: employment falls from Q* to Q_d, not from Q_s to Q_d. This is a common exam error.',
          model: 'In a competitive labour market, the NMW acts as a price floor above the equilibrium wage W*. At the NMW, employers demand labour at Q_d (on the labour demand/MRP curve) — lower than the competitive employment level Q*. Workers supply labour at Q_s (on the labour supply curve) — higher than Q*. The result is a surplus of labour (Q_s − Q_d) — unemployment. Firms in the competitive model are at the efficient margin: any wage above W* makes some previously profitable employment unprofitable. This argument suggests the NMW destroys exactly the low-wage jobs it was designed to protect, particularly affecting young workers, those in low-skill roles, and firms in price-competitive industries like retail and hospitality.'
        },
        {
          type: 'counter',
          label: 'Monopsony model — the case for',
          prompt: 'Draw the monopsony diagram: S = AC_L, MC_L above supply, MRP as demand. Show that monopsony sets W_m < W* and Q_m < Q*. Then show how a minimum wage up to W* raises both wages AND employment.',
          hint: 'The key insight: monopsony produces below competitive output AND below competitive wages — the minimum wage corrects both distortions simultaneously.',
          model: 'The monopsony model fundamentally changes the analysis. A monopsonist — a dominant buyer of labour — faces an upward-sloping supply curve: to hire more workers, it must raise the wage for all existing workers. The marginal cost of labour (MCL) therefore exceeds the supply curve (AC_L). Profit-maximising monopsonist hires where MCL = MRP at output Q_m, paying wage W_m — below both the competitive wage W* and workers\' MRP. A minimum wage set between W_m and W* raises wages and simultaneously increases employment toward the competitive level, because the minimum wage flattens the MCL curve for the monopsonist — the dominant strategy is now to hire more, not less. Many low-wage sectors in the UK exhibit monopsonistic features: the NHS is the dominant employer of nurses; large supermarket chains dominate in many local labour markets; social care is geographically concentrated. For these sectors, the monopsony model is the more relevant framework, explaining why Low Pay Commission research consistently finds small or zero disemployment effects from NMW increases.'
        },
        {
          type: 'evaluation',
          label: 'Broader effects and limitations',
          prompt: 'Evaluate beyond employment: effects on (1) poverty reduction; (2) inflation; (3) firm productivity; (4) regional variation. Be honest about limitations.',
          hint: 'A strong evaluation identifies the conditions under which the NMW works well vs poorly — not just a list of pros and cons.',
          model: 'Beyond employment effects, the NMW generates several further consequences. On poverty: it raises wages of the lowest-paid and reduces the Gini coefficient — though its poverty-reduction impact is limited because many minimum-wage workers are secondary earners in non-poor households (the "poverty-trap targeting" problem). On inflation: a wage floor raises firms\' costs, potentially feeding through to prices — though evidence of significant NMW-driven inflation is limited, suggesting firms absorb the cost through productivity improvement and reduced margins rather than price rises. On productivity: higher wages may improve worker morale, reduce turnover and absenteeism, and attract higher-quality workers — efficiency wage theory suggests that the positive effect on labour quality can offset some or all of the wage cost increase. A crucial limitation is regional variation: £11.44/hour is well below the market wage in London but approaches the market wage in some northern and rural labour markets, meaning disemployment risks are geographically concentrated.'
        },
        {
          type: 'conclusion',
          label: '3–4 sentences — conditional verdict',
          prompt: 'Reach a clear verdict. Under what conditions is the NMW beneficial? Under what conditions harmful? What does the balance of evidence suggest?',
          model: 'The balance of evidence supports a qualified case for the NMW. Where low-wage markets have monopsonistic characteristics — which is more common than the competitive model assumes — the NMW corrects a market failure by raising both wages and employment. The poverty reduction and inequality compression benefits are real, even if imperfectly targeted. The risks are most acute when the NMW is set above the competitive equilibrium in genuinely competitive, thin-margin labour markets, and in low-wage regions where the floor bites hardest. A well-calibrated NMW, set by an independent body like the Low Pay Commission using current evidence, is likely to do more good than harm — but the appropriate level is an empirical question, not a theoretical one, and the case grows weaker the higher the floor is set relative to median wages.'
        }
      ],
      examEdge: 'The monopsony rebuttal is what separates A and A* answers from B answers on this question. Examiners explicitly credit candidates who know the Card-Krueger study (1994), the Low Pay Commission evidence, and the monopsony explanation. Avoid saying "studies show the NMW doesn\'t cause unemployment" without explaining WHY — the mechanism (monopsony correction) is the economic analysis, not the empirical assertion.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself &#8594;' }
    }
  ]
};
