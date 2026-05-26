window.ECONOS_TOPIC = {
  id: 'balance_of_payments',
  topicNum: '1.7',
  theme: 'Theme 4 · A Global Perspective',
  title: 'Balance of Payments',
  estTime: '10-12 minutes',
  goal: 'Understand the structure of the balance of payments, the causes and consequences of current account deficits, and the policies available to correct imbalances — including the J-curve effect.',

  intro: {
    heroKey: 'heroTrade',
    summary: 'The balance of payments records every economic transaction between a country and the rest of the world. The current account (trade in goods and services, income flows, transfers) is the most exam-relevant component. Persistent deficits or surpluses raise policy questions about competitiveness, exchange rates, and macro balance.',
    doInThis: 'Covering the three BoP accounts, the four components of the current account, causes and consequences of deficits, correction policies (expenditure-switching vs expenditure-reducing vs supply-side), the J-curve effect, and the link between the current account and the exchange rate.',
    outcomes: [
      'Identify the three accounts of the BoP and explain why it always sums to zero',
      'Break the current account into its four components and explain the UK pattern',
      'Distinguish structural from cyclical causes of a current account deficit',
      'Evaluate the consequences of a persistent deficit (benign vs concern views)',
      'Compare correction policies by speed, cost and durability',
      'Explain the J-curve and state the Marshall–Lerner condition',
      'Explain the two-way link between the current account and the exchange rate'
    ],
    tip: 'The BoP always sums to zero: a current account deficit must be matched by a capital + financial account surplus. The real exam question is always whether a deficit is sustainable — that depends on how it is financed and what it reflects.',
    stages: [
      { num: 1, name: 'Learn it', sub: '8 cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },

  cards: [

    /* ── CARD 1 ── The three accounts ─────────────────────────────── */
    {
      id: 'three-accounts',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'The three accounts',
      lede: 'The Balance of Payments (BoP) records all economic transactions between UK residents and the rest of the world over a period of time.',
      ledeStyle: 'plain',

      tip: { icon: '✅', tone: 'green', text: 'The BoP always sums to zero – a deficit on current must be financed by surpluses elsewhere.' },

      causesFirst: true,
      causesLabel: 'THE THREE ACCOUNTS',
      causesEmoji: '⚙️',
      causesStyle: 'numbered',
      causes: [
        {
          tone: 'blue',
          icon: '🛒',
          head: 'Current Account',
          body: 'Trade in goods and services, plus income and transfers.<ul style="margin:8px 0 0 14px;font-size:13px;line-height:1.65;"><li><strong>Goods</strong> (visible trade)</li><li><strong>Services</strong> (invisible trade)</li><li><strong>Primary income</strong> (investment earnings)</li><li><strong>Secondary income</strong> (transfers)</li></ul>',
          example: 'UK runs a persistent goods deficit but a services surplus.'
        },
        {
          tone: 'amber',
          icon: '🏦',
          head: 'Capital Account',
          body: 'Small in value. Records capital transfers and asset transactions.<ul style="margin:8px 0 0 14px;font-size:13px;line-height:1.65;"><li>Debt forgiveness</li><li>Migrant transfers</li><li>Acquisition / disposal of non-produced assets</li></ul>',
          example: 'Typically a small surplus or deficit.'
        },
        {
          tone: 'purple',
          icon: '📈',
          head: 'Financial Account',
          body: 'Investment flows that finance current account imbalances.<ul style="margin:8px 0 0 14px;font-size:13px;line-height:1.65;"><li>Foreign direct investment (FDI)</li><li>Portfolio investment</li><li>Other investment (loans, deposits, trade credit)</li><li>Official reserves</li></ul>',
          example: 'Usually offsets the current account balance.'
        }
      ],

      flowTitle: 'THE BALANCE: ALWAYS ZERO',
      flowEmoji: '⚖️',
      flow: [
        { icon: '📉', title: 'Current Account', sub: '(deficit) − £70bn' },
        { icon: '⚖️', title: 'Capital Account',  sub: '(balance) ±small' },
        { icon: '📈', title: 'Financial Account', sub: '(surplus) + £70bn' },
        { icon: '✅', title: 'Always Zero',        sub: 'BoP = 0 by definition' }
      ],

      whyItMatters: {
        title: 'WHERE DOES THE MONEY COME FROM?',
        emoji: '💰',
        items: [
          { tone: 'blue',   icon: '🌐', label: 'Foreign investors',  text: 'Buy UK assets (FDI, shares, bonds).' },
          { tone: 'blue',   icon: '🤝', label: 'Overseas lenders',   text: 'Provide loans to UK firms or government.' },
          { tone: 'amber',  icon: '🏦', label: 'Central bank',       text: 'Uses reserves or borrows from abroad.' },
          { tone: 'amber',  icon: '💰', label: 'UK sells assets',    text: 'Sells assets abroad to raise finance.' },
          { tone: 'purple', icon: '💳', label: 'Trade credit',       text: 'Deposits from overseas partners.' }
        ]
      },

      conclusion: {
        title: 'Flow, not a stock',
        text: 'The BoP is a flow balance, not a stock. It shows flows in and out of the UK with the rest of the world over a time period — not a cumulative balance sheet.'
      },

      examEdge: {
        title: 'Exam edge',
        text: 'Always check the sign. A current account deficit (−) must be matched by a financial account surplus (+) plus any small capital account balance. If the question gives you one, you can infer the other.'
      }
    },

    /* ── CARD 2 ── Current account: four components ─────────────── */
    {
      id: 'ca-components',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 2 of 8',
      title: 'Current account: four components',
      lede: 'The current account records the UK\'s transactions with the rest of the world in four parts. Getting the breakdown right is key to diagnosis and policy.',
      ledeStyle: 'plain',

      tip: { icon: '✅', tone: 'green', text: 'The UK runs a persistent goods deficit but a services surplus overall.' },

      causesFirst: true,
      causesLabel: 'THE FOUR COMPONENTS',
      causesEmoji: '🧩',
      causesStyle: 'numbered',
      causes: [
        {
          tone: 'blue',
          icon: '📦',
          head: 'Goods',
          body: '(visible trade) Exports and imports of physical goods.',
          example: 'Cars, machinery, oil, food. UK trend: <strong>persistent deficit ↓</strong>'
        },
        {
          tone: 'amber',
          icon: '✈️',
          head: 'Services',
          body: '(invisible trade) Trade in non-physical services.',
          example: 'Finance, tourism, education, IT, insurance. UK trend: <strong>persistent surplus ↑</strong>'
        },
        {
          tone: 'green',
          icon: '💰',
          head: 'Primary income',
          body: 'Income earned on investments and employment abroad.',
          example: 'Investment income, profits, interest, wages of UK workers abroad. UK trend: <strong>small deficit ↓</strong>'
        },
        {
          tone: 'purple',
          icon: '🤝',
          head: 'Secondary income',
          body: 'Current transfers that do not involve goods, services or assets.',
          example: 'Aid, remittances, EU transfers. UK trend: <strong>small deficit ↓</strong>'
        }
      ],

      flowTitle: 'HOW THEY ADD UP',
      flowEmoji: '➕',
      flowSep: ['+', '+', '+', '='],
      flow: [
        { icon: '📦', title: 'Goods',             sub: '−£130bn', tone: 'blue'   },
        { icon: '✈️', title: 'Services',           sub: '+£110bn', tone: 'amber'  },
        { icon: '💰', title: 'Primary income',     sub: '−£35bn',  tone: 'green'  },
        { icon: '🤝', title: 'Secondary income',   sub: '−£15bn',  tone: 'purple' },
        { icon: '⚖️', title: 'Total current acct', sub: '−£70bn',  tone: 'blue'   }
      ],

      comparisonTable: {
        title: 'UK CURRENT ACCOUNT SNAPSHOT',
        emoji: '📊',
        columns: ['Position', '% of GDP'],
        columnTones: ['blue', 'amber'],
        rows: [
          { label: '📦 Goods',             values: ['−£130bn', '−3.8%'] },
          { label: '✈️ Services',           values: ['+£110bn', '+3.2%'] },
          { label: '💰 Primary income',    values: ['−£35bn',  '−1.0%'] },
          { label: '🤝 Secondary income',  values: ['−£15bn',  '−0.5%'] },
          { label: '⚖️ Total current acct', values: ['−£70bn (deficit)', '−2.1%'] }
        ]
      },

      whyItMatters: {
        title: 'KEY TAKEAWAYS',
        emoji: '🔑',
        items: [
          { tone: 'green',  icon: '✈️', label: 'Services: UK strength',  text: 'Financial and professional services generate a large persistent surplus.' },
          { tone: 'rose',   icon: '📦', label: 'Goods: UK weakness',     text: 'Manufacturing decline means a large and persistent goods deficit.' },
          { tone: 'blue',   icon: '🔍', label: 'Use all four components', text: 'Looking at all four gives the real picture — trade in goods alone is not the current account.' }
        ]
      },

      examEdge: {
        title: 'Exam move',
        text: 'Do not confuse <strong>trade in goods</strong> with the whole current account. Always break it into all four components — and note that the UK\'s services surplus substantially offsets its goods deficit.'
      }
    },

    /* ── CARD 3 ── Causes of the current account deficit ─────────── */
    {
      id: 'ca-causes',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 3 of 8',
      title: 'Causes of the current account deficit',
      lede: 'Current-account deficits can arise from structural weaknesses or cyclical demand conditions. The UK\'s deficit is mainly structural.',
      ledeStyle: 'plain',

      tip: { icon: '🔒', tone: 'green', text: 'The UK\'s current-account deficit is mainly structural, not just cyclical.' },

      pairFirst: true,
      pairLabel: 'STRUCTURAL VS CYCLICAL',
      pairEmoji: '⚖️',
      left: {
        tone: 'blue',
        icon: '🏭',
        iconStyle: 'circle',
        label: 'Structural causes',
        text: '<ul style="margin:6px 0 0 14px;font-size:13px;line-height:1.7;color:#0B1426;"><li>Deindustrialisation and shrinking tradable sector</li><li>Low savings ratio relative to investment</li><li>Uncompetitive manufacturing / weak non-price competitiveness</li><li>Persistent productivity gap with key partners</li></ul><p style="margin:10px 0 0;font-size:12px;color:#1E40AF;font-weight:600;">ℹ️ Persist even when the economy slows.</p>'
      },
      right: {
        tone: 'amber',
        icon: '📊',
        iconStyle: 'circle',
        label: 'Cyclical causes',
        text: '<ul style="margin:6px 0 0 14px;font-size:13px;line-height:1.7;color:#0B1426;"><li>Strong consumer spending</li><li>Booming credit / wealth effects</li><li>Strong exchange rate raising imports and lowering exports</li><li>Rapid economic growth sucking in imports</li></ul><p style="margin:10px 0 0;font-size:12px;color:#B45309;font-weight:600;">ℹ️ Tend to fade as the cycle turns.</p>'
      },

      flowTitle: 'THE UK MECHANISM',
      flowEmoji: '⚙️',
      flow: [
        { icon: '🐷', title: 'Low savings + weak manufacturing',       sub: 'Structural competitiveness problem' },
        { icon: '⚖️', title: 'Imports exceed exports',                  sub: 'Domestic demand leaks abroad' },
        { icon: '📉', title: 'Persistent current-account deficit',      sub: 'Structural, not just cyclical' }
      ],

      whyItMatters: {
        title: 'WHY MOSTLY STRUCTURAL?',
        emoji: '🔍',
        items: [
          { tone: 'blue',   icon: '📆', label: 'Persistent goods deficit', text: 'The goods deficit has persisted for years, across booms and recessions.' },
          { tone: 'amber',  icon: '⚖️', label: 'Services only partly offsets', text: 'The services surplus is large but not large enough to close the gap.' },
          { tone: 'green',  icon: '🔄', label: 'Outside booms too',        text: 'Deficit remains even when growth is weak — cyclical demand is not the driver.' }
        ]
      },

      summaryRow: [
        { tone: 'amber', icon: '⚠️', title: 'Exam move', text: 'Distinguish structural from cyclical. Explain that policy differs by cause. Do not equate the current account with trade in goods alone.' }
      ],

      conclusion: {
        title: 'Big idea',
        text: 'A structural deficit points to competitiveness and savings problems, so long-run supply-side repair matters more than a short-term demand squeeze alone.'
      },

      examEdge: {
        title: 'Exam edge',
        text: 'Top-band answers say the UK deficit is largely structural, then evaluate whether cyclical weakness or strength may temporarily widen or narrow it.'
      }
    },

    /* ── CARD 4 ── Consequences of a current account deficit ─────── */
    {
      id: 'ca-consequences',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 4 of 8',
      title: 'Consequences of a current account deficit',
      lede: 'A deficit can signal either weakness or strength – the judgement depends on how it is financed and whether it is sustainable.',
      ledeStyle: 'plain',

      tip: { icon: '🔒', tone: 'green', text: 'A deficit is not automatically bad – but persistent borrowing can become a concern.' },

      pairFirst: true,
      pairLabel: 'TWO WAYS TO READ IT',
      pairEmoji: '⚖️',
      left: {
        tone: 'green',
        icon: '👍',
        iconStyle: 'circle',
        label: 'Benign view',
        text: '<ul style="margin:6px 0 0 14px;font-size:13px;line-height:1.7;color:#0B1426;"><li>Financed by inward investment</li><li>Can reflect strong domestic demand</li><li>Allows spending above current income temporarily</li><li>Common in open, attractive economies</li></ul>'
      },
      right: {
        tone: 'rose',
        icon: '👎',
        iconStyle: 'circle',
        label: 'Concern view',
        text: '<ul style="margin:6px 0 0 14px;font-size:13px;line-height:1.7;color:#0B1426;"><li>May rely on unsustainable borrowing</li><li>Downward pressure on the currency</li><li>Rising net foreign liabilities</li><li>Loss of confidence can trigger adjustment</li></ul>'
      },

      causesFirst: true,
      causesLabel: 'THE CONSEQUENCES',
      causesEmoji: '📊',
      causesStyle: 'numbered',
      causes: [
        {
          tone: 'blue',
          icon: '📈',
          head: 'Inward investment',
          body: 'FDI can finance the deficit and raise productive capacity.'
        },
        {
          tone: 'amber',
          icon: '💷',
          head: 'Currency pressure',
          body: 'Persistent deficits increase demand for foreign currency, weakening the pound.'
        },
        {
          tone: 'purple',
          icon: '🛡️',
          head: 'Net debt risk',
          body: 'Repeated borrowing raises the stock of foreign liabilities and future servicing costs.'
        },
        {
          tone: 'blue',
          icon: '🛒',
          head: 'Living standards today',
          body: 'Imports can support present consumption — but not indefinitely.'
        }
      ],

      summaryRow: [
        { tone: 'purple', icon: '💬', title: 'Lawson Doctrine', text: '"A private-sector deficit may be self-correcting." — Nigel Lawson, 1988. Useful evaluation point, but only persuasive if markets remain confident and borrowing funds productive activity.' }
      ],

      conclusion: {
        title: 'Big idea',
        text: 'The key question is not just whether a deficit exists, but <strong>how it is financed</strong> and <strong>whether it is sustainable</strong>.'
      },

      examEdge: {
        title: 'Exam edge',
        text: 'Balanced essays weigh the benign view against the concern view, then judge whether the deficit reflects productive capital inflows or unsustainable borrowing.'
      }
    },

    /* ── CARD 5 ── Correcting the deficit ───────────────────────── */
    {
      id: 'correcting-deficit',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 5 of 8',
      title: 'Correcting the deficit',
      lede: 'There are three main policy routes — switch spending, reduce spending, or improve competitiveness.',
      ledeStyle: 'plain',

      tip: { icon: '🔒', tone: 'green', text: 'Expenditure-switching is the examiner favourite — it links directly to depreciation and the J-curve.' },

      causesFirst: true,
      causesLabel: 'THE THREE ROUTES',
      causesEmoji: '🔧',
      causes: [
        {
          tone: 'blue',
          icon: '🔄',
          head: 'Expenditure-switching',
          body: 'Depreciation<div style="text-align:center;font-size:13px;color:#64748B;margin:4px 0;">↓</div>Exports cheaper abroad<div style="text-align:center;font-size:13px;color:#64748B;margin:4px 0;">↓</div>Imports dearer at home<div style="text-align:center;font-size:13px;color:#64748B;margin:4px 0;">↓</div>Current account may improve',
          example: 'Strongest short-run textbook route.'
        },
        {
          tone: 'amber',
          icon: '📉',
          head: 'Expenditure-reducing',
          body: 'Higher taxes / lower govt spending<div style="text-align:center;font-size:13px;color:#64748B;margin:4px 0;">↓</div>Weaker demand<div style="text-align:center;font-size:13px;color:#64748B;margin:4px 0;">↓</div>Fewer imports',
          example: 'Works, but at the cost of slower growth.'
        },
        {
          tone: 'green',
          icon: '⚙️',
          head: 'Supply-side',
          body: 'Productivity / skills / innovation<div style="text-align:center;font-size:13px;color:#64748B;margin:4px 0;">↓</div>Stronger competitiveness<div style="text-align:center;font-size:13px;color:#64748B;margin:4px 0;">↓</div>Exports rise over time',
          example: 'Slow but durable.'
        }
      ],

      flowTitle: 'EXAM MECHANISM',
      flowEmoji: '⚙️',
      flow: [
        { icon: '📉', title: 'Depreciation',                          sub: 'Pound falls in value' },
        { icon: '🏷️', title: 'Export prices fall / import prices rise', sub: 'Price signals change' },
        { icon: '👥', title: 'Demand switches',                        sub: 'Buyers respond to new prices' },
        { icon: '⚖️', title: 'Current account moves toward balance',   sub: 'If M-L condition holds' }
      ],

      comparisonTable: {
        title: 'WHO PAYS THE PRICE?',
        emoji: '⚖️',
        columns: ['Main benefit', 'Main cost'],
        columnTones: ['green', 'rose'],
        rows: [
          { label: '🔄 Expenditure-switching', values: ['Supports exports',           'Imported inflation'] },
          { label: '📉 Expenditure-reducing',  values: ['Cuts import demand',         'Recession risk'] },
          { label: '⚙️ Supply-side',            values: ['Long-run competitiveness',  'Slow and uncertain'] }
        ]
      },

      conclusion: {
        title: 'Big idea',
        text: 'Different causes need different cures — a structural deficit needs long-run repair, not just a short-run demand squeeze.'
      },

      examEdge: {
        title: 'Exam edge',
        text: 'Top-band answers compare the speed, cost and durability of each route, then judge which fits the cause of the deficit best.'
      }
    },

    /* ── CARD 6 ── The J-curve ─────────────────────────────────── */
    {
      id: 'j-curve',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 6 of 8',
      title: 'The J-curve',
      lede: 'After depreciation, the current account often gets worse before it gets better.',
      ledeStyle: 'plain',

      tip: { icon: '🔒', tone: 'green', text: 'Prices react immediately – quantities respond with a lag.' },

      diagramKey: 'jCurveInteractive',
      diagramLabel: 'THE J-CURVE DIAGRAM',
      diagramEmoji: '📉',
      steps: [
        {
          key: 'base',
          label: 'Depreciation',
          text: 'The pound falls. The current account sits at its pre-depreciation level. Prices are about to react — but contracts are fixed and volumes have not moved yet.'
        },
        {
          key: 'extension',
          label: 'Worse first',
          text: 'Import prices rise immediately. Contracts are fixed, so buyers keep purchasing at the higher price. Export volumes do not jump yet. The import bill rises — the deficit widens to the trough (~6 months).'
        },
        {
          key: 'shift',
          label: 'Recovery',
          text: 'Export volumes rise and import volumes fall as consumers and firms adjust. If PED<sub>X</sub> + PED<sub>M</sub> &gt; 1 (Marshall–Lerner satisfied), the balance improves past the starting point — the classic J-curve.'
        }
      ],

      flowTitle: 'WHY IT HAPPENS',
      flowEmoji: '🔗',
      flow: [
        { icon: '📄', title: 'Contracts are fixed',      sub: 'Short-run volumes cannot change immediately' },
        { icon: '🛒', title: 'Import bill rises at once', sub: 'Higher price × same volume = bigger deficit' },
        { icon: '⏱️', title: 'Elasticities take time',   sub: 'Buyers and firms adjust over 12–18 months' }
      ],

      summaryRow: [
        { tone: 'amber', icon: '⚠️', title: 'Common error', text: 'Depreciation does not improve the current account instantly – that is exactly why the J-curve matters.' }
      ],

      conclusion: {
        title: 'Big idea',
        text: 'The J-curve is a timing story — the mechanism may work, but only after a lag. Short-run and long-run effects must always be distinguished.'
      },

      examEdge: {
        title: 'Exam edge',
        text: 'The best answers explain both stages: the initial worsening from higher import prices, then the later improvement as volumes respond. Always state the Marshall–Lerner condition explicitly.'
      }
    },

    /* ── CARD 7 ── BoP and the exchange rate ─────────────────────── */
    {
      id: 'bop-exchange-rate',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 7 of 8',
      title: 'BoP and the exchange rate',
      lede: 'The current account and the exchange rate influence each other in a two-way loop.',
      ledeStyle: 'plain',

      tip: { icon: '🔒', tone: 'green', text: 'In a floating-rate system, deficits can put downward pressure on the pound automatically.' },

      flowTitle: 'THE TWO-WAY LINK',
      flowEmoji: '🔗',
      flow: [
        { icon: '📉', title: 'Current account deficit',              sub: 'More spending abroad than at home' },
        { icon: '💱', title: 'Higher demand for foreign currency',    sub: 'Pay for imports in foreign currency' },
        { icon: '📉', title: 'Downward pressure on the pound',       sub: 'Excess supply of £ on FX markets' },
        { icon: '💷', title: 'Depreciation',                          sub: '£ falls in value' },
        { icon: '🛒', title: 'Exports cheaper / imports dearer',     sub: 'Price signals change' },
        { icon: '📈', title: 'Current account may improve',           sub: '→ Loop feeds back' }
      ],

      causesFirst: true,
      causesLabel: 'WHY THE UK IS DIFFERENT',
      causesEmoji: '🇬🇧',
      causesStyle: 'numbered',
      causes: [
        {
          tone: 'blue',
          icon: '🇬🇧',
          head: 'Floating pound',
          body: 'No fixed exchange rate to defend. The pound adjusts freely to market conditions.'
        },
        {
          tone: 'amber',
          icon: '🔄',
          head: 'Self-correcting tendency',
          body: 'Depreciation can automatically help rebalance the current account over time.'
        },
        {
          tone: 'purple',
          icon: '⚠️',
          head: 'Not guaranteed',
          body: 'Depends on confidence, capital flows and elasticities. Marshall–Lerner must hold.'
        }
      ],

      left: {
        tone: 'blue',
        icon: '⚙️',
        iconStyle: 'circle',
        label: 'Automatic mechanism',
        text: '<ul style="margin:6px 0 0 14px;font-size:13px;line-height:1.7;color:#0B1426;"><li>Floating currencies adjust without direct government control</li></ul>'
      },
      right: {
        tone: 'purple',
        icon: '⚠️',
        iconStyle: 'circle',
        label: 'Caveat',
        text: '<ul style="margin:6px 0 0 14px;font-size:13px;line-height:1.7;color:#0B1426;"><li>Correction may be slow and may raise inflation</li></ul>'
      },
      pairLabel: 'EXAM MOVE',
      pairEmoji: '⭐',

      conclusion: {
        title: 'Big idea',
        text: 'The exchange rate links the current account to policy, competitiveness and inflation. Understanding the two-way feedback is essential for macro essays.'
      },

      examEdge: {
        title: 'Exam edge',
        text: 'Strong essays explain the two-way link: deficits weaken the currency, and depreciation then feeds back into the current account through expenditure-switching and the J-curve.'
      }
    },

    /* ── CARD 8 ── Evaluating correction policies ─────────────────── */
    {
      id: 'evaluating-policies',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 8 of 8',
      title: 'Evaluating correction policies',
      lede: 'Every correction method works only with trade-offs — and only if the diagnosis is right.',
      ledeStyle: 'plain',

      tip: { icon: '🔒', tone: 'green', text: 'No single cure is painless – recession risk, inflation risk and time lags all matter.' },

      comparisonTable: {
        title: 'THE POLICY SCORECARD',
        emoji: '📊',
        columns: ['How it helps', 'Main drawback'],
        columnTones: ['blue', 'amber'],
        rows: [
          { label: '📉 Expenditure-reducing',              values: ['Cuts import demand.',                  'Recession and unemployment.'] },
          { label: '🔄 Depreciation / expenditure-switching', values: ['Improves price competitiveness.',   'Imported inflation and uncertain effect.'] },
          { label: '⚙️ Supply-side reform',                 values: ['Boosts competitiveness long run.', 'Slow and politically difficult.'] }
        ]
      },

      whyItMatters: {
        title: 'JUDGEMENT FRAMEWORK',
        emoji: '🎯',
        items: [
          { tone: 'blue',   icon: '🔍', label: 'Cause',        text: 'Is the deficit structural or cyclical?' },
          { tone: 'amber',  icon: '⏱️', label: 'Speed',        text: 'How quickly is improvement needed?' },
          { tone: 'green',  icon: '⚖️', label: 'Side effects', text: 'Recession, inflation, politics.' },
          { tone: 'purple', icon: '🛡️', label: 'Durability',   text: 'Short-run fix or long-run repair?' }
        ]
      },

      summaryRow: [
        { tone: 'blue', icon: '📐', title: 'The technical condition', text: 'Depreciation improves the current account only if PED of exports + PED of imports &gt; 1. If quantities respond strongly enough, export revenue rises and import spending falls over time.' }
      ],

      conclusion: {
        title: 'Big idea',
        text: 'The best policy depends on the cause of the deficit and the trade-offs policymakers are willing to accept.'
      },

      examEdge: {
        title: 'Exam edge',
        text: 'Top answers deploy Marshall–Lerner, compare the costs of each correction route, and end with a judgement on which policy mix is most credible.'
      }
    }

  ]
};
