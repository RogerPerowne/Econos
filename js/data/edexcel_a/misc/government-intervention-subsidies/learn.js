window.ECONOS_TOPIC = {
  id: 'government-intervention-subsidies',
  topicNum: '1.18',
  theme: 'Theme 1 · Introduction to Markets and Market Failure',
  title: 'Government Intervention: Subsidies',
  estTime: '9-11 minutes',
  goal: 'Lock in how subsidies shift supply, their welfare effects, who benefits, and when they are justified as a market failure correction.',
  intro: {
    heroKey: 'heroIntervention',
    summary: 'Subsidies lower the cost of production or consumption, increasing supply or demand. They can correct positive externalities, support infant industries, and address equity concerns – but they distort markets, cost taxpayers, and may be misallocated.',
    doInThis: 'Work through 7 cards covering the subsidy mechanism, producer vs consumer subsidies, the subsidy diagram, welfare analysis, real-world examples, evaluation, and comparison with alternative policies.',
    outcomes: [
      'Show how a subsidy shifts the supply curve and creates a new equilibrium',
      'Identify on a diagram who benefits from a subsidy and the government cost',
      'Explain the justification for subsidies in terms of positive externalities and market failure',
      'Evaluate subsidies versus alternatives including regulation and public provision'
    ],
    tip: 'Subsidy shifts supply RIGHT (increases supply). New equilibrium: price falls, quantity rises. Government cost = subsidy per unit × new quantity. Benefit splits between consumers (lower price) and producers (higher effective price) by elasticity.',
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
      lede: 'Subsidies shift supply right to boost production and consumption – but who really benefits depends on elasticities, not intent.',
      tip: 'Who benefits? The less elastic side. Inelastic demand → consumers keep most of the benefit (lower price). Inelastic supply → producers keep most (higher received price). This is the mirror of tax incidence.',
      branches: [
        { tone: 'green',  label: 'How they work',         sub: 'Government pays per unit → supply shifts right → price falls, quantity rises. The mirror image of a tax.' },
        { tone: 'blue',   label: 'Correcting externalities', sub: 'Pigouvian logic in reverse: subsidy = MEB internalises positive spillover and moves output to social optimum.' },
        { tone: 'purple', label: 'Incidence',             sub: 'Producer vs consumer share of the benefit depends on relative PED/PES – not on who receives the cheque.' },
        { tone: 'amber',  label: 'Limitations',           sub: 'Opportunity cost of public funds, risk of producer inefficiency, persistence after the original case has gone.' },
        { tone: 'rose',   label: 'Alternative policies',  sub: 'Direct provision, regulation, vouchers, info campaigns – each may achieve the same goal at lower cost.' }
      ],
      body: 'A <strong>subsidy</strong> is a government payment to producers or consumers that lowers the effective cost of a good or service, aiming to increase its production or consumption.<br><br><strong>Types:</strong><br>• <em>Producer subsidy:</em> paid to firms → reduces cost per unit → supply shifts RIGHT → price falls, quantity rises.<br>• <em>Consumer subsidy:</em> paid to buyers (voucher, benefit) → increases effective purchasing power for that good → demand shifts RIGHT → price rises, quantity rises.<br><br>Subsidies are the mirror of taxes: a tax shifts supply left; a subsidy shifts supply right. Both change equilibrium, create transfers, and affect welfare. Subsidies cost the government revenue (opportunity cost).',
      keyTerms: [
        { term: 'Subsidy', def: 'A government payment per unit to reduce the cost of production or consumption – shifts supply rightward.' },
        { term: 'Producer subsidy', def: 'Payment to firms per unit of output – lowers MPC, shifts supply right, reduces price to consumers.' },
        { term: 'Consumer subsidy', def: 'Payment to consumers (voucher or credit) for a specific good – increases effective demand, shifts demand right.' }
      ],
      examEdge: 'Producer subsidy vs consumer subsidy achieve different outcomes: producer subsidy → price falls (consumers benefit); consumer subsidy → price rises (producers benefit more). For correcting a positive externality (underconsumption), both work. Producer subsidy corrects underproduction; consumer subsidy corrects underconsumption. Match the tool to the source of market failure.'
    },
    {
      id: 'govt_intervention_subsidies_2',
      template: 'mechanisms',
      diagramKey: 'subsidyDiagram',
      title: 'The Subsidy Diagram',
      intro: 'The subsidy diagram is the mirror image of the tax diagram – master both for maximum flexibility in exams.',
      steps: [
        { label: '📍 Original equilibrium', text: 'S and D intersect at (P1, Q1). CS above P1 below D; PS above S below P1.' },
        { label: '➡️ Add the subsidy', text: 'Supply shifts RIGHT by the subsidy amount. New supply = S − subsidy. New equilibrium at (P2, Q2). P2 < P1 (consumers pay less); Q2 > Q1 (more is produced and sold).' },
        { label: '💰 Government cost', text: 'Government cost = subsidy per unit × new quantity = (P3 − P2) × Q2, where P3 = price producers receive (P2 + subsidy).' },
        { label: '📊 Welfare distribution', text: 'Consumer benefit = (P1 − P2) × Q2 (lower price on all units). Producer benefit = (P3 − P1) × Q2 (higher received price). Government cost > consumer + producer benefit = DWL from subsidy.' }
      ],
      examEdge: 'The government cost of a subsidy is the rectangle between the two supply curves over the new quantity. The DWL triangle (between old and new equilibrium) represents the welfare cost of distorting production beyond the free-market level – unless correcting an externality, in which case the subsidy reduces the externality DWL.'
    },
    {
      id: 'govt_intervention_subsidies_3',
      template: 'framing',
      title: 'Correcting Positive Externalities with Subsidies',
      body: 'Where a positive externality exists (MSB > MPB), the market under-produces relative to the social optimum. A subsidy can correct this by increasing production to the socially optimal level Q*.<br><br><strong>Optimal subsidy:</strong> set equal to the marginal external benefit (MEB) at Q*. This effectively shifts MPB up to equal MSB (or MPC down to equal MSC for a production subsidy).<br><br><strong>Examples:</strong> solar panel installation subsidy (UK Feed-in Tariff – corrects underproduction of renewable energy); childcare subsidy (corrects under-provision of childcare that enables female workforce participation); R&D tax credits (corrects underinvestment in research with positive knowledge spillovers).',
      keyTerms: [
        { term: 'Optimal subsidy', def: 'Subsidy equal to the marginal external benefit at the socially optimal output – the exact correction needed.' },
        { term: 'Feed-in Tariff', def: 'UK scheme (2010-2019) paying households a guaranteed price for solar electricity generated – subsidy to correct underproduction of renewable energy.' },
        { term: 'R&D spillovers', def: 'Knowledge created by firms\' research spills over to other firms – a positive externality justifying R&D subsidies.' }
      ],
      examEdge: 'Subsidy size calibration problem: optimal subsidy = MEB at Q*. But MEB is hard to measure. Over-subsidy → more than socially optimal production → government failure. Under-subsidy → insufficient correction → market failure persists. This is the same problem as Pigouvian taxes – information requirement is the key limitation.'
    },
    {
      id: 'govt_intervention_subsidies_4',
      template: 'cause',
      title: 'Real-World Subsidy Examples',
      causesStyle: 'tinted-flat',
      causesEmoji: '💰',
      causesLabel: 'Four major UK subsidy contexts',
      causes: [
        { icon: '🌾', head: 'Agricultural subsidies', body: 'EU Common Agricultural Policy (CAP): ~€50bn/year in farm subsidies. Justification: food security, rural communities, income stabilisation. Criticism: distorts trade (WTO disputes), benefits large farms disproportionately, environmentally damaging intensive farming incentivised.' },
        { icon: '⚡', head: 'Electric vehicle grants', body: 'UK Plug-in Vehicle Grant (up to £5,000) to correct positive externality of reduced emissions. Also corrects information failure – consumers may underestimate long-run fuel savings. Phased out 2022 as EV market matured and costs fell.' },
        { icon: '🌬️', head: 'Renewable energy (Contracts for Difference)', body: 'Government guarantees a "strike price" for electricity from renewables – effectively a subsidy when market price falls below the strike price. Has driven massive expansion of offshore wind.' },
        { icon: '😷', head: 'COVID-19 furlough scheme', body: 'Government paid 80% of wages of furloughed workers – a labour market subsidy. Cost: ~£70bn. Prevented mass unemployment during lockdowns. Not correcting market failure – emergency stabilisation policy.' }
      ],
      examEdge: 'Agricultural subsidies are a classic example of a subsidy that may have been justified initially (post-WWII food security) but which now persists due to political economy (farmers are a powerful lobby). This illustrates how subsidies, once established, become politically very difficult to remove – a key government failure risk.'
    },
    {
      id: 'govt_intervention_subsidies_5',
      template: 'framing',
      title: 'Evaluation: Benefits vs Limitations of Subsidies',
      verdict: {
        leftLabel: '✅ Case FOR subsidies',
        rightLabel: '❌ Case AGAINST / Limitations',
        separator: 'VS',
        rows: [
          { aspect: 'Externalities', left: 'Corrects positive externalities – increases production to socially optimal level', right: 'Fiscal cost: funded by taxpayers – opportunity cost of alternative government spending' },
          { aspect: 'Industries', left: 'Supports infant industries unable to compete until they achieve economies of scale', right: 'Difficult to set optimal amount – requires knowing MEB, which is uncertain' },
          { aspect: 'Equity', left: 'Progressive: can be targeted at goods that improve low-income welfare (childcare, food)', right: 'May distort resource allocation beyond optimal level (over-subsidised industries attract excess resources)' },
          { aspect: 'Market mechanism', left: 'Preserves market mechanism – firms still compete on price; consumers still choose', right: 'Vested interests: lobbying to maintain subsidies even when externality is corrected – government failure' },
          { aspect: 'Track record', left: 'UK offshore wind subsidised to now cheapest electricity source – industrial transformation', right: 'May reduce incentive for innovation if firms rely on subsidy rather than efficiency gains' }
        ]
      },
      examEdge: 'The infant-industry argument for subsidies: justified if the industry will eventually be competitive (comparative advantage will develop); unjustified if protection becomes permanent and the industry never matures. This is why sunset clauses (automatic removal of subsidies after a fixed period) are good policy design – forces reassessment.'
    },
    {
      id: 'govt_intervention_subsidies_6',
      template: 'diagnose',
      title: 'Who Benefits from a Subsidy?',
      intro: 'The distribution of subsidy benefit between consumers and producers depends on price elasticities – the same logic as tax incidence.',
      rows: [
        { label: 'Scenario', colA: 'Elastic supply, inelastic demand (food staples)', colB: 'Inelastic supply, elastic demand (luxury market)' },
        { label: 'Subsidy effect', colA: 'Supply can expand easily; demand doesn\'t respond much to price. Most of subsidy passed to consumers as lower prices. Government achieves consumption goal.', colB: 'Supply can\'t expand much; consumers respond strongly to lower prices. Most of subsidy absorbed by higher producer revenue, not consumer price reduction.' },
        { label: 'Policy implication', colA: 'Subsidy is efficient at reducing consumer prices – correct instrument if goal is affordability. Subsidy mostly benefits consumers (inelastic demand side).', colB: 'Subsidy mostly benefits producers – may not achieve consumption goal. Alternative (direct consumer voucher) more effective at targeting consumption.' }
      ],
      footer: 'Rule: the more elastic side of the market passes more of the subsidy to the other side. Policymakers should consider who they want to benefit when choosing producer vs consumer subsidy and setting the size.',
      examEdge: 'Agricultural subsidy incidence: demand for food is inelastic; supply is moderately elastic. Result: much of the CAP subsidy is retained by farmers (less elastic side) rather than passed to consumers as lower food prices. This partly explains why CAP is costly but does not dramatically reduce food prices for EU consumers.'
    },
    {
      id: 'govt_intervention_subsidies_7',
      template: 'framing',
      title: 'Subsidies vs Alternative Policies',
      body: '<strong>Subsidy vs regulation:</strong> Subsidies work through incentives (reward the good behaviour); regulation mandates the outcome (penalises non-compliance). Subsidies preserve choice; regulation removes it. Subsidies cost the taxpayer; regulation may not. Subsidies for EVs vs regulation banning petrol cars – both can achieve emissions targets but through different mechanisms with different distributional effects.<br><br><strong>Subsidy vs public provision:</strong> Subsidy supports private providers; public provision replaces them. NHS provides healthcare directly (public provision); childcare voucher subsidises private nurseries. Public provision may be more equitable (universal access); subsidy maintains market diversity and competition.',
      keyTerms: [
        { term: 'Green incentive', def: 'Subsidy or tax break for environmentally beneficial behaviour – positive reinforcement rather than negative (tax) approach.' },
        { term: 'Sunset clause', def: 'Predetermined end date for a policy or subsidy – forces reassessment and reduces risk of permanent distortion.' },
        { term: 'Crowding out', def: 'Government subsidy may displace private investment if it subsidises activities the private sector would have undertaken anyway.' }
      ],
      examEdge: 'Additionality problem with subsidies: did the subsidy cause additional activity, or would it have happened anyway? If firms were going to install solar panels without the Feed-in Tariff, the subsidy is pure windfall with no externality benefit. Measuring additionality is difficult – another information challenge for policymakers.',
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
    title:    'Government Intervention: Subsidies',
    subtitle: 'Theme 1.18 &middot; Edexcel A-Level',
    backUrl:  TopicLoader.routes.learn('govt_intervention_subsidies_main'),
    backLabel: 'Back to Learn It',
    lede: '10 questions · ~8 minutes · covers subsidy mechanics, welfare effects, corrective and non-corrective subsidies, agriculture, and evaluation',
    shortNames: [
      'Subsidy definition MCQ', 'Supply shift MCQ', 'Welfare effect', 'Positive externality subsidy',
      'Agricultural subsidies', 'Cause & effect', 'Match pairs', 'Odd one out',
      'Data table', 'Evaluation multi-select'
    ],

    questions: [

      /* 1 – MCQ: how a subsidy works */
      { type: 'mcq',
        stem: 'A government introduces a per-unit subsidy paid to producers. What is the <strong>immediate market effect</strong>?',
        opts: [
          'The supply curve shifts rightward – for each unit, producers effectively face a lower cost of production; more is supplied at every price, reducing the market price',
          'The demand curve shifts rightward – consumers feel richer because the good is cheaper',
          'The supply curve shifts leftward – producers reduce output when they receive government support',
          'The equilibrium price rises because government spending increases aggregate demand'
        ],
        ans: 0,
        exp: 'A per-unit subsidy reduces the effective marginal cost of production for firms. The supply curve shifts <strong>rightward</strong> by the amount of the subsidy (more is supplied at every price). The new equilibrium has a lower market price and higher quantity. Consumers pay less than before (gap between old and new equilibrium price = consumer gain from subsidy). Producers receive the market price PLUS the subsidy = effective price received rises. Both buyers and sellers benefit – but the government bears the cost (subsidy × new equilibrium quantity).'
      },

      /* 2 – MCQ: subsidy price split */
      { type: 'mcq',
        stem: 'A £4 per-unit subsidy is introduced in a market. Before subsidy: P = £10. After subsidy: consumer price = £8, producer net price = £12 (including subsidy). How is the subsidy <strong>shared</strong>?',
        opts: [
          'Consumers receive £2 of the benefit (price falls from £10 to £8); producers receive £2 (effective price rises from £10 to £12)',
          'Consumers receive all £4 (price falls by £4 to £6); producers receive nothing',
          'Producers receive all £4 (effective price rises by £4 to £14); consumers receive nothing',
          'The £4 subsidy is all collected as government revenue through higher tax receipts'
        ],
        ans: 0,
        exp: 'The £4 subsidy is split between buyers and sellers based on relative elasticities. Consumer benefit: price falls from £10 to £8 = <strong>£2 per unit</strong>. Producer benefit: effective price rises from £10 to £12 = <strong>£2 per unit</strong>. Total = £4 = full subsidy. ✓. The split depends on elasticity: with inelastic demand, consumers gain more (price falls more); with elastic demand, consumers gain less (price falls less, producers gain more). Government spends £4 × quantity – total cost is the rectangle under the new supply curve between old and new quantities.'
      },

      /* 3 – MCQ: net welfare effect */
      { type: 'mcq',
        stem: 'A subsidy on a good with <strong>no externality</strong> creates a <strong>deadweight welfare loss</strong> because:',
        opts: [
          'The subsidy increases output beyond the social optimum – units are produced where MC > MSB (the resource cost exceeds the social benefit); the excess production destroys net welfare',
          'The subsidy reduces government tax revenue, which has to be raised from distortionary taxes elsewhere',
          'The subsidy makes consumers dependent on government support, reducing their incentive to economise',
          'The subsidy always benefits producers more than consumers, creating an inequitable redistribution'
        ],
        ans: 0,
        exp: 'For a non-corrective subsidy (no externality), the pre-subsidy equilibrium was already at the social optimum. Pushing output beyond Q* means producing units where <strong>MC > MSB</strong> – resource cost exceeds social benefit. These extra units destroy net welfare – the DWL triangle between Q* and Q<sub>subsidy</sub>, bounded by supply and demand. The government spends more on the subsidy than the welfare gain to consumers and producers combined – a net welfare loss. Only corrective subsidies (matching positive externality) increase net welfare, because they are closing the gap between Q<sub>M</sub> and Q*.'
      },

      /* 4 – MCQ: subsidy for positive externality */
      { type: 'mcq',
        stem: 'A government subsidises electric vehicles to correct a <strong>positive externality of consumption</strong>. The optimal subsidy is set equal to:',
        opts: [
          'The marginal external benefit at the social optimum – the subsidy shifts demand up from MPB to MSB, moving the market from Q<sub>M</sub> to Q*',
          'The full market price – making EVs free to consumers to maximise adoption',
          'The producer\'s total cost – so EVs are provided at zero marginal cost to consumers',
          'The government\'s budget for transport subsidies – whatever is affordable'
        ],
        ans: 0,
        exp: 'For a positive externality of consumption, the optimal subsidy per unit = Marginal External Benefit (MEB) at Q*. This lifts the effective demand curve from MPB to MSB (social demand). The new market equilibrium occurs at Q* (where supply = MSB). The subsidy narrows and eliminates the DWL from underproduction. Setting it too high (more than MEB) overshoots Q* → creates new DWL on the other side. Setting it too low leaves underproduction. In practice, the UK government\'s £0–7,500 EV subsidy attempts to reflect the external benefits (reduced air pollution, lower carbon emissions) – though the exact MEB is debated.'
      },

      /* 5 – MCQ: agricultural subsidies */
      { type: 'mcq',
        stem: 'The EU\'s Common Agricultural Policy (CAP) has historically provided large subsidies to farmers. A key <strong>unintended consequence</strong> is:',
        opts: [
          'Overproduction of subsidised crops – subsidies shift supply rightward beyond the social optimum, creating "butter mountains" and "wine lakes" at significant taxpayer cost',
          'Underproduction – farmers reduce output when they receive government payments rather than market prices',
          'Rising food prices for European consumers – subsidies increase costs for farmers, raising prices',
          'Efficient resource allocation – agricultural subsidies ensure food security at the socially optimal level'
        ],
        ans: 0,
        exp: 'CAP subsidies shift agricultural supply rightward → excess supply at the guaranteed price → government must buy and store ("mountains" of butter, beef, cereals, "lakes" of wine and milk in the 1980s). This represents overproduction beyond the social optimum – a subsidy creating DWL. Additional unintended consequences: environmental degradation (intensive farming beyond optimal levels), distribution failure (70% of CAP went to the largest 20% of farms – large agribusinesses captured most benefits), trade distortions (EU food exports at below-world-cost prices harmed developing country farmers). CAP reform since 1992 has moved toward decoupled payments to reduce overproduction distortion.'
      },

      /* 6 – Cause & effect: subsidy chains */
      { type: 'cause_effect',
        stem: 'Match each subsidy scenario to its welfare effect.',
        pairs: [
          { cause: 'Subsidy on vaccines (strong positive externality)', effect: 'Consumption rises to social optimum; DWL eliminated; net welfare gain' },
          { cause: 'Subsidy on luxury cars (no externality)', effect: 'Overproduction past social optimum; DWL created; welfare loss' },
          { cause: 'Subsidy shared equally between elastic demand and inelastic supply', effect: 'Producers capture more of the benefit; market price falls slightly' },
          { cause: 'Subsidy on renewable energy to internalise carbon externality', effect: 'Renewable output rises toward social optimum; fossil fuel demand falls' },
          { cause: 'Government doubles agricultural subsidies to prevent farm closures', effect: 'Overproduction increases; storage costs rise; potential DWL and trade distortion' },
          { cause: 'Education subsidy correcting information failure and positive externality', effect: 'Enrolment rises toward social optimum; two market failures simultaneously corrected' }
        ],
        exp: 'The welfare effect of a subsidy depends entirely on context: <strong>corrective subsidy</strong> (externality or information failure present) → reduces DWL → net welfare gain; <strong>non-corrective subsidy</strong> → creates DWL → net welfare loss. The distribution of the subsidy between buyers and sellers depends on elasticities – inelastic side captures more. Agricultural subsidies are frequently cited as non-corrective (overproduction, distribution to large farms) despite political justifications of food security and rural stability.'
      },

      /* 7 – Match pairs: subsidy concepts */
      { type: 'match_pairs',
        stem: 'Match each concept to its definition.',
        pairs: [
          { a: 'Per-unit subsidy', b: 'Fixed payment per unit produced – shifts supply curve rightward by the subsidy amount' },
          { a: 'Consumer benefit from subsidy', b: 'Fall in market price from pre-subsidy equilibrium price' },
          { a: 'Producer benefit from subsidy', b: 'Rise in effective price received (market price + subsidy) above pre-subsidy price' },
          { a: 'Government cost', b: 'Subsidy per unit × equilibrium quantity after subsidy' },
          { a: 'DWL from non-corrective subsidy', b: 'Triangle of welfare destroyed by overproduction beyond social optimum' },
          { a: 'Corrective subsidy', b: 'Subsidy set equal to MEB – eliminates DWL from positive externality underproduction' }
        ],
        exp: 'Subsidy mechanics: the supply shift is rightward by the subsidy amount. The welfare split: CS gains (lower price), PS gains (higher effective price), government spends (subsidy × Q). For non-corrective subsidies: government spending > total CS + PS gain → net DWL. For corrective subsidies: government spending = value of externality corrected → net welfare improvement. In practice, most government subsidies serve political or distributional goals rather than pure externality correction – making net welfare assessment complex.'
      },

      /* 8 – Odd one out: types of subsidies */
      { type: 'odd_one_out',
        stem: 'Three of these subsidies are likely to <strong>improve net social welfare</strong> by correcting a market failure. Which is the <strong>odd one out</strong>?',
        items: [
          { icon: '💉', label: 'A subsidy on vaccines to increase uptake toward the herd immunity threshold', note: '' },
          { icon: '🌱', label: 'A subsidy on solar panel installation to reflect the positive externality of reduced carbon emissions', note: '' },
          { icon: '🚢', label: 'A subsidy to a national airline to protect it from foreign competition and preserve jobs', note: '' },
          { icon: '🎓', label: 'A subsidy on adult skills training to correct the positive externality of a more productive workforce', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is <strong>a subsidy to a national airline to protect it from foreign competition</strong>. This is a non-corrective subsidy – it protects incumbents from competition rather than correcting a market failure. It creates DWL by subsidising production that does not need to be at a higher level from a social welfare perspective. The other three are corrective subsidies: vaccines (positive externality – herd immunity); solar panels (positive externality – carbon reduction); adult skills training (positive externality – workforce productivity spillovers). Airline subsidies are a form of protectionism / industrial policy – may have political rationale but generally reduce global welfare.'
      },

      /* 9 – Data table: UK EV subsidy */
      { type: 'data_table',
        stem: 'The table shows UK electric vehicle (EV) market data alongside subsidy policy changes.',
        headers: ['Year', 'EV new sales (000)', 'EV subsidy (£ per car)', 'EV market share (%)', 'Avg EV price (£000)'],
        rows: [
          ['2012', '1.0', '5,000', '0.1%', '30'],
          ['2016', '37', '4,500', '1.4%', '28'],
          ['2020', '108', '3,000', '6.6%', '38'],
          ['2022', '267', '1,500', '16.6%', '46'],
          ['2023', '315', '0', '18.4%', '45']
        ],
        question: 'What does the data suggest about the EV subsidy and market development?',
        opts: [
          'The subsidy helped establish the EV market in early years; as the market matured and prices fell from technology improvements, the subsidy was progressively reduced and removed – consistent with an infant industry / market development rationale',
          'The withdrawal of subsidies in 2023 caused EV sales to collapse, proving that the market is not viable without ongoing support',
          'The data show EVs have negative externalities – the government should tax rather than subsidise them',
          'The rising price (£30k to £45k) proves subsidies were ineffective – they could not prevent EV prices from rising'
        ],
        ans: 0,
        exp: 'The data show EV sales rising from 1,000 to 315,000 as subsidies were progressively reduced (£5,000 to £0). Sales continued to grow even after subsidy withdrawal – suggesting the market reached viability independently. This is consistent with an infant industry / market creation subsidy rationale: early subsidies help a market overcome initial high costs and low consumer awareness; as scale grows and technology improves, the subsidy becomes less necessary. The average price rise (£30k to £45k) reflects a shift toward larger premium EVs, not subsidy failure. The market share rising from 0.1% to 18.4% indicates the subsidy helped establish a viable market.'
      },

      /* 10 – Multi-select: evaluation of government subsidies */
      { type: 'multi_select',
        stem: 'Which statements demonstrate genuine <strong>evaluation</strong> of government subsidies?',
        opts: [
          'Subsidies increase supply by reducing the effective cost of production',
          'Corrective subsidies for positive externalities improve allocative efficiency, but the net welfare gain depends on how accurately the government estimates the marginal external benefit – overestimation leads to overproduction and a new DWL, suggesting the precision of the correction matters as much as the decision to intervene',
          'Subsidies always benefit both producers and consumers',
          'Agricultural subsidies may be justified on food security grounds, but the empirical evidence that they primarily benefit large agribusiness rather than small farms – and that they distort global trade by underpricing EU exports – suggests that the distributional and trade policy costs of blanket production subsidies outweigh their food security benefits, and that targeted income support to farmers would be a more efficient instrument',
          'Subsidies shift the supply curve rightward',
          'The infant industry subsidy argument has surface plausibility but is undermined by the political economy of subsidy removal – industries that receive temporary support tend to lobby for its permanence, and governments face difficulty removing subsidies that create concentrated beneficiaries, suggesting that "temporary" rarely is'
        ],
        correct: [1, 3, 5],
        exp: '<strong>Options B, D, and F are genuine evaluation.</strong> B: qualifies the corrective subsidy argument by identifying the measurement problem – overestimation creates a new DWL. D: evaluates agricultural subsidies by identifying distributional failure (large farms) and trade distortions, concluding that a different instrument (income support) would be more efficient. F: identifies the political economy dynamic that makes infant industry subsidies self-perpetuating – a systematic bias in the policy process that qualifies the argument for temporary support. A, C, and E are descriptions without evaluative content.'
      }

    ]
  };

})();

