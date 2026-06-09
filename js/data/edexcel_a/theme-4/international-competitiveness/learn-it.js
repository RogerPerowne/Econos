/* ============================================================
   ECONOS – International Competitiveness (Edexcel A 4.1.9)
   7 cards · interactive-first build
   Built from the ChatGPT → Claude mockup pipeline.
   What competitiveness is, the two core measures (relative unit
   labour costs and relative export prices), cost vs non-price
   competitiveness, what drives it, why it matters, and the whole story.

   New visuals:
     - competitivenessHub        (Card 1 — competitive-firms 4-spoke hub)
     - costChain                 (Card 3 — wages→productivity→ULC→prices chain)
     - competeRace               (Card 4 — price-wins vs non-price-wins)
     - competitivenessGaugeHub   (Card 5 — Competitiveness-Index gauge + drivers)
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'international-competitiveness',
  topicNum: '4.1.9',
  theme: 'Theme 4 \xb7 A Global Perspective',
  title: 'International Competitiveness',
  estTime: '20 min',
  goal: 'Define international competitiveness, measure it with relative unit labour costs and relative export prices, explain its cost and non-price drivers, and evaluate why it matters for the wider economy',

  intro: {
    heroKey: 'heroTrade',
    summary: 'A country is internationally competitive when its firms can sell successfully at home and abroad — and that depends on far more than being cheap. This deck defines competitiveness, then pins it down with the two measures the spec rewards: relative unit labour costs and relative export prices. It separates cost (price) competitiveness from non-price competitiveness — quality, branding, innovation and reliability — and shows what shapes both: skills, investment, infrastructure, innovation, the exchange rate, business costs and confidence. Productivity is the master variable that runs through it all. The deck closes on why competitiveness matters for exports, jobs, the current account, growth and investment, and how to evaluate it.',
    doInThis: 'Define competitiveness and the two ways to compete. Measure it with relative unit labour costs and relative export prices. Explain cost competitiveness and the exchange-rate pass-through. Distinguish price from non-price competitiveness. Map the drivers that build competitiveness, then evaluate why it matters for the wider economy.',
    outcomes: [
      'Define international competitiveness',
      'Use relative unit labour costs and relative export prices',
      'Explain cost competitiveness and pass-through',
      'Distinguish price from non-price competitiveness',
      'Identify the drivers of competitiveness',
      'Evaluate why competitiveness matters'
    ],
    tip: 'The phrase examiners reward is relative — competitiveness is always measured against rivals, not in absolute terms.',
    stages: [
      { num: 1, name: 'Learn',  sub: '7 cards \xb7 20 min', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [
    /* ============ CARD 1 – The big picture ============ */
    {
      id: 'ic-big-picture',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 1 of 7',
      title: 'International competitiveness — the big picture',
      lede: 'A country is internationally competitive when its firms can sell successfully at home and abroad.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Competitiveness is about <strong>cost and quality</strong> — not just being cheap.' },

      visualKey: 'competitivenessHub',
      visualLabel: 'WHAT COMPETITIVENESS MEANS',
      visualEmoji: '\u{1F3AF}',
      visualCaption: 'International competitiveness is the ability to win sales against foreign rivals in export and domestic markets.',

      pairFirst: true,
      pairLabel: 'Price competitiveness vs Non-price competitiveness',
      pairEmoji: '⚖️',
      left: {
        tone: 'green',
        icon: '\u{1F3F7}️',
        iconStyle: 'circle',
        label: 'Price competitiveness',
        points: ['Lower relative costs', 'Lower relative export prices', 'Helped by efficiency or a weaker currency']
      },
      right: {
        tone: 'purple',
        icon: '\u{1F48E}',
        iconStyle: 'circle',
        label: 'Non-price competitiveness',
        points: ['Quality and design', 'Reliability and branding', 'Innovation and customer service']
      },

      causesLabel: 'WHY IT MATTERS',
      causesEmoji: '\u{1F4C8}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'green',  icon: '\u{1F310}', head: 'Exports', body: 'More sales abroad.' },
        { tone: 'amber',  icon: '\u{1F465}', head: 'Jobs & growth', body: 'Stronger demand for domestic output.' },
        { tone: 'purple', icon: '⚖️', head: 'Current account', body: 'Trade performance may improve.' },
        { tone: 'blue',   icon: '\u{1F3DB}️', head: 'FDI & confidence', body: 'An attractive place to invest.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'A country can be competitive because it is <strong>cheaper, better, or ideally both</strong>.' },

      conclusion: { title: 'Big idea', text: 'Competitiveness is the story of whether a country’s firms can match rivals on price, productivity, quality and appeal.' },
      examEdge: 'Define competitiveness clearly, then explain whether the advantage comes from <strong>costs, quality, or both</strong>.'
    },

    /* ============ CARD 2 – The two core measures ============ */
    {
      id: 'ic-measures',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 2 of 7',
      title: 'The two core measures',
      lede: 'The spec focuses on relative unit labour costs and relative export prices.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Lower relative costs and prices usually make a country more price competitive — but the key word is <strong>relative</strong>.' },

      pairFirst: true,
      pairLabel: 'Relative unit labour costs vs Relative export prices',
      pairEmoji: '\u{1F3AF}',
      left: {
        tone: 'green',
        icon: '⏱️',
        iconStyle: 'circle',
        label: 'Relative unit labour costs',
        text: '<div style="background:#fff;border:1px solid #BBF7D0;border-radius:10px;padding:9px 14px;margin:2px 0 10px;font-size:13px;text-align:center;color:#0B1426;">ULC = <span style="display:inline-block;text-align:center;vertical-align:middle;">labour cost per worker<span style="border-top:1.5px solid #475569;display:block;margin-top:1px;">output per worker</span></span></div><ul style="margin:0;padding-left:18px;font-size:12px;color:#0B1426;line-height:1.5;"><li>Wages up faster than productivity → ULC rises</li><li>Productivity up faster than wages → ULC falls</li><li>Lower ULC often helps firms price more keenly</li></ul>'
      },
      right: {
        tone: 'purple',
        icon: '\u{1F3F7}️',
        iconStyle: 'circle',
        label: 'Relative export prices',
        text: '<ul style="margin:0;padding-left:18px;font-size:12.5px;color:#0B1426;line-height:1.55;"><li>Compare export prices with rival countries</li><li>Exchange rates can alter the foreign-currency price</li><li>Lower relative export prices usually strengthen price competitiveness</li></ul>'
      },

      causesLabel: 'HOW TO READ THEM',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'rose',   icon: '\u{1F4C8}', head: 'Higher ULC', body: 'Cost pressure.' },
        { tone: 'green',  icon: '\u{1F4C9}', head: 'Lower ULC', body: 'Cost advantage.' },
        { tone: 'rose',   icon: '\u{1F3F7}️', head: 'Higher export prices', body: 'Weaker price competitiveness.' },
        { tone: 'green',  icon: '\u{1F3F7}️', head: 'Lower export prices', body: 'Stronger price competitiveness.' }
      ],

      causes2Label: 'COMMON TRAPS',
      causes2Emoji: '⚠️',
      causes2Style: 'icon-top',
      causes2Cols: 3,
      causes2: [
        { tone: 'amber', icon: '\u{1F465}', head: 'High wages ≠ uncompetitive', body: 'High pay can coexist with high productivity.' },
        { tone: 'amber', icon: '⚖️', head: 'Use relative measures', body: 'Compare with rivals, not absolute levels.' },
        { tone: 'amber', icon: '\u{1F396}️', head: 'Price isn’t everything', body: 'Quality still matters for competitiveness.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'A country can have <strong>high wages but still be competitive</strong> if productivity is high.' },

      conclusion: { title: 'Big idea', text: 'These measures help us judge price competitiveness — not the whole story of competitiveness.' },
      examEdge: 'Define the measure, explain what a rise or fall means, and then link it to <strong>export performance</strong>.'
    },

    /* ============ CARD 3 – Cost competitiveness ============ */
    {
      id: 'ic-cost',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 3 of 7',
      title: 'Cost competitiveness',
      lede: 'Wages matter, but productivity and exchange rates often matter more.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Unit labour costs fall when <strong>output per worker rises faster than labour cost per worker</strong>.' },

      visualKey: 'costChain',
      visualLabel: 'THE COST STORY',
      visualEmoji: '\u{1F3AF}',

      flowTitle: 'TWO SCENARIOS — costs rising faster than productivity',
      flowEmoji: '⚖️',
      flowSep: '→',
      flow: [
        { tone: 'rose', icon: '\u{1F465}', title: 'Wages up' },
        { tone: 'rose', icon: '⏱️', title: 'ULC up' },
        { tone: 'rose', icon: '\u{1F3F7}️', title: 'Prices up' },
        { tone: 'rose', icon: '\u{1F4C9}', title: 'Competitiveness weaker' }
      ],

      flow2Title: '…productivity rising faster than costs',
      flow2Emoji: '⚖️',
      flow2Sep: '→',
      flow2: [
        { tone: 'green', icon: '\u{1F4C8}', title: 'Output per worker up' },
        { tone: 'green', icon: '⏱️', title: 'ULC down' },
        { tone: 'green', icon: '\u{1F3F7}️', title: 'Prices lower' },
        { tone: 'green', icon: '\u{1F3C6}', title: 'Competitiveness stronger' }
      ],

      causesLabel: 'EXCHANGE-RATE PASS-THROUGH',
      causesEmoji: '\u{1F4B7}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'blue',   icon: '\u{1F4C8}', head: 'Stronger £', body: 'Appreciation: export prices rise in foreign currency.' },
        { tone: 'green',  icon: '\u{1F4C9}', head: 'Weaker £', body: 'Depreciation: export prices can fall in foreign currency.' },
        { tone: 'purple', icon: '\u{1F4E6}', head: 'Imported inputs', body: 'May offset some gains from a weaker currency.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Low wages alone are not the target — <strong>efficient, productive firms</strong> are the real source of durable cost competitiveness.' },

      conclusion: { title: 'Big idea', text: 'Cost competitiveness is really about relative efficiency, not simply paying workers less.' },
      examEdge: 'Link wages and productivity to <strong>unit labour costs</strong>, then to export prices and demand.'
    },

    /* ============ CARD 4 – Price vs non-price ============ */
    {
      id: 'ic-price-nonprice',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 4 of 7',
      title: 'Price vs non-price competitiveness',
      lede: 'Countries compete not only on cheapness, but also on quality, design and reliability.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'The most competitive economies often combine <strong>strong price discipline with strong non-price appeal</strong>.' },

      pairFirst: true,
      pairLabel: 'Price competitiveness vs Non-price competitiveness',
      pairEmoji: '\u{1F3AF}',
      left: {
        tone: 'green',
        icon: '\u{1F3F7}️',
        iconStyle: 'circle',
        label: 'Price competitiveness',
        points: ['Lower relative costs', 'Lower relative export prices', 'Helped by efficiency or a weaker currency', 'Matters most in standardised markets']
      },
      right: {
        tone: 'purple',
        icon: '\u{1F48E}',
        iconStyle: 'circle',
        label: 'Non-price competitiveness',
        points: ['Quality and design', 'Reliability and branding', 'Innovation and customer service', 'Matters most in differentiated markets']
      },

      causesFirst: true,
      causesLabel: 'WHY NON-PRICE FACTORS MATTER',
      causesEmoji: '\u{1F465}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'green',  icon: '\u{1F3C5}', head: 'Premium brands', body: 'Command higher prices and loyalty.' },
        { tone: 'blue',   icon: '⚙️', head: 'Niche goods', body: 'Serve specialised needs with fewer rivals.' },
        { tone: 'purple', icon: '\u{1F6E1}️', head: 'Customer trust', body: 'Reduces risk and builds repeat sales.' },
        { tone: 'amber',  icon: '\u{1F9E9}', head: 'Stand out', body: 'Differentiation makes products harder to compare on price.' }
      ],

      flowChart: {
        svgKey: 'competeRace',
        label: 'WHICH MATTERS MOST?',
        emoji: '\u{1F3CE}️',
        caption: 'A high-income economy can still be very competitive even if wages are high — if quality, innovation and productivity are strong.'
      },

      conclusion: { title: 'Big idea', text: 'Price competitiveness wins some markets, but non-price competitiveness often protects profits and market share.' },
      examEdge: 'Distinguish clearly between <strong>cheaper products and better products</strong> — then judge which matters more in context.'
    },

    /* ============ CARD 5 – What shapes competitiveness ============ */
    {
      id: 'ic-drivers',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 5 of 7',
      title: 'What shapes international competitiveness?',
      lede: 'Competitiveness is built by the whole economy — skills, investment, costs and confidence.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Productivity is often the <strong>master variable</strong> because it shapes both price and non-price competitiveness.' },

      visualKey: 'competitivenessGaugeHub',
      visualLabel: 'THE BIG DRIVERS',
      visualEmoji: '\u{1F3AF}',

      flowTitle: 'FROM DRIVER TO RESULT',
      flowEmoji: '\u{1F517}',
      flowSep: '→',
      flow: [
        { tone: 'blue',   icon: '\u{1F465}', title: 'Better skills & investment' },
        { tone: 'green',  icon: '⚙️', title: 'Higher productivity & quality' },
        { tone: 'purple', icon: '\u{1F3AF}', title: 'Stronger competitiveness' },
        { tone: 'blue',   icon: '\u{1F310}', title: 'More exports & inward investment' }
      ],

      causesLabel: 'POLICY LEVERS',
      causesEmoji: '\u{1F39B}️',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'green',  icon: '\u{1F393}', head: 'Training', body: 'Build skills pipelines and lifelong learning.' },
        { tone: 'blue',   icon: '\u{1F309}', head: 'Networks', body: 'Invest in transport, digital and energy networks.' },
        { tone: 'purple', icon: '\u{1F9EA}', head: 'R&D support', body: 'Back research, commercialisation and tech adoption.' },
        { tone: 'amber',  icon: '\u{1F3DB}️', head: 'Stable macro', body: 'Sound fiscal policy, low inflation, credible institutions.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'One-off currency moves can help in the short run, but long-run competitiveness is usually <strong>built, not engineered overnight</strong>.' },

      conclusion: { title: 'Big idea', text: 'Deep competitiveness comes from productivity, capability and reliability — not just a cheap currency.' },
      examEdge: 'Separate short-run <strong>exchange-rate effects</strong> from longer-run <strong>supply-side improvements</strong>.'
    },

    /* ============ CARD 6 – Why competitiveness matters ============ */
    {
      id: 'ic-why-matters',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 6 of 7',
      title: 'Why competitiveness matters',
      lede: 'Competitive economies can sell more abroad — weak competitiveness can drag on growth and trade.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Competitiveness affects <strong>exports, jobs, the current account, growth, living standards and FDI</strong>.' },

      causesFirst: true,
      causesLabel: 'BENEFITS OF BEING COMPETITIVE',
      causesEmoji: '\u{1F3AF}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'green',  icon: '\u{1F310}', head: 'Exports', body: 'Stronger sales abroad.' },
        { tone: 'amber',  icon: '\u{1F465}', head: 'Jobs & growth', body: 'Higher demand for domestic output.' },
        { tone: 'purple', icon: '⚖️', head: 'Current account', body: 'Trade performance can improve.' },
        { tone: 'blue',   icon: '\u{1F3DB}️', head: 'FDI & confidence', body: 'An attractive place to invest.' }
      ],

      causes2Label: 'IF A COUNTRY BECOMES UNCOMPETITIVE',
      causes2Emoji: '⚠️',
      causes2Style: 'icon-top',
      causes2Cols: 4,
      causes2: [
        { tone: 'rose', icon: '\u{1F4C9}', head: 'Market share falls', body: 'Rivals win sales at home and abroad.' },
        { tone: 'rose', icon: '⚖️', head: 'CA problems', body: 'Current-account deficits can widen.' },
        { tone: 'rose', icon: '\u{1F3ED}', head: 'Closures & job losses', body: 'Factory closures and unemployment.' },
        { tone: 'rose', icon: '\u{1F4C9}', head: 'Currency pressure', body: 'Weak confidence and a falling currency.' }
      ],

      causes3Label: 'WHO FEELS IT?',
      causes3Emoji: '\u{1F465}',
      causes3Style: 'icon-top',
      causes3Cols: 4,
      causes3: [
        { tone: 'green',  icon: '\u{1F464}', head: 'Consumers', body: 'Fewer choices and higher prices.' },
        { tone: 'purple', icon: '\u{1F477}', head: 'Workers', body: 'Job losses and lower real incomes.' },
        { tone: 'blue',   icon: '\u{1F4BC}', head: 'Firms', body: 'Lower profits, less investment and closures.' },
        { tone: 'amber',  icon: '\u{1F3DB}️', head: 'The state', body: 'Lower tax revenue and higher social spending.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Some cheaper imports can help consumers, but persistent uncompetitiveness can weaken <strong>domestic industry and long-run growth</strong>.' },

      conclusion: { title: 'Big idea', text: 'Competitiveness is not just a trade story — it ripples into jobs, growth, confidence and living standards.' },
      examEdge: 'Always link competitiveness to macro outcomes such as <strong>exports, growth, unemployment, the current account and inward investment</strong>.'
    },

    /* ============ CARD 7 – The whole story ============ */
    {
      id: 'ic-whole-story',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 7 of 7',
      title: 'The whole story',
      lede: 'Strong answers define competitiveness, explain the drivers, and then judge the impact.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Competitiveness is rarely about one thing — it comes from the <strong>mix of costs, productivity, quality and confidence</strong>.' },

      flowTitle: 'THE CHAIN',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'green',  icon: '\u{1F9E0}', title: 'Skills, investment & innovation' },
        { tone: 'amber',  icon: '\u{1F4CA}', title: 'Productivity & costs' },
        { tone: 'purple', icon: '⏱️', title: 'Relative ULC & export prices' },
        { tone: 'blue',   icon: '⚖️', title: 'Price & non-price competitiveness' },
        { tone: 'green',  icon: '\u{1F310}', title: 'Exports, jobs, BoP & FDI' },
        { tone: 'purple', icon: '\u{1F4CB}', title: 'Evaluation' }
      ],

      causesLabel: 'HOW TO WRITE IT',
      causesEmoji: '✍️',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'blue', icon: '\u{1F4DD}', head: '1 · Define the measure', body: 'Relative ULC and relative export prices.' },
        { tone: 'blue', icon: '\u{1F9EE}', head: '2 · Explain the driver', body: 'Productivity, costs, quality, exchange rate.' },
        { tone: 'blue', icon: '\u{1F517}', head: '3 · Trace the macro effects', body: 'Exports, jobs, current account, FDI.' },
        { tone: 'blue', icon: '⚖️', head: '4 · Judge the outcome', body: 'Weigh price against non-price in context.' }
      ],

      causes2Label: 'COMMON EVALUATION POINTS',
      causes2Emoji: '\u{1F3AF}',
      causes2Style: 'icon-top',
      causes2Cols: 4,
      causes2: [
        { tone: 'green',  icon: '\u{1F50D}', head: 'Non-price factors', body: 'Quality and branding can outweigh price.' },
        { tone: 'amber',  icon: '\u{1F310}', head: 'Global demand', body: 'World conditions shape export success.' },
        { tone: 'purple', icon: '⏳', head: 'Short vs long run', body: 'Currency effects fade; capability lasts.' },
        { tone: 'blue',   icon: '\u{1F4B1}', head: 'Exchange rates', body: 'Can help or hurt competitiveness.' }
      ],

      causes3Label: 'COMMON MISTAKES',
      causes3Emoji: '⚠️',
      causes3Style: 'icon-top',
      causes3Cols: 3,
      causes3: [
        { tone: 'rose', icon: '\u{1F3F7}️', head: 'Cheap ≠ competitive', body: 'Cheap is not always competitive.' },
        { tone: 'rose', icon: '\u{1F465}', head: 'High wages ≠ weak', body: 'High wages do not automatically mean weak competitiveness.' },
        { tone: 'rose', icon: 'Ⓡ', head: 'Forgetting “relative”', body: 'Always measure against rivals.' }
      ],

      conclusion: { title: 'Big idea', text: 'The strongest answers combine measures, drivers and consequences — then evaluate the limits.' },
      examEdge: 'Use relative unit labour costs and relative export prices, then widen into <strong>productivity, quality and long-run competitiveness</strong>.'
    }
  ]
};
