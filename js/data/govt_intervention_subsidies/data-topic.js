window.ECONOS_TOPIC = {
  id: 'govt_intervention_subsidies',
  topicNum: '1.18',
  theme: 'Theme 1 \xb7 Introduction to Markets and Market Failure',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'Government Intervention: Subsidies',
  estTime: '7-9 minutes',
  goal: 'Lock in how subsidies shift supply, their welfare effects, who benefits, and when they are justified as a market failure correction.',
  intro: {
    heroKey: 'fiscal',
    summary: 'Subsidies lower the cost of production or consumption, increasing supply or demand. They can correct positive externalities, support infant industries, and address equity concerns — but they distort markets, cost taxpayers, and may be misallocated.',
    doInThis: 'Work through 7 cards covering the subsidy mechanism, producer vs consumer subsidies, the subsidy diagram, welfare analysis, real-world examples, evaluation, and comparison with alternative policies.',
    outcomes: [
      'Show how a subsidy shifts the supply curve and creates a new equilibrium',
      'Identify on a diagram who benefits from a subsidy and the government cost',
      'Explain the justification for subsidies in terms of positive externalities and market failure',
      'Evaluate subsidies versus alternatives including regulation and public provision'
    ],
    tip: 'Subsidy shifts supply RIGHT (increases supply). New equilibrium: price falls, quantity rises. Government cost = subsidy per unit \xd7 new quantity. Benefit splits between consumers (lower price) and producers (higher effective price) by elasticity.',
    stages: [
      { num: 1, name: 'Learn it', sub: '7 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'govt_intervention_subsidies_1',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 7',
      title: 'Subsidies: the big picture',
      lede: 'Subsidies shift supply right to boost production and consumption — but who really benefits depends on elasticities, not intent.',
      branches: [
        { tone: 'green',  label: 'How they work',         sub: 'Government pays per unit → supply shifts right → price falls, quantity rises. The mirror image of a tax.' },
        { tone: 'blue',   label: 'Correcting externalities', sub: 'Pigouvian logic in reverse: subsidy = MEB internalises positive spillover and moves output to social optimum.' },
        { tone: 'purple', label: 'Incidence',             sub: 'Producer vs consumer share of the benefit depends on relative PED/PES — not on who receives the cheque.' },
        { tone: 'amber',  label: 'Limitations',           sub: 'Opportunity cost of public funds, risk of producer inefficiency, persistence after the original case has gone.' },
        { tone: 'rose',   label: 'Alternative policies',  sub: 'Direct provision, regulation, vouchers, info campaigns — each may achieve the same goal at lower cost.' }
      ],
      body: 'A <strong>subsidy</strong> is a government payment to producers or consumers that lowers the effective cost of a good or service, aiming to increase its production or consumption.<br><br><strong>Types:</strong><br>• <em>Producer subsidy:</em> paid to firms → reduces cost per unit → supply shifts RIGHT → price falls, quantity rises.<br>• <em>Consumer subsidy:</em> paid to buyers (voucher, benefit) → increases effective purchasing power for that good → demand shifts RIGHT → price rises, quantity rises.<br><br>Subsidies are the mirror of taxes: a tax shifts supply left; a subsidy shifts supply right. Both change equilibrium, create transfers, and affect welfare. Subsidies cost the government revenue (opportunity cost).',
      keyTerms: [
        { term: 'Subsidy', def: 'A government payment per unit to reduce the cost of production or consumption — shifts supply rightward.' },
        { term: 'Producer subsidy', def: 'Payment to firms per unit of output — lowers MPC, shifts supply right, reduces price to consumers.' },
        { term: 'Consumer subsidy', def: 'Payment to consumers (voucher or credit) for a specific good — increases effective demand, shifts demand right.' }
      ],
      examEdge: 'Producer subsidy vs consumer subsidy achieve different outcomes: producer subsidy → price falls (consumers benefit); consumer subsidy → price rises (producers benefit more). For correcting a positive externality (underconsumption), both work. Producer subsidy corrects underproduction; consumer subsidy corrects underconsumption. Match the tool to the source of market failure.'
    },
    {
      id: 'govt_intervention_subsidies_2',
      template: 'mechanisms',
      title: 'The Subsidy Diagram',
      intro: 'The subsidy diagram is the mirror image of the tax diagram — master both for maximum flexibility in exams.',
      steps: [
        { label: 'Original equilibrium', text: 'S and D intersect at (P1, Q1). CS above P1 below D; PS above S below P1.' },
        { label: 'Add the subsidy', text: 'Supply shifts RIGHT by the subsidy amount. New supply = S − subsidy. New equilibrium at (P2, Q2). P2 < P1 (consumers pay less); Q2 > Q1 (more is produced and sold).' },
        { label: 'Government cost', text: 'Government cost = subsidy per unit \xd7 new quantity = (P3 − P2) \xd7 Q2, where P3 = price producers receive (P2 + subsidy).' },
        { label: 'Welfare distribution', text: 'Consumer benefit = (P1 − P2) \xd7 Q2 (lower price on all units). Producer benefit = (P3 − P1) \xd7 Q2 (higher received price). Government cost > consumer + producer benefit = DWL from subsidy.' }
      ],
      examEdge: 'The government cost of a subsidy is the rectangle between the two supply curves over the new quantity. The DWL triangle (between old and new equilibrium) represents the welfare cost of distorting production beyond the free-market level — unless correcting an externality, in which case the subsidy reduces the externality DWL.'
    },
    {
      id: 'govt_intervention_subsidies_3',
      template: 'framing',
      title: 'Correcting Positive Externalities with Subsidies',
      body: 'Where a positive externality exists (MSB > MPB), the market under-produces relative to the social optimum. A subsidy can correct this by increasing production to the socially optimal level Q*.<br><br><strong>Optimal subsidy:</strong> set equal to the marginal external benefit (MEB) at Q*. This effectively shifts MPB up to equal MSB (or MPC down to equal MSC for a production subsidy).<br><br><strong>Examples:</strong> solar panel installation subsidy (UK Feed-in Tariff — corrects underproduction of renewable energy); childcare subsidy (corrects under-provision of childcare that enables female workforce participation); R&D tax credits (corrects underinvestment in research with positive knowledge spillovers).',
      keyTerms: [
        { term: 'Optimal subsidy', def: 'Subsidy equal to the marginal external benefit at the socially optimal output — the exact correction needed.' },
        { term: 'Feed-in Tariff', def: 'UK scheme (2010-2019) paying households a guaranteed price for solar electricity generated — subsidy to correct underproduction of renewable energy.' },
        { term: 'R&D spillovers', def: 'Knowledge created by firms\' research spills over to other firms — a positive externality justifying R&D subsidies.' }
      ],
      examEdge: 'Subsidy size calibration problem: optimal subsidy = MEB at Q*. But MEB is hard to measure. Over-subsidy → more than socially optimal production → government failure. Under-subsidy → insufficient correction → market failure persists. This is the same problem as Pigouvian taxes — information requirement is the key limitation.'
    },
    {
      id: 'govt_intervention_subsidies_4',
      template: 'cause',
      title: 'Real-World Subsidy Examples',
      causes: [
        { head: 'Agricultural subsidies', body: 'EU Common Agricultural Policy (CAP): ~€50bn/year in farm subsidies. Justification: food security, rural communities, income stabilisation. Criticism: distorts trade (WTO disputes), benefits large farms disproportionately, environmentally damaging intensive farming incentivised.' },
        { head: 'Electric vehicle grants', body: 'UK Plug-in Vehicle Grant (up to \xa35,000) to correct positive externality of reduced emissions. Also corrects information failure — consumers may underestimate long-run fuel savings. Phased out 2022 as EV market matured and costs fell.' },
        { head: 'Renewable energy (Contracts for Difference)', body: 'Government guarantees a "strike price" for electricity from renewables — effectively a subsidy when market price falls below the strike price. Has driven massive expansion of offshore wind.' },
        { head: 'COVID-19 furlough scheme', body: 'Government paid 80% of wages of furloughed workers — a labour market subsidy. Cost: ~\xa370bn. Prevented mass unemployment during lockdowns. Not correcting market failure — emergency stabilisation policy.' }
      ],
      examEdge: 'Agricultural subsidies are a classic example of a subsidy that may have been justified initially (post-WWII food security) but which now persists due to political economy (farmers are a powerful lobby). This illustrates how subsidies, once established, become politically very difficult to remove — a key government failure risk.'
    },
    {
      id: 'govt_intervention_subsidies_5',
      template: 'paired',
      title: 'Evaluation: Benefits vs Limitations of Subsidies',
      left: {
        label: 'Case FOR subsidies',
        points: [
          'Corrects positive externalities — increases production to socially optimal level',
          'Supports infant industries unable to compete until they achieve economies of scale',
          'Progressive: can be targeted at goods that improve low-income welfare (childcare, food)',
          'Preserves market mechanism — firms still compete on price; consumers still choose',
          'Can drive rapid industry transformation (UK offshore wind subsidised to now cheapest electricity source)'
        ]
      },
      right: {
        label: 'Case AGAINST / Limitations',
        points: [
          'Fiscal cost: funded by taxpayers — opportunity cost of alternative government spending',
          'Difficult to set optimal amount — requires knowing MEB, which is uncertain',
          'May distort resource allocation beyond optimal level (over-subsidised industries attract excess resources)',
          'Vested interests: lobbying to maintain subsidies even when externality is corrected — government failure',
          'May reduce incentive for innovation if firms rely on subsidy rather than efficiency gains'
        ]
      },
      examEdge: 'The infant-industry argument for subsidies: justified if the industry will eventually be competitive (comparative advantage will develop); unjustified if protection becomes permanent and the industry never matures. This is why sunset clauses (automatic removal of subsidies after a fixed period) are good policy design — forces reassessment.'
    },
    {
      id: 'govt_intervention_subsidies_6',
      template: 'diagnose',
      title: 'Who Benefits from a Subsidy?',
      intro: 'The distribution of subsidy benefit between consumers and producers depends on price elasticities — the same logic as tax incidence.',
      rows: [
        { label: 'Scenario', colA: 'Elastic supply, inelastic demand (food staples)', colB: 'Inelastic supply, elastic demand (luxury market)' },
        { label: 'Subsidy effect', colA: 'Supply can expand easily; demand doesn\'t respond much to price. Most of subsidy passed to consumers as lower prices. Government achieves consumption goal.', colB: 'Supply can\'t expand much; consumers respond strongly to lower prices. Most of subsidy absorbed by higher producer revenue, not consumer price reduction.' },
        { label: 'Policy implication', colA: 'Subsidy is efficient at reducing consumer prices — correct instrument if goal is affordability. Subsidy mostly benefits consumers (inelastic demand side).', colB: 'Subsidy mostly benefits producers — may not achieve consumption goal. Alternative (direct consumer voucher) more effective at targeting consumption.' }
      ],
      footer: 'Rule: the more elastic side of the market passes more of the subsidy to the other side. Policymakers should consider who they want to benefit when choosing producer vs consumer subsidy and setting the size.',
      examEdge: 'Agricultural subsidy incidence: demand for food is inelastic; supply is moderately elastic. Result: much of the CAP subsidy is retained by farmers (less elastic side) rather than passed to consumers as lower food prices. This partly explains why CAP is costly but does not dramatically reduce food prices for EU consumers.'
    },
    {
      id: 'govt_intervention_subsidies_7',
      template: 'framing',
      title: 'Subsidies vs Alternative Policies',
      body: '<strong>Subsidy vs regulation:</strong> Subsidies work through incentives (reward the good behaviour); regulation mandates the outcome (penalises non-compliance). Subsidies preserve choice; regulation removes it. Subsidies cost the taxpayer; regulation may not. Subsidies for EVs vs regulation banning petrol cars — both can achieve emissions targets but through different mechanisms with different distributional effects.<br><br><strong>Subsidy vs public provision:</strong> Subsidy supports private providers; public provision replaces them. NHS provides healthcare directly (public provision); childcare voucher subsidises private nurseries. Public provision may be more equitable (universal access); subsidy maintains market diversity and competition.',
      keyTerms: [
        { term: 'Green incentive', def: 'Subsidy or tax break for environmentally beneficial behaviour — positive reinforcement rather than negative (tax) approach.' },
        { term: 'Sunset clause', def: 'Predetermined end date for a policy or subsidy — forces reassessment and reduces risk of permanent distortion.' },
        { term: 'Crowding out', def: 'Government subsidy may displace private investment if it subsidises activities the private sector would have undertaken anyway.' }
      ],
      examEdge: 'Additionality problem with subsidies: did the subsidy cause additional activity, or would it have happened anyway? If firms were going to install solar panels without the Feed-in Tariff, the subsidy is pure windfall with no externality benefit. Measuring additionality is difficult — another information challenge for policymakers.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself &#8594;' }
    }
  ]
};
