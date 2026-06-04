/* ==========================================================================
   Demand-side Policies: Fiscal — Edexcel A Theme 2.6.2 (fiscal half).

   Six-card Learn-It build assembled from Roger's mockup pipeline (six
   ChatGPT mockup images, one per card, 2026-06-04). Pedagogy:
     C1 Sequential flow chain — fiscal policy transmission overview
     C2 Decompose-a-diagram + EDL AD-shift-right hero — expansionary
     C3 Interactive multi-state — multiplier round-by-round
     C4 Decompose + EDL AD-shift-left hero — contractionary (mirror of C2)
     C5 Side-by-side pair + tile grid — automatic stabilisers + toolkit
     C6 Evidence-then-verdict — strengths/limits + judgement frame
   ========================================================================== */
window.ECONOS_TOPIC = {
  id:          'demand-side-policies-fiscal',
  topicNum:    '2.6.2',
  theme:       'Theme 2 · The National and Global Economy',
  title:       'Demand-side Policies: Fiscal',
  estTime:     '~15 min',
  goal:        'Use government spending and taxation to manage aggregate demand — without forgetting timing, multipliers and trade-offs.',
  intro: {
    summary:  'Fiscal policy is the government\'s demand-management toolkit. Step through the transmission chain, the multiplier, automatic stabilisers and the judgement frame examiners reward.',
    doInThis: 'Walk the 5-step transmission from policy change to inflation and the budget, model both expansionary and contractionary stances, see how the multiplier amplifies the initial injection, and finish with the strengths-and-limits judgement frame.',
    outcomes: [
      'Explain how G and T changes shift AD',
      'Distinguish expansionary from contractionary fiscal policy',
      'Apply the multiplier (1 / (1 − MPC), 1 / MPW) to an injection',
      'Distinguish automatic stabilisers from discretionary policy',
      'Name the five fiscal-toolkit categories with UK examples',
      'Evaluate fiscal policy using the 6-question judgement frame'
    ],
    tip:      'Fiscal policy targets aggregate demand. Always state the stance, then trace AD, then evaluate the trade-offs.',
    stages: [
      { num: 1, name: 'Learn it', sub: '6 cards', state: 'current' },
      { num: 2, name: 'Link it',  sub: 'Coming soon', state: 'locked' },
      { num: 3, name: 'Land it',  sub: 'Coming soon', state: 'locked' }
    ]
  },
  cards: [

    /* ====================================================================
       CARD 1 — Fiscal policy: the big picture
       Pattern: Sequential flow chain (5-step transmission) + supporting
       3-tile spending/taxation/why-it-matters grid + Side-by-side pair
       for expansionary vs contractionary.
       ==================================================================== */
    {
      id: 'fiscal-big-picture',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 1 of 6',
      title: 'Fiscal policy – the big picture',
      lede: 'Fiscal policy changes government spending and taxation to influence aggregate demand.',
      ledeStyle: 'plain',

      tip: { icon: '✅', tone: 'green', text: 'Demand-side fiscal policy works by shifting <strong>aggregate demand</strong>.' },

      flowTitle: 'THE CORE IDEA',
      flowEmoji: '💡',
      flow: [
        { tone: 'green',  icon: '🏛️', title: 'Government changes G or T', sub: 'The government alters spending (G) or taxation (T).' },
        { tone: 'blue',   icon: '👥', title: 'Household spending and firm demand change', sub: 'Incomes, confidence and costs change, affecting spending decisions.' },
        { tone: 'purple', icon: '📊', title: 'Aggregate demand shifts', sub: '<strong>AD₀ → AD₁</strong>. Expansionary shifts right; contractionary shifts left.' },
        { tone: 'amber',  icon: '📈', title: 'Real output and employment change', sub: 'Higher AD increases real GDP and employment (and vice versa).' },
        { tone: 'rose',   icon: '⚖️', title: 'Inflation and the budget balance may also change', sub: 'Price level and government budget position can be affected.' }
      ],

      causesLabel: 'TWO LEVERS, ONE TARGET',
      causesEmoji: '🎯',
      causesStyle: 'tinted-flat',
      causesCols: 3,
      causes: [
        { tone: 'green', icon: '💷', head: 'Government spending',
          body: 'The government directly buys goods and services or pays wages. This injects demand into the economy.' },
        { tone: 'blue',  icon: '%',  head: 'Taxation',
          body: 'Taxes affect disposable income. Changes in taxes influence consumption, saving and investment.' },
        { tone: 'purple', icon: '🎯', head: 'Why it matters',
          body: 'Fiscal policy is used to stabilise the economy – supporting growth, jobs and keeping inflation in check.' }
      ],

      pairLabel: 'EXPANSIONARY VS CONTRACTIONARY',
      pairEmoji: '⚖️',
      left: {
        tone: 'green', icon: '⬆️', iconStyle: 'circle',
        label: 'Expansionary fiscal policy',
        text: '<ul style="margin:0;padding:0 0 0 18px;font-size:13px;color:#0B1426;line-height:1.7;"><li>Higher G and/or lower T</li><li>AD shifts <strong>right</strong></li><li>Used in recessions to raise demand</li></ul>'
      },
      right: {
        tone: 'rose', icon: '⬇️', iconStyle: 'circle',
        label: 'Contractionary fiscal policy',
        text: '<ul style="margin:0;padding:0 0 0 18px;font-size:13px;color:#0B1426;line-height:1.7;"><li>Lower G and/or higher T</li><li>AD shifts <strong>left</strong></li><li>Used when demand is too strong</li></ul>'
      },

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: '<strong>Fiscal policy acts on demand</strong> – it is different from supply-side policy, which aims to raise productive capacity.' },

      conclusion: {
        title: 'Big idea',
        text: 'Fiscal policy is the government\'s <strong>demand-management toolkit</strong> – two levers (G and T) acting on AD.'
      },
      examEdge: 'Always state whether the policy is <strong>expansionary or contractionary</strong>, then trace the AD effect – output, employment, prices, budget – in that order. Mark schemes reward the chain, not the definition alone.'
    },

    /* ====================================================================
       CARD 2 — Expansionary fiscal policy in action
       Pattern: Decompose-a-diagram (EDL ad-shift-right hero) +
       Sequential transmission chain + 3-tile when-used + 3-step why-it-works.
       FIRST production card using window.ECONOS_DIAGRAMS.
       ==================================================================== */
    {
      id: 'expansionary-fiscal-action',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 2 of 6',
      title: 'Expansionary fiscal policy in action',
      lede: 'When the economy is weak, the government can boost aggregate demand.',
      ledeStyle: 'plain',

      tip: { icon: '✅', tone: 'green', text: 'Higher G or lower T shifts AD <strong>right</strong> and raises demand.' },

      // Standard stepped interactive diagram (chart left, description right,
      // analysis below) on the legacy engine — reuses the hand-tuned
      // adShiftInteractive spec already used in the Aggregate Supply topic.
      // Replaced the earlier static EDL render (v0.46.0) after its
      // auto-placed labels clashed and it couldn't step through views.
      interactiveDiagram: {
        svgKey: 'adShiftInteractive',
        label: 'EXPANSIONARY FISCAL POLICY — AD SHIFTS RIGHT',
        emoji: '📊',
        layers: ['idl-1', 'idl-2'],
        views: [
          { label: 'Weak economy', show: [], tone: 'slate',
            head: 'The starting point — equilibrium at E₁.',
            body: ['AD and SRAS intersect at E₁, giving price level P₁ and real output Y₁.', 'The economy is below capacity, with spare resources.'] },
          { label: 'Higher G / lower T', show: ['idl-1'], tone: 'green',
            head: 'Expansionary fiscal policy shifts AD right to AD₂.',
            body: ['Higher government spending (G) or lower taxation (T) raises C, I and G directly.', 'The whole AD curve shifts rightward from AD₁ to AD₂.'] },
          { label: 'New equilibrium', show: ['idl-1', 'idl-2'], tone: 'green',
            head: 'Output and employment rise — but so does the price level.',
            body: ['The new equilibrium E₂ sits higher up the SRAS curve.', 'Real output rises (Y₂ > Y₁) and the price level rises (P₂ > P₁).'],
            analysis: 'With spare capacity, most of the AD increase becomes extra output and jobs with little inflation. Near full capacity (a steep SRAS), the same shift becomes mostly inflation — which is exactly why stating the output-gap context is the A* move.' }
        ]
      },

      flowTitle: 'THE TRANSMISSION CHAIN',
      flowEmoji: '🔗',
      flow: [
        { tone: 'rose',   icon: '📉', title: 'Weak economy',          sub: 'Recession or low AD; spare capacity exists.' },
        { tone: 'green',  icon: '🏛️', title: 'Higher G or lower T',  sub: 'Government spends more, or households keep more income to spend or save.' },
        { tone: 'blue',   icon: '🛒', title: 'Higher household and business demand', sub: 'More consumption (C) and investment (I) flow into the economy.' },
        { tone: 'purple', icon: '📊', title: 'AD shifts right',       sub: '<strong>AD₀ → AD₁</strong>. The new equilibrium is at higher output.' },
        { tone: 'amber',  icon: '📈', title: 'Real GDP and employment rise', sub: 'Output rises; more people are employed.' },
        { tone: 'green',  icon: '😊', title: 'Confidence improves',   sub: 'Higher income and jobs support expectations and future spending.' }
      ],

      causesLabel: 'WHEN IT IS USED',
      causesEmoji: '🎯',
      causesStyle: 'tinted-flat',
      causesCols: 3,
      causes: [
        { tone: 'green',  icon: '📉', head: 'Recession',         body: 'Weak demand and falling output – fiscal policy can fill the gap.' },
        { tone: 'blue',   icon: '👷', head: 'High unemployment', body: 'Extra demand supports jobs.' },
        { tone: 'purple', icon: '🛡️', head: 'Low confidence',    body: 'Government can step in when private demand is weak.' }
      ],

      flowBottomTitle: 'WHY IT CAN WORK',
      flowBottomEmoji: '⚙️',
      flowBottom: [
        { tone: 'green',  icon: '💉', title: 'Direct injection into demand',     sub: 'Higher G or lower T immediately raises aggregate demand.' },
        { tone: 'blue',   icon: '🔀', title: 'Multiplier can amplify the effect', sub: 'Extra rounds of spending lead to further rounds of income and spending.' },
        { tone: 'purple', icon: '📈', title: 'Spare capacity means output can rise', sub: 'With spare capacity, output can increase without much inflation at first.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Expansionary fiscal policy is usually most effective when <strong>spare capacity exists</strong>.' },

      conclusion: { title: 'Big idea', text: 'Expansionary fiscal policy <strong>fills a demand gap</strong>.' },
      examEdge: 'Trace the chain – <strong>policy change → AD shift → then output, jobs and prices</strong>. State explicitly whether the economy has spare capacity, because that is what determines whether the rise in AD becomes mostly output or mostly inflation.',
      economistQuote: {
        portraitKey: 'economistKeynes',
        tone: 'blue',
        label: 'Economist insight: Keynes on counter-cyclical fiscal policy',
        quote: 'The boom, not the slump, is the right time for austerity at the Treasury.',
        attribution: 'John Maynard Keynes, <em>The Times</em> (1937)'
      }
    },

    /* ====================================================================
       CARD 3 — The multiplier: one injection, many rounds
       Pattern: Interactive multi-state (REUSES multiplierRounds interactive
       from the national-income-and-the-multiplier topic — the same SVG, with
       fiscal-policy framing in the view bodies). Adds larger-vs-smaller pair
       and a "why it matters" flow underneath.
       ==================================================================== */
    {
      id: 'fiscal-multiplier',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 3 of 6',
      title: 'The multiplier – one injection, many rounds',
      lede: 'An initial fiscal boost can create a larger final rise in national income. The same £1 circulates: spending becomes income, income becomes more spending, with leakages at every round.',
      ledeStyle: 'plain',

      tip: { icon: '🔒', tone: 'green', text: 'The multiplier depends on how much extra income is <strong>re-spent</strong>.' },

      notePosition: 'top',
      note: {
        tone: 'blue',
        icon: '🔁',
        head: 'See it in detail',
        text: 'This is the same geometric series unpacked in the <strong>National Income & The Multiplier</strong> topic – here we apply it specifically to fiscal injections (G↑ or T↓).'
      },

      // Reuses the multiplierRounds SVG and the canonical 5-view round-by-round
      // structure (R1=£100m, MPC=0.8 → £500m ceiling). View bodies are rewritten
      // here in fiscal-policy language; the geometric visual is unchanged.
      interactiveDiagram: {
        svgKey: 'multiplierRounds',
        wide: true,
        maxWidth: '100%',
        label: 'Click through the rounds',
        emoji: '🔁',
        layers: ['idl-1', 'idl-2', 'idl-3', 'idl-4'],
        views: [
          {
            label: 'R1: £100m',
            tone: 'blue',
            head: 'Round 1 — the fiscal injection',
            body: 'The government commits £100m of fresh spending – say a transport-infrastructure scheme. That £100m becomes <strong>direct income</strong> for the contractors, workers and suppliers paid by the project.',
            analysis: '<strong>Cumulative income so far: £100m.</strong> Only the initial fiscal injection has hit the economy. AD has shifted right by exactly the amount of the spending – the multiplier hasn\'t kicked in yet.'
          },
          {
            label: '+ R2: £80m',
            tone: 'blue',
            head: 'Round 2 — spending becomes income',
            body: 'Of the £100m, households with MPC = 0.8 re-spend £80m on goods and services. The other £20m leaks to saving, tax and imports. The £80m becomes income for a fresh set of firms and workers.',
            analysis: '<strong>Cumulative income so far: £180m.</strong> AD has now shifted by 1.8× the original injection. The £20m that leaked is gone – it never returns. This is why fiscal multipliers are bigger in <em>closed</em> economies and <em>low-MPS</em> populations.'
          },
          {
            label: '+ R3: £64m',
            tone: 'blue',
            head: 'Round 3 — the chain narrows',
            body: 'Of round 2\'s £80m, MPC = 0.8 → £64m is re-spent and £16m leaks. The pattern is now clear: each round is exactly <strong>MPC × the previous round</strong>.',
            analysis: '<strong>Cumulative income so far: £244m.</strong> Each round contributes a smaller slice because more income has leaked at each prior step. The geometric series: ΔG × (1 + MPC + MPC² + …).'
          },
          {
            label: '+ R4: £51m',
            tone: 'blue',
            head: 'Round 4 — diminishing returns',
            body: 'Round 4 adds £51.2m. Round 5 will add £40.96m. The rounds keep coming forever but each one is 80% of the last – ever-smaller ripples from the original £100m injection.',
            analysis: '<strong>Cumulative income so far: £295.2m.</strong> We\'re past the halfway mark to the ceiling but rounds are getting much smaller. After round 10 each new round contributes less than £15m – the bulk of the multiplier effect lands in the first 5–6 rounds.'
          },
          {
            label: '+ R5 onward → £500m',
            tone: 'rose',
            head: 'The full multiplier effect',
            body: 'The series converges. <strong>Total impact of the £100m fiscal injection: £500m of national income.</strong> The fiscal multiplier here is k = 1/(1−0.8) = 5 – but with real-world leakages (MPS, MPT, MPM) the UK multiplier is typically 1.2–1.7.',
            analysis: '<strong>The infinite sum converges to £100m × 1/(1−0.8) = £500m.</strong> This is why fiscal policy can be powerful even when the headline injection is modest – the geometric series multiplies the AD shift, raising output, jobs and tax revenue along the way.'
          }
        ]
      },

      pairLabel: 'WHAT MAKES IT LARGER OR SMALLER?',
      pairEmoji: '⚖️',
      left: {
        tone: 'green', icon: '⬆️', iconStyle: 'circle',
        label: 'Larger multiplier',
        text: '<ul style="margin:0;padding:0 0 0 18px;font-size:13px;color:#0B1426;line-height:1.8;"><li><strong>High MPC</strong> – households spend a larger share of extra income</li><li><strong>Low leakages</strong> – less income lost to saving, tax and imports</li><li><strong>Spare capacity</strong> – unused resources allow output to expand</li></ul>'
      },
      right: {
        tone: 'rose', icon: '⬇️', iconStyle: 'circle',
        label: 'Smaller multiplier',
        text: '<ul style="margin:0;padding:0 0 0 18px;font-size:13px;color:#0B1426;line-height:1.8;"><li><strong>Low MPC</strong> – households save a larger share of extra income</li><li><strong>Big leakages</strong> – more income lost to saving, tax or imports</li><li><strong>Capacity constraints</strong> – limited resources push up prices instead of output</li></ul>'
      },

      flowBottomTitle: 'WHY IT MATTERS',
      flowBottomEmoji: '🎯',
      flowBottom: [
        { tone: 'green',  icon: '📈', title: 'Higher AD',           sub: 'More spending in the economy.' },
        { tone: 'blue',   icon: '🏭', title: 'More output',         sub: 'Firms produce and sell more.' },
        { tone: 'purple', icon: '👥', title: 'More jobs',           sub: 'Employment increases.' },
        { tone: 'amber',  icon: '💷', title: 'Higher tax revenue',  sub: 'Government receipts go up – one reason the final budget effect may be smaller than the initial spending rise.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'The multiplier is usually stronger when <strong>confidence is high</strong> and firms can respond by expanding output.' },

      conclusion: { title: 'Big idea', text: 'Fiscal policy can work through <strong>knock-on rounds of spending</strong>.' },
      examEdge: 'Use the word <strong>multiplier</strong> only when you explain the <em>repeated re-spending process</em>. A typical UK multiplier is 1.2–1.7 once leakages (MPS, MPT, MPM) are accounted for – far below the textbook k = 5.',
      tipLate: {
        icon: '⚠️',
        tone: 'rose',
        text: '<strong>Common trap — "k = 1/(1−MPC) gives the actual UK multiplier."</strong> No. The simple formula ignores <strong>three real-world leakages</strong>: marginal propensity to save (MPS), to tax (MPT) and to import (MPM). The right denominator is <strong>MPW = MPS + MPT + MPM</strong>. UK estimates from the IMF, OBR and BoE typically land at <strong>k ≈ 1.2–1.7</strong> – an order of magnitude lower than the textbook k = 5 trap. Quoting k = 5 in an essay is the single most common multiplier mistake examiners flag.'
      }
    },

    /* ====================================================================
       CARD 4 — Cooling the economy: contractionary fiscal policy
       Pattern: Decompose-a-diagram (EDL ad-shift-left hero) +
       Sequential cool-down chain + 3-tile when-used + Side-by-side
       gain-vs-cost trade-off. Mirror of Card 2.
       ==================================================================== */
    {
      id: 'contractionary-fiscal',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 4 of 6',
      title: 'Cooling the economy – contractionary fiscal policy',
      lede: 'When demand is too strong, fiscal policy can be used to reduce inflationary pressure.',
      ledeStyle: 'plain',

      tip: { icon: '✅', tone: 'green', text: 'Lower G or higher T shifts AD <strong>left</strong> and cools demand.' },

      // EDL hero — second production card. ad-shift-left intent.
      diagram: {
        version: 1,
        type: 'ad-as',
        intent: 'ad-shift-left',
        viewport: 'card',
        mode: 'learn',
        axes: { x: { label: 'Real GDP' }, y: { label: 'Price level' } },
        teaching: { takeaway: 'Contractionary fiscal policy shifts AD left — price pressure eases, but output and jobs may also weaken.' },
        alt: 'AD/AS diagram showing AD shifting left from AD₁ to AD₂, lowering both real GDP and the price level along an upward-sloping SRAS.'
      },
      diagramLabel: 'AD SHIFTS LEFT',
      diagramEmoji: '📊',
      diagramCaption: 'Lower G or higher T moves AD inward; new equilibrium has lower output and a lower price level.',

      flowTitle: 'THE COOL-DOWN CHAIN',
      flowEmoji: '❄️',
      flow: [
        { tone: 'rose',   icon: '🌡️', title: 'Overheating economy',                  sub: 'Demand is too strong for the economy\'s capacity; inflation rises.' },
        { tone: 'green',  icon: '🏛️', title: 'Lower government spending or higher taxes', sub: 'G falls or T rises, reducing total demand.' },
        { tone: 'blue',   icon: '👥', title: 'Lower disposable income and weaker spending', sub: 'Households have less to spend, so consumption falls.' },
        { tone: 'purple', icon: '📊', title: 'AD shifts left',                        sub: '<strong>AD₁ → AD₂</strong>. The new equilibrium is at lower output.' },
        { tone: 'amber',  icon: '📉', title: 'Inflation pressure eases',              sub: 'But growth and employment may weaken too.' }
      ],

      causesLabel: 'WHEN IT IS USED',
      causesEmoji: '🎯',
      causesStyle: 'tinted-flat',
      causesCols: 3,
      causes: [
        { tone: 'green',  icon: '📈', head: 'Demand-pull inflation', body: 'Spending is rising too fast – cooling demand reduces the pressure.' },
        { tone: 'blue',   icon: '🌡️', head: 'Overheating',           body: 'Economy is operating near full capacity.' },
        { tone: 'purple', icon: '🛡️', head: 'Fiscal restraint',      body: 'Can also help slow the growth of the budget deficit and public debt.' }
      ],

      pairLabel: 'THE TRADE-OFF',
      pairEmoji: '⚖️',
      left: {
        tone: 'green', icon: '✅', iconStyle: 'circle',
        label: 'THE GAIN',
        text: '<ul style="margin:0;padding:0 0 0 18px;font-size:13px;color:#0B1426;line-height:1.7;"><li>Lower inflation pressure</li><li>Smaller current deficit growth</li><li>More stable demand</li></ul>'
      },
      right: {
        tone: 'rose', icon: '❌', iconStyle: 'circle',
        label: 'THE COST',
        text: '<ul style="margin:0;padding:0 0 0 18px;font-size:13px;color:#0B1426;line-height:1.7;"><li>Slower real GDP growth</li><li>Weaker employment</li><li>Political difficulty</li></ul>'
      },

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Contractionary fiscal policy is more likely to reduce inflation when <strong>excess demand</strong> is the main cause – not supply-side cost shocks.' },

      conclusion: { title: 'Big idea', text: 'Cooling demand can <strong>steady prices, but it may also slow the economy</strong>.' },
      examEdge: 'Do not say contractionary policy always cuts inflation – <strong>explain the context</strong> and the trade-off. If inflation is cost-push, AD-side cooling sacrifices output without solving the supply problem.'
    },

    /* ====================================================================
       CARD 5 — Automatic stabilisers and the fiscal toolkit
       Pattern: Side-by-side pair (auto vs discretionary) + 5-tile toolkit
       grid + 3-step why-distinction-matters flow.
       ==================================================================== */
    {
      id: 'automatic-stabilisers-toolkit',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 5 of 6',
      title: 'Automatic stabilisers and the fiscal toolkit',
      lede: 'Some parts of fiscal policy respond automatically – others require deliberate action.',
      ledeStyle: 'plain',

      tip: { icon: '🔒', tone: 'green', text: 'Automatic stabilisers smooth the cycle <strong>without a new policy decision</strong>.' },

      pairLabel: 'AUTOMATIC VS DISCRETIONARY',
      pairEmoji: '⚖️',
      pairFirst: true,
      left: {
        tone: 'green', icon: '⚙️', iconStyle: 'circle',
        label: 'Automatic stabilisers',
        text: '<ul style="margin:0;padding:0 0 0 18px;font-size:13px;color:#0B1426;line-height:1.7;"><li>Progressive income tax</li><li>Unemployment benefits</li><li>Tax receipts rise in booms and fall in recessions</li></ul><div style="margin-top:12px;padding:10px 12px;background:#fff;border:1px solid #D1FAE5;border-radius:8px;font-size:12.5px;color:#0B1426;line-height:1.6;"><strong style="color:#047857;">BOOM</strong>: Incomes rise → higher tax receipts → AD dampened.<br><strong style="color:#B91C1C;">RECESSION</strong>: Incomes fall → lower tax receipts → AD supported.</div>'
      },
      right: {
        tone: 'amber', icon: '🎯', iconStyle: 'circle',
        label: 'Discretionary fiscal policy',
        text: '<ul style="margin:0;padding:0 0 0 18px;font-size:13px;color:#0B1426;line-height:1.7;"><li>Budget decisions to change G or T</li><li>Can target a problem directly</li><li>Usually slower and more political</li></ul><div style="margin-top:12px;padding:10px 12px;background:#fff;border:1px solid #FCD34D;border-radius:8px;font-size:12.5px;color:#0B1426;line-height:1.6;">Policy is decided, then implemented through the <strong>budget process</strong> (Budget statement → legislation → outturn).</div>'
      },

      causesLabel: 'THE FISCAL TOOLKIT',
      causesEmoji: '🧰',
      causesStyle: 'tinted-flat',
      causesCols: 5,
      causes: [
        { tone: 'green',  icon: '🧑‍💼', head: 'Current spending',  body: 'Day-to-day spending on goods and services.' },
        { tone: 'blue',   icon: '🌉',         head: 'Capital spending',  body: 'Investment in infrastructure and long-term assets.' },
        { tone: 'purple', icon: '💷',         head: 'Income tax (direct)', body: 'A <strong>direct tax</strong> on income and profits — paid by the person who legally owes it. Progressive in the UK.' },
        { tone: 'amber',  icon: '🛒',         head: 'Indirect tax',      body: 'A tax on <strong>spending</strong> (VAT, excise duties) — collected by sellers, paid by buyers. Often regressive.' },
        { tone: 'rose',   icon: '👨‍👩‍👧', head: 'Transfers / benefits', body: 'Payments to households (Universal Credit, pensions, child benefit). Do not count in GDP – they redistribute, not produce.' }
      ],

      causes2Label: 'DEFICIT VS SURPLUS — CYCLICAL VS STRUCTURAL',
      causes2Emoji: '⚖️',
      causes2Style: 'tinted-flat',
      causes2Cols: 4,
      causes2: [
        { tone: 'rose',   icon: '📉', head: 'Budget deficit',     body: 'Spending > revenue this year. Government borrows; national debt rises. UK has run a deficit in 18 of the last 20 years.' },
        { tone: 'green',  icon: '📈', head: 'Budget surplus',     body: 'Revenue > spending this year. Government can repay debt or save. The UK last ran a sustained surplus in 1999–2001.' },
        { tone: 'amber',  icon: '🔁', head: 'Cyclical deficit',   body: 'The part of the deficit caused by the economy being below trend — auto-stabilisers at work. Disappears in a boom.' },
        { tone: 'purple', icon: '🏛️', head: 'Structural deficit', body: 'The part that remains even at trend output. A <em>policy choice</em>, not the cycle. The OBR\'s focus when judging fiscal rules.' }
      ],

      flowBottomTitle: 'WHY THIS DISTINCTION MATTERS',
      flowBottomEmoji: '🎯',
      flowBottom: [
        { tone: 'green',  icon: '⚡', title: 'Automatic stabilisers work quickly', sub: 'They respond immediately to changes in the economy.' },
        { tone: 'blue',   icon: '🎯', title: 'Discretionary policy can be more targeted', sub: 'It can focus on specific problems or sectors.' },
        { tone: 'purple', icon: '⚖️', title: 'Both affect the budget balance over the cycle', sub: 'They influence deficits and surpluses in different ways.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'A <strong>budget deficit may rise in a recession automatically</strong> even if no new discretionary policy is announced – the stabilisers are doing the work.' },

      conclusion: { title: 'Big idea', text: 'Fiscal policy is both a <strong>built-in stabiliser</strong> and a <strong>deliberate policy choice</strong>.' },
      examEdge: 'Always distinguish <strong>automatic stabilisers</strong> from <strong>discretionary fiscal policy</strong>. In data-response questions, look for whether a change in the deficit reflects the cycle (auto) or a Budget announcement (discretionary).',
      economistQuote: {
        portraitKey: 'economistFriedman',
        tone: 'amber',
        label: 'Economist insight: Friedman on rules vs discretion',
        quote: 'The Great Depression, like most other periods of severe unemployment, was produced by government mismanagement rather than by any inherent instability of the private economy.',
        attribution: 'Milton Friedman, <em>Capitalism and Freedom</em> (1962)'
      }
    },

    /* ====================================================================
       CARD 6 — Judging fiscal policy
       Pattern: Evidence-then-verdict — Strengths/Limits pair, 6-question
       judgement frame, 4-step "how to write it" flow, synthesis verdict.
       ==================================================================== */
    {
      id: 'judging-fiscal-policy',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 6 of 6',
      title: 'Judging fiscal policy',
      lede: 'Fiscal policy can stabilise demand, but its success depends on context, timing and trade-offs.',
      ledeStyle: 'plain',

      tip: { icon: '✅', tone: 'green', text: 'Good evaluation asks <strong>when</strong> fiscal policy will be strong, weak, risky or appropriate.' },

      pairLabel: 'STRENGTHS AND LIMITS',
      pairEmoji: '⚖️',
      pairFirst: true,
      left: {
        tone: 'green', icon: '👍', iconStyle: 'circle',
        label: 'STRENGTHS',
        text: '<ul style="margin:0;padding:0 0 0 18px;font-size:13px;color:#0B1426;line-height:1.8;"><li>Direct effect on AD</li><li>Can target households, firms or projects</li><li>Automatic stabilisers work quickly</li><li>Can support jobs in recession</li></ul>'
      },
      right: {
        tone: 'rose', icon: '👎', iconStyle: 'circle',
        label: 'LIMITATIONS',
        text: '<ul style="margin:0;padding:0 0 0 18px;font-size:13px;color:#0B1426;line-height:1.8;"><li>Time lags and political delay</li><li>Possible crowding out</li><li>Higher deficits and debt</li><li>Inflation risk if capacity is tight</li><li>Weak effect if confidence is very low</li></ul>'
      },

      causesLabel: 'THE JUDGEMENT FRAME',
      causesEmoji: '🎯',
      causesStyle: 'numbered',
      causesCols: 3,
      causes: [
        { tone: 'purple', icon: '📊', head: 'How big is the output gap?',                    body: 'A larger gap means more room for AD to raise output without inflation.' },
        { tone: 'purple', icon: '🌡️', head: 'How much spare capacity exists?',              body: 'Spare capacity favours output; tight capacity favours inflation.' },
        { tone: 'purple', icon: '🔁', head: 'How strong is the multiplier likely to be?',    body: 'Depends on MPC, leakages and the response of firms.' },
        { tone: 'purple', icon: '📈', head: 'What happens to inflation?',                    body: 'Higher AD can lift prices, especially if the economy is near capacity.' },
        { tone: 'purple', icon: '💷', head: 'What happens to the budget balance and debt?', body: 'Bigger deficits today mean higher debt-servicing costs tomorrow.' },
        { tone: 'purple', icon: '⏰', head: 'Are there time lags or confidence problems?',    body: 'Recognition, decision and impact lags can delay or weaken effects.' }
      ],

      causes2Label: 'POLICY RESPONSES TO HISTORICAL CRISES',
      causes2Emoji: '📚',
      causes2Style: 'tinted-flat',
      causes2Cols: 3,
      causes2: [
        { tone: 'rose',  icon: '🏚️', head: 'Great Depression (1929–39)',
          body: '<strong>Keynesian reading:</strong> Roosevelt\'s <em>New Deal</em> (1933) injected ~5% of US GDP into public works and relief; output recovered. <strong>Classical / Austrian reading:</strong> recovery was uneven; WWII spending arguably mattered more than peacetime stimulus. The debate still shapes how examiners reward fiscal-policy answers.' },
        { tone: 'amber', icon: '🏦', head: '2008 GFC – UK vs US responses',
          body: '<strong>UK (Brown / Darling):</strong> VAT cut 17.5% → 15%, £2.3bn car-scrappage scheme, bank recapitalisation – then sharp pivot to <em>austerity</em> under Cameron / Osborne in 2010. <strong>US (Obama / ARRA, 2009):</strong> $831bn stimulus, larger and longer. The UK\'s smaller, briefer fiscal response is the canonical comparison case.' },
        { tone: 'green', icon: '😷', head: '2020 COVID-19 furlough',
          body: '<strong>UK (Sunak):</strong> £70bn Coronavirus Job Retention Scheme – the largest peacetime fiscal intervention in UK history. Defended at the time on Keynesian grounds (preserve incomes, prevent scarring); criticised later for over-stimulating demand into the 2022 inflation surge.' }
      ],

      flowBottomTitle: 'HOW TO WRITE IT',
      flowBottomEmoji: '✏️',
      flowBottom: [
        { tone: 'green',  icon: '🔍', title: 'Identify',  sub: 'Identify the fiscal stance.' },
        { tone: 'blue',   icon: '🔗', title: 'Trace',     sub: 'Trace the AD mechanism.' },
        { tone: 'purple', icon: '⚖️', title: 'Evaluate',  sub: 'Weigh benefits and drawbacks.' },
        { tone: 'amber',  icon: '🎯', title: 'Judge',     sub: 'Reach a context-based judgement.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'The best judgement depends on <strong>spare capacity, inflation pressure and the government\'s fiscal position</strong>.' },

      conclusion: { title: 'Big idea', text: 'Fiscal policy is <strong>powerful when it fits the economic problem</strong>.' },
      examEdge: 'Top answers move beyond definition – they <strong>trace the chain</strong>, then <strong>evaluate using context</strong>. Tie each strength and limitation to the six judgement-frame questions and a UK example (e.g. 2008 GFC fiscal response, 2020 furlough scheme).',
      economistQuote: {
        portraitKey: 'economistMazzucato',
        tone: 'amber',
        label: 'Economist insight: Mazzucato on the state as market-shaper',
        quote: 'The state has not just fixed market failures – it has actively created and shaped markets. Public investment has led, not followed, in fields from semiconductors to clean energy to the internet itself.',
        attribution: 'Mariana Mazzucato, <em>Mission Economy</em> (2021)'
      }
    }

  ]
};
