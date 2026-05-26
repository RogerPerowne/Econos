/* ============================================================
   ECONOS — content data for aggregate_demand
   4 cards on AD as a system. The components (C, I, G, X−M)
   each live in their own topic — see js/data/consumption,
   investment, government_spending, net_trade.
   Edexcel Theme 2.2.1
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'aggregate_demand',
  topicNum: '2.1',
  theme: 'Theme 2 · The National and Global Economy',
  title: 'Aggregate Demand',
  estTime: '5-7 minutes',
  goal: 'Lock in the AD formula, slope, shifts, and the multiplier',

  intro: {
    heroKey: 'heroAd',
    summary: "Four components, one curve. This topic locks in AD as a system — how it slopes, how it shifts, and how the multiplier amplifies changes. Each component (C, I, G, X−M) has its own deep-dive topic.",
    doInThis: 'Lock in the composition, slope, movement vs shift, and the multiplier — the gems that lift AD answers from B to A*.',
    outcomes: [
      'Know the 4 components and their weights',
      'Explain why AD slopes downward',
      'Distinguish movement along from shift of AD',
      'Apply the multiplier to fiscal stimulus'
    ],
    tip: "Each component (C, I, G, X−M) has its own dedicated topic for the deep dive on determinants and policy.",
    stages: [
      { num: 1, name: 'Learn',  sub: '4 concept cards',     state: 'current' },
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
      stepLabel: 'Learn: Step 1 of 4',
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
      stepLabel: 'Learn: Step 2 of 4',
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
      stepLabel: 'Learn: Step 3 of 4',
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

    /* Component cards (consumption, investment, gov-nettrade) split into separate topics — see js/data/consumption|investment|government_spending|net_trade */
    /* ----- CARD 7 — The multiplier ----- */
    {
      id: 'multiplier',
      template: 'puzzle',
      chartKey: 'multiplierChart',
      stepLabel: 'Learn: Step 4 of 4',
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
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself →' }
    }

  ]
};
