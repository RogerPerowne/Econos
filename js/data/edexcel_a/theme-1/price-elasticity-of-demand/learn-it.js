window.ECONOS_TOPIC = {
  id: 'price-elasticity-of-demand',
  topicNum: '2.2',
  theme: 'Theme 1 \xb7 Introduction to Markets and Market Failure',
  title: 'Price Elasticity of Demand',
  estTime: '10–12 minutes',
  goal: 'Understand what PED measures, how to calculate it, how to read the coefficient, where demand is elastic along a curve, what determines it, and how firms and governments use it in practice.',
  intro: {
    heroKey: 'heroElasticity',
    summary: 'PED measures how sensitive quantity demanded is to a price change. The answer determines whether a price rise raises or lowers total revenue – and shapes firm pricing strategy, government tax policy, and who bears the burden of a tax.',
    doInThis: 'Work through 8 cards covering what PED is, how to calculate it, how to read the coefficient, where demand is elastic along a curve, what makes demand elastic, the PED–total-revenue link, real-world uses, and an exam-ready toolkit.',
    outcomes: [
      'Define and calculate PED correctly using the formula',
      'Distinguish elastic and inelastic demand and link each to the demand curve diagram',
      'Identify the key determinants of PED and predict the elasticity of specific goods',
      'Apply PED to total revenue, tax incidence, and firm pricing strategy'
    ],
    tip: 'PED = % change in QD \xf7 % change in P. Always negative. |PED| > 1 = elastic; |PED| < 1 = inelastic; |PED| = 1 = unit elastic.',
    stages: [
      { num: 1, name: 'Learn it', sub: '8 concept cards',            state: 'done',      href: TopicLoader.routes.learn()      },
      { num: 2, name: 'Link it',  sub: 'Apply skills with context',  state: 'available', href: TopicLoader.routes.link('intro') },
      { num: 3, name: 'Land it',  sub: 'Tackle real exam questions', state: 'locked'                                                   }
    ]
  },
  cards: [

    /* ================================================================
       CARD 1 – THE BIG PICTURE
       Hook → formula → elastic vs inelastic two-chart →
       three categories → why PED matters
       ================================================================ */
    {
      id: 'ped_1',
      stepLabel: 'Learn: Step 1 of 8',
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
A <strong>shallow</strong> demand curve means consumers respond strongly to price (elastic); a <strong>steep</strong> curve means they barely react (inelastic). The same price change produces a very different quantity response in each case.`,
      diagramKey: 'elasticVsInelasticDiagram',
      causesLabel: 'Three categories',
      causesEmoji: '⚖️',
      causesStyle: 'tinted-flat',
      causes: [
        {
          tone: 'green',
          icon: '📉',
          head: 'Elastic · |PED| > 1',
          body: 'QD changes proportionally <strong>more</strong> than price. Consumers are sensitive – they switch, delay or go without. Luxuries, branded goods with close rivals.'
        },
        {
          tone: 'amber',
          icon: '⚖️',
          head: 'Unit elastic · |PED| = 1',
          body: 'QD changes <strong>exactly in proportion</strong> to price. Total revenue is unchanged by any price move. The midpoint of a straight-line demand curve.'
        },
        {
          tone: 'purple',
          icon: '📈',
          head: 'Inelastic · |PED| < 1',
          body: 'QD changes proportionally <strong>less</strong> than price. Consumers have few options. Necessities, addictive goods, products with few substitutes.'
        }
      ],
      causes2Label: 'Why PED matters',
      causes2Emoji: '🎯',
      causes2: [
        {
          tone: 'blue',
          icon: '🏷️',
          head: 'Pricing strategy',
          body: 'Firms with inelastic demand can raise prices; firms in elastic markets must compete on price or differentiate.'
        },
        {
          tone: 'green',
          icon: '💷',
          head: 'Total revenue',
          body: 'Whether a price rise grows or shrinks revenue depends entirely on whether demand is elastic or inelastic.'
        },
        {
          tone: 'rose',
          icon: '🏛️',
          head: 'Tax & policy',
          body: 'PED decides who bears an indirect tax and how much revenue it raises – the core of sin-tax design.'
        }
      ],
      keyTakeaway: {
        title: 'PED in one line',
        text: 'PED is <strong>always negative</strong> (law of demand). Economists compare the <strong>absolute value</strong>: |PED| &gt; 1 = elastic, |PED| &lt; 1 = inelastic, |PED| = 1 = unit elastic.'
      }
    },

    /* ================================================================
       CARD 2 – CALCULATING PED
       Worked example: concert tickets £10→£12, QD 100→70
       ================================================================ */
    {
      id: 'ped_3',
      template: 'ped-calculation',
      stepLabel: 'Learn: Step 2 of 8',
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
       CARD 3 – READING THE PED COEFFICIENT
       Five-regime spectrum with mini diagrams
       ================================================================ */
    {
      id: 'ped_4',
      template: 'ped-five-frames',
      stepLabel: 'Learn: Step 3 of 8',
      title: 'Reading the PED coefficient',
      lede: 'Every demand curve sits somewhere on this spectrum. The larger the absolute value, the more responsive consumers are to price changes – and the more it matters for pricing and tax policy.',
      visualKey: 'pedClassifySpectrum',
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
       CARD 4 – WHERE DEMAND IS ELASTIC (along a linear curve)
       Interactive: step A (elastic) → B (unit) → C (inelastic)
       ================================================================ */
    {
      id: 'ped_5',
      stepLabel: 'Learn: Step 4 of 8',
      title: 'Where demand is elastic',
      intro: 'PED is not constant along a straight-line demand curve. Even though the slope never changes, the elasticity falls steadily as you move down the curve. Step through the three regions to see why.',
      interactiveDiagram: {
        svgKey: 'pedLinearRegions',
        label: 'PED along a linear demand curve',
        emoji: '📐',
        layers: ['layer-a', 'layer-b', 'layer-c'],
        views: [
          {
            label: 'A · upper part',
            tone: 'green',
            show: ['layer-a'],
            head: 'Upper part → elastic (|PED| > 1)',
            body: 'High price, low quantity. A given price change is a <strong>small %</strong> of a high price but a <strong>large %</strong> of a low quantity – so %ΔQD outweighs %ΔP. Demand is elastic here.'
          },
          {
            label: 'B · midpoint',
            tone: 'amber',
            show: ['layer-b'],
            head: 'Midpoint → unit elastic (|PED| = 1)',
            body: 'Exactly halfway down the curve the two percentage effects are equal, so |PED| = 1. This is the point where <strong>total revenue is maximised</strong>.'
          },
          {
            label: 'C · lower part',
            tone: 'purple',
            show: ['layer-c'],
            head: 'Lower part → inelastic (|PED| < 1)',
            body: 'Low price, high quantity. Now a price change is a <strong>large %</strong> of a low price but a <strong>small %</strong> of a high quantity – so %ΔP outweighs %ΔQD. Demand is inelastic here.'
          }
        ]
      },
      keyTakeaway: {
        title: 'Slope ≠ elasticity',
        text: 'A constant slope hides a changing elasticity. Demand is elastic in the <strong>upper</strong> half, unit elastic at the <strong>midpoint</strong>, and inelastic in the <strong>lower</strong> half – which is exactly why total revenue peaks at the middle of the curve.'
      },
      examEdge: 'A favourite mark-scheme catch: students assume a straight-line demand curve has one PED. It does not. State which region you are in (upper/lower) and link it to the revenue consequence – that earns the application mark.'
    },

    /* ================================================================
       CARD 5 – WHAT MAKES DEMAND ELASTIC
       Determinants hub + one good, different PED + predict-reveal
       ================================================================ */
    {
      id: 'ped_6',
      stepLabel: 'Learn: Step 5 of 8',
      title: 'What makes demand elastic?',
      intro: 'Ask: “What can consumers do when the price rises?” The more options they have – to switch, delay, or go without – the more elastic demand will be. Five forces decide it.',
      diagramKey: 'pedDriversHub',
      causesLabel: 'One good, different PED',
      causesEmoji: '🔀',
      causesStyle: 'tinted-flat',
      causes: [
        {
          tone: 'rose',
          icon: '💉',
          head: 'Insulin → very inelastic',
          body: 'A medical necessity with no substitute. The diabetic patient must buy a fixed quantity whatever the price – demand barely moves.'
        },
        {
          tone: 'green',
          icon: '🍽️',
          head: 'Restaurant meals → elastic',
          body: 'A luxury with countless substitutes – cook at home, choose a cheaper venue, eat out less often. A price rise prompts a large fall in demand.'
        },
        {
          tone: 'amber',
          icon: '⛽',
          head: 'Petrol → it depends on time',
          body: 'Inelastic in the short run (drivers are locked into cars and commutes) but more elastic over the long run as EVs, transport and home moves provide substitutes.'
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
      examEdge: 'Always tie the determinant to the product: “Demand for petrol is inelastic because there are few close substitutes in the short run – most journeys cannot easily switch to other transport modes.” Determinant → mechanism → conclusion.'
    },

    /* ================================================================
       CARD 6 – PED AND TOTAL REVENUE
       Elastic vs inelastic revenue panels + the TR rule
       ================================================================ */
    {
      id: 'ped_7',
      stepLabel: 'Learn: Step 6 of 8',
      title: 'PED and total revenue',
      intro: 'Total revenue = price × quantity. When price changes, both move – and PED decides which effect wins. The same 10% price cut grows revenue for one firm and shrinks it for another.',
      diagramKey: 'pedTotalRevenue',
      causesLabel: 'The Total Revenue rule',
      causesEmoji: '💷',
      causesStyle: 'tinted-flat',
      causes: [
        {
          tone: 'green',
          icon: '📉',
          head: 'Elastic → opposite directions',
          body: 'Price and revenue move in <strong>opposite</strong> directions. Price ↑ → TR falls; price ↓ → TR rises, because the quantity effect dominates.'
        },
        {
          tone: 'amber',
          icon: '⚖️',
          head: 'Unit elastic → no change',
          body: 'The % change in quantity exactly cancels the % change in price, so total revenue stays the same. TR is at its <strong>maximum</strong>.'
        },
        {
          tone: 'purple',
          icon: '📈',
          head: 'Inelastic → same direction',
          body: 'Price and revenue move in the <strong>same</strong> direction. Price ↑ → TR rises; price ↓ → TR falls, because the price effect dominates.'
        }
      ],
      keyTakeaway: {
        title: 'The shortcut',
        text: 'Elastic demand: price and revenue move in <em>opposite</em> directions. Inelastic demand: price and revenue move in the <em>same</em> direction. Unit elastic: revenue is unchanged (and maximised).'
      },
      examEdge: 'Data-response gold: read the % price change and the % quantity change off the stem, divide for PED, then state the revenue consequence. “Demand is inelastic (|PED| = 0.5), so the 10% price rise raises total revenue” earns analysis and application together.'
    },

    /* ================================================================
       CARD 7 – PED IN THE REAL WORLD
       Who uses it + short run vs long run + Marshall quote
       ================================================================ */
    {
      id: 'ped_8',
      stepLabel: 'Learn: Step 7 of 8',
      title: 'PED in the real world',
      intro: 'PED determines who pays a tax, what firms charge, and whether government policy works as intended. It is the bridge between economic theory and practical decision-making.',
      economistQuote: {
        portraitKey: 'economistMarshall',
        tone: 'amber',
        label: 'Economist insight on elasticity',
        quote: 'The elasticity of demand in a market is great or small according as the amount demanded increases much or little for a given fall in price, and diminishes much or little for a given rise in price.',
        attribution: 'Alfred Marshall, <em>Principles of Economics</em> (1890)'
      },
      causesLabel: 'Who uses PED?',
      causesEmoji: '🌍',
      causes: [
        {
          icon: '✈️',
          head: 'Airlines & hotels',
          body: 'Yield management: charge inelastic business travellers and peak-date bookers premium fares, while tempting elastic leisure customers with cheap advance and off-peak deals.'
        },
        {
          icon: '🏛️',
          head: 'Government taxation',
          body: 'Indirect taxes target inelastic goods (tobacco, alcohol, fuel): quantity barely falls, so revenue is large and stable – though the burden is often regressive.'
        },
        {
          icon: '🛒',
          head: 'Supermarket promotions',
          body: 'Price-cut promotions work on elastic goods where a small discount drives a big sales jump; staples with inelastic demand are rarely discounted deeply.'
        },
        {
          icon: '🕑',
          head: 'Peak & off-peak pricing',
          body: 'Rail fares, energy tariffs and cinema tickets all split demand: inelastic peak users pay more, elastic off-peak users are lured by lower prices.'
        }
      ],
      causes2Label: 'Short run vs long run',
      causes2Emoji: '⏳',
      causes2: [
        {
          tone: 'amber',
          icon: '🔒',
          head: 'Short run → more inelastic',
          body: 'Consumers are locked into existing habits, contracts and equipment, so they cannot respond much to a price change at first.'
        },
        {
          tone: 'green',
          icon: '🔓',
          head: 'Long run → more elastic',
          body: 'Given time, substitutes emerge and behaviour adapts – petrol demand is inelastic today but more elastic as EVs and transport alternatives spread.'
        }
      ],
      keyTakeaway: {
        title: 'The big idea',
        text: 'PED is not just theory – it explains why cigarettes are taxed heavily, why airlines fence off business fares, and why supermarkets discount some goods and not others. It is a practical tool for firms and governments alike.'
      },
      examEdge: 'Three-step chain for full marks: (1) State the PED for the product and its determinant. (2) Apply the TR rule or tax incidence rule. (3) Explain the consequence for the firm, consumer, or government. Example: “Demand for cigarettes is price inelastic (few substitutes, addictive). Therefore an indirect tax causes a large price rise with little fall in quantity. Most of the tax burden falls on smokers, and the government raises substantial revenue.”'
    },

    /* ================================================================
       CARD 8 – PED EXAM TOOLKIT
       How to read → core facts → common mistakes → checklist
       ================================================================ */
    {
      id: 'ped_9',
      stepLabel: 'Learn: Step 8 of 8',
      title: 'PED exam toolkit',
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
      stepsLabel: 'How to read a PED question',
      stepsEmoji: '🧭',
      steps: [
        { label: 'Identify the PED or the data', text: 'Spot the PED value in the stem, or read off the % price change and % quantity change you need to calculate it.' },
        { label: 'Calculate accurately using % changes', text: 'Show each % change separately, then divide. Keep the sign, quote one decimal place – every visible step is a mark.' },
        { label: 'Classify the coefficient', text: 'State |PED|, compare to 1, and label it elastic / inelastic / unit elastic.' },
        { label: 'Apply to product, revenue or policy', text: 'Tie the value to a determinant of the product, then state what happens to total revenue, tax incidence, or pricing. This is where evaluation marks sit.' }
      ],
      keyTakeaway: {
        title: 'How to write it up',
        text: 'Define → calculate (with sign) → classify (|PED| vs 1) → apply (determinant + revenue/tax/policy consequence). Four moves, full marks.'
      },
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
    title:    'Price Elasticity of Demand',
    subtitle: 'Introduction to Markets and Market Failure',
    backUrl:  TopicLoader.routes.learn('price-elasticity-of-demand'),
    backLabel: 'Back to Learn It',
    lede: '10 questions · ~8 minutes · covers the PED formula, determinants, total revenue, tax incidence, special cases, and short- vs long-run elasticity',
    shortNames: [
      'PED formula', 'PED numeric', 'Determinants cause/effect', 'PED & total revenue',
      'Tax incidence', 'Categorise goods', 'Match special cases', 'Short vs long run',
      'Data table', 'Evaluation multi-select'
    ],

    questions: [

      /* 1 – MCQ: PED interpretation */
      { type: 'mcq',
        id: 'ped-q1',
        stem: 'A good has a price elasticity of demand of <strong>−0.4</strong>. Which statement correctly interprets this value?',
        opts: [
          'Demand is price inelastic: a 10% rise in price causes only a 4% fall in quantity demanded',
          'Demand is price elastic: a 10% rise in price causes a 40% fall in quantity demanded',
          'Demand is unit elastic: a 10% rise in price causes exactly a 10% fall in quantity demanded',
          'The demand curve is horizontal – consumers will buy any quantity at the given price'
        ],
        ans: 0,
        exp: 'PED = % change in quantity demanded ÷ % change in price. PED = −0.4 means a 1% rise in price causes a 0.4% fall in quantity demanded – the percentage demand response is <strong>smaller</strong> than the percentage price change → <strong>price inelastic demand</strong> (|PED| < 1). Example: 10% price rise → 4% fall in QD. The negative sign reflects the inverse relationship between price and quantity demanded (law of demand); when classifying elasticity we use the absolute value. Inelastic demand is common for necessities, addictive goods, and products with few substitutes (energy, prescribed medicines, salt).'
      },

      /* 2 – Numeric input: PED calculation */
      { type: 'numeric_input',
        id: 'ped-q2',
        stem: 'Calculate the <strong>price elasticity of demand</strong> for this market.',
        context: 'When the price of a branded breakfast cereal rises from <strong>£3.00 to £3.30</strong> per box, weekly sales fall from <strong>200,000 to 170,000</strong> boxes.',
        answer: -1.5,
        tolerance: 0.05,
        unit: '',
        hint: 'PED = (% change in QD) ÷ (% change in price). Use the original values as the base for each percentage change.',
        workingSteps: [
          '% change in price = (3.30 − 3.00) ÷ 3.00 × 100 = +10%',
          '% change in QD = (170,000 − 200,000) ÷ 200,000 × 100 = −15%',
          'PED = −15% ÷ +10% = −1.5',
          '|PED| = 1.5 > 1 → demand is price elastic'
        ],
        exp: '% change in price = (3.30−3.00)/3.00 × 100 = <strong>+10%</strong>. % change in QD = (170,000−200,000)/200,000 × 100 = <strong>−15%</strong>. PED = −15%/+10% = <strong>−1.5</strong>. Since |PED| = 1.5 > 1, demand is <strong>price elastic</strong>. This makes sense for a branded cereal – consumers can easily switch to competitor brands or supermarket own-label alternatives. The revenue implication: TR before = £600,000; TR after = £561,000. Total revenue <strong>falls by £39,000</strong>, confirming the elastic-demand → price-rise → TR-falls rule.'
      },

      /* 3 – Cause & effect: PED determinants */
      { type: 'cause_effect',
        id: 'ped-q3',
        stem: 'Match each factor to its effect on the price elasticity of demand for a good.',
        pairs: [
          { cause: 'Many close substitutes are available', effect: 'Increases |PED| – consumers can easily switch when price rises' },
          { cause: 'The good is addictive (e.g. tobacco, caffeine)', effect: 'Reduces |PED| – habitual consumers continue buying despite higher prices' },
          { cause: 'The good takes a large share of household income', effect: 'Increases |PED| – consumers are more sensitive to price changes that hit their budget hard' },
          { cause: 'Consumers have a long time to adjust to a price change', effect: 'Increases |PED| – substitutes are found and habits change over time' },
          { cause: 'The good is a necessity with no realistic alternative', effect: 'Reduces |PED| – consumers must keep buying regardless of price' },
          { cause: 'The good is narrowly defined (e.g. Heinz baked beans, not "beans")', effect: 'Increases |PED| – substitutes are other brands of the same product' }
        ],
        exp: 'PED determinants (SPLAT mnemonic – Substitutes, Proportion of income, Luxury/necessity, Addictiveness, Time): <strong>Substitutes</strong> is the most important – more substitutes → more elastic. <strong>Proportion of income</strong>: high-share items face elastic demand (cars, holidays). <strong>Necessities</strong>: inelastic (insulin, electricity). <strong>Addictiveness</strong>: inelastic (cigarettes, heroin). <strong>Time</strong>: demand becomes more elastic in the long run as substitutes are discovered. <strong>Definition</strong>: narrowly-defined goods (one brand) are more elastic than broadly-defined goods (a whole category).'
      },

      /* 4 – MCQ: PED and total revenue */
      { type: 'mcq',
        id: 'ped-q4',
        stem: 'A firm sells a product with <strong>price elastic demand</strong> (|PED| = 2.5). It is considering a 10% price increase. What happens to <strong>total revenue</strong>?',
        opts: [
          'TR falls – the 10% price rise reduces QD by approximately 25%, and the revenue loss from reduced sales exceeds the gain from the higher price',
          'TR rises – any price increase raises revenue because the firm receives more per unit sold',
          'TR is unchanged – the price increase exactly offsets the fall in quantity demanded',
          'TR rises slightly – elastic demand means consumers are price-sensitive but still buy almost the same amount'
        ],
        ans: 0,
        exp: 'With |PED| = 2.5, a 10% price rise causes approximately a 25% fall in QD (10% × 2.5 = 25%). TR = P × Q. The revenue gain from +10% price is outweighed by the revenue loss from −25% quantity → <strong>TR falls</strong>. The <strong>inverse-elasticity rule</strong>: elastic demand → price rise → TR falls (price cut → TR rises); inelastic demand → price rise → TR rises (price cut → TR falls); unit elastic (|PED| = 1) → TR unchanged. Practical implication: firms facing many substitutes should compete on price; firms with pricing power (few substitutes, brand loyalty) should raise prices.'
      },

      /* 5 – Multi-select: tax incidence */
      { type: 'multi_select',
        id: 'ped-q5',
        stem: 'The government imposes an indirect tax on cigarettes. Select ALL statements that are <strong>correct</strong> about this tax.',
        opts: [
          'Most of the tax burden falls on consumers because demand for cigarettes is price inelastic',
          'The tax generates substantial revenue because inelastic demand means quantity purchased barely falls',
          'The deadweight welfare loss is relatively small because the quantity reduction is limited',
          'The tax is regressive – it takes a higher proportion of income from lower-income households who are more likely to smoke',
          'The tax burden falls mainly on producers because they cannot pass it on to consumers without losing customers',
          'A tax on a good with elastic demand would generate more revenue than the cigarette tax, since elastic demand means consumers keep buying'
        ],
        correct: [0, 1, 2, 3],
        exp: 'Options A, B, C, and D are all correct. <strong>A</strong>: inelastic demand → consumers bear most of the tax (price can rise sharply without losing many sales). <strong>B</strong>: inelastic demand → little quantity reduction → large tax revenue – the classic argument for taxing inelastic goods. <strong>C</strong>: deadweight loss = triangle proportional to quantity reduction; inelastic demand → small Q fall → small DWL. <strong>D</strong>: cigarette consumption takes a higher income share among lower-income households, making the tax regressive. <strong>E</strong> is wrong: inelastic demand means producers <em>can</em> pass the tax to consumers. <strong>F</strong> is wrong: elastic demand means a tax causes a large quantity fall → less revenue, not more.'
      },

      /* 6 – Categorise: elasticity buckets */
      { type: 'categorise',
        id: 'ped-q6',
        stem: 'Sort each good into the category that best describes the typical price elasticity of its demand.',
        categories: ['Elastic (|PED| > 1)', 'Inelastic (|PED| < 1)', 'Approximately unit elastic', 'Perfectly inelastic (PED = 0)'],
        items: [
          { text: 'A weekend break to Paris with many alternative city destinations', category: 'Elastic (|PED| > 1)' },
          { text: 'A branded takeaway coffee with multiple cafés on the same street', category: 'Elastic (|PED| > 1)' },
          { text: 'Household gas and electricity over the short run', category: 'Inelastic (|PED| < 1)' },
          { text: 'Insulin for a Type 1 diabetic patient with no realistic substitute', category: 'Perfectly inelastic (PED = 0)' },
          { text: 'Salt – a tiny share of household spending, used in small amounts', category: 'Inelastic (|PED| < 1)' },
          { text: 'A composite consumer basket where firms have priced to keep revenue stable', category: 'Approximately unit elastic' }
        ],
        exp: '<strong>Elastic</strong>: Paris weekend (luxury + many substitutes) and branded coffee (many nearby substitutes). <strong>Inelastic</strong>: household energy (necessity, no short-run substitute) and salt (tiny share of income, no substitute). <strong>Approximately unit elastic</strong>: baskets/products priced so revenue is stable – a benchmark case. <strong>Perfectly inelastic</strong>: insulin – the patient must buy a fixed quantity regardless of price. Perfectly inelastic demand is rare and ethically charged: it creates extreme pricing power, which is why life-sustaining medicines are usually price-regulated or publicly funded.'
      },

      /* 7 – Match pairs: PED values to revenue effects */
      { type: 'match_pairs',
        id: 'ped-q7',
        stem: 'Match each PED value to the correct effect on <strong>total revenue</strong> following a <strong>price increase</strong>.',
        pairs: [
          { a: 'PED = 0 (perfectly inelastic)', b: 'TR rises in proportion with price' },
          { a: '|PED| < 1 (inelastic)',          b: 'TR rises when price increases' },
          { a: '|PED| = 1 (unit elastic)',        b: 'TR is unchanged' },
          { a: '|PED| > 1 (elastic)',             b: 'TR falls when price increases' },
          { a: '|PED| = ∞ (perfectly elastic)',   b: 'TR falls to zero above market price' },
          { a: 'Mid-point of demand curve',       b: 'PED = −1 and TR is maximised' }
        ],
        exp: 'The <strong>inverse-elasticity rule</strong> applied across the full spectrum: <strong>perfectly inelastic</strong> → TR rises in lockstep with price (the seller captures all of any price increase); <strong>inelastic</strong> → TR rises (P effect dominates Q effect); <strong>unit elastic</strong> → TR unchanged (P and Q effects exactly cancel – a single point on a typical demand curve); <strong>elastic</strong> → TR falls (Q effect dominates); <strong>perfectly elastic</strong> → TR collapses to zero (firm in perfect competition cannot charge above market price). Reverse the direction for a price cut: elastic + price cut → TR rises, inelastic + price cut → TR falls.'
      },

      /* 8 – MCQ: short run vs long run PED */
      { type: 'mcq',
        id: 'ped-q8',
        stem: 'The price of petrol rises sharply and stays high. Which statement best describes the <strong>short-run vs long-run</strong> price elasticity of demand for petrol?',
        opts: [
          'Demand is inelastic in the short run but more elastic in the long run, as drivers switch to electric vehicles, use public transport, or move closer to work',
          'Demand is elastic in the short run but inelastic in the long run, as consumers initially cut back sharply but eventually return to their old driving habits',
          'PED is the same in the short and long run because the determinants of demand do not change over time',
          'Demand becomes perfectly inelastic in the long run because petrol is a necessity for car owners'
        ],
        ans: 0,
        exp: 'Demand is <strong>more elastic in the long run</strong> for almost every good – and petrol is the textbook illustration. <strong>Short run</strong>: consumers are locked into their existing cars, jobs, and homes; they can only cut a few discretionary trips → inelastic (estimates ≈ −0.2 to −0.3). <strong>Long run</strong>: consumers can switch to fuel-efficient vehicles, EVs, public transport, cycling, or move closer to work → much more elastic (estimates ≈ −0.6 to −0.8). The 1970s oil shocks confirmed this: short-run demand barely fell, but over a decade vehicle fleets shifted toward smaller, more efficient cars. Time is a key determinant of PED – substitution possibilities expand as consumers adjust.'
      },

      /* 9 – Data table: petrol PED */
      { type: 'data_table',
        id: 'ped-q9',
        stem: 'The table shows UK petrol market data before and after a significant fuel-duty rise.',
        headers: ['Variable', 'Before duty rise', 'After duty rise'],
        rows: [
          ['Average pump price', '£1.50/litre', '£1.65/litre'],
          ['Petrol consumption (bn litres/yr)', '42.0', '40.6'],
          ['Government fuel-duty revenue (£bn)', '28.1', '28.4'],
          ['Share of income spent on petrol (low-income households)', '4.8%', '5.3%']
        ],
        question: 'Which conclusion is <strong>most consistent</strong> with PED theory and the data?',
        opts: [
          'PED ≈ −0.33 (inelastic); the duty raises modest extra revenue with limited quantity reduction, but the rising income share for low-income households shows the burden is regressive',
          '|PED| > 1 (elastic) – the percentage fall in consumption confirms strong consumer sensitivity to petrol prices',
          'The small revenue rise shows that taxing inelastic goods is ineffective at raising revenue',
          'The data show the duty is progressive – wealthier households consume more petrol in absolute terms'
        ],
        ans: 0,
        exp: '%ΔQD = (40.6−42.0)/42.0 × 100 ≈ <strong>−3.3%</strong>. %ΔP = (1.65−1.50)/1.50 × 100 = <strong>+10%</strong>. PED ≈ −3.3%/+10% = <strong>−0.33</strong> → clearly <strong>inelastic</strong>. Revenue rose from £28.1bn to £28.4bn – consistent with the inelastic-good → tax → revenue-rises rule. The regressive distributional impact (low-income share rises from 4.8% to 5.3%) is a genuine policy concern. Option B contradicts the calculation. Option C is wrong – revenue did rise. Option D confuses absolute spending with the income share, which is the proper measure of regressivity.'
      },

      /* 10 – Multi-select: evaluation of PED applications */
      { type: 'multi_select',
        id: 'ped-q10',
        stem: 'A student is writing a 25-mark essay on the <strong>application of PED</strong>. Which statements demonstrate <strong>evaluation</strong> as opposed to mere description?',
        opts: [
          'Price elasticity of demand measures the responsiveness of quantity demanded to a change in price, calculated as %ΔQD ÷ %ΔP',
          'The PED–TR rule applies differently across airline segments: Ryanair targets elastic leisure travellers and maximises revenue by cutting base fares, while British Airways targets inelastic business travellers and maximises revenue through premium pricing – the same principle generates opposite strategies depending on elasticity',
          'Pharmaceutical firms can exploit inelastic demand for patented medicines to raise prices and revenue, but this same inelasticity attracts regulatory scrutiny and price controls, qualifying any claim that pricing power translates directly into unconstrained profit',
          'Inelastic demand means a price rise leads to a smaller proportional fall in quantity, so total revenue rises when price increases',
          'Taxing inelastic goods such as fuel involves a genuine trade-off: high revenue yield and small deadweight loss against a regressive burden that falls hardest on lower-income households – making the policy desirable on efficiency grounds but contentious on equity grounds',
          'When demand is perfectly elastic (PED = −∞), the demand curve is horizontal and any price rise drives quantity demanded to zero'
        ],
        correct: [1, 2, 4],
        exp: '<strong>B, C, and E are evaluation.</strong> (B) applies the TR rule to two real firms operating under opposite elasticity conditions and reaches a comparative conclusion – a textbook evaluative move. (C) qualifies the pharmaceutical pricing-power claim by introducing regulation as a countervailing force, reaching a balanced direction. (E) explicitly weighs efficiency benefits against equity costs of taxing inelastic goods and concludes the policy involves a genuine trade-off. <strong>A, D, and F are not evaluation.</strong> (A) is a textbook definition. (D) accurately states the inelastic–TR rule but applies it to no context and weighs no counter-considerations. (F) describes the perfectly elastic special case without any application or judgement. Evaluation requires application + weighing + reaching a qualified direction – not just accurate description.'
      }

    ]
  };

})();
