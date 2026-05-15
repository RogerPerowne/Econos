window.ECONOS_TOPIC = {
  id: 'protectionism',
  topicNum: '4.4',
  theme: 'Theme 4 \xb7 A Global Perspective',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'Protectionism',
  estTime: '9-11 minutes',
  goal: 'Lock in the tools of protectionism, the arguments for and against, and how to evaluate them for essay questions.',
  intro: {
    heroKey: 'heroGlobe',
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
      { num: 1, name: 'Learn it', sub: '8 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'protectionism_1',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'Protectionism: shielding the home market',
      lede: 'Every tariff is a wedge — between world and domestic prices, between winners and losers. The question is whether the shield is worth the cost.',
      branches: [
        { tone: 'blue',   label: 'The toolkit', sub: 'Tariffs, quotas, subsidies, regulations, embargoes. All raise the effective domestic price or restrict supply of imports — through different mechanisms.' },
        { tone: 'green',  label: 'The case for', sub: 'Infant industries, strategic sectors, national security, jobs in vulnerable regions, retaliation. Sometimes intervention has a real economic justification.' },
        { tone: 'rose',   label: 'The case against', sub: 'Deadweight loss, higher consumer prices, retaliation risk, lost efficiency from comparative advantage. Free-trade economics points one way.' },
        { tone: 'purple', label: 'Who wins, who loses', sub: 'Domestic producers and government gain; consumers and foreign exporters lose. Protectionism is fundamentally a redistribution policy — not just an efficiency one.' }
      ],
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
      diagramKey: 'tariffDiagram',
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
      },
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
      examEdge: 'Use Brexit and US-China as contrasting case studies: Brexit is primarily about non-tariff barriers (border friction for goods, loss of passporting for services); US-China is primarily tariff-based but with strategic technology restrictions (semiconductors, AI) added.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself &#8594;' }
    },

    /* ----- CARD 8 — Essay scaffold ----- */
    {
      id: 'prot-essay',
      template: 'essay-scaffold',
      stepLabel: 'Learn: Step 8 of 8',
      title: 'Essay scaffold: protectionism',
      question: 'Evaluate the case for protectionism as a trade policy for a country like the UK. (25 marks)',
      marks: 25,
      timeGuide: '35 minutes',
      paragraphs: [
        {
          type: 'intro',
          label: 'Introduction',
          prompt: 'Define protectionism and explain its instruments. Introduce the key arguments for and against.',
          hint: 'Protectionism: government policies that restrict imports to protect domestic industries. Instruments: tariffs (tax on imports), quotas (quantity limits), subsidies to domestic producers, non-tariff barriers (regulations, standards, border friction). Standard case against: reduces trade → higher prices, less choice, lower efficiency. Arguments for: infant industry, strategic industries, employment protection, national security.',
          model: 'Protectionism encompasses government policies — tariffs, quotas, subsidies, and non-tariff barriers — that restrict imports to protect domestic industries from international competition. The standard economic case against protectionism is strong: it raises consumer prices, reduces allocative efficiency, invites retaliation, and ultimately shrinks the gains from trade. Yet protectionist arguments have proved politically durable because their benefits are concentrated (visible protected jobs) while their costs are dispersed (marginally higher prices for millions of consumers). This essay evaluates the case for protectionism for a country like the UK, examining whether the theoretical arguments withstand scrutiny and what the empirical evidence shows.'
        },
        {
          type: 'analysis',
          label: 'Analysis 1 — The case against protectionism: consumer costs and retaliation',
          prompt: 'Explain the welfare costs of tariffs and the retaliatory spiral they can create.',
          hint: 'Tariff mechanism: import price rises → domestic producers gain (higher prices, more output) → consumers lose (higher prices, less choice) → government gains revenue → net welfare loss = DWL (consumer surplus lost > revenue gained + producer surplus). Retaliation: trading partners impose their own tariffs → UK exports face barriers → export industries lose. WTO rules constrain unilateral protectionism. Historical: US Smoot-Hawley (1930) → global trade fell 65% → worsened Great Depression. Post-Brexit UK: border friction (non-tariff barriers) reduced UK-EU trade for goods and services.',
          model: 'Tariff protection imposes a direct welfare cost on domestic consumers: the higher import price reduces consumer surplus by more than it raises producer surplus and government revenue combined, generating a deadweight welfare loss. For the UK, which relies heavily on imported goods (90%+ of food from abroad, significant imported consumer goods), tariffs on major trading partners would raise the cost of living substantially. The secondary cost is retaliation: if the UK raises tariffs on EU or US imports, affected partners respond with their own barriers, reducing demand for UK exports. The UK\'s post-Brexit experience provides a natural experiment: the introduction of non-tariff barriers through border friction reduced UK-EU goods trade by an estimated 15-20% — illustrating the trade-reducing effect of protection even without explicit tariffs. The interwar period provides the historical warning: the US Smoot-Hawley tariff (1930) triggered a global retaliatory spiral that reduced world trade by 65% and deepened the Great Depression.'
        },
        {
          type: 'analysis',
          label: 'Analysis 2 — The infant industry and strategic sector arguments',
          prompt: 'Evaluate when protectionism may be theoretically justified: infant industries and strategic sectors.',
          hint: 'Infant industry (Hamilton, List): new domestic industry cannot compete with established foreign producers due to scale disadvantage. Temporary protection → domestic industry grows → learning-by-doing → eventually competitive. Condition for validity: industry must become competitive without permanent protection; protection must be temporary. Successful examples: South Korea (POSCO steel, Samsung, DRAM chips), Japan (Toyota), Taiwan (TSMC semiconductors). Failed examples: UK steel protection 1970s, EU agriculture (CAP). Strategic sectors: national security (semiconductors, defence) justifies protection regardless of efficiency.',
          model: 'The infant industry argument provides the most theoretically coherent case for temporary protection. A new domestic industry may face higher unit costs than established foreign competitors — not because it is intrinsically less efficient, but because it lacks the accumulated learning-by-doing experience and scale economies that incumbents have. Temporary protection can allow the industry to reach the scale needed to compete internationally. The historical evidence is mixed but not uniformly negative: South Korea\'s industrial policy of protecting infant industries in steel, automobiles, and semiconductors during the 1960s-80s successfully created world-class competitive industries (POSCO, Samsung, Hyundai) that no longer require protection. However, the infant industry argument requires discipline — protection must be temporary and conditional on achieving competitiveness, not a permanent shield for inefficient production. The UK\'s long-term protection of its steel and automotive industries in the 1970s failed this test. Strategic sector arguments are more robust: civilian control of semiconductor manufacturing (TSMC in Taiwan), food security, and defence industrial base are legitimate grounds for protection that cannot be evaluated on pure efficiency criteria.'
        },
        {
          type: 'counter',
          label: 'Counter — Protectionism as employment protection: a legitimate short-run concern?',
          prompt: 'Evaluate the political economy of protectionism — protecting jobs — and why this argument, while economically weak, has political force.',
          hint: 'Employment argument: imports from low-wage countries displace domestic workers → structural unemployment → regional deprivation (Midlands manufacturing, Rust Belt in US). Short-run social cost is concentrated and visible; long-run efficiency gain is dispersed and gradual. Stolper-Samuelson: trade liberalisation reduces real wages of the competing factor — low-skill workers in rich countries. Adjustment costs are real: retraining takes years, geographic mobility is limited. HOWEVER: protection doesn\'t create net jobs long-run (higher prices reduce spending elsewhere). Better solution: adjustment assistance + trade liberalisation.',
          model: 'The employment protection argument for protectionism is economically weak but politically compelling. Concentrated job losses in import-competing industries — UK steel towns, former manufacturing regions — create visible social costs that generate strong political pressure for protection. The Stolper-Samuelson theorem formalises this: trade liberalisation does reduce the real wages of workers competing most directly with cheap imports. These adjustment costs are real, concentrated geographically, and often intergenerational in their effects. However, the economic case for using trade protection to preserve these jobs is poor: protection raises prices for all consumers (including workers elsewhere in the economy), reduces resource allocation to more competitive sectors, and ultimately cannot preserve jobs in structurally uncompetitive industries indefinitely. The superior policy response is trade adjustment assistance — helping displaced workers retrain and relocate — combined with trade liberalisation rather than protection. The UK\'s failure to provide adequate adjustment assistance for communities affected by deindustrialisation is a domestic policy failure, not a market failure remedied by protectionism.'
        },
        {
          type: 'evaluation',
          label: 'Evaluation — Weighing the case: context, conditionality, and the UK\'s specific position',
          prompt: 'Weigh the protectionist arguments against the free trade case for the UK specifically.',
          hint: 'UK context: services-dominated economy (financial services, professional services 80%+ of GDP). UK has CA in financial services and advanced manufacturing — not mass manufacturing. For the UK, protectionism of mass manufacturing would preserve structurally uncompetitive industries at high consumer cost. UK trade policy challenge post-Brexit: balancing trade agreements with regulatory alignment. UK strategic interests: semiconductors (FDI attraction policy), food security (domestic food production), defence (BAE Systems). The infant industry argument is weakest for a developed country with mature capital markets — private finance should fund growing industries.',
          model: 'The case for protectionism is weakest for a developed, open economy like the UK. The UK\'s revealed comparative advantage lies in financial services, insurance, professional services, education, and advanced manufacturing — not in the labour-intensive or capital-intensive industries most threatened by import competition. Protecting mass manufacturing imports would impose higher consumer prices on UK households with limited benefit: the industries are structurally uncompetitive (reflecting genuine comparative disadvantage) rather than merely in an infant stage. The UK also has well-developed capital markets, reducing the market failure justification for infant industry protection: private venture capital and industrial finance can fund promising new industries without trade barriers. Where strategic arguments apply — semiconductors (critical for defence and AI), food security margins — targeted interventions are more appropriate than broad tariff barriers. Post-Brexit, the UK\'s greatest trade policy challenge is not imposing new barriers but managing the non-tariff barrier costs already introduced through reduced EU trade integration.'
        },
        {
          type: 'conclusion',
          label: 'Conclusion',
          prompt: 'Deliver a judgement on whether the case for protectionism is compelling for the UK.',
          hint: 'The infant industry and strategic sector arguments provide legitimate but narrow justifications for targeted protection. General protectionism (tariffs on consumer imports) is harmful: raises prices, invites retaliation, slows productivity growth. For the UK, free trade with appropriate adjustment policy is superior. The employment argument is best addressed through domestic labour market and adjustment policies, not trade barriers.',
          model: 'The case for general protectionism is not compelling for the UK. The efficiency costs — higher consumer prices, retaliation risks, reduced productivity growth — outweigh the benefits in most contexts, and the UK\'s comparative advantages lie in sectors (financial services, advanced technology, education) that benefit from open trade rather than protection. The infant industry argument carries more weight in developing economies with genuinely nascent industries, where capital market imperfections and learning-by-doing justify temporary barriers. For the UK, strategic sector arguments (semiconductors, food security, defence) provide the most robust justification for targeted intervention — but these are narrow, conditional cases that do not support broad protectionism. The appropriate response to trade adjustment costs is domestic policy: retraining programmes, regional investment, and adjustment assistance — not trade barriers that impose permanent consumer price increases to delay inevitable structural change.'
        }
      ]
    }
  ]
};
