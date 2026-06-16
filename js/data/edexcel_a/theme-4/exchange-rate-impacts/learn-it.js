/* ============================================================
   ECONOS – Exchange Rate Impacts (Edexcel A 4.1.8)
   8 cards · interactive-first build
   Built from the ChatGPT → Claude mockup pipeline.
   The effects of currency changes: appreciation vs depreciation
   winners and losers, the current-account channel, Marshall-Lerner,
   the J-curve, and the wider macro effects.

   New visuals:
     - caChannel          (Card 4 — depreciation branches into X/M paths)
     - marshallLernerScale(Card 5 — balance scale, PEDx + PEDm > 1)
     - fxMacroChannels    (Card 7 — four weaker-vs-stronger channels)
   Reuses jCurveInteractive (Card 6 — moved here from Theme 2 net-trade).
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'exchange-rate-impacts',
  topicNum: '4.1.8',
  theme: 'Theme 4 \xb7 A Global Perspective',
  title: 'Exchange Rate Impacts',
  estTime: '22 min',
  goal: 'Trace how a currency change works through export and import prices, quantities and the current account — including Marshall-Lerner and the J-curve — and evaluate the wider effects on inflation, growth, jobs and investment',

  intro: {
    heroKey: 'heroFxImpacts',
    summary: 'A change in the exchange rate sends shockwaves through the economy: it shifts relative prices, the demand for exports and imports, and — if quantities respond enough — the current account, inflation, growth and investment. The two great qualifiers are the Marshall-Lerner condition (PEDx + PEDm > 1) and the J-curve.',
    doInThis: 'Work through the winners and losers of an appreciation and depreciation, build the current-account channel, apply the Marshall-Lerner condition and J-curve, then evaluate the wider macro effects in context.',
    outcomes: [
      'Map how an exchange-rate change ripples through the economy',
      'Identify the winners and losers of appreciation and depreciation',
      'Build the current-account transmission channel',
      'Apply the Marshall-Lerner condition',
      'Read and explain the J-curve',
      'Evaluate the wider macro effects in context'
    ],
    tip: 'The phrase that lifts answers is it depends on elasticities, time and context — exchange-rate effects are powerful but never automatic.',
    stages: [
      { num: 1, name: 'Learn',  sub: '8 cards \xb7 22 min', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [
    /* ============ CARD 1 – The big picture ============ */
    {
      id: 'eri-big-picture',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 1 of 8',
      title: 'Exchange-rate impacts — the big picture',
      lede: 'A change in the currency sends shockwaves through exports, imports, inflation, growth, jobs and investment.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'A stronger currency helps some groups and hurts others — the total effect depends on <strong>elasticities, time lags and confidence</strong>.' },

      flowTitle: 'THE SHOCKWAVE CHAIN',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'green',  icon: '\u{1F4B1}', title: 'Currency rises or falls' },
        { tone: 'amber',  icon: '\u{1F3F7}️', title: 'Export & import prices change' },
        { tone: 'purple', icon: '\u{1F465}', title: 'Demand responds' },
        { tone: 'blue',   icon: '⚖️', title: 'Current account shifts' },
        { tone: 'green',  icon: '\u{1F4C8}', title: 'Growth & jobs change' },
        { tone: 'purple', icon: '\u{1F6E1}️', title: 'Confidence reacts' }
      ],

      causesLabel: 'WHO FEELS IT?',
      causesEmoji: '\u{1F465}',
      causesStyle: 'icon-top',
      causesCols: 5,
      causes: [
        { tone: 'green',  icon: '\u{1F3ED}', head: 'Exporters', body: 'Care about competitiveness abroad.' },
        { tone: 'amber',  icon: '\u{1F6D2}', head: 'Importers', body: 'Care about import costs.' },
        { tone: 'purple', icon: '\u{1F6CD}️', head: 'Consumers', body: 'Gain or lose as imports get cheaper or dearer.' },
        { tone: 'blue',   icon: '\u{1F477}', head: 'Workers', body: 'Jobs may rise or fall in traded sectors.' },
        { tone: 'green',  icon: '\u{1F3DB}️', head: 'Government', body: 'Cares about inflation, growth and the current account.' }
      ],

      causes2Label: 'THE BIG TRADE-OFFS',
      causes2Emoji: '⚖️',
      causes2Style: 'icon-top',
      causes2Cols: 4,
      causes2: [
        { tone: 'green',  icon: '🎯', head: 'Competitiveness vs inflation', body: 'A weaker currency can boost competitiveness but raise inflation.' },
        { tone: 'amber',  icon: '\u{1F465}', head: 'Consumers vs exporters', body: 'Cheaper imports help consumers but can hurt exporters.' },
        { tone: 'blue',   icon: '⏱️', head: 'Short run vs long run', body: 'Short-run pain can lead to long-run gains — or not.' },
        { tone: 'purple', icon: '\u{1F6E1}️', head: 'Confidence vs cost pressure', body: 'Stronger confidence attracts investment, but cost pressures bite.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Exchange-rate effects are rarely one-way — one currency move creates <strong>winners, losers and trade-offs</strong> across the economy.' },

      conclusion: { title: 'Big idea', text: 'Exchange rates matter because they change relative prices — and relative prices reshape behaviour across the whole economy.' },
      examEdge: 'Strong answers trace the chain from currency movement to <strong>prices, quantities, macro effects and evaluation</strong>.'
    },

    /* ============ CARD 2 – Appreciation ============ */
    {
      id: 'eri-appreciation',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 2 of 8',
      title: 'Appreciation — winners and losers',
      lede: 'A stronger currency makes imports cheaper and exports dearer — creating gains for some groups and pain for others.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Appreciation usually <strong>lowers imported inflation</strong>, but it can weaken export competitiveness and the current account.' },

      flowTitle: 'THE TRANSMISSION CHAIN',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'green',  icon: '\u{1F4B1}', title: 'Stronger currency' },
        { tone: 'amber',  icon: '\u{1F3F7}️', title: 'Imports cheaper, exports dearer' },
        { tone: 'purple', icon: '\u{1F6D2}', title: 'Import spending up, export demand may fall' },
        { tone: 'blue',   icon: '\u{1F4C9}', title: 'Inflation eases, CA may worsen' },
        { tone: 'rose',   icon: '\u{1F4BC}', title: 'Traded-sector growth may weaken' }
      ],

      causesLabel: 'KEY TRADE-OFFS',
      causesEmoji: '⚖️',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'green',  icon: '\u{1F4C9}', head: 'Lower inflation', body: 'Cheaper imports reduce price pressures.' },
        { tone: 'amber',  icon: '⚖️', head: 'Weaker current account', body: 'Imports rise and net exports may fall.' },
        { tone: 'blue',   icon: '\u{1F30D}', head: 'Stronger purchasing power', body: 'UK residents’ money goes further overseas.' },
        { tone: 'purple', icon: '\u{1F4C8}', head: 'Pressure on growth', body: 'Exports less competitive; traded-sector growth may slow.' }
      ],

      pairLabel: 'Winners vs Losers',
      pairEmoji: '⚖️',
      left: {
        tone: 'green',
        icon: '\u{1F3C6}',
        iconStyle: 'circle',
        label: 'Winners',
        points: ['Consumers', 'Importers and retailers', 'Firms using imported inputs', 'People buying foreign assets or travelling']
      },
      right: {
        tone: 'rose',
        icon: '⚠️',
        iconStyle: 'circle',
        label: 'Losers',
        points: ['Exporters', 'Import-competing firms', 'Tourism providers', 'Workers in traded sectors']
      },

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'A stronger pound is great for <strong>buying foreign goods</strong>, but less great for <strong>selling British goods overseas</strong>.' },

      conclusion: { title: 'Big idea', text: 'Appreciation redistributes gains — consumers and importers may benefit while exporters and the current account often come under pressure.' },
      examEdge: 'Trace the chain clearly: stronger currency → relative prices → export and import volumes → inflation, current account and jobs.'
    },

    /* ============ CARD 3 – Depreciation ============ */
    {
      id: 'eri-depreciation',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 3 of 8',
      title: 'Depreciation — winners and losers',
      lede: 'A weaker currency makes exports cheaper and imports dearer — often helping competitiveness, but at the cost of higher inflation pressure.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Depreciation can boost net exports and jobs, but it also raises import costs and can <strong>squeeze living standards</strong>.' },

      flowTitle: 'THE TRANSMISSION CHAIN',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'green',  icon: '\u{1F4C9}', title: 'Weaker currency' },
        { tone: 'amber',  icon: '\u{1F3F7}️', title: 'Exports cheaper, imports dearer' },
        { tone: 'purple', icon: '\u{1F465}', title: 'Export demand up, import demand down' },
        { tone: 'blue',   icon: '⚖️', title: 'Current account & demand may rise' },
        { tone: 'rose',   icon: '\u{1F4C8}', title: 'Inflation pressure increases' }
      ],

      causesLabel: 'THE BIG TRADE-OFFS',
      causesEmoji: '⚖️',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'green',  icon: '🎯', head: 'Stronger competitiveness', body: 'Exports cheaper; import competitors gain an edge.' },
        { tone: 'rose',   icon: '\u{1F3F7}️', head: 'Higher inflation', body: 'Dearer imports push up prices for households and firms.' },
        { tone: 'blue',   icon: '\u{1F4C8}', head: 'Possible growth & jobs', body: 'Net exports and demand may rise, creating jobs.' },
        { tone: 'purple', icon: '\u{1F45B}', head: 'Squeeze on real incomes', body: 'Higher import costs can lower real living standards.' }
      ],

      pairLabel: 'Winners vs Losers',
      pairEmoji: '⚖️',
      left: {
        tone: 'green',
        icon: '\u{1F3C6}',
        iconStyle: 'circle',
        label: 'Winners',
        points: ['Exporters (goods and services)', 'Tourism and hospitality', 'Import-competing firms', 'Workers in export-facing sectors']
      },
      right: {
        tone: 'rose',
        icon: '⚠️',
        iconStyle: 'circle',
        label: 'Losers',
        points: ['Consumers buying imports', 'Firms using imported components', 'People travelling abroad', 'Borrowers exposed to foreign-currency costs']
      },

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'A weaker currency can look like an <strong>industrial tonic</strong> and a <strong>consumer tax</strong> at the same time.' },

      conclusion: { title: 'Big idea', text: 'Depreciation can support growth through trade, but the gains come with inflationary and distributional costs.' },
      examEdge: 'Do not stop at “exports cheaper” — push through to <strong>current account, inflation, growth, employment and evaluation</strong>.'
    },

    /* ============ CARD 4 – The current account channel ============ */
    {
      id: 'eri-ca-channel',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 4 of 8',
      title: 'The current account channel',
      lede: 'Exchange-rate changes affect the current account by altering export and import prices — and then, if quantities respond, the balance itself.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'A depreciation only improves the current account if the response in <strong>export and import volumes is strong enough</strong>.' },

      visualKey: 'caChannel',
      visualLabel: 'THE TRANSMISSION MECHANISM',
      visualEmoji: '\u{1F517}',
      visualCaption: 'Prices move first. Volumes often respond later.',

      causesLabel: 'WHAT CAN BREAK THE CHAIN?',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'green',  icon: '\u{1F517}', head: 'Inelastic demand', body: 'Exporters cannot expand much; importers cannot cut back much.' },
        { tone: 'amber',  icon: '\u{1F4DD}', head: 'Long contracts', body: 'Prices are fixed for a period, limiting short-run adjustment.' },
        { tone: 'blue',   icon: '\u{1F3ED}', head: 'Low spare capacity', body: 'Firms cannot produce much more even if prices improve.' },
        { tone: 'purple', icon: '\u{1F310}', head: 'Import dependence', body: 'Essential imports are hard to reduce.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Prices move first. <strong>Volumes often respond later</strong> — which is exactly why timing matters.' },

      conclusion: { title: 'Big idea', text: 'The current-account effect runs through relative prices and then through the volume response of exports and imports.' },
      examEdge: 'In answers, show <strong>both branches</strong> — export prices and import prices — before jumping to the current-account result.'
    },

    /* ============ CARD 5 – Marshall-Lerner ============ */
    {
      id: 'eri-marshall-lerner',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 5 of 8',
      title: 'Marshall-Lerner condition',
      lede: 'A depreciation improves the current account only if demand for exports and imports is elastic enough.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'The key test is whether <strong>quantity changes are big enough to outweigh the price changes</strong>.' },

      visualKey: 'marshallLernerScale',
      visualLabel: 'THE CONDITION',
      visualEmoji: '\u{1F517}',

      pairFirst: true,
      pairLabel: 'Elastic enough vs Not elastic enough',
      pairEmoji: '⚖️',
      left: {
        tone: 'green',
        icon: '✅',
        iconStyle: 'circle',
        label: 'Elastic enough',
        points: ['Exports respond strongly → quantity demanded rises a lot', 'Imports respond strongly → quantity demanded falls a lot', 'Current account improves']
      },
      right: {
        tone: 'amber',
        icon: '⚠️',
        iconStyle: 'circle',
        label: 'Not elastic enough',
        points: ['Exports respond weakly → quantity rises only a little', 'Imports respond weakly → quantity falls only a little', 'Current account may not improve']
      },

      causesLabel: 'WHY ELASTICITIES DIFFER',
      causesEmoji: '\u{1F465}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'green',  icon: '\u{1F504}', head: 'Substitutes', body: 'More substitutes mean more elastic demand.' },
        { tone: 'amber',  icon: '⏱️', head: 'Time to adjust', body: 'More time means more ability for quantities to respond.' },
        { tone: 'purple', icon: '\u{1F48E}', head: 'Importance of the good', body: 'Necessities are less elastic than luxuries.' },
        { tone: 'blue',   icon: '\u{1F91D}', head: 'Habit & contracts', body: 'Long-term habits or contracts reduce responsiveness.' }
      ],

      causes2Label: 'HOW TO WRITE IT',
      causes2Emoji: '✍️',
      causes2Style: 'icon-top',
      causes2Cols: 4,
      causes2: [
        { tone: 'blue', icon: '\u{1F4C9}', head: '1 · State the depreciation', body: 'The currency falls.' },
        { tone: 'blue', icon: '\u{1F3F7}️', head: '2 · Link to prices', body: 'Export and import prices change.' },
        { tone: 'blue', icon: '⚖️', head: '3 · Apply elasticities', body: 'PEDₓ + PEDₘ — is it greater than 1?' },
        { tone: 'blue', icon: '✅', head: '4 · Judge the outcome', body: 'Does the current account improve?' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'A cheaper price is <strong>not enough on its own</strong> — quantities must move.' },

      conclusion: { title: 'Big idea', text: 'Marshall-Lerner is the elasticity checkpoint between a currency fall and an improved trade balance.' },
      examEdge: 'Use the condition explicitly when evaluating whether a depreciation will improve the current account.'
    },

    /* ============ CARD 6 – The J-curve ============ */
    {
      id: 'eri-j-curve',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 6 of 8',
      title: 'The J-curve effect',
      lede: 'After a depreciation, the current account may worsen first and only improve later as quantities gradually adjust.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Time matters — prices usually change immediately, while <strong>contracts, habits and production plans change more slowly</strong>.' },

      interactiveDiagram: {
        svgKey: 'jCurveInteractive',
        label: 'THE J-CURVE',
        emoji: '\u{1F4C9}',
        maxWidth: '560px',
        layers: ['idl-1', 'idl-2'],
        views: [
          { label: 'Depreciation', tone: 'blue', head: 'Prices react, volumes have not', body: 'The currency falls. The balance sits at its starting level — contracts are fixed and volumes cannot move yet.' },
          { label: 'Worse first', tone: 'rose', show: ['idl-1'], head: 'The balance worsens to the trough', body: 'Import prices rise immediately, but export and import quantities adjust slowly, so the current account first gets worse.' },
          { label: 'Improves later', tone: 'green', show: ['idl-1', 'idl-2'], head: 'Volumes respond and the balance improves', body: 'Exports become cheaper and imports dearer; as volumes adjust, the current account recovers.', analysis: 'The recovery only completes if PEDₓ + PEDₘ > 1 (Marshall-Lerner). Short-run pain does not mean the policy failed.' }
        ]
      },

      pairFirst: true,
      pairLabel: 'Why it worsens first vs Why it improves later',
      pairEmoji: '⚖️',
      left: {
        tone: 'rose',
        icon: '➖',
        iconStyle: 'circle',
        label: 'Why it worsens first',
        points: ['Import values jump immediately', 'Export and import contracts are fixed', 'Habits change slowly']
      },
      right: {
        tone: 'green',
        icon: '✅',
        iconStyle: 'circle',
        label: 'Why it improves later',
        points: ['Export volumes rise', 'Import volumes fall', 'Firms and consumers adjust behaviour']
      },

      flowTitle: 'THE TIME-LAG STORY',
      flowEmoji: '⏳',
      flowSep: '→',
      flow: [
        { tone: 'purple', icon: '\u{1F4B1}', title: 'Depreciation' },
        { tone: 'blue',   icon: '\u{1F3F7}️', title: 'Prices change fast' },
        { tone: 'amber',  icon: '\u{1F465}', title: 'Volumes react slowly' },
        { tone: 'green',  icon: '\u{1F4C8}', title: 'Current account improves later' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Short-run pain does <strong>not automatically</strong> mean the policy failed.' },

      conclusion: { title: 'Big idea', text: 'The J-curve reminds us that exchange-rate effects on trade are often delayed, not instant.' },
      examEdge: 'If asked about depreciation and the current account, mention the likely <strong>short-run worsening before the longer-run improvement</strong>.'
    },

    /* ============ CARD 7 – Macro effects ============ */
    {
      id: 'eri-macro',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 7 of 8',
      title: 'Inflation, growth, employment and FDI',
      lede: 'Exchange-rate changes ripple across the wider economy — affecting prices, output, jobs and investment decisions.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'A weaker currency can boost demand but raise inflation — while a stronger one may <strong>do the reverse</strong>.' },

      visualKey: 'fxMacroChannels',
      visualLabel: 'FOUR MACRO CHANNELS',
      visualEmoji: '\u{1F517}',

      causesLabel: 'WHAT DECIDES THE RESULT?',
      causesEmoji: '⚖️',
      causesStyle: 'icon-top',
      causesCols: 5,
      causes: [
        { tone: 'green',  icon: '\u{1F3AE}', head: 'Spare slack', body: 'More slack means demand gains boost output, not prices.' },
        { tone: 'amber',  icon: '\u{1F9E0}', head: 'Confidence', body: 'Confident firms invest and hire; weak confidence limits the boost.' },
        { tone: 'blue',   icon: '\u{1F310}', head: 'World demand', body: 'Strong world demand amplifies export gains.' },
        { tone: 'purple', icon: '\u{1F6D2}', head: 'Imports', body: 'More import reliance means a bigger inflation impact.' },
        { tone: 'green',  icon: '\u{1F500}', head: 'Move size', body: 'Small moves have smaller macro effects.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'FDI is not mechanical — investors also care about <strong>stability, policy and long-run prospects</strong>.' },

      conclusion: { title: 'Big idea', text: 'Exchange rates do not just move currencies — they reshape inflation, output, jobs and investment incentives.' },
      examEdge: 'Always evaluate the wider macro context — especially <strong>spare capacity, import dependence and confidence</strong>.'
    },

    /* ============ CARD 8 – The whole story ============ */
    {
      id: 'eri-whole-story',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 8 of 8',
      title: 'The whole story',
      lede: 'High-mark answers trace the exchange-rate movement through prices, quantities and macro effects — then judge how far the result really depends on context.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Elasticities, time lags, spare capacity, import dependence and confidence decide whether the final effect is <strong>strong, weak or mixed</strong>.' },

      flowTitle: 'THE FULL CHAIN',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'green',  icon: '\u{1F4B1}', title: 'Exchange rate changes' },
        { tone: 'amber',  icon: '\u{1F3F7}️', title: 'Relative prices change' },
        { tone: 'purple', icon: '\u{1F465}', title: 'Export & import demand responds' },
        { tone: 'blue',   icon: '⚖️', title: 'Current account & inflation shift' },
        { tone: 'green',  icon: '\u{1F4C8}', title: 'Growth, jobs & investment react' },
        { tone: 'purple', icon: '\u{2696}️', title: 'Final judgement' }
      ],

      causesLabel: 'THE FIVE BIG EVALUATION TESTS',
      causesEmoji: '\u{1F4CB}',
      causesStyle: 'icon-top',
      causesCols: 5,
      causes: [
        { tone: 'green',  icon: '\u{1F4D0}', head: 'PED', body: 'How price-sensitive are exports, imports and demand?' },
        { tone: 'amber',  icon: '⏳', head: 'Time', body: 'Short, medium or long run — the effect changes over time.' },
        { tone: 'purple', icon: '\u{1F3ED}', head: 'Slack', body: 'Is the economy below, at or above capacity?' },
        { tone: 'blue',   icon: '\u{1F6D2}', head: 'Imports', body: 'How heavily does the economy rely on imports?' },
        { tone: 'purple', icon: '\u{1F310}', head: 'Context', body: 'Business confidence, foreign growth, risk and shocks.' }
      ],

      causes2Label: 'HOW TO WRITE IT',
      causes2Emoji: '✍️',
      causes2Style: 'icon-top',
      causes2Cols: 4,
      causes2: [
        { tone: 'blue', icon: '\u{1F4AC}', head: '1 · Define the movement', body: 'State the currency change and what it means.' },
        { tone: 'blue', icon: '\u{1F3F7}️', head: '2 · Explain the mechanism', body: 'Trace prices → demand → current account and inflation.' },
        { tone: 'blue', icon: '\u{1F4CA}', head: '3 · Apply to macro outcomes', body: 'Link to growth, jobs and investment.' },
        { tone: 'blue', icon: '✅', head: '4 · Evaluate with context', body: 'Use the tests to judge how strong the effect is.' }
      ],

      causes3Label: 'COMMON MISTAKES',
      causes3Emoji: '⚠️',
      causes3Style: 'icon-top',
      causes3Cols: 3,
      causes3: [
        { tone: 'rose', icon: '⚠️', head: 'Effect is automatic', body: 'The direction and size depend on many factors.' },
        { tone: 'rose', icon: '⏳', head: 'Forgetting time lags', body: 'Impacts take time — especially on growth, jobs and investment.' },
        { tone: 'rose', icon: '❓', head: 'Ignoring inflation/confidence', body: 'These can amplify, offset or reverse the effect.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'The best exchange-rate answers are <strong>causal and conditional</strong> — not just descriptive.' },

      conclusion: { title: 'Big idea', text: 'Exchange-rate effects are powerful but never automatic — context decides the scale and direction of the final outcome.' },
      examEdge: 'Use a chain-plus-evaluation structure: currency move → prices → volumes → macro effects → judgement.'
    }
  ]
};
