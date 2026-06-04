/* ==========================================================================
   Supply-side Policies — Edexcel A Theme 2.6.3.

   Six-card Learn-It build assembled from Roger's mockup pipeline (six
   ChatGPT mockup images, 2026-06-04). Pedagogy:
     C1 Sequential flow chain — supply-side overview, two families, outcomes
     C2 Sequential flow chain — Market-based reforms (6 → 3 → 6 reform chain)
     C3 Spectrum / regime grid — Interventionist productivity engine
     C4 Side-by-side pair + EDL SRAS-shift-right hero — how it shifts AS
     C5 Side-by-side pair — Strengths, limits and time lags
     C6 Evidence-then-verdict — exam toolkit (diagnose, trace, judge)

   Completes the Theme 2.6 macro-policy trio (fiscal v0.46.0, monetary
   v0.47.0). Third production use of EDL — Card 4's `sras-shift-right`
   intent is the first non-AD shift used on shipped content.
   ========================================================================== */
window.ECONOS_TOPIC = {
  id:          'supply-side-policies',
  topicNum:    '2.6.3',
  theme:       'Theme 2 · The National and Global Economy',
  title:       'Supply-side Policies',
  estTime:     '~15 min',
  goal:        'Raise productive capacity and efficiency through market-based and interventionist reforms — and explain why supply-side policy is slower but more sustainable than demand-side stimulus.',
  intro: {
    summary:  'Supply-side policy is the long-run productive-capacity toolkit. Step through the two families (market-based and interventionist), see how each shifts SRAS or LRAS, weigh the strengths and limits, and finish with the exam toolkit examiners reward.',
    doInThis: 'Walk the supply-side transmission from policy to capacity, distinguish market-based reforms from interventionist investment, see how each shifts SRAS or LRAS on the AD/AS diagram, weigh the time-lag trade-offs, and finish with the diagnose-trace-judge exam toolkit.',
    outcomes: [
      'Distinguish supply-side from demand-side policy',
      'Distinguish market-based from interventionist reforms',
      'Name policies that mainly shift SRAS vs LRAS',
      'Trace the supply-side transmission chain (policy → productivity → costs → capacity → outcomes)',
      'Evaluate supply-side policy using time horizon, cost and bottleneck-fit',
      'Apply the four-step exam toolkit (identify, name, trace, evaluate)'
    ],
    tip:      'Supply-side policy targets capacity, not spending. Always name the bottleneck first, then the channel — incentives, skills, competition, infrastructure or flexibility.',
    stages: [
      { num: 1, name: 'Learn it', sub: '6 cards', state: 'current' },
      { num: 2, name: 'Link it',  sub: 'Coming soon', state: 'locked' },
      { num: 3, name: 'Land it',  sub: 'Coming soon', state: 'locked' }
    ]
  },
  cards: [

    /* ====================================================================
       CARD 1 — Supply-side policy: the big picture
       Pattern: Sequential flow chain (policy → productivity → AS shifts →
       outcomes) + Side-by-side pair (two families) + Why-it-matters trio.
       ==================================================================== */
    {
      id: 'supply-side-big-picture',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 1 of 6',
      title: 'Supply-side policy – the big picture',
      lede: 'Supply-side policies aim to raise productive capacity and efficiency, so the economy can grow faster without as much inflationary pressure.',
      ledeStyle: 'plain',

      tip: { icon: '🔒', tone: 'green', text: 'Supply-side policy works by improving the economy\'s <strong>ability to produce</strong>.' },

      flowTitle: 'THE CORE IDEA',
      flowEmoji: '💡',
      flow: [
        { tone: 'green',  icon: '🏛️', title: 'Two policy families',          sub: 'Improve incentives &amp; competition (market-based) <strong>or</strong> build productive capacity (interventionist).' },
        { tone: 'blue',   icon: '📈', title: 'Higher productivity, participation and efficiency', sub: 'More output per hour, more people in work, fewer wasted resources.' },
        { tone: 'purple', icon: '📊', title: 'SRAS and / or LRAS shift right', sub: 'SRAS shifts on lower costs; LRAS shifts on bigger capacity.' },
        { tone: 'amber',  icon: '🎯', title: 'Higher trend growth, lower inflation pressure', sub: 'Real GDP rises along with potential output.' },
        { tone: 'rose',   icon: '🌍', title: 'Lower unemployment, improved competitiveness',    sub: 'Structural unemployment falls; the economy competes better abroad.' }
      ],

      pairLabel: 'TWO FAMILIES OF POLICY',
      pairEmoji: '⚖️',
      left: {
        tone: 'green', icon: '🏛️', iconStyle: 'circle',
        label: 'Market-based',
        text: '<p style="margin:0 0 8px;font-size:13.5px;color:#0B1426;line-height:1.6;">Uses prices, incentives and competition to lift efficiency.</p><ul style="margin:0;padding:0 0 0 18px;font-size:12.5px;color:#475569;line-height:1.7;"><li>Lower direct taxes</li><li>Deregulation</li><li>Privatisation / contestability</li><li>Labour-market flexibility</li></ul>'
      },
      right: {
        tone: 'purple', icon: '🏗️', iconStyle: 'circle',
        label: 'Interventionist',
        text: '<p style="margin:0 0 8px;font-size:13.5px;color:#0B1426;line-height:1.6;">Government invests to raise capacity where markets under-provide.</p><ul style="margin:0;padding:0 0 0 18px;font-size:12.5px;color:#475569;line-height:1.7;"><li>Education and training</li><li>Infrastructure</li><li>R&amp;D and innovation</li><li>Housing and childcare</li></ul>'
      },

      causesLabel: 'WHY IT MATTERS',
      causesEmoji: '🎯',
      causesStyle: 'tinted-flat',
      causesCols: 3,
      causes: [
        { tone: 'blue',   icon: '📈', head: 'Productivity',    body: 'More output per worker raises real incomes without needing more inputs.' },
        { tone: 'green',  icon: '🔁', head: 'Flexibility',     body: 'Resources reallocate more easily when shocks hit – the economy adapts.' },
        { tone: 'purple', icon: '❤️', head: 'Living standards', body: 'Sustainable growth matters more than a short-lived demand boost.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: '<strong>Supply-side policy targets capacity</strong> – not just spending. It works on what the economy <em>can</em> produce, not what it currently demands.' },

      conclusion: { title: 'Big idea', text: 'The goal is <strong>non-inflationary growth</strong> – more output because the economy can produce more efficiently.' },
      examEdge: 'Name the channel – <strong>incentives, skills, competition, infrastructure or flexibility</strong> – before explaining the effect. A* answers also state whether the policy mainly shifts SRAS or LRAS.',
      tipLate: {
        icon: '⚠️',
        tone: 'rose',
        text: '<strong>Common trap — "Supply-side = right-wing politics."</strong> No. Supply-side has <strong>two families</strong>. <em>Market-based</em> reforms (tax cuts, deregulation, privatisation) lean centre-right. <em>Interventionist</em> reforms (apprenticeship levy, HS2, R&amp;D funding, childcare) lean centre-left. <strong>Both raise productive capacity</strong>; the disagreement is about <em>which mechanism</em> works, not whether supply-side matters. Treating supply-side as a political slogan loses marks – treat it as a toolkit.'
      }
    },

    /* ====================================================================
       CARD 2 — Market-based supply-side policies
       Pattern: Sequential flow chain (6 inputs → 3 mechanisms → 6 outcomes)
       + 3-tile when-supporters-like-it + Side-by-side gains-vs-concerns pair.
       The 3-layer reform chain in the mockup is rendered as causes (6 tools)
       + flow (3 mechanisms) + flowBottom (6 outcomes).
       ==================================================================== */
    {
      id: 'market-based-supply-side',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 2 of 6',
      title: 'Market-based supply-side policies',
      lede: 'These reforms try to improve incentives, flexibility and competition so markets work more efficiently.',
      ledeStyle: 'plain',

      tip: { icon: '🔒', tone: 'green', text: 'Market-based reforms rely on <strong>incentives and competition</strong> to lift efficiency.' },

      causesFirst: true,
      causesLabel: 'THE REFORM TOOLS',
      causesEmoji: '🛠️',
      causesStyle: 'tinted-flat',
      causesCols: 3,
      causes: [
        { tone: 'green', icon: '🏷️', head: 'Lower income tax',                  body: 'Raises take-home pay → stronger work incentive.' },
        { tone: 'green', icon: '🏢', head: 'Lower corporation tax',              body: 'Higher post-tax returns → more enterprise and investment.' },
        { tone: 'green', icon: '👥', head: 'Benefit reform',                     body: 'Reduces the unemployment trap and sharpens job-search.' },
        { tone: 'green', icon: '⚙️', head: 'Deregulation',                       body: 'Lowers compliance costs and entry barriers.' },
        { tone: 'green', icon: '🏆', head: 'Privatisation / contestability',     body: 'Threat of competition pressures firms to cut X-inefficiency.' },
        { tone: 'green', icon: '🔄', head: 'Labour-market flexibility',          body: 'Easier hiring, firing and pay-setting → faster reallocation.' }
      ],

      flowTitle: 'WHAT THEY CHANGE',
      flowEmoji: '🔗',
      flow: [
        { tone: 'green',  icon: '📈', title: 'Stronger incentives', sub: 'Higher reward to work, save, invest and start a business.' },
        { tone: 'purple', icon: '🏆', title: 'More competition',     sub: 'Lower entry barriers and contestable markets sharpen rivalry.' },
        { tone: 'blue',   icon: '🔀', title: 'Greater flexibility',  sub: 'Labour and capital reallocate faster towards their best use.' }
      ],

      flowBottomTitle: 'WHAT THEY DELIVER',
      flowBottomEmoji: '🎯',
      flowBottom: [
        { tone: 'green',  icon: '🏃', title: 'More work',                       sub: 'Sharper work incentives.' },
        { tone: 'blue',   icon: '📈', title: 'More enterprise and investment', sub: 'Higher post-tax returns.' },
        { tone: 'purple', icon: '💷', title: 'Lower costs',                     sub: 'Competition + deregulation.' },
        { tone: 'amber',  icon: '🔁', title: 'Faster reallocation',            sub: 'Labour and capital move.' },
        { tone: 'rose',   icon: '📊', title: 'Higher productivity',            sub: 'Output per hour rises.' },
        { tone: 'green',  icon: '🎯', title: 'More potential output',           sub: 'LRAS shifts right.' }
      ],

      causes2Label: 'WHEN SUPPORTERS LIKE IT',
      causes2Emoji: '⭐',
      causes2Style: 'tinted-flat',
      causes2Cols: 3,
      causes2: [
        { tone: 'green',  icon: '👥', head: 'Rigid labour markets', body: 'Easier hiring and mobility may help.' },
        { tone: 'purple', icon: '📊', head: 'Weak enterprise',      body: 'Lower business taxes may raise investment.' },
        { tone: 'blue',   icon: '🛡️', head: 'Protected markets',    body: 'Competition can reduce X-inefficiency.' }
      ],

      pairLabel: 'WHAT TO WATCH',
      pairEmoji: '⚖️',
      left: {
        tone: 'green', icon: '✅', iconStyle: 'circle',
        label: 'Potential gains',
        text: '<ul style="margin:0;padding:0 0 0 18px;font-size:13px;color:#0B1426;line-height:1.8;"><li>Innovation</li><li>Efficiency</li><li>Entrepreneurship</li><li>Lower structural unemployment</li></ul>'
      },
      right: {
        tone: 'rose', icon: '⚠️', iconStyle: 'circle',
        label: 'Possible concerns',
        text: '<ul style="margin:0;padding:0 0 0 18px;font-size:13px;color:#0B1426;line-height:1.8;"><li>Inequality</li><li>Weaker worker security</li><li>Under-provision of merit goods</li><li>Not all markets become more competitive in practice</li></ul>'
      },

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: '<strong>Do not just list a reform</strong> – explain how it changes incentives or competition.' },

      conclusion: { title: 'Big idea', text: 'Market-based supply-side policy tries to let <strong>prices, profits and competition</strong> do more of the work.' },
      examEdge: 'For evaluation, ask whether the market was <em>actually distorted</em> and whether the reform <em>creates better incentives in reality</em>. Cutting corporation tax matters little if firms were already cash-rich – the binding constraint matters.',
      economistQuote: {
        portraitKey: 'economistHayek',
        tone: 'amber',
        label: 'Economist insight: Hayek on the limits of central design',
        quote: 'The curious task of economics is to demonstrate to men how little they really know about what they imagine they can design.',
        attribution: 'Friedrich Hayek, <em>The Fatal Conceit</em> (1988)'
      }
    },

    /* ====================================================================
       CARD 3 — Interventionist supply-side policies
       Pattern: Spectrum / regime grid (the productivity-engine inputs and
       outputs) + Why-government-may-act trio + 4-tile limits grid.
       Mockup shows hub-and-spoke; rendered here as 5-col input grid + flow
       to outputs — same teaching content without the radial layout.
       ==================================================================== */
    {
      id: 'interventionist-supply-side',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 3 of 6',
      title: 'Interventionist supply-side policies',
      lede: 'Here, government takes a more active role in building human capital, infrastructure and innovation.',
      ledeStyle: 'plain',

      tip: { icon: '🔒', tone: 'green', text: 'Interventionist policies raise capacity where <strong>markets may under-invest</strong>.' },

      causesFirst: true,
      causesLabel: 'THE PRODUCTIVITY ENGINE – INPUTS',
      causesEmoji: '⚙️',
      causesStyle: 'tinted-flat',
      causesCols: 5,
      causes: [
        { tone: 'green',  icon: '🎓', head: 'Education and training',        body: 'Builds the human capital the economy needs to compete.' },
        { tone: 'blue',   icon: '👥', head: 'Apprenticeships and skills',    body: 'Closes specific skill gaps employers cannot fill at scale.' },
        { tone: 'amber',  icon: '🌉', head: 'Infrastructure investment',     body: 'Transport, energy and digital networks lower business costs.' },
        { tone: 'purple', icon: '🧪', head: 'R&D and innovation support',    body: 'Grants, tax credits and patent protection – drives long-run growth.' },
        { tone: 'rose',   icon: '🏠', head: 'Housing, childcare and health', body: 'Enables mobility and participation – especially for women and lower-paid workers.' }
      ],

      flowTitle: 'WHAT THEY DELIVER',
      flowEmoji: '📈',
      flow: [
        { tone: 'green',  icon: '⭐', title: 'Better skills',                 sub: 'A more capable workforce.' },
        { tone: 'blue',   icon: '💷', title: 'Lower business costs',          sub: 'Cheaper transport, energy and services.' },
        { tone: 'purple', icon: '📍', title: 'Easier movement of workers',    sub: 'Reduced barriers to mobility.' },
        { tone: 'amber',  icon: '💡', title: 'Faster innovation and adoption', sub: 'New ideas become productive sooner.' },
        { tone: 'rose',   icon: '📈', title: 'Stronger long-run growth',      sub: 'Higher living standards over time.' }
      ],

      causes2Label: 'WHY GOVERNMENT MAY ACT',
      causes2Emoji: '🏛️',
      causes2Style: 'tinted-flat',
      causes2Cols: 3,
      causes2: [
        { tone: 'green',  icon: '↗️', head: 'Positive externalities', body: 'Firms and households may underinvest in training or research – social returns exceed private returns.' },
        { tone: 'blue',   icon: '🧩', head: 'Coordination problems', body: 'Big networks like transport and energy need planning and joint action.' },
        { tone: 'purple', icon: '📍', head: 'Regional gaps',           body: 'Targeted investment may spread growth and opportunity across regions.' }
      ],

      causes3Label: 'LIMITS',
      causes3Emoji: '🛡️',
      causes3Style: 'tinted-flat',
      causes3Cols: 4,
      causes3: [
        { tone: 'green',  icon: '💷', head: 'Expensive for the public finances', body: 'Requires high upfront spending.' },
        { tone: 'blue',   icon: '⏰', head: 'Long time lags',                    body: 'Benefits often take years to emerge.' },
        { tone: 'amber',  icon: '⚠️', head: 'Risk of government failure',        body: 'Picking winners can waste resources.' },
        { tone: 'purple', icon: '🎖️', head: 'Results depend on delivery quality', body: 'Poor design or execution limits impact.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'A training scheme is <strong>not valuable just because it is expensive</strong> – the key question is whether productivity rises.' },

      conclusion: { title: 'Big idea', text: 'Interventionist policy tries to build the <strong>economy\'s productive foundations</strong> – especially where market incentives alone are too weak.' },
      examEdge: 'Separate the <strong>spending itself</strong> from the <strong>long-run capacity effect</strong> – explain how the policy raises human capital, mobility or innovation. Naming the externality (e.g. social returns to R&D ≈ 20–30%, private returns ~7–14%) lifts B-band answers to A*.',
      economistQuote: {
        portraitKey: 'economistMazzucato',
        tone: 'amber',
        label: 'Economist insight: Mazzucato on the entrepreneurial state',
        quote: 'Far from being the inert, lumbering bureaucracy of caricature, the state has often been the lead risk-taker — funding the kind of long-shot innovation that markets, focused on short-run returns, would never bankroll alone.',
        attribution: 'Mariana Mazzucato, <em>The Entrepreneurial State</em> (2013)'
      }
    },

    /* ====================================================================
       CARD 4 — How supply-side policy shifts the economy
       Pattern: Decompose-a-diagram (EDL sras-shift-right hero) + Side-by-side
       SRAS-vs-LRAS pair + Sequential transmission chain + Demand-side
       contrast. Third production use of EDL — first non-AD intent.
       ==================================================================== */
    {
      id: 'supply-side-ad-as',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 4 of 6',
      title: 'How supply-side policy shifts the economy',
      lede: 'Some measures lower business costs quite quickly, while others mainly lift long-run productive capacity.',
      ledeStyle: 'plain',

      tip: { icon: '🔒', tone: 'green', text: 'Some policies mainly shift <strong>SRAS</strong>, others mainly shift <strong>LRAS</strong> – and some can do both.' },

      // Merged stepped diagram with a Classical ↔ Keynesian toggle, teaching
      // supply-side policy on TWO timescales: SHORT run (lower unit costs shift
      // supply right today) and LONG run (productive capacity / potential
      // output rises). The schools agree on the short-run cost effect but
      // disagree on the long run — Classical: capacity rise automatically
      // raises output; Keynesian: it raises potential, but actual output lags
      // until demand catches up.
      interactiveDiagram: {
        svgKey: 'supplySideSrLr',
        label: 'SUPPLY-SIDE POLICY — SHORT RUN VS LONG RUN',
        emoji: '📊',
        layers: [
          'c-sras1-dash', 'c-sras2', 'c-e2', 'c-sr-arrow', 'c-lras2', 'c-lr-arrow', 'c-growth',
          'k-as1-dash', 'k-as2', 'k-as2-dash', 'k-e2', 'k-sr-arrow',
          'k-as3', 'k-e3', 'k-lr-arrow', 'k-gap', 'k-yf2'
        ],
        inverseLayers: ['c-sras1-solid', 'k-as1-solid'],
        perspectives: ['classical', 'keynesian'],
        perspectiveLabels: { classical: 'Classical view', keynesian: 'Keynesian view' },
        views: [
          {
            label: 'Starting point', show: [],
            classical: {
              tone: 'purple',
              head: 'Classical view — at potential at E₁.',
              body: ['AD meets SRAS₁ on the <strong>vertical LRAS₁</strong> at E₁: output is at potential Yf₁, price level P₁.', 'In the long run the economy always sits on LRAS — so the only way to raise output sustainably is to move LRAS.'] },
            keynesian: {
              tone: 'amber',
              head: 'Keynesian view — spare capacity at E₁.',
              body: ['AD meets the reverse-L AS₁ on its <strong>rising range</strong>, at E₁ — output Y₁ sits below capacity Yf₁.', 'There are idle resources: actual output is limited by demand, not by supply.'] }
          },
          {
            label: 'Short run: costs fall',
            show: ['c-sras1-dash', 'c-sras2', 'c-e2', 'c-sr-arrow', 'k-as1-dash', 'k-as2', 'k-e2', 'k-sr-arrow'],
            classical: {
              tone: 'green',
              head: 'Short run — lower costs shift SRAS right to SRAS₂.',
              body: ['Cheaper energy, lower business taxes, lighter regulation cut unit costs <em>today</em>.', 'Output rises and the price level falls (E₂) — but output is now <strong>above potential Yf₁</strong>, so the boost is temporary until capacity catches up.'] },
            keynesian: {
              tone: 'cyan',
              head: 'Short run — lower costs drop the price floor.',
              body: ['Cheaper inputs lower firms\' unit costs, so the reverse-L\'s <strong>price floor falls</strong> (AS₁ → AS₂ — a downward move).', 'The economy moves to E₂: a <em>modest</em> rise in output and a lower price level — close to capacity, much of the cost cut shows up as lower prices rather than more output.'] }
          },
          {
            label: 'Long run: capacity rises',
            show: ['c-sras1-dash', 'c-sras2', 'c-e2', 'c-lras2', 'c-lr-arrow', 'k-as1-dash', 'k-as2-dash', 'k-as3', 'k-e3', 'k-lr-arrow'],
            classical: {
              tone: 'purple',
              head: 'Long run — capacity rises: LRAS₁ → LRAS₂.',
              body: ['Deeper reforms (skills, infrastructure, R&amp;D) raise <strong>productive capacity</strong> — potential output moves from Yf₁ to Yf₂.', 'LRAS shifts right to meet E₂: the higher output is now <em>backed by real capacity</em>, not just lower costs.'] },
            keynesian: {
              tone: 'green',
              head: 'Long run — capacity slides parallel-right (AS₃).',
              body: ['Now the capacity wall itself moves right: AS₂ → AS₃ is a <strong>parallel rightward shift</strong> (the floor stays put, potential rises to Yf₂).', 'Output rises again to E₃ and the price level falls further as the economy moves down AD.'] }
          },
          {
            label: 'The verdict', show: ['c-sras1-dash', 'c-sras2', 'c-e2', 'c-lras2', 'c-lr-arrow', 'c-growth', 'k-as1-dash', 'k-as2-dash', 'k-as3', 'k-e3', 'k-lr-arrow', 'k-gap', 'k-yf2'],
            classical: {
              tone: 'green',
              head: 'Verdict — sustainable growth, Yf₁ → Yf₂.',
              body: ['Real output is permanently higher and the price level lower: faster growth <em>with</em> lower inflation.', 'This is supply-side policy\'s prize — and the only way to get it.'],
              analysis: 'Classical verdict: supply-side policy is the <strong>only</strong> lever that raises long-run output. Cost cuts give a short-run lift; genuine capacity gains shift LRAS right and lock in faster growth with lower inflation. Demand-side policy can only move you <em>along</em> a given LRAS — it can\'t move LRAS itself.' },
            keynesian: {
              tone: 'rose',
              head: 'Verdict — potential rose, but output LAGS it.',
              body: ['Reform lifted potential to Yf₂ — but with demand unchanged, <strong>actual output Y₃ sits below the new potential</strong>.', 'A fresh output gap opens (rose arrow): the extra capacity goes partly unused until demand rises to meet it.'],
              analysis: 'Keynesian verdict: supply-side reform helps, but in a demand-constrained economy it raises <em>potential</em> faster than actual output. Building capacity is not enough — <strong>someone has to buy the output</strong>. The full benefit needs demand-side support alongside it; on its own, supply-side policy can leave the economy below its new potential.' }
          }
        ]
      },

      pairLabel: 'SRAS VS LRAS',
      pairEmoji: '⚖️',
      left: {
        tone: 'green', icon: '⏱️', iconStyle: 'circle',
        label: 'SRAS effects (faster)',
        text: '<p style="margin:0 0 8px;font-size:13.5px;color:#0B1426;line-height:1.6;">SRAS shifts right because <strong>unit costs fall</strong> or productivity improves today.</p><ul style="margin:0;padding:0 0 0 18px;font-size:12.5px;color:#475569;line-height:1.7;"><li>Lower business taxes</li><li>Better logistics</li><li>Cheaper energy</li><li>Reduced red tape</li></ul>'
      },
      right: {
        tone: 'purple', icon: '🌄', iconStyle: 'circle',
        label: 'LRAS effects (slower, deeper)',
        text: '<p style="margin:0 0 8px;font-size:13.5px;color:#0B1426;line-height:1.6;">LRAS shifts right because <strong>factor quality or quantity rises</strong> — the productive frontier expands.</p><ul style="margin:0;padding:0 0 0 18px;font-size:12.5px;color:#475569;line-height:1.7;"><li>Skills and education</li><li>Infrastructure investment</li><li>Innovation and R&amp;D</li><li>Higher labour participation</li></ul>'
      },

      flowTitle: 'THE TRANSMISSION CHAIN',
      flowEmoji: '🔗',
      flow: [
        { tone: 'green',  icon: '🏛️', title: 'Policy',     sub: 'Supply-side reforms and incentives.' },
        { tone: 'blue',   icon: '⚙️', title: 'Improves',   sub: 'Productivity, flexibility and competition.' },
        { tone: 'purple', icon: '%',  title: 'Leads to',   sub: 'Lower unit costs and higher potential output.' },
        { tone: 'amber',  icon: '📊', title: 'Results in', sub: 'Stronger growth · lower inflation · lower unemployment · stronger competitiveness.' }
      ],

      causesLabel: 'DO NOT CONFUSE IT WITH DEMAND-SIDE POLICY',
      causesEmoji: '🚫',
      causesStyle: 'tinted-flat',
      causesCols: 3,
      causes: [
        { tone: 'amber', icon: '🛒', head: 'Demand-side policy',    body: 'Boosts spending <strong>now</strong>. Acts on AD (fiscal G/T or monetary rates/QE).' },
        { tone: 'green', icon: '🏭', head: 'Supply-side policy',    body: 'Raises <strong>capacity and efficiency</strong>. Acts on SRAS or LRAS.' },
        { tone: 'blue',  icon: '⚖️', head: 'Strong supply helps the rest too', body: 'Higher capacity improves the budget balance and balance of payments over time.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'A <strong>movement in AD</strong> is not the same as a <strong>shift in SRAS or LRAS</strong>. The diagram you draw must match the mechanism you describe.' },

      conclusion: { title: 'Big idea', text: 'The most powerful supply-side policies help the economy grow faster <strong>with less inflation pressure</strong>.' },
      examEdge: 'If you use AD-AS, state clearly whether <strong>SRAS, LRAS or both</strong> are shifting – and why. SRAS shifts on costs <em>today</em>; LRAS shifts on capacity <em>over years</em>. A reform like a sugar-tax cut might shift SRAS via business costs but barely touch LRAS.'
    },

    /* ====================================================================
       CARD 5 — Strengths, limits and time lags
       Pattern: Side-by-side pair (strengths vs limits) + Sequential flow
       chain (time horizon) + 4-tile what-determines-success grid.
       ==================================================================== */
    {
      id: 'supply-side-strengths-limits',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 5 of 6',
      title: 'Strengths, limits and time lags',
      lede: 'Supply-side policy can be powerful, but it is usually slower and harder to deliver than demand-side policy.',
      ledeStyle: 'plain',

      tip: { icon: '🔒', tone: 'green', text: 'The biggest gains are often <strong>long run</strong> – but the biggest frustration is the <strong>delay</strong>.' },

      pairLabel: 'THE BALANCE',
      pairEmoji: '⚖️',
      pairFirst: true,
      left: {
        tone: 'green', icon: '✅', iconStyle: 'circle',
        label: 'Strengths',
        text: '<ul style="margin:0;padding:0 0 0 18px;font-size:13px;color:#0B1426;line-height:1.8;"><li>Can raise <strong>non-inflationary</strong> growth</li><li>Reduces structural unemployment</li><li>Improves competitiveness</li><li>May ease inflationary pressure by raising productivity</li></ul>'
      },
      right: {
        tone: 'rose', icon: '❌', iconStyle: 'circle',
        label: 'Limits',
        text: '<ul style="margin:0;padding:0 0 0 18px;font-size:13px;color:#0B1426;line-height:1.8;"><li>Slow impact</li><li>High fiscal cost for interventionist policies</li><li>Uncertain results</li><li>Political resistance</li><li>Some reforms may worsen inequality or the environment</li></ul>'
      },

      flowTitle: 'TIME HORIZON',
      flowEmoji: '⏰',
      flow: [
        { tone: 'green',  icon: '⏱️', title: 'Short run',  sub: 'Effects often limited.' },
        { tone: 'blue',   icon: '📊', title: 'Medium run', sub: 'Confidence, costs and flexibility may begin to improve.' },
        { tone: 'purple', icon: '📈', title: 'Long run',   sub: 'Biggest gains if productivity, skills and infrastructure genuinely rise.' }
      ],

      causesLabel: 'WHAT DETERMINES SUCCESS?',
      causesEmoji: '🎯',
      causesStyle: 'numbered',
      causesCols: 4,
      causes: [
        { tone: 'purple', icon: '🔍', head: 'Correct diagnosis of the bottleneck', body: 'Are you fixing what is actually constraining capacity?' },
        { tone: 'purple', icon: '🏛️', head: 'Quality of institutions and delivery', body: 'Good policies executed badly still fail.' },
        { tone: 'purple', icon: '🧩', head: 'Complementary demand conditions',      body: 'Capacity built without demand sits idle.' },
        { tone: 'purple', icon: '👥', head: 'Whether firms / workers actually respond to the incentives', body: 'Behavioural response is the binding question.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'A <strong>great policy on paper</strong> can still fail if delivery is weak. The UK productivity puzzle (output per worker flat since 2008) is exactly this story – good policies, poor execution.' },

      conclusion: { title: 'Big idea', text: 'Supply-side policy is strongest when it fixes the economy\'s <strong>real bottlenecks</strong> – not when it sprays money or deregulation everywhere.' },
      examEdge: 'Evaluation should focus on <strong>time horizon, cost, scale of impact and fit</strong>. Cite UK productivity flatness since 2008 as the recurring evidence base – it is the bottleneck the spec keeps returning to.'
    },

    /* ====================================================================
       CARD 6 — The supply-side policy exam toolkit
       Pattern: Evidence-then-verdict — 6-tile what-it-can-solve grid, 3-tile
       common-mistakes warning, 4-step how-to-write-it flow, 4-tile
       judgement questions. Mirror role of fiscal/monetary Card 6, but
       framed as a diagnostic toolkit rather than strengths-and-limits.
       ==================================================================== */
    {
      id: 'supply-side-exam-toolkit',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 6 of 6',
      title: 'The supply-side policy exam toolkit',
      lede: 'Strong essays move beyond definition – they diagnose the problem, trace the mechanism and judge the likely impact.',
      ledeStyle: 'plain',

      tip: { icon: '🔒', tone: 'green', text: 'Good answers start by asking <strong>what bottleneck the economy actually has</strong>.' },

      causesFirst: true,
      causesLabel: 'WHAT SUPPLY-SIDE POLICY CAN SOLVE',
      causesEmoji: '💡',
      causesStyle: 'tinted-flat',
      causesCols: 3,
      causes: [
        { tone: 'green', icon: '📈', head: 'Low productivity',                    body: 'Skills gaps, weak innovation and low investment.' },
        { tone: 'green', icon: '👥', head: 'Structural unemployment',             body: 'Skills mismatch, frictional and regional barriers.' },
        { tone: 'green', icon: '🏢', head: 'Weak enterprise',                     body: 'Low competition, small firms and limited scale.' },
        { tone: 'green', icon: '🌉', head: 'Poor infrastructure',                 body: 'Transport, digital and energy constraints limit output.' },
        { tone: 'green', icon: '🚶', head: 'Low labour mobility / participation', body: 'Geography, caring duties and low incentives.' },
        { tone: 'green', icon: '🌍', head: 'Weak international competitiveness',  body: 'High costs, low quality or adverse regulation.' }
      ],

      causes2Label: 'COMMON MISTAKES',
      causes2Emoji: '⚠️',
      causes2Style: 'tinted-flat',
      causes2Cols: 3,
      causes2: [
        { tone: 'rose', icon: '⚠️', head: 'Confusing supply-side with demand-side', body: 'Mixing up aims, tools and channels.' },
        { tone: 'rose', icon: '⏱️', head: 'Assuming every reform works quickly',   body: 'Ignoring time lags and implementation risk.' },
        { tone: 'rose', icon: '📋', head: 'Listing policies without tracing the mechanism or time horizon', body: 'No chain, no evaluation.' }
      ],

      flowTitle: 'HOW TO WRITE IT',
      flowEmoji: '✏️',
      flow: [
        { tone: 'purple', icon: '🔍', title: 'Identify the bottleneck', sub: 'Use data and context to diagnose the core constraint.' },
        { tone: 'purple', icon: '🏛️', title: 'Name the policy',          sub: 'State the specific supply-side tool and how it works.' },
        { tone: 'purple', icon: '🔗', title: 'Trace the supply-side chain', sub: 'Productivity, costs, incentives, capacity – step by step.' },
        { tone: 'purple', icon: '⚖️', title: 'Evaluate',                  sub: 'Time lag, cost, scale, trade-offs. Judge the likely impact.' }
      ],

      causes3Label: 'GOOD JUDGEMENT QUESTIONS',
      causes3Emoji: '❓',
      causes3Style: 'tinted-flat',
      causes3Cols: 4,
      causes3: [
        { tone: 'blue', icon: '🎯', head: 'Which bottleneck matters most?',    body: 'Diagnose before prescribing.' },
        { tone: 'blue', icon: '⚖️', head: 'Market-based or interventionist?',   body: 'Or a blend of both?' },
        { tone: 'blue', icon: '📈', head: 'SRAS, LRAS or both?',                body: 'Match the AD/AS diagram to the mechanism.' },
        { tone: 'blue', icon: '👥', head: 'Who gains and who may lose?',        body: 'Distributional effects of the reform.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Supply-side policy is <strong>not automatically good</strong> – it depends on fit, delivery and time horizon.' },

      conclusion: { title: 'Big idea', text: 'The best evaluation asks whether the policy raises productive potential in a <strong>meaningful, sustainable way</strong>.' },
      examEdge: 'Top answers <strong>diagnose, trace and judge</strong> – they do not just recite a list of reforms. A four-mark structure: identify the UK bottleneck (e.g. productivity puzzle), name a fitting policy (e.g. apprenticeship levy), trace the channel (skills → output per hour → LRAS), evaluate (time lag, scale, who responds).'
    },

    /* ====================================================================
       CARD 7 — DEEPEN: UK CONTEXT — The UK productivity puzzle
       Pattern: Decompose-a-diagram (chart-engine `ukProductivityPuzzle`
       hero) + Sequential transmission flow + 6-tile "why it may have
       happened" causes + 4-tile "why it matters" causes2 + 2-panel
       "what could help" pair. An appendix / deepen card — not part of
       the numbered Learn It sequence.
       ==================================================================== */
    {
      id: 'uk-productivity-puzzle',
      template: 'ad-interactive',
      stepLabel: 'Deepen: UK context',
      title: 'The UK productivity puzzle',
      lede: 'Since the financial crisis, UK output per hour has grown much more slowly than before – and economists still debate why.',
      ledeStyle: 'plain',

      tip: { icon: '🔒', tone: 'green', text: 'The puzzle is not one bad year – it is a <strong>long period of unusually weak productivity growth</strong>.' },

      visualKey: 'ukProductivityPuzzle',
      visualLabel: 'THE PUZZLE',
      visualEmoji: '🧩',
      visualCaption: 'UK output per hour matched the pre-crisis trend until 2008, then flattened. The shaded gap is the "lost momentum" — productivity that would have happened on the old trajectory but didn\'t.',

      flowTitle: 'WHAT THE PUZZLE MEANS',
      flowEmoji: '🔗',
      flow: [
        { tone: 'purple', icon: '📊', title: 'Weak productivity growth', sub: 'Output per hour barely rises year on year.' },
        { tone: 'amber',  icon: '💷', title: 'Higher unit costs',         sub: 'Wages must grow more slowly, or firms charge more for less output.' },
        { tone: 'green',  icon: '👥', title: 'Slower real wage and living-standard growth', sub: 'The biggest UK macro story of the 2010s and 2020s.' }
      ],

      causesLabel: 'WHY IT MAY HAVE HAPPENED',
      causesEmoji: '❓',
      causesStyle: 'tinted-flat',
      causesCols: 3,
      causes: [
        { tone: 'green',  icon: '💰', head: 'Low investment',           body: 'Too little capital deepening and technology adoption – UK business investment ~17% of GDP vs ~22% in France/Germany.' },
        { tone: 'blue',   icon: '🎓', head: 'Skills gaps',              body: 'Human capital improves too slowly – weak vocational training, low post-18 non-graduate progression.' },
        { tone: 'amber',  icon: '🌉', head: 'Poor infrastructure',      body: 'Transport, energy and planning constraints limit business growth and clustering.' },
        { tone: 'purple', icon: '🔀', head: 'Weak diffusion',           body: 'Best practice does not spread from frontier firms – a wide and persistent productivity tail.' },
        { tone: 'rose',   icon: '🧟', head: 'Misallocation / zombie firms', body: 'Resources stuck in low-productivity uses, kept alive by cheap credit during the QE era.' },
        { tone: 'blue',   icon: '🔍', head: 'Measurement / sector mix', body: 'Services and digital quality are harder to measure – some "puzzle" may be statistical, not real.' }
      ],

      causes2Label: 'WHY IT MATTERS',
      causes2Emoji: '🎯',
      causes2Style: 'tinted-flat',
      causes2Cols: 4,
      causes2: [
        { tone: 'green',  icon: '👥', head: 'Real wages',       body: 'Less room for pay to rise without inflation.' },
        { tone: 'purple', icon: '🏛️', head: 'Public finances', body: 'Weaker growth limits tax revenue and fiscal space.' },
        { tone: 'blue',   icon: '🌍', head: 'Competitiveness', body: 'Higher unit costs can hurt exports and market share.' },
        { tone: 'amber',  icon: '⚖️', head: 'Macro trade-offs', body: 'Demand growth hits the capacity ceiling sooner – inflation pressure earlier in the cycle.' }
      ],

      pairLabel: 'WHAT COULD HELP?',
      pairEmoji: '🔧',
      left: {
        tone: 'green', icon: '🏛️', iconStyle: 'circle',
        label: 'Market-based',
        text: '<p style="margin:0 0 8px;font-size:13.5px;color:#0B1426;line-height:1.6;">Sharper incentives, more competition, easier mobility – let markets drive reallocation.</p><ul style="margin:0;padding:0 0 0 18px;font-size:12.5px;color:#475569;line-height:1.7;"><li>Competition policy + contestable markets</li><li>Tax incentives for investment (R&amp;D super-deduction)</li><li>Labour-market flexibility, easier mobility</li></ul>'
      },
      right: {
        tone: 'purple', icon: '🏗️', iconStyle: 'circle',
        label: 'Interventionist',
        text: '<p style="margin:0 0 8px;font-size:13.5px;color:#0B1426;line-height:1.6;">Direct public investment in the capabilities markets under-provide.</p><ul style="margin:0;padding:0 0 0 18px;font-size:12.5px;color:#475569;line-height:1.7;"><li>Skills (apprenticeship levy, FE reform)</li><li>Infrastructure (HS2, Crossrail, digital)</li><li>R&amp;D funding (UKRI, sector deals)</li><li>Childcare and health – participation gains</li></ul>'
      },

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Do not treat low productivity as a <strong>slogan</strong> – explain the mechanism: output per hour, unit costs, wages, growth and inflation pressure.' },

      conclusion: { title: 'Big idea', text: 'The productivity puzzle is one of the strongest <strong>real-world arguments for supply-side policy</strong>.' },
      examEdge: 'Top answers use <strong>UK context</strong> and then judge which supply-side policy best fits the actual bottleneck. Name a candidate cause, name a matching policy, and explain the channel – do not just list reforms.'
    }

  ]
};
