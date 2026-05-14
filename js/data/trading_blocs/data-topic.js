window.ECONOS_TOPIC = {
  id: 'trading_blocs',
  topicNum: '4.3',
  theme: 'Theme 4 \xb7 A Global Perspective',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'Trading Blocs & WTO',
  estTime: '7-9 minutes',
  goal: 'Lock in the hierarchy of trade agreements, Viner\'s trade creation vs diversion, and the WTO\'s role and limitations.',
  intro: {
    heroKey: 'globalisation',
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
      { num: 1, name: 'Learn it', sub: '7 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'trading_blocs_1',
      template: 'framing',
      title: 'Spectrum of Economic Integration',
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
      examEdge: 'A top-band answer on UK trade policy notes: bilateral FTAs gain market access but cannot fully replicate the frictionless single-market access the UK had as an EU member, because services (UK\'s strength) are harder to liberalise in FTAs than goods.'
    }
  ]
};
