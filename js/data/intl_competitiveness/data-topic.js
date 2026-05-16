window.ECONOS_TOPIC = {
  id: 'intl_competitiveness',
  topicNum: '4.6',
  theme: 'Theme 4 \xb7 A Global Perspective',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'International Competitiveness',
  estTime: '9-11 minutes',
  goal: 'Lock in what determines a country\'s international competitiveness, how it is measured, and how policy can improve it.',
  intro: {
    heroKey: 'heroGlobe',
    summary: 'International competitiveness is about whether domestic firms can win orders in global markets. It depends on price factors (unit labour costs, exchange rate) and non-price factors (quality, innovation, infrastructure). The UK\'s productivity puzzle is a central case study.',
    doInThis: 'Work through 7 cards covering the definition and measurement of competitiveness, unit labour costs, non-price factors, the UK productivity puzzle, and supply-side strategies to improve competitiveness.',
    outcomes: [
      'Define and measure international competitiveness using unit labour costs and indices',
      'Distinguish price and non-price competitiveness and their determinants',
      'Explain the UK productivity puzzle and its consequences',
      'Evaluate policies to improve international competitiveness'
    ],
    tip: 'Unit labour cost = wage cost per unit of output. It rises if wages grow faster than productivity — making the country less price-competitive.',
    stages: [
      { num: 1, name: 'Learn it', sub: '8 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'intl_competitiveness_1',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'International competitiveness: the big picture',
      lede: 'Why do German cars sell despite high wages, while UK exports lag? Competitiveness has two faces — and one stubborn underlying driver.',
      branches: [
        { tone: 'green',  label: 'Price competitiveness', sub: 'Lower unit costs let firms undercut rivals. Driven by unit labour costs, exchange rates, and input prices.' },
        { tone: 'blue',   label: 'Non-price competitiveness', sub: 'Quality, design, innovation, brand and reliability. Why customers pay more for a Mercedes than a Kia.' },
        { tone: 'amber',  label: 'Productivity as bedrock', sub: 'In the long run, productivity growth is what funds both higher wages and lower unit costs. The UK\'s puzzle sits here.' },
        { tone: 'purple', label: 'Macro consequences', sub: 'Competitiveness shapes the current account, jobs in tradeable sectors, and the real exchange rate. It ties micro performance to macro outcomes.' }
      ],
      body: '<strong>International competitiveness</strong> refers to the ability of a country\'s firms to sell goods and services successfully in global markets relative to foreign rivals. It has two dimensions:<br><br><strong>Price competitiveness:</strong> producing at lower cost per unit than competitors — determined by unit labour costs (ULC), exchange rates, raw material costs, and tax rates.<br><br><strong>Non-price competitiveness:</strong> offering products that are preferred at the same or even higher price — determined by quality, reliability, design, innovation, after-sales service, and brand reputation.',
      keyTerms: [
        { term: 'Unit labour cost (ULC)', def: 'Total labour cost divided by output — wage cost per unit produced. Lower ULC = greater price competitiveness.' },
        { term: 'Price competitiveness', def: 'Ability to offer lower prices than rivals, driven by productivity and cost control.' },
        { term: 'Non-price competitiveness', def: 'Ability to attract buyers through quality, innovation and brand rather than price alone.' }
      ],
      examEdge: 'Germany sustains a large current account surplus despite higher wages than many rivals because of superior non-price competitiveness (engineering quality, brand). This is a powerful counter-example when essays claim that high wages always harm export performance.'
    },
    {
      id: 'intl_competitiveness_2',
      template: 'mechanisms',
      title: 'Unit Labour Costs: The Key Metric',
      intro: 'ULC = (Wage rate) \xf7 (Labour productivity). A rise in ULC means the country is becoming less price-competitive.',
      steps: [
        { label: 'ULC rises if...', text: 'Wages rise faster than productivity. e.g. wages +5% but productivity +2% → ULC rises ~3%. Exports become more expensive; firms lose market share.' },
        { label: 'ULC falls if...', text: 'Productivity rises faster than wages — or wages are cut. ULC falling = price competitiveness improving without currency depreciation.' },
        { label: 'Exchange rate interaction', text: 'Currency depreciation reduces ULC in foreign currency terms even if domestic ULC is unchanged. But if depreciation causes inflation → wages rise → partially offsets competitiveness gain.' },
        { label: 'Policy levers', text: 'To reduce ULC: invest in training/capital (raise productivity) OR restrain wage growth OR allow currency to depreciate. Supply-side policies target the first; monetary policy indirectly affects the last.' }
      ],
      examEdge: 'ULC analysis is the bridge between macro (wages, inflation) and trade (competitiveness, current account). Tying these together in a chain of reasoning earns top-band marks: "rising wage inflation → higher ULC → less price-competitive exports → current account worsens."'
    },
    {
      id: 'intl_competitiveness_3',
      template: 'cause',
      title: 'Non-Price Competitiveness Factors',
      causes: [
        { head: 'Quality and reliability', body: 'Premium products sustain price premiums and loyal customers regardless of exchange rate fluctuations — German car industry, UK financial services, Swiss watches.' },
        { head: 'Innovation and R&D', body: 'Firms that innovate create new markets or retain existing ones. Countries with high R&D spending (South Korea, US, Germany) sustain competitiveness through product differentiation.' },
        { head: 'Infrastructure', body: 'Fast logistics, reliable energy, digital connectivity reduce costs and improve delivery. UK\s infrastructure is ranked relatively poorly (HS2 delays, slow broadband rollout).' },
        { head: 'Skills and human capital', body: 'Highly skilled workers produce higher-value output. University system, vocational training, and STEM investment are long-run drivers.' },
        { head: 'Institutional quality', body: 'Rule of law, property rights, contract enforcement, low corruption reduce business risk and attract FDI — key for sustained export performance.' }
      ],
      examEdge: 'The Global Competitiveness Index (World Economic Forum) ranks countries on 12 pillars covering both price and non-price factors. UK typically ranks around 8th-12th — strong in financial services and higher education, weaker in infrastructure and transport.'
    },
    {
      id: 'intl_competitiveness_4',
      template: 'framing',
      title: 'The UK Productivity Puzzle',
      body: 'Since the 2008 financial crisis, UK productivity growth has been exceptionally weak — a "productivity puzzle." UK output per hour is ~18% below the G7 average. Pre-crisis, productivity grew ~2% per year; post-crisis, growth averaged ~0.3%.<br><br><strong>Proposed explanations:</strong> (1) "Zombie firms" kept alive by low interest rates, preventing resource reallocation to productive firms. (2) Bank credit misallocated to property and financial services rather than business investment. (3) Skills and training gaps — UK underinvests in vocational education. (4) Infrastructure deficits. (5) Post-Brexit uncertainty reducing investment.<br><br>Consequence: lower competitiveness, weaker wage growth, slower improvement in living standards.',
      keyTerms: [
        { term: 'Productivity puzzle', def: 'Unexplained weakness in UK productivity growth since 2008, despite record employment.' },
        { term: 'Zombie firm', def: 'Firm that is technically insolvent but kept alive by low interest rates; consumes resources without contributing to growth.' },
        { term: 'Output per hour', def: 'Standard measure of labour productivity — GDP divided by total hours worked.' }
      ],
      examEdge: 'The productivity puzzle is a perfect evaluation point for supply-side policy essays: "Despite years of supply-side reforms, UK productivity remains below pre-2008 trend, suggesting structural barriers beyond government intervention." It also links to living standards, wages, and the current account.'
    },
    {
      id: 'intl_competitiveness_5',
      template: 'cause',
      title: 'Policies to Improve Competitiveness',
      causes: [
        { head: 'Investment in infrastructure', body: 'Better roads, rail, broadband, and energy grid reduce firm costs. HS2 (high-speed rail), the Levelling Up agenda, and National Grid investment — long time lags before impact.' },
        { head: 'Education and skills', body: 'Improve STEM, vocational training (apprenticeships), and higher education links to business. Address skill shortages in engineering, construction, and digital sectors.' },
        { head: 'R&D incentives', body: 'Tax credits for R&D spending, university-business partnerships, innovation clusters (Cambridge, Oxford). Government target: 2.4% of GDP on R&D by 2027.' },
        { head: 'Competition policy', body: 'Break up monopolies, reduce regulatory barriers to entry — competitive pressure forces firms to improve productivity.' },
        { head: 'Exchange rate policy', body: 'Depreciation improves short-run price competitiveness but risks inflation and does not address underlying productivity weakness — not a substitute for supply-side reform.' }
      ],
      examEdge: 'Key evaluation: supply-side policies have long time lags (infrastructure takes years; education effects take decades) — unlike monetary policy which affects the economy within 12-18 months. This is a structural reason why competitiveness is hard to improve quickly.'
    },
    {
      id: 'intl_competitiveness_6',
      template: 'diagnose',
      title: 'Competitiveness & the Current Account',
      intro: 'International competitiveness directly links to current account performance — declining competitiveness worsens the goods and services balance.',
      rows: [
        { label: 'Mechanism', colA: 'Rising ULC → exports lose price competitiveness', colB: 'Weak non-price factors → exports lose market share even at same price' },
        { label: 'Current account effect', colA: 'Export revenues fall; import substitutes grow → current account deficit widens', colB: 'Structural shift to lower-value exports; deficit becomes structural rather than cyclical' },
        { label: 'Policy response', colA: 'Wage restraint, productivity investment, or depreciation', colB: 'Long-run investment in R&D, skills, infrastructure — supply-side reform' }
      ],
      footer: 'UK case: chronic goods deficit (-\xa3180bn 2023) partly structural — UK has deindustrialised and lacks competitive manufacturing base. Services surplus partially offsets. Competitiveness policy needs to address both dimensions.',
      examEdge: 'Distinguish cyclical from structural current account deficits: a cyclical deficit (caused by strong domestic demand) self-corrects as the economy slows; a structural deficit (caused by weak competitiveness) requires supply-side reform. Examiners reward this distinction.'
    },
    {
      id: 'intl_competitiveness_7',
      template: 'paired',
      title: 'Price vs Non-Price: Which Matters More?',
      left: {
        label: 'Price competitiveness matters most',
        points: [
          'For commodity goods (energy, basic food, raw materials) — price is the only differentiator',
          'Developing country exporters compete primarily on cost',
          'Exchange rate depreciation can rapidly boost competitiveness in goods',
          'Price floors (minimum wage, energy costs) directly affect ULC'
        ]
      },
      right: {
        label: 'Non-price competitiveness matters most',
        points: [
          'For high-value manufacturing (machinery, pharmaceuticals) and services, quality dominates',
          'Germany and Japan sustain surpluses despite high wages — non-price factors dominate',
          'Price competitiveness is eroded by rising wages as countries develop',
          'Innovation and brand loyalty are durable; price advantage can be undercut by EMs'
        ]
      },
      examEdge: 'The answer depends on the industry and development level. UK policy should focus on non-price competitiveness (skills, R&D, services quality) since competing on price with emerging markets is not a viable long-run strategy for a high-wage economy — say this explicitly in an essay.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself &#8594;' }
    }

  ]
};
