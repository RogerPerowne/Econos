/* ============================================================
   ECONOS – Public Sector Finances (Edexcel A 4.5.3)
   7 cards · interactive-first build
   Built from the ChatGPT → Claude mockup pipeline.
   The fiscal map, automatic vs discretionary policy, deficit vs debt
   (the bathtub), structural vs cyclical deficits (output gaps), what
   moves the deficit (the pressure panel), what moves the debt (the
   snowball), and the whole story.

   New visuals:
     - fiscalMapHub          (Card 1 — six fiscal concepts)
     - debtBathtub           (Card 3 — stock-vs-flow illustration)
     - outputGapCompare      (Card 4 — two-panel chart-engine diagram)
     - deficitPressurePanel  (Card 5 — six gauges on two rows)
     - debtSnowball          (Card 6 — the debt snowball illustration)
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'public-sector-finances',
  topicNum: '4.5.3',
  theme: 'Theme 4 \xb7 A Global Perspective',
  title: 'Public Sector Finances',
  estTime: '20 min',
  goal: 'Distinguish deficits from debt, separate cyclical from structural borrowing, explain what moves each, and evaluate when borrowing helps and when it becomes a problem',

  intro: {
    heroKey: 'heroFiscal',
    summary: 'Deficits and debt tell different parts of the fiscal story: a deficit is a flow — the gap between spending and revenue in a year — while national debt is the stock built up from past deficits. Getting that distinction right is the key to judging when borrowing helps and when it harms.',
    doInThis: 'Separate the annual deficit (a flow) from the national debt (a stock), and cyclical from structural borrowing. Explain what moves each, then judge whether borrowing is useful, manageable or risky.',
    outcomes: [
      'Separate the deficit (a flow) from the debt (a stock)',
      'Distinguish automatic stabilisers and discretionary policy',
      'Split deficits into cyclical and structural parts',
      'Explain what moves the deficit and the debt',
      'Read national debt against debt-to-GDP',
      'Evaluate when borrowing helps and when it harms'
    ],
    tip: 'Always separate the annual deficit (a flow) from the national debt (the stock it builds up over time).',
    stages: [
      { num: 1, name: 'Learn',  sub: '7 cards \xb7 20 min', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [
    /* ============ CARD 1 – The big picture ============ */
    {
      id: 'psf-big-picture',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 1 of 7',
      title: 'Public sector finances — the big picture',
      lede: 'Governments use fiscal policy to influence the economy, but deficits and debt tell different parts of the story.',
      ledeStyle: 'plain',

      note: { icon: 'ℹ️', tone: 'blue', text: 'A deficit is a <strong>flow</strong> for one year. National debt is the <strong>stock</strong> built up over time.' },
      notePosition: 'top',

      visualKey: 'fiscalMapHub',
      visualLabel: 'THE MAP',
      visualEmoji: '\u{1F5FA}️',

      causesFirst: true,
      causesLabel: 'THREE CORE DISTINCTIONS',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'green',  icon: '\u{1F504}', head: 'Automatic vs discretionary', body: 'Automatic stabilisers move with the cycle; discretionary policy is a deliberate government decision.' },
        { tone: 'amber',  icon: '\u{1F4B7}', head: 'Deficit vs debt', body: 'The deficit is the annual gap; the debt is the accumulated total.' },
        { tone: 'purple', icon: '\u{1F503}', head: 'Structural vs cyclical', body: 'Some borrowing is temporary and cycle-related; some is built into the budget.' }
      ],

      causes2Label: 'WHY IT MATTERS',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'green',  icon: '\u{1F6E1}️', head: 'Stabilisation', body: 'Smooths booms and busts.' },
        { tone: 'blue',   icon: '\u{1F465}', head: 'Growth & services', body: 'Funds investment and public services.' },
        { tone: 'amber',  icon: '\u{1F4B8}', head: 'Confidence & interest costs', body: 'Affects borrowing costs and trust.' },
        { tone: 'purple', icon: '⚖️', head: 'Fairness across time', body: 'Shares costs and benefits between generations.' }
      ],

      flowTitle: 'HOW TO THINK ABOUT IT',
      flowEmoji: '\u{1F3AF}',
      flow: [
        { tone: 'blue', icon: '\u{1F4DD}', title: 'Define the concept', sub: 'Deficit, surplus or debt?' },
        { tone: 'blue', icon: '\u{1F50D}', title: 'Identify the type', sub: 'Cyclical or structural?' },
        { tone: 'blue', icon: '\u{1F9E0}', title: 'Explain the cause', sub: 'Why has it changed?' },
        { tone: 'blue', icon: '⚖️', title: 'Judge the significance', sub: 'Is it sustainable?' }
      ],

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Public sector finances link today’s fiscal choices to tomorrow’s borrowing burden and policy freedom.' },
      examEdge: { title: 'EXAM EDGE', text: 'Strong answers separate flows from stocks, then explain whether the borrowing is cyclical, structural, temporary or persistent.' }
    },

    /* ============ CARD 2 – Automatic vs discretionary ============ */
    {
      id: 'psf-automatic-vs-discretionary',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 2 of 7',
      title: 'Automatic stabilisers vs discretionary fiscal policy',
      lede: 'Some fiscal changes happen automatically with the economic cycle, while others are deliberate government choices.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Automatic stabilisers need <strong>no new policy decision</strong>. Discretionary policy is a conscious change in tax or spending.' },

      pairFirst: true,
      pairLabel: 'THE TWO TOOLS',
      pairEmoji: '\u{1F6E0}️',
      left: {
        tone: 'green', icon: '\u{1F504}', iconStyle: 'circle', label: 'Automatic stabilisers',
        sub: 'Respond to the cycle automatically, with no new government decision.',
        points: ['Income tax (progressive system)', 'Corporation tax', 'VAT', 'Unemployment benefits', 'Welfare payments']
      },
      right: {
        tone: 'amber', icon: '\u{1F3DB}️', iconStyle: 'circle', label: 'Discretionary fiscal policy',
        sub: 'Active decisions to raise or lower taxes and spending, or to change rules.',
        points: ['Changing tax rates', 'Increasing infrastructure spending', 'Temporary VAT cuts', 'Benefit reforms']
      },

      flowTitle: 'HOW THE CYCLE WORKS — RECESSION',
      flowEmoji: '\u{1F4C9}',
      flow: [
        { tone: 'blue', icon: '\u{1F4C9}', title: 'Recession', sub: 'Activity slows.' },
        { tone: 'blue', icon: '\u{1F4B7}', title: 'Tax revenue falls', sub: 'Lower incomes and profits.' },
        { tone: 'blue', icon: '\u{1F465}', title: 'Welfare spending rises', sub: 'More benefit claims.' },
        { tone: 'blue', icon: '⚖️', title: 'Deficit widens automatically', sub: 'No new decision needed.' }
      ],

      flow2Title: 'HOW THE CYCLE WORKS — BOOM',
      flow2Emoji: '\u{1F4C8}',
      flow2: [
        { tone: 'green', icon: '\u{1F4C8}', title: 'Boom', sub: 'Activity speeds up.' },
        { tone: 'green', icon: '\u{1F4B0}', title: 'Tax revenue rises', sub: 'Higher incomes and profits.' },
        { tone: 'green', icon: '\u{1F465}', title: 'Welfare spending falls', sub: 'Fewer benefit claims.' },
        { tone: 'green', icon: '⚖️', title: 'Deficit narrows automatically', sub: 'The budget improves.' }
      ],

      causesLabel: 'DISCRETIONARY MOVES',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'green', icon: '\u{1F4C8}', head: 'Raise spending', body: 'Boosts demand and jobs. Raises the deficit.' },
        { tone: 'amber', icon: '\u{1F4B7}', head: 'Cut taxes', body: 'Increases incomes and demand. Raises the deficit.' },
        { tone: 'purple', icon: '\u{1F4C9}', head: 'Cut spending', body: 'Reduces demand. Lowers the deficit.' },
        { tone: 'blue', icon: '\u{1F9FE}', head: 'Raise taxes', body: 'Reduces demand. Lowers the deficit.' }
      ],

      causes2Label: 'WHY IT MATTERS',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'blue',   icon: '⏰', head: 'Timing', body: 'Good timing can stabilise; poor timing can worsen cycles.' },
        { tone: 'green',  icon: '\u{1F3AF}', head: 'Targeting', body: 'Policy can target sectors or regions hit by shocks.' },
        { tone: 'purple', icon: '\u{1F465}', head: 'Politics', body: 'Choices reflect priorities and public support.' }
      ],

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Automatic stabilisers cushion the cycle; discretionary policy is used when government wants a stronger fiscal push or pull.' },
      examEdge: { title: 'EXAM EDGE', text: 'Always distinguish automatic fiscal changes from deliberate policy decisions, then explain how each affects the budget balance.' }
    },

    /* ============ CARD 3 – Deficit vs debt ============ */
    {
      id: 'psf-deficit-vs-debt',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 3 of 7',
      title: 'Fiscal deficit vs national debt',
      lede: 'A deficit is this year’s borrowing gap. National debt is the accumulated total from past borrowing.',
      ledeStyle: 'plain',

      note: { icon: 'ℹ️', tone: 'blue', text: 'A deficit is a <strong>flow</strong>. Debt is a <strong>stock</strong>.' },
      notePosition: 'top',

      visualKey: 'debtBathtub',
      visualLabel: 'THE CORE PICTURE',
      visualEmoji: '\u{1F6C1}',

      causesFirst: true,
      causesLabel: 'KEY TERMS',
      causesEmoji: '\u{1F4D8}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'rose',   icon: '\u{1F4C9}', head: 'Fiscal deficit', body: 'Spending exceeds revenue in a given year.' },
        { tone: 'green',  icon: '\u{1F4C8}', head: 'Fiscal surplus', body: 'Revenue exceeds spending in a given year.' },
        { tone: 'blue',   icon: '⚖️', head: 'Balanced budget', body: 'Revenue equals spending in a year.' },
        { tone: 'purple', icon: '\u{1F4B0}', head: 'National debt', body: 'The accumulated total of past deficits (minus any surpluses).' }
      ],

      flowTitle: 'HOW THEY LINK',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'blue', icon: '\u{1F9FE}', title: 'Tax and spending', sub: 'Flows this year.' },
        { tone: 'blue', icon: '⚖️', title: 'Annual budget balance', sub: 'Deficit, surplus or balanced.' },
        { tone: 'blue', icon: '\u{1F501}', title: 'Borrowing or repayment', sub: 'Deficits add to debt; surpluses reduce it.' },
        { tone: 'blue', icon: '\u{1F4B0}', title: 'Debt stock next year', sub: 'The accumulated total updates.' }
      ],

      causes3Label: 'WHY STUDENTS CONFUSE THEM',
      causes3Emoji: '\u{1F465}',
      causes3Style: 'icon-top',
      causes3Cols: 3,
      causes3: [
        { tone: 'amber',  icon: '\u{1F4C5}', head: 'One is annual', body: 'A deficit (or surplus) is measured for a single year.' },
        { tone: 'green',  icon: '\u{1F4DA}', head: 'One is accumulated', body: 'Debt is the total built up over many years.' },
        { tone: 'purple', icon: '⚖️', head: 'They vary independently', body: 'A deficit can be large while debt is small (early on), and vice versa.' }
      ],

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'A country can run a deficit for one year, but debt tells the longer-run story built up over time.' },
      examEdge: { title: 'EXAM EDGE', text: 'When evaluating fiscal policy, define deficit and debt separately before explaining how one affects the other.' }
    },

    /* ============ CARD 4 – Structural vs cyclical ============ */
    {
      id: 'psf-structural-vs-cyclical',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 4 of 7',
      title: 'Structural vs cyclical deficits',
      lede: 'Some deficits are caused by the economic cycle. Others remain even when the economy is operating normally.',
      ledeStyle: 'plain',

      note: { icon: '➗', tone: 'blue', text: 'Total deficit = <strong>cyclical</strong> deficit + <strong>structural</strong> deficit.' },
      notePosition: 'top',

      visualKey: 'outputGapCompare',
      visualLabel: 'THE OUTPUT GAP',
      visualEmoji: '\u{1F4CA}',
      visualCaption: 'Left: a recession opens a negative output gap, so the deficit is cyclical. Right: output is at trend yet the budget is still in deficit — that part is structural.',

      causesFirst: true,
      causesLabel: 'CYCLICAL DEFICIT (DUE TO THE CYCLE)',
      causesEmoji: '\u{1F30A}',
      causesStyle: 'numbered-rows',
      causes: [
        { tone: 'blue', head: 'Output falls below trend', body: 'A recession opens a negative output gap.' },
        { tone: 'blue', head: 'Tax revenues weaken', body: 'Lower incomes, profits and spending.' },
        { tone: 'blue', head: 'Unemployment rises', body: 'Benefit spending increases automatically.' },
        { tone: 'blue', head: 'Deficit widens temporarily', body: 'It fades as the economy recovers.' },
        { tone: 'blue', head: 'Borrowing is cyclical', body: 'Driven by the downturn, not the budget itself.' }
      ],

      causes2Label: 'STRUCTURAL DEFICIT (UNDERLYING)',
      causes2Emoji: '\u{1F3DB}️',
      causes2Style: 'numbered-rows',
      causes2: [
        { tone: 'amber', head: 'Even at full employment', body: 'Normal tax revenue is less than planned spending.' },
        { tone: 'amber', head: 'Not caused by the cycle', body: 'The mismatch is built into the budget.' },
        { tone: 'amber', head: 'Deficit persists over time', body: 'It does not disappear in a recovery.' },
        { tone: 'amber', head: 'Borrowing is underlying', body: 'Reform, not recovery, is needed to close it.' }
      ],

      flowTitle: 'HOW TO JUDGE IT',
      flowEmoji: '\u{1F3AF}',
      flow: [
        { tone: 'purple', icon: '\u{1F4C5}', title: 'Temporary vs persistent', sub: 'Will it fade as the economy recovers?' },
        { tone: 'purple', icon: '\u{1F4CA}', title: 'Demand conditions', sub: 'Is output below trend right now?' },
        { tone: 'purple', icon: '\u{1F3DB}️', title: 'Full-employment position', sub: 'What would the balance be at full employment?' },
        { tone: 'purple', icon: '\u{1F4CB}', title: 'Policy implications', sub: 'Short-term support vs structural reform.' }
      ],

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Cyclical deficits tend to fade with recovery, but structural deficits usually need deeper policy change.' },
      examEdge: { title: 'EXAM EDGE', text: 'Explain whether borrowing comes from a downturn or from the underlying budget position — that distinction drives evaluation.' }
    },

    /* ============ CARD 5 – What makes fiscal deficits change ============ */
    {
      id: 'psf-deficit-drivers',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 5 of 7',
      title: 'What makes fiscal deficits change?',
      lede: 'Budget deficits widen or narrow as tax revenues, spending pressures and policy choices change.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Deficits are shaped by <strong>both the business cycle and fiscal decisions</strong>.' },

      visualKey: 'deficitPressurePanel',
      visualLabel: 'THE DEFICIT PRESSURE PANEL',
      visualEmoji: '\u{1F39B}️',

      causesFirst: true,
      causesLabel: 'REVENUE SIDE',
      causesEmoji: '\u{1F4C8}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'green', icon: '\u{1F4C8}', head: 'Growth', body: 'Stronger growth raises incomes and profits, increasing tax revenue.' },
        { tone: 'green', icon: '\u{1F465}', head: 'Employment', body: 'More jobs and higher pay raise income tax and NICs.' },
        { tone: 'green', icon: '\u{1F4B7}', head: 'Profits', body: 'Higher corporate profits raise corporation tax.' },
        { tone: 'green', icon: '\u{1F6D2}', head: 'Consumption', body: 'More spending raises VAT and excise duty receipts.' }
      ],

      causes2Label: 'SPENDING SIDE',
      causes2Emoji: '\u{1F3DB}️',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'purple', icon: '\u{1F6E1}️', head: 'Welfare bills', body: 'Unemployment and low incomes raise welfare spending.' },
        { tone: 'purple', icon: '\u{1F3E5}', head: 'Public services', body: 'Demand for health and education can rise over time.' },
        { tone: 'purple', icon: '\u{1F309}', head: 'Infrastructure', body: 'Investment plans increase spending.' },
        { tone: 'purple', icon: '\u{1F475}', head: 'Ageing', body: 'An ageing population raises pensions and health costs.' },
        { tone: 'purple', icon: '\u{1F6A8}', head: 'Emergencies or shocks', body: 'Wars, disasters and pandemics create unexpected spending.' }
      ],

      flowTitle: 'THE KEY STORY — CYCLICAL',
      flowEmoji: '\u{1F4C9}',
      flow: [
        { tone: 'blue', icon: '\u{1F4C9}', title: 'Slower growth', sub: 'The economy loses momentum.' },
        { tone: 'blue', icon: '\u{1F465}', title: 'Lower revenue, higher welfare', sub: 'Tax receipts fall; benefit payments rise.' },
        { tone: 'blue', icon: '⚖️', title: 'Larger deficit', sub: 'Spending exceeds revenue by more.' }
      ],

      flow2Title: 'THE KEY STORY — DISCRETIONARY',
      flow2Emoji: '\u{1F4E2}',
      flow2: [
        { tone: 'amber', icon: '\u{1F4E2}', title: 'Deliberate fiscal stimulus', sub: 'Government cuts taxes or raises spending.' },
        { tone: 'amber', icon: '\u{1F4B7}', title: 'Higher demand in the short run', sub: 'Supports growth and jobs.' },
        { tone: 'amber', icon: '\u{1F4C8}', title: 'Wider deficit in the short run', sub: 'Financed by borrowing.' }
      ],

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Fiscal deficits move when the economy moves, but they also move when government changes taxes or spending.' },
      examEdge: { title: 'EXAM EDGE', text: 'Strong answers separate automatic cyclical effects from deliberate discretionary choices when explaining why a deficit changes.' }
    },

    /* ============ CARD 6 – What makes national debt change ============ */
    {
      id: 'psf-debt-drivers',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 6 of 7',
      title: 'What makes national debt change?',
      lede: 'Debt builds up when governments keep borrowing, but growth, inflation and repayments also shape the debt burden.',
      ledeStyle: 'plain',

      note: { icon: 'ℹ️', tone: 'blue', text: 'National debt rises with repeated deficits and interest costs, but the <strong>debt-to-GDP ratio</strong> also depends on growth.' },
      notePosition: 'top',

      visualKey: 'debtSnowball',
      visualLabel: 'THE DEBT SNOWBALL',
      visualEmoji: '☃️',

      causesFirst: true,
      causesLabel: 'WHY DEBT RISES',
      causesEmoji: '\u{1F4C8}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'rose',  icon: '\u{1F504}', head: 'Repeated fiscal deficits', body: 'Running deficits year after year adds to debt.' },
        { tone: 'rose',  icon: '\u{1F4C9}', head: 'Recession and bailouts', body: 'Downturns lower revenue and increase borrowing.' },
        { tone: 'rose',  icon: '\u{1F4B8}', head: 'High interest payments', body: 'Higher rates mean more of the budget goes on interest.' },
        { tone: 'rose',  icon: '\u{1F422}', head: 'Weak growth', body: 'Low growth makes it harder to keep debt in check.' }
      ],

      causes2Label: 'WHAT CAN STABILISE OR REDUCE IT',
      causes2Emoji: '\u{1F6E1}️',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'green', icon: '\u{1F3DB}️', head: 'Budget surpluses', body: 'Spending less than revenue helps pay down debt.' },
        { tone: 'green', icon: '\u{1F4C8}', head: 'Stronger nominal GDP growth', body: 'Faster growth raises revenue and makes debt easier to manage.' },
        { tone: 'amber', icon: '\u{1F525}', head: 'Inflation reduces the burden', body: 'Inflation erodes the real value of existing debt over time.' },
        { tone: 'blue',  icon: '\u{1F331}', head: 'Borrowing for productive growth', body: 'Investing in the future supports growth and repayment capacity.' }
      ],

      causes3Label: 'DEBT VS DEBT-TO-GDP',
      causes3Emoji: '⚖️',
      causes3Style: 'icon-top',
      causes3Cols: 3,
      causes3: [
        { tone: 'purple', icon: '\u{1F4B0}', head: 'Debt (absolute)', body: 'The total amount owed in pounds.' },
        { tone: 'blue',   icon: '➗', head: '↑ Debt + faster ↑ GDP', body: 'Debt in £ can rise while the ratio stays steady or falls if the economy grows faster.' },
        { tone: 'green',  icon: '\u{1F4CA}', head: 'Debt-to-GDP ratio', body: 'Debt as a share of the size of the economy.' }
      ],

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Debt is not just about how much is owed, but how manageable it is relative to the size and growth of the economy.' },
      examEdge: { title: 'EXAM EDGE', text: 'When judging national debt, look at the debt-to-GDP ratio, interest costs and what the borrowing was used for — not just the headline total.' }
    },

    /* ============ CARD 7 – The whole story ============ */
    {
      id: 'psf-whole-story',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 7 of 7',
      title: 'The whole story',
      lede: 'Strong answers connect fiscal policy, deficits and debt — then judge whether borrowing is useful, manageable or risky.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'The significance of fiscal deficits and national debt always <strong>depends on context</strong>.' },

      flowTitle: 'THE CHAIN',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'blue', icon: '\u{1F504}', title: 'Automatic & discretionary policy', sub: 'The fiscal tools.' },
        { tone: 'blue', icon: '⚖️', title: 'Budget balance', sub: 'Revenue vs spending.' },
        { tone: 'blue', icon: '\u{1F4B7}', title: 'Deficit or surplus', sub: 'The annual outcome.' },
        { tone: 'blue', icon: '\u{1F3E6}', title: 'Borrowing', sub: 'Financing the gap.' },
        { tone: 'blue', icon: '\u{1F4B0}', title: 'National debt', sub: 'The stock builds up.' },
        { tone: 'blue', icon: '\u{1F30D}', title: 'Economic significance', sub: 'Judged in context.' }
      ],

      causesLabel: 'WHY BORROWING CAN HELP',
      causesEmoji: '✅',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'green', icon: '\u{1F6E1}️', head: 'Stabilising recession', body: 'Supports demand, protects jobs and speeds recovery.' },
        { tone: 'green', icon: '\u{1F309}', head: 'Funding infrastructure', body: 'Invests in long-term growth and future productivity.' },
        { tone: 'green', icon: '\u{1F465}', head: 'Protecting public services', body: 'Maintains essential services and human capital.' },
        { tone: 'green', icon: '\u{1F6A8}', head: 'Dealing with emergencies', body: 'Responds to shocks and unforeseen events.' }
      ],

      causes2Label: 'WHEN BORROWING BECOMES A PROBLEM',
      causes2Emoji: '⚠️',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'rose', icon: '\u{1F4B8}', head: 'Rising debt-interest costs', body: 'Higher interest payments crowd out other priorities.' },
        { tone: 'rose', icon: '\u{1F465}', head: 'Crowding out', body: 'Borrowing can raise rates and reduce private investment.' },
        { tone: 'rose', icon: '\u{1F9FE}', head: 'Future tax or austerity', body: 'Repayment may need higher taxes or spending cuts.' },
        { tone: 'rose', icon: '\u{1F4C9}', head: 'Weaker confidence', body: 'Investors may worry about fiscal sustainability.' },
        { tone: 'rose', icon: '\u{1F512}', head: 'Reduced policy freedom', body: 'High debt limits options in future downturns.' }
      ],

      causes3Label: 'HOW TO EVALUATE',
      causes3Emoji: '\u{1F3AF}',
      causes3Style: 'numbered',
      causes3: [
        { tone: 'blue', head: 'Identify the type of deficit', body: 'Automatic or discretionary? Cyclical or structural?' },
        { tone: 'blue', head: 'Temporary or persistent?', body: 'Short-term shock or long-term imbalance?' },
        { tone: 'blue', head: 'Assess debt sustainability', body: 'Compare growth vs interest rates and look at debt-to-GDP.' },
        { tone: 'blue', head: 'What does the borrowing finance?', body: 'Investment and services — or current spending?' }
      ],

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Borrowing is not automatically good or bad — what matters is why it happens, how long it lasts, and whether the economy can support it.' },
      examEdge: { title: 'EXAM EDGE', text: 'Top answers weigh short-run stabilisation benefits against long-run sustainability, confidence and intergenerational effects.' }
    }
  ]
};
