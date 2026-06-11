/* ============================================================
   ECONOS – Market Failure in the Financial Sector (Edexcel A 4.4.2)
   7 cards · interactive-first build
   Built from the ChatGPT → Claude mockup pipeline.
   How finance fails: the big picture, asymmetric information,
   externalities, moral hazard, speculation and bubbles, market rigging,
   and the whole story.

   Chart-engine spec:
     - bubbleCycle (Card 5 — asset price rise → euphoria → crash → aftermath)
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'market-failure-in-the-financial-sector',
  topicNum: '4.4.2',
  theme: 'Theme 4 \xb7 A Global Perspective',
  title: 'Market Failure in the Financial Sector',
  estTime: '20 min',
  goal: 'Explain the main ways financial markets fail — asymmetric information, externalities, moral hazard, speculation and market rigging — and evaluate their wider impact',

  intro: {
    heroKey: 'heroFinancialFailure',
    summary: 'Financial markets do vital jobs — moving savings to borrowers, enabling exchange and managing risk — but they are unusually prone to market failure. Asymmetric information means one side of a deal knows more than the other, which can lead to adverse selection and credit rationing. Externalities mean one institution’s failure can spread panic and losses across the whole economy. Moral hazard means the expectation of a rescue encourages reckless risk-taking, especially when firms are too big to fail. Speculation can tip into bubbles that inflate and then crash. And market rigging — manipulating benchmarks, prices or information — destroys the honest price signals markets rely on. The deck works through each failure, then closes on how to structure an answer that traces the mechanism to its wider social cost and the case for intervention.',
    doInThis: 'Map where financial market failure comes from. Explain asymmetric information and adverse selection. Explain externalities and contagion. Explain moral hazard and too-big-to-fail. Analyse speculation and bubbles. Explain market rigging, then evaluate the case for intervention.',
    outcomes: [
      'Identify the sources of financial market failure',
      'Explain asymmetric information in finance',
      'Explain externalities and contagion',
      'Explain moral hazard and too-big-to-fail',
      'Analyse speculation and bubbles',
      'Explain market rigging and its costs'
    ],
    tip: 'For each failure, trace the mechanism from a private decision to a wider social cost — that is what justifies intervention.',
    stages: [
      { num: 1, name: 'Learn',  sub: '7 cards \xb7 20 min', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [
    /* ============ CARD 1 – The big picture ============ */
    {
      id: 'mff-big-picture',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 1 of 7',
      title: 'Market failure in finance — the big picture',
      lede: 'Financial markets help savers, borrowers and firms — but information gaps, distorted incentives and instability can cause market failure.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'When private decisions in finance create <strong>wider social costs</strong>, markets can misallocate resources and become unstable.' },

      causesPosition: 'top',
      causesLabel: 'WHERE FAILURE COMES FROM',
      causesEmoji: '\u{1F517}',
      causes: [
        { tone: 'rose', icon: '\u{1F575}️', head: 'Asymmetric information', body: 'One side knows more than the other.' },
        { tone: 'rose', icon: '\u{1F517}', head: 'Externalities', body: 'One failure spills onto others.' },
        { tone: 'rose', icon: '\u{1F3B2}', head: 'Moral hazard', body: 'Rescue hopes encourage risk.' },
        { tone: 'rose', icon: '\u{1F388}', head: 'Speculation & bubbles', body: 'Prices detach from fundamentals.' },
        { tone: 'rose', icon: '\u{1F3AD}', head: 'Market rigging', body: 'Prices and signals are manipulated.' }
      ],

      flowTitle: 'WHY FINANCE IS DIFFERENT',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'blue', icon: '\u{1F465}', title: 'Savers', sub: 'Provide funds.' },
        { tone: 'blue', icon: '\u{1F3E6}', title: 'Banks & markets', sub: 'Intermediate and allocate capital.' },
        { tone: 'blue', icon: '\u{1F3ED}', title: 'Firms & households', sub: 'Invest, spend and borrow.' }
      ],

      causes2Label: 'WHO FEELS THE EFFECTS?',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'amber', icon: '\u{1F465}', head: 'Consumers', body: 'Lost savings and dearer credit.' },
        { tone: 'amber', icon: '\u{1F3ED}', head: 'Firms', body: 'Struggle to raise finance.' },
        { tone: 'amber', icon: '\u{1F9FE}', head: 'Taxpayers', body: 'Foot the bill for bailouts.' },
        { tone: 'amber', icon: '\u{1F310}', head: 'The wider economy', body: 'Growth and confidence fall.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Failure in finance can spread beyond a single transaction — through institutions, markets and the economy.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Finance is powerful because it links the whole economy — so failures can spread fast.' },
      examEdge: { title: 'EXAM EDGE', text: 'Define the failure clearly, explain the mechanism, and show why the social cost is wider than the private decision.' }
    },

    /* ============ CARD 2 – Asymmetric information ============ */
    {
      id: 'mff-asymmetric-information',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 2 of 7',
      title: 'Asymmetric information',
      lede: 'In finance, one side often knows more than the other — and that can distort lending, insurance and investment decisions.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'If lenders cannot tell safe borrowers from risky ones, <strong>good outcomes can be crowded out</strong>.' },

      pairFirst: true,
      pairLabel: 'Knows more vs Knows less',
      pairEmoji: '\u{1F517}',
      left: {
        tone: 'amber', icon: '\u{1F575}️', iconStyle: 'circle', label: 'Borrower or seller',
        points: ['Knows the true risk', 'Knows intention and effort', 'May hide or withhold details']
      },
      right: {
        tone: 'blue', icon: '\u{1F50E}', iconStyle: 'circle', label: 'Lender or buyer',
        points: ['Cannot observe true risk', 'Relies on signals and history', 'Faces greater uncertainty']
      },

      causesLabel: 'HOW IT CREATES FAILURE',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'rose', icon: '\u{1F648}', head: 'Hidden risk', body: 'Lenders cannot see the true danger.' },
        { tone: 'rose', icon: '\u{1F4C8}', head: 'Cautious pricing', body: 'They raise rates to cover it.' },
        { tone: 'rose', icon: '\u{1F504}', head: 'Adverse selection', body: 'Good borrowers drop out, risky ones stay.' },
        { tone: 'rose', icon: '\u{1F6AB}', head: 'Credit rationing', body: 'Lending dries up or breaks down.' }
      ],

      causes2Label: 'WHERE IT SHOWS UP',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2Cols: 3,
      causes2: [
        { tone: 'blue', icon: '\u{1F4B3}', head: 'Loans', body: 'Banks cannot see who will repay.' },
        { tone: 'blue', icon: '\u{1F6E1}️', head: 'Insurance', body: 'The riskiest are keenest to insure.' },
        { tone: 'blue', icon: '\u{1F4C8}', head: 'Investment products', body: 'Buyers cannot judge true quality.' }
      ],

      causes3Label: 'WHY IT MATTERS',
      causes3Emoji: '\u{1F517}',
      causes3Style: 'icon-top',
      causes3: [
        { tone: 'amber', icon: '\u{1F4B2}', head: 'Higher rates', body: 'Borrowing costs rise for everyone.' },
        { tone: 'amber', icon: '\u{1F465}', head: 'Fewer good borrowers', body: 'They are priced out.' },
        { tone: 'amber', icon: '\u{1F9ED}', head: 'Misallocation', body: 'Finance flows to the wrong places.' },
        { tone: 'amber', icon: '\u{1F4C9}', head: 'Less investment', body: 'Worthwhile projects go unfunded.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'When quality is hard to observe, finance can be overpriced, underprovided or misallocated.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Asymmetric information lets bad risks crowd out good ones — so markets can fail to lend to those who deserve it.' },
      examEdge: { title: 'EXAM EDGE', text: 'Use the language of hidden information, adverse selection and credit rationing — not just “lack of information”.' }
    },

    /* ============ CARD 3 – Externalities ============ */
    {
      id: 'mff-externalities',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 3 of 7',
      title: 'Externalities in finance',
      lede: 'Risk-taking in finance does not stay private — losses, panic and confidence effects can spill across the wider economy.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'A failure in one bank or market can create <strong>negative externalities</strong> for others.' },

      flowTitle: 'THE CONTAGION STORY',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'rose', icon: '\u{1F3E6}', title: 'One bank in trouble', sub: 'Losses mount.' },
        { tone: 'rose', icon: '\u{1F517}', title: 'It spreads', sub: 'Linked institutions are hit.' },
        { tone: 'rose', icon: '\u{1F4A5}', title: 'Panic & losses spread', sub: 'Across the whole economy.' }
      ],

      causesLabel: 'NEGATIVE EXTERNALITIES',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'rose', icon: '\u{1F3E6}', head: 'Bank contagion', body: 'One failure topples others.' },
        { tone: 'rose', icon: '\u{1F4C9}', head: 'Credit crunch', body: 'Lending stops; firms starve of funds.' },
        { tone: 'rose', icon: '\u{1F61F}', head: 'Falling confidence', body: 'Panic spreads to savers.' },
        { tone: 'rose', icon: '\u{1F9FE}', head: 'Taxpayer costs', body: 'Public funds rescue the system.' }
      ],

      causes2Label: 'WHY FINANCE IS SYSTEMIC',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'blue',   icon: '\u{1F3E6}', head: 'Banks', body: 'Lend and borrow from each other.' },
        { tone: 'green',  icon: '\u{1F465}', head: 'Households', body: 'Hold savings and loans.' },
        { tone: 'purple', icon: '\u{1F3ED}', head: 'Firms', body: 'Depend on credit to operate.' },
        { tone: 'amber',  icon: '\u{1F3DB}️', head: 'Government', body: 'Backstops the system.' }
      ],

      causes3Label: 'REAL-WORLD EFFECTS',
      causes3Emoji: '\u{1F517}',
      causes3Style: 'icon-top',
      causes3: [
        { tone: 'rose', icon: '\u{1F4C9}', head: 'Higher unemployment', body: 'Firms cut jobs in the crunch.' },
        { tone: 'rose', icon: '\u{1F3D7}️', head: 'Lower investment', body: 'Credit and confidence dry up.' },
        { tone: 'rose', icon: '\u{1F40C}', head: 'Weaker growth', body: 'A financial shock hits output.' },
        { tone: 'rose', icon: '\u{1F4B8}', head: 'Public debt rises', body: 'Bailouts and recession cost the state.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Because financial institutions are interconnected, private risk can become social risk — a classic externality.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'In finance, the social cost of failure can far exceed the private one — the case for regulation and oversight.' },
      examEdge: { title: 'EXAM EDGE', text: 'Use the contagion story to show how one institution’s losses impose costs on the whole economy.' }
    },

    /* ============ CARD 4 – Moral hazard ============ */
    {
      id: 'mff-moral-hazard',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 4 of 7',
      title: 'Moral hazard',
      lede: 'People and firms may take greater risks when they expect someone else to absorb part of the loss.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Protection can reduce caution — especially when institutions believe they will be <strong>rescued</strong>.' },

      flowTitle: 'HOW MORAL HAZARD ARISES',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'rose', icon: '\u{1F6E1}️', title: 'Rescue expected', sub: 'Insurance or bailout.' },
        { tone: 'rose', icon: '\u{1F4C9}', title: 'Lower personal downside', sub: 'Someone else bears the loss.' },
        { tone: 'rose', icon: '\u{1F3B2}', title: 'More risk-taking', sub: 'Bigger, riskier bets.' },
        { tone: 'rose', icon: '\u{1F4B8}', title: 'Higher social cost', sub: 'If the bet goes wrong.' }
      ],

      causesLabel: 'WHERE IT SHOWS UP',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'blue', icon: '\u{1F3E6}', head: 'Banks expecting bailouts', body: 'Large banks may assume rescue.' },
        { tone: 'blue', icon: '\u{1F6E1}️', head: 'Insured depositors', body: 'Less reason to monitor the bank.' },
        { tone: 'blue', icon: '\u{1F4BC}', head: 'Managers chasing returns', body: 'Bonuses reward the upside only.' }
      ],

      causes2Label: 'WHY IT MATTERS',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'rose', icon: '\u{1F4C8}', head: 'Excessive leverage', body: 'Too much borrowing and risk.' },
        { tone: 'rose', icon: '\u{1F3DA}️', head: 'Fragility', body: 'The system becomes brittle.' },
        { tone: 'rose', icon: '\u{1F9FE}', head: 'Unfair taxpayer cost', body: 'The public, not the firm, pays.' },
        { tone: 'rose', icon: '⚖️', head: 'Distorted incentives', body: 'Risk and reward are misaligned.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: '<strong>Too big to fail:</strong> when a firm is so large or interconnected that its collapse would damage the whole economy, governments feel compelled to rescue it — which encourages even more risk-taking.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Moral hazard means safety nets can backfire — by removing the downside, they invite the very risk they insure against.' },
      examEdge: { title: 'EXAM EDGE', text: 'Explain why the expectation of rescue, not the rescue itself, distorts behaviour before the crisis even happens.' }
    },

    /* ============ CARD 5 – Speculation and bubbles ============ */
    {
      id: 'mff-speculation-bubbles',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 5 of 7',
      title: 'Speculation and market bubbles',
      lede: 'Speculation can add liquidity — but when optimism, herding and leverage push prices away from fundamentals, bubbles can form.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Rising prices can attract more buyers, which can <strong>inflate a bubble further</strong> before a crash.' },

      visualKey: 'bubbleCycle',
      visualLabel: 'THE BUBBLE CYCLE',
      visualEmoji: '\u{1F517}',
      visualCaption: 'Belief fuels a rising boom, euphoria detaches price from value, then sentiment flips and the price crashes before settling lower.',

      causesLabel: 'WHAT DRIVES BUBBLES',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'rose', icon: '\u{1F411}', head: 'Herding', body: 'Investors follow the crowd.' },
        { tone: 'rose', icon: '\u{1F4B3}', head: 'Easy credit', body: 'Cheap borrowing fuels buying.' },
        { tone: 'rose', icon: '\u{1F4C8}', head: 'Leverage', body: 'Borrowed money amplifies bets.' },
        { tone: 'rose', icon: '\u{1F52E}', head: 'Extrapolation', body: 'People expect rises to continue.' }
      ],

      causes2Label: 'WHAT HAPPENS WHEN IT BURSTS',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'rose', icon: '\u{1F4C9}', head: 'Prices collapse', body: 'Asset values fall sharply.' },
        { tone: 'rose', icon: '\u{1F3E6}', head: 'Bank losses', body: 'Loans against assets sour.' },
        { tone: 'rose', icon: '\u{1F61F}', head: 'Weaker confidence', body: 'Spending and lending freeze.' },
        { tone: 'rose', icon: '\u{1F40C}', head: 'Recession risk', body: 'The real economy is dragged down.' }
      ],

      pairLabel: 'Useful speculation vs Harmful bubbles',
      pairEmoji: '\u{1F517}',
      left: {
        tone: 'green', icon: '\u{1F4A7}', iconStyle: 'circle', label: 'Adds value',
        points: ['Provides liquidity', 'Helps price discovery', 'Lets others hedge risk']
      },
      right: {
        tone: 'rose', icon: '\u{1F3A2}', iconStyle: 'circle', label: 'Amplifies harm',
        points: ['Drives prices from fundamentals', 'Adds volatility', 'Can trigger crashes']
      },

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'A bubble is not just a high price — it is a price detached from value, sustained by the belief it will keep rising.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Speculation aids markets until herding and leverage drive a bubble — whose crash can spread far beyond the market.' },
      examEdge: { title: 'EXAM EDGE', text: 'Distinguish stabilising speculation from destabilising bubbles, and trace a crash through to the real economy.' }
    },

    /* ============ CARD 6 – Market rigging ============ */
    {
      id: 'mff-market-rigging',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 6 of 7',
      title: 'Market rigging',
      lede: 'Financial markets fail when prices or outcomes are manipulated instead of being set by genuine competition and information.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'If benchmarks, orders or information are manipulated, markets stop sending <strong>honest price signals</strong>.' },

      causesLabel: 'WHAT MARKET RIGGING LOOKS LIKE',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'rose', icon: '\u{1F4CF}', head: 'Benchmark fixing', body: 'Rates like LIBOR manipulated.' },
        { tone: 'rose', icon: '\u{1F91D}', head: 'Collusion', body: 'Firms secretly agree prices.' },
        { tone: 'rose', icon: '\u{1F3AD}', head: 'Spoofing', body: 'Fake orders to mislead the market.' },
        { tone: 'rose', icon: '\u{1F575}️', head: 'Insider trading', body: 'Trading on non-public information.' }
      ],

      causes2Label: 'HOW IT DISTORTS MARKETS',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'rose', icon: '\u{1F3AD}', head: 'Manipulation', body: 'Outcomes are engineered.' },
        { tone: 'rose', icon: '\u{1F4B2}', head: 'False prices', body: 'Signals no longer reflect value.' },
        { tone: 'rose', icon: '\u{1F494}', head: 'Loss of trust', body: 'Participants pull back.' },
        { tone: 'rose', icon: '\u{1F4C9}', head: 'Weaker efficiency', body: 'Capital is allocated badly.' }
      ],

      causes3Label: 'WHO LOSES?',
      causes3Emoji: '\u{1F517}',
      causes3Style: 'icon-top',
      causes3: [
        { tone: 'amber', icon: '\u{1F465}', head: 'Consumers', body: 'Pay rigged prices and rates.' },
        { tone: 'amber', icon: '\u{1F3ED}', head: 'Firms', body: 'Face distorted borrowing costs.' },
        { tone: 'amber', icon: '\u{1F4BC}', head: 'Honest investors', body: 'Are gamed by the cheats.' },
        { tone: 'amber', icon: '\u{1F310}', head: 'The wider economy', body: 'Loses faith in markets.' }
      ],

      pairLabel: 'Rigged price vs Fair price',
      pairEmoji: '\u{1F517}',
      left: {
        tone: 'rose', icon: '\u{1F3AD}', iconStyle: 'circle', label: 'Manipulated',
        points: ['Set by insiders, not the market', 'Misleads everyone else', 'Rewards the cheats']
      },
      right: {
        tone: 'green', icon: '✅', iconStyle: 'circle', label: 'Genuine',
        points: ['Set by real demand and supply', 'Reflects true information', 'Allocates capital well']
      },

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Rigging markets do not just hurt their immediate buyer and seller — they weaken the signalling role of prices for everyone.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Market rigging destroys the honest price signals the whole economy relies on to allocate capital.' },
      examEdge: { title: 'EXAM EDGE', text: 'Explain how rigging undermines the signalling and allocative role of prices — not just the unfairness to one party.' }
    },

    /* ============ CARD 7 – The whole story ============ */
    {
      id: 'mff-whole-story',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 7 of 7',
      title: 'The whole story',
      lede: 'Strong answers connect the failure to incentives, information, instability and social cost.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'The best explanations trace how financial behaviour creates <strong>wider inefficiency or instability</strong>.' },

      flowTitle: 'THE CHAIN',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'green', icon: '\u{1F575}️', title: 'Information gaps', sub: 'Or distorted incentives.' },
        { tone: 'green', icon: '\u{1F3B2}', title: 'Risk-taking', sub: 'Or manipulation.' },
        { tone: 'green', icon: '\u{1F3A2}', title: 'Instability', sub: 'Or unfairness.' },
        { tone: 'green', icon: '\u{1F310}', title: 'Wider social cost', sub: 'Beyond the deal.' },
        { tone: 'green', icon: '\u{1F46E}', title: 'Need for intervention', sub: 'Regulation and oversight.' }
      ],

      causesLabel: 'THE FIVE FAILURES',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'rose', icon: '\u{1F575}️', head: 'Asymmetric information', body: 'One side knows more.' },
        { tone: 'rose', icon: '\u{1F517}', head: 'Externalities', body: 'Failure spreads to others.' },
        { tone: 'rose', icon: '\u{1F3B2}', head: 'Moral hazard', body: 'Rescue hopes invite risk.' },
        { tone: 'rose', icon: '\u{1F388}', head: 'Speculation & bubbles', body: 'Prices detach, then crash.' },
        { tone: 'rose', icon: '\u{1F3AD}', head: 'Market rigging', body: 'Signals are manipulated.' }
      ],

      causes2Label: 'HOW TO WRITE IT',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'green', icon: '\u{1F4D0}', head: 'Define the failure', body: 'Name the specific type.' },
        { tone: 'green', icon: '\u{1F517}', head: 'Explain the mechanism', body: 'From private act to social cost.' },
        { tone: 'green', icon: '\u{1F3E6}', head: 'Apply an example', body: 'Use a real financial case.' },
        { tone: 'green', icon: '⚖️', head: 'Evaluate the impact', body: 'Weigh scale and intervention.' }
      ],

      causes3Label: 'EVALUATION',
      causes3Emoji: '\u{1F517}',
      causes3Style: 'icon-top',
      causes3: [
        { tone: 'blue', icon: '\u{1F4CF}', head: 'Scale', body: 'How big is the spillover?' },
        { tone: 'blue', icon: '\u{1F61F}', head: 'Confidence shock', body: 'Panic can magnify the damage.' },
        { tone: 'blue', icon: '\u{1F517}', head: 'Interdependence', body: 'How connected is the system?' },
        { tone: 'blue', icon: '\u{1F504}', head: 'Costs change', body: 'Effects differ over time.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Financial market failure is about distorted incentives and broken signals — the wider economy bears the cost.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Each failure is a different way private finance imposes costs on others — which is what builds the case for regulation.' },
      economistQuote: {
        portraitKey: 'economistDanielKahneman',
        tone: 'amber',
        label: 'Economist insight on financial markets',
        quote: 'The illusion that we understand the past fosters overconfidence in our ability to predict the future.',
        attribution: 'Daniel Kahneman, <em>Thinking, Fast and Slow</em> (2011)'
      },
      examEdge: { title: 'EXAM EDGE', text: 'Use precise terms, trace the mechanism to a wider social cost, then evaluate the scale and the case for intervention.' }
    }
  ]
};
