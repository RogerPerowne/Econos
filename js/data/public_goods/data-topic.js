window.ECONOS_TOPIC = {
  id: 'public_goods',
  topicNum: '1.14',
  theme: 'Theme 1 \xb7 Introduction to Markets and Market Failure',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'Public Goods',
  estTime: '7-9 minutes',
  goal: 'Lock in non-rivalry, non-excludability, the free rider problem, and why public goods cannot be provided by markets.',
  intro: {
    heroKey: 'heroExternalities',
    summary: 'Public goods are the clearest case of market failure: because they are non-excludable and non-rival, no private firm can profitably provide them. Without government provision, they will be drastically under-supplied — the free rider problem ensures this.',
    doInThis: 'Work through 7 cards covering the definition of public goods, the two defining properties, the free rider problem, quasi-public goods, real-world examples, and how government provides public goods.',
    outcomes: [
      'Define public good using the two criteria: non-rival and non-excludable',
      'Explain the free rider problem and why it causes market failure',
      'Distinguish pure public goods from quasi-public goods with examples',
      'Evaluate government provision as a solution to public goods market failure'
    ],
    tip: 'Non-rival = one person\'s use does not reduce availability to others. Non-excludable = impossible to prevent non-payers from benefiting. BOTH must apply for a pure public good. Either alone is not sufficient.',
    stages: [
      { num: 1, name: 'Learn it', sub: '7 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'public_goods_1',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 7',
      title: 'Public goods: the big picture',
      lede: 'Some goods can\'t be rationed by price — and without government, they won\'t exist at all.',
      branches: [
        { tone: 'green',  label: 'Two defining properties', sub: 'Non-rival (my use doesn\'t diminish yours) and non-excludable (can\'t stop non-payers benefiting).' },
        { tone: 'rose',   label: 'The free rider problem',  sub: 'Everyone has an incentive not to pay → market under-provides → complete market failure.' },
        { tone: 'purple', label: 'Pure vs quasi-public',    sub: 'Few goods are perfectly non-rival and non-excludable. Most lie on a spectrum (roads, broadcasting, beaches).' },
        { tone: 'blue',   label: 'Why markets fail',        sub: 'No price signal can be charged → no profit incentive to supply → private provision is impossible at efficient scale.' },
        { tone: 'amber',  label: 'Government solutions',    sub: 'Tax-funded provision bypasses free-riding — but raises questions about how much to provide and at what cost.' }
      ],
      body: 'A <strong>pure public good</strong> has two essential properties:<br><br><strong>1. Non-rival:</strong> one person\'s consumption does not reduce the amount available to others. A lighthouse beam does not "use up" when one ship sees it.<br><br><strong>2. Non-excludable:</strong> once provided, it is impossible (or prohibitively expensive) to prevent non-payers from benefiting. A country\'s national defence protects all residents regardless of whether they pay tax.<br><br>These two properties together make public goods fundamentally different from private goods. A <strong>private good</strong> is both rival (your consumption reduces mine) and excludable (non-payers can be excluded). Most goods are private goods.',
      keyTerms: [
        { term: 'Non-rival', def: 'Consumption by one person does not reduce the amount available for others — zero marginal cost of providing to an additional consumer.' },
        { term: 'Non-excludable', def: 'Once provided, impossible to prevent access — no one can be excluded for not paying.' },
        { term: 'Pure public good', def: 'A good that is both non-rival and non-excludable — must be provided by government or not at all.' }
      ],
      examEdge: 'The exam requires precision: "public good" has a specific economic meaning (non-rival AND non-excludable). A good provided by the government is NOT necessarily a public good. NHS healthcare is not a public good — it is rival (a doctor\'s time has an opportunity cost) and excludable (you could in principle exclude non-payers). This confusion is a classic error.'
    },
    {
      id: 'public_goods_2',
      template: 'framing',
      diagramKey: 'freeRiderDiagram',
      title: 'The Free Rider Problem',
      body: 'Non-excludability creates the <strong>free rider problem</strong>: individuals have an incentive to benefit from a good without contributing to its cost, because they cannot be excluded from its benefits.<br><br><strong>Logic:</strong> If the good will be provided regardless (because others pay), why contribute? If everyone reasons this way, no one contributes — and the good is not provided. This is a form of the <strong>prisoner\'s dilemma</strong>: individual rationality leads to collective irrationality.<br><br>Consequence: the market fails to provide public goods at all, or drastically under-provides. The only solution is government provision funded by compulsory taxation — bypassing the free rider problem.',
      keyTerms: [
        { term: 'Free rider', def: 'A person who benefits from a good without paying for it — enabled by non-excludability.' },
        { term: 'Free rider problem', def: 'When rational individuals free ride, the good is under-provided or not provided at all — a form of the prisoner\'s dilemma.' },
        { term: 'Collective action problem', def: 'A situation where individually rational behaviour leads to an outcome collectively worse for all — public goods are a prime example.' }
      ],
      examEdge: 'The free rider problem is why taxation is compulsory: voluntary taxation would suffer from mass free riding. This is the economic justification for compulsory tax collection. Without it, public goods provision collapses. Stating this explicitly is good exam analysis.'
    },
    {
      id: 'public_goods_3',
      template: 'cause',
      title: 'Examples of Public Goods',
      causes: [
        { head: 'National defence', body: 'Non-rival (one person\'s protection doesn\'t reduce others\') and non-excludable (impossible to defend some residents and not others within a territory). Classic pure public good.' },
        { head: 'Flood defences', body: 'Once a flood barrier is built, all downstream residents benefit — non-excludable. One person\'s protection doesn\'t reduce another\'s — non-rival. Classic pure public good.' },
        { head: 'Street lighting', body: 'Non-rival (one person using the light doesn\'t reduce it for others); difficult to exclude (could not switch off light for non-payers on a public street). Quasi-public good in practice.' },
        { head: 'Police and fire services', body: 'Non-excludable within a jurisdiction — police cannot protect only those who pay. Partly non-rival — up to a capacity limit. Public goods at the societal level.' }
      ],
      examEdge: 'BBC broadcasts were once a pure public good (non-rival, non-excludable over-the-air signal). Digital TV introduced technical excludability (encryption) — now more of a club good. This shows how technology changes good characteristics, sometimes allowing market provision of what was previously a public good.'
    },
    {
      id: 'public_goods_4',
      template: 'diagnose',
      title: 'Public, Private, and Quasi-Public Goods',
      intro: 'Not all goods fit neatly into the public/private binary — quasi-public goods blur the boundaries.',
      rows: [
        { label: 'Good type', colA: 'Pure public good', colB: 'Quasi-public (club) good' },
        { label: 'Properties', colA: 'Non-rival AND non-excludable. Cannot exclude; no congestion. Examples: national defence, flood barriers, public fireworks.', colB: 'Non-rival up to capacity (then becomes congested/rival); can be technically excluded. Examples: motorways (non-rival until congested), cinema, subscription streaming.' },
        { label: 'Provision', colA: 'Must be provided by government — market cannot charge non-payers; free rider problem prevents provision.', colB: 'May be provided by private market once excludability technology exists (toll roads, paywalls, club membership). Or may be publicly provided for equity reasons.' }
      ],
      footer: 'Common exam trap: parks are quasi-public goods (non-rival until congested; can in principle be fenced off — exclusion is costly but possible). They are often publicly provided for equity, but are not pure public goods.',
      examEdge: 'Roads illustrate the quasi-public good concept perfectly: motorway (non-congested) = non-rival, excludable (toll possible) = club good. Urban street (congested) = rival (each extra car increases congestion for all). Congestion pricing (central London congestion charge) makes the excludability explicit.'
    },
    {
      id: 'public_goods_5',
      template: 'framing',
      title: 'Why Markets Cannot Provide Public Goods',
      body: 'The market failure is clear and mechanical: if a good is non-excludable, no firm can charge a price for it — any non-payer can consume it anyway. Since revenue requires exclusion, and exclusion is impossible, no private firm will supply the good (it would make a loss).<br><br><strong>Demand aggregation problem:</strong> unlike private goods where individual demand curves are summed horizontally (each consumer at each price), public goods require vertical summation of demand curves (since everyone simultaneously consumes the same unit, their willingness-to-pay is added together to get total social value).<br><br>Even if total social value of the public good exceeds its cost, the market still fails — because that value cannot be captured as revenue.',
      keyTerms: [
        { term: 'Vertical demand summation', def: 'For public goods, add willingness to pay of all consumers at each quantity (since all consume the same unit simultaneously).' },
        { term: 'Revenue capture', def: 'Firms can only fund production if they can charge consumers. Non-excludability prevents revenue capture → zero private supply.' },
        { term: 'Willing to pay > cost', def: 'Even when total social value of a public good exceeds its cost, markets still fail to provide it — the free rider problem prevents revenue collection.' }
      ],
      examEdge: 'The market failure for public goods is absolute (not just partial): unlike externalities, where markets produce too much or too little, for public goods the market produces NOTHING — complete market failure. This is why government provision (not just regulation or taxation) is the only solution.'
    },
    {
      id: 'public_goods_6',
      template: 'framing',
      title: 'Government Solutions to Public Goods',
      body: '<strong>Direct provision funded by taxation:</strong> government provides the public good and funds it through compulsory taxation. Free rider problem bypassed — everyone pays (through tax) regardless of individual valuation. Examples: defence, flood barriers, street lighting, police.<br><br><strong>Challenges for government provision:</strong><br>1. <em>How much to provide?</em> Cannot infer demand from market prices. Optimal provision requires knowing total willingness to pay (vertical sum of demand) — impossible to reveal truthfully (each person wants more provided if others pay).<br>2. <em>Government failure risk:</em> over- or under-provision; bureaucratic inefficiency; political pressure distorts priorities.',
      keyTerms: [
        { term: 'Compulsory taxation', def: 'The mechanism that bypasses the free rider problem — everyone contributes regardless of individual willingness.' },
        { term: 'Optimal provision', def: 'Output where the sum of all individuals\' WTP = marginal cost of provision. Difficult to determine without price signals.' },
        { term: 'Preference revelation problem', def: 'Individuals have incentive to understate their WTP for public goods to free ride on others\' payments — makes optimal provision calculation difficult.' }
      ],
      examEdge: 'The preference revelation problem is why government struggles to provide the "right" amount of public goods. In practice, politicians use election results, surveys, and cost-benefit analysis to approximate optimal provision — none are perfect. This explains why public good provision is always politically contested.'
    },
    {
      id: 'public_goods_7',
      template: 'paired',
      title: 'Public Goods: Policy Debate',
      left: {
        label: 'Case for government provision',
        points: [
          'Only solution to the free rider problem — taxation makes payment compulsory',
          'Ensures universal access — public goods protect all citizens equally',
          'Positive externalities from public goods (security, flood protection) justify funding',
          'Some public goods have very large social returns (justice system enables market economy)'
        ]
      },
      right: {
        label: 'Limitations and alternatives',
        points: [
          'Preference revelation problem: government cannot know optimal quantity without price signals',
          'Technology may convert public goods to club goods (GPS was military public good; now largely private)',
          'Some "public goods" could be privately provided with innovative business models (advertising-funded media)',
          'Government failure risk: political interference, bureaucratic inefficiency, over-provision for electoral reasons'
        ]
      },
      examEdge: 'The internet began as a US Defence Department public good (ARPANET — non-excludable, non-rival). Commercial internet is now a mix: basic infrastructure is quasi-public; web services are private (subscription, advertising). Technology transformed what was a public good into mostly private goods. This evolution is a rich evaluation point.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself &#8594;' }
    }
  ]
};
