/* ============================================================
   ECONOS – content data for investment
   8 cards on investment as the volatile engine of the cycle.
   Edexcel Theme 2.2.3
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'investment',
  topicNum: '2.3',
  theme: 'Theme 2 · The National and Global Economy',
  title: 'Investment',
  estTime: '10-12 minutes',
  goal: 'Lock in investment – small in level, huge in volatility – as the engine of the business cycle.',

  intro: {
    heroKey: 'heroInvestment',
    summary: 'Investment is only ~17% of UK AD but it drives most of the cycle. When firms lose confidence, I falls first and furthest. This topic locks in the definition, the gross/net split, the accelerator, the determinants, the MEC decision rule, the multiplier link, recent UK episodes and evaluation.',
    doInThis: 'Walk through what investment is, gross vs net, the accelerator theory, determinants, the MEC decision rule, the investment-multiplier feedback loop, real UK case studies and the A* evaluation framework.',
    outcomes: [
      'Define investment and distinguish gross from net',
      'Explain the accelerator theory',
      'List the determinants of investment',
      'Apply the MEC decision rule',
      'Link investment to the multiplier through a feedback loop',
      'Apply real UK case studies',
      'Evaluate investment as an AD driver'
    ],
    tip: 'I is small in level (~17% of AD) but huge in volatility – it amplifies AD changes far beyond its share.',
    stages: [
      { num: 1, name: 'Learn',  sub: '8 concept cards',                  state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions',    state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [

    /* ── CARD 1 ── What is Investment? ────────────────────────────── */
    {
      id: 'what-is-investment',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'What is Investment?',
      lede: 'Investment is firms\' spending on capital goods that help produce future output.',
      ledeStyle: 'plain',

      tip: { icon: '✅', tone: 'green', text: 'Investment means spending on capital goods – not buying shares or bonds.' },

      causesFirst: true,
      causesLabel: 'THE BIG IDEA',
      causesEmoji: '💡',
      causes: [
        {
          tone: 'blue', icon: '🏭', head: 'Plant and machinery',
          body: 'Equipment and tools used in production.'
        },
        {
          tone: 'amber', icon: '🏢', head: 'Buildings',
          body: 'Factories, offices and infrastructure.'
        },
        {
          tone: 'purple', icon: '💻', head: 'Intangibles: IT, software, R&amp;D',
          body: 'Knowledge, systems and innovation.'
        }
      ],

      summaryRow: [
        { tone: 'rose', icon: '🚫', title: 'NOT financial investment',
          text: 'Shares and bonds are <strong>not</strong> investment in this topic. This is about <strong>real investment</strong> by firms – not financial assets.' }
      ],

      flowTitle: 'GROSS VS NET',
      flowEmoji: '⚖️',
      flowSep: ['−', '='],
      flow: [
        { tone: 'blue',  icon: '🛒',  title: 'Gross investment',  sub: 'All new capital goods purchased in a period.' },
        { tone: 'amber', icon: '⚙️',  title: 'Depreciation',      sub: 'The wearing out, ageing or obsolescence of existing capital.' },
        { tone: 'green', icon: '📈',  title: 'Net investment',    sub: 'The amount that adds to the capital stock.' }
      ],

      whyItMatters: {
        title: 'WHY INVESTMENT MATTERS',
        emoji: '📊',
        items: [
          { tone: 'blue',   icon: '🚀', label: 'Higher productivity',    text: 'Better capital makes workers more productive and lowers costs.' },
          { tone: 'amber',  icon: '🏭', label: 'More productive capacity', text: 'More capital means the economy can produce more goods and services.' },
          { tone: 'purple', icon: '🌐', label: 'Stronger long-run growth', text: 'Sustained investment is essential for rising living standards over time.' }
        ]
      },

      conclusion: {
        title: 'Big idea',
        text: 'Investment adds to the economy\'s capital stock and helps shift productive capacity upward over time.'
      },

      examEdge: {
        title: 'Exam edge',
        text: 'Always distinguish real investment from financial investment, and distinguish gross from net investment when discussing growth.'
      }
    },

    /* ── CARD 2 ── Gross vs Net Investment ────────────────────────── */
    {
      id: 'gross-vs-net',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 2 of 8',
      title: 'Gross vs Net Investment',
      lede: 'All capital spending is gross investment, but only net investment grows the capital stock.',
      ledeStyle: 'plain',

      tip: { icon: '🔒', tone: 'green', text: 'Net investment is the part that actually grows productive capacity.' },

      flowTitle: 'THE SPLIT',
      flowEmoji: '⚖️',
      flowSep: ['−', '='],
      flow: [
        { tone: 'blue',  icon: '🛒', title: 'Gross investment', sub: 'All new capital goods purchased in a period.' },
        { tone: 'amber', icon: '⚙️', title: 'Depreciation',     sub: 'The wearing out, ageing or obsolescence of existing capital.' },
        { tone: 'green', icon: '📈', title: 'Net investment',   sub: 'The amount that adds to the capital stock.' }
      ],

      causesLabel: 'WORKED EXAMPLE',
      causesEmoji: '🧮',
      causes: [
        { tone: 'blue',  icon: '🛒', head: 'Gross investment',
          body: '<div style="font-size:30px;font-weight:900;color:#1E40AF;text-align:center;margin:6px 0 10px;">£100bn</div>' +
                '<div style="display:grid;grid-template-columns:repeat(10,1fr);gap:3px;margin:0 0 10px;">' +
                Array(50).fill('<div style="aspect-ratio:1;background:#2563EB;border-radius:2px;"></div>').join('') +
                '</div>' +
                '<div style="font-size:12px;color:#1E3A8A;text-align:center;">All new capital goods purchased in the period.</div>' },
        { tone: 'amber', icon: '⚙️', head: 'Depreciation',
          body: '<div style="font-size:30px;font-weight:900;color:#B45309;text-align:center;margin:6px 0 10px;">£40bn</div>' +
                '<div style="display:grid;grid-template-columns:repeat(10,1fr);gap:3px;margin:0 0 10px;">' +
                Array(20).fill('<div style="aspect-ratio:1;background:#F59E0B;border-radius:2px;"></div>').join('') +
                '</div>' +
                '<div style="font-size:12px;color:#92400E;text-align:center;">Replacing worn-out capital – maintains, does not grow.</div>' },
        { tone: 'green', icon: '📈', head: 'Net investment',
          body: '<div style="font-size:30px;font-weight:900;color:#047857;text-align:center;margin:6px 0 10px;">£60bn</div>' +
                '<div style="display:grid;grid-template-columns:repeat(10,1fr);gap:3px;margin:0 0 10px;">' +
                Array(30).fill('<div style="aspect-ratio:1;background:#10B981;border-radius:2px;"></div>').join('') +
                '</div>' +
                '<div style="font-size:12px;color:#065F46;text-align:center;">Adds to the capital stock – grows productive capacity.</div>' }
      ],

      whyItMatters: {
        title: 'WHY NET MATTERS',
        emoji: '📊',
        items: [
          { tone: 'green',  icon: '📈', label: 'Capital stock growth', text: 'Net investment increases the total stock of capital available for production.' },
          { tone: 'blue',   icon: '🚀', label: 'Higher productivity',  text: 'More capital per worker means more output with the same effort.' },
          { tone: 'purple', icon: '🌐', label: 'Stronger long-run growth', text: 'Sustained net investment builds the foundation for future economic growth.' }
        ]
      },

      summaryRow: [
        { tone: 'amber', icon: '⚠️', title: 'Watch the trap', text: 'Depreciation maintains existing capital – it keeps the machine running. Net investment is what adds to it – it makes the machine bigger and better.' }
      ],

      conclusion: {
        title: 'Big idea',
        text: 'Only net investment expands productive capacity; depreciation simply maintains it.'
      },

      examEdge: {
        title: 'Exam edge',
        text: 'If depreciation is high, big gross investment may still leave little or no increase in the capital stock.'
      }
    },

    /* ── CARD 3 ── The Accelerator Theory ─────────────────────────── */
    {
      id: 'accelerator',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 3 of 8',
      title: 'The Accelerator Theory',
      lede: 'Investment depends on the rate of change of output, not its level.',
      ledeStyle: 'plain',

      tip: { icon: '✅', tone: 'green', text: 'Small changes in growth can cause big changes in investment.' },

      flowTitle: 'WHEN OUTPUT GROWTH SPEEDS UP',
      flowEmoji: '💡',
      flow: [
        { tone: 'green', icon: '📈', title: 'Output expectations rise', sub: 'Firms expect to sell more in the future.' },
        { tone: 'green', icon: '🏭', title: 'Firms want more capital',  sub: 'They invest to expand production capacity.' },
        { tone: 'green', icon: '📊', title: 'Investment rises',         sub: 'More spending on plant and equipment.' }
      ],

      flow2Title: 'WHEN OUTPUT GROWTH SLOWS DOWN',
      flow2Emoji: '⚠️',
      flow2: [
        { tone: 'rose', icon: '📉', title: 'Output expectations fall', sub: 'Firms expect to sell less in the future.' },
        { tone: 'rose', icon: '🏭', title: 'Firms want less capital',  sub: 'They postpone or cancel expansion.' },
        { tone: 'rose', icon: '📊', title: 'Investment falls',         sub: 'Less spending on plant and equipment.' }
      ],

      comparisonTable: {
        title: 'WORKED EXAMPLE',
        emoji: '🧮',
        columns: ['Period 1 – High growth', 'Period 2 – Slower growth'],
        columnTones: ['blue', 'purple'],
        rows: [
          { label: 'Expected output growth',           values: ['+5%',         '+2%'] },
          { label: 'Output level (index, base = 100)', values: ['100 → 105',   '105 → 107.1'] },
          { label: 'Investment spending (£ bn)',       values: ['20',          '14'] }
        ]
      },

      summaryRow: [
        { tone: 'amber', icon: '⚖️', title: 'It depends on the change, not the level',
          text: 'Output still rises (105 → 107.1), but investment falls in absolute terms (20 → 14). The accelerator amplifies small growth changes into big investment swings.' }
      ],

      whyItMatters: {
        title: 'WHY INVESTMENT IS VOLATILE',
        emoji: '⚡',
        items: [
          { tone: 'blue',   icon: '🧭', label: 'Forward-looking', text: 'Firms base decisions on expected changes in demand, not current levels.' },
          { tone: 'amber',  icon: '⚡', label: 'Amplification',   text: 'Small shifts in growth expectations lead to large adjustments in capital spending.' },
          { tone: 'green',  icon: '🏗️', label: 'Lumpy capital',   text: 'Machines and buildings are expensive and indivisible – firms adjust in big steps.' }
        ]
      },

      conclusion: {
        title: 'Big idea',
        text: 'Investment is driven by the change in expected output, so it is the most volatile component of AD.'
      },

      examEdge: {
        title: 'Exam edge',
        text: 'Always explain that investment depends on the rate of change of output, not its level.'
      }
    },

    /* ── CARD 4 ── Determinants of Investment ─────────────────────── */
    {
      id: 'determinants',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 4 of 8',
      title: 'Determinants of Investment',
      lede: 'Investment rises or falls when key drivers change firms\' expected returns or ability to invest.',
      ledeStyle: 'plain',

      tip: { icon: '✅', tone: 'green', text: 'Investment shifts when expected return, confidence or funding conditions change.' },

      causesFirst: true,
      causesLabel: 'THE EIGHT DRIVERS',
      causesEmoji: '📊',
      causesStyle: 'numbered',
      causesCols: 3,
      causes: [
        { tone: 'blue', icon: '%', head: 'Interest rates',
          body: 'Lower borrowing costs make projects more attractive.<div style="margin-top:8px;padding-top:8px;border-top:1px dashed #93C5FD;font-size:12px;color:#1E40AF;font-weight:700;">↑ Lower rates boost investment.</div>' },
        { tone: 'blue', icon: '🏦', head: 'Access to credit',
          body: 'Even at low rates, firms need lenders willing to lend. Tight credit conditions (e.g. 2008 GFC) starve investment regardless of the headline rate.<div style="margin-top:8px;padding-top:8px;border-top:1px dashed #93C5FD;font-size:12px;color:#1E40AF;font-weight:700;">↑ Looser credit conditions boost investment.</div>' },
        { tone: 'amber', icon: '😊', head: 'Business confidence / animal spirits',
          body: 'Optimism about the future encourages firms to expand.<div style="margin-top:8px;padding-top:8px;border-top:1px dashed #FCD34D;font-size:12px;color:#B45309;font-weight:700;">↑ Higher confidence boosts investment.</div>' },
        { tone: 'purple', icon: '💰', head: 'Corporate profits and retained earnings',
          body: 'Stronger profits and cash flows fund more investment.<div style="margin-top:8px;padding-top:8px;border-top:1px dashed #C4B5FD;font-size:12px;color:#6D28D9;font-weight:700;">↑ Higher profits boost investment.</div>' },
        { tone: 'green', icon: '📈', head: 'Demand expectations',
          body: 'Higher expected sales and orders justify more capacity and capital.<div style="margin-top:8px;padding-top:8px;border-top:1px dashed #6EE7B7;font-size:12px;color:#047857;font-weight:700;">↑ Stronger demand boosts investment.</div>' },
        { tone: 'green', icon: '🌍', head: 'Demand for exports',
          body: 'Stronger global demand for UK exports (or a weaker £) raises expected sales abroad, pulling investment into export-facing sectors.<div style="margin-top:8px;padding-top:8px;border-top:1px dashed #6EE7B7;font-size:12px;color:#047857;font-weight:700;">↑ Rising export orders boost investment.</div>' },
        { tone: 'purple', icon: '💡', head: 'Technology / innovation',
          body: 'New technologies lower costs and create new opportunities.<div style="margin-top:8px;padding-top:8px;border-top:1px dashed #C4B5FD;font-size:12px;color:#6D28D9;font-weight:700;">↑ Innovation boosts investment and productivity.</div>' },
        { tone: 'rose', icon: '🏛️', head: 'Government policy and taxes',
          body: 'Incentives and stability help; higher taxes or uncertainty hold it back.<div style="margin-top:8px;padding-top:8px;border-top:1px dashed #FDA4AF;font-size:12px;color:#BE123C;font-weight:700;">↓ Uncertainty or higher taxes reduce investment.</div>' }
      ],

      pairLabel: 'FAST CLASSIFIER',
      pairEmoji: '⚡',
      left: {
        tone: 'green', icon: '⬆️', iconStyle: 'circle',
        label: 'What tends to raise investment',
        text: '<p style="margin:0;font-size:13px;color:#0B1426;">Lower interest rates, higher confidence, strong profits, stronger demand, innovation, supportive policy and tax incentives.</p>'
      },
      right: {
        tone: 'rose', icon: '⬇️', iconStyle: 'circle',
        label: 'What tends to reduce investment',
        text: '<p style="margin:0;font-size:13px;color:#0B1426;">Higher interest rates, weak confidence, weak profits, weak demand, lack of innovation, uncertainty, or higher taxes.</p>'
      },

      summaryRow: [
        { tone: 'green', icon: '👁️', title: 'Synthesis',
          text: 'Investment is forward-looking – it responds to expectations today about returns, risks and conditions tomorrow.' }
      ],

      conclusion: {
        title: 'Big idea',
        text: 'Investment depends on expected returns and the ability to finance – driven by confidence, conditions, costs and policy.'
      },

      examEdge: {
        title: 'Exam edge',
        text: 'When a driver changes, ask how it affects expected returns or the cost of funding – then link the direction of change to investment.'
      }
    },

    /* ── CARD 5 ── The MEC and Investment Decisions ───────────────── */
    {
      id: 'mec',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 5 of 8',
      title: 'The MEC and Investment Decisions',
      lede: 'Firms invest while the expected return on capital exceeds the interest rate.',
      ledeStyle: 'plain',

      tip: { icon: '✅', tone: 'green', text: 'Firms invest while MEC is above the interest rate.' },

      flowChart: {
        svgKey: 'mecDiagram',
        label: 'THE MEC DIAGRAM',
        emoji: '📈',
        caption: 'Equilibrium investment Q* is set where MEC crosses the interest rate. Higher rates lower Q*; a rightward shift in MEC raises Q*.'
      },

      causesLabel: 'STEP THROUGH IT',
      causesEmoji: '📖',
      causesStyle: 'numbered',
      causes: [
        { tone: 'blue',  icon: '⚖️', head: 'Base equilibrium', body: 'MEC crosses the interest rate at Q*.' },
        { tone: 'amber', icon: '📈', head: 'Rates rise',       body: 'The interest rate rises to r₂, lowering equilibrium investment to Q₂.' },
        { tone: 'green', icon: '💡', head: 'MEC shifts right', body: 'Higher optimism or better technology shifts MEC right to MEC₂, raising investment to Q₃.' }
      ],

      pairLabel: 'WHAT HAPPENS WHEN…',
      pairEmoji: '❓',
      left: {
        tone: 'amber', icon: '📈', iconStyle: 'circle',
        label: 'Interest rates rise',
        text: '<p style="margin:0 0 8px;font-size:13px;color:#0B1426;">The interest rate line moves up.</p>' +
              '<div style="border-top:1px dashed #FCD34D;margin:8px 0;"></div>' +
              '<p style="margin:0 0 10px;font-size:13.5px;color:#B45309;font-weight:800;">↓ MEC crosses at a lower Q → investment falls.</p>' +
              '<div style="background:#FFFBEB;border:1px dashed #FCD34D;border-radius:8px;padding:8px 12px;font-size:12px;color:#92400E;text-align:center;">Higher borrowing cost → fewer projects are worthwhile.</div>'
      },
      right: {
        tone: 'green', icon: '💡', iconStyle: 'circle',
        label: 'Animal spirits / tech improve',
        text: '<p style="margin:0 0 8px;font-size:13px;color:#0B1426;">The MEC curve shifts right.</p>' +
              '<div style="border-top:1px dashed #6EE7B7;margin:8px 0;"></div>' +
              '<p style="margin:0 0 10px;font-size:13.5px;color:#047857;font-weight:800;">↑ MEC crosses at a higher Q → investment rises.</p>' +
              '<div style="background:#ECFDF5;border:1px dashed #6EE7B7;border-radius:8px;padding:8px 12px;font-size:12px;color:#065F46;text-align:center;">Higher expected returns → more projects are worthwhile.</div>'
      },

      summaryRow: [
        { tone: 'blue', icon: '✅', title: 'The decision rule',
          text: 'Invest if <strong>MEC &gt; interest rate.</strong> &nbsp;Do not invest if <strong>MEC &lt; interest rate.</strong> &nbsp;At equilibrium: <strong>MEC = interest rate.</strong>' }
      ],

      conclusion: {
        title: 'Big idea',
        text: 'Firms invest up to the point where the expected return on the next unit of capital (MEC) equals the interest rate – the cost of borrowing.'
      },

      examEdge: {
        title: 'Exam edge',
        text: 'Always link the diagram to the story: higher rates raise borrowing cost and reduce investment; better expectations or technology raise MEC and boost investment.'
      }
    },

    /* ── CARD 6 ── Investment and the Multiplier ──────────────────── */
    {
      id: 'investment-multiplier',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 6 of 8',
      title: 'Investment and the Multiplier',
      lede: 'Higher demand can trigger more investment, which then multiplies demand again.',
      ledeStyle: 'plain',

      tip: { icon: '✅', tone: 'green', text: 'Investment and demand can amplify each other – every loop is bigger than the last.' },

      flowChart: {
        svgKey: 'investmentFeedbackLoop',
        label: 'THE FEEDBACK LOOP',
        emoji: '🔄',
        caption: 'Higher demand → more investment → more income → still more demand. The same five steps repeat – and each pass through the loop is larger than the one before.'
      },

      comparisonTable: {
        title: 'THE RIPPLE',
        emoji: '🌊',
        columns: ['Initial shock', 'Round 1', 'Round 2', 'Round 3', 'Round 4+'],
        columnTones: ['blue', 'amber', 'purple', 'green', 'slate'],
        rows: [
          { label: 'Investment',     values: ['+100', '+60', '+36', '+22', '+ …'] },
          { label: 'Income / output', values: ['+150', '+90', '+54', '+33', '+ …'] },
          { label: 'Consumption',     values: ['+75',  '+45', '+27', '+16', '+ …'] }
        ]
      },

      summaryRow: [
        { tone: 'slate', icon: 'ℹ️', title: 'It compounds', text: 'Each round is smaller, but together they add up to a much larger total effect.' }
      ],

      whyItMatters: {
        title: 'WHY BOOMS AND BUSTS AMPLIFY',
        emoji: '📊',
        items: [
          { tone: 'blue',   icon: '📈', label: 'Positive feedback', text: 'More demand → more investment → more demand. Expansions build momentum.' },
          { tone: 'amber',  icon: '📉', label: 'Negative feedback', text: 'Less demand → less investment → less demand. Downturns reinforce themselves.' },
          { tone: 'purple', icon: '〰️', label: 'Delays and lags',  text: 'Decisions take time and are based on expectations, which can overshoot in both directions.' }
        ]
      },

      conclusion: {
        title: 'Big idea',
        text: 'The accelerator raises investment when demand rises; the multiplier spreads that spending. Together they create powerful, self-reinforcing cycles.'
      },

      examEdge: {
        title: 'Exam edge',
        text: 'In exam answers, explain how the accelerator–multiplier interaction can magnify both expansions and contractions in aggregate demand and output.'
      }
    },

    /* ── CARD 7 ── Real-world Investment ──────────────────────────── */
    {
      id: 'real-world-investment',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 7 of 8',
      title: 'Real-world Investment',
      lede: 'Recent UK episodes show how uncertainty, shocks and interest rates shape investment.',
      ledeStyle: 'plain',

      tip: { icon: '✅', tone: 'green', text: 'Business confidence and borrowing costs can move investment sharply.' },

      causesFirst: true,
      causesLabel: 'THREE UK EPISODES',
      causesEmoji: '📅',
      causesStyle: 'numbered',
      causesCols: 3,
      causes: [
        { tone: 'blue', icon: '📉', head: 'Post-Brexit uncertainty slump – 2016–19',
          body: 'Referendum shock and prolonged uncertainty led firms to delay projects and hold back spending.<div style="margin-top:10px;padding:6px 10px;background:#fff;border:1px solid #BFDBFE;border-radius:8px;font-size:12px;font-weight:700;color:#1E40AF;text-align:center;">Outcome: Weak investment</div>' },
        { tone: 'amber', icon: '🦠', head: 'Covid capex freeze – 2020, snap-back 2021',
          body: 'Lockdowns froze investment in 2020; strong demand, savings and support drove a rebound in 2021.<div style="margin-top:10px;padding:6px 10px;background:#fff;border:1px solid #FCD34D;border-radius:8px;font-size:12px;font-weight:700;color:#B45309;text-align:center;">Outcome: Sharp rebound</div>' },
        { tone: 'green', icon: '🏦', head: 'The high-rate squeeze – 2023–24',
          body: 'Higher interest rates lifted borrowing costs and curbed investment plans across many sectors.<div style="margin-top:10px;padding:6px 10px;background:#fff;border:1px solid #6EE7B7;border-radius:8px;font-size:12px;font-weight:700;color:#047857;text-align:center;">Outcome: Soft investment</div>' }
      ],

      comparisonTable: {
        title: 'WHAT EACH EPISODE SHOWS',
        emoji: '📊',
        columns: ['Confidence', 'Disruption / Shocks', 'Interest rates', 'Effect on investment'],
        columnTones: ['blue', 'amber', 'purple', 'green'],
        rows: [
          { label: '2016–19 Post-Brexit',     values: ['Fell sharply',                'Political uncertainty, trade & policy ambiguity', 'Low and stable',          'Firms delayed and cancelled projects'] },
          { label: '2020–21 Covid cycle',     values: ['Collapsed in 2020, recovered in 2021', 'Pandemic, lockdowns, supply chain shocks', 'Very low',                'Frozen in 2020, strong snap-back in 2021'] },
          { label: '2023–24 High-rate squeeze', values: ['Cautious and fragile',       'Energy price shock, global uncertainty',          'High (Bank Rate at 5.25%)', 'Investment plans scaled back'] }
        ]
      },

      summaryRow: [
        { tone: 'green', icon: '🌟', title: 'Common thread',
          text: 'Investment is highly sensitive to expectations, shocks and the cost of capital.' }
      ],

      conclusion: {
        title: 'Big idea',
        text: 'Uncertainty, shocks and interest rates shift confidence and the cost of capital – and investment moves.'
      },

      examEdge: {
        title: 'Exam edge',
        text: 'Always link episodes to the channels: confidence, disruption and rates → investment outcomes.'
      }
    },

    /* ── CARD 8 ── Evaluating Investment as an AD Driver ──────────── */
    {
      id: 'evaluating-investment',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 8 of 8',
      title: 'Evaluating Investment as an AD Driver',
      lede: 'Investment is powerful, but also volatile and uncertain.',
      ledeStyle: 'plain',

      tip: { icon: '✅', tone: 'green', text: 'Investment can drive both demand now and capacity later – but it is the least predictable AD component.' },

      causesFirst: true,
      causesLabel: 'THE EVALUATION GRID',
      causesEmoji: '⚖️',
      causesStyle: 'numbered',
      causesCols: 3,
      causes: [
        { tone: 'blue',   icon: '📉', head: 'Volatility',
          body: 'Investment is highly volatile and sensitive to sentiment, confidence and financial conditions.' },
        { tone: 'amber',  icon: '⏱️', head: 'Long-run vs short-run',
          body: 'Drives long-run capacity growth but can be pro-cyclical in the short run.' },
        { tone: 'purple', icon: '👥', head: 'Crowding out',
          body: 'May raise interest rates and reduce private consumption or other investment.' },
        { tone: 'green',  icon: '🐂', head: 'Animal spirits',
          body: 'Driven by confidence and expectations rather than current profits alone.' },
        { tone: 'blue',   icon: '⌛', head: 'Time lags',
          body: 'Decisions, financing and implementation create delays in AD effects.' },
        { tone: 'amber',  icon: '🏅', head: 'Quality of investment',
          body: 'Productive, innovative investment boosts future AS and AD more.' }
      ],

      whyItMatters: {
        title: 'JUDGEMENT FRAMEWORK',
        emoji: '⚖️',
        items: [
          { tone: 'blue',   icon: '🎯', label: 'Size',       text: 'How large is the investment impulse relative to AD?' },
          { tone: 'amber',  icon: '📅', label: 'Timing',     text: 'When will it affect demand, and how lasting is it?' },
          { tone: 'green',  icon: '🏅', label: 'Quality',    text: 'Is it productive, innovative and capacity enhancing?' },
          { tone: 'purple', icon: '🛡️', label: 'Confidence', text: 'How strong and stable is business confidence?' }
        ]
      },

      summaryRow: [
        { tone: 'blue', icon: '💡', title: 'Synthesis',
          text: 'Evaluate investment by balancing its size, timing, quality and confidence – knowing its impact is uncertain.' }
      ],

      conclusion: {
        title: 'Big idea',
        text: 'Investment is the most powerful driver of future capacity and demand – and the least predictable.'
      },

      examEdge: {
        title: 'Exam edge',
        text: 'Strong evaluation distinguishes short-run AD effects from long-run AS effects.'
      },

      quizCta: { href: TopicLoader.routes.quiz('main'), label: 'Test yourself →' }
    }

  ]
};
