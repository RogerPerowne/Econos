/* ============================================================
   ECONOS — Link It · Chain station data
   Inflation: build a causal chain of economic reasoning
   ============================================================ */

window.ECONOS_LINK_CHAIN = {
  topic:        'Causes of Inflation & Deflation',
  sessionLabel: 'Session 2 of 3: Link',
  backUrl:      'link_inflation_intro.html',
  nextUrl:      'link_inflation_diagram.html',

  stations: [
    { id: 'context', label: 'Use the context',    href: 'link_inflation_context.html' },
    { id: 'chain',   label: 'Build the chain',    href: 'link_inflation_chain.html'   },
    { id: 'diagram', label: 'Diagram connector',  href: 'link_inflation_diagram.html' },
    { id: 'depends', label: 'It depends on',     href: 'link_inflation_depends.html' },
    { id: 'judge',   label: 'Make the judgement', href: 'link_inflation_judge.html' }
  ],
  currentStationIdx: 1,

  eyebrow:     'Build the Chain',
  instruction: 'Tap tiles in the correct order to complete the chain. Each step should lead clearly to the next.',

  chains: [
    /* ── 1. Cost-push (energy / supply shock) ── */
    {
      id: 'cost-push',
      scenario: {
        icon:  '⚡',
        label: 'Scenario',
        text:  'A sharp rise in global oil and gas prices follows a major supply disruption. Energy-intensive industries immediately report soaring input costs.'
      },
      anchor: 'Firms face higher production and energy costs',
      tiles: [
        {
          id:   'cp-step1',
          icon: '📉',
          text: 'SRAS shifts left, reducing output',
          pos:  0
        },
        {
          id:   'cp-step2',
          icon: '💰',
          text: 'Firms pass costs on as higher prices',
          pos:  1
        },
        {
          id:   'cp-step3',
          icon: '📊',
          text: 'CPI rises — cost-push inflation',
          pos:  2
        },
        {
          id:   'cp-dist1',
          icon: '🛒',
          text: 'Consumer confidence surges upward',
          pos:  null
        },
        {
          id:   'cp-dist2',
          icon: '📈',
          text: 'AD shifts right on rising incomes',
          pos:  null
        },
        {
          id:   'cp-dist3',
          icon: '🏦',
          text: 'Bank of England cuts interest rates',
          pos:  null
        }
      ],
      explain: [
        {
          pos:  0,
          text: 'Higher energy costs raise firms\' average costs of production. On the AD/AS diagram, SRAS shifts leftward — the economy produces less at every price level, creating stagflationary pressure.'
        },
        {
          pos:  1,
          text: 'To protect profit margins, firms raise their output prices. This is the transmission mechanism from higher input costs to consumer prices — sometimes called a cost mark-up.'
        },
        {
          pos:  2,
          text: 'As prices across the economy rise, CPI increases. This is cost-push inflation: the price level rises even though there has been no increase in aggregate demand.'
        }
      ],
      examBridge: '"An oil-price shock shifts SRAS leftward; firms facing squeezed margins raise output prices, transmitting higher input costs into CPI — a classic cost-push inflation where rising prices are accompanied by falling real output."',

      prompts: [
        'What happens to firms\' output or prices as costs rise?',
        'How does this affect the general price level?',
        'What is the wider effect on households and real incomes?'
      ],
      modelAnswers: [
        'Firms face squeezed profit margins and respond by cutting output and/or raising prices — on the AD/AS diagram, SRAS shifts leftward.',
        'The leftward SRAS shift raises the equilibrium price level. CPI increases, producing cost-push inflation even without any change in aggregate demand.',
        'Higher prices erode households\' real wages and purchasing power. Real incomes fall, reducing consumer spending and potentially deepening the slowdown.'
      ],
      vocab: ['SRAS', 'cost-push', 'price level', 'CPI', 'real incomes', 'purchasing power', 'profit margins', 'stagflation']
    }
  ]
};
