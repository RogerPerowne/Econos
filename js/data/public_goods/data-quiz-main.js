(function () {

  window.ECONOS_QUIZ = {
    id:       'public_goods_main',
    topicId:  'public_goods_main',
    title:    'Public Goods',
    subtitle: 'Theme 1.14 · Edexcel A-Level',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-style questions covering non-rivalry, non-excludability, the free rider problem, quasi-public and club goods, government provision, and the preference revelation problem. Mixed question types testing classification, analysis, and the ability to evaluate real-world examples from defence, roads, and digital infrastructure.',
    shortNames: {
      'public_goods_1': 'Defining public goods',
      'public_goods_2': 'Free rider problem',
      'public_goods_3': 'Examples of public goods',
      'public_goods_4': 'Public vs quasi-public goods',
      'public_goods_5': 'Why markets fail',
      'public_goods_6': 'Government solutions',
      'public_goods_7': 'Policy debate'
    },

    questions: [

      /* 1 — MCQ: public good definition */
      { type: 'mcq',
        stem: 'Which of the following statements gives the most precise economic definition of a <strong>pure public good</strong>?',
        opts: [
          'A good that is both non-rival in consumption (one person\'s use does not reduce availability to others) and non-excludable (impossible to prevent non-payers from benefiting)',
          'Any good provided by the government or funded through general taxation, regardless of its characteristics in the marketplace',
          'A good that is free at the point of use, such as the NHS or state education, because society judges that everyone should have access',
          'A good with very strong positive externalities that generates spillover benefits for third parties beyond the direct consumer'
        ],
        ans: 0,
        exp: 'A <strong>pure public good</strong> must satisfy two conditions simultaneously: (1) <strong>non-rival</strong> &#8212; one person\'s consumption does not diminish the amount available for anyone else (marginal cost of providing to an additional consumer is zero); and (2) <strong>non-excludable</strong> &#8212; once provided, it is impossible or prohibitively expensive to prevent non-payers from enjoying the good. Both conditions are necessary. Option B is a common exam error: government provision does not make a good a public good (the NHS is not a public good &#8212; a doctor\'s time is rival and patients could in principle be excluded). Option D describes a positive externality good (merit good), not a public good. The distinction is examinable and critical.'
      },

      /* 2 — elastic_sort: classify goods */
      { type: 'elastic_sort',
        stem: 'Classify each good as a <strong>pure public good</strong>, <strong>quasi-public (club) good</strong>, or <strong>private good</strong>.',
        categories: ['pure_public', 'quasi_public', 'private'],
        categoryLabels: ['Pure public good', 'Quasi-public (club) good', 'Private good'],
        goods: [
          { icon: '&#128081;', label: 'National defence protecting all UK residents simultaneously', note: '', ans: 'pure_public' },
          { icon: '&#127968;', label: 'A house &#8212; rival (owner-occupied) and excludable (you can lock the door)', note: '', ans: 'private' },
          { icon: '&#127966;', label: 'An uncrowded motorway &#8212; non-rival until congested; technically excludable by toll', note: '', ans: 'quasi_public' },
          { icon: '&#127754;', label: 'Flood defences along a river &#8212; all nearby residents protected simultaneously', note: '', ans: 'pure_public' },
          { icon: '&#128249;', label: 'A Netflix subscription &#8212; non-rival (one viewer doesn\'t reduce others\') but excludable (password required)', note: '', ans: 'quasi_public' },
          { icon: '&#127829;', label: 'A pizza &#8212; rival (eaten by one person) and excludable (restaurant can charge)', note: '', ans: 'private' }
        ],
        exp: '<strong>Pure public goods</strong>: defence and flood defences satisfy both non-rivalry (protecting one resident doesn\'t reduce protection for others) and non-excludability (impossible to defend some taxpayers and not others). <strong>Quasi-public (club) goods</strong>: motorways (non-rival when uncongested, but congestion can make them rival; tolls technically possible &#8212; excludable) and Netflix (non-rival as streaming doesn\'t reduce quality for others, but excludable via subscription). <strong>Private goods</strong>: houses and pizzas are both rival and excludable &#8212; classic private goods allocated efficiently by the price mechanism. The key is applying both criteria carefully &#8212; not just one.'
      },

      /* 3 — para_fill: free rider problem */
      { type: 'para_fill',
        stem: 'Complete the paragraph explaining the free rider problem.',
        anchor: 'The free rider problem explains why public goods cannot be provided by markets.',
        para: 'Because public goods are [1], individuals cannot be prevented from benefiting even if they do not pay. This creates an incentive to [2] &#8212; to benefit without contributing. If everyone reasons this way, no one [3], and the good is not provided at all. This is a form of the [4] dilemma &#8212; where individual rationality leads to [5] irrationality. The only solution is [6] provision funded by compulsory [7], which bypasses the free rider problem by forcing everyone to contribute.',
        blanks: [
          { id: 1, opts: ['non-excludable', 'non-rival', 'positive', 'complementary'], ans: 0 },
          { id: 2, opts: ['free ride', 'overproduce', 'invest', 'compete'], ans: 0 },
          { id: 3, opts: ['contributes', 'benefits', 'consumes', 'invests'], ans: 0 },
          { id: 4, opts: ['prisoner\'s', 'commons', 'market', 'public'], ans: 0 },
          { id: 5, opts: ['collective', 'individual', 'government', 'market'], ans: 0 },
          { id: 6, opts: ['government', 'market', 'private', 'charitable'], ans: 0 },
          { id: 7, opts: ['taxation', 'borrowing', 'pricing', 'rationing'], ans: 0 }
        ],
        exp: '(1) <strong>Non-excludable</strong>: the inability to exclude non-payers is the direct cause of the free rider problem &#8212; non-rivalry alone would not create the free rider incentive. (2) <strong>Free ride</strong>: benefit without contributing to the cost. (3) <strong>Contributes</strong>: if everyone free rides, no revenue is raised and no firm will supply. (4) <strong>Prisoner\'s</strong> dilemma: individually rational (don\'t pay) leads to collectively irrational (no public good). (5) <strong>Collective</strong>: the collective outcome is worse for all &#8212; everyone would prefer the good to be provided, but individual incentives prevent it. (6) <strong>Government</strong>: only compulsory provision overcomes the free rider problem. (7) <strong>Taxation</strong>: compulsory &#8212; the coercive element is essential because voluntary payment suffers from free riding.'
      },

      /* 4 — multi_select: pure public goods */
      { type: 'multi_select',
        stem: 'Which of the following are <strong>pure public goods</strong> (both non-rival AND non-excludable)?',
        opts: [
          'A lighthouse beam warning all ships in the area simultaneously',
          'A state school &#8212; provided free but each pupil takes up a place that another cannot',
          'Street lighting on a public road &#8212; difficult to exclude residents; one person\'s use does not reduce illumination for others',
          'A fireworks display that can be seen by anyone within range',
          'Clean air in an urban environment, assuming no one can be excluded from breathing it',
          'A toll bridge &#8212; excludable via the toll booth; congested at peak times'
        ],
        correct: [0, 2, 3, 4],
        exp: 'Pure public goods: (A) <strong>Lighthouse</strong>: non-rival (beam doesn\'t "use up") and non-excludable (all ships in range benefit &#8212; Samuelson\'s classic example). (C) <strong>Street lighting</strong>: non-rival (one person walking under it doesn\'t dim it for others) and non-excludable on a public road. (D) <strong>Public fireworks</strong>: non-rival (watching doesn\'t stop others watching) and non-excludable (impossible to charge all viewers, especially at outdoor displays). (E) <strong>Clean air</strong>: non-rival (breathing doesn\'t reduce it for others in normal conditions) and non-excludable (cannot prevent non-payers from breathing). <strong>Not pure public goods</strong>: (B) State school &#8212; <em>rival</em> (a place taken by one pupil cannot be taken by another; class size is finite); (F) Toll bridge &#8212; <em>excludable</em> (toll booth prevents non-payers) and potentially rival (congestion at peak times).'
      },

      /* 5 — diagram_interp: vertical demand summation */
      { type: 'diagram_interp',
        stem: 'For a public good, three individuals (A, B, C) have the following willingness to pay for flood defences at different levels of protection: A = &#163;200, B = &#163;150, C = &#163;100. The marginal cost of flood protection is &#163;400.',
        svg: '<svg viewBox="0 0 420 280" xmlns="http://www.w3.org/2000/svg" style="font-family:Inter,sans-serif"><line x1="55" y1="20" x2="55" y2="260" stroke="#0B1426" stroke-width="2"/><line x1="55" y1="260" x2="400" y2="260" stroke="#0B1426" stroke-width="2"/><text x="42" y="22" fill="#0B1426" font-size="12" text-anchor="end" font-weight="700">WTP (&#163;)</text><text x="398" y="278" fill="#0B1426" font-size="12" font-weight="700">Q</text><line x1="80" y1="80" x2="80" y2="260" stroke="#2563EB" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="80" y1="80" x2="120" y2="80" stroke="#2563EB" stroke-width="2"/><text x="55" y="80" fill="#2563EB" font-size="11" text-anchor="end" font-weight="700">&#163;200</text><line x1="80" y1="130" x2="120" y2="130" stroke="#1FB574" stroke-width="2"/><text x="55" y="130" fill="#1FB574" font-size="11" text-anchor="end" font-weight="700">&#163;150</text><line x1="80" y1="170" x2="120" y2="170" stroke="#EC2D68" stroke-width="2"/><text x="55" y="170" fill="#EC2D68" font-size="11" text-anchor="end" font-weight="700">&#163;100</text><line x1="80" y1="30" x2="120" y2="30" stroke="#F5B800" stroke-width="2.5"/><text x="55" y="30" fill="#F5B800" font-size="11" text-anchor="end" font-weight="700">&#163;450</text><line x1="55" y1="50" x2="400" y2="50" stroke="#0B1426" stroke-width="1.5" stroke-dasharray="6,3"/><text x="405" y="54" fill="#0B1426" font-size="11" font-weight="700">MC=&#163;400</text></svg>',
        caption: 'Individual WTP: A = &#163;200 (blue), B = &#163;150 (green), C = &#163;100 (red). Vertical sum = &#163;450 (amber). MC = &#163;400 (dashed line).',
        question: 'Using vertical demand summation, should flood defences be provided? Why is this method used rather than horizontal summation?',
        opts: [
          'Yes, flood defences should be provided: the vertical sum of WTP (&#163;450) exceeds MC (&#163;400). Vertical summation is used because all three individuals consume the same unit of the public good simultaneously &#8212; unlike private goods where each unit is consumed by one person',
          'No, flood defences should not be provided: no individual\'s WTP (max &#163;200) covers the MC (&#163;400), so no market transaction is possible',
          'The provision decision depends on horizontal summation of demand: if three units of flood protection are demanded at &#163;400 or more, provision is justified',
          'Vertical summation is only used for private goods; public goods require comparing MC with the highest individual WTP'
        ],
        ans: 0,
        exp: 'For public goods, we use <strong>vertical summation</strong>: because all individuals simultaneously consume the same unit, their willingness to pay is <em>added together</em> to find total social value. A + B + C = &#163;200 + &#163;150 + &#163;100 = <strong>&#163;450</strong>. Since &#163;450 &gt; MC (&#163;400), it is socially efficient to provide flood defences &#8212; total social value exceeds cost. <strong>Horizontal summation</strong> is used for private goods because each unit is consumed by one person &#8212; we ask how many units total are demanded at each price. For a public good, there is only one "unit" (one level of flood protection) consumed by everyone; so we ask how much in total they would pay for it. Option B shows why the market fails: no individual has WTP &gt; &#163;400, so no private firm can cover costs &#8212; yet the good should be provided because aggregate value exceeds cost.'
      },

      /* 6 — odd_one_out: free rider illustrations */
      { type: 'odd_one_out',
        stem: 'Three of these scenarios illustrate the <strong>free rider problem</strong>. Which is the ODD ONE OUT?',
        items: [
          { icon: '&#127981;', label: 'A firm benefits from the national road network without contributing to its cost through road tax', note: '' },
          { icon: '&#128293;', label: 'A household benefits from the local fire service that would attend a fire at their house even if they refused to pay council tax', note: '' },
          { icon: '&#127869;', label: 'A customer at a restaurant eats a meal and refuses to pay the bill after eating', note: '' },
          { icon: '&#127972;', label: 'Countries with no climate commitments benefit from CO&#178; reductions made by countries that have signed the Paris Agreement', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is the <strong>restaurant customer who refuses to pay</strong>. This is not a free rider problem in the economic sense &#8212; it is theft or breach of contract. A restaurant meal is a <em>private good</em> (rival and excludable). The restaurant could refuse to serve customers who don\'t pay in advance, and once consumed, one person\'s meal is unavailable to others. The free rider problem specifically arises with <em>non-excludable</em> goods: the firm benefiting from roads without paying (excludability is imperfect); households benefiting from fire services regardless of council tax payment; and countries free-riding on others\' climate action (no country can be excluded from a stable global climate). These three illustrate the public goods problem; the restaurant example illustrates contract enforcement.'
      },

      /* 7 — data_table: government provision efficiency */
      { type: 'data_table',
        stem: 'The table shows government defence spending and security outcomes for selected countries.',
        headers: ['Country', 'Defence spending (% GDP)', 'Population (millions)', 'Cost per citizen (&#163;)', 'Security index (0&#8211;100)'],
        rows: [
          ['UK', '2.3%', '67', '640', '78'],
          ['Germany', '1.8%', '84', '490', '82'],
          ['France', '2.1%', '68', '590', '76'],
          ['Netherlands', '1.7%', '18', '610', '88'],
          ['Poland', '3.9%', '38', '590', '70']
        ],
        question: 'Which observation is most consistent with defence being a public good?',
        opts: [
          'All citizens within each country receive protection simultaneously regardless of individual contribution &#8212; consistent with non-rivalry and non-excludability; no country can charge individual citizens on a usage basis',
          'Countries spending more on defence always achieve higher security scores &#8212; showing a direct market relationship between spending and output',
          'Defence spending per citizen varies between countries, showing that the good is rival &#8212; Germany\'s lower spending means fewer citizens can be protected',
          'The data show that defence is a quasi-public good because some countries spend more than others, allowing some citizens to be excluded from protection'
        ],
        ans: 0,
        exp: 'The key public good characteristic in the data: each country\'s entire population benefits from its defence umbrella simultaneously &#8212; non-rivalry (UK\'s 67 million all benefit from the same defence; one person\'s protection doesn\'t reduce another\'s) and non-excludability (HMRC cannot choose not to defend tax non-payers). Option B is incorrect: Germany spends less but achieves a <em>higher</em> security index &#8212; there is no simple spending-outcome relationship, reflecting differences in geopolitical risk, alliances (NATO), and efficiency. Option C confuses spending differences (reflecting political choices) with rivalry &#8212; lower German spending means less defence overall, not that some Germans are excluded. Option D misunderstands the concept: spending variation between countries does not affect the within-country public good properties.'
      },

      /* 8 — mcq: preference revelation problem */
      { type: 'mcq',
        stem: 'The <strong>preference revelation problem</strong> for public goods means that:',
        opts: [
          'Individuals have an incentive to understate their willingness to pay for public goods, hoping others will pay &#8212; making it impossible for government to determine the optimal level of provision without relying on political processes',
          'Private firms can solve the public goods problem by revealing preferences through market research and subscription models, eliminating the need for government provision',
          'Government always over-provides public goods because voters prefer more public spending than is economically optimal',
          'The optimal quantity of a public good is revealed automatically by the price mechanism through vertical demand summation in competitive markets'
        ],
        ans: 0,
        exp: 'The preference revelation problem is a fundamental challenge for public goods provision. If government asks individuals how much they value defence or flood barriers, rational individuals will <strong>understate their WTP</strong> &#8212; hoping others\' truthful answers will justify provision while they free ride on the cost. This makes cost-benefit analysis for public goods inherently difficult. Without market prices to reveal preferences, government must rely on imperfect substitutes: elections (crude aggregation of preferences), surveys (strategically manipulated), stated preference surveys (susceptible to hypothetical bias), and revealed preference methods (inferred from related private market choices). None of these are as informative as the competitive price mechanism. This is one reason why government provision of public goods is always contested &#8212; we genuinely do not know the optimal quantity, unlike private goods where the market price reveals this.'
      },

      /* 9 — diagnostic_pair: government vs private provision */
      { type: 'diagnostic_pair',
        stem: 'Exam question: <em>"Evaluate the view that public goods can only be provided by the government."</em> Which student gives the more nuanced answer?',
        students: [
          { name: 'Nadia', badge: 'Candidate A',
            answer: 'The argument for exclusively government provision rests on the free rider problem: non-excludability means no private firm can recover costs through voluntary payment. This is theoretically compelling &#8212; for perfectly non-excludable goods, private provision is impossible. However, the empirical picture is more nuanced. Technology can convert public goods into club goods: GPS was a US military public good (non-excludable); commercial GPS services now use encryption to create excludability. Over-the-air television (historically non-excludable) became a club good with digital encryption. Private provision funded by advertising (broadcast TV, free newspapers) can fund non-excludable content. Lighthouses &#8212; Samuelson\'s classic public good &#8212; were historically provided by private associations funded by port fees. The qualification is crucial: if the non-excludability is technological rather than fundamental, private solutions emerge over time. Where non-excludability is truly fundamental (national defence, flood barriers, disease surveillance), only government provision can resolve the free rider problem. The real-world answer is that the public goods category shrinks as excludability technology improves.'
          },
          { name: 'Oliver', badge: 'Candidate B',
            answer: 'Public goods can only be provided by government because of the free rider problem. Since no one can be excluded from public goods, private firms would not be able to make a profit and would not supply them. This is why we have government defence, street lighting and flood barriers. However, some goods that seem like public goods are provided by private firms. For example, private security companies provide security services that might seem like public goods. This shows that in some cases private provision is possible. But for major public goods like defence, government provision is essential. Overall, most public goods do require government provision, though there may be some exceptions.'
          }
        ],
        ans: 0,
        exp: '<strong>Nadia</strong> gives the more nuanced answer. She starts from the theoretical premise (free rider &#8594; no private provision) and then systematically challenges it with three mechanisms that enable private provision: technological excludability (GPS, digital TV), advertising funding, and historical private provision of lighthouses. She distinguishes between technological and fundamental non-excludability &#8212; the key analytical insight. Oliver identifies the same core argument and notes private security as an exception but does not develop why private provision sometimes works (the excludability mechanism). Nadia\'s conclusion &#8212; "the public goods category shrinks as excludability technology improves" &#8212; is a sophisticated evaluative insight that earns Level 4. Oliver: Level 2&#8211;3.'
      },

      /* 10 — chain: free rider problem sequence */
      { type: 'chain',
        stem: 'A community considers funding a flood barrier through voluntary contributions. Place the sequence of events in the correct logical order.',
        items: [
          { label: 'The flood barrier is not built &#8212; collective action failure despite community valuing it more than its cost', note: '' },
          { label: 'Households reason: "If others fund it, I benefit anyway; if they don\'t, my contribution alone won\'t be enough"', note: '' },
          { label: 'Voluntary contribution scheme announced &#8212; households asked to pledge based on their WTP', note: '' },
          { label: 'Households understate their true WTP to avoid paying &#8212; each hopes others will fund the barrier', note: '' },
          { label: 'Pledges fall far short of the &#163;500,000 cost; the scheme fails to raise sufficient funds', note: '' },
          { label: 'Council introduces compulsory local levy &#8212; bypassing the free rider problem; barrier is funded and built', note: '' }
        ],
        correctOrder: [2, 1, 3, 4, 0, 5],
        exp: '<strong>The correct sequence:</strong><br>1. Voluntary scheme announced.<br>2. Each household reasons they can free ride on others.<br>3. Households strategically understate WTP (preference revelation problem).<br>4. Pledges fall short &#8212; scheme fails.<br>5. Barrier not built &#8212; collective action failure (despite total WTP &gt; cost).<br>6. Compulsory levy resolves the problem &#8212; everyone pays, barrier is built.<br><br>This sequence shows that the free rider problem is not caused by selfishness or irrationality &#8212; each household is <em>rationally</em> responding to the non-excludable nature of the good. The solution (compulsory levy/taxation) is the only mechanism that removes the incentive to free ride. This is the economic justification for compulsory local taxation &#8212; not just national taxes. The willingness to pay &gt; cost condition ensures that provision is socially beneficial; the problem is purely one of mechanism design.'
      }

    ]
  };

})();
