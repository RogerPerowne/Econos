window.ECONOS_TOPIC = {
  id: 'pes',
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
      { num: 2, name: 'Link it', sub: 'Apply skills with the context', state: 'available', href: TopicLoader.buildUrl('link_intro.html') },
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
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself →' }
    }

  ]
};
