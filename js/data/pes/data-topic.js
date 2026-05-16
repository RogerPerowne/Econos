window.ECONOS_TOPIC = {
  id: 'pes',
  topicNum: '1.9',
  theme: 'Theme 1 \xb7 Introduction to Markets and Market Failure',
  sessionLabel: 'Session 1 of 3: Learn',
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
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [

    /* ================================================================
       CARD 1 — WHAT IS PES
       Hook question → formula → examples
       ================================================================ */
    {
      id: 'pes_1',
      stepLabel: 'Step 1 of 7',
      title: 'What is Price Elasticity of Supply?',
      intro: 'A factory sees its price jump 20%. Can it ramp up production to capitalise — or is output stuck?',
      body: `<div style="border:2px solid #0B1426;border-radius:10px;padding:16px;text-align:center;margin:12px 0;font-size:18px;font-weight:700;background:#F8FAFC;">
  PES = % ΔQS \xf7 % ΔP
</div>
<p style="margin:10px 0 6px;">PES is <strong>always positive</strong> — price and quantity supplied always move in the same direction (upward-sloping supply curve). There is no negative sign issue, unlike PED.</p>
<ul style="margin:8px 0 0 18px;line-height:1.8;">
  <li><strong>PES &gt; 1:</strong> Elastic supply — quantity rises proportionally <em>more</em> than price.</li>
  <li><strong>PES &lt; 1:</strong> Inelastic supply — quantity rises proportionally <em>less</em> than price.</li>
  <li><strong>PES = 0:</strong> Perfectly inelastic — fixed supply regardless of price; vertical supply curve.</li>
  <li><strong>PES = ∞:</strong> Perfectly elastic — producers supply any amount at the going price; horizontal supply curve.</li>
</ul>`,
      causes: [
        {
          head: '🏗️ Housing — very inelastic (PES ≈ 0.1)',
          body: 'Planning permission takes years; construction takes 18+ months; land in specific locations is a fixed factor. Demand surges mostly become price spikes, not extra homes.'
        },
        {
          head: '⛽ Oil — inelastic short-run (PES ≈ 0.2)',
          body: 'Existing wells are already operating at near-full capacity. New drilling and refinery infrastructure takes years. Price signals cannot quickly unlock more output.'
        },
        {
          head: '🏭 Manufacturing — more elastic long-run',
          body: 'Factories can hire workers, add shifts, or build new capacity over time. Long-run supply is considerably more elastic than short-run — the time period is the key factor.'
        }
      ],
      keyTakeaway: 'PES is always positive — price and quantity supplied always move in the same direction.'
    },

    /* ================================================================
       CARD 2 — ELASTIC VS INELASTIC SUPPLY
       Diagram + four supply rules + geometric shortcut
       ================================================================ */
    {
      id: 'pes_2',
      stepLabel: 'Step 2 of 7',
      title: 'Elastic vs Inelastic Supply',
      intro: 'When demand increases, PES decides the split — how much goes into higher prices, and how much into more output.',
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
          label: 'Perfectly inelastic (PES = 0): all adjustment is in price — zero extra output produced',
          text: 'Supply is completely fixed regardless of price. Vertical supply curve. Any rightward demand shift becomes entirely a price rise — classic examples: land in a specific location, Van Gogh paintings, fish already landed.'
        },
        {
          label: 'Perfectly elastic (PES = ∞): all adjustment is in quantity — price stays constant',
          text: 'Producers supply any amount at the going price. Horizontal supply curve. Any rightward demand shift is met by more output at the same price — typical of long-run perfectly competitive industries with constant costs.'
        }
      ],
      keyTakeaway: 'Inelastic supply + rising demand = price spike. Elastic supply + rising demand = output surge.',
      examEdge: {
        title: 'The geometric shortcut',
        text: 'A supply curve through the origin has PES = 1 everywhere. One that cuts the P-axis (starts above zero) has PES < 1 — inelastic. One that cuts the Q-axis (starts with positive quantity at zero price) has PES > 1 — elastic. This saves calculation time in multiple-choice questions.'
      }
    },

    /* ================================================================
       CARD 3 — WORKED EXAMPLE: CALCULATING PES
       Oil market scenario, 5 scaffolded steps
       ================================================================ */
    {
      id: 'pes_3',
      template: 'worked-example',
      stepLabel: 'Step 3 of 7',
      title: 'Worked Example: Calculating PES',
      lede: 'Show every step — examiners award marks for method, not just the final number.',
      scenario: 'The market price of crude oil rises from <strong>$50</strong> to <strong>$60</strong> per barrel. At $50, producers supply <strong>80 million barrels</strong> per day. After the price rise, supply increases to <strong>84 million barrels</strong> per day.',
      steps: [
        {
          prompt: 'Calculate the % change in price.',
          hint: '% change = (New − Old) \xf7 Old \xd7 100',
          answer: '% ΔP = (60 − 50) \xf7 50 \xd7 100 = <strong>+20%</strong>'
        },
        {
          prompt: 'Calculate the % change in quantity supplied.',
          hint: 'QS rose — this should be positive.',
          answer: '% ΔQS = (84 − 80) \xf7 80 \xd7 100 = <strong>+5%</strong>'
        },
        {
          prompt: 'Apply the PES formula.',
          hint: 'PES = % ΔQS \xf7 % ΔP. Result will be positive.',
          answer: 'PES = +5% \xf7 +20% = <strong>+0.25</strong>'
        },
        {
          prompt: 'Classify the result.',
          hint: 'Compare to 1. Why can’t oil supply respond quickly?',
          answer: 'PES = 0.25 &lt; 1 → supply is <strong>price inelastic</strong>. Existing wells are already operating — new drilling and refinery capacity takes years to build.'
        },
        {
          prompt: 'State the policy implication.',
          hint: 'What happens to price when demand surges, if supply is inelastic?',
          answer: 'With PES = 0.25, a rightward demand shift causes a <strong>large price rise</strong> and only a small increase in output. This explains why oil price shocks are sharp and sudden — most of the demand adjustment falls on price, not quantity.'
        }
      ],
      conclusion: 'Oil supply is highly inelastic short-run because capacity is fixed. Long-run PES is higher as new infrastructure is built — explaining why oil price shocks moderate over time.',
      examEdge: 'Show five steps every time: formula → each % separately → divide → classify → explain in context. The policy implication (step 5) is what separates band 3 from band 4 answers.'
    },

    /* ================================================================
       CARD 4 — READING THE PES COEFFICIENT
       Five categories with rich colour-coded tiles
       ================================================================ */
    {
      id: 'pes_4',
      stepLabel: 'Step 4 of 7',
      title: 'Reading the PES Coefficient',
      intro: 'The number tells you everything — but only if you know how to read it.',
      causes: [
        {
          head: '🔴 Perfectly Inelastic — PES = 0',
          body: 'Supply is completely fixed regardless of price. Vertical supply curve. Examples: Van Gogh paintings, land in a specific location, fish already landed at market. Any demand shift goes entirely into price — quantity cannot change.'
        },
        {
          head: '🟡 Inelastic — PES < 1',
          body: 'Supply responds less than proportionally to price. Most demand shifts go into higher prices. Examples: housing (UK PES ≈ 0.1–0.3), oil short-run, agricultural produce within a season. High price volatility when demand shifts.'
        },
        {
          head: '🔵 Unit Elastic — PES = 1',
          body: 'Supply responds exactly in proportion to price. A 10% price rise → 10% more supplied. Supply curve passes through the origin. Boundary between elastic and inelastic.'
        },
        {
          head: '🟢 Elastic — PES > 1',
          body: 'Supply responds more than proportionally. Quantity rises faster than price. Examples: manufactured goods with spare capacity, many service industries, some agricultural products in the long run. Demand shifts go mostly into quantity, not price.'
        },
        {
          head: '🟣 Perfectly Elastic — PES = ∞',
          body: 'Producers supply any amount at the going market price. Horizontal supply curve. Examples: perfectly competitive industries in the long run with constant costs. Any demand shift goes entirely into quantity — price doesn’t move.'
        }
      ],
      examEdge: 'Values to know: housing PES ≈ 0.1–0.3 (very inelastic). Oil short-run ≈ 0.1–0.3. Agriculture within-season ≈ 0.3. Manufacturing long-run can be > 1. These numbers appear in data-response questions.'
    },

    /* ================================================================
       CARD 5 — DETERMINANTS OF PES
       Five tiles, time period front and centre
       ================================================================ */
    {
      id: 'pes_5',
      stepLabel: 'Step 5 of 7',
      title: 'What Determines PES?',
      intro: 'Can producers respond quickly to a price rise? Five factors decide.',
      causes: [
        {
          head: '⏱️ Time period (most important)',
          body: 'Short run nearly always more inelastic than long run. In the very short run (market period) supply may be completely fixed (PES = 0). As time passes, capacity expands and PES rises significantly.'
        },
        {
          head: '🏭 Spare capacity',
          body: 'Firms with unused machinery and workers can respond fast to higher prices. At full capacity, output is nearly fixed in the short run — supply is effectively inelastic until new investment arrives.'
        },
        {
          head: '📦 Stocks and inventories',
          body: 'Large stocks can be released quickly when prices rise — acting like elastic supply in the short run. No stocks means more output must actually be produced, giving a slower response.'
        },
        {
          head: '🔄 Factor mobility',
          body: 'If labour and capital can easily switch into this good’s production, PES is higher. Specialised assets (oil rigs, orchards) cannot be redeployed quickly — locking in low PES until long-run investment occurs.'
        },
        {
          head: '🔩 Complexity and lead times',
          body: 'Housing takes 2–3 years; aircraft take years to manufacture; trees take decades. Long production periods mean near-zero short-run PES regardless of price signals — even a very large price rise cannot unlock output quickly.'
        }
      ],
      keyTakeaway: 'When asked for the ‘most important’ determinant: always say time period first.',
      examEdge: 'Short-run vs long-run PES is the single most exam-relevant point. Always state: “In the short run, supply is more inelastic because…” and “In the long run, supply becomes more elastic as…” — this alone can earn a Band 3 mark.'
    },

    /* ================================================================
       CARD 6 — PES IN THE REAL WORLD
       Four application areas with policy depth
       ================================================================ */
    {
      id: 'pes_6',
      stepLabel: 'Step 6 of 7',
      title: 'PES in the Real World',
      intro: 'PES isn’t just a formula — it shapes housing crises, food price spikes, tax policy, and economic reform.',
      steps: [
        {
          label: 'Housing market crisis',
          text: 'UK housing PES ≈ 0.1. When demand rises (population growth, Help to Buy subsidies), almost all adjustment is in price — not output. This is why UK house prices outpace general inflation. Demand-side subsidies mainly enrich existing homeowners; only supply-side reform (planning deregulation, new towns) can improve PES and stabilise prices.'
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
      keyTakeaway: 'PES determines who gains and who loses when demand shifts — and what governments must do to fix supply-constrained markets.',
      examEdge: 'The housing market is the go-to PES context. Structure your answer: (1) state UK housing PES is very inelastic; (2) explain WHY (planning restrictions, construction time, fixed land); (3) show the consequence (demand shift → price spike); (4) evaluate the policy implication (supply-side reform needed).'
    },

    /* ================================================================
       CARD 7 — EXAM SUMMARY
       5 core facts, common mistakes, 5-step checklist
       ================================================================ */
    {
      id: 'pes_7',
      stepLabel: 'Step 7 of 7',
      title: 'Exam Summary',
      intro: 'Lock in the essentials — PES has five things examiners always test.',
      body: `<div style="font-size:10px;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;color:#059669;margin-bottom:10px;">① 5 Core Facts</div>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(148px,1fr));gap:10px;margin-bottom:20px;">
  <div style="border-radius:10px;overflow:hidden;border:1px solid #05996920;">
    <div style="background:#059669;color:#fff;font-weight:800;font-size:11px;padding:8px 12px;">🔢 Formula</div>
    <div style="padding:10px 12px;font-size:12px;line-height:1.6;color:#0B1426;">PES = % ΔQS \xf7 % ΔP</div>
  </div>
  <div style="border-radius:10px;overflow:hidden;border:1px solid #2563EB20;">
    <div style="background:#2563EB;color:#fff;font-weight:800;font-size:11px;padding:8px 12px;">&#43; Always positive</div>
    <div style="padding:10px 12px;font-size:12px;line-height:1.6;color:#0B1426;">Price and quantity supplied always move together — never write a negative PES.</div>
  </div>
  <div style="border-radius:10px;overflow:hidden;border:1px solid #D9770620;">
    <div style="background:#D97706;color:#fff;font-weight:800;font-size:11px;padding:8px 12px;">⚖️ Elastic vs Inelastic</div>
    <div style="padding:10px 12px;font-size:12px;line-height:1.6;color:#0B1426;">PES &gt; 1 = elastic (Q rises more than P).<br>PES &lt; 1 = inelastic (P rises more than Q).</div>
  </div>
  <div style="border-radius:10px;overflow:hidden;border:1px solid #7C3AED20;">
    <div style="background:#7C3AED;color:#fff;font-weight:800;font-size:11px;padding:8px 12px;">⏱️ Top determinant</div>
    <div style="padding:10px 12px;font-size:12px;line-height:1.6;color:#0B1426;">Time period — short-run always more inelastic than long-run.</div>
  </div>
  <div style="border-radius:10px;overflow:hidden;border:1px solid #0891B220;">
    <div style="background:#0891B2;color:#fff;font-weight:800;font-size:11px;padding:8px 12px;">🏘️ Key market</div>
    <div style="padding:10px 12px;font-size:12px;line-height:1.6;color:#0B1426;">Housing PES ≈ 0.1 — demand shifts mostly become price rises.</div>
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
    <div style="font-size:12px;color:#0B1426;line-height:1.55;">Always distinguish time period — short-run PES is almost always lower. Missing this distinction costs marks on any PES question.</div>
  </div>
  <div style="background:#FFF5F5;border:1px solid #DC2626;border-radius:8px;padding:10px;">
    <div style="font-weight:800;font-size:12px;color:#DC2626;margin-bottom:5px;">⚠️ Demand subsidies fix supply problems</div>
    <div style="font-size:12px;color:#0B1426;line-height:1.55;">Help to Buy didn’t solve the housing crisis because PES stayed near 0. Demand-side policy can’t fix an inelastic supply problem.</div>
  </div>
</div>`,
      steps: [
        { label: 'Define PES', text: '% ΔQS \xf7 % ΔP, always positive — price and quantity supplied move in the same direction.' },
        { label: 'Calculate', text: 'Show each % change separately, then divide. Never skip steps — each one can carry a mark.' },
        { label: 'Classify', text: 'Compare to 1: PES > 1 = elastic, PES < 1 = inelastic. Name the category explicitly.' },
        { label: 'Contextualise', text: 'Explain WHY that market has that PES using at least one determinant (most commonly: time period).' },
        { label: 'Apply', text: 'State the consequence for prices, quantities, or policy — this is where evaluation marks sit.' }
      ],
      keyTakeaway: 'PES is always positive, time is the key determinant, and housing is the go-to real-world context.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself →' }
    }

  ]
};
