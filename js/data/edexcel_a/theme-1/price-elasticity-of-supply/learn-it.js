window.ECONOS_TOPIC = {
  id: 'price-elasticity-of-supply',
  topicNum: '2.5',
  theme: 'Theme 1 \xb7 Introduction to Markets and Market Failure',
  title: 'Price Elasticity of Supply',
  estTime: '8–10 minutes',
  goal: 'Understand what PES measures, how to calculate it, how to read the coefficient, what determines it, and how it shapes prices, policy, and real markets.',
  intro: {
    heroKey: 'heroElasticity',
    summary: 'PES measures how responsive quantity supplied is to a price change. When demand shifts, PES determines the split between price and quantity adjustment. Inelastic supply means most of the pressure goes into higher prices; elastic supply means output adjusts instead.',
    doInThis: 'Work through 7 cards covering what PES is, elastic vs inelastic supply, a step-by-step worked calculation, how to read the PES coefficient, the determinants of PES, real-world implications, and an exam-ready summary.',
    outcomes: [
      'Define and calculate PES correctly using the formula',
      'Distinguish elastic and inelastic supply and link each to the supply curve diagram',
      'Identify the key determinants of PES and explain why markets differ',
      'Apply PES to housing, agriculture, tax incidence, and supply-side policy'
    ],
    tip: 'PES = % change in QS \xf7 % change in P. Always positive. PES > 1 = elastic; PES < 1 = inelastic; PES = 0 = perfectly inelastic (vertical); PES = ∞ = perfectly elastic (horizontal).',
    stages: [
      { num: 1, name: 'Learn it', sub: '7 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply skills with the context', state: 'available', href: TopicLoader.routes.link('intro') },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [

    /* ================================================================
       CARD 1 – WHAT IS PES
       Hook question → formula → examples
       ================================================================ */
    {
      id: 'pes_1',
      stepLabel: 'Learn: Step 1 of 7',
      title: 'What is Price Elasticity of Supply?',
      intro: 'A factory sees its price jump 20%. Can it ramp up production to capitalise – or is output stuck?',
      body: `<div style="border:2px solid #0B1426;border-radius:10px;padding:16px;text-align:center;margin:12px 0;font-size:18px;font-weight:700;background:#F8FAFC;">
  PES = % ΔQS \xf7 % ΔP
</div>
<p style="margin:10px 0 6px;">PES is <strong>always positive</strong> – price and quantity supplied always move in the same direction (upward-sloping supply curve). There is no negative sign issue, unlike PED.</p>
<ul style="margin:8px 0 0 18px;line-height:1.8;">
  <li><strong>PES &gt; 1:</strong> Elastic supply – quantity rises proportionally <em>more</em> than price.</li>
  <li><strong>PES &lt; 1:</strong> Inelastic supply – quantity rises proportionally <em>less</em> than price.</li>
  <li><strong>PES = 0:</strong> Perfectly inelastic – fixed supply regardless of price; vertical supply curve.</li>
  <li><strong>PES = ∞:</strong> Perfectly elastic – producers supply any amount at the going price; horizontal supply curve.</li>
</ul>`,
      causesEmoji: '📊',
      causesLabel: 'Supply responsiveness – from fixed to flexible',
      causes: [
        {
          head: '🏗️ Housing – very inelastic (PES ≈ 0.1)',
          body: 'Planning permission takes years; construction takes 18+ months; land in specific locations is a fixed factor. A demand surge mostly becomes a price spike – output barely moves. The market adjusts almost entirely through price.'
        },
        {
          head: '🏭 Manufacturing – elastic long-run (PES ≈ 1.5)',
          body: 'Firms can hire workers, extend shifts, and commission new plant over months. Long-run supply responds more than proportionally to price – a demand surge goes mostly into extra output, not higher prices. Time is the key unlock.'
        },
        {
          head: '💻 Digital goods – near-perfectly elastic (PES → ∞)',
          body: 'Once created, software can be replicated at near-zero marginal cost. Any demand surge is met almost instantly and entirely through extra supply – price barely moves. The marginal cost of one more user is effectively zero.'
        }
      ]
    },

    /* ================================================================
       CARD 2 – ELASTIC VS INELASTIC SUPPLY
       Diagram + four supply rules + geometric shortcut
       ================================================================ */
    {
      id: 'pes_2',
      stepLabel: 'Learn: Step 2 of 7',
      title: 'Elastic vs Inelastic Supply',
      intro: 'When demand increases, PES decides the split – how much goes into higher prices, and how much into more output.',
      diagramKey: 'elasticVsInelasticSupplyDiagram',
      steps: [
        {
          label: 'Elastic supply (PES > 1): demand rises → large quantity increase, small price rise',
          text: 'Output can expand easily. Most of the market adjustment happens through higher quantities, not higher prices. Consumers gain access to more goods without paying much more.'
        },
        {
          label: 'Inelastic supply (PES < 1): demand rises → small quantity increase, large price rise',
          text: 'Supply is constrained. Most of the market adjustment falls on price. Existing producers benefit (higher revenue); consumers face a price spike with little extra output.'
        },
        {
          label: 'Perfectly inelastic (PES = 0): all adjustment is in price – zero extra output produced',
          text: 'Supply is completely fixed regardless of price. Vertical supply curve. Any rightward demand shift becomes entirely a price rise – classic examples: land in a specific location, Van Gogh paintings, fish already landed.'
        },
        {
          label: 'Perfectly elastic (PES = ∞): all adjustment is in quantity – price stays constant',
          text: 'Producers supply any amount at the going price. Horizontal supply curve. Any rightward demand shift is met by more output at the same price – typical of long-run perfectly competitive industries with constant costs.'
        }
      ],
      keyTakeaway: 'Inelastic supply + rising demand = price spike. Elastic supply + rising demand = output surge.',
      examEdge: {
        title: 'The geometric shortcut',
        text: 'A supply curve through the origin has PES = 1 everywhere. One that cuts the P-axis (starts above zero) has PES < 1 – inelastic. One that cuts the Q-axis (starts with positive quantity at zero price) has PES > 1 – elastic. This saves calculation time in multiple-choice questions.'
      }
    },

    /* ================================================================
       CARD 3 – WORKED EXAMPLE: CALCULATING PES
       Oil market scenario, 5 scaffolded steps
       ================================================================ */
    {
      id: 'pes_3',
      template: 'pes-calculation',
      stepLabel: 'Learn: Step 3 of 7',
      title: 'Worked Example: Calculating PES',
      lede: 'Show every step – examiners award marks for method, not just the final number.',
      scenario: {
        icon: '🛢️',
        headline: 'Crude oil market',
        subline: 'A price rise tests how quickly producers can ramp up output',
        currency: '$',
        unit: 'm barrels/day',
        p1: 50, p2: 60, q1: 80, q2: 84
      },
      conclusion: 'Oil supply is highly inelastic in the short run because capacity is fixed – existing wells are already at near-full capacity. Long-run PES is higher as new infrastructure is built, which is why oil price shocks moderate over time. Always distinguish short-run vs long-run PES.',
      contextLine: 'PES is always positive because price and quantity supplied always move in the same direction – the supply curve slopes upward.',
      examEdge: {
        title: 'Five steps every time',
        text: 'Formula → % ΔP → % ΔQS → divide → classify. The policy implication (step 5) separates band 3 from band 4 answers – always explain WHY supply is inelastic in this context.'
      }
    },

    /* ================================================================
       CARD 4 – READING THE PES COEFFICIENT
       Five categories with rich colour-coded tiles
       ================================================================ */
    {
      id: 'pes_4',
      template: 'pes-five-frames',
      stepLabel: 'Learn: Step 4 of 7',
      title: 'Reading the PES Coefficient',
      lede: 'PES is always positive. The magnitude tells you how much output can expand when price rises – and how a market absorbs a demand shift.',
      frames: [
        {
          tone: 'rose',
          name: 'Perfectly inelastic',
          pesCoeff: 'PES = 0',
          curveType: 'vertical',
          example: 'Land in a specific location, Van Gogh paintings, fish already landed at market.',
          marketRule: 'Demand shift → 100% price spike, 0% extra output. Supply is completely fixed.'
        },
        {
          tone: 'amber',
          name: 'Inelastic',
          pesCoeff: 'PES < 1',
          curveType: 'steep',
          example: 'UK housing (PES ≈ 0.1), crude oil short-run, agricultural produce within a season.',
          marketRule: 'Demand shift → mostly price rise, small quantity gain. Markets are price-volatile.'
        },
        {
          tone: 'blue',
          name: 'Unit elastic',
          pesCoeff: 'PES = 1',
          curveType: 'origin',
          example: 'Supply through origin has PES = 1 everywhere – a handy visual shortcut.',
          marketRule: '10% price rise → 10% more supplied. Equal split. Curve passes through origin.'
        },
        {
          tone: 'green',
          name: 'Elastic',
          pesCoeff: 'PES > 1',
          curveType: 'shallow',
          example: 'Manufactured goods with spare capacity, many services, long-run agricultural output.',
          marketRule: 'Demand shift → mostly quantity rise, small price increase. Markets adjust well.'
        },
        {
          tone: 'purple',
          name: 'Perfectly elastic',
          pesCoeff: 'PES = ∞',
          curveType: 'horizontal',
          example: 'Long-run perfectly competitive industry with constant costs. Any Q at the going price.',
          marketRule: 'Demand shift → 100% quantity, 0% price. Supply is infinitely flexible.'
        }
      ],
      examEdge: 'Geometric shortcut: supply through origin → PES = 1; cuts P-axis above origin → PES < 1 (inelastic); cuts Q-axis → PES > 1 (elastic). Values to know: UK housing ≈ 0.1, crude oil short-run ≈ 0.2–0.3, manufacturing long-run > 1.'
    },

    /* ================================================================
       CARD 5 – DETERMINANTS OF PES
       Five tiles, time period front and centre
       ================================================================ */
    {
      id: 'pes_5',
      stepLabel: 'Learn: Step 5 of 7',
      title: 'What Determines PES?',
      intro: 'Can producers respond quickly to a price rise? Six factors decide.',
      causes: [
        {
          icon: '⏱️',
          head: 'Time period (most important)',
          body: 'Short run nearly always more inelastic than long run. In the very short run (market period) supply may be completely fixed (PES = 0). As time passes, capacity expands and PES rises significantly.'
        },
        {
          icon: '🏭',
          head: 'Spare capacity',
          body: 'Firms with unused machinery and workers can respond fast to higher prices. At full capacity, output is nearly fixed in the short run – supply is effectively inelastic until new investment arrives.'
        },
        {
          icon: '📦',
          head: 'Stocks and inventories',
          body: 'Large stocks can be released quickly when prices rise – acting like elastic supply in the short run. No stocks means more output must actually be produced, giving a slower response.'
        },
        {
          icon: '🔄',
          head: 'Factor mobility',
          body: 'If labour and capital can easily switch into this good\'s production, PES is higher. Specialised assets (oil rigs, orchards) cannot be redeployed quickly – locking in low PES until long-run investment occurs.'
        },
        {
          icon: '🔧',
          head: 'Complexity and lead times',
          body: 'Housing takes 2–3 years; aircraft take years to manufacture; trees take decades. Long production periods mean near-zero short-run PES regardless of price signals – even a very large price rise cannot unlock output quickly.'
        },
        {
          icon: '💰',
          head: 'Barriers to entry and cost of expansion',
          body: 'High capital costs, planning restrictions, or regulatory barriers slow supply responses. A firm cannot double output overnight if new equipment costs £50m or requires planning permission. Lower barriers mean higher PES.'
        }
      ],
      productExamplesTitle: 'How responsive is supply?',
      productExamplesSubtitle: 'Predict whether supply is elastic or inelastic for each market – then reveal the verdict.',
      productExamples: [
        {
          icon: '🏘️',
          product: 'UK housing',
          verdict: 'Very Inelastic',
          verdictTone: 'red',
          reasoning: 'PES ≈ 0.1. Planning permission takes years, construction takes 18+ months, and land in specific locations is fixed. Demand surges become price spikes, not extra homes.'
        },
        {
          icon: '🛢️',
          product: 'Crude oil (short-run)',
          verdict: 'Inelastic',
          verdictTone: 'orange',
          reasoning: 'PES ≈ 0.2–0.3. Existing wells operate at near-full capacity. New drilling and refinery infrastructure takes years. Price signals can\'t unlock much extra output quickly.'
        },
        {
          icon: '🌾',
          product: 'Wheat (within season)',
          verdict: 'Perfectly Inelastic',
          verdictTone: 'red',
          reasoning: 'PES ≈ 0. Once the crop is planted, output is fixed until the next harvest. Any demand shock or weather event causes a pure price spike – quantity cannot adjust at all.'
        },
        {
          icon: '💻',
          product: 'Software / digital goods',
          verdict: 'Highly Elastic',
          verdictTone: 'green',
          reasoning: 'PES → ∞ for digital goods. Once created, software can be replicated at near-zero marginal cost. Demand surges are met instantly by digital delivery – price barely moves.'
        },
        {
          icon: '🏭',
          product: 'Manufacturing (long-run)',
          verdict: 'Elastic',
          verdictTone: 'green',
          reasoning: 'PES > 1 long-run. Firms can hire workers, add shifts, and build new plant over 1–3 years. Long-run supply is considerably more elastic than short-run – time is the key.'
        }
      ],
      examEdge: {
        title: 'Short-run vs long-run – always distinguish',
        text: 'Short-run vs long-run PES is the single most exam-relevant point. Always state: "In the short run, supply is more inelastic because…" and "In the long run, supply becomes more elastic as…" – this alone can earn a Band 3 mark.'
      }
    },
    /* ================================================================
       CARD 6 – PES IN THE REAL WORLD
       Four application areas with policy depth
       ================================================================ */
    {
      id: 'pes_6',
      stepLabel: 'Learn: Step 6 of 7',
      title: 'PES in the Real World',
      intro: 'PES isn\'t just a formula – it shapes housing crises, food price spikes, tax policy, and economic reform.',
      steps: [
        {
          label: 'Housing market crisis',
          text: 'UK housing PES ≈ 0.1. When demand rises (population growth, Help to Buy subsidies), almost all adjustment is in price – not output. This is why UK house prices outpace general inflation. Demand-side subsidies mainly enrich existing homeowners; only supply-side reform (planning deregulation, new towns) can improve PES and stabilise prices.'
        },
        {
          label: 'Agricultural price volatility',
          text: 'Within-season PES ≈ 0. Harvest shocks or demand spikes cause huge price swings because output cannot adjust until next planting season. This is why commodity prices are notoriously volatile. Buffer stocks and futures markets are used to manage the consequences of near-zero short-run PES.'
        },
        {
          label: 'Tax incidence',
          text: 'The less elastic side of the market bears more of the tax burden. Formula: consumer share = PES \xf7 (PES + |PED|); producer share = |PED| \xf7 (PES + |PED|). Cigarette tax: inelastic demand + fairly elastic supply → consumers bear most of the burden.'
        },
        {
          label: 'Supply-side policy',
          text: 'Governments can improve PES by removing constraints. Planning reform → higher housing PES. Skills training → higher labour PES. R&D funding → firms can scale output at lower cost. Higher PES means demand growth creates output (good) rather than just inflation (bad).'
        }
      ],
      examEdge: 'The housing market is the go-to PES context. Structure your answer: (1) state UK housing PES is very inelastic; (2) explain WHY (planning restrictions, construction time, fixed land); (3) show the consequence (demand shift → price spike); (4) evaluate the policy implication (supply-side reform needed).'
    },

    /* ================================================================
       CARD 7 – EXAM SUMMARY
       5 core facts, common mistakes, 5-step checklist
       ================================================================ */
    {
      id: 'pes_7',
      stepLabel: 'Learn: Step 7 of 7',
      title: 'Exam Summary',
      intro: 'Lock in the essentials – PES has five things examiners always test.',
      body: `<div style="font-size:10px;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;color:#059669;margin-bottom:10px;">① 5 Core Facts</div>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(148px,1fr));gap:10px;margin-bottom:20px;">
  <div style="border-radius:10px;overflow:hidden;border:1px solid #05996920;">
    <div style="background:#059669;color:#fff;font-weight:800;font-size:11px;padding:8px 12px;">🔢 Formula</div>
    <div style="padding:10px 12px;font-size:12px;line-height:1.6;color:#0B1426;">PES = % ΔQS \xf7 % ΔP</div>
  </div>
  <div style="border-radius:10px;overflow:hidden;border:1px solid #2563EB20;">
    <div style="background:#2563EB;color:#fff;font-weight:800;font-size:11px;padding:8px 12px;">&#43; Always positive</div>
    <div style="padding:10px 12px;font-size:12px;line-height:1.6;color:#0B1426;">Price and quantity supplied always move together – never write a negative PES.</div>
  </div>
  <div style="border-radius:10px;overflow:hidden;border:1px solid #D9770620;">
    <div style="background:#D97706;color:#fff;font-weight:800;font-size:11px;padding:8px 12px;">⚖️ Elastic vs Inelastic</div>
    <div style="padding:10px 12px;font-size:12px;line-height:1.6;color:#0B1426;">PES &gt; 1 = elastic (Q rises more than P).<br>PES &lt; 1 = inelastic (P rises more than Q).</div>
  </div>
  <div style="border-radius:10px;overflow:hidden;border:1px solid #7C3AED20;">
    <div style="background:#7C3AED;color:#fff;font-weight:800;font-size:11px;padding:8px 12px;">⏱️ Top determinant</div>
    <div style="padding:10px 12px;font-size:12px;line-height:1.6;color:#0B1426;">Time period – short-run always more inelastic than long-run.</div>
  </div>
  <div style="border-radius:10px;overflow:hidden;border:1px solid #0891B220;">
    <div style="background:#0891B2;color:#fff;font-weight:800;font-size:11px;padding:8px 12px;">🏘️ Key market</div>
    <div style="padding:10px 12px;font-size:12px;line-height:1.6;color:#0B1426;">Housing PES ≈ 0.1 – demand shifts mostly become price rises.</div>
  </div>
</div>

<div style="font-size:10px;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;color:#DC2626;margin-bottom:10px;">② Common Mistakes</div>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:8px;">
  <div style="background:#FFF5F5;border:1px solid #DC2626;border-radius:8px;padding:10px;">
    <div style="font-weight:800;font-size:12px;color:#DC2626;margin-bottom:5px;">⚠️ Forget the positive sign</div>
    <div style="font-size:12px;color:#0B1426;line-height:1.55;">PES is always positive; never write PES = −0.5. If you get a negative answer, you have swapped the formula.</div>
  </div>
  <div style="background:#FFF5F5;border:1px solid #DC2626;border-radius:8px;padding:10px;">
    <div style="font-weight:800;font-size:12px;color:#DC2626;margin-bottom:5px;">⚠️ Slope ≠ PES</div>
    <div style="font-size:12px;color:#0B1426;line-height:1.55;">Steeper slope does not directly give you PES. Use the geometric intercept rule: P-axis cut = inelastic; Q-axis cut = elastic; origin = unit elastic.</div>
  </div>
  <div style="background:#FFF5F5;border:1px solid #DC2626;border-radius:8px;padding:10px;">
    <div style="font-weight:800;font-size:12px;color:#DC2626;margin-bottom:5px;">⚠️ Short-run = long-run</div>
    <div style="font-size:12px;color:#0B1426;line-height:1.55;">Always distinguish time period – short-run PES is almost always lower. Missing this distinction costs marks on any PES question.</div>
  </div>
  <div style="background:#FFF5F5;border:1px solid #DC2626;border-radius:8px;padding:10px;">
    <div style="font-weight:800;font-size:12px;color:#DC2626;margin-bottom:5px;">⚠️ Demand subsidies fix supply problems</div>
    <div style="font-size:12px;color:#0B1426;line-height:1.55;">Help to Buy didn't solve the housing crisis because PES stayed near 0. Demand-side policy can't fix an inelastic supply problem.</div>
  </div>
</div>`,
      steps: [
        { label: 'Define PES', text: '% ΔQS \xf7 % ΔP, always positive – price and quantity supplied move in the same direction.' },
        { label: 'Calculate', text: 'Show each % change separately, then divide. Never skip steps – each one can carry a mark.' },
        { label: 'Classify', text: 'Compare to 1: PES > 1 = elastic, PES < 1 = inelastic. Name the category explicitly.' },
        { label: 'Contextualise', text: 'Explain WHY that market has that PES using at least one determinant (most commonly: time period).' },
        { label: 'Apply', text: 'State the consequence for prices, quantities, or policy – this is where evaluation marks sit.' }
      ],
      keyTakeaway: 'PES is always positive, time is the key determinant, and housing is the go-to real-world context.',
      quizCta: { href: TopicLoader.routes.quiz('main'), label: 'Test yourself →' }
    }

  ]
};

/* ============================================================
   End-of-Learn-It quiz pool · folded in at v0.4.0
   These questions used to live at /quiz/<topic>/<set> as a
   standalone shell. They now ride along with the Learn It data
   under the same window.ECONOS_QUIZ global. The /quiz/ URL
   contract is gone; the quiz is the natural finisher to the
   Learn It journey, so the data lives next to learn cards.
   ============================================================ */
/* ---- quiz-main.js (quiz pool, preserved from former /quiz/ shell) ---- */
(function () {

  window.ECONOS_QUIZ = {
    title:    'Price Elasticity of Supply',
    subtitle: 'Theme 1 &middot; Topic 2.5 &middot; Edexcel A-Level',
    backUrl:  TopicLoader.routes.learn('pes_main'),
    backLabel: 'Back to Learn It',
    lede: '10 questions · ~8 minutes · covers the PES formula, determinants, demand shifts, tax incidence, and supply-side policy',
    shortNames: [
      'PES formula', 'Numeric calculation', 'Determinants sort', 'Demand shift effect',
      'Tax incidence', 'Match pairs', 'Cause & effect', 'Odd one out',
      'Data table', 'Para fill'
    ],

    questions: [

      /* 1 – MCQ: PES interpretation */
      { type: 'mcq',
        stem: 'A good has a price elasticity of supply (PES) of <strong>0.4</strong>. Which statement correctly interprets this value?',
        opts: [
          'Supply is price inelastic: a 10% rise in price leads to only a 4% increase in quantity supplied',
          'Supply is price elastic: a 10% rise in price leads to a 40% increase in quantity supplied',
          'Supply is unit elastic: a 10% rise in price leads to exactly a 10% increase in quantity supplied',
          'The supply curve is horizontal – firms can supply any quantity at the given price'
        ],
        ans: 0,
        exp: 'PES = % change in quantity supplied ÷ % change in price. PES = 0.4 means a 1% rise in price causes a 0.4% rise in quantity supplied – the percentage supply response is <strong>smaller</strong> than the percentage price change → <strong>price inelastic supply</strong> (PES < 1). Example: 10% price rise → 4% increase in QS. Inelastic supply is common in markets with fixed capacity (agricultural land, oil wells, skilled labour) in the short run. Elastic supply (PES > 1) occurs where production can be easily scaled up.'
      },

      /* 2 – Numeric input: PES calculation */
      { type: 'numeric_input',
        stem: 'Calculate the <strong>price elasticity of supply</strong> for this market.',
        context: 'When the price of oil rises from <strong>$60 to $72 per barrel</strong>, daily global production increases from <strong>100 million to 103 million barrels</strong>.',
        answer: 0.25,
        tolerance: 0.02,
        unit: '',
        hint: 'PES = (% change in QS) ÷ (% change in price). Both percentage changes use the original value as the base.',
        workingSteps: [
          '% change in price = (72 − 60) ÷ 60 × 100 = +20%',
          '% change in QS = (103 − 100) ÷ 100 × 100 = +3%',
          'PES = 3% ÷ 20% = 0.15 (or 0.25 using midpoint)',
          'Supply is highly inelastic – oil production cannot easily be scaled up short-term'
        ],
        exp: '% change in price = (72−60)/60 × 100 = <strong>+20%</strong>. % change in QS = (103−100)/100 × 100 = <strong>+3%</strong>. PES = 3%/20% = <strong>0.15</strong>. Supply is highly <strong>price inelastic</strong>: oil production is constrained by fixed capital (wells, refineries), long lead times for new capacity, and geological limits. This explains why oil price spikes translate mostly into higher prices rather than large quantity increases in the short run – and why OPEC production decisions have outsized price effects.'
      },

      /* 3 – Elastic sort: determinants of PES */
      { type: 'elastic_sort',
        stem: 'Classify each good or service as having <strong>relatively elastic</strong> or <strong>relatively inelastic</strong> supply.',
        categories: ['elastic', 'inelastic'],
        categoryLabels: ['Relatively elastic supply (PES > 1)', 'Relatively inelastic supply (PES < 1)'],
        goods: [
          { icon: '🏗️', label: 'New office blocks – 2-3 year construction lead time', note: '', ans: 'inelastic' },
          { icon: '👕', label: 'Mass-produced T-shirts – factories can ramp up quickly', note: '', ans: 'elastic' },
          { icon: '🌾', label: 'Fresh strawberries – one growing season per year in the UK', note: '', ans: 'inelastic' },
          { icon: '📱', label: 'Smartphone apps – digital goods with near-zero marginal replication cost', note: '', ans: 'elastic' },
          { icon: '⚕️', label: 'Specialist neurosurgeons – takes 15+ years of training to qualify', note: '', ans: 'inelastic' },
          { icon: '🍕', label: 'Takeaway pizzas – restaurants can quickly increase output within existing capacity', note: '', ans: 'elastic' }
        ],
        exp: '<strong>Elastic supply</strong> (PES > 1): goods that can be produced quickly with existing capacity or simple technology – mass-produced manufactures, digital goods, standard food services. <strong>Inelastic supply</strong> (PES < 1): goods requiring long lead times (construction), fixed growing seasons (agriculture), scarce specialised resources (surgeons), or capital-intensive extraction (oil). The key determinants of PES are: time period, spare capacity, factor mobility, and ease of storing stocks.'
      },

      /* 4 – MCQ: demand shift and PES */
      { type: 'mcq',
        stem: 'Demand for new houses in a city increases significantly. If housing supply is <strong>price inelastic</strong>, the main effect will be:',
        opts: [
          'The demand increase translates mainly into a large price rise and a small quantity increase',
          'The demand increase translates mainly into a large quantity increase and a small price rise',
          'Both price and quantity increase proportionally, reflecting unit elastic supply',
          'Price rises initially but quickly falls back as supply expands to meet the new demand'
        ],
        ans: 0,
        exp: 'When a demand curve shifts rightward against a steep (inelastic) supply curve, most of the adjustment falls on <strong>price</strong> rather than quantity. With inelastic housing supply (PES < 1), a demand increase produces a large price rise and only a small increase in new homes built. This is exactly what happened in UK cities: persistent demand growth (rising incomes, population, immigration) combined with inelastic supply (planning restrictions, land scarcity, construction lead times) → house price inflation far exceeding consumer price inflation.'
      },

      /* 5 – MCQ: tax incidence and PES */
      { type: 'mcq',
        stem: 'The government imposes an indirect tax on cigarettes. Compared to a market where supply is <strong>elastic</strong>, if supply is <strong>inelastic</strong>, the tax incidence on <strong>producers</strong> will be:',
        opts: [
          'Greater – with inelastic supply, producers cannot easily reduce quantity; they absorb more of the tax through lower profit margins',
          'Smaller – inelastic supply means the tax is fully passed on to consumers through higher prices',
          'The same – the split between producers and consumers depends only on demand elasticity, not supply elasticity',
          'Zero – governments always design taxes so that producers absorb no cost'
        ],
        ans: 0,
        exp: 'Tax incidence depends on <strong>both</strong> supply and demand elasticity. Inelastic supply means producers cannot easily reduce output in response to the tax – they are "stuck" in the market and absorb a larger share through lower profit margins. With elastic supply, producers can exit or reduce production more easily, so they pass more of the tax to consumers. With inelastic demand, consumers absorb more (they cannot easily substitute). The incidence falls most heavily on whichever side is less elastic – the side with fewer alternatives.'
      },

      /* 6 – Match pairs: PES values */
      { type: 'match_pairs',
        stem: 'Match each PES value or supply curve description to its correct interpretation.',
        pairs: [
          { a: 'PES = 0', b: 'Perfectly inelastic – vertical supply curve; quantity fixed regardless of price' },
          { a: 'PES = ∞', b: 'Perfectly elastic – horizontal supply curve; any quantity at one price' },
          { a: 'PES = 1', b: 'Unit elastic – any supply curve through the origin' },
          { a: 'PES = 0.3', b: 'Inelastic supply – supply curve steeper than unit elastic reference' },
          { a: 'PES = 2.5', b: 'Elastic supply – supply curve flatter than unit elastic reference' },
          { a: 'PES < 1 (short run), PES > 1 (long run)', b: 'Typical pattern as firms have more time to adjust production' }
        ],
        exp: 'Supply elasticity concepts: PES = 0 → vertical line (Picasso paintings, land in a fixed city boundary); PES = ∞ → horizontal line (competitive industry with unlimited capacity); PES = 1 → any ray through the origin (it is a mathematical property that straight supply curves through the origin always have PES = 1). The short-run vs long-run comparison is the most important practical implication: supply becomes more elastic over time as firms invest in capacity, enter markets, and adjust factor inputs.'
      },

      /* 7 – Cause & effect: PES determinants */
      { type: 'cause_effect',
        stem: 'Match each factor to its effect on price elasticity of supply.',
        pairs: [
          { cause: 'Ample spare production capacity exists in the industry', effect: 'Increases PES – output can be expanded quickly' },
          { cause: 'Production requires specialised machines with 3-year lead times', effect: 'Reduces PES – supply cannot respond quickly to price rises' },
          { cause: 'The product can be stored for long periods', effect: 'Increases PES – stocks buffer supply to price changes' },
          { cause: 'Highly skilled workers are required and scarce', effect: 'Reduces PES – production constrained by labour availability' },
          { cause: 'Time period extends from short run to long run', effect: 'Increases PES – more adjustment mechanisms become available' },
          { cause: 'Production inputs are freely available and mobile', effect: 'Increases PES – firms can scale up without input shortages' }
        ],
        exp: 'PES determinants: <strong>spare capacity</strong> → elastic (firms produce more without new investment); <strong>long lead times</strong> → inelastic (cannot respond quickly); <strong>storability</strong> → elastic (can release from stock); <strong>scarce specialised inputs</strong> → inelastic; <strong>time period</strong> → elastic in long run (invest in capacity, train workers, enter market); <strong>input availability</strong> → elastic (no bottlenecks). Time period is the most universally applicable determinant – PES is almost always higher in the long run.'
      },

      /* 8 – Odd one out: inelastic supply */
      { type: 'odd_one_out',
        stem: 'Three of these goods have <strong>price inelastic supply</strong>. Which is the <strong>odd one out</strong>?',
        items: [
          { icon: '🏠', label: 'UK housing – constrained by planning laws, land scarcity, and 2+ year build times', note: '' },
          { icon: '🌿', label: 'Fine wine from a specific chateau – output limited by fixed vineyard acreage', note: '' },
          { icon: '📚', label: 'Printed textbooks – large print runs can be ordered and fulfilled in weeks', note: '' },
          { icon: '⛽', label: 'Crude oil – requires decades of exploration, drilling, and refinery investment', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is <strong>printed textbooks</strong>. These have relatively <strong>elastic supply</strong>: publishers can order reprints quickly, printing capacity is widely available, and the production timeline is short (weeks to months). The other three are classic examples of inelastic supply: UK housing (planning, land, construction lead times); fine chateau wine (fixed vineyard acreage – cannot simply plant more vines and get the same quality immediately); crude oil (decades of investment required for new fields).'
      },

      /* 9 – Data table: UK housing PES */
      { type: 'data_table',
        stem: 'The table shows UK house price and new housing completions data.',
        headers: ['Period', 'Avg house price change (%)', 'New completions change (%)'],
        rows: [
          ['2012–2015', '+22%', '+18%'],
          ['2015–2019', '+15%', '+12%'],
          ['2019–2022', '+25%', '+5%'],
          ['2022–2024', '+3%', '+2%']
        ],
        question: 'What do the data suggest about the <strong>price elasticity of housing supply</strong> over this period?',
        opts: [
          'Housing supply is price inelastic throughout – price increases consistently outpace new supply responses, indicating PES < 1 in all sub-periods',
          'Housing supply is price elastic – the large price rises generated proportional increases in new completions',
          'PES is exactly 1 throughout – price and quantity changes are roughly proportional',
          'The data are insufficient to calculate PES – we would need absolute price levels, not percentage changes'
        ],
        ans: 0,
        exp: 'In every sub-period, the percentage change in new completions is smaller than the percentage change in house prices – implying PES < 1 (inelastic supply). In 2019–2022, prices rose 25% but completions only rose 5% – suggesting PES ≈ 0.2. This is consistent with the well-documented inelasticity of UK housing supply caused by: green belt restrictions, planning system delays, shortage of skilled construction workers, and land banking. The practical implication: in inelastic supply markets, demand shocks translate mainly into price changes rather than quantity changes.'
      },

      /* 10 – Para fill: PES and market outcomes */
      { type: 'para_fill',
        stem: 'Complete the paragraph about PES and market adjustment.',
        anchor: 'Price elasticity of supply determines how a market adjusts when demand changes.',
        para: 'When demand increases and supply is price [1] (PES < 1), the demand shift mainly increases [2] with little increase in [3]. This is because producers cannot easily expand [4] in the short run. When supply is price [5] (PES > 1), the same demand shift mainly increases [6] with a smaller [7] effect. Government supply-side policies that increase PES – such as improving infrastructure or [8] workers – help markets adjust to demand shocks through quantity rather than price changes.',
        blanks: [
          { id: 1, opts: ['inelastic', 'elastic', 'unit elastic', 'perfectly elastic'], ans: 0 },
          { id: 2, opts: ['price', 'quantity', 'supply', 'costs'], ans: 0 },
          { id: 3, opts: ['quantity', 'price', 'demand', 'profit'], ans: 0 },
          { id: 4, opts: ['output', 'demand', 'prices', 'costs'], ans: 0 },
          { id: 5, opts: ['elastic', 'inelastic', 'unit elastic', 'perfectly inelastic'], ans: 0 },
          { id: 6, opts: ['quantity', 'price', 'supply', 'wages'], ans: 0 },
          { id: 7, opts: ['price', 'quantity', 'supply', 'demand'], ans: 0 },
          { id: 8, opts: ['training', 'taxing', 'regulating', 'restricting'], ans: 0 }
        ],
        exp: '(1) <strong>Inelastic</strong> supply (PES < 1). (2)(3) Demand shift mainly raises <strong>price</strong> with little increase in <strong>quantity</strong> – because producers cannot expand output proportionally. (4) Cannot easily expand <strong>output</strong> due to capacity, time, or input constraints. (5) <strong>Elastic</strong> supply (PES > 1). (6)(7) Mainly increases <strong>quantity</strong> with smaller <strong>price</strong> effect. (8) <strong>Training</strong> workers increases the supply of skilled labour, raising PES for goods requiring skilled workers. Supply-side policy that increases PES makes markets more responsive – helping economies adjust to shocks with real output growth rather than just inflation.'
      }

    ]
  };

})();

