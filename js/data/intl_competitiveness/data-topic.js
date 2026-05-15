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
    },

    /* ----- CARD 8 — Essay scaffold ----- */
    {
      id: 'ic-essay',
      template: 'essay-scaffold',
      stepLabel: 'Learn: Step 8 of 8',
      title: 'Essay scaffold: international competitiveness',
      question: 'Evaluate the policies a government could use to improve the international competitiveness of its economy. (25 marks)',
      marks: 25,
      timeGuide: '35 minutes',
      paragraphs: [
        {
          type: 'intro',
          label: 'Introduction',
          prompt: 'Define international competitiveness and distinguish price from non-price competitiveness.',
          hint: 'International competitiveness: ability to sell goods and services in world markets at a profit. Price competitiveness: relative unit labour costs, exchange rate, inflation relative to trading partners. Non-price competitiveness: quality, design, brand, after-sales service, innovation. For a high-wage economy like the UK, non-price factors are more important long-run — competing on price with emerging markets is not a sustainable strategy.',
          model: 'International competitiveness describes an economy\'s ability to sell goods and services in world markets at a sustainable profit, maintaining or growing market share over time. Competitiveness has two dimensions: price competitiveness (determined by unit labour costs, the exchange rate, and relative inflation rates) and non-price competitiveness (quality, innovation, brand strength, reliability, and service). For a high-wage developed economy like the UK, non-price factors are increasingly decisive: Germany sustains a large current account surplus despite high wages because its manufacturing output (machinery, vehicles, chemicals) commands quality premiums that buyers willingly pay. Policy to improve competitiveness must address both dimensions, but particularly the structural supply-side drivers of long-run non-price advantage.'
        },
        {
          type: 'analysis',
          label: 'Analysis 1 — Supply-side policies to improve long-run competitiveness',
          prompt: 'Explain how education, infrastructure, and R&D investment raise long-run non-price competitiveness.',
          hint: 'Human capital: skilled workers → higher productivity → lower unit labour costs → price competitiveness AND better product quality → non-price competitiveness. R&D investment: innovation → new products → higher value-added exports. Infrastructure: reduces logistics costs → lower unit distribution costs. Institutional quality: rule of law, IP protection, efficient courts → attract FDI. UK productivity puzzle: UK productivity 16-18% below G7 average (2024) — reflects underinvestment in all these areas since 2008.',
          model: 'Supply-side policies address the structural drivers of long-run competitiveness most directly. Investment in education and skills raises human capital — increasing labour productivity, reducing unit labour costs, and enabling the development of more sophisticated, higher-value exports. R&D investment and innovation policy (tax credits, university-industry partnerships) create new products and processes, generating the non-price advantages that sustain competitive position against lower-cost rivals. Infrastructure investment (transport, digital connectivity) reduces logistics costs and enables geographic clustering of competitive industries. These policies take years to produce observable effects on competitiveness — the UK\'s persistent productivity gap (16-18% below G7 average in 2024) reflects decades of underinvestment — but they address the root causes rather than symptoms. The German and Nordic economic models, with high public investment in education and infrastructure alongside strong institutional quality, demonstrate that sustained supply-side investment produces durable competitive advantage.'
        },
        {
          type: 'analysis',
          label: 'Analysis 2 — Exchange rate policy and relative cost management',
          prompt: 'Explain how exchange rate depreciation and labour cost control improve price competitiveness.',
          hint: 'Depreciation: lower £ → exports cheaper in foreign currency → higher export demand → improved competitiveness in traded goods. But: Marshall-Lerner condition must hold (PEDx + PEDm > 1). J-curve: competitiveness improves only after time lag. Wage moderation: holding real wage growth below productivity → lower unit labour costs → improved price competitiveness. UK post-2016: 15-20% sterling depreciation → improved price competitiveness for manufactured goods but limited effect on services exports. Limitation: depreciation also raises import costs → SRAS left → inflation → erodes price competitiveness gain.',
          model: 'Exchange rate depreciation improves price competitiveness by reducing the foreign-currency price of UK exports: a 10% fall in sterling makes UK goods 10% cheaper for overseas buyers, boosting export demand provided the Marshall-Lerner condition holds. The post-2016 Brexit-related sterling depreciation provided a natural experiment: UK manufactured exports did become more competitive on price, and export volumes rose. However, the simultaneous rise in import prices pushed SRAS left, increasing domestic costs and partially offsetting the competitiveness gain within two to three years. Wage moderation — holding real wage growth below productivity growth — reduces unit labour costs more durably, improving price competitiveness without inflationary side-effects. However, sustained wage moderation is politically difficult and can reduce domestic consumer demand. For the UK, which has comparative advantage in services (financial, professional, educational), price competitiveness via depreciation matters less than for manufacturing-oriented economies.'
        },
        {
          type: 'counter',
          label: 'Counter — Limitations and the non-price competitiveness gap',
          prompt: 'Evaluate why supply-side improvements take too long for short-run competitiveness challenges, and why price-based approaches are insufficient for structural improvement.',
          hint: 'Time lag: education reform takes 15-20 years to show in workforce productivity. Infrastructure investment: 10+ years (HS2 controversy). Short-run competitiveness challenges (losing export market share) may require faster responses. UK structural weaknesses: management quality, innovation commercialisation, regional concentration in London/South East. Competing on price with East Asian manufacturers is not viable for UK — must be non-price. But non-price competitiveness gaps are structural and slow to close.',
          model: 'The main limitations of supply-side policies are implementation lags: education reforms take 15-20 years to flow through to the workforce, infrastructure projects require a decade from conception to completion, and R&D investment produces commercially deployable technology only after extended development cycles. These lags mean supply-side reform cannot address short-run competitiveness challenges — a firm losing market share to Chinese competitors this year needs faster solutions. Price competitiveness via depreciation provides faster results but is transitory (inflation erodes the gain) and difficult to sustain in an open economy with flexible labour markets and independent monetary policy. The deeper structural challenge for the UK is that its competitiveness gap is primarily non-price and regional: UK productivity is concentrated in London and the South East, with large gaps to the rest of the country, and UK management quality and innovation commercialisation consistently score below international benchmarks. These structural weaknesses are not amenable to quick fixes.'
        },
        {
          type: 'evaluation',
          label: 'Evaluation — Optimal policy mix for a high-wage developed economy',
          prompt: 'Weigh the relative merits of different approaches for the UK\'s specific competitive position.',
          hint: 'For the UK specifically: non-price competitiveness is the durable solution — competing on price with China, India, Vietnam is not viable. Key bottlenecks: management quality, regional disparity, R&D commercialisation, infrastructure. Short-run vs long-run: exchange rate and wage policy for short-run adjustment; supply-side reform for long-run structural improvement. Financial services and professional services: UK has strong non-price competitive advantage here — regulatory framework and talent base are the key assets to protect post-Brexit.',
          model: 'For the UK, the most effective competitiveness policy mix prioritises non-price factors — because the UK cannot and should not compete on labour costs with emerging market economies. The country\'s genuine competitive advantages lie in financial services, professional services, higher education, high-value manufacturing (aerospace, pharmaceuticals), and creative industries: all areas where quality, reputation, regulation, and talent matter far more than price. Policy should protect and develop these advantages: maintaining strong IP frameworks, investing in STEM education and university research, improving London\'s attractiveness as a global financial centre post-Brexit, and closing the regional productivity gap that leaves English regions 20-30% below the capital in productivity. Short-run exchange rate adjustment remains part of the toolkit, but long-run strategy should focus on the structural supply-side reforms that shift the UK toward higher-value, less price-elastic exports where non-price factors determine competitiveness.'
        },
        {
          type: 'conclusion',
          label: 'Conclusion',
          prompt: 'Deliver a reasoned judgement: supply-side investment is the most durable route to competitiveness for the UK, but involves long lags and requires consistent policy commitment.',
          hint: 'Supply-side reform (education, R&D, infrastructure) is the most effective long-run approach. Short-run: exchange rate and relative cost management provide partial support. UK\'s specific challenge: close the productivity gap, capitalise on services competitive advantage, and develop regional economic capacity. No quick fixes — competitiveness is built over decades.',
          model: 'The most effective policies for improving UK international competitiveness are supply-side investments in human capital, R&D, and infrastructure — because these address the structural productivity gaps that determine long-run competitive position. These take time to produce results but are the only durable route to non-price competitiveness that cannot be competed away by emerging market cost advantages. Exchange rate depreciation and wage moderation provide short-run price competitiveness improvements but are temporary and self-limiting. The UK\'s most important strategic asset is its competitive advantage in high-value services — financial services, professional services, education, and creative industries — which depend on regulatory quality, institutional trust, and talent attraction rather than price. Protecting and developing these advantages, while closing the domestic productivity and regional investment gaps that hold back the broader economy, should be the primary focus of UK competitiveness policy. Consistency over time — rather than any single intervention — is what builds durable competitive advantage.'
        }
      ]
    }
  ]
};
