/* ============================================================
   ECONOS – Exchange Rates (Edexcel A 4.1.8)
   6 cards · interactive-first build
   Built from the ChatGPT → Claude mockup pipeline.
   The price of a currency: the FX market, floating vs fixed vs
   managed systems, and the appreciation/depreciation/revaluation/
   devaluation vocabulary.

   New visuals (js/icons.js + chart specs):
     - fxGlobeHub        (Card 1 — globe with £/$/€ price tag, 4 spokes)
     - fxMarketDiagram   (Card 2 — chart: D for £ vs S for £, E*, Q*)
     - fxLifebuoy        (Card 3 — gold £ on a life-ring: floating)
     - fxFloatingShifts  (Card 3 — chart: appreciation vs depreciation)
     - fxAnchor          (Card 4 — £ on a ship's anchor: fixed)
     - fxIntervention    (Card 4 — central bank buys £ / sells reserves)
     - fxSpectrum        (Card 5 — Floating ↔ Managed ↔ Fixed)
     - fxTerminologyGrid (Card 6 — 2×2 terminology matrix)
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'exchange-rates',
  topicNum: '4.1.8',
  theme: 'Theme 4 \xb7 A Global Perspective',
  title: 'Exchange Rates',
  estTime: '18 min',
  goal: 'Explain how exchange rates are determined in the FX market, distinguish floating, fixed and managed systems, and use the appreciation/depreciation/revaluation/devaluation vocabulary correctly',

  intro: {
    heroKey: 'heroExchangeRatesT4',
    summary: 'An exchange rate is the price of one currency in terms of another — and like any price, it is set where demand meets supply. This deck builds the foreign-exchange market diagram (demand for pounds from exports and inward flows; supply of pounds from imports and outward flows), then contrasts the three systems: a floating rate set entirely by the market, a fixed rate the central bank must defend with reserves and interest rates, and a managed rate that sits in between. It finishes by nailing the vocabulary students mix up most — appreciation and depreciation are market moves; revaluation and devaluation are official policy changes.',
    doInThis: 'Define an exchange rate and what drives currency demand and supply. Read the FX market diagram and find the equilibrium rate. Explain how a floating rate appreciates or depreciates, and how a fixed rate is defended. Place managed rates on the spectrum between floating and fixed. Finally, use appreciation, depreciation, revaluation and devaluation precisely.',
    outcomes: [
      'Define an exchange rate and what it connects',
      'Read the foreign-exchange market diagram',
      'Explain floating rates and market shifts',
      'Explain how a fixed rate is defended',
      'Place managed rates on the spectrum',
      'Use the four key terms correctly'
    ],
    tip: 'The phrase to anchor on is the price of a currency — exchange rates move because demand and supply for currencies change.',
    stages: [
      { num: 1, name: 'Learn',  sub: '6 cards \xb7 18 min', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [
    /* ============ CARD 1 – The big picture ============ */
    {
      id: 'fx-big-picture',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 1 of 6',
      title: 'Exchange rates — the big picture',
      lede: 'An exchange rate is the price of one currency in terms of another — linking trade, travel, investment and confidence.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Exchange rates are prices — they move because <strong>demand and supply for currencies change</strong>.' },

      visualKey: 'fxGlobeHub',
      visualLabel: 'WHAT AN EXCHANGE RATE CONNECTS',
      visualEmoji: '\u{1F310}',
      visualCaption: 'Exchange rates are about flows across borders — not just trade.',

      causesFirst: true,
      causesLabel: 'WHY CURRENCIES ARE DEMANDED AND SUPPLIED',
      causesEmoji: '⚖️',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'blue',   icon: '\u{1F465}', head: 'Demand for £', body: 'Foreigners need pounds to buy UK exports or assets.' },
        { tone: 'green',  icon: '\u{1F3DB}️', head: 'Supply of £', body: 'UK residents supply pounds to buy imports or foreign assets.' },
        { tone: 'purple', icon: '⬆️', head: 'Higher demand', body: 'The currency tends to rise.' },
        { tone: 'amber',  icon: '⬇️', head: 'Higher supply', body: 'The currency tends to fall.' }
      ],

      flowSep: '→',
      flow: [
        { tone: 'purple', icon: '\u{1F465}', title: 'Demand for £ up' },
        { tone: 'purple', icon: '⬆️', title: 'Exchange rate rises' }
      ],

      flow2Sep: '→',
      flow2: [
        { tone: 'green', icon: '\u{1F3DB}️', title: 'Supply of £ up' },
        { tone: 'green', icon: '⬇️', title: 'Exchange rate falls' }
      ],

      causes3Label: 'WHY IT MATTERS',
      causes3Emoji: '\u{1F465}',
      causes3Style: 'icon-top',
      causes3Cols: 4,
      causes3: [
        { tone: 'green',  icon: '\u{1F464}', head: 'Consumers', body: 'Imported goods and holidays become cheaper or dearer.' },
        { tone: 'blue',   icon: '\u{1F3ED}', head: 'Firms', body: 'Export competitiveness and import costs change.' },
        { tone: 'amber',  icon: '\u{1F3DB}️', head: 'Governments', body: 'Inflation, growth and the current account are affected.' },
        { tone: 'purple', icon: '\u{1F4C8}', head: 'Investors', body: 'Returns depend partly on currency movements.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'A stronger currency helps some groups and hurts others — the effects depend on <strong>where spending and production happen</strong>.' },

      conclusion: { title: 'Big idea', text: 'An exchange rate is the market price of one currency in terms of another.' },
      examEdge: 'Define the exchange rate clearly, then explain it using <strong>demand, supply and cross-border flows</strong>.'
    },

    /* ============ CARD 2 – The FX market ============ */
    {
      id: 'fx-market',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 2 of 6',
      title: 'The foreign exchange market',
      lede: 'The exchange rate for pounds is determined where demand for £ meets supply of £.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Exports and inward flows create <strong>demand</strong> for pounds. Imports and outward flows create <strong>supply</strong>.' },

      visualKey: 'fxMarketDiagram',
      visualLabel: 'THE MARKET DIAGRAM',
      visualEmoji: '\u{1F3DB}️',
      visualCaption: 'Demand for £ falls as the rate rises; supply of £ rises as the rate rises. They meet at E*.',

      causesFirst: true,
      causesLabel: 'WHERE DEMAND FOR £ COMES FROM',
      causesEmoji: '\u{1F310}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'blue',   icon: '\u{1F6A2}', head: 'Exports to the UK', body: 'Foreign buyers pay in pounds.' },
        { tone: 'purple', icon: '\u{1F4C8}', head: 'Inward investment', body: 'Investors buy UK assets using pounds.' },
        { tone: 'green',  icon: '\u{1F334}', head: 'Tourism to the UK', body: 'Visitors exchange currency for pounds.' },
        { tone: 'amber',  icon: '\u{1F3DB}️', head: 'Demand for UK assets', body: 'Foreign demand for UK bonds and shares.' }
      ],

      causes2Label: 'WHERE SUPPLY OF £ COMES FROM',
      causes2Emoji: '\u{1F3E6}',
      causes2Style: 'icon-top',
      causes2Cols: 4,
      causes2: [
        { tone: 'blue',   icon: '\u{1F6A2}', head: 'Imports', body: 'UK buyers exchange pounds for goods and services.' },
        { tone: 'purple', icon: '\u{1F310}', head: 'Outward investment', body: 'UK investors buy foreign assets using pounds.' },
        { tone: 'green',  icon: '✈️', head: 'UK travel abroad', body: 'Residents exchange pounds for foreign currency.' },
        { tone: 'amber',  icon: '\u{1F3DB}️', head: 'Demand for foreign assets', body: 'UK demand for foreign bonds and shares.' }
      ],

      flowTitle: 'HOW TO READ IT',
      flowEmoji: '\u{1F3AF}',
      flowSep: '→',
      flow: [
        { tone: 'blue', icon: '\u{1F465}', title: 'Demand for £ rises' },
        { tone: 'blue', icon: '⬆️', title: 'Exchange rate rises' }
      ],

      flow2Sep: '→',
      flow2: [
        { tone: 'green', icon: '\u{1F3DB}️', title: 'Supply of £ rises' },
        { tone: 'green', icon: '⬇️', title: 'Exchange rate falls' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'This diagram shows the <strong>market for pounds</strong>, not the market for goods and services.' },

      conclusion: { title: 'Big idea', text: 'The exchange rate is the market price of a currency, found where demand and supply meet.' },
      examEdge: 'In diagram questions, always state <strong>why pounds are demanded and why pounds are supplied</strong>.'
    },

    /* ============ CARD 3 – Floating ============ */
    {
      id: 'fx-floating',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 3 of 6',
      title: 'Floating exchange rates',
      lede: 'In a floating system, the currency is priced by the market — and moves when demand or supply shifts.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Appreciation and depreciation are <strong>market-driven</strong> changes in a floating exchange-rate system.' },

      visualKey: 'fxLifebuoy',
      visualLabel: 'HOW A FLOATING RATE WORKS',
      visualEmoji: '\u{1F310}',
      visualCaption: 'The currency’s value is set by the market — no fixed target is defended, so the rate rises or falls with demand and supply.',

      visualKey2: 'fxFloatingShifts',
      visualLabel2: 'TWO MARKET SHIFTS',
      visualEmoji2: '⚖️',

      causesLabel: 'WHY SOME COUNTRIES LIKE FLOATING',
      causesEmoji: '\u{1F44D}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'green', icon: '\u{1F504}', head: 'Automatic adjustment', body: 'The rate moves to respond to shocks and keep the economy in balance.' },
        { tone: 'green', icon: '\u{1F3DB}️', head: 'Policy freedom', body: 'Central banks can set interest rates for domestic goals, not to defend a rate.' },
        { tone: 'green', icon: '\u{1F6E1}️', head: 'No peg to defend', body: 'No need to hold large reserves or intervene to hit a target.' }
      ],

      causes2Label: 'THE LIMITS',
      causes2Emoji: '⚠️',
      causes2Style: 'icon-top',
      causes2Cols: 3,
      causes2: [
        { tone: 'amber', icon: '\u{1F4C8}', head: 'Can be volatile', body: 'Rates can move sharply in the short term.' },
        { tone: 'amber', icon: '\u{1F464}', head: 'Speculation matters', body: 'Expectations can amplify market movements.' },
        { tone: 'amber', icon: '\u{1F4BC}', head: 'Exporter uncertainty', body: 'Harder to plan prices and future revenues.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'A floating rate does not mean governments never comment — it means the <strong>market sets the price</strong>.' },

      conclusion: { title: 'Big idea', text: 'Floating exchange rates move with market demand and supply.' },
      examEdge: 'Use <strong>appreciation and depreciation</strong> only for market-driven changes.'
    },

    /* ============ CARD 4 – Fixed ============ */
    {
      id: 'fx-fixed',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 4 of 6',
      title: 'Fixed exchange rates',
      lede: 'A fixed exchange rate means the authorities commit to a target value and defend it.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'A peg survives only if the central bank is <strong>willing and able to defend it</strong>.' },

      visualKey: 'fxAnchor',
      visualLabel: 'HOW THE PEG WORKS',
      visualEmoji: '\u{1F310}',
      visualCaption: 'The authorities announce a target exchange rate and keep the currency close to that value.',

      flowTitle: 'THE PEG MECHANISM',
      flowEmoji: '\u{1F517}',
      flowSep: '→',
      flow: [
        { tone: 'green',  icon: '\u{1F3AF}', title: 'Target set', sub: 'A rate is announced.' },
        { tone: 'purple', icon: '⚡', title: 'Market pressure', sub: 'The rate is pushed off target.' },
        { tone: 'blue',   icon: '\u{1F6E1}️', title: 'Intervention', sub: 'The central bank acts.' }
      ],

      flowChart: {
        svgKey: 'fxIntervention',
        label: 'DEFENDING THE PEG',
        emoji: '\u{1F3E6}',
        caption: 'If the currency is pushed below the target, the central bank buys its own currency and sells reserves.'
      },

      causesLabel: 'HOW TO DEFEND THE RATE',
      causesEmoji: '\u{1F6E1}️',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'green',  icon: '\u{1F4B5}', head: 'Use reserves', body: 'Buy or sell foreign-currency reserves.' },
        { tone: 'purple', icon: '\u{1F3DB}️', head: 'Change rates', body: 'Adjust interest rates to attract or deter flows.' },
        { tone: 'blue',   icon: '\u{1F39B}️', head: 'Exchange controls', body: 'Limit currency flows if needed.' },
        { tone: 'amber',  icon: '\u{1F4E3}', head: 'Signal commitment', body: 'Convince markets the peg will hold.' }
      ],

      causes2Label: 'WHY CHOOSE A FIXED RATE',
      causes2Emoji: '✅',
      causes2Style: 'icon-top',
      causes2Cols: 3,
      causes2: [
        { tone: 'green',  icon: '\u{1F4C8}', head: 'More stability', body: 'Helps keep exchange rates steady.' },
        { tone: 'purple', icon: '❓', head: 'Less uncertainty', body: 'Lower risk for trade and investment.' },
        { tone: 'blue',   icon: '\u{1F6E1}️', head: 'Anti-inflation credibility', body: 'Shows the central bank is serious about stability.' }
      ],

      causes3Label: 'THE RISKS',
      causes3Emoji: '⚠️',
      causes3Style: 'icon-top',
      causes3Cols: 4,
      causes3: [
        { tone: 'amber', icon: '\u{1F512}', head: 'Loss of freedom', body: 'Less room to set interest rates or money supply.' },
        { tone: 'amber', icon: '\u{1F4A7}', head: 'Reserve drain', body: 'Interventions can use up foreign reserves.' },
        { tone: 'amber', icon: '⚖️', head: 'Wrong level', body: 'The peg may become over- or under-valued.' },
        { tone: 'rose',  icon: '\u{1F4C9}', head: 'Forced devaluation', body: 'If the peg cannot be defended, it breaks.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Fixed does not mean permanently unchanged — it means <strong>officially maintained</strong>.' },

      conclusion: { title: 'Big idea', text: 'Fixed exchange rates trade flexibility for stability.' },
      examEdge: 'Use the words <strong>defend the peg, reserves and interest rates</strong> when explaining a fixed system.'
    },

    /* ============ CARD 5 – Managed ============ */
    {
      id: 'fx-managed',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 5 of 6',
      title: 'Managed exchange rates',
      lede: 'Many currencies sit between pure floating and strict fixing — the market leads, but the central bank sometimes nudges.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Managed exchange rates are mostly market-led, but the authorities can <strong>intervene to smooth volatility or influence the rate</strong>.' },

      visualKey: 'fxSpectrum',
      visualLabel: 'THE MIDDLE GROUND',
      visualEmoji: '\u{1F310}',

      causesFirst: true,
      causesLabel: 'THE TOOLKIT',
      causesEmoji: '\u{1F9F0}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'blue',   icon: '\u{1F4B1}', head: 'Buy or sell currency', body: 'Intervene in the FX market.' },
        { tone: 'green',  icon: '\u{1F3DB}️', head: 'Change interest rates', body: 'Influence capital flows and demand.' },
        { tone: 'purple', icon: '\u{1F4E3}', head: 'Guidance & signals', body: 'Communicate intent and direction.' },
        { tone: 'amber',  icon: '\u{1F39B}️', head: 'Occasional controls', body: 'Use temporary restrictions if needed.' }
      ],

      causes2Label: 'WHY GOVERNMENTS MANAGE',
      causes2Emoji: '\u{1F465}',
      causes2Style: 'icon-top',
      causes2Cols: 4,
      causes2: [
        { tone: 'blue',   icon: '〰️', head: 'Smooth volatility', body: 'Reduce sharp ups and downs.' },
        { tone: 'green',  icon: '\u{1F4CA}', head: 'Support competitiveness', body: 'Keep the currency in a helpful range.' },
        { tone: 'purple', icon: '\u{1F6E1}️', head: 'Build confidence', body: 'Provide stability and certainty.' },
        { tone: 'amber',  icon: '\u{1F4C8}', head: 'Avoid extreme swings', body: 'Prevent disruptive currency moves.' }
      ],

      pairLabel: 'Benefits vs Drawbacks',
      pairEmoji: '⚖️',
      left: {
        tone: 'green',
        icon: '✅',
        iconStyle: 'circle',
        label: 'Benefits',
        points: ['Less chaos than a pure float', 'More flexibility than a hard peg']
      },
      right: {
        tone: 'amber',
        icon: '⚠️',
        iconStyle: 'circle',
        label: 'Drawbacks',
        points: ['Can blur policy goals', 'May invite speculation if credibility is weak']
      },

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Managed systems are common because governments rarely like a <strong>completely hands-off currency market</strong>.' },

      conclusion: { title: 'Big idea', text: 'A managed exchange rate mixes market pricing with policy intervention.' },
      examEdge: 'Managed is the in-between system — explain <strong>both the market element and the intervention element</strong>.'
    },

    /* ============ CARD 6 – The four terms ============ */
    {
      id: 'fx-terminology',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 6 of 6',
      title: 'Appreciation, depreciation, revaluation and devaluation',
      lede: 'Two are market moves. Two are official policy changes. Students mix them up constantly — so make the distinction crystal clear.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'First ask whether the change is <strong>market-driven or official</strong> — then decide which word to use.' },

      visualKey: 'fxTerminologyGrid',
      visualLabel: 'THE 2 × 2 GRID',
      visualEmoji: '\u{1F517}',

      pairFirst: true,
      pairLabel: 'Floating system vs Fixed or managed system',
      pairEmoji: '⚖️',
      left: {
        tone: 'blue',
        icon: '\u{1F310}',
        iconStyle: 'circle',
        label: 'Floating system',
        points: ['→ appreciation / depreciation', 'Exchange rates move in the market']
      },
      right: {
        tone: 'green',
        icon: '\u{1F6E1}️',
        iconStyle: 'circle',
        label: 'Fixed or managed system',
        points: ['→ revaluation / devaluation', 'The government or central bank changes the rate']
      },

      causesLabel: 'QUICK EXAMPLES',
      causesEmoji: '\u{1F4A1}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'green',  icon: '\u{1F465}', head: 'Higher demand', body: 'Higher demand for £ → appreciation.' },
        { tone: 'amber',  icon: '\u{1F465}', head: 'Higher supply', body: 'Higher supply of £ → depreciation.' },
        { tone: 'purple', icon: '\u{1F3E6}', head: 'Raise the peg', body: 'Government raises the peg → revaluation.' },
        { tone: 'amber',  icon: '\u{1F3DB}️', head: 'Lower the peg', body: 'Government lowers the peg → devaluation.' }
      ],

      causes2Label: 'HOW TO WRITE IT',
      causes2Emoji: '✍️',
      causes2Style: 'icon-top',
      causes2Cols: 4,
      causes2: [
        { tone: 'blue', icon: '\u{1F50D}', head: '1 · Identify the system', body: 'Floating, fixed or managed?' },
        { tone: 'blue', icon: '\u{1F3F7}️', head: '2 · Name the change', body: 'Pick the correct term.' },
        { tone: 'blue', icon: '⚙️', head: '3 · Explain the cause', body: 'Market move or official decision?' },
        { tone: 'blue', icon: '\u{1F4CA}', head: '4 · Explain the effects', body: 'On trade, inflation and confidence.' }
      ],

      bottomTip: { icon: '⚠️', tone: 'rose', text: 'Do not say <strong>depreciation</strong> when the central bank officially cuts a peg — that is a <strong>devaluation</strong>.' },

      conclusion: { title: 'Big idea', text: 'Market changes use appreciation and depreciation. Official changes use revaluation and devaluation.' },
      examEdge: 'Get the vocabulary right first — then apply the effects on <strong>trade, inflation and confidence</strong>.'
    }
  ]
};
