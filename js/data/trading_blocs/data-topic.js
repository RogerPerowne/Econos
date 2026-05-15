window.ECONOS_TOPIC = {
  id: 'trading_blocs',
  topicNum: '4.3',
  theme: 'Theme 4 \xb7 A Global Perspective',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'Trading Blocs & WTO',
  estTime: '9-11 minutes',
  goal: 'Lock in the hierarchy of trade agreements, Viner\'s trade creation vs diversion, and the WTO\'s role and limitations.',
  intro: {
    heroKey: 'heroGlobe',
    summary: 'Countries form trading blocs to deepen economic integration. But blocs may divert trade away from the most efficient global producers, creating costs even as they create benefits within the group.',
    doInThis: 'Work through 7 concept cards covering the spectrum of integration from FTAs to monetary union, trade creation, trade diversion, the WTO\'s function, and evaluation of regional vs multilateral agreements.',
    outcomes: [
      'Distinguish FTA, customs union, single market, economic union and monetary union',
      'Explain trade creation and trade diversion with diagrams',
      'Evaluate whether joining a customs union is net beneficial',
      'Assess the WTO\'s role and limitations'
    ],
    tip: 'Trade creation = good (shift from high-cost domestic to low-cost bloc partner). Trade diversion = potentially bad (shift from low-cost rest-of-world to higher-cost bloc partner due to common external tariff).',
    stages: [
      { num: 1, name: 'Learn it', sub: '8 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'trading_blocs_1',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'Trading blocs and the WTO: the big picture',
      lede: 'Countries can liberalise trade with the whole world (multilateral) or with a chosen few (regional). Each path has costs as well as gains.',
      branches: [
        { tone: 'blue',   label: 'Levels of integration', sub: 'FTA → customs union → single market → economic union → monetary union. Each step deepens economic ties and surrenders more policy independence.' },
        { tone: 'green',  label: 'Trade creation', sub: 'Joining a bloc replaces inefficient domestic production with cheaper partner imports. The pro-trade welfare gain.' },
        { tone: 'amber',  label: 'Trade diversion', sub: 'A common external tariff can divert imports from the cheapest world producer to a less efficient bloc partner. The hidden cost.' },
        { tone: 'purple', label: 'WTO and multilateralism', sub: 'The WTO polices global trade rules (MFN, national treatment, dispute settlement). Regional blocs can complement it — or undermine its universal logic.' }
      ],
      body: 'Economic integration has five levels, each deeper than the last:<br><br><strong>1. Free Trade Area (FTA)</strong> — members remove tariffs between themselves; each keeps own external tariffs (e.g. NAFTA/USMCA).<br><strong>2. Customs Union (CU)</strong> — FTA plus a common external tariff on imports from non-members (e.g. EU pre-single market).<br><strong>3. Single/Common Market</strong> — CU plus free movement of goods, services, capital and labour (EU single market).<br><strong>4. Economic Union</strong> — single market plus harmonised economic policies (EU).<br><strong>5. Monetary Union</strong> — economic union plus shared currency and central bank (Eurozone).',
      keyTerms: [
        { term: 'Common external tariff', def: 'A uniform tariff applied by all customs-union members on imports from non-member countries.' },
        { term: 'Four freedoms', def: 'Free movement of goods, services, capital and people within the EU single market.' },
        { term: 'Monetary union', def: 'Shared currency; members surrender independent monetary policy.' }
      ],
      examEdge: 'FTAs allow each member to set its own external tariffs — which is why rules-of-origin checks are needed at internal borders. Customs unions remove this problem but reduce policy independence. This distinction is central to post-Brexit UK trade debates.'
    },
    {
      id: 'trading_blocs_2',
      template: 'mechanisms',
      title: 'Trade Creation',
      intro: 'Trade creation occurs when joining a bloc causes domestic production to be replaced by cheaper imports from a bloc partner — this is welfare-improving.',
      steps: [
        { label: 'Before the bloc', text: 'Country A imposes tariffs on all imports. It produces domestically at high cost, or imports from rest-of-world (RoW) at world price plus tariff.' },
        { label: 'After joining the bloc', text: 'Tariffs removed on bloc-partner goods. Country A now imports from the cheaper bloc partner rather than producing domestically.' },
        { label: 'Welfare effect', text: 'Consumers gain from lower prices. Domestic producers lose, but net welfare gain if the partner is the most efficient global producer of that good.' },
        { label: 'Efficiency gain', text: 'Resources freed from high-cost domestic production move to areas of comparative advantage — allocative efficiency improves globally.' }
      ],
      examEdge: 'Trade creation = shift from inefficient domestic production to efficient bloc production. Net welfare gain. The bigger the initial tariff, the larger the trade-creation effect from joining the bloc.'
    },
    {
      id: 'trading_blocs_3',
      template: 'mechanisms',
      diagramKey: 'tradingBlocDiagram',
      title: 'Trade Diversion',
      intro: 'Trade diversion occurs when the common external tariff causes imports to switch from the cheapest global source to a higher-cost bloc partner — potentially welfare-reducing.',
      steps: [
        { label: 'Before the bloc', text: 'Country A imports from the lowest-cost RoW producer (say, China) at the world price. RoW tariff applies but total cost still below bloc partner.' },
        { label: 'After joining the bloc', text: 'Common external tariff is imposed on RoW. Bloc partner now appears cheaper inside the bloc (tariff-free). A switches imports from RoW to the bloc partner.' },
        { label: 'Welfare effect', text: 'A pays more for its imports than before. Consumer prices may or may not fall depending on tariff size. Tariff revenue to government is lost — transferred to the bloc partner.' },
        { label: 'Net assessment', text: 'Trade diversion is a cost of bloc membership. Net effect of joining depends on whether trade creation > trade diversion — an empirical question.' }
      ],
      examEdge: 'Viner (1950): whether a customs union is net beneficial depends on the trade creation vs diversion balance. Joining a bloc with large, efficient members and high initial tariffs is more likely to be net beneficial.'
    },
    {
      id: 'trading_blocs_4',
      template: 'paired',
      title: 'Benefits vs Costs of Trading Blocs',
      left: {
        label: 'Benefits',
        points: [
          'Trade creation raises allocative efficiency',
          'Larger internal market enables economies of scale',
          'Increased competition spurs dynamic efficiency and innovation',
          'Coordinated standards reduce non-tariff barriers',
          'Greater political and economic bargaining power in multilateral negotiations'
        ]
      },
      right: {
        label: 'Costs',
        points: [
          'Trade diversion may divert trade to less efficient partners',
          'Loss of sovereignty over trade policy (common external tariff)',
          'Structural unemployment in industries exposed to bloc competition',
          'Fiscal transfers required in deeper unions (political unpopularity)',
          'May slow multilateral liberalisation by creating competing regional blocs'
        ]
      },
      examEdge: 'EU membership for the UK: trade creation (access to EU single market; UK imports cheap EU goods) vs trade diversion (EU common external tariff diverts imports from efficient non-EU suppliers). Brexit reversed some diversion but lost creation.'
    },
    {
      id: 'trading_blocs_5',
      template: 'framing',
      title: 'The WTO: Role and Principles',
      body: 'The <strong>World Trade Organization (WTO)</strong> — established 1995, successor to GATT — is the multilateral framework governing global trade. Core principles:<br><br><strong>Most Favoured Nation (MFN):</strong> any trade advantage given to one member must be given to all.<br><strong>National treatment:</strong> imported goods must be treated the same as domestic goods after entering a market.<br><strong>Transparency:</strong> trade rules must be clear and published.<br><strong>Dispute settlement:</strong> the WTO Dispute Settlement Body arbitrates trade disputes and can authorise retaliatory tariffs against rule-breakers.',
      keyTerms: [
        { term: 'Most Favoured Nation', def: 'Non-discriminatory principle: any concession to one WTO member must extend to all.' },
        { term: 'Dispute settlement', def: 'WTO mechanism for adjudicating trade disputes; can authorise retaliatory measures.' },
        { term: 'Doha Round', def: 'Multilateral trade negotiations launched 2001; largely stalled over agricultural subsidies.' }
      ],
      examEdge: 'The WTO permits exceptions: FTAs and customs unions (Article XXIV) are allowed because they are liberalising; developing country preferences (GSP) are allowed for development; and anti-dumping duties are permitted if proven. These exceptions matter for evaluation.'
    },
    {
      id: 'trading_blocs_6',
      template: 'diagnose',
      title: 'WTO Limitations & Challenges',
      intro: 'Despite its principles, the WTO faces significant structural challenges.',
      rows: [
        { label: 'Challenge', colA: 'Doha Round stalled', colB: 'US-China trade war' },
        { label: 'Detail', colA: 'Agricultural subsidy reform blocked by developed nations since 2001; no new multilateral deal', colB: 'Both parties imposed tariffs violating MFN; WTO unable to enforce compliance against major powers' },
        { label: 'Implication', colA: 'Global liberalisation has shifted to bilateral/regional deals, fragmenting trade rules', colB: 'Exposes the limits of WTO enforcement when geopolitical power overrides rules' }
      ],
      footer: 'Other limitations: WTO rules do not adequately address state subsidies (China\'s industrial policy), digital trade, or climate-related border adjustments (Carbon Border Adjustment Mechanism).',
      examEdge: 'Exam essays reward noting the tension between WTO principles and geopolitical reality. The WTO works well for small disputes; it struggles when major powers defect. "Rules-based order" is contested — use this as evaluative language.'
    },
    {
      id: 'trading_blocs_7',
      template: 'framing',
      title: 'Regional vs Multilateral Liberalisation',
      body: '<strong>Multilateral liberalisation</strong> (through the WTO) is theoretically optimal — it maximises trade creation globally and avoids the trade-diversion costs of blocs. But multilateral negotiations are slow (Doha Round stalled since 2001) due to the complexity of reaching consensus among 164 members.<br><br><strong>Regional/bilateral FTAs</strong> are faster to negotiate and can go deeper (services, investment, IP), but create a "spaghetti bowl" of overlapping rules of origin and may divert trade. The UK post-Brexit strategy is based on striking bilateral FTAs (e.g. CPTPP, India, Australia) to replace EU membership.',
      keyTerms: [
        { term: 'Spaghetti bowl effect', def: 'Overlapping FTAs with different rules of origin create complexity and administrative costs for businesses.' },
        { term: 'CPTPP', def: 'Comprehensive and Progressive Agreement for Trans-Pacific Partnership — 11-member trade bloc; UK joined 2023.' },
        { term: 'Multilateral vs bilateral', def: 'Multilateral maximises trade creation but is slow; bilateral is faster but risks diversion.' }
      ],
      examEdge: 'A top-band answer on UK trade policy notes: bilateral FTAs gain market access but cannot fully replicate the frictionless single-market access the UK had as an EU member, because services (UK\'s strength) are harder to liberalise in FTAs than goods.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself &#8594;' }
    },

    /* ----- CARD 8 — Essay scaffold ----- */
    {
      id: 'tb-essay',
      template: 'essay-scaffold',
      stepLabel: 'Learn: Step 8 of 8',
      title: 'Essay scaffold: trading blocs',
      question: 'Evaluate the costs and benefits to a country of joining a regional trading bloc such as the European Union. (25 marks)',
      marks: 25,
      timeGuide: '35 minutes',
      paragraphs: [
        {
          type: 'intro',
          label: 'Introduction',
          prompt: 'Define trading blocs and the different levels of integration. Introduce the core debate: do the welfare gains from trade creation outweigh the losses from trade diversion and reduced policy independence?',
          hint: 'Trading bloc = group of countries with preferential trade arrangements. Levels: FTA → customs union → single market → economic/monetary union. EU is deepest integration. Key trade-off: trade creation vs trade diversion.',
          model: 'A regional trading bloc is a group of countries that grant each other preferential market access, ranging from a basic free trade area (FTA), which eliminates internal tariffs, to a full economic and monetary union, which adopts a single currency and coordinates fiscal policy. The European Union represents the most advanced integration model, encompassing a single market with free movement of goods, services, capital, and labour, and a monetary union (eurozone). Membership confers static gains through trade creation and dynamic gains through competition and scale, but also imposes costs through trade diversion, loss of policy autonomy, and political constraints. This essay evaluates these trade-offs with reference to the UK's experience.'
        },
        {
          type: 'analysis',
          label: 'Analysis 1 — Trade creation generates welfare gains through specialisation',
          prompt: 'Explain how joining a bloc eliminates tariffs on intra-bloc trade, allowing member countries to import from more efficient bloc partners rather than producing domestically — generating a welfare gain through trade creation.',
          hint: 'Trade creation: domestic high-cost production replaced by cheaper imports from bloc partner. Consumer surplus rises; producer surplus falls; net welfare gain. EU single market: eliminated non-tariff barriers (NTBs) adding to static gains. Estimated EU membership added 2-3% to UK GDP.',
          model: 'Trade creation arises when bloc membership leads a country to replace expensive domestic production with cheaper imports from more efficient bloc partners. By removing tariffs and non-tariff barriers within the bloc, the price of imports falls, consumer surplus increases, and resources shift toward activities in which the country has comparative advantage. The European single market went beyond tariff elimination to remove regulatory barriers, standardise product rules, and liberalise services — substantially enhancing trade creation. Academic estimates suggest EU membership added approximately 2–3% to UK GDP through these static trade gains, representing a substantial welfare improvement compared to trading under WTO tariffs.'
        },
        {
          type: 'analysis',
          label: 'Analysis 2 — Dynamic gains from competition, scale, and FDI',
          prompt: 'Explain the dynamic benefits of bloc membership: larger market increases competition (reducing X-inefficiency), enables firms to achieve economies of scale, and attracts FDI from firms seeking tariff-free access to the bloc.',
          hint: 'Single market: 450m consumers. BMW, Toyota invest in UK to access EU market. Competition → innovation, lower prices, efficiency. Scale economies in manufacturing. Long-run productivity gains may exceed static trade creation.',
          model: 'Beyond static trade creation, bloc membership generates dynamic efficiency gains that may be more significant in the long run. Access to a larger single market — over 450 million consumers in the EU — enables firms to achieve greater economies of scale, reducing long-run average costs and improving international competitiveness. Intensified competition from bloc partners reduces X-inefficiency and stimulates innovation. Furthermore, the bloc acts as a magnet for foreign direct investment: firms outside the bloc invest within it to gain tariff-free access, raising domestic capital stock and technology transfer. Japan\'s automotive investment in the UK during the 1980s–90s was directly motivated by single market access and significantly boosted UK manufacturing productivity.'
        },
        {
          type: 'counter',
          label: 'Counter — Trade diversion and loss of policy autonomy impose real costs',
          prompt: 'Argue that a common external tariff diverts trade from the most efficient world producer to a less efficient bloc partner, causing welfare loss. Also address the loss of independent trade and monetary policy.',
          hint: 'Trade diversion: bloc\'s common external tariff makes cheaper non-bloc imports more expensive than bloc imports → welfare loss. EU common external tariff on manufactured goods. Loss of independent monetary policy in eurozone. Loss of FTA flexibility (UK-US deal).',
          model: 'The common external tariff (CET) imposed by a customs union or deeper bloc can divert trade from the world\'s most efficient producers to less efficient bloc partners whose goods are cheaper only because intra-bloc tariffs are zero. If, for example, the EU\'s CET makes US or Asian manufactured goods more expensive than German equivalents, trade diverts to the less competitive European supplier — a welfare loss. The net welfare effect of joining depends on whether trade creation exceeds trade diversion; this is empirically uncertain and varies by sector. Beyond trade effects, bloc membership constrains policy autonomy: eurozone members cannot devalue their currency or set independent interest rates, as Greece painfully discovered during the 2009–2015 debt crisis when the inability to depreciate the euro prolonged its recession.'
        },
        {
          type: 'evaluation',
          label: 'Evaluation — Net impact depends on the depth of integration and country characteristics',
          prompt: 'Evaluate how the depth of integration (FTA vs customs union vs single market), the country\'s trade patterns, and its structural similarity to bloc partners determine whether membership is net beneficial.',
          hint: 'Deeper integration = more trade creation and dynamic gains, but more policy loss. Small, open, trade-dependent economies gain most. Optimal currency area: similar economic cycles and labour mobility needed. UK case: large services economy, global trade orientation.',
          model: 'The net benefit of trading bloc membership is highly context-specific. Small, open economies that are highly trade-dependent — such as Ireland or the Netherlands — gain most from bloc membership because trade creation is large relative to GDP. Larger, more self-sufficient economies with globally diversified trade patterns may gain less. The optimum currency area theory suggests monetary union is beneficial only when member economies have synchronised business cycles, flexible labour markets, and fiscal transfer mechanisms — conditions the eurozone imperfectly meets. The UK\'s case is instructive: as a large, services-dominated economy with significant non-EU trade ties and an already open economy, the static gains from EU membership were positive but smaller than for smaller manufacturing-dependent members; the dynamic gains from financial services access may have been more significant.'
        },
        {
          type: 'conclusion',
          label: 'Conclusion',
          prompt: 'Reach a judgement: on balance, do the benefits of trading bloc membership typically outweigh the costs, and for what type of country?',
          hint: 'Most empirical evidence: EU membership net beneficial for most members. Trade creation > trade diversion in the EU case. However, the UK\'s Brexit vote reflects non-economic costs (sovereignty, immigration, political independence) that economic analysis cannot fully capture. Commit to a conditional verdict.',
          model: 'In conclusion, the empirical balance of evidence suggests that trading bloc membership generates net welfare gains for most member economies through trade creation, dynamic efficiency, and FDI attraction — particularly for smaller, trade-dependent economies deeply integrated with bloc partners. However, these gains are not universal: trade diversion imposes real costs, monetary union requires sacrifice of macroeconomic flexibility that can prove painful in asymmetric recessions, and the loss of independent trade policy constrains countries with globally diversified trade relationships. The optimal level of integration depends on a country\'s size, trade orientation, and degree of structural convergence with bloc partners. Beyond the economics, the UK\'s Brexit experience demonstrates that sovereignty, political identity, and immigration concerns may ultimately outweigh measured economic costs — a reminder that trade bloc membership is as much a political as an economic decision.'
        }
      ]
    }
  ]
};
