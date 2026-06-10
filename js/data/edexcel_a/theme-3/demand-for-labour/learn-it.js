/* ============================================================
   ECONOS – Demand for Labour (Edexcel A 3.5.1)
   6 cards · interactive-first build
   Built from the ChatGPT → Claude mockup pipeline.

   Card patterns (no two consecutive repeat; one dominant tile-grid):
     1 Sequential flow chain (derived-demand chain) + who/what tiles
     2 Interactive MRP curve + MRP-story flow + why-MRP-falls
     3 Interactive demand shift + causal chain + real examples
     4 Tile grid (5 drivers) + static shift-vs-movement diagram
     5 Side-by-side pair (substitute vs complement) + sectors + judge
     6 Evidence-then-verdict (synthesis + final judgement)

   New visuals (js/icons.js):
     - labourDemandCurve     (Card 2 interactive, ld-1..ld-2)
     - labourDemandShift     (Card 3 interactive, lds-1..lds-3)
     - labourShiftVsMovement (Card 4 static 2-panel)
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'demand-for-labour',
  topicNum: '3.5.1',
  theme: 'Theme 3 \xb7 Business Behaviour and the Labour Market',
  title: 'Demand for Labour',
  estTime: '15 min',
  goal: 'Explain labour as a derived demand, build the marginal-revenue-product labour-demand curve, and analyse the factors that shift demand for labour',

  intro: {
    heroKey: 'heroFirm',
    summary: 'Firms do not want workers for their own sake — they want the output workers help to produce. Demand for labour is therefore a derived demand: it flows from demand for goods and services. This deck builds the labour-demand curve as the marginal revenue product (MRP) curve, shows why it slopes down and shifts, and explains how product demand, productivity and technology change how many workers firms want to hire.',
    doInThis: 'Define labour as a derived demand and trace the chain from product demand to labour demand. Build the MRP curve and explain why it slopes down. Show how a change in product demand shifts the whole curve, and distinguish a shift from a movement. Finally, analyse complements and substitutes, and judge the effect on different labour markets.',
    outcomes: [
      'Explain why demand for labour is a derived demand',
      'Build the labour-demand curve as the MRP curve',
      'Explain why the MRP curve slopes downward',
      'Analyse what shifts the labour-demand curve',
      'Distinguish a shift from a movement along the curve',
      'Judge how technology affects different labour markets'
    ],
    tip: 'The phrase to reach for is derived demand — labour is wanted for the output it helps to produce.',
    stages: [
      { num: 1, name: 'Learn',  sub: '6 cards \xb7 15 min', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [
    /* ====================================================================
       CARD 1 – Demand for labour: the big picture
       Pattern: Sequential flow chain (derived-demand chain) + tiles
       ==================================================================== */
    {
      id: 'dfl-big-picture',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 1 of 6',
      title: 'Demand for labour — the big picture',
      lede: 'Firms hire workers because labour helps them produce and sell output.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Demand for labour is a <strong>derived demand</strong> — it depends on demand for the goods and services workers help to make.' },

      flowTitle: 'THE CORE CHAIN',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'blue',   icon: '\u{1F6D2}', title: 'Demand for the product', sub: 'Customers want the output.' },
        { tone: 'purple', icon: '\u{1F3ED}', title: 'Output the firm wants', sub: 'Firms plan how much to make.' },
        { tone: 'amber',  icon: '\u{1F465}', title: 'Workers needed', sub: 'Labour helps produce it.' },
        { tone: 'green',  icon: '\u{1F4C8}', title: 'Demand for labour', sub: 'A demand derived from output.' }
      ],

      causesLabel: 'WHO DEMANDS LABOUR?',
      causesEmoji: '\u{1F3E2}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'blue',   icon: '\u{1F6CD}️', head: 'Retail and services', body: 'Customer-facing roles.' },
        { tone: 'purple', icon: '\u{1F3ED}', head: 'Manufacturing', body: 'Production and assembly.' },
        { tone: 'amber',  icon: '\u{1F373}', head: 'Hospitality', body: 'Labour-intensive service.' },
        { tone: 'green',  icon: '\u{1F4BB}', head: 'Tech and business', body: 'Skilled, knowledge roles.' }
      ],

      causes2Label: 'WHAT THE FIRM COMPARES',
      causes2Emoji: '⚖️',
      causes2Style: 'icon-top',
      causes2Cols: 3,
      causes2: [
        { tone: 'green', icon: '\u{1F464}', head: 'Extra worker hired', body: 'The output one more worker adds.' },
        { tone: 'blue',  icon: '\u{1F4B7}', head: 'Extra revenue created', body: 'What that worker’s output is worth.' },
        { tone: 'amber', icon: '\u{1F3F7}️', head: 'Wage cost', body: 'Hire only while revenue beats the wage.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Labour is a factor of production, like land and capital — its demand is driven by the demand for output.' },

      conclusion: { title: 'Big idea', text: 'Demand for labour flows from demand for the goods and services it helps to produce.' },
      examEdge: 'Define <strong>derived demand</strong> directly, then explain the chain from product demand to labour demand.'
    },

    /* ====================================================================
       CARD 2 – Why labour demand slopes down
       Pattern: Interactive MRP curve (labourDemandCurve) + MRP story + why
       ==================================================================== */
    {
      id: 'dfl-slopes-down',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 2 of 6',
      title: 'Why labour demand slopes down',
      lede: 'As a firm hires more workers, the extra output and extra revenue from each extra worker usually fall.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'The labour-demand curve is the <strong>marginal revenue product</strong> (MRP) curve.' },

      interactiveDiagram: {
        svgKey: 'labourDemandCurve',
        label: 'THE DIAGRAM — read it step by step',
        emoji: '\u{1F4C9}',
        layers: ['ld-1', 'ld-2'],
        views: [
          {
            label: 'The curve',
            tone: 'blue',
            head: 'Step 1 — the labour-demand curve',
            body: 'The labour-demand curve is the firm’s <strong>MRP curve</strong> — it slopes downward as more workers are hired.',
            show: []
          },
          {
            label: 'Wage and employment',
            tone: 'purple',
            head: 'Step 2 — wage and employment',
            body: 'At a wage of <strong>W₁</strong>, the firm hires <strong>L₁</strong> — the point where the MRP curve meets the wage.',
            show: ['ld-1']
          },
          {
            label: 'The hiring rule',
            tone: 'green',
            head: 'Step 3 — the hiring rule',
            body: 'The firm hires every worker whose MRP is at least the wage, so it hires <strong>up to where MRP = wage</strong>.',
            analysis: 'Diminishing returns make each extra worker’s MRP fall, so a lower wage is needed to make hiring more workers worthwhile — that is why the curve slopes down.',
            show: ['ld-1', 'ld-2']
          }
        ]
      },

      flowTitle: 'THE MRP STORY',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'blue',   icon: '\u{1F464}', title: 'Extra worker', sub: 'One more employee.' },
        { tone: 'purple', icon: '\u{1F4E6}', title: 'Marginal product', sub: 'The extra output created.' },
        { tone: 'amber',  icon: '\u{1F4B7}', title: 'Marginal revenue', sub: 'Revenue from selling it.' },
        { tone: 'green',  icon: '\u{1F4C8}', title: 'Marginal revenue product', sub: 'The extra revenue the worker brings.' }
      ],

      causesLabel: 'WHY MRP FALLS',
      causesEmoji: '\u{1F4C9}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'blue',   icon: '\u{1F4C9}', head: 'Diminishing returns', body: 'Extra workers add less and less output.' },
        { tone: 'amber',  icon: '⚙️', head: 'Fixed capital', body: 'Machines and space limit each worker’s output.' },
        { tone: 'purple', icon: '\u{1F3F7}️', head: 'Lower extra revenue', body: 'Selling more output may need a lower price.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'MRP = marginal physical product × marginal revenue (or price) — both can fall as output rises.' },

      conclusion: { title: 'Big idea', text: 'Labour demand slopes down because each extra worker’s marginal revenue product falls.' },
      examEdge: 'Use the chain <strong>MRP = MPP × MR</strong>, then link a falling MRP to a downward-sloping labour-demand curve.'
    },

    /* ====================================================================
       CARD 3 – Derived demand in action
       Pattern: Interactive demand shift (labourDemandShift) + chain + examples
       ==================================================================== */
    {
      id: 'dfl-derived-action',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 3 of 6',
      title: 'Derived demand in action',
      lede: 'When demand for the final product changes, demand for the labour used to make it changes too.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'No firm wants labour for its own sake — it wants the <strong>output</strong> labour helps produce.' },

      interactiveDiagram: {
        svgKey: 'labourDemandShift',
        label: 'SHIFTS IN LABOUR DEMAND — step through it',
        emoji: '\u{1F4CA}',
        layers: ['lds-1', 'lds-2', 'lds-3'],
        views: [
          {
            label: 'Starting point',
            tone: 'blue',
            head: 'The starting point',
            body: 'At wage <strong>W</strong>, the firm hires <strong>L₁</strong> on the original labour-demand curve D_L.',
            show: ['lds-1']
          },
          {
            label: 'Demand rises → shift right',
            tone: 'green',
            head: 'Product demand rises',
            body: 'If product demand rises, the whole curve shifts right to <strong>D_L₁</strong> — at the same wage, employment rises to <strong>L₂</strong>.',
            show: ['lds-1', 'lds-2']
          },
          {
            label: 'Demand falls → shift left',
            tone: 'rose',
            head: 'Product demand falls',
            body: 'If product demand falls, the curve shifts left to <strong>D_L₂</strong> — employment falls to <strong>L₀</strong>.',
            analysis: 'The whole curve moves with the product market — this is exactly what "derived demand" means in a diagram.',
            show: ['lds-1', 'lds-2', 'lds-3']
          }
        ]
      },

      flowTitle: 'THE CAUSAL CHAIN',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'green',  icon: '\u{1F4C8}', title: 'Product demand rises', sub: 'Customers want more.' },
        { tone: 'blue',   icon: '\u{1F3ED}', title: 'Output rises', sub: 'Firms plan more output.' },
        { tone: 'amber',  icon: '\u{1F465}', title: 'More workers needed', sub: 'To make the extra output.' },
        { tone: 'green',  icon: '\u{1F4C8}', title: 'Labour demand rises', sub: 'D_L shifts right.' },
        { tone: 'rose',   icon: '\u{1F4C9}', title: 'Product demand falls', sub: 'Output falls…' },
        { tone: 'rose',   icon: '\u{1F4C9}', title: 'Labour demand falls', sub: 'D_L shifts left.' }
      ],

      causesLabel: 'REAL EXAMPLES',
      causesEmoji: '\u{1F30D}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'green', icon: '\u{1F50B}', head: 'Electric vehicles', body: 'Rising EV demand raises demand for EV workers.' },
        { tone: 'amber', icon: '\u{1F3D6}️', head: 'Hotels in summer', body: 'Seasonal demand lifts demand for hospitality staff.' },
        { tone: 'rose',  icon: '\u{1F3D7}️', head: 'Housebuilding slowdown', body: 'Weaker housing demand cuts demand for construction workers.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'A boom in a product market is a boom in its labour market — and a slump is a slump.' },

      conclusion: { title: 'Big idea', text: 'A shift in product demand changes firms’ output plans, which shifts demand for labour.' },
      examEdge: 'Explain the chain from product demand to labour demand — then apply the right shift (right or left) of D_L.'
    },

    /* ====================================================================
       CARD 4 – What shifts demand for labour?
       Pattern: Tile grid (5 drivers) + static shift-vs-movement diagram
       ==================================================================== */
    {
      id: 'dfl-shifts',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 4 of 6',
      title: 'What shifts demand for labour?',
      lede: 'Non-wage factors can move the whole labour-demand curve left or right.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Shifts happen when labour becomes more or less profitable — a <strong>wage change</strong> itself causes movement ALONG the curve.' },

      causesFirst: true,
      causesLabel: 'THE FIVE DRIVERS',
      causesEmoji: '\u{1F50D}',
      causesStyle: 'numbered-rows',
      causes: [
        { tone: 'blue',   icon: '\u{1F6D2}', head: 'Demand for the product', body: 'Stronger product demand raises output plans and shifts labour demand right; weaker demand shifts it left.' },
        { tone: 'green',  icon: '\u{1F4C8}', head: 'Productivity', body: 'Better training or technology raises the MRP of each worker, shifting labour demand right.' },
        { tone: 'purple', icon: '\u{1F916}', head: 'Price of substitutes (capital)', body: 'If machines become cheaper, firms may replace labour with capital — labour demand falls.' },
        { tone: 'amber',  icon: '\u{1F517}', head: 'Complementary inputs', body: 'More or cheaper complementary capital can raise the productivity of labour and demand for it.' },
        { tone: 'rose',   icon: '\u{1F3DB}️', head: 'Taxes, regulation and subsidies', body: 'Changes that affect the cost or value of hiring (e.g. employment taxes) can shift the curve.' }
      ],

      flowChart: {
        svgKey: 'labourShiftVsMovement',
        label: 'SHIFT OR MOVEMENT?',
        emoji: '↔️',
        caption: 'A non-wage factor shifts the whole curve; a wage change is a movement along it.'
      },

      causes3Label: 'SHORT EXAMPLES',
      causes3Emoji: '\u{1F4A1}',
      causes3Style: 'icon-top',
      causes3Cols: 3,
      causes3: [
        { tone: 'rose',  icon: '\u{1F916}', head: 'More robots', body: 'Capital substitutes labour → demand for some workers falls.' },
        { tone: 'green', icon: '\u{1F4E6}', head: 'More exports', body: 'Stronger product demand → labour demand rises.' },
        { tone: 'amber', icon: '\u{1F6D2}', head: 'Fewer cashiers', body: 'Self-checkout substitutes labour → demand falls.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Only a wage change moves you ALONG the curve — every other factor shifts the whole curve.' },

      conclusion: { title: 'Big idea', text: 'Demand for labour shifts when the marginal revenue product of labour changes.' },
      examEdge: 'Examiners reward the phrase <strong>derived demand</strong> — but apply shift versus movement carefully.'
    },

    /* ====================================================================
       CARD 5 – Complements, substitutes and different labour markets
       Pattern: Side-by-side pair (substitute vs complement) + sectors + judge
       ==================================================================== */
    {
      id: 'dfl-complements-substitutes',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 5 of 6',
      title: 'Complements, substitutes and different labour markets',
      lede: 'Technology and capital do not affect all workers in the same way.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Ask whether capital and labour are <strong>complements or substitutes</strong>.' },

      pairFirst: true,
      pairLabel: 'Substitute story vs complement story',
      pairEmoji: '⚖️',
      left: {
        tone: 'rose',
        icon: '\u{1F916}',
        iconStyle: 'circle',
        label: 'Substitute story',
        points: ['Automation replaces tasks', 'Less need for that labour', 'Labour demand shifts left']
      },
      right: {
        tone: 'green',
        icon: '\u{1F91D}',
        iconStyle: 'circle',
        label: 'Complement story',
        points: ['Better tools and machinery', 'Higher worker productivity', 'Labour demand shifts right']
      },

      causesFirst: true,
      causesLabel: 'SECTOR SNAPSHOTS',
      causesEmoji: '\u{1F30D}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'rose',   icon: '\u{1F6D2}', head: 'Supermarkets', body: 'Self-checkouts reduce demand for some cashiers.' },
        { tone: 'amber',  icon: '\u{1F4E6}', head: 'Warehouses', body: 'Machinery can replace some manual roles.' },
        { tone: 'green',  icon: '\u{1F3E5}', head: 'Hospitals', body: 'Scanners and software complement skilled staff.' },
        { tone: 'blue',   icon: '\u{1F4BB}', head: 'Software firms', body: 'Digital tools raise demand for skilled labour.' }
      ],

      flowTitle: 'HOW TO JUDGE IT',
      flowEmoji: '\u{1F9ED}',
      flow: [
        { tone: 'blue',   icon: '\u{1F50D}', title: 'Identify the technology', sub: 'What is changing?' },
        { tone: 'purple', icon: '⚖️', title: 'Complement or substitute?', sub: 'Decide which it is.' },
        { tone: 'green',  icon: '\u{1F4CA}', title: 'State the effect', sub: 'Labour demand up or down?' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'The same technology can cut demand for one type of labour while raising it for another.' },

      conclusion: { title: 'Big idea', text: 'Whether technology raises or lowers labour demand depends on whether it complements or substitutes labour.' },
      examEdge: 'Say <strong>which workers</strong> are affected, and whether capital complements or substitutes for them.'
    },

    /* ====================================================================
       CARD 6 – The whole story
       Pattern: Evidence-then-verdict (synthesis + final judgement)
       ==================================================================== */
    {
      id: 'dfl-whole-story',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 6 of 6',
      title: 'The whole story',
      lede: 'Strong answers link derived demand, marginal revenue product and the factors that shift labour demand.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Labour demand rises when hiring workers becomes <strong>more worthwhile</strong> for firms.' },

      flowTitle: 'THE CHAIN',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'blue',   icon: '\u{1F6D2}', title: 'Product demand', sub: 'Drives output.' },
        { tone: 'green',  icon: '\u{1F4C8}', title: 'Productivity / tech', sub: 'Changes MRP.' },
        { tone: 'purple', icon: '\u{1F4B7}', title: 'MRP', sub: 'Value of a worker.' },
        { tone: 'amber',  icon: '\u{1F4C9}', title: 'Labour-demand curve', sub: 'Shifts or moves.' },
        { tone: 'blue',   icon: '\u{1F465}', title: 'Employment', sub: 'Where MRP = wage.' },
        { tone: 'green',  icon: '⚖️', title: 'Final judgement', sub: 'Size and context.' }
      ],

      causesLabel: 'HOW TO WRITE IT',
      causesEmoji: '✍️',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'purple', icon: '\u{1F4C4}', head: 'Identify the chain', body: 'Derived demand from the product market.' },
        { tone: 'purple', icon: '\u{1F3ED}', head: 'Explain the effect', body: 'How it changes MRP and productivity.' },
        { tone: 'purple', icon: '↔️', head: 'Shift or movement', body: 'State which it is, clearly.' },
        { tone: 'purple', icon: '⚖️', head: 'Judge the effect', body: 'Worker type, time period, industry.' }
      ],

      causes2Label: 'COMMON MISTAKES',
      causes2Emoji: '⚠️',
      causes2Style: 'icon-top',
      causes2Cols: 3,
      causes2: [
        { tone: 'rose', icon: '❌', head: 'Treating it as consumer demand', body: 'Labour demand is derived, not direct.' },
        { tone: 'rose', icon: '\u{1F648}', head: 'Forgetting it is derived', body: 'Always link back to the product market.' },
        { tone: 'rose', icon: '↔️', head: 'Confusing shift and movement', body: 'Only a wage change moves along the curve.' }
      ],

      pairLabel: 'Labour demand rises vs falls',
      pairEmoji: '⚖️',
      left: {
        tone: 'green',
        icon: '\u{1F4C8}',
        iconStyle: 'circle',
        label: 'Labour demand rises when…',
        points: ['Product demand grows', 'Workers become more productive', 'Complementary capital is added']
      },
      right: {
        tone: 'rose',
        icon: '\u{1F4C9}',
        iconStyle: 'circle',
        label: 'Labour demand falls when…',
        points: ['Product demand weakens', 'Automation substitutes labour', 'Hiring costs rise (taxes, regulation)']
      },

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Demand for labour is derived demand: firms hire more workers when the extra revenue beats the extra cost.' },

      conclusion: { title: 'Big idea', text: 'Firms hire more workers when the extra revenue a worker brings beats the extra cost of employing them.' },
      examEdge: 'Define derived demand, then apply <strong>MRP</strong> and <strong>shift vs movement</strong> to a clear final judgement.'
    }
  ]
};
