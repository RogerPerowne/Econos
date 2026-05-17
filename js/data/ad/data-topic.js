/* ============================================================
   ECONOS — content data for aggregate_demand
   7 cards · revision-tight · exam-edge gems flagged
   Edexcel Theme 2.2
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'aggregate_demand',
  topicNum: '2.1-2.5',
  theme: 'Theme 2 · The National and Global Economy',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'Aggregate Demand',
  estTime: '8-10 minutes',
  goal: 'Lock in the four engines that drive AD',

  intro: {
    heroKey: 'heroAd',
    summary: "Four components, one curve. Knowing relative sizes and volatility is what separates A* answers from textbook recital.",
    doInThis: 'Lock in the composition, the slope, and the multiplier — the gems that lift AD answers from B to A*.',
    outcomes: [
      'Know the 4 components',
      'Spot movement vs shift',
      'Lock in 7 exam-edge gems'
    ],
    tip: "These cards are revision, not first-time learning. They cue what you already know and flag the gems that lift answers.",
    stages: [
      { num: 1, name: 'Learn',  sub: '8 concept cards',     state: 'current' },
      { num: 2, name: 'Master', sub: 'Apply in exam-style questions',  state: 'locked' },
      { num: 3, name: 'Review', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [

    /* ----- CARD 1 — Framing: AD = C + I + G + (X−M) ----- */
    {
      id: 'composition',
      template: 'framing',
      diagramKey: 'adComposition',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'AD = C + I + G + (X−M)',
      lede: 'Four engines, one outcome. The relative sizes — and which ones are volatile — is what separates textbook answers from real economic reasoning.',
      branches: [
        { tone: 'green',  label: 'Consumption (C)',  sub: 'About <strong>~60%</strong> of UK AD. Driven by disposable income, interest rates, wealth, expectations, debt.' },
        { tone: 'amber',  label: 'Investment (I)',   sub: 'About <strong>~17%</strong>. The <em>volatile</em> engine — drives most of the cycle despite its size.' },
        { tone: 'blue',   label: 'Government (G)',   sub: 'About <strong>~20%</strong>. The fiscal lever — the only component policymakers control directly.' },
        { tone: 'purple', label: 'Net Trade (X−M)',  sub: 'About <strong>~3%</strong> (often negative for UK). Small but volatile — exchange-rate driven.' }
      ],
      examEdge: {
        title: 'Quote the shares',
        text: 'A* answers cite rough component shares: <strong>C ~60%, I ~17%, G ~20%, (X−M) ~3%</strong>. It signals you understand the actual UK economy, not just the formula.'
      },
      keyTakeaway: {
        title: 'Why this matters',
        text: "When AD shifts, the component matters as much as the size. A 1% rise in G is policy. A 1% rise in C is confidence. Different stories, different policy responses."
      }
    },

    /* ----- CARD 2 — Why does AD slope downward? ----- */
    {
      id: 'slope',
      template: 'mechanisms',
      stepLabel: 'Learn: Step 2 of 8',
      title: 'Why does AD slope downward?',
      lede: "Three macroeconomic effects — and they're NOT the same as a market demand curve. Naming them by name is an A* signal.",
      mechanisms: [
        {
          num: '1',
          tone: 'green',
          title: 'Wealth effect',
          text: 'Higher price level erodes the real value of fixed nominal assets (cash, bonds). Households feel poorer → consume less → AD falls.'
        },
        {
          num: '2',
          tone: 'blue',
          title: 'Interest rate effect',
          text: 'Higher prices push up demand for money → interest rates rise → investment and big-ticket consumption fall → AD falls.'
        },
        {
          num: '3',
          tone: 'amber',
          title: 'International substitution',
          text: "Higher domestic prices make UK goods less competitive → exports fall, imports rise → (X−M) falls → AD falls."
        },
        {
          num: '4',
          tone: 'rose',
          title: 'NOT the same as market demand',
          text: "Common student trap: this is NOT 'as price rises, people buy substitutes'. There IS no substitute for the whole economy. The three effects above are the actual mechanism."
        }
      ],
      examEdge: {
        title: 'Name two, not one',
        text: "Most students give one reason (usually a vague 'people buy less'). A* answers name <strong>at least two of the three effects</strong> explicitly and explain the mechanism."
      },
      connection: {
        title: 'Why this matters',
        text: "Understanding WHY AD slopes down is what separates students who 'know the diagram' from students who 'understand the diagram'. Examiners reward the latter."
      }
    },

    /* ----- CARD 3 — Movement along vs shifts of AD ----- */
    {
      id: 'movement-vs-shift',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 3 of 8',
      title: 'Movement along vs shifts of AD',
      lede: 'The single most-marked-down confusion in AD essays. Press each step below to see what the AD curve actually does.',
      steps: [
        {
          key: 'base',
          label: 'AD diagram',
          text: 'AD slopes downward for three macroeconomic reasons (wealth, interest rate, international substitution). At baseline equilibrium <strong>E₁</strong>, the economy sits at price <strong>P₁</strong> and output <strong>Y₁</strong>.'
        },
        {
          key: 'extension',
          label: 'Extension (movement along)',
          text: 'If the <strong>price level falls</strong>, the economy slides DOWN the existing AD curve to a new point <strong>E₂</strong> — higher output, lower price. The curve does NOT move. Same curve, different point. <strong>Trigger:</strong> price level changes.'
        },
        {
          key: 'shift',
          label: 'Shift of AD curve',
          text: 'If <strong>C, I, G or (X−M) changes</strong> — for any non-price reason — the WHOLE curve moves. AD₁ → AD₂ at every price level. Rate cuts, fiscal stimulus, sterling movements, confidence shocks all shift AD. <strong>Trigger:</strong> any non-price variable changes.'
        }
      ],
      examEdge: {
        title: 'Name the type first',
        text: 'Open AD essays with: <em>"This is a shift of AD because [factor]…"</em> or <em>"This is movement along AD because price level changed."</em> Naming the type before the analysis is the clear analytical step examiners reward.'
      }
    },

    /* ----- CARD 4 — Consumption: the biggest engine ----- */
    {
      id: 'consumption',
      template: 'cause',
      tone: 'green',
      bannerLabel: 'Component 1 · Consumption (~60%)',
      diagramKey: 'consumptionDrivers',
      stepLabel: 'Learn: Step 4 of 8',
      title: 'Consumption — the biggest engine',
      lede: '~60% of UK AD. Mostly stable, but can collapse in confidence shocks. The savings ratio is your real-time signal.',
      diagramCaption: 'UK household consumption ≈ 60% of GDP. The bedrock of AD.',
      causes: {
        title: 'What drives C',
        items: [
          'Disposable income (Y−T): the main driver',
          'Interest rates: high rates → save more, borrow less',
          'Wealth: house prices, share prices (the wealth effect)',
          'Expectations: confidence about jobs and income',
          'Household debt: high debt → fragile consumption',
          'MPC = ΔC/ΔY (typical UK 0.6-0.8 — sets the multiplier)'
        ]
      },
      hallmarks: {
        title: "Characteristics",
        items: [
          'Savings ratio falling → C rising',
          'Consumer confidence index strengthening',
          'Retail sales growing',
          'Mortgage approvals rising'
        ]
      },
      ukExamples: {
        title: 'UK examples',
        text: '<strong>2020 lockdown:</strong> C collapsed ~20%, then bounced back as savings deployed. <strong>2022 cost-of-living crisis:</strong> real wages fell, C squeezed despite nominal wage growth. <strong>Savings ratio</strong> spiked to 25% during COVID, normalised to ~5% by 2023.'
      },
      examEdge: {
        title: 'Quote the savings ratio',
        text: 'The savings ratio (% of disposable income saved) moves opposite to C in confidence shocks. A* answers reference it as a real-time signal — currently around 5-10% in the UK depending on quarter.'
      },
      policy: {
        title: 'Why C matters for policy',
        text: 'Because C is ~60% of AD, anything that affects household income, debt, or confidence has a huge AD effect. Income tax cuts, interest rate changes, and wealth shocks (housing, equities) all transmit through C first.'
      }
    },

    /* ----- CARD 5 — Investment: the volatile engine ----- */
    {
      id: 'investment',
      template: 'cause',
      tone: 'amber',
      bannerLabel: 'Component 2 · Investment (~17%)',
      diagramKey: 'investmentVolatility',
      stepLabel: 'Learn: Step 5 of 8',
      title: 'Investment — the volatile engine',
      lede: "Only ~17% of AD but drives most of the business cycle. When firms lose confidence, I falls FIRST and FURTHEST. That's the gem.",
      diagramCaption: 'UK business investment, 2007-2024. Note the 2009, 2016-19, and 2020 troughs.',
      causes: {
        title: 'What drives I',
        items: [
          'Interest rates: cost of borrowing for capex',
          'Business confidence: animal spirits',
          'Accelerator: ΔY drives ΔI (small ΔY → big ΔI)',
          'Corporate tax rate: after-tax returns',
          'Credit availability: bank lending standards',
          'Technology and innovation: new opportunities',
          'Government policy: investment allowances, subsidies'
        ]
      },
      hallmarks: {
        title: "Characteristics",
        items: [
          'PMI (Purchasing Managers Index) above/below 50',
          'Business confidence surveys',
          'Capex announcements / cancellations',
          'Corporate bond yields and spreads'
        ]
      },
      ukExamples: {
        title: 'UK examples',
        text: '<strong>2008-09:</strong> business investment fell ~25%. <strong>2016-19 Brexit uncertainty:</strong> UK I flatlined while peers grew — costing ~2-3% of GDP cumulatively. <strong>2020 lockdown:</strong> I fell ~15%, then mini-bust on confidence in 2022-23.'
      },
      examEdge: {
        title: 'I is the cycle\'s engine',
        text: "Despite being only ~17% of AD, investment volatility drives most cyclical fluctuation. Stating this — <em>'I is small but volatile, so it amplifies AD changes'</em> — is an A* analytical move."
      },
      policy: {
        title: 'Why I matters for policy',
        text: 'Central banks target I directly via interest rates. Fiscal policy targets I via corporate tax and investment allowances. Confidence shocks (Brexit, COVID, war) hit I first — which is why "uncertainty" matters so much for growth.'
      }
    },

    /* ----- CARD 6 — Government & Net Trade ----- */
    {
      id: 'gov-nettrade',
      template: 'paired',
      stepLabel: 'Learn: Step 6 of 8',
      title: 'Government & Net Trade',
      lede: 'G is the policy lever (~20%). Net trade is the open-economy link (~3% but volatile). Different mechanics, paired here for efficiency.',
      bannerLabel: 'Components 3 & 4 · Policy + Open Economy',
      bannerTone: 'blue',
      pairs: [
        {
          tone: 'blue',
          label: 'Government (G) ~20%',
          drivers: [
            'Fiscal policy: spending and taxation decisions',
            'Automatic stabilisers (welfare, tax revenue)',
            'Political cycle and election commitments',
            'Debt-to-GDP and fiscal rules constraints'
          ],
          example: '<strong>2020 furlough scheme:</strong> G surged as the state replaced private incomes. <strong>2022-24:</strong> fiscal rules tightened to contain debt, constraining G.'
        },
        {
          tone: 'purple',
          label: 'Net Trade (X−M) ~3%',
          drivers: [
            'Exchange rate: weaker £ → exports cheaper, imports dearer',
            'Real income at home (affects M) and abroad (affects X)',
            'Trade barriers, tariffs, non-tariff barriers',
            'Productivity and non-price competitiveness'
          ],
          example: '<strong>2022 sterling fall</strong> + energy import surge → trade deficit widened sharply. <strong>Brexit 2021</strong> introduced non-tariff barriers raising costs on EU trade.'
        }
      ],
      examEdge: {
        title: 'G is the only direct lever',
        text: "G is the only AD component government can directly control. C and I are influenced via policy (rates, tax); (X−M) is influenced via currency. But G is set by spending decisions. That's why fiscal policy is so powerful."
      },
      policy: {
        title: 'Policy connection',
        text: 'Expansionary fiscal policy = G ↑ or T ↓. Both shift AD right. Tightening = G ↓ or T ↑. Net trade is harder for policymakers to steer directly — depends on currency and competitiveness.'
      }
    },

    /* ----- CARD 7 — The multiplier ----- */
    {
      id: 'multiplier',
      template: 'puzzle',
      chartKey: 'multiplierChart',
      stepLabel: 'Learn: Step 7 of 8',
      title: 'The multiplier',
      lede: "A £10bn injection doesn't stay £10bn. Spending in one round becomes someone else's income in the next. Forgetting this is a classic A* trap.",
      classical: {
        title: 'The multiplier formula',
        formula: 'k = 1 / (1 − MPC)',
        formulaSub: 'where MPC = marginal propensity to consume',
        quote: '"An initial injection ripples through the economy as income, spending, income, spending..."',
        examples: 'UK MPC typically <strong>0.6-0.8</strong>. So k = 2.5-5. A £10bn stimulus becomes roughly <strong>£25-50bn</strong> in final AD impact. Government spending decisions are leveraged accordingly.'
      },
      puzzle: {
        title: 'The ripple',
        chartCaption: '£10bn stimulus with MPC = 0.6. Each round = 60% of the previous one.',
        bullets: [
          '<strong>Round 1:</strong> Gov spends £10bn on infrastructure. Workers receive £10bn income.',
          '<strong>Round 2:</strong> Workers spend 60% (£6bn) on goods and services. Firms receive £6bn.',
          '<strong>Round 3:</strong> Firms\' workers spend 60% of that (£3.6bn). And so on.',
          '<strong>Total over all rounds:</strong> £10bn × 1/(1−0.6) = <strong>£25bn</strong>.'
        ],
        cliffhanger: 'Why?',
        reveal: {
          title: 'Spoiler — the multiplier matters because',
          text: "Forgetting the multiplier means underestimating fiscal stimulus by 2-5×. Examiners reward students who apply it. The <strong>full multiplier</strong> formula accounts for leakages (savings, taxes, imports): <em>k = 1/(MPS + MRT + MRM)</em>. The simple version is fine for Paper 2 unless asked.",
          hints: ['MPC = 0.6', 'k = 2.5', 'leakages reduce k', 'taxes, savings, imports']
        }
      },
      examEdge: {
        title: 'Always apply the multiplier',
        text: 'When asked about fiscal stimulus, the answer is rarely just "AD shifts right by £X". The answer is "AD shifts right by £X × k". Stating the multiplier value (even approximately) is a 2-3 mark gem.'
      },
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself &#8594;' }
    }

  ]
};
