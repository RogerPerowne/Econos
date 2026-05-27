(function () {

  window.ECONOS_QUIZ = {
    id:       'market_failure_main',
    topicId:  'market_failure_main',
    title:    'Market Failure',
    subtitle: 'Theme 1 &middot; Topic 3.1 &middot; Edexcel A-Level',
    backUrl:  TopicLoader.routes.learn('market_failure_main'),
    backLabel: 'Back to Learn It',
    lede: '10 questions · ~8 minutes · covers types of market failure, externalities, public goods, information gaps, and deadweight loss',
    shortNames: [
      'Market failure definition', 'Types categorise', 'Negative externality MCQ', 'Public goods MCQ',
      'Information asymmetry', 'Deadweight loss MCQ', 'Match pairs', 'Cause & effect',
      'Odd one out', 'Data table'
    ],

    questions: [

      /* 1 – MCQ: market failure definition */
      { type: 'mcq',
        id: 'q_mf_1',
        stem: 'Which statement best defines <strong>market failure</strong>?',
        opts: [
          'A situation where the free market misallocates resources – failing to achieve allocative efficiency (P ≠ MSC) and producing at a socially suboptimal output level',
          'A situation where a business goes bankrupt and closes – failing to generate sufficient revenue to cover costs',
          'A situation where demand falls and prices drop below the equilibrium price, causing unsold stock',
          'A situation where government intervention prevents the market from reaching equilibrium'
        ],
        ans: 0,
        exp: '<strong>Market failure</strong> is the failure of the price mechanism to allocate resources efficiently from a social perspective. It occurs when private costs and benefits diverge from social costs and benefits, causing over- or under-production relative to the social optimum. Key types: externalities (costs/benefits not reflected in prices), public goods (non-excludable/non-rival), information asymmetry, and inequality. Market failure justifies potential government intervention – though intervention itself can fail.'
      },

      /* 2 – Categorise: types of market failure */
      { type: 'categorise',
        id: 'q_mf_2',
        stem: 'Sort each example into the correct type of market failure.',
        categories: ['Negative externality', 'Positive externality', 'Public good', 'Information gap'],
        items: [
          { text: 'A factory pollutes a river – costs borne by local residents not reflected in the product price', category: 'Negative externality' },
          { text: 'Street lighting – non-excludable and non-rival; no firm can profitably charge for it', category: 'Public good' },
          { text: 'Getting vaccinated reduces disease transmission to others not party to the transaction', category: 'Positive externality' },
          { text: 'Used car sellers know quality but buyers do not – adverse selection causes market collapse', category: 'Information gap' },
          { text: 'A motorist\'s exhaust fumes impose air pollution costs on pedestrians who paid nothing', category: 'Negative externality' },
          { text: 'Education creates skilled workers who benefit employers and society beyond the individual', category: 'Positive externality' }
        ],
        exp: '<strong>Negative externality</strong>: cost imposed on third parties → overproduction. <strong>Positive externality</strong>: benefit to third parties not rewarded → underproduction. <strong>Public good</strong>: non-excludable and non-rival → free-rider problem → market underprovides. <strong>Information gap</strong>: asymmetric information → adverse selection or moral hazard → wrong quantities or quality mix. Each type requires a different policy response.'
      },

      /* 3 – MCQ: negative externality and overproduction */
      { type: 'mcq',
        id: 'q_mf_3',
        stem: 'In a market with a <strong>negative externality of production</strong>, the free market equilibrium compared to the social optimum shows:',
        opts: [
          'Output is too high and price is too low – the private cost curve lies below the social cost curve; producers do not bear the external cost',
          'Output is too low and price is too high – external costs make production expensive and under-incentivised',
          'Output and price are both at the social optimum – externalities affect distribution but not efficiency',
          'Output is too high and price is too high – firms charge above marginal social cost to cover external costs'
        ],
        ans: 0,
        exp: 'With a negative externality of production: <strong>MSC > MPC</strong>. The market only reflects MPC, so the equilibrium price is too low and output too high. Consumers don\'t pay the full social cost – production continues beyond the social optimum (where MSC = MSB), creating a <strong>deadweight welfare loss</strong>. Policy response: Pigouvian tax equal to the marginal external cost, shifting MPC up to MSC, reducing output to the social optimum.'
      },

      /* 4 – MCQ: public goods */
      { type: 'mcq',
        id: 'q_mf_4',
        stem: 'Which combination of properties defines a <strong>pure public good</strong>?',
        opts: [
          'Non-excludable (cannot prevent non-payers from consuming) AND non-rival (one person\'s consumption does not reduce availability to others)',
          'Non-excludable AND rival (one person\'s consumption reduces availability to others)',
          'Excludable (can charge for access) AND non-rival',
          'Excludable AND rival – standard private goods that happen to be produced by the government'
        ],
        ans: 0,
        exp: '<strong>Non-excludability</strong>: impossible to prevent non-payers from benefiting → free-rider problem → rational to not pay. <strong>Non-rivalry</strong>: one person\'s consumption does not reduce others\' consumption → marginal cost of an extra user is zero. Together these cause market failure: no firm can profitably provide the good (cannot exclude free-riders), so the market fails to provide it. Government must provide from general taxation. Examples: national defence, flood defences, street lighting, public fireworks.'
      },

      /* 5 – MCQ: information asymmetry */
      { type: 'mcq',
        id: 'q_mf_5',
        stem: 'Akerlof\'s "Market for Lemons" model shows that information asymmetry in used car markets can cause:',
        opts: [
          'Market collapse through adverse selection – buyers cannot distinguish good from bad cars, offer average price; sellers of good cars exit; only "lemons" remain',
          'Higher prices overall – since buyers cannot assess quality, they assume all cars are high quality and overpay',
          'Perfect market outcomes – buyers and sellers negotiate until information is fully revealed',
          'A positive externality – one buyer\'s experience informs others, increasing market information over time'
        ],
        ans: 0,
        exp: 'Akerlof (1970): sellers know car quality; buyers don\'t. Buyers offer an average price reflecting their uncertainty. This average is too low for sellers of good cars → good sellers exit → market contains more lemons → buyers\' offer falls further → potential market collapse. This is <strong>adverse selection</strong>: information asymmetry systematically selects for the worse option. Policy responses: warranties (quality signals), car history reports, consumer protection law, third-party inspections.'
      },

      /* 6 – MCQ: deadweight loss */
      { type: 'mcq',
        id: 'q_mf_6',
        stem: 'The <strong>deadweight welfare loss</strong> from a negative externality represents:',
        opts: [
          'The net welfare cost of overproduction – social costs that exceed social benefits in the units produced beyond the social optimum',
          'The total profit earned by firms that impose negative externalities on third parties',
          'The total tax revenue collected by the government from Pigouvian taxes on polluters',
          'The cost to firms of complying with environmental regulations'
        ],
        ans: 0,
        exp: 'Deadweight welfare loss (DWL) is the triangle between market equilibrium and social optimum. For a negative externality: each unit beyond the social optimum has MSC > MSB – social cost exceeds social benefit. The DWL is the sum of these net losses. A Pigouvian tax equal to the marginal external cost eliminates the DWL by making producers face the full social cost. DWL also arises from monopoly, taxes (if not correcting externalities), and price controls.'
      },

      /* 7 – Match pairs: market failure concepts */
      { type: 'match_pairs',
        id: 'q_mf_7',
        stem: 'Match each concept to its definition or example.',
        pairs: [
          { a: 'External cost', b: 'Cost imposed on third parties not reflected in market price' },
          { a: 'External benefit', b: 'Benefit to third parties not captured in the market price' },
          { a: 'Free-rider problem', b: 'Rational agents consume without paying – prevents profitable private provision' },
          { a: 'Moral hazard', b: 'Party changes behaviour after gaining protection (e.g. more risk once insured)' },
          { a: 'Adverse selection', b: 'Information gap causes market to select for worse-quality participants' },
          { a: 'Pigouvian tax', b: 'Tax equal to marginal external cost – corrects overproduction from negative externality' }
        ],
        exp: 'Market failure vocabulary is highly examinable: <strong>external cost/benefit</strong> – divergence between private and social; <strong>free-rider</strong> – public good mechanism; <strong>moral hazard</strong> – post-contract information asymmetry (insurance); <strong>adverse selection</strong> – pre-contract information asymmetry (used cars, insurance pools); <strong>Pigouvian tax</strong> – named after A.C. Pigou, equal to marginal external cost. Using these terms precisely earns AO1 marks.'
      },

      /* 8 – Cause & effect: externalities */
      { type: 'cause_effect',
        id: 'q_mf_8',
        stem: 'Match each scenario to the market failure mechanism it illustrates.',
        pairs: [
          { cause: 'A steel mill dumps waste in a river; fishing communities suffer losses', effect: 'Negative production externality – MPC < MSC; overproduction of steel' },
          { cause: 'A homeowner beautifies their garden; neighbours\' property values rise', effect: 'Positive consumption externality – MPB < MSB; underinvestment in gardens' },
          { cause: 'Citizens plan to watch national fireworks without paying', effect: 'Public good free-rider problem – market cannot profitably provide' },
          { cause: 'People with pre-existing conditions disproportionately buy health insurance', effect: 'Adverse selection – insurer cannot distinguish risk types; pool becomes high-risk' },
          { cause: 'A driver insured for all risks drives more recklessly than before', effect: 'Moral hazard – full insurance removes incentive for careful driving' },
          { cause: 'Workers underestimate health risks of smoking and overconsume', effect: 'Information failure – rational behaviour based on incorrect beliefs' }
        ],
        exp: 'Each failure maps to a distinct policy response: <strong>negative externality</strong> → Pigouvian tax; <strong>positive externality</strong> → subsidy; <strong>public good</strong> → direct government provision; <strong>adverse selection</strong> → compulsory insurance, disclosure; <strong>moral hazard</strong> → co-payments, deductibles; <strong>information failure</strong> → education, labelling. Identifying the type of failure correctly is essential for choosing the right policy instrument.'
      },

      /* 9 – Odd one out: public goods */
      { type: 'odd_one_out',
        id: 'q_mf_9',
        stem: 'Three of these are <strong>pure public goods</strong>. Which is the <strong>odd one out</strong>?',
        items: [
          { icon: '🛡️', label: 'National defence – protects all citizens simultaneously; non-payers cannot be excluded', note: '' },
          { icon: '🌊', label: 'Flood defences for a coastal town – non-rival and non-excludable benefit', note: '' },
          { icon: '🎠', label: 'A theme park – can charge admission and exclude non-payers', note: '' },
          { icon: '💡', label: 'Street lighting in a public area – non-rival and non-excludable', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is a <strong>theme park</strong>. It is both <strong>excludable</strong> (fences and ticketing prevent non-payers from entering) and <strong>rival</strong> (at capacity, additional visitors cause congestion). It is therefore a <strong>private good</strong> – the market can provide it profitably. National defence, flood defences, and street lighting are all non-excludable (cannot charge non-beneficiaries) and non-rival (one person\'s benefit does not reduce others\') – the defining properties of a pure public good.'
      },

      /* 10 – Data table: pollution and social optimum */
      { type: 'data_table',
        id: 'q_mf_10',
        stem: 'The table shows marginal costs and benefits of steel production with a negative externality.',
        headers: ['Output (000 tonnes)', 'Marginal Private Cost (£)', 'Marginal External Cost (£)', 'Marginal Social Benefit (£)'],
        rows: [
          ['1', '50', '20', '90'],
          ['2', '60', '20', '80'],
          ['3', '70', '20', '70'],
          ['4', '80', '20', '60'],
          ['5', '90', '20', '50']
        ],
        question: 'What is the <strong>socially optimal output</strong> and at what output does the <strong>free market settle</strong>?',
        opts: [
          'Social optimum: 3,000 tonnes (MSC = MSB = £90). Free market: 4,000 tonnes (MPC = MSB = £80). Overproduction of 1,000 tonnes creates deadweight loss',
          'Social optimum is 4,000 tonnes – this is where the market and social optimum coincide',
          'Social optimum cannot be determined without knowing total demand, not just marginal benefit',
          'Social optimum is 2,000 tonnes – the government should aim for minimum pollution'
        ],
        ans: 0,
        exp: 'Social optimum: MSC = MSB. MSC = MPC + MEC. At 3,000: MSC = £70 + £20 = £90 = MSB ✓. Free market: MPC = MSB → at 4,000 (£80 = £80). The free market overproduces by 1,000 units. A Pigouvian tax of £20/tonne (= MEC) would shift MPC up to MSC, reducing output from 4,000 to 3,000 tonnes and eliminating the deadweight welfare loss. This illustrates why Pigouvian taxes are set equal to the marginal external cost, not to eliminate all output.'
      }

    ]
  };

})();
