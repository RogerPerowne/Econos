/* ============================================================
   ECONOS – content data for aggregate_demand
   8 cards on AD as a system. Each component (C, I, G, X−M)
   has its own deep-dive topic – see js/data/consumption,
   investment, government_spending, net_trade.
   Edexcel Theme 2.2.1
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'aggregate_demand',
  topicNum: '2.1',
  theme: 'Theme 2 · The National and Global Economy',
  title: 'Aggregate Demand',
  estTime: '10-12 minutes',
  goal: 'Lock in AD as a system – formula, slope, shifts, multiplier, real-world application',

  intro: {
    heroKey: 'heroAd',
    summary: 'Four engines, one curve. This topic locks in AD as a system: the formula, why it slopes down, how it moves, the multiplier, and the A* evaluation framework. Each component (C, I, G, X−M) has its own deep-dive topic.',
    doInThis: 'Walk through the AD formula, the three slope effects, movement vs shifts, what shifts AD, the multiplier (basic and open-economy), real-world UK case studies, and the A* evaluation framework.',
    outcomes: [
      'Define AD and its four components with UK weights',
      'Explain why AD slopes downward – three effects',
      'Distinguish movement along from shift of AD',
      'List the factors that shift each engine',
      'Apply the multiplier to fiscal stimulus',
      'Use real UK case studies as essay application',
      'Evaluate AD analysis with multiplier, lags, AS limits, crowding out'
    ],
    tip: 'Each component (C, I, G, X−M) has its own dedicated topic for the deep dive on determinants and policy.',
    stages: [
      { num: 1, name: 'Learn',  sub: '8 concept cards',                  state: 'current' },
      { num: 2, name: 'Master', sub: 'Apply in exam-style questions',    state: 'locked' },
      { num: 3, name: 'Review', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [

    /* ── CARD 1 ── The AD formula ─────────────────────────────────── */
    {
      id: 'composition',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'The AD formula',
      lede: 'Aggregate Demand is the total spending on UK goods and services at each price level. It is driven by four spending engines across the whole economy.',
      ledeStyle: 'plain',

      tip: { icon: '✅', tone: 'green', text: 'AD is whole-economy spending – not demand for one single product.' },

      causesFirst: true,
      causesLabel: 'THE FOUR ENGINES',
      causesEmoji: '⚙️',
      causesStyle: 'numbered',
      causes: [
        {
          tone: 'blue', icon: '🛒', head: 'Consumption (C)',
          body: '<div style="font-size:28px;font-weight:800;color:#1E40AF;text-align:center;margin:6px 0;">≈ 60%</div>Household spending on goods and services.'
        },
        {
          tone: 'amber', icon: '🏭', head: 'Investment (I)',
          body: '<div style="font-size:28px;font-weight:800;color:#B45309;text-align:center;margin:6px 0;">≈ 17%</div>Firms spending on capital – buildings, machinery, R&amp;D.'
        },
        {
          tone: 'purple', icon: '🏛️', head: 'Government (G)',
          body: '<div style="font-size:28px;font-weight:800;color:#6D28D9;text-align:center;margin:6px 0;">≈ 20%</div>Public spending on goods and services (transfers excluded).'
        },
        {
          tone: 'green', icon: '🚢', head: 'Net exports (X − M)',
          body: '<div style="font-size:28px;font-weight:800;color:#047857;text-align:center;margin:6px 0;">≈ 3%</div>Exports minus imports – often slightly negative for the UK.'
        }
      ],

      flowTitle: 'THE FORMULA',
      flowEmoji: '🧮',
      flowSep: ['=', '+', '+', '+'],
      flow: [
        { title: 'AD',      tone: 'slate'  },
        { title: 'C',       tone: 'blue'   },
        { title: 'I',       tone: 'amber'  },
        { title: 'G',       tone: 'purple' },
        { title: '(X − M)', tone: 'green'  }
      ],

      pairLabel: 'NOT THE SAME AS MARKET DEMAND',
      pairEmoji: '⚖️',
      left: {
        tone: 'blue', icon: '🌐', iconStyle: 'circle',
        label: 'Aggregate demand',
        text: '<p style="margin:0;font-size:13px;color:#0B1426;">Total spending in the <strong>whole economy</strong>. A macro concept covering every household, firm, government and trading partner.</p>'
      },
      right: {
        tone: 'amber', icon: '🛒', iconStyle: 'circle',
        label: 'Market demand',
        text: '<p style="margin:0;font-size:13px;color:#0B1426;">Demand for <strong>one good or service</strong>. A micro concept – buyers responding to that product\'s price.</p>'
      },

      whyItMatters: {
        title: 'GO DEEPER ON EACH ENGINE',
        emoji: '🔗',
        items: [
          { tone: 'blue',   icon: '🛒', label: 'Consumption',         text: 'See the Consumption topic for MPC, savings ratio and UK trends.' },
          { tone: 'amber',  icon: '🏭', label: 'Investment',          text: 'See the Investment topic for the accelerator and animal spirits.' },
          { tone: 'purple', icon: '🏛️', label: 'Government spending', text: 'See Government Spending for automatic stabilisers and fiscal rules.' },
          { tone: 'green',  icon: '🚢', label: 'Net trade',           text: 'See Net Trade for Marshall-Lerner and the J-curve.' }
        ]
      },

      conclusion: {
        title: 'Big idea',
        text: 'When one or more engines speed up, AD shifts right. When they slow down, AD shifts left.'
      },

      examEdge: {
        title: 'Exam edge',
        text: 'A strong answer defines AD first, then identifies which component – C, I, G or (X − M) – is changing.'
      }
    },

    /* ── CARD 2 ── Why AD slopes downward ─────────────────────────── */
    {
      id: 'slope',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 2 of 8',
      title: 'Why AD slopes downward',
      lede: 'Three effects explain why a lower price level means more total spending.',
      ledeStyle: 'plain',

      tip: { icon: '🔒', tone: 'green', text: 'AD slopes down for macro reasons – not for the same reason as the demand curve for one product.' },

      flowChart: {
        svgKey: 'adSlopeDiagram',
        label: 'THE THREE EFFECTS',
        emoji: '📈',
        caption: 'P falls from P₁ to P₂ – total spending (Y) rises from Y₁ to Y₂.'
      },

      causesFirst: false,
      causesLabel: 'THE EFFECTS – ONE BY ONE',
      causesEmoji: '⚙️',
      causesStyle: 'numbered',
      causes: [
        {
          tone: 'green', icon: '💰', head: 'Wealth effect (Pigou)',
          body: 'P falls → the real value of money and savings rises → households feel wealthier → <strong>C rises</strong>.'
        },
        {
          tone: 'blue', icon: '📉', head: 'Interest rate effect (Keynes)',
          body: 'P falls → money demand falls → interest rates fall → cheaper borrowing → <strong>I and C rise</strong>.'
        },
        {
          tone: 'amber', icon: '🌐', head: 'International substitution',
          body: 'P falls → UK goods become relatively cheaper than foreign goods → <strong>(X − M) rises</strong>.'
        }
      ],

      pairLabel: 'NOT THE SAME AS MARKET DEMAND',
      pairEmoji: '⚖️',
      left: {
        tone: 'blue', icon: '🌐', iconStyle: 'circle',
        label: 'AD slopes down because…',
        text: '<ul style="margin:0;padding:0 0 0 16px;font-size:13px;line-height:1.7;color:#0B1426;"><li><strong>Wealth effect</strong> – lower P raises real balances.</li><li><strong>Interest rate effect</strong> – lower P reduces rates and boosts spending.</li><li><strong>International substitution</strong> – lower P makes UK goods cheaper.</li></ul>'
      },
      right: {
        tone: 'amber', icon: '🛒', iconStyle: 'circle',
        label: 'Market demand slopes down because…',
        text: '<ul style="margin:0;padding:0 0 0 16px;font-size:13px;line-height:1.7;color:#0B1426;"><li><strong>Income effect</strong> – lower P raises real income, so quantity demanded rises.</li><li><strong>Substitution effect</strong> – lower P makes the good relatively cheaper, buyers switch to it.</li></ul>'
      },

      summaryRow: [
        { tone: 'amber', icon: '⚠️', title: 'Common error', text: 'Do not use income and substitution effects to explain the AD curve.' }
      ],

      conclusion: {
        title: 'Big idea',
        text: 'Lower price levels boost total spending through wealth, interest-rate and international-substitution channels.'
      },

      examEdge: {
        title: 'Exam edge',
        text: 'Always separate the reasons for the AD curve from the reasons for an individual demand curve.'
      }
    },

    /* ── CARD 3 ── Movement along vs shifts of AD ────────────────── */
    {
      id: 'movement-vs-shift',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 3 of 8',
      title: 'Movement along vs shifts of AD',
      lede: 'A change in the price level moves you along AD. A change in any non-price determinant shifts the whole curve.',
      ledeStyle: 'plain',

      tip: { icon: '🔒', tone: 'green', text: 'Price level change = movement. Non-price determinant change = shift.' },

      flowChart: {
        svgKey: 'adMovementShift',
        label: 'THE CRUCIAL DISTINCTION',
        emoji: '⚖️',
        caption: 'Left: same curve, different point (price level change). Right: whole curve moves (component change).'
      },

      comparisonTable: {
        title: 'MOVEMENT VS SHIFT',
        emoji: '📋',
        columns: ['Movement along', 'Shift'],
        columnTones: ['blue', 'purple'],
        rows: [
          { label: 'Cause',         values: ['Change in the price level',                   'Change in C, I, G or (X − M)'] },
          { label: 'What changes?', values: ['Quantity demanded (Y) at a given P',           'Quantity demanded (Y) at every P'] },
          { label: 'Diagram clue',  values: ['One AD curve, move along it',                  'AD curve moves left or right'] },
          { label: 'Best wording',  values: ['"Movement along AD."',                         '"Rightward shift of AD" or "Leftward shift of AD"'] }
        ]
      },

      whyItMatters: {
        title: 'FAST DIAGNOSIS',
        emoji: '🔍',
        items: [
          { tone: 'blue',   icon: '❓', label: 'What changed?',       text: 'Pin down the trigger before naming the effect.' },
          { tone: 'amber',  icon: '💰', label: 'Price level?',         text: 'A change in P → movement along AD.' },
          { tone: 'purple', icon: '⚙️', label: 'Component changed?',  text: 'A change in C, I, G or (X − M) → shift of AD.' },
          { tone: 'green',  icon: '🧭', label: 'Movement or shift?',  text: 'Name the type before writing the analysis.' }
        ]
      },

      summaryRow: [
        { tone: 'blue',   icon: '🛢️', title: 'Example – movement', text: 'Oil-price-driven inflation changes the price level → <strong>movement along AD</strong>.' },
        { tone: 'purple', icon: '👥', title: 'Example – shift',    text: 'Consumer confidence rises → C rises at every price level → <strong>AD shifts right</strong>.' }
      ],

      conclusion: {
        title: 'Big idea',
        text: 'Essay marks often hinge on naming movement or shift correctly before analysing the effect.'
      },

      examEdge: {
        title: 'Exam edge',
        text: 'Write the diagnosis first – for example, "This is a rightward shift of AD because consumer confidence raises C at every price level."'
      }
    },

    /* ── CARD 4 ── What shifts AD? ───────────────────────────────── */
    {
      id: 'shifters',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 4 of 8',
      title: 'What shifts AD?',
      lede: 'A shift happens when something changes one of the four engines at every price level.',
      ledeStyle: 'plain',

      tip: { icon: '✅', tone: 'green', text: 'Think in four engines – C, I, G and (X − M). If one changes, the whole AD curve shifts.' },

      causesFirst: true,
      causesLabel: 'THE FOUR ENGINES',
      causesEmoji: '⚙️',
      causesStyle: 'numbered',
      causesCols: 2,
      causes: [
        {
          tone: 'blue', icon: '🛒', head: 'Consumption (C)',
          body: '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px;font-size:12px;line-height:1.55;">' +
            '<div><div style="font-weight:800;color:#1E40AF;margin-bottom:4px;">+ Shifts right (↑ AD)</div><ul style="margin:0;padding:0 0 0 14px;"><li>Disposable income up</li><li>Interest rates down</li><li>Wealth up</li><li>Confidence up</li><li>Debt easier to get</li></ul></div>' +
            '<div><div style="font-weight:800;color:#1E40AF;margin-bottom:4px;">− Shifts left (↓ AD)</div><ul style="margin:0;padding:0 0 0 14px;"><li>Disposable income down</li><li>Interest rates up</li><li>Wealth down</li><li>Confidence down</li><li>Debt harder to get</li></ul></div>' +
            '</div>'
        },
        {
          tone: 'amber', icon: '🏭', head: 'Investment (I)',
          body: '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px;font-size:12px;line-height:1.55;">' +
            '<div><div style="font-weight:800;color:#B45309;margin-bottom:4px;">+ Shifts right (↑ AD)</div><ul style="margin:0;padding:0 0 0 14px;"><li>Business confidence / animal spirits up</li><li>Interest rates down</li><li>Corporate tax down</li><li>Accelerator up</li></ul></div>' +
            '<div><div style="font-weight:800;color:#B45309;margin-bottom:4px;">− Shifts left (↓ AD)</div><ul style="margin:0;padding:0 0 0 14px;"><li>Business confidence / animal spirits down</li><li>Interest rates up</li><li>Corporate tax up</li><li>Accelerator down</li></ul></div>' +
            '</div>'
        },
        {
          tone: 'purple', icon: '🏛️', head: 'Government spending (G)',
          body: '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px;font-size:12px;line-height:1.55;">' +
            '<div><div style="font-weight:800;color:#6D28D9;margin-bottom:4px;">+ Shifts right (↑ AD)</div><ul style="margin:0;padding:0 0 0 14px;"><li>Fiscal stance expansionary</li><li>Election cycle spending up</li><li>Automatic stabilisers kick in (recession)</li></ul></div>' +
            '<div><div style="font-weight:800;color:#6D28D9;margin-bottom:4px;">− Shifts left (↓ AD)</div><ul style="margin:0;padding:0 0 0 14px;"><li>Fiscal stance contractionary</li><li>Election cycle spending down</li><li>Austerity / debt-rule tightening</li></ul></div>' +
            '</div>'
        },
        {
          tone: 'green', icon: '🚢', head: 'Net trade (X − M)',
          body: '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px;font-size:12px;line-height:1.55;">' +
            '<div><div style="font-weight:800;color:#047857;margin-bottom:4px;">+ Shifts right (↑ AD)</div><ul style="margin:0;padding:0 0 0 14px;"><li>Exchange rate depreciation</li><li>World income up</li><li>UK competitiveness up</li><li>Foreign trade barriers fall</li></ul></div>' +
            '<div><div style="font-weight:800;color:#047857;margin-bottom:4px;">− Shifts left (↓ AD)</div><ul style="margin:0;padding:0 0 0 14px;"><li>Exchange rate appreciation</li><li>World income down</li><li>UK competitiveness down</li><li>Foreign trade barriers rise</li></ul></div>' +
            '</div>'
        }
      ],

      pairLabel: 'RIGHT OR LEFT?',
      pairEmoji: '⚖️',
      left: {
        tone: 'blue', icon: '→', iconStyle: 'circle',
        label: 'AD shifts right when…',
        text: '<ol style="margin:0;padding:0 0 0 18px;font-size:13px;line-height:1.7;color:#0B1426;"><li>Consumers feel wealthier and spend more.</li><li>Firms invest more in new capacity.</li><li>The government spends or transfers more.</li></ol>'
      },
      right: {
        tone: 'amber', icon: '←', iconStyle: 'circle',
        label: 'AD shifts left when…',
        text: '<ol style="margin:0;padding:0 0 0 18px;font-size:13px;line-height:1.7;color:#0B1426;"><li>Consumers feel worse off and spend less.</li><li>Firms invest less in new capacity.</li><li>The government cuts spending or raises taxes.</li></ol>'
      },

      conclusion: {
        title: 'Big idea',
        text: 'A change in any one engine can shift AD – but in reality several often move together.'
      },

      examEdge: {
        title: 'Exam edge',
        text: 'Organise determinants by C, I, G and (X − M). That instantly gives essays better structure.'
      }
    },

    /* ── CARD 5 ── The multiplier – the ripple ───────────────────── */
    {
      id: 'multiplier-basic',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 5 of 8',
      title: 'The multiplier – the ripple',
      lede: 'A £10bn injection does not stay £10bn. One round of spending becomes income in the next.',
      ledeStyle: 'plain',

      tip: { icon: '✅', tone: 'green', text: 'Initial spending sets off further rounds of spending – that is the multiplier.' },

      pairFirst: true,
      pairLabel: 'THE SIMPLE MULTIPLIER',
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
        '<p style="margin:8px 0 0;font-size:12.5px;color:#475569;text-align:center;line-height:1.6;">k = multiplier<br>MPC = marginal propensity to consume</p>'
      },
      right: {
        tone: 'blue', icon: '📋', iconStyle: 'circle',
        label: 'Worked example',
        text: '<ul style="margin:0;padding:0 0 0 16px;font-size:13px;line-height:1.85;color:#0B1426;"><li>MPC = 0.6</li><li>k = 1 / (1 − 0.6) = <strong>2.5</strong></li><li>£10bn injection</li></ul><div style="border-top:1px dashed #93C5FD;margin:10px 0;"></div><p style="margin:0;font-size:13px;color:#0B1426;"><strong>Total AD increase = £10bn × 2.5 = £25bn</strong></p>'
      },

      flowChart: {
        svgKey: 'multiplierRipple',
        label: 'THE RIPPLE',
        emoji: '💧',
        caption: 'Each round is 60% of the last (MPC = 0.6). Summed over all rounds: £25bn.'
      },

      summaryRow: [
        { tone: 'blue', icon: '📊', title: 'Total increase in AD = £25bn', text: 'The sum of all rounds – initial £10bn × the multiplier of 2.5.' }
      ],

      whyItMatters: {
        title: 'WHY IT MATTERS',
        emoji: '📈',
        items: [
          { tone: 'blue',   icon: '🏛️', label: 'Fiscal stimulus',        text: 'Higher G does more than the headline amount because of the multiplier effect.' },
          { tone: 'amber',  icon: '📈', label: 'Investment boost',        text: 'Business investment lifts income, consumption and further investment across the economy.' },
          { tone: 'purple', icon: '👥', label: 'Why students underestimate', text: 'Ignoring the multiplier can understate the true impact of policy by 2 to 5 times.' }
        ]
      },

      conclusion: {
        title: 'Big idea',
        text: 'The multiplier links injections to a much larger total change in AD.'
      },

      examEdge: {
        title: 'Exam edge',
        text: 'Always state the mechanism – spending becomes income, then becomes more spending.'
      }
    },

    /* ── CARD 6 ── Leakages – the open-economy multiplier ─────────── */
    {
      id: 'multiplier-leakages',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 6 of 8',
      title: 'Leakages – the open-economy multiplier',
      lede: 'Real multipliers are smaller because part of each spending round leaks away.',
      ledeStyle: 'plain',

      tip: { icon: '✅', tone: 'green', text: 'Savings, taxes and imports drain the ripple at every round.' },

      pairFirst: true,
      pairLabel: 'THE REALISTIC FORMULA',
      pairEmoji: '⚙️',
      left: {
        tone: 'blue', icon: '🧮', iconStyle: 'circle',
        label: 'Open-economy formula',
        text: '<div style="display:flex;align-items:center;justify-content:center;gap:10px;font-size:18px;font-weight:800;color:#1E40AF;margin:14px 0 4px;line-height:1;white-space:nowrap;">' +
          '<span>k =</span>' +
          '<span style="display:inline-flex;flex-direction:column;align-items:center;line-height:1;">' +
            '<span style="padding:0 10px 6px;">1</span>' +
            '<span style="padding:6px 10px 0;border-top:3px solid #1E40AF;">MPS + MRT + MRM</span>' +
          '</span>' +
        '</div>' +
        '<p style="margin:10px 0 0;font-size:12px;color:#475569;text-align:center;line-height:1.7;">MPS = marginal propensity to save<br>MRT = marginal rate of tax<br>MRM = marginal propensity to import</p>'
      },
      right: {
        tone: 'blue', icon: '📋', iconStyle: 'circle',
        label: 'Worked example',
        text: '<ul style="margin:0;padding:0 0 0 16px;font-size:13px;line-height:1.85;color:#0B1426;"><li>MPS = 0.1</li><li>MRT = 0.2</li><li>MRM = 0.3</li></ul><div style="border-top:1px dashed #93C5FD;margin:10px 0;"></div><p style="margin:0;font-size:13px;color:#0B1426;"><strong>k = 1 / 0.6 = 1.67</strong> – much smaller than the textbook 2.5.</p>'
      },

      flowTitle: 'THE LEAKAGES',
      flowEmoji: '💧',
      flowSep: '→',
      flow: [
        { icon: '💧', title: 'Initial', sub: '£100',    tone: 'blue'   },
        { icon: '💧', title: 'Round 2', sub: '£60',     tone: 'amber'  },
        { icon: '💧', title: 'Round 3', sub: '£36',     tone: 'purple' },
        { icon: '💧', title: 'Round 4', sub: '£21.60',  tone: 'green'  },
        { icon: '💧', title: 'Round 5', sub: '£12.96',  tone: 'rose'   }
      ],

      summaryRow: [
        { tone: 'blue', icon: 'ℹ️', title: 'UK has high import leakage', text: 'UK multipliers are often small because the UK has a high propensity to import – stimulus partly boosts foreign output rather than domestic AD.' }
      ],

      versusRows: {
        title: 'TEXTBOOK VS OPEN ECONOMY',
        emoji: '⚖️',
        leftTone: 'blue',
        rightTone: 'amber',
        rows: [
          {
            left:  { icon: '📖', head: 'Textbook multiplier',     sub: 'Assumes only MPC matters – gives an optimistic figure (~2.5).' },
            right: { icon: '🌐', head: 'Open-economy multiplier', sub: 'Adds savings, tax and imports – gives the realistic figure (~1.5).' }
          }
        ]
      },

      whyItMatters: {
        title: 'WHY IT MATTERS',
        emoji: '💡',
        items: [
          { tone: 'blue',   icon: '🧮', label: 'Three leakages',        text: 'MPS (savings), MRT (tax), MRM (imports). Name all three for full marks.' },
          { tone: 'amber',  icon: '🌐', label: 'Open vs closed',         text: 'High-import economies have smaller multipliers – stimulus leaks abroad.' },
          { tone: 'purple', icon: '⚠️', label: 'Policy implication',     text: 'Headline stimulus figures overstate the real AD effect – adjust your essay accordingly.' }
        ]
      },

      conclusion: {
        title: 'Big idea',
        text: 'Leakages explain why real-world stimulus has a smaller impact than the simple textbook model suggests.'
      },

      examEdge: {
        title: 'Exam edge',
        text: 'Name the three leakages explicitly – MPS, MRT and MRM. Quote a realistic UK multiplier (~1.5) rather than the textbook 2.5.'
      }
    },

    /* ── CARD 7 ── AD in the real world ──────────────────────────── */
    {
      id: 'real-world',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 7 of 8',
      title: 'AD in the real world',
      lede: 'Recent UK episodes show how the four engines can be hit in very different ways.',
      ledeStyle: 'plain',

      tip: { icon: '✅', tone: 'green', text: 'AD theory becomes much clearer when tied to real events.' },

      causesFirst: true,
      causesLabel: 'UK CASE STUDIES',
      causesEmoji: '🏛️',
      causesStyle: 'numbered',
      causes: [
        {
          tone: 'blue', icon: '📉', head: '2008–09 GFC',
          body: 'C and I collapse, AD shifts sharply left.' +
            '<div style="border-top:1px dashed #BFDBFE;margin:10px 0 8px;"></div>' +
            '<div style="font-size:11.5px;font-weight:800;color:#1E40AF;margin-bottom:4px;">Engines hit</div>' +
            '<div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px;">' +
              '<span style="background:#1E40AF;color:#fff;border-radius:6px;padding:2px 8px;font-size:11px;font-weight:700;">C</span>' +
              '<span style="background:#1E40AF;color:#fff;border-radius:6px;padding:2px 8px;font-size:11px;font-weight:700;">I</span>' +
              '<span style="background:#DBEAFE;color:#1E40AF;border-radius:6px;padding:2px 8px;font-size:11px;font-weight:700;">G</span>' +
              '<span style="background:#DBEAFE;color:#1E40AF;border-radius:6px;padding:2px 8px;font-size:11px;font-weight:700;">X−M</span>' +
            '</div>' +
            '<div style="font-size:11.5px;font-weight:800;color:#1E40AF;margin-bottom:2px;">Outcome</div><div style="font-size:12.5px;margin-bottom:6px;">Recession.</div>' +
            '<div style="font-size:11.5px;font-weight:800;color:#1E40AF;margin-bottom:2px;">Policy response</div><div style="font-size:12.5px;">Fiscal stimulus + QE.</div>'
        },
        {
          tone: 'purple', icon: '🦠', head: '2020 COVID lockdown',
          body: 'All four engines hit at once – unprecedented AD shock.' +
            '<div style="border-top:1px dashed #DDD6FE;margin:10px 0 8px;"></div>' +
            '<div style="font-size:11.5px;font-weight:800;color:#6D28D9;margin-bottom:4px;">Engines hit</div>' +
            '<div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px;">' +
              '<span style="background:#6D28D9;color:#fff;border-radius:6px;padding:2px 8px;font-size:11px;font-weight:700;">C</span>' +
              '<span style="background:#6D28D9;color:#fff;border-radius:6px;padding:2px 8px;font-size:11px;font-weight:700;">I</span>' +
              '<span style="background:#6D28D9;color:#fff;border-radius:6px;padding:2px 8px;font-size:11px;font-weight:700;">G</span>' +
              '<span style="background:#6D28D9;color:#fff;border-radius:6px;padding:2px 8px;font-size:11px;font-weight:700;">X−M</span>' +
            '</div>' +
            '<div style="font-size:11.5px;font-weight:800;color:#6D28D9;margin-bottom:2px;">Outcome</div><div style="font-size:12.5px;margin-bottom:6px;">Sharp AD collapse – record GDP fall.</div>' +
            '<div style="font-size:11.5px;font-weight:800;color:#6D28D9;margin-bottom:2px;">Policy response</div><div style="font-size:12.5px;">Furlough kept C and G afloat.</div>'
        },
        {
          tone: 'amber', icon: '🛒', head: '2022 cost-of-living squeeze',
          body: 'Real wages fell, C compressed – AD growth stalled despite nominal expansion.' +
            '<div style="border-top:1px dashed #FDE68A;margin:10px 0 8px;"></div>' +
            '<div style="font-size:11.5px;font-weight:800;color:#B45309;margin-bottom:4px;">Engines hit</div>' +
            '<div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px;">' +
              '<span style="background:#B45309;color:#fff;border-radius:6px;padding:2px 8px;font-size:11px;font-weight:700;">C</span>' +
              '<span style="background:#FEF3C7;color:#B45309;border-radius:6px;padding:2px 8px;font-size:11px;font-weight:700;">I</span>' +
              '<span style="background:#FEF3C7;color:#B45309;border-radius:6px;padding:2px 8px;font-size:11px;font-weight:700;">G</span>' +
              '<span style="background:#FEF3C7;color:#B45309;border-radius:6px;padding:2px 8px;font-size:11px;font-weight:700;">X−M</span>' +
            '</div>' +
            '<div style="font-size:11.5px;font-weight:800;color:#B45309;margin-bottom:2px;">Outcome</div><div style="font-size:12.5px;margin-bottom:6px;">Weak AD growth.</div>' +
            '<div style="font-size:11.5px;font-weight:800;color:#B45309;margin-bottom:2px;">Policy response</div><div style="font-size:12.5px;">Targeted support + rate rises.</div>'
        }
      ],

      whyItMatters: {
        title: 'WHAT THE TIMELINE TEACHES',
        emoji: '💡',
        items: [
          { tone: 'blue',   icon: '⤵️', label: 'Many channels',                text: 'AD can fall through different channels – different shocks hit different engines with different intensities.' },
          { tone: 'purple', icon: '📋', label: 'Policy depends on diagnosis',  text: 'Responses should target the engines that are hit the hardest.' },
          { tone: 'amber',  icon: '👥', label: 'Engines move together',         text: 'Real-world shocks rarely hit just one engine – interactions matter.' }
        ]
      },

      summaryRow: [
        { tone: 'purple', icon: 'ℹ️', title: 'Essay tip', text: 'Use these cases as essay application examples – they upgrade abstract theory into named, dateable events.' }
      ],

      conclusion: {
        title: 'Big idea',
        text: 'The same AD framework helps explain banking crises, lockdowns and cost-of-living squeezes.'
      },

      examEdge: {
        title: 'Exam edge',
        text: 'The best application names which engine was hit – not just that "demand fell".'
      }
    },

    /* ── CARD 8 ── Evaluating AD analysis ────────────────────────── */
    {
      id: 'evaluating',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 8 of 8',
      title: 'Evaluating AD analysis',
      lede: 'Knowing the AD model is necessary. Knowing its limits is what lifts analysis to A*.',
      ledeStyle: 'plain',

      tip: { icon: '🔒', tone: 'green', text: 'AD analysis works best when you also judge multiplier size, composition, lags, spare capacity, crowding out and expectations.' },

      causesFirst: true,
      causesLabel: 'THE SIX EVALUATION MOVES',
      causesEmoji: '⚙️',
      causesStyle: 'numbered',
      causesCols: 3,
      causes: [
        {
          tone: 'blue', icon: '⏸️', head: 'Multiplier size is uncertain',
          body: 'The effect depends on MPC, leakages and confidence. Quote a realistic UK figure (~1.5) rather than the textbook 2.5.'
        },
        {
          tone: 'amber', icon: '🧩', head: 'Composition of the shift',
          body: 'Different shocks have different multipliers. Capital G &gt; current G &gt; transfers &gt; tax cuts. Investment shocks get amplified by the accelerator. The <em>type</em> of AD change matters as much as the size.'
        },
        {
          tone: 'purple', icon: '⏳', head: 'Time lags',
          body: 'Policy effects take time – recognition lag, decision lag, then impact lag. Fiscal months, monetary 12–18 months.'
        },
        {
          tone: 'green', icon: '🏗️', head: 'AS constraints',
          body: 'Supply limits, cost pressures and bottlenecks can restrict how much real output can rise. Near full employment, AD shifts cause inflation, not growth.'
        },
        {
          tone: 'blue', icon: '£', head: 'Crowding out',
          body: 'Higher G can push up interest rates and reduce private investment – partially offsetting the stimulus.'
        },
        {
          tone: 'rose', icon: '👥', head: 'Confidence and expectations',
          body: '"Animal spirits" drive spending and can swamp the textbook mechanism – confidence shocks dominate in practice.'
        }
      ],

      flowTitle: 'YES AD ANALYSIS WORKS, BUT…',
      flowEmoji: '⚖️',
      flow: [
        { icon: '🔍', title: 'Identify the shock',    sub: 'What changed and which component(s) moved?', tone: 'blue'   },
        { icon: '📏', title: 'Spare capacity?',        sub: 'How much slack is in the economy?',          tone: 'green'  },
        { icon: '⏳', title: 'Multiplier and lags',    sub: 'How big is k and how long will it take?',     tone: 'amber'  },
        { icon: '👥', title: 'Side effects',            sub: 'Crowding out · confidence · expectations',    tone: 'purple' }
      ],

      summaryRow: [
        { tone: 'purple', icon: 'ℹ️', title: 'When AD matters most', text: 'Crowding out matters more near full employment. AD boosts output more strongly in recession.' }
      ],

      conclusion: {
        title: 'Big idea',
        text: 'AD shifts can raise output powerfully – but only when there is spare capacity and the multiplier is strong enough.'
      },

      examEdge: {
        title: 'Exam edge',
        text: 'Strong essays start with AD, then qualify with lags, spare capacity, crowding out and animal spirits.'
      }
    }

  ]
};
