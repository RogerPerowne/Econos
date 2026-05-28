window.ECONOS_TOPIC = {
  id: 'trading-blocs-and-wto',
  topicNum: '1.5',
  theme: 'Theme 4 \xb7 A Global Perspective',
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
        { tone: 'purple', label: 'WTO and multilateralism', sub: 'The WTO polices global trade rules (MFN, national treatment, dispute settlement). Regional blocs can complement it – or undermine its universal logic.' }
      ],
      body: 'Economic integration has five levels, each deeper than the last:<br><br><strong>1. Free Trade Area (FTA)</strong> – members remove tariffs between themselves; each keeps own external tariffs (e.g. NAFTA/USMCA).<br><strong>2. Customs Union (CU)</strong> – FTA plus a common external tariff on imports from non-members (e.g. EU pre-single market).<br><strong>3. Single/Common Market</strong> – CU plus free movement of goods, services, capital and labour (EU single market).<br><strong>4. Economic Union</strong> – single market plus harmonised economic policies (EU).<br><strong>5. Monetary Union</strong> – economic union plus shared currency and central bank (Eurozone).',
      keyTerms: [
        { term: 'Common external tariff', def: 'A uniform tariff applied by all customs-union members on imports from non-member countries.' },
        { term: 'Four freedoms', def: 'Free movement of goods, services, capital and people within the EU single market.' },
        { term: 'Monetary union', def: 'Shared currency; members surrender independent monetary policy.' }
      ],
      examEdge: 'FTAs allow each member to set its own external tariffs – which is why rules-of-origin checks are needed at internal borders. Customs unions remove this problem but reduce policy independence. This distinction is central to post-Brexit UK trade debates.'
    },
    {
      id: 'trading_blocs_2',
      template: 'mechanisms',
      title: 'Trade Creation',
      intro: 'Trade creation occurs when joining a bloc causes domestic production to be replaced by cheaper imports from a bloc partner – this is welfare-improving.',
      steps: [
        { label: 'Before the bloc', text: 'Country A imposes tariffs on all imports. It produces domestically at high cost, or imports from rest-of-world (RoW) at world price plus tariff.' },
        { label: 'After joining the bloc', text: 'Tariffs removed on bloc-partner goods. Country A now imports from the cheaper bloc partner rather than producing domestically.' },
        { label: 'Welfare effect', text: 'Consumers gain from lower prices. Domestic producers lose, but net welfare gain if the partner is the most efficient global producer of that good.' },
        { label: 'Efficiency gain', text: 'Resources freed from high-cost domestic production move to areas of comparative advantage – allocative efficiency improves globally.' }
      ],
      examEdge: 'Trade creation = shift from inefficient domestic production to efficient bloc production. Net welfare gain. The bigger the initial tariff, the larger the trade-creation effect from joining the bloc.'
    },
    {
      id: 'trading_blocs_3',
      template: 'mechanisms',
      diagramKey: 'tradingBlocDiagram',
      title: 'Trade Diversion',
      intro: 'Trade diversion occurs when the common external tariff causes imports to switch from the cheapest global source to a higher-cost bloc partner – potentially welfare-reducing.',
      steps: [
        { label: 'Before the bloc', text: 'Country A imports from the lowest-cost RoW producer (say, China) at the world price. RoW tariff applies but total cost still below bloc partner.' },
        { label: 'After joining the bloc', text: 'Common external tariff is imposed on RoW. Bloc partner now appears cheaper inside the bloc (tariff-free). A switches imports from RoW to the bloc partner.' },
        { label: 'Welfare effect', text: 'A pays more for its imports than before. Consumer prices may or may not fall depending on tariff size. Tariff revenue to government is lost – transferred to the bloc partner.' },
        { label: 'Net assessment', text: 'Trade diversion is a cost of bloc membership. Net effect of joining depends on whether trade creation > trade diversion – an empirical question.' }
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
      body: 'The <strong>World Trade Organization (WTO)</strong> – established 1995, successor to GATT – is the multilateral framework governing global trade. Core principles:<br><br><strong>Most Favoured Nation (MFN):</strong> any trade advantage given to one member must be given to all.<br><strong>National treatment:</strong> imported goods must be treated the same as domestic goods after entering a market.<br><strong>Transparency:</strong> trade rules must be clear and published.<br><strong>Dispute settlement:</strong> the WTO Dispute Settlement Body arbitrates trade disputes and can authorise retaliatory tariffs against rule-breakers.',
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
      examEdge: 'Exam essays reward noting the tension between WTO principles and geopolitical reality. The WTO works well for small disputes; it struggles when major powers defect. "Rules-based order" is contested – use this as evaluative language.'
    },
    {
      id: 'trading_blocs_7',
      template: 'framing',
      title: 'Regional vs Multilateral Liberalisation',
      body: '<strong>Multilateral liberalisation</strong> (through the WTO) is theoretically optimal – it maximises trade creation globally and avoids the trade-diversion costs of blocs. But multilateral negotiations are slow (Doha Round stalled since 2001) due to the complexity of reaching consensus among 164 members.<br><br><strong>Regional/bilateral FTAs</strong> are faster to negotiate and can go deeper (services, investment, IP), but create a "spaghetti bowl" of overlapping rules of origin and may divert trade. The UK post-Brexit strategy is based on striking bilateral FTAs (e.g. CPTPP, India, Australia) to replace EU membership.',
      keyTerms: [
        { term: 'Spaghetti bowl effect', def: 'Overlapping FTAs with different rules of origin create complexity and administrative costs for businesses.' },
        { term: 'CPTPP', def: 'Comprehensive and Progressive Agreement for Trans-Pacific Partnership – 11-member trade bloc; UK joined 2023.' },
        { term: 'Multilateral vs bilateral', def: 'Multilateral maximises trade creation but is slow; bilateral is faster but risks diversion.' }
      ],
      examEdge: 'A top-band answer on UK trade policy notes: bilateral FTAs gain market access but cannot fully replicate the frictionless single-market access the UK had as an EU member, because services (UK\'s strength) are harder to liberalise in FTAs than goods.',
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
    title:    'Trading Blocs & the WTO',
    subtitle: 'International Economics',
    backUrl:  TopicLoader.routes.learn('trading-blocs-and-wto'),
    backLabel:'Back to Learn It',
    lede:     '10 questions · ~8 minutes · covers integration hierarchy, trade creation/diversion, WTO, and Brexit evaluation',
    shortNames: [
      'Integration types','FTA vs Customs Union','Trade creation','Trade diversion','WTO role',
      'Categorise','Cause-effect','Odd one out','Data table','Match pairs'
    ],
    questions: [
      {
        type: 'mcq',
        q:    'In a Free Trade Area (FTA), member countries:',
        opts: [
          'Adopt a common external tariff against non-members',
          'Remove tariffs between themselves but each sets its own tariffs against non-members',
          'Use a single currency and a common central bank',
          'Harmonise all economic policies including fiscal and monetary'
        ],
        ans:  1,
        exp:  'In an FTA (e.g., EFTA, USMCA), barriers between members are removed, but each member maintains its own trade policy toward non-members. This is less integrated than a customs union.'
      },
      {
        type: 'mcq',
        q:    'A Customs Union differs from a Free Trade Area because it also has:',
        opts: [
          'A common currency',
          'A common external tariff applied to all non-member imports',
          'Free movement of labour and capital',
          'A unified fiscal policy'
        ],
        ans:  1,
        exp:  'A customs union (e.g., the EU customs union, Mercosur) removes internal barriers AND establishes a Common External Tariff (CET) against non-members. This adds a layer of coordination beyond an FTA.'
      },
      {
        type: 'mcq',
        q:    'Trade creation occurs when:',
        opts: [
          'A new trade barrier redirects trade to less efficient producers',
          'Joining a bloc causes a country to import from a lower-cost member instead of a higher-cost domestic producer',
          'A country creates new export markets by signing bilateral deals',
          'Trade volumes fall due to increased tariffs on imports'
        ],
        ans:  1,
        exp:  'Trade creation is a welfare gain: joining a bloc replaces expensive domestic production with cheaper imports from a more efficient bloc member. This increases specialisation and economic efficiency.'
      },
      {
        type: 'mcq',
        q:    'Trade diversion is a welfare loss because:',
        opts: [
          'It increases competition from non-member countries',
          'It redirects imports from an efficient non-member to a less efficient bloc member due to the common external tariff',
          'It causes a current account deficit to worsen',
          'It prevents firms from achieving economies of scale'
        ],
        ans:  1,
        exp:  'Trade diversion occurs when the common external tariff makes non-member imports more expensive, diverting trade to less efficient bloc producers. The net welfare effect of joining a bloc depends on whether trade creation exceeds trade diversion.'
      },
      {
        type: 'numeric_input',
        q:    'Before joining a bloc, a country imports good X at £10/unit (world price + 30% tariff = £13). After joining, it imports from a bloc member at £11 (no tariff). What is the trade creation saving per unit?',
        answer: 2,
        tolerance: 0,
        unit: '£',
        hint: 'Saving = old import cost − new import cost.',
        workingSteps: ['Old cost (domestic/tariff protected): £13','New cost (bloc member, no tariff): £11','Saving = £13 − £11 = £2 per unit']
      },
      {
        type: 'categorise',
        q:    'Categorise each level of economic integration in order from least to most integrated.',
        categories: ['Less integrated','More integrated'],
        items: [
          { item: 'Free Trade Area (remove internal tariffs)',       category: 'Less integrated' },
          { item: 'Economic Union (common policies + single market)',category: 'More integrated' },
          { item: 'Customs Union (CET + free internal trade)',       category: 'Less integrated' },
          { item: 'Monetary Union (single currency)',                category: 'More integrated' },
          { item: 'Preferential Trade Agreement (reduced tariffs)',  category: 'Less integrated' },
          { item: 'Common Market (free movement of factors)',        category: 'More integrated' }
        ]
      },
      {
        type: 'cause_effect',
        q:    'Match each trading bloc concept to its effect.',
        pairs: [
          { cause: 'Country joins customs union',               effect: 'Common external tariff applied; trade with non-members may fall' },
          { cause: 'Trade creation exceeds trade diversion',    effect: 'Net welfare gain from joining the bloc' },
          { cause: 'Single market eliminates non-tariff barriers',effect: 'Trade costs fall further; integration deepens' },
          { cause: 'WTO Most Favoured Nation principle',        effect: 'Trade concessions to one member must be extended to all' },
          { cause: 'Regional bloc forms',                       effect: 'Potential stumbling block for multilateral WTO liberalisation' },
          { cause: 'UK exits EU Single Market',                effect: 'Non-tariff barriers and customs checks raise trade costs' }
        ]
      },
      {
        type: 'odd_one_out',
        q:    'Which is the odd one out?',
        opts: ['Free Trade Area','Customs Union','Common Market','Laffer Curve'],
        ans:  3,
        exp:  'Free Trade Area, Customs Union, and Common Market are all levels of regional economic integration. The Laffer Curve is a fiscal policy concept about the tax rate–revenue relationship, not trade integration.'
      },
      {
        type: 'data_table',
        q:    'Use the cost data to identify whether joining a trading bloc creates trade or diverts it.',
        tableHeaders: ['Supplier','Unit cost before bloc (incl. tariff)','Unit cost after bloc (incl. tariff)'],
        tableData: [
          ['Domestic producer','£15','£15 (unchanged)'],
          ['Bloc member (no tariff)','£18 + 20% = £21.60','£18 (tariff removed)'],
          ['Non-member (tariff maintained)','£10 + 20% = £12','£10 + 20% = £12']
        ],
        opts: [
          'Trade creation: country switches from £15 domestic to £18 bloc member',
          'Trade diversion: country switches from £12 non-member to £18 bloc member',
          'No trade effect: domestic production is always chosen',
          'Trade creation: country switches from non-member to domestic producer'
        ],
        ans:  1,
        exp:  'After joining: cheapest source = bloc member at £18 (tariff removed). Before joining: cheapest was non-member at £12. The bloc\'s common external tariff now makes the cheaper non-member uncompetitive. This is trade diversion – a welfare loss.'
      },
      {
        type: 'match_pairs',
        q:    'Match each trading bloc term to its description.',
        pairs: [
          { a: 'Free Trade Area',    b: 'Internal tariffs removed; each member sets own external tariffs' },
          { a: 'Customs Union',      b: 'Internal free trade plus common external tariff' },
          { a: 'Common Market',      b: 'Customs union plus free movement of labour and capital' },
          { a: 'Trade creation',     b: 'Welfare gain: high-cost domestic production replaced by lower-cost bloc imports' },
          { a: 'Trade diversion',    b: 'Welfare loss: efficient non-member excluded by common external tariff' },
          { a: 'WTO',                b: 'Multilateral organisation promoting global free trade and dispute resolution' }
        ]
      }
    ]
  };

})();

