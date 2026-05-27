/* ============================================================
   ECONOS – content data for government_spending
   8 cards on G – the only AD component policymakers control directly.
   Edexcel Theme 2.2.4
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'government_spending',
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
      { num: 2, name: 'Master', sub: 'Apply in exam-style questions',    state: 'locked' },
      { num: 3, name: 'Review', sub: 'See your progress and next steps', state: 'locked' }
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

      tip: { icon: '✅', tone: 'green', text: 'Government spending usually responds to market failure, inequality, or macro instability.' },

      causesFirst: true,
      causesLabel: 'THE FOUR MOTIVES',
      causesEmoji: '🟦',
      causesStyle: 'numbered',
      causesCols: 2,
      causes: [
        { tone: 'green', icon: '💡', head: 'Public goods',
          body: 'Non-rival and non-excludable – markets underprovide them.<div style="margin-top:8px;padding-top:8px;border-top:1px dashed #6EE7B7;font-size:12px;color:#047857;font-weight:700;">Example – street lighting, defence, flood defences.</div>' },
        { tone: 'blue', icon: '🎓', head: 'Merit goods',
          body: 'Benefits are undervalued by individuals, so the market under-consumes them.<div style="margin-top:8px;padding-top:8px;border-top:1px dashed #93C5FD;font-size:12px;color:#1E40AF;font-weight:700;">Example – education, healthcare, vaccination.</div>' },
        { tone: 'amber', icon: '⚖️', head: 'Redistribution',
          body: 'Taxes and spending can reduce inequality and support lower-income households.<div style="margin-top:8px;padding-top:8px;border-top:1px dashed #FCD34D;font-size:12px;color:#B45309;font-weight:700;">Example – pensions, benefits, tax credits.</div>' },
        { tone: 'purple', icon: '📈', head: 'Macroeconomic stabilisation',
          body: 'Spending can support demand in recessions and cool overheating indirectly via fiscal stance.<div style="margin-top:8px;padding-top:8px;border-top:1px dashed #C4B5FD;font-size:12px;color:#6D28D9;font-weight:700;">Example – recession stimulus, furlough-style support.</div>' }
      ],

      flowTitle: 'WHY THIS MATTERS',
      flowEmoji: '🎯',
      flowSep: '→',
      flow: [
        { tone: 'green',  icon: '⚠️', title: 'Market failure',    sub: 'The market outcome is not ideal.' },
        { tone: 'blue',   icon: '🎯', title: 'Government objective', sub: 'Improve efficiency, equity or stability.' },
        { tone: 'purple', icon: '🏛️', title: 'Spending decision', sub: 'Use resources to achieve the objective.' }
      ],

      summaryRow: [
        { tone: 'amber', icon: '⚠️', title: 'Watch the trap',
          text: 'Always identify the reason for spending before judging whether it is worthwhile.' }
      ],

      conclusion: {
        title: 'Big idea',
        text: 'Government spending is justified when the market outcome is inefficient, inequitable, or unstable.'
      },

      examEdge: {
        title: 'Exam edge',
        text: 'Strong answers classify the motive first – public goods, merit goods, redistribution, or stabilisation – then evaluate the trade-offs.'
      }
    },

    /* ── CARD 2 ── Types of Government Spending ──────────────────── */
    {
      id: 'types-of-spending',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 2 of 8',
      title: 'Types of Government Spending',
      lede: 'Not all spending does the same job – some buys output directly, some builds capacity, and some simply redistributes income.',
      ledeStyle: 'plain',

      tip: { icon: '✅', tone: 'green', text: 'Current and capital spending count in GDP – transfer payments do not.' },

      causesFirst: true,
      causesLabel: 'THE THREE TYPES',
      causesEmoji: '🏛️',
      causesCols: 3,
      causes: [
        { tone: 'blue', icon: '💼', head: 'Current spending',
          body: 'Day-to-day spending on goods and services – recurring and consumable.' +
                '<ul style="margin:8px 0 10px;padding-left:18px;font-size:12.5px;color:#1E3A8A;"><li>Teacher salaries</li><li>NHS running costs</li><li>Police services</li></ul>' +
                '<div style="background:#fff;border:1px solid #BFDBFE;border-radius:8px;padding:6px 10px;font-size:12px;text-align:center;color:#1E40AF;font-weight:700;">Counts in GDP? <span style="color:#047857;">Yes</span></div>' },
        { tone: 'green', icon: '🏗️', head: 'Capital spending',
          body: 'Spending on long-lived assets that raise productive capacity.' +
                '<ul style="margin:8px 0 10px;padding-left:18px;font-size:12.5px;color:#065F46;"><li>New hospitals</li><li>Roads and rail</li><li>Broadband and infrastructure</li></ul>' +
                '<div style="background:#fff;border:1px solid #A7F3D0;border-radius:8px;padding:6px 10px;font-size:12px;text-align:center;color:#047857;font-weight:700;">Counts in GDP? <span style="color:#047857;">Yes</span></div>' },
        { tone: 'amber', icon: '👥', head: 'Transfer payments',
          body: 'Money redistributed to households without buying current output.' +
                '<ul style="margin:8px 0 10px;padding-left:18px;font-size:12.5px;color:#92400E;"><li>Pensions</li><li>Universal Credit</li><li>Child benefit</li></ul>' +
                '<div style="background:#fff;border:1px solid #FCD34D;border-radius:8px;padding:6px 10px;font-size:12px;text-align:center;color:#B45309;font-weight:700;">Counts in GDP? <span style="color:#BE123C;">No</span></div>' }
      ],

      flowTitle: 'WHY THE DISTINCTION MATTERS',
      flowEmoji: '📊',
      flowSep: '→',
      flow: [
        { tone: 'blue',  icon: '🔄', title: 'Current',  sub: 'Keeps services running today.' },
        { tone: 'green', icon: '📈', title: 'Capital',  sub: 'Raises future AS and capacity.' },
        { tone: 'amber', icon: '👥', title: 'Transfers', sub: 'Affect C indirectly via disposable income.' }
      ],

      summaryRow: [
        { tone: 'purple', icon: '📝', title: 'AD reminder',
          text: 'In <strong>AD = C + I + G + (X−M)</strong>, only direct government purchases sit inside G. Transfer payments influence C instead.' }
      ],

      conclusion: {
        title: 'Big idea',
        text: 'The economic effect depends on the type – spending can support today\'s output, tomorrow\'s capacity, or household incomes.'
      },

      examEdge: {
        title: 'Exam edge',
        text: 'Do not say all government spending directly raises GDP – transfer payments only work indirectly through consumption.'
      }
    },

    /* ── CARD 3 ── Fiscal Policy ─────────────────────────────────── */
    {
      id: 'fiscal-policy',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 3 of 8',
      title: 'Fiscal Policy',
      lede: 'Changing government spending or taxation shifts aggregate demand – but the direction depends on the problem.',
      ledeStyle: 'plain',

      tip: { icon: '✅', tone: 'green', text: 'G is one of the four components of AD – so fiscal policy directly affects total spending.' },

      causesFirst: true,
      causesLabel: 'TWO DIRECTIONS',
      causesEmoji: '🔀',
      causesStyle: 'tinted-flat',
      causesCols: 1,
      causes: [
        { tone: 'green', icon: '📈', head: 'Expansionary fiscal policy',
          body: '<div style="display:grid;grid-template-columns:1fr 24px 1fr 24px 1fr;gap:8px;align-items:center;margin:8px 0 14px;">' +
                '<div style="background:#fff;border:1px solid #A7F3D0;border-radius:10px;padding:12px 8px;text-align:center;">' +
                  '<div style="font-size:22px;margin-bottom:5px;">🏛️</div>' +
                  '<div style="font-size:12px;font-weight:700;color:#065F46;line-height:1.3;">Increase G<br>or cut T</div>' +
                  '<div style="font-size:11px;color:#6B7280;margin-top:3px;">Higher injections, lower withdrawals.</div>' +
                '</div>' +
                '<div style="text-align:center;font-weight:900;color:#059669;font-size:20px;">→</div>' +
                '<div style="background:#fff;border:1px solid #A7F3D0;border-radius:10px;padding:12px 8px;text-align:center;">' +
                  '<div style="font-size:22px;margin-bottom:5px;">➡️</div>' +
                  '<div style="font-size:12px;font-weight:700;color:#065F46;line-height:1.3;">AD shifts<br>right</div>' +
                  '<div style="font-size:11px;color:#6B7280;margin-top:3px;">Total spending rises.</div>' +
                '</div>' +
                '<div style="text-align:center;font-weight:900;color:#059669;font-size:20px;">→</div>' +
                '<div style="background:#fff;border:1px solid #A7F3D0;border-radius:10px;padding:12px 8px;text-align:center;">' +
                  '<div style="font-size:22px;margin-bottom:5px;">📊</div>' +
                  '<div style="font-size:12px;font-weight:700;color:#065F46;line-height:1.3;">Output rises,<br>unemployment falls</div>' +
                '</div>' +
                '</div>' +
                '<span style="display:inline-block;background:#fff;border:1.5px solid #A7F3D0;border-radius:18px;padding:5px 16px;font-size:12.5px;font-weight:700;color:#047857;">Used when – recession or weak demand</span>'
        },
        { tone: 'rose', icon: '📉', head: 'Contractionary fiscal policy',
          body: '<div style="display:grid;grid-template-columns:1fr 24px 1fr 24px 1fr;gap:8px;align-items:center;margin:8px 0 14px;">' +
                '<div style="background:#fff;border:1px solid #FDA4AF;border-radius:10px;padding:12px 8px;text-align:center;">' +
                  '<div style="font-size:22px;margin-bottom:5px;">🏛️</div>' +
                  '<div style="font-size:12px;font-weight:700;color:#BE123C;line-height:1.3;">Cut G<br>or raise T</div>' +
                  '<div style="font-size:11px;color:#6B7280;margin-top:3px;">Lower injections, higher withdrawals.</div>' +
                '</div>' +
                '<div style="text-align:center;font-weight:900;color:#F43F5E;font-size:20px;">→</div>' +
                '<div style="background:#fff;border:1px solid #FDA4AF;border-radius:10px;padding:12px 8px;text-align:center;">' +
                  '<div style="font-size:22px;margin-bottom:5px;">⬅️</div>' +
                  '<div style="font-size:12px;font-weight:700;color:#BE123C;line-height:1.3;">AD shifts<br>left</div>' +
                  '<div style="font-size:11px;color:#6B7280;margin-top:3px;">Total spending falls.</div>' +
                '</div>' +
                '<div style="text-align:center;font-weight:900;color:#F43F5E;font-size:20px;">→</div>' +
                '<div style="background:#fff;border:1px solid #FDA4AF;border-radius:10px;padding:12px 8px;text-align:center;">' +
                  '<div style="font-size:22px;margin-bottom:5px;">📉</div>' +
                  '<div style="font-size:12px;font-weight:700;color:#BE123C;line-height:1.3;">Inflation<br>pressure falls</div>' +
                '</div>' +
                '</div>' +
                '<span style="display:inline-block;background:#fff;border:1.5px solid #FDA4AF;border-radius:18px;padding:5px 16px;font-size:12.5px;font-weight:700;color:#BE123C;">Used when – overheating or excess inflation</span>'
        }
      ],

      pairLabel: 'WHEN IT IS USED',
      pairEmoji: '📅',
      left: {
        tone: 'blue', icon: '📉', iconStyle: 'circle',
        label: 'Recession',
        text: '<p style="margin:0;font-size:13px;color:#0B1426;">Support demand and narrow the negative output gap.</p>' +
              '<div style="border-top:1px dashed #93C5FD;margin:8px 0;"></div>' +
              '<p style="margin:0;font-size:13px;color:#1E40AF;font-weight:800;">Use expansionary fiscal policy.</p>'
      },
      right: {
        tone: 'amber', icon: '🌡️', iconStyle: 'circle',
        label: 'Overheating',
        text: '<p style="margin:0;font-size:13px;color:#0B1426;">Cool demand and reduce inflation pressure.</p>' +
              '<div style="border-top:1px dashed #FCD34D;margin:8px 0;"></div>' +
              '<p style="margin:0;font-size:13px;color:#B45309;font-weight:800;">Use contractionary fiscal policy.</p>'
      },

      summaryRow: [
        { tone: 'slate', icon: '🧮', title: 'G sits inside AD',
          text: '<div style="font-size:18px;font-weight:900;color:#0F172A;text-align:center;">AD = C + I + <span style="background:#D1FAE5;border:1.5px solid #6EE7B7;border-radius:8px;padding:2px 10px;color:#047857;">G</span> + (X − M)</div>' },
        { tone: 'blue', icon: 'ℹ️', title: 'Note', text: 'Spending changes are <strong>discretionary fiscal policy</strong> – automatic stabilisers act without a new decision.' }
      ],

      conclusion: {
        title: 'Big idea',
        text: 'Fiscal policy changes the level of aggregate demand by changing government spending or taxes.'
      },

      examEdge: {
        title: 'Exam edge',
        text: 'Always name the direction first – expansionary or contractionary – then explain the AD shift and the macro objective.'
      }
    },

    /* ── CARD 4 ── The Budget Position ───────────────────────────── */
    {
      id: 'budget-position',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 4 of 8',
      title: 'The Budget Position',
      lede: 'The budget can be in deficit, surplus, or balance – but the deeper question is why.',
      ledeStyle: 'plain',

      tip: { icon: '✅', tone: 'green', text: 'A deficit is not automatically bad – it may be cyclical rather than structural.' },

      causesFirst: true,
      causesLabel: 'THREE BUDGET STATES',
      causesEmoji: '⚖️',
      causesCols: 3,
      causes: [
        { tone: 'rose', icon: '📉', head: 'Deficit',
          body: '<div style="background:#fff;border:1px solid #FECDD3;border-radius:8px;padding:6px 12px;text-align:center;font-size:16px;font-weight:900;color:#BE123C;margin:0 0 10px;">G &gt; T</div>' +
                '<div style="font-size:12.5px;color:#0F172A;text-align:center;">Government spends more than it receives in tax.</div>' },
        { tone: 'green', icon: '📈', head: 'Surplus',
          body: '<div style="background:#fff;border:1px solid #A7F3D0;border-radius:8px;padding:6px 12px;text-align:center;font-size:16px;font-weight:900;color:#047857;margin:0 0 10px;">G &lt; T</div>' +
                '<div style="font-size:12.5px;color:#0F172A;text-align:center;">Government receives more in tax than it spends.</div>' },
        { tone: 'slate', icon: '⚖️', head: 'Balanced budget',
          body: '<div style="background:#fff;border:1px solid #CBD5E1;border-radius:8px;padding:6px 12px;text-align:center;font-size:16px;font-weight:900;color:#334155;margin:0 0 10px;">G = T</div>' +
                '<div style="font-size:12.5px;color:#0F172A;text-align:center;">Government spending roughly matches tax revenue.</div>' }
      ],

      pairLabel: 'THE CRUCIAL DISTINCTION',
      pairEmoji: '🔍',
      left: {
        tone: 'blue', icon: '🔄', iconStyle: 'circle',
        label: 'Cyclical deficit',
        text: '<p style="margin:0;font-size:13px;color:#0B1426;">Caused by recession. Tax receipts fall and welfare spending rises. It may shrink automatically when growth returns.</p>'
      },
      right: {
        tone: 'amber', icon: '🏛️', iconStyle: 'circle',
        label: 'Structural deficit',
        text: '<p style="margin:0;font-size:13px;color:#0B1426;">Exists even at full employment. It reflects a lasting gap between planned spending and tax revenue and needs active policy change.</p>'
      },

      summaryRow: [
        { tone: 'slate', icon: null, title: null,
          text:
            '<div style="display:grid;grid-template-columns:1fr auto 1fr;gap:12px;align-items:center;padding-bottom:12px;margin-bottom:12px;border-bottom:1px solid #E2E8F0;">' +
              '<div style="display:flex;align-items:center;gap:10px;">' +
                '<div style="width:36px;height:36px;border-radius:50%;background:#EFF6FF;border:2px solid #BFDBFE;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;">🕐</div>' +
                '<div style="font-size:13px;font-weight:700;color:#1E40AF;line-height:1.4;">Cyclical – temporary and self-correcting</div>' +
              '</div>' +
              '<div style="width:34px;height:34px;border-radius:50%;background:#fff;border:1.5px solid #CBD5E1;display:flex;align-items:center;justify-content:center;font-size:11.5px;font-weight:900;color:#475569;flex-shrink:0;">VS</div>' +
              '<div style="display:flex;align-items:center;gap:10px;justify-content:flex-end;">' +
                '<div style="font-size:13px;font-weight:700;color:#D97706;line-height:1.4;text-align:right;">Structural – persistent and policy-driven</div>' +
                '<div style="width:36px;height:36px;border-radius:50%;background:#FFFBEB;border:2px solid #FCD34D;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;">🛡️</div>' +
              '</div>' +
            '</div>' +
            '<div style="display:flex;gap:10px;align-items:center;background:#FFF1F2;border:1px solid #FECDD3;border-radius:10px;padding:10px 14px;">' +
              '<div style="width:26px;height:26px;border-radius:50%;background:#F43F5E;display:flex;align-items:center;justify-content:center;font-size:13px;flex-shrink:0;">⚠️</div>' +
              '<div style="font-size:13px;color:#0F172A;line-height:1.55;">Students often define a deficit correctly but miss whether it is cyclical or structural.</div>' +
            '</div>'
        }
      ],

      conclusion: {
        title: 'Big idea',
        text: 'The headline budget figure matters less than the cause behind it.'
      },

      examEdge: {
        title: 'Exam edge',
        text: 'A recession can create a deficit even without any new spending decision – use automatic stabilisers to explain why.'
      }
    },

    /* ── CARD 5 ── Government Spending and the Multiplier ────────── */
    {
      id: 'spending-multiplier',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 5 of 8',
      title: 'Government Spending and the Multiplier',
      lede: 'A rise in government spending becomes someone else\'s income – and then gets spent again.',
      ledeStyle: 'plain',

      tip: { icon: '✅', tone: 'green', text: 'The total rise in GDP can exceed the original injection because each round creates another round of spending.' },

      flowChart: {
        svgKey: 'govMultiplierChain',
        label: 'THE INJECTION CHAIN',
        emoji: '🔗',
        caption: '£1bn of new school building triggers wages, local spending, and further rounds – each pass re-spent, each round adding to GDP.'
      },

      summaryRow: [
        { tone: 'slate', icon: '🧮', title: 'The formula',
          text: '<div style="display:flex;flex-wrap:wrap;gap:16px;align-items:center;margin-top:4px;">' +
                '<div style="background:#fff;border-radius:12px;border:1.5px solid #CBD5E1;padding:12px 22px;text-align:center;flex-shrink:0;">' +
                  '<div style="font-size:22px;font-weight:900;color:#0F172A;letter-spacing:-0.01em;">ΔY = ΔG × k</div>' +
                  '<div style="font-size:14px;font-weight:700;color:#334155;margin-top:4px;">k = 1 ÷ (1 − MPC)</div>' +
                '</div>' +
                '<div style="flex:1;min-width:150px;">' +
                  '<div style="font-size:13.5px;font-weight:700;color:#0F172A;">If MPC = 0.6, k = 2.5.</div>' +
                  '<div style="font-size:13px;color:#334155;margin-top:4px;">So £1bn extra G can raise GDP by <strong style="color:#047857;">£2.5bn.</strong></div>' +
                  '<div style="margin-top:10px;padding-top:8px;border-top:1px dashed #BFDBFE;font-size:12.5px;font-weight:800;color:#2563EB;text-align:center;">income → spending → income</div>' +
                '</div>' +
                '</div>'
        }
      ],

      causesLast: true,
      causesLabel: 'WHAT MAKES IT BIGGER OR SMALLER?',
      causesEmoji: '🎚️',
      causesCols: 3,
      causes: [
        { tone: 'green',  icon: '📈', head: 'Higher MPC',
          body: '→ bigger multiplier. More of each round is re-spent rather than saved, taxed or imported.' },
        { tone: 'amber',  icon: '💸', head: 'More leakages',
          body: '→ smaller multiplier. Savings, taxes and imports all drain spending out of the loop.' },
        { tone: 'purple', icon: '🎛️', head: 'More spare capacity',
          body: '→ stronger real output effect. AD growth turns into real growth rather than just inflation.' }
      ],

      conclusion: {
        title: 'Big idea',
        text: 'Government spending does not stop with the first purchase – it ripples through the economy.'
      },

      examEdge: {
        title: 'Exam edge',
        text: 'Explain the transmission clearly: one person\'s spending becomes another person\'s income, which then fuels further spending.'
      }
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

      tip: { icon: '✅', tone: 'green', text: 'Automatic stabilisers soften recessions and cool booms by changing taxes and welfare spending automatically.' },

      flowChart: {
        svgKey: 'autoStabilisersFlow',
        label: 'HOW THEY WORK',
        emoji: '⚙️',
        caption: 'In a recession, falling tax receipts and rising benefit payments both cushion the drop in AD. In a boom, the same channels operate in reverse – automatically.'
      },

      pairLabel: 'KEY TERMS',
      pairEmoji: '📖',
      left: {
        tone: 'blue', icon: '⚖️', iconStyle: 'circle',
        label: 'Automatic stabiliser',
        text: '<p style="margin:0;font-size:13px;color:#0B1426;">A built-in fiscal mechanism that changes automatically as the economy changes.</p>'
      },
      right: {
        tone: 'purple', icon: '🏛️', iconStyle: 'circle',
        label: 'Discretionary fiscal policy',
        text: '<p style="margin:0;font-size:13px;color:#0B1426;">A deliberate policy decision to change G or T.</p>'
      },

      summaryRow: [
        { tone: 'blue', icon: 'ℹ️', title: 'Net effect', text: 'Automatic stabilisers reduce the amplitude of the business cycle.' }
      ],

      conclusion: {
        title: 'Big idea',
        text: 'The tax-benefit system acts like a shock absorber even when no new budget is announced.'
      },

      examEdge: {
        title: 'Exam edge',
        text: 'Do not confuse automatic stabilisers with discretionary policy – one happens automatically, the other requires a decision.'
      }
    },

    /* ── CARD 8 ── Evaluating Government Spending ────────────────── */
    {
      id: 'evaluating-government-spending',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 8 of 8',
      title: 'Evaluating Government Spending',
      lede: 'Government spending can lift demand and improve welfare – but its effectiveness depends on timing, capacity, and how it is financed.',
      ledeStyle: 'plain',

      tip: { icon: '✅', tone: 'green', text: 'The same spending increase can be highly effective in one context and weak or risky in another.' },

      causesFirst: true,
      causesLabel: 'THE SIX TESTS',
      causesEmoji: '📋',
      causesStyle: 'numbered',
      causesCols: 3,
      causes: [
        { tone: 'blue', icon: '⏱️', head: 'Time lags',
          body: 'Recognition, implementation and impact delays can make fiscal policy slow.' +
                '<div style="margin-top:10px;padding-top:8px;border-top:1px dashed #93C5FD;font-size:12px;color:#0F172A;"><div><strong style="color:#047857;">Strengthens if</strong> – recession is prolonged</div><div style="margin-top:3px;"><strong style="color:#BE123C;">Weakens if</strong> – shock is short-lived</div></div>' },
        { tone: 'purple', icon: '🗳️', head: 'Political bias',
          body: 'Spending promises can win votes, creating deficit bias.' +
                '<div style="margin-top:10px;padding-top:8px;border-top:1px dashed #C4B5FD;font-size:12px;color:#0F172A;"><div><strong style="color:#047857;">Strengthens if</strong> – elections loom</div><div style="margin-top:3px;"><strong style="color:#BE123C;">Weakens if</strong> – strong fiscal rules</div></div>' },
        { tone: 'rose', icon: '👥', head: 'Crowding out risk',
          body: 'Near full employment, extra G may squeeze private spending.' +
                '<div style="margin-top:10px;padding-top:8px;border-top:1px dashed #FDA4AF;font-size:12px;color:#0F172A;"><div><strong style="color:#047857;">Strengthens if</strong> – capacity is tight</div><div style="margin-top:3px;"><strong style="color:#BE123C;">Weakens if</strong> – spare capacity exists</div></div>' },
        { tone: 'green', icon: '📈', head: 'Multiplier size',
          body: 'Spending works better when MPC is high and leakages are low.' +
                '<div style="margin-top:10px;padding-top:8px;border-top:1px dashed #6EE7B7;font-size:12px;color:#0F172A;"><div><strong style="color:#047857;">Strengthens if</strong> – households spend locally</div><div style="margin-top:3px;"><strong style="color:#BE123C;">Weakens if</strong> – savings, taxes or imports leak away</div></div>' },
        { tone: 'amber', icon: '£', head: 'Debt sustainability',
          body: 'Persistent deficits raise debt and the future interest burden.' +
                '<div style="margin-top:10px;padding-top:8px;border-top:1px dashed #FCD34D;font-size:12px;color:#0F172A;"><div><strong style="color:#047857;">Strengthens if</strong> – borrowing costs rise</div><div style="margin-top:3px;"><strong style="color:#BE123C;">Weakens if</strong> – growth outpaces debt interest</div></div>' },
        { tone: 'slate', icon: '🏭', head: 'Supply-side limits',
          body: 'Higher G boosts AD, but may not raise AS unless spending is productive.' +
                '<div style="margin-top:10px;padding-top:8px;border-top:1px dashed #CBD5E1;font-size:12px;color:#0F172A;"><div><strong style="color:#047857;">Strengthens if</strong> – spending is current only</div><div style="margin-top:3px;"><strong style="color:#BE123C;">Weakens if</strong> – spending builds infrastructure or skills</div></div>' }
      ],

      summaryRow: [
        { tone: 'green', icon: '🌟', title: 'In summary',
          text: 'There is no one-size-fits-all answer. Use the six tests to make a reasoned judgement about when government spending is likely to work best.' }
      ],

      conclusion: {
        title: 'Big idea',
        text: 'G is the only AD component policymakers control directly – but its effectiveness depends on timing, capacity, multiplier, and financing.'
      },

      examEdge: {
        title: 'Exam edge',
        text: 'Best judgements weigh the state of the economy, the type of spending, the multiplier, and the debt trade-off – not just whether G rises.'
      },

      quizCta: { href: TopicLoader.buildUrl('quiz.html', { quiz: 'main' }), label: 'Test yourself →' }
    }

  ]
};
