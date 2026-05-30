/* ============================================================
   ECONOS – content data for net_trade
   Edexcel Theme 2.2.5 – Net Trade (X − M)
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'net-trade',
  topicNum: '2.5',
  theme: 'Theme 2 · The National and Global Economy',
  title: 'Net Trade (X − M)',
  estTime: '20 min',
  goal: 'Understand the open-economy link – small in level, volatile in effect.',

  intro: {
    heroKey: 'heroNetTrade',
    summary: 'Net trade (X − M) is only ~−3% of UK AD on average – but it can swing sharply with the exchange rate, world income and competitiveness. This topic covers the determinants of X and M, the exchange-rate channel, the Marshall-Lerner condition, the J-curve, and how net trade lands in the AD/AS model.',
    doInThis: 'Walk through what net trade is, how exports and imports differ, the five drivers of each, the exchange-rate mechanism, the Marshall-Lerner condition and J-curve, the AD/AS outcomes, and the six tests for evaluating net trade as a policy lever.',
    outcomes: [
      'Define net trade and its share of UK AD',
      'Distinguish exports (injection) from imports (leakage)',
      'List the five determinants of exports and imports',
      'Explain the exchange-rate channel in net trade',
      'State and apply the Marshall-Lerner condition',
      'Read the J-curve and link it to elasticities',
      'Evaluate net trade outcomes in the AD/AS model',
      'Judge net trade as a policy lever using six tests'
    ],
    tip: 'Net trade is small in level (~3% of AD) but punches above its weight when the exchange rate or world income moves.',
    stages: [
      { num: 1, name: 'Learn',  sub: '8 cards · 20 min',                  state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions',     state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps',  state: 'locked' }
    ]
  },

  cards: [

    /* ── CARD 1 ── What is Net Trade? ────────────────────────────── */
    {
      id: 'what-is-net-trade',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'What is Net Trade?',
      lede: 'Net trade is the external sector of aggregate demand – exports add demand, imports leak it away.',
      ledeStyle: 'plain',

      tip: { icon: '✅', tone: 'green', text: 'Net trade = X − M. The UK usually runs a small net trade deficit – around −3% of GDP.' },

      causesFirst: true,
      causesLabel: 'THE FOUR ENGINES OF AD',
      causesEmoji: '🏛️',
      causesStyle: 'tinted-flat',
      causesCols: 4,
      causes: [
        { tone: 'blue',   icon: 'C',  head: 'Consumption',         body: '<div style="text-align:center;font-size:13px;color:#475569;">≈ 60% of AD</div>' },
        { tone: 'amber',  icon: 'I',  head: 'Investment',          body: '<div style="text-align:center;font-size:13px;color:#475569;">≈ 17% of AD</div>' },
        { tone: 'purple', icon: 'G',  head: 'Government spending', body: '<div style="text-align:center;font-size:13px;color:#475569;">≈ 20% of AD</div>' },
        { tone: 'green',  icon: '🌍', head: '(X − M)',             body: '<div style="text-align:center;font-size:13px;color:#475569;">≈ −3% of AD · Net trade</div>' }
      ],

      pairLabel: 'THE TWO SIDES OF NET TRADE',
      pairEmoji: '⚖️',
      left: {
        tone: 'green', icon: '↗️', iconStyle: 'circle',
        label: 'Exports (X)',
        text: '<p style="margin:0;font-size:13px;color:#0B1426;"><strong>Foreigners spend on UK output</strong> – adds to AD (injection).</p>'
      },
      right: {
        tone: 'rose', icon: '↘️', iconStyle: 'circle',
        label: 'Imports (M)',
        text: '<p style="margin:0;font-size:13px;color:#0B1426;"><strong>UK spends on foreign output</strong> – leaks from AD.</p>'
      },

      whyItMatters: {
        title: 'WHY IT MATTERS',
        emoji: '📊',
        items: [
          { tone: 'blue',   icon: '±',  label: 'Injection + leakage', text: 'It is the only AD component with both a plus and a minus built in.' },
          { tone: 'amber',  icon: '📈', label: 'Growth link',         text: 'Stronger exports boost UK output and jobs directly.' },
          { tone: 'purple', icon: '£',  label: 'Exchange-rate link',  text: 'Sterling movements often change X and M in opposite directions.' }
        ]
      },

      conclusion: {
        title: 'Big idea',
        text: 'A country can have strong exports and still have negative net trade if imports are even larger. Net trade depends on the balance, not the level.'
      },

      examEdge: {
        title: 'Exam edge',
        text: 'Do not confuse exports with net trade. Net trade is the <em>balance</em> between exports and imports, not just exports alone.'
      }
    },

    /* ── CARD 2 ── Exports vs Imports ────────────────────────────── */
    {
      id: 'exports-vs-imports',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 2 of 8',
      title: 'Exports vs Imports',
      lede: 'Exports inject demand – imports leak demand.',
      ledeStyle: 'plain',

      tip: { icon: '✅', tone: 'green', text: '<strong>Key insight:</strong> exports are spending on UK output by foreigners, while imports are UK spending on foreign output.' },

      causesFirst: true,
      causesLabel: 'THE TWO FLOWS',
      causesEmoji: '🔀',
      causesStyle: 'tinted-flat',
      causesCols: 2,
      causes: [
        { tone: 'green', icon: '↗️', head: 'Exports',
          body: '<div style="font-size:13px;color:#0B1426;line-height:1.55;margin-bottom:10px;">Spending on UK goods and services by foreigners.</div>' +
                '<div style="display:inline-block;background:#ECFDF5;border:1px solid #6EE7B7;border-radius:8px;padding:6px 12px;font-size:11.5px;font-weight:800;color:#047857;margin-bottom:10px;">↑ Adds to AD</div>' +
                '<div style="font-size:11px;font-weight:700;color:#047857;margin-top:8px;margin-bottom:6px;">EXAMPLES</div>' +
                '<div style="display:flex;flex-wrap:wrap;gap:6px;">' +
                  '<span style="background:#fff;border:1px solid #A7F3D0;border-radius:6px;padding:4px 8px;font-size:11px;color:#047857;">💼 Services</span>' +
                  '<span style="background:#fff;border:1px solid #A7F3D0;border-radius:6px;padding:4px 8px;font-size:11px;color:#047857;">🚗 Cars</span>' +
                  '<span style="background:#fff;border:1px solid #A7F3D0;border-radius:6px;padding:4px 8px;font-size:11px;color:#047857;">⚗️ Pharmaceuticals</span>' +
                '</div>'
        },
        { tone: 'rose', icon: '↘️', head: 'Imports',
          body: '<div style="font-size:13px;color:#0B1426;line-height:1.55;margin-bottom:10px;">UK spending on goods and services produced abroad.</div>' +
                '<div style="display:inline-block;background:#FFF1F2;border:1px solid #FDA4AF;border-radius:8px;padding:6px 12px;font-size:11.5px;font-weight:800;color:#BE123C;margin-bottom:10px;">↓ Leaks from AD</div>' +
                '<div style="font-size:11px;font-weight:700;color:#BE123C;margin-top:8px;margin-bottom:6px;">EXAMPLES</div>' +
                '<div style="display:flex;flex-wrap:wrap;gap:6px;">' +
                  '<span style="background:#fff;border:1px solid #FECDD3;border-radius:6px;padding:4px 8px;font-size:11px;color:#BE123C;">🛒 Consumer goods</span>' +
                  '<span style="background:#fff;border:1px solid #FECDD3;border-radius:6px;padding:4px 8px;font-size:11px;color:#BE123C;">⚡ Energy</span>' +
                  '<span style="background:#fff;border:1px solid #FECDD3;border-radius:6px;padding:4px 8px;font-size:11px;color:#BE123C;">🍎 Food</span>' +
                '</div>'
        }
      ],

      whyItMatters: {
        title: 'WHY THE DISTINCTION MATTERS',
        emoji: '📊',
        items: [
          { tone: 'blue',   icon: '📈', label: 'Injection', text: 'Exports bring in foreign spending, which raises UK output and jobs.' },
          { tone: 'amber',  icon: '↘️', label: 'Leakage',   text: 'Imports divert UK spending abroad, reducing demand for UK goods and services.' },
          { tone: 'purple', icon: '⚖️', label: 'Balance',   text: 'A country can have strong exports and still run a deficit if imports are larger.' }
        ]
      },

      conclusion: {
        title: 'Big idea',
        text: 'Net trade depends on both flows – exports and imports. Focusing on exports alone gives an incomplete picture.'
      },

      examEdge: {
        title: 'Exam edge',
        text: 'Do not treat trade in goods as the whole story of external demand – services, income and transfers also matter.'
      }
    },

    /* ── CARD 3 ── Determinants of Exports ───────────────────────── */
    {
      id: 'determinants-of-exports',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 3 of 8',
      title: 'Determinants of Exports',
      lede: 'Exports rise when UK goods become more attractive or world demand becomes stronger.',
      blocks: [
        { type: 'calloutStrip', tone: 'green', icon: '✅', text: 'Exports depend on competitiveness, demand abroad and the trading environment.' },
        { type: 'sectionHeader', icon: '📊', label: 'FIVE DRIVERS' },
        { type: 'grid', cols: 3, children: [
          { type: 'tile', tone: 'blue',   icon: '£',  head: 'Real exchange rate',            body: '<div style="font-size:13px;color:#475569;line-height:1.5;">A weaker sterling makes UK exports cheaper abroad.</div><div style="margin-top:8px;background:#DBEAFE;border:1px solid #93C5FD;border-radius:6px;padding:4px 10px;display:inline-block;font-size:11px;font-weight:700;color:#1D4ED8;">↑ Positive</div>' },
          { type: 'tile', tone: 'amber',  icon: '🌍', head: 'World income',                  body: '<div style="font-size:13px;color:#475569;line-height:1.5;">When global growth rises, foreign demand for UK exports rises.</div><div style="margin-top:8px;background:#FEF3C7;border:1px solid #FCD34D;border-radius:6px;padding:4px 10px;display:inline-block;font-size:11px;font-weight:700;color:#92400E;">↑ Positive</div>' },
          { type: 'tile', tone: 'purple', icon: '🏷️', head: 'Relative price competitiveness', body: '<div style="font-size:13px;color:#475569;line-height:1.5;">Lower UK costs and prices help firms win sales.</div><div style="margin-top:8px;background:#EDE9FE;border:1px solid #C4B5FD;border-radius:6px;padding:4px 10px;display:inline-block;font-size:11px;font-weight:700;color:#6D28D9;">↑ Positive</div>' },
          { type: 'tile', tone: 'green',  icon: '🏅', head: 'Non-price competitiveness',     body: '<div style="font-size:13px;color:#475569;line-height:1.5;">Quality, brand, innovation and reliability matter.</div><div style="margin-top:8px;background:#ECFDF5;border:1px solid #6EE7B7;border-radius:6px;padding:4px 10px;display:inline-block;font-size:11px;font-weight:700;color:#047857;">↑ Positive</div>' },
          { type: 'tile', tone: 'rose',   icon: '🚧', head: 'Trade barriers',                body: '<div style="font-size:13px;color:#475569;line-height:1.5;">Tariffs, quotas and regulations can restrict exports.</div><div style="margin-top:8px;background:#FFF1F2;border:1px solid #FDA4AF;border-radius:6px;padding:4px 10px;display:inline-block;font-size:11px;font-weight:700;color:#BE123C;">↓ Negative</div>' }
        ]},
        { type: 'sectionHeader', icon: '🔗', label: 'THE EXPORT CHAIN' },
        { type: 'mechanismChain', steps: [
          { label: 'Better competitiveness', detail: 'Price and non-price advantages improve' },
          { label: 'More foreign demand',    detail: 'Buyers abroad shift towards UK goods' },
          { label: 'Exports rise',           detail: 'X volumes and revenue climb' },
          { label: 'AD rises',              detail: 'Higher X boosts aggregate demand' }
        ]},
        { type: 'calloutStrip', tone: 'blue', icon: '🇬🇧', text: 'UK examples — <strong>✈️ Service exports:</strong> Financial, education and business services in high demand worldwide. <strong>🚗 Car exports:</strong> UK-made cars go to Europe, the US and emerging markets. <strong>💊 Pharmaceuticals:</strong> UK medicines and biotech products are exported globally.' },
        { type: 'bigIdea', text: 'Big idea: Exports are driven by both price and non-price factors – firms need to be competitive in more ways than one.' },
        { type: 'examEdge', title: 'Exam edge', text: 'A lower exchange rate helps, but only if firms can actually supply attractive products.' }
      ]
    },

    /* ── CARD 4 ── Determinants of Imports ───────────────────────── */
    {
      id: 'determinants-of-imports',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 4 of 8',
      title: 'Determinants of Imports',
      lede: 'Imports rise when households and firms in the UK buy more from abroad.',
      blocks: [
        { type: 'calloutStrip', tone: 'green', icon: '✅', text: 'Imports are shaped by UK demand, the exchange rate and the attractiveness of foreign goods.' },
        { type: 'sectionHeader', icon: '⚙️', label: 'FIVE DRIVERS' },
        { type: 'grid', cols: 3, children: [
          { type: 'tile', tone: 'blue',   icon: '£',  head: 'Real exchange rate', body: '<div style="font-size:13px;color:#475569;line-height:1.5;">A stronger sterling makes imports cheaper.</div>' },
          { type: 'tile', tone: 'amber',  icon: '📈', head: 'Domestic income',    body: '<div style="font-size:13px;color:#475569;line-height:1.5;">When UK incomes rise, import demand often rises.</div>' },
          { type: 'tile', tone: 'purple', icon: '🏷️', head: 'Relative prices',    body: '<div style="font-size:13px;color:#475569;line-height:1.5;">If foreign goods are cheaper than domestic alternatives, imports rise.</div>' },
          { type: 'tile', tone: 'green',  icon: '🛍️', head: 'Non-price factors',  body: '<div style="font-size:13px;color:#475569;line-height:1.5;">Quality, design, variety and delivery can pull in imports.</div>' },
          { type: 'tile', tone: 'rose',   icon: '🛡️', head: 'Tariffs and quotas',  body: '<div style="font-size:13px;color:#475569;line-height:1.5;">Barriers can reduce imports.</div>' }
        ]},
        { type: 'sectionHeader', icon: '🔗', label: 'THE IMPORT CHAIN' },
        { type: 'mechanismChain', steps: [
          { label: 'Higher UK demand',              detail: 'Households and firms have more spending power' },
          { label: 'More spending on foreign goods', detail: 'Domestic supply does not fully meet demand' },
          { label: 'Imports rise',                  detail: 'M volumes and value climb' },
          { label: 'AD leaks abroad',               detail: 'Spending leaves the domestic circular flow' }
        ]},
        { type: 'calloutStrip', tone: 'blue', icon: '🏷️', text: 'UK examples — <strong>📱 Consumer electronics:</strong> Mostly imported from Asia. <strong>⛽ Energy:</strong> Oil and gas imports remain significant. <strong>🍎 Food:</strong> Fruit, coffee and other imports.' },
        { type: 'bigIdea', text: 'Big idea: Strong growth often raises imports as well as domestic demand.' },
        { type: 'examEdge', title: 'Exam edge', text: 'Imports are a leakage from AD – not a sign of failure on their own.' }
      ]
    },

    /* ── CARD 5 ── Exchange rate and net trade ───────────────────── */
    {
      id: 'exchange-rate-net-trade',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 5 of 8',
      title: 'Exchange rate and net trade',
      lede: 'A weaker pound tends to boost exports and reduce imports.',
      ledeStyle: 'plain',

      tip: { icon: '✅', tone: 'green', text: 'Depreciation usually improves X − M by making UK goods cheaper abroad and foreign goods dearer at home.' },

      interactiveDiagram: {
        svgKey: 'netTradeMechanism',
        layers: ['idl-1', 'idl-2', 'idl-3'],
        label: 'THE MECHANISM',
        emoji: '⚙️',
        views: [
          {
            label: 'Starting point',
            tone: 'blue',
            head: 'Sterling falls',
            body: 'The exchange rate moves – sterling depreciates against other currencies. Nothing else has changed yet; firms and households are about to face new relative prices.',
            analysis: 'Price signals lead the response. Quantity adjustments come next.'
          },
          {
            label: 'Sterling depreciates',
            tone: 'amber',
            show: ['idl-1'],
            head: 'Two price effects open up',
            body: [
              '<strong>Exports cheaper abroad</strong> – UK goods cost less in foreign currencies.',
              '<strong>Imports dearer at home</strong> – foreign goods cost more in pounds.'
            ],
            analysis: 'These are price effects only. Volumes have not moved yet – that needs elasticities and time.'
          },
          {
            label: 'Effect on X − M',
            tone: 'green',
            show: ['idl-1', 'idl-2', 'idl-3'],
            head: 'Volumes respond and net trade improves',
            body: 'Foreign buyers demand more UK exports; UK buyers switch away from costly imports. With both sides moving favourably, X rises and M falls – so X − M improves.',
            analysis: 'The response may take time and depends on how sensitive exports and imports are to price changes (the Marshall-Lerner condition – covered next).'
          }
        ]
      },

      flowTitle: 'FREE-MARKET LOGIC',
      flowEmoji: '⚖️',
      flow: [
        { icon: '£',  title: 'Weaker pound',         sub: 'Sterling depreciates' },
        { icon: '↑↓', title: 'Higher X and lower M', sub: 'Exports rise, imports fall' },
        { icon: '📊', title: 'AD rises',              sub: 'Net exports boost aggregate demand' }
      ],

      summaryRow: [
        { tone: 'amber', icon: '⚠️', title: 'Caveat', text: 'The response may take time and depends on how sensitive exports and imports are to price changes.' }
      ],

      conclusion: {
        title: 'Big idea',
        text: 'Exchange rates work through both exports and imports at the same time.'
      },

      examEdge: {
        title: 'Exam edge',
        text: 'Always state both sides of the mechanism – exports become cheaper abroad <em>and</em> imports become dearer at home.'
      }
    },

    /* ── CARD 6 ── Marshall-Lerner and the J-curve ───────────────── */
    {
      id: 'marshall-lerner-j-curve',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 6 of 8',
      title: 'Marshall-Lerner and the J-curve',
      lede: 'Depreciation can hurt before it helps.',
      ledeStyle: 'plain',

      tip: { icon: '✅', tone: 'green', text: 'A weaker pound improves the trade balance only if demand for exports and imports is sufficiently elastic.' },

      interactiveDiagram: {
        svgKey: 'jCurveInteractive',
        layers: ['idl-1', 'idl-2'],
        label: 'THE J-CURVE',
        emoji: '📉',
        views: [
          {
            label: 'Depreciation',
            tone: 'blue',
            head: 'Prices react, volumes have not',
            body: 'The pound falls. The trade balance sits at its pre-depreciation level. Prices are about to react – but contracts are fixed and volumes cannot move yet.',
            analysis: 'The mechanism is about to start. Whether it works depends on elasticities.'
          },
          {
            label: 'Worse first',
            tone: 'rose',
            show: ['idl-1'],
            head: 'Trade balance worsens to the trough',
            body: [
              'Existing export/import contracts are set in advance.',
              'Import prices rise immediately in pound terms.',
              'Quantities – exports up and imports down – adjust slowly.'
            ],
            analysis: 'In the short run the trade balance gets worse even though the mechanism is working as expected.'
          },
          {
            label: 'Recovery',
            tone: 'green',
            show: ['idl-1', 'idl-2'],
            head: 'Volumes respond and balance improves',
            body: [
              'Exports become cheaper – foreign demand increases.',
              'Imports become dearer – domestic demand for imports falls.'
            ],
            analysis: 'The recovery only completes if <strong>|PED of exports| + |PED of imports| &gt; 1</strong> (Marshall-Lerner). For services-heavy economies like the UK, lower elasticities can limit the J in practice.'
          }
        ]
      },

      pairLabel: 'WHAT THE CONDITION MEANS',
      pairEmoji: '⚖️',
      left: {
        tone: 'green', icon: '✅', iconStyle: 'circle',
        label: 'If true',
        text: '<p style="margin:0;font-size:13px;color:#0B1426;">Depreciation improves the current account.</p>'
      },
      right: {
        tone: 'rose', icon: '❌', iconStyle: 'circle',
        label: 'If not',
        text: '<p style="margin:0;font-size:13px;color:#0B1426;">The effect is weak or can fail.</p>'
      },

      conclusion: {
        title: 'Big idea',
        text: 'Time and elasticity both matter – first there can be pain, then gain.'
      },

      examEdge: {
        title: 'Exam edge',
        text: 'Do not say depreciation always works immediately. Use the J-curve and the Marshall-Lerner condition to explain the full story.'
      }
    },

    /* ── CARD 7 ── Net trade in the AD/AS model ──────────────────── */
    {
      id: 'net-trade-adas',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 7 of 8',
      title: 'Net trade in the AD/AS model',
      lede: 'A change in X − M shifts aggregate demand.',
      ledeStyle: 'plain',

      tip: { icon: '✅', tone: 'green', text: 'Stronger net trade (higher X − M) shifts AD to the right, but the outcome depends on spare capacity.' },

      flowChart: {
        svgKey: 'adAsTwoOutcomes',
        label: 'TWO POSSIBLE OUTCOMES',
        emoji: '⚖️',
        caption: 'The same AD shift produces a different mix of output and prices depending on where the economy sits on the SRAS curve.'
      },

      flowTitle: 'THE CHAIN',
      flowEmoji: '🔗',
      flow: [
        { icon: '🌐', title: 'Higher X − M',          sub: 'Net exports increase' },
        { icon: '📊', title: 'AD shifts right',        sub: 'Stronger aggregate demand' },
        { icon: '📈', title: 'Output and prices respond', sub: 'Effect depends on spare capacity' }
      ],

      summaryRow: [
        { tone: 'blue', icon: 'ℹ️', title: 'Reverse case', text: 'Weaker net trade (lower X − M) would shift AD left and reverse the story.' }
      ],

      conclusion: {
        title: 'Big idea',
        text: 'The same AD shift can produce different outcomes depending on the economy\'s position.'
      },

      examEdge: {
        title: 'Exam edge',
        text: 'Always evaluate using spare capacity and inflationary pressure – not just the direction of AD.'
      }
    },

    /* ── CARD 8 ── Evaluating net trade as a policy lever ────────── */
    {
      id: 'evaluating-net-trade',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 8 of 8',
      title: 'Evaluating net trade as a policy lever',
      lede: 'Net trade matters – but it is not something the UK can control directly.',
      blocks: [
        { type: 'calloutStrip', tone: 'green', icon: '✅', text: 'Attempts to improve X − M depend on exchange rates, elasticities and competitiveness.' },
        { type: 'sectionHeader', icon: '⚖️', label: 'SIX TESTS' },
        { type: 'grid', cols: 3, children: [
          { type: 'tile', tone: 'blue',   icon: '1', head: 'Exchange-rate regime',       body: '<div style="font-size:13px;color:#475569;line-height:1.5;">Floating rates help adjustment automatically.</div><div style="margin-top:8px;background:#ECFDF5;border:1px solid #6EE7B7;border-radius:6px;padding:4px 10px;display:inline-block;font-size:11px;font-weight:700;color:#047857;">✓ Favourable</div>' },
          { type: 'tile', tone: 'amber',  icon: '2', head: 'Marshall-Lerner condition',  body: '<div style="font-size:13px;color:#475569;line-height:1.5;">Depreciation works only if demand is elastic enough.</div><div style="margin-top:8px;background:#FEF3C7;border:1px solid #FCD34D;border-radius:6px;padding:4px 10px;display:inline-block;font-size:11px;font-weight:700;color:#92400E;">– Conditional</div>' },
          { type: 'tile', tone: 'purple', icon: '3', head: 'Trading partners\' growth',  body: '<div style="font-size:13px;color:#475569;line-height:1.5;">Exports depend on foreign income.</div><div style="margin-top:8px;background:#FEF3C7;border:1px solid #FCD34D;border-radius:6px;padding:4px 10px;display:inline-block;font-size:11px;font-weight:700;color:#92400E;">– Conditional</div>' },
          { type: 'tile', tone: 'rose',   icon: '4', head: 'Retaliation risk',           body: '<div style="font-size:13px;color:#475569;line-height:1.5;">Protectionism can provoke responses.</div><div style="margin-top:8px;background:#FFF1F2;border:1px solid #FDA4AF;border-radius:6px;padding:4px 10px;display:inline-block;font-size:11px;font-weight:700;color:#BE123C;">↓ Unfavourable</div>' },
          { type: 'tile', tone: 'green',  icon: '5', head: 'Supply-side competitiveness', body: '<div style="font-size:13px;color:#475569;line-height:1.5;">Productivity, quality and innovation matter.</div><div style="margin-top:8px;background:#ECFDF5;border:1px solid #6EE7B7;border-radius:6px;padding:4px 10px;display:inline-block;font-size:11px;font-weight:700;color:#047857;">✓ Favourable</div>' },
          { type: 'tile', tone: 'blue',   icon: '6', head: 'Long-run sustainability',    body: '<div style="font-size:13px;color:#475569;line-height:1.5;">Durable improvement needs stronger competitiveness, not just a weaker currency.</div><div style="margin-top:8px;background:#ECFDF5;border:1px solid #6EE7B7;border-radius:6px;padding:4px 10px;display:inline-block;font-size:11px;font-weight:700;color:#047857;">✓ Favourable</div>' }
        ]},
        { type: 'calloutStrip', tone: 'blue', icon: '⚖️', text: 'Depreciation can help, but only as part of a wider strategy — It is a short-term tool. Lasting gains depend on competitiveness and strong demand abroad.' },
        { type: 'bigIdea', text: 'Big idea: Net trade is influenced more effectively in the long run than controlled in the short run.' },
        { type: 'examEdge', title: 'Exam edge', text: 'The best answers combine exchange-rate analysis, Marshall-Lerner and supply-side evaluation.' }
      ],
      quizCta: { href: TopicLoader.routes.quiz('main'), label: 'Test yourself →' }
    }

  ]
};
