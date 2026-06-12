/* ============================================================
   ECONOS – Exchange Rate Intervention (Edexcel A 4.1.8)
   6 cards · interactive-first build
   Built from the ChatGPT → Claude mockup pipeline.
   How and why governments steer their currency: direct FX
   transactions, interest rates, defending a peg, and competitive
   devaluation — with the trade-offs and retaliation risks.

   New visuals:
     - fxInterventionDiagrams (Card 2 chart — support vs weaken the £)
     - fxInterestMagnet       (Card 3 gauge — higher rate = stronger pull)
     - fxPegDefence           (Card 4 chart — peg above equilibrium, CB buys)
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'exchange-rate-intervention',
  topicNum: '4.1.8',
  theme: 'Theme 4 \xb7 A Global Perspective',
  title: 'Exchange Rate Intervention',
  estTime: '18 min',
  goal: 'Explain why and how governments intervene in currency markets — through direct transactions, interest rates and defending a peg — and evaluate competitive devaluation and its risks',

  intro: {
    heroKey: 'heroFxIntervention',
    summary: 'Governments do not always leave the exchange rate to the market. This deck explains why they intervene — for competitiveness, to control imported inflation, to defend a peg, to maintain confidence or to smooth volatility — and the tools they use: direct foreign-currency transactions, interest rates, reserves and occasionally capital controls. It builds the supply-and-demand diagrams for supporting and weakening a currency, shows how interest rates act as a magnet for capital, walks through the pressure of defending a fixed rate, and finishes with the contested strategy of competitive devaluation and the retaliation risk of a currency war.',
    doInThis: 'Set out why governments intervene and the tools available. Show how buying or selling the currency shifts demand or supply. Explain how interest rates pull capital and move the rate. Walk through how a peg is defended and why pegs break. Evaluate competitive devaluation, its winners and losers, and the risk of currency wars.',
    outcomes: [
      'Explain why governments intervene in currency markets',
      'Show how direct FX transactions move the rate',
      'Explain how interest rates influence the currency',
      'Analyse how a fixed rate is defended',
      'Evaluate competitive devaluation',
      'Judge the risks, including retaliation'
    ],
    tip: 'The phrase to reach for is at what cost — intervention can work, but reserves are finite and rivals may retaliate.',
    stages: [
      { num: 1, name: 'Learn',  sub: '6 cards \xb7 18 min', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [
    /* ============ CARD 1 – Why governments intervene ============ */
    {
      id: 'xri-why',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 1 of 6',
      title: 'Why governments intervene',
      lede: 'Governments do not leave exchange rates to the market alone when competitiveness, inflation or confidence are at stake.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Intervention is usually about one of five goals — <strong>competitiveness, inflation, confidence, defending a peg, or reducing volatility</strong>.' },

      causesFirst: true,
      causesLabel: 'WHY INTERVENE?',
      causesEmoji: '\u{1F3AF}',
      causesStyle: 'icon-top',
      causesCols: 5,
      causes: [
        { tone: 'green',  icon: '\u{1F4C8}', head: 'Exports', body: 'Support competitiveness and growth.' },
        { tone: 'amber',  icon: '\u{1F3F7}️', head: 'Prices', body: 'Limit imported inflation.' },
        { tone: 'blue',   icon: '\u{1F6E1}️', head: 'Trust', body: 'Reassure investors and savers.' },
        { tone: 'purple', icon: '\u{1F3AF}', head: 'The peg', body: 'Defend a fixed exchange rate.' },
        { tone: 'rose',   icon: '〰️', head: 'Steady', body: 'Smooth sharp swings and volatility.' }
      ],

      causes2Label: 'THE TOOLBOX',
      causes2Emoji: '\u{1F9F0}',
      causes2Style: 'icon-top',
      causes2Cols: 4,
      causes2: [
        { tone: 'blue',   icon: '\u{1F4B1}', head: 'FX deals', body: 'Buy or sell the currency directly.' },
        { tone: 'green',  icon: '\u{1F3DB}️', head: 'Interest rates', body: 'Influence capital flows.' },
        { tone: 'amber',  icon: '\u{1F4B0}', head: 'Reserves', body: 'Spend or build reserves to intervene.' },
        { tone: 'purple', icon: '\u{1F39B}️', head: 'Capital controls', body: 'Limit flows or signal intent.' }
      ],

      flowTitle: 'THE TRADE-OFF',
      flowEmoji: '⚖️',
      flowSep: '→',
      flow: [
        { tone: 'blue',   icon: '\u{1F3DB}️', title: 'Central bank acts' },
        { tone: 'green',  icon: '\u{1F4B1}', title: 'Currency moves' },
        { tone: 'amber',  icon: '\u{1F6A2}', title: 'Trade & prices shift' },
        { tone: 'purple', icon: '⚖️', title: 'Costs appear too' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Governments intervene because exchange rates affect <strong>prices, trade, growth and credibility</strong>.' },

      conclusion: { title: 'Big idea', text: 'Exchange-rate intervention is about steering the currency toward a policy goal — at a cost.' },
      examEdge: 'State the government’s motive, then explain the chosen tool and its <strong>trade-offs</strong>.'
    },

    /* ============ CARD 2 – Foreign currency transactions ============ */
    {
      id: 'xri-transactions',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 2 of 6',
      title: 'Foreign currency transactions',
      lede: 'Central banks can enter the foreign-exchange market directly — buying or selling currencies to influence the exchange rate.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Buying the domestic currency raises demand and supports its value — selling it raises supply and <strong>weakens it</strong>.' },

      visualKey: 'fxInterventionDiagrams',
      visualLabel: 'THE MARKET DIAGRAMS',
      visualEmoji: '\u{1F4CA}',
      visualCaption: 'Buying £ shifts demand right (the rate rises); selling £ shifts supply right (the rate falls).',

      flowTitle: 'HOW IT WORKS',
      flowEmoji: '\u{1F3AF}',
      flowSep: '→',
      flow: [
        { tone: 'blue',   icon: '\u{1F4B0}', title: 'Use reserves' },
        { tone: 'green',  icon: '\u{1F501}', title: 'Buy or sell £' },
        { tone: 'amber',  icon: '↕️', title: 'Demand or supply shifts' },
        { tone: 'purple', icon: '\u{1F4B1}', title: 'Exchange rate changes' }
      ],

      causesLabel: 'RESERVES AND LIMITS',
      causesEmoji: '\u{1F3E6}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'green',  icon: '\u{1F4B5}', head: 'Foreign reserves', body: 'Dollars and euros used to buy and sell currency.' },
        { tone: 'blue',   icon: '✅', head: 'Can work', body: 'Effective in the short run, near the target.' },
        { tone: 'amber',  icon: '\u{1F4A7}', head: 'Reserve drain', body: 'Interventions can use up reserves.' },
        { tone: 'rose',   icon: '⚠️', head: 'May fail', body: 'Large pressure can overwhelm intervention.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Intervention is easier for countries with <strong>large reserves and strong credibility</strong>.' },

      conclusion: { title: 'Big idea', text: 'Direct FX intervention works by shifting demand or supply for the currency in the market.' },
      examEdge: 'In diagram questions, show whether the central bank is <strong>buying (demand right) or selling (supply right)</strong> the currency.'
    },

    /* ============ CARD 3 – Using interest rates ============ */
    {
      id: 'xri-interest',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 3 of 6',
      title: 'Using interest rates',
      lede: 'Interest rates can influence exchange rates because capital often moves towards the highest credible return.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Higher interest rates can attract hot money and support the currency — but they <strong>slow the wider economy</strong>.' },

      flowTitle: 'THE CAPITAL-FLOW CHAIN — rates up',
      flowEmoji: '\u{1F517}',
      flowSep: '→',
      flow: [
        { tone: 'green', icon: '⬆️', title: 'Rates up' },
        { tone: 'green', icon: '\u{1F4E5}', title: 'Capital inflow' },
        { tone: 'green', icon: '\u{1F465}', title: 'Demand for £ rises' },
        { tone: 'green', icon: '\u{1F4C8}', title: 'Appreciation' }
      ],

      flow2Title: 'THE CAPITAL-FLOW CHAIN — rates down',
      flow2Emoji: '\u{1F517}',
      flow2Sep: '→',
      flow2: [
        { tone: 'rose', icon: '⬇️', title: 'Rates down' },
        { tone: 'rose', icon: '\u{1F4E4}', title: 'Capital outflow' },
        { tone: 'rose', icon: '\u{1F3DB}️', title: 'Supply of £ rises' },
        { tone: 'rose', icon: '\u{1F4C9}', title: 'Depreciation' }
      ],

      flowChart: {
        svgKey: 'fxInterestMagnet',
        label: 'THE INTEREST-RATE MAGNET',
        emoji: '\u{1F9F2}',
        caption: 'The higher the credible interest rate, the stronger the pull on capital toward the currency.'
      },

      causesLabel: 'WHEN IT WORKS',
      causesEmoji: '\u{1F44D}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'green',  icon: '\u{1F6E1}️', head: 'Confidence', body: 'A high return only attracts capital if the policy looks credible.' },
        { tone: 'blue',   icon: '\u{1F4B8}', head: 'High return', body: 'Funds chase yield, so capital flows in.' },
        { tone: 'purple', icon: '\u{1F3AF}', head: 'Support a target', body: 'Helps defend a fixed or managed rate.' }
      ],

      causes2Label: 'LIMITS AND COSTS',
      causes2Emoji: '⚠️',
      causes2Style: 'icon-top',
      causes2Cols: 3,
      causes2: [
        { tone: 'amber', icon: '\u{1F3E0}', head: 'Costlier borrowing', body: 'Mortgages and loans become more expensive.' },
        { tone: 'amber', icon: '\u{1F4C9}', head: 'Weaker growth', body: 'Higher rates can slow the economy.' },
        { tone: 'amber', icon: '\u{1F3AD}', head: 'Depends on credibility', body: 'Markets must believe the policy will hold.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Interest rates change the exchange rate <strong>indirectly</strong> — through capital flows rather than direct trade.' },

      conclusion: { title: 'Big idea', text: 'Interest rates move the currency by changing the relative attractiveness of holding it.' },
      examEdge: 'Do not stop at “rates rise” — complete the chain to <strong>capital flows, currency demand and the rate</strong>.'
    },

    /* ============ CARD 4 – Defending a fixed exchange rate ============ */
    {
      id: 'xri-defend',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 4 of 6',
      title: 'Defending a fixed exchange rate',
      lede: 'A fixed rate looks stable from the outside — but behind the scenes the central bank may have to work hard to keep the peg aligned.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'A peg survives only if the central bank can keep demand and supply <strong>aligned at the target rate</strong>.' },

      flowTitle: 'THE PEG STORY',
      flowEmoji: '\u{1F517}',
      flowSep: '→',
      flow: [
        { tone: 'green',  icon: '\u{1F3AF}', title: 'Target announced', sub: 'A rate is set.' },
        { tone: 'amber',  icon: '⚡', title: 'Market pressure', sub: 'The rate drifts off target.' },
        { tone: 'blue',   icon: '\u{1F3E6}', title: 'Central bank acts', sub: 'Uses reserves or rates.' },
        { tone: 'purple', icon: '\u{1F6E1}️', title: 'Peg defended', sub: 'Rate held at target.' }
      ],

      interactiveDiagram: {
        svgKey: 'fxPegDefence',
        label: 'THE PRESSURE DIAGRAM',
        emoji: '\u{1F4CA}',
        layers: ['idl-1', 'idl-2', 'idl-3'],
        views: [
          {
            label: 'Free market',
            tone: 'slate',
            show: ['idl-1'],
            head: 'Where the market would settle',
            body: 'Left alone, demand for £ meets supply of £ at the free-market equilibrium rate E*.'
          },
          {
            label: 'Set the target',
            tone: 'purple',
            show: ['idl-1', 'idl-2'],
            head: 'The peg is fixed above E*',
            body: 'The authorities announce a target rate above the free-market level — the currency is now held stronger than the market alone would set it.'
          },
          {
            label: 'Defend the peg',
            tone: 'rose',
            show: ['idl-1', 'idl-2', 'idl-3'],
            head: 'Excess supply must be absorbed',
            body: 'At the target, supply of £ exceeds demand. The central bank buys up the surplus pounds — selling foreign-currency reserves — to hold the rate.',
            analysis: 'The wider the gap, the more reserves it burns each period. A peg this far above equilibrium is only as durable as the reserve stockpile behind it.'
          }
        ]
      },

      causesLabel: 'WHY PEGS BREAK',
      causesEmoji: '⚠️',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'amber',  icon: '\u{1F4C8}', head: 'Costly defence', body: 'Higher rates can hurt growth and become unsustainable.' },
        { tone: 'rose',   icon: '\u{1F3AF}', head: 'Speculative attack', body: 'Markets test whether the peg can hold.' },
        { tone: 'rose',   icon: '\u{1F4C9}', head: 'Confidence loss', body: 'Markets expect devaluation, and reserves run down.' }
      ],

      pairLabel: 'Stability vs Cost',
      pairEmoji: '⚖️',
      left: {
        tone: 'green',
        icon: '✅',
        iconStyle: 'circle',
        label: 'Benefits',
        points: ['Certainty for trade and pricing', 'Credibility and stability']
      },
      right: {
        tone: 'rose',
        icon: '⚠️',
        iconStyle: 'circle',
        label: 'Costs',
        points: ['Loss of policy freedom', 'Reserves and defence costs', 'Risk of a forced devaluation']
      },

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Fixed rates feel stable, but the question is whether the country can <strong>afford to keep the peg credible</strong>.' },

      conclusion: { title: 'Big idea', text: 'A peg holds only while the central bank is willing and able to defend it.' },
      examEdge: 'When explaining a peg, mention the <strong>defending mechanism (reserves and interest rates)</strong> and its limits.'
    },

    /* ============ CARD 5 – Competitive devaluation ============ */
    {
      id: 'xri-devaluation',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 5 of 6',
      title: 'Competitive devaluation or depreciation',
      lede: 'A weaker currency can help exporters in the short run — but if countries chase the same strategy, tensions rise.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'A weaker currency may boost net exports — but it can also cause <strong>imported inflation and provoke retaliation</strong>.' },

      flowTitle: 'THE EXPORT-BOOST CHAIN',
      flowEmoji: '\u{1F517}',
      flowSep: '→',
      flow: [
        { tone: 'green',  icon: '\u{1F4C9}', title: 'Currency weakens' },
        { tone: 'green',  icon: '\u{1F6A2}', title: 'Exports cheaper abroad' },
        { tone: 'amber',  icon: '\u{1F4E5}', title: 'Imports dearer at home' },
        { tone: 'green',  icon: '\u{1F4C8}', title: 'Net exports & AD rise' },
        { tone: 'rose',   icon: '\u{1F525}', title: 'Inflation may rise' }
      ],

      causesLabel: 'CURRENCY WARS',
      causesEmoji: '⚔️',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'amber',  icon: '\u{1F4C9}', head: 'One devalues', body: 'A country weakens its currency to gain an edge.' },
        { tone: 'rose',   icon: '\u{1F30D}', head: 'Rivals lose out', body: 'Trading partners lose competitiveness.' },
        { tone: 'rose',   icon: '\u{1F501}', head: 'Hit back', body: 'Others retaliate or match — a currency war.' },
        { tone: 'purple', icon: '⚠️', head: 'Lose-lose', body: 'Beggar-thy-neighbour: gains cancel out, tensions rise.' }
      ],

      causes2Label: 'SHORT RUN VS LONG RUN',
      causes2Emoji: '⏳',
      causes2Style: 'icon-top',
      causes2Cols: 3,
      causes2: [
        { tone: 'green',  icon: '⏱️', head: 'Short run', body: 'A weaker currency can boost exports and growth.' },
        { tone: 'amber',  icon: '\u{1F3AD}', head: 'Effects vary', body: 'Depends on elasticities and confidence.' },
        { tone: 'rose',   icon: '\u{1F504}', head: 'Long run', body: 'Retaliation can cancel the gain.' }
      ],

      pairLabel: 'Winners vs Losers',
      pairEmoji: '⚖️',
      left: {
        tone: 'green',
        icon: '\u{1F3C6}',
        iconStyle: 'circle',
        label: 'Winners',
        points: ['Exporters', 'Tourism', 'Import-competing firms']
      },
      right: {
        tone: 'rose',
        icon: '⚠️',
        iconStyle: 'circle',
        label: 'Losers',
        points: ['Consumers (dearer imports)', 'Firms using imported inputs', 'Borrowers with foreign-currency debt']
      },

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'The policy can help one country at first — but if many try it at once, the gains shrink and the <strong>tensions grow</strong>.' },

      conclusion: { title: 'Big idea', text: 'Competitive devaluation can lift exports short term, but it risks inflation and retaliation.' },
      examEdge: 'Devaluation is a <strong>beggar-thy-neighbour</strong> policy — always weigh the export gain against retaliation and inflation.'
    },

    /* ============ CARD 6 – The whole story ============ */
    {
      id: 'xri-whole-story',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 6 of 6',
      title: 'The whole story',
      lede: 'Strong answers identify the motive, explain the intervention tool, trace the exchange-rate effect, and then judge the wider consequences.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Intervention can change competitiveness and confidence — but it may use reserves, distort incentives and <strong>trigger retaliation</strong>.' },

      flowTitle: 'THE CHAIN',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'green',  icon: '\u{1F3AF}', title: 'Problem or goal' },
        { tone: 'amber',  icon: '\u{1F9F0}', title: 'Choose a tool' },
        { tone: 'blue',   icon: '↕️', title: 'Demand or supply shifts' },
        { tone: 'purple', icon: '\u{1F4B1}', title: 'Currency adjusts' },
        { tone: 'green',  icon: '\u{1F4CA}', title: 'Wider effects' },
        { tone: 'purple', icon: '⚖️', title: 'Final judgement' }
      ],

      causesLabel: 'COMMON EVALUATION POINTS',
      causesEmoji: '\u{1F44D}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'green',  icon: '⏳', head: 'Short vs long run', body: 'Effects differ over time as the economy adjusts.' },
        { tone: 'blue',   icon: '\u{1F6E1}️', head: 'Credible?', body: 'Markets must believe the policy will hold.' },
        { tone: 'amber',  icon: '\u{1F4B0}', head: 'Reserves finite', body: 'Direct intervention can run out of firepower.' },
        { tone: 'rose',   icon: '\u{1F30D}', head: 'Rivals respond', body: 'Others may retaliate and offset the gain.' }
      ],

      causes2Label: 'HOW TO WRITE IT',
      causes2Emoji: '✍️',
      causes2Style: 'icon-top',
      causes2Cols: 4,
      causes2: [
        { tone: 'blue', icon: '\u{1F4DD}', head: '1 · Define the issue', body: 'The motive or pressure.' },
        { tone: 'blue', icon: '⚙️', head: '2 · Explain the tool', body: 'How it shifts demand or supply.' },
        { tone: 'blue', icon: '\u{1F517}', head: '3 · Trace the effects', body: 'On the rate, trade and prices.' },
        { tone: 'blue', icon: '⚖️', head: '4 · Judge the trade-offs', body: 'Costs, credibility, retaliation.' }
      ],

      causes3Label: 'COMMON MISTAKES',
      causes3Emoji: '⚠️',
      causes3Style: 'icon-top',
      causes3Cols: 3,
      causes3: [
        { tone: 'rose', icon: '\u{1F500}', head: 'Mixing the terms', body: 'Depreciation is market-driven; devaluation is official.' },
        { tone: 'rose', icon: '\u{1F4CA}', head: 'Forgetting the tool', body: 'Show the demand-and-supply mechanism, not just the outcome.' },
        { tone: 'rose', icon: '\u{1F525}', head: 'Ignoring side effects', body: 'Inflation and retaliation matter for the verdict.' }
      ],

      conclusion: { title: 'Big idea', text: 'Exchange-rate intervention is a policy choice with real benefits and real costs — judge it in context.' },
      examEdge: 'Use the chain explicitly: <strong>motive → tool → demand/supply → rate → wider effects → judgement</strong>.'
    }
  ]
};
