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

      blocks: [
        { type: 'calloutStrip', tone: 'green', icon: '✅', text: 'Investment means spending on capital goods – not buying shares or bonds.' },
        { type: 'sectionHeader', icon: '💡', label: 'THE BIG IDEA' },
        { type: 'grid', cols: 3, children: [
          { type: 'tile', tone: 'blue',   icon: '🏭', head: 'Plant and machinery',          body: 'Equipment and tools used in production.' },
          { type: 'tile', tone: 'amber',  icon: '🏢', head: 'Buildings',                    body: 'Factories, offices and infrastructure.' },
          { type: 'tile', tone: 'purple', icon: '💻', head: 'Intangibles: IT, software, R&D', body: 'Knowledge, systems and innovation.' }
        ]},
        { type: 'calloutStrip', tone: 'rose', icon: '🚫', text: 'NOT financial investment — Shares and bonds are not investment in this topic. This is about real investment by firms – not financial assets.' },
        { type: 'sectionHeader', icon: '⚖️', label: 'GROSS VS NET' },
        { type: 'mechanismChain', steps: [
          { label: 'Gross investment', detail: 'All new capital goods purchased in a period.' },
          { label: 'Depreciation',     detail: 'The wearing out, ageing or obsolescence of existing capital.' },
          { label: 'Net investment',   detail: 'The amount that adds to the capital stock.' }
        ]},
        { type: 'sectionHeader', icon: '📊', label: 'WHY INVESTMENT MATTERS' },
        { type: 'grid', cols: 3, children: [
          { type: 'tile', tone: 'blue',   icon: '🚀', head: 'Higher productivity',    body: 'Better capital makes workers more productive and lowers costs.' },
          { type: 'tile', tone: 'amber',  icon: '🏭', head: 'More productive capacity', body: 'More capital means the economy can produce more goods and services.' },
          { type: 'tile', tone: 'purple', icon: '🌐', head: 'Stronger long-run growth', body: 'Sustained investment is essential for rising living standards over time.' }
        ]},
        { type: 'bigIdea', text: 'Big idea: Investment adds to the economy\'s capital stock and helps shift productive capacity upward over time.' },
        { type: 'examEdge', title: 'Exam edge', text: 'Always distinguish real investment from financial investment, and distinguish gross from net investment when discussing growth.' }
      ]
    },

    /* ── CARD 2 ── Gross vs Net Investment ────────────────────────── */
    {
      id: 'gross-vs-net',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 2 of 8',
      title: 'Gross vs Net Investment',
      lede: 'All capital spending is gross investment, but only net investment grows the capital stock.',
      ledeStyle: 'plain',

      blocks: [
        { type: 'calloutStrip', tone: 'green', icon: '🔒', text: 'Net investment is the part that actually grows productive capacity.' },
        { type: 'sectionHeader', icon: '⚖️', label: 'THE SPLIT' },
        { type: 'mechanismChain', steps: [
          { label: 'Gross investment', detail: 'All new capital goods purchased in a period.' },
          { label: 'Depreciation',     detail: 'The wearing out, ageing or obsolescence of existing capital.' },
          { label: 'Net investment',   detail: 'The amount that adds to the capital stock.' }
        ]},
        { type: 'sectionHeader', icon: '🧮', label: 'WORKED EXAMPLE' },
        { type: 'grid', cols: 3, children: [
          { type: 'tile', tone: 'blue',  icon: '🛒', head: 'Gross investment — £100bn', body: 'All new capital goods purchased in the period.' },
          { type: 'tile', tone: 'amber', icon: '⚙️', head: 'Depreciation — £40bn',     body: 'Replacing worn-out capital – maintains, does not grow.' },
          { type: 'tile', tone: 'green', icon: '📈', head: 'Net investment — £60bn',   body: 'Adds to the capital stock – grows productive capacity.' }
        ]},
        { type: 'sectionHeader', icon: '📊', label: 'WHY NET MATTERS' },
        { type: 'grid', cols: 3, children: [
          { type: 'tile', tone: 'green',  icon: '📈', head: 'Capital stock growth',    body: 'Net investment increases the total stock of capital available for production.' },
          { type: 'tile', tone: 'blue',   icon: '🚀', head: 'Higher productivity',     body: 'More capital per worker means more output with the same effort.' },
          { type: 'tile', tone: 'purple', icon: '🌐', head: 'Stronger long-run growth', body: 'Sustained net investment builds the foundation for future economic growth.' }
        ]},
        { type: 'calloutStrip', tone: 'amber', icon: '⚠️', text: 'Watch the trap — Depreciation maintains existing capital – it keeps the machine running. Net investment is what adds to it – it makes the machine bigger and better.' },
        { type: 'bigIdea', text: 'Big idea: Only net investment expands productive capacity; depreciation simply maintains it.' },
        { type: 'examEdge', title: 'Exam edge', text: 'If depreciation is high, big gross investment may still leave little or no increase in the capital stock.' }
      ]
    },

    /* ── CARD 3 ── The Accelerator Theory ─────────────────────────── */
    {
      id: 'accelerator',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 3 of 8',
      title: 'The Accelerator Theory',
      lede: 'Investment depends on the rate of change of output, not its level.',
      ledeStyle: 'plain',

      blocks: [
        { type: 'calloutStrip', tone: 'green', icon: '✅', text: 'Small changes in growth can cause big changes in investment.' },
        { type: 'sectionHeader', icon: '💡', label: 'WHEN OUTPUT GROWTH SPEEDS UP' },
        { type: 'mechanismChain', steps: [
          { label: 'Output expectations rise', detail: 'Firms expect to sell more in the future.' },
          { label: 'Firms want more capital',  detail: 'They invest to expand production capacity.' },
          { label: 'Investment rises',         detail: 'More spending on plant and equipment.' }
        ]},
        { type: 'sectionHeader', icon: '⚠️', label: 'WHEN OUTPUT GROWTH SLOWS DOWN' },
        { type: 'mechanismChain', steps: [
          { label: 'Output expectations fall', detail: 'Firms expect to sell less in the future.' },
          { label: 'Firms want less capital',  detail: 'They postpone or cancel expansion.' },
          { label: 'Investment falls',         detail: 'Less spending on plant and equipment.' }
        ]},
        { type: 'sectionHeader', icon: '🧮', label: 'WORKED EXAMPLE' },
        { type: 'grid', cols: 2, children: [
          { type: 'tile', tone: 'blue',   head: 'Period 1 – High growth',   body: 'Expected output growth: +5%\nOutput level (index, base = 100): 100 → 105\nInvestment spending: £20bn' },
          { type: 'tile', tone: 'purple', head: 'Period 2 – Slower growth', body: 'Expected output growth: +2%\nOutput level (index, base = 100): 105 → 107.1\nInvestment spending: £14bn' }
        ]},
        { type: 'calloutStrip', tone: 'amber', icon: '⚖️', text: 'It depends on the change, not the level — Output still rises (105 → 107.1), but investment falls in absolute terms (20 → 14). The accelerator amplifies small growth changes into big investment swings.' },
        { type: 'sectionHeader', icon: '⚡', label: 'WHY INVESTMENT IS VOLATILE' },
        { type: 'grid', cols: 3, children: [
          { type: 'tile', tone: 'blue',  icon: '🧭', head: 'Forward-looking', body: 'Firms base decisions on expected changes in demand, not current levels.' },
          { type: 'tile', tone: 'amber', icon: '⚡', head: 'Amplification',   body: 'Small shifts in growth expectations lead to large adjustments in capital spending.' },
          { type: 'tile', tone: 'green', icon: '🏗️', head: 'Lumpy capital',   body: 'Machines and buildings are expensive and indivisible – firms adjust in big steps.' }
        ]},
        { type: 'bigIdea', text: 'Big idea: Investment is driven by the change in expected output, so it is the most volatile component of AD.' },
        { type: 'examEdge', title: 'Exam edge', text: 'Always explain that investment depends on the rate of change of output, not its level.' }
      ]
    },

    /* ── CARD 4 ── Determinants of Investment ─────────────────────── */
    {
      id: 'determinants',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 4 of 8',
      title: 'Determinants of Investment',
      lede: 'Investment rises or falls when key drivers change firms\' expected returns or ability to invest.',
      ledeStyle: 'plain',

      blocks: [
        { type: 'calloutStrip', tone: 'green', icon: '✅', text: 'Investment shifts when expected return, confidence or funding conditions change.' },
        { type: 'sectionHeader', icon: '📊', label: 'THE SIX DRIVERS' },
        { type: 'grid', cols: 3, children: [
          { type: 'tile', tone: 'blue',   icon: '%',  head: 'Interest rates',
            body: 'Lower borrowing costs make projects more attractive.\n\n↑ Lower rates boost investment.' },
          { type: 'tile', tone: 'amber',  icon: '😊', head: 'Business confidence / animal spirits',
            body: 'Optimism about the future encourages firms to expand.\n\n↑ Higher confidence boosts investment.' },
          { type: 'tile', tone: 'purple', icon: '💰', head: 'Corporate profits and retained earnings',
            body: 'Stronger profits and cash flows fund more investment.\n\n↑ Higher profits boost investment.' },
          { type: 'tile', tone: 'green',  icon: '📈', head: 'Demand expectations',
            body: 'Higher expected sales and orders justify more capacity and capital.\n\n↑ Stronger demand boosts investment.' },
          { type: 'tile', tone: 'purple', icon: '💡', head: 'Technology / innovation',
            body: 'New technologies lower costs and create new opportunities.\n\n↑ Innovation boosts investment and productivity.' },
          { type: 'tile', tone: 'rose',   icon: '🏛️', head: 'Government policy and taxes',
            body: 'Incentives and stability help; higher taxes or uncertainty hold it back.\n\n↓ Uncertainty or higher taxes reduce investment.' }
        ]},
        { type: 'sectionHeader', icon: '⚡', label: 'FAST CLASSIFIER' },
        { type: 'grid', cols: 2, children: [
          { type: 'tile', tone: 'green', icon: '⬆️', head: 'What tends to raise investment',
            body: 'Lower interest rates, higher confidence, strong profits, stronger demand, innovation, supportive policy and tax incentives.' },
          { type: 'tile', tone: 'rose',  icon: '⬇️', head: 'What tends to reduce investment',
            body: 'Higher interest rates, weak confidence, weak profits, weak demand, lack of innovation, uncertainty, or higher taxes.' }
        ]},
        { type: 'calloutStrip', tone: 'green', icon: '👁️', text: 'Synthesis — Investment is forward-looking – it responds to expectations today about returns, risks and conditions tomorrow.' },
        { type: 'bigIdea', text: 'Big idea: Investment depends on expected returns and the ability to finance – driven by confidence, conditions, costs and policy.' },
        { type: 'examEdge', title: 'Exam edge', text: 'When a driver changes, ask how it affects expected returns or the cost of funding – then link the direction of change to investment.' }
      ]
    },

    /* ── CARD 5 ── The MEC and Investment Decisions ───────────────── */
    {
      id: 'mec',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 5 of 8',
      title: 'The MEC and Investment Decisions',
      lede: 'Firms invest while the expected return on capital exceeds the interest rate.',
      ledeStyle: 'plain',

      blocks: [
        { type: 'calloutStrip', tone: 'green', icon: '✅', text: 'Firms invest while MEC is above the interest rate.' },
        { type: 'diagram', svgKey: 'mecDiagram', caption: 'Equilibrium investment Q* is set where MEC crosses the interest rate. Higher rates lower Q*; a rightward shift in MEC raises Q*.' },
        { type: 'sectionHeader', icon: '📖', label: 'STEP THROUGH IT' },
        { type: 'grid', cols: 3, children: [
          { type: 'tile', tone: 'blue',  icon: '⚖️', head: 'Base equilibrium', body: 'MEC crosses the interest rate at Q*.' },
          { type: 'tile', tone: 'amber', icon: '📈', head: 'Rates rise',       body: 'The interest rate rises to r₂, lowering equilibrium investment to Q₂.' },
          { type: 'tile', tone: 'green', icon: '💡', head: 'MEC shifts right', body: 'Higher optimism or better technology shifts MEC right to MEC₂, raising investment to Q₃.' }
        ]},
        { type: 'sectionHeader', icon: '❓', label: 'WHAT HAPPENS WHEN…' },
        { type: 'grid', cols: 2, children: [
          { type: 'tile', tone: 'amber', icon: '📈', head: 'Interest rates rise',
            body: 'The interest rate line moves up.\n\n↓ MEC crosses at a lower Q → investment falls.\n\nHigher borrowing cost → fewer projects are worthwhile.' },
          { type: 'tile', tone: 'green', icon: '💡', head: 'Animal spirits / tech improve',
            body: 'The MEC curve shifts right.\n\n↑ MEC crosses at a higher Q → investment rises.\n\nHigher expected returns → more projects are worthwhile.' }
        ]},
        { type: 'calloutStrip', tone: 'blue', icon: '✅', text: 'The decision rule — Invest if MEC > interest rate. Do not invest if MEC < interest rate. At equilibrium: MEC = interest rate.' },
        { type: 'bigIdea', text: 'Big idea: Firms invest up to the point where the expected return on the next unit of capital (MEC) equals the interest rate – the cost of borrowing.' },
        { type: 'examEdge', title: 'Exam edge', text: 'Always link the diagram to the story: higher rates raise borrowing cost and reduce investment; better expectations or technology raise MEC and boost investment.' }
      ]
    },

    /* ── CARD 6 ── Investment and the Multiplier ──────────────────── */
    {
      id: 'investment-multiplier',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 6 of 8',
      title: 'Investment and the Multiplier',
      lede: 'Higher demand can trigger more investment, which then multiplies demand again.',
      ledeStyle: 'plain',

      blocks: [
        { type: 'calloutStrip', tone: 'green', icon: '✅', text: 'Investment and demand can amplify each other – every loop is bigger than the last.' },
        { type: 'diagram', svgKey: 'investmentFeedbackLoop', caption: 'Higher demand → more investment → more income → still more demand. The same five steps repeat – and each pass through the loop is larger than the one before.' },
        { type: 'sectionHeader', label: 'THE RIPPLE' },
        { type: 'grid', cols: 5, children: [
          { type: 'tile', tone: 'blue',   head: 'Initial shock', body: 'Investment +100\nIncome/output +150\nConsumption +75' },
          { type: 'tile', tone: 'amber',  head: 'Round 1',       body: 'Investment +60\nIncome/output +90\nConsumption +45' },
          { type: 'tile', tone: 'purple', head: 'Round 2',       body: 'Investment +36\nIncome/output +54\nConsumption +27' },
          { type: 'tile', tone: 'green',  head: 'Round 3',       body: 'Investment +22\nIncome/output +33\nConsumption +16' },
          { type: 'tile', tone: 'slate',  head: 'Round 4+',      body: 'Investment +…\nIncome/output +…\nConsumption +…' }
        ]},
        { type: 'calloutStrip', tone: 'slate', icon: 'ℹ️', text: 'It compounds — Each round is smaller, but together they add up to a much larger total effect.' },
        { type: 'sectionHeader', icon: '📊', label: 'WHY BOOMS AND BUSTS AMPLIFY' },
        { type: 'grid', cols: 3, children: [
          { type: 'tile', tone: 'blue',   icon: '📈', head: 'Positive feedback', body: 'More demand → more investment → more demand. Expansions build momentum.' },
          { type: 'tile', tone: 'amber',  icon: '📉', head: 'Negative feedback', body: 'Less demand → less investment → less demand. Downturns reinforce themselves.' },
          { type: 'tile', tone: 'purple', icon: '〰️', head: 'Delays and lags',  body: 'Decisions take time and are based on expectations, which can overshoot in both directions.' }
        ]},
        { type: 'bigIdea', text: 'Big idea: The accelerator raises investment when demand rises; the multiplier spreads that spending. Together they create powerful, self-reinforcing cycles.' },
        { type: 'examEdge', title: 'Exam edge', text: 'In exam answers, explain how the accelerator–multiplier interaction can magnify both expansions and contractions in aggregate demand and output.' }
      ]
    },

    /* ── CARD 7 ── Real-world Investment ──────────────────────────── */
    {
      id: 'real-world-investment',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 7 of 8',
      title: 'Real-world Investment',
      lede: 'Recent UK episodes show how uncertainty, shocks and interest rates shape investment.',
      ledeStyle: 'plain',

      blocks: [
        { type: 'calloutStrip', tone: 'green', icon: '✅', text: 'Business confidence and borrowing costs can move investment sharply.' },
        { type: 'sectionHeader', icon: '📅', label: 'THREE UK EPISODES' },
        { type: 'grid', cols: 3, children: [
          { type: 'tile', tone: 'blue',  icon: '📉', head: 'Post-Brexit uncertainty slump – 2016–19',
            body: 'Referendum shock and prolonged uncertainty led firms to delay projects and hold back spending.\n\nOutcome: Weak investment' },
          { type: 'tile', tone: 'amber', icon: '🦠', head: 'Covid capex freeze – 2020, snap-back 2021',
            body: 'Lockdowns froze investment in 2020; strong demand, savings and support drove a rebound in 2021.\n\nOutcome: Sharp rebound' },
          { type: 'tile', tone: 'green', icon: '🏦', head: 'The high-rate squeeze – 2023–24',
            body: 'Higher interest rates lifted borrowing costs and curbed investment plans across many sectors.\n\nOutcome: Soft investment' }
        ]},
        { type: 'sectionHeader', icon: '📊', label: 'WHAT EACH EPISODE SHOWS' },
        { type: 'grid', cols: 3, children: [
          { type: 'tile', tone: 'blue',   head: '2016–19 Post-Brexit',       body: 'Confidence fell sharply. Political uncertainty, trade & policy ambiguity. Low and stable rates. Firms delayed and cancelled projects.' },
          { type: 'tile', tone: 'amber',  head: '2020–21 Covid cycle',       body: 'Collapsed in 2020, recovered in 2021. Pandemic, lockdowns, supply chain shocks. Very low rates. Frozen in 2020, strong snap-back in 2021.' },
          { type: 'tile', tone: 'green',  head: '2023–24 High-rate squeeze', body: 'Cautious and fragile confidence. Energy price shock, global uncertainty. High (Bank Rate at 5.25%). Investment plans scaled back.' }
        ]},
        { type: 'calloutStrip', tone: 'green', icon: '🌟', text: 'Common thread — Investment is highly sensitive to expectations, shocks and the cost of capital.' },
        { type: 'bigIdea', text: 'Big idea: Uncertainty, shocks and interest rates shift confidence and the cost of capital – and investment moves.' },
        { type: 'examEdge', title: 'Exam edge', text: 'Always link episodes to the channels: confidence, disruption and rates → investment outcomes.' }
      ]
    },

    /* ── CARD 8 ── Evaluating Investment as an AD Driver ──────────── */
    {
      id: 'evaluating-investment',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 8 of 8',
      title: 'Evaluating Investment as an AD Driver',
      lede: 'Investment is powerful, but also volatile and uncertain.',
      ledeStyle: 'plain',

      blocks: [
        { type: 'calloutStrip', tone: 'green', icon: '✅', text: 'Investment can drive both demand now and capacity later – but it is the least predictable AD component.' },
        { type: 'sectionHeader', icon: '⚖️', label: 'THE EVALUATION GRID' },
        { type: 'grid', cols: 3, children: [
          { type: 'tile', tone: 'blue',   icon: '📉', head: 'Volatility',
            body: 'Investment is highly volatile and sensitive to sentiment, confidence and financial conditions.' },
          { type: 'tile', tone: 'amber',  icon: '⏱️', head: 'Long-run vs short-run',
            body: 'Drives long-run capacity growth but can be pro-cyclical in the short run.' },
          { type: 'tile', tone: 'purple', icon: '👥', head: 'Crowding out',
            body: 'May raise interest rates and reduce private consumption or other investment.' },
          { type: 'tile', tone: 'green',  icon: '🐂', head: 'Animal spirits',
            body: 'Driven by confidence and expectations rather than current profits alone.' },
          { type: 'tile', tone: 'blue',   icon: '⌛', head: 'Time lags',
            body: 'Decisions, financing and implementation create delays in AD effects.' },
          { type: 'tile', tone: 'amber',  icon: '🏅', head: 'Quality of investment',
            body: 'Productive, innovative investment boosts future AS and AD more.' }
        ]},
        { type: 'sectionHeader', icon: '⚖️', label: 'JUDGEMENT FRAMEWORK' },
        { type: 'grid', cols: 4, children: [
          { type: 'tile', tone: 'blue',   icon: '🎯', head: 'Size',       body: 'How large is the investment impulse relative to AD?' },
          { type: 'tile', tone: 'amber',  icon: '📅', head: 'Timing',     body: 'When will it affect demand, and how lasting is it?' },
          { type: 'tile', tone: 'green',  icon: '🏅', head: 'Quality',    body: 'Is it productive, innovative and capacity enhancing?' },
          { type: 'tile', tone: 'purple', icon: '🛡️', head: 'Confidence', body: 'How strong and stable is business confidence?' }
        ]},
        { type: 'calloutStrip', tone: 'blue', icon: '💡', text: 'Synthesis — Evaluate investment by balancing its size, timing, quality and confidence – knowing its impact is uncertain.' },
        { type: 'bigIdea', text: 'Big idea: Investment is the most powerful driver of future capacity and demand – and the least predictable.' },
        { type: 'examEdge', title: 'Exam edge', text: 'Strong evaluation distinguishes short-run AD effects from long-run AS effects.' }
      ],

      quizCta: { href: TopicLoader.routes.quiz('main'), label: 'Test yourself →' }
    }

  ]
};
