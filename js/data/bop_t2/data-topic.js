/* ============================================================
   ECONOS — content data for bop_t2
   7 cards · revision-tight · exam-edge gems flagged
   Edexcel Theme 2.1.4
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'bop_t2',
  topicNum: '1.4',
  theme: 'Theme 2 \xb7 The National and Global Economy',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'Balance of Payments',
  estTime: '9-11 minutes',
  goal: 'Lock in the three accounts, UK deficit causes, and correction policies',

  intro: {
    heroKey: 'heroExchangeRates',
    summary: "The balance of payments records all transactions between a country and the rest of the world. The UK has had a persistent current account deficit — understanding why, and what to do about it, is a recurring Paper 2 theme.",
    doInThis: 'Recap the three BoP accounts, current account components, UK deficit causes and consequences, and correction policies. Finish with a 25-mark essay scaffold.',
    outcomes: [
      'Explain the three BoP accounts and their sub-components',
      'Analyse causes of UK current account deficit',
      'Evaluate expenditure-switching vs expenditure-reducing policies'
    ],
    tip: 'These cards are revision, not first-time learning. They cue what you already know and flag the gems that lift answers from B to A*.',
    stages: [
      { num: 1, name: 'Learn it', sub: '8 concept cards',    state: 'current' },
      { num: 2, name: 'Link it',  sub: 'Apply skills with the context', state: 'locked' },
      { num: 3, name: 'Land it',  sub: 'Tackle real exam questions',    state: 'locked' }
    ]
  },

  cards: [

    /* ----- CARD 1 — Framing: the three accounts ----- */
    {
      id: 'bop-framing',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'The balance of payments: three accounts',
      lede: 'The BoP records all economic transactions between UK residents and the rest of the world. It always balances overall — but each sub-account can run a surplus or deficit.',
      branches: [
        { tone: 'green',  label: 'Current account',         sub: 'Trade in goods + trade in services + primary income (investment) + secondary income (transfers). The headline number. UK runs a persistent deficit here.' },
        { tone: 'blue',   label: 'Capital account',         sub: 'Capital transfers and non-produced non-financial assets (land, resource rights). Small for the UK. Often combined with financial account in discussion.' },
        { tone: 'amber',  label: 'Financial account',       sub: 'FDI, portfolio investment, reserve assets, financial derivatives. The UK finances its current account deficit by attracting net financial inflows. Surpluses here offset current account deficits.' }
      ],
      examEdge: {
        title: 'The BoP always balances',
        text: 'Current account deficit + financial account surplus = zero (overall). The UK runs a current account deficit financed by attracting foreign capital (FDI, portfolio inflows). A* answers note: the risk is that financial inflows can <strong>dry up or reverse</strong> — creating a sudden-stop financing crisis.'
      },
      keyTakeaway: {
        title: 'Current account = the key focus',
        text: 'Edexcel Paper 2 focuses overwhelmingly on the <strong>current account</strong>. Know its four sub-components, the UK\'s persistent deficit (~3-5% of GDP), the causes, consequences, and correction policies. The other accounts matter primarily as a financing mechanism for the current account deficit.'
      }
    },

    /* ----- CARD 2 — Current account components ----- */
    {
      id: 'current-account',
      template: 'mechanisms',
      diagramKey: 'currentAccountDiagram',
      stepLabel: 'Learn: Step 2 of 8',
      title: 'Current account: four components',
      lede: 'The current account has four distinct sub-accounts. The UK runs surpluses in some and deficits in others — the net position is what matters.',
      mechanisms: [
        {
          num: '1',
          tone: 'rose',
          title: 'Trade in goods (visible trade)',
          text: 'Physical exports minus imports. The UK runs a <strong>large goods deficit</strong> (~£150-180bn per year). UK imports more manufactured goods (cars, electronics, food) than it exports. Persistent structural deficit — reflects deindustrialisation and strong domestic consumer demand.'
        },
        {
          num: '2',
          tone: 'green',
          title: 'Trade in services (invisible trade)',
          text: 'Financial services, insurance, education, tourism, professional services. UK runs a <strong>consistent services surplus</strong> (~£100-120bn per year). London\'s financial centre and UK universities are the key drivers. But Brexit has eroded some services trade with the EU.'
        },
        {
          num: '3',
          tone: 'blue',
          title: 'Primary income',
          text: 'Investment income: profits, dividends, interest earned on overseas assets minus payments to foreign investors in the UK. UK has historically run surpluses here (returns from large overseas investment stock) — but position has deteriorated as foreign ownership of UK assets rises.'
        },
        {
          num: '4',
          tone: 'amber',
          title: 'Secondary income (current transfers)',
          text: 'Foreign aid, EU contributions, workers\' remittances. UK runs a small deficit here. Includes net contributions to international organisations and transfers between governments. Post-Brexit: no longer paying EU budget contribution — modest improvement.'
        }
      ],
      examEdge: {
        title: 'UK goods deficit is structural',
        text: 'The UK goods deficit is not cyclical — it does not close when the economy grows (it may widen). It reflects structural deindustrialisation since the 1980s. The services surplus partially offsets this but is insufficient. <strong>Brexit has eroded the services surplus</strong> through reduced EU financial passporting and lower EU student numbers — worsening the overall BoP position.'
      },
      connection: {
        title: 'Linking to AD',
        text: 'The current account = (X−M) in the AD formula. A current account deficit reduces AD ceteris paribus. Fiscal stimulus that raises domestic income → imports rise → deficit widens → net drag on AD from trade. This is why open economies have smaller fiscal multipliers.'
      }
    },

    /* ----- CARD 3 — Causes of UK current account deficit ----- */
    {
      id: 'deficit-causes',
      template: 'cause',
      tone: 'rose',
      bannerLabel: 'UK current account deficit ~3-5% of GDP',
      stepLabel: 'Learn: Step 3 of 8',
      title: 'Causes of the UK current account deficit',
      lede: "The UK has run a current account deficit almost continuously since the 1980s. Understanding the structural causes is the foundation of every BoP policy answer.",
      diagramCaption: 'UK current account deficit: persistent structural feature since deindustrialisation.',
      causes: {
        title: 'Main causes',
        items: [
          '<strong>Deindustrialisation:</strong> UK manufactures less → fewer goods exports, more goods imports. The UK shifted to services — which are harder to trade internationally.',
          '<strong>Strong consumer demand:</strong> high-income UK households have high MPM (marginal propensity to import). Rising real incomes → more imported goods. Consumption-led growth worsens the BoP.',
          '<strong>Overvalued exchange rate:</strong> if sterling is too strong, exports are expensive and imports are cheap. Sterling overvaluation has periodically widened the UK deficit.',
          '<strong>Uncompetitiveness:</strong> low productivity growth → higher unit labour costs → UK goods and services less price-competitive internationally.',
          '<strong>Brexit effects:</strong> non-tariff barriers and regulatory divergence reduced UK-EU trade. Services passport rights lost in EU financial services.'
        ]
      },
      hallmarks: {
        title: 'Distinguishing structural from cyclical deficit',
        items: [
          'Structural: persists even at full employment — reflects supply-side competitiveness',
          'Cyclical: widens in booms (imports surge with incomes), narrows in recessions',
          'UK deficit is primarily structural — it persists through the business cycle',
          'Cyclical component: UK domestic growth tends to widen the deficit further'
        ]
      },
      ukExamples: {
        title: 'UK deficit in numbers',
        text: '<strong>2015:</strong> UK current account deficit 5.2% of GDP — near-record and alarming to markets. <strong>2022:</strong> deficit widened sharply as energy import prices surged. <strong>2023:</strong> narrowed slightly as energy prices fell. But underlying structural deficit of ~3-4% of GDP remains. <strong>Comparison:</strong> Germany runs a persistent ~6-7% surplus — the inverse structural pattern.'
      },
      examEdge: {
        title: 'The J-curve note',
        text: 'After a currency depreciation, the BoP may initially worsen before improving — the <strong>J-curve effect</strong>. In the short run, import prices rise (inelastic demand) → import bill rises → deficit widens. Only as demand adjusts (elastic in long run) does the deficit improve. A* answers note this time-lag dimension of BoP correction.'
      },
      policy: {
        title: 'Why the deficit matters',
        text: 'A persistent deficit must be financed by capital inflows. If inflows dry up (confidence shock, credit tightening), sterling weakens sharply — which is inflationary and can itself cause a crisis. The UK\'s dependence on \'the kindness of strangers\' (Mervyn King) to finance its deficit is a structural vulnerability.'
      }
    },

    /* ----- CARD 4 — Consequences of a current account deficit ----- */
    {
      id: 'deficit-consequences',
      template: 'paired',
      stepLabel: 'Learn: Step 4 of 8',
      title: 'Consequences of a current account deficit',
      lede: 'A current account deficit is not automatically harmful — it can be a symptom of a healthy, growing economy. The debate is about sustainability.',
      pairs: [
        {
          tone: 'amber',
          label: 'Potential problems',
          drivers: [
            'Must be financed by capital inflows — creates dependence on foreign investors',
            'Risk of sudden-stop: if inflows reverse, sterling falls sharply, inflation rises',
            'Rising net foreign liabilities (debts to the rest of the world)',
            'Persistent import competition may crowd out domestic manufacturing',
            'Brexit has made services surplus harder to sustain'
          ],
          example: '<strong>\'Kindness of strangers\':</strong> Mervyn King warned that the UK current account deficit made it dependent on continued foreign investment. The 2016 Brexit shock caused a sharp sterling depreciation as risk appetite fell — demonstrating the vulnerability.'
        },
        {
          tone: 'green',
          label: 'Why it may not matter (the optimistic view)',
          drivers: [
            'A growing economy imports more — deficit reflects strong domestic demand',
            'UK attracts inflows because it is a stable, attractive investment destination',
            'Services surplus offsets goods deficit structurally',
            'If financed by FDI (long-term investment), more sustainable than portfolio flows',
            'The UK has run deficits for decades without crisis — markets trust the \'safe haven\' story'
          ],
          example: '<strong>USA paradox:</strong> The US has run even larger current account deficits for decades — funded by reserve currency status. The deficit reflects US consumer purchasing power and foreign demand for dollar assets. Not inherently a crisis indicator.'
        }
      ],
      examEdge: {
        title: 'The composition of financing matters',
        text: 'A* answers distinguish <strong>how</strong> the deficit is financed: FDI (foreign factories, long-term investment) is more stable than portfolio flows (hot money that can reverse quickly). If the UK deficit is financed by FDI, it is more sustainable than if financed by short-term portfolio speculation.'
      },
      policy: {
        title: 'The Lawson Doctrine (1988)',
        text: 'Chancellor Lawson argued that a current account deficit financed by private capital flows is not a problem — only government-financed deficits matter. Later challenged as private capital flows can reverse rapidly. A historical context for the debate that A* answers can deploy.'
      }
    },

    /* ----- CARD 5 — Expenditure-switching vs expenditure-reducing ----- */
    {
      id: 'bop-correction',
      template: 'mechanisms',
      stepLabel: 'Learn: Step 5 of 8',
      title: 'Correcting the current account deficit',
      lede: 'Two families of policies to reduce a current account deficit — with very different mechanisms and trade-offs.',
      mechanisms: [
        {
          num: '1',
          tone: 'green',
          title: 'Expenditure-switching (preferred)',
          text: '<strong>Switch spending from imports to domestically-produced goods.</strong> Main tools: (1) Currency depreciation — makes imports more expensive, exports cheaper. (2) Protectionism (tariffs, quotas) — raises import prices. (3) Supply-side competitiveness improvements — makes UK goods attractive without currency change. Reduces deficit without necessarily reducing output.'
        },
        {
          num: '2',
          tone: 'rose',
          title: 'Expenditure-reducing (costly)',
          text: '<strong>Reduce domestic income to reduce import demand.</strong> Main tools: (1) Fiscal austerity — reduce G, raise T → income falls → imports fall → deficit narrows. (2) Higher interest rates → lower C and I → income falls → imports fall. <strong>The problem:</strong> this also reduces domestic output and employment. The deficit improves but at real welfare cost.'
        },
        {
          num: '3',
          tone: 'blue',
          title: 'Marshall-Lerner condition',
          text: 'Currency depreciation only improves the current account if <strong>PEDx + PEDm > 1</strong> (Marshall-Lerner condition). If combined price elasticities of demand for exports and imports sum to more than 1, depreciation improves the BoP. If less than 1 (inelastic in short run), it worsens — hence the J-curve.'
        },
        {
          num: '4',
          tone: 'amber',
          title: 'Supply-side (long-run)',
          text: 'Raise UK export competitiveness through productivity improvement, R&D, and skills. Makes UK goods and services better (non-price) and cheaper (price) relative to competitors. Addresses the <em>root cause</em> of the structural deficit — low competitiveness — rather than just the symptoms.'
        }
      ],
      examEdge: {
        title: 'Expenditure-switching is the better option',
        text: 'A* answers explain why expenditure-switching is preferred: it can improve the BoP without reducing domestic output. Expenditure-reducing works but at the cost of recession and unemployment — \'correcting the BoP by impoverishing the population\' is not good economics. Always present this trade-off explicitly.'
      },
      connection: {
        title: 'The J-curve in full',
        text: 'Even expenditure-switching via depreciation has a delay (J-curve). In the short run: inelastic demand → import bill rises → BoP worsens. In the long run: demand adjusts, exports rise → BoP improves. The time lag means depreciation must be sustained for the Marshall-Lerner condition to improve the BoP. A* answers name both the condition and the curve.'
      }
    },

    /* ----- CARD 6 — BoP and exchange rate link ----- */
    {
      id: 'bop-exchange-rate',
      template: 'paired',
      stepLabel: 'Learn: Step 6 of 8',
      title: 'BoP and the exchange rate: two-way link',
      lede: "The current account and the exchange rate are linked in both directions. The exchange rate adjusts to finance the deficit — but the adjustment itself affects the deficit.",
      pairs: [
        {
          tone: 'blue',
          label: 'Deficit → downward pressure on currency',
          drivers: [
            'Current account deficit: more £ leaving country (imports) than entering (exports)',
            'Excess supply of £ on FOREX markets → £ depreciates',
            'Under floating exchange rates, this is the automatic adjustment mechanism',
            'A depreciating £ raises import prices and lowers export prices → improves BoP',
            'Self-correcting in theory — but J-curve means the adjustment is slow'
          ],
          example: '<strong>Post-Brexit sterling:</strong> £ fell ~15-20% against USD and EUR after 2016 vote. Should have improved BoP via expenditure-switching. But non-price barriers from Brexit offset the price effect — BoP did not improve as much as the depreciation implied.'
        },
        {
          tone: 'green',
          label: 'Exchange rate → affects BoP',
          drivers: [
            'Depreciation: exports cheaper, imports dearer — improves BoP (if M-L holds)',
            'Appreciation: exports dearer, imports cheaper — worsens BoP',
            'In managed systems: government can deliberately depreciate to correct BoP',
            'But: depreciation raises import cost inflation (SRAS shifts left)',
            'Trade-off: BoP improvement vs domestic inflation from import prices'
          ],
          example: '<strong>China currency intervention:</strong> China historically held RMB below its equilibrium value to keep exports competitive. This maintained their current account surplus artificially — the \'currency wars\' debate of the 2000s-10s.'
        }
      ],
      examEdge: {
        title: 'Depreciation: BoP vs inflation trade-off',
        text: "Sterling depreciation is the standard BoP correction under floating exchange rates. But A* answers note the trade-off: <em>'While depreciation improves export competitiveness (X rises), it raises import prices, pushing SRAS left and causing cost-push inflation. The MPC may need to raise rates to contain this — partially offsetting the BoP benefit.'</em>"
      },
      policy: {
        title: 'Why the UK doesn\'t manipulate the currency',
        text: 'The UK has a freely floating exchange rate — the government does not intervene to set the pound\'s value. This means BoP adjustment must occur through: (a) automatic depreciation, (b) expenditure-reducing policies (demand management), or (c) supply-side reform. No \'easy\' exchange rate fix is available.'
      }
    },

    /* ----- CARD 7 — Evaluating BoP policies ----- */
    {
      id: 'bop-evaluation',
      template: 'deflation',
      stepLabel: 'Learn: Step 7 of 8',
      title: 'Evaluating BoP correction policies',
      lede: "Correcting a current account deficit involves trade-offs with other macro objectives. The evaluation structure below applies to any BoP correction question.",
      mechanismsTitle: 'Key evaluation points for BoP correction',
      mechanisms: [
        {
          icon: '📉',
          title: 'Expenditure-reducing causes recession',
          text: 'Fiscal austerity or monetary tightening to reduce imports also reduces output and employment. The IMF has documented cases where BoP correction via austerity led to deeper-than-expected recessions — a high welfare cost for deficit reduction.'
        },
        {
          icon: '📈',
          title: 'Depreciation causes inflation',
          text: 'Sterling depreciation raises import prices → SRAS shifts left → cost-push inflation. The MPC may need to tighten to contain this — offsetting the depreciation\'s competitiveness benefit. The net BoP improvement may be smaller than the exchange rate move suggests.'
        },
        {
          icon: '⏳',
          title: 'J-curve: improvement is delayed',
          text: 'Even when the Marshall-Lerner condition holds, the BoP initially worsens before improving. Import bills rise immediately (fixed contracts, inelastic demand). Export volumes rise only as price changes work through. Timeline: 12-24 months before BoP improvement materialises.'
        },
        {
          icon: '🌍',
          title: 'Protectionism causes retaliation',
          text: 'Using tariffs to switch expenditure risks trade war retaliation — partners impose their own tariffs, reducing UK exports. Net effect on BoP is ambiguous. WTO rules also constrain unilateral protectionism. Brexit illustrated the complexity: UK gained tariff-setting freedom but at cost of trade friction.'
        }
      ],
      examples: {
        title: 'BoP correction episodes',
        items: [
          { period: 'UK 1967 devaluation', text: '14.3% devaluation of sterling. Initial J-curve effect — BoP worsened for 12 months before improving. Showed the time-lag problem of exchange-rate-based correction.' },
          { period: 'IMF structural adjustment 1970s-90s', text: 'Many developing countries forced to cut deficits via austerity. Often produced sharp recessions — \'successful\' BoP correction at high welfare cost. Led to \'Washington Consensus\' critique.' },
          { period: 'Post-2016 UK', text: '15-20% sterling depreciation. Import prices rose → CPI spiked to 3%. But non-price Brexit barriers limited export improvement. Partial J-curve improvement, offset by structural trade damage.' }
        ]
      },
      examEdge: {
        title: 'The policy hierarchy for BoP correction',
        text: "A* BoP evaluation structure: <em>'The preferred correction approach is expenditure-switching via improved competitiveness (supply-side) — it improves the BoP without reducing output. Currency depreciation is a faster route but risks inflation. Expenditure-reducing (austerity/rate rises) corrects the deficit but at the cost of recession. The optimal policy depends on whether the deficit is structural (supply-side needed) or cyclical (demand management appropriate).'</em>"
      },
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself &#8594;' }
    }

  ]
};
