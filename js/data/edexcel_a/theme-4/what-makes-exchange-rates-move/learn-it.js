/* ============================================================
   ECONOS – What Makes Exchange Rates Move? (Edexcel A 4.1.8)
   6 cards · interactive-first build
   Built from the ChatGPT → Claude mockup pipeline.
   Why currencies move (demand & supply), the sources of demand for
   and supply of a currency, the four big macro drivers, a diagram
   clinic on appreciation vs depreciation, and the whole story.

   New visuals:
     - currencyMoveChain    (Card 1 — five-step mechanism, both directions)
     - demandForPoundsHub   (Card 2 — sources of demand for sterling)
     - supplyOfPoundsHub    (Card 3 — sources of supply of sterling)
     - exchangeDriversHub   (Card 4 — the four macro drivers, 2x2 hub)
   Card 5 reuses the existing fxFloatingShifts chart-engine spec.
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'what-makes-exchange-rates-move',
  topicNum: '4.1.8',
  theme: 'Theme 4 \xb7 A Global Perspective',
  title: 'What Makes Exchange Rates Move?',
  estTime: '18 min',
  goal: 'Explain exchange-rate movements through demand for and supply of a currency, identify the four big drivers, and structure a top-mark cause-to-consequence answer',

  intro: {
    heroKey: 'heroExchangeRates',
    summary: 'A floating exchange rate is just a price — the price of one currency in terms of another — so it moves for the same reason any price moves: demand and supply shift. The whole story builds from that one idea, tracing four big macro drivers back through demand for and supply of the currency.',
    doInThis: 'Explain why a currency moves through demand and supply, and identify the sources of each. Trace the four big drivers back to demand or supply, read the FOREX market as a diagram, and structure a cause-to-consequence answer.',
    outcomes: [
      'Explain exchange-rate moves via demand and supply',
      'List the sources of demand for a currency',
      'List the sources of supply of a currency',
      'Trace the four big drivers to demand or supply',
      'Read appreciation and depreciation on a diagram',
      'Structure a cause-to-consequence answer'
    ],
    tip: 'Do not jump straight to exports or inflation — always explain why demand or supply for the currency changes first.',
    stages: [
      { num: 1, name: 'Learn',  sub: '6 cards \xb7 18 min', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [
    /* ============ CARD 1 – The big picture ============ */
    {
      id: 'erm-big-picture',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 1 of 6',
      title: 'Why currencies move — the big picture',
      lede: 'Floating exchange rates change when demand for and supply of a currency shift.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Exchange rates are driven by <strong>demand and supply</strong> in the foreign exchange market.' },

      visualKey: 'currencyMoveChain',
      visualLabel: 'THE CORE STORY',
      visualEmoji: '\u{1F517}',

      causesLabel: 'WHAT MOVES DEMAND AND SUPPLY',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'blue', icon: '\u{1F4E6}', head: 'Trade flows',     body: 'Exports and imports of goods and services move money.' },
        { tone: 'blue', icon: '\u{1F4B9}', head: 'Capital flows',   body: 'FDI and portfolio investment chase returns and ownership.' },
        { tone: 'blue', icon: '✈️',        head: 'Tourism',         body: 'People travel and spend overseas, swapping currency.' },
        { tone: 'blue', icon: '\u{1F4AD}', head: 'Beliefs',         body: 'Views on the future drive speculative positions.' }
      ],

      causes2Label: 'WHY IT MATTERS',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2Cols: 4,
      causes2: [
        { tone: 'green',  icon: '\u{1F3ED}', head: 'Firms abroad',     body: 'Costs, prices and competitiveness change.' },
        { tone: 'purple', icon: '\u{1F465}', head: 'Buyers',            body: 'Prices abroad and the cost of imports shift.' },
        { tone: 'blue',   icon: '\u{1F4C8}', head: 'Investors',        body: 'Returns, asset values and risk change.' },
        { tone: 'amber',  icon: '\u{1F3DB}️', head: 'Policy',            body: 'Affects growth, inflation and stability.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'A currency moves for the same basic reason as any other price — <strong>market demand and market supply change</strong>.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Exchange-rate moves all work through demand and supply for the currency.' },
      examEdge: { title: 'EXAM EDGE', text: 'Do not jump straight to exports or inflation — first explain why demand or supply for the currency changes.' }
    },

    /* ============ CARD 2 – Demand for a currency ============ */
    {
      id: 'erm-demand',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 2 of 6',
      title: 'Demand for a currency',
      lede: 'Demand for sterling comes from foreigners wanting UK goods, services and assets.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Anything that makes overseas buyers <strong>need pounds</strong> shifts demand for pounds to the right.' },

      visualKey: 'demandForPoundsHub',
      visualLabel: 'WHO DEMANDS POUNDS',
      visualEmoji: '\u{1F517}',

      causesFirst: true,
      causesLabel: 'WHY DEMAND SHIFTS',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'blue', icon: '\u{1F4E6}', head: 'Stronger exports', body: 'More overseas spending on UK output.' },
        { tone: 'blue', icon: '\u{1F4C8}', head: 'Higher rates',     body: 'UK assets become more attractive to investors.' },
        { tone: 'blue', icon: '\u{1F44D}', head: 'Better confidence', body: 'Investors trust UK growth and policy.' },
        { tone: 'blue', icon: '⏫',        head: 'Expected rise',     body: 'Buyers get in before the pound appreciates.' }
      ],

      flowTitle: 'IF DEMAND RISES',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'green', icon: '\u{1F30D}', title: 'Foreigners want more £', sub: 'Buyers need sterling first.' },
        { tone: 'green', icon: '➡️',         title: 'Demand curve shifts right', sub: 'D₁ → D₂.' },
        { tone: 'green', icon: '\u{1F4C8}', title: 'Rate appreciates', sub: 'The pound rises in value.' },
        { tone: 'green', icon: '\u{1F3F7}️', title: 'Imports cheaper, exports dearer', sub: 'Trade prices shift.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Foreign buyers usually need sterling first — that is why trade and capital inflows <strong>create demand for the currency</strong>.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Demand for a currency comes from people abroad needing it to buy the country’s goods, services or assets.' },
      examEdge: { title: 'EXAM EDGE', text: 'Name the source of demand, then link it to a rightward shift in demand and a higher exchange rate.' }
    },

    /* ============ CARD 3 – Supply of a currency ============ */
    {
      id: 'erm-supply',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 3 of 6',
      title: 'Supply of a currency',
      lede: 'Supply of sterling comes from people selling pounds to buy foreign currency.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Anything that makes people <strong>offload pounds</strong> shifts supply of pounds to the right.' },

      visualKey: 'supplyOfPoundsHub',
      visualLabel: 'WHO SUPPLIES POUNDS',
      visualEmoji: '\u{1F517}',

      causesFirst: true,
      causesLabel: 'WHY SUPPLY SHIFTS',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'amber', icon: '\u{1F6D2}', head: 'Higher imports',   body: 'More pounds sold to buy foreign currency.' },
        { tone: 'amber', icon: '\u{1F3ED}', head: 'Investment abroad', body: 'Capital leaves the UK for overseas projects.' },
        { tone: 'amber', icon: '\u{1F4C9}', head: 'Weaker confidence', body: 'Investors move money elsewhere.' },
        { tone: 'amber', icon: '⏬',        head: 'Expected fall',     body: 'Traders sell before the pound falls further.' }
      ],

      flowTitle: 'IF SUPPLY RISES',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'amber', icon: '\u{1F30D}', title: 'Residents want foreign currency', sub: 'Pounds are sold.' },
        { tone: 'amber', icon: '➡️',         title: 'Supply curve shifts right', sub: 'S₁ → S₂.' },
        { tone: 'amber', icon: '\u{1F4C9}', title: 'Rate depreciates', sub: 'The pound falls in value.' },
        { tone: 'amber', icon: '\u{1F3F7}️', title: 'Exports cheaper, imports dearer', sub: 'Trade prices shift.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Supply of a currency is about residents <strong>wanting foreign currency</strong> — not just about “having more money”.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Supply of a currency comes from people selling it to buy foreign goods, services or assets.' },
      examEdge: { title: 'EXAM EDGE', text: 'Say who is selling the currency and why — that shifts supply to the right and lowers the exchange rate.' }
    },

    /* ============ CARD 4 – The four big drivers ============ */
    {
      id: 'erm-drivers',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 4 of 6',
      title: 'The four big drivers',
      lede: 'Most exchange-rate movements can be traced back to four major forces.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'The trick is not just naming a driver — it is showing <strong>how it changes demand or supply</strong> for the currency.' },

      visualKey: 'exchangeDriversHub',
      visualLabel: 'FOUR DIALS',
      visualEmoji: '\u{1F517}',

      flowTitle: 'HOW THEY WORK',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'blue', icon: '\u{1F39B}️', title: 'Driver changes', sub: 'Rates, inflation, growth or confidence.' },
        { tone: 'blue', icon: '⚖️',         title: 'Demand or supply for £ shifts', sub: 'The currency is bought or sold.' },
        { tone: 'blue', icon: '\u{1F4C8}', title: 'Rate appreciates or depreciates', sub: 'The new equilibrium.' },
        { tone: 'blue', icon: '\u{1F30D}', title: 'Trade and macro effects follow', sub: 'Prices, growth and inflation respond.' }
      ],

      causesLabel: 'QUICK EXAMPLES',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'green', icon: '\u{1F4C8}', head: 'Rates up',      body: 'Capital inflows raise demand for £ → pound rises.' },
        { tone: 'rose',  icon: '\u{1F525}', head: 'Inflation up',  body: 'Competitiveness worsens → demand for £ falls.' },
        { tone: 'green', icon: '\u{1F6A2}', head: 'Export boom',   body: 'Demand for £ rises → pound strengthens.' },
        { tone: 'rose',  icon: '\u{1F4C9}', head: 'Confidence drop', body: 'Capital may leave → supply of £ rises → pound falls.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'No driver works in isolation — <strong>context and expectations</strong> matter.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Inflation, interest rates, growth and confidence are the four big levers behind most currency moves.' },
      examEdge: { title: 'EXAM EDGE', text: 'Always connect the driver to demand or supply for the currency before stating appreciation or depreciation.' }
    },

    /* ============ CARD 5 – Diagram clinic ============ */
    {
      id: 'erm-diagram-clinic',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 5 of 6',
      title: 'Diagram clinic — appreciation and depreciation',
      lede: 'Read the foreign exchange market the same way as any other demand-and-supply diagram.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: '<strong>Demand right</strong> means appreciation. <strong>Supply right</strong> means depreciation.' },

      visualKey: 'fxFloatingShifts',
      visualLabel: 'TWO CURRENCY STORIES',
      visualEmoji: '\u{1F517}',
      visualCaption: 'Left: demand for £ rises and the pound appreciates. Right: supply of £ rises and the pound depreciates.',

      flowTitle: 'HOW TO READ IT',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'blue', icon: '\u{1F50D}', title: 'Identify the curve', sub: 'Demand or supply?' },
        { tone: 'blue', icon: '\u{1F4CD}', title: 'Find the new equilibrium', sub: 'Where the curves now cross.' },
        { tone: 'blue', icon: '\u{1F4CA}', title: 'Check the rate', sub: 'Did it rise or fall?' },
        { tone: 'blue', icon: '\u{1F3F7}️', title: 'Name the movement', sub: 'Appreciation or depreciation.' }
      ],

      causesLabel: 'COMMON ERRORS',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'rose', icon: '\u{1F501}', head: 'Mixing the curves', body: 'Demand is foreign buyers; supply is UK sellers.' },
        { tone: 'rose', icon: '\u{1F4B1}', head: 'Wrong term',        body: 'Appreciation is a rise in the currency’s price.' },
        { tone: 'rose', icon: '✍️',         head: 'No cause stated',   body: 'Always explain what shifted demand or supply.' },
        { tone: 'rose', icon: '↔️',         head: 'Leftward shifts',   body: 'Supply left also appreciates; demand left also depreciates.' }
      ],

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'The exchange rate is just the equilibrium price of a currency in a demand-and-supply diagram.' },
      examEdge: { title: 'EXAM EDGE', text: 'State the shift, the new equilibrium, and then the correct term — appreciation or depreciation.' }
    },

    /* ============ CARD 6 – The whole story ============ */
    {
      id: 'erm-whole-story',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 6 of 6',
      title: 'The whole story',
      lede: 'Strong answers trace the cause of a currency movement and then explain the consequences.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'The winning structure is <strong>driver → demand/supply for the currency → exchange-rate movement → effects</strong>.' },

      flowTitle: 'THE CHAIN',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'green', icon: '\u{1F39B}️', title: 'Driver', sub: 'Inflation, rates, trade or confidence.' },
        { tone: 'green', icon: '⚖️',         title: 'Demand or supply for £', sub: 'Buying or selling shifts.' },
        { tone: 'green', icon: '\u{1F4B1}', title: 'New exchange rate', sub: 'A new equilibrium.' },
        { tone: 'green', icon: '\u{1F504}', title: 'Appreciation or depreciation', sub: 'The pound rises or falls.' },
        { tone: 'green', icon: '\u{1F3F7}️', title: 'Trade price effects', sub: 'Imports and exports reprice.' },
        { tone: 'green', icon: '\u{1F30D}', title: 'Wider effects', sub: 'Inflation, growth and confidence.' }
      ],

      flow2Title: 'HOW TO WRITE IT',
      flow2Emoji: '\u{1F517}',
      flow2Sep: '→',
      flow2: [
        { tone: 'blue', icon: '\u{1F39B}️', title: 'Name the driver' },
        { tone: 'blue', icon: '⚖️',         title: 'Explain the shift' },
        { tone: 'blue', icon: '\u{1F4C8}', title: 'State appreciation / depreciation' },
        { tone: 'blue', icon: '\u{1F30D}', title: 'Apply the effect' }
      ],

      causesLabel: 'FIVE COMMON DRIVERS',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'green',  icon: '\u{1F6A2}', head: 'Exports and trade flows', body: 'Net trade changes demand for the currency.' },
        { tone: 'purple', icon: '\u{1F4B9}', head: 'Capital inflows or outflows', body: 'Investment moves money across borders.' },
        { tone: 'blue',   icon: '\u{1F3E6}', head: 'Interest-rate changes', body: 'Rates pull hot money in or push it out.' },
        { tone: 'rose',   icon: '\u{1F525}', head: 'Inflation and competitiveness', body: 'Relative prices shape trade demand.' },
        { tone: 'amber',  icon: '\u{1F4AD}', head: 'Expectations and speculation', body: 'Beliefs about the future move the rate now.' }
      ],

      causes2Label: 'EVALUATION',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2Cols: 4,
      causes2: [
        { tone: 'blue', icon: '\u{1F500}', head: 'Multiple drivers', body: 'More than one force can act at once.' },
        { tone: 'blue', icon: '⏳',         head: 'Time horizon',     body: 'Short-run and long-run effects can differ.' },
        { tone: 'blue', icon: '\u{1F4AD}', head: 'Beliefs',          body: 'Speculation can amplify or reverse a move.' },
        { tone: 'blue', icon: '\u{1F3AF}', head: 'Context decides',  body: 'Elasticities and conditions size the effect.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Never stop at “the pound rises” — show <strong>why</strong> it rose and why that matters.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Exchange-rate analysis is a causal story — identify the driver, track the demand/supply movement, then explain the consequences.' },
      examEdge: { title: 'EXAM EDGE', text: 'The best answers always go through demand and supply for the currency before jumping to trade, inflation or growth.' }
    }
  ]
};
