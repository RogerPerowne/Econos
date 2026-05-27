window.ECONOS_TOPIC = {
  id: 'price-elasticity-of-demand',
  topicNum: '2.2',
  theme: 'Theme 1 \xb7 Introduction to Markets and Market Failure',
  title: 'Price Elasticity of Demand',
  estTime: '8–10 minutes',
  goal: 'Understand what PED measures, how to calculate it, how to read the coefficient, what determines it, and how firms and governments use it in practice.',
  intro: {
    heroKey: 'heroElasticity',
    summary: 'PED measures how sensitive quantity demanded is to a price change. The answer determines whether a price rise raises or lowers total revenue – and shapes firm pricing strategy, government tax policy, and who bears the burden of a tax.',
    doInThis: 'Work through 7 cards covering what PED is, elastic vs inelastic demand, step-by-step calculation, how to read the PED coefficient, the determinants of PED, real-world implications, and an exam-ready summary.',
    outcomes: [
      'Define and calculate PED correctly using the formula',
      'Distinguish elastic and inelastic demand and link each to the demand curve diagram',
      'Identify the key determinants of PED and predict the elasticity of specific goods',
      'Apply PED to total revenue, tax incidence, and firm pricing strategy'
    ],
    tip: 'PED = % change in QD \xf7 % change in P. Always negative. |PED| > 1 = elastic; |PED| < 1 = inelastic; |PED| = 1 = unit elastic.',
    stages: [
      { num: 1, name: 'Learn it', sub: '7 concept cards',            state: 'done',      href: TopicLoader.routes.learn()      },
      { num: 2, name: 'Link it',  sub: 'Apply skills with context',  state: 'available', href: TopicLoader.routes.link('intro') },
      { num: 3, name: 'Land it',  sub: 'Tackle real exam questions', state: 'locked'                                                   }
    ]
  },
  cards: [

    /* ================================================================
       CARD 1 – WHAT IS PED
       Hook question → formula → Cinema vs Petrol comparison
       ================================================================ */
    {
      id: 'ped_1',
      stepLabel: 'Learn: Step 1 of 7',
      title: 'Price Elasticity of Demand',
      intro: 'If a coffee shop raises its price by 10%, does demand fall by 2% or 20%? That answer decides whether revenue rises or falls – and it’s precisely what PED measures.',
      body: `<div style="text-align:center;padding:18px 20px;background:#fff;border-radius:12px;border:2px solid #1E3A5F;margin-bottom:18px;">
  <div style="font-size:10px;font-weight:800;letter-spacing:0.1em;color:#1E3A5F;text-transform:uppercase;margin-bottom:12px;">The Formula</div>
  <div style="display:inline-flex;align-items:center;gap:14px;flex-wrap:wrap;justify-content:center;">
    <span style="font-size:24px;font-weight:800;color:#059669;">PED</span>
    <span style="font-size:22px;color:#334155;">=</span>
    <div style="text-align:center;">
      <div style="font-size:14px;font-weight:600;color:#334155;border-bottom:2px solid #334155;padding-bottom:6px;">% change in quantity demanded</div>
      <div style="font-size:14px;font-weight:600;color:#334155;padding-top:6px;">% change in price</div>
    </div>
  </div>
</div>
PED is <strong>always negative</strong> – price and quantity demanded move in opposite directions (law of demand). Economists compare the <strong>absolute value</strong>: |PED| &gt; 1 = elastic, |PED| &lt; 1 = inelastic, |PED| = 1 = unit elastic.`,
      causes: [
        {
          head: '🎥  Cinema tickets – more elastic',
          body: '<strong>Many substitutes</strong> – streaming, other leisure activities, staying home<br><strong>Discretionary spending</strong> – consumers can choose not to go<br><strong>Result:</strong> demand falls a lot when price rises'
        },
        {
          head: '⛽️  Petrol – more inelastic',
          body: '<strong>Few close substitutes</strong> in the short run<br><strong>Essential for many journeys</strong> – commuters must travel regardless<br><strong>Result:</strong> demand barely changes when price rises'
        }
      ],
    },

    /* ================================================================
       CARD 2 – ELASTIC VS INELASTIC DEMAND
       Side-by-side annotated diagram + Total Revenue rules
       ================================================================ */
    {
      id: 'ped_2',
      stepLabel: 'Learn: Step 2 of 7',
      title: 'Elastic vs inelastic demand',
      intro: 'A shallow demand curve = consumers respond strongly to price changes (elastic). A steep curve = consumers barely react (inelastic). The curve shape is the visual shorthand – but always use the formula to confirm.',
      diagramKey: 'elasticVsInelasticDiagram',
      steps: [
        {
          label: 'Elastic + price rise → total revenue falls',
          text: 'QD falls proportionally more than price rises. The volume loss outweighs the extra revenue per unit. Cinemas, luxury holidays, branded goods with close rivals.'
        },
        {
          label: 'Inelastic + price rise → total revenue rises',
          text: 'QD falls proportionally less than price rises. The higher price per unit more than compensates for fewer sales. Petrol, cigarettes, electricity, rail season tickets.'
        },
        {
          label: 'Elastic + price cut → total revenue rises',
          text: 'QD rises proportionally more than price falls. Volume gain outweighs the lower price. Firms in competitive markets use this to grow revenue.'
        },
        {
          label: 'Inelastic + price cut → total revenue falls',
          text: 'QD rises proportionally less than price falls. More units sold, but not enough to offset the lower price per unit. Explains why tobacco firms resist duty increases but cannot absorb them fully.'
        }
      ],
      keyTakeaway: {
        title: 'The Total Revenue rule',
        text: 'Elastic demand: price and revenue move in <em>opposite</em> directions. Inelastic demand: price and revenue move in the <em>same</em> direction.'
      },
      examEdge: 'Never read PED off the diagram. A steep curve suggests inelastic demand, but PED varies at every point along a straight-line demand curve. The upper half of any linear demand curve is elastic, the lower half inelastic, and the midpoint unit elastic – even though the slope is constant throughout.'
    },

    /* ================================================================
       CARD 3 – CALCULATING PED
       Worked example: concert tickets £10→£12, QD 100→70
       ================================================================ */
    {
      id: 'ped_3',
      template: 'ped-calculation',
      stepLabel: 'Learn: Step 3 of 7',
      title: 'Calculating PED step by step',
      lede: 'Follow the chain. Each step unlocks the next – by the end you\'ll see how a price change ripples into a revenue impact.',
      scenario: {
        icon: '🎫',
        headline: 'Concert tickets',
        subline: 'The promoter raises the ticket price. What happens to revenue?',
        currency: '£',
        p1: 10, p2: 12,
        q1: 100, q2: 70
      },
      contextLine: 'Concert tickets have many substitutes – streaming services, other live events, staying in.',
      conclusion: 'Concert tickets are price elastic because consumers have many substitutes. The price rise caused a bigger proportional fall in quantity demanded, reducing total revenue. The promoter would earn more by keeping the price at £10.',
      examEdge: {
        title: 'Why PED is usually negative',
        text: 'Price and quantity move in opposite directions (law of demand) – so PED is always negative for a normal good. Economists compare the <strong>magnitude</strong> (|PED|), ignoring the sign. A PED of −1.5 is <em>more elastic</em> than −0.8, even though −0.8 is mathematically larger. Always state the sign in your calculation, then use the magnitude to classify.'
      }
    },

    /* ================================================================
       CARD 4 – READING THE PED COEFFICIENT
       Five-regime spectrum with mini diagrams
       ================================================================ */
    {
      id: 'ped_4',
      template: 'ped-five-frames',
      stepLabel: 'Learn: Step 4 of 7',
      title: 'Reading the PED coefficient',
      lede: 'Every demand curve sits somewhere on this spectrum. The larger the absolute value, the more responsive consumers are to price changes – and the more it matters for pricing and tax policy.',
      frames: [
        {
          tone: 'rose',
          name: 'Perfectly inelastic',
          ped: 'PED = 0',
          curveType: 'vertical',
          example: 'Life-saving medication in an emergency. Demand is fixed regardless of price.',
          trRule: 'Price ↑ → TR always rises. Quantity is fixed, so every price rise grows revenue proportionally.'
        },
        {
          tone: 'amber',
          name: 'Inelastic',
          ped: '|PED| < 1',
          curveType: 'steep',
          example: 'Petrol (short run), cigarettes, electricity, rail season tickets.',
          trRule: 'Price ↑ → TR rises. QD falls less than proportionally – the price effect wins.'
        },
        {
          tone: 'blue',
          name: 'Unit elastic',
          ped: '|PED| = 1',
          curveType: 'hyperbola',
          example: 'The midpoint of any straight-line demand curve. Rarely a stable real-world position.',
          trRule: 'Any price change → TR unchanged. The % fall in QD exactly cancels the % rise in P.'
        },
        {
          tone: 'green',
          name: 'Elastic',
          ped: '|PED| > 1',
          curveType: 'shallow',
          example: 'Luxury holidays, branded goods with close rivals, restaurant meals.',
          trRule: 'Price ↑ → TR falls. QD falls more than proportionally – the volume effect dominates.'
        },
        {
          tone: 'purple',
          name: 'Perfectly elastic',
          ped: 'PED = ∞',
          curveType: 'horizontal',
          example: 'Any firm in perfect competition facing the market price.',
          trRule: 'Must accept the market price exactly. Any price above it → quantity demanded falls to zero.'
        }
      ],
      examEdge: 'The classic trap: “demand is elastic because the curve is steep.” Wrong – steepness depends on axis scales. On a straight-line demand curve the slope is constant but PED changes at every point: upper half elastic, lower half inelastic, midpoint unit elastic. Always calculate PED from the formula. Values to memorise: PED = −0.3 (very inelastic), −0.8 (inelastic), −1.0 (unit elastic), −1.6 (elastic), −3.5 (very elastic).'
    },

    /* ================================================================
       CARD 5 – WHAT AFFECTS PED?
       Five determinants + examiner product assessments
       ================================================================ */
    {
      id: 'ped_5',
      stepLabel: 'Learn: Step 5 of 7',
      title: 'What affects PED?',
      intro: 'Ask: “What can consumers do when the price rises?” The more options they have – to switch, delay, or go without – the more elastic demand will be.',
      causes: [
        {
          icon: '🔄',
          head: '1. Close substitutes',
          body: 'The more substitutes available, the more elastic demand. A price rise for one cola brand → consumers switch to another. Few substitutes (insulin, petrol) → inelastic. <strong>The most important determinant.</strong>'
        },
        {
          icon: '💎',
          head: '2. Necessity vs luxury',
          body: 'Necessities (food, medicines, utilities) tend to be inelastic – consumers cannot easily cut back. Luxuries (holidays, jewellery, restaurant meals) are more elastic – purchases can be postponed or abandoned.'
        },
        {
          icon: '💰',
          head: '3. Proportion of income',
          body: 'Goods that take a large share of income (rent, cars) are more price elastic. Small items (salt, matches) are inelastic – a price change is barely noticed against total spending.'
        },
        {
          icon: '⏱️',
          head: '4. Time period',
          body: 'Demand becomes more elastic over time. Short-run: consumers are locked into habits. Long-run: substitutes emerge and behaviour adapts. Petrol is inelastic now; more elastic long-run as EVs become viable.'
        },
        {
          icon: '🔒',
          head: '5. Habit and addiction',
          body: 'Cigarettes, alcohol, addictive goods: demand is inelastic because willingness to pay holds despite price rises. This is precisely why sin taxes raise substantial revenue with little fall in quantity demanded.'
        },
        {
          icon: '🌟',
          head: '6. Branding and loyalty',
          body: 'Strong brand attachment (Apple, Nike, Chanel) makes consumers perceive no real substitute – even when cheaper alternatives exist. Brand loyalty reduces elasticity by making the good feel unique in consumers\' minds.'
        }
      ],
      productExamplesTitle: 'How elastic is…?',
      productExamplesSubtitle: 'Predict the PED verdict for each product, then reveal',
      productExamples: [
        {
          icon: '🧂',
          product: 'Table salt',
          verdict: 'Likely inelastic',
          verdictTone: 'rose',
          reasoning: 'Essential; no substitutes; tiny share of income – price barely noticed.'
        },
        {
          icon: '⛽',
          product: 'Petrol',
          verdict: 'Relatively inelastic',
          verdictTone: 'amber',
          reasoning: 'Few short-run substitutes; necessary for most journeys.'
        },
        {
          icon: '✈️',
          product: 'Foreign holidays',
          verdict: 'Likely elastic',
          verdictTone: 'green',
          reasoning: 'Many alternatives; high cost; easily postponed or swapped.'
        },
        {
          icon: '👟',
          product: 'Designer trainers',
          verdict: 'Likely elastic',
          verdictTone: 'green',
          reasoning: 'Many alternatives; luxury item; brand-driven not need-driven.'
        }
      ],
      examEdge: 'Always tie the determinant to the product: “Demand for petrol is inelastic because there are few close substitutes in the short run – most journeys cannot easily switch to other transport modes.” Determinant → mechanism → conclusion.',
    },

    /* ================================================================
       CARD 6 – REAL-WORLD IMPLICATIONS OF PED
       Four application areas: pricing, revenue, tax, branding
       ================================================================ */
    {
      id: 'ped_6',
      stepLabel: 'Learn: Step 6 of 7',
      title: 'Real-world implications of PED',
      intro: 'PED determines who pays a tax, what firms charge, and whether government policy works as intended. It is the bridge between economic theory and practical decision-making.',
      economistQuote: {
        portraitKey: 'economistMarshall',
        tone: 'amber',
        label: 'Economist insight on elasticity',
        quote: 'The elasticity of demand in a market is great or small according as the amount demanded increases much or little for a given fall in price, and diminishes much or little for a given rise in price.',
        attribution: 'Alfred Marshall, <em>Principles of Economics</em> (1890)'
      },
      steps: [
        {
          label: '1. Pricing decisions for firms',
          text: 'Inelastic demand → raise price to grow revenue. Elastic demand → cut price. Apple (brand loyalty → inelastic) can charge a premium. Commodity markets (many identical rivals → elastic) are price-competitive with no pricing power.'
        },
        {
          label: '2. Total revenue strategy',
          text: 'TR = P \xd7 Q. Firms with inelastic demand (tobacco, utilities, branded pharmaceuticals) can raise prices without large falls in revenue. Firms in elastic markets must compete on price or invest in differentiation to reduce elasticity.'
        },
        {
          label: '3. Indirect taxes and tax incidence',
          text: 'Inelastic demand + elastic supply → consumers bear most of the tax burden (e.g. cigarette duty: price rises significantly, quantity barely falls, revenue is large). Elastic demand + inelastic supply → firms absorb more of the tax through lower margins.'
        },
        {
          label: '4. Business strategy and branding',
          text: 'Differentiation, branding, loyalty schemes all reduce effective substitutes → make demand more inelastic → give pricing power. This is why firms invest heavily in brand identity: Apple, Dyson, and Premier League clubs all exploit relatively inelastic demand.'
        }
      ],
      keyTakeaway: {
        title: 'The big idea',
        text: 'PED is not just theory – it explains why cigarettes are taxed heavily, why Apple charges premium prices, and why supermarkets offer loyalty cards. It is a practical tool for firms and governments alike.'
      },
      examEdge: 'Three-step chain for full marks: (1) State the PED for the product and its determinant. (2) Apply the TR rule or tax incidence rule. (3) Explain the consequence for the firm, consumer, or government. Example: “Demand for cigarettes is price inelastic (few substitutes, addictive). Therefore an indirect tax causes a large price rise with little fall in quantity. Most of the tax burden falls on smokers, and the government raises substantial revenue.”'
    },

    /* ================================================================
       CARD 7 – EXAM SUMMARY
       5 core facts, common mistakes, exam-ready checklist
       ================================================================ */
    {
      id: 'ped_7',
      stepLabel: 'Learn: Step 7 of 7',
      title: 'PED exam summary',
      intro: 'The essentials to remember under pressure. Work through this checklist before your exam.',
      body: `<div style="font-size:10px;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;color:#059669;margin-bottom:10px;">① 5 Core Facts</div>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(148px,1fr));gap:8px;margin-bottom:22px;">
  <div style="border-radius:10px;overflow:hidden;border:1px solid #05996920;">
    <div style="background:#059669;color:#fff;font-weight:800;font-size:11px;padding:8px 12px;">📖 Definition</div>
    <div style="padding:10px 12px;font-size:12px;line-height:1.6;color:#0B1426;">PED measures how responsive QD is to a change in the good’s own price.</div>
  </div>
  <div style="border-radius:10px;overflow:hidden;border:1px solid #2563EB20;">
    <div style="background:#2563EB;color:#fff;font-weight:800;font-size:11px;padding:8px 12px;">🔢 Formula</div>
    <div style="padding:10px 12px;font-size:12px;line-height:1.6;color:#0B1426;">PED = % ΔQD \xf7 % ΔP<br>Always negative for normal goods.</div>
  </div>
  <div style="border-radius:10px;overflow:hidden;border:1px solid #D9770620;">
    <div style="background:#D97706;color:#fff;font-weight:800;font-size:11px;padding:8px 12px;">⚖️ Elastic vs Inelastic</div>
    <div style="padding:10px 12px;font-size:12px;line-height:1.6;color:#0B1426;">|PED| &gt; 1 = elastic<br>|PED| &lt; 1 = inelastic<br>|PED| = 1 = unit elastic</div>
  </div>
  <div style="border-radius:10px;overflow:hidden;border:1px solid #7C3AED20;">
    <div style="background:#7C3AED;color:#fff;font-weight:800;font-size:11px;padding:8px 12px;">🔍 Determinants</div>
    <div style="padding:10px 12px;font-size:12px;line-height:1.6;color:#0B1426;">Substitutes, necessity vs luxury, income share, time horizon, addiction.</div>
  </div>
  <div style="border-radius:10px;overflow:hidden;border:1px solid #0EA5E920;">
    <div style="background:#0EA5E9;color:#fff;font-weight:800;font-size:11px;padding:8px 12px;">📈 Revenue link</div>
    <div style="padding:10px 12px;font-size:12px;line-height:1.6;color:#0B1426;">Elastic: price cuts raise TR.<br>Inelastic: price rises raise TR.</div>
  </div>
</div>

<div style="font-size:10px;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;color:#DC2626;margin-bottom:10px;">② Common Mistakes</div>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:8px;">
  <div style="border-radius:10px;border:1px solid #DC262620;background:#FFF5F5;padding:12px 14px;">
    <div style="font-weight:800;font-size:12px;color:#DC2626;margin-bottom:5px;">⚠️ Use % changes, not absolute changes</div>
    <div style="font-size:12px;color:#0B1426;line-height:1.55;">Always express changes as percentages. Using raw numbers gives a completely wrong answer.</div>
  </div>
  <div style="border-radius:10px;border:1px solid #DC262620;background:#FFF5F5;padding:12px 14px;">
    <div style="font-weight:800;font-size:12px;color:#DC2626;margin-bottom:5px;">⚠️ Do not ignore the context</div>
    <div style="font-size:12px;color:#0B1426;line-height:1.55;">Short-run vs long-run matters. Demand becomes more elastic over time as substitutes emerge.</div>
  </div>
  <div style="border-radius:10px;border:1px solid #DC262620;background:#FFF5F5;padding:12px 14px;">
    <div style="font-weight:800;font-size:12px;color:#DC2626;margin-bottom:5px;">⚠️ Inelastic ≠ no change</div>
    <div style="font-size:12px;color:#0B1426;line-height:1.55;">Inelastic means QD changes less than proportionally – it still changes. Perfectly inelastic is rare in practice.</div>
  </div>
  <div style="border-radius:10px;border:1px solid #DC262620;background:#FFF5F5;padding:12px 14px;">
    <div style="font-weight:800;font-size:12px;color:#DC2626;margin-bottom:5px;">⚠️ The minus sign is expected</div>
    <div style="font-size:12px;color:#0B1426;line-height:1.55;">PED is always negative for normal goods. Show it in your calculation, then use |PED| to classify.</div>
  </div>
</div>`,
      steps: [
        { label: 'Define PED clearly', text: 'PED measures the responsiveness of quantity demanded to a change in the good’s own price, using the formula % ΔQD \xf7 % ΔP.' },
        { label: 'Calculate accurately using % changes', text: 'Show each % change separately, then divide. Six steps visible = six opportunities for marks.' },
        { label: 'Interpret the coefficient', text: 'State |PED|, compare to 1, classify as elastic/inelastic/unit elastic. Quote one decimal place.' },
        { label: 'Apply to the product and context', text: 'Explain why this good has this PED using at least one determinant tied to the specific product.' },
        { label: 'Link to revenue or policy consequences', text: 'State what happens to TR, who bears a tax, or how a firm should price. This is where evaluation marks sit.' }
      ],
      quizCta: { href: TopicLoader.routes.quiz('main'), label: 'Test yourself →' }
    }

  ]
};
