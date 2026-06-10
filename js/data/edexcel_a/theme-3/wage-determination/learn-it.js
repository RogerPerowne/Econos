/* ============================================================
   ECONOS – Wage Determination (Edexcel A 3.5.3)
   8 cards · interactive-first build
   Built from the ChatGPT → Claude mockup pipeline.

   Card patterns (no two consecutive repeat; one dominant tile-grid):
     1 Interactive equilibrium + what-moves + why-matters
     2 Interactive equilibrium (surplus/shortage) + shifts + how-to-read
     3 Interactive monopsony diagram (reused) + who-gains pair
     4 Tile grid (4 issues) + why-wages-diverge + what-to-look-for
     5 Comparison (two elasticity panels) + demand/supply elasticity
     6 Interactive wage floor/ceiling (gov-intervention style) + evaluate
     7 Side-by-side pair (public sector + immobility) + policies flow
     8 Evidence-then-verdict (synthesis + how-to-write)

   New visuals (js/icons.js):
     - labourMarketEqDiagram (Cards 1 & 2 interactive, lme-*)
     - wageFloorCeiling        (Card 6 interactive, wf-*)
     - labourSupplyElasticity  (Card 5 static 2-panel)
   Reused: monopsonyLabourDiagram (Card 3).
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'wage-determination',
  topicNum: '3.5.3',
  theme: 'Theme 3 \xb7 Business Behaviour and the Labour Market',
  title: 'Wage Determination',
  estTime: '20 min',
  goal: 'Build the labour-market equilibrium, analyse monopsony and wage controls, and evaluate how market power, elasticity and policy shape wages and employment',

  intro: {
    heroKey: 'heroFirm',
    summary: 'Wages are prices in the labour market. In a competitive market they are set where the demand for labour meets the supply of labour. But real labour markets are shaped by market power (monopsony employers and trade unions), by elasticity, and by government policy such as minimum wages. This deck builds the equilibrium model, adds the monopsony and wage-control diagrams, and shows how elasticity and policy decide the real wage and employment outcomes.',
    doInThis: 'Build the competitive labour-market equilibrium and explain surpluses and shortages. Analyse monopsony wage-setting power and compare it with the competitive benchmark. Use elasticity to judge how far wages or employment respond. Analyse minimum and maximum wages, public-sector pay and immobility — then evaluate the outcomes in context.',
    outcomes: [
      'Build the competitive labour-market equilibrium',
      'Explain surpluses, shortages and how the market clears',
      'Analyse monopsony wage-setting power',
      'Use elasticity to judge wage and employment changes',
      'Analyse minimum and maximum wages',
      'Evaluate wage outcomes in real, segmented markets'
    ],
    tip: 'The phrase to reach for is wages are prices — set by demand and supply, then bent by power and policy.',
    stages: [
      { num: 1, name: 'Learn',  sub: '8 cards \xb7 20 min', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [
    /* ====================================================================
       CARD 1 – Wage determination: the big picture
       Pattern: Interactive equilibrium + what-moves + why-matters
       ==================================================================== */
    {
      id: 'wd-big-picture',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 1 of 8',
      title: 'Wage determination — the big picture',
      lede: 'Wages are prices in the labour market — shaped by labour demand, labour supply, market power and policy.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Wages and employment are determined where <strong>labour demand and labour supply meet</strong> — unless market power or intervention changes the outcome.' },

      interactiveDiagram: {
        svgKey: 'labourMarketEqDiagram',
        label: 'THE CORE MODEL — build it',
        emoji: '\u{1F4C8}',
        wide: true,
        layers: ['lme-eq', 'lme-surplus', 'lme-shortage'],
        views: [
          {
            label: 'Demand and supply',
            tone: 'blue',
            head: 'Step 1 — the two curves',
            body: 'Labour demand (<strong>D_L</strong>) slopes down — it is derived from the MRP of labour. Labour supply (<strong>S_L</strong>) slopes up — more workers offer to work at higher wages.',
            show: []
          },
          {
            label: 'The equilibrium wage',
            tone: 'green',
            head: 'Step 2 — the equilibrium',
            body: 'Where the curves cross sets the equilibrium wage <strong>W*</strong> and employment <strong>Q*</strong> — the market clears.',
            analysis: 'This is the competitive benchmark. Market power (monopsony, unions) or policy (minimum wage) move the outcome away from it — the rest of the deck.',
            show: ['lme-eq']
          }
        ]
      },

      causesFirst: true,
      causesLabel: 'WHAT MOVES OUTCOMES',
      causesEmoji: '\u{1F504}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'blue',   icon: '\u{1F4C8}', head: 'Labour demand shifts', body: 'Productivity, product demand, substitute capital.' },
        { tone: 'green',  icon: '\u{1F465}', head: 'Labour supply shifts', body: 'Preferences, migration, participation.' },
        { tone: 'purple', icon: '\u{1F3E2}', head: 'Market power', body: 'Monopsony or unions bend the competitive outcome.' },
        { tone: 'amber',  icon: '\u{1F3DB}️', head: 'Government intervention', body: 'Minimum wage and public-sector pay.' }
      ],

      causes2Label: 'WHY IT MATTERS',
      causes2Emoji: '\u{1F4A1}',
      causes2Style: 'icon-top',
      causes2Cols: 3,
      causes2: [
        { tone: 'green',  icon: '\u{1F4B7}', head: 'Pay', body: 'Wages shape living standards.' },
        { tone: 'blue',   icon: '\u{1F465}', head: 'Employment', body: 'Wages influence how many work.' },
        { tone: 'rose',   icon: '⚠️', head: 'Shortages or unemployment', body: 'Mismatches and rigidities cause disequilibrium.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'This deck compares the competitive model with non-competitive ones — where employers have wage-setting power.' },

      conclusion: { title: 'Big idea', text: 'Wages are set in markets — demand, supply, power and policy together decide the outcome.' },
      examEdge: 'Start from <strong>demand and supply</strong>, then show how market power or policy changes wages and employment.'
    },

    /* ====================================================================
       CARD 2 – Competitive wage equilibrium
       Pattern: Interactive equilibrium (surplus/shortage) + shifts + how-to-read
       ==================================================================== */
    {
      id: 'wd-competitive',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 2 of 8',
      title: 'Competitive wage equilibrium',
      lede: 'In a competitive labour market, wages adjust where firms’ demand for labour meets workers’ supply of labour.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'At equilibrium, there is <strong>no labour shortage or labour surplus</strong>.' },

      interactiveDiagram: {
        svgKey: 'labourMarketEqDiagram',
        label: 'THE DIAGRAM — clears at equilibrium',
        emoji: '⚖️',
        wide: true,
        layers: ['lme-eq', 'lme-surplus', 'lme-shortage'],
        views: [
          {
            label: 'Equilibrium',
            tone: 'green',
            head: 'At equilibrium',
            body: 'At <strong>W*</strong>, the quantity of labour demanded equals the quantity supplied — the market clears.',
            show: ['lme-eq']
          },
          {
            label: 'Above equilibrium → surplus',
            tone: 'amber',
            head: 'Above equilibrium',
            body: 'A wage above W* means supply exceeds demand — a <strong>surplus of labour (unemployment)</strong>. Wages tend to fall back toward W*.',
            show: ['lme-eq', 'lme-surplus']
          },
          {
            label: 'Below equilibrium → shortage',
            tone: 'rose',
            head: 'Below equilibrium',
            body: 'A wage below W* means demand exceeds supply — a <strong>shortage of labour</strong>. Wages tend to rise back toward W*.',
            analysis: 'In a free competitive market, wages self-correct toward W*. Disequilibrium lasts only when something stops wages adjusting.',
            show: ['lme-eq', 'lme-shortage']
          }
        ]
      },

      causesFirst: true,
      causesLabel: 'WHAT SHIFTS EQUILIBRIUM',
      causesEmoji: '\u{1F504}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'green', icon: '\u{1F4C8}', head: 'Higher labour demand', body: 'Raises both wage and employment.' },
        { tone: 'rose',  icon: '\u{1F4C9}', head: 'Lower labour demand', body: 'Weaker product demand → lower wage and jobs.' },
        { tone: 'blue',  icon: '\u{1F465}', head: 'Higher labour supply', body: 'More workers → lower wage, higher employment.' },
        { tone: 'amber', icon: '\u{1F4C9}', head: 'Lower labour supply', body: 'Fewer workers → higher wage, lower employment.' }
      ],

      flowTitle: 'HOW TO READ IT',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'blue',   icon: '\u{1F50D}', title: 'Identify the market', sub: 'Which job or sector?' },
        { tone: 'purple', icon: '\u{1F4C8}', title: 'Find D_L and S_L', sub: 'Demand and supply of labour.' },
        { tone: 'green',  icon: '⚖️', title: 'Locate W* and Q*', sub: 'Where they cross.' },
        { tone: 'amber',  icon: '\u{1F504}', title: 'Explain any change', sub: 'Shift the right curve.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'A surplus pushes wages down; a shortage pulls them up — that is how the market clears.' },

      conclusion: { title: 'Big idea', text: 'Competitive wage determination is just demand and supply — at equilibrium the market clears.' },
      examEdge: 'Draw the labour market, label <strong>W* and Q*</strong>, then explain the shift or employment effect.'
    },

    /* ====================================================================
       CARD 3 – When employers have wage-setting power
       Pattern: Interactive monopsony diagram (reused) + who-gains pair
       ==================================================================== */
    {
      id: 'wd-monopsony-power',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 3 of 8',
      title: 'When employers have wage-setting power',
      lede: 'If there are few employers, the labour market may be non-competitive and wages can be pushed below the competitive level.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'A monopsony hires where <strong>MCL = MRP</strong>, then pays the wage found on the labour supply curve.' },

      interactiveDiagram: {
        svgKey: 'monopsonyLabourDiagram',
        label: 'THE MONOPSONY DIAGRAM — step through it',
        emoji: '\u{1F3E2}',
        wide: true,
        layers: ['ms-1', 'ms-2', 'ms-3'],
        views: [
          {
            label: 'The curves',
            tone: 'blue',
            head: 'The curves',
            body: 'The firm faces the upward supply curve (<strong>S = ACL</strong>); <strong>MCL</strong> lies above it; <strong>MRP</strong> is the demand for labour.',
            show: []
          },
          {
            label: 'Employment',
            tone: 'purple',
            head: 'Employment: MCL = MRP',
            body: 'The monopsony hires where the marginal cost of labour equals MRP — employment <strong>Lm</strong>.',
            show: ['ms-1']
          },
          {
            label: 'The wage',
            tone: 'rose',
            head: 'The wage: read down to supply',
            body: 'It only pays the wage on the supply curve to attract Lm workers — <strong>Wm</strong>, below the workers’ MRP.',
            show: ['ms-1', 'ms-2']
          },
          {
            label: 'Vs competition',
            tone: 'green',
            head: 'Vs the competitive market',
            body: 'A competitive market would pay <strong>Wc</strong> and employ <strong>Lc</strong> — both higher than the monopsony.',
            analysis: 'A minimum wage or a trade union set between Wm and the competitive wage can raise BOTH pay and employment here — unlike in a competitive market.',
            show: ['ms-1', 'ms-2', 'ms-3']
          }
        ]
      },

      causesFirst: true,
      causesLabel: 'WHY IT HAPPENS',
      causesEmoji: '\u{2753}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'blue',   icon: '\u{1F3E2}', head: 'Few employers', body: 'A small number of buyers of labour in the area.' },
        { tone: 'amber',  icon: '\u{1F9F3}', head: 'Workers can’t move', body: 'Geographical or occupational immobility.' },
        { tone: 'purple', icon: 'ℹ️', head: 'Information gaps', body: 'Workers don’t know about other options.' }
      ],

      causes3Label: 'WHERE YOU SEE IT',
      causes3Emoji: '\u{1F30D}',
      causes3Style: 'icon-top',
      causes3Cols: 3,
      causes3: [
        { tone: 'blue',   icon: '\u{1F3D8}️', head: 'Isolated towns', body: 'One large local employer dominates hiring.' },
        { tone: 'purple', icon: '\u{1F9EA}', head: 'Specialised markets', body: 'Niche skills with one main buyer.' },
        { tone: 'amber',  icon: '\u{1F3E5}', head: 'Large public employer', body: 'Schools, hospitals or platforms with buyer power.' }
      ],

      pairLabel: 'Employer gains vs worker costs',
      pairEmoji: '⚖️',
      left: {
        tone: 'green',
        icon: '\u{1F3E2}',
        iconStyle: 'circle',
        label: 'Employer gains',
        points: ['Lower wage bill', 'Lower employment costs', 'More profit retained']
      },
      right: {
        tone: 'rose',
        icon: '\u{1F465}',
        iconStyle: 'circle',
        label: 'Worker costs',
        points: ['Lower wages than competitive', 'Fewer jobs', 'Weaker bargaining power']
      },

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Non-competitive labour markets do not clear as neatly as the competitive textbook model.' },

      conclusion: { title: 'Big idea', text: 'A monopsony employer pays less and hires fewer workers than a competitive market would.' },
      examEdge: 'Compare the monopsony outcome with the <strong>competitive benchmark</strong> when evaluating wage-setting power.'
    },

    /* ====================================================================
       CARD 4 – Labour market issues in the real world
       Pattern: Tile grid (4 issues) + why-wages-diverge + what-to-look-for
       ==================================================================== */
    {
      id: 'wd-real-world',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 4 of 8',
      title: 'Labour market issues in the real world',
      lede: 'Actual wage determination is shaped by skills shortages, participation, region and bargaining power.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Real labour markets are <strong>segmented</strong> — the same wage story does not apply everywhere.' },

      causesFirst: true,
      causesLabel: 'FOUR BIG ISSUES',
      causesEmoji: '\u{1F30D}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'rose',   icon: '\u{1F50D}', head: 'Skills shortages', body: 'Sectors like nursing and engineering can’t fill vacancies.' },
        { tone: 'amber',  icon: '\u{1F5FA}️', head: 'Regional imbalance', body: 'Weak mobility means some regions have shortages, others slack.' },
        { tone: 'blue',   icon: '\u{1F4C9}', head: 'Low pay, weak bargaining', body: 'Labour without unions or clout sees wages held down.' },
        { tone: 'purple', icon: '\u{1F465}', head: 'Participation and ageing', body: 'Inactivity and demographics affect labour supply.' }
      ],

      causes2Label: 'WHY WAGES DIVERGE',
      causes2Emoji: '↕️',
      causes2Style: 'icon-top',
      causes2Cols: 2,
      causes2: [
        { tone: 'green', icon: '\u{1F4C8}', head: 'Upward pressure', body: 'High demand plus scarce, hard-to-train skills push wages up.' },
        { tone: 'rose',  icon: '\u{1F4C9}', head: 'Downward pressure', body: 'Weak demand plus abundant, easily-supplied labour pushes wages down.' }
      ],

      causes3Label: 'WHAT TO LOOK FOR',
      causes3Emoji: '\u{1F50E}',
      causes3Style: 'icon-top',
      causes3Cols: 4,
      causes3: [
        { tone: 'blue',   icon: '\u{1F4CB}', head: 'Vacancies', body: 'High vacancies signal strong demand.' },
        { tone: 'rose',   icon: '⚠️', head: 'Shortages', body: 'Hard-to-fill roles signal scarce labour.' },
        { tone: 'green',  icon: '\u{1F4B7}', head: 'Wage growth', body: 'Fast pay growth signals scarcity.' },
        { tone: 'amber',  icon: '\u{1F9F2}', head: 'Retention problems', body: 'High turnover signals weak rewards.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Common contexts: health care, nursing, tech and hospitality all show different wage stories.' },

      conclusion: { title: 'Big idea', text: 'Real labour markets are segmented — wages depend on local demand, supply and bargaining power.' },
      examEdge: 'Use real-world labour issues as <strong>application</strong>, then link to wage, employment and policy.'
    },

    /* ====================================================================
       CARD 5 – Why elasticities matter
       Pattern: Comparison (two elasticity panels) + demand/supply elasticity
       ==================================================================== */
    {
      id: 'wd-elasticities',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 5 of 8',
      title: 'Why elasticities matter',
      lede: 'Elasticity of demand and supply of labour decide how far wages and employment respond to a change.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'The more elastic the curve, the more <strong>quantity</strong> adjusts and the less <strong>wage</strong> does — and vice versa.' },

      visualKey: 'labourSupplyElasticity',
      visualLabel: 'TWO ELASTICITY STORIES',
      visualEmoji: '\u{1F4CA}',
      visualCaption: 'Same rise in demand: inelastic supply gives a big wage rise; elastic supply gives a big employment rise.',

      causesFirst: true,
      causesLabel: 'WHY DEMAND ELASTICITY MATTERS',
      causesEmoji: '\u{1F4C9}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'blue',   icon: '\u{1F916}', head: 'Substitutability', body: 'Easy to swap capital for labour → elastic demand.' },
        { tone: 'amber',  icon: '\u{1F4B7}', head: 'Share of costs', body: 'Labour a big share of costs → elastic demand.' },
        { tone: 'green',  icon: '\u{1F6D2}', head: 'Product demand', body: 'Elastic product demand → elastic labour demand.' },
        { tone: 'purple', icon: '⏳', head: 'Time', body: 'Demand is more elastic in the long run.' }
      ],

      causes2Label: 'WHY SUPPLY ELASTICITY MATTERS',
      causes2Emoji: '\u{1F465}',
      causes2Style: 'icon-top',
      causes2Cols: 3,
      causes2: [
        { tone: 'green', icon: '\u{1F500}', head: 'Transferable skills', body: 'Common skills → more elastic supply.' },
        { tone: 'blue',  icon: '\u{1F5FA}️', head: 'Easy movement', body: 'Occupational and geographical mobility → elastic.' },
        { tone: 'amber', icon: '\u{1F393}', head: 'Short training', body: 'Quick to qualify → more elastic supply.' }
      ],

      causes3Label: 'SO WHAT?',
      causes3Emoji: '\u{1F4A1}',
      causes3Style: 'icon-top',
      causes3Cols: 4,
      causes3: [
        { tone: 'amber',  icon: '\u{1F4B7}', head: 'Wage swings', body: 'Inelastic supply → big wage changes.' },
        { tone: 'blue',   icon: '\u{1F465}', head: 'Employment swings', body: 'Elastic supply → big employment changes.' },
        { tone: 'purple', icon: '\u{1F3DB}️', head: 'Policy effects', body: 'Min-wage effect depends on elasticity.' },
        { tone: 'green',  icon: '\u{1F3AF}', head: 'Targeting', body: 'Training raises supply elasticity over time.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Elasticity tells you whether a market change shows up mostly in wages or mostly in employment.' },

      conclusion: { title: 'Big idea', text: 'Elasticities decide whether a change mostly moves wages or mostly moves employment.' },
      examEdge: 'State whether adjustment shows up in <strong>wages or employment</strong> — and say which dominates and why.'
    },

    /* ====================================================================
       CARD 6 – Minimum and maximum wages
       Pattern: Interactive wage floor/ceiling (gov-intervention style) + evaluate
       ==================================================================== */
    {
      id: 'wd-min-max-wages',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 6 of 8',
      title: 'Minimum and maximum wages',
      lede: 'Government can intervene directly in wage setting — but the effects depend on market structure and elasticity.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'A wage <strong>floor</strong> above equilibrium and a wage <strong>cap</strong> below equilibrium both change pay and employment.' },

      interactiveDiagram: {
        svgKey: 'wageFloorCeiling',
        label: 'WAGE CONTROLS — step through it',
        emoji: '\u{1F3DB}️',
        wide: true,
        layers: ['wf-eq', 'wf-min', 'wf-max'],
        views: [
          {
            label: 'The competitive market',
            tone: 'green',
            head: 'The free-market starting point',
            body: 'Without intervention the market clears at <strong>W*</strong> and <strong>Q*</strong>.',
            show: ['wf-eq']
          },
          {
            label: 'Minimum wage',
            tone: 'purple',
            head: 'A minimum wage (floor)',
            body: 'Set <strong>above W*</strong>, a minimum wage is a floor: the quantity supplied exceeds the quantity demanded — <strong>excess supply, i.e. unemployment</strong>.',
            show: ['wf-eq', 'wf-min']
          },
          {
            label: 'Maximum wage / pay cap',
            tone: 'rose',
            head: 'A maximum wage (ceiling)',
            body: 'Set <strong>below W*</strong>, a pay cap is a ceiling: the quantity demanded exceeds the quantity supplied — a <strong>shortage of labour</strong>.',
            analysis: 'The twist: in a MONOPSONY, a minimum wage set between Wm and the competitive wage can raise BOTH pay and employment — the opposite of the competitive case.',
            show: ['wf-eq', 'wf-max']
          }
        ]
      },

      causesFirst: true,
      causesLabel: 'WHAT TO EVALUATE',
      causesEmoji: '⚖️',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'blue',   icon: '\u{1F4CF}', head: 'Size of the intervention', body: 'How far the control is set from W*.' },
        { tone: 'amber',  icon: '\u{1F4C9}', head: 'Elasticities', body: 'Determine how big the employment effect is.' },
        { tone: 'purple', icon: '\u{1F3E2}', head: 'Market structure', body: 'Competitive market vs monopsony flips the verdict.' },
        { tone: 'green',  icon: '\u{1F3AF}', head: 'Other aims', body: 'Fairness, poverty and work incentives.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'The monopsony twist: a minimum wage can raise employment when employers have wage-setting power.' },

      conclusion: { title: 'Big idea', text: 'A minimum wage causes unemployment in a competitive market — but can raise jobs in a monopsony.' },
      examEdge: 'Always say whether the market is <strong>competitive or a monopsony</strong> — the minimum-wage verdict flips.'
    },

    /* ====================================================================
       CARD 7 – Public sector pay and labour immobility
       Pattern: Side-by-side pair (public sector + immobility) + policies flow
       ==================================================================== */
    {
      id: 'wd-public-sector',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 7 of 8',
      title: 'Public sector pay and labour immobility',
      lede: 'Public-sector wages are often set administratively, while immobility can stop labour markets adjusting smoothly.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'If pay does not reflect local demand and supply — or workers cannot move — shortages and surpluses can persist.' },

      pairFirst: true,
      pairLabel: 'How pay is set vs what can happen',
      pairEmoji: '\u{1F3DB}️',
      left: {
        tone: 'blue',
        icon: '\u{1F4CB}',
        iconStyle: 'circle',
        label: 'How public-sector pay is set',
        points: ['National pay scales and bands', 'Budget limits, not local markets', 'Collective bargaining']
      },
      right: {
        tone: 'amber',
        icon: '⚠️',
        iconStyle: 'circle',
        label: 'What can happen',
        points: ['Shortages in expensive areas', 'Hard to recruit specialists', 'Regional mismatch and pay drift']
      },

      causesFirst: true,
      causesLabel: 'LABOUR IMMOBILITY',
      causesEmoji: '\u{1F6A7}',
      causesStyle: 'icon-top',
      causesCols: 2,
      causes: [
        { tone: 'purple', icon: '\u{1F5FA}️', head: 'Geographical immobility', body: 'Housing costs, transport and family ties stop workers moving to where the jobs are.' },
        { tone: 'rose',   icon: '\u{1F393}', head: 'Occupational immobility', body: 'Training costs, qualifications, lack of information and skills mismatch stop workers switching jobs.' }
      ],

      flowTitle: 'POLICIES TO TACKLE IT',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'blue',   icon: 'ℹ️', title: 'Improve information', sub: 'Better job-matching services.' },
        { tone: 'green',  icon: '\u{1F393}', title: 'Education and training', sub: 'Build transferable skills.' },
        { tone: 'amber',  icon: '\u{1F687}', title: 'Relocation support', sub: 'Help with housing and transport.' },
        { tone: 'purple', icon: '\u{1F6E0}️', title: 'Apprenticeships', sub: 'Retraining for new sectors.' }
      ],

      causes3Label: 'THE GOAL',
      causes3Emoji: '\u{1F3AF}',
      causes3Style: 'icon-top',
      causes3Cols: 3,
      causes3: [
        { tone: 'green', icon: '\u{1F500}', head: 'Better matching', body: 'Workers in the right place and role.' },
        { tone: 'blue',  icon: '\u{1F4C9}', head: 'Lower shortages', body: 'Gaps filled where labour is scarce.' },
        { tone: 'amber', icon: '\u{1F381}', head: 'Fairer opportunities', body: 'Access to good jobs widens.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Administered pay and immobility both stop labour markets clearing — causing stubborn shortages.' },

      conclusion: { title: 'Big idea', text: 'When pay is fixed and labour is immobile, markets can’t clear — and shortages persist.' },
      examEdge: 'Link public-sector pay and immobility to <strong>specific shortages</strong> and the policies that ease them.'
    },

    /* ====================================================================
       CARD 8 – The whole story
       Pattern: Evidence-then-verdict (synthesis + how-to-write)
       ==================================================================== */
    {
      id: 'wd-whole-story',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 8 of 8',
      title: 'The whole story',
      lede: 'Strong answers explain the labour-market equilibrium, then show how market power, elasticity and policy change wages and employment.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Wage determination is never just one curve crossing another — <strong>context decides the outcome</strong>.' },

      flowTitle: 'THE CHAIN',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'blue',   icon: '\u{1F4C8}', title: 'Labour demand', sub: 'Derived from MRP.' },
        { tone: 'green',  icon: '\u{1F465}', title: 'Labour supply', sub: 'Willing and able workers.' },
        { tone: 'purple', icon: '⚖️', title: 'Equilibrium', sub: 'Wage and employment.' },
        { tone: 'amber',  icon: '\u{1F4CA}', title: 'Elasticities', sub: 'How far each adjusts.' },
        { tone: 'rose',   icon: '\u{1F3E2}', title: 'Power or policy', sub: 'Monopsony, unions, min wage.' },
        { tone: 'green',  icon: '\u{1F50D}', title: 'Final outcome', sub: 'Wages, jobs, shortages.' }
      ],

      causesLabel: 'COMMON EVALUATION POINTS',
      causesEmoji: '⚖️',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'blue',   icon: '\u{1F3E2}', head: 'Competitive vs not', body: 'Market structure changes the outcome.' },
        { tone: 'amber',  icon: '⏱️', head: 'Short run vs long run', body: 'Adjustment takes time.' },
        { tone: 'purple', icon: '\u{1F4CA}', head: 'Elasticities', body: 'Set the size of the effects.' },
        { tone: 'green',  icon: '\u{1F5FA}️', head: 'Different markets', body: 'Sector, skill and location of change.' }
      ],

      causes2Label: 'HOW TO WRITE IT',
      causes2Emoji: '✍️',
      causes2Style: 'icon-top',
      causes2Cols: 4,
      causes2: [
        { tone: 'purple', icon: '\u{1F50D}', head: '1 · Identify the market', body: 'Competitive or non-competitive?' },
        { tone: 'purple', icon: '\u{1F4C8}', head: '2 · Draw the diagram', body: 'Show demand, supply and the wage.' },
        { tone: 'purple', icon: '\u{1F3DB}️', head: '3 · Apply power or policy', body: 'Monopsony, union or wage control.' },
        { tone: 'purple', icon: '⚖️', head: '4 · Judge the effect', body: 'On wages, jobs and fairness.' }
      ],

      causes3Label: 'DON’T FORGET',
      causes3Emoji: '⚠️',
      causes3Style: 'icon-top',
      causes3Cols: 3,
      causes3: [
        { tone: 'rose', icon: '❌', head: 'Not all markets are competitive', body: 'Monopsony and unions matter.' },
        { tone: 'rose', icon: '\u{1F465}', head: 'Quantity matters too', body: 'Judge employment, not just the wage.' },
        { tone: 'rose', icon: '\u{1F4B7}', head: 'Don’t dismiss wages', body: 'Real outcomes for real people.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'The best judgement weighs efficiency, fairness, recruitment, retention and real-world context together.' },

      conclusion: { title: 'Big idea', text: 'Wage determination starts with demand and supply, but power, elasticity and policy decide the real outcome.' },
      economistQuote: {
        portraitKey: 'economistPhillips',
        tone: 'amber',
        label: 'Economist insight on wages',
        quote: 'When the demand for labour is high and there are very few unemployed we should expect employers to bid wage rates up quite rapidly, each firm and each industry being continually tempted to offer a little above the prevailing rates to attract the most suitable labour.',
        attribution: 'A. W. Phillips, <em>Economica</em> (1958)'
      },
      examEdge: 'Move from the diagram to <strong>context</strong> — market structure, elasticity and policy — for a clear judgement.'
    }
  ]
};
