/* ============================================================
   ECONOS — content data for globalisation
   7 cards · revision-tight · exam-edge gems flagged
   Edexcel Theme 4.1
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'globalisation',
  topicNum: '1.1',
  theme: 'Theme 4 \xb7 A Global Perspective',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'Globalisation',
  estTime: '9-11 minutes',
  goal: 'Lock in the causes, benefits, costs and the de-globalisation debate',

  intro: {
    heroKey: 'heroGlobe',
    summary: "Globalisation has transformed every economy on earth over the past 50 years. Understanding its causes, winners, losers, and growing political backlash is essential for every international economics question.",
    doInThis: 'Recap the characteristics and causes of globalisation, its benefits and costs for developed and developing countries, and the de-globalisation trend.',
    outcomes: [
      'Explain the main characteristics and causes of globalisation',
      'Evaluate the benefits and costs for developed and developing economies',
      'Assess the evidence for de-globalisation and its causes'
    ],
    tip: 'These cards are revision, not first-time learning. They cue what you already know and flag the gems that lift answers from B to A*.',
    stages: [
      { num: 1, name: 'Learn it', sub: '8 concept cards',    state: 'current' },
      { num: 2, name: 'Link it',  sub: 'Apply skills with the context', state: 'locked' },
      { num: 3, name: 'Land it',  sub: 'Tackle real exam questions',    state: 'locked' }
    ]
  },

  cards: [

    /* ----- CARD 1 — Framing: what is globalisation? ----- */
    {
      id: 'globalisation-framing',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'Globalisation: the interconnection of economies',
      lede: 'Globalisation describes the growing integration of economies worldwide — through trade, capital flows, migration, and information. It is a process, not an event.',
      branches: [
        { tone: 'green',  label: 'Trade integration',     sub: 'World trade has grown faster than world GDP since 1945. Global supply chains mean one product may cross 10+ borders. Trade-to-GDP ratios have roughly doubled since 1960.' },
        { tone: 'blue',   label: 'Capital integration',   sub: 'Financial capital moves globally in milliseconds. FDI, portfolio flows, and lending cross borders at unprecedented scale. UK financial account inflows finance the current account deficit.' },
        { tone: 'amber',  label: 'Labour integration',    sub: 'International migration has increased — EU free movement, guest workers, skilled migration schemes. Labour markets are increasingly global in high-skill sectors (finance, tech, medicine).' }
      ],
      examEdge: {
        title: 'Globalisation has a cultural dimension too',
        text: 'Beyond economics: globalisation involves the spread of <strong>cultures, technologies, and ideas</strong> — standardised products (McDonald\'s, iPhone), global media, English as a business language. A* answers note that resistance to globalisation is often cultural as well as economic, driving the political backlash.'
      },
      keyTakeaway: {
        title: 'Scale of the change',
        text: "World merchandise exports: $58bn (1948) → $24 trillion (2023). FDI flows: $13bn (1970) → $1.3 trillion (2023). The scale of integration has no historical precedent. But globalisation is not irreversible — the 2008 crisis and COVID showed it can contract."
      }
    },

    /* ----- CARD 2 — Causes of globalisation ----- */
    {
      id: 'globalisation-causes',
      template: 'mechanisms',
      diagramKey: 'globalisationDiagram',
      stepLabel: 'Learn: Step 2 of 8',
      title: 'Causes of globalisation',
      lede: 'Globalisation has been driven by technological change, policy liberalisation, and the rise of multinational corporations. These forces reinforce each other.',
      mechanisms: [
        {
          num: '1',
          tone: 'green',
          title: 'Technological change',
          text: '<strong>Transport:</strong> shipping containerisation (1960s) cut freight costs by ~90%. Jet aviation made international business viable. <strong>Communications:</strong> internet, mobile, satellite — made global coordination of production feasible and cheap. Real-time global supply chain management is now routine.'
        },
        {
          num: '2',
          tone: 'blue',
          title: 'Trade liberalisation',
          text: '<strong>GATT/WTO:</strong> successive trade rounds (Kennedy, Tokyo, Uruguay) reduced average tariffs from ~40% (1947) to ~3% (2023). Regional trade agreements (EU single market, NAFTA/USMCA, CPTPP) further reduced barriers within blocs. More open borders → more trade.'
        },
        {
          num: '3',
          tone: 'amber',
          title: 'Multinational corporations (MNCs)',
          text: 'MNCs drive globalisation by locating production where costs are lowest, selling in the largest markets, and moving capital where returns are highest. They create global supply chains. Top 100 MNCs account for ~10% of world GDP. Apple\'s supply chain spans 43 countries.'
        },
        {
          num: '4',
          tone: 'rose',
          title: 'Financial deregulation',
          text: 'Removal of capital controls (UK Big Bang 1986, Japan\'s Financial Big Bang 1996) allowed free movement of capital. Financial innovation created new instruments for cross-border investment. Capital flows are now the largest component of BoP flows — dwarfing trade flows.'
        }
      ],
      examEdge: {
        title: 'Technology was the enabler, policy was the choice',
        text: "A* answers distinguish technology (which made globalisation possible) from policy (which chose to allow it). The 1970s stagflation-era capital controls blocked globalisation despite available technology. It was <strong>deliberate policy choices</strong> to liberalise — not just technology — that drove integration. This supports the view that de-globalisation is also a policy choice."
      },
      connection: {
        title: 'The China factor',
        text: 'China\'s WTO accession (2001) was the single biggest globalisation event of the past 30 years. It added 1.3bn workers to the global tradeable labour market overnight — dramatically cutting manufactured goods prices worldwide (the China Price).'
      }
    },

    /* ----- CARD 3 — Benefits of globalisation ----- */
    {
      id: 'globalisation-benefits',
      template: 'cause',
      tone: 'green',
      bannerLabel: 'Benefits of globalisation',
      stepLabel: 'Learn: Step 3 of 8',
      title: 'Benefits of globalisation',
      lede: 'Globalisation has produced the most dramatic reduction in absolute poverty in human history — while also generating new inequalities and vulnerabilities.',
      diagramCaption: 'Global extreme poverty: 36% (1990) → 10% (2023). Linked to trade integration.',
      causes: {
        title: 'Economic benefits',
        items: [
          '<strong>Gains from specialisation and comparative advantage:</strong> countries produce what they are relatively best at → global output rises. Standard Ricardo model — supported empirically by trade economists.',
          '<strong>Scale economies:</strong> larger global markets allow longer production runs → lower average costs → lower prices for consumers.',
          '<strong>Technology transfer:</strong> MNCs bring technology, management practices, and know-how to host countries — particularly important for developing economies.',
          '<strong>Competition:</strong> global competition disciplines domestic firms → efficiency improvements, innovation. Reduces monopoly power in domestic markets.',
          '<strong>Consumer choice and lower prices:</strong> imported goods expand choice and reduce prices — especially in electronics, clothing, food. Real wages buy more.'
        ]
      },
      hallmarks: {
        title: 'Development evidence',
        items: [
          'East Asian miracle: South Korea, Taiwan, Singapore used export-led growth to achieve rapid development',
          'China: lifted 800m+ people out of extreme poverty 1990-2020 — the largest poverty reduction in history',
          'Global extreme poverty rate: 36% (1990) → 10% (2023) — unprecedented humanitarian achievement',
          'Remittances: migrant workers send money home — $800bn+ per year globally, exceeding foreign aid'
        ]
      },
      ukExamples: {
        title: 'UK benefits',
        text: '<strong>Consumer prices:</strong> globalisation held down UK inflation for 20 years (1990-2010) — the \'China price\' effect. <strong>Financial services:</strong> London\'s role as a global financial hub generated enormous income and tax revenue. <strong>Inward FDI:</strong> Nissan (Sunderland), Toyota (Derby), Honda (Swindon) — manufacturing jobs from Japanese FDI into the UK.'
      },
      examEdge: {
        title: 'Growth without welfare improvement?',
        text: 'A* answers distinguish aggregate benefits from distributional ones: <em>\'While globalisation has raised global GDP, many workers in deindustrialised regions (US Rust Belt, UK North) have lost manufacturing jobs. The benefits have flowed disproportionately to high-skill workers and capital owners — raising inequality within developed countries even as global inequality falls.\'</em>'
      },
      policy: {
        title: 'The compensation failure',
        text: 'Economists have long argued that trade winners can compensate losers while still gaining overall. But the compensation has rarely happened in practice — generating the political backlash (Brexit, Trump) that has driven the de-globalisation trend. A* answers connect the distributional failure to the political response.'
      }
    },

    /* ----- CARD 4 — Costs of globalisation ----- */
    {
      id: 'globalisation-costs',
      template: 'paired',
      stepLabel: 'Learn: Step 4 of 8',
      title: 'Costs of globalisation',
      lede: 'Globalisation creates winners and losers. The costs fall unevenly — by country, sector, and income group — and have driven the most significant political backlash in decades.',
      pairs: [
        {
          tone: 'rose',
          label: 'Costs for developed countries',
          drivers: [
            'Deindustrialisation: manufacturing jobs move to lower-wage economies',
            'Structural unemployment: displaced workers often lack skills for new service jobs',
            'Wage pressure on low-skilled workers: competition from low-wage countries',
            'Increased inequality: capital gains; high-skill gains; low-skill loses',
            'Tax competition: MNCs shift profits to low-tax jurisdictions (Ireland, Luxembourg)',
            'Financial contagion: integrated financial markets spread crises globally (2008)'
          ],
          example: '<strong>US Rust Belt:</strong> China\'s WTO accession (2001) contributed to ~2-3m US manufacturing job losses 2001-10. The \'China Shock\' (Autor et al.) showed local labour markets in import-competing regions suffered long-lasting unemployment — without recovery even decades later.'
        },
        {
          tone: 'amber',
          label: 'Costs for developing countries',
          drivers: [
            'Primary product dependency: many still export commodities with volatile prices',
            'Structural weakness: manufacturing FDI can leave when wages rise (footloose capital)',
            'Brain drain: skilled workers emigrate → loss of human capital',
            'Environmental standards: pressure to lower environmental regulations to attract FDI',
            'Cultural homogenisation: Western cultural dominance at expense of local cultures',
            'Prebisch-Singer hypothesis: terms of trade deteriorate for commodity exporters over time'
          ],
          example: '<strong>Sub-Saharan Africa:</strong> many countries remain locked in primary commodity exports despite decades of globalisation. Commodity price volatility creates boom-bust cycles. Terms of trade have deteriorated — manufactured imports cost more in commodity-export terms. The gains from globalisation have been very unequal across the developing world.'
        }
      ],
      examEdge: {
        title: 'The distributional critique',
        text: 'The standard economic argument that globalisation raises global welfare is defensible in aggregate. A* answers add the crucial distributional layer: <em>\'While the global Gini coefficient has fallen (global inequality between countries narrowed), within-country inequality has risen in most developed economies — suggesting the gains from globalisation have not been equally shared.\'</em>'
      },
      policy: {
        title: 'Policy response options',
        text: 'Governments can respond to globalisation\'s costs by: (1) compensating losers through redistribution and retraining, (2) protecting import-competing industries (protectionism), (3) shaping the terms of integration (industrial policy, FDI screening). Each involves trade-offs discussed in subsequent topics.'
      }
    },

    /* ----- CARD 5 — Globalisation and developing countries ----- */
    {
      id: 'globalisation-developing',
      template: 'mechanisms',
      stepLabel: 'Learn: Step 5 of 8',
      title: 'Globalisation and economic development',
      lede: "Globalisation's impact on developing countries is complex and contested. It has created enormous opportunities — but access to those opportunities is unequal.",
      mechanisms: [
        {
          num: '1',
          tone: 'green',
          title: 'Export-led growth strategy',
          text: 'The most successful developing countries (South Korea, China, Vietnam) used export-oriented industrialisation — attracting FDI, building manufacturing capacity, and using export revenues to fund investment. Globalisation enabled this strategy by providing market access for their manufactured goods.'
        },
        {
          num: '2',
          tone: 'blue',
          title: 'FDI and technology transfer',
          text: 'Inward FDI brings capital, technology, and management practices — raising productivity in the host economy. MNCs employ local workers, create local supply chains, and demonstrate production techniques. But benefits depend on local absorptive capacity — education, infrastructure, institutions.'
        },
        {
          num: '3',
          tone: 'amber',
          title: 'The Prebisch-Singer hypothesis',
          text: 'Prebisch and Singer argued that <strong>terms of trade deteriorate for developing countries</strong> over time — primary commodity prices fall relative to manufactured goods. This means commodity exporters must sell more to buy the same manufactured imports. Evidence: mixed, but commodity price volatility remains a development constraint.'
        },
        {
          num: '4',
          tone: 'rose',
          title: 'Footloose capital and vulnerability',
          text: 'Manufacturing FDI can leave when wages rise — MNCs move to lower-cost locations (China → Vietnam → Bangladesh). Countries must continuously upgrade productivity and skills to stay competitive as labour costs rise. Failure to do so risks being left behind as production shifts elsewhere.'
        }
      ],
      examEdge: {
        title: 'The differential development impact',
        text: "A* answers note that globalisation's impact on development varies enormously: <em>'Countries with strong institutions, educated workforces, and strategic industrial policy (South Korea, China) used globalisation to achieve rapid development. Countries reliant on primary commodity exports with weak institutions (many Sub-Saharan African nations) have benefited far less — and some have been harmed by terms of trade deterioration and capital flight.'</em>"
      },
      connection: {
        title: 'Link to development strategies',
        text: 'The debate over globalisation and development parallels the debate between inward-oriented (import substitution industrialisation) and outward-oriented (export-led) development strategies. Globalisation makes the outward strategy viable — but only if countries can access markets and attract investment on fair terms.'
      }
    },

    /* ----- CARD 6 — De-globalisation ----- */
    {
      id: 'de-globalisation',
      template: 'cause',
      tone: 'rose',
      bannerLabel: 'The reversal trend',
      stepLabel: 'Learn: Step 6 of 8',
      title: 'De-globalisation: slowing and reversing?',
      lede: "Since 2008, globalisation has slowed. Since 2016, it has partially reversed. The forces driving de-globalisation are political, economic, and geopolitical — and may be structural rather than cyclical.",
      diagramCaption: 'World trade as % of GDP peaked ~2008 and has not recovered to pre-crisis trajectory.',
      causes: {
        title: 'Causes of de-globalisation',
        items: [
          '<strong>Political backlash:</strong> Brexit, Trump tariffs, nationalist movements — voters who lost from globalisation vote to reverse it.',
          '<strong>Trade wars:</strong> US-China trade war (2018-present) → tariffs of 25%+ on $hundreds of billions of goods. Has reduced bilateral trade and disrupted supply chains.',
          '<strong>COVID-19 supply chain shock (2020-21):</strong> exposed fragility of \'just-in-time\' global supply chains. Shortages of PPE, semiconductors, pharmaceuticals. Prompted \'reshoring\' and \'friend-shoring\' debates.',
          '<strong>Geopolitical fragmentation:</strong> Russia-Ukraine war, US-China tech decoupling, sanctions regimes. Governments increasingly see supply chain security as a national security issue.',
          '<strong>Technological change:</strong> automation may reduce the cost advantage of low-wage countries — reducing the incentive for offshore manufacturing.'
        ]
      },
      hallmarks: {
        title: 'Evidence for de-globalisation',
        items: [
          'World trade-to-GDP ratio: peaked ~2008 at ~61%, fallen to ~57% by 2023',
          'FDI flows: volatile and below pre-2008 trend',
          'US-China semiconductor decoupling: export controls, CHIPS Act, \'trusted supply chains\'',
          'Brexit: UK-EU trade fell 15-20% in goods immediately after; services passport rights lost'
        ]
      },
      ukExamples: {
        title: 'UK de-globalisation: Brexit',
        text: '<strong>Brexit is the UK\'s de-globalisation experiment.</strong> Trade in goods with EU fell significantly in 2021 (new non-tariff barriers). UK financial services lost EU passporting rights. Migration from EU fell. Trade has partially adapted (more non-EU trade) but total UK trade as % of GDP has fallen relative to trend. CEBR estimates 4% of GDP long-run cost. A real-time test of de-globalisation consequences.'
      },
      examEdge: {
        title: 'De-globalisation: cyclical or structural?',
        text: 'A* answers evaluate whether de-globalisation is a temporary pause (cyclical) or a structural shift. <em>\'If driven primarily by political cycles (Trump, Brexit), de-globalisation may be partially reversed. If driven by geopolitical fragmentation (US-China tech war, sanctions) and supply chain security priorities, it may be structural — representing a fundamental re-ordering of the global economy.\'</em>'
      },
      policy: {
        title: 'Policy response: reshoring and friend-shoring',
        text: 'Governments are incentivising \'reshoring\' (returning production home) and \'friend-shoring\' (relocating supply chains to allied countries). US CHIPS Act ($53bn), EU Critical Raw Materials Act, UK semiconductor strategy. Industrial policy is back — a significant reversal of 40 years of market-led globalisation.'
      }
    },

    /* ----- CARD 7 — MNCs: engines of globalisation ----- */
    {
      id: 'mncs',
      template: 'paired',
      stepLabel: 'Learn: Step 7 of 8',
      title: 'Multinational corporations: power and controversy',
      lede: 'MNCs are the primary vehicle through which globalisation operates. They are simultaneously engines of development and objects of fierce criticism.',
      pairs: [
        {
          tone: 'green',
          label: 'MNCs: benefits for host countries',
          drivers: [
            'Employment creation: direct jobs and local supply chain jobs',
            'Technology and know-how transfer',
            'Export platform: MNC products sold globally, generating forex',
            'Tax revenues (though contested): corporation tax, employer NI',
            'Infrastructure investment: often fund local roads, utilities',
            'Demonstration effect: improves local business practices'
          ],
          example: '<strong>Nissan Sunderland:</strong> largest single car plant in UK; 8,000 direct employees; 30,000+ in supply chain. Brought Japanese lean manufacturing practices. Exports 80% of output. Transformed North East England\'s industrial base after 1980s deindustrialisation.'
        },
        {
          tone: 'amber',
          label: 'MNCs: costs and criticisms',
          drivers: [
            'Tax avoidance: profit-shifting to low-tax jurisdictions via transfer pricing',
            'Repatriation of profits: reduces host country\'s GNI relative to GDP',
            'Labour exploitation: low wages, poor conditions in some developing-country operations',
            'Environmental standards: may seek weak-regulation destinations',
            'Political influence: lobby for regulations that favour incumbents',
            'Race to the bottom: countries compete by lowering standards to attract FDI'
          ],
          example: '<strong>Apple\'s tax structure (2016 EU ruling):</strong> Apple paid effective 0.005% tax on EU profits routed through Ireland. EU ordered €13bn in back taxes. Illustrates profit-shifting scale — MNCs can route profits through low-tax jurisdictions, depriving host countries of tax revenue even while generating local economic activity.'
        }
      ],
      examEdge: {
        title: 'The net welfare test for MNC FDI',
        text: "A* MNC evaluation uses a net welfare test: <em>'Whether FDI is beneficial depends on whether the employment, technology, and export benefits outweigh the tax leakage, profit repatriation, and environmental costs — which in turn depends on host country institutions, regulation, and bargaining power.'</em> Context-specific evaluation always outscores generic lists."
      },
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself &#8594;' }
    }

  ]
};
