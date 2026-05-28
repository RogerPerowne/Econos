/* ============================================================
   ECONOS – content data for consumption
   8 cards on consumption as the biggest engine of AD.
   Edexcel Theme 2.2.2
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'consumption',
  topicNum: '2.2',
  theme: 'Theme 2 · The National and Global Economy',
  title: 'Consumption',
  estTime: '10-12 minutes',
  goal: 'Lock in consumption – the biggest engine of AD – from definition through to evaluation.',

  intro: {
    heroKey: 'heroConsumption',
    summary: 'Consumption is household spending on goods and services – roughly 65% of UK AD and the most important engine of demand. This topic locks in the function, the propensities, the determinants, the multiplier link and the real-world UK story.',
    doInThis: 'Walk through what consumption is, the consumption function, MPC, the determinants, average and marginal propensities, the multiplier link, recent UK episodes, and the A* evaluation framework.',
    outcomes: [
      'Define consumption and its share of UK AD',
      'Explain the Keynesian consumption function C = a + bY',
      'Calculate and interpret the MPC',
      'List the determinants of consumption',
      'Distinguish APC, APS, MPC and MPS',
      'Link MPC to the multiplier',
      'Apply real UK case studies',
      'Evaluate consumption as an AD driver'
    ],
    tip: 'MPC matters twice – it drives the slope of the consumption function and the size of the multiplier.',
    stages: [
      { num: 1, name: 'Learn',  sub: '8 concept cards',                  state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions',    state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [

    /* ── CARD 1 ── What is Consumption? ───────────────────────────── */
    {
      id: 'what-is-consumption',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'What is Consumption?',
      lede: 'Consumption is household spending on goods and services. It is the largest component of aggregate demand, accounting for about 65% of total spending in the UK.',
      ledeStyle: 'plain',

      tip: { icon: '✅', tone: 'green', text: 'When households spend, the whole economy feels it.' },

      causesFirst: true,
      causesLabel: 'THE CONSUMPTION MIX',
      causesEmoji: '🛒',
      causes: [
        {
          tone: 'blue', icon: '🚗', head: 'Durable goods',
          body: 'Physical goods that last more than three years. <strong>Examples:</strong> cars, furniture, appliances – long-lasting purchases.'
        },
        {
          tone: 'amber', icon: '🧺', head: 'Non-durable goods',
          body: 'Goods used up within a short period. <strong>Examples:</strong> food, fuel, toiletries – used up quickly.'
        },
        {
          tone: 'purple', icon: '🎧', head: 'Services',
          body: 'Intangible activities that satisfy needs. <strong>Examples:</strong> transport, haircuts, streaming, education – intangible purchases.'
        }
      ],

      flowTitle: 'CONSUMPTION FEEDS AD',
      flowEmoji: '➡️',
      flowSep: '→',
      flow: [
        { tone: 'green', icon: '👥', title: 'Consumption',     sub: 'Household spending on goods and services.' },
        { tone: 'blue',  icon: '📈', title: 'Aggregate Demand', sub: 'One of four components of AD – drives output.' }
      ],

      whyItMatters: {
        title: 'WHY IT MATTERS',
        emoji: '📊',
        items: [
          { tone: 'blue',   icon: '📊', label: 'Biggest AD component',  text: 'Around 65% of total spending in the UK.' },
          { tone: 'amber',  icon: '👤', label: 'Sensitive to confidence', text: 'Household confidence, income and expectations drive spending.' },
          { tone: 'purple', icon: '📈', label: 'Strong driver of growth', text: 'Rising consumption supports jobs, output and living standards.' }
        ]
      },

      conclusion: {
        title: 'Big idea',
        text: 'Consumption is not just shopping – it is the main spending engine of the economy.'
      },

      examEdge: {
        title: 'Exam edge',
        text: 'Always distinguish consumption from aggregate demand – consumption is one component of AD, not the whole of it.'
      }
    },

    /* ── CARD 2 ── The Consumption Function ───────────────────────── */
    {
      id: 'consumption-function',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 2 of 8',
      title: 'The Consumption Function',
      lede: 'Keynes\'s consumption function shows the relationship between total consumption (C) and national income (Y): <strong>C = a + bY</strong>, where consumption has two parts – autonomous consumption and induced consumption.',
      ledeStyle: 'plain',

      tip: { icon: '✅', tone: 'green', text: 'Even with zero income, households still consume.' },

      flowChart: {
        svgKey: 'consumptionFunction',
        label: 'THE FUNCTION',
        emoji: '📈'
      },

      pairLabel: 'TWO PARTS OF CONSUMPTION',
      pairEmoji: '⚖️',
      left: {
        tone: 'blue', icon: '🐷', iconStyle: 'circle',
        label: 'Autonomous consumption',
        text: '<p style="margin:0;font-size:13px;color:#0B1426;">Spending that happens even at zero income, financed from savings or credit.</p>'
      },
      right: {
        tone: 'amber', icon: '📈', iconStyle: 'circle',
        label: 'Induced consumption',
        text: '<p style="margin:0;font-size:13px;color:#0B1426;">Extra consumption that rises as income rises.</p>'
      },

      summaryRow: [
        { tone: 'green', icon: '🧮', title: 'C = a + bY', text: '<em>a</em> = intercept (autonomous consumption). <em>b</em> = marginal propensity to consume.' }
      ],

      causesLast: true,
      causesLabel: 'HOW TO READ IT',
      causesEmoji: '📖',
      causesStyle: 'numbered',
      causes: [
        { tone: 'blue',   icon: '📏', head: 'Intercept', body: 'The amount spent when income is zero.' },
        { tone: 'amber',  icon: '📐', head: 'Slope',     body: 'How much C rises when Y rises.' },
        { tone: 'purple', icon: '⬆️', head: 'Higher Y',  body: 'Moves households up the line.' }
      ],

      conclusion: {
        title: 'Big idea',
        text: 'Consumption has a built-in floor, but most spending rises with income.'
      },

      examEdge: {
        title: 'Exam edge',
        text: 'Always define autonomous consumption and induced consumption separately – then link the slope to MPC.'
      }
    },

    /* ── CARD 3 ── Marginal Propensity to Consume (MPC) ───────────── */
    {
      id: 'mpc',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 3 of 8',
      title: 'Marginal Propensity to Consume (MPC)',
      lede: 'Marginal Propensity to Consume (MPC) is the proportion of an extra pound of income that is spent rather than saved. <strong>Formula:</strong> MPC = ΔC ÷ ΔY.',
      ledeStyle: 'plain',

      tip: { icon: '✅', tone: 'green', text: 'MPC is always between 0 and 1.' },

      pairFirst: true,
      pairLabel: 'THE FORMULA',
      pairEmoji: '🧮',
      left: {
        tone: 'blue', icon: '🧮', iconStyle: 'circle',
        label: 'Marginal Propensity to Consume',
        text: '<div style="display:flex;align-items:center;justify-content:center;gap:14px;font-size:30px;font-weight:800;color:#1E40AF;margin:14px 0 8px;line-height:1;">' +
          '<span>MPC =</span>' +
          '<span style="display:inline-flex;flex-direction:column;align-items:center;line-height:1;">' +
            '<span style="padding:0 14px 6px;">ΔC</span>' +
            '<span style="padding:6px 14px 0;border-top:3px solid #1E40AF;">ΔY</span>' +
          '</span>' +
        '</div>' +
        '<p style="margin:8px 0 0;font-size:12.5px;color:#475569;text-align:center;line-height:1.6;">change in consumption divided by change in income.</p>'
      },
      right: {
        tone: 'blue', icon: '📋', iconStyle: 'circle',
        label: 'Worked example',
        text: '<ul style="margin:0;padding:0 0 0 16px;font-size:13px;line-height:1.85;color:#0B1426;"><li>Income rises by £100</li><li>Consumption rises by £80</li><li>MPC = 80 ÷ 100 = 0.8</li></ul><div style="border-top:1px dashed #93C5FD;margin:10px 0;"></div><p style="margin:0;font-size:13px;color:#0B1426;"><strong>MPC = 0.8</strong> – 80p of each extra £1 is spent.</p>'
      },

      causesLabel: 'WHY IT VARIES',
      causesEmoji: '📊',
      causes: [
        {
          tone: 'blue', icon: '👥', head: 'Lower-income households',
          body: 'Usually have higher MPCs because most extra income is spent.'
        },
        {
          tone: 'amber', icon: '👤', head: 'Higher-income households',
          body: 'Often have lower MPCs because more income can be saved.'
        },
        {
          tone: 'purple', icon: '🏛️', head: 'Confidence and credit',
          body: 'Easy borrowing and optimism can raise spending out of extra income.'
        }
      ],

      versusRows: {
        title: 'MPC IN CONTEXT',
        emoji: '⚖️',
        leftTone: 'green',
        rightTone: 'purple',
        rows: [
          {
            left:  { icon: '🌊', head: 'High MPC – bigger spending ripple', sub: 'More of each extra pound circulates through the economy.' },
            right: { icon: '💧', head: 'Low MPC – more saving leakages',     sub: 'More of each extra pound is saved, so the ripple is smaller.' }
          }
        ]
      },

      conclusion: {
        title: 'Big idea',
        text: 'The higher the MPC, the stronger the spending response to extra income.'
      },

      examEdge: {
        title: 'Exam edge',
        text: 'A strong answer does not just calculate MPC – it explains what the value means for household behaviour and the wider economy.'
      }
    },

    /* ── CARD 4 ── Determinants of Consumption ────────────────────── */
    {
      id: 'determinants',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 4 of 8',
      title: 'Determinants of Consumption',
      lede: 'Consumption shifts when the forces affecting household spending change.',
      ledeStyle: 'plain',

      tip: { icon: '✅', tone: 'green', text: 'A change in any driver can shift consumption even if income is unchanged.' },

      causesFirst: true,
      causesLabel: 'THE SIX DRIVERS',
      causesEmoji: '⚙️',
      causesCols: 3,
      causes: [
        {
          tone: 'blue', icon: '%', head: 'Interest rates',
          body: 'Higher rates discourage borrowing and spending.<div style="margin-top:8px;padding-top:8px;border-top:1px dashed #93C5FD;font-size:12px;color:#1E40AF;font-weight:700;">↓ C tends to fall.</div>'
        },
        {
          tone: 'amber', icon: '😊', head: 'Consumer confidence',
          body: 'Optimism lifts spending – pessimism makes households hold back.<div style="margin-top:8px;padding-top:8px;border-top:1px dashed #FCD34D;font-size:12px;color:#B45309;font-weight:700;">↕ C can rise or fall.</div>'
        },
        {
          tone: 'purple', icon: '📈', head: 'Wealth / asset prices',
          body: 'Rising house or share prices boost perceived wealth and C.<div style="margin-top:8px;padding-top:8px;border-top:1px dashed #C4B5FD;font-size:12px;color:#6D28D9;font-weight:700;">↑ C tends to rise.</div>'
        },
        {
          tone: 'green', icon: '🏦', head: 'Credit availability',
          body: 'Easier lending supports spending; credit tightening cuts it.<div style="margin-top:8px;padding-top:8px;border-top:1px dashed #6EE7B7;font-size:12px;color:#047857;font-weight:700;">↕ C can rise or fall.</div>'
        },
        {
          tone: 'amber', icon: '👥', head: 'Income distribution',
          body: 'Shifting income toward lower-income groups can raise C because their MPC is higher.<div style="margin-top:8px;padding-top:8px;border-top:1px dashed #FCD34D;font-size:12px;color:#B45309;font-weight:700;">↑ C tends to rise.</div>'
        },
        {
          tone: 'rose', icon: '🛒', head: 'Inflation expectations',
          body: 'Expected price rises can pull spending forward now.<div style="margin-top:8px;padding-top:8px;border-top:1px dashed #FDA4AF;font-size:12px;color:#BE123C;font-weight:700;">↑ C tends to rise.</div>'
        }
      ],

      pairLabel: 'FAST SORT',
      pairEmoji: '⚡',
      left: {
        tone: 'green', icon: '➕', iconStyle: 'circle',
        label: 'Usually pushes C up',
        text: '<ul style="margin:0;padding:0 0 0 16px;font-size:13px;line-height:1.85;color:#0B1426;"><li>Rising confidence</li><li>Easier credit</li><li>Rising wealth</li></ul>'
      },
      right: {
        tone: 'rose', icon: '➖', iconStyle: 'circle',
        label: 'Usually pushes C down',
        text: '<ul style="margin:0;padding:0 0 0 16px;font-size:13px;line-height:1.85;color:#0B1426;"><li>Higher interest rates</li><li>Weaker confidence</li><li>Tighter credit</li></ul>'
      },

      conclusion: {
        title: 'Big idea',
        text: 'Consumption depends on both ability to spend and willingness to spend.'
      },

      examEdge: {
        title: 'Exam edge',
        text: 'Do not list determinants randomly – explain the mechanism linking each factor to household spending.'
      }
    },

    /* ── CARD 5 ── Average and Marginal Propensities ──────────────── */
    {
      id: 'propensities',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 5 of 8',
      title: 'Average and marginal propensities',
      lede: 'Average propensities describe the share of income consumed or saved overall. Marginal propensities describe what happens at the margin.',
      ledeStyle: 'plain',

      tip: { icon: '✅', tone: 'green', text: 'Average measures look at the whole income level – marginal measures look at the extra pound.' },

      pairFirst: true,
      pairLabel: 'THE IDENTITIES',
      pairEmoji: '⚖️',
      left: {
        tone: 'blue', icon: '📊', iconStyle: 'circle',
        label: 'Average propensities',
        text: '<ul style="margin:0;padding:0 0 0 16px;font-size:13px;line-height:1.85;color:#0B1426;"><li><strong>APC = C / Y</strong> – average propensity to consume.</li><li><strong>APS = S / Y</strong> – average propensity to save.</li></ul><div style="border-top:1px dashed #93C5FD;margin:10px 0;"></div><p style="margin:0;font-size:14px;font-weight:800;color:#1E40AF;text-align:center;">APC + APS = 1</p>'
      },
      right: {
        tone: 'amber', icon: '📈', iconStyle: 'circle',
        label: 'Marginal propensities',
        text: '<ul style="margin:0;padding:0 0 0 16px;font-size:13px;line-height:1.85;color:#0B1426;"><li><strong>MPC = ΔC / ΔY</strong> – marginal propensity to consume.</li><li><strong>MPS = ΔS / ΔY</strong> – marginal propensity to save.</li></ul><div style="border-top:1px dashed #FCD34D;margin:10px 0;"></div><p style="margin:0;font-size:14px;font-weight:800;color:#B45309;text-align:center;">MPC + MPS = 1</p>'
      },

      causesLabel: 'LOW-INCOME DISSAVING',
      causesEmoji: '👥',
      causes: [
        {
          tone: 'green', icon: '🪧', head: 'Very low income household',
          body: 'Consumption can exceed income, so <strong>APC &gt; 1</strong>. Household must dissave or borrow.'
        },
        {
          tone: 'purple', icon: '🏠', head: 'Normal income household',
          body: 'Some income is saved, so <strong>APC &lt; 1</strong>. The rest funds future spending.'
        },
        {
          tone: 'amber', icon: '⭐', head: 'Dissaving',
          body: 'Spending more than current income – financed by running down savings or taking on debt.'
        }
      ],

      comparisonTable: {
        title: 'QUICK COMPARISON',
        emoji: '📋',
        columns: ['What it tells you'],
        columnTones: ['blue'],
        rows: [
          { label: 'Average',  values: ['tells us the share of total income spent.'] },
          { label: 'Marginal', values: ['tells us how an extra pound is split.'] }
        ]
      },

      conclusion: {
        title: 'Big idea',
        text: 'Average and marginal propensities answer different questions – total shares versus extra income.'
      },

      examEdge: {
        title: 'Exam edge',
        text: 'Students often mix up APC and MPC. Use average for overall shares and marginal for multiplier analysis.'
      }
    },

    /* ── CARD 6 ── Consumption and the multiplier ─────────────────── */
    {
      id: 'consumption-multiplier',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 6 of 8',
      title: 'Consumption and the multiplier',
      lede: 'One household\'s spending becomes another household\'s income. That income is spent again – and again. So, the higher the MPC, the larger the multiplier effect.',
      ledeStyle: 'plain',

      tip: { icon: '✅', tone: 'green', text: 'Higher MPC – bigger multiplier.' },

      flowChart: {
        svgKey: 'multiplierRipple',
        label: 'THE RIPPLE',
        emoji: '💧',
        caption: 'Each round is 60% of the last (MPC = 0.6). Summed over all rounds: £25bn.'
      },

      pairLabel: 'THE MULTIPLIER FORMULA',
      pairEmoji: '🧮',
      left: {
        tone: 'blue', icon: '🧮', iconStyle: 'circle',
        label: 'The multiplier formula',
        text: '<div style="display:flex;align-items:center;justify-content:center;gap:14px;font-size:30px;font-weight:800;color:#1E40AF;margin:14px 0 8px;line-height:1;">' +
          '<span>k =</span>' +
          '<span style="display:inline-flex;flex-direction:column;align-items:center;line-height:1;">' +
            '<span style="padding:0 14px 6px;">1</span>' +
            '<span style="padding:6px 14px 0;border-top:3px solid #1E40AF;">(1 − MPC)</span>' +
          '</span>' +
        '</div>' +
        '<p style="margin:8px 0 0;font-size:12.5px;color:#475569;text-align:center;line-height:1.6;">k = multiplier · MPC = marginal propensity to consume</p>'
      },
      right: {
        tone: 'green', icon: '📋', iconStyle: 'circle',
        label: 'Worked example',
        text: '<ul style="margin:0;padding:0 0 0 16px;font-size:13px;line-height:1.85;color:#0B1426;"><li>MPC = 0.6</li><li>k = 1 / (1 − 0.6) = <strong>2.5</strong></li><li>£10bn injection</li></ul><div style="border-top:1px dashed #6EE7B7;margin:10px 0;"></div><p style="margin:0;font-size:13px;color:#0B1426;"><strong>£10bn injection → £25bn total AD.</strong></p>'
      },

      flowTitle: 'WHY IT HAPPENS',
      flowEmoji: '👥',
      flowSep: '→',
      flow: [
        { tone: 'blue',   icon: '🛒', title: "One person's spending", sub: 'Someone buys goods or services.' },
        { tone: 'amber',  icon: '👥', title: "Becomes another's income", sub: 'That seller receives income.' },
        { tone: 'purple', icon: '💷', title: 'Part is spent again',      sub: 'They spend a share (MPC) of that income.' },
        { tone: 'green',  icon: '🌊', title: 'The ripple continues',    sub: 'Each round creates the next round.' }
      ],

      summaryRow: [
        { tone: 'green', icon: '📈', title: 'If MPC is high',
          text: 'Households spend more of each extra pound. More rounds of spending and a larger multiplier.' },
        { tone: 'amber', icon: '📉', title: 'If MPC is low',
          text: 'Households save more of each extra pound. More leakages into saving and a smaller multiplier.' }
      ],

      conclusion: {
        title: 'Big idea',
        text: 'The multiplier is powered by consumption – the more of each extra pound households spend, the stronger the ripple.'
      },

      examEdge: {
        title: 'Exam edge',
        text: 'Always show the chain from injection to income to further consumption – not just the formula.'
      }
    },

    /* ── CARD 7 ── Real-world consumption ─────────────────────────── */
    {
      id: 'real-world-consumption',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 7 of 8',
      title: 'Real-world consumption',
      lede: 'Consumption theory becomes more memorable when it is linked to real events. Recent UK episodes show how quickly changes in confidence, incomes and wealth can shift household spending.',
      ledeStyle: 'plain',

      tip: { icon: '✅', tone: 'green', text: 'Changes in consumption quickly show up in aggregate demand.' },

      causesFirst: true,
      causesLabel: 'THREE UK EPISODES',
      causesEmoji: '📊',
      causesCols: 1,
      causes: [
        {
          tone: 'blue', icon: '✈️', head: 'Post-pandemic revenge spending – 2021–22',
          body: 'Households spent rapidly on travel, hospitality and leisure once restrictions ended. <strong style="color:#1E40AF;">↑ C surged.</strong>'
        },
        {
          tone: 'amber', icon: '£', head: 'Cost-of-living squeeze – 2022–23',
          body: 'Real wages were squeezed by inflation, so household spending power weakened. <strong style="color:#B45309;">↓ C slowed.</strong>'
        },
        {
          tone: 'purple', icon: '🏠', head: 'Housing wealth effect',
          body: 'Rising house prices can boost confidence and make households feel wealthier, supporting spending. <strong style="color:#6D28D9;">↑ Confidence-led C rise.</strong>'
        }
      ],

      comparisonTable: {
        title: 'EPISODE COMPARISON',
        emoji: '📋',
        columns: ['Effect on consumption', 'Wider AD impact'],
        columnTones: ['blue', 'purple'],
        rows: [
          { label: 'Post-pandemic reopening',     values: ['Rapid increase in spending',         'Strong boost to aggregate demand'] },
          { label: 'High inflation, wage squeeze', values: ['Slower growth in spending',          'Weaker AD growth or negative contribution'] },
          { label: 'Rising house prices and wealth', values: ['Increase via higher confidence',   'Positive contribution to aggregate demand'] }
        ]
      },

      summaryRow: [
        { tone: 'blue', icon: 'ℹ️', title: 'Watch out for nominal vs real', text: 'Real consumption can fall even when nominal spending rises, if inflation is high.' }
      ],

      conclusion: {
        title: 'Big idea',
        text: 'Consumption is shaped by confidence, real incomes and wealth – not just by income alone.'
      },

      examEdge: {
        title: 'Exam edge',
        text: 'Use recent UK examples carefully – identify which determinant changed and whether the effect on consumption was temporary or persistent.'
      }
    },

    /* ── CARD 8 ── Evaluating consumption as an AD driver ─────────── */
    {
      id: 'evaluating-consumption',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 8 of 8',
      title: 'Evaluating consumption as an AD driver',
      lede: 'Consumption matters hugely, but the effect on the economy depends on leakages, timing and wider conditions.',
      ledeStyle: 'plain',

      tip: { icon: '✅', tone: 'green', text: 'Consumption is powerful – but not every rise in C boosts UK output equally.' },

      causesFirst: true,
      causesLabel: 'THE SIX EVALUATION MOVES',
      causesEmoji: '⚖️',
      causesStyle: 'numbered',
      causesCols: 3,
      causes: [
        { tone: 'blue',   icon: '📉', head: 'Volatility',
          body: 'Confidence can swing quickly, making consumption unstable.' },
        { tone: 'amber',  icon: '🌐', head: 'Import leakage',
          body: 'Some extra spending goes on imports, so UK output rises by less.' },
        { tone: 'purple', icon: '👥', head: 'Inequality',
          body: 'MPC varies by income group, so who gets the income matters.' },
        { tone: 'rose',   icon: '🔥', head: 'Inflation risk',
          body: 'A surge in C can become demand-pull inflation if spare capacity is low.' },
        { tone: 'green',  icon: '🌱', head: 'Sustainability',
          body: 'Debt-funded consumption can support demand now but create later weakness.' },
        { tone: 'slate',  icon: '⏱️', head: 'Policy lag',
          body: 'Interest-rate changes take time, often around 18 months, to feed through to spending.' }
      ],

      flowTitle: 'HOW TO JUDGE',
      flowEmoji: '📊',
      flowSep: '→',
      flow: [
        { tone: 'blue',   icon: '❓', title: 'How big is the MPC?',         sub: 'Sets the size of the spending ripple.' },
        { tone: 'amber',  icon: '🌐', title: 'How much leaks abroad?',      sub: 'Imports reduce the AD impact.' },
        { tone: 'purple', icon: '📊', title: 'Is there spare capacity?',    sub: 'Determines output vs inflation split.' },
        { tone: 'green',  icon: '🔄', title: 'Temporary or sustainable?',   sub: 'A persistent rise matters far more.' }
      ],

      conclusion: {
        title: 'Big idea',
        text: 'Consumption is the biggest engine of AD, but its impact depends on leakages, confidence and capacity.'
      },

      examEdge: {
        title: 'Exam edge',
        text: 'The best essays move from "C rises" to "therefore AD rises", then evaluate leakages, inflation pressure and whether the effect lasts.'
      },

      quizCta: { href: TopicLoader.routes.quiz('main'), label: 'Test yourself →' }
    }

  ]
};
