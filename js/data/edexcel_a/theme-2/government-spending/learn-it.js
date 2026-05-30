/* ============================================================
   ECONOS – content data for government_spending
   8 cards on G – the only AD component policymakers control directly.
   Edexcel Theme 2.2.4
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'government-spending',
  topicNum: '2.4',
  theme: 'Theme 2 · The National and Global Economy',
  title: 'Government Spending',
  estTime: '10-12 minutes',
  goal: 'Lock in G – the only AD component policymakers control directly – and the conditions that decide whether it works.',

  intro: {
    heroKey: 'heroGovSpending',
    summary: 'Government spending is ~20% of UK AD and the only AD component policymakers can move with a single decision. This topic covers why governments spend, the composition of G, fiscal policy, the budget position, the multiplier, crowding out, automatic stabilisers and how to evaluate fiscal action.',
    doInThis: 'Walk through the four motives for spending, the three types of G, expansionary vs contractionary fiscal policy, deficits and surpluses, the spending multiplier, crowding out, automatic stabilisers, and the six tests for evaluating fiscal action.',
    outcomes: [
      'Explain the four motives for government spending',
      'Distinguish current, capital and transfer payments',
      'Apply expansionary and contractionary fiscal policy',
      'Distinguish cyclical and structural deficits',
      'Apply the spending multiplier ΔY = ΔG × k',
      'Explain crowding out and when it bites',
      'Distinguish automatic stabilisers from discretionary policy',
      'Evaluate the effectiveness of government spending'
    ],
    tip: 'G is the only direct AD lever – but its impact depends on timing, capacity, financing and the cycle.',
    stages: [
      { num: 1, name: 'Learn',  sub: '8 concept cards',                  state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions',    state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [

    /* ── CARD 1 ── Why Governments Spend ─────────────────────────── */
    {
      id: 'why-governments-spend',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'Why Governments Spend',
      lede: 'Governments spend for efficiency, equity and stability reasons – not just to keep services running.',
      ledeStyle: 'plain',

      blocks: [
        { type: 'calloutStrip', tone: 'green', icon: '✅', text: 'Government spending usually responds to market failure, inequality, or macro instability.' },
        { type: 'sectionHeader', icon: '🟦', label: 'THE FOUR MOTIVES' },
        { type: 'grid', cols: 2, children: [
          { type: 'tile', tone: 'green', icon: '💡', head: 'Public goods',
            body: 'Non-rival and non-excludable – markets underprovide them.\n\nExample – street lighting, defence, flood defences.' },
          { type: 'tile', tone: 'blue', icon: '🎓', head: 'Merit goods',
            body: 'Benefits are undervalued by individuals, so the market under-consumes them.\n\nExample – education, healthcare, vaccination.' },
          { type: 'tile', tone: 'amber', icon: '⚖️', head: 'Redistribution',
            body: 'Taxes and spending can reduce inequality and support lower-income households.\n\nExample – pensions, benefits, tax credits.' },
          { type: 'tile', tone: 'purple', icon: '📈', head: 'Macroeconomic stabilisation',
            body: 'Spending can support demand in recessions and cool overheating indirectly via fiscal stance.\n\nExample – recession stimulus, furlough-style support.' }
        ]},
        { type: 'sectionHeader', icon: '🎯', label: 'WHY THIS MATTERS' },
        { type: 'mechanismChain', steps: [
          { label: 'Market failure',      detail: 'The market outcome is not ideal.' },
          { label: 'Government objective', detail: 'Improve efficiency, equity or stability.' },
          { label: 'Spending decision',   detail: 'Use resources to achieve the objective.' }
        ]},
        { type: 'calloutStrip', tone: 'amber', icon: '⚠️', text: 'Watch the trap — always identify the reason for spending before judging whether it is worthwhile.' },
        { type: 'bigIdea', text: 'Big idea: Government spending is justified when the market outcome is inefficient, inequitable, or unstable.' },
        { type: 'examEdge', title: 'Exam edge', text: 'Strong answers classify the motive first – public goods, merit goods, redistribution, or stabilisation – then evaluate the trade-offs.' }
      ]
    },

    /* ── CARD 2 ── Types of Government Spending ──────────────────── */
    {
      id: 'types-of-spending',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 2 of 8',
      title: 'Types of Government Spending',
      lede: 'Not all spending does the same job – some buys output directly, some builds capacity, and some simply redistributes income.',
      ledeStyle: 'plain',

      blocks: [
        { type: 'calloutStrip', tone: 'green', icon: '✅', text: 'Current and capital spending count in GDP – transfer payments do not.' },
        { type: 'sectionHeader', icon: '🏛️', label: 'THE THREE TYPES' },
        { type: 'grid', cols: 3, children: [
          { type: 'tile', tone: 'blue', icon: '💼', head: 'Current spending',
            body: 'Day-to-day spending on goods and services – recurring and consumable.\n\nExamples: Teacher salaries, NHS running costs, Police services.\n\nCounts in GDP? Yes' },
          { type: 'tile', tone: 'green', icon: '🏗️', head: 'Capital spending',
            body: 'Spending on long-lived assets that raise productive capacity.\n\nExamples: New hospitals, Roads and rail, Broadband and infrastructure.\n\nCounts in GDP? Yes' },
          { type: 'tile', tone: 'amber', icon: '👥', head: 'Transfer payments',
            body: 'Money redistributed to households without buying current output.\n\nExamples: Pensions, Universal Credit, Child benefit.\n\nCounts in GDP? No' }
        ]},
        { type: 'sectionHeader', icon: '📊', label: 'WHY THE DISTINCTION MATTERS' },
        { type: 'mechanismChain', steps: [
          { label: 'Current',   detail: 'Keeps services running today.' },
          { label: 'Capital',   detail: 'Raises future AS and capacity.' },
          { label: 'Transfers', detail: 'Affect C indirectly via disposable income.' }
        ]},
        { type: 'calloutStrip', tone: 'purple', icon: '📝', text: 'AD reminder — In AD = C + I + G + (X−M), only direct government purchases sit inside G. Transfer payments influence C instead.' },
        { type: 'bigIdea', text: 'Big idea: The economic effect depends on the type – spending can support today\'s output, tomorrow\'s capacity, or household incomes.' },
        { type: 'examEdge', title: 'Exam edge', text: 'Do not say all government spending directly raises GDP – transfer payments only work indirectly through consumption.' }
      ]
    },

    /* ── CARD 3 ── Fiscal Policy ─────────────────────────────────── */
    {
      id: 'fiscal-policy',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 3 of 8',
      title: 'Fiscal Policy',
      lede: 'Changing government spending or taxation shifts aggregate demand – but the direction depends on the problem.',
      ledeStyle: 'plain',

      blocks: [
        { type: 'calloutStrip', tone: 'green', icon: '✅', text: 'G is one of the four components of AD – so fiscal policy directly affects total spending.' },
        { type: 'sectionHeader', icon: '🔀', label: 'TWO DIRECTIONS' },
        { type: 'grid', cols: 1, children: [
          { type: 'tile', tone: 'green', icon: '📈', head: 'Expansionary fiscal policy',
            body: 'Increase G or cut T → AD shifts right → Output rises, unemployment falls.\n\nUsed when – recession or weak demand.' },
          { type: 'tile', tone: 'rose', icon: '📉', head: 'Contractionary fiscal policy',
            body: 'Cut G or raise T → AD shifts left → Inflation pressure falls.\n\nUsed when – overheating or excess inflation.' }
        ]},
        { type: 'sectionHeader', icon: '📅', label: 'WHEN IT IS USED' },
        { type: 'grid', cols: 2, children: [
          { type: 'tile', tone: 'blue', icon: '📉', head: 'Recession',
            body: 'Support demand and narrow the negative output gap.\n\nUse expansionary fiscal policy.' },
          { type: 'tile', tone: 'amber', icon: '🌡️', head: 'Overheating',
            body: 'Cool demand and reduce inflation pressure.\n\nUse contractionary fiscal policy.' }
        ]},
        { type: 'calloutStrip', tone: 'slate', icon: '🧮', text: 'G sits inside AD — AD = C + I + G + (X − M)' },
        { type: 'calloutStrip', tone: 'blue', icon: 'ℹ️', text: 'Note — Spending changes are discretionary fiscal policy – automatic stabilisers act without a new decision.' },
        { type: 'bigIdea', text: 'Big idea: Fiscal policy changes the level of aggregate demand by changing government spending or taxes.' },
        { type: 'examEdge', title: 'Exam edge', text: 'Always name the direction first – expansionary or contractionary – then explain the AD shift and the macro objective.' }
      ]
    },

    /* ── CARD 4 ── The Budget Position ───────────────────────────── */
    {
      id: 'budget-position',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 4 of 8',
      title: 'The Budget Position',
      lede: 'The budget can be in deficit, surplus, or balance – but the deeper question is why.',
      ledeStyle: 'plain',

      blocks: [
        { type: 'calloutStrip', tone: 'green', icon: '✅', text: 'A deficit is not automatically bad – it may be cyclical rather than structural.' },
        { type: 'sectionHeader', icon: '⚖️', label: 'THREE BUDGET STATES' },
        { type: 'grid', cols: 3, children: [
          { type: 'tile', tone: 'rose', icon: '📉', head: 'Deficit',
            body: 'G > T — Government spends more than it receives in tax.' },
          { type: 'tile', tone: 'green', icon: '📈', head: 'Surplus',
            body: 'G < T — Government receives more in tax than it spends.' },
          { type: 'tile', tone: 'slate', icon: '⚖️', head: 'Balanced budget',
            body: 'G = T — Government spending roughly matches tax revenue.' }
        ]},
        { type: 'sectionHeader', icon: '🔍', label: 'THE CRUCIAL DISTINCTION' },
        { type: 'grid', cols: 2, children: [
          { type: 'tile', tone: 'blue', icon: '🔄', head: 'Cyclical deficit',
            body: 'Caused by recession. Tax receipts fall and welfare spending rises. It may shrink automatically when growth returns.' },
          { type: 'tile', tone: 'amber', icon: '🏛️', head: 'Structural deficit',
            body: 'Exists even at full employment. It reflects a lasting gap between planned spending and tax revenue and needs active policy change.' }
        ]},
        { type: 'calloutStrip', tone: 'blue', icon: '🕐', text: 'Cyclical – temporary and self-correcting' },
        { type: 'calloutStrip', tone: 'amber', icon: '🛡️', text: 'Structural – persistent and policy-driven' },
        { type: 'calloutStrip', tone: 'rose', icon: '⚠️', text: 'Students often define a deficit correctly but miss whether it is cyclical or structural.' },
        { type: 'bigIdea', text: 'Big idea: The headline budget figure matters less than the cause behind it.' },
        { type: 'examEdge', title: 'Exam edge', text: 'A recession can create a deficit even without any new spending decision – use automatic stabilisers to explain why.' }
      ]
    },

    /* ── CARD 5 ── Government Spending and the Multiplier ────────── */
    {
      id: 'spending-multiplier',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 5 of 8',
      title: 'Government Spending and the Multiplier',
      lede: 'A rise in government spending becomes someone else\'s income – and then gets spent again.',
      ledeStyle: 'plain',

      blocks: [
        { type: 'calloutStrip', tone: 'green', icon: '✅', text: 'The total rise in GDP can exceed the original injection because each round creates another round of spending.' },
        { type: 'diagram', svgKey: 'govMultiplierChain', caption: '£1bn of new school building triggers wages, local spending, and further rounds – each pass re-spent, each round adding to GDP.' },
        { type: 'calloutStrip', tone: 'slate', icon: '🧮', text: 'The formula: ΔY = ΔG × k, where k = 1 ÷ (1 − MPC). If MPC = 0.6, k = 2.5. So £1bn extra G can raise GDP by £2.5bn.' },
        { type: 'sectionHeader', icon: '🎚️', label: 'WHAT MAKES IT BIGGER OR SMALLER?' },
        { type: 'grid', cols: 3, children: [
          { type: 'tile', tone: 'green',  icon: '📈', head: 'Higher MPC',
            body: '→ bigger multiplier. More of each round is re-spent rather than saved, taxed or imported.' },
          { type: 'tile', tone: 'amber',  icon: '💸', head: 'More leakages',
            body: '→ smaller multiplier. Savings, taxes and imports all drain spending out of the loop.' },
          { type: 'tile', tone: 'purple', icon: '🎛️', head: 'More spare capacity',
            body: '→ stronger real output effect. AD growth turns into real growth rather than just inflation.' }
        ]},
        { type: 'bigIdea', text: 'Big idea: Government spending does not stop with the first purchase – it ripples through the economy.' },
        { type: 'examEdge', title: 'Exam edge', text: 'Explain the transmission clearly: one person\'s spending becomes another person\'s income, which then fuels further spending.' }
      ]
    },

    /* ── CARD 6 ── Crowding Out ──────────────────────────────────── */
    {
      id: 'crowding-out',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 6 of 8',
      title: 'Crowding Out',
      lede: 'Government spending can support demand – but if borrowing pushes up interest rates, private investment may be squeezed.',
      ledeStyle: 'plain',

      tip: { icon: '⚠️', tone: 'rose', text: 'The closer the economy is to full employment, the stronger crowding out tends to be.' },

      interactiveDiagram: {
        svgKey: 'crowdingOutInteractive',
        layers: ['idl-1', 'idl-2'],
        label: 'CROWDING OUT &amp; INTEREST RATE PRESSURE',
        emoji: '📈',
        views: [
          {
            label: 'Free-market equilibrium',
            tone: 'blue',
            head: 'Before extra government borrowing',
            body: 'Demand for loanable funds (D₁) meets supply (S) at interest rate R₁ and quantity Q₁. Private firms borrow freely at R₁ – nothing is being crowded out.',
            analysis: 'This is the benchmark. Every crowding-out effect is measured as a departure from R₁ and Q₁.'
          },
          {
            label: 'Government borrows more',
            tone: 'amber',
            show: ['idl-1'],
            head: 'Higher G shifts demand for funds right',
            body: 'A bigger deficit means the state competes for the same pool of savings. Demand shifts D₁ → D₂. The new equilibrium sits higher up the supply curve: interest rates rise R₁ → R₂ and total funds borrowed rises Q₁ → Q₂.',
            analysis: 'The rate rise is the channel. Borrowing is now more expensive for <em>everyone</em> in the economy – households, firms and the government itself.'
          },
          {
            label: 'Private investment crowded out',
            tone: 'purple',
            show: ['idl-1', 'idl-2'],
            head: 'Some private projects no longer clear the hurdle',
            body: 'Reading off D₁ at the new rate R₂ shows what the private sector alone wants to borrow – Q_p. The gap <strong>Q₁ − Q_p</strong> is the private investment crowded out. The boost from higher G is partly cancelled by lower private I.',
            analysis: 'The strength of this effect depends on how interest-sensitive private investment is. Steep D₁ → little crowding out. Flat D₁ → severe crowding out.'
          }
        ]
      },

      pairLabel: 'TWO VIEWS',
      pairEmoji: '⚖️',
      left: {
        tone: 'blue', icon: '👥', iconStyle: 'circle',
        label: 'Full crowding out',
        text: '<p style="margin:0;font-size:13px;color:#0B1426;"><strong>Classical view</strong> – every £1 of government spending displaces £1 of private spending if the economy is already using its resources fully.</p>'
      },
      right: {
        tone: 'green', icon: '👥', iconStyle: 'circle',
        label: 'Partial crowding out',
        text: '<p style="margin:0;font-size:13px;color:#0B1426;"><strong>Keynesian view</strong> – some private spending is displaced, but total AD still rises if there is spare capacity.</p>'
      },

      whyItMatters: {
        title: 'WHEN IS IT SMALLER?',
        emoji: '🎚️',
        items: [
          { tone: 'blue',   icon: '🔇', label: 'Low rate sensitivity', text: 'Private investment barely responds to rate changes.' },
          { tone: 'green',  icon: '🏭', label: 'High spare capacity',   text: 'Plenty of idle resources for both public and private.' },
          { tone: 'purple', icon: '🏦', label: 'Central bank accommodation', text: 'Monetary policy holds rates down to absorb the extra borrowing.' }
        ]
      },

      conclusion: {
        title: 'Big idea',
        text: 'Crowding out is not automatic – it depends on capacity, finance conditions, and the state of the cycle.'
      },

      examEdge: {
        title: 'Exam edge',
        text: 'Avoid absolute statements. Evaluate by asking whether the economy is near full employment and whether private investment is interest-sensitive.'
      }
    },

    /* ── CARD 7 ── Automatic Stabilisers ─────────────────────────── */
    {
      id: 'automatic-stabilisers',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 7 of 8',
      title: 'Automatic Stabilisers',
      lede: 'Some fiscal effects happen automatically – without ministers announcing a new policy.',
      ledeStyle: 'plain',

      blocks: [
        { type: 'calloutStrip', tone: 'green', icon: '✅', text: 'Automatic stabilisers soften recessions and cool booms by changing taxes and welfare spending automatically.' },
        { type: 'diagram', svgKey: 'autoStabilisersFlow', caption: 'In a recession, falling tax receipts and rising benefit payments both cushion the drop in AD. In a boom, the same channels operate in reverse – automatically.' },
        { type: 'sectionHeader', icon: '📖', label: 'KEY TERMS' },
        { type: 'grid', cols: 2, children: [
          { type: 'tile', tone: 'blue', icon: '⚖️', head: 'Automatic stabiliser',
            body: 'A built-in fiscal mechanism that changes automatically as the economy changes.' },
          { type: 'tile', tone: 'purple', icon: '🏛️', head: 'Discretionary fiscal policy',
            body: 'A deliberate policy decision to change G or T.' }
        ]},
        { type: 'calloutStrip', tone: 'blue', icon: 'ℹ️', text: 'Net effect — Automatic stabilisers reduce the amplitude of the business cycle.' },
        { type: 'bigIdea', text: 'Big idea: The tax-benefit system acts like a shock absorber even when no new budget is announced.' },
        { type: 'examEdge', title: 'Exam edge', text: 'Do not confuse automatic stabilisers with discretionary policy – one happens automatically, the other requires a decision.' }
      ]
    },

    /* ── CARD 8 ── Evaluating Government Spending ────────────────── */
    {
      id: 'evaluating-government-spending',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 8 of 8',
      title: 'Evaluating Government Spending',
      lede: 'Government spending can lift demand and improve welfare – but its effectiveness depends on timing, capacity, and how it is financed.',
      ledeStyle: 'plain',

      blocks: [
        { type: 'calloutStrip', tone: 'green', icon: '✅', text: 'The same spending increase can be highly effective in one context and weak or risky in another.' },
        { type: 'sectionHeader', icon: '📋', label: 'THE SIX TESTS' },
        { type: 'grid', cols: 3, children: [
          { type: 'tile', tone: 'blue', icon: '⏱️', head: 'Time lags',
            body: 'Recognition, implementation and impact delays can make fiscal policy slow.\n\nStrengthens if – recession is prolonged.\nWeakens if – shock is short-lived.' },
          { type: 'tile', tone: 'purple', icon: '🗳️', head: 'Political bias',
            body: 'Spending promises can win votes, creating deficit bias.\n\nStrengthens if – elections loom.\nWeakens if – strong fiscal rules.' },
          { type: 'tile', tone: 'rose', icon: '👥', head: 'Crowding out risk',
            body: 'Near full employment, extra G may squeeze private spending.\n\nStrengthens if – capacity is tight.\nWeakens if – spare capacity exists.' },
          { type: 'tile', tone: 'green', icon: '📈', head: 'Multiplier size',
            body: 'Spending works better when MPC is high and leakages are low.\n\nStrengthens if – households spend locally.\nWeakens if – savings, taxes or imports leak away.' },
          { type: 'tile', tone: 'amber', icon: '£', head: 'Debt sustainability',
            body: 'Persistent deficits raise debt and the future interest burden.\n\nStrengthens if – borrowing costs rise.\nWeakens if – growth outpaces debt interest.' },
          { type: 'tile', tone: 'slate', icon: '🏭', head: 'Supply-side limits',
            body: 'Higher G boosts AD, but may not raise AS unless spending is productive.\n\nStrengthens if – spending is current only.\nWeakens if – spending builds infrastructure or skills.' }
        ]},
        { type: 'calloutStrip', tone: 'green', icon: '🌟', text: 'In summary — There is no one-size-fits-all answer. Use the six tests to make a reasoned judgement about when government spending is likely to work best.' },
        { type: 'bigIdea', text: 'Big idea: G is the only AD component policymakers control directly – but its effectiveness depends on timing, capacity, multiplier, and financing.' },
        { type: 'examEdge', title: 'Exam edge', text: 'Best judgements weigh the state of the economy, the type of spending, the multiplier, and the debt trade-off – not just whether G rises.' }
      ],

      quizCta: { href: TopicLoader.routes.quiz('main'), label: 'Test yourself →' }
    }

  ]
};
