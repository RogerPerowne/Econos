/* ==========================================================================
   Demand-side Policies: Monetary – Edexcel A Theme 2.6.2 (monetary half).

   Six-card Learn-It build assembled from Roger's mockup pipeline (six
   ChatGPT mockup images, 2026-06-04). Pedagogy:
     C1 Sequential flow chain – monetary policy transmission overview
     C2 Decompose-a-diagram + EDL AD-shift-right hero – expansionary
     C3 Spectrum / regime grid – the five transmission channels
     C4 Decompose + EDL AD-shift-left hero – contractionary (mirror of C2)
     C5 Side-by-side pair – Bank Rate vs QE (conventional vs unconventional)
     C6 Evidence-then-verdict – strengths/limits + judgement frame

   Mirrors the demand-side-policies-fiscal sister topic in structure, with
   monetary-policy framing throughout. EDL heroes are the second production
   use after v0.46.0 – same `ad-as` intents (ad-shift-right / ad-shift-left).
   ========================================================================== */
window.ECONOS_TOPIC = {
  id:          'demand-side-policies-monetary',
  topicNum:    '2.6.2',
  theme:       'Theme 2 · The National and Global Economy',
  title:       'Demand-side Policies: Monetary',
  estTime:     '~15 min',
  goal:        'Use interest rates, QE and the broader monetary toolkit to manage aggregate demand – and explain why the same rate cut can have different effects at different times.',
  intro: {
    summary:  'Monetary policy is the central bank\'s demand-management toolkit. Step through the transmission chain, the five channels, conventional and unconventional tools, and finish with the strengths-and-limits judgement frame.',
    doInThis: 'Walk the 5-step transmission from rate change to inflation, model both expansionary and contractionary stances, see how rates work through five channels at once, compare Bank Rate to QE, and finish with the judgement frame examiners reward.',
    outcomes: [
      'Explain how Bank Rate and QE shift AD',
      'Distinguish expansionary from contractionary monetary policy',
      'Name the five transmission channels (consumption, investment, wealth, exchange rate, confidence)',
      'Explain how QE differs from a Bank Rate change',
      'Identify the five tools in the monetary toolkit',
      'Evaluate when monetary policy is strong, weak or risky using the 6-question judgement frame'
    ],
    tip:      'Monetary policy targets aggregate demand. Always state the stance, name the transmission channel, then evaluate the trade-offs.',
    stages: [
      { num: 1, name: 'Learn it', sub: '6 cards', state: 'current' },
      { num: 2, name: 'Link it',  sub: 'Coming soon', state: 'locked' },
      { num: 3, name: 'Land it',  sub: 'Coming soon', state: 'locked' }
    ]
  },
  cards: [

    /* ====================================================================
       CARD 1 – Monetary policy: the big picture
       Pattern: Sequential flow chain (5-step transmission) + 3-tile
       IR/QE/why-it-matters grid + Side-by-side pair.
       ==================================================================== */
    {
      id: 'monetary-big-picture',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 1 of 6',
      title: 'Monetary policy – the big picture',
      lede: 'Monetary policy changes interest rates and monetary conditions to influence aggregate demand.',
      ledeStyle: 'plain',

      tip: { icon: '🔒', tone: 'green', text: 'Demand-side monetary policy works by shifting <strong>aggregate demand</strong>.' },

      flowTitle: 'THE CORE IDEA',
      flowEmoji: '💡',
      flow: [
        { tone: 'green',  icon: '🏛️', title: 'Bank of England changes Bank Rate or uses QE', sub: 'The central bank acts on interest rates and liquidity.' },
        { tone: 'blue',   icon: '%',  title: 'Borrowing, saving, asset prices and the exchange rate change', sub: 'Monetary conditions in the economy shift.' },
        { tone: 'purple', icon: '👥', title: 'Household spending, business investment and net exports change', sub: 'Key components of AD are affected.' },
        { tone: 'amber',  icon: '📊', title: 'Aggregate demand shifts', sub: '<strong>AD₀ → AD₁</strong>. Expansionary shifts right; contractionary shifts left.' },
        { tone: 'rose',   icon: '🎯', title: 'Real output, jobs and inflation change', sub: 'The economy moves towards a new position.' }
      ],

      causesLabel: 'TWO LEVERS, ONE TARGET',
      causesEmoji: '🎯',
      causesStyle: 'tinted-flat',
      causesCols: 3,
      causes: [
        { tone: 'green',  icon: '%',  head: 'Interest rates',
          body: 'Lower rates reduce borrowing costs and encourage spending and investment. Higher rates do the opposite.' },
        { tone: 'blue',   icon: '🏛️', head: 'QE',
          body: 'Quantitative easing increases money in the economy and lowers long-term rates, boosting demand.' },
        { tone: 'purple', icon: '🎯', head: 'Why it matters',
          body: 'Monetary policy helps stabilise growth, employment and inflation when the economy moves off target.' }
      ],

      causes2Label: 'THE BANK OF ENGLAND & THE MPC',
      causes2Emoji: '🏛️',
      causes2Style: 'tinted-flat',
      causes2Cols: 3,
      causes2: [
        { tone: 'blue',   icon: '👥', head: '9 members',
          body: 'The Monetary Policy Committee has <strong>5 internal Bank staff</strong> (Governor, 3 Deputy Governors, Chief Economist) plus <strong>4 external experts</strong> appointed by the Chancellor.' },
        { tone: 'green',  icon: '📅', head: '8 meetings a year',
          body: 'Decides Bank Rate and QE by majority vote. Individual votes are <strong>published</strong> – disagreements are visible to markets and shape forward-rate expectations.' },
        { tone: 'purple', icon: '🎯', head: 'Independent since May 1997',
          body: 'Gordon Brown granted the BoE operational independence in his first week as Chancellor. The Treasury sets the target (<strong>2% CPI symmetric</strong>); the MPC chooses the instrument settings.' }
      ],

      pairLabel: 'EXPANSIONARY VS CONTRACTIONARY',
      pairEmoji: '⚖️',
      left: {
        tone: 'green', icon: '⬆️', iconStyle: 'circle',
        label: 'Expansionary monetary policy',
        text: '<ul style="margin:0;padding:0 0 0 18px;font-size:13px;color:#0B1426;line-height:1.7;"><li>Lower interest rates</li><li>QE / looser conditions</li><li>AD shifts <strong>right</strong></li><li>Used when growth is weak</li></ul>'
      },
      right: {
        tone: 'rose', icon: '⬇️', iconStyle: 'circle',
        label: 'Contractionary monetary policy',
        text: '<ul style="margin:0;padding:0 0 0 18px;font-size:13px;color:#0B1426;line-height:1.7;"><li>Higher interest rates</li><li>Tighter monetary conditions</li><li>AD shifts <strong>left</strong></li><li>Used when inflation is too high</li></ul>'
      },

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: '<strong>Monetary policy acts on demand</strong> – it is different from supply-side policy, which aims to raise productive capacity.' },

      conclusion: {
        title: 'Big idea',
        text: 'Monetary policy is the <strong>central bank\'s demand-management toolkit</strong> – Bank Rate and QE acting on AD.'
      },
      examEdge: 'Always state whether the policy is <strong>expansionary or contractionary</strong>, then trace the AD effect – output, employment, prices – in that order. Mark schemes reward the chain, not the definition alone.',
      tipLate: {
        icon: '⚠️',
        tone: 'rose',
        text: '<strong>Common trap – "Bank Rate is what banks charge their customers."</strong> No. Bank Rate is the <em>policy rate</em> at which the BoE lends to commercial banks. Commercial mortgage and loan rates include a <strong>spread above Bank Rate</strong> for risk, cost and profit. A 0.5% rise in Bank Rate may translate to a 0.6–1.0% rise in a mortgage rate depending on funding conditions – or no change at all if banks are flush with deposits.'
      }
    },

    /* ====================================================================
       CARD 2 – Expansionary monetary policy in action
       Pattern: Decompose-a-diagram (EDL ad-shift-right hero) +
       Sequential transmission chain + 3-tile when-used + 3-step why-it-works.
       Branching Bank Rate / QE step consolidated into one tile.
       ==================================================================== */
    {
      id: 'expansionary-monetary-action',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 2 of 6',
      title: 'Expansionary monetary policy in action',
      lede: 'When the economy is weak, lower interest rates can boost aggregate demand.',
      ledeStyle: 'plain',

      tip: { icon: '🔒', tone: 'green', text: 'Lower rates make borrowing <strong>cheaper</strong> and reduce the reward from saving.' },

      // Stepped interactive diagram with Classical/Keynesian toggle –
      // monetary expansion drives the same AD-right shift fiscal C2 uses,
      // so the SVG spec is reused; only the per-step copy changes.
      interactiveDiagram: {
        svgKey: 'adShiftClassicalKeynesian',
        label: 'EXPANSIONARY MONETARY POLICY – AD SHIFTS RIGHT',
        emoji: '📊',
        layers: ['idl-1', 'idl-2'],
        inverseLayers: ['idl-old-solid'],
        perspectives: ['classical', 'keynesian'],
        perspectiveLabels: { classical: 'Classical view', keynesian: 'Keynesian view' },
        views: [
          {
            label: 'Weak economy', show: [],
            keynesian: {
              tone: 'amber',
              head: 'Keynesian view – spare capacity at E₁.',
              body: ['AD₁ meets AS on its <strong>rising range</strong>, at E₁.', 'Output Y₁ sits <em>below</em> full capacity Yf – there are idle resources monetary stimulus could put to work.'] },
            classical: {
              tone: 'purple',
              head: 'Classical view – at capacity at E₁.',
              body: ['Classical economists draw a <strong>vertical LRAS at Yf</strong>: in the long run the economy always returns to full capacity.', 'AD₁ meets LRAS at E₁, with output fixed at Yf and price level P₁.'] }
          },
          {
            label: 'Lower Bank Rate / QE', show: ['idl-1'],
            keynesian: {
              tone: 'amber',
              head: 'Lower rates / QE shift AD right to AD₂.',
              body: ['Cheaper borrowing raises C and I; a weaker pound lifts net exports.', 'The whole AD curve shifts rightward from AD₁ to AD₂ – identical in both views.'] },
            classical: {
              tone: 'purple',
              head: 'Lower rates / QE shift AD right to AD₂.',
              body: ['Cheaper borrowing raises C and I; a weaker pound lifts net exports.', 'The whole AD curve shifts rightward from AD₁ to AD₂ – identical in both views.'] }
          },
          {
            label: 'New equilibrium', show: ['idl-1', 'idl-2'],
            keynesian: {
              tone: 'green',
              head: 'Output AND prices rise (E₂).',
              body: ['E₂ sits up and to the right: <strong>Y₂ &gt; Y₁ and P₂ &gt; P₁</strong>.', 'Monetary stimulus <em>works</em> – but the output gain shrinks and inflation grows as the economy nears Yf.'],
              analysis: 'Keynesian verdict: with spare capacity, looser monetary policy delivers real output and jobs (plus some inflation). The closer the economy is to Yf, the steeper AS becomes and the more of the AD shift leaks into prices rather than output.' },
            classical: {
              tone: 'purple',
              head: 'ONLY prices rise (E₂).',
              body: ['E₂ sits directly above E₁: <strong>output stays at Yf, P₂ ≫ P₁</strong>.', 'Extra spending bids up prices against a fixed supply – the rate cut feeds inflation, not output.'],
              analysis: 'Classical verdict: in the long run the economy is already at capacity, so monetary stimulus is <strong>purely inflationary</strong> – it cannot raise real output. Only supply-side policy can shift LRAS right and lift Yf. This is the heart of the rules-vs-discretion / monetarist case against active demand management.' }
          }
        ]
      },

      flowTitle: 'THE TRANSMISSION CHAIN',
      flowEmoji: '🔗',
      flow: [
        { tone: 'rose',   icon: '📉', title: 'Weak economy',                       sub: 'Recession or low AD; spare capacity exists.' },
        { tone: 'green',  icon: '🏛️', title: 'Lower Bank Rate or QE',             sub: 'Central bank cuts the rate <em>and/or</em> buys assets to push yields down.' },
        { tone: 'blue',   icon: '💳', title: 'Cheaper borrowing, less saving',     sub: 'Households and firms find borrowing cheaper and saving less rewarding.' },
        { tone: 'purple', icon: '🛒', title: 'Consumption, investment and net exports rise', sub: 'C and I rise; a weaker pound makes X cheaper abroad and M dearer at home.' },
        { tone: 'amber',  icon: '📊', title: 'AD shifts right',                    sub: '<strong>AD₁ → AD₂</strong>. The new equilibrium is at higher output.' },
        { tone: 'green',  icon: '😊', title: 'Output, jobs and confidence rise',   sub: 'Real GDP and employment rise; expectations improve and feed back into more spending.' }
      ],

      bottomTip: { icon: '⚠️', tone: 'amber', text: 'If the economy is <strong>near capacity</strong>, the same rate cut may produce more inflation than extra output – the AD shift hits SRAS\'s steep section.' },

      causesLabel: 'WHEN IT IS USED',
      causesEmoji: '🎯',
      causesStyle: 'tinted-flat',
      causesCols: 3,
      causes: [
        { tone: 'green',  icon: '📉', head: 'Recession',              body: 'Weak demand and falling output – lower rates can support recovery.' },
        { tone: 'blue',   icon: '👷', head: 'High unemployment',      body: 'Extra demand supports jobs.' },
        { tone: 'purple', icon: '📏', head: 'Low inflation pressure', body: 'More room to stimulate without overshooting the 2% target.' }
      ],

      flowBottomTitle: 'WHY IT CAN WORK',
      flowBottomEmoji: '⚙️',
      flowBottom: [
        { tone: 'green',  icon: '💳', title: 'Cheaper credit',                    sub: 'Households and firms spend more once borrowing costs fall.' },
        { tone: 'blue',   icon: '🔀', title: 'Multiplier can amplify the effect', sub: 'Higher spending creates knock-on rounds of income and spending.' },
        { tone: 'purple', icon: '📈', title: 'Spare capacity means output can rise', sub: 'Less inflation at first if the economy has unused resources.' }
      ],

      conclusion: { title: 'Big idea', text: 'Expansionary monetary policy <strong>fills a demand gap</strong>.' },
      examEdge: 'Trace the chain – <strong>lower rates → stronger AD → then output, jobs and prices</strong>. Effectiveness depends on confidence and on whether banks are <em>willing to lend</em>. After 2008 the BoE cut rates from 5% to 0.5% and still needed QE because the banking system was repairing balance sheets.',
      economistQuote: {
        portraitKey: 'economistKeynes',
        tone: 'amber',
        label: 'Economist insight: Keynes on the limits of monetary stimulus',
        quote: 'If, however, we are tempted to assert that money is the drink which stimulates the system to activity, we must remind ourselves that there may be several slips between the cup and the lip.',
        attribution: 'John Maynard Keynes, <em>The General Theory of Employment, Interest and Money</em> (1936)'
      }
    },

    /* ====================================================================
       CARD 3 – The monetary transmission mechanism
       Pattern: Spectrum / regime grid – the five channels through which
       Bank Rate changes work, plus strong-vs-weak conditions pair and a
       "why it matters" flow. (Mockup shows hub-and-spoke; rendered here as
       a 5-col causes grid – the channels themselves are the lesson.)
       ==================================================================== */
    {
      id: 'monetary-transmission-mechanism',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 3 of 6',
      title: 'The monetary transmission mechanism',
      lede: 'Interest-rate changes work through several channels, not just one.',
      ledeStyle: 'plain',

      tip: { icon: '🔒', tone: 'green', text: 'Monetary policy affects demand through <strong>borrowing, wealth, confidence and the exchange rate</strong>.' },

      causesLabel: 'THE FIVE CHANNELS',
      causesEmoji: '🔀',
      causesStyle: 'numbered',
      causesCols: 5,
      causesFirst: true,
      causes: [
        { tone: 'green',  icon: '🛒', head: 'Consumption',
          body: 'Cheaper credit and lower mortgage costs raise household spending.' },
        { tone: 'blue',   icon: '🏭', head: 'Investment',
          body: 'Lower borrowing costs encourage firms to invest.' },
        { tone: 'purple', icon: '🏠', head: 'Housing and wealth',
          body: 'Higher asset and house prices support spending through the wealth effect.' },
        { tone: 'amber',  icon: '🌐', head: 'Exchange rate',
          body: 'Lower UK rates weaken sterling, raising net exports (X up, M down).' },
        { tone: 'rose',   icon: '💬', head: 'Confidence and expectations',
          body: 'Signals about future policy influence behaviour today – the announcement effect.' }
      ],

      pairLabel: 'WHY THE EFFECT MAY BE STRONG OR WEAK',
      pairEmoji: '⚖️',
      left: {
        tone: 'green', icon: '✅', iconStyle: 'circle',
        label: 'Stronger effect',
        text: '<ul style="margin:0;padding:0 0 0 18px;font-size:13px;color:#0B1426;line-height:1.8;"><li>Confident consumers and firms</li><li>Banks willing to lend</li><li>Borrowers sensitive to rates</li><li>Spare capacity exists</li></ul>'
      },
      right: {
        tone: 'rose', icon: '❌', iconStyle: 'circle',
        label: 'Weaker effect',
        text: '<ul style="margin:0;padding:0 0 0 18px;font-size:13px;color:#0B1426;line-height:1.8;"><li>Confidence is low</li><li>Banks restrict lending</li><li>Rates already very low (liquidity trap)</li><li>Households choose to repay debt</li></ul>'
      },

      flowBottomTitle: 'WHY IT MATTERS',
      flowBottomEmoji: '🎯',
      flowBottom: [
        { tone: 'green',  icon: '📈', title: 'Higher AD',                  sub: 'Spending rises through multiple channels.' },
        { tone: 'blue',   icon: '🏭', title: 'More output',                sub: 'Firms produce and sell more.' },
        { tone: 'purple', icon: '👥', title: 'More jobs',                  sub: 'Employment rises.' },
        { tone: 'amber',  icon: '📊', title: 'Pressure on inflation',      sub: 'Especially as the economy approaches capacity.' },
        { tone: 'rose',   icon: '⚖️', title: 'Budget balance may improve', sub: 'Higher employment and consumption raise tax receipts.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'The <strong>same rate cut</strong> can have different effects at different times – the strength of each channel depends on the state of the economy.' },

      conclusion: { title: 'Big idea', text: 'Monetary policy works through <strong>transmission channels, not mechanical certainty</strong>.' },
      examEdge: 'Name the channel – <strong>borrowing, investment, wealth, exchange rate or confidence</strong> – before explaining the effect. A* answers acknowledge that the channels can offset each other (e.g. weaker sterling raises X but also raises imported inflation).'
    },

    /* ====================================================================
       CARD 4 – Cooling inflation: contractionary monetary policy
       Pattern: Decompose-a-diagram (EDL ad-shift-left hero) +
       Sequential cool-down chain + 3-tile when-used + Side-by-side
       gain-vs-cost trade-off. Mirror of Card 2.
       ==================================================================== */
    {
      id: 'contractionary-monetary',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 4 of 6',
      title: 'Cooling inflation – contractionary monetary policy',
      lede: 'When demand is too strong, higher interest rates can reduce inflationary pressure.',
      ledeStyle: 'plain',

      tip: { icon: '🔒', tone: 'green', text: 'Higher rates <strong>dampen borrowing and spending</strong>, shifting AD left.' },

      // Stepped interactive diagram with Classical/Keynesian toggle –
      // monetary tightening drives the same AD-left shift fiscal C4 uses,
      // so the SVG spec is reused; only the per-step copy changes.
      interactiveDiagram: {
        svgKey: 'adShiftLeftClassicalKeynesian',
        label: 'CONTRACTIONARY MONETARY POLICY – AD SHIFTS LEFT',
        emoji: '📊',
        layers: ['idl-1', 'idl-2'],
        inverseLayers: ['idl-old-solid'],
        perspectives: ['classical', 'keynesian'],
        perspectiveLabels: { classical: 'Classical view', keynesian: 'Keynesian view' },
        views: [
          {
            label: 'Overheating', show: [],
            keynesian: {
              tone: 'amber',
              head: 'Keynesian view – near capacity at E₁.',
              body: ['AD₁ meets AS on its <strong>steep range</strong>, just below Yf.', 'Demand has run ahead of capacity – extra spending is now leaking mostly into the price level.'] },
            classical: {
              tone: 'purple',
              head: 'Classical view – at capacity at E₁.',
              body: ['Classical economists draw a <strong>vertical LRAS at Yf</strong>: in the long run the economy returns to full capacity.', 'AD₁ meets LRAS at E₁ – output is fixed at Yf, the price level sits at P₁.'] }
          },
          {
            label: 'Higher Bank Rate', show: ['idl-1'],
            keynesian: {
              tone: 'amber',
              head: 'A higher Bank Rate shifts AD left to AD₂.',
              body: ['Costlier borrowing weakens C and I; a stronger pound drags net exports.', 'The whole AD curve shifts leftward from AD₁ to AD₂ – identical in both views.'] },
            classical: {
              tone: 'purple',
              head: 'A higher Bank Rate shifts AD left to AD₂.',
              body: ['Costlier borrowing weakens C and I; a stronger pound drags net exports.', 'The whole AD curve shifts leftward from AD₁ to AD₂ – identical in both views.'] }
          },
          {
            label: 'New equilibrium', show: ['idl-1', 'idl-2'],
            keynesian: {
              tone: 'blue',
              head: 'Output AND prices fall (E₂).',
              body: ['E₂ sits down and to the left: <strong>Y₂ &lt; Y₁ and P₂ &lt; P₁</strong>.', 'Near capacity AS is steep, so the early output cost is small – most of the cooling lands in the price level. Push tightening too far and the output cost grows.'],
              analysis: 'Keynesian verdict: when inflation is demand-driven and the economy is near capacity, higher rates <strong>cool prices with limited output sacrifice</strong>. Against a supply-side shock (e.g. an energy crisis), the same tightening hurts output without addressing the root cause – judgement calls 2021–23 hinge on this distinction.' },
            classical: {
              tone: 'purple',
              head: 'ONLY prices fall (E₂).',
              body: ['E₂ sits directly below E₁: <strong>output stays at Yf, P₂ &lt; P₁</strong>.', 'Less spending against a fixed supply lowers the price level – no long-run output cost.'],
              analysis: 'Classical verdict: in the long run output is anchored at Yf, so contractionary policy is <strong>purely disinflationary</strong>. The cost of disinflation is a short-run adjustment, not a long-run loss – central-bank credibility is what determines how painful that adjustment turns out to be.' }
          }
        ]
      },

      flowTitle: 'THE COOL-DOWN CHAIN',
      flowEmoji: '❄️',
      flow: [
        { tone: 'rose',   icon: '🌡️', title: 'Overheating economy',                  sub: 'Demand-pull inflation pressure; the economy is near capacity.' },
        { tone: 'green',  icon: '🏛️', title: 'Higher Bank Rate',                    sub: 'The MPC raises the policy rate to dampen demand.' },
        { tone: 'blue',   icon: '💷', title: 'More saving and less borrowing',       sub: 'Saving becomes more rewarding; new loans become more expensive.' },
        { tone: 'purple', icon: '🛒', title: 'Consumption, investment and net exports weaken', sub: 'Households cut spending; firms postpone capex; sterling strengthens, hurting X.' },
        { tone: 'amber',  icon: '📊', title: 'AD shifts left',                       sub: '<strong>AD₁ → AD₂</strong>. Inflation pressure eases, but growth may slow.' }
      ],

      causesLabel: 'WHEN IT IS USED',
      causesEmoji: '🎯',
      causesStyle: 'tinted-flat',
      causesCols: 3,
      causes: [
        { tone: 'green',  icon: '📈', head: 'Demand-pull inflation', body: 'Spending is rising too fast – cooling demand reduces the pressure.' },
        { tone: 'blue',   icon: '🌡️', head: 'Overheating',           body: 'Economy is operating near full capacity.' },
        { tone: 'purple', icon: '🛡️', head: 'Policy credibility',    body: 'Helps anchor inflation expectations and protect the 2% target.' }
      ],

      pairLabel: 'THE TRADE-OFF',
      pairEmoji: '⚖️',
      left: {
        tone: 'green', icon: '✅', iconStyle: 'circle',
        label: 'THE GAIN',
        text: '<ul style="margin:0;padding:0 0 0 18px;font-size:13px;color:#0B1426;line-height:1.7;"><li>Lower inflation pressure</li><li>More stable expectations</li><li>Can support the inflation target</li></ul>'
      },
      right: {
        tone: 'rose', icon: '❌', iconStyle: 'circle',
        label: 'THE COST',
        text: '<ul style="margin:0;padding:0 0 0 18px;font-size:13px;color:#0B1426;line-height:1.7;"><li>Slower real GDP growth</li><li>Weaker employment</li><li>Higher mortgage costs</li><li>Political difficulty</li></ul>'
      },

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Contractionary monetary policy is more likely to reduce inflation when <strong>excess demand</strong> is the main cause – not supply-side cost shocks (energy, food).' },

      conclusion: { title: 'Big idea', text: 'Cooling demand can <strong>steady prices, but it may also slow the economy</strong>.' },
      examEdge: 'Do not say higher rates always cut inflation – <strong>explain the context</strong> and the trade-off. The BoE\'s 0.1% → 5.25% cycle (2021–23) tamed demand-side pressures but did little about the global energy shock – which is why headline CPI took ~24 months to return to target.'
    },

    /* ====================================================================
       CARD 5 – Beyond Bank Rate: QE and the monetary toolkit
       Pattern: Side-by-side pair (conventional vs unconventional) +
       Sequential 5-step "how QE works" flow + 5-tile toolkit grid +
       3-step why-distinction-matters flow.
       ==================================================================== */
    {
      id: 'qe-and-monetary-toolkit',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 5 of 6',
      title: 'Beyond Bank Rate – QE and the monetary toolkit',
      lede: 'When ordinary rate cuts are not enough, central banks can use unconventional tools.',
      ledeStyle: 'plain',

      tip: { icon: '🔒', tone: 'green', text: 'QE works by <strong>buying assets to lower yields</strong> and support demand.' },

      pairLabel: 'CONVENTIONAL VS UNCONVENTIONAL',
      pairEmoji: '⚖️',
      pairFirst: true,
      left: {
        tone: 'green', icon: '🏛️', iconStyle: 'circle',
        label: 'Conventional monetary policy',
        text: '<ul style="margin:0;padding:0 0 0 18px;font-size:13px;color:#0B1426;line-height:1.7;"><li><strong>Main tool</strong>: Bank Rate</li><li>Influences borrowing and saving costs</li><li>Usually the first response</li></ul><div style="margin-top:12px;padding:10px 12px;background:#fff;border:1px solid #D1FAE5;border-radius:8px;font-size:12.5px;color:#0B1426;line-height:1.6;text-align:center;"><strong>Bank Rate</strong> → Borrowing &amp; saving costs → AD &amp; inflation</div>'
      },
      right: {
        tone: 'amber', icon: '🧰', iconStyle: 'circle',
        label: 'Unconventional policy',
        text: '<ul style="margin:0;padding:0 0 0 18px;font-size:13px;color:#0B1426;line-height:1.7;"><li><strong>QE</strong>, forward guidance, funding schemes</li><li>Used when rates are very low (the <em>zero lower bound</em>)</li><li>Or when the economy is in deep distress</li></ul><div style="margin-top:12px;padding:10px 12px;background:#fff;border:1px solid #FCD34D;border-radius:8px;font-size:12.5px;color:#0B1426;line-height:1.6;text-align:center;"><strong>Future path signalled</strong> → Expectations adjust → Government bonds bought</div>'
      },

      flowTitle: 'HOW QE WORKS',
      flowEmoji: '⚙️',
      flow: [
        { tone: 'purple', icon: '🏛️', title: 'Bank of England buys bonds',          sub: 'Mostly government bonds (gilts), some corporate.' },
        { tone: 'purple', icon: '📄', title: 'Bond prices rise and yields fall',     sub: 'Bond price ↑ ⇒ yield ↓. Long-term interest rates fall.' },
        { tone: 'purple', icon: '💧', title: 'Liquidity rises and market rates fall', sub: 'Banks get fresh reserves and find cheaper funding.' },
        { tone: 'purple', icon: '📈', title: 'Asset prices and lending may increase', sub: 'Investors rebalance into riskier assets; lending conditions ease.' },
        { tone: 'purple', icon: '🛒', title: 'Consumption, investment and AD rise',   sub: 'Wealth and credit channels feed into spending.' }
      ],

      causesLabel: 'WHAT IS IN THE TOOLKIT?',
      causesEmoji: '🧰',
      causesStyle: 'tinted-flat',
      causesCols: 5,
      causes: [
        { tone: 'green',  icon: '🏛️', head: 'Bank Rate',                       body: 'Sets the cost of central bank credit.' },
        { tone: 'amber',  icon: '💰', head: 'QE',                               body: 'Buy assets to lower yields and support activity.' },
        { tone: 'blue',   icon: '💬', head: 'Forward guidance',                body: 'Signal future policy to shape expectations.' },
        { tone: 'purple', icon: '🤝', head: 'Funding / lending support',       body: 'Provide liquidity to banks and markets when stressed.' },
        { tone: 'rose',   icon: '📢', head: 'Communication / expectations',    body: 'Influence confidence and future behaviour.' }
      ],

      flowBottomTitle: 'WHY THIS DISTINCTION MATTERS',
      flowBottomEmoji: '🎯',
      flowBottom: [
        { tone: 'green',  icon: '%',  title: 'Interest rates are the normal tool',          sub: 'Bank Rate changes affect borrowing, saving and overall demand.' },
        { tone: 'amber',  icon: '🆘', title: 'QE is used when rates are already very low',  sub: 'When more rate cuts are not possible or not effective.' },
        { tone: 'blue',   icon: '🎯', title: 'Both aim to influence AD and inflation',       sub: 'They work through different channels but share the same objectives.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: '<strong>QE is not the same as printing money</strong> to hand directly to households – it works through asset markets and lending conditions. The UK BoE\'s QE programme peaked at <strong>£895bn</strong> (2009–2021); unwind began in 2022.' },

      conclusion: { title: 'Big idea', text: 'Monetary policy is <strong>a toolkit, not just one interest-rate lever</strong>.' },
      examEdge: 'Distinguish clearly between <strong>changing Bank Rate</strong> (price of credit) and <strong>using QE</strong> (quantity of money). Top answers also name forward guidance as a separate channel – the credibility of the announcement does work before any actual asset purchase.'
    },

    /* ====================================================================
       CARD 6 – Judging monetary policy
       Pattern: Evidence-then-verdict – Strengths/Limits pair, 6-question
       judgement frame, 4-step "how to write it" flow, synthesis verdict.
       Mirror of fiscal Card 6.
       ==================================================================== */
    {
      id: 'judging-monetary-policy',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 6 of 6',
      title: 'Judging monetary policy',
      lede: 'Monetary policy can stabilise demand, but its success depends on timing, context and transmission.',
      ledeStyle: 'plain',

      tip: { icon: '✅', tone: 'green', text: 'Good evaluation asks <strong>when</strong> monetary policy will be strong, weak, risky or appropriate.' },

      pairLabel: 'STRENGTHS AND LIMITS',
      pairEmoji: '⚖️',
      pairFirst: true,
      left: {
        tone: 'green', icon: '👍', iconStyle: 'circle',
        label: 'STRENGTHS',
        text: '<ul style="margin:0;padding:0 0 0 18px;font-size:13px;color:#0B1426;line-height:1.8;"><li>Flexible and reversible</li><li>Set by an <strong>independent</strong> central bank</li><li>Can act across the whole economy</li><li>No direct rise in government spending</li></ul>'
      },
      right: {
        tone: 'rose', icon: '👎', iconStyle: 'circle',
        label: 'LIMITATIONS',
        text: '<ul style="margin:0;padding:0 0 0 18px;font-size:13px;color:#0B1426;line-height:1.8;"><li>Time lags</li><li>Weak effect if confidence is low</li><li>Less power when rates are already low (ZLB)</li><li>Can hurt borrowers and savers differently</li><li>May not fix cost-push inflation</li></ul>'
      },

      causesLabel: 'THE JUDGEMENT FRAME',
      causesEmoji: '🎯',
      causesStyle: 'numbered',
      causesCols: 3,
      causes: [
        { tone: 'purple', icon: '📊', head: 'How high is inflation?',                              body: 'A bigger gap from the 2% target means a stronger case for action.' },
        { tone: 'purple', icon: '🌡️', head: 'How much spare capacity exists?',                   body: 'Spare capacity favours output; tight capacity favours inflation.' },
        { tone: 'purple', icon: '🔀', head: 'How strong is the transmission likely to be?',       body: 'Depends on the five channels and on banks\' willingness to lend.' },
        { tone: 'purple', icon: '🏠', head: 'Are households and firms interest-sensitive?',       body: 'Variable-rate mortgages and rate-dependent investment make policy bite faster.' },
        { tone: 'purple', icon: '🏦', head: 'What is happening to confidence and banks?',         body: 'Weak confidence or stressed banks blunt the effect.' },
        { tone: 'purple', icon: '🏷️', head: 'Is the inflation problem demand-pull or cost-push?', body: 'Monetary policy is strongest against demand-pull, weakest against cost-push.' }
      ],

      causes2Label: 'POLICY RESPONSES TO HISTORICAL CRISES',
      causes2Emoji: '📚',
      causes2Style: 'tinted-flat',
      causes2Cols: 3,
      causes2: [
        { tone: 'rose',  icon: '🏚️', head: 'Great Depression (1929–33)',
          body: '<strong>Monetarist reading (Friedman & Schwartz, 1963):</strong> the Fed let the money supply collapse by a third – a policy failure. <strong>Bernanke at the Fed in 2008</strong>: <em>"We did it. We\'re very sorry. But thanks to you, we won\'t do it again."</em> Bernanke explicitly cited the Depression lesson to justify aggressive QE.' },
        { tone: 'amber', icon: '🏦', head: '2008 GFC – BoE response',
          body: 'Bank Rate slashed from <strong>5% → 0.5%</strong> (Oct 2008 – Mar 2009). First QE programme £200bn (Mar 2009), eventually peaking at <strong>£895bn</strong> (Nov 2020). Coordinated with Fed and ECB; even at the zero lower bound, balance-sheet expansion kept transmitting.' },
        { tone: 'purple', icon: '🔥', head: '2021–23 hiking cycle',
          body: 'Bank Rate raised <strong>0.1% → 5.25%</strong> across 14 consecutive meetings (Dec 2021 – Aug 2023) to break the post-COVID + energy-shock inflation. Tamed demand-side pressure but couldn\'t fix the cost-push energy shock directly – why CPI took ~24 months to return to target.' }
      ],

      flowBottomTitle: 'HOW TO WRITE IT',
      flowBottomEmoji: '✏️',
      flowBottom: [
        { tone: 'green',  icon: '🔍', title: 'Identify',  sub: 'State whether policy is expansionary or contractionary.' },
        { tone: 'blue',   icon: '🔗', title: 'Trace',     sub: 'Explain the AD mechanism via a named channel.' },
        { tone: 'purple', icon: '⚖️', title: 'Evaluate',  sub: 'Weigh strengths, limits and context.' },
        { tone: 'amber',  icon: '🎯', title: 'Judge',     sub: 'Reach a balanced, context-based conclusion.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Monetary policy is usually strongest when inflation is <strong>demand-led</strong> and the <strong>transmission channels are working</strong>.' },

      conclusion: { title: 'Big idea', text: 'Monetary policy is <strong>powerful when it fits the problem and the transmission works</strong>.' },
      examEdge: 'Top answers move beyond definition – they <strong>trace the chain</strong>, then <strong>evaluate using context</strong>. Tie each strength and limitation to the six judgement-frame questions and a UK example (e.g. 2008 BoE QE, 2021–23 hiking cycle, the cost-push energy shock that monetary policy could not fix directly).',
      economistQuote: {
        portraitKey: 'economistFriedman',
        tone: 'amber',
        label: 'Economist insight: Friedman on inflation as a hidden tax',
        quote: 'Inflation is the one form of taxation that can be imposed without legislation.',
        attribution: 'Milton Friedman, <em>Money Mischief</em> (1992)'
      }
    }

  ]
};
