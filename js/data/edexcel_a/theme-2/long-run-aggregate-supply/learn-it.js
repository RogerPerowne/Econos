/* ============================================================
   ECONOS – Long-run Aggregate Supply (Edexcel A 2.3.3)
   4 cards · ad-interactive template
   Split from the legacy `aggregate-supply` topic on 2026-06-05.
   The 2.3.1 characteristics overview lives at `aggregate-supply`;
   the 2.3.2 short-run material lives at `short-run-aggregate-supply`.
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'long-run-aggregate-supply',
  topicNum: '2.3.3',
  theme: 'Theme 2 \xb7 The National and Global Economy',
  title: 'Long-run Aggregate Supply',
  estTime: '12 min',
  goal: 'Distinguish Classical from Keynesian LRAS and master supply-side policy',

  intro: {
    heroKey: 'heroAggSupply',
    summary: 'Long-run aggregate supply (LRAS) reflects the economy\'s productive capacity once costs have fully adjusted. The Classical view draws LRAS vertical at full employment; the Keynesian view draws a reverse-L. LRAS shifts when the supply-side fundamentals improve – productivity, education and skills, technology, regulation, demographics, competition policy.',
    doInThis: 'Compare Classical and Keynesian LRAS, map every spec factor to a shift, then evaluate supply-side policy as the lever that targets LRAS.',
    outcomes: [
      'Distinguish Classical and Keynesian views of LRAS',
      'Identify the spec factors that shift LRAS',
      'Explain how supply-side policies target LRAS factors',
      'Evaluate supply-side policy against demand-side alternatives'
    ],
    tip: 'LRAS is about capacity, not costs. If the factor changes the economy\'s long-run productive potential, it shifts LRAS.',
    stages: [
      { num: 1, name: 'Learn',  sub: '4 cards \xb7 12 min', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [
    /* ----- CARD 1 – The LRAS curve ----- */
    {
      id: 'lras-curve',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 1 of 4',
      title: 'The LRAS curve',
      lede: 'The long-run aggregate supply (LRAS) curve is vertical at Yf. In the long run, factor prices adjust, so output is determined by real productive capacity rather than the price level.',

      tip: { icon: '✅', tone: 'green', text: 'Long-run output depends on capacity, not on the price level.' },

      interactiveDiagram: {
        svgKey: 'lrasViewsInteractive',
        label: 'TWO VIEWS OF LRAS',
        emoji: '📊',
        layers: [],
        perspectives: ['classical', 'keynesian'],
        perspectiveLabels: { classical: 'Classical', keynesian: 'Keynesian' },
        views: [
          {
            label: 'LRAS shape',
            tone: 'slate',
            classical: {
              head: 'The classical view holds that LRAS is vertical at Yf.',
              body: ['With full flexibility of wages and prices, markets self-adjust.', 'Therefore, in the long run there is no trade-off between inflation and output.'],
              analysis: 'Output is determined entirely by capacity. Demand shocks change the price level but not Y in the long run – money is neutral.'
            },
            keynesian: {
              head: 'Keynesians argue LRAS has a flat range, a rising range and a vertical capacity ceiling.',
              body: ['When there is spare capacity (range 1), output can rise without much increase in the price level.', 'As the economy nears Yf, inflation pressure rises sharply.'],
              analysis: 'The shape of AS depends on where the economy sits. Deep in spare capacity, demand stimulus mostly raises Y. Near capacity, it mostly raises P.'
            }
          }
        ]
      },

      pairLabel: 'CLASSICAL VS KEYNESIAN',
      pairEmoji: '⚖️',
      left: {
        tone: 'blue', icon: '🏛️', iconStyle: 'circle',
        label: 'Classical',
        checks: [
          { term: 'Vertical LRAS', body: 'LRAS is vertical at Yf.' },
          { term: 'Markets self-adjust', body: 'Flexible wages and prices restore equilibrium.' },
          { term: 'Long-run focus', body: 'Emphasis on capacity and money neutrality.' }
        ]
      },
      right: {
        tone: 'amber', icon: '📈', iconStyle: 'circle',
        label: 'Keynesian',
        checks: [
          { term: 'Kinked LRAS', body: 'LRAS has a Keynesian range in the short run.' },
          { term: 'Spare capacity', body: 'Output can expand before inflation bites.' },
          { term: 'Demand conditions', body: 'Short-run demand conditions and unused resources matter.' }
        ]
      },

      causesLast: true,
      causesLabel: 'WHY Yf MATTERS',
      causesEmoji: '🎯',
      causesStyle: 'tinted-flat',
      causesCols: 3,
      causes: [
        { tone: 'blue',   icon: '🏭', head: 'Productive capacity', body: 'Yf represents the economy\'s maximum sustainable output with resources fully employed.' },
        { tone: 'green',  icon: '📈', head: 'Sustainable growth',  body: 'In the long run, output cannot exceed Yf without higher inflation.' },
        { tone: 'rose',   icon: '⏱️', head: 'Inflation pressure',  body: 'Pushing beyond Yf leads to rising costs, bottlenecks and accelerating inflation.' }
      ],

      conclusion: { title: 'Big idea', text: 'LRAS shows how much the economy can produce sustainably when resources are fully employed.' },
      examEdge: 'Use the Keynesian range when evaluating whether higher AD will raise real output or mostly create inflation.'
    },

    /* ----- CARD 2 – Shifts in LRAS ----- */
    {
      id: 'lras-shifts',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 2 of 4',
      title: 'Shifts in LRAS',
      lede: 'LRAS shifts when the economy\'s productive capacity changes. A rightward shift means higher sustainable output without needing inflation.',

      tip: { icon: '✅', tone: 'green', text: 'LRAS moves when the economy\'s capacity changes – not when the price level changes.' },

      // Classical ↔ Keynesian toggle. Same capacity expansion, two
      // verdicts on whether actual output follows:
      //   Classical: economy lands at the new Yf₂ at lower P (clean).
      //   Keynesian: capacity wall slides right but actual output rises
      //     only along the AS rising range – a fresh output gap opens
      //     between Y₂ and Yf₂ until demand catches up.
      interactiveDiagram: {
        svgKey: 'lrasShiftRightClassicalKeynesian',
        label: 'CAPACITY EXPANSION – LRAS SHIFTS RIGHT',
        emoji: '📊',
        layers: ['c-lras1-dash', 'c-lras2', 'c-lr-arrow', 'c-e2', 'k-as1-dash', 'k-as2', 'k-lr-arrow', 'k-e2', 'k-yf2', 'k-gap'],
        inverseLayers: ['c-lras1-solid', 'k-as1-solid'],
        perspectives: ['classical', 'keynesian'],
        perspectiveLabels: { classical: 'Classical view', keynesian: 'Keynesian view' },
        views: [
          {
            label: 'Starting point', show: [],
            classical: {
              tone: 'purple',
              head: 'Classical view – at potential at E₁.',
              body: ['AD meets vertical LRAS₁ at E₁ – output Yf₁, price level P₁.', 'In the long run the economy always sits on LRAS.'] },
            keynesian: {
              tone: 'amber',
              head: 'Keynesian view – below capacity at E₁.',
              body: ['AD meets the reverse-L AS₁ on its <strong>rising range</strong>, at E₁ – output Y₁ sits below capacity Yf₁.', 'Actual output is demand-limited; there is idle capacity.'] }
          },
          {
            label: 'Capacity rises',
            show: ['c-lras1-dash', 'c-lras2', 'c-lr-arrow', 'k-as1-dash', 'k-as2', 'k-lr-arrow'],
            classical: {
              tone: 'green',
              head: 'LRAS₁ → LRAS₂.',
              body: ['Better technology, more capital, higher productivity, a bigger or more-skilled labour force – any genuine capacity gain shifts LRAS rightward.', 'Potential output rises from Yf₁ to Yf₂.'] },
            keynesian: {
              tone: 'green',
              head: 'The capacity wall slides parallel-right.',
              body: ['The reverse-L\'s vertical capacity wall moves right (AS₁ → AS₂); the price floor stays put.', 'Potential output rises to Yf₂. Whether <em>actual</em> output follows depends on demand.'] }
          },
          {
            label: 'New equilibrium',
            show: ['c-lras1-dash', 'c-lras2', 'c-lr-arrow', 'c-e2', 'k-as1-dash', 'k-as2', 'k-lr-arrow', 'k-e2', 'k-yf2', 'k-gap'],
            classical: {
              tone: 'purple',
              head: 'Output up, prices down at E₂.',
              body: ['AD meets LRAS₂ at E₂: <strong>Y₂ = Yf₂ &gt; Yf₁ AND P₂ &lt; P₁</strong>.', 'Sustainable, non-inflationary growth – the supply-side ideal.'],
              analysis: 'Classical verdict: this is the prize. Real capacity gains raise long-run output AND lower the price level; the AD shift you don\'t need is the one that just inflates. Demand-side levers can\'t reach this corner – only supply-side reform can.' },
            keynesian: {
              tone: 'rose',
              head: 'Potential rises – output LAGS it.',
              body: ['E₂ sits on AS₂\'s rising range: actual Y₂ rises and P falls, but <strong>Y₂ &lt; Yf₂</strong>.', 'A fresh output gap (rose arrow): the new capacity goes partly unused until demand catches up.'],
              analysis: 'Keynesian verdict: capacity expansion helps, but it is not enough on its own. With AD unchanged, real output rises only modestly; <strong>someone has to buy the extra output</strong>. The full benefit of supply-side reform needs demand-side support alongside it.' }
          }
        ]
      },

      causesFirst: true,
      causesLabel: 'WHAT SHIFTS LRAS?',
      causesEmoji: '🎯',
      causesStyle: 'tinted-flat',
      causesCols: 3,
      causes: [
        { tone: 'green', icon: '👥', head: 'Labour supply',       body: 'More people available and willing to work.' },
        { tone: 'green', icon: '🌐', head: 'Demographics &amp; migration', body: 'Ageing population shrinks the labour force; net inward migration of working-age adults expands it.' },
        { tone: 'green', icon: '🏭', head: 'Capital stock',       body: 'More machinery, tools and infrastructure.' },
        { tone: 'green', icon: '💡', head: 'Technology',          body: 'Innovations improve how resources are used.' },
        { tone: 'green', icon: '📈', head: 'Relative productivity', body: 'Output per worker compared with rivals. The UK lags Germany and the US – closing the gap would shift LRAS right.' },
        { tone: 'green', icon: '🎓', head: 'Education and skills', body: 'A more skilled workforce raises productive capacity.' },
        { tone: 'green', icon: '⚔️', head: 'Competition policy',  body: 'Stronger rivalry (CMA enforcement, removing entry barriers) pushes firms to cut costs and innovate – raising sustainable capacity.' },
        { tone: 'green', icon: '⚙️', head: 'Deregulation / efficiency', body: 'Lower barriers and red tape improve resource use.' }
      ],

      flowTitle: 'WHY IT MATTERS',
      flowEmoji: '🎯',
      flow: [
        { tone: 'green',  icon: '📈', title: 'More capacity', sub: 'LRAS shifts right.' },
        { tone: 'blue',   icon: '🏭', title: 'Higher potential output', sub: 'The economy can produce more at any given price level.' },
        { tone: 'purple', icon: '🔍', title: 'Stronger long-run growth and lower inflation pressure', sub: 'Sustainable improvements in living standards.' }
      ],

      pairLabel: 'SHORT RUN VS LONG RUN',
      pairEmoji: '⚖️',
      left: {
        tone: 'blue', icon: '⏱️', iconStyle: 'circle',
        label: 'Short run',
        text: '<p style="margin:0;font-size:13px;color:#0B1426;line-height:1.6;">SRAS right shift can lower costs now. Useful to reduce short-term inflation.</p>'
      },
      right: {
        tone: 'amber', icon: '🌄', iconStyle: 'circle',
        label: 'Long run',
        text: '<p style="margin:0;font-size:13px;color:#0B1426;line-height:1.6;">LRAS right shift expands the economy\'s frontier. Sustains growth without creating inflation.</p>'
      },

      conclusion: { title: 'Big idea', text: 'LRAS growth is the supply-side route to rising output without overheating the economy.' },
      examEdge: 'In essays, distinguish sustainable growth from a temporary AD-led boom – LRAS shifts raise capacity, not just spending.'
    },

    /* ----- CARD 3 – Supply-side policies ----- */
    {
      id: 'supply-side-policies',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 3 of 4',
      title: 'Supply-side policies',
      lede: 'Supply-side policies aim to raise productive capacity or improve incentives and efficiency. Present both market-based and interventionist approaches.',

      tip: { icon: '✅', tone: 'green', text: 'Supply-side policy targets the economy\'s capacity, costs and efficiency.' },

      causesFirst: true,
      causesLabel: 'MARKET-BASED POLICIES',
      causesEmoji: '🔧',
      causesStyle: 'tinted-flat',
      causesCols: 2,
      causes: [
        { tone: 'blue', icon: '💹', head: 'Tax cuts',               body: 'Lower taxes to raise work incentives and investment. <span style="color:#3B82F6;font-size:11px;font-weight:700;">Fast · Low cost · Mixed evidence</span>' },
        { tone: 'blue', icon: '📋', head: 'Deregulation',           body: 'Remove barriers to entry and reduce red tape. <span style="color:#3B82F6;font-size:11px;font-weight:700;">Fast · Low cost · Mixed evidence</span>' },
        { tone: 'blue', icon: '🏛️', head: 'Privatisation',          body: 'Transfer state ownership to the private sector. <span style="color:#3B82F6;font-size:11px;font-weight:700;">Medium speed · Medium cost · Mixed evidence</span>' },
        { tone: 'blue', icon: '👥', head: 'Flexible labour markets', body: 'Easier hiring and firing to improve labour allocation. <span style="color:#3B82F6;font-size:11px;font-weight:700;">Fast · Low cost · Mixed evidence</span>' }
      ],

      causes2Label: 'INTERVENTIONIST POLICIES',
      causes2Emoji: '🏗️',
      causes2Cols: 2,
      causes2: [
        { tone: 'amber', icon: '🎓', head: 'Education and training', body: 'Improve skills to lift productivity and earning potential. <span style="color:#D97706;font-size:11px;font-weight:700;">Slow · High cost · Strong evidence</span>' },
        { tone: 'amber', icon: '🛣️', head: 'Infrastructure',         body: 'Invest in transport, energy and digital networks. <span style="color:#D97706;font-size:11px;font-weight:700;">Slow · High cost · Strong evidence</span>' },
        { tone: 'amber', icon: '🔬', head: 'R&D subsidies',          body: 'Support research and innovation through grants or tax relief. <span style="color:#D97706;font-size:11px;font-weight:700;">Medium speed · Medium cost · Mixed evidence</span>' },
        { tone: 'amber', icon: '🏭', head: 'Industrial strategy',    body: 'Target support for strategic sectors and clusters. <span style="color:#D97706;font-size:11px;font-weight:700;">Slow · High cost · Mixed evidence</span>' }
      ],

      pairLabel: 'WHEN EACH WORKS BEST',
      pairEmoji: '🎯',
      left: {
        tone: 'blue', icon: '👥', iconStyle: 'circle',
        label: 'Market-based',
        text: '<p style="margin:0;font-size:13px;color:#0B1426;line-height:1.6;">Improves incentives and flexibility.</p>'
      },
      right: {
        tone: 'amber', icon: '👥', iconStyle: 'circle',
        label: 'Interventionist',
        text: '<p style="margin:0;font-size:13px;color:#0B1426;line-height:1.6;">Builds human and physical capital.</p>'
      },

      summaryRow: [
        { tone: 'blue',   icon: '⏱️', title: 'Speed',              text: 'Market-based is faster. Interventionist takes time.' },
        { tone: 'amber',  icon: '£',        title: 'Fiscal cost',        text: 'Market-based is cheaper. Interventionist is costlier.' },
        { tone: 'purple', icon: '👥', title: 'Distributional impact', text: 'Market-based can widen gaps. Interventionist can reduce them.' }
      ],

      conclusion: { title: 'Big idea', text: 'The best supply-side strategy depends on the problem – incentives, skills, infrastructure or innovation.' },
      examEdge: 'Strong evaluation avoids saying \'supply-side\' as if it is one policy – split the answer into market-based and interventionist measures.'
    },

    /* ----- CARD 4 – Evaluating supply-side policy ----- */
    {
      id: 'evaluating-supply-side',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 4 of 4',
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
      examEdge: 'The strongest judgement balances long-run benefits against short-run limits – especially time lags, cost and distributional trade-offs.'
    }

  ]
};
