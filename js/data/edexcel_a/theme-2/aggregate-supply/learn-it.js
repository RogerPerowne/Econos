/* ============================================================
   ECONOS – content data for agg_supply
   8 cards · ad-interactive template · Edexcel Theme 2.3
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'aggregate-supply',
  topicNum: '2.3',
  theme: 'Theme 2 \xb7 The National and Global Economy',
  title: 'Aggregate Supply',
  estTime: '20 min',
  goal: 'Master SRAS, LRAS and the Classical vs Keynesian debate',

  intro: {
    heroKey: 'heroAggSupply',
    summary: 'Aggregate supply determines how much the economy can produce. SRAS responds to short-run cost conditions while LRAS reflects the economy\'s long-run productive capacity. The Classical vs Keynesian debate about LRAS shape drives everything from fiscal policy to growth strategy.',
    doInThis: 'Work through SRAS and LRAS curves, their shifts and policy implications. Compare demand-side and supply-side approaches. Finish with evaluation tools for exam essays.',
    outcomes: [
      'Explain why SRAS slopes upward and what shifts it',
      'Distinguish Classical and Keynesian views of LRAS',
      'Apply SRAS and LRAS shifts to macro equilibrium',
      'Evaluate supply-side policies against demand-side stimulus'
    ],
    tip: 'Draw the diagram as you go – seeing SRAS, LRAS, and AD interact makes the logic stick.',
    stages: [
      { num: 1, name: 'Learn',  sub: '8 cards \xb7 20 min', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [

    /* ----- CARD 1 – What is Aggregate Supply? ----- */
    {
      id: 'what-is-as',
      stepLabel: 'Learn: Card 1 of 8',
      title: 'What is Aggregate Supply?',
      lede: 'Aggregate supply (AS) is the total output firms in the economy are willing and able to produce at each price level.\nAS has two time horizons – SRAS in the short run and LRAS in the long run.',
      blocks: [
        { type: 'tip', tone: 'green', icon: '✅', text: 'AS is about economy-wide output, not the supply of one product.' },
        { type: 'sectionHeader', icon: '💡', label: 'THE CORE IDEA' },
        { type: 'grid', cols: 3, children: [
          { type: 'tile', tone: 'blue',   icon: '📊', head: 'Aggregate supply',  body: 'The total planned output at each price level across the whole economy.' },
          { type: 'tile', tone: 'amber',  icon: '📈', head: 'SRAS',              body: 'Short run aggregate supply. Upward sloping – as prices rise, firms supply more. Costs can be sticky.' },
          { type: 'tile', tone: 'purple', icon: '🏛️', head: 'LRAS',              body: 'Long run aggregate supply. Vertical at productive capacity (Yf). Prices do not change LRAS.' }
        ]},
        { type: 'sectionHeader', icon: '📊', label: 'THE BASIC DIAGRAM' },
        {
          type: 'econDiagram',
          chart: 'adas',
          views: [
            {
              label: 'SRAS',
              show: ['SRAS'],
              analysis: 'The upward slope reflects sticky costs – wages and supply contracts adjust slowly, so rising prices temporarily boost profit margins and output.'
            },
            {
              label: 'SRAS + LRAS',
              show: ['AD', 'SRAS'],
              analysis: 'Where SRAS crosses LRAS marks the long-run equilibrium at P₁ and Yf – the economy\'s maximum sustainable output.'
            }
          ]
        },
        { type: 'sectionHeader', icon: '⚖️', label: 'SRAS VS LRAS' },
        { type: 'pair',
          left:  { tone: 'blue',   icon: '📈', head: 'SRAS', body: 'Affected by wages, energy prices, taxes, import costs, productivity.' },
          right: { tone: 'purple', icon: '🏛️', head: 'LRAS', body: 'Determined by labour, capital, technology, productivity and efficiency.' }
        },
        { type: 'sectionHeader', icon: '🎯', label: 'WHY IT MATTERS' },
        { type: 'grid', cols: 3, children: [
          { type: 'tile', tone: 'blue',  icon: '📈', head: 'Inflation shocks', body: 'SRAS explains short-run cost-push inflation.' },
          { type: 'tile', tone: 'amber', icon: '📊', head: 'Growth potential', body: 'LRAS explains the economy\'s long-run capacity ceiling.' },
          { type: 'tile', tone: 'green', icon: '🔍', head: 'Diagnosis tool',   body: 'Together they help identify whether rising prices come from demand or supply.' }
        ]},
        { type: 'bigIdea',  text: 'Short-run changes affect costs and inflation. Long-run changes affect the economy\'s productive capacity.' },
        { type: 'examEdge', text: 'Strong essays distinguish movements along SRAS from shifts in SRAS – and they separate short-run supply conditions from long-run capacity.' }
      ]
    },

    /* ----- CARD 2 – The SRAS curve ----- */
    {
      id: 'sras-curve',
      stepLabel: 'Learn: Step 2 of 8',
      title: 'The SRAS curve',
      lede: 'Short-run aggregate supply (SRAS) slopes upward because many costs are sticky in the short run. When the general price level rises faster than firms\' costs, profit margins improve and firms increase output.',
      blocks: [
        { type: 'calloutStrip', tone: 'green', icon: '💡', text: 'Higher prices can raise output in the short run because some costs adjust slowly.' },
        { type: 'sectionHeader', icon: '📈', label: 'WHY SRAS SLOPES UPWARD' },
        { type: 'grid', cols: 3, children: [
          { type: 'tile', tone: 'blue',  icon: '£',  head: 'Prices rise',   body: 'The general price level rises.' },
          { type: 'tile', tone: 'amber', icon: '🔒', head: 'Costs sticky',  body: 'Wages and some costs are sticky in the short run.' },
          { type: 'tile', tone: 'green', icon: '📊', head: 'Output rises',  body: 'Profit margins improve and firms produce more.' }
        ]},
        { type: 'sectionHeader', icon: '📊', label: 'THE SRAS DIAGRAM' },
        {
          type: 'econDiagram',
          chart: 'adas',
          views: [
            {
              label: 'Point A',
              show: ['SRAS'],
              points: [{ label: 'A', tone: 'blue', onCurve: 'SRAS', x: 200 }],
              head: 'Initial equilibrium at A.',
              body: 'At price level P₁, firms supply Y₁. Wages and production costs are sticky – they have not yet risen.',
              analysis: 'Point A is the starting position. Costs are fixed in the short run, so price and output sit at the lower-left of the curve.'
            },
            {
              label: 'Movement to B',
              show: ['SRAS'],
              points: [
                { label: 'A', tone: 'blue',  onCurve: 'SRAS', x: 200 },
                { label: 'B', tone: 'green', onCurve: 'SRAS', x: 500 }
              ],
              arrows: [['A', 'B', { tone: 'slate' }]],
              head: 'Price rises – output rises too.',
              body: 'The price level rises to P₂. Revenue increases but costs remain fixed short-term. Higher profit margins encourage firms to produce more – moving up to B at Y₂.',
              analysis: 'This is a movement along SRAS, not a shift. The slope reflects sticky costs making short-run supply responsive to price changes.'
            }
          ]
        },
        { type: 'sectionHeader', icon: '⚙️', label: 'WHAT SHIFTS SRAS?' },
        { type: 'grid', cols: 3, children: [
          { type: 'tile', tone: 'purple', icon: '👥', head: 'Wages',                        body: '← Rise shifts SRAS left · → Fall shifts SRAS right' },
          { type: 'tile', tone: 'amber',  icon: '⚡', head: 'Energy prices',                body: '← Rise shifts SRAS left · → Fall shifts right' },
          { type: 'tile', tone: 'purple', icon: '📦', head: 'Raw material costs',           body: '← Rise shifts SRAS left · → Fall shifts right' },
          { type: 'tile', tone: 'green',  icon: '📈', head: 'Productivity',                 body: '→ Rise shifts right · ← Fall shifts left' },
          { type: 'tile', tone: 'blue',   icon: '🌍', head: 'Import costs (exchange rate)', body: '← Depreciation shifts left · → Appreciation shifts right' },
          { type: 'tile', tone: 'amber',  icon: '🏛️', head: 'Indirect taxes / subsidies',  body: '← Tax rise shifts left · → Subsidies shift right' }
        ]},
        { type: 'sectionHeader', icon: '⚖️', label: 'LEFT OR RIGHT?' },
        { type: 'pair',
          left:  { tone: 'rose',  icon: '←', head: 'Left shift',  body: 'Costs rise at every price level. Output falls. Inflation rises.' },
          right: { tone: 'green', icon: '→', head: 'Right shift', body: 'Costs fall or productivity rises. Output rises. Inflation eases.' }
        },
        { type: 'bigIdea',  text: 'SRAS responds to cost conditions. When costs rise, firms supply less at each price level.' },
        { type: 'examEdge', text: 'In macro diagrams, a rise in energy prices shifts SRAS left – it is not a movement along the curve.' }
      ]
    },

    /* ----- CARD 3 – The LRAS curve ----- */
    {
      id: 'lras-curve',
      stepLabel: 'Learn: Card 3 of 8',
      title: 'The LRAS curve',
      lede: 'The long-run aggregate supply (LRAS) curve is vertical at Yf. In the long run, factor prices adjust, so output is determined by real productive capacity rather than the price level.',
      blocks: [
        { type: 'calloutStrip', tone: 'green', icon: '💡', text: 'Long-run output depends on capacity, not on the price level.' },
        { type: 'sectionHeader', icon: '📊', label: 'TWO VIEWS OF LRAS' },
        {
          type: 'econDiagram',
          chart: 'keynesianAS',
          views: [
            {
              label: 'Classical',
              show: ['AD', 'ClassicalAS'],
              points: ['Ec'],
              head: 'The classical view holds that LRAS is vertical at Yf.',
              body: 'With full flexibility of wages and prices, markets self-adjust.',
              analysis: 'In the long run there is no trade-off between inflation and output – the economy always returns to full-employment output Yf, so the price level cannot raise sustainable output.'
            },
            {
              label: 'Keynesian',
              show: ['AD', 'KeynesianAS'],
              points: ['Ek'],
              head: 'Keynesians argue LRAS is not vertical in the short run.',
              body: 'When there is spare capacity, output can rise without much increase in the price level.',
              analysis: 'On the flat range, extra demand raises real output cheaply. As the economy nears Yf the curve steepens and inflation pressure rises sharply.'
            }
          ]
        },
        { type: 'sectionHeader', icon: '⚖️', label: 'CLASSICAL VS KEYNESIAN' },
        { type: 'pair',
          left:  { tone: 'blue',  icon: '🏛️', head: 'Classical', body: 'Vertical LRAS – LRAS is vertical at Yf. Markets self-adjust – flexible wages and prices restore equilibrium. Long-run focus – emphasis on capacity and money neutrality.' },
          right: { tone: 'amber', icon: '📈', head: 'Keynesian', body: 'Kinked LRAS – LRAS has a Keynesian range in the short run. Spare capacity – output can expand before inflation bites. Demand conditions – short-run demand conditions and unused resources matter.' }
        },
        { type: 'sectionHeader', icon: '🎯', label: 'WHY Yf MATTERS' },
        { type: 'grid', cols: 3, children: [
          { type: 'tile', tone: 'blue',  icon: '🏭', head: 'Productive capacity', body: 'Yf represents the economy\'s maximum sustainable output with resources fully employed.' },
          { type: 'tile', tone: 'green', icon: '📈', head: 'Sustainable growth',  body: 'In the long run, output cannot exceed Yf without higher inflation.' },
          { type: 'tile', tone: 'rose',  icon: '⏱️', head: 'Inflation pressure',  body: 'Pushing beyond Yf leads to rising costs, bottlenecks and accelerating inflation.' }
        ]},
        { type: 'bigIdea',  text: 'LRAS shows how much the economy can produce sustainably when resources are fully employed.' },
        { type: 'examEdge', title: 'Exam edge', text: 'Use the Keynesian range when evaluating whether higher AD will raise real output or mostly create inflation.' }
      ]
    },

    /* ----- CARD 4 – Shifts in SRAS ----- */
    {
      id: 'sras-shifts',
      stepLabel: 'Learn: Step 4 of 8',
      title: 'Shifts in SRAS',
      lede: 'A shift in short-run aggregate supply happens when firms\' costs or productivity change at every price level.',
      blocks: [
        { type: 'tip', tone: 'green', icon: '✅', text: 'SRAS shifts left when costs rise – and right when costs fall or productivity improves.' },
        { type: 'sectionHeader', icon: '📊', label: 'THE INTERACTIVE IDEA' },
        {
          type: 'econDiagram',
          chart: 'adas',
          views: [
            {
              label: 'Base equilibrium',
              shifts: {},
              analysis: 'AD and SRAS₀ intersect at E₀. Price level is P₀, output is Y₀.'
            },
            {
              label: 'Cost shock',
              shifts: { SRAS: -100 },
              analysis: 'Rising costs – wages, energy, raw materials – make every level of output more expensive. SRAS₁ lies above and to the left of SRAS₀.'
            },
            {
              label: 'New equilibrium',
              shifts: { SRAS: -100 },
              analysis: 'Result – stagflation. P rises (higher price level) and Y falls (lower output). This is the defining feature of a supply shock.'
            }
          ]
        },
        { type: 'sectionHeader', icon: '⚙️', label: 'SIX SHIFT DRIVERS' },
        { type: 'grid', cols: 3, children: [
          { type: 'tile', tone: 'purple', icon: '👥', head: 'Wages',                         body: '← Rise shifts left · → Fall shifts right' },
          { type: 'tile', tone: 'amber',  icon: '⚡', head: 'Energy prices',                 body: '← Rise shifts left · → Fall shifts right' },
          { type: 'tile', tone: 'purple', icon: '📦', head: 'Raw material costs',            body: '← Rise shifts left · → Fall shifts right' },
          { type: 'tile', tone: 'green',  icon: '📈', head: 'Productivity',                  body: '→ Rise shifts right · ← Fall shifts left' },
          { type: 'tile', tone: 'blue',   icon: '🌍', head: 'Import costs (exchange rate)',  body: '← Depreciation shifts left · → Appreciation shifts right' },
          { type: 'tile', tone: 'amber',  icon: '🏛️', head: 'Indirect taxes / subsidies',   body: '← Tax rise shifts left · → Subsidies shift right' }
        ]},
        { type: 'sectionHeader', icon: '⚖️', label: 'LEFT OR RIGHT?' },
        { type: 'pair',
          left:  { tone: 'rose',  icon: '←', head: 'Left shift',  body: 'Costs rise at every price level. Output falls. Inflation rises.' },
          right: { tone: 'green', icon: '→', head: 'Right shift', body: 'Costs fall or productivity rises. Output rises. Inflation eases.' }
        },
        { type: 'tile', tone: 'blue', icon: '📝', head: 'Essay link', body: 'SRAS shifts are central to cost-push inflation and cycle analysis. Always explain the cause, the shift, and the effect on output and the price level.' },
        { type: 'bigIdea',  text: 'A supply shock changes the economy\'s short-run cost conditions at every price level.' },
        { type: 'examEdge', text: 'When output falls and prices rise together, the strongest diagnosis is an adverse SRAS shift rather than demand-pull inflation.' }
      ]
    },

    /* ----- CARD 5 – Shifts in LRAS ----- */
    {
      id: 'lras-shifts',
      stepLabel: 'Learn: Step 5 of 8',
      title: 'Shifts in LRAS',
      lede: 'LRAS shifts when the economy\'s productive capacity changes. A rightward shift means higher sustainable output without needing inflation.',
      blocks: [
        { type: 'tip', tone: 'green', icon: '✅', text: 'LRAS moves when the economy\'s capacity changes – not when the price level changes.' },
        { type: 'sectionHeader', icon: '🎯', label: 'WHAT SHIFTS LRAS?' },
        { type: 'grid', cols: 3, children: [
          { type: 'tile', tone: 'green', icon: '👥', head: 'Labour supply',             body: 'More people available and willing to work.' },
          { type: 'tile', tone: 'green', icon: '🏭', head: 'Capital stock',             body: 'More machinery, tools and infrastructure.' },
          { type: 'tile', tone: 'green', icon: '💡', head: 'Technology',                body: 'Innovations improve how resources are used.' },
          { type: 'tile', tone: 'green', icon: '📈', head: 'Productivity',              body: 'More output produced per unit of input.' },
          { type: 'tile', tone: 'green', icon: '🎓', head: 'Education and skills',      body: 'A more skilled workforce raises productive capacity.' },
          { type: 'tile', tone: 'green', icon: '⚙️', head: 'Deregulation / efficiency', body: 'Lower barriers and red tape improve resource use.' }
        ]},
        { type: 'sectionHeader', icon: '📊', label: 'THE GROWTH DIAGRAM' },
        {
          type: 'econDiagram',
          chart: 'growth',
          views: [
            {
              label: 'Base equilibrium',
              shifts: {},
              points: ['E0'],
              analysis: 'AD intersects LRAS₀ at E₀. Price level is P₀. Real output is at full capacity Y₀.'
            },
            {
              label: 'LRAS shifts right',
              shifts: { LRAS: 140 },
              points: ['E0', 'E1'],
              analysis: 'LRAS shifts right. New full-capacity output Y₁ is higher than before. Productive capacity expands.'
            },
            {
              label: 'New equilibrium',
              shifts: { LRAS: 140 },
              points: ['E0', 'E1'],
              analysis: 'A rightward LRAS shift is the supply-side ideal – more output without inflation. This contrasts with a demand-led AD shift, which raises output and prices together.'
            }
          ]
        },
        { type: 'sectionHeader', icon: '🎯', label: 'WHY IT MATTERS' },
        { type: 'grid', cols: 3, children: [
          { type: 'tile', tone: 'green',  icon: '📈', head: 'More capacity',        body: 'LRAS shifts right.' },
          { type: 'tile', tone: 'blue',   icon: '🏭', head: 'Higher potential output', body: 'The economy can produce more at any given price level.' },
          { type: 'tile', tone: 'purple', icon: '🔍', head: 'Stronger long-run growth', body: 'Sustainable improvements in living standards with lower inflation pressure.' }
        ]},
        { type: 'sectionHeader', icon: '⚖️', label: 'SHORT RUN VS LONG RUN' },
        { type: 'pair',
          left:  { tone: 'blue',  icon: '⏱️', head: 'Short run', body: 'SRAS right shift can lower costs now. Useful to reduce short-term inflation.' },
          right: { tone: 'amber', icon: '🌄', head: 'Long run',  body: 'LRAS right shift expands the economy\'s frontier. Sustains growth without creating inflation.' }
        },
        { type: 'bigIdea',  text: 'LRAS growth is the supply-side route to rising output without overheating the economy.' },
        { type: 'examEdge', text: 'In essays, distinguish sustainable growth from a temporary AD-led boom – LRAS shifts raise capacity, not just spending.' }
      ]
    },

    /* ----- CARD 6 – Supply-side policies ----- */
    {
      id: 'supply-side-policies',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 6 of 8',
      title: 'Supply-side policies',
      lede: 'Supply-side policies aim to raise productive capacity or improve incentives and efficiency. Present both market-based and interventionist approaches.',
      blocks: [
        { type: 'calloutStrip', tone: 'green', icon: '✅', text: 'Supply-side policy targets the economy\'s capacity, costs and efficiency.' },
        { type: 'sectionHeader', icon: '🔧', label: 'MARKET-BASED POLICIES' },
        { type: 'grid', cols: 2, children: [
          { type: 'tile', tone: 'blue', icon: '💹', head: 'Tax cuts',               body: 'Lower taxes to raise work incentives and investment. Fast · Low cost · Mixed evidence' },
          { type: 'tile', tone: 'blue', icon: '📋', head: 'Deregulation',           body: 'Remove barriers to entry and reduce red tape. Fast · Low cost · Mixed evidence' },
          { type: 'tile', tone: 'blue', icon: '🏛️', head: 'Privatisation',          body: 'Transfer state ownership to the private sector. Medium speed · Medium cost · Mixed evidence' },
          { type: 'tile', tone: 'blue', icon: '👥', head: 'Flexible labour markets', body: 'Easier hiring and firing to improve labour allocation. Fast · Low cost · Mixed evidence' }
        ]},
        { type: 'sectionHeader', icon: '🏗️', label: 'INTERVENTIONIST POLICIES' },
        { type: 'grid', cols: 2, children: [
          { type: 'tile', tone: 'amber', icon: '🎓', head: 'Education and training', body: 'Improve skills to lift productivity and earning potential. Slow · High cost · Strong evidence' },
          { type: 'tile', tone: 'amber', icon: '🛣️', head: 'Infrastructure',         body: 'Invest in transport, energy and digital networks. Slow · High cost · Strong evidence' },
          { type: 'tile', tone: 'amber', icon: '🔬', head: 'R&D subsidies',          body: 'Support research and innovation through grants or tax relief. Medium speed · Medium cost · Mixed evidence' },
          { type: 'tile', tone: 'amber', icon: '🏭', head: 'Industrial strategy',    body: 'Target support for strategic sectors and clusters. Slow · High cost · Mixed evidence' }
        ]},
        { type: 'grid', cols: 2, children: [
          { type: 'tile', tone: 'blue', icon: '👥', head: 'Market-based', body: 'Improves incentives and flexibility.' },
          { type: 'tile', tone: 'amber', icon: '👥', head: 'Interventionist', body: 'Builds human and physical capital.' }
        ]},
        { type: 'calloutStrip', tone: 'blue', icon: '⏱️', text: 'Speed — Market-based is faster. Interventionist takes time.' },
        { type: 'calloutStrip', tone: 'amber', icon: '£', text: 'Fiscal cost — Market-based is cheaper. Interventionist is costlier.' },
        { type: 'calloutStrip', tone: 'purple', icon: '👥', text: 'Distributional impact — Market-based can widen gaps. Interventionist can reduce them.' },
        { type: 'bigIdea', text: 'The best supply-side strategy depends on the problem – incentives, skills, infrastructure or innovation.' },
        { type: 'examEdge', title: 'Exam edge', text: 'Strong evaluation avoids saying \'supply-side\' as if it is one policy – split the answer into market-based and interventionist measures.' }
      ]
    },

    /* ----- CARD 7 – AS in the AD/AS model ----- */
    {
      id: 'as-in-adas',
      stepLabel: 'Learn: Step 7 of 8',
      title: 'AS in the AD/AS model',
      lede: 'Compare supply-side improvements with demand-side stimulus. Both may raise output, but the inflation consequences differ.',
      blocks: [
        { type: 'tip', tone: 'green', icon: '✅', text: 'The same output gain can come from stronger demand or stronger supply – but the price effect is different.' },
        { type: 'sectionHeader', icon: '📈', label: 'DEMAND-SIDE STIMULUS' },
        {
          type: 'econDiagram',
          chart: 'adas',
          views: [
            {
              label: 'Base',
              shifts: {},
              analysis: 'AD and SRAS intersect at E₀. Price level P₀, real output Y₀.'
            },
            {
              label: 'AD shifts right',
              shifts: { AD: 80 },
              analysis: 'Government spending, tax cuts or looser monetary policy raise demand. The whole AD curve shifts rightward.'
            },
            {
              label: 'New equilibrium',
              shifts: { AD: 80 },
              analysis: 'Demand stimulus raises output and the price level together. Near full capacity, most of the boost becomes inflationary rather than productive.'
            }
          ]
        },
        { type: 'sectionHeader', icon: '⚙️', label: 'SUPPLY-SIDE IMPROVEMENT' },
        {
          type: 'econDiagram',
          chart: 'adas',
          views: [
            {
              label: 'Base',
              shifts: {},
              analysis: 'AD and SRAS₀ intersect at E₀. Price level P₀, real output Y₀.'
            },
            {
              label: 'SRAS shifts right',
              shifts: { SRAS: 100 },
              analysis: 'Higher productivity, lower costs or better technology cut firms\' costs at every price level. SRAS₁ lies to the right of SRAS₀.'
            },
            {
              label: 'New equilibrium',
              shifts: { SRAS: 100 },
              analysis: 'Supply-side improvement raises output while keeping inflation in check. This is the key advantage over demand stimulus – especially when the economy is near full capacity.'
            }
          ]
        },
        { type: 'sectionHeader', icon: '↔️', label: 'COMPARE THE OUTCOMES' },
        { type: 'grid', cols: 2, children: [
          { type: 'tile', tone: 'blue',  head: '📊 Output (demand)',         body: 'Rises – AD shifts right.' },
          { type: 'tile', tone: 'green', head: '📊 Output (supply)',          body: 'Rises – capacity expands.' },
          { type: 'tile', tone: 'blue',  head: '💹 Price level (demand)',    body: 'Rises – inflationary.' },
          { type: 'tile', tone: 'green', head: '💹 Price level (supply)',    body: 'Stable or falling.' },
          { type: 'tile', tone: 'blue',  head: '📅 Sustainability (demand)', body: 'Short-term boost.' },
          { type: 'tile', tone: 'green', head: '📅 Sustainability (supply)', body: 'Long-term improvement.' },
          { type: 'tile', tone: 'blue',  head: '⚠️ Inflation risk (demand)', body: 'High near full employment.' },
          { type: 'tile', tone: 'green', head: '⚠️ Inflation risk (supply)', body: 'Low – capacity expands with output.' }
        ]},
        { type: 'sectionHeader', icon: '🎯', label: 'WHEN TO USE WHICH' },
        { type: 'pair',
          left:  { tone: 'blue',  icon: '📉', head: 'Weak AD and recession',                      body: 'Demand management can help. Use fiscal or monetary policy to stimulate demand.' },
          right: { tone: 'green', icon: '⚙️', head: 'Capacity constraints and inflation pressure', body: 'Supply-side reform is better. Expand productive capacity and remove supply-side bottlenecks.' }
        },
        { type: 'calloutStrip', tone: 'blue', icon: 'ℹ️', text: 'Combining both can work best: use demand policy when demand is weak now, but invest in supply-side improvements to raise potential output over time.' },
        { type: 'bigIdea',  text: 'Demand policy changes spending. Supply policy changes capacity. The diagnosis determines the better cure.' },
        { type: 'examEdge', text: 'Top essays compare the inflation impact – AD stimulus is more inflationary than supply-side expansion when the economy is close to full employment.' }
      ]
    },

    /* ----- CARD 8 – Evaluating supply-side policy ----- */
    {
      id: 'evaluating-supply-side',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 8 of 8',
      title: 'Evaluating supply-side policy',
      lede: 'Supply-side policy can raise long-run growth, but its success depends on time, cost, politics and context. This is the evaluative card.',

      tip: { icon: '✅', tone: 'green', text: 'Supply-side policy can be powerful – but usually slowly, unevenly and at a cost.' },

      causesFirst: true,
      causesLabel: 'SIX EVALUATION TESTS',
      causesEmoji: '⚖️',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'blue',   icon: '⏱️', head: '1. Time lags',           body: 'Effects are often very slow. Strengthens evaluation if reforms have long payback periods.' },
        { tone: 'amber',  icon: '£',        head: '2. Funding cost',        body: 'Infrastructure and education are expensive. Weakens if fiscal space is limited.' },
        { tone: 'purple', icon: '👥',  head: '3. Political feasibility', body: 'Reforms create losers as well as winners. Weakens if opposition is strong.' },
        { tone: 'green',  icon: '⚖️',  head: '4. Distributional effects', body: 'Some reforms can be regressive. Weakens if inequality worsens.' },
        { tone: 'blue',   icon: '🔗',  head: '5. Fits demand policy', body: 'Supply-side works best combined with demand management. Strengthens when macro conditions are favourable.' },
        { tone: 'amber',  icon: '🌍',  head: '6. Global context',    body: 'Global conditions matter. Weakens if trading partners also improve their supply-side.' }
      ],

      summaryRow: [
        {
          tone: 'blue',
          icon: '⭐',
          title: 'Overall judgement',
          text: 'Supply-side policy is most effective when it targets binding constraints – such as skills shortages, poor infrastructure or regulatory barriers – and when it is financed sustainably and given time to work.'
        }
      ],

      flow2Title: 'HOW TO JUDGE',
      flow2Emoji: '✅',
      flow2Sep: '→',
      flow2: [
        { tone: 'blue',   icon: '⚡', title: 'Speed',    sub: 'Will it work fast enough?' },
        { tone: 'amber',  icon: '📏', title: 'Scale',    sub: 'Will it be large enough?' },
        { tone: 'green',  icon: '⚖️', title: 'Fairness', sub: 'Who gains and who loses?' },
        { tone: 'purple', icon: '📊', title: 'Evidence', sub: 'What does experience show?' }
      ],

      conclusion: { title: 'Big idea', text: 'The right supply-side policy depends on the bottleneck – skills, incentives, infrastructure, innovation or regulation.' },
      examEdge: 'The strongest judgement balances long-run benefits against short-run limits – especially time lags, cost and distributional trade-offs.',

      quizCta: { href: TopicLoader.routes.quiz('main'), label: 'Test yourself →' }
    }

  ]
};

/* ============================================================
   End-of-Learn-It quiz pool · folded in at v0.4.0
   These questions used to live at /quiz/<topic>/<set> as a
   standalone shell. They now ride along with the Learn It data
   under the same window.ECONOS_QUIZ global. The /quiz/ URL
   contract is gone; the quiz is the natural finisher to the
   Learn It journey, so the data lives next to learn cards.
   ============================================================ */
/* ---- quiz-main.js (quiz pool, preserved from former /quiz/ shell) ---- */
(function () {

  window.ECONOS_QUIZ = {
    title:    'Aggregate Supply',
    subtitle: 'Macroeconomics',
    backUrl:  TopicLoader.routes.learn('aggregate-supply'),
    backLabel:'Back to Learn It',
    lede:     '10 questions · ~8 minutes · covers SRAS vs LRAS, Classical vs Keynesian AS, and output gaps',
    shortNames: [
      'SRAS vs LRAS','Classical LRAS','Keynesian AS','SRAS shift','Output gap',
      'Categorise','Cause-effect','Odd one out','Data table','Match pairs'
    ],
    questions: [
      {
        type: 'mcq',
        q:    'The Short-Run Aggregate Supply (SRAS) curve slopes upward because:',
        opts: [
          'Higher prices attract more workers and capital into the economy',
          'Higher prices make it profitable for firms to increase output, even though some costs are fixed',
          'In the short run, all factor prices are perfectly flexible',
          'Higher prices reduce the cost of imports'
        ],
        ans:  1,
        exp:  'In the short run, some costs (especially wages) are sticky. When the price level rises, firms receive higher revenue but face unchanged costs – so they expand output. This gives an upward-sloping SRAS.'
      },
      {
        type: 'mcq',
        q:    'In the Classical model, the Long-Run Aggregate Supply (LRAS) curve is:',
        opts: [
          'Upward sloping like SRAS',
          'Downward sloping like AD',
          'Perfectly vertical at the full-employment output level',
          'Perfectly horizontal at a fixed price level'
        ],
        ans:  2,
        exp:  'Classical economists argue that in the long run, all prices and wages are fully flexible, so the economy always returns to full employment (potential output, Yf). LRAS is vertical – output is fixed by supply-side capacity.'
      },
      {
        type: 'mcq',
        q:    'In the Keynesian model, the AS curve is horizontal at low output levels because:',
        opts: [
          'All resources are fully employed and fully flexible',
          'There is so much spare capacity that output can rise without any upward price pressure',
          'The government controls all prices below potential output',
          'Investment determines prices rather than output'
        ],
        ans:  1,
        exp:  'Keynes argued that during a recession (with mass unemployment and idle capital), firms can expand output by hiring unemployed resources without bidding up wages or prices. The AS curve is flat in this range.'
      },
      {
        type: 'mcq',
        q:    'Which of the following would shift SRAS to the LEFT (upward)?',
        opts: [
          'A fall in oil prices',
          'An improvement in labour productivity',
          'A sharp rise in raw material costs',
          'A fall in corporation tax'
        ],
        ans:  2,
        exp:  'A rise in raw material costs (a negative supply shock) increases the cost of production at every level of output. Firms produce less at any given price – SRAS shifts left, pushing prices up and output down (stagflation risk).'
      },
      {
        type: 'numeric_input',
        q:    'Potential output is £2,000bn. Actual output is £1,700bn. What is the output gap (£bn) and state the sign (negative for a deflationary gap).',
        answer: -300,
        tolerance: 0,
        unit: '£bn',
        hint: 'Output gap = Actual output − Potential output.',
        workingSteps: ['Output gap = £1,700bn − £2,000bn = −£300bn (negative / deflationary gap)']
      },
      {
        type: 'categorise',
        q:    'Categorise each factor as shifting SRAS or shifting LRAS.',
        categories: ['Shifts SRAS','Shifts LRAS'],
        items: [
          { item: 'Rise in wages (nominal)',                    category: 'Shifts SRAS' },
          { item: 'Improvement in technology and productivity', category: 'Shifts LRAS' },
          { item: 'Fall in commodity prices',                   category: 'Shifts SRAS' },
          { item: 'Net immigration increasing labour force',    category: 'Shifts LRAS' },
          { item: 'Oil price spike',                            category: 'Shifts SRAS' },
          { item: 'Investment in infrastructure',               category: 'Shifts LRAS' }
        ]
      },
      {
        type: 'cause_effect',
        q:    'Match each cause to its effect on aggregate supply.',
        pairs: [
          { cause: 'Oil prices fall sharply',                   effect: 'SRAS shifts right; prices fall, output rises' },
          { cause: 'Labour productivity improves',              effect: 'LRAS shifts right; potential output increases' },
          { cause: 'Cost-push inflation hits wages and inputs', effect: 'SRAS shifts left; stagflation risk' },
          { cause: 'Economy produces above potential output',   effect: 'Positive output gap; upward wage and price pressure' },
          { cause: 'Government invests in worker training',     effect: 'Human capital rises; LRAS shifts right over time' },
          { cause: 'Recession leaves large negative output gap',effect: 'Deflationary pressure; unemployment above natural rate' }
        ]
      },
      {
        type: 'odd_one_out',
        q:    'Which is the odd one out in the context of SRAS shifters?',
        opts: ['Change in input costs','Change in commodity prices','Change in potential output','Change in nominal wages'],
        ans:  2,
        exp:  'Changes in input costs, commodity prices, and nominal wages all shift SRAS by changing the cost of production in the short run. A change in potential output shifts LRAS – it is a long-run supply-side concept.'
      },
      {
        type: 'data_table',
        q:    'Use the data to identify which scenario involves stagflation.',
        tableHeaders: ['Scenario','Change in Price Level','Change in Real Output','Cause'],
        tableData: [
          ['A','Rises','Rises','AD increases'],
          ['B','Falls','Rises','AS increases'],
          ['C','Rises','Falls','SRAS shifts left (cost-push)'],
          ['D','Falls','Falls','AD decreases (recession)']
        ],
        opts: ['Scenario A','Scenario B','Scenario C','Scenario D'],
        ans:  2,
        exp:  'Stagflation is the combination of rising prices AND falling output – the worst of both worlds. Scenario C shows rising prices with falling output caused by a leftward SRAS shift (negative supply shock).'
      },
      {
        type: 'match_pairs',
        q:    'Match each aggregate supply concept to its description.',
        pairs: [
          { a: 'SRAS',              b: 'Short-run supply where some costs are fixed; upward sloping' },
          { a: 'LRAS (Classical)',  b: 'Vertical supply at full employment; determined by supply-side factors' },
          { a: 'Keynesian AS',      b: 'Horizontal range at low output; upward range; then vertical' },
          { a: 'Output gap',        b: 'Difference between actual and potential output' },
          { a: 'Stagflation',       b: 'Simultaneous rise in prices and fall in real output' },
          { a: 'Supply-side shock', b: 'Unexpected change in production costs that shifts SRAS' }
        ]
      }
    ]
  };

})();
