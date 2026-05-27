(function () {

  window.ECONOS_QUIZ = {
    id:       'govt_intervention_subsidies_main',
    topicId:  'govt_intervention_subsidies_main',
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
        id: 'q_gisub_1',
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
        id: 'q_gisub_2',
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
        id: 'q_gisub_3',
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
        id: 'q_gisub_4',
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
        id: 'q_gisub_5',
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
        id: 'q_gisub_6',
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
        id: 'q_gisub_7',
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
        id: 'q_gisub_8',
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
        id: 'q_gisub_9',
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
        id: 'q_gisub_10',
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
