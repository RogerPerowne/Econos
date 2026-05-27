(function () {

  window.ECONOS_QUIZ = {
    title:    'Public Goods',
    subtitle: 'Theme 1 &middot; Topic 3.3 &middot; Edexcel A-Level',
    backUrl:  TopicLoader.routes.learn('public_goods_main'),
    backLabel: 'Back to Learn It',
    lede: '10 questions · ~8 minutes · covers the non-excludability and non-rivalry properties, the free-rider problem, and quasi-public goods',
    shortNames: [
      'Definition MCQ', 'Classify goods', 'Free-rider problem', 'Quasi-public goods',
      'Sequence', 'Match pairs', 'Cause & effect', 'Odd one out',
      'Data table', 'Evaluation multi-select'
    ],

    questions: [

      /* 1 – MCQ: pure public good definition */
      { type: 'mcq',
        stem: 'Which combination of properties defines a <strong>pure public good</strong>?',
        opts: [
          'Non-excludable (impossible to prevent non-payers from consuming) AND non-rival (one person\'s consumption does not reduce availability to others)',
          'Non-excludable AND rival (one person\'s use reduces availability to others)',
          'Excludable AND non-rival (can charge, but consumption doesn\'t reduce others\' access)',
          'Excludable AND rival – all goods produced by the government are public goods'
        ],
        ans: 0,
        exp: '<strong>Non-excludability</strong>: technically impossible or prohibitively costly to prevent non-payers from benefiting → creates the free-rider problem. <strong>Non-rivalry</strong>: one person\'s consumption does not reduce the quantity or quality available to others → marginal cost of providing to one more person is zero. Together these make profitable private provision impossible: consumers free-ride rather than pay, so no revenue is collected, and private firms cannot supply the good. Government must provide from taxation. Examples: national defence, flood defences, public fireworks, public broadcast signals.'
      },

      /* 2 – Categorise: types of goods */
      { type: 'categorise',
        stem: 'Sort each good into the correct category based on excludability and rivalry.',
        categories: ['Pure public good', 'Pure private good', 'Club good', 'Common resource'],
        items: [
          { text: 'National defence – non-excludable, non-rival', category: 'Pure public good' },
          { text: 'A sandwich – excludable, rival', category: 'Pure private good' },
          { text: 'Netflix subscription – excludable (password), non-rival (one more viewer costs nothing)', category: 'Club good' },
          { text: 'Fish in an open ocean – non-excludable, rival (overfishing depletes stock)', category: 'Common resource' },
          { text: 'A toll motorway – excludable (toll booth), rival (congestion occurs)', category: 'Pure private good' },
          { text: 'A lighthouse warning signal – non-excludable, non-rival', category: 'Pure public good' }
        ],
        exp: 'The 2×2 goods classification: <strong>Pure public</strong>: non-excludable + non-rival → free-rider problem → government must provide. <strong>Pure private</strong>: excludable + rival → markets work well. <strong>Club goods</strong>: excludable + non-rival → profitable private provision possible (streaming, golf clubs, cable TV). <strong>Common resources</strong>: non-excludable + rival → "tragedy of the commons" – overuse without property rights. Toll roads are private when uncongested (non-rival) but become common resources at capacity. Classification can change with technology (encryption made TV excludable).'
      },

      /* 3 – MCQ: free-rider problem */
      { type: 'mcq',
        stem: 'The <strong>free-rider problem</strong> arises because of:',
        opts: [
          'Non-excludability – rational consumers know they can benefit from the good without paying, so they do not reveal their true willingness to pay',
          'Non-rivalry – since consuming the good does not reduce others\' consumption, there is no incentive to pay for it',
          'Government ownership – public provision removes the profit motive and reduces the incentive to produce',
          'Scarcity – public goods are too rare for everyone to benefit, so free-riding only benefits the first users'
        ],
        ans: 0,
        exp: 'The free-rider problem stems from <strong>non-excludability</strong>: if you cannot be excluded from a good for not paying, rational self-interest says "don\'t pay – consume for free." Since everyone reasons this way, no revenue is collected → private market cannot provide the good → market failure. Non-rivalry means the free-rider\'s consumption doesn\'t harm others (no rivalry loss), reinforcing the incentive to free-ride. Together they make public goods unprofitable to provide privately – the fundamental argument for government provision and public finance through taxation.'
      },

      /* 4 – MCQ: quasi-public goods */
      { type: 'mcq',
        stem: 'A busy motorway at peak hours could be described as a <strong>quasi-public good</strong>. Why?',
        opts: [
          'The road is non-excludable (free to use without a toll) but becomes rival at capacity – congestion means additional users reduce the quality of service for existing users',
          'The road is excludable (toll booths) and non-rival – once built, one more car does not reduce others\' ability to travel',
          'The road is a pure public good at all times – non-excludable and non-rival regardless of traffic levels',
          'The road is a pure private good – firms could profitably provide all roads without government subsidy'
        ],
        ans: 0,
        exp: 'Quasi-public goods (or impure public goods) have characteristics of both public and private goods depending on context. A road without tolls is <strong>non-excludable</strong> (anyone can use it). When uncongested, it is also <strong>non-rival</strong> → pure public good characteristics. But at peak hours, it becomes <strong>rival</strong> – additional cars cause congestion, reducing journey quality and speed for existing users → the road gains private good characteristics. This is why congestion charging (making roads excludable through pricing) is a potential policy solution – converting a quasi-public good into a club good during peak periods.'
      },

      /* 5 – Sequence: free-rider problem to government provision */
      { type: 'sequence',
        stem: 'Place the steps in the correct order showing how the <strong>free-rider problem leads to market failure</strong> for a pure public good.',
        instr: 'Tap the steps in the correct order, from first to last.',
        items: [
          { label: 'A pure public good is non-excludable – no one can be prevented from benefiting', note: '' },
          { label: 'Rational consumers choose not to pay – they can consume the good for free if others pay', note: '' },
          { label: 'Firms cannot collect revenue – consumers do not reveal their willingness to pay', note: '' },
          { label: 'Private provision is unprofitable – no firm will supply the good commercially', note: '' },
          { label: 'Market failure results – the socially beneficial good is not produced at all', note: '' },
          { label: 'Government must provide the good, funded by compulsory taxation', note: '' }
        ],
        correctOrder: [0, 1, 2, 3, 4, 5],
        exp: 'The free-rider chain: non-excludability → rational self-interest to free-ride → consumers don\'t reveal WTP → no revenue → unprofitable provision → market failure (zero provision) → government must provide via compulsory taxation. Taxation is the only mechanism that overcomes the free-rider problem: it is compulsory, so everyone contributes regardless of whether they individually value the good. The government then acts as the "revealed preference aggregator" – making collective provision decisions on behalf of society.'
      },

      /* 6 – Match pairs: public good concepts */
      { type: 'match_pairs',
        stem: 'Match each concept to its definition.',
        pairs: [
          { a: 'Non-excludability', b: 'Cannot prevent non-payers from consuming the good' },
          { a: 'Non-rivalry', b: 'One person\'s consumption does not reduce availability to others' },
          { a: 'Free-rider', b: 'Person who benefits from a public good without paying for it' },
          { a: 'Quasi-public good', b: 'Good that is non-excludable but becomes rival at high usage' },
          { a: 'Club good', b: 'Good that is excludable but non-rival – e.g. streaming services' },
          { a: 'Tragedy of the commons', b: 'Overuse of a common resource because non-excludable but rival – leads to depletion' }
        ],
        exp: 'Public good concepts: <strong>non-excludability</strong> causes the free-rider problem; <strong>non-rivalry</strong> means the marginal cost of serving one more user is zero; <strong>free-rider</strong> is the individual whose rational behaviour causes collective market failure; <strong>quasi-public good</strong> adds congestion – becomes rival at capacity; <strong>club good</strong> is excludable+non-rival – markets can provide profitably; <strong>tragedy of the commons</strong> applies to common resources (non-excludable+rival) – overfishing, overgrazing, traffic congestion without pricing.'
      },

      /* 7 – Cause & effect: non-excludability consequences */
      { type: 'cause_effect',
        stem: 'Match each public good characteristic to its economic consequence.',
        pairs: [
          { cause: 'National defence is non-excludable', effect: 'All citizens are protected whether or not they pay taxes – free-riding is inevitable' },
          { cause: 'Lighthouse signal is non-rival', effect: 'Marginal cost of warning one more ship is zero – exclusion would be allocatively inefficient' },
          { cause: 'Open-access fishery is non-excludable but rival', effect: 'Overfishing leads to stock depletion – tragedy of the commons' },
          { cause: 'Netflix encrypts its content', effect: 'Transforms a non-rival good into a club good – enables private profitable provision' },
          { cause: 'Flood defences protect an entire area', effect: 'Costs are non-rivalrously shared – government provision is efficient; charging is impractical' },
          { cause: 'Congestion pricing introduced on London roads', effect: 'Converts a quasi-public good into an excludable good – reduces free-riding and congestion' }
        ],
        exp: 'Non-excludability and non-rivalry have distinct but related consequences. Non-excludability → free-rider problem → private underprovision → government provision needed. Non-rivalry → zero marginal cost of additional users → exclusion is allocatively inefficient (users who value the good at above zero but below the price are excluded from beneficial consumption). Technology can change the classification: encryption makes digital goods excludable → enables market provision. Pricing (tolls, congestion charges) can make non-excludable goods excludable → reduces overuse.'
      },

      /* 8 – Odd one out: pure public goods */
      { type: 'odd_one_out',
        stem: 'Three of these are <strong>pure public goods</strong>. Which is the <strong>odd one out</strong>?',
        items: [
          { icon: '🛡️', label: 'National defence – protection covers all citizens; non-payers cannot be excluded', note: '' },
          { icon: '🎆', label: 'A public fireworks display – everyone in the area can watch; watching doesn\'t reduce others\' view', note: '' },
          { icon: '🏟️', label: 'A football stadium – seating is limited (rival) and tickets exclude non-payers (excludable)', note: '' },
          { icon: '🌊', label: 'Flood defences for a coastal community – all residents benefit; benefit is non-rival', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is a <strong>football stadium</strong>. It is both <strong>excludable</strong> (ticketing and gates prevent non-payers) and <strong>rival</strong> (limited seating means one more spectator displaces another at capacity). It is therefore a pure <strong>private good</strong> – and the market provides football stadiums profitably. National defence, public fireworks, and flood defences are all non-excludable (cannot exclude non-contributors) and non-rival (one person\'s benefit doesn\'t reduce others\') – the defining properties of pure public goods.'
      },

      /* 9 – Data table: UK public goods provision */
      { type: 'data_table',
        stem: 'The table shows public goods provision data for the UK.',
        headers: ['Public good', 'Annual government spending (£bn)', 'Private sector could provide?', 'Free-rider severity'],
        rows: [
          ['National defence', '57', 'No – non-excludable', 'Very high'],
          ['BBC World Service', '0.3', 'Partially – some broadcasting is excludable', 'High'],
          ['Street lighting (local)', '0.5 est.', 'No – non-excludable in practice', 'High'],
          ['Flood defences', '1.2', 'No – protects all in area', 'Very high'],
          ['Road network (non-toll)', '8.0', 'With tolls – but impractical on all roads', 'Moderate']
        ],
        question: 'Which conclusion about public good provision is <strong>best supported</strong> by the data?',
        opts: [
          'Government provision is necessary for goods with high free-rider severity – these are cases where non-excludability makes private provision unviable without compulsory taxation',
          'All the goods shown would be better provided by the private sector – government provision crowds out more efficient private alternatives',
          'The BBC World Service should be privatised immediately – partial excludability through encryption means the free-rider problem can be solved without public funding',
          'Road spending at £8bn shows government over-invests in quasi-public goods – tolling all roads would eliminate the need for public spending'
        ],
        ans: 0,
        exp: 'The data support government provision for goods with very high free-rider severity (defence, flood defences, street lighting) – these are genuinely non-excludable and non-rival, making private provision unviable. The road network is a quasi-public good – partial tolling exists on motorways, but not practical for all roads. The BBC World Service has partial excludability through broadcasting but serves as a public good globally (non-excludable to foreign audiences). Option B overclaims. Option C ignores the global non-excludability of broadcast signals. Option D ignores the practical costs of universal tolling.'
      },

      /* 10 – Multi-select: evaluation of public good theory */
      { type: 'multi_select',
        stem: 'Which statements demonstrate genuine <strong>evaluation</strong> of public good theory and government provision?',
        opts: [
          'Pure public goods are non-excludable and non-rival – the free-rider problem makes private provision impossible',
          'While pure public good theory provides a strong case for government provision, the binary classification (public/private) is increasingly challenged by technology: digital goods were once non-excludable (copied freely), but encryption and digital rights management have made many excludable – potentially reversing the case for government provision in areas like broadcasting',
          'The government provides national defence because it is a public good',
          'The government\'s information advantage does not solve the free-rider problem – it creates a different one: government must estimate the public\'s willingness to pay for public goods without market price signals, risking under- or over-provision based on political, rather than efficiency, criteria',
          'Public goods should always be provided free at the point of use',
          'The tragedy of the commons shows that extending the public good framework to common resources (non-excludable + rival) requires a different solution – property rights or quotas rather than simply "government provision" – suggesting that different failure mechanisms warrant different instruments'
        ],
        correct: [1, 3, 5],
        exp: '<strong>Options B, D, and F are genuine evaluation.</strong> B: shows how the classification itself is contingent on technology – encryption changed the public good status of digital content, qualifying the case for government broadcasting. D: identifies a second-order failure in government provision of public goods – the absence of price signals creates a different information problem for planners, not just a solution to the free-rider problem. F: distinguishes common resource failures from pure public good failures and concludes that different instruments are warranted – showing analytical sophistication about the scope of the framework. A and E are descriptions; C is description without qualification.'
      }

    ]
  };

})();
