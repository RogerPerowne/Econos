window.ECONOS_TOPIC = {
  id: 'price-elasticity-of-supply',
  topicNum: '2.5',
  theme: 'Theme 1 \xb7 Introduction to Markets and Market Failure',
  title: 'Price Elasticity of Supply',
  estTime: '8–10 minutes',
  goal: 'Understand what PES measures, how to calculate it, how to read the coefficient, what determines it, and how it shapes prices, policy, and real markets.',
  intro: {
    heroKey: 'heroPES',
    summary: 'PES measures how responsive quantity supplied is to a price change. When demand shifts, PES determines the split between price and quantity adjustment. Inelastic supply means most of the pressure goes into higher prices; elastic supply means output adjusts instead.',
    doInThis: 'Work through 8 cards covering what PES is, calculating and classifying it, a step-by-step worked calculation, the five drivers of supply elasticity, how time changes everything, why PES matters when demand jumps, PES across real industries, and an exam-ready toolkit.',
    outcomes: [
      'Define and calculate PES correctly using the formula',
      'Distinguish elastic and inelastic supply and link each to the supply curve diagram',
      'Identify the key determinants of PES and explain why markets differ',
      'Apply PES to housing, agriculture, tax incidence, and supply-side policy'
    ],
    tip: 'PES = % change in QS \xf7 % change in P. Always positive. PES > 1 = elastic; PES < 1 = inelastic; PES = 0 = perfectly inelastic (vertical); PES = ∞ = perfectly elastic (horizontal).',
    stages: [
      { num: 1, name: 'Learn it', sub: '8 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply skills with the context', state: 'available', href: TopicLoader.routes.link('intro') },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [

    /* ================================================================
       CARD 1 – PES: THE BIG PICTURE  (pattern: Side-by-side pair)
       Steep vs shallow supply, same price rise → small vs large ΔQ
       ================================================================ */
    {
      id: 'pes_1',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'PES – the big picture',
      lede: 'Elasticity of supply shows how strongly producers respond when price changes.',
      ledeStyle: 'plain',
      tip: { tone: 'green', icon: '🔒', text: '<strong>PES measures the responsiveness of quantity supplied to a change in price.</strong>' },
      visualKey: 'pesBigPictureCompare',
      visualLabel: 'The core idea',
      visualEmoji: '🎯',
      causesLabel: 'Two regimes, one question',
      causesEmoji: '⚖️',
      causesCols: 3,
      causesStyle: 'icon-top',
      causesFirst: true,
      causes: [
        { tone: 'green', icon: '🐢', head: 'Inelastic supply', body: 'Producers struggle to expand output quickly, so a price rise unlocks only a small quantity increase.' },
        { tone: 'purple', icon: '🚀', head: 'Elastic supply', body: 'Firms can expand output a lot when price rises, so most of the response shows up as extra quantity.' },
        { tone: 'amber', icon: '💡', head: 'Why it matters', body: 'PES explains how a market shares any adjustment between higher prices and higher output.' }
      ],
      note: { tone: 'purple', icon: '🧮', head: 'The formula', text: 'PES = % change in quantity supplied ÷ % change in price. The bigger the number, the more responsive supply is.' },
      notePosition: 'top',
      bottomTip: { tone: 'blue', icon: 'ℹ️', text: 'Supply is about sellers and production – <strong>not</strong> buyers and demand.' },
      conclusion: { title: 'Big idea', text: 'PES tells us whether higher prices mainly trigger more output, or mainly push prices further up.' },
      examEdge: { title: 'Exam edge', text: 'Always say how much quantity supplied changes <em>relative to</em> price – not just "supply rises".' }
    },

    /* ================================================================
       CARD 2 – CALCULATING & CLASSIFYING PES  (pattern: Spectrum)
       Two worked examples + the 5-point classification spectrum
       ================================================================ */
    {
      id: 'pes_2',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 2 of 8',
      title: 'Calculating and classifying PES',
      lede: 'PES is a number – but the sign and size tell a clear story about responsiveness.',
      ledeStyle: 'plain',
      tip: { tone: 'green', icon: '🔒', text: '<strong>PES = % change in quantity supplied ÷ % change in price.</strong>' },
      visualKey: 'pesCalcClassify',
      visualLabel: 'Worked examples → classify the result',
      visualEmoji: '🧮',
      causesLabel: 'Read the number',
      causesEmoji: 'ℹ️',
      causesCols: 3,
      causes: [
        { tone: 'blue', icon: '🔒', head: 'Low PES', body: 'Capacity is hard to expand, so output barely moves when price rises.' },
        { tone: 'green', icon: '📈', head: 'High PES', body: 'Output can be scaled up quickly, so quantity does most of the adjusting.' },
        { tone: 'purple', icon: '⚡', head: 'PES and price shocks', body: 'Low PES means demand swings produce bigger price swings.' }
      ],
      bottomTip: { tone: 'amber', icon: '⚠️', text: 'Use <strong>percentage</strong> changes – not absolute changes.' },
      conclusion: { title: 'Big idea', text: 'PES is not just a calculation – it is a classification of producer flexibility.' },
      examEdge: { title: 'Exam edge', text: 'State the value, classify it, then explain what it means for firms.' }
    },

    /* ================================================================
       CARD 3 – WORKED CALCULATION  (interactive PES calculator, kept)
       Oil market scenario, scaffolded reveal steps
       ================================================================ */
    {
      id: 'pes_3',
      template: 'pes-calculation',
      stepLabel: 'Learn: Step 3 of 8',
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
       CARD 4 – WHAT MAKES SUPPLY ELASTIC OR INELASTIC  (Tile grid)
       Five drivers feeding an elasticity dial + typical patterns
       ================================================================ */
    {
      id: 'pes_4',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 4 of 8',
      title: 'What makes supply elastic or inelastic?',
      lede: 'Some markets can expand quickly. Others are boxed in by hard constraints.',
      ledeStyle: 'plain',
      tip: { tone: 'green', icon: '🔒', text: '<strong>PES depends on how easily firms can increase output when price rises.</strong>' },
      visualKey: 'pesDriversSpectrum',
      visualLabel: 'The five drivers',
      visualEmoji: '🎛️',
      causes3Label: 'Typical patterns',
      causes3Emoji: '🌍',
      causes3Cols: 4,
      causes3Style: 'icon-top',
      causes3: [
        { tone: 'green', icon: '🐟', head: 'Fresh fish', body: 'Low PES – today\'s catch is fixed.' },
        { tone: 'amber', icon: '👕', head: 'Clothing', body: 'Higher PES – production can be scaled.' },
        { tone: 'purple', icon: '🏠', head: 'Housing', body: 'Low PES – planning and construction take time.' },
        { tone: 'blue', icon: '☁️', head: 'Digital', body: 'Very high PES – extra units are easy to supply.' }
      ],
      flowTitle: 'Quick rule',
      flowEmoji: '🔗',
      flow: [
        { tone: 'green', icon: '🏭', title: 'More spare capacity', sub: '' },
        { tone: 'blue', icon: '📊', title: 'Output rises faster', sub: '' },
        { tone: 'purple', icon: '📈', title: 'Supply becomes more elastic', sub: '' }
      ],
      bottomTip: { tone: 'blue', icon: 'ℹ️', text: 'The same good can have <strong>different PES in the short run and the long run.</strong>' },
      conclusion: { title: 'Big idea', text: 'PES is really about constraints – how many barriers stand between a higher price and higher output.' },
      examEdge: { title: 'Exam edge', text: 'When explaining PES, name the driver – spare capacity, time, stocks, mobility, or production lag.' }
    },

    /* ================================================================
       CARD 5 – TIME CHANGES EVERYTHING  (pattern: Sequential flow)
       Market period → short run → long run, PES rising over time
       ================================================================ */
    {
      id: 'pes_5',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 5 of 8',
      title: 'Time changes everything',
      lede: 'Elasticity of supply usually increases as producers get more time to respond.',
      ledeStyle: 'plain',
      tip: { tone: 'green', icon: '⏱️', text: '<strong>Supply is often very inelastic at first, then becomes more elastic over time.</strong>' },
      visualKey: 'pesTimeHorizons',
      visualLabel: 'Three time horizons',
      visualEmoji: '🕐',
      flowTitle: 'Follow one market',
      flowEmoji: '🏪',
      flow: [
        { tone: 'purple', icon: '🛒', title: 'Today', sub: 'Price rises, shelves empty quickly.' },
        { tone: 'amber', icon: '🏭', title: 'Next month', sub: 'Firm adds shifts and restocks.' },
        { tone: 'green', icon: '🏬', title: 'Next year', sub: 'More competitors and capacity appear.' }
      ],
      bottomTip: { tone: 'blue', icon: '📈', text: 'Same market – <strong>rising PES over time.</strong>' },
      causes2Label: 'Worked numerical: same product, two time horizons',
      causes2Emoji: '🧮',
      causes2Style: 'tinted-flat',
      causes2: [
        { tone: 'purple', icon: '⛽', head: 'Oil supply · Year 1 (short run)', body: 'A 40% price rise prompts an estimated <strong>10% rise</strong> in quantity supplied – existing wells already near capacity. <strong>PES = 10% ÷ 40% = 0.25</strong> (inelastic). Most of the price shock sticks; prices stay high.' },
        { tone: 'green',  icon: '🛢️', head: 'Oil supply · Year 5 (long run)', body: 'New wells and rigs have been brought online. The same 40% price rise now triggers a <strong>32% rise</strong> in quantity supplied. <strong>PES = 32% ÷ 40% = 0.80</strong> (still inelastic, but ~3× higher than the short run). Prices ease back as supply catches up – which is why oil price shocks moderate over time.' }
      ],
      causes3Label: 'Why this matters',
      causes3Emoji: '🎯',
      causes3Cols: 3,
      causes3Style: 'icon-top',
      causes3: [
        { tone: 'purple', icon: '📈', head: 'Short run', body: 'Low PES means prices can spike when demand jumps – short-run shortages.' },
        { tone: 'amber', icon: '🔄', head: 'Long run', body: 'Higher PES allows output to catch up with demand over time.' },
        { tone: 'green', icon: '❓', head: 'Evaluation', body: 'Always ask: over what time period are we judging supply?' }
      ],
      conclusion: { title: 'Big idea', text: 'Time is the master variable in PES – flexibility grows as adjustment options multiply.' },
      examEdge: { title: 'Exam edge', text: 'Never discuss PES without saying whether you mean the short run or the long run.' }
    },

    /* ================================================================
       CARD 6 – WHEN DEMAND JUMPS  (pattern: Side-by-side pair)
       Demand shift onto steep vs shallow supply
       ================================================================ */
    {
      id: 'pes_6',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 6 of 8',
      title: 'When demand jumps – why PES matters',
      lede: 'Elasticity of supply shapes whether a demand increase raises price, quantity, or both.',
      ledeStyle: 'plain',
      tip: { tone: 'green', icon: '🔒', text: '<strong>Low PES means price rises more. High PES means output rises more.</strong>' },
      visualKey: 'elasticVsInelasticSupplyDiagram',
      visualLabel: 'Two market outcomes',
      visualEmoji: '📊',
      flowTitle: 'Demand rises – two outcomes',
      flowEmoji: '📈',
      flowSep: '→',
      flow: [
        { tone: 'blue', icon: '📈', title: 'Demand rises', sub: 'A rightward shift in D.' },
        { tone: 'purple', icon: '🏷️', title: 'With low PES', sub: 'Mostly price pressure.' },
        { tone: 'amber', icon: '📊', title: 'With high PES', sub: 'Mostly an output response.' }
      ],
      causesLabel: 'Price volatility',
      causesEmoji: '〰️',
      causesCols: 3,
      causes: [
        { tone: 'green', icon: '📈', head: 'Low PES', body: 'Markets more vulnerable to shortages and price spikes.' },
        { tone: 'purple', icon: '〰️', head: 'High PES', body: 'Markets can absorb demand growth more smoothly.' },
        { tone: 'amber', icon: '👥', head: 'Buyers', body: 'PES affects affordability and the inflation pressure on consumers.' }
      ],
      causes2Label: 'Real examples',
      causes2Emoji: '🏛️',
      causes2Cols: 3,
      causes2: [
        { tone: 'green', icon: '🏠', head: 'UK housing', body: 'Very low PES: planning limits cap new builds, so when demand rose 2010–22 prices jumped ~75% while quantity barely moved – the shock fell almost entirely on price.' },
        { tone: 'purple', icon: '🎫', head: 'Concert tickets', body: 'Near-zero PES: a venue\'s capacity is fixed, so extra demand can\'t add seats – it spills into higher prices and resale touts rather than more tickets.' },
        { tone: 'amber', icon: '👟', head: 'Trainers', body: 'High PES: mass production has spare capacity, so firms scale output up quickly when demand rises – quantity does most of the adjusting and prices stay fairly stable.' }
      ],
      bottomTip: { tone: 'blue', icon: 'ℹ️', text: 'PES helps explain why some booms cause inflation while others mainly raise production.' },
      conclusion: { title: 'Big idea', text: 'Demand shocks do not tell the whole story – supply flexibility determines the market result.' },
      examEdge: { title: 'Exam edge', text: 'In diagram questions, link the steepness of supply to the balance between price and quantity change.' }
    },

    /* ================================================================
       CARD 7 – PES IN THE REAL WORLD  (pattern: Spectrum / regime grid)
       Four industries arranged low → high PES with supply-time sparklines
       ================================================================ */
    {
      id: 'pes_7',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 7 of 8',
      title: 'PES in the real world',
      lede: 'Different industries face very different supply constraints.',
      ledeStyle: 'plain',
      tip: { tone: 'green', icon: '🔒', text: '<strong>To apply PES well, classify the market and explain the constraint.</strong>' },
      visualKey: 'pesIndustrySpectrum',
      visualLabel: 'Four market scenarios',
      visualEmoji: '🌍',
      causesLabel: 'Who cares?',
      causesEmoji: '👥',
      causesCols: 3,
      causesStyle: 'icon-top',
      causesFirst: true,
      causes: [
        { tone: 'blue', icon: '🏛️', head: 'Firms', body: 'Plan capacity, stock and pricing around how fast they can supply.' },
        { tone: 'amber', icon: '🏦', head: 'Governments', body: 'Predict inflation and shortage risks in key markets.' },
        { tone: 'green', icon: '📈', head: 'Investors', body: 'Spot sectors with hard or easy expansion.' }
      ],
      causes3Label: 'Short context, big consequences',
      causes3Emoji: '🎯',
      causes3Cols: 4,
      causes3Style: 'icon-top',
      causes3: [
        { tone: 'blue', icon: '⬆️', head: 'Strong demand', body: 'Low PES + strong demand → bigger price rises.' },
        { tone: 'amber', icon: '⚠️', head: 'Supply shocks', body: 'Low PES can worsen inflation pressure.' },
        { tone: 'green', icon: '↗️', head: 'High PES', body: 'Markets expand without as much price pain.' },
        { tone: 'purple', icon: '🔄', head: 'Time', body: 'Can move a market from low PES to higher PES.' }
      ],
      bottomTip: { tone: 'green', icon: '🛠️', head: 'Policy can lift PES', text: '<strong>Supply-side policies aim to raise PES in critical markets.</strong> UK examples: T-Levels and apprenticeship funding raise the long-run elasticity of skilled labour; planning reform aims to raise housing PES (currently the tightest constraint in the UK economy); HS2 and grid investment raise the elasticity of transport and energy supply. Where the binding constraint is regulatory (planning), reform shifts PES faster than where it is physical (oil reserves).' },
      conclusion: { title: 'Big idea', text: 'PES turns an industry story – capacity, stock, time, and barriers – into a market prediction.' },
      examEdge: { title: 'Exam edge', text: 'Application marks come from the example – explain why housing, farming, manufacturing or digital supply behaves differently.' }
    },

    /* ================================================================
       CARD 8 – THE PES EXAM TOOLKIT  (pattern: Sequential flow)
       How to answer, common mistakes, how to write it, memory hooks
       ================================================================ */
    {
      id: 'pes_8',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 8 of 8',
      title: 'The PES exam toolkit',
      lede: 'Most PES questions ask you to identify the change, classify responsiveness, and apply it to a market outcome.',
      ledeStyle: 'plain',
      tip: { tone: 'green', icon: '✅', text: '<strong>Good answers define, calculate, classify and apply.</strong>' },
      flowTitle: 'How to answer',
      flowEmoji: '📖',
      flowSep: '→',
      flow: [
        { tone: 'blue', icon: '🔍', title: 'Identify the change', sub: 'Price changed. Supply responded.' },
        { tone: 'amber', icon: '🧮', title: 'Use the formula', sub: 'PES = %ΔQS ÷ %ΔP.' },
        { tone: 'purple', icon: '⚖️', title: 'Calculate and classify', sub: '0, inelastic, unit, elastic, perfectly elastic.' },
        { tone: 'green', icon: '📈', title: 'Apply it', sub: 'Price, output, shortages, or inflation.' }
      ],
      causesLabel: 'Common mistakes',
      causesEmoji: '⚠️',
      causesCols: 4,
      causesStyle: 'icon-top',
      causesFirst: true,
      causes: [
        { tone: 'rose', icon: '✖️', head: 'Confusing supply with demand', body: 'PES is about sellers, not buyers.' },
        { tone: 'rose', icon: '✖️', head: 'Absolute not percentage', body: 'Using raw changes instead of % changes.' },
        { tone: 'rose', icon: '✖️', head: 'Forgetting the time period', body: 'Short run and long run differ.' },
        { tone: 'rose', icon: '✖️', head: 'No interpretation', body: 'Giving the number without explaining it.' }
      ],
      pairFirst: false,
      pairLabel: 'How to write it',
      pairEmoji: '✍️',
      left: { tone: 'blue', icon: '📄', label: 'Short run', text: 'Supply is <strong>price inelastic</strong> because PES = 0.4, so quantity supplied rises less than proportionally when price rises. This means demand growth is more likely to push up prices than output.' },
      right: { tone: 'green', icon: '📄', label: 'Long run', text: 'In the <strong>long run</strong>, supply becomes <strong>more elastic</strong> because firms have time to expand capacity and new firms can enter the market.' },
      causes2Label: 'Memory hooks',
      causes2Emoji: '💡',
      causes2Cols: 3,
      causes2: [
        { tone: 'green', icon: '📈', head: 'Steep supply', body: 'Low PES.' },
        { tone: 'amber', icon: '📉', head: 'Flat supply', body: 'High PES.' },
        { tone: 'purple', icon: '⏳', head: 'More time', body: 'Higher PES.' }
      ],
      conclusion: { title: 'Big idea', text: 'PES is the language economists use to describe producer flexibility.' },
      examEdge: { title: 'Exam edge', text: 'Top answers combine the value of PES with context – capacity, stock, time and the likely market consequence.' },
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

