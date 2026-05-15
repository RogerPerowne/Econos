window.ECONOS_TOPIC = {
  id: 'govt_intervention_subsidies',
  topicNum: '1.18',
  theme: 'Theme 1 \xb7 Introduction to Markets and Market Failure',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'Government Intervention: Subsidies',
  estTime: '9-11 minutes',
  goal: 'Lock in how subsidies shift supply, their welfare effects, who benefits, and when they are justified as a market failure correction.',
  intro: {
    heroKey: 'heroIntervention',
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
      { num: 1, name: 'Learn it', sub: '8 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'govt_intervention_subsidies_1',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 8',
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
      diagramKey: 'subsidyDiagram',
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
    },

    /* ----- CARD 8 — Essay scaffold ----- */
    {
      id: 'gis-essay',
      template: 'essay-scaffold',
      stepLabel: 'Learn: Step 8 of 8',
      title: 'Essay scaffold: government intervention — subsidies',
      question: 'Evaluate the view that subsidies are a more effective form of government intervention than taxation to correct market failure. (25 marks)',
      marks: 25,
      timeGuide: '35 minutes',
      paragraphs: [
        {
          type: 'intro',
          label: 'Introduction',
          prompt: 'Define market failure, subsidies, and taxation. Introduce the key comparison: subsidy vs tax as policy tools for correcting market failure.',
          hint: 'Market failure = when free markets fail to allocate resources efficiently. Subsidies correct positive externalities/under-provision; taxes correct negative externalities/over-provision. Both aim to shift output towards the social optimum.',
          model: 'Market failure arises when free markets fail to allocate resources efficiently, leading to a divergence between private and social costs or benefits. Subsidies are government payments to producers or consumers that reduce the cost of provision and shift the supply curve rightward, correcting under-production of goods with positive externalities. Taxation, by contrast, adds to costs and corrects over-production of goods with negative externalities. Both instruments are grounded in Pigouvian logic — aligning private incentives with social welfare — but differ fundamentally in context, distributional impact, and practical effectiveness.'
        },
        {
          type: 'analysis',
          label: 'Analysis 1 — Subsidies correct under-provision and positive externalities',
          prompt: 'Explain how a Pigouvian subsidy set equal to the marginal external benefit (MEB) closes the gap between MSB and MPB, raising output to the social optimum.',
          hint: 'Education, renewable energy, healthcare — all under-consumed without subsidy. Diagram: MPB shifts to MSB via subsidy. Output rises from Qm to Q*. Consumer price falls; producer revenue rises.',
          model: 'Where a good generates positive externalities — such as education or renewable energy — free markets under-produce because private consumers ignore the external benefit to society (MSB > MPB). A Pigouvian subsidy set equal to the marginal external benefit closes this gap: supply shifts right, market price falls, and consumption rises to the social optimum (Q*). The UK\'s Feed-in Tariff for solar energy successfully raised renewable capacity from under 1GW in 2010 to over 13GW by 2019, demonstrating that subsidies can effectively internalise positive externalities. In this context, subsidies outperform taxes because the problem is under-consumption, not over-consumption.'
        },
        {
          type: 'analysis',
          label: 'Analysis 2 — Subsidies preserve consumer choice and market incentives',
          prompt: 'Argue that subsidies work through positive incentives (reward desired behaviour) rather than penalties, making them more politically acceptable and less likely to generate black markets or evasion.',
          hint: 'Subsidies for EVs, insulation, healthy food — positive reinforcement. No black market risk (unlike tobacco/alcohol taxes). Incidence: consumers and producers share benefit depending on PED/PES.',
          model: 'A key advantage of subsidies over taxes is that they use positive reinforcement — rewarding desired behaviour — rather than penalising undesired activity. This makes them politically more palatable and avoids the behavioural distortions associated with high taxes, such as black markets (illicit tobacco), evasion, and cross-border shopping. Subsidies for electric vehicles (e.g. plug-in car grant) and home insulation raise participation without generating the regressive burden of fuel duty. Furthermore, subsidy incidence is shared between consumers (lower prices) and producers (higher revenues) depending on PED/PES, meaning targeted subsidies can be calibrated to benefit intended groups — a precision that per-unit taxes cannot always achieve.'
        },
        {
          type: 'counter',
          label: 'Counter — Taxation is more effective for negative externalities and raises revenue',
          prompt: 'Argue that for correcting over-production of harmful goods (pollution, smoking, congestion), taxes are the appropriate and often more effective instrument — and they generate revenue unlike subsidies.',
          hint: 'Carbon tax, tobacco duty, sugar tax — reduce output toward social optimum. Pigouvian tax = MEC. Revenue can be recycled (green dividend). Subsidies cost the public purse; taxes fill it.',
          model: 'When the market failure involves negative externalities — pollution, smoking, alcohol, congestion — taxation is the more appropriate instrument. A Pigouvian tax set equal to the marginal external cost (MEC) internalises the externality by raising the private cost to reflect the social cost, shifting output left to the social optimum. Unlike subsidies, taxes generate public revenue that can be recycled to address distributional concerns (e.g. British Columbia\'s revenue-neutral carbon tax) or fund public goods. The UK sugar levy on soft drinks raised £340m annually while reducing consumption — a dual fiscal and health benefit that subsidies cannot replicate when the goal is to reduce rather than increase activity.'
        },
        {
          type: 'evaluation',
          label: 'Evaluation — Both instruments face information and implementation problems',
          prompt: 'Evaluate the practical limitations common to both: the information required to set the optimal rate, additionality of subsidies, regressivity of taxes, and government failure risks.',
          hint: 'Optimal Pigouvian rate requires knowing MEC or MEB — both are uncertain. Subsidy additionality: would activity have happened anyway? Tax regressivity: falls harder on low incomes. Both risk government failure.',
          model: 'Both subsidies and taxes face a fundamental information problem: setting the optimal rate requires accurate measurement of MEC or MEB, which is inherently uncertain and varies across contexts and individuals. Too high a subsidy wastes public funds through additionality (firms receive payment for activity they would have undertaken anyway); too high a tax creates excessive deadweight loss and may be regressive, imposing a disproportionate burden on lower-income households (as with fuel duty). The UK\'s reversal of the fuel duty escalator illustrates political constraints on optimal tax design. The choice between subsidy and tax must therefore be contextual: subsidies are preferable for under-provided merit goods; taxes for over-produced demerit goods; and neither is immune to the information failures that limit government intervention generally.'
        },
        {
          type: 'conclusion',
          label: 'Conclusion',
          prompt: 'Reach a judgement: is the question\'s premise correct that subsidies are more effective than taxes? Commit to a conditional answer.',
          hint: 'Context is key: subsidies superior for positive externalities; taxes superior for negative externalities. Neither is universally better. The best policy matches the instrument to the nature of the market failure.',
          model: 'In conclusion, the premise that subsidies are more effective than taxes is too absolute — effectiveness depends entirely on the nature of the market failure. Subsidies are the superior instrument when the failure stems from under-provision or positive externalities, as the goal is to increase activity, not restrict it. Taxes are more effective — and fiscally advantageous — when the failure involves over-production of harmful goods. Neither instrument is universally superior; the most effective intervention deploys the right tool for the specific failure. Where both could apply, the choice should consider distributional effects, revenue implications, practical enforceability, and the risk of government failure in setting optimal rates.'
        }
      ]
    }
  ]
};
