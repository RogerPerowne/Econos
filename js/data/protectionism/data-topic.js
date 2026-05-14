window.ECONOS_TOPIC = {
  id: 'protectionism',
  topicNum: '4.4',
  theme: 'Theme 4 \xb7 A Global Perspective',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'Protectionism',
  estTime: '7-9 minutes',
  goal: 'Lock in the tools of protectionism, the arguments for and against, and how to evaluate them for essay questions.',
  intro: {
    heroKey: 'trade',
    summary: 'Protectionism uses government policy to restrict imports and support domestic industries. Tools range from tariffs and quotas to subtler non-tariff barriers. Each creates winners (domestic producers) and losers (consumers, trading partners).',
    doInThis: 'Work through 7 cards covering the main protectionist instruments, their welfare effects, arguments for and against protectionism, and how economists evaluate trade policy.',
    outcomes: [
      'Explain tariffs, quotas, subsidies, and non-tariff barriers with welfare analysis',
      'Evaluate the infant-industry, strategic trade, and employment arguments for protection',
      'Assess the costs of protectionism including retaliation and deadweight loss',
      'Apply protectionism analysis to contemporary cases (US-China trade war, Brexit)'
    ],
    tip: 'For any protectionist measure, always identify: who gains, who loses, the deadweight welfare loss, and the retaliatory risk.',
    stages: [
      { num: 1, name: 'Learn it', sub: '7 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'protectionism_1',
      template: 'framing',
      title: 'What Is Protectionism?',
      body: '<strong>Protectionism</strong> refers to any government policy that restricts international trade to protect domestic industries from foreign competition. Motives include: protecting jobs, nurturing infant industries, correcting trade deficits, national security, and retaliating against foreign protectionism. Protectionist measures can be <em>tariff barriers</em> (taxes on imports) or <em>non-tariff barriers</em> (quotas, subsidies, regulations, embargoes). All create a wedge between the world price and the domestic price, diverting income from consumers and foreign producers to domestic producers or government.',
      keyTerms: [
        { term: 'Tariff', def: 'A tax levied on imported goods, raising their domestic price.' },
        { term: 'Quota', def: 'A physical limit on the quantity of imports allowed.' },
        { term: 'Non-tariff barrier', def: 'Any restriction on trade other than a tariff: quotas, subsidies, regulations, embargoes, voluntary export restraints.' }
      ],
      examEdge: 'Protectionism is not just tariffs. Examiners award marks for knowing that domestic subsidies (e.g. US farm subsidies) are a form of protectionism even when they do not explicitly restrict imports, because they tilt competition in favour of domestic producers.'
    },
    {
      id: 'protectionism_2',
      template: 'mechanisms',
      title: 'How a Tariff Works',
      intro: 'A tariff raises the import price, reduces import volume, raises domestic producer surplus and government revenue, but reduces consumer surplus — creating a net deadweight welfare loss.',
      steps: [
        { label: 'World price', text: 'Under free trade, domestic consumers buy at world price Pw. Imports = domestic demand minus domestic supply at Pw.' },
        { label: 'Tariff imposed', text: 'Tariff t raises domestic price to Pw + t. Domestic supply rises; domestic demand falls; imports shrink.' },
        { label: 'Winners', text: 'Domestic producers: higher price increases producer surplus. Government: tariff revenue = tariff rate \xd7 import volume.' },
        { label: 'Losers', text: 'Consumers lose surplus equal to the entire price rise on all units consumed. Net welfare loss = two deadweight triangles (production inefficiency + consumption distortion).' }
      ],
      examEdge: 'In a diagram: consumer surplus loss = trapezoid. Government revenue = middle rectangle. Producer surplus gain = left triangle. The two outer triangles are the deadweight welfare loss — always label these explicitly for high marks.'
    },
    {
      id: 'protectionism_3',
      template: 'mechanisms',
      title: 'Quotas and Subsidies',
      intro: 'Quotas and subsidies achieve similar import-restriction effects to tariffs but distribute the costs differently.',
      steps: [
        { label: 'Import quota', text: 'Sets a maximum import quantity. Price rises as with a tariff, but the "tariff equivalent revenue" goes to foreign exporters (quota rent) rather than the domestic government — a larger welfare loss than a tariff of equivalent effect.' },
        { label: 'Domestic subsidy', text: 'Government pays domestic producers to lower their costs, enabling them to undercut imports without raising consumer prices. Consumer surplus unchanged, but taxpayer cost and global resource misallocation occur.' },
        { label: 'Voluntary Export Restraint', text: 'Foreign country "voluntarily" limits exports (under pressure). Effect similar to a quota; quota rent accrues to foreign exporters. WTO-compliant workaround.' },
        { label: 'Regulatory barriers', text: 'Product standards, safety rules, labelling requirements — legitimate if genuinely protective of consumers; protectionist if designed primarily to exclude imports (e.g. phytosanitary rules used beyond scientific necessity).' }
      ],
      examEdge: 'Quotas are generally worse than equivalent tariffs for domestic welfare because the quota rent is a transfer to foreign producers rather than domestic government revenue. Mention this in essays for evaluation credit.'
    },
    {
      id: 'protectionism_4',
      template: 'cause',
      title: 'Arguments FOR Protectionism',
      causes: [
        { head: 'Infant industry argument', body: 'New industries need temporary protection to grow, achieve economies of scale, and eventually compete globally. Justification: learning-by-doing, first-mover advantages. Risk: protection becomes permanent; lobbying prevents removal.' },
        { head: 'Strategic trade theory', body: 'In industries with large scale economies (aircraft, semiconductors), government support can shift oligopoly profits from foreign to domestic firms. Justification for US CHIPS Act, EU Airbus subsidies.' },
        { head: 'National security', body: 'Strategic industries (defence, food, energy) should not depend on foreign suppliers. Accepted WTO exception. Risk: definition of "strategic" expands under political pressure.' },
        { head: 'Correcting dumping', body: 'If foreign firms sell below cost to undercut domestic rivals, anti-dumping duties restore fair competition. WTO permits if dumping proven.' },
        { head: 'Protecting employment', body: 'Reducing import competition protects jobs, particularly in regions with limited alternative employment. Short-run benefit vs long-run efficiency cost.' }
      ],
      examEdge: 'The infant-industry argument is the most theoretically defensible — it acknowledges comparative advantage but argues it is dynamic, not static. Strong essays evaluate whether governments can credibly commit to removing protection once the industry matures.'
    },
    {
      id: 'protectionism_5',
      template: 'cause',
      title: 'Arguments AGAINST Protectionism',
      causes: [
        { head: 'Deadweight welfare loss', body: 'Every tariff creates production and consumption distortions — resources used inefficiently and consumers pay more. Net welfare loss even before retaliation.' },
        { head: 'Retaliation spiral', body: 'Protectionism by one country triggers retaliation. 1930s Smoot-Hawley tariff and retaliations caused world trade to collapse by 66% and deepened the Great Depression.' },
        { head: 'Higher costs for domestic firms', body: 'Tariffs on inputs (e.g. steel) raise costs for downstream industries. US steel tariffs (2018) reduced employment in steel-using industries more than they saved in steel production.' },
        { head: 'Rent-seeking and inefficiency', body: 'Protected industries lobby to maintain protection rather than improving productivity. Permanent protection breeds complacency.' },
        { head: 'Consumer and taxpayer costs', body: 'Higher prices (tariffs/quotas) or tax costs (subsidies) reduce real incomes; regressive impact as low-income households spend more on goods with tariffs.' }
      ],
      examEdge: 'The 2018-19 US-China trade war is the go-to contemporary case. US tariffs on $350bn of Chinese goods raised consumer prices by ~$831 per household per year, with most cost borne by US consumers, not China — a killer evaluation point.'
    },
    {
      id: 'protectionism_6',
      template: 'paired',
      title: 'Free Trade vs Managed Trade',
      left: {
        label: 'Free trade (liberal position)',
        points: [
          'Maximises allocative efficiency via comparative advantage',
          'Lowers consumer prices and raises real incomes',
          'Avoids retaliation and trade wars',
          'Consistent with WTO rules and multilateral order',
          'Competitive pressure drives dynamic efficiency'
        ]
      },
      right: {
        label: 'Managed trade (interventionist position)',
        points: [
          'Comparative advantage is dynamic — protection can shift it over time',
          'Free trade creates structural unemployment in exposed industries',
          'National security requires strategic self-sufficiency in key sectors',
          'Free trade between unequal partners may lock developing nations into low-value exports',
          'Environmental and labour standards may be "dumped" under free trade (race to the bottom)'
        ]
      ],
      examEdge: 'Neither position is always correct — the optimal policy depends on the industry, the country\'s development level, and the trading partner. Top essays acknowledge this rather than advocating one view absolutely.'
    },
    {
      id: 'protectionism_7',
      template: 'framing',
      title: 'Contemporary Protectionism: US-China & Brexit',
      body: '<strong>US-China trade war (2018-present):</strong> US imposed tariffs of up to 145% on Chinese goods citing unfair subsidies, IP theft, and national security. China retaliated with agricultural tariffs targeting US swing states. Net effect: trade diversion (US imports from Vietnam/Mexico rose), limited reshoring, higher US consumer prices. Both economies hurt but geopolitically driven.\n\n<strong>Post-Brexit UK:</strong> UK left EU customs union and single market. New border checks added friction (non-tariff barriers) to EU-UK trade. UK goods exports to EU fell ~15% in first two years. UK now negotiating bilateral FTAs (CPTPP, India) to offset — but services, the UK\'s strength, are harder to liberalise bilaterally.',
      keyTerms: [
        { term: 'Trade diversion', def: 'Trade shifts from most efficient global supplier to a different supplier due to preferential tariffs.' },
        { term: 'Reshoring', def: 'Returning production to the home country — often incentivised by tariffs; slow and costly.' },
        { term: 'Non-tariff barriers', def: 'Border checks, rules of origin, customs procedures — major source of post-Brexit trade friction.' }
      ],
      examEdge: 'Use Brexit and US-China as contrasting case studies: Brexit is primarily about non-tariff barriers (border friction for goods, loss of passporting for services); US-China is primarily tariff-based but with strategic technology restrictions (semiconductors, AI) added.'
    }
  ]
};
